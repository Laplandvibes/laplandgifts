import type { Lang } from '../i18n/useLang'
import type { ThemeId } from '../data/themes'

/**
 * Teemojen nimet, ingressit ja CTA-teksti.
 *
 * 🔴 Omassa tiedostossaan eikä `shopCopy.ts`:ssä: shopCopy on jo yli tuhat
 * riviä ja kaksitoista kieltä, ja teemat ovat oma käsitteensä, joka kasvaa
 * omaa tahtiaan.
 */
export interface ThemeCopy {
  name: Record<ThemeId, string>
  intro: Record<ThemeId, string>
  /**
   * "Katso kaikki muumiaiheiset tuotteet" -painike, kokonaisena lauseena
   * teemaa kohden.
   *
   * 🔴 EI mallipohja `(nimi) => ...`. Kokeilin sitä ensin, ja suomeksi siitä
   * tuli "muumitaiheiset tuotteet": teeman nimi on "Muumit", ja yhdyssanan
   * alkuosa on "muumi". Sama ongelma tulee jokaisessa taivuttavassa kielessä,
   * joten lause kirjoitetaan kokonaan eikä koota paloista.
   */
  seeAll: Record<ThemeId, string>
  /** Nostoruudukon yläpuolinen pikkuotsikko. */
  eyebrow: string
  /** Teemasivun tuotelaskuri. */
  count: (n: number) => string
}

