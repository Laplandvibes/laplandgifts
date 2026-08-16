import { useState } from 'react'
import { Mail, ArrowRight, Download, BookOpen, Map } from 'lucide-react'
import { trackNewsletterSignup } from '../lib/analytics'
import { Link } from 'react-router-dom'
import { useLang, useLocalePath } from '../i18n/useLang'
import type { Lang } from '../i18n/useLang'
import { COPY } from '../locales/copy'
import { NEWSLETTER_PRIVACY } from '../locales/complianceCopy'
import FounderByline from '../../../shared/FounderByline';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

/**
 * Suostumuksen ja ikävahvistuksen teksti. Sama teksti menee `consentText`-
 * kenttänä palvelimelle, eli tietokantaan tallentuu se sanamuoto jonka
 * tilaaja tosiasiassa näki — ei kovakoodattu `marketing_consent: true`.
 */
const NEWSLETTER_CONSENT: Record<Lang, { consent: string; privacy: string }> = {
  en: {
    consent:
      'Yes, send the LaplandVibes newsletter (travel tips, seasonal updates and offers) to this email address. I confirm I am 18 or over.',
    privacy: 'Privacy Policy',
  },
  fi: {
    consent:
      'LaplandVibes saa lähettää minulle uutiskirjettä (matkailuvinkkejä, sesonkitietoa ja tarjouksia) antamaani sähköpostiosoitteeseen. Olen täyttänyt 18 vuotta.',
    privacy: 'Tietosuojaseloste',
  },
  de: {
    consent:
      'Ja, LaplandVibes darf mir den Newsletter mit Reisetipps, Saisoninfos und Angeboten an diese E-Mail-Adresse senden. Ich bin mindestens 18 Jahre alt.',
    privacy: 'Datenschutzerklärung',
  },
  ja: {
    consent:
      '入力したメールアドレス宛に、LaplandVibesがニュースレター（旅のヒント、シーズン情報、キャンペーン情報）を送ることに同意します。私は18歳以上です。',
    privacy: 'プライバシーポリシー',
  },
  es: {
    consent:
      'Acepto recibir en mi correo el boletín de LaplandVibes (consejos de viaje, información de temporada y ofertas) y confirmo que tengo al menos 18 años.',
    privacy: 'Política de privacidad',
  },
  'pt-BR': {
    consent:
      'Aceito receber a newsletter da LaplandVibes no e-mail informado, com dicas de viagem, informações de temporada e ofertas. Tenho 18 anos ou mais.',
    privacy: 'Política de Privacidade',
  },
  'zh-CN': {
    consent:
      '我同意 LaplandVibes 向我填写的邮箱发送订阅邮件，内容包括拉普兰旅行建议、季节资讯和优惠信息，并确认本人已年满18周岁。',
    privacy: '隐私政策',
  },
  ko: {
    consent:
      '입력한 이메일 주소로 LaplandVibes가 보내는 여행 팁·시즌 정보·프로모션 소식 뉴스레터 수신에 동의하며, 만 18세 이상임을 확인합니다.',
    privacy: '개인정보처리방침',
  },
  fr: {
    consent:
      "J'accepte de recevoir la newsletter LaplandVibes (conseils voyage, infos saisonnières, offres) à cette adresse e-mail et je confirme avoir 18 ans ou plus.",
    privacy: 'Politique de confidentialité',
  },
  it: {
    consent:
      "Sì, desidero ricevere la newsletter di LaplandVibes (consigli di viaggio, novità stagionali e offerte) all'indirizzo indicato. Ho almeno 18 anni.",
    privacy: 'Informativa sulla privacy',
  },
  nl: {
    consent:
      'Ja, LaplandVibes mag de nieuwsbrief met reistips, seizoensinfo en aanbiedingen naar dit e-mailadres sturen. Ik ben 18 jaar of ouder.',
    privacy: 'Privacyverklaring',
  },
  sv: {
    consent:
      'Ja, jag vill ha nyhetsbrevet från LaplandVibes med restips, säsongsinfo och erbjudanden till min e-postadress. Jag är minst 18 år.',
    privacy: 'Integritetspolicy',
  },
}

