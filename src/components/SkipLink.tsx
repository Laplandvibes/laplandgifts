import { useLang } from '../i18n/useLang'
import { SKIP_TO_CONTENT } from '../locales/complianceCopy'

/**
 * "Ohita navigaatio" -linkki (WCAG 2.4.1 Bypass Blocks, taso A).
 *
 * Näkymätön kunnes se saa näppäimistöfokuksen: `sr-only` vie sen ruudulta
 * mutta jättää ruudunlukijalle ja tabulaattorille, `focus:not-sr-only`
 * tuo sen näkyviin ensimmäisellä Tab-painalluksella.
 *
 * 🔴 Kohteen on oltava `tabIndex={-1}`, muuten selain siirtää fokuksen
 * takaisin dokumentin alkuun eikä hyppy tee mitään ruudunlukijalle: linkki
 * näyttäisi toimivan (sivu vierii) mutta ei toimisi.
 */
export default function SkipLink() {
  const lang = useLang()
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[10000] focus:rounded-full focus:bg-night focus:px-5 focus:py-3 focus:font-semibold focus:text-white focus:outline-none focus:ring-2 focus:ring-amber"
    >
      {SKIP_TO_CONTENT[lang]}
    </a>
  )
}
