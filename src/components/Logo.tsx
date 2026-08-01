import { Link } from 'react-router-dom'
import { useLocalePath } from '../i18n/useLang'

/**
 * #LAPLANDGIFTS wordmark — LV brand signature.
 * NETWORK RULE (Vesa 2026-07-24): the hashtag wordmark renders in Bebas Neue on
 * every site via the dedicated --font-logo token, so it looks identical to
 * #LAPLANDVIBES network-wide. Since 2026-08-01 this site's headings use Bebas
 * Neue too, so the wordmark and the page titles share one letterform; the
 * separate --font-logo token stays because it is the network contract.
 */
function Logo() {
  const lp = useLocalePath()
  return (
    <Link to={lp('/')} className="flex items-center group">
      {/* 375px-budjetti: logo + hampurilainen ei saa ylittää 343px → logo
          kutistuu mobiilissa. Työpöydällä pääpalkissa on tilaa, joten
          sanamerkki saa kantaa palkin kokoa. */}
      <span className="font-logo text-2xl leading-none tracking-wide sm:text-3xl lg:text-4xl">
        <span className="text-pink">#</span>
        <span className="text-gray">LAPLAND</span>
        <span className="text-amber">GIFTS</span>
      </span>
    </Link>
  )
}

export default Logo
