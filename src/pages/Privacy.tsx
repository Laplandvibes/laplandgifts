import { Link } from 'react-router-dom'
import PrivacyContent from '../shared/Legal/PrivacyContent'
import Logo from '../components/Logo'
import Footer from '../components/Footer'

export default function Privacy() {
  return (
    <>
      <title>Privacy Policy | LaplandGifts</title>
      <meta name="description" content="How LaplandGifts (Lapeso Oy) handles your data: Google Analytics 4 with Consent Mode v2, newsletter via Resend/Supabase, and affiliate tracking — all explained in plain English." />
      <link rel="canonical" href="https://laplandgifts.com/privacy" />
      <meta name="robots" content="index, follow" />

      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/"><Logo /></Link>
          <Link to="/" className="text-gray hover:text-amber transition-colors font-medium text-sm">Back to Home</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-16">
        <PrivacyContent siteName="LaplandGifts" />
      </main>

      <Footer />
    </>
  )
}
