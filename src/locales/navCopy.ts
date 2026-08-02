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
export interface NavCopy {
  /** Kategorian lyhyt navinimi. Koko nimi asuu shopCopy.category.names:ssä. */
  catShort: Record<CategoryId, string>
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
