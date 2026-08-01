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
 *
 * 🔴 Poiminnat päivitettiin 1.8. kun katalogi kasvoi 15 tuotteesta 45:een.
 * Vanhat listat oli valittu 15 tuotteen hyllystä, joten ne toistivat samoja
 * tuotteita tilaisuudesta toiseen ja yrityslahjat oli kaksi Marttiinin puukkoa
 * neljästä. Sama vika kuin kategorioissa aiemmin: valikoima näytti siltä että
 * se hyppää uudestaan samaan. `occasions.test.ts` vahtii nyt monipuolisuuden.
 */
export const OCCASION_PICKS: string[][] = [
  // Joulu: kynttilä, lämmin tekstiili ja kolme herkkua, joista jokainen kestää
  // postimatkan. Hintahaarukka 4–140 €, jotta listalla on sekä pikkupaketti
  // että päälahja.
  [
    'iittala-kivi-candleholder',
    'moomin-mystical-forest-wool-throw',
    'halti-kroka-mitten',
    'nordqvist-moomin-forest-berry-tea',
    'moomin-lingonberry-blueberry-dark-chocolate',
    'finnish-flavours-palalaku-salmiakki',
  ],
  // Häät: kodin esineitä, jotka kestävät vuosia. Muumi Blue Love -mukissa
  // Niiskuneiti ja Muumipeikko halaavat, ja lasit tulevat lahjapakkauksessa.
  [
    'iittala-aalto-vase-160',
    'moomin-blue-love-mug',
    'moomin-mystical-forest-tumblers',
    'aarikka-prinsessa-candleholder',
    'lapuan-kankurit-kaamos-blanket',
    'pentik-tunturiretki-studio-dish',
  ],
  // Syntymäpäivä: viisi eri kategoriaa kuudella tuotteella, koska tässä
  // tilaisuudessa lahjan saaja on tuntematon ja valinta tehdään mausta.
  [
    'marimekko-unikko-mug',
    'marttiini-napapiirin-puukko',
    'makia-merino-beanie',
    'kupilka-classic-cup-21',
    'kuivalihakundi-poro-jerky',
    'arctic-power-berries-blueberry-powder',
  ],
  // Yrityslahjat: yksi puukko eikä kolme. Kuusi eri valmistajaa ja neljä
  // kategoriaa, hinnat 13–175 €, jotta samasta listasta löytyy sekä
  // messulahja että avainasiakkaan lahja.
  [
    'marttiini-lapinleuku-255',
    'halti-tokoi-dx-jacket',
    'north-outdoor-huuru-beanie',
    'kupilka-bowl-55',
    'moomin-mystical-forest-tumblers',
    'moomin-wild-blueberry-coffee',
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
