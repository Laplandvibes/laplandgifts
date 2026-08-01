import type { Lang } from '../i18n/useLang'

export interface ShopCopy {
  nav: { shop: string; guides: string; shipping: string; allProducts: string }
  /**
   * Etusivun heron ja osioiden otsikot.
   *
   * 🔴 Nämä asuvat täällä eivätkä ChromeCopyssa, koska ChromeCopyn vastaavat
   * rivit kuvaavat kauppaa jota ei vielä ollut: "Three Ways to Gift Lapland"
   * (kategorioita on seitsemän), "Coming Soon" (tuotteet ovat ostettavissa) ja
   * heron "Soon you'll be able to order" (tilata voi nyt). Kauppa on auki,
   * joten vanhat rivit olisivat nyt väärää tietoa.
   *
   * 🔴 Heron h1 on hakusanaotsikko, ei copywriter-fraasi. Vanha "Give a Piece
   * of the Arctic" / "Lahjoita pala Arktista" ei osu yhteenkään termiin jolla
   * tuliaisia etsitään (Vesa 1.8.). Uusi otsikko sanoo saman kuin
   * hakukenttään kirjoitetaan: "finnish gifts", "lapland souvenirs",
   * "lapin tuliaiset", "suomalaiset lahjat".
   *
   * 🔴 `heroTitle` + `heroTitleAccent` renderöityvät Bebas Neuella eli
   * versaalina. Yhteispituus on mitoitettu niin, että rivi katkeaa
   * `heroTitle`n ja `heroTitleAccent`in väliin: kaksi tasapituista riviä,
   * joista alempi on amber. Pidempi teksti katkeaa kolmelle riville ja täyttää
   * mobiiliruudun.
   */
  home: {
    heroKicker: string
    heroTitle: string
    heroTitleAccent: string
    heroLead: string
    categoriesH2: string
    categoriesSub: string
    featuredH2: string
    featuredSub: string
  }
  category: {
    /** Kategorian nimi navissa ja otsikoissa. */
    names: Record<
      'design' | 'clothing' | 'handicrafts' | 'treats' | 'superfoods' | 'merch' | 'experiences',
      string
    >
    intro: Record<
      'design' | 'clothing' | 'handicrafts' | 'treats' | 'superfoods' | 'merch' | 'experiences',
      string
    >
    productCount: (n: number) => string
    /** Kategoriassa ei ole yhtään tuotetta, suodattimesta riippumatta. */
    emptyCategory: string
    /** Kategoriassa on tuotteita, mutta yksikään ei toimita valittuun maahan. */
    emptyForCountry: string
  }
  product: {
    buyAt: (partner: string) => string
    priceFrom: (value: number, currency: string) => string
    priceNote: (date: string, partner: string) => string
    checkoutNote: string
    /** Vain AI-tunnelmakuville: kuva ei esitä juuri tätä tuotetta. */
    illustrativeImage: string
    /** Vain kumppanin omille tuotekuville: hillitty lähdemerkintä. */
    imageCredit: (partner: string) => string
    related: string
    backToCategory: string
    /**
     * Tuotekortin toimintakehote.
     *
     * 🔴 Kortti oli pelkkä linkki ilman yhtään vihjettä siitä, että sitä voi
     * painaa (Vesa 1.8.: "ei ole mitään tekstiä, cta painiketta tms? todella
     * outoja"). Hover-varjo on ainoa vihje, eikä kosketusnäytöllä ole hoveria.
     * Teksti sanoo mitä painaminen tekee — se ei sano "osta", koska ostaminen
     * tapahtuu vasta kumppanin kaupassa tuotesivun kautta.
     */
    viewProduct: string
    /**
     * Tuotetieto-osio. Renderöityy vain jos tuotteella on `details`.
     *
     * 🔴 Vesa 1.8.: "kyllä näissä pitää olla tuotetiedot, sisältötiedot
     * ruuissa kopioitu sivustoilta, mitä materiaalia jne". Kauppa joka ei
     * kerro materiaalia, kokoa eikä elintarvikkeen ainesosia ei ole kauppa.
     */
    detailsH2: string
    /** Vakioavainten otsikot. 'other' tuo otsikkonsa itse. */
    specLabels: Record<
      'material' | 'size' | 'weight' | 'volume' | 'origin' | 'contents' | 'color' | 'care' | 'shelfLife',
      string
    >
    ingredientsH3: string
    allergensH3: string
    /**
     * Lähdemerkintä tuotetiedoille.
     *
     * 🔴 Suomeksi ei "kumppanin {nimi} sivulta": appositio ei taivu
     * postposition jälkeen luontevasti, ja brändinimen taivutus menee helposti
     * väärin (Makia → Makian, mutta Halti → Haltin, Marttiini → Marttiinin).
     * Kaksoispistemuoto välttää taivutuksen kokonaan ja on sama kuvamerkinnän
     * kanssa ("Tuotekuva: Makia").
     */
    detailsSource: (partner: string, date: string) => string
  }
  /** Elämyslahjat tulevat GYG-katalogista, eivät PRODUCTS-listasta. */
  experience: {
    priceNote: (price: string, asOf: string) => string
    duration: (value: string) => string
    viewOnGyg: string
  }
  shipping: {
    worldwide: string
    euOnly: string
    fiOnly: string
    /**
     * Sama tieto lyhyesti tuotekorttiin. 🔴 Pitkä muoto ("Toimitus
     * maailmanlaajuisesti") ei mahdu kahden palstan kortin 114 pikselin
     * tekstitilaan 320 pikselin ruudulla: yksin sana "maailmanlaajuisesti"
     * on leveämpi kuin koko laatikko, joten se katkesi keskeltä sanaa.
     * Pitkä muoto jää tuotesivulle ja toimitussivulle.
     */
    zoneShort: { worldwide: string; eu: string; fi: string }
    /**
     * Vyöhykemerkintä silloin kun tuotteella tai kaupalla on maapoikkeuksia.
     *
     * 🔴 Ostajan on tiedettävä rajaus ENNEN kuin hän klikkaa ostamaan. Pelkkä
     * "Koko maailma" on kortissa väärä lupaus, jos kolmeen maahan ei toimiteta.
     * Kortissa ei ole tilaa maiden nimille (kapeimmillaan 114 px tekstiä),
     * joten kortti kertoo määrän ja tuotesivu maiden nimet.
     */
    exceptShort: (zone: string, count: number) => string
    /**
     * Tuotesivun rivi: poikkeusmaat NIMILLÄ, ei koodeina. "US" ei kerro
     * lukijalle mitään; maan nimi kertoo heti koskeeko rajaus häntä.
     */
    exceptNote: (countries: string[]) => string
    selectorLabel: string
    /**
     * Valitsimen tyhjä arvo. Kun labelina lukee jo "Toimitusmaa", tyhjän
     * vaihtoehdon on kerrottava mitä valitsematta jättäminen tarkoittaa
     * (kaikki tuotteet näkyvissä) eikä toistettava labelia.
     */
    selectorAll: string
    title: string
    /** Toimitussivun kumppanitaulukon sarakeotsikot. */
    table: { shop: string; area: string; checked: string }
    /**
     * Elintarvikkeiden vientirajoitteet. Verifioitu viranomaislähteistä
     * 31.7.2026 (gov.uk, aphis.usda.gov, mattilsynet.no, maff.go.jp), joten
     * tekstiä ei muotoilla uudelleen arvaamalla.
     */
    foodRules: { title: string; intro: string; rows: Array<{ area: string; rule: string }> }
  }
}

