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
    /**
     * Kolmivaiheinen "näin ostaminen etenee" (components/ValueProp.tsx).
     *
     * 🔴 Tekstit asuvat täällä eivätkä ChromeCopyssa samasta syystä kuin heron
     * rivit: ChromeCopyn `valueProp` kuvaa kauppaa jota meillä ei ole. Se lupasi
     * "Näin LaplandGifts toimii kaupan avauduttua" ja "Lahjat pakataan huolella
     * ja lähetetään suoraan suomalaisilta käsityöläisiltä". Me emme pakkaa
     * emmekä lähetä mitään: kumppanikauppa tekee sen. Osio kertoo nyt sen mitä
     * me oikeasti teemme, ja ostajalle olennaisen: mihin nappi vie ja kenen
     * ehdot pätevät.
     */
    valueProp: { h2: string; sub: string; steps: Array<{ title: string; description: string }> }
    /**
     * "Mitä LaplandGifts tekee" (components/ShippingInfo.tsx, id="shipping").
     *
     * 🔴 Sama tausta: ChromeCopyn `shipping`-lohko oli otsikoitu
     * "Lupauksemme" ja alaotsikoitu "Mitä voit odottaa, kun LaplandGifts-kauppa
     * avautuu", ja se lupasi neljä asiaa joista yksikään ei pidä paikkaansa:
     * alkuperätodistus, kierrätettävä lahjapakkaus, viesti kassalla ja osuus
     * myynnistä tekijälle. Meillä ei ole kassaa eikä pakkaamoa. Uudet neljä
     * kohtaa ovat sitä työtä jonka me oikeasti teemme: poiminta, päivätty
     * hinta, koottu tuotetieto ja se että kaupan omat ehdot pätevät.
     */
    promises: { h2: string; sub: string; items: Array<{ title: string; description: string }> }
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
  /**
   * Korjatut FAQ-vastaukset, avaimena kysymyksen indeksi (sama järjestys kuin
   * FAQ.tsx:n FAQ_LINKS). Pohja tulee yhä ChromeCopysta.
   *
   * 🔴 Miksi vain yksittäisiä vastauksia eikä koko FAQ:ta: kysymykset on
   * käännetty natiivisti 12 kielelle ja StructuredData lähettää ne
   * FAQPage-JSON-LD:nä. Koko lohkon siirto tänne pudottaisi 10 kieltä
   * englantiin kaikissa kuudessa vastauksessa. Väärä vastaus korjataan, oikeaa
   * käännöstä ei heitetä pois.
   *
   * Korjatut 2.8.2026:
   *  - #1 väitti "Me hankimme saamelaiskäsityöt vain valtuutetuilta myyjiltä".
   *    Emme myy yhtäkään saamelaiskäsityötä, joten se oli hankintalupaus
   *    tuoteryhmästä jota ei ole.
   *  - #2 sanoi "(kauppa avautuu pian)". Kauppa on auki; auki ei ole vain oma
   *    print-on-demand-mallisto, ja lause luki kuin koko sivusto olisi kiinni.
   */
  faqAnswerFixes: Record<number, string>
  /**
   * Varattavat retket tulevat GYG-katalogista. Lisäksi kategoriassa on
   * Elämyslahjat.fi:n lahjakortit tavallisina PRODUCTS-tuotteina (3.8.2026);
   * voucherH2 ja voucherNote otsikoivat sen osion.
   */
  experience: {
    voucherH2: string
    voucherNote: string
    priceNote: (price: string) => string
    priceAsOf: (asOf: string) => string
    groups: Record<import('../data/experiences').ExperienceGroup, string>
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
  /**
   * Putiikkihakemisto. Lohko on pienin yksikkö: antamatta jätetty lohko
   * putoaa englantiin, joten uudet avaimet on lisättävä jokaisen kielen
   * boutique-lohkoon eikä vain englantiin.
   */
  boutique: {
    hubTitle: string
    hubLead: string
    hubIntro: string
    townsH2: string
    elsewhereH2: string
    filterAll: string
    filterOnline: string
    filterPhysical: string
    onlineBadge: string
    physicalBadge: string
    /** "12 putiikkia". Luku tulee datasta, ei copysta. */
    count: (n: number) => string
    visitH2: string
    shopAtH2: string
    outboundCta: string
    crossSellH2: string
    crossSellCta: string
    /** Paikannimet eivät käänny; CJK-kielissäkin latinalainen kirjoitusasu. */
    townNames: Record<
      'rovaniemi' | 'inari' | 'posio' | 'levi' | 'sodankyla'
      | 'yllas' | 'saariselka' | 'enontekio' | 'utsjoki',
      string
    >
    duodjiH2: string
    duodjiBody: string
    duodjiAuthorized: string
    listingH2: string
    listingBody: string
    listingCta: string
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
      'Finnish design and handicrafts, sweets and berry powders, gathered in one place and shipped to where you live. Whether you are here on holiday or ordering from the other side of the world, each product is sold and sent by a Finnish or Nordic shop, not by us.',
    categoriesH2: 'What to buy in Lapland',
    categoriesSub:
      'Finnish design, clothing, handicrafts, sweets, berry powders, our own merch and experience gifts. Each category opens the shop that actually ships the item.',
    featuredH2: 'Gifts and souvenirs from partner shops',
    featuredSub:
      'A few products from across the categories. Every price is read from the partner shop and carries the date it was checked.',
    valueProp: {
      h2: 'How buying works here',
      sub: 'LaplandGifts is a checked selection, not a checkout. Three steps from this page to the parcel.',
      steps: [
        {
          title: 'Browse a checked selection',
          description:
            'Every product was opened on the shop’s own page before it was added here. The name, the materials and the price are read from there, not written by us.',
        },
        {
          title: 'Check the delivery country',
          description:
            'Each card says whether that shop sends to where you live, and names the countries it leaves out. You know before you click, not at checkout.',
        },
        {
          title: 'Buy in the partner shop',
          description:
            'The button opens the shop that sells the item. Payment, delivery, returns and warranty are theirs, and we earn a commission if you buy.',
        },
      ],
    },
    promises: {
      h2: 'What LaplandGifts does',
      sub: 'We run no warehouse and no checkout. The work is finding, checking and gathering.',
      items: [
        {
          title: 'Picked by hand',
          description:
            'Each product is chosen one at a time and read on the partner’s own page first. No product feeds, nothing added that we have not opened ourselves.',
        },
        {
          title: 'Prices read from the source',
          description:
            'Every price comes from the partner’s product page and carries the date it was checked. The shop sets the final price.',
        },
        {
          title: 'Product details in one place',
          description:
            'Material, size, volume, ingredients and allergens as the partner states them, so comparing does not take ten browser tabs.',
        },
        {
          title: 'The shop’s own terms apply',
          description:
            'You buy in the partner’s shop, so their payment, delivery, return and warranty terms are the ones that count. They are also the ones who send the parcel.',
        },
      ],
    },
  },
  category: {
    names: {
      design: 'Finnish design gifts',
      clothing: 'Finnish clothing and knitwear',
      handicrafts: 'Finnish handicrafts',
      treats: 'Finnish sweets and food gifts',
      superfoods: 'Arctic berry powders and superfoods',
      merch: 'Lapland T-shirts and merch',
      experiences: 'Lapland experience gifts',
    },
    intro: {
      design: 'Moomin mugs, Iittala glass, Marimekko and Aarikka wooden jewellery: the Finnish design that actually travels home. Every item ships from the Finnish or Nordic shop that sells it.',
      clothing: 'Halti shell jackets, Makia streetwear from Helsinki and North Outdoor merino knitted in its own mill in Oulu.',
      handicrafts: 'Marttiini knives from Rovaniemi, Kupilka camp dishes, Lapuan Kankurit linen from Lapua and Pentik ceramics from Posio: handicraft that gets used, not shelved.',
      treats: 'Finnish sweets and food gifts: salmiakki, Fazer chocolate, Nordqvist and Moomin teas, Moomin coffee, reindeer jerky and sea buckthorn jam. Import rules differ by country, so check the delivery note on each card.',
      superfoods: 'Arctic berry powders, chaga and Arctic Warriors herbal products made in Rovaniemi, from Finnish producers.',
      merch: 'Our own #LAPLANDVIBES print on T-shirts, hoodies and caps. The print shop is not open yet, so there is nothing to buy here today. The newsletter says when it is.',
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
  faqAnswerFixes: {
    1: 'Yes. Duodji is the Sámi word for traditional handicraft, and the round “Sámi Duodji” trademark is a label of authenticity granted to crafts made by Sámi makers using traditional methods and materials. Choosing an item that carries the mark, or buying directly from a named Sámi artisan or an authorised seller, keeps the money with the community and the work genuine rather than a factory imitation. LaplandGifts lists no Sámi crafts at all: we would rather point you to a duodji seller than sell you a lookalike.',
    2: 'Many do, and that is what this site runs on: every product here is sold and posted by the Finnish or Nordic shop that makes or stocks it, never by us. Each card names that shop’s delivery area and the countries it leaves out, and food is stricter than the rest, so dried reindeer travels inside the EU but not to the UK, the United States or Japan. Ordering online during your trip means fragile items travel separately instead of in your luggage. Our own #LaplandVibes print merchandise is not on sale yet.',
  },
  experience: {
    voucherH2: 'Experience gift cards',
    voucherNote:
      'Bought from Elämyslahjat.fi and delivered by email. The recipient books the date, and the experience is redeemed in Lapland.',
    priceNote: (price) => `From ${price}`,
    priceAsOf: (asOf) => `Starting prices read on GetYourGuide ${asOf}. The exact price depends on the date you choose.`,
    groups: {
      aurora: 'Northern lights',
      husky: 'Husky rides',
      reindeer: 'Reindeer',
      snowmobile: 'Snowmobile safaris',
      nature: 'Nature and national parks',
      sauna: 'Sauna and ice swimming',
      santa: 'Santa Claus and snow',
      kids: 'For children',
    },
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
  boutique: {
    hubTitle: 'Lapland boutiques',
    hubLead: 'Where to buy Lapland crafts, in the shops themselves.',
    hubIntro: 'Every shop here is a Lapland business. Some ship worldwide, some you visit in person, and each link goes to the company\'s own site.',
    townsH2: 'By town',
    elsewhereH2: 'Elsewhere in Lapland',
    filterAll: 'All',
    filterOnline: 'Ships to you',
    filterPhysical: 'Visit in person',
    onlineBadge: 'ONLINE SHOP',
    physicalBadge: 'WALK IN',
    count: (n: number) => (n === 1 ? '1 boutique' : `${n} boutiques`),
    visitH2: 'Visit in person',
    shopAtH2: 'Order from home',
    outboundCta: 'Go to their site',
    crossSellH2: 'Buy this kind of thing online',
    crossSellCta: 'Browse the category',
    townNames: {
      rovaniemi: 'Rovaniemi', inari: 'Inari', posio: 'Posio',
      levi: 'Levi', sodankyla: 'Sodankylä', yllas: 'Ylläs',
      saariselka: 'Saariselkä', enontekio: 'Enontekiö', utsjoki: 'Utsjoki',
    },
    duodjiH2: 'How to recognise real Sámi duodji',
    duodjiBody: 'Duodji is Sámi handicraft made by Sámi makers using traditional materials and techniques. Souvenir imitations copy the look without the maker or the tradition. The difference matters to the community whose culture it is, and an authorised seller can tell you who made the piece.',
    duodjiAuthorized: 'Authorised seller of Sámi duodji',
    listingH2: 'Do you run a Lapland shop?',
    listingBody: 'A listing here is free for every Lapland business. Tell us who you are, why your visibility is weak right now, and what would change if customers found you.',
    listingCta: 'Get in touch',
  },
}

const fi: ShopCopy = {
  nav: { shop: 'Kauppa', guides: 'Lahjaoppaat', shipping: 'Toimitus', allProducts: 'Kaikki tuotteet' },
  home: {
    heroKicker: 'Suomesta suoraan kotiovelle',
    heroTitle: 'Lapin tuliaiset ja',
    heroTitleAccent: 'suomalaiset lahjat',
    heroLead:
      'Suomalaista designia ja käsitöitä, herkkuja ja marjajauheita yhdessä paikassa, toimitettuna sinne missä asut. Olitpa täällä lomalla tai tilaamassa toiselta puolelta maailmaa, jokaisen tuotteen myy ja lähettää suomalainen tai pohjoismainen kauppa, emme me.',
    categoriesH2: 'Mitä Lapista kannattaa ostaa',
    categoriesSub:
      'Suomalaista designia, vaatteita, käsitöitä, herkkuja, marjajauheita, omaa merchiä ja elämyslahjoja. Jokainen kategoria avaa sen kaupan, joka tuotteen oikeasti lähettää.',
    featuredH2: 'Tuliaisia ja lahjoja kumppanikaupoista',
    featuredSub:
      'Muutama tuote eri kategorioista. Jokainen hinta on luettu kumppanin kaupasta ja kantaa päivän, jona se tarkistettiin.',
    valueProp: {
      h2: 'Näin ostaminen etenee',
      sub: 'LaplandGifts on tarkistettu valikoima, ei kassa. Tältä sivulta pakettiin on kolme askelta.',
      steps: [
        {
          title: 'Selaa tarkistettua valikoimaa',
          description:
            'Jokainen tuote on avattu kaupan omalta sivulta, ennen kuin se lisättiin tänne. Nimi, materiaalit ja hinta ovat sieltä luettuja, eivät meidän kirjoittamiamme.',
        },
        {
          title: 'Katso toimitusmaa',
          description:
            'Kortti kertoo, toimittaako kauppa sinne missä asut, ja nimeää maat, jotka jäävät ulkopuolelle. Tiedät sen ennen klikkausta, et vasta kassalla.',
        },
        {
          title: 'Osta kumppanin kaupassa',
          description:
            'Nappi avaa sen kaupan, joka tuotteen myy. Maksu, toimitus, palautukset ja takuu ovat sen, ja me saamme ostosta komission.',
        },
      ],
    },
    promises: {
      h2: 'Mitä LaplandGifts tekee',
      sub: 'Meillä ei ole varastoa eikä kassaa. Työ on etsimistä, tarkistamista ja kokoamista.',
      items: [
        {
          title: 'Poimittu käsin',
          description:
            'Jokainen tuote valitaan yksi kerrallaan ja luetaan ensin kumppanin omalta sivulta. Ei tuotesyötteitä eikä mitään, mitä emme ole itse avanneet.',
        },
        {
          title: 'Hinta luettu lähteestä',
          description:
            'Jokainen hinta tulee kumppanin tuotesivulta ja kantaa päivän, jona se tarkistettiin. Lopullisen hinnan määrittää kauppa.',
        },
        {
          title: 'Tuotetiedot yhdessä paikassa',
          description:
            'Materiaali, koko, tilavuus, ainesosat ja allergeenit sellaisina kuin kumppani ne ilmoittaa, jottei vertailu vaadi kymmentä välilehteä.',
        },
        {
          title: 'Kaupan omat ehdot pätevät',
          description:
            'Ostat kumppanin kaupassa, joten sen maksu-, toimitus-, palautus- ja takuuehdot ovat ne, jotka pätevät. Se myös lähettää paketin.',
        },
      ],
    },
  },
  category: {
    names: {
      design: 'Suomalainen design',
      clothing: 'Suomalaiset vaatteet ja neuleet',
      handicrafts: 'Suomalaiset käsityöt',
      treats: 'Suomalaiset herkut',
      superfoods: 'Marjajauheet ja superfoodit',
      merch: 'Lapland-paidat ja merch',
      experiences: 'Lapin elämyslahjat',
    },
    intro: {
      design: 'Muumimukeja, Iittalan lasia, Marimekkoa ja Aarikan puukoruja: sitä suomalaista designia, joka oikeasti lähtee matkaan. Jokainen tuote lähtee siitä kaupasta, joka sen myy.',
      clothing: 'Haltin kuoritakkeja, Makian helsinkiläistä streetweariä ja North Outdoorin merinoneuleita, jotka neulotaan Oulussa.',
      handicrafts: 'Marttiinin puukkoja Rovaniemeltä, Kupilkan retkiastioita, Lapuan Kankureiden pellavaa Lapualta ja Pentikin keramiikkaa Posiolta: käsityötä, joka kuluu käytössä.',
      treats: 'Suomalaisia herkkuja: salmiakkia, Fazerin suklaata, Nordqvistin ja Muumien teetä, Muumi-kahvia, poron kuivalihaa ja tyrnihilloa. Tuontisäännöt vaihtelevat maittain, joten tarkista toimitusmerkintä kortista.',
      superfoods: 'Arktista marjajauhetta, pakuria ja Rovaniemellä valmistettuja Arctic Warriorsin yrttivalmisteita suomalaisilta tuottajilta.',
      merch: 'Oma #LAPLANDVIBES-painatuksemme t-paidoissa, huppareissa ja lippiksissä. Painokauppa ei ole vielä auki, joten täältä ei voi tänään ostaa mitään. Uutiskirje kertoo, kun se avautuu.',
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
    priceNote: (date, partner) => `Hinta luettu kumppanin (${partner}) sivulta ${date}. Lopullisen hinnan määrittää kauppa.`,
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
  faqAnswerFixes: {
    1: 'Kyllä. Duodji on saamenkielinen sana perinteiselle käsityölle, ja pyöreä Sámi Duodji -tavaramerkki on aitoustakuu: se myönnetään saamelaisten tekijöiden perinteisin menetelmin ja materiaalein valmistamille tuotteille. Kun valitset merkillä varustetun tuotteen tai ostat suoraan nimetyltä saamelaiselta käsityöläiseltä tai valtuutetulta myyjältä, tuki menee yhteisölle ja työ on aitoa, ei tehtaassa jäljiteltyä. LaplandGiftsin valikoimassa ei ole yhtään saamelaiskäsityötä: ohjaamme mieluummin duodji-myyjän luo kuin myymme jäljitelmän.',
    2: 'Moni lähettää, ja koko tämä sivusto perustuu siihen: jokaisen tuotteen myy ja postittaa se suomalainen tai pohjoismainen kauppa, joka sen tekee tai varastoi, emme me. Kortti kertoo kaupan toimitusalueen ja ne maat, jotka jäävät ulkopuolelle. Elintarvikkeissa säännöt ovat tiukemmat: poron kuivaliha kulkee EU:n sisällä mutta ei Britanniaan, Yhdysvaltoihin eikä Japaniin. Matkan aikana tilaamisen etu on se, että hauraat esineet matkaavat erikseen eivätkä matkalaukussa. Oma #LaplandVibes-painomallistomme ei ole vielä myynnissä.',
  },
  experience: {
    voucherH2: 'Elämyslahjakortit',
    voucherNote:
      'Ostetaan Elämyslahjat.fi:stä ja toimitetaan sähköpostitse. Saaja varaa päivän itse, ja elämys lunastetaan Lapissa.',
    priceNote: (price) => `Alkaen ${price}`,
    priceAsOf: (asOf) => `Alkaen-hinnat luettu GetYourGuidesta ${asOf}. Lopullinen hinta riippuu valitusta päivästä.`,
    groups: {
      aurora: 'Revontulet',
      husky: 'Huskyajelut',
      reindeer: 'Porot',
      snowmobile: 'Kelkkasafarit',
      nature: 'Luonto ja kansallispuistot',
      sauna: 'Sauna ja avanto',
      santa: 'Joulupukki ja lumi',
      kids: 'Lapsille',
    },
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
  boutique: {
    hubTitle: 'Lapin putiikit',
    hubLead: 'Mistä Lapin käsityöt ostetaan, kaupoista itsestään.',
    hubIntro: 'Jokainen tämän sivun kauppa on lappilainen yritys. Osa toimittaa kotiin, osaan mennään paikan päälle, ja jokainen linkki vie yrityksen omille sivuille.',
    townsH2: 'Paikkakunnittain',
    elsewhereH2: 'Muualla Lapissa',
    filterAll: 'Kaikki',
    filterOnline: 'Toimittaa kotiin',
    filterPhysical: 'Käy paikan päällä',
    onlineBadge: 'VERKKOKAUPPA',
    physicalBadge: 'KIVIJALKA',
    count: (n: number) => (n === 1 ? '1 putiikki' : `${n} putiikkia`),
    visitH2: 'Vieraile paikan päällä',
    shopAtH2: 'Tilaa kotiin',
    outboundCta: 'Siirry kaupan omille sivuille',
    crossSellH2: 'Osta tällaista verkosta',
    crossSellCta: 'Selaa kategoriaa',
    townNames: {
      rovaniemi: 'Rovaniemi', inari: 'Inari', posio: 'Posio',
      levi: 'Levi', sodankyla: 'Sodankylä', yllas: 'Ylläs',
      saariselka: 'Saariselkä', enontekio: 'Enontekiö', utsjoki: 'Utsjoki',
    },
    duodjiH2: 'Näin tunnistat aidon saamelaisen duodjin',
    duodjiBody: 'Duodji on saamelaisten tekemää käsityötä, jossa käytetään perinteisiä materiaaleja ja tekotapoja. Matkamuistoimitaatio kopioi ulkonäön ilman tekijää ja perinnettä. Ero on merkityksellinen sille yhteisölle, jonka kulttuurista on kyse, ja auktorisoitu myyjä osaa kertoa, kuka esineen on tehnyt.',
    duodjiAuthorized: 'Auktorisoitu saamelaiskäsityön myyjä',
    listingH2: 'Omistatko lappilaisen kaupan?',
    listingBody: 'Listaus on ilmainen kaikille lappilaisille yrityksille. Kerro, keitä olette, miksi näkyvyytenne on nyt heikko ja mitä muuttuisi, jos asiakkaat löytäisivät teidät.',
    listingCta: 'Ota yhteyttä',
  },
}

/**
 * 🔴 KÄÄNNÖSMALLI (2.8.2026). Kymmenen kieltä osoitti aiemmin suoraan
 * `en`-objektiin, joten saksankielisellä tuotesivulla luki "Material / Size /
 * Colour" ja kategoriasivun H1 oli englanniksi.
 *
 * `over()` antaa kielelle englannin POHJAKSI ja kirjoittaa annetut lohkot
 * päälle. Lohko on pienin yksikkö: annettu `product` korvaa koko lohkon,
 * antamatta jätetty putoaa englantiin. Näin kesken jäänyt kieli ei koskaan
 * näytä puolikasta lohkoa, jossa puolet riveistä on käännetty ja puolet ei —
 * lukijalle johdonmukainen englanti on parempi kuin sekakieli. Jos haluat
 * kääntää lohkosta vain osan, levitä englanti eteen: `{ ...en.shipping, … }`.
 *
 * Vaiheistus: 2.8. käännettiin ensin `category.names` ja `product.specLabels`,
 * samana päivänä loput. Kaikki kymmenen kieltä kääntävät nyt jokaisen lohkon.
 */
interface Over {
  nav?: ShopCopy['nav']
  home?: ShopCopy['home']
  category?: ShopCopy['category']
  product?: ShopCopy['product']
  faqAnswerFixes?: ShopCopy['faqAnswerFixes']
  experience?: ShopCopy['experience']
  shipping?: ShopCopy['shipping']
  boutique?: ShopCopy['boutique']
}

const over = (o: Over): ShopCopy => ({ ...en, ...o })

const de: ShopCopy = over({
  nav: { shop: 'Shop', guides: 'Geschenkideen', shipping: 'Versand', allProducts: 'Alle Produkte' },
  home: {
    heroKicker: 'Aus Finnland direkt vor Ihre Tür',
    heroTitle: 'Finnische Geschenke und',
    heroTitleAccent: 'Souvenirs aus Lappland',
    heroLead:
      'Finnisches Design und Handwerk, Süßigkeiten und Beerenpulver, an einem Ort gesammelt und dorthin geliefert, wo Sie wohnen. Ob Sie hier Urlaub machen oder von der anderen Seite der Welt bestellen: Jedes Produkt wird von einem finnischen oder nordischen Shop verkauft und verschickt, nicht von uns.',
    categoriesH2: 'Was man in Lappland kauft',
    categoriesSub:
      'Finnisches Design, Kleidung, Handwerk, Süßes, Beerenpulver, unser eigenes Merch und Erlebnisgeschenke. Jede Kategorie öffnet den Shop, der die Ware tatsächlich verschickt.',
    featuredH2: 'Geschenke und Souvenirs aus Partnershops',
    featuredSub:
      'Einige Produkte quer durch die Kategorien. Jeder Preis ist im Partnershop abgelesen und trägt das Datum der Prüfung.',
    valueProp: {
      h2: 'So läuft der Kauf hier',
      sub: 'LaplandGifts ist eine geprüfte Auswahl, keine Kasse. Von dieser Seite bis zum Paket sind es drei Schritte.',
      steps: [
        {
          title: 'Geprüfte Auswahl durchsehen',
          description:
            'Jedes Produkt wurde auf der Seite des Shops geöffnet, bevor es hier aufgenommen wurde. Name, Material und Preis sind von dort abgelesen und nicht von uns geschrieben.',
        },
        {
          title: 'Lieferland prüfen',
          description:
            'Jede Karte sagt, ob dieser Shop dorthin liefert, wo Sie wohnen, und nennt die Länder, die er auslässt. Sie wissen es vor dem Klick und nicht erst an der Kasse.',
        },
        {
          title: 'Im Partnershop kaufen',
          description:
            'Der Button öffnet den Shop, der die Ware verkauft. Zahlung, Lieferung, Rückgabe und Garantie liegen bei ihm, und wir erhalten eine Provision, wenn Sie kaufen.',
        },
      ],
    },
    promises: {
      h2: 'Was LaplandGifts macht',
      sub: 'Wir betreiben kein Lager und keine Kasse. Die Arbeit ist Finden, Prüfen und Zusammentragen.',
      items: [
        {
          title: 'Von Hand ausgesucht',
          description:
            'Jedes Produkt wird einzeln ausgewählt und zuerst auf der Seite des Partners gelesen. Keine Produktfeeds, nichts, was wir nicht selbst geöffnet haben.',
        },
        {
          title: 'Preise an der Quelle abgelesen',
          description:
            'Jeder Preis stammt von der Produktseite des Partners und trägt das Datum der Prüfung. Den Endpreis setzt der Shop.',
        },
        {
          title: 'Produktdaten an einem Ort',
          description:
            'Material, Größe, Inhalt, Zutaten und Allergene so, wie der Partner sie angibt, damit der Vergleich nicht zehn Browser-Tabs kostet.',
        },
        {
          title: 'Es gelten die Bedingungen des Shops',
          description:
            'Sie kaufen im Shop des Partners, also gelten dessen Zahlungs-, Liefer-, Rückgabe- und Garantiebedingungen. Er verschickt auch das Paket.',
        },
      ],
    },
  },
  category: {
    names: {
      design: 'Finnisches Design',
      clothing: 'Kleidung und Strick',
      handicrafts: 'Finnisches Handwerk',
      treats: 'Süßes und Essgeschenke',
      superfoods: 'Arktische Beerenpulver',
      merch: 'Lappland-Shirts und Merch',
      experiences: 'Erlebnisgeschenke aus Lappland',
    },
    intro: {
      design: 'Mumin-Becher, Glas von Iittala, Marimekko und Holzschmuck von Aarikka: das finnische Design, das wirklich mit nach Hause reist. Jedes Stück verschickt der finnische oder nordische Shop, der es verkauft.',
      clothing: 'Hardshelljacken von Halti, Streetwear von Makia aus Helsinki und Merinostrick von North Outdoor, gestrickt in der eigenen Fabrik in Oulu.',
      handicrafts: 'Marttiini-Messer aus Rovaniemi, Campinggeschirr von Kupilka, Leinen von Lapuan Kankurit aus Lapua und Keramik von Pentik aus Posio: Handwerk, das benutzt wird statt im Regal zu stehen.',
      treats: 'Finnische Süßigkeiten und Essgeschenke: Salmiak, Fazer-Schokolade, Tee von Nordqvist und Mumin, Mumin-Kaffee, Rentier-Trockenfleisch und Sanddornmarmelade. Die Einfuhrregeln sind von Land zu Land verschieden, prüfen Sie also den Lieferhinweis auf der Karte.',
      superfoods: 'Arktische Beerenpulver, Chaga und die in Rovaniemi hergestellten Kräuterprodukte von Arctic Warriors, von finnischen Erzeugern.',
      merch: 'Unser eigener #LAPLANDVIBES-Druck auf T-Shirts, Hoodies und Caps. Der Druckshop ist noch nicht offen, hier gibt es heute also nichts zu kaufen. Der Newsletter sagt Bescheid, wenn es so weit ist.',
      experiences: 'Nordlichttouren, Huskyschlitten und das Dorf des Weihnachtsmanns, jetzt als Geschenk gekauft und dann gebucht, wenn die beschenkte Person ein Datum wählt.',
    },
    productCount: (n) => (n === 1 ? '1 Produkt' : `${n} Produkte`),
    emptyCategory:
      'Wir ergänzen diese Kategorie noch. Sehen Sie sich in der Zwischenzeit die anderen Kategorien an oder werfen Sie einen Blick in die Geschenkideen.',
    emptyForCountry: 'Noch keines der Produkte dieser Kategorie wird in Ihr Land geliefert. Wechseln Sie das Lieferland, um alles zu sehen.',
  },
  product: {
    buyAt: (partner) => `Kaufen bei ${partner}`,
    priceFrom: (value, currency) => {
      const eur = approxEur(value, currency)
      return eur ? `ab ${fmt(value, currency, 'de-DE')} (ca. ${eur} €)` : `ab ${fmt(value, currency, 'de-DE')}`
    },
    priceNote: (date, partner) => `Preis am ${date} bei ${partner} abgelesen. Den Endpreis setzt der Shop.`,
    checkoutNote: 'Den Kauf schließen Sie im Partnershop ab. Zahlung und Lieferung wickeln wir nicht ab.',
    illustrativeImage: 'Stimmungsbild, nicht der genaue Artikel. Die Produktfotos stehen auf der Seite des Partners.',
    imageCredit: (partner) => `Produktfoto: ${partner}`,
    related: 'Mehr aus dieser Kategorie',
    backToCategory: 'Zurück zur Kategorie',
    viewProduct: 'Produkt ansehen',
    detailsH2: 'Produktdaten',
    specLabels: {
      material: 'Material',
      size: 'Größe',
      weight: 'Gewicht',
      volume: 'Inhalt',
      origin: 'Herkunft',
      contents: 'Lieferumfang',
      color: 'Farbe',
      care: 'Pflege',
      shelfLife: 'Haltbarkeit',
    },
    ingredientsH3: 'Zutaten',
    allergensH3: 'Allergene',
    detailsSource: (partner, date) => `Produktdaten: ${partner}, gelesen ${date}`,
  },
  faqAnswerFixes: {
    1: 'Ja. Duodji ist das samische Wort für traditionelles Handwerk, und die runde Marke „Sámi Duodji“ ist ein Echtheitszeichen, das für Arbeiten samischer Handwerkerinnen und Handwerker mit traditionellen Methoden und Materialien vergeben wird. Wer ein Stück mit diesem Zeichen wählt oder direkt bei einer namentlich genannten samischen Werkstatt oder einem autorisierten Händler kauft, lässt das Geld in der Gemeinschaft und bekommt echte Arbeit statt einer Fabrikimitation. LaplandGifts führt überhaupt kein samisches Handwerk: Wir verweisen lieber auf einen Duodji-Händler, als Ihnen eine Nachahmung zu verkaufen.',
    2: 'Viele tun das, und genau darauf baut diese Seite: Jedes Produkt hier wird von dem finnischen oder nordischen Shop verkauft und verschickt, der es herstellt oder führt, nie von uns. Jede Karte nennt dessen Liefergebiet und die Länder, die ausgelassen werden. Bei Lebensmitteln sind die Regeln strenger, deshalb reist getrocknetes Rentierfleisch innerhalb der EU, aber nicht ins Vereinigte Königreich, in die Vereinigten Staaten oder nach Japan. Wenn Sie während der Reise online bestellen, reisen zerbrechliche Stücke getrennt statt im Koffer. Unser eigenes #LaplandVibes-Merch ist noch nicht im Verkauf.',
  },
  experience: {
    voucherH2: 'Erlebnis-Geschenkkarten',
    voucherNote:
      'Gekauft bei Elämyslahjat.fi und per E-Mail zugestellt. Die beschenkte Person bucht das Datum, eingelöst wird das Erlebnis in Lappland.',
    priceNote: (price) => `Ab ${price}`,
    priceAsOf: (asOf) => `Startpreise am ${asOf} bei GetYourGuide abgelesen. Der genaue Preis hängt vom gewählten Datum ab.`,
    groups: {
      aurora: 'Nordlichter',
      husky: 'Huskyfahrten',
      reindeer: 'Rentiere',
      snowmobile: 'Schneemobil-Safaris',
      nature: 'Natur und Nationalparks',
      sauna: 'Sauna und Eisbaden',
      santa: 'Weihnachtsmann und Schnee',
      kids: 'Für Kinder',
    },
    duration: (value) => `Dauer ${value}`,
    viewOnGyg: 'Verfügbarkeit ansehen',
  },
  shipping: {
    worldwide: 'Weltweiter Versand',
    euOnly: 'Versand nur nach Europa',
    fiOnly: 'Versand nur innerhalb Finnlands',
    zoneShort: { worldwide: 'Weltweit', eu: 'Nur Europa', fi: 'Nur Finnland' },
    exceptShort: (zone, count) => `${zone}, ${count} ${count === 1 ? 'Ausnahme' : 'Ausnahmen'}`,
    exceptNote: (countries) => `Kein Versand in diese Länder: ${countries.join(', ')}.`,
    selectorLabel: 'Lieferung nach',
    selectorAll: 'Alle Länder',
    title: 'Versand',
    table: { shop: 'Partnershop', area: 'Liefergebiet', checked: 'Geprüft' },
    foodRules: {
      title: 'Lebensmittel und Fleisch: was wohin verschickt werden darf',
      intro: 'Beerenpulver, Marmelade und Schokolade reisen frei. Getrocknetes Rentierfleisch und anderes Fleisch nicht, und die Regeln setzt das Zielland, nicht wir.',
      rows: [
        { area: 'Europäische Union', rule: 'Erlaubt. Fleischerzeugnisse bewegen sich frei zwischen den Mitgliedstaaten.' },
        { area: 'Norwegen', rule: 'Aus der EU erlaubt, bei der Ankunft werden jedoch Zoll und Mehrwertsteuer erhoben.' },
        { area: 'Vereinigtes Königreich', rule: 'Nicht möglich. Seit April 2025 darf Wildfleisch, worunter Rentier fällt, nicht mehr aus der EU eingeführt werden.' },
        { area: 'Vereinigte Staaten', rule: 'Nicht per Post. Reisende dürfen Trockenfleisch aus Finnland mit Herkunftsnachweis mitnehmen, ein Postpaket gilt aber als kommerzielle Einfuhr.' },
        { area: 'Japan', rule: 'Nicht möglich. Fleisch braucht unabhängig vom Transportweg ein amtliches Untersuchungszeugnis, und Postpakete werden ausdrücklich genannt.' },
      ],
    },
  },
  boutique: {
    hubTitle: 'Boutiquen in Lappland',
    hubLead: 'Wo Sie Handwerk aus Lappland kaufen, direkt in den Läden.',
    hubIntro: 'Jeder Laden hier ist ein Unternehmen aus Lappland. Manche versenden weltweit, andere besuchen Sie vor Ort, und jeder Link führt auf die eigene Seite des Unternehmens.',
    townsH2: 'Nach Ort',
    elsewhereH2: 'Anderswo in Lappland',
    filterAll: 'Alle',
    filterOnline: 'Versand zu Ihnen',
    filterPhysical: 'Vor Ort besuchen',
    onlineBadge: 'ONLINESHOP',
    physicalBadge: 'LADEN',
    count: (n: number) => (n === 1 ? '1 Boutique' : `${n} Boutiquen`),
    visitH2: 'Vor Ort besuchen',
    shopAtH2: 'Von zu Hause bestellen',
    outboundCta: 'Zur Website des Ladens',
    crossSellH2: 'So etwas online kaufen',
    crossSellCta: 'Kategorie ansehen',
    townNames: {
      rovaniemi: 'Rovaniemi', inari: 'Inari', posio: 'Posio',
      levi: 'Levi', sodankyla: 'Sodankylä', yllas: 'Ylläs',
      saariselka: 'Saariselkä', enontekio: 'Enontekiö', utsjoki: 'Utsjoki',
    },
    duodjiH2: 'So erkennen Sie echtes samisches Duodji',
    duodjiBody: 'Duodji ist samisches Handwerk, hergestellt von samischen Kunsthandwerkern mit traditionellen Materialien und Techniken. Souvenir-Imitationen kopieren das Aussehen ohne die Person und die Tradition dahinter. Für die Gemeinschaft, um deren Kultur es geht, ist dieser Unterschied wichtig, und ein autorisierter Händler kann Ihnen sagen, wer das Stück gefertigt hat.',
    duodjiAuthorized: 'Autorisierter Händler für samisches Duodji',
    listingH2: 'Führen Sie einen Laden in Lappland?',
    listingBody: 'Ein Eintrag ist für jedes Unternehmen aus Lappland kostenlos. Erzählen Sie uns, wer Sie sind, warum Ihre Sichtbarkeit derzeit schwach ist und was sich ändern würde, wenn Kunden Sie fänden.',
    listingCta: 'Kontakt aufnehmen',
  },
})

const sv: ShopCopy = over({
  nav: { shop: 'Butik', guides: 'Presenttips', shipping: 'Frakt', allProducts: 'Alla produkter' },
  home: {
    heroKicker: 'Från Finland hem till dörren',
    heroTitle: 'Finska presenter och',
    heroTitleAccent: 'souvenirer från Lappland',
    heroLead:
      'Finsk design och finskt hantverk, godis och bärpulver samlade på ett ställe och skickade dit du bor. Oavsett om du är här på semester eller beställer från andra sidan jorden säljs och skickas varje produkt av en finsk eller nordisk butik, inte av oss.',
    categoriesH2: 'Vad man köper i Lappland',
    categoriesSub:
      'Finsk design, kläder, hantverk, godis, bärpulver, vår egen merch och upplevelsepresenter. Varje kategori öppnar den butik som faktiskt skickar varan.',
    featuredH2: 'Presenter och souvenirer från partnerbutiker',
    featuredSub:
      'Några produkter från de olika kategorierna. Varje pris är avläst i partnerbutiken och bär datumet då det kontrollerades.',
    valueProp: {
      h2: 'Så går köpet till',
      sub: 'LaplandGifts är ett kontrollerat urval, inte en kassa. Från den här sidan till paketet är det tre steg.',
      steps: [
        {
          title: 'Bläddra i ett kontrollerat urval',
          description:
            'Varje produkt öppnades på butikens egen sida innan den lades till här. Namnet, materialen och priset är avlästa där, inte skrivna av oss.',
        },
        {
          title: 'Kontrollera leveranslandet',
          description:
            'Varje kort berättar om butiken skickar dit du bor och namnger de länder den lämnar utanför. Du vet det före klicket, inte först i kassan.',
        },
        {
          title: 'Köp i partnerbutiken',
          description:
            'Knappen öppnar den butik som säljer varan. Betalning, leverans, returer och garanti är deras, och vi får provision om du köper.',
        },
      ],
    },
    promises: {
      h2: 'Vad LaplandGifts gör',
      sub: 'Vi driver varken lager eller kassa. Arbetet är att hitta, kontrollera och samla.',
      items: [
        {
          title: 'Utvalt för hand',
          description:
            'Varje produkt väljs en i taget och läses först på partnerns egen sida. Inga produktflöden, ingenting som vi inte själva har öppnat.',
        },
        {
          title: 'Priser avlästa vid källan',
          description:
            'Varje pris kommer från partnerns produktsida och bär datumet då det kontrollerades. Butiken sätter slutpriset.',
        },
        {
          title: 'Produktuppgifter på ett ställe',
          description:
            'Material, storlek, volym, ingredienser och allergener så som partnern uppger dem, så att en jämförelse inte kräver tio webbläsarflikar.',
        },
        {
          title: 'Butikens egna villkor gäller',
          description:
            'Du köper i partnerns butik, så deras villkor för betalning, leverans, retur och garanti är de som gäller. Det är också de som skickar paketet.',
        },
      ],
    },
  },
  category: {
    names: {
      design: 'Finsk design',
      clothing: 'Kläder och stickat',
      handicrafts: 'Finskt hantverk',
      treats: 'Sötsaker och matgåvor',
      superfoods: 'Arktiska bärpulver',
      merch: 'Lapplandströjor och merch',
      experiences: 'Upplevelsepresenter från Lappland',
    },
    intro: {
      design: 'Muminmuggar, glas från Iittala, Marimekko och träsmycken från Aarikka: den finska design som faktiskt följer med hem. Varje sak skickas av den finska eller nordiska butik som säljer den.',
      clothing: 'Skaljackor från Halti, streetwear från Makia i Helsingfors och merinostickat från North Outdoor, stickat i egen fabrik i Uleåborg.',
      handicrafts: 'Marttiinis knivar från Rovaniemi, Kupilkas friluftskärl, linne från Lapuan Kankurit i Lappo och keramik från Pentik i Posio: hantverk som används i stället för att stå i en hylla.',
      treats: 'Finska sötsaker och matgåvor: salmiak, choklad från Fazer, te från Nordqvist och Mumin, Mumin-kaffe, torkat renkött och havtornssylt. Införselreglerna skiljer sig åt mellan länder, så läs fraktnoteringen på kortet.',
      superfoods: 'Arktiska bärpulver, chaga och Arctic Warriors örtprodukter tillverkade i Rovaniemi, från finska producenter.',
      merch: 'Vårt eget #LAPLANDVIBES-tryck på t-shirtar, hoodies och kepsar. Tryckbutiken är ännu inte öppen, så här finns inget att köpa i dag. Nyhetsbrevet berättar när den öppnar.',
      experiences: 'Norrskensturer, hundspann och Tomtens by, köpta som present nu och bokade när mottagaren väljer ett datum.',
    },
    productCount: (n) => (n === 1 ? '1 produkt' : `${n} produkter`),
    emptyCategory:
      'Vi fyller fortfarande på den här kategorin. Titta under tiden i de andra kategorierna eller läs presenttipsen.',
    emptyForCountry: 'Ingen av produkterna i den här kategorin skickas ännu till ditt land. Byt leveransland för att se allt.',
  },
  product: {
    buyAt: (partner) => `Köp hos ${partner}`,
    priceFrom: (value, currency) => {
      const eur = approxEur(value, currency)
      return eur ? `från ${fmt(value, currency, 'sv-SE')} (cirka ${eur} €)` : `från ${fmt(value, currency, 'sv-SE')}`
    },
    priceNote: (date, partner) => `Priset avläst hos ${partner} den ${date}. Butiken sätter slutpriset.`,
    checkoutNote: 'Du slutför köpet i partnerbutiken. Vi hanterar varken din betalning eller din leverans.',
    illustrativeImage: 'Stämningsbild, inte just den här varan. Produktbilderna finns på partnerns sida.',
    imageCredit: (partner) => `Produktbild: ${partner}`,
    related: 'Mer i den här kategorin',
    backToCategory: 'Tillbaka till kategorin',
    viewProduct: 'Visa produkt',
    detailsH2: 'Produktuppgifter',
    specLabels: {
      material: 'Material',
      size: 'Storlek',
      weight: 'Vikt',
      volume: 'Volym',
      origin: 'Ursprung',
      contents: 'Innehåll',
      color: 'Färg',
      care: 'Skötsel',
      shelfLife: 'Hållbarhet',
    },
    ingredientsH3: 'Ingredienser',
    allergensH3: 'Allergener',
    detailsSource: (partner, date) => `Produktuppgifter: ${partner}, avlästa ${date}`,
  },
  faqAnswerFixes: {
    1: 'Ja. Duodji är det samiska ordet för traditionellt hantverk, och det runda varumärket Sámi Duodji är ett äkthetsmärke som ges till hantverk gjort av samiska hantverkare med traditionella metoder och material. Att välja en vara med märket, eller att köpa direkt av en namngiven samisk hantverkare eller en auktoriserad återförsäljare, håller pengarna kvar i samhället och arbetet äkta i stället för en fabriksimitation. LaplandGifts har inget samiskt hantverk alls i sortimentet: vi hänvisar hellre till en duodji-säljare än säljer dig en efterapning.',
    2: 'Många gör det, och hela den här sajten bygger på det: varje produkt här säljs och postas av den finska eller nordiska butik som tillverkar eller lagerhåller den, aldrig av oss. Varje kort namnger butikens leveransområde och de länder den lämnar utanför, och för livsmedel är reglerna strängare, så torkat renkött reser inom EU men inte till Storbritannien, USA eller Japan. Att beställa på nätet under resan betyder att ömtåliga saker reser för sig i stället för i bagaget. Vår egen #LaplandVibes-merch är ännu inte till salu.',
  },
  experience: {
    voucherH2: 'Upplevelsepresentkort',
    voucherNote:
      'Köps från Elämyslahjat.fi och levereras per e-post. Mottagaren bokar datumet, och upplevelsen löses in i Lappland.',
    priceNote: (price) => `Från ${price}`,
    priceAsOf: (asOf) => `Startpriserna avlästa på GetYourGuide ${asOf}. Det exakta priset beror på vilket datum du väljer.`,
    groups: {
      aurora: 'Norrsken',
      husky: 'Hundspann',
      reindeer: 'Renar',
      snowmobile: 'Skotersafarier',
      nature: 'Natur och nationalparker',
      sauna: 'Bastu och isbad',
      santa: 'Tomten och snön',
      kids: 'För barn',
    },
    duration: (value) => `Längd ${value}`,
    viewOnGyg: 'Se tillgänglighet',
  },
  shipping: {
    worldwide: 'Frakt över hela världen',
    euOnly: 'Frakt endast inom Europa',
    fiOnly: 'Frakt endast inom Finland',
    zoneShort: { worldwide: 'Hela världen', eu: 'Endast Europa', fi: 'Endast Finland' },
    // Ruotsissa "undantag" on sama yksikössä ja monikossa, joten ei ternaaria.
    exceptShort: (zone, count) => `${zone}, ${count} undantag`,
    exceptNote: (countries) => `Skickas inte till dessa länder: ${countries.join(', ')}.`,
    selectorLabel: 'Leverans till',
    selectorAll: 'Alla länder',
    title: 'Frakt',
    table: { shop: 'Partnerbutik', area: 'Leveransområde', checked: 'Kontrollerat' },
    foodRules: {
      title: 'Mat och kött: vad som får postas vart',
      intro: 'Bärpulver, sylt och choklad reser fritt. Torkat renkött och annat kött gör det inte, och reglerna sätts av mottagarlandet, inte av oss.',
      rows: [
        { area: 'Europeiska unionen', rule: 'Tillåtet. Köttprodukter rör sig fritt mellan medlemsländerna.' },
        { area: 'Norge', rule: 'Tillåtet från EU, men tull och moms tas ut vid ankomsten.' },
        { area: 'Storbritannien', rule: 'Går inte. Sedan april 2025 får hjortkött, som omfattar ren, inte föras in från EU.' },
        { area: 'USA', rule: 'Inte per post. En resenär får bära med sig torkat kött från Finland med ursprungshandlingar, men ett postpaket räknas som kommersiell import.' },
        { area: 'Japan', rule: 'Går inte. Kött kräver ett officiellt besiktningsintyg oavsett transportsätt, och postpaket nämns särskilt.' },
      ],
    },
  },
  boutique: {
    hubTitle: 'Butiker i Lappland',
    hubLead: 'Var du köper lappländskt hantverk, i butikerna själva.',
    hubIntro: 'Varje butik här är ett lappländskt företag. Vissa skickar hem till dig, andra besöker du på plats, och varje länk går till företagets egen webbplats.',
    townsH2: 'Efter ort',
    elsewhereH2: 'På andra håll i Lappland',
    filterAll: 'Alla',
    filterOnline: 'Skickar hem',
    filterPhysical: 'Besök på plats',
    onlineBadge: 'NÄTBUTIK',
    physicalBadge: 'BUTIK PÅ PLATS',
    count: (n: number) => (n === 1 ? '1 butik' : `${n} butiker`),
    visitH2: 'Besök på plats',
    shopAtH2: 'Beställ hem',
    outboundCta: 'Gå till deras webbplats',
    crossSellH2: 'Köp sådant här på nätet',
    crossSellCta: 'Bläddra i kategorin',
    townNames: {
      rovaniemi: 'Rovaniemi', inari: 'Inari', posio: 'Posio',
      levi: 'Levi', sodankyla: 'Sodankylä', yllas: 'Ylläs',
      saariselka: 'Saariselkä', enontekio: 'Enontekiö', utsjoki: 'Utsjoki',
    },
    duodjiH2: 'Så känner du igen äkta samisk duodji',
    duodjiBody: 'Duodji är samiskt hantverk tillverkat av samiska hantverkare med traditionella material och tekniker. Souvenirimitationer kopierar utseendet utan hantverkaren och traditionen bakom. Skillnaden betyder något för den gemenskap vars kultur det handlar om, och en auktoriserad återförsäljare kan berätta vem som har gjort föremålet.',
    duodjiAuthorized: 'Auktoriserad återförsäljare av samisk duodji',
    listingH2: 'Driver du en butik i Lappland?',
    listingBody: 'En listning är gratis för alla lappländska företag. Berätta vilka ni är, varför er synlighet är svag just nu och vad som skulle förändras om kunderna hittade er.',
    listingCta: 'Ta kontakt',
  },
})

const fr: ShopCopy = over({
  nav: { shop: 'Boutique', guides: 'Idées cadeaux', shipping: 'Livraison', allProducts: 'Tous les produits' },
  home: {
    heroKicker: 'De la Finlande jusqu’à votre porte',
    heroTitle: 'Cadeaux finlandais et',
    heroTitleAccent: 'souvenirs de Laponie',
    heroLead:
      'Design et artisanat finlandais, confiseries et poudres de baies, réunis au même endroit et livrés là où vous habitez. Que vous soyez ici en vacances ou que vous commandiez de l’autre bout du monde, chaque produit est vendu et expédié par une boutique finlandaise ou nordique, pas par nous.',
    categoriesH2: 'Que rapporter de Laponie',
    categoriesSub:
      'Design finlandais, vêtements, artisanat, douceurs, poudres de baies, notre propre merch et des expériences à offrir. Chaque catégorie ouvre la boutique qui expédie réellement l’article.',
    featuredH2: 'Cadeaux et souvenirs des boutiques partenaires',
    featuredSub:
      'Quelques produits pris dans les différentes catégories. Chaque prix est relevé dans la boutique partenaire et porte la date de sa vérification.',
    valueProp: {
      h2: 'Comment l’achat se passe ici',
      sub: 'LaplandGifts est une sélection vérifiée, pas une caisse. De cette page au colis, il y a trois étapes.',
      steps: [
        {
          title: 'Parcourir une sélection vérifiée',
          description:
            'Chaque produit a été ouvert sur la page de la boutique avant d’être ajouté ici. Le nom, les matières et le prix y sont relevés, ils ne sont pas écrits par nous.',
        },
        {
          title: 'Vérifier le pays de livraison',
          description:
            'Chaque fiche indique si cette boutique livre là où vous habitez et nomme les pays qu’elle laisse de côté. Vous le savez avant de cliquer, pas au moment de payer.',
        },
        {
          title: 'Acheter dans la boutique partenaire',
          description:
            'Le bouton ouvre la boutique qui vend l’article. Le paiement, la livraison, les retours et la garantie lui appartiennent, et nous touchons une commission si vous achetez.',
        },
      ],
    },
    promises: {
      h2: 'Ce que fait LaplandGifts',
      sub: 'Nous n’avons ni entrepôt ni caisse. Le travail consiste à chercher, vérifier et rassembler.',
      items: [
        {
          title: 'Choisi à la main',
          description:
            'Chaque produit est choisi un par un et lu d’abord sur la page du partenaire. Aucun flux produit, rien que nous n’ayons ouvert nous-mêmes.',
        },
        {
          title: 'Prix relevés à la source',
          description:
            'Chaque prix vient de la fiche produit du partenaire et porte la date de sa vérification. C’est la boutique qui fixe le prix final.',
        },
        {
          title: 'Les informations produit au même endroit',
          description:
            'Matière, taille, contenance, ingrédients et allergènes tels que le partenaire les déclare, pour que comparer ne demande pas dix onglets.',
        },
        {
          title: 'Ce sont les conditions de la boutique qui s’appliquent',
          description:
            'Vous achetez dans la boutique du partenaire : ses conditions de paiement, de livraison, de retour et de garantie sont celles qui comptent. C’est aussi elle qui envoie le colis.',
        },
      ],
    },
  },
  category: {
    names: {
      design: 'Design finlandais',
      clothing: 'Vêtements et tricots',
      handicrafts: 'Artisanat finlandais',
      treats: 'Douceurs et gourmandises',
      superfoods: 'Poudres de baies arctiques',
      merch: 'T-shirts et merch de Laponie',
      experiences: 'Expériences à offrir en Laponie',
    },
    intro: {
      design: 'Mugs Moomin, verre Iittala, Marimekko et bijoux en bois Aarikka : le design finlandais qui rentre vraiment à la maison. Chaque pièce part de la boutique finlandaise ou nordique qui la vend.',
      clothing: 'Vestes coupe-vent Halti, streetwear Makia venu d’Helsinki et tricots mérinos North Outdoor, tricotés dans leur propre filature à Oulu.',
      handicrafts: 'Couteaux Marttiini de Rovaniemi, vaisselle de camp Kupilka, lin Lapuan Kankurit de Lapua et céramique Pentik de Posio : de l’artisanat qui sert au lieu de rester sur une étagère.',
      treats: 'Douceurs et cadeaux gourmands finlandais : salmiakki, chocolat Fazer, thés Nordqvist et Moomin, café Moomin, viande de renne séchée et confiture d’argousier. Les règles d’importation varient selon les pays : lisez la note de livraison sur chaque fiche.',
      superfoods: 'Poudres de baies arctiques, chaga et produits à base de plantes Arctic Warriors fabriqués à Rovaniemi, chez des producteurs finlandais.',
      merch: 'Notre propre impression #LAPLANDVIBES sur t-shirts, sweats et casquettes. L’atelier d’impression n’est pas encore ouvert, il n’y a donc rien à acheter ici aujourd’hui. La newsletter préviendra.',
      experiences: 'Sorties aurores boréales, traîneaux à chiens et village du père Noël, achetés en cadeau maintenant et réservés quand la personne choisit sa date.',
    },
    productCount: (n) => (n === 1 ? '1 produit' : `${n} produits`),
    emptyCategory:
      'Nous complétons encore cette catégorie. En attendant, parcourez les autres catégories ou consultez les idées cadeaux.',
    emptyForCountry: 'Aucun produit de cette catégorie n’est encore livré dans votre pays. Changez de pays de livraison pour tout voir.',
  },
  product: {
    buyAt: (partner) => `Acheter chez ${partner}`,
    priceFrom: (value, currency) => {
      const eur = approxEur(value, currency)
      return eur ? `à partir de ${fmt(value, currency, 'fr-FR')} (environ ${eur} €)` : `à partir de ${fmt(value, currency, 'fr-FR')}`
    },
    priceNote: (date, partner) => `Prix relevé chez ${partner} le ${date}. C’est la boutique qui fixe le prix final.`,
    checkoutNote: 'Vous finalisez l’achat dans la boutique partenaire. Nous ne gérons ni votre paiement ni votre livraison.',
    illustrativeImage: 'Photo d’ambiance, pas l’article exact. Les photos du produit sont sur la page du partenaire.',
    imageCredit: (partner) => `Photo produit : ${partner}`,
    related: 'Plus dans cette catégorie',
    backToCategory: 'Retour à la catégorie',
    viewProduct: 'Voir le produit',
    detailsH2: 'Informations produit',
    specLabels: {
      material: 'Matière',
      size: 'Taille',
      weight: 'Poids',
      volume: 'Volume',
      origin: 'Origine',
      contents: 'Contenu',
      color: 'Couleur',
      care: 'Entretien',
      shelfLife: 'Conservation',
    },
    ingredientsH3: 'Ingrédients',
    allergensH3: 'Allergènes',
    detailsSource: (partner, date) => `Informations produit : ${partner}, relevées le ${date}`,
  },
  faqAnswerFixes: {
    1: 'Oui. Duodji est le mot sami qui désigne l’artisanat traditionnel, et la marque ronde « Sámi Duodji » est un label d’authenticité accordé aux ouvrages réalisés par des artisans samis selon des méthodes et des matériaux traditionnels. Choisir une pièce qui porte ce label, ou acheter directement auprès d’un artisan sami nommé ou d’un revendeur autorisé, garde l’argent dans la communauté et le travail authentique plutôt qu’imité en usine. LaplandGifts ne propose aucun artisanat sami : nous préférons vous indiquer un vendeur duodji plutôt que vous vendre une copie.',
    2: 'Beaucoup le font, et c’est ce qui fait tourner ce site : chaque produit présenté ici est vendu et posté par la boutique finlandaise ou nordique qui le fabrique ou le stocke, jamais par nous. Chaque fiche nomme la zone de livraison de cette boutique et les pays qu’elle laisse de côté, et les denrées alimentaires sont plus strictes : la viande de renne séchée circule dans l’Union européenne mais pas vers le Royaume-Uni, les États-Unis ni le Japon. Commander en ligne pendant le voyage permet aux objets fragiles de voyager à part plutôt que dans la valise. Notre propre merch imprimé #LaplandVibes n’est pas encore en vente.',
  },
  experience: {
    voucherH2: 'Cartes cadeaux expérience',
    voucherNote:
      'Achetées sur Elämyslahjat.fi et livrées par e-mail. La personne qui les reçoit choisit la date, et l’expérience se vit en Laponie.',
    priceNote: (price) => `À partir de ${price}`,
    priceAsOf: (asOf) => `Prix de départ relevés sur GetYourGuide le ${asOf}. Le prix exact dépend de la date choisie.`,
    groups: {
      aurora: 'Aurores boréales',
      husky: 'Traîneaux à chiens',
      reindeer: 'Rennes',
      snowmobile: 'Safaris en motoneige',
      nature: 'Nature et parcs nationaux',
      sauna: 'Sauna et bain glacé',
      santa: 'Père Noël et neige',
      kids: 'Pour les enfants',
    },
    duration: (value) => `Durée ${value}`,
    viewOnGyg: 'Voir les disponibilités',
  },
  shipping: {
    worldwide: 'Livraison dans le monde entier',
    euOnly: 'Livraison en Europe uniquement',
    fiOnly: 'Livraison en Finlande uniquement',
    zoneShort: { worldwide: 'Monde entier', eu: 'Europe uniquement', fi: 'Finlande uniquement' },
    exceptShort: (zone, count) => `${zone}, ${count} ${count === 1 ? 'exception' : 'exceptions'}`,
    exceptNote: (countries) => `Pas de livraison vers ces pays : ${countries.join(', ')}.`,
    selectorLabel: 'Livrer en',
    selectorAll: 'Tous les pays',
    title: 'Livraison',
    table: { shop: 'Boutique partenaire', area: 'Zone de livraison', checked: 'Vérifié' },
    foodRules: {
      title: 'Alimentation et viande : ce qui peut être posté où',
      intro: 'Les poudres de baies, la confiture et le chocolat voyagent librement. La viande de renne séchée et les autres viandes non, et les règles sont fixées par le pays de destination, pas par nous.',
      rows: [
        { area: 'Union européenne', rule: 'Autorisé. Les produits carnés circulent librement entre les États membres.' },
        { area: 'Norvège', rule: 'Autorisé depuis l’Union européenne, mais des droits de douane et la TVA sont perçus à l’arrivée.' },
        { area: 'Royaume-Uni', rule: 'Impossible. Depuis avril 2025, la viande de cervidé, qui inclut le renne, ne peut plus être introduite depuis l’Union européenne.' },
        { area: 'États-Unis', rule: 'Pas par la poste. Un voyageur peut emporter de la viande séchée de Finlande avec les documents d’origine, mais un colis postal compte comme une importation commerciale.' },
        { area: 'Japon', rule: 'Impossible. La viande exige un certificat d’inspection officiel quel que soit le mode de transport, et les colis postaux sont nommément visés.' },
      ],
    },
  },
  boutique: {
    hubTitle: 'Boutiques de Laponie',
    hubLead: 'Où acheter l\'artisanat lapon, dans les boutiques elles-mêmes.',
    hubIntro: 'Chaque boutique de cette page est une entreprise laponne. Certaines expédient chez vous, d\'autres se visitent sur place, et chaque lien mène au site de l\'entreprise.',
    townsH2: 'Par localité',
    elsewhereH2: 'Ailleurs en Laponie',
    filterAll: 'Toutes',
    filterOnline: 'Livraison à domicile',
    filterPhysical: 'À visiter sur place',
    onlineBadge: 'BOUTIQUE EN LIGNE',
    physicalBadge: 'SUR PLACE',
    count: (n: number) => (n === 1 ? '1 boutique' : `${n} boutiques`),
    visitH2: 'À visiter sur place',
    shopAtH2: 'Commander depuis chez vous',
    outboundCta: 'Aller sur leur site',
    crossSellH2: 'Acheter ce type d\'article en ligne',
    crossSellCta: 'Parcourir la catégorie',
    townNames: {
      rovaniemi: 'Rovaniemi', inari: 'Inari', posio: 'Posio',
      levi: 'Levi', sodankyla: 'Sodankylä', yllas: 'Ylläs',
      saariselka: 'Saariselkä', enontekio: 'Enontekiö', utsjoki: 'Utsjoki',
    },
    duodjiH2: 'Comment reconnaître le vrai duodji sami',
    duodjiBody: 'Le duodji est l\'artisanat sami, réalisé par des artisans samis avec des matériaux et des techniques traditionnels. Les imitations pour touristes copient l\'apparence sans l\'artisan ni la tradition. Cette différence compte pour la communauté dont il s\'agit, et un vendeur agréé peut vous dire qui a fabriqué la pièce.',
    duodjiAuthorized: 'Vendeur agréé de duodji sami',
    listingH2: 'Vous tenez une boutique en Laponie ?',
    listingBody: 'L\'inscription est gratuite pour toute entreprise laponne. Dites-nous qui vous êtes, pourquoi votre visibilité est faible aujourd\'hui et ce qui changerait si les clients vous trouvaient.',
    listingCta: 'Nous contacter',
  },
})

const es: ShopCopy = over({
  nav: { shop: 'Tienda', guides: 'Ideas de regalo', shipping: 'Envíos', allProducts: 'Todos los productos' },
  home: {
    heroKicker: 'De Finlandia hasta tu puerta',
    heroTitle: 'Regalos finlandeses y',
    heroTitleAccent: 'souvenirs de Laponia',
    heroLead:
      'Diseño y artesanía de Finlandia, dulces y polvos de bayas, reunidos en un solo sitio y enviados donde vives. Tanto si estás aquí de vacaciones como si compras desde el otro lado del mundo, cada producto lo vende y lo envía una tienda finlandesa o nórdica, no nosotros.',
    categoriesH2: 'Qué comprar en Laponia',
    categoriesSub:
      'Diseño finlandés, ropa, artesanía, dulces, polvos de bayas, nuestra propia merch y experiencias para regalar. Cada categoría abre la tienda que realmente envía el artículo.',
    featuredH2: 'Regalos y souvenirs de tiendas asociadas',
    featuredSub:
      'Unos cuantos productos de todas las categorías. Cada precio está leído en la tienda asociada y lleva la fecha en que se comprobó.',
    valueProp: {
      h2: 'Cómo se compra aquí',
      sub: 'LaplandGifts es una selección comprobada, no una caja. De esta página al paquete hay tres pasos.',
      steps: [
        {
          title: 'Explora una selección comprobada',
          description:
            'Cada producto se abrió en la página de la propia tienda antes de añadirlo aquí. El nombre, los materiales y el precio están leídos ahí, no escritos por nosotros.',
        },
        {
          title: 'Comprueba el país de entrega',
          description:
            'Cada ficha dice si esa tienda envía a donde vives y nombra los países que deja fuera. Lo sabes antes de hacer clic, no al pagar.',
        },
        {
          title: 'Compra en la tienda asociada',
          description:
            'El botón abre la tienda que vende el artículo. El pago, el envío, las devoluciones y la garantía son suyos, y nosotros cobramos una comisión si compras.',
        },
      ],
    },
    promises: {
      h2: 'Qué hace LaplandGifts',
      sub: 'No tenemos almacén ni caja. El trabajo es buscar, comprobar y reunir.',
      items: [
        {
          title: 'Elegido a mano',
          description:
            'Cada producto se elige de uno en uno y se lee primero en la página del socio. Sin catálogos automáticos, nada que no hayamos abierto nosotros mismos.',
        },
        {
          title: 'Precios leídos en la fuente',
          description:
            'Cada precio viene de la ficha del socio y lleva la fecha en que se comprobó. La tienda fija el precio final.',
        },
        {
          title: 'La información del producto en un sitio',
          description:
            'Material, talla, volumen, ingredientes y alérgenos tal y como los declara el socio, para que comparar no cueste diez pestañas del navegador.',
        },
        {
          title: 'Se aplican las condiciones de la tienda',
          description:
            'Compras en la tienda del socio, así que sus condiciones de pago, envío, devolución y garantía son las que valen. También es quien manda el paquete.',
        },
      ],
    },
  },
  category: {
    names: {
      design: 'Diseño finlandés',
      clothing: 'Ropa y punto',
      handicrafts: 'Artesanía finlandesa',
      treats: 'Dulces y regalos gourmet',
      superfoods: 'Polvos de bayas árticas',
      merch: 'Camisetas y merch de Laponia',
      experiences: 'Experiencias de Laponia para regalar',
    },
    intro: {
      design: 'Tazas Moomin, vidrio de Iittala, Marimekko y joyas de madera de Aarikka: el diseño finlandés que de verdad se va a casa contigo. Cada pieza sale de la tienda finlandesa o nórdica que la vende.',
      clothing: 'Chaquetas técnicas de Halti, streetwear de Makia desde Helsinki y punto de merino de North Outdoor, tejido en su propia fábrica de Oulu.',
      handicrafts: 'Cuchillos Marttiini de Rovaniemi, vajilla de camping Kupilka, lino de Lapuan Kankurit desde Lapua y cerámica de Pentik desde Posio: artesanía para usar, no para la estantería.',
      treats: 'Dulces y regalos gourmet finlandeses: salmiakki, chocolate de Fazer, tés de Nordqvist y Moomin, café Moomin, cecina de reno y mermelada de espino amarillo. Las normas de importación cambian según el país, así que mira la nota de envío de cada ficha.',
      superfoods: 'Polvos de bayas árticas, chaga y productos de hierbas de Arctic Warriors hechos en Rovaniemi, de productores finlandeses.',
      merch: 'Nuestra propia estampación #LAPLANDVIBES en camisetas, sudaderas y gorras. El taller de impresión aún no está abierto, así que hoy no hay nada que comprar aquí. La newsletter avisará cuando lo esté.',
      experiences: 'Salidas a ver auroras boreales, trineos de huskies y el pueblo de Papá Noel, comprados como regalo ahora y reservados cuando la persona elija la fecha.',
    },
    productCount: (n) => (n === 1 ? '1 producto' : `${n} productos`),
    emptyCategory:
      'Todavía estamos completando esta categoría. Mientras tanto, mira las otras categorías o las ideas de regalo.',
    emptyForCountry: 'Ninguno de los productos de esta categoría llega todavía a tu país. Cambia el país de entrega para verlo todo.',
  },
  product: {
    buyAt: (partner) => `Comprar en ${partner}`,
    priceFrom: (value, currency) => {
      const eur = approxEur(value, currency)
      return eur ? `desde ${fmt(value, currency, 'es-ES')} (unos ${eur} €)` : `desde ${fmt(value, currency, 'es-ES')}`
    },
    priceNote: (date, partner) => `Precio leído en ${partner} el ${date}. La tienda fija el precio final.`,
    checkoutNote: 'La compra se completa en la tienda asociada. Nosotros no gestionamos tu pago ni tu envío.',
    illustrativeImage: 'Imagen ilustrativa, no es el artículo exacto. Las fotos del producto están en la página del socio.',
    imageCredit: (partner) => `Foto del producto: ${partner}`,
    related: 'Más de esta categoría',
    backToCategory: 'Volver a la categoría',
    viewProduct: 'Ver producto',
    detailsH2: 'Información del producto',
    specLabels: {
      material: 'Material',
      size: 'Talla',
      weight: 'Peso',
      volume: 'Volumen',
      origin: 'Origen',
      contents: 'Contenido',
      color: 'Color',
      care: 'Cuidados',
      shelfLife: 'Conservación',
    },
    ingredientsH3: 'Ingredientes',
    allergensH3: 'Alérgenos',
    detailsSource: (partner, date) => `Información del producto: ${partner}, leída el ${date}`,
  },
  faqAnswerFixes: {
    1: 'Sí. Duodji es la palabra sami para la artesanía tradicional, y la marca redonda «Sámi Duodji» es un sello de autenticidad que se concede a las piezas hechas por artesanos samis con métodos y materiales tradicionales. Elegir una pieza con ese sello, o comprar directamente a un artesano sami con nombre propio o a un vendedor autorizado, deja el dinero en la comunidad y mantiene el trabajo auténtico en lugar de una imitación de fábrica. LaplandGifts no vende ninguna artesanía sami: preferimos indicarte un vendedor duodji antes que venderte una copia.',
    2: 'Muchas lo hacen, y en eso se basa este sitio: cada producto de aquí lo vende y lo envía la tienda finlandesa o nórdica que lo fabrica o lo tiene en stock, nunca nosotros. Cada ficha nombra la zona de entrega de esa tienda y los países que deja fuera, y con los alimentos las normas son más estrictas: la cecina de reno viaja dentro de la Unión Europea pero no al Reino Unido, Estados Unidos ni Japón. Comprar por internet durante el viaje hace que lo frágil viaje aparte en vez de en la maleta. Nuestra propia merch estampada #LaplandVibes todavía no está a la venta.',
  },
  experience: {
    voucherH2: 'Tarjetas regalo de experiencias',
    voucherNote:
      'Se compran en Elämyslahjat.fi y llegan por correo electrónico. Quien la recibe reserva la fecha, y la experiencia se disfruta en Laponia.',
    priceNote: (price) => `Desde ${price}`,
    priceAsOf: (asOf) => `Precios de partida leídos en GetYourGuide el ${asOf}. El precio exacto depende de la fecha que elijas.`,
    groups: {
      aurora: 'Auroras boreales',
      husky: 'Trineos de huskies',
      reindeer: 'Renos',
      snowmobile: 'Safaris en motonieve',
      nature: 'Naturaleza y parques nacionales',
      sauna: 'Sauna y baño helado',
      santa: 'Papá Noel y nieve',
      kids: 'Para niños',
    },
    duration: (value) => `Duración ${value}`,
    viewOnGyg: 'Ver disponibilidad',
  },
  shipping: {
    worldwide: 'Envío a todo el mundo',
    euOnly: 'Envío solo a Europa',
    fiOnly: 'Envío solo dentro de Finlandia',
    zoneShort: { worldwide: 'Todo el mundo', eu: 'Solo Europa', fi: 'Solo Finlandia' },
    exceptShort: (zone, count) => `${zone}, ${count} ${count === 1 ? 'excepción' : 'excepciones'}`,
    exceptNote: (countries) => `No se envía a estos países: ${countries.join(', ')}.`,
    selectorLabel: 'Enviar a',
    selectorAll: 'Todos los países',
    title: 'Envíos',
    table: { shop: 'Tienda asociada', area: 'Zona de entrega', checked: 'Comprobado' },
    foodRules: {
      title: 'Comida y carne: qué se puede enviar y adónde',
      intro: 'Los polvos de bayas, la mermelada y el chocolate viajan sin problema. La cecina de reno y el resto de carnes no, y las normas las pone el país de destino, no nosotros.',
      rows: [
        { area: 'Unión Europea', rule: 'Permitido. Los productos cárnicos circulan libremente entre los Estados miembros.' },
        { area: 'Noruega', rule: 'Permitido desde la Unión Europea, pero a la llegada se cobran aranceles e IVA.' },
        { area: 'Reino Unido', rule: 'No es posible. Desde abril de 2025 la carne de cérvido, que incluye el reno, no puede entrar desde la Unión Europea.' },
        { area: 'Estados Unidos', rule: 'Por correo no. Un viajero puede llevar carne seca de Finlandia con documentos de origen, pero un paquete postal cuenta como importación comercial.' },
        { area: 'Japón', rule: 'No es posible. La carne necesita un certificado oficial de inspección sea cual sea el transporte, y los paquetes postales se mencionan expresamente.' },
      ],
    },
  },
  boutique: {
    hubTitle: 'Boutiques de Laponia',
    hubLead: 'Dónde comprar artesanía lapona, en las propias tiendas.',
    hubIntro: 'Cada tienda de esta página es una empresa lapona. Algunas envían a su casa, otras se visitan en persona, y cada enlace lleva a la web de la empresa.',
    townsH2: 'Por localidad',
    elsewhereH2: 'En otros puntos de Laponia',
    filterAll: 'Todas',
    filterOnline: 'Envían a casa',
    filterPhysical: 'Visitar en persona',
    onlineBadge: 'TIENDA ONLINE',
    physicalBadge: 'TIENDA FÍSICA',
    count: (n: number) => (n === 1 ? '1 tienda' : `${n} tiendas`),
    visitH2: 'Visitar en persona',
    shopAtH2: 'Pedir desde casa',
    outboundCta: 'Ir a su web',
    crossSellH2: 'Comprar algo así por internet',
    crossSellCta: 'Ver la categoría',
    townNames: {
      rovaniemi: 'Rovaniemi', inari: 'Inari', posio: 'Posio',
      levi: 'Levi', sodankyla: 'Sodankylä', yllas: 'Ylläs',
      saariselka: 'Saariselkä', enontekio: 'Enontekiö', utsjoki: 'Utsjoki',
    },
    duodjiH2: 'Cómo reconocer el duodji sami auténtico',
    duodjiBody: 'El duodji es la artesanía sami, hecha por artesanos samis con materiales y técnicas tradicionales. Las imitaciones de souvenir copian el aspecto sin el artesano ni la tradición. La diferencia importa a la comunidad de cuya cultura se trata, y un vendedor autorizado puede decirle quién hizo la pieza.',
    duodjiAuthorized: 'Vendedor autorizado de duodji sami',
    listingH2: '¿Tiene una tienda en Laponia?',
    listingBody: 'El listado es gratuito para cualquier empresa lapona. Cuéntenos quiénes son, por qué su visibilidad es baja ahora y qué cambiaría si los clientes les encontraran.',
    listingCta: 'Contactar',
  },
})

const it: ShopCopy = over({
  nav: { shop: 'Negozio', guides: 'Idee regalo', shipping: 'Spedizioni', allProducts: 'Tutti i prodotti' },
  home: {
    heroKicker: 'Dalla Finlandia fino alla tua porta',
    heroTitle: 'Regali finlandesi e',
    heroTitleAccent: 'souvenir dalla Lapponia',
    heroLead:
      'Design e artigianato finlandesi, dolci e polveri di bacche, raccolti in un unico posto e spediti dove vivi. Che tu sia qui in vacanza o stia ordinando dall’altra parte del mondo, ogni prodotto è venduto e spedito da un negozio finlandese o nordico, non da noi.',
    categoriesH2: 'Cosa comprare in Lapponia',
    categoriesSub:
      'Design finlandese, abbigliamento, artigianato, dolci, polveri di bacche, il nostro merch e le esperienze da regalare. Ogni categoria apre il negozio che spedisce davvero l’articolo.',
    featuredH2: 'Regali e souvenir dai negozi partner',
    featuredSub:
      'Qualche prodotto preso da tutte le categorie. Ogni prezzo è letto dal negozio partner e porta la data in cui è stato verificato.',
    valueProp: {
      h2: 'Come funziona l’acquisto qui',
      sub: 'LaplandGifts è una selezione verificata, non una cassa. Da questa pagina al pacco ci sono tre passaggi.',
      steps: [
        {
          title: 'Sfoglia una selezione verificata',
          description:
            'Ogni prodotto è stato aperto sulla pagina del negozio prima di essere aggiunto qui. Nome, materiali e prezzo sono letti lì, non scritti da noi.',
        },
        {
          title: 'Controlla il paese di consegna',
          description:
            'Ogni scheda dice se quel negozio spedisce dove vivi e nomina i paesi che esclude. Lo sai prima di cliccare, non alla cassa.',
        },
        {
          title: 'Compra nel negozio partner',
          description:
            'Il pulsante apre il negozio che vende l’articolo. Pagamento, consegna, resi e garanzia sono suoi, e noi guadagniamo una commissione se acquisti.',
        },
      ],
    },
    promises: {
      h2: 'Cosa fa LaplandGifts',
      sub: 'Non abbiamo né magazzino né cassa. Il lavoro è cercare, verificare e raccogliere.',
      items: [
        {
          title: 'Scelto a mano',
          description:
            'Ogni prodotto viene scelto uno alla volta e letto prima sulla pagina del partner. Nessun feed di prodotti, niente che non abbiamo aperto noi stessi.',
        },
        {
          title: 'Prezzi letti alla fonte',
          description:
            'Ogni prezzo viene dalla scheda del partner e porta la data in cui è stato verificato. Il prezzo finale lo stabilisce il negozio.',
        },
        {
          title: 'Le informazioni sul prodotto in un solo posto',
          description:
            'Materiale, taglia, volume, ingredienti e allergeni così come li dichiara il partner, perché confrontare non richieda dieci schede del browser.',
        },
        {
          title: 'Valgono le condizioni del negozio',
          description:
            'Acquisti nel negozio del partner, quindi contano le sue condizioni di pagamento, consegna, reso e garanzia. È anche lui a spedire il pacco.',
        },
      ],
    },
  },
  category: {
    names: {
      design: 'Design finlandese',
      clothing: 'Abbigliamento e maglieria',
      handicrafts: 'Artigianato finlandese',
      treats: 'Dolci e regali gastronomici',
      superfoods: 'Polveri di bacche artiche',
      merch: 'T-shirt e merch della Lapponia',
      experiences: 'Esperienze in Lapponia da regalare',
    },
    intro: {
      design: 'Tazze Moomin, vetro Iittala, Marimekko e gioielli in legno Aarikka: il design finlandese che torna davvero a casa con te. Ogni pezzo parte dal negozio finlandese o nordico che lo vende.',
      clothing: 'Giacche guscio Halti, streetwear Makia da Helsinki e maglieria in merino North Outdoor, lavorata nel proprio maglificio a Oulu.',
      handicrafts: 'Coltelli Marttiini da Rovaniemi, stoviglie da campo Kupilka, lino Lapuan Kankurit da Lapua e ceramica Pentik da Posio: artigianato che si usa, non che si mette in vetrina.',
      treats: 'Dolci e regali gastronomici finlandesi: salmiakki, cioccolato Fazer, tè Nordqvist e Moomin, caffè Moomin, carne di renna essiccata e marmellata di olivello spinoso. Le regole di importazione cambiano da paese a paese, quindi controlla la nota di spedizione su ogni scheda.',
      superfoods: 'Polveri di bacche artiche, chaga e prodotti alle erbe Arctic Warriors realizzati a Rovaniemi, da produttori finlandesi.',
      merch: 'La nostra stampa #LAPLANDVIBES su t-shirt, felpe e cappellini. La stamperia non è ancora aperta, quindi oggi qui non c’è nulla da comprare. La newsletter avvisa quando lo sarà.',
      experiences: 'Escursioni per l’aurora boreale, slitte trainate dagli husky e il villaggio di Babbo Natale, comprati come regalo ora e prenotati quando chi li riceve sceglie la data.',
    },
    productCount: (n) => (n === 1 ? '1 prodotto' : `${n} prodotti`),
    emptyCategory:
      'Stiamo ancora completando questa categoria. Nel frattempo sfoglia le altre categorie o dai un’occhiata alle idee regalo.',
    emptyForCountry: 'Nessun prodotto di questa categoria arriva ancora nel tuo paese. Cambia il paese di consegna per vedere tutto.',
  },
  product: {
    buyAt: (partner) => `Compra su ${partner}`,
    priceFrom: (value, currency) => {
      const eur = approxEur(value, currency)
      return eur ? `da ${fmt(value, currency, 'it-IT')} (circa ${eur} €)` : `da ${fmt(value, currency, 'it-IT')}`
    },
    priceNote: (date, partner) => `Prezzo letto su ${partner} il ${date}. Il prezzo finale lo stabilisce il negozio.`,
    checkoutNote: 'L’acquisto si conclude nel negozio partner. Non gestiamo né il pagamento né la consegna.',
    illustrativeImage: 'Immagine di atmosfera, non l’articolo esatto. Le foto del prodotto sono sulla pagina del partner.',
    imageCredit: (partner) => `Foto prodotto: ${partner}`,
    related: 'Altro da questa categoria',
    backToCategory: 'Torna alla categoria',
    viewProduct: 'Vedi il prodotto',
    detailsH2: 'Informazioni sul prodotto',
    specLabels: {
      material: 'Materiale',
      size: 'Taglia',
      weight: 'Peso',
      volume: 'Volume',
      origin: 'Origine',
      contents: 'Contenuto',
      color: 'Colore',
      care: 'Manutenzione',
      shelfLife: 'Conservazione',
    },
    ingredientsH3: 'Ingredienti',
    allergensH3: 'Allergeni',
    detailsSource: (partner, date) => `Informazioni sul prodotto: ${partner}, lette il ${date}`,
  },
  faqAnswerFixes: {
    1: 'Sì. Duodji è la parola sami per l’artigianato tradizionale, e il marchio rotondo «Sámi Duodji» è un’etichetta di autenticità concessa ai manufatti realizzati da artigiani sami con metodi e materiali tradizionali. Scegliere un pezzo che porta quel marchio, o comprare direttamente da un artigiano sami con nome e cognome o da un rivenditore autorizzato, lascia il denaro nella comunità e mantiene il lavoro autentico invece di un’imitazione industriale. LaplandGifts non vende alcun artigianato sami: preferiamo indicarti un venditore duodji piuttosto che venderti una copia.',
    2: 'Molti lo fanno, ed è su questo che si regge tutto il sito: ogni prodotto qui è venduto e spedito dal negozio finlandese o nordico che lo produce o lo tiene a magazzino, mai da noi. Ogni scheda nomina la zona di consegna di quel negozio e i paesi che restano fuori, e per gli alimenti le regole sono più severe: la carne di renna essiccata viaggia dentro l’Unione europea ma non verso il Regno Unito, gli Stati Uniti o il Giappone. Ordinare online durante il viaggio significa che gli oggetti fragili viaggiano a parte invece che in valigia. Il nostro merch stampato #LaplandVibes non è ancora in vendita.',
  },
  experience: {
    voucherH2: 'Carte regalo esperienza',
    voucherNote:
      'Si acquistano su Elämyslahjat.fi e arrivano via e-mail. Chi le riceve prenota la data, e l’esperienza si vive in Lapponia.',
    priceNote: (price) => `Da ${price}`,
    priceAsOf: (asOf) => `Prezzi di partenza letti su GetYourGuide il ${asOf}. Il prezzo esatto dipende dalla data scelta.`,
    groups: {
      aurora: 'Aurora boreale',
      husky: 'Slitte con gli husky',
      reindeer: 'Renne',
      snowmobile: 'Safari in motoslitta',
      nature: 'Natura e parchi nazionali',
      sauna: 'Sauna e bagno nel ghiaccio',
      santa: 'Babbo Natale e neve',
      kids: 'Per bambini',
    },
    duration: (value) => `Durata ${value}`,
    viewOnGyg: 'Vedi disponibilità',
  },
  shipping: {
    worldwide: 'Spedizione in tutto il mondo',
    euOnly: 'Spedizione solo in Europa',
    fiOnly: 'Spedizione solo in Finlandia',
    zoneShort: { worldwide: 'Tutto il mondo', eu: 'Solo Europa', fi: 'Solo Finlandia' },
    exceptShort: (zone, count) => `${zone}, ${count} ${count === 1 ? 'eccezione' : 'eccezioni'}`,
    exceptNote: (countries) => `Non si spedisce in questi paesi: ${countries.join(', ')}.`,
    selectorLabel: 'Consegna in',
    selectorAll: 'Tutti i paesi',
    title: 'Spedizioni',
    table: { shop: 'Negozio partner', area: 'Zona di consegna', checked: 'Verificato' },
    foodRules: {
      title: 'Cibo e carne: cosa si può spedire e dove',
      intro: 'Polveri di bacche, marmellata e cioccolato viaggiano liberamente. La carne di renna essiccata e le altre carni no, e le regole le stabilisce il paese di destinazione, non noi.',
      rows: [
        { area: 'Unione europea', rule: 'Consentito. I prodotti a base di carne circolano liberamente fra gli Stati membri.' },
        { area: 'Norvegia', rule: 'Consentito dall’Unione europea, ma all’arrivo vengono riscossi dazio e IVA.' },
        { area: 'Regno Unito', rule: 'Non è possibile. Da aprile 2025 la carne di cervide, che comprende la renna, non può essere introdotta dall’Unione europea.' },
        { area: 'Stati Uniti', rule: 'Non per posta. Un viaggiatore può portare carne essiccata dalla Finlandia con i documenti di origine, ma un pacco postale conta come importazione commerciale.' },
        { area: 'Giappone', rule: 'Non è possibile. La carne richiede un certificato ufficiale di ispezione qualunque sia il trasporto, e i pacchi postali sono citati espressamente.' },
      ],
    },
  },
  boutique: {
    hubTitle: 'Boutique della Lapponia',
    hubLead: 'Dove comprare artigianato lappone, nei negozi stessi.',
    hubIntro: 'Ogni negozio di questa pagina è un\'impresa lappone. Alcuni spediscono a casa, altri si visitano di persona, e ogni link porta al sito dell\'azienda.',
    townsH2: 'Per località',
    elsewhereH2: 'Altrove in Lapponia',
    filterAll: 'Tutte',
    filterOnline: 'Spedisce a casa',
    filterPhysical: 'Da visitare',
    onlineBadge: 'NEGOZIO ONLINE',
    physicalBadge: 'NEGOZIO FISICO',
    count: (n: number) => (n === 1 ? '1 boutique' : `${n} boutique`),
    visitH2: 'Da visitare di persona',
    shopAtH2: 'Ordinare da casa',
    outboundCta: 'Vai al loro sito',
    crossSellH2: 'Comprare qualcosa di simile online',
    crossSellCta: 'Sfoglia la categoria',
    townNames: {
      rovaniemi: 'Rovaniemi', inari: 'Inari', posio: 'Posio',
      levi: 'Levi', sodankyla: 'Sodankylä', yllas: 'Ylläs',
      saariselka: 'Saariselkä', enontekio: 'Enontekiö', utsjoki: 'Utsjoki',
    },
    duodjiH2: 'Come riconoscere il vero duodji sami',
    duodjiBody: 'Il duodji è l\'artigianato sami, realizzato da artigiani sami con materiali e tecniche tradizionali. Le imitazioni da souvenir copiano l\'aspetto senza l\'artigiano e la tradizione. La differenza conta per la comunità della cui cultura si tratta, e un venditore autorizzato può dirvi chi ha realizzato il pezzo.',
    duodjiAuthorized: 'Venditore autorizzato di duodji sami',
    listingH2: 'Gestite un negozio in Lapponia?',
    listingBody: 'L\'inserimento è gratuito per ogni impresa lappone. Raccontateci chi siete, perché la vostra visibilità è debole adesso e cosa cambierebbe se i clienti vi trovassero.',
    listingCta: 'Contattaci',
  },
})

const nl: ShopCopy = over({
  nav: { shop: 'Winkel', guides: 'Cadeautips', shipping: 'Verzending', allProducts: 'Alle producten' },
  home: {
    heroKicker: 'Vanuit Finland tot aan je deur',
    heroTitle: 'Finse cadeaus en',
    heroTitleAccent: 'souvenirs uit Lapland',
    heroLead:
      'Fins design en Fins ambacht, snoep en bessenpoeders, op één plek verzameld en bezorgd waar jij woont. Of je hier nu op vakantie bent of vanaf de andere kant van de wereld bestelt: elk product wordt verkocht en verstuurd door een Finse of Noordse winkel, niet door ons.',
    categoriesH2: 'Wat je in Lapland koopt',
    categoriesSub:
      'Fins design, kleding, ambacht, lekkers, bessenpoeders, onze eigen merch en belevenissen om cadeau te doen. Elke categorie opent de winkel die het artikel echt verstuurt.',
    featuredH2: 'Cadeaus en souvenirs uit partnerwinkels',
    featuredSub:
      'Een paar producten uit alle categorieën. Elke prijs is afgelezen in de partnerwinkel en draagt de datum waarop hij is gecontroleerd.',
    valueProp: {
      h2: 'Zo werkt kopen hier',
      sub: 'LaplandGifts is een gecontroleerde selectie, geen kassa. Van deze pagina tot het pakket zijn het drie stappen.',
      steps: [
        {
          title: 'Blader door een gecontroleerde selectie',
          description:
            'Elk product is geopend op de eigen pagina van de winkel voordat het hier is toegevoegd. De naam, de materialen en de prijs zijn daar afgelezen, niet door ons geschreven.',
        },
        {
          title: 'Controleer het bezorgland',
          description:
            'Elke kaart zegt of die winkel bezorgt waar jij woont, en noemt de landen die eraf vallen. Je weet het vóór je klikt, niet pas bij het afrekenen.',
        },
        {
          title: 'Koop in de partnerwinkel',
          description:
            'De knop opent de winkel die het artikel verkoopt. Betaling, bezorging, retour en garantie zijn van hen, en wij krijgen commissie als je koopt.',
        },
      ],
    },
    promises: {
      h2: 'Wat LaplandGifts doet',
      sub: 'We hebben geen magazijn en geen kassa. Het werk is zoeken, controleren en samenbrengen.',
      items: [
        {
          title: 'Met de hand uitgekozen',
          description:
            'Elk product wordt één voor één gekozen en eerst op de eigen pagina van de partner gelezen. Geen productfeeds, niets wat we niet zelf hebben geopend.',
        },
        {
          title: 'Prijzen bij de bron afgelezen',
          description:
            'Elke prijs komt van de productpagina van de partner en draagt de datum waarop hij is gecontroleerd. De winkel bepaalt de eindprijs.',
        },
        {
          title: 'Productgegevens op één plek',
          description:
            'Materiaal, maat, inhoud, ingrediënten en allergenen zoals de partner ze opgeeft, zodat vergelijken geen tien browsertabbladen kost.',
        },
        {
          title: 'De voorwaarden van de winkel gelden',
          description:
            'Je koopt in de winkel van de partner, dus hun voorwaarden voor betaling, bezorging, retour en garantie zijn de voorwaarden die tellen. Zij sturen ook het pakket.',
        },
      ],
    },
  },
  category: {
    names: {
      design: 'Fins design',
      clothing: 'Kleding en breigoed',
      handicrafts: 'Fins ambacht',
      treats: 'Lekkers en eetbare cadeaus',
      superfoods: 'Arctische bessenpoeders',
      merch: 'Lapland-shirts en merch',
      experiences: 'Belevenissen uit Lapland cadeau',
    },
    intro: {
      design: 'Moomin-mokken, glas van Iittala, Marimekko en houten sieraden van Aarikka: het Finse design dat echt mee naar huis gaat. Elk stuk vertrekt bij de Finse of Noordse winkel die het verkoopt.',
      clothing: 'Shelljassen van Halti, streetwear van Makia uit Helsinki en merinobreigoed van North Outdoor, gebreid in de eigen breierij in Oulu.',
      handicrafts: 'Marttiini-messen uit Rovaniemi, kampeerservies van Kupilka, linnen van Lapuan Kankurit uit Lapua en keramiek van Pentik uit Posio: ambacht dat gebruikt wordt in plaats van in de kast te staan.',
      treats: 'Fins lekkers en eetbare cadeaus: salmiak, chocolade van Fazer, thee van Nordqvist en Moomin, Moomin-koffie, gedroogd rendiervlees en duindoornjam. Invoerregels verschillen per land, dus lees de bezorgnotitie op de kaart.',
      superfoods: 'Arctische bessenpoeders, chaga en kruidenproducten van Arctic Warriors, gemaakt in Rovaniemi bij Finse producenten.',
      merch: 'Onze eigen #LAPLANDVIBES-print op T-shirts, hoodies en petten. De drukkerij is nog niet open, dus hier valt vandaag nog niets te kopen. De nieuwsbrief zegt wanneer het zover is.',
      experiences: 'Noorderlichttochten, huskysleeën en het dorp van de Kerstman, nu als cadeau gekocht en geboekt wanneer de ontvanger een datum kiest.',
    },
    productCount: (n) => (n === 1 ? '1 product' : `${n} producten`),
    emptyCategory:
      'We vullen deze categorie nog aan. Blader intussen door de andere categorieën of bekijk de cadeautips.',
    emptyForCountry: 'Geen van de producten in deze categorie wordt al naar jouw land verzonden. Wissel van bezorgland om alles te zien.',
  },
  product: {
    buyAt: (partner) => `Kopen bij ${partner}`,
    priceFrom: (value, currency) => {
      const eur = approxEur(value, currency)
      return eur ? `vanaf ${fmt(value, currency, 'nl-NL')} (ongeveer ${eur} €)` : `vanaf ${fmt(value, currency, 'nl-NL')}`
    },
    priceNote: (date, partner) => `Prijs afgelezen bij ${partner} op ${date}. De winkel bepaalt de eindprijs.`,
    checkoutNote: 'Je rondt de aankoop af in de partnerwinkel. Wij verwerken je betaling en bezorging niet.',
    illustrativeImage: 'Sfeerbeeld, niet het exacte artikel. De productfoto’s staan op de pagina van de partner.',
    imageCredit: (partner) => `Productfoto: ${partner}`,
    related: 'Meer uit deze categorie',
    backToCategory: 'Terug naar de categorie',
    viewProduct: 'Bekijk product',
    detailsH2: 'Productgegevens',
    specLabels: {
      material: 'Materiaal',
      size: 'Maat',
      weight: 'Gewicht',
      volume: 'Inhoud',
      origin: 'Herkomst',
      contents: 'Inbegrepen',
      color: 'Kleur',
      care: 'Onderhoud',
      shelfLife: 'Houdbaarheid',
    },
    ingredientsH3: 'Ingrediënten',
    allergensH3: 'Allergenen',
    detailsSource: (partner, date) => `Productgegevens: ${partner}, gelezen op ${date}`,
  },
  faqAnswerFixes: {
    1: 'Ja. Duodji is het Samische woord voor traditioneel ambacht, en het ronde merk „Sámi Duodji” is een echtheidskeurmerk dat wordt toegekend aan werk van Samische makers volgens traditionele methoden en met traditionele materialen. Kies je een stuk met dat merk, of koop je rechtstreeks bij een met naam genoemde Samische maker of een erkende verkoper, dan blijft het geld in de gemeenschap en is het werk echt in plaats van een fabrieksimitatie. LaplandGifts voert helemaal geen Samisch ambacht: we verwijzen je liever naar een duodji-verkoper dan dat we je een namaakstuk verkopen.',
    2: 'Veel winkels doen dat, en daar draait deze site op: elk product hier wordt verkocht en verstuurd door de Finse of Noordse winkel die het maakt of op voorraad heeft, nooit door ons. Elke kaart noemt het bezorggebied van die winkel en de landen die eraf vallen, en bij levensmiddelen zijn de regels strenger: gedroogd rendiervlees reist binnen de Europese Unie, maar niet naar het Verenigd Koninkrijk, de Verenigde Staten of Japan. Online bestellen tijdens de reis betekent dat breekbare dingen apart reizen in plaats van in je koffer. Onze eigen #LaplandVibes-merch is nog niet te koop.',
  },
  experience: {
    voucherH2: 'Belevenis-cadeaukaarten',
    voucherNote:
      'Gekocht bij Elämyslahjat.fi en per e-mail bezorgd. De ontvanger boekt zelf de datum, en de belevenis wordt in Lapland ingewisseld.',
    priceNote: (price) => `Vanaf ${price}`,
    priceAsOf: (asOf) => `Vanafprijzen afgelezen op GetYourGuide op ${asOf}. De exacte prijs hangt af van de datum die je kiest.`,
    groups: {
      aurora: 'Noorderlicht',
      husky: 'Huskytochten',
      reindeer: 'Rendieren',
      snowmobile: 'Sneeuwscootersafari’s',
      nature: 'Natuur en nationale parken',
      sauna: 'Sauna en wak',
      santa: 'Kerstman en sneeuw',
      kids: 'Voor kinderen',
    },
    duration: (value) => `Duur ${value}`,
    viewOnGyg: 'Bekijk beschikbaarheid',
  },
  shipping: {
    worldwide: 'Verzending wereldwijd',
    euOnly: 'Verzending alleen binnen Europa',
    fiOnly: 'Verzending alleen binnen Finland',
    zoneShort: { worldwide: 'Wereldwijd', eu: 'Alleen Europa', fi: 'Alleen Finland' },
    exceptShort: (zone, count) => `${zone}, ${count} ${count === 1 ? 'uitzondering' : 'uitzonderingen'}`,
    exceptNote: (countries) => `Wordt niet verzonden naar deze landen: ${countries.join(', ')}.`,
    selectorLabel: 'Bezorgen in',
    selectorAll: 'Alle landen',
    title: 'Verzending',
    table: { shop: 'Partnerwinkel', area: 'Bezorggebied', checked: 'Gecontroleerd' },
    foodRules: {
      title: 'Eten en vlees: wat waarheen mag worden gestuurd',
      intro: 'Bessenpoeders, jam en chocolade reizen vrij. Gedroogd rendiervlees en ander vlees niet, en de regels worden gesteld door het land van bestemming, niet door ons.',
      rows: [
        { area: 'Europese Unie', rule: 'Toegestaan. Vleesproducten bewegen vrij tussen de lidstaten.' },
        { area: 'Noorwegen', rule: 'Toegestaan vanuit de Europese Unie, maar bij aankomst worden invoerrechten en btw geheven.' },
        { area: 'Verenigd Koninkrijk', rule: 'Niet mogelijk. Sinds april 2025 mag hertachtigenvlees, waaronder rendier valt, niet meer vanuit de Europese Unie worden ingevoerd.' },
        { area: 'Verenigde Staten', rule: 'Niet per post. Een reiziger mag gedroogd vlees uit Finland meenemen met herkomstdocumenten, maar een postpakket geldt als commerciële invoer.' },
        { area: 'Japan', rule: 'Niet mogelijk. Vlees vereist een officieel keuringscertificaat ongeacht de vervoerswijze, en postpakketten worden met zoveel woorden genoemd.' },
      ],
    },
  },
  boutique: {
    hubTitle: 'Boetieks in Lapland',
    hubLead: 'Waar u Laps handwerk koopt, in de winkels zelf.',
    hubIntro: 'Elke winkel op deze pagina is een Laps bedrijf. Sommige verzenden naar u toe, andere bezoekt u ter plaatse, en elke link gaat naar de eigen site van het bedrijf.',
    townsH2: 'Per plaats',
    elsewhereH2: 'Elders in Lapland',
    filterAll: 'Alle',
    filterOnline: 'Verzendt naar u',
    filterPhysical: 'Ter plaatse bezoeken',
    onlineBadge: 'WEBWINKEL',
    physicalBadge: 'WINKEL',
    count: (n: number) => (n === 1 ? '1 boetiek' : `${n} boetieks`),
    visitH2: 'Ter plaatse bezoeken',
    shopAtH2: 'Vanuit huis bestellen',
    outboundCta: 'Naar hun site',
    crossSellH2: 'Zoiets online kopen',
    crossSellCta: 'Bekijk de categorie',
    townNames: {
      rovaniemi: 'Rovaniemi', inari: 'Inari', posio: 'Posio',
      levi: 'Levi', sodankyla: 'Sodankylä', yllas: 'Ylläs',
      saariselka: 'Saariselkä', enontekio: 'Enontekiö', utsjoki: 'Utsjoki',
    },
    duodjiH2: 'Zo herkent u echte Samische duodji',
    duodjiBody: 'Duodji is Samisch handwerk, gemaakt door Samische makers met traditionele materialen en technieken. Souvenirimitaties kopiëren het uiterlijk zonder de maker en de traditie. Het verschil doet ertoe voor de gemeenschap om wier cultuur het gaat, en een erkende verkoper kan u vertellen wie het stuk heeft gemaakt.',
    duodjiAuthorized: 'Erkende verkoper van Samische duodji',
    listingH2: 'Heeft u een winkel in Lapland?',
    listingBody: 'Een vermelding is gratis voor elk Laps bedrijf. Vertel ons wie u bent, waarom uw zichtbaarheid nu zwak is en wat er zou veranderen als klanten u vonden.',
    listingCta: 'Neem contact op',
  },
})

const ptBR: ShopCopy = over({
  nav: { shop: 'Loja', guides: 'Ideias de presente', shipping: 'Entrega', allProducts: 'Todos os produtos' },
  home: {
    heroKicker: 'Da Finlândia direto para a sua porta',
    heroTitle: 'Presentes finlandeses e',
    heroTitleAccent: 'souvenires da Lapônia',
    heroLead:
      'Design e artesanato finlandeses, doces e pós de frutas, reunidos em um só lugar e enviados para onde você mora. Esteja você aqui de férias ou comprando do outro lado do mundo, cada produto é vendido e enviado por uma loja finlandesa ou nórdica, não por nós.',
    categoriesH2: 'O que comprar na Lapônia',
    categoriesSub:
      'Design finlandês, roupas, artesanato, doces, pós de frutas, nossa própria merch e experiências para presentear. Cada categoria abre a loja que de fato envia o produto.',
    featuredH2: 'Presentes e souvenires das lojas parceiras',
    featuredSub:
      'Alguns produtos de todas as categorias. Cada preço foi lido na loja parceira e traz a data em que foi conferido.',
    valueProp: {
      h2: 'Como funciona a compra aqui',
      sub: 'A LaplandGifts é uma seleção conferida, não um caixa. Desta página até a encomenda são três passos.',
      steps: [
        {
          title: 'Explore uma seleção conferida',
          description:
            'Cada produto foi aberto na página da própria loja antes de ser incluído aqui. O nome, os materiais e o preço são lidos de lá, não escritos por nós.',
        },
        {
          title: 'Confira o país de entrega',
          description:
            'Cada cartão diz se aquela loja envia para onde você mora e nomeia os países que ficam de fora. Você sabe antes de clicar, não na hora de pagar.',
        },
        {
          title: 'Compre na loja parceira',
          description:
            'O botão abre a loja que vende o produto. Pagamento, entrega, devolução e garantia são dela, e nós ganhamos uma comissão se você comprar.',
        },
      ],
    },
    promises: {
      h2: 'O que a LaplandGifts faz',
      sub: 'Não temos depósito nem caixa. O trabalho é procurar, conferir e reunir.',
      items: [
        {
          title: 'Escolhido a dedo',
          description:
            'Cada produto é escolhido um a um e lido primeiro na página do parceiro. Sem catálogos automáticos, nada que não tenhamos aberto nós mesmos.',
        },
        {
          title: 'Preços lidos na fonte',
          description:
            'Cada preço vem da página do parceiro e traz a data em que foi conferido. A loja define o preço final.',
        },
        {
          title: 'Informações do produto em um só lugar',
          description:
            'Material, tamanho, volume, ingredientes e alérgenos como o parceiro os declara, para que comparar não custe dez abas do navegador.',
        },
        {
          title: 'Valem as condições da loja',
          description:
            'Você compra na loja do parceiro, então as condições de pagamento, entrega, devolução e garantia dele são as que valem. É ele também que envia a encomenda.',
        },
      ],
    },
  },
  category: {
    names: {
      design: 'Design finlandês',
      clothing: 'Roupas e tricô',
      handicrafts: 'Artesanato finlandês',
      treats: 'Doces e presentes gastronômicos',
      superfoods: 'Pós de frutas árticas',
      merch: 'Camisetas e merch da Lapônia',
      experiences: 'Experiências da Lapônia para presentear',
    },
    intro: {
      design: 'Canecas Moomin, vidro da Iittala, Marimekko e joias de madeira da Aarikka: o design finlandês que realmente vai para casa com você. Cada peça sai da loja finlandesa ou nórdica que a vende.',
      clothing: 'Jaquetas técnicas da Halti, streetwear da Makia vindo de Helsinque e tricô de merino da North Outdoor, feito na própria malharia em Oulu.',
      handicrafts: 'Facas Marttiini de Rovaniemi, louça de camping Kupilka, linho da Lapuan Kankurit de Lapua e cerâmica da Pentik de Posio: artesanato para usar, não para deixar na prateleira.',
      treats: 'Doces e presentes gastronômicos finlandeses: salmiakki, chocolate da Fazer, chás da Nordqvist e Moomin, café Moomin, carne seca de rena e geleia de espinheiro-marítimo. As regras de importação mudam de país para país, então veja a nota de entrega em cada cartão.',
      superfoods: 'Pós de frutas árticas, chaga e produtos de ervas da Arctic Warriors feitos em Rovaniemi, de produtores finlandeses.',
      merch: 'Nossa própria estampa #LAPLANDVIBES em camisetas, moletons e bonés. A loja de estampas ainda não abriu, então hoje não há nada para comprar aqui. A newsletter avisa quando abrir.',
      experiences: 'Passeios para ver a aurora boreal, trenós puxados por huskies e a aldeia do Papai Noel, comprados como presente agora e reservados quando quem recebe escolher a data.',
    },
    productCount: (n) => (n === 1 ? '1 produto' : `${n} produtos`),
    emptyCategory:
      'Ainda estamos completando esta categoria. Enquanto isso, veja as outras categorias ou as ideias de presente.',
    emptyForCountry: 'Nenhum produto desta categoria chega ainda ao seu país. Troque o país de entrega para ver tudo.',
  },
  product: {
    buyAt: (partner) => `Comprar na ${partner}`,
    priceFrom: (value, currency) => {
      const eur = approxEur(value, currency)
      return eur ? `a partir de ${fmt(value, currency, 'pt-BR')} (cerca de ${eur} €)` : `a partir de ${fmt(value, currency, 'pt-BR')}`
    },
    priceNote: (date, partner) => `Preço lido na ${partner} em ${date}. A loja define o preço final.`,
    checkoutNote: 'Você conclui a compra na loja parceira. Nós não cuidamos do seu pagamento nem da entrega.',
    illustrativeImage: 'Imagem ilustrativa, não é o item exato. As fotos do produto estão na página do parceiro.',
    imageCredit: (partner) => `Foto do produto: ${partner}`,
    related: 'Mais desta categoria',
    backToCategory: 'Voltar para a categoria',
    viewProduct: 'Ver produto',
    detailsH2: 'Informações do produto',
    specLabels: {
      material: 'Material',
      size: 'Tamanho',
      weight: 'Peso',
      volume: 'Volume',
      origin: 'Origem',
      contents: 'Conteúdo',
      color: 'Cor',
      care: 'Cuidados',
      shelfLife: 'Validade',
    },
    ingredientsH3: 'Ingredientes',
    allergensH3: 'Alérgenos',
    detailsSource: (partner, date) => `Informações do produto: ${partner}, lidas em ${date}`,
  },
  faqAnswerFixes: {
    1: 'Sim. Duodji é a palavra sami para o artesanato tradicional, e a marca redonda «Sámi Duodji» é um selo de autenticidade concedido a peças feitas por artesãos sami com métodos e materiais tradicionais. Escolher uma peça com esse selo, ou comprar direto de um artesão sami identificado pelo nome ou de um vendedor autorizado, mantém o dinheiro na comunidade e o trabalho autêntico em vez de uma imitação de fábrica. A LaplandGifts não vende nenhum artesanato sami: preferimos indicar um vendedor duodji a vender uma cópia.',
    2: 'Muitas enviam, e é nisso que este site se apoia: cada produto daqui é vendido e postado pela loja finlandesa ou nórdica que o fabrica ou o mantém em estoque, nunca por nós. Cada cartão nomeia a área de entrega dessa loja e os países que ficam de fora, e com alimentos as regras são mais rígidas: a carne seca de rena circula dentro da União Europeia, mas não vai para o Reino Unido, os Estados Unidos nem o Japão. Comprar pela internet durante a viagem faz com que o que é frágil viaje separado em vez de na mala. Nossa própria merch estampada #LaplandVibes ainda não está à venda.',
  },
  experience: {
    voucherH2: 'Cartões-presente de experiências',
    voucherNote:
      'Comprados na Elämyslahjat.fi e entregues por e-mail. Quem recebe escolhe a data, e a experiência acontece na Lapônia.',
    priceNote: (price) => `A partir de ${price}`,
    priceAsOf: (asOf) => `Preços iniciais lidos no GetYourGuide em ${asOf}. O preço exato depende da data escolhida.`,
    groups: {
      aurora: 'Aurora boreal',
      husky: 'Trenós de huskies',
      reindeer: 'Renas',
      snowmobile: 'Safáris de snowmobile',
      nature: 'Natureza e parques nacionais',
      sauna: 'Sauna e mergulho no gelo',
      santa: 'Papai Noel e neve',
      kids: 'Para crianças',
    },
    duration: (value) => `Duração ${value}`,
    viewOnGyg: 'Ver disponibilidade',
  },
  shipping: {
    worldwide: 'Envio para o mundo todo',
    euOnly: 'Envio somente para a Europa',
    fiOnly: 'Envio somente dentro da Finlândia',
    zoneShort: { worldwide: 'Mundo todo', eu: 'Somente Europa', fi: 'Somente Finlândia' },
    exceptShort: (zone, count) => `${zone}, ${count} ${count === 1 ? 'exceção' : 'exceções'}`,
    exceptNote: (countries) => `Não enviamos para estes países: ${countries.join(', ')}.`,
    selectorLabel: 'Entregar em',
    selectorAll: 'Todos os países',
    title: 'Entrega',
    table: { shop: 'Loja parceira', area: 'Área de entrega', checked: 'Conferido' },
    foodRules: {
      title: 'Comida e carne: o que pode ser postado para onde',
      intro: 'Pós de frutas, geleia e chocolate viajam livremente. A carne seca de rena e as outras carnes não, e as regras são do país de destino, não nossas.',
      rows: [
        { area: 'União Europeia', rule: 'Permitido. Os produtos de carne circulam livremente entre os Estados-membros.' },
        { area: 'Noruega', rule: 'Permitido a partir da União Europeia, mas na chegada são cobrados imposto de importação e IVA.' },
        { area: 'Reino Unido', rule: 'Não é possível. Desde abril de 2025 a carne de cervídeo, que inclui a rena, não pode entrar vinda da União Europeia.' },
        { area: 'Estados Unidos', rule: 'Pelos correios não. Um viajante pode levar carne seca da Finlândia com documentos de origem, mas uma encomenda postal conta como importação comercial.' },
        { area: 'Japão', rule: 'Não é possível. A carne exige certificado oficial de inspeção seja qual for o transporte, e as encomendas postais são citadas expressamente.' },
      ],
    },
  },
  boutique: {
    hubTitle: 'Boutiques da Lapônia',
    hubLead: 'Onde comprar artesanato lapão, nas próprias lojas.',
    hubIntro: 'Cada loja desta página é uma empresa da Lapônia. Algumas enviam para a sua casa, outras você visita pessoalmente, e cada link leva ao site da empresa.',
    townsH2: 'Por localidade',
    elsewhereH2: 'Em outros pontos da Lapônia',
    filterAll: 'Todas',
    filterOnline: 'Envia para casa',
    filterPhysical: 'Visitar pessoalmente',
    onlineBadge: 'LOJA ONLINE',
    physicalBadge: 'LOJA FÍSICA',
    count: (n: number) => (n === 1 ? '1 loja' : `${n} lojas`),
    visitH2: 'Visitar pessoalmente',
    shopAtH2: 'Pedir de casa',
    outboundCta: 'Ir ao site deles',
    crossSellH2: 'Comprar algo assim pela internet',
    crossSellCta: 'Ver a categoria',
    townNames: {
      rovaniemi: 'Rovaniemi', inari: 'Inari', posio: 'Posio',
      levi: 'Levi', sodankyla: 'Sodankylä', yllas: 'Ylläs',
      saariselka: 'Saariselkä', enontekio: 'Enontekiö', utsjoki: 'Utsjoki',
    },
    duodjiH2: 'Como reconhecer o duodji sami autêntico',
    duodjiBody: 'Duodji é o artesanato sami, feito por artesãos samis com materiais e técnicas tradicionais. Imitações de souvenir copiam a aparência sem o artesão e a tradição. A diferença importa para a comunidade de cuja cultura se trata, e um vendedor autorizado pode dizer quem fez a peça.',
    duodjiAuthorized: 'Vendedor autorizado de duodji sami',
    listingH2: 'Você tem uma loja na Lapônia?',
    listingBody: 'O anúncio é gratuito para qualquer empresa da Lapônia. Conte quem vocês são, por que a visibilidade está fraca agora e o que mudaria se os clientes encontrassem vocês.',
    listingCta: 'Fale conosco',
  },
})

const ja: ShopCopy = over({
  nav: { shop: 'ショップ', guides: 'ギフトガイド', shipping: '配送', allProducts: 'すべての商品' },
  home: {
    heroKicker: 'フィンランドからご自宅まで',
    heroTitle: 'フィンランドの贈り物と',
    heroTitleAccent: 'ラップランドのおみやげ',
    heroLead:
      'フィンランドのデザインと手仕事、お菓子とベリーパウダーをひとつの場所に集め、お住まいの国までお届けします。旅行でこちらに来ている方も、地球の反対側から注文する方も、商品を販売し発送するのはフィンランドまたは北欧のショップであり、当サイトではありません。',
    categoriesH2: 'ラップランドで買うもの',
    categoriesSub:
      'フィンランドのデザイン、衣類、手仕事、お菓子、ベリーパウダー、当サイトのグッズ、そして体験ギフト。各カテゴリーから、実際に発送するショップへ進めます。',
    featuredH2: 'パートナーショップの贈り物とおみやげ',
    featuredSub:
      '各カテゴリーから選んだ商品です。価格はすべてパートナーショップで確認したもので、確認した日付を添えています。',
    valueProp: {
      h2: 'ご購入の流れ',
      sub: 'LaplandGifts は確認済みのセレクションであり、レジではありません。このページから荷物が届くまで三つの手順です。',
      steps: [
        {
          title: '確認済みのセレクションを見る',
          description:
            'すべての商品は、掲載前にショップ自身のページで確認しています。商品名も素材も価格もそこから読み取ったもので、当サイトが書いたものではありません。',
        },
        {
          title: '配送先の国を確認する',
          description:
            '各カードに、そのショップがお住まいの国へ送るかどうか、また対象外の国名を記載しています。レジではなく、クリックする前に分かります。',
        },
        {
          title: 'パートナーショップで購入する',
          description:
            'ボタンを押すと、その商品を販売しているショップが開きます。支払い、配送、返品、保証はショップのもので、ご購入があった場合に当サイトは手数料を受け取ります。',
        },
      ],
    },
    promises: {
      h2: 'LaplandGifts がしていること',
      sub: '倉庫もレジも持っていません。仕事は、探し、確認し、まとめることです。',
      items: [
        {
          title: '一点ずつ手で選ぶ',
          description:
            '商品は一点ずつ選び、まずパートナーのページで内容を読みます。商品フィードは使わず、自分たちで開いていないものは載せません。',
        },
        {
          title: '価格は出どころで確認',
          description:
            '価格はすべてパートナーの商品ページから取得し、確認した日付を添えています。最終的な価格を決めるのはショップです。',
        },
        {
          title: '商品情報をひとつの場所に',
          description:
            '素材、サイズ、容量、原材料、アレルゲンをパートナーの表示どおりにまとめています。比較のためにタブを十枚開く必要はありません。',
        },
        {
          title: 'ショップ自身の規約が適用されます',
          description:
            'ご購入はパートナーのショップで行われるため、支払い、配送、返品、保証はそのショップの規約に従います。荷物を送るのもそのショップです。',
        },
      ],
    },
  },
  category: {
    names: {
      design: 'フィンランドデザイン',
      clothing: '衣類とニット',
      handicrafts: 'フィンランドの手仕事',
      treats: 'お菓子と食の贈り物',
      superfoods: '北極のベリーパウダー',
      merch: 'ラップランドのTシャツとグッズ',
      experiences: 'ラップランドの体験ギフト',
    },
    intro: {
      design: 'ムーミンのマグ、イッタラのガラス、マリメッコ、アアリッカの木のアクセサリー。本当に持ち帰りたくなるフィンランドデザインです。どの品も、それを販売するフィンランドまたは北欧のショップから発送されます。',
      clothing: 'ハルティのシェルジャケット、ヘルシニキ発のマキアのストリートウェア、そしてオウルの自社工場で編まれるノースアウトドアのメリノニット。',
      handicrafts: 'ロヴァニエミのマルッティーニのナイフ、クピルカのアウトドア食器、ラプアのラプアン・カンクリのリネン、ポシオのペンティックの陶器。飾るためではなく使うための手仕事です。',
      treats: 'フィンランドのお菓子と食の贈り物。サルミアッキ、ファッツェルのチョコレート、ノルドクヴィストとムーミンの紅茶、ムーミンのコーヒー、トナカイの干し肉、シーバックソーンのジャム。輸入規則は国ごとに異なるため、各カードの配送に関する記載をご確認ください。',
      superfoods: '北極のベリーパウダー、チャーガ、そしてロヴァニエミで作られるアークティック・ウォリアーズのハーブ製品。いずれもフィンランドの生産者によるものです。',
      merch: '当サイトの #LAPLANDVIBES プリントを入れたTシャツ、パーカー、キャップ。プリントショップはまだ開いていないため、現在ここで購入できる商品はありません。開店時はニュースレターでお知らせします。',
      experiences: 'オーロラツアー、ハスキーぞり、サンタクロース村。今は贈り物として購入し、受け取った方が日付を選んでから予約します。',
    },
    productCount: (n) => `商品 ${n} 点`,
    emptyCategory:
      'このカテゴリーは現在追加中です。その間、ほかのカテゴリーをご覧いただくか、ギフトガイドをお試しください。',
    emptyForCountry: 'このカテゴリーの商品は、まだお住まいの国に配送されません。配送先の国を切り替えるとすべて表示されます。',
  },
  product: {
    buyAt: (partner) => `${partner} で購入`,
    priceFrom: (value, currency) => {
      const eur = approxEur(value, currency)
      return eur ? `${fmt(value, currency, 'ja-JP')} から（約 ${eur} ユーロ）` : `${fmt(value, currency, 'ja-JP')} から`
    },
    priceNote: (date, partner) => `価格は ${date} に ${partner} で確認したものです。最終的な価格はショップが決めます。`,
    checkoutNote: 'ご購入の手続きはパートナーショップで完了します。当サイトは支払いも配送も取り扱いません。',
    illustrativeImage: 'イメージ写真であり、この商品そのものではありません。商品の写真はパートナーのページにあります。',
    imageCredit: (partner) => `商品写真：${partner}`,
    related: 'このカテゴリーの他の商品',
    backToCategory: 'カテゴリーに戻る',
    viewProduct: '商品を見る',
    detailsH2: '商品情報',
    specLabels: {
      material: '素材',
      size: 'サイズ',
      weight: '重さ',
      volume: '容量',
      origin: '原産地',
      contents: '内容',
      color: '色',
      care: 'お手入れ',
      shelfLife: '賞味期限',
    },
    ingredientsH3: '原材料',
    allergensH3: 'アレルゲン',
    detailsSource: (partner, date) => `商品情報：${partner}、${date} に確認`,
  },
  faqAnswerFixes: {
    1: 'はい。ドゥオッジ（duodji）はサーミ語で伝統的な手仕事を指す言葉で、丸い「Sámi Duodji」の商標は、サーミの作り手が伝統的な技法と材料でつくった品に与えられる真正性の証です。この商標のある品を選ぶこと、あるいは名前の分かるサーミの作り手や正規販売者から直接買うことで、対価は地域に残り、工場でつくられた模倣品ではなく本物の仕事が手に入ります。LaplandGifts はサーミの手仕事をひとつも扱っていません。似せた品を売るより、ドゥオッジの販売者をご案内したいからです。',
    2: '多くのショップが対応しており、このサイト自体がその上に成り立っています。ここに並ぶ商品は、それをつくるか在庫として持つフィンランドまたは北欧のショップが販売し発送するもので、当サイトが送ることはありません。各カードにはそのショップの配送地域と対象外の国名を記載しています。食品の規則はより厳しく、トナカイの干し肉は欧州連合の域内では送れますが、イギリス、アメリカ、日本へは送れません。旅行中にオンラインで注文すれば、壊れやすい品はスーツケースではなく別便で届きます。当サイトの #LaplandVibes プリント商品はまだ販売していません。',
  },
  experience: {
    voucherH2: '体験ギフトカード',
    voucherNote:
      'Elämyslahjat.fi で購入し、メールで届きます。受け取った人が日程を予約し、体験はラップランドで利用します。',
    priceNote: (price) => `${price} から`,
    priceAsOf: (asOf) => `開始価格は ${asOf} に GetYourGuide で確認したものです。正確な価格は選ぶ日付によって変わります。`,
    groups: {
      aurora: 'オーロラ',
      husky: 'ハスキーぞり',
      reindeer: 'トナカイ',
      snowmobile: 'スノーモービルサファリ',
      nature: '自然と国立公園',
      sauna: 'サウナと氷穴泳ぎ',
      santa: 'サンタクロースと雪',
      kids: '子ども向け',
    },
    duration: (value) => `所要時間 ${value}`,
    viewOnGyg: '空き状況を見る',
  },
  shipping: {
    worldwide: '世界各国へ配送',
    euOnly: 'ヨーロッパのみ配送',
    fiOnly: 'フィンランド国内のみ配送',
    zoneShort: { worldwide: '世界各国', eu: 'ヨーロッパのみ', fi: 'フィンランドのみ' },
    exceptShort: (zone, count) => `${zone}、${count} か国を除く`,
    exceptNote: (countries) => `次の国へは配送されません：${countries.join('、')}。`,
    selectorLabel: '配送先',
    selectorAll: 'すべての国',
    title: '配送',
    table: { shop: 'パートナーショップ', area: '配送地域', checked: '確認日' },
    foodRules: {
      title: '食品と肉：どこへ何を送れるか',
      intro: 'ベリーパウダー、ジャム、チョコレートは自由に送れます。トナカイの干し肉やそのほかの肉は送れません。規則を決めるのは届け先の国であり、当サイトではありません。',
      rows: [
        { area: '欧州連合', rule: '可能です。食肉製品は加盟国間を自由に移動できます。' },
        { area: 'ノルウェー', rule: '欧州連合からは可能ですが、到着時に関税と付加価値税がかかります。' },
        { area: 'イギリス', rule: '不可能です。2025年4月以降、トナカイを含むシカ類の肉を欧州連合から持ち込むことはできません。' },
        { area: 'アメリカ合衆国', rule: '郵便では不可能です。旅行者は原産地の書類があればフィンランドから干し肉を持ち込めますが、郵便小包は商業輸入として扱われます。' },
        { area: '日本', rule: '不可能です。肉は輸送方法にかかわらず公的な検査証明書が必要で、郵便小包は名指しで挙げられています。' },
      ],
    },
  },
  boutique: {
    hubTitle: 'ラップランドのブティック',
    hubLead: 'ラップランドの工芸品を買える店を、店ごとに。',
    hubIntro: 'このページの店はすべてラップランドの企業です。自宅へ配送する店もあれば、現地を訪ねる店もあり、各リンクは企業自身のサイトへつながります。',
    townsH2: '地域別',
    elsewhereH2: 'ラップランドのその他の地域',
    filterAll: 'すべて',
    filterOnline: '自宅へ配送',
    filterPhysical: '現地を訪問',
    onlineBadge: 'オンラインショップ',
    physicalBadge: '実店舗',
    count: (n: number) => `${n}店`,
    visitH2: '現地を訪問',
    shopAtH2: '自宅から注文',
    outboundCta: '店のサイトへ',
    crossSellH2: 'こうした品をオンラインで買う',
    crossSellCta: 'カテゴリを見る',
    townNames: {
      rovaniemi: 'Rovaniemi', inari: 'Inari', posio: 'Posio',
      levi: 'Levi', sodankyla: 'Sodankylä', yllas: 'Ylläs',
      saariselka: 'Saariselkä', enontekio: 'Enontekiö', utsjoki: 'Utsjoki',
    },
    duodjiH2: '本物のサーミのドゥオッジを見分ける',
    duodjiBody: 'ドゥオッジ（duodji）はサーミの人々が伝統的な素材と技法でつくる工芸品です。土産物の模造品は見た目を写すだけで、つくり手も伝統もありません。この違いは、その文化を担う人々にとって重要です。認定販売店であれば、誰がつくった品かを教えてくれます。',
    duodjiAuthorized: 'サーミのドゥオッジ認定販売店',
    listingH2: 'ラップランドで店を営んでいますか',
    listingBody: '掲載はラップランドのすべての企業に無料です。どのような店か、いま知名度が低い理由、そして客に見つけてもらえたら何が変わるかをお知らせください。',
    listingCta: 'お問い合わせ',
  },
})

const zhCN: ShopCopy = over({
  nav: { shop: '商店', guides: '礼物指南', shipping: '配送', allProducts: '全部商品' },
  home: {
    heroKicker: '从芬兰直接送到家门口',
    heroTitle: '芬兰礼物与',
    heroTitleAccent: '拉普兰纪念品',
    heroLead:
      '芬兰设计与手工艺、糖果与浆果粉，集中在一处，寄到你居住的地方。无论你是在这里度假，还是从地球另一端下单，每件商品都由芬兰或北欧的商店销售和寄出，而不是由我们。',
    categoriesH2: '在拉普兰买什么',
    categoriesSub:
      '芬兰设计、服装、手工艺、甜食、浆果粉、我们自己的周边，以及可以送人的体验。每个分类都会打开真正发货的那家商店。',
    featuredH2: '来自合作商店的礼物与纪念品',
    featuredSub:
      '从各个分类中挑选的几件商品。每个价格都取自合作商店，并标注了核对日期。',
    valueProp: {
      h2: '在这里怎么买',
      sub: 'LaplandGifts 是一份核对过的选品，不是收银台。从这个页面到包裹，一共三步。',
      steps: [
        {
          title: '浏览核对过的选品',
          description:
            '每件商品在收录之前，都已在商店自己的页面上打开查看过。名称、材质和价格都是从那里读来的，不是我们写的。',
        },
        {
          title: '确认配送国家',
          description:
            '每张卡片都会说明这家商店是否寄到你居住的地方，并列出不发货的国家。你在点击之前就知道，而不是到结账时才发现。',
        },
        {
          title: '在合作商店下单',
          description:
            '按钮会打开销售该商品的商店。付款、配送、退货和保修都归它，如果你下单，我们会获得佣金。',
        },
      ],
    },
    promises: {
      h2: 'LaplandGifts 做的事',
      sub: '我们没有仓库，也没有收银台。工作是寻找、核对和汇总。',
      items: [
        {
          title: '逐件手工挑选',
          description:
            '每件商品都是一件一件挑出来的，先在合作方自己的页面上读过。不用商品数据源，没有我们没亲自打开过的东西。',
        },
        {
          title: '价格取自源头',
          description:
            '每个价格都来自合作方的商品页面，并标注核对日期。最终价格由商店决定。',
        },
        {
          title: '商品信息集中在一处',
          description:
            '材质、尺寸、容量、成分和过敏原都按合作方的说明列出，比较时不必开十个浏览器标签。',
        },
        {
          title: '适用商店自己的条款',
          description:
            '你在合作方的商店里下单，因此适用的是它的付款、配送、退货和保修条款。包裹也由它寄出。',
        },
      ],
    },
  },
  category: {
    names: {
      design: '芬兰设计',
      clothing: '服装与针织',
      handicrafts: '芬兰手工艺',
      treats: '甜食与美食礼品',
      superfoods: '北极浆果粉',
      merch: '拉普兰T恤与周边',
      experiences: '拉普兰体验礼物',
    },
    intro: {
      design: '姆明马克杯、Iittala 玻璃、Marimekko 和 Aarikka 木饰品：真正会被带回家的芬兰设计。每件商品都由销售它的芬兰或北欧商店寄出。',
      clothing: 'Halti 的冲锋衣、来自赫尔辛基的 Makia 街头服饰，以及 North Outdoor 在奥卢自有工厂织成的美利奴针织。',
      handicrafts: '罗瓦涅米的 Marttiini 刀具、Kupilka 户外餐具、来自拉普阿的 Lapuan Kankurit 亚麻，以及波西奥的 Pentik 陶瓷：用来用的手工艺，不是摆着看的。',
      treats: '芬兰甜食与美食礼品：咸甘草糖、Fazer 巧克力、Nordqvist 与姆明茶、姆明咖啡、驯鹿肉干和沙棘果酱。各国的进口规定不同，请查看每张卡片上的配送说明。',
      superfoods: '北极浆果粉、桦褐孔菌，以及在罗瓦涅米生产的 Arctic Warriors 草本产品，均来自芬兰生产者。',
      merch: '我们自己的 #LAPLANDVIBES 印花，用在T恤、连帽衫和帽子上。印制商店尚未开张，所以今天这里还没有可买的东西。开张时会在电子报中通知。',
      experiences: '极光之旅、哈士奇雪橇和圣诞老人村：现在作为礼物买下，等收礼的人选好日期再预订。',
    },
    productCount: (n) => `${n} 件商品`,
    emptyCategory:
      '这个分类还在补充中。在此期间，可以看看其他分类，或者翻翻礼物指南。',
    emptyForCountry: '这个分类里还没有商品可以寄到你所在的国家。切换配送国家即可查看全部。',
  },
  product: {
    buyAt: (partner) => `在 ${partner} 购买`,
    priceFrom: (value, currency) => {
      const eur = approxEur(value, currency)
      return eur ? `${fmt(value, currency, 'zh-CN')} 起（约 ${eur} 欧元）` : `${fmt(value, currency, 'zh-CN')} 起`
    },
    priceNote: (date, partner) => `价格于 ${date} 在 ${partner} 核对。最终价格由商店决定。`,
    checkoutNote: '你在合作商店完成购买。我们不处理你的付款和配送。',
    illustrativeImage: '示意图片，并非这件商品本身。商品照片请见合作方的页面。',
    imageCredit: (partner) => `商品照片：${partner}`,
    related: '这个分类的更多商品',
    backToCategory: '返回分类',
    viewProduct: '查看商品',
    detailsH2: '商品信息',
    specLabels: {
      material: '材质',
      size: '尺寸',
      weight: '重量',
      volume: '容量',
      origin: '产地',
      contents: '内容',
      color: '颜色',
      care: '保养',
      shelfLife: '保质期',
    },
    ingredientsH3: '成分',
    allergensH3: '过敏原',
    detailsSource: (partner, date) => `商品信息：${partner}，于 ${date} 读取`,
  },
  faqAnswerFixes: {
    1: '是的。Duodji 是萨米语中传统手工艺的说法，圆形的「Sámi Duodji」商标是真品标识，只授予由萨米工匠以传统技法和材料制作的作品。选择带有该标识的作品，或直接向具名的萨米工匠或授权卖家购买，可以让钱留在社区里，买到的是真正的手艺而不是工厂仿制品。LaplandGifts 完全不销售萨米手工艺品：我们宁愿把你指给一位 duodji 卖家，也不卖给你一件仿制品。',
    2: '很多商店都寄，这个网站正是建立在这一点上：这里的每件商品都由制造或备货它的芬兰或北欧商店销售和寄出，从来不是我们。每张卡片都会写明那家商店的配送范围和不发货的国家。食品的规定更严格，驯鹿肉干可以在欧盟境内寄送，但不能寄往英国、美国或日本。旅行途中在网上下单，易碎的东西就会单独寄出，而不用塞进行李箱。我们自己的 #LaplandVibes 印花周边还没有开售。',
  },
  experience: {
    voucherH2: '体验礼品卡',
    voucherNote:
      '在 Elämyslahjat.fi 购买，通过电子邮件送达。收礼人自行预约日期，体验在拉普兰兑换。',
    priceNote: (price) => `${price} 起`,
    priceAsOf: (asOf) => `起始价格于 ${asOf} 在 GetYourGuide 上读取。确切价格取决于你选择的日期。`,
    groups: {
      aurora: '极光',
      husky: '哈士奇雪橇',
      reindeer: '驯鹿',
      snowmobile: '雪地摩托之旅',
      nature: '自然与国家公园',
      sauna: '桑拿与冰泳',
      santa: '圣诞老人与雪',
      kids: '适合儿童',
    },
    duration: (value) => `时长 ${value}`,
    viewOnGyg: '查看可订日期',
  },
  shipping: {
    worldwide: '寄往世界各地',
    euOnly: '仅寄往欧洲',
    fiOnly: '仅在芬兰境内配送',
    zoneShort: { worldwide: '全球', eu: '仅欧洲', fi: '仅芬兰' },
    exceptShort: (zone, count) => `${zone}，${count} 个国家除外`,
    exceptNote: (countries) => `不寄往以下国家：${countries.join('、')}。`,
    selectorLabel: '配送至',
    selectorAll: '所有国家',
    title: '配送',
    table: { shop: '合作商店', area: '配送范围', checked: '核对日期' },
    foodRules: {
      title: '食品与肉类：什么能寄到哪里',
      intro: '浆果粉、果酱和巧克力可以自由寄送。驯鹿肉干和其他肉类不行，规则由目的地国家制定，不是我们定的。',
      rows: [
        { area: '欧洲联盟', rule: '允许。肉制品在成员国之间自由流通。' },
        { area: '挪威', rule: '从欧盟寄出是允许的，但抵达时会征收关税和增值税。' },
        { area: '英国', rule: '无法寄送。自 2025 年 4 月起，包括驯鹿在内的鹿科肉类不得从欧盟带入。' },
        { area: '美国', rule: '不能邮寄。旅客可以携带带原产地文件的芬兰肉干入境，但邮包会被视为商业进口。' },
        { area: '日本', rule: '无法寄送。无论运输方式如何，肉类都需要官方检验证书，而邮包被明确列出。' },
      ],
    },
  },
  boutique: {
    hubTitle: '拉普兰精品店',
    hubLead: '在店里买到拉普兰手工艺品。',
    hubIntro: '本页每一家店都是拉普兰本地企业。有的可以寄到家，有的需要到店，每个链接都通向企业自己的网站。',
    townsH2: '按地区',
    elsewhereH2: '拉普兰其他地区',
    filterAll: '全部',
    filterOnline: '可寄到家',
    filterPhysical: '到店选购',
    onlineBadge: '网店',
    physicalBadge: '实体店',
    count: (n: number) => `${n} 家店`,
    visitH2: '到店选购',
    shopAtH2: '在家下单',
    outboundCta: '前往店铺网站',
    crossSellH2: '在网上买同类商品',
    crossSellCta: '浏览分类',
    townNames: {
      rovaniemi: 'Rovaniemi', inari: 'Inari', posio: 'Posio',
      levi: 'Levi', sodankyla: 'Sodankylä', yllas: 'Ylläs',
      saariselka: 'Saariselkä', enontekio: 'Enontekiö', utsjoki: 'Utsjoki',
    },
    duodjiH2: '如何辨认真正的萨米 duodji',
    duodjiBody: 'duodji 是萨米人用传统材料和技法制作的手工艺品。旅游纪念品的仿制品只复制外形，既没有制作者，也没有传统。这个区别对这一文化所属的族群很重要，授权经销商能够告诉你这件作品出自谁手。',
    duodjiAuthorized: '萨米 duodji 授权经销商',
    listingH2: '您在拉普兰经营店铺吗',
    listingBody: '拉普兰的任何企业均可免费登记。请告诉我们你们是谁、目前曝光为何不足，以及顾客找到你们后会有什么改变。',
    listingCta: '联系我们',
  },
})

const ko: ShopCopy = over({
  nav: { shop: '스토어', guides: '선물 가이드', shipping: '배송', allProducts: '전체 상품' },
  home: {
    heroKicker: '핀란드에서 집 앞까지',
    heroTitle: '핀란드 선물과',
    heroTitleAccent: '라플란드 기념품',
    heroLead:
      '핀란드의 디자인과 수공예, 과자와 베리 파우더를 한곳에 모아 사시는 곳까지 보내드립니다. 이곳에 여행 중이든 지구 반대편에서 주문하든, 모든 상품은 핀란드 또는 북유럽 상점이 판매하고 발송합니다. 저희가 아닙니다.',
    categoriesH2: '라플란드에서 무엇을 살까',
    categoriesSub:
      '핀란드 디자인, 의류, 수공예, 과자, 베리 파우더, 저희 굿즈, 그리고 선물할 수 있는 체험. 각 카테고리는 실제로 상품을 보내는 상점으로 이어집니다.',
    featuredH2: '파트너 상점의 선물과 기념품',
    featuredSub:
      '여러 카테고리에서 고른 상품 몇 가지입니다. 모든 가격은 파트너 상점에서 확인한 것이며 확인한 날짜가 함께 표시됩니다.',
    valueProp: {
      h2: '이곳에서 구매하는 방법',
      sub: 'LaplandGifts는 확인을 거친 선별 목록이지 결제창이 아닙니다. 이 페이지에서 소포까지 세 단계입니다.',
      steps: [
        {
          title: '확인을 거친 선별 목록 둘러보기',
          description:
            '모든 상품은 이곳에 추가되기 전에 상점의 자체 페이지에서 직접 열어 확인했습니다. 이름과 소재, 가격은 그곳에서 읽어 온 것이지 저희가 쓴 것이 아닙니다.',
        },
        {
          title: '배송 국가 확인하기',
          description:
            '각 카드에 그 상점이 사시는 곳으로 보내는지, 제외되는 나라는 어디인지 적혀 있습니다. 결제 단계가 아니라 누르기 전에 알 수 있습니다.',
        },
        {
          title: '파트너 상점에서 구매하기',
          description:
            '버튼을 누르면 그 상품을 파는 상점이 열립니다. 결제와 배송, 반품과 보증은 그 상점의 몫이며, 구매가 이루어지면 저희는 수수료를 받습니다.',
        },
      ],
    },
    promises: {
      h2: 'LaplandGifts가 하는 일',
      sub: '창고도 결제창도 없습니다. 저희 일은 찾고, 확인하고, 모으는 것입니다.',
      items: [
        {
          title: '하나씩 직접 고릅니다',
          description:
            '상품은 한 번에 하나씩 고르고, 먼저 파트너의 페이지에서 내용을 읽습니다. 상품 피드는 쓰지 않으며, 저희가 직접 열어 보지 않은 것은 올리지 않습니다.',
        },
        {
          title: '가격은 출처에서 확인합니다',
          description:
            '모든 가격은 파트너의 상품 페이지에서 가져온 것이며 확인한 날짜가 함께 적혀 있습니다. 최종 가격은 상점이 정합니다.',
        },
        {
          title: '상품 정보를 한곳에',
          description:
            '소재와 사이즈, 용량, 원재료, 알레르기 유발 물질을 파트너가 표시한 그대로 정리했습니다. 비교하려고 탭을 열 개 열 필요가 없습니다.',
        },
        {
          title: '상점의 약관이 적용됩니다',
          description:
            '구매는 파트너의 상점에서 이루어지므로 결제와 배송, 반품과 보증은 그 상점의 약관을 따릅니다. 소포를 보내는 것도 그 상점입니다.',
        },
      ],
    },
  },
  category: {
    names: {
      design: '핀란드 디자인',
      clothing: '의류와 니트',
      handicrafts: '핀란드 수공예',
      treats: '과자와 식품 선물',
      superfoods: '북극 베리 파우더',
      merch: '라플란드 티셔츠와 굿즈',
      experiences: '라플란드 체험 선물',
    },
    intro: {
      design: '무민 머그, 이딸라 유리, 마리메꼬, 아리카의 나무 장신구까지. 실제로 집까지 따라오는 핀란드 디자인입니다. 모든 상품은 그것을 파는 핀란드 또는 북유럽 상점에서 발송됩니다.',
      clothing: '할티의 쉘 재킷, 헬싱키에서 온 마키아의 스트리트웨어, 그리고 오울루의 자체 공장에서 짜는 노스 아웃도어의 메리노 니트.',
      handicrafts: '로바니에미의 마르띠니 나이프, 쿠필카의 야외용 식기, 라푸아의 라푸안 칸쿠리트 리넨, 포시오의 펜틱 도자기. 진열장이 아니라 손에 쓰이는 수공예입니다.',
      treats: '핀란드의 과자와 식품 선물. 살미아키, 파제르 초콜릿, 노르드크비스트와 무민 차, 무민 커피, 순록 육포, 산자나무 열매 잼. 수입 규정은 나라마다 다르므로 각 카드의 배송 안내를 확인하세요.',
      superfoods: '북극 베리 파우더와 차가버섯, 그리고 로바니에미에서 만드는 아크틱 워리어스의 허브 제품. 모두 핀란드 생산자의 것입니다.',
      merch: '저희 #LAPLANDVIBES 프린트를 넣은 티셔츠와 후디, 모자입니다. 프린트 상점이 아직 열지 않아 오늘은 여기서 살 수 있는 것이 없습니다. 문을 열면 뉴스레터로 알려드립니다.',
      experiences: '오로라 투어, 허스키 썰매, 산타클로스 마을. 지금은 선물로 구매하고, 받는 사람이 날짜를 고르면 예약합니다.',
    },
    productCount: (n) => `상품 ${n}개`,
    emptyCategory:
      '이 카테고리는 아직 채우는 중입니다. 그동안 다른 카테고리를 둘러보시거나 선물 가이드를 참고하세요.',
    emptyForCountry: '이 카테고리의 상품 중 아직 고객님의 나라로 배송되는 것이 없습니다. 배송 국가를 바꾸면 전체를 볼 수 있습니다.',
  },
  product: {
    buyAt: (partner) => `${partner}에서 구매`,
    priceFrom: (value, currency) => {
      const eur = approxEur(value, currency)
      return eur ? `${fmt(value, currency, 'ko-KR')}부터 (약 ${eur}유로)` : `${fmt(value, currency, 'ko-KR')}부터`
    },
    priceNote: (date, partner) => `가격은 ${date}에 ${partner}에서 확인했습니다. 최종 가격은 상점이 정합니다.`,
    checkoutNote: '구매는 파트너 상점에서 완료됩니다. 결제와 배송은 저희가 처리하지 않습니다.',
    illustrativeImage: '분위기를 보여주는 사진이며 이 상품 자체는 아닙니다. 상품 사진은 파트너의 페이지에 있습니다.',
    imageCredit: (partner) => `상품 사진: ${partner}`,
    related: '이 카테고리의 다른 상품',
    backToCategory: '카테고리로 돌아가기',
    viewProduct: '상품 보기',
    detailsH2: '상품 정보',
    specLabels: {
      material: '소재',
      size: '사이즈',
      weight: '무게',
      volume: '용량',
      origin: '원산지',
      contents: '구성',
      color: '색상',
      care: '관리법',
      shelfLife: '유통기한',
    },
    ingredientsH3: '원재료',
    allergensH3: '알레르기 유발 물질',
    detailsSource: (partner, date) => `상품 정보: ${partner}, ${date}에 확인`,
  },
  faqAnswerFixes: {
    1: '그렇습니다. 두오지(duodji)는 전통 수공예를 뜻하는 사미어이며, 둥근 「Sámi Duodji」 상표는 사미 장인이 전통적인 방식과 재료로 만든 물건에만 주어지는 진품 표시입니다. 이 표시가 있는 물건을 고르거나 이름이 알려진 사미 장인 또는 공인 판매처에서 직접 사면, 돈은 그 공동체에 남고 공장에서 흉내 낸 물건이 아니라 진짜 작업물을 얻게 됩니다. LaplandGifts는 사미 수공예를 하나도 취급하지 않습니다. 모조품을 파느니 두오지 판매처를 알려드리는 편이 낫다고 보기 때문입니다.',
    2: '많은 상점이 보내며, 이 사이트 자체가 그 위에 서 있습니다. 여기 있는 모든 상품은 그것을 만들거나 재고로 두는 핀란드 또는 북유럽 상점이 팔고 부치며, 저희가 보내는 일은 없습니다. 각 카드에는 그 상점의 배송 지역과 제외되는 나라가 적혀 있고, 식품은 규정이 더 엄격해서 말린 순록 고기는 유럽연합 안에서는 오가지만 영국이나 미국, 일본으로는 갈 수 없습니다. 여행 중에 온라인으로 주문하면 깨지기 쉬운 물건이 짐가방이 아니라 따로 이동합니다. 저희 #LaplandVibes 프린트 굿즈는 아직 판매하지 않습니다.',
  },
  experience: {
    voucherH2: '체험 기프트 카드',
    voucherNote:
      'Elämyslahjat.fi에서 구매하며 이메일로 전달됩니다. 받는 사람이 날짜를 예약하고, 체험은 라플란드에서 이용합니다.',
    priceNote: (price) => `${price}부터`,
    priceAsOf: (asOf) => `시작 가격은 ${asOf}에 GetYourGuide에서 확인했습니다. 정확한 가격은 선택한 날짜에 따라 달라집니다.`,
    groups: {
      aurora: '오로라',
      husky: '허스키 썰매',
      reindeer: '순록',
      snowmobile: '스노모빌 사파리',
      nature: '자연과 국립공원',
      sauna: '사우나와 얼음 수영',
      santa: '산타클로스와 눈',
      kids: '어린이를 위한',
    },
    duration: (value) => `소요 시간 ${value}`,
    viewOnGyg: '예약 가능일 보기',
  },
  shipping: {
    worldwide: '전 세계 배송',
    euOnly: '유럽으로만 배송',
    fiOnly: '핀란드 내에서만 배송',
    zoneShort: { worldwide: '전 세계', eu: '유럽만', fi: '핀란드만' },
    exceptShort: (zone, count) => `${zone}, ${count}개국 제외`,
    exceptNote: (countries) => `다음 국가로는 배송되지 않습니다: ${countries.join(', ')}.`,
    selectorLabel: '배송 국가',
    selectorAll: '모든 국가',
    title: '배송',
    table: { shop: '파트너 상점', area: '배송 지역', checked: '확인일' },
    foodRules: {
      title: '식품과 육류: 어디로 무엇을 부칠 수 있는가',
      intro: '베리 파우더와 잼, 초콜릿은 자유롭게 오갑니다. 말린 순록 고기와 다른 육류는 그렇지 않으며, 규정을 정하는 것은 도착 국가이지 저희가 아닙니다.',
      rows: [
        { area: '유럽연합', rule: '허용됩니다. 육류 제품은 회원국 사이를 자유롭게 오갑니다.' },
        { area: '노르웨이', rule: '유럽연합에서 보내는 것은 허용되지만 도착 시 관세와 부가가치세가 부과됩니다.' },
        { area: '영국', rule: '불가능합니다. 2025년 4월부터 순록을 포함한 사슴류 고기는 유럽연합에서 반입할 수 없습니다.' },
        { area: '미국', rule: '우편으로는 불가능합니다. 여행자는 원산지 서류를 갖추면 핀란드에서 말린 고기를 가져갈 수 있지만, 우편 소포는 상업적 수입으로 간주됩니다.' },
        { area: '일본', rule: '불가능합니다. 육류는 운송 방식과 관계없이 공식 검사 증명서가 필요하며, 우편 소포가 명시적으로 언급되어 있습니다.' },
      ],
    },
  },
  boutique: {
    hubTitle: '라플란드 부티크',
    hubLead: '라플란드 공예품을 사는 곳, 가게에서 직접.',
    hubIntro: '이 페이지의 모든 가게는 라플란드 기업입니다. 집으로 배송하는 곳도 있고 직접 방문하는 곳도 있으며, 모든 링크는 기업 자체 사이트로 연결됩니다.',
    townsH2: '지역별',
    elsewhereH2: '라플란드의 다른 지역',
    filterAll: '전체',
    filterOnline: '집으로 배송',
    filterPhysical: '직접 방문',
    onlineBadge: '온라인 매장',
    physicalBadge: '오프라인 매장',
    count: (n: number) => `${n}곳`,
    visitH2: '직접 방문',
    shopAtH2: '집에서 주문',
    outboundCta: '매장 사이트로',
    crossSellH2: '이런 물건을 온라인으로 구매',
    crossSellCta: '카테고리 보기',
    townNames: {
      rovaniemi: 'Rovaniemi', inari: 'Inari', posio: 'Posio',
      levi: 'Levi', sodankyla: 'Sodankylä', yllas: 'Ylläs',
      saariselka: 'Saariselkä', enontekio: 'Enontekiö', utsjoki: 'Utsjoki',
    },
    duodjiH2: '진짜 사미 두오지를 알아보는 법',
    duodjiBody: '두오지(duodji)는 사미 장인이 전통 재료와 기법으로 만드는 공예품입니다. 기념품 모조품은 겉모습만 베낄 뿐 만든 사람도 전통도 없습니다. 이 차이는 해당 문화를 지닌 공동체에게 중요하며, 인증 판매점은 누가 만든 물건인지 알려줄 수 있습니다.',
    duodjiAuthorized: '사미 두오지 인증 판매점',
    listingH2: '라플란드에서 가게를 운영하십니까',
    listingBody: '등록은 모든 라플란드 기업에게 무료입니다. 어떤 곳인지, 지금 노출이 왜 약한지, 고객이 찾아오면 무엇이 달라질지 알려주십시오.',
    listingCta: '문의하기',
  },
})

export const SHOP_COPY: Record<Lang, ShopCopy> = {
  en,
  fi,
  de,
  sv,
  fr,
  es,
  it,
  nl,
  'pt-BR': ptBR,
  ja,
  'zh-CN': zhCN,
  ko,
}
