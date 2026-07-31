/**
 * Generoi scripts/routes.json datasta, jotta prerenderin metat eivät ajaudu
 * erilleen katalogista. Ajetaan build-ketjussa ennen tsc:tä ja
 * _prerender_routes.mjs:ää.
 *
 * 🔴 Kaksi asiaa, jotka on helppo rikkoa:
 *
 * 1. Legal-reittien metat (/privacy, /terms, /cookie-policy) on käännetty
 *    käsin kaikille 12 kielelle. Ne luetaan olemassa olevasta routes.jsonista
 *    ja kirjoitetaan takaisin sellaisenaan. Generaattori EI kirjoita niitä
 *    uusiksi. Jos ne katoavat, kolme sivua menettää natiivit metansa 11
 *    kielellä eikä sitä huomaa mistään, koska prerender ei kaadu vaan putoaa
 *    hiljaa englantiin.
 *
 * 2. Nimiä ei kirjoiteta tänne käsin. Kategorioiden nimet ja esittelyt
 *    luetaan SHOP_COPYsta ja tuotteiden nimet products.ts:stä. Käsin
 *    kopioitu nimi ajautuu datasta erilleen ensimmäisessä sisältömuutoksessa,
 *    ja slugista väännetty otsikko ("design | LaplandGifts") ei ole otsikko
 *    vaan tiedostonimi.
 *
 * TS-lähteet importataan suoraan: Node 22.6+ purkaa tyypit itse, joten
 * datalle ei tarvita erillistä käännösvaihetta eikä regexiä.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { CATEGORIES } from '../src/data/categories.ts'
import { PRODUCTS } from '../src/data/products.ts'
import { SHOP_COPY } from '../src/locales/shopCopy.ts'
import { HOME_META } from '../src/locales/homeMeta.ts'

const LANGS = ['en', 'fi', 'de', 'ja', 'es', 'pt-BR', 'zh-CN', 'ko', 'fr', 'it', 'nl', 'sv']
const LEGAL = new Set(['/privacy', '/terms', '/cookie-policy'])
const BRAND = 'LaplandGifts'

/** Hakukoneen näyttöikkuna: otsikko katkeaa n. 60 merkin jälkeen, kuvaus 160:n. */
const TITLE_MAX = 60
const DESC_MIN = 150
const DESC_MAX = 160

// ── kuvausten pituussovitus ────────────────────────────────────────────────
// Pohjateksti tulee aina datasta (kategorian intro, tuotteen kuvaus). Jos se
// jää alle näyttöikkunan, perään liitetään yksi tai kaksi häntälausetta, jotka
// pitävät paikkansa jokaisella sivulla. Häntiä ei keksitä: ne toistavat sen,
// mitä sivu itse kertoo (hinta luettu kumppanilta, toimitusalue kortissa).

/**
 * Katkaisee tekstin näyttöikkunaan. Katkaisukohta haetaan lauseen lopusta,
 * sitten sivulauseen pilkusta ja vasta viimeisenä sanavälistä.
 *
 * 🔴 Sanavälistä katkaisu tuottaa helposti valheen: "marinated with soy sauce,
 * black pepper, garlic and sugar syrup" katkesi sanavälistä muotoon "…and
 * sugar.", joka on eri tuote. Pilkkukatkaisu jättää tekstiin vain kokonaisia
 * lausekkeita.
 */
function clampWords(text, max) {
  if (text.length <= max) return text
  const cut = text.slice(0, max)
  const stop = Math.max(cut.lastIndexOf('. '), cut.lastIndexOf('! '), cut.lastIndexOf('? '))
  if (stop > max * 0.5) return cut.slice(0, stop + 1).trim()
  const comma = cut.lastIndexOf(', ')
  if (comma > max * 0.5) return `${cut.slice(0, comma)}.`
  const space = cut.lastIndexOf(' ')
  return `${(space > 0 ? cut.slice(0, space) : cut).replace(/[\s,;:]+$/, '')}.`
}

/**
 * Lauseet järjestyksessä.
 *
 * 🔴 Desimaalipiste ei ole lauseen loppu: naiivi jako katkaisi "A 0.3 litre
 * vitroporcelain mug" kohdasta "0." ja jätti metakuvaukseksi "3 litre
 * vitroporcelain mug", eli kymmenkertaisen mukin. Desimaalit maskataan
 * jaon ajaksi.
 */
