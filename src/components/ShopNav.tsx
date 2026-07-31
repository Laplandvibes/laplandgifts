import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import { CATEGORIES } from '../data/categories'
import { EU_COUNTRIES } from '../data/shipping'
import { useShippingCountry } from '../context/ShippingCountry'
import { useLang, useLocalePath } from '../i18n/useLang'
import { SHOP_COPY } from '../locales/shopCopy'

/** Toimitusmaavalitsimen maat: EU + tärkeimmät kaukomarkkinat. */
const COUNTRIES = [...EU_COUNTRIES, 'GB', 'US', 'CA', 'JP', 'KR', 'AU', 'CH', 'NO'].sort()

export default function ShopNav() {
  const lang = useLang()
  const to = useLocalePath()
  const t = SHOP_COPY[lang]
  const { country, setCountry } = useShippingCountry()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-card/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3">
        {/* Logo sisältää jo oman Linkin etusivulle. Ylimääräinen Link-kääre
            tuottaisi sisäkkäiset <a>-elementit, mikä on epävalidia HTML:ää. */}
        <div className="shrink-0">
          <Logo />
        </div>

        <nav className="ml-auto hidden items-center gap-5 lg:flex">
          {CATEGORIES.map((c) => (
            <Link
              key={c.id}
              to={to(c.slug)}
              className="text-sm font-medium text-gray transition-colors hover:text-amber"
            >
              {t.category.names[c.id]}
            </Link>
          ))}
          <Link to={to('/gift-guides')} className="text-sm font-medium text-gray hover:text-amber">
            {t.nav.guides}
          </Link>
        </nav>

        <label className="ml-auto flex items-center gap-2 lg:ml-4">
          <span className="sr-only">{t.shipping.selectorLabel}</span>
          {/* text-base = 16 px: pienempi koko saa iOS:n zoomaamaan kenttään. */}
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="min-h-11 rounded-full border border-line bg-card px-3 text-base text-gray"
          >
            <option value="">{t.shipping.selectorLabel}</option>
            {COUNTRIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </label>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={t.nav.shop}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-line bg-card px-4 py-3 lg:hidden">
          {CATEGORIES.map((c) => (
            <Link
              key={c.id}
              to={to(c.slug)}
              onClick={() => setOpen(false)}
              className="flex min-h-11 items-center text-base font-medium text-gray"
            >
              {t.category.names[c.id]}
            </Link>
          ))}
          <Link
            to={to('/gift-guides')}
            onClick={() => setOpen(false)}
            className="flex min-h-11 items-center text-base font-medium text-gray"
          >
            {t.nav.guides}
          </Link>
        </nav>
      )}
    </header>
  )
}
