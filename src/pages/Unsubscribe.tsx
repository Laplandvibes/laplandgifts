import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react'
import { useLang, useLocalePath } from '../i18n/useLang'
import { COPY } from '../locales/copy'

/**
 * [LV-FUNNEL 2026-08-21] Lomakesuppilon eventit Umamiin — paikallinen apuri,
 * ei jaettua importtia (vendoroitu sync on refresh-only). Ei saa koskaan
 * rikkoa lomaketta. Standardi: memory _procedural/lv_form_funnel_events.md.
 */
function track(event: string, data?: Record<string, unknown>) {
  try {
    (window as unknown as { umami?: { track: (e: string, d?: unknown) => void } }).umami?.track(event, data);
  } catch { /* ignore */ }
}

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

export default function Unsubscribe() {
  const lang = useLang()
  const to = useLocalePath()
  const t = COPY[lang].unsubscribe
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  // [LV-FUNNEL] Slug `unsub`. Ei IO-view-eventtiä: sivulle navigointi on jo
  // "view", Umami kirjaa sen sivulatauksena. start = 1. kenttäfokus.
  const funnelData = { lang }
  const startTracked = useRef(false)
  const trackStart = () => {
    if (startTracked.current) return
    startTracked.current = true
    track('unsub_start', funnelData)
  }

  const handleUnsubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus('loading')
    track('unsub_submit', funnelData)
    try {
      const res = await fetch(`${SUPABASE_URL}/functions/v1/unsubscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error('Failed to unsubscribe')
      setStatus('success')
      track('unsub_success', funnelData)
    } catch {
      setStatus('error')
      track('unsub_error', funnelData)
    }
  }

  return (
    <>
      <title>{t.title}</title>
      <meta name="description" content="Unsubscribe from LaplandGifts and the #LaplandVibes newsletter." />
      <link rel="canonical" href={`https://laplandgifts.com${to('/unsubscribe')}`} />
      <meta name="robots" content="noindex, follow" />

      <div className="min-h-screen bg-sand flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <p className="text-3xl font-black mb-2">
            <span className="text-amber">#</span>
            <span className="text-gray">LAPLAND</span>
            <span className="text-amber">GIFTS</span>
          </p>

          {status === 'success' ? (
            <div className="mt-8">
              <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h1 className="text-2xl font-semibold text-gray mb-2">{t.successH1}</h1>
              <p className="text-muted">{t.successBody}</p>
              <Link
                to={to('/')}
                className="inline-block mt-6 px-6 py-3 text-sm text-muted hover:text-gray transition-colors"
              >
                {t.backHome}
              </Link>
            </div>
          ) : (
            <div className="mt-8">
              <h1 className="text-2xl font-semibold text-gray mb-2">{t.h1}</h1>
              <p className="text-muted mb-8">{t.body}</p>

              <form onSubmit={handleUnsubscribe} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onFocus={trackStart}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  disabled={status === 'loading'}
                  className="w-full px-5 py-3 rounded-lg bg-card text-gray placeholder:text-muted border border-line focus:outline-none focus:ring-2 focus:ring-amber-500/50 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full px-5 py-3 rounded-lg bg-gray text-white font-medium hover:bg-amber transition-colors flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      {t.submitting}
                    </>
                  ) : (
                    t.submit
                  )}
                </button>
              </form>

              {status === 'error' && (
                <div className="mt-4 flex items-center justify-center gap-2 text-red-400">
                  <AlertCircle className="w-4 h-4" />
                  <span className="text-sm">{t.errorMsg}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
