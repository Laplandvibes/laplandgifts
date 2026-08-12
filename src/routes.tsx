import { Fragment, lazy, type ReactElement } from 'react'
import { Routes, Route } from 'react-router-dom'
import { LANG_PREFIX } from './i18n/useLang'
import { CATEGORIES } from './data/categories'
import { THEMES } from './data/themes'
import { BRANDS } from './data/brands'
import { boutiqueTownPaths } from './data/boutiques'

const Home = lazy(() => import('./pages/Home'))
const Category = lazy(() => import('./pages/Category'))
const Theme = lazy(() => import('./pages/Theme'))
const Brand = lazy(() => import('./pages/Brand'))
const Brands = lazy(() => import('./pages/Brands'))
const Product = lazy(() => import('./pages/Product'))
const GiftGuides = lazy(() => import('./pages/GiftGuides'))
const Boutiques = lazy(() => import('./pages/Boutiques'))
const BoutiqueTown = lazy(() => import('./pages/BoutiqueTown'))
const Boutique = lazy(() => import('./pages/Boutique'))
const Shipping = lazy(() => import('./pages/Shipping'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Terms = lazy(() => import('./pages/Terms'))
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'))
const Unsubscribe = lazy(() => import('./pages/Unsubscribe'))
const NotFound = lazy(() => import('./pages/NotFound'))

/**
 * Sisältöreitit ilman kieliprefixiä. Prerender ja sitemap lukevat tämän, joten
 * uusi kategoria tulee reitiksi, prerenderiin ja sitemapiin yhdellä rivillä
 * categories.ts:ssä.
 *
 * `/gift-guides` ja `/shipping` ovat mukana Task 12:sta alkaen, koska sivut
 * ovat olemassa. Reittiä ei julisteta ennen kuin sillä on sivu: muuten linkki
 * navissa veisi 404:ään, jonka päälle murupolku piirtäisi oikean näköisen
 * polun.
 */
export const CONTENT_PATHS: string[] = [
  '/',
  ...CATEGORIES.map((c) => c.slug),
  // Teemasivut tulevat datasta samoin kuin kategoriat: uusi teema saa
  // reitin, prerenderin ja sitemap-rivin yhdella rivilla themes.ts:ssa.
  ...THEMES.map((t) => `/theme/${t.id}`),
  ...BRANDS.map((b) => `/brand/${b.id}`),
  '/gift-guides',
  '/shipping',
  '/boutiques',
  '/brands',
  // Paikkakuntapolut tulevat datasta: kynnyksen ylittävä paikkakunta saa
  // reitin, prerenderin ja sitemap-rivin ilman käsityötä.
  ...boutiqueTownPaths(),
]

/** Lakisivut. Ei sitemapiin eikä murupolkuun, mutta reitit tarvitaan. */
export const LEGAL_PATHS: string[] = ['/privacy', '/terms', '/cookie-policy', '/unsubscribe']

/**
 * Polku → sivu. Mikä tahansa polku, jota tässä ei ole, on kategoriasivu:
 * Category lukee kategorian polusta itse.
 */
const ELEMENTS: Record<string, ReactElement> = {
  '/': <Home />,
  '/gift-guides': <GiftGuides />,
  '/shipping': <Shipping />,
  '/boutiques': <Boutiques />,
  '/brands': <Brands />,
  ...Object.fromEntries(THEMES.map((t) => [`/theme/${t.id}`, <Theme />])),
  ...Object.fromEntries(BRANDS.map((b) => [`/brand/${b.id}`, <Brand />])),
  // 🔴 Ilman tätä riviä ELEMENTSin fallback tekisi /boutiques/rovaniemistä
  // kategoriasivun, joka ei löydä kategoriaa ja palauttaisi NotFoundin.
  // Vika näkyisi vasta selaimessa, ei buildissa.
  ...Object.fromEntries(boutiqueTownPaths().map((p) => [p, <BoutiqueTown />])),
  '/privacy': <Privacy />,
  '/terms': <Terms />,
  '/cookie-policy': <CookiePolicy />,
  '/unsubscribe': <Unsubscribe />,
}

export default function AppRoutes() {
  const prefixes = Object.values(LANG_PREFIX).map((p) => (p ? `/${p}` : ''))
  return (
    <Routes>
      {prefixes.map((prefix) => (
        <Fragment key={prefix || 'en'}>
          {[...CONTENT_PATHS, ...LEGAL_PATHS].map((path) => {
            const full = prefix + (path === '/' ? '' : path)
            const element = ELEMENTS[path] ?? <Category />
            return <Route key={full || '/'} path={full || '/'} element={element} />
          })}
          <Route path={`${prefix}/product/:slug`} element={<Product />} />
          <Route path={`${prefix}/boutique/:slug`} element={<Boutique />} />
        </Fragment>
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
