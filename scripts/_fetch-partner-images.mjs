/**
 * Hakee kumppanien omat tuotekuvat ja muuntaa ne sivuston kuvapareiksi.
 *
 * Lähde on aina kumppanin tuotesivun og:image tai tuotegallerian pääkuva:
 * kuva jonka kauppa itse tarjoaa jaettavaksi. Alkuperäinen tallennetaan
 * `raw/`-hakemistoon (gitignoroitu työhakemisto), julkaistava pari menee
 * `public/images/prod-<slug>.{webp,avif}`, leveys 800.
 *
 * Aja tämän jälkeen `node scripts/build-image-variants.mjs`, joka tekee
 * responsiiviset 320/480/640-variantit ja päivittää src/data/imageVariants.ts.
 *
 * Käyttö:
 *   node scripts/_fetch-partner-images.mjs            # kaikki puuttuvat
 *   node scripts/_fetch-partner-images.mjs slug slug  # vain nämä
 *
 * JOBS: [tuoteslug, kuvan URL]. Slug on sama kuin products.ts:n slug, jolloin
 * kohdetiedosto on prod-<slug>. Rivit jätetään paikoilleen kun erä on ajettu,
 * jotta seuraava agentti näkee mistä kukin kuva on peräisin.
 */
import sharp from 'sharp'
import fs from 'node:fs'
import path from 'node:path'

const RAW = 'raw'
const OUT = 'public/images'
const WIDTH = 800
const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'

