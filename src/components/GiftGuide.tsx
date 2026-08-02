import { Link } from 'react-router-dom'
import { productsForOccasion } from '../data/occasions'
import { occasionTheme } from '../data/occasionTheme'
import { useLang, useLocalePath } from '../i18n/useLang'
import { COPY } from '../locales/copy'
import { SHOP_COPY } from '../locales/shopCopy'
import { productName } from '../locales/productCopy'

/**
 * Etusivun lahjaopasosio. Ehdotukset ovat katalogin oikeita tuotteita ja
 * jokainen rivi on linkki tuotesivulle.
 *
 * 🔴 Aiemmin tässä listattiin copyn `suggestions`-tekstirivejä, joita vastaavia
 * tuotteita ei ollut olemassa missään ("Gift Basket Lapland Luxury"). Vesa
 * liputti sen 25.7.: lahjaopas lupasi tuotteita, joita ei voinut avata eikä
 * ostaa. Nimi tulee nyt tuotteesta, ei copysta, joten se on aina totta.
 *
 * 🔴 Värit tulevat samasta taulukosta kuin lahjaopassivulla
 * (`occasionTheme.ts`). Etusivun nosto ja se sivu, jolle nosto vie, eivät saa
 * näyttää eri sivustoilta: aiemmin molemmissa oli sama amber-ikoni neljästi,
 * nyt molemmissa on tilaisuuden oma sävy.
 */
function GiftGuide() {
  const lang = useLang()
  const to = useLocalePath()
  const t = COPY[lang].giftGuide
  const s = SHOP_COPY[lang]
  return (
    <section id="gift-guide" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-heading text-5xl md:text-6xl tracking-wide text-gray mb-3">{t.h2}</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            {t.sub}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {t.occasions.map((occasion, i) => {
            const theme = occasionTheme(i)
            const Icon = theme.Icon
            /* Etusivulla neljä ensimmäistä ehdotusta, sivulla kaikki kuusi:
               kortti on tässä yksi neljästä eikä koko osio, ja kuusi 44 pikselin
               riviä venyttäisi sen puolentoista ruudun mittaiseksi. */
            const picks = productsForOccasion(i).slice(0, 4)
            return (
              <div
                key={occasion.name}
                className={`overflow-hidden rounded-2xl border transition-shadow hover:shadow-lg ${theme.border} ${theme.panel}`}
              >
                <div className={`h-2 w-full ${theme.accent}`} aria-hidden="true" />
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-5">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${theme.accent}`} aria-hidden="true">
                      <Icon className="w-7 h-7 text-white" strokeWidth={1.75} />
                    </div>
                    <h3 className={`font-heading text-3xl tracking-wide md:text-4xl ${theme.text}`}>{occasion.name}</h3>
                  </div>
                  <p className="text-gray/80 mb-6 leading-relaxed">{occasion.description}</p>
                  {picks.length > 0 && (
                    <div>
                      <p className={`text-xs font-semibold uppercase tracking-[0.2em] mb-3 ${theme.text}`}>{t.suggested}</p>
                      <ul className="space-y-1">
                        {picks.map((p) => (
                          <li key={p.slug}>
                            {/* min-h-11 = 44 px kosketuskohde, jotta vierekkäiset
                                rivit eivät osu toisiinsa peukalolla. */}
                            <Link
                              to={to(`/product/${p.slug}`)}
                              className={`flex min-h-11 items-center gap-2 text-gray/80 transition-colors hover:underline ${theme.hoverText}`}
                            >
                              <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${theme.accent}`} aria-hidden="true" />
                              {productName(p, lang)}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
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
