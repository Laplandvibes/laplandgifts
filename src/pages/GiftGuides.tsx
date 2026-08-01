import ShopNav from '../components/ShopNav'
// components/Footer on tämän sivuston kääre jaetun SharedFooterin ympärillä
// (SharedFooter odottaa dict-propin). Sama kuin Home.tsx ja Category.tsx.
import Footer from '../components/Footer'
import ProductCard from '../components/shop/ProductCard'
import { productsForOccasion } from '../data/occasions'
import { useLang } from '../i18n/useLang'
import { COPY } from '../locales/copy'
import { SHOP_COPY } from '../locales/shopCopy'

/**
 * Lahjaopassivu. Tilaisuudet tulevat copysta (12 kieltä), tuotteet
 * `occasions.ts`:n poimintataulukosta, ja indeksi sitoo ne yhteen.
 *
 * 🔴 Jokainen ehdotus on klikattava tuotekortti, ei tekstirivi: Vesa liputti
 * 25.7. että vanha lahjaopas listasi lahjaideoita, joita ei voinut avata eikä
 * ostaa. Tyhjä tilaisuus renderöi otsikon ja kuvauksen ilman kortteja, mikä on
 * rehellisempää kuin keksitty tuotelinkki.
 */
export default function GiftGuides() {
  const lang = useLang()
  const t = COPY[lang].giftGuide
  const s = SHOP_COPY[lang]
  return (
    <>
      <ShopNav />
      <main className="bg-sand py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="font-heading text-5xl tracking-wide text-gray md:text-7xl">{t.h2}</h1>
          <p className="mt-3 max-w-2xl text-muted">{t.sub}</p>

          {t.occasions.map((occ, i) => {
            const picks = productsForOccasion(i)
            return (
              <section key={occ.name} className="mt-14">
                <h2 className="font-heading text-3xl tracking-wide text-gray md:text-4xl">{occ.name}</h2>
                <p className="mt-2 max-w-2xl text-muted">{occ.description}</p>
                {picks.length > 0 && (
                  <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
                    {picks.map((p) => (
                      <ProductCard key={p.slug} product={p} lang={lang} />
                    ))}
                  </div>
                )}
              </section>
            )
          })}

          <p className="mt-16 text-sm text-muted">{s.product.checkoutNote}</p>
        </div>
      </main>
      <Footer />
    </>
  )
}