function Newsletter() {
  const lang = useLang()
  const to = useLocalePath()
  const t = COPY[lang].newsletter
  const c = NEWSLETTER_CONSENT[lang]
  const [email, setEmail] = useState('')
  const [consented, setConsented] = useState(false)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email || !consented) return

    setStatus('loading')
    try {
      const res = await fetch(`${SUPABASE_URL}/functions/v1/send-welcome-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          email,
          source: 'laplandgifts-website',
          consent: true,
          ageConfirmed: true,
          consentText: c.consent,
        }),
      })
      if (res.ok) {
        setStatus('success')
        setEmail('')
        trackNewsletterSignup('laplandgifts-guides')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="newsletter" className="py-20 bg-gradient-to-br from-amber/10 via-pink/5 to-amber/10">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <span className="text-amber font-medium uppercase tracking-widest text-sm">{t.kicker}</span>
        <h2 className="font-heading text-5xl md:text-6xl tracking-wide text-gray mt-2 mb-4">
          {t.h2}
        </h2>
        <p className="text-gray/60 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          {t.body}
        </p>

        {status === 'success' ? (
          <div className="bg-white rounded-2xl border border-gray/10 p-8 shadow-xl shadow-amber/5">
            <p className="text-gray font-medium text-lg mb-6">{t.successHeading}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/guides/The-Secret-Craft-Guide-2026.pdf"
                download
                className="inline-flex items-center justify-center gap-2 bg-night text-white px-6 py-3 rounded-full font-medium hover:bg-night/90 transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                {t.btnSecret}
                <Download className="w-4 h-4" />
              </a>
              <a
                href="/guides/7-Days-of-Lapland-Magic-2026a.pdf"
                download
                className="inline-flex items-center justify-center gap-2 bg-amber text-white px-6 py-3 rounded-full font-medium hover:bg-amber/90 transition-colors"
              >
                <Map className="w-4 h-4" />
                {t.btnSeven}
                <Download className="w-4 h-4" />
              </a>
            </div>
            <p className="text-gray/40 text-sm mt-6">{t.successFootnote}</p>
          </div>
        ) : (
          <><FounderByline tone="light" />
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray/30" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.placeholder}
                  aria-label={t.placeholder}
                  required
                  className="w-full pl-12 pr-4 py-4 rounded-full border border-gray/20 bg-white text-gray focus:outline-none focus:border-amber focus:ring-2 focus:ring-amber/20 transition-colors"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex items-center justify-center gap-2 bg-amber text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-amber/90 transition-colors shadow-lg shadow-amber/25 disabled:opacity-50 whitespace-nowrap"
              >
                {status === 'loading' ? t.submitting : t.submit}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            {/* Suostumus kysytään erikseen eikä johdeta tilaamisesta:
                esivalittu ruutu ei ole GDPR:n tarkoittama suostumus. */}
            <label className="flex items-start gap-2.5 text-left text-xs text-gray/60 leading-relaxed cursor-pointer">
              <input
                type="checkbox"
                checked={consented}
                onChange={(e) => setConsented(e.target.checked)}
                required
                className="mt-0.5 w-4 h-4 shrink-0 rounded border-gray/30 accent-amber focus:outline-none focus:ring-2 focus:ring-amber/20"
              />
              <span>
                {c.consent}{' '}
                <a
                  href={to('/privacy')}
                  target="_blank"
                  rel="noopener"
                  className="underline hover:text-amber"
                >
                  {c.privacy}
                </a>
              </span>
            </label>
          </form></>
        )}

        {status === 'error' && (
          <p className="text-red-500 mt-3 text-sm">{t.errorMsg}</p>
        )}

        {/* Tietosuoja-asetuksen 13 art.: käsittelystä on kerrottava
            keruuhetkellä, ei vasta alatunnisteen linkin takana. */}
        <p className="text-gray/40 text-xs mt-4">
          {t.spamNote}{' '}
          {NEWSLETTER_PRIVACY[lang].lead}{' '}
          <Link to={to('/privacy')} className="underline hover:text-amber">
            {NEWSLETTER_PRIVACY[lang].link}
          </Link>
        </p>
      </div>
    </section>
  )
}

export default Newsletter
