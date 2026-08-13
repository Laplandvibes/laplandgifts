import { Suspense, lazy } from 'react'
import { useLang, useLocalePath } from '../i18n/useLang'
import { COPY } from '../locales/copy'
import { footerDict } from '../locales/footerDict'
import { AI_NOTE } from './AiDisclosure'

/**
 * 🔴 Jaettu ekosysteemifooter ladataan laiskasti.
 *
 * `src/shared/Footer.tsx` on yli tuhat riviä ja kääntyy 86 kt:n (gzip 31 kt)
 * palaseksi. Se oli jokaisen sivun moduuliriippuvuus, eli selaimen oli
 * ladattava ja suoritettava se ENNEN kuin React ehti piirtää mitään — myös
 * heron, joka on etusivun LCP-elementti. Footer on aina näytön alapuolella,
 * joten sen ei tarvitse olla ensimmäisessä piirrossa.
 *
 * Suspensen fallback varaa korkeuden eikä ole `null`: ilman varattua tilaa
 * footerin saapuminen olisi tuottanut asettelusiirtymän. Sisältö ei katoa
 * hakukoneelta, koska tämä sivusto ei prerenderöi markupia lainkaan (kuori
 * sisältää vain metat) — sekä laiska että ei-laiska footer syntyvät samalla
 * tavalla vasta selaimessa.
 */
const SharedFooter = lazy(() => import('../shared/Footer'))

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
    <Suspense fallback={<div className="h-[36rem] bg-finland" aria-hidden="true" />}>
      <SharedFooter
        pillarLinks={FOOTER_PILLARS}
        /* EU AI Act art. 50: the site-wide half of the AI transparency
           marking. It rides on `editorialNote` so it reaches every page
           without editing the shared ecosystem Footer, which has to stay
           identical across the network. */
        editorialNote={`${t.editorialNote} · ${AI_NOTE[lang]}`}
        extraLegalLinks={FOOTER_EXTRA_LEGAL}
        dict={footerDict(lang)}
      />
    </Suspense>
  )
}
