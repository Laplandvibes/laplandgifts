export interface BoutiqueCopy {
  /** Yksi virke tai kaksi: mitä tekevät ja mistä tunnetaan. */
  description: string
  /** 1-3 tuoteryhmää kortin merkinnöiksi. */
  tags: string[]
}

const copy: Record<string, BoutiqueCopy> = {
  'lauri-handicrafts': {
    description: 'Handcrafted knives, jewellery and felt products since 1924. Reindeer bone, curly birch and Finnish steel.',
    tags: ['Knives', 'Crafts'],
  },
  'marttiini': {
    description: 'World-renowned knives since 1928. Factory outlet and Brand Store, free engraving.',
    tags: ['Knives', 'Gifts'],
  },
  'pentik': {
    description: 'The world\'s northernmost ceramic factory in Posio since 1971. Ceramics, home decor and design.',
    tags: ['Ceramics', 'Home decor'],
  },
  'duodji-shop': {
    description: 'Finland\'s widest selection of authentic Sámi crafts at the Sajos cultural centre.',
    tags: ['Sámi crafts', 'Duodji'],
  },
  'samekki': {
    description: 'Handcrafted Sámi silver jewellery: rings, brooches and traditional duodji pieces.',
    tags: ['Silver', 'Sámi crafts'],
  },
  'piece-of-lapland': {
    description: 'Souvenirs, Sámi crafts, wood carvings and aurora-themed products.',
    tags: ['Souvenirs', 'Crafts'],
  },
  'rovaniemi-souvenirs-shop': {
    description: 'Handcrafted reindeer-antler products in their own workshop, free engraving. On the Arctic Circle.',
    tags: ['Reindeer antler', 'Crafts'],
  },
  'christmas-house-shop': {
    description: 'Santa\'s Village\'s largest souvenir store: Lapland products, jewellery, treats and certificates.',
    tags: ['Souvenirs', 'Treats'],
  },
  'korundi-shop': {
    description: 'Arctic art and design at the Korundi cultural centre. Unique gifts and high-end products.',
    tags: ['Art', 'Design'],
  },
  'shoppi-craft-design': {
    description: 'Jewellery, accessories and souvenirs by Finnish artisans at the foot of Levi slope.',
    tags: ['Jewellery', 'Design'],
  },
  'siida-shop': {
    description: 'The Sámi Museum store: duodji crafts, jewellery and gifts inspired by Lapland nature.',
    tags: ['Duodji', 'Gifts'],
  },
  'tankavaaran-kultakyla': {
    description: 'Gold jewellery, real gold and minerals from the heart of Lapland\'s gold-panning tradition.',
    tags: ['Gold', 'Minerals'],
  },
  'mailan-putiikki': {
    description: 'A gift and souvenir shop at the Äkäslompolo crossroads, the largest of its kind in Ylläs. Founded in 1970.',
    tags: ['Gifts', 'Souvenirs'],
  },
  'kuukkeli-shop': {
    description: 'Souvenirs, Lapland delicacies and textiles in the Saariselkä shopping centre. Own berry products: jams, jellies, sauces and juices.',
    tags: ['Delicacies', 'Souvenirs'],
  },
  'mariellen-vaatehuone': {
    description: 'A clothing shop in Enontekiö stocking Anar, Nanso, Rukka and Luhta, alongside jewellery and prints.',
    tags: ['Clothing', 'Jewellery'],
  },
  'lahjapuoti-tiinuska': {
    description: 'A gift shop from Rovaniemi, founded in 1987. Aarikka and Moomin products, jewellery, textiles and treats, ordered online.',
    tags: ['Design', 'Gifts'],
  },
  'lappi-shop-levi': {
    description: 'Lappituote’s shop in the centre of Levi: souvenirs, game and berry preserves, reindeer antler, puukko knives and kuksa cups.',
    tags: ['Crafts', 'Souvenirs'],
  },
  'utsjoki-handicraft': {
    description: 'Handmade by Juha Reinola from genuine northern materials: reindeer antler, curly birch, kelo pine, reindeer leather and birch bark.',
    tags: ['Crafts', 'Reindeer antler'],
  },
}

export default copy
