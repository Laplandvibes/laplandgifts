import { Heart, Bell } from 'lucide-react'

const products = [
  { name: 'Aurora Mug', image: '/images/prod-mug-aurora.webp', category: 'merch' },
  { name: 'Reindeer Mug', image: '/images/prod-mug-reindeer.webp', category: 'merch' },
  { name: 'Aurora T-Shirt', image: '/images/prod-tshirt-aurora.webp', category: 'merch' },
  { name: 'Arctic Hoodie', image: '/images/prod-hoodie-arctic.webp', category: 'merch' },
  { name: 'Lapland Poster', image: '/images/prod-poster-landscape.webp', category: 'merch' },
  { name: 'Wool Beanie', image: '/images/prod-beanie-wool.webp', category: 'merch' },
  { name: 'Puukko Knife', image: '/images/prod-puukko-knife.webp', category: 'artisan' },
  { name: 'Kuksa Cup', image: '/images/prod-kuksa-cup.webp', category: 'artisan' },
  { name: 'Sami Bracelet', image: '/images/prod-sami-bracelet.webp', category: 'artisan' },
  { name: 'Berry Jam Set', image: '/images/prod-berry-jam-set.webp', category: 'artisan' },
  { name: 'Antler Candle Holder', image: '/images/prod-antler-candle.webp', category: 'artisan' },
  { name: 'Wool Blanket', image: '/images/prod-wool-blanket.webp', category: 'artisan' },
]

function ProductGrid() {
  return (
    <section id="products" className="py-20 bg-gradient-to-b from-white to-white/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-heading text-4xl md:text-5xl text-gray mb-3">Coming Soon</h2>
          <p className="text-gray/60 text-lg max-w-2xl mx-auto">
            Our first collection is being handpicked from the best artisans in Finnish Lapland.
            Sign up for the newsletter to be first in line.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="group bg-white rounded-2xl border border-gray/10 overflow-hidden hover:shadow-xl hover:shadow-amber/10 transition-all hover:-translate-y-1"
            >
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <button
                  className="absolute top-3 right-3 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-pink/10 hover:text-pink transition-colors text-gray/40"
                  aria-label={`Notify me when ${product.name} is available`}
                >
                  <Bell className="w-5 h-5" />
                </button>
                <span className="absolute top-3 left-3 bg-night/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full capitalize">
                  {product.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-medium text-gray text-lg leading-tight mb-2 group-hover:text-amber transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="font-heading text-lg text-amber/60">Price TBD</span>
                  <button className="text-sm font-medium text-gray/50 hover:text-amber transition-colors flex items-center gap-1">
                    <Bell className="w-4 h-4" />
                    Notify Me
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductGrid
