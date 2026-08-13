import ShopNav from '../components/ShopNav'
import Footer from '../components/Footer'
import { PARTNERS } from '../data/partners'
import { PRODUCTS } from '../data/products'
import { countryNames } from '../data/countryNames'
import { useLang } from '../i18n/useLang'
import { SHOP_COPY } from '../locales/shopCopy'

/**
 * Toimitussivu. Kaksi lohkoa:
 *   1. kumppanitaulukko: mihin kukin kauppa toimittaa ja milloin se tarkistettiin
 *   2. elintarvikkeiden vientirajoitteet, jotka kohdemaa asettaa
 *
 * 🔴 Taulukossa on vain ne kumppanit, joilta katalogissa on oikeasti tuote.
 * `pod` (LaplandVibes Store) on rekisterissä aiotuilla arvoilla eikä sen
 * toimitusaluetta ole verifioitu, joten sitä ei esitetä tarkistettuna faktana
 * ennen kuin Fourthwall-kauppa on auki ja siltä on tuotteita.
 */
export default function Shipping() {
  const lang = useLang()
  const t = SHOP_COPY[lang]
  const sellingPartnerIds = new Set(PRODUCTS.map((p) => p.partnerId))
  const rows = Object.values(PARTNERS)
    .filter((p) => sellingPartnerIds.has(p.id))
    .sort((a, b) => a.name.localeCompare(b.name))
  // 🔴 Lyhyt muoto, koska sarakkeen otsikko on jo "Toimitusalue": pitkä muoto
  // toisti sanan "Toimitus" jokaisessa solussa ja levitti taulukon 410
  // pikseliin, jolloin kolmas sarake jäi 320 pikselin ruudulla vierityksen
  // taakse. Sama tieto, puolet leveydestä.
  const zoneLabel = (z: string) =>
    z === 'worldwide'
      ? t.shipping.zoneShort.worldwide
      : z === 'eu'
        ? t.shipping.zoneShort.eu
        : t.shipping.zoneShort.fi
  return (
    <>
      <ShopNav />
      <main className="bg-sand py-12 md:py-16" id="main-content" tabIndex={-1}>
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="font-heading text-5xl tracking-wide text-gray md:text-7xl">{t.shipping.title}</h1>
          <p className="mt-4 text-muted">{t.product.checkoutNote}</p>

          {/* 🔴 Taulukko mahtuu nyt 320 pikselin ruudulle: solujen vaakatäyte
              on mobiilissa 12 px eikä 20 px. Aiemmin kolmas sarake
              ("tarkistettu") jäi säiliön vierityksen taakse eikä mikään
              kertonut että sitä voi vierittää — tieto oli mobiilissa
              käytännössä piilossa. Säiliön `overflow-x-auto` jää varmistukseksi
              pitkille kumppanien nimille, jotta sivun runko ei ala vierimään
              sivusuunnassa. */}
          <div className="mt-10 overflow-x-auto rounded-2xl border border-line bg-card">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-line">
                  <th scope="col" className="px-3 py-3 text-[10px] font-semibold uppercase tracking-wider text-muted sm:px-5 sm:text-xs sm:tracking-widest">
                    {t.shipping.table.shop}
                  </th>
                  <th scope="col" className="px-3 py-3 text-[10px] font-semibold uppercase tracking-wider text-muted sm:px-5 sm:text-xs sm:tracking-widest">
                    {t.shipping.table.area}
                  </th>
                  <th scope="col" className="px-3 py-3 text-[10px] font-semibold uppercase tracking-wider text-muted sm:px-5 sm:text-xs sm:tracking-widest">
                    {t.shipping.table.checked}
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((p) => (
                  <tr key={p.id} className="border-b border-line last:border-0">
                    <th scope="row" className="px-3 py-4 font-medium text-gray sm:px-5">{p.name}</th>
                    {/* Kaupan omat maapoikkeukset luetellaan nimillä heti
                        vyöhykkeen alla: taulukko on tämän sivun ainoa lupaus
                        siitä minne kukin kauppa toimittaa, joten pelkkä
                        "Koko maailma" olisi tässä väärä lupaus. Tuotekohtaiset
                        rajaukset (esim. Moomin Shopin elintarvikkeet) näkyvät
                        tuotekortissa ja tuotesivulla, koska ne eivät koske
                        koko kaupan valikoimaa. */}
                    <td className="px-3 py-4 text-muted sm:px-5">
                      {p.shipsExcept?.length
                        ? t.shipping.exceptShort(zoneLabel(p.shipsTo), p.shipsExcept.length)
                        : zoneLabel(p.shipsTo)}
                      {p.shipsExcept?.length ? (
                        <span className="mt-1 block text-xs">
                          {t.shipping.exceptNote(countryNames(p.shipsExcept, lang))}
                        </span>
                      ) : null}
                    </td>
                    <td className="px-3 py-4 text-xs whitespace-nowrap text-muted sm:px-5">{p.verifiedAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <section className="mt-12">
            <h2 className="font-heading text-3xl tracking-wide text-gray">{t.shipping.foodRules.title}</h2>
            <p className="mt-2 text-muted">{t.shipping.foodRules.intro}</p>
            <dl className="mt-6 divide-y divide-line rounded-2xl border border-line bg-card">
              {t.shipping.foodRules.rows.map((r) => (
                <div key={r.area} className="grid gap-1 px-5 py-4 sm:grid-cols-[12rem_1fr] sm:gap-4">
                  <dt className="font-medium text-gray">{r.area}</dt>
                  <dd className="text-sm text-muted">{r.rule}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
