import type { Lang } from '../i18n/useLang'
import type { CategoryId } from '../data/types'

/**
 * Yläosan omat tekstit. Oma tiedosto eikä `shopCopy.ts`, koska nämä palvelevat
 * vain navigaatiota ja `shopCopy` on samaan aikaan toisen työn alla.
 *
 * 🔴 Miksi kategorioilla on erikseen lyhyt navinimi: `shopCopy.category.names`
 * on sivun otsikkoteksti ja samalla hakusanaotsikko ("Finnish clothing and
 * knitwear", "Arctic berry powders and superfoods"). Seitsemän sellaista riviä
 * vie luonnollisena leveytenä yli 1000 pikseliä, joten logon kanssa samalle
 * riville ne eivät mahdu 1280 pikselin näytöllä, ja vanha navi ratkaisi sen
 * ahtaalla toisella rivillä. Navilinkki tarvitsee vain kategorian pääsanan;
 * koko nimi näkyy yhä kategoriasivun otsikossa ja murupolussa, joten mikään
 * tieto ei katoa.
 *
 * Lyhyt nimi on aina saman hyväksytyn käännöksen pääsana, ei uusi käännös.
 *
 * 🔴 KÄÄNNETTY KAIKILLE 12 KIELELLE 2.8.2026 (Vesa: "sivu ei ole 12 kielelle
 * käännetty vielä"). Aiemmin tässä oli vain `en` ja `fi`, ja loput kymmenen
 * kieltä osoittivat `en`-objektiin. Se tarkoitti että saksalainen lukija näki
 * saksankielisellä sivulla englanninkielisen navin — eli juuri sen kohdan
 * jossa kieli ensimmäisenä huomataan.
 *
 * Navi on kaupan kehys ja siksi käännetty ensin. Tuotteiden nimet ja
 * kuvaukset ovat yhä `Product`-tyypissä vain `en`/`fi`, joten ne näkyvät
 * muilla kielillä englanniksi. Sen korjaaminen on erillinen työ: se vaatii
 * tyyppimuutoksen ja yli tuhat käännettyä riviä, eikä sitä pidä tehdä
 * puolittain niin että osa tuotteista on käännetty ja osa ei.
 */
/** Kategorioiden oikealla puolella oleva toissijainen linkkirivi. */
export type SecondaryNavId = 'boutiques' | 'luxury' | 'brands' | 'guides' | 'shipping'

export interface NavCopy {
  /** Kategorian lyhyt navinimi. Koko nimi asuu shopCopy.category.names:ssä. */
  catShort: Record<CategoryId, string>
  /**
   * Toissijaisen linkin lyhyt navinimi. Sama ratkaisu ja sama peruste kuin
   * `catShort`illa — vain sovellettuna riviin, jota se ei aikanaan koskenut.
   *
   * 🔴 MIKSI (mitattu 16.8.2026, Vesa: "navigaation tekstejä menee eri kielillä
   * päällekkäin"): nämä viisi linkkiä ottivat labelinsa suoraan kohdesivun
   * H1-otsikosta (`boutique.hubTitle`, `LUXURY_COPY.title`, `BRAND_COPY.indexH1`,
   * `nav.guides`, `nav.shipping`). Otsikko on hakusanapituinen — "Boutiquen in
   * Lappland", "Ideias de presente" — ja rivillä on tilaa 476 pikseliä. Tarve oli
   * 12 kielestä KYMMENELLÄ suurempi kuin tila: saksa 728 px, portugali 721,
   * italia 714, suomi 550. Vain korea ja kiina mahtuivat.
   *
   * Ylivuoto ei näkynyt vierityspalkkina vaan rivityksenä: 44 pikselin rivillä
   * kaksi 12 pikselin tekstiriviä asettuivat lähes kiinni toisiinsa, mikä lukee
   * päällekkäisyytenä. Suomi oli lievin tapaus (+74 px) — se mitä Vesa näki oli
   * verkoston paras kieli, ei pahin.
   *
   * Lyhyt nimi on aina saman hyväksytyn käännöksen pääsana, ei uusi käännös.
   * Yhdyssanakieliä (fi Lahjaoppaat, de Geschenkideen, sv Presenttips, nl
   * Cadeautips) ei lyhennetä: pääsanaa ei voi irrottaa keksimättä uutta sanaa.
   * Koko otsikko näkyy yhä kohdesivulla, murupolussa, `title`-attribuutissa ja
   * mobiilivalikossa, joten mikään tieto ei katoa.
   */
  secShort: Record<SecondaryNavId, string>
  /** Hampurilaisvalikon nappi (aria-label + ruudunlukija). */
  openMenu: string
  closeMenu: string
  /**
   * Hampurilaisnapin NÄKYVÄ teksti. 🔴 Nappi oli pelkkä ikoni, eikä mikään
   * kertonut että sen takana ovat kategoriat, lahjaopas ja toimitussivu.
   */
  menuLabel: string
  shopNavLabel: string
  utilityNavLabel: string
  /** Hakukenttä. Placeholder on lyhyt, aria-label kertoo koko toiminnon. */
  searchPlaceholder: string
  searchLabel: string
  searchClear: string
  searchEmpty: string
  /** Ruudunlukijalle luettava tulosmäärä. */
  searchResults: (n: number) => string
}

