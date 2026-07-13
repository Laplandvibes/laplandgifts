import { Link } from 'react-router-dom'
import CookieContent from '../shared/Legal/CookieContent'
import Logo from '../components/Logo'
import Footer from '../components/Footer'
import { useLang, useLocalePath, type Lang } from '../i18n/useLang'
import { COPY } from '../locales/copy'

const META: Record<Lang, { title: string; description: string }> = {
  en: {
    title: 'Cookie Policy | LaplandGifts',
    description: 'LaplandGifts cookie policy — analytics consent, affiliate tracking, and how to manage your preferences.',
  },
  fi: {
    title: 'Evästekäytäntö | LaplandGifts',
    description: 'LaplandGiftsin evästekäytäntö — analytiikan suostumus, affiliate-seuranta ja asetusten hallinta.',
  },
  de: {
    title: 'Cookie-Richtlinie | LaplandGifts',
    description: 'Cookie-Richtlinie von LaplandGifts — Analytics-Einwilligung, Affiliate-Tracking und Verwaltung Ihrer Einstellungen.',
  },
  ja: {
    title: 'クッキーポリシー | LaplandGifts',
    description: 'LaplandGiftsのクッキーポリシー — アナリティクスへの同意、アフィリエイト計測、設定の管理方法について。',
  },
  es: {
    title: 'Política de cookies | LaplandGifts',
    description: 'Política de cookies de LaplandGifts — consentimiento de analítica, seguimiento de afiliados y gestión de sus preferencias.',
  },
  'pt-BR': {
    title: 'Política de cookies | LaplandGifts',
    description: 'Política de cookies do LaplandGifts — consentimento de análises, rastreamento de afiliados e gerenciamento de preferências.',
  },
  'zh-CN': {
    title: 'Cookie 政策 | LaplandGifts',
    description: 'LaplandGifts Cookie 政策 — 分析同意、联盟跟踪以及如何管理您的偏好设置。',
  },
  ko: {
    title: '쿠키 정책 | LaplandGifts',
    description: 'LaplandGifts 쿠키 정책 — 분석 동의, 제휴 트래킹, 환경설정 관리 방법 안내.',
  },
  fr: {
    title: 'Politique relative aux cookies | LaplandGifts',
    description: "Politique relative aux cookies de LaplandGifts — consentement analytique, suivi d'affiliation et gestion de vos préférences.",
  },
  it: {
    title: 'Informativa sui cookie | LaplandGifts',
    description: 'Informativa sui cookie di LaplandGifts — consenso per le analisi, tracciamento di affiliazione e gestione delle preferenze.',
  },
  nl: {
    title: 'Cookiebeleid | LaplandGifts',
    description: 'Cookiebeleid van LaplandGifts — analytics-toestemming, affiliate-tracking en het beheren van uw voorkeuren.',
  },
  sv: {
    title: 'Cookiepolicy | LaplandGifts',
    description: 'LaplandGifts cookiepolicy — samtycke till analys, affiliate-spårning och hur du hanterar dina inställningar.',
  },
}

export default function CookiePolicy() {
  const lang = useLang()
  const to = useLocalePath()
  const t = COPY[lang].legal
  const meta = META[lang]
  return (
    <>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href="https://laplandgifts.com/cookie-policy/" />

      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Logo />
          <Link to={to('/')} className="text-gray hover:text-amber transition-colors font-medium text-sm">{t.backHome}</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-16">
        <CookieContent siteName="LaplandGifts" siteId="laplandgifts" lang={lang} />
      </main>

      <Footer />
    </>
  )
}
