import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ShopNav from '../components/ShopNav'
// components/Footer on tämän sivuston kääre jaetun SharedFooterin ympärillä.
// Affiliate-disclosure renderöityy sen bottom stripissä (footer-only tällä
// sivustolla, sama kuin Home.tsx ja MoominMugs.tsx), joten CTA-sivu ei
// tarvitse erillistä disclosure-komponenttia.
import Footer from '../components/Footer'
import { AFFILIATE_REL, PARTNERS, partnerHref } from '../data/partners'
import { trackAffiliateClick } from '../lib/analytics'
import { useLang, useLocalePath } from '../i18n/useLang'

/**
 * Opassivu: pakuri eli pakurikääpä. Kohdetermi on suomenkielinen ("pakuri"),
 * joten sisältö on kirjoitettu suomeksi ja englanniksi — muut kymmenen kieltä
 * näkevät englannin, sama malli kuin /harvinaiset-muumimukit (ks.
 * routesMeta.test.ts EN_FI_ONLY).
 *
 * 🔴 EI hintavertailua eikä "pakurikääpä hinta" -kulmaa: se on ostajan ja
 * myyjän intentti, jota kumppanin oma kauppa palvelee. Tämä sivu palvelee
 * tietointenttiä ja OHJAA kumppanille (Ruohonjuuri sijoittuu termillä jo
 * itsekin — emme kilpaile omaa kumppania vastaan, nousemme sisällöllä).
 *
 * 🔴 EI TERVEYSVÄITTEITÄ. Elintarvikkeista ei saa EU:ssa esittää
 * lääkkeellisiä väitteitä, eikä pakurille ole hyväksyttyjä terveysväitteitä.
 * Sivu sanoo tämän auki lukijalle — se on samalla sivun rehellisyyslupaus.
 * Turvallisuuskappaleen yhteisvaikutukset ovat valmistajan omasta
 * pakkausvaroituksesta (ks. products.ts kaapa-mushrooms-pakuri-powder).
 *
 * Ruohonjuuri-linkkien dest-URLit verifioitu livenä 15.8.2026 selain-UA:lla
 * (200 + oikea title + pakuri-sisältö bodyssä):
 *   - /collections/pakuri-ja-muut-sienet  "Pakuri ja muut funktionaaliset sienet"
 *   - /products/kaavi-porcini-pakurikaaparouhe-100-g
 *   - /products/puhdistamo-pakuriuutejauhe-instant-pakuri-28-g
 */

const RJ = PARTNERS.ruohonjuuri

/** Verifioidut kohdesivut (luettu ja testattu 15.8.2026). */
const RJ_COLLECTION = 'https://www.ruohonjuuri.fi/collections/pakuri-ja-muut-sienet'
const RJ_CHUNKS = 'https://www.ruohonjuuri.fi/products/kaavi-porcini-pakurikaaparouhe-100-g'
const RJ_INSTANT = 'https://www.ruohonjuuri.fi/products/puhdistamo-pakuriuutejauhe-instant-pakuri-28-g'

interface Copy {
  h1: string
  lead: string
  whatTitle: string
  what: { title: string; body: string }[]
  useTitle: string
  useIntro: string
  useSteps: { title: string; body: string }[]
  researchTitle: string
  researchBody: string[]
  northTitle: string
  northBody: string[]
  buyTitle: string
  buyIntro: string
  buyCta: string
  buyChunksLabel: string
  buyChunks: string
  buyInstantLabel: string
  buyInstant: string
  ownCatalog: string
  ownCatalogLinks: { slug: string; label: string }[]
  categoryNote: string
  categoryCta: string
}

