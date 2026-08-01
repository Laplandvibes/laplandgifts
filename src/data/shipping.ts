import type { CountryCode, ShippingZone } from './types'

/** EU:n 27 jäsenmaata, ISO-3166-1 alpha-2. Britannia ei ole EU-maa. */
export const EU_COUNTRIES = [
  'AT','BE','BG','CY','CZ','DE','DK','EE','ES','FI','FR','GR','HR','HU',
  'IE','IT','LT','LU','LV','MT','NL','PL','PT','RO','SE','SI','SK',
]

/**
 * Toimittaako tämän vyöhykkeen kumppani annettuun maahan.
 *
 * `except` on lista maita, joihin ei toimiteta vaikka vyöhyke sallisi
 * (ISO-3166-1 alpha-2). Poikkeus voittaa aina vyöhykkeen: 'worldwide' +
 * ['US'] EI toimita Yhdysvaltoihin. Parametri on valinnainen, jotta vanhat
 * kaksiparametriset kutsut toimivat ennallaan.
 */
export function shipsTo(
  zone: ShippingZone,
  country: string,
  except: CountryCode[] = [],
): boolean {
  if (except.includes(country)) return false
  if (zone === 'worldwide') return true
  if (zone === 'eu') return EU_COUNTRIES.includes(country)
  return country === 'FI'
}

/**
 * Kumppanin ja tuotteen poikkeuslistat yhtenä joukkona.
 *
 * 🔴 Tuotteen lista TÄYDENTÄÄ kumppanin listaa eikä korvaa sitä. Jos
 * korvaisi, kaupan oma maarajaus katoaisi heti kun tuotteelle lisätään yksi
 * oma poikkeus, eli tuote näkyisi maassa johon koko kauppa ei toimita.
 */
export function mergeExcept(
  ...lists: Array<CountryCode[] | undefined>
): CountryCode[] {
  const all = new Set<CountryCode>()
  for (const list of lists) for (const c of list ?? []) all.add(c)
  return [...all].sort()
}
