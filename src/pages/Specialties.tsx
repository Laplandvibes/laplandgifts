import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ShopNav from '../components/ShopNav'
// components/Footer on tämän sivuston kääre jaetun SharedFooterin ympärillä.
// Se kantaa myös verkoston affiliate-disclosuren jokaiselle kielelle, joten
// tämä sivu täyttää disclosure-vaatimuksen renderöimällä sen (sama tapa kuin
// Category.tsx ja GiftGuides.tsx).
import Footer from '../components/Footer'
import { PARTNERS, partnerHref, AFFILIATE_REL } from '../data/partners'
import { useLang, useLocalePath } from '../i18n/useLang'
import { trackAffiliateClick } from '../lib/analytics'

/**
 * Opassivu: "Finnische Spezialitäten — was lohnt sich wirklich?"
 *
 * Ostoa EDELTÄVÄ sisäänmeno /de/treats-sivulle: GSC näyttää kahdeksan
 * saksalaista "kaufen"-hakua sijoilla 27–54 ja 0 klikkiä (auditti 13.8.2026).
 * Kohdeterm "finnische spezialitäten" (480/kk). Sisältö on kirjoitettu
 * saksaksi ja englanniksi; muut kymmenen kieltä saavat englannin, samoin kuin
 * /gift-guides ja /shipping tekivät ennen käännöstään.
 *
 * 🔴 Jokainen ostolinkki kulkee data/partners.ts:n partnerHrefin kautta
 * (go.laplandvibes.com/go/suomikauppa + dest), ja jokainen dest-URL on
 * verifioitu 14.8.2026: 200 + oikea tuotenimi + varastossa. Loppuunmyytyjä
 * ei linkitetä (lakkahillo oli 14.8. loppu koko Suomikaupasta — siksi
 * leipäjuusto-osio kertoo sen rehellisesti eikä linkitä hillopurkkia).
 *
 * 🔴 Ei täsmähintoja tekstissä: opas ei ole katalogisivu eikä sillä ole
 * priceCheckedAt-vahtia. Hinta jää kaupan kerrottavaksi (sama periaate kuin
 * tuoteriveillä: ProductRail näyttää hinnan vain tarkistuspäivän kanssa).
 */

const SK = PARTNERS.suomikauppa

interface Item {
  id: string
  /** Suomikauppa-linkki. Puuttuu tuoretuotteilta ja alkoholilta, joita ei voi
   *  postittaa — silloin osio kertoo missä tuote oikeasti hankitaan. */
  buy?: { sid: string; dest: string }
  /** Sisäinen tuotesivu, jos sama tuote on katalogissa. */
  productSlug?: string
}

/** Linkkidata kielineutraalisti; tekstit tulevat COPYsta samalla id:llä. */
const ITEMS: Item[] = [
  {
    id: 'salmiakki',
    buy: {
      sid: 'de_spezialitaeten_salmiakki',
      dest: 'https://suomikauppa.fi/products/finnish-flavours-palalaku-salmiakki',
    },
    productSlug: 'finnish-flavours-palalaku-salmiakki',
  },
  {
    id: 'fazer',
    buy: {
      sid: 'de_spezialitaeten_fazer_blau',
      dest: 'https://suomikauppa.fi/products/karl-fazer-maitosuklaa-suklaalevy-180g',
    },
  },
  {
    id: 'ruisleipa',
    buy: {
      sid: 'de_spezialitaeten_ruisleipa',
      dest: 'https://suomikauppa.fi/products/oululainen-alkuperainen-jalkiuunipala-480g',
    },
  },
  {
    id: 'leipajuusto',
    // Tuoretuote: ei postilinkkiä. Tyrnihillo on rehellinen postitettava
    // vaihtoehto ja sama purkki on katalogissa.
    buy: {
      sid: 'de_spezialitaeten_tyrnihillo',
      dest: 'https://suomikauppa.fi/products/meritalo-suomalainen-tyrnihillo-310g',
    },
    productSlug: 'meritalo-tyrnihillo',
  },
  { id: 'korvapuusti' },
  {
    id: 'kuivaliha',
    buy: {
      sid: 'de_spezialitaeten_kuivaliha',
      dest: 'https://suomikauppa.fi/products/finnish-flavours-poron-kuivaliha-20g',
    },
    productSlug: 'kuivalihakundi-poro-jerky',
  },
  { id: 'lonkero' },
  { id: 'salmiakkikossu' },
  {
    id: 'terva',
    buy: {
      sid: 'de_spezialitaeten_terva_lakritz',
      dest: 'https://suomikauppa.fi/products/tervaleijona-lakritsi-32g',
    },
    productSlug: 'leijona-tar-liquorice',
  },
]

