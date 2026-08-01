import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Globe, Menu, X } from 'lucide-react'
import Logo from './Logo'
import LangSwitcher from './LangSwitcher'
import Breadcrumbs from '../../../shared/Breadcrumbs'
import EcosystemMenu from '../../../shared/EcosystemMenu'
import { CATEGORIES } from '../data/categories'
import { EU_COUNTRIES } from '../data/shipping'
import { useShippingCountry } from '../context/ShippingCountry'
import { stripLocale, useLang, useLocalePath } from '../i18n/useLang'
import { SHOP_COPY } from '../locales/shopCopy'
import { NAV_COPY } from '../locales/navCopy'

/** Toimitusmaavalitsimen maat: EU + tärkeimmät kaukomarkkinat. */
const COUNTRIES = [...EU_COUNTRIES, 'GB', 'US', 'CA', 'JP', 'KR', 'AU', 'CH', 'NO'].sort()

/**
 * Kaupan yläosa. Kolme kerrosta, joilla on kolme eri tehtävää ja kolme eri
 * elinkaarta ruudulla:
 *
 *   1. APUPALKKI (ei sticky) — verkostovalikko, lahjaoppaat, toimitus,
 *      toimitusmaa ja kieli. Nämä ovat asioita, jotka etsitään kerran ja
 *      jätetään rauhaan, joten ne saavat rullata pois näkyvistä.
 *   2. PÄÄPALKKI (sticky) — sanamerkki ja seitsemän kategoriaa. Tämä on kaupan
 *      varsinainen navigaatio ja se seuraa mukana koko sivun.
 *   3. MURUPOLKU (ei sticky) — sisältöalueen ensimmäinen rivi.
 *
 * 🔴 Miksi kokonaan uusi (Vesa 2026-08-01: "koko navigaatio on aivan pielessä
 * ja aivan hirveä", "murupolku kulkee missä tahansa"):
 *
 *   - Vanhassa palkissa oli yhdeksän samannäköistä linkkiä samalla rivillä:
 *     seitsemän kategoriaa sekä lahjaopas ja toimitus. Kategoriat eivät
 *     erottuneet mistään, vaikka ne ovat ainoa reitti tuotteisiin. Nyt
 *     kategoriat ovat yksin pääpalkissa ja kaksi toissijaista sivua siirtyivät
 *     apupalkkiin.
 *   - Yhdeksän pitkää nimeä ei mahtunut logon kanssa samalle riville, joten
 *     palkki oli kaksirivinen ja alarivi tarvitsi `pt-8`-varauksen
 *     verkostovalikon vinkkikuplalle. Kupla peitti silti kategorioita. Nyt
 *     navilinkit käyttävät lyhyttä nimeä (navCopy.ts) ja mahtuvat yhdelle
 *     riville, ja kupla on piilotettu sivustokohtaisella säännöllä
 *     (index.css `.lv-eco-compact`).
 *   - Murupolku renderöitiin App.tsx:ssä <Routes>-puun YLÄPUOLELLA eli kiinteän
 *     navin yläpuolelle. Se katosi heti kun sivua rullasi. Nyt se tulee täältä
 *     sticky-palkin ALAPUOLELTA, ei-sticky-osana, eli sisältöalueen alusta.
 *
 * 🔴 TOIMITUSMAAVALITSIN ON NÄKYVISSÄ JOKA LEVEYDELLÄ (Vesa 1.8.).
 *
 * Aiempi versio piilotti sen `hidden md:flex`illä ja jätti mobiiliin vain
 * valikkopaneelin kopion. Mitattuna 390 ja 660 pikselissä näkyi yksi valitsin
 * kolmesta. Toimitusmaa ei ole koriste: se suodattaa katalogin ja on ainoa syy
 * miksi EU-rajatut kumppanit (Halti, Luhta, Finlayson, kuivalihat) voidaan
 * ylipäätään listata — ilman sitä lukija näkee tuotteita, joita hänelle ei
 * toimiteta. Sama koskee kielivalitsinta.
 *
 * Mahtuminen ratkaistiin rivityksellä eikä piilottamalla: apupalkki on
 * `flex-wrap`, joten kapeimmilla ruuduilla valitsinpari putoaa toiselle
 * riville. Kaksi riviä on aina parempi kuin kadonnut ydintoiminto.
 *
 * Lahjaopas- ja toimituslinkit ovat apupalkissa vain md+:sta ylöspäin, mutta
 * ne asuvat myös valikkopaneelissa omana ryhmänään, ja valikkonapissa lukee
 * nyt "Valikko" — pelkkä hampurilaisikoni ei kertonut, että sen takana on
 * sivuja ja asetuksia.
 */
