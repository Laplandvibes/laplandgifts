/**
 * Brändiesittelyt.
 *
 * 🔴 Miksi (Vesa 12.8.: "eikö meillä pitäisi olla sivulla esittelyosio
 * marimekosta, makiasta jne, eli mitä ne kertoo itsestään omilla
 * sivuillaan"): tuotekortti kertoo mitä tuote on, muttei kuka sen takana
 * on. Brändin nimi on myös se, jolla ostaja hakee.
 *
 * 🔴🔴 Tekstit EIVÄT ole kopioita brändin omasta markkinointitekstistä.
 * Se on heidän tekijänoikeuttaan ja hakukoneelle duplikaattisisältöä, eli
 * kopioiminen söisi juuri sen näkyvyyden, jonka vuoksi sivu tehdään.
 * Jokainen esittely on kirjoitettu omin sanoin brändin omalta sivulta
 * luetuista tosiasioista, ja officialUrl vie lähteelle.
 *
 * 🔴🔴 ALKUPERÄ on näiden tekstien tarkin kohta. Moni verkoston brändi on
 * suomalainen mutta EI suomalaisvalmisteinen: Halti kertoo itse tekevänsä
 * Suomessa vain sukat ja pipot, Nordicbuddiesin puuvilla tulee Kiinasta,
 * Arabian keramiikkatuotanto siirtyi Helsingistä 2016, ja Makian
 * päätuotantomaa on Türkiye. Väärä alkuperäväite on kuluttajansuoja-asia,
 * joten jokainen väite tarkistettiin ja epävarmat jätettiin pois. Älä
 * lisää "valmistettu Suomessa" -tyyppistä väitettä ilman lähdettä.
 *
 * 🔴 Tässä tiedostossa EI ole arvoimportteja: scripts/build-routes-json.mjs
 * lataa sen suoraan Nodella, joka ei ratkaise laajennuksettomia polkuja.
 * Tuoteliitos asuu brandProducts.ts:ssä. (Sama oppi kuin themes.ts 12.8.)
 */
export interface Brand {
  id: string
  /** Sama merkkijono kuin tuotteiden `brand`-kentässä. Ei käännetä. */
  name: string
  /** Perustamisvuosi, tyhjä jos brändi ei itse ilmoita sitä. */
  founded: string
  /** Brändin oma sivu. Esittelyn lähde ja lukijan reitti eteenpäin. */
  officialUrl: string
}

export const BRANDS: Brand[] = [
  { id: 'aarikka', name: 'Aarikka', founded: '1954', officialUrl: 'https://www.aarikka.fi' },
  { id: 'foodin', name: 'Foodin', founded: '2013', officialUrl: 'https://foodin.fi/' },
  { id: 'kuivalihakundi', name: 'Kuivalihakundi', founded: '2015', officialUrl: 'https://kuivalihakundi.com/' },
  { id: 'halti', name: 'Halti', founded: '1976', officialUrl: 'https://halti.com/' },
  { id: 'north-outdoor', name: 'North Outdoor', founded: '', officialUrl: 'https://northoutdoor.com/' },
  { id: 'marttiini', name: 'Marttiini', founded: '1928', officialUrl: 'https://www.marttiini.fi/' },
  { id: 'kupilka', name: 'Kupilka', founded: '1996', officialUrl: 'https://kupilka.fi/en' },
  { id: 'nordicbuddies', name: 'Nordicbuddies', founded: '2019', officialUrl: 'https://nordicbuddies.com/' },
  { id: 'marimekko', name: 'Marimekko', founded: '1951', officialUrl: 'https://www.marimekko.com/' },
  { id: 'rento', name: 'Rento', founded: '', officialUrl: 'https://rentosauna.fi/' },
  { id: 'lapuan-kankurit', name: 'Lapuan Kankurit', founded: '1917', officialUrl: 'https://lapuankankurit.fi/' },
  { id: 'iittala', name: 'Iittala', founded: '1881', officialUrl: 'https://www.iittala.com' },
  { id: 'arctic-warriors', name: 'Arctic Warriors', founded: '2014', officialUrl: 'https://arcticwarriors.fi/' },
  { id: 'makia', name: 'Makia', founded: '2001', officialUrl: 'https://makia.com' },
  { id: 'pentik', name: 'Pentik', founded: '1971', officialUrl: 'https://www.pentik.com/' },
  { id: 'arabia', name: 'Arabia', founded: '1873', officialUrl: 'https://arabia.fi/' },
  { id: 'fazer', name: 'Fazer', founded: '1891', officialUrl: 'https://www.fazer.fi/' },
  { id: 'moomin', name: 'Moomin', founded: '1958', officialUrl: 'https://www.moomin.com/' },
]

const BY_ID = new Map(BRANDS.map((b) => [b.id, b]))
const BY_NAME = new Map(BRANDS.map((b) => [b.name, b]))

export function brandById(id: string): Brand | undefined {
  return BY_ID.get(id)
}

/**
 * Tuotteen `brand`-kentästä brändisivulle. Palauttaa undefined jos
 * brändillä ei ole esittelyä, jolloin kortti jättää linkin pois.
 */
export function brandByName(name: string): Brand | undefined {
  return BY_NAME.get(name)
}
