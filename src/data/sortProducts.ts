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
  const order = (a: Ranked, b: Ranked) => a.k - b.k || b.p.priceFrom - a.p.priceFrom || a.i - b.i
  const sorted = products
    .map((p, i) => ({ p, i, k: BREADTH[PARTNERS[p.partnerId]?.shipsTo] ?? 3 }))
    .sort(order)
  // 🔴 Yksi tuote per brändi ensin (Vesa 7.11.2026: vaatesivun Talvi-nosto oli
  // neljä Makian tuotetta, koska Makia toimittaa kaikkialle ja on kallein, ja samat
  // neljä toistuivat heti alla Makian hyllyssä). Vasta jos brändejä on liian vähän,
  // loput täytetään samasta järjestyksestä. Valitut järjestetään lopuksi samalla
  // avaimella, joten toimituslaajuus ratkaisee yhä kärjen.
  const picked: Ranked[] = []
  const brands = new Set<string>()
  for (const x of sorted) {
    if (picked.length === n) break
    if (brands.has(x.p.brand)) continue
    brands.add(x.p.brand)
    picked.push(x)
  }
  for (const x of sorted) {
    if (picked.length === n) break
    if (!picked.includes(x)) picked.push(x)
  }
  return picked.sort(order).map((x) => x.p)
}

interface Ranked {
  p: Product
  i: number
  k: number
}
