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
import { byShippingBreadth } from '../data/sortProducts'
import { PARTNERS } from '../data/partners'
import { mergeExcept } from '../data/shipping'
import { countryNames } from '../data/countryNames'
import { categoryById } from '../data/categories'
import { useLang, useLocalePath } from '../i18n/useLang'
import { imgSrcSet } from '../lib/img'
import { SHOP_COPY } from '../locales/shopCopy'
import NotFound from './NotFound'
import { productName, productDescription, specValue, specLabel } from '../locales/productCopy'

/** Päähakuva: täysleveä kapealla, puoli ruudukkoa lg:stä ylöspäin. */
const PRODUCT_SIZES = '(min-width: 1024px) 500px, 92vw'

export default function Product() {
  const lang = useLang()
  const to = useLocalePath()
  const { slug } = useParams<{ slug: string }>()
  const t = SHOP_COPY[lang]

  const product = slug ? productBySlug(slug) : undefined
  if (!product) return <NotFound />

  const partner = PARTNERS[product.partnerId]
  const category = categoryById(product.category)
  /** Kaksikielinen kenttä nykyisellä kielellä. Muut kielet saavat englannin. */
  const pick = (v: { en: string; fi: string }) => (lang === 'fi' ? v.fi : v.en)
  const name = productName(product, lang)
  const description = productDescription(product, lang)
  const details = product.details
  // Kaupan ja tuotteen maarajaukset yhdessä. Tuotesivu on viimeinen paikka
  // ennen kumppanin kauppaa, joten rajaus luetellaan tässä maiden NIMILLÄ:
  // kortin "pl. 3 maata" kertoo että rajaus on olemassa, tämä kertoo ketä se
  // koskee.
  const except = mergeExcept(partner.shipsExcept, product.shipsExcept)
  // Liittyvat noudattavat samaa toimitussaantoa kuin muutkin ruudukot:
  // laajimmin toimittavat ensin. Lukija on tuotesivulla eli lahella ostoa,
  // ja rivi jossa jokainen kortti sanoo "vain Suomi" on umpikuja.
  const related = byShippingBreadth(
    productsByCategory(product.category).filter((p) => p.slug !== product.slug),
  ).slice(0, 4)

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
              {/* Neliö + object-contain: sama sääntö kuin kortissa. `cover`
                  rajasi 429 × 1080 -kuvasuhteen puukoista näkyviin vain
                  keskiosan, eli tuotesivun päähuva ei näyttänyt tuotetta. */}
              <div className="product-media overflow-hidden rounded-2xl border border-line bg-card p-4">
                <picture>
                  <source srcSet={imgSrcSet(product.image, 'avif')} sizes={PRODUCT_SIZES} type="image/avif" />
                  <img
                    src={`/images/${product.image}.webp`}
                    srcSet={imgSrcSet(product.image, 'webp')}
                    sizes={PRODUCT_SIZES}
                    alt={name}
                    width={800}
                    height={800}
                    fetchPriority="high"
                    className="h-full w-full object-contain"
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
              {/* Tuotenimi leipatekstifontilla: Bebas Neue on pelkkia versaaleja, ja
                  "MARTTIINI LAPINLEUKU 255" on kaupassa huonompi kuin sekakirjaimet.
                  Sama ratkaisu kuin tuotekortissa. */}
              <h1 className="font-body text-3xl font-semibold leading-tight tracking-normal text-gray md:text-4xl">{name}</h1>
              <p className="text-lg leading-relaxed text-gray/90">{description}</p>

              <div className="flex flex-wrap items-center gap-3">
                {/* Hinta on aina kumppanin "alkaen"-hinta omassa valuutassaan,
                    ei meidän hintamme. Lähde ja lukupäivä ovat heti alla. */}
                <span className="font-heading text-3xl text-gray">
                  {t.product.priceFrom(product.priceFrom, product.currency)}
                </span>
                <ShippingBadge zone={partner.shipsTo} lang={lang} exceptCount={except.length} />
              </div>
              {except.length > 0 && (
                <p className="rounded-xl border border-amber/40 bg-amber/10 p-3 text-sm text-gray">
                  {t.shipping.exceptNote(countryNames(except, lang))}
                </p>
              )}
              <p className="text-sm text-muted">
                {t.product.priceNote(product.priceCheckedAt, partner.name)}
              </p>

              {/* sid kantaa tuoteslugin: vakio "gifts_product_cta" olisi yksi
                  raportointirivi 77 tuotteelle, eikä komissiota voisi yhdistää
                  tuotteeseen. Worker katkaisee domain+sidin 50 merkkiin —
                  sids.test.ts vahtii ettei katkaisu sulauta kahta tuotetta. */}
              <BuyButton product={product} sid={`p_${product.slug}`} lang={lang} />
              <p className="text-sm text-muted">{t.product.checkoutNote}</p>

              {/* Tuotetiedot ostonapin alla. Osio puuttuu kokonaan, jos
                  kumppani ei julkaise tietoja: tyhjä "Tuotetiedot"-otsikko
                  lupaisi tietoa jota ei ole.

                  🔴 Määrittelylista pinoutuu mobiilissa (flex-col) ja menee
                  kahteen palstaan vasta sm:stä ylöspäin. Kiinteä kaksipalstainen
                  ruudukko valuttaa pitkät arvot (ainesosaluettelot) yli 390
                  pikselin ruudulla. */}
              {details && (
                <section className="mt-3 border-t border-line pt-6">
                  <h2 className="mb-4 font-heading text-2xl text-gray">{t.product.detailsH2}</h2>
                  <dl className="text-sm">
                    {details.specs.map((spec, i) => (
                      <div
                        key={`${spec.key}-${i}`}
                        className="flex flex-col gap-1 border-b border-line py-3 sm:flex-row sm:gap-4"
                      >
                        <dt className="font-semibold text-gray sm:w-44 sm:shrink-0">
                          {spec.key === 'other' && spec.label
                            ? (specLabel(product, i, lang) ?? pick(spec.label))
                            : t.product.specLabels[
                                spec.key as keyof typeof t.product.specLabels
                              ]}
                        </dt>
                        <dd className="min-w-0 break-words text-gray/90">{specValue(product, i, lang)}</dd>
                      </div>
                    ))}
                  </dl>

                  {details.ingredients && (
                    <div className="mt-6">
                      <h3 className="font-semibold text-gray">{t.product.ingredientsH3}</h3>
                      <p className="mt-1 break-words text-sm text-gray/90">
                        {pick(details.ingredients)}
                      </p>
                    </div>
                  )}

                  {/* Allergeenit erottuvat muusta tekstistä: ne ovat
                      turvallisuustieto, eivät tuotekuvausta. */}
                  {details.allergens && (
                    <div className="mt-4 rounded-xl border border-amber/40 bg-amber/10 p-4">
                      <h3 className="font-semibold text-gray">{t.product.allergensH3}</h3>
                      <p className="mt-1 break-words text-sm text-gray">
                        {pick(details.allergens)}
                      </p>
                    </div>
                  )}

                  <p className="mt-4 text-xs text-muted">
                    {t.product.detailsSource(partner.name, details.fetchedAt)}
                  </p>
                </section>
              )}
            </div>
          </div>

          {related.length > 0 && (
            <section className="mt-16">
              <h2 className="mb-6 font-heading text-2xl text-gray">{t.product.related}</h2>
              <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
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