const DECIMAL_MASK = '\u0000'
function sentences(text) {
  const masked = text.replace(/(\d)\.(\d)/g, `$1${DECIMAL_MASK}$2`)
  const m = masked.match(/[^.!?]+[.!?]+(?:\s|$)/g)
  const parts = m ? m.map((s) => s.trim()) : [masked]
  return parts.map((s) => s.replaceAll(DECIMAL_MASK, '.'))
}

/** Pisin kokonaisista lauseista koostuva alkuosa, joka mahtuu ikkunaan. */
function leadingSentences(text) {
  let out = ''
  for (const s of sentences(text)) {
    const next = out ? `${out} ${s}` : s
    if (next.length > DESC_MAX) break
    out = next
  }
  return out || clampWords(sentences(text)[0], DESC_MAX)
}

/**
 * Sovittaa kuvauksen 150–160 merkkiin. Kokeillaan pohjateksti sellaisenaan,
 * sitten yhden ja kahden hännän yhdistelmät. Voittaja on se, joka osuu
 * ikkunaan pienimmällä määrällä häntiä (kaksi häntää alkaa kuulostaa
 * luettelolta) ja on niistä pisin.
 *
 * Häntä on pari [aihe, teksti]. Kahden hännän yhdistelmässä aiheiden on
 * oltava eri: kaksi peräkkäistä toimitusaluelausetta sanoisi saman asian
 * kahdesti eri sanoin, mikä on juuri sitä täytettä jota metakuvaus ei kestä.
 */
function fitDescription(base, tails) {
  const candidates = [{ text: base, n: 0 }]
  for (let i = 0; i < tails.length; i++) {
    candidates.push({ text: `${base} ${tails[i][1]}`, n: 1 })
    for (let j = i + 1; j < tails.length; j++) {
      if (tails[i][0] === tails[j][0]) continue
      candidates.push({ text: `${base} ${tails[i][1]} ${tails[j][1]}`, n: 2 })
    }
  }
  const inWindow = candidates
    .filter((c) => c.text.length >= DESC_MIN && c.text.length <= DESC_MAX)
    .sort((a, b) => a.n - b.n || b.text.length - a.text.length)
  if (inWindow.length) return inWindow[0].text
  const underMax = candidates
    .filter((c) => c.text.length <= DESC_MAX)
    .sort((a, b) => b.text.length - a.text.length)
  return underMax.length ? underMax[0].text : clampWords(base, DESC_MAX)
}

/** Ensimmäinen otsikkoehdokas, joka mahtuu näyttöikkunaan. */
function fitTitle(candidates) {
  return candidates.find((c) => c.length <= TITLE_MAX) ?? clampWords(candidates.at(-1), TITLE_MAX)
}

const CATEGORY_TAILS = {
  en: [
    ['price', 'Every price is read from the partner shop on the date shown.'],
    ['price', 'Each price is read from the partner shop and dated.'],
    ['price', 'Every price is read from the partner shop.'],
    ['price', 'Prices come from the partner shops.'],
    ['price', 'Prices are read from the shops.'],
    ['delivery', 'The delivery area is on every card.'],
    ['delivery', 'Delivery area on every card.'],
    ['delivery', 'Delivery areas are shown.'],
    ['delivery', 'Delivery areas listed.'],
  ],
  fi: [
    ['price', 'Jokainen hinta on luettu kumppanin kaupasta merkittynä päivänä.'],
    ['price', 'Jokainen hinta on luettu kumppanin kaupasta ja päivätty.'],
    ['price', 'Jokainen hinta on luettu kumppanin kaupasta.'],
    ['price', 'Hinnat tulevat kumppanikaupoista.'],
    ['price', 'Hinnat on luettu kaupoista.'],
    ['delivery', 'Toimitusalue näkyy jokaisessa kortissa.'],
    ['delivery', 'Toimitusalue näkyy kortissa.'],
    ['delivery', 'Toimitusalueet näkyvät.'],
    ['delivery', 'Toimitusalue kortissa.'],
  ],
}

