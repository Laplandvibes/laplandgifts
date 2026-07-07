import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react'
import { useLang, useLocalePath } from '../i18n/useLang'
import { COPY } from '../locales/copy'

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

export default function Unsubscribe() {
  const lang = useLang()
  const to = useLocalePath()
  const t = COPY[lang].unsubscribe
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleUnsubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus('loading')
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
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <title>{t.title}</title>
      <meta name="description" content="Unsubscribe from LaplandGifts and the #LaplandVibes newsletter." />
      <link rel="canonical" href="https://laplandgifts.com/unsubscribe/" />
      <meta name="robots" content="noindex, follow" />

      <div className="min-h-screen bg-[#0a0a1a] flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <p className="text-3xl font-black mb-2">
            <span className="text-pink-400">#</span>
            <span className="text-white">LAPLAND</span>
            <span className="text-amber-400">GIFTS</span>
          </p>

          {status === 'success' ? (
            <div className="mt-8">
              <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h1 className="text-2xl font-semibold text-white mb-2">{t.successH1}</h1>
              <p className="text-white/80">{t.successBody}</p>
              <Link
                to={to('/')}
                className="inline-block mt-6 px-6 py-3 text-sm text-white/75 hover:text-white/80 transition-colors"
              >
                {t.backHome}
              </Link>
            </div>
          ) : (
            <div className="mt-8">
              <h1 className="text-2xl font-semibold text-white mb-2">{t.h1}</h1>
              <p className="text-white/80 mb-8">{t.body}</p>

              <form onSubmit={handleUnsubscribe} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  disabled={status === 'loading'}
                  className="w-full px-5 py-3 rounded-lg bg-white/10 text-white placeholder:text-white/75 border border-white/20 focus:outline-none focus:ring-2 focus:ring-amber-500/50 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full px-5 py-3 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
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