interface ItemCopy {
  name: string
  kicker: string
  body: string[]
  /** Postitus-/matkakelpoisuus yhdellä rivillä. */
  travel: string
  buyLabel?: string
  productLabel?: string
}

interface PageCopy {
  h1: string
  lead: string
  intro: string[]
  itemsH2: string
  items: Record<string, ItemCopy>
  touristH2: string
  tourist: string[]
  shippingH2: string
  shipping: string[]
  shippingLink: string
  moreH2: string
  moreTreats: string
  moreGuides: string
  moreSuperfoods: string
  adLabel: string
}

const de: PageCopy = {
  h1: 'Finnische Spezialitäten: was lohnt sich wirklich?',
  lead:
    'Neun Klassiker, ehrlich bewertet: was Finnen selbst essen, was nur im Souvenirregal existiert, und was den Postweg nach Deutschland übersteht.',
  intro: [
    'Wer aus Finnland etwas mitbringen oder nach Hause bestellen will, steht vor einem Regal, in dem Alltagslebensmittel und Touristenware direkt nebeneinander liegen. Dieser Ratgeber sortiert die bekanntesten finnischen Spezialitäten danach, ob Finnen sie tatsächlich kaufen, und ob sie eine Reise oder den Versand überstehen.',
    'Jede Bewertung ist eine Meinung aus dem Alltag, keine Werbung: Salmiakki polarisiert auch hier, und das steht dann auch so da. Bestell-Links führen zu Suomikauppa, einem finnischen Versandhändler, der Lebensmittel auch nach Deutschland schickt.',
  ],
  itemsH2: 'Die Klassiker im Einzelnen',
  items: {
    salmiakki: {
      name: 'Salmiakki',
      kicker: 'Die ehrliche Warnung zuerst',
      body: [
        'Lakritz mit Salmiak (Ammoniumchlorid) ist die finnische Süßigkeit schlechthin, und sie spaltet jede Runde in zwei Lager, meist beim ersten Stück. Salzig, scharf, für Ungeübte erst einmal ein Schreck. Finnen essen sie trotzdem tütenweise, vom Kiosk bis zum Kino.',
        'Als Mitbringsel ist genau das der Reiz: Salmiakki ist billig, leicht, praktisch unbegrenzt haltbar und garantiert ein Gesprächsthema. Weiche Palalaku-Stücke sind der mildeste Einstieg; wer es ernst meint, greift zu Fazer Super Salmiakki.',
      ],
      travel: 'Übersteht alles: leicht, unzerbrechlich, lange haltbar.',
      buyLabel: 'Palalaku-Salmiakki bei Suomikauppa',
      productLabel: 'Produktdetails im Shop ansehen',
    },
    fazer: {
      name: 'Fazer: die blaue Tafel',
      kicker: 'Echter Alltag, kein Souvenir',
      body: [
        'Die Milchschokolade im blauen Papier (Karl Fazer Maitosuklaa) liegt in jedem finnischen Supermarkt an der Kasse und in den meisten Haushalten in der Schublade. Sie ist das Gegenteil von Touristenware: Finnen verschenken sie untereinander, zum Namenstag, als Dankeschön, als Mitbringsel beim Krankenbesuch.',
        'Geschmacklich ist sie cremiger und milder als die meisten deutschen Tafeln. Wer nur ein einziges finnisches Lebensmittel mitbringt, macht mit der blauen Tafel nichts falsch.',
      ],
      travel: 'Reist gut, nur im Hochsommer schmilzt sie im Paket wie überall.',
      buyLabel: 'Karl Fazer Maitosuklaa bei Suomikauppa',
    },
    ruisleipa: {
      name: 'Ruisleipä: Roggenbrot',
      kicker: 'Das Heimweh-Lebensmittel Nummer eins',
      body: [
        'Finnisches Roggenbrot ist dunkler, saurer und dichter als deutsches, auch für deutsche Roggenbrot-Esser ein eigenes Erlebnis. Es ist das Lebensmittel, das im Ausland lebende Finnen am meisten vermissen und sich in Paketen schicken lassen.',
        'Frische Laibe halten die Reise nicht durch. Die versandfähige Form ist Jälkiuunileipä: in der Restwärme des Ofens hart getrocknetes Roggenbrot, das wochenlang hält. Oululainen Jälkiuuni ist davon der Klassiker.',
      ],
      travel: 'Frisch: nein. Jälkiuunileipä und Knäcke: problemlos.',
      buyLabel: 'Oululainen Jälkiuuni bei Suomikauppa',
    },
    leipajuusto: {
      name: 'Leipäjuusto + Moltebeeren-Marmelade',
      kicker: 'In Finnland essen, nicht verschicken',
      body: [
        'Leipäjuusto ist ein flacher, gebackener Frischkäse, der beim Kauen quietscht, daher der Spitzname „Quietschkäse“. Serviert wird er lauwarm mit Moltebeeren-Marmelade (lakkahillo), und diese Kombination ist der beste einzelne Grund, in Lappland ein Café zu betreten.',
        'Als Bestellung nach Deutschland taugt beides nur bedingt: der Käse ist ein Frischprodukt, und Moltebeeren-Marmelade ist selbst beim finnischen Versandhändler regelmäßig ausverkauft, die Beere wächst wild im Moor und wird praktisch nur von Hand gepflückt. Eine haltbare, lieferbare Alternative aus demselben Regal: Sanddorn-Marmelade von Meritalo, herb statt süß, gut zu Käse.',
      ],
      travel: 'Käse: nur vor Ort. Marmelade: oft ausverkauft, Sanddorn als Alternative.',
      buyLabel: 'Meritalo Sanddorn-Marmelade bei Suomikauppa',
      productLabel: 'Produktdetails im Shop ansehen',
    },
    korvapuusti: {
      name: 'Korvapuusti: Zimtschnecke',
      kicker: 'Frisch oder gar nicht',
      body: [
        'Die finnische Zimtschnecke unterscheidet sich von der deutschen durch Kardamom im Teig und Hagelzucker obendrauf. Sie gehört zum Nachmittagskaffee wie in Deutschland das Stück Kuchen.',
        'Ein Gebäck vom Vortag ist schon nicht mehr dasselbe, ein verschicktes erst recht nicht. Korvapuusti ist ein Grund, in Finnland ein Café zu suchen, oder zu Hause selbst zu backen. Kardamom gibt es in jedem deutschen Gewürzregal.',
      ],
      travel: 'Übersteht keinen Versand. Vor Ort essen oder selbst backen.',
    },
    kuivaliha: {
      name: 'Poron kuivaliha: Rentier-Trockenfleisch',
      kicker: 'Das lappländischste Lebensmittel auf dieser Liste',
      body: [
        'Luftgetrocknetes Rentierfleisch ist in Lappland Proviant, kein Gag: leicht, haltbar, intensiv im Geschmack. Es kostet deutlich mehr als Rind-Jerky, Rentierfleisch wird in Finnland selbst als Delikatesse gehandelt.',
        'Innerhalb der EU darf es problemlos verschickt werden; die kleinen Tüten sind ein gutes Mitbringsel für Leute, die schon alles haben.',
      ],
      travel: 'Versand innerhalb der EU problemlos; außerhalb der EU tabu (tierisches Erzeugnis).',
      buyLabel: 'Poron kuivaliha bei Suomikauppa',
      productLabel: 'Rentier-Jerky im Shop ansehen',
    },
    lonkero: {
      name: 'Lonkero: Long Drink',
      kicker: 'Gin und Grapefruit, seit 1952',
      body: [
        'Der fertig gemischte Long Drink aus Gin und Grapefruitlimonade wurde zu den Olympischen Spielen 1952 in Helsinki erfunden, damit die Bars dem Ansturm nachkamen, und blieb. Im Supermarktregal steht er heute selbstverständlicher als Bier-Mischgetränke in Deutschland.',
        'Bestellen lässt er sich nicht: finnische Händler dürfen Alkohol nicht per Post ins Ausland verkaufen. Im Urlaub eine Dose aus dem Supermarkt probieren, das Original stammt von Hartwall und heißt schlicht Original Long Drink.',
      ],
      travel: 'Kein Versand (Alkohol). Vor Ort im Supermarkt, oder Dosen im Koffer.',
    },
    salmiakkikossu: {
      name: 'Salmiakkikossu',
      kicker: 'Der Partyklassiker',
      body: [
        'Salmiakki-Likör auf Wodka-Basis, meist aus Koskenkorva, daher der Name. Schmeckt wie aufgelöstes Salzlakritz, ist deutlich süffiger als es klingt, und hat in Finnland einen festen Platz auf jeder Feier.',
        'Auch hier gilt: kein Postversand für Alkohol. Die Flasche gibt es im Alko (dem staatlichen Alkoholgeschäft) und am Flughafen im Duty-free.',
      ],
      travel: 'Kein Versand (Alkohol). Alko oder Duty-free am Flughafen.',
    },
    terva: {
      name: 'Terva: Teer',
      kicker: 'Klingt falsch, ist echt',
      body: [
        'Holzteer aus Kiefern ist ein alter finnischer Werkstoff, und ein Aroma: rauchig, harzig, irgendwo zwischen Lagerfeuer und Sauna. Es steckt in Bonbons, Sirup, Eis und Seife, und wie Salmiakki trennt es Besucher zuverlässig in zwei Lager.',
        'Tervaleijona-Pastillen sind der klassische Einstieg im Taschenformat. Teerseife wiederum riecht nach finnischer Sauna und ist das seltene Souvenir, das täglich benutzt wird statt zu verstauben.',
      ],
      travel: 'Pastillen und Seife reisen und versenden sich problemlos.',
      buyLabel: 'Tervaleijona bei Suomikauppa',
      productLabel: 'Teer-Lakritz im Shop ansehen',
    },
  },
  touristH2: 'Und was ist Touristenkram?',
  tourist: [
    'Die einfachste Faustregel: was es nur in Souvenirläden gibt, essen Finnen nicht. Plüsch-Rentiere, „Lapland“-Tassen und Beerenliköre in Schneemann-Flaschen sind für Besucher gemacht, was nicht schlimm ist, solange man es weiß und nicht für die Landesküche hält.',
    'Bei Lebensmitteln lohnt der Blick aufs Etikett: steht dort ein finnischer Hersteller und eine finnische Adresse, ist es meist dieselbe Ware, die auch im Supermarkt liegt, nur im Souvenirladen teurer. Alles auf dieser Seite gibt es in jedem normalen finnischen Lebensmittelgeschäft.',
  ],
  shippingH2: 'Was den Versand nach Deutschland übersteht',
  shipping: [
    'Kurzfassung: Trockenes und Verpacktes reist gut (Salmiakki, Schokolade, Jälkiuunileipä, Trockenfleisch, Teer-Pastillen), Frisches gar nicht (Leipäjuusto, Korvapuusti), und Alkohol darf nicht verschickt werden (Lonkero, Salmiakkikossu). Fleischerzeugnisse wie Rentier-Jerky dürfen innerhalb der EU verschickt werden, in Nicht-EU-Länder nicht.',
  ],
  shippingLink: 'Alle Liefergebiete unserer Partnershops im Detail',
  moreH2: 'Weiterstöbern',
  moreTreats: 'Alle finnischen Leckereien im Shop',
  moreGuides: 'Geschenke-Ratgeber nach Anlass',
  moreSuperfoods: 'Arktische Superfoods aus Lappland',
  adLabel: 'Anzeige',
}

