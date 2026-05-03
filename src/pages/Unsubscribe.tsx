import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react'
import Logo from '../components/Logo'
import Footer from '../components/Footer'

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

export default function Unsubscribe() {
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
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/"><Logo /></Link>
          <Link to="/" className="text-gray hover:text-amber transition-colors font-medium text-sm">Back to Home</Link>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 py-24 text-center">
        <h1 className="font-heading text-4xl text-gray mb-4">Unsubscribe</h1>
        <p className="text-gray/60 mb-8">We're sorry to see you go. Enter your email to unsubscribe from our newsletter.</p>

        {status === 'success' ? (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
            <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <p className="text-green-800 font-medium">You've been unsubscribed.</p>
            <p className="text-green-600 text-sm mt-2">You won't receive any more emails from us.</p>
          </div>
        ) : status === 'error' ? (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
            <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <p className="text-red-800 font-medium">Something went wrong.</p>
            <p className="text-red-600 text-sm mt-2">Please try again or contact info@laplandvibes.com</p>
          </div>
        ) : (
          <form onSubmit={handleUnsubscribe} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="w-full px-6 py-4 rounded-full border border-gray/20 text-gray focus:outline-none focus:border-amber focus:ring-2 focus:ring-amber/20"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-gray text-white py-4 rounded-full font-medium hover:bg-gray/90 transition-colors disabled:opacity-50"
            >
              {status === 'loading' ? (
                <span className="inline-flex items-center gap-2"><Loader2 className="w-4 h-4 animate-spin" /> Processing...</span>
              ) : (
                'Unsubscribe'
              )}
            </button>
          </form>
        )}
      </main>

      <Footer />
    </>
  )
}
