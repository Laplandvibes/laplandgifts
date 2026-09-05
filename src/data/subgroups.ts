import type { CategoryId } from './types'
import type { Lang } from '../i18n/useLang'
import { PRODUCTS } from './products'
import type { Product } from './types'

/**
 * Kategorian sisäinen ryhmittely.
 *
 * 🔴 Miksi (Vesa 2.8.2026: "edelleen kaikkia tuotteita on liian vähän ja ilman
 * kategorisointia"): kategoriasivu oli yksi pitkä ruudukko. Kahdellakymmenellä
 * herkulla se on luettelo, jossa salmiakki, suklaa, tee ja kuivaliha ovat
 * sekaisin. Ryhmitelty sivu kertoo yhdellä silmäyksellä mitä valikoimassa on —
 * sama muutos kuin elämyssivulla, jossa se toimi.
 *
 * 🔴 Miksi OMASSA tiedostossaan eikä `Product`-kenttänä: ryhmittely on
 * esitystapa, ei tuotteen ominaisuus, ja `products.ts` on jo 3 300 riviä.
 * Kartta slugista ryhmään pysyy yhdessä paikassa, jolloin uuden ryhmän
 * lisääminen tai järjestyksen muuttaminen ei kosketa yhtään tuoteriviä.
 *
 * Tuote joka puuttuu kartasta päätyy ryhmään `other`, joka renderöityy
 * viimeisenä ilman otsikkoa. Puuttuva rivi ei siis piilota tuotetta —
 * `subgroups.test.ts` kuitenkin vaatii, että jokainen tuote on kartassa,
 * jottei uusi tuote jää hiljaa loppuun.
 */
export type SubgroupId = string

/** Ryhmien järjestys kategoriaa kohden. Määrää myös renderöintijärjestyksen. */
export const SUBGROUP_ORDER: Record<CategoryId, SubgroupId[]> = {
  design: ['tableware', 'textiles', 'candles', 'objects'],
  // 🔴 Vaatteet ryhmitellään BRÄNDIN mukaan (Vesa 6.8.: "eihän täällä ole
  // kategorisoitu brändin mukaan ollenkaan, ja en löydä enempää niitä makia
  // tuotteita"). Vaatetuskategoriassa brändi on se, millä ostaja navigoi:
  // Makian etsijä haluaa Makia-osion, ei arvailua vaatetyypeistä. Muissa
  // kategorioissa tyyppiryhmittely säilyy, koska niissä brändejä on monta
  // pientä eikä kukaan etsi "Emendoa".
  clothing: ['brandhalti', 'brandnorthoutdoor', 'brandmakia', 'brandnordicbuddies', 'finlandtheme'],
  handicrafts: ['sauna', 'knives', 'wood', 'textiles', 'ceramics'],
  // Herkut: erikoisuudet ensin (se mitä ei saa muualta), sitten klassikot,
  // uutuudet (Suomikaupan created_at 2026-08) ja loput (Vesa 5.9.: 'missä
  // analyysi uutuustuotteista', 'erikoisuuksia, jotain mitä ihan suomalaisetkin
  // haluaa maistaa').
  treats: ['specialties', 'salmiakki', 'chocolate', 'novelties', 'savoury', 'drinks'],
  // `drinks` on mukana myös täällä: Kainon kuusenkerkkäjuoma on superfoodi
  // mutta muodoltaan juoma, ei jauhe eikä öljy. Sama ryhmätunnus voi esiintyä
  // useassa kategoriassa — nimi tulee samasta taulukosta, joten se lukee
  // molemmissa samalla tavalla.
  superfoods: ['berry', 'herbal', 'oils', 'drinks'],
  merch: [],
  // Kategoriasivu renderöi lahjakortit omana osionaan ennen GYG-ryhmiä, joten
  // yhden ryhmän otsikkoa ei koskaan näytetä; rivi on olemassa jotta
  // subgroups.test.ts:n kartta- ja nimivahdit kattavat myös nämä tuotteet.
  experiences: ['vouchers'],
}

