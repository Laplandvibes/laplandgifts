import type { ProductCopyMap } from './index'

/**
 * Tuotteiden koreankieliset tekstit. Rakenne ja säännöt: ks. de.ts.
 *
 * `specs` on positionaalinen: indeksi vastaa `product.details.specs`-taulukon
 * järjestystä lähdedatassa. `specLabels` samoin, ja siinä on arvo vain niillä
 * riveillä joilla on oma otsikko (`key: 'other'`).
 *
 * Lukuja, mittayksiköitä, tuotekoodeja ja EAN-numeroita ei käännetä eikä
 * muunneta. Numerot kirjoitetaan arabialaisin numeroin, ei sanoina: numeron
 * kirjoittaminen auki rikkoisi numeroiden-täsmäävyystestin ja on lisäksi väärin
 * tuotetiedoissa.
 */
export const PRODUCT_COPY_KO: ProductCopyMap = {
  'moomin-mystical-forest-wool-throw': {
    name: '무민 Mystical Forest 울 블랭킷 130x170 cm',
    description:
      '130 곱하기 170 cm, 울 100 퍼센트 블랭킷으로 Mystical Forest 컬렉션을 위해 핀란드에서 디자인했습니다. 드라이클리닝만 가능하므로 소풍용 깔개가 아니라 소파용 담요로 보시면 됩니다.',
    specs: [
      '울 100 %',
      '130 x 170 cm',
      '블루',
      '드라이클리닝, 약한 공정',
      '핀란드에서 디자인, 리투아니아에서 제조',
      'Mystical Forest',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, '컬렉션'],
  },
  'iittala-aalto-vase-160': {
    name: '이딸라 알바 알토 베이스 160 mm, 투명',
    description:
      '알바 알토가 1936 년에 그린 이 곡선을 이딸라는 지금도 입으로 불어 만듭니다. 그래서 윤곽이 한 점마다 조금씩 다릅니다. 160 mm 는 이 이름을 들었을 때 사람들이 떠올리는 크기입니다.',
    specs: [
      '높이 16 cm, 너비 20.5 cm',
      '유리',
      '투명',
      '총중량 1.44 kg',
      '손세척만 가능',
      '입으로 불어 만든 유리, 비대칭 형태',
      '알바 알토, Iittala Alvar Aalto Collection',
      '999-01, EAN 6411920004445',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      '제조 방식',
      '디자이너와 컬렉션',
      '품번과 EAN',
    ],
  },
  'iittala-kivi-candleholder': {
    name: '이딸라 키비 캔들홀더 60 mm, 파인 그린',
    description:
      '헤이키 오르볼라가 디자인한 압착 유리 캔들홀더, 높이 6 cm. 티라이트 하나를 색의 덩어리로 바꿔 놓습니다. 이딸라를 가장 싸게 손에 넣는 방법이고 기내 수하물도 견딥니다.',
    specs: [
      '6.5 x 6.5 cm, 높이 6 cm',
      '유리',
      '그린',
      '총중량 0.33 kg',
      '손세척만 가능',
      '헤이키 오르볼라, Iittala Kivi',
      '636883-01, EAN 6411923683937',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      '디자이너와 컬렉션',
      '품번과 EAN',
    ],
  },
  'marimekko-unikko-mug': {
    name: '마리메꼬 우니꼬 머그 25 cl',
    description:
      '마이야 이솔라가 우니꼬 양귀비를 그린 것은 1964 년, 마리메꼬가 꽃무늬를 금지한 뒤였고 이 패턴은 그 금지령보다 오래 살아남았습니다. 이 석기 머그는 25 cl 용량으로, 프린트를 벽이 아니라 아침 식탁에 올려놓습니다.',
    specs: [
      '25 cl',
      '지름 8 cm, 높이 9.5 cm',
      '석기',
      '화이트, 다크 그린, 베이지, 라이트 샌드',
      '총중량 0.276 kg',
      '패턴 마이야 이솔라, 머그 사미 루오찰라이넨',
      '666236-01, EAN 6411255152033',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      '디자이너',
      '품번과 EAN',
    ],
  },
  'aarikka-prinsessa-candleholder': {
    name: '아리카 프린세사 캔들홀더',
    description:
      '아리카는 1950 년대부터 자작나무 구슬을 깎아 왔고, 프린세사는 그 구슬로 만든 고리를 5.5 cm 홀더에 둘렀습니다. 티라이트와 기둥형 초 모두 쓸 수 있습니다. 우편으로 보낼 만큼 작고, 핀란드에서는 한눈에 알아볼 만큼 특징이 뚜렷합니다.',
    specs: [
      '높이 5.5 cm, 지름 6 cm',
      '자작나무, 단풍나무, 알루미늄',
      '98 g',
      '핀란드에서 디자인, 이탈리아에서 제조',
      '나무 구슬 고리가 하나 달린 캔들홀더. 티라이트와 곧은 초에 사용',
      'B08633',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, '제품 코드'],
  },
  'aarikka-pore-glass-vase': {
    name: '아리카 포레 유리 화병 16 cm, 다크 그린',
    description:
      '핀란드에서 손으로 물들인 단풍나무 구슬 고리를 두른, 1.7 리터의 둥근 핸드블로운 화병. 유리 안의 기포는 이 제품의 일부이며, 씻기 전에 고리를 빼면 됩니다.',
    specs: [
      '높이 16 cm, 지름 16 cm',
      '1.7 l',
      '유리와 단풍나무',
      '투명과 그린',
      '유리는 폴란드산, 나무 고리는 핀란드산',
      '손으로 씻으세요. 씻기 전에 나무 고리를 빼세요',
      'B08706',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, undefined, '제품 코드'],
  },
  'halti-tokoi-dx-jacket': {
    name: '할티 Tokoi DX 셸 재킷, 남성',
    description:
      '모든 솔기를 테이핑한 방수방풍 셸에 가벼운 안감과 조절 가능한 후드가 달렸고, 안에 울 스웨터를 입을 만큼 넉넉하게 재단했습니다. 할티는 유럽연합 안으로만 배송합니다.',
    specs: [
      'DrymaxX Sleek Twill, DrymaxX 멤브레인을 넣은 방수 방풍 2 겹 원단. 소재 구성은 재활용 폴리에스터 50 % 와 폴리에스터 50 %',
      '부드러운 폴리에스터 안감, 재활용 폴리에스터 100 %',
      '10000 mm',
      '10000 g/m²/24 h',
      '0.9 kg',
      'S, M, L, XL, XXL, XXXL',
      'Fossil Beige, Four Leaf Clover Green, Black',
      '모든 솔기 테이핑, 조절 가능한 고정 후드, 높은 스탠드 칼라, 앞면 2 방향 지퍼, 메시 통기구, 지퍼 달린 손 주머니, 스냅 단추 안주머니, 조절 가능한 소매 끝, 앞면 바람막이 플랩, 반사 디테일',
      '비슷한 색과 함께 뒤집어 세탁하고 지퍼를 먼저 잠그세요. 최고 30 °C, 약한 공정. 표백, 건조기, 다림질, 드라이클리닝 금지',
    ],
    specLabels: [
      undefined,
      '안감',
      '내수압',
      '투습도',
      undefined,
      undefined,
      undefined,
      '특징',
      undefined,
    ],
  },
  'makia-merino-beanie': {
    name: '마키아 메리노 비니',
    description:
      '메리노 울로 만든 군더더기 없는 북유럽식 비니. 따뜻한 카페에서 곧장 추위로 나설 때 온도와 습기의 균형을 잡아 줍니다. 앞면에 주먹만 한 로고는 없습니다.',
    specs: [
      '메리노 울 100 %, 8 게이지 브리오슈 니트, 뮬싱 프리',
      '단일 사이즈',
      'Dark Brown',
      '핀란드에서 제조, 소재는 이탈리아산',
      '비슷한 색과 함께 약한 코스로 세탁하고 평평하게 말린 뒤 모양을 잡으세요. 세탁 대신 바람을 쐬는 것으로 충분한 경우가 많습니다. 사용하면서 보풀이 생길 수 있습니다',
    ],
  },
  'makia-aurora-hoodie': {
    name: '마키아 오로라 후드 스웨트셔츠',
    description:
      '헬싱키 브랜드 마키아의 유기농 면 100 퍼센트 레귤러 핏 후드 스웨트셔츠. 실내와 선선한 가을 저녁에는 이 한 장을 겉옷으로 입어도 될 만큼 두껍습니다.',
    specs: [
      '유기농 면 100 %, 370 g 프렌치 테리',
      'S, M, L, XL, XXL',
      'Carbon Black',
      '레귤러 핏, 후드 조임끈, 캥거루 주머니, 밑단과 소매 끝 시보리, 재활용 폴리에스터 직조 라벨',
      '튀르키예에서 제조, 소재는 튀르키예산',
      '비슷한 색과 함께 뒤집어 세탁하세요. 프린트 위에 다림질하지 마세요. 최대 수축률 5 %. 축축할 때 모양을 잡으세요',
    ],
    specLabels: [undefined, undefined, undefined, '핏과 디테일', undefined, undefined],
  },
  'halti-kroka-mitten': {
    name: '할티 Kroka II 벙어리장갑',
    description:
      '60 g 충전재와 실리콘 그립 손바닥을 갖춘 방풍 벙어리장갑, 남녀 공용 재단. 바람이 세지면 벙어리장갑이 손가락장갑을 이깁니다. 손가락끼리 서로를 데워 주기 때문입니다.',
    specs: [
      'Stormwall 소프트셸, 폴리에스터 50 % 와 재활용 폴리에스터 50 %. 부드러운 플리스는 폴리에스터 100 %. 손목은 라이크라 니트',
      'Microtherm Dynamic 60 g, 안감은 Active Dry 소프트터치 니트, 재활용 폴리에스터 100 %',
      '0.1 kg',
      '06, 07, 08, 09, 10, 11, 12',
      '블랙',
      '30 °C 에서 단독 세탁, 약한 공정. 표백, 건조기, 다림질, 드라이클리닝 금지',
      '084-0757',
    ],
    specLabels: [
      undefined,
      '충전재와 안감',
      undefined,
      undefined,
      undefined,
      undefined,
      '제품 번호',
    ],
  },
  'halti-tunturit-ski-socks': {
    name: '할티 Tunturit 스키 양말',
    description:
      '정강이와 발목에 패딩을 넣은 무릎 길이 메리노 혼방 양말. 스키 부츠가 눌리는 자리입니다. 할티는 유럽에서 제조했다고 표기합니다.',
    specs: [
      '메리노 울 혼방: 폴리아미드 36 %, 아크릴 23 %, 메리노 울 23 %, 폴리프로필렌 16 %, 엘라스테인 2 %',
      '0.1 kg',
      '34-36, 37-39, 40-42, 43-45, 46-48',
      'Sargasso Sea Blue, Lemon Pepper Beige',
      '유럽에서 제조',
      '정강이와 발목 쿠션, 무릎 길이, 뒤꿈치와 발끝 보강, 정강이와 발등 통기 구간',
      '최고 40 °C, 일반 공정. 다림질, 표백, 드라이클리닝, 건조기 금지',
      '087-0471',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      '특징',
      undefined,
      '제품 번호',
    ],
  },
  'north-outdoor-huuru-beanie': {
    name: '노스아웃도어 Huuru 메리노 비니',
    description:
      '노스아웃도어는 이 골지 비니를 오울루의 자체 편직 공장에서 뮬싱 프리 메리노 100 퍼센트, 18.5 미크론으로 짭니다. 잘라 내지 않고 형태 그대로 짜기 때문에 자투리가 거의 나오지 않습니다.',
    specs: [
      '메리노 울 100 %, 뮬싱 프리, 18.5 미크론, 편직 270 g/m²',
      '단일 사이즈',
      '인디고 블루',
      '핀란드 오울루에서 제조',
      '자주 바람을 쐬고 필요할 때만 세탁하세요. 울 전용 세제, 30 °C 약한 코스에 탈수는 가장 약하게, 뒤집어서',
      'OEKO-TEX, Woolmark',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, '인증'],
  },
  'north-outdoor-pyry-scarf': {
    name: '노스아웃도어 Pyry 메리노 스카프',
    description:
      '메리노 100 퍼센트의 넓고 긴 브리오슈 니트 스카프로 오울루에서 짭니다. 여러 방식으로 두를 만큼 길고, 트인 산에서 바람 방향이 바뀔 때 그 길이가 쓸모 있습니다.',
    specs: [
      '메리노 울 100 %, 18.5 미크론, 1/1 골지',
      '단일 사이즈',
      '오트밀 그레이',
      '핀란드 오울루에서 제조',
      '자주 바람을 쐬고 필요할 때만 세탁하세요. 울 전용 세제, 30 °C 약한 코스에 탈수는 가장 약하게, 뒤집어서',
      'OEKO-TEX, Woolmark',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, '인증'],
  },
  'north-outdoor-honka-jumper': {
    name: '노스아웃도어 Honka 메리노 스웨터, 남성',
    description:
      '메리노 100 퍼센트의 두꺼운 브리오슈 니트 스웨터로, 여유 있는 실루엣에 어깨선이 내려와 있습니다. 보기에는 무겁고 입으면 가벼우며, 오울루 공장에서 짭니다.',
    specs: [
      '메리노 울 100 %, 뮬싱 프리, 18.5 미크론, 변형 골지',
      'S, M, L, XL, 2XL, 3XL',
      '인디고 블루',
      '핀란드 오울루에서 제조',
      '자주 바람을 쐬고 필요할 때만 세탁하세요. 울 전용 세제, 30 °C 약한 코스에 탈수는 가장 약하게, 뒤집어서',
      'OEKO-TEX, Woolmark',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, '인증'],
  },
  'marttiini-lapinleuku-255': {
    name: '마르띠니 라플란드 나이프 255',
    description:
      '전통 라플란드 나이프, 전체 길이 27 cm. 스테인리스 날, 니스를 칠한 무늬자작나무 손잡이, 가죽 칼집이 함께 옵니다. 마르띠니는 로바니에미에서 칼을 만들며, 이 버전에는 손가락 보호대가 있습니다.',
    specs: [
      '16 cm',
      '전체 길이 27 cm',
      '날은 스테인리스강, 손잡이는 니스 칠한 무늬자작나무, 칼집은 가죽',
      '나이프와 스냅 단추가 달린 가죽 칼집',
      '255010',
    ],
    specLabels: ['날 길이', undefined, undefined, undefined, '제품 번호'],
  },
  'marttiini-napapiirin-puukko': {
    name: '마르띠니 북극권 나이프',
    description:
      '전체 길이 20 cm 의 작은 일상용 나이프. 탄소강 날, 왁스 처리한 자작나무 손잡이, 갈색 가죽 칼집입니다. 탄소강은 스테인리스보다 더 날카롭게 날이 서지만 기름을 발라 줘야 하고, 마르띠니도 제품 페이지에서 그렇게 알려 줍니다.',
    specs: [
      '9 cm',
      '전체 길이 20 cm',
      '날은 탄소강, 손잡이는 왁스 처리한 자작나무, 칼집은 갈색 가죽',
      '사용 후에는 항상 날을 잘 닦고 무염 오일을 정기적으로 발라 주세요',
      '121019',
    ],
    specLabels: ['날 길이', undefined, undefined, undefined, '제품 번호'],
  },
  'marttiini-ilves-131': {
    name: '마르띠니 Lynx 131',
    description:
      '전체 길이 22 cm 의 나이프로 스테인리스 날, 니스를 칠한 무늬자작나무 손잡이, 갈색 가죽 칼집입니다. 마르띠니에 따르면 Lynx 모델은 1930 년대에 창업자 얀네 마르띠니가 도면을 그렸습니다.',
    specs: [
      '11 cm',
      '전체 길이 22 cm',
      '날은 스테인리스강, 손잡이는 니스 칠한 무늬자작나무, 칼집은 갈색 가죽',
      '131010',
    ],
    specLabels: ['날 길이', undefined, undefined, '제품 번호'],
  },
  'kupilka-classic-cup-21': {
    name: '쿠필카 21 캠프 컵 2.1 dl',
    description:
      '식기세척기에 넣을 수 있는 소재로 만든 쿡사 형태. 절반은 소나무 셀룰로스 섬유, 절반은 열가소성 수지이며 핀란드에서 성형합니다. 용량 2.1 dl, 무게 83 그램이고 모닥불 옆에서도 손가락이 데지 않습니다.',
    specs: [
      '2.1 dl',
      '83 g',
      '60 x 93 x 165 mm',
      'Kareline 천연섬유 복합재, 소나무 셀룰로스 섬유 50 % 와 열가소성 수지 50 %, 친환경 에너지로 생산',
      '핀란드',
      '길에서는 나무 쿡사처럼 헹구고, 집에서는 식기세척기에 넣으세요. 전자레인지는 불가',
      '3021011XX',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, undefined, '모델 번호'],
  },
  'kupilka-bowl-55': {
    name: '쿠필카 55 캠프 볼 5.5 dl',
    description:
      '5.5 dl 볼로, 한 손으로 들고 다른 손으로는 컵을 쥘 수 있을 만큼 손잡이가 단단합니다. 컵과 같은 핀란드산 소나무 섬유 복합재, 184 그램, 식기세척기 사용 가능.',
    specs: [
      '5.5 dl',
      '184 g',
      '54 x 154 x 223 mm',
      'Kareline 천연섬유 복합재, 소나무 셀룰로스 섬유 50 % 와 열가소성 수지 50 %, 친환경 에너지로 생산',
      '핀란드',
      '식기세척기 사용 가능. 전자레인지는 불가. 뜨겁고 찬 음식과의 접촉이 승인되어 있습니다',
      '3055013X',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, undefined, '모델 번호'],
  },
  'kupilka-cutlery-set': {
    name: '쿠필카 커틀러리 세트',
    description:
      '숟가락, 나이프, 포크가 같은 핀란드산 목재 섬유 복합재로 만들어졌고 세트 무게는 56 그램입니다. 쿠필카의 소재를 집으로 가져가는 가장 싼 방법이자 기내 수하물에 넣기 가장 쉬운 것입니다.',
    specs: [
      '숟가락, 나이프, 포크',
      '56 g',
      'Kareline 천연섬유 복합재, 소나무 셀룰로스 섬유 50 % 와 열가소성 수지 50 %, 친환경 에너지로 생산',
      '핀란드',
      '길에서는 나무 커틀러리처럼 헹구고, 집에서는 식기세척기에 넣으세요. 전자레인지는 불가',
      '3025025X',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, '모델 번호'],
  },
  'lapuan-kankurit-poro-towel': {
    name: '라푸안 칸쿠리트 PORO 리넨 타월 46 x 70 cm',
    description:
      '일러스트레이터 마티 피쿠얌새가 그린 순록을, 라푸아의 직물 공장에서 유럽산 리넨 날실과 유기농 면 씨실로 짰습니다. 여행 가방에 평평하게 접히고, 흡수력은 몇 번 빨고 나서야 올라옵니다.',
    specs: [
      '46 x 70 cm',
      '리넨 60 %(Masters of Linen)와 면 40 %',
      '리넨 그린',
      '핀란드에서 제조',
      '사용 전에 60 °C 약한 코스로 물을 넉넉히 써서 단독 세탁하세요. 탈수하지 마세요. 섬유유연제와 표백제는 피하세요. 건조기는 사용하지 마세요. 축축할 때 다림질하세요. 수축률 약 5 %',
      '마티 피쿠얌새',
      '20527',
      '핀란드 열쇠 깃발 마크, Masters of Linen',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      '디자이너',
      '제품 코드',
      '인증',
    ],
  },
  'lapuan-kankurit-kaamos-blanket': {
    name: '라푸안 칸쿠리트 KAAMOS 울 블랭킷 100 x 150 cm',
    description:
      '카모스는 극야를 뜻하고, 한나 갈타트는 하루 동안 햇빛이 움직이는 방식에서 이 패턴을 끌어냈습니다. 씨실은 공장이 라푸아에서 약 400 km 반경의 농장에서 모으는 핀란드 재래종 양털입니다.',
    specs: [
      '100 x 150 cm',
      '순수 새 양모 100 %',
      '화이트와 블랙',
      '핀란드에서 제조',
      '많이 더러울 때만 세탁하고 평소에는 바깥 바람을 쐬세요. 최고 30 °C 손세탁 또는 드라이클리닝. 문지르거나 잡아당기거나 비틀지 마세요. 건조기는 사용하지 마세요. 젖은 천을 대고 최고 150 °C 로 다림질하세요',
      '한나 갈타트',
      '102939',
      '핀란드 열쇠 깃발 마크',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      '디자이너',
      '제품 코드',
      '인증',
    ],
  },
  'pentik-posio-mug': {
    name: '펜틱 포시오 머그 0.3 l',
    description:
      '펜틱은 이 머그를 회사가 세계 최북단 도자기 공장이라고 부르는 포시오에서 굽습니다. 포시오 라인 전체가 순록으로 장식되어 있습니다. 식기세척기, 오븐, 전자레인지, 냉동실 사용 가능.',
    specs: [
      '0.3 l',
      '레드',
      '라플란드 포시오에서 제조. 펜틱은 이곳을 세계 최북단 도자기 공장이라고 부릅니다',
      '식기세척기 사용 가능, 전기 오븐, 제빵 오븐, 전자레인지, 냉동실 사용 가능',
      '포시오. 라인의 모든 제품이 순록으로 장식되어 있습니다',
      '12JAO050P41',
    ],
    specLabels: [undefined, undefined, undefined, undefined, '컬렉션', '제품 코드'],
  },
  'pentik-tunturiretki-studio-dish': {
    name: '펜틱 Tunturiretki Winter Studio 삼각 깊은 접시 19 cm',
    description:
      '아누 펜틱이 그린 것은 산을 걷다 보면 나무 사이로 계속 나타나는 순록입니다. 스튜디오 제품은 포시오에서 손으로 그리기 때문에 붓 자국이 완전히 같은 접시는 없습니다.',
    specs: [
      '지름 19 cm',
      '블루',
      '라플란드 포시오에서 수작업, 아누 펜틱 디자인',
      '식기세척기 사용 가능, 전기 오븐, 제빵 오븐, 전자레인지, 냉동실 사용 가능',
      '펜틱 스튜디오, 손으로 그린 라인',
      '12ST353TT61',
    ],
    specLabels: [undefined, undefined, undefined, undefined, '컬렉션', '제품 코드'],
  },
  'kuivalihakundi-poro-jerky': {
    name: '순록 육포 오리지널 2 x 20 g',
    description:
      '핀란드산 순록 100 퍼센트로 만든 육포 20 그램 봉지 두 개. 오븐에 말리고 글루텐 프리 간장, 후추, 마늘, 설탕 시럽으로 양념했습니다. 육류는 유럽연합 밖으로 우편 발송할 수 없어 배송은 유럽연합 국경에서 멈춥니다.',
    specs: [
      '2 x 20 g',
      '핀란드산 고기',
      '유통기한은 고기를 말려 포장한 날부터 약 1 년입니다. 개봉 후에도 냉장 보관이 필요하지 않습니다',
      '강한 염장. 글루텐 프리',
      '열량 1514 kJ / 360 kcal, 지방 14.2 g 그중 포화지방 6.2 g, 탄수화물 7.9 g 그중 당류 5.1 g, 단백질 50.2 g, 소금 9.5 g',
    ],
    specLabels: [undefined, undefined, undefined, '라벨 표기', '100 g 당 영양성분'],
  },
  'finnish-flavours-palalaku-salmiakki': {
    name: 'Finnish Flavours 프리미엄 팔라라쿠 살미아키 150 g',
    description:
      '부드러운 살미아키 감초 150 그램 봉지. 염화암모늄이 들어간 그 맛이라 첫 조각에 방문객이 두 편으로 갈립니다. Suomikauppa 는 핀란드 밖 멀리까지 식품을 보냅니다.',
    specs: [
      '150 g',
      '열량 1316 kJ / 311 kcal, 지방 0.5 g 그중 포화지방 0 g, 탄수화물 72 g 그중 당류 50 g, 단백질 4.1 g, 소금 1.7 g',
      'Finnish Flavours, Kumitehtaankatu 5, 04260 Kerava',
    ],
    specLabels: [undefined, '100 g 당 영양성분', '판매원'],
  },
  'meritalo-tyrnihillo': {
    name: '메리탈로 핀란드 산자나무 잼 310 g',
    description:
      '100 그램당 열매 37 그램이 들어간 산자나무 잼으로, 라플란드가 아니라 핀란드 남서부 살로의 메리탈로 가족 농장에서 핀란드산 산자나무 열매로 졸였습니다. 달기보다 시큼해서 팬케이크보다 치즈 옆에서 더 오래 갑니다.',
    specs: [
      '310 g',
      '열매는 핀란드산. 핀란드 남서부 살로의 메리탈로 농장에서 가족 기업이 제조',
      '열량 781 kJ / 187 kcal, 지방 1.9 g 그중 포화지방 0.3 g, 탄수화물 41 g 그중 당류 41 g, 단백질 0.3 g, 소금 0.01 g',
      'Marjajaloste Meritalo Oy, 25610 Ylönkylä',
    ],
    specLabels: [undefined, undefined, '100 g 당 영양성분', '판매원'],
  },
  'kuivalihakundi-poro-jerky-200g': {
    name: '순록 육포 오리지널 200 g',
    description:
      '같은 순록 육포의 선물용 크기, 200 그램. 생산자는 육포 1 킬로에 생고기 3 킬로가 들어간다고 밝히며, 한 봉지 값의 대부분이 여기서 나옵니다.',
    specs: [
      '200 g',
      '순록 고기 100 %, 우둔살, 오븐에 말리고 양념',
      '육포 1 kg 에 생고기 3 kg 이 필요합니다',
      '유통기한은 고기를 말려 포장한 날부터 약 1 년입니다. 개봉 후에도 냉장 보관이 필요하지 않습니다',
    ],
    specLabels: [undefined, undefined, '사용된 고기의 양', undefined],
  },
  'kuivalihakundi-beef-jerky-smoked': {
    name: '소고기 육포 스모크 40 g',
    description:
      '순록이 아니라 소고기이고, 향만 낸 것이 아니라 실제로 훈연했습니다. 100 그램당 단백질 57 그램. 이 분류에서 가장 싸고 배낭 속에서도 멀쩡한 제품입니다.',
    specs: [
      '40 g',
      '유럽연합 안에서 사육하고 도축한 소고기',
      '육포 1 kg 에 신선한 소고기 2.5 kg 이 필요합니다',
      '열량 1261 kJ / 298 kcal, 지방 5.5 g 그중 포화지방 2.4 g, 탄수화물 5.2 g 그중 당류 4.4 g, 단백질 56.9 g, 소금 5 g',
    ],
    specLabels: [undefined, undefined, '사용된 고기의 양', '100 g 당 영양성분'],
  },
  'fazer-geisha-chocolate-bar': {
    name: '파제르 게이샤 헤이즐넛 누가 초콜릿 바 121 g',
    description:
      '바삭한 헤이즐넛 누가 필링을 밀크 초콜릿으로 감싼 바. 핀란드 가정 대부분이 서랍에 하나쯤 넣어 둡니다. 파제르는 팜유를 쓰지 않는다고 표기합니다.',
    specs: [
      '121 g',
      '코코아 30 % 이상 밀크 초콜릿, 헤이즐넛 11 % 가 든 누가 필링',
      '열량 550 kcal / 2302 kJ, 지방 35 g, 포화지방 17 g, 탄수화물 51 g, 당류 49 g, 단백질 8 g, 소금 0.19 g',
    ],
    specLabels: [undefined, undefined, '100 g 당 영양성분'],
  },
  'nordqvist-moomin-forest-berry-tea': {
    name: '노르드크비스트 무민 숲 베리 히비스커스 티, 20 티백',
    description:
      '사과와 숲 베리를 더한 유기농 히비스커스로, 본래 카페인이 없습니다. 누르미예르비의 노르드크비스트 공장에서 블렌딩합니다. 스무 개 티백이 35 그램이라 이 가게에서 가장 가벼운 선물입니다.',
    specs: [
      '20 x 1.75 g, 35 g',
      '핀란드 누르미예르비의 노르드크비스트 공장에서 블렌딩',
      '95 °C 에서 2 분에서 4 분. 찬물에서는 5 분에서 10 분',
      '유기농 인증, 비건, 글루텐 프리, 본래 카페인 없음',
    ],
    specLabels: [undefined, undefined, '우리는 법', '식이'],
  },
  'nordqvist-cranberry-toffee-tea': {
    name: '노르드크비스트 크랜베리와 솔티드 토피 티, 20 티백',
    description:
      '히비스커스와 루이보스를 바탕으로 시큼한 크랜베리와 솔티드 토피를 맞붙였습니다. 카페인이 없으면서 저녁에도 맛이 남습니다. 노르드크비스트는 1883 년부터 핀란드에서 차를 블렌딩해 왔습니다.',
    specs: [
      '20 x 1.75 g, 35 g',
      '95 °C 에서 2 분에서 5 분',
      '비건. 히비스커스와 루이보스는 Rainforest Alliance 인증',
    ],
    specLabels: [undefined, '우리는 법', '식이와 인증'],
  },
  'moomin-wild-blueberry-coffee': {
    name: '무민 Wild Blueberry 커피 250 g',
    description:
      '브라질 남부 모지아나 구릉에서 익은 피베리로 만든 Bergstrands Kafferosteri 의 블루베리 향 커피. 피베리는 원두가 두 개가 아니라 하나만 자란 커피 열매로, 로스터리는 그래서 맛이 응축된다고 말합니다. 250 그램.',
    specs: [
      '250 g',
      '브라질 남부 모지아나 구릉의 원두, Bergstrands Kafferosteri 에서 로스팅',
      '피베리, 원두가 두 개가 아니라 하나만 든 커피 열매',
      '야생 블루베리',
    ],
    specLabels: [undefined, undefined, '원두', '향미'],
  },
  'moomin-lingonberry-blueberry-dark-chocolate': {
    name: '무민 링곤베리와 블루베리 다크 초콜릿 70 g',
    description:
      'Kalmar Chokladfabrik 의 코코아 70 퍼센트 유기농 다크 초콜릿에 동결건조 링곤베리와 블루베리를 넣고, 토베 얀손의 그림으로 포장했습니다. 코코아는 페루산 크리올로와 트리니타리오이고 완제품은 스웨덴에서 만듭니다.',
    specs: [
      '70 g',
      '다크 초콜릿, 코코아 70 %',
      '페루산 크리올로와 트리니타리오 카카오빈, 스웨덴에서 제조',
      '유기농',
    ],
    specLabels: [undefined, undefined, undefined, '식이'],
  },
  'moomin-berry-picking-tea': {
    name: '무민 Berry Picking 티, 20 티백',
    description:
      '바닐라와 붉은 베리 향을 더한 홍차로, 핀란드 누르미예르비 공장에서 블렌딩하고 핀란드 열쇠 깃발 마크를 달았습니다. 이 차는 핀란드 적십자와의 협업으로, 한 팩이 팔릴 때마다 0.40 유로가 어린이와 청소년, 외로운 사람들을 위한 적십자 활동에 쓰입니다.',
    specs: [
      '20 x 1.75 g, 35 g',
      '핀란드 누르미예르비 공장에서 제조',
      'Rainforest Alliance 인증 찻잎, 핀란드 열쇠 깃발 마크',
      '비건',
    ],
    specLabels: [undefined, undefined, '인증', '식이'],
  },
  'arctic-power-berries-blueberry-powder': {
    name: '야생 블루베리 파우더 70 g',
    description:
      '동결건조한 야생 빌베리로, 다른 것은 넣지 않았습니다. 생산자는 70 그램 한 병에 신선한 열매가 약 700 그램 들어간다고 밝힙니다. 이 가게는 영국 파운드로 가격을 매깁니다.',
    specs: [
      '70 g',
      '북유럽 야생 블루베리(빌베리)로 만든 블루베리 파우더 100 %. 다른 것은 넣지 않았습니다',
      '신선한 열매 약 700 g 으로 베리 파우더 70 g',
      '열량 367 kcal / 1559 kJ, 단백질 5 g, 탄수화물 54 g 그중 당류 34 g, 식이섬유 31 g, 지방 0.8 g, 소금 0.01 g',
    ],
    specLabels: [undefined, undefined, '사용된 열매의 양', '100 g 당 영양성분'],
  },
  'arctic-power-berries-sea-buckthorn-powder': {
    name: '산자나무 파우더 70 g',
    description:
      '동결건조한 북유럽 산자나무 열매 70 그램, 다른 것은 넣지 않았습니다. 시큼하고 선명한 주황색이라 죽에 한 티스푼만 넣어도 생각보다 멀리 갑니다. 이 가게는 영국 파운드로 가격을 매깁니다.',
    specs: [
      '70 g',
      '북유럽 산자나무 열매로 만든 산자나무 파우더 100 %. 다른 것은 넣지 않았습니다',
      '신선한 열매 약 700 g 으로 베리 파우더 70 g',
      '열량 489 kcal / 2045 kJ, 단백질 13 g, 탄수화물 24 g 그중 당류 14 g, 식이섬유 28 g, 지방 25 g, 소금 0.06 g',
    ],
    specLabels: [undefined, undefined, '사용된 열매의 양', '100 g 당 영양성분'],
  },
  'kaapa-mushrooms-pakuri-powder': {
    name: 'Kääpä Mushrooms 차가버섯 추출 분말 30 g',
    description:
      '북유럽 숲에서 기능성 버섯을 채취하는 Kääpä Mushrooms 의 차가버섯 추출 분말 30 그램. 따뜻한 음료에 타서 마시는 용도입니다. Ruohonjuuri 는 유럽연합 관세와 세금 구역 안으로만 배송하며, 라벨에는 먼저 읽어 볼 만한 약물 상호작용이 적혀 있습니다.',
    specs: [
      '30 g',
      '차가버섯 100 %, 유기농. 1 일 섭취량당 베타글루칸 100 mg',
      '핀란드',
      '유럽연합 유기농 잎 마크가 있는 유기농. 글루텐 프리, 유당 무첨가, 유제품 무첨가, 대두 무첨가, 무설탕, 카페인 무첨가, 첨가물 없음, 비건, 야생',
      '차가버섯은 항생제, 혈액응고 억제제, 페니실린, 정맥 주사용 포도당과 함께 사용해서는 안 됩니다. 포장에 적힌 양을 지키고 초과하지 마세요',
      '6430071310212',
    ],
    specLabels: [undefined, undefined, undefined, '식이', '주의', 'EAN'],
  },
  'arctic-warriors-spruce-sprout-powder': {
    name: 'Arctic Warriors 가문비 새순 파우더 40 g',
    description:
      '유기농 국유림에서 2 주라는 짧은 기간에 손으로 따고, 같은 숲에서는 2 년에 한 번만 채취한 가문비 새순을 동결건조했습니다. 한 숟가락에 감귤과 송진의 향, 100 g 당 비타민 C 382 mg.',
    specs: [
      '40 g, 총중량 0.046 kg',
      '3 x 11 x 17 cm',
      '동결건조 가문비 새순',
      '핀란드',
      '하루 1 에서 3 티스푼',
      '열량 1683 kJ / 402 kcal, 단백질 12.1 g, 탄수화물 77.8 g, 지방 4.19 g. 비타민 C 382 mg, 비타민 A 970 µg, 비타민 K1 332 mg, 칼륨 1200 mg, 인 350 mg, 칼슘 130 mg, 마그네슘 120 mg, 아연 3.6 mg, 철 2 mg',
      '핀란드 국유림 관리청 소유의 유기농 숲에서 허가를 받아 채취, 같은 숲에서는 2 년에 한 번',
    ],
    specLabels: [
      undefined,
      undefined,
      undefined,
      undefined,
      '섭취량',
      '100 g 당 영양성분',
      '채취',
    ],
  },
  'arctic-warriors-nettle-powder': {
    name: 'Arctic Warriors 쐐기풀 파우더 150 g',
    description:
      '라플란드의 유기농 농장에서 기른 쐐기풀을 동결건조한 파우더. 맛이 충분히 중립적이라 수프나 빵에 넣어도 다른 재료와 부딪히지 않습니다. 100 g 당 칼슘 22 000 mg.',
    specs: [
      '150 g, 총중량 0.162 kg',
      '4 x 16 x 23 cm',
      '동결건조 쐐기풀',
      '핀란드, 라플란드의 유기농 농장에서 재배',
      '하루 1 에서 5 티스푼',
      '열량 1484 kJ / 354 kcal, 단백질 23.6 g, 탄수화물 56 g, 지방 3.44 g, 소금 5 mg 미만. 비타민 A 1900 µg, 칼슘 22000 mg, 마그네슘 5300 mg, 철 68 mg',
    ],
    specLabels: [undefined, undefined, undefined, undefined, '섭취량', '100 g 당 영양성분'],
  },
  'arctic-warriors-roseroot-elixir': {
    name: 'Arctic Warriors 홍경천 엘릭서 100 ml',
    description:
      '홍경천은 라플란드 산지의 축축한 개울가와 바위 벽에서 자랍니다. Arctic Warriors 는 이것을 쐐기풀과 함께 식물성 글리세롤에 추출합니다. 한 티스푼을 차나 죽, 요구르트에 넣으면 됩니다.',
    specs: [
      '100 ml, 총중량 0.270 kg',
      '4.5 x 4.5 x 13 cm',
      '식물성 글리세롤, 쐐기풀, 홍경천',
      '핀란드',
      '하루 1 에서 2 티스푼',
      '유제품 무첨가, 글루텐 프리, 비건. 식물성 글리세롤은 혈당에 영향을 주지 않습니다',
      '건강기능식품은 균형 잡힌 식사를 대신하지 않습니다. 어린이의 손이 닿지 않는 곳에 보관하고 표시된 양을 넘기지 마세요',
    ],
    specLabels: [undefined, undefined, undefined, undefined, '섭취량', '식이', '참고'],
  },
  'omega7-sea-buckthorn-olive-oil': {
    name: 'Omega7 SBA24 산자나무와 올리브 오일 150 ml',
    description:
      '산자나무 열매유와 씨유에 올리브유를 더한 제품으로, 핀란드에서 개발하고 제조합니다. 생산자는 비타민 A 와 E 함량을 수확에 맡기지 않고 표준화합니다.',
    specs: [
      '150 ml',
      '산자나무 열매유와 씨유에 올리브유, 비타민 A 와 E 함량 표준화',
      '핀란드에서 개발하고 제조',
      '포장에 적힌 양을 지키고 초과하지 마세요. 건강기능식품은 균형 잡힌 식사를 대신하지 않습니다. 어린이의 손이 닿지 않는 곳에 보관하세요',
    ],
    specLabels: [undefined, undefined, undefined, '참고'],
  },
  'kaino-spruce-sprout-sparkling': {
    name: 'KAINO Drinks 가문비 새순 스파클링 음료 0.2 l',
    description:
      '핀란드산 유기농 재료로 만든 무알코올 스파클링 음료. 오두막에서의 건배에 꼭 술이 필요하지는 않게 해 줍니다. 차게 내세요. 미지근하면 가문비 향이 기포에 묻힙니다.',
    specs: [
      '0.2 l',
      '핀란드산 유기농 재료 100 % 로 제조. 무알코올',
      '핀란드',
      '열량 122.65 kJ / 29.3 kcal, 지방 0.1 g 미만 그중 포화지방 0.1 g 미만, 탄수화물 6.9 g 그중 당류 6.9 g, 단백질 0.1 g 미만, 소금 0.1 g 미만',
      '비건. 유럽연합 유기농 잎 마크',
    ],
    specLabels: [undefined, undefined, undefined, '100 ml 당 영양성분', '식이와 인증'],
  },
  'arabia-moomin-mug-snufkin': {
    name: '아라비아 무민 머그, 스너프킨',
    description:
      '아라비아는 1990 년부터 토베 얀손의 그림을 이 머그에 찍어 왔고, 수집가들은 단종된 그림을 연도별로 좇습니다. 스너프킨은 가을에 떠났다가 봄에 돌아오는 인물입니다.',
    specs: ['0.3 l', '토베 얀손'],
    specLabels: [undefined, '원화'],
  },
  'arabia-moomin-mug-friendship': {
    name: '아라비아 무민 머그, Friendship',
    description:
      '머그에 그려진 것은 어둠을 무서워하는 보이지 않는 아이 닌니로, 누군가 다정하게 대해 주면 조금씩 다시 모습을 드러냅니다. 잘 알려진 인물들보다 조용한 선택입니다.',
    specs: ['0.3 l', '토베 얀손'],
    specLabels: [undefined, '원화'],
  },
  'arabia-moomin-figurine-moomintroll': {
    name: '아라비아 무민 미니 피규어, 무민',
    description:
      '1990 년대에 툴리키 피에틸래가 도안을 그린 수제 도자 피규어로, 전용 상자에 담겨 판매됩니다. 코트 주머니에 넣어 집까지 가져올 만큼 작습니다.',
    specs: ['툴리키 피에틸래, 1990 년대', '수제 도자, 전용 상자에 담겨 판매'],
    specLabels: ['디자인', '제작'],
  },
  'fiskars-moominpappa-scissors': {
    name: '피스카스 무민파파 만능 가위',
    description:
      '주황색 손잡이의 피스카스 가위는 다른 어떤 도구보다 많은 핀란드 부엌 서랍에 들어 있습니다. 이 가위는 21 cm 스테인리스강이고 손잡이에 무민파파가 그려져 있습니다.',
    specs: ['21 cm', '스테인리스강'],
  },
  'rento-tar-sauna-soap': {
    name: 'Rento 타르 사우나 비누 150 g',
    description:
      '소나무 타르는 핀란드에서 맛이기 이전에 냄새이고, 그 자리는 어디보다 사우나입니다. 식물성 오일 베이스이며 황마 끈에 매달아 쓰는 사이사이 말릴 수 있습니다.',
    specs: ['150 g', '식물성 오일 베이스 비누'],
  },
  'rento-birch-sauna-honey': {
    name: 'Rento 자작나무 사우나 허니 150 ml',
    description:
      '깨끗한 피부에 바르고 부드러운 열기 속에 잠시 두었다가 미지근한 물로 헹구세요. 사우나 허니는 핀란드 사우나 의식 가운데 방문객이 집에 가져갈 생각을 못 하는 부분입니다.',
    specs: ['150 ml'],
  },
  'rento-blueberry-sauna-honey': {
    name: 'Rento 블루베리 사우나 허니 150 ml',
    description:
      '각질 제거가 되는 쪽이고 향은 블루베리입니다. 사용법은 자작나무와 같습니다. 깨끗한 피부에 바르고 열기가 일하게 둔 다음 미지근한 물로 헹구세요.',
    specs: ['150 ml'],
  },
  'rento-sauna-pillow': {
    name: 'Rento Pino 사우나 베개 50 x 22 cm',
    description:
      '사우나 벤치에서 머리와 목을 받치는 자카드 직조 베개. 형태가 무너지지 않는다는 점이 사우나 베개와 접어 놓은 수건의 차이 전부입니다.',
    specs: ['50 x 22 cm', '블랙'],
  },
  'rento-linen-back-scrubber': {
    name: 'Rento 리넨 테리 등밀이 14 x 70 cm',
    description:
      '자기 등에 닿을 만큼 긴 리넨 테리. 피부는 먼저 열기에 부드러워지고 그다음에 씻는데, 핀란드 사람들이 생각하지 않고도 지키는 순서입니다.',
    specs: ['14 x 70 cm', '리넨 테리'],
  },
  'rento-linen-wash-mitt': {
    name: 'Rento 리넨 테리 목욕 장갑 14 x 24 cm',
    description:
      '등밀이와 같은 리넨 테리로, 손바닥을 두 겹으로 한 장갑입니다. 이 항목에서 가장 싸고, 사람들이 실제로 매주 쓰는 물건입니다.',
    specs: ['14 x 24 cm', '리넨 테리, 손바닥 두 겹'],
  },
  'emendo-sauna-scents': {
    name: 'Emendo 사우나 향: 살미아키, 송진, 시수, 3 x 10 ml',
    description:
      '나무 받침에 올린 세 가지 향이고 그중 하나가 살미아키입니다. 살미아키와 사우나보다 핀란드다운 조합은 흔치 않은데, 이 세트는 둘을 같은 국자에 담습니다.',
    specs: ['나무 받침 포함 3 x 10 ml', '살미아키, 송진, 시수'],
    specLabels: [undefined, '향'],
  },
  'aurora-mini-kuksa': {
    name: '미니 쿡사, 가죽 고리 포함, 4 cm',
    description:
      '커피가 아니라 한 잔 마시기 위한 4 cm 쿡사로, 벨트에 걸 수 있는 가죽 고리가 달려 있습니다. 이 형태를 가장 작고 싸게 갖는 방법입니다.',
    specs: ['지름 4 cm'],
  },
  'fazer-super-salmiakki': {
    name: '파제르 슈퍼 살미아키 정과 80 g',
    description:
      '살미아키 클래식 가운데 가장 단단한 것으로, 1970 년대부터 같은 깡통 모양 상자에 담겨 팔립니다. 방문객에게 하나 건네면 십 초 안에 어느 편인지 알 수 있습니다.',
    specs: ['80 g'],
  },
  'fazer-pantteri-salmiakki': {
    name: '파제르 판테리 살미아키 캔디 210 g',
    description:
      '오십 년 넘게 만들어 온 부드러운 멘톨 살미아키. 정과보다 순해서 살미아키를 한 번도 먹어 본 적 없는 사람에게 줄 만한 봉지입니다.',
    specs: ['210 g'],
  },
  'halva-salmiakkiruutu': {
    name: '할바 살미아키루투 170 g',
    description:
      '할바는 이 네모난 살미아키를 1960 년부터 헬싱키 피태얀매키에서 만들어 왔습니다. 파제르 제품보다 쫀득하고, 핀란드 사람들은 이것이 원조라고 주장합니다.',
    specs: ['170 g', '1960 년부터 헬싱키 피태얀매키에서 제조'],
  },
  'sisu-xylitol-salmiakki': {
    name: '시수 자일리톨 살미아키 정과 36 g',
    description:
      '자일리톨로 단맛을 낸 살미아키로 핀란드 치과의사협회 마크가 붙어 있습니다. 통이 코트 주머니에 들어가서 핀란드 차 안에는 거의 다 하나씩 있습니다.',
    specs: ['36 g', '자일리톨. 핀란드 치과의사협회 마크 부착'],
    specLabels: [undefined, '감미료'],
  },
  'leijona-tar-liquorice': {
    name: '레이요나 타르 감초 정과 32 g',
    description:
      '소나무 타르로 향을 낸 감초로 1933 년부터 만들어 왔습니다. 타르는 사탕에도, 사우나 비누에도, 심지어 아이스크림에도 들어가는 핀란드의 맛이고, 이것이 가장 싸게 시험해 보는 방법입니다.',
    specs: ['32 g'],
  },
  'fazer-hazelnut-chocolate': {
    name: '칼 파제르 통헤이즐넛 밀크 초콜릿 200 g',
    description:
      '밀크 초콜릿 안에 헤이즐넛이 통째로 박힌 파란 초콜릿. 파제르는 1922 년부터 같은 파란 포장지를 써 왔고, 그래서 핀란드 사람들이 외국에 들고 가는 것도 이것입니다.',
    specs: ['200 g'],
  },
  'fazer-light-milk-chocolate': {
    name: '칼 파제르 라이트 밀크 초콜릿 180 g',
    description:
      '파란 초콜릿을 더 가볍고 순하게 만든 버전입니다. 클래식이 너무 달다면 이쪽을 가져가세요.',
    specs: ['180 g'],
  },
  'fazer-fazerina': {
    name: '파제르 파제리나 오렌지 트러플 바 99 g',
    description:
      '밀크 초콜릿 안에 오렌지 트러플이 들어 있고 1953 년부터 만들어 왔습니다. 파란 초콜릿보다 얇고, 배낭 속에서도 한 덩어리로 녹지 않습니다.',
    specs: ['99 g'],
  },
  'fazer-jaffa-orange': {
    name: '파제르 야파 오렌지 케이크 300 g',
    description:
      '스펀지 시트 위에 오렌지 마멀레이드와 다크 초콜릿. 비스킷도 케이크도 아니라는 것이 핀란드 사람들이 매번 되풀이하는 논쟁입니다.',
    specs: ['300 g'],
  },
  'north-outdoor-arctic-250-balaclava': {
    name: '노스아웃도어 Arctic 250 메리노 발라클라바',
    description:
      '노스아웃도어가 만드는 가장 따뜻한 편물이고, 헬멧 아래에 들어가도록 모양을 잡았습니다. 스노모빌이나 순록 썰매에서는 추위가 목과 뺨으로 먼저 들어오는데, 이 한 겹이 그 틈을 막습니다.',
    specs: [
      '메리노 울 편물, Arctic 250 중량',
      '단일 사이즈',
      '블랙',
      '노스아웃도어, 핀란드 오울루',
    ],
  },
  'north-outdoor-kevo-gloves': {
    name: '노스아웃도어 Kevo 메리노 장갑',
    description:
      '오울루에 있는 노스아웃도어의 자체 편직 공장에서 뮬싱 프리 메리노로 짰습니다. 가장 추운 날 벙어리장갑 안에 낄 만큼 얇고, 사진을 찍을 때 벗지 않아도 됩니다.',
    specs: ['메리노 울 100 %, 뮬싱 프리', 'M, L, XL', '인디고 블루', '핀란드 오울루에서 편직'],
  },
  'north-outdoor-heavyweight-gaiter': {
    name: '노스아웃도어 Heavyweight 메리노 넥게이터',
    description:
      '메리노 플리스로, 오로라가 나타나기를 기다리는 동안 코 위까지 끌어올릴 만큼 두껍습니다. 울은 입김이 안에서 응결해도 계속 보온하는데, 추위 속에 가만히 서 있을 때의 문제가 바로 그것입니다.',
    specs: ['메리노 플리스', '단일 사이즈', '블랙', '노스아웃도어, 핀란드 오울루'],
  },
  'north-outdoor-sointu-cardigan': {
    name: '노스아웃도어 Sointu 메리노 카디건',
    description:
      '각진 실루엣의 메리노 카디건으로, 실내복처럼 보이지만 중간 레이어로 작동합니다. 이 구성에서 사파리를 마친 뒤 저녁 식사 자리에 입고 갈 만한 유일한 옷입니다.',
    specs: ['메리노 울 100 %', 'XS–2XL', '라테', '노스아웃도어, 핀란드 오울루'],
  },
  'north-outdoor-arctic-260-zip-neck': {
    name: '노스아웃도어 Arctic 260 메리노 집업',
    description:
      '메리노 100 퍼센트의 하이넥 집업으로, 실내에서 한 장만 입어도 되고 바깥에서는 중간 레이어가 될 만큼 두껍습니다. 지퍼가 핵심입니다. 걸을 때 열고 멈추면 잠급니다.',
    specs: [
      '메리노 울 100 %',
      'S–3XL',
      '그래나이트 그레이와 블랙',
      '노스아웃도어, 핀란드 오울루',
      '높은 보호 칼라, 덮인 지퍼, 길어진 뒷단',
    ],
    specLabels: [undefined, undefined, undefined, undefined, '디테일'],
  },
  'halti-hossa-baselayer-men': {
    name: '할티 Hossa II 메리노 베이스레이어 세트, 남성',
    description:
      '상의와 내복 바지가 한 상자에, 190 g 메리노에 20.5 미크론입니다. 피부에 가장 가까운 층이 나머지 옷이 제 몫을 하는지를 결정하는데, 방문객 대부분이 바로 이 층 없이 옵니다.',
    specs: [
      '메리노 울 100 %, 190 g/m², 20.5 미크론, 1x1 골지',
      '긴소매 상의와 내복 바지',
      '뒤집어 세탁하세요',
    ],
    specLabels: [undefined, '세트 구성', undefined],
  },
  'halti-hossa-baselayer-women': {
    name: '할티 Hossa II 메리노 베이스레이어 세트, 여성',
    description:
      '같은 190 g 메리노 세트를 여성용으로 재단했습니다. 걷다가 땀이 나고 그다음 멈춰 서서 바라보는 것이 라플란드의 하루인데, 울은 그 사이에도 온기를 붙잡아 둡니다.',
    specs: [
      '메리노 울 100 %, 190 g/m², 20.5 미크론, 1x1 골지',
      '긴소매 상의와 내복 바지',
      '뒤집어 세탁하세요',
    ],
    specLabels: [undefined, '세트 구성', undefined],
  },
  'halti-heatgrid-midlayer': {
    name: '할티 HeatGrid 중간 레이어 재킷, 남성',
    description:
      '셸 아래에서 부피를 늘리지 않으면서 공기를 가두는 와플 편물. 메리노와 파카 사이에 들어가는 층이고, 이것을 빼먹는 바람에 사람들이 춥게 돌아옵니다.',
    specs: [
      '안쪽 와플 편물 재활용 폴리에스터 95 % / 엘라스테인 5 %; 저지 편물 재활용 폴리에스터 92 % / 엘라스테인 8 %',
      '비슷한 색과 함께 뒤집어 세탁하고, 세탁 전에 지퍼를 잠그세요',
    ],
  },
  'halti-taival-dx-jacket': {
    name: '할티 Taival DX 3L 셸 재킷, 남성',
    description:
      '내수압 20 000 mm, 투습도 30 000 g 의 3 겹 셸. 이 두 숫자는 서로 반대 방향의 이야기입니다. 앞의 것은 진눈깨비를 바깥에 두고, 뒤의 것은 오르막에서 흘린 땀을 안에서 얼리지 않고 내보냅니다.',
    specs: [
      'DrymaxX Nano 니트 셸, 3 겹. 재활용 폴리에스터 100 %',
      '20 000 mm',
      '30 000 g/m²/24 h',
    ],
    specLabels: [undefined, '내수압', '투습도'],
  },
  'halti-sykli-ski-gloves': {
    name: '할티 Sykli 스키 장갑',
    description:
      '120 g 충전재와 가죽 손바닥, 넘어졌을 때 손목으로 눈이 밀려 들어오지 않게 하는 스노록 커프를 갖춘 방수 장갑. 도시를 걷기 위해서가 아니라 레비나 윌래스의 리프트 스키를 위해 만들어졌습니다.',
    specs: [
      'DrymaxX, 4 방향 신축, 방수 방풍. 가죽 손바닥',
      '120 g Microtherm Dynamic',
      '15 000 mm / 15 000 g/m²/24 h',
    ],
    specLabels: [undefined, '충전재', '내수압과 투습도'],
  },
  'halti-merino-socks-2pack': {
    name: '할티 메리노 울 양말, 2 켤레 세트',
    description:
      '두 켤레인 이유는 오늘 신은 것이 내일 아침까지 마르지 않기 때문입니다. 순모가 아니라 메리노 혼방이라 반복되는 세탁기 세탁을 더 잘 견딥니다.',
    specs: [
      '메리노 울 40 %, 아크릴 40 %, 폴리아미드 19 %, 엘라스테인 1 %',
      '2 켤레',
      '유럽에서 제조',
    ],
    specLabels: [undefined, '구성 수량', undefined],
  },
  'husky-farm-safari-rovaniemi': {
    name: '허스키 농장 방문과 허스키 사파리 2인, 로바니에미',
    description:
      '로바니에미 근교의 실제 허스키 농장을 가이드와 함께 둘러본 뒤, 개들이 끄는 썰매로 겨울 숲을 달리는 기프트 카드입니다. 지금 구매하면 이메일로 전달되고, 날짜는 받는 사람이 직접 고릅니다.',
    specs: [
      '가이드와 함께하는 허스키 농장 방문과 2인 허스키 사파리. 가이드가 로바니에미에서 10 km 이내는 픽업할 수 있습니다',
      '약 3.5시간',
      '2명',
      '로바니에미. 정확한 장소는 예약 시 확정됩니다',
      '겨울철, 11월부터 4월까지',
      '영어',
      '유효기간 3년',
    ],
    specLabels: [undefined, '소요 시간', '참가 인원', '위치', '시즌', '가이드 언어', '기프트 카드'],
  },
  'reindeer-safari-rovaniemi': {
    name: '순록 사파리 2인, 로바니에미',
    description:
      '로바니에미 근교 실제 순록 농장에서 즐기는 저녁 사파리: 순록이 끄는 썰매로 2.5 km를 돌고, 농장을 둘러보며 간단한 간식을 즐깁니다. 맑은 밤에는 오로라가 보일 수도 있지만 장담할 수는 없습니다.',
    specs: [
      '순록 농장 입장과 순록 썰매 2.5 km 코스 2인, 간단한 간식 포함. 로바니에미 10 km 이내 픽업',
      '2.5~3시간',
      '2명',
      '로바니에미. 정확한 장소는 예약 시 확정됩니다',
      '겨울철, 12월부터 3월까지. 사파리는 저녁에 출발합니다',
      '영어',
      '유효기간 3년',
    ],
    specLabels: [undefined, '소요 시간', '참가 인원', '위치', '시즌', '가이드 언어', '기프트 카드'],
  },
  'aurora-tour-kilpisjarvi': {
    name: '스노모빌 오로라 투어 2인, 킬피스야르비',
    description:
      '킬피스야르비는 유난히 맑은 밤하늘로 알려진 곳입니다. 스노모빌로 잠시 달리면 자연의 고요 속에서 오로라를 감상할 수 있는 장소에 도착하며, 추위를 녹일 따뜻한 음료가 준비됩니다. 저녁 20.00~23.00에 진행되며 기상 상황에 따라 달라질 수 있습니다.',
    specs: [
      '가이드 동행 오로라 투어 2인, 스노모빌로 약 15 km, 따뜻한 음료 포함',
      '3시간, 20.00~23.00',
      '2명',
      '킬피스야르비',
      '운전은 18세부터, 썰매 탑승은 8세부터',
      '유효기간 3년',
    ],
    specLabels: [undefined, '소요 시간', '참가 인원', '위치', '연령 제한', '기프트 카드'],
  },
  'glass-igloo-night-levi': {
    name: '유리 이글루 1박 2인, 레비',
    description:
      '레비 산 위 따뜻한 유리 이글루에서 보내는 두 사람의 하룻밤. 전기 가열 유리는 김이 서리지 않아, 전동 더블 침대에 누워 오로라를 찾을 수 있습니다. 웰컴 드링크, 목욕 가운, 조식이 포함되며 이글루에는 간이 주방, 샤워실, 화장실이 있습니다.',
    specs: [
      '슈피리어급 유리 이글루 2인 1박, 웰컴 드링크, 목욕 가운과 슬리퍼, 조식. 교통편은 포함되지 않습니다',
      '1박, 체크아웃 11.00',
      '2명',
      '레비, 산 위 높은 곳',
      '23 m², 김서림 없는 가열 유리, 간이 주방, 샤워실과 화장실, 전동 더블 침대',
      '27.08-10.11 및 01.04-12.04 기간의 숙박에 유효',
    ],
    specLabels: [undefined, '소요 시간', '참가 인원', '위치', '이글루', '기프트 카드'],
  },
  'gold-panning-day-inari': {
    name: '사금 채취 체험 하루 4인, 이나리',
    description:
      '이나리의 실제 운영 중인 금 채굴장에서 4인 일행이 보내는 하루: 먼저 역사를 배우고, 손으로 사금을 일며 기계 채굴도 견학합니다. 식사와 사리셀케 중심가 왕복 교통편이 포함되며, 찾은 금은 가져갈 수 있습니다.',
    specs: [
      '운영 중인 채굴장에서 4인이 보내는 5시간의 사금 채취 하루. 손 사금 일기 지도와 기계 채굴 견학 포함. 당일 식사, 장비, 사리셀케 중심가에서 채굴장까지 왕복 교통편이 모두 포함됩니다',
      '5시간',
      '4명',
      '이나리',
      '봄과 여름 시즌',
      '유효기간 3년',
    ],
    specLabels: [undefined, '소요 시간', '참가 인원', '위치', '시즌', '기프트 카드'],
  },
  'foodin-six-mushroom-blend': {
    name: 'Foodin 여섯 가지 버섯 블렌드 100 g',
    description:
      '차가버섯, 영지, 노루궁뎅이, 동충하초, 표고, 잎새버섯을 한 병에 담아 커피나 스무디에 타 먹는 분말입니다. 이 한 병이 기능성 버섯 선반 전체를 대신합니다.',
    specs: ['100 g', '차가버섯, 영지, 노루궁뎅이, 동충하초, 표고, 잎새버섯'],
  },
  'foodin-nordic-berry-powder': {
    name: 'Foodin 북유럽 베리 파우더 믹스 120 g',
    description:
      '북쪽의 베리를 하나의 분말로 담은 핀란드산 블렌드로, 죽이나 요거트에 어울립니다. 북유럽 베리의 여름을 집으로 가져가는 가장 가벼운 방법입니다.',
    specs: ['120 g', '핀란드산'],
  },
  'foodin-chaga-tincture': {
    name: 'Foodin 차가버섯 팅크 50 ml',
    description:
      '분말 대신 방울로 먹는 핀란드산 차가버섯. 우려낼 필요 없는 50 ml 병으로, 차가버섯이라는 발상의 여행용 사이즈입니다.',
    specs: ['50 ml', '핀란드산 차가버섯'],
  },
  'kaavi-chaga-chunks': {
    name: 'Kaavi Porcini 차가버섯 조각 100 g',
    description:
      '천천히 우려내는 핀란드 자작나무 차가버섯의 굵은 조각. 슈퍼푸드라는 말이 생기기 훨씬 전부터 이렇게 마셨습니다. 한 봉지로 여러 주전자를 우립니다.',
    specs: ['100 g', '약한 불로 오래 우려 차로'],
    specLabels: [undefined, '사용법'],
  },
  'puhdistamo-instant-chaga': {
    name: 'Puhdistamo 인스턴트 차가버섯 추출 분말 28 g',
    description:
      '끓이지 않고 뜨거운 물에 바로 녹는 차가버섯. 28 g 병은 어떤 짐에도 들어가고 조각 봉지보다 여행을 잘 견딥니다.',
    specs: ['28 g'],
  },
  'puhdistamo-conifer-extract': {
    name: 'Puhdistamo 침엽수 추출액 50 ml',
    description:
      '핀란드 침엽수에서 추출해 방울로 먹는 추출액. 라플란드 숲길의 향을 코트 주머니에 들어가는 병에 담았습니다.',
    specs: ['50 ml'],
  },
  'nb-little-my-beanie': {
    name: '리틀 미 굵은 니트 비니',
    description:
      '접단에 리틀 미가 들어간 두꺼운 니트 비니. 울 혼방이라 일주일 내내 썼다 벗었다 해도 모양이 무너지지 않습니다. 성인 원사이즈이며, 라플란드 날씨를 마음에 들어할 유일한 무민 캐릭터이기도 합니다.',
    specs: [
      '아크릴, 나일론, 울',
      '성인, 원사이즈',
      '무민 공식 제품',
    ],
    specLabels: [undefined, undefined, '라이선스'],
  },
  'nb-moomintroll-mittens': {
    name: '무민 벙어리장갑',
    description:
      '부드러운 플리스를 안감으로 댄 니트 벙어리장갑. 높이 24 cm라 손목단이 외투 소매 위로 올라옵니다. 성인 사이즈이고, 개썰매에서 한 짝을 잃어버려도 감당할 만한 가격입니다.',
    specs: [
      '아크릴 100 %, 플리스 안감',
      '성인, 높이 24 cm, 엄지 위 너비 9.5 cm',
      '무민 공식 제품',
    ],
    specLabels: [undefined, undefined, '라이선스'],
  },
  'nb-moomintroll-love-socks': {
    name: '무민 Love 레트로 삭스',
    description:
      '정강이 부분에 분홍 하트와 무민을 자수로 넣은 흰색 골지 양말. 프린트가 아니라 자수라 세탁에도 견딥니다. 원사이즈로 EU 36에서 42까지 지원합니다.',
    specs: [
      '면 67 %, 폴리에스터 25 %, 엘라스토디엔 4 %, 나일론 3 %, 엘라스테인 1 %',
      '원사이즈, EU 36-42',
      '자수 디자인',
    ],
    specLabels: [undefined, undefined, '디테일'],
  },
  'nb-moomin-classics-tee': {
    name: 'Moomin Classics 헤비 티셔츠',
    description:
      '260 그램 면 티셔츠, 라벤더 색상, 박시한 핏이며 큰 프린트 대신 가슴에 작은 무민 자수가 들어갑니다. 몸에 붙지 않고 곧게 떨어질 만큼 두껍습니다.',
    specs: [
      '면 100 %, 260 g/m2',
      '유니섹스 박시 핏, XS부터 XXL까지',
      '박시 핏이라 매장은 한 사이즈 작게 주문하기를 권합니다',
    ],
    specLabels: [undefined, undefined, '사이즈 안내'],
  },
  'nb-pippi-tee': {
    name: '말괄량이 삐삐 티셔츠',
    description:
      '240 그램 면 티셔츠에 삐삐를 핀란드에서 프린트했습니다. 유니섹스 스트레이트 핏이고 밑단이 평균보다 깁니다. 어떤 집에서는 아스트리드 린드그렌이 무민보다 더 멀리 여행합니다.',
    specs: [
      '면 100 %, 240 g/m2',
      '유니섹스 스트레이트 핏, M부터 XXL까지',
      '핀란드에서 프린트',
    ],
  },
  'nb-moomintroll-hoodie': {
    name: '무민 후디',
    description:
      '면과 폴리에스터 300 그램 후디를 핀란드에서 프린트했습니다. 유니섹스 스트레이트 핏입니다. 사우나가 식은 뒤 오두막의 저녁에 실제로 걸치고 있는 옷이 바로 이 한 벌입니다.',
    specs: [
      '면 65 %, 폴리에스터 35 %, 300 g/m2',
      '유니섹스 스트레이트 핏, XS부터 XXL까지',
      '핀란드에서 프린트',
    ],
  },
  'nb-kunnas-kalevala-tote': {
    name: '마우리 쿤나스 개들의 칼레발라 토트백',
    description:
      '핀란드 민족 서사시를 개들로 다시 쓴 개들의 칼레발라에서 가져온 마우리 쿤나스의 그림을 프린트한 면 토트백. 이 가게에서 가장 저렴하면서도 한 나라를 통째로 설명해내는 물건입니다.',
    specs: [
      '면 100 %',
      '38 x 42 cm',
      '마우리 쿤나스 공식 제품',
    ],
    specLabels: [undefined, undefined, '라이선스'],
  },
  'sk-marimekko-unikko-crossbody': {
    name: '마리메꼬 니트 크로스바디 우니꼬 숄더백',
    description:
      '휴대폰과 지갑, 장갑 한 켤레가 들어가는 크기의 크로스바디 백에 우니꼬 양귀비가 들어갔습니다. 우니꼬는 아르미 라티아가 꽃무늬를 금지한 뒤인 1964년에 그려졌고, 그 금지령보다 육십 년을 더 살아남았습니다.',
    specs: [
      '니트 크로스바디, 사이즈 M',
      '우니꼬, 블루와 다크 블루',
    ],
    specLabels: ['모델', '패턴'],
  },
  'sk-moomin-duvet-set': {
    name: '무민 이불 커버 세트 150 x 210 cm, Sydankapyset',
    description:
      '무민과 스노크메이든이 들어간 GOTS 인증 면 침구 세트. 핀란드어 패턴 이름 Sydankapyset은 이 그림이 보여 주는 관계를 그대로 가리키는 말입니다.',
    specs: [
      '이불 커버 150 x 210 cm',
      'GOTS, Global Organic Textile Standard',
    ],
    specLabels: [undefined, '인증'],
  },
  'sk-novita-wonder-wool': {
    name: '노비타 원더 울 DK 실 50 g',
    description:
      '1928년부터 핀란드 뜨개인들에게 실을 공급해 온 노비타의 DK 굵기 순모 실. 50 그램 한 볼에 112 미터가 들어 있고, 권장 바늘은 4 mm입니다.',
    specs: [
      '울 100 %',
      '50 g 볼, 112 m',
      '4 mm',
    ],
    specLabels: [undefined, undefined, '권장 바늘'],
  },
  'sk-aromageddon-sauna-scent': {
    name: '아로마게돈 사우나 향 Hankihorppy 15 ml',
    description:
      '민트와 카카오로 만든 사우나 향. 핀란드의 겨울을 한 번 나 보기 전에는 이상하게 들립니다. 돌 위가 아니라 국자 한 컵의 물에 2방울에서 4방울을 떨어뜨립니다.',
    specs: [
      '15 ml',
      '국자 한 컵의 물에 2방울에서 4방울',
    ],
    specLabels: [undefined, '사용법'],
  },
  'sk-arabia-moomin-mug-friendship': {
    name: '아라비아 무민 머그 0,3 l, 우정',
    description:
      '아라비아의 무민 머그 우정 편. 수줍은 토플이 미플이 보낸 유리병 편지를 발견하고 그를 찾아 나섭니다. 아라비아는 1990년부터 핀란드에서 무민 머그를 만들고 도안을 차례로 단종시키기 때문에 옛 도안이 수집됩니다.',
    specs: [
      '0,3 l',
      '우정, 토플과 미플의 이야기에서',
    ],
    specLabels: [undefined, '도안'],
  },
  'sk-muurla-moomin-bottle': {
    name: '무울라 무민 유리병 1 l, 사과',
    description:
      '소다 유리에 스윙톱 마개를 단 병. 종이팩 대신 물이나 주스를 식탁에 내놓기 위한 것입니다. 식기세척기 사용 가능, 1리터, 사과 무늬는 여름 도안입니다.',
    specs: [
      '1 l',
      '소다 유리, 스윙톱 마개',
      '식기세척기 사용 가능',
    ],
    specLabels: [undefined, undefined, '관리'],
  },
  'nb-kunnas-kalevala-beanie': {
    name: '«개들의 칼레발라» 비니',
    description:
      '마우리 쿤나스는 1992년 «칼레발라»를 개들의 서사시로 다시 그렸고, 이 비니에는 그 그림이 들어가 있습니다. 재생 폴리에스터, 성인 프리 사이즈, 버스가 데워지면 코트 주머니에 밀어 넣을 만큼 가볍습니다.',
    specs: [
      '100 % 재생 폴리에스터',
      '성인용, 프리 사이즈',
      '마우리 쿤나스, «개들의 칼레발라»',
    ],
    specLabels: [undefined, undefined, '일러스트'],
  },
  'nb-little-my-mittens': {
    name: '리틀 미이 벙어리장갑',
    description:
      '무민 장갑과 짝을 이루는 버건디. 플리스 안감도 가격도 같습니다. 손목 부분이 2센티미터 짧고, 무민이 조금 무르다고 느끼는 사람에게 어울리는 캐릭터입니다.',
    specs: [
      '아크릴 100 %, 플리스 안감',
      '성인용, 높이 22 cm, 엄지 위 너비 9.5 cm',
      '무민 공식 제품',
    ],
    specLabels: [undefined, undefined, '라이선스'],
  },
  'nb-kunnas-santa-mug': {
    name: '산타클로스 테이크아웃 컵',
    description:
      '쿤나스는 코르바툰투리의 산타를 핀란드 아이들이 떠올리는 모습 그대로 그렸고, 그 그림이 450 ml 컵에 담겼습니다. 소재는 화석 유래 플라스틱이 아니라 PLA입니다. 커피가 맨손에 뜨거울 때 쥐는 부분이 실리콘 슬리브입니다.',
    specs: [
      '450 ml',
      '컵과 뚜껑은 PLA, 슬리브는 식품용 실리콘',
      '마우리 쿤나스',
    ],
    specLabels: [undefined, undefined, '일러스트'],
  },
  'nb-little-my-thermal-bottle': {
    name: '리틀 미이 보온병 0.55 l',
    description:
      '이중 스테인리스, 550 밀리리터, 제조사 표기 보온 시간은 여섯 시간입니다. 스노모빌 사파리 한 번과 얼추 같은 길이이고, 이 보온병을 사는 이유가 바로 그 실전 시험입니다.',
    specs: [
      '550 ml',
      '스테인리스 스틸, PP 뚜껑, 실리콘 패킹',
      '제조사 표기 여섯 시간',
    ],
    specLabels: [undefined, undefined, '보온'],
  },
  'nb-little-my-neckpillow': {
    name: '리틀 미이 목베개',
    description:
      '부드러운 커버 아래는 메모리폼. 헬싱키–로바니에미 야간열차나 돌아가는 비행기용입니다. 가방에 걸 수 있을 만큼 작고, 실제로 계속 들고 다니게 되는 여행용 베개는 이런 것뿐입니다.',
    specs: [
      '메모리폼, 부드러운 커버',
      '무민 공식 제품',
    ],
    specLabels: [undefined, '라이선스'],
  },
  'nb-moomintroll-love-cushion': {
    name: '무민 Love 쿠션',
    description:
      '무늬를 찍은 사각형이 아니라 무민 모양으로 재단한 쿠션이며, 높이 45~75센티미터의 여러 크기가 있습니다. 오두막 소파에 한 번 놓이면 그대로 눌러앉는 물건입니다.',
    specs: [
      '폴리에스터',
      '여러 크기, 높이 45~75 cm',
      '무민 공식 제품',
    ],
    specLabels: [undefined, undefined, '라이선스'],
  },
  'nb-little-my-poster': {
    name: '리틀 미이 포스터',
    description:
      '헬싱키에서 디자인하고 200그램 실크지에 인쇄했으며, 30 × 40과 50 × 70 두 가지 크기가 있습니다. 포스터는 원통에 말면 무게가 없다시피 한데, 사람들이 라플란드에서 들고 오는 물건 대부분은 그렇지 않습니다.',
    specs: [
      '실크지, 200 g',
      '30 × 40 cm 또는 50 × 70 cm',
      '헬싱키에서 디자인·인쇄',
    ],
    specLabels: [undefined, undefined, '제작'],
  },
  'nb-moomin-novels-poster': {
    name: '무민 소설 포스터',
    description:
      '토베 얀손의 무민 소설 표지를 한 장에 모았습니다. 인쇄는 캐릭터 포스터와 같은 헬싱키, 크기도 같은 두 가지입니다. 머그를 모으는 사람이 아니라 집에서 책을 읽는 사람에게 어울립니다.',
    specs: [
      '실크지, 200 g',
      '30 × 40 cm 또는 50 × 70 cm',
      '헬싱키에서 디자인·인쇄',
    ],
    specLabels: [undefined, undefined, '제작'],
  },
}
