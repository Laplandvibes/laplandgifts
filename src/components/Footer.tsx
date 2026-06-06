import SharedFooter from '../shared/Footer'
import { useLang, useLocalePath } from '../i18n/useLang'
import { COPY, footerDict } from '../locales/copy'

export default function Footer() {
  const lang = useLang()
  const to = useLocalePath()
  const t = COPY[lang].footer

  const FOOTER_PILLARS = t.pillars.map((p) =>
    p.href.startsWith('http') || p.href.startsWith('/#')
      ? p
      : { name: p.name, href: to(p.href) }
  )

  const FOOTER_EXTRA_LEGAL = [
    { to: to('/unsubscribe'), label: t.extraLegalUnsub },
  ]

  return (
    <SharedFooter
      pillarLinks={FOOTER_PILLARS}
      editorialNote={t.editorialNote}
      extraLegalLinks={FOOTER_EXTRA_LEGAL}
      dict={footerDict(lang)}
    />
  )
}
