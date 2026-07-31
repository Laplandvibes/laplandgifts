import { useLocation, useNavigate } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { stripLocale, useLang, type Lang } from '../i18n/useLang'

const URL_PREFIX_OF: Record<Lang, string> = {
  en: '', fi: 'fi', de: 'de', ja: 'ja', es: 'es', 'pt-BR': 'br', 'zh-CN': 'cn',
  ko: 'kr', fr: 'fr', it: 'it', nl: 'nl', sv: 'sv',
}

const ALL_LANGS: { code: Lang; label: string; native: string }[] = [
  { code: 'en', label: 'EN', native: 'English' },
  { code: 'fi', label: 'FI', native: 'Suomi' },
  { code: 'de', label: 'DE', native: 'Deutsch' },
  { code: 'ja', label: 'JA', native: '日本語' },
  { code: 'es', label: 'ES', native: 'Español' },
  { code: 'pt-BR', label: 'BR', native: 'Português' },
  { code: 'zh-CN', label: 'CN', native: '简体中文' },
  { code: 'ko', label: 'KR', native: '한국어' },
  { code: 'fr', label: 'FR', native: 'Français' },
  { code: 'it', label: 'IT', native: 'Italiano' },
  { code: 'nl', label: 'NL', native: 'Nederlands' },
  { code: 'sv', label: 'SV', native: 'Svenska' },
]

/**
 * Kielivalitsin. Asui aiemmin Home.tsx:n omassa headerissa, joten kategoria-,
 * tuote-, lahjaopas- ja toimitussivuilla ei ollut mitään tapaa vaihtaa kieltä.
 * Nyt se on ShopNavissa eli joka sivulla.
 *
 * Kaksi selectiä: suljettuna natiivinimi levensi headerin yli 375 pikselin,
 * joten mobiilissa näkyy lyhyt koodi ja sm+ natiivinimi (Vesa 2026-07-03).
 * text-base kentissä olisi 16 px, mutta select ei zoomaa iOS:ssä samalla
 * tavalla kuin tekstikenttä, ja natiivinimet eivät mahtuisi.
 */
export default function LangSwitcher() {
  const lang = useLang()
  const location = useLocation()
  const navigate = useNavigate()

  const switchTo = (target: Lang) => {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem('lv_locale_choice', target)
    }
    const bare = stripLocale(location.pathname)
    const prefix = URL_PREFIX_OF[target]
    if (!prefix) {
      navigate(bare)
    } else {
      navigate(bare === '/' ? `/${prefix}` : `/${prefix}${bare}`)
    }
  }

  return (
    <div className="relative inline-flex shrink-0 items-center">
      <select
        value={lang}
        onChange={(e) => switchTo(e.target.value as Lang)}
        aria-label="Language"
        className="min-h-11 appearance-none rounded-full border border-line bg-card px-3 pr-7 text-xs font-semibold uppercase text-gray sm:hidden"
      >
        {ALL_LANGS.map((l) => (
          <option key={l.code} value={l.code}>{l.label}</option>
        ))}
      </select>
      <select
        value={lang}
        onChange={(e) => switchTo(e.target.value as Lang)}
        aria-label="Language"
        className="hidden min-h-11 appearance-none rounded-full border border-line bg-card px-3 pr-7 text-xs font-semibold uppercase text-gray sm:block"
      >
        {ALL_LANGS.map((l) => (
          <option key={l.code} value={l.code}>{l.native}</option>
        ))}
      </select>
      <ChevronDown
        className="pointer-events-none absolute right-2 top-1/2 h-3 w-3 -translate-y-1/2 text-gray"
        aria-hidden="true"
      />
    </div>
  )
}