/**
 * Kiinteät muuntokurssit euroon. Osa kumppaneista hinnoittelee muussa
 * valuutassa (Arctic Power Berries lähettää Britanniasta ja veloittaa punnissa),
 * ja pelkkä punta on suomalaisessa lahjakaupassa hämmentävä. Emme kuitenkaan
 * saa esittää euroa lopullisena hintana: asiakasta veloitetaan kumppanin
 * valuutassa. Siksi kortti näyttää kumppanin valuutan ja sen rinnalla
 * likimääräisen euromäärän, joka on merkitty arvioksi ja päivätty.
 * Päivitä kurssit ja päivä kun ne ovat selvästi vanhentuneet.
 */
export const FX_TO_EUR: Record<string, number> = { EUR: 1, GBP: 1.17, USD: 0.92 }
export const FX_AS_OF = '2026-07-31'

/** Likimääräinen euromäärä, tai null jos hinta on jo euroissa. */
export function approxEur(value: number, currency: string): number | null {
  if (currency === 'EUR') return null
  const rate = FX_TO_EUR[currency]
  return rate ? Math.round(value * rate) : null
}

const fmt = (value: number, currency: string, locale: string) =>
  new Intl.NumberFormat(locale, { style: 'currency', currency, maximumFractionDigits: 0 }).format(value)

