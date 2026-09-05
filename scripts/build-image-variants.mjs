/**
 * Kuvien kokovarianttien generointi.
 *
 * 🔴 MIKSI: mitattuna (Chrome, 390 × 844, DPR 3) etusivu latasi 2400 pikselin
 * heron 390 pikselin paikkaan, 1200 pikselin kategoriakuvat 356 pikselin
 * paikkaan ja 800 pikselin tuotekuvat 147 pikselin paikkaan. `sizes`-attribuutti
 * yksinään ei olisi auttanut mitään, koska jokaisella kuvalla oli vain YKSI
 * lähde: selaimella ei ollut mistä valita. Tämä skripti tekee pienemmät
 * vaihtoehdot, ja komponentit tarjoavat ne `srcSet`illä.
 *
 * Ajetaan käsin kun kuvia lisätään tai vaihdetaan:
 *   node scripts/build-image-variants.mjs
 *
 * Ei ole osa `npm run build`ia: variantit ovat versionhallinnassa olevia
 * valmiita tiedostoja kuten alkuperäisetkin, eikä buildin pidä tarvita sharpia.
 * Skripti on idempotentti ja ohittaa jo olemassa olevat ja ajantasaiset
 * tiedostot.
 */
import sharp from 'sharp'
import fs from 'node:fs'
import path from 'node:path'

const DIR = 'public/images'

/** Leveydet per kuvaperhe. Alkuperäinen jää aina suurimmaksi vaihtoehdoksi. */
const PLAN = [
  { match: /^hero-/, widths: [800, 1200, 1600] },
  { match: /^cat-/, widths: [480, 800] },
  // 640 on mukana DPR 3:n takia: kortin kuvapaikka on 147–174 CSS-pikseliä,
  // eli kolminkertaisella näyttötiheydellä tarvitaan ~500 px. Ilman 640:tä
  // selain hyppäsi suoraan 800:aan.
  { match: /^prod-/, widths: [320, 480, 640] },
  // 🔴 exp- PUUTTUI KOKONAAN (lisätty 2.8.2026). Elämyskuvien 480/800-variantit
  // olivat syntyneet joskus muualla, joten kahdeksan vanhaa kuvaa näytti
  // toimivan. Kun elämyksiä nostettiin 8:sta 24:ään, uudet 17 kuvaa jäivät
  // ilman variantteja ja renderöityivät LIVENÄ rikkinäisinä: ExperienceCard
  // pyytää `-480`- ja `-800`-tiedostoja, joita ei ollut. Leveydet ovat samat
  // kuin kortin srcSetissä; jos muutat toista, muuta molemmat.
  { match: /^exp-/, widths: [480, 800] },
]

// Vain data-tiedostoissa oikeasti viitatut kuvat. Kansiossa on myös vanhoja
// V1-aikaisia tiedostoja, joita mikään sivu ei renderöi; niille ei tehdä
// variantteja, jottei repoon kerry käyttämätöntä binääriä.
const used = new Set(['hero-shop'])
// 🔴 experiences.ts PUUTTUI TÄSTÄ LISTASTA (lisätty 2.8.2026). Se oli
// varsinainen syy siihen, että elämyskuvat jäivät ilman variantteja:
// skripti ei lukenut tiedostoa lainkaan, joten kuvat eivät päätyneet
// `used`-joukkoon eivätkä manifestiin. Kahdeksan vanhaa kuvaa näytti
// toimivan vain siksi, että niiden variantit olivat syntyneet joskus
// muualla. Jos lisäät uuden datatiedoston, joka viittaa kuviin, lisää se
// tähän — muuten sen kuvat hajoavat vasta livenä.
// 🔴 Lisatty 2026-08-11: mainoskomponentit viittaavat kuviin SUORAAN, eivat
// datatiedoston kautta. SuomikauppaOutletAd naytti kolme outlet-tuotetta,
// joiden kuvat eivat olleet missaan naista kolmesta datatiedostosta, joten ne
// putosivat used-joukosta ja jaivat kokonaan ilman variantteja. Sama vika kuin
// experiences.ts:n kanssa 2.8. Jos teet uuden komponentin joka nimeaa kuvia,
// lisaa se tahan.
for (const f of ['src/data/products.ts', 'src/data/categories.ts', 'src/data/experiences.ts']) {
  const src = fs.readFileSync(f, 'utf8')
  for (const m of src.matchAll(/image:\s*'([^']+)'/g)) used.add(m[1])
  // 🔴 Kaikki kuvaviittaukset EIVÄT ole `image:`-kenttiä. experiences.ts
  // luettelee kuvan tuple-alkiona (`[pick(...), 'exp-aurora', 'aurora', …]`),
  // jolloin ylempi regex ei löydä sitä lainkaan ja kuva jää ilman
  // variantteja — livenä se näkyy rikkinäisenä, koska kortti pyytää
  // `-480`- ja `-800`-tiedostoa. Tämä oli syy siihen, että 17 uutta
  // elämyskuvaa hajosi tuotannossa 2.8.2026. Poimitaan siis myös paljaat
  // merkkijonot, jotka alkavat tunnetulla kuvaetuliitteellä.
  for (const m of src.matchAll(/'((?:exp|prod|cat|hero)-[a-z0-9-]+)'/g)) used.add(m[1])
}

