import type { Lang } from '../i18n/useLang'

// ---------- types ----------

export interface ChromeCopy {
  nav: {
    categories: string
    products: string
    guides: string
    promises: string
  }
  hero: {
    kicker: string
    title: string
    titleAccent: string
    lead: string
    ctaExplore: string
    ctaGuide: string
  }
  categories: {
    h2: string
    sub: string
    items: Array<{ name: string; tag: string; description: string }>
  }
  valueProp: {
    h2: string
    sub: string
    steps: Array<{ title: string; description: string }>
  }
  productGrid: {
    h2: string
    sub: string
    priceTbd: string
    notifyMe: string
    notifyAria: (name: string) => string
    products: Array<{ name: string; category: 'merch' | 'artisan' }>
    catMerch: string
    catArtisan: string
  }
  giftGuide: {
    h2: string
    sub: string
    suggested: string
    occasions: Array<{ name: string; description: string; suggestions: string[] }>
  }
  guides: {
    kicker: string
    h2: string
    sub: string
    guides: Array<{ title: string; subtitle: string; description: string; topics: string[]; pages: number }>
    pagesPdf: (pages: number) => string
    cta: string
  }
  newsletter: {
    kicker: string
    h2: string
    body: string
    placeholder: string
    submit: string
    submitting: string
    successHeading: string
    successFootnote: string
    btnSecret: string
    btnSeven: string
    errorMsg: string
    spamNote: string
  }
  shipping: {
    h2: string
    sub: string
    items: Array<{ title: string; description: string }>
  }
  footer: {
    pillars: Array<{ name: string; href: string }>
    editorialNote: string
    extraLegalUnsub: string
  }
  notFound: {
    h1: string
    body: string
    back: string
  }
  unsubscribe: {
    title: string
    h1: string
    body: string
    successH1: string
    successBody: string
    submit: string
    submitting: string
    backHome: string
    errorMsg: string
  }
  legal: {
    backHome: string
  }
}

// ---------- EN ----------

const en: ChromeCopy = {
  nav: {
    categories: 'Categories',
    products: 'Products',
    guides: 'Guides',
    promises: 'Promises',
  },
  hero: {
    kicker: 'From the Heart of Finnish Lapland',
    title: 'Give a Piece of the',
    titleAccent: 'Arctic',
    lead: "Order authentic Lapland gifts while you're on holiday — they'll be waiting at home before you. Handcrafted treasures, branded merch, and Arctic experiences, all shipped directly from Finnish Lapland.",
    ctaExplore: 'Explore Gifts',
    ctaGuide: 'Gift Guide',
  },
  categories: {
    h2: 'Three Ways to Gift Lapland',
    sub: "Whether it's a branded mug, a hand-carved kuksa, or a northern lights safari — we've got the perfect Arctic gift",
    items: [
      {
        name: '#LaplandVibes Merch',
        tag: 'Own Brand',
        description: 'Mugs, t-shirts, hoodies, and canvas prints with our signature Arctic designs. Print-on-demand — zero inventory, shipped worldwide.',
      },
      {
        name: 'Artisan Crafts',
        tag: 'Handmade',
        description: 'Handforged puukko knives, carved kuksa cups, Sámi duodji jewelry, and wild berry preserves — sourced directly from Lappish craftspeople.',
      },
      {
        name: 'Experiences & Gift Cards',
        tag: 'Gift Ideas',
        description: 'Northern lights safaris, reindeer sleigh rides, cozy cabin nights, and curated Lapland Trip Boxes — gift an unforgettable Arctic moment.',
      },
    ],
  },
  valueProp: {
    h2: 'Order on Holiday. Find Them at Home.',
    sub: 'No more stuffing fragile souvenirs into your suitcase. Shop during your trip and we handle the rest.',
    steps: [
      { title: 'Browse on Holiday', description: 'Found a puukko knife you love? A kuksa for mum? Order while you explore — no need to carry anything.' },
      { title: 'We Ship from Lapland', description: 'Your gifts are packed with care and shipped directly from Finnish artisans and our EU print partners.' },
      { title: 'Waiting at Home', description: 'Land back home and your Lapland treasures are already at your doorstep. No luggage stress, no broken souvenirs.' },
    ],
  },
  productGrid: {
    h2: 'Coming Soon',
    sub: 'Our first collection is being handpicked from the best artisans in Finnish Lapland. Sign up for the newsletter to be first in line.',
    priceTbd: 'Price TBD',
    notifyMe: 'Notify Me',
    notifyAria: (name) => `Notify me when ${name} is available`,
    products: [
      { name: 'Aurora Mug', category: 'merch' },
      { name: 'Reindeer Mug', category: 'merch' },
      { name: 'Aurora T-Shirt', category: 'merch' },
      { name: 'Arctic Hoodie', category: 'merch' },
      { name: 'Lapland Poster', category: 'merch' },
      { name: 'Wool Beanie', category: 'merch' },
      { name: 'Puukko Knife', category: 'artisan' },
      { name: 'Kuksa Cup', category: 'artisan' },
      { name: 'Sámi Bracelet', category: 'artisan' },
      { name: 'Berry Jam Set', category: 'artisan' },
      { name: 'Antler Candle Holder', category: 'artisan' },
      { name: 'Wool Blanket', category: 'artisan' },
    ],
    catMerch: 'merch',
    catArtisan: 'artisan',
  },
  giftGuide: {
    h2: 'Gift Guide',
    sub: 'Not sure what to choose? Let us help you find the perfect gift for every occasion',
    suggested: 'Suggested gifts',
    occasions: [
      {
        name: 'Christmas',
        description: "Nothing says Christmas like a gift from Santa's homeland. Choose from our curated holiday selections.",
        suggestions: ['Gift Basket "Lapland Luxury"', 'Lapland Wool Blanket', 'Cloudberry Jam Set', 'Felt Slippers'],
      },
      {
        name: 'Wedding',
        description: 'Celebrate love with timeless handcrafted pieces that the couple will treasure for years.',
        suggestions: ['Aurora Jewelry Pendant', 'Wooden Kuksa Cup (pair)', 'Reindeer Leather Wallet', 'Birch Bark Basket'],
      },
      {
        name: 'Birthday',
        description: 'Surprise someone special with a unique gift they will never find in an ordinary store.',
        suggestions: ['Sámi Duodji Bracelet', 'Puukko Knife', 'Gift Basket "Arctic Taste"', 'Reindeer Antler Candle Holder'],
      },
      {
        name: 'Corporate',
        description: 'Impress clients and partners with premium Arctic gifts that stand out from the usual corporate fare.',
        suggestions: ['Puukko Knife (engraved)', 'Gift Basket "Lapland Luxury"', 'Wooden Kuksa Cup', 'Aurora Jewelry Pendant'],
      },
    ],
  },
  guides: {
    kicker: 'Free Guides',
    h2: 'Arctic Guides',
    sub: 'Everything we know about Lapland, packed into two free guides. Leave your email below and download instantly.',
    guides: [
      {
        title: 'The Secret Craft',
        subtitle: "An Insider's Guide to Authentic Lapland Craftsmanship",
        description: 'Learn to spot real handmade puukko knives from factory fakes, understand the cultural meaning of Sámi duodji, discover wild berry seasons, and master the 5 golden rules for buying genuine Lapland crafts.',
        topics: ['Puukko knives', 'Kuksa cups', 'Sámi duodji', 'Wild berries', "Buyer's rules"],
        pages: 9,
      },
      {
        title: '7 Days of Lapland Magic',
        subtitle: "The Only Itinerary You'll Ever Need",
        description: 'A complete day-by-day route from Rovaniemi to Inari and back. Includes northern lights tips, husky safaris, icebreaker cruises, realistic budget planner, and a full Arctic packing list.',
        topics: ['7-day itinerary', 'Budget planner', 'Packing list', 'Season guide', 'Local tips'],
        pages: 13,
      },
    ],
    pagesPdf: (pages) => `${pages} pages · PDF`,
    cta: 'Enter your email to get both guides free',
  },
  newsletter: {
    kicker: 'Get Both Guides Free',
    h2: 'Enter Your Email to Download',
    body: 'Get instant access to both Arctic guides plus early notifications when new products and artisan drops land in the shop.',
    placeholder: 'your@email.com',
    submit: 'Get Both Guides',
    submitting: 'Sending…',
    successHeading: 'Your guides are ready!',
    successFootnote: 'Welcome to the Arctic family. Check your inbox too!',
    btnSecret: 'The Secret Craft',
    btnSeven: '7 Days of Magic',
    errorMsg: 'Something went wrong. Please try again.',
    spamNote: 'No spam, ever. Unsubscribe anytime.',
  },
  shipping: {
    h2: 'Our Promises',
    sub: 'What you can expect when you shop with LaplandGifts',
    items: [
      { title: 'Direct from Lapland', description: 'Every product ships from Finland or our EU-based print partners. No middlemen, no mystery warehouses.' },
      { title: 'Authentic Guarantee', description: 'Artisan products come with a certificate of origin. Sámi crafts sourced only through authorized sellers.' },
      { title: 'Gift-Ready Packaging', description: 'Each order is wrapped with care in recyclable packaging inspired by Arctic nature. Add a personal message at checkout.' },
      { title: 'Supporting Artisans', description: 'A portion of every artisan product sale goes directly back to the craftsperson and their community.' },
    ],
  },
  footer: {
    pillars: [
      { name: 'Categories', href: '/#categories' },
      { name: 'Featured Products', href: '/#products' },
      { name: 'Gift Guide', href: '/#gift-guide' },
      { name: 'Free Guides', href: '/#guides' },
      { name: 'LaplandStays', href: 'https://laplandstays.com' },
      { name: 'LaplandActivities', href: 'https://laplandactivities.online' },
    ],
    editorialNote: 'Independently maintained by Lapeso Oy in Finnish Lapland · last reviewed May 2026 · we partner with selected artisans and shops directly, with full disclosure on every product page.',
    extraLegalUnsub: 'Unsubscribe',
  },
  notFound: {
    h1: 'Page Not Found',
    body: "This page doesn't exist. Maybe the northern lights took it somewhere else.",
    back: 'Back to Home',
  },
  unsubscribe: {
    title: 'Unsubscribe | LaplandGifts',
    h1: 'Unsubscribe',
    body: 'Enter your email address to remove yourself from our newsletter list.',
    successH1: "You've been unsubscribed",
    successBody: "You won't receive any more emails from us. We're sorry to see you go.",
    submit: 'Unsubscribe',
    submitting: 'Unsubscribing…',
    backHome: 'Back to home',
    errorMsg: 'Something went wrong. Please try again or email info@laplandvibes.com',
  },
  legal: {
    backHome: 'Back to Home',
  },
}

