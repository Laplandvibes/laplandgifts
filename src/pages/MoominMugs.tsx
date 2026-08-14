import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ShopNav from '../components/ShopNav'
// components/Footer on tämän sivuston kääre jaetun SharedFooterin ympärillä.
// Affiliate-disclosure renderöityy sen bottom stripissä (footer-only tällä
// sivustolla, sama kuin Home.tsx), joten CTA-sivu ei tarvitse erillistä
// disclosure-komponenttia.
import Footer from '../components/Footer'
import { AFFILIATE_REL, PARTNERS, partnerHref } from '../data/partners'
import { trackAffiliateClick } from '../lib/analytics'
import { useLang, useLocalePath } from '../i18n/useLang'

/**
 * Keräilijäsivu: harvinaiset Arabian muumimukit ja vuosimallin tunnistaminen.
 * Kohdetermi on suomenkielinen ("harvinaiset muumimukit"), joten sisältö on
 * kirjoitettu suomeksi ja englanniksi — muut kymmenen kieltä näkevät
 * englannin, sama malli kuin /gift-guides ja /shipping (ks. routesMeta.test.ts
 * EN_FI_ONLY).
 *
 * 🔴 EI päätermiä "muumimuki": kumppanimme Nordic Nest sijoittuu sillä jo
 * itse, eikä omaa kumppania vastaan kannata kilpailla. Sivu tähtää
 * keräilijäintentioon, jota kumppanin kategoriasivu ei palvele.
 *
 * 🔴 ARVOISTA EI TÄSMÄLUKUJA. Muumimukeilla ei ole virallista hinnastoa, ja
 * keksitty eurotaulukko olisi juuri sitä mitä sisältösäännöt kieltävät.
 * Suuruusluokat ("tuhansia euroja", "kymmenissä–sadoissa euroissa") ovat
 * yleisesti tunnettua keräilymarkkinatietoa ilman katteettomia lupauksia.
 *
 * 🔴 Nordic Nest -linkkien dest on nordicnest.FI: mitattu 3.8.2026, että
 * .com-syvälinkki putoaa Adtractionin interstitiaalissa varasivulle
 * (partners.ts nordicnest-kommentti). Kaikki kolme dest-URLia + klikkiketjut
 * verifioitu livenä 14.8.2026 (200 + oikea title + meta-refresh täsmälleen
 * dest-sivulle at_gd-evästeellä).
 */

const NN = PARTNERS.nordicnest
const NB = PARTNERS.nordicbuddies

/** Verifioidut kohdesivut (luettu ja testattu 14.8.2026). */
const NN_CATEGORY = 'https://www.nordicnest.fi/tarjoilu--kattaus/mukit--kupit/muumimukit/'
const NN_SEASON_MUG = 'https://www.nordicnest.fi/tuotemerkit/moomin-arabia/muumimuki-kesa-2025/'
const NN_BRAND = 'https://www.nordicnest.fi/tuotemerkit/moomin-arabia/'
const NB_MOOMIN = 'https://nordicbuddies.com/collections/moomin-by-nordicbuddies'

interface Copy {
  h1: string
  lead: string
  whyTitle: string
  why: { title: string; body: string }[]
  idTitle: string
  idIntro: string
  idSteps: { title: string; body: string }[]
  valueTitle: string
  valueBody: string[]
  buyTitle: string
  buyIntro: string
  buyCta: string
  buySeasonLabel: string
  buySeason: string
  buyBrandLabel: string
  buyBrand: string
  ownCatalog: string
  ownCatalogLinks: { slug: string; label: string }[]
  nbNote: string
  nbCta: string
}