const en: ShopCopy = {
  nav: { shop: 'Shop', guides: 'Gift guides', shipping: 'Delivery', allProducts: 'All products' },
  home: {
    heroKicker: 'Shipped from Finland to your door',
    heroTitle: 'Finnish gifts and',
    heroTitleAccent: 'Lapland souvenirs',
    heroLead:
      'Finnish design, Lapland handicrafts, sweets and berry powders, gathered in one place and shipped to where you live. Whether you are here on holiday or ordering from the other side of the world, each product is sold and sent by a Finnish or Nordic shop, not by us.',
    categoriesH2: 'What to buy in Lapland',
    categoriesSub:
      'Finnish design, clothing, handicrafts, sweets, berry powders, our own merch and experience gifts. Each category opens the shop that actually ships the item.',
    featuredH2: 'Gifts and souvenirs from partner shops',
    featuredSub:
      'A few products from across the categories. Every price is read from the partner shop and carries the date it was checked.',
  },
  category: {
    names: {
      design: 'Finnish design gifts',
      clothing: 'Finnish clothing and knitwear',
      handicrafts: 'Lapland handicrafts',
      treats: 'Finnish sweets and food gifts',
      superfoods: 'Arctic berry powders and superfoods',
      merch: 'Lapland T-shirts and merch',
      experiences: 'Lapland experience gifts',
    },
    intro: {
      design: 'Moomin mugs, Iittala glass, Marimekko and Aarikka wooden jewellery: the Finnish design that actually travels home. Every item ships from the Finnish or Nordic shop that sells it.',
      clothing: 'Halti shell jackets, Makia streetwear from Helsinki and North Outdoor merino knitted in its own mill in Oulu.',
      handicrafts: 'Marttiini knives from Rovaniemi, Kupilka cups, Lapuan Kankurit linen and Pentik ceramics: handicraft that gets used rather than shelved.',
      treats: 'Finnish sweets and food gifts: salmiakki, Fazer chocolate, Nordqvist and Moomin teas, Moomin coffee, reindeer jerky and sea buckthorn jam. Import rules differ by country, so check the delivery note on each card.',
      superfoods: 'Arctic berry powders, chaga and Arctic Warriors herbal products made in Rovaniemi, from Finnish producers.',
      merch: 'Lapland T-shirts, hoodies, caps and neck gaiters with our own #LAPLANDVIBES print, made on demand and shipped from the EU or the US.',
      experiences: 'Northern lights tours, husky sledding and Santa Claus Village, bought as a gift now and booked when the recipient picks a date.',
    },
    productCount: (n) => (n === 1 ? '1 product' : `${n} products`),
    emptyCategory:
      'We are still adding products to this category. In the meantime, browse the other categories or check the gift guides.',
    emptyForCountry: 'None of the products in this category ship to your country yet. Switch the delivery country to see everything.',
  },
  product: {
    buyAt: (partner) => `Buy at ${partner}`,
    priceFrom: (value, currency) => {
      const eur = approxEur(value, currency)
      return eur ? `from ${fmt(value, currency, 'en-GB')} (about ${eur} €)` : `from ${fmt(value, currency, 'en-GB')}`
    },
    priceNote: (date, partner) => `Price read from ${partner} on ${date}. The shop sets the final price.`,
    checkoutNote: 'You complete the purchase in the partner shop. We do not handle your payment or delivery.',
    illustrativeImage: 'Illustrative photo, not the exact item. See the product photos on the partner’s page.',
    imageCredit: (partner) => `Product photo: ${partner}`,
    related: 'More from this category',
    backToCategory: 'Back to category',
    viewProduct: 'View product',
    detailsH2: 'Product details',
    specLabels: {
      material: 'Material',
      size: 'Size',
      weight: 'Weight',
      volume: 'Volume',
      origin: 'Origin',
      contents: 'Contents',
      color: 'Colour',
      care: 'Care',
      shelfLife: 'Shelf life',
    },
    ingredientsH3: 'Ingredients',
    allergensH3: 'Allergens',
    detailsSource: (partner, date) => `Details from ${partner}, read ${date}`,
  },
  experience: {
    priceNote: (price, asOf) => `From ${price} on GetYourGuide, price read ${asOf}`,
    duration: (value) => `Duration ${value}`,
    viewOnGyg: 'See availability',
  },
  shipping: {
    worldwide: 'Ships worldwide',
    euOnly: 'Ships to Europe only',
    fiOnly: 'Ships within Finland only',
    zoneShort: { worldwide: 'Worldwide', eu: 'Europe only', fi: 'Finland only' },
    exceptShort: (zone, count) => `${zone}, ${count} ${count === 1 ? 'exception' : 'exceptions'}`,
    exceptNote: (countries) => `Not available for shipment to: ${countries.join(', ')}.`,
    selectorLabel: 'Deliver to',
    selectorAll: 'All countries',
    title: 'Delivery',
    table: { shop: 'Partner shop', area: 'Delivery area', checked: 'Checked' },
    foodRules: {
      title: 'Food and meat: what may be posted where',
      intro: 'Berry powders, jam and chocolate travel freely. Dried reindeer and other meat does not, and the rules are set by the destination country, not by us.',
      rows: [
        { area: 'European Union', rule: 'Allowed. Meat products move freely between member states.' },
        { area: 'Norway', rule: 'Allowed from the EU, but customs duty and VAT are charged on arrival.' },
        { area: 'United Kingdom', rule: 'Not possible. Since April 2025 venison, which covers reindeer, may not be brought in from the EU.' },
        { area: 'United States', rule: 'Not by post. A traveller may carry dried meat from Finland with origin documents, but a mailed parcel counts as a commercial import.' },
        { area: 'Japan', rule: 'Not possible. Meat needs an official inspection certificate whatever the transport method, and postal parcels are named specifically.' },
      ],
    },
  },
}

