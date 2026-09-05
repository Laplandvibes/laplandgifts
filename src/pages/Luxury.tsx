import ShopNav from '../components/ShopNav'
import Footer from '../components/Footer'
import LuxuryHero from '../components/LuxuryHero'
import ExperienceCard from '../components/shop/ExperienceCard'
import { GIFT_EXPERIENCES } from '../data/experiences'
import ProductGridSection from '../components/shop/ProductGridSection'
import { PRODUCTS } from '../data/products'
import { LUXURY_HERO_SLUGS, luxuryProducts } from '../data/luxury'
import KalevalaRail from '../shared/ads/KalevalaRail'
import { trackAffiliateClick } from '../lib/analytics'
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

  // Elämykset hintarajalla, esineet käsin valitulta listalta (luxury.ts).
  // Vesa 5.9.: Makia-huppari ei ole luksusta vaikka maksaa 119 €.
  const all = luxuryProducts(PRODUCTS)
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
  // Esineiden järjestys on listan järjestys, ei hinnan.
  const objects = visible.filter((p) => p.category !== 'experiences')
  const fmtMoney = (n: number) =>
    new Intl.NumberFormat(lang === 'pt-BR' ? 'pt-BR' : lang, { style: 'currency', currency: visible[0]?.currency ?? 'EUR', maximumFractionDigits: 0 }).format(n)

  return (
    <>
      <ShopNav />
      <main className="bg-sand" id="main-content" tabIndex={-1}>
        {/* Musta kiilto: kaksi hyvin tummaa sävyä ja yksi vaalea heijastus,
            ei kuvaa. Kuva veisi huomion tuotteilta, ja mikä tahansa
            maisemakuva olisi tässä koristetta. */}
        <LuxuryHero
          eyebrow={tl.eyebrow}
          title={tl.title}
          lead={tl.lead(visible.length, fmtMoney(Math.min(...visible.map((p) => p.priceFrom))), fmtMoney(Math.max(...visible.map((p) => p.priceFrom))))}
          captions={tl.scenes}
          lang={lang}
        />

        <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
          <p className="mb-8 font-body text-sm text-muted">{tl.count(visible.length)}</p>

          {experiences.length > 0 && (
            <section className="mb-14">
              <h2 className="mb-5 font-heading text-3xl tracking-wide text-gray">
                {tl.experiencesH2}
              </h2>
              <ProductGridSection
                products={experiences}
                lang={lang}
                emptyMessage={t.emptyForCountry}
              />
              {/* GetYourGuiden suuret päivät (≥ 250 €): Sampo-jäänmurtaja ym.
                  Samassa osiossa kuin Elämyslahjat-tuotteet — lukijalle ne ovat
                  samaa hyllyä, vain kauppa on eri. */}
              {GIFT_EXPERIENCES.some((e) => Number.parseFloat(e.price ?? '0') >= 250) && (
                <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {GIFT_EXPERIENCES.filter((e) => Number.parseFloat(e.price ?? '0') >= 250).map((e) => (
                    <ExperienceCard key={e.path} pick={e} lang={lang} />
                  ))}
                </div>
              )}
            </section>
          )}

          {/* Kalevala-korut (Kulta-Center): sivun ainoa esineluksus, jolla on
              hintaa ja historiaa. Rivillä on oma otsikko ja lähdemerkintä. */}
          <section className="mb-14">
            <KalevalaRail
              lang={lang}
              sid="luxury_kalevala"
              variant="light"
              onCtaClick={(k, sid, url) => trackAffiliateClick(k, `ad_unit:${sid}`, url)}
            />
          </section>

          {objects.length > 0 && (
            <section>
              <h2 className="mb-5 font-heading text-3xl tracking-wide text-gray">
                {tl.objectsH2}
              </h2>
              <ProductGridSection
                products={objects}
                lang={lang}
                emptyMessage={t.emptyForCountry}
              />
            </section>
          )}

          <p className="mt-12 border-t border-line pt-5 font-body text-xs text-muted">
            {tl.note}
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
