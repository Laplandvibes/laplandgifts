import { Globe, Truck } from 'lucide-react'
import type { ShippingZone } from '../../data/types'
import type { Lang } from '../../i18n/useLang'
import { SHOP_COPY } from '../../locales/shopCopy'

export default function ShippingBadge({ zone, lang }: { zone: ShippingZone; lang: Lang }) {
  const t = SHOP_COPY[lang].shipping
  const label = zone === 'worldwide' ? t.worldwide : zone === 'eu' ? t.euOnly : t.fiOnly
  const Icon = zone === 'worldwide' ? Globe : Truck
  const tone =
    zone === 'worldwide'
      ? 'bg-card text-muted border-line'
      : 'bg-amber/10 text-gray border-amber/40'
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${tone}`}
    >
      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
      {label}
    </span>
  )
}