const en: NavCopy = {
  catShort: {
    design: 'Design',
    clothing: 'Clothing',
    handicrafts: 'Handicrafts',
    // Kategorian koko nimi on "Finnish sweets and food gifts", joten lyhyt
    // navinimi on sen pääsana "Sweets" eikä vanha "Treats".
    treats: 'Sweets',
    superfoods: 'Superfoods',
    merch: 'Merch',
    experiences: 'Experiences',
  },
  secShort: {
    // Koko nimi: "Lapland boutiques".
    boutiques: 'Boutiques',
    // Koko nimi: "Lapland luxury".
    luxury: 'Luxury',
    // Koko nimi: "Brands we carry".
    brands: 'Brands',
    // Koko nimi: "Gift guides".
    guides: 'Guides',
    shipping: 'Delivery',
  },
  openMenu: 'Open menu',
  closeMenu: 'Close menu',
  menuLabel: 'Menu',
  shopNavLabel: 'Product categories',
  utilityNavLabel: 'Guides and delivery',
  searchPlaceholder: 'Search products',
  searchLabel: 'Search products',
  searchClear: 'Clear search',
  searchEmpty: 'No products match that search.',
  searchResults: (n) => `${n} results`,
}

const fi: NavCopy = {
  catShort: {
    design: 'Design',
    clothing: 'Vaatteet',
    handicrafts: 'Käsityöt',
    treats: 'Herkut',
    superfoods: 'Superfoodit',
    merch: 'Merch',
    experiences: 'Elämykset',
  },
  secShort: {
    // Koko nimi: "Lapin putiikit".
    boutiques: 'Putiikit',
    // Koko nimi: "Lapin ylellisyys".
    // Vesa 5.9.2026: "kyllä suomeksi se voi olla myös luxus. ylellisyys tuntuu oudolta"
    luxury: 'Luxus',
    brands: 'Brändit',
    // Yhdyssana: pääsanaa ei voi irrottaa keksimättä uutta sanaa.
    guides: 'Lahjaoppaat',
    shipping: 'Toimitus',
  },
  openMenu: 'Avaa valikko',
  closeMenu: 'Sulje valikko',
  menuLabel: 'Valikko',
  shopNavLabel: 'Tuotekategoriat',
  utilityNavLabel: 'Oppaat ja toimitus',
  searchPlaceholder: 'Hae tuotteita',
  searchLabel: 'Hae tuotteita',
  searchClear: 'Tyhjennä haku',
  searchEmpty: 'Haku ei löytänyt tuotteita.',
  searchResults: (n) => `${n} osumaa`,
}

