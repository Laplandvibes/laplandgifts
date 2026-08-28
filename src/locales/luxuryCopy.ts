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
  lead: string
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
    lead: 'The costliest things this shop points to are not objects but days: a day panning gold in Inari, a night in a glass igloo, a morning with the reindeer. Below them, the pieces worth the suitcase space.',
    experiencesH2: 'Days and nights',
    objectsH2: 'Things',
    count: (n) => `${n} products`,
    note: 'Every price is the partner shop’s own, read on the date shown on the product page. We do not sell these ourselves.',
  },
  fi: {
    eyebrow: 'Valikoiman kärki',
    title: 'Lapin ylellisyys',
    lead: 'Kalleimmat asiat, joihin tämä kauppa ohjaa, eivät ole esineitä vaan päiviä: päivä kullanhuuhdontaa Inarissa, yö lasi-iglussa, aamu porojen kanssa. Niiden alla ne esineet, jotka ovat matkalaukkutilan arvoisia.',
    experiencesH2: 'Päiviä ja öitä',
    objectsH2: 'Esineitä',
    count: (n) => `${n} tuotetta`,
    note: 'Jokainen hinta on kumppanikaupan oma ja luettu tuotesivulla näkyvänä päivänä. Emme myy näitä itse.',
  },
  de: {
    eyebrow: 'Die Spitze des Sortiments',
    title: 'Luxus aus Lappland',
    lead: 'Das Teuerste, worauf dieser Shop verweist, sind keine Gegenstände, sondern Tage: ein Tag Goldwaschen in Inari, eine Nacht im Glasiglu, ein Morgen bei den Rentieren. Darunter die Stücke, die den Platz im Koffer wert sind.',
    experiencesH2: 'Tage und Nächte',
    objectsH2: 'Dinge',
    count: (n) => `${n} Produkte`,
    note: 'Jeder Preis stammt vom Partnershop und wurde an dem auf der Produktseite genannten Tag gelesen. Wir verkaufen diese Artikel nicht selbst.',
  },
  sv: {
    eyebrow: 'Toppen av urvalet',
    title: 'Lyx från Lappland',
    lead: 'Det dyraste den här butiken pekar på är inte föremål utan dagar: en dag med guldvaskning i Enare, en natt i glasiglo, en morgon med renarna. Under dem de saker som är värda platsen i väskan.',
    experiencesH2: 'Dagar och nätter',
    objectsH2: 'Saker',
    count: (n) => `${n} produkter`,
    note: 'Varje pris är partnerbutikens eget och avläst det datum som anges på produktsidan. Vi säljer inte dessa själva.',
  },
  fr: {
    eyebrow: 'Le haut de la sélection',
    title: 'Le luxe lapon',
    lead: 'Ce que cette boutique propose de plus cher, ce ne sont pas des objets mais des journées : une journée d’orpaillage à Inari, une nuit en igloo de verre, un matin avec les rennes. En dessous, les pièces qui méritent la place dans la valise.',
    experiencesH2: 'Journées et nuits',
    objectsH2: 'Objets',
    count: (n) => `${n} produits`,
    note: 'Chaque prix est celui de la boutique partenaire, relevé à la date indiquée sur la fiche produit. Nous ne vendons pas ces articles nous-mêmes.',
  },
  es: {
    eyebrow: 'Lo más alto de la selección',
    title: 'Lujo lapón',
    lead: 'Lo más caro a lo que apunta esta tienda no son objetos sino días: un día lavando oro en Inari, una noche en un iglú de cristal, una mañana con los renos. Debajo, las piezas que merecen el sitio en la maleta.',
    experiencesH2: 'Días y noches',
    objectsH2: 'Objetos',
    count: (n) => `${n} productos`,
    note: 'Cada precio es el de la tienda asociada, leído en la fecha que aparece en la ficha del producto. No los vendemos nosotros.',
  },
  it: {
    eyebrow: 'La punta della selezione',
    title: 'Il lusso lappone',
    lead: 'Le cose più costose a cui questo negozio rimanda non sono oggetti ma giornate: un giorno a cercare oro a Inari, una notte in un igloo di vetro, una mattina con le renne. Sotto, i pezzi che meritano lo spazio in valigia.',
    experiencesH2: 'Giornate e notti',
    objectsH2: 'Oggetti',
    count: (n) => `${n} prodotti`,
    note: 'Ogni prezzo è quello del negozio partner, letto alla data indicata sulla scheda prodotto. Non li vendiamo noi.',
  },
  nl: {
    eyebrow: 'De top van het assortiment',
    title: 'Luxe uit Lapland',
    lead: 'Het duurste waar deze winkel naar verwijst zijn geen voorwerpen maar dagen: een dag goud wassen in Inari, een nacht in een glazen iglo, een ochtend bij de rendieren. Daaronder de stukken die de plek in de koffer waard zijn.',
    experiencesH2: 'Dagen en nachten',
    objectsH2: 'Voorwerpen',
    count: (n) => `${n} producten`,
    note: 'Elke prijs is die van de partnerwinkel, afgelezen op de datum die op de productpagina staat. Wij verkopen deze niet zelf.',
  },
  'pt-BR': {
    eyebrow: 'O topo da seleção',
    title: 'Luxo da Lapônia',
    lead: 'O mais caro para onde esta loja aponta não são objetos, e sim dias: um dia garimpando ouro em Inari, uma noite num iglu de vidro, uma manhã com as renas. Abaixo, as peças que valem o espaço na mala.',
    experiencesH2: 'Dias e noites',
    objectsH2: 'Objetos',
    count: (n) => `${n} produtos`,
    note: 'Cada preço é o da loja parceira, lido na data indicada na página do produto. Não vendemos estes itens.',
  },
  ja: {
    eyebrow: '品ぞろえの頂点',
    title: 'ラップランドの贅沢',
    lead: 'この店が案内するもののうち最も高価なのは、品物ではなく一日です。イナリでの砂金採りの一日、ガラスイグルーの一夜、トナカイと過ごす朝。その下に、スーツケースの場所に見合う品を並べています。',
    experiencesH2: '昼と夜',
    objectsH2: '品物',
    count: (n) => `${n} 点`,
    note: '価格はすべて提携店のもので、商品ページに記載の日付に確認したものです。当サイトが販売しているわけではありません。',
  },
  'zh-CN': {
    eyebrow: '选品的顶端',
    title: '拉普兰的奢华',
    lead: '这家店指向的最贵的东西不是物件,而是日子:在伊纳里淘金的一天、玻璃穹顶小屋的一夜、与驯鹿共处的一个早晨。往下是那些值得占用行李箱空间的物件。',
    experiencesH2: '白天与夜晚',
    objectsH2: '物件',
    count: (n) => `${n} 件商品`,
    note: '所有价格均为合作商店自己的定价,在商品页面标注的日期读取。我们并不亲自销售这些商品。',
  },
  ko: {
    eyebrow: '구성의 정점',
    title: '라플란드의 럭셔리',
    lead: '이 상점이 안내하는 것 중 가장 비싼 것은 물건이 아니라 하루입니다. 이나리에서 사금을 채취하는 하루, 유리 이글루에서의 하룻밤, 순록과 보내는 아침. 그 아래에는 여행 가방의 자리를 내줄 만한 물건들이 있습니다.',
    experiencesH2: '낮과 밤',
    objectsH2: '물건',
    count: (n) => `상품 ${n}개`,
    note: '모든 가격은 제휴 상점의 가격이며 상품 페이지에 표시된 날짜에 확인한 것입니다. 저희가 직접 판매하지 않습니다.',
  },
}
