import { TreePine, Heart, Cake, Briefcase } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

/**
 * Lahjaoppaan tilaisuuksien ilme — etusivun osio ja /gift-guides-sivu lukevat
 * saman taulukon, jotta nosto ja kohdesivu näyttävät samalta sivustolta.
 *
 * 🔴 Vesa 5.9.2026: "tämä osio kuin ala-asteelaisen tekemä." Neljä
 * pastellilaatikkoa (vihreä, pinkki, oranssi, sininen) omine ikonilaattoineen
 * oli sävykartta, ei lahjaopas. Nyt tilaisuuksilla on yksi editorial-ilme:
 * hiekka, muste ja kaupan oma aksentti hoverissa. Tilaisuuden tunnistaa
 * nimestä ja numerosta, ei väristä. Ikonit jäävät saataville pieninä
 * merkkeinä, mutta eivät enää istu värilaatikossa.
 */
export interface OccasionTheme {
  key: 'christmas' | 'wedding' | 'birthday' | 'business'
  Icon: LucideIcon
  panel: string
  accent: string
  text: string
  hoverText: string
  border: string
}

const EDITORIAL = {
  panel: 'bg-card',
  accent: 'bg-gray',
  text: 'text-gray',
  hoverText: 'hover:text-amber',
  border: 'border-line',
} as const

export const OCCASION_THEMES: OccasionTheme[] = [
  { key: 'christmas', Icon: TreePine, ...EDITORIAL },
  { key: 'wedding', Icon: Heart, ...EDITORIAL },
  { key: 'birthday', Icon: Cake, ...EDITORIAL },
  { key: 'business', Icon: Briefcase, ...EDITORIAL },
]

export function occasionTheme(i: number): OccasionTheme {
  return OCCASION_THEMES[i % OCCASION_THEMES.length]
}
