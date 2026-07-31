import { BrowserRouter, useLocation } from 'react-router-dom'
import { useEffect, useReducer, Suspense, type ReactNode } from 'react'
import CookieBanner from './shared/CookieBanner'
import Breadcrumbs from '../../shared/Breadcrumbs'
import AppRoutes from './routes'
import { ShippingCountryProvider } from './context/ShippingCountry'
import { CATEGORIES } from './data/categories'
import { SHOP_COPY } from './locales/shopCopy'
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
 * Localized ecosystem breadcrumb ("murupolku"). One shell, rendered above
 * <Routes>, wired to this site's real runtime i18n (useLang + useLocalePath +
 * SHOP_COPY[lang]). It hides itself on home and on any route not in labelMap.
 *
 * labelMap kattaa kaupan seitsemän kategoriasivua sekä lahjaopas- ja
 * toimitussivun. Lakisivut jätetään pois ekosysteemisäännön mukaan, ja
 * tuotesivut jäävät pois tarkoituksella: niiden label tulisi tuotedatasta
 * eikä navista.
 *
 * Palette: this site has no LV deep-night/snow tokens — content renders on a
 * light bg (--color-white) under a white header, so the trail uses the body
 * text colour `text-gray` with `hover:text-amber` to match the nav's own links.
 * The header is `sticky top-0` (in-flow, not fixed) → no pt-16 (that would add
 * a gap below the sticky nav).
 */
function BreadcrumbShell() {
  const lang = useLang()
  const to = useLocalePath()
  // Looginen sisältöalisivureitti → lyhyt lokalisoitu label.
  const labelMap: Record<string, string> = {
    ...Object.fromEntries(CATEGORIES.map((c) => [c.slug, SHOP_COPY[lang].category.names[c.id]])),
    '/gift-guides': SHOP_COPY[lang].nav.guides,
    '/shipping': SHOP_COPY[lang].nav.shipping,
  }
  return (
    <Breadcrumbs
      lang={lang}
      to={to}
      labelMap={labelMap}
      className="text-gray"
      accentClassName="hover:text-amber hover:opacity-100"
    />
  )
}

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
          <BreadcrumbShell />
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
