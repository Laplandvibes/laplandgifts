import type { Product } from './types'
// 🔴 Pääte `.ts` on pakollinen. scripts/build-routes-json.mjs importoi tämän
// tiedoston suoraan Nodella, joka purkaa tyypit muttei arvaa päätteitä:
// pääteetön arvo-import kaataa koko buildin ERR_MODULE_NOT_FOUNDiin. Muut
// tämän tiedoston importit ovat tyyppi-importteja, jotka häviävät käännöksessä,
// joten ongelma ei ole näkynyt aiemmin. tsconfig sallii päätteen
// (allowImportingTsExtensions).
import { SOUTH_AMERICA } from './countryNames.ts'

/**
 * Moomin Shopin elintarvikkeiden maarajaus. Luettu jokaisen tuotteen omalta
 * sivulta 1.8.2026, sanatarkasti: "This product is not available for shipment
 * to the USA, South America or Australia." / "Tätä tuotetta ei voida toimittaa
 * Yhdysvaltoihin, Etelä-Amerikkaan tai Australiaan."
 *
 * Manner puretaan maakoodeiksi, koska toimitusmaasuodatin vertaa maita eikä
 * mantereita. Rajaus on tuotteissa eikä kumppanissa: sama kauppa lähettää mukin
 * Yhdysvaltoihin, kahvipaketin ei.
 */
const MOOMIN_FOOD_EXCEPT = ['US', 'AU', ...SOUTH_AMERICA]

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
 * 🔴 Kaksi kategoriaa poikkeaa muista:
 *   - 'experiences' on kahta lähdettä: varattavat retket luetaan
 *     shared/gyg/picks.ts:stä, jotta GYG-ID:t pysyvät yhdessä verifioidussa
 *     lähteessä (väärä GYG-ID ei 404:ää vaan tarjoilee hiljaa väärän maan
 *     tuotteen), ja Elämyslahjat.fi:n lahjakortit (erä 3.8.2026) ovat tässä
 *     tiedostossa tavallisina tuotteina.
 *   - 'merch' odottaa Fourthwall-kaupan avaamista. Emme listaa tuotteita
 *     joita ei voi ostaa emmekä keksi tuotesivupolkuja kauppaan jota ei ole.
 * catalog.test.ts:n kategoriakattavuustesti ohittaa nämä kaksi.
 */