const de: NavCopy = {
  catShort: {
    design: 'Design',
    clothing: 'Kleidung',
    handicrafts: 'Handwerk',
    treats: 'Süßes',
    superfoods: 'Superfoods',
    merch: 'Merch',
    experiences: 'Erlebnisse',
  },
  secShort: {
    // Koko nimi: "Boutiquen in Lappland".
    boutiques: 'Boutiquen',
    // Koko nimi: "Luxus aus Lappland".
    luxury: 'Luxus',
    // Koko nimi: "Unsere Marken".
    brands: 'Marken',
    // Yhdyssana: pääsanaa ei voi irrottaa keksimättä uutta sanaa.
    guides: 'Geschenkideen',
    shipping: 'Versand',
  },
  openMenu: 'Menü öffnen',
  closeMenu: 'Menü schließen',
  menuLabel: 'Menü',
  shopNavLabel: 'Produktkategorien',
  utilityNavLabel: 'Ratgeber und Versand',
  searchPlaceholder: 'Produkte suchen',
  searchLabel: 'Produkte suchen',
  searchClear: 'Suche löschen',
  searchEmpty: 'Keine Produkte für diese Suche.',
  searchResults: (n) => `${n} Treffer`,
}

const sv: NavCopy = {
  catShort: {
    design: 'Design',
    clothing: 'Kläder',
    handicrafts: 'Hantverk',
    treats: 'Sötsaker',
    superfoods: 'Superfoods',
    merch: 'Merch',
    experiences: 'Upplevelser',
  },
  secShort: {
    // Koko nimi: "Butiker i Lappland".
    boutiques: 'Butiker',
    // Koko nimi: "Lyx från Lappland".
    luxury: 'Lyx',
    // Koko nimi: "Våra varumärken".
    brands: 'Varumärken',
    // Yhdyssana: pääsanaa ei voi irrottaa keksimättä uutta sanaa.
    guides: 'Presenttips',
    shipping: 'Frakt',
  },
  openMenu: 'Öppna menyn',
  closeMenu: 'Stäng menyn',
  menuLabel: 'Meny',
  shopNavLabel: 'Produktkategorier',
  utilityNavLabel: 'Guider och leverans',
  searchPlaceholder: 'Sök produkter',
  searchLabel: 'Sök produkter',
  searchClear: 'Rensa sökningen',
  searchEmpty: 'Inga produkter matchar sökningen.',
  searchResults: (n) => `${n} träffar`,
}

const fr: NavCopy = {
  catShort: {
    design: 'Design',
    clothing: 'Vêtements',
    handicrafts: 'Artisanat',
    treats: 'Douceurs',
    superfoods: 'Superaliments',
    merch: 'Merch',
    experiences: 'Expériences',
  },
  secShort: {
    // Koko nimi: "Boutiques de Laponie". Sana on sama kuin englannissa.
    boutiques: 'Boutiques',
    // Koko nimi: "Le luxe lapon".
    luxury: 'Luxe',
    // Koko nimi: "Nos marques".
    brands: 'Marques',
    // Koko nimi: "Idées cadeaux".
    guides: 'Idées',
    shipping: 'Livraison',
  },
  openMenu: 'Ouvrir le menu',
  closeMenu: 'Fermer le menu',
  menuLabel: 'Menu',
  shopNavLabel: 'Catégories de produits',
  utilityNavLabel: 'Guides et livraison',
  searchPlaceholder: 'Rechercher des produits',
  searchLabel: 'Rechercher des produits',
  searchClear: 'Effacer la recherche',
  searchEmpty: 'Aucun produit ne correspond à cette recherche.',
  searchResults: (n) => `${n} résultats`,
}

