import type { ChromeCopy } from './types'

const nl: ChromeCopy = {
  nav: {
    categories: 'Categorieën',
    products: 'Producten',
    guides: 'Gidsen',
    promises: 'Beloften',
  },
  hero: {
    kicker: 'Vanuit het hart van Fins Lapland',
    badge: 'Winkel opent binnenkort',
    title: 'Geef een stukje',
    titleAccent: 'Arctis',
    lead: 'Binnenkort bestelt u authentieke cadeaus uit Lapland tijdens uw vakantie en staan ze thuis op u te wachten voordat u terug bent. Handgemaakte schatten, eigen merk-artikelen en arctische ervaringen, rechtstreeks vanuit Fins Lapland. De eerste collectie wordt nu samengesteld.',
    ctaExplore: 'Bekijk cadeaus',
    ctaGuide: 'Cadeaugids',
  },
  categories: {
    h2: 'Drie manieren om Lapland cadeau te doen',
    sub: 'Of het nu een mok met logo is, een handgesneden kuksa of een noorderlicht-safari, wij hebben het perfecte arctische cadeau',
    items: [
      {
        name: '#LaplandVibes Artikelen',
        tag: 'Eigen merk',
        description: 'Mokken, t-shirts, hoodies en canvasprints met onze kenmerkende arctische ontwerpen. Print-on-demand en wereldwijde verzending zodra de winkel opent.',
      },
      {
        name: 'Ambachtelijk werk',
        tag: 'Handgemaakt',
        description: 'Handgesmede puukko-messen, gesneden kuksa-bekers, Sami duodji-sieraden en wilde-bessenjam, rechtstreeks van Laplandse ambachtslieden.',
      },
      {
        name: 'Ervaringen en cadeaubonnen',
        tag: 'Cadeau-ideeën',
        description: 'Noorderlicht-safari\'s, rendierslederitten, gezellige hutten en onze samengestelde Lapland Trip Boxes, geef een onvergetelijk arctisch moment cadeau.',
      },
    ],
  },
  valueProp: {
    h2: 'Bestel op vakantie. Vind ze thuis.',
    sub: 'Geen broze souvenirs meer die in de koffer moeten. Zo werkt LaplandGifts zodra de winkel opent: shop tijdens uw reis, wij regelen de rest.',
    steps: [
      { title: 'Snuffel op vakantie', description: 'Een puukko gevonden waar u verliefd op bent? Een kuksa voor moeder? Bestel tijdens het verkennen, u hoeft niets mee te dragen.' },
      { title: 'Wij verzenden uit Lapland', description: 'Uw cadeaus worden zorgvuldig ingepakt en rechtstreeks verzonden door Finse ambachtslieden en onze EU-printpartners.' },
      { title: 'Wachten thuis op u', description: 'U landt thuis en uw Laplandse schatten staan al voor de deur. Geen bagagestress, geen kapotte souvenirs.' },
    ],
  },
  productGrid: {
    h2: 'Binnenkort beschikbaar',
    sub: 'Onze eerste collectie wordt zorgvuldig geselecteerd bij de beste ambachtslieden in Fins Lapland. Schrijf u in voor de nieuwsbrief om als eerste op de hoogte te zijn.',
    priceTbd: 'Prijs volgt',
    notifyMe: 'Houd mij op de hoogte',
    notifyAria: (name) => `Laat het mij weten zodra ${name} beschikbaar is`,
    products: [
      { name: 'Noorderlicht-mok', category: 'merch' },
      { name: 'Rendier-mok', category: 'merch' },
      { name: 'Noorderlicht t-shirt', category: 'merch' },
      { name: 'Arctische hoodie', category: 'merch' },
      { name: 'Lapland-poster', category: 'merch' },
      { name: 'Wollen muts', category: 'merch' },
      { name: 'Puukko-mes', category: 'artisan' },
      { name: 'Kuksa-beker', category: 'artisan' },
      { name: 'Sami-armband', category: 'artisan' },
      { name: 'Bessenjam-set', category: 'artisan' },
      { name: 'Kandelaar van gewei', category: 'artisan' },
      { name: 'Wollen deken', category: 'artisan' },
    ],
    catMerch: 'merchandise',
    catArtisan: 'ambacht',
  },
  giftGuide: {
    h2: 'Cadeaugids',
    sub: 'Geen idee wat u moet kiezen? Wij helpen u het perfecte cadeau te vinden voor elke gelegenheid',
    suggested: 'Voorgestelde cadeaus',
    occasions: [
      {
        name: 'Kerst',
        description: "Niets zegt Kerst zoals een cadeau uit het thuisland van de Kerstman. Kies uit onze zorgvuldig samengestelde feestselecties.",
        suggestions: ['Cadeaumand "Lapland Luxury"', 'Wollen deken uit Lapland', 'Set kruipbraamjam', 'Vilten pantoffels'],
      },
      {
        name: 'Bruiloft',
        description: 'Vier de liefde met tijdloze, handgemaakte stukken die het paar jarenlang zal koesteren.',
        suggestions: ['Noorderlicht-hanger', 'Houten kuksa-beker (paar)', 'Portemonnee van rendierleer', 'Mandje van berkenbast'],
      },
      {
        name: 'Verjaardag',
        description: 'Verras iemand met een uniek cadeau dat u nooit in een gewone winkel vindt.',
        suggestions: ['Sami duodji-armband', 'Puukko-mes', 'Cadeaumand "Arctic Taste"', 'Kandelaar van rendiergewei'],
      },
      {
        name: 'Zakelijk',
        description: 'Maak indruk op klanten en partners met arctische premium-cadeaus die opvallen tussen de gebruikelijke zakelijke geschenken.',
        suggestions: ['Puukko-mes (gegraveerd)', 'Cadeaumand "Lapland Luxury"', 'Houten kuksa-beker', 'Noorderlicht-hanger'],
      },
    ],
  },
  guides: {
    kicker: 'Gratis gidsen',
    h2: 'Arctische gidsen',
    sub: 'Alles wat wij over Lapland weten, samengebracht in twee gratis gidsen. Laat hieronder uw e-mailadres achter en download ze meteen.',
    guides: [
      {
        title: 'Het geheime ambacht',
        subtitle: 'Een insidergids voor authentiek Laplands vakmanschap',
        description: 'Leer echte handgemaakte puukko-messen onderscheiden van fabriekskopieën, begrijp de culturele betekenis van Sami duodji, ontdek de seizoenen van wilde bessen en beheers de 5 gouden regels voor het kopen van echt Laplands ambacht.',
        topics: ['Puukko-messen', 'Kuksa-bekers', 'Sami duodji', 'Wilde bessen', 'Kopersregels'],
        pages: 9,
      },
      {
        title: '7 dagen Lapland-magie',
        subtitle: 'De enige reisplanning die u ooit nodig zult hebben',
        description: 'Een complete dag-tot-dag route van Rovaniemi naar Inari en terug. Inclusief tips voor het noorderlicht, husky-safari\'s, ijsbrekercruises, realistische budgetplanner en een volledige arctische paklijst.',
        topics: ['7-daagse route', 'Budgetplanner', 'Paklijst', 'Seizoensgids', 'Lokale tips'],
        pages: 13,
      },
    ],
    pagesPdf: (pages) => `${pages} pagina's · PDF`,
    cta: 'Vul uw e-mail in en ontvang beide gidsen gratis',
  },
  newsletter: {
    kicker: 'Beide gidsen gratis',
    h2: 'Vul uw e-mail in om te downloaden',
    body: 'Direct toegang tot beide arctische gidsen, plus vroegtijdige meldingen wanneer nieuwe producten en ambachtelijke creaties in de winkel verschijnen.',
    placeholder: 'uw@email.com',
    submit: 'Ontvang beide gidsen',
    submitting: 'Versturen…',
    successHeading: 'Uw gidsen staan klaar!',
    successFootnote: 'Welkom bij de arctische familie. Controleer ook uw inbox!',
    btnSecret: 'Het geheime ambacht',
    btnSeven: '7 dagen magie',
    errorMsg: 'Er ging iets mis. Probeer het opnieuw.',
    spamNote: 'Nooit spam. Op elk moment uit te schrijven.',
  },
  shipping: {
    h2: 'Onze beloften',
    sub: 'Wat u mag verwachten zodra de LaplandGifts-winkel opent',
    items: [
      { title: 'Rechtstreeks uit Lapland', description: 'Elk product wordt verzonden vanuit Finland of via onze EU-printpartners. Geen tussenhandel, geen mysterieuze magazijnen.' },
      { title: 'Authenticiteitsgarantie', description: 'Ambachtelijke producten worden geleverd met een certificaat van oorsprong. Sami-ambacht wordt alleen via erkende verkopers ingekocht.' },
      { title: 'Cadeauklaar verpakt', description: 'Elke bestelling wordt met zorg verpakt in recyclebaar materiaal geïnspireerd op de arctische natuur. Voeg bij het afrekenen een persoonlijke boodschap toe.' },
      { title: 'Wij steunen ambachtslieden', description: 'Een deel van elke verkoop van een ambachtelijk product gaat direct terug naar de maker en zijn gemeenschap.' },
    ],
  },
  faq: {
    kicker: 'Goed om te weten',
    h2: 'Cadeaus uit Lapland, uw vragen',
    sub: 'Wat u mee naar huis neemt, hoe u ethisch koopt en wat er echt over de grens wordt verzonden.',
    items: [
      {
        q: 'Wat zijn authentieke souvenirs om in Lapland te kopen?',
        a: 'De meest authentieke Lapland-souvenirs zijn door lokale handen gemaakt: een puukko (een traditioneel Fins riemmes), een kuksa (een uit een berkenknoest gesneden beker), rendierleren artikelen, wollen textiel en wilde producten zoals kruipbraamjam, vossenbessenconfituur en berkensapproducten. Sami duodji-ambacht, zilveren sieraden, geweiwerk en geweven banden, is het meest gewaardeerd. Let op de naam van de maker of een certificaat van oorsprong in plaats van massaproducten uit de luchthavenwinkel.',
      },
      {
        q: 'Kan ik Sami-ambacht ethisch kopen, en wat is het Sámi Duodji-keurmerk?',
        a: 'Ja. Duodji is het Samische woord voor traditioneel ambacht, en het ronde «Sámi Duodji»-handelsmerk is een echtheidskeurmerk dat wordt toegekend aan werk dat door Sami-makers met traditionele methoden en materialen is vervaardigd. Kiest u een artikel met dat keurmerk of koopt u rechtstreeks bij een met naam genoemde Sami-ambachtsman of een erkende verkoper, dan steunt het geld de gemeenschap en is het stuk echt, geen fabrieksimitatie van Sami-ontwerpen. Wij betrekken Sami-ambacht alleen via erkende verkopers.',
      },
      {
        q: 'Versturen winkels in Lapland cadeaus naar het buitenland?',
        a: 'Veel winkels doen dat. Onze eigen #LaplandVibes-artikelen (winkel opent binnenkort) zullen print-on-demand zijn en wereldwijd worden verzonden vanuit EU-productiepartners. Ambachtelijke stukken worden vanuit Finland verzonden; levertijd en kosten hangen af van uw land en de vervoerder. Het praktische voordeel van online bestellen tijdens uw reis is dat u geen breekbare spullen in uw bagage hoeft te proppen, ze reizen apart en staan thuis op u te wachten.',
      },
      {
        q: 'Wat neemt u mee naar huis vanuit Rovaniemi?',
        a: 'Rovaniemi ligt op de poolcirkel en is de toegangspoort tot Fins Lapland, dus het is een goede plek om te winkelen. Populaire keuzes zijn een kuksa, een puukko-mes, rendierleren accessoires, wollen sokken en mutsen, Moomin- en kerstman-artikelen, en arctische etenswaren zoals kruipbraamjam, salmiakki (zoute drop) en berkensapsiroop. Voor iets met herkomst kiest u een stuk dat door de maker is gesigneerd in plaats van een algemeen «Lapland»-souvenir.',
      },
      {
        q: 'Mag u producten van rendier en gewei meenemen?',
        a: 'Het rendier (Rangifer tarandus) is geen bedreigde of CITES-soort, dus artikelen van natuurlijk afgeworpen gewei of van bijproducten, gewei, leer en wol, zijn doorgaans toegestaan als persoonlijke souvenirs binnen de EU en naar de meeste landen. De regels verschillen per bestemming, vooral voor onbehandelde dierlijke materialen, dus controleer vóór uw reis de douane- en invoerregels van uw eigen land. Bij twijfel zijn behandeld leer, wol en houten artikelen het veiligst om mee te nemen.',
      },
      {
        q: 'Hoe ver van tevoren moet u kerstcadeaus uit Lapland bestellen?',
        a: 'Voor levering in december bestelt u ruim vóór de uiterste verzenddata van vervoerders medio december, internationale verzending vertraagt in de weken vóór Kerst, en handgemaakte stukken worden in kleine series gemaakt. Bezoekt u Lapland in de herfst of vroege winter, dan is bestellen tijdens uw reis de eenvoudigste manier om de cadeaus op tijd thuis te hebben. Schrijf u in voor de nieuwsbrief, dan melden wij de seizoensdeadlines.',
      },
    ],
  },
  related: {
    kicker: 'Waarheen nu',
    h2: 'Plan de rest van uw reis door Lapland',
    sub: 'Onderdeel van het LaplandVibes-netwerk, blijf ontdekken met onze zustersites.',
    items: [
      { label: 'Kerst in Lapland & de Kerstman', blurb: 'Kerstmandorp, kerstreizen en tips voor het feestseizoen.', href: 'https://laplandchristmas.com/santa-village/' },
      { label: 'In Lapland gemaakte producten', blurb: 'Een breder aanbod van Laplandse producten en arctisch design.', href: 'https://laplandstore.fi' },
      { label: 'Plan uw reis door Lapland', blurb: 'Bestemmingen, seizoenen en praktische tips voor Fins Lapland.', href: 'https://laplandvisit.com/itineraries/' },
    ],
  },
  footer: {
    pillars: [
      { name: 'Categorieën', href: '/#categories' },
      { name: 'Uitgelichte producten', href: '/#products' },
      { name: 'Cadeaugids', href: '/#gift-guide' },
      { name: 'Gratis gidsen', href: '/#guides' },
      { name: 'LaplandStays', href: 'https://laplandstays.com' },
      { name: 'LaplandActivities', href: 'https://laplandactivities.online' },
    ],
    editorialNote: 'Onafhankelijk beheerd door Lapeso Oy in Fins Lapland · laatst beoordeeld in mei 2026 · wij werken rechtstreeks samen met geselecteerde ambachtslieden en winkels, met volledige openheid op elke productpagina.',
    extraLegalUnsub: 'Uitschrijven',
  },
  notFound: {
    h1: 'Pagina niet gevonden',
    body: 'Deze pagina bestaat niet. Misschien heeft het noorderlicht hem ergens anders mee naartoe genomen.',
    back: 'Terug naar home',
  },
  unsubscribe: {
    title: 'Uitschrijven | LaplandGifts',
    h1: 'Uitschrijven',
    body: 'Vul uw e-mailadres in om u af te melden van onze nieuwsbrief.',
    successH1: 'U bent uitgeschreven',
    successBody: 'U ontvangt geen e-mails meer van ons. We vinden het jammer u te zien gaan.',
    submit: 'Uitschrijven',
    submitting: 'Uitschrijven…',
    backHome: 'Terug naar home',
    errorMsg: 'Er ging iets mis. Probeer het opnieuw of mail naar info@laplandvibes.com',
  },
  legal: {
    backHome: 'Terug naar home',
  },
}

// ---------- exports ----------

export default nl