export default function ShopNav() {
  const lang = useLang()
  const to = useLocalePath()
  const t = SHOP_COPY[lang]
  const n = NAV_COPY[lang]
  const { country, setCountry } = useShippingCountry()
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  const here = stripLocale(pathname).replace(/\/$/, '') || '/'

  /**
   * Toimitusmaavalitsin. `visibleLabel` näyttää tekstilabelin kentän vieressä
   * (valikkopaneeli), muuten label on ruudunlukijalle ja maapallokuvake kertoo
   * silmälle mistä on kyse. Kaikki kentät ovat 16 pikselin tekstiä: pienempi
   * saa iOS Safarin zoomaamaan koko sivun kenttään kosketettaessa.
   */
  const countrySelect = (wrapClass: string, selectClass: string, visibleLabel = false) => (
    <label className={`min-w-0 items-center gap-2 ${wrapClass}`}>
      {visibleLabel ? (
        <span className="shrink-0 text-sm font-semibold text-muted">{t.shipping.selectorLabel}</span>
      ) : (
        <>
          <span className="sr-only">{t.shipping.selectorLabel}</span>
          <Globe className="h-4 w-4 shrink-0 text-white/70" aria-hidden="true" />
        </>
      )}
      <select
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        className={`min-w-0 rounded-full border border-line bg-card text-gray ${selectClass}`}
      >
        <option value="">
          {visibleLabel ? t.shipping.selectorAll : t.shipping.selectorLabel}
        </option>
        {COUNTRIES.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
    </label>
  )

  const categories = CATEGORIES.map((c) => ({
    key: c.id,
    to: to(c.slug),
    slug: c.slug,
    short: n.catShort[c.id],
    full: t.category.names[c.id],
  }))

  // Toimitussivulle ei pääse mistään muualta: kortin toimitusmerkintä kertoo
  // alueen, mutta vientirajoitteet ja kumppanitaulukko asuvat vain siellä.
  const secondary = [
    { key: 'guides', to: to('/gift-guides'), slug: '/gift-guides', label: t.nav.guides },
    { key: 'shipping', to: to('/shipping'), slug: '/shipping', label: t.nav.shipping },
  ]

  // Murupolun labelit: kaupan seitsemän kategoriasivua sekä lahjaopas- ja
  // toimitussivu. Lakisivut jäävät pois ekosysteemisäännön mukaan, tuotesivut
  // siksi että niiden label tulisi tuotedatasta eikä navista.
  const crumbLabels: Record<string, string> = {
    ...Object.fromEntries(categories.map((c) => [c.slug, c.full])),
    '/gift-guides': t.nav.guides,
    '/shipping': t.nav.shipping,
  }

  return (
    <>
      {/* ── 1. APUPALKKI ──────────────────────────────────────────────────
          Tumma kaista verkoston omalla deep-night-sävyllä: kauppa on muuten
          hiekkainen ja vaalea, joten yläreunan tumma viiva erottaa selaimen
          kehyksen sivusta ja sitoo kaupan verkoston ilmeeseen. */}
      {/* `relative z-[60]`: verkostovalikon pudotusvalikko avautuu tästä
          palkista alaspäin pääpalkin päälle. Ilman omaa pinoutuskontekstia
          pääpalkki (z-50) jäi sen päälle ja söi valikon ylimmän rivin.
          Palkit eivät voi peittää toisiaan: apupalkki on virtauksessa ennen
          headeria, joten se on jo rullautunut pois kun header kiinnittyy. */}
      <div className="relative z-[60] bg-night text-white">
        {/* flex-wrap + gap-y: kapeimmilla ruuduilla (≤ ~340 px) valitsinpari
            putoaa omalle rivilleen sen sijaan että se piilotettaisiin tai että
            palkki alkaisi vieriä sivusuunnassa. */}
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-3 gap-y-2 px-4 py-2 sm:gap-x-5">
          <div className="lv-eco-compact shrink-0">
            <EcosystemMenu lang={lang} currentDomain="laplandgifts.com" variant="dark" />
          </div>

          <nav aria-label={n.utilityNavLabel} className="hidden items-center gap-5 md:flex">
            {secondary.map((s) => (
              <Link
                key={s.key}
                to={s.to}
                aria-current={here === s.slug ? 'page' : undefined}
                className={`inline-flex min-h-11 items-center text-xs font-semibold uppercase tracking-[0.14em] transition-colors hover:text-amber ${
                  here === s.slug ? 'text-amber' : 'text-white/70'
                }`}
              >
                {s.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex min-w-0 items-center gap-2">
            {countrySelect('flex', 'h-11 max-w-[8.5rem] px-3 text-base md:h-9')}
            <LangSwitcher />
          </div>
        </div>
      </div>

      {/* ── 2. PÄÄPALKKI ─────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-line bg-card/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center gap-6 px-4 py-3">
          {/* Logo sisältää jo oman Linkin etusivulle. Ylimääräinen Link-kääre
              tuottaisi sisäkkäiset <a>-elementit, mikä on epävalidia HTML:ää. */}
          <div className="shrink-0">
            <Logo />
          </div>

          <nav
            aria-label={n.shopNavLabel}
            className="ml-auto hidden items-center gap-x-6 lg:flex xl:gap-x-8"
          >
            {categories.map((c) => {
              const active = here === c.slug
              return (
                <Link
                  key={c.key}
                  to={c.to}
                  aria-current={active ? 'page' : undefined}
                  title={c.full}
                  className={`relative inline-flex min-h-11 items-center whitespace-nowrap text-[15px] font-medium transition-colors hover:text-amber ${
                    active ? 'text-amber' : 'text-gray'
                  }`}
                >
                  {c.short}
                  {/* Aktiivinen kategoria saa oman viivan palkin alareunaan:
                      pelkkä väriero ei riitä, jos katsoja ei erota ambraa
                      harmaasta (väri ei saa olla ainoa erottava tekijä). */}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-amber transition-opacity ${
                      active ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </Link>
              )
            })}
          </nav>

          {/* 🔴 Napissa lukee "Valikko". Pelkkä hampurilaisikoni ei kerro, että
              sen takana ovat kategoriat, lahjaopas- ja toimitussivu — eli
              kaikki mihin mobiilissa pääsee. Teksti tekee samalla napista
              leveämmän kosketuskohteen kuin 44 × 44. */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="shop-menu"
            // Näkyvä teksti on lyhyt ("Valikko"), saavutettava nimi kertoo
            // toiminnon. Näkyvä teksti sisältyy nimeen, kuten WCAG 2.5.3
            // edellyttää.
            aria-label={open ? n.closeMenu : n.openMenu}
            className="ml-auto inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border border-line px-4 text-sm font-semibold text-gray lg:hidden"
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            {n.menuLabel}
          </button>
        </div>

        {/* Paneeli on sticky-headerin sisällä, joten se pysyy ruudulla myös
            silloin kun sivua on rullattu ennen valikon avaamista. Korkeus on
            katkaistu näkymään: yhdeksän riviä ja valitsin venyttivät palkin 604
            pikseliin, jolloin auki oleva valikko peitti matalalla näytöllä koko
            ruudun eikä sisällöstä näkynyt mitään. Nyt paneeli vierii itse. */}
        {open && (
          <div
            id="shop-menu"
            className="max-h-[calc(100svh-7rem)] overflow-y-auto border-t border-line bg-card lg:hidden"
          >
            <nav aria-label={n.shopNavLabel} className="mx-auto max-w-7xl px-4 py-2">
              {categories.map((c) => (
                <Link
                  key={c.key}
                  to={c.to}
                  // Paneeli sulkeutuu linkistä. Ilman tätä valikko jäi auki
                  // avatun sivun päälle eikä sisällöstä näkynyt mitään.
                  onClick={() => setOpen(false)}
                  aria-current={here === c.slug ? 'page' : undefined}
                  className={`flex min-h-12 items-center border-b border-line/60 text-base font-medium last:border-0 ${
                    here === c.slug ? 'text-amber' : 'text-gray'
                  }`}
                >
                  {c.full}
                </Link>
              ))}
            </nav>
            <nav
              aria-label={n.utilityNavLabel}
              className="mx-auto max-w-7xl border-t border-line px-4 py-2"
            >
              {secondary.map((s) => (
                <Link
                  key={s.key}
                  to={s.to}
                  onClick={() => setOpen(false)}
                  aria-current={here === s.slug ? 'page' : undefined}
                  // Sama sävy kuin kategorialinkeillä: `text-muted` sai nämä
                  // kaksi näyttämään pois käytöstä olevilta vaikka ne ovat
                  // mobiilin ainoa reitti lahjaopas- ja toimitussivulle.
                  className={`flex min-h-12 items-center text-base font-medium ${
                    here === s.slug ? 'text-amber' : 'text-gray'
                  }`}
                >
                  {s.label}
                </Link>
              ))}
            </nav>
            {/* Sama valitsin kuin apupalkissa, mutta näkyvällä labelilla ja
                täysleveänä. Kaksoiskappale on tarkoituksellinen: apupalkki ei
                ole sticky, joten rullatulla sivulla valikkopaneeli on ainoa
                paikka josta toimitusmaan voi vaihtaa.
                text-base = 16 px: pienempi koko saa iOS:n zoomaamaan kenttään. */}
            {countrySelect(
              'mx-auto flex max-w-7xl flex-wrap border-t border-line px-4 py-3',
              'min-h-11 flex-1 px-4 text-base',
              true,
            )}
          </div>
        )}
      </header>

      {/* ── 3. MURUPOLKU ──────────────────────────────────────────────────
          Sticky-palkin alapuolella ja sen ulkopuolella: rullaa pois kuten muukin
          sisältö. Piilottaa itsensä etusivulla ja kartoittamattomilla reiteillä.
          Väripaletti: sivustolla ei ole deep-night/snow-tokeneita, joten polku
          käyttää leipätekstin `text-gray`-sävyä ja navin omaa ambrahoveria. */}
      {/* Kääre renderöidään vain kun Breadcrumbs oikeasti tuottaa polun. Muuten
          etusivulle ja tuote-/lakisivuille jäisi tyhjä kaistale, jolla on
          alareunan viiva mutta ei sisältöä. */}
      {crumbLabels[here] && (
        <div className="border-b border-line bg-sand">
          <Breadcrumbs
            lang={lang}
            to={to}
            labelMap={crumbLabels}
            className="text-gray"
            accentClassName="hover:text-amber hover:opacity-100"
          />
        </div>
      )}
    </>
  )
}