const en: PageCopy = {
  h1: 'Finnish specialities: what is actually worth buying?',
  lead:
    'Nine classics, honestly rated: what Finns actually eat, what only exists on the souvenir shelf, and what survives the post.',
  intro: [
    'Anyone wanting to bring something home from Finland, or order it later, faces a shelf where everyday groceries and tourist goods sit side by side. This guide sorts the best-known Finnish specialities by whether Finns actually buy them, and whether they survive a journey or a parcel.',
    'Every verdict is an opinion from everyday life, not advertising: salmiakki polarises people here too, and the guide says so. Order links go to Suomikauppa, a Finnish mail-order grocer that ships abroad.',
  ],
  itemsH2: 'The classics, one by one',
  items: {
    salmiakki: {
      name: 'Salmiakki',
      kicker: 'The honest warning first',
      body: [
        'Liquorice salted with ammonium chloride is the Finnish sweet, and it splits every group into two camps, usually on the first piece. Salty, sharp, a genuine shock if you are new to it. Finns still eat it by the bag, from kiosk to cinema.',
        'As a gift that is exactly the point: salmiakki is cheap, light, keeps forever and is guaranteed to start a conversation. Soft palalaku pieces are the gentlest introduction; the committed go straight to Fazer Super Salmiakki.',
      ],
      travel: 'Survives anything: light, unbreakable, keeps for months.',
      buyLabel: 'Palalaku salmiakki at Suomikauppa',
      productLabel: 'See product details in the shop',
    },
    fazer: {
      name: 'Fazer: the blue bar',
      kicker: 'Genuine everyday, not a souvenir',
      body: [
        'The milk chocolate in the blue wrapper (Karl Fazer Maitosuklaa) sits at every Finnish supermarket checkout and in most kitchen drawers. It is the opposite of tourist goods: Finns give it to each other, for name days, as a thank-you, on hospital visits.',
        'It tastes creamier and milder than most central European bars. If you bring home only one Finnish grocery, the blue bar is the safe answer.',
      ],
      travel: 'Travels well, melts in a midsummer parcel like any chocolate.',
      buyLabel: 'Karl Fazer milk chocolate at Suomikauppa',
    },
    ruisleipa: {
      name: 'Ruisleipä: rye bread',
      kicker: 'The number one homesickness food',
      body: [
        'Finnish rye bread is darker, sourer and denser than most rye elsewhere. It is the food Finns abroad miss most and have posted to them in parcels.',
        'Fresh loaves do not survive the trip. The shippable form is jälkiuunileipä: rye bread dried hard in a slow oven, which keeps for weeks. Oululainen Jälkiuuni is the classic of the type.',
      ],
      travel: 'Fresh: no. Jälkiuunileipä and crispbread: no problem.',
      buyLabel: 'Oululainen Jälkiuuni at Suomikauppa',
    },
    leipajuusto: {
      name: 'Leipäjuusto + cloudberry jam',
      kicker: 'Eat it in Finland, do not post it',
      body: [
        'Leipäjuusto is a flat, baked fresh cheese that squeaks when you chew, hence the nickname "squeaky cheese". It is served warm with cloudberry jam (lakkahillo), and that combination is the single best reason to walk into a Lapland café.',
        'As a mail order it is a poor fit: the cheese is a fresh product, and cloudberry jam is regularly sold out even at the Finnish export grocer, the berry grows wild in bogs and is picked by hand. A shelf-stable alternative from the same aisle: Meritalo sea buckthorn jam, tart rather than sweet, good with cheese.',
      ],
      travel: 'Cheese: only in Finland. Jam: often sold out, sea buckthorn is the alternative.',
      buyLabel: 'Meritalo sea buckthorn jam at Suomikauppa',
      productLabel: 'See product details in the shop',
    },
    korvapuusti: {
      name: 'Korvapuusti: cinnamon bun',
      kicker: 'Fresh or not at all',
      body: [
        'The Finnish cinnamon bun differs from most others through cardamom in the dough and pearl sugar on top. It belongs to afternoon coffee the way cake does elsewhere.',
        'A day-old bun is already not the same thing, and a posted one even less so. Korvapuusti is a reason to find a café in Finland, or to bake at home. Cardamom is in every spice aisle.',
      ],
      travel: 'Does not survive shipping. Eat it there or bake it yourself.',
    },
    kuivaliha: {
      name: 'Poron kuivaliha: dried reindeer',
      kicker: 'The most Lapland item on this list',
      body: [
        'Air-dried reindeer meat is provisions in Lapland, not a gimmick: light, long-keeping, intense. It costs clearly more than beef jerky, reindeer meat is treated as a delicacy in Finland itself.',
        'Within the EU it may be posted without trouble; the small bags make a good gift for people who already have everything.',
      ],
      travel: 'Ships fine within the EU; outside the EU not allowed (animal product).',
      buyLabel: 'Dried reindeer at Suomikauppa',
      productLabel: 'See reindeer jerky in the shop',
    },
    lonkero: {
      name: 'Lonkero: the long drink',
      kicker: 'Gin and grapefruit, since 1952',
      body: [
        'The ready-mixed long drink of gin and grapefruit soda was invented for the 1952 Helsinki Olympics so bars could keep up with the crowds, and never left. It sits in the supermarket fridge as naturally as shandy does elsewhere.',
        'You cannot order it: Finnish shops may not post alcohol abroad. Try a can from the supermarket while visiting, the original is Hartwall’s, plainly named Original Long Drink.',
      ],
      travel: 'No shipping (alcohol). Supermarket on site, or cans in the suitcase.',
    },
    salmiakkikossu: {
      name: 'Salmiakkikossu',
      kicker: 'The party classic',
      body: [
        'Salmiakki liqueur on a vodka base, usually Koskenkorva, hence the name. It tastes like dissolved salty liquorice, goes down far more easily than it sounds, and has a fixed place at Finnish parties.',
        'The same rule applies: no postal shipping for alcohol. The bottle is sold at Alko (the state alcohol shop) and at airport duty-free.',
      ],
      travel: 'No shipping (alcohol). Alko or airport duty-free.',
    },
    terva: {
      name: 'Terva: pine tar',
      kicker: 'Sounds wrong, is genuine',
      body: [
        'Wood tar from pine is an old Finnish material, and a flavour: smoky, resinous, somewhere between campfire and sauna. It goes into sweets, syrup, ice cream and soap, and like salmiakki it reliably splits visitors into two camps.',
        'Tervaleijona pastilles are the classic pocket-sized introduction. Tar soap smells of a Finnish sauna and is that rare souvenir that gets used daily instead of gathering dust.',
      ],
      travel: 'Pastilles and soap travel and ship without any trouble.',
      buyLabel: 'Tervaleijona at Suomikauppa',
      productLabel: 'See tar liquorice in the shop',
    },
  },
  touristH2: 'So what is tourist bait?',
  tourist: [
    'The simplest rule of thumb: if it only exists in souvenir shops, Finns do not eat it. Plush reindeer, "Lapland" mugs and berry liqueurs in snowman bottles are made for visitors, which is fine, as long as you know it and do not mistake them for the national cuisine.',
    'With food, read the label: a Finnish producer with a Finnish address usually means the same product that sits in the supermarket: just pricier in the souvenir shop. Everything on this page is sold in any ordinary Finnish grocery store.',
  ],
  shippingH2: 'What survives the post',
  shipping: [
    'In short: dry and packaged goods travel well (salmiakki, chocolate, jälkiuunileipä, dried meat, tar pastilles), fresh things do not (leipäjuusto, korvapuusti), and alcohol may not be posted at all (lonkero, salmiakkikossu). Meat products such as reindeer jerky may be shipped within the EU but not outside it.',
  ],
  shippingLink: 'All partner shop delivery areas in detail',
  moreH2: 'Keep browsing',
  moreTreats: 'All Finnish treats in the shop',
  moreGuides: 'Gift guides by occasion',
  moreSuperfoods: 'Arctic superfoods from Lapland',
  adLabel: 'Ad',
}

