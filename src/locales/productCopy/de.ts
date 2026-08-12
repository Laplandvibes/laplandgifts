import type { ProductCopyMap } from './index'

/**
 * Tuotteiden saksankieliset tekstit. Avain on tuotteen slug.
 *
 * `specs` on positionaalinen: indeksi vastaa `product.details.specs`-taulukon
 * järjestystä lähdedatassa. `specLabels` samoin, ja siinä on arvo vain niillä
 * riveillä joilla on oma otsikko (`key: 'other'`).
 *
 * Lukuja, mittayksiköitä, tuotekoodeja ja EAN-numeroita EI käännetä eikä
 * muunneta: ne ovat kumppanin ilmoittamia arvoja. Desimaalierotin on
 * saksalaisittain pilkku siellä missä lähdedatassakin, jotta
 * numeroiden-täsmäävyystesti menee läpi.
 */
export const PRODUCT_COPY_DE: ProductCopyMap = {
  'moomin-mystical-forest-wool-throw': {
    name: 'Mumin-Wolldecke Mystical Forest 130x170 cm',
    description:
      'Decke von 130 mal 170 cm aus 100 Prozent Wolle, in Finnland für die Kollektion Mystical Forest entworfen. Nur chemische Reinigung, also eher Sofadecke als Picknickunterlage.',
    specs: [
      '100 % Wolle',
      '130 x 170 cm',
      'Blau',
      'Chemische Reinigung, schonendes Verfahren',
      'Entworfen in Finnland, hergestellt in Litauen',
      'Mystical Forest',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, 'Kollektion'],
  },
  'iittala-aalto-vase-160': {
    name: 'Iittala Alvar Aalto Vase 160 mm, klar',
    description:
      'Alvar Aalto zeichnete diese Welle 1936, und Iittala bläst sie noch immer mit dem Mund, weshalb sich der Umriss jedes Stücks ein wenig unterscheidet. Die Größe 160 mm ist die, die man vor Augen hat, wenn der Name fällt.',
    specs: [
      'Höhe 16 cm, Breite 20,5 cm',
      'Glas',
      'Transparent',
      '1,44 kg brutto',
      'Nur Handwäsche',
      'Mundgeblasenes Glas, asymmetrische Form',
      'Alvar Aalto, Iittala Alvar Aalto Collection',
      '999-01, EAN 6411920004445',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      'Herstellung',
      'Designer und Kollektion',
      'Artikelnummer und EAN',
    ],
  },
  'iittala-kivi-candleholder': {
    name: 'Iittala Kivi Teelichthalter 60 mm, tannengrün',
    description:
      'Ein gepresster Teelichthalter aus Glas von Heikki Orvola, 6 cm hoch, der aus einem Teelicht einen Farbblock macht. Es ist die günstigste Art, ein Stück Iittala zu besitzen, und er übersteht das Handgepäck.',
    specs: [
      '6,5 x 6,5 cm, Höhe 6 cm',
      'Glas',
      'Grün',
      '0,33 kg brutto',
      'Nur Handwäsche',
      'Heikki Orvola, Iittala Kivi',
      '636883-01, EAN 6411923683937',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      'Designer und Kollektion',
      'Artikelnummer und EAN',
    ],
  },
  'marimekko-unikko-mug': {
    name: 'Marimekko Unikko Becher 25 cl',
    description:
      'Maija Isola zeichnete die Unikko-Mohnblume 1964, nachdem Marimekko Blumenmuster verboten hatte, und das Muster überlebte das Verbot. Dieser Steinzeugbecher fasst 25 cl und bringt den Druck auf den Frühstückstisch statt an die Wand.',
    specs: [
      '25 cl',
      'Durchmesser 8 cm, Höhe 9,5 cm',
      'Steinzeug',
      'Weiß, dunkelgrün, beige und hellsand',
      '0,276 kg brutto',
      'Muster von Maija Isola, Becher von Sami Ruotsalainen',
      '666236-01, EAN 6411255152033',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      'Designer',
      'Artikelnummer und EAN',
    ],
  },
  'aarikka-prinsessa-candleholder': {
    name: 'Aarikka Prinsessa Kerzenhalter',
    description:
      'Aarikka dreht Birkenperlen seit den 1950er-Jahren, und Prinsessa trägt einen Kranz davon um einen 5,5 cm hohen Halter, der entweder ein Teelicht oder eine Stabkerze aufnimmt. Klein genug zum Verschicken, markant genug, um in Finnland erkannt zu werden.',
    specs: [
      'Höhe 5,5 cm, Durchmesser 6 cm',
      'Birke, Ahorn, Aluminium',
      '98 g',
      'Entworfen in Finnland, hergestellt in Italien',
      'Kerzenhalter mit einem Kranz aus Holzperlen. Passend für Teelichter und Stabkerzen',
      'B08633',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, 'Produktcode'],
  },
  'aarikka-pore-glass-vase': {
    name: 'Aarikka Pore Glasvase 16 cm, dunkelgrün',
    description:
      'Eine runde, mundgeblasene Vase mit 1,7 Litern, die einen in Finnland von Hand gefärbten Ahornperlenkranz trägt. Luftblasen im Glas gehören dazu, und der Kranz wird vor dem Spülen abgenommen.',
    specs: [
      'Höhe 16 cm, Durchmesser 16 cm',
      '1,7 l',
      'Glas und Ahorn',
      'Klar und grün',
      'Glas hergestellt in Polen, der Holzkranz in Finnland',
      'Von Hand spülen. Den Holzkranz vor dem Spülen abnehmen',
      'B08706',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      'Produktcode',
    ],
  },
  'halti-tokoi-dx-jacket': {
    name: 'Halti Tokoi DX Wetterjacke, Herren',
    description:
      'Eine wetterfeste Jacke mit vollständig verklebten Nähten, leichtem Futter und verstellbarer Kapuze, weit genug geschnitten, um einen Wollpullover darunter zu tragen. Halti liefert nur innerhalb der EU.',
    specs: [
      'DrymaxX Sleek Twill, ein wasser- und winddichtes 2-Lagen-Gewebe mit DrymaxX-Membran. Materialanteil 50 % recyceltes Polyester und 50 % Polyester',
      'Weiches Polyesterfutter, 100 % recyceltes Polyester',
      '10000 mm',
      '10000 g/m²/24 h',
      '0,9 kg',
      'S, M, L, XL, XXL, XXXL',
      'Fossil Beige, Four Leaf Clover Green, Black',
      'Alle Nähte verklebt, verstellbare feste Kapuze, hoher Stehkragen, 2-Wege-Frontreißverschluss, Netzbelüftung, Handtaschen mit Reißverschluss, Innentasche mit Druckknopf, verstellbare Ärmelabschlüsse, Windleiste vorn, reflektierende Details',
      'Auf links mit ähnlichen Farben waschen und zuvor die Reißverschlüsse schließen. Maximal 30 °C, schonendes Verfahren. Nicht bleichen, nicht in den Trockner, nicht bügeln, keine chemische Reinigung',
    ],
    specLabels: [
      undefined,
      'Futter',
      'Wassersäule',
      'Atmungsaktivität',
      undefined,
      undefined,
      undefined,
      'Ausstattung',
      undefined,
    ],
  },
  'makia-merino-beanie': {
    name: 'Makia Merino Mütze',
    description:
      'Eine schlichte nordische Mütze aus Merinowolle, die Temperatur und Feuchtigkeit ausgleicht, wenn man aus einem warmen Café direkt in die Kälte tritt. Ohne faustgroßes Logo auf der Stirn.',
    specs: [
      '100 % Merinowolle, Patentstrick Feinheit 8, mulesingfrei',
      'Einheitsgröße',
      'Dark Brown',
      'Hergestellt in Finnland, Material aus Italien',
      'Mit ähnlichen Farben im Schonwaschgang waschen, liegend trocknen und in Form ziehen. Lüften genügt oft statt Waschen. Pilling kann mit der Zeit auftreten',
    ],
  },
  'makia-aurora-hoodie': {
    name: 'Makia Aurora Kapuzenpullover',
    description:
      'Ein Kapuzenpullover in normaler Passform aus 100 Prozent Biobaumwolle vom Helsinkier Label Makia. Kräftig genug, um drinnen und an milden Herbstabenden als äußere Schicht zu dienen.',
    specs: [
      '100 % Biobaumwolle, French Terry 370 g',
      'S, M, L, XL, XXL',
      'Carbon Black',
      'Normale Passform, Kordelzug an der Kapuze, Känguru-Tasche, Rippbund an Saum und Ärmelabschluss, gewebte Etiketten aus recyceltem Polyester',
      'Hergestellt in der Türkei, Material aus der Türkei',
      'Auf links mit ähnlichen Farben waschen. Nicht auf den Druck bügeln. Einlaufen maximal 5 %. Feucht in Form ziehen',
    ],
    specLabels: [undefined, undefined, undefined, 'Passform und Details', undefined, undefined],
  },
  'halti-kroka-mitten': {
    name: 'Halti Kroka II Fäustling',
    description:
      'Ein winddichter Fäustling mit 60 g Isolierung und Silikongriff in der Handfläche, unisex geschnitten. Fäustlinge schlagen Handschuhe, sobald der Wind auffrischt, weil die Finger sich gegenseitig wärmen.',
    specs: [
      'Stormwall Softshell, 50 % Polyester und 50 % recyceltes Polyester. Weiches Fleece 100 % Polyester. Bündchen aus Lycra-Strick',
      'Microtherm Dynamic 60 g, Futter Active Dry Soft Touch Knit, 100 % recyceltes Polyester',
      '0,1 kg',
      '06, 07, 08, 09, 10, 11, 12',
      'Schwarz',
      'Separat bei 30 °C im Schonwaschgang waschen. Nicht bleichen, nicht in den Trockner, nicht bügeln, keine chemische Reinigung',
      '084-0757',
    ],
    specLabels: [
      undefined,
      'Isolierung und Futter',
      undefined,
      undefined,
      undefined,
      undefined,
      'Artikelnummer',
    ],
  },
  'halti-tunturit-ski-socks': {
    name: 'Halti Tunturit Skisocken',
    description:
      'Kniehohe Socken aus Merinomischung mit Polsterung an Schienbein und Knöchel, also genau dort, wo der Skischuh drückt. Halti gibt an, dass sie in Europa hergestellt werden.',
    specs: [
      'Merinowollmischung: 36 % Polyamid, 23 % Acryl, 23 % Merinowolle, 16 % Polypropylen, 2 % Elasthan',
      '0,1 kg',
      '34-36, 37-39, 40-42, 43-45, 46-48',
      'Sargasso Sea Blue, Lemon Pepper Beige',
      'Hergestellt in Europa',
      'Polsterung an Schienbein und Knöchel, kniehohe Länge, verstärkte Ferse und Spitze, Belüftungszonen an Schienbein und Fußrücken',
      'Maximal 40 °C, normales Verfahren. Nicht bügeln, nicht bleichen, keine chemische Reinigung, nicht in den Trockner',
      '087-0471',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      'Ausstattung',
      undefined,
      'Artikelnummer',
    ],
  },
  'north-outdoor-huuru-beanie': {
    name: 'North Outdoor Huuru Merinomütze',
    description:
      'North Outdoor strickt diese Rippmütze in der eigenen Strickerei in Oulu aus 100 Prozent mulesingfreier Merinowolle mit 18,5 Mikron. Sie wird in Form gestrickt statt zugeschnitten, sodass kaum Verschnitt anfällt.',
    specs: [
      '100 % Merinowolle, mulesingfrei, 18,5 Mikron, Strick 270 g/m²',
      'Einheitsgröße',
      'Indigoblau',
      'Hergestellt in Oulu, Finnland',
      'Regelmäßig lüften und nur bei Bedarf waschen. Wollwaschmittel, Schonwaschgang bei 30 °C mit dem niedrigsten Schleudergang, auf links',
      'OEKO-TEX, Woolmark',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, 'Zertifikate'],
  },
  'north-outdoor-pyry-scarf': {
    name: 'North Outdoor Pyry Merinoschal',
    description:
      'Ein breiter, langer Schal in Patentstrick aus 100 Prozent Merinowolle, gestrickt in Oulu. Lang genug, um ihn auf mehrere Arten zu wickeln, was zählt, wenn auf offenem Fjell der Wind dreht.',
    specs: [
      '100 % Merinowolle, 18,5 Mikron, Rippstrick 1/1',
      'Einheitsgröße',
      'Haferbreigrau',
      'Hergestellt in Oulu, Finnland',
      'Regelmäßig lüften und nur bei Bedarf waschen. Wollwaschmittel, Schonwaschgang bei 30 °C mit dem niedrigsten Schleudergang, auf links',
      'OEKO-TEX, Woolmark',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, 'Zertifikate'],
  },
  'north-outdoor-honka-jumper': {
    name: 'North Outdoor Honka Merinopullover, Herren',
    description:
      'Ein dicker Pullover in Patentstrick aus 100 Prozent Merinowolle mit lockerem Schnitt und tief angesetzter Schulter. Schwer anzusehen, leicht zu tragen, gestrickt in der Strickerei in Oulu.',
    specs: [
      '100 % Merinowolle, mulesingfrei, 18,5 Mikron, wechselnder Rippstrick',
      'S, M, L, XL, 2XL, 3XL',
      'Indigoblau',
      'Hergestellt in Oulu, Finnland',
      'Regelmäßig lüften und nur bei Bedarf waschen. Wollwaschmittel, Schonwaschgang bei 30 °C mit dem niedrigsten Schleudergang, auf links',
      'OEKO-TEX, Woolmark',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, 'Zertifikate'],
  },
  'marttiini-lapinleuku-255': {
    name: 'Marttiini Lappmesser 255',
    description:
      'Das traditionelle Lappmesser, 27 cm lang, mit rostfreier Klinge, lackiertem Maserbirkengriff und Lederscheide. Marttiini fertigt seine Messer in Rovaniemi, und diese Ausführung des Modells hat einen Fingerschutz.',
    specs: [
      '16 cm',
      'Gesamtlänge 27 cm',
      'Klinge rostfreier Stahl, Griff lackierte Maserbirke, Scheide Leder',
      'Messer und Lederscheide mit Druckknopfverschluss',
      '255010',
    ],
    specLabels: ['Klingenlänge', undefined, undefined, undefined, 'Artikelnummer'],
  },
  'marttiini-napapiirin-puukko': {
    name: 'Marttiini Polarkreis-Messer',
    description:
      'Ein kleines Alltagsmesser, 20 cm lang, mit Klinge aus Kohlenstoffstahl, gewachstem Birkengriff und brauner Lederscheide. Kohlenstoffstahl nimmt eine schärfere Schneide an als rostfreier Stahl, muss aber geölt werden, worauf Marttiini auf der Produktseite ebenfalls hinweist.',
    specs: [
      '9 cm',
      'Gesamtlänge 20 cm',
      'Klinge Kohlenstoffstahl, Griff gewachste Birke, Scheide braunes Leder',
      'Die Klinge nach Gebrauch stets sorgfältig trocknen und regelmäßig mit ungesalzenem Öl einölen',
      '121019',
    ],
    specLabels: ['Klingenlänge', undefined, undefined, undefined, 'Artikelnummer'],
  },
  'marttiini-ilves-131': {
    name: 'Marttiini Luchs 131',
    description:
      'Ein 22 cm langes Messer mit rostfreier Klinge, lackiertem Maserbirkengriff und brauner Lederscheide. Marttiini gibt an, dass das Modell Luchs in den 1930er-Jahren vom Firmengründer Janne Marttiini entworfen wurde.',
    specs: [
      '11 cm',
      'Gesamtlänge 22 cm',
      'Klinge rostfreier Stahl, Griff lackierte Maserbirke, Scheide braunes Leder',
      '131010',
    ],
    specLabels: ['Klingenlänge', undefined, undefined, 'Artikelnummer'],
  },
  'kupilka-classic-cup-21': {
    name: 'Kupilka 21 Outdoor-Becher 2,1 dl',
    description:
      'Die Kuksa-Form in einem Material, das in die Spülmaschine darf: halb Kiefernzellulosefaser, halb Thermoplast, geformt in Finnland. Er fasst 2,1 dl, wiegt 83 Gramm und verbrennt am Feuer nicht die Finger.',
    specs: [
      '2,1 dl',
      '83 g',
      '60 x 93 x 165 mm',
      'Kareline Naturfaserverbund, 50 % Kiefernzellulosefaser und 50 % Thermoplast, mit Ökostrom hergestellt',
      'Finnland',
      'Unterwegs wie eine hölzerne Kuksa ausspülen, zu Hause darf er in die Spülmaschine. Nicht für die Mikrowelle',
      '3021011XX',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      'Modellnummer',
    ],
  },
  'kupilka-bowl-55': {
    name: 'Kupilka 55 Outdoor-Schale 5,5 dl',
    description:
      'Eine Schale mit 5,5 dl und einem Griff, der fest genug ist, um sie in einer Hand zu halten, während die andere den Becher hält. Derselbe finnische Kiefernfaserverbund wie beim Becher, 184 Gramm, spülmaschinenfest.',
    specs: [
      '5,5 dl',
      '184 g',
      '54 x 154 x 223 mm',
      'Kareline Naturfaserverbund, 50 % Kiefernzellulosefaser und 50 % Thermoplast, mit Ökostrom hergestellt',
      'Finnland',
      'Spülmaschinenfest. Nicht für die Mikrowelle. Zugelassen für den Kontakt mit heißen und kalten Speisen',
      '3055013X',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      'Modellnummer',
    ],
  },
  'kupilka-cutlery-set': {
    name: 'Kupilka Besteckset',
    description:
      'Löffel, Messer und Gabel aus demselben finnischen Holzfaserverbund, 56 Gramm für das Set. Die günstigste Art, das Kupilka-Material mitzunehmen, und die handgepäcktauglichste.',
    specs: [
      'Löffel, Messer und Gabel',
      '56 g',
      'Kareline Naturfaserverbund, 50 % Kiefernzellulosefaser und 50 % Thermoplast, mit Ökostrom hergestellt',
      'Finnland',
      'Unterwegs wie Holzbesteck ausspülen, zu Hause darf es in die Spülmaschine. Nicht für die Mikrowelle',
      '3025025X',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, 'Modellnummer'],
  },
  'lapuan-kankurit-poro-towel': {
    name: 'Lapuan Kankurit PORO Leinenhandtuch 46 x 70 cm',
    description:
      'Ein Rentier, gezeichnet vom Illustrator Matti Pikkujämsä, gewebt in der Weberei in Lapua aus europäischer Leinenkette und Bio-Baumwollschuss. Es lässt sich flach in den Koffer legen, und die Saugfähigkeit stellt sich erst nach einigen Wäschen ein.',
    specs: [
      '46 x 70 cm',
      '60 % Leinen, Masters of Linen, und 40 % Baumwolle',
      'Leinen-Grün',
      'Hergestellt in Finnland',
      'Vor dem ersten Gebrauch separat bei 60 °C im Schonwaschgang mit viel Wasser waschen. Nicht schleudern. Weichspüler und Bleichmittel vermeiden. Nicht in den Trockner. Feucht bügeln. Einlaufen ca. 5 %',
      'Matti Pikkujämsä',
      '20527',
      'Schlüsselflagge, Masters of Linen',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      'Designer',
      'Produktcode',
      'Zertifikate',
    ],
  },
  'lapuan-kankurit-kaamos-blanket': {
    name: 'Lapuan Kankurit KAAMOS Wolldecke 100 x 150 cm',
    description:
      'Kaamos ist die Polarnacht, und Hanna Galtat leitete das Muster daraus ab, wie sich das Tageslicht im Lauf des Tages bewegt. Das Schussgarn ist Wolle vom Finnschaf, die die Weberei von Höfen im Umkreis von etwa 400 km um Lapua bezieht.',
    specs: [
      '100 x 150 cm',
      '100 % Schurwolle',
      'Weiß-Schwarz',
      'Hergestellt in Finnland',
      'Nur bei starker Verschmutzung waschen, sonst im Freien lüften. Handwäsche bei max. 30 °C oder chemische Reinigung. Nicht reiben, dehnen oder auswringen. Nicht in den Trockner. Mit feuchtem Tuch bei max. 150 °C bügeln',
      'Hanna Galtat',
      '102939',
      'Schlüsselflagge',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      'Designer',
      'Produktcode',
      'Zertifikat',
    ],
  },
  'pentik-posio-mug': {
    name: 'Pentik Posio Becher 0,3 l',
    description:
      'Pentik brennt diesen Becher in Posio, das das Unternehmen als nördlichste Keramikfabrik der Welt bezeichnet, und die gesamte Posio-Reihe ist mit Rentieren dekoriert. Geeignet für Spülmaschine, Backofen, Mikrowelle und Gefrierschrank.',
    specs: [
      '0,3 l',
      'Rot',
      'Hergestellt in Posio, Lappland, das Pentik als nördlichste Keramikfabrik der Welt bezeichnet',
      'Spülmaschinenfest, geeignet für Elektroherd, Backofen, Mikrowelle und Gefrierschrank',
      'Posio. Jedes Stück der Reihe ist mit Rentieren dekoriert',
      '12JAO050P41',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Kollektion', 'Produktcode'],
  },
  'pentik-tunturiretki-studio-dish': {
    name: 'Pentik Tunturiretki Winter Studio tiefe Dreiecksschale 19 cm',
    description:
      'Anu Pentik malte die Rentiere, die auf einer Fjellwanderung immer wieder zwischen den Bäumen auftauchen. Studio-Stücke werden in Posio von Hand bemalt, sodass keine zwei Schalen genau dieselben Pinselspuren tragen.',
    specs: [
      'Durchmesser 19 cm',
      'Blau',
      'Handgefertigt in Posio, Lappland, entworfen von Anu Pentik',
      'Spülmaschinenfest, geeignet für Elektroherd, Backofen, Mikrowelle und Gefrierschrank',
      'Pentik Studio, die handbemalte Reihe',
      '12ST353TT61',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Kollektion', 'Produktcode'],
  },
  'kuivalihakundi-poro-jerky': {
    name: 'Rentier-Trockenfleisch Original 2 x 20 g',
    description:
      'Zwei Beutel mit je 20 Gramm Rentier-Trockenfleisch aus 100 Prozent finnischem Rentier, im Ofen getrocknet und mit glutenfreier Sojasauce, schwarzem Pfeffer, Knoblauch und Zuckersirup mariniert. Fleisch darf nicht außerhalb der EU versandt werden, deshalb endet die Lieferung an der EU-Grenze.',
    specs: [
      '2 x 20 g',
      'Fleisch aus Finnland',
      'Das Datum läuft etwa ein Jahr ab dem Tag, an dem das Fleisch getrocknet und verpackt wurde. Muss auch nach dem Öffnen nicht gekühlt werden',
      'Stark gesalzen. Glutenfrei',
      'Energie 1514 kJ / 360 kcal, Fett 14,2 g davon gesättigte Fettsäuren 6,2 g, Kohlenhydrate 7,9 g davon Zucker 5,1 g, Eiweiß 50,2 g, Salz 9,5 g',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      'Hinweise auf dem Etikett',
      'Nährwerte je 100 g',
    ],
  },
  'finnish-flavours-palalaku-salmiakki': {
    name: 'Finnish Flavours Premium Palalaku Salmiak 150 g',
    description:
      'Ein 150-Gramm-Beutel weiches Salmiaklakritz, die Sorte mit Ammoniumchlorid, die Besucher schon beim ersten Stück in zwei Lager teilt. Suomikauppa versendet Lebensmittel weit über Finnland hinaus.',
    specs: [
      '150 g',
      'Energie 1316 kJ / 311 kcal, Fett 0,5 g davon gesättigte Fettsäuren 0 g, Kohlenhydrate 72 g davon Zucker 50 g, Eiweiß 4,1 g, Salz 1,7 g',
      'Finnish Flavours, Kumitehtaankatu 5, 04260 Kerava',
    ],
    specLabels: [undefined, 'Nährwerte je 100 g', 'Inverkehrbringer'],
  },
  'meritalo-tyrnihillo': {
    name: 'Meritalo finnische Sanddornkonfitüre 310 g',
    description:
      'Sanddornkonfitüre mit 37 Gramm Beeren je 100 Gramm, aus finnischem Sanddorn auf dem Familienhof Meritalo in Salo im Südwesten Finnlands gekocht, nicht in Lappland. Sanddorn ist eher herb als süß und kommt daher neben Käse weiter als auf dem Pfannkuchen.',
    specs: [
      '310 g',
      'Die Beeren stammen aus Finnland. Hergestellt von einem Familienbetrieb auf dem Hof Meritalo in Salo, Südwestfinnland',
      'Energie 781 kJ / 187 kcal, Fett 1,9 g davon gesättigte Fettsäuren 0,3 g, Kohlenhydrate 41 g davon Zucker 41 g, Eiweiß 0,3 g, Salz 0,01 g',
      'Marjajaloste Meritalo Oy, 25610 Ylönkylä',
    ],
    specLabels: [undefined, undefined, 'Nährwerte je 100 g', 'Inverkehrbringer'],
  },
  'kuivalihakundi-poro-jerky-200g': {
    name: 'Rentier-Trockenfleisch Original 200 g',
    description:
      'Der Beutel in Geschenkgröße mit demselben Rentier-Trockenfleisch, 200 Gramm. Der Hersteller gibt an, dass für ein Kilo Trockenfleisch drei Kilo frisches Fleisch nötig sind, was den größten Teil des Preises erklärt.',
    specs: [
      '200 g',
      '100 % Rentierfleisch, Oberschale, im Ofen getrocknet und mariniert',
      'Für 1 kg Trockenfleisch werden 3 kg frisches Fleisch benötigt',
      'Das Datum läuft etwa ein Jahr ab dem Tag, an dem das Fleisch getrocknet und verpackt wurde. Muss auch nach dem Öffnen nicht gekühlt werden',
    ],
    specLabels: [undefined, undefined, 'Fleischeinsatz', undefined],
  },
  'kuivalihakundi-beef-jerky-smoked': {
    name: 'Rinder-Trockenfleisch Smoked 40 g',
    description:
      'Rind statt Rentier, tatsächlich geräuchert statt aromatisiert, 57 Gramm Eiweiß je 100. Das günstigste Produkt dieser Kategorie und dasjenige, das einen Rucksack übersteht.',
    specs: [
      '40 g',
      'Rind aus EU-Aufzucht und -Schlachtung',
      'Für 1 kg Trockenfleisch werden 2,5 kg frisches Rindfleisch benötigt',
      'Energie 1261 kJ / 298 kcal, Fett 5,5 g davon gesättigte Fettsäuren 2,4 g, Kohlenhydrate 5,2 g davon Zucker 4,4 g, Eiweiß 56,9 g, Salz 5 g',
    ],
    specLabels: [undefined, undefined, 'Fleischeinsatz', 'Nährwerte je 100 g'],
  },
  'fazer-geisha-chocolate-bar': {
    name: 'Fazer Geisha Haselnussnougat-Schokoladentafel 121 g',
    description:
      'Milchschokolade über einer knusprigen Haselnussnougatfüllung, die Tafel, die die meisten finnischen Haushalte in einer Schublade haben. Fazer gibt an, dass sie ohne Palmöl hergestellt wird.',
    specs: [
      '121 g',
      'Milchschokolade mit mindestens 30 % Kakao, Haselnussnougatfüllung mit 11 % Haselnüssen',
      'Energie 550 kcal / 2302 kJ, Fett 35 g, gesättigte Fettsäuren 17 g, Kohlenhydrate 51 g, Zucker 49 g, Eiweiß 8 g, Salz 0,19 g',
    ],
    specLabels: [undefined, undefined, 'Nährwerte je 100 g'],
  },
  'nordqvist-moomin-forest-berry-tea': {
    name: 'Nordqvist Mumin Waldbeeren-Hibiskustee, 20 Beutel',
    description:
      'Bio-Hibiskus mit Apfel und Waldbeeren, von Natur aus koffeinfrei, gemischt in der Nordqvist-Fabrik in Nurmijärvi. Zwanzig Beutel wiegen 35 Gramm und sind damit das leichteste Geschenk in diesem Shop.',
    specs: [
      '20 x 1,75 g, 35 g',
      'Gemischt in der Nordqvist-Fabrik in Nurmijärvi, Finnland',
      '95 °C für 2 bis 4 Minuten. In kaltem Wasser 5 bis 10 Minuten',
      'Bio-zertifiziert, vegan, glutenfrei, von Natur aus koffeinfrei',
    ],
    specLabels: [undefined, undefined, 'Zubereitung', 'Ernährung'],
  },
  'nordqvist-cranberry-toffee-tea': {
    name: 'Nordqvist Cranberry-Salzkaramell-Tee, 20 Beutel',
    description:
      'Herbe Cranberry gegen gesalzenes Karamell auf einer Basis aus Hibiskus und Rooibos, dadurch koffeinfrei und abends trotzdem mit Geschmack. Nordqvist mischt seit 1883 Tee in Finnland.',
    specs: [
      '20 x 1,75 g, 35 g',
      '95 °C für 2 bis 5 Minuten',
      'Vegan. Hibiskus und Rooibos sind Rainforest Alliance zertifiziert',
    ],
    specLabels: [undefined, 'Zubereitung', 'Ernährung und Zertifizierung'],
  },
  'moomin-wild-blueberry-coffee': {
    name: 'Mumintroll Wild Blueberry Kaffee 250 g',
    description:
      'Kaffee mit Blaubeeraroma von der Rösterei Bergstrands Kafferosteri, aufgebaut auf Perlbohnen von den Hügeln der Mogiana im Süden Brasiliens. Eine Perlbohne ist eine Kaffeekirsche, in der statt zweier Bohnen nur eine gewachsen ist, was laut Rösterei den Geschmack verdichtet. 250 Gramm.',
    specs: [
      '250 g',
      'Bohnen von den Mogiana-Hügeln im Süden Brasiliens, geröstet von Bergstrands Kafferosteri',
      'Perlbohne, eine Kaffeekirsche mit einer einzelnen statt zweier Bohnen',
      'Wilde Blaubeere',
    ],
    specLabels: [undefined, undefined, 'Bohne', 'Aroma'],
  },
  'moomin-lingonberry-blueberry-dark-chocolate': {
    name: 'Mumintroll Zartbitterschokolade mit Preiselbeere und Blaubeere 70 g',
    description:
      'Zartbitterschokolade in Bio-Qualität mit 70 Prozent Kakao von Kalmar Chokladfabrik mit gefriergetrockneten Preiselbeeren und Blaubeeren, eingeschlagen in ein Motiv von Tove Jansson. Der Kakao ist Criollo und Trinitario aus Peru, die Tafel wird in Schweden hergestellt.',
    specs: [
      '70 g',
      'Zartbitterschokolade, 70 % Kakao',
      'Kakaobohnen Criollo und Trinitario aus Peru, hergestellt in Schweden',
      'Bio',
    ],
    specLabels: [undefined, undefined, undefined, 'Ernährung'],
  },
  'moomin-berry-picking-tea': {
    name: 'Mumin Berry Picking Tee, 20 Beutel',
    description:
      'Schwarzer Tee mit Vanille- und roten Beerenaromen, gemischt in der Fabrik in Nurmijärvi in Finnland und mit der finnischen Schlüsselflagge ausgezeichnet. Der Tee entsteht in Zusammenarbeit mit dem Finnischen Roten Kreuz: 0,40 Euro pro verkaufter Packung gehen an die Arbeit des Roten Kreuzes mit Kindern, Jugendlichen und einsamen Menschen.',
    specs: [
      '20 x 1,75 g, 35 g',
      'Hergestellt in der Fabrik in Nurmijärvi, Finnland',
      'Rainforest Alliance zertifizierter Tee, finnische Schlüsselflagge',
      'Vegan',
    ],
    specLabels: [undefined, undefined, 'Zertifizierung', 'Ernährung'],
  },
  'arctic-power-berries-blueberry-powder': {
    name: 'Wildblaubeerpulver 70 g',
    description:
      'Gefriergetrocknete wilde Heidelbeere, ohne Zusätze. Der Hersteller gibt an, dass etwa 700 Gramm frische Beeren in ein Glas mit 70 Gramm gehen. Dieser Shop rechnet in Pfund Sterling ab.',
    specs: [
      '70 g',
      '100 % Blaubeerpulver aus wilden nordischen Blaubeeren, auch Heidelbeeren genannt. Ohne Zusätze',
      'Aus etwa 700 g frischen Beeren entstehen 70 g Beerenpulver',
      'Energie 367 kcal / 1559 kJ, Eiweiß 5 g, Kohlenhydrate 54 g davon Zucker 34 g, Ballaststoffe 31 g, Fett 0,8 g, Salz 0,01 g',
    ],
    specLabels: [undefined, undefined, 'Beereneinsatz', 'Nährwerte je 100 g'],
  },
  'arctic-power-berries-sea-buckthorn-powder': {
    name: 'Sanddornpulver 70 g',
    description:
      'Gefriergetrockneter nordischer Sanddorn, 70 Gramm, ohne Zusätze. Herb und leuchtend orange, sodass ein Teelöffel im Porridge weiter trägt, als man vermuten würde. Dieser Shop rechnet in Pfund Sterling ab.',
    specs: [
      '70 g',
      '100 % Sanddornpulver aus nordischen Sanddornbeeren. Ohne Zusätze',
      'Aus etwa 700 g frischen Beeren entstehen 70 g Beerenpulver',
      'Energie 489 kcal / 2045 kJ, Eiweiß 13 g, Kohlenhydrate 24 g davon Zucker 14 g, Ballaststoffe 28 g, Fett 25 g, Salz 0,06 g',
    ],
    specLabels: [undefined, undefined, 'Beereneinsatz', 'Nährwerte je 100 g'],
  },
  'kaapa-mushrooms-pakuri-powder': {
    name: 'Kääpä Mushrooms Chaga-Extraktpulver 30 g',
    description:
      'Ein Glas mit 30 Gramm Chaga-Extraktpulver von Kääpä Mushrooms, die Vitalpilze in nordischen Wäldern ernten, gedacht zum Einrühren in heiße Getränke. Ruohonjuuri liefert nur innerhalb des EU-Zoll- und Steuergebiets, und das Etikett nennt Wechselwirkungen mit Medikamenten, die man vorher lesen sollte.',
    specs: [
      '30 g',
      '100 % Chaga, bio. 100 mg Beta-Glucan pro Tagesdosis',
      'Finnland',
      'Bio mit dem EU-Bio-Blatt. Glutenfrei, laktosefrei, milchfrei, sojafrei, zuckerfrei, koffeinfrei, ohne Zusatzstoffe, vegan, wild',
      'Chaga darf nicht gleichzeitig mit Antibiotika, Blutverdünnern, Penicillin oder intravenöser Glukose eingenommen werden. Die auf der Packung angegebene Dosis einhalten und nicht überschreiten',
      '6430071310212',
    ],
    specLabels: [undefined, undefined, undefined, 'Ernährung', 'Warnhinweis', 'EAN'],
  },
  'arctic-warriors-spruce-sprout-powder': {
    name: 'Arctic Warriors Fichtensprossenpulver 40 g',
    description:
      'Gefriergetrocknete Fichtensprossen, innerhalb eines Zeitfensters von zwei Wochen von Hand gepflückt, aus staatlichen Bio-Wäldern und nur jedes zweite Jahr aus demselben Wald. Zitrus und Harz in einem Löffel, 382 mg Vitamin C je 100 g.',
    specs: [
      '40 g, brutto 0,046 kg',
      '3 x 11 x 17 cm',
      'Gefriergetrocknete Fichtensprosse',
      'Finnland',
      '1 bis 3 Teelöffel täglich',
      'Energie 1683 kJ / 402 kcal, Eiweiß 12,1 g, Kohlenhydrate 77,8 g, Fett 4,19 g. Vitamin C 382 mg, Vitamin A 970 µg, Vitamin K1 332 mg, Kalium 1200 mg, Phosphor 350 mg, Kalzium 130 mg, Magnesium 120 mg, Zink 3,6 mg, Eisen 2 mg',
      'Unter Lizenz aus Bio-Wäldern der finnischen staatlichen Forstverwaltung geerntet, je Wald jedes zweite Jahr',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      undefined,
      'Dosierung',
      'Nährwerte je 100 g',
      'Ernte',
    ],
  },
  'arctic-warriors-nettle-powder': {
    name: 'Arctic Warriors Brennnesselpulver 150 g',
    description:
      'Brennnessel von Bio-Höfen in Lappland, gefriergetrocknet zu einem Pulver, das neutral genug ist, um es in Suppe oder Brot zu rühren, ohne dem übrigen Gericht zu widersprechen. 22 000 mg Kalzium je 100 g.',
    specs: [
      '150 g, brutto 0,162 kg',
      '4 x 16 x 23 cm',
      'Gefriergetrocknete Brennnessel',
      'Finnland, angebaut auf Bio-Höfen in Lappland',
      '1 bis 5 Teelöffel täglich',
      'Energie 1484 kJ / 354 kcal, Eiweiß 23,6 g, Kohlenhydrate 56 g, Fett 3,44 g, Salz unter 5 mg. Vitamin A 1900 µg, Kalzium 22000 mg, Magnesium 5300 mg, Eisen 68 mg',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Dosierung', 'Nährwerte je 100 g'],
  },
  'arctic-warriors-roseroot-elixir': {
    name: 'Arctic Warriors Rosenwurz-Elixier 100 ml',
    description:
      'Rosenwurz wächst an den feuchten Bachufern und Felswänden der lappländischen Fjells, und Arctic Warriors extrahiert sie zusammen mit Brennnessel in pflanzliches Glycerin. Ein Teelöffel kommt in Tee, Porridge oder Joghurt.',
    specs: [
      '100 ml, brutto 0,270 kg',
      '4,5 x 4,5 x 13 cm',
      'Pflanzliches Glycerin, Brennnessel, Rosenwurz',
      'Finnland',
      '1 bis 2 Teelöffel täglich',
      'Milchfrei, glutenfrei, vegan. Das pflanzliche Glycerin beeinflusst den Blutzucker nicht',
      'Ein Nahrungsergänzungsmittel ersetzt keine abwechslungsreiche Ernährung. Außerhalb der Reichweite von Kindern aufbewahren und die angegebene Dosis nicht überschreiten',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      undefined,
      'Dosierung',
      'Ernährung',
      'Hinweis',
    ],
  },
  'omega7-sea-buckthorn-olive-oil': {
    name: 'Omega7 SBA24 Sanddorn- und Olivenöl 150 ml',
    description:
      'Sanddornfruchtöl und -kernöl zusammen mit Olivenöl, in Finnland entwickelt und hergestellt. Der Hersteller standardisiert die Gehalte an Vitamin A und E, statt sie der Ernte zu überlassen.',
    specs: [
      '150 ml',
      'Sanddornfruchtöl und -kernöl mit Olivenöl, standardisierte Gehalte an Vitamin A und E',
      'In Finnland entwickelt und hergestellt',
      'Die auf der Packung angegebene Dosis einhalten und nicht überschreiten. Ein Nahrungsergänzungsmittel ersetzt keine abwechslungsreiche Ernährung. Außerhalb der Reichweite von Kindern aufbewahren',
    ],
    specLabels: [undefined, undefined, undefined, 'Hinweis'],
  },
  'kaino-spruce-sprout-sparkling': {
    name: 'KAINO Drinks Fichtensprossen-Schaumgetränk 0,2 l',
    description:
      'Ein alkoholfreies Schaumgetränk aus finnischen Bio-Zutaten, damit ein Anstoßen in der Hütte nicht zwingend Alkohol bedeutet. Kalt servieren, sonst verschwindet das Fichtenaroma unter der Kohlensäure.',
    specs: [
      '0,2 l',
      'Hergestellt aus 100 % finnischen Bio-Zutaten. Alkoholfrei',
      'Finnland',
      'Energie 122,65 kJ / 29,3 kcal, Fett unter 0,1 g davon gesättigte Fettsäuren unter 0,1 g, Kohlenhydrate 6,9 g davon Zucker 6,9 g, Eiweiß unter 0,1 g, Salz unter 0,1 g',
      'Vegan. EU-Bio-Blatt',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      'Nährwerte je 100 ml',
      'Ernährung und Zertifizierung',
    ],
  },
  'north-outdoor-arctic-250-balaclava': {
    name: 'North Outdoor Arctic 250 Merino-Sturmhaube',
    description:
      'Der wärmste Strick von North Outdoor, geformt, um unter einem Helm zu sitzen. Auf dem Schneemobil oder im Rentierschlitten dringt die Kälte zuerst an Hals und Wangen ein, und genau diese Lücke schließt diese Schicht.',
    specs: [
      'Merinowollstrick, Gewicht Arctic 250',
      'Einheitsgröße',
      'Schwarz',
      'North Outdoor, Oulu, Finnland',
    ],
  },
  'north-outdoor-kevo-gloves': {
    name: 'North Outdoor Kevo Merinohandschuhe',
    description:
      'Gestrickt aus mulesingfreier Merinowolle in der eigenen Strickerei von North Outdoor in Oulu. Dünn genug, um sie an den kältesten Tagen unter einem Fäustling zu tragen und beim Fotografieren anzubehalten.',
    specs: ['100 % Merinowolle, mulesingfrei', 'M, L, XL', 'Indigoblau', 'Gestrickt in Oulu, Finnland'],
  },
  'north-outdoor-heavyweight-gaiter': {
    name: 'North Outdoor Heavyweight Merino-Schlauchschal',
    description:
      'Merinofleece, dick genug, um ihn über die Nase zu ziehen, während man auf die Lichter wartet. Wolle isoliert weiter, wenn der Atem darin kondensiert, und genau das ist das Problem beim Stillstehen in der Kälte.',
    specs: ['Merinofleece', 'Einheitsgröße', 'Schwarz', 'North Outdoor, Oulu, Finnland'],
  },
  'north-outdoor-sointu-cardigan': {
    name: 'North Outdoor Sointu Merino-Strickjacke',
    description:
      'Eine kastig geschnittene Merino-Strickjacke, die wie Hauskleidung wirkt, aber als Zwischenschicht funktioniert. Das eine Stück aus dieser Auswahl, das man nach der Safari auch zum Abendessen trägt.',
    specs: ['100 % Merinowolle', 'XS–2XL', 'Latte', 'North Outdoor, Oulu, Finnland'],
  },
  'north-outdoor-arctic-260-zip-neck': {
    name: 'North Outdoor Arctic 260 Merino-Troyer',
    description:
      'Ein Troyer mit hohem Kragen aus 100 Prozent Merinowolle, dick genug, um ihn drinnen allein zu tragen und draußen als Zwischenschicht zu nutzen. Der Reißverschluss ist der Punkt: Man öffnet ihn beim Gehen und schließt ihn, sobald man stehen bleibt.',
    specs: [
      '100 % Merinowolle',
      'S–3XL',
      'Granitgrau und Schwarz',
      'North Outdoor, Oulu, Finnland',
      'Hoher schützender Kragen, abgedeckter Reißverschluss, verlängerter Rückensaum',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Details'],
  },
  'halti-hossa-baselayer-men': {
    name: 'Halti Hossa II Merino-Unterwäscheset, Herren',
    description:
      'Oberteil und lange Unterhose in einer Schachtel, 190 g Merino mit 20,5 Mikron. Die Schicht direkt auf der Haut entscheidet, ob der Rest der Ausrüstung funktioniert, und genau sie fehlt den meisten Besuchern bei der Ankunft.',
    specs: [
      '100 % Merinowolle, 190 g/m², 20,5 Mikron, Rippstrick 1x1',
      'Langarmshirt und lange Unterhose',
      'Auf links waschen',
    ],
    specLabels: [undefined, 'Inhalt des Sets', undefined],
  },
  'halti-hossa-baselayer-women': {
    name: 'Halti Hossa II Merino-Unterwäscheset, Damen',
    description:
      'Dasselbe Set aus 190 g Merino in Damenschnitt. Wolle hält die Wärme auch dann, wenn man beim Gehen schwitzt und danach still steht und schaut, und genau so sieht ein Tag in Lappland aus.',
    specs: [
      '100 % Merinowolle, 190 g/m², 20,5 Mikron, Rippstrick 1x1',
      'Langarmshirt und lange Unterhose',
      'Auf links waschen',
    ],
    specLabels: [undefined, 'Inhalt des Sets', undefined],
  },
  'halti-heatgrid-midlayer': {
    name: 'Halti HeatGrid Zwischenschichtjacke, Herren',
    description:
      'Waffelstrick, der Luft einschließt, ohne unter einer Wetterjacke aufzutragen. Das ist die Schicht zwischen Merino und Parka, und dass sie fehlt, ist der Grund, warum Leute frierend zurückkommen.',
    specs: [
      'Waffelstrick 95 % recyceltes Polyester / 5 % Elasthan; Jerseystrick 92 % recyceltes Polyester / 8 % Elasthan',
      'Auf links mit ähnlichen Farben waschen, Reißverschlüsse vor dem Waschen schließen',
    ],
  },
  'halti-taival-dx-jacket': {
    name: 'Halti Taival DX 3L Wetterjacke, Herren',
    description:
      'Eine dreilagige Wetterjacke mit 20 000 mm Wassersäule und 30 000 g Atmungsaktivität. Diese beiden Zahlen wirken in verschiedene Richtungen: Die erste hält Schneeregen draußen, die zweite lässt den Schweiß eines Aufstiegs entweichen, statt ihn innen gefrieren zu lassen.',
    specs: [
      'DrymaxX Nano Knit Shell, 3-lagig. 100 % recyceltes Polyester',
      '20 000 mm',
      '30 000 g/m²/24 h',
    ],
    specLabels: [undefined, 'Wassersäule', 'Atmungsaktivität'],
  },
  'halti-sykli-ski-gloves': {
    name: 'Halti Sykli Skihandschuhe',
    description:
      'Wasserdichter Handschuh mit 120 g Isolierung, Lederhandfläche und Schneefangbund, der beim Sturz verhindert, dass sich Schnee am Handgelenk hineinpresst. Gemacht für den Liftbetrieb in Levi oder Ylläs, nicht für den Stadtbummel.',
    specs: [
      'DrymaxX, dehnt sich in 4 Richtungen, wasser- und winddicht. Lederhandfläche',
      '120 g Microtherm Dynamic',
      '15 000 mm / 15 000 g/m²/24 h',
    ],
    specLabels: [undefined, 'Isolierung', 'Wassersäule und Atmungsaktivität'],
  },
  'halti-merino-socks-2pack': {
    name: 'Halti Merinowollsocken, 2er-Pack',
    description:
      'Zwei Paar, weil das Paar von heute morgen früh noch nicht trocken ist. Merinomischung statt reiner Wolle, was wiederholte Maschinenwäsche besser übersteht.',
    specs: [
      '40 % Merinowolle, 40 % Acryl, 19 % Polyamid, 1 % Elasthan',
      '2 Paar',
      'Hergestellt in Europa',
    ],
    specLabels: [undefined, 'Packungsgröße', undefined],
  },

  // Nachtrag 2.8.2026: 21 Produkte, die nach der ersten Fassung dieser Datei in
  // den Katalog kamen (Arabia/Fiskars, die Saunareihe von Rento und Emendo und
  // die Süßwaren). Sie stehen hier am Ende statt an ihrer Stelle in
  // `products.ts`, weil der Schlüssel der Slug ist und die Reihenfolge im
  // Objekt nichts bestimmt. Nur `specs` ist positionsgebunden.
  'arabia-moomin-mug-snufkin': {
    name: 'Arabia Mumin-Becher, Snufkin',
    description:
      'Arabia druckt die Zeichnungen von Tove Jansson seit 1990 auf diese Becher, und Sammler verfolgen die eingestellten Motive nach Jahrgang. Snufkin ist der, der im Herbst geht und im Frühling zurückkommt.',
    specs: ['0,3 l', 'Tove Jansson'],
    specLabels: [undefined, 'Illustration'],
  },
  'arabia-moomin-mug-friendship': {
    name: 'Arabia Mumin-Becher, Friendship',
    description:
      'Der Becher zeigt Ninny, das unsichtbare Kind, das sich vor der Dunkelheit fürchtet und langsam wieder sichtbar wird, sobald jemand freundlich zu ihr ist. Eine leisere Wahl als die bekannten Figuren.',
    specs: ['0,3 l', 'Tove Jansson'],
    specLabels: [undefined, 'Illustration'],
  },
  'arabia-moomin-figurine-moomintroll': {
    name: 'Arabia Mumin-Minifigur, Mumintroll',
    description:
      'Eine handgefertigte Keramikfigur, in den 1990er Jahren von Tuulikki Pietilä entworfen und in einer eigenen Schachtel verkauft. Klein genug, um in einer Manteltasche nach Hause zu reisen.',
    specs: ['Tuulikki Pietilä, 1990er Jahre', 'Handgefertigte Keramik, in einer eigenen Schachtel verkauft'],
    specLabels: ['Design', 'Herstellung'],
  },
  'fiskars-moominpappa-scissors': {
    name: 'Fiskars Muminpapa Universalschere',
    description:
      'Fiskars-Scheren mit orangefarbenem Griff liegen in mehr finnischen Küchenschubladen als jedes andere Werkzeug. Diese hier misst 21 cm, ist aus Edelstahl und trägt Muminpapa auf dem Griff.',
    specs: ['21 cm', 'Edelstahl'],
  },
  'rento-tar-sauna-soap': {
    name: 'Rento Teer-Saunaseife 150 g',
    description:
      'Kiefernteer ist ein finnischer Geruch, bevor er ein finnischer Geschmack ist, und er gehört in die Sauna mehr als irgendwohin sonst. Auf Pflanzenölbasis, an einer Juteschnur aufgehängt, damit sie zwischen zwei Saunagängen trocknet.',
    specs: ['150 g', 'Seife auf Pflanzenölbasis'],
  },
  'rento-birch-sauna-honey': {
    name: 'Rento Birken-Saunahonig 150 ml',
    description:
      'Auf die saubere Haut auftragen, in der milden Wärme einwirken lassen, warm abspülen. Saunahonig ist der Teil des finnischen Saunarituals, an den Besucher nie denken, wenn sie etwas mitnehmen.',
    specs: ['150 ml'],
  },
  'rento-blueberry-sauna-honey': {
    name: 'Rento Blaubeer-Saunahonig 150 ml',
    description:
      'Die Variante mit Peelingwirkung, mit Blaubeerduft. Gleiche Anwendung wie beim Birkenhonig: auf die saubere Haut, die Wärme arbeiten lassen, warm abspülen.',
    specs: ['150 ml'],
  },
  'rento-sauna-pillow': {
    name: 'Rento Pino Saunakissen 50 x 22 cm',
    description:
      'Ein jacquardgewebtes Kissen für Kopf und Nacken auf der Saunabank. Es behält seine Form, und genau das ist der ganze Unterschied zwischen einem Saunakissen und einem zusammengelegten Handtuch.',
    specs: ['50 x 22 cm', 'Schwarz'],
  },
  'rento-linen-back-scrubber': {
    name: 'Rento Rückenschrubber aus Leinenfrottee 14 x 70 cm',
    description:
      'Leinenfrottee, lang genug, um über den eigenen Rücken zu reichen. Die Haut wird erst in der Wärme weich und danach gewaschen, und in dieser Reihenfolge machen es Finnen, ohne darüber nachzudenken.',
    specs: ['14 x 70 cm', 'Leinenfrottee'],
  },
  'rento-linen-wash-mitt': {
    name: 'Rento Waschhandschuh aus Leinenfrottee 14 x 24 cm',
    description:
      'Dasselbe Leinenfrottee wie beim Rückenschrubber, als Handschuh mit doppelter Handfläche. Das günstigste Stück in diesem Abschnitt und das, was tatsächlich jede Woche benutzt wird.',
    specs: ['14 x 24 cm', 'Leinenfrottee, doppelte Handfläche'],
  },
  'emendo-sauna-scents': {
    name: 'Emendo Saunadüfte: Salmiak, Kiefernharz, Sisu, 3 x 10 ml',
    description:
      'Drei Düfte auf einem Holzständer, und einer davon ist Salmiak. Viel finnischer als Salmiak und Sauna wird es nicht, und dieses Set bringt beides in dieselbe Kelle.',
    specs: ['3 x 10 ml auf einem Holzständer', 'Salmiak, Kiefernharz, Sisu'],
    specLabels: [undefined, 'Düfte'],
  },
  'aurora-mini-kuksa': {
    name: 'Mini-Kuksa mit Lederschlaufe, 4 cm',
    description:
      'Eine Kuksa von 4 cm, gedacht für einen Schnaps statt für Kaffee, mit einer Lederschlaufe für den Gürtel. Die kleinste und günstigste Art, diese Form zu besitzen.',
    specs: ['Durchmesser 4 cm'],
  },
  'fazer-super-salmiakki': {
    name: 'Fazer Super Salmiakki Pastillen 80 g',
    description:
      'Der härteste der Salmiak-Klassiker, seit den 1970er Jahren in derselben dosenförmigen Schachtel verkauft. Geben Sie einem Gast eine davon, und Sie wissen binnen zehn Sekunden, in welches Lager er gehört.',
    specs: ['80 g'],
  },
  'fazer-pantteri-salmiakki': {
    name: 'Fazer Pantteri Salmiakbonbons 210 g',
    description:
      'Weicher Mentholsalmiak, der seit über fünfzig Jahren hergestellt wird. Milder als die Pastillen, also die Tüte für Leute, die Salmiak noch nie probiert haben.',
    specs: ['210 g'],
  },
  'halva-salmiakkiruutu': {
    name: 'Halva Salmiakkiruutu 170 g',
    description:
      'Halva stellt diesen quadratischen Salmiak seit 1960 in Pitäjänmäki in Helsinki her. Zäher als die Fazer-Varianten und der, von dem Finnen behaupten, er sei das Original.',
    specs: ['170 g', 'Seit 1960 in Pitäjänmäki, Helsinki, hergestellt'],
  },
  'sisu-xylitol-salmiakki': {
    name: 'Sisu Xylitol Salmiakpastillen 36 g',
    description:
      'Salmiak, mit Xylit gesüßt und mit dem Zeichen des finnischen Zahnärzteverbands. Die Dose passt in eine Manteltasche, weshalb sie in jedem finnischen Auto liegt.',
    specs: ['36 g', 'Xylit. Trägt das Zeichen des finnischen Zahnärzteverbands'],
    specLabels: [undefined, 'Süßungsmittel'],
  },
  'leijona-tar-liquorice': {
    name: 'Leijona Teerlakritzpastillen 32 g',
    description:
      'Lakritz mit Kiefernteer, seit 1933 hergestellt. Teer ist ein finnischer Geschmack, der in Süßigkeiten, Saunaseife und sogar Eis landet, und das hier ist die günstigste Art, ihn zu probieren.',
    specs: ['32 g'],
  },
  'fazer-hazelnut-chocolate': {
    name: 'Karl Fazer Vollmilchschokolade mit ganzen Haselnüssen 200 g',
    description:
      'Die blaue Tafel mit ganzen Haselnüssen in Milchschokolade. Fazer verwendet seit 1922 dasselbe blaue Papier, und deshalb ist sie die Tafel, die Finnen ins Ausland mitnehmen.',
    specs: ['200 g'],
  },
  'fazer-light-milk-chocolate': {
    name: 'Karl Fazer helle Milchschokolade 180 g',
    description:
      'Eine hellere, mildere Fassung der blauen Tafel. Wenn Ihnen die klassische zu süß ist, nehmen Sie diese.',
    specs: ['180 g'],
  },
  'fazer-fazerina': {
    name: 'Fazer Fazerina Orangentrüffeltafel 99 g',
    description:
      'Orangentrüffel in Milchschokolade, seit 1953 hergestellt. Dünner als die blaue Tafel und die, die einen Rucksack übersteht, ohne zu einem Klumpen zu schmelzen.',
    specs: ['99 g'],
  },
  'fazer-jaffa-orange': {
    name: 'Fazer Jaffa Orangenküchlein 300 g',
    description:
      'Biskuitboden, Orangenmarmelade und dunkle Schokolade obendrauf. Kein Keks und kein Kuchen, und genau darüber streiten Finnen jedes einzelne Mal.',
    specs: ['300 g'],
  },
  'husky-farm-safari-rovaniemi': {
    name: 'Huskyfarm-Besuch und Huskysafari für zwei, Rovaniemi',
    description:
      'Eine Geschenkkarte für einen geführten Besuch auf einer echten Huskyfarm bei Rovaniemi, gefolgt von einer Schlittenfahrt hinter den Hunden durch den Winterwald. Jetzt gekauft, per E-Mail zugestellt, das Datum wählt die beschenkte Person selbst.',
    specs: [
      'Geführter Huskyfarm-Besuch und eine Huskysafari für zwei. Der Guide kann Sie im Umkreis von 10 km um Rovaniemi abholen',
      'Etwa 3,5 h',
      '2 Personen',
      'Rovaniemi. Der genaue Ort wird bei der Buchung bestätigt',
      'Wintermonate, November bis April',
      'Englisch',
      'Gültig 3 Jahre',
    ],
    specLabels: [undefined, 'Dauer', 'Teilnehmer', 'Ort', 'Saison', 'Sprache der Führung', 'Geschenkkarte'],
  },
  'reindeer-safari-rovaniemi': {
    name: 'Rentiersafari für zwei, Rovaniemi',
    description:
      'Eine abendliche Rentiersafari auf einer echten Farm bei Rovaniemi: eine Runde von 2,5 km hinter den Rentieren, ein Besuch auf der Farm und ein kleiner Imbiss. In klaren Nächten können sich Nordlichter zeigen, versprechen kann das niemand.',
    specs: [
      'Eintritt zu einer Rentierfarm und eine 2,5 km lange Fahrt im Rentierschlitten für zwei, mit kleinem Imbiss. Abholung im Umkreis von 10 km um Rovaniemi',
      '2,5 bis 3 Stunden',
      '2 Personen',
      'Rovaniemi. Der genaue Ort wird bei der Buchung bestätigt',
      'Wintermonate, Dezember bis März. Die Safari findet am Abend statt',
      'Englisch',
      'Gültig 3 Jahre',
    ],
    specLabels: [undefined, 'Dauer', 'Teilnehmer', 'Ort', 'Saison', 'Sprache der Führung', 'Geschenkkarte'],
  },
  'aurora-tour-kilpisjarvi': {
    name: 'Nordlicht-Tour mit dem Schneemobil für zwei, Kilpisjärvi',
    description:
      'Kilpisjärvi ist für seinen außergewöhnlich klaren Nachthimmel bekannt. Eine kurze Schneemobilfahrt bringt Sie zu zweit an einen Ort, an dem sich die Nordlichter in völliger Stille beobachten lassen, mit warmen Getränken gegen die Kälte. Abends von 20.00 bis 23.00 Uhr, mit Wettervorbehalt.',
    specs: [
      'Geführte Nordlicht-Tour für zwei, etwa 15 km mit dem Schneemobil, warme Getränke inklusive',
      '3 Stunden, von 20.00 bis 23.00 Uhr',
      '2 Personen',
      'Kilpisjärvi',
      '18 Jahre zum Fahren, 8 Jahre im Schlitten',
      'Gültig 3 Jahre',
    ],
    specLabels: [undefined, 'Dauer', 'Teilnehmer', 'Ort', 'Altersgrenze', 'Geschenkkarte'],
  },
  'glass-igloo-night-levi': {
    name: 'Glasiglu-Nacht für zwei, Levi',
    description:
      'Eine Nacht zu zweit in einem warmen Glasiglu hoch am Fjell von Levi. Das elektrisch beheizte Glas bleibt klar, während Sie vom motorisierten Doppelbett aus nach Nordlichtern schauen. Begrüßungsgetränk, Bademäntel und Frühstück inklusive, mit eigener Kochnische, Dusche und WC.',
    specs: [
      'Eine Nacht für zwei im Glasiglu der Superior-Klasse, Begrüßungsgetränk, Bademäntel und Hausschuhe, Frühstück. Transport nicht inbegriffen',
      '1 Nacht, Check-out um 11.00 Uhr',
      '2 Personen',
      'Levi, hoch am Fjell',
      '23 m², beheiztes beschlagfreies Glas, Kochnische, Dusche und WC, motorisiertes Doppelbett',
      'Gültig für Aufenthalte 27.08-10.11 und 01.04-12.04',
    ],
    specLabels: [undefined, 'Dauer', 'Teilnehmer', 'Ort', 'Iglu', 'Geschenkkarte'],
  },
  'gold-panning-day-inari': {
    name: 'Goldgräbertag für vier, Inari',
    description:
      'Ein Tag auf einem aktiven Goldclaim in Inari für eine Gruppe von vier: zuerst die Geschichte, dann das Waschen von Hand und ein Blick auf den maschinellen Abbau. Mahlzeiten und Transport ab dem Zentrum von Saariselkä sind inklusive, und gefundenes Gold nimmt die Gruppe mit nach Hause.',
    specs: [
      'Ein Goldgräbertag von 5 Stunden auf einem aktiven Claim für vier, mit Anleitung zum Goldwaschen von Hand und Einblick in den maschinellen Abbau. Mahlzeiten, Ausrüstung und Transport vom Zentrum von Saariselkä zum Claim und zurück sind inklusive',
      '5 Stunden',
      '4 Personen',
      'Inari',
      'Frühjahrs- und Sommersaison',
      'Gültig 3 Jahre',
    ],
    specLabels: [undefined, 'Dauer', 'Teilnehmer', 'Ort', 'Saison', 'Geschenkkarte'],
  },
  'foodin-six-mushroom-blend': {
    name: 'Foodin Sechs-Pilze-Mischung 100 g',
    description:
      'Chaga, Reishi, Igelstachelbart, Cordyceps, Shiitake und Maitake in einem Glas, gemahlen für Kaffee oder Smoothies. Ein Glas deckt das ganze Vitalpilzregal ab.',
    specs: ['100 g', 'Chaga, Reishi, Igelstachelbart, Cordyceps, Shiitake, Maitake'],
  },
  'foodin-nordic-berry-powder': {
    name: 'Foodin Nordische Beeren Pulvermischung 120 g',
    description:
      'Eine finnische Mischung nordischer Beeren als ein Pulver, für Porridge und Joghurt. Die leichteste Art, einen nordischen Beerensommer mit nach Hause zu nehmen.',
    specs: ['120 g', 'Hergestellt in Finnland'],
  },
  'foodin-chaga-tincture': {
    name: 'Foodin Chaga-Tinktur 50 ml',
    description:
      'Finnischer Chaga als Tropfen statt Pulver: eine 50-ml-Flasche, die kein Aufbrühen braucht. Die Reisegröße der ganzen Chaga-Idee.',
    specs: ['50 ml', 'Finnischer Chaga'],
  },
  'kaavi-chaga-chunks': {
    name: 'Kaavi Porcini Chaga-Stücke 100 g',
    description:
      'Grobe Stücke finnischen Birken-Chagas zum langsamen Aufbrühen, so wie er hier lange vor dem Wort Superfood getrunken wurde. Ein Beutel reicht für viele Kannen.',
    specs: ['100 g', 'Als langsam gebrühter Tee köcheln'],
    specLabels: [undefined, 'Verwendung'],
  },
  'puhdistamo-instant-chaga': {
    name: 'Puhdistamo Instant-Chaga-Extraktpulver 28 g',
    description:
      'Chaga, der sich direkt in heißem Wasser löst, ohne Köcheln. Das 28-Gramm-Glas passt in jedes Gepäck und übersteht die Reise besser als ein Beutel Stücke.',
    specs: ['28 g'],
  },
  'puhdistamo-conifer-extract': {
    name: 'Puhdistamo Nadelbaum-Extrakt 50 ml',
    description:
      'Ein aus finnischen Nadelbäumen gewonnener Extrakt in Tropfenform. Der Waldgeruch einer Lappland-Wanderung in einer Flasche für die Manteltasche.',
    specs: ['50 ml'],
  },
  'nb-little-my-beanie': {
    name: 'Kleine My Grobstrickmütze',
    description:
      'Dicke Strickmütze mit der Kleinen My am Umschlag, aus einer Wollmischung, die auch nach einer Woche ständigen Auf- und Absetzens ihre Form hält. Eine Erwachsenengröße, und die einzige Muminfigur, die das Wetter in Lappland gutheißen würde.',
    specs: [
      'Acryl, Nylon und Wolle',
      'Erwachsene, Einheitsgröße',
      'Offizielles Mumin-Produkt',
    ],
    specLabels: [undefined, undefined, 'Lizenz'],
  },
  'nb-moomintroll-mittens': {
    name: 'Mumintroll Fäustlinge',
    description:
      'Gestrickte Fäustlinge mit weichem Fleecefutter, 24 Zentimeter hoch, damit der Schaft über den Jackenärmel reicht. Erwachsenengröße und günstig genug, dass der Verlust eines Handschuhs auf dem Husky-Schlitten zu verkraften ist.',
    specs: [
      '100 % Acryl, Fleecefutter',
      'Erwachsene, Höhe 24 cm, Breite über dem Daumen 9,5 cm',
      'Offizielles Mumin-Produkt',
    ],
    specLabels: [undefined, undefined, 'Lizenz'],
  },
  'nb-moomintroll-love-socks': {
    name: 'Mumintroll Love Retrosocken',
    description:
      'Weiße Rippsocken mit Mumintroll, in ein rosa Herz am Schienbein gestickt statt aufgedruckt, deshalb übersteht das Motiv die Wäsche. Eine Größe deckt EU 36 bis 42 ab.',
    specs: [
      '67 % Baumwolle, 25 % Polyester, 4 % Elastodien, 3 % Nylon, 1 % Elasthan',
      'Einheitsgröße, EU 36-42',
      'Gesticktes Motiv',
    ],
    specLabels: [undefined, undefined, 'Detail'],
  },
  'nb-moomin-classics-tee': {
    name: 'Moomin Classics schweres T-Shirt',
    description:
      'Ein 260 Gramm schweres Baumwoll-T-Shirt in Lavendel, kastiger Schnitt, mit einem kleinen gestickten Mumintroll auf der Brust statt eines großen Drucks. Schwer genug, um gerade zu fallen statt anzuliegen.',
    specs: [
      '100 % Baumwolle, 260 g/m2',
      'Unisex, kastiger Schnitt, XS bis XXL',
      'Kastiger Schnitt, der Shop empfiehlt eine Nummer kleiner',
    ],
    specLabels: [undefined, undefined, 'Größenhinweis'],
  },
  'nb-pippi-tee': {
    name: 'Pippi Langstrumpf T-Shirt',
    description:
      'Pippi, in Finnland gedruckt auf ein 240 Gramm schweres Baumwoll-T-Shirt, Unisex mit geradem Schnitt und längerem Saum als üblich. Astrid Lindgren reist in manchen Haushalten weiter als die Mumins.',
    specs: [
      '100 % Baumwolle, 240 g/m2',
      'Unisex, gerader Schnitt, M bis XXL',
      'Gedruckt in Finnland',
    ],
  },
  'nb-moomintroll-hoodie': {
    name: 'Mumintroll Hoodie',
    description:
      'Ein 300 Gramm schwerer Hoodie aus Baumwolle und Polyester, in Finnland gedruckt, Unisex mit geradem Schnitt. Genau die Schicht, in der man an einem Hüttenabend lebt, sobald die Sauna abgekühlt ist.',
    specs: [
      '65 % Baumwolle, 35 % Polyester, 300 g/m2',
      'Unisex, gerader Schnitt, XS bis XXL',
      'Gedruckt in Finnland',
    ],
  },
  'nb-kunnas-kalevala-tote': {
    name: 'Mauri Kunnas Hunde-Kalevala Stofftasche',
    description:
      'Eine Baumwolltasche mit Illustrationen von Mauri Kunnas aus der Hunde-Kalevala, seiner Hundefassung des finnischen Nationalepos. Das günstigste Stück in diesem Shop, das trotzdem ein ganzes Land erklärt.',
    specs: [
      '100 % Baumwolle',
      '38 x 42 cm',
      'Offizielles Mauri-Kunnas-Produkt',
    ],
    specLabels: [undefined, undefined, 'Lizenz'],
  },
  'sk-marimekko-unikko-crossbody': {
    name: 'Marimekko Neat Crossbody Unikko Umhängetasche',
    description:
      'Die Unikko-Mohnblume auf einer Umhängetasche in der Größe für Telefon, Geldbörse und ein Paar Handschuhe. Unikko entstand 1964, nachdem Armi Ratia Blumenmuster verboten hatte, und hat das Verbot um sechzig Jahre überlebt.',
    specs: [
      'Neat Crossbody, Größe M',
      'Unikko, blau und dunkelblau',
    ],
    specLabels: ['Modell', 'Muster'],
  },
  'sk-moomin-duvet-set': {
    name: 'Mumin Bettwäscheset 150 x 210 cm, Sydankapyset',
    description:
      'GOTS-zertifiziertes Bettwäscheset aus Baumwolle mit Mumintroll und Snorkfräulein. Der finnische Mustername Sydankapyset beschreibt das Verhältnis, das das Muster zeigt.',
    specs: [
      'Bettbezug 150 x 210 cm',
      'GOTS, der Global Organic Textile Standard',
    ],
    specLabels: [undefined, 'Zertifizierung'],
  },
  'sk-novita-wonder-wool': {
    name: 'Novita Wonder Wool DK Garn 50 g',
    description:
      'Reines Wollgarn in DK-Stärke von Novita, der Spinnerei, die finnische Strickerinnen seit 1928 versorgt. Ein Knäuel mit 50 Gramm enthält 112 Meter, empfohlene Nadelstärke 4 mm.',
    specs: [
      '100 % Wolle',
      '50 g Knäuel, 112 m',
      '4 mm',
    ],
    specLabels: [undefined, undefined, 'Nadelstärke'],
  },
  'sk-aromageddon-sauna-scent': {
    name: 'Aromageddon Saunaduft Hankihorppy 15 ml',
    description:
      'Minze und Kakao als Saunaduft, was falsch klingt, bis man einen finnischen Winter durchgesessen hat. Zwei bis vier Tropfen kommen in eine Kelle Wasser, nicht auf die Steine.',
    specs: [
      '15 ml',
      '2 bis 4 Tropfen in eine Kelle Wasser',
    ],
    specLabels: [undefined, 'Anwendung'],
  },
  'sk-muurla-moomin-bottle': {
    name: 'Muurla Mumin-Glasflasche 1 l, Äpfel',
    description:
      'Eine Flasche aus Sodaglas mit Bügelverschluss, für Wasser oder Saft auf dem Tisch statt einer Packung. Spülmaschinenfest, ein Liter, und das Apfelmuster ist das sommerliche.',
    specs: [
      '1 l',
      'Sodaglas, Bügelverschluss',
      'Spülmaschinenfest',
    ],
    specLabels: [undefined, undefined, 'Pflege'],
  },
  'nb-kunnas-kalevala-beanie': {
    name: 'Mütze „Kalevala der Hunde“',
    description:
      'Mauri Kunnas machte das Kalevala 1992 zu einem Hundeepos, und die Mütze trägt genau diese Zeichnung. Recyceltes Polyester, eine Erwachsenengröße, und leicht genug, um sie in die Manteltasche zu stopfen, sobald der Bus warm wird.',
    specs: [
      '100 % recyceltes Polyester',
      'Erwachsene, Einheitsgröße',
      'Mauri Kunnas, Kalevala der Hunde',
    ],
    specLabels: [undefined, undefined, 'Illustration'],
  },
  'nb-little-my-mittens': {
    name: 'Kleine My Fäustlinge',
    description:
      'Das weinrote Gegenstück zu den Mumintroll-Fäustlingen, gleiches Fleecefutter und gleicher Preis. Der Schaft ist zwei Zentimeter kürzer, und die Figur passt zu allen, denen Mumintroll etwas zu verträglich ist.',
    specs: [
      '100 % Acryl, Fleecefutter',
      'Erwachsene, Höhe 22 cm, Breite über dem Daumen 9,5 cm',
      'Offizielles Mumin-Produkt',
    ],
    specLabels: [undefined, undefined, 'Lizenz'],
  },
  'nb-kunnas-santa-mug': {
    name: 'Weihnachtsmann-Coffee-to-go-Becher',
    description:
      'Kunnas zeichnete den Weihnachtsmann vom Korvatunturi so, wie finnische Kinder ihn sich vorstellen, und hier sitzt er auf einem 450-ml-Becher aus PLA statt aus fossilem Kunststoff. Die Silikonmanschette ist das, woran man sich festhält, wenn der Kaffee zu heiß für die bloße Hand ist.',
    specs: [
      '450 ml',
      'Becher und Deckel aus PLA, Manschette aus lebensmittelechtem Silikon',
      'Mauri Kunnas',
    ],
    specLabels: [undefined, undefined, 'Illustration'],
  },
  'nb-little-my-thermal-bottle': {
    name: 'Kleine My Thermosflasche 0,55 l',
    description:
      'Doppelwandiger Stahl, 550 Milliliter, und der Hersteller gibt sechs Stunden Warmhaltezeit an. Das entspricht etwa einer Schneemobil-Safari, also genau dem Praxistest, für den diese Flasche gekauft wird.',
    specs: [
      '550 ml',
      'Edelstahl, PP-Deckel, Silikondichtung',
      'Laut Hersteller sechs Stunden',
    ],
    specLabels: [undefined, undefined, 'Hält warm'],
  },
  'nb-little-my-neckpillow': {
    name: 'Kleine My Nackenkissen',
    description:
      'Memory-Schaum unter einem weichen Bezug, für den Nachtzug Helsinki–Rovaniemi oder den Rückflug. Klein genug, um es an die Tasche zu clippen, und das ist die einzige Art Reisekissen, die man tatsächlich behält.',
    specs: [
      'Memory-Schaum, weicher Bezug',
      'Offizielles Mumin-Produkt',
    ],
    specLabels: [undefined, 'Lizenz'],
  },
  'nb-moomintroll-love-cushion': {
    name: 'Mumintroll Love Kissen',
    description:
      'Ein Kissen in Mumintroll-Form statt eines Quadrats mit Aufdruck, in mehreren Größen von 45 bis 75 Zentimetern Höhe. Die Sorte Ding, die auf dem Sofa der Hütte landet und dort bleibt.',
    specs: [
      'Polyester',
      'Mehrere Größen, Höhe 45–75 cm',
      'Offizielles Mumin-Produkt',
    ],
    specLabels: [undefined, undefined, 'Lizenz'],
  },
  'nb-little-my-poster': {
    name: 'Kleine My Poster',
    description:
      'In Helsinki gestaltet und auf 200-Gramm-Seidenpapier gedruckt, in 30 × 40 oder 50 × 70. Ein Poster rollt sich in eine Hülse und wiegt nichts, mehr als man von den meisten Dingen sagen kann, die Leute aus Lappland mit nach Hause schleppen.',
    specs: [
      'Seidenpapier, 200 g',
      '30 × 40 cm oder 50 × 70 cm',
      'In Helsinki gestaltet und gedruckt',
    ],
    specLabels: [undefined, undefined, 'Herstellung'],
  },
  'nb-moomin-novels-poster': {
    name: 'Poster der Mumin-Romane',
    description:
      'Die Buchcover von Tove Janssons Mumin-Romanen auf einem Blatt, gleicher Druck aus Helsinki und dieselben zwei Größen wie die Figurenposter. Für die Leserin in der Familie, nicht für den Becher-Sammler.',
    specs: [
      'Seidenpapier, 200 g',
      '30 × 40 cm oder 50 × 70 cm',
      'In Helsinki gestaltet und gedruckt',
    ],
    specLabels: [undefined, undefined, 'Herstellung'],
  },
  'sk-finland-beanie': {
    name: 'Finnland-Bommelmütze, blau-weiß',
    description:
      'Die blau-weiße Bommelmütze mit FINLAND auf dem Bund, getragen auf der Tribüne und danach den restlichen Winter. Maschinenwäsche bei 30.',
    specs: [
      'FINLAND',
      'Maschinenwäsche 30 °C',
    ],
    specLabels: ['Schriftzug', 'Pflege'],
  },
  'sk-finland-tube-scarf': {
    name: 'Finnland-Schlauchschal',
    description:
      'Ein nahtloser Schlauch im Muster der finnischen Flagge, den man über das Gesicht zieht, wenn der Wind vom Fjell kommt. Unter sieben Euro, weshalb die Leute gleich drei nehmen.',
    specs: [
      'Finnische Flagge',
      'Handwäsche',
    ],
    specLabels: ['Muster', 'Pflege'],
  },
  'sk-little-my-sauna-cushion': {
    name: 'Emendo Saunakissen Kleine My',
    description:
      'Ein Saunasitzkissen nach Tove Janssons Originalzeichnungen, in Lizenz von Emendo gefertigt. Das, was zwischen einem selbst und einer neunzig Grad heißen Bank liegt.',
    specs: [
      'Nach Tove Janssons Originalzeichnungen',
      'Offizielles Moomin-Characters-Lizenzprodukt',
    ],
    specLabels: ['Illustration', 'Lizenz'],
  },
  'sk-rento-sauna-hat': {
    name: 'Rento Saunahut aus Leinenfrottee',
    description:
      'Leinenfrottee hält die Hitze auf der oberen Bank von Kopfhaut und Haar fern. Es funktioniert auch umgekehrt: im Außen-Hotpot im Februar hält er den Kopf warm. Maschinenwäsche bei 60.',
    specs: [
      'Leinenfrottee',
      'Maschinenwäsche 60 °C',
    ],
    specLabels: [undefined, 'Pflege'],
  },
  'sk-rento-birch-whisk': {
    name: 'Rento getrockneter Birkenquast',
    description:
      'Ein getrockneter Birkenquast, vor der Sauna in warmem Wasser eingeweicht, damit Blätter und Duft zurückkommen. Das Quasten ist der Teil der Sauna, nach dem Gäste immer fragen und den sie selten ausprobieren.',
    specs: [
      'Getrocknete Birke',
      'Vor der Sauna einweichen',
    ],
    specLabels: [undefined, 'Vor dem Gebrauch'],
  },
  'sk-suomi-hockey-jersey': {
    name: 'Finnland-Fantrikot',
    description:
      'Das blau-weiße Fantrikot mit SUOMI auf der Brust und dem Löwenwappen, im Schnitt, den man tatsächlich zum Spiel anzieht. Atmungsaktiv, Größen M bis XXL, und bis Februar scheint es in jedem finnischen Haushalt eines davon zu geben.',
    specs: [
      'M–XXL',
      'SUOMI und das Löwenwappen',
    ],
    specLabels: [undefined, 'Aufdruck'],
  },
  'sk-marimekko-unikko-bath-towel': {
    name: 'Marimekko Unikko Badetuch 70 × 150 cm',
    description:
      'Unikko auf Frottee-Baumwolle, beige und weiß, im vollen Format 70 mal 150. Das Garn besteht zu 65 % aus Bio-Baumwolle und zu 35 % aus recycelter, wobei der recycelte Anteil aus Marimekkos eigenen Zuschnittresten stammt.',
    specs: [
      '70 × 150 cm',
      'Frottee-Baumwolle, 65 % bio und 35 % recycelt',
      'Unikko, beige und weiß',
    ],
    specLabels: [undefined, undefined, 'Muster'],
  },
  'sk-marimekko-unikko-hand-towel': {
    name: 'Marimekko Unikko Handtuch 50 × 70 cm',
    description:
      'Dasselbe Unikko-Frottee in Handtuchgröße, halb so teuer wie das Badetuch und deutlich leichter im Koffer unterzubringen. Beige und weiß, 65 % Bio-Baumwolle und 35 % recycelt.',
    specs: [
      '50 × 70 cm',
      'Frottee-Baumwolle, 65 % bio und 35 % recycelt',
      'Unikko, beige und weiß',
    ],
    specLabels: [undefined, undefined, 'Muster'],
  },
}
