import { TreePine, Heart, Cake, Briefcase } from 'lucide-react'
import { Link } from 'react-router-dom'
import { productsForOccasion } from '../data/occasions'
import { useLang, useLocalePath } from '../i18n/useLang'
import { COPY } from '../locales/copy'
import { SHOP_COPY } from '../locales/shopCopy'

const ICONS = [TreePine, Heart, Cake, Briefcase]

/**
 * Etusivun lahjaopasosio. Ehdotukset ovat katalogin oikeita tuotteita ja
 * jokainen rivi on linkki tuotesivulle.
 *
 * 🔴 Aiemmin tässä listattiin copyn `suggestions`-tekstirivejä, joita vastaavia
 * tuotteita ei ollut olemassa missään ("Gift Basket Lapland Luxury"). Vesa
 * liputti sen 25.7.: lahjaopas lupasi tuotteita, joita ei voinut avata eikä
 * ostaa. Nimi tulee nyt tuotteesta, ei copysta, joten se on aina totta.
 */
function GiftGuide() {
  const lang = useLang()
  const to = useLocalePath()
  const t = COPY[lang].giftGuide
  const s = SHOP_COPY[lang]
  return (
    <section id="gift-guide" className="py-20 bg-gradient-to-b from-white to-amber/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-heading text-5xl md:text-6xl tracking-wide text-gray mb-3">{t.h2}</h2>
          <p className="text-gray/60 text-lg max-w-2xl mx-auto">
            {t.sub}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.occasions.map((occasion, i) => {
            const Icon = ICONS[i]
            const picks = productsForOccasion(i)
            return (
              <div
                key={occasion.name}
                className="bg-card rounded-2xl p-8 border border-gray/10 hover:border-amber/30 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-xl bg-amber/10 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-amber" />
                  </div>
                  <h3 className="font-heading text-3xl tracking-wide text-gray md:text-4xl">{occasion.name}</h3>
                </div>
                <p className="text-gray/60 mb-6 leading-relaxed">{occasion.description}</p>
                {picks.length > 0 && (
                  <div>
                    <p className="text-sm font-medium text-gray/40 uppercase tracking-wider mb-3">{t.suggested}</p>
                    <ul className="space-y-1">
                      {picks.map((p) => (
                        <li key={p.slug}>
                          {/* min-h-11 = 44 px kosketuskohde, jotta vierekkäiset
                              rivit eivät osu toisiinsa peukalolla. */}
                          <Link
                            to={to(`/product/${p.slug}`)}
                            className="flex min-h-11 items-center gap-2 text-gray/70 transition-colors hover:text-amber"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-amber flex-shrink-0" aria-hidden="true" />
                            {lang === 'fi' ? p.name.fi : p.name.en}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )
          })}
        </div>
        <div className="mt-12 text-center">
          <Link
            to={to('/gift-guides')}
            className="inline-flex min-h-11 items-center rounded-full border border-line bg-card px-6 py-3 font-medium text-gray transition-colors hover:text-amber"
          >
            {s.nav.guides}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default GiftGuide
