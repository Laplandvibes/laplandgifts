import ShopNav from '../components/ShopNav'
import Hero from '../components/Hero'
import ProductCategories from '../components/ProductCategories'
import ValueProp from '../components/ValueProp'
import ProductGrid from '../components/ProductGrid'
import GiftGuide from '../components/GiftGuide'
import Guides from '../components/Guides'
import Newsletter from '../components/Newsletter'
import ShippingInfo from '../components/ShippingInfo'
import FAQ from '../components/FAQ'
import RelatedSites from '../components/RelatedSites'
import Footer from '../components/Footer'
import { useLang, LANG_PREFIX } from '../i18n/useLang'
// 🔴 Etusivun metat tulevat yhdestä lähteestä, jonka myös routes.json-
// generaattori lukee. Oma taulukko tässä tiedostossa ajautui eri mieltä
// prerenderin kanssa: selain näytti eri otsikkoa kuin hakukone.
import { HOME_META } from '../locales/homeMeta'
import ProductRail from '../shared/ads/ProductRail'
import suomikauppaRail from '../shared/ads/rails/suomikauppa'
import suomikauppaPicks from '../shared/ads/data/suomikauppaPicks'
import ivaloRail from '../shared/ads/rails/ivalo'
import ivaloPicks from '../shared/ads/data/ivaloPicks'
import KalevalaRail from '../shared/ads/KalevalaRail'
import { trackAffiliateClick } from '../lib/analytics'
import HomeAdSlots from '../shared/HomeAdSlots'
import { AD_SLOTS } from '../data/adSlots'
import { AppPromoHero } from '../components/AppPromo'

/**
 * ETUSIVUN JÄRJESTYS — miksi mikäkin on missä (Vesa 5.9.2026: "koko etusivu on
 * ihan paska ja ei ole yhtään mietitty miksi ja mitä on missäkin").
 *
 * Sivu on kaupan etusivu, ja sillä on kolme lukijaa: se joka tietää mitä
 * hakee, se joka ei tiedä, ja se joka epäilee voiko täältä ostaa. Järjestys
 * palvelee heitä tässä järjestyksessä:
 *
 *   1  Hero            mikä tämä on, yhdellä lauseella
 *   2  ProductGrid     tavara ensin (Vesa 1.8.: sivun pitää alkaa tuotteista)
 *   3  Categories      hakemisto: mitä Lapista kannattaa ostaa, seitsemän ovea
 *   4  Kumppanit       Keloa — maksettu pääkumppani, KERRAN. Ennen tässä oli
 *                      lisäksi jaettu pääkumppanibanneri samasta yrityksestä,
 *                      joka vaalealla pohjalla renderöityi lukukelvottomana
 *                      (valkoinen teksti hiekalla) — "kaksi mainosta, mitä
 *                      vittua" (Vesa 5.9.). Banneri on poistettu.
 *   5  Suomikauppa     kaupan ydinlupaus riviksi: Fazer, Fiskars, Muumi ja
 *                      Rento samasta tilauksesta, myös ulkomaille — 12 kielellä
 *   6  Lahjaopas       lukija joka ei tiedä mitä ostaa: tilaisuus → tuote
 *   7  Ivalo           design-muoti, 12 kielellä
 *   8  Kalevala        korut, 12 kielellä (Vesa 3.9.)
 *   9  Näin ostaminen  epäilijälle: miten osto oikeasti tapahtuu
 *  10  Mitä teemme     samaan luottamuslohkoon — yksi lukema, ei kaksi hajallaan
 *  11  Appi            verkoston sovellus luottamuslohkon jälkeen, ei ennen
 *                      tuotteita (kaupan etusivu ei ala toisen tuotteen
 *                      mainoksella)
 *  12  Oppaat          PDF-oppaat ovat uutiskirjeen liidimagneetti ⇒ heti
 *                      ennen lomaketta
 *  13  Uutiskirje · FAQ · Verkosto
 *
 * 🔴 Mainoksia etusivulla on nyt KOLME riviä ja yksi kumppanikortti. Ennen
 * niitä oli seitsemän riviä ripoteltuina info-osioiden väliin. Neljä riviä
 * (Nordicbuddies, Finlayson, Nordic Nest, Sukkamestarit) olivat FI+EN-only —
 * kymmenellä kielellä kahdestatoista ne jättivät tyhjän aukon — ja ne siirtyivät
 * kategoriasivuille, joilla aihe osuu (design → Nordic Nest, vaatteet →
 * Nordicbuddies). Etusivulla ovat vain rivit jotka renderöityvät kaikilla 12
 * kielellä.
 */
export default function Home() {
  const lang = useLang()
  const meta = HOME_META[lang]
  const rail = 'mx-auto max-w-5xl px-4 py-6 md:py-8'

  return (
    <>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      {/* Per-kieli-canonical: kovakoodattu juuri ylikirjoitti prerenderin oikean
          /fi/-canonicalin ajonaikaisesti kaikilla 12 kielellä (nature-bugin sisarcase). */}
      <link rel="canonical" href={`https://laplandgifts.com/${LANG_PREFIX[lang] ? `${LANG_PREFIX[lang]}/` : ''}`} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />

      <div className="min-h-screen bg-white">
        <ShopNav />

        <main id="main-content" tabIndex={-1}>
          <Hero />
          <ProductGrid />
          <ProductCategories />

          {/* Kumppanit: Keloa-kortti (sponsors[0]). Tyhjät kortit ja premium-
              ruudukko eivät renderöidy (jaettu sääntö 4.9.). */}
          <HomeAdSlots config={AD_SLOTS} locale={lang} surface="light" />

          <div className={rail}>
            <ProductRail partner={suomikauppaRail} snapshot={suomikauppaPicks} lang={lang} sid="home_gifts_suomikauppa" variant="light"
              onCtaClick={(k, sid, url) => trackAffiliateClick(k, `ad_unit:${sid}`, url)} />
          </div>

          <GiftGuide />

          <div className={rail}>
            <ProductRail partner={ivaloRail} snapshot={ivaloPicks} lang={lang} sid="home_gifts_ivalo" variant="light"
              onCtaClick={(k, sid, url) => trackAffiliateClick(k, `ad_unit:${sid}`, url)} />
          </div>
          <div className={rail}>
            <KalevalaRail
              lang={lang}
              sid="home_gifts_kalevala"
              variant="light"
              onCtaClick={(specKey, sid, url) => trackAffiliateClick(specKey, `ad_unit:${sid}`, url)}
            />
          </div>

          <ValueProp />
          <ShippingInfo />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AppPromoHero />
          </div>

          <Guides />
          <Newsletter />
          <FAQ />
          <RelatedSites />
        </main>

        <Footer />
      </div>
    </>
  )
}
