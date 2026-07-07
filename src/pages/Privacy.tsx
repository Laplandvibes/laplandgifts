import { Link } from 'react-router-dom'
import PrivacyContent from '../shared/Legal/PrivacyContent'
import Logo from '../components/Logo'
import Footer from '../components/Footer'
import { useLang, useLocalePath, type Lang } from '../i18n/useLang'
import { COPY } from '../locales/copy'

const META: Record<Lang, { title: string; description: string }> = {
  en: {
    title: 'Privacy Policy | LaplandGifts',
    description: 'How LaplandGifts (Lapeso Oy) handles your data: Google Analytics 4 with Consent Mode v2, newsletter via Resend/Supabase, and affiliate tracking — all explained in plain English.',
  },
  fi: {
    title: 'Tietosuojaseloste | LaplandGifts',
    description: 'Näin LaplandGifts (Lapeso Oy) käsittelee tietojasi: Google Analytics 4 ja Consent Mode v2, uutiskirje Resendin/Supabasen kautta sekä affiliate-seuranta — selkeästi selitettynä.',
  },
  de: {
    title: 'Datenschutzerklärung | LaplandGifts',
    description: 'So verarbeitet LaplandGifts (Lapeso Oy) Ihre Daten: Google Analytics 4 mit Consent Mode v2, Newsletter über Resend/Supabase und Affiliate-Tracking — verständlich erklärt.',
  },
  ja: {
    title: 'プライバシーポリシー | LaplandGifts',
    description: 'LaplandGifts（Lapeso Oy）のデータ取り扱い：Consent Mode v2対応のGoogle Analytics 4、Resend/Supabase経由のニュースレター、アフィリエイト計測 — わかりやすく解説。',
  },
  es: {
    title: 'Política de privacidad | LaplandGifts',
    description: 'Cómo LaplandGifts (Lapeso Oy) trata sus datos: Google Analytics 4 con Consent Mode v2, newsletter vía Resend/Supabase y seguimiento de afiliados — explicado con claridad.',
  },
  'pt-BR': {
    title: 'Política de privacidade | LaplandGifts',
    description: 'Como o LaplandGifts (Lapeso Oy) trata seus dados: Google Analytics 4 com Consent Mode v2, newsletter via Resend/Supabase e rastreamento de afiliados — explicado com clareza.',
  },
  'zh-CN': {
    title: '隐私政策 | LaplandGifts',
    description: 'LaplandGifts（Lapeso Oy）如何处理您的数据：Google Analytics 4 与 Consent Mode v2、通过 Resend/Supabase 的订阅邮件以及联盟跟踪 — 清晰说明。',
  },
  ko: {
    title: '개인정보 처리방침 | LaplandGifts',
    description: 'LaplandGifts(Lapeso Oy)의 데이터 처리 방식: Consent Mode v2 기반 Google Analytics 4, Resend/Supabase 뉴스레터, 제휴 트래킹 — 알기 쉽게 설명합니다.',
  },
  fr: {
    title: 'Politique de confidentialité | LaplandGifts',
    description: "Comment LaplandGifts (Lapeso Oy) traite vos données : Google Analytics 4 avec Consent Mode v2, newsletter via Resend/Supabase et suivi d'affiliation — expliqué clairement.",
  },
  it: {
    title: 'Informativa sulla privacy | LaplandGifts',
    description: 'Come LaplandGifts (Lapeso Oy) tratta i tuoi dati: Google Analytics 4 con Consent Mode v2, newsletter via Resend/Supabase e tracciamento di affiliazione — spiegato con chiarezza.',
  },
  nl: {
    title: 'Privacybeleid | LaplandGifts',
    description: 'Hoe LaplandGifts (Lapeso Oy) uw gegevens verwerkt: Google Analytics 4 met Consent Mode v2, nieuwsbrief via Resend/Supabase en affiliate-tracking — helder uitgelegd.',
  },
}

export default function Privacy() {
  const lang = useLang()
  const to = useLocalePath()
  const t = COPY[lang].legal
  const meta = META[lang]
  return (
    <>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href="https://laplandgifts.com/privacy/" />
      <meta name="robots" content="index, follow" />

      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Logo />
          <Link to={to('/')} className="text-gray hover:text-amber transition-colors font-medium text-sm">{t.backHome}</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-16">
        <PrivacyContent siteName="LaplandGifts" lang={lang} />
      </main>

      <Footer />
    </>
  )
}
