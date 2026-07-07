import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLang, stripLocale, type Lang } from './useLang'
import { FAQ_BY_LANG } from '../components/FAQ'

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
  const isHome = stripLocale(pathname) === '/'
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
      const faqItems = FAQ_BY_LANG[lang] ?? FAQ_BY_LANG.en
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
  }, [bcp47, lang, isHome])
  return null
}