export const THEME_COPY: Record<Lang, ThemeCopy> = {
  en: {
    name: { moomin: 'Moomin', arctic: 'Arctic nature', sauna: 'Sauna' },
    intro: {
      moomin:
        'Mugs, mittens, bedlinen and posters. Moomin things sit in four different categories here, so this page gathers them into one.',
      arctic:
        'Berries, birch, reindeer and the plants that grow above the Arctic Circle — the part of Lapland you can take home.',
      sauna:
        'Whisks, hats, scents and cushions. What you need for the bench, from the shops that stock it in Finland.',
    },
    seeAll: {
      moomin: 'See all Moomin products',
      arctic: 'See all Arctic nature products',
      sauna: 'See all sauna products',
    },
    eyebrow: 'Picks',
    count: (n) => `${n} products`,
  },
  fi: {
    name: { moomin: 'Muumit', arctic: 'Lapin luonto', sauna: 'Sauna' },
    intro: {
      moomin:
        'Mukeja, lapasia, lakanoita ja julisteita. Muumitavara on täällä neljässä eri kategoriassa, joten tämä sivu kerää sen yhteen.',
      arctic:
        'Marjat, koivu, poro ja napapiirin pohjoispuolella kasvavat kasvit: se osa Lappia, jonka voi ottaa mukaan.',
      sauna:
        'Vihdat, hatut, tuoksut ja tyynyt. Se mitä lauteille tarvitaan, niistä kaupoista jotka pitävät sitä hyllyssä.',
    },
    seeAll: {
      moomin: 'Katso kaikki muumiaiheiset tuotteet',
      arctic: 'Katso koko Lapin luonto -valikoima',
      sauna: 'Katso kaikki saunatuotteet',
    },
    eyebrow: 'Poiminnat',
    count: (n) => `${n} tuotetta`,
  },
  de: {
    name: { moomin: 'Mumin', arctic: 'Arktische Natur', sauna: 'Sauna' },
    intro: {
      moomin:
        'Becher, Fäustlinge, Bettwäsche und Poster. Mumin-Sachen stehen hier in vier Kategorien, diese Seite führt sie zusammen.',
      arctic:
        'Beeren, Birke, Rentier und die Pflanzen nördlich des Polarkreises — der Teil Lapplands, den man mitnehmen kann.',
      sauna:
        'Quasten, Hüte, Düfte und Kissen. Was auf die Bank gehört, aus den Läden, die es in Finnland führen.',
    },
    seeAll: {
      moomin: 'Alle Mumin-Produkte ansehen',
      arctic: 'Alle Produkte der arktischen Natur ansehen',
      sauna: 'Alle Sauna-Produkte ansehen',
    },
    eyebrow: 'Auswahl',
    count: (n) => `${n} Produkte`,
  },
  sv: {
    name: { moomin: 'Mumin', arctic: 'Arktisk natur', sauna: 'Bastu' },
    intro: {
      moomin:
        'Muggar, vantar, sängkläder och affischer. Muminsakerna finns här i fyra kategorier, den här sidan samlar dem.',
      arctic:
        'Bär, björk, ren och växterna norr om polcirkeln — den del av Lappland som går att ta med hem.',
      sauna:
        'Vastar, hattar, dofter och dynor. Det som hör laven till, från butikerna som har det i Finland.',
    },
    seeAll: {
      moomin: 'Se alla muminprodukter',
      arctic: 'Se hela urvalet arktisk natur',
      sauna: 'Se alla bastuprodukter',
    },
    eyebrow: 'Urval',
    count: (n) => `${n} produkter`,
  },
  fr: {
    name: { moomin: 'Moumine', arctic: 'Nature arctique', sauna: 'Sauna' },
    intro: {
      moomin:
        'Mugs, moufles, linge de lit et affiches. Les objets Moumine sont ici répartis dans quatre catégories ; cette page les rassemble.',
      arctic:
        'Baies, bouleau, renne et les plantes qui poussent au nord du cercle polaire — la part de Laponie qu’on peut emporter.',
      sauna:
        'Balais, bonnets, parfums et coussins. Ce qu’il faut sur le banc, venu des boutiques qui le vendent en Finlande.',
    },
    seeAll: {
      moomin: 'Voir tous les produits Moumine',
      arctic: 'Voir toute la sélection nature arctique',
      sauna: 'Voir tous les produits de sauna',
    },
    eyebrow: 'Sélection',
    count: (n) => `${n} produits`,
  },
  es: {
    name: { moomin: 'Moomin', arctic: 'Naturaleza ártica', sauna: 'Sauna' },
    intro: {
      moomin:
        'Tazas, manoplas, ropa de cama y pósteres. Lo de Moomin está aquí en cuatro categorías; esta página lo reúne.',
      arctic:
        'Bayas, abedul, reno y las plantas que crecen al norte del Círculo Polar: la parte de Laponia que se puede llevar a casa.',
      sauna:
        'Ramos, gorros, aromas y cojines. Lo que hace falta en el banco, de las tiendas que lo tienen en Finlandia.',
    },
    seeAll: {
      moomin: 'Ver todos los productos Moomin',
      arctic: 'Ver toda la selección de naturaleza ártica',
      sauna: 'Ver todos los productos de sauna',
    },
    eyebrow: 'Selección',
    count: (n) => `${n} productos`,
  },
  it: {
    name: { moomin: 'Moomin', arctic: 'Natura artica', sauna: 'Sauna' },
    intro: {
      moomin:
        'Tazze, muffole, biancheria e poster. Le cose Moomin qui stanno in quattro categorie; questa pagina le mette insieme.',
      arctic:
        'Bacche, betulla, renna e le piante che crescono oltre il Circolo Polare: la parte di Lapponia che si può portare a casa.',
      sauna:
        'Fasci di betulla, cappelli, profumi e cuscini. Quello che serve sulla panca, dai negozi che lo tengono in Finlandia.',
    },
    seeAll: {
      moomin: 'Vedi tutti i prodotti Moomin',
      arctic: 'Vedi tutta la selezione natura artica',
      sauna: 'Vedi tutti i prodotti per la sauna',
    },
    eyebrow: 'Selezione',
    count: (n) => `${n} prodotti`,
  },
  nl: {
    name: { moomin: 'Moomin', arctic: 'Arctische natuur', sauna: 'Sauna' },
    intro: {
      moomin:
        'Mokken, wanten, beddengoed en posters. Moomin-spullen staan hier in vier categorieën; deze pagina brengt ze samen.',
      arctic:
        'Bessen, berk, rendier en de planten boven de poolcirkel — het deel van Lapland dat mee naar huis kan.',
      sauna:
        'Twijgbundels, mutsen, geuren en kussens. Wat je op de bank nodig hebt, van de winkels die het in Finland voeren.',
    },
    seeAll: {
      moomin: 'Bekijk alle Moomin-producten',
      arctic: 'Bekijk de hele selectie arctische natuur',
      sauna: 'Bekijk alle saunaproducten',
    },
    eyebrow: 'Selectie',
    count: (n) => `${n} producten`,
  },
  'pt-BR': {
    name: { moomin: 'Moomin', arctic: 'Natureza ártica', sauna: 'Sauna' },
    intro: {
      moomin:
        'Canecas, luvas, roupa de cama e pôsteres. As coisas Moomin estão aqui em quatro categorias; esta página reúne tudo.',
      arctic:
        'Frutas silvestres, bétula, rena e as plantas que crescem acima do Círculo Polar — a parte da Lapônia que dá para levar.',
      sauna:
        'Feixes de bétula, chapéus, aromas e almofadas. O que se usa no banco, das lojas que têm isso na Finlândia.',
    },
    seeAll: {
      moomin: 'Ver todos os produtos Moomin',
      arctic: 'Ver toda a seleção natureza ártica',
      sauna: 'Ver todos os produtos de sauna',
    },
    eyebrow: 'Seleção',
    count: (n) => `${n} produtos`,
  },
  ja: {
    name: { moomin: 'ムーミン', arctic: '北極圏の自然', sauna: 'サウナ' },
    intro: {
      moomin:
        'マグ、ミトン、寝具、ポスター。ムーミンのものはこのサイトでは四つのカテゴリーに散らばっているので、このページで一つにまとめています。',
      arctic:
        'ベリー、白樺、トナカイ、そして北極圏で育つ植物。ラップランドのうち、持ち帰れる部分です。',
      sauna:
        'ヴィヒタ、帽子、香り、座布。ベンチに必要なものを、フィンランドで実際に扱っている店から。',
    },
    seeAll: {
      moomin: 'ムーミンの商品をすべて見る',
      arctic: '北極圏の自然の商品をすべて見る',
      sauna: 'サウナの商品をすべて見る',
    },
    eyebrow: 'セレクション',
    count: (n) => `${n} 点`,
  },
  'zh-CN': {
    name: { moomin: '姆明', arctic: '北极自然', sauna: '桑拿' },
    intro: {
      moomin:
        '马克杯、连指手套、床品和海报。姆明的东西分散在四个分类里,这一页把它们收在一起。',
      arctic:
        '浆果、桦木、驯鹿,以及生长在北极圈以北的植物——拉普兰当中可以带走的那部分。',
      sauna:
        '桦树枝束、帽子、香氛和坐垫。长凳上要用的东西,来自芬兰真正在卖它们的店。',
    },
    seeAll: {
      moomin: '查看全部姆明商品',
      arctic: '查看全部北极自然商品',
      sauna: '查看全部桑拿商品',
    },
    eyebrow: '精选',
    count: (n) => `${n} 件商品`,
  },
  ko: {
    name: { moomin: '무민', arctic: '북극의 자연', sauna: '사우나' },
    intro: {
      moomin:
        '머그, 벙어리장갑, 침구, 포스터. 무민 물건은 이곳에서 네 개 분류에 흩어져 있어, 이 페이지에 한데 모았습니다.',
      arctic:
        '베리, 자작나무, 순록, 그리고 북극권 위에서 자라는 식물들. 라플란드에서 가져갈 수 있는 부분입니다.',
      sauna:
        '자작나무 다발, 모자, 향, 방석. 벤치에 필요한 것들을, 핀란드에서 실제로 파는 가게에서.',
    },
    seeAll: {
      moomin: '무민 상품 전체 보기',
      arctic: '북극의 자연 상품 전체 보기',
      sauna: '사우나 상품 전체 보기',
    },
    eyebrow: '추천',
    count: (n) => `상품 ${n}개`,
  },
}
