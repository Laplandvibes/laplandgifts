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
import { THEMES } from '../src/data/themes.ts'
import { BRANDS } from '../src/data/brands.ts'
import { BRAND_COPY } from '../src/locales/brandCopy.ts'
import { LUXURY_COPY } from '../src/locales/luxuryCopy.ts'
import { luxuryProducts } from '../src/data/luxury.ts'
import { THEME_COPY } from '../src/locales/themeCopy.ts'
import { PRODUCTS } from '../src/data/products.ts'
// 🔴 Kieltenväliset tuotetekstit ladataan SUORAAN kielitiedostoista eikä
// productCopy/index.ts:n kautta: index tuo ne laajennuksettomilla poluilla
// ('./de'), joita Node ei ratkaise. Kielitiedostot itse ovat puhdasta dataa,
// joissa on vain `import type`, jonka Node poistaa ilman resolvointia.
// (Sama oppi kuin themes.ts 12.8.)
import { PRODUCT_COPY_DE } from '../src/locales/productCopy/de.ts'
import { PRODUCT_COPY_SV } from '../src/locales/productCopy/sv.ts'
import { PRODUCT_COPY_FR } from '../src/locales/productCopy/fr.ts'
import { PRODUCT_COPY_ES } from '../src/locales/productCopy/es.ts'
import { PRODUCT_COPY_IT } from '../src/locales/productCopy/it.ts'
import { PRODUCT_COPY_NL } from '../src/locales/productCopy/nl.ts'
import { PRODUCT_COPY_PT_BR } from '../src/locales/productCopy/ptBR.ts'
import { PRODUCT_COPY_JA } from '../src/locales/productCopy/ja.ts'
import { PRODUCT_COPY_ZH_CN } from '../src/locales/productCopy/zhCN.ts'
import { PRODUCT_COPY_KO } from '../src/locales/productCopy/ko.ts'

const PRODUCT_COPY = {
  de: PRODUCT_COPY_DE, sv: PRODUCT_COPY_SV, fr: PRODUCT_COPY_FR,
  es: PRODUCT_COPY_ES, it: PRODUCT_COPY_IT, nl: PRODUCT_COPY_NL,
  'pt-BR': PRODUCT_COPY_PT_BR, ja: PRODUCT_COPY_JA,
  'zh-CN': PRODUCT_COPY_ZH_CN, ko: PRODUCT_COPY_KO,
}

/** Tuotteen nimi ja kuvaus kielellä. en ja fi ovat lähdedatassa, muut kymmenen
 *  käännöstiedostoissa. Puuttuva käännös putoaa englantiin — productCopy.test.ts
 *  vahtii ettei sellaista ole. */
const productText = (p, lang) => {
  const t = PRODUCT_COPY[lang]?.[p.slug]
  return {
    name: t?.name ?? p.name[lang] ?? p.name.en,
    description: t?.description ?? p.description[lang] ?? p.description.en,
  }
}
import { SHOP_COPY } from '../src/locales/shopCopy.ts'
import { BOUTIQUES, TOWN_IDS, boutiquesByTown, townsWithPages } from '../src/data/boutiques.ts'
import { BOUTIQUE_COPY } from '../src/locales/boutiqueCopy/index.ts'
import { HOME_META } from '../src/locales/homeMeta.ts'

