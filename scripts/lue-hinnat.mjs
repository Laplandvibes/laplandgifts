#!/usr/bin/env node
/**
 * laplandgiftsin luettelon hinnat kaupoista: viikoittainen luku (Vesa 20.11.2026: "Luku viikoittain").
 *
 * Miksi: luettelon hinta näkyy sivulla vain enintään 10 päivää lukupäivästä (src/lib/hinnanTuoreus.ts).
 * Ilman viikoittaista lukua hinnat katoavat sivulta. Viikkoajo: Windowsin ajastin "LV Gifts Hinnat" (to 07.40, uusinnat
 * 11.40 ja 15.40) Vesan koneella, C:/Users/pesol/scripts/gifts-hinnat/gifts-hinnat.mjs: ajaa tämän omassa kloonissa,
 * testit + build, committaa luettelon ja pushaa (CI julkaisee). Posti info@:iin vain poikkeamista.
 *
 * Mitä tekee:
 *   - lukee jokaisen tuotteen hinnan ja saatavuuden kaupan omasta datasta OIKEALLA SELAIMELLA (Playwright), ei curlilla:
 *       Shopify-kaupat: <tuotesivu>.js (variantit) · Nordic Nest, Partioaitta, Scandinavian Outdoor, Arctic Warriors
 *       (+ WooCommercen hintalohkon yliviivattu hinta, kun JSON-LD:ssä sitä ei ole):
 *       tuotesivun JSON-LD · Marttiini: [itemprop=price] · Elämyslahjat: dataLayerin view_item-hinta.
 *   - 10 s välein samaan kauppaan (Shopify antaa 429 nopealle kyselylle), kaupat rinnakkain.
 *   - hinta = NORMAALIHINTA (Vesan päätös 19.11.: "Normaalihinta, julkaise"): alessa olevasta otetaan
 *     compare_at / yliviivattu hinta, ei alennushintaa. Useasta saatavilla olevasta variantista halvin.
 *   - --kirjoita: päivittää src/data/products.ts:n priceFrom + priceCheckedAt tuotteille, joiden luku onnistui.
 *     Loppu / 404 / lukematon / epäilyttävä (hinta muuttui yli 60 %) jää ennalleen ⇒ hinta katoaa sivulta
 *     10 päivän kuluttua itsestään, ja raportti listaa ne Vesan päätettäviksi (korvaaja vaatii hänen hyväksyntänsä).
 *
 * Käyttö:
 *   node scripts/lue-hinnat.mjs [--repo <laplandgifts-työkopio>] [--kirjoita] [--vain=suomikauppa,halti]
 *        [--slug=slug,slug] [--raja=5] [--raportti=<polku.json>] [--hyvaksy=slug,slug]
 * Playwright tulee monorepon juuresta (C:/Users/pesol/projects/laplandvibes/node_modules): tämä on Vesan koneen työkalu.
 * Poistumiskoodi 0 = ajo valmis (raportti kertoo poikkeamat), 2 = käyttövirhe, 3 = yli 20 % luvuista epäonnistui
 * (verkko- tai sivustomuutos: älä julkaise, tutki).
 */
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL, fileURLToPath } from 'node:url'

