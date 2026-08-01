import type { CountryCode } from './types'

/**
 * Maakoodi → maan nimi. Vain ne maat, joita kaupan toimitusrajaukset oikeasti
 * tarvitsevat: EU:n 27, toimitusmaavalitsimen kaukomarkkinat ja Etelä-Amerikka
 * (jonka Moomin Shop rajaa elintarvikkeistaan pois).
 *
 * 🔴 MIKSI OMA TAULUKKO EIKÄ Intl.DisplayNames: tuotesivu prerenderöidään
 * Nodella, ja ICU:n täysi maakäännösdata ei ole kaikissa ajoympäristöissä
 * mukana. Väärä tai puuttuva nimi tuotesivulla ("US" maan nimen sijaan) on
 * juuri se tieto, jonka takia lukija ei osaa arvioida koskeeko rajaus häntä.
 * Taulukko on käsin kirjoitettu, joten se on aina sama joka ympäristössä.
 *
 * Tuntematon koodi palautuu sellaisenaan: koodi on huono nimi mutta ei valhe.
 */
export const COUNTRY_NAMES: Record<string, { en: string; fi: string }> = {
  // EU 27
  AT: { en: 'Austria', fi: 'Itävalta' },
  BE: { en: 'Belgium', fi: 'Belgia' },
  BG: { en: 'Bulgaria', fi: 'Bulgaria' },
  CY: { en: 'Cyprus', fi: 'Kypros' },
  CZ: { en: 'Czechia', fi: 'Tšekki' },
  DE: { en: 'Germany', fi: 'Saksa' },
  DK: { en: 'Denmark', fi: 'Tanska' },
  EE: { en: 'Estonia', fi: 'Viro' },
  ES: { en: 'Spain', fi: 'Espanja' },
  FI: { en: 'Finland', fi: 'Suomi' },
  FR: { en: 'France', fi: 'Ranska' },
  GR: { en: 'Greece', fi: 'Kreikka' },
  HR: { en: 'Croatia', fi: 'Kroatia' },
  HU: { en: 'Hungary', fi: 'Unkari' },
  IE: { en: 'Ireland', fi: 'Irlanti' },
  IT: { en: 'Italy', fi: 'Italia' },
  LT: { en: 'Lithuania', fi: 'Liettua' },
  LU: { en: 'Luxembourg', fi: 'Luxemburg' },
  LV: { en: 'Latvia', fi: 'Latvia' },
  MT: { en: 'Malta', fi: 'Malta' },
  NL: { en: 'Netherlands', fi: 'Alankomaat' },
  PL: { en: 'Poland', fi: 'Puola' },
  PT: { en: 'Portugal', fi: 'Portugali' },
  RO: { en: 'Romania', fi: 'Romania' },
  SE: { en: 'Sweden', fi: 'Ruotsi' },
  SI: { en: 'Slovenia', fi: 'Slovenia' },
  SK: { en: 'Slovakia', fi: 'Slovakia' },

  // Toimitusmaavalitsimen EU:n ulkopuoliset maat
  AU: { en: 'Australia', fi: 'Australia' },
  CA: { en: 'Canada', fi: 'Kanada' },
  CH: { en: 'Switzerland', fi: 'Sveitsi' },
  GB: { en: 'United Kingdom', fi: 'Britannia' },
  JP: { en: 'Japan', fi: 'Japani' },
  KR: { en: 'South Korea', fi: 'Etelä-Korea' },
  NO: { en: 'Norway', fi: 'Norja' },
  US: { en: 'United States', fi: 'Yhdysvallat' },

  // Etelä-Amerikka
  AR: { en: 'Argentina', fi: 'Argentiina' },
  BO: { en: 'Bolivia', fi: 'Bolivia' },
  BR: { en: 'Brazil', fi: 'Brasilia' },
  CL: { en: 'Chile', fi: 'Chile' },
  CO: { en: 'Colombia', fi: 'Kolumbia' },
  EC: { en: 'Ecuador', fi: 'Ecuador' },
  FK: { en: 'Falkland Islands', fi: 'Falklandinsaaret' },
  GF: { en: 'French Guiana', fi: 'Ranskan Guayana' },
  GY: { en: 'Guyana', fi: 'Guyana' },
  PE: { en: 'Peru', fi: 'Peru' },
  PY: { en: 'Paraguay', fi: 'Paraguay' },
  SR: { en: 'Suriname', fi: 'Suriname' },
  UY: { en: 'Uruguay', fi: 'Uruguay' },
  VE: { en: 'Venezuela', fi: 'Venezuela' },
}

/**
 * Etelä-Amerikan maat ISO-koodeina, YK:n aluejaon mukaan. Kun kumppani
 * kirjoittaa toimitusrajauksen mantereena ("South America"), se puretaan
 * tähän listaan: suodatin vertaa maakoodeja, ei mantereita.
 */
export const SOUTH_AMERICA: CountryCode[] = [
  'AR', 'BO', 'BR', 'CL', 'CO', 'EC', 'FK', 'GF', 'GY', 'PE', 'PY', 'SR', 'UY', 'VE',
]

/** Maan nimi valitulla kielellä. Muut kielet saavat englannin, kuten SHOP_COPY. */
export function countryName(code: CountryCode, lang: string): string {
  const row = COUNTRY_NAMES[code]
  if (!row) return code
  return lang === 'fi' ? row.fi : row.en
}

/** Poikkeuslista maiden niminä, aakkosjärjestyksessä valitulla kielellä. */
export function countryNames(codes: CountryCode[], lang: string): string[] {
  return codes
    .map((c) => countryName(c, lang))
    .sort((a, b) => a.localeCompare(b, lang === 'fi' ? 'fi' : 'en'))
}
