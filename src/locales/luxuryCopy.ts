import type { Lang } from '../i18n/useLang'

/**
 * Luksussivun tekstit.
 *
 * 🔴 Otsikko oli ensin "Kallis pää" eli kirjaimellinen käännös siitä mitä
 * sivulla on. Vesa 12.8.: "mikä ihmeen kallis pää" — hän pyysi ylellisyyttä
 * ja sivu nimettiin kuin alennusmyynti. Nimi on nyt "Lapin ylellisyys",
 * joka on myös se sanapari jolla tätä haetaan. Brändiohjeiden kielletyt
 * sanat koskevat tätäkin sivua — "ajaton", "maailmanluokan" ja
 * "henkeäsalpaava" ovat juuri niitä, joita luksussivun copy houkuttelee
 * kirjoittamaan.
 */
export interface LuxuryCopy {
  eyebrow: string
  title: string
  /** FUNKTIO (Vesa 5.9.2026): mitä sivulla on, montako, mihin hintaan — ei
   *  selitystä sivun järjestyksestä. Luvut tulevat datasta renderöitäessä. */
  lead: (n: number, min: string, max: string) => string
  experiencesH2: string
  objectsH2: string
  count: (n: number) => string
  /** Alaviite: hinnat ovat kumppanin, ei meidän. */
  note: string
}