const fi: ShopCopy = {
  nav: { shop: 'Kauppa', guides: 'Lahjaoppaat', shipping: 'Toimitus', allProducts: 'Kaikki tuotteet' },
  home: {
    heroKicker: 'Suomesta suoraan kotiovelle',
    heroTitle: 'Lapin tuliaiset ja',
    heroTitleAccent: 'suomalaiset lahjat',
    heroLead:
      'Suomalaista designia, Lapin käsitöitä, herkkuja ja marjajauheita yhdessä paikassa, toimitettuna sinne missä asut. Olitpa täällä lomalla tai tilaamassa toiselta puolelta maailmaa, jokaisen tuotteen myy ja lähettää suomalainen tai pohjoismainen kauppa, emme me.',
    categoriesH2: 'Mitä Lapista kannattaa ostaa',
    categoriesSub:
      'Suomalaista designia, vaatteita, käsitöitä, herkkuja, marjajauheita, omaa merchiä ja elämyslahjoja. Jokainen kategoria avaa sen kaupan, joka tuotteen oikeasti lähettää.',
    featuredH2: 'Tuliaisia ja lahjoja kumppanikaupoista',
    featuredSub:
      'Muutama tuote eri kategorioista. Jokainen hinta on luettu kumppanin kaupasta ja kantaa päivän, jona se tarkistettiin.',
  },
  category: {
    names: {
      design: 'Suomalainen design',
      clothing: 'Suomalaiset vaatteet ja neuleet',
      handicrafts: 'Lapin käsityöt',
      treats: 'Suomalaiset herkut',
      superfoods: 'Marjajauheet ja superfoodit',
      merch: 'Lapland-paidat ja merch',
      experiences: 'Lapin elämyslahjat',
    },
    intro: {
      design: 'Muumimukeja, Iittalan lasia, Marimekkoa ja Aarikan puukoruja: sitä suomalaista designia, joka oikeasti lähtee matkaan. Jokainen tuote lähtee siitä kaupasta, joka sen myy.',
      clothing: 'Haltin kuoritakkeja, Makian helsinkiläistä streetweariä ja North Outdoorin merinoneuleita, jotka neulotaan Oulussa.',
      handicrafts: 'Marttiinin puukkoja Rovaniemeltä, Kupilkan kuksia, Lapuan Kankureiden pellavaa ja Pentikin keramiikkaa: käsityötä, joka kuluu käytössä eikä hyllyllä.',
      treats: 'Suomalaisia herkkuja: salmiakkia, Fazerin suklaata, Nordqvistin ja Muumien teetä, Muumi-kahvia, poron kuivalihaa ja tyrnihilloa. Tuontisäännöt vaihtelevat maittain, joten tarkista toimitusmerkintä kortista.',
      superfoods: 'Arktista marjajauhetta, pakuria ja Rovaniemellä valmistettuja Arctic Warriorsin yrttivalmisteita suomalaisilta tuottajilta.',
      merch: 'Lapland-paitoja, huppareita, lippiksiä ja tuubihuiveja omalla #LAPLANDVIBES-painatuksella, tehdään tilauksesta ja lähetetään EU:sta tai Yhdysvalloista.',
      experiences: 'Revontuliretkiä, huskysafareita ja Joulupukin Pajakylää lahjaksi ostettuna, varattavaksi silloin, kun saaja itse valitsee päivän.',
    },
    productCount: (n) => (n === 1 ? '1 tuote' : `${n} tuotetta`),
    emptyCategory:
      'Täydennämme tätä kategoriaa parhaillaan. Selaa sillä välin muita kategorioita tai katso lahjaoppaat.',
    emptyForCountry: 'Yksikään tämän kategorian tuote ei toimita vielä valitsemaasi maahan. Vaihda toimitusmaa nähdäksesi kaikki.',
  },
  product: {
    buyAt: (partner) => `Osta: ${partner}`,
    priceFrom: (value, currency) => {
      const eur = approxEur(value, currency)
      return eur ? `alk. ${fmt(value, currency, 'fi-FI')} (noin ${eur} €)` : `alk. ${fmt(value, currency, 'fi-FI')}`
    },
    priceNote: (date, partner) => `Hinta luettu kumppanin ${partner} sivulta ${date}. Lopullisen hinnan määrittää kauppa.`,
    checkoutNote: 'Viimeistelet ostoksen kumppanin kaupassa. Me emme käsittele maksua emmekä toimitusta.',
    illustrativeImage: 'Kuva on tunnelmakuva, ei kuva juuri tästä tuotteesta. Tuotteen omat kuvat ovat kumppanin sivulla.',
    imageCredit: (partner) => `Tuotekuva: ${partner}`,
    related: 'Lisää tästä kategoriasta',
    backToCategory: 'Takaisin kategoriaan',
    viewProduct: 'Katso tuote',
    detailsH2: 'Tuotetiedot',
    specLabels: {
      material: 'Materiaali',
      size: 'Koko',
      weight: 'Paino',
      volume: 'Tilavuus',
      origin: 'Alkuperä',
      contents: 'Sisältö',
      color: 'Väri',
      care: 'Hoito-ohje',
      shelfLife: 'Säilyvyys',
    },
    ingredientsH3: 'Ainesosat',
    allergensH3: 'Allergeenit',
    detailsSource: (partner, date) => `Tuotetiedot: ${partner}, luettu ${date}`,
  },
  experience: {
    priceNote: (price, asOf) => `Alkaen ${price} GetYourGuidessa, hinta luettu ${asOf}`,
    duration: (value) => `Kesto ${value}`,
    viewOnGyg: 'Katso saatavuus',
  },
  shipping: {
    worldwide: 'Toimitus maailmanlaajuisesti',
    euOnly: 'Toimitus vain Eurooppaan',
    fiOnly: 'Toimitus vain Suomeen',
    zoneShort: { worldwide: 'Koko maailma', eu: 'Vain Eurooppa', fi: 'Vain Suomi' },
    exceptShort: (zone, count) => `${zone}, pl. ${count} ${count === 1 ? 'maa' : 'maata'}`,
    // 🔴 "Ei toimiteta näihin maihin:" eikä "Ei toimiteta Yhdysvaltoihin,
    // Australiaan ja ...": kaksoispistelista pitää maiden nimet perusmuodossa,
    // eikä jokaista nimeä tarvitse taivuttaa illatiiviin. Taivutus menisi
    // väärin juuri niissä nimissä joita tarvitaan (Peru → Peruun, Chile →
    // Chileen, Falklandinsaaret → Falklandinsaarille).
    exceptNote: (countries) => `Ei toimiteta näihin maihin: ${countries.join(', ')}.`,
    selectorLabel: 'Toimitusmaa',
    selectorAll: 'Kaikki maat',
    title: 'Toimitus',
    table: { shop: 'Kumppanikauppa', area: 'Toimitusalue', checked: 'Tarkistettu' },
    foodRules: {
      title: 'Ruoka ja liha: mitä minnekin saa postittaa',
      intro: 'Marjajauheet, hillot ja suklaa kulkevat vapaasti. Poron kuivaliha ja muu liha eivät kulje, ja säännöt asettaa kohdemaa, emme me.',
      rows: [
        { area: 'Euroopan unioni', rule: 'Sallittu. Lihatuotteet liikkuvat vapaasti jäsenmaiden välillä.' },
        { area: 'Norja', rule: 'Sallittu EU:sta, mutta tulli ja arvonlisävero peritään saapuessa.' },
        { area: 'Britannia', rule: 'Ei onnistu. Huhtikuusta 2025 alkaen hirvieläinlihaa, johon poro kuuluu, ei saa tuoda EU:sta.' },
        { area: 'Yhdysvallat', rule: 'Ei postitse. Matkustaja saa tuoda kuivalihaa mukanaan alkuperäasiakirjoilla, mutta postipaketti luetaan kaupalliseksi tuonniksi.' },
        { area: 'Japani', rule: 'Ei onnistu. Liha vaatii viranomaisen tarkastustodistuksen kuljetustavasta riippumatta, ja postipaketit mainitaan erikseen.' },
      ],
    },
  },
}

/**
 * Muut kielet kääntyvät V2:ssa. V1:ssä ne saavat englannin, mikä on sama
 * hyväksytty malli kuin tuotenimissä (validator laskee nämä enFallbackiksi).
 */
export const SHOP_COPY: Record<Lang, ShopCopy> = {
  en, fi,
  de: en, ja: en, es: en, 'pt-BR': en, 'zh-CN': en, ko: en, fr: en, it: en, nl: en, sv: en,
}
