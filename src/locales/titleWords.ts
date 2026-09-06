/**
 * Localized <title> tails for data-driven pages whose only localizable part used
 * to be a proper noun.
 *
 * [LV-DUP 2026-09-06] OpenSEO's full crawl (2 928 pages) found 793 duplicate
 * titles on this site: every brand page ("Fazer | LaplandGifts"), every boutique
 * page ("Duodji Shop, Inari | LaplandGifts") and every theme page carried the
 * SAME title in all 12 locales, and /theme/moomin collided with /brand/moomin.
 * A proper noun does not translate, so the tail after it must — the same way
 * the boutique hub already says "Lahjakaupat" / "Gift shops".
 *
 * Used by BOTH scripts/build-routes-json.mjs (prerender + sitemap meta) and the
 * runtime pages, so the served <title> and the hydrated one never drift.
 */
export type TitleLang = 'en' | 'fi' | 'de' | 'ja' | 'es' | 'pt-BR' | 'zh-CN' | 'ko' | 'fr' | 'it' | 'nl' | 'sv'

/** "<Brand> – products and gifts" */
const BRAND_TAIL: Record<TitleLang, string> = {
  en: 'products and gifts from Lapland',
  fi: 'tuotteet ja lahjat Lapista',
  de: 'Produkte und Geschenke aus Lappland',
  ja: 'の商品とギフト（ラップランド）',
  es: 'productos y regalos de Laponia',
  'pt-BR': 'produtos e presentes da Lapônia',
  'zh-CN': '拉普兰产品与礼品',
  ko: '라플란드 제품과 선물',
  fr: 'produits et cadeaux de Laponie',
  it: 'prodotti e regali dalla Lapponia',
  nl: 'producten en cadeaus uit Lapland',
  sv: 'produkter och presenter från Lappland',
}

/** "<Shop>, <Town> – gift shop" */
const SHOP_WORD: Record<TitleLang, string> = {
  en: 'gift shop',
  fi: 'lahjakauppa',
  de: 'Geschenkeladen',
  ja: 'ギフトショップ',
  es: 'tienda de regalos',
  'pt-BR': 'loja de presentes',
  'zh-CN': '礼品店',
  ko: '기프트숍',
  fr: 'boutique de cadeaux',
  it: 'negozio di regali',
  nl: 'cadeauwinkel',
  sv: 'presentbutik',
}

/** "<Theme> – gift ideas" */
const THEME_WORD: Record<TitleLang, string> = {
  en: 'gift ideas',
  fi: 'lahjaideat',
  de: 'Geschenkideen',
  ja: 'ギフトアイデア',
  es: 'ideas de regalo',
  'pt-BR': 'ideias de presente',
  'zh-CN': '礼物灵感',
  ko: '선물 아이디어',
  fr: 'idées cadeaux',
  it: 'idee regalo',
  nl: 'cadeau-ideeën',
  sv: 'presenttips',
}

const NO_SPACE = new Set<TitleLang>(['ja', 'zh-CN'])

function join(name: string, tail: string, lang: TitleLang, sep = ' – '): string {
  if (lang === 'ja') return `${name}${tail}` // tail starts with の / particle-free form
  if (lang === 'zh-CN') return `${name}${sep.trim() === '–' ? '：' : sep}${tail}`
  return `${name}${sep}${tail}`
}

/** Brand page title without the "| LaplandGifts" suffix. */
export function brandTitleBase(brandName: string, lang: TitleLang): string {
  return join(brandName, BRAND_TAIL[lang] ?? BRAND_TAIL.en, lang)
}

/** Shorter tail for long brand names ("Golden Crown Levin Iglut – Produkte"). */
const BRAND_TAIL_SHORT: Record<TitleLang, string> = {
  en: 'products', fi: 'tuotteet', de: 'Produkte', ja: 'の商品', es: 'productos', 'pt-BR': 'produtos',
  'zh-CN': '产品', ko: '제품', fr: 'produits', it: 'prodotti', nl: 'producten', sv: 'produkter',
}
export function brandTitleShort(brandName: string, lang: TitleLang): string {
  return join(brandName, BRAND_TAIL_SHORT[lang] ?? BRAND_TAIL_SHORT.en, lang)
}

/** Boutique page title without the suffix: "Duodji Shop, Inari – lahjakauppa". */
export function boutiqueTitleBase(shopName: string, town: string, lang: TitleLang): string {
  const head = NO_SPACE.has(lang) ? `${shopName}（${town}）` : `${shopName}, ${town}`
  const word = SHOP_WORD[lang] ?? SHOP_WORD.en
  if (lang === 'ja') return `${head}｜${word}`
  if (lang === 'zh-CN') return `${head}：${word}`
  return `${head} – ${word}`
}

/** Theme page title without the suffix: "Muumit – lahjaideat". */
export function themeTitleBase(themeName: string, lang: TitleLang): string {
  const word = THEME_WORD[lang] ?? THEME_WORD.en
  if (lang === 'ja') return `${themeName}の${word}`
  if (lang === 'zh-CN') return `${themeName}${word}`
  return `${themeName} – ${word}`
}
