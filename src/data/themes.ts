import { PRODUCTS } from './products'
import type { CategoryId, Product } from './types'

/**
 * Teema on kategorian YLI menevä poiminta.
 *
 * 🔴 Miksi kategorioiden lisäksi (Vesa 12.8.: "eikö se olisi paljon coolimpi
 * jos aina olisi poiminnat — muumiaiheiset — ja niiden alla cta osiot →
 * katso kaikki muumiaiheiset tuotteet"): ostaja ei ajattele "design >
 * astiat", vaan "haluan muumitavaraa". Muumituotteita on neljässä eri
 * kategoriassa, joten kategorianavigaatio hajottaa juuri sen valikoiman,
 * jota ostaja etsii yhtenä kokonaisuutena.
 *
 * 🔴 Jäsenyys on NIMENOMAINEN slug-lista eikä nimestä pääteltävä sääntö.
 * Kokeilin ensin nimihakua, ja se veti Peppi Pitkätossun Muumi-teemaan.
 * Lista on auditoitava ja testi vahtii, ettei siinä ole kuolleita slugeja.
 */
export type ThemeId = 'moomin' | 'arctic' | 'sauna'

export interface Theme {
  id: ThemeId
  /** Kortin ja teemasivun kuva, sama nimeämistapa kuin kategorioilla. */
  image: string
  slugs: string[]
}

export const THEMES: Theme[] = [
  {
    id: 'moomin',
    image: 'cat-design',
    slugs: [
      'moomin-mystical-forest-wool-throw',
      'nordqvist-moomin-forest-berry-tea',
      'moomin-wild-blueberry-coffee',
      'moomin-lingonberry-blueberry-dark-chocolate',
      'moomin-berry-picking-tea',
      'arabia-moomin-mug-snufkin',
      'arabia-moomin-mug-friendship',
      'arabia-moomin-figurine-moomintroll',
      'fiskars-moominpappa-scissors',
      'nb-little-my-beanie',
      'nb-moomintroll-mittens',
      'nb-moomintroll-love-socks',
      'nb-moomin-classics-tee',
      'nb-moomintroll-hoodie',
      'sk-moomin-duvet-set',
      'sk-muurla-moomin-bottle',
      'nb-little-my-mittens',
      'nb-little-my-thermal-bottle',
      'nb-little-my-neckpillow',
      'nb-moomintroll-love-cushion',
      'nb-little-my-poster',
      'nb-moomin-novels-poster',
      'sk-little-my-sauna-cushion',
    ],
  },
  {
    id: 'arctic',
    image: 'cat-superfoods',
    slugs: [
      'marttiini-napapiirin-puukko',
      'lapuan-kankurit-poro-towel',
      'kuivalihakundi-poro-jerky',
      'kuivalihakundi-poro-jerky-200g',
      'nordqvist-moomin-forest-berry-tea',
      'nordqvist-cranberry-toffee-tea',
      'moomin-wild-blueberry-coffee',
      'moomin-lingonberry-blueberry-dark-chocolate',
      'moomin-berry-picking-tea',
      'arctic-power-berries-blueberry-powder',
      'arctic-power-berries-sea-buckthorn-powder',
      'kaapa-mushrooms-pakuri-powder',
      'arctic-warriors-spruce-sprout-powder',
      'arctic-warriors-nettle-powder',
      'arctic-warriors-roseroot-elixir',
      'kaino-spruce-sprout-sparkling',
      'foodin-six-mushroom-blend',
      'foodin-nordic-berry-powder',
      'foodin-chaga-tincture',
      'kaavi-chaga-chunks',
      'puhdistamo-instant-chaga',
      'rento-birch-sauna-honey',
      'rento-blueberry-sauna-honey',
      'north-outdoor-arctic-250-balaclava',
      'north-outdoor-arctic-260-zip-neck',
      'halti-hossa-baselayer-women',
      'husky-farm-safari-rovaniemi',
      'reindeer-safari-rovaniemi',
      'sk-rento-birch-whisk',
    ],
  },
  {
    id: 'sauna',
    image: 'cat-artisan-crafts',
    slugs: [
      'rento-tar-sauna-soap',
      'rento-birch-sauna-honey',
      'rento-blueberry-sauna-honey',
      'rento-sauna-pillow',
      'emendo-sauna-scents',
      'sk-aromageddon-sauna-scent',
      'sk-little-my-sauna-cushion',
      'sk-rento-sauna-hat',
      'sk-rento-birch-whisk',
    ],
  },
]

const BY_ID = new Map(THEMES.map((t) => [t.id, t]))

export function themeById(id: string): Theme | undefined {
  return BY_ID.get(id as ThemeId)
}

/** Teeman tuotteet katalogin järjestyksessä. */
export function productsByTheme(id: ThemeId): Product[] {
  const t = BY_ID.get(id)
  if (!t) return []
  const want = new Set(t.slugs)
  return PRODUCTS.filter((p) => want.has(p.slug))
}

/**
 * Kategoriasivulle nostettavat teemat, vahvin ensin.
 *
 * Alaraja on neljä tuotetta: nostoruudukko on neljä korttia leveä, ja
 * kolmen kortin rivi jonka perässä lukee "katso kaikki" näyttää siltä
 * että valikoima loppui kesken.
 */
export function themesForCategory(cat: CategoryId): Array<{ theme: Theme; items: Product[] }> {
  return THEMES.map((theme) => ({
    theme,
    items: productsByTheme(theme.id).filter((p) => p.category === cat),
  }))
    .filter((x) => x.items.length >= 4)
    .sort((a, b) => b.items.length - a.items.length)
}
