import type { Product } from './types'

/**
 * Luksusvalikoima.
 *
 * 🔴 Miksi ELÄMYSVETOINEN eikä esinevetoinen (mitattu 12.8.2026, Vesa:
 * "kalliita tuotteita pitää luxus-sivulle laittaa myös tarjolle"): yli 80
 * euron tuotteita on 24, mutta niistä vain 14 lähtee ulkomaille. Suomeen
 * rajattuja ovat juuri kalleimmat ESINEET — Halti-takit 250–280 €,
 * Finlayson-pellava 200 €, Iittalan maljakko 159 €.
 *
 * Ulkomaille lähtevä kärki on kokonaan elämyksiä: kullanhuuhdontapäivä
 * 1 490 €, porosafari 400 €, lasi-igluyö 400 €. Luksussivu joka johtaisi
 * pussilakanasetillä, jota ei toimiteta lukijalle, ei olisi luksusta vaan
 * umpikuja.
 *
 * 🔴 Raja on 80 € eikä 100 €, koska 100 € pudottaisi Lapuan Kankureiden
 * Kaamos-huovan (99,90 €) ja Marimekon Unikko-laukun (80,26 €) — molemmat
 * ovat lahjana selvästi ylellisen puolella, eikä sivun tarkoitus ole
 * näyttää hintalappua vaan valikoimaa.
 */
export const LUXURY_MIN_PRICE = 80 // koskee enää ELÄMYKSIÄ; esineet: LUXURY_OBJECT_SLUGS

/** Tunnukset, jotka nostetaan sivun kärkeen tässä järjestyksessä. */
export const LUXURY_HERO_SLUGS: string[] = [
  'gold-panning-day-inari',
  'glass-igloo-night-levi',
  'reindeer-safari-rovaniemi',
]

/**
 * Esineet, jotka kelpaavat luksussivulle: KÄSIN VALITTU, ei hintasuodatin.
 *
 * 🔴 Vesa 5.9.2026: "onko tää läppä että luxus sivulla on joku makia huppari
 * luxus tuotteena? tämä ei ole luxusta nähnytkään." 80 euron hintaraja nosti
 * sivulle hupparit, lasketteluhanskat ja pussilakanat, koska hinta ei ole
 * ylellisyyden mitta. Peruste on nyt IKÄ ja tekotapa: esine, jota on tehty
 * samalla tavalla vuosikymmeniä. Aalto-maljakko (1936), Marttiinin Lapinleuku
 * (Rovaniemi, 1928), Lapuan Kankureiden villahuopa (kutomo vuodesta 1917) ja
 * Arabian villatorkku. Järjestys on näyttöjärjestys. Vaatteita ei koskaan.
 *
 * Varsinainen luksus sivulla on elämyksissä (kullanhuuhdontapäivä 1 490 €,
 * jäänmurtaja Sampo, lasi-iglu) ja Kalevala-koruissa (Kulta-Center), jotka
 * sivu renderöi omana rivinään.
 */
export const LUXURY_OBJECT_SLUGS: string[] = [
  'iittala-aalto-vase-160',
  'marttiini-lapinleuku-255',
  'lapuan-kankurit-kaamos-blanket',
  'moomin-mystical-forest-wool-throw',
]

/** Sivun ja reittimetan yhteinen valinta: elämykset hintarajalla, esineet listalta. */
export function luxuryProducts(products: Product[]): Product[] {
  const experiences = products.filter((p) => p.category === 'experiences' && p.priceFrom >= LUXURY_MIN_PRICE)
  const objects = LUXURY_OBJECT_SLUGS.map((slug) => products.find((p) => p.slug === slug)).filter((p): p is Product => Boolean(p))
  return [...experiences, ...objects]
}
