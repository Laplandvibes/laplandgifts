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
  "exp-aurora-photo": {
    "full": 1600,
    "w": [
      480,
      800
    ]
  },
  "exp-aurora-telescope": {
    "full": 1600,
    "w": [
      480,
      800
    ]
  },
  "exp-aurora": {
    "full": 800,
    "w": [
      480
    ]
  },
  "exp-husky-kennel": {
    "full": 1600,
    "w": [
      480,
      800
    ]
  },
  "exp-husky-selfdrive": {
    "full": 1600,
    "w": [
      480,
      800
    ]
  },
  "exp-husky": {
    "full": 800,
    "w": [
      480
    ]
  },
  "exp-icebreaker": {
    "full": 800,
    "w": [
      480
    ]
  },
  "exp-kids-husky-short": {
    "full": 1600,
    "w": [
      480,
      800
    ]
  },
  "exp-kids-snowpark": {
    "full": 1600,
    "w": [
      480,
      800
    ]
  },
  "exp-korouoma": {
    "full": 800,
    "w": [
      480
    ]
  },
  "exp-nature-park": {
    "full": 1600,
    "w": [
      480,
      800
    ]
  },
  "exp-nature-snowshoe": {
    "full": 1600,
    "w": [
      480,
      800
    ]
  },
  "exp-nature-wildlife": {
    "full": 1600,
    "w": [
      480,
      800
    ]
  },
  "exp-reindeer-farm": {
    "full": 1600,
    "w": [
      480,
      800
    ]
  },
  "exp-reindeer-forest": {
    "full": 1600,
    "w": [
      480,
      800
    ]
  },
  "exp-reindeer": {
    "full": 800,
    "w": [
      480
    ]
  },
  "exp-santa-reindeer": {
    "full": 1600,
    "w": [
      480,
      800
    ]
  },
  "exp-santavillage": {
    "full": 800,
    "w": [
      480
    ]
  },
  "exp-sauna-icehole": {
    "full": 1600,
    "w": [
      480,
      800
    ]
  },
  "exp-sauna-jacuzzi": {
    "full": 1600,
    "w": [
      480,
      800
    ]
  },
  "exp-sauna-smoke": {
    "full": 1600,
    "w": [
      480,
      800
    ]
  },
  "exp-snowhotel": {
    "full": 800,
    "w": [
      480
    ]
  },
  "exp-snowmobile-night": {
    "full": 1600,
    "w": [
      480,
      800
    ]
  },
  "exp-snowmobile-tundra": {
    "full": 1600,
    "w": [
      480,
      800
    ]
  },
  "exp-snowmobile": {
    "full": 800,
    "w": [
      480
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
  "prod-arabia-moomin-figurine-moomintroll": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-arabia-moomin-mug-friendship": {
    "full": 480,
    "w": [
      320
    ]
  },
  "prod-arabia-moomin-mug-snufkin": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-arctic-warriors-nettle-powder": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-arctic-warriors-roseroot-elixir": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-arctic-warriors-spruce-sprout-powder": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-aurora-mini-kuksa": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-aurora-tour-kilpisjarvi": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-emendo-sauna-scents": {
    "full": 615,
    "w": [
      320,
      480
    ]
  },
  "prod-fazer-fazerina": {
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
  "prod-fazer-hazelnut-chocolate": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-fazer-jaffa-orange": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-fazer-light-milk-chocolate": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-fazer-pantteri-salmiakki": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-fazer-super-salmiakki": {
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
  "prod-fiskars-moominpappa-scissors": {
    "full": 480,
    "w": [
      320
    ]
  },
  "prod-fl-elefantti-duvet-set": {
    "full": 900,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-fl-lino-linen-duvet-set": {
    "full": 900,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-fl-reino-bath-towel": {
    "full": 900,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-fl-taistelevat-metsot": {
    "full": 900,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-foodin-chaga-tincture": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-foodin-six-mushroom-blend": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-glass-igloo-night-levi": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-gold-panning-day-inari": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-halti-heatgrid-midlayer": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-halti-hossa-baselayer-men": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-halti-hossa-baselayer-women": {
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
  "prod-halti-merino-socks-2pack": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-halti-pehmee-merino-beanie": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-halti-rockmoon-fleece-hoodie": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-halti-sykli-ski-gloves": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-halti-taival-dx-jacket": {
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
  "prod-halti-viiri-fleece-gloves": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-halva-salmiakkiruutu": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-husky-farm-safari-rovaniemi": {
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
  "prod-kaavi-chaga-chunks": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-kaino-spruce-sprout-sparkling": {
    "full": 800,
    "w": [
      320,
      480,
      640
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
  "prod-leijona-tar-liquorice": {
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
  "prod-makia-form-jacket": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-makia-kontio-hoodie": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-makia-mari-balaclava": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-makia-martin-beanie": {
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
  "prod-makia-moray-zip-knit": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-makia-trademark-hoodie": {
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
  "prod-nb-hattifatteners-cushion": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-nb-hattifatteners-retro-socks": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-nb-kunnas-kalevala-beanie": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-nb-kunnas-kalevala-tote": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-nb-kunnas-santa-mug": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-nb-little-my-beanie": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-nb-little-my-mittens": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-nb-little-my-neckpillow": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-nb-little-my-poster": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-nb-little-my-thermal-bottle": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-nb-moomin-classics-beanie": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-nb-moomin-classics-tee": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-nb-moomin-novels-poster": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-nb-moomintroll-hoodie": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-nb-moomintroll-love-cushion": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-nb-moomintroll-love-socks": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-nb-moomintroll-mittens": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-nb-pippi-tee": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-nb-snufkin-mens-socks": {
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
  "prod-north-outdoor-arctic-250-balaclava": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-north-outdoor-arctic-260-zip-neck": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-north-outdoor-heavyweight-gaiter": {
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
  "prod-north-outdoor-kevo-gloves": {
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
  "prod-north-outdoor-sointu-cardigan": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-omega7-sea-buckthorn-olive-oil": {
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
  },
  "prod-puhdistamo-conifer-extract": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-puhdistamo-instant-chaga": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-reindeer-safari-rovaniemi": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-rento-birch-sauna-honey": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-rento-blueberry-sauna-honey": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-rento-linen-back-scrubber": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-rento-linen-wash-mitt": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-rento-sauna-pillow": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-rento-tar-sauna-soap": {
    "full": 700,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-rj-arctic-warriors-blueberry-powder": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-rj-forestly-mushroom-chips-chili": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-rj-kaino-spruce-sprout-sparkling-075": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-rj-korpihilla-spruce-sprout-sparkling-750": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-rj-nordic-koivu-birch-sap": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-rj-poikain-parhaat-blueberry-lemonade": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-rj-raitaniemi-crowberry-powder": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-rj-raitaniemi-sea-buckthorn-powder": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-rj-yrttipaja-chaga-powder": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-sisu-xylitol-salmiakki": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-sk-arabia-moomin-pitcher-moominhouse": {
    "full": 360,
    "w": [
      320
    ]
  },
  "prod-sk-arabia-moomintroll-mini-figurine": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-sk-arabia-snorkmaiden-mini-figurine": {
    "full": 396,
    "w": [
      320
    ]
  },
  "prod-sk-aromageddon-sauna-scent": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-sk-aurora-borealis-reindeer-tealight": {
    "full": 700,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-sk-emendo-moomin-sauna-seat-cover": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-sk-fasupala-lakritsi": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-sk-fazer-omar-chocolate-bar": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-sk-fazer-salty-suffeli-puffi": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-sk-finland-beanie": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-sk-finland-tube-scarf": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-sk-finnish-flavours-cloudberry-jam": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-sk-halva-salmiakkikalat": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-sk-helsingin-villasukkatehdas-wool-socks": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-sk-hukka-soapstone-candle": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-sk-kouvolan-lakritsi-500g": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-sk-lapin-liha-smoked-reindeer-soup": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-sk-lapin-puukko-gift-box": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-sk-little-my-sauna-cushion": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-sk-loimu-sauna-thermometer": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-sk-marianne-toffee-rae": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-sk-marimekko-unikko-bath-towel": {
    "full": 458,
    "w": [
      320
    ]
  },
  "prod-sk-marimekko-unikko-crossbody": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-sk-marimekko-unikko-hand-towel": {
    "full": 768,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-sk-moomin-chocolate-chip-biscuit-tin": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-sk-moomin-duvet-set-merella": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-sk-moomin-duvet-set": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-sk-muurla-moomin-80v-tray": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-sk-muurla-moomin-bottle-05l-marjat": {
    "full": 515,
    "w": [
      320,
      480
    ]
  },
  "prod-sk-muurla-moomin-bottle-b2": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-sk-muurla-moomin-enamel-mug-lumipyry": {
    "full": 600,
    "w": [
      320,
      480
    ]
  },
  "prod-sk-muurla-moomin-glass-box-yhdessa": {
    "full": 514,
    "w": [
      320,
      480
    ]
  },
  "prod-sk-muurla-moomin-lantern-tahtihetki": {
    "full": 514,
    "w": [
      320,
      480
    ]
  },
  "prod-sk-novita-wonder-wool": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-sk-paulig-cafe-new-york-beans": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-sk-poikain-parhaat-freeze-dried-blueberry": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-sk-poikain-parhaat-puolukka": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-sk-rento-birch-whisk": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-sk-rento-pino-sauna-seat-cover": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-sk-rento-sauna-hat": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-sk-suomi-hockey-jersey": {
    "full": 360,
    "w": [
      320
    ]
  },
  "prod-sk-suomi-propeller-cap": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-sk-tyrkisk-peber-chewy": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-sk-tyrkisk-peber-sour-foams": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  },
  "prod-sk-vaasan-ruispalat-5pack": {
    "full": 800,
    "w": [
      320,
      480,
      640
    ]
  }
}
