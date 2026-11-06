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
    name: 'Iittala Kivi waxinelichthouder 60 mm, grijs',
    description:
      'Een geperste glazen waxinelichthouder van Heikki Orvola, 6 cm hoog, die van één waxinelichtje een blok kleur maakt. Het is de goedkoopste manier om een stuk Iittala te bezitten en hij overleeft de handbagage.',
    specs: [
      '6,5 x 6,5 cm, hoogte 6 cm',
      'Glas',
      'Grijs',
      '0,338 kg bruto',
      'Alleen met de hand wassen',
      'Heikki Orvola, Iittala Kivi',
      '1003-03, EAN 6411920039676',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, 'Ontwerper en collectie', 'Artikelnummer en EAN'],
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
    name: 'Marttiini Lapinleuku 255',
    description:
      'Het traditionele Laplandse mes (lapinleuku), 27 cm in totaal, met een roestvrij lemmet, een gelakt heft van vlamberken en een leren schede. Marttiini maakt zijn messen in Rovaniemi, en deze uitvoering van het model heeft een vingerbeschermer.',
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
    name: 'Fazer Geisha chocoladerepen 37 g, 5 stuks',
    description:
      'Vijf Geisha-repen van 37 g, waarbij Fazer-melkchocolade een knapperige vulling van hazelnootnougat omhult. Fazer geeft aan dat de chocolade zonder palmolie gemaakt is.',
    specs: [
      '5 x 37 g',
      'Melkchocolade met minstens 30 % cacao, hazelnootnougatvulling met 11 % hazelnoten',
      'Energie 550 kcal / 2303 kJ, vet 35 g, verzadigd 17 g, koolhydraten 51 g, suikers 49 g, eiwit 8 g, zout 0,19 g',
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
  'pahkataide-kuksa-bear': {
    name: 'Pahkataide kuksa van vlamberken met benen beerinleg',
    description:
      'Een kuksa van vlamberkenhout met op het handvat een benen inleg met een beer als motief. Pahkataide behandelt zijn bekers met maanzaadolie, die het hout beschermt. De kuksa wordt nooit met afwasmiddel gewassen: omspoelen is genoeg, en dagelijkse koffie vormt een laagje dat het oppervlak extra beschermt.',
    specs: [
      'Vlamberken, benen inleg op het handvat',
      'Omspoelen met water, geen afwasmiddel',
      'Gemaakt in Finland',
    ],
    specLabels: [undefined, undefined, 'Herkomst'],
  },
  'pahkataide-curly-birch-kuksa': {
    name: 'Pahkataide kuksa van vlamberken',
    description:
      'Een eenvoudige kuksa van vlamberken, hetzelfde hout en dezelfde afwerking met maanzaadolie als de bekers met inleg van Pahkataide, zonder versiering. De nerf maakt elk exemplaar anders, en er gaat ongeveer 1,5 dl in.',
    specs: [
      'Vlamberken',
      'Ongeveer 1,5 dl, elk exemplaar is uniek',
      'Omspoelen met water, geen afwasmiddel',
      'Gemaakt in Finland',
    ],
    specLabels: [undefined, undefined, undefined, 'Herkomst'],
  },
  'koivumaa-kuksa-reindeer-bone': {
    name: 'Kuksa E. Koivumaa kuksa van berkenknol met rendierbot',
    description:
      'Een kuksa op traditionele wijze uit een berkenknol gemaakt, met twee vingergaten in het handvat en een versiering van rendierbot. Knolhout verbrandt de lippen niet, en daarom is dit de klassieke beker voor hete koffie bij het vuur. Inwijden met zwarte koffie en daarna alleen omspoelen.',
    specs: [
      'Berkenknol, versiering van rendierbot op het handvat',
      'Ongeveer 1,5 dl, twee gaten in het handvat',
      'Omspoelen met water, geen afwasmiddel en geen vaatwasser',
    ],
  },
  'koivumaa-burl-kuksa': {
    name: 'Kuksa E. Koivumaa kuksa van berkenknol, één gat',
    description:
      'De eenvoudige versie van de knolkuksa van dezelfde maker: berkenknol op traditionele wijze bewerkt, één vingergat in het handvat, ongeveer 1,5 dl. Inwijden met zwarte koffie, waarvan de olie de open poriën van het hout dicht, en nooit in de vaatwasser.',
    specs: [
      'Berkenknol',
      'Ongeveer 1,5 dl, één gat in het handvat',
      'Omspoelen met water, geen afwasmiddel en geen vaatwasser',
    ],
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
    name: 'Halti HeatGrid tussenlaagjas, dames',
    description:
      'Een lichte, technische tussenlaag van Halti in zacht wafelbreisel dat ademt en vocht van de huid afvoert. Hij heeft een doorlopende rits aan de voorkant, een opstaande kraag, zakken met rits en elastische manchetten en zoom.',
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
  'korouoma-waterfalls-rovaniemi': {
    name: 'Bevroren watervallen van Korouoma voor twee, Rovaniemi',
    description:
      'In de winter bevriezen de beekjes langs de wanden van de Korouoma-kloof tot watervallen van blauw ijs. Deze begeleide dagtocht vertrekt vanuit Rovaniemi naar de kloof in Posio, zo’n 110 km verderop. De wandeling is makkelijk, op sneeuwschoenen als de sneeuw daarom vraagt, en onderweg is er een lichte lunch.',
    specs: [
      'Begeleide tocht naar de bevroren watervallen van Korouoma voor twee, met vervoer, lichte lunch en een snack. Ophalen binnen 10 km van het centrum van Rovaniemi',
      'Ongeveer 7 uur inclusief vervoer',
      '2 personen',
      'Korouoma-kloof, Posio. Vertrek vanuit Rovaniemi',
      'Wintermaanden, november tot april',
      'Engels',
      '3 jaar geldig',
    ],
    specLabels: [undefined, 'Duur', 'Deelnemers', 'Locatie', 'Seizoen', 'Taal van de gids', 'Cadeaukaart'],
  },
  'amethyst-mine-snowshoe-luosto': {
    name: 'Sneeuwschoentocht naar de amethistmijn van Luosto voor twee',
    description:
      'Een begeleide dag vanuit Rovaniemi naar de amethistmijn op de top van de Lampivaara, in het nationaal park Pyhä-Luosto. Eerst gaat u op sneeuwschoenen door het park, daarna brengt een sneeuwtrein u naar de mijn. In de mijn mag iedereen zelf graven, en een amethist die u vindt mag u houden.',
    specs: [
      'Begeleide sneeuwschoentocht en bezoek aan de amethistmijn voor twee, met vervoer, een snack bij de rustplaats en alle uitrusting. Warme kleding en schoenen zijn te leen',
      'Ongeveer 7 uur',
      '2 personen',
      'Lampivaara, Luosto. Vertrek vanuit Rovaniemi',
      'Wintermaanden, december tot april',
      'Engels',
      '3 jaar geldig',
    ],
    specLabels: [undefined, 'Duur', 'Deelnemers', 'Locatie', 'Seizoen', 'Taal van de gids', 'Cadeaukaart'],
  },
  'midnight-sun-canoe-rovaniemi': {
    name: 'Kanotocht onder de middernachtszon voor twee, Rovaniemi',
    description:
      'Een begeleide avondtocht per kano bij Rovaniemi in het licht van de middernachtszon, afgesloten met een snack bij een open vuur. De gids legt vooraf de basis van het pagaaien uit, dus ervaring is niet nodig. De tochten worden in de zomer gehouden, van juni tot augustus.',
    specs: [
      'Begeleide kanotocht voor twee met uitrusting, pagaai- en veiligheidsinstructie, een snack bij het vuur en vervoer binnen 10 km van Rovaniemi',
      'Ongeveer 3 uur',
      '2 personen',
      'Rovaniemi. De exacte locatie wordt bij het boeken bevestigd',
      'Zomermaanden, juni tot augustus',
      'Engels',
      '3 jaar geldig',
    ],
    specLabels: [undefined, 'Duur', 'Deelnemers', 'Locatie', 'Seizoen', 'Taal van de gids', 'Cadeaukaart'],
  },
  'halti-snowmobile-kilpisjarvi': {
    name: 'Met de sneeuwscooter de Halti op voor twee, Kilpisjärvi',
    description:
      'De Halti is het hoogste punt van Finland, pal op de grens met Noorwegen. Deze begeleide sneeuwscootertocht vanuit Kilpisjärvi gaat door de wildernis van Käsivarsi naar grenspaal 303B, in totaal zo’n 110 km, en op de top kunt u het gastenboek van de Halti tekenen. De tocht loopt van 10 tot 16 uur, en ervaring met sneeuwscooterrijden is vereist.',
    specs: [
      'Begeleide sneeuwscootertocht van ongeveer 110 km voor twee, sneeuwscooterkleding (overall, laarzen, helm), warm sap en gebak, routevergunning, btw en verzekeringen',
      'Ongeveer 6 uur',
      '2 personen',
      'Kilpisjärvi',
      '1 maart tot 10 mei, afhankelijk van het weer',
      '18 jaar om te rijden, 8 jaar in de slee. Rijervaring vereist',
      '3 jaar geldig',
    ],
    specLabels: [undefined, 'Duur', 'Deelnemers', 'Locatie', 'Seizoen', 'Leeftijdsgrens', 'Cadeaukaart'],
  },
  'fell-ice-fishing-kilpisjarvi': {
    name: 'IJsvissen op de fjälls voor twee, Kilpisjärvi',
    description:
      'Een gids brengt u per sneeuwscooter de fjälls in bij Kilpisjärvi, in totaal zo’n 15 km, waar u op een rendiervacht zittend door een wak in het ijs vist. Er kan een beekridder of forel bijten, en het vistuig is inbegrepen. De tocht loopt van 11.15 tot 14.15 uur.',
    specs: [
      'Begeleide tocht van ongeveer 15 km voor twee, sneeuwscooterkleding (overall, laarzen, helm), vistuig, warm sap en gebak, btw en verzekeringen',
      'Ongeveer 3 uur',
      '2 personen',
      'Kilpisjärvi',
      '20 november tot 10 mei, afhankelijk van het weer',
      '18 jaar om te rijden, 8 jaar in de slee',
      '3 jaar geldig',
    ],
    specLabels: [undefined, 'Duur', 'Deelnemers', 'Locatie', 'Seizoen', 'Leeftijdsgrens', 'Cadeaukaart'],
  },
  'wilderness-cabin-ivalo': {
    name: 'Twee nachten volpension in een wildernishut voor twee, Ivalo',
    description:
      'Twee nachten voor twee in een hut aan de oever van de rivier de Ivalojoki, naast de wildernis van Hammastunturi, met een eigen oeversauna. Alle maaltijden, van het diner op de aankomstdag tot de lunch op de vertrekdag, zijn inbegrepen en bereid met producten uit Lapland zoals rendier, vis en bessen, net als het vervoer vanuit Ivalo en terug. Doordeweeks van half juni tot eind oktober.',
    specs: [
      '2 nachten voor twee in een wildernishut, vrij gebruik van een aparte oeversauna, volpension met middagkoffie bij het vuur en vervoer vanaf het centrum of de luchthaven van Ivalo en terug',
      '2 nachten',
      '2 personen',
      'Aan de oever van de Ivalojoki. De exacte locatie wordt bij het boeken bevestigd',
      'Maandag tot vrijdag, 15 juni tot 30 oktober',
      'Fins en Engels',
      '3 jaar geldig',
    ],
    specLabels: [undefined, 'Duur', 'Deelnemers', 'Locatie', 'Seizoen', 'Taal', 'Cadeaukaart'],
  },
  'katka-snowmobile-levi': {
    name: 'Sneeuwscootersafari naar de wildernis van Kätkä, Levi',
    description:
      'Een sneeuwscootersafari van zo’n 30 km vanuit Levi de wildernis van de Kätkätunturi in. De pauze is in Hanhipirtti, een café in de wildernis, in een oude hut vol retrospullen, voordat u terugrijdt naar Levi. Ervaring met sneeuwscooters is niet nodig, en de cadeaukaart geldt voor één persoon vanaf 13 jaar.',
    specs: [
      'Begeleide sneeuwscootersafari van ongeveer 30 km voor één persoon, met een pauze in het wildernis-café Hanhipirtti. Winterkleding inbegrepen',
      'Ongeveer 2 tot 3 uur',
      '1 persoon vanaf 13 jaar',
      'Levi. Vertrek vanaf Leviraitti 13, Sirkka',
      'Winter, december tot maart',
      'Engels en Fins',
      '3 jaar geldig',
    ],
    specLabels: [undefined, 'Duur', 'Deelnemers', 'Locatie', 'Seizoen', 'Taal', 'Cadeaukaart'],
  },
  'foodin-six-mushroom-blend': {
    name: 'Foodin zes-paddenstoelenmix 40 g',
    description:
      'Chaga, reishi, pruikzwam, cordyceps, shiitake en maitake in één pot, gemalen voor koffie of smoothies. Eén pot dekt de hele plank functionele paddenstoelen.',
    specs: ['40 g', 'Chaga, reishi, pruikzwam, cordyceps, shiitake, maitake'],
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
      'Rode gebreide wanten met het gezicht van Kleine Mij op de rug van elke hand, gevoerd met acryl. Ze rekken mee, dus één maat past bij de meeste handen, en ze zijn een officieel Moomin-product.',
    specs: [
      '49 % viscose, 31 % polyester, 20 % nylon; voering 100 % acryl',
      'Eén maat, rekbaar',
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
  'sk-marimekko-pieni-unikko-apron': {
    name: 'Marimekko Pieni Unikko schort',
    description:
      'Een schort van Marimekko in biologisch katoen met het Pieni Unikko-dessin in pruim, cranberry, gebroken wit en roze. Het heeft een zak aan de voorkant, strikbanden in de taille en een nekband die met drukknopen verstelbaar is.',
    specs: [
      '100 % biologisch katoen',
      'Breedte 84 cm, lengte 85 cm',
      'Machinewas 60 °C',
      'Pieni Unikko, pruim, cranberry, gebroken wit en roze',
    ],
    specLabels: [undefined, undefined, undefined, 'Dessin'],
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
      'Gebreide bivakmuts van een mix van wol, polyester, alpaca en elastaan. Bedekt oren, hals en wangen in één keer, en dat is het verschil tussen een sneeuwscootertocht en een sneeuwscootertocht die u om de verkeerde reden onthoudt.',
    specs: [
      'Mix van wol, polyester, alpaca en elastaan',
      'Eén maat',
    ],
  },
  'halti-pehmee-merino-beanie': {
    name: 'Halti Pehmee merino muts',
    description:
      'Stadsmuts van 100 procent merinowol met dubbele boord, gemaakt in Finland. Halti noemt hem Pehmee, zacht, en het is de muts voor dagen waarop een skimuts eruit zou zien alsof u verkeerd bent afgeslagen.',
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
      'Muts voor volwassenen uit de collectie Moomin Classics, gemaakt van 100 procent gerecycled polyester, bruin, één maat. Een officieel Moomin-product, en dat onderscheidt hem van de versie van de marktkraam.',
    specs: [
      '100 % gerecycled polyester',
      'Volwassenen, één maat',
      'Bruin',
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
      'Visvormige salmiaksnoepjes van Halva, 230 gram, de zak die in elk Fins dashboardkastje ligt. Stevige beet, intense zoute drop, en het eerste wat u een bezoeker geeft die zegt echt Finland te willen proeven.',
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
      'Zachte schuimsnoepjes met een milde Tyrkisk Peber-hitte en zure smaken van kiwi-aardbei en citroen-limoen, 150 gram. Een zachtere weg naar de peperdropfamilie, en de zak die u in gemengd gezelschap als eerste opent.',
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
    name: 'Vaasan Ruispalat roggebrood 660 g, 12 stuks',
    description:
      'Vaasan Ruispalat is volkorenroggebrood, gebakken op echt zuurdesem van 100 procent Fins graan, 12 stuks in een zak van 660 gram. Vaasan presenteert het als het populairste brood van Finland, en het bevat 12 procent vezels.',
    specs: [
      '660 g, 12 stuks',
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
      'Gemalen chaga, de zwarte zwam die op berkenstammen groeit, om als thee te zetten: een eetlepel per liter water, minstens tien minuten laten trekken op het vuur en zeven. 35 gram, de goedkoopste manier om pakuri te proberen voordat u brokken koopt.',
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
  // katalogin täydennys 2026-09-05
  'rj-raitaniemi-sea-buckthorn-powder': {
    name: 'Marjatila Raitaniemi duindoornpoeder 100 g',
    description:
      'Duindoorn, op een Finse bessenboerderij heel met de zaden gedroogd en gemalen, 100 gram. Eén theelepel staat voor een deciliter verse bessen, en het poeder is gedroogd tot 3 à 5 procent vocht, daarom blijft het jaren goed.',
    specs: [
      '100 g',
      'Duindoorn, heel met de zaden gemalen',
      '1 tot 3 theelepels per dag in pap of yoghurt',
      '1 theelepel poeder komt overeen met 1 dl verse bessen',
    ],
    specLabels: [undefined, undefined, 'Dosering', 'Equivalent'],
  },
  'rj-raitaniemi-crowberry-powder': {
    name: 'Marjatila Raitaniemi kraaiheidepoeder 100 g',
    description:
      'Finse wilde kraaihei, heel gedroogd en gemalen, niets toegevoegd, 100 gram. Kraaihei is de zwarte bes die de fjellhellingen van Lapland bedekt en zelden een winkel haalt, dus dichter bij het proeven komen de meesten niet.',
    specs: [
      '100 g',
      '100 % Finse kraaihei, heel gedroogd en gemalen',
      'Geen, geen conserveermiddelen',
    ],
    specLabels: [undefined, undefined, 'Toevoegingen'],
  },
  // katalogin täydennys 2026-09-05
  // katalogin täydennys 2026-09-05
  'sk-poikain-parhaat-puolukka': {
    name: 'Poikain Parhaat gevriesdroogde vossenbessen 15 g',
    description:
      'Hele Finse vossenbessen, gevriesdroogd en verder niets, 15 gram. Vriesdrogen bewaart kleur, beet, vitaminen en vezels, en het zakje weegt niets in een koffer. Lactosevrij, glutenvrij, veganistisch, zonder toegevoegde suiker of conserveermiddelen.',
    specs: [
      '15 g',
      '100 % Finse gevriesdroogde vossenbes',
      'Lactosevrij, glutenvrij, veganistisch, geen toegevoegde suiker, geen conserveermiddelen',
    ],
    specLabels: [undefined, undefined, 'Dieet'],
  },
  // Talvi- ja joulutuotteet 6.11.2026
  'iittala-glass-baubles-red': {
    name: 'Iittala glazen kerstballen 80 mm, rood, 5 stuks',
    description:
      'Een set van 5 rode kerstballen van mondgeblazen glas van Iittala, elk 80 mm in doorsnee en opgehangen aan een zijden lint. Omdat elke bal met de mond geblazen is, verschillen de vorm en de tint rood licht van bal tot bal. Hang ze in de kerstboom of aan een tak in een vaas, of gebruik ze in een tafelstuk.',
    specs: [
      '5 kerstballen',
      'Diameter 8 cm',
      'Mondgeblazen glas',
      'Rood',
      '0,706 kg bruto',
      '32741-01, EAN 6411923679978',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, 'Artikelnummer en EAN'],
  },
  'iittala-toikka-annual-bird-2026': {
    name: 'Iittala Birds by Toikka jaarvogel 2026, Lakla',
    description:
      'Lakla is de jaarvogel 2026 in de serie Birds by Toikka van Iittala, een oranje vogel van mondgeblazen glas, ontworpen door Oiva Toikka. Iittala brengt elk jaar een nieuwe jaarvogel uit met een eigen patroon en een eigen kleurencombinatie, en de jaarvogels zijn populair geworden bij verzamelaars. Elke vogel wordt geblazen door glasblazers in de glasfabriek van Iittala in Finland, dus kleine luchtbelletjes en verschillen in dikte kunnen voorkomen.',
    specs: [
      'Lengte 22 cm, breedte 10 cm, hoogte 14 cm',
      'Mondgeblazen glas',
      'Oranje',
      'Gemaakt in de glasfabriek van Iittala in Finland',
      'Schoonmaken met een vochtige doek',
      '657373-01, EAN 6411923689199',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, 'Artikelnummer en EAN'],
  },
  'marimekko-siirtolapuutarha-baubles': {
    name: 'Marimekko Siirtolapuutarha kerstballen 2025, 2 stuks',
    description:
      'De Siirtolapuutarha-kerstballen 2025 van Marimekko zijn twee kerstballen van steengoed met het dessin van Maija Louekari in wit, zwart en groen. Siirtolapuutarha is Fins voor volkstuin. Elke bal is 7 cm breed en 7 cm hoog, en Marimekko raadt aan ze niet alleen in de kerstboom maar ook voor het raam te hangen.',
    specs: [
      '2 kerstballen',
      'Breedte 7 cm, hoogte 7 cm',
      'Steengoed',
      'Wit, zwart en groen',
      'Maija Louekari',
      '650181-01, EAN 6411255039983',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Ontwerper', 'Artikelnummer en EAN'],
  },
  'arabia-moomin-love-baubles': {
    name: 'Arabia Moomin kerstballen Love, goud, 5 cm, 2 stuks',
    description:
      'Twee Moomin-kerstballen van 5 cm in vitroporselein van Arabia, versierd met Tove Janssons motief Love met Moomintroll en de Snorkjuffrouw. Het motief is uitgegroeid tot een symbool van liefde en hechte relaties. Hang ze in de kerstboom of aan een decoratietak, of gebruik ze als onderdeel van een feestelijk gedekte tafel.',
    specs: [
      '2 kerstballen',
      'Breedte 5 cm, hoogte 5 cm',
      'Vitroporselein',
      'Goud',
      'Tove Jansson',
      '699561-01, EAN 6411801029079',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Illustratie', 'Artikelnummer en EAN'],
  },
  'sk-muurla-moomin-bauble-pyjamas': {
    name: 'Muurla Moomin glazen kerstbal 9 cm, Pyjama',
    description:
      'Een handgemaakte glazen kerstbal uit de Moomin-collectie van Muurla, 9 cm in doorsnee, met het motief Pyjama. Muurla beschrijft de scène als lekker luieren in pyjama bij kaarslicht, en een satijnen lint om hem op te hangen zit in de verpakking.',
    specs: [
      'Diameter 9 cm',
      'Glas, handgemaakt',
      'Satijnen lint inbegrepen',
    ],
    specLabels: [undefined, undefined, 'Ophanging'],
  },
  'sk-muurla-moomin-baubles-snow': {
    name: 'Muurla Moomin kerstballen 5 cm, Lumipyry, 4 stuks',
    description:
      'Een verpakking met 4 Moomin-kerstballen van Muurla, elk 5 cm in doorsnee, met het sneeuwstormmotief Lumipyry en satijnen linten om ze op te hangen. Muurla plaatst het motief vlak na een sneeuwstorm, met hoge sneeuwhopen, een slapend landschap en sneeuwlantaarns die erop wachten gebouwd te worden.',
    specs: [
      'Diameter 5 cm',
      '4 kerstballen, satijnen linten inbegrepen',
    ],
  },
  'sk-muurla-moomin-led-ball': {
    name: 'Muurla Moomin glazen LED-bal 11 cm, Tähtihetki',
    description:
      'Een glazen decoratiebal uit de Moomin-collectie Tähtihetki van Muurla, 11 cm in doorsnee, met binnenin een lichtsnoer met 10 LED\'s. Hij heeft een aan/uit-schakelaar, werkt op CR2032-lithiumknoopcellen die niet zijn inbegrepen en is alleen bedoeld voor binnen. De collectie Tähtihetki heeft gouden details, en een satijnen lint om hem op te hangen zit in de verpakking.',
    specs: [
      'Diameter 11 cm',
      'Glas, LED-lichtsnoer met 10 LED\'s',
      'CR2032-lithiumknoopcellen, niet inbegrepen. Aan/uit-schakelaar',
      'Alleen voor binnen. CE-gecertificeerd',
      'Ontworpen in Finland',
    ],
    specLabels: [undefined, undefined, 'Stroomvoorziening', 'Gebruik', 'Ontwerp'],
  },
  'sk-muurla-moomin-led-candle-tree': {
    name: 'Muurla Moomin LED-kaars 12,5 cm, Onder de spar',
    description:
      'Een LED-kaars op batterijen uit de collectie Moomin Originals van Muurla, 12,5 cm hoog, met een illustratie uit Tove Janssons boek Farlig midsommar. Hij is gemaakt van paraffinewas en zo gevormd dat hij op een echte stearinekaars lijkt, en zijn warme licht laat de afbeelding goed uitkomen. Hij heeft de standen aan, uit en een timer van 6 uur, werkt op 2 AA-batterijen die niet zijn inbegrepen en is alleen bedoeld voor binnen.',
    specs: [
      'Diameter 10 cm, hoogte 12,5 cm',
      'Paraffinewas',
      '2 x AA-batterijen, niet inbegrepen',
      'Aan, uit en timer van 6 uur',
      'Alleen voor binnen',
      'Tove Jansson, uit Farlig midsommar',
    ],
    specLabels: [undefined, undefined, 'Stroomvoorziening', 'Functies', 'Gebruik', 'Illustratie'],
  },
  'arabia-moomin-plates-winter-night': {
    name: 'Arabia Moomin borden 19 cm, Kantoor & Winternacht, 2 stuks',
    description:
      'Twee Moomin-borden van 19 cm in wit vitroporselein van Arabia, Kantoor en Winternacht, gemaakt om te passen bij de eerder verschenen mokken. De afbeelding Kantoor verscheen voor het eerst in 1996 op een Moomin-mok van Arabia en is gebaseerd op strips waarin schrijven, tekenen en schilderen steeds terugkomen. Winternacht herhaalt de afbeelding van een mok uit 2006, met Moomintroll op een brugleuning, in een scène uit Tove Janssons boek Trollvinter uit 1957.',
    specs: [
      'Diameter 19,4 cm, hoogte 2,8 cm',
      'Vitroporselein',
      '2 borden, Kantoor en Winternacht',
      'Geschikt voor vaatwasser, magnetron en oven',
      'Tove Jansson',
      '566802-01, EAN 6411801011432',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Illustratie', 'Artikelnummer en EAN'],
  },
  'arabia-moomin-plates-winter-fire': {
    name: 'Arabia Moomin borden 19 cm, Wintervuur & Zeilen, 2 stuks',
    description:
      'Twee Moomin-borden van 19 cm in vitroporselein van Arabia, één met Wintervuur en één met Zeilen, beide naar illustraties van Tove Jansson. Het paar zet een winterscène naast een zeilscène en is bedoeld voor zowel alledaagse als feestelijke maaltijden.',
    specs: [
      '2 borden, Wintervuur en Zeilen',
      'Vitroporselein',
      'Meerkleurig',
      '0,886 kg bruto',
      'Tove Jansson',
      '629239-01, EAN 6411801015065',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Illustratie', 'Artikelnummer en EAN'],
  },
  'sk-muurla-moomin-snowfall-mug': {
    name: 'Muurla Moomin emaillen mok 2,5 dl, Sneeuwval',
    description:
      'Een emaillen Moomin-mok van 2,5 dl van Muurla met het motief Sneeuwval, de eerste sneeuw in de Moominvallei en tijd om in de sneeuw te spelen. Muurla maakt zijn emaillewaren met een kern van koolstofstaal en twee lagen email, dus de mok is even geschikt voor een wandeling, de hut of de boot als voor op tafel. Hij is geschikt voor warme en koude dranken en mag in de vaatwasser, maar niet in de magnetron.',
    specs: [
      '2,5 dl',
      'Koolstofstaal, dubbele emaillelaag',
      'Vaatwasserbestendig. Niet voor de magnetron',
    ],
  },
  'sk-muurla-moomin-gifts-mug': {
    name: 'Muurla Moomin emaillen mok 3,7 dl, Cadeaus',
    description:
      'Een emaillen Moomin-mok van 3,7 dl van Muurla met het motief Cadeaus, een kerstafbeelding over cadeaus geven aan de mensen die u dierbaar zijn. Onder de emaillelaag zit een kern van koolstofstaal met een dubbele laag, waardoor de mok stevig genoeg is voor buiten en niet alleen voor op tafel. Hij is geschikt voor warme en koude dranken en mag in de vaatwasser, maar niet in de magnetron.',
    specs: [
      '3,7 dl',
      'Koolstofstaal, dubbele emaillelaag',
      'Vaatwasserbestendig. Niet voor de magnetron',
    ],
  },
  'rj-pesonen-beeswax-candle': {
    name: 'Pesosen Mehiläistarhat tafelkaars van bijenwas, groot',
    description:
      'Pesosen Mehiläistarhat maakt deze grote tafelkaars met de hand van bijenwas, die hem ook zijn kleur en geur geeft. Esa van de imkerij houdt al 29 jaar bijen, waarvan 13 jaar beroepsmatig, en de bijenkasten staan tussen akkers, bossen en kleine waterlopen rond Sastamala en Hämeenkyrö. De imkerij maakt haar kaarsen van wat de eigen bijenvolken opleveren, en ze branden lang met een heldere, rustige vlam.',
    specs: [
      'Bijenwas',
      'Groot',
      'Handgemaakt',
      'Sastamala en Hämeenkyrö',
    ],
    specLabels: [undefined, undefined, 'Vervaardiging', 'Bijenstanden'],
  },
  'rj-pesonen-honeycomb-candle': {
    name: 'Pesosen Mehiläistarhat honingraatkaars van bijenwas, groot',
    description:
      'Een grote honingraatkaars, met de hand gemaakt van bijenwas door Pesosen Mehiläistarhat, met een brandduur van 30 uur. Kleur en geur komen van de was, en de imkerij maakt haar kaarsen van wat de eigen bijenvolken rond Sastamala en Hämeenkyrö opleveren. Esa van de imkerij houdt al 29 jaar bijen en doet dat al 13 jaar beroepsmatig.',
    specs: [
      'Bijenwas',
      'Groot',
      '30 uur',
      'Handgemaakt',
      'Sastamala en Hämeenkyrö',
    ],
    specLabels: [undefined, undefined, 'Brandduur', 'Vervaardiging', 'Bijenstanden'],
  },
  'sk-moomin-mistletoe-candle': {
    name: 'Havi Moomin tafelkaars 7 x 12 cm, Maretak, beige',
    description:
      'Een beige Moomin-tafelkaars van Havi met het dessin Maretak, 7 x 12 cm en met een brandduur van 55 uur. Het dessin is met zeefdruk op de kaars aangebracht.',
    specs: [
      '7 x 12 cm',
      'Beige',
      '55 uur',
      'Zeefdruk',
      'Havi Oy, Riihimäki',
    ],
    specLabels: [undefined, undefined, 'Brandduur', 'Decoratie', 'Op de markt gebracht door'],
  },
  'iittala-kastehelmi-tealight': {
    name: 'Iittala Kastehelmi waxinelichthouder 64 mm, helder',
    description:
      'Een Kastehelmi-waxinelichthouder van helder glas van Iittala, 64 mm in doorsnee, uit de serie die Oiva Toikka in 1964 voor Iittala ontwierp. Kastehelmi is Fins voor dauwdruppel, en Iittala bracht de serie in 2010 opnieuw uit. De houder is ook in andere kleuren verkrijgbaar, en Iittala stelt voor hem los te gebruiken of in een groep met verschillende kleuren.',
    specs: [
      'Diameter 6,4 cm',
      'Glas',
      'Helder',
      'Alleen handwas',
      'Oiva Toikka, Iittala Kastehelmi',
      '13167-01, EAN 6411920059766',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Ontwerper en collectie', 'Artikelnummer en EAN'],
  },
  'sk-fazer-christmas-box': {
    name: 'Fazer kerstbox 2026',
    description:
      'De kerstbox van Fazer voor 2026 met 6 verpakkingen seizoenschocolade, snoep en gemberkoekjes. Erin zitten Karl Fazer-bonbons, een Karl Fazer-chocoladereep met gemberkoek, Remix Xmas + Choco, Dumle Winter Mix-toffees, Vihreät kuulat-geleesnoepjes met peer en Marianne-gemberkoekjes met muntchocolade.',
    specs: [
      'Karl Fazer-bonbons 250 g, Karl Fazer-chocoladereep met gemberkoek 200 g, Remix Xmas + Choco snoepmix 300 g, Dumle Winter Mix toffeemix 180 g, Vihreät kuulat geleesnoepjes met peer 260 g, Marianne gemberkoekjes met muntchocolade 175 g',
      'Melkchocolade met minstens 30 % cacao',
      'Bevat tarwe (gluten), soja en melk (lactose). Kan rogge, gerst, haver, ei, noten en amandelen bevatten',
      'Energie 1845 kJ / 441 kcal, vet 17 g, waarvan verzadigd 9,4 g, koolhydraten 67 g, waarvan suikers 53 g, eiwit 4,6 g, zout 0,36 g',
    ],
    specLabels: [undefined, 'Vermeldingen op het etiket', 'Allergenen', 'Voedingswaarde per 100 g'],
  },
  'sk-karl-fazer-advent-calendar': {
    name: 'Karl Fazer adventskalender 200 g',
    description:
      'Een Karl Fazer-adventskalender met 200 g chocoladebonbons in verschillende smaken achter de deurtjes. Het laatste deurtje is gevuld met Fazer Blue, de Karl Fazer-melkchocolade die Fazer sinds 1922 maakt. Fazer betrekt zijn cacao via het programma Fazer Cocoa Vision.',
    specs: [
      '200 g',
      'Chocoladebonbons in verschillende smaken, laatste deurtje gevuld met Fazer Blue-melkchocolade',
      'Melkchocolade met minstens 30 % cacao',
      'Bevat melk, soja en gerst (gluten). Kan noten, amandelen, tarwe, rogge en haver bevatten',
      'Energie 2315 kJ / 554 kcal, vet 34 g, waarvan verzadigd 20 g, koolhydraten 53 g, waarvan suikers 51 g, eiwit 9,6 g, zout 0,31 g',
    ],
    specLabels: [undefined, undefined, 'Vermeldingen op het etiket', 'Allergenen', 'Voedingswaarde per 100 g'],
  },
  'sk-fazer-christmas-chocolates': {
    name: 'Fazer Joulusuklaa kerstbonbons 295 g',
    description:
      'Fazer Joulusuklaa-bonbons, 295 g, met een milde melkchocoladeschil rond een truffelvulling met echte kruimels gemberkoek. Fazer raadt ze aan voor kerstbijeenkomsten, bijvoorbeeld bij glögg, de Noordse warme kruidendrank.',
    specs: [
      '295 g',
      'Melkchocoladeschil, truffelvulling met kruimels gemberkoek',
      'Melkchocolade met minstens 30 % cacao',
      'Bevat melk, tarwe, gerst (gluten) en soja. Kan noten, amandelen, rogge en haver bevatten',
      'Energie 2274 kJ / 545 kcal, vet 33 g, waarvan verzadigd 19 g, koolhydraten 53 g, waarvan suikers 51 g, eiwit 8,2 g, zout 0,24 g',
    ],
    specLabels: [undefined, undefined, 'Vermeldingen op het etiket', 'Allergenen', 'Voedingswaarde per 100 g'],
  },
  'sk-karl-fazer-gingerbread-bar': {
    name: 'Karl Fazer Winter Edition reep met gemberkoek 200 g',
    description:
      'Een reep Karl Fazer Winter Edition van 200 g die zachte melkchocolade combineert met knapperige gemberkoek. Fazer maakt Karl Fazer-melkchocolade sinds 1922, en deze reep met gemberkoek is de kersteditie.',
    specs: [
      '200 g',
      'Melkchocolade met knapperige gemberkoek',
      'Melkchocolade met minstens 30 % cacao',
      'Bevat melk, tarwe (gluten) en soja. Kan noten, amandelen, rogge en haver bevatten',
      'Energie 2205 kJ / 527 kcal, vet 30 g, waarvan verzadigd 18 g, koolhydraten 55 g, waarvan suikers 48 g, eiwit 8,5 g, zout 0,22 g',
    ],
    specLabels: [undefined, undefined, 'Vermeldingen op het etiket', 'Allergenen', 'Voedingswaarde per 100 g'],
  },
  'sk-fazer-glogg-balls': {
    name: 'Fazer Glögikuulat geleesnoepjes 260 g',
    description:
      'Een doos van 260 g Fazer Glögikuulat, zachte en zoete geleeballetjes, genoemd naar glögg, de Noordse warme kruidendrank. Ze bevatten geen gluten, gelatine of lactose en zijn geschikt voor veganisten. In de doos zit een recept om er een warme drank van te maken.',
    specs: [
      '260 g',
      'Glutenvrij, gelatinevrij, lactosevrij, veganistisch',
      'Energie 1353 kJ / 322 kcal, vet 0 g, waarvan verzadigd 0 g, koolhydraten 79 g, waarvan suikers 64 g, eiwit 0 g, zout 0,28 g',
    ],
    specLabels: [undefined, 'Dieet', 'Voedingswaarde per 100 g'],
  },
  'sk-halva-christmas-liquorice': {
    name: 'Halva kerstdropmix 250 g',
    description:
      'De kerstdropmix van Halva, 250 g drop in 3 kerstsmaken, verpakt in een roségoudkleurige doos. Er zitten dropbloemetjes met appeltaartsmaak in, drop gevuld met glögg en drop gevuld met gemberkoek. Halva maakt de mix in Pitäjänmäki in Helsinki.',
    specs: [
      '250 g',
      'Dropbloemetjes met appeltaartsmaak, drop gevuld met glögg, drop gevuld met gemberkoek',
      'Gemaakt in Pitäjänmäki, Helsinki',
      'Bevat tarwe (gluten)',
      'Energie 1419 kJ / 334 kcal, vet 0,7 g, waarvan verzadigd 0,3 g, koolhydraten 79 g, waarvan suikers 53 g, eiwit 2,9 g, zout 0,15 g',
    ],
    specLabels: [undefined, undefined, undefined, 'Allergenen', 'Voedingswaarde per 100 g'],
  },
  'sk-halva-salmiakki-calendar': {
    name: 'Halva salmiak-adventskalender 200 g',
    description:
      'Een adventskalender van Halva met 200 g salmiak, de Finse zoute drop, gekozen uit het eigen assortiment van Halva. Achter de deurtjes zitten Vanhat Autot, salmiakvisjes, zoute doodshoofdjes, Pommix, salmiakhartjes, salmiakzwaarden, Salmiakkiruutu-blokjes en harde Jauhix-salmiak.',
    specs: [
      '200 g',
      'Vanhat Autot-salmiak, salmiakvisje, zout doodshoofdje, Pommix-salmiak, salmiakhartje, salmiakzwaard, Salmiakkiruutu, Jauhix-salmiak',
      'Energie 1406 kJ / 331 kcal, vet 0,5 g, waarvan verzadigd 0,1 g, koolhydraten 80 g, waarvan suikers 59 g, eiwit 2,7 g, zout 0,03 g',
    ],
    specLabels: [undefined, undefined, 'Voedingswaarde per 100 g'],
  },
  'kuivalihakundi-advent-calendar': {
    name: 'Kuivalihakundi jerky-adventskalender 2026, 24 deurtjes',
    description:
      'De adventskalender 2026 van Kuivalihakundi bevat 24 verschillende smaken jerky, achter elk van de 24 deurtjes een zakje van 20 g. Er is rund, kip, vetter en magerder varkensvlees, in basissmaken en in enkele die alleen voor deze kalender gemaakt zijn, allemaal uit de eigen fabriek van het bedrijf in Jokela, Finland. De jerky blijft ook na opening goed op kamertemperatuur, de kalender staat op tafel of hangt aan de muur via de ophanggaten, en het is een beperkte oplage.',
    specs: [
      '24 x 20 g zakjes jerky, achter elk deurtje een andere smaak',
      'Rund, kip, vetter en magerder varkensvlees',
      'Gemaakt in de eigen fabriek van Kuivalihakundi in Jokela, Finland',
      'Blijft goed op kamertemperatuur, ook na opening',
      'Staat op tafel of hangt aan de muur via de ophanggaten',
    ],
    specLabels: [undefined, 'Vleessoorten', undefined, undefined, 'Ophanging'],
  },
  'halti-crostie-merino-beanie': {
    name: 'Halti Crostie merinomuts',
    description:
      'Een goed aansluitende muts van Halti voor langlaufen, hardlopen in de winter en andere sport in de kou, ontworpen en gemaakt in Finland. De helft is gevoerd met Stormwall®, een winddichte en ademende laag die voorhoofd en oren tegen de wind beschermt. Het breisel zelf is een zachte mix met merinowol die warm blijft en toch ademt.',
    specs: [
      'Breisel van een mix van merinowol en acryl, 50 % merinowol, 50 % acryl. Voor de helft gevoerd met Stormwall®',
      'S, M, L',
      '0,2 kg',
      'Meerdere kleuren: Crocus Petal, Black, White, Fudge Maroon Red, Veiled Pink',
      'Wassen met vergelijkbare kleuren, liggend drogen',
      'Ontworpen en gemaakt in Finland, Avainlippu-product (Sleutelvlag)',
    ],
  },
  'halti-vuolle-mohair-beanie': {
    name: 'Halti Vuolle mohair muts',
    description:
      'Een pluizige muts van Halti in een mix van mohair, merinowol en polyamide, dubbellaags voor extra warmte en met een hoge omslag. Door de mix is hij licht maar warm, en er is geen aparte voering. Eén maat, in Snow White of Black.',
    specs: [
      'Mohairmix, 50 % mohair, 32 % polyamide, 18 % merinowol. Geen aparte voering',
      'Eén maat',
      'Snow White of Black',
      'Wassen met vergelijkbare kleuren, liggend drogen',
      'Dubbellaagse constructie, hoge omslag',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Kenmerken'],
  },
  'halti-tiilo-mittens': {
    name: 'Halti Tiilo II wanten',
    description:
      'Gevoerde wanten van Halti voor buitenactiviteiten in de winter, van water- en winddicht DrymaxX®-materiaal met 60 g Microtherm®-vulling. De handpalm is van kunstleer met goede grip, en er zijn een binnenmanchet in ribbreisel en een verstelbare sluiting om de pols. Zwart, maten 7 tot 12.',
    specs: [
      'DrymaxX®-polyester met membraan, 100 % polyester. Manchet in ribbreisel, 100 % polyester. Handpalm van kunstleer, 100 % polyurethaan',
      '60 g Microtherm®-vulling',
      '7, 8, 9, 10, 11, 12',
      'Zwart',
      'Apart wassen',
    ],
    specLabels: [undefined, 'Isolatie', undefined, undefined, undefined],
  },
  'halti-warm-merino-socks': {
    name: 'Halti warme merinosokken',
    description:
      'Sokken van merinowol van Halti in dik badstofbreisel, gemaakt in Finland en naadloos, zodat ze goed zitten in ski-, winter- en snowboardschoenen. De badstof houdt lucht vast voor warmte, en de geribde schacht blijft op zijn plaats. Draag ze los of over een dun paar sokken.',
    specs: [
      'Merinowolmix, 62 % merinowol, 36 % polyamide, 2 % elastaan',
      '34-36, 37-39, 40-42, 43-45, 46-48',
      'Dark Sea Green of Asphalt',
      '0,1 kg',
      'Gemaakt in Finland, Avainlippu-product (Sleutelvlag)',
      'Dik badstofbreisel, naadloos, geribde schacht die blijft zitten',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, 'Kenmerken'],
  },
  'north-outdoor-kaisla-beanie': {
    name: 'North Outdoor Kaisla merinomuts, Coffee',
    description:
      'Een dikke muts in patentsteek van 100 procent mulesingvrije merinowol, gebreid in de eigen breierij van North Outdoor in Oulu. North Outdoor raadt hem aan van de herfst tot de late winter, voor stadswandelingen en voor natuurpaden. Eén maat, in de kleur Coffee.',
    specs: [
      '100 % merinowol, mulesingvrij, patentsteek',
      'Eén maat',
      'Coffee',
      'Gemaakt in de eigen breierij van North Outdoor in Oulu, Finland',
    ],
  },
  'north-outdoor-polku-neck-tube': {
    name: 'North Outdoor Polku merinonekwarmer, Coffee',
    description:
      'Een dikke nekwarmer van 100 procent mulesingvrije merinowol, gebreid in een dichte 1x1-rib. Hij is hoog genoeg om als sjaal te dragen, als capuchon op te trekken of over het gezicht te trekken. Eén maat, in de kleur Coffee.',
    specs: [
      '100 % merinowol, mulesingvrij, 1x1-ribbreisel',
      'Eén maat',
      'Coffee',
      'Sjaal, capuchon of gezichtsbescherming',
    ],
    specLabels: [undefined, undefined, undefined, 'Gebruik'],
  },
  'north-outdoor-hirsi-socks': {
    name: 'North Outdoor Hirsi merinowollen sokken, Almond',
    description:
      'Lichte sokken van merinowol uit de eigen breierij van North Outdoor in Oulu. Ze bestaan voor 80 procent uit mulesingvrije merinowol en voor 20 procent uit polyamide voor slijtvastheid. Ze komen het best tot hun recht binnenshuis, los of over een ander paar sokken. Ze kunnen op een fijnwasprogramma in de machine, al hebben ze dat zelden nodig.',
    specs: [
      '80 % merinowol, mulesingvrij, 20 % polyamide',
      '35-38, 39-42, 43-46',
      'Almond',
      'Gemaakt in de eigen breierij van North Outdoor in Oulu, Finland',
      'Fijnwas in de machine',
    ],
  },
  'north-outdoor-avery-mittens': {
    name: 'North Outdoor Avery wanten van wolfleece, Latte',
    description:
      'Wanten van een lichte Italiaanse wolfleecemix met 63 procent gerecyclede wol, aan de binnenkant gevoerd met 100 procent merinowol. De merinovoering voert vocht af en houdt de warmte vast, en de nauwsluitende maar soepele pasvorm laat uw gevoel bij het vastpakken intact. Maten S en M, in de kleur Latte.',
    specs: [
      'Italiaanse wolfleecemix, 63 % gerecyclede wol. Voering 100 % merinowol',
      'S, M',
      'Latte',
      'Buiten en in de stad',
    ],
    specLabels: [undefined, undefined, undefined, 'Gebruik'],
  },
  'makia-alvar-beanie': {
    name: 'Makia Alvar merinomuts',
    description:
      'Een muts van Makia van 100 procent merinowol, gemaakt in Finland. De wol is mulesingvrij, en de muts is er in één maat.',
    specs: [
      '100 % merinowol, mulesingvrij',
      'Eén maat',
      'Gemaakt in Finland',
    ],
  },
  'makia-stellar-scarf': {
    name: 'Makia Stellar merinosjaal',
    description:
      'Een sjaal van Makia van 100 procent merinowol. Hij is er in één maat.',
    specs: [
      '100 % merinowol',
      'Eén maat',
    ],
  },
  'makia-freja-mittens': {
    name: 'Makia Freja gewatteerde wanten',
    description:
      'Gewatteerde wanten van Makia, gevuld met Sorona® imitatiedons, een deels plantaardige isolatie die ademt en de warmte vasthoudt. Een waterkolom van 3000 mm helpt uw handen droog te houden bij lichte regen. Maten S en M.',
    specs: [
      'Sorona® imitatiedons, deels plantaardig',
      '3000 mm',
      'S, M',
    ],
    specLabels: ['Isolatie', 'Waterkolom', undefined],
  },
  'makia-sibelius-beanie': {
    name: 'Makia Sibelius merinomuts',
    description:
      'De Sibelius-muts van Makia, gemaakt van 100 procent merinowol. Hij is er in één maat.',
    specs: [
      '100 % merinowol',
      'Eén maat',
    ],
  },
  'nb-moomin-christmas-sockbox': {
    name: 'Moomin kerstcadeaudoos met sokken, EU 36-42',
    description:
      'Een kant-en-klare Moomin-kerstcadeaudoos met twee paar sokken, in één maat voor EU 36 tot 42. De sokken zijn grotendeels van katoen met polyester, nylon en een beetje elastaan, en het is een officieel Moomin-product.',
    specs: [
      '60 % katoen, 33 % polyester, 4 % nylon, 2 % elastaan, 1 % elastodieen',
      'Eén maat, EU 36-42',
      '2 paar sokken in een cadeaudoos',
      'Officieel Moomin-product',
    ],
    specLabels: [undefined, undefined, undefined, 'Licentie'],
  },
  'nb-moomin-christmas-box-men': {
    name: 'Moomin kerstcadeaudoos met herensokken, EU 40-45',
    description:
      'Een kant-en-klare Moomin-kerstcadeaudoos met twee paar herensokken in maat EU 40 tot 45. Nordicbuddies weet uit ervaring dat ze ook grotere voeten passen. De sokken zijn grotendeels van katoen met polyester, nylon en een beetje elastaan, en het is een officieel Moomin-product.',
    specs: [
      '60 % katoen, 33 % polyester, 4 % nylon, 2 % elastaan, 1 % elastodieen',
      'Eén maat, EU 40-45',
      '2 paar sokken in een cadeaudoos',
      'Officieel Moomin-product',
    ],
    specLabels: [undefined, undefined, undefined, 'Licentie'],
  },
  'nb-moomintroll-fleece-mittens': {
    name: 'Moomintroll wanten van fleece',
    description:
      'Moomintroll-wanten van fleece, gemaakt van 100 procent gerecycled polyester, met een voering van acryl. Ze rekken mee, dus één maat past de meesten, en het is een officieel Moomin-product.',
    specs: [
      '100 % gerecycled polyester',
      '100 % acryl',
      'Eén maat, rekbaar, past de meesten',
      'Officieel Moomin-product',
    ],
    specLabels: [undefined, 'Voering', undefined, 'Licentie'],
  },
  'nb-moomintroll-chunky-beanie': {
    name: 'Pluizige dikke Moomintroll-muts, roze',
    description:
      'Een pluizige, dikke Moomintroll-muts in roze, in één volwassenmaat die iedereen past. Het materiaal is een mix van polyester, nylon, acryl, wol en elastaan, en het is een officieel Moomin-product.',
    specs: [
      'Polyester, nylon, acryl, wol en elastaan',
      'Volwassenen, één maat',
      'Roze',
      'Officieel Moomin-product',
    ],
    specLabels: [undefined, undefined, undefined, 'Licentie'],
  },
  'sk-nordqvist-tea-calendar': {
    name: 'Nordqvist thee-adventskalender, 27 theezakjes',
    description:
      'Een kubusvormige thee-adventskalender van Nordqvist met 25 deurtjes en 27 theezakjes, want achter het laatste deurtje zitten er drie. De zakjes bevatten zwarte, groene en rooibosthee en hibiscusmelanges, met kerstsmaken als gemberkoek, glögg en kaneel ertussen.',
    specs: [
      '25 deurtjes, 27 theezakjes. Achter het laatste deurtje zitten 3 zakjes',
      'Zwarte, groene en rooibosthee, hibiscusmelanges',
      'Nordqvist Oy, Nurmijärvi',
      '6413440000433',
    ],
    specLabels: [undefined, 'Theesoorten', 'Op de markt gebracht door', 'EAN'],
  },
  'sk-nordqvist-moomin-tea-calendar': {
    name: 'Nordqvist Moomin thee-adventskalender, 24 zakjes, lila',
    description:
      'Een lila Moomin-thee-adventskalender van Nordqvist met 24 piramidetheezakjes in 12 smaken, twee van elk. Zwarte en groene thee staan naast cafeïnevrije rooibos, en elke smaak heeft een eigen naam, van Olet Ihana (Je bent geweldig) tot Muumimamman Voimajuoma (Moominmamma\'s krachtdrank). Het deksel gaat zo open dat de kalender rechtop blijft staan, en hij is Rainforest Alliance-gecertificeerd.',
    specs: [
      '24 piramidetheezakjes, 12 smaken, van elk 2',
      '41,5 g',
      'Lila',
      'Rainforest Alliance',
      'Nordqvist Oy, Nurmijärvi',
      '6413440000679',
    ],
    specLabels: [undefined, undefined, undefined, 'Certificering', 'Op de markt gebracht door', 'EAN'],
  },
  'sk-nordic-glogg-concentrate': {
    name: 'Poikain Parhaat Nordic glögg-concentraat 0,5 l',
    description:
      'Een alcoholvrij (0 %) glöggconcentraat, met de hand gemaakt van Fins sap van zwarte en rode bessen en echte specerijen. U mengt het in de verhouding 1+3. Poikain Parhaat omschrijft het als rijk aan bessen en warm gekruid, een glögg met een traditionele smaak.',
    specs: [
      '0,5 l',
      '1+3',
      '0 %',
      'Sap van zwarte en rode bessen uit Finland',
      'Energie 47,7 kcal / 199,58 kJ, vet 0,2 g, waarvan verzadigd 0,2 g, koolhydraten 11 g, waarvan suikers 11 g, eiwit 0,3 g, zout 0,2 g',
      'Poikain Parhaat Oy Ltd, Tampere',
    ],
    specLabels: [undefined, 'Mengverhouding', 'Alcohol', undefined, 'Voedingswaarde per 100 ml', 'Op de markt gebracht door'],
  },
  'rj-christmas-coffee': {
    name: 'Gran Palomar kerstkoffie 200 g',
    description:
      'Gran Palomar-kerstkoffie van Cafetoria Roastery, een biologische fairtradekoffie, gekruid met biologische kaneel en kardemom. Hij zit in een verpakking van 200 g.',
    specs: [
      '200 g',
      'Biologische kaneel en kardemom',
      'Fairtrade, biologisch',
      'Cafetoria Roastery Oy',
    ],
    specLabels: [undefined, 'Specerijen', 'Certificering', 'Branderij'],
  },
  'sk-emendo-santa-sauna-scent': {
    name: 'Emendo officiële Kerstman-saunageur 500 ml',
    description:
      'De officiële saunageur van de Kerstman van Emendo, 500 ml met 100 procent echte etherische oliën en zonder synthetische geurstoffen. Meng ongeveer ½ dl in een emmer met ongeveer 3 l water en gebruik het zoals gewoon opgietwater.',
    specs: [
      '500 ml',
      'Bevat 100 % etherische oliën, geen synthetische geurstof (parfum)',
      'Ongeveer ½ dl in een emmer met ongeveer 3 l water',
      '©Santa Claus Foundation™',
      '6417892057458',
    ],
    specLabels: [undefined, 'Samenstelling', 'Gebruik', 'Licentie', 'EAN'],
  },
  'sk-emendo-christmas-sauna-set': {
    name: 'Emendo Jouluhetki sauna-cadeauset',
    description:
      'Jouluhetki, Fins voor kerstmoment, is een sauna-cadeauset van Emendo met een zeep aan een koord, een saunageur en een douchespons. De set wordt kant-en-klaar als cadeau verpakt geleverd.',
    specs: [
      'Zeep aan een koord, saunageur, douchespons',
      '6417892041280',
    ],
    specLabels: [undefined, 'EAN'],
  },
  'sk-emendo-gingerbread-glogg-scent': {
    name: 'Emendo saunageuren gemberkoek en glögg, 2 x 10 ml',
    description:
      'Twee saunageuren van Emendo, gemberkoek en glögg, elk 10 ml en gemaakt van 100 procent echte etherische oliën. Doe 2 tot 6 druppels in een schep water en giet dit op de stenen.',
    specs: [
      '2 x 10 ml',
      'Gemberkoek, glögg',
      'Gemaakt van 100 % etherische oliën',
      '2 tot 6 druppels in een schep water',
      '6417892021060',
    ],
    specLabels: [undefined, 'Geuren', 'Samenstelling', 'Gebruik', 'EAN'],
  },
  'sk-aromageddon-gingerbread-scent': {
    name: 'Aromageddon saunageur Piparipyörre 15 ml',
    description:
      'Piparipyörre van Aromageddon, vrij vertaald gemberkoekwerveling, brengt een warme, kruidige kaneelgeur met een vleugje gemberkoek in de sauna. Doe 2 tot 4 druppels in een schep water en gebruik het altijd verdund, nooit rechtstreeks op de kachel gegoten.',
    specs: [
      '15 ml',
      'Kaneel met een vleugje gemberkoek',
      '2 tot 4 druppels in een schep water, altijd verdund',
      'Aromageddon Oy, Espoo',
    ],
    specLabels: [undefined, 'Geur', 'Gebruik', 'Op de markt gebracht door'],
  },
}
