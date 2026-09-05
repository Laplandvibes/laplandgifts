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
    'nb-hattifatteners-cushion',
    'halti-kroka-mitten',
    'nordqvist-moomin-forest-berry-tea',
    'sk-marianne-toffee-rae',
    'finnish-flavours-palalaku-salmiakki',
  ],
  // Häät: kodin esineitä, jotka kestävät vuosia. 5.9.2026: Aarikan kynttilänjalka ja
  // Lapuan Kankureiden huopa vaihtuivat poro-kynttilänjalkaan ja Unikko-pyyhkeeseen,
  // koska Aarikka ja Lapuan Kankurit olivat provisiottomia suoralinkkejä (Vesa: pois).
  // Arabian Ystävyys-muki ja
  // Muurlan lasipullo korvasivat 12.8. Moomin Shopin Blue Love -mukin ja
  // Mystical Forest -lasit: sama tuoteperhe ja sama valmistaja, mutta ne
  // ostetaan kaupasta joka maksaa meille komission.
  [
    'iittala-aalto-vase-160',
    'arabia-moomin-mug-friendship',
    'sk-muurla-moomin-bottle',
    'sk-aurora-borealis-reindeer-tealight',
    'sk-marimekko-unikko-bath-towel',
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
  // kategoriaa, hinnat 13–250 €, jotta samasta listasta löytyy sekä
  // messulahja että avainasiakkaan lahja. (Yläraja oli 175 € niin kauan kuin
  // Tokoi DX luettiin halti.com-kaupan alennushinnalla; halti.fi:n hinta on
  // 250 €, ks. products.ts ja partners.ts 4.8.2026.)
  [
    'marttiini-lapinleuku-255',
    'halti-tokoi-dx-jacket',
    'north-outdoor-huuru-beanie',
    'kupilka-bowl-55',
    'sk-muurla-moomin-bottle',
    'sk-paulig-cafe-new-york-beans',
  ],
]

/**
 * Tilaisuuden tuotteet katalogijärjestyksen sijaan poimintajärjestyksessä:
 * ensimmäinen slug on ensimmäinen kortti. Tuntematon slug pudotetaan, jotta
 * sivu ei kaadu, ja testi kertoo siitä erikseen.
 */
export function productsForOccasion(index: number): Product[] {
  const slugs = OCCASION_PICKS[index] ?? []
  // 🔴 Jarjestys on TARKOITUKSELLA poimintajarjestys, ja occasions.test.ts
  // vahtii sita. Toimituslaajuuden mukainen jarjestys tehdaan vasta
  // renderoitaessa (GiftGuides.tsx), jotta kuratoitu lista sailyy datana
  // sellaisena kuin se on kirjoitettu.
  return slugs
    .map((slug) => PRODUCTS.find((p) => p.slug === slug))
    .filter((p): p is Product => Boolean(p))
}
