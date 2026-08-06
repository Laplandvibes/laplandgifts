/**
 * Rakentaa ladattavat PDF-oppaat uudelleen HTML:stä puppeteerin print-moottorilla.
 *
 * 🔴 Miksi (Vesa 6.8.2026: "ladattavat pdf on kamalia"): vanhat PDF:t olivat
 * pelkkää upottamatonta Helveticaa, sisältösivuilla ei ollut yhtään kuvaa, ja
 * teksti lupasi asioita jotka on poistettu sivustolta epätosina ("ships with a
 * certificate of origin", "every product page names the maker"). Lisäksi
 * craft-opas sanoi "in the next 14 pages" vaikka sivuja on 9, LAURIn kaupungiksi
 * väitettiin Torniota (oma sivu: Rovaniemi, since 1924) ja aktiviteettidomain
 * oli vanha .online (oikea: laplandactivities.fi).
 *
 * Sivumäärät pidetään täsmälleen sivuston lupaamissa (copy.*.ts guides.pages):
 * craft 9, days 13. Skripti KAATUU jos sivumäärä ei täsmää — sama lupaus on
 * kahdessa paikassa, joten muuta molemmat tai älä kumpaakaan.
 *
 * Kuvat ovat sivuston omia (public/images/): AI-generoidut elämyskuvat ja
 * kumppanien tuotekuvat. Fontit ladataan Google Fontsista renderöinnin aikana
 * ja upotetaan PDF:ään, joten lopputulos ei riipu lukijan koneen fonteista.
 *
 * Ajo:  node scripts/build-guide-pdfs.mjs
 * Tulos: public/guides/The-Secret-Craft-Guide.pdf (9 s.)
 *        public/guides/7-Days-of-Lapland-Magic.pdf (13 s.)
 */
import puppeteer from 'puppeteer-core'
import fs from 'node:fs'
import path from 'node:path'

const ROOT = process.cwd()

// Kuvat upotetaan PDF:ään sellaisenaan, joten 1600 px webp-lähteet paisuttivat
// matkaoppaan 14 megatavuun. Esikäsitellään 1000 px JPEG-kopiot: painojälki on
// A4:llä sama, mutta molemmat oppaat pysyvät sähköpostikokoisina.
const TMP = path.join(ROOT, '_pdfimg')
fs.mkdirSync(TMP, { recursive: true })
const sharp = (await import('sharp')).default
const prepared = new Map()
async function prepare(name) {
  if (prepared.has(name)) return prepared.get(name)
  const src = path.join(ROOT, 'public', 'images', `${name}.webp`)
  if (!fs.existsSync(src)) throw new Error(`kuva puuttuu: ${name}.webp`)
  const out = path.join(TMP, `${name}.jpg`)
  await sharp(src).resize(1000, null, { withoutEnlargement: true }).jpeg({ quality: 78 }).toFile(out)
  const url = 'file:///' + out.replace(/\\/g, '/')
  prepared.set(name, url)
  return url
}
const NAMES = [
  'guide-craft', 'guide-itinerary', 'hero-shop', 'exp-aurora', 'exp-husky-selfdrive',
  'exp-reindeer-farm', 'exp-nature-snowshoe', 'exp-icebreaker', 'exp-santa-reindeer',
  'prod-marttiini-lapinleuku-255', 'prod-aurora-mini-kuksa',
  'prod-arctic-power-berries-blueberry-powder',
]
for (const n of NAMES) await prepare(n)
const IMG = (name) => {
  if (!prepared.has(name)) throw new Error(`kuvaa ${name} ei ole esikäsitelty — lisää NAMES-listaan`)
  return prepared.get(name)
}