const args = process.argv.slice(2)
const arvo = (n) => (args.find((a) => a.startsWith(`--${n}=`)) || '').split('=').slice(1).join('=') || (args.includes(`--${n}`) ? (args[args.indexOf(`--${n}`) + 1] || '') : '')
const TAMA = path.dirname(fileURLToPath(import.meta.url))
const repo = arvo('repo') || path.resolve(TAMA, '..')
const kirjoita = args.includes('--kirjoita')
const vain = arvo('vain') ? arvo('vain').split(',') : null
const raja = Number(arvo('raja') || 0)
// --hyvaksy=slug,slug: yli 60 %:n muutos on tarkistettu kaupan sivulta käsin ja saa mennä luetteloon.
const hyvaksy = new Set(arvo('hyvaksy') ? arvo('hyvaksy').split(',') : [])
if (!repo || !fs.existsSync(path.join(repo, 'src/data/products.ts'))) {
  console.error('käyttö: --repo <laplandgifts-työkopio> [--kirjoita]')
  process.exit(2)
}
const pw = ['C:/Users/pesol/projects/laplandvibes/node_modules/playwright/index.mjs', path.join(repo, 'node_modules/playwright/index.mjs')].find((x) => fs.existsSync(x))
if (!pw) { console.error('Playwright puuttuu (monorepon juuren node_modules)'); process.exit(2) }
const { chromium } = await import(pathToFileURL(pw).href)
const productsFile = path.join(repo, 'src/data/products.ts')
const { PRODUCTS } = await import(pathToFileURL(productsFile).href + `?t=${Date.now()}`)
const tanaan = new Date().toISOString().slice(0, 10)
const raportti = arvo('raportti') || path.join(repo, '..', `gifts-hinnat-${tanaan}.json`)
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const SHOPIFY = new Set(['suomikauppa', 'halti', 'ruohonjuuri', 'makia', 'nordicbuddies', 'northoutdoor', 'kuivalihakundi', 'finlayson', 'pentik'])
const round2 = (n) => Math.round(n * 100) / 100

async function lueShopify(page, url) {
  const u = new URL(url)
  const variantti = u.searchParams.get('variant')
  const js = `${u.origin}${u.pathname.replace(/\/$/, '')}.js`
  const r = await page.goto(js, { waitUntil: 'domcontentloaded', timeout: 60000 })
  const st = r ? r.status() : 0
  if (st === 404) return { tila: '404' }
  if (st !== 200) return { tila: 'ei luettu', syy: `HTTP ${st}` }
  let j
  try { j = JSON.parse(await page.evaluate(() => document.body.innerText)) } catch { return { tila: 'ei luettu', syy: 'ei JSONia' } }
  let vs = j.variants || []
  if (variantti) vs = vs.filter((v) => String(v.id) === variantti)
  const saatavilla = vs.filter((v) => v.available)
  if (!saatavilla.length) return { tila: 'loppu' }
  // Hävikki-erä (Suomikauppa: lyhyt parasta ennen -päiväys) on oikea myyntihinta, jolla erä päättyy itse:
  // luettelo näyttää sen (Palalaku 15.11.2026). Muu ale ⇒ normaalihinta (Vesa 19.11.: "Normaalihinta, julkaise").
  const havikki = [].concat(j.tags || []).some((t) => /h[äa]vikki/i.test(String(t)))
  if (havikki) return { tila: 'ok', hinta: round2(Math.min(...saatavilla.map((v) => v.price / 100))), ale: 'hävikki' }
  const normaali = saatavilla.map((v) => Math.max(v.price, v.compare_at_price || 0) / 100)
  const ale = saatavilla.some((v) => (v.compare_at_price || 0) > v.price)
  return { tila: 'ok', hinta: round2(Math.min(...normaali)), ale }
}

