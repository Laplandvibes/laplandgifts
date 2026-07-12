import type { ChromeCopy } from './types'

const zhCN: ChromeCopy = {
  nav: {
    categories: '分类',
    products: '商品',
    guides: '指南',
    promises: '我们的承诺',
  },
  hero: {
    kicker: '来自芬兰拉普兰的中心',
    badge: '商店即将开业',
    title: '把一份',
    titleAccent: '北极',
    lead: '很快，您就能在度假途中订购正宗的拉普兰礼物，在您到家之前它们已在家中等候。手工打造的珍品、自有品牌商品和北极体验，从芬兰拉普兰直接发货。首批精选系列正在筹备中。',
    ctaExplore: '浏览礼物',
    ctaGuide: '礼物指南',
  },
  categories: {
    h2: '送出拉普兰的三种方式',
    sub: '无论是品牌马克杯、手工雕刻的库克萨木杯,还是北极光之旅，我们都为您准备了完美的北极礼物',
    items: [
      {
        name: '#LaplandVibes 周边商品',
        tag: '自有品牌',
        description: '采用我们独特北极图案的马克杯、T恤、连帽衫和帆布画。商店开业后即按需印制并发往全球。',
      },
      {
        name: '手工艺品',
        tag: '纯手工',
        description: '手工锻造的普科刀、雕刻的库克萨木杯、萨米传统工艺(杜奥德吉)饰品,以及野生浆果果酱，直接来自拉普兰当地工匠。',
      },
      {
        name: '体验项目与礼品卡',
        tag: '送礼灵感',
        description: '北极光之旅、驯鹿雪橇、温馨木屋之夜,以及精心策划的拉普兰旅行礼盒，为他人送上难忘的北极时刻。',
      },
    ],
  },
  valueProp: {
    h2: '度假时下单,回家时取货。',
    sub: '再也不用把易碎的纪念品塞进行李箱。商店开业后，LaplandGifts 将这样运作：您只管放心购物，其余的交给我们。',
    steps: [
      { title: '度假途中挑选', description: '看中一把普科刀?想给母亲买一只库克萨木杯?旅行途中下单即可，您无需随身携带任何物品。' },
      { title: '我们从拉普兰发货', description: '您的礼物会被精心包装,直接由芬兰工匠和我们的欧盟印制合作伙伴发货。' },
      { title: '在家中等候您', description: '您一回到家,拉普兰的珍品就已经在门口等候。无需为行李烦恼,也不会有破损的纪念品。' },
    ],
  },
  productGrid: {
    h2: '即将上市',
    sub: '我们的首个系列正由芬兰拉普兰最优秀的工匠精心打造。请订阅我们的电子报,以便第一时间获得通知。',
    priceTbd: '价格待定',
    notifyMe: '通知我',
    notifyAria: (name) => `${name} 上架时通知我`,
    products: [
      { name: '极光马克杯', category: 'merch' },
      { name: '驯鹿马克杯', category: 'merch' },
      { name: '极光T恤', category: 'merch' },
      { name: '北极连帽衫', category: 'merch' },
      { name: '拉普兰海报', category: 'merch' },
      { name: '羊毛帽', category: 'merch' },
      { name: '普科刀', category: 'artisan' },
      { name: '库克萨木杯', category: 'artisan' },
      { name: '萨米手链', category: 'artisan' },
      { name: '浆果果酱礼盒', category: 'artisan' },
      { name: '鹿角烛台', category: 'artisan' },
      { name: '羊毛毯', category: 'artisan' },
    ],
    catMerch: '周边',
    catArtisan: '手工艺品',
  },
  giftGuide: {
    h2: '礼物指南',
    sub: '不知道选什么?让我们帮您为每个场合找到合适的礼物',
    suggested: '推荐礼物',
    occasions: [
      {
        name: '圣诞节',
        description: '来自圣诞老人故乡的礼物最能传递圣诞气氛。请从我们精选的节日系列中挑选。',
        suggestions: ['"拉普兰奢华"礼篮', '拉普兰羊毛毯', '云莓果酱礼盒', '毛毡拖鞋'],
      },
      {
        name: '婚礼',
        description: '用经得起时间考验的手工艺品庆祝爱情,新人可以珍藏多年。',
        suggestions: ['极光主题吊坠', '木质库克萨木杯(一对)', '驯鹿皮钱包', '桦树皮编篮'],
      },
      {
        name: '生日',
        description: '用普通商店里找不到的独特礼物,给重要的人一份惊喜。',
        suggestions: ['萨米杜奥德吉手链', '普科刀', '"北极风味"礼篮', '鹿角烛台'],
      },
      {
        name: '商务礼品',
        description: '用与众不同的高品质北极礼物,给客户和合作伙伴留下深刻印象。',
        suggestions: ['普科刀(刻字)', '"拉普兰奢华"礼篮', '木质库克萨木杯', '极光主题吊坠'],
      },
    ],
  },
  guides: {
    kicker: '免费指南',
    h2: '北极指南',
    sub: '我们对拉普兰所知的一切,浓缩在两本免费指南中。请在下方填写邮箱,即可立即下载。',
    guides: [
      {
        title: '工艺的秘密',
        subtitle: '辨识正宗拉普兰工艺品的内行指南',
        description: '学会从工厂仿制品中辨认真正的手工普科刀,理解萨米杜奥德吉的文化意义,掌握野生浆果的季节,以及购买正宗拉普兰工艺品的5条黄金准则。',
        topics: ['普科刀', '库克萨木杯', '萨米杜奥德吉', '野生浆果', '买家须知'],
        pages: 9,
      },
      {
        title: '拉普兰魔法7日',
        subtitle: '您唯一需要的行程方案',
        description: '从罗瓦涅米到伊纳里再返回的完整逐日路线。包含极光观赏要点、哈士奇雪橇、破冰船游览、实用预算规划,以及完整的北极行装清单。',
        topics: ['7日行程', '预算规划', '行装清单', '季节指南', '本地贴士'],
        pages: 13,
      },
    ],
    pagesPdf: (pages) => `${pages} 页 · PDF`,
    cta: '填写邮箱,免费获取两份指南',
  },
  newsletter: {
    kicker: '两份指南均可免费获取',
    h2: '填写邮箱即可下载',
    body: '立即获得两份北极指南,并在新商品和工匠新作品上架时第一时间收到通知。',
    placeholder: 'your@email.com',
    submit: '获取两份指南',
    submitting: '发送中…',
    successHeading: '指南已准备就绪!',
    successFootnote: '欢迎加入北极家庭。请同时查收您的收件箱!',
    btnSecret: '工艺的秘密',
    btnSeven: '魔法7日',
    errorMsg: '出现错误,请重试。',
    spamNote: '绝无垃圾邮件。可随时取消订阅。',
  },
  shipping: {
    h2: '我们的承诺',
    sub: 'LaplandGifts 商店开业后，您可以期待这些保障',
    items: [
      { title: '从拉普兰直发', description: '每件商品都从芬兰或我们的欧盟印制合作伙伴发出。没有中间商,没有不明仓库。' },
      { title: '正品保证', description: '工艺品附带原产地证书。萨米工艺品仅向授权销售商采购。' },
      { title: '礼品级包装', description: '每份订单均以可回收包装精心装裹,设计灵感来自北极自然。结账时可添加个性化留言。' },
      { title: '支持工匠', description: '每件工艺品销售收入的一部分会直接回馈给工匠及其所在社区。' },
    ],
  },
  faq: {
    kicker: '实用须知',
    h2: '拉普兰礼物，常见问题',
    sub: '带什么回家、如何合乎道德地购买,以及哪些商品真正可以跨境寄送。',
    items: [
      {
        q: '在拉普兰可以买到哪些正宗的纪念品?',
        a: '最正宗的拉普兰纪念品出自当地工匠之手:普科刀(芬兰传统腰刀)、库克萨木杯(用桦木瘤雕成的杯子)、驯鹿皮制品、羊毛织物,以及云莓果酱、越橘蜜饯和桦树汁制品等野生食材。萨米传统工艺(杜奥德吉)，银饰、鹿角制品和编织带，最为珍贵。请认准工匠姓名或原产地证书,而非机场礼品店里的量产货。',
      },
      {
        q: '我能合乎道德地购买萨米工艺品吗?萨米杜奥德吉标志是什么?',
        a: '可以。杜奥德吉(Duodji)是萨米语中对传统手工艺的称呼,圆形的「Sámi Duodji」商标是真品标识,授予由萨米工匠采用传统方法和材料制作的工艺品。选择带有该标志的物品，或直接向具名的萨米工匠或授权销售商购买，既能让收入回馈社区,也能确保是真品,而非工厂仿制的萨米图案。我们仅向授权销售商采购萨米工艺品。',
      },
      {
        q: '拉普兰的商店会把礼物寄往国外吗?',
        a: '许多商店会。我们自有的 #LaplandVibes 商品（商店即将开业）将采用按需印制，由欧盟生产合作伙伴发往全球。工艺品从芬兰发货;送达时间和费用取决于您所在的国家和承运商。在旅途中网购的实际好处是,您无需把易碎物品塞进行李，它们会单独运送,在您回家时已等候在门口。',
      },
      {
        q: '从罗瓦涅米可以带什么回家?',
        a: '罗瓦涅米位于北极圈上,是通往芬兰拉普兰的门户,因此是个理想的购物地。受欢迎的选择有库克萨木杯、普科刀、驯鹿皮配饰、羊毛袜和羊毛帽、姆明和圣诞老人主题商品,以及云莓果酱、萨尔米亚奇(咸味甘草糖)和桦树汁糖浆等北极食品。若想要有出处的物品,请选择由作者署名的作品,而非泛泛的「拉普兰」纪念品。',
      },
      {
        q: '驯鹿和鹿角制品可以合法带回吗?',
        a: '驯鹿(Rangifer tarandus)既非濒危物种,也未列入 CITES,因此由自然脱落的鹿角或副产品制成的鹿角、皮革和羊毛制品,通常可作为个人纪念品在欧盟内及带往大多数国家。各目的地的规定各不相同,尤其是未经处理的动物材料,因此出行前请查阅您所在国家的海关和进口规定。如有疑问,经过处理的皮革、羊毛和木制品最为稳妥。',
      },
      {
        q: '从拉普兰订购圣诞礼物应提前多久?',
        a: '若需在十二月送达,请在十二月中旬承运商截单日之前尽早下单，圣诞节前几周国际寄送会变慢,而手工制品是小批量制作的。如果您在秋季或初冬造访拉普兰,旅途中下单是让礼物及时送达家中的最简单方式。订阅我们的电子报,我们会提示各季节的截单日期。',
      },
    ],
  },
  related: {
    kicker: '下一站去哪',
    h2: '规划您拉普兰之旅的其余行程',
    sub: 'LaplandVibes 网络的一部分，通过我们的姊妹网站继续探索。',
    items: [
      { label: '拉普兰圣诞与圣诞老人', blurb: '圣诞老人村、圣诞假期与节庆季贴士。', href: 'https://laplandchristmas.com/santa-village/' },
      { label: '拉普兰制造的产品', blurb: '更丰富的拉普兰产品与北极设计选购。', href: 'https://laplandstore.fi' },
      { label: '规划您的拉普兰之旅', blurb: '芬兰拉普兰的目的地、季节与实用建议。', href: 'https://laplandvisit.com/itineraries/' },
    ],
  },
  footer: {
    pillars: [
      { name: '分类', href: '/#categories' },
      { name: '精选商品', href: '/#products' },
      { name: '礼物指南', href: '/#gift-guide' },
      { name: '免费指南', href: '/#guides' },
      { name: 'LaplandStays', href: 'https://laplandstays.com' },
      { name: 'LaplandActivities', href: 'https://laplandactivities.online' },
    ],
    editorialNote: '由位于芬兰拉普兰的 Lapeso Oy 独立运营 · 最后审阅:2026年5月 · 我们直接与精选工匠和商家合作,并在每个商品页面上完整披露。',
    extraLegalUnsub: '取消订阅',
  },
  notFound: {
    h1: '页面未找到',
    body: '此页面不存在。也许北极光把它带去了别的地方。',
    back: '返回首页',
  },
  unsubscribe: {
    title: '取消订阅 | LaplandGifts',
    h1: '取消订阅',
    body: '请输入您的电子邮箱地址,即可从我们的电子报列表中退订。',
    successH1: '已取消订阅',
    successBody: '您将不再收到我们的邮件。很遗憾您的离开。',
    submit: '取消订阅',
    submitting: '处理中…',
    backHome: '返回首页',
    errorMsg: '出现错误。请重试,或发送邮件至 info@laplandvibes.com',
  },
  legal: {
    backHome: '返回首页',
  },
}

// ---------- KO (한국어, 정중체) ----------

export default zhCN