const CSS = `
  @page { size: A4; margin: 0; }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html { -webkit-print-color-adjust: exact; }
  body { font-family: 'DM Sans', sans-serif; color: #1F2937; }
  .page { width: 210mm; height: 297mm; overflow: hidden; page-break-after: always;
    position: relative; background: #FBF9F5; padding: 18mm 17mm 20mm; }
  .page:last-child { page-break-after: auto; }
  h1, h2, h3, .display { font-family: 'Bebas Neue', sans-serif; font-weight: 400;
    letter-spacing: 0.02em; color: #0F172A; }
  .kicker { font-size: 8.5pt; font-weight: 700; letter-spacing: 0.22em;
    text-transform: uppercase; color: #B45309; margin-bottom: 4mm; }
  h2 { font-size: 30pt; line-height: 1.02; margin-bottom: 5mm; }
  h3 { font-size: 15pt; margin: 6mm 0 2mm; }
  p { font-size: 10pt; line-height: 1.55; margin-bottom: 3mm; }
  .lead { font-size: 11pt; line-height: 1.6; color: #374151; }
  .rule { height: 2.5pt; width: 22mm; background: #F59E0B; border-radius: 2pt;
    margin-bottom: 6mm; }
  .foot { position: absolute; left: 17mm; right: 17mm; bottom: 9mm;
    display: flex; justify-content: space-between; font-size: 8pt; color: #9CA3AF; }
  .foot b { color: #6B7280; font-weight: 600; }
  .photo { width: 100%; object-fit: cover; border-radius: 4mm; display: block; }
  .caption { font-size: 8pt; color: #9CA3AF; margin-top: 2mm; }
  .tip { background: #F3EEE6; border-left: 3pt solid #F59E0B; border-radius: 0 3mm 3mm 0;
    padding: 4mm 5mm; margin-top: 5mm; }
  .tip .t { font-size: 8pt; font-weight: 700; letter-spacing: 0.18em; color: #B45309;
    margin-bottom: 1.5mm; }
  .tip p { font-size: 9.5pt; margin: 0; }
  .num { display: inline-flex; width: 7mm; height: 7mm; border-radius: 50%;
    background: #0F172A; color: #FBF9F5; font-family: 'Bebas Neue'; font-size: 12pt;
    align-items: center; justify-content: center; margin-right: 3mm; flex: none; }
  .item { display: flex; gap: 0; margin-bottom: 4mm; align-items: flex-start; }
  .item div { flex: 1; }
  .item b { display: block; font-size: 10.5pt; color: #0F172A; margin-bottom: 1mm; }
  .item p { margin: 0; font-size: 9.5pt; }
  .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 5mm; }
  .card { background: #FFFFFF; border: 1px solid #E7E1D8; border-radius: 3mm; padding: 5mm; }
  .card b { display: block; font-size: 10.5pt; color: #0F172A; margin-bottom: 1mm; }
  .card .sub { font-size: 8pt; font-weight: 700; letter-spacing: 0.14em;
    text-transform: uppercase; color: #B45309; margin-bottom: 1.5mm; }
  .card p { font-size: 9pt; margin: 0; line-height: 1.5; }
  /* Kansi */
  .cover { background: #0F172A; color: #F9FAFB; padding: 0; }
  .cover .bar { position: absolute; left: 0; top: 0; bottom: 0; width: 5mm; background: #F59E0B; }
  .cover .inner { padding: 26mm 20mm 20mm 24mm; height: 100%; display: flex;
    flex-direction: column; }
  .cover .brand { font-family: 'Bebas Neue'; font-size: 13pt; letter-spacing: 0.28em; }
  .cover .brand .pink { color: #EC4899; } .cover .brand .amber { color: #F59E0B; }
  .cover h1 { color: #F9FAFB; font-size: 56pt; line-height: 0.98; margin: 16mm 0 6mm; }
  .cover h1 .amber { color: #F59E0B; }
  .cover .sub { font-size: 13pt; color: rgba(249,250,251,0.85); max-width: 120mm;
    line-height: 1.5; }
  .cover .img { margin-top: auto; }
  .cover .img img { width: 100%; height: 96mm; object-fit: cover; border-radius: 4mm; }
  .cover .credit { margin-top: 6mm; font-size: 9pt; color: rgba(249,250,251,0.6); }
  /* Loppusivu */
  .closing { background: #0F172A; color: #F9FAFB; display: flex; flex-direction: column;
    justify-content: center; padding: 24mm; }
  .closing h2 { color: #F9FAFB; font-size: 40pt; }
  .closing p { color: rgba(249,250,251,0.85); font-size: 11pt; max-width: 130mm; }
  .closing .links { margin: 8mm 0; }
  .closing .links p { margin-bottom: 2.5mm; font-size: 10.5pt; }
  .closing .links b { color: #F59E0B; font-weight: 600; }
  .closing .fine { font-size: 8pt; color: rgba(249,250,251,0.45); margin-top: 14mm; }
  .season { border-left: 3pt solid #F59E0B; padding-left: 4mm; margin-bottom: 5mm; }
  .season b { font-size: 11pt; color: #0F172A; }
  .season .when { font-size: 8pt; font-weight: 700; letter-spacing: 0.14em; color: #B45309;
    text-transform: uppercase; }
  .season p { font-size: 9.5pt; margin: 1mm 0 0; }
  table { width: 100%; border-collapse: collapse; font-size: 9pt; margin: 4mm 0; }
  th { font-family: 'Bebas Neue'; font-size: 11pt; letter-spacing: 0.05em; color: #0F172A;
    text-align: left; padding: 2.5mm 2mm; border-bottom: 2pt solid #0F172A; }
  td { padding: 2.2mm 2mm; border-bottom: 1px solid #E7E1D8; }
  tr.total td { font-weight: 700; color: #0F172A; border-bottom: none;
    border-top: 2pt solid #F59E0B; }
  ul.plain { list-style: none; } ul.plain li { font-size: 9.5pt; line-height: 1.6;
    padding-left: 5mm; position: relative; margin-bottom: 1.2mm; }
  ul.plain li::before { content: ''; position: absolute; left: 0; top: 2.6mm; width: 2mm;
    height: 2mm; border-radius: 50%; background: #F59E0B; }
`

const head = `<meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&display=block">
<style>${CSS}</style>`

const foot = (n, total) =>
  `<div class="foot"><span><b>laplandgifts.com</b> · #LaplandVibes</span><span>${n} / ${total}</span></div>`

const tip = (text) => `<div class="tip"><div class="t">LOCAL TIP</div><p>${text}</p></div>`