const LANGS = ['en', 'fi', 'de', 'ja', 'es', 'pt-BR', 'zh-CN', 'ko', 'fr', 'it', 'nl', 'sv']
// 🔴 /unsubscribe KUULUU TÄHÄN. Se on reitti (routes.tsx LEGAL_PATHS) ja sivu
// (pages/Unsubscribe.tsx), mutta 16.8. poistettu _redirects-catch-all tarkoittaa
// että vain prerenderöity polku vastaa 200:lla. Kun sitä ei ollut tässä joukossa,
// footerin "Unsubscribe" osoitti aitoon 404:ään 22.8. asti — build ei kaatunut,
// koska reitti oli olemassa Reactissa. Reitti ilman prerenderiä ei ole reitti.
const LEGAL = new Set(['/privacy', '/terms', '/cookie-policy', '/unsubscribe'])
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
  // 🔴 CJK-lopetusmerkkien perässä EI ole välilyöntiä, joten ne haetaan
  // sellaisenaan. Ilman tätä ja/zh/ko-teksti katkesi viimeiseen
  // ASCII-sanaväliin (= latinalaisen sanan perään: "現在はFiskars.") ja
  // sai perään valepisteen — ~40 brändisivun metakuvaus kolmella kielellä.
  const stop = Math.max(
    cut.lastIndexOf('. '), cut.lastIndexOf('! '), cut.lastIndexOf('? '),
    cut.lastIndexOf('。'), cut.lastIndexOf('！'), cut.lastIndexOf('？'),
  )
  if (stop > max * 0.5) return cut.slice(0, stop + 1).trim()
  const comma = Math.max(cut.lastIndexOf(', '), cut.lastIndexOf('、'))
  if (comma > max * 0.5) return cut[comma] === '、' ? `${cut.slice(0, comma)}。` : `${cut.slice(0, comma)}.`
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
  // 。！？ päättävät lauseen ilman perässä olevaa välilyöntiä; ilman niitä
  // koko ja/zh/ko-profiili oli yksi "lause" ja putosi clampWords-katkaisuun.
  const m = masked.match(/[^.!?。！？]+(?:[。！？]+|[.!?]+(?:\s|$))/g)
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
/** CJK-lopetusmerkin perään ei kuulu välilyöntiä — lauseliitokset tehdään
 *  ASCII-välillä, joten ja/zh-teksteihin jäisi 。+ väli. */
const joinCjk = (s) => s.replace(/([。！？、]) /g, '$1')

