import { useState } from 'react'
import { Link } from 'react-router-dom'
import ShopNav from '../components/ShopNav'
import Footer from '../components/Footer'
import BoutiqueCard from '../components/shop/BoutiqueCard'
import {
  BOUTIQUES, boutiquesByTown, townsWithPages, townsWithoutPages,
} from '../data/boutiques'
import { SHOP_COPY } from '../locales/shopCopy'
import { useLang, useLocalePath } from '../i18n/useLang'

type Filter = 'all' | 'online' | 'physical'

export default function Boutiques() {
  const lang = useLang()
  const localePath = useLocalePath()
  const t = SHOP_COPY[lang].boutique
  const [filter, setFilter] = useState<Filter>('all')

  const visible = BOUTIQUES.filter((b) =>
    filter === 'all' ? true : filter === 'online' ? b.hasOnlineStore : b.hasPhysicalStore,
  )

  const elsewhere = townsWithoutPages()

  return (
    <>
      <ShopNav />
      <main className="bg-sand" id="main-content" tabIndex={-1}>
        <header className="mx-auto max-w-7xl px-4 pt-10 pb-6">
          <h1 className="font-heading text-5xl tracking-wide text-night md:text-6xl">
            {t.hubTitle}
          </h1>
          <p className="mt-2 text-lg text-gray">{t.hubLead}</p>
          <p className="mt-3 max-w-2xl text-muted">{t.hubIntro}</p>
          {/* Luku luetaan datasta. Copyyn kirjoitettu luku ajautui storessa
              erilleen todellisuudesta: badge lupasi 16 kun putiikkeja oli 15. */}
          <p className="mt-1 text-sm text-muted">{t.count(BOUTIQUES.length)}</p>
        </header>

        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap gap-2" role="group" aria-label={t.hubTitle}>
            {(['all', 'online', 'physical'] as Filter[]).map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={`inline-flex min-h-11 items-center rounded-full px-4 text-sm font-medium transition-colors ${
                  filter === f
                    ? 'bg-night text-white'
                    : 'border border-line bg-card text-gray hover:border-amber'
                }`}
              >
                {f === 'all' ? t.filterAll : f === 'online' ? t.filterOnline : t.filterPhysical}
              </button>
            ))}
          </div>

          <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((b) => (
              <li key={b.slug}><BoutiqueCard boutique={b} /></li>
            ))}
          </ul>
        </div>

        <section className="mx-auto max-w-7xl px-4 py-12">
          <h2 className="font-heading text-3xl tracking-wide text-night">{t.townsH2}</h2>
          <ul className="mt-4 flex flex-wrap gap-3">
            {townsWithPages().map((town) => (
              <li key={town}>
                <Link
                  to={localePath(`/boutiques/${town}`)}
                  className="inline-flex min-h-11 items-baseline gap-2 rounded-full border border-line bg-card px-4 py-2 text-gray transition-colors hover:border-amber"
                >
                  <span className="font-semibold">{t.townNames[town]}</span>
                  <span className="text-sm text-muted">
                    {t.count(boutiquesByTown(town).length)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* 🔴 Nämä ovat linkkejä eivätkä kortteja. Pääruudukko näyttää jo
              kaikki putiikit, joten korttien toisto tässä näyttäisi saman
              putiikin kahdesti samalla sivulla eikä reagoisi suodattimeen.
              Osion tehtävä on navigaatio: paikkakunnat joilla ei ole omaa
              sivua saavat silti nimen näkyviin. */}
          {elsewhere.length > 0 && (
            <>
              <h3 className="mt-8 font-heading text-2xl tracking-wide text-night">
                {t.elsewhereH2}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-1">
                {elsewhere.flatMap((town) =>
                  boutiquesByTown(town).map((b) => (
                    <li key={b.slug}>
                      <Link
                        to={localePath(`/boutique/${b.slug}`)}
                        className="inline-flex min-h-11 items-baseline gap-2 text-gray hover:text-amber hover:underline"
                      >
                        <span className="text-[11px] font-semibold uppercase tracking-widest text-muted">
                          {t.townNames[town]}
                        </span>
                        <span className="font-semibold">{b.name}</span>
                      </Link>
                    </li>
                  )),
                )}
              </ul>
            </>
          )}
        </section>

        <section className="mx-auto max-w-3xl px-4 pb-16">
          <div className="rounded-2xl border border-line bg-card p-6">
            <h2 className="font-heading text-2xl tracking-wide text-night">{t.listingH2}</h2>
            <p className="mt-2 text-muted">{t.listingBody}</p>
            <a
              href="mailto:info@laplandvibes.com?subject=LaplandVibes%20putiikkilistaus"
              className="mt-4 inline-flex min-h-11 items-center rounded-full bg-amber px-5 font-medium text-white transition-colors hover:bg-amber/90"
            >
              {t.listingCta}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
