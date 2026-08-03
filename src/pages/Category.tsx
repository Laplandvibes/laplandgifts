import { useLocation } from 'react-router-dom'
import ShopNav from '../components/ShopNav'
// src/shared/Footer on jaettu SharedFooter, joka odottaa dict-propin.
// components/Footer on tämän sivuston kääre, joka syöttää sille COPY:n ja
// footerDictin, joten sivut käyttävät sitä (sama kuin Home.tsx).
import Footer from '../components/Footer'
import ProductGridSection from '../components/shop/ProductGridSection'
import ExperienceCard from '../components/shop/ExperienceCard'
import { categoryBySlug } from '../data/categories'
import { productsByCategory } from '../data/products'
import { GIFT_EXPERIENCES, EXPERIENCE_GROUPS, experiencesByGroup } from '../data/experiences'
import { GYG_PRICE_AS_OF } from '../../../shared/gyg/picks'
import { groupProducts, subgroupLabel } from '../data/subgroups'
import { PARTNERS } from '../data/partners'
import { mergeExcept, shipsTo } from '../data/shipping'
import { useShippingCountry } from '../context/ShippingCountry'
import { useLang, stripLocale } from '../i18n/useLang'
import { imgSrcSet } from '../lib/img'
import { SHOP_COPY } from '../locales/shopCopy'
import NotFound from './NotFound'

/**
 * Yksi komponentti palvelee kaikkia seitsemää kategoriaa: kategoria luetaan
 * polusta, joten uuden kategorian lisääminen on rivi categories.ts:ssä.
 */