/* ────────────────────────── CRAFT GUIDE, 9 sivua ─────────────────────── */
const craft = `<!doctype html><html><head>${head}<title>The Secret Craft</title></head><body>

<div class="page cover"><div class="bar"></div><div class="inner">
  <div class="brand"><span class="pink">#</span>LAPLAND<span class="amber">GIFTS</span></div>
  <h1>The Secret<br><span class="amber">Craft</span></h1>
  <p class="sub">An insider's guide to authentic Lapland craftsmanship: puukko knives, kuksa cups, Sami duodji and the five rules that keep you from ever buying a fake.</p>
  <div class="img"><img src="${IMG('guide-craft')}"></div>
  <p class="credit">A free guide by LaplandGifts.com · Part of the #LaplandVibes ecosystem</p>
</div></div>

<div class="page">
  <div class="kicker">Introduction</div><h2>Why this guide?</h2><div class="rule"></div>
  <p class="lead">Walk into any souvenir shop in Rovaniemi, Levi or Saariselkä and you'll find shelves full of "authentic Lapland" products: reindeer magnets, Viking-themed keychains, northern lights mugs with stock photos printed on them.</p>
  <p>Here's the truth most tourists never learn: the vast majority of these products are mass-manufactured outside Finland. They have nothing to do with Lapland's living craft traditions.</p>
  <p>Meanwhile, the real artisans, the bladesmiths, the kuksa carvers, the Sami duodji makers, work quietly in small workshops scattered across the Arctic. Their work isn't on the tourist strip. It's in villages you've never heard of, sold through word of mouth and small local shops.</p>
  <p>This guide bridges that gap. In these pages you'll learn:</p>
  <ul class="plain">
    <li>How to tell a handforged puukko from a factory blade in 10 seconds</li>
    <li>Why a real kuksa cup costs 10x more than a fake, and why it's worth it</li>
    <li>The cultural significance of Sami duodji and why imitations cause real harm</li>
    <li>Where to find genuine artisan products, both in Lapland and online</li>
    <li>Five golden rules that save you from ever buying a fake souvenir again</li>
  </ul>
  <p>By the end, you won't just be a smarter shopper. You'll understand the stories, traditions and people behind every authentic piece.</p>
  ${foot(2, 9)}
</div>

<div class="page">
  <div class="kicker">Chapter 1</div><h2>Puukko, Finland's national tool</h2><div class="rule"></div>
  <img class="photo" style="height:58mm" src="${IMG('prod-marttiini-lapinleuku-255')}">
  <p class="caption">A traditional Lapp knife: stainless blade, curly birch handle, leather sheath.</p>
  <p style="margin-top:3mm">The puukko is not just a knife. It's a Finnish cultural symbol with over a thousand years of history: a tool for building shelter, preparing food and crafting other tools. A handmade puukko from a master bladesmith is one of the finest gifts you can bring from Lapland, but the market is flooded with factory imitations. Five signs of the real thing:</p>
  <div class="item"><span class="num">1</span><div><b>The blade has character</b><p>A handforged blade shows subtle hammer marks, slight asymmetry and a carbon steel edge that develops a patina. Factory blades are perfectly uniform.</p></div></div>
  <div class="item"><span class="num">2</span><div><b>Curly birch handle</b><p>The best puukkos use visakoivu, curly birch with wavy grain. Each piece is unique. Factory handles use dyed straight-grained wood or plastic.</p></div></div>
  <div class="item"><span class="num">3</span><div><b>The sheath is hand-stitched</b><p>Hand-stitched leather with a wet-molded fit means hours of work. Machine-stitched sheaths with glued seams are mass-produced.</p></div></div>
  <div class="item"><span class="num">4</span><div><b>The maker signs their work</b><p>Real bladesmiths stamp or engrave their name on the blade. No maker mark usually means factory-made.</p></div></div>
  <div class="item"><span class="num">5</span><div><b>It costs what skilled labour costs</b><p>A genuine handmade puukko starts around 80 to 150 euros. At 20 euros in a tourist shop, it was made in a factory, likely outside Finland.</p></div></div>
  ${foot(3, 9)}
</div>

<div class="page">
  <div class="kicker">Chapter 2</div><h2>Kuksa, the Arctic coffee cup</h2><div class="rule"></div>
  <img class="photo" style="height:58mm" src="${IMG('prod-aurora-mini-kuksa')}">
  <p class="caption">Carved birch with a leather loop, the shape that has crossed the Arctic for centuries.</p>
  <p style="margin-top:3mm">The kuksa (guksi in Sami) is a drinking cup carved from birch burl, the knotted growth that appears on Arctic birch trees. A genuine kuksa is carved from a single piece of burl: its natural oils make it waterproof, and the curved grain gives every cup a shape no machine can repeat.</p>
  <h3>Real vs. machine-made, the quick test</h3>
  <ul class="plain">
    <li><b>Weight:</b> real burl feels solid and dense. Machine-turned cups from regular birch are noticeably lighter.</li>
    <li><b>Grain:</b> burl has swirling, chaotic patterns. Regular birch has straight parallel lines.</li>
    <li><b>Shape:</b> hand-carved cups have subtle asymmetry. Machine cups are perfectly round.</li>
    <li><b>Interior:</b> a real kuksa shows gentle tool marks from the hook knife. Machine cups are sanded smooth.</li>
    <li><b>Smell:</b> fresh birch burl has a sweet, woody scent. Factory cups often smell of varnish.</li>
  </ul>
  <h3>How to care for your kuksa</h3>
  <p>Never put a kuksa in the dishwasher: hot water and detergent crack the wood and strip its oils. Rinse with lukewarm water, wipe dry, and occasionally rub with food-safe oil such as walnut or flaxseed. A well-kept kuksa lasts a lifetime and develops a golden patina.</p>
  ${foot(4, 9)}
</div>

<div class="page">
  <div class="kicker">Chapter 3</div><h2>Duodji, the Sami handicraft tradition</h2><div class="rule"></div>
  <p class="lead">Duodji is the Sami word for handicraft, but it means far more than making things by hand. It is a living cultural practice that carries knowledge, identity and meaning: every pattern, every material, every technique tells a story about the Sami relationship with the Arctic landscape.</p>
  <p>The most recognisable duodji craft is tin-thread embroidery on reindeer leather: bracelets, pouches and belts decorated with braided patterns of thin tin or pewter wire. The technique dates back centuries and takes years to master.</p>
  <div class="card" style="margin:6mm 0; background:#0F172A; border-color:#0F172A;">
    <b style="color:#F9FAFB">Why imitations cause real harm</b>
    <p style="color:rgba(249,250,251,0.85)">Mass-produced copies of Sami designs, sold without permission or context, undermine the livelihood of real Sami artisans and trivialise cultural symbols. Some patterns carry specific family or community significance: wearing a fake Sami bracelet is like wearing someone else's family crest.</p>
  </div>
  <h3>The Sami Duodji mark</h3>
  <p>The official Sami Duodji mark guarantees the product was made by a Sami artisan using traditional techniques and materials. It is your only guarantee of authenticity. If a product claims to be Sami-made but doesn't carry the mark, be skeptical, and buy from authorised sellers such as Duodji Shop in Inari.</p>
  ${foot(5, 9)}
</div>

<div class="page">
  <div class="kicker">Chapter 4</div><h2>The taste of the Arctic</h2><div class="rule"></div>
  <img class="photo" style="height:50mm" src="${IMG('prod-arctic-power-berries-blueberry-powder')}">
  <p class="caption">Wild bilberry, freeze dried: about 700 g of berries in one 70 g jar.</p>
  <p style="margin-top:3mm">Lapland's wild berries, game meats and freshwater fish grow in an extreme climate, midnight sun in summer and polar darkness in winter, which concentrates their flavour. The best food gifts are wild berry preserves, reindeer jerky and smoked Arctic char. But not everything labelled "Lapland" is the real thing.</p>
  <h3>Berry season calendar</h3>
  <div class="grid2">
    <div class="card"><div class="sub">July–August</div><b>Cloudberry (lakka)</b><p>Golden orange, tastes of honey and apricot. The most prized Arctic berry: grows only in wild bogs, impossible to farm.</p></div>
    <div class="card"><div class="sub">July–September</div><b>Bilberry (mustikka)</b><p>Finland's wild blueberry, darker and more intense than the farmed kind and far richer in antioxidants.</p></div>
    <div class="card"><div class="sub">August–October</div><b>Lingonberry (puolukka)</b><p>Tart and bright red, the staple berry of Nordic cuisine. The best come from old-growth forests.</p></div>
    <div class="card"><div class="sub">September–October</div><b>Cranberry (karpalo)</b><p>Grows in Arctic bogs. Smaller and sharper than American cranberries; often made into juice or liqueur.</p></div>
  </div>
  ${tip('Check the label. Wild berries are marked <b>luonnonvarainen</b> in Finnish. If it says <b>marmelaadi</b> instead of <b>hillo</b> (jam), it likely holds more sugar than berries. Good producers state the berry percentage prominently.')}
  ${foot(6, 9)}
</div>

<div class="page">
  <div class="kicker">Chapter 5</div><h2>The buyer's five golden rules</h2><div class="rule"></div>
  <p class="lead">The chapters above cover specific products. These five rules work for any Lapland craft, anywhere.</p>
  <div class="item"><span class="num">1</span><div><b>Ask for the maker's name</b><p>If the seller can't tell you who made it, it wasn't handmade. Real artisans are proud of their work and known in their community. The best shops show the maker's name beside the product.</p></div></div>
  <div class="item"><span class="num">2</span><div><b>Look for certification marks</b><p>The Sami Duodji mark for Sami crafts. The Avainlippu (Key Flag) for Finnish-made products. Without them, "Made in Finland" can mean assembled from imported parts.</p></div></div>
  <div class="item"><span class="num">3</span><div><b>Check the materials</b><p>Authentic Lapland crafts use local materials: birch burl, reindeer leather, carbon steel, tin thread, Arctic berries. Plastic and synthetic leather mean factory-made, whatever the label says.</p></div></div>
  <div class="item"><span class="num">4</span><div><b>If it's cheap, it's not real</b><p>A handmade puukko takes 8 to 20 hours of skilled work. A hand-carved kuksa takes days. A tin-thread bracelet takes two to three days. These things cannot cost 15 euros.</p></div></div>
  <div class="item"><span class="num">5</span><div><b>Buy from the seller who knows the maker</b><p>The closer your money gets to the artisan, the better for everyone. When you shop through LaplandGifts.com, every product links straight to the Finnish or Nordic shop that sells and ships it, and each product page shows what we know about who makes it and where.</p></div></div>
  ${foot(7, 9)}
</div>

<div class="page">
  <div class="kicker">Chapter 6</div><h2>Where to find the real thing</h2><div class="rule"></div>
  <p class="lead">Whether you're in Lapland right now or planning from home, these are real, verified places to start.</p>
  <h3>In Lapland</h3>
  <div class="grid2">
    <div class="card"><div class="sub">Rovaniemi · since 1924</div><b>LAURI Handicrafts</b><p>Historic craft house for puukko knives and kuksa cups. laurihouse.com</p></div>
    <div class="card"><div class="sub">Inari</div><b>Duodji Shop</b><p>The authorised retailer of certified Sami duodji, run by Sami artisans. duodjishop.fi</p></div>
    <div class="card"><div class="sub">Sodankylä</div><b>Jäskepuu</b><p>Master kuksa carver; custom orders carved to your wishes. jaskepuu.fi</p></div>
    <div class="card"><div class="sub">Rovaniemi</div><b>Arctic Delice</b><p>Wild berry products and Lapland delicacies, ships within the EU. arcticdelice.fi</p></div>
  </div>
  <h3>Online</h3>
  <div class="card">
    <b>LaplandGifts.com</b>
    <p>Our curated gift shop. We pick Finnish design, handicrafts, foods and winter gear worth giving, and every product links straight to the Finnish or Nordic shop that sells and ships it. Prices, materials and details are read from the seller's own page, and the product card tells you which shop you're buying from before you click.</p>
  </div>
  <p style="margin-top:5mm">More Lapland resources from the same family: <b>laplandstays.com</b> for cabins and hotels, <b>laplandactivities.fi</b> for safaris and experiences, <b>laplanddining.com</b> for restaurants and <b>lapland.blog</b> for travel stories.</p>
  ${foot(8, 9)}
</div>

<div class="page closing">
  <h2>Shop the real deal</h2>
  <p>Now you know how to spot authentic Lapland craftsmanship. Browse our curated collection at LaplandGifts.com: Finnish design, handicrafts, Arctic foods and winter gear, each one sold and shipped by the Finnish or Nordic shop behind it.</p>
  <div class="links">
    <p><b>laplandgifts.com</b> · gifts and souvenirs</p>
    <p><b>laplandstays.com</b> · cabins and hotels</p>
    <p><b>laplandactivities.fi</b> · safaris and experiences</p>
    <p><b>laplanddining.com</b> · restaurants</p>
    <p><b>lapland.blog</b> · travel stories</p>
  </div>
  <p>Sign up for the newsletter at laplandgifts.com to hear when new finds arrive.</p>
  <p class="fine">© 2026 Lapeso Oy. All rights reserved. · #LaplandVibes</p>
</div>
</body></html>`

