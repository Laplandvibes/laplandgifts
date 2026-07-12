import { useLocation, useNavigate } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import Logo from '../components/Logo'
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
import { useLang, stripLocale, type Lang } from '../i18n/useLang'
import AdUnit from '../../../shared/ads/AdUnit'
import ivaloAd from '../../../shared/ads/advertisers/ivalo'
import kultaCenterAd from '../../../shared/ads/advertisers/kultaCenter'
import { trackAffiliateClick } from '../lib/analytics'
import { COPY } from '../locales/copy'
import EcosystemMenu from '../../../shared/EcosystemMenu'
import HomeAdSlots, { MainPartnerBanner } from '../../../shared/HomeAdSlots'
import { AD_SLOTS } from '../data/adSlots'

const META: Record<Lang, { title: string; description: string }> = {
  en: {
    title: 'LaplandGifts — Authentic Arctic gifts & crafts from Finnish Lapland',
    description: 'Handcrafted Lapland gifts, branded merch and Arctic experiences from Finnish Lapland. Shop opening soon: join the list and browse the gift guides.',
  },
  fi: {
    title: 'LaplandGifts — Aitoja Lapin lahjoja ja käsitöitä',
    description: 'Käsintehtyjä Lapin lahjoja, brändituotteita ja arktisia elämyksiä Suomen Lapista. Kauppa avataan pian: liity listalle ja selaa lahjaoppaita.',
  },
  de: {
    title: 'LaplandGifts — Echte arktische Geschenke aus Finnisch-Lappland',
    description: 'Handgefertigte Lappland-Geschenke, Markenartikel und arktische Erlebnisse aus Finnisch-Lappland. Shop öffnet bald: jetzt eintragen und Geschenkideen entdecken.',
  },
  ja: {
    title: 'LaplandGifts — フィンランド・ラップランド発の本物の北極ギフト',
    description: '手作りのラップランド・ギフト、ブランドグッズ、北極体験。フィンランド・ラップランド発のショップが近日オープン。登録してギフトガイドをご覧ください。',
  },
  es: {
    title: 'LaplandGifts — Regalos y artesanía árticos de la Laponia finlandesa',
    description: 'Regalos de Laponia hechos a mano, productos de marca y experiencias árticas de la Laponia finlandesa. La tienda abre pronto: únase a la lista y explore las guías de regalos.',
  },
  'pt-BR': {
    title: 'LaplandGifts — Presentes e artesanato árticos da Lapônia finlandesa',
    description: 'Presentes da Lapônia feitos à mão, produtos de marca e experiências árticas da Lapônia finlandesa. A loja abre em breve: entre na lista e veja os guias de presentes.',
  },
  'zh-CN': {
    title: 'LaplandGifts — 来自芬兰拉普兰的正宗北极礼物与手工艺品',
    description: '手工制作的拉普兰礼物、品牌商品与北极体验，来自芬兰拉普兰。商店即将开业：加入名单，抢先浏览礼物指南。',
  },
  ko: {
    title: 'LaplandGifts — 핀란드 라플란드의 정통 북극 선물·공예품',
    description: '핀란드 라플란드의 수제 선물, 브랜드 굿즈, 북극 체험. 숍 오픈 예정: 지금 명단에 등록하고 선물 가이드를 살펴보십시오.',
  },
  fr: {
    title: 'LaplandGifts — Cadeaux et artisanat arctiques de Laponie finlandaise',
    description: 'Cadeaux de Laponie faits main, produits de marque et expériences arctiques de Laponie finlandaise. Boutique bientôt ouverte : inscrivez-vous et découvrez les guides cadeaux.',
  },
  it: {
    title: 'LaplandGifts — Regali e artigianato artici della Lapponia finlandese',
    description: 'Regali della Lapponia fatti a mano, prodotti di marca ed esperienze artiche dalla Lapponia finlandese. Il negozio apre presto: iscriviti e sfoglia le guide regalo.',
  },
  nl: {
    title: 'LaplandGifts — Authentieke Arctische geschenken uit Fins Lapland',
    description: 'Handgemaakte Lapland-geschenken, merchandise en Arctische belevenissen uit Fins Lapland. Winkel opent binnenkort: schrijf u in en bekijk de cadeaugidsen.',
  },
}