/** Ryhmien nimet. Kääntämättömät kielet putoavat englantiin, kuten muuallakin. */
const LABELS: Partial<Record<Lang, Record<SubgroupId, string>>> = {
  en: {
    tableware: 'Tableware and glass',
    textiles: 'Textiles',
    candles: 'Candleholders',
    objects: 'Small objects',
    sauna: 'Sauna',
    brandhalti: 'Halti',
    brandnorthoutdoor: 'North Outdoor',
    brandmakia: 'Makia',
    brandnordicbuddies: 'Nordicbuddies',
    finlandtheme: 'Finland supporter wear',
    baselayer: 'Base layers',
    midlayer: 'Mid layers and knitwear',
    outerwear: 'Shells and outerwear',
    accessories: 'Hats, gloves and socks',
    knives: 'Puukko knives',
    wood: 'Wood and camp tableware',
    ceramics: 'Ceramics',
    specialties: 'Finnish specialities',
    novelties: 'New this season',
    salmiakki: 'Salmiakki and liquorice',
    chocolate: 'Chocolate and biscuits',
    savoury: 'Dried meat and preserves',
    drinks: 'Tea, coffee and drinks',
    berry: 'Berry powders',
    herbal: 'Herbs and mushrooms',
    oils: 'Oils and elixirs',
    vouchers: 'Experience gift cards',
  },
  fi: {
    tableware: 'Astiat ja lasi',
    textiles: 'Tekstiilit',
    candles: 'Kynttilänjalat',
    objects: 'Pienesineet',
    sauna: 'Sauna',
    brandhalti: 'Halti',
    brandnorthoutdoor: 'North Outdoor',
    brandmakia: 'Makia',
    brandnordicbuddies: 'Nordicbuddies',
    finlandtheme: 'Suomi-fanituotteet',
    baselayer: 'Aluskerrastot',
    midlayer: 'Välikerrokset ja neuleet',
    outerwear: 'Kuoritakit ja ulkovaatteet',
    accessories: 'Päähineet, käsineet ja sukat',
    knives: 'Puukot',
    wood: 'Puu ja retkiastiat',
    ceramics: 'Keramiikka',
    specialties: 'Erikoisuudet',
    novelties: 'Uutuudet',
    salmiakki: 'Salmiakki ja lakritsi',
    chocolate: 'Suklaa ja keksit',
    savoury: 'Kuivaliha ja säilykkeet',
    drinks: 'Teet, kahvit ja juomat',
    berry: 'Marjajauheet',
    herbal: 'Yrtit ja sienet',
    oils: 'Öljyt ja eliksiirit',
    vouchers: 'Elämyslahjakortit',
  },
}

