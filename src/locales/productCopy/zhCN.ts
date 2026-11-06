import type { ProductCopyMap } from './index'

/**
 * Tuotteiden kiinankieliset (yksinkertaistettu) tekstit. Rakenne ja säännöt:
 * ks. de.ts.
 *
 * `specs` on positionaalinen: indeksi vastaa `product.details.specs`-taulukon
 * järjestystä lähdedatassa. `specLabels` samoin, ja siinä on arvo vain niillä
 * riveillä joilla on oma otsikko (`key: 'other'`).
 *
 * Lukuja, mittayksiköitä, tuotekoodeja ja EAN-numeroita ei käännetä eikä
 * muunneta. Numerot kirjoitetaan puolileveinä (ASCII) eikä kiinalaisina
 * numeromerkkeinä: 「二」 rikkoisi numeroiden-täsmäävyystestin ja on lisäksi
 * väärin tuotetiedoissa.
 */
export const PRODUCT_COPY_ZH_CN: ProductCopyMap = {
  'iittala-aalto-vase-160': {
    name: 'Iittala 阿尔瓦·阿尔托花瓶 160 mm，透明',
    description:
      '阿尔瓦·阿尔托在 1936 年画下这道波浪，Iittala 至今仍用嘴吹制，所以每一只的轮廓都略有不同。160 mm 正是人们听到这个名字时脑中浮现的尺寸。',
    specs: [
      '高 16 cm，宽 20.5 cm',
      '玻璃',
      '透明',
      '毛重 1.44 kg',
      '仅可手洗',
      '口吹玻璃，非对称造型',
      '阿尔瓦·阿尔托，Iittala Alvar Aalto Collection',
      '999-01, EAN 6411920004445',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      '工艺',
      '设计师与系列',
      '货号与 EAN',
    ],
  },
  'iittala-kivi-candleholder': {
    name: 'Iittala Kivi 烛台 60 mm，灰色',
    description:
      '海基·奥尔沃拉设计的压制玻璃烛台，高 6 cm，把一支茶蜡变成一块颜色。这是拥有一件 Iittala 最便宜的方式，而且经得起手提行李。',
    specs: [
      '6.5 x 6.5 cm，高 6 cm',
      '玻璃',
      '灰色',
      '毛重 0.338 kg',
      '仅可手洗',
      '海基·奥尔沃拉，Iittala Kivi',
      '1003-03, EAN 6411920039676',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, '设计师与系列', '货号与 EAN'],
  },
  'marimekko-unikko-mug': {
    name: 'Marimekko Unikko 马克杯 25 cl',
    description:
      '玛伊娅·伊索拉在 1964 年画下 Unikko 罂粟，那时 Marimekko 刚刚禁掉花卉印花，而这个图案比禁令活得更久。这只炻器马克杯容量 25 cl，把印花放到早餐桌上而不是墙上。',
    specs: [
      '25 cl',
      '直径 8 cm，高 9.5 cm',
      '炻器',
      '白色、深绿、米色和浅沙色',
      '毛重 0.276 kg',
      '图案玛伊娅·伊索拉，杯型萨米·鲁奥察莱宁',
      '666236-01, EAN 6411255152033',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      '设计师',
      '货号与 EAN',
    ],
  },
  'halti-tokoi-dx-jacket': {
    name: 'Halti Tokoi DX 冲锋衣，男款',
    description:
      '全部接缝压胶的防风雨外壳，配轻薄内衬和可调帽子，版型宽松到里面能穿一件羊毛衫。Halti 只在欧盟境内配送。',
    specs: [
      'DrymaxX Sleek Twill，带 DrymaxX 膜的防水防风 2 层面料。材质成分为 50 % 再生涤纶和 50 % 涤纶',
      '柔软涤纶内衬，100 % 再生涤纶',
      '10000 mm',
      '10000 g/m²/24 h',
      '0.9 kg',
      'S, M, L, XL, XXL, XXXL',
      'Fossil Beige, Four Leaf Clover Green, Black',
      '全部接缝压胶，可调固定帽，高立领，前身 2 向拉链，网布通风，带拉链插手袋，按扣内袋，可调袖口，前门襟挡风条，反光细节',
      '与同色衣物反面洗涤，先拉好拉链。最高 30 °C，温和程序。不可漂白、烘干、熨烫或干洗',
    ],
    specLabels: [
      undefined,
      '内衬',
      '防水指数',
      '透气指数',
      undefined,
      undefined,
      undefined,
      '细节',
      undefined,
    ],
  },
  'makia-merino-beanie': {
    name: 'Makia Merino 帽',
    description:
      '一顶素净的北欧美利奴羊毛帽，从温暖的咖啡馆直接走进寒气里时，它能平衡温度和湿气。前面没有拳头那么大的标志。',
    specs: [
      '100 % 美利奴羊毛，8 针英式罗纹，不使用剪皮法',
      '均码',
      'Dark Brown',
      '芬兰制造，面料产自意大利',
      '与同色衣物用轻柔程序洗涤，平铺晾干并整形。多数时候通风即可，不必清洗。使用中可能起球',
    ],
  },
  'makia-aurora-hoodie': {
    name: 'Makia Aurora 连帽卫衣',
    description:
      '赫尔辛基品牌 Makia 的 100% 有机棉常规版型连帽卫衣。厚度足以在室内和温和的秋夜当作最外层来穿。',
    specs: [
      '100 % 有机棉，370 g 法式毛圈布',
      'S, M, L, XL, XXL',
      'Carbon Black',
      '常规版型，帽子抽绳，袋鼠口袋，下摆和袖口罗纹，再生涤纶织唛',
      '土耳其制造，面料产自土耳其',
      '与同色衣物反面洗涤。不要在印花上熨烫。最大缩率 5 %。趁湿整形',
    ],
    specLabels: [undefined, undefined, undefined, '版型与细节', undefined, undefined],
  },
  'halti-kroka-mitten': {
    name: 'Halti Kroka II 连指手套',
    description:
      '带 60 g 填充和硅胶防滑掌心的防风连指手套，中性剪裁。风一起来，连指手套就胜过分指手套，因为手指之间互相取暖。',
    specs: [
      'Stormwall 软壳，50 % 涤纶和 50 % 再生涤纶。柔软抓绒 100 % 涤纶。莱卡针织袖口',
      'Microtherm Dynamic 60 g，内衬 Active Dry 柔感针织，100 % 再生涤纶',
      '0.1 kg',
      '06, 07, 08, 09, 10, 11, 12',
      '黑色',
      '单独洗涤，30 °C 温和程序。不可漂白、烘干、熨烫或干洗',
      '084-0757',
    ],
    specLabels: [
      undefined,
      '填充与内衬',
      undefined,
      undefined,
      undefined,
      undefined,
      '产品编号',
    ],
  },
  'halti-tunturit-ski-socks': {
    name: 'Halti Tunturit 滑雪袜',
    description:
      '及膝的美利奴混纺袜，在小腿和脚踝处加了衬垫，也就是雪鞋压着的位置。Halti 标明产地为欧洲。',
    specs: [
      '美利奴羊毛混纺：36 % 锦纶、23 % 腈纶、23 % 美利奴羊毛、16 % 聚丙烯、2 % 氨纶',
      '0.1 kg',
      '34-36, 37-39, 40-42, 43-45, 46-48',
      'Sargasso Sea Blue, Lemon Pepper Beige',
      '欧洲制造',
      '小腿和脚踝衬垫，及膝长度，加固后跟和脚尖，小腿与脚背设通风区',
      '最高 40 °C，普通程序。不可熨烫、漂白、干洗或烘干',
      '087-0471',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      '细节',
      undefined,
      '产品编号',
    ],
  },
  'north-outdoor-huuru-beanie': {
    name: 'North Outdoor Huuru 美利奴帽',
    description:
      'North Outdoor 在奥卢的自有针织厂用 100% 不使用剪皮法的美利奴、18.5 微米织成这顶罗纹帽。按形状织成而不是裁出来的，因此边角料很少。',
    specs: [
      '100 % 美利奴羊毛，不使用剪皮法，18.5 微米，织物 270 g/m²',
      '均码',
      '靛蓝色',
      '芬兰奥卢制造',
      '经常通风，需要时再洗。羊毛洗涤剂，30 °C 轻柔程序，最低脱水，反面洗涤',
      'OEKO-TEX, Woolmark',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, '认证'],
  },
  'north-outdoor-pyry-scarf': {
    name: 'North Outdoor Pyry 美利奴围巾',
    description:
      '在奥卢织成的 100% 美利奴宽长英式罗纹围巾。长到可以有好几种围法，在开阔的山地上风向一变，这一点就有用了。',
    specs: [
      '100 % 美利奴羊毛，18.5 微米，1/1 罗纹',
      '均码',
      '燕麦灰',
      '芬兰奥卢制造',
      '经常通风，需要时再洗。羊毛洗涤剂，30 °C 轻柔程序，最低脱水，反面洗涤',
      'OEKO-TEX, Woolmark',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, '认证'],
  },
  'north-outdoor-honka-jumper': {
    name: 'North Outdoor Honka 美利奴毛衣，男款',
    description:
      '100% 美利奴的厚身英式罗纹毛衣，宽松版型，落肩设计。看着厚重，穿着轻盈，在奥卢的针织厂织成。',
    specs: [
      '100 % 美利奴羊毛，不使用剪皮法，18.5 微米，变化罗纹',
      'S, M, L, XL, 2XL, 3XL',
      '靛蓝色',
      '芬兰奥卢制造',
      '经常通风，需要时再洗。羊毛洗涤剂，30 °C 轻柔程序，最低脱水，反面洗涤',
      'OEKO-TEX, Woolmark',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, '认证'],
  },
  'marttiini-lapinleuku-255': {
    name: 'Marttiini 拉普兰刀 255',
    description:
      '传统的拉普兰刀，全长 27 cm，不锈钢刀身，上漆的卷纹桦木刀柄，皮革刀鞘。Marttiini 在罗瓦涅米制刀，这一版带有护手。',
    specs: [
      '16 cm',
      '总长 27 cm',
      '刀身不锈钢，刀柄上漆卷纹桦木，刀鞘皮革',
      '刀具与按扣式皮鞘',
      '255010',
    ],
    specLabels: ['刀身长度', undefined, undefined, undefined, '产品编号'],
  },
  'marttiini-napapiirin-puukko': {
    name: 'Marttiini 北极圈刀',
    description:
      '全长 20 cm 的日常小刀，碳钢刀身，打蜡桦木刀柄，棕色皮鞘。碳钢比不锈钢更容易开出锋利的刃口，但需要上油，Marttiini 在产品页上也这么提醒。',
    specs: [
      '9 cm',
      '总长 20 cm',
      '刀身碳钢，刀柄打蜡桦木，刀鞘棕色皮革',
      '每次使用后务必把刀身擦干，并定期用无盐油保养',
      '121019',
    ],
    specLabels: ['刀身长度', undefined, undefined, undefined, '产品编号'],
  },
  'marttiini-ilves-131': {
    name: 'Marttiini Lynx 131',
    description:
      '一把 22 cm 的刀，不锈钢刀身，上漆的卷纹桦木刀柄，棕色皮鞘。Marttiini 表示 Lynx 这个型号由创始人扬内·马尔蒂尼在 1930 年代绘制。',
    specs: [
      '11 cm',
      '总长 22 cm',
      '刀身不锈钢，刀柄上漆卷纹桦木，刀鞘棕色皮革',
      '131010',
    ],
    specLabels: ['刀身长度', undefined, undefined, '产品编号'],
  },
  'kupilka-classic-cup-21': {
    name: 'Kupilka 21 野营杯 2.1 dl',
    description:
      '库克萨的造型，换成可以丢进洗碗机的材料：一半松木纤维素纤维，一半热塑性塑料，在芬兰模压成型。容量 2.1 dl，重 83 克，围着火堆也不烫手。',
    specs: [
      '2.1 dl',
      '83 g',
      '60 x 93 x 165 mm',
      'Kareline 天然纤维复合材料，50 % 松木纤维素纤维和 50 % 热塑性塑料，使用绿色能源生产',
      '芬兰',
      '在路上像木质库克萨一样冲洗，回家可以放进洗碗机。不可微波',
      '3021011XX',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, undefined, '型号'],
  },
  'kupilka-bowl-55': {
    name: 'Kupilka 55 野营碗 5.5 dl',
    description:
      '5.5 dl 的碗，把手结实到可以一只手端着，另一只手还拿着杯子。与杯子相同的芬兰松木纤维复合材料，184 克，可用洗碗机。',
    specs: [
      '5.5 dl',
      '184 g',
      '54 x 154 x 223 mm',
      'Kareline 天然纤维复合材料，50 % 松木纤维素纤维和 50 % 热塑性塑料，使用绿色能源生产',
      '芬兰',
      '可用洗碗机。不可微波。已获准接触冷热食品',
      '3055013X',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, undefined, '型号'],
  },
  'kupilka-cutlery-set': {
    name: 'Kupilka 餐具套装',
    description:
      '勺、刀、叉，用同一种芬兰木纤维复合材料制成，整套 56 克。把 Kupilka 的材料带回家最便宜的方式，也是最容易塞进手提行李的一件。',
    specs: [
      '勺、刀和叉',
      '56 g',
      'Kareline 天然纤维复合材料，50 % 松木纤维素纤维和 50 % 热塑性塑料，使用绿色能源生产',
      '芬兰',
      '在路上像木质餐具一样冲洗，回家可以放进洗碗机。不可微波',
      '3025025X',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, '型号'],
  },
  'pentik-posio-mug': {
    name: 'Pentik Posio 马克杯 0.3 l',
    description:
      'Pentik 在波西奥烧制这只马克杯，公司称那里是世界最北的陶瓷厂，整个 Posio 系列都以驯鹿为饰。可用洗碗机、烤箱、微波炉和冷冻室。',
    specs: [
      '0.3 l',
      '红色',
      '产自拉普兰的波西奥，Pentik 称之为世界最北的陶瓷厂',
      '可用洗碗机、电烤箱、烘焙烤箱、微波炉和冷冻室',
      'Posio。系列中的每一件都以驯鹿为饰',
      '12JAO050P41',
    ],
    specLabels: [undefined, undefined, undefined, undefined, '系列', '产品编码'],
  },
  'pentik-tunturiretki-studio-dish': {
    name: 'Pentik Tunturiretki Winter Studio 三角深盘 19 cm',
    description:
      '安努·彭蒂克画的是山中徒步时不断在树间出现的驯鹿。Studio 系列在波西奥手工彩绘，因此没有两只盘子的笔触完全一样。',
    specs: [
      '直径 19 cm',
      '蓝色',
      '在拉普兰波西奥手工制作，安努·彭蒂克设计',
      '可用洗碗机、电烤箱、烘焙烤箱、微波炉和冷冻室',
      'Pentik Studio，手工彩绘系列',
      '12ST353TT61',
    ],
    specLabels: [undefined, undefined, undefined, undefined, '系列', '产品编码'],
  },
  'kuivalihakundi-poro-jerky': {
    name: '驯鹿肉干 原味 2 x 20 g',
    description:
      '两袋各 20 克的驯鹿肉干，原料为 100% 芬兰驯鹿，烤箱烘干，用无麸质酱油、黑胡椒、大蒜和糖浆腌制。肉类不能邮寄出欧盟，因此配送止步于欧盟边境。',
    specs: [
      '2 x 20 g',
      '肉来自芬兰',
      '保质期自肉干燥并包装当日起约一年。无需冷藏，开封后也是',
      '重盐。无麸质',
      '能量 1514 kJ / 360 kcal，脂肪 14.2 g 其中饱和脂肪 6.2 g，碳水化合物 7.9 g 其中糖 5.1 g，蛋白质 50.2 g，盐 9.5 g',
    ],
    specLabels: [undefined, undefined, undefined, '标签说明', '每 100 g 营养成分'],
  },
  'finnish-flavours-palalaku-salmiakki': {
    name: 'Finnish Flavours 优选 Palalaku 咸甘草糖 150 g',
    description:
      '150 克装的软质咸甘草糖，就是那种加了氯化铵的，第一口就把人分成两派。Suomikauppa 把食品寄到远远超出芬兰的地方。',
    specs: [
      '150 g',
      '能量 1316 kJ / 311 kcal，脂肪 0.5 g 其中饱和脂肪 0 g，碳水化合物 72 g 其中糖 50 g，蛋白质 4.1 g，盐 1.7 g',
      'Finnish Flavours, Kumitehtaankatu 5, 04260 Kerava',
    ],
    specLabels: [undefined, '每 100 g 营养成分', '经销商'],
  },
  'meritalo-tyrnihillo': {
    name: 'Meritalo 芬兰沙棘果酱 310 g',
    description:
      '每 100 克含 37 克浆果的沙棘果酱，用芬兰沙棘在芬兰西南部萨洛的 Meritalo 家庭农场熬煮，而不是在拉普兰。沙棘偏酸而不甜，所以配奶酪比抹在薄饼上更耐吃。',
    specs: [
      '310 g',
      '浆果为芬兰产。由家族企业在芬兰西南部萨洛的 Meritalo 自家农场制作',
      '能量 781 kJ / 187 kcal，脂肪 1.9 g 其中饱和脂肪 0.3 g，碳水化合物 41 g 其中糖 41 g，蛋白质 0.3 g，盐 0.01 g',
      'Marjajaloste Meritalo Oy, 25610 Ylönkylä',
    ],
    specLabels: [undefined, undefined, '每 100 g 营养成分', '经销商'],
  },
  'kuivalihakundi-poro-jerky-200g': {
    name: '驯鹿肉干 原味 200 g',
    description:
      '同一款驯鹿肉干的礼品装，200 克。生产者表示一公斤肉干要用三公斤鲜肉，一袋的价格大半就来自这里。',
    specs: [
      '200 g',
      '100 % 驯鹿肉，后腿肉，烤箱烘干并腌制',
      '1 kg 肉干需要 3 kg 鲜肉',
      '保质期自肉干燥并包装当日起约一年。无需冷藏，开封后也是',
    ],
    specLabels: [undefined, undefined, '用肉量', undefined],
  },
  'kuivalihakundi-beef-jerky-smoked': {
    name: '牛肉干 烟熏 40 g',
    description:
      '用牛肉而不是驯鹿肉，而且是真正熏过而不是加香料的，每 100 克含 57 克蛋白质。这一类里最便宜的一件，也是最经得起背包折腾的一件。',
    specs: [
      '40 g',
      '牛只在欧盟境内饲养和屠宰',
      '1 kg 肉干需要 2.5 kg 新鲜牛肉',
      '能量 1261 kJ / 298 kcal，脂肪 5.5 g 其中饱和脂肪 2.4 g，碳水化合物 5.2 g 其中糖 4.4 g，蛋白质 56.9 g，盐 5 g',
    ],
    specLabels: [undefined, undefined, '用肉量', '每 100 g 营养成分'],
  },
  'fazer-geisha-chocolate-bar': {
    name: 'Fazer Geisha 巧克力棒 37 g，5条装',
    description:
      '五条装 Geisha 巧克力棒，每条 37 g，Fazer 牛奶巧克力包裹着酥脆的榛子牛轧糖夹心。Fazer 标明这款巧克力不使用棕榈油。',
    specs: [
      '5 x 37 g',
      '可可含量至少 30 % 的牛奶巧克力，榛子牛轧糖夹心含 11 % 榛子',
      '能量 550 kcal / 2303 kJ，脂肪 35 g，饱和脂肪 17 g，碳水化合物 51 g，糖 49 g，蛋白质 8 g，盐 0.19 g',
    ],
    specLabels: [undefined, undefined, '每 100 g 营养成分'],
  },
  'nordqvist-moomin-forest-berry-tea': {
    name: 'Nordqvist 姆明 森林浆果洛神花茶，20 包',
    description:
      '有机洛神花配苹果和森林浆果，天然不含咖啡因，在努尔米耶尔维的 Nordqvist 工厂调配。二十包重 35 克，是这家店里最轻的礼物。',
    specs: [
      '20 x 1.75 g，35 g',
      '在芬兰努尔米耶尔维的 Nordqvist 工厂调配',
      '95 °C 冲泡 2 至 4 分钟。冷泡 5 至 10 分钟',
      '有机认证、纯素、无麸质、天然不含咖啡因',
    ],
    specLabels: [undefined, undefined, '冲泡', '饮食'],
  },
  'nordqvist-cranberry-toffee-tea': {
    name: 'Nordqvist 蔓越莓咸太妃茶，20 包',
    description:
      '在洛神花与南非路易波士的基底上，用酸蔓越莓对上咸太妃，所以不含咖啡因，晚上喝也还有味道。Nordqvist 自 1883 年起在芬兰调配茶。',
    specs: [
      '20 x 1.75 g，35 g',
      '95 °C 冲泡 2 至 5 分钟',
      '纯素。洛神花和路易波士通过 Rainforest Alliance 认证',
    ],
    specLabels: [undefined, '冲泡', '饮食与认证'],
  },
  'kaapa-mushrooms-pakuri-powder': {
    name: 'Kääpä Mushrooms 桦褐孔菌提取物粉 30 g',
    description:
      'Kääpä Mushrooms 在北欧森林采集功能性蘑菇，这是 30 克装的桦褐孔菌提取物粉，用来冲进热饮。Ruohonjuuri 只在欧盟关税和税收区内配送，标签上列出的药物相互作用值得先读一遍。',
    specs: [
      '30 g',
      '100 % 桦褐孔菌，有机。每日剂量含 100 mg β-葡聚糖',
      '芬兰',
      '带欧盟有机叶标的有机产品。无麸质、无乳糖、不含乳制品、无大豆、无糖、无咖啡因、无添加剂、纯素、野生',
      '桦褐孔菌不得与抗生素、抗凝血药、青霉素或静脉注射葡萄糖同时使用。请按包装标示的剂量服用，不要超量',
      '6430071310212',
    ],
    specLabels: [undefined, undefined, undefined, '饮食', '警示', 'EAN'],
  },
  'arctic-warriors-spruce-sprout-powder': {
    name: 'Arctic Warriors 云杉嫩芽粉 40 g',
    description:
      '冻干云杉嫩芽，在有机国有林中于两周的窗口期手工采摘，同一片林子每两年才采一次。一勺里有柑橘和松脂的气味，每 100 g 含 382 mg 维生素 C。',
    specs: [
      '40 g',
      '冻干云杉嫩芽',
      '每100 g含382 mg',
    ],
    specLabels: [undefined, undefined, '维生素C'],
  },
  'arctic-warriors-nettle-powder': {
    name: 'Arctic Warriors 荨麻粉 150 g',
    description:
      '在拉普兰有机农场种植的荨麻，冻干成味道足够中性的粉，拌进汤里或面包里都不会和其他材料打架。',
    specs: [
      '150 g，毛重 0.162 kg',
      '4 x 16 x 23 cm',
      '冻干荨麻',
      '芬兰，在拉普兰有机农场种植',
      '每天 1 至 5 茶匙',
      '能量 1484 kJ / 354 kcal，蛋白质 23.6 g，碳水化合物 56 g，脂肪 3.44 g，盐低于 5 mg。维生素 A 1900 µg',
    ],
    specLabels: [undefined, undefined, undefined, undefined, '用量', '每 100 g 营养成分'],
  },
  'arctic-warriors-roseroot-elixir': {
    name: 'Arctic Warriors 红景天酊 100 ml',
    description:
      '红景天长在拉普兰山地潮湿的溪岸和岩壁上，Arctic Warriors 把它连同荨麻一起萃取进植物甘油。一茶匙可以加进茶、麦片粥或酸奶。',
    specs: [
      '100 ml',
      '红景天和荨麻',
    ],
  },
  'omega7-sea-buckthorn-olive-oil': {
    name: 'Omega7 SBA24 沙棘与橄榄油 150 ml',
    description:
      '沙棘果油和籽油与橄榄油配在一起，在芬兰研发和生产。生产者把维生素 A 和 E 的含量标准化，而不是听凭当年的收成。',
    specs: [
      '150 ml',
      '沙棘果油和籽油配橄榄油，维生素 A 和 E 含量已标准化',
      '在芬兰研发和生产',
      '请按包装标示的剂量服用，不要超量。膳食补充剂不能替代多样化的饮食。请置于儿童无法取得处',
    ],
    specLabels: [undefined, undefined, undefined, '注意'],
  },
  'kaino-spruce-sprout-sparkling': {
    name: 'KAINO Drinks 云杉嫩芽气泡饮 0.2 l',
    description:
      '用芬兰有机原料做的无酒精气泡饮，木屋里的一杯干杯因此不必含酒精。要冰镇后再喝，否则云杉的香气会被气泡盖掉。',
    specs: [
      '0.2 l',
      '以 100 % 芬兰有机原料制成。不含酒精',
      '芬兰',
      '能量 122.65 kJ / 29.3 kcal，脂肪低于 0.1 g 其中饱和脂肪低于 0.1 g，碳水化合物 6.9 g 其中糖 6.9 g，蛋白质低于 0.1 g，盐低于 0.1 g',
      '纯素。欧盟有机叶标',
    ],
    specLabels: [undefined, undefined, undefined, '每 100 ml 营养成分', '饮食与认证'],
  },
  'arabia-moomin-mug-snufkin': {
    name: 'Arabia 姆明马克杯，史力奇',
    description:
      'Arabia 从 1990 年起就把托芙·扬松的画印在这些马克杯上，收藏者按年份追踪那些停产的图案。史力奇就是秋天离开、春天回来的那一位。',
    specs: ['0.3 l', '托芙·扬松'],
    specLabels: [undefined, '原画'],
  },
  'arabia-moomin-mug-friendship': {
    name: 'Arabia 姆明马克杯，Friendship',
    description:
      '杯上画的是妮妮，那个怕黑的隐形孩子，当有人对她好，她会慢慢重新显出身形。比那些名气大的角色更安静的一个选择。',
    specs: ['0.3 l', '托芙·扬松'],
    specLabels: [undefined, '原画'],
  },
  'arabia-moomin-figurine-moomintroll': {
    name: 'Arabia 姆明迷你雕像，姆明',
    description:
      '手工制作的陶瓷小雕像，图样由图利基·皮耶蒂莱在 1990 年代绘制，附专属包装盒。小到可以装在大衣口袋里带回家。',
    specs: ['图利基·皮耶蒂莱，1990 年代', '手工陶瓷，附专属包装盒'],
    specLabels: ['设计', '工艺'],
  },
  'fiskars-moominpappa-scissors': {
    name: 'Fiskars 姆明爸爸多用途剪刀',
    description:
      '橙色手柄的 Fiskars 剪刀，出现在芬兰厨房抽屉里的次数比任何其他工具都多。这一把长 21 cm，不锈钢材质，手柄上是姆明爸爸。',
    specs: ['21 cm', '不锈钢'],
  },
  'rento-tar-sauna-soap': {
    name: 'Rento 焦油桑拿皂 150 g',
    description:
      '松焦油在芬兰先是一种气味，其次才是一种味道，而它最该待的地方就是桑拿房。植物油基底，挂在黄麻绳上，两次使用之间能晾干。',
    specs: ['150 g', '植物油基底皂'],
  },
  'rento-birch-sauna-honey': {
    name: 'Rento 桦木桑拿蜜 150 ml',
    description:
      '抹在洗净的皮肤上，让它在温和的热气里停一会儿，再用温水冲掉。桑拿蜜是芬兰桑拿仪式里游客从来想不到要带回家的那一部分。',
    specs: ['150 ml'],
  },
  'rento-blueberry-sauna-honey': {
    name: 'Rento 蓝莓桑拿蜜 150 ml',
    description:
      '带去角质效果的版本，香气是蓝莓。用法与桦木款相同：抹在洗净的皮肤上，让热气去做事，再用温水冲掉。',
    specs: ['150 ml'],
  },
  'rento-sauna-pillow': {
    name: 'Rento Pino 桑拿枕 50 x 22 cm',
    description:
      '桑拿长凳上垫头颈的提花织枕。它不会塌形，而这正是桑拿枕和一条折起来的毛巾之间的全部区别。',
    specs: ['50 x 22 cm', '黑色'],
  },
  'rento-linen-back-scrubber': {
    name: 'Rento 亚麻毛圈布搓背巾 14 x 70 cm',
    description:
      '亚麻毛圈布，长到可以搓到自己的背。皮肤先在热气里变软，之后才清洗，芬兰人不假思索就按这个顺序来。',
    specs: ['14 x 70 cm', '亚麻毛圈布'],
  },
  'rento-linen-wash-mitt': {
    name: 'Rento 亚麻毛圈布沐浴手套 14 x 24 cm',
    description:
      '和搓背巾同样的亚麻毛圈布，做成掌心加厚的手套。这一节里最便宜的一件，也是人们真的每周都用的那一件。',
    specs: ['14 x 24 cm', '亚麻毛圈布，掌心双层'],
  },
  'emendo-sauna-scents': {
    name: 'Emendo 桑拿香氛：咸甘草、松脂、sisu，3 x 10 ml',
    description:
      '木架上的三款香氛，其中一款是咸甘草。比咸甘草加桑拿更芬兰的组合不多，而这一套把两者放进了同一把水勺。',
    specs: ['3 x 10 ml，配木架', '咸甘草、松脂、sisu'],
    specLabels: [undefined, '香型'],
  },
  'aurora-mini-kuksa': {
    name: '迷你库克萨，带皮绳，4 cm',
    description:
      '4 cm 的库克萨，是给一小杯烈酒准备的而不是咖啡，配一条可挂在腰带上的皮绳。拥有这个造型最小也最便宜的方式。',
    specs: ['直径 4 cm'],
  },
  'pahkataide-kuksa-bear': {
    name: 'Pahkataide 卷纹桦木库克萨，骨片镶嵌熊图案',
    description:
      '用卷纹桦木制成的库克萨，手柄上镶有刻着熊的骨片。Pahkataide 用罂粟籽油处理杯子，以保护木材。切勿用洗洁精清洗：冲洗即可，每天用来喝咖啡会在表面形成一层膜，进一步保护木杯。',
    specs: [
      '卷纹桦木，手柄镶嵌骨片',
      '用清水冲洗，勿用洗洁精',
      '芬兰制造',
    ],
    specLabels: [undefined, undefined, '产地'],
  },
  'pahkataide-curly-birch-kuksa': {
    name: 'Pahkataide 卷纹桦木库克萨',
    description:
      '一只朴素的卷纹桦木库克萨，木材和罂粟籽油处理与 Pahkataide 的镶嵌款相同，只是没有装饰。木纹让每一只都不一样，容量约 1.5 dl。',
    specs: [
      '卷纹桦木',
      '约 1.5 dl，每只都独一无二',
      '用清水冲洗，勿用洗洁精',
      '芬兰制造',
    ],
    specLabels: [undefined, undefined, undefined, '产地'],
  },
  'koivumaa-kuksa-reindeer-bone': {
    name: 'Kuksa E. Koivumaa 桦木瘤库克萨，驯鹿骨装饰',
    description:
      '用桦木瘤按传统方法制成的库克萨，手柄上有两个指孔和一块驯鹿骨装饰。木瘤不烫嘴，因此是在篝火旁喝热咖啡的经典杯子。先用黑咖啡开杯，之后只需冲洗。',
    specs: [
      '桦木瘤，手柄饰有驯鹿骨',
      '约 1.5 dl，手柄有两个孔',
      '用清水冲洗，勿用洗洁精，勿放入洗碗机',
    ],
  },
  'koivumaa-burl-kuksa': {
    name: 'Kuksa E. Koivumaa 桦木瘤库克萨，单孔',
    description:
      '同一制作者的木瘤库克萨的朴素款：按传统方法制作的桦木瘤，手柄上一个指孔，容量约 1.5 dl。先用黑咖啡开杯，咖啡的油脂会封住木材张开的毛孔；切勿放入洗碗机。',
    specs: [
      '桦木瘤',
      '约 1.5 dl，手柄有一个孔',
      '用清水冲洗，勿用洗洁精，勿放入洗碗机',
    ],
  },
  'fazer-super-salmiakki': {
    name: 'Fazer Super Salmiakki 含片 80 g',
    description:
      '咸甘草经典款里最硬的一种，自 1970 年代起就装在同样的罐形盒子里出售。给来访的人来一片，十秒内你就知道他属于哪一派。',
    specs: ['80 g'],
  },
  'fazer-pantteri-salmiakki': {
    name: 'Fazer Pantteri 咸甘草软糖 210 g',
    description:
      '带薄荷味的软质咸甘草，已经做了五十多年。比含片温和，所以这袋适合送给从没试过咸甘草的人。',
    specs: ['210 g'],
  },
  'halva-salmiakkiruutu': {
    name: 'Halva Salmiakkiruutu 170 g',
    description:
      'Halva 自 1960 年起在赫尔辛基的皮塔延马基做这种方块咸甘草。比 Fazer 的版本更有嚼劲，芬兰人坚持说这才是原版。',
    specs: ['170 g', '自 1960 年起在赫尔辛基皮塔延马基生产'],
  },
  'sisu-xylitol-salmiakki': {
    name: 'Sisu 木糖醇咸甘草含片 36 g',
    description:
      '用木糖醇增甜的咸甘草，带有芬兰牙医协会标志。铁盒装得进大衣口袋，所以芬兰人的车里几乎都有一盒。',
    specs: ['36 g', '木糖醇。带有芬兰牙医协会标志'],
    specLabels: [undefined, '甜味剂'],
  },
  'leijona-tar-liquorice': {
    name: 'Leijona 焦油甘草含片 32 g',
    description:
      '用松焦油调味的甘草糖，自 1933 年起生产。焦油是一种芬兰味道，会进到糖果、桑拿皂甚至冰淇淋里，而这是最便宜的尝试方式。',
    specs: ['32 g'],
  },
  'fazer-hazelnut-chocolate': {
    name: 'Karl Fazer 整粒榛子牛奶巧克力 200 g',
    description:
      '牛奶巧克力里嵌着整粒榛子的那块蓝色巧克力。Fazer 自 1922 年起一直用同样的蓝色包装纸，所以芬兰人出国带的就是它。',
    specs: ['200 g'],
  },
  'fazer-light-milk-chocolate': {
    name: 'Karl Fazer 清爽牛奶巧克力 180 g',
    description:
      '蓝色经典款更清淡温和的版本。如果你觉得经典款太甜，就带这一块。',
    specs: ['180 g'],
  },
  'fazer-fazerina': {
    name: 'Fazer Fazerina 香橙松露巧克力排 99 g',
    description:
      '牛奶巧克力里包着香橙松露夹心，自 1953 年起生产。比蓝色经典款更薄，装在背包里也不会化成一整块。',
    specs: ['99 g'],
  },
  'fazer-jaffa-orange': {
    name: 'Fazer Jaffa 香橙蛋糕 300 g',
    description:
      '海绵蛋糕底，上面是橙子果酱和黑巧克力。既不是饼干也不是蛋糕，芬兰人每次都要为此争论一番。',
    specs: ['300 g'],
  },
  'north-outdoor-arctic-250-balaclava': {
    name: 'North Outdoor Arctic 250 美利奴头套',
    description:
      'North Outdoor 做过的最暖的针织物，形状是为戴在头盔下设计的。坐雪地摩托或驯鹿雪橇时，寒气最先从脖子和脸颊灌进来，这一层就是把那道缝堵上。',
    specs: [
      '美利奴羊毛针织，Arctic 250 克重',
      '均码',
      '黑色',
      'North Outdoor，芬兰奥卢',
    ],
  },
  'north-outdoor-kevo-gloves': {
    name: 'North Outdoor Kevo 美利奴手套',
    description:
      '在 North Outdoor 位于奥卢的自有针织厂，用不使用剪皮法的美利奴织成。薄到最冷的日子可以戴在连指手套里，拍照时也不用摘。',
    specs: ['100 % 美利奴羊毛，不使用剪皮法', 'M, L, XL', '靛蓝色', '在芬兰奥卢织造'],
  },
  'north-outdoor-heavyweight-gaiter': {
    name: 'North Outdoor Heavyweight 美利奴围脖',
    description:
      '美利奴抓绒，厚到可以在等极光出现时拉过鼻梁。羊毛在呼出的水汽凝结其中时仍然保温，而在寒冷里久站，问题恰恰就在这里。',
    specs: ['美利奴抓绒', '均码', '黑色', 'North Outdoor，芬兰奥卢'],
  },
  'north-outdoor-sointu-cardigan': {
    name: 'North Outdoor Sointu 美利奴开衫',
    description:
      '方正版型的美利奴开衫，看着像室内衣物，用起来是中层。这一套里唯一一件你会穿去参加雪地行程后晚餐的衣服。',
    specs: ['100 % 美利奴羊毛', 'XS–2XL', '拿铁色', 'North Outdoor，芬兰奥卢'],
  },
  'north-outdoor-arctic-260-zip-neck': {
    name: 'North Outdoor Arctic 260 美利奴拉链高领衫',
    description:
      '100% 美利奴的高领拉链衫，厚到在室内可以单穿，在户外可以当中层。拉链才是重点：走路时拉开，停下来时拉上。',
    specs: [
      '100 % 美利奴羊毛',
      'S–3XL',
      '花岗岩灰与黑色',
      'North Outdoor，芬兰奥卢',
      '高护领，隐藏式拉链，后摆加长',
    ],
    specLabels: [undefined, undefined, undefined, undefined, '细节'],
  },
  'halti-hossa-baselayer-men': {
    name: 'Halti Hossa II 美利奴内层套装，男款',
    description:
      '上衣和长裤装在同一个盒子里，190 g 美利奴，20.5 微米。贴身的那一层决定了其余装备管不管用，而多数游客来的时候偏偏就缺这一层。',
    specs: [
      '100 % 美利奴羊毛，190 g/m²，20.5 微米，1x1 罗纹',
      '长袖上衣和长裤',
      '反面洗涤',
    ],
    specLabels: [undefined, '套装内容', undefined],
  },
  'halti-hossa-baselayer-women': {
    name: 'Halti Hossa II 美利奴内层套装，女款',
    description:
      '同一套 190 g 美利奴，改为女性版型。走路时出汗，然后停下来站着看，拉普兰的一天实际上就是这样，而羊毛在这中间仍然保温。',
    specs: [
      '100 % 美利奴羊毛，190 g/m²，20.5 微米，1x1 罗纹',
      '长袖上衣和长裤',
      '反面洗涤',
    ],
    specLabels: [undefined, '套装内容', undefined],
  },
  'halti-heatgrid-midlayer': {
    name: 'Halti HeatGrid 中层夹克，女款',
    description:
      'Halti 的轻量技术型中层夹克，采用柔软的华夫格针织面料，透气并能将湿气从皮肤排出。配有全长前拉链、立领、拉链口袋，以及弹性袖口和下摆。',
    specs: [
      '内侧华夫格针织 95 % 再生涤纶 / 5 % 氨纶；平纹针织 92 % 再生涤纶 / 8 % 氨纶',
      '与同色衣物反面洗涤，洗前拉好拉链',
    ],
  },
  'halti-taival-dx-jacket': {
    name: 'Halti Taival DX 3L 冲锋衣，男款',
    description:
      '三层结构外壳，防水 20 000 mm，透气 30 000 g。这两个数字管的是相反的方向：前者把雨夹雪挡在外面，后者让爬坡时的汗排出去，而不是在里面结冰。',
    specs: [
      'DrymaxX Nano 针织外壳，3 层。100 % 再生涤纶',
      '20 000 mm',
      '30 000 g/m²/24 h',
    ],
    specLabels: [undefined, '防水指数', '透气指数'],
  },
  'halti-sykli-ski-gloves': {
    name: 'Halti Sykli 滑雪手套',
    description:
      '带 120 g 填充、皮革掌心和防雪袖口的防水手套，摔倒时雪不会从手腕灌进去。为莱维或于拉斯的缆车滑雪而做，不是为了在城里散步。',
    specs: [
      'DrymaxX，4 向弹力，防水防风。皮革掌心',
      '120 g Microtherm Dynamic',
      '15 000 mm / 15 000 g/m²/24 h',
    ],
    specLabels: [undefined, '填充', '防水与透气指数'],
  },
  'halti-merino-socks-2pack': {
    name: 'Halti 美利奴羊毛袜，2 双装',
    description:
      '两双，因为今天穿的那双到明天早上不会干。用美利奴混纺而不是纯羊毛，更经得起反复机洗。',
    specs: [
      '40 % 美利奴羊毛、40 % 腈纶、19 % 锦纶、1 % 氨纶',
      '2 双',
      '欧洲制造',
    ],
    specLabels: [undefined, '包装规格', undefined],
  },
  'husky-farm-safari-rovaniemi': {
    name: '双人哈士奇农场参观与雪橇之旅，罗瓦涅米',
    description:
      '一张体验礼品卡：在罗瓦涅米近郊的真实哈士奇农场跟随向导参观，随后乘哈士奇雪橇穿越冬日森林。现在购买，邮件送达，日期由收礼人自己选。',
    specs: [
      '向导带领的哈士奇农场参观和双人哈士奇雪橇之旅。向导可在罗瓦涅米 10 km 范围内接送',
      '约 3.5 小时',
      '2 人',
      '罗瓦涅米。确切地点在预订时确认',
      '冬季，11 月至 4 月',
      '英语',
      '有效期 3 年',
    ],
    specLabels: [undefined, '时长', '人数', '地点', '季节', '向导语言', '礼品卡'],
  },
  'reindeer-safari-rovaniemi': {
    name: '双人驯鹿雪橇之旅，罗瓦涅米',
    description:
      '在罗瓦涅米近郊真实驯鹿农场的傍晚之旅：乘驯鹿雪橇绕行 2.5 km，参观农场并享用小点心。天空晴朗时或能看到极光，但没有人能保证。',
    specs: [
      '进入驯鹿农场，双人乘驯鹿拉的雪橇绕行 2.5 km，含小点心。罗瓦涅米 10 km 范围内接送',
      '2.5 至 3 小时',
      '2 人',
      '罗瓦涅米。确切地点在预订时确认',
      '冬季，12 月至 3 月。行程在傍晚出发',
      '英语',
      '有效期 3 年',
    ],
    specLabels: [undefined, '时长', '人数', '地点', '季节', '向导语言', '礼品卡'],
  },
  'aurora-tour-kilpisjarvi': {
    name: '双人雪地摩托极光之旅，基尔皮斯耶尔维',
    description:
      '基尔皮斯耶尔维以格外清澈的夜空著称。乘雪地摩托短途行驶，两人即可到达一处能在纯粹自然宁静中观赏极光的地点，并有热饮御寒。晚间 20.00 至 23.00 出发，视天气情况而定。',
    specs: [
      '双人向导极光之旅，乘雪地摩托约 15 km，含热饮',
      '3 小时，20.00 至 23.00',
      '2 人',
      '基尔皮斯耶尔维',
      '驾驶须满 18 岁，乘坐雪橇须满 8 岁',
      '有效期 3 年',
    ],
    specLabels: [undefined, '时长', '人数', '地点', '年龄限制', '礼品卡'],
  },
  'glass-igloo-night-levi': {
    name: '双人玻璃冰屋之夜，列维',
    description:
      '在列维山上温暖的玻璃冰屋度过两人一夜。电加热玻璃始终清晰，躺在电动双人床上就能寻找极光。含迎宾饮品、浴袍和早餐，屋内有小厨房、淋浴和卫生间。',
    specs: [
      '双人入住 Superior 级玻璃冰屋一晚，迎宾饮品、浴袍和拖鞋、早餐。不含交通',
      '1 晚，11.00 退房',
      '2 人',
      '列维，位于山上高处',
      '23 m²，电加热防雾玻璃，小厨房，淋浴和卫生间，电动双人床',
      '适用于 27.08-10.11 和 01.04-12.04 期间的入住',
    ],
    specLabels: [undefined, '时长', '人数', '地点', '穹顶屋', '礼品卡'],
  },
  'gold-panning-day-inari': {
    name: '四人淘金一日游，伊纳里',
    description:
      '在伊纳里一处仍在开采的金矿区为四人小组安排的一天：先了解历史，再亲手淘金并观看机械采掘。含餐食和萨利色尔卡中心出发的接送，找到的金子归寻得者所有。',
    specs: [
      '四人在开采中的矿区度过 5 小时淘金日，含手工淘金指导和机械采掘观摩。当日餐食、工具以及萨利色尔卡中心往返矿区的接送均包含在内',
      '5 小时',
      '4 人',
      '伊纳里',
      '春季和夏季',
      '有效期 3 年',
    ],
    specLabels: [undefined, '时长', '人数', '地点', '季节', '礼品卡'],
  },
  'korouoma-waterfalls-rovaniemi': {
    name: '双人科罗乌奥马冰瀑之旅，罗瓦涅米出发',
    description:
      '冬天，顺着科罗乌奥马峡谷岩壁流下的溪水会冻成一道道蓝色冰瀑。这趟向导带领的一日游从罗瓦涅米出发，前往约 110 km 外波西奥的峡谷。步行难度不高，积雪深时穿雪鞋，途中享用一份简单午餐。',
    specs: [
      '向导带领的双人科罗乌奥马冰瀑之旅，含交通、简单午餐和小吃。罗瓦涅米市中心 10 km 范围内接送',
      '含交通约 7 小时',
      '2 人',
      '科罗乌奥马峡谷，波西奥。罗瓦涅米出发',
      '冬季，11 月至 4 月',
      '英语',
      '有效期 3 年',
    ],
    specLabels: [undefined, '时长', '人数', '地点', '季节', '向导语言', '礼品卡'],
  },
  'amethyst-mine-snowshoe-luosto': {
    name: '双人雪鞋徒步前往卢奥斯托紫水晶矿',
    description:
      '从罗瓦涅米出发，向导带领的一日游前往皮哈-卢奥斯托国家公园：先穿雪鞋穿越公园，再乘雪地小火车到朗皮瓦拉山顶的紫水晶矿。在矿里每个人都可以亲手挖掘，找到的紫水晶可以带走。',
    specs: [
      '向导带领的双人雪鞋徒步和紫水晶矿参观，含交通、休息点小吃和全部装备。可借用保暖衣物和鞋子',
      '约 7 小时',
      '2 人',
      '朗皮瓦拉，卢奥斯托。罗瓦涅米出发',
      '冬季，12 月至 4 月',
      '英语',
      '有效期 3 年',
    ],
    specLabels: [undefined, '时长', '人数', '地点', '季节', '向导语言', '礼品卡'],
  },
  'midnight-sun-canoe-rovaniemi': {
    name: '双人午夜阳光独木舟之旅，罗瓦涅米',
    description:
      '在罗瓦涅米附近，于午夜阳光下由向导带领划独木舟，最后围着篝火吃些小吃。出发前向导会讲解基本要领，无需划船经验。行程在夏季 6 月至 8 月进行。',
    specs: [
      '向导带领的双人独木舟之旅，含装备、划船和安全讲解、篝火小吃，以及罗瓦涅米 10 km 范围内接送',
      '约 3 小时',
      '2 人',
      '罗瓦涅米。确切地点在预订时确认',
      '夏季，6 月至 8 月',
      '英语',
      '有效期 3 年',
    ],
    specLabels: [undefined, '时长', '人数', '地点', '季节', '向导语言', '礼品卡'],
  },
  'halti-snowmobile-kilpisjarvi': {
    name: '双人雪地摩托登顶哈尔蒂，基尔皮斯耶尔维',
    description:
      '哈尔蒂是芬兰的最高点，就在与挪威的边境上。这趟从基尔皮斯耶尔维出发、由向导带领的雪地摩托之旅穿越卡西瓦尔西荒野，抵达 303B 号界碑，全程约 110 km，到达山顶后可以在哈尔蒂留言簿上签名。行程时间为 10 点至 16 点，须有驾驶雪地摩托的经验。',
    specs: [
      '向导带领的双人雪地摩托之旅，约 110 km，含雪地摩托服装（连体服、靴子、头盔）、热果汁和点心、路线许可、增值税和保险',
      '约 6 小时',
      '2 人',
      '基尔皮斯耶尔维',
      '3 月 1 日至 5 月 10 日，视天气而定',
      '驾驶须满 18 岁，乘坐雪橇须满 8 岁。须有驾驶经验',
      '有效期 3 年',
    ],
    specLabels: [undefined, '时长', '人数', '地点', '季节', '年龄限制', '礼品卡'],
  },
  'fell-ice-fishing-kilpisjarvi': {
    name: '双人山地冰钓之旅，基尔皮斯耶尔维',
    description:
      '向导开雪地摩托带您进入基尔皮斯耶尔维附近的山地，全程约 15 km，坐在驯鹿皮上从冰洞垂钓。可能钓到红点鲑或鳟鱼，钓具由主办方提供。行程时间为 11:15 至 14:15。',
    specs: [
      '向导带领的双人行程，约 15 km，含雪地摩托服装（连体服、靴子、头盔）、钓具、热果汁和点心、增值税和保险',
      '约 3 小时',
      '2 人',
      '基尔皮斯耶尔维',
      '11 月 20 日至 5 月 10 日，视天气而定',
      '驾驶须满 18 岁，乘坐雪橇须满 8 岁',
      '有效期 3 年',
    ],
    specLabels: [undefined, '时长', '人数', '地点', '季节', '年龄限制', '礼品卡'],
  },
  'wilderness-cabin-ivalo': {
    name: '双人荒野小屋含全部餐食两晚，伊瓦洛',
    description:
      '两人在伊瓦洛河畔、紧邻哈马斯通图里荒野的小屋住两晚，并可自由使用独立的河畔桑拿。从抵达当天的晚餐到离开当天的午餐全部包含，用驯鹿肉、鱼和浆果等拉普兰食材烹制，伊瓦洛往返接送也包含在内。适用于 6 月中旬至 10 月底的工作日。',
    specs: [
      '两人在荒野小屋住 2 晚，可自由使用独立的河畔桑拿，含全部餐食及篝火旁的下午咖啡，以及伊瓦洛市中心或机场往返接送',
      '2 晚',
      '2 人',
      '伊瓦洛河畔。确切地点在预订时确认',
      '周一至周五，6 月 15 日至 10 月 30 日',
      '芬兰语和英语',
      '有效期 3 年',
    ],
    specLabels: [undefined, '时长', '人数', '地点', '季节', '语言', '礼品卡'],
  },
  'katka-snowmobile-levi': {
    name: '卡特卡荒野雪地摩托之旅，莱维',
    description:
      '从莱维出发、约 30 km 的雪地摩托之旅，深入卡特卡通图里荒野。途中在 Hanhipirtti 歇脚，这是一间摆满复古物件的老木屋荒野咖啡馆，之后返回莱维。无需雪地摩托经验，礼品卡供一位 13 岁及以上的人使用。',
    specs: [
      '向导带领的单人雪地摩托之旅，约 30 km，在荒野咖啡馆 Hanhipirtti 歇脚。含冬季服装',
      '约 2 至 3 小时',
      '1 位 13 岁及以上',
      '莱维。出发地 Leviraitti 13，西尔卡',
      '冬季，12 月至 3 月',
      '英语和芬兰语',
      '有效期 3 年',
    ],
    specLabels: [undefined, '时长', '人数', '地点', '季节', '语言', '礼品卡'],
  },
  'foodin-six-mushroom-blend': {
    name: 'Foodin 六菇混合粉 40 g',
    description:
      '白桦茸、灵芝、猴头菇、虫草、香菇和舞茸装进一罐，磨成粉可加入咖啡或奶昔。一罐覆盖整个功能菌菇货架。',
    specs: ['40 g', '白桦茸、灵芝、猴头菇、虫草、香菇、舞茸'],
  },
  'foodin-chaga-tincture': {
    name: 'Foodin 白桦茸酊剂 50 ml',
    description:
      '芬兰白桦茸以滴剂代替粉末：50 ml 小瓶无需熬煮。整个白桦茸理念的旅行装。',
    specs: ['50 ml', '芬兰白桦茸'],
  },
  'kaavi-chaga-chunks': {
    name: 'Kaavi Porcini 白桦茸块 100 g',
    description:
      '芬兰桦树白桦茸的粗块，用于慢火熬煮。在“超级食物”这个词出现之前，这里就是这样喝的。一袋可以煮很多壶。',
    specs: ['100 g', '小火慢煮成茶'],
    specLabels: [undefined, '用法'],
  },
  'puhdistamo-instant-chaga': {
    name: 'Puhdistamo 速溶白桦茸提取粉 28 g',
    description:
      '无需熬煮、直接溶于热水的白桦茸。28 克小罐放进任何行李都行，比一袋原块更经得起旅途。',
    specs: ['28 g'],
  },
  'puhdistamo-conifer-extract': {
    name: 'Puhdistamo 针叶树提取液 50 ml',
    description:
      '从芬兰针叶树中提取的滴剂。拉普兰森林徒步的气息，装进一个能放进大衣口袋的小瓶。',
    specs: ['50 ml'],
  },
  'nb-little-my-beanie': {
    name: '小不点粗针织帽',
    description:
      '厚实的针织帽，翻边处是小不点，羊毛混纺，连着一周戴上摘下也不走形。成人均码，也是唯一会认可拉普兰天气的姆明角色。',
    specs: [
      '腈纶、尼龙与羊毛',
      '成人，均码',
      '姆明官方授权产品',
    ],
    specLabels: [undefined, undefined, '授权'],
  },
  'nb-moomintroll-mittens': {
    name: '姆明连指手套',
    description:
      '针织连指手套，内衬柔软抓绒，高 24 厘米，袖口可以盖过外套衣袖。成人尺码，价格也够亲民，在狗拉雪橇上丢一只还能接受。',
    specs: [
      '100 % 腈纶，抓绒内衬',
      '成人，高 24 厘米，拇指上方宽 9.5 厘米',
      '姆明官方授权产品',
    ],
    specLabels: [undefined, undefined, '授权'],
  },
  'nb-moomintroll-love-socks': {
    name: '姆明 Love 复古袜',
    description:
      '浅蓝色罗纹袜，小腿处以粉色爱心刺绣出姆明，是刺绣而非印花，因此经得起水洗。均码覆盖 EU 36 至 42。',
    specs: [
      '67 % 棉、25 % 涤纶、4 % 弹性二烯、3 % 尼龙、1 % 氨纶',
      '均码，EU 36-42',
      '刺绣图案',
    ],
    specLabels: [undefined, undefined, '细节'],
  },
  'nb-moomin-classics-tee': {
    name: 'Moomin Classics 厚重T恤',
    description:
      '260 克棉质T恤，薰衣草色，箱型剪裁，胸前是小小的姆明刺绣而非大幅印花。厚度足以垂直落下，而不会贴身。',
    specs: [
      '100 % 棉，260 g/m2',
      '中性，箱型剪裁，XS 至 XXL',
      '箱型剪裁，商店建议选小一码',
    ],
    specLabels: [undefined, undefined, '尺码提示'],
  },
  'nb-pippi-tee': {
    name: '长袜子皮皮T恤',
    description:
      '皮皮在芬兰印制于 240 克棉质T恤上，中性直筒剪裁，下摆比一般更长。在有些家庭里，阿斯特丽德·林格伦比姆明走得更远。',
    specs: [
      '100 % 棉，240 g/m2',
      '中性，直筒剪裁，M 至 XXL',
      '芬兰印制',
    ],
  },
  'nb-moomintroll-hoodie': {
    name: '姆明连帽衫',
    description:
      '300 克棉与涤纶连帽衫，芬兰印制，中性直筒剪裁。桑拿凉下来之后的小屋夜晚，人们真正穿在身上的就是这一件。',
    specs: [
      '65 % 棉、35 % 涤纶，300 g/m2',
      '中性，直筒剪裁，XS 至 XXL',
      '芬兰印制',
    ],
  },
  'nb-kunnas-kalevala-tote': {
    name: 'Mauri Kunnas 犬之卡勒瓦拉手提袋',
    description:
      '棉质手提袋，印有 Mauri Kunnas 为《犬之卡勒瓦拉》所作的插画，那是他用狗重述的芬兰民族史诗。本店最便宜的东西，却依然能讲清一个国家。',
    specs: [
      '100 % 棉',
      '38 x 42 cm',
      'Mauri Kunnas 官方授权产品',
    ],
    specLabels: [undefined, undefined, '授权'],
  },
  'sk-marimekko-unikko-crossbody': {
    name: 'Marimekko Neat Crossbody Unikko 斜挎包',
    description:
      'Unikko 罂粟花印在一只刚好装得下手机、钱包和一副手套的斜挎包上。Unikko 画于 1964 年，就在 Armi Ratia 下令禁止花卉印花之后，它比那道禁令多活了六十年。',
    specs: [
      'Neat Crossbody，尺寸 M',
      'Unikko，蓝色与深蓝色',
    ],
    specLabels: ['款式', '花色'],
  },
  'sk-moomin-duvet-set': {
    name: '姆明被套四件套 150 x 210 cm，Sydänkäpyset',
    description:
      '通过 GOTS 认证的纯棉床品套装，印有姆明与斯诺克小姐。芬兰语花色名 Sydänkäpyset 说的正是图案所描绘的那种关系。',
    specs: [
      '被套 150 x 210 cm',
      'GOTS（全球有机纺织品标准）',
    ],
    specLabels: [undefined, '认证'],
  },
  'sk-novita-wonder-wool': {
    name: 'Novita Wonder Wool DK 毛线 50 g',
    description:
      '来自 Novita 的 DK 粗细纯羊毛线，这家纺纱厂自 1928 年起为芬兰编织者供线。50 克一团共 112 米，建议棒针 4 mm。',
    specs: [
      '100 % 羊毛',
      '50 g 一团，112 m',
      '4 mm',
    ],
    specLabels: [undefined, undefined, '建议棒针'],
  },
  'sk-aromageddon-sauna-scent': {
    name: 'Aromageddon 桑拿香氛 Hankihorppy 15 ml',
    description:
      '薄荷与可可做成的桑拿香氛，听起来不太对劲，直到你熬过一整个芬兰冬天。取 2 到 4 滴滴入一勺水中，不要直接浇在石头上。',
    specs: [
      '15 ml',
      '2 到 4 滴滴入一勺水中',
    ],
    specLabels: [undefined, '用法'],
  },
  'sk-muurla-moomin-bottle': {
    name: 'Muurla 姆明玻璃瓶 1 l“苹果”',
    description:
      '钠钙玻璃瓶，配密封扣盖，把水或果汁端上桌，而不是摆着纸盒。可用洗碗机，一升容量，苹果图案是夏天那一款。',
    specs: [
      '1 l',
      '钠钙玻璃，密封扣盖',
      '可用洗碗机',
    ],
    specLabels: [undefined, undefined, '保养'],
  },
  'nb-kunnas-kalevala-beanie': {
    name: '《狗狗的卡勒瓦拉》针织帽',
    description:
      '1992 年，毛里·库纳斯把《卡勒瓦拉》改写成一部狗的史诗，这顶帽子用的就是那批插画。再生聚酯纤维，成人均码，轻到公交车一暖和就能塞进大衣口袋。',
    specs: [
      '100 % 再生聚酯纤维',
      '成人均码',
      '毛里·库纳斯《狗狗的卡勒瓦拉》',
    ],
    specLabels: [undefined, undefined, '插画'],
  },
  'nb-little-my-mittens': {
    name: '小不点连指手套',
    description:
      '红色针织连指手套，每只手背上都有小不点的脸，内衬为腈纶。手套有弹性，均码适合大多数人，而且是姆明官方产品。',
    specs: [
      '49 % 粘胶纤维，31 % 涤纶，20 % 锦纶；内衬 100 % 腈纶',
      '均码，有弹性',
      '姆明官方产品',
    ],
    specLabels: [undefined, undefined, '授权'],
  },
  'nb-kunnas-santa-mug': {
    name: '圣诞老人随行杯',
    description:
      '库纳斯笔下的耳朵山圣诞老人，正是芬兰孩子心里的那一个，如今印在这只 450 毫升的杯子上。杯身是 PLA，不含化石基塑料。咖啡烫到空手拿不住时，握的就是那圈食品级硅胶。',
    specs: [
      '450 ml',
      '杯身与杯盖为 PLA，杯套为食品级硅胶',
      '毛里·库纳斯',
    ],
    specLabels: [undefined, undefined, '插画'],
  },
  'nb-little-my-thermal-bottle': {
    name: '小不点保温瓶 0.55 l',
    description:
      '双层钢壁，550 毫升，厂商标注保温六小时。那大约是一趟雪地摩托越野的时长，也正是买这只瓶子要过的那道实测。',
    specs: [
      '550 ml',
      '不锈钢，PP 盖，硅胶密封圈',
      '厂商标注六小时',
    ],
    specLabels: [undefined, undefined, '保温'],
  },
  'nb-little-my-neckpillow': {
    name: '小不点颈枕',
    description:
      '柔软外套下是记忆棉，给赫尔辛基到罗瓦涅米的夜车，或者回程的飞机。小到能扣在包上，而旅行枕只有这一种是真会一直带着的。',
    specs: [
      '记忆棉，柔软外套',
      '姆明官方产品',
    ],
    specLabels: [undefined, '授权'],
  },
  'nb-moomintroll-love-cushion': {
    name: '姆明 Love 抱枕',
    description:
      '按姆明的轮廓裁出来的抱枕，不是印了图案的方枕，有 45 到 75 厘米高的多个尺寸。这种东西一旦落到木屋沙发上，就不会再挪走了。',
    specs: [
      '聚酯纤维',
      '多个尺寸，高 45–75 cm',
      '姆明官方产品',
    ],
    specLabels: [undefined, undefined, '授权'],
  },
  'nb-little-my-poster': {
    name: '小不点海报',
    description:
      '在赫尔辛基设计并印制，200 克丝面纸，有 30 × 40 和 50 × 70 两种尺寸。海报卷进纸筒几乎不占重量，而人们从拉普兰扛回家的东西，多数都做不到这一点。',
    specs: [
      '丝面纸，200 g',
      '30 × 40 cm 或 50 × 70 cm',
      '在赫尔辛基设计并印制',
    ],
    specLabels: [undefined, undefined, '生产'],
  },
  'nb-moomin-novels-poster': {
    name: '姆明小说海报',
    description:
      '托芙·扬松姆明小说的封面集于一张，同样在赫尔辛基印制，尺寸也与角色海报相同。适合家里读书的那一位，而不是收集马克杯的那一位。',
    specs: [
      '丝面纸，200 g',
      '30 × 40 cm 或 50 × 70 cm',
      '在赫尔辛基设计并印制',
    ],
    specLabels: [undefined, undefined, '生产'],
  },
  'sk-finland-beanie': {
    name: '芬兰球迷绒球帽（蓝白）',
    description:
      '帽檐上织着 FINLAND 的蓝白绒球帽，先戴去看台，之后整个冬天都戴着。机洗 30 度。',
    specs: [
      'FINLAND',
      '机洗 30 °C',
    ],
    specLabels: ['文字', '保养'],
  },
  'sk-finland-tube-scarf': {
    name: '芬兰无缝脖套',
    description:
      '芬兰国旗图案的无缝筒状脖套，风从山丘上下来时就拉上来盖住脸。不到七欧元，所以大家一买就是三条。',
    specs: [
      '芬兰国旗',
      '手洗',
    ],
    specLabels: ['图案', '保养'],
  },
  'sk-little-my-sauna-cushion': {
    name: 'Emendo 小不点桑拿坐垫',
    description:
      '图案取自托芙·扬松的原始手稿，由 Emendo 授权生产的桑拿坐垫。九十度的木凳和你之间，隔的就是这块垫子。',
    specs: [
      '取自托芙·扬松原始手稿',
      'Moomin Characters 官方授权产品',
    ],
    specLabels: ['原稿', '授权'],
  },
  'sk-rento-sauna-hat': {
    name: 'Rento 亚麻毛圈桑拿帽',
    description:
      '亚麻毛圈能把上层长凳的高温挡在头皮和头发之外。反过来也管用：二月里泡户外热水桶时，它让头保持温热。机洗 60 度。',
    specs: [
      '亚麻毛圈',
      '机洗 60 °C',
    ],
    specLabels: [undefined, '保养'],
  },
  'sk-rento-birch-whisk': {
    name: 'Rento 干桦树枝束',
    description:
      '干燥的桦树枝束，进桑拿前用温水泡开，叶子和气味就会回来。用它拍打身体，是访客总要问、却很少真去试的那部分桑拿礼仪。',
    specs: [
      '干燥桦木',
      '进桑拿前浸泡',
    ],
    specLabels: [undefined, '使用前'],
  },
  'sk-suomi-hockey-jersey': {
    name: '芬兰球迷球衣',
    description:
      '蓝白配色的球迷衫，胸前印着 SUOMI 和狮子徽章，版型就是大家真会穿去看球的那种。面料透气，尺码 M 到 XXL。到了二月，芬兰几乎家家都有一件。',
    specs: [
      'M–XXL',
      'SUOMI 与狮子徽章',
    ],
    specLabels: [undefined, '印花'],
  },
  'sk-marimekko-unikko-bath-towel': {
    name: 'Marimekko Unikko 浴巾 70 × 150 cm',
    description:
      '毛圈棉上的 Unikko 图案，米色配白色，70 × 150 的完整尺寸。纱线为 65 % 有机棉与 35 % 再生棉，再生的那部分来自 Marimekko 自家的裁剪边角料。',
    specs: [
      '70 × 150 cm',
      '毛圈棉，65 % 有机与 35 % 再生',
      'Unikko，米色与白色',
    ],
    specLabels: [undefined, undefined, '图案'],
  },
  'sk-marimekko-pieni-unikko-apron': {
    name: 'Marimekko Pieni Unikko 围裙',
    description:
      'Marimekko 有机棉围裙，Pieni Unikko 图案采用梅子色、蔓越莓色、米白色和玫瑰色。带前袋和腰部系带，颈带可用按扣调节。',
    specs: [
      '100 % 有机棉',
      '宽 84 cm，长 85 cm',
      '机洗 60 °C',
      'Pieni Unikko，梅子色、蔓越莓色、米白色和玫瑰色',
    ],
    specLabels: [undefined, undefined, undefined, '图案'],
  },
  'fl-taistelevat-metsot': {
    name: 'Taistelevat metsot 缎纹被套组，双人床',
    description:
      'Ferdinand von Wright 于 1886 年画下两只搏斗的松鸡，这幅画成了每个芬兰人都叫得出名字的作品之一。Finlayson 以数码印花把它印在缎纹棉布上，颜色因此还原得准确；被套背面是纯色，枕套两面都有印花。',
    specs: [
      '缎纹棉',
      '双人床尺寸',
      'Ferdinand von Wright，《搏斗的松鸡》（Taistelevat metsot，1886）',
    ],
    specLabels: [undefined, undefined, '画作'],
  },
  'fl-lino-linen-duvet-set': {
    name: 'Lino 亚麻被套组',
    description:
      '水洗亚麻，边缘带刺绣，有地衣绿和焦油棕两色。亚麻较重，垂坠时比棉布硬挺，而且每洗一次就更柔软一分，不会越洗越旧。',
    specs: [
      '亚麻',
      '240 × 210 + 50 × 60 cm 或 150 × 210 + 50 × 60 cm',
      '地衣绿或焦油棕',
    ],
    specLabels: [undefined, undefined, '颜色'],
  },
  'fl-elefantti-duvet-set': {
    name: 'Elefantti 被套组，深绿',
    description:
      'Laina Koskela 在 1969 年为 Finlayson 与工艺美术学院合办的设计比赛画了 Elefantti，此后一直在生产。棉密织平纹布，每英寸 152 根纱线，所以贴身时感觉偏凉，而不是柔软。',
    specs: [
      '棉密织平纹布，152 TC',
      '240 × 210 + 50 × 60 cm',
      'Laina Koskela，1969',
    ],
    specLabels: [undefined, undefined, '设计'],
  },
  'fl-reino-bath-towel': {
    name: 'Reino 浴巾 80 × 160 cm',
    description:
      'GOTS 认证有机棉，用细股线织成，因此干得快，不会挂在钩子上一直潮着。完整浴巾尺寸，有棕色和粉色两色。',
    specs: [
      '80 × 160 cm',
      '100 % 有机棉，GOTS 认证',
      '棕色或粉色',
    ],
    specLabels: [undefined, undefined, '颜色'],
  },
  // katalogin täydennys 2026-09-05
  'makia-kontio-hoodie': {
    name: 'Makia Kontio 连帽卫衣',
    description:
      '常规版型连帽卫衣，100%有机棉，缝制后再染色。成衣染色比纱线染色颜色更深、手感更软，色泽在一次次洗涤后仍保留略带穿旧感的样子。',
    specs: [
      '100 %有机棉，成衣染色',
      'S到XXL',
    ],
  },
  'makia-trademark-hoodie': {
    name: 'Makia Trademark 连帽卫衣',
    description:
      'Makia最素净的连帽衫：常规版型，100%有机棉，胸前一枚小小的商标。适合带去小木屋过一周，同一件卫衣从清晨的篝火穿到傍晚的桑拿门廊。',
    specs: [
      '100 %有机棉',
      'S到XXL',
    ],
  },
  'makia-moray-zip-knit': {
    name: 'Makia Moray 拉链针织开衫',
    description:
      '常规版型拉链开衫，100%美利奴羊毛织成。美利奴保暖却不臃肿，由内向外干燥，在山地徒步时可作硬壳外套下的中间层，在温暖的咖啡馆里单穿也合适。',
    specs: [
      '100 %美利奴羊毛',
      'S到XXL',
    ],
  },
  'makia-form-jacket': {
    name: 'Makia Form 冬季外套',
    description:
      '常规版型长款冬季外套，填充再生聚酯保暖层。袖口内侧的隐藏罗纹能挡住灌进来的风，一月罗瓦涅米的街头，这一点比任何功能清单都重要。',
    specs: [
      '再生聚酯保暖填充，袖口隐藏罗纹',
      'S到XXL',
    ],
  },
  'makia-martin-beanie': {
    name: 'Makia Martin 美利奴毛线帽',
    description:
      '100%美利奴羊毛毛线帽，带一枚小布章，在芬兰织造。这是入手Makia最便宜的方式，也是从十月到四月最可能天天戴的一件。',
    specs: [
      '100 %美利奴羊毛',
      '芬兰制造',
      '均码',
    ],
  },
  'makia-mari-balaclava': {
    name: 'Makia Mari 针织头套',
    description:
      '羊毛、聚酯、羊驼毛和氨纶混纺的针织头套。一次遮住耳朵、脖子和脸颊，这正是一次雪地摩托之旅与一次因错误原因被记住的雪地摩托之旅的区别。',
    specs: [
      '羊毛、聚酯、羊驼毛和氨纶混纺',
      '均码',
    ],
  },
  'halti-pehmee-merino-beanie': {
    name: 'Halti Pehmee 美利奴毛线帽',
    description:
      '100%美利奴羊毛城市毛线帽，双层罗纹翻边，芬兰制造。Halti称它为Pehmee，意为柔软，是那种戴滑雪帽会显得走错路的日子里该戴的帽子。',
    specs: [
      '100 %美利奴羊毛',
      '芬兰制造',
      '平铺晾干',
      '均码',
    ],
  },
  'halti-rockmoon-fleece-hoodie': {
    name: 'Halti Rockmoon 男款连帽抓绒衣',
    description:
      '双面拉绒弹力面料的保暖连帽抓绒衣，在最先受寒的帽子和肩部使用防风微纤维面料。在山地穿在硬壳外套下面，在木屋周围可以单穿。',
    specs: [
      '双面拉绒弹力抓绒，帽子和肩部为防风微纤维面料',
      'S到XXXL',
    ],
  },
  'halti-viiri-fleece-gloves': {
    name: 'Halti Viiri 抓绒手套',
    description:
      '45克的轻量手套，采用防风Stormwall抓绒，掌心有硅胶防滑印花，拇指和食指指尖支持触屏，拍极光照片不必光着手。',
    specs: [
      'Stormwall抓绒100 %聚酯，掌心65 %聚酯、32 %聚酰胺、3 %氨纶',
      '45 g',
      '拇指和食指',
      '最高30 °C轻柔洗涤',
    ],
    specLabels: [undefined, undefined, '触屏', undefined],
  },
  'nb-moomin-classics-beanie': {
    name: '姆明 Classics 毛线帽',
    description:
      'Moomin Classics 系列成人毛线帽，100 % 再生聚酯，棕色，均码。姆明官方正版产品，这正是它有别于集市摊位货的地方。',
    specs: [
      '100 % 再生聚酯',
      '成人，均码',
      '棕色',
    ],
  },
  'nb-snufkin-mens-socks': {
    name: '史力奇男袜',
    description:
      '印有史力奇的男袜，欧码40到45，60%棉，加入聚酯、尼龙和氨纶以增加弹性。本站最便宜的姆明礼物，而且是拿来穿的，不是摆着看的。',
    specs: [
      '欧码40-45',
      '60 %棉、33 %聚酯、4 %尼龙、2 %氨纶、1 %弹性二烯',
    ],
  },
  'nb-hattifatteners-retro-socks': {
    name: '溜溜女款复古袜',
    description:
      '印有溜溜的复古风格袜子，欧码36到42，67%棉。弹性足够，一个尺码适合大多数人，也是姆明读者打开袜子抽屉时最先拿起的一双。',
    specs: [
      '欧码36-42',
      '67 %棉、25 %聚酯、4 %弹性二烯、3 %尼龙、1 %氨纶',
    ],
  },
  'sk-suomi-propeller-cap': {
    name: 'Suomi 球迷螺旋桨帽',
    description:
      '蓝白色螺旋桨帽，戴去看台、球迷区和酒吧里的冰球决赛。它不是一顶正经的帽子，而在芬兰队比赛的夜晚，这正是重点。',
    specs: [
      '蓝白色',
    ],
  },
  'sk-muurla-moomin-lantern-tahtihetki': {
    name: 'Muurla 姆明烛灯 Tähtihetki 18 cm',
    description:
      'Muurla Tähtihetki系列手工无铅玻璃烛灯，带金色细节，直径15.5厘米，高18厘米。可作烛灯、装应季糖果的碗，或插一小束花的花瓶。',
    specs: [
      'Ø 15.5 cm，高18 cm',
      '手工无铅玻璃',
      '手洗',
    ],
  },
  'sk-hukka-soapstone-candle': {
    name: 'Hukka Jätkänkynttilä 石制茶蜡烛台',
    description:
      '石制茶蜡烛台，做成jätkänkynttilä的形状，即伐木工在雪地上点燃的劈开的木桩火。直径56毫米，高100毫米，重310克，适用40毫米茶蜡。冷石上的活火，在室内。',
    specs: [
      'Ø 56 x 100 mm，适用Ø 40 mm茶蜡',
      '0.31 kg',
      '烛台1个',
    ],
  },
  'sk-muurla-moomin-enamel-mug-lumipyry': {
    name: 'Muurla 姆明搪瓷杯 Lumipyry 3.7 dl',
    description:
      '3.7分升搪瓷杯，碳钢内芯加双层搪瓷，印有暴风雪场景Lumipyry。冷热饮皆可，可进洗碗机、可带去篝火边，不可进微波炉。',
    specs: [
      '3.7 dl',
      '碳钢加双层搪瓷',
      '可用洗碗机，不可微波',
    ],
  },
  'sk-arabia-moomin-pitcher-moominhouse': {
    name: 'Arabia 姆明水壶 1.0 l，姆明屋',
    description:
      'Arabia一升水壶，图案是姆明屋：姆明爸爸亲手建造、夜里也从不上锁的圆形炉子状房子。附陶瓷盖，夏日餐桌上能把虫子挡在果汁之外。',
    specs: [
      '1.0 l',
      '附陶瓷盖',
    ],
    specLabels: [undefined, '盖子'],
  },
  'sk-moomin-duvet-set-merella': {
    name: '姆明被套套装 140 x 200 cm，Merellä',
    description:
      '棉质被套和枕套，图案是海上的姆明一家，被套140 x 200厘米，枕套50 x 70厘米，拉链开合。首次使用前请先清洗，如同所有印花棉质床品。',
    specs: [
      '被套140 x 200 cm，枕套50 x 70 cm',
      '100 %棉',
      '拉链',
    ],
    specLabels: [undefined, undefined, '开合'],
  },
  'sk-arabia-moomintroll-mini-figurine': {
    name: 'Arabia 姆明迷你摆件',
    description:
      '手工陶瓷姆明，高约6厘米，由图莉基·皮耶蒂莱在1990年代设计，配有专属礼盒出售。这些摆件按系列收藏，一个是稳妥的礼物，两个就成了习惯。',
    specs: [
      '高约6 cm',
      '手工陶瓷',
      '图莉基·皮耶蒂莱，1990年代',
    ],
    specLabels: [undefined, undefined, '设计'],
  },
  'sk-arabia-snorkmaiden-mini-figurine': {
    name: 'Arabia 可儿迷你摆件',
    description:
      '手工陶瓷可儿，高约6厘米，出自图莉基·皮耶蒂莱1990年代的系列，配专属礼盒。与姆明配成一对，两人便像书封上那样并肩站在窗台上。',
    specs: [
      '高约6 cm',
      '手工陶瓷',
      '图莉基·皮耶蒂莱，1990年代',
    ],
    specLabels: [undefined, undefined, '设计'],
  },
  'sk-lapin-puukko-gift-box': {
    name: '拉普兰普科刀 带刀鞘，礼盒装',
    description:
      '拉普兰风格的普科刀，带刀鞘，以礼盒交付。店家把它介绍为森林远足和日常活计的刀，也是那种会被传承而不是被换掉的物件。',
    specs: [
      '刀鞘和礼盒',
    ],
    specLabels: ['包含'],
  },
  'sk-loimu-sauna-thermometer': {
    name: 'Loimu 桑拿温度计，桦木',
    description:
      '桦木框桑拿温度计，表盘清晰。它回答的是客人在浇第一勺水之前唯一会问的问题，而且看起来该挂在原木墙上，而不是锅炉旁边。',
    specs: [
      '桦木',
    ],
  },
  'sk-helsingin-villasukkatehdas-wool-socks': {
    name: 'Helsingin Villasukkatehdas 羊毛袜',
    description:
      '来自芬兰唯一一家传统羊毛袜厂的粗纺羊毛袜，在赫尔辛基用1950年代的机器织造。70%无割皮羊毛，在于姆萨纺纱、在屈勒斯科斯基染色，多种尺码和四种颜色，以树皮、苔藓、地衣和黑夜命名。',
    specs: [
      '70 %羊毛（无割皮），30 %聚酰胺',
      '赫尔辛基织造，羊毛于于姆萨纺纱、屈勒斯科斯基染色',
      '多种尺码，四种颜色',
    ],
  },
  'sk-halva-salmiakkikalat': {
    name: 'Halva Salmiakkikalat 咸甘草鱼 230 g',
    description:
      'Halva出品的鱼形咸甘草糖，230克，每个芬兰汽车手套箱里都有的那一袋。口感紧实，咸甘草味浓烈，是递给说想尝尝真正芬兰的访客的第一样东西。',
    specs: [
      '230 g',
    ],
  },
  'sk-kouvolan-lakritsi-500g': {
    name: 'Kouvolan Lakritsi 甘草糖块 500 g',
    description:
      '来自科沃拉的半公斤软甘草块，配方诞生于1945年，1960年经一位英国甘草专家微调。不加任何东西掩盖甘草根本味时，原味甘草就是这个味道。',
    specs: [
      '500 g',
      '1945年配方，1960年调整',
    ],
    specLabels: [undefined, '配方'],
  },
  'sk-fazer-omar-chocolate-bar': {
    name: 'Fazer Omar 巧克力排 180 g',
    description:
      '为Omar六十周年推出的限量180克巧克力排：自1966年起销售的温和奶香Omar太妃糖，裹在可可含量至少30%的Fazer牛奶巧克力中。限时销售。',
    specs: [
      '180 g',
      '可可含量至少30 %的牛奶巧克力',
      '60周年限量版',
    ],
    specLabels: [undefined, '可可', '供应'],
  },
  'sk-fazer-salty-suffeli-puffi': {
    name: 'Karl Fazer Salty Suffeli Puffi 巧克力排 160 g',
    description:
      'Fazer用新鲜牛奶制成的牛奶巧克力，混入酥脆的咸甜Suffeli玉米泡芙。160克，可可含量至少30%，献给在咸与甜之间拿不定主意的人。',
    specs: [
      '160 g',
      '可可含量至少30 %的牛奶巧克力',
    ],
    specLabels: [undefined, '可可'],
  },
  'sk-tyrkisk-peber-chewy': {
    name: 'Fazer Tyrkisk Peber Chewy 咸甘草软糖 38 g',
    description:
      'Tyrkisk Peber的辛辣咸甘草，以新的软质咀嚼糖代替硬壳。38克口袋装，店家于2026年8月上架，献给想在同一口里同时得到咸甘草和辛辣的人。',
    specs: [
      '38 g',
    ],
  },
  'sk-tyrkisk-peber-sour-foams': {
    name: 'Fazer Tyrkisk Peber Sour Foams 棉花软糖 150 g',
    description:
      '柔软的棉花软糖，带有温和的Tyrkisk Peber辛辣，以及酸酸的猕猴桃草莓和柠檬青柠口味，150克。进入胡椒甘草家族的温和入口，在口味各异的一群人里最先打开的一袋。',
    specs: [
      '150 g',
    ],
  },
  'sk-marianne-toffee-rae': {
    name: 'Fazer Marianne Toffee 巧克力豆 150 g',
    description:
      'Marianne巧克力豆系列的太妃版：光亮酥脆的外壳包着可可含量至少28%的牛奶巧克力芯，装在可重封的150克袋中。也可用于烘焙，前提是能留到那时候。',
    specs: [
      '150 g',
      '可可含量至少28 %的牛奶巧克力',
      '可重封袋',
    ],
    specLabels: [undefined, '可可', '包装'],
  },
  'sk-fasupala-lakritsi': {
    name: 'Fazer Fasupala Lakritsi 威化饼干 199 g',
    description:
      '一口大小的威化，牛奶巧克力味涂层下是甘草味夹心，199克，不含棕榈油。芬兰人已经整盒整盒吃的饼干的甘草版本，店家于2026年8月上架。',
    specs: [
      '199 g',
      '不含棕榈油',
    ],
    specLabels: [undefined, '油脂'],
  },
  'sk-finnish-flavours-cloudberry-jam': {
    name: 'Finnish Flavours 优质云莓果酱 250 g',
    description:
      '含75%芬兰云莓和20%糖的云莓果酱，250克。云莓七月底在拉普兰的沼泽上成熟，无法大规模种植，所以一罐的价钱抵得上两袋巧克力。',
    specs: [
      '250 g',
      '芬兰云莓75 %，糖20 %',
    ],
  },
  'sk-lapin-liha-smoked-reindeer-soup': {
    name: 'Lapin Liha 烟熏驯鹿汤 400 g',
    description:
      '含热熏和冷熏驯鹿肉的奶油浓汤，400克，由Lapin Liha制作。用锅加热即可；这是拉普兰木屋午餐的味道，装在放得进行李箱的包装里。',
    specs: [
      '400 g',
      '热熏驯鹿肉3 %和冷熏驯鹿肉3 %',
      '用锅加热',
    ],
    specLabels: [undefined, undefined, '烹调'],
  },
  'sk-vaasan-ruispalat-5pack': {
    name: 'Vaasan Ruispalat 黑麦面包 660 g',
    description:
      'Vaasan Ruispalat 是用真正的酸面团烤制的全麦黑麦面包，原料为100%芬兰谷物，每袋660克，共12块。Vaasan 称它为芬兰最受欢迎的面包，膳食纤维含量为12%。',
    specs: [
      '660 g，12块',
      '全麦黑麦占谷物的87 %，膳食纤维12 %',
    ],
  },
  'sk-poikain-parhaat-freeze-dried-blueberry': {
    name: 'Poikain Parhaat 冻干蓝莓 15 g',
    description:
      '整颗的芬兰森林蓝莓，冻干，别无他物：15克，在行李箱里没有分量，尝起来是沼泽上的八月。无乳糖、无麸质、纯素，不加糖也不加防腐剂。',
    specs: [
      '15 g',
      '100 %芬兰冻干蓝莓',
      '无乳糖、无麸质、纯素、不加糖、无防腐剂',
    ],
    specLabels: [undefined, undefined, '饮食'],
  },
  'rj-arctic-warriors-blueberry-powder': {
    name: 'Arctic Warriors 蓝莓粉 45 g',
    description:
      '芬兰蓝莓连汁整颗干燥后磨成粉，无任何添加，45克。一勺加进燕麦粥、酸奶或奶昔；这里售卖的同一种浆果经由Ruohonjuuri发货，配送范围为欧盟境内。',
    specs: [
      '45 g',
      '100 %芬兰蓝莓，连汁整颗干燥',
    ],
  },
  'rj-poikain-parhaat-blueberry-lemonade': {
    name: 'Poikain Parhaat 蓝莓柠檬水 0.33 l',
    description:
      '在坦佩雷的韦赫迈宁用真材实料制作的有机蓝莓柠檬水，不含人工香精和色素，0.33升瓶装。芬兰试吃桌上放在咸甘草旁边的那瓶饮料。',
    specs: [
      '0.33 l',
      '产于坦佩雷的韦赫迈宁',
      '有机，无人工香精或色素',
    ],
    specLabels: [undefined, undefined, '添加剂'],
  },
  'rj-nordic-koivu-birch-sap': {
    name: 'Nordic Koivu 桦树汁 500 ml',
    description:
      '春天树木把储存在根部的水分向上输送时采集的桦树汁，直接从树上装瓶，不经热处理，不加防腐剂，500毫升。味道微甜，主要是冰凉洁净的水的味道。',
    specs: [
      '500 ml',
      '未经热处理，无防腐剂',
    ],
    specLabels: [undefined, '加工'],
  },
  'rj-kaino-spruce-sprout-sparkling-075': {
    name: 'KAINO Drinks 云杉嫩芽有机气泡饮 0.75 l',
    description:
      '以云杉嫩芽（芬兰云杉五月的柔嫩新芽）调味的无酒精有机气泡饮，0.75升瓶装。产于坦佩雷的韦赫迈宁，为不是人人都喝酒的派对上的举杯而备。',
    specs: [
      '0.75 l',
      '无酒精，有机',
      '产于坦佩雷的韦赫迈宁',
    ],
    specLabels: [undefined, '酒精', undefined],
  },
  'rj-yrttipaja-chaga-powder': {
    name: 'Yrttipaja 白桦茸粉 35 g',
    description:
      '磨碎的白桦茸，即生长在桦树干上的黑色真菌，用来煮茶：每升水一汤匙，小火煮至少十分钟后滤出。35克，是在买块状白桦茸之前尝试pakuri最便宜的方法。',
    specs: [
      '35 g',
      '每升水1汤匙，小火煮至少10分钟后滤出',
    ],
    specLabels: [undefined, '用法'],
  },
  'rj-forestly-mushroom-chips-chili': {
    name: 'Forestly Foods 蘑菇脆片，辣椒味 50 g',
    description:
      '有机种植香菇制成的酥脆薯片式脆片，轻柔烹制，以辣椒、盐和胡椒调味，50克。一袋鲜味，窝在沙发上吃，或捏碎撒在汤上。',
    specs: [
      '50 g',
      '有机种植香菇、辣椒、盐和胡椒',
    ],
  },
  // katalogin täydennys 2026-09-05
  'sk-muurla-moomin-80v-tray': {
    name: 'Muurla 姆明80周年托盘 27 x 20 cm',
    description:
      'Muurla姆明80周年系列的27 x 20厘米托盘，可用洗碗机。刚好能把两个马克杯和一盘饼干从厨房端到沙发，放下后看起来就像餐桌的一部分。',
    specs: [
      '27 x 20 cm',
      '可用洗碗机',
    ],
  },
  'sk-muurla-moomin-glass-box-yhdessa': {
    name: 'Muurla 姆明玻璃盒 Yhdessä 11.5 cm',
    description:
      'Muurla Yhdessä（一起）迷你系列的心形玻璃盒，11.5 x 10 x 5.5厘米，手洗，以零售包装交付。用来收小小的珍藏：戒指、折好的字条、第一颗乳牙。',
    specs: [
      '11.5 x 10 x 5.5 cm',
      '手洗',
      '零售包装',
    ],
    specLabels: [undefined, undefined, '包装'],
  },
  // katalogin täydennys 2026-09-05
  'sk-aurora-borealis-reindeer-tealight': {
    name: 'Aurora Borealis 驯鹿茶蜡烛台 10 cm',
    description:
      '驯鹿造型的抛光金属茶蜡烛台，高10厘米。十二月放在窗台上的一件拉普兰小物，轻得可以装进气泡信封寄出。',
    specs: [
      '高10 cm',
      '抛光金属',
      '茶蜡',
    ],
    specLabels: [undefined, undefined, '适用'],
  },
  'sk-muurla-moomin-bottle-05l-marjat': {
    name: 'Muurla 姆明玻璃瓶 0.5 l，浆果',
    description:
      '半升钠钙玻璃瓶，带密封卡扣瓶塞和浆果图案，可用洗碗机。Muurla做它来装果汁和沙拉酱，半升正好放进冰箱门。',
    specs: [
      '0.5 l',
      '钠钙玻璃，卡扣瓶塞',
      '可用洗碗机',
    ],
  },
  'nb-hattifatteners-cushion': {
    name: '溜溜抱枕',
    description:
      '一排溜溜造型的聚酯抱枕，45至75 x 30至50 x 10厘米，仅可手洗。真空包装送达，需要一天才能恢复原形，这是溜溜唯一安静不动的时候。',
    specs: [
      '聚酯',
      '45–75 x 30–50 x 10 cm',
      '仅可手洗',
      '真空包装，拆开后恢复原形',
    ],
    specLabels: [undefined, undefined, undefined, '包装'],
  },
  'sk-emendo-moomin-sauna-seat-cover': {
    name: 'Emendo 姆明之爱桑拿坐垫布 150 x 50 cm，棕色',
    description:
      '亚麻棉混纺桑拿坐垫布，150 x 50厘米，印有托芙·扬松的原画，官方授权产品。亚麻吸湿、耐高强度洗涤，可铺在长凳上或竖着靠在背后。',
    specs: [
      '150 x 50 cm',
      '亚麻60 %，棉40 %',
      'Moomin Characters官方产品',
    ],
    specLabels: [undefined, undefined, '授权'],
  },
  'sk-rento-pino-sauna-seat-cover': {
    name: 'Rento Pino 桑拿坐垫布 50 x 150 cm，灰色',
    description:
      '提花织造的棉质桑拿坐垫布，50 x 150厘米，由Anna Säteri为Rento设计。轻薄的棉布在热凳上触感清凉，吸汗、快干，花纹经洗不褪。',
    specs: [
      '50 x 150 cm',
      '提花织棉',
      'Anna Säteri',
    ],
    specLabels: [undefined, undefined, '设计'],
  },
  'sk-moomin-chocolate-chip-biscuit-tin': {
    name: '姆明巧克力豆饼干铁盒装 200 g',
    description:
      '迷你巧克力豆饼干200克，装在姆明铁盒里，饼干吃完后铁盒还能当收纳盒。巧克力块占饼干的16%，其中可可固形物不低于40%。',
    specs: [
      '200 g',
      '巧克力块16 %，巧克力中可可固形物不低于40 %',
      '收藏铁盒，可作收纳盒',
    ],
    specLabels: [undefined, undefined, '包装'],
  },
  'sk-paulig-cafe-new-york-beans': {
    name: 'Paulig Café New York 咖啡豆 450 g',
    description:
      '中深烘焙咖啡豆450克，拉丁美洲阿拉比卡配上带来甜感的巴西豆，带果香。Paulig自1876年起在芬兰烘焙咖啡，芬兰人的人均咖啡饮用量世界第一。',
    specs: [
      '450 g',
      '中深烘焙，整豆',
      '拉丁美洲阿拉比卡与巴西豆',
    ],
    specLabels: [undefined, '烘焙', undefined],
  },
  // katalogin täydennys 2026-09-05
  'rj-korpihilla-spruce-sprout-sparkling-750': {
    name: 'Korpihilla 云杉嫩芽气泡饮 750 ml',
    description:
      '在芬兰拉普兰用云杉嫩芽手工制作的无酒精气泡饮，750毫升。2005年被《Viisi Tähteä》杂志评为芬兰最佳饮品，至今仍是想让举杯带上森林味道时要开的那一瓶。',
    specs: [
      '750 ml',
      '芬兰拉普兰手工制作',
      '无酒精',
      '2005年芬兰最佳饮品，《Viisi Tähteä》杂志',
    ],
    specLabels: [undefined, undefined, '酒精', '奖项'],
  },
  // katalogin täydennys 2026-09-05
  'rj-raitaniemi-sea-buckthorn-powder': {
    name: 'Marjatila Raitaniemi 沙棘粉 100 g',
    description:
      '在芬兰浆果农场连籽整果干燥后磨成的沙棘粉，100克。一茶匙相当于一分升鲜果，粉末干燥至3至5%的含水量，所以能存放数年。',
    specs: [
      '100 g',
      '沙棘，连籽整果磨粉',
      '每天1至3茶匙，加入燕麦粥或酸奶',
      '1茶匙粉末相当于1 dl鲜果',
    ],
    specLabels: [undefined, undefined, '用量', '换算'],
  },
  'rj-raitaniemi-crowberry-powder': {
    name: 'Marjatila Raitaniemi 岩高兰粉 100 g',
    description:
      '野外采摘的芬兰岩高兰整果干燥磨粉，无任何添加，100克。岩高兰是铺满拉普兰山坡的黑色浆果，很少进入商店，所以这是大多数人最接近尝到它的方式。',
    specs: [
      '100 g',
      '100 %芬兰岩高兰，整果干燥磨粉',
      '无，不含防腐剂',
    ],
    specLabels: [undefined, undefined, '添加剂'],
  },
  // katalogin täydennys 2026-09-05
  // katalogin täydennys 2026-09-05
  'sk-poikain-parhaat-puolukka': {
    name: 'Poikain Parhaat 冻干越橘 15 g',
    description:
      '整颗的芬兰越橘，冻干，别无他物，15克。冻干保留了颜色、口感、维生素和膳食纤维，袋子在行李箱里没有分量。无乳糖、无麸质、纯素，不加糖也不加防腐剂。',
    specs: [
      '15 g',
      '100 %芬兰冻干越橘',
      '无乳糖、无麸质、纯素、不加糖、无防腐剂',
    ],
    specLabels: [undefined, undefined, '饮食'],
  },
  // Talvi- ja joulutuotteet 6.11.2026
  'iittala-glass-baubles-red': {
    name: 'Iittala 玻璃圣诞球 80 mm，红色，5 只',
    description:
      'Iittala 的一套 5 只红色口吹玻璃圣诞球，每只直径 80 mm，用丝带悬挂。每一只都是口吹而成，所以形状和红色的深浅会略有不同。可以挂在圣诞树上、插在花瓶里的树枝上，也可以用来布置餐桌。',
    specs: [
      '5 只',
      '直径 8 cm',
      '口吹玻璃',
      '红色',
      '毛重 0.706 kg',
      '32741-01, EAN 6411923679978',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, '货号与 EAN'],
  },
  'iittala-toikka-annual-bird-2026': {
    name: 'Birds by Toikka 2026 年度鸟 Lakla',
    description:
      'Lakla 是 Iittala Birds by Toikka 系列的 2026 年度鸟，一只由奥伊瓦·托伊卡设计的橙色口吹玻璃鸟。Iittala 每年推出一只新的年度鸟，各有自己的图案和配色，年度鸟也已成为受收藏者欢迎的藏品。每只鸟都由芬兰 Iittala 玻璃厂的吹制师傅吹制，因此可能会有细小的气泡和厚薄差异。',
    specs: [
      '长 22 cm，宽 10 cm，高 14 cm',
      '口吹玻璃',
      '橙色',
      '在芬兰 Iittala 玻璃厂制造',
      '用湿布擦拭',
      '657373-01, EAN 6411923689199',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, '货号与 EAN'],
  },
  'marimekko-siirtolapuutarha-baubles': {
    name: 'Marimekko Siirtolapuutarha 圣诞球',
    description:
      'Marimekko 2025 年的 Siirtolapuutarha 圣诞球是一对炻器球，印有 Maija Louekari 设计的白、黑、绿图案。Siirtolapuutarha 在芬兰语中意为“市民菜园”。每只宽 7 cm、高 7 cm，Marimekko 建议除了挂在圣诞树上，也可以挂在窗边。',
    specs: [
      '2 只',
      '宽 7 cm，高 7 cm',
      '炻器',
      '白色、黑色和绿色',
      'Maija Louekari',
      '650181-01, EAN 6411255039983',
    ],
    specLabels: [undefined, undefined, undefined, undefined, '设计师', '货号与 EAN'],
  },
  'arabia-moomin-love-baubles': {
    name: 'Arabia 姆明圣诞球 Love，金色，5 cm，2 只',
    description:
      'Arabia 的两只 5 cm 玻化瓷姆明圣诞球，饰有托芙·扬松的 Love 图案，画的是姆明和可儿。这个图案已成为爱与亲密关系的象征。可以挂在圣诞树或装饰枝条上，也可以用来点缀节日餐桌。',
    specs: [
      '2 只',
      '宽 5 cm，高 5 cm',
      '玻化瓷',
      '金色',
      '托芙·扬松',
      '699561-01, EAN 6411801029079',
    ],
    specLabels: [undefined, undefined, undefined, undefined, '原画', '货号与 EAN'],
  },
  'sk-muurla-moomin-bauble-pyjamas': {
    name: 'Muurla 姆明玻璃圣诞球 9 cm，Pyjamat',
    description:
      'Muurla 姆明系列的手工玻璃圣诞球，直径 9 cm，图案为 Pyjamat（睡衣）。Muurla 把这个场景描述为在烛光旁穿着睡衣闲适放松，包装内附悬挂用的缎带。',
    specs: [
      '直径 9 cm',
      '玻璃，手工制作',
      '附缎带',
    ],
    specLabels: [undefined, undefined, '悬挂'],
  },
  'sk-muurla-moomin-baubles-snow': {
    name: 'Muurla 姆明圣诞球 5 cm，Lumipyry，4 只',
    description:
      'Muurla 的 4 只装姆明圣诞球，每只直径 5 cm，图案为 Lumipyry（暴风雪），附悬挂用的缎带。Muurla 把画面设定在暴风雪刚过的时刻，积雪很深，大地沉睡，雪灯笼正等着人去堆。',
    specs: [
      '直径 5 cm',
      '4 只，附缎带',
    ],
  },
  'sk-muurla-moomin-led-ball': {
    name: 'Muurla 姆明 LED 玻璃球 Tähtihetki',
    description:
      'Muurla 姆明 Tähtihetki 系列的玻璃装饰球，直径 11 cm，内置一串 10 颗 LED 的灯串。球上有电源开关，使用 CR2032 锂纽扣电池（不含在包装内），仅限室内使用。Tähtihetki（星光时刻）系列带有金色细节，包装内附悬挂用的缎带。',
    specs: [
      '直径 11 cm',
      '玻璃，含 10 颗 LED 的灯串',
      'CR2032 锂纽扣电池，不含在包装内。电源开关',
      '仅限室内使用。CE 认证',
      '芬兰设计',
    ],
    specLabels: [undefined, undefined, '电源', '使用', '设计'],
  },
  'sk-muurla-moomin-led-candle-tree': {
    name: 'Muurla 姆明 LED 蜡烛 Kuusen alla',
    description:
      'Muurla 姆明 Originals 系列的电池式 LED 蜡烛，高 12.5 cm，图案取自托芙·扬松的《Farlig midsommar》。图案名 Kuusen alla 意为“在云杉下”。蜡烛由石蜡制成，外形仿照真正的硬脂蜡烛，暖色调的光让画面更加鲜明。可设为开、关或 6 小时定时，使用 2 节 AA 电池（不含在包装内），仅限室内使用。',
    specs: [
      '直径 10 cm，高 12.5 cm',
      '石蜡',
      '2 节 AA 电池，不含在包装内',
      '开、关和 6 小时定时',
      '仅限室内使用',
      '托芙·扬松，取自《Farlig midsommar》',
    ],
    specLabels: [undefined, undefined, '电源', '功能', '使用', '原画'],
  },
  'arabia-moomin-plates-winter-night': {
    name: 'Arabia 姆明餐盘 19 cm，办公室与冬夜，2 只',
    description:
      'Arabia 的两只 19 cm 白色玻化瓷姆明餐盘，图案为“办公室”和“冬夜”，与此前推出的马克杯配套。“办公室”画面于 1996 年首次出现在 Arabia 姆明马克杯上，取材自经常出现写作、画画和上色的连环漫画。“冬夜”沿用 2006 年马克杯上的画面，描绘姆明坐在桥栏杆上，出自托芙·扬松 1957 年出版的《Trollvinter》。',
    specs: [
      '直径 19.4 cm，高 2.8 cm',
      '玻化瓷',
      '2 只餐盘，办公室和冬夜',
      '可用洗碗机、微波炉和烤箱',
      '托芙·扬松',
      '566802-01, EAN 6411801011432',
    ],
    specLabels: [undefined, undefined, undefined, undefined, '原画', '货号与 EAN'],
  },
  'arabia-moomin-plates-winter-fire': {
    name: 'Arabia 姆明餐盘 19 cm，冬日篝火与扬帆，2 只',
    description:
      'Arabia 的两只 19 cm 玻化瓷姆明餐盘，一只是“冬日篝火”，一只是“扬帆”，都出自托芙·扬松的画作。这一对把冬天的场景和航海的场景放在一起，既适合日常用餐，也适合节日餐桌。',
    specs: [
      '2 只餐盘，冬日篝火和扬帆',
      '玻化瓷',
      '多色',
      '毛重 0.886 kg',
      '托芙·扬松',
      '629239-01, EAN 6411801015065',
    ],
    specLabels: [undefined, undefined, undefined, undefined, '原画', '货号与 EAN'],
  },
  'sk-muurla-moomin-snowfall-mug': {
    name: 'Muurla 姆明搪瓷杯 Lumisade 2.5 dl',
    description:
      'Muurla 的 2.5 dl 姆明搪瓷杯，图案为 Lumisade（降雪），姆明谷下了初雪，正是玩雪的时候。Muurla 的搪瓷制品以碳钢为芯，外覆双层搪瓷，所以这只杯子既能上餐桌，也适合徒步、度假小屋和船上使用。冷热饮品皆可，可用洗碗机，但不能放进微波炉。',
    specs: [
      '2.5 dl',
      '碳钢，双层搪瓷',
      '可用洗碗机。不可用于微波炉',
    ],
  },
  'sk-muurla-moomin-gifts-mug': {
    name: 'Muurla 姆明搪瓷杯 Lahjat 3.7 dl',
    description:
      'Muurla 的 3.7 dl 姆明搪瓷杯，图案为 Lahjat（礼物），一幅关于给身边的人送礼物的圣诞画面。搪瓷下面是碳钢芯，外覆双层搪瓷，因此杯子很结实，既能上餐桌，也能在户外使用。冷热饮品皆可，可以放进洗碗机，但不能放进微波炉。',
    specs: [
      '3.7 dl',
      '碳钢，双层搪瓷',
      '可用洗碗机。不可用于微波炉',
    ],
  },
  'rj-pesonen-beeswax-candle': {
    name: 'Pesosen Mehiläistarhat 蜂蜡蜡烛，大号',
    description:
      'Pesosen Mehiläistarhat 用蜂蜡手工制作的大号桌用蜡烛，颜色和香气也都来自蜂蜡本身。蜂场的 Esa 已经养蜂 29 年，其中 13 年是专业养蜂，蜂箱位于萨斯塔马拉和海门屈罗一带的田野、森林和小水域之间。蜂场用自家蜂箱的产出制作蜡烛，蜡烛燃烧时间长，火焰明亮而稳定。',
    specs: [
      '蜂蜡',
      '大号',
      '手工制作',
      '萨斯塔马拉和海门屈罗',
    ],
    specLabels: [undefined, undefined, '工艺', '蜂场'],
  },
  'rj-pesonen-honeycomb-candle': {
    name: 'Pesosen Mehiläistarhat 蜂巢蜡烛，大号',
    description:
      'Pesosen Mehiläistarhat 用蜂蜡手工制作的大号蜂巢蜡烛，燃烧时间 30 小时。颜色和香气来自蜂蜡，蜂场用萨斯塔马拉和海门屈罗一带自家蜂箱的产出制作蜡烛。蜂场的 Esa 已经养蜂 29 年，其中专业养护蜜蜂 13 年。',
    specs: [
      '蜂蜡',
      '大号',
      '30 h',
      '手工制作',
      '萨斯塔马拉和海门屈罗',
    ],
    specLabels: [undefined, undefined, '燃烧时间', '工艺', '蜂场'],
  },
  'sk-moomin-mistletoe-candle': {
    name: 'Havi 姆明蜡烛 7 x 12 cm，槲寄生，米色',
    description:
      'Havi 的米色姆明桌用蜡烛，饰有槲寄生图案，尺寸 7 x 12 cm，燃烧时间 55 小时。图案以丝网印刷印在蜡烛上。',
    specs: [
      '7 x 12 cm',
      '米色',
      '55 h',
      '丝网印刷',
      'Havi Oy，里希迈基',
    ],
    specLabels: [undefined, undefined, '燃烧时间', '装饰', '经销商'],
  },
  'iittala-kastehelmi-tealight': {
    name: 'Iittala Kastehelmi 烛台 64 mm，透明',
    description:
      'Iittala 的透明玻璃 Kastehelmi 茶蜡烛台，直径 64 mm，出自奥伊瓦·托伊卡 1964 年为 Iittala 设计的系列。Kastehelmi 在芬兰语中意为“露珠”，Iittala 于 2010 年重新推出了这个系列。烛台也有其他颜色，Iittala 建议单独使用，或把不同颜色组合在一起。',
    specs: [
      '直径 6.4 cm',
      '玻璃',
      '透明',
      '仅可手洗',
      '奥伊瓦·托伊卡，Iittala Kastehelmi',
      '13167-01, EAN 6411920059766',
    ],
    specLabels: [undefined, undefined, undefined, undefined, '设计师与系列', '货号与 EAN'],
  },
  'sk-fazer-christmas-box': {
    name: 'Fazer 圣诞礼盒 2026',
    description:
      'Fazer 2026 年的圣诞礼盒，内含 6 包应季巧克力、糖果和姜饼。盒里有 Karl Fazer 夹心巧克力、Karl Fazer 姜饼巧克力排、Remix Xmas + Choco、Dumle Winter Mix 太妃糖、Vihreät kuulat 梨味软糖，以及 Marianne 薄荷巧克力姜饼饼干。',
    specs: [
      'Karl Fazer 夹心巧克力 250 g，Karl Fazer 姜饼巧克力排 200 g，Remix Xmas + Choco 什锦糖 300 g，Dumle Winter Mix 什锦太妃糖 180 g，Vihreät kuulat 梨味软糖 260 g，Marianne 薄荷巧克力姜饼饼干 175 g',
      '牛奶巧克力可可含量至少 30 %',
      '含小麦（麸质）、大豆和牛奶（乳糖）。可能含有黑麦、大麦、燕麦、鸡蛋、坚果和杏仁',
      '能量 1845 kJ / 441 kcal，脂肪 17 g 其中饱和脂肪 9.4 g，碳水化合物 67 g 其中糖 53 g，蛋白质 4.6 g，盐 0.36 g',
    ],
    specLabels: [undefined, '标签说明', '过敏原', '每 100 g 营养成分'],
  },
  'sk-karl-fazer-advent-calendar': {
    name: 'Karl Fazer 圣诞倒数日历 200 g',
    description:
      'Karl Fazer 圣诞倒数日历，小门后面是多种口味的夹心巧克力，共 200 g。最后一扇门里装满 Fazer Blue，也就是 Fazer 自 1922 年起生产的 Karl Fazer 牛奶巧克力。Fazer 按照 Fazer Cocoa Vision 计划采购可可。',
    specs: [
      '200 g',
      '多种口味的夹心巧克力，最后一扇门里是 Fazer Blue 牛奶巧克力',
      '牛奶巧克力可可含量至少 30 %',
      '含牛奶、大豆和大麦（麸质）。可能含有坚果、杏仁、小麦、黑麦和燕麦',
      '能量 2315 kJ / 554 kcal，脂肪 34 g 其中饱和脂肪 20 g，碳水化合物 53 g 其中糖 51 g，蛋白质 9.6 g，盐 0.31 g',
    ],
    specLabels: [undefined, undefined, '标签说明', '过敏原', '每 100 g 营养成分'],
  },
  'sk-fazer-christmas-chocolates': {
    name: 'Fazer Joulusuklaa 圣诞巧克力 295 g',
    description:
      'Fazer Joulusuklaa 夹心巧克力 295 g，柔和的牛奶巧克力外壳里是松露夹心，拌有真正的姜饼碎。Fazer 推荐在圣诞聚会时享用，比如搭配北欧的香料热饮 glögi。',
    specs: [
      '295 g',
      '牛奶巧克力外壳，松露夹心含姜饼碎',
      '牛奶巧克力可可含量至少 30 %',
      '含牛奶、小麦、大麦（麸质）和大豆。可能含有坚果、杏仁、黑麦和燕麦',
      '能量 2274 kJ / 545 kcal，脂肪 33 g 其中饱和脂肪 19 g，碳水化合物 53 g 其中糖 51 g，蛋白质 8.2 g，盐 0.24 g',
    ],
    specLabels: [undefined, undefined, '标签说明', '过敏原', '每 100 g 营养成分'],
  },
  'sk-karl-fazer-gingerbread-bar': {
    name: 'Karl Fazer Winter Edition 巧克力排',
    description:
      'Karl Fazer Winter Edition 巧克力排 200 g，柔滑的牛奶巧克力配上酥脆的姜饼。Fazer 自 1922 年起生产 Karl Fazer 牛奶巧克力，这款姜饼巧克力排是它的圣诞版。',
    specs: [
      '200 g',
      '牛奶巧克力配酥脆姜饼',
      '牛奶巧克力可可含量至少 30 %',
      '含牛奶、小麦（麸质）和大豆。可能含有坚果、杏仁、黑麦和燕麦',
      '能量 2205 kJ / 527 kcal，脂肪 30 g 其中饱和脂肪 18 g，碳水化合物 55 g 其中糖 48 g，蛋白质 8.5 g，盐 0.22 g',
    ],
    specLabels: [undefined, undefined, '标签说明', '过敏原', '每 100 g 营养成分'],
  },
  'sk-fazer-glogg-balls': {
    name: 'Fazer Glögikuulat 软糖 260 g',
    description:
      'Fazer Glögikuulat 是一盒 260 g 的软糖球，柔软香甜，名字来自北欧的香料热饮 glögi。不含麸质、明胶和乳糖，也适合纯素食者。盒内附有用它们做热饮的食谱。',
    specs: [
      '260 g',
      '无麸质，无明胶，无乳糖，纯素',
      '能量 1353 kJ / 322 kcal，脂肪 0 g 其中饱和脂肪 0 g，碳水化合物 79 g 其中糖 64 g，蛋白质 0 g，盐 0.28 g',
    ],
    specLabels: [undefined, '饮食', '每 100 g 营养成分'],
  },
  'sk-halva-christmas-liquorice': {
    name: 'Halva 圣诞甘草糖什锦 250 g',
    description:
      'Halva 圣诞甘草糖什锦，250 g 甘草糖，3 种圣诞口味，装在玫瑰金色的盒子里。里面有苹果派味的甘草糖花、热红酒味夹心甘草糖和姜饼味夹心甘草糖。Halva 在赫尔辛基的皮泰扬迈基生产这款什锦糖。',
    specs: [
      '250 g',
      '苹果派味甘草糖花、热红酒味夹心甘草糖、姜饼味夹心甘草糖',
      '产于赫尔辛基皮泰扬迈基',
      '含小麦（麸质）',
      '能量 1419 kJ / 334 kcal，脂肪 0.7 g 其中饱和脂肪 0.3 g，碳水化合物 79 g 其中糖 53 g，蛋白质 2.9 g，盐 0.15 g',
    ],
    specLabels: [undefined, undefined, undefined, '过敏原', '每 100 g 营养成分'],
  },
  'sk-halva-salmiakki-calendar': {
    name: 'Halva 咸甘草糖倒数日历 200 g',
    description:
      'Halva 圣诞倒数日历，装有 200 g 咸甘草糖（salmiakki，芬兰的咸味甘草糖），全部选自 Halva 自家的产品。小门后面有 Vanhat Autot、咸甘草鱼、咸味骷髅、Pommix、咸甘草心、咸甘草剑、Salmiakkiruutu 方块糖和 Jauhix 硬质咸甘草糖。',
    specs: [
      '200 g',
      'Vanhat Autot 咸甘草糖、咸甘草鱼、咸味骷髅、Pommix 咸甘草糖、咸甘草心、咸甘草剑、Salmiakkiruutu、Jauhix 咸甘草糖',
      '能量 1406 kJ / 331 kcal，脂肪 0.5 g 其中饱和脂肪 0.1 g，碳水化合物 80 g 其中糖 59 g，蛋白质 2.7 g，盐 0.03 g',
    ],
    specLabels: [undefined, undefined, '每 100 g 营养成分'],
  },
  'kuivalihakundi-advent-calendar': {
    name: 'Kuivalihakundi 肉干倒数日历 2026',
    description:
      'Kuivalihakundi 2026 年的圣诞倒数日历装有 24 种不同口味的肉干，24 扇小门后各有一袋 20 g。有牛肉、鸡肉、肥猪肉和较瘦的猪肉，既有基本口味，也有专为这款日历做的口味，全部出自该公司在芬兰约克拉的自有工厂。肉干开封后也可以常温保存，日历可以立在桌上，也可以借助挂孔挂在墙上，而且是限量批次。',
    specs: [
      '24 x 20 g 肉干，每扇门后口味不同',
      '牛肉、鸡肉、肥猪肉和较瘦的猪肉',
      '产于 Kuivalihakundi 位于芬兰约克拉的自有工厂',
      '常温保存，开封后亦可',
      '可立在桌上，或借挂孔挂在墙上',
    ],
    specLabels: [undefined, '肉类', undefined, undefined, '悬挂'],
  },
  'halti-crostie-merino-beanie': {
    name: 'Halti Crostie 美利奴毛线帽',
    description:
      'Halti 的贴合款毛线帽，适合越野滑雪、冬季跑步和其他寒冷天气下的运动，在芬兰设计和制造。帽子一半衬有 Stormwall®，这层防风透气的材料能为额头和耳朵挡风。针织本身是柔软的美利奴羊毛混纺，保暖又透气。',
    specs: [
      '美利奴羊毛与腈纶混纺针织，50 % 美利奴羊毛，50 % 腈纶。一半衬有 Stormwall®',
      'S, M, L',
      '0.2 kg',
      '多种颜色：Crocus Petal, Black, White, Fudge Maroon Red, Veiled Pink',
      '与同色衣物一起洗涤，平铺晾干',
      '芬兰设计和制造，Avainlippu（钥匙旗）产品',
    ],
  },
  'halti-vuolle-mohair-beanie': {
    name: 'Halti Vuolle 马海毛毛线帽',
    description:
      'Halti 的蓬松毛线帽，用马海毛、美利奴羊毛和锦纶混纺而成，双层结构更保暖，翻边较高。混纺让它轻盈又保暖，没有单独的内衬。均码，颜色有 Snow White 和 Black。',
    specs: [
      '马海毛混纺，50 % 马海毛，32 % 锦纶，18 % 美利奴羊毛。无单独内衬',
      '均码',
      'Snow White 或 Black',
      '与同色衣物一起洗涤，平铺晾干',
      '双层结构，高翻边',
    ],
    specLabels: [undefined, undefined, undefined, undefined, '细节'],
  },
  'halti-tiilo-mittens': {
    name: 'Halti Tiilo II 连指手套',
    description:
      'Halti 的保暖连指手套，适合冬季户外活动，面料为防水防风的 DrymaxX®，内填 60 g Microtherm® 保暖棉。掌心为抓握力好的合成皮革，配有罗纹针织内袖口和可调节的腕部收紧带。黑色，尺码 7 到 12。',
    specs: [
      '带膜的 DrymaxX® 涤纶，100 % 涤纶。罗纹针织袖口，100 % 涤纶。合成皮革掌心，100 % 聚氨酯',
      '60 g Microtherm® 保暖棉',
      '7, 8, 9, 10, 11, 12',
      '黑色',
      '单独洗涤',
    ],
    specLabels: [undefined, '填充', undefined, undefined, undefined],
  },
  'halti-warm-merino-socks': {
    name: 'Halti 保暖美利奴羊毛袜',
    description:
      '芬兰制造的 Halti 美利奴羊毛袜，厚毛圈针织，无缝设计，穿进滑雪靴、冬靴和单板滑雪靴都很合脚。毛圈能锁住空气保暖，罗纹袜筒不易下滑。可以单穿，也可以套在薄袜外面。',
    specs: [
      '美利奴羊毛混纺，62 % 美利奴羊毛，36 % 锦纶，2 % 氨纶',
      '34-36, 37-39, 40-42, 43-45, 46-48',
      'Dark Sea Green 或 Asphalt',
      '0.1 kg',
      '芬兰制造，Avainlippu（钥匙旗）产品',
      '厚毛圈针织，无缝，罗纹袜筒不易下滑',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, '细节'],
  },
  'north-outdoor-kaisla-beanie': {
    name: 'North Outdoor Kaisla 美利奴帽，咖啡色',
    description:
      '厚实的英式罗纹毛线帽，采用 100% 不使用剪皮法的美利奴羊毛，在 North Outdoor 位于奥卢的自有针织厂织成。North Outdoor 推荐从秋天戴到冬末，城市散步和自然步道都适合。均码，颜色为咖啡色。',
    specs: [
      '100 % 美利奴羊毛，不使用剪皮法，英式罗纹针织',
      '均码',
      '咖啡色',
      '在 North Outdoor 位于芬兰奥卢的自有针织厂制造',
    ],
  },
  'north-outdoor-polku-neck-tube': {
    name: 'North Outdoor Polku 美利奴围脖，咖啡色',
    description:
      '厚实的围脖，采用 100% 不使用剪皮法的美利奴羊毛，织成紧密的 1x1 罗纹。高度足够，可以当围巾、拉起来当兜帽，或用来遮住脸。均码，颜色为咖啡色。',
    specs: [
      '100 % 美利奴羊毛，不使用剪皮法，1x1 罗纹针织',
      '均码',
      '咖啡色',
      '围巾、兜帽或面罩',
    ],
    specLabels: [undefined, undefined, undefined, '用法'],
  },
  'north-outdoor-hirsi-socks': {
    name: 'North Outdoor Hirsi 美利奴羊毛袜，杏仁色',
    description:
      '轻薄的美利奴羊毛袜，出自 North Outdoor 位于奥卢的自有针织厂，含 80% 不使用剪皮法的美利奴羊毛和 20% 增加耐穿度的锦纶。它们最适合在室内穿，可以单穿，也可以套在另一双袜子外面。可以用轻柔程序机洗，不过很少需要洗。',
    specs: [
      '80 % 美利奴羊毛，不使用剪皮法，20 % 锦纶',
      '35-38, 39-42, 43-46',
      '杏仁色',
      '在 North Outdoor 位于芬兰奥卢的自有针织厂制造',
      '轻柔程序机洗',
    ],
  },
  'north-outdoor-avery-mittens': {
    name: 'North Outdoor Avery 羊毛连指手套，拿铁色',
    description:
      '连指手套采用轻盈的意大利羊毛抓绒混纺面料，含 63% 再生羊毛，内衬为 100% 美利奴羊毛。美利奴内衬能排走湿气、留住温暖，贴合又有弹性的版型让手保有抓握的手感。尺码 S 和 M，颜色为拿铁色。',
    specs: [
      '意大利羊毛抓绒混纺，63 % 再生羊毛。内衬 100 % 美利奴羊毛',
      'S, M',
      '拿铁色',
      '户外与城市',
    ],
    specLabels: [undefined, undefined, undefined, '适用'],
  },
  'makia-alvar-beanie': {
    name: 'Makia Alvar 美利奴毛线帽',
    description:
      'Makia 的 100% 美利奴羊毛毛线帽，芬兰制造。羊毛不使用剪皮法，帽子为均码。',
    specs: [
      '100 % 美利奴羊毛，不使用剪皮法',
      '均码',
      '芬兰制造',
    ],
  },
  'makia-stellar-scarf': {
    name: 'Makia Stellar 美利奴围巾',
    description:
      'Makia 的围巾，采用 100% 美利奴羊毛制成。均码。',
    specs: [
      '100 % 美利奴羊毛',
      '均码',
    ],
  },
  'makia-freja-mittens': {
    name: 'Makia Freja 绗缝连指手套',
    description:
      'Makia 的绗缝连指手套，填充 Sorona® 仿羽绒，这种部分来自植物的保暖材料透气又保暖。3000 mm 的防水指数有助于在小雨中保持双手干爽。尺码 S 和 M。',
    specs: [
      'Sorona® 仿羽绒，部分来自植物',
      '3000 mm',
      'S, M',
    ],
    specLabels: ['填充', '防水指数', undefined],
  },
  'makia-sibelius-beanie': {
    name: 'Makia Sibelius 美利奴毛线帽',
    description:
      'Makia 的 Sibelius 毛线帽，采用 100% 美利奴羊毛制成。均码。',
    specs: [
      '100 % 美利奴羊毛',
      '均码',
    ],
  },
  'nb-moomin-christmas-sockbox': {
    name: '姆明圣诞袜礼盒，EU 36-42',
    description:
      '现成的姆明圣诞礼盒，内含两双袜子，均码，适合 EU 36 至 42。袜子以棉为主，另含涤纶、尼龙和少量氨纶，为姆明官方产品。',
    specs: [
      '60 % 棉、33 % 涤纶、4 % 尼龙、2 % 氨纶、1 % 弹性二烯',
      '均码，EU 36-42',
      '2 双袜子，礼盒装',
      '姆明官方产品',
    ],
    specLabels: [undefined, undefined, undefined, '授权'],
  },
  'nb-moomin-christmas-box-men': {
    name: '姆明男士圣诞袜礼盒，EU 40-45',
    description:
      '现成的姆明圣诞礼盒，内含两双男袜，尺码 EU 40 至 45。Nordicbuddies 根据经验表示，脚更大一些也能穿。袜子以棉为主，另含涤纶、尼龙和少量氨纶，为姆明官方产品。',
    specs: [
      '60 % 棉、33 % 涤纶、4 % 尼龙、2 % 氨纶、1 % 弹性二烯',
      '均码，EU 40-45',
      '2 双袜子，礼盒装',
      '姆明官方产品',
    ],
    specLabels: [undefined, undefined, undefined, '授权'],
  },
  'nb-moomintroll-fleece-mittens': {
    name: '姆明抓绒连指手套',
    description:
      '姆明连指手套，抓绒面料由 100% 再生涤纶制成，内衬为腈纶。手套有弹性，均码适合大多数人，为姆明官方产品。',
    specs: [
      '100 % 再生涤纶',
      '100 % 腈纶',
      '均码，有弹性，适合大多数人',
      '姆明官方产品',
    ],
    specLabels: [undefined, '内衬', undefined, '授权'],
  },
  'nb-moomintroll-chunky-beanie': {
    name: '姆明蓬松粗针织帽，粉色',
    description:
      '蓬松厚实的粉色姆明毛线帽，成人均码，人人可戴。材质混合了涤纶、尼龙、腈纶、羊毛和氨纶，为姆明官方产品。',
    specs: [
      '涤纶、尼龙、腈纶、羊毛和氨纶',
      '成人，均码',
      '粉色',
      '姆明官方产品',
    ],
    specLabels: [undefined, undefined, undefined, '授权'],
  },
  'sk-nordqvist-tea-calendar': {
    name: 'Nordqvist 茶包圣诞倒数日历，27 包',
    description:
      'Nordqvist 的立方体茶包圣诞倒数日历，有 25 扇小门、27 个茶包，因为最后一扇门里有三包。茶包包括红茶、绿茶、路易波士茶和洛神花混合茶，其中还有姜饼、热红酒和肉桂等圣诞风味。',
    specs: [
      '25 扇门，27 个茶包。最后一扇门里有 3 包',
      '红茶、绿茶、路易波士茶，洛神花混合茶',
      'Nordqvist Oy，努尔米耶尔维',
      '6413440000433',
    ],
    specLabels: [undefined, '茶类', '经销商', 'EAN'],
  },
  'sk-nordqvist-moomin-tea-calendar': {
    name: 'Nordqvist 姆明茶包圣诞倒数日历，24 包，淡紫色',
    description:
      'Nordqvist 的淡紫色姆明茶包圣诞倒数日历，内有 24 个金字塔茶包，共 12 种口味，每种两包。红茶和绿茶之外还有不含咖啡因的路易波士茶，每种口味都有自己的名字，从 Olet Ihana（你真可爱）到 Muumimamman Voimajuoma（姆明妈妈的能量饮）。盖子打开后日历仍能立着，并获得雨林联盟认证。',
    specs: [
      '24 个金字塔茶包，12 种口味，每种 2 包',
      '41.5 g',
      '淡紫色',
      'Rainforest Alliance',
      'Nordqvist Oy，努尔米耶尔维',
      '6413440000679',
    ],
    specLabels: [undefined, undefined, undefined, '认证', '经销商', 'EAN'],
  },
  'sk-nordic-glogg-concentrate': {
    name: 'Poikain Parhaat Nordic 香料热饮浓缩液',
    description:
      '无酒精（0 %）的北欧香料热饮 glögi 浓缩液，用芬兰黑加仑和红加仑原汁以及真正的香料手工制成，按 1+3 调配。Poikain Parhaat 形容它浆果味浓郁、香料温暖，是传统口味的 glögi。',
    specs: [
      '0.5 l',
      '1+3',
      '0 %',
      '黑加仑和红加仑原汁来自芬兰',
      '能量 47.7 kcal / 199.58 kJ，脂肪 0.2 g 其中饱和脂肪 0.2 g，碳水化合物 11 g 其中糖 11 g，蛋白质 0.3 g，盐 0.2 g',
      'Poikain Parhaat Oy Ltd，坦佩雷',
    ],
    specLabels: [undefined, '调配比例', '酒精', undefined, '每 100 ml 营养成分', '经销商'],
  },
  'rj-christmas-coffee': {
    name: 'Gran Palomar 圣诞咖啡 200 g',
    description:
      'Cafetoria Roastery 的 Gran Palomar 圣诞咖啡是有机公平贸易咖啡，以有机肉桂和小豆蔻调味。包装为 200 g。',
    specs: [
      '200 g',
      '有机肉桂和小豆蔻',
      '公平贸易，有机',
      'Cafetoria Roastery Oy',
    ],
    specLabels: [undefined, '香料', '认证', '烘焙'],
  },
  'sk-emendo-santa-sauna-scent': {
    name: 'Emendo 圣诞老人官方桑拿香氛 500 ml',
    description:
      'Emendo 的圣诞老人官方桑拿香氛，500 ml，含真正的 100% 精油，不含合成香精。在一桶约 3 l 的水中加入约 ½ dl，和平时泼在桑拿石上的水一样使用。',
    specs: [
      '500 ml',
      '含 100 % 精油，不含合成香精（parfum）',
      '约 ½ dl 加入一桶约 3 l 的水中',
      '©Santa Claus Foundation™',
      '6417892057458',
    ],
    specLabels: [undefined, '成分', '用法', '授权', 'EAN'],
  },
  'sk-emendo-christmas-sauna-set': {
    name: 'Emendo Jouluhetki 桑拿礼盒',
    description:
      'Emendo 的 Jouluhetki 桑拿礼盒，内含挂绳香皂、桑拿香氛和沐浴球。Jouluhetki 在芬兰语中意为“圣诞时光”。礼盒已包装好，可以直接送人。',
    specs: [
      '挂绳香皂、桑拿香氛、沐浴球',
      '6417892041280',
    ],
    specLabels: [undefined, 'EAN'],
  },
  'sk-emendo-gingerbread-glogg-scent': {
    name: 'Emendo 桑拿香氛，姜饼与热红酒，2 x 10 ml',
    description:
      'Emendo 的两款桑拿香氛，姜饼和热红酒，各 10 ml，采用真正的 100% 精油制成。在一勺水中加入 2 到 6 滴，然后泼到桑拿石上。',
    specs: [
      '2 x 10 ml',
      '姜饼、热红酒',
      '采用 100 % 精油制成',
      '一勺水中加 2 到 6 滴',
      '6417892021060',
    ],
    specLabels: [undefined, '香型', '成分', '用法', 'EAN'],
  },
  'sk-aromageddon-gingerbread-scent': {
    name: 'Aromageddon 桑拿香氛 Piparipyörre',
    description:
      'Aromageddon 的 Piparipyörre（姜饼漩涡）为桑拿房带来温暖辛香的肉桂气息，并带有一丝姜饼香。在一勺水中加入 2 到 4 滴，务必稀释后使用，切勿直接倒在桑拿炉上。',
    specs: [
      '15 ml',
      '肉桂，带姜饼香调',
      '一勺水中加 2 到 4 滴，务必稀释',
      'Aromageddon Oy，埃斯波',
    ],
    specLabels: [undefined, '香型', '用法', '经销商'],
  },
}
