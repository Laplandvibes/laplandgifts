// GENEROITU — älä muokkaa käsin.
// Lähde: scripts/build-image-variants.mjs. Aja se uudelleen kun kuvia muuttuu.
export interface ImageVariant {
  /** Alkuperäisen tiedoston leveys pikseleinä. */
  full: number
  /** Levyllä olevien pienempien varianttien leveydet. */
  w: number[]
}

export const IMAGE_VARIANTS: Record<string, ImageVariant> = {
  "cat-artisan-crafts": {
    "full": 800,
    "w": [
      480
    ]
  },
  "cat-clothing": {
    "full": 1200,
    "w": [
      480,
      800
    ]
  },
  "cat-design": {
    "full": 1200,
    "w": [
      480,
      800
    ]
  },
  "cat-gift-experiences": {
    "full": 800,
    "w": [
      480
    ]
  },
  "cat-pod-merch": {
    "full": 800,
    "w": [
      480
    ]
  },
  "cat-superfoods": {
    "full": 1200,
    "w": [
      480,
      800
    ]
  },
  "cat-treats": {
    "full": 1200,
    "w": [
      480,
      800
    ]
  },
  "hero-shop": {
    "full": 2400,
    "w": [
      800,
      1200,
      1600
    ]
  },
  "prod-aarikka-pore-glass-vase": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-aarikka-prinsessa-candleholder": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-arctic-power-berries-blueberry-powder": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-arctic-power-berries-sea-buckthorn-powder": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-fazer-geisha-chocolate-bar": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-finnish-flavours-palalaku-salmiakki": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-halti-kroka-mitten": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-halti-tokoi-dx-jacket": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-halti-tunturit-ski-socks": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-iittala-aalto-vase-160": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-iittala-kivi-candleholder": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-kaapa-mushrooms-pakuri-powder": {
    "full": 512,
    "w": [
      320,
      480
    ]
  },
  "prod-kuivalihakundi-beef-jerky-smoked": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-kuivalihakundi-poro-jerky-200g": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-kuivalihakundi-poro-jerky": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-kupilka-bowl-55": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-kupilka-classic-cup-21": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-kupilka-cutlery-set": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-lapuan-kankurit-kaamos-blanket": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-lapuan-kankurit-poro-towel": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-makia-aurora-hoodie": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-makia-merino-beanie": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-marimekko-unikko-mug": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-marttiini-ilves-131": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-marttiini-lapinleuku-255": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-marttiini-napapiirin-puukko": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-meritalo-tyrnihillo": {
    "full": 750,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-moomin-blue-love-mug": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-moomin-mystical-forest-tumblers": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-moomin-mystical-forest-wool-throw": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-nordqvist-cranberry-toffee-tea": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-nordqvist-moomin-forest-berry-tea": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-north-outdoor-honka-jumper": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-north-outdoor-huuru-beanie": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-north-outdoor-pyry-scarf": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-pentik-posio-mug": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-pentik-tunturiretki-studio-dish": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  }
}