/** Tuotteen slug → ryhmä. */
const MAP: Record<string, SubgroupId> = {
  // design
  'iittala-aalto-vase-160': 'tableware',
  'marimekko-unikko-mug': 'tableware',
  'iittala-kivi-candleholder': 'candles',
  'arabia-moomin-mug-snufkin': 'tableware',
  'arabia-moomin-mug-friendship': 'tableware',
  'arabia-moomin-figurine-moomintroll': 'objects',
  'fiskars-moominpappa-scissors': 'objects',
  'nb-little-my-poster': 'objects',
  'nb-moomin-novels-poster': 'objects',

  // clothing
  'halti-hossa-baselayer-men': 'brandhalti',
  'halti-hossa-baselayer-women': 'brandhalti',
  'north-outdoor-arctic-260-zip-neck': 'brandnorthoutdoor',
  'north-outdoor-honka-jumper': 'brandnorthoutdoor',
  'north-outdoor-sointu-cardigan': 'brandnorthoutdoor',
  'halti-heatgrid-midlayer': 'brandhalti',
  'makia-aurora-hoodie': 'brandmakia',
  'halti-tokoi-dx-jacket': 'brandhalti',
  'halti-taival-dx-jacket': 'brandhalti',
  'makia-merino-beanie': 'brandmakia',
  // Nordicbuddies (Daisycon) — lisensoidut Muumi-, Peppi- ja Kunnas-vaatteet.
  'nb-little-my-beanie': 'brandnordicbuddies',
  'nb-moomintroll-mittens': 'brandnordicbuddies',
  'nb-moomintroll-love-socks': 'brandnordicbuddies',
  'nb-moomin-classics-tee': 'brandnordicbuddies',
  'nb-pippi-tee': 'brandnordicbuddies',
  'nb-moomintroll-hoodie': 'brandnordicbuddies',
  'nb-kunnas-kalevala-tote': 'brandnordicbuddies',
  'nb-kunnas-kalevala-beanie': 'brandnordicbuddies',
  'nb-little-my-mittens': 'brandnordicbuddies',
  'sk-finland-beanie': 'finlandtheme',
  'sk-finland-tube-scarf': 'finlandtheme',
  'sk-suomi-hockey-jersey': 'finlandtheme',
  'sk-marimekko-unikko-crossbody': 'textiles',
  'sk-moomin-duvet-set': 'textiles',
  'sk-novita-wonder-wool': 'textiles',
  'sk-aromageddon-sauna-scent': 'sauna',
  'sk-muurla-moomin-bottle': 'tableware',
  'nb-kunnas-santa-mug': 'tableware',
  'nb-little-my-thermal-bottle': 'tableware',
  'north-outdoor-huuru-beanie': 'brandnorthoutdoor',
  'north-outdoor-pyry-scarf': 'brandnorthoutdoor',
  'north-outdoor-arctic-250-balaclava': 'brandnorthoutdoor',
  'north-outdoor-kevo-gloves': 'brandnorthoutdoor',
  'north-outdoor-heavyweight-gaiter': 'brandnorthoutdoor',
  'halti-kroka-mitten': 'brandhalti',
  'halti-sykli-ski-gloves': 'brandhalti',
  'halti-tunturit-ski-socks': 'brandhalti',
  'halti-merino-socks-2pack': 'brandhalti',

  // handicrafts
  'marttiini-lapinleuku-255': 'knives',
  'marttiini-napapiirin-puukko': 'knives',
  'marttiini-ilves-131': 'knives',
  'kupilka-classic-cup-21': 'wood',
  'kupilka-bowl-55': 'wood',
  'kupilka-cutlery-set': 'wood',
  'aurora-mini-kuksa': 'wood',
  'rento-tar-sauna-soap': 'sauna',
  'rento-birch-sauna-honey': 'sauna',
  'rento-blueberry-sauna-honey': 'sauna',
  'rento-sauna-pillow': 'sauna',
  'rento-linen-back-scrubber': 'sauna',
  'rento-linen-wash-mitt': 'sauna',
  'emendo-sauna-scents': 'sauna',
  'sk-little-my-sauna-cushion': 'sauna',
  'sk-rento-sauna-hat': 'sauna',
  'sk-rento-birch-whisk': 'sauna',
  'nb-little-my-neckpillow': 'textiles',
  'nb-moomintroll-love-cushion': 'textiles',
  'sk-marimekko-unikko-bath-towel': 'textiles',
  'sk-marimekko-unikko-hand-towel': 'textiles',
  'fl-taistelevat-metsot': 'textiles',
  'fl-lino-linen-duvet-set': 'textiles',
  'fl-elefantti-duvet-set': 'textiles',
  'fl-reino-bath-towel': 'textiles',
  'pentik-posio-mug': 'ceramics',
  'pentik-tunturiretki-studio-dish': 'ceramics',

  // treats
  'finnish-flavours-palalaku-salmiakki': 'salmiakki',
  'fazer-super-salmiakki': 'salmiakki',
  'fazer-pantteri-salmiakki': 'salmiakki',
  'halva-salmiakkiruutu': 'salmiakki',
  'sisu-xylitol-salmiakki': 'salmiakki',
  'leijona-tar-liquorice': 'salmiakki',
  'fazer-geisha-chocolate-bar': 'chocolate',
  'fazer-hazelnut-chocolate': 'chocolate',
  'fazer-light-milk-chocolate': 'chocolate',
  'fazer-fazerina': 'chocolate',
  'fazer-jaffa-orange': 'chocolate',
  'kuivalihakundi-poro-jerky': 'savoury',
  'kuivalihakundi-poro-jerky-200g': 'savoury',
  'kuivalihakundi-beef-jerky-smoked': 'savoury',
  'meritalo-tyrnihillo': 'savoury',
  'nordqvist-moomin-forest-berry-tea': 'drinks',
  'nordqvist-cranberry-toffee-tea': 'drinks',

  // superfoods
  'arctic-warriors-nettle-powder': 'herbal',
  'arctic-warriors-spruce-sprout-powder': 'herbal',
  'kaapa-mushrooms-pakuri-powder': 'herbal',
  'arctic-warriors-roseroot-elixir': 'oils',
  'omega7-sea-buckthorn-olive-oil': 'oils',
  'kaino-spruce-sprout-sparkling': 'drinks',
  'foodin-six-mushroom-blend': 'herbal',
  'foodin-chaga-tincture': 'oils',
  'kaavi-chaga-chunks': 'herbal',
  'puhdistamo-instant-chaga': 'herbal',
  'puhdistamo-conifer-extract': 'oils',

  // experiences: Elämyslahjat.fi-lahjakortit
  'husky-farm-safari-rovaniemi': 'vouchers',
  'reindeer-safari-rovaniemi': 'vouchers',
  'aurora-tour-kilpisjarvi': 'vouchers',
  'glass-igloo-night-levi': 'vouchers',
  'gold-panning-day-inari': 'vouchers',
  // katalogin täydennys 2026-09-05
  'makia-kontio-hoodie': 'brandmakia',
  'makia-trademark-hoodie': 'brandmakia',
  'makia-moray-zip-knit': 'brandmakia',
  'makia-form-jacket': 'brandmakia',
  'makia-martin-beanie': 'brandmakia',
  'makia-mari-balaclava': 'brandmakia',
  'halti-pehmee-merino-beanie': 'brandhalti',
  'halti-rockmoon-fleece-hoodie': 'brandhalti',
  'halti-viiri-fleece-gloves': 'brandhalti',
  'nb-moomin-classics-beanie': 'brandnordicbuddies',
  'nb-snufkin-mens-socks': 'brandnordicbuddies',
  'nb-hattifatteners-retro-socks': 'brandnordicbuddies',
  'sk-suomi-propeller-cap': 'finlandtheme',
  'sk-muurla-moomin-lantern-tahtihetki': 'candles',
  'sk-hukka-soapstone-candle': 'candles',
  'sk-muurla-moomin-enamel-mug-lumipyry': 'tableware',
  'sk-arabia-moomin-pitcher-moominhouse': 'tableware',
  'sk-moomin-duvet-set-merella': 'textiles',
  'sk-arabia-moomintroll-mini-figurine': 'ceramics',
  'sk-arabia-snorkmaiden-mini-figurine': 'ceramics',
  'sk-lapin-puukko-gift-box': 'knives',
  'sk-loimu-sauna-thermometer': 'sauna',
  'sk-helsingin-villasukkatehdas-wool-socks': 'textiles',
  'sk-halva-salmiakkikalat': 'salmiakki',
  'sk-kouvolan-lakritsi-500g': 'salmiakki',
  'sk-fazer-omar-chocolate-bar': 'chocolate',
  'sk-fazer-salty-suffeli-puffi': 'chocolate',
  'sk-tyrkisk-peber-chewy': 'novelties',
  'sk-tyrkisk-peber-sour-foams': 'novelties',
  'sk-marianne-toffee-rae': 'novelties',
  'sk-fasupala-lakritsi': 'novelties',
  'sk-finnish-flavours-cloudberry-jam': 'specialties',
  'sk-lapin-liha-smoked-reindeer-soup': 'specialties',
  'sk-vaasan-ruispalat-5pack': 'specialties',
  'sk-poikain-parhaat-freeze-dried-blueberry': 'specialties',
  'rj-arctic-warriors-blueberry-powder': 'berry',
  'rj-poikain-parhaat-blueberry-lemonade': 'drinks',
  'rj-nordic-koivu-birch-sap': 'drinks',
  'rj-kaino-spruce-sprout-sparkling-075': 'drinks',
  'rj-yrttipaja-chaga-powder': 'herbal',
  'rj-forestly-mushroom-chips-chili': 'herbal',
  // katalogin täydennys 2026-09-05
  'sk-muurla-moomin-80v-tray': 'tableware',
  'sk-muurla-moomin-glass-box-yhdessa': 'tableware',
  // katalogin täydennys 2026-09-05
  'sk-aurora-borealis-reindeer-tealight': 'candles',
  'sk-muurla-moomin-bottle-05l-marjat': 'tableware',
  'nb-hattifatteners-cushion': 'textiles',
  'sk-emendo-moomin-sauna-seat-cover': 'textiles',
  'sk-rento-pino-sauna-seat-cover': 'textiles',
  'sk-moomin-chocolate-chip-biscuit-tin': 'chocolate',
  'sk-paulig-cafe-new-york-beans': 'drinks',
  // katalogin täydennys 2026-09-05
  'rj-korpihilla-spruce-sprout-sparkling-750': 'drinks',
  // katalogin täydennys 2026-09-05
  'rj-raitaniemi-sea-buckthorn-powder': 'berry',
  'rj-raitaniemi-crowberry-powder': 'berry',
  // katalogin täydennys 2026-09-05
  // katalogin täydennys 2026-09-05
  'sk-poikain-parhaat-puolukka': 'berry',
}

