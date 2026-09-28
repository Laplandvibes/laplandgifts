/**
 * Localized <title> parts for data-driven pages whose only localizable part used
 * to be a proper noun.
 *
 * [LV-DUP 2026-09-06] OpenSEO's full crawl (2 928 pages) found 793 duplicate
 * titles on this site: every brand page ("Fazer | LaplandGifts"), every boutique
 * page ("Duodji Shop, Inari | LaplandGifts") and every theme page carried the
 * SAME title in all 12 locales, and /theme/moomin collided with /brand/moomin.
 * A proper noun does not translate, so the part after it must — the same way
 * the boutique hub already says "Lahjakaupat" / "Gift shops".
 *
 * [LV-TITLE-DASH 2026-09-28] Name and type are joined with a colon, "<name>: <type>",
 * the network's form for entity pages (lv_permanent_rules §31). They were joined with
 * a spaced en dash, which is a sentence dash and banned in every language; the
 * otsikko-viiva gate counted 712 such places on this site. French puts a space before
 * the colon as the rest of the network does. ja and zh-CN keep their own joins
 * (の, ｜, ：), which never used a dash.
 *
 * Used by scripts/build-routes-json.mjs. The brand, boutique, theme and product pages
 * set no <title> of their own, so the prerendered title is the one readers and search
 * engines see.
 */
export type TitleLang = 'en' | 'fi' | 'de' | 'ja' | 'es' | 'pt-BR' | 'zh-CN' | 'ko' | 'fr' | 'it' | 'nl' | 'sv'

/** Colon between a name and its type. */
export function colon(lang: TitleLang): string {
  return lang === 'fr' ? ' : ' : ': '
}

/**
 * Title width as the otsikko gate measures it: a CJK, kana or hangul character counts
 * two, anything else one. Google cuts a title at roughly 600 px, which is about 75
 * units; the gate's floor is 20.
 */
const WIDE: [number, number][] = [
  [0x1100, 0x11ff], [0x2e80, 0xa4cf], [0xa960, 0xa97f], [0xac00, 0xd7ff],
  [0xf900, 0xfaff], [0xfe30, 0xfe4f], [0xff00, 0xff60], [0xffe0, 0xffe6],
]
export function titleWidth(s: string): number {
  let n = 0
  for (const c of s) {
    const p = c.codePointAt(0) ?? 0
    n += WIDE.some(([a, b]) => p >= a && p <= b) ? 2 : 1
  }
  return n
}
export const TITLE_WIDTH_MIN = 20
export const TITLE_WIDTH_MAX = 75

/**
 * A heading ("Suomalainen design") continued after a colon, in the language's own case.
 * Finnish, Swedish, Dutch, French, Spanish, Italian and Portuguese go on in lower case
 * unless the word is a proper noun (Lappi, Lappland, Lapland, Laponie…); Dutch also keeps
 * an adjective of place ("Fins design"); German lowers only an adjective ("finnisches
 * Design", but "Kleidung und Strick"); English keeps "Finnish", "Arctic" and "Lapland".
 */
export function afterColon(heading: string, lang: TitleLang): string {
  const lower = () => heading.charAt(0).toLocaleLowerCase(lang) + heading.slice(1)
  switch (lang) {
    case 'fi':
      return /^Lap/.test(heading) ? heading : lower()
    case 'sv':
      return /^Lappland/.test(heading) ? heading : lower()
    case 'nl':
      return /^(Fins|Finse|Lapland)/.test(heading) ? heading : lower()
    case 'de':
      return /^\p{Lu}\p{Ll}*isch(e[mnrs]?)?\s/u.test(heading) ? lower() : heading
    case 'fr':
    case 'es':
    case 'it':
    case 'pt-BR':
      return /^(Laponie|Laponia|Lapponia|Lapônia)/.test(heading) ? heading : lower()
    default:
      return heading
  }
}

/** A title starts with a capital letter; a product name stripped of its brand may not. */
export function initialCapital(text: string, lang: TitleLang): string {
  if (lang === 'ja' || lang === 'zh-CN' || lang === 'ko') return text
  return text.charAt(0).toLocaleUpperCase(lang) + text.slice(1)
}

