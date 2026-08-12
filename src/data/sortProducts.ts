import { PARTNERS } from './partners'
import type { Product } from './types'

/**
 * Toimitusalueen laajuus järjestysavaimena.
 *
 * 🔴 Miksi (Vesa 12.8.: "eihän meillä voi olla etusivulla tuotteita joissa on
 * toimitus vain suomeen, joka turisti lähtee pois heti"): kun lukija ei ole
 * valinnut toimitusmaata, mitään ei suodateta — se on oikein, koska väärä
 * arvaus piilottaisi tuotteita hiljaa. Mutta ilman järjestystä kärkeen nousi
 * 159 euron maljakko, jota ei toimiteta Suomen ulkopuolelle, ja sivuston
 * lukijoista valtaosa lukee jotain muuta kuin suomea.
 *
 * Järjestys ei piilota mitään: Suomeen rajatut tuotteet ovat yhä listassa,
 * vain alempana. Suodatus tapahtuu edelleen vasta kun maa on valittu.
 *
 * Vakaa: yhtä laajalle toimittavat pysyvät katalogin keskinäisessä
 * järjestyksessä, joten kortin paikka ei hypi käännösten tai satunnaisuuden
 * mukaan.
 */
const BREADTH: Record<string, number> = { worldwide: 0, eu: 1, fi: 2 }

export function byShippingBreadth(products: Product[]): Product[] {
  return products
    .map((p, i) => ({ p, i, k: BREADTH[PARTNERS[p.partnerId]?.shipsTo] ?? 3 }))
    .sort((a, b) => a.k - b.k || a.i - b.i)
    .map((x) => x.p)
}

/**
 * Nostoruudukon `n` tuotetta: toimituslaajuus ensin, sitten kallein.
 *
 * 🔴 Miksi hinta toissijaisena avaimena (Vesa 12.8.: "miksi käsityöt-osiossa
 * ekana tulee saippuaa?"): katalogin oma järjestys nosti käsityösivun
 * kärkeen yhdeksän euron saunasaippuan. Hinta ei ole laatumittari, mutta se
 * on paras saatavilla oleva vihje siitä, mikä tuote kantaa osaston ilmeen —
 * saunahattu ja koivuvihta kertovat suomalaisesta saunasta enemmän kuin
 * saippuatuubi.
 *
 * Toimituslaajuus voittaa hinnan aina: kallein tuote ei auta lukijaa, jolle
 * sitä ei lähetetä. Juuri siksi design-sivun 159 euron maljakko ei nouse
 * kärkeen — sitä ei toimiteta Suomen ulkopuolelle.
 */
export function pickHighlights(products: Product[], n: number): Product[] {
  return products
    .map((p, i) => ({ p, i, k: BREADTH[PARTNERS[p.partnerId]?.shipsTo] ?? 3 }))
    .sort((a, b) => a.k - b.k || b.p.priceFrom - a.p.priceFrom || a.i - b.i)
    .slice(0, n)
    .map((x) => x.p)
}