export default function Home() {
  const lang = useLang()
  const meta = META[lang]
  const location = useLocation()
  const navigate = useNavigate()
  const t = COPY[lang].nav

  type LangCode = 'en' | 'fi' | 'de' | 'ja' | 'es' | 'pt-BR' | 'zh-CN' | 'ko' | 'fr' | 'it' | 'nl'
  const URL_PREFIX_OF: Record<LangCode, string> = {
    en: '', fi: 'fi', de: 'de', ja: 'ja', es: 'es', 'pt-BR': 'br', 'zh-CN': 'cn',
    ko: 'kr', fr: 'fr', it: 'it', nl: 'nl',
  }
  const ALL_LANGS: { code: LangCode; label: string; native: string }[] = [
    { code: 'en', label: 'EN', native: 'English' },
    { code: 'fi', label: 'FI', native: 'Suomi' },
    { code: 'de', label: 'DE', native: 'Deutsch' },
    { code: 'ja', label: 'JA', native: '日本語' },
    { code: 'es', label: 'ES', native: 'Español' },
    { code: 'pt-BR', label: 'BR', native: 'Português' },
    { code: 'zh-CN', label: 'CN', native: '简体中文' },
    { code: 'ko', label: 'KR', native: '한국어' },
    { code: 'fr', label: 'FR', native: 'Français' },
    { code: 'it', label: 'IT', native: 'Italiano' },
    { code: 'nl', label: 'NL', native: 'Nederlands' },
  ]

  const switchTo = (target: LangCode) => {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem('lv_locale_choice', target)
    }
    const bare = stripLocale(location.pathname)
    const prefix = URL_PREFIX_OF[target]
    if (!prefix) {
      navigate(bare)
    } else {
      navigate(bare === '/' ? `/${prefix}` : `/${prefix}${bare}`)
    }
  }

  return (
    <>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href="https://laplandgifts.com/" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />

    <div className="min-h-screen bg-white">
      <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-5 shrink-0">
            <EcosystemMenu lang={lang} currentDomain="laplandgifts.com" variant="light" />
            <Logo />
          </div>
          <nav className="hidden lg:flex items-center gap-6">
            <a href="#categories" className="text-gray hover:text-amber transition-colors font-medium">{t.categories}</a>
            <a href="#products" className="text-gray hover:text-amber transition-colors font-medium">{t.products}</a>
            <a href="#guides" className="text-gray hover:text-amber transition-colors font-medium">{t.guides}</a>
            <a href="#shipping" className="text-gray hover:text-amber transition-colors font-medium">{t.promises}</a>
          </nav>
          {/* Language switcher — one clean native dropdown on all viewports
              (was 11 inline buttons on desktop, "miten sattuu"; Vesa 2026-07-03). */}
          <div className="relative inline-flex items-center">
            {/* Suljettu natiivinimi-select levensi headerin 468px:aan 375px-näytöllä →
                mobiilissa suljettu valitsin näyttää lyhyen koodin, sm+ natiivin nimen. */}
            <select
              value={lang}
              onChange={(e) => switchTo(e.target.value as LangCode)}
              aria-label="Language"
              className="sm:hidden appearance-none bg-transparent border border-gray/30 rounded px-2 py-1 pr-6 text-xs font-semibold uppercase text-gray"
            >
              {ALL_LANGS.map((l) => (
                <option key={l.code} value={l.code}>
                  {l.label}
                </option>
              ))}
            </select>
            <select
              value={lang}
              onChange={(e) => switchTo(e.target.value as LangCode)}
              aria-label="Language"
              className="hidden sm:block appearance-none bg-transparent border border-gray/30 rounded px-2 py-1 pr-6 text-xs font-semibold uppercase text-gray"
            >
              {ALL_LANGS.map((l) => (
                <option key={l.code} value={l.code}>
                  {l.native}
                </option>
              ))}
            </select>
            <ChevronDown className="w-3 h-3 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray" aria-hidden="true" />
          </div>
        </div>
      </header>

      <main>
        <Hero />
        {/* PÄÄKUMPPANI — kompakti banneri heti heron alla (LV Media, jaettu malli).
            Sivu on vaalea → surface="light". Tyhjänä house-ad → LV Media -portaali. */}
        <MainPartnerBanner config={AD_SLOTS} locale={lang} surface="light" />
        <ProductCategories />
        {/* KAKKOSPÄÄKUMPPANI + 6 kohdekohtaista premium-paikkaa — heti
            ensimmäisen sisältöosion jälkeen (LV Media, jaettu malli). */}
        <HomeAdSlots config={AD_SLOTS} locale={lang} surface="light" />
        <ValueProp />
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
        <ShippingInfo />
        <FAQ />
        <RelatedSites />
      </main>

      <Footer />
    </div>
    </>
  )
}
