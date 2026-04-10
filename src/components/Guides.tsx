import { BookOpen, Map, ArrowDown, FileText } from 'lucide-react'

const guides = [
  {
    title: 'The Secret Craft',
    subtitle: "An Insider's Guide to Authentic Lapland Craftsmanship",
    description: 'Learn to spot real handmade puukko knives from factory fakes, understand the cultural meaning of Sami duodji, discover wild berry seasons, and master the 5 golden rules for buying genuine Lapland crafts.',
    pages: 9,
    icon: BookOpen,
    topics: ['Puukko knives', 'Kuksa cups', 'Sami duodji', 'Wild berries', "Buyer's rules"],
  },
  {
    title: '7 Days of Lapland Magic',
    subtitle: 'The Only Itinerary You\'ll Ever Need',
    description: 'A complete day-by-day route from Rovaniemi to Inari and back. Includes northern lights tips, husky safaris, icebreaker cruises, realistic budget planner, and a full Arctic packing list.',
    pages: 13,
    icon: Map,
    topics: ['7-day itinerary', 'Budget planner', 'Packing list', 'Season guide', 'Local tips'],
  },
]

function Guides() {
  return (
    <section id="guides" className="py-20 bg-night">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <FileText className="w-5 h-5 text-amber" />
            <span className="text-amber font-medium uppercase tracking-widest text-sm">Free Guides</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl text-white mb-3">Arctic Guides</h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Everything we know about Lapland, packed into two free guides.
            Leave your email below and download instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {guides.map((guide) => (
            <div
              key={guide.title}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-amber/30 transition-all"
            >
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-amber/20 flex items-center justify-center">
                    <guide.icon className="w-6 h-6 text-amber" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl text-white">{guide.title}</h3>
                    <p className="text-white/40 text-sm">{guide.pages} pages &middot; PDF</p>
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
          ))}
        </div>

        {/* Arrow pointing to newsletter section below */}
        <div className="text-center">
          <a
            href="#newsletter"
            className="inline-flex flex-col items-center gap-2 text-amber/60 hover:text-amber transition-colors"
          >
            <span className="text-sm font-medium">Enter your email to get both guides free</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Guides
