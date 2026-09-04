/**
 * Mainospaikkojen data — laplandgifts.com (LV Media -inventaari).
 *
 * Myyntiprosessi:
 *   1. Kumppani ostaa paikan (LV Media -portaali → lv_bookings)
 *   2. Agentti täyttää sopivan paikan tässä tiedostossa Partner-objektilla
 *   3. `npm run build` + wrangler deploy → kortti/banneri ilmestyy sivulle
 *
 * JAETTU MALLI (Vesa 2026-07-11):
 *   sponsors[0] = PÄÄKUMPPANI  → kompakti banneri heti heron alla (paras paikka)
 *   sponsors[1] = KAKKOSPÄÄKUMPPANI → kortti HomeAdSlots-osiossa ylhäällä
 *   spots       = 6 kohdekohtaista premium-paikkaa (Rovaniemi, Levi, Ylläs,
 *                 Saariselkä, Kittilä, Inari)
 *
 * Tyhjä paikka (null) renderöi "Haluatko mainoksesi tähän?" -house-adin, joka
 * linkittää https://laplandvibes.com/media/site/laplandgifts + GA4
 * advertise_here_click -eventin.
 */

import type { HomeAdSlotsConfig } from '../shared/HomeAdSlots';
import type { Partner } from '../shared/PartnerSlot';
import { DEFAULT_PREMIUM_SPOTS } from '../shared/PremiumSpotGrid';

/**
 * Keloa Eyewear, Sodankylä — PÄÄKUMPPANI (sponsors[0], banneri heti heron alla).
 *
 * Yksi kymmenestä maksuttomasta kumppanipaikasta (Vesa 10.8.2026: "Laskua ei
 * tule kummastakaan"), mutta SAMA tuote kuin maksavalla: artikkeli hubissa +
 * premium-mainospaikka oman kategorian pääsivulla. Luonteva kategoria on
 * lahjat/matkamuistot, ja Vesa lupasi 10.8. nimenomaan laplandgifts.com-noston.
 *
 * Tekstit ovat Lauran omasta, 31.8. hyväksymästä artikkelitekstistä — ei uutta
 * copya, jota hän ei ole nähnyt. Kuva on hänen oma ateljeekuvansa (13.8.).
 * Logo on rajattu sanamerkki ilman iskulausetta (chip on aina valkoinen, joten
 * tumma vihreä merkki käy sellaisenaan).
 *
 * `url` kulkee go.laplandvibes.com/go/keloa-reitin kautta, jotta klikki päätyy
 * D1:een kuten jokainen muu mainospaikka. 🔴 Reitti on lisätty worker.js:ään
 * 2.9. mutta Worker on deployaamatta — ÄLÄ deployaa tätä sivustoa ennen kuin
 * /go/keloa vastaa 302 eikä 400. `articleUrl` on toimituksellinen linkki,
 * ei Workerin kautta.
 *
 * 🔴🔴 KIELIVERSIO (Niina/Bear 2026-07-30 -sääntö, Vesa löysi rikon 4.9.):
 * linkin pitää viedä kumppanin OMAAN kieliversioon. keloa.fi ilmoittaa
 * hreflangissaan kaksi: fi = / ja en = /en/home/. `urlFi` menee Workerin
 * oletuspohjaan (suomenkielinen juuri), `url` — eli kaikki muut lokaalit —
 * kantaa `dest`-parametrin englanninkieliseen versioon. Worker hyväksyy
 * destin vain jos se alkaa reitin `base`illa, joten se ei ole avoin ohjaus.
 * Molemmat mitattu livenä 4.9.2026: HTTP 200.
 */
const KELOA: Partner = {
  name: 'Keloa',
  tagline: 'Käsintehdyt silmälasit tuohesta ja poronsarvesta',
  taglineEn: 'Handmade eyewear from birch bark and reindeer antler',
  taglineSv: 'Handgjorda glasögon av näver och renhorn',
  url: 'https://go.laplandvibes.com/go/keloa?sid=laplandgifts_home_main_partner&dest=https%3A%2F%2Fkeloa.fi%2Fen%2Fhome%2F',
  urlFi: 'https://go.laplandvibes.com/go/keloa?sid=laplandgifts_home_main_partner',
  photoSrc: '/images/partners/keloa-atelier.webp',
  imageSrc: '/images/partners/keloa-atelier.webp',
  logoSrc: '/images/partners/keloa.png',
  logoAlt: 'Keloa',
  ctaLabel: 'Tutustu Keloaan',
  ctaLabelEn: 'Discover Keloa',
  ctaLabelSv: 'Upptäck Keloa',
  accent: '#35493E',
  description:
    'Optikon ateljee Sodankylän pääkadulla, jossa silmälasikehykset ja korut tehdään käsin suomalaisesta tuohesta ja luonnollisesti irronneesta poronsarvesta. Ylijäämästä syntyy koruja ja matkamuistoja.',
  descriptionEn:
    "An optician's atelier on the main street of Sodankylä, where eyeglass frames and jewellery are made by hand from Finnish birch bark and naturally shed reindeer antler. The offcuts become jewellery and souvenirs.",
  descriptionSv:
    'En optikers ateljé vid Sodankyläs huvudgata, där glasögonbågar och smycken görs för hand av finländsk näver och naturligt fällt renhorn. Av spillet blir det smycken och souvenirer.',
  articleUrl: 'https://laplandvibes.com/fi/blog/keloa',
  articleUrlEn: 'https://laplandvibes.com/blog/keloa',
  articleUrlSv: 'https://laplandvibes.com/sv/blog/keloa',
  articleLabel: 'Lue Keloan tarina',
  articleLabelEn: "Read Keloa's story",
  articleLabelSv: 'Läs Keloas historia',
};

export const AD_SLOTS: HomeAdSlotsConfig = {
  siteSlug: 'laplandgifts',
  sponsors: [KELOA, null],
  spots: DEFAULT_PREMIUM_SPOTS,
};
