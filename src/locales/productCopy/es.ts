import type { ProductCopyMap } from './index'

/**
 * Tuotteiden espanjankieliset tekstit. Rakenne ja säännöt: ks. de.ts.
 *
 * `specs` on positionaalinen: indeksi vastaa `product.details.specs`-taulukon
 * järjestystä lähdedatassa. `specLabels` samoin, ja siinä on arvo vain niillä
 * riveillä joilla on oma otsikko (`key: 'other'`).
 *
 * Lukuja, mittayksiköitä, tuotekoodeja ja EAN-numeroita ei käännetä eikä
 * muunneta. Numerofragmentit kopioidaan lähteestä sellaisinaan, myös
 * välilyöntien osalta; vain desimaalierotin vaihtuu pilkuksi.
 */
export const PRODUCT_COPY_ES: ProductCopyMap = {
  'moomin-mystical-forest-wool-throw': {
    name: 'Manta de lana Moomin Mystical Forest 130x170 cm',
    description:
      'Una manta de 130 por 170 cm en 100 por ciento lana, diseñada en Finlandia para la colección Mystical Forest. Solo limpieza en seco, así que tómala como manta de sofá y no como mantel de pícnic.',
    specs: [
      '100 % lana',
      '130 x 170 cm',
      'Azul',
      'Limpieza en seco, proceso suave',
      'Diseñada en Finlandia, fabricada en Lituania',
      'Mystical Forest',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, 'Colección'],
  },
  'iittala-aalto-vase-160': {
    name: 'Jarrón Iittala Alvar Aalto 160 mm, transparente',
    description:
      'Alvar Aalto dibujó esta onda en 1936 e Iittala la sigue soplando a boca, así que el contorno de cada pieza cambia un poco. El tamaño de 160 mm es el que la gente imagina cuando oye el nombre.',
    specs: [
      'Altura 16 cm, anchura 20,5 cm',
      'Vidrio',
      'Transparente',
      '1,44 kg bruto',
      'Solo lavado a mano',
      'Vidrio soplado a boca, forma asimétrica',
      'Alvar Aalto, Iittala Alvar Aalto Collection',
      '999-01, EAN 6411920004445',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      'Fabricación',
      'Diseñador y colección',
      'Referencia y EAN',
    ],
  },
  'iittala-kivi-candleholder': {
    name: 'Portavelas Iittala Kivi 60 mm, verde pino',
    description:
      'Un portavelas de vidrio prensado de Heikki Orvola, de 6 cm de alto, que convierte una vela de té en un bloque de color. Es la forma más barata de tener una pieza de Iittala y sobrevive al equipaje de mano.',
    specs: [
      '6,5 x 6,5 cm, altura 6 cm',
      'Vidrio',
      'Verde',
      '0,33 kg bruto',
      'Solo lavado a mano',
      'Heikki Orvola, Iittala Kivi',
      '636883-01, EAN 6411923683937',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      'Diseñador y colección',
      'Referencia y EAN',
    ],
  },
  'marimekko-unikko-mug': {
    name: 'Taza Marimekko Unikko 25 cl',
    description:
      'Maija Isola dibujó la amapola Unikko en 1964, después de que Marimekko prohibiera los estampados florales, y el patrón sobrevivió a la prohibición. Esta taza de gres tiene 25 cl y lleva el estampado a la mesa del desayuno en lugar de a la pared.',
    specs: [
      '25 cl',
      'Diámetro 8 cm, altura 9,5 cm',
      'Gres',
      'Blanco, verde oscuro, beige y arena claro',
      '0,276 kg bruto',
      'Estampado de Maija Isola, taza de Sami Ruotsalainen',
      '666236-01, EAN 6411255152033',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      'Diseñadores',
      'Referencia y EAN',
    ],
  },
  'aarikka-prinsessa-candleholder': {
    name: 'Portavelas Aarikka Prinsessa',
    description:
      'Aarikka tornea cuentas de abedul desde los años cincuenta, y Prinsessa lleva una corona de ellas alrededor de un soporte de 5,5 cm que acepta una vela de té o una vela recta. Lo bastante pequeño para enviarlo por correo y lo bastante reconocible en Finlandia.',
    specs: [
      'Altura 5,5 cm, diámetro 6 cm',
      'Abedul, arce, aluminio',
      '98 g',
      'Diseñado en Finlandia, fabricado en Italia',
      'Portavelas con una corona de cuentas de madera. Sirve para velas de té y velas rectas',
      'B08633',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, 'Código de producto'],
  },
  'aarikka-pore-glass-vase': {
    name: 'Jarrón de vidrio Aarikka Pore 16 cm, verde oscuro',
    description:
      'Un jarrón redondo soplado a mano, de 1,7 litros, con una corona de cuentas de arce teñidas a mano en Finlandia. Las burbujas de aire del vidrio forman parte de la pieza, y la corona se quita antes de lavarlo.',
    specs: [
      'Altura 16 cm, diámetro 16 cm',
      '1,7 l',
      'Vidrio y arce',
      'Transparente y verde',
      'Vidrio fabricado en Polonia, corona de madera fabricada en Finlandia',
      'Lavar a mano. Quitar la corona de madera antes de lavarlo',
      'B08706',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, undefined, 'Código de producto'],
  },
  'halti-tokoi-dx-jacket': {
    name: 'Chaqueta shell Halti Tokoi DX, hombre',
    description:
      'Una shell resistente al tiempo con todas las costuras selladas, forro ligero y capucha ajustable, con un corte lo bastante holgado para llevar un jersey de lana debajo. Halti envía solo dentro de la Unión Europea.',
    specs: [
      'DrymaxX Sleek Twill, un tejido de 2 capas impermeable y cortavientos con membrana DrymaxX. Composición 50 % poliéster reciclado y 50 % poliéster',
      'Forro suave de poliéster, 100 % poliéster reciclado',
      '10000 mm',
      '10000 g/m²/24 h',
      '0,9 kg',
      'S, M, L, XL, XXL, XXXL',
      'Fossil Beige, Four Leaf Clover Green, Black',
      'Todas las costuras selladas, capucha fija ajustable, cuello alto, cremallera frontal de 2 sentidos, ventilación de malla, bolsillos con cremallera, bolsillo interior con botón automático, puños ajustables, tapeta cortavientos, detalles reflectantes',
      'Lavar del revés con colores similares y cerrar antes las cremalleras. Máximo 30 °C, proceso suave. No usar lejía, no secar en secadora, no planchar ni limpiar en seco',
    ],
    specLabels: [
      undefined,
      'Forro',
      'Impermeabilidad',
      'Transpirabilidad',
      undefined,
      undefined,
      undefined,
      'Características',
      undefined,
    ],
  },
  'makia-merino-beanie': {
    name: 'Gorro Makia Merino',
    description:
      'Un gorro nórdico sencillo de lana merina, que equilibra temperatura y humedad cuando sales de un café caliente directo al frío. Sin un logotipo del tamaño de un puño en la parte delantera.',
    specs: [
      '100 % lana merina, punto inglés galga 8, libre de mulesing',
      'Talla única',
      'Dark Brown',
      'Fabricado en Finlandia, material fabricado en Italia',
      'Lavar con colores similares en ciclo suave, secar en plano y darle forma. Airearlo basta a menudo en lugar de lavarlo. Pueden aparecer bolitas con el uso',
    ],
  },
  'makia-aurora-hoodie': {
    name: 'Sudadera con capucha Makia Aurora',
    description:
      'Una sudadera con capucha de corte regular en 100 por ciento algodón orgánico de la marca helsinquina Makia. Lo bastante gruesa para llevarla como capa exterior en interiores y en tardes suaves de otoño.',
    specs: [
      '100 % algodón orgánico, felpa french terry de 370 g',
      'S, M, L, XL, XXL',
      'Carbon Black',
      'Corte regular, cordones en la capucha, bolsillo canguro, puño elástico en bajo y mangas, etiquetas tejidas de poliéster reciclado',
      'Fabricada en Turquía, material fabricado en Turquía',
      'Lavar del revés con colores similares. No planchar sobre el estampado. Encogimiento máximo 5 %. Dar forma mientras está húmeda',
    ],
    specLabels: [undefined, undefined, undefined, 'Corte y detalles', undefined, undefined],
  },
  'halti-kroka-mitten': {
    name: 'Manopla Halti Kroka II',
    description:
      'Una manopla cortavientos con 60 g de aislamiento y palma con agarre de silicona, de corte unisex. Las manoplas ganan a los guantes cuando aprieta el viento, porque los dedos se calientan entre sí.',
    specs: [
      'Softshell Stormwall, 50 % poliéster y 50 % poliéster reciclado. Forro polar suave 100 % poliéster. Puños de punto de lycra',
      'Microtherm Dynamic 60 g, forro Active Dry soft touch, 100 % poliéster reciclado',
      '0,1 kg',
      '06, 07, 08, 09, 10, 11, 12',
      'Negro',
      'Lavar por separado a 30 °C en ciclo suave. No usar lejía, no secar en secadora, no planchar ni limpiar en seco',
      '084-0757',
    ],
    specLabels: [
      undefined,
      'Aislamiento y forro',
      undefined,
      undefined,
      undefined,
      undefined,
      'Referencia',
    ],
  },
  'halti-tunturit-ski-socks': {
    name: 'Calcetines de esquí Halti Tunturit',
    description:
      'Calcetines altos hasta la rodilla en mezcla de merino con acolchado en la espinilla y el tobillo, las zonas donde aprieta la bota de esquí. Halti indica que están fabricados en Europa.',
    specs: [
      'Mezcla de lana merina: 36 % poliamida, 23 % acrílico, 23 % lana merina, 16 % polipropileno, 2 % elastano',
      '0,1 kg',
      '34-36, 37-39, 40-42, 43-45, 46-48',
      'Sargasso Sea Blue, Lemon Pepper Beige',
      'Fabricados en Europa',
      'Acolchado en espinilla y tobillo, largo hasta la rodilla, talón y puntera reforzados, zonas de ventilación en la espinilla y el empeine',
      'Máximo 40 °C, proceso normal. No planchar, no usar lejía, no limpiar en seco ni secar en secadora',
      '087-0471',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      'Características',
      undefined,
      'Referencia',
    ],
  },
  'north-outdoor-huuru-beanie': {
    name: 'Gorro de merino North Outdoor Huuru',
    description:
      'North Outdoor teje este gorro de canalé en su propia fábrica de Oulu con 100 por ciento merino libre de mulesing, de 18,5 micras. Tejido con la forma final en lugar de cortado, así que apenas queda recorte.',
    specs: [
      '100 % lana merina, libre de mulesing, 18,5 micras, tejido 270 g/m²',
      'Talla única',
      'Azul índigo',
      'Fabricado en Oulu, Finlandia',
      'Airéalo con regularidad y lávalo solo cuando haga falta. Detergente para lana, ciclo suave a 30 °C con el centrifugado más bajo, del revés',
      'OEKO-TEX, Woolmark',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, 'Certificados'],
  },
  'north-outdoor-pyry-scarf': {
    name: 'Bufanda de merino North Outdoor Pyry',
    description:
      'Una bufanda ancha y larga en punto inglés, 100 por ciento merino, tejida en Oulu. Lo bastante larga para enrollarla de varias formas, lo que importa cuando el viento cambia de dirección en una montaña despejada.',
    specs: [
      '100 % lana merina, 18,5 micras, canalé 1/1',
      'Talla única',
      'Gris avena',
      'Fabricada en Oulu, Finlandia',
      'Airéala con regularidad y lávala solo cuando haga falta. Detergente para lana, ciclo suave a 30 °C con el centrifugado más bajo, del revés',
      'OEKO-TEX, Woolmark',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, 'Certificados'],
  },
  'north-outdoor-honka-jumper': {
    name: 'Jersey de merino North Outdoor Honka, hombre',
    description:
      'Un jersey grueso en punto inglés, 100 por ciento merino, de corte relajado y hombro caído. Pesado a la vista, ligero al llevarlo, y tejido en la fábrica de Oulu.',
    specs: [
      '100 % lana merina, libre de mulesing, 18,5 micras, canalé variable',
      'S, M, L, XL, 2XL, 3XL',
      'Azul índigo',
      'Fabricado en Oulu, Finlandia',
      'Airéalo con regularidad y lávalo solo cuando haga falta. Detergente para lana, ciclo suave a 30 °C con el centrifugado más bajo, del revés',
      'OEKO-TEX, Woolmark',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, 'Certificados'],
  },
  'marttiini-lapinleuku-255': {
    name: 'Cuchillo lapón Marttiini 255',
    description:
      'El cuchillo lapón tradicional, 27 cm en total, con hoja inoxidable, mango de abedul rizado barnizado y funda de cuero. Marttiini fabrica sus cuchillos en Rovaniemi, y esta versión del modelo lleva guardamanos.',
    specs: [
      '16 cm',
      'Longitud total 27 cm',
      'Hoja de acero inoxidable, mango de abedul rizado barnizado, funda de cuero',
      'Cuchillo y funda de cuero con cierre a presión',
      '255010',
    ],
    specLabels: ['Longitud de hoja', undefined, undefined, undefined, 'Referencia'],
  },
  'marttiini-napapiirin-puukko': {
    name: 'Cuchillo Marttiini Círculo Polar',
    description:
      'Un cuchillo pequeño de diario, 20 cm en total, con hoja de acero al carbono, mango de abedul encerado y funda de cuero marrón. El acero al carbono coge más filo que el inoxidable pero necesita aceite, algo que Marttiini también recuerda en su ficha de producto.',
    specs: [
      '9 cm',
      'Longitud total 20 cm',
      'Hoja de acero al carbono, mango de abedul encerado, funda de cuero marrón',
      'Seca siempre bien la hoja después de usarla y engrásala con regularidad con aceite sin sal',
      '121019',
    ],
    specLabels: ['Longitud de hoja', undefined, undefined, undefined, 'Referencia'],
  },
  'marttiini-ilves-131': {
    name: 'Marttiini Lince 131',
    description:
      'Un cuchillo de 22 cm con hoja inoxidable, mango de abedul rizado barnizado y funda de cuero marrón. Marttiini indica que el modelo Lince lo dibujó su fundador Janne Marttiini en los años treinta.',
    specs: [
      '11 cm',
      'Longitud total 22 cm',
      'Hoja de acero inoxidable, mango de abedul rizado barnizado, funda de cuero marrón',
      '131010',
    ],
    specLabels: ['Longitud de hoja', undefined, undefined, 'Referencia'],
  },
  'kupilka-classic-cup-21': {
    name: 'Taza de campamento Kupilka 21, 2,1 dl',
    description:
      'La forma del kuksa en un material que puedes meter en el lavavajillas: mitad fibra de celulosa de pino, mitad termoplástico, moldeado en Finlandia. Tiene 2,1 dl, pesa 83 gramos y no te quema los dedos junto al fuego.',
    specs: [
      '2,1 dl',
      '83 g',
      '60 x 93 x 165 mm',
      'Compuesto de fibra natural Kareline, 50 % fibra de celulosa de pino y 50 % termoplástico, fabricado con energía ecológica',
      'Finlandia',
      'Enjuágala en la ruta como un kuksa de madera, en casa va al lavavajillas. No apta para microondas',
      '3021011XX',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, undefined, 'Número de modelo'],
  },
  'kupilka-bowl-55': {
    name: 'Cuenco de campamento Kupilka 55, 5,5 dl',
    description:
      'Un cuenco de 5,5 dl con un asa lo bastante firme para sujetarlo con una mano mientras la otra sostiene la taza. El mismo compuesto finlandés de fibra de pino que la taza, 184 gramos, apto para lavavajillas.',
    specs: [
      '5,5 dl',
      '184 g',
      '54 x 154 x 223 mm',
      'Compuesto de fibra natural Kareline, 50 % fibra de celulosa de pino y 50 % termoplástico, fabricado con energía ecológica',
      'Finlandia',
      'Apto para lavavajillas. No apto para microondas. Aprobado para contacto con alimentos calientes y fríos',
      '3055013X',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, undefined, 'Número de modelo'],
  },
  'kupilka-cutlery-set': {
    name: 'Juego de cubiertos Kupilka',
    description:
      'Cuchara, cuchillo y tenedor en el mismo compuesto finlandés de fibra de madera, 56 gramos el juego. La forma más barata de llevarte a casa el material de Kupilka y la más fácil de meter en el equipaje de mano.',
    specs: [
      'Cuchara, cuchillo y tenedor',
      '56 g',
      'Compuesto de fibra natural Kareline, 50 % fibra de celulosa de pino y 50 % termoplástico, fabricado con energía ecológica',
      'Finlandia',
      'Enjuágalos en la ruta como cubiertos de madera, en casa van al lavavajillas. No aptos para microondas',
      '3025025X',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, 'Número de modelo'],
  },
  'lapuan-kankurit-poro-towel': {
    name: 'Toalla de lino Lapuan Kankurit PORO 46 x 70 cm',
    description:
      'Un reno dibujado por el ilustrador Matti Pikkujämsä, tejido en el taller de Lapua con urdimbre de lino europeo y trama de algodón orgánico. Se dobla plana en la maleta, y la capacidad de absorción solo llega después de unos lavados.',
    specs: [
      '46 x 70 cm',
      '60 % lino, Masters of Linen, y 40 % algodón',
      'Lino y verde',
      'Fabricada en Finlandia',
      'Lavar por separado antes del primer uso a 60 °C en ciclo suave con abundante agua. No centrifugar. Evitar suavizante y lejía. No secar en secadora. Planchar aún húmeda. Encogimiento aprox. 5 %',
      'Matti Pikkujämsä',
      '20527',
      'Bandera Llave finlandesa, Masters of Linen',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      'Diseñador',
      'Código de producto',
      'Certificados',
    ],
  },
  'lapuan-kankurit-kaamos-blanket': {
    name: 'Manta de lana Lapuan Kankurit KAAMOS 100 x 150 cm',
    description:
      'Kaamos es la noche polar, y Hanna Galtat sacó el patrón de cómo se mueve la luz del día a lo largo de la jornada. El hilo de trama es lana de oveja finlandesa que el taller recoge en granjas situadas a unos 400 km de Lapua.',
    specs: [
      '100 x 150 cm',
      '100 % lana virgen pura',
      'Blanco y negro',
      'Fabricada en Finlandia',
      'Lávala solo si está muy sucia, si no airéala al aire libre. Lavado a mano a 30 °C máximo o limpieza en seco. No frotar, estirar ni retorcer. No secar en secadora. Planchar con un paño húmedo a 150 °C máximo',
      'Hanna Galtat',
      '102939',
      'Bandera Llave finlandesa',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      'Diseñadora',
      'Código de producto',
      'Certificado',
    ],
  },
  'pentik-posio-mug': {
    name: 'Taza Pentik Posio 0,3 l',
    description:
      'Pentik cuece esta taza en Posio, que la empresa llama la fábrica de cerámica más septentrional del mundo, y toda la gama Posio está decorada con renos. Apta para lavavajillas, horno, microondas y congelador.',
    specs: [
      '0,3 l',
      'Rojo',
      'Fabricada en Posio, en Laponia, a la que Pentik llama la fábrica de cerámica más septentrional del mundo',
      'Apta para lavavajillas, horno eléctrico, horno de cocción, microondas y congelador',
      'Posio. Cada pieza de la gama está decorada con renos',
      '12JAO050P41',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Colección', 'Código de producto'],
  },
  'pentik-tunturiretki-studio-dish': {
    name: 'Fuente triangular honda Pentik Tunturiretki Winter Studio 19 cm',
    description:
      'Anu Pentik pintó los renos que reaparecen entre los árboles en una caminata por la montaña. Las piezas Studio se pintan a mano en Posio, así que no hay dos fuentes con exactamente las mismas pinceladas.',
    specs: [
      'Diámetro 19 cm',
      'Azul',
      'Hecha a mano en Posio, en Laponia, diseñada por Anu Pentik',
      'Apta para lavavajillas, horno eléctrico, horno de cocción, microondas y congelador',
      'Pentik Studio, la gama pintada a mano',
      '12ST353TT61',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Colección', 'Código de producto'],
  },
  'kuivalihakundi-poro-jerky': {
    name: 'Cecina de reno Original 2 x 20 g',
    description:
      'Dos bolsas de 20 gramos de cecina de reno hecha con 100 por ciento reno finlandés, secada al horno y marinada con salsa de soja sin gluten, pimienta negra, ajo y jarabe de azúcar. La carne no puede enviarse fuera de la Unión Europea, así que la entrega se detiene en la frontera europea.',
    specs: [
      '2 x 20 g',
      'Carne de Finlandia',
      'Las fechas corren aproximadamente un año desde el día en que se secó y envasó la carne. No necesita frío, tampoco después de abrirla',
      'Muy salada. Sin gluten',
      'Energía 1514 kJ / 360 kcal, grasas 14,2 g de las cuales saturadas 6,2 g, hidratos de carbono 7,9 g de los cuales azúcares 5,1 g, proteínas 50,2 g, sal 9,5 g',
    ],
    specLabels: [undefined, undefined, undefined, 'Indicaciones de la etiqueta', 'Información nutricional por 100 g'],
  },
  'finnish-flavours-palalaku-salmiakki': {
    name: 'Finnish Flavours Premium Palalaku salmiakki 150 g',
    description:
      'Una bolsa de 150 gramos de regaliz salmiakki blando, el del cloruro de amonio que divide a los visitantes en dos bandos al primer trozo. Suomikauppa envía alimentos mucho más allá de Finlandia.',
    specs: [
      '150 g',
      'Energía 1316 kJ / 311 kcal, grasas 0,5 g de las cuales saturadas 0 g, hidratos de carbono 72 g de los cuales azúcares 50 g, proteínas 4,1 g, sal 1,7 g',
      'Finnish Flavours, Kumitehtaankatu 5, 04260 Kerava',
    ],
    specLabels: [undefined, 'Información nutricional por 100 g', 'Comercializado por'],
  },
  'meritalo-tyrnihillo': {
    name: 'Mermelada finlandesa de espino amarillo Meritalo 310 g',
    description:
      'Mermelada de espino amarillo con 37 gramos de bayas por cada 100 gramos, cocida con espino amarillo finlandés en la granja familiar Meritalo de Salo, en el suroeste de Finlandia y no en Laponia. El espino amarillo es ácido más que dulce, así que cunde más junto a un queso que sobre una crepe.',
    specs: [
      '310 g',
      'Las bayas son finlandesas. Elaborada por una empresa familiar en la granja Meritalo de Salo, en el suroeste de Finlandia',
      'Energía 781 kJ / 187 kcal, grasas 1,9 g de las cuales saturadas 0,3 g, hidratos de carbono 41 g de los cuales azúcares 41 g, proteínas 0,3 g, sal 0,01 g',
      'Marjajaloste Meritalo Oy, 25610 Ylönkylä',
    ],
    specLabels: [undefined, undefined, 'Información nutricional por 100 g', 'Comercializado por'],
  },
  'kuivalihakundi-poro-jerky-200g': {
    name: 'Cecina de reno Original 200 g',
    description:
      'El formato de regalo de la misma cecina de reno, 200 gramos. El productor indica que un kilo de carne seca sale de tres kilos de carne fresca, y ahí está la mayor parte de la explicación del precio de una bolsa.',
    specs: [
      '200 g',
      '100 % carne de reno, tapa, secada al horno y marinada',
      '1 kg de carne seca requiere 3 kg de carne fresca',
      'Las fechas corren aproximadamente un año desde el día en que se secó y envasó la carne. No necesita frío, tampoco después de abrirla',
    ],
    specLabels: [undefined, undefined, 'Carne empleada', undefined],
  },
  'kuivalihakundi-beef-jerky-smoked': {
    name: 'Cecina de vacuno Smoked 40 g',
    description:
      'Vacuno en lugar de reno, realmente ahumada y no solo aromatizada, 57 gramos de proteína por cada 100. Lo más barato de esta categoría y lo que sobrevive a una mochila.',
    specs: [
      '40 g',
      'Vacuno criado y sacrificado en la Unión Europea',
      '1 kg de carne seca requiere 2,5 kg de vacuno fresco',
      'Energía 1261 kJ / 298 kcal, grasas 5,5 g de las cuales saturadas 2,4 g, hidratos de carbono 5,2 g de los cuales azúcares 4,4 g, proteínas 56,9 g, sal 5 g',
    ],
    specLabels: [undefined, undefined, 'Carne empleada', 'Información nutricional por 100 g'],
  },
  'fazer-geisha-chocolate-bar': {
    name: 'Tableta Fazer Geisha de turrón de avellana 121 g',
    description:
      'Chocolate con leche sobre un relleno crujiente de turrón de avellana, la tableta que la mayoría de los hogares finlandeses guarda en un cajón. Fazer indica que está hecha sin aceite de palma.',
    specs: [
      '121 g',
      'Chocolate con leche con al menos 30 % de cacao, relleno de turrón de avellana con 11 % de avellanas',
      'Energía 550 kcal / 2302 kJ, grasas 35 g, saturadas 17 g, hidratos de carbono 51 g, azúcares 49 g, proteínas 8 g, sal 0,19 g',
    ],
    specLabels: [undefined, undefined, 'Información nutricional por 100 g'],
  },
  'nordqvist-moomin-forest-berry-tea': {
    name: 'Infusión Nordqvist Moomin de hibisco y bayas del bosque, 20 bolsitas',
    description:
      'Hibisco ecológico con manzana y bayas del bosque, naturalmente sin cafeína, mezclado en la fábrica de Nordqvist en Nurmijärvi. Veinte bolsitas pesan 35 gramos, el regalo más ligero de esta tienda.',
    specs: [
      '20 x 1,75 g, 35 g',
      'Mezclada en la fábrica de Nordqvist en Nurmijärvi, Finlandia',
      '95 °C durante 2 a 4 minutos. En agua fría, de 5 a 10 minutos',
      'Certificada ecológica, vegana, sin gluten, naturalmente sin cafeína',
    ],
    specLabels: [undefined, undefined, 'Preparación', 'Dieta'],
  },
  'nordqvist-cranberry-toffee-tea': {
    name: 'Infusión Nordqvist de arándano rojo y toffee salado, 20 bolsitas',
    description:
      'Arándano rojo ácido frente a toffee salado sobre una base de hibisco y rooibos, así que no tiene cafeína y aun así sabe a algo por la noche. Nordqvist mezcla té en Finlandia desde 1883.',
    specs: [
      '20 x 1,75 g, 35 g',
      '95 °C durante 2 a 5 minutos',
      'Vegana. El hibisco y el rooibos tienen certificación Rainforest Alliance',
    ],
    specLabels: [undefined, 'Preparación', 'Dieta y certificación'],
  },
  'moomin-wild-blueberry-coffee': {
    name: 'Café Moomin Wild Blueberry 250 g',
    description:
      'Café con aroma de arándano de Bergstrands Kafferosteri, montado sobre granos caracolillo madurados en las colinas de Mogiana, en el sur de Brasil. Un caracolillo es una cereza de café que formó un solo grano en lugar de dos, algo que según el tostador concentra el sabor. 250 gramos.',
    specs: [
      '250 g',
      'Granos de las colinas de Mogiana, en el sur de Brasil, tostados por Bergstrands Kafferosteri',
      'Caracolillo, una cereza de café con un solo grano en lugar de dos',
      'Arándano silvestre',
    ],
    specLabels: [undefined, undefined, 'Grano', 'Sabor'],
  },
  'moomin-lingonberry-blueberry-dark-chocolate': {
    name: 'Chocolate negro Moomin con arándano rojo y arándano 70 g',
    description:
      'Chocolate negro ecológico con 70 por ciento de cacao de Kalmar Chokladfabrik con arándanos rojos y arándanos liofilizados, envuelto en un dibujo de Tove Jansson. El cacao es Criollo y Trinitario de Perú y la tableta se fabrica en Suecia.',
    specs: [
      '70 g',
      'Chocolate negro, 70 % de cacao',
      'Granos de cacao Criollo y Trinitario de Perú, fabricado en Suecia',
      'Ecológico',
    ],
    specLabels: [undefined, undefined, undefined, 'Dieta'],
  },
  'moomin-berry-picking-tea': {
    name: 'Té Moomin Berry Picking, 20 bolsitas',
    description:
      'Té negro con aromas de vainilla y bayas rojas, mezclado en la fábrica de Nurmijärvi en Finlandia y con la Bandera Llave finlandesa. El té es una colaboración con la Cruz Roja Finlandesa: 0,40 euros de cada paquete vendido van al trabajo de la Cruz Roja con niños, jóvenes y personas solas.',
    specs: [
      '20 x 1,75 g, 35 g',
      'Elaborado en la fábrica de Nurmijärvi en Finlandia',
      'Té con certificación Rainforest Alliance, Bandera Llave finlandesa',
      'Vegano',
    ],
    specLabels: [undefined, undefined, 'Certificación', 'Dieta'],
  },
  'arctic-power-berries-blueberry-powder': {
    name: 'Polvo de arándano silvestre 70 g',
    description:
      'Arándano silvestre liofilizado, sin nada añadido. El productor indica que unos 700 gramos de bayas frescas entran en un bote de 70 gramos. Esta tienda fija sus precios en libras esterlinas.',
    specs: [
      '70 g',
      '100 % polvo de arándano hecho con arándanos silvestres nórdicos. Sin nada añadido',
      'Unos 700 g de bayas frescas dan 70 g de polvo de bayas',
      'Energía 367 kcal / 1559 kJ, proteínas 5 g, hidratos de carbono 54 g de los cuales azúcares 34 g, fibra 31 g, grasas 0,8 g, sal 0,01 g',
    ],
    specLabels: [undefined, undefined, 'Bayas empleadas', 'Información nutricional por 100 g'],
  },
  'arctic-power-berries-sea-buckthorn-powder': {
    name: 'Polvo de espino amarillo 70 g',
    description:
      'Espino amarillo nórdico liofilizado, 70 gramos, sin nada añadido. Ácido y de color naranja intenso, así que una cucharadita cunde más en las gachas de lo que uno diría. Esta tienda fija sus precios en libras esterlinas.',
    specs: [
      '70 g',
      '100 % polvo de espino amarillo hecho con bayas nórdicas de espino amarillo. Sin nada añadido',
      'Unos 700 g de bayas frescas dan 70 g de polvo de bayas',
      'Energía 489 kcal / 2045 kJ, proteínas 13 g, hidratos de carbono 24 g de los cuales azúcares 14 g, fibra 28 g, grasas 25 g, sal 0,06 g',
    ],
    specLabels: [undefined, undefined, 'Bayas empleadas', 'Información nutricional por 100 g'],
  },
  'kaapa-mushrooms-pakuri-powder': {
    name: 'Polvo de extracto de chaga Kääpä Mushrooms 30 g',
    description:
      'Un bote de 30 gramos de polvo de extracto de chaga de Kääpä Mushrooms, que recolecta hongos funcionales en bosques nórdicos, pensado para disolver en bebidas calientes. Ruohonjuuri entrega solo dentro del territorio aduanero y fiscal de la Unión Europea, y la etiqueta enumera interacciones con medicamentos que conviene leer antes.',
    specs: [
      '30 g',
      '100 % chaga, ecológico. 100 mg de betaglucano por dosis diaria',
      'Finlandia',
      'Ecológico con la hoja ecológica de la Unión Europea. Sin gluten, sin lactosa, sin lácteos, sin soja, sin azúcar, sin cafeína, sin aditivos, vegano, silvestre',
      'El chaga no debe tomarse junto con antibióticos, anticoagulantes, penicilina o glucosa intravenosa. Toma la dosis indicada en el envase y no la superes',
      '6430071310212',
    ],
    specLabels: [undefined, undefined, undefined, 'Dieta', 'Advertencia', 'EAN'],
  },
  'arctic-warriors-spruce-sprout-powder': {
    name: 'Polvo de brotes de abeto Arctic Warriors 40 g',
    description:
      'Brotes de abeto liofilizados, recogidos a mano en una ventana de dos semanas en bosques estatales ecológicos, y solo cada dos años en el mismo bosque. Cítrico y resina en una cucharada, 382 mg de vitamina C por 100 g.',
    specs: [
      '40 g, bruto 0,046 kg',
      '3 x 11 x 17 cm',
      'Brote de abeto liofilizado',
      'Finlandia',
      'De 1 a 3 cucharaditas al día',
      'Energía 1683 kJ / 402 kcal, proteínas 12,1 g, hidratos de carbono 77,8 g, grasas 4,19 g. Vitamina C 382 mg, vitamina A 970 µg, vitamina K1 332 mg, potasio 1200 mg, fósforo 350 mg, calcio 130 mg, magnesio 120 mg, zinc 3,6 mg, hierro 2 mg',
      'Recogidos con licencia en bosques ecológicos propiedad de la administración forestal del Estado finlandés, cada dos años por bosque',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      undefined,
      'Dosificación',
      'Información nutricional por 100 g',
      'Recolección',
    ],
  },
  'arctic-warriors-nettle-powder': {
    name: 'Polvo de ortiga Arctic Warriors 150 g',
    description:
      'Ortiga cultivada en granjas ecológicas de Laponia, liofilizada en un polvo lo bastante neutro para mezclarlo en una sopa o en el pan sin pelearse con el resto del plato. 22 000 mg de calcio por 100 g.',
    specs: [
      '150 g, bruto 0,162 kg',
      '4 x 16 x 23 cm',
      'Ortiga liofilizada',
      'Finlandia, cultivada en granjas ecológicas de Laponia',
      'De 1 a 5 cucharaditas al día',
      'Energía 1484 kJ / 354 kcal, proteínas 23,6 g, hidratos de carbono 56 g, grasas 3,44 g, sal menos de 5 mg. Vitamina A 1900 µg, calcio 22000 mg, magnesio 5300 mg, hierro 68 mg',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Dosificación', 'Información nutricional por 100 g'],
  },
  'arctic-warriors-roseroot-elixir': {
    name: 'Elixir de raíz de rosa Arctic Warriors 100 ml',
    description:
      'La raíz de rosa crece en las riberas húmedas y las paredes de roca de las montañas de Laponia, y Arctic Warriors la extrae en glicerol vegetal junto con ortiga. Una cucharadita va al té, a las gachas o al yogur.',
    specs: [
      '100 ml, bruto 0,270 kg',
      '4,5 x 4,5 x 13 cm',
      'Glicerol vegetal, ortiga, raíz de rosa',
      'Finlandia',
      'De 1 a 2 cucharaditas al día',
      'Sin lácteos, sin gluten, vegano. El glicerol vegetal no afecta al azúcar en sangre',
      'Un complemento alimenticio no sustituye a una dieta variada. Mantener fuera del alcance de los niños y no superar la dosis indicada',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Dosificación', 'Dieta', 'Nota'],
  },
  'omega7-sea-buckthorn-olive-oil': {
    name: 'Omega7 SBA24 aceite de espino amarillo y oliva 150 ml',
    description:
      'Aceite de la baya y de la semilla del espino amarillo junto con aceite de oliva, desarrollado y elaborado en Finlandia. El productor estandariza los niveles de vitamina A y E en lugar de dejarlos a merced de la cosecha.',
    specs: [
      '150 ml',
      'Aceite de baya y de semilla de espino amarillo con aceite de oliva, niveles de vitamina A y E estandarizados',
      'Desarrollado y elaborado en Finlandia',
      'Sigue la dosis del envase y no la superes. Un complemento alimenticio no sustituye a una dieta variada. Mantener fuera del alcance de los niños',
    ],
    specLabels: [undefined, undefined, undefined, 'Nota'],
  },
  'kaino-spruce-sprout-sparkling': {
    name: 'Bebida con gas de brotes de abeto KAINO Drinks 0,2 l',
    description:
      'Una bebida con gas sin alcohol hecha con ingredientes ecológicos finlandeses, para que un brindis en la cabaña no tenga que llevar alcohol. Sírvela fría, o el aroma de abeto desaparece bajo las burbujas.',
    specs: [
      '0,2 l',
      'Hecha con 100 % ingredientes ecológicos finlandeses. Sin alcohol',
      'Finlandia',
      'Energía 122,65 kJ / 29,3 kcal, grasas menos de 0,1 g de las cuales saturadas menos de 0,1 g, hidratos de carbono 6,9 g de los cuales azúcares 6,9 g, proteínas menos de 0,1 g, sal menos de 0,1 g',
      'Vegana. Hoja ecológica de la Unión Europea',
    ],
    specLabels: [undefined, undefined, undefined, 'Información nutricional por 100 ml', 'Dieta y certificación'],
  },
  'arabia-moomin-mug-snufkin': {
    name: 'Taza Arabia Moomin, Snufkin',
    description:
      'Arabia imprime los dibujos de Tove Jansson en estas tazas desde 1990, y los coleccionistas siguen por año las que se retiran. Snufkin es el que se marcha en otoño y vuelve en primavera.',
    specs: ['0,3 l', 'Tove Jansson'],
    specLabels: [undefined, 'Ilustración'],
  },
  'arabia-moomin-mug-friendship': {
    name: 'Taza Arabia Moomin, Friendship',
    description:
      'La taza muestra a Ninny, la niña invisible que tiene miedo de la oscuridad y vuelve a hacerse visible poco a poco cuando alguien la trata con amabilidad. Una elección más discreta que los personajes conocidos.',
    specs: ['0,3 l', 'Tove Jansson'],
    specLabels: [undefined, 'Ilustración'],
  },
  'arabia-moomin-figurine-moomintroll': {
    name: 'Minifigura Arabia Moomin, Moomin',
    description:
      'Una figura de cerámica hecha a mano, dibujada por Tuulikki Pietilä en los años noventa y vendida en su propia caja. Lo bastante pequeña para volver a casa en el bolsillo de un abrigo.',
    specs: ['Tuulikki Pietilä, años 1990', 'Cerámica hecha a mano, vendida en su propia caja'],
    specLabels: ['Diseñadora', 'Fabricación'],
  },
  'fiskars-moominpappa-scissors': {
    name: 'Tijeras universales Fiskars Papá Moomin',
    description:
      'Las tijeras Fiskars de mango naranja están en más cajones de cocina finlandeses que ninguna otra herramienta. Este par mide 21 cm en acero inoxidable con Papá Moomin en el mango.',
    specs: ['21 cm', 'Acero inoxidable'],
  },
  'rento-tar-sauna-soap': {
    name: 'Jabón de sauna de alquitrán Rento 150 g',
    description:
      'El alquitrán de pino es un olor finlandés antes que un sabor finlandés, y su sitio está en la sauna más que en ninguna otra parte. Con base de aceite vegetal, colgado de un cordón de yute para que se seque entre usos.',
    specs: ['150 g', 'Jabón con base de aceite vegetal'],
  },
  'rento-birch-sauna-honey': {
    name: 'Miel de sauna de abedul Rento 150 ml',
    description:
      'Extiéndela sobre la piel limpia, deja que actúe con el calor suave y aclara con agua templada. La miel de sauna es la parte del ritual finlandés que a los visitantes nunca se les ocurre llevarse a casa.',
    specs: ['150 ml'],
  },
  'rento-blueberry-sauna-honey': {
    name: 'Miel de sauna de arándano Rento 150 ml',
    description:
      'La versión exfoliante, con aroma de arándano. Mismo uso que la de abedul: sobre la piel limpia, deja que el calor trabaje y aclara con agua templada.',
    specs: ['150 ml'],
  },
  'rento-sauna-pillow': {
    name: 'Cojín de sauna Rento Pino 50 x 22 cm',
    description:
      'Un cojín tejido en jacquard para la cabeza y la nuca en el banco de la sauna. Mantiene la forma, y esa es toda la diferencia entre un cojín de sauna y una toalla doblada.',
    specs: ['50 x 22 cm', 'Negro'],
  },
  'rento-linen-back-scrubber': {
    name: 'Cepillo de espalda de rizo de lino Rento 14 x 70 cm',
    description:
      'Rizo de lino, lo bastante largo para llegar a la propia espalda. La piel se ablanda primero con el calor y se lava después, y ese es el orden que siguen los finlandeses sin pensarlo.',
    specs: ['14 x 70 cm', 'Rizo de lino'],
  },
  'rento-linen-wash-mitt': {
    name: 'Manopla de baño de rizo de lino Rento 14 x 24 cm',
    description:
      'El mismo rizo de lino que el cepillo de espalda, en una manopla con la palma doble. Lo más barato de esta sección y lo que la gente usa de verdad cada semana.',
    specs: ['14 x 24 cm', 'Rizo de lino, palma doble'],
  },
  'emendo-sauna-scents': {
    name: 'Aromas de sauna Emendo: salmiakki, resina de pino, sisu, 3 x 10 ml',
    description:
      'Tres aromas en un soporte de madera, y uno de ellos es salmiakki. Pocas cosas son más finlandesas que el salmiakki y la sauna, y este set pone ambos en el mismo cazo.',
    specs: ['3 x 10 ml en un soporte de madera', 'Salmiakki, resina de pino, sisu'],
    specLabels: [undefined, 'Aromas'],
  },
  'aurora-mini-kuksa': {
    name: 'Mini kuksa con lazo de cuero, 4 cm',
    description:
      'Un kuksa de 4 cm pensado para un chupito y no para el café, con un lazo de cuero para el cinturón. La forma más pequeña y barata de tener esta pieza.',
    specs: ['Diámetro 4 cm'],
  },
  'fazer-super-salmiakki': {
    name: 'Pastillas Fazer Super Salmiakki 80 g',
    description:
      'El más duro de los clásicos del salmiakki, vendido en la misma caja con forma de lata desde los años setenta. Dale una a un visitante y sabrás en diez segundos a qué bando pertenece.',
    specs: ['80 g'],
  },
  'fazer-pantteri-salmiakki': {
    name: 'Caramelos de salmiakki Fazer Pantteri 210 g',
    description:
      'Salmiakki blando de mentol que se fabrica desde hace más de cincuenta años. Más suave que las pastillas, así que esta es la bolsa para quien nunca ha probado el salmiakki.',
    specs: ['210 g'],
  },
  'halva-salmiakkiruutu': {
    name: 'Halva Salmiakkiruutu 170 g',
    description:
      'Halva hace este salmiakki en cuadrados desde 1960 en Pitäjänmäki, en Helsinki. Más masticable que las versiones de Fazer y el que los finlandeses defienden como el original.',
    specs: ['170 g', 'Fabricado en Pitäjänmäki, Helsinki, desde 1960'],
  },
  'sisu-xylitol-salmiakki': {
    name: 'Pastillas de salmiakki Sisu Xylitol 36 g',
    description:
      'Salmiakki endulzado con xilitol y con el sello de la Asociación Dental Finlandesa. La caja cabe en el bolsillo de un abrigo, y por eso acaban en todos los coches finlandeses.',
    specs: ['36 g', 'Xilitol. Lleva el sello de la Asociación Dental Finlandesa'],
    specLabels: [undefined, 'Edulcorante'],
  },
  'leijona-tar-liquorice': {
    name: 'Pastillas de regaliz de alquitrán Leijona 32 g',
    description:
      'Regaliz con aroma de alquitrán de pino, fabricado desde 1933. El alquitrán es un sabor finlandés que acaba en caramelos, en el jabón de sauna e incluso en el helado, y esta es la forma más barata de probarlo.',
    specs: ['32 g'],
  },
  'fazer-hazelnut-chocolate': {
    name: 'Karl Fazer chocolate con leche y avellanas enteras 200 g',
    description:
      'La tableta azul con avellanas enteras dentro del chocolate con leche. Fazer usa el mismo envoltorio azul desde 1922, y por eso es la que los finlandeses se llevan al extranjero.',
    specs: ['200 g'],
  },
  'fazer-light-milk-chocolate': {
    name: 'Karl Fazer chocolate con leche claro 180 g',
    description:
      'Una versión más clara y más suave de la tableta azul. Si la clásica te resulta demasiado dulce, esta es la que hay que llevarse.',
    specs: ['180 g'],
  },
  'fazer-fazerina': {
    name: 'Tableta de trufa de naranja Fazer Fazerina 99 g',
    description:
      'Trufa de naranja dentro de chocolate con leche, fabricada desde 1953. Más fina que la tableta azul y la que sobrevive a una mochila sin fundirse en un bloque.',
    specs: ['99 g'],
  },
  'fazer-jaffa-orange': {
    name: 'Pastelitos de naranja Fazer Jaffa 300 g',
    description:
      'Base de bizcocho, mermelada de naranja y chocolate negro encima. Ni galleta ni pastel, que es justo la discusión que los finlandeses repiten cada vez.',
    specs: ['300 g'],
  },
  'north-outdoor-arctic-250-balaclava': {
    name: 'Pasamontañas de merino North Outdoor Arctic 250',
    description:
      'El tejido más cálido que hace North Outdoor, con la forma pensada para ir bajo un casco. En una motonieve o en un trineo de renos el frío entra primero por el cuello y las mejillas, y esa es la abertura que cierra esta capa.',
    specs: [
      'Punto de lana merina, gramaje Arctic 250',
      'Talla única',
      'Negro',
      'North Outdoor, Oulu, Finlandia',
    ],
  },
  'north-outdoor-kevo-gloves': {
    name: 'Guantes de merino North Outdoor Kevo',
    description:
      'Tejidos con merino libre de mulesing en la propia fábrica de North Outdoor en Oulu. Lo bastante finos para llevarlos bajo una manopla en los días más fríos y para no quitártelos al hacer una foto.',
    specs: ['100 % lana merina, libre de mulesing', 'M, L, XL', 'Azul índigo', 'Tejidos en Oulu, Finlandia'],
  },
  'north-outdoor-heavyweight-gaiter': {
    name: 'Cuello de merino North Outdoor Heavyweight',
    description:
      'Forro polar de merino, lo bastante grueso para subirlo por encima de la nariz mientras esperas a que aparezcan las luces. La lana sigue aislando cuando tu aliento se condensa en ella, que es justo el problema de quedarse quieto en el frío.',
    specs: ['Forro polar de merino', 'Talla única', 'Negro', 'North Outdoor, Oulu, Finlandia'],
  },
  'north-outdoor-sointu-cardigan': {
    name: 'Cárdigan de merino North Outdoor Sointu',
    description:
      'Un cárdigan de merino de corte recto que se lee como ropa de interior pero funciona como capa intermedia. La única prenda de este conjunto que te pondrías para cenar después del safari.',
    specs: ['100 % lana merina', 'XS–2XL', 'Latte', 'North Outdoor, Oulu, Finlandia'],
  },
  'north-outdoor-arctic-260-zip-neck': {
    name: 'Jersey con cremallera de merino North Outdoor Arctic 260',
    description:
      'Un jersey de cuello alto con cremallera en 100 por ciento merino, lo bastante grueso para llevarlo solo en interiores y para servir de capa intermedia fuera. La cremallera es la clave: la abres al caminar y la cierras cuando te paras.',
    specs: [
      '100 % lana merina',
      'S–3XL',
      'Gris granito y negro',
      'North Outdoor, Oulu, Finlandia',
      'Cuello alto protector, cremallera cubierta, bajo trasero alargado',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Detalles'],
  },
  'halti-hossa-baselayer-men': {
    name: 'Conjunto de ropa interior de merino Halti Hossa II, hombre',
    description:
      'Camiseta y pantalón largo en una misma caja, merino de 190 g a 20,5 micras. La capa más cercana a la piel decide si funciona el resto del equipo, y es justo la que la mayoría de los visitantes no trae.',
    specs: [
      '100 % lana merina, 190 g/m², 20,5 micras, canalé 1x1',
      'Camiseta de manga larga y pantalón largo',
      'Lavar del revés',
    ],
    specLabels: [undefined, 'Contenido del conjunto', undefined],
  },
  'halti-hossa-baselayer-women': {
    name: 'Conjunto de ropa interior de merino Halti Hossa II, mujer',
    description:
      'El mismo conjunto de merino de 190 g con corte de mujer. La lana conserva el calor cuando sudas caminando y luego te quedas quieta mirando, que es como es de verdad un día en Laponia.',
    specs: [
      '100 % lana merina, 190 g/m², 20,5 micras, canalé 1x1',
      'Camiseta de manga larga y pantalón largo',
      'Lavar del revés',
    ],
    specLabels: [undefined, 'Contenido del conjunto', undefined],
  },
  'halti-heatgrid-midlayer': {
    name: 'Chaqueta de capa intermedia Halti HeatGrid, hombre',
    description:
      'Un tejido de gofre que atrapa el aire sin añadir volumen bajo una shell. Esta es la capa entre el merino y el parka, y dejarla fuera es la razón de que la gente vuelva con frío.',
    specs: [
      'Tejido de gofre por el revés 95 % poliéster reciclado / 5 % elastano; tejido de punto jersey 92 % poliéster reciclado / 8 % elastano',
      'Lavar del revés con colores similares, cerrar las cremalleras antes del lavado',
    ],
  },
  'halti-taival-dx-jacket': {
    name: 'Chaqueta shell Halti Taival DX 3L, hombre',
    description:
      'Una shell de tres capas con 20 000 mm de impermeabilidad y 30 000 g de transpirabilidad. Esos dos números importan en direcciones distintas: el primero deja el aguanieve fuera, el segundo deja salir el sudor de una subida en lugar de que se congele dentro.',
    specs: [
      'Shell de punto DrymaxX Nano, 3 capas. 100 % poliéster reciclado',
      '20 000 mm',
      '30 000 g/m²/24 h',
    ],
    specLabels: [undefined, 'Impermeabilidad', 'Transpirabilidad'],
  },
  'halti-sykli-ski-gloves': {
    name: 'Guantes de esquí Halti Sykli',
    description:
      'Guante impermeable con 120 g de aislamiento, palma de cuero y puño snowlock que impide que la nieve se meta por la muñeca cuando te caes. Hecho para esquiar con remontes en Levi o Ylläs y no para pasear por la ciudad.',
    specs: [
      'DrymaxX, se estira en 4 direcciones, impermeable y cortavientos. Palma de cuero',
      '120 g Microtherm Dynamic',
      '15 000 mm / 15 000 g/m²/24 h',
    ],
    specLabels: [undefined, 'Aislamiento', 'Impermeabilidad y transpirabilidad'],
  },
  'halti-merino-socks-2pack': {
    name: 'Calcetines de lana merina Halti, pack de 2',
    description:
      'Dos pares, porque el que llevaste hoy no estará seco mañana por la mañana. Mezcla de merino en lugar de lana pura, que aguanta mejor los lavados repetidos a máquina.',
    specs: [
      '40 % lana merina, 40 % acrílico, 19 % poliamida, 1 % elastano',
      '2 pares',
      'Fabricados en Europa',
    ],
    specLabels: [undefined, 'Tamaño del pack', undefined],
  },
  'husky-farm-safari-rovaniemi': {
    name: 'Visita a una granja de huskys y safari para dos, Rovaniemi',
    description:
      'Una tarjeta regalo para una visita guiada a una granja de huskys auténtica cerca de Rovaniemi, seguida de un paseo en trineo tirado por los perros por el bosque invernal. Se compra ahora, llega por correo electrónico y quien la recibe elige la fecha.',
    specs: [
      'Visita guiada a una granja de huskys y safari en trineo para dos. El guía puede recogeros en un radio de 10 km de Rovaniemi',
      'Unas 3,5 h',
      '2 personas',
      'Rovaniemi. El lugar exacto se confirma al reservar',
      'Meses de invierno, de noviembre a abril',
      'Inglés',
      'Válida 3 años',
    ],
    specLabels: [undefined, 'Duración', 'Participantes', 'Ubicación', 'Temporada', 'Idioma del guía', 'Tarjeta regalo'],
  },
  'reindeer-safari-rovaniemi': {
    name: 'Safari de renos para dos, Rovaniemi',
    description:
      'Un safari de renos al caer la tarde en una granja auténtica cerca de Rovaniemi: un recorrido de 2,5 km tras los renos, una visita a la granja y un pequeño tentempié. En noches despejadas pueden aparecer auroras boreales, aunque nadie puede prometerlo.',
    specs: [
      'Entrada a una granja de renos y recorrido de 2,5 km en trineo tirado por renos para dos, con un pequeño tentempié. Recogida en un radio de 10 km de Rovaniemi',
      'De 2,5 a 3 horas',
      '2 personas',
      'Rovaniemi. El lugar exacto se confirma al reservar',
      'Meses de invierno, de diciembre a marzo. El safari sale al anochecer',
      'Inglés',
      'Válida 3 años',
    ],
    specLabels: [undefined, 'Duración', 'Participantes', 'Ubicación', 'Temporada', 'Idioma del guía', 'Tarjeta regalo'],
  },
  'aurora-tour-kilpisjarvi': {
    name: 'Auroras boreales en moto de nieve para dos, Kilpisjärvi',
    description:
      'Kilpisjärvi es conocido por su cielo nocturno excepcionalmente limpio. Un corto trayecto en moto de nieve os lleva a un lugar donde observar las auroras en plena calma natural, con bebidas calientes contra el frío. Por la noche de 20.00 a 23.00, con reserva meteorológica.',
    specs: [
      'Excursión guiada de auroras boreales para dos, unos 15 km en moto de nieve, bebidas calientes incluidas',
      '3 horas, de 20.00 a 23.00',
      '2 personas',
      'Kilpisjärvi',
      '18 años para conducir, 8 años en el trineo',
      'Válida 3 años',
    ],
    specLabels: [undefined, 'Duración', 'Participantes', 'Ubicación', 'Límite de edad', 'Tarjeta regalo'],
  },
  'glass-igloo-night-levi': {
    name: 'Noche en iglú de cristal para dos, Levi',
    description:
      'Una noche para dos en un iglú de cristal cálido en lo alto del monte Levi. El cristal calefactado se mantiene despejado mientras buscáis auroras desde una cama doble motorizada. Bebida de bienvenida, albornoces y desayuno incluidos, con cocina pequeña, ducha y WC propios.',
    specs: [
      'Una noche para dos en un iglú de cristal de clase Superior, bebida de bienvenida, albornoces y zapatillas, desayuno. Transporte no incluido',
      '1 noche, salida a las 11.00',
      '2 personas',
      'Levi, en lo alto del monte',
      '23 m², cristal calefactado antivaho, cocina pequeña, ducha y WC, cama doble motorizada',
      'Válida para estancias del 27.08-10.11 y del 01.04-12.04',
    ],
    specLabels: [undefined, 'Duración', 'Participantes', 'Ubicación', 'Iglú', 'Tarjeta regalo'],
  },
  'gold-panning-day-inari': {
    name: 'Día de buscar oro para cuatro, Inari',
    description:
      'Un día en una concesión de oro en activo en Inari para un grupo de cuatro: primero la historia, luego el bateo a mano y un vistazo a la extracción con maquinaria. Comidas y transporte desde el centro de Saariselkä incluidos, y el oro encontrado se lo lleva el grupo a casa.',
    specs: [
      'Un día de 5 horas buscando oro en una concesión en activo para cuatro, con iniciación al bateo a mano y demostración de la extracción con maquinaria. Comidas del día, equipo y transporte del centro de Saariselkä a la concesión y vuelta incluidos',
      '5 horas',
      '4 personas',
      'Inari',
      'Temporadas de primavera y verano',
      'Válida 3 años',
    ],
    specLabels: [undefined, 'Duración', 'Participantes', 'Ubicación', 'Temporada', 'Tarjeta regalo'],
  },
  'foodin-six-mushroom-blend': {
    name: 'Foodin mezcla de seis setas 100 g',
    description:
      'Chaga, reishi, melena de león, cordyceps, shiitake y maitake en un solo bote, molidos para café o batidos. Un bote cubre toda la estantería de setas funcionales.',
    specs: ['100 g', 'Chaga, reishi, melena de león, cordyceps, shiitake, maitake'],
  },
  'foodin-nordic-berry-powder': {
    name: 'Foodin mezcla de bayas nórdicas en polvo 120 g',
    description:
      'Una mezcla finlandesa de bayas del norte en un solo polvo, para gachas y yogur. La forma más ligera de llevarse a casa un verano de bayas nórdicas.',
    specs: ['120 g', 'Hecho en Finlandia'],
  },
  'foodin-chaga-tincture': {
    name: 'Foodin tintura de chaga 50 ml',
    description:
      'Chaga finlandés en gotas en lugar de polvo: un frasco de 50 ml que no necesita infusión. El formato de viaje de toda la idea del chaga.',
    specs: ['50 ml', 'Chaga finlandés'],
  },
  'kaavi-chaga-chunks': {
    name: 'Kaavi Porcini trozos de chaga 100 g',
    description:
      'Trozos gruesos de chaga de abedul finlandés para infusión lenta, como se bebía aquí mucho antes de la palabra superalimento. Una bolsa da para muchas teteras.',
    specs: ['100 g', 'Hervir a fuego lento como un té de infusión larga'],
    specLabels: [undefined, 'Uso'],
  },
  'puhdistamo-instant-chaga': {
    name: 'Puhdistamo polvo de extracto de chaga instantáneo 28 g',
    description:
      'Chaga que se disuelve directamente en agua caliente, sin hervir. El bote de 28 gramos cabe en cualquier equipaje y viaja mejor que una bolsa de trozos.',
    specs: ['28 g'],
  },
  'puhdistamo-conifer-extract': {
    name: 'Puhdistamo extracto de coníferas 50 ml',
    description:
      'Un extracto de coníferas finlandesas que se toma en gotas. El olor a bosque de una caminata por Laponia en un frasco de bolsillo.',
    specs: ['50 ml'],
  },
  'nb-little-my-beanie': {
    name: 'Gorro de punto grueso de Little My',
    description:
      'Gorro grueso de punto con Little My en la vuelta, en una mezcla de lana que mantiene la forma después de una semana de ponerlo y quitarlo. Una talla de adulto, y el único personaje Moomin que aprobaría el tiempo que hace en Laponia.',
    specs: [
      'Acrílico, nailon y lana',
      'Adulto, talla única',
      'Producto Moomin oficial',
    ],
    specLabels: [undefined, undefined, 'Licencia'],
  },
  'nb-moomintroll-mittens': {
    name: 'Manoplas de Moomintroll',
    description:
      'Manoplas de punto forradas con forro polar suave, de 24 centímetros de alto para que el puño pase por encima de la manga del abrigo. Talla de adulto, y lo bastante económicas como para sobrevivir a perder una en un trineo de huskies.',
    specs: [
      '100 % acrílico, forro polar',
      'Adulto, altura 24 cm, ancho por encima del pulgar 9,5 cm',
      'Producto Moomin oficial',
    ],
    specLabels: [undefined, undefined, 'Licencia'],
  },
  'nb-moomintroll-love-socks': {
    name: 'Calcetines retro Moomintroll Love',
    description:
      'Calcetines blancos de canalé con Moomintroll bordado dentro de un corazón rosa en la espinilla, bordado y no estampado, así que aguanta los lavados. Una talla cubre del EU 36 al 42.',
    specs: [
      '67 % algodón, 25 % poliéster, 4 % elastodieno, 3 % nailon, 1 % elastano',
      'Talla única, EU 36-42',
      'Motivo bordado',
    ],
    specLabels: [undefined, undefined, 'Detalle'],
  },
  'nb-moomin-classics-tee': {
    name: 'Camiseta gruesa Moomin Classics',
    description:
      'Una camiseta de algodón de 260 gramos en color lavanda, corte holgado, con un pequeño Moomintroll bordado en el pecho en lugar de un estampado grande. Lo bastante gruesa para caer recta en vez de ceñirse.',
    specs: [
      '100 % algodón, 260 g/m2',
      'Unisex, corte holgado, de la XS a la XXL',
      'Corte holgado, la tienda recomienda pedir una talla menos',
    ],
    specLabels: [undefined, undefined, 'Nota de talla'],
  },
  'nb-pippi-tee': {
    name: 'Camiseta de Pippi Calzaslargas',
    description:
      'Pippi impresa en Finlandia sobre una camiseta de algodón de 240 gramos, corte recto unisex con un bajo más largo de lo habitual. Astrid Lindgren viaja más lejos que los Moomin en algunas casas.',
    specs: [
      '100 % algodón, 240 g/m2',
      'Unisex, corte recto, de la M a la XXL',
      'Impresa en Finlandia',
    ],
  },
  'nb-moomintroll-hoodie': {
    name: 'Sudadera con capucha de Moomintroll',
    description:
      'Una sudadera con capucha de 300 gramos de algodón y poliéster, impresa en Finlandia, corte recto unisex. Justo la capa en la que se vive de verdad en una noche de cabaña, cuando la sauna ya se ha enfriado.',
    specs: [
      '65 % algodón, 35 % poliéster, 300 g/m2',
      'Unisex, corte recto, de la XS a la XXL',
      'Impresa en Finlandia',
    ],
  },
  'nb-kunnas-kalevala-tote': {
    name: 'Bolsa de tela Mauri Kunnas El Kalevala canino',
    description:
      'Una bolsa de algodón estampada con ilustraciones de Mauri Kunnas de El Kalevala canino, su versión perruna de la epopeya nacional finlandesa. Lo más barato de esta tienda que aun así explica todo un país.',
    specs: [
      '100 % algodón',
      '38 x 42 cm',
      'Producto Mauri Kunnas oficial',
    ],
    specLabels: [undefined, undefined, 'Licencia'],
  },
  'sk-marimekko-unikko-crossbody': {
    name: 'Bolso bandolera Marimekko Neat Crossbody Unikko',
    description:
      'La amapola Unikko en un bolso bandolera del tamaño justo para el móvil, la cartera y un par de guantes. Unikko se dibujó en 1964 después de que Armi Ratia prohibiera los estampados florales, y ha sobrevivido a esa prohibición sesenta años.',
    specs: [
      'Neat Crossbody, talla M',
      'Unikko, azul y azul oscuro',
    ],
    specLabels: ['Modelo', 'Estampado'],
  },
  'sk-moomin-duvet-set': {
    name: 'Juego de funda nórdica Moomin 150 x 210 cm, Sydankapyset',
    description:
      'Juego de cama de algodón con certificación GOTS, con Moomintroll y la Señorita Snork. El nombre finlandés del estampado, Sydankapyset, describe justamente la relación que el dibujo muestra.',
    specs: [
      'Funda nórdica 150 x 210 cm',
      'GOTS, el Global Organic Textile Standard',
    ],
    specLabels: [undefined, 'Certificación'],
  },
  'sk-novita-wonder-wool': {
    name: 'Lana Novita Wonder Wool DK 50 g',
    description:
      'Lana pura de grosor DK de Novita, la hilandería que abastece a las tejedoras finlandesas desde 1928. Un ovillo de 50 gramos contiene 112 metros, y la aguja recomendada es de 4 mm.',
    specs: [
      '100 % lana',
      'Ovillo de 50 g, 112 m',
      '4 mm',
    ],
    specLabels: [undefined, undefined, 'Aguja recomendada'],
  },
  'sk-aromageddon-sauna-scent': {
    name: 'Esencia de sauna Aromageddon Hankihorppy 15 ml',
    description:
      'Menta y cacao como esencia de sauna, algo que suena raro hasta que has pasado un invierno finlandés entero. De dos a cuatro gotas en un cazo de agua, nunca sobre las piedras.',
    specs: [
      '15 ml',
      'De 2 a 4 gotas en un cazo de agua',
    ],
    specLabels: [undefined, 'Uso'],
  },
  'sk-muurla-moomin-bottle': {
    name: 'Botella de vidrio Moomin de Muurla 1 l, Manzanas',
    description:
      'Una botella de vidrio sodocálcico con tapón mecánico, para el agua o el zumo en la mesa en lugar de un cartón. Apta para lavavajillas, un litro, y el estampado de manzanas es el de verano.',
    specs: [
      '1 l',
      'Vidrio sodocálcico, tapón mecánico',
      'Apta para lavavajillas',
    ],
    specLabels: [undefined, undefined, 'Cuidado'],
  },
  'nb-kunnas-kalevala-beanie': {
    name: 'Gorro El Kalevala de los perros',
    description:
      'Mauri Kunnas convirtió el Kalevala en una epopeya canina en 1992, y el gorro lleva ese dibujo. Poliéster reciclado, una talla de adulto, y tan ligero que acaba en el bolsillo del abrigo en cuanto el autobús se calienta.',
    specs: [
      '100 % poliéster reciclado',
      'Adulto, talla única',
      'Mauri Kunnas, El Kalevala de los perros',
    ],
    specLabels: [undefined, undefined, 'Ilustración'],
  },
  'nb-little-my-mittens': {
    name: 'Manoplas Pequeña My',
    description:
      'El par burdeos que acompaña a las manoplas de Moomin, mismo forro polar y mismo precio. La caña es dos centímetros más corta, y el personaje va bien a quien encuentra a Moomin demasiado conciliador.',
    specs: [
      '100 % acrílico, forro polar',
      'Adulto, altura 22 cm, ancho sobre el pulgar 9,5 cm',
      'Producto Moomin oficial',
    ],
    specLabels: [undefined, undefined, 'Licencia'],
  },
  'nb-kunnas-santa-mug': {
    name: 'Vaso de viaje Papá Noel',
    description:
      'Kunnas dibujó al Papá Noel de Korvatunturi tal como lo imaginan los niños finlandeses, y aquí está en un vaso de 450 ml hecho de PLA y no de plástico fósil. La funda de silicona es de lo que se agarra uno cuando el café quema demasiado para la mano desnuda.',
    specs: [
      '450 ml',
      'Vaso y tapa de PLA, funda de silicona apta para alimentos',
      'Mauri Kunnas',
    ],
    specLabels: [undefined, undefined, 'Ilustración'],
  },
  'nb-little-my-thermal-bottle': {
    name: 'Termo Pequeña My 0,55 l',
    description:
      'Acero de doble pared, 550 mililitros, y el fabricante indica seis horas de calor. Eso equivale más o menos a un safari en motonieve, que es la prueba real para la que se compra este termo.',
    specs: [
      '550 ml',
      'Acero inoxidable, tapa de PP, junta de silicona',
      'Seis horas según el fabricante',
    ],
    specLabels: [undefined, undefined, 'Mantiene el calor'],
  },
  'nb-little-my-neckpillow': {
    name: 'Almohada cervical Pequeña My',
    description:
      'Espuma viscoelástica bajo una funda suave, para el tren nocturno Helsinki–Rovaniemi o el vuelo de vuelta. Lo bastante pequeña para engancharla a la bolsa, que es la única clase de almohada de viaje que uno acaba conservando.',
    specs: [
      'Espuma viscoelástica, funda suave',
      'Producto Moomin oficial',
    ],
    specLabels: [undefined, 'Licencia'],
  },
  'nb-moomintroll-love-cushion': {
    name: 'Cojín Moomin Love',
    description:
      'Un cojín con la silueta de Moomin en lugar de un cuadrado estampado, en varias tallas de 45 a 75 centímetros de alto. De esas cosas que acaban en el sofá de la cabaña y se quedan allí.',
    specs: [
      'Poliéster',
      'Varias tallas, altura 45–75 cm',
      'Producto Moomin oficial',
    ],
    specLabels: [undefined, undefined, 'Licencia'],
  },
  'nb-little-my-poster': {
    name: 'Póster Pequeña My',
    description:
      'Diseñado e impreso en Helsinki sobre papel seda de 200 gramos, en 30 × 40 o 50 × 70. Un póster se enrolla en un tubo y no pesa nada, cosa que no puede decirse de casi nada de lo que la gente se lleva a casa desde Laponia.',
    specs: [
      'Papel seda, 200 g',
      '30 × 40 cm o 50 × 70 cm',
      'Diseñado e impreso en Helsinki',
    ],
    specLabels: [undefined, undefined, 'Fabricación'],
  },
  'nb-moomin-novels-poster': {
    name: 'Póster de las novelas Moomin',
    description:
      'Las portadas de las novelas Moomin de Tove Jansson en una sola lámina, misma impresión de Helsinki y los mismos dos tamaños que los pósteres de personajes. Para quien lee en la familia, no para quien colecciona tazas.',
    specs: [
      'Papel seda, 200 g',
      '30 × 40 cm o 50 × 70 cm',
      'Diseñado e impreso en Helsinki',
    ],
    specLabels: [undefined, undefined, 'Fabricación'],
  },
  'sk-finland-beanie': {
    name: 'Gorro Finlandia, azul y blanco',
    description:
      'El gorro azul y blanco con pompón y FINLAND en la vuelta, el de la grada y luego el del resto del invierno. Lavado a máquina a 30.',
    specs: [
      'FINLAND',
      'Lavado a máquina 30 °C',
    ],
    specLabels: ['Texto', 'Cuidado'],
  },
  'sk-finland-tube-scarf': {
    name: 'Braga de cuello Finlandia',
    description:
      'Un tubo sin costuras con el estampado de la bandera finlandesa, que se sube hasta la cara cuando el viento baja del fiel. Menos de siete euros, y por eso la gente compra tres.',
    specs: [
      'Bandera de Finlandia',
      'Lavado a mano',
    ],
    specLabels: ['Estampado', 'Cuidado'],
  },
  'sk-little-my-sauna-cushion': {
    name: 'Cojín de sauna Pequeña My, Emendo',
    description:
      'Un cojín de asiento para la sauna con dibujos originales de Tove Jansson, fabricado bajo licencia por Emendo. Lo que hay entre uno y un banco a noventa grados.',
    specs: [
      'A partir de los dibujos originales de Tove Jansson',
      'Producto oficial con licencia Moomin Characters',
    ],
    specLabels: ['Ilustración', 'Licencia'],
  },
  'sk-rento-sauna-hat': {
    name: 'Gorro de sauna Rento de rizo de lino',
    description:
      'El rizo de lino mantiene el calor lejos del cuero cabelludo y del pelo en el banco alto. Y funciona al revés: en una tina exterior en febrero mantiene la cabeza caliente. Lavado a máquina a 60.',
    specs: [
      'Rizo de lino',
      'Lavado a máquina 60 °C',
    ],
    specLabels: [undefined, 'Cuidado'],
  },
  'sk-rento-birch-whisk': {
    name: 'Ramo de abedul seco Rento',
    description:
      'Un ramo de abedul seco que se remoja en agua caliente antes de la sauna para que vuelvan las hojas y el olor. Azotarse con él es la parte de la sauna por la que siempre preguntan los visitantes y que rara vez prueban.',
    specs: [
      'Abedul seco',
      'Remojar antes de la sauna',
    ],
    specLabels: [undefined, 'Antes de usar'],
  },
  'sk-suomi-hockey-jersey': {
    name: 'Camiseta de aficionado de Finlandia',
    description:
      'La camiseta azul y blanca con SUOMI en el pecho y el escudo del león, con el corte que de verdad se lleva al partido. Transpirable, tallas de la M a la XXL, y para febrero parece que en cada casa finlandesa hay una.',
    specs: [
      'M–XXL',
      'SUOMI y el escudo del león',
    ],
    specLabels: [undefined, 'Estampación'],
  },
  'sk-marimekko-unikko-bath-towel': {
    name: 'Toalla de baño Marimekko Unikko 70 × 150 cm',
    description:
      'Unikko sobre algodón de rizo, beige y blanco, en el formato completo de 70 por 150. El hilo es 65 % algodón orgánico y 35 % reciclado, y la parte reciclada procede de los retales de corte de la propia Marimekko.',
    specs: [
      '70 × 150 cm',
      'Algodón de rizo, 65 % orgánico y 35 % reciclado',
      'Unikko, beige y blanco',
    ],
    specLabels: [undefined, undefined, 'Estampado'],
  },
  'sk-marimekko-unikko-hand-towel': {
    name: 'Toalla de manos Marimekko Unikko 50 × 70 cm',
    description:
      'El mismo rizo Unikko en tamaño de manos, la mitad de precio que la de baño y bastante más fácil de meter en la maleta. Beige y blanco, 65 % algodón orgánico y 35 % reciclado.',
    specs: [
      '50 × 70 cm',
      'Algodón de rizo, 65 % orgánico y 35 % reciclado',
      'Unikko, beige y blanco',
    ],
    specLabels: [undefined, undefined, 'Estampado'],
  },
}