/* ────────────────────────── DAYS GUIDE, 13 sivua ─────────────────────── */
const dayPage = (n, total, day, title, img, imgH, bodyHtml) => `
<div class="page">
  <div class="kicker">Day ${day}</div><h2>${title}</h2><div class="rule"></div>
  ${img ? `<img class="photo" style="height:${imgH}mm" src="${IMG(img)}">` : ''}
  ${bodyHtml}
  ${foot(n, total)}
</div>`

const days = `<!doctype html><html><head>${head}<title>7 Days of Lapland Magic</title></head><body>

<div class="page cover"><div class="bar"></div><div class="inner">
  <div class="brand"><span class="pink">#</span>LAPLAND<span class="amber">GIFTS</span></div>
  <h1>7 Days of<br><span class="amber">Lapland Magic</span></h1>
  <p class="sub">A day-by-day route from Rovaniemi to Inari and back: northern lights, huskies, Sami culture, the icebreaker, and a realistic budget for all of it.</p>
  <div class="img"><img src="${IMG('guide-itinerary')}"></div>
  <p class="credit">A free guide by LaplandGifts.com and Lapland.blog · #LaplandVibes</p>
</div></div>

<div class="page">
  <div class="kicker">Before you go</div><h2>Who are you?</h2><div class="rule"></div>
  <p class="lead">This route works for everyone, but your priorities differ. Find your traveller type and focus on what matters to you.</p>
  <div class="grid2" style="margin-top:4mm">
    <div class="card"><div class="sub">With kids</div><b>The Family</b><p>Focus on the reindeer farm (Day 5), Ranua wildlife park (Day 6) and Santa Claus Village (Day 7). Skip the nightlife; book a family cabin with a sauna.</p></div>
    <div class="card"><div class="sub">For two</div><b>The Couple</b><p>Prioritise the glass igloo night (Day 4), aurora safaris (Day 2) and a good dinner in Levi. Book a private cabin with a hot tub.</p></div>
    <div class="card"><div class="sub">Full arctic</div><b>The Adventurer</b><p>Husky safari (Day 5), ice floating (Day 6), backcountry snowshoeing (Day 4). Pack thermal everything.</p></div>
    <div class="card"><div class="sub">Chasing light</div><b>The Photographer</b><p>Northern lights (Day 2), blue hour landscapes (Day 4), action with huskies (Day 5). Bring a sturdy tripod and spare batteries; cold kills them fast.</p></div>
  </div>
  ${foot(2, 13)}
</div>

<div class="page">
  <div class="kicker">Before you go</div><h2>When to come</h2><div class="rule"></div>
  <p class="lead">Lapland has four distinct seasons, each with its own magic. There is no bad time, only different experiences.</p>
  <div class="season"><span class="when">November – March</span><br><b>Winter: northern lights, snow, Christmas</b><p>The classic Lapland experience, and when most visitors come. Temperatures from -10 to -30 °C. Book 3 to 6 months ahead for December to February. Best aurora odds: clear nights in February and March.</p></div>
  <div class="season"><span class="when">April – May</span><br><b>Spring: bright snow, skiing, warming sun</b><p>The secret season. Long sunny days, plenty of snow, no crowds. Locals call this the best time of year: all the snow, none of the darkness.</p></div>
  <div class="season"><span class="when">June – August</span><br><b>Summer: midnight sun, hiking, fishing</b><p>The sun never sets. Endless daylight for hiking and berry picking. Mosquitoes are brutal in July, bring repellent. No northern lights under the midnight sun.</p></div>
  <div class="season"><span class="when">September – October</span><br><b>Autumn: ruska colours, first auroras</b><p>The fells turn red, orange and gold. Best hiking season, mushrooms and berries everywhere, and the northern lights return in September. Fewer tourists, lower prices.</p></div>
  ${foot(3, 13)}
</div>

${dayPage(4, 13, 1, 'Arrival in Rovaniemi', 'exp-santa-reindeer', 50, `
  <p style="margin-top:3mm">Fly into Rovaniemi, the official hometown of Santa Claus, usually via Helsinki (1 h 15 min). Don't rush anywhere on arrival day. Settle in, walk along the frozen Kemijoki river, and find a good restaurant for your first taste of Lappish cooking.</p>
  <h3>Morning and afternoon</h3>
  <p>Check in and stay central for the first night. Then visit <b>Arktikum</b>, the Arctic science centre and museum: the single best introduction to Lapland's nature, history and indigenous cultures. Allow two to three hours.</p>
  <h3>Evening</h3>
  <p>Walk the riverfront as the city lights reflect off the ice; in winter the sky may already show faint aurora. For dinner, try <b>poronkäristys</b>, sautéed reindeer with mashed potatoes and lingonberry jam: the quintessential Lapland dish.</p>
  ${tip('Skip Santa Claus Village on arrival day, it is packed in the afternoon. Go early on your last morning instead: the village is free to enter, you only pay for activities and photos.')}`)}

${dayPage(5, 13, 2, 'Levi, adventure capital', 'exp-aurora', 50, `
  <p style="margin-top:3mm">Drive or bus north to Levi (170 km, about 2 h), Lapland's largest ski resort and adventure hub. Touristy, yes, but also the gateway to serious wilderness. Pick your daytime adventure: a snowmobile safari through frozen forest (80–150 €), downhill or cross-country skiing, or ice fishing on a frozen lake, which is more meditative than it sounds.</p>
  <h3>Evening: the northern lights hunt</h3>
  <p>This is why you came. Book a guided aurora safari: guides read the weather and drive you out of the light pollution to clear skies. Season runs September to March, with the best odds on clear February and March nights after 9 pm. And if the sky stays quiet tonight, you still have five more nights. Patience is part of the Arctic.</p>
  ${tip("Download an aurora forecast app and set alerts for KP 3+. When it goes off at 2 am, get dressed and go outside: the best aurora often appears while everyone else is asleep.")}`)}

${dayPage(6, 13, 3, 'Inari and Sami culture', 'exp-reindeer-farm', 50, `
  <p style="margin-top:3mm">Drive north to Inari (260 km from Levi, about 3 h), the cultural heart of Finnish Sami and home of the Sami Parliament. Today asks for respect and openness: you are visiting a living culture, not a theme park.</p>
  <h3>Morning: Siida</h3>
  <p>Start at <b>Siida</b>, the Sami museum and nature centre, the most important cultural stop in Lapland. The indoor exhibition spans thousands of years of Sami life; the open-air museum shows traditional buildings and herding culture. Allow two to three hours.</p>
  <h3>Afternoon and evening</h3>
  <p>Visit <b>Duodji Shop</b>, the authorised retailer of certified Sami handicrafts, then walk the shore of Lake Inari: in winter the frozen lake stretches to the horizon. For dinner, look for smoked Arctic char, sautéed reindeer and cloudberry dessert. If you are lucky, a venue may host <b>joik</b>, one of Europe's oldest living song traditions.</p>
  ${tip('Ask at Siida about visiting a herding family. Two hours with a real herder teaches more than any attraction, including the centuries-old ear-mark system that identifies every reindeer.')}`)}

${dayPage(7, 13, 4, 'Into the wilderness', 'exp-nature-snowshoe', 50, `
  <p style="margin-top:3mm">Today you leave civilisation behind: Urho Kekkonen National Park is one of Finland's largest wilderness areas at 2 550 km². Choose your level:</p>
  <div class="item"><span class="num">A</span><div><b>Day hike (easy)</b><p>Guided snowshoe hike through old-growth forest, four to six hours, lunch cooked over a fire in a wilderness hut. About 80 €.</p></div></div>
  <div class="item"><span class="num">B</span><div><b>Overnight in a wilderness hut</b><p>Hike to a remote cabin with no electricity or running water: wood stove, candles, and the most complete darkness and starriest sky you have ever seen. About 150 € guided.</p></div></div>
  <div class="item"><span class="num">C</span><div><b>Glass igloo or aurora dome</b><p>Wilderness with luxury: sleep under the lights in a heated glass dome. These sell out months ahead. 300–500 € per night.</p></div></div>
  <p>Expect -15 to -25 °C in winter, and a silence so complete you feel it in your chest. In December and January you get two to three hours of blue twilight; by March, golden hour lasts all day. This is the day you will remember most.</p>`)}

${dayPage(8, 13, 5, 'Huskies and reindeer', 'exp-husky-selfdrive', 50, `
  <p style="margin-top:3mm">Head back toward civilisation for Lapland's two most iconic animal experiences. Tourist activities, yes, but done right they are genuinely magical.</p>
  <h3>Morning: husky safari</h3>
  <p>Visit a husky farm and drive your own sled behind a team of four to six dogs for 10 to 20 km through the forest. The dogs' enthusiasm is infectious; most farms let you meet them before the ride and warm you up with hot drinks after. Two to four hours, 120–200 € per person. Book through <b>laplandactivities.fi</b> for verified operators.</p>
  <h3>Afternoon: a working reindeer farm</h3>
  <p>Visit a real herder rather than a tourist pen. You will hear how the annual herding cycle works and take a slow sleigh ride where the only sounds are snow and hooves. Two to three hours, 60–100 € per person.</p>
  ${tip('Ask the herder about ear marks: every herder cuts a unique pattern into their reindeers\\u2019 ears, an identification system used for hundreds of years.')}`)}

${dayPage(9, 13, 6, 'Icebreaker and last adventures', 'exp-icebreaker', 50, `
  <p style="margin-top:3mm">Your second-to-last day is for the experiences you haven't done yet.</p>
  <h3>Option A: Sampo icebreaker cruise, Kemi</h3>
  <p>The legendary icebreaker crushes through the metre-thick ice of the Gulf of Bothnia while you stand on deck. Then the main event: a survival suit and a float in the icy sea. Yes, you get in the water; yes, the suit keeps you warm; yes, it is the most surreal thing you will do. Runs December to April, about 300 €, full day from Rovaniemi.</p>
  <h3>Option B: Ranua wildlife park</h3>
  <p>Best for families: polar bears, Arctic foxes, wolverines, moose and lynx in large natural enclosures, all most active in winter. An hour from Rovaniemi, two to three hours on site.</p>
  <h3>Evening: sauna and avanto</h3>
  <p>End the day the Finnish way: a wood-burning sauna followed by a plunge through an ice hole. This is no tourist gimmick, and the heat-cold cycle is genuinely addictive. Many lakeside cabins keep an avanto open all winter.</p>
  ${tip('The cycle: 15 minutes of sauna, a quick cool shower, ten seconds in the ice hole, then back to the sauna. Repeat three times. You will sleep better than you have in years.')}`)}

${dayPage(10, 13, 7, 'Souvenirs and departure', 'hero-shop', 50, `
  <p style="margin-top:3mm">Your last morning is for gifts and final memories. Now you know what to look for (see our companion guide, <b>The Secret Craft</b>). Gifts that matter:</p>
  <ul class="plain">
    <li>A hand-carved kuksa for someone who loves coffee</li>
    <li>Wild cloudberry jam, near impossible to find outside the Nordics</li>
    <li>A certified Sami bracelet from Duodji Shop for someone special</li>
    <li>A puukko knife for the outdoors person in your life</li>
  </ul>
  <p>Out of luggage space? Shop at <b>laplandgifts.com</b>: every product there links straight to a Finnish or Nordic shop that ships internationally, so the gifts can travel home without you carrying them.</p>
  <h3>Packing for the flight</h3>
  <p>Puukko knives go in checked luggage, never carry-on. Wrap glass jars in clothing and ask shops for bubble wrap. Rovaniemi Airport is small and efficient: 1.5 hours before the flight is enough.</p>
  ${tip('Going home is not the end. Follow lapland.blog for stories, share your photos with #LaplandVibes, and when the Arctic calls again, and it will, you know the route.')}`)}

<div class="page">
  <div class="kicker">Reference</div><h2>The Arctic packing list</h2><div class="rule"></div>
  <p class="lead">Layering is everything, and cotton is the enemy: it soaks up sweat and freezes. Stick to merino wool and synthetics.</p>
  <div class="grid2" style="margin-top:4mm">
    <div class="card"><b>Base layer</b><ul class="plain"><li>Merino long underwear, top and bottom</li><li>Merino socks, three pairs or more</li><li>Moisture-wicking t-shirt</li></ul></div>
    <div class="card"><b>Mid layer</b><ul class="plain"><li>Fleece jacket or wool jumper</li><li>Down vest or light down jacket</li><li>Fleece-lined or softshell trousers</li></ul></div>
    <div class="card"><b>Outer layer</b><ul class="plain"><li>Windproof, waterproof parka rated to -30 °C</li><li>Waterproof snow trousers</li><li>Insulated winter boots rated to -30 °C</li></ul></div>
    <div class="card"><b>Accessories</b><ul class="plain"><li>Balaclava or neck gaiter</li><li>Insulated ski gloves plus thin liners</li><li>Wool beanie that covers the ears</li><li>Ski goggles for snowmobile days</li></ul></div>
  </div>
  <div class="card" style="margin-top:5mm"><b>Tech and extras</b><ul class="plain"><li>Spare phone batteries, the cold kills them</li><li>Hand and toe warmers, buy locally</li><li>Headlamp, essential in the polar night</li><li>Thermos for hot drinks on excursions</li></ul></div>
  ${tip('Leave at home: cotton underwear (freezes when wet), jeans (useless in cold) and regular sneakers. Most activity operators provide Arctic overalls and boots, so a heavy suitcase is unnecessary.')}
  ${foot(11, 13)}
</div>

<div class="page">
  <div class="kicker">Reference</div><h2>Budget planner</h2><div class="rule"></div>
  <p class="lead">Lapland is not cheap, but it doesn't have to break the bank. Realistic ranges per person for seven days; always check current prices.</p>
  <table>
    <tr><th></th><th>Budget</th><th>Comfort</th><th>Luxury</th></tr>
    <tr><td>Flights, return</td><td>150–300 €</td><td>200–400 €</td><td>400–800 €</td></tr>
    <tr><td>Accommodation, 7 nights</td><td>350–600 €</td><td>700–1 400 €</td><td>1 500–3 500 €</td></tr>
    <tr><td>Activities</td><td>200–400 €</td><td>500–900 €</td><td>1 000–2 000 €</td></tr>
    <tr><td>Food and drink</td><td>200–350 €</td><td>400–700 €</td><td>700–1 200 €</td></tr>
    <tr><td>Local transport</td><td>100–200 €</td><td>200–400 €</td><td>300–600 €</td></tr>
    <tr><td>Shopping and gifts</td><td>50–150 €</td><td>150–400 €</td><td>400–1 000 €</td></tr>
    <tr class="total"><td>Total</td><td>1 050–2 000 €</td><td>2 150–4 200 €</td><td>4 300–9 100 €</td></tr>
  </table>
  <h3>How to save</h3>
  <ul class="plain">
    <li>Stay in a cabin with a kitchen and cook breakfasts and lunches yourself</li>
    <li>Book activities as packages rather than one by one</li>
    <li>Come in March or November: off-peak prices, the same experiences</li>
    <li>Use the public buses between towns instead of taxis</li>
    <li>Book flights three months or more ahead; December and February are peak</li>
  </ul>
  ${foot(12, 13)}
</div>

<div class="page closing">
  <h2>Your Arctic adventure<br>starts here</h2>
  <p>Seven days, one route, and a lifetime of reasons to come back.</p>
  <div class="links">
    <p><b>lapland.blog</b> · stories, tips and inspiration</p>
    <p><b>laplandstays.com</b> · curated cabins and hotels</p>
    <p><b>laplandactivities.fi</b> · safaris and experiences</p>
    <p><b>laplanddining.com</b> · where to eat</p>
    <p><b>laplandgifts.com</b> · gifts from the shops that ship them home</p>
  </div>
  <p class="fine">© 2026 Lapeso Oy. All rights reserved. · #LaplandVibes</p>
</div>
</body></html>`

