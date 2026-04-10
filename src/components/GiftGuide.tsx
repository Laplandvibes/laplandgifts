import { TreePine, Heart, Cake, Briefcase } from 'lucide-react'

const occasions = [
  {
    name: 'Christmas',
    icon: TreePine,
    description: 'Nothing says Christmas like a gift from Santa\'s homeland. Choose from our curated holiday selections.',
    suggestions: ['Gift Basket "Lapland Luxury"', 'Lapland Wool Blanket', 'Cloudberry Jam Set', 'Felt Slippers'],
  },
  {
    name: 'Wedding',
    icon: Heart,
    description: 'Celebrate love with timeless handcrafted pieces that the couple will treasure for years.',
    suggestions: ['Aurora Jewelry Pendant', 'Wooden Kuksa Cup (pair)', 'Reindeer Leather Wallet', 'Birch Bark Basket'],
  },
  {
    name: 'Birthday',
    icon: Cake,
    description: 'Surprise someone special with a unique gift they will never find in an ordinary store.',
    suggestions: ['Sami Duodji Bracelet', 'Puukko Knife', 'Gift Basket "Arctic Taste"', 'Reindeer Antler Candle Holder'],
  },
  {
    name: 'Corporate',
    icon: Briefcase,
    description: 'Impress clients and partners with premium Arctic gifts that stand out from the usual corporate fare.',
    suggestions: ['Puukko Knife (engraved)', 'Gift Basket "Lapland Luxury"', 'Wooden Kuksa Cup', 'Aurora Jewelry Pendant'],
  },
]

function GiftGuide() {
  return (
    <section id="gift-guide" className="py-20 bg-gradient-to-b from-white to-amber/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-heading text-4xl md:text-5xl text-gray mb-3">Gift Guide</h2>
          <p className="text-gray/60 text-lg max-w-2xl mx-auto">
            Not sure what to choose? Let us help you find the perfect gift for every occasion
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {occasions.map((occasion) => (
            <div
              key={occasion.name}
              className="bg-white rounded-2xl p-8 border border-gray/10 hover:border-amber/30 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-xl bg-amber/10 flex items-center justify-center">
                  <occasion.icon className="w-7 h-7 text-amber" />
                </div>
                <h3 className="font-heading text-3xl text-gray">{occasion.name}</h3>
              </div>
              <p className="text-gray/60 mb-6 leading-relaxed">{occasion.description}</p>
              <div>
                <p className="text-sm font-medium text-gray/40 uppercase tracking-wider mb-3">Suggested gifts</p>
                <ul className="space-y-2">
                  {occasion.suggestions.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GiftGuide
