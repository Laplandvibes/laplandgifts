import { Hash } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLocalePath } from '../i18n/useLang'

function Logo() {
  const lp = useLocalePath()
  return (
    <Link to={lp('/')} className="flex items-center gap-1 group">
      <Hash className="w-5 h-5 sm:w-7 sm:h-7 text-pink" strokeWidth={3} />
      {/* 375px-budjetti: menu 58 + logo + kielivalitsin ei saa ylittää 343px → logo kutistuu mobiilissa */}
      <span className="font-heading text-xl sm:text-3xl tracking-wide">
        <span className="text-gray">LAPLAND</span>
        <span className="text-amber">GIFTS</span>
      </span>
    </Link>
  )
}

export default Logo
