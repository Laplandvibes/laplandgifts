import { Link } from 'react-router-dom'
import PrivacyContent from '../shared/Legal/PrivacyContent'
import Logo from '../components/Logo'
import Footer from '../components/Footer'
import { useLang, useLocalePath, type Lang } from '../i18n/useLang'
import { COPY } from '../locales/copy'
import LEGAL_META from '../locales/legalMeta.json'

const META: Record<Lang, { title: string; description: string }> = LEGAL_META['/privacy']

export default function Privacy() {
  const lang = useLang()
  const to = useLocalePath()
  const t = COPY[lang].legal
  const meta = META[lang]
  return (
    <>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={`https://laplandgifts.com${to('/privacy/')}`} />

      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Logo />
          <Link to={to('/')} className="text-gray hover:text-amber transition-colors font-medium text-sm">{t.backHome}</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-16" id="main-content" tabIndex={-1}>
        <PrivacyContent siteName="LaplandGifts" lang={lang} variant="shop" />
      </main>

      <Footer />
    </>
  )
}
