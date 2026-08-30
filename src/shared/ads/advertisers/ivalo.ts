import { ShoppingBag } from 'lucide-react'
import type { AdSpec } from '../AdUnit'

// Ivalo.com — curated marketplace for independent European fashion brands
// (named after Ivalo in Lapland). laplandgifts / laplandstore fit.
// Adtraction deep-link. Logo: _affiliate/logos/adtraction-ivalo-com.png
// → public/images/partners/ivalo.png.
const ivalo: AdSpec = {
  key: 'ivalo',
  brand: 'IVALO.COM',
  logo: '/images/partners/ivalo.png',
  // dest=Finnish Fashion -kategoria: ilman destiä Adtraction-wrap pudottaa
  // ivalo.comin ETUSIVULLE (lv_permanent_rules §5). Kategoria istuu copyyn
  // ("Lapin Ivalon mukaan nimetty" + suomalaiset design-merkit). IVALO.COMilla
  // on vain en- ja fi-kieliversiot, joten fi saa /fi-polun ja kaikki muut
  // kielet en-polun. Polut verifioitu 2026-08-14: molemmat HTTP 200; fi-title
  // "Suomalaiset vaatemerkit | Kotimainen muoti | IVALO.COM", h1 "Suomalainen
  // muoti"; en-title "Finnish Fashion | IVALO.COM", h1 "Finnish Fashion".
  linkFor: (sid, lang) => {
    const dest = (lang ?? '').slice(0, 2) === 'fi'
      ? 'https://ivalo.com/fi/collections/finnish-fashion'
      : 'https://ivalo.com/collections/finnish-fashion'
    return `https://go.laplandvibes.com/go/ivalo?sid=${encodeURIComponent(sid)}&dest=${encodeURIComponent(dest)}`
  },
  accent: '#DB2777',
  accentDark: '#9D174D',
  icon: ShoppingBag,
  copy: {
    fi: {
      eyebrow: 'Vaatteita, joita ketjut eivät myy',
      headline: 'IVALO.COM, riippumattomien design-merkkien verkkokauppa',
      sub: 'Lapin Ivalon mukaan nimetty kauppa kokoaa itsenäiset eurooppalaiset suunnittelijamerkit yhteen paikkaan. Löydät vaatteita ja asusteita, joita ei tule vastaan joka kadulla.',
      trust: ['Itsenäisiä design-merkkejä', 'Kuratoitu valikoima', 'Toimitus kotiin'],
      cta: 'Löydä merkit',
      poweredBy: 'Kauppa IVALO.COMissa',
    },
    en: {
      eyebrow: 'Clothes the chains don’t sell',
      headline: 'IVALO.COM, the marketplace for independent design brands',
      sub: 'Named after Ivalo in Lapland, the marketplace gathers independent European designer brands in one place. Clothing and accessories you won’t see on every street.',
      trust: ['Independent design brands', 'Curated selection', 'Delivered to your door'],
      cta: 'Discover the brands',
      poweredBy: 'Shopping at IVALO.COM',
    },
    de: {
      eyebrow: 'Mode, die Ketten nicht führen',
      headline: 'IVALO.COM, der Marktplatz für unabhängige Designmarken',
      sub: 'Benannt nach Ivalo in Lappland, versammelt der Marktplatz unabhängige europäische Designermarken an einem Ort. Kleidung und Accessoires, die einem nicht an jeder Ecke begegnen.',
      trust: ['Unabhängige Designmarken', 'Kuratierte Auswahl', 'Lieferung nach Hause'],
      cta: 'Marken entdecken',
      poweredBy: 'Einkauf bei IVALO.COM',
    },
    ja: {
      eyebrow: 'チェーン店にはない服',
      headline: 'IVALO.COM：独立系デザインブランドのマーケットプレイス',
      sub: 'ラップランドの町イヴァロにちなんで名付けられたマーケットプレイス。ヨーロッパの独立系デザイナーブランドをひとつの場所に集めました。そこら中で見かけない服と小物を。',
      trust: ['独立系デザインブランド', 'キュレーションされた品揃え', '自宅まで配送'],
      cta: 'ブランドを見つける',
      poweredBy: 'ショッピングはIVALO.COM',
    },
    es: {
      eyebrow: 'Ropa que las cadenas no venden',
      headline: 'IVALO.COM, el marketplace de marcas de diseño independientes',
      sub: 'Bautizado con el nombre de Ivalo, en Laponia, reúne marcas de diseño europeas independientes en un solo lugar. Ropa y accesorios que no verás en cada esquina.',
      trust: ['Marcas independientes', 'Selección curada', 'Entrega a domicilio'],
      cta: 'Descubre las marcas',
      poweredBy: 'Compras en IVALO.COM',
    },
    'pt-BR': {
      eyebrow: 'Roupas que as redes não vendem',
      headline: 'IVALO.COM, o marketplace de marcas de design independentes',
      sub: 'Batizado com o nome de Ivalo, na Lapônia, o marketplace reúne marcas europeias independentes de design em um lugar só. Roupas e acessórios que você não encontra em toda esquina.',
      trust: ['Marcas independentes', 'Seleção com curadoria', 'Entrega em casa'],
      cta: 'Descobrir as marcas',
      poweredBy: 'Compras na IVALO.COM',
    },
    'zh-CN': {
      eyebrow: '连锁店买不到的衣服',
      headline: 'IVALO.COM：独立设计品牌集合平台',
      sub: '以拉普兰小镇伊瓦洛命名，把欧洲独立设计师品牌汇聚一处。这里的服装和配饰，不会满大街撞款。',
      trust: ['独立设计品牌', '精选品类', '送货到家'],
      cta: '发现品牌',
      poweredBy: '购物于 IVALO.COM',
    },
    ko: {
      eyebrow: '체인점에는 없는 옷',
      headline: 'IVALO.COM: 독립 디자인 브랜드 마켓플레이스',
      sub: '라플란드의 마을 이발로에서 이름을 딴 마켓플레이스로, 유럽의 독립 디자이너 브랜드를 한곳에 모았습니다. 아무 데서나 마주치지 않는 옷과 액세서리를 만나 보세요.',
      trust: ['독립 디자인 브랜드', '큐레이션 셀렉션', '집으로 배송'],
      cta: '브랜드 발견하기',
      poweredBy: 'IVALO.COM에서 쇼핑',
    },
    fr: {
      eyebrow: 'Ce que les chaînes ne vendent pas',
      headline: 'IVALO.COM, la marketplace des marques de design indépendantes',
      sub: 'Baptisée du nom d’Ivalo, en Laponie, la marketplace réunit des marques de créateurs européens indépendants en un seul endroit. Des vêtements et accessoires qu’on ne croise pas à chaque coin de rue.',
      trust: ['Marques indépendantes', 'Sélection choisie', 'Livraison à domicile'],
      cta: 'Découvrir les marques',
      poweredBy: 'Shopping sur IVALO.COM',
    },
    it: {
      eyebrow: 'Vestiti che le catene non vendono',
      headline: 'IVALO.COM, il marketplace dei marchi di design indipendenti',
      sub: 'Battezzato col nome di Ivalo, in Lapponia, il marketplace riunisce marchi di design europei indipendenti in un unico posto. Abiti e accessori che non incontri a ogni angolo.',
      trust: ['Marchi indipendenti', 'Selezione curata', 'Consegna a casa'],
      cta: 'Scopri i marchi',
      poweredBy: 'Shopping su IVALO.COM',
    },
    nl: {
      eyebrow: 'Kleding die ketens niet verkopen',
      headline: 'IVALO.COM, de marktplaats voor onafhankelijke designmerken',
      sub: 'Vernoemd naar Ivalo in Lapland, verzamelt de marktplaats onafhankelijke Europese designermerken op één plek. Kleding en accessoires die u niet op elke straathoek tegenkomt.',
      trust: ['Onafhankelijke designmerken', 'Gecureerde selectie', 'Thuisbezorgd'],
      cta: 'Ontdek de merken',
      poweredBy: 'Winkelen op IVALO.COM',
    },
    sv: {
      eyebrow: 'Kläder kedjorna inte säljer',
      headline: 'IVALO.COM, marknadsplatsen för oberoende designmärken',
      sub: 'Uppkallad efter Ivalo i Lappland samlar marknadsplatsen oberoende europeiska designermärken på ett ställe. Kläder och accessoarer du inte möter på varje gathörn.',
      trust: ['Oberoende designmärken', 'Kurerat sortiment', 'Levereras hem till dörren'],
      cta: 'Upptäck märkena',
      poweredBy: 'Shopping på IVALO.COM',
    },
  },
}

export default ivalo
