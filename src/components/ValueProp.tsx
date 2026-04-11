import { Plane, Package, Home } from 'lucide-react'

const steps = [
  {
    icon: Plane,
    step: '1',
    title: 'Browse on Holiday',
    description: 'Found a puukko knife you love? A kuksa for mum? Order while you explore — no need to carry anything.',
  },
  {
    icon: Package,
    step: '2',
    title: 'We Ship from Lapland',
    description: 'Your gifts are packed with care and shipped directly from Finnish artisans and our EU print partners.',
  },
  {
    icon: Home,
    step: '3',
    title: 'Waiting at Home',
    description: 'Land back home and your Lapland treasures are already at your doorstep. No luggage stress, no broken souvenirs.',
  },
]

function ValueProp() {
  return (
    <section className="py-16 bg-night">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl text-white text-center mb-3">
          Order on Holiday. Find Them at Home.
        </h2>
        <p className="text-white/50 text-center mb-12 max-w-2xl mx-auto">
          No more stuffing fragile souvenirs into your suitcase. Shop during your trip and we handle the rest.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.step} className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-amber/20 flex items-center justify-center mx-auto mb-4 relative">
                <s.icon className="w-7 h-7 text-amber" />
                <span className="absolute -top-2 -right-2 w-7 h-7 bg-amber text-night text-sm font-bold rounded-full flex items-center justify-center">
                  {s.step}
                </span>
              </div>
              <h3 className="font-heading text-xl text-white mb-2">{s.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ValueProp
