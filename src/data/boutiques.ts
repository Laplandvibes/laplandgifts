import type { CategoryId } from './types'

/**
 * Paikkakunnat joilla on listattuja putiikkeja. Lista on Lapin kuntia:
 * Oulu, Kuusamo ja Ruka eivät kuulu tänne, koska hakemisto lupaa
 * "vain lappilaisia yrityksiä".
 *
 * Joulupukin Pajakylä ei ole oma paikkakunta vaan Rovaniemen kaupunginosa.
 * Se säilyy `district`-kentässä, jotta osoitetieto ei katoa, mutta
 * ryhmittely menee Rovaniemen alle.
 */
export type TownId = 'rovaniemi' | 'inari' | 'posio' | 'levi' | 'sodankyla'

export const TOWN_IDS: TownId[] = ['rovaniemi', 'inari', 'posio', 'levi', 'sodankyla']

export interface Boutique {
  /** URL-slug: /boutique/<slug>. */
  slug: string
  /** Yrityksen oma nimi. Ei käännetä. */
  name: string
  town: TownId
  /** Kaupunginosa tai käyntikohde, esim. "Joulupukin Pajakylä". */
  district?: string
  /** Yrityksen oma sivu ilman query-osaa. UTM lisätään linkitettäessä. */
  url: string
  /**
   * Katuosoite. Puuttuu v1:ssä: lähdedatassa (laplandstore-new/LocalShops.tsx)
   * ei ole osoitteita, ja keksitty osoite on pahempi kuin puuttuva. Kenttä on
   * olemassa jotta osoitteet voi lisätä myöhemmin ilman datamuutosta, kun ne
   * on luettu yrityksen omalta sivulta.
   *
   * 🔴 Aukioloaikoja ei lisätä tähän eikä muuallekaan: ne vanhenevat eikä
   * niille ole ylläpitoprosessia. Väärä aukioloaika on huonompi kuin ei
   * aukioloaikaa.
   */
  address?: string
  hasOnlineStore: boolean
  hasPhysicalStore: boolean
  /**
   * Giftsin tuotekategoria johon putiikkisivu ristiinlinkittää. Tämä on se
   * mekanismi jolla hakemisto ansaitsee paikkansa kaupan sisällä.
   */
  giftsCategory: CategoryId
  /**
   * Auktorisoitu saamelaiskäsityön myyjä. Verkoston sääntö: saamelaistuotteita
   * myydään vain auktorisoitujen kautta, ei koskaan imitaatioita.
   */
  samiAuthorized?: boolean
  /** Päivä jona URL ja myyntikanavat tarkistettiin yrityksen omalta sivulta. */
  verifiedAt: string
}

/**
 * Kaikki URLit mitattiin 2026-08-07 selain-UA:lla: portti oli 200 **ja**
 * yrityksen oma title, ei pelkkä 200.
 *
 * 🔴 Kolme storen listausta ei läpäissyt porttia, vaikka lähdedatan kommentti
 * lupasi "Verified April 2026, confirmed URLs". Ne olivat livenä laplandstore.fi:llä:
 *   - Lapin Kelloseppä: lapinkelloseppa.fi ei ratkea (ENOTFOUND, myös www),
 *     eikä yritystä löydy haulla. Poistettu.
 *   - Arctic Design Shop: arcticdesignshop.com on myynnissä GoDaddyssa;
 *     runko on 114 tavua JS-ohjausta parkkisivulle. Poistettu.
 *   - Taigakoru: Oulu ei ole Lappia. Poistettu (Vesa 2026-08-07).
 *
 * 🔴 Duodji Shop palauttaa nodelle 403 mutta on täysin kunnossa oikealla
 * selaimella. Botintorjunta ei ole kuollut linkki: älä poista sitä
 * automaattisen tarkistuksen perusteella.
 */