const fi: Copy = {
  h1: 'Harvinaiset muumimukit',
  lead:
    'Arabia on valmistanut muumimukeja vuodesta 1990: kuviot on sovittanut Tove Slotte Tove Janssonin alkuperäiskuvitusten pohjalta, ja sarjan ympärille on kasvanut kokonainen keräilyharrastus. Kun kuvio poistuu tuotannosta, sen hinta irtoaa kaupan hyllyhinnasta. Tältä sivulta näet, mikä mukin arvon ratkaisee ja mistä vuosimallin tunnistaa.',
  whyTitle: 'Mikä tekee mukista arvokkaan',
  why: [
    {
      title: 'Lopetetut kuviot',
      body:
        'Suurin osa arvosta syntyy yksinkertaisesta syystä: kuviota ei enää valmisteta. Uusia kappaleita ei tule, ja hyväkuntoisten määrä vain laskee — jokainen sirunnut korva ja konepesussa haalistunut pinta pienentää tarjontaa pysyvästi.',
    },
    {
      title: 'Lyhyet tuotantokaudet',
      body:
        'Mitä lyhyemmän aikaa kuviota ehdittiin valmistaa, sitä harvempi sen omistaa. Pari vuotta tuotannossa ollut kuvio on lähtökohtaisesti kiinnostavampi kuin parikymmentä vuotta valikoimassa pysynyt vakiokuvio.',
    },
    {
      title: 'Erikoiserät',
      body:
        'Kaikkia mukeja ei koskaan myyty tavallisessa kaupassa. Esimerkiksi Fazerin kanssa tehdyt yhteistyömukit jaettiin rajattuja reittejä pitkin, ja juuri siksi ne ovat keräilijälistojen kärjessä: kysyntä on sama kuin muilla, tarjonta murto-osa.',
    },
    {
      title: 'Kausimukit',
      body:
        'Kesä- ja talvimukit myydään vain oman kautensa ajan, sitten valmistus loppuu. Moni nyt arvokas muki oli aikanaan tavallinen sesonkiostos — kauden päättyminen on sarjaan sisäänrakennettu harvinaistumismekanismi.',
    },
  ],
  idTitle: 'Näin tunnistat vuosimallin',
  idIntro:
    'Kolme asiaa yksilöi mukin: pohjaleima, kuvion virallinen nimi ja tuotantovuodet. Kaikki kolme kannattaa tarkistaa ennen ostoa tai myyntiä.',
  idSteps: [
    {
      title: 'Käännä muki ympäri ja lue pohjaleima',
      body:
        'Leima on nopein tapa haarukoida ikä. Helsingin Arabianrannan tehtaan aikaan leimassa lukee Arabian lisäksi Finland; tehtaan sulkemisen (2016) jälkeen valmistetuissa mukeissa ei. Tarkempi ajoitus tehdään vertaamalla leimaa valmistajan ja keräilijäyhteisöjen leimalistoihin.',
    },
    {
      title: 'Selvitä kuvion nimi',
      body:
        'Jokaisella kuviolla on virallinen nimi, ja sama hahmo esiintyy kymmenissä eri kuvioissa — pelkkä "Nuuskamuikkunen-muki" ei siis yksilöi vielä mitään. Uudemmissa mukeissa nimi lukee pohjan tarrassa; vanhemmissa kuvio tunnistetaan vertaamalla valmistajan kuviolistaan.',
    },
    {
      title: 'Tarkista tuotantovuodet',
      body:
        'Kun nimi on selvillä, tuotantovuodet löytyvät Moomin by Arabian omista listauksista ja keräilijäyhteisöjen taulukoista. Vuosiväli kertoo suoraan, onko käsissä lyhyen kauden harvinaisuus vai pitkän linjan vakiokuvio.',
    },
  ],
  valueTitle: 'Mitä harvinaisuudesta maksetaan',
  valueBody: [
    'Muumimukeilla ei ole virallista hinnastoa, ja sama muki voi lähteä kahdesta huutokaupasta hyvin eri hintaan. Suuruusluokat ovat silti vakiintuneet: arvokkaimmat harvinaisuudet — erikoiserät ja varhaiset, lyhyeen jääneet kuviot — ovat vaihtaneet omistajaa tuhansilla euroilla, ja tavallisemmat tuotannosta poistuneet kuviot liikkuvat kymmenissä tai sadoissa euroissa. Vielä valikoimassa oleva vakiokuvio maksaa käytettynäkin suunnilleen kaupan hinnan.',
    'Kunto ratkaisee enemmän kuin moni uskoo: siru, halkeama tai konepesun syömä kuvio vie arvosta valtaosan, ja alkuperäispakkaus nostaa sitä. Jos aiot myydä, pese muki käsin äläkä hinnoittele yhden toteutuneen huutokaupan perusteella — seuraa useampaa.',
  ],
  buyTitle: 'Mistä nykymallit ostetaan',
  buyIntro:
    'Keräilykuviot löytyvät huutokaupoista ja kirpputoreilta, mutta valikoimassa olevat kuviot ja kuluvan kauden kausimuki ostetaan tavallisesta kaupasta — ja moni tämän päivän hyllymuki on huomisen lopetettu kuvio. Kumppanimme Nordic Nest pitää muumimukeja omana osastonaan.',
  buyCta: 'Muumimukit Nordic Nestissä',
  buySeasonLabel: 'Kausimuki:',
  buySeason: 'Muumimuki kesä 2025',
  buyBrandLabel: 'Koko valikoima:',
  buyBrand: 'Moomin Arabia Nordic Nestissä',
  ownCatalog: 'Kaksi mukia on myös omassa katalogissamme:',
  ownCatalogLinks: [
    { slug: 'arabia-moomin-mug-snufkin', label: 'Nuuskamuikkunen' },
    { slug: 'arabia-moomin-mug-friendship', label: 'Ystävyys' },
  ],
  nbNote:
    'Jos mukit ovat jo hyllyssä, virallisesti lisensoituja Muumi-vaatteita ja -asusteita tekee suomalainen Nordicbuddies.',
  nbCta: 'Moomin by Nordicbuddies',
}