const es: NavCopy = {
  catShort: {
    design: 'Diseño',
    clothing: 'Ropa',
    handicrafts: 'Artesanía',
    treats: 'Dulces',
    superfoods: 'Superalimentos',
    merch: 'Merch',
    experiences: 'Experiencias',
  },
  secShort: {
    // Koko nimi: "Boutiques de Laponia". Sana on sama kuin englannissa.
    boutiques: 'Boutiques',
    // Koko nimi: "Lujo lapón".
    luxury: 'Lujo',
    // Koko nimi: "Nuestras marcas".
    brands: 'Marcas',
    // Koko nimi: "Ideas de regalo".
    guides: 'Ideas',
    shipping: 'Envíos',
  },
  openMenu: 'Abrir el menú',
  closeMenu: 'Cerrar el menú',
  menuLabel: 'Menú',
  shopNavLabel: 'Categorías de productos',
  utilityNavLabel: 'Guías y envío',
  searchPlaceholder: 'Buscar productos',
  searchLabel: 'Buscar productos',
  searchClear: 'Borrar la búsqueda',
  searchEmpty: 'Ningún producto coincide con esa búsqueda.',
  searchResults: (n) => `${n} resultados`,
}

const it: NavCopy = {
  catShort: {
    design: 'Design',
    clothing: 'Abbigliamento',
    handicrafts: 'Artigianato',
    treats: 'Dolci',
    superfoods: 'Superfood',
    merch: 'Merch',
    experiences: 'Esperienze',
  },
  secShort: {
    // Koko nimi: "Boutique della Lapponia".
    boutiques: 'Boutique',
    // Koko nimi: "Il lusso lappone".
    luxury: 'Lusso',
    // Koko nimi: "I nostri marchi".
    brands: 'Marchi',
    // Koko nimi: "Idee regalo".
    guides: 'Idee',
    shipping: 'Spedizioni',
  },
  openMenu: 'Apri il menu',
  closeMenu: 'Chiudi il menu',
  menuLabel: 'Menu',
  shopNavLabel: 'Categorie di prodotti',
  utilityNavLabel: 'Guide e spedizione',
  searchPlaceholder: 'Cerca prodotti',
  searchLabel: 'Cerca prodotti',
  searchClear: 'Cancella la ricerca',
  searchEmpty: 'Nessun prodotto corrisponde alla ricerca.',
  searchResults: (n) => `${n} risultati`,
}

const nl: NavCopy = {
  catShort: {
    design: 'Design',
    clothing: 'Kleding',
    handicrafts: 'Ambacht',
    treats: 'Lekkers',
    superfoods: 'Superfoods',
    merch: 'Merch',
    experiences: 'Belevenissen',
  },
  secShort: {
    // Koko nimi: "Boetieks in Lapland".
    boutiques: 'Boetieks',
    // Koko nimi: "Luxe uit Lapland".
    luxury: 'Luxe',
    // Koko nimi: "Onze merken".
    brands: 'Merken',
    // Yhdyssana: pääsanaa ei voi irrottaa keksimättä uutta sanaa.
    guides: 'Cadeautips',
    shipping: 'Verzending',
  },
  openMenu: 'Menu openen',
  closeMenu: 'Menu sluiten',
  menuLabel: 'Menu',
  shopNavLabel: 'Productcategorieën',
  utilityNavLabel: 'Gidsen en bezorging',
  searchPlaceholder: 'Producten zoeken',
  searchLabel: 'Producten zoeken',
  searchClear: 'Zoekopdracht wissen',
  searchEmpty: 'Geen producten gevonden voor deze zoekopdracht.',
  searchResults: (n) => `${n} resultaten`,
}

const ptBR: NavCopy = {
  catShort: {
    design: 'Design',
    clothing: 'Roupas',
    handicrafts: 'Artesanato',
    treats: 'Doces',
    superfoods: 'Superalimentos',
    merch: 'Merch',
    experiences: 'Experiências',
  },
  secShort: {
    // Koko nimi: "Boutiques da Lapônia". Sana on sama kuin englannissa.
    boutiques: 'Boutiques',
    // Koko nimi: "Luxo da Lapônia".
    luxury: 'Luxo',
    // Koko nimi: "Nossas marcas".
    brands: 'Marcas',
    // Koko nimi: "Ideias de presente".
    guides: 'Ideias',
    shipping: 'Entrega',
  },
  openMenu: 'Abrir o menu',
  closeMenu: 'Fechar o menu',
  menuLabel: 'Menu',
  shopNavLabel: 'Categorias de produtos',
  utilityNavLabel: 'Guias e entrega',
  searchPlaceholder: 'Buscar produtos',
  searchLabel: 'Buscar produtos',
  searchClear: 'Limpar a busca',
  searchEmpty: 'Nenhum produto corresponde a essa busca.',
  searchResults: (n) => `${n} resultados`,
}