// ---------- FI ----------

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
    lead: 'Tilaa aidot Lapin lahjat lomalla — ne odottavat kotona, ennen kuin sinä ehdit perille. Käsintehtyjä aarteita, omaa mallistoa ja arktisia elämyksiä, suoraan Suomen Lapista.',
    ctaExplore: 'Tutustu lahjoihin',
    ctaGuide: 'Lahjaopas',
  },
  categories: {
    h2: 'Kolme tapaa lahjoittaa Lappia',
    sub: 'Olipa kyse mukista, käsin veistetystä kuksasta tai revontulisafarista — meiltä löytyy täydellinen arktinen lahja',
    items: [
      {
        name: '#LaplandVibes-malliston tuotteet',
        tag: 'Oma merkki',
        description: 'Mukit, t-paidat, hupparit ja taulutulosteet omilla arktisilla kuoseillamme. Print-on-demand — ei varastoa, toimitus ympäri maailman.',
      },
      {
        name: 'Käsityöt',
        tag: 'Käsintehty',
        description: 'Käsin taotut puukot, veistetyt kuksat, saamelainen duodji-koru ja villimarjahillot — suoraan lappilaisilta käsityöläisiltä.',
      },
      {
        name: 'Elämykset ja lahjakortit',
        tag: 'Lahjaideoita',
        description: 'Revontulisafarit, porokyydit, mökki-illat ja huolella koostetut Lapland Trip Boxit — lahjoita unohtumaton arktinen hetki.',
      },
    ],
  },
  valueProp: {
    h2: 'Tilaa lomalla. Vastaanota kotona.',
    sub: 'Älä enää tunge hauraita matkamuistoja matkalaukkuun. Osta matkan aikana, me hoidamme loput.',
    steps: [
      { title: 'Selaa lomalla', description: 'Löysitkö unelmiesi puukon? Kuksan äidille? Tilaa matkan aikana — sinun ei tarvitse kantaa mitään.' },
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
        description: 'Opi tunnistamaan aidot käsintehdyt puukot tehdaskopiöiden joukosta, ymmärrä saamelaisen duodjin kulttuurinen merkitys, tunne villimarjojen sesongit ja hallitse viisi kultaista sääntöä aitojen Lapin käsitöiden ostamiseen.',
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

const de: ChromeCopy = {
  nav: {
    categories: 'Kategorien',
    products: 'Produkte',
    guides: 'Ratgeber',
    promises: 'Versprechen',
  },
  hero: {
    kicker: 'Aus dem Herzen Finnisch-Lapplands',
    title: 'Verschenken Sie ein Stück',
    titleAccent: 'Arktis',
    lead: 'Bestellen Sie authentische Lappland-Geschenke schon im Urlaub — sie warten zu Hause, bevor Sie ankommen. Handgefertigte Schätze, eigene Marke und arktische Erlebnisse, direkt aus Finnisch-Lappland verschickt.',
    ctaExplore: 'Geschenke entdecken',
    ctaGuide: 'Geschenke-Ratgeber',
  },
  categories: {
    h2: 'Drei Wege, Lappland zu verschenken',
    sub: 'Ob bedruckte Tasse, handgeschnitzte Kuksa oder Nordlicht-Safari — bei uns finden Sie das perfekte arktische Geschenk',
    items: [
      {
        name: '#LaplandVibes Merch',
        tag: 'Eigene Marke',
        description: 'Tassen, T-Shirts, Hoodies und Leinwanddrucke mit unseren typischen arktischen Motiven. Print-on-Demand — kein Lager, weltweiter Versand.',
      },
      {
        name: 'Handwerkskunst',
        tag: 'Handgemacht',
        description: 'Handgeschmiedete Puukko-Messer, geschnitzte Kuksa-Becher, Sámi-Duodji-Schmuck und wilde Beerenkonfitüren — direkt von lappländischen Handwerkerinnen und Handwerkern.',
      },
      {
        name: 'Erlebnisse & Geschenkkarten',
        tag: 'Geschenkideen',
        description: 'Nordlicht-Safaris, Rentierschlittenfahrten, gemütliche Hüttennächte und kuratierte Lapland Trip Boxes — verschenken Sie einen echten arktischen Moment.',
      },
    ],
  },
  valueProp: {
    h2: 'Im Urlaub bestellen. Zu Hause vorfinden.',
    sub: 'Schluss mit zerbrechlichen Souvenirs im Koffer. Sie shoppen während der Reise, wir kümmern uns um den Rest.',
    steps: [
      { title: 'Im Urlaub stöbern', description: 'Ein Puukko-Messer entdeckt? Eine Kuksa für die Mutter? Bestellen Sie unterwegs — Sie müssen nichts tragen.' },
      { title: 'Wir versenden aus Lappland', description: 'Ihre Geschenke werden sorgfältig verpackt und direkt von finnischen Handwerkerinnen und unseren EU-Druckpartnern versendet.' },
      { title: 'Zu Hause schon angekommen', description: 'Sie kommen heim und Ihre lappländischen Schätze stehen schon vor der Tür. Kein Gepäckstress, keine zerbrochenen Souvenirs.' },
    ],
  },
  productGrid: {
    h2: 'Demnächst verfügbar',
    sub: 'Unsere erste Kollektion wird gerade von den besten Handwerkerinnen und Handwerkern Finnisch-Lapplands ausgewählt. Tragen Sie sich in den Newsletter ein und seien Sie als Erste informiert.',
    priceTbd: 'Preis folgt',
    notifyMe: 'Benachrichtigen',
    notifyAria: (name) => `Benachrichtigen, sobald ${name} verfügbar ist`,
    products: [
      { name: 'Polarlicht-Tasse', category: 'merch' },
      { name: 'Rentier-Tasse', category: 'merch' },
      { name: 'Polarlicht-T-Shirt', category: 'merch' },
      { name: 'Arktis-Hoodie', category: 'merch' },
      { name: 'Lappland-Poster', category: 'merch' },
      { name: 'Wollmütze', category: 'merch' },
      { name: 'Puukko-Messer', category: 'artisan' },
      { name: 'Kuksa-Trinkgefäß', category: 'artisan' },
      { name: 'Sámi-Armband', category: 'artisan' },
      { name: 'Beerenmarmeladen-Set', category: 'artisan' },
      { name: 'Geweihkerzenhalter', category: 'artisan' },
      { name: 'Wolldecke', category: 'artisan' },
    ],
    catMerch: 'Merch',
    catArtisan: 'Handwerk',
  },
  giftGuide: {
    h2: 'Geschenke-Ratgeber',
    sub: 'Unentschlossen? Wir helfen Ihnen, das perfekte Geschenk für jeden Anlass zu finden',
    suggested: 'Empfohlene Geschenke',
    occasions: [
      {
        name: 'Weihnachten',
        description: 'Nichts sagt mehr Weihnachten als ein Geschenk aus der Heimat des Weihnachtsmanns. Wählen Sie aus unseren kuratierten Weihnachtskollektionen.',
        suggestions: ['Geschenkkorb „Lapland Luxury"', 'Lappland-Wolldecke', 'Moltebeerenmarmeladen-Set', 'Filzpantoffeln'],
      },
      {
        name: 'Hochzeit',
        description: 'Feiern Sie die Liebe mit zeitlosen handgefertigten Stücken, die das Paar über Jahre in Ehren halten wird.',
        suggestions: ['Polarlicht-Schmuckanhänger', 'Holz-Kuksa-Becher (Paar)', 'Rentierleder-Geldbörse', 'Birkenrinden-Korb'],
      },
      {
        name: 'Geburtstag',
        description: 'Überraschen Sie jemand Besonderen mit einem einzigartigen Geschenk, das in keinem gewöhnlichen Laden zu finden ist.',
        suggestions: ['Sámi-Duodji-Armband', 'Puukko-Messer', 'Geschenkkorb „Arctic Taste"', 'Rentierhorn-Kerzenhalter'],
      },
      {
        name: 'Firmenkunden',
        description: 'Beeindrucken Sie Kunden und Partner mit hochwertigen arktischen Geschenken, die sich vom üblichen Firmenangebot abheben.',
        suggestions: ['Puukko-Messer (graviert)', 'Geschenkkorb „Lapland Luxury"', 'Holz-Kuksa-Becher', 'Polarlicht-Schmuckanhänger'],
      },
    ],
  },
  guides: {
    kicker: 'Kostenlose Ratgeber',
    h2: 'Arktis-Ratgeber',
    sub: 'Unser gesamtes Wissen über Lappland, gebündelt in zwei kostenlosen Ratgebern. E-Mail eintragen und sofort herunterladen.',
    guides: [
      {
        title: 'Das geheime Handwerk',
        subtitle: 'Ein Insider-Leitfaden zu echtem lappländischem Handwerk',
        description: 'Lernen Sie, echte handgefertigte Puukko-Messer von Fabrikfälschungen zu unterscheiden, verstehen Sie die kulturelle Bedeutung des Sámi-Duodji, entdecken Sie die Saisonen wilder Beeren und beherrschen Sie die fünf goldenen Regeln für den Kauf echten lappländischen Handwerks.',
        topics: ['Puukko-Messer', 'Kuksa-Becher', 'Sámi-Duodji', 'Wilde Beeren', 'Käuferregeln'],
        pages: 9,
      },
      {
        title: '7 Tage Lappland-Magie',
        subtitle: 'Die einzige Reiseroute, die Sie je brauchen werden',
        description: 'Eine vollständige Tag-für-Tag-Route von Rovaniemi nach Inari und zurück. Mit Nordlicht-Tipps, Husky-Safaris, Eisbrecher-Touren, realistischem Budgetplaner und kompletter arktischer Packliste.',
        topics: ['7-Tage-Route', 'Budgetplaner', 'Packliste', 'Saison-Guide', 'Lokale Tipps'],
        pages: 13,
      },
    ],
    pagesPdf: (pages) => `${pages} Seiten · PDF`,
    cta: 'E-Mail eintragen und beide Ratgeber kostenlos erhalten',
  },
  newsletter: {
    kicker: 'Beide Ratgeber kostenlos',
    h2: 'E-Mail eintragen und herunterladen',
    body: 'Erhalten Sie sofortigen Zugang zu beiden Arktis-Ratgebern sowie vorab Benachrichtigungen, sobald neue Produkte und Handwerker-Drops im Shop landen.',
    placeholder: 'ihre@email.de',
    submit: 'Beide Ratgeber holen',
    submitting: 'Senden…',
    successHeading: 'Ihre Ratgeber sind bereit!',
    successFootnote: 'Willkommen in der Arktis-Familie. Schauen Sie auch in Ihr Postfach!',
    btnSecret: 'Das geheime Handwerk',
    btnSeven: '7 Tage Magie',
    errorMsg: 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.',
    spamNote: 'Kein Spam, niemals. Jederzeit abbestellbar.',
  },
  shipping: {
    h2: 'Unsere Versprechen',
    sub: 'Womit Sie rechnen können, wenn Sie bei LaplandGifts einkaufen',
    items: [
      { title: 'Direkt aus Lappland', description: 'Jedes Produkt wird aus Finnland oder von unseren EU-Druckpartnern verschickt. Keine Zwischenhändler, keine mysteriösen Lager.' },
      { title: 'Echtheitsgarantie', description: 'Handwerksprodukte werden mit Herkunftszertifikat geliefert. Sámi-Handwerk ausschließlich von autorisierten Anbietern.' },
      { title: 'Geschenkfertige Verpackung', description: 'Jede Bestellung wird sorgfältig in recycelbare Verpackung verpackt, inspiriert von der arktischen Natur. Eine persönliche Botschaft können Sie an der Kasse hinzufügen.' },
      { title: 'Handwerker unterstützen', description: 'Ein Teil jedes verkauften Handwerksprodukts geht direkt an die Kunsthandwerkerin oder den Kunsthandwerker und deren Gemeinschaft zurück.' },
    ],
  },
  footer: {
    pillars: [
      { name: 'Kategorien', href: '/#categories' },
      { name: 'Ausgewählte Produkte', href: '/#products' },
      { name: 'Geschenke-Ratgeber', href: '/#gift-guide' },
      { name: 'Kostenlose Ratgeber', href: '/#guides' },
      { name: 'LaplandStays', href: 'https://laplandstays.com' },
      { name: 'LaplandActivities', href: 'https://laplandactivities.online' },
    ],
    editorialNote: 'Unabhängig betreut von Lapeso Oy in Finnisch-Lappland · zuletzt überprüft Mai 2026 · wir kooperieren direkt mit ausgewählten Handwerkern und Geschäften und legen das auf jeder Produktseite offen.',
    extraLegalUnsub: 'Newsletter abbestellen',
  },
  notFound: {
    h1: 'Seite nicht gefunden',
    body: 'Diese Seite gibt es nicht. Vielleicht haben die Nordlichter sie woanders hingebracht.',
    back: 'Zurück zur Startseite',
  },
  unsubscribe: {
    title: 'Newsletter abbestellen | LaplandGifts',
    h1: 'Newsletter abbestellen',
    body: 'Geben Sie Ihre E-Mail-Adresse ein, um sich aus unserem Newsletter auszutragen.',
    successH1: 'Sie haben sich abgemeldet',
    successBody: 'Sie erhalten keine weiteren E-Mails von uns. Schade, dass Sie gehen.',
    submit: 'Abbestellen',
    submitting: 'Abbestellen…',
    backHome: 'Zur Startseite',
    errorMsg: 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie an info@laplandvibes.com',
  },
  legal: {
    backHome: 'Zur Startseite',
  },
}

// ---------- JA ----------

const ja: ChromeCopy = {
  nav: {
    categories: 'カテゴリー',
    products: '商品',
    guides: 'ガイド',
    promises: 'お約束',
  },
  hero: {
    kicker: 'フィンランド・ラップランドの中心から',
    title: '北極の一部を',
    titleAccent: 'プレゼント',
    lead: '本物のラップランドのお土産を旅行中にご注文ください — あなたよりも先にご自宅で待っています。手作りの逸品、オリジナルグッズ、北極の体験をフィンランド・ラップランドから直接お届けします。',
    ctaExplore: 'ギフトを見る',
    ctaGuide: 'ギフトガイド',
  },
  categories: {
    h2: 'ラップランドを贈る3つの方法',
    sub: 'プリントマグカップ、手彫りのククサ、オーロラサファリ — 最高の北極ギフトをご用意しています',
    items: [
      {
        name: '#LaplandVibesオリジナルグッズ',
        tag: '自社ブランド',
        description: 'オリジナルの北極デザインを施したマグカップ、Tシャツ、フーディー、キャンバスプリント。プリントオンデマンドで在庫ゼロ、世界中へ発送。',
      },
      {
        name: '工芸品',
        tag: 'ハンドメイド',
        description: '手鍛造のプーッコ・ナイフ、彫り出されたククサ、サーミの伝統工芸ドゥオッジのアクセサリー、野生ベリーの保存食 — ラップランドの職人から直接仕入れています。',
      },
      {
        name: '体験ギフトカード',
        tag: 'ギフトのアイデア',
        description: 'オーロラサファリ、トナカイそり、コテージでの夜、厳選のラップランド・トリップ・ボックス — 忘れられない北極の瞬間を贈りましょう。',
      },
    ],
  },
  valueProp: {
    h2: '旅行中にご注文。ご帰宅後にお受け取り。',
    sub: '壊れやすいお土産をスーツケースに詰める必要はもうありません。旅の間にお買い物、あとは私たちにお任せください。',
    steps: [
      { title: '旅行中に選ぶ', description: 'お気に入りのプーッコ・ナイフを見つけた?お母様にククサを?旅の途中でご注文ください — 何も持ち運ぶ必要はありません。' },
      { title: 'ラップランドから発送', description: 'ギフトは丁寧に梱包され、フィンランドの職人や私たちのEU内プリントパートナーから直接発送されます。' },
      { title: 'ご自宅でお待ちしています', description: '帰宅すると、ラップランドの宝物はすでに玄関で待っています。荷物に悩むことも、壊れたお土産もありません。' },
    ],
  },
  productGrid: {
    h2: '近日公開',
    sub: '最初のコレクションは、フィンランド・ラップランドで最高の職人たちから厳選中です。ニュースレターに登録して、いち早くお知らせを受け取ってください。',
    priceTbd: '価格未定',
    notifyMe: '通知を受け取る',
    notifyAria: (name) => `${name}が入荷したらお知らせ`,
    products: [
      { name: 'オーロラ・マグカップ', category: 'merch' },
      { name: 'トナカイ・マグカップ', category: 'merch' },
      { name: 'オーロラTシャツ', category: 'merch' },
      { name: '北極圏フーディー', category: 'merch' },
      { name: 'ラップランド・ポスター', category: 'merch' },
      { name: 'ウールビーニー', category: 'merch' },
      { name: 'プーッコ・ナイフ', category: 'artisan' },
      { name: 'ククサ・カップ', category: 'artisan' },
      { name: 'サーミ・ブレスレット', category: 'artisan' },
      { name: 'ベリージャムセット', category: 'artisan' },
      { name: '角のキャンドルホルダー', category: 'artisan' },
      { name: 'ウールブランケット', category: 'artisan' },
    ],
    catMerch: 'グッズ',
    catArtisan: '工芸品',
  },
  giftGuide: {
    h2: 'ギフトガイド',
    sub: '迷ったときは、どんな場面にもぴったりのギフト選びをお手伝いします',
    suggested: 'おすすめギフト',
    occasions: [
      {
        name: 'クリスマス',
        description: 'サンタクロースの故郷からのギフトほどクリスマスらしいものはありません。厳選ホリデーセレクションからお選びください。',
        suggestions: ['ギフトバスケット「ラップランド・ラグジュアリー」', 'ラップランド・ウールブランケット', 'クラウドベリージャムセット', 'フェルトのスリッパ'],
      },
      {
        name: 'ウェディング',
        description: '愛をお祝いに、長く大切にできる手仕事の逸品を。',
        suggestions: ['オーロラ・ペンダント', '木製ククサ(ペア)', 'トナカイ革の財布', '白樺の樹皮かご'],
      },
      {
        name: '誕生日',
        description: '普通のお店では出会えないユニークなギフトで大切な方を驚かせましょう。',
        suggestions: ['サーミ・ドゥオッジのブレスレット', 'プーッコ・ナイフ', 'ギフトバスケット「アークティック・テイスト」', '角のキャンドルホルダー'],
      },
      {
        name: '法人ギフト',
        description: '従来の法人ギフトと一線を画す、上質な北極のギフトでお客様やパートナーに印象を残しましょう。',
        suggestions: ['プーッコ・ナイフ(刻印入り)', 'ギフトバスケット「ラップランド・ラグジュアリー」', '木製ククサ', 'オーロラ・ペンダント'],
      },
    ],
  },
  guides: {
    kicker: '無料ガイド',
    h2: '北極ガイド',
    sub: 'ラップランドについて私たちが知るすべてを、2つの無料ガイドに詰め込みました。下記にメールアドレスを入力すると、すぐにダウンロードできます。',
    guides: [
      {
        title: '工芸の秘密',
        subtitle: '本物のラップランド工芸を見極めるインサイダーガイド',
        description: '工場製の偽物から本物の手作りプーッコ・ナイフを見分け、サーミの伝統工芸ドゥオッジの文化的な意味を理解し、野生ベリーの季節を知り、本物のラップランド工芸品を買うための5つの黄金ルールをマスターしましょう。',
        topics: ['プーッコ・ナイフ', 'ククサ', 'サーミ・ドゥオッジ', '野生ベリー', '購入時のルール'],
        pages: 9,
      },
      {
        title: 'ラップランドの魔法 7日間',
        subtitle: 'これさえあれば十分な、唯一の旅程',
        description: 'ロヴァニエミからイナリへ、そして戻るまでの完全な日別ルート。オーロラのコツ、ハスキーサファリ、砕氷船クルーズ、現実的な予算プランナー、北極のパッキングリスト付き。',
        topics: ['7日間の旅程', '予算プランナー', 'パッキングリスト', '季節ガイド', '現地のコツ'],
        pages: 13,
      },
    ],
    pagesPdf: (pages) => `${pages}ページ · PDF`,
    cta: 'メールアドレスを入力して、両方のガイドを無料で受け取る',
  },
  newsletter: {
    kicker: '両方のガイドを無料で',
    h2: 'メールアドレスを入力してダウンロード',
    body: '両方の北極ガイドにすぐアクセスでき、新商品や職人の新作がショップに登場した際には、いち早くお知らせします。',
    placeholder: 'your@email.com',
    submit: '両方のガイドを受け取る',
    submitting: '送信中…',
    successHeading: 'ガイドのご用意ができました!',
    successFootnote: '北極ファミリーへようこそ。受信ボックスもご確認ください!',
    btnSecret: '工芸の秘密',
    btnSeven: '魔法の7日間',
    errorMsg: '問題が発生しました。もう一度お試しください。',
    spamNote: 'スパムは一切送りません。いつでも配信解除できます。',
  },
  shipping: {
    h2: '私たちのお約束',
    sub: 'LaplandGiftsでお買い物いただく際にお約束すること',
    items: [
      { title: 'ラップランドから直送', description: 'すべての商品はフィンランド、またはEU内のプリントパートナーから発送されます。仲介業者なし、不明な倉庫なし。' },
      { title: '本物の保証', description: '工芸品には原産地証明書が付属します。サーミの工芸品は認定販売者からのみ仕入れています。' },
      { title: 'ギフトに最適な梱包', description: '北極の自然にインスパイアされたリサイクル可能な梱包材で、丁寧にお包みします。会計時にメッセージを添えることもできます。' },
      { title: '職人を支援', description: '工芸品の売上の一部は、職人とその地域社会に直接還元されます。' },
    ],
  },
  footer: {
    pillars: [
      { name: 'カテゴリー', href: '/#categories' },
      { name: '注目商品', href: '/#products' },
      { name: 'ギフトガイド', href: '/#gift-guide' },
      { name: '無料ガイド', href: '/#guides' },
      { name: 'LaplandStays', href: 'https://laplandstays.com' },
      { name: 'LaplandActivities', href: 'https://laplandactivities.online' },
    ],
    editorialNote: 'フィンランド・ラップランドのLapeso Oyによって独立運営 · 最終確認 2026年5月 · 選定した職人や店舗と直接提携し、各商品ページで明示しています。',
    extraLegalUnsub: '配信解除',
  },
  notFound: {
    h1: 'ページが見つかりません',
    body: 'このページは存在しません。オーロラがどこかへ持ち去ってしまったのかもしれません。',
    back: 'ホームに戻る',
  },
  unsubscribe: {
    title: '配信解除 | LaplandGifts',
    h1: '配信解除',
    body: 'メールアドレスを入力すると、ニュースレターの配信リストから削除されます。',
    successH1: '配信解除が完了しました',
    successBody: '今後、私たちからのメールは届きません。さようならは寂しいですが、ありがとうございました。',
    submit: '配信解除',
    submitting: '配信解除中…',
    backHome: 'ホームに戻る',
    errorMsg: '問題が発生しました。もう一度お試しいただくか、info@laplandvibes.com までご連絡ください',
  },
  legal: {
    backHome: 'ホームに戻る',
  },
}

// ---------- ES (Español, tratamiento de usted) ----------

const es: ChromeCopy = {
  nav: {
    categories: 'Categorías',
    products: 'Productos',
    guides: 'Guías',
    promises: 'Compromisos',
  },
  hero: {
    kicker: 'Desde el corazón de la Laponia finlandesa',
    title: 'Regale un trozo del',
    titleAccent: 'Ártico',
    lead: 'Encargue regalos auténticos de Laponia mientras está de vacaciones — le estarán esperando en casa antes de que vuelva. Tesoros artesanales, productos de marca propia y experiencias árticas, enviados directamente desde la Laponia finlandesa.',
    ctaExplore: 'Ver regalos',
    ctaGuide: 'Guía de regalos',
  },
  categories: {
    h2: 'Tres formas de regalar Laponia',
    sub: 'Ya sea una taza de marca, una kuksa tallada a mano o un safari de auroras boreales — tenemos el regalo ártico perfecto',
    items: [
      {
        name: 'Productos #LaplandVibes',
        tag: 'Marca propia',
        description: 'Tazas, camisetas, sudaderas e impresiones en lienzo con nuestros diseños árticos característicos. Impresión bajo demanda — sin inventario, envío a todo el mundo.',
      },
      {
        name: 'Artesanía',
        tag: 'Hecho a mano',
        description: 'Cuchillos puukko forjados a mano, copas kuksa talladas, joyería sami duodji y mermeladas de bayas silvestres — directo de los artesanos lapones.',
      },
      {
        name: 'Experiencias y tarjetas de regalo',
        tag: 'Ideas de regalo',
        description: 'Safaris de auroras boreales, paseos en trineo de renos, noches en cabañas acogedoras y nuestras Lapland Trip Boxes seleccionadas — regale un momento ártico inolvidable.',
      },
    ],
  },
  valueProp: {
    h2: 'Encárguelos en vacaciones. Encuéntrelos en casa.',
    sub: 'Olvídese de meter recuerdos frágiles en la maleta. Compre durante su viaje y nosotros nos encargamos del resto.',
    steps: [
      { title: 'Explore en vacaciones', description: '¿Le encantó un cuchillo puukko? ¿Una kuksa para su madre? Encárguelo mientras viaja — no necesita cargar con nada.' },
      { title: 'Enviamos desde Laponia', description: 'Sus regalos se embalan con cuidado y se envían directamente desde artesanos finlandeses y nuestros socios de impresión en la UE.' },
      { title: 'Le esperan en casa', description: 'Vuelve a casa y sus tesoros lapones ya están en la puerta. Sin estrés de equipaje, sin recuerdos rotos.' },
    ],
  },
  productGrid: {
    h2: 'Próximamente',
    sub: 'Nuestra primera colección está siendo cuidadosamente seleccionada entre los mejores artesanos de la Laponia finlandesa. Suscríbase al boletín para ser de los primeros en saberlo.',
    priceTbd: 'Precio por confirmar',
    notifyMe: 'Avísenme',
    notifyAria: (name) => `Avíseme cuando ${name} esté disponible`,
    products: [
      { name: 'Taza Aurora', category: 'merch' },
      { name: 'Taza Reno', category: 'merch' },
      { name: 'Camiseta Aurora', category: 'merch' },
      { name: 'Sudadera Ártica', category: 'merch' },
      { name: 'Póster de Laponia', category: 'merch' },
      { name: 'Gorro de lana', category: 'merch' },
      { name: 'Cuchillo Puukko', category: 'artisan' },
      { name: 'Copa Kuksa', category: 'artisan' },
      { name: 'Pulsera sami', category: 'artisan' },
      { name: 'Set de mermelada de bayas', category: 'artisan' },
      { name: 'Portavelas de asta', category: 'artisan' },
      { name: 'Manta de lana', category: 'artisan' },
    ],
    catMerch: 'producto de marca',
    catArtisan: 'artesanía',
  },
  giftGuide: {
    h2: 'Guía de regalos',
    sub: '¿No sabe qué elegir? Le ayudamos a encontrar el regalo perfecto para cada ocasión',
    suggested: 'Regalos sugeridos',
    occasions: [
      {
        name: 'Navidad',
        description: 'Nada dice Navidad como un regalo desde la tierra de Papá Noel. Elija entre nuestras selecciones navideñas cuidadosamente preparadas.',
        suggestions: ['Cesta de regalo "Lapland Luxury"', 'Manta de lana de Laponia', 'Set de mermelada de mora ártica', 'Zapatillas de fieltro'],
      },
      {
        name: 'Boda',
        description: 'Celebre el amor con piezas artesanales atemporales que la pareja atesorará durante años.',
        suggestions: ['Colgante con motivo de aurora', 'Copa de kuksa de madera (par)', 'Cartera de cuero de reno', 'Cesta de corteza de abedul'],
      },
      {
        name: 'Cumpleaños',
        description: 'Sorprenda a alguien especial con un regalo único que no encontrará en una tienda corriente.',
        suggestions: ['Pulsera sami duodji', 'Cuchillo puukko', 'Cesta de regalo "Arctic Taste"', 'Portavelas de asta de reno'],
      },
      {
        name: 'Empresa',
        description: 'Impresione a clientes y socios con regalos árticos de calidad que destacan entre los regalos corporativos habituales.',
        suggestions: ['Cuchillo puukko (grabado)', 'Cesta de regalo "Lapland Luxury"', 'Copa de kuksa de madera', 'Colgante con motivo de aurora'],
      },
    ],
  },
  guides: {
    kicker: 'Guías gratuitas',
    h2: 'Guías árticas',
    sub: 'Todo lo que sabemos sobre Laponia, recopilado en dos guías gratuitas. Deje su correo electrónico abajo y descárguelas al instante.',
    guides: [
      {
        title: 'El oficio secreto',
        subtitle: 'Una guía de iniciado a la auténtica artesanía lapona',
        description: 'Aprenda a distinguir los cuchillos puukko hechos a mano de las imitaciones de fábrica, comprenda el significado cultural del duodji sami, descubra las temporadas de bayas silvestres y domine las 5 reglas de oro para comprar artesanía lapona genuina.',
        topics: ['Cuchillos puukko', 'Copas kuksa', 'Sami duodji', 'Bayas silvestres', 'Reglas del comprador'],
        pages: 9,
      },
      {
        title: '7 días de magia en Laponia',
        subtitle: 'El único itinerario que necesitará',
        description: 'Una ruta completa día a día desde Rovaniemi hasta Inari y de vuelta. Incluye consejos para ver auroras boreales, safaris de huskys, cruceros rompehielos, planificador de presupuesto realista y una lista de equipaje ártica completa.',
        topics: ['Itinerario de 7 días', 'Planificador de presupuesto', 'Lista de equipaje', 'Guía estacional', 'Consejos locales'],
        pages: 13,
      },
    ],
    pagesPdf: (pages) => `${pages} páginas · PDF`,
    cta: 'Introduzca su correo para recibir ambas guías gratis',
  },
  newsletter: {
    kicker: 'Reciba ambas guías gratis',
    h2: 'Introduzca su correo para descargarlas',
    body: 'Acceso inmediato a ambas guías árticas y notificaciones anticipadas cuando lleguen nuevos productos y artesanías a la tienda.',
    placeholder: 'su@correo.com',
    submit: 'Recibir ambas guías',
    submitting: 'Enviando…',
    successHeading: '¡Sus guías están listas!',
    successFootnote: 'Bienvenido/a a la familia ártica. ¡Revise también su bandeja de entrada!',
    btnSecret: 'El oficio secreto',
    btnSeven: '7 días de magia',
    errorMsg: 'Algo salió mal. Por favor, inténtelo de nuevo.',
    spamNote: 'Sin spam, nunca. Cancele la suscripción cuando quiera.',
  },
  shipping: {
    h2: 'Nuestros compromisos',
    sub: 'Lo que puede esperar cuando compra en LaplandGifts',
    items: [
      { title: 'Directo desde Laponia', description: 'Cada producto se envía desde Finlandia o desde nuestros socios de impresión en la UE. Sin intermediarios, sin almacenes misteriosos.' },
      { title: 'Garantía de autenticidad', description: 'Los productos artesanales vienen con certificado de origen. La artesanía sami se obtiene solo a través de vendedores autorizados.' },
      { title: 'Embalaje listo para regalar', description: 'Cada pedido se envuelve con cuidado en embalaje reciclable inspirado en la naturaleza ártica. Añada un mensaje personal en el pago.' },
      { title: 'Apoyamos a los artesanos', description: 'Una parte de la venta de cada producto artesanal vuelve directamente al artesano y a su comunidad.' },
    ],
  },
  footer: {
    pillars: [
      { name: 'Categorías', href: '/#categories' },
      { name: 'Productos destacados', href: '/#products' },
      { name: 'Guía de regalos', href: '/#gift-guide' },
      { name: 'Guías gratuitas', href: '/#guides' },
      { name: 'LaplandStays', href: 'https://laplandstays.com' },
      { name: 'LaplandActivities', href: 'https://laplandactivities.online' },
    ],
    editorialNote: 'Mantenido de forma independiente por Lapeso Oy en la Laponia finlandesa · última revisión en mayo de 2026 · colaboramos directamente con artesanos y tiendas seleccionados, con total transparencia en cada página de producto.',
    extraLegalUnsub: 'Cancelar suscripción',
  },
  notFound: {
    h1: 'Página no encontrada',
    body: 'Esta página no existe. Quizá las auroras boreales se la llevaron a otra parte.',
    back: 'Volver al inicio',
  },
  unsubscribe: {
    title: 'Cancelar suscripción | LaplandGifts',
    h1: 'Cancelar suscripción',
    body: 'Introduzca su dirección de correo electrónico para darse de baja de nuestro boletín.',
    successH1: 'Suscripción cancelada',
    successBody: 'Ya no recibirá más correos nuestros. Lamentamos que se vaya.',
    submit: 'Cancelar suscripción',
    submitting: 'Cancelando…',
    backHome: 'Volver al inicio',
    errorMsg: 'Algo salió mal. Inténtelo de nuevo o escriba a info@laplandvibes.com',
  },
  legal: {
    backHome: 'Volver al inicio',
  },
}

// ---------- PT-BR (Português brasileiro, tratamento "você") ----------

const ptBR: ChromeCopy = {
  nav: {
    categories: 'Categorias',
    products: 'Produtos',
    guides: 'Guias',
    promises: 'Compromissos',
  },
  hero: {
    kicker: 'Do coração da Lapônia finlandesa',
    title: 'Presenteie um pedaço do',
    titleAccent: 'Ártico',
    lead: 'Encomende presentes autênticos da Lapônia enquanto está de férias — eles vão estar esperando você em casa antes mesmo de você chegar. Tesouros artesanais, produtos da marca própria e experiências árticas, enviados direto da Lapônia finlandesa.',
    ctaExplore: 'Ver presentes',
    ctaGuide: 'Guia de presentes',
  },
  categories: {
    h2: 'Três maneiras de presentear a Lapônia',
    sub: 'Seja uma caneca de marca, uma kuksa esculpida à mão ou um safári de aurora boreal — temos o presente ártico perfeito',
    items: [
      {
        name: 'Produtos #LaplandVibes',
        tag: 'Marca própria',
        description: 'Canecas, camisetas, moletons e impressões em tela com nossos designs árticos característicos. Impressão sob demanda — sem estoque, envio para o mundo todo.',
      },
      {
        name: 'Artesanato',
        tag: 'Feito à mão',
        description: 'Facas puukko forjadas à mão, kuksas esculpidas, joias sámi duodji e geleias de frutas silvestres — direto dos artesãos da Lapônia.',
      },
      {
        name: 'Experiências e cartões-presente',
        tag: 'Ideias de presente',
        description: 'Safáris de aurora boreal, passeios de trenó com renas, noites em cabanas aconchegantes e as Lapland Trip Boxes selecionadas — presenteie um momento ártico inesquecível.',
      },
    ],
  },
  valueProp: {
    h2: 'Encomende em férias. Encontre em casa.',
    sub: 'Chega de espremer lembrancinhas frágeis na mala. Você compra durante a viagem, nós cuidamos do resto.',
    steps: [
      { title: 'Explore em férias', description: 'Encontrou uma faca puukko incrível? Uma kuksa para sua mãe? Encomende durante o passeio — você não precisa carregar nada.' },
      { title: 'Enviamos da Lapônia', description: 'Seus presentes são embalados com cuidado e enviados direto dos artesãos finlandeses e dos nossos parceiros de impressão na UE.' },
      { title: 'Esperam você em casa', description: 'Você volta para casa e os tesouros da Lapônia já estão na porta. Sem estresse de bagagem, sem lembrancinhas quebradas.' },
    ],
  },
  productGrid: {
    h2: 'Em breve',
    sub: 'Nossa primeira coleção está sendo escolhida a dedo entre os melhores artesãos da Lapônia finlandesa. Cadastre-se no boletim para ser um dos primeiros a saber.',
    priceTbd: 'Preço a definir',
    notifyMe: 'Me avise',
    notifyAria: (name) => `Me avise quando ${name} estiver disponível`,
    products: [
      { name: 'Caneca Aurora', category: 'merch' },
      { name: 'Caneca Rena', category: 'merch' },
      { name: 'Camiseta Aurora', category: 'merch' },
      { name: 'Moletom Ártico', category: 'merch' },
      { name: 'Pôster da Lapônia', category: 'merch' },
      { name: 'Gorro de lã', category: 'merch' },
      { name: 'Faca Puukko', category: 'artisan' },
      { name: 'Caneca Kuksa', category: 'artisan' },
      { name: 'Pulseira sámi', category: 'artisan' },
      { name: 'Kit de geleia de frutas silvestres', category: 'artisan' },
      { name: 'Porta-velas de chifre', category: 'artisan' },
      { name: 'Manta de lã', category: 'artisan' },
    ],
    catMerch: 'produto da marca',
    catArtisan: 'artesanato',
  },
  giftGuide: {
    h2: 'Guia de presentes',
    sub: 'Não sabe o que escolher? A gente te ajuda a encontrar o presente perfeito para cada ocasião',
    suggested: 'Sugestões de presente',
    occasions: [
      {
        name: 'Natal',
        description: 'Nada combina mais com Natal do que um presente vindo da terra do Papai Noel. Escolha entre nossas seleções natalinas cuidadosamente preparadas.',
        suggestions: ['Cesta de presente "Lapland Luxury"', 'Manta de lã da Lapônia', 'Kit de geleia de amora-ártica', 'Pantufas de feltro'],
      },
      {
        name: 'Casamento',
        description: 'Celebre o amor com peças artesanais atemporais que o casal vai guardar por anos.',
        suggestions: ['Pingente com motivo de aurora', 'Kuksa de madeira (par)', 'Carteira de couro de rena', 'Cesta de casca de bétula'],
      },
      {
        name: 'Aniversário',
        description: 'Surpreenda alguém especial com um presente único que não se encontra em qualquer loja.',
        suggestions: ['Pulseira sámi duodji', 'Faca puukko', 'Cesta de presente "Arctic Taste"', 'Porta-velas de chifre de rena'],
      },
      {
        name: 'Corporativo',
        description: 'Impressione clientes e parceiros com presentes árticos de qualidade que se destacam do brinde corporativo comum.',
        suggestions: ['Faca puukko (gravada)', 'Cesta de presente "Lapland Luxury"', 'Kuksa de madeira', 'Pingente com motivo de aurora'],
      },
    ],
  },
  guides: {
    kicker: 'Guias gratuitos',
    h2: 'Guias árticos',
    sub: 'Tudo o que sabemos sobre a Lapônia, reunido em dois guias gratuitos. Deixe seu e-mail abaixo e baixe na hora.',
    guides: [
      {
        title: 'O ofício secreto',
        subtitle: 'Um guia interno da autêntica artesania da Lapônia',
        description: 'Aprenda a reconhecer facas puukko realmente feitas à mão entre as falsificações de fábrica, entenda o significado cultural do duodji sámi, descubra as estações das frutas silvestres e domine as 5 regras de ouro para comprar artesanato lapão genuíno.',
        topics: ['Facas puukko', 'Kuksas', 'Sámi duodji', 'Frutas silvestres', 'Regras do comprador'],
        pages: 9,
      },
      {
        title: '7 dias de magia na Lapônia',
        subtitle: 'O único roteiro que você vai precisar',
        description: 'Uma rota completa dia a dia de Rovaniemi a Inari e de volta. Inclui dicas para ver aurora boreal, safáris de huskies, cruzeiros em quebra-gelo, planejador de orçamento realista e uma lista de bagagem ártica completa.',
        topics: ['Roteiro de 7 dias', 'Planejador de orçamento', 'Lista de bagagem', 'Guia sazonal', 'Dicas locais'],
        pages: 13,
      },
    ],
    pagesPdf: (pages) => `${pages} páginas · PDF`,
    cta: 'Digite seu e-mail e receba os dois guias grátis',
  },
  newsletter: {
    kicker: 'Os dois guias de graça',
    h2: 'Digite seu e-mail e baixe agora',
    body: 'Acesso imediato aos dois guias árticos e avisos antecipados quando chegarem novos produtos e edições artesanais na loja.',
    placeholder: 'seu@email.com',
    submit: 'Receber os dois guias',
    submitting: 'Enviando…',
    successHeading: 'Seus guias estão prontos!',
    successFootnote: 'Bem-vindo(a) à família ártica. Confira também sua caixa de entrada!',
    btnSecret: 'O ofício secreto',
    btnSeven: '7 dias de magia',
    errorMsg: 'Algo deu errado. Tente novamente.',
    spamNote: 'Sem spam, nunca. Cancele a qualquer momento.',
  },
  shipping: {
    h2: 'Nossos compromissos',
    sub: 'O que você pode esperar quando compra na LaplandGifts',
    items: [
      { title: 'Direto da Lapônia', description: 'Cada produto sai da Finlândia ou dos nossos parceiros de impressão na UE. Sem intermediários, sem depósitos misteriosos.' },
      { title: 'Garantia de autenticidade', description: 'Os produtos artesanais vêm com certificado de origem. O artesanato sámi é comprado apenas de vendedores autorizados.' },
      { title: 'Embalagem pronta para presente', description: 'Cada pedido é embalado com cuidado em material reciclável inspirado na natureza ártica. Adicione uma mensagem pessoal no checkout.' },
      { title: 'Apoiamos os artesãos', description: 'Parte de cada venda artesanal volta diretamente ao artesão e à sua comunidade.' },
    ],
  },
  footer: {
    pillars: [
      { name: 'Categorias', href: '/#categories' },
      { name: 'Produtos em destaque', href: '/#products' },
      { name: 'Guia de presentes', href: '/#gift-guide' },
      { name: 'Guias gratuitos', href: '/#guides' },
      { name: 'LaplandStays', href: 'https://laplandstays.com' },
      { name: 'LaplandActivities', href: 'https://laplandactivities.online' },
    ],
    editorialNote: 'Mantido de forma independente pela Lapeso Oy na Lapônia finlandesa · última revisão em maio de 2026 · trabalhamos diretamente com artesãos e lojas selecionados, com transparência total em cada página de produto.',
    extraLegalUnsub: 'Cancelar inscrição',
  },
  notFound: {
    h1: 'Página não encontrada',
    body: 'Esta página não existe. Talvez as auroras boreais a tenham levado para outro lugar.',
    back: 'Voltar para a página inicial',
  },
  unsubscribe: {
    title: 'Cancelar inscrição | LaplandGifts',
    h1: 'Cancelar inscrição',
    body: 'Digite seu endereço de e-mail para sair da nossa lista de newsletter.',
    successH1: 'Inscrição cancelada',
    successBody: 'Você não vai receber mais e-mails nossos. Sentiremos sua falta.',
    submit: 'Cancelar inscrição',
    submitting: 'Cancelando…',
    backHome: 'Voltar para a página inicial',
    errorMsg: 'Algo deu errado. Tente novamente ou escreva para info@laplandvibes.com',
  },
  legal: {
    backHome: 'Voltar para a página inicial',
  },
}

// ---------- ZH-CN (简体中文, 礼貌敬语 "您") ----------

const zhCN: ChromeCopy = {
  nav: {
    categories: '分类',
    products: '商品',
    guides: '指南',
    promises: '我们的承诺',
  },
  hero: {
    kicker: '来自芬兰拉普兰的中心',
    title: '把一份',
    titleAccent: '北极',
    lead: '在度假途中订购正宗的拉普兰礼物 — 在您回家之前,它们已经在家中等候。手工打造的珍品、自有品牌商品和北极体验,从芬兰拉普兰直接发货。',
    ctaExplore: '浏览礼物',
    ctaGuide: '礼物指南',
  },
  categories: {
    h2: '送出拉普兰的三种方式',
    sub: '无论是品牌马克杯、手工雕刻的库克萨木杯,还是北极光之旅 — 我们都为您准备了完美的北极礼物',
    items: [
      {
        name: '#LaplandVibes 周边商品',
        tag: '自有品牌',
        description: '采用我们独特北极图案的马克杯、T恤、连帽衫和帆布画。按需印制 — 零库存,全球发货。',
      },
      {
        name: '手工艺品',
        tag: '纯手工',
        description: '手工锻造的普科刀、雕刻的库克萨木杯、萨米传统工艺(杜奥德吉)饰品,以及野生浆果果酱 — 直接来自拉普兰当地工匠。',
      },
      {
        name: '体验项目与礼品卡',
        tag: '送礼灵感',
        description: '北极光之旅、驯鹿雪橇、温馨木屋之夜,以及精心策划的拉普兰旅行礼盒 — 为他人送上难忘的北极时刻。',
      },
    ],
  },
  valueProp: {
    h2: '度假时下单,回家时取货。',
    sub: '再也不用把易碎的纪念品塞进行李箱。您只管放心购物,其余的交给我们。',
    steps: [
      { title: '度假途中挑选', description: '看中一把普科刀?想给母亲买一只库克萨木杯?旅行途中下单即可 — 您无需随身携带任何物品。' },
      { title: '我们从拉普兰发货', description: '您的礼物会被精心包装,直接由芬兰工匠和我们的欧盟印制合作伙伴发货。' },
      { title: '在家中等候您', description: '您一回到家,拉普兰的珍品就已经在门口等候。无需为行李烦恼,也不会有破损的纪念品。' },
    ],
  },
  productGrid: {
    h2: '即将上市',
    sub: '我们的首个系列正由芬兰拉普兰最优秀的工匠精心打造。请订阅我们的电子报,以便第一时间获得通知。',
    priceTbd: '价格待定',
    notifyMe: '通知我',
    notifyAria: (name) => `${name} 上架时通知我`,
    products: [
      { name: '极光马克杯', category: 'merch' },
      { name: '驯鹿马克杯', category: 'merch' },
      { name: '极光T恤', category: 'merch' },
      { name: '北极连帽衫', category: 'merch' },
      { name: '拉普兰海报', category: 'merch' },
      { name: '羊毛帽', category: 'merch' },
      { name: '普科刀', category: 'artisan' },
      { name: '库克萨木杯', category: 'artisan' },
      { name: '萨米手链', category: 'artisan' },
      { name: '浆果果酱礼盒', category: 'artisan' },
      { name: '鹿角烛台', category: 'artisan' },
      { name: '羊毛毯', category: 'artisan' },
    ],
    catMerch: '周边',
    catArtisan: '手工艺品',
  },
  giftGuide: {
    h2: '礼物指南',
    sub: '不知道选什么?让我们帮您为每个场合找到合适的礼物',
    suggested: '推荐礼物',
    occasions: [
      {
        name: '圣诞节',
        description: '来自圣诞老人故乡的礼物最能传递圣诞气氛。请从我们精选的节日系列中挑选。',
        suggestions: ['"拉普兰奢华"礼篮', '拉普兰羊毛毯', '云莓果酱礼盒', '毛毡拖鞋'],
      },
      {
        name: '婚礼',
        description: '用经得起时间考验的手工艺品庆祝爱情,新人可以珍藏多年。',
        suggestions: ['极光主题吊坠', '木质库克萨木杯(一对)', '驯鹿皮钱包', '桦树皮编篮'],
      },
      {
        name: '生日',
        description: '用普通商店里找不到的独特礼物,给重要的人一份惊喜。',
        suggestions: ['萨米杜奥德吉手链', '普科刀', '"北极风味"礼篮', '鹿角烛台'],
      },
      {
        name: '商务礼品',
        description: '用与众不同的高品质北极礼物,给客户和合作伙伴留下深刻印象。',
        suggestions: ['普科刀(刻字)', '"拉普兰奢华"礼篮', '木质库克萨木杯', '极光主题吊坠'],
      },
    ],
  },
  guides: {
    kicker: '免费指南',
    h2: '北极指南',
    sub: '我们对拉普兰所知的一切,浓缩在两本免费指南中。请在下方填写邮箱,即可立即下载。',
    guides: [
      {
        title: '工艺的秘密',
        subtitle: '辨识正宗拉普兰工艺品的内行指南',
        description: '学会从工厂仿制品中辨认真正的手工普科刀,理解萨米杜奥德吉的文化意义,掌握野生浆果的季节,以及购买正宗拉普兰工艺品的5条黄金准则。',
        topics: ['普科刀', '库克萨木杯', '萨米杜奥德吉', '野生浆果', '买家须知'],
        pages: 9,
      },
      {
        title: '拉普兰魔法7日',
        subtitle: '您唯一需要的行程方案',
        description: '从罗瓦涅米到伊纳里再返回的完整逐日路线。包含极光观赏要点、哈士奇雪橇、破冰船游览、实用预算规划,以及完整的北极行装清单。',
        topics: ['7日行程', '预算规划', '行装清单', '季节指南', '本地贴士'],
        pages: 13,
      },
    ],
    pagesPdf: (pages) => `${pages} 页 · PDF`,
    cta: '填写邮箱,免费获取两份指南',
  },
  newsletter: {
    kicker: '两份指南均可免费获取',
    h2: '填写邮箱即可下载',
    body: '立即获得两份北极指南,并在新商品和工匠新作品上架时第一时间收到通知。',
    placeholder: 'your@email.com',
    submit: '获取两份指南',
    submitting: '发送中…',
    successHeading: '指南已准备就绪!',
    successFootnote: '欢迎加入北极家庭。请同时查收您的收件箱!',
    btnSecret: '工艺的秘密',
    btnSeven: '魔法7日',
    errorMsg: '出现错误,请重试。',
    spamNote: '绝无垃圾邮件。可随时取消订阅。',
  },
  shipping: {
    h2: '我们的承诺',
    sub: '在 LaplandGifts 购物时,您可以期待这些保障',
    items: [
      { title: '从拉普兰直发', description: '每件商品都从芬兰或我们的欧盟印制合作伙伴发出。没有中间商,没有不明仓库。' },
      { title: '正品保证', description: '工艺品附带原产地证书。萨米工艺品仅向授权销售商采购。' },
      { title: '礼品级包装', description: '每份订单均以可回收包装精心装裹,设计灵感来自北极自然。结账时可添加个性化留言。' },
      { title: '支持工匠', description: '每件工艺品销售收入的一部分会直接回馈给工匠及其所在社区。' },
    ],
  },
  footer: {
    pillars: [
      { name: '分类', href: '/#categories' },
      { name: '精选商品', href: '/#products' },
      { name: '礼物指南', href: '/#gift-guide' },
      { name: '免费指南', href: '/#guides' },
      { name: 'LaplandStays', href: 'https://laplandstays.com' },
      { name: 'LaplandActivities', href: 'https://laplandactivities.online' },
    ],
    editorialNote: '由位于芬兰拉普兰的 Lapeso Oy 独立运营 · 最后审阅:2026年5月 · 我们直接与精选工匠和商家合作,并在每个商品页面上完整披露。',
    extraLegalUnsub: '取消订阅',
  },
  notFound: {
    h1: '页面未找到',
    body: '此页面不存在。也许北极光把它带去了别的地方。',
    back: '返回首页',
  },
  unsubscribe: {
    title: '取消订阅 | LaplandGifts',
    h1: '取消订阅',
    body: '请输入您的电子邮箱地址,即可从我们的电子报列表中退订。',
    successH1: '已取消订阅',
    successBody: '您将不再收到我们的邮件。很遗憾您的离开。',
    submit: '取消订阅',
    submitting: '处理中…',
    backHome: '返回首页',
    errorMsg: '出现错误。请重试,或发送邮件至 info@laplandvibes.com',
  },
  legal: {
    backHome: '返回首页',
  },
}

// ---------- KO (한국어, 정중체) ----------

const ko: ChromeCopy = {
  nav: {
    categories: '카테고리',
    products: '상품',
    guides: '가이드',
    promises: '약속',
  },
  hero: {
    kicker: '라플란드의 심장부에서',
    title: '북극의 한 조각을',
    titleAccent: '선물하세요',
    lead: '휴가 중에 진정한 라플란드 선물을 주문하세요 — 여러분보다 먼저 집에 도착해 기다리고 있을 것입니다. 손으로 만든 보물, 자체 브랜드 굿즈, 그리고 북극의 경험까지 라플란드에서 바로 배송됩니다.',
    ctaExplore: '선물 둘러보기',
    ctaGuide: '선물 가이드',
  },
  categories: {
    h2: '라플란드를 선물하는 세 가지 방법',
    sub: '브랜드 머그컵, 손으로 깎은 쿡사, 오로라 사파리 — 완벽한 북극 선물을 준비했습니다',
    items: [
      {
        name: '#LaplandVibes 굿즈',
        tag: '자체 브랜드',
        description: '시그니처 북극 디자인을 담은 머그컵, 티셔츠, 후디, 캔버스 프린트. 주문 제작 방식으로 재고 없이 전 세계로 배송합니다.',
      },
      {
        name: '북유럽 공예품',
        tag: '수공예',
        description: '대장간에서 단조한 푸코, 손으로 깎은 쿡사, 사미 두오지 장신구, 야생 베리 잼 — 라플란드 장인에게서 직접 들여옵니다.',
      },
      {
        name: '체험 및 기프트 카드',
        tag: '선물 아이디어',
        description: '오로라 사파리, 순록 썰매, 아늑한 통나무집의 밤, 엄선된 라플란드 트립 박스 — 잊지 못할 북극의 순간을 선물하세요.',
      },
    ],
  },
  valueProp: {
    h2: '휴가 중에 주문하고, 집에서 받으세요.',
    sub: '깨지기 쉬운 기념품을 캐리어에 넣지 않으셔도 됩니다. 여행 중에 쇼핑하시면 나머지는 저희가 처리합니다.',
    steps: [
      { title: '여행 중에 둘러보기', description: '마음에 드는 푸코를 발견하셨나요? 어머니께 드릴 쿡사는 어떠세요? 여행 중에 주문하시면 아무것도 들고 다닐 필요가 없습니다.' },
      { title: '라플란드에서 배송', description: '선물은 정성껏 포장되어 핀란드 장인과 저희 EU 인쇄 파트너에게서 직접 발송됩니다.' },
      { title: '집에서 기다리고 있어요', description: '집에 도착하시면 라플란드의 보물이 이미 문 앞에 도착해 있습니다. 짐 걱정도, 깨진 기념품도 없습니다.' },
    ],
  },
  productGrid: {
    h2: '곧 출시',
    sub: '라플란드 최고의 장인들로부터 첫 컬렉션을 엄선하고 있습니다. 뉴스레터에 가입하시면 가장 먼저 소식을 받아보실 수 있습니다.',
    priceTbd: '가격 미정',
    notifyMe: '알림 받기',
    notifyAria: (name) => `${name} 입고 시 알림 받기`,
    products: [
      { name: '오로라 머그컵', category: 'merch' },
      { name: '순록 머그컵', category: 'merch' },
      { name: '오로라 티셔츠', category: 'merch' },
      { name: '북극 후디', category: 'merch' },
      { name: '라플란드 포스터', category: 'merch' },
      { name: '울 비니', category: 'merch' },
      { name: '푸코', category: 'artisan' },
      { name: '쿡사 컵', category: 'artisan' },
      { name: '사미 팔찌', category: 'artisan' },
      { name: '베리 잼 세트', category: 'artisan' },
      { name: '뿔 캔들 홀더', category: 'artisan' },
      { name: '울 담요', category: 'artisan' },
    ],
    catMerch: '굿즈',
    catArtisan: '공예품',
  },
  giftGuide: {
    h2: '선물 가이드',
    sub: '무엇을 골라야 할지 모르시겠나요? 모든 상황에 어울리는 완벽한 선물을 찾아드립니다',
    suggested: '추천 선물',
    occasions: [
      {
        name: '크리스마스',
        description: '산타클로스의 고향에서 보낸 선물만큼 크리스마스에 어울리는 것은 없습니다. 엄선된 홀리데이 컬렉션에서 골라보세요.',
        suggestions: ['선물 바구니 "라플란드 럭셔리"', '라플란드 울 담요', '클라우드베리 잼 세트', '펠트 슬리퍼'],
      },
      {
        name: '결혼식',
        description: '오래도록 소중히 간직할 수 있는 시대를 초월한 수공예품으로 사랑을 축하하세요.',
        suggestions: ['오로라 펜던트', '나무 쿡사 컵 (한 쌍)', '순록 가죽 지갑', '자작나무 껍질 바구니'],
      },
      {
        name: '생일',
        description: '평범한 가게에서는 찾을 수 없는 특별한 선물로 소중한 사람을 놀라게 해주세요.',
        suggestions: ['사미 두오지 팔찌', '푸코', '선물 바구니 "북극의 맛"', '순록 뿔 캔들 홀더'],
      },
      {
        name: '기업 선물',
        description: '평범한 법인 선물에서 한 단계 높인 프리미엄 북극 선물로 고객과 파트너에게 깊은 인상을 남기세요.',
        suggestions: ['푸코 (각인)', '선물 바구니 "라플란드 럭셔리"', '나무 쿡사 컵', '오로라 펜던트'],
      },
    ],
  },
  guides: {
    kicker: '무료 가이드',
    h2: '북극 가이드',
    sub: '저희가 알고 있는 라플란드의 모든 것을 두 권의 무료 가이드에 담았습니다. 아래에 이메일을 남기시면 바로 다운로드하실 수 있습니다.',
    guides: [
      {
        title: '비밀의 공예',
        subtitle: '진정한 라플란드 공예를 알아보는 인사이더 가이드',
        description: '공장제 모조품과 진짜 수공예 푸코를 구별하는 법, 사미 두오지의 문화적 의미, 야생 베리의 계절, 그리고 진품 라플란드 공예품을 구입할 때의 5가지 황금률을 배워보세요.',
        topics: ['푸코', '쿡사', '사미 두오지', '야생 베리', '구매자 규칙'],
        pages: 9,
      },
      {
        title: '라플란드의 마법 같은 7일',
        subtitle: '이것 하나로 충분한 유일한 여행 일정',
        description: '로바니에미에서 이나리까지, 그리고 돌아오는 길까지의 완전한 일별 루트. 오로라 팁, 허스키 사파리, 쇄빙선 크루즈, 현실적인 예산 플래너, 북극 패킹 리스트가 포함되어 있습니다.',
        topics: ['7일 일정', '예산 플래너', '패킹 리스트', '시즌 가이드', '현지 팁'],
        pages: 13,
      },
    ],
    pagesPdf: (pages) => `${pages}쪽 · PDF`,
    cta: '이메일을 입력하시면 두 가이드 모두 무료로 받으실 수 있습니다',
  },
  newsletter: {
    kicker: '두 가이드 모두 무료로',
    h2: '이메일을 입력하고 다운로드하세요',
    body: '두 북극 가이드에 바로 접근하실 수 있으며, 새 상품과 장인의 신작이 상점에 입고되면 가장 먼저 알려드립니다.',
    placeholder: 'your@email.com',
    submit: '두 가이드 받기',
    submitting: '보내는 중…',
    successHeading: '가이드가 준비되었습니다!',
    successFootnote: '북극 가족이 되신 것을 환영합니다. 받은편지함도 확인해 주세요!',
    btnSecret: '비밀의 공예',
    btnSeven: '마법의 7일',
    errorMsg: '문제가 발생했습니다. 다시 시도해 주세요.',
    spamNote: '스팸은 절대 없습니다. 언제든지 구독을 해지하실 수 있습니다.',
  },
  shipping: {
    h2: '저희의 약속',
    sub: 'LaplandGifts에서 쇼핑하실 때 기대하실 수 있는 것들',
    items: [
      { title: '라플란드에서 직배송', description: '모든 상품은 핀란드 또는 EU 인쇄 파트너에게서 발송됩니다. 중간 상인도, 정체불명의 창고도 없습니다.' },
      { title: '진품 보증', description: '공예품에는 원산지 증명서가 함께 제공됩니다. 사미 공예품은 공인 판매자를 통해서만 들여옵니다.' },
      { title: '선물용 포장', description: '모든 주문은 북극 자연에서 영감을 받은 재활용 가능한 포장재로 정성껏 포장됩니다. 결제 시 개인 메시지를 추가하실 수 있습니다.' },
      { title: '장인을 응원합니다', description: '모든 공예품 판매액의 일부는 장인과 그들의 지역사회에 직접 돌아갑니다.' },
    ],
  },
  footer: {
    pillars: [
      { name: '카테고리', href: '/#categories' },
      { name: '주요 상품', href: '/#products' },
      { name: '선물 가이드', href: '/#gift-guide' },
      { name: '무료 가이드', href: '/#guides' },
      { name: 'LaplandStays', href: 'https://laplandstays.com' },
      { name: 'LaplandActivities', href: 'https://laplandactivities.online' },
    ],
    editorialNote: '라플란드의 Lapeso Oy가 독립적으로 운영합니다 · 마지막 검토: 2026년 5월 · 엄선된 장인과 상점과 직접 제휴하며, 모든 상품 페이지에서 이를 명시합니다.',
    extraLegalUnsub: '구독 해지',
  },
  notFound: {
    h1: '페이지를 찾을 수 없습니다',
    body: '이 페이지는 존재하지 않습니다. 오로라가 어딘가로 가져갔는지도 모르겠네요.',
    back: '홈으로 돌아가기',
  },
  unsubscribe: {
    title: '구독 해지 | LaplandGifts',
    h1: '구독 해지',
    body: '뉴스레터 목록에서 이메일을 제거하려면 주소를 입력하세요.',
    successH1: '구독이 해지되었습니다',
    successBody: '더 이상 이메일을 보내드리지 않겠습니다. 떠나신다니 아쉽습니다.',
    submit: '구독 해지',
    submitting: '해지하는 중…',
    backHome: '홈으로 돌아가기',
    errorMsg: '문제가 발생했습니다. 다시 시도하시거나 info@laplandvibes.com으로 연락해 주세요',
  },
  legal: {
    backHome: '홈으로 돌아가기',
  },
}

// ---------- FR (Français, vouvoiement) ----------

const fr: ChromeCopy = {
  nav: {
    categories: 'Catégories',
    products: 'Produits',
    guides: 'Guides',
    promises: 'Engagements',
  },
  hero: {
    kicker: 'Au cœur de la Laponie finlandaise',
    title: 'Offrez un morceau de',
    titleAccent: "l'Arctique",
    lead: "Commandez d'authentiques cadeaux de Laponie pendant vos vacances — ils vous attendront chez vous avant votre retour. Trésors artisanaux, articles griffés et expériences arctiques, expédiés directement depuis la Laponie finlandaise.",
    ctaExplore: 'Voir les cadeaux',
    ctaGuide: 'Guide des cadeaux',
  },
  categories: {
    h2: 'Trois façons d\'offrir la Laponie',
    sub: 'Que ce soit un mug griffé, une kuksa sculptée à la main ou un safari aux aurores boréales — nous avons le cadeau arctique parfait',
    items: [
      {
        name: 'Articles #LaplandVibes',
        tag: 'Marque maison',
        description: 'Mugs, t-shirts, sweats à capuche et tirages sur toile aux motifs arctiques signature. Impression à la demande — zéro stock, livraison dans le monde entier.',
      },
      {
        name: 'Artisanat',
        tag: 'Fait main',
        description: 'Couteaux puukko forgés à la main, kuksas sculptées, bijoux duodji sami et confitures de baies sauvages — directement des artisans lapons.',
      },
      {
        name: 'Expériences et cartes-cadeaux',
        tag: 'Idées cadeaux',
        description: "Safaris aux aurores boréales, balades en traîneau de rennes, nuits en chalet douillet et nos Lapland Trip Boxes — offrez un moment arctique inoubliable.",
      },
    ],
  },
  valueProp: {
    h2: 'Commandez en vacances. Retrouvez vos cadeaux chez vous.',
    sub: 'Fini les souvenirs fragiles à caser dans la valise. Faites vos achats pendant votre voyage, nous nous occupons du reste.',
    steps: [
      { title: 'Achetez pendant le voyage', description: "Un puukko qui vous plaît ? Une kuksa pour votre mère ? Commandez pendant que vous explorez — vous n'avez rien à transporter." },
      { title: 'Expédié depuis la Laponie', description: 'Vos cadeaux sont emballés avec soin et expédiés directement par des artisans finlandais et nos partenaires d\'impression en UE.',
      },
      { title: 'À votre porte au retour', description: 'Vous rentrez chez vous et vos trésors lapons sont déjà sur le pas de la porte. Aucun stress de bagages, aucun souvenir cassé.' },
    ],
  },
  productGrid: {
    h2: 'Bientôt disponible',
    sub: 'Notre première collection est sélectionnée avec soin parmi les meilleurs artisans de Laponie finlandaise. Inscrivez-vous à la newsletter pour être prévenu(e) en priorité.',
    priceTbd: 'Prix à venir',
    notifyMe: 'Me prévenir',
    notifyAria: (name) => `Me prévenir quand ${name} sera disponible`,
    products: [
      { name: 'Mug Aurore', category: 'merch' },
      { name: 'Mug Renne', category: 'merch' },
      { name: 'T-shirt Aurore', category: 'merch' },
      { name: 'Sweat Arctique', category: 'merch' },
      { name: 'Poster Laponie', category: 'merch' },
      { name: 'Bonnet en laine', category: 'merch' },
      { name: 'Couteau Puukko', category: 'artisan' },
      { name: 'Kuksa', category: 'artisan' },
      { name: 'Bracelet sami', category: 'artisan' },
      { name: 'Coffret confitures de baies', category: 'artisan' },
      { name: 'Bougeoir en bois de renne', category: 'artisan' },
      { name: 'Plaid en laine', category: 'artisan' },
    ],
    catMerch: 'articles griffés',
    catArtisan: 'artisanat',
  },
  giftGuide: {
    h2: 'Guide des cadeaux',
    sub: "Vous hésitez ? Nous vous aidons à trouver le cadeau parfait pour chaque occasion",
    suggested: 'Suggestions de cadeaux',
    occasions: [
      {
        name: 'Noël',
        description: "Rien n'évoque mieux Noël qu'un cadeau venu du pays du Père Noël. Choisissez parmi nos sélections festives.",
        suggestions: ['Panier cadeau "Lapland Luxury"', 'Plaid en laine de Laponie', 'Coffret confiture de mûres arctiques', 'Chaussons en feutre'],
      },
      {
        name: 'Mariage',
        description: "Célébrez l'amour avec des pièces artisanales intemporelles que le couple chérira pendant des années.",
        suggestions: ['Pendentif aurore boréale', 'Kuksa en bois (paire)', 'Portefeuille en cuir de renne', "Panier en écorce de bouleau"],
      },
      {
        name: 'Anniversaire',
        description: "Surprenez quelqu'un de spécial avec un cadeau unique qu'on ne trouve dans aucune boutique ordinaire.",
        suggestions: ['Bracelet duodji sami', 'Couteau puukko', 'Panier cadeau "Saveurs arctiques"', 'Bougeoir en bois de renne'],
      },
      {
        name: 'Entreprise',
        description: 'Marquez clients et partenaires avec des cadeaux arctiques haut de gamme qui sortent du lot.',
        suggestions: ['Puukko (gravé)', 'Panier cadeau "Lapland Luxury"', 'Kuksa en bois', 'Pendentif aurore boréale'],
      },
    ],
  },
  guides: {
    kicker: 'Guides gratuits',
    h2: 'Guides arctiques',
    sub: "Tout ce que nous savons de la Laponie, condensé dans deux guides gratuits. Laissez votre adresse e-mail ci-dessous et téléchargez-les immédiatement.",
    guides: [
      {
        title: "L'artisanat secret",
        subtitle: "Le guide d'initié de l'artisanat lapon authentique",
        description: "Apprenez à distinguer les vrais puukkos faits main des contrefaçons d'usine, comprenez la signification culturelle du duodji sami, découvrez les saisons des baies sauvages et maîtrisez les 5 règles d'or pour acheter de l'artisanat lapon authentique.",
        topics: ['Couteaux puukko', 'Kuksas', 'Duodji sami', 'Baies sauvages', "Règles d'achat"],
        pages: 9,
      },
      {
        title: '7 jours de magie en Laponie',
        subtitle: 'Le seul itinéraire dont vous aurez besoin',
        description: 'Un itinéraire complet jour par jour de Rovaniemi à Inari et retour. Inclut conseils pour les aurores boréales, safaris en husky, croisières en brise-glace, planificateur de budget réaliste et liste complète des bagages arctiques.',
        topics: ['Itinéraire 7 jours', 'Planificateur de budget', 'Liste de bagages', 'Guide saisonnier', 'Conseils locaux'],
        pages: 13,
      },
    ],
    pagesPdf: (pages) => `${pages} pages · PDF`,
    cta: 'Entrez votre e-mail pour recevoir les deux guides gratuitement',
  },
  newsletter: {
    kicker: 'Les deux guides offerts',
    h2: 'Entrez votre e-mail pour télécharger',
    body: 'Accès immédiat aux deux guides arctiques, plus les notifications anticipées dès que de nouveaux produits et créations artisanales arrivent en boutique.',
    placeholder: 'votre@email.com',
    submit: 'Recevoir les deux guides',
    submitting: 'Envoi…',
    successHeading: 'Vos guides sont prêts !',
    successFootnote: 'Bienvenue dans la famille arctique. Pensez aussi à vérifier votre boîte de réception !',
    btnSecret: "L'artisanat secret",
    btnSeven: '7 jours de magie',
    errorMsg: "Une erreur s'est produite. Veuillez réessayer.",
    spamNote: 'Jamais de spam. Désabonnement possible à tout moment.',
  },
  shipping: {
    h2: 'Nos engagements',
    sub: 'Ce que vous pouvez attendre en commandant chez LaplandGifts',
    items: [
      { title: 'Directement de Laponie', description: "Chaque produit est expédié depuis la Finlande ou nos partenaires d'impression en UE. Aucun intermédiaire, aucun entrepôt mystère." },
      { title: "Garantie d'authenticité", description: "Les produits artisanaux sont accompagnés d'un certificat d'origine. L'artisanat sami est sourcé uniquement auprès de vendeurs autorisés." },
      { title: 'Emballage prêt à offrir', description: "Chaque commande est emballée avec soin dans des matériaux recyclables inspirés de la nature arctique. Ajoutez un message personnel au paiement." },
      { title: 'Soutien aux artisans', description: 'Une partie de chaque vente de produit artisanal revient directement à l\'artisan et à sa communauté.' },
    ],
  },
  footer: {
    pillars: [
      { name: 'Catégories', href: '/#categories' },
      { name: 'Produits phares', href: '/#products' },
      { name: 'Guide des cadeaux', href: '/#gift-guide' },
      { name: 'Guides gratuits', href: '/#guides' },
      { name: 'LaplandStays', href: 'https://laplandstays.com' },
      { name: 'LaplandActivities', href: 'https://laplandactivities.online' },
    ],
    editorialNote: 'Édité de façon indépendante par Lapeso Oy en Laponie finlandaise · dernière vérification mai 2026 · nous travaillons directement avec des artisans et boutiques sélectionnés, en toute transparence sur chaque fiche produit.',
    extraLegalUnsub: 'Se désabonner',
  },
  notFound: {
    h1: 'Page introuvable',
    body: "Cette page n'existe pas. Peut-être que l'aurore boréale l'a emmenée ailleurs.",
    back: "Retour à l'accueil",
  },
  unsubscribe: {
    title: 'Désabonnement | LaplandGifts',
    h1: 'Se désabonner',
    body: 'Entrez votre adresse e-mail pour vous retirer de notre liste de diffusion.',
    successH1: 'Vous êtes désabonné(e)',
    successBody: 'Vous ne recevrez plus aucun e-mail de notre part. Nous sommes désolés de vous voir partir.',
    submit: 'Se désabonner',
    submitting: 'Désabonnement…',
    backHome: "Retour à l'accueil",
    errorMsg: "Une erreur s'est produite. Veuillez réessayer ou écrire à info@laplandvibes.com",
  },
  legal: {
    backHome: "Retour à l'accueil",
  },
}

// ---------- IT (Italiano, forma cortese "Lei") ----------

const it: ChromeCopy = {
  nav: {
    categories: 'Categorie',
    products: 'Prodotti',
    guides: 'Guide',
    promises: 'Impegni',
  },
  hero: {
    kicker: 'Dal cuore della Lapponia finlandese',
    title: 'Regala un pezzo di',
    titleAccent: 'Artico',
    lead: "Ordini autentici regali della Lapponia mentre è in vacanza — la aspetteranno a casa prima del Suo ritorno. Tesori artigianali, articoli a marchio proprio ed esperienze artiche, spediti direttamente dalla Lapponia finlandese.",
    ctaExplore: 'Scopri i regali',
    ctaGuide: 'Guida ai regali',
  },
  categories: {
    h2: 'Tre modi per regalare la Lapponia',
    sub: 'Che si tratti di una tazza a marchio, di una kuksa intagliata a mano o di un safari per l\'aurora boreale — abbiamo il regalo artico perfetto',
    items: [
      {
        name: 'Articoli #LaplandVibes',
        tag: 'Marchio proprio',
        description: "Tazze, t-shirt, felpe e stampe su tela con i nostri disegni artici esclusivi. Stampa su richiesta — niente magazzino, spedizione in tutto il mondo.",
      },
      {
        name: 'Artigianato',
        tag: 'Fatto a mano',
        description: "Coltelli puukko forgiati a mano, kuksa intagliate, gioielli duodji sami e marmellate di bacche selvatiche — direttamente dagli artigiani lapponi.",
      },
      {
        name: 'Esperienze e carte regalo',
        tag: 'Idee regalo',
        description: 'Safari per l\'aurora boreale, slitte trainate da renne, notti in baita accoglienti e le nostre Lapponia Trip Boxes selezionate — regali un momento artico indimenticabile.',
      },
    ],
  },
  valueProp: {
    h2: 'Ordini in vacanza. Li ritrovi a casa.',
    sub: 'Basta infilare souvenir fragili in valigia. Acquisti durante il viaggio e al resto pensiamo noi.',
    steps: [
      { title: 'Sceglie in vacanza', description: 'Ha trovato un puukko che adora? Una kuksa per la mamma? Ordini mentre esplora — non deve portare nulla.' },
      { title: 'Spediamo dalla Lapponia', description: 'I Suoi regali vengono confezionati con cura e spediti direttamente da artigiani finlandesi e dai nostri partner di stampa nell\'UE.' },
      { title: 'L\'aspettano a casa', description: 'Rientra a casa e i Suoi tesori lapponi sono già sulla porta. Niente stress da bagaglio, niente souvenir rotti.' },
    ],
  },
  productGrid: {
    h2: 'In arrivo',
    sub: 'La nostra prima collezione viene selezionata tra i migliori artigiani della Lapponia finlandese. Si iscriva alla newsletter per essere tra i primi a saperlo.',
    priceTbd: 'Prezzo da definire',
    notifyMe: 'Avvisami',
    notifyAria: (name) => `Avvisami quando ${name} sarà disponibile`,
    products: [
      { name: 'Tazza Aurora', category: 'merch' },
      { name: 'Tazza Renna', category: 'merch' },
      { name: 'T-shirt Aurora', category: 'merch' },
      { name: 'Felpa Artica', category: 'merch' },
      { name: 'Poster Lapponia', category: 'merch' },
      { name: 'Berretto in lana', category: 'merch' },
      { name: 'Coltello Puukko', category: 'artisan' },
      { name: 'Kuksa', category: 'artisan' },
      { name: 'Bracciale sami', category: 'artisan' },
      { name: 'Set marmellate di bacche', category: 'artisan' },
      { name: 'Portacandele in corno', category: 'artisan' },
      { name: 'Coperta in lana', category: 'artisan' },
    ],
    catMerch: 'articoli a marchio',
    catArtisan: 'artigianato',
  },
  giftGuide: {
    h2: 'Guida ai regali',
    sub: 'Non sa cosa scegliere? La aiutiamo a trovare il regalo perfetto per ogni occasione',
    suggested: 'Regali consigliati',
    occasions: [
      {
        name: 'Natale',
        description: "Niente dice Natale come un regalo dalla terra di Babbo Natale. Scelga tra le nostre selezioni natalizie curate.",
        suggestions: ['Cesto regalo "Lapponia Luxury"', 'Coperta in lana di Lapponia', 'Set marmellata di camemoro', 'Pantofole in feltro'],
      },
      {
        name: 'Matrimonio',
        description: "Celebri l'amore con pezzi artigianali senza tempo che gli sposi conserveranno per anni.",
        suggestions: ['Pendente aurora boreale', 'Kuksa in legno (coppia)', 'Portafogli in pelle di renna', 'Cestino in corteccia di betulla'],
      },
      {
        name: 'Compleanno',
        description: "Sorprenda una persona speciale con un regalo unico, introvabile nei negozi comuni.",
        suggestions: ['Bracciale duodji sami', 'Puukko', 'Cesto regalo "Sapore artico"', 'Portacandele in corno di renna'],
      },
      {
        name: 'Aziendale',
        description: 'Lasci il segno su clienti e partner con regali artici premium che si distinguono dai soliti omaggi aziendali.',
        suggestions: ['Puukko (incisione)', 'Cesto regalo "Lapponia Luxury"', 'Kuksa in legno', 'Pendente aurora boreale'],
      },
    ],
  },
  guides: {
    kicker: 'Guide gratuite',
    h2: 'Guide artiche',
    sub: "Tutto ciò che sappiamo sulla Lapponia, racchiuso in due guide gratuite. Lasci la Sua e-mail qui sotto e scarichi subito.",
    guides: [
      {
        title: "L'artigianato segreto",
        subtitle: "La guida dell'esperto all'autentico artigianato lappone",
        description: "Impari a riconoscere i veri coltelli puukko fatti a mano dalle imitazioni industriali, comprenda il significato culturale del duodji sami, scopra le stagioni delle bacche selvatiche e padroneggi le 5 regole d'oro per acquistare autentico artigianato lappone.",
        topics: ['Coltelli puukko', 'Kuksa', 'Duodji sami', 'Bacche selvatiche', "Regole d'acquisto"],
        pages: 9,
      },
      {
        title: '7 giorni di magia in Lapponia',
        subtitle: 'L\'unico itinerario di cui avrà bisogno',
        description: 'Un percorso completo giorno per giorno da Rovaniemi a Inari e ritorno. Include consigli per l\'aurora boreale, safari con husky, crociere rompighiaccio, pianificatore di budget realistico e una lista bagagli artica completa.',
        topics: ['Itinerario 7 giorni', 'Pianificatore di budget', 'Lista bagagli', 'Guida stagionale', 'Consigli locali'],
        pages: 13,
      },
    ],
    pagesPdf: (pages) => `${pages} pagine · PDF`,
    cta: 'Inserisca la Sua e-mail per ricevere entrambe le guide gratis',
  },
  newsletter: {
    kicker: 'Entrambe le guide in omaggio',
    h2: 'Inserisca la Sua e-mail per scaricare',
    body: 'Accesso immediato a entrambe le guide artiche, più le notifiche in anteprima quando nuovi prodotti e creazioni artigianali arrivano in negozio.',
    placeholder: 'tua@email.com',
    submit: 'Ricevi entrambe le guide',
    submitting: 'Invio in corso…',
    successHeading: 'Le Sue guide sono pronte!',
    successFootnote: 'Benvenuto/a nella famiglia artica. Controlli anche la Sua casella di posta!',
    btnSecret: "L'artigianato segreto",
    btnSeven: '7 giorni di magia',
    errorMsg: 'Qualcosa è andato storto. Riprovi, per favore.',
    spamNote: 'Niente spam, mai. Si disiscriva quando vuole.',
  },
  shipping: {
    h2: 'I nostri impegni',
    sub: 'Cosa può aspettarsi quando acquista su LaplandGifts',
    items: [
      { title: 'Direttamente dalla Lapponia', description: 'Ogni prodotto viene spedito dalla Finlandia o dai nostri partner di stampa nell\'UE. Niente intermediari, niente magazzini misteriosi.' },
      { title: 'Garanzia di autenticità', description: "I prodotti artigianali sono accompagnati da un certificato d'origine. L'artigianato sami è acquistato solo tramite venditori autorizzati." },
      { title: 'Confezione pronta da regalare', description: 'Ogni ordine viene confezionato con cura in imballaggi riciclabili ispirati alla natura artica. Aggiunga un messaggio personale al checkout.' },
      { title: 'Sosteniamo gli artigiani', description: "Una parte di ogni vendita di prodotto artigianale torna direttamente all'artigiano e alla sua comunità." },
    ],
  },
  footer: {
    pillars: [
      { name: 'Categorie', href: '/#categories' },
      { name: 'Prodotti in evidenza', href: '/#products' },
      { name: 'Guida ai regali', href: '/#gift-guide' },
      { name: 'Guide gratuite', href: '/#guides' },
      { name: 'LaplandStays', href: 'https://laplandstays.com' },
      { name: 'LaplandActivities', href: 'https://laplandactivities.online' },
    ],
    editorialNote: 'Gestito in modo indipendente da Lapeso Oy in Lapponia finlandese · ultima revisione maggio 2026 · collaboriamo direttamente con artigiani e negozi selezionati, con piena trasparenza in ogni scheda prodotto.',
    extraLegalUnsub: 'Disiscriviti',
  },
  notFound: {
    h1: 'Pagina non trovata',
    body: 'Questa pagina non esiste. Forse l\'aurora boreale l\'ha portata altrove.',
    back: 'Torna alla home',
  },
  unsubscribe: {
    title: 'Disiscrizione | LaplandGifts',
    h1: 'Disiscriviti',
    body: 'Inserisca il Suo indirizzo e-mail per rimuoversi dalla lista della newsletter.',
    successH1: 'Disiscrizione completata',
    successBody: 'Non riceverà più nostre e-mail. Ci dispiace vederLa andare via.',
    submit: 'Disiscriviti',
    submitting: 'Disiscrizione…',
    backHome: 'Torna alla home',
    errorMsg: 'Qualcosa è andato storto. Riprovi o scriva a info@laplandvibes.com',
  },
  legal: {
    backHome: 'Torna alla home',
  },
}

// ---------- NL (Nederlands, beleefdheidsvorm "u") ----------

const nl: ChromeCopy = {
  nav: {
    categories: 'Categorieën',
    products: 'Producten',
    guides: 'Gidsen',
    promises: 'Beloften',
  },
  hero: {
    kicker: 'Vanuit het hart van Fins Lapland',
    title: 'Geef een stukje',
    titleAccent: 'Arctis',
    lead: 'Bestel authentieke cadeaus uit Lapland tijdens uw vakantie — ze staan thuis op u te wachten voordat u terug bent. Handgemaakte schatten, eigen merk-artikelen en arctische ervaringen, rechtstreeks verzonden vanuit Fins Lapland.',
    ctaExplore: 'Bekijk cadeaus',
    ctaGuide: 'Cadeaugids',
  },
  categories: {
    h2: 'Drie manieren om Lapland cadeau te doen',
    sub: 'Of het nu een mok met logo is, een handgesneden kuksa of een noorderlicht-safari — wij hebben het perfecte arctische cadeau',
    items: [
      {
        name: '#LaplandVibes Artikelen',
        tag: 'Eigen merk',
        description: 'Mokken, t-shirts, hoodies en canvasprints met onze kenmerkende arctische ontwerpen. Print-on-demand — geen voorraad, wereldwijde verzending.',
      },
      {
        name: 'Ambachtelijk werk',
        tag: 'Handgemaakt',
        description: 'Handgesmede puukko-messen, gesneden kuksa-bekers, Sami duodji-sieraden en wilde-bessenjam — rechtstreeks van Laplandse ambachtslieden.',
      },
      {
        name: 'Ervaringen en cadeaubonnen',
        tag: 'Cadeau-ideeën',
        description: 'Noorderlicht-safari\'s, rendierslederitten, gezellige hutten en onze samengestelde Lapland Trip Boxes — geef een onvergetelijk arctisch moment cadeau.',
      },
    ],
  },
  valueProp: {
    h2: 'Bestel op vakantie. Vind ze thuis.',
    sub: 'Geen broze souvenirs meer die in de koffer moeten. Shop tijdens uw reis, wij regelen de rest.',
    steps: [
      { title: 'Snuffel op vakantie', description: 'Een puukko gevonden waar u verliefd op bent? Een kuksa voor moeder? Bestel tijdens het verkennen — u hoeft niets mee te dragen.' },
      { title: 'Wij verzenden uit Lapland', description: 'Uw cadeaus worden zorgvuldig ingepakt en rechtstreeks verzonden door Finse ambachtslieden en onze EU-printpartners.' },
      { title: 'Wachten thuis op u', description: 'U landt thuis en uw Laplandse schatten staan al voor de deur. Geen bagagestress, geen kapotte souvenirs.' },
    ],
  },
  productGrid: {
    h2: 'Binnenkort beschikbaar',
    sub: 'Onze eerste collectie wordt zorgvuldig geselecteerd bij de beste ambachtslieden in Fins Lapland. Schrijf u in voor de nieuwsbrief om als eerste op de hoogte te zijn.',
    priceTbd: 'Prijs volgt',
    notifyMe: 'Houd mij op de hoogte',
    notifyAria: (name) => `Laat het mij weten zodra ${name} beschikbaar is`,
    products: [
      { name: 'Noorderlicht-mok', category: 'merch' },
      { name: 'Rendier-mok', category: 'merch' },
      { name: 'Noorderlicht t-shirt', category: 'merch' },
      { name: 'Arctische hoodie', category: 'merch' },
      { name: 'Lapland-poster', category: 'merch' },
      { name: 'Wollen muts', category: 'merch' },
      { name: 'Puukko-mes', category: 'artisan' },
      { name: 'Kuksa-beker', category: 'artisan' },
      { name: 'Sami-armband', category: 'artisan' },
      { name: 'Bessenjam-set', category: 'artisan' },
      { name: 'Kandelaar van gewei', category: 'artisan' },
      { name: 'Wollen deken', category: 'artisan' },
    ],
    catMerch: 'merchandise',
    catArtisan: 'ambacht',
  },
  giftGuide: {
    h2: 'Cadeaugids',
    sub: 'Geen idee wat u moet kiezen? Wij helpen u het perfecte cadeau te vinden voor elke gelegenheid',
    suggested: 'Voorgestelde cadeaus',
    occasions: [
      {
        name: 'Kerst',
        description: "Niets zegt Kerst zoals een cadeau uit het thuisland van de Kerstman. Kies uit onze zorgvuldig samengestelde feestselecties.",
        suggestions: ['Cadeaumand "Lapland Luxury"', 'Wollen deken uit Lapland', 'Set kruipbraamjam', 'Vilten pantoffels'],
      },
      {
        name: 'Bruiloft',
        description: 'Vier de liefde met tijdloze, handgemaakte stukken die het paar jarenlang zal koesteren.',
        suggestions: ['Noorderlicht-hanger', 'Houten kuksa-beker (paar)', 'Portemonnee van rendierleer', 'Mandje van berkenbast'],
      },
      {
        name: 'Verjaardag',
        description: 'Verras iemand met een uniek cadeau dat u nooit in een gewone winkel vindt.',
        suggestions: ['Sami duodji-armband', 'Puukko-mes', 'Cadeaumand "Arctic Taste"', 'Kandelaar van rendiergewei'],
      },
      {
        name: 'Zakelijk',
        description: 'Maak indruk op klanten en partners met arctische premium-cadeaus die opvallen tussen de gebruikelijke zakelijke geschenken.',
        suggestions: ['Puukko-mes (gegraveerd)', 'Cadeaumand "Lapland Luxury"', 'Houten kuksa-beker', 'Noorderlicht-hanger'],
      },
    ],
  },
  guides: {
    kicker: 'Gratis gidsen',
    h2: 'Arctische gidsen',
    sub: 'Alles wat wij over Lapland weten, samengebracht in twee gratis gidsen. Laat hieronder uw e-mailadres achter en download ze meteen.',
    guides: [
      {
        title: 'Het geheime ambacht',
        subtitle: 'Een insidergids voor authentiek Laplands vakmanschap',
        description: 'Leer echte handgemaakte puukko-messen onderscheiden van fabriekskopieën, begrijp de culturele betekenis van Sami duodji, ontdek de seizoenen van wilde bessen en beheers de 5 gouden regels voor het kopen van echt Laplands ambacht.',
        topics: ['Puukko-messen', 'Kuksa-bekers', 'Sami duodji', 'Wilde bessen', 'Kopersregels'],
        pages: 9,
      },
      {
        title: '7 dagen Lapland-magie',
        subtitle: 'De enige reisplanning die u ooit nodig zult hebben',
        description: 'Een complete dag-tot-dag route van Rovaniemi naar Inari en terug. Inclusief tips voor het noorderlicht, husky-safari\'s, ijsbrekercruises, realistische budgetplanner en een volledige arctische paklijst.',
        topics: ['7-daagse route', 'Budgetplanner', 'Paklijst', 'Seizoensgids', 'Lokale tips'],
        pages: 13,
      },
    ],
    pagesPdf: (pages) => `${pages} pagina's · PDF`,
    cta: 'Vul uw e-mail in en ontvang beide gidsen gratis',
  },
  newsletter: {
    kicker: 'Beide gidsen gratis',
    h2: 'Vul uw e-mail in om te downloaden',
    body: 'Direct toegang tot beide arctische gidsen, plus vroegtijdige meldingen wanneer nieuwe producten en ambachtelijke creaties in de winkel verschijnen.',
    placeholder: 'uw@email.com',
    submit: 'Ontvang beide gidsen',
    submitting: 'Versturen…',
    successHeading: 'Uw gidsen staan klaar!',
    successFootnote: 'Welkom bij de arctische familie. Controleer ook uw inbox!',
    btnSecret: 'Het geheime ambacht',
    btnSeven: '7 dagen magie',
    errorMsg: 'Er ging iets mis. Probeer het opnieuw.',
    spamNote: 'Nooit spam. Op elk moment uit te schrijven.',
  },
  shipping: {
    h2: 'Onze beloften',
    sub: 'Wat u mag verwachten als u bij LaplandGifts winkelt',
    items: [
      { title: 'Rechtstreeks uit Lapland', description: 'Elk product wordt verzonden vanuit Finland of via onze EU-printpartners. Geen tussenhandel, geen mysterieuze magazijnen.' },
      { title: 'Authenticiteitsgarantie', description: 'Ambachtelijke producten worden geleverd met een certificaat van oorsprong. Sami-ambacht wordt alleen via erkende verkopers ingekocht.' },
      { title: 'Cadeauklaar verpakt', description: 'Elke bestelling wordt met zorg verpakt in recyclebaar materiaal geïnspireerd op de arctische natuur. Voeg bij het afrekenen een persoonlijke boodschap toe.' },
      { title: 'Wij steunen ambachtslieden', description: 'Een deel van elke verkoop van een ambachtelijk product gaat direct terug naar de maker en zijn gemeenschap.' },
    ],
  },
  footer: {
    pillars: [
      { name: 'Categorieën', href: '/#categories' },
      { name: 'Uitgelichte producten', href: '/#products' },
      { name: 'Cadeaugids', href: '/#gift-guide' },
      { name: 'Gratis gidsen', href: '/#guides' },
      { name: 'LaplandStays', href: 'https://laplandstays.com' },
      { name: 'LaplandActivities', href: 'https://laplandactivities.online' },
    ],
    editorialNote: 'Onafhankelijk beheerd door Lapeso Oy in Fins Lapland · laatst beoordeeld in mei 2026 · wij werken rechtstreeks samen met geselecteerde ambachtslieden en winkels, met volledige openheid op elke productpagina.',
    extraLegalUnsub: 'Uitschrijven',
  },
  notFound: {
    h1: 'Pagina niet gevonden',
    body: 'Deze pagina bestaat niet. Misschien heeft het noorderlicht hem ergens anders mee naartoe genomen.',
    back: 'Terug naar home',
  },
  unsubscribe: {
    title: 'Uitschrijven | LaplandGifts',
    h1: 'Uitschrijven',
    body: 'Vul uw e-mailadres in om u af te melden van onze nieuwsbrief.',
    successH1: 'U bent uitgeschreven',
    successBody: 'U ontvangt geen e-mails meer van ons. We vinden het jammer u te zien gaan.',
    submit: 'Uitschrijven',
    submitting: 'Uitschrijven…',
    backHome: 'Terug naar home',
    errorMsg: 'Er ging iets mis. Probeer het opnieuw of mail naar info@laplandvibes.com',
  },
  legal: {
    backHome: 'Terug naar home',
  },
}

// ---------- exports ----------

export const COPY: Record<Lang, ChromeCopy> = { en, fi, de, ja, es, 'pt-BR': ptBR, 'zh-CN': zhCN, ko, fr, it, nl }

/** Build the FooterDict the shared <Footer> component expects, in the given lang. */
export function footerDict(lang: Lang) {
  if (lang === 'en') {
    return {
      networkBadge: 'Finnish Lapland Network',
      tagline: 'The definitive digital home for Finnish Lapland travel.',
      groups: { stay: 'Stay', eatDrink: 'Eat & Drink', do: 'Do', explore: 'Explore', essentials: 'Essentials' },
      travelGuideKicker: 'Lapland Travel Guide',
      about: {
        eyebrow: 'About LaplandVibes',
        body: 'The definitive guide to Finnish Lapland — from the revontulet to the midnight sun. Curated experiences, insider tips, and the practical basics for your Arctic trip.',
        badge: 'Independently maintained · sources cited',
      },
      spottedError: { title: 'Spotted an Error?', body: "See something that needs fixing? Tell us — we'll correct it immediately.", cta: 'Report an Error →' },
      partner: { title: 'Partner With Us', body: 'Advertise or collaborate across 27 Lapland sites.', cta: 'Get in Touch →' },
      press: { title: 'Press & Media', body: 'Editorial partnerships and press kits.', cta: 'Press Enquiries →' },
      affiliate: 'This site contains affiliate links. If you book through these links, LaplandVibes may receive a commission at no extra cost to you.',
      copyright: '© {{year}} #LaplandVibes — Part of the #LaplandVibes Network',
      websiteBy: 'Website by Yrityspaketit.fi',
      legal: { privacy: 'Privacy Policy', cookie: 'Cookie Policy', terms: 'Terms of Use', contact: 'Contact' },
      siteLabels: {
        hotelDeals: 'Hotel Deals',
        staysCabins: 'Stays & Hutten',
        whereToStay: 'Where to Stay',
        familyFriendly: 'Family Friendly',
        localFood: 'Local Food',
        fineDining: 'Fine Dining',
        barsPubs: 'Bars & Pubs',
        activities: 'Activities',
        huskySafaris: 'Husky Safaris',
        skiResorts: 'Ski Resorts',
        snowmobileTours: 'Snowmobile Tours',
        spaWellness: 'Spa & Wellness',
        nightlife: 'Nightlife',
        natureParks: 'Nature & Parks',
        travelGuide: 'Travel Guide',
        christmas: 'Christmas in Lapland',
        giftsSouvenirs: 'Gifts & Souvenirs',
        travelBlog: 'Travel Blog',
        dealsOffers: 'Deals & Offers',
        transport: 'Transport',
        carRental: 'Car Rental',
        workInLapland: 'Work in Lapland',
      },
    }
  }
  if (lang === 'de') {
    return {
      networkBadge: 'Finnisch-Lappland-Netzwerk',
      tagline: 'Das umfassende digitale Zuhause für Reisen in finnisch Lappland.',
      groups: { stay: 'Unterkunft', eatDrink: 'Essen & Trinken', do: 'Aktivitäten', explore: 'Entdecken', essentials: 'Wesentliches' },
      travelGuideKicker: 'Lappland-Reiseführer',
      about: {
        eyebrow: 'Über LaplandVibes',
        body: 'Der umfassende Reiseführer zu finnisch Lappland — von den Nordlichtern bis zur Mitternachtssonne. Kuratierte Erlebnisse, Insider-Tipps und alles, was Sie für die Planung Ihres arktischen Abenteuers brauchen.',
        badge: 'Unabhängig gepflegt · Quellen zitiert',
      },
      spottedError: { title: 'Fehler entdeckt?', body: 'Sehen Sie etwas, das korrigiert werden muss? Sagen Sie uns Bescheid — wir korrigieren es sofort.', cta: 'Fehler melden →' },
      partner: { title: 'Mit uns kooperieren', body: 'Werbung oder Zusammenarbeit über 27 Lappland-Websites hinweg.', cta: 'Kontakt aufnehmen →' },
      press: { title: 'Presse & Medien', body: 'Redaktionelle Partnerschaften und Pressemappen.', cta: 'Presseanfragen →' },
      affiliate: 'Diese Website enthält Partnerlinks. Wenn Sie über diese Links buchen, erhält LaplandVibes möglicherweise eine Provision ohne Mehrkosten für Sie.',
      copyright: '© {{year}} #LaplandVibes — Teil des #LaplandVibes-Netzwerks',
      websiteBy: 'Website von Yrityspaketit.fi',
      legal: { privacy: 'Datenschutz', cookie: 'Cookie-Richtlinie', terms: 'Nutzungsbedingungen', contact: 'Kontakt' },
      siteLabels: {
        hotelDeals: 'Hotelangebote',
        staysCabins: 'Unterkünfte & Hütten',
        whereToStay: 'Wo übernachten',
        familyFriendly: 'Familienfreundlich',
        localFood: 'Lokale Küche',
        fineDining: 'Gehobene Küche',
        barsPubs: 'Bars & Pubs',
        activities: 'Aktivitäten',
        huskySafaris: 'Husky-Safaris',
        skiResorts: 'Skigebiete',
        snowmobileTours: 'Schneemobil-Touren',
        spaWellness: 'Spa & Wellness',
        nightlife: 'Nachtleben',
        natureParks: 'Natur & Parks',
        travelGuide: 'Reiseführer',
        christmas: 'Weihnachten in Lappland',
        giftsSouvenirs: 'Geschenke & Souvenirs',
        travelBlog: 'Reiseblog',
        dealsOffers: 'Angebote',
        transport: 'Transport',
        carRental: 'Mietwagen',
        workInLapland: 'Arbeiten in Lappland',
      },
    }
  }
  if (lang === 'ja') {
    return {
      networkBadge: 'フィンランド・ラップランドのネットワーク',
      tagline: 'フィンランド・ラップランド旅行の決定版デジタルガイド。',
      groups: { stay: '泊まる', eatDrink: '食事と飲み物', do: 'アクティビティ', explore: '探検する', essentials: '基本情報' },
      travelGuideKicker: 'ラップランド旅行ガイド',
      about: {
        eyebrow: 'LaplandVibesについて',
        body: 'フィンランド・ラップランドの決定版ガイド — オーロラから白夜まで。厳選された体験、インサイダーの情報、北極の冒険を計画するために必要なすべて。',
        badge: '独立運営 · 出典明記',
      },
      spottedError: { title: '誤りを見つけた場合', body: '修正が必要なものに気づきましたか?ご連絡ください — すぐに修正いたします。', cta: '誤りを報告 →' },
      partner: { title: 'パートナーシップ', body: '21以上のラップランド関連サイトでの広告や提携。', cta: 'お問い合わせ →' },
      press: { title: 'プレス・メディア', body: '編集パートナーシップとプレスキット。', cta: 'プレスのお問い合わせ →' },
      affiliate: 'このサイトにはアフィリエイトリンクが含まれます。リンク経由でご予約いただいた場合、追加費用なしでLaplandVibesに手数料が支払われることがあります。',
      copyright: '© {{year}} #LaplandVibes — #LaplandVibesネットワークの一部',
      websiteBy: 'ウェブサイト制作: Yrityspaketit.fi',
      legal: { privacy: 'プライバシーポリシー', cookie: 'クッキーポリシー', terms: '利用規約', contact: 'お問い合わせ' },
      siteLabels: {
        hotelDeals: 'ホテルのお得な情報',
        staysCabins: '宿泊施設とコテージ',
        whereToStay: '宿泊場所',
        familyFriendly: '家族向け',
        localFood: '地元の料理',
        fineDining: 'ファインダイニング',
        barsPubs: 'バーとパブ',
        activities: 'アクティビティ',
        huskySafaris: 'ハスキーサファリ',
        skiResorts: 'スキーリゾート',
        snowmobileTours: 'スノーモービルツアー',
        spaWellness: 'スパとウェルネス',
        nightlife: 'ナイトライフ',
        natureParks: '自然と国立公園',
        travelGuide: '旅行ガイド',
        christmas: 'ラップランドのクリスマス',
        giftsSouvenirs: 'ギフトとお土産',
        travelBlog: '旅行ブログ',
        dealsOffers: 'お得な情報',
        transport: '交通',
        carRental: 'レンタカー',
        workInLapland: 'ラップランドで働く',
      },
    }
  }
  if (lang === 'es') {
    return {
      networkBadge: 'Red de la Laponia finlandesa',
      tagline: 'La guía digital definitiva para viajar por la Laponia finlandesa.',
      groups: { stay: 'Dormir', eatDrink: 'Comer y beber', do: 'Hacer', explore: 'Explorar', essentials: 'Esenciales' },
      travelGuideKicker: 'Guía de viajes de Laponia',
      about: {
        eyebrow: 'Sobre LaplandVibes',
        body: 'La guía definitiva de la Laponia finlandesa — desde las auroras boreales hasta el sol de medianoche. Experiencias seleccionadas, consejos de iniciado y todo lo que necesita para planear su aventura ártica.',
        badge: 'Mantenido de forma independiente · fuentes citadas',
      },
      spottedError: { title: '¿Vio un error?', body: '¿Algo que haya que corregir? Avísenos — lo corregiremos enseguida.', cta: 'Reportar un error →' },
      partner: { title: 'Colabore con nosotros', body: 'Anuncie o colabore en 27 sitios sobre Laponia.', cta: 'Contactar →' },
      press: { title: 'Prensa y medios', body: 'Colaboraciones editoriales y kits de prensa.', cta: 'Consultas de prensa →' },
      affiliate: 'Este sitio contiene enlaces de afiliados. Si usted reserva a través de estos enlaces, LaplandVibes puede recibir una comisión sin coste adicional para usted.',
      copyright: '© {{year}} #LaplandVibes — Parte de la red #LaplandVibes',
      websiteBy: 'Sitio web de Yrityspaketit.fi',
      legal: { privacy: 'Política de privacidad', cookie: 'Política de cookies', terms: 'Términos de uso', contact: 'Contacto' },
      siteLabels: {
        hotelDeals: 'Ofertas de hoteles',
        staysCabins: 'Alojamientos y cabañas',
        whereToStay: 'Dónde alojarse',
        familyFriendly: 'En familia',
        localFood: 'Cocina local',
        fineDining: 'Alta cocina',
        barsPubs: 'Bares y pubs',
        activities: 'Actividades',
        huskySafaris: 'Safaris en husky',
        skiResorts: 'Estaciones de esquí',
        snowmobileTours: 'Tours en motonieve',
        spaWellness: 'Spa y bienestar',
        nightlife: 'Vida nocturna',
        natureParks: 'Naturaleza y parques',
        travelGuide: 'Guía de viaje',
        christmas: 'Navidad en Laponia',
        giftsSouvenirs: 'Regalos y recuerdos',
        travelBlog: 'Blog de viajes',
        dealsOffers: 'Ofertas',
        transport: 'Transporte',
        carRental: 'Alquiler de coches',
        workInLapland: 'Trabajar en Laponia',
      },
    }
  }
  if (lang === 'pt-BR') {
    return {
      networkBadge: 'Rede da Lapônia finlandesa',
      tagline: 'O guia digital definitivo para viajar pela Lapônia finlandesa.',
      groups: { stay: 'Hospedagem', eatDrink: 'Comer e beber', do: 'O que fazer', explore: 'Explorar', essentials: 'Essenciais' },
      travelGuideKicker: 'Guia de viagem da Lapônia',
      about: {
        eyebrow: 'Sobre o LaplandVibes',
        body: 'O guia definitivo da Lapônia finlandesa — da aurora boreal ao sol da meia-noite. Experiências selecionadas, dicas de quem conhece e o básico para sua viagem ao Ártico.',
        badge: 'Mantido de forma independente · fontes citadas',
      },
      spottedError: { title: 'Viu um erro?', body: 'Algo que precisa ser corrigido? Conte para a gente — corrigimos na hora.', cta: 'Reportar um erro →' },
      partner: { title: 'Parceria com a gente', body: 'Anuncie ou colabore em 27 sites sobre a Lapônia.', cta: 'Entrar em contato →' },
      press: { title: 'Imprensa e mídia', body: 'Parcerias editoriais e kits de imprensa.', cta: 'Contato de imprensa →' },
      affiliate: 'Este site contém links de afiliados. Se você reservar por meio destes links, o LaplandVibes pode receber uma comissão sem custo adicional para você.',
      copyright: '© {{year}} #LaplandVibes — Parte da rede #LaplandVibes',
      websiteBy: 'Site por Yrityspaketit.fi',
      legal: { privacy: 'Política de privacidade', cookie: 'Política de cookies', terms: 'Termos de uso', contact: 'Contato' },
      siteLabels: {
        hotelDeals: 'Ofertas de hotéis',
        staysCabins: 'Hospedagens e cabanas',
        whereToStay: 'Onde ficar',
        familyFriendly: 'Para famílias',
        localFood: 'Cozinha local',
        fineDining: 'Alta gastronomia',
        barsPubs: 'Bares e pubs',
        activities: 'Atividades',
        huskySafaris: 'Safáris com huskies',
        skiResorts: 'Estações de esqui',
        snowmobileTours: 'Passeios de snowmobile',
        spaWellness: 'Spa e bem-estar',
        nightlife: 'Vida noturna',
        natureParks: 'Natureza e parques',
        travelGuide: 'Guia de viagem',
        christmas: 'Natal na Lapônia',
        giftsSouvenirs: 'Presentes e lembranças',
        travelBlog: 'Blog de viagem',
        dealsOffers: 'Ofertas',
        transport: 'Transporte',
        carRental: 'Aluguel de carros',
        workInLapland: 'Trabalhar na Lapônia',
      },
    }
  }
  if (lang === 'zh-CN') {
    return {
      networkBadge: '芬兰拉普兰网络',
      tagline: '芬兰拉普兰旅游的权威数字指南。',
      groups: { stay: '住宿', eatDrink: '餐饮', do: '体验', explore: '探索', essentials: '实用信息' },
      travelGuideKicker: '拉普兰旅游指南',
      about: {
        eyebrow: '关于 LaplandVibes',
        body: '芬兰拉普兰的权威指南 — 从北极光到午夜阳光。精选体验、内行贴士,以及规划北极之旅所需的一切。',
        badge: '独立运营 · 注明出处',
      },
      spottedError: { title: '发现错误?', body: '看到需要修正的内容?请告诉我们 — 我们会立即更正。', cta: '报告错误 →' },
      partner: { title: '合作机会', body: '在超过27个拉普兰相关网站上投放广告或开展合作。', cta: '联系我们 →' },
      press: { title: '媒体与新闻', body: '编辑合作与媒体资料包。', cta: '媒体咨询 →' },
      affiliate: '本网站包含联盟链接。如您通过这些链接预订,LaplandVibes 可能会获得佣金,您无需支付额外费用。',
      copyright: '© {{year}} #LaplandVibes — #LaplandVibes 网络的一部分',
      websiteBy: '网站制作:Yrityspaketit.fi',
      legal: { privacy: '隐私政策', cookie: 'Cookie 政策', terms: '使用条款', contact: '联系方式' },
      siteLabels: {
        hotelDeals: '酒店优惠',
        staysCabins: '住宿与小屋',
        whereToStay: '住宿选择',
        familyFriendly: '亲子游',
        localFood: '当地美食',
        fineDining: '精致餐饮',
        barsPubs: '酒吧',
        activities: '活动',
        huskySafaris: '哈士奇雪橇之旅',
        skiResorts: '滑雪胜地',
        snowmobileTours: '雪地摩托之旅',
        spaWellness: '水疗与养生',
        nightlife: '夜生活',
        natureParks: '自然与国家公园',
        travelGuide: '旅行指南',
        christmas: '拉普兰圣诞',
        giftsSouvenirs: '礼物与纪念品',
        travelBlog: '旅行博客',
        dealsOffers: '优惠',
        transport: '交通',
        carRental: '汽车租赁',
        workInLapland: '在拉普兰工作',
      },
    }
  }
  if (lang === 'ko') {
    return {
      networkBadge: '핀란드 라플란드 네트워크',
      tagline: '핀란드 라플란드 여행의 결정판 디지털 가이드.',
      groups: { stay: '숙박', eatDrink: '식음료', do: '액티비티', explore: '탐험', essentials: '필수 정보' },
      travelGuideKicker: '라플란드 여행 가이드',
      about: {
        eyebrow: 'LaplandVibes 소개',
        body: '핀란드 라플란드의 결정판 가이드 — 오로라부터 백야까지. 엄선된 경험, 현지인 팁, 북극 모험을 계획하는 데 필요한 모든 것.',
        badge: '독립 운영 · 출처 명시',
      },
      spottedError: { title: '오류를 발견하셨나요?', body: '수정이 필요한 부분을 보셨나요? 알려주세요 — 즉시 수정하겠습니다.', cta: '오류 신고 →' },
      partner: { title: '파트너십', body: '21개 이상의 라플란드 관련 사이트에서 광고와 협업.', cta: '문의하기 →' },
      press: { title: '언론 및 미디어', body: '편집 파트너십 및 보도자료 키트.', cta: '언론 문의 →' },
      affiliate: '이 사이트에는 제휴 링크가 포함되어 있습니다. 이 링크를 통해 예약하시면 추가 비용 없이 LaplandVibes가 수수료를 받을 수 있습니다.',
      copyright: '© {{year}} #LaplandVibes — #LaplandVibes 네트워크의 일부',
      websiteBy: '웹사이트 제작: Yrityspaketit.fi',
      legal: { privacy: '개인정보처리방침', cookie: '쿠키 정책', terms: '이용약관', contact: '연락처' },
      siteLabels: {
        hotelDeals: '호텔 특가',
        staysCabins: '숙소와 캐빈',
        whereToStay: '숙소 찾기',
        familyFriendly: '가족 여행',
        localFood: '현지 음식',
        fineDining: '파인 다이닝',
        barsPubs: '바와 펍',
        activities: '액티비티',
        huskySafaris: '허스키 사파리',
        skiResorts: '스키 리조트',
        snowmobileTours: '스노모빌 투어',
        spaWellness: '스파와 웰니스',
        nightlife: '나이트라이프',
        natureParks: '자연과 국립공원',
        travelGuide: '여행 가이드',
        christmas: '라플란드의 크리스마스',
        giftsSouvenirs: '선물과 기념품',
        travelBlog: '여행 블로그',
        dealsOffers: '특가와 프로모션',
        transport: '교통',
        carRental: '렌터카',
        workInLapland: '라플란드에서 일하기',
      },
    }
  }
  if (lang === 'fr') {
    return {
      networkBadge: 'Réseau Laponie finlandaise',
      tagline: 'Le guide numérique de référence pour voyager en Laponie finlandaise.',
      groups: { stay: 'Dormir', eatDrink: 'Manger & boire', do: 'À faire', explore: 'Explorer', essentials: 'Essentiels' },
      travelGuideKicker: 'Guide de voyage en Laponie',
      about: {
        eyebrow: 'À propos de LaplandVibes',
        body: "Le guide de référence sur la Laponie finlandaise — de l'aurore boréale au soleil de minuit. Expériences sélectionnées, conseils d'initiés et tout ce qu'il faut pour préparer votre aventure arctique.",
        badge: 'Édité de façon indépendante · sources citées',
      },
      spottedError: { title: 'Vous avez repéré une erreur ?', body: "Quelque chose à corriger ? Dites-le-nous — nous rectifions immédiatement.", cta: 'Signaler une erreur →' },
      partner: { title: 'Travailler avec nous', body: 'Publicité ou collaborations sur 27 sites consacrés à la Laponie.', cta: 'Nous contacter →' },
      press: { title: 'Presse et médias', body: 'Partenariats éditoriaux et kits presse.', cta: 'Demandes presse →' },
      affiliate: "Ce site contient des liens d'affiliation. Si vous réservez via ces liens, LaplandVibes peut recevoir une commission sans frais supplémentaires pour vous.",
      copyright: '© {{year}} #LaplandVibes — Membre du réseau #LaplandVibes',
      websiteBy: 'Site réalisé par Yrityspaketit.fi',
      legal: { privacy: 'Politique de confidentialité', cookie: 'Politique des cookies', terms: "Conditions d'utilisation", contact: 'Contact' },
      siteLabels: {
        hotelDeals: 'Offres hôtelières',
        staysCabins: 'Séjours et chalets',
        whereToStay: 'Où loger',
        familyFriendly: 'En famille',
        localFood: 'Cuisine locale',
        fineDining: 'Gastronomie',
        barsPubs: 'Bars et pubs',
        activities: 'Activités',
        huskySafaris: 'Safaris en huskies',
        skiResorts: 'Stations de ski',
        snowmobileTours: 'Sorties en motoneige',
        spaWellness: 'Spa et bien-être',
        nightlife: 'Vie nocturne',
        natureParks: 'Nature et parcs',
        travelGuide: 'Guide de voyage',
        christmas: 'Noël en Laponie',
        giftsSouvenirs: 'Cadeaux et souvenirs',
        travelBlog: 'Blog de voyage',
        dealsOffers: 'Offres et promotions',
        transport: 'Transport',
        carRental: 'Location de voiture',
        workInLapland: 'Travailler en Laponie',
      },
    }
  }
  if (lang === 'it') {
    return {
      networkBadge: 'Network Lapponia finlandese',
      tagline: 'La guida digitale di riferimento per viaggiare nella Lapponia finlandese.',
      groups: { stay: 'Dormire', eatDrink: 'Mangiare e bere', do: 'Da fare', explore: 'Esplorare', essentials: 'Essenziali' },
      travelGuideKicker: 'Guida di viaggio della Lapponia',
      about: {
        eyebrow: 'Su LaplandVibes',
        body: "La guida di riferimento sulla Lapponia finlandese — dall'aurora boreale al sole di mezzanotte. Esperienze selezionate, consigli da insider e tutto il necessario per pianificare la Sua avventura artica.",
        badge: 'Gestita in modo indipendente · fonti citate',
      },
      spottedError: { title: 'Ha visto un errore?', body: 'Qualcosa da correggere? Ce lo segnali — interveniamo subito.', cta: 'Segnala un errore →' },
      partner: { title: 'Collabori con noi', body: 'Pubblicità o collaborazioni su 27 siti dedicati alla Lapponia.', cta: 'Contatti →' },
      press: { title: 'Stampa e media', body: 'Collaborazioni editoriali e cartelle stampa.', cta: 'Richieste stampa →' },
      affiliate: 'Questo sito contiene link di affiliazione. Se prenota tramite questi link, LaplandVibes può ricevere una commissione senza costi aggiuntivi per Lei.',
      copyright: '© {{year}} #LaplandVibes — Parte del network #LaplandVibes',
      websiteBy: 'Sito realizzato da Yrityspaketit.fi',
      legal: { privacy: 'Privacy policy', cookie: 'Cookie policy', terms: "Condizioni d'uso", contact: 'Contatti' },
      siteLabels: {
        hotelDeals: 'Offerte hotel',
        staysCabins: 'Alloggi e chalet',
        whereToStay: 'Dove dormire',
        familyFriendly: 'In famiglia',
        localFood: 'Cucina locale',
        fineDining: 'Alta cucina',
        barsPubs: 'Bar e pub',
        activities: 'Attività',
        huskySafaris: 'Safari con i husky',
        skiResorts: 'Stazioni sciistiche',
        snowmobileTours: 'Tour in motoslitta',
        spaWellness: 'Spa e benessere',
        nightlife: 'Vita notturna',
        natureParks: 'Natura e parchi',
        travelGuide: 'Guida di viaggio',
        christmas: 'Natale in Lapponia',
        giftsSouvenirs: 'Regali e souvenir',
        travelBlog: 'Blog di viaggio',
        dealsOffers: 'Offerte e promozioni',
        transport: 'Trasporti',
        carRental: 'Autonoleggio',
        workInLapland: 'Lavorare in Lapponia',
      },
    }
  }
  if (lang === 'nl') {
    return {
      networkBadge: 'Fins-Lapland-netwerk',
      tagline: 'De toonaangevende digitale gids voor reizen door Fins Lapland.',
      groups: { stay: 'Verblijven', eatDrink: 'Eten & drinken', do: 'Te doen', explore: 'Verkennen', essentials: 'Essentieel' },
      travelGuideKicker: 'Lapland-reisgids',
      about: {
        eyebrow: 'Over LaplandVibes',
        body: 'De toonaangevende gids voor Fins Lapland — van het noorderlicht tot de middernachtszon. Geselecteerde ervaringen, insidertips en de praktische basis voor uw Arctische reis.',
        badge: 'Onafhankelijk beheerd · bronnen vermeld',
      },
      spottedError: { title: 'Een fout gezien?', body: 'Iets dat aangepast moet worden? Laat het ons weten — we corrigeren het meteen.', cta: 'Fout melden →' },
      partner: { title: 'Samenwerken met ons', body: 'Adverteer of werk samen op meer dan 21 Lapland-sites.', cta: 'Neem contact op →' },
      press: { title: 'Pers en media', body: 'Redactionele samenwerkingen en perskits.', cta: 'Persaanvragen →' },
      affiliate: 'Deze site bevat affiliate-links. Als u via deze links boekt, kan LaplandVibes een commissie ontvangen zonder extra kosten voor u.',
      copyright: '© {{year}} #LaplandVibes — Onderdeel van het #LaplandVibes-netwerk',
      websiteBy: 'Website door Yrityspaketit.fi',
      legal: { privacy: 'Privacybeleid', cookie: 'Cookiebeleid', terms: 'Gebruiksvoorwaarden', contact: 'Contact' },
      siteLabels: {
        hotelDeals: 'Hoteldeals',
        staysCabins: 'Verblijven en hutten',
        whereToStay: 'Waar te verblijven',
        familyFriendly: 'Gezinsvriendelijk',
        localFood: 'Lokale keuken',
        fineDining: 'Fine dining',
        barsPubs: 'Bars en pubs',
        activities: 'Activiteiten',
        huskySafaris: "Husky-safari's",
        skiResorts: 'Skigebieden',
        snowmobileTours: 'Sneeuwscootertochten',
        spaWellness: 'Spa en wellness',
        nightlife: 'Nachtleven',
        natureParks: 'Natuur en parken',
        travelGuide: 'Reisgids',
        christmas: 'Kerstmis in Lapland',
        giftsSouvenirs: 'Cadeaus en souvenirs',
        travelBlog: 'Reisblog',
        dealsOffers: 'Deals en aanbiedingen',
        transport: 'Vervoer',
        carRental: 'Autoverhuur',
        workInLapland: 'Werken in Lapland',
      },
    }
  }
  // fi
  return {
    networkBadge: 'Suomen Lapin verkosto',
    tagline: 'Suomen Lapin matkailun digitaalinen koti.',
    groups: { stay: 'Majoitu', eatDrink: 'Syö & juo', do: 'Tekemistä', explore: 'Tutki', essentials: 'Perustiedot' },
    travelGuideKicker: 'Lapin matkaopas',
    about: {
      eyebrow: 'Tietoa LaplandVibesistä',
      body: 'Suomen Lapin matkaopas — revontulista keskiyön aurinkoon. Käsin valittuja kohteita, käytännön vinkkejä ja avoimet lähteet.',
      badge: 'Riippumaton · lähteet näkyvillä',
    },
    spottedError: { title: 'Huomasitko virheen?', body: 'Näetkö jotain mikä pitäisi korjata? Kerro meille — korjaamme sen heti.', cta: 'Ilmoita virheestä →' },
    partner: { title: 'Yhteistyö kanssamme', body: 'Mainosta tai tee yhteistyötä yli 21 Lappi-sivustolla.', cta: 'Ota yhteyttä →' },
    press: { title: 'Media ja lehdistö', body: 'Toimitusyhteistyö ja lehdistömateriaalit.', cta: 'Lehdistöyhteydet →' },
    affiliate: 'Tämä sivusto sisältää kumppanuuslinkkejä. Kun varaat näiden kautta, LaplandVibes voi saada provision ilman lisäkustannuksia sinulle.',
    copyright: '© {{year}} #LaplandVibes — Osa #LaplandVibes-verkostoa',
    websiteBy: 'Sivuston toteutus: Yrityspaketit.fi',
    legal: { privacy: 'Tietosuojaseloste', cookie: 'Evästekäytäntö', terms: 'Käyttöehdot', contact: 'Yhteystiedot' },
    siteLabels: {
      hotelDeals: 'Hotellitarjoukset',
      staysCabins: 'Majoitukset ja mökit',
      whereToStay: 'Missä yöpyä',
      familyFriendly: 'Perheille',
      localFood: 'Paikallinen ruoka',
      fineDining: 'Hienot ravintolat',
      barsPubs: 'Baarit ja pubit',
      activities: 'Aktiviteetit',
      huskySafaris: 'Huskysafarit',
      skiResorts: 'Hiihtokeskukset',
      snowmobileTours: 'Moottorikelkkasafarit',
      spaWellness: 'Spa ja hyvinvointi',
      nightlife: 'Yöelämä',
      natureParks: 'Luonto ja kansallispuistot',
      travelGuide: 'Matkaopas',
      christmas: 'Joulu Lapissa',
      giftsSouvenirs: 'Lahjat ja matkamuistot',
      travelBlog: 'Matkablogi',
      dealsOffers: 'Tarjoukset',
      transport: 'Liikenne',
      carRental: 'Autovuokraus',
      workInLapland: 'Töihin Lappiin',
    },
  }
}
