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
  'moomin-blue-love-mug': {
    name: 'Muminmugg Blue Love 0,3 l',
    description:
      'En mugg i vitroporslin på 0,3 liter ur serien Moomin Classics, med Snorkfröken och Mumintrollet i en kram och 80-årsjubileets årtal stämplat i botten. Formgiven i Finland, tål maskindisk och mikro, så den överlever daglig användning i stället för att stå i en hylla.',
    specs: [
      '0,3 l',
      'Vitroporslin',
      'Tål maskindisk, ugn och mikro',
      'Formgiven i Finland, tillverkad i Thailand',
      'Moomin Classics. Jubileumsutgåvan till 80-årsdagen bär årtalet i botten',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Kollektion'],
  },
  'moomin-mystical-forest-tumblers': {
    name: 'Muminglas Mystical Forest 28 cl, 2-pack',
    description:
      'Två reliefpressade glas på 28 cl ur kollektionen Mystical Forest, tillverkade i Iittalas glasbruk i Finland. De kommer i presentförpackning, vilket besparar dig att slå in glas på ett hotellrum.',
    specs: [
      '28 cl per glas',
      '2 glas, levereras i en turkos förpackning',
      'Reliefpressat glas',
      'Tål maskindisk',
      'Tillverkade i Iittalas glasbruk i Finland',
      'Mystical Forest',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, 'Kollektion'],
  },
  'moomin-mystical-forest-wool-throw': {
    name: 'Muminpläd i ull Mystical Forest 130x170 cm',
    description:
      'En pläd på 130 gånger 170 cm i 100 procent ull, formgiven i Finland för kollektionen Mystical Forest. Endast kemtvätt, så räkna med soffpläd snarare än picknickfilt.',
    specs: [
      '100 % ull',
      '130 x 170 cm',
      'Blå',
      'Kemtvätt, skonsam process',
      'Formgiven i Finland, tillverkad i Litauen',
      'Mystical Forest',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, 'Kollektion'],
  },
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
    name: 'Iittala Kivi värmeljushållare 60 mm, tallgrön',
    description:
      'En pressad värmeljushållare i glas av Heikki Orvola, 6 cm hög, som gör ett värmeljus till ett färgblock. Det är det billigaste sättet att äga en bit Iittala och den klarar handbagaget.',
    specs: [
      '6,5 x 6,5 cm, höjd 6 cm',
      'Glas',
      'Grön',
      '0,33 kg brutto',
      'Endast handdisk',
      'Heikki Orvola, Iittala Kivi',
      '636883-01, EAN 6411923683937',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      'Formgivare och kollektion',
      'Artikelnummer och EAN',
    ],
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
  'aarikka-prinsessa-candleholder': {
    name: 'Aarikka Prinsessa ljushållare',
    description:
      'Aarikka har svarvat björkpärlor sedan 1950-talet, och Prinsessa bär en krans av dem runt en hållare på 5,5 cm som tar antingen värmeljus eller kronljus. Liten nog att posta, tydlig nog att kännas igen i Finland.',
    specs: [
      'Höjd 5,5 cm, diameter 6 cm',
      'Björk, lönn, aluminium',
      '98 g',
      'Formgiven i Finland, tillverkad i Italien',
      'Ljushållare med en krans av träpärlor. Passar värmeljus och raka ljus',
      'B08633',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, 'Produktkod'],
  },
  'aarikka-pore-glass-vase': {
    name: 'Aarikka Pore glasvas 16 cm, mörkgrön',
    description:
      'En rund handblåst vas på 1,7 liter med en krans av lönnpärlor som färgas för hand i Finland. Luftbubblorna i glaset hör till, och kransen tas av före disk.',
    specs: [
      'Höjd 16 cm, diameter 16 cm',
      '1,7 l',
      'Glas och lönn',
      'Klar och grön',
      'Glaset tillverkat i Polen, träkransen i Finland',
      'Diska för hand. Ta av träkransen före disk',
      'B08706',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, undefined, 'Produktkod'],
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
    name: 'Marttiini lapsk kniv 255',
    description:
      'Den traditionella lapska kniven, 27 cm totalt, med rostfritt blad, lackat masurbjörkskaft och läderslida. Marttiini tillverkar sina knivar i Rovaniemi, och den här versionen av modellen har fingerskydd.',
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
  'lapuan-kankurit-poro-towel': {
    name: 'Lapuan Kankurit PORO linnehandduk 46 x 70 cm',
    description:
      'En ren ritad av illustratören Matti Pikkujämsä, vävd i väveriet i Lappo av europeisk linnevarp och ekologisk bomullsinslag. Viks platt ner i resväskan, och uppsugningsförmågan kommer först efter några tvättar.',
    specs: [
      '46 x 70 cm',
      '60 % lin, Masters of Linen, och 40 % bomull',
      'Lin-grön',
      'Tillverkad i Finland',
      'Tvätta separat före användning i 60 °C i skonsam process med rikligt med vatten. Centrifugera inte. Undvik sköljmedel och blekmedel. Torktumla inte. Stryk medan den är fuktig. Krympning cirka 5 %',
      'Matti Pikkujämsä',
      '20527',
      'Nyckelflaggan, Masters of Linen',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      'Formgivare',
      'Produktkod',
      'Certifikat',
    ],
  },
  'lapuan-kankurit-kaamos-blanket': {
    name: 'Lapuan Kankurit KAAMOS ullpläd 100 x 150 cm',
    description:
      'Kaamos är polarnatten, och Hanna Galtat hämtade mönstret ur hur dagsljuset rör sig genom dygnet. Inslagsgarnet är ull från finsk lantras som väveriet samlar in från gårdar inom omkring 400 km från Lappo.',
    specs: [
      '100 x 150 cm',
      '100 % ren ny ull',
      'Vit-svart',
      'Tillverkad i Finland',
      'Tvätta bara om den är mycket smutsig, vädra den annars utomhus. Handtvätt i högst 30 °C eller kemtvätt. Gnid inte, sträck inte och vrid inte. Torktumla inte. Stryk med fuktig duk i högst 150 °C',
      'Hanna Galtat',
      '102939',
      'Nyckelflaggan',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      'Formgivare',
      'Produktkod',
      'Certifikat',
    ],
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
    name: 'Fazer Geisha chokladkaka med hasselnötsnougat 121 g',
    description:
      'Mjölkchoklad över en spröd hasselnötsnougatfyllning, den kaka de flesta finska hushåll har i en låda. Fazer uppger att den är tillverkad utan palmolja.',
    specs: [
      '121 g',
      'Mjölkchoklad med minst 30 % kakao, hasselnötsnougatfyllning med 11 % hasselnötter',
      'Energi 550 kcal / 2302 kJ, fett 35 g, mättat 17 g, kolhydrat 51 g, sockerarter 49 g, protein 8 g, salt 0,19 g',
    ],
    specLabels: [undefined, undefined, 'Näringsvärde per 100 g'],
  },
  'nordqvist-moomin-forest-berry-tea': {
    name: 'Nordqvist Mumin skogsbär- och hibiskuste, 20 påsar',
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
  'moomin-wild-blueberry-coffee': {
    name: 'Mumintrollet Wild Blueberry kaffe 250 g',
    description:
      'Blåbärssmaksatt kaffe från Bergstrands Kafferosteri, byggt på pärlbönor mognade på Mogianahöjderna i södra Brasilien. En pärlböna är ett kaffekörsbär som fick en böna i stället för två, vilket rosteriet säger koncentrerar smaken. 250 gram.',
    specs: [
      '250 g',
      'Bönor från Mogianahöjderna i södra Brasilien, rostade av Bergstrands Kafferosteri',
      'Pärlböna, ett kaffekörsbär med en enda böna i stället för två',
      'Vilda blåbär',
    ],
    specLabels: [undefined, undefined, 'Böna', 'Smak'],
  },
  'moomin-lingonberry-blueberry-dark-chocolate': {
    name: 'Mumintrollet mörk choklad med lingon och blåbär 70 g',
    description:
      'Ekologisk mörk choklad med 70 procent kakao från Kalmar Chokladfabrik med frystorkade lingon och blåbär, insvept i Tove Janssons teckningar. Kakaon är Criollo och Trinitario från Peru och kakan tillverkas i Sverige.',
    specs: [
      '70 g',
      'Mörk choklad, 70 % kakao',
      'Kakaobönor Criollo och Trinitario från Peru, tillverkad i Sverige',
      'Ekologisk',
    ],
    specLabels: [undefined, undefined, undefined, 'Kost'],
  },
  'moomin-berry-picking-tea': {
    name: 'Mumin Berry Picking te, 20 påsar',
    description:
      'Svart te med smak av vanilj och röda bär, blandat i fabriken i Nurmijärvi i Finland och försett med den finska Nyckelflaggan. Teet är ett samarbete med Finlands Röda Kors: 0,40 euro av varje såld förpackning går till Röda Korsets arbete med barn, unga och ensamma.',
    specs: [
      '20 x 1,75 g, 35 g',
      'Tillverkat i fabriken i Nurmijärvi i Finland',
      'Rainforest Alliance-certifierat te, finska Nyckelflaggan',
      'Veganskt',
    ],
    specLabels: [undefined, undefined, 'Certifiering', 'Kost'],
  },
  'arctic-power-berries-blueberry-powder': {
    name: 'Vilt blåbärspulver 70 g',
    description:
      'Frystorkade vilda blåbär, inget tillsatt. Producenten uppger att ungefär 700 gram färska bär går åt till en burk på 70 gram. Den här butiken prissätter i brittiska pund.',
    specs: [
      '70 g',
      '100 % blåbärspulver av vilda nordiska blåbär. Inget tillsatt',
      'Cirka 700 g färska bär ger 70 g bärpulver',
      'Energi 367 kcal / 1559 kJ, protein 5 g, kolhydrat 54 g varav sockerarter 34 g, fiber 31 g, fett 0,8 g, salt 0,01 g',
    ],
    specLabels: [undefined, undefined, 'Åtgång av bär', 'Näringsvärde per 100 g'],
  },
  'arctic-power-berries-sea-buckthorn-powder': {
    name: 'Havtornspulver 70 g',
    description:
      'Frystorkad nordisk havtorn, 70 gram, inget tillsatt. Syrlig och klart orange, så en tesked räcker längre i gröten än man tror. Den här butiken prissätter i brittiska pund.',
    specs: [
      '70 g',
      '100 % havtornspulver av nordiska havtornsbär. Inget tillsatt',
      'Cirka 700 g färska bär ger 70 g bärpulver',
      'Energi 489 kcal / 2045 kJ, protein 13 g, kolhydrat 24 g varav sockerarter 14 g, fiber 28 g, fett 25 g, salt 0,06 g',
    ],
    specLabels: [undefined, undefined, 'Åtgång av bär', 'Näringsvärde per 100 g'],
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
      '40 g, brutto 0,046 kg',
      '3 x 11 x 17 cm',
      'Frystorkat granskott',
      'Finland',
      '1 till 3 teskedar per dag',
      'Energi 1683 kJ / 402 kcal, protein 12,1 g, kolhydrat 77,8 g, fett 4,19 g. C-vitamin 382 mg, A-vitamin 970 µg, K1-vitamin 332 mg, kalium 1200 mg, fosfor 350 mg, kalcium 130 mg, magnesium 120 mg, zink 3,6 mg, järn 2 mg',
      'Skördat med licens i ekologiska skogar som ägs av finska Forststyrelsen, vartannat år per skog',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      undefined,
      'Dosering',
      'Näringsvärde per 100 g',
      'Skörd',
    ],
  },
  'arctic-warriors-nettle-powder': {
    name: 'Arctic Warriors nässelpulver 150 g',
    description:
      'Nässla odlad på ekologiska gårdar i Lappland, frystorkad till ett pulver neutralt nog att röras ner i soppa eller bröd utan att bråka med resten av rätten. 22 000 mg kalcium per 100 g.',
    specs: [
      '150 g, brutto 0,162 kg',
      '4 x 16 x 23 cm',
      'Frystorkad nässla',
      'Finland, odlad på ekologiska gårdar i Lappland',
      '1 till 5 teskedar per dag',
      'Energi 1484 kJ / 354 kcal, protein 23,6 g, kolhydrat 56 g, fett 3,44 g, salt under 5 mg. A-vitamin 1900 µg, kalcium 22000 mg, magnesium 5300 mg, järn 68 mg',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Dosering', 'Näringsvärde per 100 g'],
  },
  'arctic-warriors-roseroot-elixir': {
    name: 'Arctic Warriors rosenrotselixir 100 ml',
    description:
      'Rosenrot växer på fuktiga bäckstränder och klippväggar på Lapplands fjäll, och Arctic Warriors extraherar den i vegetabiliskt glycerol tillsammans med nässla. En tesked går i te, gröt eller yoghurt.',
    specs: [
      '100 ml, brutto 0,270 kg',
      '4,5 x 4,5 x 13 cm',
      'Vegetabiliskt glycerol, nässla, rosenrot',
      'Finland',
      '1 till 2 teskedar per dag',
      'Mjölkfri, glutenfri, vegansk. Det vegetabiliska glycerolet påverkar inte blodsockret',
      'Ett kosttillskott ersätter inte en varierad kost. Förvaras utom räckhåll för barn och överskrid inte angiven dos',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Dosering', 'Kost', 'Observera'],
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
    name: 'Arabia Muminmugg, Snusmumriken',
    description:
      'Arabia har tryckt Tove Janssons teckningar på de här muggarna sedan 1990, och samlare håller reda på de utgångna motiven efter årtal. Snusmumriken är den som ger sig av på hösten och kommer tillbaka på våren.',
    specs: ['0,3 l', 'Tove Jansson'],
    specLabels: [undefined, 'Illustration'],
  },
  'arabia-moomin-mug-friendship': {
    name: 'Arabia Muminmugg, Friendship',
    description:
      'Muggen visar Ninni, det osynliga barnet som är rädd för mörkret och långsamt blir synligt igen när någon är vänlig mot henne. Ett tystare val än de välkända figurerna.',
    specs: ['0,3 l', 'Tove Jansson'],
    specLabels: [undefined, 'Illustration'],
  },
  'arabia-moomin-figurine-moomintroll': {
    name: 'Arabia Mumin minifigur, Mumintrollet',
    description:
      'En handgjord keramikfigur ritad av Tuulikki Pietilä på 1990-talet och såld i egen ask. Liten nog att resa hem i en rockficka.',
    specs: ['Tuulikki Pietilä, 1990-talet', 'Handgjord keramik, säljs i egen ask'],
    specLabels: ['Formgivare', 'Tillverkning'],
  },
  'fiskars-moominpappa-scissors': {
    name: 'Fiskars Muminpappa universalsax',
    description:
      'Fiskars saxar med orange handtag ligger i fler finska köksbord än något annat redskap. Den här är 21 cm i rostfritt stål med Muminpappa på handtaget.',
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
    name: 'Halti HeatGrid mellanlagerjacka, herr',
    description:
      'Vaffelstickning som fångar luft utan att bygga volym under ett skal. Det här är lagret mellan merinon och parkasen, och att hoppa över det är anledningen till att folk kommer tillbaka frusna.',
    specs: [
      'Vaffelstickning på insidan 95 % återvunnen polyester / 5 % elastan; jerseystickning 92 % återvunnen polyester / 8 % elastan',
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
  'foodin-six-mushroom-blend': {
    name: 'Foodin Sexsvampsblandning 100 g',
    description:
      'Chaga, reishi, lion\'s mane, cordyceps, shiitake och maitake i samma burk, malda för kaffe eller smoothies. En burk täcker hela svamphyllan.',
    specs: ['100 g', 'Chaga, reishi, lion\'s mane, cordyceps, shiitake, maitake'],
  },
  'foodin-nordic-berry-powder': {
    name: 'Foodin Nordiska bär pulverblandning 120 g',
    description:
      'En finsk blandning av nordiska bär som ett enda pulver, för gröt och yoghurt. Det lättaste sättet att ta med en nordisk bärsommar hem.',
    specs: ['120 g', 'Tillverkad i Finland'],
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
}