const ja: NavCopy = {
  catShort: {
    design: 'デザイン',
    clothing: '衣類',
    handicrafts: '手仕事',
    treats: 'お菓子',
    superfoods: 'スーパーフード',
    merch: 'グッズ',
    experiences: '体験',
  },
  secShort: {
    // Koko nimi: "ラップランドのブティック".
    boutiques: 'ブティック',
    // Koko nimi: "ラップランドの贅沢".
    luxury: '贅沢',
    // Koko nimi: "取り扱いブランド".
    brands: 'ブランド',
    guides: 'ギフトガイド',
    shipping: '配送',
  },
  openMenu: 'メニューを開く',
  closeMenu: 'メニューを閉じる',
  menuLabel: 'メニュー',
  shopNavLabel: '商品カテゴリー',
  utilityNavLabel: 'ガイドと配送',
  searchPlaceholder: '商品を検索',
  searchLabel: '商品を検索',
  searchClear: '検索をクリア',
  searchEmpty: '該当する商品が見つかりませんでした。',
  searchResults: (n) => `${n}件`,
}

const zhCN: NavCopy = {
  catShort: {
    design: '设计',
    clothing: '服装',
    handicrafts: '手工艺',
    treats: '甜食',
    superfoods: '超级食物',
    merch: '周边',
    experiences: '体验',
  },
  secShort: {
    // Koko nimi: "拉普兰精品店".
    boutiques: '精品店',
    // Koko nimi: "拉普兰的奢华".
    luxury: '奢华',
    // Koko nimi: "我们的品牌".
    brands: '品牌',
    guides: '礼物指南',
    shipping: '配送',
  },
  openMenu: '打开菜单',
  closeMenu: '关闭菜单',
  menuLabel: '菜单',
  shopNavLabel: '商品分类',
  utilityNavLabel: '指南与配送',
  searchPlaceholder: '搜索商品',
  searchLabel: '搜索商品',
  searchClear: '清除搜索',
  searchEmpty: '没有符合条件的商品。',
  searchResults: (n) => `${n} 个结果`,
}

const ko: NavCopy = {
  catShort: {
    design: '디자인',
    clothing: '의류',
    handicrafts: '수공예',
    treats: '과자',
    superfoods: '슈퍼푸드',
    merch: '굿즈',
    experiences: '체험',
  },
  secShort: {
    // Koko nimi: "라플란드 부티크".
    boutiques: '부티크',
    // Koko nimi: "라플란드의 럭셔리".
    luxury: '럭셔리',
    // Koko nimi: "취급 브랜드".
    brands: '브랜드',
    guides: '선물 가이드',
    shipping: '배송',
  },
  openMenu: '메뉴 열기',
  closeMenu: '메뉴 닫기',
  menuLabel: '메뉴',
  shopNavLabel: '상품 카테고리',
  utilityNavLabel: '가이드와 배송',
  searchPlaceholder: '상품 검색',
  searchLabel: '상품 검색',
  searchClear: '검색어 지우기',
  searchEmpty: '검색 결과가 없습니다.',
  searchResults: (n) => `검색 결과 ${n}개`,
}

export const NAV_COPY: Record<Lang, NavCopy> = {
  en,
  fi,
  de,
  ja,
  es,
  'pt-BR': ptBR,
  'zh-CN': zhCN,
  ko,
  fr,
  it,
  nl,
  sv,
}
