import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import BuyButton from './BuyButton'
import ShippingBadge from './ShippingBadge'
import type { Product } from '../../data/types'
import { PARTNERS } from '../../data/partners'
import { mergeExcept } from '../../data/shipping'
import { useLocalePath, type Lang } from '../../i18n/useLang'
import { imgSrcSet } from '../../lib/img'
import { SHOP_COPY } from '../../locales/shopCopy'
import { THEME_COPY } from '../../locales/themeCopy'
import { productName, productDescription } from '../../locales/productCopy'

/** Nostokuva on puolet leveydestä työpöydällä, koko leveys kapealla. */
const SHOT_SIZES = '(min-width: 768px) 380px, 88vw'

/**
 * Brändisivun nosto: yksi tuote isona, ostonapilla.
 *
 * 🔴 Miksi (Vesa 12.8.: "brändisivut voi olla vaan tekstiä ja tuo siihen
 * jonkun mainoksen alapuolelle, jossa voidaan käyttää jotain heidän
 * tuotettaan"): brändin omaa kuvamateriaalia meillä ei ole oikeutta käyttää,
 * mutta kumppanin tuotekuva on jo katalogissa ja sen käyttöoikeus tulee
 * affiliate-suhteesta. Sivu saa siis visuaalisen ankkurin ilman että
 * lainataan mitään mihin meillä ei ole oikeutta.
 *
 * Nosto on ostettava, ei koriste: ostonappi vie suoraan kumppanin kauppaan
 * omalla sid:llään, joten brändisivun tuotto näkyy raportissa erikseen.
 */
export default function BrandSpotlight({
  product,
  lang,
}: {
  product: Product
  lang: Lang
}) {
  const to = useLocalePath()
  const t = SHOP_COPY[lang]
  const partner = PARTNERS[product.partnerId]
  const except = mergeExcept(partner.shipsExcept, product.shipsExcept)
  const name = productName(product, lang)
  // Ensimmäinen virke riittää nostoon: koko kuvaus on tuotesivulla.
  const blurb = productDescription(product, lang).match(/^[^.。]+[.。]/)?.[0] ?? ''

  return (
    <section className="mb-12 overflow-hidden rounded-2xl border border-line bg-sand-deep">
      <div className="grid gap-0 md:grid-cols-2">
        {/* Kuvalava valkoisena hiekkakortin päällä, sama ratkaisu kuin
            tuotekortissa: kumppanien kuvat on kuvattu valkoista vasten. */}
        <div className="m-3 mb-0 overflow-hidden rounded-xl bg-card p-5 md:m-4 md:mb-4">
          <picture>
            <source srcSet={imgSrcSet(product.image, 'avif')} sizes={SHOT_SIZES} type="image/avif" />
            <img
              src={`/images/${product.image}.webp`}
              srcSet={imgSrcSet(product.image, 'webp')}
              sizes={SHOT_SIZES}
              alt={name}
              width={640}
              height={640}
              loading="lazy"
              decoding="async"
              className="mx-auto aspect-square w-full max-w-sm object-contain"
            />
          </picture>
        </div>
        <div className="flex flex-col justify-center gap-4 p-6 md:p-8">
          <p className="font-body text-xs uppercase tracking-[0.18em] text-muted">
            {THEME_COPY[lang].eyebrow}
          </p>
          <Link
            to={to(`/product/${product.slug}`)}
            className="font-body text-2xl font-semibold leading-tight text-gray hover:text-pink md:text-3xl"
          >
            {name}
          </Link>
          {blurb && <p className="text-sm leading-relaxed text-muted">{blurb}</p>}
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-heading text-2xl text-gray">
              {t.product.priceFrom(product.priceFrom, product.currency)}
            </span>
            <ShippingBadge zone={partner.shipsTo} lang={lang} exceptCount={except.length} />
          </div>
          {/* sid erottaa brändisivun myynnin muista pinnoista raportissa. */}
          <BuyButton product={product} sid={`brand_${product.slug}`} lang={lang} />
          <Link
            to={to(`/product/${product.slug}`)}
            className="inline-flex items-center gap-2 font-body text-sm text-pink"
          >
            {t.product.viewProduct}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
