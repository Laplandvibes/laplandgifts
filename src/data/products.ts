import type { Product } from './types'
// 🔴 Pääte `.ts` on pakollinen. scripts/build-routes-json.mjs importoi tämän
// tiedoston suoraan Nodella, joka purkaa tyypit muttei arvaa päätteitä:
// pääteetön arvo-import kaataa koko buildin ERR_MODULE_NOT_FOUNDiin. Muut
// tämän tiedoston importit ovat tyyppi-importteja, jotka häviävät käännöksessä,
// joten ongelma ei ole näkynyt aiemmin. tsconfig sallii päätteen
// (allowImportingTsExtensions).

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
    priceFrom: 175,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
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
      en: 'Iittala Kivi votive 60 mm, grey',
      fi: 'Iittala Kivi -kynttilälyhty 60 mm, harmaa',
    },
    description: {
      en: 'A pressed glass votive by Heikki Orvola, 6 cm tall, that turns one tealight into a block of colour. It is the cheapest way to own a piece of Iittala and it survives hand luggage.',
      fi: 'Heikki Orvolan puristelasinen kynttilälyhty, korkeus 6 cm, joka muuttaa yhden lämpökynttilän värilliseksi palikaksi. Halvin tapa omistaa pala Iittalaa, ja kestää käsimatkatavaroissa.',
    },
    priceFrom: 14,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-iittala-kivi-candleholder',
    imageIsPartner: true,
    partnerId: 'nordicnest',
    partnerProductUrl: 'https://www.nordicnest.fi/tuotemerkit/iittala/kivi-kynttilalyhty/?variantId=1003-03',
    details: {
      specs: [
        { key: 'size', value: { en: '6.5 x 6.5 cm, height 6 cm', fi: '6,5 x 6,5 cm, korkeus 6 cm' } },
        { key: 'material', value: { en: 'Glass', fi: 'Lasi' } },
        { key: 'color', value: { en: 'Grey', fi: 'Harmaa' } },
        { key: 'weight', value: { en: '0.338 kg gross', fi: '0,338 kg bruttopaino' } },
        { key: 'care', value: { en: 'Hand wash only', fi: 'Vain käsinpesu' } },
        { key: 'other', label: { en: 'Designer and collection', fi: 'Suunnittelija ja sarja' }, value: { en: 'Heikki Orvola, Iittala Kivi', fi: 'Heikki Orvola, Iittala Kivi' } },
        { key: 'other', label: { en: 'Item number and EAN', fi: 'Tuotenumero ja EAN' }, value: { en: '1003-03, EAN 6411920039676', fi: '1003-03, EAN 6411920039676' } },
      ],
      sourceUrl: 'https://www.nordicnest.fi/tuotemerkit/iittala/kivi-kynttilalyhty/?variantId=1003-03',
      fetchedAt: '2026-11-06',
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
    priceFrom: 17.5,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
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
    priceFrom: 89.95,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
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
      en: 'Marttiini Lapinleuku 255',
      fi: 'Marttiini Lapinleuku 255',
    },
    description: {
      en: 'The traditional Lapland knife (lapinleuku), 27 cm overall, with a stainless blade, a varnished curly birch handle and a leather sheath. Marttiini makes its knives in Rovaniemi, and this version of the model has a finger guard.',
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
      en: 'Kupilka 21 camp cup 2.1 dl',
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
    priceCheckedAt: '2026-11-06',
    image: 'prod-pentik-posio-mug',
    imageIsPartner: true,
    partnerId: 'pentik',
    partnerProductUrl: 'https://www.pentik.com/en/products/posio-mug-red-0-3-l',
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
      sourceUrl: 'https://www.pentik.com/en/products/posio-mug-red-0-3-l',
      fetchedAt: '2026-11-06',
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
    priceCheckedAt: '2026-11-06',
    image: 'prod-pentik-tunturiretki-studio-dish',
    imageIsPartner: true,
    partnerId: 'pentik',
    partnerProductUrl: 'https://www.pentik.com/en/products/tunturiretki-winter-triangle-dish-deep-blue-19-cm',
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
      sourceUrl: 'https://www.pentik.com/en/products/tunturiretki-winter-triangle-dish-deep-blue-19-cm',
      fetchedAt: '2026-11-06',
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
    priceFrom: 6.58,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
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
      en: 'Fazer Geisha chocolate bars 37 g, 5-pack',
      fi: 'Fazer Geisha -suklaapatukat 37 g, 5 kpl',
    },
    description: {
      en: 'Five 37 g Geisha bars, with Fazer milk chocolate around a crisp hazelnut nougat filling. Fazer states the chocolate is made without palm oil.',
      fi: 'Viisi 37 gramman Geisha-patukkaa, joissa Fazerin maitosuklaa ympäröi rapeaa hasselpähkinänougat-täytettä. Fazer ilmoittaa suklaan valmistetuksi ilman palmuöljyä.',
    },
    priceFrom: 11.61,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-fazer-geisha-chocolate-bar',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/fazer-geisha-hasselpahkinanougat-suklaapatukka-37g-5-pack',
    details: {
      specs: [
        { key: 'weight', value: { en: '5 x 37 g', fi: '5 x 37 g' } },
        { key: 'contents', value: { en: 'Milk chocolate with at least 30 % cocoa, hazelnut nougat filling 11 % hazelnuts', fi: 'Maitosuklaassa vähintään 30 % kaakaota, hasselpähkinänougat-täytteessä 11 % hasselpähkinää' } },
        { key: 'other', label: { en: 'Nutrition per 100 g', fi: 'Ravintosisältö per 100 g' }, value: { en: 'Energy 550 kcal / 2303 kJ, fat 35 g, saturates 17 g, carbohydrate 51 g, sugars 49 g, protein 8 g, salt 0.19 g', fi: 'Energia 550 kcal / 2303 kJ, rasva 35 g, tyydyttyneitä 17 g, hiilihydraatit 51 g, sokereita 49 g, proteiini 8 g, suola 0,19 g' } },
      ],
      ingredients: {
        en: 'Sugar, MILK, cocoa butter, HAZELNUTS (11 %), cocoa mass, whole MILK powder, buttermilk powder, WHEAT flour, maize starch, emulsifier (SOY lecithin), sunflower oil, salt, flavourings.',
        fi: 'Sokeri, MAITO, kaakaovoi, HASSELPÄHKINÄT (11 %), kaakaomassa, täysMAITOjauhe, kirnuMAITOjauhe, VEHNÄjauho, maissitärkkelys, emulgointiaine (SOIJAlesitiini), auringonkukkaöljy, suola, aromit.',
      },
      allergens: {
        en: 'Contains: nuts, cereals containing gluten and products thereof, milk, hazelnut, soybeans, wheat, lactose, maize, cocoa. May contain: almonds, rye, oats, other nuts and other cereals containing gluten.',
        fi: 'Sisältää: pähkinät, gluteenia sisältävät viljat ja niistä valmistetut tuotteet, maito, hasselpähkinä, soijapavut, vehnä, laktoosi, maissi, kaakao. Saattaa sisältää: mantelit, ruis, kaura, muut pähkinät ja muut gluteenia sisältävät viljat.',
      },
      sourceUrl: 'https://suomikauppa.fi/products/fazer-geisha-hasselpahkinanougat-suklaapatukka-37g-5-pack',
      fetchedAt: '2026-11-06',
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
    priceFrom: 4.96,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
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

  // ── superfoods ────────────────────────────────────────────────────────────
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
    priceCheckedAt: '2026-09-05',
    image: 'prod-arctic-warriors-spruce-sprout-powder',
    imageIsPartner: true,
    // 5.9.2026: sama tuote Ruohonjuuren (Adtraction) kautta → komissio; suora
    // arcticwarriors.fi-linkki ei maksanut mitään. Specit typistetty siihen mitä
    // Ruohonjuuren tuotesivu sanoo.
    partnerId: 'ruohonjuuri',
    partnerProductUrl: 'https://www.ruohonjuuri.fi/products/arctic-warriors-kuusenkerkkajauhe-40-g',
    featured: true,
    details: {
      specs: [
        { key: 'weight', value: { en: '40 g', fi: '40 g' } },
        { key: 'contents', value: { en: 'Freeze dried spruce sprout', fi: 'Pakastekuivattua kuusenkerkkää' } },
        { key: 'other', label: { en: 'Vitamin C', fi: 'C-vitamiini' }, value: { en: '382 mg per 100 g', fi: '382 mg / 100 g' } },
      ],
      sourceUrl: 'https://www.ruohonjuuri.fi/products/arctic-warriors-kuusenkerkkajauhe-40-g',
      fetchedAt: '2026-09-05',
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
    priceCheckedAt: '2026-09-05',
    image: 'prod-arctic-warriors-roseroot-elixir',
    imageIsPartner: true,
    // 5.9.2026: sama tuote Ruohonjuuren (Adtraction) kautta → komissio; suora
    // arcticwarriors.fi-linkki ei maksanut mitään. Specit typistetty siihen mitä
    // Ruohonjuuren tuotesivu sanoo.
    partnerId: 'ruohonjuuri',
    partnerProductUrl: 'https://www.ruohonjuuri.fi/products/arctic-warriors-ruusujuurieliksiiri-100-ml',
    details: {
      specs: [
        { key: 'volume', value: { en: '100 ml', fi: '100 ml' } },
        { key: 'contents', value: { en: 'Roseroot and nettle', fi: 'Ruusujuuri ja nokkonen' } },
      ],
      sourceUrl: 'https://www.ruohonjuuri.fi/products/arctic-warriors-ruusujuurieliksiiri-100-ml',
      fetchedAt: '2026-09-05',
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
    priceFrom: 19.99,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
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
    priceFrom: 31.36,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
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
    priceFrom: 31.36,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
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

  // ── Erä 6.11.2026: käsintehdyt kuksat provisiollisista kaupoista ────────────
  // Vesa 6.11.: "etsi lisää tuotteita kategorioihin … adtractionista". Puu ja
  // retkiastiat -hyllyssä oli neljä tuotetta, joista kolme muovikomposiittia.
  // Nämä neljä ovat puuta ja tulevat Adtraction-syötteistä (Scandinavian Outdoor
  // pfid 409, Partioaitta pfid 2195) 6.11.2026; hinta tarkistettu tuotesivulta.
  // 🔴 Alkuperä: vain Pahkataide sanoo "Valmistettu Suomessa". Koivumaan sivu
  // puhuu "aidosta Lapin kuksasta" mutta ei kerro valmistusmaata, joten sitä
  // ei väitetä. Kumpaakaan ei kutsuta saamelaiseksi (duodji-sääntö).
  {
    slug: 'pahkataide-kuksa-bear',
    category: 'handicrafts',
    brand: 'Pahkataide',
    name: {
      en: 'Pahkataide curly birch kuksa with a bear bone inlay',
      fi: 'Pahkataide Visaluukuksa Karhu',
    },
    description: {
      en: 'A kuksa made from curly birch, with a bone inlay on the handle carrying a bear motif. Pahkataide treats its cups with poppy seed oil to protect the wood. It is never washed with detergent: a rinse is enough, and daily coffee builds a film on the surface that protects it further.',
      fi: 'Visakoivusta tehty kuksa, jonka kahvassa on luu-upotus, jossa on karhukuvio. Pahkataide käsittelee kuksansa unikkoöljyllä, joka suojaa puuta. Sitä ei koskaan pestä pesuaineella: huuhtelu riittää, ja päivittäinen kahvi muodostaa pintaan suojaavan kalvon.',
    },
    priceFrom: 79,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-pahkataide-kuksa-bear',
    imageIsPartner: true,
    partnerId: 'scandinavianoutdoor',
    partnerProductUrl: 'https://scandinavianoutdoor.fi/pahkataide/varusteet/ruokailu-ja-astiat/astiat/visaluukuksa-karhu/',
    details: {
      specs: [
        { key: 'material', value: { en: 'Curly birch, bone inlay on the handle', fi: 'Visakoivu, kahvassa luu-upotus' } },
        {
          key: 'care',
          value: { en: 'Rinse with water, no detergent', fi: 'Huuhtelu vedellä, ei pesuaineita' },
        },
        {
          key: 'other',
          label: { en: 'Origin', fi: 'Alkuperä' },
          value: { en: 'Made in Finland', fi: 'Valmistettu Suomessa' },
        },
      ],
      sourceUrl: 'https://scandinavianoutdoor.fi/pahkataide/varusteet/ruokailu-ja-astiat/astiat/visaluukuksa-karhu/',
      fetchedAt: '2026-11-06',
    },
  },
  {
    slug: 'pahkataide-curly-birch-kuksa',
    category: 'handicrafts',
    brand: 'Pahkataide',
    name: {
      en: 'Pahkataide curly birch kuksa',
      fi: 'Pahkataide Visakuksa',
    },
    description: {
      en: 'A plain kuksa made from curly birch, the same wood and the same poppy seed oil finish as Pahkataide’s inlaid cups, without the decoration. The grain makes every piece look different, and it holds roughly 1.5 dl.',
      fi: 'Pelkistetty kuksa visakoivusta, sama puu ja sama unikkoöljykäsittely kuin Pahkataiteen upotuskuksissa, ilman koristetta. Syykuvio tekee jokaisesta kappaleesta erinäköisen, ja vetoisuus on noin 1,5 dl.',
    },
    priceFrom: 54.9,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-pahkataide-curly-birch-kuksa',
    imageIsPartner: true,
    partnerId: 'scandinavianoutdoor',
    partnerProductUrl: 'https://scandinavianoutdoor.fi/pahkataide/varusteet/ruokailu-ja-astiat/astiat/visakuksa/',
    details: {
      specs: [
        { key: 'material', value: { en: 'Curly birch', fi: 'Visakoivu' } },
        { key: 'size', value: { en: 'About 1.5 dl, every piece is unique', fi: 'Noin 1,5 dl, jokainen kappale on yksilö' } },
        {
          key: 'care',
          value: { en: 'Rinse with water, no detergent', fi: 'Huuhtelu vedellä, ei pesuaineita' },
        },
        {
          key: 'other',
          label: { en: 'Origin', fi: 'Alkuperä' },
          value: { en: 'Made in Finland', fi: 'Valmistettu Suomessa' },
        },
      ],
      sourceUrl: 'https://scandinavianoutdoor.fi/pahkataide/varusteet/ruokailu-ja-astiat/astiat/visakuksa/',
      fetchedAt: '2026-11-06',
    },
  },
  {
    slug: 'koivumaa-kuksa-reindeer-bone',
    category: 'handicrafts',
    brand: 'Kuksa E. Koivumaa',
    name: {
      en: 'Kuksa E. Koivumaa birch burl kuksa with reindeer bone',
      fi: 'Kuksa E. Koivumaa Luukuksa, kaksireikäinen',
    },
    description: {
      en: 'A kuksa carved from birch burl in the traditional way, with two finger holes in the handle and a reindeer bone ornament. Burl does not burn the lips, which is why it is the classic cup for hot coffee by the fire. Break it in with black coffee and afterwards just rinse it.',
      fi: 'Koivun pahkasta perinteisellä tavalla tehty kuksa, kahvassa kaksi sormireikää ja poronluinen koriste. Pahka ei polta huulia, ja siksi se on nuotiokahvin perinteinen astia. Kuksa otetaan käyttöön mustalla kahvilla, ja sen jälkeen riittää pelkkä huuhtelu.',
    },
    priceFrom: 89.95,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-koivumaa-kuksa-reindeer-bone',
    imageIsPartner: true,
    partnerId: 'partioaitta',
    partnerProductUrl: 'https://www.partioaitta.fi/kuksa-e-koivumaa-kuksa-luukuksa-2-reikanen-1003546/',
    details: {
      specs: [
        {
          key: 'material',
          value: { en: 'Birch burl, reindeer bone ornament on the handle', fi: 'Koivun pahka, kahvassa poronluinen koriste' },
        },
        { key: 'size', value: { en: 'About 1.5 dl, two holes in the handle', fi: 'Noin 1,5 dl, kahvassa kaksi reikää' } },
        {
          key: 'care',
          value: { en: 'Rinse with water, no detergent or dishwasher', fi: 'Huuhtelu vedellä, ei pesuainetta eikä astianpesukonetta' },
        },
      ],
      sourceUrl: 'https://www.partioaitta.fi/kuksa-e-koivumaa-kuksa-luukuksa-2-reikanen-1003546/',
      fetchedAt: '2026-11-06',
    },
  },
  {
    slug: 'koivumaa-burl-kuksa',
    category: 'handicrafts',
    brand: 'Kuksa E. Koivumaa',
    name: {
      en: 'Kuksa E. Koivumaa birch burl kuksa, one hole',
      fi: 'Kuksa E. Koivumaa Isokuksa, yksireikäinen',
    },
    description: {
      en: 'The plain version of the same maker’s burl kuksa: birch burl carved in the traditional way, one finger hole in the handle, about 1.5 dl. Break it in with black coffee, whose oil seals the open pores of the wood, and never put it in the dishwasher.',
      fi: 'Saman tekijän pahkakuksa pelkistettynä: koivun pahkasta perinteisellä tavalla tehty, kahvassa yksi sormireikä, vetoisuus noin 1,5 dl. Kuksa otetaan käyttöön mustalla kahvilla, jonka rasva tiivistää puun avoimet huokoset. Astianpesukoneeseen sitä ei laiteta koskaan.',
    },
    priceFrom: 59.95,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-koivumaa-burl-kuksa',
    imageIsPartner: true,
    partnerId: 'partioaitta',
    partnerProductUrl: 'https://www.partioaitta.fi/kuksa-e-koivumaa-kuksa-isokuksa-1-reikanen-1003547/',
    details: {
      specs: [
        { key: 'material', value: { en: 'Birch burl', fi: 'Koivun pahka' } },
        { key: 'size', value: { en: 'About 1.5 dl, one hole in the handle', fi: 'Noin 1,5 dl, kahvassa yksi reikä' } },
        {
          key: 'care',
          value: { en: 'Rinse with water, no detergent or dishwasher', fi: 'Huuhtelu vedellä, ei pesuainetta eikä astianpesukonetta' },
        },
      ],
      sourceUrl: 'https://www.partioaitta.fi/kuksa-e-koivumaa-kuksa-isokuksa-1-reikanen-1003547/',
      fetchedAt: '2026-11-06',
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
    priceFrom: 49.95,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
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
    priceFrom: 120,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
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
    priceFrom: 120,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
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
      en: 'Halti HeatGrid midlayer jacket, women\'s',
      fi: 'Halti HeatGrid -välikerrostakki, naisten',
    },
    description: {
      en: 'A light, technical Halti midlayer in soft waffle knit that breathes and moves moisture away from the skin. It has a full-length front zip, a stand-up collar, zipped pockets and elastic cuffs and hem.',
      fi: 'Kevyt ja tekninen Halti-välikerrostakki pehmeästä vohvelineuloksesta, joka hengittää ja siirtää kosteutta pois iholta. Siinä on täyspitkä etuvetoketju, pystykaulus, vetoketjulliset taskut sekä joustavat hihansuut ja helma.',
    },
    priceFrom: 100,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-halti-heatgrid-midlayer',
    imageIsPartner: true,
    partnerId: 'halti',
    partnerProductUrl: 'https://www.halti.fi/products/heatgrid-valitakki-naisten',
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
      sourceUrl: 'https://www.halti.fi/products/heatgrid-valitakki-naisten',
      fetchedAt: '2026-11-06',
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
      fi: 'Lasi-igluyö kahdelle Levillä',
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

  // ── experiences: Elämyslahjat.fi-lahjakortit, erä 2026-11-06 (5 → 12) ──────
  // Vesa 6.11.2026: "adtractionista lisää elämyslahjoja". Valittu Elämyslahjatin
  // /lappi/-sivun 74 tuotteesta: jokainen tuotesivu avattu 6.11., hinta luettu
  // sivun omasta hintakentästä ja sijainti titlestä. Kuusamon/Rukan ja
  // Pudasjärven tuotteet jätetty pois (eivät ole Lappia). Pois myös sivut,
  // jotka ovat ristiriidassa itsensä kanssa (Kumputunturi: 5 h vs 2-3 h,
  // Icekarting: 140 vs 145 cm) ja karhuyö, jonka kohde on itärajalla eikä
  // Lapissa. Kesä ja syksy mukana tarkoituksella (kanootti, erämökki).
  {
    slug: 'korouoma-waterfalls-rovaniemi',
    category: 'experiences',
    brand: 'Wild About Lapland',
    name: {
      en: 'Korouoma frozen waterfalls trip for two, from Rovaniemi',
      fi: 'Korouoman jäätyneet vesiputoukset -retki kahdelle, Rovaniemi',
    },
    description: {
      en: 'In winter the streams running down the walls of the Korouoma canyon freeze into falls of blue ice. This guided day trip leaves Rovaniemi for the canyon in Posio, about 110 km away. The walk is easy, on snowshoes when the snow calls for them, and a light lunch is served on the way.',
      fi: 'Talvella Korouoman rotkolaakson seinämiltä valuvat purot jäätyvät sinertäviksi jääputouksiksi. Opastettu päiväretki lähtee Rovaniemeltä Posiolle, noin 110 kilometrin päähän. Kävely on helppoa, tarvittaessa lumikengillä, ja matkalla syödään kevyt lounas.',
    },
    priceFrom: 300,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-korouoma-waterfalls-rovaniemi',
    imageIsPartner: true,
    partnerId: 'elamyslahjat',
    partnerProductUrl: 'https://www.elamyslahjat.fi/lahjat/korouoma-jaa-vesiputoukset/',
    details: {
      specs: [
        {
          key: 'contents',
          value: {
            en: 'Guided trip to the frozen waterfalls of Korouoma for two, with transport, a light lunch and a snack. Pick-up within 10 km of central Rovaniemi',
            fi: 'Opastettu retki Korouoman jäätyneille vesiputouksille kahdelle, kuljetukset, kevyt lounas ja välipala. Nouto 10 km:n säteellä Rovaniemen keskustasta',
          },
        },
        {
          key: 'other',
          label: { en: 'Duration', fi: 'Kesto' },
          value: { en: 'About 7 hours including transport', fi: 'Noin 7 tuntia kuljetuksineen' },
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
            en: 'Korouoma canyon, Posio. Departure from Rovaniemi',
            fi: 'Korouoman rotkolaakso, Posio. Lähtö Rovaniemeltä',
          },
        },
        {
          key: 'other',
          label: { en: 'Season', fi: 'Sesonki' },
          value: { en: 'Winter months, November to April', fi: 'Talvikuukausina, marras-huhtikuu' },
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
      sourceUrl: 'https://www.elamyslahjat.fi/lahjat/korouoma-jaa-vesiputoukset/',
      fetchedAt: '2026-11-06',
    },
  },
  {
    slug: 'amethyst-mine-snowshoe-luosto',
    category: 'experiences',
    brand: 'Wild About Lapland',
    name: {
      en: 'Snowshoe trip to the Luosto amethyst mine for two',
      fi: 'Lumikenkäretki Luoston ametistikaivokselle kahdelle',
    },
    description: {
      en: 'A guided day out from Rovaniemi to the amethyst mine at the top of Lampivaara fell, in Pyhä-Luosto national park. You first cross the park on snowshoes, then a snow train takes you up to the mine. At the mine everyone can dig for themselves, and an amethyst you find is yours to keep.',
      fi: 'Opastettu päiväretki Rovaniemeltä Pyhä-Luoston kansallispuistoon: ensin lumikengillä puiston halki, sitten lumijunalla Lampivaaran huipulle ametistikaivokselle. Kaivoksella jokainen pääsee kaivamaan itse, ja löydetyn ametistin saa pitää.',
    },
    priceFrom: 400,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-amethyst-mine-snowshoe-luosto',
    imageIsPartner: true,
    partnerId: 'elamyslahjat',
    partnerProductUrl: 'https://www.elamyslahjat.fi/lahjat/lumikenka-retki-kaivokselle/',
    details: {
      specs: [
        {
          key: 'contents',
          value: {
            en: 'Guided snowshoe trip and amethyst mine visit for two, with transport, a snack at the rest stop and all the gear. Warm clothes and boots can be borrowed',
            fi: 'Opastettu lumikenkäretki ja kaivosvierailu kahdelle, kuljetukset, välipala taukopaikalla ja kaikki varusteet. Lämpimiä vaatteita ja kenkiä voi lainata',
          },
        },
        {
          key: 'other',
          label: { en: 'Duration', fi: 'Kesto' },
          value: { en: 'About 7 hours', fi: 'Noin 7 tuntia' },
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
            en: 'Lampivaara, Luosto. Departure from Rovaniemi',
            fi: 'Lampivaara, Luosto. Lähtö Rovaniemeltä',
          },
        },
        {
          key: 'other',
          label: { en: 'Season', fi: 'Sesonki' },
          value: { en: 'Winter months, December to April', fi: 'Talvikuukausina, joulu–huhtikuu' },
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
      sourceUrl: 'https://www.elamyslahjat.fi/lahjat/lumikenka-retki-kaivokselle/',
      fetchedAt: '2026-11-06',
    },
  },
  {
    slug: 'midnight-sun-canoe-rovaniemi',
    category: 'experiences',
    brand: 'Wild About Lapland',
    name: {
      en: 'Midnight sun canoe trip for two, Rovaniemi',
      fi: 'Kanoottiretki keskiyön auringossa kahdelle, Rovaniemi',
    },
    description: {
      en: 'A guided evening paddle near Rovaniemi in the light of the midnight sun, ending with a snack by an open fire. The guide teaches the basics before setting off, so no paddling experience is needed. The trips run in summer, from June to August.',
      fi: 'Opastettu iltamelonta Rovaniemen lähellä keskiyön auringon valossa, ja lopuksi välipala avotulella. Opas opettaa melonnan perusteet ennen lähtöä, joten aiempaa kokemusta ei tarvita. Retkiä järjestetään kesällä, kesä–elokuussa.',
    },
    priceFrom: 230,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-midnight-sun-canoe-rovaniemi',
    imageIsPartner: true,
    partnerId: 'elamyslahjat',
    partnerProductUrl: 'https://www.elamyslahjat.fi/lahjat/kanootti-keski-yo/',
    details: {
      specs: [
        {
          key: 'contents',
          value: {
            en: 'Guided canoe trip for two with the gear, a paddling and safety briefing, a snack by the fire and transport within 10 km of Rovaniemi',
            fi: 'Opastettu kanoottiretki kahdelle: varusteet, melonta- ja turvallisuusopastus, välipala avotulella ja kuljetus 10 km:n säteellä Rovaniemeltä',
          },
        },
        {
          key: 'other',
          label: { en: 'Duration', fi: 'Kesto' },
          value: { en: 'About 3 hours', fi: 'Noin 3 tuntia' },
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
          value: { en: 'Summer months, June to August', fi: 'Kesäkuukausina, kesä–elokuu' },
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
      sourceUrl: 'https://www.elamyslahjat.fi/lahjat/kanootti-keski-yo/',
      fetchedAt: '2026-11-06',
    },
  },
  {
    slug: 'halti-snowmobile-kilpisjarvi',
    category: 'experiences',
    brand: 'Kilpissafarit',
    name: {
      en: 'Snowmobile trip to the top of Halti for two, Kilpisjärvi',
      fi: 'Haltin huiputus moottorikelkoilla kahdelle, Kilpisjärvi',
    },
    description: {
      en: 'Halti is the highest point in Finland, right on the Norwegian border. This guided snowmobile trip from Kilpisjärvi crosses the Käsivarsi wilderness to border marker 303B, about 110 km in all, and at the top you can sign the Halti guestbook. The day runs from 10.00 to 16.00, and previous snowmobile driving experience is required.',
      fi: 'Halti on Suomen korkein kohta, aivan Norjan rajalla. Opastettu moottorikelkkaretki lähtee Kilpisjärveltä Käsivarren erämaan halki rajapyykille 303B, yhteensä noin 110 kilometriä, ja huipulla voi kirjoittaa nimensä Haltin vieraskirjaan. Retki ajetaan klo 10–16, ja aiempi moottorikelkan ajokokemus vaaditaan.',
    },
    priceFrom: 420,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-halti-snowmobile-kilpisjarvi',
    imageIsPartner: true,
    partnerId: 'elamyslahjat',
    partnerProductUrl: 'https://www.elamyslahjat.fi/lahjat/haltitunturin-huiputus-2lle/',
    details: {
      specs: [
        {
          key: 'contents',
          value: {
            en: 'Guided snowmobile trip of about 110 km for two, snowmobile clothing (overall, boots, helmet), warm juice and a pastry, the trail permit, VAT and insurance',
            fi: 'Opastettu noin 110 km:n moottorikelkkaretki kahdelle, kelkkailuvarustus (haalari, kengät, kypärä), lämmin mehu ja leivonnainen, uralupa, arvonlisävero ja vakuutukset',
          },
        },
        {
          key: 'other',
          label: { en: 'Duration', fi: 'Kesto' },
          value: { en: 'About 6 hours', fi: 'Noin 6 tuntia' },
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
          label: { en: 'Season', fi: 'Sesonki' },
          value: { en: '1 March to 10 May, weather permitting', fi: 'Maaliskuun 1. päivästä toukokuun 10. päivään, säävaraus' },
        },
        {
          key: 'other',
          label: { en: 'Age limit', fi: 'Ikäraja' },
          value: {
            en: '18 to drive a snowmobile, 8 in the sled. Previous driving experience is required',
            fi: 'Kelkan kuljettajalla vähintään 18 vuotta, rekikyydissä 8 vuotta. Aiempi ajokokemus vaaditaan',
          },
        },
        {
          key: 'other',
          label: { en: 'Gift card', fi: 'Lahjakortti' },
          value: { en: 'Valid for 3 years', fi: 'Voimassa 3 vuotta' },
        },
      ],
      sourceUrl: 'https://www.elamyslahjat.fi/lahjat/haltitunturin-huiputus-2lle/',
      fetchedAt: '2026-11-06',
    },
  },
  {
    slug: 'fell-ice-fishing-kilpisjarvi',
    category: 'experiences',
    brand: 'Kilpissafarit',
    name: {
      en: 'Ice fishing trip on the fells for two, Kilpisjärvi',
      fi: 'Pilkkiretki tunturiin kahdelle, Kilpisjärvi',
    },
    description: {
      en: 'A guide takes you by snowmobile into the fells near Kilpisjärvi, about 15 km in all, where you fish through a hole in the ice sitting on a reindeer hide. Arctic char or trout may bite, and the fishing gear is provided. The trip runs from 11.15 to 14.15.',
      fi: 'Opas vie moottorikelkoilla tunturiin Kilpisjärven lähelle, koko matka noin 15 kilometriä, ja perillä pilkitään porontaljalla istuen. Saaliiksi voi tulla rautu tai taimen, ja kalastusvälineet kuuluvat hintaan. Retki ajetaan klo 11.15–14.15.',
    },
    priceFrom: 280,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-fell-ice-fishing-kilpisjarvi',
    imageIsPartner: true,
    partnerId: 'elamyslahjat',
    partnerProductUrl: 'https://www.elamyslahjat.fi/lahjat/pilkkiretki-tunturiin-2lle/',
    details: {
      specs: [
        {
          key: 'contents',
          value: {
            en: 'Guided trip of about 15 km for two, snowmobile clothing (overall, boots, helmet), fishing gear, warm juice and a pastry, VAT and insurance',
            fi: 'Opastettu noin 15 km:n retki kahdelle, kelkkailuvarustus (haalari, kengät, kypärä), kalastusvälineet, lämmin mehu ja leivonnainen, arvonlisävero ja vakuutukset',
          },
        },
        {
          key: 'other',
          label: { en: 'Duration', fi: 'Kesto' },
          value: { en: 'About 3 hours', fi: 'Noin 3 tuntia' },
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
          label: { en: 'Season', fi: 'Sesonki' },
          value: { en: '20 November to 10 May, weather permitting', fi: 'Marraskuun 20. päivästä toukokuun 10. päivään, säävaraus' },
        },
        {
          key: 'other',
          label: { en: 'Age limit', fi: 'Ikäraja' },
          value: { en: '18 to drive a snowmobile, 8 in the sled', fi: 'Kelkan kuljettajalla vähintään 18 vuotta, rekikyydissä 8 vuotta' },
        },
        {
          key: 'other',
          label: { en: 'Gift card', fi: 'Lahjakortti' },
          value: { en: 'Valid for 3 years', fi: 'Voimassa 3 vuotta' },
        },
      ],
      sourceUrl: 'https://www.elamyslahjat.fi/lahjat/pilkkiretki-tunturiin-2lle/',
      fetchedAt: '2026-11-06',
    },
  },
  {
    slug: 'wilderness-cabin-ivalo',
    category: 'experiences',
    brand: 'Hentan Helmi',
    name: {
      en: 'Two nights full board in a wilderness cabin for two, Ivalo',
      fi: 'Kaksi yötä täysihoidolla erämökissä kahdelle, Ivalo',
    },
    description: {
      en: 'Two nights for two in a cabin on the bank of the Ivalo river, next to the Hammastunturi wilderness, with a shore sauna of its own. Every meal from dinner on arrival to lunch on departure is included, cooked with Lapland produce such as reindeer, fish and berries, and so is transport from Ivalo and back. Weekdays from mid-June to the end of October.',
      fi: 'Kaksi yötä kahdelle erämökissä Ivalojoen rannalla, Hammastunturin erämaan vieressä, ja oma rantasauna vapaassa käytössä. Hintaan kuuluvat kaikki ateriat tulopäivän päivällisestä lähtöpäivän lounaaseen, valmistettuina Lapin raaka-aineista kuten porosta, kalasta ja marjoista, sekä kuljetus Ivalosta ja takaisin. Arkipäivinä kesäkuun puolivälistä lokakuun loppuun.',
    },
    priceFrom: 950,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-wilderness-cabin-ivalo',
    imageIsPartner: true,
    partnerId: 'elamyslahjat',
    partnerProductUrl:
      'https://www.elamyslahjat.fi/lahjat/taysihoidollinen-majoitus-eramokissa-kahdelle-arkena-2-vrk-ivalo/',
    details: {
      specs: [
        {
          key: 'contents',
          value: {
            en: '2 nights for two in a wilderness cabin, free use of a separate shore sauna, full board with afternoon coffee by the fire, and transport from Ivalo centre or airport and back',
            fi: '2 yötä kahdelle erämökissä, erillinen rantasauna vapaassa käytössä, täysihoito ja iltapäiväkahvit nuotiolla sekä kuljetus Ivalon keskustasta tai lentokentältä ja takaisin',
          },
        },
        {
          key: 'other',
          label: { en: 'Duration', fi: 'Kesto' },
          value: { en: '2 nights', fi: '2 yötä' },
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
            en: 'On the bank of the Ivalo river. The exact location is confirmed at booking',
            fi: 'Ivalojoen rannalla. Tarkka sijainti varmistuu varauksen yhteydessä',
          },
        },
        {
          key: 'other',
          label: { en: 'Season', fi: 'Sesonki' },
          value: { en: 'Monday to Friday, 15 June to 30 October', fi: 'Maanantaista perjantaihin, kesäkuun 15. päivästä lokakuun 30. päivään' },
        },
        {
          key: 'other',
          label: { en: 'Language', fi: 'Kieli' },
          value: { en: 'Finnish and English', fi: 'Suomi ja englanti' },
        },
        {
          key: 'other',
          label: { en: 'Gift card', fi: 'Lahjakortti' },
          value: { en: 'Valid for 3 years', fi: 'Voimassa 3 vuotta' },
        },
      ],
      sourceUrl:
        'https://www.elamyslahjat.fi/lahjat/taysihoidollinen-majoitus-eramokissa-kahdelle-arkena-2-vrk-ivalo/',
      fetchedAt: '2026-11-06',
    },
  },
  {
    slug: 'katka-snowmobile-levi',
    category: 'experiences',
    brand: 'Tokka Safaris',
    name: {
      en: 'Snowmobile safari to the Kätkä wilderness, Levi',
      fi: 'Moottorikelkkasafari Kätkän erämaahan, Levi',
    },
    description: {
      en: 'A snowmobile safari of about 30 km from Levi into the Kätkätunturi wilderness. The stop is at Hanhipirtti, a wilderness café in an old cabin full of retro objects, before the ride back to Levi. No previous snowmobile experience is needed, and the gift card is for one person aged 13 or over.',
      fi: 'Noin 30 kilometrin moottorikelkkasafari Leviltä Kätkätunturin erämaahan. Tauko pidetään Hanhipirtissä, erämaakahvilassa, joka toimii vanhassa retroesineitä täynnä olevassa tuvassa, ja sen jälkeen ajetaan takaisin Leville. Aiempaa kelkkailukokemusta ei tarvita, ja lahjakortti on yhdelle vähintään 13-vuotiaalle.',
    },
    priceFrom: 135,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-katka-snowmobile-levi',
    imageIsPartner: true,
    partnerId: 'elamyslahjat',
    partnerProductUrl: 'https://www.elamyslahjat.fi/lahjat/seikkailu-kaetkaen-eraemaassa-levi/',
    details: {
      specs: [
        {
          key: 'contents',
          value: {
            en: 'Guided snowmobile safari of about 30 km for one, with a stop at the Hanhipirtti wilderness café. Winter clothing is included',
            fi: 'Opastettu noin 30 km:n moottorikelkkasafari yhdelle, tauko Hanhipirtin erämaakahvilassa. Talvivaatteet sisältyvät',
          },
        },
        {
          key: 'other',
          label: { en: 'Duration', fi: 'Kesto' },
          value: { en: 'About 2 to 3 hours', fi: 'Noin 2–3 tuntia' },
        },
        {
          key: 'other',
          label: { en: 'Participants', fi: 'Osallistujat' },
          value: { en: '1 person aged 13 or over', fi: '1 henkilö, vähintään 13-vuotias' },
        },
        {
          key: 'other',
          label: { en: 'Location', fi: 'Sijainti' },
          value: { en: 'Levi. Departure from Leviraitti 13, Sirkka', fi: 'Levi. Lähtö osoitteesta Leviraitti 13, Sirkka' },
        },
        {
          key: 'other',
          label: { en: 'Season', fi: 'Sesonki' },
          value: { en: 'Winter, December to March', fi: 'Talvikaudella, joulu–maaliskuu' },
        },
        {
          key: 'other',
          label: { en: 'Language', fi: 'Kieli' },
          value: { en: 'English and Finnish', fi: 'Englanti ja suomi' },
        },
        {
          key: 'other',
          label: { en: 'Gift card', fi: 'Lahjakortti' },
          value: { en: 'Valid for 3 years', fi: 'Voimassa 3 vuotta' },
        },
      ],
      sourceUrl: 'https://www.elamyslahjat.fi/lahjat/seikkailu-kaetkaen-eraemaassa-levi/',
      fetchedAt: '2026-11-06',
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
    priceCheckedAt: '2026-11-06',
    image: 'prod-nb-pippi-tee',
    imageIsPartner: true,
    partnerId: 'nordicbuddies',
    partnerProductUrl: 'https://nordicbuddies.com/products/pippi-longstocking-t-shirt-copy',
    details: {
      specs: [
        { key: 'material', value: { en: '100 % cotton, 240 g/m2', fi: '100 % puuvilla, 240 g/m2' } },
        { key: 'size', value: { en: 'Unisex straight fit, M to XXL', fi: 'Unisex suora leikkaus, M-XXL' } },
        { key: 'origin', value: { en: 'Printed in Finland', fi: 'Painettu Suomessa' } },
      ],
      sourceUrl: 'https://nordicbuddies.com/products/pippi-longstocking-t-shirt-copy',
      fetchedAt: '2026-11-06',
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
    priceFrom: 19.9,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
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
    priceCheckedAt: '2026-11-06',
    image: 'prod-sk-marimekko-unikko-crossbody',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/marimekko-neat-crossbody-unikko-m-olkalaukku-sininen-tummansininen',
    details: {
      specs: [
        { key: 'other', label: { en: 'Model', fi: 'Malli' }, value: { en: 'Neat Crossbody, size M', fi: 'Neat Crossbody, koko M' } },
        { key: 'other', label: { en: 'Pattern', fi: 'Kuosi' }, value: { en: 'Unikko, blue and dark blue', fi: 'Unikko, sininen ja tummansininen' } },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/marimekko-neat-crossbody-unikko-m-olkalaukku-sininen-tummansininen',
      fetchedAt: '2026-11-06',
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
    priceFrom: 3.69,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
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
    priceFrom: 29.9,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
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
      en: 'Red knitted mittens with Little My\'s face on the back of each hand, lined with acrylic. They stretch, so one size fits most, and they are an official Moomin product.',
      fi: 'Punaiset neulelapaset, joiden kämmenselässä on Pikku Myyn kasvot, ja vuorena on akryyli. Ne joustavat, joten yksi koko sopii useimmille, ja ne ovat virallinen Muumi-tuote.',
    },
    priceFrom: 24.9,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-nb-little-my-mittens',
    imageIsPartner: true,
    partnerId: 'nordicbuddies',
    partnerProductUrl: 'https://nordicbuddies.com/products/little-my-mittens-1',
    details: {
      specs: [
        { key: 'material', value: { en: '49 % viscose, 31 % polyester, 20 % nylon; lining 100 % acrylic', fi: '49 % viskoosia, 31 % polyesteria, 20 % nailonia; vuori 100 % akryylia' } },
        { key: 'size', value: { en: 'One size, stretchy', fi: 'Yksi koko, joustava' } },
        { key: 'other', label: { en: 'Licence', fi: 'Lisenssi' }, value: { en: 'Official Moomin product', fi: 'Virallinen Muumi-tuote' } },
      ],
      sourceUrl: 'https://nordicbuddies.com/products/little-my-mittens-1',
      fetchedAt: '2026-11-06',
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
    priceFrom: 19.9,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
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
    slug: 'sk-marimekko-pieni-unikko-apron',
    category: 'design',
    brand: 'Marimekko',
    name: {
      en: 'Marimekko Pieni Unikko apron',
      fi: 'Marimekko Pieni Unikko -esiliina',
    },
    description: {
      en: 'A Marimekko apron in organic cotton with the Pieni Unikko print in plum, cranberry, off-white and rose. It has a front pocket, waist ties and a neck strap that adjusts with press studs.',
      fi: 'Marimekon luomupuuvillainen esiliina, jossa Pieni Unikko -kuosi kukkii luumun, karpalon, luonnonvalkoisen ja ruusun sävyissä. Siinä on etutasku, solmittavat vyötärönauhat ja painonapeilla säädettävä niskanauha.',
    },
    priceFrom: 50.14,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-sk-marimekko-pieni-unikko-apron',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/marimekko-pieni-unikko-esiliina-luumu-karpalo-luonnonvalkoinen-ruusu',
    details: {
      specs: [
        { key: 'material', value: { en: '100 % organic cotton', fi: '100 % luomupuuvillaa' } },
        { key: 'size', value: { en: 'Width 84 cm, length 85 cm', fi: 'Leveys 84 cm, pituus 85 cm' } },
        { key: 'care', value: { en: 'Machine wash at 60 °C', fi: 'Konepesu 60 °C' } },
        { key: 'other', label: { en: 'Pattern', fi: 'Kuosi' }, value: { en: 'Pieni Unikko, plum, cranberry, off-white and rose', fi: 'Pieni Unikko, luumu, karpalo, luonnonvalkoinen ja ruusu' } },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/marimekko-pieni-unikko-esiliina-luumu-karpalo-luonnonvalkoinen-ruusu',
      fetchedAt: '2026-11-06',
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
    priceFrom: 169.95,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
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
    priceFrom: 129.95,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
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
    priceFrom: 39.96,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
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
  // ── katalogin täydennys 2026-09-05 ─────────────────────────────────────────
  // Vesa 5.9.: 'miten voi olla että makiaa on vain kaksi tuotetta', 'tekstiileissä
  // vain yksi tuote', 'herkut-osio on aivan poor', 'superfoodeja vain 5', 'miksi on
  // jätetty vajaita gridejä'. 42 tuotetta kumppanien omista Shopify-tiedoista
  // (products.json, luettu 2026-09-05): hinta, kuva ja tiedot kumppanin sivulta.
  // Ryhmät täytetty neljällä jaollisiksi (xl-ruudukko on 4 saraketta).
  {
    slug: 'makia-kontio-hoodie',
    category: 'clothing',
    brand: 'Makia',
    name: {
      en: 'Makia Kontio hooded sweatshirt',
      fi: 'Makia Kontio -huppari',
    },
    description: {
      en: 'A regular fit hoodie in 100 per cent organic cotton, dyed after sewing. Garment dyeing gives a deeper colour and a softer hand than yarn dyeing, and the shade keeps its slightly worn look wash after wash.',
      fi: 'Suoralinjainen huppari sataprosenttisesta luomupuuvillasta, värjätty vasta ompelun jälkeen. Vaatevärjäys antaa syvemmän sävyn ja pehmeämmän tuntuman kuin lankavärjäys, ja väri säilyttää hieman kuluneen ilmeensä pesusta toiseen.',
    },
    priceFrom: 119,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-makia-kontio-hoodie',
    imageIsPartner: true,
    partnerId: 'makia',
    partnerProductUrl: 'https://makia.com/products/kontio-hooded-sweatshirt',
    details: {
      specs: [
        { key: 'material', value: { en: '100 % organic cotton, garment dyed', fi: '100 % luomupuuvillaa, vaatevärjätty' } },
        { key: 'size', value: { en: 'S to XXL', fi: 'S-XXL' } },
      ],
      sourceUrl: 'https://makia.com/products/kontio-hooded-sweatshirt',
      fetchedAt: '2026-09-05',
    },
  },
  {
    slug: 'makia-trademark-hoodie',
    category: 'clothing',
    brand: 'Makia',
    name: {
      en: 'Makia Trademark hooded sweatshirt',
      fi: 'Makia Trademark -huppari',
    },
    description: {
      en: 'Makia\'s plainest hoodie: regular fit, 100 per cent organic cotton and the small trademark on the chest. The one to pack for a cabin week where the same sweatshirt goes from the morning fire to the evening sauna porch.',
      fi: 'Makian pelkistetyin huppari: suora istuvuus, sataprosenttista luomupuuvillaa ja pieni tavaramerkki rinnassa. Mökkiviikon vaate, jossa sama paita kulkee aamutulilta iltasaunan kuistille.',
    },
    priceFrom: 109,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-makia-trademark-hoodie',
    imageIsPartner: true,
    partnerId: 'makia',
    partnerProductUrl: 'https://makia.com/products/trademark-hooded-sweatshirt',
    details: {
      specs: [
        { key: 'material', value: { en: '100 % organic cotton', fi: '100 % luomupuuvillaa' } },
        { key: 'size', value: { en: 'S to XXL', fi: 'S-XXL' } },
      ],
      sourceUrl: 'https://makia.com/products/trademark-hooded-sweatshirt',
      fetchedAt: '2026-09-05',
    },
  },
  {
    slug: 'makia-moray-zip-knit',
    category: 'clothing',
    brand: 'Makia',
    name: {
      en: 'Makia Moray zip knit cardigan',
      fi: 'Makia Moray -vetoketjuneule',
    },
    description: {
      en: 'A regular fit zip cardigan knitted from 100 per cent merino wool. Merino warms without bulk and dries from the inside, so it works as the layer under a shell on a fell walk and on its own in a warm cafe.',
      fi: 'Suoralinjainen vetoketjullinen neuletakki sataprosenttisesta merinovillasta. Merino lämmittää ilman paksuutta ja kuivuu sisältä päin, joten se toimii kerroksena kuoritakin alla tunturikävelyllä ja yksinään lämpimässä kahvilassa.',
    },
    priceFrom: 169,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-makia-moray-zip-knit',
    imageIsPartner: true,
    partnerId: 'makia',
    partnerProductUrl: 'https://makia.com/products/moray-zip-knit',
    details: {
      specs: [
        { key: 'material', value: { en: '100 % merino wool', fi: '100 % merinovillaa' } },
        { key: 'size', value: { en: 'S to XXL', fi: 'S-XXL' } },
      ],
      sourceUrl: 'https://makia.com/products/moray-zip-knit',
      fetchedAt: '2026-09-05',
    },
  },
  {
    slug: 'makia-form-jacket',
    category: 'clothing',
    brand: 'Makia',
    name: {
      en: 'Makia Form winter jacket',
      fi: 'Makia Form -talvitakki',
    },
    description: {
      en: 'A long winter jacket with a regular fit and recycled polyester insulation. A hidden rib inside the sleeve opening closes the cuff against wind, which matters more on a January street in Rovaniemi than any feature list.',
      fi: 'Pitkä talvitakki suoralla istuvuudella ja kierrätetyllä polyesterivanulla. Hihansuun sisällä piilotettu resori sulkee ranteen tuulelta, ja tammikuun kadulla Rovaniemellä se merkitsee enemmän kuin yksikään ominaisuuslista.',
    },
    priceFrom: 199,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-makia-form-jacket',
    imageIsPartner: true,
    partnerId: 'makia',
    partnerProductUrl: 'https://makia.com/products/form-jacket-1',
    details: {
      specs: [
        { key: 'material', value: { en: 'Recycled polyester insulation, hidden rib cuffs', fi: 'Kierrätetty polyesterivanu, piilotettu resori hihansuissa' } },
        { key: 'size', value: { en: 'S to XXL', fi: 'S-XXL' } },
      ],
      sourceUrl: 'https://makia.com/products/form-jacket-1',
      fetchedAt: '2026-09-05',
    },
  },
  {
    slug: 'makia-martin-beanie',
    category: 'clothing',
    brand: 'Makia',
    name: {
      en: 'Makia Martin merino beanie',
      fi: 'Makia Martin -merinopipo',
    },
    description: {
      en: 'A 100 per cent merino wool beanie with a small patch, knitted in Finland. It is the cheapest way into Makia and the piece most likely to be worn daily from October to April.',
      fi: 'Sataprosenttisesta merinovillasta neulottu pipo pienellä merkillä, valmistettu Suomessa. Halvin tie Makiaan ja se kappale, joka todennäköisimmin on päässä joka päivä lokakuusta huhtikuuhun.',
    },
    priceFrom: 49,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-makia-martin-beanie',
    imageIsPartner: true,
    partnerId: 'makia',
    partnerProductUrl: 'https://makia.com/products/martin-beanie',
    details: {
      specs: [
        { key: 'material', value: { en: '100 % merino wool', fi: '100 % merinovillaa' } },
        { key: 'origin', value: { en: 'Made in Finland', fi: 'Valmistettu Suomessa' } },
        { key: 'size', value: { en: 'One size', fi: 'Yksi koko' } },
      ],
      sourceUrl: 'https://makia.com/products/martin-beanie',
      fetchedAt: '2026-09-05',
    },
  },
  {
    slug: 'makia-mari-balaclava',
    category: 'clothing',
    brand: 'Makia',
    name: {
      en: 'Makia Mari knitted balaclava',
      fi: 'Makia Mari -kypärämyssy',
    },
    description: {
      en: 'A knitted balaclava hood in a blend of wool, polyester, alpaca and elastane. Covers the ears, neck and cheeks at once, which is the difference between a snowmobile ride and a snowmobile ride you remember for the wrong reason.',
      fi: 'Neulottu kypärämyssy villan, polyesterin, alpakan ja elastaanin sekoitteesta. Peittää korvat, kaulan ja posket kerralla, ja se on ero moottorikelkkaretken ja väärästä syystä mieleen jäävän moottorikelkkaretken välillä.',
    },
    priceFrom: 59,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-makia-mari-balaclava',
    imageIsPartner: true,
    partnerId: 'makia',
    partnerProductUrl: 'https://makia.com/products/mari-balaclava',
    details: {
      specs: [
        { key: 'material', value: { en: 'Wool, polyester, alpaca and elastane blend', fi: 'Villan, polyesterin, alpakan ja elastaanin sekoite' } },
        { key: 'size', value: { en: 'One size', fi: 'Yksi koko' } },
      ],
      sourceUrl: 'https://makia.com/products/mari-balaclava',
      fetchedAt: '2026-09-05',
    },
  },
  {
    slug: 'halti-pehmee-merino-beanie',
    category: 'clothing',
    brand: 'Halti',
    name: {
      en: 'Halti Pehmee merino beanie',
      fi: 'Halti Pehmee -merinopipo',
    },
    description: {
      en: 'A city beanie in 100 per cent merino wool with a double layer rib, made in Finland. Halti names it Pehmee, soft, and it is the beanie for the days when a ski hat would look like you took a wrong turn.',
      fi: 'Kaupunkipipo sataprosenttisesta merinovillasta kaksinkertaisella resorilla, valmistettu Suomessa. Nimi on Pehmee, ja se on pipo niille päiville, jolloin hiihtolakki näyttäisi eksymiseltä.',
    },
    priceFrom: 50,
    currency: 'EUR',
    priceCheckedAt: '2026-09-05',
    image: 'prod-halti-pehmee-merino-beanie',
    imageIsPartner: true,
    partnerId: 'halti',
    partnerProductUrl: 'https://www.halti.fi/products/pehmee-merinopipo',
    details: {
      specs: [
        { key: 'material', value: { en: '100 % merino wool', fi: '100 % merinovillaa' } },
        { key: 'origin', value: { en: 'Made in Finland', fi: 'Valmistettu Suomessa' } },
        { key: 'care', value: { en: 'Dry flat', fi: 'Tasokuivaus' } },
        { key: 'size', value: { en: 'One size', fi: 'Yksi koko' } },
      ],
      sourceUrl: 'https://www.halti.fi/products/pehmee-merinopipo',
      fetchedAt: '2026-09-05',
    },
  },
  {
    slug: 'halti-rockmoon-fleece-hoodie',
    category: 'clothing',
    brand: 'Halti',
    name: {
      en: 'Halti Rockmoon men\'s hooded fleece',
      fi: 'Halti Rockmoon -fleecehuppari, miesten',
    },
    description: {
      en: 'A warm hooded fleece in double brushed stretch fabric, with windproof microfabric on the hood and shoulders where the cold gets in first. Worn under a shell on the fell, on its own around the cabin.',
      fi: 'Lämmin hupullinen fleece kaksipuolisesti harjatusta joustokankaasta, hupussa ja olkapäillä tuulenpitävä mikrokangas siellä, mistä kylmä tulee ensimmäisenä. Kuoritakin alla tunturissa, sellaisenaan mökin pihalla.',
    },
    priceFrom: 90,
    currency: 'EUR',
    priceCheckedAt: '2026-09-05',
    image: 'prod-halti-rockmoon-fleece-hoodie',
    imageIsPartner: true,
    partnerId: 'halti',
    partnerProductUrl: 'https://www.halti.fi/products/rockmoon-fleecehuppari-miesten',
    details: {
      specs: [
        { key: 'material', value: { en: 'Double brushed stretch fleece, windproof microfabric on hood and shoulders', fi: 'Kaksipuolisesti harjattu joustofleece, tuulenpitävä mikrokangas hupussa ja olkapäillä' } },
        { key: 'size', value: { en: 'S to XXXL', fi: 'S-XXXL' } },
      ],
      sourceUrl: 'https://www.halti.fi/products/rockmoon-fleecehuppari-miesten',
      fetchedAt: '2026-09-05',
    },
  },
  {
    slug: 'halti-viiri-fleece-gloves',
    category: 'clothing',
    brand: 'Halti',
    name: {
      en: 'Halti Viiri fleece gloves',
      fi: 'Halti Viiri -fleecehanskat',
    },
    description: {
      en: 'Light 45 gram gloves in windproof Stormwall fleece, with a silicone grip print on the palm and touchscreen tips on the thumb and index finger, so the aurora photo gets taken without bare hands.',
      fi: 'Kevyet 45 gramman hanskat tuulenpitävästä Stormwall-fleecestä, kämmenessä silikoninen pitoprintti ja peukalossa sekä etusormessa kosketusnäyttöpinta, joten revontulikuva otetaan paljastamatta käsiä.',
    },
    priceFrom: 35,
    currency: 'EUR',
    priceCheckedAt: '2026-09-05',
    image: 'prod-halti-viiri-fleece-gloves',
    imageIsPartner: true,
    partnerId: 'halti',
    partnerProductUrl: 'https://www.halti.fi/products/viiri-fleece-hanskat',
    details: {
      specs: [
        { key: 'material', value: { en: 'Stormwall fleece 100 % polyester, palm 65 % polyester, 32 % polyamide, 3 % elastane', fi: 'Stormwall-fleece 100 % polyesteria, kämmen 65 % polyesteria, 32 % polyamidia, 3 % elastaania' } },
        { key: 'weight', value: { en: '45 g', fi: '45 g' } },
        { key: 'other', label: { en: 'Touchscreen', fi: 'Kosketusnäyttö' }, value: { en: 'Thumb and index finger', fi: 'Peukalo ja etusormi' } },
        { key: 'care', value: { en: 'Gentle wash at 30 °C at most', fi: 'Hellävarainen pesu enintään 30 °C' } },
      ],
      sourceUrl: 'https://www.halti.fi/products/viiri-fleece-hanskat',
      fetchedAt: '2026-09-05',
    },
  },
  {
    slug: 'nb-moomin-classics-beanie',
    category: 'clothing',
    brand: 'Nordicbuddies',
    name: {
      en: 'Moomin Classics beanie',
      fi: 'Muumi Classics -pipo',
    },
    description: {
      en: 'An adult beanie from the Moomin Classics collection in 100 per cent recycled polyester, brown, one size. An official Moomin product, which is the line that separates it from the market stall version.',
      fi: 'Aikuisten pipo Muumi Classics -mallistosta, 100-prosenttista kierrätettyä polyesteria, ruskea, yksi koko. Virallinen Muumi-tuote, ja se on raja, joka erottaa sen torikojun versiosta.',
    },
    priceFrom: 34.9,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-nb-moomin-classics-beanie',
    imageIsPartner: true,
    partnerId: 'nordicbuddies',
    partnerProductUrl: 'https://nordicbuddies.com/products/moomin-classics-beanie-moomin26o',
    details: {
      specs: [
        { key: 'material', value: { en: '100 % recycled polyester', fi: '100 % kierrätettyä polyesteria' } },
        { key: 'size', value: { en: 'Adult, one size', fi: 'Aikuisten, yksi koko' } },
        { key: 'color', value: { en: 'Brown', fi: 'Ruskea' } },
      ],
      sourceUrl: 'https://nordicbuddies.com/products/moomin-classics-beanie-moomin26o',
      fetchedAt: '2026-11-06',
    },
  },
  {
    slug: 'nb-snufkin-mens-socks',
    category: 'clothing',
    brand: 'Nordicbuddies',
    name: {
      en: 'Snufkin men\'s socks',
      fi: 'Nuuskamuikkunen-sukat, miesten',
    },
    description: {
      en: 'Men\'s socks with Snufkin, EU 40 to 45, 60 per cent cotton with polyester, nylon and elastane for stretch. The cheapest Moomin gift on this site that still gets worn rather than displayed.',
      fi: 'Miesten Nuuskamuikkunen-sukat, koko EU 40-45, 60 % puuvillaa ja joustoa antavaa polyesteria, nailonia ja elastaania. Tämän sivuston halvin Muumi-lahja, jota käytetään eikä vain katsella.',
    },
    priceFrom: 9.9,
    currency: 'EUR',
    priceCheckedAt: '2026-09-05',
    image: 'prod-nb-snufkin-mens-socks',
    imageIsPartner: true,
    partnerId: 'nordicbuddies',
    partnerProductUrl: 'https://www.nordicbuddies.com/products/snufkin-mens-socks-1',
    details: {
      specs: [
        { key: 'size', value: { en: 'EU 40-45', fi: 'EU 40-45' } },
        { key: 'material', value: { en: '60 % cotton, 33 % polyester, 4 % nylon, 2 % elastane, 1 % elastodiene', fi: '60 % puuvillaa, 33 % polyesteria, 4 % nailonia, 2 % elastaania, 1 % elastodieeniä' } },
      ],
      sourceUrl: 'https://www.nordicbuddies.com/products/snufkin-mens-socks-1',
      fetchedAt: '2026-09-05',
    },
  },
  {
    slug: 'nb-hattifatteners-retro-socks',
    category: 'clothing',
    brand: 'Nordicbuddies',
    name: {
      en: 'Hattifatteners women\'s retro socks',
      fi: 'Hattivatit-retrosukat, naisten',
    },
    description: {
      en: 'Retro style socks with the Hattifatteners, EU 36 to 42, 67 per cent cotton. Stretchy enough that one size fits most, and the first thing a Moomin reader picks up when the socks drawer is open.',
      fi: 'Retrotyyliset Hattivatti-sukat, koko EU 36-42, 67 % puuvillaa. Joustavat niin, että yksi koko sopii useimmille, ja ensimmäinen asia, jonka Muumien lukija poimii sukkalaatikosta.',
    },
    priceFrom: 12.9,
    currency: 'EUR',
    priceCheckedAt: '2026-09-05',
    image: 'prod-nb-hattifatteners-retro-socks',
    imageIsPartner: true,
    partnerId: 'nordicbuddies',
    partnerProductUrl: 'https://www.nordicbuddies.com/products/hattifatteners-womens-retro-socks-1',
    details: {
      specs: [
        { key: 'size', value: { en: 'EU 36-42', fi: 'EU 36-42' } },
        { key: 'material', value: { en: '67 % cotton, 25 % polyester, 4 % elastodiene, 3 % nylon, 1 % elastane', fi: '67 % puuvillaa, 25 % polyesteria, 4 % elastodieeniä, 3 % nailonia, 1 % elastaania' } },
      ],
      sourceUrl: 'https://www.nordicbuddies.com/products/hattifatteners-womens-retro-socks-1',
      fetchedAt: '2026-09-05',
    },
  },
  {
    slug: 'sk-suomi-propeller-cap',
    category: 'clothing',
    brand: 'Happy Orange',
    name: {
      en: 'Suomi supporter propeller cap',
      fi: 'Suomi-kannatuspropellilippis',
    },
    description: {
      en: 'A blue and white propeller cap for the stands, the fan zone and the ice hockey final at the pub. Not a serious hat, which is exactly the point on a night when Finland plays.',
      fi: 'Sinivalkoinen propellilippis katsomoon, fanialueelle ja pubin jääkiekkofinaaliin. Ei vakava päähine, ja juuri se on pointti iltana, jona Suomi pelaa.',
    },
    priceFrom: 12.42,
    currency: 'EUR',
    priceCheckedAt: '2026-09-05',
    image: 'prod-sk-suomi-propeller-cap',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/suomi-kannatus-propellilippis',
    details: {
      specs: [
        { key: 'color', value: { en: 'Blue and white', fi: 'Sinivalkoinen' } },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/suomi-kannatus-propellilippis',
      fetchedAt: '2026-09-05',
    },
  },
  {
    slug: 'sk-muurla-moomin-lantern-tahtihetki',
    category: 'design',
    brand: 'Muurla',
    name: {
      en: 'Muurla Moomin lantern Tähtihetki 18 cm',
      fi: 'Muurla Muumi-kynttilälyhty Tähtihetki 18 cm',
    },
    description: {
      en: 'A hand made lead free glass lantern from Muurla\'s Tähtihetki series with gold details, 15.5 cm across and 18 cm high. Works as a candle lantern, a bowl for the season\'s sweets or a vase for a small bunch.',
      fi: 'Käsityönä valmistettu lyijytön lasilyhty Muurlan Tähtihetki-sarjasta kultaisin yksityiskohdin, halkaisija 15,5 cm ja korkeus 18 cm. Toimii kynttilälyhtynä, kulhona kauden herkuille tai maljakkona pienelle kimpulle.',
    },
    priceFrom: 46.31,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-sk-muurla-moomin-lantern-tahtihetki',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/muurla-muumi-kynttilalyhty-tahtihetki-18cm',
    details: {
      specs: [
        { key: 'size', value: { en: 'Ø 15.5 cm, height 18 cm', fi: 'Ø 15,5 cm, korkeus 18 cm' } },
        { key: 'material', value: { en: 'Hand made lead free glass', fi: 'Käsityönä valmistettua lyijytöntä lasia' } },
        { key: 'care', value: { en: 'Hand wash', fi: 'Käsinpesu' } },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/muurla-muumi-kynttilalyhty-tahtihetki-18cm',
      fetchedAt: '2026-09-05',
    },
  },
  {
    slug: 'sk-hukka-soapstone-candle',
    category: 'design',
    brand: 'Hukka',
    name: {
      en: 'Hukka Jätkänkynttilä stone tealight holder',
      fi: 'Hukka Jätkänkynttilä -kivinen tuikkukynttilänjalka',
    },
    description: {
      en: 'A stone tealight holder shaped like a jätkänkynttilä, the split log fire lumberjacks lit on the snow. 56 mm across, 100 mm high, 310 grams, takes a 40 mm tealight. Live fire on cold stone, indoors.',
      fi: 'Kivinen tuikkukynttilänjalka jätkänkynttilän eli lumelle sytytetyn halkaistun pölkkytulen muodossa. Halkaisija 56 mm, korkeus 100 mm, paino 310 grammaa, sopii 40 mm tuikulle. Elävä tuli kylmällä kivellä, sisällä.',
    },
    priceFrom: 24.97,
    currency: 'EUR',
    priceCheckedAt: '2026-09-05',
    image: 'prod-sk-hukka-soapstone-candle',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/hukka-jatkankynttila',
    details: {
      specs: [
        { key: 'size', value: { en: 'Ø 56 x 100 mm, for a Ø 40 mm tealight', fi: 'Ø 56 x 100 mm, Ø 40 mm tuikulle' } },
        { key: 'weight', value: { en: '0.31 kg', fi: '0,31 kg' } },
        { key: 'contents', value: { en: '1 holder', fi: '1 kpl' } },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/hukka-jatkankynttila',
      fetchedAt: '2026-09-05',
    },
  },
  {
    slug: 'sk-muurla-moomin-enamel-mug-lumipyry',
    category: 'design',
    brand: 'Muurla',
    name: {
      en: 'Muurla Moomin enamel mug Lumipyry 3.7 dl',
      fi: 'Muurla Muumi-emalimuki Lumipyry 3,7 dl',
    },
    description: {
      en: 'A 3.7 dl enamel mug with a carbon steel core and a double enamel coating, printed with the Lumipyry snowstorm scene. Takes hot and cold drinks, goes in the dishwasher and out to the campfire, not into the microwave.',
      fi: '3,7 dl emalimuki, jonka sydän on hiiliterästä kaksinkertaisella emaloinnilla, kuvana Lumipyry-talvimaisema. Kestää kuumat ja kylmät juomat, konepesun ja nuotion, ei mikroaaltouunia.',
    },
    priceFrom: 22.46,
    currency: 'EUR',
    priceCheckedAt: '2026-09-05',
    image: 'prod-sk-muurla-moomin-enamel-mug-lumipyry',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/muurla-muumi-lumipyry-emalimuki-3-7dl',
    details: {
      specs: [
        { key: 'volume', value: { en: '3.7 dl', fi: '3,7 dl' } },
        { key: 'material', value: { en: 'Carbon steel with a double enamel coating', fi: 'Hiiliterästä kaksinkertaisella emaloinnilla' } },
        { key: 'care', value: { en: 'Dishwasher safe, not for the microwave', fi: 'Konepesun kestävä, ei mikroaaltouuniin' } },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/muurla-muumi-lumipyry-emalimuki-3-7dl',
      fetchedAt: '2026-09-05',
    },
  },
  {
    slug: 'sk-arabia-moomin-pitcher-moominhouse',
    category: 'design',
    brand: 'Arabia',
    name: {
      en: 'Arabia Moomin pitcher 1.0 l, Moominhouse',
      fi: 'Arabia Muumi-kaadin 1,0 l, Muumitalo',
    },
    description: {
      en: 'A one litre Arabia pitcher with the Moominhouse, the round stove shaped house Moominpappa built himself and never locks at night. Comes with a ceramic lid that keeps insects out of the juice on a summer table.',
      fi: 'Litran Arabia-kaadin, kuvassa Muumitalo, pyöreän kaakeliuunin muotoinen talo, jonka Muumipappa rakensi itse eikä lukitse yöksikään. Mukana keraaminen kansi, joka pitää hyönteiset poissa mehusta kesäpöydässä.',
    },
    priceFrom: 59.36,
    currency: 'EUR',
    priceCheckedAt: '2026-09-05',
    image: 'prod-sk-arabia-moomin-pitcher-moominhouse',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/arabia-muumi-kaadin-1-0l-muumitalo',
    details: {
      specs: [
        { key: 'volume', value: { en: '1.0 l', fi: '1,0 l' } },
        { key: 'other', label: { en: 'Lid', fi: 'Kansi' }, value: { en: 'Ceramic lid included', fi: 'Keraaminen kansi mukana' } },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/arabia-muumi-kaadin-1-0l-muumitalo',
      fetchedAt: '2026-09-05',
    },
  },
  {
    slug: 'sk-moomin-duvet-set-merella',
    category: 'design',
    brand: 'Moomin',
    name: {
      en: 'Moomin duvet cover set 140 x 200 cm, Merellä',
      fi: 'Muumi-pussilakanasetti 140 x 200 cm, Merellä',
    },
    description: {
      en: 'A cotton duvet cover and pillowcase set with the Moomins at sea, 140 by 200 cm cover and 50 by 70 cm pillowcase, zip closure. Wash before first use, as with any printed cotton bedding.',
      fi: 'Puuvillainen pussilakana ja tyynyliina Muumit merellä -kuosilla, pussilakana 140 x 200 cm ja tyynyliina 50 x 70 cm, vetoketjusuljenta. Pese ennen käyttöä kuten mikä tahansa painettu puuvillavuodevaate.',
    },
    priceFrom: 50.07,
    currency: 'EUR',
    priceCheckedAt: '2026-09-05',
    image: 'prod-sk-moomin-duvet-set-merella',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/muumi-merella-pussilakanasetti-140cmx200cm-50cmx70cm',
    details: {
      specs: [
        { key: 'size', value: { en: 'Duvet cover 140 x 200 cm, pillowcase 50 x 70 cm', fi: 'Pussilakana 140 x 200 cm, tyynyliina 50 x 70 cm' } },
        { key: 'material', value: { en: '100 % cotton', fi: '100 % puuvillaa' } },
        { key: 'other', label: { en: 'Closure', fi: 'Suljenta' }, value: { en: 'Zip', fi: 'Vetoketju' } },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/muumi-merella-pussilakanasetti-140cmx200cm-50cmx70cm',
      fetchedAt: '2026-09-05',
    },
  },
  {
    slug: 'sk-arabia-moomintroll-mini-figurine',
    category: 'handicrafts',
    brand: 'Arabia',
    name: {
      en: 'Arabia Moomintroll mini figurine',
      fi: 'Arabia Muumipeikko-minifiguriini',
    },
    description: {
      en: 'A hand made ceramic Moomintroll about 6 cm tall, designed by Tuulikki Pietilä in the 1990s and sold in its own gift box. The figurines are collected in series, which makes one a safe gift and two a habit.',
      fi: 'Käsityönä valmistettu keraaminen Muumipeikko, noin 6 cm korkea, Tuulikki Pietilän 1990-luvulla suunnittelema ja omassa lahjapakkauksessaan. Figuriineja kerätään sarjoina, joten yksi on varma lahja ja kaksi tapa.',
    },
    priceFrom: 31.25,
    currency: 'EUR',
    priceCheckedAt: '2026-09-05',
    image: 'prod-sk-arabia-moomintroll-mini-figurine',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/arabia-muumi-minifiguriini-muumipeikko',
    details: {
      specs: [
        { key: 'size', value: { en: 'Height about 6 cm', fi: 'Korkeus noin 6 cm' } },
        { key: 'material', value: { en: 'Hand made ceramic', fi: 'Käsityönä valmistettua keramiikkaa' } },
        { key: 'other', label: { en: 'Design', fi: 'Suunnittelu' }, value: { en: 'Tuulikki Pietilä, 1990s', fi: 'Tuulikki Pietilä, 1990-luku' } },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/arabia-muumi-minifiguriini-muumipeikko',
      fetchedAt: '2026-09-05',
    },
  },
  {
    slug: 'sk-arabia-snorkmaiden-mini-figurine',
    category: 'handicrafts',
    brand: 'Arabia',
    name: {
      en: 'Arabia Snorkmaiden mini figurine',
      fi: 'Arabia Niiskuneiti-minifiguriini',
    },
    description: {
      en: 'A hand made ceramic Snorkmaiden about 6 cm tall from Tuulikki Pietilä\'s 1990s series, in its own gift box. Pair it with the Moomintroll and the two stand on a windowsill the way they stand on the book covers.',
      fi: 'Käsityönä valmistettu keraaminen Niiskuneiti, noin 6 cm korkea, Tuulikki Pietilän 1990-luvun sarjasta omassa lahjapakkauksessaan. Muumipeikon pariksi, ja kaksikko seisoo ikkunalaudalla kuten kirjojen kansissa.',
    },
    priceFrom: 31.25,
    currency: 'EUR',
    priceCheckedAt: '2026-09-05',
    image: 'prod-sk-arabia-snorkmaiden-mini-figurine',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/arabia-muumi-niiskuneiti-minifiguuri',
    details: {
      specs: [
        { key: 'size', value: { en: 'Height about 6 cm', fi: 'Korkeus noin 6 cm' } },
        { key: 'material', value: { en: 'Hand made ceramic', fi: 'Käsityönä valmistettua keramiikkaa' } },
        { key: 'other', label: { en: 'Design', fi: 'Suunnittelu' }, value: { en: 'Tuulikki Pietilä, 1990s', fi: 'Tuulikki Pietilä, 1990-luku' } },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/arabia-muumi-niiskuneiti-minifiguuri',
      fetchedAt: '2026-09-05',
    },
  },
  {
    slug: 'sk-lapin-puukko-gift-box',
    category: 'handicrafts',
    brand: 'Samarund',
    name: {
      en: 'Lapland puukko knife with blade guard, gift box',
      fi: 'Lapin puukko teräsuojalla, lahjapakkaus',
    },
    description: {
      en: 'A Lapland style puukko with a blade guard, delivered in a gift box. The shop presents it as the knife for forest trips and everyday chores, and as the kind of object that gets handed down rather than replaced.',
      fi: 'Lapin puukko teräsuojalla, toimitetaan lahjapakkauksessa. Kauppa esittelee sen metsäretkien ja arjen askareiden puukkona ja esineenä, joka peritään ennemmin kuin korvataan.',
    },
    priceFrom: 112.82,
    currency: 'EUR',
    priceCheckedAt: '2026-09-05',
    image: 'prod-sk-lapin-puukko-gift-box',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/lapin-puukko-terasuojalla-lahjapakkaus',
    details: {
      specs: [
        { key: 'other', label: { en: 'Included', fi: 'Mukana' }, value: { en: 'Blade guard and gift box', fi: 'Teräsuoja ja lahjapakkaus' } },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/lapin-puukko-terasuojalla-lahjapakkaus',
      fetchedAt: '2026-09-05',
    },
  },
  {
    slug: 'sk-loimu-sauna-thermometer',
    category: 'handicrafts',
    brand: 'Loimu',
    name: {
      en: 'Loimu sauna thermometer, birch',
      fi: 'Loimu-saunamittari, koivu',
    },
    description: {
      en: 'A sauna thermometer in a birch frame with a clear dial. It answers the only question a guest asks before the first ladle of water, and it looks like it belongs on a log wall rather than beside a boiler.',
      fi: 'Saunamittari koivukehyksessä selkeällä asteikolla. Se vastaa ainoaan kysymykseen, jonka vieras kysyy ennen ensimmäistä löylykauhallista, ja näyttää hirsiseinän esineeltä eikä kattilahuoneen mittarilta.',
    },
    priceFrom: 62.62,
    currency: 'EUR',
    priceCheckedAt: '2026-09-05',
    image: 'prod-sk-loimu-sauna-thermometer',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/loimu-saunamittari-koivu',
    details: {
      specs: [
        { key: 'material', value: { en: 'Birch', fi: 'Koivu' } },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/loimu-saunamittari-koivu',
      fetchedAt: '2026-09-05',
    },
  },
  {
    slug: 'sk-helsingin-villasukkatehdas-wool-socks',
    category: 'handicrafts',
    brand: 'Helsingin Villasukkatehdas',
    name: {
      en: 'Helsingin Villasukkatehdas wool socks',
      fi: 'Helsingin Villasukkatehdas -villasukat',
    },
    description: {
      en: 'Carded wool socks from Finland\'s only traditional wool sock factory, knitted on 1950s machines in Helsinki. 70 per cent mulesing free wool spun in Jämsä and dyed in Kyröskoski, in several sizes and four colours named after bark, moss, lichen and night.',
      fi: 'Karstavillasukat Suomen ainoasta perinteisestä villasukkatehtaasta, neulottu 1950-luvun koneilla Helsingissä. 70 % mulesing-vapaata villaa, kehrätty Jämsässä ja värjätty Kyröskoskella, useita kokoja ja neljä väriä: kaarna, sammal, jäkälä ja yö.',
    },
    priceFrom: 18.7,
    currency: 'EUR',
    priceCheckedAt: '2026-09-05',
    image: 'prod-sk-helsingin-villasukkatehdas-wool-socks',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/helsingin-villasukkatehdas-villasukat-lampaanvilla-70-useita-vareja-ja-kokoja',
    details: {
      specs: [
        { key: 'material', value: { en: '70 % wool (mulesing free), 30 % polyamide', fi: '70 % lampaanvillaa (mulesing-vapaa), 30 % polyamidia' } },
        { key: 'origin', value: { en: 'Knitted in Helsinki, wool spun in Jämsä and dyed in Kyröskoski', fi: 'Neulottu Helsingissä, villa kehrätty Jämsässä ja värjätty Kyröskoskella' } },
        { key: 'size', value: { en: 'Several sizes, four colours', fi: 'Useita kokoja, neljä väriä' } },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/helsingin-villasukkatehdas-villasukat-lampaanvilla-70-useita-vareja-ja-kokoja',
      fetchedAt: '2026-09-05',
    },
  },
  {
    slug: 'sk-halva-salmiakkikalat',
    category: 'treats',
    brand: 'Halva',
    name: {
      en: 'Halva Salmiakkikalat salty liquorice fish 230 g',
      fi: 'Halva Salmiakkikalat 230 g',
    },
    description: {
      en: 'Fish shaped salmiakki sweets from Halva, 230 grams, the bag that sits in every Finnish glove box. Firm chew, intense salty liquorice, and the first thing to hand a visitor who says they want to taste real Finland.',
      fi: 'Halvan kalanmuotoiset salmiakkimakeiset, 230 grammaa, pussi joka löytyy joka suomalaisesta hansikaslokerosta. Napakka purutuntuma, voimakas salmiakki, ja ensimmäinen asia, jonka ojennat vieraalle, joka haluaa maistaa oikeaa Suomea.',
    },
    priceFrom: 7.74,
    currency: 'EUR',
    priceCheckedAt: '2026-09-05',
    image: 'prod-sk-halva-salmiakkikalat',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/halva-salmiakkikalat-230g',
    details: {
      specs: [
        { key: 'weight', value: { en: '230 g', fi: '230 g' } },
      ],
      ingredients: {
        en: 'Sugar, glucose-fructose syrup, modified potato starch, water, gelatine, salmiak (ammonium chloride, origin: EU), liquorice extract, colour (E153), flavourings, glazing agent (E903).',
        fi: 'sokeri, glukoosi-fruktoosisiirappi, muunnettu perunatärkkelys, vesi, liivate, salmiakki (ammoniumkloridi, alkuperä: EU), lakritsiuute, väri (E153), aromit, pintakäsittelyaine (E903).',
      },
      sourceUrl: 'https://suomikauppa.fi/products/halva-salmiakkikalat-230g',
      fetchedAt: '2026-09-05',
    },
  },
  {
    slug: 'sk-kouvolan-lakritsi-500g',
    category: 'treats',
    brand: 'Kouvolan Lakritsi',
    name: {
      en: 'Kouvolan Lakritsi liquorice pieces 500 g',
      fi: 'Kouvolan Lakritsi lakritsipalat 500 g',
    },
    description: {
      en: 'Half a kilo of soft liquorice pieces from Kouvola, made to a recipe born in 1945 and fine tuned in 1960 by an English liquorice specialist. This is what plain liquorice tastes like when nothing is added to hide the root.',
      fi: 'Puoli kiloa pehmeitä lakritsipaloja Kouvolasta, vuonna 1945 syntyneellä ja vuonna 1960 englantilaisen lakritsiasiantuntijan hienosäätämällä reseptillä. Tältä maistuu tavallinen lakritsi, kun mitään ei lisätä peittämään juurta.',
    },
    priceFrom: 10.67,
    currency: 'EUR',
    priceCheckedAt: '2026-09-05',
    image: 'prod-sk-kouvolan-lakritsi-500g',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/kouvolan-lakritsi-lakritsipala-500g-2',
    details: {
      specs: [
        { key: 'weight', value: { en: '500 g', fi: '500 g' } },
        { key: 'other', label: { en: 'Recipe', fi: 'Resepti' }, value: { en: 'From 1945, adjusted in 1960', fi: 'Vuodelta 1945, hienosäädetty 1960' } },
      ],
      ingredients: {
        en: 'Wheat flour, water, sugar, sugar syrup, food molasses, natural flavourings (liquorice extract, aniseed oil), salt, colour (E153), emulsifier (E471), acidity regulator (E500), preservatives (E211, E202).',
        fi: 'VEHNÄJAUHO, vesi, sokeri, sokerisiirappi, elintarvikemelassi, luontaisia aromeja (lakritsiuute, anisöljy), suola, väri (E153), emulgointiaine (E471), happamuudensäätöaine (E500), säilöntäaineet (E211, E202).',
      },
      sourceUrl: 'https://suomikauppa.fi/products/kouvolan-lakritsi-lakritsipala-500g-2',
      fetchedAt: '2026-09-05',
    },
  },
  {
    slug: 'sk-fazer-omar-chocolate-bar',
    category: 'treats',
    brand: 'Fazer',
    name: {
      en: 'Fazer Omar chocolate bar 180 g',
      fi: 'Fazer Omar-suklaalevy 180 g',
    },
    description: {
      en: 'A limited 180 gram bar made for Omar\'s 60th anniversary: the mild creamy Omar toffee that has been sold since 1966, set in Fazer milk chocolate with at least 30 per cent cocoa. Sold for a limited time only.',
      fi: 'Rajoitetun erän 180 gramman levy Omarin 60-vuotisjuhlaan: vuodesta 1966 myyty mieto kermainen Omar-toffee Fazerin maitosuklaassa, kaakaota vähintään 30 %. Myynnissä vain rajoitetun ajan.',
    },
    priceFrom: 7.74,
    currency: 'EUR',
    priceCheckedAt: '2026-09-05',
    image: 'prod-sk-fazer-omar-chocolate-bar',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/fazer-omar-suklaalevy-180-g',
    details: {
      specs: [
        { key: 'weight', value: { en: '180 g', fi: '180 g' } },
        { key: 'other', label: { en: 'Cocoa', fi: 'Kaakao' }, value: { en: 'Milk chocolate with at least 30 % cocoa', fi: 'Maitosuklaassa vähintään 30 % kaakaota' } },
        { key: 'other', label: { en: 'Availability', fi: 'Saatavuus' }, value: { en: 'Limited edition for the 60th anniversary', fi: 'Rajoitettu erä 60-vuotisjuhlaan' } },
      ],
      ingredients: {
        en: 'Milk, sugar, cocoa butter, cocoa mass, glucose syrup, sunflower oil, skimmed milk powder, butter, emulsifier (lecithin incl. soya), caramelised sugar, low fat cocoa powder, salt, flavourings, glazing agent (carnauba wax). May contain nuts, almonds and gluten containing cereals.',
        fi: 'MAITO, sokeri, kaakaovoi, kaakaomassa, glukoosisiirappi, auringonkukkaöljy, rasvaton MAITOjauhe, VOI, emulgointiaine (lesitiini mm. SOIJA), karamellisoitu sokeri, vähärasvainen kaakaojauhe, suola, aromit, pintakäsittelyaine (karnaubavaha). SAATTAA SISÄLTÄÄ PÄHKINÄÄ, MANTELIA JA GLUTEENIA SISÄLTÄVÄÄ VILJAA.',
      },
      sourceUrl: 'https://suomikauppa.fi/products/fazer-omar-suklaalevy-180-g',
      fetchedAt: '2026-09-05',
    },
  },
  {
    slug: 'sk-fazer-salty-suffeli-puffi',
    category: 'treats',
    brand: 'Fazer',
    name: {
      en: 'Karl Fazer Salty Suffeli Puffi chocolate bar 160 g',
      fi: 'Karl Fazer Salty Suffeli Puffi -suklaalevy 160 g',
    },
    description: {
      en: 'Fazer\'s milk chocolate made from fresh milk, with crunchy salty sweet Suffeli corn puffs folded in. 160 grams, at least 30 per cent cocoa, and the answer for anyone who cannot decide between salty and sweet.',
      fi: 'Fazerin tuoreesta maidosta tehty maitosuklaa, jossa on rapeita suolaisen makeita Suffeli-maissipuffeja. 160 grammaa, kaakaota vähintään 30 %, ja vastaus sille, joka ei osaa valita suolaisen ja makean välillä.',
    },
    priceFrom: 7.4,
    currency: 'EUR',
    priceCheckedAt: '2026-09-05',
    image: 'prod-sk-fazer-salty-suffeli-puffi',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/karl-fazer-salty-suffeli-puff-160g',
    details: {
      specs: [
        { key: 'weight', value: { en: '160 g', fi: '160 g' } },
        { key: 'other', label: { en: 'Cocoa', fi: 'Kaakao' }, value: { en: 'Milk chocolate with at least 30 % cocoa', fi: 'Maitosuklaassa vähintään 30 % kaakaota' } },
      ],
      ingredients: {
        en: 'Milk, sugar, cocoa butter, cocoa mass, corn grits, salt, dextrose, emulsifier (soya lecithin), flavouring (natural vanilla). May contain nuts, almonds and gluten containing cereals.',
        fi: 'MAITO, sokeri, kaakaovoi, kaakaomassa, maissirouhe, suola, dekstroosi, emulgointiaine (SOIJAlesitiini), aromi (luontainen vanilja). SAATTAA SISÄLTÄÄ PÄHKINÄÄ, MANTELIA JA GLUTEENIA SISÄLTÄVÄÄ VILJAA.',
      },
      sourceUrl: 'https://suomikauppa.fi/products/karl-fazer-salty-suffeli-puff-160g',
      fetchedAt: '2026-09-05',
    },
  },
  {
    slug: 'sk-tyrkisk-peber-chewy',
    category: 'treats',
    brand: 'Fazer',
    name: {
      en: 'Fazer Tyrkisk Peber Chewy salmiakki pastilles 38 g',
      fi: 'Fazer Tyrkisk Peber Chewy -salmiakkipastilli 38 g',
    },
    description: {
      en: 'Tyrkisk Peber\'s hot salmiakki in a new chewy pastille instead of the hard shell. A 38 gram pocket pack, listed by the shop in August 2026, for people who want salmiakki and a kick in the same mouthful.',
      fi: 'Tyrkisk Peberin tulinen salmiakki uutena pehmeänä pastillina kovan kuoren sijaan. 38 gramman taskupakkaus, kaupan listaama elokuussa 2026, niille jotka haluavat salmiakin ja potkun samassa suupalassa.',
    },
    priceFrom: 1.76,
    currency: 'EUR',
    priceCheckedAt: '2026-09-05',
    image: 'prod-sk-tyrkisk-peber-chewy',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/tyrkisk-peber-chewy-salmiakkipastilli-38g',
    details: {
      specs: [
        { key: 'weight', value: { en: '38 g', fi: '38 g' } },
      ],
      ingredients: {
        en: 'Sugar, glucose syrup, modified potato starch, gelatine, ammonium chloride (salmiak), stabiliser (E420), thickener (E414), salt, glazing agents (E903, E901, E904), flavourings (incl. liquorice), colour (E133). May contain milk and wheat.',
        fi: 'sokeri, glukoosisiirappi, muunnettu perunatärkkelys, liivate, ammoniumkloridi (salmiakki), stabilointiaine (E420), sakeuttamisaine (E414), suola, pintakäsittelyaineet (E903, E901, E904), aromit (mm. lakritsi), väri (E133). SAATTAA SISÄLTÄÄ MAITOA JA VEHNÄÄ.',
      },
      sourceUrl: 'https://suomikauppa.fi/products/tyrkisk-peber-chewy-salmiakkipastilli-38g',
      fetchedAt: '2026-09-05',
    },
  },
  {
    slug: 'sk-tyrkisk-peber-sour-foams',
    category: 'treats',
    brand: 'Fazer',
    name: {
      en: 'Fazer Tyrkisk Peber Sour Foams 150 g',
      fi: 'Fazer Tyrkisk Peber Sour Foams -makeispussi 150 g',
    },
    description: {
      en: 'Soft foam sweets with a mild Tyrkisk Peber heat and sour kiwi strawberry and lemon lime flavours, 150 grams. A gentler way into the pepper liquorice family, and the one to open first with a mixed group.',
      fi: 'Pehmeitä vaahtokarkkeja, joissa on mieto Tyrkisk Peber -tulisuus ja kirpeät kiivi-mansikan ja sitruuna-limen maut, 150 grammaa. Lempeämpi tie pippurilakritsin perheeseen, ja se pussi, joka avataan ensin sekaseurueessa.',
    },
    priceFrom: 3.97,
    currency: 'EUR',
    priceCheckedAt: '2026-09-05',
    image: 'prod-sk-tyrkisk-peber-sour-foams',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/tyrkisk-peber-hot-sour-vaahto-makeispussi-150g',
    details: {
      specs: [
        { key: 'weight', value: { en: '150 g', fi: '150 g' } },
      ],
      ingredients: {
        en: 'Sugar, glucose syrup, gelatine, stabiliser (E420), gelling agent (E440), acidity regulators (E330, E296), colours (E163, E132), flavourings. May contain wheat.',
        fi: 'sokeri, glukoosisiirappi, liivate, stabilointiaine (E420), hyytelöimisaine (E440), happamuudensäätöaineet (E330, E296), värit (E163, E132), aromit. SAATTAA SISÄLTÄÄ VEHNÄÄ.',
      },
      sourceUrl: 'https://suomikauppa.fi/products/tyrkisk-peber-hot-sour-vaahto-makeispussi-150g',
      fetchedAt: '2026-09-05',
    },
  },
  {
    slug: 'sk-marianne-toffee-rae',
    category: 'treats',
    brand: 'Fazer',
    name: {
      en: 'Fazer Marianne Toffee chocolate drops 150 g',
      fi: 'Fazer Marianne Toffee -suklaarae 150 g',
    },
    description: {
      en: 'The Marianne drop series in a toffee version: a glossy crisp shell around a milk chocolate centre with at least 28 per cent cocoa, in a resealable 150 gram bag. Also meant for baking, if any survive that long.',
      fi: 'Marianne-raesarjan toffee-versio: kiiltävä rapea kuori maitosuklaasydämen ympärillä, kaakaota vähintään 28 %, uudelleensuljettavassa 150 gramman pussissa. Tarkoitettu myös leivontaan, jos rakeita riittää sinne asti.',
    },
    priceFrom: 6.15,
    currency: 'EUR',
    priceCheckedAt: '2026-09-05',
    image: 'prod-sk-marianne-toffee-rae',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/marianne-toffee-suklaarae-150-g',
    details: {
      specs: [
        { key: 'weight', value: { en: '150 g', fi: '150 g' } },
        { key: 'other', label: { en: 'Cocoa', fi: 'Kaakao' }, value: { en: 'Milk chocolate with at least 28 % cocoa', fi: 'Maitosuklaassa vähintään 28 % kaakaota' } },
        { key: 'other', label: { en: 'Packaging', fi: 'Pakkaus' }, value: { en: 'Resealable bag', fi: 'Uudelleensuljettava pussi' } },
      ],
      ingredients: {
        en: 'Sugar, cocoa butter, whole milk powder, cocoa mass, skimmed milk powder, vegetable oil (shea), whey powder (from milk), thickener (E414), emulsifier (soya lecithin), colouring food (burnt sugar), glazing agents (E903, E901, E904), flavourings. May contain wheat. Milk chocolate contains vegetable fats in addition to cocoa butter.',
        fi: 'sokeri, kaakaovoi, täysMAITOjauhe, kaakaomassa, rasvaton MAITOjauhe, kasviöljy (shea), herajauhe (MAIDOSTA), sakeuttamisaine (E414), emulgointiaine (SOIJAlesitiini), värjäävä elintarvike (poltettu sokeri), pintakäsittelyaineet (E903, E901, E904), aromit. SAATTAA SISÄLTÄÄ VEHNÄÄ. MAITOSUKLAA SISÄLTÄÄ KAAKAOVOIN LISÄKSI MUITA KASVIRASVOJA.',
      },
      sourceUrl: 'https://suomikauppa.fi/products/marianne-toffee-suklaarae-150-g',
      fetchedAt: '2026-09-05',
    },
  },
  {
    slug: 'sk-fasupala-lakritsi',
    category: 'treats',
    brand: 'Fazer',
    name: {
      en: 'Fazer Fasupala Lakritsi wafer biscuits 199 g',
      fi: 'Fazer Fasupala Lakritsi -vohvelikeksi 199 g',
    },
    description: {
      en: 'Bite sized wafers with a liquorice flavoured filling under a milk chocolate flavoured coating, 199 grams, no palm oil. The liquorice version of a biscuit Finns already eat by the box, listed by the shop in August 2026.',
      fi: 'Suupalan kokoisia vohveleita, joissa on lakritsinmakuinen täyte maitosuklaanmakuisen kuorrutteen alla, 199 grammaa, ei palmuöljyä. Lakritsiversio keksistä, jota suomalaiset syövät jo laatikoittain, kaupan listaama elokuussa 2026.',
    },
    priceFrom: 6.98,
    currency: 'EUR',
    priceCheckedAt: '2026-09-05',
    image: 'prod-sk-fasupala-lakritsi',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/fasupala-lakritsi-vohvelikeksi-199-g',
    details: {
      specs: [
        { key: 'weight', value: { en: '199 g', fi: '199 g' } },
        { key: 'other', label: { en: 'Fat', fi: 'Rasva' }, value: { en: 'No palm oil', fi: 'Ei palmuöljyä' } },
      ],
      ingredients: {
        en: 'Sugar, fully hydrogenated vegetable fat (coconut), wheat flour, skimmed milk powder, whey powder (from milk), dextrose, vegetable fat (shea, rapeseed), cocoa mass, cocoa butter, milk fat, emulsifiers (E472c, lecithin incl. soya), liquorice extract, flavourings (incl. liquorice), salt, raising agents (E500, E503), colour (E160a). May contain hazelnut, egg and other gluten containing cereals.',
        fi: 'sokeri, kokonaan kovetettu kasvirasva (kookos), VEHNÄjauho, rasvaton MAITOjauhe, herajauhe (MAIDOSTA), dekstroosi, kasvirasva (shea, rypsi/rapsi), kaakaomassa, kaakaovoi, MAITOrasva, emulgointiaineet (E472c, lesitiini mm. SOIJA), lakritsiuute, aromit (mm. lakritsi), suola, nostatusaineet (E500, E503), väri (E160a). SAATTAA SISÄLTÄÄ HASSELPÄHKINÄÄ, KANANMUNAA JA MUUTA GLUTEENIA SISÄLTÄVÄÄ VILJAA.',
      },
      sourceUrl: 'https://suomikauppa.fi/products/fasupala-lakritsi-vohvelikeksi-199-g',
      fetchedAt: '2026-09-05',
    },
  },
  {
    slug: 'sk-finnish-flavours-cloudberry-jam',
    category: 'treats',
    brand: 'Finnish Flavours',
    name: {
      en: 'Finnish Flavours premium cloudberry jam 250 g',
      fi: 'Finnish Flavours premium-lakkahillo 250 g',
    },
    description: {
      en: 'Cloudberry jam with 75 per cent Finnish cloudberries and 20 per cent sugar, 250 grams. Cloudberries ripen on Lapland bogs in late July and cannot be farmed at scale, which is why a jar costs what a bag of chocolate does twice over.',
      fi: 'Lakkahilloa, jossa on 75 % suomalaista lakkaa ja 20 % sokeria, 250 grammaa. Lakka kypsyy Lapin soilla heinäkuun lopulla eikä sitä voi viljellä laajassa mitassa, ja siksi purkki maksaa kaksi suklaapussia.',
    },
    priceFrom: 16.19,
    currency: 'EUR',
    priceCheckedAt: '2026-09-05',
    image: 'prod-sk-finnish-flavours-cloudberry-jam',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/finnish-flavours-suomalainen-premium-lakkahillo-250g',
    details: {
      specs: [
        { key: 'weight', value: { en: '250 g', fi: '250 g' } },
        { key: 'contents', value: { en: 'Finnish cloudberry 75 %, sugar 20 %', fi: 'Suomalaista lakkaa 75 %, sokeria 20 %' } },
      ],
      ingredients: {
        en: 'Finnish cloudberry (75 %), sugar (20 %), water, thickener (pectin), preservative (potassium sorbate).',
        fi: 'Suomalainen lakka (75%), sokeri (20%), vesi, sakeuttamisaine (pektiini), säilöntäaine (kaliumsorbaatti).',
      },
      sourceUrl: 'https://suomikauppa.fi/products/finnish-flavours-suomalainen-premium-lakkahillo-250g',
      fetchedAt: '2026-09-05',
    },
  },
  {
    slug: 'sk-lapin-liha-smoked-reindeer-soup',
    category: 'treats',
    brand: 'Lapin Liha',
    name: {
      en: 'Lapin Liha smoked reindeer soup 400 g',
      fi: 'Lapin Liha savuporokeitto 400 g',
    },
    description: {
      en: 'A creamy soup with hot smoked and cold smoked reindeer, 400 grams, made by Lapin Liha in Rovaniemi\'s meat trade. Heat it in a pan; it is the taste of a Lapland cabin lunch in a packet that fits a suitcase.',
      fi: 'Kermainen keitto lämmin- ja kylmäsavustetusta porosta, 400 grammaa, Lapin Lihan valmistama. Lämmitä kattilassa; se on Lapin mökkilounaan maku pakkauksessa, joka mahtuu matkalaukkuun.',
    },
    priceFrom: 8.66,
    currency: 'EUR',
    priceCheckedAt: '2026-09-05',
    image: 'prod-sk-lapin-liha-smoked-reindeer-soup',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/lapin-liha-savuporokeitto-400g',
    details: {
      specs: [
        { key: 'weight', value: { en: '400 g', fi: '400 g' } },
        { key: 'contents', value: { en: 'Hot smoked reindeer 3 % and cold smoked reindeer 3 %', fi: 'Lämminsavustettua pororouhetta 3 % ja kylmäsavustettua pororouhetta 3 %' } },
        { key: 'other', label: { en: 'Preparation', fi: 'Valmistus' }, value: { en: 'Heat in a pan', fi: 'Lämmitä kattilassa' } },
      ],
      ingredients: {
        en: 'Water, lactose free whipping cream (cream, thickener (E407)), modified maize and potato starch, hot smoked reindeer 3 % (reindeer meat 75 %, water, salt, stabilisers (E450, E451), dextrose, preservative (E250)), cold smoked reindeer 3 % (reindeer meat 94 %, salt, dextrose, sugar, antioxidant (E301), preservatives (E250, E252)), processed cheese 3 % (cheese, water, butter, emulsifying salts (E452, E339, E331), salt), maize maltodextrin, beef flavoured stock (water, salt, flavouring, sugar, onion, stabiliser (E415), spices), salt, fat powder (palm oil, rapeseed oil, caseinate), dextrose (maize), spices (black pepper, thyme, onion, garlic, bay leaf, fenugreek), maize starch, flavourings, acidity regulator (E508), emulsifier (E450i).',
        fi: 'Vesi, laktoositon vispikerma (KERMA, sakeuttamisaine (E407), muunneltu maissi- ja perunatärkkelys, lämminsavustettu pororouhe 3 % (poronliha 75 %, vesi, suola, stabilointiaineet (E450, E451), dekstroosi, säilöntäaine (E250)), kylmäsavustettu pororouhe 3 % (poronliha 94 %, suola, dekstroosi, sokeri, hapettumisenestoaine (E301), säilöntäaineet (E250, E252)), sulatejuusto 3 % (JUUSTO, vesi, VOI, sulatesuolat (E452, E339, E331), suola), maissimaltodekstriini, häränmakuinen fondi (vesi, suola, aromi, sokeri, sipuli, stabilointiaine (E415), mausteet), suola, rasvajauhe (palmuöljy, rapsiöljy, kaseinaatti), dekstroosi (maissi), mausteet (mustapippuri, timjami, sipuli, valkosipuli, laakerinlehti, sarviapila), maissitärkkelys, aromit, happamuudensäätöaine (E508), emulgointiaine (E450i).',
      },
      sourceUrl: 'https://suomikauppa.fi/products/lapin-liha-savuporokeitto-400g',
      fetchedAt: '2026-09-05',
    },
  },
  {
    slug: 'sk-vaasan-ruispalat-5pack',
    category: 'treats',
    brand: 'Vaasan',
    name: {
      en: 'Vaasan Ruispalat rye bread 660 g, 12 pcs',
      fi: 'Vaasan Ruispalat 660 g, 12 kpl',
    },
    description: {
      en: 'Vaasan Ruispalat, whole grain rye bread baked on a real sourdough from 100 per cent Finnish grain, 12 pieces in a 660 gram bag. Vaasan calls it Finland\'s most popular bread, and it has 12 per cent fibre.',
      fi: 'Vaasan Ruispalat on aitoon taikinajuureen leivottu täysjyväruisleipä 100 % kotimaisesta viljasta, 12 palaa 660 gramman pussissa. Vaasan kutsuu sitä Suomen suosituimmaksi leiväksi, ja kuitua on 12 %.',
    },
    priceFrom: 6.3,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-sk-vaasan-ruispalat-5pack',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/vaasan-ruispalat-660g-12-kpl-taysjyvaruisleipa',
    details: {
      specs: [
        { key: 'weight', value: { en: '660 g, 12 pieces', fi: '660 g, 12 kpl' } },
        { key: 'contents', value: { en: 'Whole grain rye 87 % of the grain, fibre 12 %', fi: 'Täysjyväruista 87 % viljasta, kuitua 12 %' } },
      ],
      ingredients: {
        en: 'Whole grain rye (flour, meal, malt) Finland, water, wheat flour, wheat gluten, yeast and iodised salt. Whole grain rye 87 % of the grain and 63 % of the bread\'s weight.',
        fi: 'TÄYSJYVÄRUIS (jauho, rouhe, mallas) Suomi, vesi, VEHNÄJAUHO, VEHNÄGLUTEENI, hiiva ja jodioitu suola. Täysjyväruista 87 % leivän viljasta ja 63 % leivän painosta.',
      },
      sourceUrl: 'https://suomikauppa.fi/products/vaasan-ruispalat-660g-12-kpl-taysjyvaruisleipa',
      fetchedAt: '2026-11-06',
    },
  },
  {
    slug: 'sk-poikain-parhaat-freeze-dried-blueberry',
    category: 'treats',
    brand: 'Poikain Parhaat',
    name: {
      en: 'Poikain Parhaat freeze dried blueberries 15 g',
      fi: 'Poikain Parhaat pakastekuivattu mustikka 15 g',
    },
    description: {
      en: 'Whole Finnish forest blueberries, freeze dried and nothing else: 15 grams that weigh nothing in a suitcase and taste of August on a bog. Lactose free, gluten free, vegan, with no added sugar or preservatives.',
      fi: 'Kokonaisia suomalaisia metsämustikoita pakastekuivattuna, ei muuta: 15 grammaa, jotka eivät paina matkalaukussa mitään ja maistuvat elokuun suolta. Laktoositon, gluteeniton, vegaaninen, ilman lisättyä sokeria tai säilöntäaineita.',
    },
    priceFrom: 6.59,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-sk-poikain-parhaat-freeze-dried-blueberry',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/poikain-parhaat-pakastekuivattu-mustikka-15g',
    details: {
      specs: [
        { key: 'weight', value: { en: '15 g', fi: '15 g' } },
        { key: 'contents', value: { en: '100 % Finnish freeze dried blueberry', fi: '100 % suomalaista pakastekuivattua mustikkaa' } },
        { key: 'other', label: { en: 'Diet', fi: 'Ruokavalio' }, value: { en: 'Lactose free, gluten free, vegan, no added sugar, no preservatives', fi: 'Laktoositon, gluteeniton, vegaaninen, sokeriton, säilöntäaineeton' } },
      ],
      ingredients: {
        en: 'Finnish freeze dried blueberry.',
        fi: 'Suomalainen pakastekuivattu mustikka.',
      },
      sourceUrl: 'https://suomikauppa.fi/products/poikain-parhaat-pakastekuivattu-mustikka-15g',
      fetchedAt: '2026-09-05',
    },
  },
  {
    slug: 'rj-arctic-warriors-blueberry-powder',
    category: 'superfoods',
    brand: 'Arctic Warriors',
    name: {
      en: 'Arctic Warriors blueberry powder 45 g',
      fi: 'Arctic Warriors mustikkajauhe 45 g',
    },
    description: {
      en: 'Finnish blueberries dried whole with their juice and ground, nothing added, 45 grams. A spoon goes into porridge, yoghurt or a smoothie; the same berry is sold here through Ruohonjuuri, which ships inside the EU.',
      fi: 'Suomalaista mustikkaa kuivattuna kokonaisena mehuineen ja jauhettuna, ei mitään lisättyä, 45 grammaa. Lusikallinen puuroon, jogurttiin tai smoothieen; sama marja myydään täällä Ruohonjuuren kautta, joka toimittaa EU:n sisälle.',
    },
    priceFrom: 14.9,
    currency: 'EUR',
    priceCheckedAt: '2026-09-05',
    image: 'prod-rj-arctic-warriors-blueberry-powder',
    imageIsPartner: true,
    partnerId: 'ruohonjuuri',
    partnerProductUrl: 'https://www.ruohonjuuri.fi/products/arctic-warriors-mustikkajauhe-45-g',
    details: {
      specs: [
        { key: 'weight', value: { en: '45 g', fi: '45 g' } },
        { key: 'contents', value: { en: '100 % Finnish blueberry, dried whole with the juice', fi: '100 % suomalaista mustikkaa, kuivattu kokonaisena mehuineen' } },
      ],
      sourceUrl: 'https://www.ruohonjuuri.fi/products/arctic-warriors-mustikkajauhe-45-g',
      fetchedAt: '2026-09-05',
    },
  },
  {
    slug: 'rj-poikain-parhaat-blueberry-lemonade',
    // Herkku, ei superfoodi: limonaadi kuuluu juomahyllylle salmiakin viereen.
    category: 'treats',
    brand: 'Poikain Parhaat',
    name: {
      en: 'Poikain Parhaat blueberry lemonade 0.33 l',
      fi: 'Poikain Parhaat mustikkalimonaadi 0,33 l',
    },
    description: {
      en: 'An organic blueberry lemonade made in Vehmainen, Tampere, from real ingredients with no artificial flavours or colours, 0.33 litre bottle. The soft drink to put next to the salmiakki on a Finnish tasting table.',
      fi: 'Luomumustikkalimonaadi, valmistettu Tampereen Vehmaisissa aidoista aineksista ilman keinotekoisia maku- tai väriaineita, 0,33 litran pullo. Virvoitusjuoma salmiakin viereen suomalaiselle maistelupöydälle.',
    },
    priceFrom: 3.6,
    currency: 'EUR',
    priceCheckedAt: '2026-09-05',
    image: 'prod-rj-poikain-parhaat-blueberry-lemonade',
    imageIsPartner: true,
    partnerId: 'ruohonjuuri',
    partnerProductUrl: 'https://www.ruohonjuuri.fi/products/poikain-parhaat-mustikkalimonaadi-033-l',
    details: {
      specs: [
        { key: 'volume', value: { en: '0.33 l', fi: '0,33 l' } },
        { key: 'origin', value: { en: 'Made in Vehmainen, Tampere', fi: 'Valmistettu Tampereen Vehmaisissa' } },
        { key: 'other', label: { en: 'Additives', fi: 'Lisäaineet' }, value: { en: 'Organic, no artificial flavours or colours', fi: 'Luomu, ei keinotekoisia maku- tai väriaineita' } },
      ],
      sourceUrl: 'https://www.ruohonjuuri.fi/products/poikain-parhaat-mustikkalimonaadi-033-l',
      fetchedAt: '2026-09-05',
    },
  },
  {
    slug: 'rj-nordic-koivu-birch-sap',
    category: 'superfoods',
    brand: 'Nordic Koivu',
    name: {
      en: 'Nordic Koivu birch sap 500 ml',
      fi: 'Nordic Koivu koivunmahla 500 ml',
    },
    description: {
      en: 'Birch sap tapped in spring when the tree lifts the water it stored in its roots, bottled straight from the tree without heat treatment or preservatives, 500 ml. It tastes faintly sweet and mostly of cold, clean water.',
      fi: 'Keväällä juoksutettua koivunmahlaa, jonka puu nostaa juuriinsa varastoimasta vedestä, pullotettu suoraan puusta ilman kuumakäsittelyä tai säilöntäaineita, 500 ml. Maku on hennon makea ja enimmäkseen kylmän, puhtaan veden.',
    },
    priceFrom: 6.9,
    currency: 'EUR',
    priceCheckedAt: '2026-09-05',
    image: 'prod-rj-nordic-koivu-birch-sap',
    imageIsPartner: true,
    partnerId: 'ruohonjuuri',
    partnerProductUrl: 'https://www.ruohonjuuri.fi/products/nordic-koivu-koivunmahla-500-ml',
    details: {
      specs: [
        { key: 'volume', value: { en: '500 ml', fi: '500 ml' } },
        { key: 'other', label: { en: 'Processing', fi: 'Käsittely' }, value: { en: 'Not heat treated, no preservatives', fi: 'Ei kuumakäsittelyä, ei säilöntäaineita' } },
      ],
      sourceUrl: 'https://www.ruohonjuuri.fi/products/nordic-koivu-koivunmahla-500-ml',
      fetchedAt: '2026-09-05',
    },
  },
  {
    slug: 'rj-kaino-spruce-sprout-sparkling-075',
    category: 'superfoods',
    brand: 'KAINO Drinks',
    name: {
      en: 'KAINO Drinks spruce sprout organic sparkling 0.75 l',
      fi: 'KAINO Drinks kuusenkerkkä-luomukuohujuoma 0,75 l',
    },
    description: {
      en: 'An alcohol free organic sparkling drink flavoured with spruce sprouts, the tender May shoots of the Finnish spruce, in a 0.75 litre bottle. Made in Vehmainen, Tampere, for the toast at a party where not everyone drinks.',
      fi: 'Alkoholiton luomukuohujuoma, maustettu kuusenkerkällä eli suomalaisen kuusen toukokuisilla versoilla, 0,75 litran pullo. Valmistettu Tampereen Vehmaisissa maljaan juhlassa, jossa kaikki eivät juo.',
    },
    priceFrom: 14.6,
    currency: 'EUR',
    priceCheckedAt: '2026-09-05',
    image: 'prod-rj-kaino-spruce-sprout-sparkling-075',
    imageIsPartner: true,
    partnerId: 'ruohonjuuri',
    partnerProductUrl: 'https://www.ruohonjuuri.fi/products/kaino-drinks-kuusenkerkka-luomukuohujuoma-075-l',
    details: {
      specs: [
        { key: 'volume', value: { en: '0.75 l', fi: '0,75 l' } },
        { key: 'other', label: { en: 'Alcohol', fi: 'Alkoholi' }, value: { en: 'Alcohol free, organic', fi: 'Alkoholiton, luomu' } },
        { key: 'origin', value: { en: 'Made in Vehmainen, Tampere', fi: 'Valmistettu Tampereen Vehmaisissa' } },
      ],
      sourceUrl: 'https://www.ruohonjuuri.fi/products/kaino-drinks-kuusenkerkka-luomukuohujuoma-075-l',
      fetchedAt: '2026-09-05',
    },
  },
  {
    slug: 'rj-yrttipaja-chaga-powder',
    category: 'superfoods',
    brand: 'Yrttipaja',
    name: {
      en: 'Yrttipaja chaga powder 35 g',
      fi: 'Yrttipaja pakurikääpäjauhe 35 g',
    },
    description: {
      en: 'Ground chaga, the black fungus that grows on birch trunks, for brewing as tea: a tablespoon per litre of water, simmered at least ten minutes and strained. 35 grams, the cheapest way to try pakuri before buying chunks.',
      fi: 'Jauhettua pakuria eli koivun rungolla kasvavaa mustaa kääpää teeksi: ruokalusikallinen litraan vettä, keitetään vähintään kymmenen minuuttia ja siivilöidään. 35 grammaa, halvin tapa kokeilla pakuria ennen rouheen ostamista.',
    },
    priceFrom: 11.95,
    currency: 'EUR',
    priceCheckedAt: '2026-09-05',
    image: 'prod-rj-yrttipaja-chaga-powder',
    imageIsPartner: true,
    partnerId: 'ruohonjuuri',
    partnerProductUrl: 'https://www.ruohonjuuri.fi/products/yrttipaja-pakurikaapa-jauhe-35-g',
    details: {
      specs: [
        { key: 'weight', value: { en: '35 g', fi: '35 g' } },
        { key: 'other', label: { en: 'Use', fi: 'Käyttö' }, value: { en: '1 tablespoon per litre of water, simmer at least 10 minutes and strain', fi: '1 rkl litraan vettä, keitä vähintään 10 minuuttia ja siivilöi' } },
      ],
      sourceUrl: 'https://www.ruohonjuuri.fi/products/yrttipaja-pakurikaapa-jauhe-35-g',
      fetchedAt: '2026-09-05',
    },
  },
  {
    slug: 'rj-forestly-mushroom-chips-chili',
    category: 'superfoods',
    brand: 'Forestly Foods',
    name: {
      en: 'Forestly Foods mushroom chips, chili 50 g',
      fi: 'Forestly Foods sienisipsi, chili 50 g',
    },
    description: {
      en: 'Crisp chips made from organically grown shiitake mushrooms, gently cooked and seasoned with chili, salt and pepper, 50 grams. Umami in a bag, for the sofa or crumbled over a soup.',
      fi: 'Rapeita sipsejä luonnonmukaisesti kasvatetusta siitakesienestä, hellävaraisesti kypsennettynä ja maustettuna chilillä, suolalla ja pippurilla, 50 grammaa. Umamia pussissa, sohvalle tai keiton päälle murustettuna.',
    },
    priceFrom: 4.8,
    currency: 'EUR',
    priceCheckedAt: '2026-09-05',
    image: 'prod-rj-forestly-mushroom-chips-chili',
    imageIsPartner: true,
    partnerId: 'ruohonjuuri',
    partnerProductUrl: 'https://www.ruohonjuuri.fi/products/forestly-foods-sienisipsi-chili-50-g',
    details: {
      specs: [
        { key: 'weight', value: { en: '50 g', fi: '50 g' } },
        { key: 'contents', value: { en: 'Organically grown shiitake, chili, salt and pepper', fi: 'Luonnonmukaisesti kasvatettua siitaketta, chiliä, suolaa ja pippuria' } },
      ],
      sourceUrl: 'https://www.ruohonjuuri.fi/products/forestly-foods-sienisipsi-chili-50-g',
      fetchedAt: '2026-09-05',
    },
  },
  // ── katalogin täydennys 2026-09-05 ─────────────────────────────────────────
  // Vesa 5.9.: 'miten voi olla että makiaa on vain kaksi tuotetta', 'tekstiileissä
  // vain yksi tuote', 'herkut-osio on aivan poor', 'superfoodeja vain 5', 'miksi on
  // jätetty vajaita gridejä'. 42 tuotetta kumppanien omista Shopify-tiedoista
  // (products.json, luettu 2026-09-05): hinta, kuva ja tiedot kumppanin sivulta.
  // Ryhmät täytetty neljällä jaollisiksi (xl-ruudukko on 4 saraketta).
  {
    slug: 'sk-muurla-moomin-80v-tray',
    category: 'design',
    brand: 'Muurla',
    name: {
      en: 'Muurla Moomin 80 years tray 27 x 20 cm',
      fi: 'Muurla Muumi 80v -tarjotin 27 x 20 cm',
    },
    description: {
      en: 'A 27 by 20 cm tray from Muurla\'s Moomin 80 years series, dishwasher safe. The size that carries two mugs and a plate of biscuits from the kitchen to the sofa, and looks like part of the table once it is there.',
      fi: '27 x 20 cm tarjotin Muurlan Muumi 80 vuotta -sarjasta, konepesun kestävä. Koko, jolla kaksi mukia ja keksilautanen kulkevat keittiöstä sohvalle, ja joka näyttää pöydän osalta perille päästyään.',
    },
    priceFrom: 32.62,
    currency: 'EUR',
    priceCheckedAt: '2026-09-05',
    image: 'prod-sk-muurla-moomin-80v-tray',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/muurla-muumi-80v-tarjotin-27cmx20cm',
    details: {
      specs: [
        { key: 'size', value: { en: '27 x 20 cm', fi: '27 x 20 cm' } },
        { key: 'care', value: { en: 'Dishwasher safe', fi: 'Konepesun kestävä' } },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/muurla-muumi-80v-tarjotin-27cmx20cm',
      fetchedAt: '2026-09-05',
    },
  },
  {
    slug: 'sk-muurla-moomin-glass-box-yhdessa',
    category: 'design',
    brand: 'Muurla',
    name: {
      en: 'Muurla Moomin glass box Yhdessä 11.5 cm',
      fi: 'Muurla Muumi-lasirasia Yhdessä 11,5 cm',
    },
    description: {
      en: 'A heart shaped glass box from Muurla\'s Yhdessä, together, mini series, 11.5 by 10 by 5.5 cm, hand wash, delivered in its retail box. Meant for the small treasures: rings, a folded note, a first tooth.',
      fi: 'Sydämenmuotoinen lasirasia Muurlan Yhdessä-minisarjasta, 11,5 x 10 x 5,5 cm, käsinpesu, toimitetaan myyntipakkauksessa. Tarkoitettu pienille aarteille: sormuksille, taitetulle lapulle, ensimmäiselle hampaalle.',
    },
    priceFrom: 25.04,
    currency: 'EUR',
    priceCheckedAt: '2026-09-05',
    image: 'prod-sk-muurla-moomin-glass-box-yhdessa',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/muurla-muumi-lasirasia-yhdessa-11-5cm',
    details: {
      specs: [
        { key: 'size', value: { en: '11.5 x 10 x 5.5 cm', fi: '11,5 x 10 x 5,5 cm' } },
        { key: 'care', value: { en: 'Hand wash', fi: 'Käsinpesu' } },
        { key: 'other', label: { en: 'Packaging', fi: 'Pakkaus' }, value: { en: 'Retail box', fi: 'Myyntipakkaus' } },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/muurla-muumi-lasirasia-yhdessa-11-5cm',
      fetchedAt: '2026-09-05',
    },
  },
  // ── katalogin täydennys 2026-09-05 ─────────────────────────────────────────
  // Vesa 5.9.: 'miten voi olla että makiaa on vain kaksi tuotetta', 'tekstiileissä
  // vain yksi tuote', 'herkut-osio on aivan poor', 'superfoodeja vain 5', 'miksi on
  // jätetty vajaita gridejä'. 42 tuotetta kumppanien omista Shopify-tiedoista
  // (products.json, luettu 2026-09-05): hinta, kuva ja tiedot kumppanin sivulta.
  // Ryhmät täytetty neljällä jaollisiksi (xl-ruudukko on 4 saraketta).
  {
    slug: 'sk-aurora-borealis-reindeer-tealight',
    category: 'design',
    brand: 'Aurora Borealis',
    name: {
      en: 'Aurora Borealis reindeer tealight holder 10 cm',
      fi: 'Aurora Borealis poro-kynttilänjalka 10 cm',
    },
    description: {
      en: 'A polished metal tealight holder shaped as a reindeer, 10 cm tall. The small Lapland object for a windowsill in December, and light enough to post in a padded envelope.',
      fi: 'Kiiltävää metallia oleva poronmuotoinen tuikkukynttilänjalka, korkeus 10 cm. Pieni Lapin esine joulukuun ikkunalaudalle, ja niin kevyt että se lähtee pehmustetussa kirjekuoressa.',
    },
    priceFrom: 21.27,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-sk-aurora-borealis-reindeer-tealight',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/aurora-borealis-kynttilanjalka-poro-kiiltava-10-cm',
    details: {
      specs: [
        { key: 'size', value: { en: 'Height 10 cm', fi: 'Korkeus 10 cm' } },
        { key: 'material', value: { en: 'Polished metal', fi: 'Kiiltävä metalli' } },
        { key: 'other', label: { en: 'For', fi: 'Sopii' }, value: { en: 'Tealight', fi: 'Lämpökynttilä' } },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/aurora-borealis-kynttilanjalka-poro-kiiltava-10-cm',
      fetchedAt: '2026-09-05',
    },
  },
  {
    slug: 'sk-muurla-moomin-bottle-05l-marjat',
    category: 'design',
    brand: 'Muurla',
    name: {
      en: 'Muurla Moomin glass bottle 0.5 l, Berries',
      fi: 'Muurla Muumi-lasipullo 0,5 l, Marjat',
    },
    description: {
      en: 'A half litre soda glass bottle with a tight swing top and the Berries print, dishwasher safe. Muurla makes them for juice and salad dressing, and the half litre is the size that fits a fridge door.',
      fi: 'Puolen litran soodalasipullo tiiviillä patenttikorkilla ja Marjat-kuvituksella, konepesun kestävä. Muurla tekee ne mehulle ja salaatinkastikkeelle, ja puoli litraa on koko, joka mahtuu jääkaapin oveen.',
    },
    priceFrom: 13.18,
    currency: 'EUR',
    priceCheckedAt: '2026-09-05',
    image: 'prod-sk-muurla-moomin-bottle-05l-marjat',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/muurla-muumi-lasipullo-0-5l-marjat',
    details: {
      specs: [
        { key: 'volume', value: { en: '0.5 l', fi: '0,5 l' } },
        { key: 'material', value: { en: 'Soda glass, swing top', fi: 'Soodalasi, patenttikorkki' } },
        { key: 'care', value: { en: 'Dishwasher safe', fi: 'Konepesun kestävä' } },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/muurla-muumi-lasipullo-0-5l-marjat',
      fetchedAt: '2026-09-05',
    },
  },
  {
    slug: 'nb-hattifatteners-cushion',
    category: 'design',
    brand: 'Nordicbuddies',
    name: {
      en: 'Hattifatteners cushion',
      fi: 'Hattivatit-tyyny',
    },
    description: {
      en: 'A polyester cushion shaped like a row of Hattifatteners, 45 to 75 by 30 to 50 by 10 cm, hand wash only. It arrives vacuum packed and takes a day to swell back to shape, which is the only time the Hattifatteners keep still.',
      fi: 'Hattivattirivin muotoinen polyesterityyny, 45–75 x 30–50 x 10 cm, vain käsinpesu. Tulee tyhjiöpakattuna ja pullistuu päivässä muotoonsa, ja se on ainoa hetki jolloin hattivatit pysyvät paikoillaan.',
    },
    priceFrom: 39.9,
    currency: 'EUR',
    priceCheckedAt: '2026-09-05',
    image: 'prod-nb-hattifatteners-cushion',
    imageIsPartner: true,
    partnerId: 'nordicbuddies',
    partnerProductUrl: 'https://www.nordicbuddies.com/products/hattifatteners-cushion',
    details: {
      specs: [
        { key: 'material', value: { en: 'Polyester', fi: 'Polyesteri' } },
        { key: 'size', value: { en: '45–75 x 30–50 x 10 cm', fi: '45–75 x 30–50 x 10 cm' } },
        { key: 'care', value: { en: 'Hand wash only', fi: 'Vain käsinpesu' } },
        { key: 'other', label: { en: 'Packaging', fi: 'Pakkaus' }, value: { en: 'Vacuum packed, returns to shape after unpacking', fi: 'Tyhjiöpakattu, palautuu muotoonsa avattaessa' } },
      ],
      sourceUrl: 'https://www.nordicbuddies.com/products/hattifatteners-cushion',
      fetchedAt: '2026-09-05',
    },
  },
  {
    slug: 'sk-emendo-moomin-sauna-seat-cover',
    category: 'handicrafts',
    brand: 'Emendo',
    name: {
      en: 'Emendo Moomin Love sauna seat cover 150 x 50 cm, brown',
      fi: 'Emendo Rakkausmuumi-laudeliina 150 x 50 cm, ruskea',
    },
    description: {
      en: 'A 150 by 50 cm linen and cotton sauna seat cover with Tove Jansson\'s original Moomin drawings, an official licensed product. Linen absorbs moisture and takes hard washing, so it goes on the bench or stands behind the back.',
      fi: '150 x 50 cm pellava-puuvillainen laudeliina Tove Janssonin alkuperäispiirustuksilla, virallinen lisenssituote. Pellava imee kosteutta ja kestää kovan pesun, joten se menee lauteelle tai pystyyn selän taakse.',
    },
    priceFrom: 43.8,
    currency: 'EUR',
    priceCheckedAt: '2026-09-05',
    image: 'prod-sk-emendo-moomin-sauna-seat-cover',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/emendo-rakkausmuumi-laudeliina-ruskea',
    details: {
      specs: [
        { key: 'size', value: { en: '150 x 50 cm', fi: '150 x 50 cm' } },
        { key: 'material', value: { en: 'Linen 60 %, cotton 40 %', fi: 'Pellava 60 %, puuvilla 40 %' } },
        { key: 'other', label: { en: 'Licence', fi: 'Lisenssi' }, value: { en: 'Official Moomin Characters product', fi: 'Virallinen Moomin Characters -tuote' } },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/emendo-rakkausmuumi-laudeliina-ruskea',
      fetchedAt: '2026-09-05',
    },
  },
  {
    slug: 'sk-rento-pino-sauna-seat-cover',
    category: 'handicrafts',
    brand: 'Rento',
    name: {
      en: 'Rento Pino sauna seat cover 50 x 150 cm, grey',
      fi: 'Rento Pino -laudeliina 50 x 150 cm, harmaa',
    },
    description: {
      en: 'A jacquard woven cotton sauna seat cover, 50 by 150 cm, designed by Anna Säteri for Rento. Light cotton feels cool against the skin on a hot bench, absorbs sweat and dries fast, and the pattern survives the wash.',
      fi: 'Jacquard-kudottu puuvillainen laudeliina, 50 x 150 cm, Anna Säterin suunnittelema Rennolle. Kevyt puuvilla tuntuu vilpoisalta kuumalla lauteella, imee hien ja kuivuu nopeasti, ja kuosi kestää pesun.',
    },
    priceFrom: 36.5,
    currency: 'EUR',
    priceCheckedAt: '2026-09-05',
    image: 'prod-sk-rento-pino-sauna-seat-cover',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/rento-pino-laudeliina-50x150-cm-harmaa',
    details: {
      specs: [
        { key: 'size', value: { en: '50 x 150 cm', fi: '50 x 150 cm' } },
        { key: 'material', value: { en: 'Jacquard woven cotton', fi: 'Jacquard-kudottu puuvilla' } },
        { key: 'other', label: { en: 'Design', fi: 'Suunnittelu' }, value: { en: 'Anna Säteri', fi: 'Anna Säteri' } },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/rento-pino-laudeliina-50x150-cm-harmaa',
      fetchedAt: '2026-09-05',
    },
  },
  {
    slug: 'sk-moomin-chocolate-chip-biscuit-tin',
    category: 'treats',
    brand: 'Moomin',
    name: {
      en: 'Moomin chocolate chip biscuits in a tin 200 g',
      fi: 'Muumi-suklaahippukeksit peltirasiassa 200 g',
    },
    description: {
      en: 'Mini chocolate chip biscuits, 200 grams, in a Moomin tin that outlives the biscuits as a storage box. The chocolate pieces are 16 per cent of the biscuit and carry at least 40 per cent cocoa solids.',
      fi: 'Pieniä suklaahippukeksejä, 200 grammaa, Muumi-peltirasiassa, joka jää keksien jälkeen säilytysrasiaksi. Suklaapaloja on 16 % keksistä, ja niissä on kaakaokuiva-ainetta vähintään 40 %.',
    },
    priceFrom: 12.42,
    currency: 'EUR',
    priceCheckedAt: '2026-09-05',
    image: 'prod-sk-moomin-chocolate-chip-biscuit-tin',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/muumi-suklaahippukeksi-peltirasiassa-200g',
    details: {
      specs: [
        { key: 'weight', value: { en: '200 g', fi: '200 g' } },
        { key: 'contents', value: { en: 'Chocolate pieces 16 %, cocoa solids at least 40 % in the chocolate', fi: 'Suklaapaloja 16 %, suklaassa kaakaokuiva-ainetta vähintään 40 %' } },
        { key: 'other', label: { en: 'Packaging', fi: 'Pakkaus' }, value: { en: 'Collectable tin, reusable as a storage box', fi: 'Keräilypurkki, jää säilytysrasiaksi' } },
      ],
      ingredients: {
        en: 'Wheat flour, sugar, vegetable fat (palm), chocolate pieces (16 %) [sugar, cocoa mass, cocoa butter, emulsifier (sunflower lecithin)], desiccated coconut, brown sugar, low fat cocoa powder, salt, raising agent (ammonium carbonate), natural flavouring. May contain small amounts of egg, milk, hazelnut, pecan and macadamia.',
        fi: 'Vehnäjauho, sokeri, kasvirasva (palmu), suklaapalat (16 %) [sokeri, kaakaomassa, kaakaovoi, emulgointiaine (auringonkukkalesitiini)], kuivattu kookos, ruskea sokeri, vähärasvainen kaakaojauhe, suola, nostatusaine (ammoniumkarbonaatti), luonnollinen aromi. Saattaa sisältää pieniä määriä kananmunaa, maitoa, hasselpähkinää, pekaanipähkinää ja makadamiapähkinää.',
      },
      sourceUrl: 'https://suomikauppa.fi/products/muumi-suklaahippukeksi-peltirasiassa-200g',
      fetchedAt: '2026-09-05',
    },
  },
  {
    slug: 'sk-paulig-cafe-new-york-beans',
    category: 'treats',
    brand: 'Paulig',
    name: {
      en: 'Paulig Café New York coffee beans 450 g',
      fi: 'Paulig Café New York kahvipavut 450 g',
    },
    description: {
      en: 'A medium dark bean coffee, 450 grams, Latin American arabica with Brazilian beans for sweetness and a fruity edge. Paulig has roasted coffee in Finland since 1876, and Finns drink more of it per head than anyone else.',
      fi: 'Keskitumma papukahvi, 450 grammaa, Latinalaisen Amerikan arabicaa ja makeutta antavia brasilialaisia papuja, hedelmäinen vivahde. Paulig on paahtanut kahvia Suomessa vuodesta 1876, ja suomalaiset juovat sitä henkeä kohti enemmän kuin kukaan muu.',
    },
    priceFrom: 16.94,
    currency: 'EUR',
    priceCheckedAt: '2026-09-05',
    image: 'prod-sk-paulig-cafe-new-york-beans',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/paulig-cafe-new-york-450g-papukahvi-rfa',
    details: {
      specs: [
        { key: 'weight', value: { en: '450 g', fi: '450 g' } },
        { key: 'other', label: { en: 'Roast', fi: 'Paahto' }, value: { en: 'Medium dark, whole beans', fi: 'Keskitumma, kokonaiset pavut' } },
        { key: 'origin', value: { en: 'Latin American arabica and Brazilian beans', fi: 'Latinalaisen Amerikan arabica ja brasilialaiset pavut' } },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/paulig-cafe-new-york-450g-papukahvi-rfa',
      fetchedAt: '2026-09-05',
    },
  },
  // ── katalogin täydennys 2026-09-05 ─────────────────────────────────────────
  // Vesa 5.9.: 'miten voi olla että makiaa on vain kaksi tuotetta', 'tekstiileissä
  // vain yksi tuote', 'herkut-osio on aivan poor', 'superfoodeja vain 5', 'miksi on
  // jätetty vajaita gridejä'. 42 tuotetta kumppanien omista Shopify-tiedoista
  // (products.json, luettu 2026-09-05): hinta, kuva ja tiedot kumppanin sivulta.
  // Ryhmät täytetty neljällä jaollisiksi (xl-ruudukko on 4 saraketta).
  {
    slug: 'rj-korpihilla-spruce-sprout-sparkling-750',
    category: 'superfoods',
    brand: 'Korpihilla',
    name: {
      en: 'Korpihilla sparkling spruce sprout drink 750 ml',
      fi: 'Korpihilla kuohuva kuusenkerkkäjuoma 750 ml',
    },
    description: {
      en: 'A non alcoholic sparkling drink made by hand from spruce sprouts in Finnish Lapland, 750 ml. Named Finland\'s best drink in 2005 by the magazine Viisi Tähteä, and still the bottle to open when the toast has to taste of the forest.',
      fi: 'Alkoholiton kuohujuoma, tehty käsityönä kuusenkerkistä Suomen Lapissa, 750 ml. Viisi Tähteä -lehti valitsi sen Suomen parhaaksi juomaksi 2005, ja se on yhä pullo, joka avataan kun maljan pitää maistua metsältä.',
    },
    priceFrom: 18.5,
    currency: 'EUR',
    priceCheckedAt: '2026-09-05',
    image: 'prod-rj-korpihilla-spruce-sprout-sparkling-750',
    imageIsPartner: true,
    partnerId: 'ruohonjuuri',
    partnerProductUrl: 'https://www.ruohonjuuri.fi/products/korpihilla-kuohuva-kuusenkerkka-kuohujuoma-750-ml',
    details: {
      specs: [
        { key: 'volume', value: { en: '750 ml', fi: '750 ml' } },
        { key: 'origin', value: { en: 'Made by hand in Finnish Lapland', fi: 'Tehty käsityönä Suomen Lapissa' } },
        { key: 'other', label: { en: 'Alcohol', fi: 'Alkoholi' }, value: { en: 'Alcohol free', fi: 'Alkoholiton' } },
        { key: 'other', label: { en: 'Award', fi: 'Palkinto' }, value: { en: 'Finland\'s best drink 2005, Viisi Tähteä magazine', fi: 'Suomen paras juoma 2005, Viisi Tähteä -lehti' } },
      ],
      sourceUrl: 'https://www.ruohonjuuri.fi/products/korpihilla-kuohuva-kuusenkerkka-kuohujuoma-750-ml',
      fetchedAt: '2026-09-05',
    },
  },
  // ── katalogin täydennys 2026-09-05 ─────────────────────────────────────────
  // Vesa 5.9.: 'miten voi olla että makiaa on vain kaksi tuotetta', 'tekstiileissä
  // vain yksi tuote', 'herkut-osio on aivan poor', 'superfoodeja vain 5', 'miksi on
  // jätetty vajaita gridejä'. 42 tuotetta kumppanien omista Shopify-tiedoista
  // (products.json, luettu 2026-09-05): hinta, kuva ja tiedot kumppanin sivulta.
  // Ryhmät täytetty neljällä jaollisiksi (xl-ruudukko on 4 saraketta).
  {
    slug: 'rj-raitaniemi-sea-buckthorn-powder',
    category: 'superfoods',
    brand: 'Marjatila Raitaniemi',
    name: {
      en: 'Marjatila Raitaniemi sea buckthorn powder 100 g',
      fi: 'Marjatila Raitaniemi tyrnijauhe 100 g',
    },
    description: {
      en: 'Sea buckthorn dried and ground whole, seeds included, on a Finnish berry farm, 100 grams. One teaspoon stands for a decilitre of fresh berries, and the powder is dried down to 3 to 5 per cent moisture, which is why it keeps for years.',
      fi: 'Tyrniä kuivattuna ja jauhettuna kokonaisena siemenineen suomalaisella marjatilalla, 100 grammaa. Teelusikallinen vastaa desilitraa tuoreita marjoja, ja jauhe on kuivattu 3–5 prosentin kosteuteen, siksi se säilyy vuosia.',
    },
    priceFrom: 12.5,
    currency: 'EUR',
    priceCheckedAt: '2026-09-05',
    image: 'prod-rj-raitaniemi-sea-buckthorn-powder',
    imageIsPartner: true,
    partnerId: 'ruohonjuuri',
    partnerProductUrl: 'https://www.ruohonjuuri.fi/products/marjatila-raitaniemi-tyrnijauhe-100-g',
    details: {
      specs: [
        { key: 'weight', value: { en: '100 g', fi: '100 g' } },
        { key: 'contents', value: { en: 'Sea buckthorn, ground whole with the seeds', fi: 'Tyrni, jauhettu kokonaisena siemenineen' } },
        { key: 'other', label: { en: 'Dosage', fi: 'Annostus' }, value: { en: '1 to 3 teaspoons a day in porridge or yoghurt', fi: '1–3 teelusikallista päivässä puuroon tai jogurttiin' } },
        { key: 'other', label: { en: 'Equivalent', fi: 'Vastaavuus' }, value: { en: '1 teaspoon of powder equals 1 dl of fresh berries', fi: '1 teelusikallinen jauhetta vastaa 1 dl tuoreita marjoja' } },
      ],
      sourceUrl: 'https://www.ruohonjuuri.fi/products/marjatila-raitaniemi-tyrnijauhe-100-g',
      fetchedAt: '2026-09-05',
    },
  },
  {
    slug: 'rj-raitaniemi-crowberry-powder',
    category: 'superfoods',
    brand: 'Marjatila Raitaniemi',
    name: {
      en: 'Marjatila Raitaniemi crowberry powder 100 g',
      fi: 'Marjatila Raitaniemi variksenmarjajauhe 100 g',
    },
    description: {
      en: 'Finnish crowberry picked from the wild, dried whole and ground, nothing added, 100 grams. Crowberry is the black berry that carpets Lapland fell slopes and rarely reaches a shop, so this is the closest most people get to eating one.',
      fi: 'Suomalaista luonnosta kerättyä variksenmarjaa kokonaisena kuivattuna ja jauhettuna, ei mitään lisättyä, 100 grammaa. Variksenmarja on Lapin tunturirinteiden musta marja, jota harvoin näkee kaupassa, joten tämä on lähimpänä sen maistamista.',
    },
    priceFrom: 11.7,
    currency: 'EUR',
    priceCheckedAt: '2026-09-05',
    image: 'prod-rj-raitaniemi-crowberry-powder',
    imageIsPartner: true,
    partnerId: 'ruohonjuuri',
    partnerProductUrl: 'https://www.ruohonjuuri.fi/products/marjatila-raitaniemi-variksenmarjajauhe-100g',
    details: {
      specs: [
        { key: 'weight', value: { en: '100 g', fi: '100 g' } },
        { key: 'contents', value: { en: '100 % Finnish crowberry, dried and ground whole', fi: '100 % suomalaista variksenmarjaa, kuivattu ja jauhettu kokonaisena' } },
        { key: 'other', label: { en: 'Additives', fi: 'Lisäaineet' }, value: { en: 'None, no preservatives', fi: 'Ei lisä- eikä säilöntäaineita' } },
      ],
      sourceUrl: 'https://www.ruohonjuuri.fi/products/marjatila-raitaniemi-variksenmarjajauhe-100g',
      fetchedAt: '2026-09-05',
    },
  },
  // ── katalogin täydennys 2026-09-05 ─────────────────────────────────────────
  // Vesa 5.9.: 'miten voi olla että makiaa on vain kaksi tuotetta', 'tekstiileissä
  // vain yksi tuote', 'herkut-osio on aivan poor', 'superfoodeja vain 5', 'miksi on
  // jätetty vajaita gridejä'. 42 tuotetta kumppanien omista Shopify-tiedoista
  // (products.json, luettu 2026-09-05): hinta, kuva ja tiedot kumppanin sivulta.
  // Ryhmät täytetty neljällä jaollisiksi (xl-ruudukko on 4 saraketta).
  // ── katalogin täydennys 2026-09-05 ─────────────────────────────────────────
  // Vesa 5.9.: 'miten voi olla että makiaa on vain kaksi tuotetta', 'tekstiileissä
  // vain yksi tuote', 'herkut-osio on aivan poor', 'superfoodeja vain 5', 'miksi on
  // jätetty vajaita gridejä'. 42 tuotetta kumppanien omista Shopify-tiedoista
  // (products.json, luettu 2026-09-05): hinta, kuva ja tiedot kumppanin sivulta.
  // Ryhmät täytetty neljällä jaollisiksi (xl-ruudukko on 4 saraketta).
  {
    slug: 'sk-poikain-parhaat-puolukka',
    category: 'superfoods',
    brand: 'Poikain Parhaat',
    name: {
      en: 'Poikain Parhaat freeze dried lingonberries 15 g',
      fi: 'Poikain Parhaat pakastekuivattu puolukka 15 g',
    },
    description: {
      en: 'Whole Finnish lingonberries, freeze dried and nothing else, 15 grams. Freeze drying keeps the colour, the bite and the vitamins and fibre, and the bag weighs nothing in a suitcase. Lactose free, gluten free, vegan, no added sugar or preservatives.',
      fi: 'Kokonaisia suomalaisia puolukoita pakastekuivattuna, ei mitään muuta, 15 grammaa. Pakastekuivaus säilyttää värin, rakenteen sekä vitamiinit ja kuidut, ja pussi ei paina matkalaukussa mitään. Laktoositon, gluteeniton, vegaaninen, ilman lisättyä sokeria tai säilöntäaineita.',
    },
    priceFrom: 6.59,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-sk-poikain-parhaat-puolukka',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/poikain-parhaat-pakastekuivattu-puolukka-15g',
    details: {
      specs: [
        { key: 'weight', value: { en: '15 g', fi: '15 g' } },
        { key: 'contents', value: { en: '100 % Finnish freeze dried lingonberry', fi: '100 % suomalaista pakastekuivattua puolukkaa' } },
        { key: 'other', label: { en: 'Diet', fi: 'Ruokavalio' }, value: { en: 'Lactose free, gluten free, vegan, no added sugar, no preservatives', fi: 'Laktoositon, gluteeniton, vegaaninen, sokeriton, säilöntäaineeton' } },
      ],
      ingredients: {
        en: 'Finnish freeze dried lingonberry.',
        fi: 'Suomalainen pakastekuivattu puolukka.',
      },
      sourceUrl: 'https://suomikauppa.fi/products/poikain-parhaat-pakastekuivattu-puolukka-15g',
      fetchedAt: '2026-09-05',
    },
  },
  // Talvi- ja joulutuotteet 6.11.2026: kauppojen omista tuoteluetteloista (Shopify products.json,
  // Nordic Nestin Adtraction-syöte + tuotesivu). Hinta ja tiedot luettu 2026-11-06.
  {
    slug: 'iittala-glass-baubles-red',
    category: 'design',
    brand: 'Iittala',
    name: {
      en: 'Iittala glass Christmas baubles 80 mm, red, 5 pcs',
      fi: 'Iittala lasiset joulupallot 80 mm, punainen, 5 kpl',
    },
    description: {
      en: 'A set of 5 red Christmas baubles in mouth-blown glass from Iittala, each 80 mm across and hung from a silk ribbon. Each one is mouth-blown, so the shape and the shade of red vary slightly from bauble to bauble. Hang them on the tree or on a branch in a vase, or use them in a table arrangement.',
      fi: 'Iittalan setissä on 5 punaista suupuhallettua lasijoulupalloa, joiden halkaisija on 80 mm ja jotka ripustetaan silkkinauhalla. Jokainen pallo on suupuhallettu, joten muoto ja punaisen sävy vaihtelevat hieman pallosta toiseen. Ne sopivat kuuseen, maljakossa olevaan oksaan tai pöytäasetelmaan.',
    },
    priceFrom: 44.5,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-iittala-glass-baubles-red',
    imageIsPartner: true,
    partnerId: 'nordicnest',
    partnerProductUrl: 'https://www.nordicnest.fi/tuotemerkit/iittala/iittalan-punainen-joulupallo-lasi-80-mm/?variantId=32741-01',
    details: {
      specs: [
        { key: 'contents', value: { en: '5 baubles', fi: '5 joulupalloa' } },
        { key: 'size', value: { en: 'Diameter 8 cm', fi: 'Halkaisija 8 cm' } },
        { key: 'material', value: { en: 'Mouth-blown glass', fi: 'Suupuhallettu lasi' } },
        { key: 'color', value: { en: 'Red', fi: 'Punainen' } },
        { key: 'weight', value: { en: '0.706 kg gross', fi: '0,706 kg bruttopaino' } },
        { key: 'other', label: { en: 'Item number and EAN', fi: 'Tuotenumero ja EAN' }, value: { en: '32741-01, EAN 6411923679978', fi: '32741-01, EAN 6411923679978' } },
      ],
      sourceUrl: 'https://www.nordicnest.fi/tuotemerkit/iittala/iittalan-punainen-joulupallo-lasi-80-mm/?variantId=32741-01',
      fetchedAt: '2026-11-06',
    },
  },
  {
    slug: 'iittala-toikka-annual-bird-2026',
    category: 'design',
    brand: 'Iittala',
    name: {
      en: 'Iittala Birds by Toikka annual bird 2026, Lakla',
      fi: 'Iittala Birds by Toikka -vuosilintu 2026, Lakla',
    },
    description: {
      en: 'Lakla is the 2026 annual bird in Iittala\'s Birds by Toikka series, an orange mouth-blown glass bird designed by Oiva Toikka. Iittala releases a new annual bird every year with its own pattern and colour combination, and the annual birds have become popular with collectors. Each bird is blown by glassblowers at the Iittala glass factory in Finland, so small air bubbles and variations in thickness can occur.',
      fi: 'Lakla on Iittalan Birds by Toikka -sarjan vuosilintu 2026, Oiva Toikan suunnittelema oranssi suupuhallettu lasilintu. Iittala julkaisee joka vuosi uuden vuosilinnun, jolla on oma kuvionsa ja värien yhdistelmänsä, ja vuosilinnuista on tullut suosittuja keräilykohteita. Jokaisen linnun puhaltaa lasinpuhaltaja Iittalan lasitehtaalla Suomessa, joten lasissa voi olla pieniä ilmakuplia ja paksuuseroja.',
    },
    priceFrom: 450,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-iittala-toikka-annual-bird-2026',
    imageIsPartner: true,
    partnerId: 'nordicnest',
    partnerProductUrl: 'https://www.nordicnest.fi/tuotemerkit/iittala/birds-by-toikka-arsfagel/?variantId=657373-01',
    details: {
      specs: [
        { key: 'size', value: { en: 'Length 22 cm, width 10 cm, height 14 cm', fi: 'Pituus 22 cm, leveys 10 cm, korkeus 14 cm' } },
        { key: 'material', value: { en: 'Mouth-blown glass', fi: 'Suupuhallettu lasi' } },
        { key: 'color', value: { en: 'Orange', fi: 'Oranssi' } },
        { key: 'origin', value: { en: 'Made at the Iittala glass factory in Finland', fi: 'Valmistettu Iittalan lasitehtaalla Suomessa' } },
        { key: 'care', value: { en: 'Clean with a damp cloth', fi: 'Pyyhi kostealla liinalla' } },
        { key: 'other', label: { en: 'Item number and EAN', fi: 'Tuotenumero ja EAN' }, value: { en: '657373-01, EAN 6411923689199', fi: '657373-01, EAN 6411923689199' } },
      ],
      sourceUrl: 'https://www.nordicnest.fi/tuotemerkit/iittala/birds-by-toikka-arsfagel/?variantId=657373-01',
      fetchedAt: '2026-11-06',
    },
  },
  {
    slug: 'marimekko-siirtolapuutarha-baubles',
    category: 'design',
    brand: 'Marimekko',
    name: {
      en: 'Marimekko Siirtolapuutarha baubles 2025, 2 pcs',
      fi: 'Marimekko Siirtolapuutarha -joulupallot 2025, 2 kpl',
    },
    description: {
      en: 'Marimekko\'s 2025 Siirtolapuutarha baubles are a pair of stoneware Christmas baubles with Maija Louekari\'s pattern in white, black and green. Siirtolapuutarha is Finnish for allotment garden. Each bauble is 7 cm wide and 7 cm high, and Marimekko suggests hanging them in a window as well as on the tree.',
      fi: 'Marimekon vuoden 2025 Siirtolapuutarha-joulupallot ovat kaksi kivitavarasta tehtyä joulupalloa Maija Louekarin kuosilla. Kuosissa on valkoista, mustaa ja vihreää. Kumpikin pallo on 7 cm leveä ja 7 cm korkea, ja ne sopivat kuusen lisäksi ripustettaviksi ikkunaan.',
    },
    priceFrom: 31,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-marimekko-siirtolapuutarha-baubles',
    imageIsPartner: true,
    partnerId: 'nordicnest',
    partnerProductUrl: 'https://www.nordicnest.fi/tuotemerkit/marimekko/siirtolapuutarha-joulupallot-2025-2-osaa/?variantId=650181-01',
    details: {
      specs: [
        { key: 'contents', value: { en: '2 baubles', fi: '2 joulupalloa' } },
        { key: 'size', value: { en: 'Width 7 cm, height 7 cm', fi: 'Leveys 7 cm, korkeus 7 cm' } },
        { key: 'material', value: { en: 'Stoneware', fi: 'Kivitavara' } },
        { key: 'color', value: { en: 'White, black and green', fi: 'Valkoinen, musta ja vihreä' } },
        { key: 'other', label: { en: 'Designer', fi: 'Suunnittelija' }, value: { en: 'Maija Louekari', fi: 'Maija Louekari' } },
        { key: 'other', label: { en: 'Item number and EAN', fi: 'Tuotenumero ja EAN' }, value: { en: '650181-01, EAN 6411255039983', fi: '650181-01, EAN 6411255039983' } },
      ],
      sourceUrl: 'https://www.nordicnest.fi/tuotemerkit/marimekko/siirtolapuutarha-joulupallot-2025-2-osaa/?variantId=650181-01',
      fetchedAt: '2026-11-06',
    },
  },
  {
    slug: 'arabia-moomin-love-baubles',
    category: 'design',
    brand: 'Arabia',
    name: {
      en: 'Arabia Moomin baubles Love, gold, 5 cm, 2 pcs',
      fi: 'Arabia Muumi-joulupallot Rakkaus, kulta, 5 cm, 2 kpl',
    },
    description: {
      en: 'Two 5 cm Moomin baubles in vitro porcelain from Arabia, decorated with Tove Jansson\'s Love motif of Moomintroll and the Snork Maiden. The motif has come to stand for love and close relationships. Hang them on the tree or a decorative branch, or use them as part of a festive table setting.',
      fi: 'Kaksi vitroposliinista Muumi-joulupalloa Arabialta, kooltaan 5 cm, kuvituksena Tove Janssonin Rakkaus-aihe, jossa ovat Muumipeikko ja Niiskuneiti. Aiheesta on tullut rakkauden ja läheisten ihmissuhteiden symboli. Pallot voi ripustaa kuuseen tai koristeoksaan, ja ne sopivat myös juhlapöydän kattaukseen.',
    },
    priceFrom: 26.95,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-arabia-moomin-love-baubles',
    imageIsPartner: true,
    partnerId: 'nordicnest',
    partnerProductUrl: 'https://www.nordicnest.fi/tuotemerkit/moomin-arabia/rakkaus-moomin-joulupallo/?variantId=699561-01',
    details: {
      specs: [
        { key: 'contents', value: { en: '2 baubles', fi: '2 joulupalloa' } },
        { key: 'size', value: { en: 'Width 5 cm, height 5 cm', fi: 'Leveys 5 cm, korkeus 5 cm' } },
        { key: 'material', value: { en: 'Vitro porcelain', fi: 'Vitroposliini' } },
        { key: 'color', value: { en: 'Gold', fi: 'Kullanvärinen' } },
        { key: 'other', label: { en: 'Artwork', fi: 'Kuvitus' }, value: { en: 'Tove Jansson', fi: 'Tove Jansson' } },
        { key: 'other', label: { en: 'Item number and EAN', fi: 'Tuotenumero ja EAN' }, value: { en: '699561-01, EAN 6411801029079', fi: '699561-01, EAN 6411801029079' } },
      ],
      sourceUrl: 'https://www.nordicnest.fi/tuotemerkit/moomin-arabia/rakkaus-moomin-joulupallo/?variantId=699561-01',
      fetchedAt: '2026-11-06',
    },
  },
  {
    slug: 'sk-muurla-moomin-bauble-pyjamas',
    category: 'design',
    brand: 'Muurla',
    name: {
      en: 'Muurla Moomin glass bauble 9 cm, Pyjamas',
      fi: 'Muurla Muumi-lasijoulupallo 9 cm, Pyjamat',
    },
    description: {
      en: 'A handmade glass Christmas bauble from Muurla\'s Moomin range, 9 cm across, with the Pyjamas motif. Muurla describes the scene as lounging in pyjamas by candlelight, and a satin ribbon for hanging is included.',
      fi: 'Käsityönä tehty lasinen Muurlan Muumi-joulupallo, halkaisija 9 cm, Pyjamat-aiheella. Muurla kuvaa aihetta rennoksi oleiluksi pyjamassa kynttilänvalossa, ja ripustukseen tarvittava satiininauha on mukana pakkauksessa.',
    },
    priceFrom: 14.93,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-sk-muurla-moomin-bauble-pyjamas',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/muurla-muumi-joulupallo-pyjamat-o9cm',
    details: {
      specs: [
        { key: 'size', value: { en: 'Diameter 9 cm', fi: 'Halkaisija 9 cm' } },
        { key: 'material', value: { en: 'Glass, handmade', fi: 'Lasi, käsityönä valmistettu' } },
        { key: 'other', label: { en: 'Hanging', fi: 'Ripustus' }, value: { en: 'Satin ribbon included', fi: 'Satiininauha mukana' } },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/muurla-muumi-joulupallo-pyjamat-o9cm',
      fetchedAt: '2026-11-06',
    },
  },
  {
    slug: 'sk-muurla-moomin-baubles-snow',
    category: 'design',
    brand: 'Muurla',
    name: {
      en: 'Muurla Moomin baubles 5 cm, Snowstorm, 4 pcs',
      fi: 'Muurla Muumi-joulupallot 5 cm, Lumipyry, 4 kpl',
    },
    description: {
      en: 'A pack of 4 Moomin Christmas baubles from Muurla, each 5 cm across, with the Snowstorm motif and satin ribbons for hanging. Muurla sets the motif just after a snowstorm, with high drifts, a sleeping landscape and snow lanterns waiting to be built.',
      fi: 'Pakkauksessa on 4 Muurlan Muumi-joulupalloa (5 cm) Lumipyry-aiheella, ja satiininauhat ripustusta varten kuuluvat mukaan. Muurla sijoittaa aiheen lumipyryn jälkeiseen hetkeen, kun kinokset ovat korkeita, luonto uinuu ja lumilyhdyt odottavat rakentamistaan.',
    },
    priceFrom: 31.25,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-sk-muurla-moomin-baubles-snow',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/muurla-muumi-joulupallo-lumipyry-o5cm-4-kpl-pkt',
    details: {
      specs: [
        { key: 'size', value: { en: 'Diameter 5 cm', fi: 'Halkaisija 5 cm' } },
        { key: 'contents', value: { en: '4 baubles, satin ribbons included', fi: '4 joulupalloa, satiininauhat mukana' } },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/muurla-muumi-joulupallo-lumipyry-o5cm-4-kpl-pkt',
      fetchedAt: '2026-11-06',
    },
  },
  {
    slug: 'sk-muurla-moomin-led-ball',
    category: 'design',
    brand: 'Muurla',
    name: {
      en: 'Muurla Moomin LED glass ball 11 cm, Tähtihetki',
      fi: 'Muurla Muumi-LED-koristepallo 11 cm, Tähtihetki',
    },
    description: {
      en: 'A glass decorative ball from Muurla\'s Moomin Tähtihetki range, 11 cm across, with a string of 10 LEDs inside. It has an on/off switch, runs on CR2032 lithium coin batteries that are not included, and is for indoor use only. The Tähtihetki range has gold details, and a satin ribbon for hanging is included.',
      fi: 'Lasinen koristepallo Muurlan Muumi Tähtihetki -mallistosta, halkaisija 11 cm, ja sen sisällä on 10 ledin valonauha. Pallossa on virtakytkin, se toimii CR2032-litiumnappiparistoilla, jotka eivät sisälly pakkaukseen, ja se on tarkoitettu vain sisäkäyttöön. Tähtihetki-mallistossa on kultaisia yksityiskohtia, ja ripustukseen tarvittava satiininauha on mukana.',
    },
    priceFrom: 23.72,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-sk-muurla-moomin-led-ball',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/muurla-muumi-led-koristepallo-tahtihetki-o-11-cm',
    details: {
      specs: [
        { key: 'size', value: { en: 'Diameter 11 cm', fi: 'Halkaisija 11 cm' } },
        { key: 'material', value: { en: 'Glass, LED light string with 10 LEDs', fi: 'Lasi, 10 ledin valonauha' } },
        { key: 'other', label: { en: 'Power', fi: 'Virta' }, value: { en: 'CR2032 lithium coin batteries, not included. On/off switch', fi: 'CR2032-litiumnappiparistot, eivät sisälly pakkaukseen. Virtakytkin' } },
        { key: 'other', label: { en: 'Use', fi: 'Käyttö' }, value: { en: 'Indoors only. CE certified', fi: 'Vain sisäkäyttöön. CE-sertifioitu' } },
        { key: 'other', label: { en: 'Design', fi: 'Suunnittelu' }, value: { en: 'Designed in Finland', fi: 'Suunniteltu Suomessa' } },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/muurla-muumi-led-koristepallo-tahtihetki-o-11-cm',
      fetchedAt: '2026-11-06',
    },
  },
  {
    slug: 'sk-muurla-moomin-led-candle-tree',
    category: 'design',
    brand: 'Muurla',
    name: {
      en: 'Muurla Moomin LED candle 12.5 cm, Under the Spruce',
      fi: 'Muurla Muumi-LED-kynttilä 12,5 cm, Kuusen alla',
    },
    description: {
      en: 'A battery LED candle from Muurla\'s Moomin Originals range, 12.5 cm high, with artwork from Tove Jansson\'s book Moominsummer Madness. It is made of paraffin wax and shaped to look like a real stearin candle, and its warm-toned light brings out the picture. It has on, off and 6-hour timer settings, takes 2 AA batteries (not included) and is for indoor use only.',
      fi: 'Paristokäyttöinen LED-kynttilä Muurlan Muumi Originals -mallistosta, korkeus 12,5 cm, ja kuvitus on Tove Janssonin kirjasta Vaarallinen juhannus. Kynttilä on tehty parafiinivahasta ja muotoiltu oikean steariinikynttilän näköiseksi, ja sen lämpimänsävyinen valo tuo kuvituksen esiin. Käyttötilat ovat päällä, pois ja 6 tunnin ajastin. Kynttilä toimii 2 AA-paristolla, jotka eivät sisälly pakkaukseen, ja on tarkoitettu vain sisäkäyttöön.',
    },
    priceFrom: 24.72,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-sk-muurla-moomin-led-candle-tree',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/muurla-muumi-kuusen-alla-led-kynttila-12-5cm',
    details: {
      specs: [
        { key: 'size', value: { en: 'Diameter 10 cm, height 12.5 cm', fi: 'Halkaisija 10 cm, korkeus 12,5 cm' } },
        { key: 'material', value: { en: 'Paraffin wax', fi: 'Parafiinivaha' } },
        { key: 'other', label: { en: 'Power', fi: 'Virta' }, value: { en: '2 x AA batteries, not included', fi: '2 x AA-paristoa, eivät sisälly pakkaukseen' } },
        { key: 'other', label: { en: 'Functions', fi: 'Toiminnot' }, value: { en: 'On, off and 6-hour timer', fi: 'Päälle, pois ja 6 tunnin ajastin' } },
        { key: 'other', label: { en: 'Use', fi: 'Käyttö' }, value: { en: 'Indoors only', fi: 'Vain sisäkäyttöön' } },
        { key: 'other', label: { en: 'Artwork', fi: 'Kuvitus' }, value: { en: 'Tove Jansson, from Moominsummer Madness', fi: 'Tove Jansson, kirjasta Vaarallinen juhannus' } },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/muurla-muumi-kuusen-alla-led-kynttila-12-5cm',
      fetchedAt: '2026-11-06',
    },
  },
  {
    slug: 'arabia-moomin-plates-winter-night',
    category: 'design',
    brand: 'Arabia',
    name: {
      en: 'Arabia Moomin plates 19 cm, Office & Winter Night, 2 pcs',
      fi: 'Arabia Muumilautaset 19 cm, Toimisto & Talviyö, 2 kpl',
    },
    description: {
      en: 'Two 19 cm Moomin plates from Arabia in white vitro porcelain, Office and Winter Night, made to go with the mugs released earlier. The Office picture first appeared on an Arabia Moomin mug in 1996 and draws on comic strips in which writing, drawing and painting recur. Winter Night repeats the picture from a 2006 mug, with Moomintroll sitting on a bridge railing in a scene from Tove Jansson\'s 1957 book Moominland Midwinter.',
      fi: 'Kaksi valkoista Arabian vitroposliinista Muumilautasta, Toimisto ja Talviyö, halkaisija 19 cm. Lautaset sopivat yhteen aiemmin julkaistujen mukien kanssa. Toimisto-kuva julkaistiin ensimmäisen kerran Arabian Muumimukissa vuonna 1996, ja se perustuu sarjakuviin, joissa kirjoittaminen, piirtäminen ja maalaaminen toistuvat. Talviyö-kuva perustuu vuoden 2006 mukiin, ja siinä Muumipeikko istuu sillankaiteella Tove Janssonin vuonna 1957 ilmestyneen Taikatalven kohtauksessa.',
    },
    priceFrom: 35.78,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-arabia-moomin-plates-winter-night',
    imageIsPartner: true,
    partnerId: 'nordicnest',
    partnerProductUrl: 'https://www.nordicnest.fi/tuotemerkit/moomin-arabia/muumilautanen-limited-edition-set/?variantId=566802-01',
    details: {
      specs: [
        { key: 'size', value: { en: 'Diameter 19.4 cm, height 2.8 cm', fi: 'Halkaisija 19,4 cm, korkeus 2,8 cm' } },
        { key: 'material', value: { en: 'Vitro porcelain', fi: 'Vitroposliini' } },
        { key: 'contents', value: { en: '2 plates, Office and Winter Night', fi: '2 lautasta, Toimisto ja Talviyö' } },
        { key: 'care', value: { en: 'Dishwasher, microwave and oven safe', fi: 'Konepesun, mikroaaltouunin ja uunin kestävä' } },
        { key: 'other', label: { en: 'Artwork', fi: 'Kuvitus' }, value: { en: 'Tove Jansson', fi: 'Tove Jansson' } },
        { key: 'other', label: { en: 'Item number and EAN', fi: 'Tuotenumero ja EAN' }, value: { en: '566802-01, EAN 6411801011432', fi: '566802-01, EAN 6411801011432' } },
      ],
      sourceUrl: 'https://www.nordicnest.fi/tuotemerkit/moomin-arabia/muumilautanen-limited-edition-set/?variantId=566802-01',
      fetchedAt: '2026-11-06',
    },
  },
  {
    slug: 'arabia-moomin-plates-winter-fire',
    category: 'design',
    brand: 'Arabia',
    name: {
      en: 'Arabia Moomin plates 19 cm, Winter Bonfire & Sailing, 2 pcs',
      fi: 'Arabia Muumilautaset 19 cm, Talvinuotio & Purjehtien, 2 kpl',
    },
    description: {
      en: 'Two 19 cm Moomin plates from Arabia in vitro porcelain, one with the Winter Bonfire picture and one with Sailing, both from Tove Jansson\'s artwork. The pair puts a winter scene next to a sailing scene and is meant for everyday meals as well as festive ones.',
      fi: 'Kaksi vitroposliinista Muumilautasta Arabialta, kooltaan 19 cm, toisessa Talvinuotio- ja toisessa Purjehtien-kuva Tove Janssonin kuvituksesta. Parissa talvinen kuva ja purjehduskuva ovat vierekkäin, ja lautaset sopivat sekä arkeen että juhlaan.',
    },
    priceFrom: 40.95,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-arabia-moomin-plates-winter-fire',
    imageIsPartner: true,
    partnerId: 'nordicnest',
    partnerProductUrl: 'https://www.nordicnest.fi/tuotemerkit/moomin-arabia/muumi-lautassetti-talvinuotio-purjehtien-2-osaa-/?variantId=629239-01',
    details: {
      specs: [
        { key: 'contents', value: { en: '2 plates, Winter Bonfire and Sailing', fi: '2 lautasta, Talvinuotio ja Purjehtien' } },
        { key: 'material', value: { en: 'Vitro porcelain', fi: 'Vitroposliini' } },
        { key: 'color', value: { en: 'Multicoloured', fi: 'Monivärinen' } },
        { key: 'weight', value: { en: '0.886 kg gross', fi: '0,886 kg bruttopaino' } },
        { key: 'other', label: { en: 'Artwork', fi: 'Kuvitus' }, value: { en: 'Tove Jansson', fi: 'Tove Jansson' } },
        { key: 'other', label: { en: 'Item number and EAN', fi: 'Tuotenumero ja EAN' }, value: { en: '629239-01, EAN 6411801015065', fi: '629239-01, EAN 6411801015065' } },
      ],
      sourceUrl: 'https://www.nordicnest.fi/tuotemerkit/moomin-arabia/muumi-lautassetti-talvinuotio-purjehtien-2-osaa-/?variantId=629239-01',
      fetchedAt: '2026-11-06',
    },
  },
  {
    slug: 'sk-muurla-moomin-snowfall-mug',
    category: 'design',
    brand: 'Muurla',
    name: {
      en: 'Muurla Moomin enamel mug 2.5 dl, Snowfall',
      fi: 'Muurla Muumi-emalimuki 2,5 dl, Lumisade',
    },
    description: {
      en: 'A 2.5 dl Moomin enamel mug from Muurla with the Snowfall motif, which shows the first snow in Moominvalley and time for snow games. Muurla builds its enamelware on a carbon steel core with two coats of enamel, so the mug suits a hike, the cottage or a boat as well as the table. It takes hot and cold drinks and is dishwasher safe, but not microwave safe.',
      fi: 'Muurlan Muumi-emalimuki, tilavuus 2,5 dl. Lumisade-aiheessa Muumilaaksoon on satanut ensilumi ja on lumileikkien aika. Muurlan emalituotteiden sydän on hiiliterästä ja sen päällä on kaksinkertainen emalointi, joten muki sopii pöydän lisäksi retkelle, mökille ja veneeseen. Mukista voi juoda sekä lämpimiä että kylmiä juomia, ja se kestää konepesun mutta ei mikroaaltouunia.',
    },
    priceFrom: 21.21,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-sk-muurla-moomin-snowfall-mug',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/muurla-muumi-lumisade-emalimuki-2-5dl',
    details: {
      specs: [
        { key: 'volume', value: { en: '2.5 dl', fi: '2,5 dl' } },
        { key: 'material', value: { en: 'Carbon steel, double enamel coating', fi: 'Hiiliteräs, kaksinkertainen emalointi' } },
        { key: 'care', value: { en: 'Dishwasher safe. Not for microwave use', fi: 'Konepesun kestävä. Ei mikroaaltouuniin' } },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/muurla-muumi-lumisade-emalimuki-2-5dl',
      fetchedAt: '2026-11-06',
    },
  },
  {
    slug: 'sk-muurla-moomin-gifts-mug',
    category: 'design',
    brand: 'Muurla',
    name: {
      en: 'Muurla Moomin enamel mug 3.7 dl, Gifts',
      fi: 'Muurla Muumi-emalimuki 3,7 dl, Lahjat',
    },
    description: {
      en: 'A 3.7 dl Moomin enamel mug from Muurla with the Gifts motif, a Christmas picture about giving presents to the people close to you. Under the enamel is a carbon steel core with a double coat, which makes the mug sturdy enough for outdoor use as well as the table. It takes hot and cold drinks and goes in the dishwasher, but not in the microwave.',
      fi: 'Muurlan Muumi-emalimuki, tilavuus 3,7 dl, Lahjat-aiheella, jouluisella kuvalla lahjojen antamisesta läheisille. Mukin sydän on hiiliterästä ja sen päällä on kaksinkertainen emalointi, joten se sopii pöytään ja kestää myös ulkokäytön. Siitä voi juoda lämpimiä ja kylmiä juomia, ja se kestää konepesun mutta ei mikroaaltouunia.',
    },
    priceFrom: 22.46,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-sk-muurla-moomin-gifts-mug',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/muurla-muumi-lahjat-emalimuki-3-7dl',
    details: {
      specs: [
        { key: 'volume', value: { en: '3.7 dl', fi: '3,7 dl' } },
        { key: 'material', value: { en: 'Carbon steel, double enamel coating', fi: 'Hiiliteräs, kaksinkertainen emalointi' } },
        { key: 'care', value: { en: 'Dishwasher safe. Not for microwave use', fi: 'Konepesun kestävä. Ei mikroaaltouuniin' } },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/muurla-muumi-lahjat-emalimuki-3-7dl',
      fetchedAt: '2026-11-06',
    },
  },
  {
    slug: 'rj-pesonen-beeswax-candle',
    category: 'design',
    brand: 'Pesosen Mehiläistarhat',
    name: {
      en: 'Pesosen Mehiläistarhat beeswax table candle, large',
      fi: 'Pesosen Mehiläistarhat mehiläisvaha-pöytäkynttilä, iso',
    },
    description: {
      en: 'Pesosen Mehiläistarhat makes this large table candle by hand from beeswax, which also gives it its colour and scent. Esa from the apiary has kept bees for 29 years, 13 of them professionally, and the hives stand among fields, forests and small waterways around Sastamala and Hämeenkyrö. The apiary makes its candles from what its own hives produce, and they burn for a long time with a bright, steady flame.',
      fi: 'Pesosen Mehiläistarhojen iso pöytäkynttilä on tehty käsityönä mehiläisvahasta, josta tulevat myös sen väri ja tuoksu. Tarhojen Esa on ollut mehiläisten parissa 29 vuotta, niistä 13 ammattimaisesti, ja tarhat sijaitsevat peltojen, metsien ja pienten vesistöjen keskellä Sastamalan ja Hämeenkyrön alueilla. Tarhat tekevät kynttilänsä omien pesiensä tuotteista, ja kynttilät palavat pitkään kirkkaalla ja tasaisella liekillä.',
    },
    priceFrom: 17.5,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-rj-pesonen-beeswax-candle',
    imageIsPartner: true,
    partnerId: 'ruohonjuuri',
    partnerProductUrl: 'https://www.ruohonjuuri.fi/products/pesosen-mehilaistarhat-mehilaisvaha-poytakynttila-iso',
    details: {
      specs: [
        { key: 'material', value: { en: 'Beeswax', fi: 'Mehiläisvaha' } },
        { key: 'size', value: { en: 'Large', fi: 'Iso' } },
        { key: 'other', label: { en: 'Production', fi: 'Valmistustapa' }, value: { en: 'Handmade', fi: 'Käsityönä valmistettu' } },
        { key: 'other', label: { en: 'Apiaries', fi: 'Tarhat' }, value: { en: 'Sastamala and Hämeenkyrö', fi: 'Sastamala ja Hämeenkyrö' } },
      ],
      sourceUrl: 'https://www.ruohonjuuri.fi/products/pesosen-mehilaistarhat-mehilaisvaha-poytakynttila-iso',
      fetchedAt: '2026-11-06',
    },
  },
  {
    slug: 'rj-pesonen-honeycomb-candle',
    category: 'design',
    brand: 'Pesosen Mehiläistarhat',
    name: {
      en: 'Pesosen Mehiläistarhat beeswax honeycomb candle, large',
      fi: 'Pesosen Mehiläistarhat mehiläisvaha-kennokynttilä, iso',
    },
    description: {
      en: 'A large honeycomb candle made by hand from beeswax by Pesosen Mehiläistarhat, with a burn time of 30 hours. Its colour and scent come from the wax, and the apiary makes its candles from what its own hives around Sastamala and Hämeenkyrö produce. Esa from the apiary has kept bees for 29 years, 13 of them professionally.',
      fi: 'Iso, käsityönä mehiläisvahasta tehty kennokynttilä Pesosen Mehiläistarhoilta, paloaika 30 tuntia. Väri ja tuoksu tulevat vahasta, ja tarhat tekevät kynttilänsä omien pesiensä tuotteista Sastamalan ja Hämeenkyrön seudulla. Tarhojen Esa on ollut mehiläisten parissa 29 vuotta, niistä 13 ammattimaisesti.',
    },
    priceFrom: 19.5,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-rj-pesonen-honeycomb-candle',
    imageIsPartner: true,
    partnerId: 'ruohonjuuri',
    partnerProductUrl: 'https://www.ruohonjuuri.fi/products/pesosen-mehilaistarhat-mehilaisvaha-kennokynttila-iso',
    details: {
      specs: [
        { key: 'material', value: { en: 'Beeswax', fi: 'Mehiläisvaha' } },
        { key: 'size', value: { en: 'Large', fi: 'Iso' } },
        { key: 'other', label: { en: 'Burn time', fi: 'Paloaika' }, value: { en: '30 h', fi: '30 h' } },
        { key: 'other', label: { en: 'Production', fi: 'Valmistustapa' }, value: { en: 'Handmade', fi: 'Käsityönä valmistettu' } },
        { key: 'other', label: { en: 'Apiaries', fi: 'Tarhat' }, value: { en: 'Sastamala and Hämeenkyrö', fi: 'Sastamala ja Hämeenkyrö' } },
      ],
      sourceUrl: 'https://www.ruohonjuuri.fi/products/pesosen-mehilaistarhat-mehilaisvaha-kennokynttila-iso',
      fetchedAt: '2026-11-06',
    },
  },
  {
    slug: 'sk-moomin-mistletoe-candle',
    category: 'design',
    brand: 'Havi',
    name: {
      en: 'Havi Moomin table candle 7 x 12 cm, Mistletoe, beige',
      fi: 'Havi Muumi-pöytäkynttilä 7 x 12 cm, Misteli, beige',
    },
    description: {
      en: 'A beige Moomin table candle from Havi with the Mistletoe pattern, 7 x 12 cm, with a burn time of 55 hours. The pattern is silk-screen printed onto the candle.',
      fi: 'Havin beigenvärinen Muumi-pöytäkynttilä Misteli-kuvioinnilla, koko 7 x 12 cm ja paloaika 55 tuntia. Kuvio on silkkipainettu kynttilään.',
    },
    priceFrom: 13.32,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-sk-moomin-mistletoe-candle',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/moomin-poytakynttila-misteli-beige-7x12cm',
    details: {
      specs: [
        { key: 'size', value: { en: '7 x 12 cm', fi: '7 x 12 cm' } },
        { key: 'color', value: { en: 'Beige', fi: 'Beige' } },
        { key: 'other', label: { en: 'Burn time', fi: 'Paloaika' }, value: { en: '55 h', fi: '55 h' } },
        { key: 'other', label: { en: 'Decoration', fi: 'Kuviointi' }, value: { en: 'Silk screen printed', fi: 'Silkkipainettu' } },
        { key: 'other', label: { en: 'Marketer', fi: 'Markkinoija' }, value: { en: 'Havi Oy, Riihimäki', fi: 'Havi Oy, Riihimäki' } },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/moomin-poytakynttila-misteli-beige-7x12cm',
      fetchedAt: '2026-11-06',
    },
  },
  {
    slug: 'iittala-kastehelmi-tealight',
    category: 'design',
    brand: 'Iittala',
    name: {
      en: 'Iittala Kastehelmi tealight candle holder 64 mm, clear',
      fi: 'Iittala Kastehelmi -kynttilälyhty 64 mm, kirkas',
    },
    description: {
      en: 'A clear glass Kastehelmi tealight holder from Iittala, 64 mm across, from the series that Oiva Toikka designed for Iittala in 1964. Kastehelmi is Finnish for dewdrop, and Iittala relaunched the series in 2010. The holder is also made in other colours, and Iittala suggests using it on its own or grouped with different colours.',
      fi: 'Kirkas lasinen Iittala Kastehelmi -kynttilälyhty, halkaisija 64 mm, sarjasta, jonka Oiva Toikka suunnitteli Iittalalle vuonna 1964. Iittala toi sarjan uudelleen myyntiin vuonna 2010. Lyhtyä on saatavana myös muissa väreissä, ja sitä voi käyttää yksinään tai ryhmänä eri värejä yhdistellen.',
    },
    priceFrom: 13.81,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-iittala-kastehelmi-tealight',
    imageIsPartner: true,
    partnerId: 'nordicnest',
    partnerProductUrl: 'https://www.nordicnest.fi/tuotemerkit/iittala/kastehelmi-kynttilalyhty-64-mm/?variantId=13167-01',
    details: {
      specs: [
        { key: 'size', value: { en: 'Diameter 6.4 cm', fi: 'Halkaisija 6,4 cm' } },
        { key: 'material', value: { en: 'Glass', fi: 'Lasi' } },
        { key: 'color', value: { en: 'Clear', fi: 'Kirkas' } },
        { key: 'care', value: { en: 'Hand wash only', fi: 'Vain käsinpesu' } },
        { key: 'other', label: { en: 'Designer and collection', fi: 'Suunnittelija ja sarja' }, value: { en: 'Oiva Toikka, Iittala Kastehelmi', fi: 'Oiva Toikka, Iittala Kastehelmi' } },
        { key: 'other', label: { en: 'Item number and EAN', fi: 'Tuotenumero ja EAN' }, value: { en: '13167-01, EAN 6411920059766', fi: '13167-01, EAN 6411920059766' } },
      ],
      sourceUrl: 'https://www.nordicnest.fi/tuotemerkit/iittala/kastehelmi-kynttilalyhty-64-mm/?variantId=13167-01',
      fetchedAt: '2026-11-06',
    },
  },
  {
    slug: 'halti-crostie-merino-beanie',
    category: 'clothing',
    brand: 'Halti',
    name: {
      en: 'Halti Crostie merino beanie',
      fi: 'Halti Crostie -merinopipo',
    },
    description: {
      en: 'A snug Halti beanie for cross-country skiing, winter runs and other cold-weather exercise, designed and made in Finland. Half of it is lined with Stormwall®, a windproof and breathable layer that shields the forehead and ears from the wind. The knit itself is a soft merino wool blend that is warm yet breathable.',
      fi: 'Napakasti istuva Halti-pipo maastohiihtoon, talvilenkeille ja muuhun talviliikuntaan, suunniteltu ja valmistettu Suomessa. Pipo on puoliksi vuorattu tuulenpitävällä ja hengittävällä Stormwall®-materiaalilla, joka suojaa otsaa ja korvia viimalta. Itse neulos on pehmeää merinovillasekoitetta, joka on lämmintä mutta hengittävää.',
    },
    priceFrom: 45,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-halti-crostie-merino-beanie',
    imageIsPartner: true,
    partnerId: 'halti',
    partnerProductUrl: 'https://www.halti.fi/products/crostie-merinopipo',
    details: {
      specs: [
        { key: 'material', value: { en: 'Merino wool and acrylic blend knit, 50 % merino wool, 50 % acrylic. Half lined with Stormwall®', fi: 'Merinovillan ja akryylin sekoiteneulos, 50 % merinovillaa, 50 % akryylia. Puolivuori Stormwall®-materiaalia' } },
        { key: 'size', value: { en: 'S, M, L', fi: 'S, M, L' } },
        { key: 'weight', value: { en: '0.2 kg', fi: '0,2 kg' } },
        { key: 'color', value: { en: 'Several colours: Crocus Petal, Black, White, Fudge Maroon Red, Veiled Pink', fi: 'Useita värejä: Crocus Petal, Black, White, Fudge Maroon Red, Veiled Pink' } },
        { key: 'care', value: { en: 'Wash with similar colours, dry flat', fi: 'Pese samanväristen kanssa, kuivaa tasossa' } },
        { key: 'origin', value: { en: 'Designed and made in Finland, Avainlippu (Key Flag) product', fi: 'Suunniteltu ja valmistettu Suomessa, Avainlippu-tuote' } },
      ],
      sourceUrl: 'https://www.halti.fi/products/crostie-merinopipo',
      fetchedAt: '2026-11-06',
    },
  },
  {
    slug: 'halti-vuolle-mohair-beanie',
    category: 'clothing',
    brand: 'Halti',
    name: {
      en: 'Halti Vuolle mohair beanie',
      fi: 'Halti Vuolle -mohairpipo',
    },
    description: {
      en: 'A fluffy Halti beanie in a blend of mohair, merino wool and polyamide, with a double-layer construction for extra warmth and a high cuff. The blend keeps it light but warm, and there is no separate lining. One size, in Snow White or Black.',
      fi: 'Pörröinen Halti-pipo mohairin, merinovillan ja polyamidin sekoitteesta, rakenteeltaan kaksinkertainen ja käänteeltään korkea. Sekoite tekee piposta kevyen mutta lämpimän, eikä siinä ole erillistä vuorta. Yksi koko, väreinä Snow White ja Black.',
    },
    priceFrom: 85,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-halti-vuolle-mohair-beanie',
    imageIsPartner: true,
    partnerId: 'halti',
    partnerProductUrl: 'https://www.halti.fi/products/vuolle-pipo',
    details: {
      specs: [
        { key: 'material', value: { en: 'Mohair blend, 50 % mohair, 32 % polyamide, 18 % merino wool. No separate lining', fi: 'Mohairsekoite, 50 % mohairia, 32 % polyamidia, 18 % merinovillaa. Ei erillistä vuorta' } },
        { key: 'size', value: { en: 'One size', fi: 'Yksi koko' } },
        { key: 'color', value: { en: 'Snow White or Black', fi: 'Snow White tai Black' } },
        { key: 'care', value: { en: 'Wash with similar colours, dry flat', fi: 'Pese samanväristen kanssa, kuivaa tasossa' } },
        { key: 'other', label: { en: 'Features', fi: 'Ominaisuudet' }, value: { en: 'Double-layer construction, high cuff', fi: 'Kaksinkertainen rakenne, korkea käänne' } },
      ],
      sourceUrl: 'https://www.halti.fi/products/vuolle-pipo',
      fetchedAt: '2026-11-06',
    },
  },
  {
    slug: 'halti-tiilo-mittens',
    category: 'clothing',
    brand: 'Halti',
    name: {
      en: 'Halti Tiilo II mittens',
      fi: 'Halti Tiilo II -rukkaset',
    },
    description: {
      en: 'Insulated Halti mittens for winter outdoor activities, made of water- and windproof DrymaxX® fabric with 60 g Microtherm® wadding inside. The palm is synthetic leather with a good grip, and there is a rib-knit inner cuff and an adjustable wrist cinch. Black, sizes 7 to 12.',
      fi: 'Vanutetut Halti-rukkaset talviulkoiluun, materiaalina veden- ja tuulenpitävä DrymaxX® ja sisällä 60 g Microtherm®-vanua. Kämmen on synteettistä nahkaa, joka antaa hyvän otteen, ja rukkasissa on ribbineulottu sisämansetti ja säädettävä kiristys ranteessa. Musta, koot 7-12.',
    },
    priceFrom: 30,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-halti-tiilo-mittens',
    imageIsPartner: true,
    partnerId: 'halti',
    partnerProductUrl: 'https://www.halti.fi/products/tiilo-ii-rukkaset',
    details: {
      specs: [
        { key: 'material', value: { en: 'DrymaxX® polyester with membrane, 100 % polyester. Rib knit cuff, 100 % polyester. Synthetic leather palm, 100 % polyurethane', fi: 'DrymaxX®-polyesteri kalvolla, 100 % polyesteriä. Ribbineulosmansetti, 100 % polyesteriä. Synteettinen nahkakämmen, 100 % polyuretaania' } },
        { key: 'other', label: { en: 'Insulation', fi: 'Vanu' }, value: { en: '60 g Microtherm® wadding', fi: '60 g Microtherm®-vanu' } },
        { key: 'size', value: { en: '7, 8, 9, 10, 11, 12', fi: '7, 8, 9, 10, 11, 12' } },
        { key: 'color', value: { en: 'Black', fi: 'Musta' } },
        { key: 'care', value: { en: 'Wash separately', fi: 'Pese erikseen' } },
      ],
      sourceUrl: 'https://www.halti.fi/products/tiilo-ii-rukkaset',
      fetchedAt: '2026-11-06',
    },
  },
  {
    slug: 'halti-warm-merino-socks',
    category: 'clothing',
    brand: 'Halti',
    name: {
      en: 'Halti warm merino socks',
      fi: 'Halti lämpimät merinosukat',
    },
    description: {
      en: 'Halti merino wool socks in a thick terry knit, made in Finland. They are seamless, so they sit well in ski boots, winter shoes and snowboard boots. The terry traps air for warmth, and the rib-knit leg stays up. Wear them on their own or over a thin pair of socks.',
      fi: 'Suomessa valmistetut Halti-merinovillasukat ovat paksua froteeneulosta ja saumattomat, joten ne istuvat monoissa, talvikengissä ja lautakengissä. Frotee sitoo ilmaa ja lämmittää, ja ribbineulottu varsi pysyy hyvin ylhäällä. Käytä sellaisenaan tai ohuiden sukkien päällä.',
    },
    priceFrom: 25,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-halti-warm-merino-socks',
    imageIsPartner: true,
    partnerId: 'halti',
    partnerProductUrl: 'https://www.halti.fi/products/trekking-warm-merinosukat',
    details: {
      specs: [
        { key: 'material', value: { en: 'Merino wool blend, 62 % merino wool, 36 % polyamide, 2 % elastane', fi: 'Merinovillasekoite, 62 % merinovillaa, 36 % polyamidia, 2 % elastaania' } },
        { key: 'size', value: { en: '34-36, 37-39, 40-42, 43-45, 46-48', fi: '34-36, 37-39, 40-42, 43-45, 46-48' } },
        { key: 'color', value: { en: 'Dark Sea Green or Asphalt', fi: 'Dark Sea Green tai Asphalt' } },
        { key: 'weight', value: { en: '0.1 kg', fi: '0,1 kg' } },
        { key: 'origin', value: { en: 'Made in Finland, Avainlippu (Key Flag) product', fi: 'Valmistettu Suomessa, Avainlippu-tuote' } },
        { key: 'other', label: { en: 'Features', fi: 'Ominaisuudet' }, value: { en: 'Thick terry knit, seamless, rib-knit leg that stays up', fi: 'Paksu froteeneulos, saumaton, ylhäällä pysyvä ribbineulottu varsi' } },
      ],
      sourceUrl: 'https://www.halti.fi/products/trekking-warm-merinosukat',
      fetchedAt: '2026-11-06',
    },
  },
  {
    slug: 'north-outdoor-kaisla-beanie',
    category: 'clothing',
    brand: 'North Outdoor',
    name: {
      en: 'North Outdoor Kaisla merino beanie, coffee',
      fi: 'North Outdoor Kaisla -merinopipo, kahvi',
    },
    description: {
      en: 'A chunky brioche-knit beanie in 100 per cent mulesing-free merino wool, knitted in North Outdoor\'s own mill in Oulu. North Outdoor suggests it from autumn to late winter, on city walks as well as nature trails. One size, in the colour coffee.',
      fi: 'Muhkea patenttineulepipo 100-prosenttisesta mulesing-vapaasta merinovillasta, neulottu North Outdoorin omassa neulomossa Oulussa. North Outdoor suosittelee sitä syksystä kevättalveen, niin kaupunkikävelyille kuin luontopoluille. Yksi koko, väri kahvi.',
    },
    priceFrom: 59.95,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-north-outdoor-kaisla-beanie',
    imageIsPartner: true,
    partnerId: 'northoutdoor',
    partnerProductUrl: 'https://northoutdoor.com/products/kaisla-merinopipo-uni-kahvi',
    details: {
      specs: [
        { key: 'material', value: { en: '100 % merino wool, mulesing-free, brioche knit', fi: '100 % merinovillaa, mulesing-vapaa, patenttineulos' } },
        { key: 'size', value: { en: 'One size', fi: 'Yksi koko' } },
        { key: 'color', value: { en: 'Coffee', fi: 'Kahvi' } },
        { key: 'origin', value: { en: 'Made in North Outdoor\'s own knitting mill in Oulu, Finland', fi: 'Valmistettu North Outdoorin omassa neulomossa Oulussa' } },
      ],
      sourceUrl: 'https://northoutdoor.com/products/kaisla-merinopipo-uni-kahvi',
      fetchedAt: '2026-11-06',
    },
  },
  {
    slug: 'north-outdoor-polku-neck-tube',
    category: 'clothing',
    brand: 'North Outdoor',
    name: {
      en: 'North Outdoor Polku merino neck tube, coffee',
      fi: 'North Outdoor Polku -merinotuubihuivi, kahvi',
    },
    description: {
      en: 'A chunky neck tube in 100 per cent mulesing-free merino wool, knitted in a dense 1x1 rib. It is tall enough to wear as a scarf, pull up as a hood or use to cover the face. One size, in the colour coffee.',
      fi: 'Muhkea tuubihuivi 100-prosenttisesta mulesing-vapaasta merinovillasta, neulottu tiheäksi 1x1-ribbineulokseksi. Korkeutta on sen verran, että huivi taipuu kaulahuiviksi, hupuksi tai kasvojen suojaksi. Yksi koko, väri kahvi.',
    },
    priceFrom: 53.95,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-north-outdoor-polku-neck-tube',
    imageIsPartner: true,
    partnerId: 'northoutdoor',
    partnerProductUrl: 'https://northoutdoor.com/products/polku-merinotuubihuivi-uni-kahvi',
    details: {
      specs: [
        { key: 'material', value: { en: '100 % merino wool, mulesing-free, 1x1 rib knit', fi: '100 % merinovillaa, mulesing-vapaa, 1x1-ribbineulos' } },
        { key: 'size', value: { en: 'One size', fi: 'Yksi koko' } },
        { key: 'color', value: { en: 'Coffee', fi: 'Kahvi' } },
        { key: 'other', label: { en: 'Use', fi: 'Käyttö' }, value: { en: 'Scarf, hood or face cover', fi: 'Kaulahuivi, huppu tai kasvosuoja' } },
      ],
      sourceUrl: 'https://northoutdoor.com/products/polku-merinotuubihuivi-uni-kahvi',
      fetchedAt: '2026-11-06',
    },
  },
  {
    slug: 'north-outdoor-hirsi-socks',
    category: 'clothing',
    brand: 'North Outdoor',
    name: {
      en: 'North Outdoor Hirsi merino wool socks, almond',
      fi: 'North Outdoor Hirsi -merinovillasukat, manteli',
    },
    description: {
      en: 'Light merino wool socks from North Outdoor\'s own knitting mill in Oulu, 80 per cent mulesing-free merino and 20 per cent polyamide for durability. They are at their best indoors, on their own or over another pair of socks. They take a gentle machine wash, although they seldom need one.',
      fi: 'Kevyet merinovillasukat North Outdoorin omasta neulomosta Oulusta, 80 % mulesing-vapaata merinovillaa ja 20 % kestävyyttä tuovaa polyamidia. Parhaimmillaan ne ovat sisällä sellaisenaan tai toisten sukkien päällä. Sukat kestävät hellävaraisen konepesun, vaikka niitä tarvitsee harvoin pestä.',
    },
    priceFrom: 44.95,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-north-outdoor-hirsi-socks',
    imageIsPartner: true,
    partnerId: 'northoutdoor',
    partnerProductUrl: 'https://northoutdoor.com/products/hirsi-merinovillasukat-manteli',
    details: {
      specs: [
        { key: 'material', value: { en: '80 % merino wool, mulesing-free, 20 % polyamide', fi: '80 % merinovillaa, mulesing-vapaa, 20 % polyamidia' } },
        { key: 'size', value: { en: '35-38, 39-42, 43-46', fi: '35-38, 39-42, 43-46' } },
        { key: 'color', value: { en: 'Almond', fi: 'Manteli' } },
        { key: 'origin', value: { en: 'Made in North Outdoor\'s own knitting mill in Oulu, Finland', fi: 'Valmistettu North Outdoorin omassa neulomossa Oulussa' } },
        { key: 'care', value: { en: 'Gentle machine wash', fi: 'Hellävarainen konepesu' } },
      ],
      sourceUrl: 'https://northoutdoor.com/products/hirsi-merinovillasukat-manteli',
      fetchedAt: '2026-11-06',
    },
  },
  {
    slug: 'north-outdoor-avery-mittens',
    category: 'clothing',
    brand: 'North Outdoor',
    name: {
      en: 'North Outdoor Avery wool fleece mittens, latte',
      fi: 'North Outdoor Avery -villafleecelapaset, latte',
    },
    description: {
      en: 'Mittens in a light Italian wool fleece blend with 63 per cent recycled wool, lined inside with 100 per cent merino wool. The merino lining wicks moisture away and holds in warmth, and the snug but flexible fit lets you keep a good feel for what you are holding. Sizes S and M, in the colour latte.',
      fi: 'Lapaset kevyestä italialaisesta villafleecesekoitteesta, jossa on 63 % kierrätettyä villaa, ja vuorena on 100-prosenttinen merinovilla. Merinovuori siirtää kosteutta pois ja pitää lämmön, ja tiivis mutta joustava istuvuus säilyttää tuntuman otteessa. Koot S ja M, väri latte.',
    },
    priceFrom: 79.95,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-north-outdoor-avery-mittens',
    imageIsPartner: true,
    partnerId: 'northoutdoor',
    partnerProductUrl: 'https://northoutdoor.com/products/avery-villafleece-lapaset-latte',
    details: {
      specs: [
        { key: 'material', value: { en: 'Italian wool fleece blend, 63 % recycled wool. Lining 100 % merino wool', fi: 'Italialainen villafleecesekoite, 63 % kierrätettyä villaa. Vuori 100 % merinovillaa' } },
        { key: 'size', value: { en: 'S, M', fi: 'S, M' } },
        { key: 'color', value: { en: 'Latte', fi: 'Latte' } },
        { key: 'other', label: { en: 'Use', fi: 'Käyttö' }, value: { en: 'Outdoors and in town', fi: 'Ulkoiluun ja kaupunkiin' } },
      ],
      sourceUrl: 'https://northoutdoor.com/products/avery-villafleece-lapaset-latte',
      fetchedAt: '2026-11-06',
    },
  },
  {
    slug: 'makia-alvar-beanie',
    category: 'clothing',
    brand: 'Makia',
    name: {
      en: 'Makia Alvar merino beanie',
      fi: 'Makia Alvar -merinopipo',
    },
    description: {
      en: 'A Makia beanie made in Finland from 100 per cent merino wool. The wool is mulesing-free, and the beanie comes in one size.',
      fi: 'Suomessa valmistettu Makian pipo 100-prosenttisesta merinovillasta. Villa on mulesing-vapaata, ja pipo on yksikokoinen.',
    },
    priceFrom: 55,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-makia-alvar-beanie',
    imageIsPartner: true,
    partnerId: 'makia',
    partnerProductUrl: 'https://makia.com/products/alvar-beanie',
    details: {
      specs: [
        { key: 'material', value: { en: '100 % merino wool, mulesing-free', fi: '100 % merinovillaa, mulesing-vapaa' } },
        { key: 'size', value: { en: 'One size', fi: 'Yksi koko' } },
        { key: 'origin', value: { en: 'Made in Finland', fi: 'Valmistettu Suomessa' } },
      ],
      sourceUrl: 'https://makia.com/products/alvar-beanie',
      fetchedAt: '2026-11-06',
    },
  },
  {
    slug: 'makia-stellar-scarf',
    category: 'clothing',
    brand: 'Makia',
    name: {
      en: 'Makia Stellar merino scarf',
      fi: 'Makia Stellar -merinokaulaliina',
    },
    description: {
      en: 'A Makia scarf made from 100 per cent merino wool. It comes in one size.',
      fi: 'Makian kaulaliina 100-prosenttisesta merinovillasta. Se on yksikokoinen.',
    },
    priceFrom: 95,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-makia-stellar-scarf',
    imageIsPartner: true,
    partnerId: 'makia',
    partnerProductUrl: 'https://makia.com/products/stellar-scarf',
    details: {
      specs: [
        { key: 'material', value: { en: '100 % merino wool', fi: '100 % merinovillaa' } },
        { key: 'size', value: { en: 'One size', fi: 'Yksi koko' } },
      ],
      sourceUrl: 'https://makia.com/products/stellar-scarf',
      fetchedAt: '2026-11-06',
    },
  },
  {
    slug: 'makia-freja-mittens',
    category: 'clothing',
    brand: 'Makia',
    name: {
      en: 'Makia Freja quilted mittens',
      fi: 'Makia Freja -tikkilapaset',
    },
    description: {
      en: 'Quilted Makia mittens filled with Sorona® faux down, a partly plant-based insulation that breathes and holds warmth. A 3000 mm water column helps keep your hands dry in light rain. Sizes S and M.',
      fi: 'Tikatut Makia-lapaset, joiden täytteenä on Sorona®-untuvajäljitelmä, osittain kasvipohjainen vanu, joka hengittää ja pitää lämmön. Vesipilari on 3000 mm, mikä auttaa pitämään kädet kuivina kevyessä sateessa. Koot S ja M.',
    },
    priceFrom: 29,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-makia-freja-mittens',
    imageIsPartner: true,
    partnerId: 'makia',
    partnerProductUrl: 'https://makia.com/products/freja-quilted-mittens',
    details: {
      specs: [
        { key: 'other', label: { en: 'Insulation', fi: 'Täyte' }, value: { en: 'Sorona® faux down, partly plant based', fi: 'Sorona®-untuvajäljitelmä, osittain kasvipohjainen' } },
        { key: 'other', label: { en: 'Water column', fi: 'Vesipilari' }, value: { en: '3000 mm', fi: '3000 mm' } },
        { key: 'size', value: { en: 'S, M', fi: 'S, M' } },
      ],
      sourceUrl: 'https://makia.com/products/freja-quilted-mittens',
      fetchedAt: '2026-11-06',
    },
  },
  {
    slug: 'makia-sibelius-beanie',
    category: 'clothing',
    brand: 'Makia',
    name: {
      en: 'Makia Sibelius merino beanie',
      fi: 'Makia Sibelius -merinopipo',
    },
    description: {
      en: 'The Sibelius beanie from Makia, made from 100 per cent merino wool. It comes in one size.',
      fi: 'Makian Sibelius-pipo 100-prosenttisesta merinovillasta. Pipo on yksikokoinen.',
    },
    priceFrom: 59,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-makia-sibelius-beanie',
    imageIsPartner: true,
    partnerId: 'makia',
    partnerProductUrl: 'https://makia.com/products/sibelius-beanie',
    details: {
      specs: [
        { key: 'material', value: { en: '100 % merino wool', fi: '100 % merinovillaa' } },
        { key: 'size', value: { en: 'One size', fi: 'Yksi koko' } },
      ],
      sourceUrl: 'https://makia.com/products/sibelius-beanie',
      fetchedAt: '2026-11-06',
    },
  },
  {
    slug: 'nb-moomin-christmas-sockbox',
    category: 'clothing',
    brand: 'Nordicbuddies',
    name: {
      en: 'Moomin Christmas sock gift box, EU 36-42',
      fi: 'Muumi-joulusukat lahjarasiassa, EU 36-42',
    },
    description: {
      en: 'A ready-made Moomin Christmas gift box with two pairs of socks, in one size that fits EU 36 to 42. The socks are mostly cotton, with polyester, nylon and a little elastane, and the box is an official Moomin product.',
      fi: 'Valmis Muumi-joululahjarasia, jossa on kaksi paria sukkia, koko EU 36-42. Sukat ovat enimmäkseen puuvillaa, lisäksi polyesteriä, nailonia ja hieman elastaania, ja pakkaus on virallinen Muumi-tuote.',
    },
    priceFrom: 19.9,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-nb-moomin-christmas-sockbox',
    imageIsPartner: true,
    partnerId: 'nordicbuddies',
    partnerProductUrl: 'https://nordicbuddies.com/products/moomins-christmas-sockbox-xmasbox17a',
    details: {
      specs: [
        { key: 'material', value: { en: '60 % cotton, 33 % polyester, 4 % nylon, 2 % elastane, 1 % elastodiene', fi: '60 % puuvillaa, 33 % polyesteriä, 4 % nailonia, 2 % elastaania, 1 % elastodieenia' } },
        { key: 'size', value: { en: 'One size, EU 36-42', fi: 'Yksi koko, EU 36-42' } },
        { key: 'contents', value: { en: '2 pairs of socks in a gift box', fi: '2 paria sukkia lahjarasiassa' } },
        { key: 'other', label: { en: 'Licence', fi: 'Lisenssi' }, value: { en: 'Official Moomin product', fi: 'Virallinen Muumi-tuote' } },
      ],
      sourceUrl: 'https://nordicbuddies.com/products/moomins-christmas-sockbox-xmasbox17a',
      fetchedAt: '2026-11-06',
    },
  },
  {
    slug: 'nb-moomin-christmas-box-men',
    category: 'clothing',
    brand: 'Nordicbuddies',
    name: {
      en: 'Moomin Christmas sock gift box for men, EU 40-45',
      fi: 'Miesten Muumi-joulusukat lahjarasiassa, EU 40-45',
    },
    description: {
      en: 'A ready-made Moomin Christmas gift box with two pairs of men\'s socks, sized EU 40 to 45. In Nordicbuddies\' experience, they also fit larger feet. The socks are mostly cotton, with polyester, nylon and a little elastane, and the box is an official Moomin product.',
      fi: 'Valmis Muumi-joululahjarasia, jossa on kaksi paria miesten sukkia, koko EU 40-45. Nordicbuddiesin kokemuksen mukaan ne sopivat isompiinkin jalkoihin. Sukat ovat enimmäkseen puuvillaa, lisäksi polyesteriä, nailonia ja hieman elastaania, ja pakkaus on virallinen Muumi-tuote.',
    },
    priceFrom: 19.9,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-nb-moomin-christmas-box-men',
    imageIsPartner: true,
    partnerId: 'nordicbuddies',
    partnerProductUrl: 'https://nordicbuddies.com/products/moomins-christmas-sockbox-xmasbox17b',
    details: {
      specs: [
        { key: 'material', value: { en: '60 % cotton, 33 % polyester, 4 % nylon, 2 % elastane, 1 % elastodiene', fi: '60 % puuvillaa, 33 % polyesteriä, 4 % nailonia, 2 % elastaania, 1 % elastodieenia' } },
        { key: 'size', value: { en: 'One size, EU 40-45', fi: 'Yksi koko, EU 40-45' } },
        { key: 'contents', value: { en: '2 pairs of socks in a gift box', fi: '2 paria sukkia lahjarasiassa' } },
        { key: 'other', label: { en: 'Licence', fi: 'Lisenssi' }, value: { en: 'Official Moomin product', fi: 'Virallinen Muumi-tuote' } },
      ],
      sourceUrl: 'https://nordicbuddies.com/products/moomins-christmas-sockbox-xmasbox17b',
      fetchedAt: '2026-11-06',
    },
  },
  {
    slug: 'nb-moomintroll-fleece-mittens',
    category: 'clothing',
    brand: 'Nordicbuddies',
    name: {
      en: 'Moomintroll fleece mittens',
      fi: 'Muumipeikko-fleecelapaset',
    },
    description: {
      en: 'Fleece Moomintroll mittens made from 100 per cent recycled polyester, with an acrylic lining. They stretch, so one size fits most, and they are an official Moomin product.',
      fi: 'Muumipeikko-lapaset 100-prosenttisesta kierrätyspolyesterifleecestä, vuorena akryyli. Lapaset joustavat, joten yksi koko sopii useimmille, ja lapaset ovat virallinen Muumi-tuote.',
    },
    priceFrom: 29.9,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-nb-moomintroll-fleece-mittens',
    imageIsPartner: true,
    partnerId: 'nordicbuddies',
    partnerProductUrl: 'https://nordicbuddies.com/products/moomintroll-fleece-mittens-moomin18k',
    details: {
      specs: [
        { key: 'material', value: { en: '100 % recycled polyester', fi: '100 % kierrätyspolyesteriä' } },
        { key: 'other', label: { en: 'Lining', fi: 'Vuori' }, value: { en: '100 % acrylic', fi: '100 % akryylia' } },
        { key: 'size', value: { en: 'One size, stretchy, fits most', fi: 'Yksi koko, joustava, sopii useimmille' } },
        { key: 'other', label: { en: 'Licence', fi: 'Lisenssi' }, value: { en: 'Official Moomin product', fi: 'Virallinen Muumi-tuote' } },
      ],
      sourceUrl: 'https://nordicbuddies.com/products/moomintroll-fleece-mittens-moomin18k',
      fetchedAt: '2026-11-06',
    },
  },
  {
    slug: 'nb-moomintroll-chunky-beanie',
    category: 'clothing',
    brand: 'Nordicbuddies',
    name: {
      en: 'Moomintroll fluffy chunky beanie, pink',
      fi: 'Muumipeikko-pörröpipo, pinkki',
    },
    description: {
      en: 'A fluffy, chunky Moomintroll beanie in pink, in one adult size that fits all. The material is a mix of polyester, nylon, acrylic, wool and elastane, and it is an official Moomin product.',
      fi: 'Pörröinen ja paksu pinkki Muumipeikko-pipo, yksi aikuisten koko, joka sopii kaikille. Materiaali on polyesterin, nailonin, akryylin, villan ja elastaanin sekoitus, ja pipo on virallinen Muumi-tuote.',
    },
    priceFrom: 34.9,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-nb-moomintroll-chunky-beanie',
    imageIsPartner: true,
    partnerId: 'nordicbuddies',
    partnerProductUrl: 'https://nordicbuddies.com/products/moomintroll-fluffy-chunky-beanie',
    details: {
      specs: [
        { key: 'material', value: { en: 'Polyester, nylon, acrylic, wool and elastane', fi: 'Polyesteri, nailon, akryyli, villa ja elastaani' } },
        { key: 'size', value: { en: 'Adult, one size', fi: 'Aikuisten koko, yksi koko' } },
        { key: 'color', value: { en: 'Pink', fi: 'Pinkki' } },
        { key: 'other', label: { en: 'Licence', fi: 'Lisenssi' }, value: { en: 'Official Moomin product', fi: 'Virallinen Muumi-tuote' } },
      ],
      sourceUrl: 'https://nordicbuddies.com/products/moomintroll-fluffy-chunky-beanie',
      fetchedAt: '2026-11-06',
    },
  },
  {
    slug: 'sk-fazer-christmas-box',
    category: 'treats',
    brand: 'Fazer',
    name: {
      en: 'Fazer Christmas box 2026',
      fi: 'Fazer-jouluboksi 2026',
    },
    description: {
      en: 'Fazer\'s Christmas box for 2026 with 6 packs of seasonal chocolate, sweets and gingerbread. It holds Karl Fazer chocolates, a Karl Fazer gingerbread chocolate bar, Remix Xmas + Choco, Dumle Winter Mix toffees, Vihreät kuulat pear jellies and Marianne mint chocolate gingerbread biscuits.',
      fi: 'Fazerin jouluboksi vuodelle 2026, jossa on 6 pakkausta jouluisia suklaita, makeisia ja piparkakkuja. Boksissa ovat Karl Fazer -suklaakonvehdit, Karl Fazer -piparkakkusuklaalevy, Remix Xmas + Choco -makeissekoitus, Dumle Winter Mix -toffeesekoitus, Vihreät kuulat -päärynämarmeladit ja Marianne-minttusuklaapiparkakut.',
    },
    priceFrom: 37.52,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-sk-fazer-christmas-box',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/fazer-jouluboksi-2025',
    details: {
      specs: [
        { key: 'contents', value: { en: 'Karl Fazer chocolates 250 g, Karl Fazer gingerbread chocolate bar 200 g, Remix Xmas + Choco sweet mix 300 g, Dumle Winter Mix toffee mix 180 g, Vihreät kuulat pear jellies 260 g, Marianne mint chocolate gingerbread biscuits 175 g', fi: 'Karl Fazer -suklaakonvehdit 250 g, Karl Fazer -piparkakkusuklaalevy 200 g, Remix Xmas + Choco -makeissekoitus 300 g, Dumle Winter Mix -toffeesekoitus 180 g, Vihreät kuulat -päärynämarmeladit 260 g, Marianne-minttusuklaapiparkakut 175 g' } },
        { key: 'other', label: { en: 'Label notes', fi: 'Pakkausmerkinnät' }, value: { en: 'Milk chocolate with at least 30 % cocoa', fi: 'Maitosuklaassa vähintään 30 % kaakaota' } },
        { key: 'other', label: { en: 'Allergens', fi: 'Allergeenit' }, value: { en: 'Contains wheat (gluten), soy and milk (lactose). May contain rye, barley, oats, egg, nuts and almonds', fi: 'Sisältää vehnää (gluteenia), soijaa ja maitoa (laktoosia). Saattaa sisältää ruista, ohraa, kauraa, kananmunaa, pähkinää ja mantelia' } },
        { key: 'other', label: { en: 'Nutrition per 100 g', fi: 'Ravintosisältö per 100 g' }, value: { en: 'Energy 1845 kJ / 441 kcal, fat 17 g of which saturates 9.4 g, carbohydrate 67 g of which sugars 53 g, protein 4.6 g, salt 0.36 g', fi: 'Energia 1845 kJ / 441 kcal, rasva 17 g, josta tyydyttynyttä 9,4 g, hiilihydraatit 67 g, joista sokereita 53 g, proteiini 4,6 g, suola 0,36 g' } },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/fazer-jouluboksi-2025',
      fetchedAt: '2026-11-06',
    },
  },
  {
    slug: 'sk-karl-fazer-advent-calendar',
    category: 'treats',
    brand: 'Fazer',
    name: {
      en: 'Karl Fazer advent calendar 200 g',
      fi: 'Karl Fazer -joulukalenteri 200 g',
    },
    description: {
      en: 'A Karl Fazer advent calendar with 200 g of chocolate pralines in several flavours behind its doors. The last door is filled with Fazer Blue, the Karl Fazer milk chocolate that Fazer has made since 1922. Fazer sources its cocoa under the Fazer Cocoa Vision programme.',
      fi: 'Karl Fazer -joulukalenteri, jonka luukkujen takana on 200 g suklaakonvehteja moneen makuun. Viimeinen luukku on täynnä Fazerin Sinistä, Karl Fazer -maitosuklaata, jota Fazer on valmistanut vuodesta 1922. Fazer hankkii kaakaonsa Fazer Cocoa Vision -ohjelman mukaisesti.',
    },
    priceFrom: 22.46,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-sk-karl-fazer-advent-calendar',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/karl-fazer-joulukalenteri-200-g',
    details: {
      specs: [
        { key: 'weight', value: { en: '200 g', fi: '200 g' } },
        { key: 'contents', value: { en: 'Chocolate pralines in several flavours, last door filled with Fazer Blue milk chocolate', fi: 'Suklaakonvehteja moneen makuun, viimeisessä luukussa Fazerin Sinistä maitosuklaata' } },
        { key: 'other', label: { en: 'Label notes', fi: 'Pakkausmerkinnät' }, value: { en: 'Milk chocolate with at least 30 % cocoa', fi: 'Maitosuklaassa vähintään 30 % kaakaota' } },
        { key: 'other', label: { en: 'Allergens', fi: 'Allergeenit' }, value: { en: 'Contains milk, soy and barley (gluten). May contain nuts, almonds, wheat, rye and oats', fi: 'Sisältää maitoa, soijaa ja ohraa (gluteenia). Saattaa sisältää pähkinöitä, manteleita, vehnää, ruista ja kauraa' } },
        { key: 'other', label: { en: 'Nutrition per 100 g', fi: 'Ravintosisältö per 100 g' }, value: { en: 'Energy 2315 kJ / 554 kcal, fat 34 g of which saturates 20 g, carbohydrate 53 g of which sugars 51 g, protein 9.6 g, salt 0.31 g', fi: 'Energia 2315 kJ / 554 kcal, rasva 34 g, josta tyydyttynyttä 20 g, hiilihydraatit 53 g, joista sokereita 51 g, proteiini 9,6 g, suola 0,31 g' } },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/karl-fazer-joulukalenteri-200-g',
      fetchedAt: '2026-11-06',
    },
  },
  {
    slug: 'sk-fazer-christmas-chocolates',
    category: 'treats',
    brand: 'Fazer',
    name: {
      en: 'Fazer Joulusuklaa Christmas chocolates 295 g',
      fi: 'Fazer Joulusuklaa -suklaakonvehdit 295 g',
    },
    description: {
      en: 'Fazer Joulusuklaa chocolates, 295 g, with a mild milk chocolate shell around a truffle filling with real gingerbread crumbs. Fazer suggests them for Christmas gatherings, for example alongside glögi, the Nordic mulled drink.',
      fi: 'Fazer Joulusuklaa -konvehdeissa (295 g) on lempeä maitosuklaakuori, jonka sisällä on tryffelitäyte ja aitoa piparimurua. Fazer suosittelee niitä joulun juhlahetkiin esimerkiksi glögin kanssa.',
    },
    priceFrom: 12.42,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-sk-fazer-christmas-chocolates',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/fazer-joulusuklaa-suklaakonvehti-320-g-1',
    details: {
      specs: [
        { key: 'weight', value: { en: '295 g', fi: '295 g' } },
        { key: 'contents', value: { en: 'Milk chocolate shell, truffle filling with gingerbread crumbs', fi: 'Maitosuklaakuori, tryffelitäyte ja piparimurua' } },
        { key: 'other', label: { en: 'Label notes', fi: 'Pakkausmerkinnät' }, value: { en: 'Milk chocolate with at least 30 % cocoa', fi: 'Maitosuklaassa vähintään 30 % kaakaota' } },
        { key: 'other', label: { en: 'Allergens', fi: 'Allergeenit' }, value: { en: 'Contains milk, wheat, barley (gluten) and soy. May contain nuts, almonds, rye and oats', fi: 'Sisältää maitoa, vehnää, ohraa (gluteenia) ja soijaa. Saattaa sisältää pähkinöitä, manteleita, ruista ja kauraa' } },
        { key: 'other', label: { en: 'Nutrition per 100 g', fi: 'Ravintosisältö per 100 g' }, value: { en: 'Energy 2274 kJ / 545 kcal, fat 33 g of which saturates 19 g, carbohydrate 53 g of which sugars 51 g, protein 8.2 g, salt 0.24 g', fi: 'Energia 2274 kJ / 545 kcal, rasva 33 g, josta tyydyttynyttä 19 g, hiilihydraatit 53 g, joista sokereita 51 g, proteiini 8,2 g, suola 0,24 g' } },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/fazer-joulusuklaa-suklaakonvehti-320-g-1',
      fetchedAt: '2026-11-06',
    },
  },
  {
    slug: 'sk-karl-fazer-gingerbread-bar',
    category: 'treats',
    brand: 'Fazer',
    name: {
      en: 'Karl Fazer Winter Edition gingerbread chocolate bar 200 g',
      fi: 'Karl Fazer Winter Edition -piparkakkusuklaalevy 200 g',
    },
    description: {
      en: 'A 200 g Karl Fazer Winter Edition bar that combines soft milk chocolate with crisp gingerbread. Fazer has made Karl Fazer milk chocolate since 1922, and this gingerbread bar is its Christmas edition.',
      fi: 'Karl Fazer Winter Edition -suklaalevy (200 g) yhdistää pehmeän maitosuklaan ja rapean piparkakun. Fazer on valmistanut Karl Fazer -maitosuklaata vuodesta 1922, ja tämä piparkakkulevy on sen jouluversio.',
    },
    priceFrom: 6.9,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-sk-karl-fazer-gingerbread-bar',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/karl-fazer-piparkakku-maitosuklaa-200-g-winter-edition',
    details: {
      specs: [
        { key: 'weight', value: { en: '200 g', fi: '200 g' } },
        { key: 'contents', value: { en: 'Milk chocolate with crisp gingerbread', fi: 'Maitosuklaata ja rapeaa piparkakkua' } },
        { key: 'other', label: { en: 'Label notes', fi: 'Pakkausmerkinnät' }, value: { en: 'Milk chocolate with at least 30 % cocoa', fi: 'Maitosuklaassa vähintään 30 % kaakaota' } },
        { key: 'other', label: { en: 'Allergens', fi: 'Allergeenit' }, value: { en: 'Contains milk, wheat (gluten) and soy. May contain nuts, almonds, rye and oats', fi: 'Sisältää maitoa, vehnää (gluteenia) ja soijaa. Saattaa sisältää pähkinöitä, manteleita, ruista ja kauraa' } },
        { key: 'other', label: { en: 'Nutrition per 100 g', fi: 'Ravintosisältö per 100 g' }, value: { en: 'Energy 2205 kJ / 527 kcal, fat 30 g of which saturates 18 g, carbohydrate 55 g of which sugars 48 g, protein 8.5 g, salt 0.22 g', fi: 'Energia 2205 kJ / 527 kcal, rasva 30 g, josta tyydyttynyttä 18 g, hiilihydraatit 55 g, joista sokereita 48 g, proteiini 8,5 g, suola 0,22 g' } },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/karl-fazer-piparkakku-maitosuklaa-200-g-winter-edition',
      fetchedAt: '2026-11-06',
    },
  },
  {
    slug: 'sk-fazer-glogg-balls',
    category: 'treats',
    brand: 'Fazer',
    name: {
      en: 'Fazer Glögikuulat jelly sweets 260 g',
      fi: 'Fazer Glögikuulat -makeisrasia 260 g',
    },
    description: {
      en: 'A 260 g box of Fazer Glögikuulat, soft and sweet jelly balls named after glögi, the Nordic mulled drink. They contain no gluten, gelatine or lactose and are suitable for vegans. The box includes a recipe for turning them into a warm drink.',
      fi: 'Fazerin Glögikuulat ovat pehmeitä ja makeita hyytelömakeisia, 260 g rasiassa. Ne eivät sisällä gluteenia, liivatetta eikä laktoosia, ja ne sopivat myös vegaaneille. Pakkauksessa on resepti, jolla Glögikuulista saa lämpimän juoman.',
    },
    priceFrom: 6.9,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-sk-fazer-glogg-balls',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/fazer-glogikuulat-makeisrasia-260g',
    details: {
      specs: [
        { key: 'weight', value: { en: '260 g', fi: '260 g' } },
        { key: 'other', label: { en: 'Diet', fi: 'Ruokavalio' }, value: { en: 'Gluten free, gelatine free, lactose free, vegan', fi: 'Gluteeniton, liivatteeton, laktoositon, vegaaninen' } },
        { key: 'other', label: { en: 'Nutrition per 100 g', fi: 'Ravintosisältö per 100 g' }, value: { en: 'Energy 1353 kJ / 322 kcal, fat 0 g of which saturates 0 g, carbohydrate 79 g of which sugars 64 g, protein 0 g, salt 0.28 g', fi: 'Energia 1353 kJ / 322 kcal, rasva 0 g, josta tyydyttynyttä 0 g, hiilihydraatit 79 g, joista sokereita 64 g, proteiini 0 g, suola 0,28 g' } },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/fazer-glogikuulat-makeisrasia-260g',
      fetchedAt: '2026-11-06',
    },
  },
  {
    slug: 'sk-halva-christmas-liquorice',
    category: 'treats',
    brand: 'Halva',
    name: {
      en: 'Halva Christmas Liquorice Mix 250 g',
      fi: 'Halva Jouluinen lakritsisekoitus 250 g',
    },
    description: {
      en: 'Halva\'s Christmas Liquorice Mix, 250 g of liquorice in 3 Christmas flavours, packed in a rose-gold-coloured box. There are apple-pie-flavoured liquorice flowers, liquorice filled with glögi and liquorice filled with gingerbread. Halva makes the mix in Pitäjänmäki in Helsinki.',
      fi: 'Halvan Jouluinen lakritsisekoitus sisältää 250 g lakritsia 3 jouluisessa maussa, ruusukullanvärisessä rasiassa. Rasiassa on omenapiirakanmakuisia lakukukkia, glögitäytteisiä lakuja ja piparkakkutäytteisiä lakuja. Halva valmistaa sekoituksen Helsingin Pitäjänmäellä.',
    },
    priceFrom: 14.43,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-sk-halva-christmas-liquorice',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/christmas-liquorice-mix-250-g',
    details: {
      specs: [
        { key: 'weight', value: { en: '250 g', fi: '250 g' } },
        { key: 'contents', value: { en: 'Apple pie flavoured liquorice flowers, glögi filled liquorice, gingerbread filled liquorice', fi: 'Omenapiirakanmakuiset lakukukat, glögitäytelaku ja piparkakkutäytelaku' } },
        { key: 'origin', value: { en: 'Made in Pitäjänmäki, Helsinki', fi: 'Valmistettu Helsingin Pitäjänmäellä' } },
        { key: 'other', label: { en: 'Allergens', fi: 'Allergeenit' }, value: { en: 'Contains wheat (gluten)', fi: 'Sisältää vehnää (gluteenia)' } },
        { key: 'other', label: { en: 'Nutrition per 100 g', fi: 'Ravintosisältö per 100 g' }, value: { en: 'Energy 1419 kJ / 334 kcal, fat 0.7 g of which saturates 0.3 g, carbohydrate 79 g of which sugars 53 g, protein 2.9 g, salt 0.15 g', fi: 'Energia 1419 kJ / 334 kcal, rasva 0,7 g, josta tyydyttynyttä 0,3 g, hiilihydraatit 79 g, joista sokereita 53 g, proteiini 2,9 g, suola 0,15 g' } },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/christmas-liquorice-mix-250-g',
      fetchedAt: '2026-11-06',
    },
  },
  {
    slug: 'sk-halva-salmiakki-calendar',
    category: 'treats',
    brand: 'Halva',
    name: {
      en: 'Halva salmiakki advent calendar 200 g',
      fi: 'Halva Salmiakkikalenteri 200 g',
    },
    description: {
      en: 'A Halva advent calendar with 200 g of salmiakki, Finnish salty liquorice, chosen from Halva\'s own range. Behind the doors are Vanhat Autot, salmiakki fish, salty skulls, Pommix, salmiakki hearts, salmiakki swords, Salmiakkiruutu squares and Jauhix hard salmiakki.',
      fi: 'Halvan Salmiakkikalenteri, jossa on 200 g Halvan omia salmiakkeja. Luukkujen takaa löytyvät Vanhat Autot -salmiakki, salmiakkikala, suolainen pääkallo, Pommix-salmiakki, salmiakkisydän, salmiakkimiekka, salmiakkiruutu ja Jauhix-salmiakki.',
    },
    priceFrom: 31.25,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-sk-halva-salmiakki-calendar',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/halva-salmiakkikalenteri-200-g',
    details: {
      specs: [
        { key: 'weight', value: { en: '200 g', fi: '200 g' } },
        { key: 'contents', value: { en: 'Vanhat Autot salmiakki, salmiakki fish, salty skull, Pommix salmiakki, salmiakki heart, salmiakki sword, Salmiakkiruutu, Jauhix salmiakki', fi: 'Vanhat Autot -salmiakki, salmiakkikala, suolainen pääkallo, Pommix-salmiakki, salmiakkisydän, salmiakkimiekka, salmiakkiruutu, Jauhix-salmiakki' } },
        { key: 'other', label: { en: 'Nutrition per 100 g', fi: 'Ravintosisältö per 100 g' }, value: { en: 'Energy 1406 kJ / 331 kcal, fat 0.5 g of which saturates 0.1 g, carbohydrate 80 g of which sugars 59 g, protein 2.7 g, salt 0.03 g', fi: 'Energia 1406 kJ / 331 kcal, rasva 0,5 g, josta tyydyttynyttä 0,1 g, hiilihydraatit 80 g, joista sokereita 59 g, proteiini 2,7 g, suola 0,03 g' } },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/halva-salmiakkikalenteri-200-g',
      fetchedAt: '2026-11-06',
    },
  },
  {
    slug: 'kuivalihakundi-advent-calendar',
    category: 'treats',
    brand: 'Kuivalihakundi',
    name: {
      en: 'Kuivalihakundi jerky advent calendar 2026, 24 doors',
      fi: 'Kuivalihakundin kuivalihakalenteri 2026, 24 luukkua',
    },
    description: {
      en: 'Kuivalihakundi\'s 2026 advent calendar holds 24 different flavours of jerky, one 20 g bag behind each of the 24 doors. There is beef, chicken, fatty pork and leaner pork, in basic flavours and in some made only for this calendar. All of it comes from the company\'s own factory in Jokela, Finland. The jerky keeps at room temperature even once opened. The calendar stands on a table or hangs on the wall from its hanging holes, and it is a limited batch.',
      fi: 'Kuivalihakundin vuoden 2026 joulukalenterissa on 24 eri makua kuivalihaa, yksi 20 gramman pussi jokaisen 24 luukun takana. Mukana on nautaa, kanaa, rasvaista possua ja vähärasvaisempaa possua sekä perusmakuina että juuri tätä kalenteria varten tehtyinä makuina. Kaikki on valmistettu yhtiön omalla tehtaalla Jokelassa. Kuivaliha säilyy huoneenlämmössä avattunakin. Kalenterin voi asettaa pöydälle tai ripustaa seinälle ripustusreikien avulla, ja se on rajoitettu erä.',
    },
    priceFrom: 89.99,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-kuivalihakundi-advent-calendar',
    imageIsPartner: true,
    partnerId: 'kuivalihakundi',
    partnerProductUrl: 'https://kuivalihakundi.com/products/joulukalenteri-2026',
    details: {
      specs: [
        { key: 'contents', value: { en: '24 x 20 g bags of jerky, a different flavour behind each door', fi: '24 x 20 g kuivalihapussia, jokaisen luukun takana eri maku' } },
        { key: 'other', label: { en: 'Meats', fi: 'Lihat' }, value: { en: 'Beef, chicken, fatty pork and leaner pork', fi: 'Nauta, kana, rasvainen possu ja vähärasvaisempi possu' } },
        { key: 'origin', value: { en: 'Made at Kuivalihakundi\'s own factory in Jokela, Finland', fi: 'Valmistettu Kuivalihakundin omalla tehtaalla Jokelassa' } },
        { key: 'shelfLife', value: { en: 'Keeps at room temperature, even after opening', fi: 'Säilyy huoneenlämmössä avattunakin' } },
        { key: 'other', label: { en: 'Hanging', fi: 'Ripustus' }, value: { en: 'Stands on a table or hangs on the wall from its hanging holes', fi: 'Seisoo pöydällä tai roikkuu seinällä ripustusreikien varassa' } },
      ],
      sourceUrl: 'https://kuivalihakundi.com/products/joulukalenteri-2026',
      fetchedAt: '2026-11-06',
    },
  },
  {
    slug: 'sk-nordqvist-tea-calendar',
    category: 'treats',
    brand: 'Nordqvist',
    name: {
      en: 'Nordqvist tea Christmas calendar, 27 bags',
      fi: 'Nordqvist teejoulukalenteri, 27 pussia',
    },
    description: {
      en: 'A cube-shaped tea Christmas calendar from Nordqvist with 25 doors and 27 tea bags, since the last door holds three. The bags cover black, green and rooibos teas and hibiscus blends, with Christmas flavours such as gingerbread, glögi and cinnamon among them.',
      fi: 'Kuution muotoinen Nordqvistin teejoulukalenteri, jossa on 25 luukkua ja 27 teepussia, sillä viimeisessä luukussa on kolme. Mukana on mustaa, vihreää ja rooibosteetä sekä hibiskussekoituksia, ja joukossa on jouluisia makuja, kuten piparkakkua, glögiä ja kanelia.',
    },
    priceFrom: 24.97,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-sk-nordqvist-tea-calendar',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/nordqvist-teejoulukalenteri-27-pss-rfa',
    details: {
      specs: [
        { key: 'contents', value: { en: '25 doors, 27 tea bags. The last door holds 3 bags', fi: '25 luukkua, 27 teepussia. Viimeisessä luukussa 3 pussia' } },
        { key: 'other', label: { en: 'Teas', fi: 'Teelaadut' }, value: { en: 'Black, green and rooibos tea, hibiscus blends', fi: 'Musta, vihreä ja rooibostee, hibiskussekoitukset' } },
        { key: 'other', label: { en: 'Marketer', fi: 'Markkinoija' }, value: { en: 'Nordqvist Oy, Nurmijärvi', fi: 'Nordqvist Oy, Nurmijärvi' } },
        { key: 'other', label: { en: 'EAN', fi: 'EAN' }, value: { en: '6413440000433', fi: '6413440000433' } },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/nordqvist-teejoulukalenteri-27-pss-rfa',
      fetchedAt: '2026-11-06',
    },
  },
  {
    slug: 'sk-nordqvist-moomin-tea-calendar',
    category: 'treats',
    brand: 'Nordqvist',
    name: {
      en: 'Nordqvist Moomin tea Christmas calendar, 24 bags, lilac',
      fi: 'Nordqvist Muumi-teejoulukalenteri, 24 pussia, liila',
    },
    description: {
      en: 'A lilac Moomin tea Christmas calendar from Nordqvist with 24 pyramid tea bags in 12 flavours, two of each. Black and green teas sit alongside caffeine-free rooibos, and every flavour has its own name, from Olet Ihana (You Are Lovely) to Muumimamman Voimajuoma (Moominmamma\'s Power Drink). The lid opens so that the calendar stays upright, and it is Rainforest Alliance certified.',
      fi: 'Liila Muumi-teejoulukalenteri Nordqvistilta, 24 pyramiditeepussia ja 12 makua, kutakin kaksi. Mukana on mustaa ja vihreää teetä sekä kofeiinitonta rooibosta, ja jokaisella maulla on oma nimensä, Olet Ihanasta Muumimamman Voimajuomaan. Avattava kansi pitää kalenterin pystyssä, ja kalenteri on Rainforest Alliance -sertifioitu.',
    },
    priceFrom: 22.46,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-sk-nordqvist-moomin-tea-calendar',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/muumi-teekalenteri-rfa-12-makua-uutuus',
    details: {
      specs: [
        { key: 'contents', value: { en: '24 pyramid tea bags, 12 flavours, 2 of each', fi: '24 pyramiditeepussia, 12 makua, kutakin 2' } },
        { key: 'weight', value: { en: '41.5 g', fi: '41,5 g' } },
        { key: 'color', value: { en: 'Lilac', fi: 'Liila' } },
        { key: 'other', label: { en: 'Certification', fi: 'Sertifiointi' }, value: { en: 'Rainforest Alliance', fi: 'Rainforest Alliance' } },
        { key: 'other', label: { en: 'Marketer', fi: 'Markkinoija' }, value: { en: 'Nordqvist Oy, Nurmijärvi', fi: 'Nordqvist Oy, Nurmijärvi' } },
        { key: 'other', label: { en: 'EAN', fi: 'EAN' }, value: { en: '6413440000679', fi: '6413440000679' } },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/muumi-teekalenteri-rfa-12-makua-uutuus',
      fetchedAt: '2026-11-06',
    },
  },
  {
    slug: 'sk-nordic-glogg-concentrate',
    category: 'treats',
    brand: 'Poikain Parhaat',
    name: {
      en: 'Poikain Parhaat Nordic glögi concentrate 0.5 l',
      fi: 'Poikain Parhaat Nordic -glögitiiviste 0,5 l',
    },
    description: {
      en: 'An alcohol-free (0 %) glögi concentrate made by hand from Finnish blackcurrant and redcurrant juice and real spices, with a mixing ratio of 1+3. Poikain Parhaat describes it as rich in berries and warmly spiced, a glögi with a traditional taste.',
      fi: 'Alkoholiton (0 %) glögitiiviste, valmistettu käsityönä suomalaisista musta- ja punaherukkatäysmehuista ja aidoista mausteista, sekoitussuhde 1+3. Poikain Parhaat kuvaa sitä marjaiseksi ja lämpimän mausteiseksi, perinteisen makuiseksi glögiksi.',
    },
    priceFrom: 9.41,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-sk-nordic-glogg-concentrate',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/nordic-glogitiiviste-0-0-5l-1-3',
    details: {
      specs: [
        { key: 'volume', value: { en: '0.5 l', fi: '0,5 l' } },
        { key: 'other', label: { en: 'Mixing ratio', fi: 'Sekoitussuhde' }, value: { en: '1+3', fi: '1+3' } },
        { key: 'other', label: { en: 'Alcohol', fi: 'Alkoholi' }, value: { en: '0 %', fi: '0 %' } },
        { key: 'origin', value: { en: 'Blackcurrant and redcurrant juice from Finland', fi: 'Musta- ja punaherukkatäysmehu Suomesta' } },
        { key: 'other', label: { en: 'Nutrition per 100 ml', fi: 'Ravintosisältö per 100 ml' }, value: { en: 'Energy 47.7 kcal / 199.58 kJ, fat 0.2 g of which saturates 0.2 g, carbohydrate 11 g of which sugars 11 g, protein 0.3 g, salt 0.2 g', fi: 'Energia 47,7 kcal / 199,58 kJ, rasva 0,2 g, josta tyydyttynyttä 0,2 g, hiilihydraatit 11 g, joista sokereita 11 g, proteiini 0,3 g, suola 0,2 g' } },
        { key: 'other', label: { en: 'Marketer', fi: 'Markkinoija' }, value: { en: 'Poikain Parhaat Oy Ltd, Tampere', fi: 'Poikain Parhaat Oy Ltd, Tampere' } },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/nordic-glogitiiviste-0-0-5l-1-3',
      fetchedAt: '2026-11-06',
    },
  },
  {
    slug: 'rj-christmas-coffee',
    category: 'treats',
    brand: 'Gran Palomar',
    name: {
      en: 'Gran Palomar Christmas coffee 200 g',
      fi: 'Gran Palomar -joulukahvi 200 g',
    },
    description: {
      en: 'Gran Palomar Christmas coffee from Cafetoria Roastery, an organic, fair trade coffee flavoured with organic cinnamon and cardamom. It comes in a 200 g pack.',
      fi: 'Cafetoria Roastery -paahtimon Gran Palomar -joulukahvi on reilun kaupan luomukahvia, joka on maustettu luomukanelilla ja luomukardemummalla. Pakkauskoko on 200 g.',
    },
    priceFrom: 11.95,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-rj-christmas-coffee',
    imageIsPartner: true,
    partnerId: 'ruohonjuuri',
    partnerProductUrl: 'https://www.ruohonjuuri.fi/products/gran-palomar-joulukahvi-200-g',
    details: {
      specs: [
        { key: 'weight', value: { en: '200 g', fi: '200 g' } },
        { key: 'other', label: { en: 'Spices', fi: 'Mausteet' }, value: { en: 'Organic cinnamon and cardamom', fi: 'Luomukaneli ja luomukardemumma' } },
        { key: 'other', label: { en: 'Certification', fi: 'Sertifiointi' }, value: { en: 'Fair trade, organic', fi: 'Reilu kauppa, luomu' } },
        { key: 'other', label: { en: 'Roastery', fi: 'Paahtimo' }, value: { en: 'Cafetoria Roastery Oy', fi: 'Cafetoria Roastery Oy' } },
      ],
      sourceUrl: 'https://www.ruohonjuuri.fi/products/gran-palomar-joulukahvi-200-g',
      fetchedAt: '2026-11-06',
    },
  },
  {
    slug: 'sk-emendo-santa-sauna-scent',
    category: 'handicrafts',
    brand: 'Emendo',
    name: {
      en: 'Emendo official Santa Claus sauna scent 500 ml',
      fi: 'Emendo Joulupukin virallinen löylytuoksu 500 ml',
    },
    description: {
      en: 'The official Santa Claus sauna scent from Emendo, 500 ml, made with genuine 100 per cent essential oils and no synthetic fragrance. Mix about ½ dl into a bucket of about 3 l of water and use it like ordinary sauna water.',
      fi: 'Emendon Joulupukin virallinen löylytuoksu (500 ml) on tehty aidoista 100-prosenttisista eteerisistä öljyistä, eikä siinä ole synteettisiä hajusteita. Sekoita noin ½ dl kiululliseen vettä, noin 3 l, ja käytä kuten tavallista löylyvettä.',
    },
    priceFrom: 10.67,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-sk-emendo-santa-sauna-scent',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/emendo-joulupukin-virallinen-loylytuoksu-500-ml',
    details: {
      specs: [
        { key: 'volume', value: { en: '500 ml', fi: '500 ml' } },
        { key: 'other', label: { en: 'Composition', fi: 'Koostumus' }, value: { en: 'Contains 100 % essential oils, no synthetic fragrance (parfum)', fi: 'Sisältää 100 % eteerisiä öljyjä, ei synteettisiä hajusteita (parfum)' } },
        { key: 'other', label: { en: 'Use', fi: 'Käyttö' }, value: { en: 'About ½ dl in a bucket of about 3 l of water', fi: 'Noin ½ dl kiululliseen vettä, noin 3 l' } },
        { key: 'other', label: { en: 'Licence', fi: 'Lisenssi' }, value: { en: '©Santa Claus Foundation™', fi: '©Santa Claus Foundation™' } },
        { key: 'other', label: { en: 'EAN', fi: 'EAN' }, value: { en: '6417892057458', fi: '6417892057458' } },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/emendo-joulupukin-virallinen-loylytuoksu-500-ml',
      fetchedAt: '2026-11-06',
    },
  },
  {
    slug: 'sk-emendo-christmas-sauna-set',
    category: 'handicrafts',
    brand: 'Emendo',
    name: {
      en: 'Emendo Jouluhetki sauna gift set',
      fi: 'Emendo Jouluhetki -saunalahjapakkaus',
    },
    description: {
      en: 'Jouluhetki, Finnish for Christmas moment, is an Emendo sauna gift set with a soap on a rope, a sauna scent and a bath puff. It comes ready packed as a gift.',
      fi: 'Emendon Jouluhetki-saunalahjapakkaus sisältää narusaippuan, saunatuoksun ja pesukukan. Setti on pakattu valmiiksi lahjaksi.',
    },
    priceFrom: 27.48,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-sk-emendo-christmas-sauna-set',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/emendo-jouluhetki-saunalahjapakkaus',
    details: {
      specs: [
        { key: 'contents', value: { en: 'Soap on a rope, sauna scent, bath puff', fi: 'Narusaippua, saunatuoksu, pesukukka' } },
        { key: 'other', label: { en: 'EAN', fi: 'EAN' }, value: { en: '6417892041280', fi: '6417892041280' } },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/emendo-jouluhetki-saunalahjapakkaus',
      fetchedAt: '2026-11-06',
    },
  },
  {
    slug: 'sk-emendo-gingerbread-glogg-scent',
    category: 'handicrafts',
    brand: 'Emendo',
    name: {
      en: 'Emendo sauna scents, gingerbread and glögi, 2 x 10 ml',
      fi: 'Emendo saunatuoksut Pipari ja Glögi, 2 x 10 ml',
    },
    description: {
      en: 'Two Emendo sauna scents, gingerbread and glögi, 10 ml each, made from genuine 100 per cent essential oils. Add 2 to 6 drops to a ladle of water and throw it on the stones.',
      fi: 'Kaksi Emendon saunatuoksua, Pipari ja Glögi, kumpaakin 10 ml, valmistettu aidoista 100-prosenttisista eteerisistä öljyistä. Lisää 2-6 tippaa löylykauhalliseen vettä ja heitä kiukaalle.',
    },
    priceFrom: 16.94,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-sk-emendo-gingerbread-glogg-scent',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/emendo-saunatuoksu-pipari-glogi-2x10ml',
    details: {
      specs: [
        { key: 'volume', value: { en: '2 x 10 ml', fi: '2 x 10 ml' } },
        { key: 'other', label: { en: 'Scents', fi: 'Tuoksut' }, value: { en: 'Gingerbread, glögi', fi: 'Pipari, glögi' } },
        { key: 'other', label: { en: 'Composition', fi: 'Koostumus' }, value: { en: 'Made from 100 % essential oils', fi: 'Valmistettu 100 % eteerisistä öljyistä' } },
        { key: 'other', label: { en: 'Use', fi: 'Käyttö' }, value: { en: '2 to 6 drops in a ladle of water', fi: '2-6 tippaa löylykauhalliseen vettä' } },
        { key: 'other', label: { en: 'EAN', fi: 'EAN' }, value: { en: '6417892021060', fi: '6417892021060' } },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/emendo-saunatuoksu-pipari-glogi-2x10ml',
      fetchedAt: '2026-11-06',
    },
  },
  {
    slug: 'sk-aromageddon-gingerbread-scent',
    category: 'handicrafts',
    brand: 'Aromageddon',
    name: {
      en: 'Aromageddon sauna scent, Piparipyörre 15 ml',
      fi: 'Aromageddon Piparipyörre -saunatuoksu 15 ml',
    },
    description: {
      en: 'Aromageddon\'s Piparipyörre, or gingerbread swirl, brings a warm, spicy cinnamon scent with a gingerbread note into the sauna. Add 2 to 4 drops to a ladle of water and always use it diluted. Never pour it straight onto the stove.',
      fi: 'Aromageddonin Piparipyörre tuo saunaan lämpimän, mausteisen ja piparimaisen kanelituoksun. Lisää 2-4 pisaraa löylykauhalliseen vettä ja käytä aina laimennettuna, älä kaada suoraan kiukaalle.',
    },
    priceFrom: 9.91,
    currency: 'EUR',
    priceCheckedAt: '2026-11-06',
    image: 'prod-sk-aromageddon-gingerbread-scent',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/aromageddon-piparipyorre-saunatuoksu-15ml',
    details: {
      specs: [
        { key: 'volume', value: { en: '15 ml', fi: '15 ml' } },
        { key: 'other', label: { en: 'Scent', fi: 'Tuoksu' }, value: { en: 'Cinnamon with a gingerbread note', fi: 'Piparimainen kaneli' } },
        { key: 'other', label: { en: 'Use', fi: 'Käyttö' }, value: { en: '2 to 4 drops in a ladle of water, always diluted', fi: '2-4 pisaraa löylykauhalliseen vettä, aina laimennettuna' } },
        { key: 'other', label: { en: 'Marketer', fi: 'Markkinoija' }, value: { en: 'Aromageddon Oy, Espoo', fi: 'Aromageddon Oy, Espoo' } },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/aromageddon-piparipyorre-saunatuoksu-15ml',
      fetchedAt: '2026-11-06',
    },
  },
  // Vaatevalikoiman laajennus 7.11.2026 (Vesa: "eikö saada monipuolisempaa tarjontaa eikä vain pipoja?"):
  // Makian parkat ja neuleet, Haltin laskettelu-asut ja talvikengät, Suomi-fanituotteet. Kauppojen omista
  // tuoteluetteloista (Shopify products.json), hinta ja tiedot luettu 2026-11-07.
  {
    slug: 'makia-glacier-parka',
    category: 'clothing',
    brand: 'Makia',
    name: {
      en: 'Makia Glacier parka',
      fi: 'Makia Glacier -parkatakki',
    },
    description: {
      en: 'A longer winter parka from Makia with a regular fit and a lining of 100 per cent recycled polyester. The shell is 73 per cent cotton and 27 per cent recycled nylon, and its 5000 mm water column helps keep occasional rain out. A cord on the inside of the waist adjusts the fit.',
      fi: 'Makian pidempi parkatakki talvikäyttöön, suoralla istuvuudella ja 100 % kierrätetystä polyesteristä tehdyllä vuorella. Kuoressa on 73 % puuvillaa ja 27 % kierrätettyä nailonia, ja 5000 mm:n vesipilari auttaa pitämään satunnaisen sateen loitolla. Vyötäröä voi säätää vuorin puolella olevalla nyörillä.',
    },
    priceFrom: 259,
    currency: 'EUR',
    priceCheckedAt: '2026-11-07',
    image: 'prod-makia-glacier-parka',
    imageIsPartner: true,
    partnerId: 'makia',
    partnerProductUrl: 'https://makia.com/products/m31036-glacier-parka-black',
    details: {
      specs: [
        { key: 'material', value: { en: 'Shell 73 % cotton, 27 % recycled nylon. Lining 100 % recycled polyester', fi: 'Kuori 73 % puuvillaa, 27 % kierrätettyä nailonia. Vuori 100 % kierrätettyä polyesteriä' } },
        { key: 'other', label: { en: 'Water column', fi: 'Vesipilari' }, value: { en: '5000 mm', fi: '5000 mm' } },
        { key: 'color', value: { en: 'Black', fi: 'Musta' } },
        { key: 'size', value: { en: 'S to XXL', fi: 'S-XXL' } },
      ],
      sourceUrl: 'https://makia.com/products/m31036-glacier-parka-black',
      fetchedAt: '2026-11-07',
    },
  },
  {
    slug: 'makia-maren-parka',
    category: 'clothing',
    brand: 'Makia',
    name: {
      en: 'Makia Maren puffer parka',
      fi: 'Makia Maren -toppatakki',
    },
    description: {
      en: 'A relaxed, mid-length puffer coat from Makia, insulated with 100 per cent Sorona® recycled polyester faux down. Sorona® is partly plant-based, breathable and holds warmth. A belt at the waist lets you adjust the fit when needed.',
      fi: 'Makian rento, puolipitkä toppatakki, jonka täyte on 100 % kierrätetystä polyesteristä tehtyä Sorona®-tekountuvaa. Sorona® on osittain kasvipohjainen, hengittävä ja lämpöä pitävä. Istuvuutta voi tarvittaessa säätää vyötärön vyöllä.',
    },
    priceFrom: 219,
    currency: 'EUR',
    priceCheckedAt: '2026-11-07',
    image: 'prod-makia-maren-parka',
    imageIsPartner: true,
    partnerId: 'makia',
    partnerProductUrl: 'https://makia.com/products/maren-parka',
    details: {
      specs: [
        { key: 'material', value: { en: 'Fill 100 % Sorona® recycled polyester faux down', fi: 'Täyte 100 % kierrätettyä polyesteriä, Sorona®-tekountuva' } },
        { key: 'other', label: { en: 'Fit', fi: 'Istuvuus' }, value: { en: 'Relaxed, mid-length, belt at the waist', fi: 'Rento, puolipitkä, vyö vyötäröllä' } },
        { key: 'color', value: { en: 'Dark wine red', fi: 'Tumma viininpunainen' } },
        { key: 'size', value: { en: 'XS to XXL', fi: 'XS-XXL' } },
      ],
      sourceUrl: 'https://makia.com/products/maren-parka',
      fetchedAt: '2026-11-07',
    },
  },
  {
    slug: 'makia-helsinki-parka',
    category: 'clothing',
    brand: 'Makia',
    name: {
      en: 'Makia Helsinki parka',
      fi: 'Makia Helsinki -parkatakki',
    },
    description: {
      en: 'A classic winter parka from Makia with a regular fit, plenty of pocket space and a hood with detachable faux fur. It builds on Makia\'s classic Raglan Parka, and the padding is 100 per cent Sorona® recycled polyester faux down. Sorona® is partly plant-based, breathable and holds warmth.',
      fi: 'Makian klassinen talviparkatakki suoralla istuvuudella, runsaalla taskutilalla ja hupulla, jonka tekoturkis irtoaa. Malli pohjautuu Makian klassiseen Raglan Parka -takkiin, ja vanu on 100 % kierrätetystä polyesteristä tehtyä Sorona®-tekountuvaa. Sorona® on osittain kasvipohjainen, hengittävä ja lämpöä pitävä.',
    },
    priceFrom: 239,
    currency: 'EUR',
    priceCheckedAt: '2026-11-07',
    image: 'prod-makia-helsinki-parka',
    imageIsPartner: true,
    partnerId: 'makia',
    partnerProductUrl: 'https://makia.com/products/m31033-helsinki-parka-dark-green',
    details: {
      specs: [
        { key: 'material', value: { en: 'Padding 100 % Sorona® recycled polyester faux down', fi: 'Vanu 100 % kierrätettyä polyesteriä, Sorona®-tekountuva' } },
        { key: 'other', label: { en: 'Hood', fi: 'Huppu' }, value: { en: 'Detachable faux fur', fi: 'Irrotettava tekoturkis' } },
        { key: 'color', value: { en: 'Dark green', fi: 'Tummanvihreä' } },
        { key: 'size', value: { en: 'S to XXL', fi: 'S-XXL' } },
      ],
      sourceUrl: 'https://makia.com/products/m31033-helsinki-parka-dark-green',
      fetchedAt: '2026-11-07',
    },
  },
  {
    slug: 'makia-else-parka',
    category: 'clothing',
    brand: 'Makia',
    name: {
      en: 'Makia Else parka',
      fi: 'Makia Else -parkatakki',
    },
    description: {
      en: 'A mid-length winter parka from Makia with a regular fit and a hood lined with detachable faux fur. The fill is 100 per cent Sorona® recycled polyester faux down, and a concealed adjuster at the waist sets the fit.',
      fi: 'Makian puolipitkä talviparkatakki suoralla istuvuudella ja hupulla, jonka tekoturkisvuori irtoaa. Täyte on 100 % kierrätetystä polyesteristä tehtyä Sorona®-tekountuvaa, ja istuvuutta voi säätää vyötärön piilotetulla säädöllä.',
    },
    priceFrom: 189,
    currency: 'EUR',
    priceCheckedAt: '2026-11-07',
    image: 'prod-makia-else-parka',
    imageIsPartner: true,
    partnerId: 'makia',
    partnerProductUrl: 'https://makia.com/products/else-parka-1',
    details: {
      specs: [
        { key: 'material', value: { en: 'Fill 100 % Sorona® recycled polyester faux down', fi: 'Täyte 100 % kierrätettyä polyesteriä, Sorona®-tekountuva' } },
        { key: 'other', label: { en: 'Hood', fi: 'Huppu' }, value: { en: 'Detachable faux fur lining', fi: 'Irrotettava tekoturkisvuori' } },
        { key: 'color', value: { en: 'Off-white', fi: 'Luonnonvalkoinen' } },
        { key: 'size', value: { en: 'XS to XXL', fi: 'XS-XXL' } },
      ],
      sourceUrl: 'https://makia.com/products/else-parka-1',
      fetchedAt: '2026-11-07',
    },
  },
  {
    slug: 'makia-frost-knit',
    category: 'clothing',
    brand: 'Makia',
    name: {
      en: 'Makia Frost knitted jumper',
      fi: 'Makia Frost -neule',
    },
    description: {
      en: 'A regular fit knitted jumper from Makia in a polyester blend, finished in a gradient colour scheme. Sizes S to XXL.',
      fi: 'Makian suoralinjainen neule polyesterisekoitteesta, viimeistelty liukuvärityksellä. Koot S-XXL.',
    },
    priceFrom: 119,
    currency: 'EUR',
    priceCheckedAt: '2026-11-07',
    image: 'prod-makia-frost-knit',
    imageIsPartner: true,
    partnerId: 'makia',
    partnerProductUrl: 'https://makia.com/products/frost-knit',
    details: {
      specs: [
        { key: 'material', value: { en: 'Polyester blend', fi: 'Polyesterisekoite' } },
        { key: 'other', label: { en: 'Colour scheme', fi: 'Väritys' }, value: { en: 'Gradient', fi: 'Liukuväritys' } },
        { key: 'size', value: { en: 'S to XXL', fi: 'S-XXL' } },
      ],
      sourceUrl: 'https://makia.com/products/frost-knit',
      fetchedAt: '2026-11-07',
    },
  },
  {
    slug: 'makia-salla-knit',
    category: 'clothing',
    brand: 'Makia',
    name: {
      en: 'Makia Salla merino polo neck jumper',
      fi: 'Makia Salla -merinopooloneule',
    },
    description: {
      en: 'A regular fit polo neck jumper from Makia, knitted from 100 per cent merino wool. Ajour (openwork) knit details run across the body and sleeves. Sizes XS to XXL.',
      fi: 'Makian suoralinjainen pooloneule 100 % merinovillasta. Vartalossa ja hihoissa on reikäneuleisia ajour-yksityiskohtia. Koot XS-XXL.',
    },
    priceFrom: 129,
    currency: 'EUR',
    priceCheckedAt: '2026-11-07',
    image: 'prod-makia-salla-knit',
    imageIsPartner: true,
    partnerId: 'makia',
    partnerProductUrl: 'https://makia.com/products/salla-knit',
    details: {
      specs: [
        { key: 'material', value: { en: '100 % merino wool', fi: '100 % merinovillaa' } },
        { key: 'other', label: { en: 'Details', fi: 'Yksityiskohdat' }, value: { en: 'Ajour knit details on the body and sleeves', fi: 'Ajour-reikäneuletta vartalossa ja hihoissa' } },
        { key: 'size', value: { en: 'XS to XXL', fi: 'XS-XXL' } },
      ],
      sourceUrl: 'https://makia.com/products/salla-knit',
      fetchedAt: '2026-11-07',
    },
  },
  {
    slug: 'makia-saarni-knit',
    category: 'clothing',
    brand: 'Makia',
    name: {
      en: 'Makia Saarni merino jumper',
      fi: 'Makia Saarni -merinoneule',
    },
    description: {
      en: 'A regular fit jumper from Makia, knitted from 100 per cent merino wool. Sizes S to XXL.',
      fi: 'Makian suoralinjainen neule 100 % merinovillasta. Koot S-XXL.',
    },
    priceFrom: 129,
    currency: 'EUR',
    priceCheckedAt: '2026-11-07',
    image: 'prod-makia-saarni-knit',
    imageIsPartner: true,
    partnerId: 'makia',
    partnerProductUrl: 'https://makia.com/products/saarni-knit',
    details: {
      specs: [
        { key: 'material', value: { en: '100 % merino wool', fi: '100 % merinovillaa' } },
        { key: 'size', value: { en: 'S to XXL', fi: 'S-XXL' } },
      ],
      sourceUrl: 'https://makia.com/products/saarni-knit',
      fetchedAt: '2026-11-07',
    },
  },
  {
    slug: 'makia-siina-knit',
    category: 'clothing',
    brand: 'Makia',
    name: {
      en: 'Makia Siina wool blend jumper',
      fi: 'Makia Siina -villasekoiteneule',
    },
    description: {
      en: 'A wide-sleeved jumper from Makia with a regular fit, knitted from a wool blend. The wool blend gives the knit a thicker feel. Sizes XS to XXL.',
      fi: 'Makian suoralinjainen, leveähihainen neule villasekoitteesta. Villasekoite tekee neuleesta tuntumaltaan paksumman. Koot XS-XXL.',
    },
    priceFrom: 119,
    currency: 'EUR',
    priceCheckedAt: '2026-11-07',
    image: 'prod-makia-siina-knit',
    imageIsPartner: true,
    partnerId: 'makia',
    partnerProductUrl: 'https://makia.com/products/siina-knit',
    details: {
      specs: [
        { key: 'material', value: { en: 'Wool blend', fi: 'Villasekoite' } },
        { key: 'other', label: { en: 'Sleeves', fi: 'Hihat' }, value: { en: 'Wide', fi: 'Leveät' } },
        { key: 'size', value: { en: 'XS to XXL', fi: 'XS-XXL' } },
      ],
      sourceUrl: 'https://makia.com/products/siina-knit',
      fetchedAt: '2026-11-07',
    },
  },
  {
    slug: 'halti-ascloud-ski-jacket-women',
    category: 'clothing',
    brand: 'Halti',
    name: {
      en: 'Halti Ascloud women\'s ski puffer jacket',
      fi: 'Halti Ascloud -naisten laskettelutoppatakki',
    },
    description: {
      en: 'A women\'s ski puffer jacket from Halti with Microtherm® insulation, a fixed snow skirt and a zipped ski pass pocket. The shell fabric is rated 10000 mm waterproof and 10000 g/m²/24 h breathable. The hood and hem adjust, the sleeves have inner Lycra cuffs, and Halti made it for town as well as the slopes.',
      fi: 'Haltin naisten laskettelutoppatakki, jossa on Microtherm®-eristys, kiinteä lumilukko ja vetoketjullinen hissilipputasku. Kuorimateriaalin vedenpitävyys on 10000 mm ja hengittävyys 10000 g/m²/24 h. Huppu ja helma ovat säädettävät, hihoissa on sisäpuoliset lycra-hihansuut, ja takki on tehty sekä rinteeseen että kaupunkiin.',
    },
    priceFrom: 250,
    currency: 'EUR',
    priceCheckedAt: '2026-11-07',
    image: 'prod-halti-ascloud-ski-jacket-women',
    imageIsPartner: true,
    partnerId: 'halti',
    partnerProductUrl: 'https://www.halti.fi/products/ascloud-puffer-laskettelutakki-naisten',
    details: {
      specs: [
        { key: 'material', value: { en: 'Matt Memory, 65 % recycled polyester, 35 % polyester', fi: 'Matt Memory, 65 % kierrätettyä polyesteriä, 35 % polyesteriä' } },
        { key: 'other', label: { en: 'Waterproofness', fi: 'Vedenpitävyys' }, value: { en: '10000 mm', fi: '10000 mm' } },
        { key: 'other', label: { en: 'Breathability', fi: 'Hengittävyys' }, value: { en: '10000 g/m²/24 h', fi: '10000 g/m²/24 h' } },
        { key: 'weight', value: { en: '1.0 kg', fi: '1,0 kg' } },
        { key: 'size', value: { en: '34, 36, 38, 40, 42, 44, 46', fi: '34, 36, 38, 40, 42, 44, 46' } },
        { key: 'color', value: { en: 'Several colours: Crocus Petal, Seedpearl White, Dark Sea Green, Black', fi: 'Useita värejä: Crocus Petal, Seedpearl White, Dark Sea Green, Black' } },
      ],
      sourceUrl: 'https://www.halti.fi/products/ascloud-puffer-laskettelutakki-naisten',
      fetchedAt: '2026-11-07',
    },
  },
  {
    slug: 'halti-ascale-ii-ski-jacket-men',
    category: 'clothing',
    brand: 'Halti',
    name: {
      en: 'Halti Ascale II men\'s ski puffer jacket',
      fi: 'Halti Ascale II -miesten laskettelutoppatakki',
    },
    description: {
      en: 'A men\'s ski puffer jacket from Halti with 160 g Microtherm® Arcty insulation, a fixed snow skirt and a zipped ski pass pocket. The matt shell has a Rudolf BIONIC-FINISH® water-repellent treatment and is rated 10000 mm waterproof and 10000 g/m²/24 h breathable. It has inner Lycra cuffs and a full-length inner storm flap, and Halti made it to wear with ski trousers or jeans.',
      fi: 'Haltin miesten laskettelutoppatakki, jossa on 160 g Microtherm® Arcty -eristys, kiinteä lumilukko ja vetoketjullinen hissilipputasku. Mattapintaisessa kuoressa on vettä hylkivä Rudolf BIONIC-FINISH® -käsittely, ja sen vedenpitävyys on 10000 mm ja hengittävyys 10000 g/m²/24 h. Takissa on sisäpuoliset lycra-hihansuut ja täyspitkä sisälista, ja se sopii yhtä hyvin lasketteluhousujen kuin farkkujen kanssa.',
    },
    priceFrom: 250,
    currency: 'EUR',
    priceCheckedAt: '2026-11-07',
    image: 'prod-halti-ascale-ii-ski-jacket-men',
    imageIsPartner: true,
    partnerId: 'halti',
    partnerProductUrl: 'https://www.halti.fi/products/ascale-ii-puffer-laskettelutakki-miesten',
    details: {
      specs: [
        { key: 'material', value: { en: 'Waterproof Taslan, 50 % recycled polyester, 50 % polyester', fi: 'Waterproof Taslan, 50 % kierrätettyä polyesteriä, 50 % polyesteriä' } },
        { key: 'other', label: { en: 'Waterproofness', fi: 'Vedenpitävyys' }, value: { en: '10000 mm', fi: '10000 mm' } },
        { key: 'other', label: { en: 'Breathability', fi: 'Hengittävyys' }, value: { en: '10000 g/m²/24 h', fi: '10000 g/m²/24 h' } },
        { key: 'weight', value: { en: '1.0 kg', fi: '1,0 kg' } },
        { key: 'size', value: { en: 'S, M, L, XL, XXL, XXXL', fi: 'S, M, L, XL, XXL, XXXL' } },
        { key: 'color', value: { en: 'Dark Sea Green, Black', fi: 'Dark Sea Green, Black' } },
      ],
      sourceUrl: 'https://www.halti.fi/products/ascale-ii-puffer-laskettelutakki-miesten',
      fetchedAt: '2026-11-07',
    },
  },
  {
    slug: 'halti-carvey-ii-ski-pants-women',
    category: 'clothing',
    brand: 'Halti',
    name: {
      en: 'Halti Carvey II DX women\'s ski trousers',
      fi: 'Halti Carvey II DX -naisten lasketteluhousut',
    },
    description: {
      en: 'Waterproof women\'s ski trousers from Halti in DrymaxX® 4-way stretch fabric, with all seams taped and detachable braces. The DrymaxX® fabric is rated 15000 mm waterproof and 15000 g/m²/24 h breathable, and the straight cut sits between fitted and relaxed. The waist adjusts, the hems are reinforced, and there are snow gaiters, zipped hand pockets and a thigh pocket with a water-repellent zip.',
      fi: 'Haltin vedenpitävät naisten lasketteluhousut, joissa on 4-suuntaan joustava DrymaxX®-materiaali, teipatut saumat ja irrotettavat olkaimet. DrymaxX®-materiaalin vedenpitävyys on 15000 mm ja hengittävyys 15000 g/m²/24 h, ja suora leikkaus asettuu istuvan ja rennon väliin. Vyötärö on säädettävä ja lahkeensuut vahvistetut, ja housuissa on lumilukot, vetoketjulliset käsitaskut ja reisitasku, jonka vetoketju hylkii vettä.',
    },
    priceFrom: 230,
    currency: 'EUR',
    priceCheckedAt: '2026-11-07',
    image: 'prod-halti-carvey-ii-ski-pants-women',
    imageIsPartner: true,
    partnerId: 'halti',
    partnerProductUrl: 'https://www.halti.fi/products/carvey-ii-dx-lasketteluhousut-naisten',
    details: {
      specs: [
        { key: 'material', value: { en: 'DrymaxX® NN 4-way stretch, 50 % recycled polyester, 50 % polyester. Stretch Cordura, 96 % polyester, 4 % elastane. No separate lining', fi: 'DrymaxX® NN, 4-suuntaan joustava, 50 % kierrätettyä polyesteriä, 50 % polyesteriä. Stretch Cordura, 96 % polyesteriä, 4 % elastaania. Ei erillistä vuoria' } },
        { key: 'other', label: { en: 'Waterproofness', fi: 'Vedenpitävyys' }, value: { en: '15000 mm', fi: '15000 mm' } },
        { key: 'other', label: { en: 'Breathability', fi: 'Hengittävyys' }, value: { en: '15000 g/m²/24 h', fi: '15000 g/m²/24 h' } },
        { key: 'weight', value: { en: '0.8 kg', fi: '0,8 kg' } },
        { key: 'size', value: { en: '34, 36, 38, 40, 42, 44, 46, 48', fi: '34, 36, 38, 40, 42, 44, 46, 48' } },
        { key: 'color', value: { en: 'Several colours: Dark Sea Green, Black, Seedpearl White, Vivid Purple, Lemon Pepper Beige', fi: 'Useita värejä: Dark Sea Green, Black, Seedpearl White, Vivid Purple, Lemon Pepper Beige' } },
      ],
      sourceUrl: 'https://www.halti.fi/products/carvey-ii-dx-lasketteluhousut-naisten',
      fetchedAt: '2026-11-07',
    },
  },
  {
    slug: 'halti-carvey-ii-ski-pants-men',
    category: 'clothing',
    brand: 'Halti',
    name: {
      en: 'Halti Carvey II DX men\'s ski trousers',
      fi: 'Halti Carvey II DX -miesten lasketteluhousut',
    },
    description: {
      en: 'Waterproof men\'s ski trousers from Halti in DrymaxX® 4-way stretch fabric, with all seams taped and detachable braces. They have a DWR water-repellent finish, and the DrymaxX® fabric is rated 15000 mm waterproof and 15000 g/m²/24 h breathable. The ski fit has a straight cut between fitted and relaxed, with an adjustable waist, reinforced hems, snow gaiters, zipped hand pockets and a thigh pocket with a water-repellent zip.',
      fi: 'Haltin vedenpitävät miesten lasketteluhousut, joissa on 4-suuntaan joustava DrymaxX®-materiaali, teipatut saumat ja irrotettavat olkaimet. Housuissa on vettä hylkivä DWR-käsittely, ja DrymaxX®-materiaalin vedenpitävyys on 15000 mm ja hengittävyys 15000 g/m²/24 h. Laskettelumitoituksen suora leikkaus asettuu istuvan ja rennon väliin, ja housuissa on säädettävä vyötärö, vahvistetut lahkeensuut, lumilukot, vetoketjulliset käsitaskut ja reisitasku, jonka vetoketju hylkii vettä.',
    },
    priceFrom: 230,
    currency: 'EUR',
    priceCheckedAt: '2026-11-07',
    image: 'prod-halti-carvey-ii-ski-pants-men',
    imageIsPartner: true,
    partnerId: 'halti',
    partnerProductUrl: 'https://www.halti.fi/products/carvey-ii-dx-lasketteluhousut-miesten',
    details: {
      specs: [
        { key: 'material', value: { en: 'DrymaxX® NN 4-way stretch, 50 % recycled polyester, 50 % polyester. Stretch Cordura, 96 % polyester, 4 % elastane', fi: 'DrymaxX® NN, 4-suuntaan joustava, 50 % kierrätettyä polyesteriä, 50 % polyesteriä. Stretch Cordura, 96 % polyesteriä, 4 % elastaania' } },
        { key: 'other', label: { en: 'Waterproofness', fi: 'Vedenpitävyys' }, value: { en: '15000 mm', fi: '15000 mm' } },
        { key: 'other', label: { en: 'Breathability', fi: 'Hengittävyys' }, value: { en: '15000 g/m²/24 h', fi: '15000 g/m²/24 h' } },
        { key: 'weight', value: { en: '0.9 kg', fi: '0,9 kg' } },
        { key: 'size', value: { en: 'XS, S, M, L, XL, XXL, XXXL, 4XL', fi: 'XS, S, M, L, XL, XXL, XXXL, 4XL' } },
        { key: 'color', value: { en: 'Several colours: Dress Blues, Black, Dark Sea Green, Tea Green, Halti Red, Electric Blue Lemonade', fi: 'Useita värejä: Dress Blues, Black, Dark Sea Green, Tea Green, Halti Red, Electric Blue Lemonade' } },
      ],
      sourceUrl: 'https://www.halti.fi/products/carvey-ii-dx-lasketteluhousut-miesten',
      fetchedAt: '2026-11-07',
    },
  },
  {
    slug: 'halti-kevo-2-winter-boots-men',
    category: 'clothing',
    brand: 'Halti',
    name: {
      en: 'Halti Kevo 2 DX men\'s winter boots',
      fi: 'Halti Kevo 2 DX -miesten talvikenkä',
    },
    description: {
      en: 'Laced men\'s winter boots from Halti with a waterproof, breathable DrymaxX® membrane sock and a warm textile lining. The upper is easy-to-clean synthetic leather made with water-based PU, on a light, cushioning Phylon midsole and a grippy rubber outsole. Halti made them for long winter outings, and the anatomically shaped insole is removable.',
      fi: 'Haltin nauhalliset miesten talvikengät, joissa on vedenpitävä ja hengittävä DrymaxX®-kalvo sukkarakenteena sekä lämmin tekstiilivuori. Päällinen on helposti puhdistuvaa synteettistä nahkaa (vesipohjainen PU), välipohja kevyttä ja iskua vaimentavaa Phylonia ja ulkopohja hyvin pitävää kumia. Kengät sopivat pitkään ulkoiluun talvella, ja anatomisesti muotoiltu pohjallinen on irrotettava.',
    },
    priceFrom: 110,
    currency: 'EUR',
    priceCheckedAt: '2026-11-07',
    image: 'prod-halti-kevo-2-winter-boots-men',
    imageIsPartner: true,
    partnerId: 'halti',
    partnerProductUrl: 'https://www.halti.fi/products/kevo-2-dx-talvikenka-miesten',
    details: {
      specs: [
        { key: 'material', value: { en: 'Synthetic leather, 80 % polyurethane, 20 % recycled polyester. Dense mesh textile, 100 % recycled polyester. DrymaxX® membrane', fi: 'Synteettinen nahka, 80 % polyuretaania, 20 % kierrätettyä polyesteriä. Tiivis verkkotekstiili, 100 % kierrätettyä polyesteriä. DrymaxX®-kalvo' } },
        { key: 'other', label: { en: 'Sole', fi: 'Pohja' }, value: { en: 'Phylon midsole, rubber outsole, removable anatomical EVA insole', fi: 'Phylon-välipohja, kumipohja, irrotettava anatominen EVA-pohjallinen' } },
        { key: 'weight', value: { en: '1.1 kg', fi: '1,1 kg' } },
        { key: 'size', value: { en: '38, 39, 40, 41, 42, 43, 44, 45, 46', fi: '38, 39, 40, 41, 42, 43, 44, 45, 46' } },
        { key: 'color', value: { en: 'Otter Brown', fi: 'Otter Brown' } },
        { key: 'care', value: { en: 'Clean with a damp sponge and mild soap. Dry at room temperature or at max 40 °C, never on a radiator or in a hot sauna', fi: 'Puhdista kostealla sienellä ja miedolla saippualla. Kuivaa huoneenlämmössä tai enintään 40 °C:ssa, ei koskaan patterin päällä eikä kuumassa saunassa' } },
      ],
      sourceUrl: 'https://www.halti.fi/products/kevo-2-dx-talvikenka-miesten',
      fetchedAt: '2026-11-07',
    },
  },
  {
    slug: 'halti-metso-mid-winter-boots-men',
    category: 'clothing',
    brand: 'Halti',
    name: {
      en: 'Halti Metso Mid DX men\'s winter boots',
      fi: 'Halti Metso Mid DX -miesten talvikenkä',
    },
    description: {
      en: 'Laced men\'s winter boots from Halti with Thinsulate™ insulation, a warm textile pile lining and a waterproof DrymaxX® membrane sock. The upper combines suede, PU leather and soft textile, and the removable, shock-absorbing Comfort+ insole is anatomically shaped. Halti lists leisure as the main use, and the TPR rubber outsole grips on different surfaces.',
      fi: 'Haltin nauhalliset miesten talvikengät, joissa on Thinsulate™-eristys, lämmin tekstiiliturkisvuori ja vedenpitävä DrymaxX®-kalvo sukkarakenteena. Päällinen yhdistää mokkanahkaa, PU-nahkaa ja pehmeää tekstiiliä, ja irrotettava, iskua vaimentava Comfort+-pohjallinen on anatomisesti muotoiltu. Halti on tarkoittanut kengät ensisijaisesti vapaa-aikaan, ja TPR-kumipohja pitää eri alustoilla.',
    },
    priceFrom: 110,
    currency: 'EUR',
    priceCheckedAt: '2026-11-07',
    image: 'prod-halti-metso-mid-winter-boots-men',
    imageIsPartner: true,
    partnerId: 'halti',
    partnerProductUrl: 'https://www.halti.fi/products/metso-mid-dx-talvikenka-miesten',
    details: {
      specs: [
        { key: 'material', value: { en: 'Suede, 100 % leather. PU leather, 50 % polyester, 50 % polyurethane. Soft textile, 100 % polyester', fi: 'Mokkanahka, 100 % nahkaa. PU-nahka, 50 % polyesteriä, 50 % polyuretaania. Pehmeä tekstiili, 100 % polyesteriä' } },
        { key: 'other', label: { en: 'Sole', fi: 'Pohja' }, value: { en: 'TPR outsole, removable anatomical Comfort+ insole', fi: 'TPR-ulkopohja, irrotettava anatominen Comfort+-pohjallinen' } },
        { key: 'weight', value: { en: '1.1 kg', fi: '1,1 kg' } },
        { key: 'size', value: { en: '40, 41, 42, 43, 44, 45, 46, 47', fi: '40, 41, 42, 43, 44, 45, 46, 47' } },
        { key: 'color', value: { en: 'Apple Cinnamon Brown', fi: 'Apple Cinnamon Brown' } },
        { key: 'care', value: { en: 'Clean with a damp sponge and mild soap. Dry at room temperature or at max 40 °C, never on a radiator or in a hot sauna. Store dry and ventilated', fi: 'Puhdista kostealla sienellä ja miedolla saippualla. Kuivaa huoneenlämmössä tai enintään 40 °C:ssa, ei koskaan patterin päällä eikä kuumassa saunassa. Säilytä kuivassa ja ilmastoidussa tilassa' } },
      ],
      sourceUrl: 'https://www.halti.fi/products/metso-mid-dx-talvikenka-miesten',
      fetchedAt: '2026-11-07',
    },
  },
  {
    slug: 'halti-skene-winter-boots-women',
    category: 'clothing',
    brand: 'Halti',
    name: {
      en: 'Halti Skene DX women\'s winter boots',
      fi: 'Halti Skene DX -naisten talvikenkä',
    },
    description: {
      en: 'Women\'s winter boots from Halti with a zip on the inner side for easy dressing and laces that adjust the fit. A DrymaxX® membrane sock and a warm textile pile lining keep feet dry and warm in changing weather, and the thermal insole blocks the cold from below. The light Phylon midsole adds comfort and the rubber outsole grips on wintry surfaces.',
      fi: 'Haltin naisten talvikengät, joissa sisäsivun vetoketju helpottaa pukemista ja nauhoituksella säädetään istuvuutta. DrymaxX®-kalvollinen sukkarakenne ja lämmin tekstiilikarvavuori pitävät jalat kuivina ja lämpiminä vaihtelevassa säässä, ja lämpöpohjallinen estää kylmää nousemasta alhaalta. Kevyt Phylon-välipohja lisää käyttömukavuutta ja kumipohja pitää talvisilla pinnoilla.',
    },
    priceFrom: 100,
    currency: 'EUR',
    priceCheckedAt: '2026-11-07',
    image: 'prod-halti-skene-winter-boots-women',
    imageIsPartner: true,
    partnerId: 'halti',
    partnerProductUrl: 'https://www.halti.fi/products/skene-dx-talvikenka-naisten',
    details: {
      specs: [
        { key: 'material', value: { en: 'Poly pongee, 100 % polyester. Suede, 100 % leather. DrymaxX® membrane', fi: 'Poly pongee, 100 % polyesteriä. Mokkanahka, 100 % nahkaa. DrymaxX®-kalvo' } },
        { key: 'other', label: { en: 'Sole', fi: 'Pohja' }, value: { en: 'Phylon midsole, rubber outsole, thermal EVA insole', fi: 'Phylon-välipohja, kumipohja, lämpöeristävä EVA-pohjallinen' } },
        { key: 'weight', value: { en: '0.8 kg', fi: '0,8 kg' } },
        { key: 'size', value: { en: '36, 37, 38, 39, 40, 41, 42', fi: '36, 37, 38, 39, 40, 41, 42' } },
        { key: 'color', value: { en: 'Fog Beige, Glacier Grey', fi: 'Fog Beige, Glacier Grey' } },
        { key: 'care', value: { en: 'Clean with a damp sponge and mild soap. Dry at room temperature or at max 40 °C, never on a radiator or in a hot sauna', fi: 'Puhdista kostealla sienellä ja miedolla saippualla. Kuivaa huoneenlämmössä tai enintään 40 °C:ssa, ei koskaan patterin päällä eikä kuumassa saunassa' } },
      ],
      sourceUrl: 'https://www.halti.fi/products/skene-dx-talvikenka-naisten',
      fetchedAt: '2026-11-07',
    },
  },
  {
    slug: 'halti-sletta-zip-winter-boots-women',
    category: 'clothing',
    brand: 'Halti',
    name: {
      en: 'Halti Sletta Zip DX women\'s winter boots',
      fi: 'Halti Sletta Zip DX -naisten talvikenkä',
    },
    description: {
      en: 'Soft, mid-height women\'s winter boots from Halti with a zip, a fleece lining, Thinsulate™ wadding and a waterproof DrymaxX® membrane. The rubber Halti GripmaxX Arctic outsole is designed for snow and slush and sits on a light, shock-absorbing Phylon midsole. The sock-like construction helps the fit, and the Thermo insole is removable.',
      fi: 'Haltin pehmeät, keskikorkeat naisten talvisaappaat, joissa on vetoketju, fleecevuori, Thinsulate™-vanu ja vedenpitävä DrymaxX®-kalvo. Kuminen Halti GripmaxX Arctic -ulkopohja on suunniteltu lumelle ja sohjolle, ja sen päällä on kevyt, iskua vaimentava Phylon-välipohja. Sukkamainen rakenne parantaa istuvuutta, ja Thermo-pohjallinen on irrotettava.',
    },
    priceFrom: 120,
    currency: 'EUR',
    priceCheckedAt: '2026-11-07',
    image: 'prod-halti-sletta-zip-winter-boots-women',
    imageIsPartner: true,
    partnerId: 'halti',
    partnerProductUrl: 'https://www.halti.fi/products/sletta-zip-dx-talvikenka-naisten',
    details: {
      specs: [
        { key: 'material', value: { en: 'Smooth taffeta-type textile with a soft quilted upper and suede reinforcements, 100 % polyester. Suede, 100 % leather', fi: 'Sileä taftityyppinen tekstiili, pehmeä tikattu varsi ja mokkanahkavahvikkeet, 100 % polyesteriä. Mokkanahka, 100 % nahkaa' } },
        { key: 'other', label: { en: 'Sole', fi: 'Pohja' }, value: { en: 'Halti GripmaxX Arctic rubber outsole, Phylon midsole, removable Thermo insole', fi: 'Halti GripmaxX Arctic -kumipohja, Phylon-välipohja, irrotettava Thermo-pohjallinen' } },
        { key: 'weight', value: { en: '0.7 kg', fi: '0,7 kg' } },
        { key: 'size', value: { en: '36, 37, 38, 39, 40, 41, 42', fi: '36, 37, 38, 39, 40, 41, 42' } },
        { key: 'color', value: { en: 'Apple Cinnamon Brown, Black/White', fi: 'Apple Cinnamon Brown, Black/White' } },
        { key: 'care', value: { en: 'Clean with a damp sponge and mild soap. Dry at room temperature or at max 40 °C, never on a radiator or in a hot sauna', fi: 'Puhdista kostealla sienellä ja miedolla saippualla. Kuivaa huoneenlämmössä tai enintään 40 °C:ssa, ei koskaan patterin päällä eikä kuumassa saunassa' } },
      ],
      sourceUrl: 'https://www.halti.fi/products/sletta-zip-dx-talvikenka-naisten',
      fetchedAt: '2026-11-07',
    },
  },
  {
    slug: 'sk-suomi-foam-finger',
    category: 'clothing',
    brand: 'Happy Orange',
    name: {
      en: 'Suomi supporter foam finger 23 x 45 cm',
      fi: 'Suomi-kannatussormikäsine 23 x 45 cm',
    },
    description: {
      en: 'A 23 x 45 cm supporter foam finger from Happy Orange\'s Suomi range. It is made for games, events and other occasions where you want to stand out in the crowd. The blue hand carries the word FINLAND and the Finnish flag.',
      fi: 'Happy Orangen Suomi-kannatussarjan sormikäsine, koko 23 x 45 cm. Sillä erotut joukosta peleissä, tapahtumissa ja muissa tilaisuuksissa. Sinisessä kädessä on teksti FINLAND ja Suomen lippu.',
    },
    priceFrom: 10.03,
    currency: 'EUR',
    priceCheckedAt: '2026-11-07',
    image: 'prod-sk-suomi-foam-finger',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/suomi-kannatus-sormikasine',
    details: {
      specs: [
        { key: 'size', value: { en: '23 x 45 cm', fi: '23 x 45 cm' } },
        { key: 'other', label: { en: 'Design', fi: 'Kuvio' }, value: { en: 'FINLAND and the Finnish flag on blue', fi: 'FINLAND ja Suomen lippu sinisellä pohjalla' } },
        { key: 'other', label: { en: 'EAN', fi: 'EAN' }, value: { en: '6430080071500', fi: '6430080071500' } },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/suomi-kannatus-sormikasine',
      fetchedAt: '2026-11-07',
    },
  },
  {
    slug: 'sk-suomi-drawstring-bag',
    category: 'clothing',
    brand: 'Tammer',
    name: {
      en: 'Suomi drawstring bag, Finnish flag',
      fi: 'Suomi-narureppu, Suomen lippu',
    },
    description: {
      en: 'A drawstring bag from Tammer featuring the Finnish flag. It suits trips to games and supporter groups, and works as a souvenir, keepsake or gift too.',
      fi: 'Tammerin narureppu, jossa on Suomen lippu. Reppu sopii esimerkiksi pelireissuille ja kannustusjoukoille sekä tuliaiseksi, muistoksi tai lahjaksi.',
    },
    priceFrom: 12.42,
    currency: 'EUR',
    priceCheckedAt: '2026-11-07',
    image: 'prod-sk-suomi-drawstring-bag',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/suomi-narureppu-1',
    details: {
      specs: [
        { key: 'other', label: { en: 'Design', fi: 'Kuvio' }, value: { en: 'Finnish flag', fi: 'Suomen lippu' } },
        { key: 'other', label: { en: 'EAN', fi: 'EAN' }, value: { en: '6410413343443', fi: '6410413343443' } },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/suomi-narureppu-1',
      fetchedAt: '2026-11-07',
    },
  },
  {
    slug: 'sk-suomi-braces',
    category: 'clothing',
    brand: 'Olkain',
    name: {
      en: 'Suomi braces, blue',
      fi: 'Suomi-henkselit, sininen',
    },
    description: {
      en: 'Blue H-back braces, 3.5 cm wide, with SUOMI, FINLAND and the Finnish flag along the strap. At the back they fasten with two all-metal clips that hold firmly. Suomikauppa.fi designed them and Helsingin Olkain made them, and they carry the Avainlippu (Key Flag) mark.',
      fi: 'Siniset H-mallin henkselit, leveys 3,5 cm, nauhassa tekstit SUOMI ja FINLAND sekä Suomen lippu. Takana henkselit kiinnittyvät kahdella kokonaan metallisella lukolla, jotka pysyvät hyvin kiinni. Henkselit on suunnitellut Suomikauppa.fi ja valmistanut Helsingin Olkain, ja niissä on Avainlippu-merkki.',
    },
    priceFrom: 14.93,
    currency: 'EUR',
    priceCheckedAt: '2026-11-07',
    image: 'prod-sk-suomi-braces',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/henkseli-suomi-sininen',
    details: {
      specs: [
        { key: 'size', value: { en: '3.5 cm wide', fi: 'Leveys 3,5 cm' } },
        { key: 'color', value: { en: 'Blue with SUOMI, FINLAND and the Finnish flag', fi: 'Sininen, tekstit SUOMI ja FINLAND sekä Suomen lippu' } },
        { key: 'other', label: { en: 'Fastening', fi: 'Kiinnitys' }, value: { en: 'H-back, two all-metal clips at the back', fi: 'H-malli, takana kaksi kokometallista lukkoa' } },
        { key: 'other', label: { en: 'Design and manufacture', fi: 'Suunnittelu ja valmistus' }, value: { en: 'Designed by Suomikauppa.fi, made by Helsingin Olkain', fi: 'Suunnittelu Suomikauppa.fi, valmistus Helsingin Olkain' } },
        { key: 'other', label: { en: 'Marking', fi: 'Merkki' }, value: { en: 'Avainlippu (Key Flag)', fi: 'Avainlippu' } },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/henkseli-suomi-sininen',
      fetchedAt: '2026-11-07',
    },
  },
  {
    slug: 'sk-suomi-spiky-wig',
    category: 'clothing',
    brand: 'Happy Orange',
    name: {
      en: 'Suomi supporter spiky wig',
      fi: 'Suomi-kannatuspystyperuukki',
    },
    description: {
      en: 'A spiky supporter wig from Happy Orange\'s Suomi range, made for games, events and other occasions where you want to stand out. Blue and white spikes rise from a blue headband with the Finnish flag.',
      fi: 'Pystytukkainen kannatusperuukki Happy Orangen Suomi-kannatussarjasta peleihin, tapahtumiin ja muihin tilaisuuksiin, joissa haluat erottua joukosta. Sinivalkoiset piikit nousevat siniseltä otsanauhalta, jossa on Suomen lippu.',
    },
    priceFrom: 11.17,
    currency: 'EUR',
    priceCheckedAt: '2026-11-07',
    image: 'prod-sk-suomi-spiky-wig',
    imageIsPartner: true,
    partnerId: 'suomikauppa',
    partnerProductUrl: 'https://suomikauppa.fi/products/suomi-kannatus-pystyperuukki',
    details: {
      specs: [
        { key: 'color', value: { en: 'Blue and white', fi: 'Sinivalkoinen' } },
        { key: 'other', label: { en: 'Design', fi: 'Kuvio' }, value: { en: 'Finnish flag on the headband', fi: 'Suomen lippu otsanauhassa' } },
        { key: 'other', label: { en: 'EAN', fi: 'EAN' }, value: { en: '6430080071456', fi: '6430080071456' } },
      ],
      sourceUrl: 'https://suomikauppa.fi/products/suomi-kannatus-pystyperuukki',
      fetchedAt: '2026-11-07',
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
