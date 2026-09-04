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
import nordicbuddiesRail from '../shared/ads/rails/nordicbuddies'
import nordicbuddiesPicks from '../shared/ads/data/nordicbuddiesPicks'
import finlaysonRail from '../shared/ads/rails/finlayson'
import finlaysonPicks from '../shared/ads/data/finlaysonPicks'
import nordicnestRail from '../shared/ads/rails/nordicnest'
import nordicnestPicks from '../shared/ads/data/nordicnestPicks'
import sukkamestaritRail from '../shared/ads/rails/sukkamestarit'
import sukkamestaritPicks from '../shared/ads/data/sukkamestaritPicks'
import suomikauppaRail from '../shared/ads/rails/suomikauppa'
import suomikauppaPicks from '../shared/ads/data/suomikauppaPicks'
import ivaloRail from '../shared/ads/rails/ivalo'
import ivaloPicks from '../shared/ads/data/ivaloPicks'
import KalevalaRail from '../shared/ads/KalevalaRail'
import { trackAffiliateClick } from '../lib/analytics'
import HomeAdSlots, { MainPartnerBanner } from '../shared/HomeAdSlots'
import { AD_SLOTS } from '../data/adSlots'

import { AppPromoHero } from '../components/AppPromo';

export default function Home() {
  const lang = useLang()
  const meta = HOME_META[lang]

  return (
    <>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      {/* Per-kieli-canonical: kovakoodattu juuri ylikirjoitti prerenderin oikean
          /fi/-canonicalin ajonaikaisesti kaikilla 12 kielellä (nature-bugin sisarcase). */}
      <link rel="canonical" href={`https://laplandgifts.com/${LANG_PREFIX[lang] ? `${LANG_PREFIX[lang]}/` : ''}`} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />

    <div className="min-h-screen bg-white">
      {/* Sivuston oma navi korvattiin ShopNavilla: kategoriat, lahjaopas ja
          toimitus samasta palkista kuin kaupan muillakin sivuilla. Vanha
          headerin ankkurinavi (#categories, #products) toimi vain etusivulla. */}
      <ShopNav />

      <main id="main-content" tabIndex={-1}>
        <Hero />
        {/* App launch block, directly under the site's own opening. At the foot
            of the page it measured 81 % down a 33 000 px front page, and an
            announcement nobody scrolls to is not an announcement. */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AppPromoHero />
        </div>
        {/* 🔴 Tuotteet ovat sivun ensimmäinen sisältöosio (Vesa 1.8.: "kyllähän
            tämä 'tuliaisia ja lahjoja kumppanikaupoista' pitäisi olla se millä
            sivu alkaa?"). Aiemmin nostot olivat neljäntenä, bannerin ja
            kategorioiden takana: verkkokaupan etusivu avautui mainoksella ja
            hakemistolla, ja myytävä tavara näkyi vasta rullaamalla. */}
        <ProductGrid />
        {/* PÄÄKUMPPANI: kompakti banneri tuotenostojen jälkeen (LV Media, jaettu
            malli). Paikka säilyy: se on myytävää inventaaria ja liidikanava,
            joten se siirtyi tuotteiden alle eikä pois.
            Sivu on vaalea → surface="light". Tyhjänä house-ad → LV Media -portaali. */}
        <MainPartnerBanner config={AD_SLOTS} locale={lang} surface="light" />
        <ProductCategories />
        {/* KAKKOSPÄÄKUMPPANI + 6 kohdekohtaista premium-paikkaa (LV Media, jaettu
            malli). */}
        <HomeAdSlots config={AD_SLOTS} locale={lang} surface="light" />
        {/* IVALO.COM ad — independent design brands, gift context (shared/ads).
            Disclosure is footer-only on this site. */}
        {/* Ivalon mainos koko jarvikuvan paalle (Vesa 6.8.). Sama sid ja
            copy kuin ennen; vain ulkoasu vaihtui AdUnitista paikalliseen
            koko kuvan komponenttiin. */}
        <div className="max-w-5xl mx-auto px-4 pb-8">
          <ProductRail partner={ivaloRail} snapshot={ivaloPicks} lang={lang} sid="home_gifts_ivalo" variant="light"
            onCtaClick={(k, sid, url) => trackAffiliateClick(k, `ad_unit:${sid}`, url)} />
        </div>
        {/* Suomikaupan tarjousosio omana mainoksenaan (Vesa 10.8.). Sijoitettu
            Ivalon JALKEEN eika ennen: Ivalo on design ja tama on hinta, ja
            hintakulma toimii paremmin kun lukija on jo nahnyt taysihintaisen
            valikoiman. Ei prosentteja, ks. komponentin kommentti. */}
        <div className="max-w-5xl mx-auto px-4 pb-8">
          <ProductRail partner={suomikauppaRail} snapshot={suomikauppaPicks} lang={lang} sid="home_gifts_suomikauppa" variant="light"
            onCtaClick={(k, sid, url) => trackAffiliateClick(k, `ad_unit:${sid}`, url)} />
        </div>
        <div className="max-w-5xl mx-auto px-4 pb-8">
          <ProductRail partner={nordicbuddiesRail} snapshot={nordicbuddiesPicks} lang={lang} sid="home_gifts_nordicbuddies" variant="light"
            onCtaClick={(k, sid, url) => trackAffiliateClick(k, `ad_unit:${sid}`, url)} />
        </div>
        <GiftGuide />
        <div className="max-w-5xl mx-auto px-4 pb-8">
          <ProductRail partner={finlaysonRail} snapshot={finlaysonPicks} lang={lang} sid="home_gifts_finlayson" variant="light"
            onCtaClick={(k, sid, url) => trackAffiliateClick(k, `ad_unit:${sid}`, url)} />
        </div>
        <ValueProp />
        <div className="max-w-5xl mx-auto px-4 pb-8">
          <ProductRail partner={nordicnestRail} snapshot={nordicnestPicks} lang={lang} sid="home_gifts_nordicnest" variant="light"
            onCtaClick={(k, sid, url) => trackAffiliateClick(k, `ad_unit:${sid}`, url)} />
        </div>
        <ShippingInfo />
        <div className="max-w-5xl mx-auto px-4 pb-8">
          <ProductRail partner={sukkamestaritRail} snapshot={sukkamestaritPicks} lang={lang} sid="home_gifts_sukkamestarit" variant="light"
            onCtaClick={(k, sid, url) => trackAffiliateClick(k, `ad_unit:${sid}`, url)} />
        </div>
        <Guides />
        {/* Kulta-Center — was the shared AdUnit brand card. Replaced 2026-09-03
            (Vesa: "koruliike, heillä on Kalevalaa, miksi ei tuoda niitä esille").
            Two measured reasons, not a redesign:
              1. The card's shared spec is Finnish-only, so eleven of the twelve
                 locales rendered NOTHING here at all.
              2. On /fi it rendered without the word "Kalevala" anywhere — the
                 only "Kalevala" on this site was Mauri Kunnas' Koirien Kalevala
                 tote bag, which is a different thing entirely.
            The rail runs in all twelve locales and shows eight real pieces. */}
        <div className="max-w-5xl mx-auto px-4 pb-10">
          <KalevalaRail
            lang={lang}
            sid="home_gifts_kalevala"
            variant="light"
            onCtaClick={(specKey, sid, url) => trackAffiliateClick(specKey, `ad_unit:${sid}`, url)}
          />
        </div>
        <Newsletter />
        <FAQ />
        <RelatedSites />
      </main>

      <Footer />
    </div>
    </>
  )
}
