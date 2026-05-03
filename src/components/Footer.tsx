import { Hash, ExternalLink, Camera, Play, Globe, Mail } from 'lucide-react'

const ecosystem = [
  {
    title: 'Stay',
    links: [
      { label: 'StayInLapland.com', url: 'https://stayinlapland.com' },
      { label: 'LaplandStays.com', url: 'https://laplandstays.com' },
      { label: 'ArcticStays.fi', url: 'https://arcticstays.fi' },
    ],
  },
  {
    title: 'Eat',
    links: [
      { label: 'LaplandDining.com', url: 'https://laplanddining.com' },
      { label: 'LaplandFood.com', url: 'https://laplandfood.com' },
      { label: 'LaplandBars.com', url: 'https://laplandbars.com' },
    ],
  },
  {
    title: 'Do',
    links: [
      { label: 'LaplandActivities', url: 'https://laplandactivities.online' },
      { label: 'LaplandTours', url: 'https://laplandtours.online' },
      { label: 'LaplandWeddings', url: 'https://laplandweddings.online' },
      { label: 'LaplandNature', url: 'https://laplandnature.com' },
    ],
  },
  {
    title: 'Shop',
    links: [
      { label: 'LaplandGifts.com', url: '/' },
      { label: 'LaplandDeals.com', url: 'https://laplanddeals.com' },
    ],
  },
  {
    title: 'Explore',
    links: [
      { label: 'LaplandVibes.com', url: 'https://laplandvibes.com' },
      { label: 'LaplandVisit.com', url: 'https://laplandvisit.com' },
      { label: 'LaplandKids.com', url: 'https://laplandkids.com' },
      { label: 'Lapland.blog', url: 'https://lapland.blog' },
    ],
  },
]

const socials = [
  { icon: Camera, url: 'https://instagram.com/laplandvibes', label: 'Instagram' },
  { icon: Play, url: 'https://youtube.com/@laplandvibes', label: 'YouTube' },
  { icon: Globe, url: 'https://facebook.com/laplandvibes', label: 'Facebook' },
]

function Footer() {
  return (
    <footer className="bg-night text-white/60 pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Brand */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <a href="/" className="flex items-center gap-1">
            <Hash className="w-6 h-6 text-pink" strokeWidth={3} />
            <span className="font-heading text-2xl tracking-wide">
              <span className="text-white/80">LAPLAND</span>
              <span className="text-amber">GIFTS</span>
            </span>
          </a>
          <div className="flex items-center gap-4">
            <a href="mailto:info@laplandvibes.com" className="text-sm hover:text-white transition-colors flex items-center gap-1">
              <Mail className="w-4 h-4" />
              info@laplandvibes.com
            </a>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label={s.label}
              >
                <s.icon className="w-4 h-4 text-white/50" />
              </a>
            ))}
          </div>
        </div>

        {/* Ecosystem grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {ecosystem.map((cat) => (
            <div key={cat.title}>
              <h4 className="font-heading text-lg text-white/80 tracking-wide mb-3">{cat.title}</h4>
              <ul className="space-y-2">
                {cat.links.map((link) => {
                  const isInternal = link.url === '/'
                  return (
                    <li key={link.label}>
                      {isInternal ? (
                        <a href="/" className="text-sm hover:text-white transition-colors">
                          {link.label}
                        </a>
                      ) : (
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm hover:text-white transition-colors flex items-center gap-1"
                        >
                          <ExternalLink className="w-3 h-3 text-white/20" />
                          {link.label}
                        </a>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Artisan partners */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <p className="text-xs text-center text-white/30 mb-3">Trusted artisan partners</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {['LAURI Handicrafts', 'Duodji Shop', 'Arctic Delice', 'Jaskepuu', 'Aurora Shop Lapland'].map((op) => (
              <span key={op} className="text-sm text-white/40 font-medium">{op}</span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            &copy; 2026 LaplandGifts &mdash; Lapeso Oy &mdash; Part of the{' '}
            <a href="https://laplandvibes.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/50 transition-colors">
              #LaplandVibes
            </a>{' '}
            ecosystem
          </p>
          <div className="flex gap-6 text-xs text-white/30">
            <a href="/privacy" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="/unsubscribe" className="hover:text-white/60 transition-colors">Unsubscribe</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
