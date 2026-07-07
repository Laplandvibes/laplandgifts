import { ArrowUpRight, Compass } from 'lucide-react'
import { useLang } from '../i18n/useLang'
import { COPY } from '../locales/copy'

/**
 * Contextual sibling links into the LaplandVibes network. These are editorial
 * cross-links (not affiliate CTAs), so they use rel="noopener" only — never the
 * sponsored/nofollow rel reserved for affiliate redirects.
 */
function RelatedSites() {
  const t = COPY[useLang()].related
  return (
    <section id="related" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Compass className="w-5 h-5 text-amber" />
            <span className="text-amber font-medium uppercase tracking-widest text-sm">{t.kicker}</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl text-gray mb-3">{t.h2}</h2>
          <p className="text-gray/60 text-lg max-w-2xl mx-auto">{t.sub}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener"
              className="group flex flex-col p-7 rounded-2xl bg-gradient-to-b from-amber/5 to-transparent border border-gray/10 hover:border-amber/40 transition-colors"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="font-heading text-2xl text-gray group-hover:text-amber transition-colors">
                  {item.label}
                </h3>
                <ArrowUpRight className="w-5 h-5 text-amber shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <p className="text-gray/60 leading-relaxed">{item.blurb}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RelatedSites
