import { Link } from 'react-router-dom'
import CookieContent from '../shared/Legal/CookieContent'
import Logo from '../components/Logo'
import Footer from '../components/Footer'
import { useLang, useLocalePath } from '../i18n/useLang'
import { COPY } from '../locales/copy'

export default function CookiePolicy() {
  const lang = useLang()
  const to = useLocalePath()
  const t = COPY[lang].legal
  return (
    <>
      <title>Cookie Policy | LaplandGifts</title>
      <meta name="description" content="LaplandGifts cookie policy — analytics consent, affiliate tracking, and how to manage your preferences." />
      <link rel="canonical" href="https://laplandgifts.com/cookie-policy" />

      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to={to('/')}><Logo /></Link>
          <Link to={to('/')} className="text-gray hover:text-amber transition-colors font-medium text-sm">{t.backHome}</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-16">
        <CookieContent siteName="LaplandGifts" siteId="laplandgifts" lang={lang} />
      </main>

      <Footer />
    </>
  )
}
