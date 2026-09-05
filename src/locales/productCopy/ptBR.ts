import type { ProductCopyMap } from './index'

/**
 * Tuotteiden brasilianportugalinkieliset tekstit. Rakenne ja säännöt: ks. de.ts.
 *
 * `specs` on positionaalinen: indeksi vastaa `product.details.specs`-taulukon
 * järjestystä lähdedatassa. `specLabels` samoin, ja siinä on arvo vain niillä
 * riveillä joilla on oma otsikko (`key: 'other'`).
 *
 * Lukuja, mittayksiköitä, tuotekoodeja ja EAN-numeroita ei käännetä eikä
 * muunneta. Numerofragmentit kopioidaan lähteestä sellaisinaan, myös
 * välilyöntien osalta; vain desimaalierotin vaihtuu pilkuksi.
 */
export const PRODUCT_COPY_PT_BR: ProductCopyMap = {
  'moomin-mystical-forest-wool-throw': {
    name: 'Manta de lã Moomin Mystical Forest 130×170 cm',
    description:
      'Uma manta de 130 por 170 cm em 100 por cento lã, desenhada na Finlândia para a coleção Mystical Forest. Só lavagem a seco, então trate como manta de sofá e não como toalha de piquenique.',
    specs: [
      '100 % lã',
      '130 x 170 cm',
      'Azul',
      'Lavagem a seco, processo suave',
      'Desenhada na Finlândia, fabricada na Lituânia',
      'Mystical Forest',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, 'Coleção'],
  },
  'iittala-aalto-vase-160': {
    name: 'Vaso Iittala Alvar Aalto 160 mm, transparente',
    description:
      'Alvar Aalto desenhou esta onda em 1936 e a Iittala ainda a sopra à boca, então o contorno de cada peça muda um pouco. O tamanho de 160 mm é o que as pessoas imaginam quando ouvem o nome.',
    specs: [
      'Altura 16 cm, largura 20,5 cm',
      'Vidro',
      'Transparente',
      '1,44 kg bruto',
      'Somente lavagem à mão',
      'Vidro soprado à boca, formato assimétrico',
      'Alvar Aalto, Iittala Alvar Aalto Collection',
      '999-01, EAN 6411920004445',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      'Fabricação',
      'Designer e coleção',
      'Código do artigo e EAN',
    ],
  },
  'iittala-kivi-candleholder': {
    name: 'Porta-velas Iittala Kivi 60 mm, verde pinho',
    description:
      'Um porta-velas de vidro prensado de Heikki Orvola, com 6 cm de altura, que transforma uma vela rechaud em um bloco de cor. É o jeito mais barato de ter uma peça da Iittala e sobrevive à bagagem de mão.',
    specs: [
      '6,5 x 6,5 cm, altura 6 cm',
      'Vidro',
      'Verde',
      '0,33 kg bruto',
      'Somente lavagem à mão',
      'Heikki Orvola, Iittala Kivi',
      '636883-01, EAN 6411923683937',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      'Designer e coleção',
      'Código do artigo e EAN',
    ],
  },
  'marimekko-unikko-mug': {
    name: 'Caneca Marimekko Unikko 25 cl',
    description:
      'Maija Isola desenhou a papoula Unikko em 1964, depois de a Marimekko ter proibido estampas florais, e o padrão sobreviveu à proibição. Esta caneca de grés tem 25 cl e leva a estampa para a mesa do café da manhã em vez da parede.',
    specs: [
      '25 cl',
      'Diâmetro 8 cm, altura 9,5 cm',
      'Grés',
      'Branco, verde escuro, bege e areia claro',
      '0,276 kg bruto',
      'Estampa de Maija Isola, caneca de Sami Ruotsalainen',
      '666236-01, EAN 6411255152033',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      'Designers',
      'Código do artigo e EAN',
    ],
  },
  'aarikka-prinsessa-candleholder': {
    name: 'Castiçal Aarikka Prinsessa',
    description:
      'A Aarikka tornea contas de bétula desde os anos 1950, e o Prinsessa usa uma coroa delas em volta de um suporte de 5,5 cm que aceita uma vela rechaud ou uma vela reta. Pequeno o bastante para postar e reconhecível o bastante na Finlândia.',
    specs: [
      'Altura 5,5 cm, diâmetro 6 cm',
      'Bétula, bordo, alumínio',
      '98 g',
      'Desenhado na Finlândia, fabricado na Itália',
      'Castiçal com uma coroa de contas de madeira. Serve para velas rechaud e velas retas',
      'B08633',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, 'Código do produto'],
  },
  'aarikka-pore-glass-vase': {
    name: 'Vaso de vidro Aarikka Pore 16 cm, verde escuro',
    description:
      'Um vaso redondo soprado à mão, 1,7 litro, com uma coroa de contas de bordo tingidas à mão na Finlândia. As bolhas de ar no vidro fazem parte da peça, e a coroa sai antes da lavagem.',
    specs: [
      'Altura 16 cm, diâmetro 16 cm',
      '1,7 l',
      'Vidro e bordo',
      'Transparente e verde',
      'Vidro fabricado na Polônia, coroa de madeira fabricada na Finlândia',
      'Lavar à mão. Retirar a coroa de madeira antes de lavar',
      'B08706',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, undefined, 'Código do produto'],
  },
  'halti-tokoi-dx-jacket': {
    name: 'Jaqueta shell Halti Tokoi DX, masculina',
    description:
      'Uma shell resistente ao tempo com todas as costuras seladas, forro leve e capuz ajustável, com corte folgado o suficiente para levar um suéter de lã por baixo. A Halti entrega apenas dentro da União Europeia.',
    specs: [
      'DrymaxX Sleek Twill, um tecido de 2 camadas impermeável e corta-vento com membrana DrymaxX. Composição 50 % poliéster reciclado e 50 % poliéster',
      'Forro macio de poliéster, 100 % poliéster reciclado',
      '10000 mm',
      '10000 g/m²/24 h',
      '0,9 kg',
      'S, M, L, XL, XXL, XXXL',
      'Fossil Beige, Four Leaf Clover Green, Black',
      'Todas as costuras seladas, capuz fixo ajustável, gola alta, zíper frontal de 2 vias, ventilação em tela, bolsos com zíper, bolso interno com botão de pressão, punhos ajustáveis, aba corta-vento, detalhes refletivos',
      'Lavar do avesso com cores parecidas e fechar antes os zíperes. Máximo 30 °C, processo suave. Não usar alvejante, não secar na secadora, não passar a ferro nem lavar a seco',
    ],
    specLabels: [
      undefined,
      'Forro',
      'Impermeabilidade',
      'Respirabilidade',
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
      'Um gorro nórdico simples em lã merino, que equilibra temperatura e umidade quando você sai de um café quente direto para o frio. Sem logotipo do tamanho de um punho na frente.',
    specs: [
      '100 % lã merino, ponto inglês galga 8, livre de mulesing',
      'Tamanho único',
      'Dark Brown',
      'Fabricado na Finlândia, material fabricado na Itália',
      'Lavar com cores parecidas em ciclo delicado, secar na horizontal e ajustar o formato. Arejar costuma bastar no lugar da lavagem. Podem surgir bolinhas com o uso',
    ],
  },
  'makia-aurora-hoodie': {
    name: 'Moletom com capuz Makia Aurora',
    description:
      'Um moletom com capuz de modelagem regular em 100 por cento algodão orgânico da marca de Helsinque Makia. Grosso o bastante para usar como camada externa em ambientes internos e em noites amenas de outono.',
    specs: [
      '100 % algodão orgânico, french terry de 370 g',
      'S, M, L, XL, XXL',
      'Carbon Black',
      'Modelagem regular, cordões no capuz, bolso canguru, punho e barra em ribana, etiquetas tecidas de poliéster reciclado',
      'Fabricado na Turquia, material fabricado na Turquia',
      'Lavar do avesso com cores parecidas. Não passar a ferro sobre a estampa. Encolhimento máximo 5 %. Ajustar o formato ainda úmido',
    ],
    specLabels: [undefined, undefined, undefined, 'Modelagem e detalhes', undefined, undefined],
  },
  'halti-kroka-mitten': {
    name: 'Luva mitene Halti Kroka II',
    description:
      'Uma mitene corta-vento com 60 g de isolamento e palma com aderência de silicone, de corte unissex. Mitenes ganham das luvas quando o vento aperta, porque os dedos se aquecem uns aos outros.',
    specs: [
      'Softshell Stormwall, 50 % poliéster e 50 % poliéster reciclado. Fleece macio 100 % poliéster. Punhos em malha de lycra',
      'Microtherm Dynamic 60 g, forro Active Dry soft touch, 100 % poliéster reciclado',
      '0,1 kg',
      '06, 07, 08, 09, 10, 11, 12',
      'Preto',
      'Lavar separadamente a 30 °C em ciclo suave. Não usar alvejante, não secar na secadora, não passar a ferro nem lavar a seco',
      '084-0757',
    ],
    specLabels: [
      undefined,
      'Isolamento e forro',
      undefined,
      undefined,
      undefined,
      undefined,
      'Código do produto',
    ],
  },
  'halti-tunturit-ski-socks': {
    name: 'Meias de esqui Halti Tunturit',
    description:
      'Meias até o joelho em mescla de merino com acolchoamento na canela e no tornozelo, os pontos onde a bota de esqui aperta. A Halti informa que são fabricadas na Europa.',
    specs: [
      'Mescla de lã merino: 36 % poliamida, 23 % acrílico, 23 % lã merino, 16 % polipropileno, 2 % elastano',
      '0,1 kg',
      '34-36, 37-39, 40-42, 43-45, 46-48',
      'Sargasso Sea Blue, Lemon Pepper Beige',
      'Fabricadas na Europa',
      'Acolchoamento na canela e no tornozelo, comprimento até o joelho, calcanhar e ponta reforçados, zonas de ventilação na canela e no peito do pé',
      'Máximo 40 °C, processo normal. Não passar a ferro, não usar alvejante, não lavar a seco nem secar na secadora',
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
      'Código do produto',
    ],
  },
  'north-outdoor-huuru-beanie': {
    name: 'Gorro de merino North Outdoor Huuru',
    description:
      'A North Outdoor tricota este gorro canelado na própria malharia em Oulu com 100 por cento merino livre de mulesing, de 18,5 mícrons. Tricotado no formato final em vez de cortado, então sobra pouco retalho.',
    specs: [
      '100 % lã merino, livre de mulesing, 18,5 mícrons, malha 270 g/m²',
      'Tamanho único',
      'Azul índigo',
      'Fabricado em Oulu, Finlândia',
      'Areje com frequência e lave só quando precisar. Sabão para lã, ciclo delicado a 30 °C com a centrifugação mais baixa, do avesso',
      'OEKO-TEX, Woolmark',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, 'Certificados'],
  },
  'north-outdoor-pyry-scarf': {
    name: 'Cachecol de merino North Outdoor Pyry',
    description:
      'Um cachecol largo e comprido em ponto inglês, 100 por cento merino, tricotado em Oulu. Comprido o bastante para enrolar de várias formas, o que importa quando o vento muda de direção em uma montanha aberta.',
    specs: [
      '100 % lã merino, 18,5 mícrons, canelado 1/1',
      'Tamanho único',
      'Cinza aveia',
      'Fabricado em Oulu, Finlândia',
      'Areje com frequência e lave só quando precisar. Sabão para lã, ciclo delicado a 30 °C com a centrifugação mais baixa, do avesso',
      'OEKO-TEX, Woolmark',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, 'Certificados'],
  },
  'north-outdoor-honka-jumper': {
    name: 'Suéter de merino North Outdoor Honka, masculino',
    description:
      'Um suéter grosso em ponto inglês, 100 por cento merino, com caimento solto e ombro caído. Pesado de olhar, leve de vestir, e tricotado na malharia de Oulu.',
    specs: [
      '100 % lã merino, livre de mulesing, 18,5 mícrons, canelado variável',
      'S, M, L, XL, 2XL, 3XL',
      'Azul índigo',
      'Fabricado em Oulu, Finlândia',
      'Areje com frequência e lave só quando precisar. Sabão para lã, ciclo delicado a 30 °C com a centrifugação mais baixa, do avesso',
      'OEKO-TEX, Woolmark',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, 'Certificados'],
  },
  'marttiini-lapinleuku-255': {
    name: 'Faca lapã Marttiini 255',
    description:
      'A faca lapã tradicional, 27 cm no total, com lâmina inoxidável, cabo de bétula flamejada envernizado e bainha de couro. A Marttiini faz suas facas em Rovaniemi, e esta versão do modelo tem guarda-mão.',
    specs: [
      '16 cm',
      'Comprimento total 27 cm',
      'Lâmina de aço inoxidável, cabo de bétula flamejada envernizado, bainha de couro',
      'Faca e bainha de couro com fecho de pressão',
      '255010',
    ],
    specLabels: ['Comprimento da lâmina', undefined, undefined, undefined, 'Código do produto'],
  },
  'marttiini-napapiirin-puukko': {
    name: 'Faca Marttiini Círculo Polar',
    description:
      'Uma faca pequena para o dia a dia, 20 cm no total, com lâmina de aço carbono, cabo de bétula encerado e bainha de couro marrom. O aço carbono fica mais afiado que o inoxidável, mas precisa de óleo, o que a Marttiini também lembra na página do produto.',
    specs: [
      '9 cm',
      'Comprimento total 20 cm',
      'Lâmina de aço carbono, cabo de bétula encerado, bainha de couro marrom',
      'Seque sempre bem a lâmina depois de usar e passe óleo sem sal com regularidade',
      '121019',
    ],
    specLabels: ['Comprimento da lâmina', undefined, undefined, undefined, 'Código do produto'],
  },
  'marttiini-ilves-131': {
    name: 'Marttiini Lince 131',
    description:
      'Uma faca de 22 cm com lâmina inoxidável, cabo de bétula flamejada envernizado e bainha de couro marrom. A Marttiini informa que o modelo Lince foi desenhado pelo fundador Janne Marttiini nos anos 1930.',
    specs: [
      '11 cm',
      'Comprimento total 22 cm',
      'Lâmina de aço inoxidável, cabo de bétula flamejada envernizado, bainha de couro marrom',
      '131010',
    ],
    specLabels: ['Comprimento da lâmina', undefined, undefined, 'Código do produto'],
  },
  'kupilka-classic-cup-21': {
    name: 'Caneca de acampamento Kupilka 21, 2,1 dl',
    description:
      'O formato do kuksa em um material que pode ir à máquina de lavar louça: metade fibra de celulose de pinho, metade termoplástico, moldado na Finlândia. Tem 2,1 dl, pesa 83 gramas e não queima os dedos perto do fogo.',
    specs: [
      '2,1 dl',
      '83 g',
      '60 x 93 x 165 mm',
      'Compósito de fibra natural Kareline, 50 % fibra de celulose de pinho e 50 % termoplástico, feito com energia verde',
      'Finlândia',
      'Na trilha, enxágue como um kuksa de madeira; em casa vai à máquina de lavar louça. Não vai ao micro-ondas',
      '3021011XX',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, undefined, 'Número do modelo'],
  },
  'kupilka-bowl-55': {
    name: 'Tigela de acampamento Kupilka 55, 5,5 dl',
    description:
      'Uma tigela de 5,5 dl com uma alça firme o bastante para segurar com uma mão enquanto a outra fica com a caneca. Mesmo compósito finlandês de fibra de pinho da caneca, 184 gramas, pode ir à máquina de lavar louça.',
    specs: [
      '5,5 dl',
      '184 g',
      '54 x 154 x 223 mm',
      'Compósito de fibra natural Kareline, 50 % fibra de celulose de pinho e 50 % termoplástico, feito com energia verde',
      'Finlândia',
      'Pode ir à máquina de lavar louça. Não vai ao micro-ondas. Aprovada para contato com alimentos quentes e frios',
      '3055013X',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, undefined, 'Número do modelo'],
  },
  'kupilka-cutlery-set': {
    name: 'Jogo de talheres Kupilka',
    description:
      'Colher, faca e garfo no mesmo compósito finlandês de fibra de madeira, 56 gramas o conjunto. O jeito mais barato de levar o material da Kupilka para casa e o mais fácil de caber na bagagem de mão.',
    specs: [
      'Colher, faca e garfo',
      '56 g',
      'Compósito de fibra natural Kareline, 50 % fibra de celulose de pinho e 50 % termoplástico, feito com energia verde',
      'Finlândia',
      'Na trilha, enxágue como talheres de madeira; em casa vão à máquina de lavar louça. Não vão ao micro-ondas',
      '3025025X',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, 'Número do modelo'],
  },
  'lapuan-kankurit-poro-towel': {
    name: 'Toalha de linho Lapuan Kankurit PORO 46 x 70 cm',
    description:
      'Uma rena desenhada pelo ilustrador Matti Pikkujämsä, tecida na fábrica em Lapua com urdume de linho europeu e trama de algodão orgânico. Dobra plana na mala, e a absorção só aparece depois de algumas lavagens.',
    specs: [
      '46 x 70 cm',
      '60 % linho, Masters of Linen, e 40 % algodão',
      'Linho e verde',
      'Fabricada na Finlândia',
      'Lavar separadamente antes de usar a 60 °C em ciclo delicado com bastante água. Não centrifugar. Evitar amaciante e alvejante. Não secar na secadora. Passar a ferro ainda úmida. Encolhimento aprox. 5 %',
      'Matti Pikkujämsä',
      '20527',
      'Bandeira-Chave finlandesa, Masters of Linen',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      'Designer',
      'Código do produto',
      'Certificados',
    ],
  },
  'lapuan-kankurit-kaamos-blanket': {
    name: 'Manta de lã Lapuan Kankurit KAAMOS 100 x 150 cm',
    description:
      'Kaamos é a noite polar, e Hanna Galtat tirou o padrão do jeito como a luz do dia se move ao longo das horas. O fio de trama é lã de ovelha finlandesa que a fábrica recolhe em propriedades a cerca de 400 km de Lapua.',
    specs: [
      '100 x 150 cm',
      '100 % lã virgem pura',
      'Branco e preto',
      'Fabricada na Finlândia',
      'Lave só se estiver muito suja, caso contrário areje ao ar livre. Lavagem à mão a no máximo 30 °C ou lavagem a seco. Não esfregar, esticar nem torcer. Não secar na secadora. Passar a ferro com pano úmido a no máximo 150 °C',
      'Hanna Galtat',
      '102939',
      'Bandeira-Chave finlandesa',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      'Designer',
      'Código do produto',
      'Certificado',
    ],
  },
  'pentik-posio-mug': {
    name: 'Caneca Pentik Posio 0,3 l',
    description:
      'A Pentik queima esta caneca em Posio, que a empresa chama de fábrica de cerâmica mais setentrional do mundo, e toda a linha Posio é decorada com renas. Vai à máquina de lavar louça, ao forno, ao micro-ondas e ao congelador.',
    specs: [
      '0,3 l',
      'Vermelho',
      'Fabricada em Posio, na Lapônia, que a Pentik chama de fábrica de cerâmica mais setentrional do mundo',
      'Pode ir à máquina de lavar louça, ao forno elétrico, ao forno de assar, ao micro-ondas e ao congelador',
      'Posio. Cada peça da linha é decorada com renas',
      '12JAO050P41',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Coleção', 'Código do produto'],
  },
  'pentik-tunturiretki-studio-dish': {
    name: 'Travessa triangular funda Pentik Tunturiretki Winter Studio 19 cm',
    description:
      'Anu Pentik pintou as renas que continuam aparecendo entre as árvores em uma caminhada na montanha. As peças Studio são pintadas à mão em Posio, então não há duas travessas com exatamente as mesmas pinceladas.',
    specs: [
      'Diâmetro 19 cm',
      'Azul',
      'Feita à mão em Posio, na Lapônia, desenhada por Anu Pentik',
      'Pode ir à máquina de lavar louça, ao forno elétrico, ao forno de assar, ao micro-ondas e ao congelador',
      'Pentik Studio, a linha pintada à mão',
      '12ST353TT61',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Coleção', 'Código do produto'],
  },
  'kuivalihakundi-poro-jerky': {
    name: 'Carne seca de rena Original 2 x 20 g',
    description:
      'Dois saquinhos de 20 gramas de carne seca de rena feita com 100 por cento rena finlandesa, seca no forno e marinada com molho de soja sem glúten, pimenta-do-reino, alho e xarope de açúcar. Carne não pode ser postada para fora da União Europeia, então a entrega para na fronteira europeia.',
    specs: [
      '2 x 20 g',
      'Carne da Finlândia',
      'As datas correm cerca de um ano a partir do dia em que a carne foi seca e embalada. Não precisa de refrigeração, nem depois de aberta',
      'Fortemente salgada. Sem glúten',
      'Energia 1514 kJ / 360 kcal, gorduras 14,2 g das quais saturadas 6,2 g, carboidratos 7,9 g dos quais açúcares 5,1 g, proteínas 50,2 g, sal 9,5 g',
    ],
    specLabels: [undefined, undefined, undefined, 'Indicações do rótulo', 'Informação nutricional por 100 g'],
  },
  'finnish-flavours-palalaku-salmiakki': {
    name: 'Finnish Flavours Premium Palalaku salmiakki 150 g',
    description:
      'Um pacote de 150 gramas de alcaçuz salmiakki macio, o do cloreto de amônio que divide os visitantes em dois grupos já no primeiro pedaço. A Suomikauppa envia alimentos para bem além da Finlândia.',
    specs: [
      '150 g',
      'Energia 1316 kJ / 311 kcal, gorduras 0,5 g das quais saturadas 0 g, carboidratos 72 g dos quais açúcares 50 g, proteínas 4,1 g, sal 1,7 g',
      'Finnish Flavours, Kumitehtaankatu 5, 04260 Kerava',
    ],
    specLabels: [undefined, 'Informação nutricional por 100 g', 'Comercializado por'],
  },
  'meritalo-tyrnihillo': {
    name: 'Geleia finlandesa de espinheiro-marítimo Meritalo 310 g',
    description:
      'Geleia de espinheiro-marítimo com 37 gramas de frutas por 100 gramas, cozida com espinheiro-marítimo finlandês na fazenda familiar Meritalo em Salo, no sudoeste da Finlândia e não na Lapônia. O espinheiro-marítimo é ácido e não doce, então rende mais ao lado de um queijo do que sobre uma panqueca.',
    specs: [
      '310 g',
      'As frutas são finlandesas. Produzida por uma empresa familiar na fazenda Meritalo em Salo, no sudoeste da Finlândia',
      'Energia 781 kJ / 187 kcal, gorduras 1,9 g das quais saturadas 0,3 g, carboidratos 41 g dos quais açúcares 41 g, proteínas 0,3 g, sal 0,01 g',
      'Marjajaloste Meritalo Oy, 25610 Ylönkylä',
    ],
    specLabels: [undefined, undefined, 'Informação nutricional por 100 g', 'Comercializada por'],
  },
  'kuivalihakundi-poro-jerky-200g': {
    name: 'Carne seca de rena Original 200 g',
    description:
      'O tamanho presente da mesma carne seca de rena, 200 gramas. O produtor informa que um quilo de carne seca exige três quilos de carne fresca, o que explica a maior parte do preço de um pacote.',
    specs: [
      '200 g',
      '100 % carne de rena, coxão, seca no forno e marinada',
      '1 kg de carne seca exige 3 kg de carne fresca',
      'As datas correm cerca de um ano a partir do dia em que a carne foi seca e embalada. Não precisa de refrigeração, nem depois de aberta',
    ],
    specLabels: [undefined, undefined, 'Carne utilizada', undefined],
  },
  'kuivalihakundi-beef-jerky-smoked': {
    name: 'Carne seca bovina Smoked 40 g',
    description:
      'Carne bovina em vez de rena, de fato defumada e não só aromatizada, 57 gramas de proteína por 100. O item mais barato desta categoria e o que sobrevive a uma mochila.',
    specs: [
      '40 g',
      'Bovino criado e abatido na União Europeia',
      '1 kg de carne seca exige 2,5 kg de carne bovina fresca',
      'Energia 1261 kJ / 298 kcal, gorduras 5,5 g das quais saturadas 2,4 g, carboidratos 5,2 g dos quais açúcares 4,4 g, proteínas 56,9 g, sal 5 g',
    ],
    specLabels: [undefined, undefined, 'Carne utilizada', 'Informação nutricional por 100 g'],
  },
  'fazer-geisha-chocolate-bar': {
    name: 'Barra Fazer Geisha de torrone de avelã 121 g',
    description:
      'Chocolate ao leite sobre um recheio crocante de torrone de avelã, a barra que a maioria das casas finlandesas guarda numa gaveta. A Fazer informa que é feita sem óleo de palma.',
    specs: [
      '121 g',
      'Chocolate ao leite com pelo menos 30 % de cacau, recheio de torrone com 11 % de avelãs',
      'Energia 550 kcal / 2302 kJ, gorduras 35 g, saturadas 17 g, carboidratos 51 g, açúcares 49 g, proteínas 8 g, sal 0,19 g',
    ],
    specLabels: [undefined, undefined, 'Informação nutricional por 100 g'],
  },
  'nordqvist-moomin-forest-berry-tea': {
    name: 'Chá Nordqvist Moomin de frutas do bosque e hibisco, 20 sachês',
    description:
      'Hibisco orgânico com maçã e frutas do bosque, naturalmente sem cafeína, misturado na fábrica da Nordqvist em Nurmijärvi. Vinte sachês pesam 35 gramas, o presente mais leve desta loja.',
    specs: [
      '20 x 1,75 g, 35 g',
      'Misturado na fábrica da Nordqvist em Nurmijärvi, Finlândia',
      '95 °C por 2 a 4 minutos. Em água fria, de 5 a 10 minutos',
      'Certificado orgânico, vegano, sem glúten, naturalmente sem cafeína',
    ],
    specLabels: [undefined, undefined, 'Preparo', 'Dieta'],
  },
  'nordqvist-cranberry-toffee-tea': {
    name: 'Chá Nordqvist de cranberry e caramelo salgado, 20 sachês',
    description:
      'Cranberry ácido contra caramelo salgado sobre uma base de hibisco e rooibos, então é sem cafeína e ainda tem sabor à noite. A Nordqvist mistura chá na Finlândia desde 1883.',
    specs: [
      '20 x 1,75 g, 35 g',
      '95 °C por 2 a 5 minutos',
      'Vegano. Hibisco e rooibos têm certificação Rainforest Alliance',
    ],
    specLabels: [undefined, 'Preparo', 'Dieta e certificação'],
  },
  'moomin-wild-blueberry-coffee': {
    name: 'Café Moomin Wild Blueberry 250 g',
    description:
      'Café com sabor de mirtilo da Bergstrands Kafferosteri, construído sobre grãos moka amadurecidos nas colinas da Mogiana, no sudeste do Brasil. Um grão moka é uma cereja de café que formou um grão só em vez de dois, o que segundo a torrefação concentra o sabor. 250 gramas.',
    specs: [
      '250 g',
      'Grãos das colinas da Mogiana, no sudeste do Brasil, torrados pela Bergstrands Kafferosteri',
      'Grão moka, uma cereja de café com um único grão em vez de dois',
      'Mirtilo silvestre',
    ],
    specLabels: [undefined, undefined, 'Grão', 'Sabor'],
  },
  'moomin-lingonberry-blueberry-dark-chocolate': {
    name: 'Chocolate amargo Moomin com airela e mirtilo 70 g',
    description:
      'Chocolate amargo orgânico com 70 por cento de cacau da Kalmar Chokladfabrik com airelas e mirtilos liofilizados, embrulhado em um desenho de Tove Jansson. O cacau é Criollo e Trinitario do Peru e a barra é feita na Suécia.',
    specs: [
      '70 g',
      'Chocolate amargo, 70 % de cacau',
      'Grãos de cacau Criollo e Trinitario do Peru, fabricado na Suécia',
      'Orgânico',
    ],
    specLabels: [undefined, undefined, undefined, 'Dieta'],
  },
  'moomin-berry-picking-tea': {
    name: 'Chá Moomin Berry Picking, 20 sachês',
    description:
      'Chá preto com sabor de baunilha e frutas vermelhas, misturado na fábrica de Nurmijärvi na Finlândia e com a Bandeira-Chave finlandesa. O chá é uma parceria com a Cruz Vermelha Finlandesa: 0,40 euro de cada pacote vendido vai para o trabalho da Cruz Vermelha com crianças, jovens e pessoas sozinhas.',
    specs: [
      '20 x 1,75 g, 35 g',
      'Produzido na fábrica de Nurmijärvi na Finlândia',
      'Chá com certificação Rainforest Alliance, Bandeira-Chave finlandesa',
      'Vegano',
    ],
    specLabels: [undefined, undefined, 'Certificação', 'Dieta'],
  },
  'arctic-power-berries-blueberry-powder': {
    name: 'Pó de mirtilo silvestre 70 g',
    description:
      'Mirtilo silvestre liofilizado, sem nada adicionado. O produtor informa que cerca de 700 gramas de frutas frescas entram em um pote de 70 gramas. Esta loja precifica em libras esterlinas.',
    specs: [
      '70 g',
      '100 % pó de mirtilo feito com mirtilos silvestres nórdicos. Sem nada adicionado',
      'Cerca de 700 g de frutas frescas rendem 70 g de pó de frutas',
      'Energia 367 kcal / 1559 kJ, proteínas 5 g, carboidratos 54 g dos quais açúcares 34 g, fibras 31 g, gorduras 0,8 g, sal 0,01 g',
    ],
    specLabels: [undefined, undefined, 'Frutas utilizadas', 'Informação nutricional por 100 g'],
  },
  'arctic-power-berries-sea-buckthorn-powder': {
    name: 'Pó de espinheiro-marítimo 70 g',
    description:
      'Espinheiro-marítimo nórdico liofilizado, 70 gramas, sem nada adicionado. Ácido e de laranja intenso, então uma colher de chá rende mais no mingau do que se imagina. Esta loja precifica em libras esterlinas.',
    specs: [
      '70 g',
      '100 % pó de espinheiro-marítimo feito com frutos nórdicos de espinheiro-marítimo. Sem nada adicionado',
      'Cerca de 700 g de frutas frescas rendem 70 g de pó de frutas',
      'Energia 489 kcal / 2045 kJ, proteínas 13 g, carboidratos 24 g dos quais açúcares 14 g, fibras 28 g, gorduras 25 g, sal 0,06 g',
    ],
    specLabels: [undefined, undefined, 'Frutas utilizadas', 'Informação nutricional por 100 g'],
  },
  'kaapa-mushrooms-pakuri-powder': {
    name: 'Pó de extrato de chaga Kääpä Mushrooms 30 g',
    description:
      'Um pote de 30 gramas de pó de extrato de chaga da Kääpä Mushrooms, que colhe cogumelos funcionais em florestas nórdicas, pensado para dissolver em bebidas quentes. A Ruohonjuuri entrega apenas dentro do território aduaneiro e fiscal da União Europeia, e o rótulo lista interações com medicamentos que vale ler antes.',
    specs: [
      '30 g',
      '100 % chaga, orgânico. 100 mg de betaglucana por dose diária',
      'Finlândia',
      'Orgânico com a folha orgânica europeia. Sem glúten, sem lactose, sem laticínios, sem soja, sem açúcar, sem cafeína, sem aditivos, vegano, silvestre',
      'A chaga não deve ser usada junto com antibióticos, anticoagulantes, penicilina ou glicose intravenosa. Tome a dose indicada na embalagem e não a ultrapasse',
      '6430071310212',
    ],
    specLabels: [undefined, undefined, undefined, 'Dieta', 'Advertência', 'EAN'],
  },
  'arctic-warriors-spruce-sprout-powder': {
    name: 'Pó de brotos de abeto Arctic Warriors 40 g',
    description:
      'Brotos de abeto liofilizados, colhidos à mão em uma janela de duas semanas em florestas estatais orgânicas, e só a cada dois anos na mesma floresta. Cítrico e resina em uma colher, 382 mg de vitamina C por 100 g.',
    specs: [
      '40 g',
      'Brotos de abeto liofilizados',
      '382 mg por 100 g',
    ],
    specLabels: [undefined, undefined, 'Vitamina C'],
  },
  'arctic-warriors-nettle-powder': {
    name: 'Pó de urtiga Arctic Warriors 150 g',
    description:
      'Urtiga cultivada em fazendas orgânicas na Lapônia, liofilizada em um pó neutro o bastante para entrar em uma sopa ou no pão sem brigar com o resto do prato.',
    specs: [
      '150 g, bruto 0,162 kg',
      '4 x 16 x 23 cm',
      'Urtiga liofilizada',
      'Finlândia, cultivada em fazendas orgânicas na Lapônia',
      'De 1 a 5 colheres de chá por dia',
      'Energia 1484 kJ / 354 kcal, proteínas 23,6 g, carboidratos 56 g, gorduras 3,44 g, sal menos de 5 mg. Vitamina A 1900 µg',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Dosagem', 'Informação nutricional por 100 g'],
  },
  'arctic-warriors-roseroot-elixir': {
    name: 'Elixir de raiz-de-ouro Arctic Warriors 100 ml',
    description:
      'A raiz-de-ouro cresce nas margens úmidas dos córregos e nas paredes de rocha das montanhas da Lapônia, e a Arctic Warriors a extrai em glicerol vegetal junto com urtiga. Uma colher de chá vai no chá, no mingau ou no iogurte.',
    specs: [
      '100 ml',
      'Rodiola e urtiga',
    ],
  },
  'omega7-sea-buckthorn-olive-oil': {
    name: 'Omega7 SBA24 óleo de espinheiro-marítimo e azeite 150 ml',
    description:
      'Óleo da fruta e da semente do espinheiro-marítimo junto com azeite de oliva, desenvolvido e produzido na Finlândia. O produtor padroniza os níveis de vitamina A e E em vez de deixá-los por conta da colheita.',
    specs: [
      '150 ml',
      'Óleo da fruta e da semente do espinheiro-marítimo com azeite de oliva, níveis de vitamina A e E padronizados',
      'Desenvolvido e produzido na Finlândia',
      'Siga a dose da embalagem e não a ultrapasse. Um suplemento alimentar não substitui uma alimentação variada. Manter fora do alcance de crianças',
    ],
    specLabels: [undefined, undefined, undefined, 'Observação'],
  },
  'kaino-spruce-sprout-sparkling': {
    name: 'Bebida gaseificada de brotos de abeto KAINO Drinks 0,2 l',
    description:
      'Uma bebida gaseificada sem álcool feita com ingredientes orgânicos finlandeses, para que um brinde na cabana não precise envolver álcool. Sirva gelada, ou o aroma de abeto desaparece sob as bolhas.',
    specs: [
      '0,2 l',
      'Feita com 100 % ingredientes orgânicos finlandeses. Sem álcool',
      'Finlândia',
      'Energia 122,65 kJ / 29,3 kcal, gorduras menos de 0,1 g das quais saturadas menos de 0,1 g, carboidratos 6,9 g dos quais açúcares 6,9 g, proteínas menos de 0,1 g, sal menos de 0,1 g',
      'Vegana. Folha orgânica europeia',
    ],
    specLabels: [undefined, undefined, undefined, 'Informação nutricional por 100 ml', 'Dieta e certificação'],
  },
  'arabia-moomin-mug-snufkin': {
    name: 'Caneca Arabia Moomin, Snufkin',
    description:
      'A Arabia imprime os desenhos de Tove Jansson nestas canecas desde 1990, e os colecionadores acompanham por ano as que saem de linha. Snufkin é o que vai embora no outono e volta na primavera.',
    specs: ['0,3 l', 'Tove Jansson'],
    specLabels: [undefined, 'Ilustração'],
  },
  'arabia-moomin-mug-friendship': {
    name: 'Caneca Arabia Moomin, Friendship',
    description:
      'A caneca mostra Ninny, a criança invisível que tem medo do escuro e volta devagar a ficar visível quando alguém é gentil com ela. Uma escolha mais discreta do que os personagens conhecidos.',
    specs: ['0,3 l', 'Tove Jansson'],
    specLabels: [undefined, 'Ilustração'],
  },
  'arabia-moomin-figurine-moomintroll': {
    name: 'Miniatura Arabia Moomin, Moomin',
    description:
      'Uma figura de cerâmica feita à mão, desenhada por Tuulikki Pietilä nos anos 1990 e vendida na própria caixa. Pequena o bastante para voltar para casa no bolso de um casaco.',
    specs: ['Tuulikki Pietilä, anos 1990', 'Cerâmica feita à mão, vendida na própria caixa'],
    specLabels: ['Designer', 'Fabricação'],
  },
  'fiskars-moominpappa-scissors': {
    name: 'Tesoura universal Fiskars Papai Moomin',
    description:
      'As tesouras Fiskars de cabo laranja estão em mais gavetas de cozinha finlandesas do que qualquer outra ferramenta. Este par tem 21 cm em aço inoxidável, com o Papai Moomin no cabo.',
    specs: ['21 cm', 'Aço inoxidável'],
  },
  'rento-tar-sauna-soap': {
    name: 'Sabonete de sauna de alcatrão Rento 150 g',
    description:
      'O alcatrão de pinho é um cheiro finlandês antes de ser um sabor finlandês, e o lugar dele é na sauna mais do que em qualquer outro. À base de óleo vegetal, pendurado em um cordão de juta para secar entre um uso e outro.',
    specs: ['150 g', 'Sabonete à base de óleo vegetal'],
  },
  'rento-birch-sauna-honey': {
    name: 'Mel de sauna de bétula Rento 150 ml',
    description:
      'Espalhe na pele limpa, deixe agir no calor brando e enxágue com água morna. O mel de sauna é a parte do ritual finlandês que os visitantes nunca pensam em levar para casa.',
    specs: ['150 ml'],
  },
  'rento-blueberry-sauna-honey': {
    name: 'Mel de sauna de mirtilo Rento 150 ml',
    description:
      'A versão esfoliante, com aroma de mirtilo. Mesmo uso da versão de bétula: na pele limpa, deixe o calor trabalhar e enxágue com água morna.',
    specs: ['150 ml'],
  },
  'rento-sauna-pillow': {
    name: 'Almofada de sauna Rento Pino 50 x 22 cm',
    description:
      'Uma almofada tecida em jacquard para a cabeça e a nuca no banco da sauna. Ela mantém o formato, e é justamente essa a diferença entre uma almofada de sauna e uma toalha dobrada.',
    specs: ['50 x 22 cm', 'Preto'],
  },
  'rento-linen-back-scrubber': {
    name: 'Esfregão de costas em atoalhado de linho Rento 14 x 70 cm',
    description:
      'Atoalhado de linho, comprido o bastante para alcançar as próprias costas. A pele amolece primeiro no calor e é lavada depois, e essa é a ordem que os finlandeses seguem sem pensar.',
    specs: ['14 x 70 cm', 'Atoalhado de linho'],
  },
  'rento-linen-wash-mitt': {
    name: 'Luva de banho em atoalhado de linho Rento 14 x 24 cm',
    description:
      'O mesmo atoalhado de linho do esfregão de costas, em uma luva com a palma dupla. O item mais barato desta seção e o que as pessoas realmente usam toda semana.',
    specs: ['14 x 24 cm', 'Atoalhado de linho, palma dupla'],
  },
  'emendo-sauna-scents': {
    name: 'Aromas de sauna Emendo: salmiakki, resina de pinho, sisu, 3 x 10 ml',
    description:
      'Três aromas em um suporte de madeira, e um deles é o salmiakki. Poucas coisas são mais finlandesas que salmiakki e sauna, e este conjunto coloca os dois na mesma concha.',
    specs: ['3 x 10 ml em um suporte de madeira', 'Salmiakki, resina de pinho, sisu'],
    specLabels: [undefined, 'Aromas'],
  },
  'aurora-mini-kuksa': {
    name: 'Mini kuksa com alça de couro, 4 cm',
    description:
      'Um kuksa de 4 cm pensado para uma dose e não para café, com uma alça de couro para o cinto. O jeito menor e mais barato de ter esse formato.',
    specs: ['Diâmetro 4 cm'],
  },
  'fazer-super-salmiakki': {
    name: 'Pastilhas Fazer Super Salmiakki 80 g',
    description:
      'O mais duro dos clássicos do salmiakki, vendido na mesma caixa em forma de lata desde os anos 1970. Dê uma a um visitante e você saberá em dez segundos a que grupo ele pertence.',
    specs: ['80 g'],
  },
  'fazer-pantteri-salmiakki': {
    name: 'Balas de salmiakki Fazer Pantteri 210 g',
    description:
      'Salmiakki macio de mentol, feito há mais de cinquenta anos. Mais suave que as pastilhas, então este é o pacote para quem nunca provou salmiakki.',
    specs: ['210 g'],
  },
  'halva-salmiakkiruutu': {
    name: 'Halva Salmiakkiruutu 170 g',
    description:
      'A Halva faz este salmiakki em quadradinhos desde 1960 em Pitäjänmäki, em Helsinque. Mais mastigável que as versões da Fazer e o que os finlandeses defendem como o original.',
    specs: ['170 g', 'Fabricado em Pitäjänmäki, Helsinque, desde 1960'],
  },
  'sisu-xylitol-salmiakki': {
    name: 'Pastilhas de salmiakki Sisu Xylitol 36 g',
    description:
      'Salmiakki adoçado com xilitol e com o selo da Associação Odontológica Finlandesa. A latinha cabe no bolso de um casaco, e é por isso que elas acabam em todo carro finlandês.',
    specs: ['36 g', 'Xilitol. Leva o selo da Associação Odontológica Finlandesa'],
    specLabels: [undefined, 'Adoçante'],
  },
  'leijona-tar-liquorice': {
    name: 'Pastilhas de alcaçuz de alcatrão Leijona 32 g',
    description:
      'Alcaçuz com sabor de alcatrão de pinho, feito desde 1933. O alcatrão é um sabor finlandês que aparece em balas, no sabonete de sauna e até em sorvete, e esta é a forma mais barata de experimentar.',
    specs: ['32 g'],
  },
  'fazer-hazelnut-chocolate': {
    name: 'Karl Fazer chocolate ao leite com avelãs inteiras 200 g',
    description:
      'A barra azul com avelãs inteiras no chocolate ao leite. A Fazer usa a mesma embalagem azul desde 1922, e é por isso que é a que os finlandeses levam para o exterior.',
    specs: ['200 g'],
  },
  'fazer-light-milk-chocolate': {
    name: 'Karl Fazer chocolate ao leite claro 180 g',
    description:
      'Uma versão mais clara e mais suave da barra azul. Se a clássica for doce demais para você, leve esta.',
    specs: ['180 g'],
  },
  'fazer-fazerina': {
    name: 'Barra de trufa de laranja Fazer Fazerina 99 g',
    description:
      'Trufa de laranja dentro de chocolate ao leite, feita desde 1953. Mais fina que a barra azul e a que sobrevive a uma mochila sem derreter em um bloco.',
    specs: ['99 g'],
  },
  'fazer-jaffa-orange': {
    name: 'Bolinhos de laranja Fazer Jaffa 300 g',
    description:
      'Base de pão de ló, geleia de laranja e chocolate amargo por cima. Não é biscoito nem bolo, e é exatamente essa a discussão que os finlandeses repetem toda vez.',
    specs: ['300 g'],
  },
  'north-outdoor-arctic-250-balaclava': {
    name: 'Balaclava de merino North Outdoor Arctic 250',
    description:
      'O tricô mais quente que a North Outdoor faz, modelado para ficar sob um capacete. Em uma moto de neve ou em um trenó de renas o frio entra primeiro pelo pescoço e pelas bochechas, e é essa abertura que esta camada fecha.',
    specs: [
      'Tricô de lã merino, gramatura Arctic 250',
      'Tamanho único',
      'Preto',
      'North Outdoor, Oulu, Finlândia',
    ],
  },
  'north-outdoor-kevo-gloves': {
    name: 'Luvas de merino North Outdoor Kevo',
    description:
      'Tricotadas com merino livre de mulesing na própria malharia da North Outdoor em Oulu. Finas o bastante para ficar sob uma mitene nos dias mais frios e para não tirar quando você faz uma foto.',
    specs: ['100 % lã merino, livre de mulesing', 'M, L, XL', 'Azul índigo', 'Tricotadas em Oulu, Finlândia'],
  },
  'north-outdoor-heavyweight-gaiter': {
    name: 'Gola de merino North Outdoor Heavyweight',
    description:
      'Fleece de merino, grosso o bastante para puxar por cima do nariz enquanto você espera as luzes aparecerem. A lã continua isolando quando a respiração condensa nela, que é justamente o problema de ficar parado no frio.',
    specs: ['Fleece de merino', 'Tamanho único', 'Preto', 'North Outdoor, Oulu, Finlândia'],
  },
  'north-outdoor-sointu-cardigan': {
    name: 'Cardigã de merino North Outdoor Sointu',
    description:
      'Um cardigã de merino de corte reto que se lê como roupa de casa mas funciona como camada intermediária. A única peça deste conjunto que você usaria no jantar depois do safári.',
    specs: ['100 % lã merino', 'XS–2XL', 'Latte', 'North Outdoor, Oulu, Finlândia'],
  },
  'north-outdoor-arctic-260-zip-neck': {
    name: 'Blusa com zíper de merino North Outdoor Arctic 260',
    description:
      'Uma blusa de gola alta com zíper em 100 por cento merino, grossa o bastante para usar sozinha em ambientes internos e para servir de camada intermediária lá fora. O zíper é o ponto: você o abre na caminhada e o fecha quando para.',
    specs: [
      '100 % lã merino',
      'S–3XL',
      'Cinza granito e preto',
      'North Outdoor, Oulu, Finlândia',
      'Gola alta protetora, zíper coberto, barra traseira alongada',
    ],
    specLabels: [undefined, undefined, undefined, undefined, 'Detalhes'],
  },
  'halti-hossa-baselayer-men': {
    name: 'Conjunto de segunda pele de merino Halti Hossa II, masculino',
    description:
      'Camiseta e ceroula na mesma caixa, merino de 190 g a 20,5 mícrons. A camada mais próxima da pele decide se o resto da roupa funciona, e é justamente a que a maioria dos visitantes não traz.',
    specs: [
      '100 % lã merino, 190 g/m², 20,5 mícrons, canelado 1x1',
      'Camiseta de manga longa e ceroula',
      'Lavar do avesso',
    ],
    specLabels: [undefined, 'Conteúdo do conjunto', undefined],
  },
  'halti-hossa-baselayer-women': {
    name: 'Conjunto de segunda pele de merino Halti Hossa II, feminino',
    description:
      'O mesmo conjunto de merino de 190 g com modelagem feminina. A lã segura o calor quando você transpira na caminhada e depois fica parada olhando, que é como realmente é um dia na Lapônia.',
    specs: [
      '100 % lã merino, 190 g/m², 20,5 mícrons, canelado 1x1',
      'Camiseta de manga longa e ceroula',
      'Lavar do avesso',
    ],
    specLabels: [undefined, 'Conteúdo do conjunto', undefined],
  },
  'halti-heatgrid-midlayer': {
    name: 'Jaqueta de camada intermediária Halti HeatGrid, masculina',
    description:
      'Malha waffle que retém ar sem acrescentar volume sob uma shell. Esta é a camada entre o merino e a parca, e deixá-la de fora é o motivo pelo qual as pessoas voltam com frio.',
    specs: [
      'Malha waffle no avesso 95 % poliéster reciclado / 5 % elastano; malha jersey 92 % poliéster reciclado / 8 % elastano',
      'Lavar do avesso com cores parecidas, fechar os zíperes antes da lavagem',
    ],
  },
  'halti-taival-dx-jacket': {
    name: 'Jaqueta shell Halti Taival DX 3L, masculina',
    description:
      'Uma shell de três camadas com 20 000 mm de impermeabilidade e 30 000 g de respirabilidade. Esses dois números importam em direções diferentes: o primeiro mantém a neve derretida do lado de fora, o segundo deixa o suor de uma subida sair em vez de congelar por dentro.',
    specs: [
      'Shell de malha DrymaxX Nano, 3 camadas. 100 % poliéster reciclado',
      '20 000 mm',
      '30 000 g/m²/24 h',
    ],
    specLabels: [undefined, 'Impermeabilidade', 'Respirabilidade'],
  },
  'halti-sykli-ski-gloves': {
    name: 'Luvas de esqui Halti Sykli',
    description:
      'Luva impermeável com 120 g de isolamento, palma de couro e punho snowlock que impede a neve de se acumular no pulso quando você cai. Feita para esqui com teleféricos em Levi ou Ylläs e não para caminhar pela cidade.',
    specs: [
      'DrymaxX, estica em 4 direções, impermeável e corta-vento. Palma de couro',
      '120 g Microtherm Dynamic',
      '15 000 mm / 15 000 g/m²/24 h',
    ],
    specLabels: [undefined, 'Isolamento', 'Impermeabilidade e respirabilidade'],
  },
  'halti-merino-socks-2pack': {
    name: 'Meias de lã merino Halti, pacote com 2',
    description:
      'Dois pares, porque o par que você usou hoje não estará seco amanhã de manhã. Mescla de merino em vez de lã pura, que aguenta melhor lavagens repetidas na máquina.',
    specs: [
      '40 % lã merino, 40 % acrílico, 19 % poliamida, 1 % elastano',
      '2 pares',
      'Fabricadas na Europa',
    ],
    specLabels: [undefined, 'Tamanho do pacote', undefined],
  },
  'husky-farm-safari-rovaniemi': {
    name: 'Visita a uma fazenda de huskies e safári para dois, Rovaniemi',
    description:
      'Um cartão-presente para uma visita guiada a uma fazenda de huskies de verdade perto de Rovaniemi, seguida de um passeio de trenó puxado pelos cães pela floresta de inverno. Comprado agora, entregue por e-mail, e quem recebe escolhe a data.',
    specs: [
      'Visita guiada a uma fazenda de huskies e safári de trenó para dois. O guia pode buscar em um raio de 10 km de Rovaniemi',
      'Cerca de 3,5 h',
      '2 pessoas',
      'Rovaniemi. O local exato é confirmado na reserva',
      'Meses de inverno, de novembro a abril',
      'Inglês',
      'Válido por 3 anos',
    ],
    specLabels: [undefined, 'Duração', 'Participantes', 'Local', 'Temporada', 'Idioma do guia', 'Cartão-presente'],
  },
  'reindeer-safari-rovaniemi': {
    name: 'Safári de renas para dois, Rovaniemi',
    description:
      'Um safári de renas no fim da tarde em uma fazenda de verdade perto de Rovaniemi: um percurso de 2,5 km atrás das renas, uma visita à fazenda e um pequeno lanche. Em noites limpas a aurora boreal pode aparecer, mas ninguém pode prometer.',
    specs: [
      'Entrada em uma fazenda de renas e percurso de 2,5 km em trenó puxado por renas para dois, com um pequeno lanche. Busca em um raio de 10 km de Rovaniemi',
      'De 2,5 a 3 horas',
      '2 pessoas',
      'Rovaniemi. O local exato é confirmado na reserva',
      'Meses de inverno, de dezembro a março. O safári sai no início da noite',
      'Inglês',
      'Válido por 3 anos',
    ],
    specLabels: [undefined, 'Duração', 'Participantes', 'Local', 'Temporada', 'Idioma do guia', 'Cartão-presente'],
  },
  'aurora-tour-kilpisjarvi': {
    name: 'Tour de aurora boreal de snowmobile para dois, Kilpisjärvi',
    description:
      'Kilpisjärvi é conhecida pelo céu noturno excepcionalmente limpo. Um trajeto curto de snowmobile leva vocês dois a um ponto onde observar a aurora em total paz, com bebidas quentes contra o frio. À noite, das 20h às 23h, sujeito às condições do tempo.',
    specs: [
      'Tour guiado de aurora boreal para dois, cerca de 15 km de snowmobile, bebidas quentes incluídas',
      '3 horas, das 20.00 às 23.00',
      '2 pessoas',
      'Kilpisjärvi',
      '18 anos para pilotar, 8 anos no trenó',
      'Válido por 3 anos',
    ],
    specLabels: [undefined, 'Duração', 'Participantes', 'Local', 'Idade mínima', 'Cartão-presente'],
  },
  'glass-igloo-night-levi': {
    name: 'Noite em iglu de vidro para dois, Levi',
    description:
      'Uma noite a dois em um iglu de vidro aquecido no alto do monte Levi. O vidro aquecido eletricamente fica sempre limpo enquanto vocês procuram a aurora de uma cama de casal motorizada. Drink de boas-vindas, roupões e café da manhã incluídos, com copa, chuveiro e banheiro próprios.',
    specs: [
      'Uma noite para dois em iglu de vidro classe Superior, drink de boas-vindas, roupões e pantufas, café da manhã. Transporte não incluído',
      '1 noite, check-out às 11.00',
      '2 pessoas',
      'Levi, no alto do monte',
      '23 m², vidro aquecido antiembaçante, copa, chuveiro e banheiro, cama de casal motorizada',
      'Válido para estadias de 27.08-10.11 e 01.04-12.04',
    ],
    specLabels: [undefined, 'Duração', 'Participantes', 'Local', 'Iglu', 'Cartão-presente'],
  },
  'gold-panning-day-inari': {
    name: 'Dia de garimpo de ouro para quatro, Inari',
    description:
      'Um dia em um garimpo de ouro em atividade em Inari para um grupo de quatro: primeiro a história, depois a bateia à mão e uma olhada na extração com máquinas. Refeições e transporte do centro de Saariselkä incluídos, e o ouro encontrado vai para casa com o grupo.',
    specs: [
      'Um dia de garimpo de 5 horas em uma concessão ativa para quatro, com orientação de bateia à mão e demonstração da extração com máquinas. Refeições do dia, equipamento e transporte do centro de Saariselkä até o garimpo e de volta incluídos',
      '5 horas',
      '4 pessoas',
      'Inari',
      'Temporadas de primavera e verão',
      'Válido por 3 anos',
    ],
    specLabels: [undefined, 'Duração', 'Participantes', 'Local', 'Temporada', 'Cartão-presente'],
  },
  'foodin-six-mushroom-blend': {
    name: 'Foodin mistura de seis cogumelos 40 g',
    description:
      'Chaga, reishi, juba de leão, cordyceps, shiitake e maitake em um só pote, moídos para café ou vitaminas. Um pote cobre a prateleira inteira de cogumelos funcionais.',
    specs: ['40 g', 'Chaga, reishi, juba de leão, cordyceps, shiitake, maitake'],
  },
  'foodin-nordic-berry-powder': {
    name: 'Foodin mistura de frutas nórdicas em pó 120 g',
    description:
      'Uma mistura finlandesa de frutas do norte em um único pó, para mingau e iogurte. O jeito mais leve de levar um verão de frutas nórdicas para casa.',
    specs: ['120 g', 'Feito na Finlândia'],
  },
  'foodin-chaga-tincture': {
    name: 'Foodin tintura de chaga 50 ml',
    description:
      'Chaga finlandês em gotas em vez de pó: um frasco de 50 ml que dispensa infusão. O formato de viagem de toda a ideia do chaga.',
    specs: ['50 ml', 'Chaga finlandês'],
  },
  'kaavi-chaga-chunks': {
    name: 'Kaavi Porcini pedaços de chaga 100 g',
    description:
      'Pedaços grossos de chaga de bétula finlandesa para infusão lenta, como se bebia aqui muito antes da palavra superalimento. Um saco rende muitos bules.',
    specs: ['100 g', 'Ferver em fogo brando como um chá de infusão longa'],
    specLabels: [undefined, 'Uso'],
  },
  'puhdistamo-instant-chaga': {
    name: 'Puhdistamo pó de extrato de chaga instantâneo 28 g',
    description:
      'Chaga que se dissolve direto na água quente, sem fervura. O pote de 28 gramas cabe em qualquer bagagem e viaja melhor que um saco de pedaços.',
    specs: ['28 g'],
  },
  'puhdistamo-conifer-extract': {
    name: 'Puhdistamo extrato de coníferas 50 ml',
    description:
      'Um extrato de coníferas finlandesas, tomado em gotas. O cheiro de floresta de uma trilha na Lapônia em um frasco de bolso.',
    specs: ['50 ml'],
  },
  'nb-little-my-beanie': {
    name: 'Gorro de tricô grosso da Pequena My',
    description:
      'Gorro grosso de tricô com a Little My na dobra, em uma mistura de lã que mantém o formato depois de uma semana sendo colocado e tirado. Um tamanho adulto, e a única personagem Moomin que aprovaria o tempo na Lapônia.',
    specs: [
      'Acrílico, náilon e lã',
      'Adulto, tamanho único',
      'Produto Moomin oficial',
    ],
    specLabels: [undefined, undefined, 'Licença'],
  },
  'nb-moomintroll-mittens': {
    name: 'Luvas Moomintroll',
    description:
      'Luvas de tricô forradas com fleece macio, 24 centímetros de altura para o punho passar da manga do casaco. Tamanho adulto, e baratas o suficiente para sobreviver a perder uma no trenó puxado por huskies.',
    specs: [
      '100 % acrílico, forro de fleece',
      'Adulto, altura 24 cm, largura acima do polegar 9,5 cm',
      'Produto Moomin oficial',
    ],
    specLabels: [undefined, undefined, 'Licença'],
  },
  'nb-moomintroll-love-socks': {
    name: 'Meias retrô Moomintroll Love',
    description:
      'Meias caneladas azul-claro com o Moomintroll bordado dentro de um coração rosa na canela, bordado e não estampado, então resiste à lavagem. Um tamanho cobre do EU 36 ao 42.',
    specs: [
      '67 % algodão, 25 % poliéster, 4 % elastodieno, 3 % náilon, 1 % elastano',
      'Tamanho único, EU 36-42',
      'Motivo bordado',
    ],
    specLabels: [undefined, undefined, 'Detalhe'],
  },
  'nb-moomin-classics-tee': {
    name: 'Camiseta pesada Moomin Classics',
    description:
      'Uma camiseta de algodão de 260 gramas na cor lavanda, caimento quadrado, com um pequeno Moomintroll bordado no peito em vez de uma estampa grande. Pesada o bastante para cair reta em vez de marcar o corpo.',
    specs: [
      '100 % algodão, 260 g/m2',
      'Unissex, caimento quadrado, do XS ao XXL',
      'Caimento quadrado, a loja recomenda pedir um tamanho abaixo',
    ],
    specLabels: [undefined, undefined, 'Observação de tamanho'],
  },
  'nb-pippi-tee': {
    name: 'Camiseta da Píppi Meialonga',
    description:
      'Píppi impressa na Finlândia em uma camiseta de algodão de 240 gramas, caimento reto unissex com barra mais longa que a média. Em algumas casas, Astrid Lindgren viaja mais longe que os Moomin.',
    specs: [
      '100 % algodão, 240 g/m2',
      'Unissex, caimento reto, do M ao XXL',
      'Impressa na Finlândia',
    ],
  },
  'nb-moomintroll-hoodie': {
    name: 'Moletom com capuz Moomintroll',
    description:
      'Um moletom com capuz de 300 gramas em algodão e poliéster, impresso na Finlândia, caimento reto unissex. Exatamente a camada em que se vive numa noite de cabana, depois que a sauna esfria.',
    specs: [
      '65 % algodão, 35 % poliéster, 300 g/m2',
      'Unissex, caimento reto, do XS ao XXL',
      'Impresso na Finlândia',
    ],
  },
  'nb-kunnas-kalevala-tote': {
    name: 'Ecobag Mauri Kunnas O Kalevala dos cães',
    description:
      'Uma ecobag de algodão estampada com ilustrações de Mauri Kunnas de O Kalevala dos cães, sua versão canina da epopeia nacional finlandesa. O item mais barato desta loja que mesmo assim explica um país inteiro.',
    specs: [
      '100 % algodão',
      '38 x 42 cm',
      'Produto Mauri Kunnas oficial',
    ],
    specLabels: [undefined, undefined, 'Licença'],
  },
  'sk-marimekko-unikko-crossbody': {
    name: 'Bolsa transversal Marimekko Neat Crossbody Unikko',
    description:
      'A papoula Unikko em uma bolsa transversal do tamanho certo para celular, carteira e um par de luvas. Unikko foi desenhada em 1964, depois que Armi Ratia proibiu estampas florais, e sobreviveu à proibição por sessenta anos.',
    specs: [
      'Neat Crossbody, tamanho M',
      'Unikko, azul e azul-escuro',
    ],
    specLabels: ['Modelo', 'Estampa'],
  },
  'sk-moomin-duvet-set': {
    name: 'Jogo de capa de edredom Moomin 150 x 210 cm, Sydänkäpyset',
    description:
      'Jogo de cama de algodão com certificação GOTS, com o Moomintroll e a Senhorita Snork. O nome finlandês da estampa, Sydänkäpyset, descreve exatamente a relação que o desenho mostra.',
    specs: [
      'Capa de edredom 150 x 210 cm',
      'GOTS, o Global Organic Textile Standard',
    ],
    specLabels: [undefined, 'Certificação'],
  },
  'sk-novita-wonder-wool': {
    name: 'Fio Novita Wonder Wool DK 50 g',
    description:
      'Fio de lã pura na espessura DK da Novita, a fiação que abastece as tricoteiras finlandesas desde 1928. Um novelo de 50 gramas tem 112 metros, e a agulha recomendada é de 4 mm.',
    specs: [
      '100 % lã',
      'Novelo de 50 g, 112 m',
      '4 mm',
    ],
    specLabels: [undefined, undefined, 'Agulha recomendada'],
  },
  'sk-aromageddon-sauna-scent': {
    name: 'Aroma para sauna Aromageddon Hankihorppy 15 ml',
    description:
      'Menta e cacau como aroma de sauna, o que soa errado até você atravessar um inverno finlandês inteiro. De duas a quatro gotas em uma concha de água, nunca sobre as pedras.',
    specs: [
      '15 ml',
      'De 2 a 4 gotas em uma concha de água',
    ],
    specLabels: [undefined, 'Uso'],
  },
  'sk-muurla-moomin-bottle': {
    name: 'Garrafa de vidro Moomin Muurla 1 l, Maçãs',
    description:
      'Uma garrafa de vidro sodo-cálcico com tampa de pressão, para água ou suco na mesa em vez da caixinha. Pode ir à máquina de lavar louça, um litro, e a estampa Maçãs é a de verão.',
    specs: [
      '1 l',
      'Vidro sodo-cálcico, tampa de pressão',
      'Pode ir à máquina de lavar louça',
    ],
    specLabels: [undefined, undefined, 'Cuidados'],
  },
  'nb-kunnas-kalevala-beanie': {
    name: 'Gorro O Kalevala dos cães',
    description:
      'Mauri Kunnas transformou o Kalevala em uma epopeia canina em 1992, e o gorro traz esse desenho. Poliéster reciclado, um tamanho adulto, e leve o bastante para ir para o bolso do casaco assim que o ônibus esquenta.',
    specs: [
      '100 % poliéster reciclado',
      'Adulto, tamanho único',
      'Mauri Kunnas, O Kalevala dos cães',
    ],
    specLabels: [undefined, undefined, 'Ilustração'],
  },
  'nb-little-my-mittens': {
    name: 'Luvas Pequena My',
    description:
      'O par bordô que acompanha as luvas do Moomin, mesmo forro de fleece e mesmo preço. O punho é dois centímetros mais curto, e o personagem serve a quem acha o Moomin conciliador demais.',
    specs: [
      '100 % acrílico, forro de fleece',
      'Adulto, altura 22 cm, largura acima do polegar 9,5 cm',
      'Produto Moomin oficial',
    ],
    specLabels: [undefined, undefined, 'Licença'],
  },
  'nb-kunnas-santa-mug': {
    name: 'Copo de viagem Papai Noel',
    description:
      'Kunnas desenhou o Papai Noel de Korvatunturi do jeito que as crianças finlandesas o imaginam, e aqui ele está num copo de 450 ml feito de PLA e não de plástico fóssil. A cinta de silicone é onde se segura quando o café está quente demais para a mão nua.',
    specs: [
      '450 ml',
      'Copo e tampa em PLA, cinta em silicone de grau alimentício',
      'Mauri Kunnas',
    ],
    specLabels: [undefined, undefined, 'Ilustração'],
  },
  'nb-little-my-thermal-bottle': {
    name: 'Garrafa térmica Pequena My 0,55 l',
    description:
      'Aço de parede dupla, 550 mililitros, e o fabricante indica seis horas de calor. Isso equivale mais ou menos a um safári de snowmobile, que é justamente o teste para o qual essa garrafa é comprada.',
    specs: [
      '550 ml',
      'Aço inoxidável, tampa de PP, vedação de silicone',
      'Seis horas segundo o fabricante',
    ],
    specLabels: [undefined, undefined, 'Mantém quente'],
  },
  'nb-little-my-neckpillow': {
    name: 'Travesseiro de pescoço Pequena My',
    description:
      'Espuma viscoelástica sob uma capa macia, para o trem noturno Helsinque–Rovaniemi ou o voo de volta. Pequeno o bastante para prender na bolsa, que é a única versão de travesseiro de viagem que alguém realmente guarda.',
    specs: [
      'Espuma viscoelástica, capa macia',
      'Produto Moomin oficial',
    ],
    specLabels: [undefined, 'Licença'],
  },
  'nb-moomintroll-love-cushion': {
    name: 'Almofada Moomin Love',
    description:
      'Uma almofada recortada no formato do Moomin em vez de um quadrado estampado, em vários tamanhos de 45 a 75 centímetros de altura. Do tipo que vai parar no sofá da cabana e fica por lá.',
    specs: [
      'Poliéster',
      'Vários tamanhos, altura 45–75 cm',
      'Produto Moomin oficial',
    ],
    specLabels: [undefined, undefined, 'Licença'],
  },
  'nb-little-my-poster': {
    name: 'Pôster Pequena My',
    description:
      'Criado e impresso em Helsinque em papel silk de 200 gramas, em 30 × 40 ou 50 × 70. Um pôster enrola num tubo e não pesa nada, o que não se pode dizer da maioria das coisas que as pessoas levam da Lapônia para casa.',
    specs: [
      'Papel silk, 200 g',
      '30 × 40 cm ou 50 × 70 cm',
      'Criado e impresso em Helsinque',
    ],
    specLabels: [undefined, undefined, 'Produção'],
  },
  'nb-moomin-novels-poster': {
    name: 'Pôster dos romances Moomin',
    description:
      'As capas dos romances Moomin de Tove Jansson em uma única folha, mesma impressão de Helsinque e os mesmos dois tamanhos dos pôsteres de personagem. Para quem lê na família, não para quem coleciona canecas.',
    specs: [
      'Papel silk, 200 g',
      '30 × 40 cm ou 50 × 70 cm',
      'Criado e impresso em Helsinque',
    ],
    specLabels: [undefined, undefined, 'Produção'],
  },
  'sk-finland-beanie': {
    name: 'Gorro Finlândia, azul e branco',
    description:
      'O gorro azul e branco com pompom e FINLAND na aba, usado na arquibancada e depois pelo resto do inverno. Lavagem à máquina a 30.',
    specs: [
      'FINLAND',
      'Lavagem à máquina 30 °C',
    ],
    specLabels: ['Texto', 'Cuidados'],
  },
  'sk-finland-tube-scarf': {
    name: 'Gola tubular Finlândia',
    description:
      'Um tubo sem costura com a estampa da bandeira finlandesa, puxado sobre o rosto quando o vento desce da montanha. Menos de sete euros, e é por isso que as pessoas levam três.',
    specs: [
      'Bandeira da Finlândia',
      'Lavar à mão',
    ],
    specLabels: ['Estampa', 'Cuidados'],
  },
  'sk-little-my-sauna-cushion': {
    name: 'Almofada de sauna Pequena My, Emendo',
    description:
      'Uma almofada de assento para a sauna a partir dos desenhos originais de Tove Jansson, fabricada sob licença pela Emendo. O que fica entre você e um banco a noventa graus.',
    specs: [
      'A partir dos desenhos originais de Tove Jansson',
      'Produto oficial licenciado Moomin Characters',
    ],
    specLabels: ['Ilustração', 'Licença'],
  },
  'sk-rento-sauna-hat': {
    name: 'Chapéu de sauna Rento em atoalhado de linho',
    description:
      'O atoalhado de linho mantém o calor longe do couro cabeludo e do cabelo no banco de cima. Funciona ao contrário também: numa banheira ao ar livre em fevereiro, mantém a cabeça quente. Lavagem à máquina a 60.',
    specs: [
      'Atoalhado de linho',
      'Lavagem à máquina 60 °C',
    ],
    specLabels: [undefined, 'Cuidados'],
  },
  'sk-rento-birch-whisk': {
    name: 'Feixe de bétula seca Rento',
    description:
      'Um feixe de bétula seca, posto de molho em água morna antes da sauna para que as folhas e o cheiro voltem. Bater-se com ele é a parte da sauna sobre a qual os visitantes sempre perguntam e que raramente experimentam.',
    specs: [
      'Bétula seca',
      'Deixar de molho antes da sauna',
    ],
    specLabels: [undefined, 'Antes de usar'],
  },
  'sk-suomi-hockey-jersey': {
    name: 'Camisa de torcedor da Finlândia',
    description:
      'A camisa azul e branca com SUOMI no peito e o brasão do leão, no corte que as pessoas realmente vestem para ir ao jogo. Respirável, tamanhos M a XXL, e até fevereiro parece que toda casa finlandesa tem uma.',
    specs: [
      'M–XXL',
      'SUOMI e o brasão do leão',
    ],
    specLabels: [undefined, 'Estampa'],
  },
  'sk-marimekko-unikko-bath-towel': {
    name: 'Toalha de banho Marimekko Unikko 70 × 150 cm',
    description:
      'Unikko em algodão atoalhado, bege e branco, no formato inteiro de 70 por 150. O fio é 65 % algodão orgânico e 35 % reciclado, e a parte reciclada vem das sobras de corte da própria Marimekko.',
    specs: [
      '70 × 150 cm',
      'Algodão atoalhado, 65 % orgânico e 35 % reciclado',
      'Unikko, bege e branco',
    ],
    specLabels: [undefined, undefined, 'Estampa'],
  },
  'sk-marimekko-unikko-hand-towel': {
    name: 'Toalha de rosto Marimekko Unikko 50 × 70 cm',
    description:
      'O mesmo atoalhado Unikko em tamanho de rosto, metade do preço da de banho e bem mais fácil de caber na mala. Bege e branco, 65 % algodão orgânico e 35 % reciclado.',
    specs: [
      '50 × 70 cm',
      'Algodão atoalhado, 65 % orgânico e 35 % reciclado',
      'Unikko, bege e branco',
    ],
    specLabels: [undefined, undefined, 'Estampa'],
  },
  'fl-taistelevat-metsot': {
    name: 'Jogo de capa de edredom de cetim Taistelevat metsot, casal',
    description:
      'Ferdinand von Wright pintou os tetrazes em luta em 1886 e o quadro virou um dos que todo finlandês sabe nomear. A Finlayson o imprime em algodão acetinado, com impressão digital para que as cores se mantenham, verso liso e a estampa nos dois lados das fronhas.',
    specs: [
      'Algodão acetinado',
      'Casal',
      'Ferdinand von Wright, Taistelevat metsot (Os tetrazes em luta), 1886',
    ],
    specLabels: [undefined, undefined, 'Obra'],
  },
  'fl-lino-linen-duvet-set': {
    name: 'Jogo de capa de edredom de linho Lino',
    description:
      'Linho lavado com borda bordada, em verde-liquen ou marrom-piche. O linho é pesado e cai de forma mais rígida que o algodão, e amacia a cada lavagem em vez de se desgastar.',
    specs: [
      'Linho',
      '240 × 210 + 50 × 60 cm ou 150 × 210 + 50 × 60 cm',
      'Verde-liquen ou marrom-piche',
    ],
    specLabels: [undefined, undefined, 'Cores'],
  },
  'fl-elefantti-duvet-set': {
    name: 'Jogo de capa de edredom Elefantti, verde-escuro',
    description:
      'Laina Koskela desenhou o Elefantti em 1969 para um concurso de design que a Finlayson realizou com o Instituto de Artes Industriais, e ele segue em produção desde então. Percal de algodão com 152 fios por polegada, por isso a sensação é de frescor e não de maciez.',
    specs: [
      'Percal de algodão, 152 TC',
      '240 × 210 + 50 × 60 cm',
      'Laina Koskela, 1969',
    ],
    specLabels: [undefined, undefined, 'Design'],
  },
  'fl-reino-bath-towel': {
    name: 'Toalha de banho Reino 80 × 160 cm',
    description:
      'Algodão orgânico com certificação GOTS, tecido com fio retorcido fino para secar rápido em vez de ficar úmido no gancho. Tamanho de banho completo, em marrom ou rosa.',
    specs: [
      '80 × 160 cm',
      '100 % algodão orgânico, com certificação GOTS',
      'Marrom ou rosa',
    ],
    specLabels: [undefined, undefined, 'Cores'],
  },
  // katalogin täydennys 2026-09-05
  'makia-kontio-hoodie': {
    name: 'Moletom com capuz Makia Kontio',
    description:
      'Moletom com capuz de caimento regular em algodão orgânico 100 por cento, tingido depois da costura. O tingimento na peça dá uma cor mais profunda e um toque mais macio que o tingimento no fio, e o tom mantém seu ar levemente desgastado lavagem após lavagem.',
    specs: [
      '100 % algodão orgânico, tingido na peça',
      'S a XXL',
    ],
  },
  'makia-trademark-hoodie': {
    name: 'Moletom com capuz Makia Trademark',
    description:
      'O moletom mais simples da Makia: caimento regular, algodão orgânico 100 por cento e a pequena marca no peito. O que se leva para uma semana na cabana, em que o mesmo moletom vai da fogueira da manhã à varanda da sauna à noite.',
    specs: [
      '100 % algodão orgânico',
      'S a XXL',
    ],
  },
  'makia-moray-zip-knit': {
    name: 'Cardigã de tricô com zíper Makia Moray',
    description:
      'Cardigã com zíper de caimento regular, tricotado em lã merino 100 por cento. A merino aquece sem volume e seca de dentro para fora, então funciona como camada sob uma jaqueta impermeável numa caminhada nos fjells e sozinho num café aquecido.',
    specs: [
      '100 % lã merino',
      'S a XXL',
    ],
  },
  'makia-form-jacket': {
    name: 'Jaqueta de inverno Makia Form',
    description:
      'Jaqueta longa de inverno com caimento regular e isolamento em poliéster reciclado. Um punho canelado escondido na abertura da manga fecha o pulso contra o vento, o que importa mais numa rua de Rovaniemi em janeiro do que qualquer lista de recursos.',
    specs: [
      'Isolamento em poliéster reciclado, punhos canelados escondidos',
      'S a XXL',
    ],
  },
  'makia-martin-beanie': {
    name: 'Gorro de merino Makia Martin',
    description:
      'Gorro de lã merino 100 por cento com um pequeno emblema, tricotado na Finlândia. A porta de entrada mais barata para a Makia e a peça com mais chance de ser usada todo dia de outubro a abril.',
    specs: [
      '100 % lã merino',
      'Feito na Finlândia',
      'Tamanho único',
    ],
  },
  'makia-mari-balaclava': {
    name: 'Balaclava de tricô Makia Mari',
    description:
      'Balaclava tricotada em mistura de lã, poliéster, alpaca e elastano. Cobre orelhas, pescoço e bochechas de uma vez, e essa é a diferença entre um passeio de moto de neve e um passeio de moto de neve lembrado pelo motivo errado.',
    specs: [
      'Mistura de lã, poliéster, alpaca e elastano',
      'Tamanho único',
    ],
  },
  'halti-pehmee-merino-beanie': {
    name: 'Gorro de merino Halti Pehmee',
    description:
      'Gorro urbano de lã merino 100 por cento com barra canelada dupla, feito na Finlândia. A Halti o chama de Pehmee, macio, e é o gorro para os dias em que um gorro de esqui pareceria uma curva errada.',
    specs: [
      '100 % lã merino',
      'Feito na Finlândia',
      'Secar na horizontal',
      'Tamanho único',
    ],
  },
  'halti-rockmoon-fleece-hoodie': {
    name: 'Fleece com capuz Halti Rockmoon, masculino',
    description:
      'Fleece quente com capuz em tecido elástico escovado dos dois lados, com microtecido corta-vento no capuz e nos ombros, por onde o frio entra primeiro. Sob uma jaqueta impermeável no fjell, sozinho ao redor da cabana.',
    specs: [
      'Fleece elástico escovado dos dois lados, microtecido corta-vento no capuz e nos ombros',
      'S a XXXL',
    ],
  },
  'halti-viiri-fleece-gloves': {
    name: 'Luvas de fleece Halti Viiri',
    description:
      'Luvas leves de 45 gramas em fleece corta-vento Stormwall, com estampa de silicone antiderrapante na palma e pontas touchscreen no polegar e no indicador, para tirar a foto da aurora sem as mãos nuas.',
    specs: [
      'Fleece Stormwall 100 % poliéster, palma 65 % poliéster, 32 % poliamida, 3 % elastano',
      '45 g',
      'Polegar e indicador',
      'Lavagem delicada a no máximo 30 °C',
    ],
    specLabels: [undefined, undefined, 'Touchscreen', undefined],
  },
  'nb-moomin-classics-beanie': {
    name: 'Gorro Moomin Classics',
    description:
      'Gorro adulto da coleção Moomin Classics em poliéster reciclado e acrílico, bege, tamanho único. Um produto Moomin oficial, e essa é a linha que o separa da versão de barraca de feira.',
    specs: [
      'Poliéster reciclado e acrílico',
      'Adulto, tamanho único',
      'Bege',
    ],
  },
  'nb-snufkin-mens-socks': {
    name: 'Meias masculinas Snufkin',
    description:
      'Meias masculinas com o Snufkin, EU 40 a 45, 60 por cento algodão com poliéster, náilon e elastano para elasticidade. O presente Moomin mais barato deste site que é usado em vez de exposto.',
    specs: [
      'EU 40-45',
      '60 % algodão, 33 % poliéster, 4 % náilon, 2 % elastano, 1 % elastodieno',
    ],
  },
  'nb-hattifatteners-retro-socks': {
    name: 'Meias retrô femininas Hattifatteners',
    description:
      'Meias em estilo retrô com os Hattifatteners, EU 36 a 42, 67 por cento algodão. Elásticas o bastante para um tamanho servir à maioria, e a primeira coisa que uma leitora dos Moomins pega quando a gaveta de meias está aberta.',
    specs: [
      'EU 36-42',
      '67 % algodão, 25 % poliéster, 4 % elastodieno, 3 % náilon, 1 % elastano',
    ],
  },
  'sk-suomi-propeller-cap': {
    name: 'Boné de hélice de torcedor Suomi',
    description:
      'Boné de hélice azul e branco para a arquibancada, a fan zone e a final de hóquei no gelo no pub. Não é um chapéu sério, e esse é exatamente o ponto numa noite em que a Finlândia joga.',
    specs: [
      'Azul e branco',
    ],
  },
  'sk-muurla-moomin-lantern-tahtihetki': {
    name: 'Lanterna Moomin Muurla Tähtihetki 18 cm',
    description:
      'Lanterna de vidro sem chumbo feita à mão da série Tähtihetki da Muurla com detalhes dourados, 15,5 cm de diâmetro e 18 cm de altura. Serve como lanterna para velas, tigela para os doces da estação ou vaso para um buquê pequeno.',
    specs: [
      'Ø 15,5 cm, altura 18 cm',
      'Vidro sem chumbo feito à mão',
      'Lavar à mão',
    ],
  },
  'sk-hukka-soapstone-candle': {
    name: 'Porta-velas de pedra Hukka Jätkänkynttilä',
    description:
      'Porta-velas de pedra no formato de um jätkänkynttilä, a tora rachada que os lenhadores acendiam sobre a neve. 56 mm de diâmetro, 100 mm de altura, 310 gramas, para uma vela de chá de 40 mm. Fogo vivo sobre pedra fria, dentro de casa.',
    specs: [
      'Ø 56 x 100 mm, para uma vela de chá Ø 40 mm',
      '0,31 kg',
      '1 porta-velas',
    ],
  },
  'sk-muurla-moomin-enamel-mug-lumipyry': {
    name: 'Caneca esmaltada Moomin Muurla Lumipyry 3,7 dl',
    description:
      'Caneca esmaltada de 3,7 dl com núcleo de aço carbono e esmalte duplo, estampada com a cena de nevasca Lumipyry. Aceita bebidas quentes e frias, vai à lava-louças e à fogueira, não ao micro-ondas.',
    specs: [
      '3,7 dl',
      'Aço carbono com esmalte duplo',
      'Pode ir à lava-louças, não ao micro-ondas',
    ],
  },
  'sk-arabia-moomin-pitcher-moominhouse': {
    name: 'Jarra Moomin Arabia 1,0 l, Casa dos Moomins',
    description:
      'Jarra de um litro da Arabia com a Casa dos Moomins, a casa redonda em forma de fogão que o Papai Moomin construiu sozinho e nunca tranca à noite. Vem com tampa de cerâmica que mantém os insetos longe do suco numa mesa de verão.',
    specs: [
      '1,0 l',
      'Tampa de cerâmica incluída',
    ],
    specLabels: [undefined, 'Tampa'],
  },
  'sk-moomin-duvet-set-merella': {
    name: 'Jogo de capa de edredom Moomin 140 x 200 cm, Merellä',
    description:
      'Capa de edredom e fronha de algodão com os Moomins no mar, capa 140 x 200 cm e fronha 50 x 70 cm, fechamento com zíper. Lavar antes do primeiro uso, como toda roupa de cama de algodão estampado.',
    specs: [
      'Capa de edredom 140 x 200 cm, fronha 50 x 70 cm',
      '100 % algodão',
      'Zíper',
    ],
    specLabels: [undefined, undefined, 'Fechamento'],
  },
  'sk-moomin-kids-duvet-set-halaus': {
    name: 'Jogo de capa de edredom infantil Moomin 100 x 135 cm, Halaus',
    description:
      'Capa de edredom e fronha infantis de algodão na estampa Halaus, abraço, capa 100 x 135 cm e fronha 60 x 40 cm com zíper. O tamanho serve para berço ou cama júnior, então é um primeiro presente de roupa de cama.',
    specs: [
      'Capa de edredom 100 x 135 cm, fronha 60 x 40 cm',
      '100 % algodão',
      'Zíper',
    ],
    specLabels: [undefined, undefined, 'Fechamento'],
  },
  'sk-arabia-moomintroll-mini-figurine': {
    name: 'Miniatura Moomintroll Arabia',
    description:
      'Moomintroll de cerâmica feito à mão com cerca de 6 cm de altura, desenhado por Tuulikki Pietilä nos anos 1990 e vendido em sua própria caixa de presente. As miniaturas são colecionadas em séries, o que faz de uma um presente seguro e de duas um hábito.',
    specs: [
      'Altura de cerca de 6 cm',
      'Cerâmica feita à mão',
      'Tuulikki Pietilä, anos 1990',
    ],
    specLabels: [undefined, undefined, 'Design'],
  },
  'sk-arabia-snorkmaiden-mini-figurine': {
    name: 'Miniatura Snorkmaiden Arabia',
    description:
      'Snorkmaiden de cerâmica feita à mão com cerca de 6 cm de altura, da série dos anos 1990 de Tuulikki Pietilä, em sua própria caixa de presente. Ao lado do Moomintroll, os dois ficam no parapeito como nas capas dos livros.',
    specs: [
      'Altura de cerca de 6 cm',
      'Cerâmica feita à mão',
      'Tuulikki Pietilä, anos 1990',
    ],
    specLabels: [undefined, undefined, 'Design'],
  },
  'sk-lapin-puukko-gift-box': {
    name: 'Faca puukko da Lapônia com protetor de lâmina, caixa de presente',
    description:
      'Puukko em estilo lapão com protetor de lâmina, entregue em caixa de presente. A loja o apresenta como a faca para passeios na floresta e tarefas do dia a dia, e como o tipo de objeto que passa de geração em geração em vez de ser trocado.',
    specs: [
      'Protetor de lâmina e caixa de presente',
    ],
    specLabels: ['Incluído'],
  },
  'sk-loimu-sauna-thermometer': {
    name: 'Termômetro de sauna Loimu, bétula',
    description:
      'Termômetro de sauna com moldura de bétula e mostrador claro. Ele responde à única pergunta que um convidado faz antes da primeira concha de água, e parece pertencer a uma parede de toras e não ao lado de uma caldeira.',
    specs: [
      'Bétula',
    ],
  },
  'sk-helsingin-villasukkatehdas-wool-socks': {
    name: 'Meias de lã Helsingin Villasukkatehdas',
    description:
      'Meias de lã cardada da única fábrica tradicional de meias de lã da Finlândia, tricotadas em Helsinque em máquinas dos anos 1950. 70 por cento de lã sem mulesing, fiada em Jämsä e tingida em Kyröskoski, em vários tamanhos e quatro cores batizadas de casca, musgo, líquen e noite.',
    specs: [
      '70 % lã (sem mulesing), 30 % poliamida',
      'Tricotadas em Helsinque, lã fiada em Jämsä e tingida em Kyröskoski',
      'Vários tamanhos, quatro cores',
    ],
  },
  'sk-halva-salmiakkikalat': {
    name: 'Peixinhos de alcaçuz salgado Halva Salmiakkikalat 230 g',
    description:
      'Balas de salmiakki em formato de peixe da Halva, 230 gramas, o saco que fica em todo porta-luvas finlandês. Mordida firme, alcaçuz salgado intenso, e a primeira coisa a entregar a um visitante que diz querer provar a Finlândia de verdade.',
    specs: [
      '230 g',
    ],
  },
  'sk-kouvolan-lakritsi-500g': {
    name: 'Pedaços de alcaçuz Kouvolan Lakritsi 500 g',
    description:
      'Meio quilo de pedaços de alcaçuz macio de Kouvola, feitos com uma receita nascida em 1945 e ajustada em 1960 por um especialista inglês em alcaçuz. É assim que o alcaçuz puro sabe quando nada é adicionado para esconder a raiz.',
    specs: [
      '500 g',
      'De 1945, ajustada em 1960',
    ],
    specLabels: [undefined, 'Receita'],
  },
  'sk-fazer-omar-chocolate-bar': {
    name: 'Barra de chocolate Fazer Omar 180 g',
    description:
      'Barra limitada de 180 gramas criada para os 60 anos do Omar: o toffee Omar suave e cremoso vendido desde 1966, dentro do chocolate ao leite Fazer com pelo menos 30 por cento de cacau. À venda só por tempo limitado.',
    specs: [
      '180 g',
      'Chocolate ao leite com pelo menos 30 % de cacau',
      'Edição limitada para o 60º aniversário',
    ],
    specLabels: [undefined, 'Cacau', 'Disponibilidade'],
  },
  'sk-fazer-salty-suffeli-puffi': {
    name: 'Barra de chocolate Karl Fazer Salty Suffeli Puffi 160 g',
    description:
      'O chocolate ao leite da Fazer feito com leite fresco, com crocantes flocos de milho Suffeli salgados e doces. 160 gramas, pelo menos 30 por cento de cacau, e a resposta para quem não consegue decidir entre salgado e doce.',
    specs: [
      '160 g',
      'Chocolate ao leite com pelo menos 30 % de cacau',
    ],
    specLabels: [undefined, 'Cacau'],
  },
  'sk-tyrkisk-peber-chewy': {
    name: 'Pastilhas de salmiakki Fazer Tyrkisk Peber Chewy 38 g',
    description:
      'O salmiakki picante da Tyrkisk Peber numa nova pastilha macia de mascar no lugar da casca dura. Embalagem de bolso de 38 gramas, listada pela loja em agosto de 2026, para quem quer salmiakki e ardência na mesma mordida.',
    specs: [
      '38 g',
    ],
  },
  'sk-tyrkisk-peber-sour-foams': {
    name: 'Balas de espuma Fazer Tyrkisk Peber Sour Foams 150 g',
    description:
      'Balas de espuma macias com a ardência leve da Tyrkisk Peber e sabores azedos de kiwi-morango e limão-lima, 150 gramas. Uma entrada mais suave na família do alcaçuz apimentado, e o saco que se abre primeiro num grupo misto.',
    specs: [
      '150 g',
    ],
  },
  'sk-marianne-toffee-rae': {
    name: 'Drágeas de chocolate Fazer Marianne Toffee 150 g',
    description:
      'A série de drágeas Marianne em versão toffee: casca brilhante e crocante em volta de um centro de chocolate ao leite com pelo menos 28 por cento de cacau, em saco de 150 gramas com fecho. Também pensadas para assar, se alguma sobreviver até lá.',
    specs: [
      '150 g',
      'Chocolate ao leite com pelo menos 28 % de cacau',
      'Saco com fecho',
    ],
    specLabels: [undefined, 'Cacau', 'Embalagem'],
  },
  'sk-fasupala-lakritsi': {
    name: 'Biscoitos wafer Fazer Fasupala Lakritsi 199 g',
    description:
      'Wafers de uma mordida com recheio sabor alcaçuz sob uma cobertura sabor chocolate ao leite, 199 gramas, sem óleo de palma. A versão de alcaçuz de um biscoito que os finlandeses já comem às caixas, listada pela loja em agosto de 2026.',
    specs: [
      '199 g',
      'Sem óleo de palma',
    ],
    specLabels: [undefined, 'Gordura'],
  },
  'sk-finnish-flavours-cloudberry-jam': {
    name: 'Geleia premium de amora-ártica Finnish Flavours 250 g',
    description:
      'Geleia com 75 por cento de amoras-árticas finlandesas e 20 por cento de açúcar, 250 gramas. As amoras-árticas amadurecem nos pântanos da Lapônia no fim de julho e não podem ser cultivadas em grande escala, por isso um pote custa o que custam dois sacos de chocolate.',
    specs: [
      '250 g',
      'Amora-ártica finlandesa 75 %, açúcar 20 %',
    ],
  },
  'sk-lapin-liha-smoked-reindeer-soup': {
    name: 'Sopa de rena defumada Lapin Liha 400 g',
    description:
      'Sopa cremosa com rena defumada a quente e a frio, 400 gramas, feita pela Lapin Liha. Aquecer numa panela; é o sabor de um almoço de cabana lapão numa embalagem que cabe na mala.',
    specs: [
      '400 g',
      'Rena defumada a quente 3 % e rena defumada a frio 3 %',
      'Aquecer numa panela',
    ],
    specLabels: [undefined, undefined, 'Preparo'],
  },
  'sk-vaasan-ruispalat-5pack': {
    name: 'Pão de centeio Vaasan Ruispalat 5 x 330 g',
    description:
      'Cinco sacos do pão mais vendido da Finlândia: pãezinhos de centeio integral rasgados, assados com fermento natural de verdade a partir de cereais finlandeses 100 por cento, seis por saco de 330 gramas, 12 por cento de fibras. O que os finlandeses no exterior pedem que os visitantes tragam.',
    specs: [
      '5 x 330 g, 6 pãezinhos por saco',
      'Centeio integral 87 % do cereal, fibras 12 %',
    ],
  },
  'sk-poikain-parhaat-freeze-dried-blueberry': {
    name: 'Mirtilos liofilizados Poikain Parhaat 15 g',
    description:
      'Mirtilos silvestres finlandeses inteiros, liofilizados e nada mais: 15 gramas que não pesam nada na mala e têm gosto de agosto num pântano. Sem lactose, sem glúten, veganos, sem açúcar adicionado nem conservantes.',
    specs: [
      '15 g',
      '100 % mirtilo finlandês liofilizado',
      'Sem lactose, sem glúten, vegano, sem açúcar adicionado, sem conservantes',
    ],
    specLabels: [undefined, undefined, 'Dieta'],
  },
  'rj-arctic-warriors-blueberry-powder': {
    name: 'Pó de mirtilo Arctic Warriors 45 g',
    description:
      'Mirtilos finlandeses secos inteiros com seu suco e moídos, sem nada adicionado, 45 gramas. Uma colher no mingau, no iogurte ou no smoothie; a mesma fruta é vendida aqui pela Ruohonjuuri, que envia dentro da UE.',
    specs: [
      '45 g',
      '100 % mirtilo finlandês, seco inteiro com o suco',
    ],
  },
  'rj-poikain-parhaat-blueberry-lemonade': {
    name: 'Limonada de mirtilo Poikain Parhaat 0,33 l',
    description:
      'Limonada orgânica de mirtilo feita em Vehmainen, Tampere, com ingredientes de verdade e sem aromas ou corantes artificiais, garrafa de 0,33 litro. O refrigerante para pôr ao lado do salmiakki numa mesa de degustação finlandesa.',
    specs: [
      '0,33 l',
      'Feita em Vehmainen, Tampere',
      'Orgânica, sem aromas ou corantes artificiais',
    ],
    specLabels: [undefined, undefined, 'Aditivos'],
  },
  'rj-nordic-koivu-birch-sap': {
    name: 'Seiva de bétula Nordic Koivu 500 ml',
    description:
      'Seiva de bétula colhida na primavera, quando a árvore sobe a água armazenada nas raízes, engarrafada direto da árvore sem tratamento térmico ou conservantes, 500 ml. Tem gosto levemente doce e sobretudo de água fria e limpa.',
    specs: [
      '500 ml',
      'Sem tratamento térmico, sem conservantes',
    ],
    specLabels: [undefined, 'Processamento'],
  },
  'rj-kaino-spruce-sprout-sparkling-075': {
    name: 'Espumante orgânico de brotos de abeto KAINO Drinks 0,75 l',
    description:
      'Bebida espumante orgânica sem álcool aromatizada com brotos de abeto, os brotos tenros de maio do abeto finlandês, em garrafa de 0,75 litro. Feita em Vehmainen, Tampere, para o brinde numa festa em que nem todos bebem.',
    specs: [
      '0,75 l',
      'Sem álcool, orgânica',
      'Feita em Vehmainen, Tampere',
    ],
    specLabels: [undefined, 'Álcool', undefined],
  },
  'rj-yrttipaja-chaga-powder': {
    name: 'Pó de chaga Yrttipaja 35 g',
    description:
      'Chaga moído, o fungo preto que cresce nos troncos de bétula, para preparar como chá: uma colher de sopa por litro de água, ferver em fogo baixo por pelo menos dez minutos e coar. 35 gramas, o jeito mais barato de experimentar o pakuri antes de comprar pedaços.',
    specs: [
      '35 g',
      '1 colher de sopa por litro de água, ferver em fogo baixo por pelo menos 10 minutos e coar',
    ],
    specLabels: [undefined, 'Uso'],
  },
  'rj-forestly-mushroom-chips-chili': {
    name: 'Chips de cogumelo Forestly Foods, pimenta 50 g',
    description:
      'Chips crocantes de shiitake de cultivo orgânico, cozidos com delicadeza e temperados com pimenta, sal e pimenta-do-reino, 50 gramas. Umami num saco, para o sofá ou esfarelados sobre uma sopa.',
    specs: [
      '50 g',
      'Shiitake de cultivo orgânico, pimenta, sal e pimenta-do-reino',
    ],
  },
}
