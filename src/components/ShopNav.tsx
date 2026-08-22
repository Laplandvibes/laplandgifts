import { useState } from 'react'
import { BRAND_COPY } from '../locales/brandCopy'
import { LUXURY_COPY } from '../locales/luxuryCopy'
import { Link, useLocation } from 'react-router-dom'
import { Globe, Menu, X } from 'lucide-react'
import Logo from './Logo'
import LangSwitcher from './LangSwitcher'
import ProductSearch from './ProductSearch'
import Breadcrumbs from '../shared/Breadcrumbs'
import EcosystemMenu from '../shared/EcosystemMenu'
import { CATEGORIES } from '../data/categories'
import { EU_COUNTRIES } from '../data/shipping'
import { useShippingCountry } from '../context/ShippingCountry'
import { stripLocale, useLang, useLocalePath } from '../i18n/useLang'
import { SHOP_COPY } from '../locales/shopCopy'
import { NAV_COPY } from '../locales/navCopy'

/** Toimitusmaavalitsimen maat: EU + tärkeimmät kaukomarkkinat. */
const COUNTRIES = [...EU_COUNTRIES, 'GB', 'US', 'CA', 'JP', 'KR', 'AU', 'CH', 'NO'].sort()

/**
 * Kaupan yläosa. YKSI header, jossa on kaksi riviä samalla vaalealla pinnalla,
 * ja sen alla murupolku:
 *
 *   RIVI 1 — sanamerkki, haku, toimitusmaa ja kieli.
 *   RIVI 2 — seitsemän kategoriaa, ja oikeassa reunassa lahjaoppaat, toimitus
 *            ja verkostovalikko pienemmällä typografialla.
 *   MURUPOLKU (ei sticky, headerin ulkopuolella) — sisältöalueen ensimmäinen
 *            rivi.
 *
 * 🔴 MIKSI YKSI PINTA (Vesa 2.8.2026: "en ymmärrä kahta headerin navibaaria").
 *
 * Aiemmin ylimpänä oli erillinen TUMMA apupalkki (verkosto, oppaat, toimitus,
 * maa, kieli) ja sen alla vaalea pääpalkki. Kaksi eri taustaväriä luki kahtena
 * eri navigaationa, vaikka ne olivat saman sivuston sama yläosa. Sisältö ei
 * muuttunut mihinkään — se on nyt jaettu kahdelle riville yhdellä pinnalla, ja
 * toissijaiset linkit erottuvat kategorioista pienemmällä typografialla eikä
 * omalla väripalkilla.
 *
 * Sivutuote: koko header on nyt sticky. Aiemmin apupalkki ei ollut, joten
 * kieli- ja maavalitsin katosivat heti kun sivua rullasi.
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
        <span className="shrink-0 text-sm font-semibold text-white/60">{t.shipping.selectorLabel}</span>
      ) : (
        <>
          <span className="sr-only">{t.shipping.selectorLabel}</span>
          <Globe className="h-4 w-4 shrink-0 text-white/70" aria-hidden="true" />
        </>
      )}
      <select
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        className={`min-w-0 rounded-full border border-white/20 bg-white/10 text-white ${selectClass}`}
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
  //
  // `short` on työpöytärivin label, `label` koko nimi valikkopaneeliin ja
  // title-attribuuttiin. Sama jako kuin kategorioilla: rivin label tulee
  // navCopysta, koko nimi kohdesivun omasta copysta. Ks. navCopy.ts `secShort`
  // — nämä viisi ottivat labelinsa suoraan H1-otsikosta, ja kymmenellä kielellä
  // kahdestatoista otsikot eivät mahtuneet riville.
  const secondary = [
    { key: 'boutiques', to: to('/boutiques'), slug: '/boutiques', short: n.secShort.boutiques, label: t.boutique.hubTitle },
    { key: 'luxury', to: to('/luxury'), slug: '/luxury', short: n.secShort.luxury, label: LUXURY_COPY[lang].title },
    { key: 'brands', to: to('/brands'), slug: '/brands', short: n.secShort.brands, label: BRAND_COPY[lang].indexH1 },
    { key: 'guides', to: to('/gift-guides'), slug: '/gift-guides', short: n.secShort.guides, label: t.nav.guides },
    { key: 'shipping', to: to('/shipping'), slug: '/shipping', short: n.secShort.shipping, label: t.nav.shipping },
  ]

  // Murupolun labelit: kaupan seitsemän kategoriasivua sekä lahjaopas- ja
  // toimitussivu. Lakisivut jäävät pois ekosysteemisäännön mukaan, tuotesivut
  // siksi että niiden label tulisi tuotedatasta eikä navista.
  const crumbLabels: Record<string, string> = {
    ...Object.fromEntries(categories.map((c) => [c.slug, c.full])),
    '/gift-guides': t.nav.guides,
    // Keräilijäsivu on fi+en-sisältöinen (MoominMugs.tsx), joten sen label
    // tulee sivun omasta kieliparista eikä 12-kielisestä copysta.
    '/harvinaiset-muumimukit': lang === 'fi' ? 'Harvinaiset muumimukit' : 'Rare Moomin mugs',
    // Sama fi+en-malli: opassivun label tulee sivun omasta kieliparista.
    '/pakuri': lang === 'fi' ? 'Pakuri' : 'Chaga',
    '/shipping': t.nav.shipping,
    '/boutiques': t.boutique.hubTitle,
    '/brands': BRAND_COPY[lang].indexH1,
    '/luxury': LUXURY_COPY[lang].title,
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
      <header className="sticky top-0 z-50 border-b border-white/10 bg-night/95 text-white backdrop-blur">
        {/* ── RIVI 1: sanamerkki, haku, toimitusmaa ja kieli ─────────────── */}
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-4 gap-y-2 px-4 py-3">
          {/* Logo sisältää jo oman Linkin etusivulle. Ylimääräinen Link-kääre
              tuottaisi sisäkkäiset <a>-elementit, mikä on epävalidia HTML:ää. */}
          <div className="shrink-0">
            <Logo />
          </div>

          {/* Haku keskellä ylintä riviä, kuten verkkokaupoissa yleensä. Alle
              lg:n sama kenttä on valikkopaneelissa täysleveänä. */}
          <div className="hidden lg:block lg:min-w-0 lg:flex-1 lg:px-8">
            <ProductSearch />
          </div>

          {/* 🔴 Mobiilissa valitsinpari on OMA rivinsä, ei rivityksen armoilla.
              Kun logo, molemmat valitsimet ja valikkonappi olivat samassa
              wrapissa, 390 pikselin ruudulla syntyi kolme epätasaista riviä ja
              sticky-header vei 153 px eli lähes viidenneksen näytöstä.
              `order-last w-full` pakottaa valitsimet siistiksi omaksi
              rivikseen ja jättää ylimmälle riville logon ja valikkonapin.
              lg:stä ylöspäin pari palaa oikeaan reunaan samalle riville. */}
          <div className="order-last flex w-full min-w-0 items-center gap-2 lg:order-none lg:ml-auto lg:w-auto">
            {countrySelect('flex flex-1 lg:flex-none', 'h-11 w-full px-3 text-base lg:h-9 lg:w-auto lg:max-w-none')}
            <LangSwitcher />
          </div>

          {/* 🔴 Napissa lukee "Valikko". Pelkkä hampurilaisikoni ei kerro, että
              sen takana ovat kategoriat, lahjaopas- ja toimitussivu — eli
              kaikki mihin mobiilissa pääsee.

              Näkyy xl:ään asti, ei enää vain lg:hen: 1024–1279 pikselissä
              toissijaiset linkit ja verkostovalikko eivät mahdu kategoriariville
              (ks. rivi 2), joten tämä nappi on niiden ainoa reitti siinä
              välissä. */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="shop-menu"
            aria-label={open ? n.closeMenu : n.openMenu}
            className="ml-auto inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border border-white/25 px-4 text-sm font-semibold text-white xl:hidden"
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            {n.menuLabel}
          </button>
        </div>

        {/* ── RIVI 2: kategoriat ja toissijaiset linkit, vain lg+ ────────── */}
        <div className="hidden border-t border-white/10 lg:block">
          <div className="mx-auto flex max-w-7xl items-center gap-x-6 px-4">
            <nav
              aria-label={n.shopNavLabel}
              className="flex items-center gap-x-6 xl:gap-x-8"
            >
            {categories.map((c) => {
              const active = here === c.slug
              return (
                <Link
                  key={c.key}
                  to={c.to}
                  aria-current={active ? 'page' : undefined}
                  title={c.full}
                  className={`relative inline-flex min-h-11 items-center whitespace-nowrap text-[15px] font-medium transition-colors hover:text-vibe-pink ${
                    active ? 'text-vibe-pink' : 'text-white/85'
                  }`}
                >
                  {c.short}
                  {/* Aktiivinen kategoria saa oman viivan palkin alareunaan:
                      pelkkä väriero ei riitä, jos katsoja ei erota ambraa
                      harmaasta (väri ei saa olla ainoa erottava tekijä). */}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-vibe-pink transition-opacity ${
                      active ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </Link>
              )
            })}
            </nav>

            {/* Toissijaiset sivut ja verkostovalikko rivin oikeaan reunaan.
                Ne olivat aiemmin omassa tummassa palkissaan, joka luki
                kahtena eri navigaationa (Vesa 2.8.: "en ymmärrä kahta
                headerin navibaaria"). Sama sisältö, yksi pinta: pienempi
                typografia erottaa ne kategorioista ilman omaa väripalkkia. */}
            {/* 🔴 Vasta xl:stä (1280 px) ylöspäin. Mitattuna 1024 pikselissä
                kategoriarivi vei 558 px ja verkostonappi 122 px, joten näille
                viidelle jäi 268 px — vähemmän kuin lyhinkään kieli (kiina, 394
                px) tarvitsee. Rivi ei siis vuotanut yhdellä kielellä vaan
                kaikilla: `scrollWidth` 1196 vs `clientWidth` 1024, ja
                verkostonappi työntyi kokonaan ruudun ulkopuolelle. 1280:stä
                ylöspäin tilaa on 476 px ja lyhyet nimet mahtuvat.

                Alle xl:n nämä eivät katoa vaan asuvat valikkopaneelissa, jonka
                nappi on siksi näkyvissä xl:ään asti. Kategoriat pysyvät
                rivillä joka leveydellä: ne ovat ainoa reitti tuotteisiin. */}
            <div className="ml-auto hidden items-center gap-5 xl:flex">
              <nav aria-label={n.utilityNavLabel} className="flex items-center gap-5">
                {secondary.map((s) => (
                  <Link
                    key={s.key}
                    to={s.to}
                    aria-current={here === s.slug ? 'page' : undefined}
                    title={s.label}
                    // `whitespace-nowrap`: ilman tätä liian pitkä label rivittyy
                    // 44 pikselin rivin sisään kahdelle 12 pikselin riville,
                    // jotka asettuvat lähes kiinni toisiinsa. Juuri se luki
                    // päällekkäisyytenä (Vesa 16.8.).
                    className={`inline-flex min-h-11 items-center whitespace-nowrap text-xs font-semibold uppercase tracking-[0.14em] transition-colors hover:text-vibe-pink ${
                      here === s.slug ? 'text-vibe-pink' : 'text-white/55'
                    }`}
                  >
                    {s.short}
                  </Link>
                ))}
              </nav>
              <div className="lv-eco-compact shrink-0">
                <EcosystemMenu lang={lang} currentDomain="laplandgifts.com" variant="dark" />
              </div>
            </div>
          </div>
        </div>

        {/* Paneeli on sticky-headerin sisällä, joten se pysyy ruudulla myös
            silloin kun sivua on rullattu ennen valikon avaamista. Korkeus on
            katkaistu näkymään: yhdeksän riviä ja valitsin venyttivät palkin 604
            pikseliin, jolloin auki oleva valikko peitti matalalla näytöllä koko
            ruudun eikä sisällöstä näkynyt mitään. Nyt paneeli vierii itse. */}
        {/* Paneeli elää xl:ään asti, koska kategoriarivi ei kanna toissijaisia
            linkkejä ennen sitä. 1024–1279 pikselissä paneelista näkyy vain se
            osa jota rivillä EI ole: haku, kategoriat ja maavalitsin ovat siinä
            välissä jo headerissa, joten ne piilotetaan `lg:hidden`illä eikä
            samaa asiaa tarjota kahdesti. */}
        {open && (
          <div
            id="shop-menu"
            className="max-h-[calc(100svh-7rem)] overflow-y-auto border-t border-white/10 bg-night xl:hidden"
          >
            {/* Haku on paneelin ensimmäinen elementti: mobiilissa kategorian
                arvaaminen on työläämpää kuin työpöydällä, koska koko listaa ei
                näe kerralla. */}
            <div className="mx-auto max-w-7xl border-b border-white/10 px-4 py-3 lg:hidden">
              <ProductSearch variant="panel" onNavigate={() => setOpen(false)} />
            </div>
            <nav aria-label={n.shopNavLabel} className="mx-auto max-w-7xl px-4 py-2 lg:hidden">
              {categories.map((c) => (
                <Link
                  key={c.key}
                  to={c.to}
                  // Paneeli sulkeutuu linkistä. Ilman tätä valikko jäi auki
                  // avatun sivun päälle eikä sisällöstä näkynyt mitään.
                  onClick={() => setOpen(false)}
                  aria-current={here === c.slug ? 'page' : undefined}
                  className={`flex min-h-12 items-center border-b border-white/10 text-base font-medium last:border-0 ${
                    here === c.slug ? 'text-vibe-pink' : 'text-white/85'
                  }`}
                >
                  {c.full}
                </Link>
              ))}
            </nav>
            {/* `lg:border-t-0`: lg:stä ylöspäin kategoriat piiloutuvat ja tästä
                tulee paneelin ensimmäinen elementti, jolloin oma yläviiva
                asettuisi kiinni paneelin omaan yläviivaan. */}
            <nav
              aria-label={n.utilityNavLabel}
              className="mx-auto max-w-7xl border-t border-white/10 px-4 py-2 lg:border-t-0"
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
                    here === s.slug ? 'text-vibe-pink' : 'text-white/85'
                  }`}
                >
                  {s.label}
                </Link>
              ))}
            </nav>
            {/* Verkostovalikko. Se asui aiemmin tummassa apupalkissa, joka on
                nyt poistettu; työpöydällä se on kategoriarivin oikeassa
                reunassa, mobiilissa täällä. Ilman tätä koko muu verkosto
                katoaisi puhelimelta. */}
            <div className="mx-auto max-w-7xl border-t border-white/10 px-4 py-3">
              <div className="lv-eco-compact">
                <EcosystemMenu lang={lang} currentDomain="laplandgifts.com" variant="dark" />
              </div>
            </div>
            {/* Sama valitsin kuin ylärivillä, mutta näkyvällä labelilla ja
                täysleveänä. Kaksoiskappale on tarkoituksellinen: kapealla
                ruudulla ylärivin valitsin on pieni, ja tämä on se paikka josta
                toimitusmaa oikeasti vaihdetaan.
                text-base = 16 px: pienempi koko saa iOS:n zoomaamaan kenttään. */}
            {countrySelect(
              'mx-auto flex max-w-7xl flex-wrap border-t border-white/10 px-4 py-3 lg:hidden',
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
