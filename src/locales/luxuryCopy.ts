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
  /** Esineosion otsikko: kertoo miksi juuri nämä (ikä, tekotapa), ei 'Esineitä'. */
  objectsH2: string
  count: (n: number) => string
  /** Alaviite: hinnat ovat kumppanin, ei meidän. */
  note: string
  /** Heron kolme kohtausta (revontulet, lasi-iglu, kullanhuuhdonta) — samat kuin
   *  sivun elämystuotteet, ei lupauksia joita sivu ei myy. */
  scenes: [string, string, string]
}

export const LUXURY_COPY: Record<Lang, LuxuryCopy> = {
  en: {
    eyebrow: 'The top of the range',
    title: 'Lapland luxury',
    lead: (n, a, b) => `Lapland's most expensive gifts on one page: ${n} items, ${a}–${b}. Experiences first: gold panning in Inari, a night in a glass igloo and a morning with reindeer. Then Kalevala jewellery and four classics that have been made the same way for decades. Prices are the partner shops' own.`,
    experiencesH2: 'Days and nights',
    objectsH2: 'Classics made the same way for decades',
    count: (n) => `${n} products`,
    note: 'Every price is the partner shop’s own, read on the date shown on the product page. We do not sell these ourselves.',
    scenes: ['An evening under the aurora', 'A night in a glass igloo', 'A day panning for gold'],
  },
  fi: {
    eyebrow: 'Valikoiman kärki',
    title: 'Lapin luxus',
    lead: (n, a, b) => `Lapin kalleimmat lahjat yhdellä sivulla: ${n} tuotetta, ${a}–${b}. Ensin elämykset: kullanhuuhdonta Inarissa, yö lasi-iglussa ja aamu porojen kanssa. Sitten Kalevala-korut ja neljä klassikkoa, joita on tehty samalla tavalla vuosikymmeniä. Hinnat ovat kumppanikauppojen omia.`,
    experiencesH2: 'Päiviä ja öitä',
    objectsH2: 'Klassikot, joita on tehty samalla tavalla vuosikymmeniä',
    count: (n) => `${n} tuotetta`,
    note: 'Jokainen hinta on kumppanikaupan oma ja luettu tuotesivulla näkyvänä päivänä. Emme myy näitä itse.',
    scenes: ['Ilta revontulien alla', 'Yö lasi-iglussa', 'Päivä kullanhuuhdonnassa'],
  },
  de: {
    eyebrow: 'Die Spitze des Sortiments',
    title: 'Luxus aus Lappland',
    lead: (n, a, b) => `Lapplands teuerste Geschenke auf einer Seite: ${n} Produkte, ${a}–${b}. Zuerst die Erlebnisse: Goldwaschen in Inari, eine Nacht im Glasiglu und ein Morgen bei den Rentieren. Dann Kalevala-Schmuck und vier Klassiker, die seit Jahrzehnten auf dieselbe Weise gefertigt werden. Die Preise sind die der Partnershops.`,
    experiencesH2: 'Tage und Nächte',
    objectsH2: 'Klassiker, seit Jahrzehnten gleich gefertigt',
    count: (n) => `${n} Produkte`,
    note: 'Jeder Preis stammt vom Partnershop und wurde an dem auf der Produktseite genannten Tag gelesen. Wir verkaufen diese Artikel nicht selbst.',
    scenes: ['Ein Abend unter dem Polarlicht', 'Eine Nacht im Glasiglu', 'Ein Tag beim Goldwaschen'],
  },
  sv: {
    eyebrow: 'Toppen av urvalet',
    title: 'Lyx från Lappland',
    lead: (n, a, b) => `Lapplands dyraste presenter på en sida: ${n} produkter, ${a}–${b}. Först upplevelserna: guldvaskning i Enare, en natt i glasigloo och en morgon med renarna. Sedan Kalevala-smycken och fyra klassiker som tillverkats på samma sätt i årtionden. Priserna är butikernas egna.`,
    experiencesH2: 'Dagar och nätter',
    objectsH2: 'Klassiker som tillverkats på samma sätt i årtionden',
    count: (n) => `${n} produkter`,
    note: 'Varje pris är partnerbutikens eget och avläst det datum som anges på produktsidan. Vi säljer inte dessa själva.',
    scenes: ['En kväll under norrskenet', 'En natt i glasigloo', 'En dag med guldvaskning'],
  },
  fr: {
    eyebrow: 'Le haut de la sélection',
    title: 'Le luxe lapon',
    lead: (n, a, b) => `Les cadeaux les plus chers de Laponie sur une seule page : ${n} produits, ${a}–${b}. D’abord les expériences : orpaillage à Inari, une nuit en igloo de verre et un matin avec les rennes. Puis les bijoux Kalevala et quatre classiques fabriqués de la même façon depuis des décennies. Les prix sont ceux des boutiques partenaires.`,
    experiencesH2: 'Journées et nuits',
    objectsH2: 'Des classiques fabriqués de la même façon depuis des décennies',
    count: (n) => `${n} produits`,
    note: 'Chaque prix est celui de la boutique partenaire, relevé à la date indiquée sur la fiche produit. Nous ne vendons pas ces articles nous-mêmes.',
    scenes: ['Un soir sous les aurores', 'Une nuit en igloo de verre', 'Une journée d’orpaillage'],
  },
  es: {
    eyebrow: 'Lo más alto de la selección',
    title: 'Lujo lapón',
    lead: (n, a, b) => `Los regalos más caros de Laponia en una sola página: ${n} productos, ${a}–${b}. Primero las experiencias: bateo de oro en Inari, una noche en un iglú de cristal y una mañana con los renos. Después, las joyas Kalevala y cuatro clásicos hechos de la misma manera durante décadas. Los precios son los de las tiendas asociadas.`,
    experiencesH2: 'Días y noches',
    objectsH2: 'Clásicos hechos de la misma manera durante décadas',
    count: (n) => `${n} productos`,
    note: 'Cada precio es el de la tienda asociada, leído en la fecha que aparece en la ficha del producto. No los vendemos nosotros.',
    scenes: ['Una tarde bajo la aurora', 'Una noche en un iglú de cristal', 'Un día bateando oro'],
  },
  it: {
    eyebrow: 'La punta della selezione',
    title: 'Il lusso lappone',
    lead: (n, a, b) => `I regali più costosi della Lapponia in una sola pagina: ${n} prodotti, ${a}–${b}. Prima le esperienze: la ricerca dell’oro a Inari, una notte in un igloo di vetro e una mattina con le renne. Poi i gioielli Kalevala e quattro classici fatti allo stesso modo da decenni. I prezzi sono quelli dei negozi partner.`,
    experiencesH2: 'Giornate e notti',
    objectsH2: 'Classici fatti allo stesso modo da decenni',
    count: (n) => `${n} prodotti`,
    note: 'Ogni prezzo è quello del negozio partner, letto alla data indicata sulla scheda prodotto. Non li vendiamo noi.',
    scenes: ['Una sera sotto l’aurora', 'Una notte in un igloo di vetro', 'Un giorno a cercare l’oro'],
  },
  nl: {
    eyebrow: 'De top van het assortiment',
    title: 'Luxe uit Lapland',
    lead: (n, a, b) => `De duurste cadeaus van Lapland op één pagina: ${n} producten, ${a}–${b}. Eerst de ervaringen: goud wassen in Inari, een nacht in een glazen iglo en een ochtend bij de rendieren. Dan Kalevala-sieraden en vier klassiekers die al tientallen jaren op dezelfde manier worden gemaakt. De prijzen zijn die van de partnerwinkels.`,
    experiencesH2: 'Dagen en nachten',
    objectsH2: 'Klassiekers die al tientallen jaren op dezelfde manier worden gemaakt',
    count: (n) => `${n} producten`,
    note: 'Elke prijs is die van de partnerwinkel, afgelezen op de datum die op de productpagina staat. Wij verkopen deze niet zelf.',
    scenes: ['Een avond onder het noorderlicht', 'Een nacht in een glazen iglo', 'Een dag goud wassen'],
  },
  'pt-BR': {
    eyebrow: 'O topo da seleção',
    title: 'Luxo da Lapônia',
    lead: (n, a, b) => `Os presentes mais caros da Lapônia em uma só página: ${n} produtos, ${a}–${b}. Primeiro as experiências: garimpo de ouro em Inari, uma noite em iglu de vidro e uma manhã com as renas. Depois, as joias Kalevala e quatro clássicos feitos do mesmo jeito há décadas. Os preços são das lojas parceiras.`,
    experiencesH2: 'Dias e noites',
    objectsH2: 'Clássicos feitos do mesmo jeito há décadas',
    count: (n) => `${n} produtos`,
    note: 'Cada preço é o da loja parceira, lido na data indicada na página do produto. Não vendemos estes itens.',
    scenes: ['Uma noite sob a aurora', 'Uma noite num iglu de vidro', 'Um dia garimpando ouro'],
  },
  ja: {
    eyebrow: '品ぞろえの頂点',
    title: 'ラップランドの贅沢',
    lead: (n, a, b) => `ラップランドで最も高価なギフトを1ページに：${n}点、${a}–${b}。まずは体験。イナリでの砂金採り、グラスイグルーでの一夜、トナカイと過ごす朝。その次に、Kalevalaのジュエリーと、何十年も同じ作り方で作られてきた4つの定番。価格はパートナーショップのものです。`,
    experiencesH2: '昼と夜',
    objectsH2: '何十年も同じ作り方の定番',
    count: (n) => `${n} 点`,
    note: '価格はすべて提携店のもので、商品ページに記載の日付に確認したものです。当サイトが販売しているわけではありません。',
    scenes: ['オーロラの下の夜', 'グラスイグルーでの一夜', '砂金採りの一日'],
  },
  'zh-CN': {
    eyebrow: '选品的顶端',
    title: '拉普兰的奢华',
    lead: (n, a, b) => `拉普兰最贵的礼物集中在一页：${n} 件，${a}–${b}。先是体验：在伊纳里淘金、玻璃冰屋的一夜、与驯鹿共度的早晨。然后是Kalevala珠宝和四件几十年来做法不变的经典之作。价格以合作商店为准。`,
    experiencesH2: '白天与夜晚',
    objectsH2: '几十年来做法不变的经典',
    count: (n) => `${n} 件商品`,
    note: '所有价格均为合作商店自己的定价，在商品页面标注的日期读取。我们并不亲自销售这些商品。',
    scenes: ['极光下的夜晚', '玻璃冰屋的一夜', '淘金的一天'],
  },
  ko: {
    eyebrow: '구성의 정점',
    title: '라플란드의 럭셔리',
    lead: (n, a, b) => `라플란드에서 가장 비싼 선물을 한 페이지에: ${n}개, ${a}–${b}. 먼저 체험: 이나리 사금 채취, 유리 이글루에서의 하룻밤, 순록과 함께하는 아침. 그다음 Kalevala 주얼리와 수십 년째 같은 방식으로 만드는 네 가지 클래식. 가격은 파트너 상점 기준입니다.`,
    experiencesH2: '낮과 밤',
    objectsH2: '수십 년째 같은 방식으로 만드는 클래식',
    count: (n) => `상품 ${n}개`,
    note: '모든 가격은 제휴 상점의 가격이며 상품 페이지에 표시된 날짜에 확인한 것입니다. 저희가 직접 판매하지 않습니다.',
    scenes: ['오로라 아래의 저녁', '유리 이글루에서의 하룻밤', '사금 채취의 하루'],
  },
}
