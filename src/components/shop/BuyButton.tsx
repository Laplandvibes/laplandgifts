import { ArrowUpRight } from 'lucide-react'
import type { Product } from '../../data/types'
import { PARTNERS } from '../../data/partners'
import { buyLinkProps } from '../../data/buyLink'
import type { Lang } from '../../i18n/useLang'
import { SHOP_COPY } from '../../locales/shopCopy'

export default function BuyButton({
  product,
  sid,
  lang,
  size = 'lg',
}: {
  product: Product
  sid: string
  lang: Lang
  size?: 'sm' | 'lg'
}) {
  const partner = PARTNERS[product.partnerId]
  const t = SHOP_COPY[lang].product
  const props = buyLinkProps(product, sid)
  // min-h-11 = 44 px: sm-koon pystypadding jäisi muuten 40 pikseliin, mikä
  // alittaa kosketuskohteen vähimmäiskoon.
  const pad = size === 'lg' ? 'px-7 py-4 text-lg' : 'px-4 py-2.5 text-sm'
  return (
    <a
      {...props}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-amber font-medium text-white transition-colors hover:bg-amber/90 ${pad}`}
    >
      {t.buyAt(partner.name)}
      <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
    </a>
  )
}
