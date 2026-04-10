import { Hash } from 'lucide-react'

function Logo() {
  return (
    <a href="/" className="flex items-center gap-1 group">
      <Hash className="w-7 h-7 text-pink" strokeWidth={3} />
      <span className="font-heading text-3xl tracking-wide">
        <span className="text-gray">LAPLAND</span>
        <span className="text-amber">GIFTS</span>
      </span>
    </a>
  )
}

export default Logo
