import { useState } from 'react'
import { Mail, ArrowRight, Download, BookOpen, Map } from 'lucide-react'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return

    setStatus('loading')
    try {
      const res = await fetch('https://lsvnewsletter.lapeso.workers.dev/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          source: 'laplandgifts.com',
          tags: ['gifts', 'shopping', 'guide-craft', 'guide-travel'],
        }),
      })
      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="newsletter" className="py-20 bg-gradient-to-br from-amber/10 via-pink/5 to-amber/10">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <span className="text-amber font-medium uppercase tracking-widest text-sm">Get Both Guides Free</span>
        <h2 className="font-heading text-4xl md:text-5xl text-gray mt-2 mb-4">
          Enter Your Email to Download
        </h2>
        <p className="text-gray/60 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Get instant access to both Arctic guides plus early notifications when new products and artisan drops land in the shop.
        </p>

        {status === 'success' ? (
          <div className="bg-white rounded-2xl border border-gray/10 p-8 shadow-xl shadow-amber/5">
            <p className="text-gray font-medium text-lg mb-6">Your guides are ready!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/guides/The-Secret-Craft-Guide.pdf"
                download
                className="inline-flex items-center justify-center gap-2 bg-night text-white px-6 py-3 rounded-full font-medium hover:bg-night/90 transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                The Secret Craft
                <Download className="w-4 h-4" />
              </a>
              <a
                href="/guides/7-Days-of-Lapland-Magic.pdf"
                download
                className="inline-flex items-center justify-center gap-2 bg-amber text-white px-6 py-3 rounded-full font-medium hover:bg-amber/90 transition-colors"
              >
                <Map className="w-4 h-4" />
                7 Days of Magic
                <Download className="w-4 h-4" />
              </a>
            </div>
            <p className="text-gray/40 text-sm mt-6">Welcome to the Arctic family. Check your inbox too!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray/30" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full pl-12 pr-4 py-4 rounded-full border border-gray/20 bg-white text-gray focus:outline-none focus:border-amber focus:ring-2 focus:ring-amber/20 transition-colors"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="inline-flex items-center justify-center gap-2 bg-amber text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-amber/90 transition-colors shadow-lg shadow-amber/25 disabled:opacity-50 whitespace-nowrap"
            >
              {status === 'loading' ? 'Sending...' : 'Get Both Guides'}
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="text-red-500 mt-3 text-sm">Something went wrong. Please try again.</p>
        )}

        <p className="text-gray/40 text-xs mt-4">No spam, ever. Unsubscribe anytime.</p>
      </div>
    </section>
  )
}

export default Newsletter
