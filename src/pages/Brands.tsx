import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ShopNav from '../components/ShopNav'
import Footer from '../components/Footer'
import { brandsWithProducts } from '../data/brandProducts'
import { useLang, useLocalePath } from '../i18n/useLang'
import { BRAND_COPY } from '../locales/brandCopy'

/**
 * Brändihakemisto.
 *
 * 🔴 Ilman tätä sivua yksittäiset brändisivut olisivat olemassa mutta
 * löytyisivät vain tuotesivun brändilinkistä — eli lukija joutuisi
 * arvaamaan, että esittely on olemassa. Hakemisto on myös se sivu, jolle
 * "suomalaiset designbrändit" -tyyppinen haku voi laskeutua.
 *
 * Esittelyn ensimmäinen virke riittää korttiin: kortti lupaa, sivu kertoo.
 */
export default function Brands() {
  const lang = useLang()
  const to = useLocalePath()
  const tb = BRAND_COPY[lang]
  const rows = brandsWithProducts()

  return (
    <>
      <ShopNav />
      <main className="bg-sand" id="main-content" tabIndex={-1}>
        <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
          <header className="mb-10 max-w-3xl">
            <h1 className="font-heading text-5xl tracking-wide text-gray md:text-6xl">
              {tb.indexH1}
            </h1>
            <p className="mt-3 text-base leading-relaxed text-muted">{tb.indexIntro}</p>
          </header>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rows.map(({ brand, count }) => {
              const profile = tb.profile[brand.id]
              // Ensimmäinen virke. Piste pisteen jälkeen ei kelpaa
              // katkaisukohdaksi kaikissa kielissä, joten japanissa ja
              // kiinassa katkaistaan niiden omaan päätemerkkiin.
              const first = profile.match(/^[^.。]+[.。]/)?.[0] ?? profile
              return (
                <Link
                  key={brand.id}
                  to={to(`/brand/${brand.id}`)}
                  className="group flex flex-col rounded-2xl border border-line bg-card p-6 transition-shadow hover:shadow-lg"
                >
                  <div className="mb-2 flex items-baseline justify-between gap-3">
                    <h2 className="font-heading text-2xl tracking-wide text-gray">{brand.name}</h2>
                    {brand.founded && (
                      <span className="shrink-0 font-body text-xs text-muted">{brand.founded}</span>
                    )}
                  </div>
                  <p className="mb-4 grow text-sm leading-relaxed text-muted">{first}</p>
                  <span className="inline-flex items-center gap-2 font-body text-sm text-pink">
                    {tb.indexCount(count)}
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