async function lueSivu(page, url, kauppa) {
  const r = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 })
  const st = r ? r.status() : 0
  if (st === 404) return { tila: '404' }
  if (st >= 400) return { tila: 'ei luettu', syy: `HTTP ${st}` }
  await page.waitForTimeout(4000)
  const d = await page.evaluate((kauppa) => {
    const offers = []
    for (const s of document.querySelectorAll('script[type="application/ld+json"]')) {
      try {
        const j = JSON.parse(s.textContent)
        const arr = Array.isArray(j) ? j : j['@graph'] || [j]
        for (const x of arr) if (/Product/.test(String(x['@type']))) offers.push(...[].concat(x.offers || []))
      } catch {}
    }
    const itemprop = [...document.querySelectorAll('[itemprop="price"]')].map((m) => m.getAttribute('content') || m.textContent).filter(Boolean)
    // WooCommerce (Arctic Warriors): JSON-LD antaa alennushinnan ilman yliviivattua hintaa (nokkosjauhe 26.11.2026:
    // Black Friday 26 €, normaali 52 €). Päätuotteen hintalohkon <del> = normaalihinta, <ins> tai muu summa = nykyinen.
    const wooLohko = document.querySelector('.wp-block-woocommerce-product-price, .summary .price')
    const summa = (el) => (el ? (el.querySelector('bdi') || el).textContent.replace(/[^\d,.]/g, '') : null)
    const woo = wooLohko && wooLohko.querySelector('del')
      ? {
          normaali: summa(wooLohko.querySelector('del .woocommerce-Price-amount')),
          nyt: summa(wooLohko.querySelector('ins .woocommerce-Price-amount') || [...wooLohko.querySelectorAll('.woocommerce-Price-amount')].find((a) => !a.closest('del'))),
        }
      : null
    let dl = null
    for (const e of window.dataLayer || []) if (e && e.event === 'view_item' && e.ecommerce && e.ecommerce.items && e.ecommerce.items[0]) dl = e.ecommerce.items[0]
    return { offers, itemprop, woo, dl: dl ? { price: dl.price, discount: dl.discount || 0 } : null }
  }, kauppa)
  const num = (x) => (x == null ? NaN : Number(String(x).replace(',', '.')))
  if (kauppa === 'elamyslahjat') {
    if (!d.dl || !Number.isFinite(num(d.dl.price))) return { tila: 'ei luettu', syy: 'ei view_item-hintaa' }
    return { tila: 'ok', hinta: round2(num(d.dl.price) + num(d.dl.discount || 0)), ale: num(d.dl.discount) > 0 }
  }
  if (kauppa === 'marttiini') {
    const h = num(d.itemprop[0])
    return Number.isFinite(h) ? { tila: 'ok', hinta: round2(h), ale: false } : { tila: 'ei luettu', syy: 'ei itemprop-hintaa' }
  }
  const u = new URL(url)
  const variantId = u.searchParams.get('variantId')
  let o = d.offers
  if (variantId) { const m = o.filter((x) => String(x.url || '').includes(variantId)); if (m.length) o = m }
  if (!o.length) return { tila: 'ei luettu', syy: 'ei JSON-LD-tarjousta' }
  const x = o[0]
  const saat = String(x.availability || '')
  if (/OutOfStock|SoldOut|Discontinued/i.test(saat)) return { tila: 'loppu' }
  const specs = [].concat(x.priceSpecification || [])
  const yliviivattu = specs.find((s) => /Strikethrough/i.test(String(s.priceType || '')))
  const perus = specs.find((s) => !/Strikethrough/i.test(String(s.priceType || '')))
  const h = num(yliviivattu?.price ?? perus?.price ?? x.price ?? x.lowPrice)
  if (!Number.isFinite(h)) return { tila: 'ei luettu', syy: 'ei hintaa tarjouksessa' }
  // Yliviivattu hinta sivulla, kun JSON-LD:ssä sitä ei ole: kelpaa vain, jos lohkon nykyinen summa = JSON-LD:n hinta
  // (sama tuote, ei viereisen tuotteen lohko) ja yliviivattu on sitä suurempi.
  if (!yliviivattu && d.woo) {
    const normaali = num(d.woo.normaali)
    const nyt = num(d.woo.nyt)
    if (Number.isFinite(normaali) && Number.isFinite(nyt) && Math.abs(nyt - h) < 0.01 && normaali > h) return { tila: 'ok', hinta: round2(normaali), ale: true }
  }
  return { tila: 'ok', hinta: round2(h), ale: Boolean(yliviivattu) }
}

