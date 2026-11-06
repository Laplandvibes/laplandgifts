import type { ProductCopyMap } from './index'

/**
 * Tuotteiden ruotsinkieliset tekstit. Rakenne ja säännöt: ks. de.ts.
 *
 * `specs` on positionaalinen: indeksi vastaa `product.details.specs`-taulukon
 * järjestystä lähdedatassa. `specLabels` samoin, ja siinä on arvo vain niillä
 * riveillä joilla on oma otsikko (`key: 'other'`).
 *
 * Lukuja, mittayksiköitä, tuotekoodeja ja EAN-numeroita ei käännetä eikä
 * muunneta. Numerofragmentit kopioidaan lähteestä sellaisinaan, myös
 * välilyöntien osalta ("20 000 mm" pysyy välilyönnillä, "10000 mm" ilman).
 * Vain desimaalierotin vaihtuu pilkuksi ruotsalaisen tavan mukaan, minkä
 * numeroiden-täsmäävyystesti sallii.
 */
export const PRODUCT_COPY_SV: ProductCopyMap = {
  'iittala-aalto-vase-160': {
    name: 'Iittala Alvar Aalto vas 160 mm, klar',
    description:
      'Alvar Aalto ritade den här vågen 1936 och Iittala munblåser den fortfarande, så konturen skiljer sig något från exemplar till exemplar. Storleken 160 mm är den man ser framför sig när namnet nämns.',
    specs: [
      'Höjd 16 cm, bredd 20,5 cm',
      'Glas',
      'Genomskinlig',
      '1,44 kg brutto',
      'Endast handdisk',
      'Munblåst glas, asymmetrisk form',
      'Alvar Aalto, Iittala Alvar Aalto Collection',
      '999-01, EAN 6411920004445',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      'Tillverkning',
      'Formgivare och kollektion',
      'Artikelnummer och EAN',
    ],
  },
  'iittala-kivi-candleholder': {
    name: 'Iittala Kivi värmeljushållare 60 mm, grå',
    description:
      'En pressad värmeljushållare i glas av Heikki Orvola, 6 cm hög, som gör ett värmeljus till ett färgblock. Det är det billigaste sättet att äga en bit Iittala och den klarar handbagaget.',
    specs: [
      '6,5 x 6,5 cm, höjd 6 cm',
      'Glas',
      'Grå',
      '0,338 kg brutto',
      'Endast handdisk',
      'Heikki Orvola, Iittala Kivi',
      '1003-03, EAN 6411920039676',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, 'Formgivare och kollektion', 'Artikelnummer och EAN'],
  },
  'marimekko-unikko-mug': {
    name: 'Marimekko Unikko mugg 25 cl',
    description:
      'Maija Isola ritade vallmon Unikko 1964 efter att Marimekko hade förbjudit blommönster, och mönstret överlevde förbudet. Den här muggen i stengods rymmer 25 cl och flyttar trycket till frukostbordet i stället för väggen.',
    specs: [
      '25 cl',
      'Diameter 8 cm, höjd 9,5 cm',
      'Stengods',
      'Vitt, mörkgrönt, beige och ljus sand',
      '0,276 kg brutto',
      'Mönster av Maija Isola, mugg av Sami Ruotsalainen',
      '666236-01, EAN 6411255152033',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      'Formgivare',
      'Artikelnummer och EAN',
    ],
  },
  'halti-tokoi-dx-jacket': {
    name: 'Halti Tokoi DX skaljacka, herr',
    description:
      'Ett vädertåligt skal med tejpade sömmar, lätt foder och justerbar huva, klippt tillräckligt rymligt för en ylletröja under. Halti levererar endast inom EU.',
    specs: [
      'DrymaxX Sleek Twill, ett vatten- och vindtätt 2-lagerstyg med DrymaxX-membran. Materialinnehåll 50 % återvunnen polyester och 50 % polyester',
      'Mjukt polyesterfoder, 100 % återvunnen polyester',
      '10000 mm',
      '10000 g/m²/24 h',
      '0,9 kg',
      'S, M, L, XL, XXL, XXXL',
      'Fossil Beige, Four Leaf Clover Green, Black',
      'Alla sömmar tejpade, justerbar fast huva, hög ståkrage, 2-vägs dragkedja fram, nätventilation, sidfickor med dragkedja, innerficka med tryckknapp, justerbara ärmslut, vindslå fram, reflexdetaljer',
      'Tvätta ut och in med liknande färger och stäng dragkedjorna först. Högst 30 °C, skonsam process. Blek inte, torktumla inte, stryk inte och kemtvätta inte',
    ],
    specLabels: [
      undefined,
      'Foder',
      'Vattenpelare',
      'Andningsförmåga',
      undefined,
      undefined,
      undefined,
      'Detaljer',
      undefined,
    ],
  },
  'makia-merino-beanie': {
    name: 'Makia Merino mössa',
    description:
      'En enkel nordisk mössa i merinoull, som balanserar värme och fukt när du går från ett varmt kafé rakt ut i kylan. Ingen knytnävsstor logga fram.',
    specs: [
      '100 % merinoull, patentstickning 8 gauge, mulesingfri',
      'One size',
      'Dark Brown',
      'Tillverkad i Finland, materialet tillverkat i Italien',
      'Tvätta med liknande färger i skontvätt, torka plant och forma om. Vädring räcker ofta i stället för tvätt. Noppor kan uppstå med användning',
    ],
  },
  'makia-aurora-hoodie': {
    name: 'Makia Aurora huvtröja',
    description:
      'En huvtröja i regular fit i 100 procent ekologisk bomull från Helsingforsmärket Makia. Tjock nog att bära som ytterplagg inomhus och milda höstkvällar.',
    specs: [
      '100 % ekologisk bomull, 370 g french terry',
      'S, M, L, XL, XXL',
      'Carbon Black',
      'Regular fit, snören i huvan, kängurificka, mudd i nederkant och ärmslut, vävda etiketter av återvunnen polyester',
      'Tillverkad i Turkiet, materialet tillverkat i Turkiet',
      'Tvätta ut och in med liknande färger. Stryk inte på trycket. Krympning högst 5 %. Forma om medan plagget är fuktigt',
    ],
    specLabels: [undefined, undefined, undefined, 'Passform och detaljer', undefined, undefined],
  },
  'halti-kroka-mitten': {
    name: 'Halti Kroka II tumvante',
    description:
      'En vindtät tumvante med 60 g isolering och silikongrepp i handflatan, klippt unisex. Vantar slår handskar när vinden tar i, eftersom fingrarna värmer varandra.',
    specs: [
      'Stormwall softshell, 50 % polyester och 50 % återvunnen polyester. Mjuk fleece 100 % polyester. Muddar i lycratrikå',
      'Microtherm Dynamic 60 g, foder Active Dry soft touch-trikå, 100 % återvunnen polyester',
      '0,1 kg',
      '06, 07, 08, 09, 10, 11, 12',
      'Svart',
      'Tvätta separat i 30 °C i skonsam process. Blek inte, torktumla inte, stryk inte och kemtvätta inte',
      '084-0757',
    ],
    specLabels: [
      undefined,
      'Isolering och foder',
      undefined,
      undefined,
      undefined,
      undefined,
      'Produktnummer',
    ],
  },
  'halti-tunturit-ski-socks': {
    name: 'Halti Tunturit skidstrumpor',
    description:
      'Knähöga strumpor i merinoblandning med vaddering över smalbenet och vristen, alltså där pjäxan trycker. Halti uppger att de är tillverkade i Europa.',
    specs: [
      'Merinoullblandning: 36 % polyamid, 23 % akryl, 23 % merinoull, 16 % polypropen, 2 % elastan',
      '0,1 kg',
      '34-36, 37-39, 40-42, 43-45, 46-48',
      'Sargasso Sea Blue, Lemon Pepper Beige',
      'Tillverkade i Europa',
      'Vaddering över smalben och vrist, knähög längd, förstärkt häl och tå, ventilationszoner på smalbenet och ovanpå foten',
      'Högst 40 °C, normal process. Stryk inte, blek inte, kemtvätta inte och torktumla inte',
      '087-0471',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      'Detaljer',
      undefined,
      'Produktnummer',
    ],
  },
  'north-outdoor-huuru-beanie': {
    name: 'North Outdoor Huuru merinomössa',
    description:
      'North Outdoor stickar den här ribbmössan i sitt eget stickeri i Uleåborg av 100 procent mulesingfri merino, 18,5 mikron. Stickad till form i stället för tillskuren, så spillet blir litet.',
    specs: [
      '100 % merinoull, mulesingfri, 18,5 mikron, stickning 270 g/m²',
      'One size',
      'Indigoblå',
      'Tillverkad i Uleåborg, Finland',
      'Vädra regelbundet och tvätta bara vid behov. Ylletvättmedel, skontvätt i 30 °C med lägsta centrifugering, ut och in',
      'OEKO-TEX, Woolmark',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, 'Certifikat'],
  },
  'north-outdoor-pyry-scarf': {
    name: 'North Outdoor Pyry merinohalsduk',
    description:
      'En bred och lång patentstickad halsduk i 100 procent merino, stickad i Uleåborg. Lång nog att svepa på flera sätt, vilket spelar roll när vinden byter riktning på ett kalfjäll.',
    specs: [
      '100 % merinoull, 18,5 mikron, 1/1 ribbstickning',
      'One size',
      'Grötgrå',
      'Tillverkad i Uleåborg, Finland',
      'Vädra regelbundet och tvätta bara vid behov. Ylletvättmedel, skontvätt i 30 °C med lägsta centrifugering, ut och in',
      'OEKO-TEX, Woolmark',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, 'Certifikat'],
  },
  'north-outdoor-honka-jumper': {
    name: 'North Outdoor Honka merinotröja, herr',
    description:
      'En tjock patentstickad tröja i 100 procent merino med avspänd passform och sänkt axellinje. Tung att se på, lätt att bära, och stickad i fabriken i Uleåborg.',
    specs: [
      '100 % merinoull, mulesingfri, 18,5 mikron, växlande ribbstickning',
      'S, M, L, XL, 2XL, 3XL',
      'Indigoblå',
      'Tillverkad i Uleåborg, Finland',
      'Vädra regelbundet och tvätta bara vid behov. Ylletvättmedel, skontvätt i 30 °C med lägsta centrifugering, ut och in',
      'OEKO-TEX, Woolmark',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, 'Certifikat'],
  },
  'marttiini-lapinleuku-255': {
    name: 'Marttiini Lapinleuku 255',
    description:
      'Den traditionella lappländska kniven (lapinleuku), 27 cm totalt, med rostfritt blad, lackat masurbjörkskaft och läderslida. Marttiini tillverkar sina knivar i Rovaniemi, och den här versionen av modellen har fingerskydd.',
    specs: [
      '16 cm',
      'Total längd 27 cm',
      'Blad i rostfritt stål, skaft i lackad masurbjörk, slida i läder',
      'Kniv och läderslida med tryckknapp',
      '255010',
    ],
    specLabels: ['Bladlängd', undefined, undefined, undefined, 'Produktnummer'],
  },
  'marttiini-napapiirin-puukko': {
    name: 'Marttiini Polcirkelkniv',
    description:
      'En liten vardagskniv, 20 cm totalt, med blad i kolstål, vaxat björkskaft och brun läderslida. Kolstål tar en vassare egg än rostfritt men behöver oljas, vilket Marttiini också påminner om på produktsidan.',
    specs: [
      '9 cm',
      'Total längd 20 cm',
      'Blad i kolstål, skaft i vaxad björk, slida i brunt läder',
      'Torka alltid bladet noga efter användning och olja det regelbundet med osaltad olja',
      '121019',
    ],
    specLabels: ['Bladlängd', undefined, undefined, undefined, 'Produktnummer'],
  },
  'marttiini-ilves-131': {
    name: 'Marttiini Lodjur 131',
    description:
      'En kniv på 22 cm med rostfritt blad, lackat masurbjörkskaft och brun läderslida. Marttiini uppger att modellen Lodjur ritades av grundaren Janne Marttiini på 1930-talet.',
    specs: [
      '11 cm',
      'Total längd 22 cm',
      'Blad i rostfritt stål, skaft i lackad masurbjörk, slida i brunt läder',
      '131010',
    ],
    specLabels: ['Bladlängd', undefined, undefined, 'Produktnummer'],
  },
  'kupilka-classic-cup-21': {
    name: 'Kupilka 21 friluftskåsa 2,1 dl',
    description:
      'Kåsans form i ett material som tål maskindisk: hälften tallcellulosafiber, hälften termoplast, formsprutat i Finland. Den rymmer 2,1 dl, väger 83 gram och bränner inte fingrarna vid elden.',
    specs: [
      '2,1 dl',
      '83 g',
      '60 x 93 x 165 mm',
      'Kareline naturfiberkomposit, 50 % tallcellulosafiber och 50 % termoplast, tillverkad med ekoenergi',
      'Finland',
      'Skölj den på turen som en kåsa i trä, hemma går den i diskmaskinen. Inte för mikro',
      '3021011XX',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, undefined, 'Modellnummer'],
  },
  'kupilka-bowl-55': {
    name: 'Kupilka 55 friluftsskål 5,5 dl',
    description:
      'En skål på 5,5 dl med ett handtag stadigt nog att hålla i ena handen medan den andra håller muggen. Samma finska tallfiberkomposit som kåsan, 184 gram, tål maskindisk.',
    specs: [
      '5,5 dl',
      '184 g',
      '54 x 154 x 223 mm',
      'Kareline naturfiberkomposit, 50 % tallcellulosafiber och 50 % termoplast, tillverkad med ekoenergi',
      'Finland',
      'Tål maskindisk. Inte för mikro. Godkänd för kontakt med varm och kall mat',
      '3055013X',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, undefined, 'Modellnummer'],
  },
  'kupilka-cutlery-set': {
    name: 'Kupilka bestickset',
    description:
      'Sked, kniv och gaffel i samma finska träfiberkomposit, 56 gram för setet. Det billigaste sättet att ta hem Kupilkas material och det enklaste att få plats med i handbagaget.',
    specs: [
      'Sked, kniv och gaffel',
      '56 g',
      'Kareline naturfiberkomposit, 50 % tallcellulosafiber och 50 % termoplast, tillverkad med ekoenergi',
      'Finland',
      'Skölj på turen som bestick i trä, hemma går det i diskmaskinen. Inte för mikro',
      '3025025X',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, 'Modellnummer'],
  },
  'pentik-posio-mug': {
    name: 'Pentik Posio mugg 0,3 l',
    description:
      'Pentik bränner den här muggen i Posio, som företaget kallar världens nordligaste keramikfabrik, och hela Posio-serien är dekorerad med renar. Tål maskindisk, ugn, mikro och frys.',
    specs: [
      '0,3 l',
      'Röd',
      'Tillverkad i Posio i Lappland, som Pentik kallar världens nordligaste keramikfabrik',
      'Tål maskindisk, elugn, bakugn, mikro och frys',
      'Posio. Varje del i serien är dekorerad med renar',
      '12JAO050P41',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Kollektion', 'Produktkod'],
  },
  'pentik-tunturiretki-studio-dish': {
    name: 'Pentik Tunturiretki Winter Studio djup triangelskål 19 cm',
    description:
      'Anu Pentik målade renarna som hela tiden dyker upp mellan träden på en fjällvandring. Studiodelarna handmålas i Posio, så inga två skålar bär exakt samma penseldrag.',
    specs: [
      'Diameter 19 cm',
      'Blå',
      'Handgjord i Posio i Lappland, formgiven av Anu Pentik',
      'Tål maskindisk, elugn, bakugn, mikro och frys',
      'Pentik Studio, den handmålade serien',
      '12ST353TT61',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Kollektion', 'Produktkod'],
  },
  'kuivalihakundi-poro-jerky': {
    name: 'Torkat renkött Original 2 x 20 g',
    description:
      'Två påsar på 20 gram torkat renkött av 100 procent finsk ren, ugnstorkat och marinerat med glutenfri sojasås, svartpeppar, vitlök och sockersirap. Kött får inte postas utanför EU, så leveransen stannar vid EU-gränsen.',
    specs: [
      '2 x 20 g',
      'Köttet kommer från Finland',
      'Hållbarheten löper ungefär ett år från dagen då köttet torkades och packades. Behöver inte förvaras kallt, inte heller efter öppnande',
      'Starkt saltat. Glutenfritt',
      'Energi 1514 kJ / 360 kcal, fett 14,2 g varav mättat 6,2 g, kolhydrat 7,9 g varav sockerarter 5,1 g, protein 50,2 g, salt 9,5 g',
    ],
    specLabels: [undefined, undefined, undefined, 'Anteckningar på etiketten', 'Näringsvärde per 100 g'],
  },
  'finnish-flavours-palalaku-salmiakki': {
    name: 'Finnish Flavours Premium Palalaku salmiak 150 g',
    description:
      'En påse på 150 gram mjuk salmiaklakrits, sorten med salmiaksalt som delar besökare i två läger vid första biten. Suomikauppa postar livsmedel långt utanför Finland.',
    specs: [
      '150 g',
      'Energi 1316 kJ / 311 kcal, fett 0,5 g varav mättat 0 g, kolhydrat 72 g varav sockerarter 50 g, protein 4,1 g, salt 1,7 g',
      'Finnish Flavours, Kumitehtaankatu 5, 04260 Kerava',
    ],
    specLabels: [undefined, 'Näringsvärde per 100 g', 'Marknadsförs av'],
  },
  'meritalo-tyrnihillo': {
    name: 'Meritalo finsk havtornssylt 310 g',
    description:
      'Havtornssylt med 37 gram bär per 100 gram, kokad på finsk havtorn på familjegården Meritalo i Salo i sydvästra Finland snarare än i Lappland. Havtorn är syrlig snarare än söt, så den räcker längre bredvid ost än på en pannkaka.',
    specs: [
      '310 g',
      'Bären är finska. Tillverkad av ett familjeföretag på hemgården Meritalo i Salo i sydvästra Finland',
      'Energi 781 kJ / 187 kcal, fett 1,9 g varav mättat 0,3 g, kolhydrat 41 g varav sockerarter 41 g, protein 0,3 g, salt 0,01 g',
      'Marjajaloste Meritalo Oy, 25610 Ylönkylä',
    ],
    specLabels: [undefined, undefined, 'Näringsvärde per 100 g', 'Marknadsförs av'],
  },
  'kuivalihakundi-poro-jerky-200g': {
    name: 'Torkat renkött Original 200 g',
    description:
      'Presentstorleken av samma torkade renkött, 200 gram. Producenten uppger att ett kilo torkat kött kräver tre kilo färskt, vilket är största delen av förklaringen till vad en påse kostar.',
    specs: [
      '200 g',
      '100 % renkött, innanlår, ugnstorkat och marinerat',
      '1 kg torkat kött kräver 3 kg färskt kött',
      'Hållbarheten löper ungefär ett år från dagen då köttet torkades och packades. Behöver inte förvaras kallt, inte heller efter öppnande',
    ],
    specLabels: [undefined, undefined, 'Åtgång av kött', undefined],
  },
  'kuivalihakundi-beef-jerky-smoked': {
    name: 'Torkat nötkött Smoked 40 g',
    description:
      'Nöt i stället för ren, faktiskt rökt snarare än rökaromatiserat, 57 gram protein per 100. Det billigaste i den här kategorin och det som överlever en ryggsäck.',
    specs: [
      '40 g',
      'Nötköttet är uppfött och slaktat inom EU',
      '1 kg torkat kött kräver 2,5 kg färskt nötkött',
      'Energi 1261 kJ / 298 kcal, fett 5,5 g varav mättat 2,4 g, kolhydrat 5,2 g varav sockerarter 4,4 g, protein 56,9 g, salt 5 g',
    ],
    specLabels: [undefined, undefined, 'Åtgång av kött', 'Näringsvärde per 100 g'],
  },
  'fazer-geisha-chocolate-bar': {
    name: 'Fazer Geisha chokladbitar 37 g, 5-pack',
    description:
      'Fem Geishabitar på 37 g där Fazers mjölkchoklad omsluter en spröd fyllning av hasselnötsnougat. Fazer uppger att chokladen är tillverkad utan palmolja.',
    specs: [
      '5 x 37 g',
      'Mjölkchoklad med minst 30 % kakao, hasselnötsnougatfyllning med 11 % hasselnötter',
      'Energi 550 kcal / 2303 kJ, fett 35 g, mättat 17 g, kolhydrat 51 g, sockerarter 49 g, protein 8 g, salt 0,19 g',
    ],
    specLabels: [undefined, undefined, 'Näringsvärde per 100 g'],
  },
  'nordqvist-moomin-forest-berry-tea': {
    name: 'Nordqvist Moomin skogsbär- och hibiskuste, 20 påsar',
    description:
      'Ekologisk hibiskus med äpple och skogsbär, naturligt koffeinfritt, blandat i Nordqvists fabrik i Nurmijärvi. Tjugo påsar väger 35 gram, vilket är den lättaste presenten i den här butiken.',
    specs: [
      '20 x 1,75 g, 35 g',
      'Blandat i Nordqvists fabrik i Nurmijärvi, Finland',
      '95 °C i 2 till 4 minuter. I kallt vatten 5 till 10 minuter',
      'Ekologiskt certifierat, veganskt, glutenfritt, naturligt koffeinfritt',
    ],
    specLabels: [undefined, undefined, 'Bryggning', 'Kost'],
  },
  'nordqvist-cranberry-toffee-tea': {
    name: 'Nordqvist tranbär och saltkola-te, 20 påsar',
    description:
      'Syrligt tranbär mot saltkola på en bas av hibiskus och rooibos, alltså koffeinfritt och ändå med smak kvar på kvällen. Nordqvist har blandat te i Finland sedan 1883.',
    specs: [
      '20 x 1,75 g, 35 g',
      '95 °C i 2 till 5 minuter',
      'Veganskt. Hibiskus och rooibos är Rainforest Alliance-certifierade',
    ],
    specLabels: [undefined, 'Bryggning', 'Kost och certifiering'],
  },
  'kaapa-mushrooms-pakuri-powder': {
    name: 'Kääpä Mushrooms sprängtickeextrakt i pulver 30 g',
    description:
      'En burk på 30 gram sprängtickeextrakt i pulver från Kääpä Mushrooms, som skördar funktionella svampar i nordiska skogar, avsett att röras ner i varma drycker. Ruohonjuuri levererar endast inom EU:s tull- och skatteområde, och etiketten listar läkemedelsinteraktioner som är värda att läsa först.',
    specs: [
      '30 g',
      '100 % sprängticka, ekologisk. 100 mg betaglukan per dagsdos',
      'Finland',
      'Ekologisk med EU:s ekologiska löv. Glutenfri, laktosfri, mjölkfri, sojafri, sockerfri, koffeinfri, utan tillsatser, vegansk, vild',
      'Sprängticka får inte användas samtidigt med antibiotika, blodförtunnande läkemedel, penicillin eller intravenös glukos. Ta den dos som anges på förpackningen och överskrid den inte',
      '6430071310212',
    ],
    specLabels: [undefined, undefined, undefined, 'Kost', 'Varning', 'EAN'],
  },
  'arctic-warriors-spruce-sprout-powder': {
    name: 'Arctic Warriors granskottspulver 40 g',
    description:
      'Frystorkade granskott, handplockade under ett tvåveckorsfönster i ekologiska statliga skogar, och bara vartannat år ur samma skog. Citrus och kåda i en sked, 382 mg C-vitamin per 100 g.',
    specs: [
      '40 g',
      'Frystorkade granskott',
      '382 mg per 100 g',
    ],
    specLabels: [undefined, undefined, 'C-vitamin'],
  },
  'arctic-warriors-nettle-powder': {
    name: 'Arctic Warriors nässelpulver 150 g',
    description:
      'Nässla odlad på ekologiska gårdar i Lappland, frystorkad till ett pulver neutralt nog att röras ner i soppa eller bröd utan att bråka med resten av rätten.',
    specs: [
      '150 g, brutto 0,162 kg',
      '4 x 16 x 23 cm',
      'Frystorkad nässla',
      'Finland, odlad på ekologiska gårdar i Lappland',
      '1 till 5 teskedar per dag',
      'Energi 1484 kJ / 354 kcal, protein 23,6 g, kolhydrat 56 g, fett 3,44 g, salt under 5 mg. A-vitamin 1900 µg',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Dosering', 'Näringsvärde per 100 g'],
  },
  'arctic-warriors-roseroot-elixir': {
    name: 'Arctic Warriors rosenrotselixir 100 ml',
    description:
      'Rosenrot växer på fuktiga bäckstränder och klippväggar på Lapplands fjäll, och Arctic Warriors extraherar den i vegetabiliskt glycerol tillsammans med nässla. En tesked går i te, gröt eller yoghurt.',
    specs: [
      '100 ml',
      'Rosenrot och nässla',
    ],
  },
  'omega7-sea-buckthorn-olive-oil': {
    name: 'Omega7 SBA24 havtorns- och olivolja 150 ml',
    description:
      'Havtornsbärolja och fröolja tillsammans med olivolja, utvecklad och tillverkad i Finland. Producenten standardiserar halterna av A- och E-vitamin i stället för att låta skörden avgöra dem.',
    specs: [
      '150 ml',
      'Havtornsbärolja och fröolja med olivolja, standardiserade halter av A- och E-vitamin',
      'Utvecklad och tillverkad i Finland',
      'Följ doseringen på förpackningen och överskrid den inte. Ett kosttillskott ersätter inte en varierad kost. Förvaras utom räckhåll för barn',
    ],
    specLabels: [undefined, undefined, undefined, 'Observera'],
  },
  'kaino-spruce-sprout-sparkling': {
    name: 'KAINO Drinks mousserande granskottsdryck 0,2 l',
    description:
      'En alkoholfri mousserande dryck gjord på finska ekologiska råvaror, så att en skål i stugan inte behöver innehålla alkohol. Servera den kall, annars försvinner granaromen under bubblorna.',
    specs: [
      '0,2 l',
      'Gjord på 100 % finska ekologiska råvaror. Alkoholfri',
      'Finland',
      'Energi 122,65 kJ / 29,3 kcal, fett under 0,1 g varav mättat under 0,1 g, kolhydrat 6,9 g varav sockerarter 6,9 g, protein under 0,1 g, salt under 0,1 g',
      'Vegansk. EU:s ekologiska löv',
    ],
    specLabels: [undefined, undefined, undefined, 'Näringsvärde per 100 ml', 'Kost och certifiering'],
  },
  'arabia-moomin-mug-snufkin': {
    name: 'Arabia Moominmugg, Snusmumriken',
    description:
      'Arabia har tryckt Tove Janssons teckningar på de här muggarna sedan 1990, och samlare håller reda på de utgångna motiven efter årtal. Snusmumriken är den som ger sig av på hösten och kommer tillbaka på våren.',
    specs: ['0,3 l', 'Tove Jansson'],
    specLabels: [undefined, 'Illustration'],
  },
  'arabia-moomin-mug-friendship': {
    name: 'Arabia Moominmugg, Friendship',
    description:
      'Muggen visar Ninni, det osynliga barnet som är rädd för mörkret och långsamt blir synligt igen när någon är vänlig mot henne. Ett tystare val än de välkända figurerna.',
    specs: ['0,3 l', 'Tove Jansson'],
    specLabels: [undefined, 'Illustration'],
  },
  'arabia-moomin-figurine-moomintroll': {
    name: 'Arabia Moomin minifigur, Moomintrollet',
    description:
      'En handgjord keramikfigur ritad av Tuulikki Pietilä på 1990-talet och såld i egen ask. Liten nog att resa hem i en rockficka.',
    specs: ['Tuulikki Pietilä, 1990-talet', 'Handgjord keramik, säljs i egen ask'],
    specLabels: ['Formgivare', 'Tillverkning'],
  },
  'fiskars-moominpappa-scissors': {
    name: 'Fiskars Moominpappa universalsax',
    description:
      'Fiskars saxar med orange handtag ligger i fler finska köksbord än något annat redskap. Den här är 21 cm i rostfritt stål med Moominpappa på handtaget.',
    specs: ['21 cm', 'Rostfritt stål'],
  },
  'rento-tar-sauna-soap': {
    name: 'Rento tjärbastutvål 150 g',
    description:
      'Tjära är en finsk doft innan den är en finsk smak, och den hör hemma i bastun mer än någon annanstans. Vegetabilisk oljebas, upphängd i ett jutesnöre så att den torkar mellan basturna.',
    specs: ['150 g', 'Tvål på vegetabilisk oljebas'],
  },
  'rento-birch-sauna-honey': {
    name: 'Rento bastuhonung med björk 150 ml',
    description:
      'Bred ut den på ren hud, låt den verka i den milda värmen, skölj av med varmt vatten. Bastuhonung är den del av det finska basturitualet som besökare aldrig kommer på att ta med hem.',
    specs: ['150 ml'],
  },
  'rento-blueberry-sauna-honey': {
    name: 'Rento bastuhonung med blåbär 150 ml',
    description:
      'Varianten med skrubbeffekt, doftsatt med blåbär. Samma användning som björkvarianten: på ren hud, låt värmen göra jobbet, skölj av med varmt vatten.',
    specs: ['150 ml'],
  },
  'rento-sauna-pillow': {
    name: 'Rento Pino bastukudde 50 x 22 cm',
    description:
      'En jacquardvävd kudde för huvud och nacke på lavarna. Den behåller formen, och det är hela skillnaden mellan en bastukudde och en hopvikt handduk.',
    specs: ['50 x 22 cm', 'Svart'],
  },
  'rento-linen-back-scrubber': {
    name: 'Rento ryggskrubb i linnefrotté 14 x 70 cm',
    description:
      'Linnefrotté, långt nog att nå över den egna ryggen. Huden mjuknar först i värmen och tvättas efteråt, och det är den ordning finnar följer utan att tänka på det.',
    specs: ['14 x 70 cm', 'Linnefrotté'],
  },
  'rento-linen-wash-mitt': {
    name: 'Rento tvättvante i linnefrotté 14 x 24 cm',
    description:
      'Samma linnefrotté som ryggskrubben, i en vante med dubblerad handflata. Det billigaste i det här avsnittet och det som faktiskt används varje vecka.',
    specs: ['14 x 24 cm', 'Linnefrotté, dubblerad handflata'],
  },
  'emendo-sauna-scents': {
    name: 'Emendo bastudofter: salmiak, tallkåda, sisu, 3 x 10 ml',
    description:
      'Tre dofter på ett träställ, och en av dem är salmiak. Mycket finskare än salmiak och bastu blir det inte, och det här setet lägger båda i samma skopa.',
    specs: ['3 x 10 ml på ett träställ', 'Salmiak, tallkåda, sisu'],
    specLabels: [undefined, 'Dofter'],
  },
  'aurora-mini-kuksa': {
    name: 'Minikåsa med läderögla, 4 cm',
    description:
      'En kåsa på 4 cm avsedd för en snaps snarare än kaffe, med en läderögla för bältet. Det minsta och billigaste sättet att äga formen.',
    specs: ['Diameter 4 cm'],
  },
  'pahkataide-kuksa-bear': {
    name: 'Pahkataide kåsa i masurbjörk med björn i beninläggning',
    description:
      'En kåsa i masurbjörk, med en beninläggning på handtaget som bär ett björnmotiv. Pahkataide behandlar sina kåsor med vallmoolja som skyddar träet. Den diskas aldrig med diskmedel: det räcker att skölja, och kaffe varje dag bygger upp en hinna som skyddar ytan ytterligare.',
    specs: [
      'Masurbjörk, beninläggning på handtaget',
      'Skölj med vatten, inget diskmedel',
      'Tillverkad i Finland',
    ],
    specLabels: [undefined, undefined, 'Ursprung'],
  },
  'pahkataide-curly-birch-kuksa': {
    name: 'Pahkataide kåsa i masurbjörk',
    description:
      'En enkel kåsa i masurbjörk, samma trä och samma behandling med vallmoolja som Pahkataides kåsor med inläggning, utan dekor. Ådringen gör varje exemplar olika, och den rymmer ungefär 1,5 dl.',
    specs: [
      'Masurbjörk',
      'Cirka 1,5 dl, varje exemplar är unikt',
      'Skölj med vatten, inget diskmedel',
      'Tillverkad i Finland',
    ],
    specLabels: [undefined, undefined, undefined, 'Ursprung'],
  },
  'koivumaa-kuksa-reindeer-bone': {
    name: 'Kuksa E. Koivumaa kåsa av björkvril med renben',
    description:
      'En kåsa tillverkad av björkvril på traditionellt sätt, med två fingerhål i handtaget och en dekor av renben. Björkvril bränner inte läpparna, och därför är det den klassiska koppen för varmt kaffe vid elden. Kör in den med svart kaffe och skölj den sedan bara.',
    specs: [
      'Björkvril, dekor av renben på handtaget',
      'Cirka 1,5 dl, två hål i handtaget',
      'Skölj med vatten, inget diskmedel och ingen diskmaskin',
    ],
  },
  'koivumaa-burl-kuksa': {
    name: 'Kuksa E. Koivumaa kåsa av björkvril, ett hål',
    description:
      'Den enkla versionen av samma tillverkares vrilkåsa: björkvril på traditionellt sätt, ett fingerhål i handtaget, cirka 1,5 dl. Kör in den med svart kaffe, vars fett tätar träets öppna porer, och lägg den aldrig i diskmaskinen.',
    specs: [
      'Björkvril',
      'Cirka 1,5 dl, ett hål i handtaget',
      'Skölj med vatten, inget diskmedel och ingen diskmaskin',
    ],
  },
  'fazer-super-salmiakki': {
    name: 'Fazer Super Salmiakki pastiller 80 g',
    description:
      'Den hårdaste av salmiakklassikerna, såld i samma burkformade ask sedan 1970-talet. Ge en besökare en av dessa så vet du inom tio sekunder vilket läger hen tillhör.',
    specs: ['80 g'],
  },
  'fazer-pantteri-salmiakki': {
    name: 'Fazer Pantteri salmiakgodis 210 g',
    description:
      'Mjuk mentolsalmiak som har tillverkats i över femtio år. Mildare än pastillerna, så det här är påsen att ta med till folk som aldrig har provat salmiak.',
    specs: ['210 g'],
  },
  'halva-salmiakkiruutu': {
    name: 'Halva Salmiakkiruutu 170 g',
    description:
      'Halva har gjort den här fyrkantiga salmiaken sedan 1960 i Pitäjänmäki i Helsingfors. Segare än Fazers versioner och den som finnar hävdar är originalet.',
    specs: ['170 g', 'Tillverkad i Pitäjänmäki, Helsingfors, sedan 1960'],
  },
  'sisu-xylitol-salmiakki': {
    name: 'Sisu Xylitol salmiakpastiller 36 g',
    description:
      'Salmiak sötad med xylitol och försedd med finska Tandläkarförbundets märke. Asken får plats i en rockficka, vilket är varför de hamnar i varje finsk bil.',
    specs: ['36 g', 'Xylitol. Bär finska Tandläkarförbundets märke'],
    specLabels: [undefined, 'Sötningsmedel'],
  },
  'leijona-tar-liquorice': {
    name: 'Leijona tjärlakritspastiller 32 g',
    description:
      'Lakrits smaksatt med tjära, tillverkad sedan 1933. Tjära är en finsk smak som hamnar i godis, bastutvål och till och med glass, och det här är det billigaste sättet att prova den.',
    specs: ['32 g'],
  },
  'fazer-hazelnut-chocolate': {
    name: 'Karl Fazer mjölkchoklad med hela hasselnötter 200 g',
    description:
      'Den blå kakan med hela hasselnötter i mjölkchoklad. Fazer har använt samma blå omslag sedan 1922, och det är därför den är den finnar tar med sig utomlands.',
    specs: ['200 g'],
  },
  'fazer-light-milk-chocolate': {
    name: 'Karl Fazer ljus mjölkchoklad 180 g',
    description:
      'En ljusare och mildare version av den blå kakan. Om klassikern är för söt för dig är det här den att ta i stället.',
    specs: ['180 g'],
  },
  'fazer-fazerina': {
    name: 'Fazer Fazerina apelsintryffelkaka 99 g',
    description:
      'Apelsintryffel inuti mjölkchoklad, tillverkad sedan 1953. Tunnare än den blå kakan och den som överlever en ryggsäck utan att smälta till ett block.',
    specs: ['99 g'],
  },
  'fazer-jaffa-orange': {
    name: 'Fazer Jaffa apelsinkakor 300 g',
    description:
      'Sockerkaksbotten, apelsinmarmelad och mörk choklad överst. Varken kex eller kaka, vilket är det finnar bråkar om varenda gång.',
    specs: ['300 g'],
  },
  'north-outdoor-arctic-250-balaclava': {
    name: 'North Outdoor Arctic 250 merinobalaklava',
    description:
      'Den varmaste stickningen North Outdoor gör, formad för att sitta under en hjälm. På en skoter eller en renkälke kommer kylan in i nacken och över kinderna först, och det är den luckan det här lagret stänger.',
    specs: [
      'Stickad merinoull, vikt Arctic 250',
      'One size',
      'Svart',
      'North Outdoor, Uleåborg, Finland',
    ],
  },
  'north-outdoor-kevo-gloves': {
    name: 'North Outdoor Kevo merinohandskar',
    description:
      'Stickade av mulesingfri merino i North Outdoors eget stickeri i Uleåborg. Tunna nog att ha under en tumvante de kallaste dagarna och att behålla på när du tar ett foto.',
    specs: ['100 % merinoull, mulesingfri', 'M, L, XL', 'Indigoblå', 'Stickade i Uleåborg, Finland'],
  },
  'north-outdoor-heavyweight-gaiter': {
    name: 'North Outdoor Heavyweight merinohalskrage',
    description:
      'Merinofleece, tjock nog att dra upp över näsan medan du väntar på att ljusen ska dyka upp. Ull isolerar fortfarande när andedräkten kondenserar i den, vilket är hela problemet med att stå stilla i kylan.',
    specs: ['Merinofleece', 'One size', 'Svart', 'North Outdoor, Uleåborg, Finland'],
  },
  'north-outdoor-sointu-cardigan': {
    name: 'North Outdoor Sointu merinokofta',
    description:
      'En rak merinokofta som läser som inomhusplagg men fungerar som mellanlager. Det enda plagget i den här uppsättningen du skulle ha på middagen efter safarin.',
    specs: ['100 % merinoull', 'XS–2XL', 'Latte', 'North Outdoor, Uleåborg, Finland'],
  },
  'north-outdoor-arctic-260-zip-neck': {
    name: 'North Outdoor Arctic 260 merinotröja med dragkedja',
    description:
      'En tröja med hög krage och dragkedja i 100 procent merino, tjock nog att bära ensam inomhus och att fungera som mellanlager ute. Dragkedjan är poängen: du öppnar den under gången och stänger den när du stannar.',
    specs: [
      '100 % merinoull',
      'S–3XL',
      'Granitgrå och svart',
      'North Outdoor, Uleåborg, Finland',
      'Hög skyddande krage, täckt dragkedja, förlängd bakkant',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Detaljer'],
  },
  'halti-hossa-baselayer-men': {
    name: 'Halti Hossa II merinounderställ, herr',
    description:
      'Tröja och långkalsonger i samma ask, 190 g merino i 20,5 mikron. Lagret närmast huden avgör om resten av utstyrseln fungerar, och det är det de flesta besökare kommer utan.',
    specs: [
      '100 % merinoull, 190 g/m², 20,5 mikron, 1x1 ribb',
      'Långärmad tröja och långkalsonger',
      'Tvätta ut och in',
    ],
    specLabels: [undefined, 'Setets innehåll', undefined],
  },
  'halti-hossa-baselayer-women': {
    name: 'Halti Hossa II merinounderställ, dam',
    description:
      'Samma merinoset på 190 g i damsnitt. Ull håller värmen kvar när du svettas under gången och sedan står stilla för att titta, vilket är vad en dag i Lappland faktiskt ser ut som.',
    specs: [
      '100 % merinoull, 190 g/m², 20,5 mikron, 1x1 ribb',
      'Långärmad tröja och långkalsonger',
      'Tvätta ut och in',
    ],
    specLabels: [undefined, 'Setets innehåll', undefined],
  },
  'halti-heatgrid-midlayer': {
    name: 'Halti HeatGrid mellanlagerjacka, dam',
    description:
      'En lätt, teknisk mellanlagerjacka från Halti i mjuk våffelstickning som andas och leder bort fukt från huden. Den har hellång dragkedja fram, ståkrage, fickor med dragkedja samt resår i ärmslut och nederkant.',
    specs: [
      'Våffelstickning på insidan 95 % återvunnen polyester / 5 % elastan; jerseystickning 92 % återvunnen polyester / 8 % elastan',
      'Tvätta ut och in med liknande färger, stäng dragkedjorna före tvätt',
    ],
  },
  'halti-taival-dx-jacket': {
    name: 'Halti Taival DX 3L skaljacka, herr',
    description:
      'Ett trelagersskal klassat till 20 000 mm vattenpelare och 30 000 g andningsförmåga. De två talen spelar roll åt olika håll: det första håller slasken ute, det andra släpper ut svetten från en uppförsbacke i stället för att låta den frysa inuti.',
    specs: [
      'DrymaxX Nano stickat skal, 3 lager. 100 % återvunnen polyester',
      '20 000 mm',
      '30 000 g/m²/24 h',
    ],
    specLabels: [undefined, 'Vattenpelare', 'Andningsförmåga'],
  },
  'halti-sykli-ski-gloves': {
    name: 'Halti Sykli skidhandskar',
    description:
      'Vattentät handske med 120 g isolering, läderhandflata och snölås i muddan som hindrar snö från att packas in vid handleden när du faller. Gjord för liftburen skidåkning i Levi eller Ylläs snarare än för promenader i stan.',
    specs: [
      'DrymaxX, sträcker sig i 4 riktningar, vattentät och vindtät. Läderhandflata',
      '120 g Microtherm Dynamic',
      '15 000 mm / 15 000 g/m²/24 h',
    ],
    specLabels: [undefined, 'Isolering', 'Vattenpelare och andningsförmåga'],
  },
  'halti-merino-socks-2pack': {
    name: 'Halti merinoullstrumpor, 2-pack',
    description:
      'Två par, eftersom paret du hade på dig i dag inte är torrt i morgon bitti. Merinoblandning snarare än ren ull, vilket klarar upprepad maskintvätt bättre.',
    specs: [
      '40 % merinoull, 40 % akryl, 19 % polyamid, 1 % elastan',
      '2 par',
      'Tillverkade i Europa',
    ],
    specLabels: [undefined, 'Förpackningsstorlek', undefined],
  },
  'husky-farm-safari-rovaniemi': {
    name: 'Besök på huskyfarm och huskysafari för två, Rovaniemi',
    description:
      'Ett presentkort för ett guidat besök på en riktig huskyfarm nära Rovaniemi, följt av en slädtur bakom hundarna genom vinterskogen. Köps nu, levereras per e-post, och mottagaren bokar själv datumet.',
    specs: [
      'Guidat besök på huskyfarm och en huskysafari för två. Guiden kan hämta inom 10 km från Rovaniemi',
      'Cirka 3,5 h',
      '2 personer',
      'Rovaniemi. Den exakta platsen bekräftas vid bokningen',
      'Vintermånaderna, november till april',
      'Engelska',
      'Giltigt i 3 år',
    ],
    specLabels: [undefined, 'Längd', 'Deltagare', 'Plats', 'Säsong', 'Guidningens språk', 'Presentkort'],
  },
  'reindeer-safari-rovaniemi': {
    name: 'Rensafari för två, Rovaniemi',
    description:
      'En kvällsrensafari på en riktig gård nära Rovaniemi: en runda på 2,5 km bakom renarna, ett besök på gården och ett litet mellanmål. En klar kväll kan norrskenet visa sig, men det kan ingen lova.',
    specs: [
      'Entré till en rengård och en 2,5 km lång tur i rendragen släde för två, med ett litet mellanmål. Hämtning inom 10 km från Rovaniemi',
      '2,5 till 3 timmar',
      '2 personer',
      'Rovaniemi. Den exakta platsen bekräftas vid bokningen',
      'Vintermånaderna, december till mars. Safarin körs på kvällen',
      'Engelska',
      'Giltigt i 3 år',
    ],
    specLabels: [undefined, 'Längd', 'Deltagare', 'Plats', 'Säsong', 'Guidningens språk', 'Presentkort'],
  },
  'aurora-tour-kilpisjarvi': {
    name: 'Norrskenstur med snöskoter för två, Kilpisjärvi',
    description:
      'Kilpisjärvi är känt för sin ovanligt klara natthimmel. En kort skotertur tar er två till en plats där norrskenet kan ses i total naturro, med varma drycker mot kylan. Körs kvällar 20.00 till 23.00, med väderreservation.',
    specs: [
      'Guidad norrskenstur för två, cirka 15 km med snöskoter, varma drycker ingår',
      '3 timmar, 20.00 till 23.00',
      '2 personer',
      'Kilpisjärvi',
      '18 år för att köra, 8 år i släden',
      'Giltigt i 3 år',
    ],
    specLabels: [undefined, 'Längd', 'Deltagare', 'Plats', 'Åldersgräns', 'Presentkort'],
  },
  'glass-igloo-night-levi': {
    name: 'Natt i glasigloo för två, Levi',
    description:
      'En natt för två i en varm glasigloo högt uppe på Levifjället. Det elvärmda glaset håller sig klart medan ni spanar efter norrsken från en motoriserad dubbelsäng. Välkomstdryck, badrockar och frukost ingår, och igloon har egen kokvrå, dusch och wc.',
    specs: [
      'En natt för två i glasigloo av Superior-klass, välkomstdryck, badrockar och tofflor, frukost. Transport ingår inte',
      '1 natt, utcheckning kl 11.00',
      '2 personer',
      'Levi, högt uppe på fjället',
      '23 m², uppvärmt imfritt glas, kokvrå, dusch och wc, motoriserad dubbelsäng',
      'Gäller vistelser 27.08-10.11 och 01.04-12.04',
    ],
    specLabels: [undefined, 'Längd', 'Deltagare', 'Plats', 'Igloo', 'Presentkort'],
  },
  'gold-panning-day-inari': {
    name: 'Guldgrävardag för fyra, Inari',
    description:
      'En dag på en aktiv guldinmutning i Inari för ett sällskap på fyra: först historien, sedan vaskning för hand och en titt på maskinell grävning. Måltider och transport från Saariselkä centrum ingår, och guldet gruppen hittar följer med hem.',
    specs: [
      'En guldgrävardag på 5 timmar på en aktiv inmutning för fyra, med handledning i vaskning för hand och inblick i maskinell grävning. Dagens måltider, utrustning och transport från Saariselkä centrum till inmutningen och tillbaka ingår',
      '5 timmar',
      '4 personer',
      'Inari',
      'Vår- och sommarsäsong',
      'Giltigt i 3 år',
    ],
    specLabels: [undefined, 'Längd', 'Deltagare', 'Plats', 'Säsong', 'Presentkort'],
  },
  'korouoma-waterfalls-rovaniemi': {
    name: 'Tur till Korouomas frusna vattenfall för två, från Rovaniemi',
    description:
      'På vintern fryser bäckarna som rinner nerför Korouomakanjonens väggar till fall av blå is. Den guidade dagsturen utgår från Rovaniemi till kanjonen i Posio, cirka 110 km bort. Vandringen är lätt, med snöskor när snön kräver det, och en lätt lunch serveras på vägen.',
    specs: [
      'Guidad tur till Korouomas frusna vattenfall för två, med transport, lätt lunch och mellanmål. Hämtning inom 10 km från Rovaniemi centrum',
      'Cirka 7 timmar inklusive transport',
      '2 personer',
      'Korouomakanjonen, Posio. Avresa från Rovaniemi',
      'Vintermånaderna, november till april',
      'Engelska',
      'Giltigt i 3 år',
    ],
    specLabels: [undefined, 'Längd', 'Deltagare', 'Plats', 'Säsong', 'Guidningens språk', 'Presentkort'],
  },
  'amethyst-mine-snowshoe-luosto': {
    name: 'Tur på snöskor till ametistgruvan i Luosto för två',
    description:
      'En guidad dagstur från Rovaniemi till Pyhä-Luosto nationalpark: först på snöskor genom parken, sedan med snötåg upp till ametistgruvan på toppen av Lampivaara. I gruvan får alla gräva själva, och en ametist du hittar får du behålla.',
    specs: [
      'Guidad tur på snöskor och besök i ametistgruvan för två, med transport, mellanmål vid rastplatsen och all utrustning. Varma kläder och skor kan lånas',
      'Cirka 7 timmar',
      '2 personer',
      'Lampivaara, Luosto. Avresa från Rovaniemi',
      'Vintermånaderna, december till april',
      'Engelska',
      'Giltigt i 3 år',
    ],
    specLabels: [undefined, 'Längd', 'Deltagare', 'Plats', 'Säsong', 'Guidningens språk', 'Presentkort'],
  },
  'midnight-sun-canoe-rovaniemi': {
    name: 'Kanottur i midnattssolen för två, Rovaniemi',
    description:
      'En guidad kvällspaddling nära Rovaniemi i midnattssolens ljus, som avslutas med mellanmål vid en öppen eld. Guiden går igenom grunderna före start, så ingen paddelvana behövs. Turerna går på sommaren, juni till augusti.',
    specs: [
      'Guidad kanottur för två med utrustning, paddel- och säkerhetsgenomgång, mellanmål vid elden och transport inom 10 km från Rovaniemi',
      'Cirka 3 timmar',
      '2 personer',
      'Rovaniemi. Den exakta platsen bekräftas vid bokningen',
      'Sommarmånaderna, juni till augusti',
      'Engelska',
      'Giltigt i 3 år',
    ],
    specLabels: [undefined, 'Längd', 'Deltagare', 'Plats', 'Säsong', 'Guidningens språk', 'Presentkort'],
  },
  'halti-snowmobile-kilpisjarvi': {
    name: 'Med snöskoter upp på Halti för två, Kilpisjärvi',
    description:
      'Halti är Finlands högsta punkt, precis vid gränsen mot Norge. Den guidade snöskoterturen från Kilpisjärvi korsar Käsivarsis ödemark till gränsröset 303B, totalt cirka 110 km, och på toppen kan du skriva ditt namn i Haltis gästbok. Turen körs klockan 10–16, och tidigare vana att köra snöskoter krävs.',
    specs: [
      'Guidad snöskotertur på cirka 110 km för två, skoterkläder (overall, kängor, hjälm), varm saft och bakverk, ledtillstånd, moms och försäkringar',
      'Cirka 6 timmar',
      '2 personer',
      'Kilpisjärvi',
      '1 mars till 10 maj, om vädret tillåter',
      '18 år för att köra, 8 år i släden. Tidigare körvana krävs',
      'Giltigt i 3 år',
    ],
    specLabels: [undefined, 'Längd', 'Deltagare', 'Plats', 'Säsong', 'Åldersgräns', 'Presentkort'],
  },
  'fell-ice-fishing-kilpisjarvi': {
    name: 'Pimpeltur i fjällen för två, Kilpisjärvi',
    description:
      'En guide tar er med snöskoter upp i fjällen nära Kilpisjärvi, totalt cirka 15 km, där ni pimplar genom en isvak sittande på en renfäll. Röding eller öring kan nappa, och fiskeutrustningen ingår. Turen går klockan 11.15–14.15.',
    specs: [
      'Guidad tur på cirka 15 km för två, skoterkläder (overall, kängor, hjälm), fiskeutrustning, varm saft och bakverk, moms och försäkringar',
      'Cirka 3 timmar',
      '2 personer',
      'Kilpisjärvi',
      '20 november till 10 maj, om vädret tillåter',
      '18 år för att köra, 8 år i släden',
      'Giltigt i 3 år',
    ],
    specLabels: [undefined, 'Längd', 'Deltagare', 'Plats', 'Säsong', 'Åldersgräns', 'Presentkort'],
  },
  'wilderness-cabin-ivalo': {
    name: 'Två nätter med helpension i en ödemarksstuga för två, Ivalo',
    description:
      'Två nätter för två i en stuga vid Ivalo älv, intill Hammastunturi ödemark, med egen strandbastu. Alla måltider från middagen på ankomstdagen till lunchen på avresedagen ingår, lagade på råvaror från Lappland som ren, fisk och bär, liksom transport från Ivalo och tillbaka. Vardagar från mitten av juni till slutet av oktober.',
    specs: [
      '2 nätter för två i en ödemarksstuga, fri tillgång till en separat strandbastu, helpension med eftermiddagskaffe vid elden och transport från Ivalo centrum eller flygplats och tillbaka',
      '2 nätter',
      '2 personer',
      'Vid Ivalo älv. Den exakta platsen bekräftas vid bokningen',
      'Måndag till fredag, 15 juni till 30 oktober',
      'Finska och engelska',
      'Giltigt i 3 år',
    ],
    specLabels: [undefined, 'Längd', 'Deltagare', 'Plats', 'Säsong', 'Språk', 'Presentkort'],
  },
  'katka-snowmobile-levi': {
    name: 'Snöskotersafari till Kätkäs ödemark, Levi',
    description:
      'En snöskotersafari på cirka 30 km från Levi ut i ödemarken vid Kätkätunturi. Pausen hålls på Hanhipirtti, ett ödemarkskafé i en gammal stuga full av retroföremål, innan färden tillbaka till Levi. Ingen tidigare skotervana behövs, och presentkortet gäller en person från 13 år.',
    specs: [
      'Guidad snöskotersafari på cirka 30 km för en person, med paus på ödemarkskaféet Hanhipirtti. Vinterkläder ingår',
      'Cirka 2 till 3 timmar',
      '1 person från 13 år',
      'Levi. Avresa från Leviraitti 13, Sirkka',
      'Vinter, december till mars',
      'Engelska och finska',
      'Giltigt i 3 år',
    ],
    specLabels: [undefined, 'Längd', 'Deltagare', 'Plats', 'Säsong', 'Språk', 'Presentkort'],
  },
  'foodin-six-mushroom-blend': {
    name: 'Foodin blandning av sex svampar 40 g',
    description:
      'Chaga, reishi, lion\'s mane, cordyceps, shiitake och maitake i samma burk, malda för kaffe eller smoothies. En burk täcker hela svamphyllan.',
    specs: ['40 g', 'Chaga, reishi, lion\'s mane, cordyceps, shiitake, maitake'],
  },
  'foodin-chaga-tincture': {
    name: 'Foodin Chagatinktur 50 ml',
    description:
      'Finsk chaga som droppar i stället för pulver: en 50 ml flaska som inte behöver bryggas. Hela chagaidén i reseformat.',
    specs: ['50 ml', 'Finsk chaga'],
  },
  'kaavi-chaga-chunks': {
    name: 'Kaavi Porcini Chagabitar 100 g',
    description:
      'Grova bitar av finsk björkchaga för långsam bryggning, så som den dracks här långt innan någon sa superfood. En påse räcker till många kannor.',
    specs: ['100 g', 'Sjud som långsamt bryggt te'],
    specLabels: [undefined, 'Användning'],
  },
  'puhdistamo-instant-chaga': {
    name: 'Puhdistamo Instant chagaextraktpulver 28 g',
    description:
      'Chaga som löser sig direkt i hett vatten utan sjudning. Burken på 28 gram ryms i vilket bagage som helst och klarar resan bättre än en påse bitar.',
    specs: ['28 g'],
  },
  'puhdistamo-conifer-extract': {
    name: 'Puhdistamo Barrträdsextrakt 50 ml',
    description:
      'Ett extrakt ur finska barrträd som tas i droppform. Doften av en vandring i Lappland i en flaska som ryms i rockfickan.',
    specs: ['50 ml'],
  },
  'nb-little-my-beanie': {
    name: 'Lilla My grovstickad mössa',
    description:
      'Tjock stickad mössa med Lilla My på uppvikningen, i en ullblandning som håller formen även efter en vecka av att dras på och av. En vuxenstorlek, och den enda muminfiguren som skulle godkänna vädret i Lappland.',
    specs: [
      'Akryl, nylon och ull',
      'Vuxen, en storlek',
      'Officiell Moomin-produkt',
    ],
    specLabels: [undefined, undefined, 'Licens'],
  },
  'nb-moomintroll-mittens': {
    name: 'Moomintrollet vantar',
    description:
      'Stickade vantar med mjukt fleecefoder, 24 centimeter höga så att skaftet når över jackärmen. Vuxenstorlek, och billiga nog att det går att överleva att tappa en på en hundspannstur.',
    specs: [
      '100 % akryl, fleecefoder',
      'Vuxen, höjd 24 cm, bredd ovanför tummen 9,5 cm',
      'Officiell Moomin-produkt',
    ],
    specLabels: [undefined, undefined, 'Licens'],
  },
  'nb-moomintroll-love-socks': {
    name: 'Moomintrollet Love retrostrumpor',
    description:
      'Ljusblå ribbade strumpor med Moomintrollet broderat i ett rosa hjärta på smalbenet, inte tryckt, så motivet klarar tvätten. En storlek täcker EU 36 till 42.',
    specs: [
      '67 % bomull, 25 % polyester, 4 % elastodien, 3 % nylon, 1 % elastan',
      'En storlek, EU 36-42',
      'Broderat motiv',
    ],
    specLabels: [undefined, undefined, 'Detalj'],
  },
  'nb-moomin-classics-tee': {
    name: 'Moomin Classics tjock t-shirt',
    description:
      'En t-shirt i 260 gram bomull i lavendel, boxig passform, med ett litet broderat Moomintroll på bröstet i stället för ett stort tryck. Tillräckligt tjock för att falla rakt i stället för att sitta åt.',
    specs: [
      '100 % bomull, 260 g/m2',
      'Unisex, boxig passform, XS till XXL',
      'Boxig passform, butiken rekommenderar en storlek mindre',
    ],
    specLabels: [undefined, undefined, 'Storlekstips'],
  },
  'nb-pippi-tee': {
    name: 'Pippi Långstrump t-shirt',
    description:
      'Pippi tryckt i Finland på en t-shirt i 240 gram bomull, unisex med rak passform och längre fåll än vanligt. Astrid Lindgren reser längre än mumintrollen i vissa hem.',
    specs: [
      '100 % bomull, 240 g/m2',
      'Unisex, rak passform, M till XXL',
      'Tryckt i Finland',
    ],
  },
  'nb-moomintroll-hoodie': {
    name: 'Moomintrollet hoodie',
    description:
      'En hoodie i 300 gram bomull och polyester, tryckt i Finland, unisex med rak passform. Precis det lager man faktiskt lever i under en stugkväll när bastun har svalnat.',
    specs: [
      '65 % bomull, 35 % polyester, 300 g/m2',
      'Unisex, rak passform, XS till XXL',
      'Tryckt i Finland',
    ],
  },
  'nb-kunnas-kalevala-tote': {
    name: 'Mauri Kunnas Hundarnas Kalevala tygkasse',
    description:
      'En bomullskasse tryckt med Mauri Kunnas illustrationer ur Hundarnas Kalevala, hans hundversion av det finska nationaleposet. Det billigaste i butiken som ändå förklarar ett helt land.',
    specs: [
      '100 % bomull',
      '38 x 42 cm',
      'Officiell Mauri Kunnas-produkt',
    ],
    specLabels: [undefined, undefined, 'Licens'],
  },
  'sk-marimekko-unikko-crossbody': {
    name: 'Marimekko Neat Crossbody Unikko axelväska',
    description:
      'Unikkovallmon på en axelväska i storleken för telefon, plånbok och ett par handskar. Unikko ritades 1964 efter att Armi Ratia hade förbjudit blomstermönster, och det har överlevt förbudet med sextio år.',
    specs: [
      'Neat Crossbody, storlek M',
      'Unikko, blå och mörkblå',
    ],
    specLabels: ['Modell', 'Mönster'],
  },
  'sk-moomin-duvet-set': {
    name: 'Moomin bäddset 150 x 210 cm, Sydänkäpyset',
    description:
      'GOTS-certifierat bäddset i bomull med Moomintrollet och Snorkfröken. Det finska mönsternamnet Sydänkäpyset beskriver just den relation som mönstret visar.',
    specs: [
      'Påslakan 150 x 210 cm',
      'GOTS, Global Organic Textile Standard',
    ],
    specLabels: [undefined, 'Certifiering'],
  },
  'sk-novita-wonder-wool': {
    name: 'Novita Wonder Wool DK garn 50 g',
    description:
      'Rent ullgarn i DK-tjocklek från Novita, spinneriet som försett finska stickare sedan 1928. Ett nystan på 50 gram rymmer 112 meter, och rekommenderad stickstorlek är 4 mm.',
    specs: [
      '100 % ull',
      '50 g nystan, 112 m',
      '4 mm',
    ],
    specLabels: [undefined, undefined, 'Stickstorlek'],
  },
  'sk-aromageddon-sauna-scent': {
    name: 'Aromageddon bastudoft Hankihorppy 15 ml',
    description:
      'Mynta och kakao som bastudoft, vilket låter fel tills man suttit igenom en finsk vinter. Två till fyra droppar i en skopa vatten, inte på stenarna.',
    specs: [
      '15 ml',
      '2 till 4 droppar i en skopa vatten',
    ],
    specLabels: [undefined, 'Användning'],
  },
  'sk-muurla-moomin-bottle': {
    name: 'Muurla Moominglasflaska 1 l, Äpplen',
    description:
      'En flaska i sodaglas med patentkork, för vatten eller saft på bordet i stället för en kartong. Tål maskindisk, en liter, och äppelmönstret är det sommarliga.',
    specs: [
      '1 l',
      'Sodaglas, patentkork',
      'Tål maskindisk',
    ],
    specLabels: [undefined, undefined, 'Skötsel'],
  },
  'nb-kunnas-kalevala-beanie': {
    name: 'Hundarnas Kalevala-mössa',
    description:
      'Mauri Kunnas gjorde Kalevala till ett hundepos 1992, och mössan bär just den illustrationen. Återvunnen polyester, en vuxenstorlek, och så lätt att den får plats i rockfickan när bussen blir varm.',
    specs: [
      '100 % återvunnen polyester',
      'Vuxen, en storlek',
      'Mauri Kunnas, Hundarnas Kalevala',
    ],
    specLabels: [undefined, undefined, 'Illustration'],
  },
  'nb-little-my-mittens': {
    name: 'Lilla My-vantar',
    description:
      'Röda stickade vantar med Lilla Mys ansikte på varje handrygg, fodrade med akryl. De är töjbara, så en storlek passar de flesta, och de är en officiell Muminprodukt.',
    specs: [
      '49 % viskos, 31 % polyester, 20 % nylon; foder 100 % akryl',
      'En storlek, töjbara',
      'Officiell Muminprodukt',
    ],
    specLabels: [undefined, undefined, 'Licens'],
  },
  'nb-kunnas-santa-mug': {
    name: 'Jultomten take away-mugg',
    description:
      'Kunnas ritade tomten på Korvatunturi så som finska barn ser honom, och här sitter han på en mugg på 450 milliliter gjord av PLA i stället för fossil plast. Silikonmanschetten är det man håller i när kaffet är för hett för bar hand.',
    specs: [
      '450 ml',
      'Mugg och lock i PLA, manschett i livsmedelsgodkänd silikon',
      'Mauri Kunnas',
    ],
    specLabels: [undefined, undefined, 'Illustration'],
  },
  'nb-little-my-thermal-bottle': {
    name: 'Lilla My termosflaska 0,55 l',
    description:
      'Dubbelväggigt stål, 550 milliliter, och tillverkaren anger sex timmars värmehållning. Det är ungefär en skotersafari, alltså precis det prov flaskan köps för.',
    specs: [
      '550 ml',
      'Rostfritt stål, PP-lock, silikonpackning',
      'Sex timmar enligt tillverkaren',
    ],
    specLabels: [undefined, undefined, 'Håller varmt'],
  },
  'nb-little-my-neckpillow': {
    name: 'Lilla My-nackkudde',
    description:
      'Memoryskum under ett mjukt överdrag, för nattåget Helsingfors–Rovaniemi eller hemflyget. Så liten att den går att fästa på väskan, vilket är den enda sortens resekudde någon faktiskt behåller.',
    specs: [
      'Memoryskum, mjukt överdrag',
      'Officiell Moominprodukt',
    ],
    specLabels: [undefined, 'Licens'],
  },
  'nb-moomintroll-love-cushion': {
    name: 'Moomintrollet Love-kudde',
    description:
      'En kudde formad som Moomintrollet i stället för en fyrkant med tryck, i flera storlekar från 45 till 75 centimeter hög. Sådant som hamnar i stugans soffa och blir kvar där.',
    specs: [
      'Polyester',
      'Flera storlekar, höjd 45–75 cm',
      'Officiell Moominprodukt',
    ],
    specLabels: [undefined, undefined, 'Licens'],
  },
  'nb-little-my-poster': {
    name: 'Lilla My-affisch',
    description:
      'Formgiven och tryckt i Helsingfors på 200 grams silkespapper, i 30 × 40 eller 50 × 70. En affisch rullas ihop i en hylsa och väger ingenting, vilket är mer än man kan säga om det mesta folk släpar hem från Lappland.',
    specs: [
      'Silkespapper, 200 g',
      '30 × 40 cm eller 50 × 70 cm',
      'Formgiven och tryckt i Helsingfors',
    ],
    specLabels: [undefined, undefined, 'Tillverkning'],
  },
  'nb-moomin-novels-poster': {
    name: 'Affisch med muminböckerna',
    description:
      'Omslagen till Tove Janssons muminböcker på ett ark, samma tryck i Helsingfors och samma två storlekar som figuraffischerna. För läsaren i familjen, inte för muggsamlaren.',
    specs: [
      'Silkespapper, 200 g',
      '30 × 40 cm eller 50 × 70 cm',
      'Formgiven och tryckt i Helsingfors',
    ],
    specLabels: [undefined, undefined, 'Tillverkning'],
  },
  'sk-finland-beanie': {
    name: 'Finland-mössa, blåvit',
    description:
      'Den blåvita tofsmössan med FINLAND över kanten, buren på läktaren och sedan resten av vintern. Maskintvätt 30.',
    specs: [
      'FINLAND',
      'Maskintvätt 30 °C',
    ],
    specLabels: ['Text', 'Skötsel'],
  },
  'sk-finland-tube-scarf': {
    name: 'Finland-tubhalsduk',
    description:
      'En sömlös tub i finska flaggans mönster, som dras upp över ansiktet när vinden kommer från fjället. Under sju euro, vilket är därför folk köper tre.',
    specs: [
      'Finlands flagga',
      'Handtvätt',
    ],
    specLabels: ['Mönster', 'Skötsel'],
  },
  'sk-little-my-sauna-cushion': {
    name: 'Emendo bastudyna Lilla My',
    description:
      'En bastudyna med bild efter Tove Janssons originalteckningar, tillverkad på licens av Emendo. Det som ligger mellan dig och en lave på nittio grader.',
    specs: [
      'Efter Tove Janssons originalteckningar',
      'Officiell Moomin Characters-licensprodukt',
    ],
    specLabels: ['Illustration', 'Licens'],
  },
  'sk-rento-sauna-hat': {
    name: 'Rento bastuhatt i linnefrotté',
    description:
      'Linnefrotté håller värmen borta från hårbotten och håret på översta laven. Det fungerar åt andra hållet också: i badtunnan i februari håller den huvudet varmt. Maskintvätt 60.',
    specs: [
      'Linnefrotté',
      'Maskintvätt 60 °C',
    ],
    specLabels: [undefined, 'Skötsel'],
  },
  'sk-rento-birch-whisk': {
    name: 'Rento torkad björkvasta',
    description:
      'En torkad björkvasta som blötläggs i varmt vatten före bastun, då återvänder löven och doften. Vastandet är den del av bastun som gäster alltid frågar om och sällan provar.',
    specs: [
      'Torkad björk',
      'Blötlägg före bastun',
    ],
    specLabels: [undefined, 'Före användning'],
  },
  'sk-suomi-hockey-jersey': {
    name: 'Finland supportertröja',
    description:
      'Den blåvita supportertröjan med SUOMI över bröstet och lejonvapnet, i den passform man faktiskt har på sig till en match. Andas, storlekar M till XXL, och till februari verkar varje finländskt hushåll ha en.',
    specs: [
      'M–XXL',
      'SUOMI och lejonvapnet',
    ],
    specLabels: [undefined, 'Tryck'],
  },
  'sk-marimekko-unikko-bath-towel': {
    name: 'Marimekko Unikko badhandduk 70 × 150 cm',
    description:
      'Unikko på frottébomull, beige och vitt, i hela formatet 70 gånger 150. Garnet är 65 % ekologisk bomull och 35 % återvunnen, och den återvunna delen kommer från Marimekkos eget skärspill.',
    specs: [
      '70 × 150 cm',
      'Frottébomull, 65 % ekologisk och 35 % återvunnen',
      'Unikko, beige och vitt',
    ],
    specLabels: [undefined, undefined, 'Mönster'],
  },
  'sk-marimekko-pieni-unikko-apron': {
    name: 'Marimekko Pieni Unikko förkläde',
    description:
      'Ett förkläde från Marimekko i ekologisk bomull med mönstret Pieni Unikko i plommon, tranbär, naturvitt och rosa. Det har en ficka framtill, knytband i midjan och ett nackband som justeras med tryckknappar.',
    specs: [
      '100 % ekologisk bomull',
      'Bredd 84 cm, längd 85 cm',
      'Maskintvätt 60 °C',
      'Pieni Unikko, plommon, tranbär, naturvitt och rosa',
    ],
    specLabels: [undefined, undefined, undefined, 'Mönster'],
  },
  'fl-taistelevat-metsot': {
    name: 'Taistelevat metsot satinpåslakansset, dubbelsäng',
    description:
      'Ferdinand von Wright målade de stridande tjädrarna 1886, och verket blev en av de målningar som varje finländare kan namnge. Finlayson trycker det på satinbomull, digitalt så att färgerna håller. Påslakanets baksida är enfärgad och trycket finns på båda sidor av örngotten.',
    specs: [
      'Satinbomull',
      'Dubbelsäng',
      'Ferdinand von Wright, Taistelevat metsot (De stridande tjädrarna), 1886',
    ],
    specLabels: [undefined, undefined, 'Konstverk'],
  },
  'fl-lino-linen-duvet-set': {
    name: 'Lino linnepåslakansset',
    description:
      'Tvättat linne med broderad kant, i lavgrönt eller tjärbrunt. Linne är tungt och faller styvare än bomull, och det blir mjukare för varje tvätt i stället för att slitas ut.',
    specs: [
      'Linne',
      '240 × 210 + 50 × 60 cm eller 150 × 210 + 50 × 60 cm',
      'Lavgrön eller tjärbrun',
    ],
    specLabels: [undefined, undefined, 'Färger'],
  },
  'fl-elefantti-duvet-set': {
    name: 'Elefantti påslakansset, mörkgrönt',
    description:
      'Laina Koskela ritade Elefantti 1969 till en formgivningstävling som Finlayson ordnade tillsammans med Konstindustriella läroverket, och mönstret har varit i produktion sedan dess. Bomullspercale med 152 trådar per tum, vilket gör att det känns svalt snarare än mjukt.',
    specs: [
      'Bomullspercale, 152 TC',
      '240 × 210 + 50 × 60 cm',
      'Laina Koskela, 1969',
    ],
    specLabels: [undefined, undefined, 'Formgivning'],
  },
  'fl-reino-bath-towel': {
    name: 'Reino badhandduk 80 × 160 cm',
    description:
      'GOTS-certifierad ekologisk bomull, vävd av ett fint tvinnat garn så att den torkar snabbt i stället för att bli fuktig på kroken. Full badhanddukstorlek, i brunt eller rosa.',
    specs: [
      '80 × 160 cm',
      '100 % ekologisk bomull, GOTS-certifierad',
      'Brun eller rosa',
    ],
    specLabels: [undefined, undefined, 'Färger'],
  },
  // katalogin täydennys 2026-09-05
  'makia-kontio-hoodie': {
    name: 'Makia Kontio huvtröja',
    description:
      'Huvtröja i normal passform av 100 procent ekologisk bomull, färgad efter sömnaden. Plaggfärgning ger djupare färg och mjukare känsla än garnfärgning, och nyansen behåller sitt lätt slitna utseende tvätt efter tvätt.',
    specs: [
      '100 % ekologisk bomull, plaggfärgad',
      'S till XXL',
    ],
  },
  'makia-trademark-hoodie': {
    name: 'Makia Trademark huvtröja',
    description:
      'Makias enklaste hoodie: normal passform, 100 procent ekologisk bomull och det lilla varumärket på bröstet. Den att packa för en stugvecka där samma tröja går från morgonbrasan till bastuverandan på kvällen.',
    specs: [
      '100 % ekologisk bomull',
      'S till XXL',
    ],
  },
  'makia-moray-zip-knit': {
    name: 'Makia Moray stickad kofta med dragkedja',
    description:
      'Kofta med dragkedja i normal passform, stickad av 100 procent merinoull. Merino värmer utan att bli bylsig och torkar inifrån, så den fungerar som lager under skalet på fjällvandringen och ensam på ett varmt kafé.',
    specs: [
      '100 % merinoull',
      'S till XXL',
    ],
  },
  'makia-form-jacket': {
    name: 'Makia Form vinterjacka',
    description:
      'Lång vinterjacka med normal passform och vadd av återvunnen polyester. En dold mudd inne i ärmslutet stänger manschetten mot vinden, och det betyder mer på en januarigata i Rovaniemi än någon funktionslista.',
    specs: [
      'Vadd av återvunnen polyester, dolda muddar i ärmarna',
      'S till XXL',
    ],
  },
  'makia-martin-beanie': {
    name: 'Makia Martin merinomössa',
    description:
      'Mössa i 100 procent merinoull med en liten etikett, stickad i Finland. Det billigaste sättet in i Makia och plagget som troligast bärs varje dag från oktober till april.',
    specs: [
      '100 % merinoull',
      'Tillverkad i Finland',
      'En storlek',
    ],
  },
  'makia-mari-balaclava': {
    name: 'Makia Mari stickad balaklava',
    description:
      'Stickad balaklava i en blandning av ull, polyester, alpacka och elastan. Täcker öron, hals och kinder på en gång, vilket är skillnaden mellan en skotertur och en skotertur man minns av fel anledning.',
    specs: [
      'Blandning av ull, polyester, alpacka och elastan',
      'En storlek',
    ],
  },
  'halti-pehmee-merino-beanie': {
    name: 'Halti Pehmee merinomössa',
    description:
      'Stadsmössa i 100 procent merinoull med dubbel mudd, tillverkad i Finland. Halti kallar den Pehmee, mjuk, och det är mössan för dagar då en skidmössa skulle se ut som om man svängt fel.',
    specs: [
      '100 % merinoull',
      'Tillverkad i Finland',
      'Plantorkas',
      'En storlek',
    ],
  },
  'halti-rockmoon-fleece-hoodie': {
    name: 'Halti Rockmoon fleecejacka med huva, herr',
    description:
      'Varm fleecejacka med huva i dubbelborstat stretchtyg, med vindtätt mikrotyg på huva och axlar där kylan kommer in först. Under skalet på fjället, ensam runt stugan.',
    specs: [
      'Dubbelborstad stretchfleece, vindtätt mikrotyg på huva och axlar',
      'S till XXXL',
    ],
  },
  'halti-viiri-fleece-gloves': {
    name: 'Halti Viiri fleecehandskar',
    description:
      'Lätta 45-gramshandskar i vindtät Stormwall-fleece, med silikongrepp i handflatan och pekskärmsfingertoppar på tumme och pekfinger, så att norrskensbilden tas utan bara händer.',
    specs: [
      'Stormwall-fleece 100 % polyester, handflata 65 % polyester, 32 % polyamid, 3 % elastan',
      '45 g',
      'Tumme och pekfinger',
      'Skontvätt i högst 30 °C',
    ],
    specLabels: [undefined, undefined, 'Pekskärm', undefined],
  },
  'nb-moomin-classics-beanie': {
    name: 'Mumin Classics mössa',
    description:
      'Vuxenmössa ur kollektionen Moomin Classics i 100 procent återvunnen polyester, brun, en storlek. En officiell Muminprodukt, och det är just det som skiljer den från versionen på torgstånd.',
    specs: [
      '100 % återvunnen polyester',
      'Vuxen, en storlek',
      'Brun',
    ],
  },
  'nb-snufkin-mens-socks': {
    name: 'Snusmumriken herrstrumpor',
    description:
      'Herrstrumpor med Snusmumriken, EU 40 till 45, 60 procent bomull med polyester, nylon och elastan för stretch. Den billigaste Muminpresenten på sajten som ändå används i stället för att ställas fram.',
    specs: [
      'EU 40-45',
      '60 % bomull, 33 % polyester, 4 % nylon, 2 % elastan, 1 % elastodien',
    ],
  },
  'nb-hattifatteners-retro-socks': {
    name: 'Hattifnattar retrostrumpor, dam',
    description:
      'Strumpor i retrostil med hattifnattarna, EU 36 till 42, 67 procent bomull. Stretchiga nog att en storlek passar de flesta, och det första en Muminläsare plockar upp när strumplådan står öppen.',
    specs: [
      'EU 36-42',
      '67 % bomull, 25 % polyester, 4 % elastodien, 3 % nylon, 1 % elastan',
    ],
  },
  'sk-suomi-propeller-cap': {
    name: 'Suomi supporterkeps med propeller',
    description:
      'Blåvit propellerkeps för läktaren, fanzonen och ishockeyfinalen på puben. Ingen seriös huvudbonad, och det är precis poängen en kväll när Finland spelar.',
    specs: [
      'Blått och vitt',
    ],
  },
  'sk-muurla-moomin-lantern-tahtihetki': {
    name: 'Muurla Mumin lykta Tähtihetki 18 cm',
    description:
      'Handgjord lykta i blyfritt glas ur Muurlas serie Tähtihetki med gulddetaljer, 15,5 cm bred och 18 cm hög. Fungerar som ljuslykta, som skål för säsongens godis eller som vas för en liten bukett.',
    specs: [
      'Ø 15,5 cm, höjd 18 cm',
      'Handgjort blyfritt glas',
      'Handdisk',
    ],
  },
  'sk-hukka-soapstone-candle': {
    name: 'Hukka Jätkänkynttilä värmeljushållare i sten',
    description:
      'Värmeljushållare i sten formad som en jätkänkynttilä, den kluvna stockelden som skogsarbetare tände på snön. 56 mm bred, 100 mm hög, 310 gram, för ett 40 mm värmeljus. Levande eld på kall sten, inomhus.',
    specs: [
      'Ø 56 x 100 mm, för ett värmeljus Ø 40 mm',
      '0,31 kg',
      '1 hållare',
    ],
  },
  'sk-muurla-moomin-enamel-mug-lumipyry': {
    name: 'Muurla Mumin emaljmugg Lumipyry 3,7 dl',
    description:
      'Emaljmugg på 3,7 dl med kärna av kolstål och dubbel emaljering, tryckt med snöstormsscenen Lumipyry. Tål varma och kalla drycker, går i diskmaskinen och ut till lägerelden, inte in i mikron.',
    specs: [
      '3,7 dl',
      'Kolstål med dubbel emaljering',
      'Tål maskindisk, inte för mikrovågsugn',
    ],
  },
  'sk-arabia-moomin-pitcher-moominhouse': {
    name: 'Arabia Mumin kanna 1,0 l, Muminhuset',
    description:
      'Enliters kanna från Arabia med Muminhuset, det runda kakelugnsformade huset som Muminpappan byggde själv och aldrig låser om natten. Med keramiklock som håller insekterna borta från saften på sommarbordet.',
    specs: [
      '1,0 l',
      'Keramiklock ingår',
    ],
    specLabels: [undefined, 'Lock'],
  },
  'sk-moomin-duvet-set-merella': {
    name: 'Mumin påslakanset 140 x 200 cm, Merellä',
    description:
      'Påslakan och örngott i bomull med Muminfamiljen till havs, påslakan 140 x 200 cm och örngott 50 x 70 cm, dragkedja. Tvättas före första användning, som alla tryckta bomullssängkläder.',
    specs: [
      'Påslakan 140 x 200 cm, örngott 50 x 70 cm',
      '100 % bomull',
      'Dragkedja',
    ],
    specLabels: [undefined, undefined, 'Stängning'],
  },
  'sk-arabia-moomintroll-mini-figurine': {
    name: 'Arabia Mumintrollet minifigur',
    description:
      'Handgjort Mumintroll i keramik, cirka 6 cm högt, formgivet av Tuulikki Pietilä på 1990-talet och sålt i egen presentask. Figurerna samlas i serier, vilket gör en till en säker present och två till en vana.',
    specs: [
      'Höjd cirka 6 cm',
      'Handgjord keramik',
      'Tuulikki Pietilä, 1990-talet',
    ],
    specLabels: [undefined, undefined, 'Formgivning'],
  },
  'sk-arabia-snorkmaiden-mini-figurine': {
    name: 'Arabia Snorkfröken minifigur',
    description:
      'Handgjord Snorkfröken i keramik, cirka 6 cm hög, ur Tuulikki Pietiläs serie från 1990-talet, i egen presentask. Para ihop med Mumintrollet så står de två på fönsterbrädan som på bokomslagen.',
    specs: [
      'Höjd cirka 6 cm',
      'Handgjord keramik',
      'Tuulikki Pietilä, 1990-talet',
    ],
    specLabels: [undefined, undefined, 'Formgivning'],
  },
  'sk-lapin-puukko-gift-box': {
    name: 'Lapplandspuukko med bladskydd, presentask',
    description:
      'Puukko i lappländsk stil med bladskydd, levererad i presentask. Butiken presenterar den som kniven för skogsturer och vardagssysslor, och som den sortens föremål som går i arv i stället för att bytas ut.',
    specs: [
      'Bladskydd och presentask',
    ],
    specLabels: ['Ingår'],
  },
  'sk-loimu-sauna-thermometer': {
    name: 'Loimu bastutermometer, björk',
    description:
      'Bastutermometer i björkram med tydlig skala. Den svarar på den enda fråga en gäst ställer före första skopan vatten, och den ser ut att höra hemma på en timmervägg snarare än bredvid en panna.',
    specs: [
      'Björk',
    ],
  },
  'sk-helsingin-villasukkatehdas-wool-socks': {
    name: 'Helsingin Villasukkatehdas ullstrumpor',
    description:
      'Kardullstrumpor från Finlands enda traditionella ullstrumpsfabrik, stickade på 1950-talsmaskiner i Helsingfors. 70 procent mulesingfri ull spunnen i Jämsä och färgad i Kyröskoski, i flera storlekar och fyra färger döpta efter bark, mossa, lav och natt.',
    specs: [
      '70 % ull (mulesingfri), 30 % polyamid',
      'Stickade i Helsingfors, ullen spunnen i Jämsä och färgad i Kyröskoski',
      'Flera storlekar, fyra färger',
    ],
  },
  'sk-halva-salmiakkikalat': {
    name: 'Halva Salmiakkikalat saltlakritsfiskar 230 g',
    description:
      'Fiskformade salmiakgodisar från Halva, 230 gram, påsen som ligger i varje finskt handskfack. Fast tugga, intensiv saltlakrits, och det första man räcker en besökare som säger sig vilja smaka riktiga Finland.',
    specs: [
      '230 g',
    ],
  },
  'sk-kouvolan-lakritsi-500g': {
    name: 'Kouvolan Lakritsi lakritsbitar 500 g',
    description:
      'Ett halvt kilo mjuka lakritsbitar från Kouvola, gjorda efter ett recept från 1945 som finjusterades 1960 av en engelsk lakritsspecialist. Så här smakar ren lakrits när inget tillsätts för att dölja roten.',
    specs: [
      '500 g',
      'Från 1945, justerat 1960',
    ],
    specLabels: [undefined, 'Recept'],
  },
  'sk-fazer-omar-chocolate-bar': {
    name: 'Fazer Omar chokladkaka 180 g',
    description:
      'Begränsad 180-gramskaka till Omars 60-årsjubileum: den milda, krämiga Omar-kolan som sålts sedan 1966, i Fazers mjölkchoklad med minst 30 procent kakao. Säljs bara under begränsad tid.',
    specs: [
      '180 g',
      'Mjölkchoklad med minst 30 % kakao',
      'Begränsad upplaga till 60-årsjubileet',
    ],
    specLabels: [undefined, 'Kakao', 'Tillgänglighet'],
  },
  'sk-fazer-salty-suffeli-puffi': {
    name: 'Karl Fazer Salty Suffeli Puffi chokladkaka 160 g',
    description:
      'Fazers mjölkchoklad gjord på färsk mjölk, med knapriga saltsöta Suffeli-majspuffar invikta. 160 gram, minst 30 procent kakao, och svaret för den som inte kan välja mellan salt och sött.',
    specs: [
      '160 g',
      'Mjölkchoklad med minst 30 % kakao',
    ],
    specLabels: [undefined, 'Kakao'],
  },
  'sk-tyrkisk-peber-chewy': {
    name: 'Fazer Tyrkisk Peber Chewy salmiakpastiller 38 g',
    description:
      'Tyrkisk Pebers heta salmiak som ny mjuk tuggpastill i stället för hårt skal. En 38-grams fickförpackning, listad av butiken i augusti 2026, för den som vill ha salmiak och sting i samma munsbit.',
    specs: [
      '38 g',
    ],
  },
  'sk-tyrkisk-peber-sour-foams': {
    name: 'Fazer Tyrkisk Peber Sour Foams skumgodis 150 g',
    description:
      'Mjuka skumgodisar med mild Tyrkisk Peber-hetta och syrliga smaker av kiwi-jordgubb och citron-lime, 150 gram. En mildare väg in i pepparlakritsfamiljen, och påsen som öppnas först i ett blandat sällskap.',
    specs: [
      '150 g',
    ],
  },
  'sk-marianne-toffee-rae': {
    name: 'Fazer Marianne Toffee chokladdragéer 150 g',
    description:
      'Marianne-dragéerna i kolaversion: blankt krispigt skal runt en kärna av mjölkchoklad med minst 28 procent kakao, i återförslutbar 150-gramspåse. Också tänkta för bakning, om några överlever så länge.',
    specs: [
      '150 g',
      'Mjölkchoklad med minst 28 % kakao',
      'Återförslutbar påse',
    ],
    specLabels: [undefined, 'Kakao', 'Förpackning'],
  },
  'sk-fasupala-lakritsi': {
    name: 'Fazer Fasupala Lakritsi rånkex 199 g',
    description:
      'Munsbitsstora rån med lakritssmakande fyllning under ett överdrag med mjölkchokladsmak, 199 gram, utan palmolja. Lakritsversionen av ett kex finländare redan äter i lådor, listad av butiken i augusti 2026.',
    specs: [
      '199 g',
      'Utan palmolja',
    ],
    specLabels: [undefined, 'Fett'],
  },
  'sk-finnish-flavours-cloudberry-jam': {
    name: 'Finnish Flavours premium hjortronsylt 250 g',
    description:
      'Hjortronsylt med 75 procent finska hjortron och 20 procent socker, 250 gram. Hjortron mognar på lappländska myrar i slutet av juli och kan inte odlas i stor skala, och det är därför en burk kostar lika mycket som två påsar choklad.',
    specs: [
      '250 g',
      'Finskt hjortron 75 %, socker 20 %',
    ],
  },
  'sk-lapin-liha-smoked-reindeer-soup': {
    name: 'Lapin Liha rökt rensoppa 400 g',
    description:
      'Krämig soppa med varm- och kallrökt ren, 400 gram, tillverkad av Lapin Liha. Värm i kastrull; det är smaken av en lappländsk stuglunch i en förpackning som får plats i resväskan.',
    specs: [
      '400 g',
      'Varmrökt ren 3 % och kallrökt ren 3 %',
      'Värm i kastrull',
    ],
    specLabels: [undefined, undefined, 'Tillagning'],
  },
  'sk-vaasan-ruispalat-5pack': {
    name: 'Vaasan Ruispalat rågbröd 660 g, 12 st',
    description:
      'Vaasan Ruispalat är ett fullkornsrågbröd bakat på äkta surdeg av 100 procent finsk spannmål, 12 bitar i en påse på 660 gram. Vaasan kallar det Finlands populäraste bröd, och det innehåller 12 procent fiber.',
    specs: [
      '660 g, 12 bitar',
      'Fullkornsråg 87 % av spannmålen, fiber 12 %',
    ],
  },
  'sk-poikain-parhaat-freeze-dried-blueberry': {
    name: 'Poikain Parhaat frystorkade blåbär 15 g',
    description:
      'Hela finska skogsblåbär, frystorkade och inget annat: 15 gram som inte väger något i resväskan och smakar augusti på en myr. Laktosfria, glutenfria, veganska, utan tillsatt socker eller konserveringsmedel.',
    specs: [
      '15 g',
      '100 % finskt frystorkat blåbär',
      'Laktosfri, glutenfri, vegansk, utan tillsatt socker, utan konserveringsmedel',
    ],
    specLabels: [undefined, undefined, 'Kost'],
  },
  'rj-arctic-warriors-blueberry-powder': {
    name: 'Arctic Warriors blåbärspulver 45 g',
    description:
      'Finska blåbär torkade hela med sin saft och malda, inget tillsatt, 45 gram. En sked i gröten, yoghurten eller smoothien; samma bär säljs här via Ruohonjuuri, som skickar inom EU.',
    specs: [
      '45 g',
      '100 % finskt blåbär, torkat helt med saften',
    ],
  },
  'rj-poikain-parhaat-blueberry-lemonade': {
    name: 'Poikain Parhaat blåbärslemonad 0,33 l',
    description:
      'Ekologisk blåbärslemonad gjord i Vehmainen, Tammerfors, av riktiga råvaror utan konstgjorda aromer eller färgämnen, flaska på 0,33 liter. Läsken att ställa bredvid salmiaken på ett finskt provsmakningsbord.',
    specs: [
      '0,33 l',
      'Tillverkad i Vehmainen, Tammerfors',
      'Ekologisk, inga konstgjorda aromer eller färgämnen',
    ],
    specLabels: [undefined, undefined, 'Tillsatser'],
  },
  'rj-nordic-koivu-birch-sap': {
    name: 'Nordic Koivu björksav 500 ml',
    description:
      'Björksav tappad på våren när trädet lyfter vattnet det lagrat i rötterna, buteljerad direkt från trädet utan värmebehandling eller konserveringsmedel, 500 ml. Smakar svagt sött och mest av kallt, rent vatten.',
    specs: [
      '500 ml',
      'Inte värmebehandlad, inga konserveringsmedel',
    ],
    specLabels: [undefined, 'Behandling'],
  },
  'rj-kaino-spruce-sprout-sparkling-075': {
    name: 'KAINO Drinks granskott ekologisk mousserande dryck 0,75 l',
    description:
      'Alkoholfri ekologisk mousserande dryck smaksatt med granskott, den finska granens späda majskott, i flaska på 0,75 liter. Gjord i Vehmainen, Tammerfors, för skålen på en fest där inte alla dricker.',
    specs: [
      '0,75 l',
      'Alkoholfri, ekologisk',
      'Tillverkad i Vehmainen, Tammerfors',
    ],
    specLabels: [undefined, 'Alkohol', undefined],
  },
  'rj-yrttipaja-chaga-powder': {
    name: 'Yrttipaja chagapulver 35 g',
    description:
      'Malen chaga, den svarta svampen som växer på björkstammar, att brygga som te: en matsked per liter vatten, sjud minst tio minuter och sila. 35 gram, det billigaste sättet att prova pakuri innan man köper bitar.',
    specs: [
      '35 g',
      '1 matsked per liter vatten, sjud minst 10 minuter och sila',
    ],
    specLabels: [undefined, 'Användning'],
  },
  'rj-forestly-mushroom-chips-chili': {
    name: 'Forestly Foods svampchips, chili 50 g',
    description:
      'Krispiga chips av ekologiskt odlad shiitake, skonsamt tillagade och kryddade med chili, salt och peppar, 50 gram. Umami i påse, för soffan eller smulade över en soppa.',
    specs: [
      '50 g',
      'Ekologiskt odlad shiitake, chili, salt och peppar',
    ],
  },
  // katalogin täydennys 2026-09-05
  'sk-muurla-moomin-80v-tray': {
    name: 'Muurla Mumin 80 år bricka 27 x 20 cm',
    description:
      'Bricka på 27 x 20 cm ur Muurlas serie Mumin 80 år, tål maskindisk. Storleken som bär två muggar och en tallrik kex från köket till soffan och ser ut som en del av bordet väl framme.',
    specs: [
      '27 x 20 cm',
      'Tål maskindisk',
    ],
  },
  'sk-muurla-moomin-glass-box-yhdessa': {
    name: 'Muurla Mumin glasask Yhdessä 11,5 cm',
    description:
      'Hjärtformad glasask ur Muurlas miniserie Yhdessä, tillsammans, 11,5 x 10 x 5,5 cm, handdisk, levereras i sin försäljningsförpackning. Avsedd för de små skatterna: ringar, en vikt lapp, en första tand.',
    specs: [
      '11,5 x 10 x 5,5 cm',
      'Handdisk',
      'Försäljningsförpackning',
    ],
    specLabels: [undefined, undefined, 'Förpackning'],
  },
  // katalogin täydennys 2026-09-05
  'sk-aurora-borealis-reindeer-tealight': {
    name: 'Aurora Borealis värmeljushållare ren 10 cm',
    description:
      'Polerad värmeljushållare i metall formad som en ren, 10 cm hög. Det lilla Lapplandsföremålet för fönsterbrädan i december, lätt nog att posta i ett vadderat kuvert.',
    specs: [
      'Höjd 10 cm',
      'Polerad metall',
      'Värmeljus',
    ],
    specLabels: [undefined, undefined, 'För'],
  },
  'sk-muurla-moomin-bottle-05l-marjat': {
    name: 'Muurla Mumin glasflaska 0,5 l, Bär',
    description:
      'Halvlitersflaska i sodaglas med tät patentkork och mönstret Bär, tål maskindisk. Muurla gör dem för saft och salladsdressing, och halvlitern får plats i kylskåpsdörren.',
    specs: [
      '0,5 l',
      'Sodaglas, patentkork',
      'Tål maskindisk',
    ],
  },
  'nb-hattifatteners-cushion': {
    name: 'Hattifnattkudde',
    description:
      'Polyesterkudde formad som en rad hattifnattar, 45 till 75 x 30 till 50 x 10 cm, endast handtvätt. Den kommer vakuumpackad och tar en dag på sig att svälla tillbaka till sin form, den enda gången hattifnattar står stilla.',
    specs: [
      'Polyester',
      '45–75 x 30–50 x 10 cm',
      'Endast handtvätt',
      'Vakuumpackad, återtar formen efter uppackning',
    ],
    specLabels: [undefined, undefined, undefined, 'Förpackning'],
  },
  'sk-emendo-moomin-sauna-seat-cover': {
    name: 'Emendo Muminkärlek bastuhandduk 150 x 50 cm, brun',
    description:
      'Bastuhandduk i linne och bomull, 150 x 50 cm, med Tove Janssons originalteckningar, officiell licensprodukt. Linne suger upp fukt och tål hård tvätt, så den ligger på laven eller står bakom ryggen.',
    specs: [
      '150 x 50 cm',
      'Linne 60 %, bomull 40 %',
      'Officiell Moomin Characters-produkt',
    ],
    specLabels: [undefined, undefined, 'Licens'],
  },
  'sk-rento-pino-sauna-seat-cover': {
    name: 'Rento Pino bastuhandduk 50 x 150 cm, grå',
    description:
      'Jacquardvävd bastuhandduk i bomull, 50 x 150 cm, formgiven av Anna Säteri för Rento. Lätt bomull känns sval mot huden på den heta laven, suger upp svett, torkar snabbt, och mönstret klarar tvätten.',
    specs: [
      '50 x 150 cm',
      'Jacquardvävd bomull',
      'Anna Säteri',
    ],
    specLabels: [undefined, undefined, 'Formgivning'],
  },
  'sk-moomin-chocolate-chip-biscuit-tin': {
    name: 'Mumin chokladkakor i plåtburk 200 g',
    description:
      'Små chokladkakor, 200 gram, i en Muminburk som överlever kakorna som förvaringsburk. Chokladbitarna utgör 16 procent av kakan och innehåller minst 40 procent kakaotorrsubstans.',
    specs: [
      '200 g',
      'Chokladbitar 16 %, i chokladen minst 40 % kakaotorrsubstans',
      'Samlarburk, kan användas som förvaringsburk',
    ],
    specLabels: [undefined, undefined, 'Förpackning'],
  },
  'sk-paulig-cafe-new-york-beans': {
    name: 'Paulig Café New York kaffebönor 450 g',
    description:
      'Mellanmörkt bönkaffe, 450 gram, latinamerikansk arabica med brasilianska bönor för sötma och en fruktig ton. Paulig har rostat kaffe i Finland sedan 1876, och finländarna dricker mer av det per person än någon annan.',
    specs: [
      '450 g',
      'Mellanmörk rostning, hela bönor',
      'Latinamerikansk arabica och brasilianska bönor',
    ],
    specLabels: [undefined, 'Rostning', undefined],
  },
  // katalogin täydennys 2026-09-05
  'rj-korpihilla-spruce-sprout-sparkling-750': {
    name: 'Korpihilla mousserande granskottsdryck 750 ml',
    description:
      'Alkoholfri mousserande dryck, gjord för hand av granskott i finska Lappland, 750 ml. Utsedd till Finlands bästa dryck 2005 av tidningen Viisi Tähteä, och fortfarande flaskan man öppnar när skålen ska smaka skog.',
    specs: [
      '750 ml',
      'Gjord för hand i finska Lappland',
      'Alkoholfri',
      'Finlands bästa dryck 2005, tidningen Viisi Tähteä',
    ],
    specLabels: [undefined, undefined, 'Alkohol', 'Utmärkelse'],
  },
  // katalogin täydennys 2026-09-05
  'rj-raitaniemi-sea-buckthorn-powder': {
    name: 'Marjatila Raitaniemi havtornspulver 100 g',
    description:
      'Havtorn torkat och malet helt med kärnorna på en finsk bärgård, 100 gram. En tesked motsvarar en deciliter färska bär, och pulvret är torkat till 3 till 5 procents fukthalt, därför håller det i åratal.',
    specs: [
      '100 g',
      'Havtorn, malet helt med kärnorna',
      '1 till 3 teskedar om dagen i gröt eller yoghurt',
      '1 tesked pulver motsvarar 1 dl färska bär',
    ],
    specLabels: [undefined, undefined, 'Dosering', 'Motsvarighet'],
  },
  'rj-raitaniemi-crowberry-powder': {
    name: 'Marjatila Raitaniemi kråkbärspulver 100 g',
    description:
      'Finskt vilt kråkbär, torkat helt och malet, inget tillsatt, 100 gram. Kråkbär är det svarta bäret som täcker Lapplands fjällsluttningar och sällan når en butik, så närmare än så här kommer de flesta inte att smaka det.',
    specs: [
      '100 g',
      '100 % finskt kråkbär, torkat och malet helt',
      'Inga, inga konserveringsmedel',
    ],
    specLabels: [undefined, undefined, 'Tillsatser'],
  },
  // katalogin täydennys 2026-09-05
  // katalogin täydennys 2026-09-05
  'sk-poikain-parhaat-puolukka': {
    name: 'Poikain Parhaat frystorkade lingon 15 g',
    description:
      'Hela finska lingon, frystorkade och inget annat, 15 gram. Frystorkningen bevarar färg, tuggmotstånd, vitaminer och fibrer, och påsen väger inget i resväskan. Laktosfria, glutenfria, veganska, utan tillsatt socker eller konserveringsmedel.',
    specs: [
      '15 g',
      '100 % finskt frystorkat lingon',
      'Laktosfri, glutenfri, vegansk, utan tillsatt socker, utan konserveringsmedel',
    ],
    specLabels: [undefined, undefined, 'Kost'],
  },
  // Talvi- ja joulutuotteet 6.11.2026
  'iittala-glass-baubles-red': {
    name: 'Iittala julgranskulor i glas 80 mm, röd, 5 st',
    description:
      'Ett set med 5 röda julgranskulor i munblåst glas från Iittala, var och en 80 mm i diameter och upphängd i ett sidenband. Varje kula är munblåst, så formen och den röda nyansen skiljer sig något från kula till kula. Häng dem i granen eller på en kvist i en vas, eller använd dem i ett bordsarrangemang.',
    specs: [
      '5 julgranskulor',
      'Diameter 8 cm',
      'Munblåst glas',
      'Röd',
      '0,706 kg brutto',
      '32741-01, EAN 6411923679978',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, 'Artikelnummer och EAN'],
  },
  'iittala-toikka-annual-bird-2026': {
    name: 'Iittala Birds by Toikka årsfågel 2026, Lakla',
    description:
      'Lakla är årsfågeln 2026 i Iittalas serie Birds by Toikka, en orange fågel i munblåst glas formgiven av Oiva Toikka. Iittala släpper varje år en ny årsfågel med eget mönster och egen färgkombination, och årsfåglarna har blivit populära bland samlare. Varje fågel blåses av glasblåsare vid Iittalas glasbruk i Finland, så små luftbubblor och skillnader i tjocklek kan förekomma.',
    specs: [
      'Längd 22 cm, bredd 10 cm, höjd 14 cm',
      'Munblåst glas',
      'Orange',
      'Tillverkad vid Iittalas glasbruk i Finland',
      'Rengörs med fuktig trasa',
      '657373-01, EAN 6411923689199',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, 'Artikelnummer och EAN'],
  },
  'marimekko-siirtolapuutarha-baubles': {
    name: 'Marimekko Siirtolapuutarha julgranskulor 2025, 2 st',
    description:
      'Marimekkos Siirtolapuutarha-kulor för 2025 är ett par julgranskulor i stengods med Maija Louekaris mönster i vitt, svart och grönt. Siirtolapuutarha är finska för koloniträdgård. Varje kula är 7 cm bred och 7 cm hög, och Marimekko föreslår att man hänger dem i ett fönster lika väl som i granen.',
    specs: [
      '2 julgranskulor',
      'Bredd 7 cm, höjd 7 cm',
      'Stengods',
      'Vitt, svart och grönt',
      'Maija Louekari',
      '650181-01, EAN 6411255039983',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Formgivare', 'Artikelnummer och EAN'],
  },
  'arabia-moomin-love-baubles': {
    name: 'Arabia Mumin julgranskulor Kärlek, guld, 5 cm, 2 st',
    description:
      'Två julgranskulor på 5 cm i vitroporslin från Arabia, dekorerade med Tove Janssons Muminmotiv Kärlek med Mumintrollet och Snorkfröken. Motivet har kommit att stå för kärlek och nära relationer. Häng dem i granen eller på en dekorationskvist, eller använd dem som en del av en festdukning.',
    specs: [
      '2 julgranskulor',
      'Bredd 5 cm, höjd 5 cm',
      'Vitroporslin',
      'Guld',
      'Tove Jansson',
      '699561-01, EAN 6411801029079',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Illustration', 'Artikelnummer och EAN'],
  },
  'sk-muurla-moomin-bauble-pyjamas': {
    name: 'Muurla Mumin julgranskula i glas 9 cm, Pyjamas',
    description:
      'En handgjord julgranskula i glas ur Muurlas Muminsortiment, 9 cm i diameter, med motivet Pyjamas. Muurla beskriver scenen som att koppla av i pyjamas i skenet av levande ljus, och ett satinband för upphängning ingår i förpackningen.',
    specs: [
      'Diameter 9 cm',
      'Glas, handgjord',
      'Satinband ingår',
    ],
    specLabels: [undefined, undefined, 'Upphängning'],
  },
  'sk-muurla-moomin-baubles-snow': {
    name: 'Muurla Mumin julgranskulor 5 cm, Lumipyry, 4 st',
    description:
      'En förpackning med 4 julgranskulor ur Muurlas Muminsortiment, 5 cm i diameter, med motivet Lumipyry (snöstorm) och satinband för upphängning. Muurla förlägger motivet till tiden strax efter en snöstorm, med höga drivor, ett sovande landskap och snölyktor som väntar på att byggas.',
    specs: [
      'Diameter 5 cm',
      '4 julgranskulor, satinband ingår',
    ],
  },
  'sk-muurla-moomin-led-ball': {
    name: 'Muurla Mumin LED-glaskula 11 cm, Tähtihetki',
    description:
      'En dekorationskula i glas ur Muurlas Muminserie Tähtihetki, 11 cm i diameter, med en ljusslinga med 10 lysdioder inuti. Den har strömbrytare, drivs med CR2032-litiumknappcellsbatterier som inte ingår och är endast för inomhusbruk. Serien Tähtihetki har gulddetaljer, och ett satinband för upphängning ingår i förpackningen.',
    specs: [
      'Diameter 11 cm',
      'Glas, LED-ljusslinga med 10 lysdioder',
      'CR2032-litiumknappcellsbatterier, ingår inte. På/av-knapp',
      'Endast inomhus. CE-certifierad',
      'Formgiven i Finland',
    ],
    specLabels: [undefined, undefined, 'Strömförsörjning', 'Användning', 'Formgivning'],
  },
  'sk-muurla-moomin-led-candle-tree': {
    name: 'Muurla Mumin LED-ljus 12,5 cm, Kuusen alla',
    description:
      'Ett batteridrivet LED-ljus ur Muurlas serie Moomin Originals, 12,5 cm högt, med en illustration ur Tove Janssons bok Farlig midsommar. Motivets namn Kuusen alla betyder under granen. Ljuset är gjort av paraffinvax och format för att likna ett riktigt stearinljus, och det varma skenet lyfter fram bilden. Det har lägena på, av och timer på 6 timmar, drivs med 2 AA-batterier som inte ingår och är endast för inomhusbruk.',
    specs: [
      'Diameter 10 cm, höjd 12,5 cm',
      'Paraffinvax',
      '2 x AA-batterier, ingår inte',
      'På, av och timer på 6 timmar',
      'Endast inomhus',
      'Tove Jansson, ur Farlig midsommar',
    ],
    specLabels: [undefined, undefined, 'Strömförsörjning', 'Funktioner', 'Användning', 'Illustration'],
  },
  'arabia-moomin-plates-winter-night': {
    name: 'Arabia Mumintallrikar 19 cm, Kontor & Vinternatt, 2 st',
    description:
      'Två Mumintallrikar på 19 cm i vitt vitroporslin från Arabia, Kontor och Vinternatt, gjorda för att passa till muggarna som släppts tidigare. Bilden Kontor dök först upp på en Muminmugg från Arabia 1996 och bygger på serier där skrivande, tecknande och målande återkommer. Vinternatt återger bilden från en mugg från 2006, där Mumintrollet sitter på ett broräcke i en scen ur Tove Janssons Trollvinter från 1957.',
    specs: [
      'Diameter 19,4 cm, höjd 2,8 cm',
      'Vitroporslin',
      '2 tallrikar, Kontor och Vinternatt',
      'Tål diskmaskin, mikrovågsugn och ugn',
      'Tove Jansson',
      '566802-01, EAN 6411801011432',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Illustration', 'Artikelnummer och EAN'],
  },
  'arabia-moomin-plates-winter-fire': {
    name: 'Arabia Mumintallrikar 19 cm, Talvinuotio & Purjehtien, 2 st',
    description:
      'Två Mumintallrikar på 19 cm i vitroporslin från Arabia med bilderna Talvinuotio och Purjehtien, båda efter Tove Janssons illustrationer. Talvinuotio betyder vinterbrasa och Purjehtien segling, så paret ställer en vinterscen bredvid en seglingsscen. Tallrikarna är tänkta för vardagsmåltider lika väl som för fest.',
    specs: [
      '2 tallrikar, Talvinuotio och Purjehtien',
      'Vitroporslin',
      'Flerfärgad',
      '0,886 kg brutto',
      'Tove Jansson',
      '629239-01, EAN 6411801015065',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Illustration', 'Artikelnummer och EAN'],
  },
  'sk-muurla-moomin-snowfall-mug': {
    name: 'Muurla Mumin emaljmugg Lumisade 2,5 dl',
    description:
      'En emaljmugg på 2,5 dl ur Muurlas Muminsortiment med motivet Lumisade (snöfall), den första snön i Mumindalen och dags för snölekar. Muurlas emaljprodukter har en kärna av kolstål med dubbel emaljering, så muggen passar på vandringen, i stugan eller i båten lika väl som på bordet. Den tål varma och kalla drycker och går i diskmaskinen, men inte i mikrovågsugnen.',
    specs: [
      '2,5 dl',
      'Kolstål med dubbel emaljering',
      'Tål diskmaskin. Ej för mikrovågsugn',
    ],
  },
  'sk-muurla-moomin-gifts-mug': {
    name: 'Muurla Mumin emaljmugg Presenter 3,7 dl',
    description:
      'En emaljmugg på 3,7 dl ur Muurlas Muminsortiment med motivet Presenter, en julbild om att ge gåvor till dem som står en nära. Under emaljen finns en kärna av kolstål med dubbel beläggning, vilket gör muggen tålig nog för utomhusbruk lika väl som för bordet. Den tål varma och kalla drycker och går i diskmaskinen, men inte i mikrovågsugnen.',
    specs: [
      '3,7 dl',
      'Kolstål med dubbel emaljering',
      'Tål diskmaskin. Ej för mikrovågsugn',
    ],
  },
  'rj-pesonen-beeswax-candle': {
    name: 'Pesosen Mehiläistarhat bordsljus i bivax, stort',
    description:
      'Pesosen Mehiläistarhat gör det här stora bordsljuset för hand av bivax, som också ger det dess färg och doft. Esa på biodlingen har hållit bin i 29 år, varav 13 yrkesmässigt, och kuporna står bland åkrar, skogar och små vattendrag kring Sastamala och Tavastkyro. Biodlingen gör sina ljus av det som de egna kuporna ger, och de brinner länge med en klar, stadig låga.',
    specs: [
      'Bivax',
      'Stort',
      'Handgjort',
      'Sastamala och Tavastkyro',
    ],
    specLabels: [undefined, undefined, 'Tillverkning', 'Bigårdar'],
  },
  'rj-pesonen-honeycomb-candle': {
    name: 'Pesosen Mehiläistarhat bikakeljus i bivax, stort',
    description:
      'Ett stort bikakeljus gjort för hand av bivax hos Pesosen Mehiläistarhat, med en brinntid på 30 timmar. Färgen och doften kommer från vaxet, och biodlingen gör sina ljus av det som de egna kuporna kring Sastamala och Tavastkyro ger. Esa på biodlingen har hållit bin i 29 år och skött dem yrkesmässigt i 13 år.',
    specs: [
      'Bivax',
      'Stort',
      '30 h',
      'Handgjort',
      'Sastamala och Tavastkyro',
    ],
    specLabels: [undefined, undefined, 'Brinntid', 'Tillverkning', 'Bigårdar'],
  },
  'sk-moomin-mistletoe-candle': {
    name: 'Havi Mumin bordsljus 7 x 12 cm, Mistel, beige',
    description:
      'Ett beige bordsljus från Havi med Muminmönstret Mistel, 7 x 12 cm och med en brinntid på 55 timmar. Mönstret är screentryckt på ljuset.',
    specs: [
      '7 x 12 cm',
      'Beige',
      '55 h',
      'Screentryckt',
      'Havi Oy, Riihimäki',
    ],
    specLabels: [undefined, undefined, 'Brinntid', 'Dekor', 'Marknadsförs av'],
  },
  'iittala-kastehelmi-tealight': {
    name: 'Iittala Kastehelmi värmeljushållare 64 mm, klar',
    description:
      'En klar värmeljushållare i glas ur Iittalas Kastehelmi, 64 mm i diameter, från serien som Oiva Toikka formgav för Iittala 1964. Kastehelmi är finska för daggdroppe, och Iittala återlanserade serien 2010. Hållaren tillverkas också i andra färger, och Iittala föreslår att man använder den ensam eller i grupp med olika färger.',
    specs: [
      'Diameter 6,4 cm',
      'Glas',
      'Klar',
      'Endast handdisk',
      'Oiva Toikka, Iittala Kastehelmi',
      '13167-01, EAN 6411920059766',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Formgivare och kollektion', 'Artikelnummer och EAN'],
  },
  'sk-fazer-christmas-box': {
    name: 'Fazer julbox 2026',
    description:
      'Fazers julbox för 2026 med 6 förpackningar choklad, godis och pepparkakor för säsongen. Den innehåller Karl Fazer-konfekt, en Karl Fazer-chokladkaka med pepparkaka, Remix Xmas + Choco, Dumle Winter Mix-kolor, Vihreät kuulat-geléer med päronsmak och Marianne-pepparkakor med mintchoklad.',
    specs: [
      'Karl Fazer-konfekt 250 g, Karl Fazer-chokladkaka med pepparkaka 200 g, Remix Xmas + Choco godisblandning 300 g, Dumle Winter Mix kolablandning 180 g, Vihreät kuulat geléer med päronsmak 260 g, Marianne pepparkakor med mintchoklad 175 g',
      'Mjölkchoklad med minst 30 % kakao',
      'Innehåller vete (gluten), soja och mjölk (laktos). Kan innehålla råg, korn, havre, ägg, nötter och mandel',
      'Energi 1845 kJ / 441 kcal, fett 17 g varav mättat 9,4 g, kolhydrat 67 g varav sockerarter 53 g, protein 4,6 g, salt 0,36 g',
    ],
    specLabels: [undefined, 'Anteckningar på etiketten', 'Allergener', 'Näringsvärde per 100 g'],
  },
  'sk-karl-fazer-advent-calendar': {
    name: 'Karl Fazer adventskalender 200 g',
    description:
      'En Karl Fazer-adventskalender med 200 g chokladpraliner i flera smaker bakom luckorna. Den sista luckan är fylld med Fazers Blå, den Karl Fazer-mjölkchoklad som Fazer har gjort sedan 1922. Fazer köper sin kakao via programmet Fazer Cocoa Vision.',
    specs: [
      '200 g',
      'Chokladpraliner i flera smaker, sista luckan fylld med Fazers Blå mjölkchoklad',
      'Mjölkchoklad med minst 30 % kakao',
      'Innehåller mjölk, soja och korn (gluten). Kan innehålla nötter, mandel, vete, råg och havre',
      'Energi 2315 kJ / 554 kcal, fett 34 g varav mättat 20 g, kolhydrat 53 g varav sockerarter 51 g, protein 9,6 g, salt 0,31 g',
    ],
    specLabels: [undefined, undefined, 'Anteckningar på etiketten', 'Allergener', 'Näringsvärde per 100 g'],
  },
  'sk-fazer-christmas-chocolates': {
    name: 'Fazer Joulusuklaa chokladpraliner 295 g',
    description:
      'Fazer Joulusuklaa-praliner, 295 g, med ett milt skal av mjölkchoklad runt en tryffelfyllning med äkta pepparkakssmulor. Fazer föreslår dem till julens sammankomster, till exempel tillsammans med glögg.',
    specs: [
      '295 g',
      'Skal av mjölkchoklad, tryffelfyllning med pepparkakssmulor',
      'Mjölkchoklad med minst 30 % kakao',
      'Innehåller mjölk, vete, korn (gluten) och soja. Kan innehålla nötter, mandel, råg och havre',
      'Energi 2274 kJ / 545 kcal, fett 33 g varav mättat 19 g, kolhydrat 53 g varav sockerarter 51 g, protein 8,2 g, salt 0,24 g',
    ],
    specLabels: [undefined, undefined, 'Anteckningar på etiketten', 'Allergener', 'Näringsvärde per 100 g'],
  },
  'sk-karl-fazer-gingerbread-bar': {
    name: 'Karl Fazer Winter Edition chokladkaka med pepparkaka 200 g',
    description:
      'En Karl Fazer Winter Edition-kaka på 200 g som förenar mjuk mjölkchoklad med knaprig pepparkaka. Fazer har gjort Karl Fazer-mjölkchoklad sedan 1922, och den här pepparkaksvarianten är julutgåvan.',
    specs: [
      '200 g',
      'Mjölkchoklad med knaprig pepparkaka',
      'Mjölkchoklad med minst 30 % kakao',
      'Innehåller mjölk, vete (gluten) och soja. Kan innehålla nötter, mandel, råg och havre',
      'Energi 2205 kJ / 527 kcal, fett 30 g varav mättat 18 g, kolhydrat 55 g varav sockerarter 48 g, protein 8,5 g, salt 0,22 g',
    ],
    specLabels: [undefined, undefined, 'Anteckningar på etiketten', 'Allergener', 'Näringsvärde per 100 g'],
  },
  'sk-fazer-glogg-balls': {
    name: 'Fazer Glögikuulat gelégodis 260 g',
    description:
      'En ask på 260 g Fazer Glögikuulat, mjuka och söta gelékulor uppkallade efter glögg. De innehåller varken gluten, gelatin eller laktos och passar veganer. I asken finns ett recept på hur man gör en varm dryck av dem.',
    specs: [
      '260 g',
      'Glutenfri, gelatinfri, laktosfri, vegansk',
      'Energi 1353 kJ / 322 kcal, fett 0 g varav mättat 0 g, kolhydrat 79 g varav sockerarter 64 g, protein 0 g, salt 0,28 g',
    ],
    specLabels: [undefined, 'Kost', 'Näringsvärde per 100 g'],
  },
  'sk-halva-christmas-liquorice': {
    name: 'Halva jullakritsblandning 250 g',
    description:
      'Halvas jullakritsblandning, 250 g lakrits i 3 julsmaker, förpackad i en roséguldfärgad ask. Där finns lakritsblommor med smak av äppelpaj, lakrits fylld med glögg och lakrits fylld med pepparkaka. Halva gör blandningen i Sockenbacka i Helsingfors.',
    specs: [
      '250 g',
      'Lakritsblommor med äppelpajsmak, lakrits med glöggfyllning, lakrits med pepparkaksfyllning',
      'Tillverkad i Sockenbacka, Helsingfors',
      'Innehåller vete (gluten)',
      'Energi 1419 kJ / 334 kcal, fett 0,7 g varav mättat 0,3 g, kolhydrat 79 g varav sockerarter 53 g, protein 2,9 g, salt 0,15 g',
    ],
    specLabels: [undefined, undefined, undefined, 'Allergener', 'Näringsvärde per 100 g'],
  },
  'sk-halva-salmiakki-calendar': {
    name: 'Halva adventskalender med salmiak 200 g',
    description:
      'En adventskalender från Halva med 200 g salmiak, finsk saltlakrits, ur Halvas eget sortiment. Bakom luckorna finns Vanhat Autot, salmiakfiskar, salta dödskallar, Pommix, salmiakhjärtan, salmiaksvärd, Salmiakkiruutu-rutor och hård Jauhix-salmiak.',
    specs: [
      '200 g',
      'Vanhat Autot-salmiak, salmiakfisk, salt dödskalle, Pommix-salmiak, salmiakhjärta, salmiaksvärd, Salmiakkiruutu, Jauhix-salmiak',
      'Energi 1406 kJ / 331 kcal, fett 0,5 g varav mättat 0,1 g, kolhydrat 80 g varav sockerarter 59 g, protein 2,7 g, salt 0,03 g',
    ],
    specLabels: [undefined, undefined, 'Näringsvärde per 100 g'],
  },
  'kuivalihakundi-advent-calendar': {
    name: 'Kuivalihakundi adventskalender med jerky 2026, 24 luckor',
    description:
      'Kuivalihakundis adventskalender för 2026 innehåller 24 olika smaker av torkat kött, en påse på 20 g bakom var och en av de 24 luckorna. Där finns nötkött, kyckling, fett fläskkött och magrare fläskkött, i grundsmaker och i några som gjorts bara för den här kalendern, allt från företagets egen fabrik i Jokela i Finland. Köttet håller sig i rumstemperatur även efter öppning, kalendern står på ett bord eller hängs upp på väggen med hjälp av upphängningshålen, och den tillverkas i en begränsad upplaga.',
    specs: [
      '24 x 20 g påsar med torkat kött, en annan smak bakom varje lucka',
      'Nötkött, kyckling, fett fläskkött och magrare fläskkött',
      'Tillverkad i Kuivalihakundis egen fabrik i Jokela, Finland',
      'Håller sig i rumstemperatur, även efter öppning',
      'Står på ett bord eller hängs på väggen i upphängningshålen',
    ],
    specLabels: [undefined, 'Kött', undefined, undefined, 'Upphängning'],
  },
  'halti-crostie-merino-beanie': {
    name: 'Halti Crostie merinomössa',
    description:
      'En tättsittande Halti-mössa för längdskidåkning, vinterlöpning och annan träning i kyla, formgiven och tillverkad i Finland. Halva mössan är fodrad med Stormwall®, ett vindtätt och andningsbart lager som skyddar pannan och öronen mot vinden. Själva stickningen är en mjuk merinoullsblandning som håller värmen men andas.',
    specs: [
      'Stickad blandning av merinoull och akryl, 50 % merinoull, 50 % akryl. Till hälften fodrad med Stormwall®',
      'S, M, L',
      '0,2 kg',
      'Flera färger: Crocus Petal, Black, White, Fudge Maroon Red, Veiled Pink',
      'Tvätta med liknande färger, torka plant',
      'Formgiven och tillverkad i Finland, Avainlippu-produkt (Nyckelflaggan)',
    ],
  },
  'halti-vuolle-mohair-beanie': {
    name: 'Halti Vuolle mohairmössa',
    description:
      'En fluffig Halti-mössa i en blandning av mohair, merinoull och polyamid, med dubbla lager för extra värme och en hög uppvikning. Blandningen gör den lätt men varm, och något separat foder finns inte. En storlek, i Snow White eller Black.',
    specs: [
      'Mohairblandning, 50 % mohair, 32 % polyamid, 18 % merinoull. Inget separat foder',
      'En storlek',
      'Snow White eller Black',
      'Tvätta med liknande färger, torka plant',
      'Dubbla lager, hög uppvikning',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Egenskaper'],
  },
  'halti-tiilo-mittens': {
    name: 'Halti Tiilo II tumvantar',
    description:
      'Vadderade Halti-tumvantar för friluftsliv på vintern, gjorda av vatten- och vindtätt DrymaxX®-tyg med 60 g Microtherm®-vaddering inuti. Handflatan är av syntetläder med bra grepp, och vantarna har en ribbstickad innermudd och en justerbar åtdragning vid handleden. Svarta, storlek 7 till 12.',
    specs: [
      'DrymaxX®-polyester med membran, 100 % polyester. Ribbstickad mudd, 100 % polyester. Handflata i syntetläder, 100 % polyuretan',
      '60 g Microtherm®-vaddering',
      '7, 8, 9, 10, 11, 12',
      'Svart',
      'Tvättas separat',
    ],
    specLabels: [undefined, 'Isolering', undefined, undefined, undefined],
  },
  'halti-warm-merino-socks': {
    name: 'Halti varma merinostrumpor',
    description:
      'Halti-strumpor i merinoull med tjock frottéstickning, tillverkade i Finland och sömlösa, så de sitter bra i pjäxor, vinterskor och snowboardkängor. Frottén binder luft och värmer, och det ribbstickade skaftet stannar uppe. Använd dem ensamma eller över ett par tunna strumpor.',
    specs: [
      'Merinoullsblandning, 62 % merinoull, 36 % polyamid, 2 % elastan',
      '34-36, 37-39, 40-42, 43-45, 46-48',
      'Dark Sea Green eller Asphalt',
      '0,1 kg',
      'Tillverkad i Finland, Avainlippu-produkt (Nyckelflaggan)',
      'Tjock frottéstickning, sömlös, ribbstickat skaft som stannar uppe',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, 'Egenskaper'],
  },
  'north-outdoor-kaisla-beanie': {
    name: 'North Outdoor Kaisla merinomössa, kaffe',
    description:
      'En grov mössa i patentstickning av 100 procent mulesingfri merinoull, stickad i North Outdoors eget stickeri i Uleåborg. North Outdoor föreslår den från hösten till senvintern, på stadspromenader lika väl som på naturstigar. En storlek, i färgen kaffe.',
    specs: [
      '100 % merinoull, mulesingfri, patentstickning',
      'En storlek',
      'Kaffe',
      'Tillverkad i North Outdoors eget stickeri i Uleåborg, Finland',
    ],
  },
  'north-outdoor-polku-neck-tube': {
    name: 'North Outdoor Polku tubhalsduk i merino, kaffe',
    description:
      'En grov tubhalsduk i 100 procent mulesingfri merinoull, stickad i tät 1x1-ribbstickning. Den är tillräckligt hög för att bäras som halsduk, dras upp som huva eller dras över ansiktet. En storlek, i färgen kaffe.',
    specs: [
      '100 % merinoull, mulesingfri, 1x1-ribbstickning',
      'En storlek',
      'Kaffe',
      'Halsduk, huva eller ansiktsskydd',
    ],
    specLabels: [undefined, undefined, undefined, 'Användning'],
  },
  'north-outdoor-hirsi-socks': {
    name: 'North Outdoor Hirsi merinoullstrumpor, mandel',
    description:
      'Lätta merinoullstrumpor från North Outdoors eget stickeri i Uleåborg, 80 procent mulesingfri merino och 20 procent polyamid för hållbarheten. De gör sig bäst inomhus, ensamma eller över ett annat par strumpor. De tål skonsam maskintvätt, även om de sällan behöver det.',
    specs: [
      '80 % merinoull, mulesingfri, 20 % polyamid',
      '35-38, 39-42, 43-46',
      'Mandel',
      'Tillverkad i North Outdoors eget stickeri i Uleåborg, Finland',
      'Skonsam maskintvätt',
    ],
  },
  'north-outdoor-avery-mittens': {
    name: 'North Outdoor Avery tumvantar i ullfleece, latte',
    description:
      'Tumvantar i en lätt italiensk ullfleeceblandning med 63 procent återvunnen ull, fodrade invändigt med 100 procent merinoull. Merinofodret leder bort fukt och håller värmen, och den tätt men smidigt sittande passformen bevarar känslan i greppet. Storlek S och M, i färgen latte.',
    specs: [
      'Italiensk ullfleeceblandning, 63 % återvunnen ull. Foder 100 % merinoull',
      'S, M',
      'Latte',
      'Utomhus och i stan',
    ],
    specLabels: [undefined, undefined, undefined, 'Användning'],
  },
  'makia-alvar-beanie': {
    name: 'Makia Alvar merinomössa',
    description:
      'En Makia-mössa i 100 procent merinoull, tillverkad i Finland. Ullen är mulesingfri, och mössan finns i en storlek.',
    specs: [
      '100 % merinoull, mulesingfri',
      'En storlek',
      'Tillverkad i Finland',
    ],
  },
  'makia-stellar-scarf': {
    name: 'Makia Stellar merinohalsduk',
    description:
      'En halsduk från Makia i 100 procent merinoull. Den finns i en storlek.',
    specs: [
      '100 % merinoull',
      'En storlek',
    ],
  },
  'makia-freja-mittens': {
    name: 'Makia Freja quiltade tumvantar',
    description:
      'Quiltade Makia-tumvantar fyllda med Sorona®-syntetdun, en delvis växtbaserad isolering som andas och håller värmen. En vattenpelare på 3000 mm hjälper till att hålla händerna torra i lätt regn. Storlek S och M.',
    specs: [
      'Sorona®-syntetdun, delvis växtbaserat',
      '3000 mm',
      'S, M',
    ],
    specLabels: ['Fyllning', 'Vattenpelare', undefined],
  },
  'makia-sibelius-beanie': {
    name: 'Makia Sibelius merinomössa',
    description:
      'Mössan Sibelius från Makia, gjord av 100 procent merinoull. Den finns i en storlek.',
    specs: [
      '100 % merinoull',
      'En storlek',
    ],
  },
  'nb-moomin-christmas-sockbox': {
    name: 'Mumin julpresentask med strumpor, EU 36-42',
    description:
      'En färdig julpresentask med Muminstrumpor, två par i en storlek som passar EU 36 till 42. Strumporna är mest bomull med polyester, nylon och lite elastan, och det här är en officiell Muminprodukt.',
    specs: [
      '60 % bomull, 33 % polyester, 4 % nylon, 2 % elastan, 1 % elastodien',
      'En storlek, EU 36-42',
      '2 par strumpor i presentask',
      'Officiell Muminprodukt',
    ],
    specLabels: [undefined, undefined, undefined, 'Licens'],
  },
  'nb-moomin-christmas-box-men': {
    name: 'Mumin julpresentask med herrstrumpor, EU 40-45',
    description:
      'En färdig julpresentask med Muminstrumpor, två par herrstrumpor i storlek EU 40 till 45. Enligt Nordicbuddies erfarenhet passar de också större fötter. Strumporna är mest bomull med polyester, nylon och lite elastan, och det här är en officiell Muminprodukt.',
    specs: [
      '60 % bomull, 33 % polyester, 4 % nylon, 2 % elastan, 1 % elastodien',
      'En storlek, EU 40-45',
      '2 par strumpor i presentask',
      'Officiell Muminprodukt',
    ],
    specLabels: [undefined, undefined, undefined, 'Licens'],
  },
  'nb-moomintroll-fleece-mittens': {
    name: 'Mumintrollet fleecevantar',
    description:
      'Vantar med Mumintrollet i fleece av 100 procent återvunnen polyester, med foder i akryl. De är töjbara, så en storlek passar de flesta, och de är en officiell Muminprodukt.',
    specs: [
      '100 % återvunnen polyester',
      '100 % akryl',
      'En storlek, töjbar, passar de flesta',
      'Officiell Muminprodukt',
    ],
    specLabels: [undefined, 'Foder', undefined, 'Licens'],
  },
  'nb-moomintroll-chunky-beanie': {
    name: 'Mumintrollet fluffig grovstickad mössa, rosa',
    description:
      'En fluffig och grov mössa med Mumintrollet, i rosa och i en vuxenstorlek som passar alla. Materialet är en blandning av polyester, nylon, akryl, ull och elastan, och det är en officiell Muminprodukt.',
    specs: [
      'Polyester, nylon, akryl, ull och elastan',
      'Vuxen, en storlek',
      'Rosa',
      'Officiell Muminprodukt',
    ],
    specLabels: [undefined, undefined, undefined, 'Licens'],
  },
  'sk-nordqvist-tea-calendar': {
    name: 'Nordqvist adventskalender med te, 27 tepåsar',
    description:
      'En kubformad adventskalender med te från Nordqvist, med 25 luckor och 27 tepåsar, eftersom den sista luckan rymmer tre. Påsarna innehåller svart te, grönt te, rooibos och hibiskusblandningar, och bland dem finns julsmaker som pepparkaka, glögg och kanel.',
    specs: [
      '25 luckor, 27 tepåsar. Den sista luckan rymmer 3 påsar',
      'Svart, grönt och rooibos-te, hibiskusblandningar',
      'Nordqvist Oy, Nurmijärvi',
      '6413440000433',
    ],
    specLabels: [undefined, 'Tesorter', 'Marknadsförs av', 'EAN'],
  },
  'sk-nordqvist-moomin-tea-calendar': {
    name: 'Nordqvist Mumin adventskalender med te, 24 påsar, lila',
    description:
      'En lila adventskalender med te och Muminmotiv från Nordqvist, med 24 pyramidtepåsar i 12 smaker, två av varje. Svart och grönt te finns tillsammans med koffeinfri rooibos, och varje smak har ett eget namn, från Olet Ihana (Du är härlig) till Muumimamman Voimajuoma (Muminmammas kraftdryck). Locket öppnas så att kalendern står upprätt, och den är Rainforest Alliance-certifierad.',
    specs: [
      '24 pyramidtepåsar, 12 smaker, 2 av varje',
      '41,5 g',
      'Lila',
      'Rainforest Alliance',
      'Nordqvist Oy, Nurmijärvi',
      '6413440000679',
    ],
    specLabels: [undefined, undefined, undefined, 'Certifiering', 'Marknadsförs av', 'EAN'],
  },
  'sk-nordic-glogg-concentrate': {
    name: 'Poikain Parhaat Nordic glöggkoncentrat 0,5 l',
    description:
      'Ett alkoholfritt (0 %) glöggkoncentrat gjort för hand av finsk svart- och rödvinbärssaft och äkta kryddor, som blandas 1+3. Poikain Parhaat beskriver det som bärrikt och varmt kryddat, en glögg med traditionell smak.',
    specs: [
      '0,5 l',
      '1+3',
      '0 %',
      'Svart- och rödvinbärssaft från Finland',
      'Energi 47,7 kcal / 199,58 kJ, fett 0,2 g varav mättat 0,2 g, kolhydrat 11 g varav sockerarter 11 g, protein 0,3 g, salt 0,2 g',
      'Poikain Parhaat Oy Ltd, Tampere',
    ],
    specLabels: [undefined, 'Blandningsförhållande', 'Alkohol', undefined, 'Näringsvärde per 100 ml', 'Marknadsförs av'],
  },
  'rj-christmas-coffee': {
    name: 'Gran Palomar julkaffe 200 g',
    description:
      'Gran Palomar julkaffe från Cafetoria Roastery, ett ekologiskt och rättvisemärkt kaffe kryddat med ekologisk kanel och kardemumma. Det säljs i förpackning om 200 g.',
    specs: [
      '200 g',
      'Ekologisk kanel och kardemumma',
      'Rättvis handel, ekologiskt',
      'Cafetoria Roastery Oy',
    ],
    specLabels: [undefined, 'Kryddor', 'Certifiering', 'Rosteri'],
  },
  'sk-emendo-santa-sauna-scent': {
    name: 'Emendo Jultomtens officiella bastudoft 500 ml',
    description:
      'Jultomtens officiella bastudoft från Emendo, 500 ml med 100 procent äkta eteriska oljor och utan syntetiska doftämnen. Blanda ungefär ½ dl i en bastuhink med cirka 3 l vatten och använd blandningen som vanligt bastuvatten.',
    specs: [
      '500 ml',
      'Innehåller 100 % eteriska oljor, inga syntetiska doftämnen (parfum)',
      'Cirka ½ dl i en bastuhink med cirka 3 l vatten',
      '©Santa Claus Foundation™',
      '6417892057458',
    ],
    specLabels: [undefined, 'Sammansättning', 'Användning', 'Licens', 'EAN'],
  },
  'sk-emendo-christmas-sauna-set': {
    name: 'Emendo Jouluhetki presentset för bastun',
    description:
      'Jouluhetki, finska för julstund, är ett presentset för bastun från Emendo med en tvål på snöre, en bastudoft och en duschpuff. Det levereras färdigförpackat som present.',
    specs: [
      'Tvål på snöre, bastudoft, duschpuff',
      '6417892041280',
    ],
    specLabels: [undefined, 'EAN'],
  },
  'sk-emendo-gingerbread-glogg-scent': {
    name: 'Emendo bastudofter pepparkaka och glögg, 2 x 10 ml',
    description:
      'Två bastudofter från Emendo, pepparkaka och glögg, 10 ml vardera och gjorda av 100 procent äkta eteriska oljor. Tillsätt 2 till 6 droppar i en skopa vatten och kasta det på stenarna.',
    specs: [
      '2 x 10 ml',
      'Pepparkaka, glögg',
      'Gjorda av 100 % eteriska oljor',
      '2 till 6 droppar i en skopa vatten',
      '6417892021060',
    ],
    specLabels: [undefined, 'Dofter', 'Sammansättning', 'Användning', 'EAN'],
  },
  'sk-aromageddon-gingerbread-scent': {
    name: 'Aromageddon bastudoft Piparipyörre 15 ml',
    description:
      'Aromageddons Piparipyörre, ungefär pepparkaksvirvel, för in en varm och kryddig kaneldoft med en ton av pepparkaka i bastun. Tillsätt 2 till 4 droppar i en skopa vatten och använd den alltid utspädd, häll den aldrig direkt på aggregatet.',
    specs: [
      '15 ml',
      'Kanel med en ton av pepparkaka',
      '2 till 4 droppar i en skopa vatten, alltid utspädd',
      'Aromageddon Oy, Espoo',
    ],
    specLabels: [undefined, 'Doft', 'Användning', 'Marknadsförs av'],
  },
}
