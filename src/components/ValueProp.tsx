import { Plane, Package, Home } from 'lucide-react'
import { useLang } from '../i18n/useLang'
import { COPY } from '../locales/copy'

const ICONS = [Plane, Package, Home]

function ValueProp() {
  const t = COPY[useLang()].valueProp
  return (
    <section className="py-16 bg-night">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl text-white text-center mb-3">
          {t.h2}
        </h2>
        <p className="text-white/50 text-center mb-12 max-w-2xl mx-auto">
          {t.sub}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.steps.map((s, i) => {
            const Icon = ICONS[i]
            return (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-amber/20 flex items-center justify-center mx-auto mb-4 relative">
                  <Icon className="w-7 h-7 text-amber" />
                  <span className="absolute -top-2 -right-2 w-7 h-7 bg-amber text-night text-sm font-bold rounded-full flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-heading text-xl text-white mb-2">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{s.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ValueProp
