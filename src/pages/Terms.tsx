import { Link } from 'react-router-dom'
import TermsContent from '../shared/Legal/TermsContent'
import Logo from '../components/Logo'
import Footer from '../components/Footer'
import { useLang, useLocalePath } from '../i18n/useLang'
import { COPY } from '../locales/copy'

export default function Terms() {
  const lang = useLang()
  const to = useLocalePath()
  const t = COPY[lang].legal
  return (
    <>
      <title>Terms of Service | LaplandGifts</title>
      <meta name="description" content="LaplandGifts terms of service — site usage, affiliate disclosure, and shopping terms." />
      <link rel="canonical" href="https://laplandgifts.com/terms" />

      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to={to('/')}><Logo /></Link>
          <Link to={to('/')} className="text-gray hover:text-amber transition-colors font-medium text-sm">{t.backHome}</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-16">
        <TermsContent siteName="LaplandGifts" siteUrl="laplandgifts.com" lang={lang} />
      </main>

      <Footer />
    </>
  )
}
