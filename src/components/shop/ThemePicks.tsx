import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ProductCard from './ProductCard'
import type { Product } from '../../data/types'
import type { ThemeId } from '../../data/themes'
import { byShippingBreadth } from '../../data/sortProducts'
import { useLocalePath, type Lang } from '../../i18n/useLang'
import { THEME_COPY } from '../../locales/themeCopy'

/**
 * Kategoriasivun kärkeen nostettu teemapoiminta.
 *
 * 🔴 Miksi (Vesa 12.8.: "eikö se olisi paljon coolimpi jos aina olisi
 * poiminnat — muumiaiheiset — ja niiden alla cta osiot → katso kaikki
 * muumiaiheiset tuotteet"): kategoriasivu alkoi ensimmäisellä alaryhmällä,
 * ja käsityösivulla se tarkoitti saippuaa. Poiminta antaa sivulle kärjen ja
 * kertoo heti, mitä sivulta voi valita, ilman että pitää rullata otsikoiden
 * läpi.
 *
 * Neljä korttia, ei enempää: rivi on neljä korttia leveä, ja toinen rivi
 * poimintoja tekisi nostosta uuden kategoriasivun.
 */
export default function ThemePicks({
  themeId,
  items,
  lang,
}: {
  themeId: ThemeId
  items: Product[]
  lang: Lang
}) {
  const to = useLocalePath()
  const tt = THEME_COPY[lang]
  const name = tt.name[themeId]
  // Poiminnassa laajimmin toimittavat ensin: nosto on sivun ensimmäinen asia,
  // jonka lukija näkee, eikä siinä pidä olla vain Suomeen lähtevää tavaraa.
  const picks = byShippingBreadth(items).slice(0, 4)

  return (
    <section className="mb-12">
      <p className="mb-1 font-body text-xs uppercase tracking-[0.18em] text-muted">{tt.eyebrow}</p>
      <h2 className="mb-5 font-heading text-3xl tracking-wide text-gray">{name}</h2>
      <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
        {picks.map((p) => (
          <ProductCard key={p.slug} product={p} lang={lang} />
        ))}
      </div>
      <Link
        to={to(`/theme/${themeId}`)}
        className="mt-5 inline-flex items-center gap-2 rounded-full border border-line bg-card px-5 py-2.5 font-body text-sm text-gray transition-colors hover:border-pink hover:text-pink"
      >
        {tt.seeAll[themeId]}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </section>
  )
}
