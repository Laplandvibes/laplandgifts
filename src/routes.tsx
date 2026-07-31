import { Fragment, lazy, type ReactElement } from 'react'
import { Routes, Route } from 'react-router-dom'
import { LANG_PREFIX } from './i18n/useLang'
import { CATEGORIES } from './data/categories'

const Home = lazy(() => import('./pages/Home'))
const Category = lazy(() => import('./pages/Category'))
const Product = lazy(() => import('./pages/Product'))
const GiftGuides = lazy(() => import('./pages/GiftGuides'))
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
  '/gift-guides',
  '/shipping',
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
        </Fragment>
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
