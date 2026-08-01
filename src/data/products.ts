import type { Product } from './types'

/**
 * Kuratoitu tuotekatalogi. Jokainen rivi on avattu kumppanin sivulta ja
 * hinta luettu sieltä priceCheckedAt-päivänä: tarkistettiin HTTP 200,
 * ettei sivu ohjaa etusivulle, että <title> vastaa tuotetta ja että hinta
 * löytyy sivulta. Hinta on kumppanin "alkaen"-hinta, ei meidän hintamme,
 * ja se renderöidään aina "alk." + päivämäärä -muodossa.
 *
 * Kuvat ovat kumppanin omia tuotekuvia, haettu 1.8.2026 kunkin tuotesivun
 * og:image-tagista (kuva jonka kauppa itse tarjoaa jaettavaksi). Ohjaamme
 * ostajan kumppanin kauppaan ostamaan juuri sen tuotteen, joten kumppanin oma
 * kuva on sekä tarkin että se, mitä affiliate-kumppani haluaa meidän näyttävän.
 * Tämä merkitään kenttään imageIsPartner, joka ratkaisee tuotesivun
 * kuvamerkinnän (lähdemerkintä vs. "tunnelmakuva").
 *
 * 🔴 Kaksi kategoriaa on tarkoituksella tyhjä:
 *   - 'experiences' luetaan shared/gyg/picks.ts:stä, jotta GYG-ID:t pysyvät
 *     yhdessä verifioidussa lähteessä. Väärä GYG-ID ei 404:ää vaan tarjoilee
 *     hiljaa väärän maan tuotteen.
 *   - 'merch' odottaa Fourthwall-kaupan avaamista. Emme listaa tuotteita
 *     joita ei voi ostaa emmekä keksi tuotesivupolkuja kauppaan jota ei ole.
 * catalog.test.ts:n kategoriakattavuustesti ohittaa nämä kaksi.
 */
