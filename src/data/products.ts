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
    details: {
      specs: [
        { key: 'volume', value: { en: '0.3 l', fi: '0,3 l' } },
        { key: 'material', value: { en: 'Vitroporcelain', fi: 'Vitroposliini' } },
        {
          key: 'care',
          value: {
            en: 'Machine washable, oven and microwave safe',
            fi: 'Kestää konepesun, uunin ja mikron',
          },
        },
        {
          key: 'origin',
          value: {
            en: 'Designed in Finland, made in Thailand',
            fi: 'Suunniteltu Suomessa, valmistettu Thaimaassa',
          },
        },
        {
          key: 'other',
          label: { en: 'Collection', fi: 'Sarja' },
          value: {
            en: 'Moomin Classics. The 80th anniversary edition carries the year on the base',
            fi: 'Moomin Classics. 80-vuotisjuhlapainoksen pohjaan on merkitty vuosiluku',
          },
        },
      ],
      sourceUrl: 'https://shop.moomin.com/products/moomin-blue-love-mug-0-3l',
      fetchedAt: '2026-08-01',
    },
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
    details: {
      specs: [
        { key: 'volume', value: { en: '28 cl per tumbler', fi: '28 cl lasi' } },
        {
          key: 'contents',
          value: {
            en: '2 tumblers, delivered in a turquoise package',
            fi: '2 lasia, toimitetaan turkoosissa pakkauksessa',
          },
        },
        { key: 'material', value: { en: 'Embossed glass', fi: 'Kohokuvioitu lasi' } },
        { key: 'care', value: { en: 'Dishwasher safe', fi: 'Konepesun kestävä' } },
        {
          key: 'origin',
          value: {
            en: 'Made at the Iittala glass factory in Finland',
            fi: 'Valmistettu Iittalan lasitehtaalla Suomessa',
          },
        },
        {
          key: 'other',
          label: { en: 'Collection', fi: 'Sarja' },
          value: { en: 'Mystical Forest', fi: 'Mystical Forest eli Lumottu metsä' },
        },
      ],
      sourceUrl:
        'https://shop.moomin.com/products/moomin-clear-glass-tumblers-2-pack-28cl-moomin-arabia',
      fetchedAt: '2026-08-01',
    },
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
    details: {
      specs: [
        { key: 'material', value: { en: '100 % wool', fi: '100 % villaa' } },
        { key: 'size', value: { en: '130 x 170 cm', fi: '130 x 170 cm' } },
        { key: 'color', value: { en: 'Blue', fi: 'Sininen' } },
        {
          key: 'care',
          value: { en: 'Dry cleaning, mild process', fi: 'Kuivapesu, mieto käsittely' },
        },
        {
          key: 'origin',
          value: {
            en: 'Designed in Finland, made in Lithuania',
            fi: 'Suunniteltu Suomessa, valmistettu Liettuassa',
          },
        },
        {
          key: 'other',
          label: { en: 'Collection', fi: 'Sarja' },
          value: { en: 'Mystical Forest', fi: 'Mystical Forest eli Lumottu metsä' },
        },
      ],
      sourceUrl: 'https://shop.moomin.com/products/moomin-mystical-forest-wool-throw-130x170cm',
      fetchedAt: '2026-08-01',
    },
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
    details: {
      specs: [
        {
          key: 'material',
          value: {
            en: 'DrymaxX Sleek Twill, a water and windproof 2-layer fabric with a DrymaxX membrane. Material content 50 % recycled polyester and 50 % polyester',
            fi: 'DrymaxX Sleek Twill, vesi- ja tuulitiivis 2-kerroksinen kangas DrymaxX-kalvolla. Materiaali 50 % kierrätyspolyesteriä ja 50 % polyesteriä',
          },
        },
        {
          key: 'other',
          label: { en: 'Lining', fi: 'Vuori' },
          value: {
            en: 'Soft polyester lining, 100 % recycled polyester',
            fi: 'Pehmeä polyesterivuori, 100 % kierrätyspolyesteriä',
          },
        },
        {
          key: 'other',
          label: { en: 'Waterproofness', fi: 'Vedenpitävyys' },
          value: { en: '10000 mm', fi: '10000 mm' },
        },
        {
          key: 'other',
          label: { en: 'Breathability', fi: 'Hengittävyys' },
          value: { en: '10000 g/m²/24 h', fi: '10000 g/m²/24 h' },
        },
        { key: 'weight', value: { en: '0.9 kg', fi: '0,9 kg' } },
        { key: 'size', value: { en: 'S, M, L, XL, XXL, XXXL', fi: 'S, M, L, XL, XXL, XXXL' } },
        {
          key: 'color',
          value: {
            en: 'Fossil Beige, Four Leaf Clover Green, Black',
            fi: 'Fossil Beige, Four Leaf Clover Green, Black',
          },
        },
        {
          key: 'other',
          label: { en: 'Features', fi: 'Ominaisuudet' },
          value: {
            en: 'All seams taped, adjustable fixed hood, high stand up collar, 2-way front zipper, mesh ventilation, zippered hand pockets, snap buttoned inner pocket, adjustable sleeve ends, front windplacket, reflective details',
            fi: 'Kaikki saumat teipattu, säädettävä kiinteä huppu, korkea pystykaulus, 2-suuntainen etuvetoketju, verkkotuuletus, vetoketjulliset käsitaskut, nepparillinen sisätasku, säädettävät hihansuut, tuulilista edessä, heijastavat yksityiskohdat',
          },
        },
        {
          key: 'care',
          value: {
            en: 'Wash inside out with similar colours and close the zippers first. Maximum 30 °C, mild process. Do not bleach, tumble dry, iron or dry clean',
            fi: 'Pese nurin päin samanväristen kanssa ja sulje vetoketjut ensin. Enintään 30 °C, mieto pesu. Ei valkaisua, ei rumpukuivausta, ei silitystä, ei kuivapesua',
          },
        },
      ],
      sourceUrl: 'https://halti.com/products/tokoi-dx-jacket-mens',
      fetchedAt: '2026-08-01',
    },
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
    details: {
      specs: [
        {
          key: 'material',
          value: {
            en: '100 % merino wool, 8 gauge brioche knit, mulesing free',
            fi: '100 % merinovillaa, 8 gaugen patenttineule, mulesing-vapaa',
          },
        },
        { key: 'size', value: { en: 'One size', fi: 'Yksi koko' } },
        { key: 'color', value: { en: 'Dark Brown', fi: 'Tummanruskea' } },
        {
          key: 'origin',
          value: {
            en: 'Made in Finland, material made in Italy',
            fi: 'Valmistettu Suomessa, materiaali valmistettu Italiassa',
          },
        },
        {
          key: 'care',
          value: {
            en: 'Wash with similar colours on a gentle cycle, dry flat and reshape. Airing is often enough instead of washing. Pilling may appear with use',
            fi: 'Pese samanväristen kanssa hellävaraisella ohjelmalla, kuivaa tasossa ja muotoile. Tuuletus riittää usein pesun sijaan. Nyppyyntymistä voi esiintyä käytössä',
          },
        },
      ],
      sourceUrl: 'https://makia.com/products/merino-cap-1',
      fetchedAt: '2026-08-01',
    },
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
    details: {
      specs: [
        {
          key: 'material',
          value: {
            en: '100 % organic cotton, 370 g french terry',
            fi: '100 % luomupuuvillaa, 370 g:n french terry -neulos',
          },
        },
        { key: 'size', value: { en: 'S, M, L, XL, XXL', fi: 'S, M, L, XL, XXL' } },
        { key: 'color', value: { en: 'Carbon Black', fi: 'Carbon Black' } },
        {
          key: 'other',
          label: { en: 'Fit and details', fi: 'Istuvuus ja yksityiskohdat' },
          value: {
            en: 'Regular fit, drawcords on hood, kangaroo pocket, rib on hem and sleeve opening, woven labels from recycled polyester',
            fi: 'Regular fit, nyörit hupussa, kenguritasku, resori helmassa ja hihansuissa, kudotut merkit kierrätyspolyesteristä',
          },
        },
        {
          key: 'origin',
          value: {
            en: 'Made in Turkey, material made in Turkey',
            fi: 'Valmistettu Turkissa, materiaali valmistettu Turkissa',
          },
        },
        {
          key: 'care',
          value: {
            en: 'Wash inside out with similar colours. Do not iron on the print. Maximum shrinkage 5 %. Reshape whilst damp',
            fi: 'Pese nurin päin samanväristen kanssa. Älä silitä painatuksen päältä. Kutistuma enintään 5 %. Muotoile kosteana',
          },
        },
      ],
      sourceUrl: 'https://makia.com/products/aurora-hooded-sweatshirt',
      fetchedAt: '2026-08-01',
    },
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
    details: {
      specs: [
        {
          key: 'other',
          label: { en: 'Blade length', fi: 'Terän pituus' },
          value: { en: '16 cm', fi: '16 cm' },
        },
        { key: 'size', value: { en: 'Total length 27 cm', fi: 'Kokonaispituus 27 cm' } },
        {
          key: 'material',
          value: {
            en: 'Blade stainless steel, handle curly birch and varnished, sheath leather',
            fi: 'Terä ruostumatonta terästä, kahva lakattua visakoivua, tuppi nahkaa',
          },
        },
        {
          key: 'contents',
          value: {
            en: 'Knife and leather sheath with a snap closure',
            fi: 'Puukko ja nahkatuppi, jossa neppariluku',
          },
        },
        {
          key: 'other',
          label: { en: 'Product number', fi: 'Tuotenumero' },
          value: { en: '255010', fi: '255010' },
        },
      ],
      sourceUrl:
        'https://www.marttiini.fi/epages/MarttiiniShop.sf/en_GB/?ObjectPath=/Shops/MarttiiniShop/Products/255010',
      fetchedAt: '2026-08-01',
    },
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
    details: {
      specs: [
        {
          key: 'other',
          label: { en: 'Blade length', fi: 'Terän pituus' },
          value: { en: '9 cm', fi: '9 cm' },
        },
        { key: 'size', value: { en: 'Total length 20 cm', fi: 'Kokonaispituus 20 cm' } },
        {
          key: 'material',
          value: {
            en: 'Blade carbon steel, handle waxed birch, sheath brown leather',
            fi: 'Terä hiiliterästä, kahva vahattua koivua, tuppi ruskeaa nahkaa',
          },
        },
        {
          key: 'care',
          value: {
            en: 'Always dry the blade carefully after use and oil it regularly with unsalted oil',
            fi: 'Kuivaa terä aina huolellisesti käytön jälkeen ja öljyä se säännöllisesti suolattomalla öljyllä',
          },
        },
        {
          key: 'other',
          label: { en: 'Product number', fi: 'Tuotenumero' },
          value: { en: '121019', fi: '121019' },
        },
      ],
      sourceUrl:
        'https://www.marttiini.fi/epages/MarttiiniShop.sf/en_GB/?ObjectPath=/Shops/MarttiiniShop/Products/121019',
      fetchedAt: '2026-08-01',
    },
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
    details: {
      specs: [
        {
          key: 'other',
          label: { en: 'Blade length', fi: 'Terän pituus' },
          value: { en: '11 cm', fi: '11 cm' },
        },
        { key: 'size', value: { en: 'Total length 22 cm', fi: 'Kokonaispituus 22 cm' } },
        {
          key: 'material',
          value: {
            en: 'Blade stainless steel, handle curly birch and varnished, sheath brown leather',
            fi: 'Terä ruostumatonta terästä, kahva lakattua visakoivua, tuppi ruskeaa nahkaa',
          },
        },
        {
          key: 'other',
          label: { en: 'Product number', fi: 'Tuotenumero' },
          value: { en: '131010', fi: '131010' },
        },
      ],
      sourceUrl:
        'https://www.marttiini.fi/epages/MarttiiniShop.sf/en_GB/?ObjectPath=/Shops/MarttiiniShop/Products/131010',
      fetchedAt: '2026-08-01',
    },
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
    details: {
      specs: [
        { key: 'weight', value: { en: '2 x 20 g', fi: '2 x 20 g' } },
        {
          key: 'origin',
          value: { en: 'Meat from Finland', fi: 'Liha Suomesta' },
        },
        {
          key: 'shelfLife',
          value: {
            en: 'Dates run about a year from the day the meat was dried and packed. Does not need to be kept cold, even after opening',
            fi: 'Päiväykset menevät noin vuoden päähän siitä, kun liha on kuivattu ja pakattu. Ei tarvitse kylmäsäilytystä avattunakaan',
          },
        },
        {
          key: 'other',
          label: { en: 'Label notes', fi: 'Pakkausmerkinnät' },
          value: { en: 'Strongly salted. Gluten free', fi: 'Voimakassuolainen. Gluteeniton' },
        },
        {
          key: 'other',
          label: { en: 'Nutrition per 100 g', fi: 'Ravintosisältö per 100 g' },
          value: {
            en: 'Energy 1514 kJ / 360 kcal, fat 14.2 g of which saturates 6.2 g, carbohydrate 7.9 g of which sugars 5.1 g, protein 50.2 g, salt 9.5 g',
            fi: 'Energia 1514 kJ / 360 kcal, rasva 14,2 g josta tyydyttynyttä 6,2 g, hiilihydraatit 7,9 g joista sokereita 5,1 g, proteiini 50,2 g, suola 9,5 g',
          },
        },
      ],
      ingredients: {
        en: 'Reindeer topside (FI), gluten free soy sauce (water, hydrolysed soy protein, salt), sugar syrup, garlic, black pepper.',
        fi: 'Poronpaisti (FI), gluteeniton soijakastike (vesi, soijaproteiinihydrolysaatti, suola), sokerisiirappi, valkosipuli, mustapippuri.',
      },
      sourceUrl: 'https://kuivalihakundi.com/products/poro-jerky-original-2x20g-kuivaliha',
      fetchedAt: '2026-08-01',
    },
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
    details: {
      specs: [
        { key: 'weight', value: { en: '150 g', fi: '150 g' } },
        {
          key: 'other',
          label: { en: 'Nutrition per 100 g', fi: 'Ravintosisältö per 100 g' },
          value: {
            en: 'Energy 1316 kJ / 311 kcal, fat 0.5 g of which saturates 0 g, carbohydrate 72 g of which sugars 50 g, protein 4.1 g, salt 1.7 g',
            fi: 'Energia 1316 kJ / 311 kcal, rasva 0,5 g josta tyydyttyneitä 0 g, hiilihydraatit 72 g joista sokeria 50 g, proteiini 4,1 g, suola 1,7 g',
          },
        },
        {
          key: 'other',
          label: { en: 'Marketed by', fi: 'Markkinoija' },
          value: {
            en: 'Finnish Flavours, Kumitehtaankatu 5, 04260 Kerava',
            fi: 'Finnish Flavours, Kumitehtaankatu 5, 04260 Kerava',
          },
        },
      ],
      ingredients: {
        en: 'Sugar, WHEAT FLOUR, food molasses, water, ammonium chloride (salmiakki), liquorice extract, colour (E153), flavouring (anise oil), glazing agent (E901).',
        fi: 'Sokeri, VEHNÄJAUHO, elintarvikemelassi, vesi, ammoniumkloridi (salmiakki), lakritsiuute, väri (E153), aromi (anisöljy), pintakäsittelyaine (E901).',
      },
      allergens: { en: 'Contains: wheat.', fi: 'Sisältää: vehnä.' },
      sourceUrl: 'https://suomikauppa.fi/products/finnish-flavours-palalaku-salmiakki',
      fetchedAt: '2026-08-01',
    },
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
    details: {
      specs: [
        { key: 'weight', value: { en: '310 g', fi: '310 g' } },
        {
          key: 'origin',
          value: {
            en: 'Berries are Finnish. Made by a family business at the Meritalo home farm in Salo, southwest Finland',
            fi: 'Marjat ovat suomalaisia. Valmistetaan perheyrityksessä Meritalon kotitilalla Salossa Varsinais-Suomessa',
          },
        },
        {
          key: 'other',
          label: { en: 'Nutrition per 100 g', fi: 'Ravintosisältö per 100 g' },
          value: {
            en: 'Energy 781 kJ / 187 kcal, fat 1.9 g of which saturates 0.3 g, carbohydrate 41 g of which sugars 41 g, protein 0.3 g, salt 0.01 g',
            fi: 'Energia 781 kJ / 187 kcal, rasva 1,9 g josta tyydyttyneitä 0,3 g, hiilihydraatit 41 g joista sokeria 41 g, proteiini 0,3 g, suola 0,01 g',
          },
        },
        {
          key: 'other',
          label: { en: 'Marketed by', fi: 'Markkinoija' },
          value: {
            en: 'Marjajaloste Meritalo Oy, 25610 Ylönkylä',
            fi: 'Marjajaloste Meritalo Oy, 25610 Ylönkylä',
          },
        },
      ],
      ingredients: {
        en: 'Sugar, Finnish sea buckthorn berry, water, gelling agent (E440), preservative (E202, E211). 100 g of the product contains 37 g of berries.',
        fi: 'Sokeri, suomalainen tyrnimarja, vesi, hyytelöimisaine (E440), säilöntäaine (E202, E211). 100 g tuotetta sisältää 37 g marjoja.',
      },
      allergens: {
        en: 'Does not contain: cereals containing gluten and products thereof, crustaceans, egg, fish, peanuts, soybeans, milk, nuts, celery, mustard, sesame seeds, sulphur dioxide and sulphites, lupin, molluscs.',
        fi: 'Ei sisällä: gluteenia sisältävät viljat ja niistä valmistetut tuotteet, äyriäiset, muna, kala, maapähkinä, soijapavut, maito, pähkinät, selleri, sinappi, seesaminsiemenet, rikkidioksidi ja sulfiitit, lupiini, nilviäiset.',
      },
      sourceUrl: 'https://suomikauppa.fi/products/meritalo-suomalainen-tyrnihillo-310g',
      fetchedAt: '2026-08-01',
    },
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
    details: {
      specs: [
        { key: 'weight', value: { en: '70 g', fi: '70 g' } },
        {
          key: 'contents',
          value: {
            en: '100 % blueberry powder made from wild Nordic blueberries, also known as bilberries. Nothing added',
            fi: '100 % mustikkajauhetta pohjoisesta luonnonmustikasta. Ei lisättyä mitään',
          },
        },
        {
          key: 'other',
          label: { en: 'Berries used', fi: 'Marjojen määrä' },
          value: {
            en: 'About 700 g of fresh berries make 70 g of berry powder',
            fi: 'Noin 700 g tuoreita marjoja tekee 70 g marjajauhetta',
          },
        },
        {
          key: 'other',
          label: { en: 'Nutrition per 100 g', fi: 'Ravintosisältö per 100 g' },
          value: {
            en: 'Energy 367 kcal / 1559 kJ, protein 5 g, carbohydrate 54 g of which sugars 34 g, fibre 31 g, fat 0.8 g, salt 0.01 g',
            fi: 'Energia 367 kcal / 1559 kJ, proteiini 5 g, hiilihydraatit 54 g joista sokereita 34 g, kuitu 31 g, rasva 0,8 g, suola 0,01 g',
          },
        },
      ],
      sourceUrl: 'https://arcticpowerberries.com/products/blueberry-70g',
      fetchedAt: '2026-08-01',
    },
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
    details: {
      specs: [
        { key: 'weight', value: { en: '70 g', fi: '70 g' } },
        {
          key: 'contents',
          value: {
            en: '100 % sea buckthorn powder made from Nordic sea buckthorn berries. Nothing added',
            fi: '100 % tyrnijauhetta pohjoisista tyrnimarjoista. Ei lisättyä mitään',
          },
        },
        {
          key: 'other',
          label: { en: 'Berries used', fi: 'Marjojen määrä' },
          value: {
            en: 'About 700 g of fresh berries make 70 g of berry powder',
            fi: 'Noin 700 g tuoreita marjoja tekee 70 g marjajauhetta',
          },
        },
        {
          key: 'other',
          label: { en: 'Nutrition per 100 g', fi: 'Ravintosisältö per 100 g' },
          value: {
            en: 'Energy 489 kcal / 2045 kJ, protein 13 g, carbohydrate 24 g of which sugars 14 g, fibre 28 g, fat 25 g, salt 0.06 g',
            fi: 'Energia 489 kcal / 2045 kJ, proteiini 13 g, hiilihydraatit 24 g joista sokereita 14 g, kuitu 28 g, rasva 25 g, suola 0,06 g',
          },
        },
      ],
      sourceUrl: 'https://arcticpowerberries.com/products/sea-buckthorn-70g',
      fetchedAt: '2026-08-01',
    },
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
    details: {
      specs: [
        { key: 'weight', value: { en: '30 g', fi: '30 g' } },
        {
          key: 'contents',
          value: {
            en: '100 % chaga, organic. 100 mg of beta-glucan per daily dose',
            fi: '100 % pakuria, luomu. 100 mg beetaglukaania per päiväannos',
          },
        },
        { key: 'origin', value: { en: 'Finland', fi: 'Suomi' } },
        {
          key: 'other',
          label: { en: 'Diet', fi: 'Ruokavalio' },
          value: {
            en: 'Organic with the EU organic leaf. Gluten free, lactose free, dairy free, soy free, sugar free, caffeine free, no additives, vegan, wild',
            fi: 'Luomu, EU:n lehtimerkki. Gluteeniton, laktoositon, maidoton, soijaton, sokeriton, kofeiiniton, lisäaineeton, vegaaninen, villi',
          },
        },
        {
          key: 'other',
          label: { en: 'Warning', fi: 'Varoitus' },
          value: {
            en: 'Chaga must not be used at the same time as antibiotics, blood thinners, penicillin or intravenous glucose. Take the dose stated on the package and do not exceed it',
            fi: 'Pakuria ei saa käyttää samanaikaisesti antibioottien, verenohennuslääkkeiden, penisilliinin ja suonensisäisen glukoosin kanssa. Annostus pakkauksen ohjeen mukaan, suositeltua vuorokausiannosta ei saa ylittää',
          },
        },
        {
          key: 'other',
          label: { en: 'EAN', fi: 'EAN' },
          value: { en: '6430071310212', fi: '6430071310212' },
        },
      ],
      allergens: {
        en: 'Not recommended for people with a mushroom allergy.',
        fi: 'Ei suositella sieniallergiselle.',
      },
      sourceUrl:
        'https://www.ruohonjuuri.fi/products/kaapa-mushrooms-pakuriuutejauhe-30-g-kaapa-mushrooms',
      fetchedAt: '2026-08-01',
    },
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