/** "<Brand>: products and gifts from Lapland" */
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

/** "<Shop>, <Town>: gift shop" */
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

/** "<Theme>: gift ideas" */
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

/**
 * Theme titles where "<theme>: <word>" would fall under the 20-unit floor ("Sauna: gift
 * ideas" is 17). Each names what the page holds, in the words its market searches for,
 * measured with OpenSEO on 2026-09-28: UK moomin gifts 720, sauna accessories 720, sauna
 * gifts 170; Finland muumi tuotteet 720, saunatarvikkeet 480, muumi lahjat 110; Sweden
 * muminmugg 8 100, bastutillbehör 1 600; Italy accessori sauna 140, tazza moomin 40;
 * Korea 무민 굿즈 70. The Moomin lists follow the page's own intro (mugs, mittens,
 * bedlinen, posters), the sauna ones its products (whisks, hats, scents, honey, cushions).
 */
const THEME_TITLE: Partial<Record<TitleLang, Partial<Record<string, string>>>> = {
  en: { moomin: 'Moomin gifts: mugs, mittens and posters', sauna: 'Sauna gifts and accessories' },
  fi: { moomin: 'Muumituotteet ja -lahjat', sauna: 'Saunatarvikkeet ja -lahjat' },
  it: { moomin: 'Moomin: tazze, muffole e poster', sauna: 'Sauna: accessori e idee regalo' },
  sv: { moomin: 'Muminmuggar, vantar och affischer', sauna: 'Bastutillbehör och presenttips' },
  ko: { moomin: '무민 굿즈와 선물 아이디어' },
}

const NO_SPACE = new Set<TitleLang>(['ja', 'zh-CN'])

function join(name: string, tail: string, lang: TitleLang): string {
  if (lang === 'ja') return `${name}${tail}` // tail starts with の
  if (lang === 'zh-CN') return `${name}：${tail}`
  return `${name}${colon(lang)}${tail}`
}

/** Brand page title: "Fazer: tuotteet ja lahjat Lapista". */
export function brandTitleBase(brandName: string, lang: TitleLang): string {
  return join(brandName, BRAND_TAIL[lang] ?? BRAND_TAIL.en, lang)
}

/** Shorter tail for long brand names ("Golden Crown Levin Iglut: Produkte"). */
const BRAND_TAIL_SHORT: Record<TitleLang, string> = {
  en: 'products', fi: 'tuotteet', de: 'Produkte', ja: 'の商品', es: 'productos', 'pt-BR': 'produtos',
  'zh-CN': '产品', ko: '제품', fr: 'produits', it: 'prodotti', nl: 'producten', sv: 'produkter',
}
export function brandTitleShort(brandName: string, lang: TitleLang): string {
  return join(brandName, BRAND_TAIL_SHORT[lang] ?? BRAND_TAIL_SHORT.en, lang)
}

/** Boutique page title: "Duodji Shop, Inari: lahjakauppa". */
export function boutiqueTitleBase(shopName: string, town: string, lang: TitleLang): string {
  const head = NO_SPACE.has(lang) ? `${shopName}（${town}）` : `${shopName}, ${town}`
  const word = SHOP_WORD[lang] ?? SHOP_WORD.en
  if (lang === 'ja') return `${head}｜${word}`
  if (lang === 'zh-CN') return `${head}：${word}`
  return `${head}${colon(lang)}${word}`
}

/** Theme page title: "Lapin luonto: lahjaideat", or the measured title above. */
export function themeTitleBase(themeName: string, lang: TitleLang, themeId?: string): string {
  const own = themeId ? THEME_TITLE[lang]?.[themeId] : undefined
  if (own) return own
  const word = THEME_WORD[lang] ?? THEME_WORD.en
  if (lang === 'ja') return `${themeName}の${word}`
  if (lang === 'zh-CN') return `${themeName}${word}`
  return `${themeName}${colon(lang)}${word}`
}
