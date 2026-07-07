import { Link } from 'react-router-dom'
import TermsContent from '../shared/Legal/TermsContent'
import Logo from '../components/Logo'
import Footer from '../components/Footer'
import { useLang, useLocalePath, type Lang } from '../i18n/useLang'
import { COPY } from '../locales/copy'

const META: Record<Lang, { title: string; description: string }> = {
  en: {
    title: 'Terms of Service | LaplandGifts',
    description: 'LaplandGifts terms of service — site usage, affiliate disclosure, and shopping terms.',
  },
  fi: {
    title: 'Käyttöehdot | LaplandGifts',
    description: 'LaplandGiftsin käyttöehdot — sivuston käyttö, affiliate-ilmoitus ja ostosehdot.',
  },
  de: {
    title: 'Nutzungsbedingungen | LaplandGifts',
    description: 'Nutzungsbedingungen von LaplandGifts — Nutzung der Website, Affiliate-Hinweis und Einkaufsbedingungen.',
  },
  ja: {
    title: '利用規約 | LaplandGifts',
    description: 'LaplandGiftsの利用規約 — サイトの利用、アフィリエイト開示、ショッピング条件について。',
  },
  es: {
    title: 'Términos de servicio | LaplandGifts',
    description: 'Términos de servicio de LaplandGifts — uso del sitio, divulgación de afiliados y condiciones de compra.',
  },
  'pt-BR': {
    title: 'Termos de serviço | LaplandGifts',
    description: 'Termos de serviço do LaplandGifts — uso do site, divulgação de afiliados e condições de compra.',
  },
  'zh-CN': {
    title: '服务条款 | LaplandGifts',
    description: 'LaplandGifts 服务条款 — 网站使用、联盟披露与购物条款。',
  },
  ko: {
    title: '이용약관 | LaplandGifts',
    description: 'LaplandGifts 이용약관 — 사이트 이용, 제휴 고지, 쇼핑 약관 안내.',
  },
  fr: {
    title: "Conditions d'utilisation | LaplandGifts",
    description: "Conditions d'utilisation de LaplandGifts — utilisation du site, divulgation d'affiliation et conditions d'achat.",
  },
  it: {
    title: 'Termini di servizio | LaplandGifts',
    description: 'Termini di servizio di LaplandGifts — utilizzo del sito, divulgazione di affiliazione e condizioni di acquisto.',
  },
  nl: {
    title: 'Servicevoorwaarden | LaplandGifts',
    description: 'Servicevoorwaarden van LaplandGifts — gebruik van de site, affiliate-vermelding en winkelvoorwaarden.',
  },
}

export default function Terms() {
  const lang = useLang()
  const to = useLocalePath()
  const t = COPY[lang].legal
  const meta = META[lang]
  return (
    <>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href="https://laplandgifts.com/terms/" />

      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Logo />
          <Link to={to('/')} className="text-gray hover:text-amber transition-colors font-medium text-sm">{t.backHome}</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-16">
        <TermsContent siteName="LaplandGifts" siteUrl="laplandgifts.com" lang={lang} />
      </main>

      <Footer />
    </>
  )
}
