import { useLocation, useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'
import Hero from '../components/Hero'
import ProductCategories from '../components/ProductCategories'
import ValueProp from '../components/ValueProp'
import ProductGrid from '../components/ProductGrid'
import GiftGuide from '../components/GiftGuide'
import Guides from '../components/Guides'
import Newsletter from '../components/Newsletter'
import ShippingInfo from '../components/ShippingInfo'
import Footer from '../components/Footer'
import { useLang, stripLocale } from '../i18n/useLang'
import { COPY } from '../locales/copy'

export default function Home() {
  const lang = useLang()
  const location = useLocation()
  const navigate = useNavigate()
  const t = COPY[lang].nav

  type LangCode = 'en' | 'fi' | 'de' | 'ja' | 'es' | 'pt-BR' | 'zh-CN' | 'ko' | 'fr' | 'it' | 'nl'
  const URL_PREFIX_OF: Record<LangCode, string> = {
    en: '', fi: 'fi', de: 'de', ja: 'ja', es: 'es', 'pt-BR': 'br', 'zh-CN': 'cn',
    ko: 'kr', fr: 'fr', it: 'it', nl: 'nl',
  }
  const ALL_LANGS: { code: LangCode; label: string; native: string }[] = [
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
  ]

  const switchTo = (target: LangCode) => {
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

  const langButton = (target: LangCode, label: string) => (
    <button
      key={target}
      onClick={() => switchTo(target)}
      className={`text-xs font-semibold tracking-wider transition-colors px-1.5 uppercase ${
        lang === target ? 'text-pink' : 'text-gray/70 hover:text-pink'
      }`}
      aria-current={lang === target ? 'true' : undefined}
      aria-label={`Switch language to ${label}`}
    >
      {label}
    </button>
  )

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center gap-6">
            <a href="#categories" className="text-gray hover:text-amber transition-colors font-medium">{t.categories}</a>
            <a href="#products" className="text-gray hover:text-amber transition-colors font-medium">{t.products}</a>
            <a href="#guides" className="text-gray hover:text-amber transition-colors font-medium">{t.guides}</a>
            <a href="#shipping" className="text-gray hover:text-amber transition-colors font-medium">{t.promises}</a>
            <div
              className="flex items-center gap-1 border-l border-gray/15 pl-3 ml-1 flex-wrap"
              role="group"
              aria-label="Language"
            >
              {ALL_LANGS.map((l, i) => (
                <span key={l.code} className="flex items-center">
                  {langButton(l.code, l.label)}
                  {i < ALL_LANGS.length - 1 && <span className="text-gray/20 text-xs">·</span>}
                </span>
              ))}
            </div>
          </nav>
          {/* Mobile-only language switcher (native dropdown to avoid overflow) */}
          <select
            value={lang}
            onChange={(e) => switchTo(e.target.value as LangCode)}
            aria-label="Language"
            className="md:hidden bg-transparent border border-gray/30 rounded px-2 py-1 text-xs font-semibold uppercase text-gray"
          >
            {ALL_LANGS.map((l) => (
              <option key={l.code} value={l.code}>
                {l.label} — {l.native}
              </option>
            ))}
          </select>
        </div>
      </header>

      <main>
        <Hero />
        <ProductCategories />
        <ValueProp />
        <ProductGrid />
        <GiftGuide />
        <Guides />
        <Newsletter />
        <ShippingInfo />
      </main>

      <Footer />
    </div>
  )
}