export default function Category() {
  const lang = useLang()
  const { pathname } = useLocation()
  const { country } = useShippingCountry()
  const t = SHOP_COPY[lang].category
  const tx = SHOP_COPY[lang].experience

  const category = categoryBySlug(stripLocale(pathname).replace(/\/$/, ''))
  if (!category) return <NotFound />

  // Elämykset eivät ole tuotteita: ne varataan GetYourGuidesta eikä niillä ole
  // kumppanikauppaa tai toimitusaluetta, joten toimitusmaasuodatus ei koske
  // niitä. Rivit tulevat verkoston verifioidusta GYG-katalogista.
  const isExperiences = category.id === 'experiences'

  const all = productsByCategory(category.id)
  // 🔴 Suodatin katsoo sekä kaupan että tuotteen maapoikkeuksia. Ilman
  // tuotteen omaa listaa Moomin Shopin elintarvikkeet näkyisivät
  // yhdysvaltalaiselle ostajalle, vaikka niitä ei saa lähettää sinne: kauppa
  // on 'worldwide' mutta juuri ne tuotteet eivät ole.
  const visible = country
    ? all.filter((p) => {
        const partner = PARTNERS[p.partnerId]
        return shipsTo(partner.shipsTo, country, mergeExcept(partner.shipsExcept, p.shipsExcept))
      })
    : all

  // Kaksi eri tyhjää tilaa: kategoria odottaa vielä tuotteita (merch odottaa
  // Fourthwallia), tai tuotteita on mutta yksikään ei toimita valittuun maahan.
  // Toimitusmaateksti tyhjässä kategoriassa neuvoisi vaihtamaan maata, mikä ei
  // auttaisi lainkaan.
  const emptyMessage = all.length === 0 ? t.emptyCategory : t.emptyForCountry

  return (
    <>
      <ShopNav />
      <main className="bg-sand">
        <header className="relative overflow-hidden">
          <picture>
            <source srcSet={imgSrcSet(category.image, 'avif')} sizes="100vw" type="image/avif" />
            {/* Kategoriasivun kuva on sivun LCP-elementti aivan kuten etusivun
                hero: se on ruudun yläreunassa ennen mitään muuta sisältöä.
                loading="lazy" viivästyttäisi juuri sen kuvan, jota lukija
                odottaa, joten se ladataan korkealla prioriteetilla. srcSet
                antaa selaimen valita ruudun kokoiselle kaistalle sopivan
                version 1200 pikselin sijaan. */}
            <img
              src={`/images/${category.image}.webp`}
              srcSet={imgSrcSet(category.image, 'webp')}
              sizes="100vw"
              alt=""
              width={1600}
              height={640}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="h-[38svh] min-h-64 w-full object-cover"
            />
          </picture>
          <div className="absolute inset-0 bg-night/55" aria-hidden="true" />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-7xl px-4 pb-8">
              <h1 className="font-heading text-5xl tracking-wide text-white md:text-7xl">
                {t.names[category.id]}
              </h1>
              <p className="mt-3 max-w-2xl text-white/85">{t.intro[category.id]}</p>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
          <p className="mb-6 text-sm text-muted">
            {t.productCount(isExperiences ? GIFT_EXPERIENCES.length + visible.length : visible.length)}
          </p>
          {isExperiences ? (
            <>
              {/* Elämyslahjat.fi:n lahjakortit ensin: ne ovat ostettavia
                  tuotteita komissiolla, GYG-retket alla varataan päivälle.
                  Toimitusmaasuodatin koskee näitäkin, mutta sähköpostitse
                  toimitettava lahjakortti on worldwide eikä siksi katoa. */}
              {visible.length > 0 && (
                <section className="mb-12">
                  <h2 className="mb-2 font-heading text-3xl tracking-wide text-gray">
                    {tx.voucherH2}
                  </h2>
                  <p className="mb-5 max-w-2xl text-sm text-muted">{tx.voucherNote}</p>
                  <ProductGridSection products={visible} lang={lang} emptyMessage={emptyMessage} />
                </section>
              )}
              {/* 🔴 Ryhmitelty, ei yhtenä listana (Vesa 2.8.: "kyllä pitää olla
                  ihan useita kymmeniä täällä ja kategorioittain"). 24 korttia
                  peräkkäin on luettelo; kahdeksan otsikoitua ryhmää on
                  valikoima, josta lahjan etsijä löytää haluamansa. */}
              {EXPERIENCE_GROUPS.map((g) => {
                const rows = experiencesByGroup(g)
                if (!rows.length) return null
                return (
                  <section key={g} className="mb-12 last:mb-0">
                    <h2 className="mb-5 font-heading text-3xl tracking-wide text-gray">
                      {tx.groups[g]}
                    </h2>
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                      {rows.map((p) => (
                        <ExperienceCard key={p.path} pick={p} lang={lang} />
                      ))}
                    </div>
                  </section>
                )
              })}
              {/* Hinnan lukupäivä kerran sivun lopussa, ei jokaisessa kortissa.
                  Kortissa se luki muodossa "Alkaen 198 € GetYourGuidessa,
                  hinta luettu 2026-07-29", mikä on asiakkaalle kohinaa. */}
              <p className="mt-10 border-t border-line pt-5 text-xs text-muted">
                {tx.priceAsOf(GYG_PRICE_AS_OF)}
              </p>
            </>
          ) : (
            <>
              {/* 🔴 Ryhmitelty kategorian sisällä (Vesa 2.8.: "kaikkia
                  tuotteita on liian vähän ja ilman kategorisointia").
                  Kahdellakymmenellä herkulla yksi ruudukko on luettelo, jossa
                  salmiakki, suklaa, tee ja kuivaliha ovat sekaisin.
                  Ryhmittely ei piilota mitään: kartasta puuttuva tuote päätyy
                  nimettömään ryhmään listan loppuun, ja jos ryhmiä on vain
                  yksi, otsikkoa ei näytetä lainkaan. */}
              {(() => {
                const groups = groupProducts(category.id, visible)
                if (!visible.length || groups.length <= 1) {
                  return (
                    <ProductGridSection
                      products={visible}
                      lang={lang}
                      emptyMessage={emptyMessage}
                    />
                  )
                }
                return groups.map((g) => {
                  const label = subgroupLabel(g.id, lang)
                  return (
                    <section key={g.id} className="mb-12 last:mb-0">
                      {label && (
                        <h2 className="mb-5 font-heading text-3xl tracking-wide text-gray">
                          {label}
                        </h2>
                      )}
                      <ProductGridSection
                        products={g.items}
                        lang={lang}
                        emptyMessage={emptyMessage}
                      />
                    </section>
                  )
                })
              })()}
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
