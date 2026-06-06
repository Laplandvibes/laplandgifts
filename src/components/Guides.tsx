import { BookOpen, Map, ArrowDown, FileText } from 'lucide-react'
import { useLang } from '../i18n/useLang'
import { COPY } from '../locales/copy'

const ICONS = [BookOpen, Map]

function Guides() {
  const t = COPY[useLang()].guides
  return (
    <section id="guides" className="py-20 bg-night">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <FileText className="w-5 h-5 text-amber" />
            <span className="text-amber font-medium uppercase tracking-widest text-sm">{t.kicker}</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl text-white mb-3">{t.h2}</h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            {t.sub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {t.guides.map((guide, i) => {
            const Icon = ICONS[i]
            return (
              <div
                key={guide.title}
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-amber/30 transition-all"
              >
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-amber" />
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl text-white">{guide.title}</h3>
                      <p className="text-white/40 text-sm">{t.pagesPdf(guide.pages)}</p>
                    </div>
                  </div>

                  <p className="text-amber text-sm font-medium mb-3">{guide.subtitle}</p>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">{guide.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {guide.topics.map((topic) => (
                      <span
                        key={topic}
                        className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/50 border border-white/10"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <a
            href="#newsletter"
            className="inline-flex flex-col items-center gap-2 text-amber/60 hover:text-amber transition-colors"
          >
            <span className="text-sm font-medium">{t.cta}</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Guides
