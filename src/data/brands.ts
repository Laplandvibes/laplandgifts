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
  { id: 'foodin', name: 'Foodin', founded: '2013', officialUrl: 'https://foodin.fi/' },
  { id: 'kuivalihakundi', name: 'Kuivalihakundi', founded: '2015', officialUrl: 'https://kuivalihakundi.com/' },
  { id: 'halti', name: 'Halti', founded: '1976', officialUrl: 'https://halti.com/' },
  { id: 'north-outdoor', name: 'North Outdoor', founded: '', officialUrl: 'https://northoutdoor.com/' },
  { id: 'marttiini', name: 'Marttiini', founded: '1928', officialUrl: 'https://www.marttiini.fi/' },
  { id: 'kupilka', name: 'Kupilka', founded: '1996', officialUrl: 'https://kupilka.fi/en' },
  { id: 'nordicbuddies', name: 'Nordicbuddies', founded: '2019', officialUrl: 'https://nordicbuddies.com/' },
  { id: 'marimekko', name: 'Marimekko', founded: '1951', officialUrl: 'https://www.marimekko.com/' },
  { id: 'rento', name: 'Rento', founded: '', officialUrl: 'https://rentosauna.fi/' },
  { id: 'iittala', name: 'Iittala', founded: '1881', officialUrl: 'https://www.iittala.com' },
  { id: 'arctic-warriors', name: 'Arctic Warriors', founded: '2014', officialUrl: 'https://arcticwarriors.fi/' },
  { id: 'makia', name: 'Makia', founded: '2001', officialUrl: 'https://makia.com' },
  { id: 'pentik', name: 'Pentik', founded: '1971', officialUrl: 'https://www.pentik.com/' },
  { id: 'arabia', name: 'Arabia', founded: '1873', officialUrl: 'https://arabia.fi/' },
  { id: 'fazer', name: 'Fazer', founded: '1891', officialUrl: 'https://www.fazer.fi/' },
  { id: 'moomin', name: 'Moomin', founded: '1958', officialUrl: 'https://www.moomin.com/' },
  { id: 'wild-about-lapland', name: 'Wild About Lapland', founded: '', officialUrl: 'https://wildaboutlapland.com/' },
  { id: 'meritalo', name: 'Meritalo', founded: '1995', officialUrl: 'https://meritalo.com/' },
  { id: 'nordqvist', name: 'Nordqvist', founded: '1979', officialUrl: 'https://nordqvist.fi/' },
  { id: 'puhdistamo', name: 'Puhdistamo', founded: '2009', officialUrl: 'https://www.puhdistamo.fi/' },
  { id: 'emendo', name: 'Emendo', founded: '1986', officialUrl: 'https://emendo.fi' },
  { id: 'kaino-drinks', name: 'KAINO Drinks', founded: '', officialUrl: 'https://poikainparhaat.fi/kaino/' },
  { id: 'omega7', name: 'Omega7', founded: '1997', officialUrl: 'https://www.omega7.fi/' },
  { id: 'kaapa-mushrooms', name: 'Kääpä Mushrooms', founded: '2018', officialUrl: 'https://www.kaapamushrooms.com/' },
  { id: 'halva', name: 'Halva', founded: '1931', officialUrl: 'https://halva.fi/' },
  { id: 'kilpissafarit', name: 'Kilpissafarit', founded: '1995', officialUrl: 'https://www.kilpissafaris.fi/' },
  { id: 'kaavi-porcini', name: 'Kaavi Porcini', founded: '', officialUrl: 'https://kaaviporcini.fi/' },
  { id: 'tammer', name: 'Tammer', founded: '1954', officialUrl: 'https://www.tammerbrands.fi/' },
  { id: 'finlayson', name: 'Finlayson', founded: '1820', officialUrl: 'https://www.finlayson.fi' },
  { id: 'finnish-flavours', name: 'Finnish Flavours', founded: '', officialUrl: 'https://finnishflavours.com/' },
  { id: 'aurora-borealis', name: 'Aurora Borealis', founded: '', officialUrl: 'https://www.tammerbrands.fi/brandit/aurora-borealis/' },
  { id: 'fiskars', name: 'Fiskars', founded: '1649', officialUrl: 'https://www.fiskars.com/fi-fi' },
  { id: 'golden-crown-levin-iglut', name: 'Golden Crown Levin Iglut', founded: '2008', officialUrl: 'https://leviniglut.fi/' },
  { id: 'sisu', name: 'Sisu', founded: '1928', officialUrl: 'https://www.cloetta.fi/brandit/sisu/' },
  { id: 'kultakuume-com', name: 'Kultakuume.com', founded: '2008', officialUrl: 'https://kultakuume.com/' },
  { id: 'muurla', name: 'Muurla', founded: '1974', officialUrl: 'https://www.muurla.com' },
  { id: 'novita', name: 'Novita', founded: '1928', officialUrl: 'https://novita.com/' },
  { id: 'mikebon', name: 'Mikebon', founded: '1994', officialUrl: 'https://www.mikebon.fi/' },
  { id: 'aromageddon', name: 'Aromageddon', founded: '2024', officialUrl: 'https://aromageddon.fi/' },
  { id: 'leijona', name: 'Leijona', founded: '1933', officialUrl: 'https://www.cloetta.fi/brandit/leijona/' },
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
