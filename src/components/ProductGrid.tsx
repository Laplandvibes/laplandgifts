import { Link } from 'react-router-dom'
import { featuredProducts } from '../data/products'
import { useLang, useLocalePath } from '../i18n/useLang'
import { SHOP_COPY } from '../locales/shopCopy'
import ProductCard from './shop/ProductCard'

/**
 * Etusivun tuotenostot. Kortit ovat katalogin oikeita tuotteita ja vievät
 * tuotesivulle, jolta ostetaan kumppanin kaupasta.
 *
 * 🔴 Vanha versio listasi kaksitoista keksittyä tuotenimeä, joilla oli
 * "Price TBD" ja "Notify me" -nappi, ja lähetti samat nimet ItemList-JSON-LD:nä
 * hakukoneelle. Kauppa on auki, joten sekä kortit että rakenteinen data tulevat
 * nyt products.ts:stä.
 *
 * Kuusi nostoa mahtuu kahdelle täydelle riville kolmen palstan gridissä, joten
 * viimeinen rivi ei jää vajaaksi.
 */
export default function ProductGrid() {
  const lang = useLang()
  const to = useLocalePath()
  const t = SHOP_COPY[lang].home
  const s = SHOP_COPY[lang]
  const products = featuredProducts(6)
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: t.featuredH2,
    numberOfItems: products.length,
    itemListElement: products.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: lang === 'fi' ? p.name.fi : p.name.en,
      url: `https://laplandgifts.com${to(`/product/${p.slug}`)}`,
    })),
  }
  return (
    <section id="products" className="bg-card py-16 md:py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-heading text-3xl text-gray md:text-5xl">{t.featuredH2}</h2>
            <p className="mt-3 max-w-2xl text-muted">{t.featuredSub}</p>
          </div>
          <Link
            to={to('/design')}
            className="inline-flex min-h-11 items-center text-sm font-medium text-amber hover:underline"
          >
            {s.nav.allProducts}
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  )
}
