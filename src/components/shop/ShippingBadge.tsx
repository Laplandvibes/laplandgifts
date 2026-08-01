import { Globe, Truck } from 'lucide-react'
import type { ShippingZone } from '../../data/types'
import type { Lang } from '../../i18n/useLang'
import { SHOP_COPY } from '../../locales/shopCopy'

/**
 * Toimitusaluemerkintä.
 *
 * 🔴 `max-w-full` + `[overflow-wrap:anywhere]`: kahden palstan tuotekortti on
 * kapeimmillaan 138 px, eli tekstitilaa on 114 px, kun merkinnän pisin sana
 * ("maailmanlaajuisesti") tarvitsee yksinään enemmän. Ilman näitä pilleri
 * levisi kortin ulkopuolelle ja kortin `overflow-hidden` leikkasi sen
 * oikeasta reunasta — mitattu 320 ja 375 pikselissä (sisältö 153 px, laatikko
 * 140 px). `size="sm"` on korttikoko, oletus on tuotesivun koko.
 *
 * 🔴 `exceptCount` on maiden määrä, joihin ei toimiteta vyöhykkeestä
 * huolimatta. Kun se on nollaa suurempi, merkintä EI saa sanoa pelkkää "Koko
 * maailma": se olisi lupaus, jota kauppa ei pidä. Merkintä saa silloin myös
 * huomiovärin, koska rajoitettu toimitus on sama asia kuin EU- tai
 * Suomi-rajaus riippumatta siitä, mikä vyöhyke on pohjalla.
 */
export default function ShippingBadge({
  zone,
  lang,
  size = 'md',
  exceptCount = 0,
}: {
  zone: ShippingZone
  lang: Lang
  size?: 'sm' | 'md'
  exceptCount?: number
}) {
  const t = SHOP_COPY[lang].shipping
  const long = zone === 'worldwide' ? t.worldwide : zone === 'eu' ? t.euOnly : t.fiOnly
  const short = zone === 'worldwide' ? t.zoneShort.worldwide : zone === 'eu' ? t.zoneShort.eu : t.zoneShort.fi
  // Poikkeuksellisessa tapauksessa myös tuotesivu käyttää lyhyttä pohjaa:
  // "Toimitus maailmanlaajuisesti, pl. 3 maata" on itsensä kanssa ristiriidassa,
  // "Koko maailma, pl. 3 maata" ei ole. Maiden nimet tulevat merkinnän alle.
  const base = size === 'sm' || exceptCount > 0 ? short : long
  const label = exceptCount > 0 ? t.exceptShort(base, exceptCount) : base
  const Icon = zone === 'worldwide' && exceptCount === 0 ? Globe : Truck
  const tone =
    zone === 'worldwide' && exceptCount === 0
      ? 'bg-card text-muted border-line'
      : 'bg-amber/10 text-gray border-amber/40'
  const scale =
    size === 'sm' ? 'gap-1 px-2 py-0.5 text-[11px]' : 'gap-1.5 px-2.5 py-1 text-xs'
  return (
    <span
      className={`inline-flex max-w-full items-center rounded-full border font-medium [overflow-wrap:anywhere] ${scale} ${tone}`}
    >
      <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      {label}
    </span>
  )
}
