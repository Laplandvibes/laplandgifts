import { BrowserRouter, useLocation } from 'react-router-dom'
import { useEffect, useReducer, Suspense, type ReactNode } from 'react'
import CookieBanner from './shared/CookieBanner'
import AppRoutes from './routes'
import { ShippingCountryProvider } from './context/ShippingCountry'
import { trackPageView } from './lib/analytics'
import LocaleAutoRedirect from './i18n/LocaleAutoRedirect'
import Hreflang from './i18n/Hreflang'
import StructuredData from './i18n/StructuredData'
import { useHtmlLang, useLang, useLocalePath } from './i18n/useLang'
import { COPY, loadCopy } from './locales/copy'

/**
 * Non-EN copy lives in per-language lazy chunks (see locales/copy.ts).
 * Gate the UI until the active language's chunk is registered in COPY, so
 * every consumer keeps reading COPY[lang] synchronously. EN is bundled
 * eagerly — English visitors never hit the gate.
 */
function CopyGate({ children }: { children: ReactNode }) {
  const lang = useLang()
  const [, bump] = useReducer((x: number) => x + 1, 0)
  useEffect(() => {
    let alive = true
    if (!COPY[lang]) loadCopy(lang).then(() => { if (alive) bump() })
    return () => { alive = false }
  }, [lang])
  if (!COPY[lang]) return <div className="min-h-screen" />
  return <>{children}</>
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    trackPageView(pathname)
  }, [pathname])
  return null
}

function LocaleSync() {
  const lang = useHtmlLang()
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])
  return null
}

function LocalisedCookieBanner() {
  const lang = useLang()
  const to = useLocalePath()
  return <CookieBanner consentKey="laplandgifts_cookie_consent" lang={lang} policyHref={to('/cookie-policy')} />
}

/**
 * 🔴 Murupolku ei asu enää täällä. Se renderöitiin <Routes>-puun YLÄPUOLELLA,
 * eli sivun ensimmäisenä elementtinä kiinteän navin yläpuolelle, ja katosi heti
 * kun sivua rullasi (Vesa 2026-08-01: "murupolku kulkee missä tahansa").
 * Nyt sen renderöi `components/ShopNav.tsx` sticky-palkin alapuolelta, jolloin
 * se on sisältöalueen ensimmäinen rivi ja rullaa pois kuten muukin sisältö.
 * Myös labelMap (kategoriat + lahjaopas + toimitus) muutti samaan tiedostoon,
 * jossa navilinkit jo asuvat, joten reittilista on yhdessä paikassa.
 */
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <LocaleAutoRedirect />
      <LocaleSync />
      <Hreflang />
      <StructuredData />
      {/* Toimitusmaa on koko kaupan tila: navin valitsin ja kategoriasivun
          suodatin lukevat samaa contextia. Ilman provideria useShippingCountry
          palauttaa hiljaisen oletusarvon, jolloin valitsin ottaisi klikkejä
          vastaan tekemättä mitään, joten provider kääriytyy koko reittipuun
          ympärille eikä yksittäisen sivun sisään. */}
      <ShippingCountryProvider>
        <CopyGate>
          <Suspense fallback={<div className="min-h-screen" />}>
            <AppRoutes />
          </Suspense>
        </CopyGate>
      </ShippingCountryProvider>
      <LocalisedCookieBanner />
    </BrowserRouter>
  )
}

export default App