const en: Copy = {
  h1: 'Rare Moomin mugs',
  lead:
    'Arabia has made Moomin mugs since 1990: the designs are adapted by Tove Slotte from Tove Jansson’s original illustrations, and a whole collecting scene has grown around the series. Once a design is retired, its price detaches from the shop shelf price. This page shows what decides a mug’s value and how to identify the year of yours.',
  whyTitle: 'What makes a mug valuable',
  why: [
    {
      title: 'Retired designs',
      body:
        'Most of the value comes from a simple fact: the design is no longer made. No new pieces appear, and the number of good-condition ones only falls — every chipped handle and dishwasher-faded print shrinks the supply for good.',
    },
    {
      title: 'Short production runs',
      body:
        'The shorter the time a design was in production, the fewer people own it. A design made for a couple of years is inherently more interesting than a standard one that stayed in the range for two decades.',
    },
    {
      title: 'Special editions',
      body:
        'Some mugs were never sold in ordinary shops at all. The collaboration mugs made with Fazer, for example, were distributed through limited channels — which is exactly why they sit at the top of collector lists: demand is the same as for any mug, supply a fraction.',
    },
    {
      title: 'Seasonal mugs',
      body:
        'Summer and winter mugs are sold only for their own season, then production stops. Many mugs that are valuable now were ordinary seasonal purchases in their day — the end of the season is a rarity mechanism built into the series.',
    },
  ],
  idTitle: 'How to identify the year',
  idIntro:
    'Three things pin a mug down: the base stamp, the official name of the design, and its production years. Check all three before buying or selling.',
  idSteps: [
    {
      title: 'Turn the mug over and read the base stamp',
      body:
        'The stamp is the fastest way to bracket the age. Mugs made at the Arabia factory in Helsinki carry Finland in the stamp alongside Arabia; mugs made after the factory closed (2016) do not. For a closer date, compare the stamp against the maker’s and collector communities’ stamp charts.',
    },
    {
      title: 'Find the official design name',
      body:
        'Every design has an official name, and the same character appears in dozens of designs — “a Snufkin mug” on its own identifies nothing. On newer mugs the name is on the base sticker; older ones are identified by comparing the artwork to the maker’s design list.',
    },
    {
      title: 'Check the production years',
      body:
        'Once you have the name, the production years are listed by Moomin by Arabia and in collector communities’ tables. The year range tells you directly whether you are holding a short-run rarity or a long-running standard design.',
    },
  ],
  valueTitle: 'What rarities actually sell for',
  valueBody: [
    'There is no official price list for Moomin mugs, and the same mug can leave two auctions at very different prices. The orders of magnitude are settled, though: the most valuable rarities — special editions and early, short-lived designs — have changed hands for thousands of euros, while more common retired designs move in the tens to hundreds. A design still in production costs roughly the shop price even second-hand.',
    'Condition matters more than most people think: a chip, a crack or a dishwasher-worn print takes most of the value away, and the original box adds to it. If you plan to sell, wash the mug by hand and never price it on a single realised auction — follow several.',
  ],
  buyTitle: 'Where to buy current designs',
  buyIntro:
    'Collectible designs are found at auctions and flea markets, but designs still in the range and the current seasonal mug are bought new — and many of today’s shelf mugs are tomorrow’s retired designs. Our partner Nordic Nest keeps Moomin mugs as a section of their own.',
  buyCta: 'Moomin mugs at Nordic Nest',
  buySeasonLabel: 'Seasonal mug:',
  buySeason: 'Moomin mug summer 2025',
  buyBrandLabel: 'Full range:',
  buyBrand: 'Moomin Arabia at Nordic Nest',
  ownCatalog: 'Two of the mugs are also in our own catalogue:',
  ownCatalogLinks: [
    { slug: 'arabia-moomin-mug-snufkin', label: 'Snufkin' },
    { slug: 'arabia-moomin-mug-friendship', label: 'Friendship' },
  ],
  nbNote:
    'If the mugs are already on your shelf, officially licensed Moomin clothing and accessories are made by the Finnish brand Nordicbuddies.',
  nbCta: 'Moomin by Nordicbuddies',
}

