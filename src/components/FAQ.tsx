import { HelpCircle, Plus, ArrowRight } from 'lucide-react'
import { useLang, type Lang } from '../i18n/useLang'
import { COPY } from '../locales/copy'

/**
 * Source of truth for the FAQ Q&A pairs per locale. Consumed both by the
 * visible <FAQ> section below and by StructuredData.tsx, which emits the
 * matching FAQPage JSON-LD so the rich snippet and the rendered copy never
 * drift apart.
 */
export const FAQ_BY_LANG: Record<Lang, Array<{ q: string; a: string }>> = Object.fromEntries(
  (Object.keys(COPY) as Lang[]).map((l) => [l, COPY[l].faq.items]),
) as Record<Lang, Array<{ q: string; a: string }>>

// Per-question links to the on-page sections (and sister site) that back each
// answer (Vesa 2026-07-07: FAQ answers must point to our own supporting
// content). Labels reuse existing translated copy — no new translation keys.
type FaqLink = { href: string; label: (c: (typeof COPY)[Lang]) => string; external?: boolean }
const FAQ_LINKS: FaqLink[][] = [
  // 1 authentic souvenirs → product categories + craft guide
  [
    { href: '#categories', label: (c) => c.nav.categories },
    { href: '#guides', label: (c) => c.nav.guides },
  ],
  // 2 Sámi duodji ethics → our promises (authorized sellers) + craft guide
  [
    { href: '#shipping', label: (c) => c.nav.promises },
    { href: '#guides', label: (c) => c.nav.guides },
  ],
  // 3 international shipping → promises + products
  [
    { href: '#shipping', label: (c) => c.nav.promises },
    { href: '#products', label: (c) => c.nav.products },
  ],
  // 4 what to bring home from Rovaniemi → categories + gift guide
  [
    { href: '#categories', label: (c) => c.nav.categories },
    { href: '#gift-guide', label: (c) => c.giftGuide.h2 },
  ],
  // 5 reindeer/antler customs → categories + promises
  [
    { href: '#categories', label: (c) => c.nav.categories },
    { href: '#shipping', label: (c) => c.nav.promises },
  ],
  // 6 Christmas order timing → gift guide + sister site
  [
    { href: '#gift-guide', label: (c) => c.giftGuide.h2 },
    { href: 'https://laplandchristmas.com', label: () => 'LaplandChristmas', external: true },
  ],
]

function FAQ() {
  const lang = useLang()
  const t = COPY[lang].faq
  const c = COPY[lang]
  return (
    <section id="faq" className="py-20 bg-night">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <HelpCircle className="w-5 h-5 text-amber" />
            <span className="text-amber font-medium uppercase tracking-widest text-sm">{t.kicker}</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl text-white mb-3">{t.h2}</h2>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">{t.sub}</p>
        </div>

        <div className="space-y-4">
          {t.items.map((item, index) => (
            <details
              key={item.q}
              className="group bg-white/5 rounded-2xl border border-white/10 open:border-amber/30 transition-colors"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-6">
                <h3 className="font-heading text-xl md:text-2xl text-white">{item.q}</h3>
                <Plus className="w-5 h-5 text-amber shrink-0 transition-transform duration-200 group-open:rotate-45" />
              </summary>
              <div className="px-6 pb-6 -mt-1">
                <p className="text-white/80 leading-relaxed">{item.a}</p>
                {(FAQ_LINKS[index] ?? []).length > 0 && (
                  <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4">
                    {FAQ_LINKS[index].map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        {...(l.external ? { rel: 'noopener' } : {})}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-amber hover:text-white transition-colors"
                      >
                        {l.label(c)} <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
