import { useLang } from '../i18n/useLang'
import { COPY } from '../locales/copy'

const IMAGES = [
  '/images/cat-pod-merch.webp',
  '/images/cat-artisan-crafts.webp',
  '/images/cat-gift-experiences.webp',
]

function ProductCategories() {
  const t = COPY[useLang()].categories
  return (
    <section id="categories" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-heading text-4xl md:text-5xl text-gray mb-3">{t.h2}</h2>
          <p className="text-gray/60 text-lg max-w-2xl mx-auto">
            {t.sub}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {t.items.map((cat, i) => (
            <div
              key={cat.name}
              className="group relative rounded-2xl overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-amber/10 transition-all hover:-translate-y-1"
            >
              <img
                src={IMAGES[i]}
                alt={cat.name}
                className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-night/30 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="bg-amber text-white text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wider">
                  {cat.tag}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-heading text-3xl text-white mb-2">{cat.name}</h3>
                <p className="text-white/70 leading-relaxed text-sm">{cat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductCategories
