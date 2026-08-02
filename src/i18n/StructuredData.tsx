import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLang, stripLocale, type Lang } from './useLang'
import { faqItemsFor } from '../components/FAQ'
import { productBySlug } from '../data/products'
import { PARTNERS } from '../data/partners'

const BASE = 'https://laplandgifts.com'

// BCP-47 of the current locale — stamped onto every typed JSON-LD node so each
// locale URL signals the right language (mirrors laplandstays SEO.tsx behaviour).
const BCP47: Record<Lang, string> = {
  en: 'en-US',
  fi: 'fi-FI',
  de: 'de-DE',
  ja: 'ja-JP',
  es: 'es-ES',
  'pt-BR': 'pt-BR',
  'zh-CN': 'zh-CN',
  ko: 'ko-KR',
  fr: 'fr-FR',
  it: 'it-IT',
  nl: 'nl-NL',
  sv: 'sv-SE',
}

/**
 * Injects Organization + WebSite JSON-LD into <head>, stamping inLanguage
 * (BCP-47 of the current locale) on every typed node. Cleans up on locale change.
 */
export default function StructuredData() {
  const lang = useLang()
  const bcp47 = BCP47[lang] ?? 'en-US'
  const { pathname } = useLocation()
  // FAQPage belongs only on the home document (where the visible FAQ renders),
  // not on the legal/404 routes. Home is the locale root: '/', '/fi', '/de', …
  const path = stripLocale(pathname)
  const isHome = path === '/'
  // Home already emits an ItemList of the featured products (ProductGrid), so
  // Product goes only on the product document. One page never carries both.
  const productSlug = path.startsWith('/product/') ? path.slice('/product/'.length) : null
  useEffect(() => {
    const nodes: Array<Record<string, unknown>> = [
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'LaplandGifts',
        url: BASE,
        logo: `${BASE}/favicon.svg`,
        sameAs: [
          'https://youtube.com/@laplandvibes',
          'https://instagram.com/laplandvibesofficial',
          'https://tiktok.com/@laplandvibes',
          'https://facebook.com/LaplandVibes',
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'LaplandGifts',
        url: BASE,
        potentialAction: {
          '@type': 'SearchAction',
          target: `${BASE}/?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      },
    ]

    if (isHome) {
      const faqItems = faqItemsFor(lang)
      nodes.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      })
    }

    const product = productSlug ? productBySlug(productSlug) : undefined
    if (product) {
      const partner = PARTNERS[product.partnerId]
      nodes.push({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: lang === 'fi' ? product.name.fi : product.name.en,
        description: lang === 'fi' ? product.description.fi : product.description.en,
        brand: { '@type': 'Brand', name: product.brand },
        // 🔴 Kuvaa ei liitetä: tuotesivun kuva on tunnelmakuva, ei kuva juuri
        // tästä tuotteesta (sivu sanoo sen itse). Product.image lupaisi
        // hakukoneelle tuotekuvan, joten kenttä jätetään pois.
        offers: {
          '@type': 'Offer',
          price: String(product.priceFrom),
          // Valuutta luetaan tuotteelta: osa katalogista hinnoittelee punnissa.
          priceCurrency: product.currency,
          availability: 'https://schema.org/InStock',
          // 🔴 URL osoittaa kumppanin tuotesivulle, ei meidän. Meillä ei ole
          // kassaa, joten oma URL olisi väärä lupaus. Tähän tulee kumppanin
          // oma osoite eikä affiliate-redirect, joka ei ole tuotesivu.
          url: product.partnerProductUrl,
          seller: { '@type': 'Organization', name: partner.name },
        },
        // Ei aggregateRatingia: arvosteluja ei ole, eikä niitä keksitä.
      })
    }

    const inject = (node: unknown): unknown => {
      if (Array.isArray(node)) return node.map(inject)
      if (node && typeof node === 'object') {
        const o = node as Record<string, unknown>
        if (o['@type'] && o.inLanguage === undefined) o.inLanguage = bcp47
        if (Array.isArray(o['@graph'])) o['@graph'] = (o['@graph'] as unknown[]).map(inject)
        return o
      }
      return node
    }

    const created: HTMLScriptElement[] = []
    for (const node of nodes) {
      const cloned = inject(JSON.parse(JSON.stringify(node)))
      const s = document.createElement('script')
      s.type = 'application/ld+json'
      s.dataset.lvJsonld = '1'
      s.textContent = JSON.stringify(cloned)
      document.head.appendChild(s)
      created.push(s)
    }
    return () => {
      for (const el of created) el.remove()
    }
  }, [bcp47, lang, isHome, productSlug])
  return null
}