/* ────────────────────────────── renderöinti ──────────────────────────── */
const JOBS = [
  ['The-Secret-Craft-Guide-2026', craft, 9],
  ['7-Days-of-Lapland-Magic-2026a', days, 13],
]

const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  args: ['--no-sandbox', '--allow-file-access-from-files'],
})
for (const [name, html, expectedPages] of JOBS) {
  const tmp = path.join(ROOT, `_pdf_${name}.html`)
  fs.writeFileSync(tmp, html)
  const page = await browser.newPage()
  await page.goto('file:///' + tmp.replace(/\\/g, '/'), { waitUntil: 'networkidle0', timeout: 120000 })
  await page.evaluateHandle('document.fonts.ready')
  const buf = await page.pdf({ format: 'A4', printBackground: true, margin: { top: 0, bottom: 0, left: 0, right: 0 } })
  // Sivumäärävahti: sivuston copy lupaa 9 ja 13 sivua. Ylivuotanut sisältö
  // tuottaisi hiljaa ylimääräisen sivun. Lasketaan pdfjs:llä: Chromium pakkaa
  // sivupuun objektivirtoihin, joten raakatekstin greppaus näkee 0 sivua.
  const pdfjs = await import('pdfjs-dist/legacy/build/pdf.mjs')
  const doc = await pdfjs.getDocument({ data: new Uint8Array(buf) }).promise
  const pages = doc.numPages
  if (pages !== expectedPages) {
    throw new Error(`${name}: ${pages} sivua, piti olla ${expectedPages} — sisältö vuotaa yli`)
  }
  fs.writeFileSync(path.join(ROOT, 'public', 'guides', `${name}.pdf`), buf)
  fs.unlinkSync(tmp)
  await page.close()
  console.log(`  ${name}.pdf: ${pages} sivua, ${(buf.length / 1024).toFixed(0)} kt`)
}
await browser.close()
console.log('valmis')