export const PRODUCTS: Product[] = [
  // ── design ────────────────────────────────────────────────────────────────
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

  {
    slug: 'iittala-aalto-vase-160',
    category: 'design',
    brand: 'Iittala',
    name: {
      en: 'Iittala Alvar Aalto vase 160 mm, clear',
      fi: 'Iittala Alvar Aalto -maljakko 160 mm, kirkas',
    },
    description: {
      en: 'Alvar Aalto drew this wave in 1936 and Iittala still mouth blows it, so the outline of every piece differs a little. The 160 mm size is the one people picture when they hear the name.',
      fi: 'Alvar Aalto piirsi tämän aallon vuonna 1936, ja Iittala puhaltaa maljakon yhä suulla, joten jokaisen kappaleen ääriviiva on hieman erilainen. 160 millin koko on se, jonka useimmat näkevät mielessään nimen kuullessaan.',
    },
    priceFrom: 159,
    currency: 'EUR',
    priceCheckedAt: '2026-08-03',
    image: 'prod-iittala-aalto-vase-160',
    imageIsPartner: true,
    partnerId: 'nordicnest',
    partnerProductUrl:
      'https://www.nordicnest.fi/tuotemerkit/iittala/alvar-aalto-maljakko-kirkas/?variantId=999-01',
    featured: true,
    details: {
      specs: [
        { key: 'size', value: { en: 'Height 16 cm, width 20.5 cm', fi: 'Korkeus 16 cm, leveys 20,5 cm' } },
        { key: 'material', value: { en: 'Glass', fi: 'Lasi' } },
        { key: 'color', value: { en: 'Transparent', fi: 'Kirkas' } },
        { key: 'weight', value: { en: '1.44 kg gross', fi: '1,44 kg bruttopaino' } },
        { key: 'care', value: { en: 'Hand wash only', fi: 'Vain käsinpesu' } },
        {
          key: 'other',
          label: { en: 'Production', fi: 'Valmistustapa' },
          value: { en: 'Mouth blown glass, asymmetric shape', fi: 'Suupuhallettu lasi, epäsymmetrinen muoto' },
        },
        {
          key: 'other',
          label: { en: 'Designer and collection', fi: 'Suunnittelija ja sarja' },
          value: {
            en: 'Alvar Aalto, Iittala Alvar Aalto Collection',
            fi: 'Alvar Aalto, Iittala Alvar Aalto Collection',
          },
        },
        {
          key: 'other',
          label: { en: 'Item number and EAN', fi: 'Tuotenumero ja EAN' },
          value: { en: '999-01, EAN 6411920004445', fi: '999-01, EAN 6411920004445' },
        },
      ],
      sourceUrl: 'https://www.nordicnest.fi/tuotemerkit/iittala/alvar-aalto-maljakko-kirkas/?variantId=999-01',
      fetchedAt: '2026-08-03',
    },
  },
  {
    slug: 'iittala-kivi-candleholder',
    category: 'design',
    brand: 'Iittala',
    name: {
      en: 'Iittala Kivi votive 60 mm, pine green',
      fi: 'Iittala Kivi -kynttilälyhty 60 mm, petrolinvihreä',
    },
    description: {
      en: 'A pressed glass votive by Heikki Orvola, 6 cm tall, that turns one tealight into a block of colour. It is the cheapest way to own a piece of Iittala and it survives hand luggage.',
      fi: 'Heikki Orvolan puristelasinen kynttilälyhty, korkeus 6 cm, joka muuttaa yhden lämpökynttilän värilliseksi palikaksi. Halvin tapa omistaa pala Iittalaa, ja kestää käsimatkatavaroissa.',
    },
    priceFrom: 14,
    currency: 'EUR',
    priceCheckedAt: '2026-08-03',
    image: 'prod-iittala-kivi-candleholder',
    imageIsPartner: true,
    partnerId: 'nordicnest',
    partnerProductUrl:
      'https://www.nordicnest.fi/tuotemerkit/iittala/kivi-kynttilalyhty/?variantId=636883-01',
    details: {
      specs: [
        {
          key: 'size',
          value: { en: '6.5 x 6.5 cm, height 6 cm', fi: '6,5 x 6,5 cm, korkeus 6 cm' },
        },
        { key: 'material', value: { en: 'Glass', fi: 'Lasi' } },
        { key: 'color', value: { en: 'Green', fi: 'Vihreä' } },
        { key: 'weight', value: { en: '0.33 kg gross', fi: '0,33 kg bruttopaino' } },
        { key: 'care', value: { en: 'Hand wash only', fi: 'Vain käsinpesu' } },
        {
          key: 'other',
          label: { en: 'Designer and collection', fi: 'Suunnittelija ja sarja' },
          value: { en: 'Heikki Orvola, Iittala Kivi', fi: 'Heikki Orvola, Iittala Kivi' },
        },
        {
          key: 'other',
          label: { en: 'Item number and EAN', fi: 'Tuotenumero ja EAN' },
          value: { en: '636883-01, EAN 6411923683937', fi: '636883-01, EAN 6411923683937' },
        },
      ],
      sourceUrl: 'https://www.nordicnest.fi/tuotemerkit/iittala/kivi-kynttilalyhty/?variantId=636883-01',
      fetchedAt: '2026-08-03',
    },
  },
  {
    slug: 'marimekko-unikko-mug',
    category: 'design',
    brand: 'Marimekko',
    name: {
      en: 'Marimekko Unikko mug 25 cl',
      fi: 'Marimekko Unikko -muki 25 cl',
    },
    description: {
      en: 'Maija Isola drew the Unikko poppy in 1964 after Marimekko had banned floral prints, and the pattern outlived the ban. This stoneware mug holds 25 cl and puts the print on a breakfast table rather than a wall.',
      fi: 'Maija Isola piirsi Unikon vuonna 1964 sen jälkeen, kun Marimekko oli kieltänyt kukkakuosit, ja kuosi eli kiellon yli. Tämä kivitavaramuki vetää 25 senttilitraa ja tuo kuvion aamiaispöytään seinän sijaan.',
    },
    priceFrom: 24,
    currency: 'EUR',
    priceCheckedAt: '2026-08-03',
    image: 'prod-marimekko-unikko-mug',
    imageIsPartner: true,
    partnerId: 'nordicnest',
    partnerProductUrl:
      'https://www.nordicnest.fi/tuotemerkit/marimekko/unikko-muki-2-5-dl/?variantId=666236-01',
    featured: true,
    details: {
      specs: [
        { key: 'volume', value: { en: '25 cl', fi: '25 cl' } },
        {
          key: 'size',
          value: { en: 'Diameter 8 cm, height 9.5 cm', fi: 'Halkaisija 8 cm, korkeus 9,5 cm' },
        },
        { key: 'material', value: { en: 'Stoneware', fi: 'Kivitavara' } },
        {
          key: 'color',
          value: {
            en: 'White, dark green, beige and light sand',
            fi: 'Valkoinen, tummanvihreä, beige ja vaalea hiekka',
          },
        },
        { key: 'weight', value: { en: '0.276 kg gross', fi: '0,276 kg bruttopaino' } },
        {
          key: 'other',
          label: { en: 'Designers', fi: 'Suunnittelijat' },
          value: {
            en: 'Pattern by Maija Isola, mug by Sami Ruotsalainen',
            fi: 'Kuosi Maija Isola, muki Sami Ruotsalainen',
          },
        },
        {
          key: 'other',
          label: { en: 'Item number and EAN', fi: 'Tuotenumero ja EAN' },
          value: { en: '666236-01, EAN 6411255152033', fi: '666236-01, EAN 6411255152033' },
        },
      ],
      sourceUrl:
        'https://www.nordicnest.fi/tuotemerkit/marimekko/unikko-muki-2-5-dl/?variantId=666236-01',
      fetchedAt: '2026-08-03',
    },
  },
  {
    slug: 'aarikka-prinsessa-candleholder',
    category: 'design',
    brand: 'Aarikka',
    name: {
      en: 'Aarikka Prinsessa candleholder',
      fi: 'Aarikka Prinsessa-kynttilänjalka',
    },
    description: {
      en: 'Aarikka has been turning birch beads since the 1950s, and Prinsessa wears a wreath of them around a 5.5 cm holder that takes either a tealight or a taper. Small enough to post, distinctive enough to be recognised in Finland.',
      fi: 'Aarikka on sorvannut koivuhelmiä 1950-luvulta asti, ja Prinsessa kantaa niistä tehtyä seppelettä 5,5 senttiä korkean jalan ympärillä. Sopii sekä lämpö- että kynttiläkynttilälle, mahtuu kirjekuoreen ja tunnistetaan Suomessa.',
    },
    priceFrom: 35,
    currency: 'EUR',
    priceCheckedAt: '2026-08-01',
    image: 'prod-aarikka-prinsessa-candleholder',
    imageIsPartner: true,
    partnerId: 'aarikka',
    partnerProductUrl:
      'https://www.aarikka.com/products/prinsessa-candleholder-varnished-wood-and-gold',
    details: {
      specs: [
        { key: 'size', value: { en: 'Height 5.5 cm, diameter 6 cm', fi: 'Korkeus 5,5 cm, halkaisija 6 cm' } },
        { key: 'material', value: { en: 'Birch, maple, aluminium', fi: 'Koivu, vaahtera, alumiini' } },
        { key: 'weight', value: { en: '98 g', fi: '98 g' } },
        {
          key: 'origin',
          value: { en: 'Designed in Finland, made in Italy', fi: 'Suunniteltu Suomessa, valmistettu Italiassa' },
        },
        {
          key: 'contents',
          value: {
            en: 'Candleholder with one wreath of wooden beads. Fits tealights and straight candles',
            fi: 'Kynttilänjalka ja yksi puuhelmiseppele. Sopii lämpökynttilöille ja suorille kynttilöille',
          },
        },
        {
          key: 'other',
          label: { en: 'Product code', fi: 'Tuotekoodi' },
          value: { en: 'B08633', fi: 'B08633' },
        },
      ],
      sourceUrl:
        'https://www.aarikka.com/products/prinsessa-candleholder-varnished-wood-and-gold',
      fetchedAt: '2026-08-01',
    },
  },
  {
    slug: 'aarikka-pore-glass-vase',
    category: 'design',
    brand: 'Aarikka',
    name: {
      en: 'Aarikka Pore glass vase 16 cm, dark green',
      fi: 'Aarikka Pore-lasimaljakko 16 cm, tummanvihreä',
    },
    description: {
      en: 'A round hand blown vase, 1.7 litres, wearing a maple bead wreath dyed by hand in Finland. Air bubbles in the glass are part of it, and the wreath comes off before washing.',
      fi: 'Pyöreä suupuhallettu maljakko, tilavuus 1,7 litraa, kaulassaan käsin värjätty vaahterahelmiseppele Suomesta. Lasin ilmakuplat kuuluvat asiaan, ja seppele otetaan pois ennen pesua.',
    },
    priceFrom: 70,
    currency: 'EUR',
    priceCheckedAt: '2026-08-01',
    image: 'prod-aarikka-pore-glass-vase',
    imageIsPartner: true,
    partnerId: 'aarikka',
    partnerProductUrl: 'https://www.aarikka.com/products/pore-glass-vase-16-cm-dark-green',
    details: {
      specs: [
        {
          key: 'size',
          value: { en: 'Height 16 cm, diameter 16 cm', fi: 'Korkeus 16 cm, halkaisija 16 cm' },
        },
        { key: 'volume', value: { en: '1.7 l', fi: '1,7 l' } },
        { key: 'material', value: { en: 'Glass and maple', fi: 'Lasi ja vaahtera' } },
        { key: 'color', value: { en: 'Clear and green', fi: 'Kirkas ja vihreä' } },
        {
          key: 'origin',
          value: {
            en: 'Glass made in Poland, the wooden wreath made in Finland',
            fi: 'Lasi valmistettu Puolassa, puuseppele Suomessa',
          },
        },
        {
          key: 'care',
          value: {
            en: 'Wash by hand. Remove the wooden wreath before washing',
            fi: 'Pese käsin. Irrota puuseppele ennen pesua',
          },
        },
        {
          key: 'other',
          label: { en: 'Product code', fi: 'Tuotekoodi' },
          value: { en: 'B08706', fi: 'B08706' },
        },
      ],
      sourceUrl: 'https://www.aarikka.com/products/pore-glass-vase-16-cm-dark-green',
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
    priceFrom: 250,
    currency: 'EUR',
    priceCheckedAt: '2026-08-04',
    image: 'prod-halti-tokoi-dx-jacket',
    imageIsPartner: true,
    partnerId: 'halti',
    partnerProductUrl: 'https://www.halti.fi/products/tokoi-dx-takki-miesten',
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
      sourceUrl: 'https://www.halti.fi/products/tokoi-dx-takki-miesten',
      fetchedAt: '2026-08-04',
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

  {
    slug: 'halti-kroka-mitten',
    category: 'clothing',
    brand: 'Halti',
    name: {
      en: 'Halti Kroka II mitten',
      fi: 'Halti Kroka II -lapanen',
    },
    description: {
      en: 'A windproof mitten with 60 g insulation and a silicone grip palm, cut unisex. Mittens beat gloves when the wind picks up, because the fingers keep each other warm.',
      fi: 'Tuulenpitävä lapanen, jossa on 60 gramman täyte ja silikonipito kämmenessä, unisex-leikkaus. Lapanen voittaa sormikkaan kun tuuli nousee, koska sormet lämmittävät toisiaan.',
    },
    priceFrom: 30,
    currency: 'EUR',
    priceCheckedAt: '2026-08-04',
    image: 'prod-halti-kroka-mitten',
    imageIsPartner: true,
    partnerId: 'halti',
    partnerProductUrl: 'https://www.halti.fi/products/kroka-ii-rukkaset',
    details: {
      specs: [
        {
          key: 'material',
          value: {
            en: 'Stormwall softshell, 50 % polyester and 50 % recycled polyester. Soft fleece 100 % polyester. Lycra knit cuffs',
            fi: 'Stormwall-softshell, 50 % polyesteriä ja 50 % kierrätyspolyesteriä. Pehmeä fleece 100 % polyesteriä. Lycra-neuleiset resorit',
          },
        },
        {
          key: 'other',
          label: { en: 'Insulation and lining', fi: 'Täyte ja vuori' },
          value: {
            en: 'Microtherm Dynamic 60 g, lining Active Dry soft touch knit, 100 % recycled polyester',
            fi: 'Microtherm Dynamic 60 g, vuori Active Dry soft touch -neulos, 100 % kierrätyspolyesteriä',
          },
        },
        { key: 'weight', value: { en: '0.1 kg', fi: '0,1 kg' } },
        { key: 'size', value: { en: '06, 07, 08, 09, 10, 11, 12', fi: '06, 07, 08, 09, 10, 11, 12' } },
        { key: 'color', value: { en: 'Black', fi: 'Musta' } },
        {
          key: 'care',
          value: {
            en: 'Wash separately at 30 °C on a mild cycle. Do not bleach, tumble dry, iron or dry clean',
            fi: 'Pese erikseen 30 °C miedolla ohjelmalla. Ei valkaisua, ei rumpukuivausta, ei silitystä, ei kuivapesua',
          },
        },
        {
          key: 'other',
          label: { en: 'Product number', fi: 'Tuotenumero' },
          value: { en: '084-0757', fi: '084-0757' },
        },
      ],
      sourceUrl: 'https://www.halti.fi/products/kroka-ii-rukkaset',
      fetchedAt: '2026-08-04',
    },
  },
  {
    slug: 'halti-tunturit-ski-socks',
    category: 'clothing',
    brand: 'Halti',
    name: {
      en: 'Halti Tunturit ski socks',
      fi: 'Halti Tunturit -hiihtosukat',
    },
    description: {
      en: 'Knee-high merino blend socks with padding at the shin and ankle, the parts a ski boot presses on. Halti states they are made in Europe.',
      fi: 'Polvipituiset merinosekoitesukat, joissa on pehmuste säären ja nilkan kohdalla eli siellä missä monosuu painaa. Halti ilmoittaa ne valmistetuksi Euroopassa.',
    },
    priceFrom: 25,
    currency: 'EUR',
    priceCheckedAt: '2026-08-04',
    image: 'prod-halti-tunturit-ski-socks',
    imageIsPartner: true,
    partnerId: 'halti',
    partnerProductUrl: 'https://www.halti.fi/products/tunturit-laskettelusukat',
    details: {
      specs: [
        {
          key: 'material',
          value: {
            en: 'Merino wool mix: 36 % polyamide, 23 % acrylic, 23 % merino wool, 16 % polypropylene, 2 % elastane',
            fi: 'Merinovillasekoite: 36 % polyamidia, 23 % akryyliä, 23 % merinovillaa, 16 % polypropeenia, 2 % elastaania',
          },
        },
        { key: 'weight', value: { en: '0.1 kg', fi: '0,1 kg' } },
        { key: 'size', value: { en: '34-36, 37-39, 40-42, 43-45, 46-48', fi: '34-36, 37-39, 40-42, 43-45, 46-48' } },
        {
          key: 'color',
          value: {
            en: 'Sargasso Sea Blue, Lemon Pepper Beige',
            fi: 'Sargasso Sea Blue, Lemon Pepper Beige',
          },
        },
        { key: 'origin', value: { en: 'Made in Europe', fi: 'Valmistettu Euroopassa' } },
        {
          key: 'other',
          label: { en: 'Features', fi: 'Ominaisuudet' },
          value: {
            en: 'Shin and ankle cushioning, knee-high length, reinforced heel and toe, ventilation zones in the shin and back foot',
            fi: 'Pehmuste säärellä ja nilkassa, polvipituus, vahvistettu kantapää ja kärki, tuuletusalueet säärellä ja jalkaterän takaosassa',
          },
        },
        {
          key: 'care',
          value: {
            en: 'Maximum 40 °C, normal process. Do not iron, bleach, dry clean or tumble dry',
            fi: 'Enintään 40 °C, normaali pesu. Ei silitystä, ei valkaisua, ei kuivapesua, ei rumpukuivausta',
          },
        },
        {
          key: 'other',
          label: { en: 'Product number', fi: 'Tuotenumero' },
          value: { en: '087-0471', fi: '087-0471' },
        },
      ],
      sourceUrl: 'https://www.halti.fi/products/tunturit-laskettelusukat',
      fetchedAt: '2026-08-04',
    },
  },
  {
    slug: 'north-outdoor-huuru-beanie',
    category: 'clothing',
    brand: 'North Outdoor',
    name: {
      en: 'North Outdoor Huuru merino beanie',
      fi: 'North Outdoor Huuru -merinopipo',
    },
    description: {
      en: 'North Outdoor knits this rib beanie in its own knitting mill in Oulu from 100 per cent mulesing free merino, 18.5 micron. Knitted to shape rather than cut, so there is little offcut waste.',
      fi: 'North Outdoor neuloo tämän ribbipipon omassa neulomossaan Oulussa 100-prosenttisesta mulesing-vapaasta merinovillasta, mikroni 18,5. Neulotaan suoraan muotoonsa eikä leikata, joten hukkapaloja syntyy vähän.',
    },
    priceFrom: 49.95,
    currency: 'EUR',
    priceCheckedAt: '2026-08-01',
    image: 'prod-north-outdoor-huuru-beanie',
    imageIsPartner: true,
    partnerId: 'northoutdoor',
    partnerProductUrl: 'https://northoutdoor.com/products/huuru-merinopipo-indigonsininen',
    featured: true,
    details: {
      specs: [
        {
          key: 'material',
          value: {
            en: '100 % merino wool, mulesing free, 18.5 micron, knit 270 g/m²',
            fi: '100 % merinovillaa, mulesing-vapaa, mikroni 18,5, neulos 270 g/m²',
          },
        },
        { key: 'size', value: { en: 'One size', fi: 'Yksi koko' } },
        { key: 'color', value: { en: 'Indigo blue', fi: 'Indigonsininen' } },
        { key: 'origin', value: { en: 'Made in Oulu, Finland', fi: 'Valmistettu Oulussa, Suomessa' } },
        {
          key: 'care',
          value: {
            en: 'Air it regularly and wash only when needed. Wool detergent, gentle cycle at 30 °C with the lightest spin, inside out',
            fi: 'Tuuleta säännöllisesti ja pese vain tarvittaessa. Villapesuaine, hienopesu 30 asteessa kevyimmällä linkouksella, nurinpäin',
          },
        },
        {
          key: 'other',
          label: { en: 'Certificates', fi: 'Sertifikaatit' },
          value: { en: 'OEKO-TEX, Woolmark', fi: 'OEKO-TEX, Woolmark' },
        },
      ],
      sourceUrl: 'https://northoutdoor.com/products/huuru-merinopipo-indigonsininen',
      fetchedAt: '2026-08-01',
    },
  },
  {
    slug: 'north-outdoor-pyry-scarf',
    category: 'clothing',
    brand: 'North Outdoor',
    name: {
      en: 'North Outdoor Pyry merino scarf',
      fi: 'North Outdoor Pyry -merinokaulaliina',
    },
    description: {
      en: 'A wide, long brioche knit scarf in 100 per cent merino, knitted in Oulu. Long enough to wrap several ways, which matters when the wind changes direction on an open fell.',
      fi: 'Leveä ja pitkä patenttineulottu kaulaliina 100-prosenttisesta merinovillasta, neulottu Oulussa. Riittävän pitkä kiedottavaksi monella tavalla, millä on väliä kun tuuli kääntää suuntaa aukealla tunturilla.',
    },
    priceFrom: 79.95,
    currency: 'EUR',
    priceCheckedAt: '2026-08-01',
    image: 'prod-north-outdoor-pyry-scarf',
    imageIsPartner: true,
    partnerId: 'northoutdoor',
    partnerProductUrl: 'https://northoutdoor.com/products/pyry-merino-kaulaliina-puuronharmaa',
    details: {
      specs: [
        {
          key: 'material',
          value: {
            en: '100 % merino wool, 18.5 micron, 1/1 rib knit',
            fi: '100 % merinovillaa, mikroni 18,5, 1/1 ribbineulos',
          },
        },
        { key: 'size', value: { en: 'One size', fi: 'Yksi koko' } },
        { key: 'color', value: { en: 'Porridge grey', fi: 'Puuronharmaa' } },
        { key: 'origin', value: { en: 'Made in Oulu, Finland', fi: 'Valmistettu Oulussa, Suomessa' } },
        {
          key: 'care',
          value: {
            en: 'Air it regularly and wash only when needed. Wool detergent, gentle cycle at 30 °C with the lightest spin, inside out',
            fi: 'Tuuleta säännöllisesti ja pese vain tarvittaessa. Villapesuaine, hienopesu 30 asteessa kevyimmällä linkouksella, nurinpäin',
          },
        },
        {
          key: 'other',
          label: { en: 'Certificates', fi: 'Sertifikaatit' },
          value: { en: 'OEKO-TEX, Woolmark', fi: 'OEKO-TEX, Woolmark' },
        },
      ],
      sourceUrl: 'https://northoutdoor.com/products/pyry-merino-kaulaliina-puuronharmaa',
      fetchedAt: '2026-08-01',
    },
  },
  {
    slug: 'north-outdoor-honka-jumper',
    category: 'clothing',
    brand: 'North Outdoor',
    name: {
      en: "North Outdoor Honka merino jumper, men's",
      fi: 'North Outdoor Honka -merinoneulepusero, miesten',
    },
    description: {
      en: 'A thick brioche knit jumper in 100 per cent merino with a relaxed cut and a dropped shoulder line. Heavy to look at, light to wear, and knitted in the Oulu mill.',
      fi: 'Paksu patenttineulottu villapaita 100-prosenttisesta merinovillasta, rento mitoitus ja korostettu hartialinja. Näyttää painavalta mutta on kevyt päällä, neulottu Oulun neulomossa.',
    },
    priceFrom: 159.95,
    currency: 'EUR',
    priceCheckedAt: '2026-08-01',
    image: 'prod-north-outdoor-honka-jumper',
    imageIsPartner: true,
    partnerId: 'northoutdoor',
    partnerProductUrl:
      'https://northoutdoor.com/products/honka-miesten-merinoneulepusero-indigonsininen',
    details: {
      specs: [
        {
          key: 'material',
          value: {
            en: '100 % merino wool, mulesing free, 18.5 micron, varying rib knit',
            fi: '100 % merinovillaa, mulesing-vapaa, mikroni 18,5, vaihteleva ribbineulos',
          },
        },
        { key: 'size', value: { en: 'S, M, L, XL, 2XL, 3XL', fi: 'S, M, L, XL, 2XL, 3XL' } },
        { key: 'color', value: { en: 'Indigo blue', fi: 'Indigonsininen' } },
        { key: 'origin', value: { en: 'Made in Oulu, Finland', fi: 'Valmistettu Oulussa, Suomessa' } },
        {
          key: 'care',
          value: {
            en: 'Air it regularly and wash only when needed. Wool detergent, gentle cycle at 30 °C with the lightest spin, inside out',
            fi: 'Tuuleta säännöllisesti ja pese vain tarvittaessa. Villapesuaine, hienopesu 30 asteessa kevyimmällä linkouksella, nurinpäin',
          },
        },
        {
          key: 'other',
          label: { en: 'Certificates', fi: 'Sertifikaatit' },
          value: { en: 'OEKO-TEX, Woolmark', fi: 'OEKO-TEX, Woolmark' },
        },
      ],
      sourceUrl:
        'https://northoutdoor.com/products/honka-miesten-merinoneulepusero-indigonsininen',
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
            fi: 'Puukko ja nahkatuppi, jossa nepparilukko',
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

  {
    slug: 'kupilka-classic-cup-21',
    category: 'handicrafts',
    brand: 'Kupilka',
    name: {
      en: 'Kupilka 21 camp cup 2,1 dl',
      fi: 'Kupilka 21 -juomamuki 2,1 dl',
    },
    description: {
      en: 'The kuksa shape in a material you can throw in the dishwasher: half pine cellulose fibre, half thermoplastic, moulded in Finland. It holds 2.1 dl, weighs 83 grams and does not burn your fingers around a fire.',
      fi: 'Kuksan muoto materiaalissa, jonka voi heittää tiskikoneeseen: puolet mäntysellukuitua, puolet kestomuovia, valmistettu Suomessa. Vetää 2,1 desiä, painaa 83 grammaa eikä polta sormia nuotiolla.',
    },
    priceFrom: 18.95,
    currency: 'EUR',
    priceCheckedAt: '2026-08-01',
    image: 'prod-kupilka-classic-cup-21',
    imageIsPartner: true,
    partnerId: 'scandinavianoutdoor',
    partnerProductUrl:
      'https://scandinavianoutdoor.fi/kupilka/varusteet/ruokailu-ja-astiat/astiat/juomamuki-21/',
    featured: true,
    details: {
      specs: [
        { key: 'volume', value: { en: '2.1 dl', fi: '2,1 dl' } },
        { key: 'weight', value: { en: '83 g', fi: '83 g' } },
        { key: 'size', value: { en: '60 x 93 x 165 mm', fi: '60 x 93 x 165 mm' } },
        {
          key: 'material',
          value: {
            en: 'Kareline natural fibre composite, 50 % pine cellulose fibre and 50 % thermoplastic, made using eco energy',
            fi: 'Kareline-luonnonkuitukomposiitti, 50 % mäntysellukuitua ja 50 % kestomuovia, valmistettu ekoenergialla',
          },
        },
        { key: 'origin', value: { en: 'Finland', fi: 'Suomi' } },
        {
          key: 'care',
          value: {
            en: 'Rinse it on the trail like a wooden kuksa, at home it goes in the dishwasher. Not for the microwave',
            fi: 'Pese reissulla kuin puukuksa, kotona voi laittaa astianpesukoneeseen. Ei mikroaaltouuniin',
          },
        },
        {
          key: 'other',
          label: { en: 'Model number', fi: 'Mallinumero' },
          value: { en: '3021011XX', fi: '3021011XX' },
        },
      ],
      sourceUrl:
        'https://scandinavianoutdoor.fi/kupilka/varusteet/ruokailu-ja-astiat/astiat/juomamuki-21/',
      fetchedAt: '2026-08-01',
    },
  },
  {
    slug: 'kupilka-bowl-55',
    category: 'handicrafts',
    brand: 'Kupilka',
    name: {
      en: 'Kupilka 55 camp bowl 5,5 dl',
      fi: 'Kupilka 55 -retkikulho 5,5 dl',
    },
    description: {
      en: 'A 5.5 dl bowl with a handle solid enough to hold in one hand while the other keeps the mug. Same Finnish pine fibre composite as the cup, 184 grams, dishwasher safe.',
      fi: '5,5 desin kulho, jonka kahvasta saa tukevan otteen yhdellä kädellä, jolloin toinen jää mukille. Sama suomalainen puukuitukomposiitti kuin mukissa, 184 grammaa, kestää konepesun.',
    },
    priceFrom: 21.9,
    currency: 'EUR',
    priceCheckedAt: '2026-08-01',
    image: 'prod-kupilka-bowl-55',
    imageIsPartner: true,
    partnerId: 'scandinavianoutdoor',
    partnerProductUrl:
      'https://scandinavianoutdoor.fi/kupilka/varusteet/ruokailu-ja-astiat/astiat/kulho-55/',
    details: {
      specs: [
        { key: 'volume', value: { en: '5.5 dl', fi: '5,5 dl' } },
        { key: 'weight', value: { en: '184 g', fi: '184 g' } },
        { key: 'size', value: { en: '54 x 154 x 223 mm', fi: '54 x 154 x 223 mm' } },
        {
          key: 'material',
          value: {
            en: 'Kareline natural fibre composite, 50 % pine cellulose fibre and 50 % thermoplastic, made using eco energy',
            fi: 'Kareline-luonnonkuitukomposiitti, 50 % mäntysellukuitua ja 50 % kestomuovia, valmistettu ekoenergialla',
          },
        },
        { key: 'origin', value: { en: 'Finland', fi: 'Suomi' } },
        {
          key: 'care',
          value: {
            en: 'Dishwasher safe. Not for the microwave. Approved for contact with hot and cold food',
            fi: 'Kestää konepesun. Ei mikroaaltouuniin. Hyväksytty kuumien ja kylmien ruokien kanssa',
          },
        },
        {
          key: 'other',
          label: { en: 'Model number', fi: 'Mallinumero' },
          value: { en: '3055013X', fi: '3055013X' },
        },
      ],
      sourceUrl:
        'https://scandinavianoutdoor.fi/kupilka/varusteet/ruokailu-ja-astiat/astiat/kulho-55/',
      fetchedAt: '2026-08-01',
    },
  },
  {
    slug: 'kupilka-cutlery-set',
    category: 'handicrafts',
    brand: 'Kupilka',
    name: {
      en: 'Kupilka cutlery set',
      fi: 'Kupilka-aterinsetti',
    },
    description: {
      en: 'Spoon, knife and fork in the same Finnish wood fibre composite, 56 grams for the set. The cheapest way to take the Kupilka material home and the easiest to fit in hand luggage.',
      fi: 'Lusikka, veitsi ja haarukka samasta suomalaisesta puukuitukomposiitista, setti painaa 56 grammaa. Halvin tapa viedä Kupilka-materiaali kotiin ja helpoin mahduttaa käsimatkatavaroihin.',
    },
    priceFrom: 10.9,
    currency: 'EUR',
    priceCheckedAt: '2026-08-01',
    image: 'prod-kupilka-cutlery-set',
    imageIsPartner: true,
    partnerId: 'scandinavianoutdoor',
    partnerProductUrl:
      'https://scandinavianoutdoor.fi/kupilka/varusteet/ruokailu-ja-astiat/astiat/kupilka-aterinsetti/',
    details: {
      specs: [
        {
          key: 'contents',
          value: { en: 'Spoon, knife and fork', fi: 'Lusikka, veitsi ja haarukka' },
        },
        { key: 'weight', value: { en: '56 g', fi: '56 g' } },
        {
          key: 'material',
          value: {
            en: 'Kareline natural fibre composite, 50 % pine cellulose fibre and 50 % thermoplastic, made using eco energy',
            fi: 'Kareline-luonnonkuitukomposiitti, 50 % mäntysellukuitua ja 50 % kestomuovia, valmistettu ekoenergialla',
          },
        },
        { key: 'origin', value: { en: 'Finland', fi: 'Suomi' } },
        {
          key: 'care',
          value: {
            en: 'Rinse on the trail like wooden cutlery, at home it goes in the dishwasher. Not for the microwave',
            fi: 'Pese reissulla kuin puuaterimet, kotona voi laittaa astianpesukoneeseen. Ei mikroaaltouuniin',
          },
        },
        {
          key: 'other',
          label: { en: 'Model number', fi: 'Mallinumero' },
          value: { en: '3025025X', fi: '3025025X' },
        },
      ],
      sourceUrl:
        'https://scandinavianoutdoor.fi/kupilka/varusteet/ruokailu-ja-astiat/astiat/kupilka-aterinsetti/',
      fetchedAt: '2026-08-01',
    },
  },
  {
    slug: 'lapuan-kankurit-poro-towel',
    category: 'handicrafts',
    brand: 'Lapuan Kankurit',
    name: {
      en: 'Lapuan Kankurit PORO linen towel 46 x 70 cm',
      fi: 'Lapuan Kankurit PORO-pellavapyyhe 46 x 70 cm',
    },
    description: {
      en: 'A reindeer drawn by illustrator Matti Pikkujämsä, woven in the mill in Lapua from European linen warp and organic cotton weft. Folds flat into a suitcase, and the absorbency only arrives after a few washes.',
      fi: 'Matti Pikkujämsän piirtämä poro, kudottu Lapuan kutomossa eurooppalaisesta pellavaloimesta ja luomupuuvillakuteesta. Litistyy matkalaukkuun, ja imukyky kehittyy vasta parin pesun jälkeen.',
    },
    priceFrom: 19.9,
    currency: 'EUR',
    priceCheckedAt: '2026-08-01',
    image: 'prod-lapuan-kankurit-poro-towel',
    imageIsPartner: true,
    partnerId: 'lapuankankurit',
    partnerProductUrl:
      'https://lapuankankurit.fi/shop/tea-towels/poro-linen-towel-linen-green-46-x-70-cm/',
    featured: true,
    details: {
      specs: [
        { key: 'size', value: { en: '46 x 70 cm', fi: '46 x 70 cm' } },
        {
          key: 'material',
          value: {
            en: '60 % linen, Masters of Linen, and 40 % cotton',
            fi: '60 % pellavaa, Masters of Linen, ja 40 % puuvillaa',
          },
        },
        { key: 'color', value: { en: 'Linen-green', fi: 'Pellava-vihreä' } },
        { key: 'origin', value: { en: 'Made in Finland', fi: 'Valmistettu Suomessa' } },
        {
          key: 'care',
          value: {
            en: 'Wash separately before use at 60 °C on a gentle cycle in plenty of water. Do not spin dry. Avoid softener and bleach. Do not tumble dry. Iron while still damp. Shrinkage approx. 5 %',
            fi: 'Pese erikseen ennen käyttöä 60 °C hienopesulla runsaassa vedessä. Ei linkousta. Vältä huuhteluainetta ja valkaisua. Ei rumpukuivausta. Silitä kosteana. Kutistuma noin 5 %',
          },
        },
        {
          key: 'other',
          label: { en: 'Designer', fi: 'Suunnittelija' },
          value: { en: 'Matti Pikkujämsä', fi: 'Matti Pikkujämsä' },
        },
        {
          key: 'other',
          label: { en: 'Product code', fi: 'Tuotekoodi' },
          value: { en: '20527', fi: '20527' },
        },
        {
          key: 'other',
          label: { en: 'Certificates', fi: 'Sertifikaatit' },
          value: { en: 'Key Flag, Masters of Linen', fi: 'Avainlippu, Masters of Linen' },
        },
      ],
      sourceUrl:
        'https://lapuankankurit.fi/shop/tea-towels/poro-linen-towel-linen-green-46-x-70-cm/',
      fetchedAt: '2026-08-01',
    },
  },
  {
    slug: 'lapuan-kankurit-kaamos-blanket',
    category: 'handicrafts',
    brand: 'Lapuan Kankurit',
    name: {
      en: 'Lapuan Kankurit KAAMOS wool blanket 100 x 150 cm',
      fi: 'Lapuan Kankurit KAAMOS-villahuopa 100 x 150 cm',
    },
    description: {
      en: 'Kaamos is the polar night, and Hanna Galtat drew the pattern from the way daylight moves through the day. The weft yarn is Finnsheep wool the mill collects from farms within about 400 km of Lapua.',
      fi: 'Kaamos on se pimeä kausi, ja Hanna Galtatin kuvio seuraa päivänvalon kulkua vuorokauden aikana. Kudelanka on suomenlampaan villaa, jonka kutomo kerää noin 400 kilometrin säteeltä Lapualta.',
    },
    priceFrom: 99.9,
    currency: 'EUR',
    priceCheckedAt: '2026-08-01',
    image: 'prod-lapuan-kankurit-kaamos-blanket',
    imageIsPartner: true,
    partnerId: 'lapuankankurit',
    partnerProductUrl:
      'https://lapuankankurit.fi/shop/wool-blankets-cushion-covers/kaamos-wool-blanket-white-black-100-x-150-cm/',
    details: {
      specs: [
        { key: 'size', value: { en: '100 x 150 cm', fi: '100 x 150 cm' } },
        { key: 'material', value: { en: '100 % pure new wool', fi: '100 % uutta villaa' } },
        { key: 'color', value: { en: 'White-black', fi: 'Valkoinen-musta' } },
        { key: 'origin', value: { en: 'Made in Finland', fi: 'Valmistettu Suomessa' } },
        {
          key: 'care',
          value: {
            en: 'Only wash if very dirty, otherwise air it outdoors. Hand wash at max. 30 °C or dry clean. Do not scrub, stretch or wring. Do not tumble dry. Iron with a damp cloth at max. 150 °C',
            fi: 'Pese vain jos on hyvin likainen, muuten tuuleta ulkona. Käsinpesu enintään 30 °C tai kuivapesu. Älä hankaa, venytä tai väännä. Ei rumpukuivausta. Silitä kostean liinan läpi enintään 150 °C',
          },
        },
        {
          key: 'other',
          label: { en: 'Designer', fi: 'Suunnittelija' },
          value: { en: 'Hanna Galtat', fi: 'Hanna Galtat' },
        },
        {
          key: 'other',
          label: { en: 'Product code', fi: 'Tuotekoodi' },
          value: { en: '102939', fi: '102939' },
        },
        {
          key: 'other',
          label: { en: 'Certificate', fi: 'Sertifikaatti' },
          value: { en: 'Key Flag', fi: 'Avainlippu' },
        },
      ],
      sourceUrl:
        'https://lapuankankurit.fi/shop/wool-blankets-cushion-covers/kaamos-wool-blanket-white-black-100-x-150-cm/',
      fetchedAt: '2026-08-01',
    },
  },
  {
    slug: 'pentik-posio-mug',
    category: 'handicrafts',
    brand: 'Pentik',
    name: {
      en: 'Pentik Posio mug 0,3 l',
      fi: 'Pentik Posio-muki 0,3 l',
    },
    description: {
      en: 'Pentik fires this mug in Posio, which the company calls the northernmost ceramics factory in the world, and the whole Posio range is decorated with reindeer. Dishwasher, oven, microwave and freezer safe.',
      fi: 'Pentik polttaa tämän mukin Posiolla, jota yritys kutsuu maailman pohjoisimmaksi keramiikkatehtaaksi, ja koko Posio-sarjan koristeena on poro. Kestää konepesun, uunin, mikron ja pakastimen.',
    },
    priceFrom: 37.9,
    currency: 'EUR',
    priceCheckedAt: '2026-08-01',
    image: 'prod-pentik-posio-mug',
    imageIsPartner: true,
    partnerId: 'pentik',
    partnerProductUrl: 'https://en.pentik.com/products/posio-mug-red-0-3-l',
    featured: true,
    badges: ['made-in-lapland'],
    details: {
      specs: [
        { key: 'volume', value: { en: '0.3 l', fi: '0,3 l' } },
        { key: 'color', value: { en: 'Red', fi: 'Punainen' } },
        {
          key: 'origin',
          value: {
            en: 'Made in Posio, Lapland, which Pentik calls the northernmost ceramics factory in the world',
            fi: 'Valmistettu Posiolla Lapissa, jota Pentik kutsuu maailman pohjoisimmaksi keramiikkatehtaaksi',
          },
        },
        {
          key: 'care',
          value: {
            en: 'Machine washable, safe in the electric oven, baking oven, microwave and freezer',
            fi: 'Kestää konepesun sekä sähköuunin, leivinuunin, mikron ja pakastimen',
          },
        },
        {
          key: 'other',
          label: { en: 'Collection', fi: 'Sarja' },
          value: {
            en: 'Posio. Every piece in the range is decorated with reindeer',
            fi: 'Posio. Koko sarjan koristeena on poro',
          },
        },
        {
          key: 'other',
          label: { en: 'Product code', fi: 'Tuotekoodi' },
          value: { en: '12JAO050P41', fi: '12JAO050P41' },
        },
      ],
      sourceUrl: 'https://en.pentik.com/products/posio-mug-red-0-3-l',
      fetchedAt: '2026-08-01',
    },
  },
  {
    slug: 'pentik-tunturiretki-studio-dish',
    category: 'handicrafts',
    brand: 'Pentik',
    name: {
      en: 'Pentik Tunturiretki Winter Studio deep triangle dish 19 cm',
      fi: 'Pentik Tunturiretki Winter Studio -kolmiovati syvä 19 cm',
    },
    description: {
      en: 'Anu Pentik painted the reindeer that keep appearing between the trees on a fell walk. Studio pieces are hand painted in Posio, so no two dishes carry exactly the same brush marks.',
      fi: 'Anu Pentik maalasi ne porot, jotka ilmestyvät puiden välistä tunturiretkellä. Studio-tuotteet maalataan käsin Posiolla, joten kahdessa vadissa ei ole täsmälleen samoja siveltimenvetoja.',
    },
    priceFrom: 68,
    currency: 'EUR',
    priceCheckedAt: '2026-08-01',
    image: 'prod-pentik-tunturiretki-studio-dish',
    imageIsPartner: true,
    partnerId: 'pentik',
    partnerProductUrl:
      'https://en.pentik.com/products/tunturiretki-winter-triangle-dish-deep-blue-19-cm',
    badges: ['made-in-lapland'],
    details: {
      specs: [
        { key: 'size', value: { en: 'Diameter 19 cm', fi: 'Halkaisija 19 cm' } },
        { key: 'color', value: { en: 'Blue', fi: 'Sininen' } },
        {
          key: 'origin',
          value: {
            en: 'Handmade in Posio, Lapland, designed by Anu Pentik',
            fi: 'Käsintehty Posiolla Lapissa, suunnittelija Anu Pentik',
          },
        },
        {
          key: 'care',
          value: {
            en: 'Machine washable, safe in the electric oven, baking oven, microwave and freezer',
            fi: 'Kestää konepesun sekä sähköuunin, leivinuunin, mikron ja pakastimen',
          },
        },
        {
          key: 'other',
          label: { en: 'Collection', fi: 'Sarja' },
          value: {
            en: 'Pentik Studio, the hand painted range',
            fi: 'Pentik Studio, käsin maalattu sarja',
          },
        },
        {
          key: 'other',
          label: { en: 'Product code', fi: 'Tuotekoodi' },
          value: { en: '12ST353TT61', fi: '12ST353TT61' },
        },
      ],
      sourceUrl:
        'https://en.pentik.com/products/tunturiretki-winter-triangle-dish-deep-blue-19-cm',
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
            fi: 'Energia 1514 kJ / 360 kcal, rasva 14,2 g, josta tyydyttynyttä 6,2 g, hiilihydraatit 7,9 g, joista sokereita 5,1 g, proteiini 50,2 g, suola 9,5 g',
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
            fi: 'Energia 1316 kJ / 311 kcal, rasva 0,5 g, josta tyydyttyneitä 0 g, hiilihydraatit 72 g, joista sokeria 50 g, proteiini 4,1 g, suola 1,7 g',
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
            fi: 'Energia 781 kJ / 187 kcal, rasva 1,9 g, josta tyydyttyneitä 0,3 g, hiilihydraatit 41 g, joista sokeria 41 g, proteiini 0,3 g, suola 0,01 g',
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

  {
    slug: 'kuivalihakundi-poro-jerky-200g',
    category: 'treats',
    brand: 'Kuivalihakundi',
    name: {
      en: 'Reindeer jerky Original 200 g',
      fi: 'Poro-Jerky Original 200 g',
    },
    description: {
      en: 'The gift sized sack of the same reindeer jerky, 200 grams. The producer says one kilo of dried meat takes three kilos of fresh, which is most of the reason a bag of it costs what it does.',
      fi: 'Lahjakokoinen säkillinen samaa poron kuivalihaa, 200 grammaa. Valmistajan mukaan kilo kuivalihaa vaatii kolme kiloa tuoretta lihaa, mikä selittää suurimman osan hinnasta.',
    },
    priceFrom: 39.99,
    currency: 'EUR',
    priceCheckedAt: '2026-08-01',
    image: 'prod-kuivalihakundi-poro-jerky-200g',
    imageIsPartner: true,
    partnerId: 'kuivalihakundi',
    partnerProductUrl: 'https://kuivalihakundi.com/products/poro-200-g',
    details: {
      specs: [
        { key: 'weight', value: { en: '200 g', fi: '200 g' } },
        {
          key: 'contents',
          value: {
            en: '100 % reindeer meat, topside, oven dried and marinated',
            fi: '100 % poronlihaa, poronpaistia, uunikuivattu ja marinoitu',
          },
        },
        {
          key: 'other',
          label: { en: 'Meat used', fi: 'Lihan määrä' },
          value: {
            en: '1 kg of dried meat takes 3 kg of fresh meat',
            fi: '1 kg kuivalihaa vaatii 3 kg tuoretta lihaa',
          },
        },
        {
          key: 'shelfLife',
          value: {
            en: 'Dates run about a year from the day the meat was dried and packed. Does not need to be kept cold, even after opening',
            fi: 'Päiväykset menevät noin vuoden päähän siitä, kun liha on kuivattu ja pakattu. Ei tarvitse kylmäsäilytystä avattunakaan',
          },
        },
      ],
      ingredients: {
        en: 'Reindeer topside, gluten free soy sauce, black pepper, garlic and sugar syrup.',
        fi: 'Poronpaisti, gluteeniton soijakastike, mustapippuri, valkosipuli ja sokerisiirappi.',
      },
      sourceUrl: 'https://kuivalihakundi.com/products/poro-200-g',
      fetchedAt: '2026-08-01',
    },
  },
  {
    slug: 'kuivalihakundi-beef-jerky-smoked',
    category: 'treats',
    brand: 'Kuivalihakundi',
    name: {
      en: 'Beef jerky Smoked 40 g',
      fi: 'Beef Jerky Smoked 40 g',
    },
    description: {
      en: 'Beef rather than reindeer, actually smoked rather than flavoured, 57 grams of protein per 100. The cheapest thing in this category and the one that survives a rucksack.',
      fi: 'Nautaa poron sijaan, aidosti savustettu eikä vain savunmakuiseksi maustettu, proteiinia 57 grammaa sadassa. Tämän kategorian halvin ja se joka kestää repun pohjalla.',
    },
    priceFrom: 6.99,
    currency: 'EUR',
    priceCheckedAt: '2026-08-01',
    image: 'prod-kuivalihakundi-beef-jerky-smoked',
    imageIsPartner: true,
    partnerId: 'kuivalihakundi',
    partnerProductUrl: 'https://kuivalihakundi.com/products/beef-jerky-savu-50g',
    details: {
      specs: [
        { key: 'weight', value: { en: '40 g', fi: '40 g' } },
        {
          key: 'origin',
          value: {
            en: 'Beef reared and slaughtered in the EU',
            fi: 'Naudanliha kasvatettu ja teurastettu EU:ssa',
          },
        },
        {
          key: 'other',
          label: { en: 'Meat used', fi: 'Lihan määrä' },
          value: {
            en: '1 kg of dried meat takes 2.5 kg of fresh beef',
            fi: '1 kg kuivalihaa vaatii 2,5 kg tuoretta naudanlihaa',
          },
        },
        {
          key: 'other',
          label: { en: 'Nutrition per 100 g', fi: 'Ravintosisältö per 100 g' },
          value: {
            en: 'Energy 1261 kJ / 298 kcal, fat 5.5 g of which saturates 2.4 g, carbohydrate 5.2 g of which sugars 4.4 g, protein 56.9 g, salt 5 g',
            fi: 'Energia 1261 kJ / 298 kcal, rasva 5,5 g, josta tyydyttynyttä 2,4 g, hiilihydraatit 5,2 g, joista sokereita 4,4 g, proteiini 56,9 g, suola 5 g',
          },
        },
      ],
      ingredients: {
        en: 'Beef, gluten free soy sauce (water, hydrolysed SOY protein, salt), sugar syrup, garlic, black pepper.',
        fi: 'Naudanliha, gluteeniton soijakastike (vesi, hydrolysoitu SOIJAPROTEIINI, suola), sokerisiirappi, valkosipuli, mustapippuri.',
      },
      sourceUrl: 'https://kuivalihakundi.com/products/beef-jerky-savu-50g',
      fetchedAt: '2026-08-01',
    },
  },
  {
    slug: 'fazer-geisha-chocolate-bar',
    category: 'treats',
    brand: 'Fazer',
    name: {
      en: 'Fazer Geisha hazelnut nougat chocolate bar 121 g',
      fi: 'Fazer Geisha hasselpähkinänougat-suklaalevy 121 g',
    },
    description: {
      en: 'Milk chocolate over a crisp hazelnut nougat filling, the bar most Finnish households keep in a drawer. Fazer states it is made without palm oil.',
      fi: 'Maitosuklaata rapean hasselpähkinänougat-täytteen päällä, se levy, jota useimmissa suomalaiskodeissa säilytetään laatikossa. Fazer ilmoittaa sen valmistetuksi ilman palmuöljyä.',
    },
    priceFrom: 4.39,
    currency: 'EUR',
    priceCheckedAt: '2026-08-01',
    image: 'prod-fazer-geisha-chocolate-bar',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/fazer-geisha-suklaalevy-121g',
    details: {
      specs: [
        { key: 'weight', value: { en: '121 g', fi: '121 g' } },
        {
          key: 'contents',
          value: {
            en: 'Milk chocolate with at least 30 % cocoa, hazelnut nougat filling 11 % hazelnuts',
            fi: 'Maitosuklaassa vähintään 30 % kaakaota, hasselpähkinänougat-täytteessä 11 % hasselpähkinää',
          },
        },
        {
          key: 'other',
          label: { en: 'Nutrition per 100 g', fi: 'Ravintosisältö per 100 g' },
          value: {
            en: 'Energy 550 kcal / 2302 kJ, fat 35 g, saturates 17 g, carbohydrate 51 g, sugars 49 g, protein 8 g, salt 0.19 g',
            fi: 'Energia 550 kcal / 2302 kJ, rasva 35 g, tyydyttyneitä 17 g, hiilihydraatit 51 g, sokereita 49 g, proteiini 8 g, suola 0,19 g',
          },
        },
      ],
      ingredients: {
        en: 'Sugar, MILK, cocoa butter, HAZELNUTS (11 %), cocoa mass, whole MILK powder, buttermilk powder, WHEAT flour, maize starch, emulsifier (SOY lecithin), sunflower oil, salt, flavourings.',
        fi: 'Sokeri, MAITO, kaakaovoi, HASSELPÄHKINÄT (11 %), kaakaomassa, täysMAITOjauhe, kirnuMAITOjauhe, VEHNÄjauho, maissitärkkelys, emulgointiaine (SOIJAlesitiini), auringonkukkaöljy, suola, aromit.',
      },
      allergens: {
        en: 'Contains: nuts, cereals containing gluten and products thereof, milk, hazelnut, soybeans, wheat, lactose, maize, cocoa. May contain: almonds, rye, oats, other nuts and other cereals containing gluten.',
        fi: 'Sisältää: pähkinät, gluteenia sisältävät viljat ja niistä valmistetut tuotteet, maito, hasselpähkinä, soijapavut, vehnä, laktoosi, maissi, kaakao. Saattaa sisältää: mantelit, ruis, kaura, muut pähkinät ja muut gluteenia sisältävät viljat.',
      },
      sourceUrl: 'https://suomikauppa.fi/products/fazer-geisha-suklaalevy-121g',
      fetchedAt: '2026-08-01',
    },
  },
  {
    slug: 'nordqvist-moomin-forest-berry-tea',
    category: 'treats',
    brand: 'Nordqvist',
    name: {
      en: 'Nordqvist Moomin forest berry hibiscus tea, 20 bags',
      fi: 'Nordqvist Muumi metsämarjainen hibiskustee, 20 pussia',
    },
    description: {
      en: 'Organic hibiscus with apple and forest berries, naturally caffeine free, blended at the Nordqvist factory in Nurmijärvi. Twenty bags weigh 35 grams, which is the lightest gift in this shop.',
      fi: 'Luomuhibiskusta omenan ja metsämarjojen kanssa, luonnostaan kofeiiniton, sekoitettu Nordqvistin tehtaalla Nurmijärvellä. Kaksikymmentä pussia painaa 35 grammaa, eli tämä on kaupan kevein lahja.',
    },
    // 🔴 Siirretty nordqvist.fi:stä Suomikauppaan 2026-08-10. Kaksi syytä, ja
    // kumpikin on ostajan eduksi eikä vain meidän:
    //  1. nordqvist.fi ei ole missään affiliate-verkossa, joten tämä tuote
    //     tuotti nolla jokaisesta klikistä. Suomikauppa on Daisyconissa 7 %.
    //  2. Nordqvistin oma kauppa toimittaa VAIN Suomeen (partners.ts shipsTo
    //     'fi'), joten tuote oli piilossa jokaiselta muulta toimitusmaalta.
    //     Suomikauppa postittaa maailmanlaajuisesti, joten sama tee näkyy nyt
    //     myös ulkomaille tilaavalle.
    // Sama tuote, sama valmistaja: "Nordqvist Muumi Metsämarjainen hibiskustee
    // 20 x 1,75g luomu FI-EKO-201", URL verifioitu 200 + täsmäävä title 10.8.
    priceFrom: 5.65,
    currency: 'EUR',
    priceCheckedAt: '2026-08-10',
    image: 'prod-nordqvist-moomin-forest-berry-tea',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl:
      'https://suomikauppa.fi/products/muumi-metsamarjainen-hibiskustee',
    details: {
      specs: [
        { key: 'weight', value: { en: '20 x 1.75 g, 35 g', fi: '20 x 1,75 g, 35 g' } },
        {
          key: 'origin',
          value: {
            en: 'Blended at the Nordqvist factory in Nurmijärvi, Finland',
            fi: 'Valmistettu Nordqvistin tehtaalla Nurmijärvellä',
          },
        },
        {
          key: 'other',
          label: { en: 'Brewing', fi: 'Haudutus' },
          value: {
            en: '95 °C for 2 to 4 minutes. In cold water 5 to 10 minutes',
            fi: '95 °C, 2-4 minuuttia. Kylmässä vedessä 5-10 minuuttia',
          },
        },
        {
          key: 'other',
          label: { en: 'Diet', fi: 'Ruokavalio' },
          value: {
            en: 'Organic certified, vegan, gluten free, naturally caffeine free',
            fi: 'Luomusertifioitu, vegaaninen, gluteeniton, luonnostaan kofeiiniton',
          },
        },
      ],
      ingredients: {
        en: 'Organic hibiscus (89 %), organic apple, natural bilberry powder, natural bilberry and raspberry flavouring.',
        fi: 'Luomuhibiskus (89 %), luomuomena, luontainen mustikkajauhe, luontainen mustikka- ja vadelma-aromi.',
      },
      sourceUrl: 'https://suomikauppa.fi/products/muumi-metsamarjainen-hibiskustee',
      fetchedAt: '2026-08-01',
    },
  },
  {
    slug: 'nordqvist-cranberry-toffee-tea',
    category: 'treats',
    brand: 'Nordqvist',
    name: {
      en: 'Nordqvist cranberry and salted toffee tea, 20 bags',
      fi: 'Nordqvist Karpalo-Suolakinuski-pussitee, 20 pussia',
    },
    description: {
      en: 'Tart cranberry against salted toffee on a hibiscus and rooibos base, so it is caffeine free and still tastes of something in the evening. Nordqvist has been blending tea in Finland since 1883.',
      fi: 'Kirpeä karpalo suolakinuskia vasten hibiskus- ja rooibospohjalla, joten se on kofeiiniton mutta maistuu illallakin joltain. Nordqvist on sekoittanut teetä Suomessa vuodesta 1883.',
    },
    // Siirretty Suomikauppaan 2026-08-10 samasta syystä kuin Muumi-hibiskustee
    // yllä: nordqvist.fi ei ole missään verkossa eikä toimita Suomen
    // ulkopuolelle. Sama tuote: "Nordqvist Karpalo-Suolakinuski 20 x 1,75 g
    // RFA", URL verifioitu 200 + täsmäävä title 10.8.
    priceFrom: 3.14,
    currency: 'EUR',
    priceCheckedAt: '2026-08-10',
    image: 'prod-nordqvist-cranberry-toffee-tea',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl:
      'https://suomikauppa.fi/products/nordqvist-karpalo-suolakinuski-pussitee',
    details: {
      specs: [
        { key: 'weight', value: { en: '20 x 1.75 g, 35 g', fi: '20 x 1,75 g, 35 g' } },
        {
          key: 'other',
          label: { en: 'Brewing', fi: 'Haudutus' },
          value: { en: '95 °C for 2 to 5 minutes', fi: '95 °C, 2-5 minuuttia' },
        },
        {
          key: 'other',
          label: { en: 'Diet and certification', fi: 'Ruokavalio ja sertifiointi' },
          value: {
            en: 'Vegan. Hibiscus and rooibos are Rainforest Alliance certified',
            fi: 'Vegaaninen. Hibiskus ja rooibos ovat Rainforest Alliance -sertifioituja',
          },
        },
      ],
      ingredients: {
        en: 'Hibiscus, rooibos, cranberry and salted toffee flavouring.',
        fi: 'Hibiskus, rooibos, karpalo- ja suolainen kinuskiaromi.',
      },
      sourceUrl: 'https://suomikauppa.fi/products/nordqvist-karpalo-suolakinuski-pussitee',
      fetchedAt: '2026-08-01',
    },
  },
  {
    slug: 'moomin-wild-blueberry-coffee',
    category: 'treats',
    brand: 'Moomin',
    name: {
      en: 'Moomintroll Wild Blueberry coffee 250 g',
      fi: 'Muumipeikko Villimustikka-kahvi 250 g',
    },
    description: {
      en: 'Blueberry flavoured coffee from Bergstrands Kafferosteri, built on peaberries ripened on the Mogiana hills in southeastern Brazil. A peaberry is a coffee cherry that grew one bean instead of two, which the roastery says concentrates the taste. 250 grams.',
      fi: 'Mustikalla maustettua kahvia Bergstrands Kafferosterilta, pohjana Mogianan kukkuloilla Kaakkois-Brasiliassa kypsyneet helmipavut. Helmipapu on kahvimarja, johon on kasvanut kahden pavun sijaan yksi, ja paahtimon mukaan maku tiivistyy siitä. 250 grammaa.',
    },
    priceFrom: 12.9,
    currency: 'EUR',
    priceCheckedAt: '2026-08-01',
    image: 'prod-moomin-wild-blueberry-coffee',
    imageIsPartner: true,
    partnerId: 'moomin',
    shipsExcept: MOOMIN_FOOD_EXCEPT,
    partnerProductUrl: 'https://shop.moomin.com/products/moomintroll-coffee-wild-blueberry-250g',
    details: {
      specs: [
        { key: 'weight', value: { en: '250 g', fi: '250 g' } },
        {
          key: 'origin',
          value: {
            en: 'Beans from the Mogiana hills in southeastern Brazil, roasted by Bergstrands Kafferosteri',
            fi: 'Pavut Mogianan kukkuloilta Kaakkois-Brasiliasta, paahtajana Bergstrands Kafferosteri',
          },
        },
        {
          key: 'other',
          label: { en: 'Bean', fi: 'Papu' },
          value: {
            en: 'Peaberry, a coffee cherry with a single bean instead of two',
            fi: 'Helmipapu, kahvimarja, jossa on kahden pavun sijaan yksi',
          },
        },
        {
          key: 'other',
          label: { en: 'Flavour', fi: 'Maku' },
          value: { en: 'Wild blueberry', fi: 'Villimustikka' },
        },
      ],
      // Kumppani ei julkaise kahville ainesosaluetteloa, joten kenttä puuttuu.
      sourceUrl: 'https://shop.moomin.com/products/moomintroll-coffee-wild-blueberry-250g',
      fetchedAt: '2026-08-01',
    },
  },
  {
    slug: 'moomin-lingonberry-blueberry-dark-chocolate',
    category: 'treats',
    brand: 'Moomin',
    name: {
      en: 'Moomintroll dark chocolate with lingonberry and blueberry 70 g',
      fi: 'Muumipeikko-tummasuklaa, puolukka ja mustikka 70 g',
    },
    description: {
      en: 'Organic 70 per cent dark chocolate from Kalmar Chokladfabrik with freeze dried lingonberries and blueberries, wrapped in Tove Jansson artwork. The cocoa is Criollo and Trinitario from Peru and the bar is made in Sweden.',
      fi: 'Luomua ja 70 prosentin tummaa suklaata Kalmar Chokladfabrikilta, mukana pakastekuivattua puolukkaa ja mustikkaa, kääreessä Tove Janssonin kuvitus. Kaakao on perulaista Criolloa ja Trinitarioa, ja levy valmistetaan Ruotsissa.',
    },
    priceFrom: 8.9,
    currency: 'EUR',
    priceCheckedAt: '2026-08-01',
    image: 'prod-moomin-lingonberry-blueberry-dark-chocolate',
    imageIsPartner: true,
    partnerId: 'moomin',
    shipsExcept: MOOMIN_FOOD_EXCEPT,
    partnerProductUrl:
      'https://shop.moomin.com/products/moomintroll-dark-chocolate-with-lingonberry-blueberry-70g',
    details: {
      specs: [
        { key: 'weight', value: { en: '70 g', fi: '70 g' } },
        {
          key: 'contents',
          value: { en: 'Dark chocolate, 70 % cocoa', fi: 'Tummaa suklaata, kaakaota 70 %' },
        },
        {
          key: 'origin',
          value: {
            en: 'Criollo and Trinitario cocoa beans from Peru, manufactured in Sweden',
            fi: 'Criollo- ja Trinitario-kaakaopapuja Perusta, valmistettu Ruotsissa',
          },
        },
        {
          key: 'other',
          label: { en: 'Diet', fi: 'Ruokavalio' },
          value: { en: 'Organic', fi: 'Luomu' },
        },
      ],
      ingredients: {
        en: 'Cocoa mass*, cane sugar*, cocoa butter*, blueberries*, lingonberries*. *Organic ingredient.',
        fi: 'Kaakaomassa*, ruokosokeri*, kaakaovoi*, mustikka*, puolukka*. *Luomuainesosa.',
      },
      allergens: {
        en: 'May contain traces of almonds, nuts and soya.',
        fi: 'Saattaa sisältää jäämiä manteleista, pähkinöistä ja soijasta.',
      },
      sourceUrl:
        'https://shop.moomin.com/products/moomintroll-dark-chocolate-with-lingonberry-blueberry-70g',
      fetchedAt: '2026-08-01',
    },
  },
  {
    slug: 'moomin-berry-picking-tea',
    category: 'treats',
    brand: 'Moomin',
    name: {
      en: 'Moomin Berry Picking tea, 20 bags',
      fi: 'Muumi Marjaretki-tee, 20 pussia',
    },
    description: {
      en: 'Black tea with vanilla and red berry flavours, blended at the Nurmijärvi factory in Finland and carrying the Finnish Avainlippu mark. The tea is a collaboration with the Finnish Red Cross: 0.40 euro from every pack sold goes to Red Cross work with children, young people and the lonely.',
      fi: 'Mustaa teetä vaniljan ja punaisten marjojen maulla, sekoitettu Nurmijärven tehtaalla ja merkitty Avainlipulla. Tee on yhteistyötä Suomen Punaisen Ristin kanssa: jokaisesta myydystä paketista 0,40 euroa menee Punaisen Ristin työhön lasten, nuorten ja yksinäisten parissa.',
    },
    priceFrom: 5.5,
    currency: 'EUR',
    priceCheckedAt: '2026-08-01',
    image: 'prod-moomin-berry-picking-tea',
    imageIsPartner: true,
    partnerId: 'moomin',
    shipsExcept: MOOMIN_FOOD_EXCEPT,
    partnerProductUrl: 'https://shop.moomin.com/products/moomin-berry-picking-bagged-tea',
    details: {
      specs: [
        { key: 'weight', value: { en: '20 x 1.75 g, 35 g', fi: '20 x 1,75 g, 35 g' } },
        {
          key: 'origin',
          value: {
            en: 'Made at the Nurmijärvi factory in Finland',
            fi: 'Valmistettu Nurmijärven tehtaalla Suomessa',
          },
        },
        {
          key: 'other',
          label: { en: 'Certification', fi: 'Sertifiointi' },
          value: {
            en: 'Rainforest Alliance certified tea, Finnish Avainlippu mark',
            fi: 'Rainforest Alliance -sertifioitua teetä, Avainlippu-merkki',
          },
        },
        {
          key: 'other',
          label: { en: 'Diet', fi: 'Ruokavalio' },
          value: { en: 'Vegan', fi: 'Vegaaninen' },
        },
      ],
      ingredients: {
        en: 'Black tea*, flavour of red berries and vanilla. *Rainforest Alliance Certified.',
        fi: 'Musta tee*, punaisten marjojen ja vaniljan aromi. *Rainforest Alliance -sertifioitu.',
      },
      // Kumppani ei ilmoita allergeeneja tälle tuotteelle, joten kenttä puuttuu.
      sourceUrl: 'https://shop.moomin.com/products/moomin-berry-picking-bagged-tea',
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
            fi: 'Energia 367 kcal / 1559 kJ, proteiini 5 g, hiilihydraatit 54 g, joista sokereita 34 g, kuitu 31 g, rasva 0,8 g, suola 0,01 g',
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
            fi: 'Energia 489 kcal / 2045 kJ, proteiini 13 g, hiilihydraatit 24 g, joista sokereita 14 g, kuitu 28 g, rasva 25 g, suola 0,06 g',
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
  {
    slug: 'arctic-warriors-spruce-sprout-powder',
    category: 'superfoods',
    brand: 'Arctic Warriors',
    name: {
      en: 'Arctic Warriors spruce sprout powder 40 g',
      fi: 'Arctic Warriors kuusenkerkkäjauhe 40 g',
    },
    description: {
      en: 'Freeze dried spruce sprouts, hand picked over a two week window from organic state forests, and only every second year from the same forest. Citrus and resin in a spoonful, 382 mg of vitamin C per 100 g.',
      fi: 'Pakastekuivattua kuusenkerkkää, käsin poimittuna noin kahden viikon aikaikkunassa valtion luomumetsistä ja samasta metsästä vain joka toinen vuosi. Sitrusta ja pihkaa lusikallisessa, C-vitamiinia 382 mg sadassa grammassa.',
    },
    priceFrom: 16.8,
    currency: 'EUR',
    priceCheckedAt: '2026-08-01',
    image: 'prod-arctic-warriors-spruce-sprout-powder',
    imageIsPartner: true,
    partnerId: 'arcticwarriors',
    partnerProductUrl: 'https://arcticwarriors.fi/en/product/spruce-sprout-powder-40-g/',
    featured: true,
    details: {
      specs: [
        { key: 'weight', value: { en: '40 g, gross 0.046 kg', fi: '40 g, brutto 0,046 kg' } },
        { key: 'size', value: { en: '3 x 11 x 17 cm', fi: '3 x 11 x 17 cm' } },
        {
          key: 'contents',
          value: { en: 'Freeze-dried spruce sprout', fi: 'Pakastekuivattua kuusenkerkkää' },
        },
        { key: 'origin', value: { en: 'Finland', fi: 'Suomi' } },
        {
          key: 'other',
          label: { en: 'Dosage', fi: 'Annostus' },
          value: { en: '1 to 3 teaspoons a day', fi: '1-3 teelusikallista päivässä' },
        },
        {
          key: 'other',
          label: { en: 'Nutrition per 100 g', fi: 'Ravintosisältö per 100 g' },
          value: {
            en: 'Energy 1683 kJ / 402 kcal, protein 12.1 g, carbohydrate 77.8 g, fat 4.19 g. Vitamin C 382 mg, vitamin A 970 µg, vitamin K1 332 mg, potassium 1200 mg, phosphorus 350 mg, calcium 130 mg, magnesium 120 mg, zinc 3.6 mg, iron 2 mg',
            fi: 'Energia 1683 kJ / 402 kcal, proteiini 12,1 g, hiilihydraatit 77,8 g, rasva 4,19 g. C-vitamiini 382 mg, A-vitamiini 970 µg, K1-vitamiini 332 mg, kalium 1200 mg, fosfori 350 mg, kalsium 130 mg, magnesium 120 mg, sinkki 3,6 mg, rauta 2 mg',
          },
        },
        {
          key: 'other',
          label: { en: 'Harvesting', fi: 'Keruu' },
          value: {
            en: 'Harvested under licence from organic forests owned by the Finnish state forest administration, every other year per forest',
            fi: 'Kerätty luvanvaraisesti Metsähallituksen luomumetsistä, samasta metsästä joka toinen vuosi',
          },
        },
      ],
      sourceUrl: 'https://arcticwarriors.fi/en/product/spruce-sprout-powder-40-g/',
      fetchedAt: '2026-08-01',
    },
  },
  {
    slug: 'arctic-warriors-nettle-powder',
    category: 'superfoods',
    brand: 'Arctic Warriors',
    name: {
      en: 'Arctic Warriors nettle powder 150 g',
      fi: 'Arctic Warriors nokkosjauhe 150 g',
    },
    description: {
      en: 'Nettle grown on organic farms in Lapland, freeze dried into a powder neutral enough to stir into soup or bread without arguing with the rest of the dish.',
      fi: 'Lapin luomutiloilla kasvatettua nokkosta, pakastekuivattuna jauheeksi, joka on sen verran neutraalia että sen voi sekoittaa keittoon tai leipään ilman että se riitelee muun ruoan kanssa.',
    },
    priceFrom: 52,
    currency: 'EUR',
    priceCheckedAt: '2026-08-01',
    image: 'prod-arctic-warriors-nettle-powder',
    imageIsPartner: true,
    partnerId: 'arcticwarriors',
    partnerProductUrl: 'https://arcticwarriors.fi/en/product/nettle-powder-150-g/',
    details: {
      specs: [
        { key: 'weight', value: { en: '150 g, gross 0.162 kg', fi: '150 g, brutto 0,162 kg' } },
        { key: 'size', value: { en: '4 x 16 x 23 cm', fi: '4 x 16 x 23 cm' } },
        { key: 'contents', value: { en: 'Freeze-dried nettle', fi: 'Pakastekuivattua nokkosta' } },
        {
          key: 'origin',
          value: {
            en: 'Finland, grown on organic farms in Lapland',
            fi: 'Suomi, kasvatettu Lapin luomutiloilla',
          },
        },
        {
          key: 'other',
          label: { en: 'Dosage', fi: 'Annostus' },
          value: { en: '1 to 5 teaspoons a day', fi: '1-5 teelusikallista päivässä' },
        },
        {
          key: 'other',
          label: { en: 'Nutrition per 100 g', fi: 'Ravintosisältö per 100 g' },
          value: {
            en: 'Energy 1484 kJ / 354 kcal, protein 23.6 g, carbohydrate 56 g, fat 3.44 g, salt under 5 mg. Vitamin A 1900 µg',
            fi: 'Energia 1484 kJ / 354 kcal, proteiini 23,6 g, hiilihydraatit 56 g, rasva 3,44 g, suola alle 5 mg. A-vitamiini 1900 µg',
          },
        },
      ],
      sourceUrl: 'https://arcticwarriors.fi/en/product/nettle-powder-150-g/',
      fetchedAt: '2026-08-01',
    },
  },
  {
    slug: 'arctic-warriors-roseroot-elixir',
    category: 'superfoods',
    brand: 'Arctic Warriors',
    name: {
      en: 'Arctic Warriors roseroot elixir 100 ml',
      fi: 'Arctic Warriors ruusujuuri-nokkoseliksiiri 100 ml',
    },
    description: {
      en: 'Roseroot grows on the damp creek banks and rock faces of the Lapland fells, and Arctic Warriors extracts it into vegetable glycerol with nettle. A teaspoon goes into tea, porridge or yoghurt.',
      fi: 'Ruusujuuri kasvaa Lapin tuntureiden kosteilla puronvarsilla ja kalliopinnoilla, ja Arctic Warriors uuttaa sen kasviglyseroliin nokkosen kanssa. Teelusikallinen menee teehen, puuroon tai jogurttiin.',
    },
    priceFrom: 24.9,
    currency: 'EUR',
    priceCheckedAt: '2026-08-01',
    image: 'prod-arctic-warriors-roseroot-elixir',
    imageIsPartner: true,
    partnerId: 'arcticwarriors',
    partnerProductUrl: 'https://arcticwarriors.fi/en/product/roseroot-elixir-100-ml/',
    details: {
      specs: [
        { key: 'volume', value: { en: '100 ml, gross 0.270 kg', fi: '100 ml, brutto 0,270 kg' } },
        { key: 'size', value: { en: '4.5 x 4.5 x 13 cm', fi: '4,5 x 4,5 x 13 cm' } },
        {
          key: 'contents',
          value: {
            en: 'Vegetable glycerol, nettle, roseroot',
            fi: 'Kasviglyseroli, nokkonen, ruusujuuri',
          },
        },
        { key: 'origin', value: { en: 'Finland', fi: 'Suomi' } },
        {
          key: 'other',
          label: { en: 'Dosage', fi: 'Annostus' },
          value: { en: '1 to 2 teaspoons a day', fi: '1-2 teelusikallista päivässä' },
        },
        {
          key: 'other',
          label: { en: 'Diet', fi: 'Ruokavalio' },
          value: {
            en: 'Dairy free, gluten free, vegan. The vegetable glycerol does not affect blood sugar',
            fi: 'Maidoton, gluteeniton, vegaaninen. Kasviglyseroli ei vaikuta verensokeriin',
          },
        },
        {
          key: 'other',
          label: { en: 'Note', fi: 'Huomio' },
          value: {
            en: 'A food supplement does not replace a varied diet. Keep out of reach of children and do not exceed the stated dose',
            fi: 'Ravintolisä ei korvaa monipuolista ruokavaliota. Säilytä lasten ulottumattomissa äläkä ylitä ilmoitettua annosta',
          },
        },
      ],
      sourceUrl: 'https://arcticwarriors.fi/en/product/roseroot-elixir-100-ml/',
      fetchedAt: '2026-08-01',
    },
  },
  {
    slug: 'omega7-sea-buckthorn-olive-oil',
    category: 'superfoods',
    brand: 'Omega7',
    name: {
      en: 'Omega7 SBA24 sea buckthorn and olive oil 150 ml',
      fi: 'Omega7 SBA24 tyrni-oliiviöljy 150 ml',
    },
    description: {
      en: 'Sea buckthorn berry oil and seed oil together with olive oil, developed and made in Finland. The producer standardises the vitamin A and E levels rather than leaving them to the harvest.',
      fi: 'Tyrnin marja- ja siemenöljyä yhdessä oliiviöljyn kanssa, kehitetty ja valmistettu Suomessa. Valmistaja vakioi A- ja E-vitamiinitasot sen sijaan että jättäisi ne sadon varaan.',
    },
    priceFrom: 27.9,
    currency: 'EUR',
    priceCheckedAt: '2026-08-01',
    image: 'prod-omega7-sea-buckthorn-olive-oil',
    imageIsPartner: true,
    partnerId: 'ruohonjuuri',
    partnerProductUrl:
      'https://www.ruohonjuuri.fi/products/omega7-omega7-sba24%C2%AE-tyrni-oliivioljy-150-ml',
    details: {
      specs: [
        { key: 'volume', value: { en: '150 ml', fi: '150 ml' } },
        {
          key: 'contents',
          value: {
            en: 'Sea buckthorn berry oil and seed oil with olive oil, standardised vitamin A and E levels',
            fi: 'Tyrnin marja- ja siemenöljyä oliiviöljyn kanssa, vakioidut A- ja E-vitamiinitasot',
          },
        },
        {
          key: 'origin',
          value: { en: 'Developed and made in Finland', fi: 'Kehitetty ja valmistettu Suomessa' },
        },
        {
          key: 'other',
          label: { en: 'Note', fi: 'Huomio' },
          value: {
            en: 'Follow the dose on the package and do not exceed it. A food supplement does not replace a varied diet. Keep out of reach of children',
            fi: 'Noudata pakkauksen annostusta äläkä ylitä sitä. Ravintolisä ei korvaa monipuolista ruokavaliota. Säilytä lasten ulottumattomissa',
          },
        },
      ],
      sourceUrl:
        'https://www.ruohonjuuri.fi/products/omega7-omega7-sba24%C2%AE-tyrni-oliivioljy-150-ml',
      fetchedAt: '2026-08-01',
    },
  },
  {
    slug: 'kaino-spruce-sprout-sparkling',
    category: 'superfoods',
    brand: 'KAINO Drinks',
    name: {
      en: 'KAINO Drinks spruce sprout sparkling drink 0,2 l',
      fi: 'KAINO Drinks kuusenkerkkä-kuohujuoma 0,2 l',
    },
    description: {
      en: 'A non-alcoholic sparkling drink made from Finnish organic ingredients, so a toast in a cabin does not have to involve alcohol. Serve it cold, or the spruce aroma disappears under the bubbles.',
      fi: 'Alkoholiton kuohujuoma suomalaisista luomuraaka-aineista, jotta mökillä voi nostaa maljan ilman alkoholia. Tarjoile kylmänä, muuten kuusenkerkän aromi jää kuplien alle.',
    },
    priceFrom: 5.9,
    currency: 'EUR',
    priceCheckedAt: '2026-08-01',
    image: 'prod-kaino-spruce-sprout-sparkling',
    imageIsPartner: true,
    partnerId: 'ruohonjuuri',
    partnerProductUrl:
      'https://www.ruohonjuuri.fi/products/kaino-drinks-kuusenkerkka-kuohujuoma-02-l',
    details: {
      specs: [
        { key: 'volume', value: { en: '0.2 l', fi: '0,2 l' } },
        {
          key: 'contents',
          value: {
            en: 'Made from 100 % Finnish organic ingredients. Alcohol free',
            fi: 'Valmistettu 100 % suomalaisista luomuraaka-aineista. Alkoholiton',
          },
        },
        { key: 'origin', value: { en: 'Finland', fi: 'Suomi' } },
        {
          key: 'other',
          label: { en: 'Nutrition per 100 ml', fi: 'Ravintosisältö per 100 ml' },
          value: {
            en: 'Energy 122.65 kJ / 29.3 kcal, fat under 0.1 g of which saturates under 0.1 g, carbohydrate 6.9 g of which sugars 6.9 g, protein under 0.1 g, salt under 0.1 g',
            fi: 'Energia 122,65 kJ / 29,3 kcal, rasva alle 0,1 g, josta tyydyttynyttä alle 0,1 g, hiilihydraatit 6,9 g, joista sokereita 6,9 g, proteiini alle 0,1 g, suola alle 0,1 g',
          },
        },
        {
          key: 'other',
          label: { en: 'Diet and certification', fi: 'Ruokavalio ja sertifiointi' },
          value: {
            en: 'Vegan. EU organic leaf',
            fi: 'Vegaaninen. EU:n lehtimerkki (luomu)',
          },
        },
      ],
      sourceUrl: 'https://www.ruohonjuuri.fi/products/kaino-drinks-kuusenkerkka-kuohujuoma-02-l',
      fetchedAt: '2026-08-01',
    },
  },

  // ───────────────────────────────────────────────────────────────────────
  // Erä 6.8.2026 — SUPERFOODIT (Vesa: "tänne pitää saada enemmän täytettä").
  // Kuusi tuotetta Ruohonjuuresta: metsäsienet ja pakuri kolmessa muodossa,
  // pohjoismainen marjajauhesekoitus ja havupuu-uute. Hinnat, kuvat ja
  // kuvaustekstit kaupan JSON-LD:stä 6.8.2026.
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: 'foodin-six-mushroom-blend',
    category: 'superfoods',
    brand: 'Foodin',
    // 🔴 Ruohonjuuri korvasi 100 g:n purkin 40 g:n purkilla uudella URLilla:
    // vanha ...-siitake-maitake-cordyceps-100-g palautti 404:n 15.8.2026, ja
    // kaupan haku tuntee vain 40 g:n version. Hinta 21,90 € luettu uuden
    // sivun JSON-LD:stä (InStock) 15.8.2026.
    name: { en: 'Foodin six mushroom blend 40 g', fi: 'Foodin Kuuden sienen sekoitus 40 g' },
    description: {
      en: 'Chaga, reishi, lion’s mane, cordyceps, shiitake and maitake in one jar, ground for coffee or smoothies. One jar covers the whole functional mushroom shelf.',
      fi: 'Pakuri, reishi, siiliorakas, cordyceps, siitake ja maitake samassa purkissa, jauhettuna kahviin tai smoothieen. Yksi purkki kattaa koko sienihyllyn.',
    },
    priceFrom: 21.9,
    currency: 'EUR',
    priceCheckedAt: '2026-08-15',
    image: 'prod-foodin-six-mushroom-blend',
    imageIsPartner: true,
    partnerId: 'ruohonjuuri',
    partnerProductUrl: 'https://www.ruohonjuuri.fi/products/foodin-kuuden-sienen-sekoitus-chaga-reishi-lions-mane-shiitake-maitake-cordyceps-40-g',
    details: {
      specs: [
        { key: 'size', value: { en: '40 g', fi: '40 g' } },
        { key: 'contents', value: { en: 'Chaga, reishi, lion’s mane, cordyceps, shiitake, maitake', fi: 'Pakuri, reishi, siiliorakas, cordyceps, siitake, maitake' } },
      ],
      sourceUrl: 'https://www.ruohonjuuri.fi/products/foodin-kuuden-sienen-sekoitus-chaga-reishi-lions-mane-shiitake-maitake-cordyceps-40-g',
      fetchedAt: '2026-08-15',
    },
  },
  {
    slug: 'foodin-nordic-berry-powder',
    category: 'superfoods',
    brand: 'Foodin',
    name: { en: 'Foodin Nordic berries powder mix 120 g', fi: 'Foodin Pohjolan marjat -marjajauhesekoitus 120 g' },
    description: {
      en: 'A Finnish blend of northern berries in one powder, for porridge and yoghurt. The lightest way to carry a summer of Nordic berries home.',
      fi: 'Kotimainen sekoitus pohjoisen marjoja yhtenä jauheena puuroon ja jogurttiin. Kevyin tapa viedä pohjolan marjakesä kotiin.',
    },
    priceFrom: 15.95,
    currency: 'EUR',
    priceCheckedAt: '2026-08-06',
    image: 'prod-foodin-nordic-berry-powder',
    imageIsPartner: true,
    partnerId: 'ruohonjuuri',
    partnerProductUrl: 'https://www.ruohonjuuri.fi/products/foodin-pohjolan-marjat-kotimainen-marjajauhesekoitus-120-g',
    details: {
      specs: [
        { key: 'size', value: { en: '120 g', fi: '120 g' } },
        { key: 'origin', value: { en: 'Made in Finland', fi: 'Valmistettu Suomessa' } },
      ],
      sourceUrl: 'https://www.ruohonjuuri.fi/products/foodin-pohjolan-marjat-kotimainen-marjajauhesekoitus-120-g',
      fetchedAt: '2026-08-06',
    },
  },
  {
    slug: 'foodin-chaga-tincture',
    category: 'superfoods',
    brand: 'Foodin',
    name: { en: 'Foodin chaga tincture 50 ml', fi: 'Foodin Pakuri-tinktuura 50 ml' },
    description: {
      en: 'Finnish chaga as drops instead of powder: a 50 ml bottle that needs no brewing. The travel size of the whole chaga idea.',
      fi: 'Kotimainen pakuri tippoina jauheen sijaan: 50 ml pullo, joka ei vaadi hauduttamista. Koko pakuriajatuksen matkakoko.',
    },
    priceFrom: 19.5,
    currency: 'EUR',
    priceCheckedAt: '2026-08-06',
    image: 'prod-foodin-chaga-tincture',
    imageIsPartner: true,
    partnerId: 'ruohonjuuri',
    partnerProductUrl: 'https://www.ruohonjuuri.fi/products/foodin-pakuri-tinktuura-kotimainen-50-ml',
    details: {
      specs: [
        { key: 'volume', value: { en: '50 ml', fi: '50 ml' } },
        { key: 'origin', value: { en: 'Finnish chaga', fi: 'Kotimainen pakuri' } },
      ],
      sourceUrl: 'https://www.ruohonjuuri.fi/products/foodin-pakuri-tinktuura-kotimainen-50-ml',
      fetchedAt: '2026-08-06',
    },
  },
  {
    slug: 'kaavi-chaga-chunks',
    category: 'superfoods',
    brand: 'Kaavi Porcini',
    name: { en: 'Kaavi Porcini chaga chunks 100 g', fi: 'Kaavi Porcini Pakurikääpärouhe 100 g' },
    description: {
      en: 'Coarse chunks of Finnish birch chaga for slow brewing, the way it was drunk here long before anyone said superfood. One bag brews many pots.',
      fi: 'Karkeaa suomalaista koivunpakuria hitaaseen hauduttamiseen, niin kuin sitä juotiin kauan ennen sanaa superfood. Yksi pussi hautuu moneen pannulliseen.',
    },
    priceFrom: 21.9,
    currency: 'EUR',
    priceCheckedAt: '2026-08-06',
    image: 'prod-kaavi-chaga-chunks',
    imageIsPartner: true,
    partnerId: 'ruohonjuuri',
    partnerProductUrl: 'https://www.ruohonjuuri.fi/products/kaavi-porcini-pakurikaaparouhe-100-g',
    details: {
      specs: [
        { key: 'size', value: { en: '100 g', fi: '100 g' } },
        { key: 'other', label: { en: 'Use', fi: 'Käyttö' }, value: { en: 'Simmer as a slow-brewed tea', fi: 'Haudutetaan teeksi' } },
      ],
      sourceUrl: 'https://www.ruohonjuuri.fi/products/kaavi-porcini-pakurikaaparouhe-100-g',
      fetchedAt: '2026-08-06',
    },
  },
  {
    slug: 'puhdistamo-instant-chaga',
    category: 'superfoods',
    brand: 'Puhdistamo',
    name: { en: 'Puhdistamo instant chaga extract powder 28 g', fi: 'Puhdistamo Pakuriuutejauhe, instant-pakuri 28 g' },
    description: {
      en: 'Chaga that dissolves straight into hot water, no simmering. The 28 gram jar fits any luggage and survives the trip better than a bag of chunks.',
      fi: 'Pakuri, joka liukenee suoraan kuumaan veteen ilman hauduttamista. 28 gramman purkki mahtuu mihin tahansa matkatavaraan.',
    },
    priceFrom: 19.46,
    currency: 'EUR',
    priceCheckedAt: '2026-08-06',
    image: 'prod-puhdistamo-instant-chaga',
    imageIsPartner: true,
    partnerId: 'ruohonjuuri',
    partnerProductUrl: 'https://www.ruohonjuuri.fi/products/puhdistamo-pakuriuutejauhe-instant-pakuri-28-g',
    details: {
      specs: [
        { key: 'size', value: { en: '28 g', fi: '28 g' } },
      ],
      sourceUrl: 'https://www.ruohonjuuri.fi/products/puhdistamo-pakuriuutejauhe-instant-pakuri-28-g',
      fetchedAt: '2026-08-06',
    },
  },
  {
    slug: 'puhdistamo-conifer-extract',
    category: 'superfoods',
    brand: 'Puhdistamo',
    name: { en: 'Puhdistamo conifer extract 50 ml', fi: 'Puhdistamo Havupuu-uute 50 ml' },
    description: {
      en: 'An extract drawn from Finnish conifers, taken as drops. The forest smell of a Lapland hike in a bottle small enough for a coat pocket.',
      fi: 'Suomalaisista havupuista uutettu tippoina otettava uute. Lapin metsäretken tuoksu pullossa, joka mahtuu takin taskuun.',
    },
    priceFrom: 14.99,
    currency: 'EUR',
    priceCheckedAt: '2026-08-06',
    image: 'prod-puhdistamo-conifer-extract',
    imageIsPartner: true,
    partnerId: 'ruohonjuuri',
    partnerProductUrl: 'https://www.ruohonjuuri.fi/products/puhdistamo-havupuu-uute-50-ml',
    details: {
      specs: [
        { key: 'volume', value: { en: '50 ml', fi: '50 ml' } },
      ],
      sourceUrl: 'https://www.ruohonjuuri.fi/products/puhdistamo-havupuu-uute-50-ml',
      fetchedAt: '2026-08-06',
    },
  },

  // ───────────────────────────────────────────────────────────────────────
  // Erä 2.8.2026 osa 2 — MUUMIDESIGN JA SAUNA.
  //
  // Sauna on suomalaisin lahja mitä on, eikä sitä ollut kaupassa lainkaan.
  // Rento tekee saunatuotteet Suomessa, ja saunahunaja, terva-saippua,
  // pellavapesin ja saunatyyny ovat esineitä joita matkailija näkee
  // hotellinsa löylyhuoneessa ja haluaa mukaansa.
  //
  // 🔴 Viisi tuotetta jäi pois pelkän kuvan takia: kumppanin ainoa tuotekuva
  // oli 162 × 480, 320 × 242 tai vastaava, eikä sitä saa 800 pikselin
  // korttikuvaksi venyttämättä. Sama sääntö kuin Pesosen hunajalla 1.8.
  // Puuttuva tuote on parempi kuin sumea kortti.
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: 'arabia-moomin-mug-snufkin',
    category: 'design',
    brand: 'Arabia',
    name: { en: 'Arabia Moomin mug, Snufkin', fi: 'Arabia Muumimuki, Nuuskamuikkunen' },
    description: {
      en: 'Arabia has printed Tove Jansson’s drawings on these mugs since 1990, and collectors track the retired ones by year. Snufkin is the one who leaves in autumn and comes back in spring.',
      fi: 'Arabia on painanut Tove Janssonin piirroksia näihin mukeihin vuodesta 1990, ja keräilijät seuraavat poistuneita vuosiluvun mukaan. Nuuskamuikkunen on se joka lähtee syksyllä ja palaa keväällä.',
    },
    priceFrom: 24.97,
    currency: 'EUR',
    priceCheckedAt: '2026-08-02',
    image: 'prod-arabia-moomin-mug-snufkin',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/arabia-muumimuki-nuuskamuikkunen',
    details: {
      specs: [
        { key: 'volume', value: { en: '0.3 l', fi: '0,3 l' } },
        {
          key: 'other',
          label: { en: 'Artwork', fi: 'Kuvitus' },
          value: { en: 'Tove Jansson', fi: 'Tove Jansson' },
        },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/arabia-muumimuki-nuuskamuikkunen',
      fetchedAt: '2026-08-02',
    },
  },
  {
    slug: 'arabia-moomin-mug-friendship',
    featured: true,
    category: 'design',
    brand: 'Arabia',
    name: { en: 'Arabia Moomin mug, Friendship', fi: 'Arabia Muumimuki, Ystävyys' },
    description: {
      en: 'The mug shows Ninny, the invisible child who is afraid of the dark and slowly becomes visible again once someone is kind to her. A quieter choice than the well known characters.',
      fi: 'Mukissa on Nyyti, näkymätön lapsi, joka pelkää pimeää ja tulee vähitellen taas näkyväksi, kun joku on hänelle ystävällinen. Hillitympi valinta kuin tunnetuimmat hahmot.',
    },
    priceFrom: 24.97,
    currency: 'EUR',
    priceCheckedAt: '2026-08-02',
    image: 'prod-arabia-moomin-mug-friendship',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/arabia-muumi-muki-03l-ystavyys',
    details: {
      specs: [
        { key: 'volume', value: { en: '0.3 l', fi: '0,3 l' } },
        {
          key: 'other',
          label: { en: 'Artwork', fi: 'Kuvitus' },
          value: { en: 'Tove Jansson', fi: 'Tove Jansson' },
        },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/arabia-muumi-muki-03l-ystavyys',
      fetchedAt: '2026-08-02',
    },
  },
  {
    slug: 'arabia-moomin-figurine-moomintroll',
    category: 'design',
    brand: 'Arabia',
    name: {
      en: 'Arabia Moomin mini figurine, Moomintroll',
      fi: 'Arabia Muumi-minifiguriini, Muumipeikko',
    },
    description: {
      en: 'A hand made ceramic figurine drawn up by Tuulikki Pietilä in the 1990s and sold in its own box. Small enough that it travels home in a coat pocket.',
      fi: 'Käsin valmistettu keraaminen figuriini, jonka Tuulikki Pietilä suunnitteli 1990-luvulla, myydään omassa rasiassaan. Niin pieni että se matkustaa kotiin takin taskussa.',
    },
    priceFrom: 31.25,
    currency: 'EUR',
    priceCheckedAt: '2026-08-02',
    image: 'prod-arabia-moomin-figurine-moomintroll',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/arabia-muumi-minifiguriini-muumipeikko',
    details: {
      specs: [
        {
          key: 'other',
          label: { en: 'Designer', fi: 'Suunnittelija' },
          value: { en: 'Tuulikki Pietilä, 1990s', fi: 'Tuulikki Pietilä, 1990-luku' },
        },
        {
          key: 'other',
          label: { en: 'Made', fi: 'Valmistus' },
          value: { en: 'Hand made ceramic, sold in its own box', fi: 'Käsin valmistettu keramiikka, oma rasia' },
        },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/arabia-muumi-minifiguriini-muumipeikko',
      fetchedAt: '2026-08-02',
    },
  },
  {
    slug: 'fiskars-moominpappa-scissors',
    category: 'design',
    brand: 'Fiskars',
    name: { en: 'Fiskars Moominpappa universal scissors', fi: 'Fiskars Muumipappa-yleissakset' },
    description: {
      en: 'Fiskars orange handled scissors are in more Finnish kitchen drawers than any other tool. This pair is 21 cm in stainless steel with Moominpappa on the handle.',
      fi: 'Fiskarsin oranssikahvaiset sakset ovat useammassa suomalaisessa keittiönlaatikossa kuin mikään muu työkalu. Tämä pari on 21 cm ruostumatonta terästä, kahvassa Muumipappa.',
    },
    priceFrom: 37.52,
    currency: 'EUR',
    priceCheckedAt: '2026-08-02',
    image: 'prod-fiskars-moominpappa-scissors',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/fiskars-muumipappa-yleissakset',
    details: {
      specs: [
        { key: 'size', value: { en: '21 cm', fi: '21 cm' } },
        { key: 'material', value: { en: 'Stainless steel', fi: 'Ruostumaton teräs' } },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/fiskars-muumipappa-yleissakset',
      fetchedAt: '2026-08-02',
    },
  },
  {
    slug: 'rento-tar-sauna-soap',
    category: 'handicrafts',
    brand: 'Rento',
    name: { en: 'Rento tar sauna soap 150 g', fi: 'Rento Terva-saunasaippua 150 g' },
    description: {
      en: 'Pine tar is a Finnish smell before it is a Finnish taste, and it belongs in a sauna more than anywhere else. Vegetable oil based, hung on a jute cord so it dries between uses.',
      fi: 'Terva on suomalainen tuoksu ennen kuin se on suomalainen maku, ja saunaan se kuuluu enemmän kuin mihinkään muualle. Kasviöljypohjainen, ripustettu juuttinarusta niin että se kuivuu käyttöjen välillä.',
    },
    priceFrom: 8.66,
    currency: 'EUR',
    priceCheckedAt: '2026-08-02',
    image: 'prod-rento-tar-sauna-soap',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/rento-terva-saunasaippua-150-g',
    details: {
      specs: [
        { key: 'size', value: { en: '150 g', fi: '150 g' } },
        { key: 'material', value: { en: 'Vegetable oil based soap', fi: 'Kasviöljypohjainen saippua' } },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/rento-terva-saunasaippua-150-g',
      fetchedAt: '2026-08-02',
    },
  },
  {
    slug: 'rento-birch-sauna-honey',
    category: 'handicrafts',
    brand: 'Rento',
    name: { en: 'Rento birch sauna honey 150 ml', fi: 'Rento Koivu-saunahunaja 150 ml' },
    description: {
      en: 'Spread it on clean skin, let it sit in the soft heat, rinse warm. Sauna honey is the part of the Finnish sauna ritual that visitors never think to bring home.',
      fi: 'Levitä puhtaalle iholle, anna imeytyä pehmeässä lämmössä, huuhtele lämpimällä. Saunahunaja on se osa suomalaista saunarituaalia, jota vieras ei tule ajatelleeksi ottaa mukaan.',
    },
    priceFrom: 12.42,
    currency: 'EUR',
    priceCheckedAt: '2026-08-02',
    image: 'prod-rento-birch-sauna-honey',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/rento-koivu-saunahunaja-150-ml',
    details: {
      specs: [{ key: 'volume', value: { en: '150 ml', fi: '150 ml' } }],
      sourceUrl: 'https://suomikauppa.fi/products/rento-koivu-saunahunaja-150-ml',
      fetchedAt: '2026-08-02',
    },
  },
  {
    slug: 'rento-blueberry-sauna-honey',
    category: 'handicrafts',
    brand: 'Rento',
    name: { en: 'Rento blueberry sauna honey 150 ml', fi: 'Rento Mustikka-saunahunaja 150 ml' },
    description: {
      en: 'The exfoliating version, scented with blueberry. Same use as the birch one: on clean skin, let the heat do the work, rinse warm.',
      fi: 'Kuoriva versio, mustikan tuoksulla. Sama käyttö kuin koivussa: puhtaalle iholle, lämpö tekee työn, huuhtele lämpimällä.',
    },
    priceFrom: 14.43,
    currency: 'EUR',
    priceCheckedAt: '2026-08-02',
    image: 'prod-rento-blueberry-sauna-honey',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/rento-saunahunaja-kuoriva-150-ml-mustikka',
    details: {
      specs: [{ key: 'volume', value: { en: '150 ml', fi: '150 ml' } }],
      sourceUrl: 'https://suomikauppa.fi/products/rento-saunahunaja-kuoriva-150-ml-mustikka',
      fetchedAt: '2026-08-02',
    },
  },
  {
    slug: 'rento-sauna-pillow',
    category: 'handicrafts',
    brand: 'Rento',
    name: { en: 'Rento Pino sauna pillow 50 x 22 cm', fi: 'Rento Pino -saunatyyny 50 x 22 cm' },
    description: {
      en: 'A jacquard woven pillow for the head and neck on the sauna bench. It keeps its shape, which is the whole difference between a sauna pillow and a folded towel.',
      fi: 'Jacquard-kudottu tyyny pään ja niskan tueksi lauteille. Se säilyttää muotonsa, ja siinä on koko ero saunatyynyn ja taitellun pyyhkeen välillä.',
    },
    priceFrom: 19.38,
    currency: 'EUR',
    priceCheckedAt: '2026-08-02',
    image: 'prod-rento-sauna-pillow',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/rento-pino-saunatyyny-50x22-cm-musta',
    details: {
      specs: [
        { key: 'size', value: { en: '50 x 22 cm', fi: '50 x 22 cm' } },
        { key: 'color', value: { en: 'Black', fi: 'Musta' } },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/rento-pino-saunatyyny-50x22-cm-musta',
      fetchedAt: '2026-08-02',
    },
  },
  {
    slug: 'rento-linen-back-scrubber',
    category: 'handicrafts',
    brand: 'Rento',
    name: {
      en: 'Rento linen terry back scrubber 14 x 70 cm',
      fi: 'Rento pellavafrotee-selänpesin 14 x 70 cm',
    },
    description: {
      en: 'Linen terry, long enough to reach across your own back. Skin softens in the heat first and is washed after, which is the order Finns follow without thinking about it.',
      fi: 'Pellavafroteeta, riittävän pitkä yltämään oman selän yli. Iho pehmenee ensin löylyssä ja pestään vasta sitten, ja tuota järjestystä suomalainen noudattaa ajattelematta.',
    },
    priceFrom: 29.99,
    currency: 'EUR',
    priceCheckedAt: '2026-08-02',
    image: 'prod-rento-linen-back-scrubber',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl:
      'https://suomikauppa.fi/products/rento-selanpesin-pellavafrotee-14x70cm-musta-pellava',
    details: {
      specs: [
        { key: 'size', value: { en: '14 x 70 cm', fi: '14 x 70 cm' } },
        { key: 'material', value: { en: 'Linen terry', fi: 'Pellavafrotee' } },
      ],
      sourceUrl:
        'https://suomikauppa.fi/products/rento-selanpesin-pellavafrotee-14x70cm-musta-pellava',
      fetchedAt: '2026-08-02',
    },
  },
  {
    slug: 'rento-linen-wash-mitt',
    category: 'handicrafts',
    brand: 'Rento',
    name: {
      en: 'Rento linen terry wash mitt 14 x 24 cm',
      fi: 'Rento pellavafrotee-pesukinnas 14 x 24 cm',
    },
    description: {
      en: 'The same linen terry as the back scrubber, in a mitt with a doubled palm. The cheapest thing in this section and the one people actually use every week.',
      fi: 'Sama pellavafrotee kuin selänpesimessä, kintaana ja kaksinkertaisella kämmenpuolella. Tämän osion halvin tuote ja se jota oikeasti käytetään joka viikko.',
    },
    priceFrom: 21.96,
    currency: 'EUR',
    priceCheckedAt: '2026-08-02',
    image: 'prod-rento-linen-wash-mitt',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl:
      'https://suomikauppa.fi/products/rento-pesukinnas-pellavafrotee-14x24cm-musta-pellava',
    details: {
      specs: [
        { key: 'size', value: { en: '14 x 24 cm', fi: '14 x 24 cm' } },
        { key: 'material', value: { en: 'Linen terry, doubled palm', fi: 'Pellavafrotee, kaksinkertainen kämmenpuoli' } },
      ],
      sourceUrl:
        'https://suomikauppa.fi/products/rento-pesukinnas-pellavafrotee-14x24cm-musta-pellava',
      fetchedAt: '2026-08-02',
    },
  },
  {
    slug: 'emendo-sauna-scents',
    category: 'handicrafts',
    brand: 'Emendo',
    name: {
      en: 'Emendo sauna scents: salmiakki, pine resin, sisu, 3 x 10 ml',
      fi: 'Emendo saunatuoksut: salmiakki, mäntypihka ja sisu, 3 x 10 ml',
    },
    description: {
      en: 'Three scents on a wooden stand, and one of them is salmiakki. Few things are more Finnish than salmiakki and sauna, and this set puts them in the same ladle.',
      fi: 'Kolme tuoksua puutelineessä, ja yksi niistä on salmiakki. Harva asia on suomalaisempi kuin salmiakki ja sauna, ja tämä setti laittaa ne samaan kauhaan.',
    },
    priceFrom: 16.21,
    currency: 'EUR',
    priceCheckedAt: '2026-08-02',
    image: 'prod-emendo-sauna-scents',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl:
      'https://suomikauppa.fi/products/emendo-saunatuoksut-salmiakki-mantypihka-ja-sisu-3x10ml-puutelineella',
    details: {
      specs: [
        { key: 'contents', value: { en: '3 x 10 ml on a wooden stand', fi: '3 x 10 ml puutelineessä' } },
        {
          key: 'other',
          label: { en: 'Scents', fi: 'Tuoksut' },
          value: { en: 'Salmiakki, pine resin, sisu', fi: 'Salmiakki, mäntypihka, sisu' },
        },
      ],
      sourceUrl:
        'https://suomikauppa.fi/products/emendo-saunatuoksut-salmiakki-mantypihka-ja-sisu-3x10ml-puutelineella',
      fetchedAt: '2026-08-02',
    },
  },
  {
    slug: 'aurora-mini-kuksa',
    category: 'handicrafts',
    brand: 'Aurora Borealis',
    name: { en: 'Mini kuksa with leather loop, 4 cm', fi: 'Minikuksa nahkalenkillä, 4 cm' },
    description: {
      en: 'A 4 cm kuksa meant for a shot rather than coffee, with a leather loop for a belt. The smallest and cheapest way to own the shape.',
      fi: 'Neljän sentin kuksa, tarkoitettu snapsille eikä kahville, nahkalenkki vyötä varten. Pienin ja halvin tapa omistaa se muoto.',
    },
    priceFrom: 7.1,
    currency: 'EUR',
    priceCheckedAt: '2026-08-02',
    image: 'prod-aurora-mini-kuksa',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/aurorab-minikuksa-nahkalenkilla',
    details: {
      specs: [{ key: 'size', value: { en: 'Diameter 4 cm', fi: 'Halkaisija 4 cm' } }],
      sourceUrl: 'https://suomikauppa.fi/products/aurorab-minikuksa-nahkalenkilla',
      fetchedAt: '2026-08-02',
    },
  },

  // ───────────────────────────────────────────────────────────────────────
  // Erä 2.8.2026 — SUOMALAISET MAKEISKLASSIKOT (Vesa: "herkkuja on todella
  // vähän"). Yhdeksän tuotetta, jotka suomalainen tunnistaa nimeltä ja jotka
  // matkailija näkee kaupan hyllyssä: salmiakki kolmena eri muotona, Fazerin
  // suklaalevyt, tervalakritsi ja Jaffa.
  //
  // Kaikki tulevat Suomikaupan kautta, joka on monimerkkijälleenmyyjä eikä
  // yksittäinen brändi: valmistajia on viisi (Fazer, Halva, Leijona, Sisu ja
  // Malaco). Siksi kategoria ei muutu yhden brändin luetteloksi, vaikka
  // yhden kumppanin osuus kasvaa.
  //
  // 🔴 Suomikauppa on `network: 'direct'`, eli näistä EI tule komissiota.
  // Ne ovat mukana koska tuliaiskauppa ilman suomalaisia makeisia ei ole
  // uskottava. Herkut-kategoria tarvitsee oman affiliate-kumppanin.
  //
  // Hinnat, kuvat ja kuvaustekstit luettu kaupan JSON-LD:stä 2.8.2026.
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: 'fazer-super-salmiakki',
    category: 'treats',
    brand: 'Fazer',
    name: { en: 'Fazer Super Salmiakki pastilles 80 g', fi: 'Fazer Super Salmiakki -pastillit 80 g' },
    description: {
      en: 'The hardest of the salmiakki classics, sold in the same tin-shaped box since the 1970s. Start a visitor on one of these and you will know within ten seconds which camp they belong to.',
      fi: 'Kovin salmiakkiklassikoista, samannäköisessä rasiassa 1970-luvulta asti. Anna vieraalle yksi, niin tiedät kymmenessä sekunnissa kumpaan leiriin hän kuuluu.',
    },
    priceFrom: 2.45,
    currency: 'EUR',
    priceCheckedAt: '2026-08-02',
    image: 'prod-fazer-super-salmiakki',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/fazer-super-salmiakki-80g',
    details: {
      specs: [{ key: 'size', value: { en: '80 g', fi: '80 g' } }],
      sourceUrl: 'https://suomikauppa.fi/products/fazer-super-salmiakki-80g',
      fetchedAt: '2026-08-02',
    },
  },
  {
    slug: 'fazer-pantteri-salmiakki',
    category: 'treats',
    brand: 'Fazer',
    name: { en: 'Fazer Pantteri salmiakki sweets 210 g', fi: 'Fazer Pantteri -salmiakkikarkit 210 g' },
    description: {
      en: 'Soft menthol salmiakki that has been made for over fifty years. Milder than the pastilles, so this is the bag to bring to people who have never tried salmiakki.',
      fi: 'Pehmeää mentolisalmiakkia, jota on valmistettu yli viisikymmentä vuotta. Pastilleja miedompi, joten tämä on se pussi, jonka vie salmiakkia ennen maistamattomille.',
    },
    priceFrom: 4.87,
    currency: 'EUR',
    priceCheckedAt: '2026-08-02',
    image: 'prod-fazer-pantteri-salmiakki',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/fazer-pantteri-salmiakki-karkkipussi-210g',
    details: {
      specs: [{ key: 'size', value: { en: '210 g', fi: '210 g' } }],
      sourceUrl: 'https://suomikauppa.fi/products/fazer-pantteri-salmiakki-karkkipussi-210g',
      fetchedAt: '2026-08-02',
    },
  },
  {
    slug: 'halva-salmiakkiruutu',
    category: 'treats',
    brand: 'Halva',
    name: { en: 'Halva Salmiakkiruutu 170 g', fi: 'Halva Salmiakkiruutu 170 g' },
    description: {
      en: 'Halva has made this squared salmiakki since 1960 in Pitäjänmäki in Helsinki. Chewier than the Fazer versions and the one Finns argue is the original.',
      fi: 'Halva on tehnyt tätä ruutusalmiakkia vuodesta 1960 Pitäjänmäellä Helsingissä. Sitkeämpää kuin Fazerin versiot, ja se jota suomalaiset pitävät alkuperäisenä.',
    },
    priceFrom: 5.55,
    currency: 'EUR',
    priceCheckedAt: '2026-08-02',
    image: 'prod-halva-salmiakkiruutu',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/halva-salmiakkiruutu-170g',
    details: {
      specs: [
        { key: 'size', value: { en: '170 g', fi: '170 g' } },
        {
          key: 'origin',
          value: {
            en: 'Made in Pitäjänmäki, Helsinki, since 1960',
            fi: 'Valmistettu Pitäjänmäellä Helsingissä vuodesta 1960',
          },
        },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/halva-salmiakkiruutu-170g',
      fetchedAt: '2026-08-02',
    },
  },
  {
    slug: 'sisu-xylitol-salmiakki',
    category: 'treats',
    brand: 'Sisu',
    name: { en: 'Sisu Xylitol salmiakki pastilles 36 g', fi: 'Sisu Xylitol -salmiakkipastillit 36 g' },
    description: {
      en: 'Salmiakki sweetened with xylitol and carrying the Finnish Dental Association mark. The tin fits a coat pocket, which is why these end up in every Finnish car.',
      fi: 'Ksylitolilla makeutettua salmiakkia, jolla on Hammaslääkäriliiton tunnus. Rasia mahtuu takin taskuun, ja siksi näitä on jokaisessa suomalaisessa autossa.',
    },
    priceFrom: 2.32,
    currency: 'EUR',
    priceCheckedAt: '2026-08-02',
    image: 'prod-sisu-xylitol-salmiakki',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/sisu-xylitol-salmiakki-pastilleja-36g',
    details: {
      specs: [
        { key: 'size', value: { en: '36 g', fi: '36 g' } },
        {
          key: 'other',
          label: { en: 'Sweetener', fi: 'Makeutus' },
          value: {
            en: 'Xylitol. Carries the Finnish Dental Association mark',
            fi: 'Ksylitoli. Suomen Hammaslääkäriliiton tunnus',
          },
        },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/sisu-xylitol-salmiakki-pastilleja-36g',
      fetchedAt: '2026-08-02',
    },
  },
  {
    slug: 'leijona-tar-liquorice',
    category: 'treats',
    brand: 'Leijona',
    name: { en: 'Leijona tar liquorice pastilles 32 g', fi: 'Leijona Tervalakritsi -pastillit 32 g' },
    description: {
      en: 'Liquorice flavoured with pine tar, made since 1933. Tar is a Finnish taste that goes into sweets, sauna soap and even ice cream, and this is the cheapest way to try it.',
      fi: 'Tervalla maustettua lakritsia, valmistettu vuodesta 1933. Terva on suomalainen maku, jota laitetaan makeisiin, saippuaan ja jopa jäätelöön, ja tämä on halvin tapa kokeilla sitä.',
    },
    priceFrom: 1.97,
    currency: 'EUR',
    priceCheckedAt: '2026-08-02',
    image: 'prod-leijona-tar-liquorice',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/tervaleijona-lakritsi-32g',
    details: {
      specs: [{ key: 'size', value: { en: '32 g', fi: '32 g' } }],
      sourceUrl: 'https://suomikauppa.fi/products/tervaleijona-lakritsi-32g',
      fetchedAt: '2026-08-02',
    },
  },
  {
    slug: 'fazer-hazelnut-chocolate',
    category: 'treats',
    brand: 'Fazer',
    name: {
      en: 'Karl Fazer whole hazelnut milk chocolate 200 g',
      fi: 'Karl Fazer kokonainen hasselpähkinä -suklaalevy 200 g',
    },
    description: {
      en: 'The blue bar with whole hazelnuts set in milk chocolate. Fazer has used the same blue wrapper since 1922, which is why it is the one Finns bring abroad.',
      fi: 'Sininen levy, jossa on kokonaisia hasselpähkinöitä maitosuklaassa. Fazer on käyttänyt samaa sinistä käärettä vuodesta 1922, ja siksi juuri tämä lähtee mukaan ulkomaille.',
    },
    priceFrom: 7.74,
    currency: 'EUR',
    priceCheckedAt: '2026-08-02',
    image: 'prod-fazer-hazelnut-chocolate',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/fazer-hasselpahkinasuklaa-200g',
    details: {
      specs: [{ key: 'size', value: { en: '200 g', fi: '200 g' } }],
      sourceUrl: 'https://suomikauppa.fi/products/fazer-hasselpahkinasuklaa-200g',
      fetchedAt: '2026-08-02',
    },
  },
  {
    slug: 'fazer-light-milk-chocolate',
    category: 'treats',
    brand: 'Fazer',
    name: { en: 'Karl Fazer light milk chocolate 180 g', fi: 'Karl Fazer vaalea maitosuklaa 180 g' },
    description: {
      en: 'A lighter, milder version of the blue bar. If the classic is too sweet for you, this is the one to take instead.',
      fi: 'Vaaleampi ja miedompi versio sinisestä levystä. Jos klassikko on liian makea, tämä on se joka kannattaa ottaa tilalle.',
    },
    priceFrom: 7.74,
    currency: 'EUR',
    priceCheckedAt: '2026-08-02',
    image: 'prod-fazer-light-milk-chocolate',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/karl-fazer-vaalea-maitosuklaa-180g',
    details: {
      specs: [{ key: 'size', value: { en: '180 g', fi: '180 g' } }],
      sourceUrl: 'https://suomikauppa.fi/products/karl-fazer-vaalea-maitosuklaa-180g',
      fetchedAt: '2026-08-02',
    },
  },
  {
    slug: 'fazer-fazerina',
    category: 'treats',
    brand: 'Fazer',
    name: { en: 'Fazer Fazerina orange truffle bar 99 g', fi: 'Fazer Fazerina -suklaalevy 99 g' },
    description: {
      en: 'Orange truffle inside milk chocolate, made since 1953. Thinner than the blue bar and the one that survives a rucksack without melting into a block.',
      fi: 'Appelsiinitryffeliä maitosuklaan sisällä, valmistettu vuodesta 1953. Ohuempi kuin sininen levy ja se joka kestää repussa sulamatta möykyksi.',
    },
    priceFrom: 4.82,
    currency: 'EUR',
    priceCheckedAt: '2026-08-02',
    image: 'prod-fazer-fazerina',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/fazer-fazerina-suklaalevy-99-g',
    details: {
      specs: [{ key: 'size', value: { en: '99 g', fi: '99 g' } }],
      sourceUrl: 'https://suomikauppa.fi/products/fazer-fazerina-suklaalevy-99-g',
      fetchedAt: '2026-08-02',
    },
  },
  {
    slug: 'fazer-jaffa-orange',
    category: 'treats',
    brand: 'Fazer',
    name: { en: 'Fazer Jaffa orange cakes 300 g', fi: 'Fazer Jaffa Appelsiini -leivoskeksit 300 g' },
    description: {
      en: 'Sponge base, orange marmalade and dark chocolate on top. Not a biscuit and not a cake, which is the argument Finns have about it every single time.',
      fi: 'Leivospohja, appelsiinimarmeladi ja tumma suklaa päällä. Ei keksi eikä leivos, ja juuri siitä suomalaiset kiistelevät joka ainoa kerta.',
    },
    priceFrom: 7.15,
    currency: 'EUR',
    priceCheckedAt: '2026-08-02',
    image: 'prod-fazer-jaffa-orange',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/fazer-jaffa-appelsiini-leivoskeksi-300g',
    details: {
      specs: [{ key: 'size', value: { en: '300 g', fi: '300 g' } }],
      sourceUrl: 'https://suomikauppa.fi/products/fazer-jaffa-appelsiini-leivoskeksi-300g',
      fetchedAt: '2026-08-02',
    },
  },

  // ───────────────────────────────────────────────────────────────────────
  // Erä 2.8.2026 — TALVIVARUSTEET. Kaikki North Outdoorilta ja Haltilta,
  // eli kahdelta kumppanilta joiden Adtraction-ohjelma on hyväksytty ja
  // joiden Worker-reitti on olemassa: jokainen näistä tuottaa komission.
  //
  // Valinta on tehty käyttötilanteesta, ei brändin valikoimasta: mitä Lapin
  // pakkasessa oikeasti tarvitaan, kun istutaan moottorikelkan kyydissä,
  // seistään revontulia odottamassa tai lasketaan rinnettä. Siksi mukana on
  // kerroksia (aluskerrasto, välikerros, kuori) eikä vain yksittäisiä
  // asusteita — asiakas näkee kokonaisuuden, ei sattumanvaraista poimintaa.
  //
  // Hinnat, koot, materiaalit ja kuvat luettu kumppanin omasta
  // /products.json-syötteestä 2.8.2026. Spec-riveillä on VAIN kumppanin
  // ilmoittamia lukuja; siellä missä kumppani ei kerro materiaalia, riviä ei
  // ole. Kuvat ovat kaupan omia tuotekuvia (imageIsPartner).
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: 'north-outdoor-arctic-250-balaclava',
    category: 'clothing',
    brand: 'North Outdoor',
    name: {
      en: 'North Outdoor Arctic 250 merino balaclava',
      fi: 'North Outdoor Arctic 250 -merinokypärämyssy',
    },
    description: {
      en: 'The warmest knit North Outdoor makes, shaped to sit under a helmet. On a snowmobile or a reindeer sled the cold gets in at the neck and cheeks first, and this is the layer that closes that gap.',
      fi: 'North Outdoorin tuhdeinta merinoneulosta, muotoiltu istumaan kypärän alle. Moottorikelkan kyydissä ja porotilan reessä kylmä löytää ensimmäisenä kaulan ja poskien kohdalta, ja juuri sen raon tämä sulkee.',
    },
    priceFrom: 39.95,
    currency: 'EUR',
    priceCheckedAt: '2026-08-02',
    image: 'prod-north-outdoor-arctic-250-balaclava',
    imageIsPartner: true,
    partnerId: 'northoutdoor',
    partnerProductUrl: 'https://northoutdoor.com/products/arctic-250-merino-kyparamyssy-musta',
    featured: true,
    details: {
      specs: [
        {
          key: 'material',
          value: {
            en: 'Merino wool knit, Arctic 250 weight',
            fi: 'Merinovillaneulos, Arctic 250 -paksuus',
          },
        },
        { key: 'size', value: { en: 'One size', fi: 'Yksi koko' } },
        { key: 'color', value: { en: 'Black', fi: 'Musta' } },
        { key: 'origin', value: { en: 'North Outdoor, Oulu, Finland', fi: 'North Outdoor, Oulu' } },
      ],
      sourceUrl: 'https://northoutdoor.com/products/arctic-250-merino-kyparamyssy-musta',
      fetchedAt: '2026-08-02',
    },
  },
  {
    slug: 'north-outdoor-kevo-gloves',
    category: 'clothing',
    brand: 'North Outdoor',
    name: {
      en: 'North Outdoor Kevo merino gloves',
      fi: 'North Outdoor Kevo -merinosormikkaat',
    },
    description: {
      en: 'Knitted from mulesing free merino in North Outdoor’s own knitting mill in Oulu. Thin enough to keep under a mitten on the coldest days and to leave on when you take a photo.',
      fi: 'Neulottu mulesing-vapaasta merinovillasta North Outdoorin omassa neulomossa Oulussa. Niin ohuet että ne voi pitää lapasen alla kovimmilla pakkasilla ja jättää käteen kun ottaa kuvan.',
    },
    priceFrom: 50.95,
    currency: 'EUR',
    priceCheckedAt: '2026-08-02',
    image: 'prod-north-outdoor-kevo-gloves',
    imageIsPartner: true,
    partnerId: 'northoutdoor',
    partnerProductUrl: 'https://northoutdoor.com/products/kevo-merinosormikkaat-indigonsininen',
    details: {
      specs: [
        {
          key: 'material',
          value: {
            en: '100 % merino wool, mulesing free',
            fi: '100 % merinovillaa, mulesing-vapaa',
          },
        },
        { key: 'size', value: { en: 'M, L, XL', fi: 'M, L, XL' } },
        { key: 'color', value: { en: 'Indigo blue', fi: 'Indigonsininen' } },
        { key: 'origin', value: { en: 'Knitted in Oulu, Finland', fi: 'Neulottu Oulussa' } },
      ],
      sourceUrl: 'https://northoutdoor.com/products/kevo-merinosormikkaat-indigonsininen',
      fetchedAt: '2026-08-02',
    },
  },
  {
    slug: 'north-outdoor-heavyweight-gaiter',
    category: 'clothing',
    brand: 'North Outdoor',
    name: {
      en: 'North Outdoor Heavyweight merino neck gaiter',
      fi: 'North Outdoor Paksu merino -tuubihuivi',
    },
    description: {
      en: 'Merino fleece, thick enough to pull up over the nose while you wait for the lights to appear. Wool keeps insulating when your breath condenses in it, which is the whole problem with standing still in the cold.',
      fi: 'Merinofleeceä, riittävän paksu vedettäväksi nenän yli kun odottaa revontulten ilmestymistä. Villa eristää vielä silloinkin kun hengitys tiivistyy siihen, ja juuri se on paikallaan seisomisen ongelma pakkasessa.',
    },
    priceFrom: 39.95,
    currency: 'EUR',
    priceCheckedAt: '2026-08-02',
    image: 'prod-north-outdoor-heavyweight-gaiter',
    imageIsPartner: true,
    partnerId: 'northoutdoor',
    partnerProductUrl: 'https://northoutdoor.com/products/paksu-merino-tuubihuivi-musta',
    details: {
      specs: [
        { key: 'material', value: { en: 'Merino fleece', fi: 'Merinofleece' } },
        { key: 'size', value: { en: 'One size', fi: 'Yksi koko' } },
        { key: 'color', value: { en: 'Black', fi: 'Musta' } },
        { key: 'origin', value: { en: 'North Outdoor, Oulu, Finland', fi: 'North Outdoor, Oulu' } },
      ],
      sourceUrl: 'https://northoutdoor.com/products/paksu-merino-tuubihuivi-musta',
      fetchedAt: '2026-08-02',
    },
  },
  {
    slug: 'north-outdoor-sointu-cardigan',
    category: 'clothing',
    brand: 'North Outdoor',
    name: {
      en: 'North Outdoor Sointu merino cardigan',
      fi: 'North Outdoor Sointu -merinoneuletakki',
    },
    description: {
      en: 'A boxy merino cardigan that reads as indoor clothing but works as a mid layer. The one piece in this set you would wear to dinner after the safari.',
      fi: 'Väljä, hieman boxy-mallinen merinoneuletakki, joka näyttää sisävaatteelta mutta toimii välikerroksena. Tämän erän ainoa vaate, jonka pitää päällään myös safarin jälkeisellä illallisella.',
    },
    priceFrom: 199.95,
    currency: 'EUR',
    priceCheckedAt: '2026-08-02',
    image: 'prod-north-outdoor-sointu-cardigan',
    imageIsPartner: true,
    partnerId: 'northoutdoor',
    partnerProductUrl: 'https://northoutdoor.com/products/sointu-naisten-neuletakki-latte',
    details: {
      specs: [
        { key: 'material', value: { en: '100 % merino wool', fi: '100 % merinovillaa' } },
        { key: 'size', value: { en: 'XS–2XL', fi: 'XS–2XL' } },
        { key: 'color', value: { en: 'Latte', fi: 'Latte' } },
        { key: 'origin', value: { en: 'North Outdoor, Oulu, Finland', fi: 'North Outdoor, Oulu' } },
      ],
      sourceUrl: 'https://northoutdoor.com/products/sointu-naisten-neuletakki-latte',
      fetchedAt: '2026-08-02',
    },
  },
  {
    slug: 'north-outdoor-arctic-260-zip-neck',
    category: 'clothing',
    brand: 'North Outdoor',
    name: {
      en: 'North Outdoor Arctic 260 merino zip neck',
      fi: 'North Outdoor Arctic 260 -merinovetoketjupoolo',
    },
    description: {
      en: 'A high collared zip neck in 100 per cent merino, thick enough to wear on its own indoors and to work as the mid layer outdoors. The zip is the point: you open it on the walk and close it when you stop moving.',
      fi: 'Korkeakauluksinen vetoketjupoolo 100-prosenttisesta merinovillasta, riittävän tuhti käytettäväksi sellaisenaan sisällä ja välikerroksena ulkona. Vetoketju on olennainen: sen avaa kävellessä ja sulkee kun pysähtyy.',
    },
    priceFrom: 119.95,
    currency: 'EUR',
    priceCheckedAt: '2026-08-02',
    image: 'prod-north-outdoor-arctic-260-zip-neck',
    imageIsPartner: true,
    partnerId: 'northoutdoor',
    partnerProductUrl:
      'https://northoutdoor.com/products/arctic-260-miesten-valikerroksen-merino-vetoketjupoolo-terrain-graniitinharmaa-musta',
    details: {
      specs: [
        { key: 'material', value: { en: '100 % merino wool', fi: '100 % merinovillaa' } },
        { key: 'size', value: { en: 'S–3XL', fi: 'S–3XL' } },
        {
          key: 'color',
          value: { en: 'Granite grey and black', fi: 'Graniitinharmaa ja musta' },
        },
        { key: 'origin', value: { en: 'North Outdoor, Oulu, Finland', fi: 'North Outdoor, Oulu' } },
        {
          key: 'other',
          label: { en: 'Details', fi: 'Yksityiskohdat' },
          value: {
            en: 'High protective collar, covered zip, extended back hem',
            fi: 'Suojaava korkea kaulus, suojattu vetoketju, pidennetty takahelma',
          },
        },
      ],
      sourceUrl:
        'https://northoutdoor.com/products/arctic-260-miesten-valikerroksen-merino-vetoketjupoolo-terrain-graniitinharmaa-musta',
      fetchedAt: '2026-08-02',
    },
  },
  {
    slug: 'halti-hossa-baselayer-men',
    category: 'clothing',
    brand: 'Halti',
    name: {
      en: "Halti Hossa II merino base layer set, men's",
      fi: 'Halti Hossa II -merinoaluskerrasto, miesten',
    },
    description: {
      en: 'Shirt and long johns in one box, 190 g merino at 20.5 micron. The layer nearest the skin decides whether the rest of the outfit works, and this is the one most visitors arrive without.',
      fi: 'Paita ja pitkät alushousut samassa pakkauksessa, 190 gramman merinoa mikronilla 20,5. Ihoa vasten oleva kerros ratkaisee toimiiko loppu asu, ja juuri se puuttuu useimmilta tänne saapuvilta.',
    },
    priceFrom: 130,
    currency: 'EUR',
    priceCheckedAt: '2026-08-04',
    image: 'prod-halti-hossa-baselayer-men',
    imageIsPartner: true,
    partnerId: 'halti',
    partnerProductUrl: 'https://www.halti.fi/products/hossa-ii-merino-kerrasto-miesten',
    featured: true,
    details: {
      specs: [
        {
          key: 'material',
          value: {
            en: '100 % merino wool, 190 g/m², 20.5 micron, 1x1 rib',
            fi: '100 % merinovillaa, 190 g/m², mikroni 20,5, 1x1-resori',
          },
        },
        {
          key: 'other',
          label: { en: 'Set contents', fi: 'Pakkauksen sisältö' },
          value: { en: 'Long sleeve shirt and long johns', fi: 'Pitkähihainen paita ja pitkät alushousut' },
        },
        { key: 'care', value: { en: 'Wash inside out', fi: 'Pese nurinpäin' } },
      ],
      sourceUrl: 'https://www.halti.fi/products/hossa-ii-merino-kerrasto-miesten',
      fetchedAt: '2026-08-04',
    },
  },
  {
    slug: 'halti-hossa-baselayer-women',
    category: 'clothing',
    brand: 'Halti',
    name: {
      en: "Halti Hossa II merino base layer set, women's",
      fi: 'Halti Hossa II -merinoaluskerrasto, naisten',
    },
    description: {
      en: 'The same 190 g merino set cut for women. Wool holds its warmth when you sweat on the walk and then stand still to watch, which is what a day in Lapland actually looks like.',
      fi: 'Sama 190 gramman merinokerrasto naisten mitoituksella. Villa pitää lämmön silloinkin kun kävelyllä hikoilee ja jää sitten paikalleen katselemaan, ja juuri niin päivä Lapissa käytännössä menee.',
    },
    priceFrom: 130,
    currency: 'EUR',
    priceCheckedAt: '2026-08-04',
    image: 'prod-halti-hossa-baselayer-women',
    imageIsPartner: true,
    partnerId: 'halti',
    partnerProductUrl: 'https://www.halti.fi/products/hossa-ii-merino-kerrasto-naisten',
    featured: true,
    details: {
      specs: [
        {
          key: 'material',
          value: {
            en: '100 % merino wool, 190 g/m², 20.5 micron, 1x1 rib',
            fi: '100 % merinovillaa, 190 g/m², mikroni 20,5, 1x1-resori',
          },
        },
        {
          key: 'other',
          label: { en: 'Set contents', fi: 'Pakkauksen sisältö' },
          value: { en: 'Long sleeve shirt and long johns', fi: 'Pitkähihainen paita ja pitkät alushousut' },
        },
        { key: 'care', value: { en: 'Wash inside out', fi: 'Pese nurinpäin' } },
      ],
      sourceUrl: 'https://www.halti.fi/products/hossa-ii-merino-kerrasto-naisten',
      fetchedAt: '2026-08-04',
    },
  },
  {
    slug: 'halti-heatgrid-midlayer',
    category: 'clothing',
    brand: 'Halti',
    name: {
      en: "Halti HeatGrid midlayer jacket, men's",
      fi: 'Halti HeatGrid -välikerrostakki, miesten',
    },
    description: {
      en: 'Waffle knit that traps air without adding bulk under a shell. This is the layer between the merino and the parka, and leaving it out is why people come back cold.',
      fi: 'Vohvelineulos, joka sitoo ilmaa kasvattamatta massaa kuoritakin alla. Tämä on se kerros merinon ja toppatakin välissä, ja sen pois jättäminen on syy siihen miksi retkeltä palataan palelevana.',
    },
    priceFrom: 100,
    currency: 'EUR',
    priceCheckedAt: '2026-08-04',
    image: 'prod-halti-heatgrid-midlayer',
    imageIsPartner: true,
    partnerId: 'halti',
    partnerProductUrl: 'https://www.halti.fi/products/heatgrid-valitakki-miesten',
    details: {
      specs: [
        {
          key: 'material',
          value: {
            en: 'Waffle back knit 95 % recycled polyester / 5 % elastane; jersey knit 92 % recycled polyester / 8 % elastane',
            fi: 'Vohvelineulos 95 % kierrätyspolyesteriä / 5 % elastaania; jerseyneulos 92 % kierrätyspolyesteriä / 8 % elastaania',
          },
        },
        {
          key: 'care',
          value: {
            en: 'Wash inside out with similar colours, close zippers before washing',
            fi: 'Pese nurinpäin samanväristen kanssa, sulje vetoketjut ennen pesua',
          },
        },
      ],
      sourceUrl: 'https://www.halti.fi/products/heatgrid-valitakki-miesten',
      fetchedAt: '2026-08-04',
    },
  },
  {
    slug: 'halti-taival-dx-jacket',
    category: 'clothing',
    brand: 'Halti',
    name: {
      en: "Halti Taival DX 3L shell jacket, men's",
      fi: 'Halti Taival DX 3L -kuoritakki, miesten',
    },
    description: {
      en: 'A three layer shell rated 20 000 mm waterproof and 30 000 g breathable. Those two numbers matter in different directions: the first keeps sleet out, the second lets the sweat from an uphill walk escape instead of freezing inside.',
      fi: 'Kolmikerroksinen kuoritakki, vedenpitävyys 20 000 mm ja hengittävyys 30 000 g. Luvut vaikuttavat eri suuntiin: ensimmäinen pitää räntäsateen ulkona, toinen päästää ylämäen hien ulos sen sijaan että se jäätyisi sisäpuolelle.',
    },
    priceFrom: 280,
    currency: 'EUR',
    priceCheckedAt: '2026-08-04',
    image: 'prod-halti-taival-dx-jacket',
    imageIsPartner: true,
    partnerId: 'halti',
    partnerProductUrl: 'https://www.halti.fi/products/taival-dx-3l-takki-miesten',
    details: {
      specs: [
        {
          key: 'material',
          value: {
            en: 'DrymaxX Nano knit shell, 3 layer. 100 % recycled polyester',
            fi: 'DrymaxX Nano -kuori, 3-kerroksinen. 100 % kierrätyspolyesteriä',
          },
        },
        {
          key: 'other',
          label: { en: 'Waterproofness', fi: 'Vedenpitävyys' },
          value: { en: '20 000 mm', fi: '20 000 mm' },
        },
        {
          key: 'other',
          label: { en: 'Breathability', fi: 'Hengittävyys' },
          value: { en: '30 000 g/m²/24 h', fi: '30 000 g/m²/24 h' },
        },
      ],
      sourceUrl: 'https://www.halti.fi/products/taival-dx-3l-takki-miesten',
      fetchedAt: '2026-08-04',
    },
  },
  {
    slug: 'halti-sykli-ski-gloves',
    category: 'clothing',
    brand: 'Halti',
    name: {
      en: 'Halti Sykli ski gloves',
      fi: 'Halti Sykli -laskettelukäsineet',
    },
    description: {
      en: 'Waterproof glove with 120 g insulation, a leather palm and a snowlock cuff that stops snow packing in at the wrist when you fall. Made for lift served skiing at Levi or Ylläs rather than for walking around town.',
      fi: 'Vedenpitävä käsine, 120 gramman eriste, nahkainen kämmen ja lumilukollinen resori, joka estää lunta pakkautumasta ranteeseen kaatuessa. Tehty Levin ja Ylläksen rinteisiin, ei kaupungilla kävelyyn.',
    },
    priceFrom: 100,
    currency: 'EUR',
    priceCheckedAt: '2026-08-04',
    image: 'prod-halti-sykli-ski-gloves',
    imageIsPartner: true,
    partnerId: 'halti',
    partnerProductUrl: 'https://www.halti.fi/products/sykli-lasketteluhanskat',
    details: {
      specs: [
        {
          key: 'material',
          value: {
            en: 'DrymaxX, stretches in 4 directions, waterproof and windproof. Leather palm',
            fi: 'DrymaxX, joustaa 4 suuntaan, vedenpitävä ja tuulenpitävä. Nahkakämmen',
          },
        },
        {
          key: 'other',
          label: { en: 'Insulation', fi: 'Eriste' },
          value: { en: '120 g Microtherm Dynamic', fi: '120 g Microtherm Dynamic' },
        },
        {
          key: 'other',
          label: { en: 'Waterproofness and breathability', fi: 'Vedenpitävyys ja hengittävyys' },
          value: { en: '15 000 mm / 15 000 g/m²/24 h', fi: '15 000 mm / 15 000 g/m²/24 h' },
        },
      ],
      sourceUrl: 'https://www.halti.fi/products/sykli-lasketteluhanskat',
      fetchedAt: '2026-08-04',
    },
  },
  {
    slug: 'halti-merino-socks-2pack',
    category: 'clothing',
    brand: 'Halti',
    name: {
      en: 'Halti merino wool socks, 2 pack',
      fi: 'Halti-merinovillasukat, 2 paria',
    },
    description: {
      en: 'Two pairs, because the pair you wore today is not dry tomorrow morning. Merino blend rather than pure wool, which survives repeated machine washing better.',
      fi: 'Kaksi paria, koska tänään käytetty pari ei ole huomisaamuna kuiva. Merinosekoitetta eikä puhdasta villaa, mikä kestää toistuvan konepesun paremmin.',
    },
    priceFrom: 30,
    currency: 'EUR',
    priceCheckedAt: '2026-08-04',
    image: 'prod-halti-merino-socks-2pack',
    imageIsPartner: true,
    partnerId: 'halti',
    partnerProductUrl: 'https://www.halti.fi/products/merinovillasukat-2-paria',
    details: {
      specs: [
        {
          key: 'material',
          value: {
            en: '40 % merino wool, 40 % acrylic, 19 % polyamide, 1 % elastane',
            fi: '40 % merinovillaa, 40 % akryylia, 19 % polyamidia, 1 % elastaania',
          },
        },
        {
          key: 'other',
          label: { en: 'Pack size', fi: 'Pakkauskoko' },
          value: { en: '2 pairs', fi: '2 paria' },
        },
        { key: 'origin', value: { en: 'Made in Europe', fi: 'Valmistettu Euroopassa' } },
      ],
      sourceUrl: 'https://www.halti.fi/products/merinovillasukat-2-paria',
      fetchedAt: '2026-08-04',
    },
  },

  // ── experiences: Elämyslahjat.fi-lahjakortit, erä 2026-08-03 ──────────────
  // Lahjakortti ostetaan Elämyslahjat.fi:stä ja toimitetaan sähköpostitse;
  // saaja varaa päivän itse ja elämys lunastetaan Lapissa. Sijainti, kesto,
  // osallistujamäärä, sesonki ja järjestäjä on luettu tuotesivulta 3.8.2026.
  // Brand on elämyksen JÄRJESTÄJÄ (tuotesivun "Järjestäjä"-osio), ei
  // Elämyslahjat: kauppa on jälleenmyyjä samalla tavalla kuin Suomikauppa.
  // 🔴 Elämyslahjatin oma /lappi/-sivu listaa kärkenään myös Kuusamon husky-,
  // poro- ja kelkkasafarit. Ne on jätetty pois: Ruka ja Kuusamo eivät ole
  // Lappia (verkoston sääntö), ja sijainti luetaan tuotesivun titlestä.
  {
    slug: 'husky-farm-safari-rovaniemi',
    category: 'experiences',
    brand: 'Wild About Lapland',
    name: {
      en: 'Husky farm visit and husky safari for two, Rovaniemi',
      fi: 'Vierailu huskyfarmilla ja huskysafari kahdelle, Rovaniemi',
    },
    description: {
      en: 'A gift card for a guided visit to a working husky farm near Rovaniemi, followed by a sleigh ride through the winter forest behind the dogs. Bought now, delivered by email, and booked for a date the recipient picks.',
      fi: 'Lahjakortti opastetulle vierailulle aidolla huskyfarmilla Rovaniemen lähellä ja sen jatkoksi rekiajelulle talvisessa metsässä koirien vetämänä. Ostetaan nyt, toimitetaan sähköpostitse, ja saaja varaa päivän itse.',
    },
    priceFrom: 380,
    currency: 'EUR',
    priceCheckedAt: '2026-08-03',
    image: 'prod-husky-farm-safari-rovaniemi',
    imageIsPartner: true,
    partnerId: 'elamyslahjat',
    partnerProductUrl: 'https://www.elamyslahjat.fi/lahjat/husky-farmi-safari/',
    details: {
      specs: [
        {
          key: 'contents',
          value: {
            en: 'Guided husky farm visit and a husky safari for two. The guide can pick you up within 10 km of Rovaniemi',
            fi: 'Opastettu vierailu huskyfarmilla ja huskysafari kahdelle. Opas voi noutaa 10 km:n säteellä Rovaniemeltä',
          },
        },
        {
          key: 'other',
          label: { en: 'Duration', fi: 'Kesto' },
          value: { en: 'About 3.5 h', fi: 'Noin 3,5 h' },
        },
        {
          key: 'other',
          label: { en: 'Participants', fi: 'Osallistujat' },
          value: { en: '2 people', fi: '2 henkilöä' },
        },
        {
          key: 'other',
          label: { en: 'Location', fi: 'Sijainti' },
          value: {
            en: 'Rovaniemi. The exact location is confirmed at booking',
            fi: 'Rovaniemi. Tarkka sijainti varmistuu varauksen yhteydessä',
          },
        },
        {
          key: 'other',
          label: { en: 'Season', fi: 'Sesonki' },
          value: {
            en: 'Winter months, November to April',
            fi: 'Talvikuukausina, marras-huhtikuu',
          },
        },
        {
          key: 'other',
          label: { en: 'Guidance language', fi: 'Opastuskieli' },
          value: { en: 'English', fi: 'Englanti' },
        },
        {
          key: 'other',
          label: { en: 'Gift card', fi: 'Lahjakortti' },
          value: { en: 'Valid for 3 years', fi: 'Voimassa 3 vuotta' },
        },
      ],
      sourceUrl: 'https://www.elamyslahjat.fi/lahjat/husky-farmi-safari/',
      fetchedAt: '2026-08-03',
    },
  },
  {
    slug: 'reindeer-safari-rovaniemi',
    category: 'experiences',
    brand: 'Wild About Lapland',
    name: {
      en: 'Reindeer safari for two, Rovaniemi',
      fi: 'Porosafari kahdelle, Rovaniemi',
    },
    description: {
      en: 'An evening reindeer safari on a real farm near Rovaniemi: a 2.5 km loop behind the reindeer, a visit to the farm and a small snack. On a clear night the northern lights may show up, though nobody can promise that.',
      fi: 'Iltainen porosafari aidolla porofarmilla Rovaniemen lähellä: 2,5 km:n kierros porojen vetämänä, tutustuminen tilaan ja pieni eväs. Kirkkaana iltana revontulet voivat näyttäytyä, mutta sitä ei voi luvata.',
    },
    priceFrom: 400,
    currency: 'EUR',
    priceCheckedAt: '2026-08-03',
    image: 'prod-reindeer-safari-rovaniemi',
    imageIsPartner: true,
    partnerId: 'elamyslahjat',
    partnerProductUrl: 'https://www.elamyslahjat.fi/lahjat/safari-kierros-porot/',
    details: {
      specs: [
        {
          key: 'contents',
          value: {
            en: 'Entry to a reindeer farm and a 2.5 km ride in a reindeer-drawn sleigh for two, with a small snack. Pick-up within 10 km of Rovaniemi',
            fi: 'Pääsy porofarmille ja 2,5 km:n kierros porojen vetämänä kahdelle, pieni eväs. Nouto 10 km:n säteellä Rovaniemeltä',
          },
        },
        {
          key: 'other',
          label: { en: 'Duration', fi: 'Kesto' },
          value: { en: '2.5 to 3 hours', fi: '2,5-3 tuntia' },
        },
        {
          key: 'other',
          label: { en: 'Participants', fi: 'Osallistujat' },
          value: { en: '2 people', fi: '2 henkilöä' },
        },
        {
          key: 'other',
          label: { en: 'Location', fi: 'Sijainti' },
          value: {
            en: 'Rovaniemi. The exact location is confirmed at booking',
            fi: 'Rovaniemi. Tarkka sijainti varmistuu varauksen yhteydessä',
          },
        },
        {
          key: 'other',
          label: { en: 'Season', fi: 'Sesonki' },
          value: {
            en: 'Winter months, December to March. The safari runs in the evening',
            fi: 'Talvikuukausina, joulu-maaliskuu. Safarille lähdetään illalla',
          },
        },
        {
          key: 'other',
          label: { en: 'Guidance language', fi: 'Opastuskieli' },
          value: { en: 'English', fi: 'Englanti' },
        },
        {
          key: 'other',
          label: { en: 'Gift card', fi: 'Lahjakortti' },
          value: { en: 'Valid for 3 years', fi: 'Voimassa 3 vuotta' },
        },
      ],
      sourceUrl: 'https://www.elamyslahjat.fi/lahjat/safari-kierros-porot/',
      fetchedAt: '2026-08-03',
    },
  },
  {
    slug: 'aurora-tour-kilpisjarvi',
    category: 'experiences',
    brand: 'Kilpissafarit',
    name: {
      en: 'Northern lights tour by snowmobile for two, Kilpisjärvi',
      fi: 'Revontuliretki moottorikelkalla kahdelle, Kilpisjärvi',
    },
    description: {
      en: 'Kilpisjärvi is known for its exceptionally clear night sky. A short snowmobile ride takes two of you to a spot where the auroras can be watched in complete natural peace, with warm drinks against the cold. Runs evenings from 20.00 to 23.00, with a weather reservation.',
      fi: 'Kilpisjärvi tunnetaan poikkeuksellisen kirkkaasta yötaivaastaan. Lyhyt kelkkamatka vie kaksikon paikkaan, jossa revontulia voi ihailla täydessä luonnonrauhassa lämpimien juomien kera. Retki ajetaan iltaisin klo 20.00-23.00, ja siinä on säävaraus.',
    },
    priceFrom: 270,
    currency: 'EUR',
    priceCheckedAt: '2026-08-03',
    image: 'prod-aurora-tour-kilpisjarvi',
    imageIsPartner: true,
    partnerId: 'elamyslahjat',
    partnerProductUrl: 'https://www.elamyslahjat.fi/lahjat/revontulien-bongausta-2lle/',
    details: {
      specs: [
        {
          key: 'contents',
          value: {
            en: 'Guided northern lights tour for two, about 15 km by snowmobile, warm drinks included',
            fi: 'Opastettu revontuliretki kahdelle, noin 15 km moottorikelkalla, lämpimät juomat',
          },
        },
        {
          key: 'other',
          label: { en: 'Duration', fi: 'Kesto' },
          value: { en: '3 hours, from 20.00 to 23.00', fi: '3 tuntia, klo 20.00-23.00' },
        },
        {
          key: 'other',
          label: { en: 'Participants', fi: 'Osallistujat' },
          value: { en: '2 people', fi: '2 henkilöä' },
        },
        {
          key: 'other',
          label: { en: 'Location', fi: 'Sijainti' },
          value: { en: 'Kilpisjärvi', fi: 'Kilpisjärvi' },
        },
        {
          key: 'other',
          label: { en: 'Age limit', fi: 'Ikäraja' },
          value: {
            en: '18 years to drive, 8 years in the sled',
            fi: 'Ajajalle 18 vuotta, reessä matkustavalle 8 vuotta',
          },
        },
        {
          key: 'other',
          label: { en: 'Gift card', fi: 'Lahjakortti' },
          value: { en: 'Valid for 3 years', fi: 'Voimassa 3 vuotta' },
        },
      ],
      sourceUrl: 'https://www.elamyslahjat.fi/lahjat/revontulien-bongausta-2lle/',
      fetchedAt: '2026-08-03',
    },
  },
  {
    slug: 'glass-igloo-night-levi',
    category: 'experiences',
    brand: 'Golden Crown Levin Iglut',
    name: {
      en: 'Glass igloo night for two, Levi',
      fi: 'Igluyö kahdelle Levillä',
    },
    description: {
      en: 'A night for two in a warm glass igloo high on the Levi fell. The electrically heated glass stays clear while you look for auroras from a motorised double bed. Welcome drink, bathrobes and breakfast are included, and the igloo has its own kitchenette, shower and WC.',
      fi: 'Yö kahdelle lämpimässä lasi-iglussa korkealla Levin tunturissa. Sähkölämmitteiset lasit pysyvät kirkkaina, kun revontulia etsii moottoroidulta parivuoteelta. Tervetulojuoma, kylpytakit ja aamiainen sisältyvät, ja iglussa on oma keittokomero, suihku ja wc.',
    },
    priceFrom: 400,
    currency: 'EUR',
    priceCheckedAt: '2026-08-03',
    image: 'prod-glass-igloo-night-levi',
    imageIsPartner: true,
    partnerId: 'elamyslahjat',
    partnerProductUrl: 'https://www.elamyslahjat.fi/lahjat/igluyo-kahdelle-levilla/',
    details: {
      specs: [
        {
          key: 'contents',
          value: {
            en: 'One night for two in a Superior class glass igloo, welcome drink, bathrobes and slippers, breakfast. Transport is not included',
            fi: 'Yö kahdelle Superior-luokan lasi-iglussa, tervetulojuoma, kylpytakit ja tossut, aamiainen. Kuljetus ei sisälly hintaan',
          },
        },
        {
          key: 'other',
          label: { en: 'Duration', fi: 'Kesto' },
          value: { en: '1 night, checkout at 11.00', fi: '1 yö, uloskirjautuminen klo 11.00' },
        },
        {
          key: 'other',
          label: { en: 'Participants', fi: 'Osallistujat' },
          value: { en: '2 people', fi: '2 henkilöä' },
        },
        {
          key: 'other',
          label: { en: 'Location', fi: 'Sijainti' },
          value: { en: 'Levi, high on the fell', fi: 'Levi, korkealla tunturissa' },
        },
        {
          key: 'other',
          label: { en: 'Igloo', fi: 'Iglu' },
          value: {
            en: '23 m², heated non-fogging glass, kitchenette, shower and WC, motorised double bed',
            fi: '23 m², lämmitetyt huurtumattomat lasit, keittokomero, suihku ja wc, moottoroitu parivuode',
          },
        },
        {
          key: 'other',
          label: { en: 'Gift card', fi: 'Lahjakortti' },
          value: {
            en: 'Valid for stays 27.08-10.11 and 01.04-12.04',
            fi: 'Voimassa 27.08-10.11 ja 01.04-12.04 välisinä aikoina',
          },
        },
      ],
      sourceUrl: 'https://www.elamyslahjat.fi/lahjat/igluyo-kahdelle-levilla/',
      fetchedAt: '2026-08-03',
    },
  },
  {
    slug: 'gold-panning-day-inari',
    category: 'experiences',
    brand: 'Kultakuume.com',
    name: {
      en: 'Gold digging day for four, Inari',
      fi: 'Kullankaivuupäivä neljälle, Inari',
    },
    description: {
      en: 'A day at a working gold claim in Inari for a group of four: first the history, then panning by hand and a look at how machine digging works. Meals and transport from the centre of Saariselkä are included, and any gold the group finds goes home with them.',
      fi: 'Päivä oikealla kultavaltauksella Inarissa neljän hengen porukalle: ensin kullankaivuun historiaa, sitten huuhdontaa käsin ja koneellisen kaivuun seuraamista. Ruoat ja kuljetus Saariselän keskustasta sisältyvät, ja löydetty kulta lähtee löytäjien mukaan.',
    },
    priceFrom: 1490,
    currency: 'EUR',
    priceCheckedAt: '2026-08-03',
    image: 'prod-gold-panning-day-inari',
    imageIsPartner: true,
    partnerId: 'elamyslahjat',
    partnerProductUrl: 'https://www.elamyslahjat.fi/lahjat/kultakuume-kullankaivuumatka-4/',
    details: {
      specs: [
        {
          key: 'contents',
          value: {
            en: 'A 5 hour gold digging day at a working claim for four, with guidance for panning by hand and a look at machine digging. Meals for the day, digging gear and transport from the centre of Saariselkä to the claim and back are included',
            fi: '5 tunnin kullankaivuupäivä oikealla valtauksella neljälle, opastus käsinhuuhdontaan ja koneellisen kaivuun seuraaminen. Päivän ruoat, kaivuutarvikkeet ja kuljetus Saariselän keskustasta valtaukselle ja takaisin sisältyvät',
          },
        },
        {
          key: 'other',
          label: { en: 'Duration', fi: 'Kesto' },
          value: { en: '5 hours', fi: '5 tuntia' },
        },
        {
          key: 'other',
          label: { en: 'Participants', fi: 'Osallistujat' },
          value: { en: '4 people', fi: '4 henkilöä' },
        },
        {
          key: 'other',
          label: { en: 'Location', fi: 'Sijainti' },
          value: { en: 'Inari', fi: 'Inari' },
        },
        {
          key: 'other',
          label: { en: 'Season', fi: 'Sesonki' },
          value: { en: 'Spring and summer seasons', fi: 'Kevät- ja kesäkaudella' },
        },
        {
          key: 'other',
          label: { en: 'Gift card', fi: 'Lahjakortti' },
          value: { en: 'Valid for 3 years', fi: 'Voimassa 3 vuotta' },
        },
      ],
      sourceUrl: 'https://www.elamyslahjat.fi/lahjat/kultakuume-kullankaivuumatka-4/',
      fetchedAt: '2026-08-03',
    },
  },
  // ── Nordicbuddies (Daisycon 20538, 7 %) ────────────────────────────────
  // Virallisesti lisensoidut Muumi-, Peppi- ja Mauri Kunnas -vaatteet.
  // Erä on tarkoituksella KAKSIKAUTINEN (Vesa 2026-08-10: "kesällä halutaan
  // ostaa t-paitoja, saunajuttuja, urheiluvaatteita"): pipo, lapaset ja sukat
  // palvelevat talvimatkaajaa, t-paidat ja huppari kesäkävijää ja
  // ulkosuomalaista ympäri vuoden.
  //
  // 🔴 partnerId on `nordicbuddies`, EI `moomin`. Ne ovat eri kauppiaita, ja
  // Daisyconin syvälinkki kelpaa vain nordicbuddies.com-osoitteisiin.
  //
  // Hinnat, materiaalit, koot ja värit luettu kaupan omasta tuotedatasta
  // 2026-08-10. Kuvat ovat kumppanin omia tuotekuvia samasta lähteestä.
  {
    slug: 'nb-little-my-beanie',
    category: 'clothing',
    brand: 'Nordicbuddies',
    name: {
      en: 'Little My chunky beanie',
      fi: 'Pikku Myy -neulepipo',
    },
    description: {
      en: 'A thick knitted beanie with Little My on the cuff, in a wool blend that holds its shape after a week of being pulled on and off. One adult size, and the only Moomin character who would approve of the weather in Lapland.',
      fi: 'Paksu neulepipo, jonka käänteessä on Pikku Myy, villasekoitteessa, joka pitää muotonsa viikon vetämisen jälkeenkin. Yksi aikuisten koko, ja ainoa muumihahmo, joka hyväksyisi Lapin sään.',
    },
    priceFrom: 34.9,
    currency: 'EUR',
    priceCheckedAt: '2026-08-10',
    image: 'prod-nb-little-my-beanie',
    imageIsPartner: true,
    partnerId: 'nordicbuddies',
    partnerProductUrl: 'https://nordicbuddies.com/products/little-my-chunky-beanie',
    details: {
      specs: [
        { key: 'material', value: { en: 'Acrylic, nylon and wool', fi: 'Akryyli, nailon ja villa' } },
        { key: 'size', value: { en: 'Adult, one size', fi: 'Aikuisten koko, yksi koko' } },
        {
          key: 'other',
          label: { en: 'Licence', fi: 'Lisenssi' },
          value: { en: 'Official Moomin product', fi: 'Virallinen Muumi-tuote' },
        },
      ],
      sourceUrl: 'https://nordicbuddies.com/products/little-my-chunky-beanie',
      fetchedAt: '2026-08-10',
    },
  },
  {
    slug: 'nb-moomintroll-mittens',
    category: 'clothing',
    brand: 'Nordicbuddies',
    name: {
      en: 'Moomintroll mittens',
      fi: 'Muumipeikko-lapaset',
    },
    description: {
      en: 'Knitted mittens lined with soft fleece, 24 centimetres tall so the cuff reaches past a jacket sleeve. Adult size, and cheap enough that losing one on a husky sled is survivable.',
      fi: 'Neulotut lapaset pehmeällä fleecevuorella, 24 senttiä korkeat jotta varsi yltää takin hihan yli. Aikuisten koko, ja sen verran edulliset että toisen hukkaaminen huskykelkasta on siedettävää.',
    },
    priceFrom: 19.9,
    currency: 'EUR',
    priceCheckedAt: '2026-08-10',
    image: 'prod-nb-moomintroll-mittens',
    imageIsPartner: true,
    partnerId: 'nordicbuddies',
    partnerProductUrl: 'https://nordicbuddies.com/products/moomintroll-mittens-adult',
    details: {
      specs: [
        { key: 'material', value: { en: '100 % acrylic, fleece lining', fi: '100 % akryyli, fleecevuori' } },
        {
          key: 'size',
          value: {
            en: 'Adult, height 24 cm, width 9.5 cm above the thumb',
            fi: 'Aikuisten koko, korkeus 24 cm, leveys peukalon yläpuolelta 9,5 cm',
          },
        },
        {
          key: 'other',
          label: { en: 'Licence', fi: 'Lisenssi' },
          value: { en: 'Official Moomin product', fi: 'Virallinen Muumi-tuote' },
        },
      ],
      sourceUrl: 'https://nordicbuddies.com/products/moomintroll-mittens-adult',
      fetchedAt: '2026-08-10',
    },
  },
  // 🔴 Vaihdettu 24.8.2026 kaupan OMAN feedin perusteella (Daisycon 20538):
  // vanha kohde `…-retro-socks-1` (valkoinen MOOMIN20G) on loppuunmyyty —
  // sen ainoa koko EU 36-42 on `available: false` sekä feedissä että kaupan
  // omassa tuote-JSONissa. Kauppa pitää samasta sukasta kolmea listausta ja
  // niistä vain `-2` (vaaleansininen MOOMIN20H, 12,90 €) on varastossa, joten
  // linkki JA kuva vaihdettiin siihen: väri on eri, ja kortin kuvan on
  // vastattava tuotetta jonka ostaja saa.
  {
    slug: 'nb-moomintroll-love-socks',
    category: 'clothing',
    brand: 'Nordicbuddies',
    name: {
      en: 'Moomintroll Love retro socks',
      fi: 'Muumipeikko Love -retrosukat',
    },
    description: {
      en: 'Light blue ribbed socks with Moomintroll embroidered into a pink heart on the shin, not printed on, so it survives the wash. One size covers EU 36 to 42.',
      fi: 'Vaaleansiniset resorisukat, joissa Muumipeikko on kirjottu pinkkiin sydämeen säären kohdalle, ei painettu, joten se kestää pesun. Yksi koko kattaa EU 36-42.',
    },
    priceFrom: 12.9,
    currency: 'EUR',
    priceCheckedAt: '2026-08-24',
    image: 'prod-nb-moomintroll-love-socks',
    imageIsPartner: true,
    partnerId: 'nordicbuddies',
    partnerProductUrl: 'https://nordicbuddies.com/products/moomintroll-love-womens-retro-socks-2',
    details: {
      specs: [
        {
          key: 'material',
          value: {
            en: '67 % cotton, 25 % polyester, 4 % elastodiene, 3 % nylon, 1 % elastane',
            fi: '67 % puuvilla, 25 % polyesteri, 4 % elastodieeni, 3 % nailon, 1 % elastaani',
          },
        },
        { key: 'size', value: { en: 'One size, EU 36-42', fi: 'Yksi koko, EU 36-42' } },
        {
          key: 'other',
          label: { en: 'Detail', fi: 'Yksityiskohta' },
          value: { en: 'Embroidered artwork', fi: 'Kirjottu kuvio' },
        },
      ],
      sourceUrl: 'https://nordicbuddies.com/products/moomintroll-love-womens-retro-socks-2',
      fetchedAt: '2026-08-24',
    },
  },
  {
    slug: 'nb-moomin-classics-tee',
    category: 'clothing',
    brand: 'Nordicbuddies',
    name: {
      en: 'Moomin Classics heavy T-shirt',
      fi: 'Moomin Classics -paksu t-paita',
    },
    description: {
      en: 'A 260 gram cotton T-shirt in lavender, box fit, with a small embroidered Moomintroll at the chest instead of a large print. Heavy enough to hang straight rather than cling.',
      fi: '260 gramman puuvillainen t-paita laventelinvärisenä, väljä leikkaus, ja rinnassa pieni kirjottu Muumipeikko ison painatuksen sijaan. Riittävän paksu roikkuakseen suorana eikä myötäillen.',
    },
    priceFrom: 44.9,
    currency: 'EUR',
    priceCheckedAt: '2026-08-10',
    image: 'prod-nb-moomin-classics-tee',
    imageIsPartner: true,
    partnerId: 'nordicbuddies',
    partnerProductUrl: 'https://nordicbuddies.com/products/moomin-classics-heavy-t-shirt-1',
    details: {
      specs: [
        { key: 'material', value: { en: '100 % cotton, 260 g/m2', fi: '100 % puuvilla, 260 g/m2' } },
        { key: 'size', value: { en: 'Unisex box fit, XS to XXL', fi: 'Unisex väljä leikkaus, XS-XXL' } },
        {
          key: 'other',
          label: { en: 'Fit note', fi: 'Kokovinkki' },
          value: {
            en: 'Box fit, the shop recommends ordering one size down',
            fi: 'Väljä leikkaus, kauppa suosittelee kokoa pienempää',
          },
        },
      ],
      sourceUrl: 'https://nordicbuddies.com/products/moomin-classics-heavy-t-shirt-1',
      fetchedAt: '2026-08-10',
    },
  },
  {
    slug: 'nb-pippi-tee',
    category: 'clothing',
    brand: 'Nordicbuddies',
    name: {
      en: 'Pippi Longstocking T-shirt',
      fi: 'Peppi Pitkätossu -t-paita',
    },
    description: {
      en: 'Pippi printed in Finland on a 240 gram cotton T-shirt, unisex straight fit with a longer than average hem. Astrid Lindgren travels further than the Moomins in some households.',
      fi: 'Peppi painettuna Suomessa 240 gramman puuvillaiselle t-paidalle, unisex-suora leikkaus ja tavallista pidempi helma. Astrid Lindgren matkaa joissakin kodeissa pidemmälle kuin muumit.',
    },
    priceFrom: 44.9,
    currency: 'EUR',
    priceCheckedAt: '2026-08-10',
    image: 'prod-nb-pippi-tee',
    imageIsPartner: true,
    partnerId: 'nordicbuddies',
    partnerProductUrl: 'https://nordicbuddies.com/products/pippi-longstocking-t-shirt-52l',
    details: {
      specs: [
        { key: 'material', value: { en: '100 % cotton, 240 g/m2', fi: '100 % puuvilla, 240 g/m2' } },
        { key: 'size', value: { en: 'Unisex straight fit, M to XXL', fi: 'Unisex suora leikkaus, M-XXL' } },
        { key: 'origin', value: { en: 'Printed in Finland', fi: 'Painettu Suomessa' } },
      ],
      sourceUrl: 'https://nordicbuddies.com/products/pippi-longstocking-t-shirt-52l',
      fetchedAt: '2026-08-10',
    },
  },
  {
    slug: 'nb-moomintroll-hoodie',
    category: 'clothing',
    brand: 'Nordicbuddies',
    name: {
      en: 'Moomintroll hoodie',
      fi: 'Muumipeikko-huppari',
    },
    description: {
      en: 'A 300 gram cotton and polyester hoodie printed in Finland, unisex straight fit. The layer people actually live in on a cabin evening once the sauna has cooled.',
      fi: '300 gramman puuvilla-polyesterihuppari painettuna Suomessa, unisex-suora leikkaus. Se kerros, jossa mökki-illassa oikeasti eletään sen jälkeen kun sauna on jäähtynyt.',
    },
    priceFrom: 89.9,
    currency: 'EUR',
    priceCheckedAt: '2026-08-10',
    image: 'prod-nb-moomintroll-hoodie',
    imageIsPartner: true,
    partnerId: 'nordicbuddies',
    partnerProductUrl: 'https://nordicbuddies.com/products/moomintroll-hoodie',
    details: {
      specs: [
        {
          key: 'material',
          value: {
            en: '65 % cotton, 35 % polyester, 300 g/m2',
            fi: '65 % puuvilla, 35 % polyesteri, 300 g/m2',
          },
        },
        { key: 'size', value: { en: 'Unisex straight fit, XS to XXL', fi: 'Unisex suora leikkaus, XS-XXL' } },
        { key: 'origin', value: { en: 'Printed in Finland', fi: 'Painettu Suomessa' } },
      ],
      sourceUrl: 'https://nordicbuddies.com/products/moomintroll-hoodie',
      fetchedAt: '2026-08-10',
    },
  },
  {
    slug: 'nb-kunnas-kalevala-tote',
    category: 'clothing',
    brand: 'Nordicbuddies',
    name: {
      en: 'Mauri Kunnas Canine Kalevala tote bag',
      fi: 'Mauri Kunnas Koirien Kalevala -kangaskassi',
    },
    description: {
      en: 'A cotton tote printed with Mauri Kunnas artwork from The Canine Kalevala, his dog retelling of the Finnish national epic. The cheapest thing in this shop that still explains a whole country.',
      fi: 'Puuvillainen kangaskassi Mauri Kunnaksen Koirien Kalevala -kuvituksella, hänen koiraversiollaan kansalliseepoksesta. Kaupan halvin tuote, joka silti selittää kokonaisen maan.',
    },
    priceFrom: 7.96,
    currency: 'EUR',
    priceCheckedAt: '2026-08-10',
    image: 'prod-nb-kunnas-kalevala-tote',
    imageIsPartner: true,
    partnerId: 'nordicbuddies',
    partnerProductUrl: 'https://nordicbuddies.com/products/mauri-kunnas-the-canine-kalevala-tote-bag',
    details: {
      specs: [
        { key: 'material', value: { en: '100 % cotton', fi: '100 % puuvilla' } },
        { key: 'size', value: { en: '38 x 42 cm', fi: '38 x 42 cm' } },
        {
          key: 'other',
          label: { en: 'Licence', fi: 'Lisenssi' },
          value: { en: 'Official Mauri Kunnas product', fi: 'Virallinen Mauri Kunnas -tuote' },
        },
      ],
      sourceUrl: 'https://nordicbuddies.com/products/mauri-kunnas-the-canine-kalevala-tote-bag',
      fetchedAt: '2026-08-10',
    },
  },
  // ── Suomikauppa (Daisycon 17977, 7 %) ──────────────────────────────────
  // Vesan 10.8. nimeämät osiot: Marimekko uutuutena, muumilakanat, kutomalangat
  // ("langat on hyvin suosittuja") ja saunatuotteet kesäkaudelle.
  //
  // 🔴 Nämä ovat brändejä joita EI OLE Adtractionissa (muisti 31.7.: "Ei
  // Adtractionissa: Marimekko/Iittala/Fiskars/Fazer/Moomin/Varusteleka").
  // Suomikauppa on ainoa reitti jolla ne tuottavat meille komissiota.
  //
  // Hinnat, materiaalit ja mitat luettu kaupan omasta tuotedatasta 2026-08-10,
  // kuvat kaupan omista tuotekuvista.
  {
    slug: 'sk-marimekko-unikko-crossbody',
    featured: true,
    category: 'design',
    brand: 'Marimekko',
    name: {
      en: 'Marimekko Neat Crossbody Unikko shoulder bag',
      fi: 'Marimekko Neat Crossbody Unikko -olkalaukku',
    },
    description: {
      en: 'The Unikko poppy on a crossbody bag sized for a phone, a wallet and a pair of gloves. Unikko was drawn in 1964 after Armi Ratia had banned floral prints, and it outlived the ban by sixty years.',
      fi: 'Unikko-kuosi olkalaukussa, johon mahtuu puhelin, lompakko ja hanskat. Unikko piirrettiin 1964 sen jälkeen kun Armi Ratia oli kieltänyt kukkakuosit, ja se on elänyt kieltoaan kuusikymmentä vuotta pidempään.',
    },
    priceFrom: 80.26,
    currency: 'EUR',
    priceCheckedAt: '2026-08-10',
    image: 'prod-sk-marimekko-unikko-crossbody',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl:
      'https://suomikauppa.fi/products/marimekko-neat-crossbody-unikko-m-shoulder-bag-blue-dark-blue',
    details: {
      specs: [
        { key: 'other', label: { en: 'Model', fi: 'Malli' }, value: { en: 'Neat Crossbody, size M', fi: 'Neat Crossbody, koko M' } },
        { key: 'other', label: { en: 'Pattern', fi: 'Kuosi' }, value: { en: 'Unikko, blue and dark blue', fi: 'Unikko, sininen ja tummansininen' } },
      ],
      sourceUrl:
        'https://suomikauppa.fi/products/marimekko-neat-crossbody-unikko-m-shoulder-bag-blue-dark-blue',
      fetchedAt: '2026-08-10',
    },
  },
  {
    slug: 'sk-moomin-duvet-set',
    category: 'design',
    brand: 'Moomin',
    name: {
      en: 'Moomin duvet cover set 150 x 210 cm, Sydänkäpyset',
      fi: 'Muumi pussilakanasetti 150 x 210 cm, Sydänkäpyset',
    },
    description: {
      en: 'A GOTS certified cotton duvet set printed with Moomintroll and Snorkmaiden. The Finnish name Sydänkäpyset has no clean translation, it is what you call two people who are soft on each other.',
      fi: 'GOTS-sertifioitu puuvillainen pussilakanasetti, jossa on Muumipeikko ja Niiskuneiti. Kuosin nimi Sydänkäpyset kertoo suhteesta, jota kuosi kuvaa.',
    },
    priceFrom: 56.48,
    currency: 'EUR',
    priceCheckedAt: '2026-08-10',
    image: 'prod-sk-moomin-duvet-set',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    badges: ['eco'],
    partnerProductUrl: 'https://suomikauppa.fi/products/muumi-pussilakanasetti-150x210cm-sydankapyset',
    details: {
      specs: [
        { key: 'size', value: { en: 'Duvet cover 150 x 210 cm', fi: 'Pussilakana 150 x 210 cm' } },
        {
          key: 'other',
          label: { en: 'Certification', fi: 'Sertifiointi' },
          value: {
            en: 'GOTS, the Global Organic Textile Standard',
            fi: 'GOTS eli Global Organic Textile Standard',
          },
        },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/muumi-pussilakanasetti-150x210cm-sydankapyset',
      fetchedAt: '2026-08-10',
    },
  },
  {
    slug: 'sk-novita-wonder-wool',
    category: 'handicrafts',
    brand: 'Novita',
    name: {
      en: 'Novita Wonder Wool DK yarn 50 g',
      fi: 'Novita Wonder Wool DK -villalanka 50 g',
    },
    description: {
      en: 'Pure wool DK yarn from Novita, the mill that has supplied Finnish knitters since 1928. A 50 gram ball holds 112 metres, and the recommended needle is 4 mm.',
      fi: 'Puhdasta villaa oleva DK-vahvuinen lanka Novitalta, joka on toimittanut suomalaisille neulojille lankaa vuodesta 1928. 50 gramman kerässä on 112 metriä, ja puikkosuositus on 4 mm.',
    },
    priceFrom: 4.61,
    currency: 'EUR',
    priceCheckedAt: '2026-08-10',
    image: 'prod-sk-novita-wonder-wool',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/novita-wonder-wool-dk-50g-villalanka-koski',
    details: {
      specs: [
        { key: 'material', value: { en: '100 % wool', fi: '100 % villaa' } },
        { key: 'weight', value: { en: '50 g ball, 112 m', fi: '50 g kerä, 112 m' } },
        {
          key: 'other',
          label: { en: 'Needle size', fi: 'Puikkosuositus' },
          value: { en: '4 mm', fi: '4 mm' },
        },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/novita-wonder-wool-dk-50g-villalanka-koski',
      fetchedAt: '2026-08-10',
    },
  },
  {
    slug: 'sk-aromageddon-sauna-scent',
    category: 'handicrafts',
    brand: 'Aromageddon',
    name: {
      en: 'Aromageddon sauna scent, Hankihorppy 15 ml',
      fi: 'Aromageddon Hankihörppy -saunatuoksu 15 ml',
    },
    description: {
      en: 'Mint and cocoa in a sauna scent, which sounds wrong until you have sat through a Finnish winter. Two to four drops go into a ladle of water, not onto the stones.',
      fi: 'Minttua ja kaakaota löylytuoksuna, mikä kuulostaa väärältä kunnes on istunut suomalaisen talven läpi. Kaksi tai neljä pisaraa kauhalliseen vettä, ei kiukaalle.',
    },
    priceFrom: 9.91,
    currency: 'EUR',
    priceCheckedAt: '2026-08-10',
    image: 'prod-sk-aromageddon-sauna-scent',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/aromageddon-hankihorppy-saunatuoksu-15ml',
    details: {
      specs: [
        { key: 'weight', value: { en: '15 ml', fi: '15 ml' } },
        {
          key: 'other',
          label: { en: 'Use', fi: 'Käyttö' },
          value: {
            en: '2 to 4 drops in a ladle of water',
            fi: '2-4 pisaraa löylykauhalliseen vettä',
          },
        },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/aromageddon-hankihorppy-saunatuoksu-15ml',
      fetchedAt: '2026-08-10',
    },
  },
  // ── Muumi-design Suomikaupan kautta (Daisycon 17977, 7 %) ──────────────
  // 🔴 Nama korvaavat kaksi shop.moomin.com-tuotetta jotka olivat design-sivun
  // KARJESSA ja tuottivat nolla (Vesa 12.8.: "tasta etusivulta ohjataan
  // edelleen moomin shoppiin? emme tienaa niista"). Moomin Shop ei ole missaan
  // affiliate-verkossa; Suomikauppa myy samaa Arabian Muumi-mukisarjaa ja on
  // Daisyconissa. Sama ostajakokemus, sama valmistaja, mutta tuottaa.
  //
  // 🔴 EI ole sama tuote vaan sama TUOTEPERHE: Blue Love -mukia ei ole
  // Suomikaupassa, joten mukia ei vaihdettu vaan korvattiin. Siksi nama ovat
  // omat rivinsa omilla teksteillaan eivatka vanhojen paalle kirjoitettuja.
  {
    slug: 'sk-muurla-moomin-bottle',
    featured: true,
    category: 'design',
    brand: 'Muurla',
    name: {
      en: 'Muurla Moomin glass bottle 1 l, Apples',
      fi: 'Muurla Muumi-lasipullo 1 l, Omenat',
    },
    description: {
      en: 'A soda-glass bottle with a patent stopper, for water or juice on the table rather than a carton. Dishwasher safe, one litre, and the Apples print is the summer one.',
      fi: 'Soodalasinen pullo patenttikorkilla, veden tai mehun tarjoiluun pöydässä tölkin sijaan. Konepesun kestävä, yksi litra, ja Omenat on kuoseista se kesäisin.',
    },
    priceFrom: 15.69,
    currency: 'EUR',
    priceCheckedAt: '2026-08-12',
    image: 'prod-sk-muurla-moomin-bottle-b2',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/muurla-muumi-lasipullo-1l-omenat',
    details: {
      specs: [
        { key: 'size', value: { en: '1 l', fi: '1 l' } },
        { key: 'material', value: { en: 'Soda glass, patent stopper', fi: 'Soodalasi, patenttikorkki' } },
        {
          key: 'other',
          label: { en: 'Care', fi: 'Hoito' },
          value: { en: 'Dishwasher safe', fi: 'Konepesun kestävä' },
        },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/muurla-muumi-lasipullo-1l-omenat',
      fetchedAt: '2026-08-12',
    },
  },
  {
    slug: 'nb-kunnas-kalevala-beanie',
    category: 'clothing',
    brand: 'Nordicbuddies',
    name: {
      en: 'The Canine Kalevala beanie',
      fi: 'Koirien Kalevala -pipo',
    },
    description: {
      en: 'Mauri Kunnas turned the Kalevala into a dog epic in 1992, and the beanie carries that artwork. Recycled polyester, one adult size, light enough to stuff in a coat pocket when the bus warms up.',
      fi: 'Mauri Kunnas käänsi Kalevalan koiraeepokseksi 1992, ja pipo kantaa sitä kuvitusta. Kierrätyspolyesteria, yksi aikuisten koko, ja niin kevyt että sen tunkee takin taskuun kun bussi lämpiää.',
    },
    priceFrom: 11.96,
    currency: 'EUR',
    priceCheckedAt: '2026-08-12',
    image: 'prod-nb-kunnas-kalevala-beanie',
    imageIsPartner: true,
    partnerId: 'nordicbuddies',
    partnerProductUrl: 'https://nordicbuddies.com/products/the-canine-kalevala-winter-hat-beanie-0983',
    details: {
      specs: [
        { key: 'material', value: { en: '100 % recycled polyester', fi: '100 % kierrätyspolyesteri' } },
        { key: 'size', value: { en: 'Adult, one size', fi: 'Aikuisten, yksi koko' } },
        {
          key: 'other',
          label: { en: 'Illustration', fi: 'Kuvitus' },
          value: { en: 'Mauri Kunnas, The Canine Kalevala', fi: 'Mauri Kunnas, Koirien Kalevala' },
        },
      ],
      sourceUrl: 'https://nordicbuddies.com/products/the-canine-kalevala-winter-hat-beanie-0983',
      fetchedAt: '2026-08-12',
    },
  },
  {
    slug: 'nb-little-my-mittens',
    category: 'clothing',
    brand: 'Nordicbuddies',
    name: {
      en: 'Little My mittens',
      fi: 'Pikku Myy -lapaset',
    },
    description: {
      en: 'The burgundy pair to the Moomintroll mittens, same fleece lining and same price. Two centimetres shorter in the cuff, and a character who suits anyone who finds Moomintroll a bit too agreeable.',
      fi: 'Viininpunainen pari Muumipeikko-lapasille, sama fleecevuori ja sama hinta. Varsi on kaksi senttiä lyhyempi, ja hahmo sopii sille, jonka mielestä Muumipeikko on vähän liian sovinnollinen.',
    },
    priceFrom: 19.9,
    currency: 'EUR',
    priceCheckedAt: '2026-08-12',
    image: 'prod-nb-little-my-mittens',
    imageIsPartner: true,
    partnerId: 'nordicbuddies',
    partnerProductUrl: 'https://nordicbuddies.com/products/little-my-mittens-2085',
    details: {
      specs: [
        { key: 'material', value: { en: '100 % acrylic, fleece lining', fi: '100 % akryyli, fleecevuori' } },
        {
          key: 'size',
          value: {
            en: 'Adult, height 22 cm, width 9.5 cm above the thumb',
            fi: 'Aikuisten koko, korkeus 22 cm, leveys peukalon yläpuolelta 9,5 cm',
          },
        },
        {
          key: 'other',
          label: { en: 'Licence', fi: 'Lisenssi' },
          value: { en: 'Official Moomin product', fi: 'Virallinen Muumi-tuote' },
        },
      ],
      sourceUrl: 'https://nordicbuddies.com/products/little-my-mittens-2085',
      fetchedAt: '2026-08-12',
    },
  },
  {
    slug: 'nb-kunnas-santa-mug',
    category: 'design',
    brand: 'Nordicbuddies',
    name: {
      en: 'Santa Claus take-away mug',
      fi: 'Joulupukki-takeaway-muki',
    },
    description: {
      en: 'Kunnas drew the Korvatunturi Santa the way Finnish children picture him, and here he is on a 450 ml cup made of PLA rather than fossil plastic. The silicone sleeve is what you hold when the coffee is too hot to carry bare-handed.',
      fi: 'Kunnas piirsi Korvatunturin pukin sellaisena kuin suomalaislapset sen näkevät, ja tässä hän on 450 millilitran mukissa, joka on PLA:ta eikä fossiilista muovia. Silikonivyöstä pidetään kiinni silloin kun kahvi on liian kuumaa paljaaseen käteen.',
    },
    priceFrom: 19.9,
    currency: 'EUR',
    priceCheckedAt: '2026-08-12',
    image: 'prod-nb-kunnas-santa-mug',
    imageIsPartner: true,
    partnerId: 'nordicbuddies',
    partnerProductUrl: 'https://nordicbuddies.com/products/santa-claus-take-away-mug',
    details: {
      specs: [
        { key: 'size', value: { en: '450 ml', fi: '450 ml' } },
        {
          key: 'material',
          value: {
            en: 'PLA cup and lid, food-grade silicone sleeve',
            fi: 'Muki ja kansi PLA:ta, vyö elintarvikelaatuista silikonia',
          },
        },
        {
          key: 'other',
          label: { en: 'Illustration', fi: 'Kuvitus' },
          value: { en: 'Mauri Kunnas', fi: 'Mauri Kunnas' },
        },
      ],
      sourceUrl: 'https://nordicbuddies.com/products/santa-claus-take-away-mug',
      fetchedAt: '2026-08-12',
    },
  },
  {
    slug: 'nb-little-my-thermal-bottle',
    category: 'design',
    brand: 'Nordicbuddies',
    name: {
      en: 'Little My thermal bottle 0.55 l',
      fi: 'Pikku Myy -termospullo 0,55 l',
    },
    description: {
      en: 'Double-walled steel, 550 millilitres, and the manufacturer puts the hot-hold at six hours. That is roughly one snowmobile safari, which is the practical test this bottle gets bought for.',
      fi: 'Kaksinkertainen terässeinä, 550 millilitraa, ja valmistaja lupaa juoman pysyvän kuumana kuutisen tuntia. Se on suunnilleen yksi moottorikelkkasafari, eli juuri se koe, jota varten tämä pullo ostetaan.',
    },
    priceFrom: 34.9,
    currency: 'EUR',
    priceCheckedAt: '2026-08-12',
    image: 'prod-nb-little-my-thermal-bottle',
    imageIsPartner: true,
    partnerId: 'nordicbuddies',
    partnerProductUrl: 'https://nordicbuddies.com/products/little-my-thermal-everyday-bottle-1',
    details: {
      specs: [
        { key: 'size', value: { en: '550 ml', fi: '550 ml' } },
        {
          key: 'material',
          value: {
            en: 'Stainless steel, PP lid, silicone seal',
            fi: 'Ruostumaton teräs, PP-kansi, silikonitiiviste',
          },
        },
        {
          key: 'other',
          label: { en: 'Keeps hot', fi: 'Pitää kuumana' },
          value: { en: 'Six hours per the maker', fi: 'Valmistajan mukaan kuusi tuntia' },
        },
      ],
      sourceUrl: 'https://nordicbuddies.com/products/little-my-thermal-everyday-bottle-1',
      fetchedAt: '2026-08-12',
    },
  },
  {
    slug: 'nb-little-my-neckpillow',
    category: 'design',
    brand: 'Nordicbuddies',
    name: {
      en: 'Little My neck pillow',
      fi: 'Pikku Myy -niskatyyny',
    },
    description: {
      en: 'Memory foam under a soft cover, for the Helsinki–Rovaniemi night train or the flight home. Small enough to clip on a bag, which is the only version of a travel pillow anyone actually keeps.',
      fi: 'Muistivaahtoa pehmeän päällisen alla, Helsinki–Rovaniemi-yöjunaan tai kotimatkan lennolle. Sen verran pieni, että sen saa kiinni laukkuun, mikä on ainoa matkatyynytyyppi, joka oikeasti pysyy mukana.',
    },
    priceFrom: 24.9,
    currency: 'EUR',
    priceCheckedAt: '2026-08-12',
    image: 'prod-nb-little-my-neckpillow',
    imageIsPartner: true,
    partnerId: 'nordicbuddies',
    partnerProductUrl: 'https://nordicbuddies.com/products/little-my-neckpillow',
    details: {
      specs: [
        { key: 'material', value: { en: 'Memory foam, soft cover', fi: 'Muistivaahto, pehmeä päällinen' } },
        {
          key: 'other',
          label: { en: 'Licence', fi: 'Lisenssi' },
          value: { en: 'Official Moomin product', fi: 'Virallinen Muumi-tuote' },
        },
      ],
      sourceUrl: 'https://nordicbuddies.com/products/little-my-neckpillow',
      fetchedAt: '2026-08-12',
    },
  },
  {
    slug: 'nb-moomintroll-love-cushion',
    category: 'design',
    brand: 'Nordicbuddies',
    name: {
      en: 'Moomintroll Love cushion',
      fi: 'Muumipeikko Love -tyyny',
    },
    description: {
      en: 'A shaped Moomintroll cushion rather than a square with a print on it, sold in several sizes from 45 to 75 centimetres tall. The kind of thing that ends up on a cabin sofa and stays there.',
      fi: 'Muumipeikon muotoinen tyyny, ei neliö, jossa on kuva, ja saatavana useassa koossa 45:stä 75 senttiin. Sellainen tavara, joka päätyy mökin sohvalle ja jää sinne.',
    },
    priceFrom: 39.9,
    currency: 'EUR',
    priceCheckedAt: '2026-08-12',
    image: 'prod-nb-moomintroll-love-cushion',
    imageIsPartner: true,
    partnerId: 'nordicbuddies',
    partnerProductUrl: 'https://nordicbuddies.com/products/moomintroll-love-cushion',
    details: {
      specs: [
        { key: 'material', value: { en: 'Polyester', fi: 'Polyesteri' } },
        {
          key: 'size',
          value: {
            en: 'Several sizes, 45–75 cm tall',
            fi: 'Useita kokoja, korkeus 45–75 cm',
          },
        },
        {
          key: 'other',
          label: { en: 'Licence', fi: 'Lisenssi' },
          value: { en: 'Official Moomin product', fi: 'Virallinen Muumi-tuote' },
        },
      ],
      sourceUrl: 'https://nordicbuddies.com/products/moomintroll-love-cushion',
      fetchedAt: '2026-08-12',
    },
  },
  {
    slug: 'nb-little-my-poster',
    category: 'design',
    brand: 'Nordicbuddies',
    name: {
      en: 'Little My poster',
      fi: 'Pikku Myy -juliste',
    },
    description: {
      en: 'Designed and printed in Helsinki on 200-gram silk paper, in 30 × 40 or 50 × 70. A poster rolls into a tube and weighs nothing, which is more than can be said for most things people carry home from Lapland.',
      fi: 'Suunniteltu ja painettu Helsingissä 200 gramman silkkipaperille, koossa 30 × 40 tai 50 × 70. Julisteen saa rullalle hylsyyn eikä se paina mitään, mitä ei voi sanoa useimmista Lapista kotiin raahatuista tavaroista.',
    },
    priceFrom: 16.9,
    currency: 'EUR',
    priceCheckedAt: '2026-08-12',
    image: 'prod-nb-little-my-poster',
    imageIsPartner: true,
    partnerId: 'nordicbuddies',
    partnerProductUrl: 'https://nordicbuddies.com/products/little-my-poster',
    details: {
      specs: [
        { key: 'material', value: { en: 'Silk paper, 200 g', fi: 'Silkkipaperi, 200 g' } },
        { key: 'size', value: { en: '30 × 40 cm or 50 × 70 cm', fi: '30 × 40 cm tai 50 × 70 cm' } },
        {
          key: 'other',
          label: { en: 'Made in', fi: 'Valmistus' },
          value: { en: 'Designed and printed in Helsinki', fi: 'Suunniteltu ja painettu Helsingissä' },
        },
      ],
      sourceUrl: 'https://nordicbuddies.com/products/little-my-poster',
      fetchedAt: '2026-08-12',
    },
  },
  {
    slug: 'nb-moomin-novels-poster',
    category: 'design',
    brand: 'Nordicbuddies',
    name: {
      en: 'Moomin novels poster',
      fi: 'Muumikirjat-juliste',
    },
    description: {
      en: 'The covers of Tove Jansson’s Moomin novels on one sheet, same Helsinki printing and same two sizes as the character posters. For the reader in the family rather than the collector of mugs.',
      fi: 'Tove Janssonin muumikirjojen kannet yhdessä arkissa, sama helsinkiläinen painatus ja samat kaksi kokoa kuin hahmojulisteissa. Perheen lukijalle, ei mukienkerääjälle.',
    },
    priceFrom: 16.9,
    currency: 'EUR',
    priceCheckedAt: '2026-08-12',
    image: 'prod-nb-moomin-novels-poster',
    imageIsPartner: true,
    partnerId: 'nordicbuddies',
    partnerProductUrl: 'https://nordicbuddies.com/products/moomin-novels-poster',
    details: {
      specs: [
        { key: 'material', value: { en: 'Silk paper, 200 g', fi: 'Silkkipaperi, 200 g' } },
        { key: 'size', value: { en: '30 × 40 cm or 50 × 70 cm', fi: '30 × 40 cm tai 50 × 70 cm' } },
        {
          key: 'other',
          label: { en: 'Made in', fi: 'Valmistus' },
          value: { en: 'Designed and printed in Helsinki', fi: 'Suunniteltu ja painettu Helsingissä' },
        },
      ],
      sourceUrl: 'https://nordicbuddies.com/products/moomin-novels-poster',
      fetchedAt: '2026-08-12',
    },
  },
  {
    slug: 'sk-finland-beanie',
    category: 'clothing',
    brand: 'Tammer',
    name: {
      en: 'Finland beanie, blue and white',
      fi: 'Finland-pipo, sinivalkoinen',
    },
    description: {
      en: 'The blue-and-white bobble hat with FINLAND across the band, the one worn in the stands and then for the rest of the winter. Machine wash at 30.',
      fi: 'Sinivalkoinen tupsupipo, jossa lukee FINLAND. Se katsomopipo, joka jää päähän lopputalveksi. Vesipesu 30 astetta.',
    },
    priceFrom: 16.19,
    currency: 'EUR',
    priceCheckedAt: '2026-08-12',
    image: 'prod-sk-finland-beanie',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/finland-pipo-sinivalkoinen',
    details: {
      specs: [
        { key: 'other', label: { en: 'Text', fi: 'Teksti' }, value: { en: 'FINLAND', fi: 'FINLAND' } },
        { key: 'other', label: { en: 'Care', fi: 'Hoito' }, value: { en: 'Machine wash 30 °C', fi: 'Vesipesu 30 °C' } },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/finland-pipo-sinivalkoinen',
      fetchedAt: '2026-08-12',
    },
  },
  {
    slug: 'sk-finland-tube-scarf',
    category: 'clothing',
    brand: 'Tammer',
    name: {
      en: 'Finland tube scarf',
      fi: 'Suomi-putkihuivi',
    },
    description: {
      en: 'A seamless tube in the Finnish flag pattern, pulled up over the face when the wind comes off the fell. Under seven euros, which is why people buy three.',
      fi: 'Saumaton putki Suomen lipun kuviolla, vedetään kasvoille kun tuntureilta tulee viima. Alle seitsemän euroa, mistä syystä niitä ostetaan kolme.',
    },
    priceFrom: 6.78,
    currency: 'EUR',
    priceCheckedAt: '2026-08-12',
    image: 'prod-sk-finland-tube-scarf',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/putkihuivi-sinivalkoinen',
    details: {
      specs: [
        {
          key: 'other',
          label: { en: 'Pattern', fi: 'Kuvio' },
          value: { en: 'Finnish flag', fi: 'Suomen lippu' },
        },
        { key: 'other', label: { en: 'Care', fi: 'Hoito' }, value: { en: 'Hand wash', fi: 'Käsinpesu' } },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/putkihuivi-sinivalkoinen',
      fetchedAt: '2026-08-12',
    },
  },
  {
    slug: 'sk-little-my-sauna-cushion',
    category: 'handicrafts',
    brand: 'Emendo',
    name: {
      en: 'Emendo Little My sauna cushion',
      fi: 'Emendo Pikku Myy -saunatyyny',
    },
    description: {
      en: 'A sauna seat cushion drawn from Tove Jansson’s original artwork, made under licence by Emendo. The thing that stands between you and a bench at ninety degrees.',
      fi: 'Saunatyyny, jonka kuvitus on Tove Janssonin alkuperäispiirustuksista, Emendon lisenssituotantoa. Se, mikä on sinun ja yhdeksänkymmenen asteen lauteen välissä.',
    },
    priceFrom: 27.48,
    currency: 'EUR',
    priceCheckedAt: '2026-08-12',
    image: 'prod-sk-little-my-sauna-cushion',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/emendo-pikku-myy-saunatyyny',
    details: {
      specs: [
        {
          key: 'other',
          label: { en: 'Artwork', fi: 'Kuvitus' },
          value: {
            en: 'From Tove Jansson’s original drawings',
            fi: 'Tove Janssonin alkuperäispiirustuksista',
          },
        },
        {
          key: 'other',
          label: { en: 'Licence', fi: 'Lisenssi' },
          value: { en: 'Official Moomin Characters product', fi: 'Virallinen Moomin Characters -lisenssituote' },
        },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/emendo-pikku-myy-saunatyyny',
      fetchedAt: '2026-08-12',
    },
  },
  {
    slug: 'sk-rento-sauna-hat',
    category: 'handicrafts',
    brand: 'Rento',
    name: {
      en: 'Rento linen-terry sauna hat',
      fi: 'Rento saunahattu, pellavafrotee',
    },
    description: {
      en: 'Linen terry, which keeps the heat off your scalp and hair on the top bench. It also works the other way round: in an outdoor hot tub in February it keeps your head warm. Machine wash at 60.',
      fi: 'Pellavafroteeta, joka pitää löylyn kuumuuden poissa päänahasta ja hiuksista ylälauteella. Toimii myös toisin päin: helmikuun paljussa se pitää pään lämpimänä. Vesipesu 60 astetta.',
    },
    priceFrom: 32.5,
    currency: 'EUR',
    priceCheckedAt: '2026-08-12',
    image: 'prod-sk-rento-sauna-hat',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/rento-saunahattu-pellavafrotee-ruskea',
    details: {
      specs: [
        { key: 'material', value: { en: 'Linen terry', fi: 'Pellavafrotee' } },
        { key: 'other', label: { en: 'Care', fi: 'Hoito' }, value: { en: 'Machine wash 60 °C', fi: 'Vesipesu 60 °C' } },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/rento-saunahattu-pellavafrotee-ruskea',
      fetchedAt: '2026-08-12',
    },
  },
  {
    slug: 'sk-rento-birch-whisk',
    category: 'handicrafts',
    brand: 'Rento',
    name: {
      en: 'Rento dried birch whisk',
      fi: 'Rento kuivattu saunavihta, koivu',
    },
    description: {
      en: 'A dried birch whisk, soaked in warm water before the sauna so the leaves and the smell come back. Whisking is the part of the sauna that visitors always ask about and rarely try.',
      fi: 'Kuivattu koivuvihta, liotetaan lämpimässä vedessä ennen saunaa jolloin lehdet ja tuoksu palaavat. Vihtominen on se saunan osa, jota vieraat aina kysyvät ja harvoin kokeilevat.',
    },
    priceFrom: 12.42,
    currency: 'EUR',
    priceCheckedAt: '2026-08-12',
    image: 'prod-sk-rento-birch-whisk',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/rento-kuivattu-saunavihta-koivu',
    details: {
      specs: [
        { key: 'material', value: { en: 'Dried birch', fi: 'Kuivattu koivu' } },
        {
          key: 'other',
          label: { en: 'Before use', fi: 'Ennen käyttöä' },
          value: { en: 'Soak before the sauna', fi: 'Liota ennen saunomista' },
        },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/rento-kuivattu-saunavihta-koivu',
      fetchedAt: '2026-08-12',
    },
  },
  {
    slug: 'sk-suomi-hockey-jersey',
    category: 'clothing',
    brand: 'Mikebon',
    name: {
      en: 'Finland supporter jersey',
      fi: 'Suomi-fanipaita',
    },
    description: {
      en: 'The blue-and-white supporter shirt with SUOMI across the chest and the lion crest, in the cut people actually wear to a game. Breathable, sized M to XXL, and the thing every Finnish household seems to own one of by February.',
      fi: 'Sinivalkoinen fanipaita, jossa on SUOMI rinnassa ja leijonalogo. Hengittävä materiaali, koot M–XXL. Se paita, joka helmikuuhun mennessä tuntuu löytyvän joka suomalaisesta kaapista.',
    },
    priceFrom: 50.07,
    currency: 'EUR',
    priceCheckedAt: '2026-08-12',
    image: 'prod-sk-suomi-hockey-jersey',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/suomi-fanipaita-aikuisten-sinivalkoinen',
    details: {
      specs: [
        { key: 'size', value: { en: 'M–XXL', fi: 'M–XXL' } },
        {
          key: 'other',
          label: { en: 'Print', fi: 'Painatus' },
          value: { en: 'SUOMI and the lion crest', fi: 'SUOMI ja leijonalogo' },
        },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/suomi-fanipaita-aikuisten-sinivalkoinen',
      fetchedAt: '2026-08-12',
    },
  },
  {
    slug: 'sk-marimekko-unikko-bath-towel',
    category: 'design',
    brand: 'Marimekko',
    name: {
      en: 'Marimekko Unikko bath towel 70 × 150 cm',
      fi: 'Marimekko Unikko -kylpypyyhe 70 × 150 cm',
    },
    description: {
      en: 'Unikko on terry cotton, beige and white, in the full 70 by 150 size. The yarn is 65 % organic cotton and 35 % recycled, the recycled part coming from Marimekko’s own cutting waste.',
      fi: 'Unikko froteepuuvillalla, beige-valkoinen, täydessä 70 × 150 -koossa. Lanka on 65 % luomupuuvillaa ja 35 % kierrätettyä, ja kierrätetty osuus tulee Marimekon omasta leikkuujätteestä.',
    },
    priceFrom: 56.41,
    currency: 'EUR',
    priceCheckedAt: '2026-08-12',
    image: 'prod-sk-marimekko-unikko-bath-towel',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/marimekko-unikko-kylpypyyhe-70-150-cm-beige-valkoinen',
    details: {
      specs: [
        { key: 'size', value: { en: '70 × 150 cm', fi: '70 × 150 cm' } },
        {
          key: 'material',
          value: {
            en: 'Terry cotton, 65 % organic and 35 % recycled',
            fi: 'Froteepuuvilla, 65 % luomua ja 35 % kierrätettyä',
          },
        },
        {
          key: 'other',
          label: { en: 'Pattern', fi: 'Kuosi' },
          value: { en: 'Unikko, beige and white', fi: 'Unikko, beige-valkoinen' },
        },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/marimekko-unikko-kylpypyyhe-70-150-cm-beige-valkoinen',
      fetchedAt: '2026-08-12',
    },
  },
  {
    slug: 'sk-marimekko-unikko-hand-towel',
    category: 'design',
    brand: 'Marimekko',
    name: {
      en: 'Marimekko Unikko hand towel 50 × 70 cm',
      fi: 'Marimekko Unikko -käsipyyhe 50 × 70 cm',
    },
    description: {
      en: 'The same Unikko terry in hand-towel size, half the price of the bath one and the easier thing to fit in a case. Beige and white, 65 % organic cotton and 35 % recycled.',
      fi: 'Sama Unikko-frotee käsipyyhkeen koossa, puolet kylpypyyhkeen hinnasta ja huomattavasti helpompi mahduttaa matkalaukkuun. Beige-valkoinen, 65 % luomupuuvillaa ja 35 % kierrätettyä.',
    },
    priceFrom: 27.55,
    currency: 'EUR',
    priceCheckedAt: '2026-08-12',
    image: 'prod-sk-marimekko-unikko-hand-towel',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/marimekko-unikko-kasipyyhe-50-70-cm-beige-valkoinen',
    details: {
      specs: [
        { key: 'size', value: { en: '50 × 70 cm', fi: '50 × 70 cm' } },
        {
          key: 'material',
          value: {
            en: 'Terry cotton, 65 % organic and 35 % recycled',
            fi: 'Froteepuuvilla, 65 % luomua ja 35 % kierrätettyä',
          },
        },
        {
          key: 'other',
          label: { en: 'Pattern', fi: 'Kuosi' },
          value: { en: 'Unikko, beige and white', fi: 'Unikko, beige-valkoinen' },
        },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/marimekko-unikko-kasipyyhe-50-70-cm-beige-valkoinen',
      fetchedAt: '2026-08-12',
    },
  },
  {
    slug: 'fl-taistelevat-metsot',
    category: 'design',
    brand: 'Finlayson',
    name: {
      en: 'Taistelevat metsot satin duvet set, double',
      fi: 'Taistelevat metsot -satiinipussilakanasetti, parivuoteen',
    },
    description: {
      en: 'Ferdinand von Wright painted the fighting capercaillies in 1886 and it became one of the paintings every Finn can name. Finlayson prints it on satin cotton, digitally so the colours hold, with a plain reverse and the print on both sides of the pillowcases.',
      fi: 'Ferdinand von Wright maalasi taistelevat metsot vuonna 1886, ja siitä tuli teos, jonka jokainen suomalainen tunnistaa. Finlayson painaa sen satiinipuuvillalle digitaalisesti niin että värit toistuvat tarkasti. Peiton kääntöpuoli on yksivärinen, ja tyynyliinoissa printti on molemmin puolin.',
    },
    priceFrom: 169.95,
    currency: 'EUR',
    priceCheckedAt: '2026-08-12',
    image: 'prod-fl-taistelevat-metsot',
    imageIsPartner: true,
    partnerId: 'finlayson',
    partnerProductUrl:
      'https://www.finlayson.fi/products/taistelevat-metsot-parivuoteen-satiinipussilakanasetti',
    details: {
      specs: [
        { key: 'material', value: { en: 'Satin cotton', fi: 'Satiinipuuvilla' } },
        { key: 'size', value: { en: 'Double', fi: 'Parivuoteen koko' } },
        {
          key: 'other',
          label: { en: 'Artwork', fi: 'Teos' },
          value: {
            en: 'Ferdinand von Wright, The Fighting Capercaillies (1886)',
            fi: 'Ferdinand von Wright, Taistelevat metsot (1886)',
          },
        },
      ],
      sourceUrl:
        'https://www.finlayson.fi/products/taistelevat-metsot-parivuoteen-satiinipussilakanasetti',
      fetchedAt: '2026-08-12',
    },
  },
  {
    slug: 'fl-lino-linen-duvet-set',
    category: 'design',
    brand: 'Finlayson',
    name: {
      en: 'Lino linen duvet set',
      fi: 'Lino-pellavapussilakanasetti',
    },
    description: {
      en: 'Washed linen with an embroidered edge, in lichen green or tar brown. Linen is heavy and falls stiffer than cotton, and it gets softer with every wash rather than wearing out.',
      fi: 'Pestyä pellavaa brodeeratulla reunalla, jäkälänvihreänä tai tervanruskeana. Pellava on painavaa ja laskeutuu jäykemmin kuin puuvilla, ja se pehmenee joka pesussa sen sijaan että kuluisi.',
    },
    priceFrom: 199.95,
    currency: 'EUR',
    priceCheckedAt: '2026-08-12',
    image: 'prod-fl-lino-linen-duvet-set',
    imageIsPartner: true,
    partnerId: 'finlayson',
    partnerProductUrl: 'https://www.finlayson.fi/products/lino-pellavapussilakanasetti-4',
    details: {
      specs: [
        { key: 'material', value: { en: 'Linen', fi: 'Pellava' } },
        {
          key: 'size',
          value: {
            en: '240 × 210 + 50 × 60 cm, or 150 × 210 + 50 × 60 cm',
            fi: '240 × 210 + 50 × 60 cm tai 150 × 210 + 50 × 60 cm',
          },
        },
        {
          key: 'other',
          label: { en: 'Colours', fi: 'Sävyt' },
          value: { en: 'Lichen green or tar brown', fi: 'Jäkälänvihreä tai terva' },
        },
      ],
      sourceUrl: 'https://www.finlayson.fi/products/lino-pellavapussilakanasetti-4',
      fetchedAt: '2026-08-12',
    },
  },
  {
    slug: 'fl-elefantti-duvet-set',
    category: 'design',
    brand: 'Finlayson',
    name: {
      en: 'Elefantti duvet set, dark green',
      fi: 'Elefantti-pussilakanasetti, tummanvihreä',
    },
    description: {
      en: 'Laina Koskela drew Elefantti in 1969 for a design competition Finlayson ran with the Institute of Industrial Arts, and it has stayed in production since. Cotton percale at 152 threads per inch, which is why it feels cool rather than soft.',
      fi: 'Laina Koskela piirsi Elefantin vuonna 1969 Finlaysonin ja Taideteollisen oppilaitoksen suunnittelukilpailuun, ja se on ollut tuotannossa siitä asti. Puuvillapalttinaa, lankaluku 152, mistä syystä se tuntuu iholla viileältä eikä pehmeältä.',
    },
    priceFrom: 124.95,
    currency: 'EUR',
    priceCheckedAt: '2026-08-12',
    image: 'prod-fl-elefantti-duvet-set',
    imageIsPartner: true,
    partnerId: 'finlayson',
    partnerProductUrl: 'https://www.finlayson.fi/products/elefantti-pussilakanasetti-6',
    details: {
      specs: [
        { key: 'material', value: { en: 'Cotton percale, 152 TC', fi: 'Puuvillapalttina, 152 TC' } },
        { key: 'size', value: { en: '240 × 210 + 50 × 60 cm', fi: '240 × 210 + 50 × 60 cm' } },
        {
          key: 'other',
          label: { en: 'Design', fi: 'Suunnittelu' },
          value: { en: 'Laina Koskela, 1969', fi: 'Laina Koskela, 1969' },
        },
      ],
      sourceUrl: 'https://www.finlayson.fi/products/elefantti-pussilakanasetti-6',
      fetchedAt: '2026-08-12',
    },
  },
  {
    slug: 'fl-reino-bath-towel',
    category: 'design',
    brand: 'Finlayson',
    name: {
      en: 'Reino bath towel 80 × 160 cm',
      fi: 'Reino-kylpypyyhe 80 × 160 cm',
    },
    description: {
      en: 'GOTS-certified organic cotton, woven from a fine plied yarn so it dries fast instead of staying damp on the hook. Full bath size, in brown or pink.',
      fi: 'GOTS-sertifioitua luomupuuvillaa, kudottu ohuesta kerratusta langasta jotta se kuivuu nopeasti eikä jää kostumaan koukkuun. Täysi kylpypyyhkeen koko, ruskeana tai pinkkinä.',
    },
    priceFrom: 49.95,
    currency: 'EUR',
    priceCheckedAt: '2026-08-12',
    image: 'prod-fl-reino-bath-towel',
    imageIsPartner: true,
    partnerId: 'finlayson',
    partnerProductUrl: 'https://www.finlayson.fi/products/reino-kylpypyyhe',
    details: {
      specs: [
        { key: 'size', value: { en: '80 × 160 cm', fi: '80 × 160 cm' } },
        {
          key: 'material',
          value: {
            en: '100 % organic cotton, GOTS certified',
            fi: '100 % luomupuuvillaa, GOTS-sertifioitu',
          },
        },
        {
          key: 'other',
          label: { en: 'Colours', fi: 'Sävyt' },
          value: { en: 'Brown or pink', fi: 'Ruskea tai pinkki' },
        },
      ],
      sourceUrl: 'https://www.finlayson.fi/products/reino-kylpypyyhe',
      fetchedAt: '2026-08-12',
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
