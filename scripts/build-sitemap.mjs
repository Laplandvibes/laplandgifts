/**
 * Generoi public/sitemap.xml samasta reittilähteestä kuin prerender, jotta
 * sitemap ei voi luvata sivua jota ei renderöidä eikä unohtaa sivua joka on.
 * Ajetaan build-ketjussa heti build-routes-json.mjs:n jälkeen.
 *
 * Kolme sääntöä, jotka on aiemmin jouduttu korjaamaan käsin:
 *
 * 1. **Trailing slash.** Verkoston kanoninen muoto on `/polku/`. Ilman
 *    kauttaviivaa sitemap ja canonical osoittavat eri URLiin, ja Google
 *    valitsee kumman haluaa.
 * 2. **Legal-sivut eivät kuulu sitemapiin.** Tietosuojaseloste ei kilpaile
 *    hakutuloksista. Ne tunnistetaan routes.jsonin `legal`-lipusta, jonka
 *    build-routes-json.mjs kirjoittaa.
 * 3. **hreflang.** 12 kielisen sivuston sitemap ilman alternate-linkkejä
 *    kertoo Googlelle 12 erillistä sivua saman sivun sijaan.
 *
 * `SITEMAP_DATE=2026-07-31 node scripts/build-sitemap.mjs` lukitsee lastmodin
 * (esim. kun buildataan uudelleen ilman sisältömuutosta).
 */
import { readFileSync, writeFileSync } from 'node:fs'

const SITE = 'https://laplandgifts.com'

/** Kieli → URL-prefix. Sama taulukko kuin src/i18n/useLang.ts:n LANG_PREFIX. */
const LOCALES = [
  { hreflang: 'en', prefix: '' },
  { hreflang: 'fi', prefix: '/fi' },
  { hreflang: 'de', prefix: '/de' },
  { hreflang: 'ja', prefix: '/ja' },
  { hreflang: 'es', prefix: '/es' },
  { hreflang: 'pt-BR', prefix: '/br' },
  { hreflang: 'zh-CN', prefix: '/cn' },
  { hreflang: 'ko', prefix: '/kr' },
  { hreflang: 'fr', prefix: '/fr' },
  { hreflang: 'it', prefix: '/it' },
  { hreflang: 'nl', prefix: '/nl' },
  { hreflang: 'sv', prefix: '/sv' },
]

const routes = JSON.parse(readFileSync('scripts/routes.json', 'utf8')).filter((r) => !r.legal)
const today = process.env.SITEMAP_DATE || new Date().toISOString().slice(0, 10)

const url = (prefix, path) => `${SITE}${prefix}${path === '/' ? '' : path}/`

const priority = (path) => {
  if (path === '/') return '1.0'
  if (path.startsWith('/product/')) return '0.7'
  if (path === '/gift-guides' || path === '/shipping') return '0.6'
  return '0.9'
}

const blocks = []
for (const route of routes) {
  for (const loc of LOCALES) {
    const alternates = LOCALES.map(
      (alt) =>
        `    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${url(alt.prefix, route.path)}" />`,
    ).join('\n')
    blocks.push(
      [
        '  <url>',
        `    <loc>${url(loc.prefix, route.path)}</loc>`,
        `    <lastmod>${today}</lastmod>`,
        `    <priority>${priority(route.path)}</priority>`,
        alternates,
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${url('', route.path)}" />`,
        '  </url>',
      ].join('\n'),
    )
  }
}

writeFileSync(
  'public/sitemap.xml',
  [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '        xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...blocks,
    '</urlset>',
    '',
  ].join('\n'),
)

console.log(`[sitemap] ${blocks.length} URLia (${routes.length} reittiä × ${LOCALES.length} kieltä)`)
