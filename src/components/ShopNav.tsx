import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import LangSwitcher from './LangSwitcher'
import EcosystemMenu from '../../../shared/EcosystemMenu'
import { CATEGORIES } from '../data/categories'
import { EU_COUNTRIES } from '../data/shipping'
import { useShippingCountry } from '../context/ShippingCountry'
import { useLang, useLocalePath } from '../i18n/useLang'
import { SHOP_COPY } from '../locales/shopCopy'

/** Toimitusmaavalitsimen maat: EU + tärkeimmät kaukomarkkinat. */
const COUNTRIES = [...EU_COUNTRIES, 'GB', 'US', 'CA', 'JP', 'KR', 'AU', 'CH', 'NO'].sort()

/**
 * Kaupan ainoa navi: etusivu, kategoriat, tuotesivut, lahjaopas ja toimitus.
 *
 * EcosystemMenu ja kielivalitsin asuivat aiemmin vain Home.tsx:n omassa
 * headerissa. Kun etusivu siirtyi tähän naviin, ne tulivat mukana: muuten
 * sivustolla ei olisi enää yhtään paikkaa, josta kieltä voi vaihtaa.
 *
 * Kaksi riviä työpöydällä: ylärivillä verkostovalikko, logo ja valitsimet,
 * alarivillä yhdeksän linkkiä. Yhdellä rivillä ne eivät mahdu: mitatut
 * luonnolliset leveydet ovat noin 1075 px pelkille linkeille, ja logo +
 * verkostovalikko + valitsimet vievät jo yli 560 px, joten 1280 px:n
 * näytöllä palkki vieri sivusuunnassa ja linkkien tekstit katkesivat.
 *
 * Toimitusmaavalitsin on työpöydällä palkissa ja mobiilissa valikkopaneelissa,
 * koska 375 pikselin riville mahtuu vain verkostovalikko, logo, kieli ja
 * hampurilainen ilman että palkki alkaa vieriä sivusuunnassa.
 */
export default function ShopNav() {
  const lang = useLang()
  const to = useLocalePath()
  const t = SHOP_COPY[lang]
  const { country, setCountry } = useShippingCountry()
  const [open, setOpen] = useState(false)

  const countrySelect = (className: string) => (
    <label className={className}>
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
  )

  const links = [
    ...CATEGORIES.map((c) => ({ key: c.id, to: to(c.slug), label: t.category.names[c.id] })),
    { key: 'guides', to: to('/gift-guides'), label: t.nav.guides },
    // Toimitussivulle ei pääse mistään muualta: kortin toimitusmerkintä kertoo
    // alueen, mutta vientirajoitteet ja kumppanitaulukko asuvat vain siellä.
    { key: 'shipping', to: to('/shipping'), label: t.nav.shipping },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-card/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3">
        <EcosystemMenu lang={lang} currentDomain="laplandgifts.com" variant="light" />
        {/* Logo sisältää jo oman Linkin etusivulle. Ylimääräinen Link-kääre
            tuottaisi sisäkkäiset <a>-elementit, mikä on epävalidia HTML:ää. */}
        <div className="shrink-0">
          <Logo />
        </div>

        <div className="ml-auto flex items-center gap-2">
          {countrySelect('hidden items-center gap-2 lg:flex')}
          <LangSwitcher />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={t.nav.shop}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Linkkirivi omalla rivillään: koko kategorialista näkyy työpöydällä
          ilman että ylärivi vieri sivusuunnassa. */}
      <nav className="hidden border-t border-line xl:block">
        <div className="mx-auto flex max-w-7xl items-center gap-5 px-4 py-2">
          {links.map((l) => (
            <Link
              key={l.key}
              to={l.to}
              className="whitespace-nowrap py-1 text-sm font-medium text-gray transition-colors hover:text-amber"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </nav>

      {open && (
        <nav className="border-t border-line bg-card px-4 py-3 xl:hidden">
          {links.map((l) => (
            <Link
              key={l.key}
              to={l.to}
              onClick={() => setOpen(false)}
              className="flex min-h-11 items-center text-base font-medium text-gray"
            >
              {l.label}
            </Link>
          ))}
          {countrySelect('mt-3 flex items-center gap-2 lg:hidden')}
        </nav>
      )}
    </header>
  )
}
