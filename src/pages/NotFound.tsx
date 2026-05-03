import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-night flex items-center justify-center px-4">
      <div className="text-center">
        <p className="font-heading text-8xl text-amber mb-4">404</p>
        <h1 className="font-heading text-3xl text-white mb-4">Page Not Found</h1>
        <p className="text-white/50 mb-8 max-w-md mx-auto">
          This page doesn't exist. Maybe the northern lights took it somewhere else.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-amber text-white px-8 py-4 rounded-full font-medium hover:bg-amber/90 transition-colors"
        >
          <Home className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
    </div>
  )
}
