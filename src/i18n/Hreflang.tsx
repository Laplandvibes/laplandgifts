import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { stripLocale } from './useLang'

const BASE = 'https://laplandgifts.com'
const LANGS: Array<{ code: string; prefix: string }> = [
  { code: 'en', prefix: '' },
  { code: 'fi', prefix: '/fi' },
  { code: 'de', prefix: '/de' },
  { code: 'ja', prefix: '/ja' },
  { code: 'es', prefix: '/es' },
  { code: 'pt-BR', prefix: '/br' },
  { code: 'zh-CN', prefix: '/cn' },
  { code: 'ko', prefix: '/kr' },
  { code: 'fr', prefix: '/fr' },
  { code: 'it', prefix: '/it' },
  { code: 'nl', prefix: '/nl' },
]

/**
 * Emits hreflang alternates for the current page across all 11 locales (+ x-default).
 * Cleans up its own link tags on unmount/route change.
 */
export default function Hreflang() {
  const { pathname } = useLocation()
  useEffect(() => {
    const bare = stripLocale(pathname)
    const created: HTMLLinkElement[] = []
    for (const { code, prefix } of LANGS) {
      const href = bare === '/' ? `${BASE}${prefix || '/'}` : `${BASE}${prefix}${bare}`
      const link = document.createElement('link')
      link.rel = 'alternate'
      link.hreflang = code
      link.href = href
      link.dataset.lvHreflang = '1'
      document.head.appendChild(link)
      created.push(link)
    }
    const xDefault = document.createElement('link')
    xDefault.rel = 'alternate'
    xDefault.hreflang = 'x-default'
    xDefault.href = bare === '/' ? `${BASE}/` : `${BASE}${bare}`
    xDefault.dataset.lvHreflang = '1'
    document.head.appendChild(xDefault)
    created.push(xDefault)
    return () => {
      for (const el of created) el.remove()
    }
  }, [pathname])
  return null
}
