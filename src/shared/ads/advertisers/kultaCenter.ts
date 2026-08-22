import { Gem } from 'lucide-react'
import type { AdSpec } from '../AdUnit'

// Kulta-Center — Finnish jeweller (jewellery + known watch brands online).
// FI-ONLY copy (Finnish-language shop; targetPages: gifts/store). Adtraction
// deep-link. Logo: _affiliate/logos/adtraction-kulta-center.png
// → public/images/partners/kultacenter.png.
const kultaCenter: AdSpec = {
  key: 'kultacenter',
  brand: 'Kulta-Center',
  logo: '/images/partners/kultacenter.png',
  // dest=korut-kategoria: ilman destiä Adtraction-wrap pudottaa kulta-center.comin
  // ETUSIVULLE (lv_permanent_rules §5). Copy on vain suomeksi, joten yksi
  // fi-dest riittää. Polku verifioitu 2026-08-14: HTTP 200, <title> "Korut
  // netistä 1-2 arkipäivässä | Ilmainen toimitus | Kulta-Center.com", bodyssä
  // mm. h2 "Suomalaisen korumuotoilun historia".
  linkFor: (sid) => {
    const dest = 'https://www.kulta-center.com/fi/korut'
    return `https://go.laplandvibes.com/go/kultacenter?sid=${encodeURIComponent(sid)}&dest=${encodeURIComponent(dest)}`
  },
  accent: '#B8860B',
  accentDark: '#8B6508',
  icon: Gem,
  copy: {
    fi: {
      eyebrow: 'Lahja joka kestää',
      headline: 'Kulta-Center, korut ja kellot suomalaisesta kultasepänliikkeestä',
      sub: 'Kun matkamuistoksi haluaa jotain, joka ei jää laatikon pohjalle: korut ja tunnetut kellomerkit suomalaisesta kultasepänliikkeestä, verkosta tilattuna ja kotiin toimitettuna.',
      trust: ['Suomalainen kultasepänliike', 'Korut ja kellot', 'Toimitus kotiin'],
      cta: 'Selaa koruja',
      poweredBy: 'Korut Kulta-Centeriltä',
    },
  },
}

export default kultaCenter
