import type { ProductCopyMap } from './index'

/**
 * Tuotteiden italiankieliset tekstit. Rakenne ja säännöt: ks. de.ts.
 *
 * `specs` on positionaalinen: indeksi vastaa `product.details.specs`-taulukon
 * järjestystä lähdedatassa. `specLabels` samoin, ja siinä on arvo vain niillä
 * riveillä joilla on oma otsikko (`key: 'other'`).
 *
 * Lukuja, mittayksiköitä, tuotekoodeja ja EAN-numeroita ei käännetä eikä
 * muunneta. Numerofragmentit kopioidaan lähteestä sellaisinaan, myös
 * välilyöntien osalta; vain desimaalierotin vaihtuu pilkuksi.
 */
export const PRODUCT_COPY_IT: ProductCopyMap = {
  'iittala-aalto-vase-160': {
    name: 'Vaso Iittala Alvar Aalto 160 mm, trasparente',
    description:
      'Alvar Aalto disegnò questa onda nel 1936 e Iittala la soffia ancora a bocca, così il profilo di ogni pezzo cambia un poco. La misura da 160 mm è quella che viene in mente quando si sente il nome.',
    specs: [
      'Altezza 16 cm, larghezza 20,5 cm',
      'Vetro',
      'Trasparente',
      '1,44 kg lordo',
      'Solo lavaggio a mano',
      'Vetro soffiato a bocca, forma asimmetrica',
      'Alvar Aalto, Iittala Alvar Aalto Collection',
      '999-01, EAN 6411920004445',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      'Produzione',
      'Designer e collezione',
      'Codice articolo ed EAN',
    ],
  },
  'iittala-kivi-candleholder': {
    name: 'Portacandela Iittala Kivi 60 mm, grigio',
    description:
      'Un portacandela in vetro pressato di Heikki Orvola, alto 6 cm, che trasforma un lumino in un blocco di colore. È il modo più economico per possedere un pezzo Iittala e sopravvive al bagaglio a mano.',
    specs: [
      '6,5 x 6,5 cm, altezza 6 cm',
      'Vetro',
      'Grigio',
      '0,338 kg lordo',
      'Solo lavaggio a mano',
      'Heikki Orvola, Iittala Kivi',
      '1003-03, EAN 6411920039676',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, 'Designer e collezione', 'Codice articolo ed EAN'],
  },
  'marimekko-unikko-mug': {
    name: 'Tazza Marimekko Unikko 25 cl',
    description:
      'Maija Isola disegnò il papavero Unikko nel 1964, dopo che Marimekko aveva vietato le stampe floreali, e il motivo sopravvisse al divieto. Questa tazza in gres contiene 25 cl e porta la stampa sul tavolo della colazione invece che al muro.',
    specs: [
      '25 cl',
      'Diametro 8 cm, altezza 9,5 cm',
      'Gres',
      'Bianco, verde scuro, beige e sabbia chiaro',
      '0,276 kg lordo',
      'Motivo di Maija Isola, tazza di Sami Ruotsalainen',
      '666236-01, EAN 6411255152033',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      'Designer',
      'Codice articolo ed EAN',
    ],
  },
  'halti-tokoi-dx-jacket': {
    name: 'Giacca guscio Halti Tokoi DX, uomo',
    description:
      'Un guscio resistente alle intemperie con tutte le cuciture nastrate, una fodera leggera e un cappuccio regolabile, tagliato abbastanza largo da portarci sotto un maglione di lana. Halti consegna solo all’interno dell’Unione europea.',
    specs: [
      'DrymaxX Sleek Twill, un tessuto a 2 strati impermeabile e antivento con membrana DrymaxX. Composizione 50 % poliestere riciclato e 50 % poliestere',
      'Fodera morbida in poliestere, 100 % poliestere riciclato',
      '10000 mm',
      '10000 g/m²/24 h',
      '0,9 kg',
      'S, M, L, XL, XXL, XXXL',
      'Fossil Beige, Four Leaf Clover Green, Black',
      'Tutte le cuciture nastrate, cappuccio fisso regolabile, collo alto, cerniera frontale a 2 vie, ventilazione in rete, tasche con cerniera, tasca interna con bottone a pressione, polsini regolabili, patta antivento, dettagli riflettenti',
      'Lavare al rovescio con colori simili e chiudere prima le cerniere. Massimo 30 °C, processo delicato. Non candeggiare, non asciugare in asciugatrice, non stirare, non lavare a secco',
    ],
    specLabels: [
      undefined,
      'Fodera',
      'Impermeabilità',
      'Traspirabilità',
      undefined,
      undefined,
      undefined,
      'Caratteristiche',
      undefined,
    ],
  },
  'makia-merino-beanie': {
    name: 'Berretto Makia Merino',
    description:
      'Un berretto nordico essenziale in lana merino, che bilancia temperatura e umidità quando si esce da un bar caldo direttamente nel freddo. Nessun logo grande come un pugno sul davanti.',
    specs: [
      '100 % lana merino, punto inglese finezza 8, senza mulesing',
      'Taglia unica',
      'Dark Brown',
      'Prodotto in Finlandia, materiale prodotto in Italia',
      'Lavare con colori simili con ciclo delicato, asciugare in piano e rimettere in forma. Spesso arieggiarlo basta al posto del lavaggio. Con l’uso possono formarsi pallini',
    ],
  },
  'makia-aurora-hoodie': {
    name: 'Felpa con cappuccio Makia Aurora',
    description:
      'Una felpa con cappuccio vestibilità regular in 100 per cento cotone biologico del marchio di Helsinki Makia. Abbastanza pesante da essere lo strato esterno in casa e nelle serate miti d’autunno.',
    specs: [
      '100 % cotone biologico, french terry da 370 g',
      'S, M, L, XL, XXL',
      'Carbon Black',
      'Vestibilità regular, coulisse sul cappuccio, tasca a marsupio, costine su fondo e polsini, etichette tessute in poliestere riciclato',
      'Prodotta in Turchia, materiale prodotto in Turchia',
      'Lavare al rovescio con colori simili. Non stirare sulla stampa. Restringimento massimo 5 %. Rimettere in forma da umida',
    ],
    specLabels: [undefined, undefined, undefined, 'Vestibilità e dettagli', undefined, undefined],
  },
  'halti-kroka-mitten': {
    name: 'Muffola Halti Kroka II',
    description:
      'Una muffola antivento con 60 g di imbottitura e palmo con grip in silicone, dal taglio unisex. Le muffole battono i guanti quando il vento si alza, perché le dita si scaldano a vicenda.',
    specs: [
      'Softshell Stormwall, 50 % poliestere e 50 % poliestere riciclato. Pile morbido 100 % poliestere. Polsini in maglia lycra',
      'Microtherm Dynamic 60 g, fodera Active Dry soft touch, 100 % poliestere riciclato',
      '0,1 kg',
      '06, 07, 08, 09, 10, 11, 12',
      'Nero',
      'Lavare separatamente a 30 °C con ciclo delicato. Non candeggiare, non asciugare in asciugatrice, non stirare, non lavare a secco',
      '084-0757',
    ],
    specLabels: [
      undefined,
      'Imbottitura e fodera',
      undefined,
      undefined,
      undefined,
      undefined,
      'Codice prodotto',
    ],
  },
  'halti-tunturit-ski-socks': {
    name: 'Calze da sci Halti Tunturit',
    description:
      'Calze al ginocchio in misto merino con imbottitura su stinco e caviglia, cioè dove preme lo scarpone. Halti dichiara che sono prodotte in Europa.',
    specs: [
      'Misto lana merino: 36 % poliammide, 23 % acrilico, 23 % lana merino, 16 % polipropilene, 2 % elastan',
      '0,1 kg',
      '34-36, 37-39, 40-42, 43-45, 46-48',
      'Sargasso Sea Blue, Lemon Pepper Beige',
      'Prodotte in Europa',
      'Imbottitura su stinco e caviglia, lunghezza al ginocchio, tallone e punta rinforzati, zone di ventilazione sullo stinco e sul dorso del piede',
      'Massimo 40 °C, processo normale. Non stirare, non candeggiare, non lavare a secco, non asciugare in asciugatrice',
      '087-0471',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      'Caratteristiche',
      undefined,
      'Codice prodotto',
    ],
  },
  'north-outdoor-huuru-beanie': {
    name: 'Berretto in merino North Outdoor Huuru',
    description:
      'North Outdoor lavora a maglia questo berretto a costine nel proprio maglificio a Oulu con 100 per cento merino senza mulesing, 18,5 micron. Lavorato in forma invece che tagliato, quindi restano pochi scarti.',
    specs: [
      '100 % lana merino, senza mulesing, 18,5 micron, maglia 270 g/m²',
      'Taglia unica',
      'Blu indaco',
      'Prodotto a Oulu, Finlandia',
      'Arieggiatelo spesso e lavatelo solo quando serve. Detersivo per lana, ciclo delicato a 30 °C con la centrifuga più bassa, al rovescio',
      'OEKO-TEX, Woolmark',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, 'Certificati'],
  },
  'north-outdoor-pyry-scarf': {
    name: 'Sciarpa in merino North Outdoor Pyry',
    description:
      'Una sciarpa larga e lunga a punto inglese, 100 per cento merino, lavorata a Oulu. Abbastanza lunga da avvolgersi in più modi, il che conta quando il vento cambia direzione su un fjäll aperto.',
    specs: [
      '100 % lana merino, 18,5 micron, costine 1/1',
      'Taglia unica',
      'Grigio porridge',
      'Prodotta a Oulu, Finlandia',
      'Arieggiatela spesso e lavatela solo quando serve. Detersivo per lana, ciclo delicato a 30 °C con la centrifuga più bassa, al rovescio',
      'OEKO-TEX, Woolmark',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, 'Certificati'],
  },
  'north-outdoor-honka-jumper': {
    name: 'Maglione in merino North Outdoor Honka, uomo',
    description:
      'Un maglione spesso a punto inglese, 100 per cento merino, dal taglio morbido e con la spalla scesa. Pesante da vedere, leggero da portare, e lavorato nel maglificio di Oulu.',
    specs: [
      '100 % lana merino, senza mulesing, 18,5 micron, costine variabili',
      'S, M, L, XL, 2XL, 3XL',
      'Blu indaco',
      'Prodotto a Oulu, Finlandia',
      'Arieggiatelo spesso e lavatelo solo quando serve. Detersivo per lana, ciclo delicato a 30 °C con la centrifuga più bassa, al rovescio',
      'OEKO-TEX, Woolmark',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, 'Certificati'],
  },
  'marttiini-lapinleuku-255': {
    name: 'Coltello tradizionale della Lapponia Marttiini 255',
    description:
      'Il coltello tradizionale della Lapponia, 27 cm in tutto, con lama inossidabile, manico in betulla fiammata verniciata e fodero in cuoio. Marttiini produce i suoi coltelli a Rovaniemi, e questa versione del modello ha la guardia.',
    specs: [
      '16 cm',
      'Lunghezza totale 27 cm',
      'Lama in acciaio inossidabile, manico in betulla fiammata verniciata, fodero in cuoio',
      'Coltello e fodero in cuoio con chiusura a pressione',
      '255010',
    ],
    specLabels: ['Lunghezza della lama', undefined, undefined, undefined, 'Codice prodotto'],
  },
  'marttiini-napapiirin-puukko': {
    name: 'Coltello Marttiini Circolo Polare',
    description:
      'Un piccolo coltello da tutti i giorni, 20 cm in tutto, con lama in acciaio al carbonio, manico in betulla cerata e fodero in cuoio marrone. L’acciaio al carbonio prende un filo più tagliente dell’inossidabile ma va oliato, cosa che Marttiini ricorda anche sulla scheda prodotto.',
    specs: [
      '9 cm',
      'Lunghezza totale 20 cm',
      'Lama in acciaio al carbonio, manico in betulla cerata, fodero in cuoio marrone',
      'Asciugate sempre bene la lama dopo l’uso e oliatela regolarmente con olio non salato',
      '121019',
    ],
    specLabels: ['Lunghezza della lama', undefined, undefined, undefined, 'Codice prodotto'],
  },
  'marttiini-ilves-131': {
    name: 'Marttiini Lince 131',
    description:
      'Un coltello da 22 cm con lama inossidabile, manico in betulla fiammata verniciata e fodero in cuoio marrone. Marttiini dichiara che il modello Lince fu disegnato dal fondatore Janne Marttiini negli anni trenta.',
    specs: [
      '11 cm',
      'Lunghezza totale 22 cm',
      'Lama in acciaio inossidabile, manico in betulla fiammata verniciata, fodero in cuoio marrone',
      '131010',
    ],
    specLabels: ['Lunghezza della lama', undefined, undefined, 'Codice prodotto'],
  },
  'kupilka-classic-cup-21': {
    name: 'Tazza da campo Kupilka 21, 2,1 dl',
    description:
      'La forma del kuksa in un materiale che si può mettere in lavastoviglie: metà fibra di cellulosa di pino, metà termoplastica, stampato in Finlandia. Contiene 2,1 dl, pesa 83 grammi e non scotta le dita accanto al fuoco.',
    specs: [
      '2,1 dl',
      '83 g',
      '60 x 93 x 165 mm',
      'Composito di fibre naturali Kareline, 50 % fibra di cellulosa di pino e 50 % termoplastica, prodotto con energia verde',
      'Finlandia',
      'In escursione sciacquatela come un kuksa di legno, a casa va in lavastoviglie. Non adatta al microonde',
      '3021011XX',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, undefined, 'Numero di modello'],
  },
  'kupilka-bowl-55': {
    name: 'Ciotola da campo Kupilka 55, 5,5 dl',
    description:
      'Una ciotola da 5,5 dl con un manico abbastanza solido da tenerla con una mano mentre l’altra regge la tazza. Stesso composito finlandese in fibra di pino della tazza, 184 grammi, lavabile in lavastoviglie.',
    specs: [
      '5,5 dl',
      '184 g',
      '54 x 154 x 223 mm',
      'Composito di fibre naturali Kareline, 50 % fibra di cellulosa di pino e 50 % termoplastica, prodotto con energia verde',
      'Finlandia',
      'Lavabile in lavastoviglie. Non adatta al microonde. Approvata per il contatto con cibi caldi e freddi',
      '3055013X',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, undefined, 'Numero di modello'],
  },
  'kupilka-cutlery-set': {
    name: 'Set di posate Kupilka',
    description:
      'Cucchiaio, coltello e forchetta nello stesso composito finlandese in fibra di legno, 56 grammi il set. Il modo più economico di portarsi a casa il materiale Kupilka e il più facile da mettere nel bagaglio a mano.',
    specs: [
      'Cucchiaio, coltello e forchetta',
      '56 g',
      'Composito di fibre naturali Kareline, 50 % fibra di cellulosa di pino e 50 % termoplastica, prodotto con energia verde',
      'Finlandia',
      'In escursione sciacquatele come posate di legno, a casa vanno in lavastoviglie. Non adatte al microonde',
      '3025025X',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, 'Numero di modello'],
  },
  'pentik-posio-mug': {
    name: 'Tazza Pentik Posio 0,3 l',
    description:
      'Pentik cuoce questa tazza a Posio, che l’azienda definisce la fabbrica di ceramica più settentrionale del mondo, e tutta la linea Posio è decorata con renne. Adatta a lavastoviglie, forno, microonde e congelatore.',
    specs: [
      '0,3 l',
      'Rosso',
      'Prodotta a Posio, in Lapponia, che Pentik definisce la fabbrica di ceramica più settentrionale del mondo',
      'Lavabile in lavastoviglie, adatta a forno elettrico, forno da cottura, microonde e congelatore',
      'Posio. Ogni pezzo della linea è decorato con renne',
      '12JAO050P41',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Collezione', 'Codice prodotto'],
  },
  'pentik-tunturiretki-studio-dish': {
    name: 'Piatto triangolare fondo Pentik Tunturiretki Winter Studio 19 cm',
    description:
      'Anu Pentik ha dipinto le renne che continuano a comparire tra gli alberi durante una camminata sul fjäll. I pezzi Studio sono dipinti a mano a Posio, quindi non esistono due piatti con esattamente le stesse pennellate.',
    specs: [
      'Diametro 19 cm',
      'Blu',
      'Fatto a mano a Posio, in Lapponia, disegnato da Anu Pentik',
      'Lavabile in lavastoviglie, adatto a forno elettrico, forno da cottura, microonde e congelatore',
      'Pentik Studio, la linea dipinta a mano',
      '12ST353TT61',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Collezione', 'Codice prodotto'],
  },
  'kuivalihakundi-poro-jerky': {
    name: 'Carne di renna essiccata Original 2 x 20 g',
    description:
      'Due sacchetti da 20 grammi di carne di renna essiccata, 100 per cento renna finlandese, essiccata in forno e marinata con salsa di soia senza glutine, pepe nero, aglio e sciroppo di zucchero. La carne non può essere spedita fuori dall’Unione europea, quindi la consegna si ferma al confine europeo.',
    specs: [
      '2 x 20 g',
      'Carne dalla Finlandia',
      'Le date corrono circa un anno dal giorno in cui la carne è stata essiccata e confezionata. Non richiede refrigerazione, nemmeno dopo l’apertura',
      'Fortemente salata. Senza glutine',
      'Energia 1514 kJ / 360 kcal, grassi 14,2 g di cui saturi 6,2 g, carboidrati 7,9 g di cui zuccheri 5,1 g, proteine 50,2 g, sale 9,5 g',
    ],
    specLabels: [undefined, undefined, undefined, 'Indicazioni in etichetta', 'Valori nutrizionali per 100 g'],
  },
  'finnish-flavours-palalaku-salmiakki': {
    name: 'Finnish Flavours Premium Palalaku salmiakki 150 g',
    description:
      'Un sacchetto da 150 grammi di liquirizia salmiakki morbida, quella al cloruro di ammonio che divide i visitatori in due schieramenti al primo pezzo. Suomikauppa spedisce alimentari ben oltre la Finlandia.',
    specs: [
      '150 g',
      'Energia 1316 kJ / 311 kcal, grassi 0,5 g di cui saturi 0 g, carboidrati 72 g di cui zuccheri 50 g, proteine 4,1 g, sale 1,7 g',
      'Finnish Flavours, Kumitehtaankatu 5, 04260 Kerava',
    ],
    specLabels: [undefined, 'Valori nutrizionali per 100 g', 'Commercializzato da'],
  },
  'meritalo-tyrnihillo': {
    name: 'Confettura finlandese di olivello spinoso Meritalo 310 g',
    description:
      'Confettura di olivello spinoso con 37 grammi di bacche ogni 100 grammi, cotta con olivello spinoso finlandese nella fattoria di famiglia Meritalo a Salo, nel sud-ovest della Finlandia e non in Lapponia. L’olivello spinoso è aspro più che dolce, quindi rende di più accanto a un formaggio che su una crêpe.',
    specs: [
      '310 g',
      'Le bacche sono finlandesi. Prodotta da un’azienda familiare nella fattoria Meritalo a Salo, nel sud-ovest della Finlandia',
      'Energia 781 kJ / 187 kcal, grassi 1,9 g di cui saturi 0,3 g, carboidrati 41 g di cui zuccheri 41 g, proteine 0,3 g, sale 0,01 g',
      'Marjajaloste Meritalo Oy, 25610 Ylönkylä',
    ],
    specLabels: [undefined, undefined, 'Valori nutrizionali per 100 g', 'Commercializzata da'],
  },
  'kuivalihakundi-poro-jerky-200g': {
    name: 'Carne di renna essiccata Original 200 g',
    description:
      'Il formato regalo della stessa carne di renna essiccata, 200 grammi. Il produttore dichiara che un chilo di carne essiccata richiede tre chili di carne fresca, ed è lì gran parte della spiegazione del prezzo di un sacchetto.',
    specs: [
      '200 g',
      '100 % carne di renna, sottofesa, essiccata in forno e marinata',
      '1 kg di carne essiccata richiede 3 kg di carne fresca',
      'Le date corrono circa un anno dal giorno in cui la carne è stata essiccata e confezionata. Non richiede refrigerazione, nemmeno dopo l’apertura',
    ],
    specLabels: [undefined, undefined, 'Carne impiegata', undefined],
  },
  'kuivalihakundi-beef-jerky-smoked': {
    name: 'Manzo essiccato Smoked 40 g',
    description:
      'Manzo invece di renna, davvero affumicato e non solo aromatizzato, 57 grammi di proteine ogni 100. La cosa più economica di questa categoria e quella che sopravvive a uno zaino.',
    specs: [
      '40 g',
      'Manzo allevato e macellato nell’Unione europea',
      '1 kg di carne essiccata richiede 2,5 kg di manzo fresco',
      'Energia 1261 kJ / 298 kcal, grassi 5,5 g di cui saturi 2,4 g, carboidrati 5,2 g di cui zuccheri 4,4 g, proteine 56,9 g, sale 5 g',
    ],
    specLabels: [undefined, undefined, 'Carne impiegata', 'Valori nutrizionali per 100 g'],
  },
  'fazer-geisha-chocolate-bar': {
    name: 'Barrette di cioccolato Fazer Geisha 37 g, 5 pezzi',
    description:
      'Cinque barrette Geisha da 37 g, con il cioccolato al latte Fazer che avvolge un ripieno croccante di torrone di nocciole. Fazer dichiara che il cioccolato è prodotto senza olio di palma.',
    specs: [
      '5 x 37 g',
      'Cioccolato al latte con almeno 30 % di cacao, ripieno di torrone con 11 % di nocciole',
      'Energia 550 kcal / 2303 kJ, grassi 35 g, saturi 17 g, carboidrati 51 g, zuccheri 49 g, proteine 8 g, sale 0,19 g',
    ],
    specLabels: [undefined, undefined, 'Valori nutrizionali per 100 g'],
  },
  'nordqvist-moomin-forest-berry-tea': {
    name: 'Infuso Nordqvist Moomin ai frutti di bosco e ibisco, 20 filtri',
    description:
      'Ibisco biologico con mela e frutti di bosco, naturalmente senza caffeina, miscelato nello stabilimento Nordqvist di Nurmijärvi. Venti filtri pesano 35 grammi, il regalo più leggero di questo negozio.',
    specs: [
      '20 x 1,75 g, 35 g',
      'Miscelato nello stabilimento Nordqvist di Nurmijärvi, Finlandia',
      '95 °C per 2 o 4 minuti. In acqua fredda da 5 a 10 minuti',
      'Certificato biologico, vegano, senza glutine, naturalmente senza caffeina',
    ],
    specLabels: [undefined, undefined, 'Preparazione', 'Dieta'],
  },
  'nordqvist-cranberry-toffee-tea': {
    name: 'Infuso Nordqvist mirtillo rosso e caramello salato, 20 filtri',
    description:
      'Mirtillo rosso aspro contro caramello salato su una base di ibisco e rooibos, quindi senza caffeina e con ancora un sapore la sera. Nordqvist miscela tè in Finlandia dal 1883.',
    specs: [
      '20 x 1,75 g, 35 g',
      '95 °C per 2 o 5 minuti',
      'Vegano. Ibisco e rooibos sono certificati Rainforest Alliance',
    ],
    specLabels: [undefined, 'Preparazione', 'Dieta e certificazione'],
  },
  'kaapa-mushrooms-pakuri-powder': {
    name: 'Polvere di estratto di chaga Kääpä Mushrooms 30 g',
    description:
      'Un barattolo da 30 grammi di polvere di estratto di chaga di Kääpä Mushrooms, che raccoglie funghi funzionali nei boschi nordici, pensato per essere sciolto nelle bevande calde. Ruohonjuuri consegna solo nel territorio doganale e fiscale dell’Unione europea, e l’etichetta elenca interazioni con farmaci che conviene leggere prima.',
    specs: [
      '30 g',
      '100 % chaga, biologico. 100 mg di betaglucano per dose giornaliera',
      'Finlandia',
      'Biologico con la foglia bio europea. Senza glutine, senza lattosio, senza latticini, senza soia, senza zucchero, senza caffeina, senza additivi, vegano, selvatico',
      'La chaga non va usata insieme ad antibiotici, anticoagulanti, penicillina o glucosio per via endovenosa. Assumete la dose indicata sulla confezione e non superatela',
      '6430071310212',
    ],
    specLabels: [undefined, undefined, undefined, 'Dieta', 'Avvertenza', 'EAN'],
  },
  'arctic-warriors-spruce-sprout-powder': {
    name: 'Polvere di germogli di abete Arctic Warriors 40 g',
    description:
      'Germogli di abete liofilizzati, raccolti a mano in una finestra di due settimane in boschi statali biologici, e solo un anno sì e uno no dallo stesso bosco. Agrumi e resina in un cucchiaio, 382 mg di vitamina C per 100 g.',
    specs: [
      '40 g',
      'Germogli di abete liofilizzati',
      '382 mg per 100 g',
    ],
    specLabels: [undefined, undefined, 'Vitamina C'],
  },
  'arctic-warriors-nettle-powder': {
    name: 'Polvere di ortica Arctic Warriors 150 g',
    description:
      'Ortica coltivata in fattorie biologiche della Lapponia, liofilizzata in una polvere abbastanza neutra da finire in una zuppa o nel pane senza litigare con il resto del piatto.',
    specs: [
      '150 g, lordo 0,162 kg',
      '4 x 16 x 23 cm',
      'Ortica liofilizzata',
      'Finlandia, coltivata in fattorie biologiche della Lapponia',
      'Da 1 a 5 cucchiaini al giorno',
      'Energia 1484 kJ / 354 kcal, proteine 23,6 g, carboidrati 56 g, grassi 3,44 g, sale meno di 5 mg. Vitamina A 1900 µg',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Dosaggio', 'Valori nutrizionali per 100 g'],
  },
  'arctic-warriors-roseroot-elixir': {
    name: 'Elisir di rodiola Arctic Warriors 100 ml',
    description:
      'La rodiola cresce sulle rive umide dei ruscelli e sulle pareti di roccia dei fjäll della Lapponia, e Arctic Warriors la estrae in glicerolo vegetale insieme all’ortica. Un cucchiaino va nel tè, nel porridge o nello yogurt.',
    specs: [
      '100 ml',
      'Rodiola e ortica',
    ],
  },
  'omega7-sea-buckthorn-olive-oil': {
    name: 'Omega7 SBA24 olio di olivello spinoso e oliva 150 ml',
    description:
      'Olio di bacca e olio di seme di olivello spinoso insieme a olio di oliva, sviluppato e prodotto in Finlandia. Il produttore standardizza i livelli di vitamina A ed E invece di lasciarli al raccolto.',
    specs: [
      '150 ml',
      'Olio di bacca e di seme di olivello spinoso con olio di oliva, livelli di vitamina A ed E standardizzati',
      'Sviluppato e prodotto in Finlandia',
      'Seguite la dose indicata sulla confezione e non superatela. Un integratore alimentare non sostituisce una dieta varia. Tenere fuori dalla portata dei bambini',
    ],
    specLabels: [undefined, undefined, undefined, 'Nota'],
  },
  'kaino-spruce-sprout-sparkling': {
    name: 'Bibita frizzante ai germogli di abete KAINO Drinks 0,2 l',
    description:
      'Una bibita frizzante analcolica fatta con ingredienti biologici finlandesi, così un brindisi in baita non deve per forza contenere alcol. Servitela fredda, altrimenti l’aroma di abete sparisce sotto le bollicine.',
    specs: [
      '0,2 l',
      'Fatta con 100 % ingredienti biologici finlandesi. Analcolica',
      'Finlandia',
      'Energia 122,65 kJ / 29,3 kcal, grassi meno di 0,1 g di cui saturi meno di 0,1 g, carboidrati 6,9 g di cui zuccheri 6,9 g, proteine meno di 0,1 g, sale meno di 0,1 g',
      'Vegana. Foglia bio europea',
    ],
    specLabels: [undefined, undefined, undefined, 'Valori nutrizionali per 100 ml', 'Dieta e certificazione'],
  },
  'arabia-moomin-mug-snufkin': {
    name: 'Tazza Arabia Moomin, Snufkin',
    description:
      'Arabia stampa i disegni di Tove Jansson su queste tazze dal 1990, e i collezionisti seguono per anno quelle uscite di produzione. Snufkin è quello che parte in autunno e torna in primavera.',
    specs: ['0,3 l', 'Tove Jansson'],
    specLabels: [undefined, 'Illustrazione'],
  },
  'arabia-moomin-mug-friendship': {
    name: 'Tazza Arabia Moomin, Friendship',
    description:
      'La tazza mostra Ninni, la bambina invisibile che ha paura del buio e torna lentamente visibile quando qualcuno è gentile con lei. Una scelta più discreta rispetto ai personaggi noti.',
    specs: ['0,3 l', 'Tove Jansson'],
    specLabels: [undefined, 'Illustrazione'],
  },
  'arabia-moomin-figurine-moomintroll': {
    name: 'Minifigura Arabia Moomin, Moomin',
    description:
      'Una figura in ceramica fatta a mano, disegnata da Tuulikki Pietilä negli anni novanta e venduta nella sua scatola. Abbastanza piccola da tornare a casa nella tasca di un cappotto.',
    specs: ['Tuulikki Pietilä, anni 1990', 'Ceramica fatta a mano, venduta nella sua scatola'],
    specLabels: ['Designer', 'Produzione'],
  },
  'fiskars-moominpappa-scissors': {
    name: 'Forbici universali Fiskars Papà Moomin',
    description:
      'Le forbici Fiskars dal manico arancione stanno in più cassetti di cucina finlandesi di qualsiasi altro attrezzo. Questo paio misura 21 cm in acciaio inossidabile con Papà Moomin sul manico.',
    specs: ['21 cm', 'Acciaio inossidabile'],
  },
  'rento-tar-sauna-soap': {
    name: 'Sapone da sauna al catrame Rento 150 g',
    description:
      'Il catrame di pino è un odore finlandese prima di essere un sapore finlandese, e il suo posto è nella sauna più che altrove. A base di olio vegetale, appeso a una cordicella di iuta così asciuga tra un uso e l’altro.',
    specs: ['150 g', 'Sapone a base di olio vegetale'],
  },
  'rento-birch-sauna-honey': {
    name: 'Miele da sauna alla betulla Rento 150 ml',
    description:
      'Stendetelo sulla pelle pulita, lasciatelo agire nel calore mite, risciacquate con acqua tiepida. Il miele da sauna è la parte del rituale finlandese che ai visitatori non viene mai in mente di portarsi a casa.',
    specs: ['150 ml'],
  },
  'rento-blueberry-sauna-honey': {
    name: 'Miele da sauna al mirtillo Rento 150 ml',
    description:
      'La versione esfoliante, profumata al mirtillo. Stesso uso di quella alla betulla: sulla pelle pulita, lasciate lavorare il calore, risciacquate con acqua tiepida.',
    specs: ['150 ml'],
  },
  'rento-sauna-pillow': {
    name: 'Cuscino da sauna Rento Pino 50 x 22 cm',
    description:
      'Un cuscino tessuto jacquard per testa e nuca sulla panca della sauna. Mantiene la forma, ed è tutta lì la differenza tra un cuscino da sauna e un asciugamano piegato.',
    specs: ['50 x 22 cm', 'Nero'],
  },
  'rento-linen-back-scrubber': {
    name: 'Spugna da schiena in spugna di lino Rento 14 x 70 cm',
    description:
      'Spugna di lino, abbastanza lunga da arrivare alla propria schiena. La pelle prima si ammorbidisce nel calore e poi si lava, ed è l’ordine che i finlandesi seguono senza pensarci.',
    specs: ['14 x 70 cm', 'Spugna di lino'],
  },
  'rento-linen-wash-mitt': {
    name: 'Guanto da bagno in spugna di lino Rento 14 x 24 cm',
    description:
      'La stessa spugna di lino della spugna da schiena, in un guanto con il palmo doppio. La cosa più economica di questa sezione e quella che la gente usa davvero ogni settimana.',
    specs: ['14 x 24 cm', 'Spugna di lino, palmo doppio'],
  },
  'emendo-sauna-scents': {
    name: 'Profumi da sauna Emendo: salmiakki, resina di pino, sisu, 3 x 10 ml',
    description:
      'Tre profumi su un supporto di legno, e uno di questi è il salmiakki. Difficile essere più finlandesi di salmiakki e sauna, e questo set li mette nello stesso mestolo.',
    specs: ['3 x 10 ml su un supporto di legno', 'Salmiakki, resina di pino, sisu'],
    specLabels: [undefined, 'Profumi'],
  },
  'aurora-mini-kuksa': {
    name: 'Mini kuksa con passante in cuoio, 4 cm',
    description:
      'Un kuksa da 4 cm pensato per un bicchierino e non per il caffè, con un passante in cuoio per la cintura. Il modo più piccolo ed economico di possedere questa forma.',
    specs: ['Diametro 4 cm'],
  },
  'pahkataide-kuksa-bear': {
    name: 'Kuksa Pahkataide in betulla fiammata con orso in osso',
    description:
      'Una kuksa in betulla fiammata con un intarsio in osso sul manico che raffigura un orso. Pahkataide tratta le sue tazze con olio di papavero, che protegge il legno. Non si lava mai con il detersivo: basta sciacquarla, e il caffè di ogni giorno forma in superficie una pellicola che la protegge ancora di più.',
    specs: [
      'Betulla fiammata, intarsio in osso sul manico',
      'Sciacquare con acqua, senza detersivo',
      'Prodotta in Finlandia',
    ],
    specLabels: [undefined, undefined, 'Origine'],
  },
  'pahkataide-curly-birch-kuksa': {
    name: 'Kuksa Pahkataide in betulla fiammata',
    description:
      'Una kuksa essenziale in betulla fiammata, con lo stesso legno e la stessa finitura all’olio di papavero delle tazze intarsiate di Pahkataide, senza decorazione. La venatura rende ogni pezzo diverso, e contiene circa 1,5 dl.',
    specs: [
      'Betulla fiammata',
      'Circa 1,5 dl, ogni pezzo è unico',
      'Sciacquare con acqua, senza detersivo',
      'Prodotta in Finlandia',
    ],
    specLabels: [undefined, undefined, undefined, 'Origine'],
  },
  'koivumaa-kuksa-reindeer-bone': {
    name: 'Kuksa E. Koivumaa in radica di betulla con osso di renna',
    description:
      'Una kuksa ricavata in modo tradizionale da una radica di betulla, con due fori per le dita nel manico e un ornamento in osso di renna. La radica non scotta le labbra, ed è per questo la tazza classica per il caffè caldo accanto al fuoco. Va preparata con caffè nero, poi basta sciacquarla.',
    specs: [
      'Radica di betulla, ornamento in osso di renna sul manico',
      'Circa 1,5 dl, due fori nel manico',
      'Sciacquare con acqua, senza detersivo né lavastoviglie',
    ],
  },
  'koivumaa-burl-kuksa': {
    name: 'Kuksa E. Koivumaa in radica di betulla, un foro',
    description:
      'La versione essenziale della kuksa in radica dello stesso artigiano: radica di betulla lavorata in modo tradizionale, un foro per le dita nel manico, circa 1,5 dl. Va preparata con caffè nero, il cui olio chiude i pori aperti del legno, e non va mai in lavastoviglie.',
    specs: [
      'Radica di betulla',
      'Circa 1,5 dl, un foro nel manico',
      'Sciacquare con acqua, senza detersivo né lavastoviglie',
    ],
  },
  'fazer-super-salmiakki': {
    name: 'Pastiglie Fazer Super Salmiakki 80 g',
    description:
      'Il più duro dei classici del salmiakki, venduto nella stessa scatola a forma di latta dagli anni settanta. Datene una a un ospite e in dieci secondi saprete a quale schieramento appartiene.',
    specs: ['80 g'],
  },
  'fazer-pantteri-salmiakki': {
    name: 'Caramelle al salmiakki Fazer Pantteri 210 g',
    description:
      'Salmiakki morbido al mentolo, prodotto da oltre cinquant’anni. Più delicato delle pastiglie, quindi è il sacchetto da portare a chi non ha mai assaggiato il salmiakki.',
    specs: ['210 g'],
  },
  'halva-salmiakkiruutu': {
    name: 'Halva Salmiakkiruutu 170 g',
    description:
      'Halva produce questo salmiakki a quadretti dal 1960 a Pitäjänmäki, a Helsinki. Più gommoso delle versioni di Fazer e quello che i finlandesi sostengono sia l’originale.',
    specs: ['170 g', 'Prodotto a Pitäjänmäki, Helsinki, dal 1960'],
  },
  'sisu-xylitol-salmiakki': {
    name: 'Pastiglie di salmiakki Sisu Xylitol 36 g',
    description:
      'Salmiakki dolcificato con xilitolo e con il marchio dell’Associazione dentistica finlandese. La scatolina sta nella tasca di un cappotto, ed è per questo che finisce in ogni auto finlandese.',
    specs: ['36 g', 'Xilitolo. Porta il marchio dell’Associazione dentistica finlandese'],
    specLabels: [undefined, 'Dolcificante'],
  },
  'leijona-tar-liquorice': {
    name: 'Pastiglie di liquirizia al catrame Leijona 32 g',
    description:
      'Liquirizia aromatizzata al catrame di pino, prodotta dal 1933. Il catrame è un gusto finlandese che finisce nelle caramelle, nel sapone da sauna e perfino nel gelato, e questo è il modo più economico per provarlo.',
    specs: ['32 g'],
  },
  'fazer-hazelnut-chocolate': {
    name: 'Karl Fazer cioccolato al latte con nocciole intere 200 g',
    description:
      'La tavoletta blu con nocciole intere nel cioccolato al latte. Fazer usa lo stesso incarto blu dal 1922, ed è per questo che è quella che i finlandesi portano all’estero.',
    specs: ['200 g'],
  },
  'fazer-light-milk-chocolate': {
    name: 'Karl Fazer cioccolato al latte chiaro 180 g',
    description:
      'Una versione più chiara e più delicata della tavoletta blu. Se la classica vi sembra troppo dolce, prendete questa.',
    specs: ['180 g'],
  },
  'fazer-fazerina': {
    name: 'Tavoletta al tartufo di arancia Fazer Fazerina 99 g',
    description:
      'Tartufo di arancia dentro cioccolato al latte, prodotta dal 1953. Più sottile della tavoletta blu e quella che sopravvive a uno zaino senza sciogliersi in un blocco.',
    specs: ['99 g'],
  },
  'fazer-jaffa-orange': {
    name: 'Tortine all’arancia Fazer Jaffa 300 g',
    description:
      'Base di pan di Spagna, marmellata di arance e cioccolato fondente sopra. Né biscotto né torta, ed è esattamente la discussione che i finlandesi riaprono ogni volta.',
    specs: ['300 g'],
  },
  'north-outdoor-arctic-250-balaclava': {
    name: 'Passamontagna in merino North Outdoor Arctic 250',
    description:
      'La maglia più calda che North Outdoor produce, sagomata per stare sotto un casco. In motoslitta o su una slitta trainata dalle renne il freddo entra prima dal collo e dalle guance, ed è quella apertura che questo strato chiude.',
    specs: [
      'Maglia in lana merino, grammatura Arctic 250',
      'Taglia unica',
      'Nero',
      'North Outdoor, Oulu, Finlandia',
    ],
  },
  'north-outdoor-kevo-gloves': {
    name: 'Guanti in merino North Outdoor Kevo',
    description:
      'Lavorati a maglia con merino senza mulesing nel maglificio di proprietà di North Outdoor a Oulu. Abbastanza sottili da stare sotto una muffola nei giorni più freddi e da tenere addosso quando si scatta una foto.',
    specs: ['100 % lana merino, senza mulesing', 'M, L, XL', 'Blu indaco', 'Lavorati a maglia a Oulu, Finlandia'],
  },
  'north-outdoor-heavyweight-gaiter': {
    name: 'Scaldacollo in merino North Outdoor Heavyweight',
    description:
      'Pile di merino, abbastanza spesso da tirarlo su oltre il naso mentre si aspetta che le luci compaiano. La lana continua a isolare quando il fiato vi si condensa dentro, ed è tutto lì il problema dello stare fermi al freddo.',
    specs: ['Pile di merino', 'Taglia unica', 'Nero', 'North Outdoor, Oulu, Finlandia'],
  },
  'north-outdoor-sointu-cardigan': {
    name: 'Cardigan in merino North Outdoor Sointu',
    description:
      'Un cardigan in merino dal taglio squadrato che si legge come capo da casa ma funziona come strato intermedio. L’unico pezzo di questo insieme che indossereste a cena dopo il safari.',
    specs: ['100 % lana merino', 'XS–2XL', 'Latte', 'North Outdoor, Oulu, Finlandia'],
  },
  'north-outdoor-arctic-260-zip-neck': {
    name: 'Maglia con zip in merino North Outdoor Arctic 260',
    description:
      'Una maglia a collo alto con zip in 100 per cento merino, abbastanza spessa da portarla da sola in casa e da fare da strato intermedio fuori. La zip è il punto: la aprite camminando e la chiudete quando vi fermate.',
    specs: [
      '100 % lana merino',
      'S–3XL',
      'Grigio granito e nero',
      'North Outdoor, Oulu, Finlandia',
      'Collo alto protettivo, zip coperta, fondo posteriore allungato',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Dettagli'],
  },
  'halti-hossa-baselayer-men': {
    name: 'Set intimo in merino Halti Hossa II, uomo',
    description:
      'Maglia e calzamaglia nella stessa confezione, merino da 190 g a 20,5 micron. Lo strato più vicino alla pelle decide se il resto dell’abbigliamento funziona, ed è proprio quello che la maggior parte dei visitatori non porta.',
    specs: [
      '100 % lana merino, 190 g/m², 20,5 micron, costine 1x1',
      'Maglia a maniche lunghe e calzamaglia',
      'Lavare al rovescio',
    ],
    specLabels: [undefined, 'Contenuto del set', undefined],
  },
  'halti-hossa-baselayer-women': {
    name: 'Set intimo in merino Halti Hossa II, donna',
    description:
      'Lo stesso set in merino da 190 g tagliato per donna. La lana trattiene il calore quando si suda camminando e poi ci si ferma a guardare, ed è così che è fatta davvero una giornata in Lapponia.',
    specs: [
      '100 % lana merino, 190 g/m², 20,5 micron, costine 1x1',
      'Maglia a maniche lunghe e calzamaglia',
      'Lavare al rovescio',
    ],
    specLabels: [undefined, 'Contenuto del set', undefined],
  },
  'halti-heatgrid-midlayer': {
    name: 'Giacca di strato intermedio Halti HeatGrid, donna',
    description:
      'Uno strato intermedio Halti leggero e tecnico, in morbida maglia a nido d’ape che traspira e allontana l’umidità dalla pelle. Ha una cerniera frontale intera, collo alto, tasche con cerniera, polsini e fondo elasticizzati.',
    specs: [
      'Maglia a nido d’ape sul rovescio 95 % poliestere riciclato / 5 % elastan; maglia jersey 92 % poliestere riciclato / 8 % elastan',
      'Lavare al rovescio con colori simili, chiudere le cerniere prima del lavaggio',
    ],
  },
  'halti-taival-dx-jacket': {
    name: 'Giacca guscio Halti Taival DX 3L, uomo',
    description:
      'Un guscio a tre strati con 20 000 mm di impermeabilità e 30 000 g di traspirabilità. I due numeri contano in direzioni diverse: il primo tiene fuori il nevischio, il secondo lascia uscire il sudore di una salita invece di farlo gelare dentro.',
    specs: [
      'Guscio in maglia DrymaxX Nano, 3 strati. 100 % poliestere riciclato',
      '20 000 mm',
      '30 000 g/m²/24 h',
    ],
    specLabels: [undefined, 'Impermeabilità', 'Traspirabilità'],
  },
  'halti-sykli-ski-gloves': {
    name: 'Guanti da sci Halti Sykli',
    description:
      'Guanto impermeabile con 120 g di imbottitura, palmo in pelle e polsino snowlock che impedisce alla neve di compattarsi al polso quando si cade. Fatto per lo sci con gli impianti a Levi o Ylläs più che per camminare in città.',
    specs: [
      'DrymaxX, si estende in 4 direzioni, impermeabile e antivento. Palmo in pelle',
      '120 g Microtherm Dynamic',
      '15 000 mm / 15 000 g/m²/24 h',
    ],
    specLabels: [undefined, 'Imbottitura', 'Impermeabilità e traspirabilità'],
  },
  'halti-merino-socks-2pack': {
    name: 'Calze in lana merino Halti, set da 2',
    description:
      'Due paia, perché quello che avete indossato oggi non sarà asciutto domani mattina. Misto merino invece di pura lana, che regge meglio i lavaggi ripetuti in lavatrice.',
    specs: [
      '40 % lana merino, 40 % acrilico, 19 % poliammide, 1 % elastan',
      '2 paia',
      'Prodotte in Europa',
    ],
    specLabels: [undefined, 'Formato confezione', undefined],
  },
  'husky-farm-safari-rovaniemi': {
    name: 'Visita a una fattoria di husky e safari per due, Rovaniemi',
    description:
      'Una carta regalo per una visita guidata a una vera fattoria di husky vicino a Rovaniemi, seguita da un giro in slitta trainata dai cani nel bosco invernale. Si compra ora, arriva via e-mail e chi la riceve sceglie la data.',
    specs: [
      'Visita guidata a una fattoria di husky e safari in slitta per due. La guida può venirvi a prendere entro 10 km da Rovaniemi',
      'Circa 3,5 h',
      '2 persone',
      'Rovaniemi. Il luogo esatto viene confermato alla prenotazione',
      'Mesi invernali, da novembre ad aprile',
      'Inglese',
      'Valida 3 anni',
    ],
    specLabels: [undefined, 'Durata', 'Partecipanti', 'Luogo', 'Stagione', 'Lingua della guida', 'Carta regalo'],
  },
  'reindeer-safari-rovaniemi': {
    name: 'Safari con le renne per due, Rovaniemi',
    description:
      'Un safari serale in una vera fattoria di renne vicino a Rovaniemi: un anello di 2,5 km dietro le renne, una visita alla fattoria e un piccolo spuntino. Nelle notti limpide l’aurora boreale può comparire, ma nessuno può prometterlo.',
    specs: [
      'Ingresso a una fattoria di renne e percorso di 2,5 km in slitta trainata dalle renne per due, con piccolo spuntino. Prelievo entro 10 km da Rovaniemi',
      'Da 2,5 a 3 ore',
      '2 persone',
      'Rovaniemi. Il luogo esatto viene confermato alla prenotazione',
      'Mesi invernali, da dicembre a marzo. Il safari parte di sera',
      'Inglese',
      'Valida 3 anni',
    ],
    specLabels: [undefined, 'Durata', 'Partecipanti', 'Luogo', 'Stagione', 'Lingua della guida', 'Carta regalo'],
  },
  'aurora-tour-kilpisjarvi': {
    name: 'Aurora boreale in motoslitta per due, Kilpisjärvi',
    description:
      'Kilpisjärvi è nota per il suo cielo notturno eccezionalmente limpido. Un breve tragitto in motoslitta porta voi due in un punto dove osservare l’aurora nella quiete totale della natura, con bevande calde contro il freddo. La sera dalle 20.00 alle 23.00, con riserva meteo.',
    specs: [
      'Tour guidato dell’aurora boreale per due, circa 15 km in motoslitta, bevande calde incluse',
      '3 ore, dalle 20.00 alle 23.00',
      '2 persone',
      'Kilpisjärvi',
      '18 anni per guidare, 8 anni sulla slitta',
      'Valida 3 anni',
    ],
    specLabels: [undefined, 'Durata', 'Partecipanti', 'Luogo', 'Limite di età', 'Carta regalo'],
  },
  'glass-igloo-night-levi': {
    name: 'Notte in igloo di vetro per due, Levi',
    description:
      'Una notte in due in un igloo di vetro riscaldato in alto sul monte Levi. Il vetro riscaldato elettricamente resta limpido mentre cercate l’aurora dal letto matrimoniale motorizzato. Drink di benvenuto, accappatoi e colazione inclusi, con angolo cottura, doccia e WC propri.',
    specs: [
      'Una notte per due in un igloo di vetro di classe Superior, drink di benvenuto, accappatoi e pantofole, colazione. Trasporto non incluso',
      '1 notte, check-out alle 11.00',
      '2 persone',
      'Levi, in alto sul monte',
      '23 m², vetro riscaldato antiappannamento, angolo cottura, doccia e WC, letto matrimoniale motorizzato',
      'Valida per soggiorni 27.08-10.11 e 01.04-12.04',
    ],
    specLabels: [undefined, 'Durata', 'Partecipanti', 'Luogo', 'Igloo', 'Carta regalo'],
  },
  'gold-panning-day-inari': {
    name: 'Giornata di ricerca dell’oro per quattro, Inari',
    description:
      'Una giornata in una concessione aurifera attiva a Inari per un gruppo di quattro: prima la storia, poi la setacciatura a mano e uno sguardo all’estrazione meccanica. Pasti e trasporto dal centro di Saariselkä inclusi, e l’oro trovato torna a casa con il gruppo.',
    specs: [
      'Una giornata di 5 ore di ricerca dell’oro in una concessione attiva per quattro, con guida alla setacciatura a mano e dimostrazione dell’estrazione meccanica. Pasti della giornata, attrezzatura e trasporto dal centro di Saariselkä alla concessione e ritorno inclusi',
      '5 ore',
      '4 persone',
      'Inari',
      'Stagioni di primavera ed estate',
      'Valida 3 anni',
    ],
    specLabels: [undefined, 'Durata', 'Partecipanti', 'Luogo', 'Stagione', 'Carta regalo'],
  },
  'korouoma-waterfalls-rovaniemi': {
    name: 'Cascate ghiacciate di Korouoma per due, da Rovaniemi',
    description:
      'In inverno i ruscelli che scendono lungo le pareti del canyon di Korouoma gelano in cascate di ghiaccio azzurro. L’escursione guidata di un giorno parte da Rovaniemi per il canyon, a Posio, a circa 110 km. La camminata è facile, con le ciaspole se la neve lo richiede, e lungo il percorso viene servito un pranzo leggero.',
    specs: [
      'Escursione guidata alle cascate ghiacciate di Korouoma per due, con trasferimenti, pranzo leggero e spuntino. Ritiro dei partecipanti entro 10 km dal centro di Rovaniemi',
      'Circa 7 ore, trasferimenti compresi',
      '2 persone',
      'Canyon di Korouoma, Posio. Partenza da Rovaniemi',
      'Mesi invernali, da novembre ad aprile',
      'Inglese',
      'Valida 3 anni',
    ],
    specLabels: [undefined, 'Durata', 'Partecipanti', 'Luogo', 'Stagione', 'Lingua della guida', 'Carta regalo'],
  },
  'amethyst-mine-snowshoe-luosto': {
    name: 'Ciaspolata alla miniera di ametista di Luosto per due',
    description:
      'Una giornata guidata da Rovaniemi alla miniera di ametista in cima al Lampivaara, nel parco nazionale di Pyhä-Luosto. Prima si attraversa il parco con le ciaspole, poi un trenino delle nevi sale fino alla miniera. Nella miniera ognuno può scavare da sé, e l’ametista che trova resta sua.',
    specs: [
      'Ciaspolata guidata e visita alla miniera di ametista per due, con trasferimenti, spuntino alla sosta e tutta l’attrezzatura. Si possono prendere in prestito indumenti caldi e scarponi',
      'Circa 7 ore',
      '2 persone',
      'Lampivaara, Luosto. Partenza da Rovaniemi',
      'Mesi invernali, da dicembre ad aprile',
      'Inglese',
      'Valida 3 anni',
    ],
    specLabels: [undefined, 'Durata', 'Partecipanti', 'Luogo', 'Stagione', 'Lingua della guida', 'Carta regalo'],
  },
  'midnight-sun-canoe-rovaniemi': {
    name: 'Gita in canoa sotto il sole di mezzanotte per due, Rovaniemi',
    description:
      'Una pagaiata serale guidata vicino a Rovaniemi nella luce del sole di mezzanotte, che si chiude con uno spuntino accanto al fuoco. La guida spiega le basi prima della partenza, quindi non serve esperienza. Le uscite si fanno d’estate, da giugno ad agosto.',
    specs: [
      'Gita guidata in canoa per due con attrezzatura, istruzioni di pagaiata e sicurezza, uno spuntino accanto al fuoco e trasferimento entro 10 km da Rovaniemi',
      'Circa 3 ore',
      '2 persone',
      'Rovaniemi. Il luogo esatto viene confermato alla prenotazione',
      'Mesi estivi, da giugno ad agosto',
      'Inglese',
      'Valida 3 anni',
    ],
    specLabels: [undefined, 'Durata', 'Partecipanti', 'Luogo', 'Stagione', 'Lingua della guida', 'Carta regalo'],
  },
  'halti-snowmobile-kilpisjarvi': {
    name: 'In motoslitta sulla cima dell’Halti per due, Kilpisjärvi',
    description:
      'L’Halti è il punto più alto della Finlandia, proprio al confine con la Norvegia. L’escursione guidata in motoslitta da Kilpisjärvi attraversa la natura selvaggia del Käsivarsi fino al cippo di confine 303B, circa 110 km in tutto, e in cima si può firmare il libro dei visitatori dell’Halti. Si parte alle 10 e si rientra alle 16, ed è richiesta esperienza di guida della motoslitta.',
    specs: [
      'Escursione guidata in motoslitta di circa 110 km per due, abbigliamento da motoslitta (tuta, stivali, casco), succo caldo e un dolce, permesso di pista, IVA e assicurazioni',
      'Circa 6 ore',
      '2 persone',
      'Kilpisjärvi',
      'Dal 1° marzo al 10 maggio, meteo permettendo',
      '18 anni per guidare, 8 anni sulla slitta. Esperienza di guida richiesta',
      'Valida 3 anni',
    ],
    specLabels: [undefined, 'Durata', 'Partecipanti', 'Luogo', 'Stagione', 'Limite di età', 'Carta regalo'],
  },
  'fell-ice-fishing-kilpisjarvi': {
    name: 'Pesca sul ghiaccio sui fjell per due, Kilpisjärvi',
    description:
      'Una guida vi porta in motoslitta sui fjell vicino a Kilpisjärvi, circa 15 km in tutto, dove si pesca da un buco nel ghiaccio seduti su una pelle di renna. Possono abboccare salmerini o trote, e l’attrezzatura da pesca è fornita. L’uscita va dalle 11.15 alle 14.15.',
    specs: [
      'Escursione guidata di circa 15 km per due, abbigliamento da motoslitta (tuta, stivali, casco), attrezzatura da pesca, succo caldo e un dolce, IVA e assicurazioni',
      'Circa 3 ore',
      '2 persone',
      'Kilpisjärvi',
      'Dal 20 novembre al 10 maggio, meteo permettendo',
      '18 anni per guidare, 8 anni sulla slitta',
      'Valida 3 anni',
    ],
    specLabels: [undefined, 'Durata', 'Partecipanti', 'Luogo', 'Stagione', 'Limite di età', 'Carta regalo'],
  },
  'wilderness-cabin-ivalo': {
    name: 'Due notti in pensione completa in baita per due, Ivalo',
    description:
      'Due notti per due in una baita sulla riva del fiume Ivalojoki, accanto alla natura selvaggia di Hammastunturi, con una sauna tutta sua in riva all’acqua. Tutti i pasti, dalla cena del giorno di arrivo al pranzo del giorno di partenza, sono compresi e preparati con prodotti della Lapponia come renna, pesce e bacche. Compreso anche il trasferimento da Ivalo e ritorno. Dal lunedì al venerdì, da metà giugno a fine ottobre.',
    specs: [
      '2 notti per due in una baita nella natura, uso libero di una sauna separata in riva all’acqua, pensione completa con caffè pomeridiano accanto al fuoco e trasferimento dal centro o dall’aeroporto di Ivalo e ritorno',
      '2 notti',
      '2 persone',
      'Sulla riva del fiume Ivalojoki. Il luogo esatto viene confermato alla prenotazione',
      'Dal lunedì al venerdì, dal 15 giugno al 30 ottobre',
      'Finlandese e inglese',
      'Valida 3 anni',
    ],
    specLabels: [undefined, 'Durata', 'Partecipanti', 'Luogo', 'Stagione', 'Lingua', 'Carta regalo'],
  },
  'katka-snowmobile-levi': {
    name: 'Safari in motoslitta nella natura selvaggia di Kätkä, Levi',
    description:
      'Un safari in motoslitta di circa 30 km da Levi nella natura selvaggia del Kätkätunturi. La sosta è all’Hanhipirtti, un caffè in una vecchia baita piena di oggetti retrò, prima di tornare a Levi. Non serve esperienza di motoslitta, e la carta regalo vale per una persona dai 13 anni in su.',
    specs: [
      'Safari guidato in motoslitta di circa 30 km per una persona, con sosta al caffè Hanhipirtti. Abbigliamento invernale compreso',
      'Circa 2-3 ore',
      '1 persona dai 13 anni in su',
      'Levi. Partenza da Leviraitti 13, Sirkka',
      'Inverno, da dicembre a marzo',
      'Inglese e finlandese',
      'Valida 3 anni',
    ],
    specLabels: [undefined, 'Durata', 'Partecipanti', 'Luogo', 'Stagione', 'Lingua', 'Carta regalo'],
  },
  'foodin-six-mushroom-blend': {
    name: 'Foodin miscela di sei funghi 40 g',
    description:
      'Chaga, reishi, criniera di leone, cordyceps, shiitake e maitake in un solo barattolo, macinati per caffè o frullati. Un barattolo copre l\'intero scaffale dei funghi funzionali.',
    specs: ['40 g', 'Chaga, reishi, criniera di leone, cordyceps, shiitake, maitake'],
  },
  'foodin-chaga-tincture': {
    name: 'Foodin tintura di chaga 50 ml',
    description:
      'Chaga finlandese in gocce invece che in polvere: un flacone da 50 ml che non richiede infusione. Il formato da viaggio dell\'intera idea del chaga.',
    specs: ['50 ml', 'Chaga finlandese'],
  },
  'kaavi-chaga-chunks': {
    name: 'Kaavi Porcini pezzi di chaga 100 g',
    description:
      'Pezzi grossolani di chaga di betulla finlandese per un\'infusione lenta, come lo si beveva qui molto prima della parola superfood. Un sacchetto basta per molte teiere.',
    specs: ['100 g', 'Sobbollire come un tè a lunga infusione'],
    specLabels: [undefined, 'Uso'],
  },
  'puhdistamo-instant-chaga': {
    name: 'Puhdistamo polvere di estratto di chaga istantaneo 28 g',
    description:
      'Chaga che si scioglie direttamente in acqua calda, senza bollitura. Il barattolo da 28 grammi sta in qualsiasi bagaglio e viaggia meglio di un sacchetto di pezzi.',
    specs: ['28 g'],
  },
  'puhdistamo-conifer-extract': {
    name: 'Puhdistamo estratto di conifere 50 ml',
    description:
      'Un estratto di conifere finlandesi da assumere in gocce. Il profumo di bosco di un\'escursione in Lapponia in un flacone tascabile.',
    specs: ['50 ml'],
  },
  'nb-little-my-beanie': {
    name: 'Berretto a maglia grossa Mymble',
    description:
      'Berretto spesso a maglia con la Piccola My sul risvolto, in una mistura di lana che mantiene la forma dopo una settimana passata a metterlo e toglierlo. Una taglia adulto, e l unico personaggio dei Moomin che approverebbe il tempo che fa in Lapponia.',
    specs: [
      'Acrilico, nylon e lana',
      'Adulto, taglia unica',
      'Prodotto Moomin ufficiale',
    ],
    specLabels: [undefined, undefined, 'Licenza'],
  },
  'nb-moomintroll-mittens': {
    name: 'Muffole Moomintroll',
    description:
      'Muffole in maglia foderate di morbido pile, alte 24 centimetri perché il polsino superi la manica della giacca. Taglia adulto, ed economiche abbastanza da sopravvivere alla perdita di una sulla slitta trainata dagli husky.',
    specs: [
      '100 % acrilico, fodera in pile',
      'Adulto, altezza 24 cm, larghezza sopra il pollice 9,5 cm',
      'Prodotto Moomin ufficiale',
    ],
    specLabels: [undefined, undefined, 'Licenza'],
  },
  'nb-moomintroll-love-socks': {
    name: 'Calzini retro Moomintroll Love',
    description:
      'Calzini azzurri a coste con Moomintroll ricamato dentro un cuore rosa sullo stinco, ricamato e non stampato, quindi resiste al lavaggio. Una taglia copre dalla EU 36 alla 42.',
    specs: [
      '67 % cotone, 25 % poliestere, 4 % elastodiene, 3 % nylon, 1 % elastan',
      'Taglia unica, EU 36-42',
      'Motivo ricamato',
    ],
    specLabels: [undefined, undefined, 'Dettaglio'],
  },
  'nb-moomin-classics-tee': {
    name: 'T-shirt pesante Moomin Classics',
    description:
      'Una t-shirt in cotone da 260 grammi color lavanda, vestibilità squadrata, con un piccolo Moomintroll ricamato sul petto invece di una stampa grande. Abbastanza pesante da cadere dritta invece di aderire.',
    specs: [
      '100 % cotone, 260 g/m2',
      'Unisex, vestibilità squadrata, dalla XS alla XXL',
      'Vestibilità squadrata, il negozio consiglia una taglia in meno',
    ],
    specLabels: [undefined, undefined, 'Nota sulla taglia'],
  },
  'nb-pippi-tee': {
    name: 'T-shirt Pippi Calzelunghe',
    description:
      'Pippi stampata in Finlandia su una t-shirt in cotone da 240 grammi, vestibilità dritta unisex con orlo più lungo della media. In certe case Astrid Lindgren viaggia più lontano dei Moomin.',
    specs: [
      '100 % cotone, 240 g/m2',
      'Unisex, vestibilità dritta, dalla M alla XXL',
      'Stampata in Finlandia',
    ],
  },
  'nb-moomintroll-hoodie': {
    name: 'Felpa con cappuccio Moomintroll',
    description:
      'Una felpa con cappuccio da 300 grammi in cotone e poliestere, stampata in Finlandia, vestibilità dritta unisex. Esattamente lo strato in cui si vive davvero in una sera in baita, una volta che la sauna si è raffreddata.',
    specs: [
      '65 % cotone, 35 % poliestere, 300 g/m2',
      'Unisex, vestibilità dritta, dalla XS alla XXL',
      'Stampata in Finlandia',
    ],
  },
  'nb-kunnas-kalevala-tote': {
    name: 'Borsa di tela Mauri Kunnas Il Kalevala dei cani',
    description:
      'Una borsa di cotone stampata con le illustrazioni di Mauri Kunnas tratte da Il Kalevala dei cani, la sua versione canina del poema epico nazionale finlandese. La cosa più economica di questo negozio che spiega comunque un intero paese.',
    specs: [
      '100 % cotone',
      '38 x 42 cm',
      'Prodotto Mauri Kunnas ufficiale',
    ],
    specLabels: [undefined, undefined, 'Licenza'],
  },
  'sk-marimekko-unikko-crossbody': {
    name: 'Borsa a tracolla Marimekko Neat Crossbody Unikko',
    description:
      'Il papavero Unikko su una borsa a tracolla della misura giusta per telefono, portafoglio e un paio di guanti. Unikko fu disegnato nel 1964 dopo che Armi Ratia aveva vietato le stampe floreali, ed è sopravvissuto a quel divieto per sessant anni.',
    specs: [
      'Neat Crossbody, taglia M',
      'Unikko, blu e blu scuro',
    ],
    specLabels: ['Modello', 'Fantasia'],
  },
  'sk-moomin-duvet-set': {
    name: 'Set copripiumino Moomin 150 x 210 cm, Sydänkäpyset',
    description:
      'Set letto in cotone certificato GOTS, con Moomintroll e la Signorina Snork. Il nome finlandese della fantasia, Sydänkäpyset, descrive proprio il rapporto che il disegno racconta.',
    specs: [
      'Copripiumino 150 x 210 cm',
      'GOTS, il Global Organic Textile Standard',
    ],
    specLabels: [undefined, 'Certificazione'],
  },
  'sk-novita-wonder-wool': {
    name: 'Filato Novita Wonder Wool DK 50 g',
    description:
      'Filato di pura lana in spessore DK di Novita, il lanificio che rifornisce le maglieriste finlandesi dal 1928. Un gomitolo da 50 grammi contiene 112 metri, e i ferri consigliati sono da 4 mm.',
    specs: [
      '100 % lana',
      'Gomitolo da 50 g, 112 m',
      '4 mm',
    ],
    specLabels: [undefined, undefined, 'Ferri consigliati'],
  },
  'sk-aromageddon-sauna-scent': {
    name: 'Essenza per sauna Aromageddon Hankihorppy 15 ml',
    description:
      'Menta e cacao come essenza per sauna, cosa che suona sbagliata finché non hai passato un intero inverno finlandese. Da due a quattro gocce in un mestolo d acqua, non sulle pietre.',
    specs: [
      '15 ml',
      'Da 2 a 4 gocce in un mestolo d acqua',
    ],
    specLabels: [undefined, 'Uso'],
  },
  'sk-muurla-moomin-bottle': {
    name: 'Bottiglia di vetro Moomin Muurla 1 l, Mele',
    description:
      'Una bottiglia in vetro sodico con tappo meccanico, per acqua o succo in tavola invece del cartone. Lavabile in lavastoviglie, un litro, e la fantasia Mele è quella estiva.',
    specs: [
      '1 l',
      'Vetro sodico, tappo meccanico',
      'Lavabile in lavastoviglie',
    ],
    specLabels: [undefined, undefined, 'Manutenzione'],
  },
  'nb-kunnas-kalevala-beanie': {
    name: 'Berretto Il Kalevala dei cani',
    description:
      'Nel 1992 Mauri Kunnas trasformò il Kalevala in un’epopea canina, e il berretto porta quel disegno. Poliestere riciclato, una taglia adulta, e tanto leggero da finire in tasca appena l’autobus si scalda.',
    specs: [
      '100 % poliestere riciclato',
      'Adulto, taglia unica',
      'Mauri Kunnas, Il Kalevala dei cani',
    ],
    specLabels: [undefined, undefined, 'Illustrazione'],
  },
  'nb-little-my-mittens': {
    name: 'Muffole Mimla la piccola',
    description:
      'Muffole rosse in maglia con il viso di Mimla la piccola sul dorso di ogni mano, foderate in acrilico. Sono elastiche, quindi la taglia unica va bene alla maggior parte delle persone, e sono un prodotto Moomin ufficiale.',
    specs: [
      '49 % viscosa, 31 % poliestere, 20 % nylon; fodera 100 % acrilico',
      'Taglia unica, elasticizzate',
      'Prodotto Moomin ufficiale',
    ],
    specLabels: [undefined, undefined, 'Licenza'],
  },
  'nb-kunnas-santa-mug': {
    name: 'Bicchiere da viaggio Babbo Natale',
    description:
      'Kunnas ha disegnato il Babbo Natale del Korvatunturi come lo immaginano i bambini finlandesi, ed eccolo su un bicchiere da 450 ml in PLA invece che in plastica fossile. La fascia in silicone è quella che si stringe quando il caffè scotta troppo per la mano nuda.',
    specs: [
      '450 ml',
      'Bicchiere e coperchio in PLA, fascia in silicone per alimenti',
      'Mauri Kunnas',
    ],
    specLabels: [undefined, undefined, 'Illustrazione'],
  },
  'nb-little-my-thermal-bottle': {
    name: 'Bottiglia termica Mimla la piccola 0,55 l',
    description:
      'Acciaio a doppia parete, 550 millilitri, e il produttore dichiara sei ore di tenuta al caldo. È più o meno un safari in motoslitta, cioè esattamente la prova per cui questa bottiglia si compra.',
    specs: [
      '550 ml',
      'Acciaio inox, coperchio in PP, guarnizione in silicone',
      'Sei ore secondo il produttore',
    ],
    specLabels: [undefined, undefined, 'Tiene al caldo'],
  },
  'nb-little-my-neckpillow': {
    name: 'Cuscino da viaggio Mimla la piccola',
    description:
      'Memory foam sotto una fodera morbida, per il treno notturno Helsinki–Rovaniemi o il volo di ritorno. Abbastanza piccolo da agganciarlo alla borsa, l’unico tipo di cuscino da viaggio che poi si tiene davvero.',
    specs: [
      'Memory foam, fodera morbida',
      'Prodotto Moomin ufficiale',
    ],
    specLabels: [undefined, 'Licenza'],
  },
  'nb-moomintroll-love-cushion': {
    name: 'Cuscino Moomin Love',
    description:
      'Un cuscino sagomato come Moomin invece del solito quadrato stampato, in più misure dai 45 ai 75 centimetri di altezza. Il genere di cosa che finisce sul divano della baita e lì rimane.',
    specs: [
      'Poliestere',
      'Più misure, altezza 45–75 cm',
      'Prodotto Moomin ufficiale',
    ],
    specLabels: [undefined, undefined, 'Licenza'],
  },
  'nb-little-my-poster': {
    name: 'Poster Mimla la piccola',
    description:
      'Disegnato e stampato a Helsinki su carta silk da 200 grammi, in 30 × 40 o 50 × 70. Un poster si arrotola in un tubo e non pesa nulla, cosa che non si può dire di quasi niente di ciò che si porta a casa dalla Lapponia.',
    specs: [
      'Carta silk, 200 g',
      '30 × 40 cm o 50 × 70 cm',
      'Disegnato e stampato a Helsinki',
    ],
    specLabels: [undefined, undefined, 'Produzione'],
  },
  'nb-moomin-novels-poster': {
    name: 'Poster dei romanzi Moomin',
    description:
      'Le copertine dei romanzi Moomin di Tove Jansson su un unico foglio, stessa stampa di Helsinki e stessi due formati dei poster dei personaggi. Per chi in famiglia legge, non per chi colleziona tazze.',
    specs: [
      'Carta silk, 200 g',
      '30 × 40 cm o 50 × 70 cm',
      'Disegnato e stampato a Helsinki',
    ],
    specLabels: [undefined, undefined, 'Produzione'],
  },
  'sk-finland-beanie': {
    name: 'Berretto Finlandia, blu e bianco',
    description:
      'Il berretto con pompon blu e bianco e la scritta FINLAND sul bordo, indossato in tribuna e poi per tutto il resto dell’inverno. Lavaggio in lavatrice a 30.',
    specs: [
      'FINLAND',
      'Lavaggio in lavatrice 30 °C',
    ],
    specLabels: ['Scritta', 'Manutenzione'],
  },
  'sk-finland-tube-scarf': {
    name: 'Scaldacollo Finlandia',
    description:
      'Un tubolare senza cuciture con il motivo della bandiera finlandese, da tirare sul viso quando il vento scende dal fjäll. Sotto i sette euro, ed è per questo che se ne comprano tre.',
    specs: [
      'Bandiera finlandese',
      'Lavaggio a mano',
    ],
    specLabels: ['Motivo', 'Manutenzione'],
  },
  'sk-little-my-sauna-cushion': {
    name: 'Cuscino da sauna Mimla la piccola, Emendo',
    description:
      'Un cuscino da seduta per la sauna tratto dai disegni originali di Tove Jansson, prodotto su licenza da Emendo. Ciò che sta fra te e una panca a novanta gradi.',
    specs: [
      'Dai disegni originali di Tove Jansson',
      'Prodotto ufficiale su licenza Moomin Characters',
    ],
    specLabels: ['Illustrazione', 'Licenza'],
  },
  'sk-rento-sauna-hat': {
    name: 'Cappello da sauna Rento in spugna di lino',
    description:
      'La spugna di lino tiene il calore lontano da cuoio capelluto e capelli sulla panca alta. Funziona anche al contrario: in una tinozza all’aperto a febbraio tiene la testa al caldo. Lavaggio in lavatrice a 60.',
    specs: [
      'Spugna di lino',
      'Lavaggio in lavatrice 60 °C',
    ],
    specLabels: [undefined, 'Manutenzione'],
  },
  'sk-rento-birch-whisk': {
    name: 'Fascio di betulla essiccata Rento',
    description:
      'Un fascio di betulla essiccata, messo a bagno in acqua calda prima della sauna perché tornino le foglie e l’odore. Battersi con il fascio è la parte della sauna di cui gli ospiti chiedono sempre e che raramente provano.',
    specs: [
      'Betulla essiccata',
      'Ammollare prima della sauna',
    ],
    specLabels: [undefined, 'Prima dell’uso'],
  },
  'sk-suomi-hockey-jersey': {
    name: 'Maglia da tifoso Finlandia',
    description:
      'La maglia bianco-blu con SUOMI sul petto e lo stemma del leone, nel taglio che si indossa davvero per andare alla partita. Traspirante, taglie dalla M alla XXL, e entro febbraio sembra che in ogni casa finlandese ce ne sia una.',
    specs: [
      'M–XXL',
      'SUOMI e lo stemma del leone',
    ],
    specLabels: [undefined, 'Stampa'],
  },
  'sk-marimekko-unikko-bath-towel': {
    name: 'Telo bagno Marimekko Unikko 70 × 150 cm',
    description:
      'Unikko su spugna di cotone, beige e bianco, nel formato pieno 70 per 150. Il filato è al 65 % cotone biologico e al 35 % riciclato, e la parte riciclata viene dagli scarti di taglio di Marimekko.',
    specs: [
      '70 × 150 cm',
      'Spugna di cotone, 65 % biologico e 35 % riciclato',
      'Unikko, beige e bianco',
    ],
    specLabels: [undefined, undefined, 'Fantasia'],
  },
  'sk-marimekko-pieni-unikko-apron': {
    name: 'Grembiule Marimekko Pieni Unikko',
    description:
      'Un grembiule Marimekko in cotone biologico con la fantasia Pieni Unikko nei toni prugna, mirtillo rosso, bianco naturale e rosa. Ha una tasca frontale, lacci da annodare in vita e un laccetto per il collo regolabile con bottoni a pressione.',
    specs: [
      '100 % cotone biologico',
      'Larghezza 84 cm, lunghezza 85 cm',
      'Lavaggio in lavatrice 60 °C',
      'Pieni Unikko, prugna, mirtillo rosso, bianco naturale e rosa',
    ],
    specLabels: [undefined, undefined, undefined, 'Fantasia'],
  },
  'fl-taistelevat-metsot': {
    name: 'Set copripiumino in raso Taistelevat metsot, matrimoniale',
    description:
      'Ferdinand von Wright dipinse i galli cedroni in lotta nel 1886 e il quadro è diventato uno di quelli che ogni finlandese sa nominare. Finlayson lo stampa su raso di cotone in digitale, così i colori restano fedeli. Il rovescio del copripiumino è in tinta unita e sulle federe la stampa è su entrambi i lati.',
    specs: [
      'Raso di cotone',
      'Matrimoniale',
      'Ferdinand von Wright, Taistelevat metsot (I galli cedroni in lotta, 1886)',
    ],
    specLabels: [undefined, undefined, 'Opera'],
  },
  'fl-lino-linen-duvet-set': {
    name: 'Set copripiumino Lino in tessuto di lino',
    description:
      'Lino lavato con bordo ricamato, in verde lichene o marrone catrame. Il lino è pesante e cade più rigido del cotone, e a ogni lavaggio diventa più morbido invece di consumarsi.',
    specs: [
      'Lino',
      '240 × 210 + 50 × 60 cm oppure 150 × 210 + 50 × 60 cm',
      'Verde lichene o marrone catrame',
    ],
    specLabels: [undefined, undefined, 'Colori'],
  },
  'fl-elefantti-duvet-set': {
    name: 'Set copripiumino Elefantti, verde scuro',
    description:
      'Laina Koskela disegnò Elefantti nel 1969 per un concorso di design organizzato da Finlayson con l\'Istituto di arti industriali, ed è rimasto in produzione da allora. Percalle di cotone con 152 fili per pollice, per questo al tatto risulta fresco più che morbido.',
    specs: [
      'Percalle di cotone, 152 TC',
      '240 × 210 + 50 × 60 cm',
      'Laina Koskela, 1969',
    ],
    specLabels: [undefined, undefined, 'Design'],
  },
  'fl-reino-bath-towel': {
    name: 'Telo bagno Reino 80 × 160 cm',
    description:
      'Cotone biologico certificato GOTS, tessuto con un filato ritorto sottile in modo che asciughi in fretta invece di restare umido sul gancio. Misura intera da telo bagno, in marrone o rosa.',
    specs: [
      '80 × 160 cm',
      '100 % cotone biologico, certificato GOTS',
      'Marrone o rosa',
    ],
    specLabels: [undefined, undefined, 'Colori'],
  },
  // katalogin täydennys 2026-09-05
  'makia-kontio-hoodie': {
    name: 'Felpa con cappuccio Makia Kontio',
    description:
      'Felpa con cappuccio dalla vestibilità regolare in cotone biologico al 100 per cento, tinta dopo la confezione. La tintura in capo dà un colore più profondo e una mano più morbida della tintura in filo, e la tonalità conserva il suo aspetto leggermente vissuto lavaggio dopo lavaggio.',
    specs: [
      '100 % cotone biologico, tinto in capo',
      'Da S a XXL',
    ],
  },
  'makia-trademark-hoodie': {
    name: 'Felpa con cappuccio Makia Trademark',
    description:
      'La felpa più essenziale di Makia: vestibilità regolare, cotone biologico al 100 per cento e il piccolo marchio sul petto. Quella da mettere in valigia per una settimana in baita, dove la stessa felpa passa dal fuoco del mattino alla veranda della sauna la sera.',
    specs: [
      '100 % cotone biologico',
      'Da S a XXL',
    ],
  },
  'makia-moray-zip-knit': {
    name: 'Cardigan in maglia con zip Makia Moray',
    description:
      'Cardigan con zip dalla vestibilità regolare, lavorato in lana merino al 100 per cento. Il merino scalda senza ingombrare e asciuga dall\'interno, quindi funziona come strato sotto un guscio in una camminata sui fjell e da solo in un caffè riscaldato.',
    specs: [
      '100 % lana merino',
      'Da S a XXL',
    ],
  },
  'makia-form-jacket': {
    name: 'Giacca invernale Makia Form',
    description:
      'Giacca invernale lunga dalla vestibilità regolare con imbottitura in poliestere riciclato. Un polsino a costine nascosto nell\'apertura della manica chiude il polso contro il vento, e in una strada di Rovaniemi a gennaio conta più di qualsiasi elenco di caratteristiche.',
    specs: [
      'Imbottitura in poliestere riciclato, polsini a costine nascosti',
      'Da S a XXL',
    ],
  },
  'makia-martin-beanie': {
    name: 'Berretto in merino Makia Martin',
    description:
      'Berretto in lana merino al 100 per cento con una piccola etichetta, lavorato a maglia in Finlandia. L\'ingresso più economico in Makia e il capo che con più probabilità viene indossato ogni giorno da ottobre ad aprile.',
    specs: [
      '100 % lana merino',
      'Prodotto in Finlandia',
      'Taglia unica',
    ],
  },
  'makia-mari-balaclava': {
    name: 'Passamontagna in maglia Makia Mari',
    description:
      'Passamontagna lavorato a maglia in una mischia di lana, poliestere, alpaca ed elastan. Copre orecchie, collo e guance in una volta, ed è la differenza tra un giro in motoslitta e un giro in motoslitta che si ricorda per il motivo sbagliato.',
    specs: [
      'Mischia di lana, poliestere, alpaca ed elastan',
      'Taglia unica',
    ],
  },
  'halti-pehmee-merino-beanie': {
    name: 'Berretto in merino Halti Pehmee',
    description:
      'Berretto da città in lana merino al 100 per cento con doppio risvolto a costine, prodotto in Finlandia. Halti lo chiama Pehmee, morbido, ed è il berretto per i giorni in cui un berretto da sci sembrerebbe una svolta sbagliata.',
    specs: [
      '100 % lana merino',
      'Prodotto in Finlandia',
      'Asciugare in piano',
      'Taglia unica',
    ],
  },
  'halti-rockmoon-fleece-hoodie': {
    name: 'Pile con cappuccio Halti Rockmoon, uomo',
    description:
      'Pile caldo con cappuccio in tessuto elasticizzato garzato su entrambi i lati, con microtessuto antivento su cappuccio e spalle, dove il freddo entra per primo. Sotto un guscio sul fjell, da solo intorno alla baita.',
    specs: [
      'Pile elasticizzato garzato su entrambi i lati, microtessuto antivento su cappuccio e spalle',
      'Da S a XXXL',
    ],
  },
  'halti-viiri-fleece-gloves': {
    name: 'Guanti in pile Halti Viiri',
    description:
      'Guanti leggeri da 45 grammi in pile antivento Stormwall, con stampa antiscivolo in silicone sul palmo e punte touchscreen su pollice e indice, così la foto dell\'aurora si scatta senza mani nude.',
    specs: [
      'Pile Stormwall 100 % poliestere, palmo 65 % poliestere, 32 % poliammide, 3 % elastan',
      '45 g',
      'Pollice e indice',
      'Lavaggio delicato a massimo 30 °C',
    ],
    specLabels: [undefined, undefined, 'Touchscreen', undefined],
  },
  'nb-moomin-classics-beanie': {
    name: 'Berretto Moomin Classics',
    description:
      'Berretto da adulto della collezione Moomin Classics in poliestere riciclato al 100 per cento, marrone, taglia unica. Un prodotto Moomin ufficiale, ed è questo che lo distingue dalla versione da bancarella.',
    specs: [
      '100 % poliestere riciclato',
      'Adulto, taglia unica',
      'Marrone',
    ],
  },
  'nb-snufkin-mens-socks': {
    name: 'Calze da uomo Snufkin',
    description:
      'Calze da uomo con Snufkin, EU 40-45, cotone al 60 per cento con poliestere, nylon ed elastan per l\'elasticità. Il regalo Moomin più economico di questo sito che viene indossato invece che esposto.',
    specs: [
      'EU 40-45',
      '60 % cotone, 33 % poliestere, 4 % nylon, 2 % elastan, 1 % elastodiene',
    ],
  },
  'nb-hattifatteners-retro-socks': {
    name: 'Calze retrò da donna Hattifatteners',
    description:
      'Calze in stile retrò con gli Hattifatteners, EU 36-42, cotone al 67 per cento. Abbastanza elastiche perché una taglia vada bene quasi a tutte, e la prima cosa che una lettrice dei Moomin prende quando il cassetto delle calze è aperto.',
    specs: [
      'EU 36-42',
      '67 % cotone, 25 % poliestere, 4 % elastodiene, 3 % nylon, 1 % elastan',
    ],
  },
  'sk-suomi-propeller-cap': {
    name: 'Cappellino con elica da tifoso Suomi',
    description:
      'Cappellino con elica bianco e blu per la tribuna, la zona tifosi e la finale di hockey su ghiaccio al pub. Non è un copricapo serio, ed è esattamente il punto in una sera in cui gioca la Finlandia.',
    specs: [
      'Blu e bianco',
    ],
  },
  'sk-muurla-moomin-lantern-tahtihetki': {
    name: 'Lanterna Moomin Muurla Tähtihetki 18 cm',
    description:
      'Lanterna in vetro senza piombo fatta a mano della serie Tähtihetki di Muurla con dettagli dorati, 15,5 cm di diametro e 18 cm di altezza. Funziona come lanterna per candele, ciotola per i dolci di stagione o vaso per un piccolo mazzo.',
    specs: [
      'Ø 15,5 cm, altezza 18 cm',
      'Vetro senza piombo fatto a mano',
      'Lavaggio a mano',
    ],
  },
  'sk-hukka-soapstone-candle': {
    name: 'Portalumino in pietra Hukka Jätkänkynttilä',
    description:
      'Portalumino in pietra a forma di jätkänkynttilä, il ceppo spaccato che i boscaioli accendevano sulla neve. 56 mm di diametro, 100 mm di altezza, 310 grammi, per un lumino da 40 mm. Fuoco vivo su pietra fredda, in casa.',
    specs: [
      'Ø 56 x 100 mm, per un lumino Ø 40 mm',
      '0,31 kg',
      '1 portalumino',
    ],
  },
  'sk-muurla-moomin-enamel-mug-lumipyry': {
    name: 'Tazza smaltata Moomin Muurla Lumipyry 3,7 dl',
    description:
      'Tazza smaltata da 3,7 dl con anima in acciaio al carbonio e doppia smaltatura, stampata con la scena della tormenta di neve Lumipyry. Regge bevande calde e fredde, va in lavastoviglie e al fuoco da campo, non nel microonde.',
    specs: [
      '3,7 dl',
      'Acciaio al carbonio con doppia smaltatura',
      'Lavabile in lavastoviglie, non per microonde',
    ],
  },
  'sk-arabia-moomin-pitcher-moominhouse': {
    name: 'Brocca Moomin Arabia 1,0 l, Casa dei Moomin',
    description:
      'Brocca da un litro di Arabia con la Casa dei Moomin, la casa rotonda a forma di stufa che Papà Moomin ha costruito da sé e non chiude mai a chiave di notte. Con coperchio in ceramica che tiene gli insetti lontani dal succo su una tavola estiva.',
    specs: [
      '1,0 l',
      'Coperchio in ceramica incluso',
    ],
    specLabels: [undefined, 'Coperchio'],
  },
  'sk-moomin-duvet-set-merella': {
    name: 'Set copripiumino Moomin 140 x 200 cm, Merellä',
    description:
      'Copripiumino e federa in cotone con i Moomin in mare, copripiumino 140 x 200 cm e federa 50 x 70 cm, chiusura a cerniera. Lavare prima del primo uso, come ogni biancheria da letto in cotone stampato.',
    specs: [
      'Copripiumino 140 x 200 cm, federa 50 x 70 cm',
      '100 % cotone',
      'Cerniera',
    ],
    specLabels: [undefined, undefined, 'Chiusura'],
  },
  'sk-arabia-moomintroll-mini-figurine': {
    name: 'Mini statuina Moomintroll Arabia',
    description:
      'Moomintroll in ceramica fatto a mano alto circa 6 cm, disegnato da Tuulikki Pietilä negli anni 1990 e venduto nella sua confezione regalo. Le statuine si collezionano in serie, il che rende una un regalo sicuro e due un\'abitudine.',
    specs: [
      'Altezza circa 6 cm',
      'Ceramica fatta a mano',
      'Tuulikki Pietilä, anni 1990',
    ],
    specLabels: [undefined, undefined, 'Design'],
  },
  'sk-arabia-snorkmaiden-mini-figurine': {
    name: 'Mini statuina Snorkmaiden Arabia',
    description:
      'Snorkmaiden in ceramica fatta a mano alta circa 6 cm, dalla serie degli anni 1990 di Tuulikki Pietilä, nella sua confezione regalo. Accanto al Moomintroll, i due stanno sul davanzale come sulle copertine dei libri.',
    specs: [
      'Altezza circa 6 cm',
      'Ceramica fatta a mano',
      'Tuulikki Pietilä, anni 1990',
    ],
    specLabels: [undefined, undefined, 'Design'],
  },
  'sk-lapin-puukko-gift-box': {
    name: 'Coltello puukko della Lapponia con proteggilama, confezione regalo',
    description:
      'Puukko nello stile tipico della Lapponia con proteggilama, consegnato in confezione regalo. Il negozio lo presenta come il coltello per le uscite nel bosco e le faccende quotidiane, e come il genere di oggetto che si tramanda invece di sostituirlo.',
    specs: [
      'Proteggilama e confezione regalo',
    ],
    specLabels: ['Incluso'],
  },
  'sk-loimu-sauna-thermometer': {
    name: 'Termometro da sauna Loimu, betulla',
    description:
      'Termometro da sauna con cornice in betulla e quadrante leggibile. Risponde all\'unica domanda che un ospite fa prima del primo mestolo d\'acqua, e sembra fatto per una parete di tronchi più che per stare accanto a una caldaia.',
    specs: [
      'Betulla',
    ],
  },
  'sk-helsingin-villasukkatehdas-wool-socks': {
    name: 'Calze di lana Helsingin Villasukkatehdas',
    description:
      'Calze in lana cardata dell\'unica fabbrica tradizionale di calze di lana della Finlandia, lavorate a Helsinki su macchine degli anni 1950. Lana al 70 per cento senza mulesing, filata a Jämsä e tinta a Kyröskoski, in più taglie e quattro colori che prendono il nome da corteccia, muschio, lichene e notte.',
    specs: [
      '70 % lana (senza mulesing), 30 % poliammide',
      'Lavorate a Helsinki, lana filata a Jämsä e tinta a Kyröskoski',
      'Più taglie, quattro colori',
    ],
  },
  'sk-halva-salmiakkikalat': {
    name: 'Pesciolini di liquirizia salata Halva Salmiakkikalat 230 g',
    description:
      'Caramelle al salmiakki a forma di pesce di Halva, 230 grammi, il sacchetto che sta in ogni vano portaoggetti finlandese. Morso deciso, liquirizia salata intensa, e la prima cosa da porgere a un visitatore che dice di voler assaggiare la vera Finlandia.',
    specs: [
      '230 g',
    ],
  },
  'sk-kouvolan-lakritsi-500g': {
    name: 'Pezzi di liquirizia Kouvolan Lakritsi 500 g',
    description:
      'Mezzo chilo di pezzi di liquirizia morbida di Kouvola, fatti con una ricetta nata nel 1945 e messa a punto nel 1960 da uno specialista inglese della liquirizia. Così sa la liquirizia semplice quando non si aggiunge nulla per nascondere la radice.',
    specs: [
      '500 g',
      'Del 1945, rivista nel 1960',
    ],
    specLabels: [undefined, 'Ricetta'],
  },
  'sk-fazer-omar-chocolate-bar': {
    name: 'Tavoletta di cioccolato Fazer Omar 180 g',
    description:
      'Tavoletta limitata da 180 grammi creata per i 60 anni di Omar: il toffee Omar delicato e cremoso venduto dal 1966, dentro il cioccolato al latte Fazer con almeno il 30 per cento di cacao. In vendita solo per un periodo limitato.',
    specs: [
      '180 g',
      'Cioccolato al latte con almeno il 30 % di cacao',
      'Edizione limitata per il 60º anniversario',
    ],
    specLabels: [undefined, 'Cacao', 'Disponibilità'],
  },
  'sk-fazer-salty-suffeli-puffi': {
    name: 'Tavoletta di cioccolato Karl Fazer Salty Suffeli Puffi 160 g',
    description:
      'Il cioccolato al latte Fazer fatto con latte fresco, con croccanti soffi di mais Suffeli salati e dolci. 160 grammi, almeno il 30 per cento di cacao, e la risposta per chi non riesce a scegliere tra salato e dolce.',
    specs: [
      '160 g',
      'Cioccolato al latte con almeno il 30 % di cacao',
    ],
    specLabels: [undefined, 'Cacao'],
  },
  'sk-tyrkisk-peber-chewy': {
    name: 'Pastiglie al salmiakki Fazer Tyrkisk Peber Chewy 38 g',
    description:
      'Il salmiakki piccante di Tyrkisk Peber in una nuova pastiglia morbida da masticare al posto del guscio duro. Confezione tascabile da 38 grammi, inserita dal negozio nell\'agosto 2026, per chi vuole salmiakki e piccante nello stesso boccone.',
    specs: [
      '38 g',
    ],
  },
  'sk-tyrkisk-peber-sour-foams': {
    name: 'Caramelle morbide Fazer Tyrkisk Peber Sour Foams 150 g',
    description:
      'Caramelle morbide di schiuma con il lieve piccante di Tyrkisk Peber e gusti aspri di kiwi-fragola e limone-lime, 150 grammi. Un ingresso più dolce nella famiglia della liquirizia al pepe, e il sacchetto da aprire per primo in un gruppo misto.',
    specs: [
      '150 g',
    ],
  },
  'sk-marianne-toffee-rae': {
    name: 'Confetti di cioccolato Fazer Marianne Toffee 150 g',
    description:
      'La serie di confetti Marianne in versione toffee: un guscio lucido e croccante attorno a un cuore di cioccolato al latte con almeno il 28 per cento di cacao, in un sacchetto richiudibile da 150 grammi. Pensati anche per i dolci da forno, se ne sopravvive qualcuno fino ad allora.',
    specs: [
      '150 g',
      'Cioccolato al latte con almeno il 28 % di cacao',
      'Sacchetto richiudibile',
    ],
    specLabels: [undefined, 'Cacao', 'Confezione'],
  },
  'sk-fasupala-lakritsi': {
    name: 'Wafer Fazer Fasupala Lakritsi 199 g',
    description:
      'Wafer a boccone con ripieno al gusto di liquirizia sotto una copertura al gusto di cioccolato al latte, 199 grammi, senza olio di palma. La versione alla liquirizia di un biscotto che i finlandesi mangiano già a scatole, inserita dal negozio nell\'agosto 2026.',
    specs: [
      '199 g',
      'Senza olio di palma',
    ],
    specLabels: [undefined, 'Grassi'],
  },
  'sk-finnish-flavours-cloudberry-jam': {
    name: 'Confettura premium di camemoro Finnish Flavours 250 g',
    description:
      'Confettura di camemoro con il 75 per cento di camemori finlandesi e il 20 per cento di zucchero, 250 grammi. I camemori maturano sulle torbiere della Lapponia a fine luglio e non si coltivano su larga scala, per questo un vasetto costa quanto due sacchetti di cioccolato.',
    specs: [
      '250 g',
      'Camemoro finlandese 75 %, zucchero 20 %',
    ],
  },
  'sk-lapin-liha-smoked-reindeer-soup': {
    name: 'Zuppa di renna affumicata Lapin Liha 400 g',
    description:
      'Zuppa cremosa con renna affumicata a caldo e a freddo, 400 grammi, prodotta da Lapin Liha. Da scaldare in pentola; è il sapore di un pranzo in una baita della Lapponia in una confezione che sta in valigia.',
    specs: [
      '400 g',
      'Renna affumicata a caldo 3 % e renna affumicata a freddo 3 %',
      'Scaldare in pentola',
    ],
    specLabels: [undefined, undefined, 'Preparazione'],
  },
  'sk-vaasan-ruispalat-5pack': {
    name: 'Pane di segale Vaasan Ruispalat 660 g, 12 pezzi',
    description:
      'Vaasan Ruispalat è un pane di segale integrale fatto con vero lievito madre e cereali finlandesi al 100 per cento. Il sacchetto da 660 grammi contiene 12 pezzi. Vaasan lo definisce il pane più popolare della Finlandia, e ha il 12 per cento di fibre.',
    specs: [
      '660 g, 12 pezzi',
      'Segale integrale 87 % del cereale, fibre 12 %',
    ],
  },
  'sk-poikain-parhaat-freeze-dried-blueberry': {
    name: 'Mirtilli liofilizzati Poikain Parhaat 15 g',
    description:
      'Mirtilli di bosco finlandesi interi, liofilizzati e nient\'altro: 15 grammi che in valigia non pesano nulla e sanno di agosto su una torbiera. Senza lattosio, senza glutine, vegani, senza zuccheri aggiunti né conservanti.',
    specs: [
      '15 g',
      '100 % mirtillo finlandese liofilizzato',
      'Senza lattosio, senza glutine, vegano, senza zuccheri aggiunti, senza conservanti',
    ],
    specLabels: [undefined, undefined, 'Dieta'],
  },
  'rj-arctic-warriors-blueberry-powder': {
    name: 'Polvere di mirtillo Arctic Warriors 45 g',
    description:
      'Mirtilli finlandesi essiccati interi con il loro succo e macinati, senza nulla di aggiunto, 45 grammi. Un cucchiaio nel porridge, nello yogurt o in un frullato; la stessa bacca è venduta qui tramite Ruohonjuuri, che spedisce all\'interno dell\'UE.',
    specs: [
      '45 g',
      '100 % mirtillo finlandese, essiccato intero con il succo',
    ],
  },
  'rj-poikain-parhaat-blueberry-lemonade': {
    name: 'Limonata al mirtillo Poikain Parhaat 0,33 l',
    description:
      'Limonata biologica al mirtillo prodotta a Vehmainen, Tampere, con ingredienti veri senza aromi né coloranti artificiali, bottiglia da 0,33 litri. La bibita da mettere accanto al salmiakki su un tavolo di degustazione finlandese.',
    specs: [
      '0,33 l',
      'Prodotta a Vehmainen, Tampere',
      'Biologica, senza aromi né coloranti artificiali',
    ],
    specLabels: [undefined, undefined, 'Additivi'],
  },
  'rj-nordic-koivu-birch-sap': {
    name: 'Linfa di betulla Nordic Koivu 500 ml',
    description:
      'Linfa di betulla raccolta in primavera, quando l\'albero solleva l\'acqua accumulata nelle radici, imbottigliata direttamente dall\'albero senza trattamento termico né conservanti, 500 ml. Sa di appena dolce e soprattutto di acqua fredda e pulita.',
    specs: [
      '500 ml',
      'Non trattata termicamente, senza conservanti',
    ],
    specLabels: [undefined, 'Lavorazione'],
  },
  'rj-kaino-spruce-sprout-sparkling-075': {
    name: 'Spumante analcolico biologico ai germogli di abete KAINO Drinks 0,75 l',
    description:
      'Bevanda frizzante biologica analcolica aromatizzata ai germogli di abete, i teneri getti di maggio dell\'abete rosso finlandese, in bottiglia da 0,75 litri. Prodotta a Vehmainen, Tampere, per il brindisi a una festa in cui non tutti bevono.',
    specs: [
      '0,75 l',
      'Analcolica, biologica',
      'Prodotta a Vehmainen, Tampere',
    ],
    specLabels: [undefined, 'Alcol', undefined],
  },
  'rj-yrttipaja-chaga-powder': {
    name: 'Polvere di chaga Yrttipaja 35 g',
    description:
      'Chaga macinato, il fungo nero che cresce sui tronchi di betulla, da preparare come tè: un cucchiaio per litro d\'acqua, sobbollire almeno dieci minuti e filtrare. 35 grammi, il modo più economico per provare il pakuri prima di comprare i pezzi.',
    specs: [
      '35 g',
      '1 cucchiaio per litro d\'acqua, sobbollire almeno 10 minuti e filtrare',
    ],
    specLabels: [undefined, 'Uso'],
  },
  'rj-forestly-mushroom-chips-chili': {
    name: 'Chips di funghi Forestly Foods, peperoncino 50 g',
    description:
      'Chips croccanti di shiitake da coltivazione biologica, cotti delicatamente e conditi con peperoncino, sale e pepe, 50 grammi. Umami in sacchetto, per il divano o sbriciolati su una zuppa.',
    specs: [
      '50 g',
      'Shiitake da coltivazione biologica, peperoncino, sale e pepe',
    ],
  },
  // katalogin täydennys 2026-09-05
  'sk-muurla-moomin-80v-tray': {
    name: 'Vassoio Moomin 80 anni Muurla 27 x 20 cm',
    description:
      'Vassoio da 27 x 20 cm della serie Moomin 80 anni di Muurla, lavabile in lavastoviglie. La misura che porta due tazze e un piatto di biscotti dalla cucina al divano e, una volta lì, sembra parte del tavolo.',
    specs: [
      '27 x 20 cm',
      'Lavabile in lavastoviglie',
    ],
  },
  'sk-muurla-moomin-glass-box-yhdessa': {
    name: 'Scatola di vetro Moomin Muurla Yhdessä 11,5 cm',
    description:
      'Scatola di vetro a forma di cuore della miniserie Yhdessä, insieme, di Muurla, 11,5 x 10 x 5,5 cm, lavaggio a mano, consegnata nella sua confezione di vendita. Pensata per i piccoli tesori: anelli, un biglietto piegato, un primo dentino.',
    specs: [
      '11,5 x 10 x 5,5 cm',
      'Lavaggio a mano',
      'Confezione di vendita',
    ],
    specLabels: [undefined, undefined, 'Confezione'],
  },
  // katalogin täydennys 2026-09-05
  'sk-aurora-borealis-reindeer-tealight': {
    name: 'Portalumino renna Aurora Borealis 10 cm',
    description:
      'Portalumino in metallo lucido a forma di renna, alto 10 cm. Il piccolo oggetto della Lapponia per il davanzale di dicembre, abbastanza leggero da spedire in una busta imbottita.',
    specs: [
      'Altezza 10 cm',
      'Metallo lucido',
      'Lumino',
    ],
    specLabels: [undefined, undefined, 'Per'],
  },
  'sk-muurla-moomin-bottle-05l-marjat': {
    name: 'Bottiglia di vetro Moomin Muurla 0,5 l, Bacche',
    description:
      'Bottiglia da mezzo litro in vetro sodico con tappo meccanico a tenuta e la fantasia Bacche, lavabile in lavastoviglie. Muurla le fa per succo e condimento per l\'insalata, e il mezzo litro sta nello sportello del frigo.',
    specs: [
      '0,5 l',
      'Vetro sodico, tappo meccanico',
      'Lavabile in lavastoviglie',
    ],
  },
  'nb-hattifatteners-cushion': {
    name: 'Cuscino Hattifatteners',
    description:
      'Cuscino in poliestere a forma di fila di Hattifatteners, da 45 a 75 x da 30 a 50 x 10 cm, solo lavaggio a mano. Arriva sottovuoto e impiega un giorno a riprendere forma, l\'unico momento in cui gli Hattifatteners stanno fermi.',
    specs: [
      'Poliestere',
      '45–75 x 30–50 x 10 cm',
      'Solo lavaggio a mano',
      'Sottovuoto, riprende forma dopo l\'apertura',
    ],
    specLabels: [undefined, undefined, undefined, 'Confezione'],
  },
  'sk-emendo-moomin-sauna-seat-cover': {
    name: 'Telo da sauna Emendo Moomin Amore 150 x 50 cm, marrone',
    description:
      'Telo da panca in lino e cotone, 150 x 50 cm, con i disegni originali di Tove Jansson, prodotto su licenza ufficiale. Il lino assorbe l\'umidità e regge i lavaggi duri, quindi va sulla panca o in piedi dietro la schiena.',
    specs: [
      '150 x 50 cm',
      'Lino 60 %, cotone 40 %',
      'Prodotto ufficiale Moomin Characters',
    ],
    specLabels: [undefined, undefined, 'Licenza'],
  },
  'sk-rento-pino-sauna-seat-cover': {
    name: 'Telo da sauna Rento Pino 50 x 150 cm, grigio',
    description:
      'Telo da panca in cotone tessuto jacquard, 50 x 150 cm, disegnato da Anna Säteri per Rento. Il cotone leggero resta fresco sulla panca calda, assorbe il sudore, asciuga in fretta, e la fantasia regge il lavaggio.',
    specs: [
      '50 x 150 cm',
      'Cotone tessuto jacquard',
      'Anna Säteri',
    ],
    specLabels: [undefined, undefined, 'Design'],
  },
  'sk-moomin-chocolate-chip-biscuit-tin': {
    name: 'Biscotti con gocce di cioccolato Moomin in latta 200 g',
    description:
      'Mini biscotti con gocce di cioccolato, 200 grammi, in una latta Moomin che sopravvive ai biscotti come scatola. Le gocce sono il 16 per cento del biscotto e contengono almeno il 40 per cento di sostanza secca di cacao.',
    specs: [
      '200 g',
      'Gocce di cioccolato 16 %, nel cioccolato almeno 40 % di sostanza secca di cacao',
      'Latta da collezione, riutilizzabile come scatola',
    ],
    specLabels: [undefined, undefined, 'Confezione'],
  },
  'sk-paulig-cafe-new-york-beans': {
    name: 'Caffè in grani Paulig Café New York 450 g',
    description:
      'Caffè in grani a tostatura medio-scura, 450 grammi, arabica latinoamericano con chicchi brasiliani per la dolcezza e una nota fruttata. Paulig tosta caffè in Finlandia dal 1876, e i finlandesi ne bevono più di chiunque altro pro capite.',
    specs: [
      '450 g',
      'Tostatura medio-scura, grani interi',
      'Arabica latinoamericano e chicchi brasiliani',
    ],
    specLabels: [undefined, 'Tostatura', undefined],
  },
  // katalogin täydennys 2026-09-05
  'rj-korpihilla-spruce-sprout-sparkling-750': {
    name: 'Spumante analcolico ai germogli di abete Korpihilla 750 ml',
    description:
      'Bevanda frizzante analcolica, fatta a mano con germogli di abete nella Lapponia finlandese, 750 ml. Eletta miglior bevanda della Finlandia nel 2005 dalla rivista Viisi Tähteä, ed è ancora la bottiglia da aprire quando il brindisi deve sapere di bosco.',
    specs: [
      '750 ml',
      'Fatta a mano nella Lapponia finlandese',
      'Analcolica',
      'Miglior bevanda della Finlandia 2005, rivista Viisi Tähteä',
    ],
    specLabels: [undefined, undefined, 'Alcol', 'Premio'],
  },
  // katalogin täydennys 2026-09-05
  'rj-raitaniemi-sea-buckthorn-powder': {
    name: 'Polvere di olivello spinoso Marjatila Raitaniemi 100 g',
    description:
      'Olivello spinoso essiccato e macinato intero, semi compresi, in una fattoria finlandese di bacche, 100 grammi. Un cucchiaino vale un decilitro di bacche fresche, e la polvere è essiccata al 3-5 per cento di umidità, per questo si conserva anni.',
    specs: [
      '100 g',
      'Olivello spinoso, macinato intero con i semi',
      'Da 1 a 3 cucchiaini al giorno nel porridge o nello yogurt',
      '1 cucchiaino di polvere equivale a 1 dl di bacche fresche',
    ],
    specLabels: [undefined, undefined, 'Dosaggio', 'Equivalenza'],
  },
  'rj-raitaniemi-crowberry-powder': {
    name: 'Polvere di empetro Marjatila Raitaniemi 100 g',
    description:
      'Empetro finlandese raccolto allo stato selvatico, essiccato intero e macinato, senza aggiunte, 100 grammi. L\'empetro è la bacca nera che ricopre i pendii dei fjell della Lapponia e raramente arriva in un negozio, quindi questo è quanto di più vicino all\'assaggiarla.',
    specs: [
      '100 g',
      '100 % empetro finlandese, essiccato e macinato intero',
      'Nessuno, senza conservanti',
    ],
    specLabels: [undefined, undefined, 'Additivi'],
  },
  // katalogin täydennys 2026-09-05
  // katalogin täydennys 2026-09-05
  'sk-poikain-parhaat-puolukka': {
    name: 'Mirtilli rossi liofilizzati Poikain Parhaat 15 g',
    description:
      'Mirtilli rossi finlandesi interi, liofilizzati e nient\'altro, 15 grammi. La liofilizzazione conserva colore, consistenza, vitamine e fibre, e la busta in valigia non pesa nulla. Senza lattosio, senza glutine, vegani, senza zuccheri aggiunti né conservanti.',
    specs: [
      '15 g',
      '100 % mirtillo rosso finlandese liofilizzato',
      'Senza lattosio, senza glutine, vegano, senza zuccheri aggiunti, senza conservanti',
    ],
    specLabels: [undefined, undefined, 'Dieta'],
  },
  // Talvi- ja joulutuotteet 6.11.2026
  'iittala-glass-baubles-red': {
    name: 'Palline di Natale in vetro Iittala 80 mm, rosse, set da 5',
    description:
      'Un set di 5 palline di Natale rosse in vetro soffiato a bocca di Iittala, ciascuna di 80 mm di diametro e appesa a un nastro di seta. Ogni pallina è soffiata a bocca, quindi la forma e la tonalità di rosso variano leggermente dall\'una all\'altra. Si possono appendere all\'albero o a un ramo in un vaso, oppure usare in una composizione per la tavola.',
    specs: [
      '5 palline',
      'Diametro 8 cm',
      'Vetro soffiato a bocca',
      'Rosso',
      '0,706 kg lordo',
      '32741-01, EAN 6411923679978',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, 'Codice articolo ed EAN'],
  },
  'iittala-toikka-annual-bird-2026': {
    name: 'Uccello dell\'anno Iittala Birds by Toikka 2026, Lakla',
    description:
      'Lakla è l\'uccello dell\'anno 2026 della serie Birds by Toikka di Iittala, un uccello arancione in vetro soffiato a bocca disegnato da Oiva Toikka. Ogni anno Iittala presenta un nuovo uccello dell\'anno con un proprio motivo e una propria combinazione di colori, e questi uccelli sono diventati popolari tra i collezionisti. Ogni uccello è soffiato dai vetrai della vetreria Iittala in Finlandia, quindi possono esserci piccole bolle d\'aria e differenze di spessore.',
    specs: [
      'Lunghezza 22 cm, larghezza 10 cm, altezza 14 cm',
      'Vetro soffiato a bocca',
      'Arancione',
      'Prodotto nella vetreria Iittala in Finlandia',
      'Pulire con un panno umido',
      '657373-01, EAN 6411923689199',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, 'Codice articolo ed EAN'],
  },
  'marimekko-siirtolapuutarha-baubles': {
    name: 'Palline di Natale Marimekko Siirtolapuutarha 2025, set da 2',
    description:
      'Le palline Siirtolapuutarha 2025 di Marimekko sono due palline di Natale in gres con il motivo di Maija Louekari in bianco, nero e verde. Siirtolapuutarha in finlandese significa «orto urbano». Ogni pallina misura 7 cm di larghezza e 7 cm di altezza, e Marimekko suggerisce di appenderle anche alla finestra, oltre che all\'albero.',
    specs: [
      '2 palline',
      'Larghezza 7 cm, altezza 7 cm',
      'Gres',
      'Bianco, nero e verde',
      'Maija Louekari',
      '650181-01, EAN 6411255039983',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Designer', 'Codice articolo ed EAN'],
  },
  'arabia-moomin-love-baubles': {
    name: 'Palline di Natale Arabia Moomin Love, oro, 5 cm, set da 2',
    description:
      'Due palline di Natale Moomin da 5 cm in vitroporcellana di Arabia, con il motivo Love («amore») di Tove Jansson. Il motivo mostra Moomintroll e la Signorina Snork, ed è diventato un simbolo dell\'amore e dei legami più stretti. Si possono appendere all\'albero o a un ramo decorativo, oppure usare per apparecchiare una tavola di festa.',
    specs: [
      '2 palline',
      'Larghezza 5 cm, altezza 5 cm',
      'Vitroporcellana',
      'Oro',
      'Tove Jansson',
      '699561-01, EAN 6411801029079',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Illustrazione', 'Codice articolo ed EAN'],
  },
  'sk-muurla-moomin-bauble-pyjamas': {
    name: 'Pallina di Natale in vetro Moomin Muurla 9 cm, Pyjamat',
    description:
      'Una pallina di Natale in vetro fatta a mano della linea Moomin di Muurla, di 9 cm di diametro, con il motivo Pyjamat («pigiami»). Muurla descrive la scena come un momento di relax in pigiama a lume di candela, e nella confezione c\'è un nastro di raso per appenderla.',
    specs: [
      'Diametro 9 cm',
      'Vetro, fatto a mano',
      'Nastro di raso incluso',
    ],
    specLabels: [undefined, undefined, 'Per appendere'],
  },
  'sk-muurla-moomin-baubles-snow': {
    name: 'Palline di Natale Moomin Muurla 5 cm, Lumipyry, set da 4',
    description:
      'Una confezione di 4 palline di Natale Moomin di Muurla da 5 cm, con il motivo Lumipyry («tormenta di neve») e nastri di raso per appenderle. Muurla colloca la scena subito dopo una tormenta di neve, con alti cumuli di neve, un paesaggio addormentato e lanterne di neve ancora da costruire.',
    specs: [
      'Diametro 5 cm',
      '4 palline, nastri di raso inclusi',
    ],
  },
  'sk-muurla-moomin-led-ball': {
    name: 'Sfera LED in vetro Moomin Muurla 11 cm, Tähtihetki',
    description:
      'Una sfera decorativa in vetro della linea Moomin Tähtihetki di Muurla, di 11 cm di diametro, con all\'interno un filo di 10 luci LED. Ha un interruttore di accensione e spegnimento, funziona con batterie a bottone al litio CR2032 non incluse ed è solo per uso interno. La linea Tähtihetki ha dettagli dorati, e nella confezione c\'è un nastro di raso per appenderla.',
    specs: [
      'Diametro 11 cm',
      'Vetro, filo di luci LED con 10 LED',
      'Batterie a bottone al litio CR2032, non incluse. Interruttore di accensione e spegnimento',
      'Solo per interni. Con certificazione CE',
      'Progettato in Finlandia',
    ],
    specLabels: [undefined, undefined, 'Alimentazione', 'Uso', 'Design'],
  },
  'sk-muurla-moomin-led-candle-tree': {
    name: 'Candela LED Moomin Muurla 12,5 cm, Kuusen alla',
    description:
      'Candela LED a batterie della linea Moomin Originals di Muurla, alta 12,5 cm, con un\'illustrazione del libro Farlig midsommar di Tove Jansson. Il nome finlandese del modello, Kuusen alla, significa «sotto l\'abete». È in cera di paraffina e è modellata per sembrare una vera candela di stearina, e la sua luce dal tono caldo mette in risalto l\'illustrazione. Ha le modalità acceso, spento e timer di 6 ore, funziona con 2 batterie AA non incluse ed è solo per uso interno.',
    specs: [
      'Diametro 10 cm, altezza 12,5 cm',
      'Cera di paraffina',
      '2 x batterie AA, non incluse',
      'Acceso, spento e timer di 6 ore',
      'Solo per interni',
      'Tove Jansson, dal libro Farlig midsommar',
    ],
    specLabels: [undefined, undefined, 'Alimentazione', 'Funzioni', 'Uso', 'Illustrazione'],
  },
  'arabia-moomin-plates-winter-night': {
    name: '2 piatti Arabia Moomin 19 cm, Office & Winter Night',
    description:
      'Due piatti Moomin da 19 cm di Arabia in vitroporcellana bianca, Office e Winter Night, pensati per accompagnare le tazze uscite in precedenza. L\'immagine di Office («ufficio») è apparsa per la prima volta su una tazza Moomin di Arabia nel 1996 e si ispira ai fumetti in cui ritornano la scrittura, il disegno e la pittura. Winter Night («notte d\'inverno») riprende l\'immagine di una tazza del 2006, con Moomintroll seduto sul parapetto di un ponte in una scena di Trollvinter, il libro di Tove Jansson del 1957.',
    specs: [
      'Diametro 19,4 cm, altezza 2,8 cm',
      'Vitroporcellana',
      '2 piatti, Office e Winter Night',
      'Adatti a lavastoviglie, microonde e forno',
      'Tove Jansson',
      '566802-01, EAN 6411801011432',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Illustrazione', 'Codice articolo ed EAN'],
  },
  'arabia-moomin-plates-winter-fire': {
    name: '2 piatti Arabia Moomin 19 cm, Winter Bonfire & Sailing',
    description:
      'Due piatti Moomin Arabia da 19 cm in vitroporcellana, uno con l\'immagine Winter Bonfire («falò d\'inverno») e l\'altro con Sailing («in barca a vela»). Entrambi riportano illustrazioni di Tove Jansson. La coppia affianca una scena invernale a una scena di navigazione ed è pensata sia per i pasti di tutti i giorni sia per quelli delle feste.',
    specs: [
      '2 piatti, Winter Bonfire e Sailing',
      'Vitroporcellana',
      'Multicolore',
      '0,886 kg lordo',
      'Tove Jansson',
      '629239-01, EAN 6411801015065',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Illustrazione', 'Codice articolo ed EAN'],
  },
  'sk-muurla-moomin-snowfall-mug': {
    name: 'Tazza smaltata Moomin Muurla 2,5 dl, Lumisade',
    description:
      'Tazza smaltata Moomin di Muurla da 2,5 dl con il motivo Lumisade («nevicata»), la prima neve nella valle dei Moomin e il tempo dei giochi sulla neve. Muurla realizza i suoi articoli smaltati su un\'anima in acciaio al carbonio con due strati di smalto, quindi la tazza va bene sia in tavola sia in escursione, in baita o in barca. Si può usare con bevande calde e fredde ed è lavabile in lavastoviglie, ma non va nel microonde.',
    specs: [
      '2,5 dl',
      'Acciaio al carbonio, doppia smaltatura',
      'Lavabile in lavastoviglie. Non adatta al microonde',
    ],
  },
  'sk-muurla-moomin-gifts-mug': {
    name: 'Tazza smaltata Moomin Muurla 3,7 dl, Lahjat',
    description:
      'Tazza smaltata Moomin di Muurla da 3,7 dl con il motivo Lahjat («regali»), un\'immagine natalizia sui regali per le persone care. Sotto lo smalto c\'è un\'anima in acciaio al carbonio con doppio strato, che rende la tazza abbastanza robusta da usarla all\'aperto oltre che in tavola. Si può usare con bevande calde e fredde e va in lavastoviglie, ma non nel microonde.',
    specs: [
      '3,7 dl',
      'Acciaio al carbonio, doppia smaltatura',
      'Lavabile in lavastoviglie. Non adatta al microonde',
    ],
  },
  'rj-pesonen-beeswax-candle': {
    name: 'Candela da tavola grande Pesosen Mehiläistarhat, cera d\'api',
    description:
      'Pesosen Mehiläistarhat realizza a mano questa grande candela da tavola in cera d\'api, che le dà anche il colore e il profumo. Esa, dell\'apiario, si occupa di api da 29 anni, 13 dei quali a livello professionale, e gli alveari si trovano tra campi, boschi e piccoli corsi d\'acqua nella zona di Sastamala e Hämeenkyrö. L\'apiario fa le sue candele con ciò che producono i propri alveari, e bruciano a lungo con una fiamma chiara e regolare.',
    specs: [
      'Cera d\'api',
      'Grande',
      'Fatta a mano',
      'Sastamala e Hämeenkyrö',
    ],
    specLabels: [undefined, undefined, 'Produzione', 'Apiari'],
  },
  'rj-pesonen-honeycomb-candle': {
    name: 'Candela a nido d\'ape grande Pesosen Mehiläistarhat',
    description:
      'Una grande candela a nido d\'ape fatta a mano in cera d\'api da Pesosen Mehiläistarhat, con una durata di combustione di 30 ore. Colore e profumo vengono dalla cera, e l\'apiario fa le sue candele con ciò che producono i propri alveari nella zona di Sastamala e Hämeenkyrö. Esa, dell\'apiario, si occupa di api da 29 anni e da 13 le cura a livello professionale.',
    specs: [
      'Cera d\'api',
      'Grande',
      '30 h',
      'Fatta a mano',
      'Sastamala e Hämeenkyrö',
    ],
    specLabels: [undefined, undefined, 'Durata di combustione', 'Produzione', 'Apiari'],
  },
  'sk-moomin-mistletoe-candle': {
    name: 'Candela da tavola Moomin Havi 7 x 12 cm, Misteli, beige',
    description:
      'Una candela da tavola Moomin beige di Havi con il motivo Misteli («vischio»), di 7 x 12 cm e con una durata di combustione di 55 ore. Il motivo è stampato sulla candela in serigrafia.',
    specs: [
      '7 x 12 cm',
      'Beige',
      '55 h',
      'Serigrafata',
      'Havi Oy, Riihimäki',
    ],
    specLabels: [undefined, undefined, 'Durata di combustione', 'Decorazione', 'Commercializzato da'],
  },
  'iittala-kastehelmi-tealight': {
    name: 'Portacandela tealight Iittala Kastehelmi 64 mm, trasparente',
    description:
      'Un portacandela tealight Kastehelmi di Iittala in vetro trasparente, di 64 mm di diametro, della serie che Oiva Toikka disegnò per Iittala nel 1964. Kastehelmi in finlandese significa «goccia di rugiada», e Iittala ha rilanciato la serie nel 2010. Il portacandela esiste anche in altri colori, e Iittala suggerisce di usarlo da solo o in gruppo, abbinando colori diversi.',
    specs: [
      'Diametro 6,4 cm',
      'Vetro',
      'Trasparente',
      'Lavare solo a mano',
      'Oiva Toikka, Iittala Kastehelmi',
      '13167-01, EAN 6411920059766',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Designer e collezione', 'Codice articolo ed EAN'],
  },
  'sk-fazer-christmas-box': {
    name: 'Confezione natalizia Fazer 2026',
    description:
      'La confezione natalizia Fazer per il 2026 contiene 6 confezioni di cioccolato, dolciumi e pan di zenzero di stagione. Dentro ci sono i cioccolatini Karl Fazer, una tavoletta di cioccolato Karl Fazer al pan di zenzero, Remix Xmas + Choco, i toffee Dumle Winter Mix, le gelatine alla pera Vihreät kuulat e i biscotti di pan di zenzero Marianne al cioccolato e menta.',
    specs: [
      'Cioccolatini Karl Fazer 250 g, tavoletta di cioccolato Karl Fazer al pan di zenzero 200 g, mix di caramelle Remix Xmas + Choco 300 g, mix di toffee Dumle Winter Mix 180 g, gelatine alla pera Vihreät kuulat 260 g, biscotti di pan di zenzero Marianne al cioccolato e menta 175 g',
      'Cioccolato al latte con almeno il 30 % di cacao',
      'Contiene frumento (glutine), soia e latte (lattosio). Può contenere segale, orzo, avena, uova, frutta a guscio e mandorle',
      'Energia 1845 kJ / 441 kcal, grassi 17 g di cui saturi 9,4 g, carboidrati 67 g di cui zuccheri 53 g, proteine 4,6 g, sale 0,36 g',
    ],
    specLabels: [undefined, 'Indicazioni in etichetta', 'Allergeni', 'Valori nutrizionali per 100 g'],
  },
  'sk-karl-fazer-advent-calendar': {
    name: 'Calendario dell\'Avvento Karl Fazer 200 g',
    description:
      'Un calendario dell\'Avvento Karl Fazer con 200 g di praline di cioccolato in diversi gusti dietro le sue finestrelle. L\'ultima finestrella è piena di Fazer Blue, il cioccolato al latte Karl Fazer che Fazer produce dal 1922. Fazer si rifornisce di cacao nell\'ambito del suo programma Fazer Cocoa Vision.',
    specs: [
      '200 g',
      'Praline di cioccolato in diversi gusti, l\'ultima finestrella piena di cioccolato al latte Fazer Blue',
      'Cioccolato al latte con almeno il 30 % di cacao',
      'Contiene latte, soia e orzo (glutine). Può contenere frutta a guscio, mandorle, frumento, segale e avena',
      'Energia 2315 kJ / 554 kcal, grassi 34 g di cui saturi 20 g, carboidrati 53 g di cui zuccheri 51 g, proteine 9,6 g, sale 0,31 g',
    ],
    specLabels: [undefined, undefined, 'Indicazioni in etichetta', 'Allergeni', 'Valori nutrizionali per 100 g'],
  },
  'sk-fazer-christmas-chocolates': {
    name: 'Cioccolatini natalizi Fazer Joulusuklaa 295 g',
    description:
      'Cioccolatini Fazer Joulusuklaa da 295 g, con un delicato guscio di cioccolato al latte e un ripieno al tartufo con vere briciole di pan di zenzero. Fazer li consiglia per le riunioni natalizie, per esempio insieme al glögg, la bevanda calda speziata dei paesi nordici.',
    specs: [
      '295 g',
      'Guscio di cioccolato al latte, ripieno al tartufo con briciole di pan di zenzero',
      'Cioccolato al latte con almeno il 30 % di cacao',
      'Contiene latte, frumento, orzo (glutine) e soia. Può contenere frutta a guscio, mandorle, segale e avena',
      'Energia 2274 kJ / 545 kcal, grassi 33 g di cui saturi 19 g, carboidrati 53 g di cui zuccheri 51 g, proteine 8,2 g, sale 0,24 g',
    ],
    specLabels: [undefined, undefined, 'Indicazioni in etichetta', 'Allergeni', 'Valori nutrizionali per 100 g'],
  },
  'sk-karl-fazer-gingerbread-bar': {
    name: 'Tavoletta Karl Fazer Winter Edition al pan di zenzero 200 g',
    description:
      'Una tavoletta Karl Fazer Winter Edition da 200 g che unisce un morbido cioccolato al latte a un croccante pan di zenzero. Fazer produce il cioccolato al latte Karl Fazer dal 1922, e questa tavoletta al pan di zenzero è la sua edizione natalizia.',
    specs: [
      '200 g',
      'Cioccolato al latte con croccante pan di zenzero',
      'Cioccolato al latte con almeno il 30 % di cacao',
      'Contiene latte, frumento (glutine) e soia. Può contenere frutta a guscio, mandorle, segale e avena',
      'Energia 2205 kJ / 527 kcal, grassi 30 g di cui saturi 18 g, carboidrati 55 g di cui zuccheri 48 g, proteine 8,5 g, sale 0,22 g',
    ],
    specLabels: [undefined, undefined, 'Indicazioni in etichetta', 'Allergeni', 'Valori nutrizionali per 100 g'],
  },
  'sk-fazer-glogg-balls': {
    name: 'Caramelle gommose Fazer Glögikuulat 260 g',
    description:
      'Una scatola da 260 g di Fazer Glögikuulat, palline gommose morbide e dolci che prendono il nome dal glögg, la bevanda calda speziata nordica. Non contengono glutine, gelatina né lattosio e sono adatte anche ai vegani. Nella scatola c\'è una ricetta per trasformarle in una bevanda calda.',
    specs: [
      '260 g',
      'Senza glutine, senza gelatina, senza lattosio, vegano',
      'Energia 1353 kJ / 322 kcal, grassi 0 g di cui saturi 0 g, carboidrati 79 g di cui zuccheri 64 g, proteine 0 g, sale 0,28 g',
    ],
    specLabels: [undefined, 'Dieta', 'Valori nutrizionali per 100 g'],
  },
  'sk-halva-christmas-liquorice': {
    name: 'Mix natalizio di liquirizia Halva 250 g',
    description:
      'Il mix natalizio di liquirizia di Halva riunisce 250 g di liquirizia in 3 gusti natalizi, in una scatola color oro rosa. Ci sono fiori di liquirizia al gusto di torta di mele, liquirizia ripiena di glögg e liquirizia ripiena di pan di zenzero. Halva produce il mix a Pitäjänmäki, a Helsinki.',
    specs: [
      '250 g',
      'Fiori di liquirizia al gusto di torta di mele, liquirizia ripiena di glögg, liquirizia ripiena di pan di zenzero',
      'Prodotto a Pitäjänmäki, Helsinki',
      'Contiene frumento (glutine)',
      'Energia 1419 kJ / 334 kcal, grassi 0,7 g di cui saturi 0,3 g, carboidrati 79 g di cui zuccheri 53 g, proteine 2,9 g, sale 0,15 g',
    ],
    specLabels: [undefined, undefined, undefined, 'Allergeni', 'Valori nutrizionali per 100 g'],
  },
  'sk-halva-salmiakki-calendar': {
    name: 'Calendario dell\'Avvento al salmiakki Halva 200 g',
    description:
      'Un calendario dell\'Avvento di Halva con 200 g di salmiakki, la liquirizia salata finlandese, in una selezione dalla gamma Halva. Dietro le finestrelle ci sono Vanhat Autot, pesciolini al salmiakki, teschi salati, Pommix, cuori al salmiakki, spade al salmiakki, quadratini Salmiakkiruutu e salmiakki duro Jauhix.',
    specs: [
      '200 g',
      'Salmiakki Vanhat Autot, pesciolino al salmiakki, teschio salato, salmiakki Pommix, cuore al salmiakki, spada al salmiakki, Salmiakkiruutu, salmiakki Jauhix',
      'Energia 1406 kJ / 331 kcal, grassi 0,5 g di cui saturi 0,1 g, carboidrati 80 g di cui zuccheri 59 g, proteine 2,7 g, sale 0,03 g',
    ],
    specLabels: [undefined, undefined, 'Valori nutrizionali per 100 g'],
  },
  'kuivalihakundi-advent-calendar': {
    name: 'Calendario dell\'Avvento di carne secca Kuivalihakundi 2026',
    description:
      'Il calendario dell\'Avvento 2026 di Kuivalihakundi contiene 24 gusti diversi di carne secca, una bustina da 20 g dietro ciascuna delle 24 caselle. Ci sono manzo, pollo, maiale grasso e maiale più magro, in gusti classici e in altri creati solo per questo calendario, tutti dallo stabilimento dell\'azienda a Jokela, in Finlandia. La carne secca si conserva a temperatura ambiente anche dopo l\'apertura. Il calendario sta in piedi su un tavolo o si appende alla parete con gli appositi fori, ed è in edizione limitata.',
    specs: [
      '24 bustine di carne secca da 20 g, un gusto diverso dietro ogni casella',
      'Manzo, pollo, maiale grasso e maiale più magro',
      'Prodotta nello stabilimento di proprietà di Kuivalihakundi a Jokela, Finlandia',
      'Si conserva a temperatura ambiente, anche dopo l\'apertura',
      'Sta in piedi su un tavolo o si appende alla parete con gli appositi fori',
    ],
    specLabels: [undefined, 'Carni', undefined, undefined, 'Per appendere'],
  },
  'halti-crostie-merino-beanie': {
    name: 'Berretto in merino Halti Crostie',
    description:
      'Un berretto Halti aderente per lo sci di fondo, la corsa d\'inverno e altri sport al freddo, progettato e prodotto in Finlandia. Metà del berretto è foderata in Stormwall®, uno strato antivento e traspirante che protegge fronte e orecchie dal vento. La maglia è un morbido misto di lana merino che tiene caldo ma lascia traspirare.',
    specs: [
      'Maglia in misto lana merino e acrilico, 50 % lana merino, 50 % acrilico. Mezza fodera in Stormwall®',
      'S, M, L',
      '0,2 kg',
      'Diversi colori: Crocus Petal, Black, White, Fudge Maroon Red, Veiled Pink',
      'Lavare con colori simili, asciugare in piano',
      'Progettato e realizzato in Finlandia, con il marchio Avainlippu (Key Flag)',
    ],
  },
  'halti-vuolle-mohair-beanie': {
    name: 'Berretto in mohair Halti Vuolle',
    description:
      'Un soffice berretto Halti in misto mohair, lana merino e poliammide, a doppio strato per un calore in più e con un risvolto alto. Il misto lo rende leggero ma caldo, e non c\'è una fodera separata. Taglia unica, nei colori Snow White o Black.',
    specs: [
      'Misto mohair, 50 % mohair, 32 % poliammide, 18 % lana merino. Senza fodera separata',
      'Taglia unica',
      'Snow White o Black',
      'Lavare con colori simili, asciugare in piano',
      'Doppio strato, risvolto alto',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Caratteristiche'],
  },
  'halti-tiilo-mittens': {
    name: 'Muffole Halti Tiilo II',
    description:
      'Muffole Halti imbottite per le attività invernali all\'aperto, in tessuto DrymaxX® impermeabile e antivento con 60 g di imbottitura Microtherm®. Il palmo è in pelle sintetica con una buona presa, e c\'è un polsino interno a coste con regolazione al polso. Nere, taglie dalla 7 alla 12.',
    specs: [
      'Poliestere DrymaxX® con membrana, 100 % poliestere. Polsino a coste, 100 % poliestere. Palmo in pelle sintetica, 100 % poliuretano',
      'Imbottitura Microtherm® da 60 g',
      '7, 8, 9, 10, 11, 12',
      'Nero',
      'Lavare separatamente',
    ],
    specLabels: [undefined, 'Imbottitura', undefined, undefined, undefined],
  },
  'halti-warm-merino-socks': {
    name: 'Calze calde in lana merino Halti',
    description:
      'Calze Halti in lana merino a maglia spugna spessa, prodotte in Finlandia e senza cuciture. Per questo calzano bene negli scarponi da sci, nelle scarpe invernali e negli scarponi da snowboard. La spugna trattiene l\'aria e scalda, e il gambale a coste resta su. Le indossi da sole o sopra un paio di calze sottili.',
    specs: [
      'Misto lana merino, 62 % lana merino, 36 % poliammide, 2 % elastan',
      '34-36, 37-39, 40-42, 43-45, 46-48',
      'Dark Sea Green o Asphalt',
      '0,1 kg',
      'Prodotte in Finlandia, con il marchio Avainlippu (Key Flag)',
      'Maglia spugna spessa, senza cuciture, gambale a coste che resta su',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, 'Caratteristiche'],
  },
  'north-outdoor-kaisla-beanie': {
    name: 'Berretto in merino North Outdoor Kaisla, caffè',
    description:
      'Un berretto spesso a maglia inglese in 100 % lana merino senza mulesing, lavorato nel maglificio di proprietà di North Outdoor a Oulu. North Outdoor lo consiglia dall\'autunno alla fine dell\'inverno, sia per le passeggiate in città sia per i sentieri nella natura. Taglia unica, color caffè.',
    specs: [
      '100 % lana merino, senza mulesing, maglia inglese',
      'Taglia unica',
      'Caffè',
      'Prodotto nel maglificio di proprietà di North Outdoor a Oulu, Finlandia',
    ],
  },
  'north-outdoor-polku-neck-tube': {
    name: 'Scaldacollo in merino North Outdoor Polku, caffè',
    description:
      'Uno scaldacollo spesso in 100 % lana merino senza mulesing, lavorato a coste 1x1 fitte. È abbastanza alto da portarlo come sciarpa, tirarlo su come cappuccio o usarlo per coprire il viso. Taglia unica, color caffè.',
    specs: [
      '100 % lana merino, senza mulesing, maglia a coste 1x1',
      'Taglia unica',
      'Caffè',
      'Sciarpa, cappuccio o protezione per il viso',
    ],
    specLabels: [undefined, undefined, undefined, 'Uso'],
  },
  'north-outdoor-hirsi-socks': {
    name: 'Calze in lana merino North Outdoor Hirsi, mandorla',
    description:
      'Calze leggere in lana merino dal maglificio di proprietà di North Outdoor a Oulu. Sono all\'80 % in merino senza mulesing e al 20 % in poliammide, che le rende resistenti. Danno il meglio in casa, da sole o sopra un altro paio di calze. Reggono un lavaggio delicato in lavatrice, anche se ne hanno bisogno di rado.',
    specs: [
      '80 % lana merino, senza mulesing, 20 % poliammide',
      '35-38, 39-42, 43-46',
      'Mandorla',
      'Prodotte nel maglificio di proprietà di North Outdoor a Oulu, Finlandia',
      'Lavaggio delicato in lavatrice',
    ],
  },
  'north-outdoor-avery-mittens': {
    name: 'Muffole in pile di lana North Outdoor Avery, latte',
    description:
      'Muffole in un leggero misto di pile di lana italiano con il 63 % di lana riciclata, foderate all\'interno in 100 % lana merino. La fodera in merino allontana l\'umidità e trattiene il calore, e la vestibilità aderente ma flessibile lascia sentire bene la presa. Taglie S e M, color latte.',
    specs: [
      'Misto pile di lana italiano, 63 % lana riciclata. Fodera 100 % lana merino',
      'S, M',
      'Latte',
      'All\'aperto e in città',
    ],
    specLabels: [undefined, undefined, undefined, 'Uso'],
  },
  'makia-alvar-beanie': {
    name: 'Berretto in merino Makia Alvar',
    description:
      'Un berretto Makia in 100 % lana merino, prodotto in Finlandia. La lana è senza mulesing, e il berretto è in taglia unica.',
    specs: [
      '100 % lana merino, senza mulesing',
      'Taglia unica',
      'Prodotto in Finlandia',
    ],
  },
  'makia-stellar-scarf': {
    name: 'Sciarpa in merino Makia Stellar',
    description:
      'Una sciarpa Makia in 100 % lana merino. È in taglia unica.',
    specs: [
      '100 % lana merino',
      'Taglia unica',
    ],
  },
  'makia-freja-mittens': {
    name: 'Muffole trapuntate Makia Freja',
    description:
      'Muffole trapuntate Makia imbottite di piumino sintetico Sorona®, un\'imbottitura in parte di origine vegetale che traspira e trattiene il calore. Una colonna d\'acqua di 3000 mm aiuta a tenere le mani asciutte con la pioggia leggera. Taglie S e M.',
    specs: [
      'Piumino sintetico Sorona®, in parte di origine vegetale',
      '3000 mm',
      'S, M',
    ],
    specLabels: ['Imbottitura', 'Colonna d\'acqua', undefined],
  },
  'makia-sibelius-beanie': {
    name: 'Berretto in merino Makia Sibelius',
    description:
      'Il berretto Sibelius di Makia, in 100 % lana merino. È in taglia unica.',
    specs: [
      '100 % lana merino',
      'Taglia unica',
    ],
  },
  'nb-moomin-christmas-sockbox': {
    name: 'Confezione regalo di calze natalizie Moomin, EU 36-42',
    description:
      'Una confezione regalo natalizia Moomin già pronta con due paia di calze, in taglia unica per le misure EU dalla 36 alla 42. Le calze sono soprattutto in cotone, con poliestere, nylon e un po\' di elastan, e si tratta di un prodotto Moomin ufficiale.',
    specs: [
      '60 % cotone, 33 % poliestere, 4 % nylon, 2 % elastan, 1 % elastodiene',
      'Taglia unica, EU 36-42',
      '2 paia di calze in confezione regalo',
      'Prodotto Moomin ufficiale',
    ],
    specLabels: [undefined, undefined, undefined, 'Licenza'],
  },
  'nb-moomin-christmas-box-men': {
    name: 'Confezione regalo di calze natalizie Moomin, uomo, EU 40-45',
    description:
      'Una confezione regalo natalizia Moomin già pronta con due paia di calze da uomo, taglie EU dalla 40 alla 45. Secondo l\'esperienza di Nordicbuddies vanno bene anche per piedi più grandi. Le calze sono soprattutto in cotone, con poliestere, nylon e un po\' di elastan, e si tratta di un prodotto Moomin ufficiale.',
    specs: [
      '60 % cotone, 33 % poliestere, 4 % nylon, 2 % elastan, 1 % elastodiene',
      'Taglia unica, EU 40-45',
      '2 paia di calze in confezione regalo',
      'Prodotto Moomin ufficiale',
    ],
    specLabels: [undefined, undefined, undefined, 'Licenza'],
  },
  'nb-moomintroll-fleece-mittens': {
    name: 'Muffole in pile Moomintroll',
    description:
      'Muffole Moomintroll in pile di poliestere riciclato al 100 %, con fodera in acrilico. Sono elastiche, quindi la taglia unica va bene per quasi tutti, e sono un prodotto Moomin ufficiale.',
    specs: [
      '100 % poliestere riciclato',
      '100 % acrilico',
      'Taglia unica, elastica, va bene per quasi tutti',
      'Prodotto Moomin ufficiale',
    ],
    specLabels: [undefined, 'Fodera', undefined, 'Licenza'],
  },
  'nb-moomintroll-chunky-beanie': {
    name: 'Berretto spesso e soffice Moomintroll, rosa',
    description:
      'Un berretto Moomintroll soffice e spesso, rosa, in una taglia unica da adulto che va bene per tutti. Il materiale è un misto di poliestere, nylon, acrilico, lana ed elastan, e il berretto è un prodotto Moomin ufficiale.',
    specs: [
      'Poliestere, nylon, acrilico, lana ed elastan',
      'Adulto, taglia unica',
      'Rosa',
      'Prodotto Moomin ufficiale',
    ],
    specLabels: [undefined, undefined, undefined, 'Licenza'],
  },
  'sk-nordqvist-tea-calendar': {
    name: 'Calendario dell\'Avvento di tè Nordqvist, 27 bustine',
    description:
      'Un calendario dell\'Avvento di tè di Nordqvist a forma di cubo, con 25 finestrelle e 27 bustine di tè, perché l\'ultima finestrella ne contiene tre. Ci sono tè nero, verde e rooibos e miscele di ibisco, e tra questi gusti natalizi come pan di zenzero, glögg e cannella.',
    specs: [
      '25 finestrelle, 27 bustine di tè. L\'ultima finestrella contiene 3 bustine',
      'Tè nero, verde e rooibos, miscele di ibisco',
      'Nordqvist Oy, Nurmijärvi',
      '6413440000433',
    ],
    specLabels: [undefined, 'Tè', 'Commercializzato da', 'EAN'],
  },
  'sk-nordqvist-moomin-tea-calendar': {
    name: 'Calendario di tè Moomin Nordqvist, 24 bustine, lilla',
    description:
      'Un calendario dell\'Avvento di tè Moomin di Nordqvist color lilla, con 24 bustine a piramide in 12 gusti, due per ciascuno. Ci sono tè nero e verde accanto al rooibos senza caffeina, e ogni gusto ha il suo nome, da Olet Ihana («sei adorabile») a Muumimamman Voimajuoma («la bevanda energetica di Mamma Moomin»). Il coperchio si apre in modo che il calendario resti in piedi, ed è certificato Rainforest Alliance.',
    specs: [
      '24 bustine a piramide, 12 gusti, 2 per ciascuno',
      '41,5 g',
      'Lilla',
      'Rainforest Alliance',
      'Nordqvist Oy, Nurmijärvi',
      '6413440000679',
    ],
    specLabels: [undefined, undefined, undefined, 'Certificazione', 'Commercializzato da', 'EAN'],
  },
  'sk-nordic-glogg-concentrate': {
    name: 'Concentrato di glögg Poikain Parhaat Nordic 0,5 l',
    description:
      'Un concentrato di glögg analcolico (0 %) fatto a mano con succo di ribes nero e rosso finlandese e spezie vere, da diluire 1+3. Poikain Parhaat lo descrive come un glögg ricco di bacche, caldamente speziato e dal gusto tradizionale.',
    specs: [
      '0,5 l',
      '1+3',
      '0 %',
      'Succo di ribes nero e ribes rosso dalla Finlandia',
      'Energia 47,7 kcal / 199,58 kJ, grassi 0,2 g di cui saturi 0,2 g, carboidrati 11 g di cui zuccheri 11 g, proteine 0,3 g, sale 0,2 g',
      'Poikain Parhaat Oy Ltd, Tampere',
    ],
    specLabels: [undefined, 'Rapporto di diluizione', 'Alcol', undefined, 'Valori nutrizionali per 100 ml', 'Commercializzato da'],
  },
  'rj-christmas-coffee': {
    name: 'Caffè natalizio Gran Palomar 200 g',
    description:
      'Il caffè natalizio Gran Palomar di Cafetoria Roastery è un caffè biologico equo e solidale, aromatizzato con cannella e cardamomo biologici. È in una confezione da 200 g.',
    specs: [
      '200 g',
      'Cannella e cardamomo biologici',
      'Commercio equo e solidale, biologico',
      'Cafetoria Roastery Oy',
    ],
    specLabels: [undefined, 'Spezie', 'Certificazione', 'Torrefazione'],
  },
  'sk-emendo-santa-sauna-scent': {
    name: 'Profumo da sauna ufficiale di Babbo Natale Emendo 500 ml',
    description:
      'Il profumo da sauna ufficiale di Babbo Natale di Emendo, 500 ml con oli essenziali autentici al 100 % e senza fragranze sintetiche. Ne mescoli circa ½ dl in un secchio con circa 3 l d\'acqua e lo usi come la normale acqua della sauna.',
    specs: [
      '500 ml',
      'Contiene oli essenziali al 100 %, senza fragranze sintetiche (parfum)',
      'Circa ½ dl in un secchio con circa 3 l d\'acqua',
      '©Santa Claus Foundation™',
      '6417892057458',
    ],
    specLabels: [undefined, 'Composizione', 'Uso', 'Licenza', 'EAN'],
  },
  'sk-emendo-christmas-sauna-set': {
    name: 'Set regalo per sauna Emendo Jouluhetki',
    description:
      'Jouluhetki, in finlandese «momento di Natale», è un set regalo Emendo per la sauna che contiene sapone con cordino, profumo da sauna e spugna a fiore. Arriva già confezionato come regalo.',
    specs: [
      'Sapone con cordino, profumo da sauna, spugna a fiore',
      '6417892041280',
    ],
    specLabels: [undefined, 'EAN'],
  },
  'sk-emendo-gingerbread-glogg-scent': {
    name: 'Profumi da sauna Emendo pan di zenzero e glögg, 2 x 10 ml',
    description:
      'Due profumi da sauna di Emendo, al pan di zenzero e al glögg, da 10 ml ciascuno e fatti con oli essenziali autentici al 100 %. Aggiunga da 2 a 6 gocce a un mestolo d\'acqua e versi l\'acqua sulle pietre.',
    specs: [
      '2 x 10 ml',
      'Pan di zenzero, glögg',
      'Prodotto con oli essenziali al 100 %',
      'Da 2 a 6 gocce in un mestolo d\'acqua',
      '6417892021060',
    ],
    specLabels: [undefined, 'Profumi', 'Composizione', 'Uso', 'EAN'],
  },
  'sk-aromageddon-gingerbread-scent': {
    name: 'Essenza per sauna Aromageddon Piparipyörre 15 ml',
    description:
      'Piparipyörre («vortice di pan di zenzero») di Aromageddon porta in sauna un profumo caldo e speziato di cannella con una nota di pan di zenzero. Ne aggiunga da 2 a 4 gocce a un mestolo d\'acqua e usi l\'essenza sempre diluita, mai versata direttamente sulla stufa.',
    specs: [
      '15 ml',
      'Cannella con una nota di pan di zenzero',
      'Da 2 a 4 gocce in un mestolo d\'acqua, sempre diluita',
      'Aromageddon Oy, Espoo',
    ],
    specLabels: [undefined, 'Profumo', 'Uso', 'Commercializzato da'],
  },
  // Vaatevalikoiman laajennus 7.11.2026
  'makia-glacier-parka': {
    name: 'Parka Makia Glacier',
    description:
      'Un parka invernale lungo di Makia, dalla vestibilità regolare e con fodera in poliestere riciclato al 100 %. Il tessuto esterno è composto per il 73 % da cotone e per il 27 % da nylon riciclato, e la colonna d\'acqua di 5000 mm aiuta a tenere lontana la pioggia occasionale. Un cordino interno in vita permette di regolare la vestibilità.',
    specs: [
      'Tessuto esterno 73 % cotone, 27 % nylon riciclato. Fodera 100 % poliestere riciclato',
      '5000 mm',
      'Nero',
      'Da S a XXL',
    ],
    specLabels: [undefined, 'Colonna d\'acqua', undefined, undefined],
  },
  'makia-maren-parka': {
    name: 'Parka imbottito Makia Maren',
    description:
      'Un parka imbottito di Makia dalla linea morbida, di media lunghezza, con imbottitura in piumino sintetico Sorona® di poliestere riciclato al 100 %. Il Sorona® è in parte di origine vegetale, traspira e trattiene il calore. Una cintura in vita permette di regolare la vestibilità quando serve.',
    specs: [
      'Imbottitura 100 % poliestere riciclato, piumino sintetico Sorona®',
      'Morbida, media lunghezza, cintura in vita',
      'Rosso vino scuro',
      'Da XS a XXL',
    ],
    specLabels: [undefined, 'Vestibilità', undefined, undefined],
  },
  'makia-helsinki-parka': {
    name: 'Parka Makia Helsinki',
    description:
      'Un parka invernale classico di Makia, dalla vestibilità regolare, con tasche capienti e un cappuccio con pelliccia sintetica staccabile. Riprende gli elementi del Raglan Parka, un classico di Makia, e l\'imbottitura è in piumino sintetico Sorona® di poliestere riciclato al 100 %. Il Sorona® è in parte di origine vegetale, traspira e trattiene il calore.',
    specs: [
      'Imbottitura 100 % poliestere riciclato, piumino sintetico Sorona®',
      'Pelliccia sintetica staccabile',
      'Verde scuro',
      'Da S a XXL',
    ],
    specLabels: [undefined, 'Cappuccio', undefined, undefined],
  },
  'makia-else-parka': {
    name: 'Parka Makia Else',
    description:
      'Un parka invernale di media lunghezza di Makia, dalla vestibilità regolare, con cappuccio foderato in pelliccia sintetica staccabile. L\'imbottitura è in piumino sintetico Sorona® di poliestere riciclato al 100 %, e una regolazione nascosta in vita permette di adattare la vestibilità.',
    specs: [
      'Imbottitura 100 % poliestere riciclato, piumino sintetico Sorona®',
      'Fodera in pelliccia sintetica staccabile',
      'Bianco naturale',
      'Da XS a XXL',
    ],
    specLabels: [undefined, 'Cappuccio', undefined, undefined],
  },
  'makia-frost-knit': {
    name: 'Maglione Makia Frost',
    description:
      'Un maglione di Makia dalla vestibilità regolare, in misto poliestere e con una colorazione sfumata. Taglie dalla S alla XXL.',
    specs: [
      'Misto poliestere',
      'Sfumata',
      'Da S a XXL',
    ],
    specLabels: [undefined, 'Colorazione', undefined],
  },
  'makia-salla-knit': {
    name: 'Dolcevita in merino Makia Salla',
    description:
      'Un dolcevita di Makia dalla vestibilità regolare, in lana merino al 100 %. Dettagli in maglia traforata (ajour) percorrono il corpo e le maniche. Taglie dalla XS alla XXL.',
    specs: [
      '100 % lana merino',
      'Dettagli in maglia traforata ajour sul corpo e sulle maniche',
      'Da XS a XXL',
    ],
    specLabels: [undefined, 'Dettagli', undefined],
  },
  'makia-saarni-knit': {
    name: 'Maglione in merino Makia Saarni',
    description:
      'Un maglione di Makia dalla vestibilità regolare, in lana merino al 100 %. Taglie dalla S alla XXL.',
    specs: [
      '100 % lana merino',
      'Da S a XXL',
    ],
  },
  'makia-siina-knit': {
    name: 'Maglione in misto lana Makia Siina',
    description:
      'Un maglione di Makia a maniche ampie e dalla vestibilità regolare, lavorato in misto lana. Il misto lana rende la maglia più corposa al tatto. Taglie dalla XS alla XXL.',
    specs: [
      'Misto lana',
      'Ampie',
      'Da XS a XXL',
    ],
    specLabels: [undefined, 'Maniche', undefined],
  },
  'halti-ascloud-ski-jacket-women': {
    name: 'Giacca da sci imbottita Halti Ascloud, donna',
    description:
      'Una giacca da sci imbottita da donna di Halti, con isolamento Microtherm®, ghetta paraneve fissa e tasca porta skipass con zip. Il tessuto esterno ha un\'impermeabilità di 10000 mm e una traspirabilità di 10000 g/m²/24 h. Cappuccio e orlo sono regolabili, le maniche hanno polsini interni in Lycra, e Halti l\'ha pensata per la città come per le piste.',
    specs: [
      'Matt Memory, 65 % poliestere riciclato, 35 % poliestere',
      '10000 mm',
      '10000 g/m²/24 h',
      '1,0 kg',
      '34, 36, 38, 40, 42, 44, 46',
      'Diversi colori: Crocus Petal, Seedpearl White, Dark Sea Green, Black',
    ],
    specLabels: [undefined, 'Impermeabilità', 'Traspirabilità', undefined, undefined, undefined],
  },
  'halti-ascale-ii-ski-jacket-men': {
    name: 'Giacca da sci imbottita Halti Ascale II, uomo',
    description:
      'Una giacca da sci imbottita da uomo di Halti, con isolamento Microtherm® Arcty da 160 g, ghetta paraneve fissa e tasca porta skipass con zip. Il guscio opaco ha un trattamento idrorepellente Rudolf BIONIC-FINISH® e offre un\'impermeabilità di 10000 mm e una traspirabilità di 10000 g/m²/24 h. Ha polsini interni in Lycra e una patta antivento interna a tutta lunghezza, e Halti l\'ha pensata da portare con i pantaloni da sci o con i jeans.',
    specs: [
      'Waterproof Taslan, 50 % poliestere riciclato, 50 % poliestere',
      '10000 mm',
      '10000 g/m²/24 h',
      '1,0 kg',
      'S, M, L, XL, XXL, XXXL',
      'Dark Sea Green, Black',
    ],
    specLabels: [undefined, 'Impermeabilità', 'Traspirabilità', undefined, undefined, undefined],
  },
  'halti-carvey-ii-ski-pants-women': {
    name: 'Pantaloni da sci Halti Carvey II DX, donna',
    description:
      'Pantaloni da sci impermeabili da donna di Halti in DrymaxX® elasticizzato in 4 direzioni, con tutte le cuciture nastrate e bretelle staccabili. Il tessuto DrymaxX® ha un\'impermeabilità di 15000 mm e una traspirabilità di 15000 g/m²/24 h, e il taglio dritto sta a metà tra aderente e morbido. La vita è regolabile, i fondi gamba sono rinforzati, e ci sono ghette paraneve, tasche laterali con zip e una tasca sulla coscia con zip idrorepellente.',
    specs: [
      'DrymaxX® NN elasticizzato in 4 direzioni, 50 % poliestere riciclato, 50 % poliestere. Stretch Cordura, 96 % poliestere, 4 % elastan. Senza fodera separata',
      '15000 mm',
      '15000 g/m²/24 h',
      '0,8 kg',
      '34, 36, 38, 40, 42, 44, 46, 48',
      'Diversi colori: Dark Sea Green, Black, Seedpearl White, Vivid Purple, Lemon Pepper Beige',
    ],
    specLabels: [undefined, 'Impermeabilità', 'Traspirabilità', undefined, undefined, undefined],
  },
  'halti-carvey-ii-ski-pants-men': {
    name: 'Pantaloni da sci Halti Carvey II DX, uomo',
    description:
      'Pantaloni da sci impermeabili da uomo di Halti in DrymaxX® elasticizzato in 4 direzioni, con tutte le cuciture nastrate e bretelle staccabili. Hanno un trattamento idrorepellente DWR, e il tessuto DrymaxX® ha un\'impermeabilità di 15000 mm e una traspirabilità di 15000 g/m²/24 h. La vestibilità da sci ha un taglio dritto a metà tra aderente e morbido, con vita regolabile, fondi gamba rinforzati, ghette paraneve, tasche laterali con zip e una tasca sulla coscia con zip idrorepellente.',
    specs: [
      'DrymaxX® NN elasticizzato in 4 direzioni, 50 % poliestere riciclato, 50 % poliestere. Stretch Cordura, 96 % poliestere, 4 % elastan',
      '15000 mm',
      '15000 g/m²/24 h',
      '0,9 kg',
      'XS, S, M, L, XL, XXL, XXXL, 4XL',
      'Diversi colori: Dress Blues, Black, Dark Sea Green, Tea Green, Halti Red, Electric Blue Lemonade',
    ],
    specLabels: [undefined, 'Impermeabilità', 'Traspirabilità', undefined, undefined, undefined],
  },
  'halti-kevo-2-winter-boots-men': {
    name: 'Scarponcini invernali Halti Kevo 2 DX, uomo',
    description:
      'Scarponcini invernali Halti da uomo con lacci, calza interna in membrana DrymaxX® impermeabile e traspirante e calda fodera tessile. La tomaia in pelle sintetica facile da pulire, realizzata con PU a base d\'acqua, poggia su un\'intersuola in Phylon leggera e ammortizzante e su una suola in gomma con una buona presa. Halti li ha pensati per le lunghe uscite invernali, e il plantare dalla forma anatomica è estraibile.',
    specs: [
      'Pelle sintetica, 80 % poliuretano, 20 % poliestere riciclato. Tessuto a rete fitta, 100 % poliestere riciclato. Membrana DrymaxX®',
      'Intersuola in Phylon, suola in gomma, plantare anatomico estraibile in EVA',
      '1,1 kg',
      '38, 39, 40, 41, 42, 43, 44, 45, 46',
      'Otter Brown',
      'Pulire con una spugna umida e sapone neutro. Asciugare a temperatura ambiente o a 40 °C al massimo, mai sul termosifone né in una sauna calda',
    ],
    specLabels: [undefined, 'Suola', undefined, undefined, undefined, undefined],
  },
  'halti-metso-mid-winter-boots-men': {
    name: 'Scarponcini invernali Halti Metso Mid DX, uomo',
    description:
      'Scarponcini invernali Halti da uomo con lacci, isolamento Thinsulate™, calda fodera in pelo sintetico e calza in membrana DrymaxX® impermeabile. La tomaia unisce scamosciato, pelle PU e tessuto morbido, e il plantare Comfort+, estraibile e ammortizzante, ha una forma anatomica. Halti li indica soprattutto per il tempo libero, e la suola in gomma TPR fa presa su superfici diverse.',
    specs: [
      'Scamosciato, 100 % pelle. Pelle PU, 50 % poliestere, 50 % poliuretano. Tessuto morbido, 100 % poliestere',
      'Suola in TPR, plantare anatomico estraibile Comfort+',
      '1,1 kg',
      '40, 41, 42, 43, 44, 45, 46, 47',
      'Apple Cinnamon Brown',
      'Pulire con una spugna umida e sapone neutro. Asciugare a temperatura ambiente o a 40 °C al massimo, mai sul termosifone né in una sauna calda. Conservare in un luogo asciutto e aerato',
    ],
    specLabels: [undefined, 'Suola', undefined, undefined, undefined, undefined],
  },
  'halti-skene-winter-boots-women': {
    name: 'Scarponcini invernali Halti Skene DX, donna',
    description:
      'Scarponcini invernali Halti da donna con zip sul lato interno, che li rende facili da calzare, e lacci per regolare la calzata. La calza in membrana DrymaxX® e una calda fodera in pelo sintetico tengono i piedi asciutti e caldi con il tempo variabile, e il plantare termico blocca il freddo che sale dal basso. L\'intersuola leggera in Phylon aggiunge comfort e la suola in gomma fa presa sulle superfici invernali.',
    specs: [
      'Poly pongee, 100 % poliestere. Scamosciato, 100 % pelle. Membrana DrymaxX®',
      'Intersuola in Phylon, suola in gomma, plantare termico in EVA',
      '0,8 kg',
      '36, 37, 38, 39, 40, 41, 42',
      'Fog Beige, Glacier Grey',
      'Pulire con una spugna umida e sapone neutro. Asciugare a temperatura ambiente o a 40 °C al massimo, mai sul termosifone né in una sauna calda',
    ],
    specLabels: [undefined, 'Suola', undefined, undefined, undefined, undefined],
  },
  'halti-sletta-zip-winter-boots-women': {
    name: 'Stivaletti invernali Halti Sletta Zip DX, donna',
    description:
      'Stivaletti invernali Halti da donna, morbidi e di media altezza, con zip, fodera in pile, imbottitura Thinsulate™ e membrana DrymaxX® impermeabile. La suola in gomma Halti GripmaxX Arctic è progettata per neve e fanghiglia e poggia su un\'intersuola in Phylon leggera e ammortizzante. La struttura a calza migliora la calzata, e il plantare Thermo è estraibile.',
    specs: [
      'Tessuto liscio tipo taffetà con gambale trapuntato morbido e rinforzi in scamosciato, 100 % poliestere. Scamosciato, 100 % pelle',
      'Suola in gomma Halti GripmaxX Arctic, intersuola in Phylon, plantare Thermo estraibile',
      '0,7 kg',
      '36, 37, 38, 39, 40, 41, 42',
      'Apple Cinnamon Brown, Black/White',
      'Pulire con una spugna umida e sapone neutro. Asciugare a temperatura ambiente o a 40 °C al massimo, mai sul termosifone né in una sauna calda',
    ],
    specLabels: [undefined, 'Suola', undefined, undefined, undefined, undefined],
  },
  'sk-suomi-foam-finger': {
    name: 'Mano in gommapiuma da tifoso Suomi 23 x 45 cm',
    description:
      'Una mano in gommapiuma da tifoso di 23 x 45 cm, della linea Suomi di Happy Orange. Serve per partite, eventi e altre occasioni in cui vuole farsi notare tra la folla. La mano blu porta la scritta FINLAND e la bandiera finlandese.',
    specs: [
      '23 x 45 cm',
      'FINLAND e la bandiera finlandese su fondo blu',
      '6430080071500',
    ],
    specLabels: [undefined, 'Motivo', 'EAN'],
  },
  'sk-suomi-drawstring-bag': {
    name: 'Sacca con coulisse Suomi, bandiera finlandese',
    description:
      'Una sacca con coulisse di Tammer con la bandiera finlandese. Va bene per le trasferte alle partite e per i gruppi di tifosi, ma anche come souvenir, ricordo o regalo.',
    specs: [
      'Bandiera finlandese',
      '6410413343443',
    ],
    specLabels: ['Motivo', 'EAN'],
  },
  'sk-suomi-braces': {
    name: 'Bretelle Suomi, blu',
    description:
      'Bretelle blu a H, larghe 3,5 cm, con SUOMI, FINLAND e la bandiera finlandese lungo la fascia. Dietro si agganciano con due clip interamente in metallo che tengono bene. Le ha disegnate Suomikauppa.fi e le ha prodotte Helsingin Olkain, e portano il marchio Avainlippu (Key Flag).',
    specs: [
      'Larghezza 3,5 cm',
      'Blu con SUOMI, FINLAND e la bandiera finlandese',
      'A H, due clip interamente in metallo sul retro',
      'Design Suomikauppa.fi, produzione Helsingin Olkain',
      'Avainlippu (Key Flag)',
    ],
    specLabels: [undefined, undefined, 'Aggancio', 'Design e produzione', 'Marchio'],
  },
  'sk-suomi-spiky-wig': {
    name: 'Parrucca a punte da tifoso Suomi',
    description:
      'Una parrucca a punte da tifoso della linea Suomi di Happy Orange, pensata per partite, eventi e altre occasioni in cui vuole farsi notare. Da una fascia blu con la bandiera finlandese spuntano punte blu e bianche.',
    specs: [
      'Blu e bianco',
      'Bandiera finlandese sulla fascia',
      '6430080071456',
    ],
    specLabels: [undefined, 'Motivo', 'EAN'],
  },
}