/** @type {Array<[string, string]>} */
const JOBS = [
  // ── handicrafts, erä 2026-08-01 ────────────────────────────────────────────
  [
    'kupilka-classic-cup-21',
    'https://scandinavianoutdoor.imgix.net/dynamic/productimages/sizes/full/b01414a9-313d-47af-8080-359c5ab703db.jpeg?w=1200&auto=format',
  ],
  [
    'kupilka-bowl-55',
    'https://scandinavianoutdoor.imgix.net/dynamic/productimages/sizes/full/a6fe439b-da27-493a-8873-361ecd4bcb72.jpeg?w=1200&auto=format',
  ],
  [
    'kupilka-cutlery-set',
    'https://scandinavianoutdoor.imgix.net/dynamic/productimages/sizes/full/47ac221f-032c-4010-b3cd-c7958c14c1c5.jpeg?w=1200&auto=format',
  ],
  [
    'lapuan-kankurit-poro-towel',
    'https://lapuankankurit.fi/wp-content/uploads/2024/09/lapuankankurit_poro_towel_linen-green.jpg',
  ],
  [
    'lapuan-kankurit-kaamos-blanket',
    'https://lapuankankurit.fi/wp-content/uploads/2025/01/lapuankankurit_kaamos_blanket_100x150cm_white-black.jpg',
  ],
  [
    'pentik-posio-mug',
    'https://cdn.shopify.com/s/files/1/0419/8554/0246/files/md5-98d9f1662134276600aa9fc8ad654ba5-12JAO050P41_1.png?width=1200',
  ],
  [
    'pentik-tunturiretki-studio-dish',
    'https://cdn.shopify.com/s/files/1/0419/8554/0246/files/md5-86aae2231427011919e22b2680816f5d-12ST353TT61_1.png?width=1200',
  ],

  // ── design, erä 2026-08-01 ────────────────────────────────────────────────
  [
    'iittala-aalto-vase-160',
    'https://www.nordicnest.com/assets/blobs/iittala-alvar-aalto-vase-savoy-clear-160-mm/999-01_1_ProductImageMain-719c949ad5.png',
  ],
  [
    'iittala-kivi-candleholder',
    'https://www.nordicnest.com/assets/blobs/iittala-kivi-candle-holder-60-mm-pine-green/636883-01_1_ProductImageMain-5b488172fb.png',
  ],
  [
    'marimekko-unikko-mug',
    'https://www.nordicnest.com/assets/blobs/marimekko-unikko-mug-25-cl-white-dark-green-beige-light-sand/666236-01_01_ProductImageMain-4e10d7c021.png',
  ],
  [
    'aarikka-prinsessa-candleholder',
    'https://cdn.shopify.com/s/files/1/1295/6161/files/B08633_Prinsessa-kynttilanjalka_U300K.jpg?width=1200',
  ],
  [
    'aarikka-pore-glass-vase',
    'https://cdn.shopify.com/s/files/1/1295/6161/files/WEB_B08706_PORE_LASIMALJAKKO_PIENI_U999.jpg?width=1200',
  ],

  // ── clothing, erä 2026-08-01 ──────────────────────────────────────────────
  [
    'halti-kroka-mitten',
    'https://halti.com/cdn/shop/files/0840757_P99_KrokaIImitten_main.jpg?v=1765356553&width=1200',
  ],
  [
    'halti-tunturit-ski-socks',
    'https://halti.com/cdn/shop/files/0870471_G36_Tunturitskisocks_main.jpg?v=1761286168&width=1200',
  ],
  [
    'north-outdoor-huuru-beanie',
    'https://northoutdoor.com/cdn/shop/files/N34232B13_northoutdoor-merino-wool_1_ee0e51f2-e42d-401b-b7ab-1320fc18c618.png?v=1764006119&width=1200',
  ],
  [
    'north-outdoor-pyry-scarf',
    'https://northoutdoor.com/cdn/shop/files/N34507G03_northoutdoor-merino-wool-clothing_1.png?v=1754408704&width=1200',
  ],
  [
    'north-outdoor-honka-jumper',
    'https://northoutdoor.com/cdn/shop/files/N11733B13_northoutdoor-merino-wool-clothing-m12_1.jpg?v=1754412687&width=1200',
  ],

  // ── treats, erä 2026-08-01 ────────────────────────────────────────────────
  [
    'kuivalihakundi-poro-jerky-200g',
    'https://cdn.shopify.com/s/files/1/1004/1819/1689/files/2025_5-reindeer-jerky-200g.jpg?v=1774433121&width=1200',
  ],
  [
    'kuivalihakundi-beef-jerky-smoked',
    'https://cdn.shopify.com/s/files/1/1004/1819/1689/files/2023_4-smoked-50g-vk_d6d14a87-d5bd-4cf9-9251-38558d4c0abf.jpg?v=1774433473&width=1200',
  ],
  [
    'fazer-geisha-chocolate-bar',
    'https://cdn.shopify.com/s/files/1/0608/9123/4523/files/06416453015562_H1N1.jpg?v=1710934050&width=1200',
  ],
  [
    'nordqvist-moomin-forest-berry-tea',
    'https://cdn.shopify.com/s/files/1/0518/9530/4385/files/Muumi_mets_marjainen_hibiskustee.png?v=1767008677&width=1200',
  ],
  [
    'nordqvist-cranberry-toffee-tea',
    'https://cdn.shopify.com/s/files/1/0518/9530/4385/files/karpalo-suolakinuski-pussitee-uutuus-nordqvist-teekauppa-967.jpg?v=1761622148&width=1200',
  ],

  // ── superfoods, erä 2026-08-01 ────────────────────────────────────────────
  [
    'arctic-warriors-spruce-sprout-powder',
    'https://arcticwarriors.fi/wp-content/uploads/2023/09/AW_KUUSENKERKKAJAUHE_40_no_BG.png',
  ],
  [
    'arctic-warriors-nettle-powder',
    'https://arcticwarriors.fi/wp-content/uploads/2024/03/AW-pakkaukset-nokkonen-150g.png',
  ],
  [
    'arctic-warriors-roseroot-elixir',
    'https://arcticwarriors.fi/wp-content/uploads/2023/10/AW-pullot-ruusujuuri-nokkoseliksiiri-100ml.png',
  ],
  [
    'omega7-sea-buckthorn-olive-oil',
    'https://www.ruohonjuuri.fi/cdn/shop/files/Omega_tyrni_oliivioljy_150ml_lippu.jpg?v=1780470364&width=1200',
  ],
  // 🔴 Pesosen tattarikukkahunaja jäi pois: kumppanin ainoa tuotekuva on
  // 241 x 301 px, eli sitä ei saa 800 pikselin korttikuvaksi ilman venytystä.
  [
    'kaino-spruce-sprout-sparkling',
    'https://www.ruohonjuuri.fi/cdn/shop/files/edd12775157c79a540b46ef6ee62970b.png?v=1775047394&width=1200',
  ],
]

const only = new Set(process.argv.slice(2))
fs.mkdirSync(RAW, { recursive: true })

for (const [slug, url] of JOBS) {
  if (only.size && !only.has(slug)) continue
  const name = `prod-${slug}`
  if (fs.existsSync(path.join(OUT, `${name}.webp`)) && !only.has(slug)) {
    console.log(`ohitettu (on jo) ${name}`)
    continue
  }
  const res = await fetch(url, { headers: { 'user-agent': UA, accept: 'image/*,*/*' } })
  if (!res.ok) {
    console.error(`HTTP ${res.status} ${url}`)
    process.exitCode = 1
    continue
  }
  const buf = Buffer.from(await res.arrayBuffer())
  const ext = (res.headers.get('content-type') || '').includes('png') ? 'png' : 'jpg'
  fs.writeFileSync(path.join(RAW, `${slug}.${ext}`), buf)

  const base = sharp(buf).resize({ width: WIDTH, withoutEnlargement: true })
  await base.clone().webp({ quality: 82 }).toFile(path.join(OUT, `${name}.webp`))
  await base.clone().avif({ quality: 55 }).toFile(path.join(OUT, `${name}.avif`))
  const meta = await sharp(path.join(OUT, `${name}.webp`)).metadata()
  console.log(`${name}  ${meta.width}x${meta.height}`)
}
