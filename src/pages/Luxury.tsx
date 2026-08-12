import ShopNav from '../components/ShopNav'
import Footer from '../components/Footer'
import ProductGridSection from '../components/shop/ProductGridSection'
import { PRODUCTS } from '../data/products'
import { LUXURY_MIN_PRICE, LUXURY_HERO_SLUGS } from '../data/luxury'
import { PARTNERS } from '../data/partners'
import { mergeExcept, shipsTo } from '../data/shipping'
import { byShippingBreadth } from '../data/sortProducts'
import { useShippingCountry } from '../context/ShippingCountry'
import { useLang } from '../i18n/useLang'
import { SHOP_COPY } from '../locales/shopCopy'
import { LUXURY_COPY } from '../locales/luxuryCopy'

/**
 * Luksusvalikoima: kallein pää, elämykset ensin.
 *
 * 🔴 Sivu on MUSTA vaikka muu kauppa on hiekkaa (Vesa 12.8.: "extra
 * hienoilla mainoksilla että luxus ja tyylikkyys huokuu, mustaa kiiltoa").
 * Kontrasti on tarkoituksellinen: sivu tuntuu eri huoneelta.
 *
 * 🔴 EI KULTAA. Vesa poisti kullan hoteldealsista sanoilla "toi
 * keltainen/kulta ei sovi yhtään tonne" (CLAUDE.md), ja se päätös pätee
 * tässäkin. Kiilto tehdään mustan sävyillä ja valkoisella, ei kultafoliolla.
 *
 * 🔴 Tuotekortti pysyy vaaleana mustalla pohjalla. Kortin kuvalava on
 * valkoinen, koska kumppanien tuotekuvat on kuvattu valkoista vasten —
 * musta kortti tekisi jokaisesta kuvasta valkoisen laatikon.
 */
export default function Luxury() {
  const lang = useLang()
  const { country } = useShippingCountry()
  const t = SHOP_COPY[lang].category
  const tl = LUXURY_COPY[lang]

  const all = PRODUCTS.filter((p) => p.priceFrom >= LUXURY_MIN_PRICE)
  const visible = country
    ? all.filter((p) => {
        const partner = PARTNERS[p.partnerId]
        return shipsTo(partner.shipsTo, country, mergeExcept(partner.shipsExcept, p.shipsExcept))
      })
    : byShippingBreadth(all)

  // Elämykset ensin ja niiden sisällä nimetyt kärkitunnukset, koska ne ovat
  // sekä kalleimmat että ainoat jotka lähtevät kaikkialle.
  const rank = (slug: string) => {
    const i = LUXURY_HERO_SLUGS.indexOf(slug)
    return i === -1 ? LUXURY_HERO_SLUGS.length : i
  }
  const experiences = visible
    .filter((p) => p.category === 'experiences')
    .sort((a, b) => rank(a.slug) - rank(b.slug) || b.priceFrom - a.priceFrom)
  const objects = visible.filter((p) => p.category !== 'experiences')

  return (
    <>
      <ShopNav />
      <main className="bg-night">
        {/* Musta kiilto: kaksi hyvin tummaa sävyä ja yksi vaalea heijastus,
            ei kuvaa. Kuva veisi huomion tuotteilta, ja mikä tahansa
            maisemakuva olisi tässä koristetta. */}
        <header className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(ellipse_at_30%_-10%,#243044_0%,#0F172A_45%,#080D18_100%)]">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
            aria-hidden="true"
          />
          <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
            <p className="mb-3 font-body text-xs uppercase tracking-[0.22em] text-white/50">
              {tl.eyebrow}
            </p>
            <h1 className="font-heading text-6xl tracking-wide text-white md:text-8xl">
              {tl.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">{tl.lead}</p>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
          <p className="mb-8 font-body text-sm text-white/50">{tl.count(visible.length)}</p>

          {experiences.length > 0 && (
            <section className="mb-14">
              <h2 className="mb-5 font-heading text-3xl tracking-wide text-white">
                {tl.experiencesH2}
              </h2>
              <ProductGridSection
                products={experiences}
                lang={lang}
                emptyMessage={t.emptyForCountry}
              />
            </section>
          )}

          {objects.length > 0 && (
            <section>
              <h2 className="mb-5 font-heading text-3xl tracking-wide text-white">
                {tl.objectsH2}
              </h2>
              <ProductGridSection
                products={objects}
                lang={lang}
                emptyMessage={t.emptyForCountry}
              />
            </section>
          )}

          <p className="mt-12 border-t border-white/10 pt-5 font-body text-xs text-white/40">
            {tl.note}
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
