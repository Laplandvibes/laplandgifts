import { PRODUCTS } from './products'
import type { Product } from './types'

/**
 * Tilaisuus → tuoteslugit, samassa järjestyksessä kuin
 * `COPY[lang].giftGuide.occasions` (joulu, häät, syntymäpäivä, yritys).
 * Indeksi on ainoa side: copy antaa nimen ja kuvauksen, tämä antaa tuotteet.
 *
 * 🔴 Vesan Rule 5 -liputus 25.7.: lahjaoppaan ehdotukset olivat pelkkiä
 * tekstirivejä, eikä niitä vastaavia tuotteita ollut edes olemassa. Jokainen
 * rivi tässä on katalogin oikea slug, ja `occasions.test.ts` kaatuu jos joku
 * slug katoaa products.ts:stä.
 *
 * Tyhjä `slugs` on sallittu: osio renderöi silloin otsikon ja kuvauksen ilman
 * kortteja. Se on rehellisempi kuin keksitty slug, joka veisi 404:ään.
 */
export const OCCASION_PICKS: string[][] = [
  // Joulu
  [
    'moomin-mystical-forest-wool-throw',
    'moomin-blue-love-mug',
    'finnish-flavours-palalaku-salmiakki',
    'meritalo-tyrnihillo',
  ],
  // Häät
  [
    'moomin-mystical-forest-tumblers',
    'moomin-blue-love-mug',
    'moomin-mystical-forest-wool-throw',
  ],
  // Syntymäpäivä
  [
    'marttiini-napapiirin-puukko',
    'makia-merino-beanie',
    'kuivalihakundi-poro-jerky',
    'arctic-power-berries-blueberry-powder',
  ],
  // Yrityslahjat
  [
    'marttiini-lapinleuku-255',
    'marttiini-ilves-131',
    'halti-tokoi-dx-jacket',
    'moomin-mystical-forest-tumblers',
  ],
]

/**
 * Tilaisuuden tuotteet katalogijärjestyksen sijaan poimintajärjestyksessä:
 * ensimmäinen slug on ensimmäinen kortti. Tuntematon slug pudotetaan, jotta
 * sivu ei kaadu, ja testi kertoo siitä erikseen.
 */
export function productsForOccasion(index: number): Product[] {
  const slugs = OCCASION_PICKS[index] ?? []
  return slugs
    .map((slug) => PRODUCTS.find((p) => p.slug === slug))
    .filter((p): p is Product => Boolean(p))
}