export default function Specialties() {
  const lang = useLang()
  const to = useLocalePath()
  // Sisältö on saksaksi ja englanniksi. Muut kielet saavat englannin — sama
  // ratkaisu kuin /gift-guides- ja /shipping-sivuilla ennen käännöstään.
  const t = lang === 'de' ? de : en

  return (
    <>
      <ShopNav />
      <main className="bg-sand pb-14 md:pb-20" id="main-content" tabIndex={-1}>
        <header className="border-b border-line bg-card">
          <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
            <h1 className="font-heading text-5xl tracking-wide text-gray md:text-7xl">{t.h1}</h1>
            <p className="mt-4 max-w-2xl text-lg text-muted">{t.lead}</p>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-4">
          <section className="mt-8 md:mt-10">
            {t.intro.map((p) => (
              <p key={p.slice(0, 24)} className="mt-4 leading-relaxed text-gray/90">
                {p}
              </p>
            ))}
          </section>

          <h2 className="mt-12 font-heading text-4xl tracking-wide text-gray">{t.itemsH2}</h2>

          {ITEMS.map((item) => {
            const c = t.items[item.id]
            const buyHref = item.buy ? partnerHref(SK, item.buy.dest, item.buy.sid) : null
            return (
              <section
                key={item.id}
                className="mt-8 overflow-hidden rounded-3xl border border-line bg-card"
              >
                <div className="p-5 md:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber">
                    {c.kicker}
                  </p>
                  <h3 className="mt-1 font-heading text-3xl tracking-wide text-gray md:text-4xl">
                    {c.name}
                  </h3>
                  {c.body.map((p) => (
                    <p key={p.slice(0, 24)} className="mt-3 leading-relaxed text-gray/85">
                      {p}
                    </p>
                  ))}
                  <p className="mt-4 rounded-xl bg-sand-deep px-4 py-3 text-sm text-gray/80">
                    {c.travel}
                  </p>
                  {(buyHref || item.productSlug) && (
                    <div className="mt-5 flex flex-wrap items-center gap-3">
                      {buyHref && item.buy && c.buyLabel && (
                        <a
                          href={buyHref}
                          target="_blank"
                          rel={AFFILIATE_REL}
                          onClick={() =>
                            trackAffiliateClick('suomikauppa', `guide:${item.buy!.sid}`, buyHref)
                          }
                          className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#063092] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#04205f]"
                        >
                          {c.buyLabel}
                          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                        </a>
                      )}
                      {item.productSlug && c.productLabel && (
                        <Link
                          to={to(`/product/${item.productSlug}`)}
                          className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-gray transition-colors hover:bg-sand-deep"
                        >
                          {c.productLabel}
                          <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </section>
            )
          })}

          <section className="mt-14">
            <h2 className="font-heading text-4xl tracking-wide text-gray">{t.touristH2}</h2>
            {t.tourist.map((p) => (
              <p key={p.slice(0, 24)} className="mt-4 leading-relaxed text-gray/90">
                {p}
              </p>
            ))}
          </section>

          <section className="mt-12">
            <h2 className="font-heading text-4xl tracking-wide text-gray">{t.shippingH2}</h2>
            {t.shipping.map((p) => (
              <p key={p.slice(0, 24)} className="mt-4 leading-relaxed text-gray/90">
                {p}
              </p>
            ))}
            <Link
              to={to('/shipping')}
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-amber hover:underline"
            >
              {t.shippingLink}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </section>

          <section className="mt-12 rounded-3xl border border-line bg-card p-5 md:p-8">
            <h2 className="font-heading text-3xl tracking-wide text-gray">{t.moreH2}</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  to={to('/treats')}
                  className="inline-flex items-center gap-1.5 font-semibold text-amber hover:underline"
                >
                  {t.moreTreats}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link
                  to={to('/gift-guides')}
                  className="inline-flex items-center gap-1.5 font-semibold text-amber hover:underline"
                >
                  {t.moreGuides}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link
                  to={to('/superfoods')}
                  className="inline-flex items-center gap-1.5 font-semibold text-amber hover:underline"
                >
                  {t.moreSuperfoods}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