const fi: Copy = {
  h1: 'Pakuri: mitä se on ja miten sitä käytetään',
  lead:
    'Pakuri eli pakurikääpä (Inonotus obliquus) on koivussa elävä sieni, jonka musta, halkeillut kasvannainen on haudutettu juomaksi pohjoisessa vuosisatojen ajan. Viime vuosina siitä on kasvanut suomalaisten luonnontuotevalmistajien tunnetuimpia tuotteita — ja samalla aihe, josta liikkuu enemmän väitteitä kuin näyttöä. Tämä sivu kertoo, mitä pakuri on, miten sitä käytetään ja mitä tutkimus sanoo — ja mitä se ei sano.',
  whatTitle: 'Mikä pakuri on',
  what: [
    {
      title: 'Pahka, ei itiöemä',
      body:
        'Koivun kyljessä näkyvä musta möhkäle ei ole käävän itiöemä vaan sienen steriili rihmastopahka. Sieni elää puun sisällä ja työntää pahkan ulos rungon vauriokohdasta; pinta on hiilenmustaa ja halkeillutta, sisus ruosteenruskeaa ja korkkimaista.',
    },
    {
      title: 'Kasvaa hitaasti koivussa',
      body:
        'Keruukokoinen pahka on kasvanut elävässä koivussa vuosia. Hidas kasvu tekee luonnonpakurista rajallisen raaka-aineen — ja on syy siihen, miksi pakuria myös viljellään Suomessa ymppäämällä sientä talousmetsien koivuihin.',
    },
    {
      title: 'Pitkä perinne juomana',
      body:
        'Pakurista haudutettua juomaa on juotu pohjoisessa ja idässä kauan ennen sanaa superfood, ja Suomessa se on tuttu myös pula-ajan kahvinkorvikkeena. Maku on mieto ja maanläheinen, ja monen mielestä siinä on vaniljan vivahde.',
    },
  ],
  useTitle: 'Näin pakuria käytetään',
  useIntro:
    'Pakuria myydään kolmessa muodossa, ja ne eroavat lähinnä vaivan määrässä: rouhe vaatii hauduttamisen, uutejauhe ja tinktuura eivät. Kaikissa pätee sama perussääntö — annostus pakkauksen ohjeen mukaan, ei sen yli.',
  useSteps: [
    {
      title: 'Rouhe: hidas haudutus',
      body:
        'Perinteisin muoto. Karkeaa rouhetta haudutetaan miedolla lämmöllä — ei poreilevassa kiehunnassa — vähintään puolisen tuntia, ja moni antaa pannun hautua tunteja. Sama rouhe-erä kestää useamman hauduttamisen ennen kuin maku laimenee.',
    },
    {
      title: 'Uutejauhe: lusikallinen kuumaan veteen',
      body:
        'Uutejauhe liukenee suoraan kuumaan veteen tai kahviin ilman hauduttamista. Se on tiiviimpää kuin rouhe, joten valmistajan ilmoittama päiväannos on raja eikä suositus — tiiviys on koko muodon idea.',
    },
    {
      title: 'Tinktuura: tippoina',
      body:
        'Neste, jota annostellaan tipoittain veteen tai suoraan kielelle. Kevyin muoto kokeiluun ja matkalle: ei hauduttamista, ei astioita, ja 50 millilitran pullo kulkee käsimatkatavarassa.',
    },
  ],
  researchTitle: 'Mitä tutkimus sanoo — ja mitä se ei sano',
  researchBody: [
    'Pakurista on julkaistu runsaasti solu- ja eläintutkimuksia: sen yhdisteitä, kuten beetaglukaaneja, polyfenoleja ja betuliinijohdannaisia, on tutkittu laboratoriossa. Ihmisillä tehtyjä kliinisiä tutkimuksia on kuitenkin hyvin vähän, eikä niiden perusteella voi sanoa, että pakuri hoitaisi tai ehkäisisi yhtäkään sairautta.',
    'Tämä ei ole vain varovaisuutta vaan lainsäädäntöä: elintarvikkeista ei saa EU:ssa esittää lääkkeellisiä väitteitä, eikä pakurille ole hyväksytty yhtään terveysväitettä. Jos myyjä lupaa pakurin parantavan jotakin, väite on sekä katteeton että laiton. Rehellisin tapa suhtautua pakuriin on sama kuin hyvään teehen: juoma, jolla on pitkä perinne ja oma maku — ei lääke.',
    'Pakuri ei myöskään sovi kaikille. Valmistajat varoittavat pakkauksissaan yhteisvaikutuksista muun muassa verenohennuslääkkeiden ja antibioottien kanssa, ja pakuri sisältää runsaasti oksalaattia — senkin vuoksi annostus pidetään pakkauksen ohjeessa. Jos käytät säännöllistä lääkitystä, kysy lääkäriltä ennen kuin otat pakurin tavaksi.',
  ],
  northTitle: 'Miksi pohjoinen pakuri',
  northBody: [
    'Pakurin irrottaminen elävästä puusta ei kuulu jokamiehenoikeuksiin, vaan keruuseen tarvitaan maanomistajan lupa. Siksi suomalainen pakuri on harvinaisen jäljitettävää: valmistajat kertovat keruualueensa, osa keruusta tehdään sertifioiduilta luomukeruualueilta, ja esimerkiksi Kääpä Mushrooms sekä kerää että viljelee pakuria suomalaisissa koivikoissa.',
    'Pohjoisen lyhyt kasvukausi tekee pakurista hitaan uusiutumaan, ja juuri siksi jäljitettävyys ratkaisee: kun raaka-aine kasvaa keruukokoon vuosia, on eri asia ostaa pakuria valmistajalta, joka kertoo mistä pahka on peräisin, kuin nimettömältä välikädeltä.',
  ],
  buyTitle: 'Mistä pakuria ostetaan',
  buyIntro:
    'Kumppanimme Ruohonjuuri pitää pakuria ja muita funktionaalisia sieniä omana osastonaan: valikoimassa on suomalaisia valmistajia rouheesta uutejauheeseen ja tinktuuraan. Kauppa toimittaa EU:n tulli- ja veroalueelle.',
  buyCta: 'Pakuri ja muut funktionaaliset sienet Ruohonjuuressa',
  buyChunksLabel: 'Haudutettavaksi:',
  buyChunks: 'Kaavi Porcini pakurikääpärouhe 100 g',
  buyInstantLabel: 'Kuumaan veteen:',
  buyInstant: 'Puhdistamo instant-pakuri 28 g',
  ownCatalog: 'Neljä pakurituotetta on myös omassa katalogissamme:',
  ownCatalogLinks: [
    { slug: 'kaapa-mushrooms-pakuri-powder', label: 'Kääpä Mushrooms uutejauhe' },
    { slug: 'kaavi-chaga-chunks', label: 'Kaavi Porcini rouhe' },
    { slug: 'puhdistamo-instant-chaga', label: 'Puhdistamo instant' },
    { slug: 'foodin-chaga-tincture', label: 'Foodin tinktuura' },
  ],
  categoryNote: 'Muut pohjoiset luonnontuotteet — marjajauheet, kuusenkerkkä ja yrtit — löytyvät kategoriasta',
  categoryCta: 'Marjajauheet ja superfoodit',
}

