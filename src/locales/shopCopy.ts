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
  faqAnswerFixes: {
    1: 'Kyllä. Duodji on saamenkielinen sana perinteiselle käsityölle, ja pyöreä Sámi Duodji -tavaramerkki on aitoustakuu: se myönnetään saamelaisten tekijöiden perinteisin menetelmin ja materiaalein valmistamille tuotteille. Kun valitset merkillä varustetun tuotteen tai ostat suoraan nimetyltä saamelaiselta käsityöläiseltä tai valtuutetulta myyjältä, tuki menee yhteisölle ja työ on aitoa, ei tehtaassa jäljiteltyä. LaplandGiftsin valikoimassa ei ole yhtään saamelaiskäsityötä: ohjaamme mieluummin duodji-myyjän luo kuin myymme jäljitelmän.',
    2: 'Moni lähettää, ja koko tämä sivusto perustuu siihen: jokaisen tuotteen myy ja postittaa se suomalainen tai pohjoismainen kauppa, joka sen tekee tai varastoi, emme me. Kortti kertoo kaupan toimitusalueen ja ne maat, jotka jäävät ulkopuolelle. Elintarvikkeissa säännöt ovat tiukemmat: poron kuivaliha kulkee EU:n sisällä mutta ei Britanniaan, Yhdysvaltoihin eikä Japaniin. Matkan aikana tilaamisen etu on se, että hauraat esineet matkaavat erikseen eivätkä matkalaukussa. Oma #LaplandVibes-painomallistomme ei ole vielä myynnissä.',
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
