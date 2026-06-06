import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import CookieBanner from './shared/CookieBanner'
import Home from './pages/Home'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import CookiePolicy from './pages/CookiePolicy'
import Unsubscribe from './pages/Unsubscribe'
import NotFound from './pages/NotFound'
import { trackPageView } from './lib/analytics'
import LocaleAutoRedirect from './i18n/LocaleAutoRedirect'
import Hreflang from './i18n/Hreflang'
import StructuredData from './i18n/StructuredData'
import { useHtmlLang, useLang } from './i18n/useLang'

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
  return <CookieBanner consentKey="laplandgifts_cookie_consent" lang={lang} />
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <LocaleAutoRedirect />
      <LocaleSync />
      <Hreflang />
      <StructuredData />
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

        <Route path="*" element={<NotFound />} />
      </Routes>
      <LocalisedCookieBanner />
    </BrowserRouter>
  )
}

export default App
