import type { Lang } from '../i18n/useLang'

export interface ShopCopy {
  nav: { shop: string; guides: string; shipping: string; allProducts: string }
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
    emptyForCountry: string
  }
  product: {
    buyAt: (partner: string) => string
    priceFrom: (value: number, currency: string) => string
    priceNote: (date: string, partner: string) => string
    checkoutNote: string
    related: string
    backToCategory: string
  }
  shipping: {
    worldwide: string
    euOnly: string
    fiOnly: string
    selectorLabel: string
    title: string
  }
}

const fmt = (value: number, currency: string, locale: string) =>
  new Intl.NumberFormat(locale, { style: 'currency', currency, maximumFractionDigits: 0 }).format(value)

const en: ShopCopy = {
  nav: { shop: 'Shop', guides: 'Gift guides', shipping: 'Delivery', allProducts: 'All products' },
  category: {
    names: {
      design: 'Finnish design',
      clothing: 'Clothing and accessories',
      handicrafts: 'Lapland handicrafts',
      treats: 'Treats',
      superfoods: 'Superfoods and wellbeing',
      merch: 'LaplandVibes merch',
      experiences: 'Experience gifts',
    },
    intro: {
      design: 'Marimekko, Iittala, Arabia and the rest of the shelf Finns actually own. Every item ships from a Finnish or Nordic shop.',
      clothing: 'Merino knitwear from Oulu, Helsinki streetwear and winter gear built for the cold you just experienced.',
      handicrafts: 'Puukko knives, kuksa cups and Sami work from authorised sellers only.',
      treats: 'Salmiakki, cloudberry jam, chocolate and dried reindeer. Food rules differ by country, so check the delivery note on each card.',
      superfoods: 'Bilberry and lingonberry powders, chaga, sea buckthorn and Nordic natural cosmetics.',
      merch: 'Our own #LAPLANDVIBES shirts, hoodies, caps and neck gaiters, printed on demand and shipped from the EU or the US.',
      experiences: 'Aurora hunts, husky rides and reindeer farms, bought as a gift and booked when the recipient chooses.',
    },
    productCount: (n) => (n === 1 ? '1 product' : `${n} products`),
    emptyForCountry: 'None of the products in this category ship to your country yet. Switch the delivery country to see everything.',
  },
  product: {
    buyAt: (partner) => `Buy at ${partner}`,
    priceFrom: (value, currency) => `from ${fmt(value, currency, 'en-GB')}`,
    priceNote: (date, partner) => `Price read from ${partner} on ${date}. The shop sets the final price.`,
    checkoutNote: 'You complete the purchase in the partner shop. We do not handle your payment or delivery.',
    related: 'More from this category',
    backToCategory: 'Back to category',
  },
  shipping: {
    worldwide: 'Ships worldwide',
    euOnly: 'Ships to Europe only',
    fiOnly: 'Ships within Finland only',
    selectorLabel: 'Deliver to',
    title: 'Delivery',
  },
}

const fi: ShopCopy = {
  nav: { shop: 'Kauppa', guides: 'Lahjaoppaat', shipping: 'Toimitus', allProducts: 'Kaikki tuotteet' },
  category: {
    names: {
      design: 'Suomalainen design',
      clothing: 'Vaatteet ja asusteet',
      handicrafts: 'Lapin käsityöt',
      treats: 'Herkut',
      superfoods: 'Superfoodit ja hyvinvointi',
      merch: 'LaplandVibes-merch',
      experiences: 'Elämyslahjat',
    },
    intro: {
      design: 'Marimekko, Iittala, Arabia ja loput siitä hyllystä, joka suomalaisilta oikeasti löytyy. Jokainen tuote lähtee suomalaisesta tai pohjoismaisesta kaupasta.',
      clothing: 'Merinoneuleita Oulusta, helsinkiläistä streetwearia ja talvivaatteita siihen pakkaseen, jonka juuri koit.',
      handicrafts: 'Puukkoja, kuksia ja saamelaista käsityötä vain auktorisoiduilta myyjiltä.',
      treats: 'Salmiakkia, lakkahilloa, suklaata ja poron kuivalihaa. Elintarvikkeiden tuontisäännöt vaihtelevat maittain, joten tarkista toimitusmerkintä kortista.',
      superfoods: 'Mustikka- ja puolukkajauheita, pakuria, tyrniä ja pohjoista luonnonkosmetiikkaa.',
      merch: 'Oma #LAPLANDVIBES-mallisto: paidat, hupparit, lippikset ja tuubihuivit, painetaan tilauksesta ja lähetetään EU:sta tai Yhdysvalloista.',
      experiences: 'Revontuliretkiä, huskyajeluja ja porotiloja lahjaksi ostettuna, varattavaksi silloin kun saaja itse valitsee.',
    },
    productCount: (n) => (n === 1 ? '1 tuote' : `${n} tuotetta`),
    emptyForCountry: 'Yksikään tämän kategorian tuote ei toimita vielä valitsemaasi maahan. Vaihda toimitusmaa nähdäksesi kaikki.',
  },
  product: {
    buyAt: (partner) => `Osta: ${partner}`,
    priceFrom: (value, currency) => `alk. ${fmt(value, currency, 'fi-FI')}`,
    priceNote: (date, partner) => `Hinta luettu kumppanin ${partner} sivulta ${date}. Lopullisen hinnan määrittää kauppa.`,
    checkoutNote: 'Viimeistelet ostoksen kumppanin kaupassa. Me emme käsittele maksua emmekä toimitusta.',
    related: 'Lisää tästä kategoriasta',
    backToCategory: 'Takaisin kategoriaan',
  },
  shipping: {
    worldwide: 'Toimitus maailmanlaajuisesti',
    euOnly: 'Toimitus vain Eurooppaan',
    fiOnly: 'Toimitus vain Suomeen',
    selectorLabel: 'Toimitusmaa',
    title: 'Toimitus',
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