export const PRODUCTS: Product[] = [
  // ── design ────────────────────────────────────────────────────────────────
  {
    slug: 'moomin-blue-love-mug',
    category: 'design',
    brand: 'Moomin Arabia',
    name: {
      en: 'Moomin Blue Love mug 0,3 l',
      fi: 'Muumi Blue Love -muki 0,3 l',
    },
    description: {
      en: 'A 0.3 litre vitroporcelain mug from the Moomin Classics range, with Snorkmaiden and Moomintroll hugging and the 80th anniversary year stamped on the base. Designed in Finland, machine washable and microwave safe, so it survives daily use instead of sitting on a shelf.',
      fi: 'Muumi Classics -sarjan 3 desin vitroposliinimuki, jossa Niiskuneiti ja Muumipeikko halaavat ja pohjaan on leimattu Muumien 80-vuotisjuhlavuosi. Suunniteltu Suomessa, kestää konepesun ja mikron, joten se on arkikäyttöön eikä vitriiniin.',
    },
    priceFrom: 24.9,
    currency: 'EUR',
    priceCheckedAt: '2026-07-31',
    image: 'prod-moomin-blue-love-mug',
    imageIsPartner: true,
    partnerId: 'moomin',
    partnerProductUrl: 'https://shop.moomin.com/products/moomin-blue-love-mug-0-3l',
    featured: true,
  },
  {
    slug: 'moomin-mystical-forest-tumblers',
    category: 'design',
    brand: 'Moomin Arabia',
    name: {
      en: 'Moomin Mystical Forest tumblers 28 cl, 2-pack',
      fi: 'Muumi Mystical Forest -lasit 28 cl, 2 kpl',
    },
    description: {
      en: 'Two embossed 28 cl glass tumblers from the Mystical Forest collection, made at the Iittala glass factory in Finland. They come in a gift box, which saves you wrapping glassware in a hotel room.',
      fi: 'Kaksi kohokuvioitua 28 senttilitran lasia Mystical Forest -sarjasta, valmistettu Iittalan lasitehtaalla Suomessa. Tulevat lahjapakkauksessa, joten laseja ei tarvitse kääriä hotellihuoneessa.',
    },
    priceFrom: 29.9,
    currency: 'EUR',
    priceCheckedAt: '2026-07-31',
    image: 'prod-moomin-mystical-forest-tumblers',
    imageIsPartner: true,
    partnerId: 'moomin',
    partnerProductUrl:
      'https://shop.moomin.com/products/moomin-clear-glass-tumblers-2-pack-28cl-moomin-arabia',
    featured: true,
  },
  {
    slug: 'moomin-mystical-forest-wool-throw',
    category: 'design',
    brand: 'Moomin Arabia',
    name: {
      en: 'Moomin Mystical Forest wool throw 130x170 cm',
      fi: 'Muumi Mystical Forest -villatorkkupeitto 130 x 170 cm',
    },
    description: {
      en: 'A 130 by 170 cm throw in 100 per cent wool, designed in Finland for the Mystical Forest collection. Dry clean only, so treat it as a sofa blanket rather than a picnic rug.',
      fi: '130 x 170 senttimetrin torkkupeitto sataprosenttisesta villasta, suunniteltu Suomessa Mystical Forest -sarjaan. Vain kuivapesu, joten se on sohvan viltti eikä eväsretken alusta.',
    },
    priceFrom: 139.9,
    currency: 'EUR',
    priceCheckedAt: '2026-07-31',
    image: 'prod-moomin-mystical-forest-wool-throw',
    imageIsPartner: true,
    partnerId: 'moomin',
    partnerProductUrl:
      'https://shop.moomin.com/products/moomin-mystical-forest-wool-throw-130x170cm',
  },

  // ── clothing ──────────────────────────────────────────────────────────────
  {
    slug: 'halti-tokoi-dx-jacket',
    category: 'clothing',
    brand: 'Halti',
    name: {
      en: "Halti Tokoi DX shell jacket, men's",
      fi: 'Halti Tokoi DX -kuoritakki, miesten',
    },
    description: {
      en: 'A weatherproof shell with every seam taped, a light lining and an adjustable hood, cut loosely enough to layer a wool jumper underneath. Halti delivers within the EU only.',
      fi: 'Kuoritakki, jonka kaikki saumat on teipattu ja jossa on kevyt vuori ja säädettävä huppu. Väljä leikkaus jättää alle tilaa villapaidalle. Halti toimittaa vain EU:n sisälle.',
    },
    priceFrom: 175,
    currency: 'EUR',
    priceCheckedAt: '2026-07-31',
    image: 'prod-halti-tokoi-dx-jacket',
    imageIsPartner: true,
    partnerId: 'halti',
    partnerProductUrl: 'https://halti.com/products/tokoi-dx-jacket-mens',
    featured: true,
  },
  {
    slug: 'makia-merino-beanie',
    category: 'clothing',
    brand: 'Makia',
    name: {
      en: 'Makia Merino beanie',
      fi: 'Makia Merino -pipo',
    },
    description: {
      en: 'A plain Nordic beanie in merino wool, which balances temperature and moisture when you step from a warm cafe straight into the cold. No fist-sized logo on the front.',
      fi: 'Yksinkertainen pohjoismainen pipo merinovillasta. Merino tasaa lämpöä ja kosteutta, kun astut lämpimästä kahvilasta suoraan pakkaseen. Etuosassa ei ole nyrkin kokoista logoa.',
    },
    priceFrom: 55,
    currency: 'EUR',
    priceCheckedAt: '2026-07-31',
    image: 'prod-makia-merino-beanie',
    imageIsPartner: true,
    partnerId: 'makia',
    partnerProductUrl: 'https://makia.com/products/merino-cap-1',
  },
  {
    slug: 'makia-aurora-hoodie',
    category: 'clothing',
    brand: 'Makia',
    name: {
      en: 'Makia Aurora hooded sweatshirt',
      fi: 'Makia Aurora -huppari',
    },
    description: {
      en: 'A regular-fit hoodie in 100 per cent organic cotton from the Helsinki label Makia. Heavy enough to wear as the outer layer indoors and on mild autumn evenings.',
      fi: 'Väljähkö huppari sataprosenttisesta luomupuuvillasta helsinkiläiseltä Makialta. Riittävän paksu ulkokerrokseksi sisätiloissa ja leutoina syysiltoina.',
    },
    priceFrom: 119,
    currency: 'EUR',
    priceCheckedAt: '2026-07-31',
    image: 'prod-makia-aurora-hoodie',
    imageIsPartner: true,
    partnerId: 'makia',
    partnerProductUrl: 'https://makia.com/products/aurora-hooded-sweatshirt',
  },

  // ── handicrafts ───────────────────────────────────────────────────────────
  {
    slug: 'marttiini-lapinleuku-255',
    category: 'handicrafts',
    brand: 'Marttiini',
    name: {
      en: 'Marttiini Lapp knife 255',
      fi: 'Marttiini Lapinleuku 255',
    },
    description: {
      en: 'The traditional Lapp knife, 27 cm overall, with a stainless blade, a varnished curly birch handle and a leather sheath. Marttiini makes its knives in Rovaniemi, and this version of the model has a finger guard.',
      fi: 'Perinteinen lapinleuku, kokonaispituus 27 cm, ruostumaton terä, lakattu visakoivukahva ja nahkatuppi. Marttiini valmistaa puukkonsa Rovaniemellä, ja tässä mallissa on sormisuojus.',
    },
    priceFrom: 120,
    currency: 'EUR',
    priceCheckedAt: '2026-07-31',
    image: 'prod-marttiini-lapinleuku-255',
    imageIsPartner: true,
    partnerId: 'marttiini',
    partnerProductUrl:
      'https://www.marttiini.fi/epages/MarttiiniShop.sf/en_GB/?ObjectPath=/Shops/MarttiiniShop/Products/255010',
    featured: true,
    badges: ['made-in-lapland'],
  },
  {
    slug: 'marttiini-napapiirin-puukko',
    category: 'handicrafts',
    brand: 'Marttiini',
    name: {
      en: 'Marttiini Arctic Circle Knife',
      fi: 'Marttiini Napapiirin puukko',
    },
    description: {
      en: 'A small everyday knife, 20 cm overall, with a carbon steel blade, a waxed birch handle and a brown leather sheath. Carbon steel takes a keener edge than stainless but needs oiling, which Marttiini also reminds you of on the product page.',
      fi: 'Pieni arkipuukko, kokonaispituus 20 cm, hiiliteräksinen terä, vahattu koivukahva ja ruskea nahkatuppi. Hiiliteräs teroittuu terävämmäksi kuin ruostumaton mutta vaatii öljyämistä, mistä Marttiini myös muistuttaa tuotesivullaan.',
    },
    priceFrom: 39,
    currency: 'EUR',
    priceCheckedAt: '2026-07-31',
    image: 'prod-marttiini-napapiirin-puukko',
    imageIsPartner: true,
    partnerId: 'marttiini',
    partnerProductUrl:
      'https://www.marttiini.fi/epages/MarttiiniShop.sf/en_GB/?ObjectPath=/Shops/MarttiiniShop/Products/121019',
    badges: ['made-in-lapland'],
  },
  {
    slug: 'marttiini-ilves-131',
    category: 'handicrafts',
    brand: 'Marttiini',
    name: {
      en: 'Marttiini Lynx 131',
      fi: 'Marttiini Ilves 131',
    },
    description: {
      en: 'A 22 cm knife with a stainless blade, a varnished curly birch handle and a brown leather sheath. Marttiini says the Lynx model was drawn up by its founder Janne Marttiini in the 1930s.',
      fi: '22 senttimetrin puukko, ruostumaton terä, lakattu visakoivukahva ja ruskea nahkatuppi. Marttiinin mukaan Ilves-malli on perustaja Janne Marttiinin 1930-luvulla suunnittelema.',
    },
    priceFrom: 57,
    currency: 'EUR',
    priceCheckedAt: '2026-07-31',
    image: 'prod-marttiini-ilves-131',
    imageIsPartner: true,
    partnerId: 'marttiini',
    partnerProductUrl:
      'https://www.marttiini.fi/epages/MarttiiniShop.sf/en_GB/?ObjectPath=/Shops/MarttiiniShop/Products/131010',
    badges: ['made-in-lapland'],
  },

  // ── treats ────────────────────────────────────────────────────────────────
  {
    slug: 'kuivalihakundi-poro-jerky',
    category: 'treats',
    brand: 'Kuivalihakundi',
    name: {
      en: 'Reindeer jerky Original 2 x 20 g',
      fi: 'Poro-Jerky Original 2 x 20 g',
    },
    description: {
      en: 'Two 20 gram bags of reindeer jerky made from 100 per cent Finnish reindeer, oven dried and marinated with gluten free soy sauce, black pepper, garlic and sugar syrup. Meat cannot be posted outside the EU, so delivery stops at the EU border.',
      fi: 'Kaksi 20 gramman pussia poron kuivalihaa, raaka-aineena 100 % suomalaista poroa. Uunikuivattu ja maustettu gluteenittomalla soijakastikkeella, mustapippurilla, valkosipulilla ja sokerisiirapilla. Lihaa ei saa postittaa EU:n ulkopuolelle, joten toimitus päättyy EU:n rajalle.',
    },
    priceFrom: 12.99,
    currency: 'EUR',
    priceCheckedAt: '2026-07-31',
    image: 'prod-kuivalihakundi-poro-jerky',
    imageIsPartner: true,
    partnerId: 'kuivalihakundi',
    partnerProductUrl:
      'https://kuivalihakundi.com/products/poro-jerky-original-2x20g-kuivaliha',
    featured: true,
  },
  {
    slug: 'finnish-flavours-palalaku-salmiakki',
    category: 'treats',
    brand: 'Finnish Flavours',
    name: {
      en: 'Finnish Flavours Premium Palalaku salmiakki 150 g',
      fi: 'Finnish Flavours Premium Palalaku salmiakki 150 g',
    },
    description: {
      en: 'A 150 gram bag of soft salmiakki liquorice, the ammonium chloride kind that splits visitors into two camps on the first piece. Suomikauppa posts groceries well beyond Finland.',
      fi: '150 gramman pussi pehmeää salmiakkilakritsia, sitä ammoniumkloridilla suolattua lajia, joka jakaa vieraat kahteen leiriin ensimmäisestä palasta. Suomikauppa postittaa elintarvikkeita myös Suomen ulkopuolelle.',
    },
    priceFrom: 5.02,
    currency: 'EUR',
    priceCheckedAt: '2026-07-31',
    image: 'prod-finnish-flavours-palalaku-salmiakki',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl:
      'https://suomikauppa.fi/products/finnish-flavours-palalaku-salmiakki',
  },
  {
    slug: 'meritalo-tyrnihillo',
    category: 'treats',
    brand: 'Meritalo',
    name: {
      en: 'Meritalo Finnish sea buckthorn jam 310 g',
      fi: 'Meritalo Suomalainen tyrnihillo 310 g',
    },
    description: {
      en: 'Sea buckthorn jam with 37 grams of berries per 100 grams, cooked from Finnish sea buckthorn on the Meritalo family farm in Salo, southwest Finland rather than in Lapland. Sea buckthorn is tart rather than sweet, so it goes further next to cheese than on a pancake.',
      fi: 'Tyrnihilloa, jossa on 37 grammaa marjoja sadassa grammassa, keitetty suomalaisesta tyrnistä Meritalon perhetilalla Salossa Varsinais-Suomessa, ei siis Lapissa. Tyrni on kirpeä eikä makea, joten se kantaa juuston kanssa pidemmälle kuin lettujen päällä.',
    },
    priceFrom: 7.29,
    currency: 'EUR',
    priceCheckedAt: '2026-07-31',
    image: 'prod-meritalo-tyrnihillo',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl:
      'https://suomikauppa.fi/products/meritalo-suomalainen-tyrnihillo-310g',
  },

  // ── superfoods ────────────────────────────────────────────────────────────
  {
    slug: 'arctic-power-berries-blueberry-powder',
    category: 'superfoods',
    brand: 'Arctic Power Berries',
    name: {
      en: 'Wild blueberry powder 70 g',
      fi: 'Luonnonmustikkajauhe 70 g',
    },
    description: {
      en: 'Freeze dried wild bilberry, nothing added. The producer says roughly 700 grams of fresh berries go into one 70 gram jar. This shop prices in pounds sterling.',
      fi: 'Pakastekuivattua luonnonmustikkaa ilman lisättyä mitään. Valmistajan mukaan yhteen 70 gramman purkkiin menee noin 700 grammaa tuoreita marjoja. Tämän kaupan hinnat ovat punnissa.',
    },
    priceFrom: 14.9,
    currency: 'GBP',
    priceCheckedAt: '2026-07-31',
    image: 'prod-arctic-power-berries-blueberry-powder',
    imageIsPartner: true,
    partnerId: 'arcticpowerberries',
    partnerProductUrl: 'https://arcticpowerberries.com/products/blueberry-70g',
    featured: true,
  },
  {
    slug: 'arctic-power-berries-sea-buckthorn-powder',
    category: 'superfoods',
    brand: 'Arctic Power Berries',
    name: {
      en: 'Sea buckthorn powder 70 g',
      fi: 'Tyrnijauhe 70 g',
    },
    description: {
      en: 'Freeze dried Nordic sea buckthorn, 70 grams, nothing added. Tart and bright orange, so a teaspoon carries further in porridge than you would guess. This shop prices in pounds sterling.',
      fi: 'Pakastekuivattua pohjoista tyrniä, 70 grammaa, ei lisättyä mitään. Kirpeä ja kirkkaan oranssi, joten teelusikallinen kantaa puurossa pidemmälle kuin arvaisi. Tämän kaupan hinnat ovat punnissa.',
    },
    priceFrom: 12.9,
    currency: 'GBP',
    priceCheckedAt: '2026-07-31',
    image: 'prod-arctic-power-berries-sea-buckthorn-powder',
    imageIsPartner: true,
    partnerId: 'arcticpowerberries',
    partnerProductUrl: 'https://arcticpowerberries.com/products/sea-buckthorn-70g',
  },
  {
    slug: 'kaapa-mushrooms-pakuri-powder',
    category: 'superfoods',
    brand: 'Kääpä Mushrooms',
    name: {
      en: 'Kääpä Mushrooms chaga extract powder 30 g',
      fi: 'Kääpä Mushrooms pakuriuutejauhe 30 g',
    },
    description: {
      en: 'A 30 gram jar of chaga extract powder from Kääpä Mushrooms, who harvest functional mushrooms in Nordic forests, meant for stirring into hot drinks. Ruohonjuuri delivers inside the EU customs and tax area only, and the label lists medicine interactions worth reading first.',
      fi: '30 gramman purkki pakuriuutejauhetta Kääpä Mushroomsilta, joka kerää funktionaalisia sieniä pohjoisista metsistä. Tarkoitettu sekoitettavaksi kuumiin juomiin. Ruohonjuuri toimittaa vain EU:n tulli- ja veroalueelle, ja pakkauksessa on lueteltu lääkeyhteisvaikutuksia, jotka kannattaa lukea ensin.',
    },
    priceFrom: 36.95,
    currency: 'EUR',
    priceCheckedAt: '2026-07-31',
    image: 'prod-kaapa-mushrooms-pakuri-powder',
    imageIsPartner: true,
    partnerId: 'ruohonjuuri',
    partnerProductUrl:
      'https://www.ruohonjuuri.fi/products/kaapa-mushrooms-pakuriuutejauhe-30-g-kaapa-mushrooms',
  },
]

export function productsByCategory(id: Product['category']): Product[] {
  return PRODUCTS.filter((p) => p.category === id)
}

export function productBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug)
}

export function featuredProducts(limit = 8): Product[] {
  return PRODUCTS.filter((p) => p.featured).slice(0, limit)
}
