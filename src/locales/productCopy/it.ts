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
  'moomin-mystical-forest-wool-throw': {
    name: 'Plaid in lana Moomin Mystical Forest 130x170 cm',
    description:
      'Un plaid da 130 per 170 cm in 100 per cento lana, disegnato in Finlandia per la collezione Mystical Forest. Solo lavaggio a secco, quindi consideratelo un plaid da divano e non una coperta da picnic.',
    specs: [
      '100 % lana',
      '130 x 170 cm',
      'Blu',
      'Lavaggio a secco, processo delicato',
      'Disegnato in Finlandia, prodotto in Lituania',
      'Mystical Forest',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, 'Collezione'],
  },
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
    name: 'Portacandela Iittala Kivi 60 mm, verde pino',
    description:
      'Un portacandela in vetro pressato di Heikki Orvola, alto 6 cm, che trasforma un lumino in un blocco di colore. È il modo più economico per possedere un pezzo Iittala e sopravvive al bagaglio a mano.',
    specs: [
      '6,5 x 6,5 cm, altezza 6 cm',
      'Vetro',
      'Verde',
      '0,33 kg lordo',
      'Solo lavaggio a mano',
      'Heikki Orvola, Iittala Kivi',
      '636883-01, EAN 6411923683937',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      'Designer e collezione',
      'Codice articolo ed EAN',
    ],
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
  'aarikka-prinsessa-candleholder': {
    name: 'Portacandela Aarikka Prinsessa',
    description:
      'Aarikka tornisce perline di betulla dagli anni cinquanta, e Prinsessa ne porta una corona attorno a un supporto da 5,5 cm che accoglie un lumino oppure una candela dritta. Abbastanza piccolo da spedire, abbastanza riconoscibile da essere identificato in Finlandia.',
    specs: [
      'Altezza 5,5 cm, diametro 6 cm',
      'Betulla, acero, alluminio',
      '98 g',
      'Disegnato in Finlandia, prodotto in Italia',
      'Portacandela con una corona di perline di legno. Adatto a lumini e candele dritte',
      'B08633',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, 'Codice prodotto'],
  },
  'aarikka-pore-glass-vase': {
    name: 'Vaso in vetro Aarikka Pore 16 cm, verde scuro',
    description:
      'Un vaso rotondo soffiato a mano, 1,7 litri, con una corona di perline di acero tinte a mano in Finlandia. Le bolle d’aria nel vetro fanno parte del pezzo, e la corona si toglie prima del lavaggio.',
    specs: [
      'Altezza 16 cm, diametro 16 cm',
      '1,7 l',
      'Vetro e acero',
      'Trasparente e verde',
      'Vetro prodotto in Polonia, corona di legno prodotta in Finlandia',
      'Lavare a mano. Togliere la corona di legno prima del lavaggio',
      'B08706',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, undefined, 'Codice prodotto'],
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
      'Una sciarpa larga e lunga a punto inglese, 100 per cento merino, lavorata a Oulu. Abbastanza lunga da avvolgersi in più modi, il che conta quando il vento cambia direzione su una fjeld aperta.',
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
    name: 'Coltello lappone Marttiini 255',
    description:
      'Il coltello lappone tradizionale, 27 cm in tutto, con lama inossidabile, manico in betulla fiammata verniciata e fodero in cuoio. Marttiini produce i suoi coltelli a Rovaniemi, e questa versione del modello ha la guardia.',
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
  'lapuan-kankurit-poro-towel': {
    name: 'Asciugamano in lino Lapuan Kankurit PORO 46 x 70 cm',
    description:
      'Una renna disegnata dall’illustratore Matti Pikkujämsä, tessuta nel lanificio di Lapua con ordito in lino europeo e trama in cotone biologico. Si piega piatta in valigia, e il potere assorbente arriva solo dopo qualche lavaggio.',
    specs: [
      '46 x 70 cm',
      '60 % lino, Masters of Linen, e 40 % cotone',
      'Lino e verde',
      'Prodotto in Finlandia',
      'Lavare separatamente prima dell’uso a 60 °C con ciclo delicato e molta acqua. Non centrifugare. Evitare ammorbidente e candeggina. Non asciugare in asciugatrice. Stirare ancora umido. Restringimento circa 5 %',
      'Matti Pikkujämsä',
      '20527',
      'Bandiera Chiave finlandese, Masters of Linen',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      'Designer',
      'Codice prodotto',
      'Certificati',
    ],
  },
  'lapuan-kankurit-kaamos-blanket': {
    name: 'Coperta in lana Lapuan Kankurit KAAMOS 100 x 150 cm',
    description:
      'Kaamos è la notte polare, e Hanna Galtat ha ricavato il motivo dal modo in cui la luce del giorno si sposta nell’arco delle ore. Il filato di trama è lana di pecora finlandese che il lanificio raccoglie in fattorie entro circa 400 km da Lapua.',
    specs: [
      '100 x 150 cm',
      '100 % pura lana vergine',
      'Bianco e nero',
      'Prodotta in Finlandia',
      'Lavatela solo se molto sporca, altrimenti arieggiatela all’aperto. Lavaggio a mano a massimo 30 °C oppure a secco. Non strofinare, non tirare, non torcere. Non asciugare in asciugatrice. Stirare con un panno umido a massimo 150 °C',
      'Hanna Galtat',
      '102939',
      'Bandiera Chiave finlandese',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      'Designer',
      'Codice prodotto',
      'Certificato',
    ],
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
      'Anu Pentik ha dipinto le renne che continuano a comparire tra gli alberi durante una camminata sulla fjeld. I pezzi Studio sono dipinti a mano a Posio, quindi non esistono due piatti con esattamente le stesse pennellate.',
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
    name: 'Tavoletta Fazer Geisha al torrone di nocciole 121 g',
    description:
      'Cioccolato al latte sopra un ripieno croccante di torrone di nocciole, la tavoletta che la maggior parte delle case finlandesi tiene in un cassetto. Fazer dichiara che è prodotta senza olio di palma.',
    specs: [
      '121 g',
      'Cioccolato al latte con almeno 30 % di cacao, ripieno di torrone con 11 % di nocciole',
      'Energia 550 kcal / 2302 kJ, grassi 35 g, saturi 17 g, carboidrati 51 g, zuccheri 49 g, proteine 8 g, sale 0,19 g',
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
  'moomin-wild-blueberry-coffee': {
    name: 'Caffè Moomin Wild Blueberry 250 g',
    description:
      'Caffè aromatizzato al mirtillo di Bergstrands Kafferosteri, costruito su chicchi caracolito maturati sulle colline di Mogiana, nel sud del Brasile. Un caracolito è una ciliegia di caffè che ha formato un chicco solo invece di due, cosa che secondo la torrefazione concentra il gusto. 250 grammi.',
    specs: [
      '250 g',
      'Chicchi dalle colline di Mogiana, nel sud del Brasile, tostati da Bergstrands Kafferosteri',
      'Caracolito, una ciliegia di caffè con un chicco solo invece di due',
      'Mirtillo selvatico',
    ],
    specLabels: [undefined, undefined, 'Chicco', 'Aroma'],
  },
  'moomin-lingonberry-blueberry-dark-chocolate': {
    name: 'Cioccolato fondente Moomin con mirtillo rosso e mirtillo 70 g',
    description:
      'Cioccolato fondente biologico al 70 per cento di cacao di Kalmar Chokladfabrik con mirtilli rossi e mirtilli liofilizzati, avvolto in un disegno di Tove Jansson. Il cacao è Criollo e Trinitario dal Perù e la tavoletta è prodotta in Svezia.',
    specs: [
      '70 g',
      'Cioccolato fondente, 70 % di cacao',
      'Fave di cacao Criollo e Trinitario dal Perù, prodotto in Svezia',
      'Biologico',
    ],
    specLabels: [undefined, undefined, undefined, 'Dieta'],
  },
  'moomin-berry-picking-tea': {
    name: 'Tè Moomin Berry Picking, 20 filtri',
    description:
      'Tè nero con aromi di vaniglia e bacche rosse, miscelato nello stabilimento di Nurmijärvi in Finlandia e con la Bandiera Chiave finlandese. Il tè nasce da una collaborazione con la Croce Rossa finlandese: 0,40 euro per ogni confezione venduta vanno al lavoro della Croce Rossa con bambini, giovani e persone sole.',
    specs: [
      '20 x 1,75 g, 35 g',
      'Prodotto nello stabilimento di Nurmijärvi in Finlandia',
      'Tè certificato Rainforest Alliance, Bandiera Chiave finlandese',
      'Vegano',
    ],
    specLabels: [undefined, undefined, 'Certificazione', 'Dieta'],
  },
  'arctic-power-berries-blueberry-powder': {
    name: 'Polvere di mirtillo selvatico 70 g',
    description:
      'Mirtillo selvatico liofilizzato, senza nulla aggiunto. Il produttore dichiara che circa 700 grammi di bacche fresche finiscono in un barattolo da 70 grammi. Questo negozio prezza in sterline britanniche.',
    specs: [
      '70 g',
      '100 % polvere di mirtillo da mirtilli selvatici nordici. Senza nulla aggiunto',
      'Circa 700 g di bacche fresche danno 70 g di polvere di bacche',
      'Energia 367 kcal / 1559 kJ, proteine 5 g, carboidrati 54 g di cui zuccheri 34 g, fibre 31 g, grassi 0,8 g, sale 0,01 g',
    ],
    specLabels: [undefined, undefined, 'Bacche impiegate', 'Valori nutrizionali per 100 g'],
  },
  'arctic-power-berries-sea-buckthorn-powder': {
    name: 'Polvere di olivello spinoso 70 g',
    description:
      'Olivello spinoso nordico liofilizzato, 70 grammi, senza nulla aggiunto. Aspro e arancione acceso, quindi un cucchiaino rende nel porridge più di quanto si creda. Questo negozio prezza in sterline britanniche.',
    specs: [
      '70 g',
      '100 % polvere di olivello spinoso da bacche nordiche di olivello spinoso. Senza nulla aggiunto',
      'Circa 700 g di bacche fresche danno 70 g di polvere di bacche',
      'Energia 489 kcal / 2045 kJ, proteine 13 g, carboidrati 24 g di cui zuccheri 14 g, fibre 28 g, grassi 25 g, sale 0,06 g',
    ],
    specLabels: [undefined, undefined, 'Bacche impiegate', 'Valori nutrizionali per 100 g'],
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
      '40 g, lordo 0,046 kg',
      '3 x 11 x 17 cm',
      'Germoglio di abete liofilizzato',
      'Finlandia',
      'Da 1 a 3 cucchiaini al giorno',
      'Energia 1683 kJ / 402 kcal, proteine 12,1 g, carboidrati 77,8 g, grassi 4,19 g. Vitamina C 382 mg, vitamina A 970 µg, vitamina K1 332 mg, potassio 1200 mg, fosforo 350 mg, calcio 130 mg, magnesio 120 mg, zinco 3,6 mg, ferro 2 mg',
      'Raccolti su licenza in boschi biologici di proprietà dell’amministrazione forestale dello Stato finlandese, un anno sì e uno no per bosco',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      undefined,
      'Dosaggio',
      'Valori nutrizionali per 100 g',
      'Raccolta',
    ],
  },
  'arctic-warriors-nettle-powder': {
    name: 'Polvere di ortica Arctic Warriors 150 g',
    description:
      'Ortica coltivata in fattorie biologiche della Lapponia, liofilizzata in una polvere abbastanza neutra da finire in una zuppa o nel pane senza litigare con il resto del piatto. 22 000 mg di calcio per 100 g.',
    specs: [
      '150 g, lordo 0,162 kg',
      '4 x 16 x 23 cm',
      'Ortica liofilizzata',
      'Finlandia, coltivata in fattorie biologiche della Lapponia',
      'Da 1 a 5 cucchiaini al giorno',
      'Energia 1484 kJ / 354 kcal, proteine 23,6 g, carboidrati 56 g, grassi 3,44 g, sale meno di 5 mg. Vitamina A 1900 µg, calcio 22000 mg, magnesio 5300 mg, ferro 68 mg',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Dosaggio', 'Valori nutrizionali per 100 g'],
  },
  'arctic-warriors-roseroot-elixir': {
    name: 'Elisir di rodiola Arctic Warriors 100 ml',
    description:
      'La rodiola cresce sulle rive umide dei ruscelli e sulle pareti di roccia delle fjeld lapponi, e Arctic Warriors la estrae in glicerolo vegetale insieme all’ortica. Un cucchiaino va nel tè, nel porridge o nello yogurt.',
    specs: [
      '100 ml, lordo 0,270 kg',
      '4,5 x 4,5 x 13 cm',
      'Glicerolo vegetale, ortica, rodiola',
      'Finlandia',
      'Da 1 a 2 cucchiaini al giorno',
      'Senza latticini, senza glutine, vegano. Il glicerolo vegetale non incide sulla glicemia',
      'Un integratore alimentare non sostituisce una dieta varia. Tenere fuori dalla portata dei bambini e non superare la dose indicata',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Dosaggio', 'Dieta', 'Nota'],
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
    name: 'Giacca strato intermedio Halti HeatGrid, uomo',
    description:
      'Una maglia a nido d’ape che intrappola aria senza aggiungere volume sotto un guscio. Questo è lo strato tra il merino e il parka, e lasciarlo fuori è il motivo per cui la gente torna infreddolita.',
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
  'foodin-six-mushroom-blend': {
    name: 'Foodin miscela di sei funghi 100 g',
    description:
      'Chaga, reishi, criniera di leone, cordyceps, shiitake e maitake in un solo barattolo, macinati per caffè o frullati. Un barattolo copre l\'intero scaffale dei funghi funzionali.',
    specs: ['100 g', 'Chaga, reishi, criniera di leone, cordyceps, shiitake, maitake'],
  },
  'foodin-nordic-berry-powder': {
    name: 'Foodin miscela di bacche nordiche in polvere 120 g',
    description:
      'Una miscela finlandese di bacche del nord in un\'unica polvere, per porridge e yogurt. Il modo più leggero di portare a casa un\'estate di bacche nordiche.',
    specs: ['120 g', 'Prodotto in Finlandia'],
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
      'Calzini bianchi a coste con Moomintroll ricamato dentro un cuore rosa sullo stinco, ricamato e non stampato, quindi resiste al lavaggio. Una taglia copre dalla EU 36 alla 42.',
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
    name: 'Set copripiumino Moomin 150 x 210 cm, Sydankapyset',
    description:
      'Set letto in cotone certificato GOTS, con Moomintroll e la Signorina Snork. Il nome finlandese della fantasia, Sydankapyset, descrive proprio il rapporto che il disegno racconta.',
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
  'sk-arabia-moomin-mug-friendship': {
    name: 'Tazza Moomin Arabia 0,3 l, Amicizia',
    description:
      'Una tazza Moomin di Arabia con il motivo Amicizia, in cui il timido Toffle trova un messaggio in bottiglia di Miffle e parte a cercarla. Arabia produce tazze Moomin in Finlandia dal 1990 e ritira ogni motivo a turno, ed è per questo che le vecchie si collezionano.',
    specs: [
      '0,3 l',
      'Amicizia, dalla storia di Toffle e Miffle',
    ],
    specLabels: [undefined, 'Motivo'],
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
      'Il paio bordeaux che fa il paio con le muffole di Moomin, stessa fodera in pile e stesso prezzo. Il polsino è due centimetri più corto, e il personaggio va a chi trova Moomin un po’ troppo accomodante.',
    specs: [
      '100 % acrilico, fodera in pile',
      'Adulto, altezza 22 cm, larghezza sopra il pollice 9,5 cm',
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
}
