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
import { useLang, LANG_PREFIX, type Lang } from '../i18n/useLang'
import AdUnit from '../../../shared/ads/AdUnit'
import ivaloAd from '../../../shared/ads/advertisers/ivalo'
import kultaCenterAd from '../../../shared/ads/advertisers/kultaCenter'
import { trackAffiliateClick } from '../lib/analytics'
import HomeAdSlots, { MainPartnerBanner } from '../../../shared/HomeAdSlots'
import { AD_SLOTS } from '../data/adSlots'

const META: Record<Lang, { title: string; description: string }> = {
  en: {
    title: 'LaplandGifts: Authentic Arctic gifts & crafts from Finnish Lapland',
    description: 'Handcrafted Lapland gifts, branded merch and Arctic experiences from Finnish Lapland. Browse seven categories and buy directly from the partner shop.',
  },
  fi: {
    title: 'LaplandGifts: Aitoja Lapin lahjoja ja käsitöitä',
    description: 'Käsintehtyjä Lapin lahjoja, brändituotteita ja arktisia elämyksiä Suomen Lapista. Selaa seitsemää kategoriaa ja osta suoraan kumppanin kaupasta.',
  },
  de: {
    title: 'LaplandGifts: Echte arktische Geschenke aus Finnisch-Lappland',
    description: 'Handgefertigte Lappland-Geschenke, Markenartikel und arktische Erlebnisse aus Finnisch-Lappland. Sieben Kategorien durchstöbern und direkt im Partnershop kaufen.',
  },
  ja: {
    title: 'LaplandGifts：フィンランド・ラップランド発の本物の北極ギフト',
    description: '手作りのラップランド・ギフト、ブランドグッズ、北極体験。フィンランド・ラップランド発。7つのカテゴリーから選び、提携ショップで直接購入できます。',
  },
  es: {
    title: 'LaplandGifts: Regalos y artesanía árticos de la Laponia finlandesa',
    description: 'Regalos de Laponia hechos a mano, productos de marca y experiencias árticas de la Laponia finlandesa. Explore siete categorías y compre directamente en la tienda asociada.',
  },
  'pt-BR': {
    title: 'LaplandGifts: Presentes e artesanato árticos da Lapônia finlandesa',
    description: 'Presentes da Lapônia feitos à mão, produtos de marca e experiências árticas da Lapônia finlandesa. Explore sete categorias e compre direto na loja parceira.',
  },
  'zh-CN': {
    title: 'LaplandGifts：来自芬兰拉普兰的正宗北极礼物与手工艺品',
    description: '手工制作的拉普兰礼物、品牌商品与北极体验，来自芬兰拉普兰。浏览七个类别，直接在合作商店下单。',
  },
  ko: {
    title: 'LaplandGifts: 핀란드 라플란드의 정통 북극 선물·공예품',
    description: '핀란드 라플란드의 수제 선물, 브랜드 굿즈, 북극 체험. 일곱 개 카테고리를 둘러보고 제휴 상점에서 바로 구매하십시오.',
  },
  fr: {
    title: 'LaplandGifts: Cadeaux et artisanat arctiques de Laponie finlandaise',
    description: 'Cadeaux de Laponie faits main, produits de marque et expériences arctiques de Laponie finlandaise. Parcourez sept catégories et achetez directement dans la boutique partenaire.',
  },
  it: {
    title: 'LaplandGifts: Regali e artigianato artici della Lapponia finlandese',
    description: 'Regali della Lapponia fatti a mano, prodotti di marca ed esperienze artiche dalla Lapponia finlandese. Sfoglia sette categorie e acquista direttamente nel negozio partner.',
  },
  nl: {
    title: 'LaplandGifts: Authentieke Arctische geschenken uit Fins Lapland',
    description: 'Handgemaakte Lapland-geschenken, merchandise en Arctische belevenissen uit Fins Lapland. Blader door zeven categorieën en koop direct in de partnerwinkel.',
  },
  sv: {
    title: 'LaplandGifts: äkta arktiska presenter från finska Lappland',
    description: 'Handgjorda Lapplandspresenter, egen merch och arktiska upplevelser från finska Lappland. Bläddra bland sju kategorier och köp direkt i partnerbutiken.',
  },
}

export default function Home() {
  const lang = useLang()
  const meta = META[lang]

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
        {/* PÄÄKUMPPANI — kompakti banneri heti heron alla (LV Media, jaettu malli).
            Sivu on vaalea → surface="light". Tyhjänä house-ad → LV Media -portaali. */}
        <MainPartnerBanner config={AD_SLOTS} locale={lang} surface="light" />
        <ProductCategories />
        {/* KAKKOSPÄÄKUMPPANI + 6 kohdekohtaista premium-paikkaa — heti
            ensimmäisen sisältöosion jälkeen (LV Media, jaettu malli). */}
        <HomeAdSlots config={AD_SLOTS} locale={lang} surface="light" />
        <ProductGrid />
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
    </>
  )
}
