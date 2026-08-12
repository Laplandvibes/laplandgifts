import { useLocation } from 'react-router-dom'
import ShopNav from '../components/ShopNav'
import Footer from '../components/Footer'
import ProductGridSection from '../components/shop/ProductGridSection'
import { themeById } from '../data/themes'
import { productsByTheme } from '../data/themeProducts'
import { PARTNERS } from '../data/partners'
import { mergeExcept, shipsTo } from '../data/shipping'
import { byShippingBreadth } from '../data/sortProducts'
import { useShippingCountry } from '../context/ShippingCountry'
import { useLang, stripLocale } from '../i18n/useLang'
import { imgSrcSet } from '../lib/img'
import { SHOP_COPY } from '../locales/shopCopy'
import { THEME_COPY } from '../locales/themeCopy'
import NotFound from './NotFound'

/**
 * Teemasivu: yhden teeman tuotteet kategoriarajojen yli.
 *
 * Rakenne on tarkoituksella sama kuin kategoriasivulla (hero, laskuri,
 * ruudukko), koska ostajalle nämä ovat sama asia — lista tuotteita, joilla on
 * jokin yhteinen nimittäjä. Ainoa ero on, että nimittäjä on tässä aihe eikä
 * hyllypaikka, joten ruudukkoa ei ryhmitellä alaryhmiin: teeman sisällä
 * "astiat ja lasi" ei ole se, mitä muumitavaraa etsivä selaa.
 */
export default function Theme() {
  const lang = useLang()
  const { pathname } = useLocation()
  const { country } = useShippingCountry()
  const t = SHOP_COPY[lang].category
  const tt = THEME_COPY[lang]

  const id = stripLocale(pathname).replace(/\/$/, '').replace('/theme/', '')
  const theme = themeById(id)
  if (!theme) return <NotFound />

  const all = productsByTheme(theme.id)
  const visible = (
    country
      ? all.filter((p) => {
          const partner = PARTNERS[p.partnerId]
          return shipsTo(partner.shipsTo, country, mergeExcept(partner.shipsExcept, p.shipsExcept))
        })
      : byShippingBreadth(all)
  )

  return (
    <>
      <ShopNav />
      <main className="bg-sand">
        <header className="relative overflow-hidden">
          <picture>
            <source srcSet={imgSrcSet(theme.image, 'avif')} sizes="100vw" type="image/avif" />
            <img
              src={`/images/${theme.image}.webp`}
              srcSet={imgSrcSet(theme.image, 'webp')}
              sizes="100vw"
              alt=""
              width={1600}
              height={640}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="h-[38svh] min-h-64 w-full object-cover"
            />
          </picture>
          <div className="absolute inset-0 bg-night/55" aria-hidden="true" />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-7xl px-4 pb-8">
              <h1 className="font-heading text-5xl tracking-wide text-white md:text-7xl">
                {tt.name[theme.id]}
              </h1>
              <p className="mt-3 max-w-2xl text-white/85">{tt.intro[theme.id]}</p>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
          <p className="mb-6 text-sm text-muted">{tt.count(visible.length)}</p>
          <ProductGridSection
            products={visible}
            lang={lang}
            emptyMessage={t.emptyForCountry}
          />
        </div>
      </main>
      <Footer />
    </>
  )
}
