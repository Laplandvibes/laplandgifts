import { Link } from 'react-router-dom'
import { useLocalePath } from '../i18n/useLang'

/**
 * #LAPLANDGIFTS wordmark — LV brand signature.
 * NETWORK RULE (Vesa 2026-07-24): the hashtag wordmark renders in Bebas Neue on
 * every site via the dedicated --font-logo token, so it looks identical to
 * #LAPLANDVIBES network-wide. Site headings stay Playfair (variant palette).
 */
function Logo() {
  const lp = useLocalePath()
  return (
    <Link to={lp('/')} className="flex items-center group">
      {/* 375px-budjetti: menu 58 + logo + kielivalitsin ei saa ylittää 343px → logo kutistuu mobiilissa */}
      <span className="font-logo text-2xl sm:text-3xl tracking-wide leading-none">
        <span className="text-pink">#</span>
        <span className="text-gray">LAPLAND</span>
        <span className="text-amber">GIFTS</span>
      </span>
    </Link>
  )
}

export default Logo
