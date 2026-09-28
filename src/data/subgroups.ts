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

/**
 * Ryhmien nimet kaikilla 12 kielellä. 🔴 Taulukossa oli 28.9.2026 asti vain en
 * ja fi, ja puuttuva kieli putosi englantiin, joten kymmenen kieltä näki hyllyt
 * englanniksi (gate:kielipuhtaus-dom: /cn/handicrafts/ "Wood and camp
 * tableware"). Tyyppi on nyt täysi Record: puuttuva kieli kaataa `tsc -b`:n,
 * puuttuva rivi subgroups.test.ts:n. Brändihyllyt pysyvät brändin omassa
 * asussa kaikilla kielillä; termit samat kuin sivun omassa kategoriacopyssa
 * (shopCopy.ts: Campinggeschirr, friluftskärl, 咸甘草糖, プーッコ, 푸코).
 */
const LABELS: Record<Lang, Record<SubgroupId, string>> = {
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
  sv: {
    tableware: 'Porslin och glas',
    textiles: 'Textilier',
    candles: 'Ljushållare',
    objects: 'Småsaker',
    sauna: 'Bastu',
    brandhalti: 'Halti',
    brandnorthoutdoor: 'North Outdoor',
    brandmakia: 'Makia',
    brandnordicbuddies: 'Nordicbuddies',
    finlandtheme: 'Supporterkläder för Finland',
    baselayer: 'Underställ',
    midlayer: 'Mellanlager och stickat',
    outerwear: 'Skaljackor och ytterkläder',
    accessories: 'Mössor, handskar och strumpor',
    knives: 'Puukkoknivar',
    wood: 'Trä och friluftskärl',
    ceramics: 'Keramik',
    specialties: 'Finska specialiteter',
    novelties: 'Nytt för säsongen',
    salmiakki: 'Salmiak och lakrits',
    chocolate: 'Choklad och kex',
    savoury: 'Torkat kött och sylt',
    drinks: 'Te, kaffe och drycker',
    berry: 'Bärpulver',
    herbal: 'Örter och svamp',
    oils: 'Oljor och elixir',
    vouchers: 'Presentkort på upplevelser',
  },
  de: {
    tableware: 'Geschirr und Glas',
    textiles: 'Textilien',
    candles: 'Kerzenhalter',
    objects: 'Kleinigkeiten',
    sauna: 'Sauna',
    brandhalti: 'Halti',
    brandnorthoutdoor: 'North Outdoor',
    brandmakia: 'Makia',
    brandnordicbuddies: 'Nordicbuddies',
    finlandtheme: 'Fanbekleidung für Finnland',
    baselayer: 'Funktionsunterwäsche',
    midlayer: 'Midlayer und Strick',
    outerwear: 'Hardshell- und Winterjacken',
    accessories: 'Mützen, Handschuhe und Socken',
    knives: 'Puukko-Messer',
    wood: 'Holz und Campinggeschirr',
    ceramics: 'Keramik',
    specialties: 'Finnische Spezialitäten',
    novelties: 'Neu in dieser Saison',
    salmiakki: 'Salmiak und Lakritz',
    chocolate: 'Schokolade und Kekse',
    savoury: 'Trockenfleisch und Marmelade',
    drinks: 'Tee, Kaffee und Getränke',
    berry: 'Beerenpulver',
    herbal: 'Kräuter und Pilze',
    oils: 'Öle und Elixiere',
    vouchers: 'Erlebnisgutscheine',
  },
  fr: {
    tableware: 'Vaisselle et verrerie',
    textiles: 'Textiles',
    candles: 'Bougeoirs',
    objects: 'Petits objets',
    sauna: 'Sauna',
    brandhalti: 'Halti',
    brandnorthoutdoor: 'North Outdoor',
    brandmakia: 'Makia',
    brandnordicbuddies: 'Nordicbuddies',
    finlandtheme: 'Tenues de supporter de la Finlande',
    baselayer: 'Sous-vêtements techniques',
    midlayer: 'Deuxième couche et tricots',
    outerwear: 'Vestes coupe-vent et vêtements d’extérieur',
    accessories: 'Bonnets, gants et chaussettes',
    knives: 'Couteaux puukko',
    wood: 'Bois et vaisselle de camp',
    ceramics: 'Céramique',
    specialties: 'Spécialités finlandaises',
    novelties: 'Nouveautés de la saison',
    salmiakki: 'Salmiakki et réglisse',
    chocolate: 'Chocolat et biscuits',
    savoury: 'Viande séchée et confiture',
    drinks: 'Thé, café et boissons',
    berry: 'Poudres de baies',
    herbal: 'Plantes et champignons',
    oils: 'Huiles et élixirs',
    vouchers: 'Cartes cadeaux d’expériences',
  },
  es: {
    tableware: 'Vajilla y cristalería',
    textiles: 'Textiles',
    candles: 'Portavelas',
    objects: 'Objetos pequeños',
    sauna: 'Sauna',
    brandhalti: 'Halti',
    brandnorthoutdoor: 'North Outdoor',
    brandmakia: 'Makia',
    brandnordicbuddies: 'Nordicbuddies',
    finlandtheme: 'Ropa de hincha de Finlandia',
    baselayer: 'Capas base',
    midlayer: 'Capas intermedias y punto',
    outerwear: 'Chaquetas técnicas y ropa de abrigo',
    accessories: 'Gorros, guantes y calcetines',
    knives: 'Cuchillos puukko',
    wood: 'Madera y vajilla de camping',
    ceramics: 'Cerámica',
    specialties: 'Especialidades finlandesas',
    novelties: 'Novedades de la temporada',
    salmiakki: 'Salmiakki y regaliz',
    chocolate: 'Chocolate y galletas',
    savoury: 'Carne seca y mermelada',
    drinks: 'Té, café y bebidas',
    berry: 'Bayas en polvo',
    herbal: 'Hierbas y hongos',
    oils: 'Aceites y elíxires',
    vouchers: 'Tarjetas de regalo para experiencias',
  },
  it: {
    tableware: 'Stoviglie e vetro',
    textiles: 'Tessili',
    candles: 'Portacandele',
    objects: 'Piccoli oggetti',
    sauna: 'Sauna',
    brandhalti: 'Halti',
    brandnorthoutdoor: 'North Outdoor',
    brandmakia: 'Makia',
    brandnordicbuddies: 'Nordicbuddies',
    finlandtheme: 'Abbigliamento da tifoso della Finlandia',
    baselayer: 'Intimo tecnico',
    midlayer: 'Secondo strato e maglieria',
    outerwear: 'Giacche guscio e capispalla',
    accessories: 'Berretti, guanti e calze',
    knives: 'Coltelli puukko',
    wood: 'Legno e stoviglie da campo',
    ceramics: 'Ceramica',
    specialties: 'Specialità finlandesi',
    novelties: 'Novità di stagione',
    salmiakki: 'Salmiakki e liquirizia',
    chocolate: 'Cioccolato e biscotti',
    savoury: 'Carne essiccata e marmellata',
    drinks: 'Tè, caffè e bevande',
    berry: 'Bacche in polvere',
    herbal: 'Erbe e funghi',
    oils: 'Oli ed elisir',
    vouchers: 'Buoni regalo per esperienze',
  },
  'pt-BR': {
    tableware: 'Louças e vidros',
    textiles: 'Têxteis',
    candles: 'Porta-velas',
    objects: 'Pequenos objetos',
    sauna: 'Sauna',
    brandhalti: 'Halti',
    brandnorthoutdoor: 'North Outdoor',
    brandmakia: 'Makia',
    brandnordicbuddies: 'Nordicbuddies',
    finlandtheme: 'Roupas de torcedor da Finlândia',
    baselayer: 'Segunda pele',
    midlayer: 'Camadas intermediárias e tricô',
    outerwear: 'Jaquetas técnicas e agasalhos',
    accessories: 'Gorros, luvas e meias',
    knives: 'Facas puukko',
    wood: 'Madeira e louça de camping',
    ceramics: 'Cerâmica',
    specialties: 'Especialidades finlandesas',
    novelties: 'Novidades da temporada',
    salmiakki: 'Salmiakki e alcaçuz',
    chocolate: 'Chocolates e biscoitos',
    savoury: 'Carne seca e geleia',
    drinks: 'Chás, cafés e bebidas',
    berry: 'Frutas silvestres em pó',
    herbal: 'Ervas e cogumelos',
    oils: 'Óleos e elixires',
    vouchers: 'Vales-presente de experiências',
  },
  nl: {
    tableware: 'Servies en glas',
    textiles: 'Textiel',
    candles: 'Kaarshouders',
    objects: 'Kleinigheden',
    sauna: 'Sauna',
    brandhalti: 'Halti',
    brandnorthoutdoor: 'North Outdoor',
    brandmakia: 'Makia',
    brandnordicbuddies: 'Nordicbuddies',
    finlandtheme: 'Supporterskleding voor Finland',
    baselayer: 'Thermo-ondergoed',
    midlayer: 'Midlayers en breigoed',
    outerwear: 'Shelljassen en buitenkleding',
    accessories: 'Mutsen, handschoenen en sokken',
    knives: 'Puukko-messen',
    wood: 'Hout en kampeerservies',
    ceramics: 'Keramiek',
    specialties: 'Finse specialiteiten',
    novelties: 'Nieuw dit seizoen',
    salmiakki: 'Salmiak en drop',
    chocolate: 'Chocolade en koekjes',
    savoury: 'Gedroogd vlees en jam',
    drinks: 'Thee, koffie en dranken',
    berry: 'Bessenpoeders',
    herbal: 'Kruiden en paddenstoelen',
    oils: 'Oliën en elixers',
    vouchers: 'Belevenisbonnen',
  },
  ja: {
    tableware: '食器とガラス',
    textiles: 'テキスタイル',
    candles: 'キャンドルホルダー',
    objects: '小物',
    sauna: 'サウナ用品',
    brandhalti: 'Halti',
    brandnorthoutdoor: 'North Outdoor',
    brandmakia: 'Makia',
    brandnordicbuddies: 'Nordicbuddies',
    finlandtheme: 'フィンランド応援ウェア',
    baselayer: 'ベースレイヤー',
    midlayer: 'ミドルレイヤーとニット',
    outerwear: 'シェルジャケットとアウター',
    accessories: '帽子・手袋・靴下',
    knives: 'プーッコナイフ',
    wood: '木製品とアウトドア食器',
    ceramics: '陶器',
    specialties: 'フィンランドの名物',
    novelties: '今シーズンの新商品',
    salmiakki: 'サルミアッキとリコリス',
    chocolate: 'チョコレートとビスケット',
    savoury: '干し肉とジャム',
    drinks: 'お茶・コーヒー・ドリンク',
    berry: 'ベリーパウダー',
    herbal: 'ハーブときのこ',
    oils: 'オイルとエリキシル',
    vouchers: '体験ギフトカード',
  },
  ko: {
    tableware: '식기와 유리 제품',
    textiles: '텍스타일',
    candles: '캔들 홀더',
    objects: '소품',
    sauna: '사우나 용품',
    brandhalti: 'Halti',
    brandnorthoutdoor: 'North Outdoor',
    brandmakia: 'Makia',
    brandnordicbuddies: 'Nordicbuddies',
    finlandtheme: '핀란드 응원 의류',
    baselayer: '베이스 레이어',
    midlayer: '미드 레이어와 니트',
    outerwear: '쉘 재킷과 아우터',
    accessories: '모자·장갑·양말',
    knives: '푸코 나이프',
    wood: '나무 제품과 야외용 식기',
    ceramics: '도자기',
    specialties: '핀란드 특산품',
    novelties: '이번 시즌 신상품',
    salmiakki: '살미아키와 감초 사탕',
    chocolate: '초콜릿과 비스킷',
    savoury: '육포와 잼',
    drinks: '차·커피·음료',
    berry: '베리 파우더',
    herbal: '허브와 버섯',
    oils: '오일과 엘릭서',
    vouchers: '체험 기프트 카드',
  },
  'zh-CN': {
    tableware: '餐具与玻璃器皿',
    textiles: '纺织品',
    candles: '烛台',
    objects: '小物件',
    sauna: '桑拿用品',
    brandhalti: 'Halti',
    brandnorthoutdoor: 'North Outdoor',
    brandmakia: 'Makia',
    brandnordicbuddies: 'Nordicbuddies',
    finlandtheme: '芬兰球迷服饰',
    baselayer: '打底层',
    midlayer: '中间层与针织',
    outerwear: '冲锋衣与外套',
    accessories: '帽子、手套与袜子',
    knives: '普科刀',
    wood: '木制品与户外餐具',
    ceramics: '陶瓷',
    specialties: '芬兰特产',
    novelties: '本季新品',
    salmiakki: '咸甘草糖与甘草糖',
    chocolate: '巧克力与饼干',
    savoury: '肉干与果酱',
    drinks: '茶、咖啡与饮品',
    berry: '浆果粉',
    herbal: '草本与菌菇',
    oils: '油类与草本精华',
    vouchers: '体验礼品卡',
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
 * toimitusehto, Nordqvistin Nurmijärvi), ei keksittyjä. Kaikki 12 kieltä
 * (28.9.2026 asti vain en ja fi, ks. LABELS).
 *
 * 🔴 `specialties` sanoi 28.9.2026 asti "ei saa Suomen ulkopuolelta", mutta
 * lakkahilloa myydään Ruotsissa ja Norjassa joka kaupassa: ruotsalainen lukija
 * olisi saanut väitteen omalla kielellään. Nyt saate kertoo, mitä
 * ulkosuomalaiset kaipaavat (sama kulma kuin ruisleivän tuotekuvauksessa), ja
 * käännökset sanovat "suomalainen ruisleipä", koska "oikea" luettaisiin
 * saksaksi, ruotsiksi ja hollanniksi heidän oman ruisleipänsä moitteena.
 */
const NOTES: Record<Lang, Partial<Record<SubgroupId, string>>> = {
  en: {
    specialties: 'Tastes Finns abroad miss: cloudberry jam, smoked reindeer soup, real rye bread.',
    salmiakki: 'Salty liquorice from soft to hot. Start with Halva\'s Salmiakkikalat, end with Tyrkisk Peber.',
    chocolate: 'Fazer milk chocolate and the bars built on it, from the classic blue to the anniversary Omar.',
    novelties: 'New at Suomikauppa in August 2026: Fazer\'s latest, taken from the shop\'s own new arrivals list.',
    savoury: 'Reindeer jerky and preserves. Meat cannot be posted outside the EU, so delivery stops at the EU border.',
    drinks: 'Nordqvist teas blended in Nurmijärvi, a Moomin tea among them, and Paulig coffee.',
  },
  fi: {
    specialties: 'Makuja, joita ulkosuomalaiset kaipaavat: lakkahillo, savuporokeitto, oikea ruisleipä.',
    salmiakki: 'Salmiakkia pehmeästä tuliseen. Aloita Halvan Salmiakkikaloista, päätä Tyrkisk Peberiin.',
    chocolate: 'Fazerin maitosuklaa ja sen päälle rakennetut levyt, klassisesta sinisestä juhlavuoden Omariin.',
    novelties: 'Suomikaupan elokuun 2026 uutuudet: Fazerin tuoreimmat, poimittu kaupan omasta uutuuslistasta.',
    savoury: 'Poron kuivalihaa ja säilykkeitä. Lihaa ei saa postittaa EU:n ulkopuolelle, joten toimitus päättyy EU:n rajalle.',
    drinks: 'Nordqvistin Nurmijärvellä sekoitetut teet, joukossa Muumi-tee, sekä Pauligin kahvi.',
  },
  sv: {
    specialties: 'Smaker som utlandsfinländare saknar: hjortronsylt, soppa på rökt renkött, finskt rågbröd.',
    salmiakki: 'Salmiak från mild till het. Börja med Halvas Salmiakkikalat och avsluta med Tyrkisk Peber.',
    chocolate: 'Fazers mjölkchoklad och chokladkakorna som bygger på den, från den klassiska blå till jubileumsutgåvan av Omar.',
    novelties: 'Nytt hos Suomikauppa i augusti 2026: Fazers senaste, hämtade från butikens egen nyhetslista.',
    savoury: 'Torkat renkött och sylt. Kött får inte skickas utanför EU, så leveransen stannar vid EU:s gräns.',
    drinks: 'Nordqvists teer, blandade i Nurmijärvi, bland dem ett Moomin-te, och kaffe från Paulig.',
  },
  de: {
    specialties: 'Was Finnen im Ausland vermissen: Moltebeerenmarmelade, Suppe mit geräuchertem Rentierfleisch, finnisches Roggenbrot.',
    salmiakki: 'Salmiak von mild bis scharf. Beginnen Sie mit den Salmiakkikalat von Halva und arbeiten Sie sich bis zu Tyrkisk Peber vor.',
    chocolate: 'Fazer-Milchschokolade und die Tafeln, die darauf aufbauen, von der klassischen blauen bis zur Jubiläumsausgabe von Omar.',
    novelties: 'Neu bei Suomikauppa im August 2026: die neuesten Produkte von Fazer, aus der Neuheitenliste des Shops.',
    savoury: 'Rentier-Trockenfleisch und Marmelade. Fleisch darf nicht aus der EU hinaus verschickt werden, deshalb endet die Lieferung an der EU-Grenze.',
    drinks: 'Tees von Nordqvist, gemischt in Nurmijärvi, darunter ein Moomin-Tee, und Kaffee von Paulig.',
  },
  fr: {
    specialties: 'Les saveurs qui manquent aux Finlandais à l’étranger : confiture de plaquebière, soupe de renne fumé, pain de seigle finlandais.',
    salmiakki: 'Du salmiakki, du plus doux au plus fort. Commencez par les Salmiakkikalat de Halva, terminez par le Tyrkisk Peber.',
    chocolate: 'Le chocolat au lait Fazer et ses déclinaisons en tablettes, de la bleue classique à l’édition anniversaire d’Omar.',
    novelties: 'Nouveautés chez Suomikauppa en août 2026 : les dernières créations de Fazer, tirées de la liste de nouveautés de la boutique.',
    savoury: 'Viande de renne séchée et confiture. La viande ne peut pas être expédiée hors de l’UE : la livraison s’arrête donc à la frontière de l’UE.',
    drinks: 'Les thés Nordqvist, mélangés à Nurmijärvi, dont un thé Moomin, et le café Paulig.',
  },
  es: {
    specialties: 'Sabores que los finlandeses extrañan en el extranjero: mermelada de mora ártica, sopa de reno ahumado, pan de centeno finlandés.',
    salmiakki: 'Salmiakki de suave a picante. Empiece por los Salmiakkikalat de Halva y termine con Tyrkisk Peber.',
    chocolate: 'El chocolate con leche de Fazer y las tabletas elaboradas a partir de él, desde la clásica azul hasta la edición de aniversario de Omar.',
    novelties: 'Novedades de Suomikauppa en agosto de 2026: lo último de Fazer, tomado de la lista de novedades de la propia tienda.',
    savoury: 'Carne seca de reno y mermelada. La carne no puede enviarse fuera de la UE, así que el envío llega solo hasta la frontera de la UE.',
    drinks: 'Tés de Nordqvist, mezclados en Nurmijärvi, entre ellos un té Moomin, y café Paulig.',
  },
  it: {
    specialties: 'I sapori che mancano ai finlandesi all’estero: marmellata di mora artica, zuppa di renna affumicata, pane di segale finlandese.',
    salmiakki: 'Salmiakki dal più delicato al più piccante. Cominci dai Salmiakkikalat di Halva e finisca con il Tyrkisk Peber.',
    chocolate: 'Il cioccolato al latte Fazer e le tavolette che ne derivano, dalla classica blu all’edizione per l’anniversario di Omar.',
    novelties: 'Novità da Suomikauppa ad agosto 2026: le ultime uscite di Fazer, prese dall’elenco delle novità del negozio.',
    savoury: 'Carne di renna essiccata e marmellata. La carne non può essere spedita fuori dall’UE, quindi la consegna si ferma al confine dell’UE.',
    drinks: 'Tè Nordqvist, miscelati a Nurmijärvi, tra cui un tè Moomin, e caffè Paulig.',
  },
  'pt-BR': {
    specialties: 'Sabores de que os finlandeses sentem falta no exterior: geleia de amora-ártica, sopa de rena defumada, pão de centeio finlandês.',
    salmiakki: 'Salmiakki do suave ao picante. Comece pelos Salmiakkikalat da Halva e termine com o Tyrkisk Peber.',
    chocolate: 'O chocolate ao leite da Fazer e as barras feitas a partir dele, da clássica azul à edição de aniversário do Omar.',
    novelties: 'Novidades da Suomikauppa em agosto de 2026: os lançamentos mais recentes da Fazer, tirados da lista de novidades da própria loja.',
    savoury: 'Carne seca de rena e geleia. Carne não pode ser enviada para fora da UE, então a entrega para na fronteira da UE.',
    drinks: 'Chás da Nordqvist, misturados em Nurmijärvi, entre eles um chá Moomin, e café Paulig.',
  },
  nl: {
    specialties: 'Smaken die Finnen in het buitenland missen: kruipbramenjam, soep van gerookt rendiervlees, Fins roggebrood.',
    salmiakki: 'Salmiak van mild tot pittig. Begin met de Salmiakkikalat van Halva en eindig met Tyrkisk Peber.',
    chocolate: 'Melkchocolade van Fazer en de repen die daarop gebaseerd zijn, van de klassieke blauwe tot de jubileumeditie van Omar.',
    novelties: 'Nieuw bij Suomikauppa in augustus 2026: het nieuwste van Fazer, uit de lijst met nieuwe producten van de winkel zelf.',
    savoury: 'Gedroogd rendiervlees en jam. Vlees mag niet buiten de EU worden verzonden, dus de levering stopt bij de EU-grens.',
    drinks: 'Thee van Nordqvist, gemengd in Nurmijärvi, waaronder een Moomin-thee, en koffie van Paulig.',
  },
  ja: {
    specialties: '海外に住むフィンランド人が恋しがる味。クラウドベリーのジャム、燻製トナカイ肉のスープ、フィンランドのライ麦パン。',
    salmiakki: 'マイルドなものから刺激の強いものまで、サルミアッキを揃えました。Halva の Salmiakkikalat から始めて、Tyrkisk Peber で締めくくるのがおすすめです。',
    chocolate: 'ファッツェルのミルクチョコレートと、それをベースにした板チョコ。定番の青いパッケージから、周年記念版の Omar まで。',
    novelties: 'Suomikauppa の2026年8月の新商品。ショップの新着リストから選んだ、Fazer の最新作です。',
    savoury: 'トナカイの干し肉とジャム。肉類はEU域外へ発送できないため、お届けはEU域内に限られます。',
    drinks: 'ヌルミヤルヴィでブレンドされるノルドクヴィストのお茶（ムーミンのお茶も）と、Paulig のコーヒー。',
  },
  ko: {
    specialties: '해외에 사는 핀란드 사람들이 그리워하는 맛: 클라우드베리 잼, 훈제 순록 고기 수프, 핀란드 호밀빵.',
    salmiakki: '순한 맛부터 매운 맛까지 살미아키를 모았습니다. Halva의 Salmiakkikalat부터 시작해 Tyrkisk Peber로 마무리해 보세요.',
    chocolate: '파제르 밀크 초콜릿과 이를 바탕으로 만든 판초콜릿. 클래식한 파란 포장부터 기념판 Omar까지.',
    novelties: 'Suomikauppa의 2026년 8월 신상품. 상점이 직접 올린 신상품 목록에서 고른 Fazer의 최신 제품입니다.',
    savoury: '순록 육포와 잼. 육류는 EU 밖으로 보낼 수 없어 EU 역내로만 배송합니다.',
    drinks: '누르미야르비에서 블렌딩한 노르드크비스트 차(무민 차 포함)와 Paulig 커피.',
  },
  'zh-CN': {
    specialties: '旅居海外的芬兰人想念的家乡味：云莓果酱、烟熏驯鹿肉汤、芬兰黑麦面包。',
    salmiakki: '从温和到辛辣的咸甘草糖。先从 Halva 的 Salmiakkikalat 开始，最后以 Tyrkisk Peber 收尾。',
    chocolate: 'Fazer 牛奶巧克力，以及以此为基础的各款巧克力排：从经典的蓝色包装到 Omar 周年纪念版。',
    novelties: 'Suomikauppa 2026 年 8 月的新品：Fazer 的最新产品，选自该店自己的新品列表。',
    savoury: '驯鹿肉干与果酱。肉类不能寄往欧盟以外，因此只配送到欧盟境内。',
    drinks: '在努尔米耶尔维调配的 Nordqvist 茶（其中有一款姆明茶），以及 Paulig 咖啡。',
  },
}

export function subgroupNote(id: SubgroupId, lang: Lang): string | undefined {
  return NOTES[lang]?.[id] ?? NOTES.en?.[id]
}

/** Testien käyttöön: taulukot sellaisenaan, ilman englantiin putoamista. */
export { LABELS as SUBGROUP_LABELS, NOTES as SUBGROUP_NOTES }

/** Testien käyttöön: kaikki kartassa olevat slugit. */
export const MAPPED_SLUGS = Object.keys(MAP)
export const ALL_PRODUCT_SLUGS = PRODUCTS.map((p) => p.slug)
