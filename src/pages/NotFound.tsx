import { useLang, useLocalePath } from '../i18n/useLang'
import { COPY } from '../locales/copy'
import SharedNotFound from '../../../shared/NotFound'

// Thin wrapper around the shared network 404 (Vesa 2026-07-12 migration).
// Title + robots noindex are set by SharedNotFound itself. LaplandGifts is a
// light/cream site (body bg = --color-white) with amber as its real accent
// (80+ amber utility usages vs 4 pink) — variant="light" + amber accentHex.
// Site has no standalone /categories etc. pages yet (single-page "shop
// opening soon" splash), so links point at the Home page's anchor sections.
export default function NotFound() {
  const lang = useLang()
  const to = useLocalePath()
  const t = COPY[lang].nav

  return (
    <SharedNotFound
      lang={lang}
      siteName="LaplandGifts"
      homeHref={to('/')}
      variant="light"
      accentHex="#F59E0B"
      links={[
        { href: `${to('/')}#categories`, label: t.categories },
        { href: `${to('/')}#products`, label: t.products },
        { href: `${to('/')}#guides`, label: t.guides },
      ]}
    />
  )
}