const PRODUCT_TAILS = {
  en: [
    ['price', 'The price is read from the partner shop and the purchase is made there.'],
    ['price', 'The price comes from the partner shop, where you also buy it.'],
    ['price', 'The price is read from the partner shop, where you buy it.'],
    ['price', 'The price is read from the partner shop.'],
    ['price', 'You buy it in the partner shop.'],
    ['price', 'Bought in the partner shop.'],
    ['price', 'Sold by the partner shop.'],
    ['delivery', 'The delivery area is on this page.'],
    ['delivery', 'Delivery area on this page.'],
    ['delivery', 'Delivery area is listed.'],
    ['delivery', 'See where it ships.'],
    ['delivery', 'Delivery area shown.'],
  ],
  fi: [
    ['price', 'Hinta on luettu kumppanin kaupasta, ja osto tapahtuu siellä.'],
    ['price', 'Hinta tulee kumppanin kaupasta, josta tuote myös ostetaan.'],
    ['price', 'Hinta on luettu kumppanin kaupasta.'],
    ['price', 'Ostat tuotteen kumppanin kaupasta.'],
    ['price', 'Ostetaan kumppanin kaupasta.'],
    ['price', 'Myyjänä kumppanin kauppa.'],
    ['delivery', 'Toimitusalue näkyy tällä sivulla.'],
    ['delivery', 'Toimitusalue näkyy sivulla.'],
    ['delivery', 'Toimitusalue kerrotaan.'],
    ['delivery', 'Toimitusalue näkyy.'],
  ],
}

/**
 * Rakentaa reittimerkinnän. `en` ja `fi` ovat natiiveja, muut kymmenen saavat
 * englannin: kategoria- ja tuotesivujen sisältö itsekin on näillä kielillä
 * englantia (SHOP_COPY), joten saksankielinen meta lupaisi saksankielisen
 * sivun jota ei ole.
 */
function route(path, en, fi) {
  return {
    path,
    fallbackTitle: en.title,
    fallbackDescription: en.description,
    fallbackTitleByLang: Object.fromEntries(LANGS.map((l) => [l, l === 'fi' ? fi.title : en.title])),
    fallbackDescriptionByLang: Object.fromEntries(
      LANGS.map((l) => [l, l === 'fi' ? fi.description : en.description]),
    ),
  }
}

/** Reitti, jolla on oma käännös jokaiselle kielelle. */
function routeByLang(path, byLang) {
  return {
    path,
    fallbackTitle: byLang.en.title,
    fallbackDescription: byLang.en.description,
    fallbackTitleByLang: Object.fromEntries(LANGS.map((l) => [l, byLang[l].title])),
    fallbackDescriptionByLang: Object.fromEntries(LANGS.map((l) => [l, byLang[l].description])),
  }
}

// ── kategoriat ─────────────────────────────────────────────────────────────
const categoryRoutes = [...CATEGORIES]
  .sort((a, b) => a.order - b.order)
  .map((cat) => {
    const build = (lang) => {
      const c = SHOP_COPY[lang].category
      const name = c.names[cat.id]
      return {
        title: fitTitle([`${name} | ${BRAND}`, name]),
        description: fitDescription(c.intro[cat.id], CATEGORY_TAILS[lang]),
      }
    }
    return route(cat.slug, build('en'), build('fi'))
  })

// ── tuotteet ───────────────────────────────────────────────────────────────
const productRoutes = PRODUCTS.map((product) => {
  const build = (lang) => {
    const name = product.name[lang]
    // Brändi otsikkoon vain jos nimi ei jo kanna sitä: "Marttiini Marttiini
    // Ilves 131" on huonompi otsikko kuin kumpikaan osa yksin.
    const brandWord = product.brand.split(' ')[0].toLowerCase()
    const withBrand = name.toLowerCase().includes(brandWord) ? name : `${product.brand} ${name}`
    // Ehdokkaat pisimmästä lyhimpään. Kun kumppanibrändi ja oma brändi eivät
    // mahdu yhtä aikaa, oma brändi voittaa: se erottaa tuloksen kumppanin
    // omasta hakutuloksesta, jossa sama tuote on samalla nimellä.
    return {
      title: fitTitle([`${withBrand} | ${BRAND}`, `${name} | ${BRAND}`, withBrand, name]),
      description: fitDescription(leadingSentences(product.description[lang]), PRODUCT_TAILS[lang]),
    }
  }
  return route(`/product/${product.slug}`, build('en'), build('fi'))
})

// ── muut sisältösivut ──────────────────────────────────────────────────────
const giftGuides = route(
  '/gift-guides',
  {
    title: `Lapland gift guides | ${BRAND}`,
    description:
      'What to bring home from Lapland, sorted by who you are buying for and by budget. Every pick links to the shop that stocks it and states where it ships.',
  },
  {
    title: `Lapin lahjaoppaat | ${BRAND}`,
    description:
      'Mitä Lapista kannattaa tuoda kotiin, jaoteltuna saajan ja budjetin mukaan. Jokainen poiminta vie kauppaan, joka tuotteen myy, ja kertoo toimitusalueen.',
  },
)