export function subgroupOf(slug: string): SubgroupId {
  return MAP[slug] ?? 'other'
}

export function subgroupLabel(id: SubgroupId, lang: Lang): string {
  return LABELS[lang]?.[id] ?? LABELS.en?.[id] ?? ''
}

/**
 * Jakaa tuotteet ryhmiin `SUBGROUP_ORDER`-järjestyksessä. Tyhjät ryhmät
 * jätetään pois, ja kartasta puuttuvat tuotteet päätyvät nimettömään
 * `other`-ryhmään listan loppuun — ne näkyvät, mutta ilman otsikkoa.
 */
export function groupProducts(
  category: CategoryId,
  products: Product[],
): { id: SubgroupId; label: string; items: Product[] }[] {
  const order = SUBGROUP_ORDER[category] ?? []
  const buckets = new Map<SubgroupId, Product[]>()
  for (const p of products) {
    const g = subgroupOf(p.slug)
    if (!buckets.has(g)) buckets.set(g, [])
    buckets.get(g)!.push(p)
  }
  const out: { id: SubgroupId; label: string; items: Product[] }[] = []
  for (const id of order) {
    const items = buckets.get(id)
    if (items?.length) out.push({ id, label: '', items })
  }
  for (const [id, items] of buckets) {
    if (!order.includes(id) && items.length) out.push({ id, label: '', items })
  }
  return out
}

