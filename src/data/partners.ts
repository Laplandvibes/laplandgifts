import type { Partner } from './types'

/** LV-verkoston pakolliset rel-attribuutit affiliate-linkeissä.
 *  EI noreferreriä: redirect-Worker lukee Refererin attribuutioon. */
export const AFFILIATE_REL = 'sponsored nofollow noopener'

export const PARTNERS: Record<string, Partner> = {
  halti: {
    id: 'halti',
    name: 'Halti',
    network: 'adtraction',
    // 🔴🔴 KORJATTU 2026-08-04: tässä luki `halticom` + halti.com, ja se rikkoi
    // kaikki yhdeksän Haltin ostonappia 2.–4.8. Kaksi erillistä virhettä:
    //
    // 1. `halticom`-reitin ohjelmatunnus a=1622204962 EI ole ohjelma vaan
    //    Haltin ainoan ohjelman komissiorivin id. Adtraction vastasi siihen
    //    sivulla "Invalid link" — ostaja ei päätynyt mihinkään.
    // 2. Ohjelma on FI-ohjelma (programURL https://www.halti.fi). Vaikka
    //    tunnus korjattaisiin, halti.com-syvälinkki hylätään ja klikki 302:aa
    //    valuesportal.com/?fallback=true -varasivulle. Sama kuin nordicnest 3.8.
    //
    // Mitattu 4.8. GETillä + selain-UA:lla (HEAD ja curlin oletus-UA saavat
    // Workerilta paljaan etusivun, eivät seurantalinkkiä):
    //   go/halti?sid=…&dest=https://www.halti.fi/products/<slug>
    //   → to.halti.fi/t/t?a=1622199573…&epi=laplandgifts_com_…&url=…
    //   → 200 + at_gd-eväste + meta-refresh täsmälleen tuotesivulle.
    // Kontrolli ilman as=-parametria: "Invalid link", ei evästettä.
    baseUrl: 'https://www.halti.fi',
    // Toimituskäytäntö luettu 4.8.2026: vain Posti, Matkahuolto ja PostNord
    // kotimaassa, "Ahvenanmaalle toimitukset eivät ole mahdollisia" — ei
    // yhtään ulkomaan toimitustapaa. Vyöhyke on siis fi, ei eu. (halti.com
    // toimitti EU:hun, mutta siihen kauppaan ei ole affiliate-ohjelmaa.)
    shipsTo: 'fi',
    workerRoute: 'halti',
    verifiedAt: '2026-08-04',
  },
  makia: {
    id: 'makia',
    name: 'Makia',
    network: 'adtraction',
    baseUrl: 'https://makia.com',
    shipsTo: 'worldwide',
    // 🔴 Workerin kautta, ei raakana trackingTemplatena. Aiemmin tässä oli
    // Adtractionin linkki suoraan lähdekoodissa. Se tuotti komission, mutta
    // ILMAN `epi=`-alatunnistetta: verkoston raportissa klikit olivat yhtä
    // erittelemätöntä massaa, eikä niistä nähnyt sivustoa eikä paikkaa.
    // Workerin makia-reitissä on täsmälleen sama ohjelmatunnus (a=1944565206),
    // joten komissio ei muutu — vain attribuutio paranee. Mitattu 2.8.2026:
    // go/makia?sid=…&dest=… → go.makia.com/t/t?a=1944565206…&epi=…&url=…
    workerRoute: 'makia',
    verifiedAt: '2026-08-02',
  },
  nordicbuddies: {
    id: 'nordicbuddies',
    name: 'Nordicbuddies',
    // Daisycon-kampanja 20538, 7 %, attribuutio 30 pv, hyväksyntä 91 pv.
    // Suomalainen brändi, jolla on virallinen lisenssi Muumeihin, Peppi
    // Pitkätossuun ja Mauri Kunnaksen hahmoihin: huppareita, t-paitoja,
    // pipoja ja sukkia.
    //
    // 🔴 TÄMÄ EI OLE sama kauppa kuin [[moomin]] (shop.moomin.com). Ne ovat
    // kaksi eri kauppiasta, ja Daisyconin syvälinkki kelpaa VAIN
    // nordicbuddies.com-osoitteisiin. shop.moomin.com-tuotteita ei siis saa
    // siirtää tämän reitin taakse — klikki hylättäisiin ja ostaja päätyisi
    // väärään kauppaan (sama vikamuoto kuin nordicnest 3.8. ja halti 4.8.).
    //
    // 🔴 Ohjelmalla on pitkä kielletty-hakusana-lista (muumi, moomin, peppi,
    // mauri kunnas, nuuskamuikkunen, …). Rajoitus koskee MAKSETTUA hakua ja
    // Shopping-mainoksia, ei orgaanista sisältöä. Jos giftsille joskus
    // avataan Google Shopping -syöte, termit on lisättävä negatiivisiksi
    // avainsanoiksi tili- ja kampanjatasolla tai ohjelmasta poistetaan.
    network: 'daisycon',
    baseUrl: 'https://nordicbuddies.com',
    // Toimitusehto luettu kaupan omalta sivulta 10.8.2026 (päivitetty
    // 25.2.2026): "We ship worldwide." Ilmainen toimitus yli 60 € EU + UK +
    // Norja, yli 100 € muualle maailmaan.
    shipsTo: 'worldwide',
    workerRoute: 'nordicbuddies',
    verifiedAt: '2026-08-10',
  },
  moomin: {
    id: 'moomin',
    name: 'Moomin Shop',
    network: 'direct',
    baseUrl: 'https://shop.moomin.com',
    // Delivery charges and estimated delivery times 1.8.2026: hinnasto erittelee
    // "USA, Canada, Australia, Hong Kong, China and the rest of the world".
    // Kauppa on siis maailmanlaajuinen.
    //
    // 🔴 Kaupan ELINTARVIKKEILLA (kahvit, teet, suklaat, keksit) on oma
    // maarajaus, joka lukee jokaisen tuotteen omalla sivulla: "This product is
    // not available for shipment to the USA, South America or Australia."
    // Rajaus on siksi tuotteen shipsExcept-kentässä, ei tässä: muki lähtee
    // Yhdysvaltoihin vaikka kahvipaketti ei lähde.
    shipsTo: 'worldwide',
    verifiedAt: '2026-08-01',
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
    // Oli `direct` (pelkkä UTM) 1.8. asti, koska Workerissa ei ollut reittiä:
    // /go/northoutdoor palautti 400. Reitti lisätty 2.8.2026, joten kolme
    // North Outdoor -tuotetta alkavat tuottaa komissiota. Ohjelmatunnus haettu
    // Adtractionin link-builderista (a=1967825424) ja verifioitu tuotantoa
    // vasten: ilman `as=`-parametria klikkiä ei attribuoida lainkaan.
    //
    // 🔴 Tämä ohjelma vastaa `200` + HTML-meta-refreshillä eikä 302:lla, ja
    // kirjaa klikin `at_gd`-evästeellä. Älä siis pidä reittiä rikkinäisenä
    // sillä perusteella että `curl -w %{redirect_url}` näyttää tyhjää.
    network: 'adtraction',
    workerRoute: 'northoutdoor',
    baseUrl: 'https://northoutdoor.com',
    // Toimituskäytäntö 1.8.2026: "Suomeen (sis. Ahvenanmaa), Pohjoismaihin,
    // Baltiaan sekä laajasti muualle Euroopan unioniin". Norja mainitaan
    // esimerkkinä EU:n ulkopuolisesta kohteesta, mutta maailmanlaajuista
    // toimitusta ei luvata.
    shipsTo: 'eu',
    verifiedAt: '2026-08-02',
  },
  nordicnest: {
    id: 'nordicnest',
    name: 'Nordic Nest',
    // Adtraction hyväksyi Nordic Nest FI -ohjelman 3.8.2026 → komissio Workerin
    // kautta. 🔴 Ohjelma on FI: mitattu 3.8. että .com-syvälinkki putoaa
    // interstitiaalissa valuesportal.com-varasivulle (?fallback=true), .fi-kohde
    // kelpaa (at_gd asettuu ja meta-refresh kantaa tuotesivulle). Siksi baseUrl
    // ja tuote-URLit ovat nordicnest.fi — .fi on selainpuolen sovellus, joten
    // hinnat verifioitiin renderöidystä DOMista (159/14/24 €, täsmäävät).
    network: 'adtraction',
    workerRoute: 'nordicnest',
    baseUrl: 'https://www.nordicnest.fi',
    // 🔴 Oli 'worldwide' .com-kaupan ehtojen perusteella. Ostolinkki laskeutuu
    // nyt .fi-kauppaan, jonka tuotesivu lukee "Toimitus: Suomi: 5,90 €" —
    // suodatin kertoo sen minkä linkitetty kauppa oikeasti lupaa (sama
    // periaate kuin nordqvistilla). Kansainvälinen ostaja voisi vaihtaa
    // maata kaupan headerista, mutta silloin at_gd-attribuutio katoaa.
    shipsTo: 'fi',
    verifiedAt: '2026-08-03',
  },
  aarikka: {
    id: 'aarikka',
    name: 'Aarikka',
    network: 'direct',
    baseUrl: 'https://www.aarikka.com',
    // Payment and Delivery 1.8.2026 luettelee 72 toimitusmaata kaikilta
    // mantereilta (mm. Australia, Brasilia, Japani, Kanada, Meksiko,
    // Etelä-Korea, Uusi-Seelanti) ja rajaa yhden pois: "Unfortunately, we are
    // not able to ship orders to the United States for the time being due to
    // customs-related reasons."
    //
    // 🔴 Tämä oli aiemmin 'eu', koska mallissa ei ollut tapaa sanoa
    // "maailmanlaajuinen paitsi yksi maa". Se piilotti kumppanin kaikilta
    // EU:n ulkopuolisilta ostajilta, vaikka kauppa toimittaa heille:
    // Britannia, Kanada, Japani, Etelä-Korea, Australia, Sveitsi ja Norja ovat
    // kaikki toimitusmaalistalla. Nyt vyöhyke kertoo totuuden ja poikkeus
    // hoitaa Yhdysvallat.
    shipsTo: 'worldwide',
    shipsExcept: ['US'],
    verifiedAt: '2026-08-01',
  },
  scandinavianoutdoor: {
    id: 'scandinavianoutdoor',
    name: 'Scandinavian Outdoor',
    network: 'adtraction',
    baseUrl: 'https://scandinavianoutdoor.fi',
    // Toimitusehdot 1.8.2026 (Asiakaspalvelu → Tilausten toimitus): "toimitamme
    // tuotteita ympäri maailmaa", ja EU:n ulkopuolisissa tilauksissa
    // vastaanottaja vastaa tulli- ja veromaksuista. Myös Ahvenanmaa mainitaan
    // erikseen.
    //
    // 🔴 Oli 'direct' + paljas UTM, vaikka kauppa on LV:n Adtraction-mainostaja
    // (shared/ads/advertisers/scandinavianOutdoor.ts). Kolme Kupilka-tuotetta
    // lähetti siis asiakkaita ilman komissiota. Meillä ei edelleenkään ole omaa
    // trackinglinkkiä verkoston paneelista, mutta verkoston redirect-Workerilla
    // on: reitti `go/scandinavianoutdoor` kantaa Adtractionin tunnukset
    // (a=1119705543, as=2086870803) ja lisää `epi`-paikkamerkinnän itse.
    //
    // Syvälinkitys verifioitu 2.8.2026 päästä päähän:
    //   go.laplandvibes.com/go/scandinavianoutdoor?sid=…&dest=<tuote-URL>
    //   → 302 to.scandinavianoutdoor.fi/t/t?a=…&epi=…&url=<tuote-URL>
    //   → Adtractionin välisivu ohjaa juuri sille tuotesivulle + at_gd-tunniste.
    // Parametrin nimi on `dest`, ei `url`: ks. worker.js handleAdtraction.
    workerRoute: 'scandinavianoutdoor',
    shipsTo: 'worldwide',
    verifiedAt: '2026-08-01',
  },
  lapuankankurit: {
    id: 'lapuankankurit',
    name: 'Lapuan Kankurit',
    network: 'direct',
    baseUrl: 'https://lapuankankurit.fi',
    // Shipping & Payment 1.8.2026, sanatarkasti: "We deliver products to the
    // following countries; Belgium, Netherlands, Ireland, Great Britain, Italy,
    // Austria, Luxemburg, Norway, France, Sweden, Germany, Finland (not Åland),
    // Switzerland and Denmark."
    //
    // 🔴 Listalla on 11 EU-maata, ei 27. Pelkkä 'eu' lupasi toimituksen
    // espanjalaiselle, puolalaiselle ja kreikkalaiselle ostajalle, joille
    // kauppa ei toimita lainkaan (heidät ohjataan asiakaspalveluun). Poikkeus
    // listaa ne 16 EU-maata, jotka EIVÄT ole kaupan omalla listalla.
    // Britannia, Norja ja Sveitsi jäävät edelleen suodattimen ulkopuolelle,
    // koska vyöhyke on 'eu'; se on aliarvio eikä väärä lupaus.
    shipsTo: 'eu',
    shipsExcept: [
      'BG', 'CY', 'CZ', 'EE', 'ES', 'GR', 'HR', 'HU',
      'LT', 'LV', 'MT', 'PL', 'PT', 'RO', 'SI', 'SK',
    ],
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
    // 🔴 KOMISSIOLLE 2026-08-10. Tämä oli katalogin suurin kumppani — 24
    // tuotetta — ja se seisoi network:'direct'-tilassa eli pelkällä UTM:llä:
    // nolla komissiota jokaisesta klikistä. Daisycon hyväksyi ohjelman
    // (kampanja 17977, 7 %, attribuutio 30 pv, hyväksyntä 31 pv), joten reitti
    // kääntyy Workerin kautta kuten adtraction-kumppaneilla.
    //
    // Ohjelma sallii syvälinkit ja Sub ID:n; Workerin daisycon-käsittelijä
    // muuntaa `dest`in kampanjan baseen suhteutetuksi `dl`-poluksi ja lisää
    // media-tunnuksen klikin lähtösivuston perusteella.
    network: 'daisycon',
    baseUrl: 'https://suomikauppa.fi',
    // Toimitusehdot 31.7.2026: "toimittaa tuotteita lähes kaikkialle maailmaan".
    // Daisyconin kampanjasivu 10.8.2026 listaa 24 maata + International, mikä
    // on linjassa: vyöhyke pysyy worldwide.
    shipsTo: 'worldwide',
    workerRoute: 'suomikauppa',
    verifiedAt: '2026-08-10',
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
  arcticwarriors: {
    id: 'arcticwarriors',
    name: 'Arctic Warriors',
    network: 'direct',
    baseUrl: 'https://arcticwarriors.fi',
    // Terms of order and delivery 1.8.2026: toimitusajat eritellään erikseen
    // EU:lle (3-9 pv) ja muulle maailmalle (5 pv alkaen), ja EU:n ulkopuolisten
    // tilausten tullimaksut ovat asiakkaan vastuulla. Kauppa toimittaa siis
    // maailmanlaajuisesti. Tuotesivujen linkit ovat /en/product/-polussa.
    shipsTo: 'worldwide',
    verifiedAt: '2026-08-01',
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
    // Adtraction hyväksyi Ruohonjuuri-ohjelman 3.8.2026 → komissio Workerin
    // kautta (oli pelkkä UTM). Ketju mitattu päästä päähän 3.8.: 302 →
    // to.ruohonjuuri.fi (a=1771797213, epi mukana) → meta-refresh täsmälleen
    // dest-tuotesivulle + at_gd-eväste. Kontrollikoe: ilman as=-parametria
    // evästettä ei asetu, eli attribuutio on todella linkin varassa.
    network: 'adtraction',
    workerRoute: 'ruohonjuuri',
    baseUrl: 'https://www.ruohonjuuri.fi',
    // Toimitusehdot 31.7.2026: "Suomeen ja ulkomaille EU:n vero- ja tullialueen
    // sisälle". Ahvenanmaa, Kanarian saaret ja Norja on rajattu ulos.
    shipsTo: 'eu',
    verifiedAt: '2026-08-03',
  },
  elamyslahjat: {
    id: 'elamyslahjat',
    name: 'Elämyslahjat.fi',
    // Adtraction hyväksyi Elämyslahjat-ohjelman 3.8.2026. Ketju mitattu GETillä
    // 3.8.: go/elamyslahjat?sid=…&dest=<tuotesivu> → 302
    // id.elamyslahjat.fi/t/t?a=2048058240…&epi=laplandgifts_com_<sid>&url=<dest>
    // → välisivu 302:aa täsmälleen dest-URLiin ja asettaa at_gd-evästeen.
    // Kontrollikoe: ilman as=-parametria vastaus on 200 ilman evästettä eikä
    // redirectiä, eli attribuutio on todella linkin varassa.
    // 🔴 Mittaa selaimen User-Agentilla: Worker vastaa curlin oletus-UA:lle
    // paljaalla kumppanietusivulla ilman seurantaa, aivan kuten HEAD-pyynnölle.
    network: 'adtraction',
    workerRoute: 'elamyslahjat',
    baseUrl: 'https://www.elamyslahjat.fi',
    // Myytävä tuote on lahjakortti, joka toimitetaan sähköpostitse: jokainen
    // tuotesivu lukee 3.8.2026 "Maksuton toimitus sähköpostiin tai ilmainen
    // toimitus Postilla, kun tilaat yli 69€:lla". Sähköpostitoimitus ei katso
    // maata, joten vyöhyke on worldwide, vaikka itse elämys lunastetaan
    // Lapissa ja kaupan kieli on suomi.
    shipsTo: 'worldwide',
    verifiedAt: '2026-08-03',
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

/** Verkoston redirect-Worker. Reitit: affiliate-redirect-worker/src/worker.js. */
const WORKER_ORIGIN = 'https://go.laplandvibes.com'

/**
 * Rakentaa kumppanilinkin. Kolme reittiä:
 *   1. trackingTemplate → affiliate-verkoston linkki, kohde enkoodattuna
 *   2. workerRoute      → verkoston redirect-Worker, joka lisää verkoston
 *                         tunnukset ja kirjaa klikin
 *   3. muuten           → kumppanin oma URL + LV:n UTM-parametrit
 * GYG-tuotteet EIVÄT kulje tästä: ne käyttävät shared/gyg/picks.ts:n gygHref().
 */
export function partnerHref(partner: Partner, productUrl: string, campaign: string): string {
  if (partner.trackingTemplate) {
    return partner.trackingTemplate.replace('{URL}', encodeURIComponent(productUrl))
  }
  // 🔴 Kohdeparametri on `dest`, ei `url`. Worker lukee `?dest=` ja kääntää sen
  // vasta verkostolle kelpaavaan muotoon; `?url=` menisi hiljaa ohi ja klikki
  // päätyisi kaupan etusivulle ilman syvälinkkiä.
  if (partner.workerRoute) {
    return (
      `${WORKER_ORIGIN}/go/${partner.workerRoute}` +
      `?sid=${encodeURIComponent(campaign)}&dest=${encodeURIComponent(productUrl)}`
    )
  }
  const url = new URL(productUrl)
  url.searchParams.set('utm_source', 'laplandvibes')
  url.searchParams.set('utm_medium', 'referral')
  url.searchParams.set('utm_campaign', campaign)
  return url.toString()
}
