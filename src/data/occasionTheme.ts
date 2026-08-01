import { TreePine, Heart, Cake, Briefcase } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

/**
 * Lahjaoppaan tilaisuuden ilme: ikoni ja värit.
 *
 * Järjestys on sama kuin `COPY[lang].giftGuide.occasions`issa ja
 * `OCCASION_PICKS`issa (joulu, häät, syntymäpäivä, yrityslahjat). Indeksi on
 * ainoa side, kuten poiminnoissakin.
 *
 * 🔴 Luokkanimet ovat kokonaisia merkkijonoja eivätkä `bg-guide-${key}`
 * -muotoisia paloja: Tailwind lukee lähdetiedostot tekstinä eikä suorita
 * niitä, joten koottu luokkanimi ei päädy käännettyyn CSS:ään ollenkaan ja
 * väri jää pois hiljaa. Buildi menisi läpi ja vika näkyisi vasta selaimessa.
 *
 * Värit ja mitatut kontrastisuhteet: ks. `src/index.css` @theme.
 */
export interface OccasionTheme {
  /** Tunniste vain lukemisen helpottamiseksi, ei renderöidy. */
  key: 'christmas' | 'wedding' | 'birthday' | 'business'
  Icon: LucideIcon
  /** Kortin taustapinta. */
  panel: string
  /** Kortin ylänauha ja ikonilevy: täysi tunnusväri. */
  accent: string
  /** Otsikko ja pikkuotsikko: tunnusväri tekstinä. */
  text: string
  /** Linkkirivin hover-väri. Sama sävy, joten myös hover on mitattu. */
  hoverText: string
  /** Ohut reunus, jotta kortti erottuu hiekasta myös ilman varjoa. */
  border: string
}

export const OCCASION_THEMES: OccasionTheme[] = [
  {
    key: 'christmas',
    Icon: TreePine,
    panel: 'bg-guide-christmas-soft',
    accent: 'bg-guide-christmas',
    text: 'text-guide-christmas',
    hoverText: 'hover:text-guide-christmas',
    border: 'border-guide-christmas/25',
  },
  {
    key: 'wedding',
    Icon: Heart,
    panel: 'bg-guide-wedding-soft',
    accent: 'bg-guide-wedding',
    text: 'text-guide-wedding',
    hoverText: 'hover:text-guide-wedding',
    border: 'border-guide-wedding/25',
  },
  {
    key: 'birthday',
    Icon: Cake,
    panel: 'bg-guide-birthday-soft',
    accent: 'bg-guide-birthday',
    text: 'text-guide-birthday',
    hoverText: 'hover:text-guide-birthday',
    border: 'border-guide-birthday/25',
  },
  {
    key: 'business',
    Icon: Briefcase,
    panel: 'bg-guide-business-soft',
    accent: 'bg-guide-business',
    text: 'text-guide-business',
    hoverText: 'hover:text-guide-business',
    border: 'border-guide-business/25',
  },
]

/**
 * Tilaisuuden ilme indeksillä. Tuntematon indeksi saa ensimmäisen teeman,
 * jotta uusi tilaisuus copyssa renderöityy väreillä eikä kaada sivua.
 */
export function occasionTheme(index: number): OccasionTheme {
  return OCCASION_THEMES[index] ?? OCCASION_THEMES[0]
}
