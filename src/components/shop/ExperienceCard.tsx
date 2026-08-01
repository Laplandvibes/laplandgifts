import { ArrowUpRight, MapPin } from 'lucide-react'
import { gygHref, GYG_PRICE_AS_OF } from '../../../../shared/gyg/picks'
import type { GiftExperience } from '../../data/experiences'
import { AFFILIATE_REL } from '../../data/partners'
import type { Lang } from '../../i18n/useLang'
import { SHOP_COPY } from '../../locales/shopCopy'

/**
 * Elämyskortti. Linkki rakennetaan aina gygHref():llä, joka reitittää
 * go.laplandvibes.com-Workerin kautta: raakaa partner-URL:ia ei kirjoiteta
 * lähdekoodiin. rel jättää tarkoituksella noreferrerin pois, koska Worker
 * lukee Refererin attribuutioon.
 */
export default function ExperienceCard({ pick, lang }: { pick: GiftExperience; lang: Lang }) {
  const t = SHOP_COPY[lang].experience
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-line bg-card">
      {/* Kortissa on aina kuva. Ilman sitä kortti oli pelkkä tekstilaatikko
          eikä erottunut mistään (Vesa 1.8.). Kuva on AI-generoitu: verkoston
          linjaus on, ettei GetYourGuiden kuvia oteta, koska ne kuuluvat
          retkien jarjestajille eivatka kumppanillemme. */}
      <div className="category-media overflow-hidden bg-sand-deep">
        <picture>
          <source
            type="image/avif"
            srcSet={`/images/${pick.image}-480.avif 480w, /images/${pick.image}-800.avif 800w`}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
          <img
            src={`/images/${pick.image}-800.webp`}
            srcSet={`/images/${pick.image}-480.webp 480w, /images/${pick.image}-800.webp 800w`}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            alt=""
            loading="lazy"
            decoding="async"
            width={800}
            height={533}
            className="h-full w-full object-cover"
          />
        </picture>
      </div>
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
