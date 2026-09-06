/**
 * prune-sitemap-noncanonical.mjs — drop sitemap <url> entries whose prerendered
 * page canonicalises to ANOTHER URL.
 *
 * WHY (measured 2026-09-06, OpenSEO full crawl + own crawl of every sitemap URL):
 * public/sitemap.xml is a static list, but `_prerender_routes.mjs` decides per
 * route × locale whether a page is self-canonical or consolidated to English
 * (`nativeLocales` / `canonicalLocale`). Five hub blog articles are English-only
 * in most locales, so 57 sitemap URLs (e.g. /de/blog/lapland-with-kids/) carried
 * <link rel="canonical"> to the /blog/… original. Search Console reports every
 * one as "Alternate page with proper canonical tag" — a submitted URL that we
 * ourselves say is not the page to index. The sitemap must only advertise
 * canonical URLs, and the only place that knows the final canonical is the
 * built HTML, so this runs AFTER the prerender and reads dist/.
 *
 * Runs on dist/sitemap.xml (the deployed file). public/sitemap.xml is left as the
 * editorial source list; the build output is what Google reads.
 */
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const DIST = resolve(process.cwd(), 'dist');
const SM = resolve(DIST, 'sitemap.xml');
if (!existsSync(SM)) {
  console.error('[prune-sitemap] dist/sitemap.xml missing — run after vite build + prerender');
  process.exit(1);
}
const xml = readFileSync(SM, 'utf-8');
const entries = [...xml.matchAll(/<url>[\s\S]*?<\/url>/g)].map((m) => m[0]);
if (!entries.length) {
  console.error('[prune-sitemap] no <url> entries found — refusing to write an empty sitemap');
  process.exit(1);
}
const norm = (u) => u.replace(/\/?$/, '/');
let kept = 0, dropped = [], unreadable = 0;
const out = entries.filter((entry) => {
  const loc = (entry.match(/<loc>\s*([^<\s]+)\s*<\/loc>/) || [])[1];
  if (!loc) return true;
  let path;
  try { path = new URL(loc).pathname; } catch { return true; }
  const file = resolve(DIST, path.replace(/^\//, '').replace(/\/?$/, '/') + 'index.html');
  if (!existsSync(file)) { unreadable++; return true; } // not prerendered → leave the editorial decision alone
  const html = readFileSync(file, 'utf-8');
  const canon = (html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i) || [])[1];
  if (!canon) return true;
  if (norm(canon) === norm(loc)) { kept++; return true; }
  dropped.push(`${loc} -> ${canon}`);
  return false;
});
if (dropped.length) {
  // A consolidated locale is not an alternate either: the EN entry's <xhtml:link> list
  // must match the page's own hreflang cluster, which excludes the dropped URLs.
  const droppedLocs = new Set(dropped.map((d) => norm(d.split(' -> ')[0])));
  let alternatesRemoved = 0;
  const cleaned = out.map((entry) => entry.replace(/[ \t]*<xhtml:link[^>]*href="([^"]+)"[^>]*\/>\s*\n?/g, (m, href) => {
    if (droppedLocs.has(norm(href))) { alternatesRemoved++; return ''; }
    return m;
  }));
  const head = xml.slice(0, xml.indexOf('<url>'));
  const tail = xml.slice(xml.lastIndexOf('</url>') + '</url>'.length);
  writeFileSync(SM, head + cleaned.join('\n') + tail, 'utf-8');
  console.log(`[prune-sitemap] removed ${alternatesRemoved} hreflang alternates pointing at dropped URLs`);
}
console.log(`[prune-sitemap] kept ${kept} self-canonical, dropped ${dropped.length} canonicalised elsewhere, ${unreadable} without a prerendered file (kept)`);
for (const d of dropped.slice(0, 8)) console.log('  -', d);
if (dropped.length > 8) console.log(`  … +${dropped.length - 8} more`);
