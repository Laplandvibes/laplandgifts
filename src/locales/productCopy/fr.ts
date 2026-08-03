import type { ProductCopyMap } from './index'

/**
 * Tuotteiden ranskankieliset tekstit. Rakenne ja säännöt: ks. de.ts.
 *
 * `specs` on positionaalinen: indeksi vastaa `product.details.specs`-taulukon
 * järjestystä lähdedatassa. `specLabels` samoin, ja siinä on arvo vain niillä
 * riveillä joilla on oma otsikko (`key: 'other'`).
 *
 * Lukuja, mittayksiköitä, tuotekoodeja ja EAN-numeroita ei käännetä eikä
 * muunneta. Numerofragmentit kopioidaan lähteestä sellaisinaan, myös
 * välilyöntien osalta; vain desimaalierotin vaihtuu pilkuksi ranskalaisen
 * tavan mukaan.
 */
export const PRODUCT_COPY_FR: ProductCopyMap = {
  'moomin-blue-love-mug': {
    name: 'Mug Moomin Blue Love 0,3 l',
    description:
      'Un mug en vitroporcelaine de 0,3 litre issu de la gamme Moomin Classics, avec la Demoiselle Snork et Moomin enlacés et l’année du 80e anniversaire estampée sous le fond. Dessiné en Finlande, il passe au lave-vaisselle et au micro-ondes, donc il sert tous les jours au lieu de rester sur une étagère.',
    specs: [
      '0,3 l',
      'Vitroporcelaine',
      'Lave-vaisselle, four et micro-ondes',
      'Dessiné en Finlande, fabriqué en Thaïlande',
      'Moomin Classics. L’édition du 80e anniversaire porte l’année sous le fond',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Collection'],
  },
  'moomin-mystical-forest-tumblers': {
    name: 'Verres Moomin Mystical Forest 28 cl, lot de 2',
    description:
      'Deux verres gravés en relief de 28 cl issus de la collection Mystical Forest, fabriqués à la verrerie Iittala en Finlande. Ils arrivent en coffret cadeau, ce qui vous évite d’emballer de la verrerie dans une chambre d’hôtel.',
    specs: [
      '28 cl par verre',
      '2 verres, livrés dans un emballage turquoise',
      'Verre gravé en relief',
      'Passe au lave-vaisselle',
      'Fabriqués à la verrerie Iittala en Finlande',
      'Mystical Forest',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, 'Collection'],
  },
  'moomin-mystical-forest-wool-throw': {
    name: 'Plaid en laine Moomin Mystical Forest 130x170 cm',
    description:
      'Un plaid de 130 sur 170 cm en 100 pour cent laine, dessiné en Finlande pour la collection Mystical Forest. Nettoyage à sec uniquement, donc plutôt plaid de canapé que couverture de pique-nique.',
    specs: [
      '100 % laine',
      '130 x 170 cm',
      'Bleu',
      'Nettoyage à sec, procédé doux',
      'Dessiné en Finlande, fabriqué en Lituanie',
      'Mystical Forest',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, 'Collection'],
  },
  'iittala-aalto-vase-160': {
    name: 'Vase Iittala Alvar Aalto 160 mm, transparent',
    description:
      'Alvar Aalto a dessiné cette vague en 1936 et Iittala la souffle toujours à la bouche, si bien que le contour diffère un peu d’une pièce à l’autre. La taille 160 mm est celle que l’on a en tête quand le nom est prononcé.',
    specs: [
      'Hauteur 16 cm, largeur 20,5 cm',
      'Verre',
      'Transparent',
      '1,44 kg brut',
      'Lavage à la main uniquement',
      'Verre soufflé à la bouche, forme asymétrique',
      'Alvar Aalto, Iittala Alvar Aalto Collection',
      '999-01, EAN 6411920004445',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      'Fabrication',
      'Designer et collection',
      'Référence et EAN',
    ],
  },
  'iittala-kivi-candleholder': {
    name: 'Photophore Iittala Kivi 60 mm, vert sapin',
    description:
      'Un photophore en verre pressé de Heikki Orvola, 6 cm de haut, qui transforme une bougie chauffe-plat en bloc de couleur. C’est la façon la moins chère de posséder une pièce Iittala et il survit au bagage à main.',
    specs: [
      '6,5 x 6,5 cm, hauteur 6 cm',
      'Verre',
      'Vert',
      '0,33 kg brut',
      'Lavage à la main uniquement',
      'Heikki Orvola, Iittala Kivi',
      '636883-01, EAN 6411923683937',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      'Designer et collection',
      'Référence et EAN',
    ],
  },
  'marimekko-unikko-mug': {
    name: 'Mug Marimekko Unikko 25 cl',
    description:
      'Maija Isola a dessiné le coquelicot Unikko en 1964, après que Marimekko eut interdit les imprimés floraux, et le motif a survécu à l’interdiction. Ce mug en grès contient 25 cl et met l’imprimé sur la table du petit-déjeuner plutôt qu’au mur.',
    specs: [
      '25 cl',
      'Diamètre 8 cm, hauteur 9,5 cm',
      'Grès',
      'Blanc, vert foncé, beige et sable clair',
      '0,276 kg brut',
      'Motif de Maija Isola, mug de Sami Ruotsalainen',
      '666236-01, EAN 6411255152033',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      'Designers',
      'Référence et EAN',
    ],
  },
  'aarikka-prinsessa-candleholder': {
    name: 'Bougeoir Aarikka Prinsessa',
    description:
      'Aarikka tourne des perles de bouleau depuis les années 1950, et Prinsessa en porte une couronne autour d’un support de 5,5 cm qui accepte une bougie chauffe-plat ou une bougie droite. Assez petit pour être posté, assez reconnaissable pour être identifié en Finlande.',
    specs: [
      'Hauteur 5,5 cm, diamètre 6 cm',
      'Bouleau, érable, aluminium',
      '98 g',
      'Dessiné en Finlande, fabriqué en Italie',
      'Bougeoir avec une couronne de perles en bois. Convient aux bougies chauffe-plat et aux bougies droites',
      'B08633',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, 'Code produit'],
  },
  'aarikka-pore-glass-vase': {
    name: 'Vase en verre Aarikka Pore 16 cm, vert foncé',
    description:
      'Un vase rond soufflé à la bouche, 1,7 litre, portant une couronne de perles d’érable teintées à la main en Finlande. Les bulles d’air dans le verre en font partie, et la couronne s’enlève avant le lavage.',
    specs: [
      'Hauteur 16 cm, diamètre 16 cm',
      '1,7 l',
      'Verre et érable',
      'Transparent et vert',
      'Verre fabriqué en Pologne, couronne en bois fabriquée en Finlande',
      'Laver à la main. Retirer la couronne en bois avant le lavage',
      'B08706',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, undefined, 'Code produit'],
  },
  'halti-tokoi-dx-jacket': {
    name: 'Veste coquille Halti Tokoi DX, homme',
    description:
      'Une coquille résistante aux intempéries, toutes coutures étanchées, avec une doublure légère et une capuche réglable, coupée assez large pour porter un pull en laine dessous. Halti livre uniquement dans l’Union européenne.',
    specs: [
      'DrymaxX Sleek Twill, un tissu 2 couches imperméable et coupe-vent avec membrane DrymaxX. Composition 50 % polyester recyclé et 50 % polyester',
      'Doublure polyester douce, 100 % polyester recyclé',
      '10000 mm',
      '10000 g/m²/24 h',
      '0,9 kg',
      'S, M, L, XL, XXL, XXXL',
      'Fossil Beige, Four Leaf Clover Green, Black',
      'Toutes coutures étanchées, capuche fixe réglable, col montant haut, fermeture à glissière frontale 2 sens, aération en mesh, poches zippées, poche intérieure à bouton pression, bas de manches réglables, rabat anti-vent, détails réfléchissants',
      'Laver sur l’envers avec des couleurs similaires et fermer d’abord les fermetures. Maximum 30 °C, procédé doux. Ne pas blanchir, ne pas sécher en machine, ne pas repasser, ne pas nettoyer à sec',
    ],
    specLabels: [
      undefined,
      'Doublure',
      'Imperméabilité',
      'Respirabilité',
      undefined,
      undefined,
      undefined,
      'Caractéristiques',
      undefined,
    ],
  },
  'makia-merino-beanie': {
    name: 'Bonnet Makia Merino',
    description:
      'Un bonnet nordique sobre en laine mérinos, qui équilibre température et humidité quand on passe d’un café chauffé au froid de la rue. Pas de logo grand comme un poing sur le devant.',
    specs: [
      '100 % laine mérinos, côtes anglaises jauge 8, sans mulesing',
      'Taille unique',
      'Dark Brown',
      'Fabriqué en Finlande, matière fabriquée en Italie',
      'Laver avec des couleurs similaires en cycle délicat, sécher à plat et remettre en forme. Aérer suffit souvent au lieu de laver. Des bouloches peuvent apparaître à l’usage',
    ],
  },
  'makia-aurora-hoodie': {
    name: 'Sweat à capuche Makia Aurora',
    description:
      'Un sweat à capuche coupe droite en 100 pour cent coton biologique de la marque helsinkienne Makia. Assez épais pour servir de couche extérieure à l’intérieur et lors des soirées douces d’automne.',
    specs: [
      '100 % coton biologique, molleton french terry 370 g',
      'S, M, L, XL, XXL',
      'Carbon Black',
      'Coupe droite, cordons à la capuche, poche kangourou, bord-côte à la base et aux poignets, étiquettes tissées en polyester recyclé',
      'Fabriqué en Turquie, matière fabriquée en Turquie',
      'Laver sur l’envers avec des couleurs similaires. Ne pas repasser sur l’imprimé. Rétrécissement maximal 5 %. Remettre en forme encore humide',
    ],
    specLabels: [undefined, undefined, undefined, 'Coupe et détails', undefined, undefined],
  },
  'halti-kroka-mitten': {
    name: 'Moufle Halti Kroka II',
    description:
      'Une moufle coupe-vent avec 60 g d’isolation et une paume à grip silicone, coupée unisexe. La moufle bat le gant quand le vent se lève, parce que les doigts se réchauffent entre eux.',
    specs: [
      'Softshell Stormwall, 50 % polyester et 50 % polyester recyclé. Polaire douce 100 % polyester. Poignets en maille lycra',
      'Microtherm Dynamic 60 g, doublure Active Dry soft touch, 100 % polyester recyclé',
      '0,1 kg',
      '06, 07, 08, 09, 10, 11, 12',
      'Noir',
      'Laver séparément à 30 °C en cycle doux. Ne pas blanchir, ne pas sécher en machine, ne pas repasser, ne pas nettoyer à sec',
      '084-0757',
    ],
    specLabels: [
      undefined,
      'Isolation et doublure',
      undefined,
      undefined,
      undefined,
      undefined,
      'Référence',
    ],
  },
  'halti-tunturit-ski-socks': {
    name: 'Chaussettes de ski Halti Tunturit',
    description:
      'Chaussettes hautes en mélange mérinos avec rembourrage au tibia et à la cheville, là où la chaussure de ski appuie. Halti indique qu’elles sont fabriquées en Europe.',
    specs: [
      'Mélange laine mérinos : 36 % polyamide, 23 % acrylique, 23 % laine mérinos, 16 % polypropylène, 2 % élasthanne',
      '0,1 kg',
      '34-36, 37-39, 40-42, 43-45, 46-48',
      'Sargasso Sea Blue, Lemon Pepper Beige',
      'Fabriquées en Europe',
      'Rembourrage au tibia et à la cheville, hauteur genou, talon et pointe renforcés, zones de ventilation au tibia et sur le dessus du pied',
      'Maximum 40 °C, procédé normal. Ne pas repasser, ne pas blanchir, ne pas nettoyer à sec, ne pas sécher en machine',
      '087-0471',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      'Caractéristiques',
      undefined,
      'Référence',
    ],
  },
  'north-outdoor-huuru-beanie': {
    name: 'Bonnet mérinos North Outdoor Huuru',
    description:
      'North Outdoor tricote ce bonnet côtelé dans sa propre usine à Oulu, en 100 pour cent mérinos sans mulesing, 18,5 microns. Tricoté en forme plutôt que découpé, donc il reste peu de chutes.',
    specs: [
      '100 % laine mérinos, sans mulesing, 18,5 microns, tricot 270 g/m²',
      'Taille unique',
      'Bleu indigo',
      'Fabriqué à Oulu, Finlande',
      'Aérez-le régulièrement et ne le lavez qu’au besoin. Lessive laine, cycle délicat à 30 °C avec l’essorage le plus faible, sur l’envers',
      'OEKO-TEX, Woolmark',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, 'Certificats'],
  },
  'north-outdoor-pyry-scarf': {
    name: 'Écharpe mérinos North Outdoor Pyry',
    description:
      'Une écharpe large et longue en côtes anglaises, 100 pour cent mérinos, tricotée à Oulu. Assez longue pour s’enrouler de plusieurs façons, ce qui compte quand le vent change de direction sur une fjeld dégagée.',
    specs: [
      '100 % laine mérinos, 18,5 microns, tricot côtes 1/1',
      'Taille unique',
      'Gris porridge',
      'Fabriquée à Oulu, Finlande',
      'Aérez-la régulièrement et ne la lavez qu’au besoin. Lessive laine, cycle délicat à 30 °C avec l’essorage le plus faible, sur l’envers',
      'OEKO-TEX, Woolmark',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, 'Certificats'],
  },
  'north-outdoor-honka-jumper': {
    name: 'Pull mérinos North Outdoor Honka, homme',
    description:
      'Un pull épais en côtes anglaises, 100 pour cent mérinos, coupe décontractée et ligne d’épaule tombante. Lourd à regarder, léger à porter, et tricoté dans l’usine d’Oulu.',
    specs: [
      '100 % laine mérinos, sans mulesing, 18,5 microns, tricot côtelé variable',
      'S, M, L, XL, 2XL, 3XL',
      'Bleu indigo',
      'Fabriqué à Oulu, Finlande',
      'Aérez-le régulièrement et ne le lavez qu’au besoin. Lessive laine, cycle délicat à 30 °C avec l’essorage le plus faible, sur l’envers',
      'OEKO-TEX, Woolmark',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, 'Certificats'],
  },
  'marttiini-lapinleuku-255': {
    name: 'Couteau lapon Marttiini 255',
    description:
      'Le couteau lapon traditionnel, 27 cm au total, avec une lame inoxydable, un manche en bouleau madré verni et un étui en cuir. Marttiini fabrique ses couteaux à Rovaniemi, et cette version du modèle possède une garde.',
    specs: [
      '16 cm',
      'Longueur totale 27 cm',
      'Lame en acier inoxydable, manche en bouleau madré verni, étui en cuir',
      'Couteau et étui en cuir à fermeture pression',
      '255010',
    ],
    specLabels: ['Longueur de lame', undefined, undefined, undefined, 'Référence'],
  },
  'marttiini-napapiirin-puukko': {
    name: 'Couteau Marttiini Cercle polaire',
    description:
      'Un petit couteau du quotidien, 20 cm au total, avec une lame en acier carbone, un manche en bouleau ciré et un étui en cuir brun. L’acier carbone prend un fil plus vif que l’inoxydable mais demande à être huilé, ce que Marttiini rappelle aussi sur sa fiche produit.',
    specs: [
      '9 cm',
      'Longueur totale 20 cm',
      'Lame en acier carbone, manche en bouleau ciré, étui en cuir brun',
      'Séchez toujours soigneusement la lame après usage et huilez-la régulièrement avec une huile non salée',
      '121019',
    ],
    specLabels: ['Longueur de lame', undefined, undefined, undefined, 'Référence'],
  },
  'marttiini-ilves-131': {
    name: 'Marttiini Lynx 131',
    description:
      'Un couteau de 22 cm avec une lame inoxydable, un manche en bouleau madré verni et un étui en cuir brun. Marttiini indique que le modèle Lynx a été dessiné par son fondateur Janne Marttiini dans les années 1930.',
    specs: [
      '11 cm',
      'Longueur totale 22 cm',
      'Lame en acier inoxydable, manche en bouleau madré verni, étui en cuir brun',
      '131010',
    ],
    specLabels: ['Longueur de lame', undefined, undefined, 'Référence'],
  },
  'kupilka-classic-cup-21': {
    name: 'Tasse de camp Kupilka 21, 2,1 dl',
    description:
      'La forme du kuksa dans une matière qui passe au lave-vaisselle : moitié fibre de cellulose de pin, moitié thermoplastique, moulée en Finlande. Elle contient 2,1 dl, pèse 83 grammes et ne brûle pas les doigts autour d’un feu.',
    specs: [
      '2,1 dl',
      '83 g',
      '60 x 93 x 165 mm',
      'Composite de fibres naturelles Kareline, 50 % fibre de cellulose de pin et 50 % thermoplastique, fabriqué avec de l’énergie verte',
      'Finlande',
      'Rincez-la en randonnée comme un kuksa en bois, à la maison elle va au lave-vaisselle. Pas pour le micro-ondes',
      '3021011XX',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, undefined, 'Numéro de modèle'],
  },
  'kupilka-bowl-55': {
    name: 'Bol de camp Kupilka 55, 5,5 dl',
    description:
      'Un bol de 5,5 dl avec une anse assez solide pour le tenir d’une main pendant que l’autre garde la tasse. Même composite finlandais à base de fibre de pin que la tasse, 184 grammes, passe au lave-vaisselle.',
    specs: [
      '5,5 dl',
      '184 g',
      '54 x 154 x 223 mm',
      'Composite de fibres naturelles Kareline, 50 % fibre de cellulose de pin et 50 % thermoplastique, fabriqué avec de l’énergie verte',
      'Finlande',
      'Passe au lave-vaisselle. Pas pour le micro-ondes. Agréé pour le contact avec des aliments chauds et froids',
      '3055013X',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, undefined, 'Numéro de modèle'],
  },
  'kupilka-cutlery-set': {
    name: 'Ensemble de couverts Kupilka',
    description:
      'Cuillère, couteau et fourchette dans le même composite finlandais à base de fibre de bois, 56 grammes l’ensemble. La façon la moins chère de rapporter la matière Kupilka et la plus facile à glisser en bagage à main.',
    specs: [
      'Cuillère, couteau et fourchette',
      '56 g',
      'Composite de fibres naturelles Kareline, 50 % fibre de cellulose de pin et 50 % thermoplastique, fabriqué avec de l’énergie verte',
      'Finlande',
      'Rincez-les en randonnée comme des couverts en bois, à la maison ils vont au lave-vaisselle. Pas pour le micro-ondes',
      '3025025X',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, 'Numéro de modèle'],
  },
  'lapuan-kankurit-poro-towel': {
    name: 'Serviette en lin Lapuan Kankurit PORO 46 x 70 cm',
    description:
      'Un renne dessiné par l’illustrateur Matti Pikkujämsä, tissé dans l’atelier de Lapua avec une chaîne en lin européen et une trame en coton biologique. Elle se plie à plat dans une valise, et le pouvoir absorbant n’arrive qu’après quelques lavages.',
    specs: [
      '46 x 70 cm',
      '60 % lin, Masters of Linen, et 40 % coton',
      'Lin et vert',
      'Fabriquée en Finlande',
      'Laver séparément avant usage à 60 °C en cycle délicat avec beaucoup d’eau. Ne pas essorer. Éviter l’adoucissant et l’eau de Javel. Ne pas sécher en machine. Repasser encore humide. Rétrécissement environ 5 %',
      'Matti Pikkujämsä',
      '20527',
      'Drapeau-clé finlandais, Masters of Linen',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      'Designer',
      'Code produit',
      'Certificats',
    ],
  },
  'lapuan-kankurit-kaamos-blanket': {
    name: 'Couverture en laine Lapuan Kankurit KAAMOS 100 x 150 cm',
    description:
      'Kaamos est la nuit polaire, et Hanna Galtat a tiré le motif de la façon dont la lumière du jour se déplace au fil des heures. Le fil de trame est de la laine de mouton finlandais que l’atelier collecte dans des fermes situées à environ 400 km de Lapua.',
    specs: [
      '100 x 150 cm',
      '100 % laine vierge pure',
      'Blanc et noir',
      'Fabriquée en Finlande',
      'Ne la lavez que si elle est très sale, sinon aérez-la dehors. Lavage à la main à 30 °C maximum ou nettoyage à sec. Ne pas frotter, étirer ni tordre. Ne pas sécher en machine. Repasser avec un linge humide à 150 °C maximum',
      'Hanna Galtat',
      '102939',
      'Drapeau-clé finlandais',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      'Designer',
      'Code produit',
      'Certificat',
    ],
  },
  'pentik-posio-mug': {
    name: 'Mug Pentik Posio 0,3 l',
    description:
      'Pentik cuit ce mug à Posio, que l’entreprise présente comme la fabrique de céramique la plus septentrionale du monde, et toute la gamme Posio est décorée de rennes. Lave-vaisselle, four, micro-ondes et congélateur.',
    specs: [
      '0,3 l',
      'Rouge',
      'Fabriqué à Posio, en Laponie, que Pentik présente comme la fabrique de céramique la plus septentrionale du monde',
      'Lave-vaisselle, four électrique, four de cuisson, micro-ondes et congélateur',
      'Posio. Chaque pièce de la gamme est décorée de rennes',
      '12JAO050P41',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Collection', 'Code produit'],
  },
  'pentik-tunturiretki-studio-dish': {
    name: 'Plat triangulaire creux Pentik Tunturiretki Winter Studio 19 cm',
    description:
      'Anu Pentik a peint les rennes qui réapparaissent entre les arbres lors d’une marche sur la fjeld. Les pièces Studio sont peintes à la main à Posio, donc deux plats ne portent jamais exactement les mêmes traces de pinceau.',
    specs: [
      'Diamètre 19 cm',
      'Bleu',
      'Fait main à Posio, en Laponie, dessiné par Anu Pentik',
      'Lave-vaisselle, four électrique, four de cuisson, micro-ondes et congélateur',
      'Pentik Studio, la gamme peinte à la main',
      '12ST353TT61',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Collection', 'Code produit'],
  },
  'kuivalihakundi-poro-jerky': {
    name: 'Viande de renne séchée Original 2 x 20 g',
    description:
      'Deux sachets de 20 grammes de viande de renne séchée, 100 pour cent renne finlandais, séchée au four et marinée à la sauce soja sans gluten, poivre noir, ail et sirop de sucre. La viande ne peut pas être postée hors de l’Union européenne, donc la livraison s’arrête à la frontière européenne.',
    specs: [
      '2 x 20 g',
      'Viande de Finlande',
      'Les dates courent environ un an à partir du jour où la viande a été séchée et emballée. Ne nécessite pas de conservation au froid, même après ouverture',
      'Fortement salé. Sans gluten',
      'Énergie 1514 kJ / 360 kcal, matières grasses 14,2 g dont acides gras saturés 6,2 g, glucides 7,9 g dont sucres 5,1 g, protéines 50,2 g, sel 9,5 g',
    ],
    specLabels: [undefined, undefined, undefined, 'Mentions de l’étiquette', 'Valeurs nutritionnelles pour 100 g'],
  },
  'finnish-flavours-palalaku-salmiakki': {
    name: 'Finnish Flavours Premium Palalaku salmiakki 150 g',
    description:
      'Un sachet de 150 grammes de réglisse salmiakki tendre, celle au chlorure d’ammonium qui range les visiteurs dans deux camps dès le premier morceau. Suomikauppa poste des produits alimentaires bien au-delà de la Finlande.',
    specs: [
      '150 g',
      'Énergie 1316 kJ / 311 kcal, matières grasses 0,5 g dont acides gras saturés 0 g, glucides 72 g dont sucres 50 g, protéines 4,1 g, sel 1,7 g',
      'Finnish Flavours, Kumitehtaankatu 5, 04260 Kerava',
    ],
    specLabels: [undefined, 'Valeurs nutritionnelles pour 100 g', 'Commercialisé par'],
  },
  'meritalo-tyrnihillo': {
    name: 'Confiture d’argousier finlandaise Meritalo 310 g',
    description:
      'Confiture d’argousier avec 37 grammes de baies pour 100 grammes, cuite à partir d’argousier finlandais à la ferme familiale Meritalo à Salo, dans le sud-ouest de la Finlande plutôt qu’en Laponie. L’argousier est acidulé plutôt que sucré, donc il va plus loin à côté d’un fromage que sur une crêpe.',
    specs: [
      '310 g',
      'Les baies sont finlandaises. Fabriquée par une entreprise familiale à la ferme Meritalo à Salo, dans le sud-ouest de la Finlande',
      'Énergie 781 kJ / 187 kcal, matières grasses 1,9 g dont acides gras saturés 0,3 g, glucides 41 g dont sucres 41 g, protéines 0,3 g, sel 0,01 g',
      'Marjajaloste Meritalo Oy, 25610 Ylönkylä',
    ],
    specLabels: [undefined, undefined, 'Valeurs nutritionnelles pour 100 g', 'Commercialisé par'],
  },
  'kuivalihakundi-poro-jerky-200g': {
    name: 'Viande de renne séchée Original 200 g',
    description:
      'Le format cadeau de la même viande de renne séchée, 200 grammes. Le producteur indique qu’un kilo de viande séchée demande trois kilos de viande fraîche, ce qui explique l’essentiel du prix d’un sachet.',
    specs: [
      '200 g',
      '100 % viande de renne, tranche grasse, séchée au four et marinée',
      '1 kg de viande séchée demande 3 kg de viande fraîche',
      'Les dates courent environ un an à partir du jour où la viande a été séchée et emballée. Ne nécessite pas de conservation au froid, même après ouverture',
    ],
    specLabels: [undefined, undefined, 'Viande utilisée', undefined],
  },
  'kuivalihakundi-beef-jerky-smoked': {
    name: 'Bœuf séché Smoked 40 g',
    description:
      'Du bœuf plutôt que du renne, réellement fumé plutôt qu’aromatisé, 57 grammes de protéines pour 100. Le moins cher de cette catégorie et celui qui survit à un sac à dos.',
    specs: [
      '40 g',
      'Bœuf élevé et abattu dans l’Union européenne',
      '1 kg de viande séchée demande 2,5 kg de bœuf frais',
      'Énergie 1261 kJ / 298 kcal, matières grasses 5,5 g dont acides gras saturés 2,4 g, glucides 5,2 g dont sucres 4,4 g, protéines 56,9 g, sel 5 g',
    ],
    specLabels: [undefined, undefined, 'Viande utilisée', 'Valeurs nutritionnelles pour 100 g'],
  },
  'fazer-geisha-chocolate-bar': {
    name: 'Tablette Fazer Geisha nougat de noisette 121 g',
    description:
      'Du chocolat au lait sur une garniture croquante au nougat de noisette, la tablette que la plupart des foyers finlandais gardent dans un tiroir. Fazer indique qu’elle est fabriquée sans huile de palme.',
    specs: [
      '121 g',
      'Chocolat au lait avec au moins 30 % de cacao, garniture au nougat de noisette contenant 11 % de noisettes',
      'Énergie 550 kcal / 2302 kJ, matières grasses 35 g, acides gras saturés 17 g, glucides 51 g, sucres 49 g, protéines 8 g, sel 0,19 g',
    ],
    specLabels: [undefined, undefined, 'Valeurs nutritionnelles pour 100 g'],
  },
  'nordqvist-moomin-forest-berry-tea': {
    name: 'Infusion Nordqvist Moomin hibiscus et baies des bois, 20 sachets',
    description:
      'Hibiscus biologique avec pomme et baies des bois, naturellement sans caféine, assemblé à l’usine Nordqvist de Nurmijärvi. Vingt sachets pèsent 35 grammes, ce qui en fait le cadeau le plus léger de cette boutique.',
    specs: [
      '20 x 1,75 g, 35 g',
      'Assemblée à l’usine Nordqvist de Nurmijärvi, Finlande',
      '95 °C pendant 2 à 4 minutes. À l’eau froide 5 à 10 minutes',
      'Certifiée biologique, végane, sans gluten, naturellement sans caféine',
    ],
    specLabels: [undefined, undefined, 'Infusion', 'Régime'],
  },
  'nordqvist-cranberry-toffee-tea': {
    name: 'Infusion Nordqvist canneberge et caramel salé, 20 sachets',
    description:
      'Canneberge acidulée contre caramel salé sur une base d’hibiscus et de rooibos, donc sans caféine et pourtant encore savoureuse le soir. Nordqvist assemble du thé en Finlande depuis 1883.',
    specs: [
      '20 x 1,75 g, 35 g',
      '95 °C pendant 2 à 5 minutes',
      'Végane. L’hibiscus et le rooibos sont certifiés Rainforest Alliance',
    ],
    specLabels: [undefined, 'Infusion', 'Régime et certification'],
  },
  'moomin-wild-blueberry-coffee': {
    name: 'Café Moomin Wild Blueberry 250 g',
    description:
      'Café aromatisé à la myrtille de Bergstrands Kafferosteri, construit sur des caracolis mûris sur les collines de Mogiana, dans le sud du Brésil. Un caracoli est une cerise de café qui n’a formé qu’un grain au lieu de deux, ce qui, selon le torréfacteur, concentre le goût. 250 grammes.',
    specs: [
      '250 g',
      'Grains des collines de Mogiana, dans le sud du Brésil, torréfiés par Bergstrands Kafferosteri',
      'Caracoli, une cerise de café à grain unique au lieu de deux',
      'Myrtille sauvage',
    ],
    specLabels: [undefined, undefined, 'Grain', 'Arôme'],
  },
  'moomin-lingonberry-blueberry-dark-chocolate': {
    name: 'Chocolat noir Moomin airelle et myrtille 70 g',
    description:
      'Chocolat noir biologique à 70 pour cent de cacao de Kalmar Chokladfabrik avec des airelles et des myrtilles lyophilisées, emballé dans un dessin de Tove Jansson. Le cacao est Criollo et Trinitario du Pérou et la tablette est fabriquée en Suède.',
    specs: [
      '70 g',
      'Chocolat noir, 70 % de cacao',
      'Fèves de cacao Criollo et Trinitario du Pérou, fabriqué en Suède',
      'Biologique',
    ],
    specLabels: [undefined, undefined, undefined, 'Régime'],
  },
  'moomin-berry-picking-tea': {
    name: 'Thé Moomin Berry Picking, 20 sachets',
    description:
      'Thé noir aux arômes de vanille et de baies rouges, assemblé à l’usine de Nurmijärvi en Finlande et portant le drapeau-clé finlandais. Ce thé est une collaboration avec la Croix-Rouge finlandaise : 0,40 euro par paquet vendu va au travail de la Croix-Rouge auprès des enfants, des jeunes et des personnes isolées.',
    specs: [
      '20 x 1,75 g, 35 g',
      'Fabriqué à l’usine de Nurmijärvi en Finlande',
      'Thé certifié Rainforest Alliance, drapeau-clé finlandais',
      'Végane',
    ],
    specLabels: [undefined, undefined, 'Certification', 'Régime'],
  },
  'arctic-power-berries-blueberry-powder': {
    name: 'Poudre de myrtille sauvage 70 g',
    description:
      'Myrtille sauvage lyophilisée, sans rien d’ajouté. Le producteur indique qu’environ 700 grammes de baies fraîches entrent dans un pot de 70 grammes. Cette boutique affiche ses prix en livres sterling.',
    specs: [
      '70 g',
      '100 % poudre de myrtille issue de myrtilles sauvages nordiques. Rien d’ajouté',
      'Environ 700 g de baies fraîches donnent 70 g de poudre de baies',
      'Énergie 367 kcal / 1559 kJ, protéines 5 g, glucides 54 g dont sucres 34 g, fibres 31 g, matières grasses 0,8 g, sel 0,01 g',
    ],
    specLabels: [undefined, undefined, 'Baies utilisées', 'Valeurs nutritionnelles pour 100 g'],
  },
  'arctic-power-berries-sea-buckthorn-powder': {
    name: 'Poudre d’argousier 70 g',
    description:
      'Argousier nordique lyophilisé, 70 grammes, sans rien d’ajouté. Acidulé et orange vif, donc une cuillère à café va plus loin dans le porridge qu’on ne le croit. Cette boutique affiche ses prix en livres sterling.',
    specs: [
      '70 g',
      '100 % poudre d’argousier issue de baies d’argousier nordiques. Rien d’ajouté',
      'Environ 700 g de baies fraîches donnent 70 g de poudre de baies',
      'Énergie 489 kcal / 2045 kJ, protéines 13 g, glucides 24 g dont sucres 14 g, fibres 28 g, matières grasses 25 g, sel 0,06 g',
    ],
    specLabels: [undefined, undefined, 'Baies utilisées', 'Valeurs nutritionnelles pour 100 g'],
  },
  'kaapa-mushrooms-pakuri-powder': {
    name: 'Poudre d’extrait de chaga Kääpä Mushrooms 30 g',
    description:
      'Un pot de 30 grammes de poudre d’extrait de chaga de Kääpä Mushrooms, qui récolte des champignons fonctionnels dans les forêts nordiques, à mélanger dans les boissons chaudes. Ruohonjuuri ne livre que dans le territoire douanier et fiscal de l’Union européenne, et l’étiquette liste des interactions médicamenteuses qu’il vaut mieux lire d’abord.',
    specs: [
      '30 g',
      '100 % chaga, biologique. 100 mg de bêta-glucane par dose journalière',
      'Finlande',
      'Biologique avec la feuille bio européenne. Sans gluten, sans lactose, sans produits laitiers, sans soja, sans sucre, sans caféine, sans additifs, végane, sauvage',
      'Le chaga ne doit pas être pris en même temps que des antibiotiques, des anticoagulants, de la pénicilline ou du glucose intraveineux. Respectez la dose indiquée sur l’emballage et ne la dépassez pas',
      '6430071310212',
    ],
    specLabels: [undefined, undefined, undefined, 'Régime', 'Avertissement', 'EAN'],
  },
  'arctic-warriors-spruce-sprout-powder': {
    name: 'Poudre de pousses d’épicéa Arctic Warriors 40 g',
    description:
      'Pousses d’épicéa lyophilisées, cueillies à la main sur une fenêtre de deux semaines dans des forêts d’État biologiques, et seulement une année sur deux dans la même forêt. Agrumes et résine dans une cuillerée, 382 mg de vitamine C pour 100 g.',
    specs: [
      '40 g, brut 0,046 kg',
      '3 x 11 x 17 cm',
      'Pousse d’épicéa lyophilisée',
      'Finlande',
      '1 à 3 cuillères à café par jour',
      'Énergie 1683 kJ / 402 kcal, protéines 12,1 g, glucides 77,8 g, matières grasses 4,19 g. Vitamine C 382 mg, vitamine A 970 µg, vitamine K1 332 mg, potassium 1200 mg, phosphore 350 mg, calcium 130 mg, magnésium 120 mg, zinc 3,6 mg, fer 2 mg',
      'Récoltées sous licence dans des forêts biologiques appartenant à l’administration forestière de l’État finlandais, une année sur deux par forêt',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      undefined,
      'Posologie',
      'Valeurs nutritionnelles pour 100 g',
      'Récolte',
    ],
  },
  'arctic-warriors-nettle-powder': {
    name: 'Poudre d’ortie Arctic Warriors 150 g',
    description:
      'Ortie cultivée dans des fermes biologiques de Laponie, lyophilisée en une poudre assez neutre pour être mêlée à une soupe ou à un pain sans se disputer avec le reste du plat. 22 000 mg de calcium pour 100 g.',
    specs: [
      '150 g, brut 0,162 kg',
      '4 x 16 x 23 cm',
      'Ortie lyophilisée',
      'Finlande, cultivée dans des fermes biologiques de Laponie',
      '1 à 5 cuillères à café par jour',
      'Énergie 1484 kJ / 354 kcal, protéines 23,6 g, glucides 56 g, matières grasses 3,44 g, sel moins de 5 mg. Vitamine A 1900 µg, calcium 22000 mg, magnésium 5300 mg, fer 68 mg',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Posologie', 'Valeurs nutritionnelles pour 100 g'],
  },
  'arctic-warriors-roseroot-elixir': {
    name: 'Élixir de rhodiole Arctic Warriors 100 ml',
    description:
      'La rhodiole pousse sur les berges humides des ruisseaux et les parois rocheuses des fjelds de Laponie, et Arctic Warriors l’extrait dans de la glycérine végétale avec de l’ortie. Une cuillère à café se met dans le thé, le porridge ou le yaourt.',
    specs: [
      '100 ml, brut 0,270 kg',
      '4,5 x 4,5 x 13 cm',
      'Glycérine végétale, ortie, rhodiole',
      'Finlande',
      '1 à 2 cuillères à café par jour',
      'Sans produits laitiers, sans gluten, végane. La glycérine végétale n’a pas d’effet sur la glycémie',
      'Un complément alimentaire ne remplace pas une alimentation variée. Tenir hors de portée des enfants et ne pas dépasser la dose indiquée',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Posologie', 'Régime', 'Remarque'],
  },
  'omega7-sea-buckthorn-olive-oil': {
    name: 'Omega7 SBA24 huile d’argousier et d’olive 150 ml',
    description:
      'Huile de baie et huile de pépin d’argousier associées à de l’huile d’olive, développées et fabriquées en Finlande. Le producteur standardise les teneurs en vitamines A et E au lieu de les laisser dépendre de la récolte.',
    specs: [
      '150 ml',
      'Huile de baie et huile de pépin d’argousier avec de l’huile d’olive, teneurs en vitamines A et E standardisées',
      'Développée et fabriquée en Finlande',
      'Respectez la dose indiquée sur l’emballage et ne la dépassez pas. Un complément alimentaire ne remplace pas une alimentation variée. Tenir hors de portée des enfants',
    ],
    specLabels: [undefined, undefined, undefined, 'Remarque'],
  },
  'kaino-spruce-sprout-sparkling': {
    name: 'Boisson pétillante aux pousses d’épicéa KAINO Drinks 0,2 l',
    description:
      'Une boisson pétillante sans alcool faite d’ingrédients biologiques finlandais, pour qu’un toast au chalet n’implique pas forcément de l’alcool. Servez-la froide, sinon l’arôme d’épicéa disparaît sous les bulles.',
    specs: [
      '0,2 l',
      'Faite à 100 % d’ingrédients biologiques finlandais. Sans alcool',
      'Finlande',
      'Énergie 122,65 kJ / 29,3 kcal, matières grasses moins de 0,1 g dont acides gras saturés moins de 0,1 g, glucides 6,9 g dont sucres 6,9 g, protéines moins de 0,1 g, sel moins de 0,1 g',
      'Végane. Feuille bio européenne',
    ],
    specLabels: [undefined, undefined, undefined, 'Valeurs nutritionnelles pour 100 ml', 'Régime et certification'],
  },
  'arabia-moomin-mug-snufkin': {
    name: 'Mug Arabia Moomin, Snufkin',
    description:
      'Arabia imprime les dessins de Tove Jansson sur ces mugs depuis 1990, et les collectionneurs suivent par année ceux qui sortent du catalogue. Snufkin est celui qui part à l’automne et revient au printemps.',
    specs: ['0,3 l', 'Tove Jansson'],
    specLabels: [undefined, 'Illustration'],
  },
  'arabia-moomin-mug-friendship': {
    name: 'Mug Arabia Moomin, Friendship',
    description:
      'Le mug montre Ninny, l’enfant invisible qui a peur du noir et redevient lentement visible dès que quelqu’un se montre gentil avec elle. Un choix plus discret que les personnages connus.',
    specs: ['0,3 l', 'Tove Jansson'],
    specLabels: [undefined, 'Illustration'],
  },
  'arabia-moomin-figurine-moomintroll': {
    name: 'Mini-figurine Arabia Moomin, Moomin',
    description:
      'Une figurine en céramique faite main, dessinée par Tuulikki Pietilä dans les années 1990 et vendue dans sa propre boîte. Assez petite pour rentrer à la maison dans une poche de manteau.',
    specs: ['Tuulikki Pietilä, années 1990', 'Céramique faite main, vendue dans sa propre boîte'],
    specLabels: ['Designer', 'Fabrication'],
  },
  'fiskars-moominpappa-scissors': {
    name: 'Ciseaux universels Fiskars Papa Moomin',
    description:
      'Les ciseaux Fiskars à manche orange sont dans plus de tiroirs de cuisine finlandais que n’importe quel autre outil. Cette paire mesure 21 cm en acier inoxydable, avec Papa Moomin sur le manche.',
    specs: ['21 cm', 'Acier inoxydable'],
  },
  'rento-tar-sauna-soap': {
    name: 'Savon de sauna au goudron Rento 150 g',
    description:
      'Le goudron de pin est une odeur finlandaise avant d’être un goût finlandais, et sa place est au sauna plus qu’ailleurs. À base d’huile végétale, suspendu à une cordelette de jute pour sécher entre deux passages.',
    specs: ['150 g', 'Savon à base d’huile végétale'],
  },
  'rento-birch-sauna-honey': {
    name: 'Miel de sauna au bouleau Rento 150 ml',
    description:
      'À étaler sur une peau propre, à laisser agir dans la chaleur douce, à rincer à l’eau tiède. Le miel de sauna est la partie du rituel finlandais que les visiteurs ne pensent jamais à rapporter.',
    specs: ['150 ml'],
  },
  'rento-blueberry-sauna-honey': {
    name: 'Miel de sauna à la myrtille Rento 150 ml',
    description:
      'La version exfoliante, parfumée à la myrtille. Même usage que celle au bouleau : sur une peau propre, laissez la chaleur travailler, rincez à l’eau tiède.',
    specs: ['150 ml'],
  },
  'rento-sauna-pillow': {
    name: 'Coussin de sauna Rento Pino 50 x 22 cm',
    description:
      'Un coussin tissé jacquard pour la tête et la nuque sur le banc du sauna. Il garde sa forme, et c’est toute la différence entre un coussin de sauna et une serviette pliée.',
    specs: ['50 x 22 cm', 'Noir'],
  },
  'rento-linen-back-scrubber': {
    name: 'Gant de dos en éponge de lin Rento 14 x 70 cm',
    description:
      'Éponge de lin, assez longue pour atteindre son propre dos. La peau s’assouplit d’abord dans la chaleur et se lave ensuite, et c’est l’ordre que les Finlandais suivent sans y penser.',
    specs: ['14 x 70 cm', 'Éponge de lin'],
  },
  'rento-linen-wash-mitt': {
    name: 'Gant de toilette en éponge de lin Rento 14 x 24 cm',
    description:
      'La même éponge de lin que le gant de dos, en moufle avec la paume doublée. Le moins cher de cette section et celui qui sert vraiment chaque semaine.',
    specs: ['14 x 24 cm', 'Éponge de lin, paume doublée'],
  },
  'emendo-sauna-scents': {
    name: 'Parfums de sauna Emendo : salmiakki, résine de pin, sisu, 3 x 10 ml',
    description:
      'Trois parfums sur un support en bois, et l’un d’eux est le salmiakki. Difficile de faire plus finlandais que le salmiakki et le sauna, et ce coffret met les deux dans la même louche.',
    specs: ['3 x 10 ml sur un support en bois', 'Salmiakki, résine de pin, sisu'],
    specLabels: [undefined, 'Parfums'],
  },
  'aurora-mini-kuksa': {
    name: 'Mini-kuksa avec passant en cuir, 4 cm',
    description:
      'Un kuksa de 4 cm pensé pour un petit verre plutôt que pour du café, avec un passant en cuir pour la ceinture. La façon la plus petite et la moins chère de posséder cette forme.',
    specs: ['Diamètre 4 cm'],
  },
  'fazer-super-salmiakki': {
    name: 'Pastilles Fazer Super Salmiakki 80 g',
    description:
      'La plus dure des classiques du salmiakki, vendue dans la même boîte en forme de bidon depuis les années 1970. Donnez-en une à un visiteur et vous saurez en dix secondes dans quel camp il se range.',
    specs: ['80 g'],
  },
  'fazer-pantteri-salmiakki': {
    name: 'Bonbons au salmiakki Fazer Pantteri 210 g',
    description:
      'Salmiakki tendre au menthol, fabriqué depuis plus de cinquante ans. Plus doux que les pastilles, donc c’est le sachet à offrir à qui n’a jamais goûté au salmiakki.',
    specs: ['210 g'],
  },
  'halva-salmiakkiruutu': {
    name: 'Halva Salmiakkiruutu 170 g',
    description:
      'Halva fabrique ce salmiakki en carrés depuis 1960 à Pitäjänmäki, à Helsinki. Plus élastique que les versions de Fazer et celui dont les Finlandais affirment qu’il est l’original.',
    specs: ['170 g', 'Fabriqué à Pitäjänmäki, Helsinki, depuis 1960'],
  },
  'sisu-xylitol-salmiakki': {
    name: 'Pastilles de salmiakki Sisu Xylitol 36 g',
    description:
      'Du salmiakki sucré au xylitol et portant le label de l’Association dentaire finlandaise. La boîte tient dans une poche de manteau, ce qui explique qu’on en trouve dans toutes les voitures finlandaises.',
    specs: ['36 g', 'Xylitol. Porte le label de l’Association dentaire finlandaise'],
    specLabels: [undefined, 'Édulcorant'],
  },
  'leijona-tar-liquorice': {
    name: 'Pastilles de réglisse au goudron Leijona 32 g',
    description:
      'Réglisse parfumée au goudron de pin, fabriquée depuis 1933. Le goudron est un goût finlandais qui se retrouve dans les bonbons, le savon de sauna et même la glace, et voici la façon la moins chère de l’essayer.',
    specs: ['32 g'],
  },
  'fazer-hazelnut-chocolate': {
    name: 'Karl Fazer chocolat au lait et noisettes entières 200 g',
    description:
      'La tablette bleue avec des noisettes entières prises dans le chocolat au lait. Fazer utilise le même emballage bleu depuis 1922, et c’est pour cela que c’est celle que les Finlandais emportent à l’étranger.',
    specs: ['200 g'],
  },
  'fazer-light-milk-chocolate': {
    name: 'Karl Fazer chocolat au lait clair 180 g',
    description:
      'Une version plus claire et plus douce de la tablette bleue. Si la classique vous semble trop sucrée, c’est celle-ci qu’il faut prendre.',
    specs: ['180 g'],
  },
  'fazer-fazerina': {
    name: 'Tablette truffe à l’orange Fazer Fazerina 99 g',
    description:
      'Truffe à l’orange à l’intérieur du chocolat au lait, fabriquée depuis 1953. Plus fine que la tablette bleue et celle qui survit à un sac à dos sans fondre en un bloc.',
    specs: ['99 g'],
  },
  'fazer-jaffa-orange': {
    name: 'Gâteaux à l’orange Fazer Jaffa 300 g',
    description:
      'Base génoise, marmelade d’orange et chocolat noir par-dessus. Ni biscuit ni gâteau, ce qui est exactement le débat que les Finlandais rouvrent chaque fois.',
    specs: ['300 g'],
  },
  'north-outdoor-arctic-250-balaclava': {
    name: 'Cagoule mérinos North Outdoor Arctic 250',
    description:
      'Le tricot le plus chaud que fabrique North Outdoor, taillé pour se porter sous un casque. En motoneige ou en traîneau à rennes, le froid entre d’abord par le cou et les joues, et c’est cette ouverture que cette couche ferme.',
    specs: [
      'Tricot en laine mérinos, grammage Arctic 250',
      'Taille unique',
      'Noir',
      'North Outdoor, Oulu, Finlande',
    ],
  },
  'north-outdoor-kevo-gloves': {
    name: 'Gants mérinos North Outdoor Kevo',
    description:
      'Tricotés en mérinos sans mulesing dans la propre usine de North Outdoor à Oulu. Assez fins pour rester sous une moufle les jours les plus froids et pour être gardés quand vous prenez une photo.',
    specs: ['100 % laine mérinos, sans mulesing', 'M, L, XL', 'Bleu indigo', 'Tricotés à Oulu, Finlande'],
  },
  'north-outdoor-heavyweight-gaiter': {
    name: 'Tour de cou mérinos North Outdoor Heavyweight',
    description:
      'Polaire mérinos, assez épaisse pour être remontée sur le nez pendant que vous attendez l’apparition des aurores. La laine continue d’isoler quand votre souffle s’y condense, ce qui est tout le problème de rester immobile dans le froid.',
    specs: ['Polaire mérinos', 'Taille unique', 'Noir', 'North Outdoor, Oulu, Finlande'],
  },
  'north-outdoor-sointu-cardigan': {
    name: 'Cardigan mérinos North Outdoor Sointu',
    description:
      'Un cardigan mérinos à la coupe carrée qui se lit comme un vêtement d’intérieur mais fonctionne comme couche intermédiaire. La seule pièce de cet ensemble que vous porteriez au dîner après le safari.',
    specs: ['100 % laine mérinos', 'XS–2XL', 'Latte', 'North Outdoor, Oulu, Finlande'],
  },
  'north-outdoor-arctic-260-zip-neck': {
    name: 'Haut zippé mérinos North Outdoor Arctic 260',
    description:
      'Un haut à col montant zippé en 100 pour cent mérinos, assez épais pour être porté seul à l’intérieur et servir de couche intermédiaire dehors. Le zip est l’essentiel : vous l’ouvrez en marchant et le fermez quand vous vous arrêtez.',
    specs: [
      '100 % laine mérinos',
      'S–3XL',
      'Gris granit et noir',
      'North Outdoor, Oulu, Finlande',
      'Col haut protecteur, zip couvert, bas de dos rallongé',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Détails'],
  },
  'halti-hossa-baselayer-men': {
    name: 'Ensemble sous-vêtement mérinos Halti Hossa II, homme',
    description:
      'Haut et caleçon long dans la même boîte, mérinos 190 g en 20,5 microns. La couche la plus proche de la peau décide si le reste de la tenue fonctionne, et c’est celle avec laquelle la plupart des visiteurs arrivent sans.',
    specs: [
      '100 % laine mérinos, 190 g/m², 20,5 microns, côtes 1x1',
      'Haut à manches longues et caleçon long',
      'Laver sur l’envers',
    ],
    specLabels: [undefined, 'Contenu de l’ensemble', undefined],
  },
  'halti-hossa-baselayer-women': {
    name: 'Ensemble sous-vêtement mérinos Halti Hossa II, femme',
    description:
      'Le même ensemble mérinos 190 g coupé pour les femmes. La laine garde sa chaleur quand vous transpirez en marchant puis restez immobile à regarder, et c’est exactement à quoi ressemble une journée en Laponie.',
    specs: [
      '100 % laine mérinos, 190 g/m², 20,5 microns, côtes 1x1',
      'Haut à manches longues et caleçon long',
      'Laver sur l’envers',
    ],
    specLabels: [undefined, 'Contenu de l’ensemble', undefined],
  },
  'halti-heatgrid-midlayer': {
    name: 'Veste couche intermédiaire Halti HeatGrid, homme',
    description:
      'Un tricot gaufré qui piège l’air sans ajouter de volume sous une coquille. C’est la couche entre le mérinos et la parka, et l’oublier explique pourquoi les gens reviennent gelés.',
    specs: [
      'Tricot gaufré à l’envers 95 % polyester recyclé / 5 % élasthanne ; tricot jersey 92 % polyester recyclé / 8 % élasthanne',
      'Laver sur l’envers avec des couleurs similaires, fermer les fermetures avant le lavage',
    ],
  },
  'halti-taival-dx-jacket': {
    name: 'Veste coquille Halti Taival DX 3L, homme',
    description:
      'Une coquille trois couches classée 20 000 mm d’imperméabilité et 30 000 g de respirabilité. Ces deux chiffres comptent dans des directions différentes : le premier garde la neige fondue dehors, le second laisse la transpiration d’une montée s’échapper au lieu de geler à l’intérieur.',
    specs: [
      'Coquille tricotée DrymaxX Nano, 3 couches. 100 % polyester recyclé',
      '20 000 mm',
      '30 000 g/m²/24 h',
    ],
    specLabels: [undefined, 'Imperméabilité', 'Respirabilité'],
  },
  'halti-sykli-ski-gloves': {
    name: 'Gants de ski Halti Sykli',
    description:
      'Gant imperméable avec 120 g d’isolation, paume en cuir et poignet snowlock qui empêche la neige de s’accumuler au poignet quand vous tombez. Fait pour le ski sur pistes à Levi ou Ylläs plutôt que pour marcher en ville.',
    specs: [
      'DrymaxX, s’étire dans 4 directions, imperméable et coupe-vent. Paume en cuir',
      '120 g Microtherm Dynamic',
      '15 000 mm / 15 000 g/m²/24 h',
    ],
    specLabels: [undefined, 'Isolation', 'Imperméabilité et respirabilité'],
  },
  'halti-merino-socks-2pack': {
    name: 'Chaussettes en laine mérinos Halti, lot de 2',
    description:
      'Deux paires, parce que celle que vous avez portée aujourd’hui ne sera pas sèche demain matin. Mélange mérinos plutôt que laine pure, ce qui supporte mieux les lavages en machine répétés.',
    specs: [
      '40 % laine mérinos, 40 % acrylique, 19 % polyamide, 1 % élasthanne',
      '2 paires',
      'Fabriquées en Europe',
    ],
    specLabels: [undefined, 'Taille du lot', undefined],
  },
  'husky-farm-safari-rovaniemi': {
    name: 'Visite d’une ferme de huskys et safari pour deux, Rovaniemi',
    description:
      'Une carte cadeau pour une visite guidée d’une vraie ferme de huskys près de Rovaniemi, suivie d’une balade en traîneau derrière les chiens dans la forêt d’hiver. Achetée maintenant, livrée par e-mail, la date est choisie par la personne qui la reçoit.',
    specs: [
      'Visite guidée d’une ferme de huskys et safari en traîneau pour deux. Le guide peut venir vous chercher dans un rayon de 10 km autour de Rovaniemi',
      'Environ 3,5 h',
      '2 personnes',
      'Rovaniemi. Le lieu exact est confirmé à la réservation',
      'Mois d’hiver, de novembre à avril',
      'Anglais',
      'Valable 3 ans',
    ],
    specLabels: [undefined, 'Durée', 'Participants', 'Lieu', 'Saison', 'Langue du guide', 'Carte cadeau'],
  },
  'reindeer-safari-rovaniemi': {
    name: 'Safari en traîneau à rennes pour deux, Rovaniemi',
    description:
      'Un safari du soir dans une vraie ferme de rennes près de Rovaniemi : une boucle de 2,5 km derrière les rennes, une visite de la ferme et un petit en-cas. Par nuit claire, les aurores boréales peuvent se montrer, sans que personne ne puisse le promettre.',
    specs: [
      'Entrée dans une ferme de rennes et parcours de 2,5 km en traîneau tiré par des rennes pour deux, avec un petit en-cas. Prise en charge dans un rayon de 10 km autour de Rovaniemi',
      '2,5 à 3 heures',
      '2 personnes',
      'Rovaniemi. Le lieu exact est confirmé à la réservation',
      'Mois d’hiver, de décembre à mars. Le safari a lieu le soir',
      'Anglais',
      'Valable 3 ans',
    ],
    specLabels: [undefined, 'Durée', 'Participants', 'Lieu', 'Saison', 'Langue du guide', 'Carte cadeau'],
  },
  'aurora-tour-kilpisjarvi': {
    name: 'Aurores boréales en motoneige pour deux, Kilpisjärvi',
    description:
      'Kilpisjärvi est connu pour son ciel nocturne exceptionnellement pur. Un court trajet en motoneige vous emmène à deux vers un endroit où observer les aurores dans un calme total, avec des boissons chaudes contre le froid. Le soir de 20.00 à 23.00, sous réserve météo.',
    specs: [
      'Sortie guidée aux aurores boréales pour deux, environ 15 km en motoneige, boissons chaudes comprises',
      '3 heures, de 20.00 à 23.00',
      '2 personnes',
      'Kilpisjärvi',
      '18 ans pour conduire, 8 ans dans le traîneau',
      'Valable 3 ans',
    ],
    specLabels: [undefined, 'Durée', 'Participants', 'Lieu', 'Limite d’âge', 'Carte cadeau'],
  },
  'glass-igloo-night-levi': {
    name: 'Nuit en igloo de verre pour deux, Levi',
    description:
      'Une nuit à deux dans un igloo de verre chauffé, haut sur le fjell de Levi. Le verre chauffé électriquement reste limpide pendant que vous guettez les aurores depuis un lit double motorisé. Boisson de bienvenue, peignoirs et petit déjeuner compris, avec kitchenette, douche et WC.',
    specs: [
      'Une nuit pour deux dans un igloo de verre de classe Superior, boisson de bienvenue, peignoirs et chaussons, petit déjeuner. Transport non compris',
      '1 nuit, départ à 11.00',
      '2 personnes',
      'Levi, en haut du fjell',
      '23 m², verre chauffé antibuée, kitchenette, douche et WC, lit double motorisé',
      'Valable pour des séjours du 27.08-10.11 et du 01.04-12.04',
    ],
    specLabels: [undefined, 'Durée', 'Participants', 'Lieu', 'Igloo', 'Carte cadeau'],
  },
  'gold-panning-day-inari': {
    name: 'Journée d’orpaillage pour quatre, Inari',
    description:
      'Une journée sur une concession aurifère en activité à Inari pour un groupe de quatre : d’abord l’histoire, puis le lavage à la main et un aperçu de l’extraction mécanique. Repas et transport depuis le centre de Saariselkä compris, et l’or trouvé repart avec le groupe.',
    specs: [
      'Une journée d’orpaillage de 5 heures sur une concession en activité pour quatre, avec initiation au lavage à la main et découverte de l’extraction mécanique. Repas de la journée, matériel et transport du centre de Saariselkä à la concession et retour compris',
      '5 heures',
      '4 personnes',
      'Inari',
      'Saisons de printemps et d’été',
      'Valable 3 ans',
    ],
    specLabels: [undefined, 'Durée', 'Participants', 'Lieu', 'Saison', 'Carte cadeau'],
  },
}
