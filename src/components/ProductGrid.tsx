import { Bell } from 'lucide-react'
import { useLang } from '../i18n/useLang'
import { COPY } from '../locales/copy'

const IMAGES = [
  '/images/prod-mug-aurora.webp',
  '/images/prod-mug-reindeer.webp',
  '/images/prod-tshirt-aurora.webp',
  '/images/prod-hoodie-arctic.webp',
  '/images/prod-poster-landscape.webp',
  '/images/prod-beanie-wool.webp',
  '/images/prod-puukko-knife.webp',
  '/images/prod-kuksa-cup.webp',
  '/images/prod-sami-bracelet.webp',
  '/images/prod-berry-jam-set.webp',
  '/images/prod-antler-candle.webp',
  '/images/prod-wool-blanket.webp',
]

function ProductGrid() {
  const t = COPY[useLang()].productGrid
  // ItemList JSON-LD mirroring the rendered grid (active-locale product names).
  // Items point to the #products section anchor — there are no per-item product
  // pages, and prices are TBD, so no Product/Offer nodes are emitted.
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: t.h2,
    numberOfItems: t.products.length,
    itemListElement: t.products.map((product, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: product.name,
      url: 'https://laplandgifts.com/#products',
    })),
  }
  return (
    <section id="products" className="py-20 bg-gradient-to-b from-white to-white/50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-heading text-4xl md:text-5xl text-gray mb-3">{t.h2}</h2>
          <p className="text-gray/60 text-lg max-w-2xl mx-auto">
            {t.sub}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {t.products.map((product, i) => {
            const catLabel = product.category === 'merch' ? t.catMerch : t.catArtisan
            return (
              <div
                key={product.name}
                className="group bg-white rounded-2xl border border-gray/10 overflow-hidden hover:shadow-xl hover:shadow-amber/10 transition-all hover:-translate-y-1"
              >
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={IMAGES[i]}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <button
                    className="absolute top-3 right-3 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-pink/10 hover:text-pink transition-colors text-gray/40"
                    aria-label={t.notifyAria(product.name)}
                  >
                    <Bell className="w-5 h-5" />
                  </button>
                  <span className="absolute top-3 left-3 bg-night/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full capitalize">
                    {catLabel}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-medium text-gray text-lg leading-tight mb-2 group-hover:text-amber transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-lg text-amber/60">{t.priceTbd}</span>
                    <button className="text-sm font-medium text-gray/50 hover:text-amber transition-colors flex items-center gap-1">
                      <Bell className="w-4 h-4" />
                      {t.notifyMe}
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProductGrid
