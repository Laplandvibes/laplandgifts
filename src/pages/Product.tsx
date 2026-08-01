import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import ShopNav from '../components/ShopNav'
// components/Footer on tämän sivuston kääre jaetulle SharedFooterille (sama
// kuin Home.tsx ja Category.tsx käyttävät).
import Footer from '../components/Footer'
import BuyButton from '../components/shop/BuyButton'
import ShippingBadge from '../components/shop/ShippingBadge'
import ProductCard from '../components/shop/ProductCard'
import { productBySlug, productsByCategory } from '../data/products'
import { PARTNERS } from '../data/partners'
import { categoryById } from '../data/categories'
import { useLang, useLocalePath } from '../i18n/useLang'
import { SHOP_COPY } from '../locales/shopCopy'
import NotFound from './NotFound'

export default function Product() {
  const lang = useLang()
  const to = useLocalePath()
  const { slug } = useParams<{ slug: string }>()
  const t = SHOP_COPY[lang]

  const product = slug ? productBySlug(slug) : undefined
  if (!product) return <NotFound />

  const partner = PARTNERS[product.partnerId]
  const category = categoryById(product.category)
  const name = lang === 'fi' ? product.name.fi : product.name.en
  const description = lang === 'fi' ? product.description.fi : product.description.en
  const related = productsByCategory(product.category)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 4)

  return (
    <>
      <ShopNav />
      <main className="bg-sand">
        <div className="mx-auto max-w-7xl px-4 py-8 md:py-12">
          <Link
            to={to(category.slug)}
            className="mb-6 inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-amber"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {t.product.backToCategory}
          </Link>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Kuva ja sen merkintä ovat SAMA ruudukon solu. Erillisenä
                lapsena merkintä varasi toisen sarakkeen ja työnsi tuotteen
                tiedot ruudukon ulkopuolelle. */}
            <div>
              <div className="product-media overflow-hidden rounded-2xl border border-line bg-card">
                <picture>
                  <source srcSet={`/images/${product.image}.avif`} type="image/avif" />
                  <img
                    src={`/images/${product.image}.webp`}
                    alt={name}
                    width={800}
                    height={1000}
                    className="h-full w-full object-cover"
                  />
                </picture>
              </div>
              {/* Merkintä kertoo mitä kuva ON. Kumppanin oma tuotekuva saa
                  lähdemerkinnän, AI-tunnelmakuva varauksen. Aiemmin tässä
                  renderöitiin aina tunnelmakuvateksti, mikä on kumppanikuvalle
                  väärää tietoa: se on kuva juuri tästä tuotteesta. */}
              <p className="mt-2 text-xs text-muted">
                {product.imageIsPartner
                  ? t.product.imageCredit(partner.name)
                  : t.product.illustrativeImage}
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted">
                {product.brand}
              </span>
              <h1 className="font-heading text-4xl leading-tight text-gray md:text-5xl">{name}</h1>
              <p className="text-lg leading-relaxed text-gray/90">{description}</p>

              <div className="flex flex-wrap items-center gap-3">
                {/* Hinta on aina kumppanin "alkaen"-hinta omassa valuutassaan,
                    ei meidän hintamme. Lähde ja lukupäivä ovat heti alla. */}
                <span className="font-heading text-3xl text-gray">
                  {t.product.priceFrom(product.priceFrom, product.currency)}
                </span>
                <ShippingBadge zone={partner.shipsTo} lang={lang} />
              </div>
              <p className="text-sm text-muted">
                {t.product.priceNote(product.priceCheckedAt, partner.name)}
              </p>

              <BuyButton product={product} sid="gifts_product_cta" lang={lang} />
              <p className="text-sm text-muted">{t.product.checkoutNote}</p>
            </div>
          </div>

          {related.length > 0 && (
            <section className="mt-16">
              <h2 className="mb-6 font-heading text-2xl text-gray">{t.product.related}</h2>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {related.map((p) => (
                  <ProductCard key={p.slug} product={p} lang={lang} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
