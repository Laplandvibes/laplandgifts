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

  // ── treats, erä 2026-08-01 b: Moomin Shopin elintarvikkeet ────────────────
  // Nämä jäivät aiemmasta erästä pois, koska toimitusmallissa ei ollut tapaa
  // sanoa "maailmanlaajuinen paitsi USA, Etelä-Amerikka ja Australia".
  // Product.shipsExcept kertoo sen nyt, joten tuotteet ovat mukana.
  [
    'moomin-wild-blueberry-coffee',
    'https://cdn.shopify.com/s/files/1/0713/7997/files/7391508253023moomintrollcoffee4.jpg?v=1759210313',
  ],
  [
    'moomin-lingonberry-blueberry-dark-chocolate',
    'https://cdn.shopify.com/s/files/1/0713/7997/files/7350079030112blueberryandlingonberrychocolatemoomintroll2.jpg?v=1745917565',
  ],
  [
    'moomin-berry-picking-tea',
    'https://cdn.shopify.com/s/files/1/0713/7997/files/f2c931d17af2683468f2985749a03979d236ee6d_37188g_Muumi_Marjaretki_20x1_75_g_RFA6413440000334.jpg?v=1756445677',
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
  // Era 2.8.2026: North Outdoorin ja Haltin varusteet. Lahde on kummankin
  // kaupan oma tuotegallerian paakuva (Shopify /products.json, images[0]).
  [
    'north-outdoor-arctic-250-balaclava',
    'https://cdn.shopify.com/s/files/1/0619/0933/6273/files/N34109A01-ONE-SIZE_northoutdoor-merino-wool-clothing.jpg?v=1773738509',
  ],
  [
    'north-outdoor-kevo-gloves',
    'https://cdn.shopify.com/s/files/1/0619/0933/6273/files/N34307B13_northoutdoor-merino-wool_1.png?v=1754416725',
  ],
  [
    'north-outdoor-heavyweight-gaiter',
    'https://cdn.shopify.com/s/files/1/0619/0933/6273/files/N34010A01_northoutdoor-merino-wool-clothing_1.png?v=1754411624',
  ],
  [
    'north-outdoor-sointu-cardigan',
    'https://cdn.shopify.com/s/files/1/0619/0933/6273/files/N28702R16_northoutdoor-merino-wool-clothing-w12_1.jpg?v=1777023352',
  ],
  [
    'halti-hossa-baselayer-men',
    'https://cdn.shopify.com/s/files/1/0071/6197/0786/files/0880286_G34_HossaMIIMerinolayerset_main.jpg?v=1771923866',
  ],
  [
    'halti-hossa-baselayer-women',
    'https://cdn.shopify.com/s/files/1/0071/6197/0786/files/0880285_G60_Halti_Hossa_II_Merino_Base_Layer_Womens_main.png?v=1768381058',
  ],
  [
    'halti-sykli-ski-gloves',
    'https://cdn.shopify.com/s/files/1/0071/6197/0786/files/0840754_P00_SykliSkiGloves_main.jpg?v=1764847280',
  ],
  [
    'halti-taival-dx-jacket',
    'https://cdn.shopify.com/s/files/1/0071/6197/0786/files/0640882_H24_Taival_MDX3Ljacket_ai_generated_main.jpg?v=1783581362',
  ],
  [
    'halti-merino-socks-2pack',
    'https://cdn.shopify.com/s/files/1/0071/6197/0786/files/0870467_F5599_Merinostripedcrew2packsocks_main.jpg?v=1761202099',
  ],
  [
    'halti-heatgrid-midlayer',
    'https://cdn.shopify.com/s/files/1/0071/6197/0786/files/0880211_G34_HeatGrid_Mlayerjacket_ai_generated_main.jpg?v=1783581364',
  ],
  [
    'north-outdoor-arctic-260-zip-neck',
    'https://cdn.shopify.com/s/files/1/0619/0933/6273/files/N11507GA2_northoutdoor-merino-wool-clothing-m12_1.jpg?v=1754409413',
  ],
  // Era 2.8.2026: suomalaiset makeisklassikot Suomikaupasta. Lahde on
  // kaupan oma tuotekuva (JSON-LD image), hinta ja teksti samasta lahteesta.
  [
    'fazer-pantteri-salmiakki',
    'https://suomikauppa.fi/cdn/shop/files/06416453051355_C1C1.jpg?v=1759735718&width=1920',
  ],
  [
    'fazer-super-salmiakki',
    'https://suomikauppa.fi/cdn/shop/products/06411401037696_C1N1.jpg?v=1678738263&width=1920',
  ],
  [
    'halva-salmiakkiruutu',
    'https://suomikauppa.fi/cdn/shop/files/06420900004795_C1N1_1d55897d-d6d6-46b3-8ca8-53b90bd41b39.jpg?v=1710934436&width=1920',
  ],
  [
    'fazer-hazelnut-chocolate',
    'https://suomikauppa.fi/cdn/shop/files/06411401015151_C1C1.jpg?v=1708161765&width=1920',
  ],
  [
    'fazer-light-milk-chocolate',
    'https://suomikauppa.fi/cdn/shop/files/06416453095045_C3C1.jpg?v=1759735890&width=1920',
  ],
  [
    'fazer-fazerina',
    'https://suomikauppa.fi/cdn/shop/files/06416453056107_C3C1.jpg?v=1758091757&width=1920',
  ],
  [
    'leijona-tar-liquorice',
    'https://suomikauppa.fi/cdn/shop/products/06420256000052_A1C1.jpg?v=1678735482&width=1920',
  ],
  [
    'fazer-jaffa-orange',
    'https://suomikauppa.fi/cdn/shop/files/06416453554641_C1L1_4a18536a-7454-4702-9e1b-75cb6198b063.jpg?v=1710932137&width=1920',
  ],
  [
    'sisu-xylitol-salmiakki',
    'https://suomikauppa.fi/cdn/shop/products/06420256001783_A1N1.jpg?v=1678735730&width=1920',
  ],
  // Era 2.8.2026 osa 2: Muumi-design ja saunatuotteet Suomikaupasta.
  [
    'arabia-moomin-mug-snufkin',
    'https://suomikauppa.fi/cdn/shop/products/Moominmug0-3LSnufkingreen_1.jpg?v=1635498092&width=1920',
  ],
  [
    'arabia-moomin-mug-mymble',
    'https://suomikauppa.fi/cdn/shop/products/6411800055598.jpg?v=1635498325&width=1920',
  ],
  [
    'arabia-moomin-mug-friendship',
    'https://suomikauppa.fi/cdn/shop/products/6411801005578.jpg?v=1635501278&width=1920',
  ],
  [
    'fiskars-moominpappa-scissors',
    'https://suomikauppa.fi/cdn/shop/products/Muumipappa-akset.jpg?v=1635498594&width=1920',
  ],
  [
    'fiskars-moominmamma-scissors',
    'https://suomikauppa.fi/cdn/shop/files/6411509951528-2.jpg?v=1769147006&width=1920',
  ],
  [
    'arabia-moomin-figurine-moomintroll',
    'https://suomikauppa.fi/cdn/shop/products/6411801003338.jpg?v=1635500106&width=1920',
  ],
  [
    'arabia-moomin-figurine-snorkmaiden',
    'https://suomikauppa.fi/cdn/shop/products/6411801003321.jpg?v=1635500106&width=1920',
  ],
  [
    'hackman-moomin-cutlery-set',
    'https://suomikauppa.fi/cdn/shop/files/seikkailumuutto.jpg?v=1701429025&width=1920',
  ],
  [
    'rento-tar-sauna-soap',
    'https://suomikauppa.fi/cdn/shop/files/RentoTervasaunasaippua150g.jpg?v=1742365576&width=1920',
  ],
  [
    'rento-birch-sauna-honey',
    'https://suomikauppa.fi/cdn/shop/products/6410413175327-scaled.jpg?v=1635499682&width=1920',
  ],
  [
    'rento-blueberry-sauna-honey',
    'https://suomikauppa.fi/cdn/shop/products/6410412850454-scaled.jpg?v=1635499649&width=1920',
  ],
  [
    'rento-sauna-pillow',
    'https://suomikauppa.fi/cdn/shop/files/Rento_Pino_Saunatyyny_50x22_cm_musta.jpg?v=1766316100&width=1920',
  ],
  [
    'rento-linen-back-scrubber',
    'https://suomikauppa.fi/cdn/shop/products/6410412651440.jpg?v=1635499211&width=1920',
  ],
  [
    'rento-linen-wash-mitt',
    'https://suomikauppa.fi/cdn/shop/products/6410412651419.jpg?v=1635499211&width=1920',
  ],
  [
    'emendo-sauna-scents',
    'https://suomikauppa.fi/cdn/shop/products/emendotuoksut3puuteline.jpg?v=1663843787&width=1920',
  ],
  [
    'aurora-mini-kuksa',
    'https://suomikauppa.fi/cdn/shop/products/6410411828607-scaled.jpg?v=1635499702&width=1920',
  ],
  [
    'rento-sauna-gift-box',
    'https://suomikauppa.fi/cdn/shop/products/6410416116860_kuva1.jpg?v=1650971256&width=1920',
  ],
  // Era 2026-08-03: Elamyslahjat.fi-elamyslahjakortit. Lahde on tuotesivun
  // og:image ILMAN query-parametreja: parametrillinen URL on 140 px:n
  // thumbnail (?w=140&h=97&fit=crop), stripattuna sama polku antaa
  // taysikokoisen (mitattu 2500x1407).
  [
    'husky-farm-safari-rovaniemi',
    'https://cdn.elamyslahjat.fi/storage/photos/products/106217/16209.jpg',
  ],
  [
    'reindeer-safari-rovaniemi',
    'https://cdn.elamyslahjat.fi/storage/photos/products/106181/16139.jpg',
  ],
  [
    'aurora-tour-kilpisjarvi',
    'https://cdn.elamyslahjat.fi/storage/photos/products/119541/50246.jpg',
  ],
  [
    'glass-igloo-night-levi',
    'https://cdn.elamyslahjat.fi/storage/photos/products/116317/23100.jpg',
  ],
  [
    'gold-panning-day-inari',
    'https://cdn.elamyslahjat.fi/storage/photos/products/116437/23910.jpg',
  ],
  // Era 6.8.2026: superfoodit Ruohonjuuresta (Vesa: "enemman taytetta").
  [
    'foodin-six-mushroom-blend',
    'https://www.ruohonjuuri.fi/cdn/shop/files/aeccde427cd2f1d756e4b8c6b9d60a58.jpg?v=1745627672&width=1024',
  ],
  [
    'foodin-nordic-berry-powder',
    'https://www.ruohonjuuri.fi/cdn/shop/files/FOODIN-6430055218824-2.jpg?v=1720009193&width=1024',
  ],
  [
    'foodin-chaga-tincture',
    'https://www.ruohonjuuri.fi/cdn/shop/products/d0d569ab77caa10fbc8498ae081b033d.png?v=1597236923&width=1024',
  ],
  [
    'kaavi-chaga-chunks',
    'https://www.ruohonjuuri.fi/cdn/shop/files/KAAVI-6430060220430-2.jpg?v=1726726998&width=1024',
  ],
  [
    'puhdistamo-instant-chaga',
    'https://www.ruohonjuuri.fi/cdn/shop/files/PUHDIS-6430039220386-1.jpg?v=1699372704&width=1024',
  ],
  [
    'puhdistamo-conifer-extract',
    'https://www.ruohonjuuri.fi/cdn/shop/files/PUHDIS-6430039220645-1.jpg?v=1699374709&width=1024',
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
