import { describe, it, expect } from 'vitest'
import { createElement, type ReactElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import TermsContentDefault from '../shared/Legal/TermsContent'

/**
 * Guards the shop variant of the shared Terms body.
 *
 * The 13.8.2026 compliance audit found the network's travel wording live on
 * both shops: §5 described hotel, flight and car rental search tools that
 * neither shop has, and §3 named Sembo, Trip.com and EconomyBookings, none of
 * which is a partner of either shop.
 *
 * 🔴 The assertions key on PARTNER BRAND NAMES, not on prose, because brand
 * names are identical in all 12 languages. A prose-based check would need a
 * different needle per language and would quietly pass on the ones it got
 * wrong, which is how the original bug survived twelve locales.
 */

const LANGS = ['en', 'fi', 'de', 'ja', 'es', 'pt-BR', 'zh-CN', 'ko', 'fr', 'it', 'nl', 'sv'] as const

/** Named in the travel copy; none of them sells anything on a gift site. */
const TRAVEL_ONLY_PARTNERS = ['Sembo', 'Trip.com', 'EconomyBookings']

/** Real shop partners and the networks that actually route the clicks. */
const SHOP_PARTNERS = ['Suomikauppa', 'Adtraction', 'Daisycon']

/**
 * The component declares its props parameter as optional (`= {}`), which makes
 * `createElement` fall through to its last overload and reject the props
 * object. Re-stating the signature locally keeps the call site typed without
 * having to export the props interface from the shared file.
 */
const TermsContent = TermsContentDefault as unknown as (props: {
  siteName?: string
  siteUrl?: string
  lang?: (typeof LANGS)[number]
  variant?: 'travel' | 'shop'
}) => ReactElement

function render(lang: (typeof LANGS)[number], variant?: 'travel' | 'shop') {
  return renderToStaticMarkup(
    createElement(TermsContent, {
      siteName: 'LaplandGifts',
      siteUrl: 'laplandgifts.com',
      lang,
      variant,
    })
  )
}

describe('TermsContent shop variant', () => {
  it.each(LANGS)('%s: shop variant names no travel-only partner', (lang) => {
    const html = render(lang, 'shop')
    for (const partner of TRAVEL_ONLY_PARTNERS) {
      expect(html, `${lang} still names ${partner}`).not.toContain(partner)
    }
  })

  it.each(LANGS)('%s: shop variant names the real shop partners', (lang) => {
    const html = render(lang, 'shop')
    for (const partner of SHOP_PARTNERS) {
      expect(html, `${lang} is missing ${partner}`).toContain(partner)
    }
  })

  it.each(LANGS)('%s: shop variant actually differs from travel', (lang) => {
    expect(render(lang, 'shop')).not.toEqual(render(lang, 'travel'))
  })

  it.each(LANGS)('%s: shop variant carries no em dash', (lang) => {
    // Vesa's standing rule: em dashes never appear in LV site copy.
    expect(render(lang, 'shop')).not.toContain('—')
  })

  /**
   * The other 27 sites in the network are travel sites and share this file.
   * If this ever fails, the shop override has leaked into their default.
   */
  it.each(LANGS)('%s: default (no prop) is unchanged travel copy', (lang) => {
    const defaulted = render(lang)
    expect(defaulted).toEqual(render(lang, 'travel'))
    expect(defaulted).toContain('Sembo')
  })
})