export const LUXURY_COPY: Record<Lang, LuxuryCopy> = {
  en: {
    eyebrow: 'The top of the range',
    title: 'Lapland luxury',
    lead: (n, a, b) => `Lapland's most expensive gifts on one page: ${n} items, ${a}–${b}. Experiences first: gold panning in Inari, a night in a glass igloo and a morning with reindeer. Then the objects worth the suitcase space. Prices are the partner shops' own.`,
    experiencesH2: 'Days and nights',
    objectsH2: 'Things',
    count: (n) => `${n} products`,
    note: 'Every price is the partner shop’s own, read on the date shown on the product page. We do not sell these ourselves.',
  },
  fi: {
    eyebrow: 'Valikoiman kärki',
    title: 'Lapin ylellisyys',
    lead: (n, a, b) => `Lapin kalleimmat lahjat yhdellä sivulla: ${n} tuotetta, ${a}–${b}. Ensin elämykset: kullanhuuhdonta Inarissa, yö lasi-iglussa ja aamu porojen kanssa. Sitten esineet, jotka ansaitsevat matkalaukkutilan. Hinnat ovat kumppanikauppojen omia.`,
    experiencesH2: 'Päiviä ja öitä',
    objectsH2: 'Esineitä',
    count: (n) => `${n} tuotetta`,
    note: 'Jokainen hinta on kumppanikaupan oma ja luettu tuotesivulla näkyvänä päivänä. Emme myy näitä itse.',
  },
  de: {
    eyebrow: 'Die Spitze des Sortiments',
    title: 'Luxus aus Lappland',
    lead: (n, a, b) => `Lapplands teuerste Geschenke auf einer Seite: ${n} Produkte, ${a}–${b}. Zuerst die Erlebnisse: Goldwaschen in Inari, eine Nacht im Glasiglu und ein Morgen bei den Rentieren. Dann die Stücke, die den Platz im Koffer verdienen. Die Preise sind die der Partnershops.`,
    experiencesH2: 'Tage und Nächte',
    objectsH2: 'Dinge',
    count: (n) => `${n} Produkte`,
    note: 'Jeder Preis stammt vom Partnershop und wurde an dem auf der Produktseite genannten Tag gelesen. Wir verkaufen diese Artikel nicht selbst.',
  },
  sv: {
    eyebrow: 'Toppen av urvalet',
    title: 'Lyx från Lappland',
    lead: (n, a, b) => `Lapplands dyraste presenter på en sida: ${n} produkter, ${a}–${b}. Först upplevelserna: guldvaskning i Enare, en natt i glasigloo och en morgon med renarna. Sedan föremålen som förtjänar plats i resväskan. Priserna är butikernas egna.`,
    experiencesH2: 'Dagar och nätter',
    objectsH2: 'Saker',
    count: (n) => `${n} produkter`,
    note: 'Varje pris är partnerbutikens eget och avläst det datum som anges på produktsidan. Vi säljer inte dessa själva.',
  },
  fr: {
    eyebrow: 'Le haut de la sélection',
    title: 'Le luxe lapon',
    lead: (n, a, b) => `Les cadeaux les plus chers de Laponie sur une seule page : ${n} produits, ${a}–${b}. D’abord les expériences : orpaillage à Inari, une nuit en igloo de verre et un matin avec les rennes. Puis les objets qui méritent une place dans la valise. Les prix sont ceux des boutiques partenaires.`,
    experiencesH2: 'Journées et nuits',
    objectsH2: 'Objets',
    count: (n) => `${n} produits`,
    note: 'Chaque prix est celui de la boutique partenaire, relevé à la date indiquée sur la fiche produit. Nous ne vendons pas ces articles nous-mêmes.',
  },
  es: {
    eyebrow: 'Lo más alto de la selección',
    title: 'Lujo lapón',
    lead: (n, a, b) => `Los regalos más caros de Laponia en una sola página: ${n} productos, ${a}–${b}. Primero las experiencias: bateo de oro en Inari, una noche en un iglú de cristal y una mañana con los renos. Después, los objetos que merecen sitio en la maleta. Los precios son los de las tiendas asociadas.`,
    experiencesH2: 'Días y noches',
    objectsH2: 'Objetos',
    count: (n) => `${n} productos`,
    note: 'Cada precio es el de la tienda asociada, leído en la fecha que aparece en la ficha del producto. No los vendemos nosotros.',
  },
  it: {
    eyebrow: 'La punta della selezione',
    title: 'Il lusso lappone',
    lead: (n, a, b) => `I regali più costosi della Lapponia in una sola pagina: ${n} prodotti, ${a}–${b}. Prima le esperienze: la ricerca dell’oro a Inari, una notte in un igloo di vetro e una mattina con le renne. Poi gli oggetti che meritano spazio in valigia. I prezzi sono quelli dei negozi partner.`,
    experiencesH2: 'Giornate e notti',
    objectsH2: 'Oggetti',
    count: (n) => `${n} prodotti`,
    note: 'Ogni prezzo è quello del negozio partner, letto alla data indicata sulla scheda prodotto. Non li vendiamo noi.',
  },
  nl: {
    eyebrow: 'De top van het assortiment',
    title: 'Luxe uit Lapland',
    lead: (n, a, b) => `De duurste cadeaus van Lapland op één pagina: ${n} producten, ${a}–${b}. Eerst de ervaringen: goud wassen in Inari, een nacht in een glazen iglo en een ochtend bij de rendieren. Dan de voorwerpen die de kofferruimte waard zijn. De prijzen zijn die van de partnerwinkels.`,
    experiencesH2: 'Dagen en nachten',
    objectsH2: 'Voorwerpen',
    count: (n) => `${n} producten`,
    note: 'Elke prijs is die van de partnerwinkel, afgelezen op de datum die op de productpagina staat. Wij verkopen deze niet zelf.',
  },
  'pt-BR': {
    eyebrow: 'O topo da seleção',
    title: 'Luxo da Lapônia',
    lead: (n, a, b) => `Os presentes mais caros da Lapônia em uma só página: ${n} produtos, ${a}–${b}. Primeiro as experiências: garimpo de ouro em Inari, uma noite em iglu de vidro e uma manhã com as renas. Depois, os objetos que merecem espaço na mala. Os preços são das lojas parceiras.`,
    experiencesH2: 'Dias e noites',
    objectsH2: 'Objetos',
    count: (n) => `${n} produtos`,
    note: 'Cada preço é o da loja parceira, lido na data indicada na página do produto. Não vendemos estes itens.',
  },
  ja: {
    eyebrow: '品ぞろえの頂点',
    title: 'ラップランドの贅沢',
    lead: (n, a, b) => `ラップランドで最も高価なギフトを1ページに：${n}点、${a}–${b}。まずは体験。イナリでの砂金採り、グラスイグルーでの一夜、トナカイと過ごす朝。その次に、スーツケースの場所に値する品々。価格はパートナーショップのものです。`,
    experiencesH2: '昼と夜',
    objectsH2: '品物',
    count: (n) => `${n} 点`,
    note: '価格はすべて提携店のもので、商品ページに記載の日付に確認したものです。当サイトが販売しているわけではありません。',
  },
  'zh-CN': {
    eyebrow: '选品的顶端',
    title: '拉普兰的奢华',
    lead: (n, a, b) => `拉普兰最贵的礼物集中在一页：${n} 件，${a}–${b}。先是体验：在伊纳里淘金、玻璃冰屋的一夜、与驯鹿共度的早晨。然后是值得占用行李箱空间的物件。价格以合作商店为准。`,
    experiencesH2: '白天与夜晚',
    objectsH2: '物件',
    count: (n) => `${n} 件商品`,
    note: '所有价格均为合作商店自己的定价，在商品页面标注的日期读取。我们并不亲自销售这些商品。',
  },
  ko: {
    eyebrow: '구성의 정점',
    title: '라플란드의 럭셔리',
    lead: (n, a, b) => `라플란드에서 가장 비싼 선물을 한 페이지에: ${n}개, ${a}–${b}. 먼저 체험: 이나리 사금 채취, 유리 이글루에서의 하룻밤, 순록과 함께하는 아침. 그다음 여행 가방 자리를 차지할 만한 물건들. 가격은 파트너 상점 기준입니다.`,
    experiencesH2: '낮과 밤',
    objectsH2: '물건',
    count: (n) => `상품 ${n}개`,
    note: '모든 가격은 제휴 상점의 가격이며 상품 페이지에 표시된 날짜에 확인한 것입니다. 저희가 직접 판매하지 않습니다.',
  },
}
