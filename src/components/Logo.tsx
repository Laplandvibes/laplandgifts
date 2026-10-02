import { Link } from 'react-router-dom'
import { useLocalePath } from '../i18n/useLang'
import type { CSSProperties } from 'react';

// Sanamerkin leveys 1 px:n fontilla (Bebas Neue + tracking-wide). Puhelin- ja tablettinavissa koko lasketaan
// tästä ja vapaasta tilasta (index.css LV-NAV-SANAMERKKI): 24 px (tabletilla 30 px), pienempi vain kun ei mahdu.
const WM_STYLE = { '--lv-wm-k': 5.14, '--lv-wm-max-md': '30px' } as CSSProperties;

/**
 * #LAPLANDGIFTS wordmark — LV brand signature.
 * NETWORK RULE (Vesa 2026-07-24): the hashtag wordmark renders in Bebas Neue on
 * every site via the dedicated --font-logo token, so it looks identical to
 * #LAPLANDVIBES network-wide. Since 2026-08-01 this site's headings use Bebas
 * Neue too, so the wordmark and the page titles share one letterform; the
 * separate --font-logo token stays because it is the network contract.
 */
/** nav: navin sanamerkki, koko puhelin- ja tablettinavissa vapaan tilan mukaan (index.css LV-NAV-SANAMERKKI). */
function Logo({ nav = false }: { nav?: boolean }) {
  const lp = useLocalePath()
  return (
    <Link to={lp('/')} className="flex items-center group min-h-11">
      {/* 375px-budjetti: logo + hampurilainen ei saa ylittää 343px → logo
          kutistuu mobiilissa. Työpöydällä pääpalkissa on tilaa, joten
          sanamerkki saa kantaa palkin kokoa. */}
      <span
        className={`font-logo text-2xl leading-none tracking-wide sm:text-3xl lg:text-4xl ${nav ? ' lv-wm' : ''}`}
        data-lv-sanamerkki={nav ? '' : undefined}
        style={nav ? WM_STYLE : undefined}
      >
        <span className="text-vibe-pink">#</span>
        <span className="text-white">LAPLAND</span>
        <span className="text-vibe-pink">GIFTS</span>
      </span>
    </Link>
  )
}

export default Logo
