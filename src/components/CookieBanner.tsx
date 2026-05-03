import { useState, useEffect } from 'react'

const CONSENT_KEY = 'laplandgifts_cookie_consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(CONSENT_KEY)) {
      const t = setTimeout(() => setVisible(true), 1200)
      return () => clearTimeout(t)
    }
  }, [])

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    window.gtag?.('consent', 'update', { analytics_storage: 'granted' })
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem(CONSENT_KEY, 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-night/95 backdrop-blur-sm border-t border-white/10 px-4 py-4 animate-[slideUp_0.4s_ease-out]"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-4">
        <p className="text-white/70 text-sm flex-1">
          We use cookies to improve your experience and analyze site traffic.{' '}
          <a href="/privacy" className="text-amber underline hover:text-amber/80">Privacy Policy</a>
        </p>
        <div className="flex gap-3">
          <button
            onClick={decline}
            className="text-white/50 text-sm font-medium px-5 py-2 rounded-full border border-white/20 hover:border-white/40 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="bg-amber text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-amber/90 transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
