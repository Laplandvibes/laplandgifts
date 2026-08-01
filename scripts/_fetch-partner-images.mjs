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
