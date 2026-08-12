import { useLocation } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'
import ShopNav from '../components/ShopNav'
import Footer from '../components/Footer'
import ProductGridSection from '../components/shop/ProductGridSection'
import BrandSpotlight from '../components/shop/BrandSpotlight'
import { brandById } from '../data/brands'
import { productsByBrand } from '../data/brandProducts'
import { PARTNERS } from '../data/partners'
import { mergeExcept, shipsTo } from '../data/shipping'
import { byShippingBreadth, pickHighlights } from '../data/sortProducts'
import { useShippingCountry } from '../context/ShippingCountry'
import { useLang, stripLocale } from '../i18n/useLang'
import { SHOP_COPY } from '../locales/shopCopy'
import { BRAND_COPY } from '../locales/brandCopy'
import NotFound from './NotFound'

/**
 * Brändisivu: kuka tekee ja mitä meillä on häneltä.
 *
 * 🔴 Ei hero-kuvaa. Kategoria- ja teemasivuilla hero on aihetta kuvaava
 * maisema, mutta brändille sellainen olisi joko brändin oma kuvamateriaali
 * (jota meillä ei ole oikeutta käyttää) tai jotain siihen liittymätöntä.
 * Sivu alkaa siksi otsikosta ja tekstistä, ja kuvat tulevat tuotteista.
 */
export default function Brand() {
  const lang = useLang()
  const { pathname } = useLocation()
  const { country } = useShippingCountry()
  const t = SHOP_COPY[lang].category
  const tb = BRAND_COPY[lang]

  const id = stripLocale(pathname).replace(/\/$/, '').replace('/brand/', '')
  const brand = brandById(id)
  if (!brand) return <NotFound />

  const all = productsByBrand(brand.id)
  const visible = country
    ? all.filter((p) => {
        const partner = PARTNERS[p.partnerId]
        return shipsTo(partner.shipsTo, country, mergeExcept(partner.shipsExcept, p.shipsExcept))
      })
    : byShippingBreadth(all)

  return (
    <>
      <ShopNav />
      <main className="bg-sand">
        <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
          <header className="mb-10 max-w-3xl">
            <p className="mb-1 font-body text-xs uppercase tracking-[0.18em] text-muted">
              {tb.eyebrow}
            </p>
            <h1 className="font-heading text-5xl tracking-wide text-gray md:text-6xl">
              {brand.name}
            </h1>
            {brand.founded && (
              <p className="mt-2 font-body text-sm text-muted">{tb.founded(brand.founded)}</p>
            )}
            <p className="mt-5 text-base leading-relaxed text-gray">{tb.profile[brand.id]}</p>
            {/* 🔴 Linkki brändin omalle sivulle on osa tekstin rehellisyyttä:
                esittely on kirjoitettu sieltä luetusta, joten lukijan on
                päästävä lähteelle. Ei sponsored/nofollow — tämä ei ole
                affiliate-linkki vaan lähdeviite. */}
            <a
              href={brand.officialUrl}
              target="_blank"
              rel="noopener"
              className="mt-4 inline-flex items-center gap-2 font-body text-sm text-pink underline-offset-4 hover:underline"
            >
              {tb.officialSite(brand.name)}
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </header>

          {/* 🔴 Nosto tekstin ja ruudukon VÄLIIN (Vesa 12.8.). Brändin omaa
              kuvamateriaalia meillä ei ole oikeutta käyttää, joten sivun
              visuaalinen ankkuri on kumppanin tuotekuva — se on jo
              katalogissa ja sen käyttöoikeus tulee affiliate-suhteesta.
              Nosto valitaan samalla säännöllä kuin muutkin: laajimmin
              toimittava ensin, sen jälkeen kallein. */}
          {visible.length > 0 && (
            <BrandSpotlight product={pickHighlights(visible, 1)[0]} lang={lang} />
          )}

          <h2 className="mb-5 font-heading text-3xl tracking-wide text-gray">
            {tb.productsH2(brand.name)}
          </h2>
          <p className="mb-6 text-sm text-muted">{t.productCount(visible.length)}</p>
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