const en: Copy = {
  h1: 'Chaga (pakuri): what it is and how to use it',
  lead:
    'Pakuri is the Finnish name for chaga (Inonotus obliquus), a fungus that lives in birch trees. Its black, cracked growth has been simmered into a drink in the north for centuries, and in recent years it has become one of the best-known products of Finnish wild-food producers — and a topic with more claims in circulation than evidence. This page covers what chaga is, how it is used, and what research says — and does not say.',
  whatTitle: 'What chaga is',
  what: [
    {
      title: 'A sterile conk, not a fruiting body',
      body:
        'The black lump on the side of a birch is not the fungus’s fruiting body but a sterile mass of mycelium. The fungus lives inside the tree and pushes the conk out through a wound in the trunk; the surface is coal black and cracked, the inside rust brown and cork-like.',
    },
    {
      title: 'Grows slowly in living birch',
      body:
        'A harvest-sized conk has grown in a living birch for years. The slow growth makes wild chaga a limited raw material — and is the reason chaga is also cultivated in Finland by inoculating birches in managed forests.',
    },
    {
      title: 'A long tradition as a drink',
      body:
        'A drink simmered from chaga was drunk in the north and east long before the word superfood, and in Finland it is also remembered as a wartime coffee substitute. The taste is mild and earthy, and many find a hint of vanilla in it.',
    },
  ],
  useTitle: 'How chaga is used',
  useIntro:
    'Chaga is sold in three forms, which differ mainly in effort: chunks need simmering, extract powder and tincture do not. One rule applies to all of them — dose according to the package, never above it.',
  useSteps: [
    {
      title: 'Chunks: a slow simmer',
      body:
        'The most traditional form. Coarse chunks are simmered on low heat — not a rolling boil — for half an hour at least, and many let the pot steep for hours. The same batch of chunks survives several brews before the flavour fades.',
    },
    {
      title: 'Extract powder: a spoonful in hot water',
      body:
        'Extract powder dissolves straight into hot water or coffee with no simmering. It is more concentrated than chunks, so the maker’s stated daily dose is a limit, not a suggestion — concentration is the whole point of the form.',
    },
    {
      title: 'Tincture: as drops',
      body:
        'A liquid dosed in drops into water or straight onto the tongue. The lightest form for trying chaga out or for travel: no simmering, no pots, and a 50 ml bottle travels in hand luggage.',
    },
  ],
  researchTitle: 'What research says — and what it does not',
  researchBody: [
    'A lot of cell and animal research has been published on chaga: its compounds, such as beta-glucans, polyphenols and betulin derivatives, have been studied in the laboratory. Clinical studies in humans are very few, however, and they do not support saying that chaga treats or prevents any disease.',
    'This is not just caution but law: in the EU, medicinal claims may not be made about foods, and not a single health claim has been approved for chaga. If a seller promises chaga will cure something, the claim is both unfounded and illegal. The honest way to approach chaga is the same as good tea: a drink with a long tradition and a taste of its own — not a medicine.',
    'Chaga does not suit everyone either. Makers warn on their packaging about interactions with blood thinners and antibiotics among others, and chaga is high in oxalates — another reason to keep to the dose on the package. If you take regular medication, ask your doctor before making chaga a habit.',
  ],
  northTitle: 'Why northern chaga',
  northBody: [
    'Taking chaga from a living tree is not covered by Finland’s everyman’s rights: harvesting needs the landowner’s permission. That makes Finnish chaga unusually traceable — producers name their harvest areas, some of the harvest comes from certified organic collection areas, and Kääpä Mushrooms, for example, both harvests and cultivates chaga in Finnish birch forests.',
    'The short northern growing season makes chaga slow to renew, and that is exactly why traceability matters: when the raw material takes years to reach harvest size, buying from a producer who tells you where the conk came from is a different thing from buying from an anonymous middleman.',
  ],
  buyTitle: 'Where to buy chaga',
  buyIntro:
    'Our partner Ruohonjuuri keeps chaga and other functional mushrooms as a section of their own, with Finnish producers from chunks to extract powder and tincture. The shop delivers within the EU customs and tax area.',
  buyCta: 'Chaga and functional mushrooms at Ruohonjuuri',
  buyChunksLabel: 'For simmering:',
  buyChunks: 'Kaavi Porcini chaga chunks 100 g',
  buyInstantLabel: 'For hot water:',
  buyInstant: 'Puhdistamo instant chaga 28 g',
  ownCatalog: 'Four chaga products are also in our own catalogue:',
  ownCatalogLinks: [
    { slug: 'kaapa-mushrooms-pakuri-powder', label: 'Kääpä Mushrooms extract powder' },
    { slug: 'kaavi-chaga-chunks', label: 'Kaavi Porcini chunks' },
    { slug: 'puhdistamo-instant-chaga', label: 'Puhdistamo instant' },
    { slug: 'foodin-chaga-tincture', label: 'Foodin tincture' },
  ],
  categoryNote: 'The rest of our northern wild foods — berry powders, spruce sprouts and herbs — live in the category',
  categoryCta: 'Arctic berry powders and superfoods',
}