/** Affiliate-ulkolinkki: href buyLink-säännöillä, klikki analytiikkaan. */
function PartnerLink({
  partnerId,
  dest,
  sid,
  className,
  children,
}: {
  partnerId: 'nordicnest' | 'nordicbuddies'
  dest: string
  sid: string
  className: string
  children: React.ReactNode
}) {
  const partner = partnerId === 'nordicnest' ? NN : NB
  const href = partnerHref(partner, dest, sid)
  return (
    <a
      href={href}
      target="_blank"
      rel={AFFILIATE_REL}
      className={className}
      onClick={() => trackAffiliateClick(partnerId, `guide:${sid}`, href)}
    >
      {children}
    </a>
  )
}

export default function MoominMugs() {
  const lang = useLang()
  const to = useLocalePath()
  const t = lang === 'fi' ? fi : en
  return (
    <>
      <ShopNav />
      <main className="bg-sand pb-14 md:pb-20" id="main-content" tabIndex={-1}>
        <header className="border-b border-line bg-card">
          <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
            <h1 className="font-heading text-5xl tracking-wide text-gray md:text-7xl">{t.h1}</h1>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted">{t.lead}</p>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-4">
          {/* ── Miksi arvokas ─────────────────────────────────────────── */}
          <section className="mt-10 md:mt-14">
            <h2 className="font-heading text-3xl tracking-wide text-gray md:text-4xl">{t.whyTitle}</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {t.why.map((w) => (
                <div key={w.title} className="rounded-2xl border border-line bg-card p-5">
                  <h3 className="font-heading text-2xl tracking-wide text-gray">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{w.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Tunnistaminen ─────────────────────────────────────────── */}
          <section className="mt-12">
            <h2 className="font-heading text-3xl tracking-wide text-gray md:text-4xl">{t.idTitle}</h2>
            <p className="mt-2 max-w-3xl text-muted">{t.idIntro}</p>
            <ol className="mt-6 space-y-4">
              {t.idSteps.map((s, i) => (
                <li key={s.title} className="flex gap-4 rounded-2xl border border-line bg-card p-5">
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber font-heading text-xl text-white"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-medium text-gray">{s.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* ── Arvot: suuruusluokat, ei keksittyjä täsmähintoja ──────── */}
          <section className="mt-12">
            <h2 className="font-heading text-3xl tracking-wide text-gray md:text-4xl">{t.valueTitle}</h2>
            {t.valueBody.map((p) => (
              <p key={p.slice(0, 24)} className="mt-4 max-w-3xl leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </section>

          {/* ── Osto-CTA: Nordic Nest ensisijaisena ───────────────────── */}
          <section className="mt-12 rounded-3xl border border-line bg-card p-6 md:p-9">
            <h2 className="font-heading text-3xl tracking-wide text-gray md:text-4xl">{t.buyTitle}</h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-muted">{t.buyIntro}</p>
            <div className="mt-6">
              <PartnerLink
                partnerId="nordicnest"
                dest={NN_CATEGORY}
                sid="fi_muumimukit_osta_cta"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-amber px-7 py-4 text-lg font-medium text-white transition-colors hover:bg-amber/90"
              >
                {t.buyCta}
                <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
              </PartnerLink>
            </div>
            <ul className="mt-5 space-y-2 text-sm text-muted">
              <li>
                {t.buySeasonLabel}{' '}
                <PartnerLink
                  partnerId="nordicnest"
                  dest={NN_SEASON_MUG}
                  sid="fi_muumimukit_kausimuki"
                  className="font-medium text-amber underline-offset-2 hover:underline"
                >
                  {t.buySeason}
                </PartnerLink>
              </li>
              <li>
                {t.buyBrandLabel}{' '}
                <PartnerLink
                  partnerId="nordicnest"
                  dest={NN_BRAND}
                  sid="fi_muumimukit_brandisivu"
                  className="font-medium text-amber underline-offset-2 hover:underline"
                >
                  {t.buyBrand}
                </PartnerLink>
              </li>
              <li>
                {t.ownCatalog}{' '}
                {t.ownCatalogLinks.map((l, i) => (
                  <span key={l.slug}>
                    {i > 0 && ', '}
                    <Link
                      to={to(`/product/${l.slug}`)}
                      className="font-medium text-amber underline-offset-2 hover:underline"
                    >
                      {l.label}
                    </Link>
                  </span>
                ))}
                .
              </li>
            </ul>
            <p className="mt-6 border-t border-line pt-5 text-sm text-muted">
              {t.nbNote}{' '}
              <PartnerLink
                partnerId="nordicbuddies"
                dest={NB_MOOMIN}
                sid="fi_muumimukit_nordicbuddies"
                className="font-medium text-amber underline-offset-2 hover:underline"
              >
                {t.nbCta}
              </PartnerLink>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
