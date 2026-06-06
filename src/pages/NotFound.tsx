import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'
import { useLang, useLocalePath } from '../i18n/useLang'
import { COPY } from '../locales/copy'

export default function NotFound() {
  const lang = useLang()
  const to = useLocalePath()
  const t = COPY[lang].notFound
  return (
    <div className="min-h-screen bg-night flex items-center justify-center px-4">
      <div className="text-center">
        <p className="font-heading text-8xl text-amber mb-4">404</p>
        <h1 className="font-heading text-3xl text-white mb-4">{t.h1}</h1>
        <p className="text-white/50 mb-8 max-w-md mx-auto">
          {t.body}
        </p>
        <Link
          to={to('/')}
          className="inline-flex items-center gap-2 bg-amber text-white px-8 py-4 rounded-full font-medium hover:bg-amber/90 transition-colors"
        >
          <Home className="w-5 h-5" />
          {t.back}
        </Link>
      </div>
    </div>
  )
}
