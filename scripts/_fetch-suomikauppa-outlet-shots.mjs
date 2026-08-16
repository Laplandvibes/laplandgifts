/**
 * Suomikauppa-outlet-mainoksen tuotekuvat: haku kaupan omasta katalogista ja
 * normalisointi yhteen mittaan.
 *
 * Aja:  node scripts/_fetch-suomikauppa-outlet-shots.mjs
 * Sitten: node scripts/build-image-variants.mjs   (variantit + manifesti)
 *
 * 🔴 MIKSI TÄMÄ SKRIPTI ON OLEMASSA (Vesa 2026-08-16: "tuotteiden tausta on
 * todella poor"). Kolme kuvaa oli poimittu käsin 10.8., ja ne olivat keskenään
 * eri lajia:
 *
 *   karl-fazer      tuotelaatikko 800x308, muste 38 %, OSUI vasempaan JA
 *                   oikeaan reunaan — ei packshot vaan leveän valokuvan rajaus,
 *                   jossa suklaalevy jatkui kuvan ulkopuolelle
 *   geisha-robe     tuotelaatikko 298x617, muste 21 %  — hukkui valkoiseen
 *   remix-salmiakki tuotelaatikko 687x746, muste 66 %  — täytti ruudun
 *
 * Musteen suhde 21 % vs 66 % on 3,1-kertainen. Vierekkäin valkoisilla laatoilla
 * se lukee kolmena eri kokoisena kuvana eikä tuotevalikoimana, ja rajautunut
 * valokuva keskellä packshotteja lukee rikkinäiseltä.
 *
 * 🔴🔴 SAMALLA PALJASTUI ISOMPI VIKA: mainos naulasi kolme tuotetta osiosta,
 * joka vaihtuu viikoittain. 16.8. mitattuna `/collections/tarjoukset` (244
 * tuotetta) EI enää sisältänyt Remix 300 g -pussia lainkaan, eikä yksittäistä
 * 180 g Karl Fazer -levyä (vain 4-PACK ja 23 kpl LAATIKKO). Vain Geisha-
 * aamutakki oli yhä tarjolla. Komponentin yläkommentti varoi vanhentuvia
 * HINTOJA, mutta samat kierrot vanhentavat myös TUOTTEET.
 *
 * ⇒ Aja tämä skripti uudelleen aina kun mainosta katsotaan, ja tarkista
 *   `puuttuu`-rivit: jos tuote on pudonnut osiosta, valitse tilalle toinen.
 *   Kuvan saa käyttää vain jos tuote on osiossa juuri nyt.
 *
 * VALINTASÄÄNTÖ (mitattu, ei makuasia): kelpaa vain packshot, jonka NELJÄ
 * kulmaa ovat valkoiset eikä tuotelaatikko osu kuvan reunaan. Muuten kyseessä
 * on lifestyle-rajaus, joka ei istu valkoiselle laatalle. `--audit` listaa
 * osiosta kaikki ehdokkaat, jotka läpäisevät tämän portin.
 *
 * NORMALISOINTI: tuotelaatikko skaalataan niin että sen PITKÄ SIVU on 78 %
 * kanvaasista, ja se keskitetään valkoiselle neliölle. Pitkä sivu eikä pinta-ala,
 * koska pinta-alan tasaaminen litistäisi ison pussin ja turvottaisi kapean
 * levyn — pitkä sivu säilyttää tuotteiden oikeat mittasuhteet ja antaa silti
 * yhtenäisen rytmin. Kanvaasi mitoitetaan niin ettei tuotetta koskaan
 * suurenneta yli 1.0x (aamutakin lähde on vain 640 px).
 */
import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const COLLECTION = 'https://suomikauppa.fi/collections/tarjoukset/products.json?limit=250'
const OUT_DIR = path.join(process.cwd(), 'public', 'images')
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/126 Safari/537.36'

/** Kuvan osuus kanvaasista. */
const FILL = 0.78
/** Ylin kanvaasikoko; laatta renderöityy ~150 CSS-px eli 450 px @3x. */
const MAX_CANVAS = 800
/** "Muste" = mikä tahansa paperinvalkoista tummempi pikseli. */
const INK = 244

/** Mainoksessa näytettävät tuotteet. Nimi = tarkka otsikko kaupan katalogissa. */
const PICKS = [
  { slug: 'prod-sk-outlet-karl-fazer', match: /^Karl Fazer maitosuklaalevy 180g 4-PACK/i },
  { slug: 'prod-sk-outlet-geisha-robe', match: /^Geisha aamutakki LIMITED EDITION/i },
  { slug: 'prod-sk-outlet-dumle-moussemuna', match: /^Fazer Dumle Moussemuna/i },
]

const audit = process.argv.includes('--audit')