/**
 * Hyllyn yhden rivin otsake h2:n alle: mikä hylly on ja miksi (Vesa 5.9.2026:
 * "herkut osiohan on aivan poor, ei tule vesi kielelle yhtään, missä analyysi
 * uutuustuotteista"). Vain herkuilla; muilla kategorioilla otsikko riittää.
 * Väitteet ovat tuotedatasta (Suomikaupan created_at, Kuivalihakundin
 * toimitusehto, Nordqvistin Nurmijärvi), ei keksittyjä. Kääntämättömät kielet
 * putoavat englantiin kuten ryhmien nimetkin.
 */
const NOTES: Partial<Record<Lang, Partial<Record<SubgroupId, string>>>> = {
  en: {
    specialties: 'The things you cannot buy outside Finland: cloudberry jam, smoked reindeer soup, real rye bread.',
    salmiakki: 'Salty liquorice from soft to hot. Start with Halva\'s Salmiakkikalat, end with Tyrkisk Peber.',
    chocolate: 'Fazer milk chocolate and the bars built on it, from the classic blue to the anniversary Omar.',
    novelties: 'New at Suomikauppa in August 2026: Fazer\'s latest, taken from the shop\'s own new arrivals list.',
    savoury: 'Reindeer jerky and preserves. Meat cannot be posted outside the EU, so delivery stops at the EU border.',
    drinks: 'Nordqvist teas blended in Nurmijärvi, and Moomin coffee.',
  },
  fi: {
    specialties: 'Se, mitä ei saa Suomen ulkopuolelta: lakkahillo, savuporokeitto, oikea ruisleipä.',
    salmiakki: 'Salmiakkia pehmeästä tuliseen. Aloita Halvan Salmiakkikaloista, päätä Tyrkisk Peberiin.',
    chocolate: 'Fazerin maitosuklaa ja sen päälle rakennetut levyt, klassisesta sinisestä juhlavuoden Omariin.',
    novelties: 'Suomikaupan elokuun 2026 uutuudet: Fazerin tuoreimmat, poimittu kaupan omasta uutuuslistasta.',
    savoury: 'Poron kuivalihaa ja säilykkeitä. Lihaa ei saa postittaa EU:n ulkopuolelle, joten toimitus päättyy EU:n rajalle.',
    drinks: 'Nordqvistin Nurmijärvellä sekoitetut teet ja Muumi-kahvi.',
  },
}

export function subgroupNote(id: SubgroupId, lang: Lang): string | undefined {
  return NOTES[lang]?.[id] ?? NOTES.en?.[id]
}

/** Testien käyttöön: kaikki kartassa olevat slugit. */
export const MAPPED_SLUGS = Object.keys(MAP)
export const ALL_PRODUCT_SLUGS = PRODUCTS.map((p) => p.slug)
