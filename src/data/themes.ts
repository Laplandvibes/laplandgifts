
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
 * 🔴 Tässä tiedostossa EI ole yhtään arvoimporttia. `scripts/
 * build-routes-json.mjs` lataa sen suoraan Nodella, joka purkaa tyypit itse
 * muttei ratkaise laajennuksettomia polkuja — `import { PRODUCTS } from
 * './products'` kaatoi buildin. Tuoteliitos asuu siksi omassa
 * tiedostossaan `themeProducts.ts`.
 *
 * 🔴 Jäsenyys on NIMENOMAINEN slug-lista eikä nimestä pääteltävä sääntö.
 * Kokeilin ensin nimihakua, ja se veti Peppi Pitkätossun Muumi-teemaan.
 * Lista on auditoitava ja testi vahtii, ettei siinä ole kuolleita slugeja.
 */
export type ThemeId = 'moomin' | 'arctic' | 'sauna' | 'christmas' | 'winter'

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
      'nb-hattifatteners-cushion',
      'nordqvist-moomin-forest-berry-tea',
      'sk-moomin-chocolate-chip-biscuit-tin',
      'sk-emendo-moomin-sauna-seat-cover',
      'sk-moomin-duvet-set-merella',
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
      'arabia-moomin-love-baubles',
      'sk-muurla-moomin-bauble-pyjamas',
      'sk-muurla-moomin-baubles-snow',
      'sk-muurla-moomin-led-ball',
      'sk-muurla-moomin-led-candle-tree',
      'arabia-moomin-plates-winter-night',
      'arabia-moomin-plates-winter-fire',
      'sk-muurla-moomin-snowfall-mug',
      'sk-muurla-moomin-gifts-mug',
      'sk-moomin-mistletoe-candle',
      'nb-moomin-christmas-sockbox',
      'nb-moomin-christmas-box-men',
      'nb-moomintroll-fleece-mittens',
      'nb-moomintroll-chunky-beanie',
      'sk-nordqvist-moomin-tea-calendar',
    ],
  },
  {
    id: 'arctic',
    image: 'cat-superfoods',
    slugs: [
      'marttiini-napapiirin-puukko',
      'sk-lapin-liha-smoked-reindeer-soup',
      'kuivalihakundi-poro-jerky',
      'kuivalihakundi-poro-jerky-200g',
      'nordqvist-moomin-forest-berry-tea',
      'nordqvist-cranberry-toffee-tea',
      'rj-arctic-warriors-blueberry-powder',
      'sk-finnish-flavours-cloudberry-jam',
      'rj-nordic-koivu-birch-sap',
      'rj-raitaniemi-sea-buckthorn-powder',
      'rj-raitaniemi-crowberry-powder',
      'kaapa-mushrooms-pakuri-powder',
      'arctic-warriors-spruce-sprout-powder',
      'arctic-warriors-nettle-powder',
      'arctic-warriors-roseroot-elixir',
      'kaino-spruce-sprout-sparkling',
      'foodin-six-mushroom-blend',
      'sk-poikain-parhaat-puolukka',
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
  // 🔴 Joulu ja talvi (6.11.2026, Vesa: "talvisia ja jouluisia tuotteita lisää jokaiselle brändille
  // heidän syötteistään, kasvatetaan omaa selaamista"). Kausiteemat kokoavat kuuden kategorian
  // joulu- ja talvituotteet yhdelle sivulle. Kuva on sivuston oma Commons-kuva (krediitti
  // photoCredits.ts:ssä): joulu = Joulupukin Pajakylän polku, talvi = poro lumisessa kuusikossa.
  {
    id: 'christmas',
    image: 'exp-santavillage',
    slugs: [
      'nb-kunnas-santa-mug',
      'iittala-glass-baubles-red',
      'iittala-toikka-annual-bird-2026',
      'marimekko-siirtolapuutarha-baubles',
      'arabia-moomin-love-baubles',
      'sk-muurla-moomin-bauble-pyjamas',
      'sk-muurla-moomin-baubles-snow',
      'sk-muurla-moomin-led-ball',
      'sk-muurla-moomin-led-candle-tree',
      'sk-muurla-moomin-gifts-mug',
      'sk-moomin-mistletoe-candle',
      'nb-moomin-christmas-sockbox',
      'nb-moomin-christmas-box-men',
      'sk-fazer-christmas-box',
      'sk-karl-fazer-advent-calendar',
      'sk-fazer-christmas-chocolates',
      'sk-karl-fazer-gingerbread-bar',
      'sk-fazer-glogg-balls',
      'sk-halva-christmas-liquorice',
      'sk-halva-salmiakki-calendar',
      'kuivalihakundi-advent-calendar',
      'sk-nordqvist-tea-calendar',
      'sk-nordqvist-moomin-tea-calendar',
      'sk-nordic-glogg-concentrate',
      'rj-christmas-coffee',
      'sk-emendo-santa-sauna-scent',
      'sk-emendo-christmas-sauna-set',
      'sk-emendo-gingerbread-glogg-scent',
      'sk-aromageddon-gingerbread-scent',
    ],
  },
  {
    id: 'winter',
    image: 'exp-reindeer-forest',
    slugs: [
      'makia-merino-beanie',
      'makia-martin-beanie',
      'makia-mari-balaclava',
      'halti-kroka-mitten',
      'halti-pehmee-merino-beanie',
      'halti-merino-socks-2pack',
      'halti-viiri-fleece-gloves',
      'north-outdoor-huuru-beanie',
      'north-outdoor-pyry-scarf',
      'north-outdoor-arctic-250-balaclava',
      'north-outdoor-kevo-gloves',
      'nb-moomintroll-mittens',
      'sk-helsingin-villasukkatehdas-wool-socks',
      'iittala-kivi-candleholder',
      'sk-hukka-soapstone-candle',
      'sk-muurla-moomin-enamel-mug-lumipyry',
      'sk-aurora-borealis-reindeer-tealight',
      'arabia-moomin-plates-winter-night',
      'arabia-moomin-plates-winter-fire',
      'sk-muurla-moomin-snowfall-mug',
      'rj-pesonen-beeswax-candle',
      'rj-pesonen-honeycomb-candle',
      'iittala-kastehelmi-tealight',
      'halti-crostie-merino-beanie',
      'halti-vuolle-mohair-beanie',
      'halti-tiilo-mittens',
      'halti-warm-merino-socks',
      'north-outdoor-kaisla-beanie',
      'north-outdoor-polku-neck-tube',
      'north-outdoor-hirsi-socks',
      'north-outdoor-avery-mittens',
      'makia-alvar-beanie',
      'makia-stellar-scarf',
      'makia-freja-mittens',
      'makia-sibelius-beanie',
      'nb-moomintroll-fleece-mittens',
      'nb-moomintroll-chunky-beanie',
      // 7.11.2026: talvi ei ole vain pipoja (Vesa) — takit, laskettelu-asut, talvikengät, villaneuleet
      'makia-glacier-parka',
      'makia-maren-parka',
      'makia-helsinki-parka',
      'makia-else-parka',
      'makia-frost-knit',
      'makia-salla-knit',
      'makia-saarni-knit',
      'makia-siina-knit',
      'halti-ascloud-ski-jacket-women',
      'halti-ascale-ii-ski-jacket-men',
      'halti-carvey-ii-ski-pants-women',
      'halti-carvey-ii-ski-pants-men',
      'halti-kevo-2-winter-boots-men',
      'halti-metso-mid-winter-boots-men',
      'halti-skene-winter-boots-women',
      'halti-sletta-zip-winter-boots-women',
    ],
  },
]

const BY_ID = new Map(THEMES.map((t) => [t.id, t]))

export function themeById(id: string): Theme | undefined {
  return BY_ID.get(id as ThemeId)
}