/** Tuotelaatikko + kulmatesti. Palauttaa myös raakadatan, jottei kuvaa pureta kahdesti. */
async function inspect(buf) {
  const { data, info } = await sharp(buf).ensureAlpha().raw().toBuffer({ resolveWithObject: true })
  const { width: w, height: h, channels: ch } = info
  let minX = w, minY = h, maxX = -1, maxY = -1, ink = 0
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * ch
      if (data[i] < INK || data[i + 1] < INK || data[i + 2] < INK) {
        ink++
        if (x < minX) minX = x
        if (x > maxX) maxX = x
        if (y < minY) minY = y
        if (y > maxY) maxY = y
      }
    }
  }
  if (maxX < 0) return null
  const at = (x, y) => { const i = (y * w + x) * ch; return data[i] > 246 && data[i + 1] > 246 && data[i + 2] > 246 }
  const whiteCorners = [at(3, 3), at(w - 4, 3), at(3, h - 4), at(w - 4, h - 4)].filter(Boolean).length
  return {
    w, h,
    box: { left: minX, top: minY, width: maxX - minX + 1, height: maxY - minY + 1 },
    inkPct: +(ink / (w * h) * 100).toFixed(1),
    whiteCorners,
    touchesEdge: minX <= 1 || maxX >= w - 2 || minY <= 1 || maxY >= h - 2,
  }
}

/** Shopifyn CDN katkoo ajoittain yhteyden (ECONNRESET); yksi yritys ei riitä. */
async function get(url, tries = 4) {
  let last
  for (let i = 0; i < tries; i++) {
    try {
      const r = await fetch(url, { headers: { 'User-Agent': UA } })
      if (!r.ok) throw new Error(`${r.status} ${url}`)
      return Buffer.from(await r.arrayBuffer())
    } catch (e) {
      last = e
      await new Promise((res) => setTimeout(res, 400 * (i + 1)))
    }
  }
  throw last
}

/** Sama kuva haetaan sekä mittaukseen että leikkaukseen — haetaan kerran. */
const cache = new Map()
async function getCached(url) {
  if (!cache.has(url)) cache.set(url, await get(url))
  return cache.get(url)
}

const catalogue = JSON.parse((await get(COLLECTION)).toString('utf8'))
console.log(`tarjousosiossa nyt: ${catalogue.products.length} tuotetta\n`)

if (audit) {
  console.log('kelvolliset packshotit (4 valkoista kulmaa, ei reunaan):\n')
  for (const p of catalogue.products) {
    const im = p.images[0]
    if (!im || im.width < 800) continue
    const a = im.width / im.height
    if (a < 0.92 || a > 1.09) continue
    let r
    try { r = await inspect(await getCached(im.src)) } catch { continue }
    if (!r || r.whiteCorners < 4 || r.touchesEdge) continue
    console.log(`  ${String(im.width + 'x' + im.height).padEnd(11)} muste ${String(r.inkPct).padStart(5)} %  ${p.title}`)
  }
  process.exit(0)
}

let missing = 0
for (const pick of PICKS) {
  const p = catalogue.products.find((x) => pick.match.test(x.title))
  if (!p) {
    console.log(`🔴 puuttuu osiosta: ${pick.match} — valitse tilalle toinen tuote (--audit listaa ehdokkaat)`)
    missing++
    continue
  }
  const src = p.images[0].src
  const info = await inspect(await getCached(src))
  if (!info) { console.log(`🔴 tyhjä kuva: ${p.title}`); missing++; continue }
  if (info.whiteCorners < 4) {
    console.log(`🔴 ei packshot (valkoisia kulmia ${info.whiteCorners}/4): ${p.title}`)
    missing++
    continue
  }

  // Kanvaasi niin ettei tuotetta suurenneta: pitkä sivu on FILL osuus kanvaasista.
  const longSide = Math.max(info.box.width, info.box.height)
  const canvas = Math.min(MAX_CANVAS, Math.round(longSide / FILL))
  const target = Math.round(canvas * FILL)
  const scale = target / longSide
  const pw = Math.max(1, Math.round(info.box.width * scale))
  const ph = Math.max(1, Math.round(info.box.height * scale))

  const product = await sharp(await getCached(src))
    .extract(info.box)
    .resize(pw, ph, { fit: 'fill' })
    .toBuffer()

  const out = path.join(OUT_DIR, `${pick.slug}.webp`)
  await sharp({ create: { width: canvas, height: canvas, channels: 3, background: '#ffffff' } })
    .composite([{ input: product, left: Math.round((canvas - pw) / 2), top: Math.round((canvas - ph) / 2) }])
    .webp({ quality: 90 })
    .toFile(out)

  console.log(
    `✅ ${pick.slug.padEnd(34)} lähde ${String(info.w + 'x' + info.h).padEnd(11)} ` +
    `laatikko ${String(info.box.width + 'x' + info.box.height).padEnd(11)} → kanvaasi ${canvas} , tuote ${pw}x${ph} (${Math.round(scale * 100)} %)  ${p.title}`
  )
}

if (missing) {
  console.log(`\n🔴 ${missing} tuotetta ei kelvannut — mainosta EI saa julkaista ennen kuin ne on korvattu.`)
  process.exit(1)
}
console.log('\nAja seuraavaksi: node scripts/build-image-variants.mjs')
