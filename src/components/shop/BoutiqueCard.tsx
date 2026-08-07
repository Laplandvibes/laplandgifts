import { Link } from 'react-router-dom'
import type { Boutique } from '../../data/boutiques'
import { BOUTIQUE_COPY } from '../../locales/boutiqueCopy'
import { SHOP_COPY } from '../../locales/shopCopy'
import { useLang, useLocalePath } from '../../i18n/useLang'

/**
 * Kortti vie putiikin omalle sivulle, ei suoraan yrityksen sivuille.
 * Uloslinkitys tapahtuu yhdessä paikassa (putiikkisivulla), jolloin se on
 * mitattavissa eikä UTM-parametreja tarvitse toistaa jokaisessa listassa.
 */
export default function BoutiqueCard({ boutique }: { boutique: Boutique }) {
  const lang = useLang()
  const localePath = useLocalePath()
  const t = SHOP_COPY[lang].boutique
  const c = BOUTIQUE_COPY[lang][boutique.slug]

  return (
    <Link
      to={localePath(`/boutique/${boutique.slug}`)}
      className="group flex h-full flex-col gap-1.5 rounded-2xl border border-line bg-card p-4 transition-shadow hover:shadow-lg sm:p-5"
    >
      <div className="flex flex-wrap gap-1.5">
        {boutique.hasOnlineStore && (
          <span className="rounded bg-finland/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-widest text-finland">
            {t.onlineBadge}
          </span>
        )}
        {boutique.hasPhysicalStore && (
          <span className="rounded bg-night/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-widest text-night">
            {t.physicalBadge}
          </span>
        )}
      </div>

      <span className="text-[11px] font-semibold uppercase tracking-widest text-muted">
        {t.townNames[boutique.town]}
        {boutique.district ? `, ${boutique.district}` : ''}
      </span>

      {/* 🔴 Putiikin nimi on DM Sansilla (font-body) eikä Bebasilla: Bebas on
          versaali ja "SAMEKKI, SÁMI DUODJI" olisi lukukelvoton. Sama päätös
          kuin giftsin tuotenimissä 1.8. */}
      <h3 className="font-body text-base font-semibold leading-snug tracking-normal text-gray sm:text-lg">
        {boutique.name}
      </h3>

      <p className="grow text-sm leading-relaxed text-muted">{c.description}</p>

      <div className="mt-1 flex flex-wrap gap-1.5">
        {c.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-sand-deep px-2.5 py-0.5 text-xs text-gray">
            {tag}
          </span>
        ))}
      </div>
    </Link>
  )
}
