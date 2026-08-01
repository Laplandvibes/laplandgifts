import { ArrowUpRight, MapPin } from 'lucide-react'
import { gygHref, GYG_PRICE_AS_OF, type GygPick } from '../../../../shared/gyg/picks'
import { AFFILIATE_REL } from '../../data/partners'
import type { Lang } from '../../i18n/useLang'
import { SHOP_COPY } from '../../locales/shopCopy'

/**
 * Elämyskortti. Linkki rakennetaan aina gygHref():llä, joka reitittää
 * go.laplandvibes.com-Workerin kautta: raakaa partner-URL:ia ei kirjoiteta
 * lähdekoodiin. rel jättää tarkoituksella noreferrerin pois, koska Worker
 * lukee Refererin attribuutioon.
 */
export default function ExperienceCard({ pick, lang }: { pick: GygPick; lang: Lang }) {
  const t = SHOP_COPY[lang].experience
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-line bg-card">
      <div className="flex flex-1 flex-col gap-3 p-5">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-muted">
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          {pick.place}
        </span>
        {/* Sama kuin ProductCardissa: retken nimi on sekakirjaiminen lause
            ("Rovaniemi: Husky Sledge Ride"), ei osion otsikko, joten se ladotaan
            leipätekstifontilla eikä versaalilla Bebas Neuella. */}
        <h3 className="font-body text-lg font-semibold leading-snug tracking-normal text-gray">
          {pick.title}
        </h3>
        {/* Hinta on GetYourGuiden oma "alkaen"-hinta lukupäivänä, ei meidän.
            Rivi ilman hintaa renderöityy ilman hintaa, ei arvauksella. */}
        {pick.price && (
          <p className="text-sm text-muted">{t.priceNote(pick.price, GYG_PRICE_AS_OF)}</p>
        )}
        {pick.duration && <p className="text-sm text-muted">{t.duration(pick.duration)}</p>}
        <a
          href={gygHref(pick, lang)}
          target="_blank"
          rel={AFFILIATE_REL}
          className="mt-auto inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-amber px-5 py-3 font-medium text-white transition-colors hover:bg-amber/90"
        >
          {t.viewOnGyg}
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </article>
  )
}
