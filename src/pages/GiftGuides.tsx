import ShopNav from '../components/ShopNav'
// components/Footer on tämän sivuston kääre jaetun SharedFooterin ympärillä
// (SharedFooter odottaa dict-propin). Sama kuin Home.tsx ja Category.tsx.
import Footer from '../components/Footer'
import ProductCard from '../components/shop/ProductCard'
import { byShippingBreadth } from '../data/sortProducts'
import { productsForOccasion } from '../data/occasions'
import { OCCASION_THEMES, occasionTheme } from '../data/occasionTheme'
import { Link } from 'react-router-dom'
import { useLang, useLocalePath } from '../i18n/useLang'
import { COPY } from '../locales/copy'
import { SHOP_COPY } from '../locales/shopCopy'

/**
 * Lahjaopassivu. Tilaisuudet tulevat copysta (12 kieltä), tuotteet
 * `occasions.ts`:n poimintataulukosta, ilme `occasionTheme.ts`:stä, ja indeksi
 * sitoo ne yhteen.
 *
 * 🔴 Jokainen ehdotus on klikattava tuotekortti, ei tekstirivi: Vesa liputti
 * 25.7. että vanha lahjaopas listasi lahjaideoita, joita ei voinut avata eikä
 * ostaa. Tyhjä tilaisuus renderöi otsikon ja kuvauksen ilman kortteja, mikä on
 * rehellisempää kuin keksitty tuotelinkki.
 *
 * 🔴 Väriteema (Vesa 1.8.: "tarvitaan lisää väriä, ihan eri väriteema"). Sivu
 * oli neljä valkoista laatikkoa kermalla, eikä mikään erottanut joulua häistä:
 * ainoa väri oli sama amber-ikoni neljä kertaa. Nyt jokainen tilaisuus kantaa
 * oman sävynsä ylänauhassa, ikonilevyssä, otsikossa ja korttipohjassa, joten
 * osion tunnistaa väristä ennen kuin otsikon ehtii lukea. Pohja pysyy
 * vaaleana ja kaikki kontrastit on mitattu (ks. index.css @theme).
 */
export default function GiftGuides() {
  const lang = useLang()
  const to = useLocalePath()
  const t = COPY[lang].giftGuide
  const s = SHOP_COPY[lang]
  return (
    <>
      <ShopNav />
      <main className="bg-sand pb-14 md:pb-20" id="main-content" tabIndex={-1}>
        {/* Sivun otsikko valkoisella pohjalla ja sen alla neljän tilaisuuden
            värit nauhana: lukija näkee heti, että sivu jakautuu neljään. */}
        <header className="border-b border-line bg-card">
          <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
            <h1 className="font-heading text-5xl tracking-wide text-gray md:text-7xl">{t.h2}</h1>
            <p className="mt-3 max-w-2xl text-muted">{t.sub}</p>
            <div className="mt-7 flex h-2 w-full max-w-sm overflow-hidden rounded-full" aria-hidden="true">
              {OCCASION_THEMES.map((theme) => (
                <span key={theme.key} className={`flex-1 ${theme.accent}`} />
              ))}
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-4">
          {t.occasions.map((occ, i) => {
            // Kuratoitu lista, mutta laajimmin toimittavat ensin: sama
            // saanto kuin etusivulla ja kategoriasivuilla. Yksikaan tuote ei
            // putoa pois, vain jarjestys muuttuu.
            const picks = byShippingBreadth(productsForOccasion(i))
            const theme = occasionTheme(i)
            const Icon = theme.Icon
            return (
              <section
                key={occ.name}
                className={`mt-8 overflow-hidden rounded-3xl border md:mt-12 ${theme.border} ${theme.panel}`}
              >
                {/* Ylänauha on sävyn vahvin esiintymä. Se on koristetta, joten
                    se ei kanna tietoa jota ei ole muualla. */}
                <div className={`h-2.5 w-full ${theme.accent}`} aria-hidden="true" />
                <div className="p-5 md:p-9">
                  <div className="flex items-start gap-4 md:gap-6">
                    <span
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl md:h-20 md:w-20 ${theme.accent}`}
                      aria-hidden="true"
                    >
                      <Icon className="h-7 w-7 text-white md:h-10 md:w-10" strokeWidth={1.75} />
                    </span>
                    <div className="min-w-0">
                      <h2 className={`font-heading text-4xl tracking-wide md:text-6xl ${theme.text}`}>
                        {occ.name}
                      </h2>
                      {/* Leipäteksti on tumma harmaa eikä tilaisuuden sävy:
                          sävy kuuluu otsikolle, ja kokonainen kappale värillä
                          latistaa hierarkian. Mitattu 6,7:1 sävypohjalla. */}
                      <p className="mt-2 max-w-2xl leading-relaxed text-gray/80">{occ.description}</p>
                    </div>
                  </div>
                  {picks.length > 0 && (
                    <>
                      <p className={`mt-7 text-xs font-semibold uppercase tracking-[0.2em] ${theme.text}`}>
                        {t.suggested}
                      </p>
                      {/* Kaksi palstaa kapealla, kolme md:stä ylöspäin. Kuusi
                          ehdotusta jakautuu molemmissa tasan, eikä viimeinen
                          rivi jää vajaaksi. Sama porrastus kuin kortin
                          `sizes`-attribuutissa. */}
                      <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3">
                        {picks.map((p) => (
                          <ProductCard key={p.slug} product={p} lang={lang} />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </section>
            )
          })}

          {/* Keräilijäsivun nosto. Sivu on fi+en-sisältöinen (MoominMugs.tsx),
              joten teksti tulee kieliparista eikä 12-kielisestä copysta —
              muut kielet näkevät englannin, kuten itse sivullakin. */}
          <p className="mt-10 text-sm text-muted">
            {lang === 'fi'
              ? 'Keräilijälle: miksi jotkut Arabian muumimukit ovat arvokkaita ja mistä vuosimallin tunnistaa. Lue '
              : 'For collectors: why some Arabia Moomin mugs are valuable and how to identify the year — '}
            <Link
              to={to('/harvinaiset-muumimukit')}
              className="font-medium text-amber underline-offset-2 hover:underline"
            >
              {lang === 'fi' ? 'Harvinaiset muumimukit' : 'Rare Moomin mugs'}
            </Link>
            .
          </p>

          <p className="mt-6 text-sm text-muted">{s.product.checkoutNote}</p>
        </div>
      </main>
      <Footer />
    </>
  )
}
