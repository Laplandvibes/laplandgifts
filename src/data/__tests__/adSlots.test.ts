import { describe, expect, it } from 'vitest'
import { AD_SLOTS } from '../adSlots'
import type { Partner } from '../../shared/PartnerSlot'

/**
 * 🔴 Myyty kumppanikortti näkyy KAIKILLA 12 kielellä (Vesa 30.7.2026), mutta
 * Partner-objektin tagline/description/cta ovat vain fi/en/sv. Loput yhdeksän
 * kieltä tulevat `i18n`-kartasta; ilman sitä PartnerSlot näyttää englannin.
 * Näin kävi Keloalle: gate:kielipuhtaus-dom löysi 28.9.2026 englanninkielisen
 * iskulauseen ja kuvauksen giftsin ja storen etusivulta yhdeksällä kielellä.
 * Avaimet = normalizeAdLocale (shared/adSlotsCopy.ts).
 */
const AD_LOCALES = ['de', 'fr', 'it', 'es', 'pt', 'nl', 'ja', 'ko', 'zh'] as const

const HUB_PREFIX: Record<(typeof AD_LOCALES)[number], string> = {
  de: 'de', fr: 'fr', it: 'it', es: 'es', pt: 'br', nl: 'nl', ja: 'ja', ko: 'kr', zh: 'cn',
}

const soldPartners = (): Partner[] =>
  [AD_SLOTS.mainPartner, ...(AD_SLOTS.cards ?? []), ...(AD_SLOTS.sponsors ?? [])].filter(
    (p): p is Partner => Boolean(p),
  )

describe('myydyt mainospaikat', () => {
  it('etusivulla on myyty kumppani (muuten testi ei vartioi mitään)', () => {
    expect(soldPartners().length).toBeGreaterThan(0)
  })

  it('jokaisen myydyn kortin tekstit on käännetty yhdeksälle muulle kielelle', () => {
    for (const p of soldPartners()) {
      for (const l of AD_LOCALES) {
        const t = p.i18n?.[l]
        const where = `${p.name} (${l})`
        const pairs: [string | undefined, string | undefined, string][] = [
          [p.taglineEn, t?.tagline, 'tagline'],
          [p.descriptionEn, t?.description, 'description'],
          [p.ctaLabelEn, t?.cta, 'cta'],
          [p.articleLabelEn, t?.articleLabel, 'articleLabel'],
        ]
        for (const [en, own, field] of pairs) {
          if (!en) continue
          expect(own, `${where}: ${field} puuttuu`).toBeTruthy()
          expect(own, `${where}: ${field} on englantia`).not.toBe(en)
        }
      }
    }
  })

  /**
   * Artikkelilinkki vie hubin esittelyyn lukijan kielellä. Hubin osoitteet
   * päättyvät kauttaviivaan; ilman sitä jokainen klikki kulkee 308-ohjauksen
   * kautta (mitattu 28.9.2026 kaikilla 12 kielellä).
   */
  it('artikkelilinkki osoittaa hubin kieliversioon kauttaviivalla', () => {
    for (const p of soldPartners()) {
      if (!p.articleUrlEn) continue
      for (const url of [p.articleUrl, p.articleUrlEn, p.articleUrlSv]) {
        if (url) expect(url, p.name).toMatch(/\/$/)
      }
      for (const l of AD_LOCALES) {
        expect(p.i18n?.[l]?.articleUrl, `${p.name} (${l})`).toMatch(
          new RegExp(`^https://laplandvibes\\.com/${HUB_PREFIX[l]}/blog/[a-z0-9-]+/$`),
        )
      }
    }
  })
})