const shipping = route(
  '/shipping',
  {
    title: `Delivery areas and food rules | ${BRAND}`,
    description:
      'Which partner shop ships where, checked from their own delivery terms, plus the import rules that decide whether dried reindeer may be posted to your country.',
  },
  {
    title: `Toimitusalueet ja elintarvikesäännöt | ${BRAND}`,
    description:
      'Mikä kumppanikauppa toimittaa minne, tarkistettuna niiden omista toimitusehdoista, ja tuontisäännöt jotka ratkaisevat saako poron kuivalihaa postittaa maahasi.',
  },
)

// ── legal säilytetään sellaisenaan ─────────────────────────────────────────
const existing = JSON.parse(readFileSync('scripts/routes.json', 'utf8'))
const legalRoutes = existing
  .filter((r) => LEGAL.has(r.path))
  .map((r) => ({ ...r, legal: true }))

if (legalRoutes.length !== LEGAL.size) {
  console.error(
    `[routes] legal-reittejä löytyi ${legalRoutes.length}/${LEGAL.size} olemassa olevasta routes.jsonista. ` +
      'Käännöksiä ei kirjoiteta uusiksi arvaamalla, joten build pysähtyy tähän.',
  )
  process.exit(1)
}

const routes = [
  routeByLang('/', HOME_META),
  ...categoryRoutes,
  ...productRoutes,
  giftGuides,
  shipping,
  ...legalRoutes,
]

// ── portti: metat, jotka eivät mahdu näyttöikkunaan, ovat bugi ─────────────
const warnings = []
for (const r of routes) {
  // Legal-metat ovat käsin käännettyjä eikä niitä mitata täällä. Etusivun
  // teksti tulee speksistä ja on sama kuin index.html:ssä, joten sitä ei
  // venytetä mittarin vuoksi kahdessa paikassa.
  if (r.legal || r.path === '/') continue
  for (const lang of ['en', 'fi']) {
    const t = r.fallbackTitleByLang[lang]
    const d = r.fallbackDescriptionByLang[lang]
    if (t.length > TITLE_MAX) warnings.push(`yli rajan: ${r.path} ${lang} title ${t.length}`)
    if (d.length > DESC_MAX) warnings.push(`yli rajan: ${r.path} ${lang} desc ${d.length}`)
    // Alle tavoitteen jäävä kuvaus ei katkea hakutuloksessa, se vain jättää
    // tilaa käyttämättä. Se raportoidaan, mutta se ei ole virhe: lisälause
    // pelkän merkkimäärän vuoksi olisi täytettä.
    else if (d.length < DESC_MIN) warnings.push(`alle tavoitteen: ${r.path} ${lang} desc ${d.length}`)
  }
}

// ── portti: index.html:n T-taulukon on sanottava sama kuin root-reitin ─────
// Root-reitillä on kaksi metalähdettä: tämä tiedosto (prerender) ja
// index.html:n LV-LOCALE-TITLE-lohko (SPA-kuori, joka tarjoillaan ennen
// hydraatiota). Ne ajautuivat kerran erilleen niin, että toinen lupasi vielä
// avautuvaa kauppaa. Nyt ero kaataa buildin.
const T_KEY_BY_LANG = {
  en: 'en', fi: 'fi', de: 'de', ja: 'ja', es: 'es', 'pt-BR': 'pt-br',
  'zh-CN': 'zh-cn', ko: 'kr', fr: 'fr', it: 'it', nl: 'nl', sv: 'sv',
}
const shell = readFileSync('index.html', 'utf8')
const tMatch = shell.match(/var T = (\{.*?\});/s)
if (!tMatch) {
  console.error('[routes] index.html:n LV-LOCALE-TITLE-lohkon T-taulukkoa ei löytynyt.')
  process.exit(1)
}
const shellTitles = JSON.parse(tMatch[1])
const drift = LANGS.filter((l) => shellTitles[T_KEY_BY_LANG[l]] !== HOME_META[l].title)
if (drift.length) {
  console.error('[routes] index.html ja routes.json eivät ole samaa mieltä etusivun otsikosta:')
  for (const l of drift) {
    console.error(`  ${l}\n    index.html:  ${shellTitles[T_KEY_BY_LANG[l]]}\n    routes.json: ${HOME_META[l].title}`)
  }
  process.exit(1)
}

writeFileSync('scripts/routes.json', `${JSON.stringify(routes, null, 2)}\n`)
console.log(`[routes] ${routes.length} reittiä × ${LANGS.length} kieltä`)
if (warnings.length) {
  console.log(`[routes] ${warnings.length} metaa tavoiteikkunan (${DESC_MIN}–${DESC_MAX}) ulkopuolella:`)
  for (const w of warnings) console.log(`  ${w}`)
}