function fitDescription(base, tails) {
  const candidates = [{ text: base, n: 0 }]
  for (let i = 0; i < tails.length; i++) {
    candidates.push({ text: `${base} ${tails[i][1]}`, n: 1 })
    for (let j = i + 1; j < tails.length; j++) {
      if (tails[i][0] === tails[j][0]) continue
      candidates.push({ text: `${base} ${tails[i][1]} ${tails[j][1]}`, n: 2 })
    }
  }
  for (const c of candidates) c.text = joinCjk(c.text)
  const inWindow = candidates
    .filter((c) => c.text.length >= DESC_MIN && c.text.length <= DESC_MAX)
    .sort((a, b) => a.n - b.n || b.text.length - a.text.length)
  if (inWindow.length) return inWindow[0].text
  const underMax = candidates
    .filter((c) => c.text.length <= DESC_MAX)
    .sort((a, b) => b.text.length - a.text.length)
  return underMax.length ? underMax[0].text : joinCjk(clampWords(base, DESC_MAX))
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
  de: [
    ['price', 'Jeder Preis wird am angegebenen Datum im Partnershop abgelesen.'],
    ['price', 'Jeder Preis stammt aus dem Partnershop und ist datiert.'],
    ['price', 'Jeder Preis stammt aus dem Partnershop.'],
    ['price', 'Preise aus den Partnershops.'],
    ['price', 'Preise aus den Shops.'],
    ['delivery', 'Das Liefergebiet steht auf jeder Karte.'],
    ['delivery', 'Liefergebiet auf jeder Karte.'],
    ['delivery', 'Liefergebiete angegeben.'],
    ['delivery', 'Mit Liefergebiet.'],
  ],
  sv: [
    ['price', 'Varje pris är hämtat från partnerbutiken det datum som visas.'],
    ['price', 'Varje pris hämtas från partnerbutiken och dateras.'],
    ['price', 'Varje pris är hämtat från partnerbutiken.'],
    ['price', 'Priset kommer från partnerbutiken.'],
    ['price', 'Priser hämtas från butikerna.'],
    ['delivery', 'Leveransområdet står på varje kort.'],
    ['delivery', 'Leveransområde på varje kort.'],
    ['delivery', 'Leveransområdena visas.'],
    ['delivery', 'Leveransområde anges.'],
  ],
  fr: [
    ['price', 'Chaque prix est relevé auprès de la boutique partenaire à la date indiquée.'],
    ['price', 'Chaque prix est relevé auprès de la boutique partenaire et daté.'],
    ['price', 'Chaque prix est relevé auprès de la boutique partenaire.'],
    ['price', 'Les prix viennent des boutiques partenaires.'],
    ['price', 'Prix relevés chez les partenaires.'],
    ['delivery', 'La zone de livraison est indiquée sur chaque fiche produit.'],
    ['delivery', 'La zone de livraison figure sur chaque fiche.'],
    ['delivery', 'Les zones de livraison sont indiquées.'],
    ['delivery', 'Zones de livraison indiquées.'],
  ],
  es: [
    ['price', 'Cada precio se consulta en la tienda asociada en la fecha indicada.'],
    ['price', 'Cada precio procede de la tienda asociada y lleva fecha.'],
    ['price', 'Cada precio se consulta en la tienda asociada.'],
    ['price', 'Precios de las tiendas asociadas.'],
    ['price', 'Precios de las tiendas.'],
    ['delivery', 'La zona de entrega figura en cada tarjeta.'],
    ['delivery', 'Zona de entrega en cada tarjeta.'],
    ['delivery', 'Zonas de entrega indicadas.'],
    ['delivery', 'Zonas de entrega.'],
  ],
  it: [
    ['price', 'Ogni prezzo è rilevato dal negozio partner nella data indicata.'],
    ['price', 'Ogni prezzo è rilevato dal negozio partner ed è datato.'],
    ['price', 'Ogni prezzo è rilevato dal negozio partner.'],
    ['price', 'I prezzi provengono dai negozi partner.'],
    ['price', 'Prezzi rilevati dai negozi.'],
    ['delivery', 'L\'area di consegna è indicata su ogni scheda.'],
    ['delivery', 'Area di consegna su ogni scheda.'],
    ['delivery', 'Aree di consegna indicate.'],
    ['delivery', 'Aree di consegna.'],
  ],
  nl: [
    ['price', 'Elke prijs is op de vermelde datum overgenomen van de partnerwinkel.'],
    ['price', 'Elke prijs is overgenomen van de partnerwinkel, met datum.'],
    ['price', 'Elke prijs is overgenomen van de partnerwinkel.'],
    ['price', 'De prijzen komen van de partnerwinkels.'],
    ['price', 'Prijzen komen van de winkels.'],
    ['delivery', 'Het bezorggebied staat op elke kaart.'],
    ['delivery', 'Bezorggebieden staan vermeld.'],
    ['delivery', 'Bezorggebied op elke kaart.'],
    ['delivery', 'Bezorggebied vermeld.'],
  ],
  'pt-BR': [
    ['price', 'Todos os preços são consultados na loja parceira na data indicada.'],
    ['price', 'Cada preço é consultado na loja parceira e vem com data.'],
    ['price', 'Cada preço é consultado na loja parceira.'],
    ['price', 'Os preços vêm das lojas parceiras.'],
    ['price', 'Preços consultados nas lojas.'],
    ['delivery', 'A área de entrega é indicada em cada cartão.'],
    ['delivery', 'Área de entrega em cada cartão.'],
    ['delivery', 'Áreas de entrega indicadas.'],
    ['delivery', 'Com área de entrega.'],
  ],
  ja: [
    ['price', '価格はすべて提携ショップから取得したもので、取得日を併記しています。'],
    ['price', '各価格は提携ショップから取得し、日付を記載しています。'],
    ['price', '価格はすべて提携ショップから取得しています。'],
    ['price', '価格は提携ショップのものです。'],
    ['price', '価格はショップから取得。'],
    ['delivery', '配送エリアは各カードに記載しています。'],
    ['delivery', '配送エリアはどのカードにも記載。'],
    ['delivery', '配送エリアを表示しています。'],
    ['delivery', '配送エリア記載。'],
  ],
  'zh-CN': [
    ['price', '每件商品的价格均取自合作商店，并注明读取日期。'],
    ['price', '价格取自合作商店，并注明读取日期。'],
    ['price', '所有价格均取自合作商店。'],
    ['price', '价格来自合作商店。'],
    ['price', '价格取自商店。'],
    ['delivery', '每张卡片上都标注了配送区域。'],
    ['delivery', '每张卡片均标注配送区域。'],
    ['delivery', '配送区域已标注。'],
    ['delivery', '附配送区域。'],
  ],
  ko: [
    ['price', '모든 가격은 표시된 날짜에 제휴 상점에서 확인한 것입니다.'],
    ['price', '가격은 제휴 상점에서 확인하며 날짜를 표시합니다.'],
    ['price', '모든 가격은 제휴 상점에서 확인합니다.'],
    ['price', '가격은 제휴 상점 기준입니다.'],
    ['price', '가격은 상점 기준입니다.'],
    ['delivery', '배송 지역은 모든 상품 카드에 표시됩니다.'],
    ['delivery', '각 카드에 배송 지역이 있습니다.'],
    ['delivery', '배송 지역이 표시됩니다.'],
    ['delivery', '배송 지역 표시.'],
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
  de: [
    ['price', 'Der Preis wird im Partnershop abgelesen, dort erfolgt auch der Kauf.'],
    ['price', 'Der Preis kommt aus dem Partnershop, dort kaufen Sie ein.'],
    ['price', 'Preis vom Partnershop, dort erfolgt der Kauf.'],
    ['price', 'Der Preis stammt aus dem Partnershop.'],
    ['price', 'Verkauf durch den Partnershop.'],
    ['price', 'Sie kaufen im Partnershop.'],
    ['price', 'Kauf im Partnershop.'],
    ['delivery', 'Das Liefergebiet steht auf dieser Seite.'],
    ['delivery', 'Liefergebiet auf dieser Seite.'],
    ['delivery', 'Liefergebiet angegeben.'],
  ],
  sv: [
    ['price', 'Priset är hämtat från partnerbutiken och köpet görs i samma butik.'],
    ['price', 'Priset kommer från partnerbutiken, där du också handlar.'],
    ['price', 'Priset hämtas från partnerbutiken, där köpet sker.'],
    ['price', 'Priset är hämtat från partnerbutiken.'],
    ['price', 'Du köper varan i partnerbutiken.'],
    ['price', 'Köpet görs i partnerbutiken.'],
    ['price', 'Säljs av partnerbutiken.'],
    ['delivery', 'Leveransområdet står på den här sidan.'],
    ['delivery', 'Leveransområdet finns på sidan.'],
    ['delivery', 'Leveransområdet anges.'],
  ],
  fr: [
    ['price', 'Le prix est relevé auprès de la boutique partenaire et l\'achat se fait chez elle.'],
    ['price', 'Le prix vient de la boutique partenaire, où se fait aussi votre achat.'],
    ['price', 'Le prix est celui de la boutique partenaire, où vous achetez.'],
    ['price', 'Le prix est relevé auprès de la boutique partenaire.'],
    ['price', 'Vous achetez dans la boutique partenaire.'],
    ['price', 'Achat dans la boutique partenaire.'],
    ['price', 'Vendu par le partenaire.'],
    ['delivery', 'La zone de livraison est indiquée sur cette page.'],
    ['delivery', 'Zone de livraison sur cette page.'],
    ['delivery', 'Zone de livraison indiquée.'],
  ],
  es: [
    ['price', 'El precio se consulta en la tienda asociada, donde también se hace la compra.'],
    ['price', 'El precio procede de la tienda asociada, donde también se compra.'],
    ['price', 'El precio es el de la tienda asociada, donde se compra.'],
    ['price', 'El precio se consulta en la tienda asociada.'],
    ['price', 'Precio y compra en la tienda asociada.'],
    ['price', 'Se compra en la tienda asociada.'],
    ['price', 'Venta en la tienda asociada.'],
    ['delivery', 'La zona de entrega figura en esta página.'],
    ['delivery', 'Zona de entrega en esta página.'],
    ['delivery', 'Zona de entrega indicada.'],
  ],
  it: [
    ['price', 'Il prezzo è rilevato dal negozio partner, dove viene effettuato anche l\'acquisto.'],
    ['price', 'Il prezzo proviene dal negozio partner, dove si effettua l\'acquisto.'],
    ['price', 'Il prezzo è rilevato dal negozio partner, dove si acquista.'],
    ['price', 'Il prezzo è rilevato dal negozio partner.'],
    ['price', 'Si acquista nel negozio partner.'],
    ['price', 'Acquisto nel negozio partner.'],
    ['price', 'Venduto dal partner.'],
    ['delivery', 'L\'area di consegna è indicata in questa pagina.'],
    ['delivery', 'Area di consegna in questa pagina.'],
    ['delivery', 'Area di consegna indicata.'],
  ],
  nl: [
    ['price', 'De prijs is overgenomen van de partnerwinkel en de aankoop gebeurt daar.'],
    ['price', 'De prijs komt van de partnerwinkel, waar u het ook koopt.'],
    ['price', 'De prijs komt van de partnerwinkel, waar u bestelt.'],
    ['price', 'De prijs is overgenomen van de partnerwinkel.'],
    ['price', 'U koopt het bij de partnerwinkel.'],
    ['price', 'Verkocht door de partnerwinkel.'],
    ['price', 'Gekocht bij de partnerwinkel.'],
    ['delivery', 'Het bezorggebied staat op deze pagina.'],
    ['delivery', 'Bezorggebied op deze pagina.'],
    ['delivery', 'Bezorggebied is vermeld.'],
  ],
  'pt-BR': [
    ['price', 'O preço é consultado na loja parceira, onde também é feita a compra.'],
    ['price', 'O preço vem da loja parceira, onde você também compra.'],
    ['price', 'O preço vem da loja parceira, onde se compra.'],
    ['price', 'O preço é consultado na loja parceira.'],
    ['price', 'A compra é feita na loja parceira.'],
    ['price', 'Comprado na loja parceira.'],
    ['price', 'Venda na loja parceira.'],
    ['delivery', 'A área de entrega está indicada nesta página.'],
    ['delivery', 'Área de entrega nesta página.'],
    ['delivery', 'Área de entrega indicada.'],
  ],
  ja: [
    ['price', '価格は提携ショップから取得し、ご購入も同じショップで行います。'],
    ['price', '価格は提携ショップのもので、ご購入もそちらで行います。'],
    ['price', '価格は提携ショップから取得し、ご購入もそちらで。'],
    ['price', '価格は提携ショップから取得しています。'],
    ['price', 'ご購入は提携ショップで行います。'],
    ['price', 'ご購入は提携ショップにて。'],
    ['price', '販売は提携ショップ。'],
    ['delivery', '配送エリアはこのページに記載しています。'],
    ['delivery', '配送エリアはこのページに記載。'],
    ['delivery', '配送エリアを記載。'],
  ],
  'zh-CN': [
    ['price', '价格取自合作商店，购买同样在该商店完成。'],
    ['price', '价格来自合作商店，您也在那里购买。'],
    ['price', '价格取自合作商店，在该店购买。'],
    ['price', '价格均取自合作商店。'],
    ['price', '您在合作商店购买。'],
    ['price', '在合作商店购买。'],
    ['price', '合作商店售出。'],
    ['delivery', '本页面标注了配送区域。'],
    ['delivery', '本页标注配送区域。'],
    ['delivery', '附配送区域。'],
  ],
  ko: [
    ['price', '가격은 제휴 상점에서 확인하며 구매도 해당 상점에서 이루어집니다.'],
    ['price', '가격은 제휴 상점 기준이며 구매도 그곳에서 이루어집니다.'],
    ['price', '가격은 구매가 이루어지는 제휴 상점에서 확인합니다.'],
    ['price', '표시된 가격은 제휴 상점에서 확인합니다.'],
    ['price', '구매는 제휴 상점에서 이루어집니다.'],
    ['price', '제휴 상점에서 구매합니다.'],
    ['price', '판매처는 제휴 상점.'],
    ['delivery', '배송 지역은 이 페이지에 표시되어 있습니다.'],
    ['delivery', '배송 지역은 이 페이지에 있습니다.'],
    ['delivery', '배송 지역을 표시합니다.'],
  ],
}

/**
 * Rakentaa reittimerkinnän KAIKILLE kahdelletoista kielelle.
 *
 * 🔴 Tämä luki aiemmin näin: "`en` ja `fi` ovat natiiveja, muut kymmenen
 * saavat englannin: kategoria- ja tuotesivujen sisältö itsekin on näillä
 * kielillä englantia (SHOP_COPY), joten saksankielinen meta lupaisi
 * saksankielisen sivun jota ei ole."
 *
 * Se oli totta kun se kirjoitettiin, mutta se vanhentui: SHOP_COPY,
 * THEME_COPY, BRAND_COPY, LUXURY_COPY ja productCopy ovat kaikki nyt
 * kahdellatoista kielellä, ja saksankielinen kategoriasivu sanoo
 * "Finnisches Design". Vain meta jäi päivittämättä.
 *
 * Mitattu 12.8.2026 ennen korjausta: 175 reitistä 168:lla oli
 * englanninkielinen otsikko ja kuvaus kymmenellä kielellä — 1 680 URLia,
 * jotka hreflang esitteli omina kieliversioinaan mutta jotka näyttivät
 * hakukoneelle lähes identtisiltä.
 *
 * 🔴 `build` saa kielen ja palauttaa { title, description }. Jos se heittää
 * jollakin kielellä, reitti EI hiljaa putoa englantiin vaan build kaatuu:
 * hiljainen fallback on juuri se, mikä piti tämän vian piilossa kuukausia.
 */
function route(path, build) {
  const byLang = {}
  for (const l of LANGS) {
    const v = build(l)
    if (!v || !v.title || !v.description) {
      throw new Error(`route(${path}): kieli ${l} palautti tyhjän metan`)
    }
    byLang[l] = v
  }
  return {
    path,
    fallbackTitle: byLang.en.title,
    fallbackDescription: byLang.en.description,
    fallbackTitleByLang: Object.fromEntries(LANGS.map((l) => [l, byLang[l].title])),
    fallbackDescriptionByLang: Object.fromEntries(
      LANGS.map((l) => [l, byLang[l].description]),
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
    return route(cat.slug, build)
  })

// ── teemat ─────────────────────────────────────────────────────────────────
// Teemasivu saa metansa samasta datasta kuin sivu itse. Ilman tätä lohkoa
// reitti olisi olemassa selaimessa mutta puuttuisi prerenderistä ja
// sitemapista, eli sivu olisi kävijälle olemassa ja Googlelle olematon.
const themeRoutes = THEMES.map((theme) => {
  const build = (lang) => {
    const c = THEME_COPY[lang]
    const name = c.name[theme.id]
    return {
      title: fitTitle([`${name} | ${BRAND}`, name]),
      description: fitDescription(c.intro[theme.id], CATEGORY_TAILS[lang]),
    }
  }
  return route(`/theme/${theme.id}`, build)
})

// ── brändit ────────────────────────────────────────────────────────────────
// Brändisivun meta tulee samasta tekstistä kuin sivu itse. Kuvaus on
// esittelyn ensimmäiset lauseet, koska ne kantavat sen mitä brändi on.
const luxuryRoute = (() => {
  // lead on funktio (n, min, max): samat luvut kuin sivulla, koko katalogista
  // (sivu suodattaa lisäksi toimitusmaan mukaan, jota metassa ei ole).
  const lux = luxuryProducts(PRODUCTS)
  const money = (lang, n) => new Intl.NumberFormat(lang === 'pt-BR' ? 'pt-BR' : lang, { style: 'currency', currency: lux[0]?.currency ?? 'EUR', maximumFractionDigits: 0 }).format(n)
  const lead = (lang) => LUXURY_COPY[lang].lead(lux.length, money(lang, Math.min(...lux.map((p) => p.priceFrom))), money(lang, Math.max(...lux.map((p) => p.priceFrom))))
  const build = (lang) => ({
    title: fitTitle([`${LUXURY_COPY[lang].title} | ${BRAND}`, LUXURY_COPY[lang].title]),
    description: fitDescription(leadingSentences(lead(lang)), CATEGORY_TAILS[lang]),
  })
  return route('/luxury', build)
})()

const brandHubRoute = (() => {
  const build = (lang) => ({
    title: fitTitle([`${BRAND_COPY[lang].indexH1} | ${BRAND}`, BRAND_COPY[lang].indexH1]),
    description: fitDescription(BRAND_COPY[lang].indexIntro, CATEGORY_TAILS[lang]),
  })
  return route('/brands', build)
})()

const brandRoutes = BRANDS.map((brand) => {
  const build = (lang) => {
    const c = BRAND_COPY[lang]
    return {
      title: fitTitle([`${brand.name} | ${BRAND}`, brand.name]),
      description: fitDescription(leadingSentences(c.profile[brand.id]), CATEGORY_TAILS[lang]),
    }
  }
  return route(`/brand/${brand.id}`, build)
})

// ── tuotteet ───────────────────────────────────────────────────────────────
const productRoutes = PRODUCTS.map((product) => {
  const build = (lang) => {
    const { name, description } = productText(product, lang)
    // Brändi otsikkoon vain jos nimi ei jo kanna sitä: "Marttiini Marttiini
    // Ilves 131" on huonompi otsikko kuin kumpikaan osa yksin.
    const brandWord = product.brand.split(' ')[0].toLowerCase()
    const withBrand = name.toLowerCase().includes(brandWord) ? name : `${product.brand} ${name}`
    // Ehdokkaat pisimmästä lyhimpään. Kun kumppanibrändi ja oma brändi eivät
    // mahdu yhtä aikaa, oma brändi voittaa: se erottaa tuloksen kumppanin
    // omasta hakutuloksesta, jossa sama tuote on samalla nimellä.
    return {
      title: fitTitle([`${withBrand} | ${BRAND}`, `${name} | ${BRAND}`, withBrand, name]),
      description: fitDescription(leadingSentences(description), PRODUCT_TAILS[lang]),
    }
  }
  return route(`/product/${product.slug}`, build)
})

// ── muut sisältösivut ──────────────────────────────────────────────────────
// 🔴 Nämä kaksi sivua saavat yhä englannin muille kielille, ja se on
// TIETOINEN valinta eikä unohdus: gift-guides- ja shipping-sivujen oma
// sisältö on käännetty vain englanniksi ja suomeksi, joten saksankielinen
// meta lupaisi saksankielisen sivun jota ei ole. Kun sivut käännetään,
// vaihda nämä samaan `route(path, build)`-muotoon kuin muut.
const enFiOnly = (path, en, fi) => ({
  path,
  fallbackTitle: en.title,
  fallbackDescription: en.description,
  fallbackTitleByLang: Object.fromEntries(LANGS.map((l) => [l, l === 'fi' ? fi.title : en.title])),
  fallbackDescriptionByLang: Object.fromEntries(
    LANGS.map((l) => [l, l === 'fi' ? fi.description : en.description]),
  ),
})

const giftGuides = enFiOnly(
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

const shipping = enFiOnly(
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

// Keräilijäsivu: kohdetermi on suomenkielinen ("harvinaiset muumimukit"),
// sisältö kirjoitettu suomeksi ja englanniksi (MoominMugs.tsx). Sama
// enFiOnly-malli kuin lahjaoppaalla ja toimitussivulla.
const moominMugs = enFiOnly(
  '/harvinaiset-muumimukit',
  {
    title: 'Rare Arabia Moomin mugs and their value | LaplandGifts',
    description:
      'Why retired designs, seasonal mugs and special editions raise the value of Arabia Moomin mugs, how the base stamp dates a mug, and where to buy current designs.',
  },
  {
    title: 'Harvinaiset muumimukit ja niiden arvo | LaplandGifts',
    description:
      'Miksi lopetetut kuviot, kausimukit ja erikoiserät nostavat Arabian muumimukien arvoa, miten pohjaleima ajoittaa mukin ja mistä nykymalleja voi yhä ostaa.',
  },
)

// Opassivu: kohdetermi on suomenkielinen ("pakuri"), sisältö kirjoitettu
// suomeksi ja englanniksi (Pakuri.tsx). Sama enFiOnly-malli kuin
// keräilijäsivulla. 🔴 Ei terveysväitteitä metassakaan: kuvaus lupaa
// rehellisen katsauksen, ei vaikutuksia.
const pakuri = enFiOnly(
  '/pakuri',
  {
    title: 'Chaga: what it is and how to use it | LaplandGifts',
    description:
      'What chaga (pakuri) is, how chunks, extract powder and tincture are used, what research says and does not, and why harvesting needs the landowner’s permission.',
  },
  {
    title: 'Pakuri: käyttö, tutkimus ja pohjoinen keruu | LaplandGifts',
    description:
      'Mitä pakuri eli pakurikääpä on, miten rouhetta, uutejauhetta ja tinktuuraa käytetään, mitä tutkimus sanoo ja mitä ei, ja miksi keruu vaatii maanomistajan luvan.',
  },
)

// Sama tietoinen valinta kuin enFiOnly, mutta natiivit kielet ovat saksa ja
// englanti: /finnish-specialties on saksalaiselle ostajalle kirjoitettu opas
// (kohdetermi "finnische spezialitäten"), jonka sisältö on de+en. Muut
// kymmenen kieltä saavat englannin metan, koska sivukin on niillä englantia.
const deEnOnly = (path, en, deMeta) => ({
  path,
  fallbackTitle: en.title,
  fallbackDescription: en.description,
  fallbackTitleByLang: Object.fromEntries(
    LANGS.map((l) => [l, l === 'de' ? deMeta.title : en.title]),
  ),
  fallbackDescriptionByLang: Object.fromEntries(
    LANGS.map((l) => [l, l === 'de' ? deMeta.description : en.description]),
  ),
})

const specialties = deEnOnly(
  '/finnish-specialties',
  {
    title: `Finnish specialities: what to buy | ${BRAND}`,
    description:
      'Salmiakki, Fazer chocolate, rye bread, squeaky cheese and tar: which Finnish specialities are the real thing, which are tourist bait, and what ships abroad.',
  },
  {
    title: `Finnische Spezialitäten: Was lohnt sich? | ${BRAND}`,
    description:
      'Salmiakki, Fazer-Schokolade, Roggenbrot, Leipäjuusto und Terva: Was davon ist echt finnisch, was Touristenkram — und was übersteht den Versand nach Hause?',
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

// ── putiikkihakemisto ──────────────────────────────────────────────────────
// Nämä käyttävät routeByLangia eivätkä routea, koska hakemiston sisältö on
// aidosti käännetty kaikille 12 kielelle (SHOP_COPY.boutique + BOUTIQUE_COPY).
// Kategoria- ja tuotesivuilla englanti on oikea meta, koska sivukin on
// englanniksi; tässä se lupaisi vähemmän kuin sivu antaa.
const byLang = (build) => Object.fromEntries(LANGS.map((l) => [l, build(l)]))

// 🔴 Kuvaukset luetellaan paikkakunnat ja putiikit nimeltä, koska juuri ne
// ovat hakusanat joita varten hakemisto on olemassa ("matkamuistot Rovaniemi").
// Pelkkä hubIntro ylitti 160 merkin rajan kuudella kielellä.
const boutiqueHubRoute = routeByLang(
  '/boutiques',
  byLang((l) => {
    const t = SHOP_COPY[l].boutique
    const towns = TOWN_IDS.map((x) => t.townNames[x]).join(', ')
    return {
      title: `${t.hubTitle} | LaplandGifts`,
      description: `${t.hubLead} ${t.count(BOUTIQUES.length)}: ${towns}.`,
    }
  }),
)

const boutiqueTownRoutes = townsWithPages().map((town) =>
  routeByLang(
    `/boutiques/${town}`,
    byLang((l) => {
      const t = SHOP_COPY[l].boutique
      const bs = boutiquesByTown(town)
      return {
        title: `${t.townNames[town]}: ${t.hubTitle} | LaplandGifts`,
        description: `${t.count(bs.length)}: ${bs.map((b) => b.name).join(', ')}.`,
      }
    }),
  ),
)

const boutiqueRoutes = BOUTIQUES.map((b) =>
  routeByLang(
    `/boutique/${b.slug}`,
    byLang((l) => {
      const t = SHOP_COPY[l].boutique
      const place = `${t.townNames[b.town]}${b.district ? `, ${b.district}` : ''}`
      return {
        title: `${b.name}, ${t.townNames[b.town]} | LaplandGifts`,
        description: `${BOUTIQUE_COPY[l][b.slug].description} ${place}.`,
      }
    }),
  ),
)

const routes = [
  routeByLang('/', HOME_META),
  ...categoryRoutes,
  ...themeRoutes,
  brandHubRoute,
  luxuryRoute,
  ...brandRoutes,
  ...productRoutes,
  giftGuides,
  specialties,
  moominMugs,
  pakuri,
  shipping,
  boutiqueHubRoute,
  ...boutiqueTownRoutes,
  ...boutiqueRoutes,
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
