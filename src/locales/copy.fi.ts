import type { ChromeCopy } from './types'

const fi: ChromeCopy = {
  nav: {
    categories: 'Kategoriat',
    products: 'Tuotteet',
    guides: 'Oppaat',
    promises: 'Lupaukset',
  },
  hero: {
    kicker: 'Suomen Lapin sydämestä',
    title: 'Lahjoita pala',
    titleAccent: 'Arktista',
    lead: 'Tilaa aidot Lapin lahjat lomalla, ne odottavat kotona, ennen kuin sinä ehdit perille. Käsintehtyjä aarteita, omaa mallistoa ja arktisia elämyksiä, suoraan Suomen Lapista.',
    ctaExplore: 'Tutustu lahjoihin',
    ctaGuide: 'Lahjaopas',
  },
  categories: {
    h2: 'Kolme tapaa lahjoittaa Lappia',
    sub: 'Olipa kyse mukista, käsin veistetystä kuksasta tai revontulisafarista, meiltä löytyy täydellinen arktinen lahja',
    items: [
      {
        name: '#LaplandVibes-malliston tuotteet',
        tag: 'Oma merkki',
        description: 'Mukit, t-paidat, hupparit ja taulutulosteet omilla arktisilla kuoseillamme. Print-on-demand, ei varastoa, toimitus ympäri maailman.',
      },
      {
        name: 'Käsityöt',
        tag: 'Käsintehty',
        description: 'Käsin taotut puukot, veistetyt kuksat, saamelainen duodji-koru ja villimarjahillot, suoraan lappilaisilta käsityöläisiltä.',
      },
      {
        name: 'Elämykset ja lahjakortit',
        tag: 'Lahjaideoita',
        description: 'Revontulisafarit, porokyydit, mökki-illat ja huolella koostetut Lapland Trip Boxit, lahjoita unohtumaton arktinen hetki.',
      },
    ],
  },
  valueProp: {
    h2: 'Tilaa lomalla. Vastaanota kotona.',
    sub: 'Älä enää tunge hauraita matkamuistoja matkalaukkuun. Osta matkan aikana, me hoidamme loput.',
    steps: [
      { title: 'Selaa lomalla', description: 'Löysitkö unelmiesi puukon? Kuksan äidille? Tilaa matkan aikana, sinun ei tarvitse kantaa mitään.' },
      { title: 'Lähetämme Lapista', description: 'Lahjat pakataan huolella ja lähetetään suoraan suomalaisilta käsityöläisiltä ja EU:n painopartnereilta.' },
      { title: 'Odottavat kotona', description: 'Astut kotiovellesi ja Lapin aarteet ovat jo odottamassa. Ei matkalaukkustressiä, ei rikkoutuneita matkamuistoja.' },
    ],
  },
  productGrid: {
    h2: 'Pian saatavilla',
    sub: 'Ensimmäinen mallistomme on parhaillaan valikoitumassa Suomen Lapin taitavimmilta käsityöläisiltä. Tilaa uutiskirje ja kuulet ensimmäisten joukossa.',
    priceTbd: 'Hinta tulossa',
    notifyMe: 'Ilmoita minulle',
    notifyAria: (name) => `Ilmoita kun ${name} on saatavilla`,
    products: [
      { name: 'Revontulimuki', category: 'merch' },
      { name: 'Poromuki', category: 'merch' },
      { name: 'Revontuli-T-paita', category: 'merch' },
      { name: 'Arktinen huppari', category: 'merch' },
      { name: 'Lappi-juliste', category: 'merch' },
      { name: 'Villapipo', category: 'merch' },
      { name: 'Puukko', category: 'artisan' },
      { name: 'Kuksa', category: 'artisan' },
      { name: 'Saamelainen rannekoru', category: 'artisan' },
      { name: 'Marjahillosetti', category: 'artisan' },
      { name: 'Sarvikynttilänjalka', category: 'artisan' },
      { name: 'Villahuopa', category: 'artisan' },
    ],
    catMerch: 'malliston tuote',
    catArtisan: 'käsityö',
  },
  giftGuide: {
    h2: 'Lahjaopas',
    sub: 'Etkö osaa päättää? Autamme löytämään täydellisen lahjan jokaiseen tilaisuuteen',
    suggested: 'Lahjaehdotukset',
    occasions: [
      {
        name: 'Joulu',
        description: 'Mikä olisi joulun hengen mukaisempi kuin lahja Joulupukin kotimaasta. Valitse käsin koostetuista jouluvalikoimista.',
        suggestions: ['Lahjakori "Lapland Luxury"', 'Lapin villahuopa', 'Lakkahillosetti', 'Huopatossut'],
      },
      {
        name: 'Häät',
        description: 'Juhli rakkautta ajattomilla käsintehdyillä lahjoilla, joita pariskunta vaalii vuosia.',
        suggestions: ['Revontuliriipus', 'Puinen kuksa (pari)', 'Poronnahkalompakko', 'Tuohikori'],
      },
      {
        name: 'Syntymäpäivä',
        description: 'Yllätä läheinen ainutlaatuisella lahjalla, jota ei tavallisesta kaupasta löydä.',
        suggestions: ['Saamelainen duodji-rannekoru', 'Puukko', 'Lahjakori "Arctic Taste"', 'Sarvikynttilänjalka'],
      },
      {
        name: 'Yrityslahjat',
        description: 'Tee vaikutus asiakkaisiin ja yhteistyökumppaneihin laadukkailla arktisilla lahjoilla, jotka erottuvat tavanomaisesta.',
        suggestions: ['Kaiverrettu puukko', 'Lahjakori "Lapland Luxury"', 'Puinen kuksa', 'Revontuliriipus'],
      },
    ],
  },
  guides: {
    kicker: 'Ilmaiset oppaat',
    h2: 'Arktiset oppaat',
    sub: 'Kaikki tieto Lapista pakattuna kahteen ilmaiseen oppaaseen. Jätä sähköpostisi alle ja lataa heti.',
    guides: [
      {
        title: 'Käsityön salaisuus',
        subtitle: 'Sisäpiirin opas aitoon lappilaiseen käsityöhön',
        description: 'Opi tunnistamaan aidot käsintehdyt puukot tehdaskopioiden joukosta, ymmärrä saamelaisen duodjin kulttuurinen merkitys, tunne villimarjojen sesongit ja hallitse viisi kultaista sääntöä aitojen Lapin käsitöiden ostamiseen.',
        topics: ['Puukot', 'Kuksat', 'Saamelainen duodji', 'Villimarjat', 'Ostajan säännöt'],
        pages: 9,
      },
      {
        title: '7 päivää Lapin taikaa',
        subtitle: 'Ainoa matkareitti, jonka koskaan tarvitset',
        description: 'Kattava päiväkohtainen reitti Rovaniemeltä Inariin ja takaisin. Sisältää revontulivinkit, husky-safarit, jäänmurtajaristeilyt, realistisen budjettilaskurin ja täyden arktisen pakkauslistan.',
        topics: ['7 päivän reitti', 'Budjettilaskuri', 'Pakkauslista', 'Sesonkiopas', 'Paikalliset vinkit'],
        pages: 13,
      },
    ],
    pagesPdf: (pages) => `${pages} sivua · PDF`,
    cta: 'Jätä sähköposti ja saat molemmat oppaat ilmaiseksi',
  },
  newsletter: {
    kicker: 'Saat molemmat oppaat ilmaiseksi',
    h2: 'Jätä sähköposti ja lataa heti',
    body: 'Saat heti pääsyn molempiin arktisiin oppaisiin ja ensimmäisten joukossa tiedon, kun uudet tuotteet ja käsityöt saapuvat kauppaan.',
    placeholder: 'sahkoposti@esimerkki.fi',
    submit: 'Hae molemmat oppaat',
    submitting: 'Lähetetään…',
    successHeading: 'Oppaasi ovat valmiina!',
    successFootnote: 'Tervetuloa arktiseen perheeseen. Tarkista myös sähköpostisi!',
    btnSecret: 'Käsityön salaisuus',
    btnSeven: '7 päivän taika',
    errorMsg: 'Jotain meni pieleen. Yritä uudelleen.',
    spamNote: 'Ei roskapostia, koskaan. Voit peruuttaa milloin vain.',
  },
  shipping: {
    h2: 'Lupauksemme',
    sub: 'Mitä voit odottaa, kun ostat LaplandGiftsistä',
    items: [
      { title: 'Suoraan Lapista', description: 'Jokainen tuote lähetetään Suomesta tai EU-painokumppaneiltamme. Ei välikäsiä, ei mystisiä varastoja.' },
      { title: 'Aitoustakuu', description: 'Käsityötuotteet toimitetaan alkuperätodistuksella. Saamelaiset käsityöt vain valtuutetuilta myyjiltä.' },
      { title: 'Lahjavalmis pakkaus', description: 'Jokainen tilaus paketoidaan huolella kierrätettävään, arktista luontoa henkivään pakkaukseen. Voit lisätä henkilökohtaisen viestin kassalla.' },
      { title: 'Käsityöläisten tukeminen', description: 'Osa jokaisen käsityötuotteen myynnistä menee suoraan tekijälle ja hänen yhteisölleen.' },
    ],
  },
  faq: {
    kicker: 'Hyvä tietää',
    h2: 'Lapin lahjat, usein kysytyt',
    sub: 'Mitä tuoda kotiin, miten ostaa eettisesti ja mikä todella kulkee rajojen yli.',
    items: [
      {
        q: 'Mitkä ovat aitoja matkamuistoja Lapista?',
        a: 'Aidoimmat Lapin matkamuistot ovat paikallisten käsialaa: puukko, kuksa (visakoivun pahkasta veistetty juomakuppi), poronnahkatuotteet, villatekstiilit sekä luonnonantimet kuten lakkahillo, puolukkasäilyke ja koivunmahlatuotteet. Saamelainen duodji-käsityö, hopeakorut, sarvityöt ja punotut vyönauhat, on arvostetuinta. Etsi tekijän nimeä tai alkuperätodistusta sen sijaan, että ostaisit massatuotettua tavaraa lentokentän myymälästä.',
      },
      {
        q: 'Voinko ostaa saamelaista käsityötä eettisesti, ja mikä on Sámi Duodji -merkki?',
        a: 'Kyllä. Duodji on saamenkielinen sana perinteiselle käsityölle, ja pyöreä Sámi Duodji -tavaramerkki on aitoustakuu: se myönnetään saamelaisten tekijöiden perinteisin menetelmin ja materiaalein valmistamille tuotteille. Kun valitset merkillä varustetun tuotteen, tai ostat suoraan nimetyltä saamelaiselta käsityöläiseltä tai valtuutetulta myyjältä, tuki menee yhteisölle ja työ on aitoa, ei tehtaassa jäljiteltyä. Me hankimme saamelaiskäsityöt vain valtuutetuilta myyjiltä.',
      },
      {
        q: 'Lähettävätkö Lapin kaupat lahjoja ulkomaille?',
        a: 'Monet lähettävät. Oma #LaplandVibes-mallistomme on print-on-demand ja lähtee maailmanlaajuisesti EU:n painopartnereilta. Käsityötuotteet lähetetään Suomesta; toimitusaika ja -hinta riippuvat maasta ja kuljetusliikkeestä. Verkkotilauksen etu matkan aikana on se, ettei hauraita esineitä tarvitse ahtaa matkalaukkuun, ne matkaavat erikseen ja odottavat kotona.',
      },
      {
        q: 'Mitä kannattaa tuoda kotiin Rovaniemeltä?',
        a: 'Rovaniemi sijaitsee napapiirillä ja on portti Suomen Lappiin, joten se on hyvä ostospaikka. Suosittuja valintoja ovat kuksa, puukko, poronnahka-asusteet, villasukat ja -pipot, Muumi- ja joulupukkiaiheiset tuotteet sekä arktiset herkut kuten lakkahillo, salmiakki ja koivunmahlasiirappi. Kun haluat tuotteen, jolla on tarina, valitse tekijän signeeraama esine yleisen ”Lappi”-matkamuiston sijaan.',
      },
      {
        q: 'Saako poro- ja sarvituotteita tuoda kotiin?',
        a: 'Poro (Rangifer tarandus) ei ole uhanalainen eikä CITES-listattu laji, joten luonnollisesti pudonneesta sarvesta tai sivutuotteista tehdyt sarvi-, nahka- ja villatuotteet ovat yleensä sallittuja henkilökohtaisina matkamuistoina EU:ssa ja useimpiin maihin. Säännöt vaihtelevat määränpään mukaan, etenkin käsittelemättömien eläinmateriaalien osalta, joten tarkista oman maasi tulli- ja tuontisäännöt ennen matkaa. Epäselvissä tapauksissa käsitelty nahka, villa ja puu ovat turvallisimpia kuljettaa.',
      },
      {
        q: 'Kuinka ajoissa joululahjat kannattaa tilata Lapista?',
        a: 'Joulutoimitusta varten tilaa hyvissä ajoin ennen joulukuun puolivälin kuljetusten takarajoja, kansainväliset toimitukset ruuhkautuvat jouluviikkoina, ja käsityötuotteet tehdään pienissä erissä. Jos vierailet Lapissa syksyllä tai alkutalvesta, tilaaminen matkan aikana on helpoin tapa saada lahjat kotiin ajoissa. Tilaa uutiskirje, niin kerromme sesongin takarajat.',
      },
    ],
  },
  related: {
    kicker: 'Minne seuraavaksi',
    h2: 'Suunnittele loput Lapin-matkastasi',
    sub: 'Osa LaplandVibes-verkostoa, jatka tutkimista sisarsivustoillamme.',
    items: [
      { label: 'Lapin joulu ja joulupukki', blurb: 'Joulupukin pajakylä, joulumatkat ja sesongin vinkit.', href: 'https://laplandchristmas.com/santa-village/' },
      { label: 'Lapissa tehdyt tuotteet', blurb: 'Laajempi valikoima lappilaisia tuotteita ja arktista muotoilua.', href: 'https://laplandstore.fi' },
      { label: 'Suunnittele Lapin-matkasi', blurb: 'Kohteet, sesongit ja käytännön vinkit Suomen Lappiin.', href: 'https://laplandvisit.com/itineraries/' },
    ],
  },
  footer: {
    pillars: [
      { name: 'Kategoriat', href: '/#categories' },
      { name: 'Suosituimmat tuotteet', href: '/#products' },
      { name: 'Lahjaopas', href: '/#gift-guide' },
      { name: 'Ilmaiset oppaat', href: '/#guides' },
      { name: 'LaplandStays', href: 'https://laplandstays.com' },
      { name: 'LaplandActivities', href: 'https://laplandactivities.online' },
    ],
    editorialNote: 'Riippumattomasti ylläpitää Lapeso Oy Suomen Lapista · viimeksi tarkistettu touko 2026 · teemme yhteistyötä valittujen käsityöläisten ja kauppojen kanssa, läpinäkyvästi jokaisella tuotesivulla.',
    extraLegalUnsub: 'Peruuta tilaus',
  },
  notFound: {
    h1: 'Sivua ei löytynyt',
    body: 'Tätä sivua ei ole olemassa. Ehkä revontulet veivät sen mukanaan.',
    back: 'Takaisin etusivulle',
  },
  unsubscribe: {
    title: 'Peruuta tilaus | LaplandGifts',
    h1: 'Peruuta tilaus',
    body: 'Anna sähköpostiosoitteesi ja poistamme sinut uutiskirjelistalta.',
    successH1: 'Tilaus peruutettu',
    successBody: 'Et saa enää meiltä viestejä. Harmi nähdä sinun lähtevän.',
    submit: 'Peruuta tilaus',
    submitting: 'Peruutetaan…',
    backHome: 'Takaisin etusivulle',
    errorMsg: 'Jotain meni pieleen. Yritä uudelleen tai lähetä viesti osoitteeseen info@laplandvibes.com',
  },
  legal: {
    backHome: 'Takaisin etusivulle',
  },
}

// ---------- DE ----------

export default fi
