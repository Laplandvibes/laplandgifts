import { Truck, Shield, PackageCheck, Heart } from 'lucide-react'
import { useLang } from '../i18n/useLang'
import { COPY } from '../locales/copy'

const ICONS = [Truck, Shield, PackageCheck, Heart]

function ShippingInfo() {
  const t = COPY[useLang()].shipping
  return (
    <section id="shipping" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-heading text-4xl md:text-5xl text-gray mb-3">{t.h2}</h2>
          <p className="text-gray/60 text-lg max-w-2xl mx-auto">
            {t.sub}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.items.map((item, i) => {
            const Icon = ICONS[i]
            return (
              <div
                key={item.title}
                className="text-center p-8 rounded-2xl bg-gradient-to-b from-amber/5 to-transparent border border-gray/5 hover:border-amber/20 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-amber/10 flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-7 h-7 text-amber" />
                </div>
                <h3 className="font-heading text-2xl text-gray mb-2">{item.title}</h3>
                <p className="text-gray/60 leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ShippingInfo
