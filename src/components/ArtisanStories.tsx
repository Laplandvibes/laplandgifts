import { Quote } from 'lucide-react'

const artisans = [
  {
    name: 'Aila Magga',
    craft: 'Sami Duodji Artist',
    location: 'Inari, Finland',
    story:
      'For over thirty years, Aila has kept the ancient Sami craft traditions alive. Working with reindeer leather, tin thread, and antler, she creates bracelets, pouches, and decorative pieces that honor her ancestors. Each piece takes days to complete and carries symbols passed down through generations.',
    gradient: 'from-pink/20 to-amber/10',
  },
  {
    name: 'Heikki Rautio',
    craft: 'Puukko Knife Maker',
    location: 'Sodankyla, Finland',
    story:
      'A third-generation bladesmith, Heikki forges every knife by hand in his workshop above the Arctic Circle. He sources curly birch from local forests for the handles and uses traditional Finnish carbon steel for blades that hold their edge through years of use. His knives are both functional tools and works of art.',
    gradient: 'from-gray/20 to-amber/10',
  },
  {
    name: 'Minna Keskitalo',
    craft: 'Jewelry Designer',
    location: 'Levi, Finland',
    story:
      'Inspired by the northern lights, endless winter skies, and the shapes of Arctic flora, Minna designs jewelry that captures the magic of Lapland. She works primarily with silver, incorporating local gemstones and natural materials like birch and reindeer antler into her elegant, nature-inspired pieces.',
    gradient: 'from-amber/20 to-pink/10',
  },
]

function ArtisanStories() {
  return (
    <section id="artisans" className="py-20 bg-night text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-heading text-4xl md:text-5xl text-white mb-3">Meet the Artisans</h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Behind every product is a skilled craftsperson with a story rooted in Arctic tradition
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {artisans.map((artisan) => (
            <div
              key={artisan.name}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-amber/30 transition-colors"
            >
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${artisan.gradient} flex items-center justify-center mb-6`}>
                <span className="font-heading text-3xl text-gray">{artisan.name.charAt(0)}</span>
              </div>
              <h3 className="font-heading text-2xl text-amber mb-1">{artisan.name}</h3>
              <p className="text-pink text-sm font-medium mb-1">{artisan.craft}</p>
              <p className="text-white/40 text-sm mb-5">{artisan.location}</p>
              <div className="relative">
                <Quote className="w-5 h-5 text-amber/30 mb-2" />
                <p className="text-white/70 leading-relaxed">{artisan.story}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ArtisanStories