const slugit = arvo('slug') ? arvo('slug').split(',') : null
const tuotteet = PRODUCTS.filter((p) => (!vain || vain.includes(p.partnerId)) && (!slugit || slugit.includes(p.slug)))
const kaupoittain = {}
for (const p of tuotteet) (kaupoittain[p.partnerId] ||= []).push(p)
if (raja) for (const k of Object.keys(kaupoittain)) kaupoittain[k] = kaupoittain[k].slice(0, raja)

// Adtractionin tuotesyöte (kaupan virallinen affiliate-data; ladataan Adtractionin palvelimelta, ei kaupasta).
// Partioaitan sivu antaa koneelle yhden tuotesivun istuntoa kohti: toinen haku samassa selaimessa saa 403:n
// (reCAPTCHA + Cloudflare, mitattu 26.11.2026). Estoa ei kierretä: syötteessä olevat tuotteet luetaan syötteestä, ja
// kaupan sivulta haetaan vain syötteestä puuttuvat (26.11. luukuksa syötteessä, isokuksa ei).
const SYOTTEET = {
  partioaitta: 'https://adtraction.com/productfeed.htm?type=feed&format=XML&encoding=UTF8&epi=0&zip=0&cdelim=tab&tdelim=singlequote&sd=0&flat=0&apid=1465938053&asid=2086870803&pfid=2195',
}
const urlAvain = (u) => String(u).replace(/[?#].*$/, '').replace(/\/$/, '').toLowerCase()
async function lataaSyote(url) {
  try {
    const r = await fetch(url, { signal: AbortSignal.timeout(120_000) })
    if (!r.ok) return null
    const xml = await r.text()
    const kentta = (blokki, nimi) => (blokki.match(new RegExp(`<${nimi}>([^<]*)</${nimi}>`)) || [])[1]
    const m = new Map()
    for (const blokki of xml.split('<product>').slice(1)) {
      const u = kentta(blokki, 'ProductUrl')
      if (u) m.set(urlAvain(u.replace(/&amp;/g, '&')), { hinta: Number(kentta(blokki, 'Price')), alkup: Number(kentta(blokki, 'OriginalPrice')), varastossa: kentta(blokki, 'Instock') })
    }
    return m.size ? m : null
  } catch {
    return null
  }
}
function lueSyotteesta(x) {
  if (!x || !Number.isFinite(x.hinta)) return null
  if (String(x.varastossa).toLowerCase() !== 'yes') return { tila: 'loppu', lahde: 'syöte' }
  const normaali = Number.isFinite(x.alkup) && x.alkup > x.hinta ? x.alkup : x.hinta
  return { tila: 'ok', hinta: round2(normaali), ale: normaali > x.hinta, lahde: 'syöte' }
}
const syotteet = {}
for (const k of Object.keys(SYOTTEET)) if (kaupoittain[k]) syotteet[k] = await lataaSyote(SYOTTEET[k])

// Ohimenevä = 429, 5xx tai heitetty virhe (aikaraja, verkko). 403 on kaupan kieltäytyminen: sitä ei toisteta.
const ohimeneva = (r) => r.tila === 'ei luettu' && (/HTTP (429|5\d\d)/.test(r.syy || '') || r.heitetty)

const browser = await chromium.launch({ headless: true })
const ctx = await browser.newContext({
  userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
  locale: 'fi-FI',
})
const tulokset = {}
await Promise.all(
  Object.entries(kaupoittain).map(async ([kauppa, lista]) => {
    const page = await ctx.newPage()
    for (const p of lista) {
      let r = lueSyotteesta(syotteet[kauppa]?.get(urlAvain(p.partnerProductUrl)))
      // Kone yrittää itse ohimenevässä viassa (429, 5xx, aikaraja): kolme yritystä 30 s ja 60 s tauoin.
      for (let yritys = 1; !r && yritys <= 3; yritys++) {
        try {
          r = SHOPIFY.has(kauppa) ? await lueShopify(page, p.partnerProductUrl) : await lueSivu(page, p.partnerProductUrl, kauppa)
        } catch (e) {
          r = { tila: 'ei luettu', syy: String(e.message || e).split('\n')[0].slice(0, 120), heitetty: true }
        }
        if (ohimeneva(r) && yritys < 3) {
          r = null
          await sleep(30_000 * yritys)
        }
      }
      delete r.heitetty
      if (r.tila === 'ok') {
        const muutos = Math.abs(r.hinta - p.priceFrom) / p.priceFrom
        if (muutos > 0.6 && !hyvaksy.has(p.slug)) r = { ...r, tila: 'tarkista', syy: `hinta ${p.priceFrom} → ${r.hinta} (yli 60 %)` }
      }
      tulokset[p.slug] = { kauppa, vanha: p.priceFrom, vanhaPaiva: p.priceCheckedAt, ...r }
      process.stdout.write(`${r.tila === 'ok' ? '.' : r.tila[0]}`)
      if (r.lahde !== 'syöte') await sleep(10_000)
    }
    await page.close()
  }),
)
await browser.close()
console.log('')

// Kirjoitus products.ts:iin: vain priceFrom + priceCheckedAt onnistuneille.
let muutettu = 0, paivitetty = 0
if (kirjoita) {
  let t = fs.readFileSync(productsFile, 'utf8')
  const crlf = t.includes('\r\n')
  t = t.replace(/\r\n/g, '\n')
  for (const [slug, r] of Object.entries(tulokset)) {
    if (r.tila !== 'ok') continue
    const a = t.indexOf(`  {\n    slug: '${slug}',`)
    if (a < 0) { r.tila = 'ei kirjoitettu'; continue }
    let b = t.indexOf('\n  {\n    slug:', a + 5)
    if (b < 0) b = t.indexOf('\n]', a)
    let blokki = t.slice(a, b)
    const vanhaHinta = blokki.match(/\n    priceFrom: ([\d.]+),/)
    const vanhaPaiva = blokki.match(/\n    priceCheckedAt: '([\d-]+)',/)
    if (!vanhaHinta || !vanhaPaiva) { r.tila = 'ei kirjoitettu'; continue }
    if (Math.abs(Number(vanhaHinta[1]) - r.hinta) > 0.004) { blokki = blokki.replace(vanhaHinta[0], `\n    priceFrom: ${r.hinta},`); muutettu++; r.muuttui = true }
    blokki = blokki.replace(vanhaPaiva[0], `\n    priceCheckedAt: '${tanaan}',`)
    paivitetty++
    t = t.slice(0, a) + blokki + t.slice(b)
  }
  if (crlf) t = t.replace(/\n/g, '\r\n')
  fs.writeFileSync(productsFile, t)
}

const lista = Object.entries(tulokset)
const laske = (tila) => lista.filter(([, r]) => r.tila === tila).length
const yhteenveto = { paiva: tanaan, luettu: lista.length, ok: laske('ok'), loppu: laske('loppu'), '404': laske('404'), eiLuettu: laske('ei luettu'), tarkista: laske('tarkista'), hintaMuuttui: muutettu, paivaPaivitetty: paivitetty, kirjoitettu: kirjoita }
fs.writeFileSync(raportti, JSON.stringify({ yhteenveto, tulokset }, null, 1))
console.log(JSON.stringify(yhteenveto))
for (const [slug, r] of lista.filter(([, r]) => r.tila !== 'ok' || r.muuttui)) console.log(`${r.tila.padEnd(10)} ${r.kauppa.padEnd(20)} ${slug}  ${r.vanha} → ${r.hinta ?? '-'}${r.ale === 'hävikki' ? ' (hävikkierä: myyntihinta)' : r.ale ? ' (ale: normaalihinta)' : ''}${r.syy ? '  ' + r.syy : ''}`)
console.log('raportti:', raportti)
const epaonnistui = laske('ei luettu') / Math.max(1, lista.length)
process.exit(epaonnistui > 0.2 ? 3 : 0)
