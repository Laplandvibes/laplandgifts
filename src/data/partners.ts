import type { Partner } from './types'

/** LV-verkoston pakolliset rel-attribuutit affiliate-linkeissä.
 *  EI noreferreriä: redirect-Worker lukee Refererin attribuutioon. */
export const AFFILIATE_REL = 'sponsored nofollow noopener'

export const PARTNERS: Record<string, Partner> = {
  halti: {
    id: 'halti',
    name: 'Halti',
    network: 'adtraction',
    baseUrl: 'https://halti.com',
    shipsTo: 'eu',
    trackingTemplate: 'https://to.halti.fi/t/t?a=1622204962&as=2086870803&t=2&tk=1&url={URL}',
    verifiedAt: '2026-07-31',
  },
  makia: {
    id: 'makia',
    name: 'Makia',
    network: 'adtraction',
    baseUrl: 'https://makia.com',
    shipsTo: 'worldwide',
    trackingTemplate: 'https://go.makia.com/t/t?a=1944565206&as=2086870803&t=2&tk=1&url={URL}',
    verifiedAt: '2026-07-31',
  },
  moomin: {
    id: 'moomin',
    name: 'Moomin Shop',
    network: 'direct',
    baseUrl: 'https://shop.moomin.com',
    shipsTo: 'worldwide',
    verifiedAt: '2026-07-31',
  },
  marttiini: {
    id: 'marttiini',
    name: 'Marttiini',
    network: 'direct',
    // ePages/Vilkas-kauppa: tuotesivu on query-parametrissa (?ObjectPath=...).
    // partnerHref enkoodaa polun kauttaviivat, ja kauppa tarjoilee silti oikean
    // tuotteen (testattu UTM-parametreilla 31.7.2026).
    baseUrl: 'https://www.marttiini.fi',
    shipsTo: 'worldwide',
    verifiedAt: '2026-07-31',
  },
  northoutdoor: {
    id: 'northoutdoor',
    name: 'North Outdoor',
    network: 'direct',
    baseUrl: 'https://northoutdoor.com',
    // Toimituskäytäntö 1.8.2026: "Suomeen (sis. Ahvenanmaa), Pohjoismaihin,
    // Baltiaan sekä laajasti muualle Euroopan unioniin". Norja mainitaan
    // esimerkkinä EU:n ulkopuolisesta kohteesta, mutta maailmanlaajuista
    // toimitusta ei luvata.
    shipsTo: 'eu',
    verifiedAt: '2026-08-01',
  },
  nordicnest: {
    id: 'nordicnest',
    name: 'Nordic Nest',
    network: 'direct',
    // .com hinnoittelee euroissa ja renderöi hinnan palvelimella, joten hinta
    // on luettavissa tuotesivulta. .fi on selainpuolen sovellus, jonka hintaa
    // ei voi lukea sivulta.
    baseUrl: 'https://www.nordicnest.com',
    // Shipping Information 1.8.2026: "We offer worldwide shipping".
    shipsTo: 'worldwide',
    verifiedAt: '2026-08-01',
  },
  aarikka: {
    id: 'aarikka',
    name: 'Aarikka',
    network: 'direct',
    baseUrl: 'https://www.aarikka.com',
    // 🔴 Payment and Delivery 1.8.2026 luettelee noin 70 toimitusmaata kaikilta
    // mantereilta, mutta Yhdysvallat on nimenomaisesti rajattu pois tullisyistä.
    // Siksi tämä EI ole 'worldwide': se lupaisi toimituksen maahan, johon
    // kauppa ei toimita. 'eu' on tosi (kaikki 27 EU-maata ovat listalla) eikä
    // lupaa liikaa; suodatin näyttää siis kumppanin harvemmin kuin voisi.
    shipsTo: 'eu',
    verifiedAt: '2026-08-01',
  },
  scandinavianoutdoor: {
    id: 'scandinavianoutdoor',
    name: 'Scandinavian Outdoor',
    network: 'direct',
    baseUrl: 'https://scandinavianoutdoor.fi',
    // Toimitusehdot 1.8.2026 (Asiakaspalvelu → Tilausten toimitus): "toimitamme
    // tuotteita ympäri maailmaa", ja EU:n ulkopuolisissa tilauksissa
    // vastaanottaja vastaa tulli- ja veromaksuista. Myös Ahvenanmaa mainitaan
    // erikseen. 🔴 LV:llä on Adtraction-suhde tähän kauppaan, mutta meillä ei
    // ole syvälinkkitemplatea verkoston paneelista, joten linkki menee toistaiseksi
    // UTM-reittiä. Kun template saadaan, se lisätään tähän trackingTemplateksi.
    shipsTo: 'worldwide',
    verifiedAt: '2026-08-01',
  },
  lapuankankurit: {
    id: 'lapuankankurit',
    name: 'Lapuan Kankurit',
    network: 'direct',
    baseUrl: 'https://lapuankankurit.fi',
    // Shipping & payment 1.8.2026: nimetty maalista (Belgia, Alankomaat, Irlanti,
    // Britannia, Italia, Itävalta, Luxemburg, Norja, Ranska, Ruotsi, Saksa,
    // Suomi ilman Ahvenanmaata, Sveitsi, Tanska). Ei maailmanlaajuinen.
    shipsTo: 'eu',
    verifiedAt: '2026-08-01',
  },
  pentik: {
    id: 'pentik',
    name: 'Pentik',
    network: 'direct',
    // 🔴 en.pentik.com, ei www.pentik.com. Suomenkielinen kauppa toimittaa vain
    // Manner-Suomeen ja ohjaa EU-tilaukset nimenomaan englanninkieliseen
    // kauppaan; EU:n ulkopuolelle tilataan sähköpostilla Kuusamon myymälästä.
    // Linkki menee siis siihen kauppaan joka oikeasti toimittaa ostajalle.
    baseUrl: 'https://en.pentik.com',
    // Shipping and Payment 1.8.2026: Manner-Suomi + 26 nimettyä EU-maata.
    shipsTo: 'eu',
    verifiedAt: '2026-08-01',
  },
  suomikauppa: {
    id: 'suomikauppa',
    name: 'Suomikauppa.fi',
    network: 'direct',
    baseUrl: 'https://suomikauppa.fi',
    // Toimitusehdot 31.7.2026: "toimittaa tuotteita lähes kaikkialle maailmaan".
    shipsTo: 'worldwide',
    verifiedAt: '2026-07-31',
  },
  nordqvist: {
    id: 'nordqvist',
    name: 'Nordqvist',
    network: 'direct',
    baseUrl: 'https://nordqvist.fi',
    // 🔴 Toimituskäytäntö 1.8.2026 tuntee vain Postin kotimaan toimitustavat
    // (noutopiste, Express yritysosoitteisiin, kotiinkuljetus) eikä mainitse
    // ulkomaantoimituksia lainkaan. Siksi 'fi': tuote näkyy suodattimessa vain
    // Suomeen tilaaville, tyypillisesti matkan aikana tilaaville.
    shipsTo: 'fi',
    verifiedAt: '2026-08-01',
  },
  kuivalihakundi: {
    id: 'kuivalihakundi',
    name: 'Kuivalihakundi',
    network: 'direct',
    baseUrl: 'https://kuivalihakundi.com',
    // Liha on eläinperäinen elintarvike: sitä ei saa postittaa EU:n ulkopuolelle.
    shipsTo: 'eu',
    verifiedAt: '2026-07-31',
  },
  arcticpowerberries: {
    id: 'arcticpowerberries',
    name: 'Arctic Power Berries',
    network: 'direct',
    baseUrl: 'https://arcticpowerberries.com',
    // 🔴 Kaupan oletusvaluutta on GBP, ei EUR (Shopify.currency.active = "GBP",
    // og:price:currency = GBP). Tuotteiden currency-kenttä on siksi 'GBP'.
    shipsTo: 'worldwide',
    verifiedAt: '2026-07-31',
  },
  ruohonjuuri: {
    id: 'ruohonjuuri',
    name: 'Ruohonjuuri',
    network: 'direct',
    baseUrl: 'https://www.ruohonjuuri.fi',
    // Toimitusehdot 31.7.2026: "Suomeen ja ulkomaille EU:n vero- ja tullialueen
    // sisälle". Ahvenanmaa, Kanarian saaret ja Norja on rajattu ulos.
    shipsTo: 'eu',
    verifiedAt: '2026-07-31',
  },
  pod: {
    id: 'pod',
    name: 'LaplandVibes Store',
    network: 'pod',
    // 🔴 KAUPPAA EI OLE VIELÄ AVATTU. Vesa luo Fourthwall-tilin, ja vasta sen
    // jälkeen tähän tulee oikeita tuotteita. Siihen asti:
    //   - merch-kategoria on tyhjä (ks. products.ts ja catalog.test.ts)
    //   - shipsTo ja baseUrl ovat aiottuja arvoja, EI verifioituja
    //   - merch-tuotteiden partnerProductUrl osoittaa kaupan juureen, ei
    //     keksittyihin tuotesivupolkuihin
    // Kun kauppa aukeaa: tarkista domain, toimitusalueet ja päivitä verifiedAt.
    baseUrl: 'https://laplandvibes.fourthwall.com',
    shipsTo: 'worldwide',
    verifiedAt: '2026-07-31',
  },
}

/**
 * Rakentaa kumppanilinkin. Kolme reittiä:
 *   1. trackingTemplate → affiliate-verkoston linkki, kohde enkoodattuna
 *   2. muuten          → kumppanin oma URL + LV:n UTM-parametrit
 * GYG-tuotteet EIVÄT kulje tästä: ne käyttävät shared/gyg/picks.ts:n gygHref().
 */
export function partnerHref(partner: Partner, productUrl: string, campaign: string): string {
  if (partner.trackingTemplate) {
    return partner.trackingTemplate.replace('{URL}', encodeURIComponent(productUrl))
  }
  const url = new URL(productUrl)
  url.searchParams.set('utm_source', 'laplandvibes')
  url.searchParams.set('utm_medium', 'referral')
  url.searchParams.set('utm_campaign', campaign)
  return url.toString()
}
