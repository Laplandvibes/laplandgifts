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
    name: 'Nordqvist Moomin Waldbeeren-Hibiskustee, 20 Beutel',
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
      'Vegan. Hibiskus und Rooibos sind Rainforest-Alliance-zertifiziert',
    ],
    specLabels: [undefined, 'Zubereitung', 'Ernährung und Zertifizierung'],
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
      '40 g',
      'Gefriergetrocknete Fichtenspitzen',
      '382 mg pro 100 g',
    ],
    specLabels: [undefined, undefined, 'Vitamin C'],
  },
  'arctic-warriors-nettle-powder': {
    name: 'Arctic Warriors Brennnesselpulver 150 g',
    description:
      'Brennnessel von Bio-Höfen in Lappland, gefriergetrocknet zu einem Pulver, das neutral genug ist, um es in Suppe oder Brot zu rühren, ohne dem übrigen Gericht zu widersprechen.',
    specs: [
      '150 g, brutto 0,162 kg',
      '4 x 16 x 23 cm',
      'Gefriergetrocknete Brennnessel',
      'Finnland, angebaut auf Bio-Höfen in Lappland',
      '1 bis 5 Teelöffel täglich',
      'Energie 1484 kJ / 354 kcal, Eiweiß 23,6 g, Kohlenhydrate 56 g, Fett 3,44 g, Salz unter 5 mg. Vitamin A 1900 µg',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Dosierung', 'Nährwerte je 100 g'],
  },
  'arctic-warriors-roseroot-elixir': {
    name: 'Arctic Warriors Rosenwurz-Elixier 100 ml',
    description:
      'Rosenwurz wächst an den feuchten Bachufern und Felswänden der lappländischen Fjells, und Arctic Warriors extrahiert sie zusammen mit Brennnessel in pflanzliches Glycerin. Ein Teelöffel kommt in Tee, Porridge oder Joghurt.',
    specs: [
      '100 ml',
      'Rosenwurz und Brennnessel',
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
      'Zwei Paar, weil das Paar von heute Morgen noch nicht trocken ist. Merinomischung statt reiner Wolle, was wiederholte Maschinenwäsche besser übersteht.',
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
    name: 'Arabia Moomin-Becher, Snufkin',
    description:
      'Arabia druckt die Zeichnungen von Tove Jansson seit 1990 auf diese Becher, und Sammler verfolgen die eingestellten Motive nach Jahrgang. Snufkin ist der, der im Herbst geht und im Frühling zurückkommt.',
    specs: ['0,3 l', 'Tove Jansson'],
    specLabels: [undefined, 'Illustration'],
  },
  'arabia-moomin-mug-friendship': {
    name: 'Arabia Moomin-Becher, Friendship',
    description:
      'Der Becher zeigt Ninny, das unsichtbare Kind, das sich vor der Dunkelheit fürchtet und langsam wieder sichtbar wird, sobald jemand freundlich zu ihr ist. Eine leisere Wahl als die bekannten Figuren.',
    specs: ['0,3 l', 'Tove Jansson'],
    specLabels: [undefined, 'Illustration'],
  },
  'arabia-moomin-figurine-moomintroll': {
    name: 'Arabia Moomin-Minifigur, Moomintroll',
    description:
      'Eine handgefertigte Keramikfigur, in den 1990er Jahren von Tuulikki Pietilä entworfen und in einer eigenen Schachtel verkauft. Klein genug, um in einer Manteltasche nach Hause zu reisen.',
    specs: ['Tuulikki Pietilä, 1990er Jahre', 'Handgefertigte Keramik, in einer eigenen Schachtel verkauft'],
    specLabels: ['Design', 'Herstellung'],
  },
  'fiskars-moominpappa-scissors': {
    name: 'Fiskars Moominpapa Universalschere',
    description:
      'Fiskars-Scheren mit orangefarbenem Griff liegen in mehr finnischen Küchenschubladen als jedes andere Werkzeug. Diese hier misst 21 cm, ist aus Edelstahl und trägt Moominpapa auf dem Griff.',
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
    name: 'Polarlicht-Tour mit dem Schneemobil für zwei, Kilpisjärvi',
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
    name: 'Glas-Iglu-Nacht für zwei, Levi',
    description:
      'Eine Nacht zu zweit in einem warmen Glasiglu hoch am Fjell von Levi. Das elektrisch beheizte Glas bleibt klar, während Sie vom motorisierten Doppelbett aus nach Nordlichtern schauen. Begrüßungsgetränk, Bademäntel und Frühstück inklusive, mit eigener Kochnische, Dusche und WC.',
    specs: [
      'Eine Nacht für zwei im Glasiglu der Superior-Klasse, Begrüßungsgetränk, Bademäntel und Hausschuhe, Frühstück. Transport nicht inbegriffen',
      '1 Nacht, Check-out um 11.00 Uhr',
      '2 Personen',
      'Levi, hoch am Fjell',
      '23 m², beheiztes beschlagfreies Glas, Kochnische, Dusche und WC, motorisiertes Doppelbett',
      'Gültig für Aufenthalte 27.08.–10.11. und 01.04.–12.04.',
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
    name: 'Foodin Sechs-Pilze-Mischung 40 g',
    description:
      'Chaga, Reishi, Igelstachelbart, Cordyceps, Shiitake und Maitake in einem Glas, gemahlen für Kaffee oder Smoothies. Ein Glas deckt das ganze Vitalpilzregal ab.',
    specs: ['40 g', 'Chaga, Reishi, Igelstachelbart, Cordyceps, Shiitake, Maitake'],
  },
  'foodin-nordic-berry-powder': {
    name: 'Foodin Nordische Beerenpulvermischung 120 g',
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
      'Dicke Strickmütze mit der Kleinen My am Umschlag, aus einer Wollmischung, die auch nach einer Woche ständigen Auf- und Absetzens ihre Form hält. Eine Erwachsenengröße, und die einzige Moominfigur, die das Wetter in Lappland gutheißen würde.',
    specs: [
      'Acryl, Nylon und Wolle',
      'Erwachsene, Einheitsgröße',
      'Offizielles Moomin-Produkt',
    ],
    specLabels: [undefined, undefined, 'Lizenz'],
  },
  'nb-moomintroll-mittens': {
    name: 'Moomintroll Fäustlinge',
    description:
      'Gestrickte Fäustlinge mit weichem Fleecefutter, 24 Zentimeter hoch, damit der Schaft über den Jackenärmel reicht. Erwachsenengröße und günstig genug, dass der Verlust eines Handschuhs auf dem Husky-Schlitten zu verkraften ist.',
    specs: [
      '100 % Acryl, Fleecefutter',
      'Erwachsene, Höhe 24 cm, Breite über dem Daumen 9,5 cm',
      'Offizielles Moomin-Produkt',
    ],
    specLabels: [undefined, undefined, 'Lizenz'],
  },
  'nb-moomintroll-love-socks': {
    name: 'Moomintroll Love Retrosocken',
    description:
      'Hellblaue Rippsocken mit Moomintroll, in ein rosa Herz am Schienbein gestickt statt aufgedruckt, deshalb übersteht das Motiv die Wäsche. Eine Größe deckt EU 36 bis 42 ab.',
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
      'Ein 260 Gramm schweres Baumwoll-T-Shirt in Lavendel, kastiger Schnitt, mit einem kleinen gestickten Moomintroll auf der Brust statt eines großen Drucks. Schwer genug, um gerade zu fallen statt anzuliegen.',
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
      'Pippi, in Finnland gedruckt auf ein 240 Gramm schweres Baumwoll-T-Shirt, Unisex mit geradem Schnitt und längerem Saum als üblich. Astrid Lindgren reist in manchen Haushalten weiter als die Moomins.',
    specs: [
      '100 % Baumwolle, 240 g/m2',
      'Unisex, gerader Schnitt, M bis XXL',
      'Gedruckt in Finnland',
    ],
  },
  'nb-moomintroll-hoodie': {
    name: 'Moomintroll Hoodie',
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
    name: 'Moomin Bettwäscheset 150 x 210 cm, Sydänkäpyset',
    description:
      'GOTS-zertifiziertes Bettwäscheset aus Baumwolle mit Moomintroll und Snorkfräulein. Der finnische Mustername Sydänkäpyset beschreibt das Verhältnis, das das Muster zeigt.',
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
    name: 'Muurla Moomin-Glasflasche 1 l, Äpfel',
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
      'Das weinrote Gegenstück zu den Moomintroll-Fäustlingen, gleiches Fleecefutter und gleicher Preis. Der Schaft ist zwei Zentimeter kürzer, und die Figur passt zu allen, denen Moomintroll etwas zu verträglich ist.',
    specs: [
      '100 % Acryl, Fleecefutter',
      'Erwachsene, Höhe 22 cm, Breite über dem Daumen 9,5 cm',
      'Offizielles Moomin-Produkt',
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
      'Offizielles Moomin-Produkt',
    ],
    specLabels: [undefined, 'Lizenz'],
  },
  'nb-moomintroll-love-cushion': {
    name: 'Moomintroll Love Kissen',
    description:
      'Ein Kissen in Moomintroll-Form statt eines Quadrats mit Aufdruck, in mehreren Größen von 45 bis 75 Zentimetern Höhe. Die Sorte Ding, die auf dem Sofa der Hütte landet und dort bleibt.',
    specs: [
      'Polyester',
      'Mehrere Größen, Höhe 45–75 cm',
      'Offizielles Moomin-Produkt',
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
    name: 'Poster der Moomin-Romane',
    description:
      'Die Buchcover von Tove Janssons Moomin-Romanen auf einem Blatt, gleicher Druck aus Helsinki und dieselben zwei Größen wie die Figurenposter. Für die Leserin in der Familie, nicht für den Becher-Sammler.',
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
      'Die blau-weiße Bommelmütze mit FINLAND auf dem Bund, getragen auf der Tribüne und danach den restlichen Winter. Maschinenwäsche bei 30 Grad.',
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
      'Leinenfrottee hält die Hitze auf der oberen Bank von Kopfhaut und Haar fern. Es funktioniert auch umgekehrt: in einem Whirlpool im Freien hält er im Februar den Kopf warm. Maschinenwäsche bei 60 Grad.',
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
      'Unikko auf Frottee-Baumwolle, beige und weiß, im vollen Format 70 mal 150. Das Garn besteht zu 65 % aus Bio-Baumwolle und zu 35 % aus recycelter Baumwolle, wobei der recycelte Anteil aus Marimekkos eigenen Zuschnittresten stammt.',
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
  'fl-taistelevat-metsot': {
    name: 'Taistelevat metsot Satin-Bettwäsche-Set, Doppelbett',
    description:
      'Ferdinand von Wright malte die kämpfenden Auerhähne 1886, und daraus wurde eines der Gemälde, die jeder Finne benennen kann. Finlayson druckt es digital auf Satinbaumwolle, damit die Farben genau wiedergegeben werden. Die Rückseite des Bezugs ist einfarbig, bei den Kissenbezügen sitzt der Druck auf beiden Seiten.',
    specs: [
      'Satinbaumwolle',
      'Doppelbett',
      'Ferdinand von Wright, Taistelevat metsot (Kämpfende Auerhähne), 1886',
    ],
    specLabels: [undefined, undefined, 'Werk'],
  },
  'fl-lino-linen-duvet-set': {
    name: 'Lino Leinen-Bettwäsche-Set',
    description:
      'Gewaschenes Leinen mit besticktem Rand, in Flechtengrün oder Teerbraun. Leinen ist schwer und fällt steifer als Baumwolle, und es wird mit jeder Wäsche weicher, statt sich abzunutzen.',
    specs: [
      'Leinen',
      '240 × 210 + 50 × 60 cm oder 150 × 210 + 50 × 60 cm',
      'Flechtengrün oder Teerbraun',
    ],
    specLabels: [undefined, undefined, 'Farben'],
  },
  'fl-elefantti-duvet-set': {
    name: 'Elefantti Bettwäsche-Set, Dunkelgrün',
    description:
      'Laina Koskela zeichnete Elefantti 1969 für einen Designwettbewerb, den Finlayson zusammen mit der Kunstgewerbeschule veranstaltete, und seitdem ist das Muster in Produktion. Baumwollperkal mit 152 Fäden pro Zoll, deshalb fühlt es sich auf der Haut kühl an und nicht weich.',
    specs: [
      'Baumwollperkal, 152 TC',
      '240 × 210 + 50 × 60 cm',
      'Laina Koskela, 1969',
    ],
    specLabels: [undefined, undefined, 'Entwurf'],
  },
  'fl-reino-bath-towel': {
    name: 'Reino Badetuch 80 × 160 cm',
    description:
      'GOTS-zertifizierte Bio-Baumwolle, gewebt aus einem feinen Zwirn, damit es schnell trocknet und nicht feucht am Haken hängen bleibt. Volle Badetuchgröße, in Braun oder Pink.',
    specs: [
      '80 × 160 cm',
      '100 % Bio-Baumwolle, GOTS-zertifiziert',
      'Braun oder Pink',
    ],
    specLabels: [undefined, undefined, 'Farben'],
  },
  // katalogin täydennys 2026-09-05
  'makia-kontio-hoodie': {
    name: 'Makia Kontio Kapuzenpullover',
    description:
      'Kapuzenpullover in normaler Passform aus 100 Prozent Bio-Baumwolle, erst nach dem Nähen gefärbt. Die Stückfärbung gibt eine tiefere Farbe und einen weicheren Griff als Garnfärbung, und der Ton behält seinen leicht getragenen Look Wäsche für Wäsche.',
    specs: [
      '100 % Bio-Baumwolle, stückgefärbt',
      'S bis XXL',
    ],
  },
  'makia-trademark-hoodie': {
    name: 'Makia Trademark Kapuzenpullover',
    description:
      'Makias schlichtester Hoodie: normale Passform, 100 Prozent Bio-Baumwolle und das kleine Markenzeichen auf der Brust. Der für eine Hüttenwoche, in der derselbe Pullover vom Morgenfeuer bis zur Saunaveranda am Abend getragen wird.',
    specs: [
      '100 % Bio-Baumwolle',
      'S bis XXL',
    ],
  },
  'makia-moray-zip-knit': {
    name: 'Makia Moray Strickjacke mit Reißverschluss',
    description:
      'Strickjacke mit Reißverschluss in normaler Passform aus 100 Prozent Merinowolle. Merino wärmt ohne aufzutragen und trocknet von innen, also taugt sie als Schicht unter der Shell auf der Fjellwanderung und allein im warmen Café.',
    specs: [
      '100 % Merinowolle',
      'S bis XXL',
    ],
  },
  'makia-form-jacket': {
    name: 'Makia Form Winterjacke',
    description:
      'Lange Winterjacke mit normaler Passform und Isolierung aus recyceltem Polyester. Ein verdeckter Rippbund im Ärmelsaum schließt die Manschette gegen Wind, und das zählt auf einer Januarstraße in Rovaniemi mehr als jede Ausstattungsliste.',
    specs: [
      'Isolierung aus recyceltem Polyester, verdeckte Rippbündchen',
      'S bis XXL',
    ],
  },
  'makia-martin-beanie': {
    name: 'Makia Martin Merinomütze',
    description:
      'Mütze aus 100 Prozent Merinowolle mit kleinem Aufnäher, in Finnland gestrickt. Der günstigste Einstieg bei Makia und das Stück, das von Oktober bis April am ehesten täglich getragen wird.',
    specs: [
      '100 % Merinowolle',
      'Hergestellt in Finnland',
      'Einheitsgröße',
    ],
  },
  'makia-mari-balaclava': {
    name: 'Makia Mari Strick-Sturmhaube',
    description:
      'Gestrickte Sturmhaube aus einer Mischung von Wolle, Polyester, Alpaka und Elasthan. Deckt Ohren, Hals und Wangen auf einmal ab, und das ist der Unterschied zwischen einer Schneemobilfahrt und einer, an die man sich aus dem falschen Grund erinnert.',
    specs: [
      'Mischung aus Wolle, Polyester, Alpaka und Elasthan',
      'Einheitsgröße',
    ],
  },
  'halti-pehmee-merino-beanie': {
    name: 'Halti Pehmee Merinomütze',
    description:
      'Stadtmütze aus 100 Prozent Merinowolle mit doppellagigem Rippbund, hergestellt in Finnland. Halti nennt sie Pehmee, weich, und sie ist die Mütze für Tage, an denen eine Skimütze nach falscher Abzweigung aussähe.',
    specs: [
      '100 % Merinowolle',
      'Hergestellt in Finnland',
      'Liegend trocknen',
      'Einheitsgröße',
    ],
  },
  'halti-rockmoon-fleece-hoodie': {
    name: 'Halti Rockmoon Herren-Fleecejacke mit Kapuze',
    description:
      'Warme Kapuzen-Fleecejacke aus beidseitig angerautem Stretchstoff, mit winddichtem Mikrogewebe an Kapuze und Schultern, wo die Kälte zuerst hereinkommt. Unter der Shell auf dem Fjell, allein rund um die Hütte.',
    specs: [
      'Beidseitig angerautes Stretch-Fleece, winddichtes Mikrogewebe an Kapuze und Schultern',
      'S bis XXXL',
    ],
  },
  'halti-viiri-fleece-gloves': {
    name: 'Halti Viiri Fleecehandschuhe',
    description:
      'Leichte 45-Gramm-Handschuhe aus winddichtem Stormwall-Fleece, mit Silikon-Griffdruck auf der Handfläche und Touchscreen-Spitzen an Daumen und Zeigefinger, damit das Polarlichtfoto ohne bloße Hände gelingt.',
    specs: [
      'Stormwall-Fleece 100 % Polyester, Handfläche 65 % Polyester, 32 % Polyamid, 3 % Elasthan',
      '45 g',
      'Daumen und Zeigefinger',
      'Schonwäsche bei höchstens 30 °C',
    ],
    specLabels: [undefined, undefined, 'Touchscreen', undefined],
  },
  'nb-moomin-classics-beanie': {
    name: 'Mumin Classics Mütze',
    description:
      'Erwachsenenmütze aus der Kollektion Moomin Classics aus recyceltem Polyester und Acryl, beige, Einheitsgröße. Ein offizielles Mumin-Produkt, und das ist die Linie, die sie von der Marktstandversion trennt.',
    specs: [
      'Recyceltes Polyester und Acryl',
      'Erwachsene, Einheitsgröße',
      'Beige',
    ],
  },
  'nb-snufkin-mens-socks': {
    name: 'Schnupferich Herrensocken',
    description:
      'Herrensocken mit Schnupferich, EU 40 bis 45, 60 Prozent Baumwolle mit Polyester, Nylon und Elasthan für Dehnung. Das günstigste Mumin-Geschenk dieser Seite, das getragen und nicht ausgestellt wird.',
    specs: [
      'EU 40-45',
      '60 % Baumwolle, 33 % Polyester, 4 % Nylon, 2 % Elasthan, 1 % Elastodien',
    ],
  },
  'nb-hattifatteners-retro-socks': {
    name: 'Hattifnatten Damen-Retrosocken',
    description:
      'Socken im Retrostil mit den Hattifnatten, EU 36 bis 42, 67 Prozent Baumwolle. Dehnbar genug, dass eine Größe den meisten passt, und das Erste, was eine Mumin-Leserin aus der offenen Sockenschublade zieht.',
    specs: [
      'EU 36-42',
      '67 % Baumwolle, 25 % Polyester, 4 % Elastodien, 3 % Nylon, 1 % Elasthan',
    ],
  },
  'sk-suomi-propeller-cap': {
    name: 'Suomi Fan-Propellerkappe',
    description:
      'Blau-weiße Propellerkappe für die Tribüne, die Fanzone und das Eishockeyfinale im Pub. Keine ernsthafte Kopfbedeckung, und genau das ist der Punkt an einem Abend, an dem Finnland spielt.',
    specs: [
      'Blau und Weiß',
    ],
  },
  'sk-muurla-moomin-lantern-tahtihetki': {
    name: 'Muurla Mumin Laterne Tähtihetki 18 cm',
    description:
      'Handgefertigte Laterne aus bleifreiem Glas aus Muurlas Serie Tähtihetki mit Golddetails, 15,5 cm breit und 18 cm hoch. Taugt als Kerzenlaterne, als Schale für die Süßigkeiten der Saison oder als Vase für einen kleinen Strauß.',
    specs: [
      'Ø 15,5 cm, Höhe 18 cm',
      'Handgefertigtes bleifreies Glas',
      'Handwäsche',
    ],
  },
  'sk-hukka-soapstone-candle': {
    name: 'Hukka Jätkänkynttilä Teelichthalter aus Stein',
    description:
      'Teelichthalter aus Stein in der Form eines jätkänkynttilä, des gespaltenen Holzscheitfeuers, das Holzfäller im Schnee anzündeten. 56 mm breit, 100 mm hoch, 310 Gramm, für ein 40-mm-Teelicht. Lebendiges Feuer auf kaltem Stein, drinnen.',
    specs: [
      'Ø 56 x 100 mm, für ein Teelicht Ø 40 mm',
      '0,31 kg',
      '1 Halter',
    ],
  },
  'sk-muurla-moomin-enamel-mug-lumipyry': {
    name: 'Muurla Mumin Emaillebecher Lumipyry 3,7 dl',
    description:
      'Emaillebecher mit 3,7 dl, Kern aus Kohlenstoffstahl mit doppelter Emaillierung, bedruckt mit der Schneesturmszene Lumipyry. Für heiße und kalte Getränke, spülmaschinenfest und lagerfeuertauglich, nicht für die Mikrowelle.',
    specs: [
      '3,7 dl',
      'Kohlenstoffstahl mit doppelter Emaillierung',
      'Spülmaschinenfest, nicht für die Mikrowelle',
    ],
  },
  'sk-arabia-moomin-pitcher-moominhouse': {
    name: 'Arabia Mumin Krug 1,0 l, Muminhaus',
    description:
      'Ein-Liter-Krug von Arabia mit dem Muminhaus, dem runden, ofenförmigen Haus, das Muminpapa selbst gebaut hat und nachts nie abschließt. Mit Keramikdeckel, der auf dem Sommertisch Insekten vom Saft fernhält.',
    specs: [
      '1,0 l',
      'Keramikdeckel inklusive',
    ],
    specLabels: [undefined, 'Deckel'],
  },
  'sk-moomin-duvet-set-merella': {
    name: 'Mumin Bettwäsche-Set 140 x 200 cm, Merellä',
    description:
      'Bettbezug und Kissenbezug aus Baumwolle mit den Mumins auf See, Bezug 140 x 200 cm und Kissen 50 x 70 cm, Reißverschluss. Vor dem ersten Gebrauch waschen, wie jede bedruckte Baumwollbettwäsche.',
    specs: [
      'Bettbezug 140 x 200 cm, Kissenbezug 50 x 70 cm',
      '100 % Baumwolle',
      'Reißverschluss',
    ],
    specLabels: [undefined, undefined, 'Verschluss'],
  },
  'sk-arabia-moomintroll-mini-figurine': {
    name: 'Arabia Mumintroll Minifigur',
    description:
      'Handgefertigter Mumintroll aus Keramik, etwa 6 cm hoch, in den 1990er Jahren von Tuulikki Pietilä entworfen und in eigener Geschenkbox. Die Figuren werden in Serien gesammelt, was eine zum sicheren Geschenk und zwei zur Gewohnheit macht.',
    specs: [
      'Höhe etwa 6 cm',
      'Handgefertigte Keramik',
      'Tuulikki Pietilä, 1990er Jahre',
    ],
    specLabels: [undefined, undefined, 'Design'],
  },
  'sk-arabia-snorkmaiden-mini-figurine': {
    name: 'Arabia Snorkfräulein Minifigur',
    description:
      'Handgefertigtes Snorkfräulein aus Keramik, etwa 6 cm hoch, aus Tuulikki Pietiläs Serie der 1990er Jahre, in eigener Geschenkbox. Zusammen mit dem Mumintroll stehen die beiden auf dem Fensterbrett wie auf den Buchcovern.',
    specs: [
      'Höhe etwa 6 cm',
      'Handgefertigte Keramik',
      'Tuulikki Pietilä, 1990er Jahre',
    ],
    specLabels: [undefined, undefined, 'Design'],
  },
  'sk-lapin-puukko-gift-box': {
    name: 'Lappland-Puukko mit Klingenschutz, Geschenkbox',
    description:
      'Puukko im Lappland-Stil mit Klingenschutz, geliefert in einer Geschenkbox. Der Shop stellt es als Messer für Waldtouren und Alltagsarbeiten vor und als den Gegenstand, der weitergegeben statt ersetzt wird.',
    specs: [
      'Klingenschutz und Geschenkbox',
    ],
    specLabels: ['Enthalten'],
  },
  'sk-loimu-sauna-thermometer': {
    name: 'Loimu Saunathermometer, Birke',
    description:
      'Saunathermometer im Birkenrahmen mit klarer Skala. Es beantwortet die einzige Frage, die ein Gast vor der ersten Kelle Wasser stellt, und sieht aus, als gehöre es an eine Blockwand und nicht neben einen Kessel.',
    specs: [
      'Birke',
    ],
  },
  'sk-helsingin-villasukkatehdas-wool-socks': {
    name: 'Helsingin Villasukkatehdas Wollsocken',
    description:
      'Streichwollsocken aus Finnlands einziger traditioneller Wollsockenfabrik, auf Maschinen aus den 1950er Jahren in Helsinki gestrickt. 70 Prozent mulesingfreie Wolle, in Jämsä gesponnen und in Kyröskoski gefärbt, in mehreren Größen und vier Farben nach Rinde, Moos, Flechte und Nacht.',
    specs: [
      '70 % Wolle (mulesingfrei), 30 % Polyamid',
      'Gestrickt in Helsinki, Wolle gesponnen in Jämsä und gefärbt in Kyröskoski',
      'Mehrere Größen, vier Farben',
    ],
  },
  'sk-halva-salmiakkikalat': {
    name: 'Halva Salmiakkikalat Salzlakritzfische 230 g',
    description:
      'Fischförmige Salmiakbonbons von Halva, 230 Gramm, die Tüte, die in jedem finnischen Handschuhfach liegt. Fester Biss, intensives Salzlakritz, und das Erste, was man einem Besucher reicht, der echtes Finnland schmecken will.',
    specs: [
      '230 g',
    ],
  },
  'sk-kouvolan-lakritsi-500g': {
    name: 'Kouvolan Lakritsi Lakritzstücke 500 g',
    description:
      'Ein halbes Kilo weiche Lakritzstücke aus Kouvola nach einem Rezept von 1945, das 1960 von einem englischen Lakritzspezialisten verfeinert wurde. So schmeckt schlichtes Lakritz, wenn nichts zugesetzt wird, um die Wurzel zu verstecken.',
    specs: [
      '500 g',
      'Von 1945, angepasst 1960',
    ],
    specLabels: [undefined, 'Rezept'],
  },
  'sk-fazer-omar-chocolate-bar': {
    name: 'Fazer Omar Schokoladentafel 180 g',
    description:
      'Limitierte 180-Gramm-Tafel zum 60. Geburtstag von Omar: das milde, cremige Omar-Toffee, das seit 1966 verkauft wird, in Fazer-Milchschokolade mit mindestens 30 Prozent Kakao. Nur für begrenzte Zeit im Verkauf.',
    specs: [
      '180 g',
      'Milchschokolade mit mindestens 30 % Kakao',
      'Limitierte Auflage zum 60. Jubiläum',
    ],
    specLabels: [undefined, 'Kakao', 'Verfügbarkeit'],
  },
  'sk-fazer-salty-suffeli-puffi': {
    name: 'Karl Fazer Salty Suffeli Puffi Schokoladentafel 160 g',
    description:
      'Fazers Milchschokolade aus frischer Milch mit knusprigen, salzig-süßen Suffeli-Maispuffs. 160 Gramm, mindestens 30 Prozent Kakao, und die Antwort für alle, die sich nicht zwischen salzig und süß entscheiden können.',
    specs: [
      '160 g',
      'Milchschokolade mit mindestens 30 % Kakao',
    ],
    specLabels: [undefined, 'Kakao'],
  },
  'sk-tyrkisk-peber-chewy': {
    name: 'Fazer Tyrkisk Peber Chewy Salmiakpastillen 38 g',
    description:
      'Das scharfe Salmiak von Tyrkisk Peber als neue weiche Kaupastille statt harter Schale. Eine 38-Gramm-Taschenpackung, vom Shop im August 2026 gelistet, für Leute, die Salmiak und Schärfe im selben Bissen wollen.',
    specs: [
      '38 g',
    ],
  },
  'sk-tyrkisk-peber-sour-foams': {
    name: 'Fazer Tyrkisk Peber Sour Foams Schaumbonbons 150 g',
    description:
      'Weiche Schaumbonbons mit milder Tyrkisk-Peber-Schärfe und sauren Aromen von Kiwi-Erdbeere und Zitrone-Limette, 150 Gramm. Ein sanfterer Einstieg in die Pfefferlakritz-Familie und die Tüte, die in gemischter Runde zuerst aufgeht.',
    specs: [
      '150 g',
    ],
  },
  'sk-marianne-toffee-rae': {
    name: 'Fazer Marianne Toffee Schokoladendragees 150 g',
    description:
      'Die Marianne-Dragees in der Toffee-Version: glänzende, knackige Hülle um einen Milchschokoladenkern mit mindestens 28 Prozent Kakao, im wiederverschließbaren 150-Gramm-Beutel. Auch zum Backen gedacht, falls welche so lange überleben.',
    specs: [
      '150 g',
      'Milchschokolade mit mindestens 28 % Kakao',
      'Wiederverschließbarer Beutel',
    ],
    specLabels: [undefined, 'Kakao', 'Verpackung'],
  },
  'sk-fasupala-lakritsi': {
    name: 'Fazer Fasupala Lakritsi Waffelkekse 199 g',
    description:
      'Mundgerechte Waffeln mit Lakritzfüllung unter einem Überzug mit Milchschokoladengeschmack, 199 Gramm, ohne Palmöl. Die Lakritzversion eines Kekses, den Finnen schon kartonweise essen, vom Shop im August 2026 gelistet.',
    specs: [
      '199 g',
      'Ohne Palmöl',
    ],
    specLabels: [undefined, 'Fett'],
  },
  'sk-finnish-flavours-cloudberry-jam': {
    name: 'Finnish Flavours Premium-Moltebeerenkonfitüre 250 g',
    description:
      'Moltebeerenkonfitüre mit 75 Prozent finnischen Moltebeeren und 20 Prozent Zucker, 250 Gramm. Moltebeeren reifen Ende Juli auf lappländischen Mooren und lassen sich nicht im großen Stil anbauen, deshalb kostet ein Glas so viel wie zwei Tüten Schokolade.',
    specs: [
      '250 g',
      'Finnische Moltebeere 75 %, Zucker 20 %',
    ],
  },
  'sk-lapin-liha-smoked-reindeer-soup': {
    name: 'Lapin Liha Räucherrentiersuppe 400 g',
    description:
      'Cremige Suppe mit heiß- und kaltgeräuchertem Rentier, 400 Gramm, hergestellt von Lapin Liha. Im Topf erwärmen; es ist der Geschmack eines lappländischen Hüttenmittagessens in einer Packung, die in den Koffer passt.',
    specs: [
      '400 g',
      'Heißgeräuchertes Rentier 3 % und kaltgeräuchertes Rentier 3 %',
      'Im Topf erwärmen',
    ],
    specLabels: [undefined, undefined, 'Zubereitung'],
  },
  'sk-vaasan-ruispalat-5pack': {
    name: 'Vaasan Ruispalat Roggenbrot 5 x 330 g',
    description:
      'Fünf Beutel von Finnlands meistverkauftem Brot: gerissene Vollkornroggenbrötchen auf echtem Sauerteig aus 100 Prozent finnischem Getreide, sechs pro 330-Gramm-Beutel, 12 Prozent Ballaststoffe. Das, was Auslandsfinnen sich von Besuchern mitbringen lassen.',
    specs: [
      '5 x 330 g, 6 Brötchen pro Beutel',
      'Vollkornroggen 87 % des Getreides, Ballaststoffe 12 %',
    ],
  },
  'sk-poikain-parhaat-freeze-dried-blueberry': {
    name: 'Poikain Parhaat gefriergetrocknete Heidelbeeren 15 g',
    description:
      'Ganze finnische Waldheidelbeeren, gefriergetrocknet und sonst nichts: 15 Gramm, die im Koffer nichts wiegen und nach August im Moor schmecken. Laktosefrei, glutenfrei, vegan, ohne Zuckerzusatz und Konservierungsstoffe.',
    specs: [
      '15 g',
      '100 % finnische gefriergetrocknete Heidelbeere',
      'Laktosefrei, glutenfrei, vegan, ohne Zuckerzusatz, ohne Konservierungsstoffe',
    ],
    specLabels: [undefined, undefined, 'Ernährung'],
  },
  'rj-arctic-warriors-blueberry-powder': {
    name: 'Arctic Warriors Heidelbeerpulver 45 g',
    description:
      'Finnische Heidelbeeren, ganz mit ihrem Saft getrocknet und gemahlen, ohne Zusatz, 45 Gramm. Ein Löffel in Porridge, Joghurt oder Smoothie; dieselbe Beere wird hier über Ruohonjuuri verkauft, das innerhalb der EU versendet.',
    specs: [
      '45 g',
      '100 % finnische Heidelbeere, ganz mit dem Saft getrocknet',
    ],
  },
  'rj-poikain-parhaat-blueberry-lemonade': {
    name: 'Poikain Parhaat Heidelbeerlimonade 0,33 l',
    description:
      'Bio-Heidelbeerlimonade aus Vehmainen, Tampere, aus echten Zutaten ohne künstliche Aromen oder Farbstoffe, 0,33-Liter-Flasche. Das Erfrischungsgetränk neben dem Salmiak auf einem finnischen Verkostungstisch.',
    specs: [
      '0,33 l',
      'Hergestellt in Vehmainen, Tampere',
      'Bio, keine künstlichen Aromen oder Farbstoffe',
    ],
    specLabels: [undefined, undefined, 'Zusatzstoffe'],
  },
  'rj-nordic-koivu-birch-sap': {
    name: 'Nordic Koivu Birkensaft 500 ml',
    description:
      'Birkensaft, im Frühjahr gezapft, wenn der Baum das in den Wurzeln gespeicherte Wasser hebt, direkt vom Baum ohne Hitzebehandlung oder Konservierungsstoffe abgefüllt, 500 ml. Schmeckt leicht süß und vor allem nach kaltem, klarem Wasser.',
    specs: [
      '500 ml',
      'Nicht hitzebehandelt, keine Konservierungsstoffe',
    ],
    specLabels: [undefined, 'Verarbeitung'],
  },
  'rj-kaino-spruce-sprout-sparkling-075': {
    name: 'KAINO Drinks Fichtenspitzen Bio-Schaumgetränk 0,75 l',
    description:
      'Alkoholfreies Bio-Schaumgetränk mit Fichtenspitzen, den zarten Maitrieben der finnischen Fichte, in der 0,75-Liter-Flasche. Hergestellt in Vehmainen, Tampere, für den Toast auf einer Feier, bei der nicht alle trinken.',
    specs: [
      '0,75 l',
      'Alkoholfrei, bio',
      'Hergestellt in Vehmainen, Tampere',
    ],
    specLabels: [undefined, 'Alkohol', undefined],
  },
  'rj-yrttipaja-chaga-powder': {
    name: 'Yrttipaja Chagapulver 35 g',
    description:
      'Gemahlener Chaga, der schwarze Pilz an Birkenstämmen, zum Aufbrühen als Tee: ein Esslöffel pro Liter Wasser, mindestens zehn Minuten köcheln und abseihen. 35 Gramm, der günstigste Weg, Pakuri zu probieren, bevor man Stücke kauft.',
    specs: [
      '35 g',
      '1 Esslöffel pro Liter Wasser, mindestens 10 Minuten köcheln und abseihen',
    ],
    specLabels: [undefined, 'Anwendung'],
  },
  'rj-forestly-mushroom-chips-chili': {
    name: 'Forestly Foods Pilzchips, Chili 50 g',
    description:
      'Knusprige Chips aus biologisch angebauten Shiitake-Pilzen, schonend gegart und mit Chili, Salz und Pfeffer gewürzt, 50 Gramm. Umami in der Tüte, fürs Sofa oder über eine Suppe gebröselt.',
    specs: [
      '50 g',
      'Biologisch angebauter Shiitake, Chili, Salz und Pfeffer',
    ],
  },
  // katalogin täydennys 2026-09-05
  'sk-muurla-moomin-80v-tray': {
    name: 'Muurla Mumin 80 Jahre Tablett 27 x 20 cm',
    description:
      'Tablett von 27 x 20 cm aus Muurlas Serie Mumin 80 Jahre, spülmaschinenfest. Die Größe, die zwei Becher und einen Teller Kekse von der Küche aufs Sofa trägt und dort wie ein Teil des Tisches aussieht.',
    specs: [
      '27 x 20 cm',
      'Spülmaschinenfest',
    ],
  },
  'sk-muurla-moomin-glass-box-yhdessa': {
    name: 'Muurla Mumin Glasdose Yhdessä 11,5 cm',
    description:
      'Herzförmige Glasdose aus Muurlas Miniserie Yhdessä, zusammen, 11,5 x 10 x 5,5 cm, Handwäsche, geliefert in der Verkaufsverpackung. Gedacht für die kleinen Schätze: Ringe, einen gefalteten Zettel, einen ersten Zahn.',
    specs: [
      '11,5 x 10 x 5,5 cm',
      'Handwäsche',
      'Verkaufsverpackung',
    ],
    specLabels: [undefined, undefined, 'Verpackung'],
  },
  // katalogin täydennys 2026-09-05
  'sk-aurora-borealis-reindeer-tealight': {
    name: 'Aurora Borealis Rentier-Teelichthalter 10 cm',
    description:
      'Polierter Teelichthalter aus Metall in Rentierform, 10 cm hoch. Das kleine Lappland-Objekt für die Fensterbank im Dezember, leicht genug für den gepolsterten Umschlag.',
    specs: [
      'Höhe 10 cm',
      'Poliertes Metall',
      'Teelicht',
    ],
    specLabels: [undefined, undefined, 'Für'],
  },
  'sk-muurla-moomin-bottle-05l-marjat': {
    name: 'Muurla Mumin Glasflasche 0,5 l, Beeren',
    description:
      'Halbliterflasche aus Sodaglas mit dichtem Bügelverschluss und dem Motiv Beeren, spülmaschinenfest. Muurla macht sie für Saft und Salatdressing, und der halbe Liter passt in die Kühlschranktür.',
    specs: [
      '0,5 l',
      'Sodaglas, Bügelverschluss',
      'Spülmaschinenfest',
    ],
  },
  'nb-hattifatteners-cushion': {
    name: 'Hattifnatten-Kissen',
    description:
      'Polyesterkissen in Form einer Reihe Hattifnatten, 45 bis 75 x 30 bis 50 x 10 cm, nur Handwäsche. Es kommt vakuumverpackt und braucht einen Tag, um seine Form zurückzubekommen, die einzige Zeit, in der Hattifnatten stillhalten.',
    specs: [
      'Polyester',
      '45–75 x 30–50 x 10 cm',
      'Nur Handwäsche',
      'Vakuumverpackt, nimmt nach dem Auspacken seine Form wieder an',
    ],
    specLabels: [undefined, undefined, undefined, 'Verpackung'],
  },
  'sk-emendo-moomin-sauna-seat-cover': {
    name: 'Emendo Mumin-Liebe Saunatuch 150 x 50 cm, braun',
    description:
      'Saunasitztuch aus Leinen und Baumwolle, 150 x 50 cm, mit Tove Janssons Originalzeichnungen, offizielles Lizenzprodukt. Leinen nimmt Feuchtigkeit auf und verträgt harte Wäsche, also liegt es auf der Bank oder steht hinter dem Rücken.',
    specs: [
      '150 x 50 cm',
      'Leinen 60 %, Baumwolle 40 %',
      'Offizielles Moomin-Characters-Produkt',
    ],
    specLabels: [undefined, undefined, 'Lizenz'],
  },
  'sk-rento-pino-sauna-seat-cover': {
    name: 'Rento Pino Saunatuch 50 x 150 cm, grau',
    description:
      'Jacquardgewebtes Saunasitztuch aus Baumwolle, 50 x 150 cm, entworfen von Anna Säteri für Rento. Leichte Baumwolle fühlt sich auf der heißen Bank kühl an, nimmt Schweiß auf, trocknet schnell, und das Muster übersteht die Wäsche.',
    specs: [
      '50 x 150 cm',
      'Jacquardgewebte Baumwolle',
      'Anna Säteri',
    ],
    specLabels: [undefined, undefined, 'Design'],
  },
  'sk-moomin-chocolate-chip-biscuit-tin': {
    name: 'Mumin Schokoladenkekse in der Dose 200 g',
    description:
      'Mini-Schokoladenkekse, 200 Gramm, in einer Mumin-Dose, die die Kekse als Aufbewahrungsdose überlebt. Die Schokoladenstücke machen 16 Prozent des Kekses aus und enthalten mindestens 40 Prozent Kakaotrockenmasse.',
    specs: [
      '200 g',
      'Schokoladenstücke 16 %, in der Schokolade mindestens 40 % Kakaotrockenmasse',
      'Sammeldose, als Aufbewahrungsdose weiterverwendbar',
    ],
    specLabels: [undefined, undefined, 'Verpackung'],
  },
  'sk-paulig-cafe-new-york-beans': {
    name: 'Paulig Café New York Kaffeebohnen 450 g',
    description:
      'Mittel-dunkler Bohnenkaffee, 450 Gramm, lateinamerikanischer Arabica mit brasilianischen Bohnen für Süße und eine fruchtige Note. Paulig röstet seit 1876 Kaffee in Finnland, und die Finnen trinken pro Kopf mehr davon als alle anderen.',
    specs: [
      '450 g',
      'Mittel-dunkel, ganze Bohnen',
      'Lateinamerikanischer Arabica und brasilianische Bohnen',
    ],
    specLabels: [undefined, 'Röstung', undefined],
  },
  // katalogin täydennys 2026-09-05
  'rj-korpihilla-spruce-sprout-sparkling-750': {
    name: 'Korpihilla Fichtenspitzen-Schaumgetränk 750 ml',
    description:
      'Alkoholfreies Schaumgetränk, von Hand aus Fichtenspitzen in Finnisch-Lappland hergestellt, 750 ml. 2005 vom Magazin Viisi Tähteä zu Finnlands bestem Getränk gekürt, und noch immer die Flasche, die man öffnet, wenn der Toast nach Wald schmecken soll.',
    specs: [
      '750 ml',
      'Von Hand in Finnisch-Lappland hergestellt',
      'Alkoholfrei',
      'Finnlands bestes Getränk 2005, Magazin Viisi Tähteä',
    ],
    specLabels: [undefined, undefined, 'Alkohol', 'Auszeichnung'],
  },
}
