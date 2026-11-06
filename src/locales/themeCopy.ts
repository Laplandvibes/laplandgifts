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
    name: { moomin: 'Moomin', arctic: 'Arctic nature', sauna: 'Sauna', christmas: 'Christmas', winter: 'Winter' },
    intro: {
      moomin:
        'Mugs, mittens, bedlinen and posters. Moomin things sit in four different categories here, so this page gathers them into one.',
      arctic:
        'Berries, birch, reindeer and the plants that grow above the Arctic Circle, the part of Lapland you can take home.',
      sauna:
        'Whisks, hats, scents and cushions. What you need for the bench, from the shops that stock it in Finland.',
      christmas:
        'Advent calendars, Christmas chocolates, tree ornaments and festive sauna scents, all on one page, from the Finnish shops selling them this winter.',
      winter:
        'Merino beanies, wool socks, mittens and scarves, plus candles and mugs for dark afternoons, gathered from several categories onto one page.',
    },
    seeAll: {
      moomin: 'See all Moomin products',
      arctic: 'See all Arctic nature products',
      sauna: 'See all sauna products',
      christmas: 'See all Christmas products',
      winter: 'See all winter products',
    },
    eyebrow: 'Picks',
    count: (n) => `${n} products`,
  },
  fi: {
    name: { moomin: 'Muumit', arctic: 'Lapin luonto', sauna: 'Sauna', christmas: 'Joulu', winter: 'Talvi' },
    intro: {
      moomin:
        'Mukeja, lapasia, lakanoita ja julisteita. Muumitavara on täällä neljässä eri kategoriassa, joten tämä sivu kerää sen yhteen.',
      arctic:
        'Marjat, koivu, poro ja napapiirin pohjoispuolella kasvavat kasvit: se osa Lappia, jonka voi ottaa mukaan.',
      sauna:
        'Vihdat, hatut, tuoksut ja tyynyt. Se, mitä lauteille tarvitaan, niistä kaupoista, jotka pitävät sitä hyllyssä.',
      christmas:
        'Joulukalenterit, joulusuklaat, kuusenkoristeet ja jouluiset löylytuoksut samalla sivulla niistä suomalaisista kaupoista, jotka myyvät niitä tänä talvena.',
      winter:
        'Merinopipot, villasukat, lapaset ja kaulaliinat sekä kynttilät ja mukit pimeisiin iltapäiviin, kerättynä eri kategorioista yhdelle sivulle.',
    },
    seeAll: {
      moomin: 'Katso kaikki muumiaiheiset tuotteet',
      arctic: 'Katso koko Lapin luonto -valikoima',
      sauna: 'Katso kaikki saunatuotteet',
      christmas: 'Katso kaikki joulutuotteet',
      winter: 'Katso kaikki talvituotteet',
    },
    eyebrow: 'Poiminnat',
    count: (n) => `${n} tuotetta`,
  },
  de: {
    name: { moomin: 'Moomin', arctic: 'Arktische Natur', sauna: 'Sauna', christmas: 'Weihnachten', winter: 'Winter' },
    intro: {
      moomin:
        'Becher, Fäustlinge, Bettwäsche und Poster. Moomin-Sachen stehen hier in vier Kategorien, diese Seite führt sie zusammen.',
      arctic:
        'Beeren, Birke, Rentier und die Pflanzen nördlich des Polarkreises, der Teil Lapplands, den man mitnehmen kann.',
      sauna:
        'Quasten, Hüte, Düfte und Kissen. Was auf die Bank gehört, aus den Läden, die es in Finnland führen.',
      christmas:
        'Adventskalender, Weihnachtsschokolade, Baumschmuck und weihnachtliche Saunadüfte auf einer Seite, aus den finnischen Shops, die sie diesen Winter verkaufen.',
      winter:
        'Merinomützen, Wollsocken, Fäustlinge und Schals, dazu Kerzen und Becher für die dunklen Nachmittage, aus mehreren Kategorien auf einer Seite gesammelt.',
    },
    seeAll: {
      moomin: 'Alle Moomin-Produkte ansehen',
      arctic: 'Alle Produkte der arktischen Natur ansehen',
      sauna: 'Alle Sauna-Produkte ansehen',
      christmas: 'Alle Weihnachtsprodukte ansehen',
      winter: 'Alle Winterprodukte ansehen',
    },
    eyebrow: 'Auswahl',
    count: (n) => `${n} Produkte`,
  },
  sv: {
    name: { moomin: 'Moomin', arctic: 'Arktisk natur', sauna: 'Bastu', christmas: 'Jul', winter: 'Vinter' },
    intro: {
      moomin:
        'Muggar, vantar, sängkläder och affischer. Moominsakerna finns här i fyra kategorier, den här sidan samlar dem.',
      arctic:
        'Bär, björk, ren och växterna norr om polcirkeln, den del av Lappland som går att ta med hem.',
      sauna:
        'Vastar, hattar, dofter och dynor. Det som hör laven till, från butikerna som har det i Finland.',
      christmas:
        'Adventskalendrar, julchoklad, julgranspynt och juliga bastudofter på en och samma sida, från de finska butiker som säljer dem i vinter.',
      winter:
        'Merinomössor, ullstrumpor, vantar och halsdukar, plus ljus och muggar för mörka eftermiddagar, samlade från flera kategorier på en sida.',
    },
    seeAll: {
      moomin: 'Se alla muminprodukter',
      arctic: 'Se hela urvalet arktisk natur',
      sauna: 'Se alla bastuprodukter',
      christmas: 'Se alla julprodukter',
      winter: 'Se alla vinterprodukter',
    },
    eyebrow: 'Urval',
    count: (n) => `${n} produkter`,
  },
  fr: {
    name: { moomin: 'Moumine', arctic: 'Nature arctique', sauna: 'Sauna', christmas: 'Noël', winter: 'Hiver' },
    intro: {
      moomin:
        'Mugs, moufles, linge de lit et affiches. Les objets Moumine sont ici répartis dans quatre catégories ; cette page les rassemble.',
      arctic:
        'Baies, bouleau, renne et les plantes qui poussent au nord du cercle polaire, la part de Laponie qu’on peut emporter.',
      sauna:
        'Balais, bonnets, parfums et coussins. Ce qu’il faut sur le banc, venu des boutiques qui le vendent en Finlande.',
      christmas:
        'Calendriers de l’Avent, chocolats, décorations de sapin et parfums de sauna de Noël, réunis sur une page, des boutiques finlandaises qui les vendent cet hiver.',
      winter:
        'Bonnets en mérinos, chaussettes en laine, moufles et écharpes, avec bougies et mugs pour les après-midi sombres, réunis de plusieurs catégories sur une page.',
    },
    seeAll: {
      moomin: 'Voir tous les produits Moumine',
      arctic: 'Voir toute la sélection nature arctique',
      sauna: 'Voir tous les produits de sauna',
      christmas: 'Voir tous les produits de Noël',
      winter: 'Voir tous les produits d’hiver',
    },
    eyebrow: 'Sélection',
    count: (n) => `${n} produits`,
  },
  es: {
    name: { moomin: 'Moomin', arctic: 'Naturaleza ártica', sauna: 'Sauna', christmas: 'Navidad', winter: 'Invierno' },
    intro: {
      moomin:
        'Tazas, manoplas, ropa de cama y pósteres. Lo de Moomin está aquí en cuatro categorías; esta página lo reúne.',
      arctic:
        'Bayas, abedul, reno y las plantas que crecen al norte del Círculo Polar: la parte de Laponia que se puede llevar a casa.',
      sauna:
        'Ramos, gorros, aromas y cojines. Lo que hace falta en el banco, de las tiendas que lo tienen en Finlandia.',
      christmas:
        'Calendarios de Adviento, bombones, adornos para el árbol y aromas de sauna navideños de las tiendas finlandesas que los venden este invierno, en una página.',
      winter:
        'Gorros de merino, calcetines de lana, manoplas y bufandas, con velas y tazas para las tardes oscuras, reunidos en una sola página desde varias categorías.',
    },
    seeAll: {
      moomin: 'Ver todos los productos Moomin',
      arctic: 'Ver toda la selección de naturaleza ártica',
      sauna: 'Ver todos los productos de sauna',
      christmas: 'Ver todos los productos de Navidad',
      winter: 'Ver todos los productos de invierno',
    },
    eyebrow: 'Selección',
    count: (n) => `${n} productos`,
  },
  it: {
    name: { moomin: 'Moomin', arctic: 'Natura artica', sauna: 'Sauna', christmas: 'Natale', winter: 'Inverno' },
    intro: {
      moomin:
        'Tazze, muffole, biancheria e poster. Le cose Moomin qui stanno in quattro categorie; questa pagina le mette insieme.',
      arctic:
        'Bacche, betulla, renna e le piante che crescono oltre il Circolo Polare: la parte di Lapponia che si può portare a casa.',
      sauna:
        'Fasci di betulla, cappelli, profumi e cuscini. Quello che serve sulla panca, dai negozi che lo tengono in Finlandia.',
      christmas:
        'Calendari dell\'Avvento, cioccolatini, decorazioni per l\'albero e profumi da sauna natalizi dei negozi finlandesi che li vendono quest\'inverno, in una pagina.',
      winter:
        'Berretti in merino, calze di lana, muffole e sciarpe, con candele e tazze per i pomeriggi bui, raccolti in un\'unica pagina da più categorie.',
    },
    seeAll: {
      moomin: 'Vedi tutti i prodotti Moomin',
      arctic: 'Vedi tutta la selezione natura artica',
      sauna: 'Vedi tutti i prodotti per la sauna',
      christmas: 'Vedi tutti i prodotti natalizi',
      winter: 'Vedi tutti i prodotti invernali',
    },
    eyebrow: 'Selezione',
    count: (n) => `${n} prodotti`,
  },
  nl: {
    name: { moomin: 'Moomin', arctic: 'Arctische natuur', sauna: 'Sauna', christmas: 'Kerst', winter: 'Winter' },
    intro: {
      moomin:
        'Mokken, wanten, beddengoed en posters. Moomin-spullen staan hier in vier categorieën; deze pagina brengt ze samen.',
      arctic:
        'Bessen, berk, rendier en de planten boven de poolcirkel, het deel van Lapland dat mee naar huis kan.',
      sauna:
        'Twijgbundels, mutsen, geuren en kussens. Wat u op de bank nodig hebt, van de winkels die het in Finland voeren.',
      christmas:
        'Adventskalenders, kerstchocolade, kerstboomversiering en kerstige saunageuren op één pagina, uit de Finse winkels die ze deze winter verkopen.',
      winter:
        'Merinomutsen, wollen sokken, wanten en sjaals, met kaarsen en mokken voor de donkere middagen, uit verschillende categorieën op één pagina verzameld.',
    },
    seeAll: {
      moomin: 'Bekijk alle Moomin-producten',
      arctic: 'Bekijk de hele selectie arctische natuur',
      sauna: 'Bekijk alle saunaproducten',
      christmas: 'Bekijk alle kerstproducten',
      winter: 'Bekijk alle winterproducten',
    },
    eyebrow: 'Selectie',
    count: (n) => `${n} producten`,
  },
  'pt-BR': {
    name: { moomin: 'Moomin', arctic: 'Natureza ártica', sauna: 'Sauna', christmas: 'Natal', winter: 'Inverno' },
    intro: {
      moomin:
        'Canecas, luvas, roupa de cama e pôsteres. As coisas Moomin estão aqui em quatro categorias; esta página reúne tudo.',
      arctic:
        'Frutas silvestres, bétula, rena e as plantas que crescem acima do Círculo Polar, a parte da Lapônia que dá para levar.',
      sauna:
        'Feixes de bétula, chapéus, aromas e almofadas. O que se usa no banco, das lojas que têm isso na Finlândia.',
      christmas:
        'Calendários do Advento, chocolates de Natal, enfeites de árvore e aromas de sauna natalinos, em uma página, de lojas finlandesas que os vendem neste inverno.',
      winter:
        'Gorros de merino, meias de lã, luvas e cachecóis, com velas e canecas para as tardes escuras, reunidos em uma página a partir de várias categorias.',
    },
    seeAll: {
      moomin: 'Ver todos os produtos Moomin',
      arctic: 'Ver toda a seleção natureza ártica',
      sauna: 'Ver todos os produtos de sauna',
      christmas: 'Ver todos os produtos de Natal',
      winter: 'Ver todos os produtos de inverno',
    },
    eyebrow: 'Seleção',
    count: (n) => `${n} produtos`,
  },
  ja: {
    name: { moomin: 'ムーミン', arctic: '北極圏の自然', sauna: 'サウナ', christmas: 'クリスマス', winter: '冬' },
    intro: {
      moomin:
        'マグ、ミトン、寝具、ポスター。ムーミンのものはこのサイトでは四つのカテゴリーに散らばっているので、このページで一つにまとめています。',
      arctic:
        'ベリー、白樺、トナカイ、そして北極圏で育つ植物。ラップランドのうち、持ち帰れる部分です。',
      sauna:
        'ヴィヒタ、帽子、香り、座布。ベンチに必要なものを、フィンランドで実際に扱っている店から。',
      christmas:
        'アドベントカレンダー、クリスマスチョコレート、ツリーのオーナメント、クリスマスのサウナアロマを、この冬それらを販売しているフィンランドのショップからこのページに集めました。',
      winter:
        'メリノのビーニー、ウールソックス、ミトン、スカーフに、暗い午後のためのキャンドルとマグも加えて、いくつかのカテゴリーからこのページに集めました。',
    },
    seeAll: {
      moomin: 'ムーミンの商品をすべて見る',
      arctic: '北極圏の自然の商品をすべて見る',
      sauna: 'サウナの商品をすべて見る',
      christmas: 'クリスマスの商品をすべて見る',
      winter: '冬の商品をすべて見る',
    },
    eyebrow: 'セレクション',
    count: (n) => `${n} 点`,
  },
  'zh-CN': {
    name: { moomin: '姆明', arctic: '北极自然', sauna: '桑拿', christmas: '圣诞节', winter: '冬季' },
    intro: {
      moomin:
        '马克杯、连指手套、床品和海报。姆明的东西分散在四个分类里，这一页把它们收在一起。',
      arctic:
        '浆果、桦木、驯鹿，以及生长在北极圈以北的植物：拉普兰当中可以带走的那部分。',
      sauna:
        '桦树枝束、帽子、香氛和坐垫。长凳上要用的东西，来自芬兰真正在卖它们的店。',
      christmas:
        '圣诞倒数日历、圣诞巧克力、圣诞树挂饰和圣诞桑拿香氛，全部来自今冬在售的芬兰商店，汇集在这一页。',
      winter:
        '美利奴毛线帽、羊毛袜、连指手套和围巾，再加上为昏暗午后准备的蜡烛和马克杯，从几个分类汇集到这一页。',
    },
    seeAll: {
      moomin: '查看全部姆明商品',
      arctic: '查看全部北极自然商品',
      sauna: '查看全部桑拿商品',
      christmas: '查看全部圣诞商品',
      winter: '查看全部冬季商品',
    },
    eyebrow: '精选',
    count: (n) => `${n} 件商品`,
  },
  ko: {
    name: { moomin: '무민', arctic: '북극의 자연', sauna: '사우나', christmas: '크리스마스', winter: '겨울' },
    intro: {
      moomin:
        '머그, 벙어리장갑, 침구, 포스터. 무민 물건은 이곳에서 네 개 분류에 흩어져 있어, 이 페이지에 한데 모았습니다.',
      arctic:
        '베리, 자작나무, 순록, 그리고 북극권 위에서 자라는 식물들. 라플란드에서 가져갈 수 있는 부분입니다.',
      sauna:
        '자작나무 다발, 모자, 향, 방석. 벤치에 필요한 것들을, 핀란드에서 실제로 파는 가게에서.',
      christmas:
        '어드벤트 캘린더, 크리스마스 초콜릿, 트리 장식, 크리스마스 사우나 향을 올겨울 판매 중인 핀란드 가게들에서 모아 한 페이지에 담았습니다.',
      winter:
        '메리노 비니, 울 양말, 벙어리장갑, 스카프와 함께 어두운 오후를 위한 캔들과 머그를 여러 분류에서 모아 한 페이지에 담았습니다.',
    },
    seeAll: {
      moomin: '무민 상품 전체 보기',
      arctic: '북극의 자연 상품 전체 보기',
      sauna: '사우나 상품 전체 보기',
      christmas: '크리스마스 상품 전체 보기',
      winter: '겨울 상품 전체 보기',
    },
    eyebrow: '추천',
    count: (n) => `상품 ${n}개`,
  },
}
