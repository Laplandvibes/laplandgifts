import { Gift, Sparkles } from 'lucide-react'

function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(15,23,42,0.8) 0%, rgba(15,23,42,0.5) 50%, rgba(15,23,42,0) 100%), url('/images/hero-main.webp')",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-20 md:py-32 relative z-10 w-full">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-amber" />
            <span className="text-amber font-medium uppercase tracking-widest text-sm">From the Heart of Finnish Lapland</span>
          </div>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-white leading-none mb-6">
            Give a Piece of the <span className="text-amber">Arctic</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-xl leading-relaxed">
            Order authentic Lapland gifts while you're on holiday — they'll be
            waiting at home before you. Handcrafted treasures, branded merch,
            and Arctic experiences, all shipped directly from Finnish Lapland.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a
              href="#categories"
              className="inline-flex items-center gap-2 bg-amber text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-amber/90 transition-colors shadow-lg shadow-amber/25"
            >
              <Gift className="w-5 h-5" />
              Explore Gifts
            </a>
            <a
              href="#gift-guide"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-full font-medium text-lg hover:border-amber hover:text-amber transition-colors"
            >
              Gift Guide
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