let made = 0
let skipped = 0
/** base → { full: alkuperäisen leveys, w: pienempien varianttien leveydet } */
const manifest = {}
for (const file of fs.readdirSync(DIR).sort()) {
  if (!file.endsWith('.webp')) continue
  const base = file.replace(/\.webp$/, '')
  // 🔴 Tässä oli aiemmin `if (/-\d+$/.test(base)) continue // jo variantti`.
  // Se pudotti myös oikeat tuotekuvat, joiden slug päättyy numeroon
  // (prod-marttiini-ilves-131, prod-kupilka-bowl-55): ne jäivät kokonaan ilman
  // pieniä variantteja ja pois manifestista, eli mobiili latasi 800 pikselin
  // kuvan 147 pikselin paikkaan. Erillistä varianttisuodatinta ei tarvita:
  // alla oleva `used`-tarkistus hylkää variantit jo valmiiksi, koska ne eivät
  // esiinny data-tiedostojen `image`-kentissä.
  if (!used.has(base)) continue
  const plan = PLAN.find((p) => p.match.test(base))
  if (!plan) continue

  const srcPath = path.join(DIR, file)
  const meta = await sharp(srcPath).metadata()
  manifest[base] = { full: meta.width, w: plan.widths.filter((w) => w < meta.width) }
  for (const w of plan.widths) {
    if (w >= meta.width) continue
    for (const [ext, opts] of [
      ['avif', { quality: 52, effort: 5 }],
      ['webp', { quality: 78 }],
    ]) {
      const out = path.join(DIR, `${base}-${w}.${ext}`)
      if (fs.existsSync(out) && fs.statSync(out).mtimeMs >= fs.statSync(srcPath).mtimeMs) {
        skipped++
        continue
      }
      await sharp(srcPath).resize({ width: w }).toFormat(ext, opts).toFile(out)
      made++
    }
  }
}
// Manifesti: komponentit eivät arvaa mitä leveyksiä levyllä on, vaan lukevat
// sen täältä. Ilman tätä `srcSet` voisi luvata tiedostoja joita ei ole (404 →
// selain putoaa takaisin `src`:hen, mutta vasta epäonnistuneen pyynnön jälkeen).
const ts = `// GENEROITU — älä muokkaa käsin.
// Lähde: scripts/build-image-variants.mjs. Aja se uudelleen kun kuvia muuttuu.
export interface ImageVariant {
  /** Alkuperäisen tiedoston leveys pikseleinä. */
  full: number
  /** Levyllä olevien pienempien varianttien leveydet. */
  w: number[]
}

export const IMAGE_VARIANTS: Record<string, ImageVariant> = ${JSON.stringify(manifest, null, 2)}
`
fs.writeFileSync('src/data/imageVariants.ts', ts)
console.log(`[images] ${made} varianttia kirjoitettu, ${skipped} ajan tasalla, ${Object.keys(manifest).length} kuvaa manifestissa`)