/** Affiliate-ulkolinkki: href buyLink-säännöillä, klikki analytiikkaan. */
function RuohonjuuriLink({
  dest,
  sid,
  className,
  children,
}: {
  dest: string
  sid: string
  className: string
  children: React.ReactNode
}) {
  const href = partnerHref(RJ, dest, sid)
  return (
    <a
      href={href}
      target="_blank"
      rel={AFFILIATE_REL}
      className={className}
      onClick={() => trackAffiliateClick('ruohonjuuri', `guide:${sid}`, href)}
    >
      {children}
    </a>
  )
}

export default function Pakuri() {
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
          {/* ── Mikä pakuri on ────────────────────────────────────────── */}
          <section className="mt-10 md:mt-14">
            <h2 className="font-heading text-3xl tracking-wide text-gray md:text-4xl">{t.whatTitle}</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {t.what.map((w) => (
                <div key={w.title} className="rounded-2xl border border-line bg-card p-5">
                  <h3 className="font-heading text-2xl tracking-wide text-gray">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{w.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Käyttö: kolme muotoa ──────────────────────────────────── */}
          <section className="mt-12">
            <h2 className="font-heading text-3xl tracking-wide text-gray md:text-4xl">{t.useTitle}</h2>
            <p className="mt-2 max-w-3xl text-muted">{t.useIntro}</p>
            <ol className="mt-6 space-y-4">
              {t.useSteps.map((s, i) => (
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

          {/* ── Tutkimus: rehellisesti, ei terveysväitteitä ───────────── */}
          <section className="mt-12">
            <h2 className="font-heading text-3xl tracking-wide text-gray md:text-4xl">{t.researchTitle}</h2>
            {t.researchBody.map((p) => (
              <p key={p.slice(0, 24)} className="mt-4 max-w-3xl leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </section>

          {/* ── Pohjoinen keruu ───────────────────────────────────────── */}
          <section className="mt-12">
            <h2 className="font-heading text-3xl tracking-wide text-gray md:text-4xl">{t.northTitle}</h2>
            {t.northBody.map((p) => (
              <p key={p.slice(0, 24)} className="mt-4 max-w-3xl leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </section>

          {/* ── Osto-CTA: Ruohonjuuri ensisijaisena ───────────────────── */}
          <section className="mt-12 rounded-3xl border border-line bg-card p-6 md:p-9">
            <h2 className="font-heading text-3xl tracking-wide text-gray md:text-4xl">{t.buyTitle}</h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-muted">{t.buyIntro}</p>
            <div className="mt-6">
              <RuohonjuuriLink
                dest={RJ_COLLECTION}
                sid="fi_pakuri_osta_cta"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-amber px-7 py-4 text-lg font-medium text-white transition-colors hover:bg-amber/90"
              >
                {t.buyCta}
                <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
              </RuohonjuuriLink>
            </div>
            <ul className="mt-5 space-y-2 text-sm text-muted">
              <li>
                {t.buyChunksLabel}{' '}
                <RuohonjuuriLink
                  dest={RJ_CHUNKS}
                  sid="fi_pakuri_rouhe"
                  className="font-medium text-amber underline-offset-2 hover:underline"
                >
                  {t.buyChunks}
                </RuohonjuuriLink>
              </li>
              <li>
                {t.buyInstantLabel}{' '}
                <RuohonjuuriLink
                  dest={RJ_INSTANT}
                  sid="fi_pakuri_instant"
                  className="font-medium text-amber underline-offset-2 hover:underline"
                >
                  {t.buyInstant}
                </RuohonjuuriLink>
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
              {t.categoryNote}{' '}
              <Link
                to={to('/superfoods')}
                className="font-medium text-amber underline-offset-2 hover:underline"
              >
                {t.categoryCta}
              </Link>
              .
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
