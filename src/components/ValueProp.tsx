import { Search, Globe, Store } from 'lucide-react'
import { useLang } from '../i18n/useLang'
import { SHOP_COPY } from '../locales/shopCopy'

/**
 * 🔴 Teksti tulee SHOP_COPYsta, ei ChromeCopysta. ChromeCopyn `valueProp`
 * kuvaa kauppaa jota meillä ei ole: "Näin LaplandGifts toimii kaupan
 * avauduttua", "Lahjat pakataan huolella ja lähetetään suoraan suomalaisilta
 * käsityöläisiltä", "me hoidamme loput". Me emme pakkaa emmekä lähetä mitään.
 * Sama syy kuin heron ja kategoriaotsikoiden siirrolle.
 *
 * Ikonit vaihtuivat tekstin mukana: lentokone ja paketti kuvasivat kuljetusta,
 * jota me emme hoida.
 */
const ICONS = [Search, Globe, Store]

function ValueProp() {
  const t = SHOP_COPY[useLang()].home.valueProp
  return (
    <section className="py-16 bg-sand-deep">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="font-heading text-4xl md:text-5xl tracking-wide text-gray text-center mb-3">
          {t.h2}
        </h2>
        <p className="text-muted text-center mb-12 max-w-2xl mx-auto">
          {t.sub}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.steps.map((s, i) => {
            const Icon = ICONS[i]
            return (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-amber/10 flex items-center justify-center mx-auto mb-4 relative">
                  <Icon className="w-7 h-7 text-amber" />
                  <span className="absolute -top-2 -right-2 w-7 h-7 bg-amber text-white text-sm font-bold rounded-full flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-heading text-2xl tracking-wide text-gray mb-2">{s.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{s.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ValueProp
