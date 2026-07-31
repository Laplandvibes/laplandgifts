import { Link } from 'react-router-dom'
import type { Product } from '../../data/types'
import { PARTNERS } from '../../data/partners'
import type { Lang } from '../../i18n/useLang'
import { useLocalePath } from '../../i18n/useLang'
import { SHOP_COPY } from '../../locales/shopCopy'
import ShippingBadge from './ShippingBadge'

export default function ProductCard({ product, lang }: { product: Product; lang: Lang }) {
  const to = useLocalePath()
  const t = SHOP_COPY[lang].product
  const partner = PARTNERS[product.partnerId]
  const name = lang === 'fi' ? product.name.fi : product.name.en
  return (
    <Link
      to={to(`/product/${product.slug}`)}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-card transition-shadow hover:shadow-lg"
    >
      <div className="product-media overflow-hidden bg-sand-deep">
        <picture>
          <source srcSet={`/images/${product.image}.avif`} type="image/avif" />
          <img
            src={`/images/${product.image}.webp`}
            alt={name}
            loading="lazy"
            width={640}
            height={800}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </picture>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <span className="text-xs font-semibold uppercase tracking-widest text-muted">
          {product.brand}
        </span>
        <h3 className="font-heading text-lg leading-snug text-gray">{name}</h3>
        <div className="mt-auto flex flex-col gap-2 pt-2">
          {/* priceFrom saa valuutan tuotteelta (osa katalogista hinnoittelee
              punnissa), joten €-merkkiä ei kirjoiteta mihinkään käsin. */}
          <span className="text-base font-semibold text-gray">
            {t.priceFrom(product.priceFrom, product.currency)}
          </span>
          <ShippingBadge zone={partner.shipsTo} lang={lang} />
        </div>
      </div>
    </Link>
  )
}
