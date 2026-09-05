import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { productsForOccasion } from '../data/occasions'
import { OCCASION_THEMES } from '../data/occasionTheme'
import { useLang, useLocalePath } from '../i18n/useLang'
import { COPY } from '../locales/copy'
import { SHOP_COPY } from '../locales/shopCopy'
import { productName } from '../locales/productCopy'

/**
 * Etusivun lahjaopasosio — lukijalle joka ei tiedä mitä ostaa. Sen tehtävä on
 * yksi: viedä tilaisuudesta tuotteeseen kahdella klikkauksella.
 *
 * 🔴 Vesa 5.9.2026: "tämä osio kuin ala-asteelaisen tekemä." Ennen: neljä
 * pastellilaatikkoa (vihreä, pinkki, oranssi, sininen), joka laatikossa
 * värillinen ikonilaatta, värillinen otsikko, värillinen pallolista. Ilme oli
 * lastenkirjan, ja se riiteli kaupan editorial-etusivun kanssa.
 *
 * Nyt: yksi hiekanvärinen osio, vasemmalla otsikko ja sivun linkki, oikealla
 * neljä tilaisuutta numeroituina riveinä hiusviivojen välissä. Ehdotukset ovat
 * pillereitä, jotka ovat oikeita tuotesivulinkkejä (nimi tulee tuotteesta, ei
 * copysta — Vesa 25.7.: lahjaopas ei saa luvata tuotteita joita ei voi avata).
 * Väri tulee vain hoveriin (kaupan aksentti). Tilaisuuden tunnistaa nimestä.
 */
function GiftGuide() {
  const lang = useLang()
  const to = useLocalePath()
  const t = COPY[lang].giftGuide
  const s = SHOP_COPY[lang]
  return (
    <section id="gift-guide" className="bg-sand py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-heading text-5xl leading-none tracking-wide text-gray md:text-6xl">{t.h2}</h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">{t.sub}</p>
            <Link
              to={to('/gift-guides')}
              className="group mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-gray px-5 text-sm font-semibold text-white no-underline transition-[transform,background-color] duration-200 hover:bg-amber active:scale-[0.97] motion-reduce:transition-none"
              style={{ transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)' }}
            >
              {s.nav.guides}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none" aria-hidden="true" />
            </Link>
          </div>

          <ol className="lg:col-span-8">
            {t.occasions.map((occasion, i) => {
              const Icon = OCCASION_THEMES[i % OCCASION_THEMES.length].Icon
              /* Etusivulla neljä ensimmäistä ehdotusta, sivulla kaikki kuusi. */
              const picks = productsForOccasion(i).slice(0, 4)
              return (
                <li
                  key={occasion.name}
                  className="grid grid-cols-[3rem_1fr] gap-x-4 border-t border-line py-7 first:border-t-0 first:pt-0 md:grid-cols-[4rem_1fr] md:gap-x-6 md:py-9"
                >
                  <span className="font-heading text-2xl leading-none tracking-wide text-muted/70 md:text-3xl" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0">
                    <h3 className="flex items-center gap-3 font-heading text-3xl leading-none tracking-wide text-gray md:text-4xl">
                      {occasion.name}
                      <Icon className="h-5 w-5 text-muted/60" strokeWidth={1.75} aria-hidden="true" />
                    </h3>
                    <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-gray/75">{occasion.description}</p>
                    {picks.length > 0 && (
                      <ul className="mt-4 flex flex-wrap gap-2" aria-label={t.suggested}>
                        {picks.map((p) => (
                          <li key={p.slug}>
                            {/* min-h-11 = 44 px kosketuskohde. Pilleri on tuotelinkki. */}
                            <Link
                              to={to(`/product/${p.slug}`)}
                              className="inline-flex min-h-11 items-center rounded-full border border-line bg-card px-4 text-sm text-gray no-underline shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-[border-color,color,transform] duration-200 hover:border-amber hover:text-amber active:scale-[0.98] motion-reduce:transition-none"
                              style={{ transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)' }}
                            >
                              {productName(p, lang)}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default GiftGuide
