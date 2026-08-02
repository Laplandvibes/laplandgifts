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
import AdUnit from '../../../shared/ads/AdUnit'
import ivaloAd from '../../../shared/ads/advertisers/ivalo'
import kultaCenterAd from '../../../shared/ads/advertisers/kultaCenter'
import { trackAffiliateClick } from '../lib/analytics'
import HomeAdSlots, { MainPartnerBanner } from '../../../shared/HomeAdSlots'
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

      <main>
        <Hero />
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
        <div className="max-w-5xl mx-auto px-4 py-10">
          <AdUnit
            spec={ivaloAd}
            sid="home_gifts_ivalo"
            lang={lang}
            variant="light"
            onCtaClick={(specKey, sid, url) => trackAffiliateClick(specKey, `ad_unit:${sid}`, url)}
          />
        </div>
        <GiftGuide />
        <ValueProp />
        <ShippingInfo />
        <Guides />
        {/* Kulta-Center ad — FI-only spec, renders only on /fi. */}
        <div className="max-w-5xl mx-auto px-4 pb-10">
          <AdUnit
            spec={kultaCenterAd}
            sid="home_gifts_kulta"
            lang={lang}
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
    {/* App launch block. Bottom of the page on purpose: the site's own
        hero is what the search result promised. */}
    <AppPromoHero />
    </>
  )
}
