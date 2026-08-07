import { useLocation } from 'react-router-dom'
import ShopNav from '../components/ShopNav'
import Footer from '../components/Footer'
import BoutiqueCard from '../components/shop/BoutiqueCard'
import { boutiquesByTown, townsWithPages, type TownId } from '../data/boutiques'
import { SHOP_COPY } from '../locales/shopCopy'
import { useLang, stripLocale } from '../i18n/useLang'
import NotFound from './NotFound'

/**
 * Yksi komponentti palvelee kaikkia paikkakuntasivuja: paikkakunta luetaan
 * polusta, samoin kuin Category lukee kategorian. Uusi paikkakuntasivu on
 * seuraus datasta eikä uusi tiedosto.
 */
export default function BoutiqueTown() {
  const lang = useLang()
  const { pathname } = useLocation()
  const t = SHOP_COPY[lang].boutique

  const slug = stripLocale(pathname).replace(/\/$/, '').split('/').pop() ?? ''
  const town = townsWithPages().find((x) => x === slug) as TownId | undefined
  if (!town) return <NotFound />

  const all = boutiquesByTown(town)
  // 🔴 Ryhmien on oltava toisensa poissulkevat. Useimmilla putiikeilla on sekä
  // verkkokauppa että kivijalka, joten ehdot `hasOnlineStore` ja
  // `hasPhysicalStore` näyttäisivät saman putiikin kahdesti samalla sivulla.
  // Sama vika on nykyisessä laplandstore.fi:ssä. Jako menee sen mukaan mitä
  // lukijan pitää tietää: saanko tämän kotiin, vai onko mentävä paikalle.
  const online = all.filter((b) => b.hasOnlineStore)
  const physicalOnly = all.filter((b) => b.hasPhysicalStore && !b.hasOnlineStore)
  const authorized = all.filter((b) => b.samiAuthorized)

  return (
    <>
      <ShopNav />
      <main className="bg-sand">
        <header className="mx-auto max-w-7xl px-4 pt-10 pb-6">
          <h1 className="font-heading text-5xl tracking-wide text-night md:text-6xl">
            {t.townNames[town]}
          </h1>
          <p className="mt-2 text-muted">{t.count(all.length)}</p>
        </header>

        {online.length > 0 && (
          <section className="mx-auto max-w-7xl px-4 pb-10">
            <h2 className="font-heading text-3xl tracking-wide text-night">{t.shopAtH2}</h2>
            <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {online.map((b) => <li key={b.slug}><BoutiqueCard boutique={b} /></li>)}
            </ul>
          </section>
        )}

        {physicalOnly.length > 0 && (
          <section className="mx-auto max-w-7xl px-4 pb-10">
            <h2 className="font-heading text-3xl tracking-wide text-night">{t.visitH2}</h2>
            <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {physicalOnly.map((b) => <li key={b.slug}><BoutiqueCard boutique={b} /></li>)}
            </ul>
          </section>
        )}

        {/* Duodji-osio näkyy vain jos paikkakunnalla on auktorisoituja myyjiä.
            Ehto on datassa eikä paikkakunnan nimessä: jos Rovaniemelle tulee
            auktorisoitu myyjä, osio ilmestyy sinne itsestään. */}
        {authorized.length > 0 && (
          <section className="mx-auto max-w-3xl px-4 pb-16">
            <div className="rounded-2xl border border-line bg-card p-6">
              <h2 className="font-heading text-2xl tracking-wide text-night">{t.duodjiH2}</h2>
              <p className="mt-3 leading-relaxed text-muted">{t.duodjiBody}</p>
              <ul className="mt-4 space-y-1">
                {authorized.map((b) => (
                  <li key={b.slug} className="text-sm text-gray">
                    <span className="font-semibold">{b.name}</span>
                    <span className="text-muted">, {t.duodjiAuthorized.toLowerCase()}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
