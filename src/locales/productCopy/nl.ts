import type { ProductCopyMap } from './index'

/**
 * Tuotteiden hollanninkieliset tekstit. Rakenne ja säännöt: ks. de.ts.
 *
 * `specs` on positionaalinen: indeksi vastaa `product.details.specs`-taulukon
 * järjestystä lähdedatassa. `specLabels` samoin, ja siinä on arvo vain niillä
 * riveillä joilla on oma otsikko (`key: 'other'`).
 *
 * Lukuja, mittayksiköitä, tuotekoodeja ja EAN-numeroita ei käännetä eikä
 * muunneta. Numerofragmentit kopioidaan lähteestä sellaisinaan, myös
 * välilyöntien osalta; vain desimaalierotin vaihtuu pilkuksi.
 */
export const PRODUCT_COPY_NL: ProductCopyMap = {
  'iittala-aalto-vase-160': {
    name: 'Iittala Alvar Aalto vaas 160 mm, helder',
    description:
      'Alvar Aalto tekende deze golf in 1936 en Iittala blaast hem nog altijd met de mond, dus de omtrek van elk stuk verschilt een beetje. De maat 160 mm is degene die mensen voor zich zien als de naam valt.',
    specs: [
      'Hoogte 16 cm, breedte 20,5 cm',
      'Glas',
      'Transparant',
      '1,44 kg bruto',
      'Alleen met de hand wassen',
      'Mondgeblazen glas, asymmetrische vorm',
      'Alvar Aalto, Iittala Alvar Aalto Collection',
      '999-01, EAN 6411920004445',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      'Vervaardiging',
      'Ontwerper en collectie',
      'Artikelnummer en EAN',
    ],
  },
  'iittala-kivi-candleholder': {
    name: 'Iittala Kivi waxinelichthouder 60 mm, dennengroen',
    description:
      'Een geperste glazen waxinelichthouder van Heikki Orvola, 6 cm hoog, die van één waxinelichtje een blok kleur maakt. Het is de goedkoopste manier om een stuk Iittala te bezitten en hij overleeft de handbagage.',
    specs: [
      '6,5 x 6,5 cm, hoogte 6 cm',
      'Glas',
      'Groen',
      '0,33 kg bruto',
      'Alleen met de hand wassen',
      'Heikki Orvola, Iittala Kivi',
      '636883-01, EAN 6411923683937',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      'Ontwerper en collectie',
      'Artikelnummer en EAN',
    ],
  },
  'marimekko-unikko-mug': {
    name: 'Marimekko Unikko mok 25 cl',
    description:
      'Maija Isola tekende de klaproos Unikko in 1964, nadat Marimekko bloemenprints had verboden, en het patroon overleefde het verbod. Deze mok van steengoed bevat 25 cl en zet de print op de ontbijttafel in plaats van aan de muur.',
    specs: [
      '25 cl',
      'Diameter 8 cm, hoogte 9,5 cm',
      'Steengoed',
      'Wit, donkergroen, beige en lichtzand',
      '0,276 kg bruto',
      'Patroon van Maija Isola, mok van Sami Ruotsalainen',
      '666236-01, EAN 6411255152033',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      'Ontwerpers',
      'Artikelnummer en EAN',
    ],
  },
  'halti-tokoi-dx-jacket': {
    name: 'Halti Tokoi DX shelljas, heren',
    description:
      'Een weerbestendige shell met alle naden getapet, een lichte voering en een verstelbare capuchon, ruim genoeg gesneden om er een wollen trui onder te dragen. Halti levert alleen binnen de Europese Unie.',
    specs: [
      'DrymaxX Sleek Twill, een waterdichte en winddichte 2-laags stof met DrymaxX-membraan. Samenstelling 50 % gerecycled polyester en 50 % polyester',
      'Zachte polyester voering, 100 % gerecycled polyester',
      '10000 mm',
      '10000 g/m²/24 h',
      '0,9 kg',
      'S, M, L, XL, XXL, XXXL',
      'Fossil Beige, Four Leaf Clover Green, Black',
      'Alle naden getapet, verstelbare vaste capuchon, hoge opstaande kraag, 2-weg ritssluiting voor, mesh ventilatie, handzakken met rits, binnenzak met drukknoop, verstelbare mouwuiteinden, windvanger voor, reflecterende details',
      'Binnenstebuiten wassen met gelijke kleuren en eerst de ritsen sluiten. Maximaal 30 °C, mild proces. Niet bleken, niet in de droger, niet strijken, niet chemisch reinigen',
    ],
    specLabels: [
      undefined,
      'Voering',
      'Waterdichtheid',
      'Ademend vermogen',
      undefined,
      undefined,
      undefined,
      'Kenmerken',
      undefined,
    ],
  },
  'makia-merino-beanie': {
    name: 'Makia Merino muts',
    description:
      'Een sobere Noordse muts van merinowol, die temperatuur en vocht in balans houdt wanneer u uit een warm café zo de kou in stapt. Geen logo ter grootte van een vuist op de voorkant.',
    specs: [
      '100 % merinowol, patentsteek gauge 8, mulesingvrij',
      'One size',
      'Dark Brown',
      'Gemaakt in Finland, materiaal gemaakt in Italië',
      'Wassen met gelijke kleuren op een fijnwasprogramma, plat drogen en in model brengen. Luchten volstaat vaak in plaats van wassen. Bij gebruik kan pilling ontstaan',
    ],
  },
  'makia-aurora-hoodie': {
    name: 'Makia Aurora hoodie',
    description:
      'Een hoodie met regular fit in 100 procent biologisch katoen van het Helsinkse merk Makia. Dik genoeg om binnen en op zachte herfstavonden als buitenlaag te dragen.',
    specs: [
      '100 % biologisch katoen, french terry van 370 g',
      'S, M, L, XL, XXL',
      'Carbon Black',
      'Regular fit, koorden in de capuchon, kangoeroezak, boord aan zoom en mouwuiteinde, geweven labels van gerecycled polyester',
      'Gemaakt in Turkije, materiaal gemaakt in Turkije',
      'Binnenstebuiten wassen met gelijke kleuren. Niet op de print strijken. Krimp maximaal 5 %. In model brengen zolang hij vochtig is',
    ],
    specLabels: [undefined, undefined, undefined, 'Pasvorm en details', undefined, undefined],
  },
  'halti-kroka-mitten': {
    name: 'Halti Kroka II want',
    description:
      'Een winddichte want met 60 g isolatie en een handpalm met siliconengrip, unisex gesneden. Wanten winnen het van handschoenen zodra de wind aantrekt, omdat de vingers elkaar warm houden.',
    specs: [
      'Stormwall softshell, 50 % polyester en 50 % gerecycled polyester. Zachte fleece 100 % polyester. Boorden van lycratricot',
      'Microtherm Dynamic 60 g, voering Active Dry soft touch, 100 % gerecycled polyester',
      '0,1 kg',
      '06, 07, 08, 09, 10, 11, 12',
      'Zwart',
      'Apart wassen op 30 °C met een mild programma. Niet bleken, niet in de droger, niet strijken, niet chemisch reinigen',
      '084-0757',
    ],
    specLabels: [
      undefined,
      'Isolatie en voering',
      undefined,
      undefined,
      undefined,
      undefined,
      'Artikelnummer',
    ],
  },
  'halti-tunturit-ski-socks': {
    name: 'Halti Tunturit skisokken',
    description:
      'Kniehoge sokken van een merinomengsel met vulling bij het scheenbeen en de enkel, precies waar de skischoen drukt. Halti geeft aan dat ze in Europa gemaakt zijn.',
    specs: [
      'Merinowolmengsel: 36 % polyamide, 23 % acryl, 23 % merinowol, 16 % polypropeen, 2 % elastaan',
      '0,1 kg',
      '34-36, 37-39, 40-42, 43-45, 46-48',
      'Sargasso Sea Blue, Lemon Pepper Beige',
      'Gemaakt in Europa',
      'Vulling bij scheenbeen en enkel, kniehoge lengte, versterkte hiel en teen, ventilatiezones op het scheenbeen en de wreef',
      'Maximaal 40 °C, normaal proces. Niet strijken, niet bleken, niet chemisch reinigen, niet in de droger',
      '087-0471',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      'Kenmerken',
      undefined,
      'Artikelnummer',
    ],
  },
  'north-outdoor-huuru-beanie': {
    name: 'North Outdoor Huuru merinomuts',
    description:
      'North Outdoor breit deze ribmuts in de eigen breierij in Oulu van 100 procent mulesingvrije merino, 18,5 micron. Op vorm gebreid in plaats van uitgesneden, dus er blijft weinig afval over.',
    specs: [
      '100 % merinowol, mulesingvrij, 18,5 micron, breisel 270 g/m²',
      'One size',
      'Indigoblauw',
      'Gemaakt in Oulu, Finland',
      'Lucht hem regelmatig en was hem alleen als het nodig is. Wolwasmiddel, fijnwas op 30 °C met de laagste centrifugegang, binnenstebuiten',
      'OEKO-TEX, Woolmark',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, 'Certificaten'],
  },
  'north-outdoor-pyry-scarf': {
    name: 'North Outdoor Pyry merinosjaal',
    description:
      'Een brede, lange sjaal in patentsteek van 100 procent merino, gebreid in Oulu. Lang genoeg om op verschillende manieren om te slaan, wat uitmaakt als de wind op een open fjäll van richting verandert.',
    specs: [
      '100 % merinowol, 18,5 micron, 1/1 ribbreisel',
      'One size',
      'Papgrijs',
      'Gemaakt in Oulu, Finland',
      'Lucht hem regelmatig en was hem alleen als het nodig is. Wolwasmiddel, fijnwas op 30 °C met de laagste centrifugegang, binnenstebuiten',
      'OEKO-TEX, Woolmark',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, 'Certificaten'],
  },
  'north-outdoor-honka-jumper': {
    name: 'North Outdoor Honka merinotrui, heren',
    description:
      'Een dikke trui in patentsteek van 100 procent merino met een ontspannen snit en een verlaagde schouderlijn. Zwaar om te zien, licht om te dragen, en gebreid in de breierij in Oulu.',
    specs: [
      '100 % merinowol, mulesingvrij, 18,5 micron, wisselend ribbreisel',
      'S, M, L, XL, 2XL, 3XL',
      'Indigoblauw',
      'Gemaakt in Oulu, Finland',
      'Lucht hem regelmatig en was hem alleen als het nodig is. Wolwasmiddel, fijnwas op 30 °C met de laagste centrifugegang, binnenstebuiten',
      'OEKO-TEX, Woolmark',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, 'Certificaten'],
  },
  'marttiini-lapinleuku-255': {
    name: 'Marttiini Lapse mes 255',
    description:
      'Het traditionele Lapse mes, 27 cm in totaal, met een roestvrij lemmet, een gelakt heft van vlamberken en een leren schede. Marttiini maakt zijn messen in Rovaniemi, en deze uitvoering van het model heeft een vingerbeschermer.',
    specs: [
      '16 cm',
      'Totale lengte 27 cm',
      'Lemmet van roestvrij staal, heft van gelakt vlamberken, schede van leer',
      'Mes en leren schede met drukknoopsluiting',
      '255010',
    ],
    specLabels: ['Lemmetlengte', undefined, undefined, undefined, 'Artikelnummer'],
  },
  'marttiini-napapiirin-puukko': {
    name: 'Marttiini Poolcirkelmes',
    description:
      'Een klein mes voor elke dag, 20 cm in totaal, met een lemmet van koolstofstaal, een gewaste berkenheft en een bruine leren schede. Koolstofstaal wordt scherper dan roestvrij staal maar moet geolied worden, waar Marttiini op de productpagina ook aan herinnert.',
    specs: [
      '9 cm',
      'Totale lengte 20 cm',
      'Lemmet van koolstofstaal, heft van gewast berken, schede van bruin leer',
      'Droog het lemmet na gebruik altijd zorgvuldig af en olie het regelmatig met ongezouten olie',
      '121019',
    ],
    specLabels: ['Lemmetlengte', undefined, undefined, undefined, 'Artikelnummer'],
  },
  'marttiini-ilves-131': {
    name: 'Marttiini Lynx 131',
    description:
      'Een mes van 22 cm met een roestvrij lemmet, een gelakt heft van vlamberken en een bruine leren schede. Marttiini geeft aan dat het model Lynx in de jaren dertig door oprichter Janne Marttiini is getekend.',
    specs: [
      '11 cm',
      'Totale lengte 22 cm',
      'Lemmet van roestvrij staal, heft van gelakt vlamberken, schede van bruin leer',
      '131010',
    ],
    specLabels: ['Lemmetlengte', undefined, undefined, 'Artikelnummer'],
  },
  'kupilka-classic-cup-21': {
    name: 'Kupilka 21 kampeerbeker 2,1 dl',
    description:
      'De vorm van de kuksa in een materiaal dat u in de vaatwasser kunt gooien: half dennencellulosevezel, half thermoplast, gegoten in Finland. Hij bevat 2,1 dl, weegt 83 gram en brandt uw vingers niet bij een vuur.',
    specs: [
      '2,1 dl',
      '83 g',
      '60 x 93 x 165 mm',
      'Kareline natuurvezelcomposiet, 50 % dennencellulosevezel en 50 % thermoplast, gemaakt met groene energie',
      'Finland',
      'Spoel hem onderweg om als een houten kuksa, thuis gaat hij in de vaatwasser. Niet voor de magnetron',
      '3021011XX',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, undefined, 'Modelnummer'],
  },
  'kupilka-bowl-55': {
    name: 'Kupilka 55 kampeerkom 5,5 dl',
    description:
      'Een kom van 5,5 dl met een greep die stevig genoeg is om hem met één hand vast te houden terwijl de andere de beker draagt. Hetzelfde Finse dennenvezelcomposiet als de beker, 184 gram, vaatwasserbestendig.',
    specs: [
      '5,5 dl',
      '184 g',
      '54 x 154 x 223 mm',
      'Kareline natuurvezelcomposiet, 50 % dennencellulosevezel en 50 % thermoplast, gemaakt met groene energie',
      'Finland',
      'Vaatwasserbestendig. Niet voor de magnetron. Goedgekeurd voor contact met warm en koud voedsel',
      '3055013X',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, undefined, 'Modelnummer'],
  },
  'kupilka-cutlery-set': {
    name: 'Kupilka bestekset',
    description:
      'Lepel, mes en vork in hetzelfde Finse houtvezelcomposiet, 56 gram voor de set. De goedkoopste manier om het materiaal van Kupilka mee naar huis te nemen en de gemakkelijkste om in de handbagage te krijgen.',
    specs: [
      'Lepel, mes en vork',
      '56 g',
      'Kareline natuurvezelcomposiet, 50 % dennencellulosevezel en 50 % thermoplast, gemaakt met groene energie',
      'Finland',
      'Spoel ze onderweg om als houten bestek, thuis gaan ze in de vaatwasser. Niet voor de magnetron',
      '3025025X',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, 'Modelnummer'],
  },
  'pentik-posio-mug': {
    name: 'Pentik Posio mok 0,3 l',
    description:
      'Pentik bakt deze mok in Posio, wat het bedrijf de noordelijkste keramiekfabriek ter wereld noemt, en de hele Posio-reeks is versierd met rendieren. Geschikt voor vaatwasser, oven, magnetron en vriezer.',
    specs: [
      '0,3 l',
      'Rood',
      'Gemaakt in Posio in Lapland, dat Pentik de noordelijkste keramiekfabriek ter wereld noemt',
      'Vaatwasserbestendig, geschikt voor elektrische oven, bakoven, magnetron en vriezer',
      'Posio. Elk stuk uit de reeks is versierd met rendieren',
      '12JAO050P41',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Collectie', 'Productcode'],
  },
  'pentik-tunturiretki-studio-dish': {
    name: 'Pentik Tunturiretki Winter Studio diepe driehoekschaal 19 cm',
    description:
      'Anu Pentik schilderde de rendieren die tijdens een wandeling over de fjäll steeds tussen de bomen opduiken. Studiostukken worden in Posio met de hand beschilderd, dus geen twee schalen dragen precies dezelfde penseelstreken.',
    specs: [
      'Diameter 19 cm',
      'Blauw',
      'Handgemaakt in Posio in Lapland, ontworpen door Anu Pentik',
      'Vaatwasserbestendig, geschikt voor elektrische oven, bakoven, magnetron en vriezer',
      'Pentik Studio, de met de hand beschilderde reeks',
      '12ST353TT61',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Collectie', 'Productcode'],
  },
  'kuivalihakundi-poro-jerky': {
    name: 'Gedroogd rendiervlees Original 2 x 20 g',
    description:
      'Twee zakjes van 20 gram gedroogd rendiervlees van 100 procent Fins rendier, in de oven gedroogd en gemarineerd met glutenvrije sojasaus, zwarte peper, knoflook en suikersiroop. Vlees mag niet buiten de Europese Unie verstuurd worden, dus de levering stopt bij de EU-grens.',
    specs: [
      '2 x 20 g',
      'Vlees uit Finland',
      'De houdbaarheid loopt ongeveer een jaar vanaf de dag waarop het vlees gedroogd en verpakt is. Hoeft niet koel bewaard te worden, ook niet na openen',
      'Sterk gezouten. Glutenvrij',
      'Energie 1514 kJ / 360 kcal, vet 14,2 g waarvan verzadigd 6,2 g, koolhydraten 7,9 g waarvan suikers 5,1 g, eiwit 50,2 g, zout 9,5 g',
    ],
    specLabels: [undefined, undefined, undefined, 'Vermeldingen op het etiket', 'Voedingswaarde per 100 g'],
  },
  'finnish-flavours-palalaku-salmiakki': {
    name: 'Finnish Flavours Premium Palalaku salmiak 150 g',
    description:
      'Een zak van 150 gram zachte salmiakdrop, de soort met salmiakzout die bezoekers bij het eerste stukje in twee kampen verdeelt. Suomikauppa verstuurt levensmiddelen tot ver buiten Finland.',
    specs: [
      '150 g',
      'Energie 1316 kJ / 311 kcal, vet 0,5 g waarvan verzadigd 0 g, koolhydraten 72 g waarvan suikers 50 g, eiwit 4,1 g, zout 1,7 g',
      'Finnish Flavours, Kumitehtaankatu 5, 04260 Kerava',
    ],
    specLabels: [undefined, 'Voedingswaarde per 100 g', 'Op de markt gebracht door'],
  },
  'meritalo-tyrnihillo': {
    name: 'Meritalo Finse duindoornjam 310 g',
    description:
      'Duindoornjam met 37 gram bessen per 100 gram, gekookt van Finse duindoorn op de familieboerderij Meritalo in Salo, in het zuidwesten van Finland en niet in Lapland. Duindoorn is zuur en niet zoet, dus hij komt beter tot zijn recht naast kaas dan op een pannenkoek.',
    specs: [
      '310 g',
      'De bessen zijn Fins. Gemaakt door een familiebedrijf op de thuisboerderij Meritalo in Salo, in het zuidwesten van Finland',
      'Energie 781 kJ / 187 kcal, vet 1,9 g waarvan verzadigd 0,3 g, koolhydraten 41 g waarvan suikers 41 g, eiwit 0,3 g, zout 0,01 g',
      'Marjajaloste Meritalo Oy, 25610 Ylönkylä',
    ],
    specLabels: [undefined, undefined, 'Voedingswaarde per 100 g', 'Op de markt gebracht door'],
  },
  'kuivalihakundi-poro-jerky-200g': {
    name: 'Gedroogd rendiervlees Original 200 g',
    description:
      'Het cadeauformaat van hetzelfde gedroogde rendiervlees, 200 gram. De producent geeft aan dat één kilo gedroogd vlees drie kilo vers vlees kost, en daar zit het grootste deel van de prijs van een zak.',
    specs: [
      '200 g',
      '100 % rendiervlees, bovenbil, in de oven gedroogd en gemarineerd',
      '1 kg gedroogd vlees kost 3 kg vers vlees',
      'De houdbaarheid loopt ongeveer een jaar vanaf de dag waarop het vlees gedroogd en verpakt is. Hoeft niet koel bewaard te worden, ook niet na openen',
    ],
    specLabels: [undefined, undefined, 'Vleesgebruik', undefined],
  },
  'kuivalihakundi-beef-jerky-smoked': {
    name: 'Gedroogd rundvlees Smoked 40 g',
    description:
      'Rund in plaats van rendier, echt gerookt en niet alleen op smaak gebracht, 57 gram eiwit per 100. Het goedkoopste in deze categorie en het enige dat een rugzak overleeft.',
    specs: [
      '40 g',
      'Rund gehouden en geslacht in de Europese Unie',
      '1 kg gedroogd vlees kost 2,5 kg vers rundvlees',
      'Energie 1261 kJ / 298 kcal, vet 5,5 g waarvan verzadigd 2,4 g, koolhydraten 5,2 g waarvan suikers 4,4 g, eiwit 56,9 g, zout 5 g',
    ],
    specLabels: [undefined, undefined, 'Vleesgebruik', 'Voedingswaarde per 100 g'],
  },
  'fazer-geisha-chocolate-bar': {
    name: 'Fazer Geisha chocoladereep met hazelnootnougat 121 g',
    description:
      'Melkchocolade over een knapperige vulling van hazelnootnougat, de reep die de meeste Finse huishoudens in een la hebben liggen. Fazer geeft aan dat hij zonder palmolie gemaakt is.',
    specs: [
      '121 g',
      'Melkchocolade met minstens 30 % cacao, hazelnootnougatvulling met 11 % hazelnoten',
      'Energie 550 kcal / 2302 kJ, vet 35 g, verzadigd 17 g, koolhydraten 51 g, suikers 49 g, eiwit 8 g, zout 0,19 g',
    ],
    specLabels: [undefined, undefined, 'Voedingswaarde per 100 g'],
  },
  'nordqvist-moomin-forest-berry-tea': {
    name: 'Nordqvist Moomin bosvruchten- en hibiscusthee, 20 zakjes',
    description:
      'Biologische hibiscus met appel en bosvruchten, van nature cafeïnevrij, gemengd in de fabriek van Nordqvist in Nurmijärvi. Twintig zakjes wegen 35 gram, het lichtste cadeau in deze winkel.',
    specs: [
      '20 x 1,75 g, 35 g',
      'Gemengd in de fabriek van Nordqvist in Nurmijärvi, Finland',
      '95 °C gedurende 2 tot 4 minuten. In koud water 5 tot 10 minuten',
      'Biologisch gecertificeerd, veganistisch, glutenvrij, van nature cafeïnevrij',
    ],
    specLabels: [undefined, undefined, 'Zetten', 'Dieet'],
  },
  'nordqvist-cranberry-toffee-tea': {
    name: 'Nordqvist veenbes- en gezouten toffeethee, 20 zakjes',
    description:
      'Zure veenbes tegenover gezouten toffee op een basis van hibiscus en rooibos, dus cafeïnevrij en toch met smaak in de avond. Nordqvist mengt sinds 1883 thee in Finland.',
    specs: [
      '20 x 1,75 g, 35 g',
      '95 °C gedurende 2 tot 5 minuten',
      'Veganistisch. Hibiscus en rooibos zijn Rainforest Alliance-gecertificeerd',
    ],
    specLabels: [undefined, 'Zetten', 'Dieet en certificering'],
  },
  'arctic-power-berries-blueberry-powder': {
    name: 'Wilde bosbessenpoeder 70 g',
    description:
      'Gevriesdroogde wilde bosbes, niets toegevoegd. De producent geeft aan dat er ongeveer 700 gram verse bessen in één pot van 70 gram gaan. Deze winkel prijst in Britse ponden.',
    specs: [
      '70 g',
      '100 % bosbessenpoeder van wilde Noordse bosbessen. Niets toegevoegd',
      'Ongeveer 700 g verse bessen geven 70 g bessenpoeder',
      'Energie 367 kcal / 1559 kJ, eiwit 5 g, koolhydraten 54 g waarvan suikers 34 g, vezels 31 g, vet 0,8 g, zout 0,01 g',
    ],
    specLabels: [undefined, undefined, 'Bessengebruik', 'Voedingswaarde per 100 g'],
  },
  'arctic-power-berries-sea-buckthorn-powder': {
    name: 'Duindoornpoeder 70 g',
    description:
      'Gevriesdroogde Noordse duindoorn, 70 gram, niets toegevoegd. Zuur en helder oranje, dus een theelepel komt in de pap verder dan u zou denken. Deze winkel prijst in Britse ponden.',
    specs: [
      '70 g',
      '100 % duindoornpoeder van Noordse duindoornbessen. Niets toegevoegd',
      'Ongeveer 700 g verse bessen geven 70 g bessenpoeder',
      'Energie 489 kcal / 2045 kJ, eiwit 13 g, koolhydraten 24 g waarvan suikers 14 g, vezels 28 g, vet 25 g, zout 0,06 g',
    ],
    specLabels: [undefined, undefined, 'Bessengebruik', 'Voedingswaarde per 100 g'],
  },
  'kaapa-mushrooms-pakuri-powder': {
    name: 'Kääpä Mushrooms chagaextractpoeder 30 g',
    description:
      'Een pot van 30 gram chaga-extractpoeder van Kääpä Mushrooms, dat functionele paddenstoelen oogst in Noordse bossen, bedoeld om door warme dranken te roeren. Ruohonjuuri levert alleen binnen het douane- en belastinggebied van de Europese Unie, en het etiket vermeldt interacties met medicijnen die u beter eerst kunt lezen.',
    specs: [
      '30 g',
      '100 % chaga, biologisch. 100 mg bètaglucaan per dagdosis',
      'Finland',
      'Biologisch met het Europese biologische blad. Glutenvrij, lactosevrij, zuivelvrij, sojavrij, suikervrij, cafeïnevrij, zonder toevoegingen, veganistisch, wild',
      'Chaga mag niet gelijktijdig gebruikt worden met antibiotica, bloedverdunners, penicilline of intraveneuze glucose. Neem de op de verpakking vermelde dosis en overschrijd die niet',
      '6430071310212',
    ],
    specLabels: [undefined, undefined, undefined, 'Dieet', 'Waarschuwing', 'EAN'],
  },
  'arctic-warriors-spruce-sprout-powder': {
    name: 'Arctic Warriors sparrenscheutpoeder 40 g',
    description:
      'Gevriesdroogde sparrenscheuten, met de hand geplukt binnen een venster van twee weken in biologische staatsbossen, en maar om het jaar uit hetzelfde bos. Citrus en hars in één lepel, 382 mg vitamine C per 100 g.',
    specs: [
      '40 g',
      'Gevriesdroogde sparrenscheuten',
      '382 mg per 100 g',
    ],
    specLabels: [undefined, undefined, 'Vitamine C'],
  },
  'arctic-warriors-nettle-powder': {
    name: 'Arctic Warriors brandnetelpoeder 150 g',
    description:
      'Brandnetel geteeld op biologische boerderijen in Lapland, gevriesdroogd tot een poeder dat neutraal genoeg is om door soep of brood te gaan zonder ruzie te maken met de rest van het gerecht.',
    specs: [
      '150 g, bruto 0,162 kg',
      '4 x 16 x 23 cm',
      'Gevriesdroogde brandnetel',
      'Finland, geteeld op biologische boerderijen in Lapland',
      '1 tot 5 theelepels per dag',
      'Energie 1484 kJ / 354 kcal, eiwit 23,6 g, koolhydraten 56 g, vet 3,44 g, zout minder dan 5 mg. Vitamine A 1900 µg',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Dosering', 'Voedingswaarde per 100 g'],
  },
  'arctic-warriors-roseroot-elixir': {
    name: 'Arctic Warriors rozenwortelelixer 100 ml',
    description:
      'Rozenwortel groeit op de vochtige beekoevers en rotswanden van de Laplandse fjälls, en Arctic Warriors trekt hem samen met brandnetel in plantaardige glycerol. Een theelepel gaat in thee, pap of yoghurt.',
    specs: [
      '100 ml',
      'Rozenwortel en brandnetel',
    ],
  },
  'omega7-sea-buckthorn-olive-oil': {
    name: 'Omega7 SBA24 duindoorn- en olijfolie 150 ml',
    description:
      'Duindoornbessenolie en zaadolie samen met olijfolie, ontwikkeld en gemaakt in Finland. De producent standaardiseert de gehaltes vitamine A en E in plaats van ze aan de oogst over te laten.',
    specs: [
      '150 ml',
      'Duindoornbessenolie en zaadolie met olijfolie, gestandaardiseerde gehaltes vitamine A en E',
      'Ontwikkeld en gemaakt in Finland',
      'Volg de dosis op de verpakking en overschrijd die niet. Een voedingssupplement vervangt geen gevarieerde voeding. Buiten bereik van kinderen houden',
    ],
    specLabels: [undefined, undefined, undefined, 'Let op'],
  },
  'kaino-spruce-sprout-sparkling': {
    name: 'KAINO Drinks bruisende sparrenscheutdrank 0,2 l',
    description:
      'Een alcoholvrije bruisende drank van Finse biologische ingrediënten, zodat een toost in een hut niet per se alcohol hoeft te bevatten. Serveer hem koud, anders verdwijnt het sparrenaroma onder de bubbels.',
    specs: [
      '0,2 l',
      'Gemaakt van 100 % Finse biologische ingrediënten. Alcoholvrij',
      'Finland',
      'Energie 122,65 kJ / 29,3 kcal, vet minder dan 0,1 g waarvan verzadigd minder dan 0,1 g, koolhydraten 6,9 g waarvan suikers 6,9 g, eiwit minder dan 0,1 g, zout minder dan 0,1 g',
      'Veganistisch. Europees biologisch blad',
    ],
    specLabels: [undefined, undefined, undefined, 'Voedingswaarde per 100 ml', 'Dieet en certificering'],
  },
  'arabia-moomin-mug-snufkin': {
    name: 'Arabia Moomin mok, Snufkin',
    description:
      'Arabia drukt de tekeningen van Tove Jansson sinds 1990 op deze mokken, en verzamelaars houden per jaar bij welke uit productie gaan. Snufkin is degene die in de herfst vertrekt en in het voorjaar terugkomt.',
    specs: ['0,3 l', 'Tove Jansson'],
    specLabels: [undefined, 'Illustratie'],
  },
  'arabia-moomin-mug-friendship': {
    name: 'Arabia Moomin mok, Friendship',
    description:
      'De mok toont Ninny, het onzichtbare kind dat bang is voor het donker en langzaam weer zichtbaar wordt zodra iemand aardig tegen haar is. Een stillere keuze dan de bekende figuren.',
    specs: ['0,3 l', 'Tove Jansson'],
    specLabels: [undefined, 'Illustratie'],
  },
  'arabia-moomin-figurine-moomintroll': {
    name: 'Arabia Moomin minifiguur, Moomin',
    description:
      'Een handgemaakt keramisch figuurtje, in de jaren negentig getekend door Tuulikki Pietilä en verkocht in een eigen doosje. Klein genoeg om in een jaszak mee naar huis te reizen.',
    specs: ['Tuulikki Pietilä, jaren 1990', 'Handgemaakt keramiek, verkocht in een eigen doosje'],
    specLabels: ['Ontwerper', 'Vervaardiging'],
  },
  'fiskars-moominpappa-scissors': {
    name: 'Fiskars Moominpappa universele schaar',
    description:
      'Fiskars-scharen met oranje handvat liggen in meer Finse keukenlades dan welk ander gereedschap ook. Deze schaar is 21 cm in roestvrij staal met Moominpappa op het handvat.',
    specs: ['21 cm', 'Roestvrij staal'],
  },
  'rento-tar-sauna-soap': {
    name: 'Rento teer-saunazeep 150 g',
    description:
      'Dennenteer is eerst een Finse geur en pas daarna een Finse smaak, en hij hoort meer in de sauna dan waar ook. Op basis van plantaardige olie, opgehangen aan een jutekoord zodat hij tussen twee beurten droogt.',
    specs: ['150 g', 'Zeep op basis van plantaardige olie'],
  },
  'rento-birch-sauna-honey': {
    name: 'Rento berken-saunahoning 150 ml',
    description:
      'Smeer hem op de schone huid, laat hem intrekken in de zachte hitte, spoel warm af. Saunahoning is het deel van het Finse saunaritueel dat bezoekers nooit bedenken mee naar huis te nemen.',
    specs: ['150 ml'],
  },
  'rento-blueberry-sauna-honey': {
    name: 'Rento bosbes-saunahoning 150 ml',
    description:
      'De scrubvariant, geparfumeerd met bosbes. Zelfde gebruik als de berkenvariant: op de schone huid, laat de hitte het werk doen, spoel warm af.',
    specs: ['150 ml'],
  },
  'rento-sauna-pillow': {
    name: 'Rento Pino saunakussen 50 x 22 cm',
    description:
      'Een jacquardgeweven kussen voor hoofd en nek op de saunabank. Het houdt zijn vorm, en dat is het hele verschil tussen een saunakussen en een opgevouwen handdoek.',
    specs: ['50 x 22 cm', 'Zwart'],
  },
  'rento-linen-back-scrubber': {
    name: 'Rento rugwasser van linnenbadstof 14 x 70 cm',
    description:
      'Linnen badstof, lang genoeg om over de eigen rug te reiken. De huid wordt eerst zacht in de hitte en wordt daarna gewassen, en dat is de volgorde die Finnen aanhouden zonder erbij na te denken.',
    specs: ['14 x 70 cm', 'Linnen badstof'],
  },
  'rento-linen-wash-mitt': {
    name: 'Rento washand van linnen badstof 14 x 24 cm',
    description:
      'Dezelfde linnen badstof als de rugwasser, in een want met een dubbele handpalm. Het goedkoopste in dit deel en het enige dat mensen echt elke week gebruiken.',
    specs: ['14 x 24 cm', 'Linnen badstof, dubbele handpalm'],
  },
  'emendo-sauna-scents': {
    name: 'Emendo saunageuren: salmiak, dennenhars, sisu, 3 x 10 ml',
    description:
      'Drie geuren op een houten standaard, en een ervan is salmiak. Veel Finser dan salmiak en sauna wordt het niet, en deze set legt ze in dezelfde opgietlepel.',
    specs: ['3 x 10 ml op een houten standaard', 'Salmiak, dennenhars, sisu'],
    specLabels: [undefined, 'Geuren'],
  },
  'aurora-mini-kuksa': {
    name: 'Mini-kuksa met leren lus, 4 cm',
    description:
      'Een kuksa van 4 cm bedoeld voor een borrel in plaats van koffie, met een leren lus voor aan de riem. De kleinste en goedkoopste manier om deze vorm te bezitten.',
    specs: ['Diameter 4 cm'],
  },
  'fazer-super-salmiakki': {
    name: 'Fazer Super Salmiakki pastilles 80 g',
    description:
      'De hardste van de salmiakklassiekers, sinds de jaren zeventig verkocht in hetzelfde blikvormige doosje. Geef een bezoeker er een en u weet binnen tien seconden in welk kamp hij thuishoort.',
    specs: ['80 g'],
  },
  'fazer-pantteri-salmiakki': {
    name: 'Fazer Pantteri salmiaksnoep 210 g',
    description:
      'Zachte mentholsalmiak die al meer dan vijftig jaar gemaakt wordt. Milder dan de pastilles, dus dit is de zak voor mensen die nog nooit salmiak geproefd hebben.',
    specs: ['210 g'],
  },
  'halva-salmiakkiruutu': {
    name: 'Halva Salmiakkiruutu 170 g',
    description:
      'Halva maakt deze salmiak in blokjes sinds 1960 in Pitäjänmäki in Helsinki. Taaier dan de versies van Fazer en degene waarvan Finnen volhouden dat het het origineel is.',
    specs: ['170 g', 'Sinds 1960 gemaakt in Pitäjänmäki, Helsinki'],
  },
  'sisu-xylitol-salmiakki': {
    name: 'Sisu Xylitol salmiakpastilles 36 g',
    description:
      'Salmiak gezoet met xylitol en voorzien van het keurmerk van de Finse tandartsenvereniging. Het doosje past in een jaszak, en daarom liggen ze in elke Finse auto.',
    specs: ['36 g', 'Xylitol. Draagt het keurmerk van de Finse tandartsenvereniging'],
    specLabels: [undefined, 'Zoetstof'],
  },
  'leijona-tar-liquorice': {
    name: 'Leijona teerdrop pastilles 32 g',
    description:
      'Drop op smaak gebracht met dennenteer, gemaakt sinds 1933. Teer is een Finse smaak die in snoep, saunazeep en zelfs ijs terechtkomt, en dit is de goedkoopste manier om hem te proberen.',
    specs: ['32 g'],
  },
  'fazer-hazelnut-chocolate': {
    name: 'Karl Fazer melkchocolade met hele hazelnoten 200 g',
    description:
      'De blauwe reep met hele hazelnoten in melkchocolade. Fazer gebruikt sinds 1922 hetzelfde blauwe papier, en daarom is dit de reep die Finnen mee naar het buitenland nemen.',
    specs: ['200 g'],
  },
  'fazer-light-milk-chocolate': {
    name: 'Karl Fazer lichte melkchocolade 180 g',
    description:
      'Een lichtere, mildere versie van de blauwe reep. Als de klassieke u te zoet is, neem dan deze.',
    specs: ['180 g'],
  },
  'fazer-fazerina': {
    name: 'Fazer Fazerina sinaasappeltruffelreep 99 g',
    description:
      'Sinaasappeltruffel binnen melkchocolade, gemaakt sinds 1953. Dunner dan de blauwe reep en degene die een rugzak overleeft zonder tot een blok te smelten.',
    specs: ['99 g'],
  },
  'fazer-jaffa-orange': {
    name: 'Fazer Jaffa sinaasappelcakejes 300 g',
    description:
      'Biscuitbodem, sinaasappelmarmelade en pure chocolade erbovenop. Geen koekje en geen cake, en precies daarover hebben Finnen elke keer weer discussie.',
    specs: ['300 g'],
  },
  'north-outdoor-arctic-250-balaclava': {
    name: 'North Outdoor Arctic 250 merinobivakmuts',
    description:
      'Het warmste breisel dat North Outdoor maakt, gevormd om onder een helm te zitten. Op een sneeuwscooter of een rendierslee komt de kou het eerst binnen bij de hals en de wangen, en dat gat sluit deze laag.',
    specs: [
      'Merinowollen breisel, gewicht Arctic 250',
      'One size',
      'Zwart',
      'North Outdoor, Oulu, Finland',
    ],
  },
  'north-outdoor-kevo-gloves': {
    name: 'North Outdoor Kevo merinohandschoenen',
    description:
      'Gebreid van mulesingvrije merino in de eigen breierij van North Outdoor in Oulu. Dun genoeg om op de koudste dagen onder een want te dragen en om aan te houden als u een foto maakt.',
    specs: ['100 % merinowol, mulesingvrij', 'M, L, XL', 'Indigoblauw', 'Gebreid in Oulu, Finland'],
  },
  'north-outdoor-heavyweight-gaiter': {
    name: 'North Outdoor Heavyweight merinonekwarmer',
    description:
      'Merinofleece, dik genoeg om over de neus te trekken terwijl u wacht tot het licht verschijnt. Wol blijft isoleren wanneer uw adem erin condenseert, en dat is nu net het probleem van stilstaan in de kou.',
    specs: ['Merinofleece', 'One size', 'Zwart', 'North Outdoor, Oulu, Finland'],
  },
  'north-outdoor-sointu-cardigan': {
    name: 'North Outdoor Sointu merinovest',
    description:
      'Een recht merinovest dat eruitziet als binnenkleding maar werkt als tussenlaag. Het enige stuk uit deze set dat u na de safari aan tafel zou dragen.',
    specs: ['100 % merinowol', 'XS–2XL', 'Latte', 'North Outdoor, Oulu, Finland'],
  },
  'north-outdoor-arctic-260-zip-neck': {
    name: 'North Outdoor Arctic 260 merinotrui met rits',
    description:
      'Een trui met hoge kraag en rits in 100 procent merino, dik genoeg om binnen alleen te dragen en om buiten als tussenlaag te werken. De rits is het punt: u opent hem tijdens het lopen en sluit hem als u stilstaat.',
    specs: [
      '100 % merinowol',
      'S–3XL',
      'Granietgrijs en zwart',
      'North Outdoor, Oulu, Finland',
      'Hoge beschermende kraag, afgedekte rits, verlengde achterzoom',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Details'],
  },
  'halti-hossa-baselayer-men': {
    name: 'Halti Hossa II merino onderkledingset, heren',
    description:
      'Shirt en lange onderbroek in één doos, merino van 190 g op 20,5 micron. De laag het dichtst op de huid bepaalt of de rest van de outfit werkt, en dat is precies de laag waar de meeste bezoekers zonder aankomen.',
    specs: [
      '100 % merinowol, 190 g/m², 20,5 micron, 1x1 rib',
      'Shirt met lange mouwen en lange onderbroek',
      'Binnenstebuiten wassen',
    ],
    specLabels: [undefined, 'Inhoud van de set', undefined],
  },
  'halti-hossa-baselayer-women': {
    name: 'Halti Hossa II merino onderkledingset, dames',
    description:
      'Dezelfde merinoset van 190 g op damesmaat gesneden. Wol houdt zijn warmte vast wanneer u onderweg zweet en daarna stilstaat om te kijken, en zo ziet een dag in Lapland er in werkelijkheid uit.',
    specs: [
      '100 % merinowol, 190 g/m², 20,5 micron, 1x1 rib',
      'Shirt met lange mouwen en lange onderbroek',
      'Binnenstebuiten wassen',
    ],
    specLabels: [undefined, 'Inhoud van de set', undefined],
  },
  'halti-heatgrid-midlayer': {
    name: 'Halti HeatGrid tussenlaagjas, heren',
    description:
      'Wafelbreisel dat lucht vasthoudt zonder volume toe te voegen onder een shell. Dit is de laag tussen de merino en de parka, en hem weglaten is de reden dat mensen verkleumd terugkomen.',
    specs: [
      'Wafelbreisel aan de binnenkant 95 % gerecycled polyester / 5 % elastaan; jerseybreisel 92 % gerecycled polyester / 8 % elastaan',
      'Binnenstebuiten wassen met gelijke kleuren, ritsen sluiten voor het wassen',
    ],
  },
  'halti-taival-dx-jacket': {
    name: 'Halti Taival DX 3L shelljas, heren',
    description:
      'Een drielaagse shell met 20 000 mm waterdichtheid en 30 000 g ademend vermogen. Die twee getallen tellen in verschillende richtingen: het eerste houdt natte sneeuw buiten, het tweede laat het zweet van een klim ontsnappen in plaats van het binnenin te laten bevriezen.',
    specs: [
      'DrymaxX Nano gebreide shell, 3 lagen. 100 % gerecycled polyester',
      '20 000 mm',
      '30 000 g/m²/24 h',
    ],
    specLabels: [undefined, 'Waterdichtheid', 'Ademend vermogen'],
  },
  'halti-sykli-ski-gloves': {
    name: 'Halti Sykli skihandschoenen',
    description:
      'Waterdichte handschoen met 120 g isolatie, een leren handpalm en een snowlock-boord die voorkomt dat sneeuw zich bij de pols ophoopt als u valt. Gemaakt voor pisteskiën in Levi of Ylläs en niet om mee door de stad te lopen.',
    specs: [
      'DrymaxX, rekt in 4 richtingen, waterdicht en winddicht. Leren handpalm',
      '120 g Microtherm Dynamic',
      '15 000 mm / 15 000 g/m²/24 h',
    ],
    specLabels: [undefined, 'Isolatie', 'Waterdichtheid en ademend vermogen'],
  },
  'halti-merino-socks-2pack': {
    name: 'Halti merinowollen sokken, 2-pack',
    description:
      'Twee paar, omdat het paar dat u vandaag droeg morgenochtend niet droog is. Merinomengsel in plaats van zuivere wol, wat herhaald machinewassen beter doorstaat.',
    specs: [
      '40 % merinowol, 40 % acryl, 19 % polyamide, 1 % elastaan',
      '2 paar',
      'Gemaakt in Europa',
    ],
    specLabels: [undefined, 'Verpakkingsgrootte', undefined],
  },
  'husky-farm-safari-rovaniemi': {
    name: 'Bezoek aan een huskyfarm en huskysafari voor twee, Rovaniemi',
    description:
      'Een cadeaukaart voor een rondleiding op een echte huskyfarm bij Rovaniemi, gevolgd door een sledetocht achter de honden door het winterbos. Nu gekocht, per e-mail bezorgd, en de ontvanger kiest zelf de datum.',
    specs: [
      'Rondleiding op een huskyfarm en een huskysafari voor twee. De gids kan u ophalen binnen 10 km van Rovaniemi',
      'Ongeveer 3,5 u',
      '2 personen',
      'Rovaniemi. De exacte locatie wordt bij het boeken bevestigd',
      'Wintermaanden, november tot april',
      'Engels',
      '3 jaar geldig',
    ],
    specLabels: [undefined, 'Duur', 'Deelnemers', 'Locatie', 'Seizoen', 'Taal van de gids', 'Cadeaukaart'],
  },
  'reindeer-safari-rovaniemi': {
    name: 'Rendiersafari voor twee, Rovaniemi',
    description:
      'Een rendiersafari in de avond op een echte boerderij bij Rovaniemi: een ronde van 2,5 km achter de rendieren, een bezoek aan de boerderij en een kleine snack. Bij heldere hemel kan het noorderlicht verschijnen, al kan niemand dat beloven.',
    specs: [
      'Toegang tot een rendierboerderij en een tocht van 2,5 km in een rendierslee voor twee, met een kleine snack. Ophalen binnen 10 km van Rovaniemi',
      '2,5 tot 3 uur',
      '2 personen',
      'Rovaniemi. De exacte locatie wordt bij het boeken bevestigd',
      'Wintermaanden, december tot maart. De safari vertrekt in de avond',
      'Engels',
      '3 jaar geldig',
    ],
    specLabels: [undefined, 'Duur', 'Deelnemers', 'Locatie', 'Seizoen', 'Taal van de gids', 'Cadeaukaart'],
  },
  'aurora-tour-kilpisjarvi': {
    name: 'Noorderlichttocht per sneeuwscooter voor twee, Kilpisjärvi',
    description:
      'Kilpisjärvi staat bekend om zijn uitzonderlijk heldere nachthemel. Een korte rit per sneeuwscooter brengt u naar een plek waar u het noorderlicht in volledige natuurrust bekijkt, met warme dranken tegen de kou. Avonden van 20.00 tot 23.00, onder weersvoorbehoud.',
    specs: [
      'Begeleide noorderlichttocht voor twee, ongeveer 15 km per sneeuwscooter, warme dranken inbegrepen',
      '3 uur, van 20.00 tot 23.00',
      '2 personen',
      'Kilpisjärvi',
      '18 jaar om te rijden, 8 jaar in de slee',
      '3 jaar geldig',
    ],
    specLabels: [undefined, 'Duur', 'Deelnemers', 'Locatie', 'Leeftijdsgrens', 'Cadeaukaart'],
  },
  'glass-igloo-night-levi': {
    name: 'Nacht in een glazen iglo voor twee, Levi',
    description:
      'Een nacht voor twee in een warme glazen iglo hoog op de fjäll van Levi. Het elektrisch verwarmde glas blijft helder terwijl u vanuit een gemotoriseerd tweepersoonsbed naar het noorderlicht speurt. Welkomstdrankje, badjassen en ontbijt inbegrepen, met eigen kitchenette, douche en wc.',
    specs: [
      'Eén nacht voor twee in een glazen iglo van Superior-klasse, welkomstdrankje, badjassen en sloffen, ontbijt. Vervoer niet inbegrepen',
      '1 nacht, uitchecken om 11.00',
      '2 personen',
      'Levi, hoog op de fjäll',
      '23 m², verwarmd condensvrij glas, kitchenette, douche en wc, gemotoriseerd tweepersoonsbed',
      'Geldig voor verblijven 27.08-10.11 en 01.04-12.04',
    ],
    specLabels: [undefined, 'Duur', 'Deelnemers', 'Locatie', 'Iglo', 'Cadeaukaart'],
  },
  'gold-panning-day-inari': {
    name: 'Goudzoekersdag voor vier, Inari',
    description:
      'Een dag op een werkende goudclaim in Inari voor een groep van vier: eerst de geschiedenis, dan met de hand wassen en een blik op het machinale graven. Maaltijden en vervoer vanaf het centrum van Saariselkä inbegrepen, en gevonden goud gaat mee naar huis.',
    specs: [
      'Een goudzoekersdag van 5 uur op een werkende claim voor vier, met begeleiding bij het wassen met de hand en een blik op machinaal graven. Maaltijden, uitrusting en vervoer van het centrum van Saariselkä naar de claim en terug inbegrepen',
      '5 uur',
      '4 personen',
      'Inari',
      'Voorjaars- en zomerseizoen',
      '3 jaar geldig',
    ],
    specLabels: [undefined, 'Duur', 'Deelnemers', 'Locatie', 'Seizoen', 'Cadeaukaart'],
  },
  'foodin-six-mushroom-blend': {
    name: 'Foodin zes-paddenstoelenmix 40 g',
    description:
      'Chaga, reishi, pruikzwam, cordyceps, shiitake en maitake in één pot, gemalen voor koffie of smoothies. Eén pot dekt de hele plank functionele paddenstoelen.',
    specs: ['40 g', 'Chaga, reishi, pruikzwam, cordyceps, shiitake, maitake'],
  },
  'foodin-nordic-berry-powder': {
    name: 'Foodin Noordse bessenpoedermix 120 g',
    description:
      'Een Finse mix van noordelijke bessen als één poeder, voor pap en yoghurt. De lichtste manier om een zomer aan Noordse bessen mee naar huis te nemen.',
    specs: ['120 g', 'Gemaakt in Finland'],
  },
  'foodin-chaga-tincture': {
    name: 'Foodin chagatinctuur 50 ml',
    description:
      'Finse chaga als druppels in plaats van poeder: een flesje van 50 ml dat niet gezet hoeft te worden. Het reisformaat van het hele chaga-idee.',
    specs: ['50 ml', 'Finse chaga'],
  },
  'kaavi-chaga-chunks': {
    name: 'Kaavi Porcini chagastukken 100 g',
    description:
      'Grove stukken Finse berkenchaga om langzaam te trekken, zoals hij hier werd gedronken lang voordat iemand superfood zei. Eén zak is goed voor vele potten.',
    specs: ['100 g', 'Laten trekken als langzaam gezette thee'],
    specLabels: [undefined, 'Gebruik'],
  },
  'puhdistamo-instant-chaga': {
    name: 'Puhdistamo instant chaga-extractpoeder 28 g',
    description:
      'Chaga die direct oplost in heet water, zonder trekken. De pot van 28 gram past in elke bagage en doorstaat de reis beter dan een zak stukken.',
    specs: ['28 g'],
  },
  'puhdistamo-conifer-extract': {
    name: 'Puhdistamo naaldboomextract 50 ml',
    description:
      'Een extract uit Finse naaldbomen, in te nemen als druppels. De bosgeur van een wandeling in Lapland in een flesje voor de jaszak.',
    specs: ['50 ml'],
  },
  'nb-little-my-beanie': {
    name: 'Kleine Mij grofgebreide muts',
    description:
      'Dikke gebreide muts met Kleine Mij op de omslag, in een wolmix die zijn vorm houdt na een week van op- en afzetten. Eén volwassenmaat, en het enige Moomin-figuur dat het weer in Lapland zou goedkeuren.',
    specs: [
      'Acryl, nylon en wol',
      'Volwassenen, één maat',
      'Officieel Moomin-product',
    ],
    specLabels: [undefined, undefined, 'Licentie'],
  },
  'nb-moomintroll-mittens': {
    name: 'Moomintroll wanten',
    description:
      'Gebreide wanten met een zachte fleecevoering, 24 centimeter hoog zodat de boord over de jasmouw valt. Volwassenmaat, en goedkoop genoeg dat het te overleven is als er eentje op een huskyslee verloren gaat.',
    specs: [
      '100 % acryl, fleecevoering',
      'Volwassenen, hoogte 24 cm, breedte boven de duim 9,5 cm',
      'Officieel Moomin-product',
    ],
    specLabels: [undefined, undefined, 'Licentie'],
  },
  'nb-moomintroll-love-socks': {
    name: 'Moomintroll Love retrosokken',
    description:
      'Lichtblauwe geribbelde sokken met Moomintroll geborduurd in een roze hart op het scheenbeen, geborduurd en niet bedrukt, dus het motief overleeft de was. Eén maat dekt EU 36 tot 42.',
    specs: [
      '67 % katoen, 25 % polyester, 4 % elastodieen, 3 % nylon, 1 % elastaan',
      'Eén maat, EU 36-42',
      'Geborduurd motief',
    ],
    specLabels: [undefined, undefined, 'Detail'],
  },
  'nb-moomin-classics-tee': {
    name: 'Moomin Classics zwaar T-shirt',
    description:
      'Een katoenen T-shirt van 260 gram in lavendel, boxy pasvorm, met een klein geborduurd Moomintroll op de borst in plaats van een grote print. Zwaar genoeg om recht te vallen in plaats van aan te sluiten.',
    specs: [
      '100 % katoen, 260 g/m2',
      'Unisex, boxy pasvorm, XS tot XXL',
      'Boxy pasvorm, de winkel raadt een maat kleiner aan',
    ],
    specLabels: [undefined, undefined, 'Maattip'],
  },
  'nb-pippi-tee': {
    name: 'Pippi Langkous T-shirt',
    description:
      'Pippi in Finland gedrukt op een katoenen T-shirt van 240 gram, unisex rechte pasvorm met een langere zoom dan gemiddeld. In sommige huizen reist Astrid Lindgren verder dan de Moomins.',
    specs: [
      '100 % katoen, 240 g/m2',
      'Unisex, rechte pasvorm, M tot XXL',
      'Gedrukt in Finland',
    ],
  },
  'nb-moomintroll-hoodie': {
    name: 'Moomintroll hoodie',
    description:
      'Een hoodie van 300 gram katoen en polyester, gedrukt in Finland, unisex rechte pasvorm. Precies de laag waarin u een hutavond echt doorbrengt, zodra de sauna is afgekoeld.',
    specs: [
      '65 % katoen, 35 % polyester, 300 g/m2',
      'Unisex, rechte pasvorm, XS tot XXL',
      'Gedrukt in Finland',
    ],
  },
  'nb-kunnas-kalevala-tote': {
    name: 'Mauri Kunnas Hondenkalevala katoenen tas',
    description:
      'Een katoenen tas bedrukt met illustraties van Mauri Kunnas uit de Hondenkalevala, zijn hondenversie van het Finse nationale epos. Het goedkoopste in deze winkel dat toch een heel land uitlegt.',
    specs: [
      '100 % katoen',
      '38 x 42 cm',
      'Officieel Mauri Kunnas-product',
    ],
    specLabels: [undefined, undefined, 'Licentie'],
  },
  'sk-marimekko-unikko-crossbody': {
    name: 'Marimekko Neat Crossbody Unikko schoudertas',
    description:
      'De Unikko-klaproos op een schoudertas op maat van een telefoon, een portemonnee en een paar handschoenen. Unikko werd in 1964 getekend nadat Armi Ratia bloemenprints had verboden, en het overleefde dat verbod met zestig jaar.',
    specs: [
      'Neat Crossbody, maat M',
      'Unikko, blauw en donkerblauw',
    ],
    specLabels: ['Model', 'Dessin'],
  },
  'sk-moomin-duvet-set': {
    name: 'Moomin dekbedovertrekset 150 x 210 cm, Sydänkäpyset',
    description:
      'GOTS-gecertificeerd katoenen beddengoedset met Moomintroll en Snorkjuffrouw. De Finse dessinnaam Sydänkäpyset beschrijft precies de band die het dessin laat zien.',
    specs: [
      'Dekbedovertrek 150 x 210 cm',
      'GOTS, de Global Organic Textile Standard',
    ],
    specLabels: [undefined, 'Certificering'],
  },
  'sk-novita-wonder-wool': {
    name: 'Novita Wonder Wool DK garen 50 g',
    description:
      'Zuiver wollen garen in DK-dikte van Novita, de spinnerij die Finse breiers al sinds 1928 bevoorraadt. Een bol van 50 gram bevat 112 meter, en de aanbevolen naald is 4 mm.',
    specs: [
      '100 % wol',
      'Bol van 50 g, 112 m',
      '4 mm',
    ],
    specLabels: [undefined, undefined, 'Naalddikte'],
  },
  'sk-aromageddon-sauna-scent': {
    name: 'Aromageddon saunageur Hankihorppy 15 ml',
    description:
      'Munt en cacao als saunageur, wat verkeerd klinkt tot u een Finse winter hebt uitgezeten. Twee tot vier druppels in een schep water, niet op de stenen.',
    specs: [
      '15 ml',
      '2 tot 4 druppels in een schep water',
    ],
    specLabels: [undefined, 'Gebruik'],
  },
  'sk-muurla-moomin-bottle': {
    name: 'Muurla Moomin glazen fles 1 l, Appels',
    description:
      'Een fles van natronglas met beugelsluiting, voor water of sap op tafel in plaats van een pak. Vaatwasserbestendig, één liter, en het appeldessin is het zomerse.',
    specs: [
      '1 l',
      'Natronglas, beugelsluiting',
      'Vaatwasserbestendig',
    ],
    specLabels: [undefined, undefined, 'Onderhoud'],
  },
  'nb-kunnas-kalevala-beanie': {
    name: 'Muts De Kalevala van de honden',
    description:
      'Mauri Kunnas maakte de Kalevala in 1992 tot een hondenepos, en de muts draagt precies die tekening. Gerecycled polyester, één maat voor volwassenen, en licht genoeg om in een jaszak te proppen zodra de bus warm wordt.',
    specs: [
      '100 % gerecycled polyester',
      'Volwassenen, één maat',
      'Mauri Kunnas, De Kalevala van de honden',
    ],
    specLabels: [undefined, undefined, 'Illustratie'],
  },
  'nb-little-my-mittens': {
    name: 'Kleine Mij wanten',
    description:
      'Het bordeauxrode paar bij de Moomin-wanten, dezelfde fleecevoering en dezelfde prijs. De boord is twee centimeter korter, en het personage past bij wie Moomin net iets te meegaand vindt.',
    specs: [
      '100 % acryl, fleecevoering',
      'Volwassenen, hoogte 22 cm, breedte boven de duim 9,5 cm',
      'Officieel Moomin-product',
    ],
    specLabels: [undefined, undefined, 'Licentie'],
  },
  'nb-kunnas-santa-mug': {
    name: 'Kerstman take-awaybeker',
    description:
      'Kunnas tekende de kerstman van Korvatunturi zoals Finse kinderen hem voor zich zien, en hier staat hij op een beker van 450 ml van PLA in plaats van fossiel plastic. De siliconen band is waar u hem vasthoudt als de koffie te heet is voor een blote hand.',
    specs: [
      '450 ml',
      'Beker en deksel van PLA, band van siliconen voor levensmiddelen',
      'Mauri Kunnas',
    ],
    specLabels: [undefined, undefined, 'Illustratie'],
  },
  'nb-little-my-thermal-bottle': {
    name: 'Kleine Mij thermosfles 0,55 l',
    description:
      'Dubbelwandig staal, 550 milliliter, en de fabrikant geeft zes uur warmhouden op. Dat is ongeveer één sneeuwscootersafari, precies de praktijktest waarvoor deze fles gekocht wordt.',
    specs: [
      '550 ml',
      'Roestvrij staal, PP-deksel, siliconen afdichting',
      'Zes uur volgens de fabrikant',
    ],
    specLabels: [undefined, undefined, 'Houdt warm'],
  },
  'nb-little-my-neckpillow': {
    name: 'Kleine Mij nekkussen',
    description:
      'Traagschuim onder een zachte hoes, voor de nachttrein Helsinki–Rovaniemi of de vlucht terug. Klein genoeg om aan de tas te klikken, en dat is het enige soort reiskussen dat iemand echt houdt.',
    specs: [
      'Traagschuim, zachte hoes',
      'Officieel Moomin-product',
    ],
    specLabels: [undefined, 'Licentie'],
  },
  'nb-moomintroll-love-cushion': {
    name: 'Moomin Love kussen',
    description:
      'Een kussen in de vorm van Moomin in plaats van een vierkant met opdruk, in meerdere maten van 45 tot 75 centimeter hoog. Het soort ding dat op de bank van de hut belandt en daar blijft.',
    specs: [
      'Polyester',
      'Meerdere maten, hoogte 45–75 cm',
      'Officieel Moomin-product',
    ],
    specLabels: [undefined, undefined, 'Licentie'],
  },
  'nb-little-my-poster': {
    name: 'Kleine Mij poster',
    description:
      'Ontworpen en gedrukt in Helsinki op zijdepapier van 200 gram, in 30 × 40 of 50 × 70. Een poster rolt in een koker en weegt niets, wat u van de meeste dingen die mensen uit Lapland mee naar huis slepen niet kunt zeggen.',
    specs: [
      'Zijdepapier, 200 g',
      '30 × 40 cm of 50 × 70 cm',
      'Ontworpen en gedrukt in Helsinki',
    ],
    specLabels: [undefined, undefined, 'Productie'],
  },
  'nb-moomin-novels-poster': {
    name: 'Poster van de Moomin-romans',
    description:
      'De omslagen van Tove Janssons Moomin-romans op één vel, dezelfde druk uit Helsinki en dezelfde twee formaten als de personageposters. Voor de lezer in het gezin, niet voor de mokkenverzamelaar.',
    specs: [
      'Zijdepapier, 200 g',
      '30 × 40 cm of 50 × 70 cm',
      'Ontworpen en gedrukt in Helsinki',
    ],
    specLabels: [undefined, undefined, 'Productie'],
  },
  'sk-finland-beanie': {
    name: 'Finland-muts, blauw-wit',
    description:
      'De blauw-witte kwastmuts met FINLAND op de rand, op de tribune gedragen en daarna de rest van de winter. Machinewas op 30.',
    specs: [
      'FINLAND',
      'Machinewas 30 °C',
    ],
    specLabels: ['Opschrift', 'Onderhoud'],
  },
  'sk-finland-tube-scarf': {
    name: 'Finland-colsjaal',
    description:
      'Een naadloze koker met het patroon van de Finse vlag, die u over uw gezicht trekt als de wind van de fjäll komt. Onder de zeven euro, en daarom kopen mensen er drie.',
    specs: [
      'Finse vlag',
      'Handwas',
    ],
    specLabels: ['Patroon', 'Onderhoud'],
  },
  'sk-little-my-sauna-cushion': {
    name: 'Emendo saunakussen Kleine Mij',
    description:
      'Een saunazitkussen naar de originele tekeningen van Tove Jansson, in licentie gemaakt door Emendo. Wat er tussen u en een bank van negentig graden zit.',
    specs: [
      'Naar de originele tekeningen van Tove Jansson',
      'Officieel Moomin Characters-licentieproduct',
    ],
    specLabels: ['Illustratie', 'Licentie'],
  },
  'sk-rento-sauna-hat': {
    name: 'Rento saunamuts van linnenbadstof',
    description:
      'Linnenbadstof houdt de hitte weg van hoofdhuid en haar op de bovenste bank. Het werkt ook andersom: in een hottub in februari houdt hij uw hoofd warm. Machinewas op 60.',
    specs: [
      'Linnenbadstof',
      'Machinewas 60 °C',
    ],
    specLabels: [undefined, 'Onderhoud'],
  },
  'sk-rento-birch-whisk': {
    name: 'Rento gedroogde berkentwijgbundel',
    description:
      'Een gedroogde berkentwijgbundel, voor de sauna in warm water geweekt zodat de blaadjes en de geur terugkomen. Zichzelf ermee slaan is het deel van de sauna waar bezoekers altijd naar vragen en dat ze zelden proberen.',
    specs: [
      'Gedroogde berk',
      'Weken voor de sauna',
    ],
    specLabels: [undefined, 'Voor gebruik'],
  },
  'sk-suomi-hockey-jersey': {
    name: 'Finland supportersshirt',
    description:
      'Het blauw-witte supportersshirt met SUOMI op de borst en het leeuwenwapen, in de snit die u echt naar een wedstrijd aantrekt. Ademend, maten M tot XXL, en tegen februari lijkt elk Fins huishouden er een te hebben.',
    specs: [
      'M–XXL',
      'SUOMI en het leeuwenwapen',
    ],
    specLabels: [undefined, 'Opdruk'],
  },
  'sk-marimekko-unikko-bath-towel': {
    name: 'Marimekko Unikko badlaken 70 × 150 cm',
    description:
      'Unikko op badstof katoen, beige en wit, in het volle formaat 70 bij 150. Het garen is 65 % biologisch katoen en 35 % gerecycled, waarbij het gerecyclede deel uit Marimekko’s eigen snijafval komt.',
    specs: [
      '70 × 150 cm',
      'Badstof katoen, 65 % biologisch en 35 % gerecycled',
      'Unikko, beige en wit',
    ],
    specLabels: [undefined, undefined, 'Dessin'],
  },
  'sk-marimekko-unikko-hand-towel': {
    name: 'Marimekko Unikko handdoek 50 × 70 cm',
    description:
      'Dezelfde Unikko-badstof in handdoekformaat, half zo duur als het badlaken en een stuk makkelijker in een koffer te krijgen. Beige en wit, 65 % biologisch katoen en 35 % gerecycled.',
    specs: [
      '50 × 70 cm',
      'Badstof katoen, 65 % biologisch en 35 % gerecycled',
      'Unikko, beige en wit',
    ],
    specLabels: [undefined, undefined, 'Dessin'],
  },
  'fl-taistelevat-metsot': {
    name: 'Taistelevat metsot satijnen dekbedovertrekset, tweepersoons',
    description:
      'Ferdinand von Wright schilderde de vechtende auerhoenen in 1886 en het werd een van de schilderijen die elke Fin kan noemen. Finlayson drukt het digitaal op satijnkatoen, zodat de kleuren kloppen, met een effen achterkant en de print aan beide zijden van de kussenslopen.',
    specs: [
      'Satijnkatoen',
      'Tweepersoons',
      'Ferdinand von Wright, De vechtende auerhoenen (1886)',
    ],
    specLabels: [undefined, undefined, 'Kunstwerk'],
  },
  'fl-lino-linen-duvet-set': {
    name: 'Lino linnen dekbedovertrekset',
    description:
      'Gewassen linnen met een geborduurde rand, in korstmosgroen of teerbruin. Linnen is zwaar en valt stugger dan katoen, en het wordt bij elke wasbeurt zachter in plaats van te verslijten.',
    specs: [
      'Linnen',
      '240 × 210 + 50 × 60 cm of 150 × 210 + 50 × 60 cm',
      'Korstmosgroen of teerbruin',
    ],
    specLabels: [undefined, undefined, 'Kleuren'],
  },
  'fl-elefantti-duvet-set': {
    name: 'Elefantti dekbedovertrekset, donkergroen',
    description:
      'Laina Koskela tekende Elefantti in 1969 voor een ontwerpwedstrijd van Finlayson en het Instituut voor Kunstnijverheid, en het is sindsdien in productie gebleven. Katoenperkal met 152 draden per inch, waardoor het koel aanvoelt in plaats van zacht.',
    specs: [
      'Katoenperkal, 152 TC',
      '240 × 210 + 50 × 60 cm',
      'Laina Koskela, 1969',
    ],
    specLabels: [undefined, undefined, 'Ontwerp'],
  },
  'fl-reino-bath-towel': {
    name: 'Reino badhanddoek 80 × 160 cm',
    description:
      'GOTS-gecertificeerd biologisch katoen, geweven uit een fijn getwijnd garen zodat hij snel droogt in plaats van vochtig aan de haak te blijven hangen. Volledig badhanddoekformaat, in bruin of roze.',
    specs: [
      '80 × 160 cm',
      '100 % biologisch katoen, GOTS-gecertificeerd',
      'Bruin of roze',
    ],
    specLabels: [undefined, undefined, 'Kleuren'],
  },
  // katalogin täydennys 2026-09-05
  'makia-kontio-hoodie': {
    name: 'Makia Kontio hoodie',
    description:
      'Hoodie met normale pasvorm van 100 procent biologisch katoen, pas na het naaien geverfd. Stukverven geeft een diepere kleur en een zachtere hand dan garenverven, en de tint houdt haar licht gedragen look was na was.',
    specs: [
      '100 % biologisch katoen, stukgeverfd',
      'S tot XXL',
    ],
  },
  'makia-trademark-hoodie': {
    name: 'Makia Trademark hoodie',
    description:
      'De eenvoudigste hoodie van Makia: normale pasvorm, 100 procent biologisch katoen en het kleine merkteken op de borst. De trui voor een hutweek waarin dezelfde sweater van het ochtendvuur naar de saunaveranda gaat.',
    specs: [
      '100 % biologisch katoen',
      'S tot XXL',
    ],
  },
  'makia-moray-zip-knit': {
    name: 'Makia Moray gebreid vest met rits',
    description:
      'Gebreid vest met rits in normale pasvorm van 100 procent merinowol. Merino warmt zonder dik te zijn en droogt van binnenuit, dus het werkt als laag onder een shell op een fjelltocht en alleen in een warm café.',
    specs: [
      '100 % merinowol',
      'S tot XXL',
    ],
  },
  'makia-form-jacket': {
    name: 'Makia Form winterjas',
    description:
      'Lange winterjas met normale pasvorm en isolatie van gerecycled polyester. Een verborgen boord in de mouwopening sluit de manchet af tegen wind, en dat telt op een januaristraat in Rovaniemi zwaarder dan welke kenmerkenlijst ook.',
    specs: [
      'Isolatie van gerecycled polyester, verborgen boorden in de manchetten',
      'S tot XXL',
    ],
  },
  'makia-martin-beanie': {
    name: 'Makia Martin merino muts',
    description:
      'Muts van 100 procent merinowol met een klein embleem, gebreid in Finland. De goedkoopste weg naar Makia en het stuk dat van oktober tot april het vaakst dagelijks gedragen wordt.',
    specs: [
      '100 % merinowol',
      'Gemaakt in Finland',
      'Eén maat',
    ],
  },
  'makia-mari-balaclava': {
    name: 'Makia Mari gebreide bivakmuts',
    description:
      'Gebreide bivakmuts van een mix van wol, polyester, alpaca en elastaan. Bedekt oren, hals en wangen in één keer, en dat is het verschil tussen een sneeuwscootertocht en een sneeuwscootertocht die je om de verkeerde reden onthoudt.',
    specs: [
      'Mix van wol, polyester, alpaca en elastaan',
      'Eén maat',
    ],
  },
  'halti-pehmee-merino-beanie': {
    name: 'Halti Pehmee merino muts',
    description:
      'Stadsmuts van 100 procent merinowol met dubbele boord, gemaakt in Finland. Halti noemt hem Pehmee, zacht, en het is de muts voor dagen waarop een skimuts eruit zou zien alsof je verkeerd bent afgeslagen.',
    specs: [
      '100 % merinowol',
      'Gemaakt in Finland',
      'Plat drogen',
      'Eén maat',
    ],
  },
  'halti-rockmoon-fleece-hoodie': {
    name: 'Halti Rockmoon fleecejack met capuchon, heren',
    description:
      'Warm fleecejack met capuchon van dubbel geruwde stretchstof, met winddicht microweefsel op capuchon en schouders waar de kou het eerst binnenkomt. Onder een shell op het fjell, alleen rond de hut.',
    specs: [
      'Dubbel geruwde stretchfleece, winddicht microweefsel op capuchon en schouders',
      'S tot XXXL',
    ],
  },
  'halti-viiri-fleece-gloves': {
    name: 'Halti Viiri fleecehandschoenen',
    description:
      'Lichte handschoenen van 45 gram in winddichte Stormwall-fleece, met siliconen gripprint op de handpalm en touchscreentoppen op duim en wijsvinger, zodat de noorderlichtfoto zonder blote handen gemaakt wordt.',
    specs: [
      'Stormwall-fleece 100 % polyester, handpalm 65 % polyester, 32 % polyamide, 3 % elastaan',
      '45 g',
      'Duim en wijsvinger',
      'Fijne was op maximaal 30 °C',
    ],
    specLabels: [undefined, undefined, 'Touchscreen', undefined],
  },
  'nb-moomin-classics-beanie': {
    name: 'Moomin Classics muts',
    description:
      'Muts voor volwassenen uit de collectie Moomin Classics van gerecycled polyester en acryl, beige, één maat. Een officieel Moomin-product, en dat is de lijn die hem van de marktkraamversie scheidt.',
    specs: [
      'Gerecycled polyester en acryl',
      'Volwassenen, één maat',
      'Beige',
    ],
  },
  'nb-snufkin-mens-socks': {
    name: 'Snufkin herensokken',
    description:
      'Herensokken met Snufkin, EU 40 tot 45, 60 procent katoen met polyester, nylon en elastaan voor rek. Het goedkoopste Moomin-cadeau op deze site dat gedragen wordt in plaats van uitgestald.',
    specs: [
      'EU 40-45',
      '60 % katoen, 33 % polyester, 4 % nylon, 2 % elastaan, 1 % elastodieen',
    ],
  },
  'nb-hattifatteners-retro-socks': {
    name: 'Hattifnatten retrosokken, dames',
    description:
      'Sokken in retrostijl met de Hattifnatten, EU 36 tot 42, 67 procent katoen. Rekbaar genoeg dat één maat de meesten past, en het eerste wat een Moomin-lezer pakt als de sokkenla open staat.',
    specs: [
      'EU 36-42',
      '67 % katoen, 25 % polyester, 4 % elastodieen, 3 % nylon, 1 % elastaan',
    ],
  },
  'sk-suomi-propeller-cap': {
    name: 'Suomi supporterspet met propeller',
    description:
      'Blauw-witte propellerpet voor de tribune, de fanzone en de ijshockeyfinale in de kroeg. Geen serieus hoofddeksel, en dat is precies de bedoeling op een avond dat Finland speelt.',
    specs: [
      'Blauw en wit',
    ],
  },
  'sk-muurla-moomin-lantern-tahtihetki': {
    name: 'Muurla Moomin lantaarn Tähtihetki 18 cm',
    description:
      'Handgemaakte lantaarn van loodvrij glas uit Muurla\'s serie Tähtihetki met gouden details, 15,5 cm breed en 18 cm hoog. Dient als kaarslantaarn, als schaal voor het snoep van het seizoen of als vaas voor een klein boeket.',
    specs: [
      'Ø 15,5 cm, hoogte 18 cm',
      'Handgemaakt loodvrij glas',
      'Handwas',
    ],
  },
  'sk-hukka-soapstone-candle': {
    name: 'Hukka Jätkänkynttilä stenen waxinelichthouder',
    description:
      'Stenen waxinelichthouder in de vorm van een jätkänkynttilä, het gespleten houtblokvuur dat houthakkers op de sneeuw aanstaken. 56 mm breed, 100 mm hoog, 310 gram, voor een waxinelichtje van 40 mm. Levend vuur op koude steen, binnen.',
    specs: [
      'Ø 56 x 100 mm, voor een waxinelichtje van Ø 40 mm',
      '0,31 kg',
      '1 houder',
    ],
  },
  'sk-muurla-moomin-enamel-mug-lumipyry': {
    name: 'Muurla Moomin emaillen mok Lumipyry 3,7 dl',
    description:
      'Emaillen mok van 3,7 dl met een kern van koolstofstaal en dubbele emaillelaag, bedrukt met de sneeuwstormscène Lumipyry. Voor warme en koude dranken, mag in de vaatwasser en mee naar het kampvuur, niet in de magnetron.',
    specs: [
      '3,7 dl',
      'Koolstofstaal met dubbele emaillelaag',
      'Vaatwasserbestendig, niet voor de magnetron',
    ],
  },
  'sk-arabia-moomin-pitcher-moominhouse': {
    name: 'Arabia Moomin kan 1,0 l, Moominhuis',
    description:
      'Kan van één liter van Arabia met het Moominhuis, het ronde kachelvormige huis dat Moominpappa zelf bouwde en \'s nachts nooit op slot doet. Met keramisch deksel dat op een zomertafel insecten uit het sap houdt.',
    specs: [
      '1,0 l',
      'Keramisch deksel inbegrepen',
    ],
    specLabels: [undefined, 'Deksel'],
  },
  'sk-moomin-duvet-set-merella': {
    name: 'Moomin dekbedovertrekset 140 x 200 cm, Merellä',
    description:
      'Katoenen dekbedovertrek en kussensloop met de Moomins op zee, overtrek 140 x 200 cm en sloop 50 x 70 cm, ritssluiting. Wassen voor het eerste gebruik, zoals elk bedrukt katoenen beddengoed.',
    specs: [
      'Dekbedovertrek 140 x 200 cm, kussensloop 50 x 70 cm',
      '100 % katoen',
      'Rits',
    ],
    specLabels: [undefined, undefined, 'Sluiting'],
  },
  'sk-arabia-moomintroll-mini-figurine': {
    name: 'Arabia Moomintroll minifiguur',
    description:
      'Handgemaakte keramische Moomintroll van ongeveer 6 cm hoog, in de jaren 1990 ontworpen door Tuulikki Pietilä en verkocht in een eigen geschenkdoos. De figuurtjes worden in series verzameld, wat er één een veilig cadeau maakt en twee een gewoonte.',
    specs: [
      'Hoogte ongeveer 6 cm',
      'Handgemaakt keramiek',
      'Tuulikki Pietilä, jaren 1990',
    ],
    specLabels: [undefined, undefined, 'Ontwerp'],
  },
  'sk-arabia-snorkmaiden-mini-figurine': {
    name: 'Arabia Snorkjuffrouw minifiguur',
    description:
      'Handgemaakte keramische Snorkjuffrouw van ongeveer 6 cm hoog uit de serie van Tuulikki Pietilä uit de jaren 1990, in een eigen geschenkdoos. Zet haar naast de Moomintroll en de twee staan op de vensterbank zoals op de boekomslagen.',
    specs: [
      'Hoogte ongeveer 6 cm',
      'Handgemaakt keramiek',
      'Tuulikki Pietilä, jaren 1990',
    ],
    specLabels: [undefined, undefined, 'Ontwerp'],
  },
  'sk-lapin-puukko-gift-box': {
    name: 'Lapland puukko met lemmetbeschermer, geschenkdoos',
    description:
      'Puukko in Laplandse stijl met lemmetbeschermer, geleverd in een geschenkdoos. De winkel presenteert het als het mes voor bostochten en dagelijkse klussen, en als het soort voorwerp dat wordt doorgegeven in plaats van vervangen.',
    specs: [
      'Lemmetbeschermer en geschenkdoos',
    ],
    specLabels: ['Inbegrepen'],
  },
  'sk-loimu-sauna-thermometer': {
    name: 'Loimu saunathermometer, berken',
    description:
      'Saunathermometer in een berkenhouten lijst met duidelijke wijzerplaat. Hij beantwoordt de enige vraag die een gast stelt voor de eerste schep water, en hij ziet eruit alsof hij op een blokhutwand hoort in plaats van naast een ketel.',
    specs: [
      'Berken',
    ],
  },
  'sk-helsingin-villasukkatehdas-wool-socks': {
    name: 'Helsingin Villasukkatehdas wollen sokken',
    description:
      'Kaardwollen sokken van de enige traditionele wolsokkenfabriek van Finland, gebreid op machines uit de jaren 1950 in Helsinki. 70 procent mulesingvrije wol, gesponnen in Jämsä en geverfd in Kyröskoski, in meerdere maten en vier kleuren genoemd naar schors, mos, korstmos en nacht.',
    specs: [
      '70 % wol (mulesingvrij), 30 % polyamide',
      'Gebreid in Helsinki, wol gesponnen in Jämsä en geverfd in Kyröskoski',
      'Meerdere maten, vier kleuren',
    ],
  },
  'sk-halva-salmiakkikalat': {
    name: 'Halva Salmiakkikalat zoute dropvisjes 230 g',
    description:
      'Visvormige salmiaksnoepjes van Halva, 230 gram, de zak die in elk Fins dashboardkastje ligt. Stevige beet, intense zoute drop, en het eerste wat je een bezoeker geeft die zegt echt Finland te willen proeven.',
    specs: [
      '230 g',
    ],
  },
  'sk-kouvolan-lakritsi-500g': {
    name: 'Kouvolan Lakritsi dropstukken 500 g',
    description:
      'Een halve kilo zachte dropstukken uit Kouvola, gemaakt naar een recept uit 1945 dat in 1960 werd verfijnd door een Engelse dropspecialist. Zo smaakt gewone drop als er niets wordt toegevoegd om de wortel te verbergen.',
    specs: [
      '500 g',
      'Uit 1945, aangepast in 1960',
    ],
    specLabels: [undefined, 'Recept'],
  },
  'sk-fazer-omar-chocolate-bar': {
    name: 'Fazer Omar chocoladereep 180 g',
    description:
      'Gelimiteerde reep van 180 gram voor de 60e verjaardag van Omar: de milde, romige Omar-toffee die sinds 1966 wordt verkocht, in Fazer melkchocolade met minstens 30 procent cacao. Slechts beperkte tijd te koop.',
    specs: [
      '180 g',
      'Melkchocolade met minstens 30 % cacao',
      'Gelimiteerde editie voor het 60-jarig jubileum',
    ],
    specLabels: [undefined, 'Cacao', 'Beschikbaarheid'],
  },
  'sk-fazer-salty-suffeli-puffi': {
    name: 'Karl Fazer Salty Suffeli Puffi chocoladereep 160 g',
    description:
      'Fazers melkchocolade van verse melk met knapperige zout-zoete Suffeli-maïspuffen erdoor. 160 gram, minstens 30 procent cacao, en het antwoord voor wie niet kan kiezen tussen zout en zoet.',
    specs: [
      '160 g',
      'Melkchocolade met minstens 30 % cacao',
    ],
    specLabels: [undefined, 'Cacao'],
  },
  'sk-tyrkisk-peber-chewy': {
    name: 'Fazer Tyrkisk Peber Chewy salmiakpastilles 38 g',
    description:
      'De hete salmiak van Tyrkisk Peber als nieuwe zachte kauwpastille in plaats van een harde schil. Een zakverpakking van 38 gram, door de winkel gelist in augustus 2026, voor wie salmiak en een kick in dezelfde hap wil.',
    specs: [
      '38 g',
    ],
  },
  'sk-tyrkisk-peber-sour-foams': {
    name: 'Fazer Tyrkisk Peber Sour Foams schuimsnoepjes 150 g',
    description:
      'Zachte schuimsnoepjes met een milde Tyrkisk Peber-hitte en zure smaken van kiwi-aardbei en citroen-limoen, 150 gram. Een zachtere weg naar de peperdropfamilie, en de zak die je in gemengd gezelschap als eerste opent.',
    specs: [
      '150 g',
    ],
  },
  'sk-marianne-toffee-rae': {
    name: 'Fazer Marianne Toffee chocoladedragees 150 g',
    description:
      'De Marianne-dragees in een toffeeversie: een glanzende, krokante schil rond een kern van melkchocolade met minstens 28 procent cacao, in een hersluitbare zak van 150 gram. Ook bedoeld om mee te bakken, als er zo lang nog over zijn.',
    specs: [
      '150 g',
      'Melkchocolade met minstens 28 % cacao',
      'Hersluitbare zak',
    ],
    specLabels: [undefined, 'Cacao', 'Verpakking'],
  },
  'sk-fasupala-lakritsi': {
    name: 'Fazer Fasupala Lakritsi wafelkoekjes 199 g',
    description:
      'Hapklare wafels met een vulling met dropsmaak onder een laagje met melkchocoladesmaak, 199 gram, zonder palmolie. De dropversie van een koekje dat Finnen al per doos eten, door de winkel gelist in augustus 2026.',
    specs: [
      '199 g',
      'Zonder palmolie',
    ],
    specLabels: [undefined, 'Vet'],
  },
  'sk-finnish-flavours-cloudberry-jam': {
    name: 'Finnish Flavours premium kruipbraamjam 250 g',
    description:
      'Kruipbraamjam met 75 procent Finse kruipbramen en 20 procent suiker, 250 gram. Kruipbramen rijpen eind juli op Laplandse venen en zijn niet op grote schaal te kweken, en daarom kost een pot zoveel als twee zakken chocolade.',
    specs: [
      '250 g',
      'Finse kruipbraam 75 %, suiker 20 %',
    ],
  },
  'sk-lapin-liha-smoked-reindeer-soup': {
    name: 'Lapin Liha gerookte rendiersoep 400 g',
    description:
      'Romige soep met warm en koud gerookt rendier, 400 gram, gemaakt door Lapin Liha. Verwarmen in een pan; het is de smaak van een Laplandse hutlunch in een pak dat in een koffer past.',
    specs: [
      '400 g',
      'Warm gerookt rendier 3 % en koud gerookt rendier 3 %',
      'Verwarmen in een pan',
    ],
    specLabels: [undefined, undefined, 'Bereiding'],
  },
  'sk-vaasan-ruispalat-5pack': {
    name: 'Vaasan Ruispalat roggebrood 5 x 330 g',
    description:
      'Vijf zakken van het best verkochte brood van Finland: gescheurde volkorenroggebroodjes gebakken op echt zuurdesem van 100 procent Fins graan, zes per zak van 330 gram, 12 procent vezels. Wat Finnen in het buitenland bezoekers vragen mee te nemen.',
    specs: [
      '5 x 330 g, 6 broodjes per zak',
      'Volkorenrogge 87 % van het graan, vezels 12 %',
    ],
  },
  'sk-poikain-parhaat-freeze-dried-blueberry': {
    name: 'Poikain Parhaat gevriesdroogde bosbessen 15 g',
    description:
      'Hele Finse bosbessen, gevriesdroogd en verder niets: 15 gram die in een koffer niets wegen en naar augustus op een veen smaken. Lactosevrij, glutenvrij, veganistisch, zonder toegevoegde suiker of conserveermiddelen.',
    specs: [
      '15 g',
      '100 % Finse gevriesdroogde bosbes',
      'Lactosevrij, glutenvrij, veganistisch, geen toegevoegde suiker, geen conserveermiddelen',
    ],
    specLabels: [undefined, undefined, 'Dieet'],
  },
  'rj-arctic-warriors-blueberry-powder': {
    name: 'Arctic Warriors bosbessenpoeder 45 g',
    description:
      'Finse bosbessen, heel met hun sap gedroogd en gemalen, niets toegevoegd, 45 gram. Een lepel in pap, yoghurt of een smoothie; dezelfde bes wordt hier via Ruohonjuuri verkocht, dat binnen de EU verzendt.',
    specs: [
      '45 g',
      '100 % Finse bosbes, heel gedroogd met het sap',
    ],
  },
  'rj-poikain-parhaat-blueberry-lemonade': {
    name: 'Poikain Parhaat bosbessenlimonade 0,33 l',
    description:
      'Biologische bosbessenlimonade gemaakt in Vehmainen, Tampere, van echte ingrediënten zonder kunstmatige smaak- of kleurstoffen, fles van 0,33 liter. De frisdrank naast de salmiak op een Finse proeftafel.',
    specs: [
      '0,33 l',
      'Gemaakt in Vehmainen, Tampere',
      'Biologisch, geen kunstmatige smaak- of kleurstoffen',
    ],
    specLabels: [undefined, undefined, 'Toevoegingen'],
  },
  'rj-nordic-koivu-birch-sap': {
    name: 'Nordic Koivu berkensap 500 ml',
    description:
      'Berkensap, in het voorjaar getapt wanneer de boom het in de wortels opgeslagen water omhoog haalt, rechtstreeks van de boom gebotteld zonder hittebehandeling of conserveermiddelen, 500 ml. Smaakt licht zoet en vooral naar koud, schoon water.',
    specs: [
      '500 ml',
      'Niet hittebehandeld, geen conserveermiddelen',
    ],
    specLabels: [undefined, 'Verwerking'],
  },
  'rj-kaino-spruce-sprout-sparkling-075': {
    name: 'KAINO Drinks sparrenscheuten biologische bruisdrank 0,75 l',
    description:
      'Alcoholvrije biologische bruisdrank met sparrenscheuten, de tere meiloten van de Finse spar, in een fles van 0,75 liter. Gemaakt in Vehmainen, Tampere, voor de toost op een feest waar niet iedereen drinkt.',
    specs: [
      '0,75 l',
      'Alcoholvrij, biologisch',
      'Gemaakt in Vehmainen, Tampere',
    ],
    specLabels: [undefined, 'Alcohol', undefined],
  },
  'rj-yrttipaja-chaga-powder': {
    name: 'Yrttipaja chagapoeder 35 g',
    description:
      'Gemalen chaga, de zwarte zwam die op berkenstammen groeit, om als thee te zetten: een eetlepel per liter water, minstens tien minuten laten trekken op het vuur en zeven. 35 gram, de goedkoopste manier om pakuri te proberen voor je brokken koopt.',
    specs: [
      '35 g',
      '1 eetlepel per liter water, minstens 10 minuten zachtjes koken en zeven',
    ],
    specLabels: [undefined, 'Gebruik'],
  },
  'rj-forestly-mushroom-chips-chili': {
    name: 'Forestly Foods paddenstoelchips, chili 50 g',
    description:
      'Knapperige chips van biologisch gekweekte shiitake, zacht gegaard en gekruid met chili, zout en peper, 50 gram. Umami in een zak, voor op de bank of verkruimeld over een soep.',
    specs: [
      '50 g',
      'Biologisch gekweekte shiitake, chili, zout en peper',
    ],
  },
  // katalogin täydennys 2026-09-05
  'sk-muurla-moomin-80v-tray': {
    name: 'Muurla Moomin 80 jaar dienblad 27 x 20 cm',
    description:
      'Dienblad van 27 x 20 cm uit Muurla\'s serie Moomin 80 jaar, vaatwasserbestendig. De maat die twee mokken en een bord koekjes van de keuken naar de bank draagt en daar oogt als een deel van de tafel.',
    specs: [
      '27 x 20 cm',
      'Vaatwasserbestendig',
    ],
  },
  'sk-muurla-moomin-glass-box-yhdessa': {
    name: 'Muurla Moomin glazen doosje Yhdessä 11,5 cm',
    description:
      'Hartvormig glazen doosje uit Muurla\'s minireeks Yhdessä, samen, 11,5 x 10 x 5,5 cm, handwas, geleverd in de verkoopverpakking. Bedoeld voor de kleine schatten: ringen, een gevouwen briefje, een eerste tandje.',
    specs: [
      '11,5 x 10 x 5,5 cm',
      'Handwas',
      'Verkoopverpakking',
    ],
    specLabels: [undefined, undefined, 'Verpakking'],
  },
  // katalogin täydennys 2026-09-05
  'sk-aurora-borealis-reindeer-tealight': {
    name: 'Aurora Borealis waxinelichthouder rendier 10 cm',
    description:
      'Gepolijste metalen waxinelichthouder in de vorm van een rendier, 10 cm hoog. Het kleine Lapland-object voor de vensterbank in december, licht genoeg voor een gewatteerde envelop.',
    specs: [
      'Hoogte 10 cm',
      'Gepolijst metaal',
      'Waxinelichtje',
    ],
    specLabels: [undefined, undefined, 'Voor'],
  },
  'sk-muurla-moomin-bottle-05l-marjat': {
    name: 'Muurla Moomin glazen fles 0,5 l, Bessen',
    description:
      'Halveliterfles van sodaglas met een dichte beugelsluiting en de print Bessen, vaatwasserbestendig. Muurla maakt ze voor sap en slasaus, en de halve liter past in de koelkastdeur.',
    specs: [
      '0,5 l',
      'Sodaglas, beugelsluiting',
      'Vaatwasserbestendig',
    ],
  },
  'nb-hattifatteners-cushion': {
    name: 'Hattifnattenkussen',
    description:
      'Polyester kussen in de vorm van een rij Hattifnatten, 45 tot 75 x 30 tot 50 x 10 cm, alleen handwas. Het komt vacuüm verpakt en heeft een dag nodig om zijn vorm terug te krijgen, de enige keer dat Hattifnatten stil blijven.',
    specs: [
      'Polyester',
      '45–75 x 30–50 x 10 cm',
      'Alleen handwas',
      'Vacuüm verpakt, krijgt na het uitpakken zijn vorm terug',
    ],
    specLabels: [undefined, undefined, undefined, 'Verpakking'],
  },
  'sk-emendo-moomin-sauna-seat-cover': {
    name: 'Emendo Moomin Liefde saunahanddoek 150 x 50 cm, bruin',
    description:
      'Saunazitdoek van linnen en katoen, 150 x 50 cm, met Tove Janssons originele Moomin-tekeningen, officieel gelicentieerd product. Linnen neemt vocht op en verdraagt een harde was, dus het ligt op de bank of staat achter de rug.',
    specs: [
      '150 x 50 cm',
      'Linnen 60 %, katoen 40 %',
      'Officieel Moomin Characters-product',
    ],
    specLabels: [undefined, undefined, 'Licentie'],
  },
  'sk-rento-pino-sauna-seat-cover': {
    name: 'Rento Pino saunahanddoek 50 x 150 cm, grijs',
    description:
      'Jacquardgeweven katoenen saunazitdoek, 50 x 150 cm, ontworpen door Anna Säteri voor Rento. Licht katoen voelt koel aan op de hete bank, neemt zweet op, droogt snel, en het patroon doorstaat de was.',
    specs: [
      '50 x 150 cm',
      'Jacquardgeweven katoen',
      'Anna Säteri',
    ],
    specLabels: [undefined, undefined, 'Ontwerp'],
  },
  'sk-moomin-chocolate-chip-biscuit-tin': {
    name: 'Moomin chocolate chip koekjes in blik 200 g',
    description:
      'Mini chocolate chip koekjes, 200 gram, in een Moomin-blik dat de koekjes overleeft als opbergdoos. De chocoladestukjes zijn 16 procent van het koekje en bevatten minstens 40 procent cacaobestanddelen.',
    specs: [
      '200 g',
      'Chocoladestukjes 16 %, in de chocolade minstens 40 % cacaobestanddelen',
      'Verzamelblik, herbruikbaar als opbergdoos',
    ],
    specLabels: [undefined, undefined, 'Verpakking'],
  },
  'sk-paulig-cafe-new-york-beans': {
    name: 'Paulig Café New York koffiebonen 450 g',
    description:
      'Middeldonkere bonenkoffie, 450 gram, Latijns-Amerikaanse arabica met Braziliaanse bonen voor zoetheid en een fruitig randje. Paulig brandt sinds 1876 koffie in Finland, en Finnen drinken er per hoofd meer van dan wie ook.',
    specs: [
      '450 g',
      'Middeldonker gebrand, hele bonen',
      'Latijns-Amerikaanse arabica en Braziliaanse bonen',
    ],
    specLabels: [undefined, 'Branding', undefined],
  },
  // katalogin täydennys 2026-09-05
  'rj-korpihilla-spruce-sprout-sparkling-750': {
    name: 'Korpihilla bruisende sparrenscheutendrank 750 ml',
    description:
      'Alcoholvrije bruisdrank, met de hand gemaakt van sparrenscheuten in Fins Lapland, 750 ml. In 2005 door het blad Viisi Tähteä uitgeroepen tot beste drank van Finland, en nog altijd de fles die opengaat als de toost naar bos moet smaken.',
    specs: [
      '750 ml',
      'Met de hand gemaakt in Fins Lapland',
      'Alcoholvrij',
      'Beste drank van Finland 2005, blad Viisi Tähteä',
    ],
    specLabels: [undefined, undefined, 'Alcohol', 'Onderscheiding'],
  },
}
