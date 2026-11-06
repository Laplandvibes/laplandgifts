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
      'Un gorro nórdico sencillo de lana merina, que equilibra temperatura y humedad cuando sale de un café caliente directo al frío. Sin un logotipo del tamaño de un puño en la parte delantera.',
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
    name: 'Cuchillo tradicional de Laponia Marttiini 255',
    description:
      'El cuchillo tradicional de Laponia, 27 cm en total, con hoja inoxidable, mango de abedul rizado barnizado y funda de cuero. Marttiini fabrica sus cuchillos en Rovaniemi, y esta versión del modelo lleva guardamanos.',
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
      'La forma del kuksa en un material que puede meter en el lavavajillas: mitad fibra de celulosa de pino, mitad termoplástico, moldeado en Finlandia. Tiene 2,1 dl, pesa 83 gramos y no le quema los dedos junto al fuego.',
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
  'kaapa-mushrooms-pakuri-powder': {
    name: 'Polvo de extracto de chaga Kääpä Mushrooms 30 g',
    description:
      'Un bote de 30 gramos de polvo de extracto de chaga de Kääpä Mushrooms, que recolecta hongos funcionales en bosques nórdicos, pensado para disolver en bebidas calientes. Ruohonjuuri entrega solo dentro del territorio aduanero y fiscal de la Unión Europea, y la etiqueta enumera interacciones con medicamentos que conviene leer antes.',
    specs: [
      '30 g',
      '100 % chaga, ecológico. 100 mg de betaglucano por dosis diaria',
      'Finlandia',
      'Ecológico con la hoja ecológica de la Unión Europea. Sin gluten, sin lactosa, sin lácteos, sin soja, sin azúcar, sin cafeína, sin aditivos, vegano, silvestre',
      'El chaga no debe tomarse junto con antibióticos, anticoagulantes, penicilina o glucosa intravenosa. Tome la dosis indicada en el envase y no la supere',
      '6430071310212',
    ],
    specLabels: [undefined, undefined, undefined, 'Dieta', 'Advertencia', 'EAN'],
  },
  'arctic-warriors-spruce-sprout-powder': {
    name: 'Polvo de brotes de abeto Arctic Warriors 40 g',
    description:
      'Brotes de abeto liofilizados, recogidos a mano en una ventana de dos semanas en bosques estatales ecológicos, y solo cada dos años en el mismo bosque. Cítrico y resina en una cucharada, 382 mg de vitamina C por 100 g.',
    specs: [
      '40 g',
      'Brotes de abeto liofilizados',
      '382 mg por 100 g',
    ],
    specLabels: [undefined, undefined, 'Vitamina C'],
  },
  'arctic-warriors-nettle-powder': {
    name: 'Polvo de ortiga Arctic Warriors 150 g',
    description:
      'Ortiga cultivada en granjas ecológicas de Laponia, liofilizada en un polvo lo bastante neutro para mezclarlo en una sopa o en el pan sin pelearse con el resto del plato.',
    specs: [
      '150 g, bruto 0,162 kg',
      '4 x 16 x 23 cm',
      'Ortiga liofilizada',
      'Finlandia, cultivada en granjas ecológicas de Laponia',
      'De 1 a 5 cucharaditas al día',
      'Energía 1484 kJ / 354 kcal, proteínas 23,6 g, hidratos de carbono 56 g, grasas 3,44 g, sal menos de 5 mg. Vitamina A 1900 µg',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Dosificación', 'Información nutricional por 100 g'],
  },
  'arctic-warriors-roseroot-elixir': {
    name: 'Elixir de raíz de rosa Arctic Warriors 100 ml',
    description:
      'La raíz de rosa crece en las riberas húmedas y las paredes de roca de las montañas de Laponia, y Arctic Warriors la extrae en glicerol vegetal junto con ortiga. Una cucharadita va al té, a las gachas o al yogur.',
    specs: [
      '100 ml',
      'Rodiola y ortiga',
    ],
  },
  'omega7-sea-buckthorn-olive-oil': {
    name: 'Omega7 SBA24 aceite de espino amarillo y oliva 150 ml',
    description:
      'Aceite de la baya y de la semilla del espino amarillo junto con aceite de oliva, desarrollado y elaborado en Finlandia. El productor estandariza los niveles de vitamina A y E en lugar de dejarlos a merced de la cosecha.',
    specs: [
      '150 ml',
      'Aceite de baya y de semilla de espino amarillo con aceite de oliva, niveles de vitamina A y E estandarizados',
      'Desarrollado y elaborado en Finlandia',
      'Siga la dosis del envase y no la supere. Un complemento alimenticio no sustituye a una dieta variada. Mantener fuera del alcance de los niños',
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
  'pahkataide-kuksa-bear': {
    name: 'Kuksa Pahkataide de abedul rizado con oso en hueso',
    description:
      'Una kuksa de abedul rizado con una incrustación de hueso en el asa con un motivo de oso. Pahkataide trata sus tazas con aceite de amapola, que protege la madera. Nunca se lava con detergente: basta con enjuagarla, y el café diario forma en la superficie una película que la protege aún más.',
    specs: [
      'Abedul rizado, incrustación de hueso en el asa',
      'Enjuagar con agua, sin detergente',
      'Fabricada en Finlandia',
    ],
    specLabels: [undefined, undefined, 'Origen'],
  },
  'pahkataide-curly-birch-kuksa': {
    name: 'Kuksa Pahkataide de abedul rizado',
    description:
      'Una kuksa sencilla de abedul rizado, con la misma madera y el mismo acabado de aceite de amapola que las tazas con incrustación de Pahkataide, sin adorno. La veta hace que cada pieza sea distinta, y cabe en ella aproximadamente 1,5 dl.',
    specs: [
      'Abedul rizado',
      'Unos 1,5 dl, cada pieza es única',
      'Enjuagar con agua, sin detergente',
      'Fabricada en Finlandia',
    ],
    specLabels: [undefined, undefined, undefined, 'Origen'],
  },
  'koivumaa-kuksa-reindeer-bone': {
    name: 'Kuksa E. Koivumaa de nudo de abedul con hueso de reno',
    description:
      'Una kuksa tallada a la manera tradicional en un nudo de abedul, con dos agujeros para los dedos en el asa y un adorno de hueso de reno. El nudo no quema los labios, y por eso es la taza clásica para el café caliente junto al fuego. Se cura con café solo y después basta con enjuagarla.',
    specs: [
      'Nudo de abedul, adorno de hueso de reno en el asa',
      'Unos 1,5 dl, dos agujeros en el asa',
      'Enjuagar con agua, sin detergente ni lavavajillas',
    ],
  },
  'koivumaa-burl-kuksa': {
    name: 'Kuksa E. Koivumaa de nudo de abedul, un agujero',
    description:
      'La versión sencilla de la kuksa de nudo del mismo artesano: nudo de abedul tallado a la manera tradicional, un agujero para los dedos en el asa, unos 1,5 dl. Se cura con café solo, cuyo aceite sella los poros abiertos de la madera, y nunca va al lavavajillas.',
    specs: [
      'Nudo de abedul',
      'Unos 1,5 dl, un agujero en el asa',
      'Enjuagar con agua, sin detergente ni lavavajillas',
    ],
  },
  'fazer-super-salmiakki': {
    name: 'Pastillas Fazer Super Salmiakki 80 g',
    description:
      'El más duro de los clásicos del salmiakki, vendido en la misma caja con forma de lata desde los años setenta. Dele una a un visitante y sabrá en diez segundos a qué bando pertenece.',
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
      'Una versión más clara y más suave de la tableta azul. Si la clásica le resulta demasiado dulce, esta es la que hay que llevarse.',
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
      'Forro polar de merino, lo bastante grueso para subirlo por encima de la nariz mientras espera a que aparezcan las luces. La lana sigue aislando cuando su aliento se condensa en ella, que es justo el problema de quedarse quieto en el frío.',
    specs: ['Forro polar de merino', 'Talla única', 'Negro', 'North Outdoor, Oulu, Finlandia'],
  },
  'north-outdoor-sointu-cardigan': {
    name: 'Cárdigan de merino North Outdoor Sointu',
    description:
      'Un cárdigan de merino de corte recto que se lee como ropa de interior pero funciona como capa intermedia. La única prenda de este conjunto que se pondría para cenar después del safari.',
    specs: ['100 % lana merina', 'XS–2XL', 'Latte', 'North Outdoor, Oulu, Finlandia'],
  },
  'north-outdoor-arctic-260-zip-neck': {
    name: 'Jersey con cremallera de merino North Outdoor Arctic 260',
    description:
      'Un jersey de cuello alto con cremallera en 100 por ciento merino, lo bastante grueso para llevarlo solo en interiores y para servir de capa intermedia fuera. La cremallera es la clave: la abre al caminar y la cierra cuando se para.',
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
      'El mismo conjunto de merino de 190 g con corte de mujer. La lana conserva el calor cuando suda caminando y luego se queda quieta mirando, que es como es de verdad un día en Laponia.',
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
      'Guante impermeable con 120 g de aislamiento, palma de cuero y puño snowlock que impide que la nieve se meta por la muñeca cuando se cae. Hecho para esquiar con remontes en Levi o Ylläs y no para pasear por la ciudad.',
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
  'korouoma-waterfalls-rovaniemi': {
    name: 'Cascadas heladas de Korouoma para dos, desde Rovaniemi',
    description:
      'En invierno, los arroyos que bajan por las paredes del cañón de Korouoma se congelan en cascadas de hielo azul. Esta excursión guiada de un día sale de Rovaniemi hacia el cañón, en Posio, a unos 110 km. La caminata es fácil, con raquetas de nieve si hace falta, y por el camino se sirve un almuerzo ligero.',
    specs: [
      'Excursión guiada a las cascadas heladas de Korouoma para dos, con transporte, almuerzo ligero y tentempié. Recogida en un radio de 10 km del centro de Rovaniemi',
      'Unas 7 horas con el transporte',
      '2 personas',
      'Cañón de Korouoma, Posio. Salida desde Rovaniemi',
      'Meses de invierno, de noviembre a abril',
      'Inglés',
      'Válida 3 años',
    ],
    specLabels: [undefined, 'Duración', 'Participantes', 'Ubicación', 'Temporada', 'Idioma del guía', 'Tarjeta regalo'],
  },
  'amethyst-mine-snowshoe-luosto': {
    name: 'Raquetas hasta la mina de amatista de Luosto para dos',
    description:
      'Un día guiado desde Rovaniemi hasta la mina de amatista de la cima del Lampivaara, en el parque nacional de Pyhä-Luosto. Primero se cruza el parque con raquetas de nieve y después un tren de nieve sube hasta la mina. En la mina cada uno puede excavar por su cuenta, y la amatista que encuentre es suya.',
    specs: [
      'Excursión guiada con raquetas y visita a la mina de amatista para dos, con transporte, tentempié en la parada y todo el equipo. Se puede pedir prestada ropa de abrigo y botas',
      'Unas 7 horas',
      '2 personas',
      'Lampivaara, Luosto. Salida desde Rovaniemi',
      'Meses de invierno, de diciembre a abril',
      'Inglés',
      'Válida 3 años',
    ],
    specLabels: [undefined, 'Duración', 'Participantes', 'Ubicación', 'Temporada', 'Idioma del guía', 'Tarjeta regalo'],
  },
  'midnight-sun-canoe-rovaniemi': {
    name: 'Paseo en canoa bajo el sol de medianoche para dos, Rovaniemi',
    description:
      'Un paseo guiado en canoa por la tarde-noche cerca de Rovaniemi, con la luz del sol de medianoche, que termina con un tentempié junto a una hoguera. El guía explica lo básico antes de salir, así que no hace falta experiencia. Las salidas son en verano, de junio a agosto.',
    specs: [
      'Paseo guiado en canoa para dos con el equipo, instrucciones de remo y de seguridad, un tentempié junto al fuego y transporte en un radio de 10 km de Rovaniemi',
      'Unas 3 horas',
      '2 personas',
      'Rovaniemi. El lugar exacto se confirma al reservar',
      'Meses de verano, de junio a agosto',
      'Inglés',
      'Válida 3 años',
    ],
    specLabels: [undefined, 'Duración', 'Participantes', 'Ubicación', 'Temporada', 'Idioma del guía', 'Tarjeta regalo'],
  },
  'halti-snowmobile-kilpisjarvi': {
    name: 'En moto de nieve a la cima del Halti para dos, Kilpisjärvi',
    description:
      'El Halti es el punto más alto de Finlandia, justo en la frontera con Noruega. Esta excursión guiada en moto de nieve desde Kilpisjärvi cruza la zona salvaje de Käsivarsi hasta el hito fronterizo 303B, unos 110 km en total, y en la cima se puede firmar el libro de visitas del Halti. La salida es de 10 a 16 h, y se exige experiencia previa conduciendo moto de nieve.',
    specs: [
      'Excursión guiada en moto de nieve de unos 110 km para dos, ropa de moto de nieve (mono, botas, casco), zumo caliente y un dulce, permiso de pista, IVA y seguros',
      'Unas 6 horas',
      '2 personas',
      'Kilpisjärvi',
      'Del 1 de marzo al 10 de mayo, si el tiempo lo permite',
      '18 años para conducir, 8 años en el trineo. Se exige experiencia previa',
      'Válida 3 años',
    ],
    specLabels: [undefined, 'Duración', 'Participantes', 'Ubicación', 'Temporada', 'Límite de edad', 'Tarjeta regalo'],
  },
  'fell-ice-fishing-kilpisjarvi': {
    name: 'Pesca en el hielo en las montañas para dos, Kilpisjärvi',
    description:
      'Un guía os lleva en moto de nieve a las montañas cerca de Kilpisjärvi, unos 15 km en total, donde se pesca por un agujero en el hielo sentados sobre una piel de reno. Pueden picar salvelinos o truchas, y el equipo de pesca está incluido. La salida es de 11:15 a 14:15 h.',
    specs: [
      'Excursión guiada de unos 15 km para dos, ropa de moto de nieve (mono, botas, casco), equipo de pesca, zumo caliente y un dulce, IVA y seguros',
      'Unas 3 horas',
      '2 personas',
      'Kilpisjärvi',
      'Del 20 de noviembre al 10 de mayo, si el tiempo lo permite',
      '18 años para conducir, 8 años en el trineo',
      'Válida 3 años',
    ],
    specLabels: [undefined, 'Duración', 'Participantes', 'Ubicación', 'Temporada', 'Límite de edad', 'Tarjeta regalo'],
  },
  'wilderness-cabin-ivalo': {
    name: 'Dos noches con pensión completa en cabaña para dos, Ivalo',
    description:
      'Dos noches para dos en una cabaña a orillas del río Ivalojoki, junto a la zona salvaje de Hammastunturi, con sauna propia en la orilla. Todas las comidas, de la cena del día de llegada al almuerzo del día de salida, están incluidas y se preparan con productos de Laponia como reno, pescado y bayas. También están incluidos el traslado desde Ivalo y la vuelta. De lunes a viernes, de mediados de junio a finales de octubre.',
    specs: [
      '2 noches para dos en una cabaña en plena naturaleza, uso libre de una sauna aparte en la orilla, pensión completa con café de la tarde junto al fuego y traslado desde el centro o el aeropuerto de Ivalo y vuelta',
      '2 noches',
      '2 personas',
      'A orillas del río Ivalojoki. El lugar exacto se confirma al reservar',
      'De lunes a viernes, del 15 de junio al 30 de octubre',
      'Finés e inglés',
      'Válida 3 años',
    ],
    specLabels: [undefined, 'Duración', 'Participantes', 'Ubicación', 'Temporada', 'Idioma', 'Tarjeta regalo'],
  },
  'katka-snowmobile-levi': {
    name: 'Safari en moto de nieve por la zona salvaje de Kätkä, Levi',
    description:
      'Un safari en moto de nieve de unos 30 km desde Levi hasta la zona salvaje del Kätkätunturi. La parada es en Hanhipirtti, un café en plena naturaleza instalado en una vieja cabaña llena de objetos retro, antes de volver a Levi. No hace falta experiencia previa, y la tarjeta regalo es para una persona de 13 años o más.',
    specs: [
      'Safari guiado en moto de nieve de unos 30 km para una persona, con parada en el café Hanhipirtti. Incluye ropa de invierno',
      'De 2 a 3 horas',
      '1 persona de 13 años o más',
      'Levi. Salida desde Leviraitti 13, Sirkka',
      'Invierno, de diciembre a marzo',
      'Inglés y finés',
      'Válida 3 años',
    ],
    specLabels: [undefined, 'Duración', 'Participantes', 'Ubicación', 'Temporada', 'Idioma', 'Tarjeta regalo'],
  },
  'foodin-six-mushroom-blend': {
    name: 'Foodin mezcla de seis setas 40 g',
    description:
      'Chaga, reishi, melena de león, cordyceps, shiitake y maitake en un solo bote, molidos para café o batidos. Un bote cubre toda la estantería de setas funcionales.',
    specs: ['40 g', 'Chaga, reishi, melena de león, cordyceps, shiitake, maitake'],
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
    name: 'Gorro de punto grueso de Pequeña My',
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
      'Calcetines celestes de canalé con Moomintroll bordado dentro de un corazón rosa en la espinilla, bordado y no estampado, así que aguanta los lavados. Una talla cubre del EU 36 al 42.',
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
    name: 'Bolsa de tela Mauri Kunnas El Kalevala de los perros',
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
    name: 'Juego de funda nórdica Moomin 150 x 210 cm, Sydänkäpyset',
    description:
      'Juego de cama de algodón con certificación GOTS, con Moomintroll y la Señorita Snork. El nombre finlandés del estampado, Sydänkäpyset, describe justamente la relación que el dibujo muestra.',
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
  'fl-taistelevat-metsot': {
    name: 'Juego de funda nórdica de satén Taistelevat metsot, cama doble',
    description:
      'Ferdinand von Wright pintó los urogallos en combate en 1886 y se convirtió en uno de los cuadros que todo finlandés sabe nombrar. Finlayson lo estampa en algodón satén, en digital para que los colores se mantengan, con el reverso liso y el estampado en ambas caras de las fundas de almohada.',
    specs: [
      'Algodón satén',
      'Cama doble',
      'Ferdinand von Wright, Taistelevat metsot (Urogallos en combate), 1886',
    ],
    specLabels: [undefined, undefined, 'Obra'],
  },
  'fl-lino-linen-duvet-set': {
    name: 'Juego de funda nórdica de lino Lino',
    description:
      'Lino lavado con borde bordado, en verde liquen o marrón brea. El lino pesa y cae más rígido que el algodón, y se suaviza con cada lavado en lugar de desgastarse.',
    specs: [
      'Lino',
      '240 × 210 + 50 × 60 cm o 150 × 210 + 50 × 60 cm',
      'Verde liquen o marrón brea',
    ],
    specLabels: [undefined, undefined, 'Colores'],
  },
  'fl-elefantti-duvet-set': {
    name: 'Juego de funda nórdica Elefantti, verde oscuro',
    description:
      'Laina Koskela dibujó Elefantti en 1969 para un concurso de diseño que Finlayson organizó con el Instituto de Artes Industriales, y desde entonces sigue en producción. Percal de algodón de 152 hilos por pulgada, por eso resulta fresco al tacto más que suave.',
    specs: [
      'Percal de algodón, 152 TC',
      '240 × 210 + 50 × 60 cm',
      'Laina Koskela, 1969',
    ],
    specLabels: [undefined, undefined, 'Diseño'],
  },
  'fl-reino-bath-towel': {
    name: 'Toalla de baño Reino 80 × 160 cm',
    description:
      'Algodón orgánico con certificación GOTS, tejido con un hilo retorcido fino para que seque rápido en vez de quedarse húmedo en el gancho. Tamaño de toalla de baño completa, en marrón o rosa.',
    specs: [
      '80 × 160 cm',
      '100 % algodón orgánico, certificado GOTS',
      'Marrón o rosa',
    ],
    specLabels: [undefined, undefined, 'Colores'],
  },
  // katalogin täydennys 2026-09-05
  'makia-kontio-hoodie': {
    name: 'Sudadera con capucha Makia Kontio',
    description:
      'Sudadera con capucha de corte regular en algodón orgánico al 100 por ciento, teñida después de la confección. El teñido en prenda da un color más profundo y un tacto más suave que el teñido en hilo, y el tono conserva su aire ligeramente desgastado lavado tras lavado.',
    specs: [
      '100 % algodón orgánico, teñido en prenda',
      'S a XXL',
    ],
  },
  'makia-trademark-hoodie': {
    name: 'Sudadera con capucha Makia Trademark',
    description:
      'La sudadera más sobria de Makia: corte regular, algodón orgánico al 100 por ciento y la pequeña marca en el pecho. La de llevar a una semana de cabaña, donde la misma sudadera va del fuego de la mañana al porche de la sauna por la noche.',
    specs: [
      '100 % algodón orgánico',
      'S a XXL',
    ],
  },
  'makia-moray-zip-knit': {
    name: 'Chaqueta de punto con cremallera Makia Moray',
    description:
      'Chaqueta de punto con cremallera y corte regular, tejida en lana merina al 100 por ciento. La merina abriga sin abultar y seca desde dentro, así que sirve de capa bajo la chaqueta impermeable en una caminata por los fjells y sola en una cafetería caldeada.',
    specs: [
      '100 % lana merina',
      'S a XXL',
    ],
  },
  'makia-form-jacket': {
    name: 'Chaqueta de invierno Makia Form',
    description:
      'Chaqueta larga de invierno de corte regular con aislamiento de poliéster reciclado. Un puño elástico oculto dentro de la manga cierra la muñeca contra el viento, y eso importa más en una calle de Rovaniemi en enero que cualquier lista de características.',
    specs: [
      'Aislamiento de poliéster reciclado, puños elásticos ocultos',
      'S a XXL',
    ],
  },
  'makia-martin-beanie': {
    name: 'Gorro de merino Makia Martin',
    description:
      'Gorro de lana merina al 100 por ciento con un pequeño parche, tejido en Finlandia. La entrada más barata a Makia y la prenda con más probabilidades de usarse a diario de octubre a abril.',
    specs: [
      '100 % lana merina',
      'Fabricado en Finlandia',
      'Talla única',
    ],
  },
  'makia-mari-balaclava': {
    name: 'Pasamontañas de punto Makia Mari',
    description:
      'Pasamontañas de punto en una mezcla de lana, poliéster, alpaca y elastano. Cubre orejas, cuello y mejillas a la vez, que es la diferencia entre un paseo en moto de nieve y un paseo en moto de nieve que se recuerda por el motivo equivocado.',
    specs: [
      'Mezcla de lana, poliéster, alpaca y elastano',
      'Talla única',
    ],
  },
  'halti-pehmee-merino-beanie': {
    name: 'Gorro de merino Halti Pehmee',
    description:
      'Gorro urbano de lana merina al 100 por ciento con doble vuelta de canalé, fabricado en Finlandia. Halti lo llama Pehmee, suave, y es el gorro para los días en que un gorro de esquí parecería una salida equivocada.',
    specs: [
      '100 % lana merina',
      'Fabricado en Finlandia',
      'Secar en plano',
      'Talla única',
    ],
  },
  'halti-rockmoon-fleece-hoodie': {
    name: 'Forro polar con capucha Halti Rockmoon, hombre',
    description:
      'Forro polar cálido con capucha en tejido elástico cepillado por ambas caras, con microtejido cortavientos en capucha y hombros, por donde entra primero el frío. Bajo una chaqueta impermeable en el fjell, solo alrededor de la cabaña.',
    specs: [
      'Forro polar elástico cepillado por ambas caras, microtejido cortavientos en capucha y hombros',
      'S a XXXL',
    ],
  },
  'halti-viiri-fleece-gloves': {
    name: 'Guantes de forro polar Halti Viiri',
    description:
      'Guantes ligeros de 45 gramos en forro polar cortavientos Stormwall, con estampado de silicona antideslizante en la palma y puntas táctiles en pulgar e índice, para hacer la foto de la aurora sin las manos desnudas.',
    specs: [
      'Forro polar Stormwall 100 % poliéster, palma 65 % poliéster, 32 % poliamida, 3 % elastano',
      '45 g',
      'Pulgar e índice',
      'Lavado delicado a 30 °C como máximo',
    ],
    specLabels: [undefined, undefined, 'Pantalla táctil', undefined],
  },
  'nb-moomin-classics-beanie': {
    name: 'Gorro Moomin Classics',
    description:
      'Gorro de adulto de la colección Moomin Classics en poliéster reciclado y acrílico, beige, talla única. Un producto Moomin oficial, y esa es la línea que lo separa de la versión del puesto de mercado.',
    specs: [
      'Poliéster reciclado y acrílico',
      'Adulto, talla única',
      'Beige',
    ],
  },
  'nb-snufkin-mens-socks': {
    name: 'Calcetines de hombre Snufkin',
    description:
      'Calcetines de hombre con Snufkin, EU 40 a 45, algodón al 60 por ciento con poliéster, nailon y elastano para la elasticidad. El regalo Moomin más barato de esta web que se usa en vez de exhibirse.',
    specs: [
      'EU 40-45',
      '60 % algodón, 33 % poliéster, 4 % nailon, 2 % elastano, 1 % elastodieno',
    ],
  },
  'nb-hattifatteners-retro-socks': {
    name: 'Calcetines retro de mujer Hattifatteners',
    description:
      'Calcetines de estilo retro con los Hattifatteners, EU 36 a 42, algodón al 67 por ciento. Lo bastante elásticos para que una talla sirva a la mayoría, y lo primero que coge una lectora de los Moomin con el cajón de calcetines abierto.',
    specs: [
      'EU 36-42',
      '67 % algodón, 25 % poliéster, 4 % elastodieno, 3 % nailon, 1 % elastano',
    ],
  },
  'sk-suomi-propeller-cap': {
    name: 'Gorra de hélice de aficionado Suomi',
    description:
      'Gorra de hélice azul y blanca para la grada, la zona de aficionados y la final de hockey sobre hielo en el pub. No es un sombrero serio, y ese es exactamente el punto en una noche en que juega Finlandia.',
    specs: [
      'Azul y blanco',
    ],
  },
  'sk-muurla-moomin-lantern-tahtihetki': {
    name: 'Farol Moomin Muurla Tähtihetki 18 cm',
    description:
      'Farol de vidrio sin plomo hecho a mano de la serie Tähtihetki de Muurla con detalles dorados, 15,5 cm de diámetro y 18 cm de alto. Sirve como farol para velas, cuenco para los dulces de temporada o jarrón para un ramo pequeño.',
    specs: [
      'Ø 15,5 cm, altura 18 cm',
      'Vidrio sin plomo hecho a mano',
      'Lavar a mano',
    ],
  },
  'sk-hukka-soapstone-candle': {
    name: 'Portavelas de piedra Hukka Jätkänkynttilä',
    description:
      'Portavelas de piedra con forma de jätkänkynttilä, el tronco partido que los leñadores encendían sobre la nieve. 56 mm de diámetro, 100 mm de alto, 310 gramos, para una vela de té de 40 mm. Fuego vivo sobre piedra fría, en interior.',
    specs: [
      'Ø 56 x 100 mm, para una vela de té Ø 40 mm',
      '0,31 kg',
      '1 portavelas',
    ],
  },
  'sk-muurla-moomin-enamel-mug-lumipyry': {
    name: 'Taza esmaltada Moomin Muurla Lumipyry 3,7 dl',
    description:
      'Taza esmaltada de 3,7 dl con núcleo de acero al carbono y doble esmaltado, estampada con la escena de tormenta de nieve Lumipyry. Admite bebidas calientes y frías, va al lavavajillas y a la hoguera, no al microondas.',
    specs: [
      '3,7 dl',
      'Acero al carbono con doble esmaltado',
      'Apta para lavavajillas, no para microondas',
    ],
  },
  'sk-arabia-moomin-pitcher-moominhouse': {
    name: 'Jarra Moomin Arabia 1,0 l, Casa Moomin',
    description:
      'Jarra de un litro de Arabia con la Casa Moomin, la casa redonda con forma de estufa que Papá Moomin construyó él mismo y nunca cierra con llave por la noche. Incluye tapa de cerámica que mantiene los insectos fuera del zumo en una mesa de verano.',
    specs: [
      '1,0 l',
      'Tapa de cerámica incluida',
    ],
    specLabels: [undefined, 'Tapa'],
  },
  'sk-moomin-duvet-set-merella': {
    name: 'Juego de funda nórdica Moomin 140 x 200 cm, Merellä',
    description:
      'Funda nórdica y funda de almohada de algodón con los Moomin en el mar, funda 140 x 200 cm y almohada 50 x 70 cm, cierre de cremallera. Lavar antes del primer uso, como cualquier ropa de cama de algodón estampado.',
    specs: [
      'Funda nórdica 140 x 200 cm, funda de almohada 50 x 70 cm',
      '100 % algodón',
      'Cremallera',
    ],
    specLabels: [undefined, undefined, 'Cierre'],
  },
  'sk-arabia-moomintroll-mini-figurine': {
    name: 'Minifigura Moomintroll Arabia',
    description:
      'Moomintroll de cerámica hecho a mano de unos 6 cm de alto, diseñado por Tuulikki Pietilä en los años 1990 y vendido en su propia caja de regalo. Las figuras se coleccionan por series, lo que convierte una en regalo seguro y dos en costumbre.',
    specs: [
      'Altura unos 6 cm',
      'Cerámica hecha a mano',
      'Tuulikki Pietilä, años 1990',
    ],
    specLabels: [undefined, undefined, 'Diseño'],
  },
  'sk-arabia-snorkmaiden-mini-figurine': {
    name: 'Minifigura Snorkmaiden Arabia',
    description:
      'Snorkmaiden de cerámica hecha a mano de unos 6 cm de alto, de la serie de los años 1990 de Tuulikki Pietilä, en su propia caja de regalo. Junto al Moomintroll, los dos quedan en el alféizar como en las portadas de los libros.',
    specs: [
      'Altura unos 6 cm',
      'Cerámica hecha a mano',
      'Tuulikki Pietilä, años 1990',
    ],
    specLabels: [undefined, undefined, 'Diseño'],
  },
  'sk-lapin-puukko-gift-box': {
    name: 'Cuchillo puukko de Laponia con protector de hoja, caja de regalo',
    description:
      'Puukko al estilo de Laponia con protector de hoja, entregado en caja de regalo. La tienda lo presenta como el cuchillo para excursiones al bosque y tareas cotidianas, y como el tipo de objeto que se hereda en lugar de reemplazarse.',
    specs: [
      'Protector de hoja y caja de regalo',
    ],
    specLabels: ['Incluido'],
  },
  'sk-loimu-sauna-thermometer': {
    name: 'Termómetro de sauna Loimu, abedul',
    description:
      'Termómetro de sauna con marco de abedul y esfera clara. Responde a la única pregunta que hace un invitado antes del primer cazo de agua, y parece pertenecer a una pared de troncos más que al lado de una caldera.',
    specs: [
      'Abedul',
    ],
  },
  'sk-helsingin-villasukkatehdas-wool-socks': {
    name: 'Calcetines de lana Helsingin Villasukkatehdas',
    description:
      'Calcetines de lana cardada de la única fábrica tradicional de calcetines de lana de Finlandia, tejidos en Helsinki con máquinas de los años 1950. Lana al 70 por ciento sin mulesing, hilada en Jämsä y teñida en Kyröskoski, en varias tallas y cuatro colores con nombres de corteza, musgo, liquen y noche.',
    specs: [
      '70 % lana (sin mulesing), 30 % poliamida',
      'Tejidos en Helsinki, lana hilada en Jämsä y teñida en Kyröskoski',
      'Varias tallas, cuatro colores',
    ],
  },
  'sk-halva-salmiakkikalat': {
    name: 'Peces de regaliz salado Halva Salmiakkikalat 230 g',
    description:
      'Caramelos de salmiakki con forma de pez de Halva, 230 gramos, la bolsa que va en cada guantera finlandesa. Mordida firme, regaliz salado intenso, y lo primero que se le da a un visitante que dice querer probar la Finlandia de verdad.',
    specs: [
      '230 g',
    ],
  },
  'sk-kouvolan-lakritsi-500g': {
    name: 'Trozos de regaliz Kouvolan Lakritsi 500 g',
    description:
      'Medio kilo de trozos de regaliz blando de Kouvola, hechos con una receta nacida en 1945 y afinada en 1960 por un especialista inglés en regaliz. Así sabe el regaliz sin más cuando no se añade nada para esconder la raíz.',
    specs: [
      '500 g',
      'De 1945, ajustada en 1960',
    ],
    specLabels: [undefined, 'Receta'],
  },
  'sk-fazer-omar-chocolate-bar': {
    name: 'Tableta de chocolate Fazer Omar 180 g',
    description:
      'Tableta limitada de 180 gramos creada para el 60 aniversario de Omar: el toffee Omar suave y cremoso que se vende desde 1966, dentro del chocolate con leche Fazer con al menos un 30 por ciento de cacao. A la venta solo por tiempo limitado.',
    specs: [
      '180 g',
      'Chocolate con leche con al menos 30 % de cacao',
      'Edición limitada por el 60 aniversario',
    ],
    specLabels: [undefined, 'Cacao', 'Disponibilidad'],
  },
  'sk-fazer-salty-suffeli-puffi': {
    name: 'Tableta de chocolate Karl Fazer Salty Suffeli Puffi 160 g',
    description:
      'El chocolate con leche de Fazer hecho con leche fresca, con crujientes bolitas de maíz Suffeli saladas y dulces. 160 gramos, al menos un 30 por ciento de cacao, y la respuesta para quien no puede decidir entre salado y dulce.',
    specs: [
      '160 g',
      'Chocolate con leche con al menos 30 % de cacao',
    ],
    specLabels: [undefined, 'Cacao'],
  },
  'sk-tyrkisk-peber-chewy': {
    name: 'Pastillas de salmiakki Fazer Tyrkisk Peber Chewy 38 g',
    description:
      'El salmiakki picante de Tyrkisk Peber en una nueva pastilla blanda masticable en lugar de la cáscara dura. Un paquete de bolsillo de 38 gramos, listado por la tienda en agosto de 2026, para quien quiere salmiakki y picante en el mismo bocado.',
    specs: [
      '38 g',
    ],
  },
  'sk-tyrkisk-peber-sour-foams': {
    name: 'Golosinas de espuma Fazer Tyrkisk Peber Sour Foams 150 g',
    description:
      'Caramelos de espuma blandos con el picante suave de Tyrkisk Peber y sabores ácidos de kiwi-fresa y limón-lima, 150 gramos. Una entrada más amable a la familia del regaliz con pimienta, y la bolsa que se abre primero en un grupo variado.',
    specs: [
      '150 g',
    ],
  },
  'sk-marianne-toffee-rae': {
    name: 'Grageas de chocolate Fazer Marianne Toffee 150 g',
    description:
      'La serie de grageas Marianne en versión toffee: una cáscara brillante y crujiente alrededor de un centro de chocolate con leche con al menos un 28 por ciento de cacao, en una bolsa recerrable de 150 gramos. También pensadas para hornear, si alguna sobrevive tanto.',
    specs: [
      '150 g',
      'Chocolate con leche con al menos 28 % de cacao',
      'Bolsa recerrable',
    ],
    specLabels: [undefined, 'Cacao', 'Envase'],
  },
  'sk-fasupala-lakritsi': {
    name: 'Galletas de barquillo Fazer Fasupala Lakritsi 199 g',
    description:
      'Barquillos de un bocado con relleno sabor regaliz bajo una cobertura sabor chocolate con leche, 199 gramos, sin aceite de palma. La versión de regaliz de una galleta que los finlandeses ya comen por cajas, listada por la tienda en agosto de 2026.',
    specs: [
      '199 g',
      'Sin aceite de palma',
    ],
    specLabels: [undefined, 'Grasa'],
  },
  'sk-finnish-flavours-cloudberry-jam': {
    name: 'Mermelada premium de mora de los pantanos Finnish Flavours 250 g',
    description:
      'Mermelada con un 75 por ciento de moras de los pantanos finlandesas y un 20 por ciento de azúcar, 250 gramos. Estas moras maduran en las turberas de Laponia a finales de julio y no se cultivan a gran escala, por eso un tarro cuesta lo que dos bolsas de chocolate.',
    specs: [
      '250 g',
      'Mora de los pantanos finlandesa 75 %, azúcar 20 %',
    ],
  },
  'sk-lapin-liha-smoked-reindeer-soup': {
    name: 'Sopa de reno ahumado Lapin Liha 400 g',
    description:
      'Sopa cremosa con reno ahumado en caliente y en frío, 400 gramos, elaborada por Lapin Liha. Se calienta en una olla; es el sabor de un almuerzo en una cabaña de Laponia, en un envase que cabe en una maleta.',
    specs: [
      '400 g',
      'Reno ahumado en caliente 3 % y reno ahumado en frío 3 %',
      'Calentar en una olla',
    ],
    specLabels: [undefined, undefined, 'Preparación'],
  },
  'sk-vaasan-ruispalat-5pack': {
    name: 'Pan de centeno Vaasan Ruispalat 5 x 330 g',
    description:
      'Cinco bolsas del pan más vendido de Finlandia: panecillos de centeno integral partidos, horneados con masa madre auténtica a partir de cereal finlandés al 100 por ciento, seis por bolsa de 330 gramos, 12 por ciento de fibra. Lo que los finlandeses en el extranjero piden a sus visitas que les traigan.',
    specs: [
      '5 x 330 g, 6 panecillos por bolsa',
      'Centeno integral 87 % del cereal, fibra 12 %',
    ],
  },
  'sk-poikain-parhaat-freeze-dried-blueberry': {
    name: 'Arándanos liofilizados Poikain Parhaat 15 g',
    description:
      'Arándanos silvestres finlandeses enteros, liofilizados y nada más: 15 gramos que no pesan nada en una maleta y saben a agosto en una turbera. Sin lactosa, sin gluten, veganos, sin azúcar añadido ni conservantes.',
    specs: [
      '15 g',
      '100 % arándano finlandés liofilizado',
      'Sin lactosa, sin gluten, vegano, sin azúcar añadido, sin conservantes',
    ],
    specLabels: [undefined, undefined, 'Dieta'],
  },
  'rj-arctic-warriors-blueberry-powder': {
    name: 'Polvo de arándano Arctic Warriors 45 g',
    description:
      'Arándanos finlandeses secados enteros con su jugo y molidos, sin nada añadido, 45 gramos. Una cucharada en las gachas, el yogur o un batido; la misma baya se vende aquí a través de Ruohonjuuri, que envía dentro de la UE.',
    specs: [
      '45 g',
      '100 % arándano finlandés, secado entero con el jugo',
    ],
  },
  'rj-poikain-parhaat-blueberry-lemonade': {
    name: 'Limonada de arándano Poikain Parhaat 0,33 l',
    description:
      'Limonada ecológica de arándano hecha en Vehmainen, Tampere, con ingredientes reales sin aromas ni colorantes artificiales, botella de 0,33 litros. El refresco para poner junto al salmiakki en una mesa de degustación finlandesa.',
    specs: [
      '0,33 l',
      'Hecha en Vehmainen, Tampere',
      'Ecológica, sin aromas ni colorantes artificiales',
    ],
    specLabels: [undefined, undefined, 'Aditivos'],
  },
  'rj-nordic-koivu-birch-sap': {
    name: 'Savia de abedul Nordic Koivu 500 ml',
    description:
      'Savia de abedul extraída en primavera, cuando el árbol sube el agua que almacenó en sus raíces, embotellada directamente del árbol sin tratamiento térmico ni conservantes, 500 ml. Sabe ligeramente dulce y sobre todo a agua fría y limpia.',
    specs: [
      '500 ml',
      'Sin tratamiento térmico, sin conservantes',
    ],
    specLabels: [undefined, 'Procesado'],
  },
  'rj-kaino-spruce-sprout-sparkling-075': {
    name: 'Espumoso ecológico de brotes de abeto KAINO Drinks 0,75 l',
    description:
      'Bebida espumosa ecológica sin alcohol aromatizada con brotes de abeto, los brotes tiernos de mayo del abeto finlandés, en botella de 0,75 litros. Hecha en Vehmainen, Tampere, para el brindis de una fiesta donde no todos beben.',
    specs: [
      '0,75 l',
      'Sin alcohol, ecológica',
      'Hecha en Vehmainen, Tampere',
    ],
    specLabels: [undefined, 'Alcohol', undefined],
  },
  'rj-yrttipaja-chaga-powder': {
    name: 'Polvo de chaga Yrttipaja 35 g',
    description:
      'Chaga molido, el hongo negro que crece en los troncos de abedul, para preparar como té: una cucharada por litro de agua, hervir a fuego lento al menos diez minutos y colar. 35 gramos, la forma más barata de probar el pakuri antes de comprar trozos.',
    specs: [
      '35 g',
      '1 cucharada por litro de agua, hervir a fuego lento al menos 10 minutos y colar',
    ],
    specLabels: [undefined, 'Uso'],
  },
  'rj-forestly-mushroom-chips-chili': {
    name: 'Chips de setas Forestly Foods, chile 50 g',
    description:
      'Chips crujientes de shiitake de cultivo ecológico, cocinados con suavidad y sazonados con chile, sal y pimienta, 50 gramos. Umami en bolsa, para el sofá o desmenuzados sobre una sopa.',
    specs: [
      '50 g',
      'Shiitake de cultivo ecológico, chile, sal y pimienta',
    ],
  },
  // katalogin täydennys 2026-09-05
  'sk-muurla-moomin-80v-tray': {
    name: 'Bandeja Moomin 80 años Muurla 27 x 20 cm',
    description:
      'Bandeja de 27 x 20 cm de la serie Moomin 80 años de Muurla, apta para lavavajillas. El tamaño que lleva dos tazas y un plato de galletas de la cocina al sofá y que, una vez allí, parece parte de la mesa.',
    specs: [
      '27 x 20 cm',
      'Apta para lavavajillas',
    ],
  },
  'sk-muurla-moomin-glass-box-yhdessa': {
    name: 'Caja de cristal Moomin Muurla Yhdessä 11,5 cm',
    description:
      'Caja de cristal en forma de corazón de la miniserie Yhdessä, juntos, de Muurla, 11,5 x 10 x 5,5 cm, lavado a mano, entregada en su caja de venta. Pensada para los pequeños tesoros: anillos, una nota doblada, un primer diente.',
    specs: [
      '11,5 x 10 x 5,5 cm',
      'Lavar a mano',
      'Caja de venta',
    ],
    specLabels: [undefined, undefined, 'Envase'],
  },
  // katalogin täydennys 2026-09-05
  'sk-aurora-borealis-reindeer-tealight': {
    name: 'Portavelas reno Aurora Borealis 10 cm',
    description:
      'Portavelas de metal pulido con forma de reno, 10 cm de alto. El pequeño objeto de Laponia para el alféizar en diciembre, tan ligero que viaja en un sobre acolchado.',
    specs: [
      'Altura 10 cm',
      'Metal pulido',
      'Vela de té',
    ],
    specLabels: [undefined, undefined, 'Para'],
  },
  'sk-muurla-moomin-bottle-05l-marjat': {
    name: 'Botella de vidrio Moomin Muurla 0,5 l, Bayas',
    description:
      'Botella de medio litro de vidrio sódico con tapón mecánico hermético y el estampado Bayas, apta para lavavajillas. Muurla las hace para zumo y aliño, y el medio litro cabe en la puerta de la nevera.',
    specs: [
      '0,5 l',
      'Vidrio sódico, tapón mecánico',
      'Apta para lavavajillas',
    ],
  },
  'nb-hattifatteners-cushion': {
    name: 'Cojín Hattifatteners',
    description:
      'Cojín de poliéster con forma de fila de Hattifatteners, 45 a 75 x 30 a 50 x 10 cm, solo lavado a mano. Llega envasado al vacío y tarda un día en recuperar su forma, el único momento en que los Hattifatteners se están quietos.',
    specs: [
      'Poliéster',
      '45–75 x 30–50 x 10 cm',
      'Solo lavado a mano',
      'Envasado al vacío, recupera su forma al desembalarlo',
    ],
    specLabels: [undefined, undefined, undefined, 'Envase'],
  },
  'sk-emendo-moomin-sauna-seat-cover': {
    name: 'Toalla de banco de sauna Emendo Moomin Amor 150 x 50 cm, marrón',
    description:
      'Toalla de banco de sauna de lino y algodón, 150 x 50 cm, con los dibujos originales de Tove Jansson, producto con licencia oficial. El lino absorbe la humedad y aguanta lavados duros, así que va sobre el banco o de pie tras la espalda.',
    specs: [
      '150 x 50 cm',
      'Lino 60 %, algodón 40 %',
      'Producto oficial Moomin Characters',
    ],
    specLabels: [undefined, undefined, 'Licencia'],
  },
  'sk-rento-pino-sauna-seat-cover': {
    name: 'Toalla de banco de sauna Rento Pino 50 x 150 cm, gris',
    description:
      'Toalla de banco de sauna de algodón tejido jacquard, 50 x 150 cm, diseñada por Anna Säteri para Rento. El algodón ligero se siente fresco en el banco caliente, absorbe el sudor, seca rápido, y el dibujo sobrevive al lavado.',
    specs: [
      '50 x 150 cm',
      'Algodón tejido jacquard',
      'Anna Säteri',
    ],
    specLabels: [undefined, undefined, 'Diseño'],
  },
  'sk-moomin-chocolate-chip-biscuit-tin': {
    name: 'Galletas con pepitas de chocolate Moomin en lata 200 g',
    description:
      'Mini galletas con pepitas de chocolate, 200 gramos, en una lata Moomin que sobrevive a las galletas como caja de almacenaje. Las pepitas son el 16 por ciento de la galleta y llevan al menos un 40 por ciento de sólidos de cacao.',
    specs: [
      '200 g',
      'Pepitas de chocolate 16 %, al menos 40 % de sólidos de cacao en el chocolate',
      'Lata de colección, reutilizable como caja',
    ],
    specLabels: [undefined, undefined, 'Envase'],
  },
  'sk-paulig-cafe-new-york-beans': {
    name: 'Café en grano Paulig Café New York 450 g',
    description:
      'Café en grano de tueste medio oscuro, 450 gramos, arábica latinoamericano con granos brasileños para el dulzor y un toque afrutado. Paulig tuesta café en Finlandia desde 1876, y los finlandeses beben más por cabeza que nadie.',
    specs: [
      '450 g',
      'Tueste medio oscuro, grano entero',
      'Arábica latinoamericano y granos brasileños',
    ],
    specLabels: [undefined, 'Tueste', undefined],
  },
  // katalogin täydennys 2026-09-05
  'rj-korpihilla-spruce-sprout-sparkling-750': {
    name: 'Espumoso de brotes de abeto Korpihilla 750 ml',
    description:
      'Bebida espumosa sin alcohol, hecha a mano con brotes de abeto en la Laponia finlandesa, 750 ml. Elegida mejor bebida de Finlandia en 2005 por la revista Viisi Tähteä, y sigue siendo la botella que se abre cuando el brindis tiene que saber a bosque.',
    specs: [
      '750 ml',
      'Hecha a mano en la Laponia finlandesa',
      'Sin alcohol',
      'Mejor bebida de Finlandia 2005, revista Viisi Tähteä',
    ],
    specLabels: [undefined, undefined, 'Alcohol', 'Premio'],
  },
  // katalogin täydennys 2026-09-05
  'rj-raitaniemi-sea-buckthorn-powder': {
    name: 'Polvo de espino amarillo Marjatila Raitaniemi 100 g',
    description:
      'Espino amarillo secado y molido entero, con semillas, en una granja finlandesa de bayas, 100 gramos. Una cucharadita equivale a un decilitro de bayas frescas, y el polvo se seca hasta un 3 a 5 por ciento de humedad, por eso dura años.',
    specs: [
      '100 g',
      'Espino amarillo, molido entero con las semillas',
      '1 a 3 cucharaditas al día en gachas o yogur',
      '1 cucharadita de polvo equivale a 1 dl de bayas frescas',
    ],
    specLabels: [undefined, undefined, 'Dosis', 'Equivalencia'],
  },
  'rj-raitaniemi-crowberry-powder': {
    name: 'Polvo de camarina Marjatila Raitaniemi 100 g',
    description:
      'Camarina finlandesa silvestre, secada entera y molida, sin nada añadido, 100 gramos. La camarina es la baya negra que tapiza las laderas de los fjells de Laponia y rara vez llega a una tienda, así que esto es lo más cerca que la mayoría estará de probarla.',
    specs: [
      '100 g',
      '100 % camarina finlandesa, secada y molida entera',
      'Ninguno, sin conservantes',
    ],
    specLabels: [undefined, undefined, 'Aditivos'],
  },
  // katalogin täydennys 2026-09-05
  // katalogin täydennys 2026-09-05
  'sk-poikain-parhaat-puolukka': {
    name: 'Arándanos rojos liofilizados Poikain Parhaat 15 g',
    description:
      'Arándanos rojos finlandeses enteros, liofilizados y nada más, 15 gramos. La liofilización conserva el color, la textura, las vitaminas y la fibra, y la bolsa no pesa nada en una maleta. Sin lactosa, sin gluten, veganos, sin azúcar añadido ni conservantes.',
    specs: [
      '15 g',
      '100 % arándano rojo finlandés liofilizado',
      'Sin lactosa, sin gluten, vegano, sin azúcar añadido, sin conservantes',
    ],
    specLabels: [undefined, undefined, 'Dieta'],
  },
  // Talvi- ja joulutuotteet 6.11.2026
  'iittala-glass-baubles-red': {
    name: 'Esferas navideñas de vidrio Iittala 80 mm, rojas, 5 uds.',
    description:
      'Un set de 5 esferas navideñas rojas de vidrio soplado a boca de Iittala, de 80 mm de diámetro cada una, que se cuelgan de una cinta de seda. Cada esfera está soplada a boca, así que la forma y el tono de rojo varían un poco de una a otra. Se pueden colgar en el árbol o en una rama dentro de un florero, o usar en un centro de mesa.',
    specs: [
      '5 esferas',
      'Diámetro 8 cm',
      'Vidrio soplado a boca',
      'Rojo',
      '0,706 kg bruto',
      '32741-01, EAN 6411923679978',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, 'Referencia y EAN'],
  },
  'iittala-toikka-annual-bird-2026': {
    name: 'Pájaro del año Iittala Birds by Toikka 2026, Lakla',
    description:
      'Lakla es el pájaro del año 2026 de la serie Birds by Toikka de Iittala, un pájaro naranja de vidrio soplado a boca diseñado por Oiva Toikka. Cada año Iittala lanza un nuevo pájaro del año con su propio diseño y su propia combinación de colores, y estos pájaros se han hecho populares entre los coleccionistas. Cada pájaro es soplado por los vidrieros de la fábrica de Iittala en Finlandia, por lo que pueden aparecer pequeñas burbujas de aire y diferencias de grosor.',
    specs: [
      'Longitud 22 cm, anchura 10 cm, altura 14 cm',
      'Vidrio soplado a boca',
      'Naranja',
      'Fabricado en la fábrica de vidrio de Iittala en Finlandia',
      'Limpiar con un paño húmedo',
      '657373-01, EAN 6411923689199',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, 'Referencia y EAN'],
  },
  'marimekko-siirtolapuutarha-baubles': {
    name: 'Esferas navideñas Marimekko Siirtolapuutarha 2025, 2 uds.',
    description:
      'Las bolas Siirtolapuutarha 2025 de Marimekko son dos esferas navideñas de gres con el estampado de Maija Louekari en blanco, negro y verde. Siirtolapuutarha significa «huerto urbano» en finlandés. Cada bola mide 7 cm de ancho y 7 cm de alto, y Marimekko propone colgarlas también en una ventana, no solo en el árbol.',
    specs: [
      '2 esferas',
      'Anchura 7 cm, altura 7 cm',
      'Gres',
      'Blanco, negro y verde',
      'Maija Louekari',
      '650181-01, EAN 6411255039983',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Diseñadora', 'Referencia y EAN'],
  },
  'arabia-moomin-love-baubles': {
    name: 'Esferas navideñas Arabia Moomin Love, doradas, 5 cm, 2 uds.',
    description:
      'Dos esferas navideñas Moomin de 5 cm en vitroporcelana de Arabia, con el motivo Love («amor») de Tove Jansson. El motivo muestra a Moomintroll y a la Señorita Snork, y se ha convertido en símbolo del amor y de las relaciones cercanas. Se pueden colgar en el árbol o en una rama decorativa, o usar para decorar una mesa de fiesta.',
    specs: [
      '2 esferas',
      'Anchura 5 cm, altura 5 cm',
      'Vitroporcelana',
      'Dorado',
      'Tove Jansson',
      '699561-01, EAN 6411801029079',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Ilustración', 'Referencia y EAN'],
  },
  'sk-muurla-moomin-bauble-pyjamas': {
    name: 'Esfera navideña de vidrio Moomin Muurla 9 cm, Pyjamat',
    description:
      'Una esfera navideña de vidrio hecha a mano de la gama Moomin de Muurla, de 9 cm de diámetro, con el motivo Pyjamat («pijamas»). Muurla describe la escena como un rato de descanso en pijama a la luz de las velas, y el paquete incluye una cinta de raso para colgarla.',
    specs: [
      'Diámetro 9 cm',
      'Vidrio, hecho a mano',
      'Cinta de raso incluida',
    ],
    specLabels: [undefined, undefined, 'Para colgar'],
  },
  'sk-muurla-moomin-baubles-snow': {
    name: 'Esferas navideñas Moomin Muurla 5 cm, Lumipyry, 4 uds.',
    description:
      'Un paquete de 4 esferas navideñas Moomin de Muurla, de 5 cm de diámetro, con el motivo Lumipyry («tormenta de nieve») y cintas de raso para colgarlas. Muurla sitúa la escena justo después de una tormenta de nieve, con grandes montones de nieve, un paisaje dormido y farolillos de nieve todavía por construir.',
    specs: [
      'Diámetro 5 cm',
      '4 esferas, cintas de raso incluidas',
    ],
  },
  'sk-muurla-moomin-led-ball': {
    name: 'Esfera LED de vidrio Moomin Muurla 11 cm, Tähtihetki',
    description:
      'Una esfera decorativa de vidrio de la gama Moomin Tähtihetki de Muurla, de 11 cm de diámetro, con una tira de 10 luces LED en su interior. Tiene interruptor de encendido y apagado, funciona con pilas de botón de litio CR2032, que no se incluyen, y es solo para uso en interiores. La gama Tähtihetki tiene detalles dorados, y el paquete incluye una cinta de raso para colgarla.',
    specs: [
      'Diámetro 11 cm',
      'Vidrio, tira de luces LED con 10 LED',
      'Pilas de botón de litio CR2032, no incluidas. Interruptor de encendido y apagado',
      'Solo para interiores. Con certificación CE',
      'Diseñado en Finlandia',
    ],
    specLabels: [undefined, undefined, 'Alimentación', 'Uso', 'Diseño'],
  },
  'sk-muurla-moomin-led-candle-tree': {
    name: 'Vela LED Moomin Muurla 12,5 cm, Kuusen alla',
    description:
      'Una vela LED a pilas de la gama Moomin Originals de Muurla, de 12,5 cm de alto, con una ilustración del libro de Tove Jansson Farlig midsommar. El nombre finlandés del modelo, Kuusen alla, significa «bajo el abeto». Es de cera de parafina y está moldeada para parecer una vela de estearina de verdad, y su luz de tono cálido realza la ilustración. Tiene modos de encendido, apagado y temporizador de 6 horas, funciona con 2 pilas AA que no se incluyen y es solo para uso en interiores.',
    specs: [
      'Diámetro 10 cm, altura 12,5 cm',
      'Cera de parafina',
      '2 x pilas AA, no incluidas',
      'Encendido, apagado y temporizador de 6 horas',
      'Solo para interiores',
      'Tove Jansson, del libro Farlig midsommar',
    ],
    specLabels: [undefined, undefined, 'Alimentación', 'Funciones', 'Uso', 'Ilustración'],
  },
  'arabia-moomin-plates-winter-night': {
    name: '2 platos Arabia Moomin 19 cm, Office & Winter Night',
    description:
      'Dos platos Moomin de 19 cm de Arabia en vitroporcelana blanca, Office y Winter Night, pensados para acompañar a las tazas que salieron antes. La imagen de Office («oficina») apareció por primera vez en una taza Moomin de Arabia en 1996 y se basa en tiras cómicas en las que se repiten la escritura, el dibujo y la pintura. Winter Night («noche de invierno») repite la imagen de una taza de 2006, con Moomintroll sentado en la barandilla de un puente en una escena de Trollvinter, el libro de Tove Jansson de 1957.',
    specs: [
      'Diámetro 19,4 cm, altura 2,8 cm',
      'Vitroporcelana',
      '2 platos, Office y Winter Night',
      'Aptos para lavavajillas, microondas y horno',
      'Tove Jansson',
      '566802-01, EAN 6411801011432',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Ilustración', 'Referencia y EAN'],
  },
  'arabia-moomin-plates-winter-fire': {
    name: '2 platos Arabia Moomin 19 cm, Winter Bonfire & Sailing',
    description:
      'Dos platos Moomin de 19 cm de Arabia en vitroporcelana, uno con la imagen Winter Bonfire («hoguera de invierno») y otro con Sailing («navegando»). Los dos llevan ilustraciones de Tove Jansson. El par combina una escena de invierno con una de navegación y está pensado tanto para las comidas de diario como para las de fiesta.',
    specs: [
      '2 platos, Winter Bonfire y Sailing',
      'Vitroporcelana',
      'Multicolor',
      '0,886 kg bruto',
      'Tove Jansson',
      '629239-01, EAN 6411801015065',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Ilustración', 'Referencia y EAN'],
  },
  'sk-muurla-moomin-snowfall-mug': {
    name: 'Taza esmaltada Moomin Muurla 2,5 dl, Lumisade',
    description:
      'Taza esmaltada Moomin de Muurla de 2,5 dl con el motivo Lumisade («nevada»), la primera nieve en el valle de los Moomin y la hora de jugar con ella. Muurla fabrica sus piezas esmaltadas sobre un núcleo de acero al carbono con dos capas de esmalte, así que la taza sirve para la mesa y también para una excursión, la cabaña o un barco. Admite bebidas calientes y frías y es apta para lavavajillas, pero no para microondas.',
    specs: [
      '2,5 dl',
      'Acero al carbono, doble esmaltado',
      'Apta para lavavajillas. No apta para microondas',
    ],
  },
  'sk-muurla-moomin-gifts-mug': {
    name: 'Taza esmaltada Moomin Muurla 3,7 dl, Lahjat',
    description:
      'Una taza esmaltada Moomin de Muurla de 3,7 dl con el motivo Lahjat («regalos»), una imagen navideña sobre hacer regalos a los seres queridos. Bajo el esmalte hay un núcleo de acero al carbono con doble capa, lo que hace la taza lo bastante resistente para usarla al aire libre además de en la mesa. Admite bebidas calientes y frías y va al lavavajillas, pero no al microondas.',
    specs: [
      '3,7 dl',
      'Acero al carbono, doble esmaltado',
      'Apta para lavavajillas. No apta para microondas',
    ],
  },
  'rj-pesonen-beeswax-candle': {
    name: 'Vela de mesa de cera de abeja Pesosen Mehiläistarhat, grande',
    description:
      'Pesosen Mehiläistarhat hace a mano esta vela de mesa grande con cera de abeja, que también le da su color y su aroma. Esa, del apiario, lleva 29 años trabajando con abejas, 13 de ellos como profesional, y las colmenas están entre campos, bosques y pequeños cursos de agua en la zona de Sastamala y Hämeenkyrö. El apiario hace sus velas con lo que producen sus propias colmenas, y arden mucho tiempo con una llama brillante y constante.',
    specs: [
      'Cera de abeja',
      'Grande',
      'Hecha a mano',
      'Sastamala y Hämeenkyrö',
    ],
    specLabels: [undefined, undefined, 'Fabricación', 'Apiarios'],
  },
  'rj-pesonen-honeycomb-candle': {
    name: 'Vela de panal Pesosen Mehiläistarhat, cera de abeja, grande',
    description:
      'Una vela de panal grande hecha a mano con cera de abeja por Pesosen Mehiläistarhat, con una duración de 30 horas. El color y el aroma vienen de la cera, y el apiario hace sus velas con lo que producen sus propias colmenas en la zona de Sastamala y Hämeenkyrö. Esa, del apiario, lleva 29 años trabajando con abejas y 13 cuidándolas como profesional.',
    specs: [
      'Cera de abeja',
      'Grande',
      '30 h',
      'Hecha a mano',
      'Sastamala y Hämeenkyrö',
    ],
    specLabels: [undefined, undefined, 'Tiempo de combustión', 'Fabricación', 'Apiarios'],
  },
  'sk-moomin-mistletoe-candle': {
    name: 'Vela de mesa Moomin Havi 7 x 12 cm, Misteli, beige',
    description:
      'Una vela de mesa Moomin beige de Havi con el diseño Misteli («muérdago»), de 7 x 12 cm y con 55 horas de combustión. El diseño está impreso en la vela por serigrafía.',
    specs: [
      '7 x 12 cm',
      'Beige',
      '55 h',
      'Serigrafiada',
      'Havi Oy, Riihimäki',
    ],
    specLabels: [undefined, undefined, 'Tiempo de combustión', 'Decoración', 'Comercializado por'],
  },
  'iittala-kastehelmi-tealight': {
    name: 'Portavelas tealight Iittala Kastehelmi 64 mm, transparente',
    description:
      'Un portavelas tealight Kastehelmi de Iittala en vidrio transparente, de 64 mm de diámetro, de la serie que Oiva Toikka diseñó para Iittala en 1964. Kastehelmi significa «gota de rocío» en finlandés, e Iittala relanzó la serie en 2010. El portavelas también se fabrica en otros colores, e Iittala propone usarlo solo o en grupo, combinando colores distintos.',
    specs: [
      'Diámetro 6,4 cm',
      'Vidrio',
      'Transparente',
      'Lavar solo a mano',
      'Oiva Toikka, Iittala Kastehelmi',
      '13167-01, EAN 6411920059766',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Diseñador y colección', 'Referencia y EAN'],
  },
  'sk-fazer-christmas-box': {
    name: 'Caja navideña Fazer 2026',
    description:
      'La caja navideña de Fazer para 2026 trae 6 paquetes de chocolates, golosinas y galletas de jengibre de temporada. Contiene bombones Karl Fazer, una barra de chocolate Karl Fazer con galleta de jengibre, Remix Xmas + Choco, toffees Dumle Winter Mix, gomitas de pera Vihreät kuulat y galletas de jengibre Marianne con chocolate y menta.',
    specs: [
      'Bombones Karl Fazer 250 g, barra de chocolate Karl Fazer con galleta de jengibre 200 g, mezcla de golosinas Remix Xmas + Choco 300 g, mezcla de toffees Dumle Winter Mix 180 g, gomitas de pera Vihreät kuulat 260 g, galletas de jengibre Marianne con chocolate y menta 175 g',
      'Chocolate con leche con un mínimo de 30 % de cacao',
      'Contiene trigo (gluten), soja y leche (lactosa). Puede contener centeno, cebada, avena, huevo, frutos secos y almendras',
      'Energía 1845 kJ / 441 kcal, grasas 17 g de las cuales saturadas 9,4 g, carbohidratos 67 g de los cuales azúcares 53 g, proteínas 4,6 g, sal 0,36 g',
    ],
    specLabels: [undefined, 'Indicaciones de la etiqueta', 'Alérgenos', 'Información nutricional por 100 g'],
  },
  'sk-karl-fazer-advent-calendar': {
    name: 'Calendario de Adviento Karl Fazer 200 g',
    description:
      'Un calendario de Adviento Karl Fazer con 200 g de bombones de varios sabores detrás de sus ventanitas. La última ventanita está llena de Fazer Blue, el chocolate con leche Karl Fazer que Fazer elabora desde 1922. Fazer obtiene su cacao a través de su programa Fazer Cocoa Vision.',
    specs: [
      '200 g',
      'Bombones de varios sabores, la última ventanita llena de chocolate con leche Fazer Blue',
      'Chocolate con leche con un mínimo de 30 % de cacao',
      'Contiene leche, soja y cebada (gluten). Puede contener frutos secos, almendras, trigo, centeno y avena',
      'Energía 2315 kJ / 554 kcal, grasas 34 g de las cuales saturadas 20 g, carbohidratos 53 g de los cuales azúcares 51 g, proteínas 9,6 g, sal 0,31 g',
    ],
    specLabels: [undefined, undefined, 'Indicaciones de la etiqueta', 'Alérgenos', 'Información nutricional por 100 g'],
  },
  'sk-fazer-christmas-chocolates': {
    name: 'Bombones navideños Fazer Joulusuklaa 295 g',
    description:
      'Bombones Fazer Joulusuklaa de 295 g, con una suave cobertura de chocolate con leche y un relleno de trufa con migas de galleta de jengibre de verdad. Fazer los recomienda para las reuniones navideñas, por ejemplo con glögg, la bebida caliente y especiada de los países nórdicos.',
    specs: [
      '295 g',
      'Cobertura de chocolate con leche, relleno de trufa con migas de galleta de jengibre',
      'Chocolate con leche con un mínimo de 30 % de cacao',
      'Contiene leche, trigo, cebada (gluten) y soja. Puede contener frutos secos, almendras, centeno y avena',
      'Energía 2274 kJ / 545 kcal, grasas 33 g de las cuales saturadas 19 g, carbohidratos 53 g de los cuales azúcares 51 g, proteínas 8,2 g, sal 0,24 g',
    ],
    specLabels: [undefined, undefined, 'Indicaciones de la etiqueta', 'Alérgenos', 'Información nutricional por 100 g'],
  },
  'sk-karl-fazer-gingerbread-bar': {
    name: 'Karl Fazer Winter Edition con galleta de jengibre 200 g',
    description:
      'Una barra Karl Fazer Winter Edition de 200 g que combina chocolate con leche suave y galleta de jengibre crujiente. Fazer elabora el chocolate con leche Karl Fazer desde 1922, y esta barra con galleta de jengibre es su edición navideña.',
    specs: [
      '200 g',
      'Chocolate con leche con galleta de jengibre crujiente',
      'Chocolate con leche con un mínimo de 30 % de cacao',
      'Contiene leche, trigo (gluten) y soja. Puede contener frutos secos, almendras, centeno y avena',
      'Energía 2205 kJ / 527 kcal, grasas 30 g de las cuales saturadas 18 g, carbohidratos 55 g de los cuales azúcares 48 g, proteínas 8,5 g, sal 0,22 g',
    ],
    specLabels: [undefined, undefined, 'Indicaciones de la etiqueta', 'Alérgenos', 'Información nutricional por 100 g'],
  },
  'sk-fazer-glogg-balls': {
    name: 'Gomitas Fazer Glögikuulat 260 g',
    description:
      'Una caja de 260 g de Fazer Glögikuulat, bolitas de gomita blandas y dulces que llevan el nombre del glögg, la bebida caliente y especiada nórdica. No contienen gluten, gelatina ni lactosa y son aptas para veganos. La caja incluye una receta para convertirlas en una bebida caliente.',
    specs: [
      '260 g',
      'Sin gluten, sin gelatina, sin lactosa, vegano',
      'Energía 1353 kJ / 322 kcal, grasas 0 g de las cuales saturadas 0 g, carbohidratos 79 g de los cuales azúcares 64 g, proteínas 0 g, sal 0,28 g',
    ],
    specLabels: [undefined, 'Dieta', 'Información nutricional por 100 g'],
  },
  'sk-halva-christmas-liquorice': {
    name: 'Mezcla navideña de regaliz Halva 250 g',
    description:
      'La mezcla navideña de regaliz de Halva reúne 250 g de regaliz en 3 sabores navideños, en una caja de color oro rosa. Lleva flores de regaliz con sabor a pastel de manzana, regaliz relleno de glögg y regaliz relleno de galleta de jengibre. Halva elabora la mezcla en Pitäjänmäki, en Helsinki.',
    specs: [
      '250 g',
      'Flores de regaliz con sabor a pastel de manzana, regaliz relleno de glögg, regaliz relleno de galleta de jengibre',
      'Elaborado en Pitäjänmäki, Helsinki',
      'Contiene trigo (gluten)',
      'Energía 1419 kJ / 334 kcal, grasas 0,7 g de las cuales saturadas 0,3 g, carbohidratos 79 g de los cuales azúcares 53 g, proteínas 2,9 g, sal 0,15 g',
    ],
    specLabels: [undefined, undefined, undefined, 'Alérgenos', 'Información nutricional por 100 g'],
  },
  'sk-halva-salmiakki-calendar': {
    name: 'Calendario de Adviento de salmiakki Halva 200 g',
    description:
      'Un calendario de Adviento de Halva con una selección de 200 g de salmiakki, el regaliz salado finlandés, de la gama de Halva. Tras las ventanitas hay Vanhat Autot, peces de salmiakki, calaveras saladas, Pommix, corazones de salmiakki, espadas de salmiakki, cuadraditos Salmiakkiruutu y salmiakki duro Jauhix.',
    specs: [
      '200 g',
      'Salmiakki Vanhat Autot, pez de salmiakki, calavera salada, salmiakki Pommix, corazón de salmiakki, espada de salmiakki, Salmiakkiruutu, salmiakki Jauhix',
      'Energía 1406 kJ / 331 kcal, grasas 0,5 g de las cuales saturadas 0,1 g, carbohidratos 80 g de los cuales azúcares 59 g, proteínas 2,7 g, sal 0,03 g',
    ],
    specLabels: [undefined, undefined, 'Información nutricional por 100 g'],
  },
  'kuivalihakundi-advent-calendar': {
    name: 'Calendario de Adviento de cecina Kuivalihakundi 2026',
    description:
      'El calendario de Adviento 2026 de Kuivalihakundi trae 24 sabores distintos de cecina, una bolsa de 20 g detrás de cada una de sus 24 ventanas. Hay res, pollo, cerdo graso y cerdo más magro, en sabores básicos y en otros creados solo para este calendario, todo de la fábrica propia de la empresa en Jokela, Finlandia. La cecina se conserva a temperatura ambiente incluso después de abrirla. El calendario se puede poner de pie sobre una mesa o colgar en la pared por sus orificios, y es una edición limitada.',
    specs: [
      '24 bolsas de cecina de 20 g, un sabor distinto detrás de cada ventana',
      'Res, pollo, cerdo graso y cerdo más magro',
      'Elaborada en la fábrica propia de Kuivalihakundi en Jokela, Finlandia',
      'Se conserva a temperatura ambiente, también después de abrirla',
      'Se pone de pie sobre una mesa o se cuelga en la pared por sus orificios',
    ],
    specLabels: [undefined, 'Carnes', undefined, undefined, 'Para colgar'],
  },
  'halti-crostie-merino-beanie': {
    name: 'Gorro de merino Halti Crostie',
    description:
      'Un gorro Halti ajustado para esquí de fondo, para correr en invierno y para otros deportes con frío, diseñado y fabricado en Finlandia. La mitad del gorro va forrada con Stormwall®, una capa cortavientos y transpirable que protege la frente y las orejas del viento. El tejido de punto es una suave mezcla de lana merina que abriga y a la vez transpira.',
    specs: [
      'Punto de mezcla de lana merina y acrílico, 50 % lana merina, 50 % acrílico. Medio forro de Stormwall®',
      'S, M, L',
      '0,2 kg',
      'Varios colores: Crocus Petal, Black, White, Fudge Maroon Red, Veiled Pink',
      'Lavar con colores similares, secar en plano',
      'Diseñado y fabricado en Finlandia, producto con el sello Avainlippu (Key Flag)',
    ],
  },
  'halti-vuolle-mohair-beanie': {
    name: 'Gorro de mohair Halti Vuolle',
    description:
      'Un gorro Halti esponjoso de mezcla de mohair, lana merina y poliamida, con doble capa para abrigar más y una vuelta alta. La mezcla lo hace ligero pero cálido, y no lleva forro aparte. Talla única, en Snow White o Black.',
    specs: [
      'Mezcla de mohair, 50 % mohair, 32 % poliamida, 18 % lana merina. Sin forro aparte',
      'Talla única',
      'Snow White o Black',
      'Lavar con colores similares, secar en plano',
      'Doble capa, vuelta alta',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Características'],
  },
  'halti-tiilo-mittens': {
    name: 'Manoplas Halti Tiilo II',
    description:
      'Manoplas Halti con aislamiento para el aire libre en invierno, de tejido DrymaxX® impermeable y cortavientos con 60 g de guata Microtherm® por dentro. La palma es de cuero sintético con buen agarre, y llevan un puño interior de canalé y un ajuste regulable en la muñeca. Negras, tallas de la 7 a la 12.',
    specs: [
      'Poliéster DrymaxX® con membrana, 100 % poliéster. Puño de canalé, 100 % poliéster. Palma de cuero sintético, 100 % poliuretano',
      'Guata Microtherm® de 60 g',
      '7, 8, 9, 10, 11, 12',
      'Negro',
      'Lavar por separado',
    ],
    specLabels: [undefined, 'Aislamiento', undefined, undefined, undefined],
  },
  'halti-warm-merino-socks': {
    name: 'Calcetines cálidos de lana merina Halti',
    description:
      'Calcetines Halti de lana merina en punto de rizo grueso, fabricados en Finlandia y sin costuras. Por eso se ajustan bien en botas de esquí, calzado de invierno y botas de snowboard. El rizo retiene el aire y da calor, y la caña de canalé no se baja. Úselos solos o encima de unos calcetines finos.',
    specs: [
      'Mezcla de lana merina, 62 % lana merina, 36 % poliamida, 2 % elastano',
      '34-36, 37-39, 40-42, 43-45, 46-48',
      'Dark Sea Green o Asphalt',
      '0,1 kg',
      'Fabricado en Finlandia, producto con el sello Avainlippu (Key Flag)',
      'Punto de rizo grueso, sin costuras, caña de canalé que no se baja',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, 'Características'],
  },
  'north-outdoor-kaisla-beanie': {
    name: 'Gorro de merino North Outdoor Kaisla, café',
    description:
      'Un gorro grueso de punto inglés en 100 % lana merina libre de mulesing, tejido en la propia fábrica de punto de North Outdoor en Oulu. North Outdoor lo recomienda desde el otoño hasta el final del invierno, tanto para pasear por la ciudad como por senderos en la naturaleza. Talla única, en color café.',
    specs: [
      '100 % lana merina, libre de mulesing, punto inglés',
      'Talla única',
      'Café',
      'Fabricado en la propia fábrica de punto de North Outdoor en Oulu, Finlandia',
    ],
  },
  'north-outdoor-polku-neck-tube': {
    name: 'Cuello tubular de merino North Outdoor Polku, café',
    description:
      'Un cuello tubular grueso de 100 % lana merina libre de mulesing, tejido en un canalé 1x1 denso. Es lo bastante alto para llevarlo como bufanda, subirlo como capucha o cubrirse la cara. Talla única, en color café.',
    specs: [
      '100 % lana merina, libre de mulesing, canalé 1x1',
      'Talla única',
      'Café',
      'Bufanda, capucha o protección para la cara',
    ],
    specLabels: [undefined, undefined, undefined, 'Uso'],
  },
  'north-outdoor-hirsi-socks': {
    name: 'Calcetines de lana merina North Outdoor Hirsi, almendra',
    description:
      'Calcetines ligeros de lana merina de la propia fábrica de punto de North Outdoor en Oulu. Llevan un 80 % de merino libre de mulesing y un 20 % de poliamida, que les da resistencia. Rinden al máximo en casa, solos o encima de otro par de calcetines. Admiten un lavado suave a máquina, aunque rara vez lo necesitan.',
    specs: [
      '80 % lana merina, libre de mulesing, 20 % poliamida',
      '35-38, 39-42, 43-46',
      'Almendra',
      'Fabricado en la propia fábrica de punto de North Outdoor en Oulu, Finlandia',
      'Lavado suave a máquina',
    ],
  },
  'north-outdoor-avery-mittens': {
    name: 'Manoplas de polar de lana North Outdoor Avery, latte',
    description:
      'Manoplas de una mezcla ligera de polar de lana italiano con un 63 % de lana reciclada, forradas por dentro con 100 % lana merina. El forro de merino aleja la humedad y conserva el calor, y el ajuste ceñido pero flexible permite sentir bien lo que se agarra. Tallas S y M, en color latte.',
    specs: [
      'Mezcla italiana de polar de lana, 63 % lana reciclada. Forro 100 % lana merina',
      'S, M',
      'Latte',
      'Para el aire libre y la ciudad',
    ],
    specLabels: [undefined, undefined, undefined, 'Uso'],
  },
  'makia-alvar-beanie': {
    name: 'Gorro de merino Makia Alvar',
    description:
      'Un gorro Makia de 100 % lana merina, fabricado en Finlandia. La lana es libre de mulesing, y el gorro es de talla única.',
    specs: [
      '100 % lana merina, libre de mulesing',
      'Talla única',
      'Fabricado en Finlandia',
    ],
  },
  'makia-stellar-scarf': {
    name: 'Bufanda de merino Makia Stellar',
    description:
      'Una bufanda Makia de 100 % lana merina. Es de talla única.',
    specs: [
      '100 % lana merina',
      'Talla única',
    ],
  },
  'makia-freja-mittens': {
    name: 'Manoplas acolchadas Makia Freja',
    description:
      'Manoplas acolchadas Makia con relleno de plumón sintético Sorona®, un aislamiento en parte de origen vegetal que transpira y conserva el calor. Su columna de agua de 3000 mm ayuda a mantener las manos secas con lluvia ligera. Tallas S y M.',
    specs: [
      'Plumón sintético Sorona®, en parte de origen vegetal',
      '3000 mm',
      'S, M',
    ],
    specLabels: ['Relleno', 'Columna de agua', undefined],
  },
  'makia-sibelius-beanie': {
    name: 'Gorro de merino Makia Sibelius',
    description:
      'El gorro Sibelius de Makia, hecho de 100 % lana merina. Es de talla única.',
    specs: [
      '100 % lana merina',
      'Talla única',
    ],
  },
  'nb-moomin-christmas-sockbox': {
    name: 'Caja regalo navideña de calcetines Moomin, EU 36-42',
    description:
      'Una caja regalo navideña Moomin ya preparada, con dos pares de calcetines en talla única, apta para las tallas EU 36 a 42. Los calcetines son sobre todo de algodón, con poliéster, nailon y un poco de elastano, y se trata de un producto Moomin oficial.',
    specs: [
      '60 % algodón, 33 % poliéster, 4 % nailon, 2 % elastano, 1 % elastodieno',
      'Talla única, EU 36-42',
      '2 pares de calcetines en caja regalo',
      'Producto Moomin oficial',
    ],
    specLabels: [undefined, undefined, undefined, 'Licencia'],
  },
  'nb-moomin-christmas-box-men': {
    name: 'Caja regalo navideña de calcetines Moomin, hombre, EU 40-45',
    description:
      'Una caja regalo navideña Moomin ya preparada, con dos pares de calcetines de hombre en tallas EU 40 a 45. Según la experiencia de Nordicbuddies, también sirven para pies más grandes. Los calcetines son sobre todo de algodón, con poliéster, nailon y un poco de elastano, y se trata de un producto Moomin oficial.',
    specs: [
      '60 % algodón, 33 % poliéster, 4 % nailon, 2 % elastano, 1 % elastodieno',
      'Talla única, EU 40-45',
      '2 pares de calcetines en caja regalo',
      'Producto Moomin oficial',
    ],
    specLabels: [undefined, undefined, undefined, 'Licencia'],
  },
  'nb-moomintroll-fleece-mittens': {
    name: 'Manoplas polares de Moomintroll',
    description:
      'Manoplas de Moomintroll en tejido polar de poliéster 100 % reciclado, forradas de acrílico. Son elásticas, así que una talla le queda a la mayoría, y son un producto Moomin oficial.',
    specs: [
      '100 % poliéster reciclado',
      '100 % acrílico',
      'Talla única, elástica, le queda a la mayoría',
      'Producto Moomin oficial',
    ],
    specLabels: [undefined, 'Forro', undefined, 'Licencia'],
  },
  'nb-moomintroll-chunky-beanie': {
    name: 'Gorro grueso y esponjoso de Moomintroll, rosa',
    description:
      'Un gorro de Moomintroll grueso y esponjoso, en rosa y en una talla única de adulto que le queda a todos. El material mezcla poliéster, nailon, acrílico, lana y elastano, y el gorro es un producto Moomin oficial.',
    specs: [
      'Poliéster, nailon, acrílico, lana y elastano',
      'Adulto, talla única',
      'Rosa',
      'Producto Moomin oficial',
    ],
    specLabels: [undefined, undefined, undefined, 'Licencia'],
  },
  'sk-nordqvist-tea-calendar': {
    name: 'Calendario de Adviento de té Nordqvist, 27 bolsitas',
    description:
      'Un calendario de Adviento de té de Nordqvist con forma de cubo, 25 ventanitas y 27 bolsitas de té, ya que la última contiene tres. Hay té negro, verde y rooibos y mezclas de hibisco, y entre ellos sabores navideños como galleta de jengibre, glögg y canela.',
    specs: [
      '25 ventanitas, 27 bolsitas de té. La última ventanita guarda 3 bolsitas',
      'Té negro, verde y rooibos, mezclas de hibisco',
      'Nordqvist Oy, Nurmijärvi',
      '6413440000433',
    ],
    specLabels: [undefined, 'Tés', 'Comercializado por', 'EAN'],
  },
  'sk-nordqvist-moomin-tea-calendar': {
    name: 'Calendario de té Moomin Nordqvist, 24 bolsitas, lila',
    description:
      'Un calendario de Adviento de té Moomin de Nordqvist en color lila, con 24 bolsitas piramidales de 12 sabores, dos de cada uno. Hay té negro y verde junto a rooibos sin cafeína, y cada sabor tiene su propio nombre, desde Olet Ihana («eres un encanto») hasta Muumimamman Voimajuoma («la bebida energética de Mamá Moomin»). La tapa se abre de forma que el calendario queda de pie, y tiene la certificación Rainforest Alliance.',
    specs: [
      '24 bolsitas piramidales, 12 sabores, 2 de cada uno',
      '41,5 g',
      'Lila',
      'Rainforest Alliance',
      'Nordqvist Oy, Nurmijärvi',
      '6413440000679',
    ],
    specLabels: [undefined, undefined, undefined, 'Certificación', 'Comercializado por', 'EAN'],
  },
  'sk-nordic-glogg-concentrate': {
    name: 'Concentrado de glögg Poikain Parhaat Nordic 0,5 l',
    description:
      'Un concentrado de glögg sin alcohol (0 %) hecho a mano con jugo de grosella negra y roja de Finlandia y especias auténticas, para mezclar 1+3. Poikain Parhaat lo describe como un glögg con abundantes bayas y un especiado cálido, de sabor tradicional.',
    specs: [
      '0,5 l',
      '1+3',
      '0 %',
      'Jugo de grosella negra y grosella roja de Finlandia',
      'Energía 47,7 kcal / 199,58 kJ, grasas 0,2 g de las cuales saturadas 0,2 g, carbohidratos 11 g de los cuales azúcares 11 g, proteínas 0,3 g, sal 0,2 g',
      'Poikain Parhaat Oy Ltd, Tampere',
    ],
    specLabels: [undefined, 'Proporción de mezcla', 'Alcohol', undefined, 'Información nutricional por 100 ml', 'Comercializado por'],
  },
  'rj-christmas-coffee': {
    name: 'Café navideño Gran Palomar 200 g',
    description:
      'El café navideño Gran Palomar del tostador Cafetoria Roastery es un café orgánico de comercio justo aromatizado con canela y cardamomo orgánicos. Viene en un paquete de 200 g.',
    specs: [
      '200 g',
      'Canela y cardamomo orgánicos',
      'Comercio justo, orgánico',
      'Cafetoria Roastery Oy',
    ],
    specLabels: [undefined, 'Especias', 'Certificación', 'Tostador'],
  },
  'sk-emendo-santa-sauna-scent': {
    name: 'Aroma de sauna oficial de Papá Noel Emendo 500 ml',
    description:
      'Aroma de sauna oficial de Papá Noel de Emendo, 500 ml, con 100 % de aceites esenciales auténticos y sin fragancias sintéticas. Mezcle unos ½ dl en un balde con unos 3 l de agua y úselo como el agua normal de la sauna.',
    specs: [
      '500 ml',
      'Contiene 100 % de aceites esenciales, sin fragancias sintéticas (parfum)',
      'Unos ½ dl en un balde de unos 3 l de agua',
      '©Santa Claus Foundation™',
      '6417892057458',
    ],
    specLabels: [undefined, 'Composición', 'Uso', 'Licencia', 'EAN'],
  },
  'sk-emendo-christmas-sauna-set': {
    name: 'Set de regalo para sauna Emendo Jouluhetki',
    description:
      'Jouluhetki, «momento navideño» en finlandés, es un set de regalo para sauna de Emendo con un jabón con cuerda, aroma de sauna y esponja de baño. Viene ya preparado para regalar.',
    specs: [
      'Jabón con cuerda, aroma de sauna, esponja de baño',
      '6417892041280',
    ],
    specLabels: [undefined, 'EAN'],
  },
  'sk-emendo-gingerbread-glogg-scent': {
    name: 'Aromas de sauna Emendo, pan de jengibre y glögg, 2 x 10 ml',
    description:
      'Dos aromas de sauna de Emendo, pan de jengibre y glögg, de 10 ml cada uno y elaborados con 100 % de aceites esenciales auténticos. Agregue de 2 a 6 gotas a un cucharón de agua y eche el agua sobre las piedras.',
    specs: [
      '2 x 10 ml',
      'Pan de jengibre, glögg',
      'Elaborado con 100 % de aceites esenciales',
      'De 2 a 6 gotas en un cucharón de agua',
      '6417892021060',
    ],
    specLabels: [undefined, 'Aromas', 'Composición', 'Uso', 'EAN'],
  },
  'sk-aromageddon-gingerbread-scent': {
    name: 'Esencia de sauna Aromageddon Piparipyörre 15 ml',
    description:
      'Piparipyörre («remolino de jengibre») de Aromageddon da a la sauna un aroma cálido y especiado a canela con un toque de galleta de jengibre. Agregue de 2 a 4 gotas a un cucharón de agua y use la esencia siempre diluida, nunca directamente sobre la estufa.',
    specs: [
      '15 ml',
      'Canela con un toque de galleta de jengibre',
      'De 2 a 4 gotas en un cucharón de agua, siempre diluida',
      'Aromageddon Oy, Espoo',
    ],
    specLabels: [undefined, 'Aroma', 'Uso', 'Comercializado por'],
  },
}
