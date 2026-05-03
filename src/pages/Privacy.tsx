import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import Footer from '../components/Footer'

export default function Privacy() {
  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/"><Logo /></Link>
          <Link to="/" className="text-gray hover:text-amber transition-colors font-medium text-sm">Back to Home</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="font-heading text-4xl text-gray mb-8">Privacy Policy</h1>

        <div className="prose prose-gray max-w-none space-y-6 text-gray/80 leading-relaxed">
          <p><strong>Last updated:</strong> May 2026</p>
          <p><strong>Data Controller:</strong> Lapeso Oy (Business ID: 3454108-3), info@laplandvibes.com</p>
          <p>LaplandGifts.com is part of the #LaplandVibes ecosystem operated by Lapeso Oy. This policy explains how we collect, use, and protect your data.</p>

          <h2 className="font-heading text-2xl text-gray mt-10">1. Data We Collect</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Email address</strong> — when you subscribe to our newsletter or download a guide</li>
            <li><strong>Analytics data</strong> — anonymized page views and interactions via Google Analytics 4 (only after you accept cookies)</li>
            <li><strong>Source tag</strong> — which LaplandVibes site you subscribed from, for content relevance</li>
          </ul>

          <h2 className="font-heading text-2xl text-gray mt-10">2. Legal Basis (GDPR Art. 6)</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Consent</strong> — for analytics cookies and newsletter subscription</li>
            <li><strong>Legitimate interest</strong> — for basic site functionality and security</li>
          </ul>

          <h2 className="font-heading text-2xl text-gray mt-10">3. How We Use Your Data</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Send you the free guides you requested</li>
            <li>Send occasional newsletter with new products and artisan stories (max 2x/month)</li>
            <li>Improve our website based on anonymized analytics</li>
            <li>We never sell, rent, or share your email with third parties</li>
          </ul>

          <h2 className="font-heading text-2xl text-gray mt-10">4. Cookies</h2>
          <p>We use Google Analytics 4 with Consent Mode v2. Analytics cookies are <strong>not loaded until you click Accept</strong> in the cookie banner. If you decline, no tracking cookies are set.</p>

          <h2 className="font-heading text-2xl text-gray mt-10">5. Data Storage & Processors</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Supabase</strong> (EU region) — email storage and newsletter management</li>
            <li><strong>Resend</strong> — email delivery service</li>
            <li><strong>Google Analytics 4</strong> — anonymized analytics (consent-gated)</li>
            <li><strong>Cloudflare</strong> — website hosting and CDN</li>
          </ul>

          <h2 className="font-heading text-2xl text-gray mt-10">6. Your Rights</h2>
          <p>Under GDPR you have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access your data</li>
            <li>Correct inaccurate data</li>
            <li>Delete your data ("right to be forgotten")</li>
            <li>Withdraw consent at any time</li>
            <li>Lodge a complaint with the Finnish Data Protection Ombudsman (tietosuoja.fi)</li>
          </ul>

          <h2 className="font-heading text-2xl text-gray mt-10">7. Unsubscribe</h2>
          <p>You can unsubscribe from our newsletter at any time via the <Link to="/unsubscribe" className="text-amber underline">unsubscribe page</Link> or the link in every email we send.</p>

          <h2 className="font-heading text-2xl text-gray mt-10">8. Contact</h2>
          <p>For any privacy-related questions: <a href="mailto:info@laplandvibes.com" className="text-amber underline">info@laplandvibes.com</a></p>
        </div>
      </main>

      <Footer />
    </>
  )
}