export const BOUTIQUES: Boutique[] = [
  { slug: 'lauri-handicrafts', name: 'Lauri Handicrafts', town: 'rovaniemi',
    url: 'https://www.laurihouse.com', hasOnlineStore: true, hasPhysicalStore: true,
    giftsCategory: 'handicrafts', verifiedAt: '2026-08-07' },
  { slug: 'marttiini', name: 'Marttiini', town: 'rovaniemi',
    url: 'https://www.marttiini.fi', hasOnlineStore: true, hasPhysicalStore: true,
    giftsCategory: 'handicrafts', verifiedAt: '2026-08-07' },
  { slug: 'pentik', name: 'Pentik', town: 'posio',
    url: 'https://www.pentik.com', hasOnlineStore: true, hasPhysicalStore: true,
    giftsCategory: 'design', verifiedAt: '2026-08-07' },
  { slug: 'duodji-shop', name: 'Duodji Shop', town: 'inari', district: 'Sajos',
    url: 'https://duodjishop.fi', hasOnlineStore: true, hasPhysicalStore: true,
    giftsCategory: 'handicrafts', samiAuthorized: true, verifiedAt: '2026-08-07' },
  // Nimi on 'Samekki', ei 'Samekki, Sámi Duodji': se on yrityksen oma title
  // (mitattu 2026-08-07), ja nimessä oleva pilkku luki luettelossa kahtena
  // putiikkina ("3 putiikkia: Duodji Shop, Samekki, Sámi Duodji, Siida Shop").
  { slug: 'samekki', name: 'Samekki', town: 'inari',
    url: 'https://samekki.fi', hasOnlineStore: true, hasPhysicalStore: true,
    giftsCategory: 'handicrafts', samiAuthorized: true, verifiedAt: '2026-08-07' },
  { slug: 'piece-of-lapland', name: 'Piece of Lapland', town: 'rovaniemi',
    url: 'https://www.pieceoflapland.fi', hasOnlineStore: true, hasPhysicalStore: true,
    giftsCategory: 'handicrafts', verifiedAt: '2026-08-07' },
  { slug: 'rovaniemi-souvenirs-shop', name: 'Rovaniemi Souvenirs Shop', town: 'rovaniemi',
    district: 'Joulupukin Pajakylä', url: 'https://www.rovaniemisouvenirsshop.fi',
    hasOnlineStore: true, hasPhysicalStore: true, giftsCategory: 'handicrafts',
    verifiedAt: '2026-08-07' },
  { slug: 'christmas-house-shop', name: 'Christmas House Shop', town: 'rovaniemi',
    district: 'Joulupukin Pajakylä', url: 'https://christmashousesanta.fi',
    hasOnlineStore: false, hasPhysicalStore: true, giftsCategory: 'treats',
    verifiedAt: '2026-08-07' },
  // Kauppa asuu kulttuuritalon sisällä, joten linkki menee sen omalle sivulle
  // eikä talon juureen: juuri kertoo konserteista eikä myymälästä.
  { slug: 'korundi-shop', name: 'Korundi Shop', town: 'rovaniemi',
    url: 'https://korundi.fi/fi/kavijalle/korundi-shop',
    hasOnlineStore: false, hasPhysicalStore: true,
    giftsCategory: 'design', verifiedAt: '2026-08-07' },
  // Putiikilla ei ole omaa domainia; levi.fi ylläpitää sen sivua. Linkki
  // osoittaa siihen eikä levi.fi:n juureen, joka ei mainitse SHOPPIa lainkaan.
  //
  // 🟡 TARKISTETTAVA TALVIKAUDEN ALUSSA. Kaksi signaalia eri suuntiin (7.8.2026):
  // levi.fi:n englanninkielinen sivu on pystyssä (200 + oikea title), mutta
  // suomenkielinen 404:ää, ja haussa nousi Facebook-maininta että liike on
  // suljettu toistaiseksi. Vesan päätös 7.8.: jätetään, koska Levi on
  // hiihtokeskus ja kausiliikkeen kesäsulku on normaalia. Jos liike ei avaudu
  // talvikaudeksi, poista tämä rivi: silloin Levi putoaa myös TownId-tyypistä.
  { slug: 'shoppi-craft-design', name: 'SHOPPI Craft & Design', town: 'levi',
    url: 'https://www.levi.fi/en/services/shoppi-craft-and-design-lapland/',
    hasOnlineStore: false, hasPhysicalStore: true,
    giftsCategory: 'design', verifiedAt: '2026-08-07' },
  { slug: 'siida-shop', name: 'Siida Shop', town: 'inari', district: 'Saamelaismuseo Siida',
    url: 'https://siida.fi', hasOnlineStore: false, hasPhysicalStore: true,
    giftsCategory: 'handicrafts', samiAuthorized: true, verifiedAt: '2026-08-07' },
  { slug: 'tankavaaran-kultakyla', name: 'Tankavaaran Kultakylä', town: 'sodankyla',
    district: 'Tankavaara', url: 'https://www.tankavaara.fi',
    hasOnlineStore: false, hasPhysicalStore: true, giftsCategory: 'design',
    verifiedAt: '2026-08-07' },
]

export function boutiqueBySlug(slug: string): Boutique | undefined {
  return BOUTIQUES.find((b) => b.slug === slug)
}

export function boutiquesByTown(town: TownId): Boutique[] {
  return BOUTIQUES.filter((b) => b.town === town)
}

/**
 * Uloslinkki yrityksen omille sivuille. Nämä eivät ole affiliate-linkkejä
 * vaan tavallisia viittauksia, joten `rel="sponsored"` olisi väärin: se
 * kertoisi Googlelle maksetusta suhteesta jota ei ole.
 */
export function boutiqueOutboundUrl(b: Boutique): string {
  const sep = b.url.includes('?') ? '&' : '?'
  return `${b.url}${sep}utm_source=laplandvibes&utm_medium=referral&utm_campaign=store_${b.slug}`
}

/**
 * Kuinka monta putiikkia paikkakunnalla on oltava ennen kuin se saa oman
 * sivun. Yhden putiikin paikkakuntasivu on ohut sisältö, ja Google kohtelee
 * sitä sen mukaisesti.
 *
 * Kynnys on funktio eikä käsin ylläpidetty lista: kun yrittäjäkampanja tuo
 * Leville kaksi putiikkia lisää, /boutiques/levi ilmestyy itsestään reitteihin,
 * prerenderiin ja sitemapiin.
 */
export const TOWN_PAGE_MIN_BOUTIQUES = 3

export function townsWithPages(): TownId[] {
  return TOWN_IDS
    .filter((t) => boutiquesByTown(t).length >= TOWN_PAGE_MIN_BOUTIQUES)
    .sort()
}

export function townsWithoutPages(): TownId[] {
  return TOWN_IDS
    .filter((t) => boutiquesByTown(t).length < TOWN_PAGE_MIN_BOUTIQUES)
    .sort()
}

export function boutiqueTownPaths(): string[] {
  return townsWithPages().map((t) => `/boutiques/${t}`)
}
