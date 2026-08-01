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
  "prod-finnish-flavours-palalaku-salmiakki": {
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
  "prod-kaapa-mushrooms-pakuri-powder": {
    "full": 512,
    "w": [
      320,
      480
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
  }
}
