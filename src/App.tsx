import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useReducer, lazy, Suspense, type ReactNode } from 'react'
import CookieBanner from './shared/CookieBanner'
import Breadcrumbs from '../../shared/Breadcrumbs'
const Home = lazy(() => import('./pages/Home'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Terms = lazy(() => import('./pages/Terms'))
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'))
const Unsubscribe = lazy(() => import('./pages/Unsubscribe'))
const NotFound = lazy(() => import('./pages/NotFound'))
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
 * COPY[lang].nav). It hides itself on home and on any route not in labelMap.
 *
 * This site is a single content page (Home) plus pure-legal pages (privacy /
 * terms / cookie-policy / unsubscribe) and 404 — its nav items (categories /
 * products / guides / promises) are in-page #anchors, not routes. Per the
 * ecosystem rule we omit legal pages and never map non-route anchors, so the
 * labelMap holds only genuine content subpage *routes*. There are none today,
 * so the bar stays hidden everywhere (matching the `store` site); it lights up
 * automatically once a content subpage route is added here.
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
  const nav = COPY[lang].nav
  // Logical content-subpage route → SHORT localized nav label. (Empty today:
  // see note above — only in-page anchors + legal routes exist.)
  const labelMap: Record<string, string> = {}
  void nav // nav labels are the source for labelMap once routed subpages exist
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
      <CopyGate>
      <BreadcrumbShell />
      <Suspense fallback={<div className="min-h-screen" />}>
      <Routes>
        {/* EN routes */}
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/unsubscribe" element={<Unsubscribe />} />

        {/* FI routes */}
        <Route path="/fi" element={<Home />} />
        <Route path="/fi/privacy" element={<Privacy />} />
        <Route path="/fi/terms" element={<Terms />} />
        <Route path="/fi/cookie-policy" element={<CookiePolicy />} />
        <Route path="/fi/unsubscribe" element={<Unsubscribe />} />

        {/* DE routes */}
        <Route path="/de" element={<Home />} />
        <Route path="/de/privacy" element={<Privacy />} />
        <Route path="/de/terms" element={<Terms />} />
        <Route path="/de/cookie-policy" element={<CookiePolicy />} />
        <Route path="/de/unsubscribe" element={<Unsubscribe />} />

        {/* JA routes */}
        <Route path="/ja" element={<Home />} />
        <Route path="/ja/privacy" element={<Privacy />} />
        <Route path="/ja/terms" element={<Terms />} />
        <Route path="/ja/cookie-policy" element={<CookiePolicy />} />
        <Route path="/ja/unsubscribe" element={<Unsubscribe />} />

        {/* ES routes */}
        <Route path="/es" element={<Home />} />
        <Route path="/es/privacy" element={<Privacy />} />
        <Route path="/es/terms" element={<Terms />} />
        <Route path="/es/cookie-policy" element={<CookiePolicy />} />
        <Route path="/es/unsubscribe" element={<Unsubscribe />} />

        {/* PT-BR routes (/br) */}
        <Route path="/br" element={<Home />} />
        <Route path="/br/privacy" element={<Privacy />} />
        <Route path="/br/terms" element={<Terms />} />
        <Route path="/br/cookie-policy" element={<CookiePolicy />} />
        <Route path="/br/unsubscribe" element={<Unsubscribe />} />

        {/* ZH-CN routes (/cn) */}
        <Route path="/cn" element={<Home />} />
        <Route path="/cn/privacy" element={<Privacy />} />
        <Route path="/cn/terms" element={<Terms />} />
        <Route path="/cn/cookie-policy" element={<CookiePolicy />} />
        <Route path="/cn/unsubscribe" element={<Unsubscribe />} />

        {/* KO routes (/kr) */}
        <Route path="/kr" element={<Home />} />
        <Route path="/kr/privacy" element={<Privacy />} />
        <Route path="/kr/terms" element={<Terms />} />
        <Route path="/kr/cookie-policy" element={<CookiePolicy />} />
        <Route path="/kr/unsubscribe" element={<Unsubscribe />} />

        {/* FR routes */}
        <Route path="/fr" element={<Home />} />
        <Route path="/fr/privacy" element={<Privacy />} />
        <Route path="/fr/terms" element={<Terms />} />
        <Route path="/fr/cookie-policy" element={<CookiePolicy />} />
        <Route path="/fr/unsubscribe" element={<Unsubscribe />} />

        {/* IT routes */}
        <Route path="/it" element={<Home />} />
        <Route path="/it/privacy" element={<Privacy />} />
        <Route path="/it/terms" element={<Terms />} />
        <Route path="/it/cookie-policy" element={<CookiePolicy />} />
        <Route path="/it/unsubscribe" element={<Unsubscribe />} />

        {/* NL routes */}
        <Route path="/nl" element={<Home />} />
        <Route path="/nl/privacy" element={<Privacy />} />
        <Route path="/nl/terms" element={<Terms />} />
        <Route path="/nl/cookie-policy" element={<CookiePolicy />} />
        <Route path="/nl/unsubscribe" element={<Unsubscribe />} />

        {/* SV routes */}
        <Route path="/sv" element={<Home />} />
        <Route path="/sv/privacy" element={<Privacy />} />
        <Route path="/sv/terms" element={<Terms />} />
        <Route path="/sv/cookie-policy" element={<CookiePolicy />} />
        <Route path="/sv/unsubscribe" element={<Unsubscribe />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      </Suspense>
      </CopyGate>
      <LocalisedCookieBanner />
    </BrowserRouter>
  )
}

export default App
