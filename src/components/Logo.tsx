import { Hash } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLocalePath } from '../i18n/useLang'

function Logo() {
  const lp = useLocalePath()
  return (
    <Link to={lp('/')} className="flex items-center gap-1 group">
      <Hash className="w-7 h-7 text-pink" strokeWidth={3} />
      <span className="font-heading text-3xl tracking-wide">
        <span className="text-gray">LAPLAND</span>
        <span className="text-amber">GIFTS</span>
      </span>
    </Link>
  )
}

export default Logo
