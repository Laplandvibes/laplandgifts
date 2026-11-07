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
  'iittala-aalto-vase-160': {
    name: '이딸라 알바 알토 베이스 160 mm, 투명',
    description:
      '알바 알토가 1936년에 그린 이 곡선을 이딸라는 지금도 입으로 불어 만듭니다. 그래서 윤곽이 한 점마다 조금씩 다릅니다. 160 mm는 이 이름을 들었을 때 사람들이 떠올리는 크기입니다.',
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
    name: '이딸라 키비 캔들홀더 60 mm, 그레이',
    description:
      '헤이키 오르볼라가 디자인한 압착 유리 캔들홀더, 높이 6 cm. 티라이트 하나를 색의 덩어리로 바꿔 놓습니다. 이딸라를 가장 싸게 손에 넣는 방법이고 기내 수하물도 견딥니다.',
    specs: [
      '6.5 x 6.5 cm, 높이 6 cm',
      '유리',
      '그레이',
      '총중량 0.338 kg',
      '손세척만 가능',
      '헤이키 오르볼라, Iittala Kivi',
      '1003-03, EAN 6411920039676',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, '디자이너와 컬렉션', '품번과 EAN'],
  },
  'marimekko-unikko-mug': {
    name: '마리메꼬 우니꼬 머그 25 cl',
    description:
      '마이야 이솔라가 우니꼬 양귀비를 그린 것은 1964년, 마리메꼬가 꽃무늬를 금지한 뒤였고 이 패턴은 그 금지령보다 오래 살아남았습니다. 이 석기 머그는 25 cl 용량으로, 프린트를 벽이 아니라 아침 식탁에 올려놓습니다.',
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
  'halti-tokoi-dx-jacket': {
    name: '할티 Tokoi DX 셸 재킷, 남성',
    description:
      '모든 솔기를 테이핑한 방수방풍 셸에 가벼운 안감과 조절 가능한 후드가 달렸고, 안에 울 스웨터를 입을 만큼 넉넉하게 재단했습니다. 할티는 유럽연합 안으로만 배송합니다.',
    specs: [
      'DrymaxX Sleek Twill, DrymaxX 멤브레인을 넣은 방수 방풍 2 겹 원단. 소재 구성은 재활용 폴리에스터 50%와 폴리에스터 50%',
      '부드러운 폴리에스터 안감, 재활용 폴리에스터 100%',
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
      '메리노 울 100%, 8 게이지 브리오슈 니트, 뮬싱 프리',
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
      '유기농 면 100%, 370 g 프렌치 테리',
      'S, M, L, XL, XXL',
      'Carbon Black',
      '레귤러 핏, 후드 조임끈, 캥거루 주머니, 밑단과 소매 끝 시보리, 재활용 폴리에스터 직조 라벨',
      '튀르키예에서 제조, 소재는 튀르키예산',
      '비슷한 색과 함께 뒤집어 세탁하세요. 프린트 위에 다림질하지 마세요. 최대 수축률 5%. 축축할 때 모양을 잡으세요',
    ],
    specLabels: [undefined, undefined, undefined, '핏과 디테일', undefined, undefined],
  },
  'halti-kroka-mitten': {
    name: '할티 Kroka II 벙어리장갑',
    description:
      '60 g 충전재와 실리콘 그립 손바닥을 갖춘 방풍 벙어리장갑, 남녀 공용 재단. 바람이 세지면 벙어리장갑이 손가락장갑을 이깁니다. 손가락끼리 서로를 데워 주기 때문입니다.',
    specs: [
      'Stormwall 소프트셸, 폴리에스터 50%와 재활용 폴리에스터 50%. 부드러운 플리스는 폴리에스터 100%. 손목은 라이크라 니트',
      'Microtherm Dynamic 60 g, 안감은 Active Dry 소프트터치 니트, 재활용 폴리에스터 100%',
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
      '메리노 울 혼방: 폴리아미드 36%, 아크릴 23%, 메리노 울 23%, 폴리프로필렌 16%, 엘라스테인 2%',
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
      '메리노 울 100%, 뮬싱 프리, 18.5 미크론, 편직 270 g/m²',
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
      '메리노 울 100%, 18.5 미크론, 1/1 골지',
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
      '메리노 울 100%, 뮬싱 프리, 18.5 미크론, 변형 골지',
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
      '전체 길이 20 cm의 작은 일상용 나이프. 탄소강 날, 왁스 처리한 자작나무 손잡이, 갈색 가죽 칼집입니다. 탄소강은 스테인리스보다 더 날카롭게 날이 서지만 기름을 발라 줘야 하고, 마르띠니도 제품 페이지에서 그렇게 알려 줍니다.',
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
      '전체 길이 22 cm의 나이프로 스테인리스 날, 니스를 칠한 무늬자작나무 손잡이, 갈색 가죽 칼집입니다. 마르띠니에 따르면 Lynx 모델은 1930년대에 창업자 얀네 마르띠니가 도면을 그렸습니다.',
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
      'Kareline 천연섬유 복합재, 소나무 셀룰로스 섬유 50%와 열가소성 수지 50%, 친환경 에너지로 생산',
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
      'Kareline 천연섬유 복합재, 소나무 셀룰로스 섬유 50%와 열가소성 수지 50%, 친환경 에너지로 생산',
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
      'Kareline 천연섬유 복합재, 소나무 셀룰로스 섬유 50%와 열가소성 수지 50%, 친환경 에너지로 생산',
      '핀란드',
      '길에서는 나무 커틀러리처럼 헹구고, 집에서는 식기세척기에 넣으세요. 전자레인지는 불가',
      '3025025X',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, '모델 번호'],
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
    specLabels: [undefined, undefined, undefined, '라벨 표기', '100 g당 영양성분'],
  },
  'finnish-flavours-palalaku-salmiakki': {
    name: 'Finnish Flavours 프리미엄 팔라라쿠 살미아키 150 g',
    description:
      '부드러운 살미아키 감초 150 그램 봉지. 염화암모늄이 들어간 그 맛이라 첫 조각에 방문객이 두 편으로 갈립니다. Suomikauppa는 핀란드 밖 멀리까지 식품을 보냅니다.',
    specs: [
      '150 g',
      '열량 1316 kJ / 311 kcal, 지방 0.5 g 그중 포화지방 0 g, 탄수화물 72 g 그중 당류 50 g, 단백질 4.1 g, 소금 1.7 g',
      'Finnish Flavours, Kumitehtaankatu 5, 04260 Kerava',
    ],
    specLabels: [undefined, '100 g당 영양성분', '판매원'],
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
    specLabels: [undefined, undefined, '100 g당 영양성분', '판매원'],
  },
  'kuivalihakundi-poro-jerky-200g': {
    name: '순록 육포 오리지널 200 g',
    description:
      '같은 순록 육포의 선물용 크기, 200 그램. 생산자는 육포 1 킬로에 생고기 3 킬로가 들어간다고 밝히며, 한 봉지 값의 대부분이 여기서 나옵니다.',
    specs: [
      '200 g',
      '순록 고기 100%, 우둔살, 오븐에 말리고 양념',
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
    specLabels: [undefined, undefined, '사용된 고기의 양', '100 g당 영양성분'],
  },
  'fazer-geisha-chocolate-bar': {
    name: '파제르 게이샤 초콜릿 바 37 g, 5개',
    description:
      '37 g짜리 게이샤 바 다섯 개가 한 묶음입니다. 파제르 밀크 초콜릿이 바삭한 헤이즐넛 누가 필링을 감싸고 있습니다. 파제르는 이 초콜릿을 팜유 없이 만든다고 표기합니다.',
    specs: [
      '5 x 37 g',
      '코코아 30% 이상 밀크 초콜릿, 헤이즐넛 11%가 든 누가 필링',
      '열량 550 kcal / 2303 kJ, 지방 35 g, 포화지방 17 g, 탄수화물 51 g, 당류 49 g, 단백질 8 g, 소금 0.19 g',
    ],
    specLabels: [undefined, undefined, '100 g당 영양성분'],
  },
  'nordqvist-moomin-forest-berry-tea': {
    name: '노르드크비스트 무민 숲 베리 히비스커스 티, 20 티백',
    description:
      '사과와 숲 베리를 더한 유기농 히비스커스로, 본래 카페인이 없습니다. 누르미야르비의 노르드크비스트 공장에서 블렌딩합니다. 스무 개 티백이 35 그램이라 이 가게에서 가장 가벼운 선물입니다.',
    specs: [
      '20 x 1.75 g, 35 g',
      '핀란드 누르미야르비의 노르드크비스트 공장에서 블렌딩',
      '95 °C 에서 2 분에서 4 분. 찬물에서는 5 분에서 10 분',
      '유기농 인증, 비건, 글루텐 프리, 본래 카페인 없음',
    ],
    specLabels: [undefined, undefined, '우리는 법', '식이'],
  },
  'nordqvist-cranberry-toffee-tea': {
    name: '노르드크비스트 크랜베리와 솔티드 토피 티, 20 티백',
    description:
      '히비스커스와 루이보스를 바탕으로 시큼한 크랜베리와 솔티드 토피를 맞붙였습니다. 카페인이 없으면서 저녁에도 맛이 남습니다. 노르드크비스트는 1883년부터 핀란드에서 차를 블렌딩해 왔습니다.',
    specs: [
      '20 x 1.75 g, 35 g',
      '95 °C 에서 2 분에서 5 분',
      '비건. 히비스커스와 루이보스는 Rainforest Alliance 인증',
    ],
    specLabels: [undefined, '우리는 법', '식이와 인증'],
  },
  'kaapa-mushrooms-pakuri-powder': {
    name: 'Kääpä Mushrooms 차가버섯 추출 분말 30 g',
    description:
      '북유럽 숲에서 기능성 버섯을 채취하는 Kääpä Mushrooms의 차가버섯 추출 분말 30 그램. 따뜻한 음료에 타서 마시는 용도입니다. Ruohonjuuri는 유럽연합 관세와 세금 구역 안으로만 배송하며, 라벨에는 먼저 읽어 볼 만한 약물 상호작용이 적혀 있습니다.',
    specs: [
      '30 g',
      '차가버섯 100%, 유기농. 1 일 섭취량당 베타글루칸 100 mg',
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
      '유기농 국유림에서 2 주라는 짧은 기간에 손으로 따고, 같은 숲에서는 2 년에 한 번만 채취한 가문비 새순을 동결건조했습니다. 한 숟가락에 감귤과 송진의 향, 100 g당 비타민 C 382 mg.',
    specs: [
      '40 g',
      '동결건조 가문비나무 새순',
      '100 g당 382 mg',
    ],
    specLabels: [undefined, undefined, '비타민 C'],
  },
  'arctic-warriors-nettle-powder': {
    name: 'Arctic Warriors 쐐기풀 파우더 150 g',
    description:
      '라플란드의 유기농 농장에서 기른 쐐기풀을 동결건조한 파우더. 맛이 충분히 중립적이라 수프나 빵에 넣어도 다른 재료와 부딪히지 않습니다.',
    specs: [
      '150 g, 총중량 0.162 kg',
      '4 x 16 x 23 cm',
      '동결건조 쐐기풀',
      '핀란드, 라플란드의 유기농 농장에서 재배',
      '하루 1 에서 5 티스푼',
      '열량 1484 kJ / 354 kcal, 단백질 23.6 g, 탄수화물 56 g, 지방 3.44 g, 소금 5 mg 미만. 비타민 A 1900 µg',
    ],
    specLabels: [undefined, undefined, undefined, undefined, '섭취량', '100 g당 영양성분'],
  },
  'arctic-warriors-roseroot-elixir': {
    name: 'Arctic Warriors 홍경천 엘릭서 100 ml',
    description:
      '홍경천은 라플란드 산지의 축축한 개울가와 바위 벽에서 자랍니다. Arctic Warriors는 이것을 쐐기풀과 함께 식물성 글리세롤에 추출합니다. 한 티스푼을 차나 죽, 요구르트에 넣으면 됩니다.',
    specs: [
      '100 ml',
      '홍경천과 쐐기풀',
    ],
  },
  'omega7-sea-buckthorn-olive-oil': {
    name: 'Omega7 SBA24 산자나무와 올리브 오일 150 ml',
    description:
      '산자나무 열매유와 씨유에 올리브유를 더한 제품으로, 핀란드에서 개발하고 제조합니다. 생산자는 비타민 A와 E 함량을 수확에 맡기지 않고 표준화합니다.',
    specs: [
      '150 ml',
      '산자나무 열매유와 씨유에 올리브유, 비타민 A와 E 함량 표준화',
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
      '핀란드산 유기농 재료 100%로 제조. 무알코올',
      '핀란드',
      '열량 122.65 kJ / 29.3 kcal, 지방 0.1 g 미만 그중 포화지방 0.1 g 미만, 탄수화물 6.9 g 그중 당류 6.9 g, 단백질 0.1 g 미만, 소금 0.1 g 미만',
      '비건. 유럽연합 유기농 잎 마크',
    ],
    specLabels: [undefined, undefined, undefined, '100 ml당 영양성분', '식이와 인증'],
  },
  'arabia-moomin-mug-snufkin': {
    name: '아라비아 무민 머그, 스너프킨',
    description:
      '아라비아는 1990년부터 토베 얀손의 그림을 이 머그에 찍어 왔고, 수집가들은 단종된 그림을 연도별로 좇습니다. 스너프킨은 가을에 떠났다가 봄에 돌아오는 인물입니다.',
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
      '1990년대에 툴리키 피에틸래가 도안을 그린 수제 도자 피규어로, 전용 상자에 담겨 판매됩니다. 코트 주머니에 넣어 집까지 가져올 만큼 작습니다.',
    specs: ['툴리키 피에틸래, 1990년대', '수제 도자, 전용 상자에 담겨 판매'],
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
  'pahkataide-kuksa-bear': {
    name: '파흐카타이데 무늬자작나무 쿡사, 곰 무늬 뼈 상감',
    description:
      '무늬자작나무로 만든 쿡사로, 손잡이에 곰을 새긴 뼈 상감이 있습니다. 파흐카타이데는 나무를 보호하는 양귀비씨 오일로 컵을 마감합니다. 세제로는 절대 씻지 않고 헹구기만 하면 되며, 매일 마시는 커피가 표면에 막을 만들어 더 잘 보호해 줍니다.',
    specs: [
      '무늬자작나무, 손잡이에 뼈 상감',
      '물로 헹굼, 세제 사용 금지',
      '핀란드산',
    ],
    specLabels: [undefined, undefined, '원산지'],
  },
  'pahkataide-curly-birch-kuksa': {
    name: '파흐카타이데 무늬자작나무 쿡사',
    description:
      '장식 없는 단순한 무늬자작나무 쿡사로, 파흐카타이데의 상감 컵과 같은 나무와 같은 양귀비씨 오일 마감입니다. 나뭇결 때문에 하나하나 모양이 다르며, 용량은 약 1.5 dl입니다.',
    specs: [
      '무늬자작나무',
      '약 1.5 dl, 하나하나가 다름',
      '물로 헹굼, 세제 사용 금지',
      '핀란드산',
    ],
    specLabels: [undefined, undefined, undefined, '원산지'],
  },
  'koivumaa-kuksa-reindeer-bone': {
    name: '쿡사 E. 코이부마 자작나무 옹이 쿡사, 순록 뼈 장식',
    description:
      '자작나무 옹이를 전통 방식으로 깎아 만든 쿡사로, 손잡이에 손가락 구멍 두 개와 순록 뼈 장식이 있습니다. 옹이 나무는 입술을 델 염려가 없어 모닥불 옆에서 뜨거운 커피를 마시는 전통 컵입니다. 블랙커피로 길들인 뒤에는 헹구기만 하면 됩니다.',
    specs: [
      '자작나무 옹이, 손잡이에 순록 뼈 장식',
      '약 1.5 dl, 손잡이에 구멍 두 개',
      '물로 헹굼, 세제와 식기세척기 사용 금지',
    ],
  },
  'koivumaa-burl-kuksa': {
    name: '쿡사 E. 코이부마 자작나무 옹이 쿡사, 구멍 하나',
    description:
      '같은 제작자의 옹이 쿡사를 단순하게 만든 버전입니다. 전통 방식으로 깎은 자작나무 옹이, 손잡이에 손가락 구멍 하나, 용량 약 1.5 dl. 블랙커피로 길들이면 커피의 기름이 나무의 열린 기공을 막아 주며, 식기세척기에는 절대 넣지 마세요.',
    specs: [
      '자작나무 옹이',
      '약 1.5 dl, 손잡이에 구멍 하나',
      '물로 헹굼, 세제와 식기세척기 사용 금지',
    ],
  },
  'fazer-super-salmiakki': {
    name: '파제르 슈퍼 살미아키 정과 80 g',
    description:
      '살미아키 클래식 가운데 가장 단단한 것으로, 1970년대부터 같은 깡통 모양 상자에 담겨 팔립니다. 방문객에게 하나 건네면 십 초 안에 어느 편인지 알 수 있습니다.',
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
      '할바는 이 네모난 살미아키를 1960년부터 헬싱키 피태얀매키에서 만들어 왔습니다. 파제르 제품보다 쫀득하고, 핀란드 사람들은 이것이 원조라고 주장합니다.',
    specs: ['170 g', '1960년부터 헬싱키 피태얀매키에서 제조'],
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
      '소나무 타르로 향을 낸 감초로 1933년부터 만들어 왔습니다. 타르는 사탕에도, 사우나 비누에도, 심지어 아이스크림에도 들어가는 핀란드의 맛이고, 이것이 가장 싸게 시험해 보는 방법입니다.',
    specs: ['32 g'],
  },
  'fazer-hazelnut-chocolate': {
    name: '칼 파제르 통헤이즐넛 밀크 초콜릿 200 g',
    description:
      '밀크 초콜릿 안에 헤이즐넛이 통째로 박힌 파란 초콜릿. 파제르는 1922년부터 같은 파란 포장지를 써 왔고, 그래서 핀란드 사람들이 외국에 들고 가는 것도 이것입니다.',
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
      '밀크 초콜릿 안에 오렌지 트러플이 들어 있고 1953년부터 만들어 왔습니다. 파란 초콜릿보다 얇고, 배낭 속에서도 한 덩어리로 녹지 않습니다.',
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
    specs: ['메리노 울 100%, 뮬싱 프리', 'M, L, XL', '인디고 블루', '핀란드 오울루에서 편직'],
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
    specs: ['메리노 울 100%', 'XS–2XL', '라테', '노스아웃도어, 핀란드 오울루'],
  },
  'north-outdoor-arctic-260-zip-neck': {
    name: '노스아웃도어 Arctic 260 메리노 집업',
    description:
      '메리노 100 퍼센트의 하이넥 집업으로, 실내에서 한 장만 입어도 되고 바깥에서는 중간 레이어가 될 만큼 두껍습니다. 지퍼가 핵심입니다. 걸을 때 열고 멈추면 잠급니다.',
    specs: [
      '메리노 울 100%',
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
      '메리노 울 100%, 190 g/m², 20.5 미크론, 1x1 골지',
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
      '메리노 울 100%, 190 g/m², 20.5 미크론, 1x1 골지',
      '긴소매 상의와 내복 바지',
      '뒤집어 세탁하세요',
    ],
    specLabels: [undefined, '세트 구성', undefined],
  },
  'halti-heatgrid-midlayer': {
    name: '할티 HeatGrid 중간 레이어 재킷, 여성',
    description:
      '부드러운 와플 니트로 만든 가볍고 기능적인 할티 중간 레이어로, 통기성이 있고 피부의 습기를 밖으로 내보냅니다. 앞쪽 풀 지퍼, 스탠드 칼라, 지퍼 주머니, 신축성 있는 소매 끝과 밑단을 갖추고 있습니다.',
    specs: [
      '안쪽 와플 니트 재활용 폴리에스터 95% / 엘라스테인 5%; 저지 니트 재활용 폴리에스터 92% / 엘라스테인 8%',
      '비슷한 색과 함께 뒤집어 세탁하고, 세탁 전에 지퍼를 잠그세요',
    ],
  },
  'halti-taival-dx-jacket': {
    name: '할티 Taival DX 3L 셸 재킷, 남성',
    description:
      '내수압 20,000 mm, 투습도 30,000 g의 3 겹 셸. 이 두 숫자는 서로 반대 방향의 이야기입니다. 앞의 것은 진눈깨비를 바깥에 두고, 뒤의 것은 오르막에서 흘린 땀을 안에서 얼리지 않고 내보냅니다.',
    specs: [
      'DrymaxX Nano 니트 셸, 3 겹. 재활용 폴리에스터 100%',
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
      '메리노 울 40%, 아크릴 40%, 폴리아미드 19%, 엘라스테인 1%',
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
      '킬피스야르비는 유난히 맑은 밤하늘로 알려진 곳입니다. 스노모빌로 잠시 달리면 자연의 고요 속에서 오로라를 감상할 수 있는 장소에 도착하며, 추위를 녹일 따뜻한 음료가 준비됩니다. 저녁 20:00~23:00에 진행되며 기상 상황에 따라 달라질 수 있습니다.',
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
      '이나리의 실제 운영 중인 금 채굴장에서 4인 일행이 보내는 하루: 먼저 역사를 배우고, 손으로 사금을 일며 기계 채굴도 견학합니다. 식사와 사리셀카 중심가 왕복 교통편이 포함되며, 찾은 금은 가져갈 수 있습니다.',
    specs: [
      '운영 중인 채굴장에서 4인이 보내는 5시간의 사금 채취 하루. 손 사금 일기 지도와 기계 채굴 견학 포함. 당일 식사, 장비, 사리셀카 중심가에서 채굴장까지 왕복 교통편이 모두 포함됩니다',
      '5시간',
      '4명',
      '이나리',
      '봄과 여름 시즌',
      '유효기간 3년',
    ],
    specLabels: [undefined, '소요 시간', '참가 인원', '위치', '시즌', '기프트 카드'],
  },
  'korouoma-waterfalls-rovaniemi': {
    name: '코로우오마 얼음 폭포 투어 2인, 로바니에미 출발',
    description:
      '겨울이면 코로우오마 협곡의 절벽을 타고 흐르는 개울이 푸른 얼음 폭포로 얼어붙습니다. 가이드와 함께하는 당일 투어는 로바니에미에서 출발해 약 110 km 떨어진 포시오의 협곡으로 향합니다. 걷기는 어렵지 않고 눈이 깊으면 스노슈를 신으며, 가는 길에 가벼운 점심을 먹습니다.',
    specs: [
      '2인을 위한 코로우오마 얼음 폭포 가이드 투어. 이동, 가벼운 점심, 간식 포함. 로바니에미 중심가에서 10 km 이내 픽업',
      '이동 포함 약 7시간',
      '2명',
      '코로우오마 협곡, 포시오. 로바니에미 출발',
      '겨울철, 11월부터 4월까지',
      '영어',
      '유효기간 3년',
    ],
    specLabels: [undefined, '소요 시간', '참가 인원', '위치', '시즌', '가이드 언어', '기프트 카드'],
  },
  'amethyst-mine-snowshoe-luosto': {
    name: '루오스토 자수정 광산 스노슈 투어 2인',
    description:
      '로바니에미에서 퓌해-루오스토 국립공원으로 떠나는 가이드 동반 하루 투어입니다. 먼저 스노슈를 신고 공원을 걷고, 이어서 스노 트레인을 타고 람피바라 정상의 자수정 광산으로 갑니다. 광산에서는 누구나 직접 캐 볼 수 있고, 찾은 자수정은 가져갈 수 있습니다.',
    specs: [
      '2인을 위한 스노슈 가이드 투어와 자수정 광산 방문. 이동, 휴게소 간식, 필요한 장비 일체 포함. 방한복과 신발 대여 가능',
      '약 7시간',
      '2명',
      '람피바라, 루오스토. 로바니에미 출발',
      '겨울철, 12월부터 4월까지',
      '영어',
      '유효기간 3년',
    ],
    specLabels: [undefined, '소요 시간', '참가 인원', '위치', '시즌', '가이드 언어', '기프트 카드'],
  },
  'midnight-sun-canoe-rovaniemi': {
    name: '백야 카누 투어 2인, 로바니에미',
    description:
      '로바니에미 근교에서 한밤의 태양 아래 노를 젓는 가이드 동반 저녁 카누 투어로, 마지막에는 모닥불 옆에서 간식을 먹습니다. 출발 전에 가이드가 기본을 알려 주므로 경험이 없어도 됩니다. 투어는 여름인 6월부터 8월까지 진행됩니다.',
    specs: [
      '2인을 위한 카누 가이드 투어. 장비, 노 젓기와 안전 교육, 모닥불 간식, 로바니에미 10 km 이내 이동 포함',
      '약 3시간',
      '2명',
      '로바니에미. 정확한 장소는 예약 시 확정됩니다',
      '여름철, 6월부터 8월까지',
      '영어',
      '유효기간 3년',
    ],
    specLabels: [undefined, '소요 시간', '참가 인원', '위치', '시즌', '가이드 언어', '기프트 카드'],
  },
  'halti-snowmobile-kilpisjarvi': {
    name: '스노모빌로 오르는 할티 정상 2인, 킬피스야르비',
    description:
      '할티는 핀란드에서 가장 높은 지점으로, 노르웨이 국경 바로 위에 있습니다. 킬피스야르비에서 출발하는 스노모빌 가이드 투어는 카시바르시 황야를 지나 국경 표지 303B까지 가며 전체 거리는 약 110 km입니다. 정상에서는 할티 방명록에 이름을 남길 수 있습니다. 투어는 10시부터 16시까지이며 스노모빌 운전 경험이 필요합니다.',
    specs: [
      '2인을 위한 약 110 km 스노모빌 가이드 투어. 스노모빌 복장(방한 점프슈트, 부츠, 헬멧), 따뜻한 주스와 빵, 트레일 이용 허가, 부가가치세와 보험 포함',
      '약 6시간',
      '2명',
      '킬피스야르비',
      '3월 1일부터 5월 10일까지, 날씨에 따라 변동',
      '운전은 18세부터, 썰매 탑승은 8세부터. 운전 경험 필요',
      '유효기간 3년',
    ],
    specLabels: [undefined, '소요 시간', '참가 인원', '위치', '시즌', '연령 제한', '기프트 카드'],
  },
  'fell-ice-fishing-kilpisjarvi': {
    name: '툰투리 얼음낚시 2인, 킬피스야르비',
    description:
      '가이드가 스노모빌로 킬피스야르비 근처 툰투리로 안내합니다(전체 거리 약 15 km). 순록 가죽 위에 앉아 얼음 구멍으로 낚싯줄을 내립니다. 북극곤들매기나 송어가 물 수도 있으며 낚시 도구는 제공됩니다. 투어는 11시 15분부터 14시 15분까지입니다.',
    specs: [
      '2인을 위한 약 15 km 가이드 투어. 스노모빌 복장(방한 점프슈트, 부츠, 헬멧), 낚시 도구, 따뜻한 주스와 빵, 부가가치세와 보험 포함',
      '약 3시간',
      '2명',
      '킬피스야르비',
      '11월 20일부터 5월 10일까지, 날씨에 따라 변동',
      '운전은 18세부터, 썰매 탑승은 8세부터',
      '유효기간 3년',
    ],
    specLabels: [undefined, '소요 시간', '참가 인원', '위치', '시즌', '연령 제한', '기프트 카드'],
  },
  'wilderness-cabin-ivalo': {
    name: '황야 오두막 세 끼 포함 2박 2인, 이발로',
    description:
      '함마스툰투리 황야와 맞닿은 이발로강 강가의 오두막에서 2인이 2박을 보내며, 전용 강변 사우나를 자유롭게 씁니다. 도착일 저녁부터 출발일 점심까지 모든 식사가 포함되며 순록, 생선, 베리 같은 라플란드 식재료로 요리합니다. 이발로 왕복 이동도 포함됩니다. 6월 중순부터 10월 말까지 평일에 이용할 수 있습니다.',
    specs: [
      '황야 오두막에서 2인 2박, 별도 강변 사우나 자유 이용, 모닥불 옆 오후 커피를 포함한 세 끼 식사, 이발로 시내 또는 공항 왕복 이동 포함',
      '2박',
      '2명',
      '이발로강 강가. 정확한 장소는 예약 시 확정됩니다',
      '월요일부터 금요일, 6월 15일부터 10월 30일까지',
      '핀란드어와 영어',
      '유효기간 3년',
    ],
    specLabels: [undefined, '소요 시간', '참가 인원', '위치', '시즌', '언어', '기프트 카드'],
  },
  'katka-snowmobile-levi': {
    name: '캇카 황야 스노모빌 사파리, 레비',
    description:
      '레비에서 캇카툰투리 황야까지 약 30 km를 달리는 스노모빌 사파리입니다. 레트로 소품으로 가득한 오래된 오두막 카페 한히피르티에서 쉬었다가 레비로 돌아옵니다. 스노모빌 경험은 필요 없으며, 기프트 카드는 13세 이상 1인용입니다.',
    specs: [
      '1인을 위한 약 30 km 스노모빌 가이드 사파리, 황야 카페 한히피르티에서 휴식. 방한복 포함',
      '약 2~3시간',
      '13세 이상 1명',
      '레비. 출발지 Leviraitti 13, 시르카',
      '겨울철, 12월부터 3월까지',
      '영어와 핀란드어',
      '유효기간 3년',
    ],
    specLabels: [undefined, '소요 시간', '참가 인원', '위치', '시즌', '언어', '기프트 카드'],
  },
  'foodin-six-mushroom-blend': {
    name: 'Foodin 여섯 가지 버섯 블렌드 40 g',
    description:
      '차가버섯, 영지, 노루궁뎅이, 동충하초, 표고, 잎새버섯을 한 병에 담아 커피나 스무디에 타 먹는 분말입니다. 이 한 병이 기능성 버섯 선반 전체를 대신합니다.',
    specs: ['40 g', '차가버섯, 영지, 노루궁뎅이, 동충하초, 표고, 잎새버섯'],
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
    name: '리틀 미이 굵은 니트 비니',
    description:
      '접단에 리틀 미이가 들어간 두꺼운 니트 비니. 울 혼방이라 일주일 내내 썼다 벗었다 해도 모양이 무너지지 않습니다. 성인 원사이즈이며, 라플란드 날씨를 좋아할 유일한 무민 캐릭터이기도 합니다.',
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
      '아크릴 100%, 플리스 안감',
      '성인, 높이 24 cm, 엄지 위 너비 9.5 cm',
      '무민 공식 제품',
    ],
    specLabels: [undefined, undefined, '라이선스'],
  },
  'nb-moomintroll-love-socks': {
    name: '무민 Love 레트로 삭스',
    description:
      '정강이 부분에 분홍 하트와 무민을 자수로 넣은 하늘색 골지 양말. 프린트가 아니라 자수라 세탁에도 견딥니다. 원사이즈로 EU 36에서 42까지 지원합니다.',
    specs: [
      '면 67%, 폴리에스터 25%, 엘라스토디엔 4%, 나일론 3%, 엘라스테인 1%',
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
      '면 100%, 260 g/m2',
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
      '면 100%, 240 g/m2',
      '유니섹스 스트레이트 핏, M부터 XXL까지',
      '핀란드에서 프린트',
    ],
  },
  'nb-moomintroll-hoodie': {
    name: '무민 후디',
    description:
      '면과 폴리에스터 300 그램 후디를 핀란드에서 프린트했습니다. 유니섹스 스트레이트 핏입니다. 사우나가 식은 뒤 오두막의 저녁에 실제로 걸치고 있는 옷이 바로 이 한 벌입니다.',
    specs: [
      '면 65%, 폴리에스터 35%, 300 g/m2',
      '유니섹스 스트레이트 핏, XS부터 XXL까지',
      '핀란드에서 프린트',
    ],
  },
  'nb-kunnas-kalevala-tote': {
    name: '마우리 쿤나스 개들의 칼레발라 토트백',
    description:
      '핀란드 민족 서사시를 개들로 다시 쓴 개들의 칼레발라에서 가져온 마우리 쿤나스의 그림을 프린트한 면 토트백. 이 가게에서 가장 저렴하면서도 한 나라를 통째로 설명해내는 물건입니다.',
    specs: [
      '면 100%',
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
    name: '무민 이불 커버 세트 150 x 210 cm, Sydänkäpyset',
    description:
      '무민과 스노크메이든이 들어간 GOTS 인증 면 침구 세트. 핀란드어 패턴 이름 Sydänkäpyset는 이 그림이 보여 주는 관계를 그대로 가리키는 말입니다.',
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
      '울 100%',
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
    name: '《개들의 칼레발라》 비니',
    description:
      '마우리 쿤나스는 1992년 «칼레발라»를 개들의 서사시로 다시 그렸고, 이 비니에는 그 그림이 들어가 있습니다. 재생 폴리에스터, 성인 프리 사이즈, 버스가 데워지면 코트 주머니에 밀어 넣을 만큼 가볍습니다.',
    specs: [
      '100% 재생 폴리에스터',
      '성인용, 프리 사이즈',
      '마우리 쿤나스, «개들의 칼레발라»',
    ],
    specLabels: [undefined, undefined, '일러스트'],
  },
  'nb-little-my-mittens': {
    name: '리틀 미이 벙어리장갑',
    description:
      '손등마다 리틀 미이의 얼굴이 들어간 빨간색 니트 벙어리장갑이며, 안감은 아크릴입니다. 신축성이 있어 원 사이즈로 대부분의 사람에게 맞고, 무민 공식 제품입니다.',
    specs: [
      '비스코스 49%, 폴리에스터 31%, 나일론 20%; 안감 아크릴 100%',
      '원 사이즈, 신축성 있음',
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
  'sk-finland-beanie': {
    name: '핀란드 방울 비니 (청백)',
    description:
      '챙에 FINLAND가 들어간 파랑·흰색 방울 비니. 관중석에서 쓰기 시작해 겨울 내내 쓰게 됩니다. 세탁기 30도.',
    specs: [
      'FINLAND',
      '세탁기 30 °C',
    ],
    specLabels: ['문구', '관리'],
  },
  'sk-finland-tube-scarf': {
    name: '핀란드 넥워머',
    description:
      '핀란드 국기 무늬의 이음매 없는 통형 넥워머. 산에서 바람이 내려오면 얼굴까지 끌어올립니다. 7유로가 안 되니 대개 세 개씩 삽니다.',
    specs: [
      '핀란드 국기',
      '손세탁',
    ],
    specLabels: ['무늬', '관리'],
  },
  'sk-little-my-sauna-cushion': {
    name: '에멘도 리틀 미이 사우나 방석',
    description:
      '토베 얀손의 원화를 바탕으로 에멘도가 라이선스 생산한 사우나 방석. 90도의 벤치와 나 사이에 놓이는 것이 바로 이것입니다.',
    specs: [
      '토베 얀손 원화 기반',
      'Moomin Characters 공식 라이선스 제품',
    ],
    specLabels: ['원화', '라이선스'],
  },
  'sk-rento-sauna-hat': {
    name: '렌토 리넨 테리 사우나 모자',
    description:
      '리넨 테리가 맨 윗단의 열기를 두피와 머리카락에서 막아 줍니다. 반대로도 쓰입니다. 2월의 야외 온수통에서는 머리를 따뜻하게 지켜 줍니다. 세탁기 60도.',
    specs: [
      '리넨 테리',
      '세탁기 60 °C',
    ],
    specLabels: [undefined, '관리'],
  },
  'sk-rento-birch-whisk': {
    name: '렌토 건조 자작나무 다발',
    description:
      '말린 자작나무 다발. 사우나 전에 따뜻한 물에 담그면 잎과 향이 돌아옵니다. 다발로 몸을 두드리는 것은 방문객이 늘 묻지만 좀처럼 해 보지 않는 사우나의 절차입니다.',
    specs: [
      '건조 자작나무',
      '사우나 전 물에 담그기',
    ],
    specLabels: [undefined, '사용 전'],
  },
  'sk-suomi-hockey-jersey': {
    name: '핀란드 서포터 저지',
    description:
      '가슴에 SUOMI와 사자 문장이 들어간 파랑·흰색 서포터 셔츠. 실제로 경기장에 입고 가는 핏입니다. 통기성이 좋고 사이즈는 M부터 XXL까지. 2월쯤 되면 핀란드 집집마다 한 벌씩 있는 듯 보입니다.',
    specs: [
      'M–XXL',
      'SUOMI와 사자 문장',
    ],
    specLabels: [undefined, '프린트'],
  },
  'sk-marimekko-unikko-bath-towel': {
    name: '마리메꼬 우니꼬 목욕 타월 70 × 150 cm',
    description:
      '테리 면에 우니꼬, 베이지와 흰색, 70 × 150의 전체 크기. 실은 유기농 면 65%와 재생 면 35%이며, 재생분은 마리메꼬 자체 재단 자투리에서 나옵니다.',
    specs: [
      '70 × 150 cm',
      '테리 면, 유기농 65%와 재생 35%',
      '우니꼬, 베이지와 흰색',
    ],
    specLabels: [undefined, undefined, '무늬'],
  },
  'sk-marimekko-pieni-unikko-apron': {
    name: '마리메꼬 피에니 우니꼬 앞치마',
    description:
      '유기농 면으로 만든 마리메꼬 앞치마로, 피에니 우니꼬 무늬가 플럼, 크랜베리, 오프화이트, 로즈 색으로 들어가 있습니다. 앞주머니, 허리에 묶는 끈, 스냅 단추로 조절하는 목끈이 달려 있습니다.',
    specs: [
      '유기농 면 100%',
      '너비 84 cm, 길이 85 cm',
      '세탁기 60 °C',
      '피에니 우니꼬, 플럼, 크랜베리, 오프화이트, 로즈',
    ],
    specLabels: [undefined, undefined, undefined, '무늬'],
  },
  'fl-taistelevat-metsot': {
    name: 'Taistelevat metsot 새틴 이불커버 세트, 더블',
    description:
      'Ferdinand von Wright는 1886년에 싸우는 큰들꿩을 그렸고, 이 그림은 핀란드 사람이면 누구나 제목을 아는 작품이 되었습니다. Finlayson은 이 그림을 새틴 면에 디지털 방식으로 프린트해 색이 그대로 나옵니다. 이불커버 뒷면은 무지이고, 베개커버는 양면에 프린트가 들어갑니다.',
    specs: [
      '새틴 면',
      '더블 사이즈',
      'Ferdinand von Wright, 싸우는 큰들꿩(Taistelevat metsot, 1886)',
    ],
    specLabels: [undefined, undefined, '작품'],
  },
  'fl-lino-linen-duvet-set': {
    name: 'Lino 리넨 이불커버 세트',
    description:
      '워싱 리넨에 자수 마감을 넣었고, 지의류 녹색과 타르 갈색 두 가지가 있습니다. 리넨은 무겁고 면보다 뻣뻣하게 떨어지며, 세탁할 때마다 낡아가는 대신 부드러워집니다.',
    specs: [
      '리넨',
      '240 × 210 + 50 × 60 cm 또는 150 × 210 + 50 × 60 cm',
      '지의류 녹색 또는 타르 갈색',
    ],
    specLabels: [undefined, undefined, '색상'],
  },
  'fl-elefantti-duvet-set': {
    name: 'Elefantti 이불커버 세트, 진녹색',
    description:
      'Laina Koskela는 1969년 Finlayson이 산업미술학교와 함께 연 디자인 공모전을 위해 Elefantti를 그렸고, 그 뒤로 계속 생산되고 있습니다. 인치당 152올 면 퍼케일이라 피부에 닿을 때 부드럽기보다 시원합니다.',
    specs: [
      '면 퍼케일, 152 TC',
      '240 × 210 + 50 × 60 cm',
      'Laina Koskela, 1969',
    ],
    specLabels: [undefined, undefined, '디자인'],
  },
  'fl-reino-bath-towel': {
    name: 'Reino 목욕 타월 80 × 160 cm',
    description:
      'GOTS 인증 오가닉 면을 가는 합사로 짜서, 걸어 둔 채 축축하게 있지 않고 빨리 마릅니다. 목욕 타월 전체 사이즈이며, 갈색과 분홍 두 가지가 있습니다.',
    specs: [
      '80 × 160 cm',
      '오가닉 면 100%, GOTS 인증',
      '갈색 또는 분홍',
    ],
    specLabels: [undefined, undefined, '색상'],
  },
  // katalogin täydennys 2026-09-05
  'makia-kontio-hoodie': {
    name: 'Makia Kontio 후드 스웨트셔츠',
    description:
      '봉제 후에 염색한 100퍼센트 유기농 면 레귤러 핏 후드입니다. 제품 염색은 원사 염색보다 색이 깊고 촉감이 부드러우며, 빨아도 살짝 바랜 듯한 느낌이 그대로 남습니다.',
    specs: [
      '100 % 유기농 면, 제품 염색',
      'S부터 XXL까지',
    ],
  },
  'makia-trademark-hoodie': {
    name: 'Makia Trademark 후드 스웨트셔츠',
    description:
      'Makia에서 가장 담백한 후드: 레귤러 핏, 100퍼센트 유기농 면, 가슴의 작은 트레이드마크. 아침 모닥불에서 저녁 사우나 베란다까지 같은 옷 한 벌로 지내는 오두막 일주일에 챙겨 갈 옷입니다.',
    specs: [
      '100 % 유기농 면',
      'S부터 XXL까지',
    ],
  },
  'makia-moray-zip-knit': {
    name: 'Makia Moray 집업 니트 가디건',
    description:
      '100퍼센트 메리노 울로 짠 레귤러 핏 집업 가디건입니다. 메리노는 두껍지 않게 따뜻하고 안쪽부터 마르기 때문에, 산지 트레킹에서는 셸 재킷 아래 레이어로, 따뜻한 카페에서는 단독으로 입기 좋습니다.',
    specs: [
      '100 % 메리노 울',
      'S부터 XXL까지',
    ],
  },
  'makia-form-jacket': {
    name: 'Makia Form 겨울 재킷',
    description:
      '재생 폴리에스터 충전재를 넣은 레귤러 핏 롱 겨울 재킷입니다. 소매 끝 안쪽의 숨겨진 립이 바람을 막아 주는데, 1월 로바니에미의 거리에서는 어떤 기능 목록보다 그것이 중요합니다.',
    specs: [
      '재생 폴리에스터 충전재, 소매 끝 숨은 립',
      'S부터 XXL까지',
    ],
  },
  'makia-martin-beanie': {
    name: 'Makia Martin 메리노 비니',
    description:
      '작은 패치가 달린 100퍼센트 메리노 울 비니로 핀란드에서 짰습니다. Makia로 들어가는 가장 저렴한 입구이자, 10월부터 4월까지 매일 쓰게 될 가능성이 가장 큰 제품입니다.',
    specs: [
      '100 % 메리노 울',
      '핀란드 제조',
      '원 사이즈',
    ],
  },
  'makia-mari-balaclava': {
    name: 'Makia Mari 니트 바라클라바',
    description:
      '울, 폴리에스터, 알파카, 엘라스테인 혼방으로 짠 바라클라바입니다. 귀, 목, 뺨을 한 번에 덮어 주며, 그것이 스노모빌 투어와 엉뚱한 이유로 기억에 남는 스노모빌 투어의 차이입니다.',
    specs: [
      '울, 폴리에스터, 알파카, 엘라스테인 혼방',
      '원 사이즈',
    ],
  },
  'halti-pehmee-merino-beanie': {
    name: 'Halti Pehmee 메리노 비니',
    description:
      '이중 립 밴드의 100퍼센트 메리노 울 시티 비니로 핀란드에서 만들었습니다. Halti는 이것을 부드럽다는 뜻의 Pehmee라 부르며, 스키 모자를 쓰면 길을 잘못 든 것처럼 보이는 날을 위한 비니입니다.',
    specs: [
      '100 % 메리노 울',
      '핀란드 제조',
      '뉘어서 건조',
      '원 사이즈',
    ],
  },
  'halti-rockmoon-fleece-hoodie': {
    name: 'Halti Rockmoon 남성 후드 플리스',
    description:
      '양면 기모 스트레치 원단의 따뜻한 후드 플리스로, 추위가 가장 먼저 들어오는 후드와 어깨에는 방풍 마이크로 원단을 댔습니다. 산에서는 셸 아래에, 오두막 주변에서는 단독으로.',
    specs: [
      '양면 기모 스트레치 플리스, 후드와 어깨에 방풍 마이크로 원단',
      'S부터 XXXL까지',
    ],
  },
  'halti-viiri-fleece-gloves': {
    name: 'Halti Viiri 플리스 장갑',
    description:
      '방풍 Stormwall 플리스로 만든 45그램의 가벼운 장갑입니다. 손바닥에는 실리콘 그립 프린트, 엄지와 검지 끝은 터치스크린 대응이라 맨손 없이 오로라 사진을 찍을 수 있습니다.',
    specs: [
      'Stormwall 플리스 100 % 폴리에스터, 손바닥 65 % 폴리에스터, 32 % 폴리아미드, 3 % 엘라스테인',
      '45 g',
      '엄지와 검지',
      '최고 30 °C 섬세 세탁',
    ],
    specLabels: [undefined, undefined, '터치스크린', undefined],
  },
  'nb-moomin-classics-beanie': {
    name: '무민 Classics 비니',
    description:
      'Moomin Classics 컬렉션의 성인용 비니로, 재생 폴리에스터 100퍼센트에 브라운, 원 사이즈입니다. 무민 공식 제품이라는 점이 시장 좌판 제품과 다른 점입니다.',
    specs: [
      '재생 폴리에스터 100%',
      '성인용, 원 사이즈',
      '브라운',
    ],
  },
  'nb-snufkin-mens-socks': {
    name: '스너프킨 남성 양말',
    description:
      '스너프킨이 그려진 남성 양말, EU 40부터 45, 면 60퍼센트에 신축성을 위한 폴리에스터, 나일론, 엘라스테인. 이 사이트에서 가장 저렴한 무민 선물이면서 진열이 아니라 신게 되는 제품입니다.',
    specs: [
      'EU 40-45',
      '면 60 %, 폴리에스터 33 %, 나일론 4 %, 엘라스테인 2 %, 엘라스토디엔 1 %',
    ],
  },
  'nb-hattifatteners-retro-socks': {
    name: '해티패트너 여성 레트로 양말',
    description:
      '해티패트너가 그려진 레트로 스타일 양말, EU 36부터 42, 면 67퍼센트. 한 사이즈로 대부분에게 맞을 만큼 잘 늘어나며, 양말 서랍이 열려 있으면 무민 독자가 가장 먼저 집어 드는 한 켤레입니다.',
    specs: [
      'EU 36-42',
      '면 67 %, 폴리에스터 25 %, 엘라스토디엔 4 %, 나일론 3 %, 엘라스테인 1 %',
    ],
  },
  'sk-suomi-propeller-cap': {
    name: 'Suomi 응원 프로펠러 모자',
    description:
      '관중석, 팬 존, 펍의 아이스하키 결승전을 위한 파란색과 흰색의 프로펠러 모자입니다. 진지한 모자는 아니지만, 핀란드가 경기하는 밤에는 바로 그것이 핵심입니다.',
    specs: [
      '파란색과 흰색',
    ],
  },
  'sk-muurla-moomin-lantern-tahtihetki': {
    name: 'Muurla 무민 랜턴 Tähtihetki 18 cm',
    description:
      '금색 디테일이 들어간 Muurla Tähtihetki 시리즈의 수제 무연 유리 랜턴으로, 지름 15.5 cm, 높이 18 cm입니다. 촛불 랜턴으로도, 계절 간식을 담는 볼로도, 작은 꽃다발용 화병으로도 씁니다.',
    specs: [
      'Ø 15.5 cm, 높이 18 cm',
      '수제 무연 유리',
      '손세척',
    ],
  },
  'sk-hukka-soapstone-candle': {
    name: 'Hukka Jätkänkynttilä 돌 티라이트 홀더',
    description:
      '벌목꾼들이 눈 위에서 피우던 쪼갠 통나무 불, jätkänkynttilä 모양의 돌 티라이트 홀더입니다. 지름 56 mm, 높이 100 mm, 310그램, 40 mm 티라이트용. 차가운 돌 위의 살아 있는 불을 실내에서.',
    specs: [
      'Ø 56 x 100 mm, Ø 40 mm 티라이트용',
      '0.31 kg',
      '홀더 1개',
    ],
  },
  'sk-muurla-moomin-enamel-mug-lumipyry': {
    name: 'Muurla 무민 에나멜 머그 Lumipyry 3.7 dl',
    description:
      '탄소강 심에 이중 에나멜을 입힌 3.7 dl 머그로, 눈보라 장면 Lumipyry가 프린트되어 있습니다. 뜨거운 음료와 찬 음료 모두 담을 수 있고, 식기세척기와 캠프파이어는 되지만 전자레인지는 안 됩니다.',
    specs: [
      '3.7 dl',
      '탄소강에 이중 에나멜',
      '식기세척기 사용 가능, 전자레인지 불가',
    ],
  },
  'sk-arabia-moomin-pitcher-moominhouse': {
    name: 'Arabia 무민 피처 1.0 l, 무민하우스',
    description:
      '무민파파가 직접 지었고 밤에도 문을 잠그지 않는 둥근 난로 모양의 집, 무민하우스가 그려진 Arabia의 1리터 피처입니다. 여름 식탁에서 주스에 벌레가 들어가지 않게 막아 주는 도자기 뚜껑이 딸려 있습니다.',
    specs: [
      '1.0 l',
      '도자기 뚜껑 포함',
    ],
    specLabels: [undefined, '뚜껑'],
  },
  'sk-moomin-duvet-set-merella': {
    name: '무민 이불 커버 세트 140 x 200 cm, Merellä',
    description:
      '바다 위의 무민 가족이 그려진 면 이불 커버와 베개 커버로, 이불 커버 140 x 200 cm, 베개 커버 50 x 70 cm, 지퍼 여밈입니다. 프린트된 면 침구가 늘 그렇듯 첫 사용 전에 세탁하세요.',
    specs: [
      '이불 커버 140 x 200 cm, 베개 커버 50 x 70 cm',
      '100 % 면',
      '지퍼',
    ],
    specLabels: [undefined, undefined, '여밈'],
  },
  'sk-arabia-moomintroll-mini-figurine': {
    name: 'Arabia 무민트롤 미니 피규어',
    description:
      '높이 약 6 cm의 수제 도자기 무민트롤로, 1990년대에 툴리키 피에틸래가 디자인했고 전용 선물 상자에 담겨 판매됩니다. 피규어는 시리즈로 모으기 때문에 하나는 안전한 선물이고 둘은 습관이 됩니다.',
    specs: [
      '높이 약 6 cm',
      '수제 도자기',
      '툴리키 피에틸래, 1990년대',
    ],
    specLabels: [undefined, undefined, '디자인'],
  },
  'sk-arabia-snorkmaiden-mini-figurine': {
    name: 'Arabia 스노크메이든 미니 피규어',
    description:
      '툴리키 피에틸래의 1990년대 시리즈에서 나온 높이 약 6 cm의 수제 도자기 스노크메이든으로, 전용 선물 상자에 담겨 있습니다. 무민트롤과 짝을 이루면 둘은 책 표지에서처럼 창턱에 나란히 섭니다.',
    specs: [
      '높이 약 6 cm',
      '수제 도자기',
      '툴리키 피에틸래, 1990년대',
    ],
    specLabels: [undefined, undefined, '디자인'],
  },
  'sk-lapin-puukko-gift-box': {
    name: '라플란드 푸코 나이프 칼집 포함, 선물 상자',
    description:
      '칼집이 딸린 라플란드 스타일 푸코로, 선물 상자에 담아 배송됩니다. 상점은 이것을 숲 나들이와 일상 작업을 위한 칼로, 그리고 교체되기보다 물려주게 되는 종류의 물건으로 소개합니다.',
    specs: [
      '칼집과 선물 상자',
    ],
    specLabels: ['포함'],
  },
  'sk-loimu-sauna-thermometer': {
    name: 'Loimu 사우나 온도계, 자작나무',
    description:
      '선명한 눈금판이 달린 자작나무 프레임의 사우나 온도계입니다. 첫 국자의 물을 끼얹기 전에 손님이 묻는 유일한 질문에 답해 주며, 보일러 옆이 아니라 통나무 벽에 어울리는 모습입니다.',
    specs: [
      '자작나무',
    ],
  },
  'sk-helsingin-villasukkatehdas-wool-socks': {
    name: 'Helsingin Villasukkatehdas 울 양말',
    description:
      '핀란드 유일의 전통 울 양말 공장에서 1950년대 기계로 헬싱키에서 짠 방모 울 양말입니다. 뮬징 프리 울 70퍼센트를 얌새에서 방적하고 퀴뢰스코스키에서 염색했으며, 여러 사이즈와 나무껍질, 이끼, 지의류, 밤의 이름을 딴 네 가지 색상이 있습니다.',
    specs: [
      '울 70 % (뮬징 프리), 폴리아미드 30 %',
      '헬싱키에서 편직, 울은 얌새에서 방적하고 퀴뢰스코스키에서 염색',
      '여러 사이즈, 네 가지 색상',
    ],
  },
  'sk-halva-salmiakkikalat': {
    name: 'Halva Salmiakkikalat 짠 감초 물고기 230 g',
    description:
      'Halva의 물고기 모양 살미아키 사탕 230그램으로, 핀란드의 모든 자동차 글로브 박스에 들어 있는 그 봉지입니다. 단단한 씹는 맛, 강렬한 짠 감초, 그리고 진짜 핀란드를 맛보고 싶다는 방문객에게 가장 먼저 건네는 것입니다.',
    specs: [
      '230 g',
    ],
  },
  'sk-kouvolan-lakritsi-500g': {
    name: 'Kouvolan Lakritsi 감초 조각 500 g',
    description:
      '1945년에 태어나 1960년 영국 감초 전문가가 다듬은 레시피로 만든 코우볼라의 부드러운 감초 조각 반 킬로입니다. 뿌리 맛을 감추려고 아무것도 넣지 않으면 담백한 감초는 이런 맛이 납니다.',
    specs: [
      '500 g',
      '1945년 레시피, 1960년 조정',
    ],
    specLabels: [undefined, '레시피'],
  },
  'sk-fazer-omar-chocolate-bar': {
    name: 'Fazer Omar 초콜릿 바 180 g',
    description:
      'Omar 60주년을 위해 만든 한정 180그램 바: 1966년부터 판매된 부드럽고 크리미한 Omar 토피를 코코아 30퍼센트 이상의 Fazer 밀크초콜릿에 넣었습니다. 한정 기간에만 판매합니다.',
    specs: [
      '180 g',
      '코코아 30 % 이상의 밀크초콜릿',
      '60주년 한정판',
    ],
    specLabels: [undefined, '코코아', '판매'],
  },
  'sk-fazer-salty-suffeli-puffi': {
    name: 'Karl Fazer Salty Suffeli Puffi 초콜릿 바 160 g',
    description:
      '신선한 우유로 만든 Fazer 밀크초콜릿에 바삭하고 짭짤달콤한 Suffeli 옥수수 퍼프를 넣었습니다. 160그램, 코코아 30퍼센트 이상, 짠맛과 단맛 사이에서 결정하지 못하는 사람을 위한 답입니다.',
    specs: [
      '160 g',
      '코코아 30 % 이상의 밀크초콜릿',
    ],
    specLabels: [undefined, '코코아'],
  },
  'sk-tyrkisk-peber-chewy': {
    name: 'Fazer Tyrkisk Peber Chewy 살미아키 파스틸 38 g',
    description:
      'Tyrkisk Peber의 매운 살미아키를 딱딱한 껍질 대신 새로운 부드러운 츄어블 파스틸로 만들었습니다. 상점이 2026년 8월에 등록한 38그램 포켓 팩으로, 살미아키와 자극을 한 입에 원하는 사람을 위한 제품입니다.',
    specs: [
      '38 g',
    ],
  },
  'sk-tyrkisk-peber-sour-foams': {
    name: 'Fazer Tyrkisk Peber Sour Foams 폼 캔디 150 g',
    description:
      '은은한 Tyrkisk Peber의 매운맛과 새콤한 키위 딸기, 레몬 라임 맛이 나는 부드러운 폼 캔디 150그램입니다. 페퍼 감초 가족으로 들어가는 순한 입구이자, 취향이 섞인 무리에서 가장 먼저 여는 봉지입니다.',
    specs: [
      '150 g',
    ],
  },
  'sk-marianne-toffee-rae': {
    name: 'Fazer Marianne Toffee 초콜릿 드롭 150 g',
    description:
      'Marianne 드롭 시리즈의 토피 버전: 코코아 28퍼센트 이상의 밀크초콜릿 심을 윤기 나고 바삭한 껍질이 감싸며, 다시 밀봉할 수 있는 150그램 봉지에 담겼습니다. 그때까지 남아 있다면 베이킹용으로도 좋습니다.',
    specs: [
      '150 g',
      '코코아 28 % 이상의 밀크초콜릿',
      '다시 밀봉 가능한 봉지',
    ],
    specLabels: [undefined, '코코아', '포장'],
  },
  'sk-fasupala-lakritsi': {
    name: 'Fazer Fasupala Lakritsi 웨이퍼 비스킷 199 g',
    description:
      '밀크초콜릿 맛 코팅 아래 감초 맛 필링이 든 한입 크기 웨이퍼 199그램으로, 팜유는 쓰지 않았습니다. 핀란드인들이 이미 상자째 먹는 비스킷의 감초 버전이며, 상점이 2026년 8월에 등록했습니다.',
    specs: [
      '199 g',
      '팜유 무첨가',
    ],
    specLabels: [undefined, '지방'],
  },
  'sk-finnish-flavours-cloudberry-jam': {
    name: 'Finnish Flavours 프리미엄 클라우드베리 잼 250 g',
    description:
      '핀란드산 클라우드베리 75퍼센트와 설탕 20퍼센트로 만든 잼 250그램입니다. 클라우드베리는 7월 말 라플란드의 늪지에서 익고 대규모로 재배할 수 없기 때문에, 한 병 값이 초콜릿 두 봉지 값과 같습니다.',
    specs: [
      '250 g',
      '핀란드산 클라우드베리 75 %, 설탕 20 %',
    ],
  },
  'sk-lapin-liha-smoked-reindeer-soup': {
    name: 'Lapin Liha 훈제 순록 수프 400 g',
    description:
      '온훈과 냉훈 순록 고기가 든 크리미한 수프 400그램으로, Lapin Liha가 만들었습니다. 냄비에 데우기만 하면 됩니다. 여행 가방에 들어가는 포장에 담긴 라플란드 오두막 점심의 맛입니다.',
    specs: [
      '400 g',
      '온훈 순록 3 %와 냉훈 순록 3 %',
      '냄비에 데우기',
    ],
    specLabels: [undefined, undefined, '조리'],
  },
  'sk-vaasan-ruispalat-5pack': {
    name: 'Vaasan Ruispalat 호밀빵 660 g 12개',
    description:
      'Vaasan Ruispalat은 100퍼센트 핀란드산 곡물을 진짜 사워도우로 구운 통호밀빵입니다. 660그램 봉지에 12개가 들어 있습니다. Vaasan은 이 빵을 핀란드에서 가장 인기 있는 빵이라고 소개하며, 식이섬유가 12퍼센트입니다.',
    specs: [
      '660 g, 12개',
      '통호밀이 곡물의 87 %, 식이섬유 12 %',
    ],
  },
  'sk-poikain-parhaat-freeze-dried-blueberry': {
    name: 'Poikain Parhaat 동결건조 블루베리 15 g',
    description:
      '핀란드 숲의 블루베리를 통째로 동결건조한 것, 그 외에는 아무것도 없는 15그램. 여행 가방에서는 무게가 느껴지지 않고 늪지의 8월 맛이 납니다. 무유당, 글루텐 프리, 비건, 설탕과 보존료 무첨가.',
    specs: [
      '15 g',
      '100 % 핀란드산 동결건조 블루베리',
      '무유당, 글루텐 프리, 비건, 설탕 무첨가, 보존료 무첨가',
    ],
    specLabels: [undefined, undefined, '식단'],
  },
  'rj-arctic-warriors-blueberry-powder': {
    name: 'Arctic Warriors 블루베리 파우더 45 g',
    description:
      '핀란드산 블루베리를 즙째 통째로 말려 갈고 아무것도 넣지 않은 45그램입니다. 죽, 요거트, 스무디에 한 스푼. 같은 열매를 여기서는 EU 역내로 배송하는 Ruohonjuuri를 통해 판매합니다.',
    specs: [
      '45 g',
      '100 % 핀란드산 블루베리, 즙째 통째로 건조',
    ],
  },
  'rj-poikain-parhaat-blueberry-lemonade': {
    name: 'Poikain Parhaat 블루베리 레모네이드 0.33 l',
    description:
      '탐페레 베흐마이넨에서 인공 향료나 색소 없이 진짜 재료로 만든 유기농 블루베리 레모네이드, 0.33리터 병입니다. 핀란드 시식 테이블에서 살미아키 옆에 놓을 청량음료입니다.',
    specs: [
      '0.33 l',
      '탐페레 베흐마이넨 제조',
      '유기농, 인공 향료나 색소 없음',
    ],
    specLabels: [undefined, undefined, '첨가물'],
  },
  'rj-nordic-koivu-birch-sap': {
    name: 'Nordic Koivu 자작나무 수액 500 ml',
    description:
      '나무가 뿌리에 저장한 물을 끌어올리는 봄에 채취한 자작나무 수액을 열처리나 보존료 없이 나무에서 바로 병에 담은 500 ml입니다. 은은하게 달고, 대부분은 차갑고 깨끗한 물 맛입니다.',
    specs: [
      '500 ml',
      '열처리 없음, 보존료 없음',
    ],
    specLabels: [undefined, '가공'],
  },
  'rj-kaino-spruce-sprout-sparkling-075': {
    name: 'KAINO Drinks 가문비나무 새순 유기농 스파클링 0.75 l',
    description:
      '핀란드 가문비나무의 연한 5월 새순으로 향을 낸 무알코올 유기농 스파클링 음료, 0.75리터 병입니다. 탐페레 베흐마이넨에서 만들었으며, 모두가 술을 마시지는 않는 파티의 건배를 위한 것입니다.',
    specs: [
      '0.75 l',
      '무알코올, 유기농',
      '탐페레 베흐마이넨 제조',
    ],
    specLabels: [undefined, '알코올', undefined],
  },
  'rj-yrttipaja-chaga-powder': {
    name: 'Yrttipaja 차가버섯 파우더 35 g',
    description:
      '자작나무 줄기에 자라는 검은 버섯 차가를 갈아 차로 우리는 파우더입니다: 물 1리터에 큰술 하나, 10분 이상 끓여서 거릅니다. 35그램, 덩어리를 사기 전에 파쿠리를 맛보는 가장 저렴한 방법입니다.',
    specs: [
      '35 g',
      '물 1리터에 큰술 1, 10분 이상 끓여서 거르기',
    ],
    specLabels: [undefined, '사용법'],
  },
  'rj-forestly-mushroom-chips-chili': {
    name: 'Forestly Foods 버섯 칩, 칠리 50 g',
    description:
      '유기농으로 재배한 표고버섯을 부드럽게 익혀 칠리, 소금, 후추로 간한 바삭한 칩 50그램입니다. 봉지에 담긴 감칠맛으로, 소파에서 먹거나 수프 위에 부숴 올립니다.',
    specs: [
      '50 g',
      '유기농 재배 표고버섯, 칠리, 소금, 후추',
    ],
  },
  // katalogin täydennys 2026-09-05
  'sk-muurla-moomin-80v-tray': {
    name: 'Muurla 무민 80주년 트레이 27 x 20 cm',
    description:
      'Muurla 무민 80주년 시리즈의 27 x 20 cm 트레이로, 식기세척기 사용이 가능합니다. 머그 두 개와 비스킷 접시를 부엌에서 소파까지 나르기 좋은 크기이며, 놓고 나면 식탁의 일부처럼 보입니다.',
    specs: [
      '27 x 20 cm',
      '식기세척기 사용 가능',
    ],
  },
  'sk-muurla-moomin-glass-box-yhdessa': {
    name: 'Muurla 무민 유리 상자 Yhdessä 11.5 cm',
    description:
      'Muurla의 Yhdessä(함께) 미니 시리즈의 하트 모양 유리 상자로, 11.5 x 10 x 5.5 cm, 손세척, 판매용 포장에 담겨 배송됩니다. 반지, 접은 쪽지, 첫 유치 같은 작은 보물을 위한 것입니다.',
    specs: [
      '11.5 x 10 x 5.5 cm',
      '손세척',
      '판매용 포장',
    ],
    specLabels: [undefined, undefined, '포장'],
  },
  // katalogin täydennys 2026-09-05
  'sk-aurora-borealis-reindeer-tealight': {
    name: 'Aurora Borealis 순록 티라이트 홀더 10 cm',
    description:
      '순록 모양의 광택 금속 티라이트 홀더로 높이 10 cm입니다. 12월 창턱에 놓을 작은 라플란드 소품이며, 완충 봉투에 넣어 부칠 만큼 가볍습니다.',
    specs: [
      '높이 10 cm',
      '광택 금속',
      '티라이트',
    ],
    specLabels: [undefined, undefined, '용도'],
  },
  'sk-muurla-moomin-bottle-05l-marjat': {
    name: 'Muurla 무민 유리병 0.5 l, 베리',
    description:
      '밀폐되는 스윙 마개와 베리 프린트가 있는 소다 유리 0.5리터 병으로, 식기세척기 사용이 가능합니다. Muurla는 주스와 샐러드 드레싱용으로 만들었고, 0.5리터는 냉장고 문에 딱 맞는 크기입니다.',
    specs: [
      '0.5 l',
      '소다 유리, 스윙 마개',
      '식기세척기 사용 가능',
    ],
  },
  'nb-hattifatteners-cushion': {
    name: '해티패트너 쿠션',
    description:
      '한 줄로 늘어선 해티패트너 모양의 폴리에스터 쿠션, 45~75 x 30~50 x 10 cm, 손세척만 가능. 진공 포장으로 도착해 원래 모양으로 부풀어 오르기까지 하루가 걸리는데, 해티패트너가 가만히 있는 유일한 순간입니다.',
    specs: [
      '폴리에스터',
      '45–75 x 30–50 x 10 cm',
      '손세척만 가능',
      '진공 포장, 개봉 후 원래 모양으로 복원',
    ],
    specLabels: [undefined, undefined, undefined, '포장'],
  },
  'sk-emendo-moomin-sauna-seat-cover': {
    name: 'Emendo 무민 러브 사우나 시트 커버 150 x 50 cm, 브라운',
    description:
      '토베 얀손의 원화가 들어간 리넨과 면 혼방 사우나 시트 커버, 150 x 50 cm, 공식 라이선스 제품입니다. 리넨은 습기를 흡수하고 강한 세탁을 견디므로 벤치에 깔거나 등 뒤에 세워 씁니다.',
    specs: [
      '150 x 50 cm',
      '리넨 60 %, 면 40 %',
      'Moomin Characters 공식 제품',
    ],
    specLabels: [undefined, undefined, '라이선스'],
  },
  'sk-rento-pino-sauna-seat-cover': {
    name: 'Rento Pino 사우나 시트 커버 50 x 150 cm, 그레이',
    description:
      '자카드 직조 면 사우나 시트 커버, 50 x 150 cm, Anna Säteri가 Rento를 위해 디자인했습니다. 가벼운 면은 뜨거운 벤치 위에서 시원하게 느껴지고 땀을 흡수하며 빨리 마르고, 무늬는 세탁 후에도 남습니다.',
    specs: [
      '50 x 150 cm',
      '자카드 직조 면',
      'Anna Säteri',
    ],
    specLabels: [undefined, undefined, '디자인'],
  },
  'sk-moomin-chocolate-chip-biscuit-tin': {
    name: '무민 초콜릿 칩 비스킷 틴 200 g',
    description:
      '무민 틴에 담긴 미니 초콜릿 칩 비스킷 200그램으로, 틴은 비스킷을 다 먹은 뒤 보관함으로 남습니다. 초콜릿 조각은 비스킷의 16퍼센트이며 코코아 고형분이 40퍼센트 이상입니다.',
    specs: [
      '200 g',
      '초콜릿 조각 16 %, 초콜릿의 코코아 고형분 40 % 이상',
      '수집용 틴, 보관함으로 재사용 가능',
    ],
    specLabels: [undefined, undefined, '포장'],
  },
  'sk-paulig-cafe-new-york-beans': {
    name: 'Paulig Café New York 커피 원두 450 g',
    description:
      '중강배전 원두 커피 450그램으로, 라틴아메리카 아라비카에 단맛을 더하는 브라질 원두를 섞어 과일 향이 감돕니다. Paulig는 1876년부터 핀란드에서 커피를 볶아 왔고, 핀란드인은 1인당 커피를 세계에서 가장 많이 마십니다.',
    specs: [
      '450 g',
      '중강배전, 홀빈',
      '라틴아메리카 아라비카와 브라질 원두',
    ],
    specLabels: [undefined, '로스팅', undefined],
  },
  // katalogin täydennys 2026-09-05
  'rj-korpihilla-spruce-sprout-sparkling-750': {
    name: 'Korpihilla 가문비나무 새순 스파클링 750 ml',
    description:
      '핀란드 라플란드에서 가문비나무 새순으로 손수 만든 무알코올 스파클링 음료, 750 ml. 2005년 잡지 Viisi Tähteä가 핀란드 최고의 음료로 뽑았고, 건배에서 숲의 맛이 나야 할 때 여전히 여는 한 병입니다.',
    specs: [
      '750 ml',
      '핀란드 라플란드에서 수제',
      '무알코올',
      '2005년 핀란드 최고의 음료, 잡지 Viisi Tähteä',
    ],
    specLabels: [undefined, undefined, '알코올', '수상'],
  },
  // katalogin täydennys 2026-09-05
  'rj-raitaniemi-sea-buckthorn-powder': {
    name: 'Marjatila Raitaniemi 비타민나무 열매 파우더 100 g',
    description:
      '핀란드 베리 농장에서 씨째 통째로 말려 갈아 만든 비타민나무 열매 파우더 100그램입니다. 한 티스푼이 생과 1데시리터에 해당하며, 수분 3~5퍼센트까지 건조해 몇 년을 보관할 수 있습니다.',
    specs: [
      '100 g',
      '비타민나무 열매, 씨째 통째로 분쇄',
      '하루 1~3티스푼을 죽이나 요거트에',
      '파우더 1티스푼은 생과 1 dl에 해당',
    ],
    specLabels: [undefined, undefined, '복용량', '환산'],
  },
  'rj-raitaniemi-crowberry-powder': {
    name: 'Marjatila Raitaniemi 크로우베리 파우더 100 g',
    description:
      '야생에서 딴 핀란드산 크로우베리를 통째로 말려 갈고 아무것도 넣지 않은 100그램입니다. 크로우베리는 라플란드 산비탈을 뒤덮는 검은 열매로 상점에 거의 나오지 않으니, 대부분의 사람에게는 이것이 맛볼 수 있는 가장 가까운 길입니다.',
    specs: [
      '100 g',
      '100 % 핀란드산 크로우베리, 통째로 건조 후 분쇄',
      '없음, 보존료 무첨가',
    ],
    specLabels: [undefined, undefined, '첨가물'],
  },
  // katalogin täydennys 2026-09-05
  // katalogin täydennys 2026-09-05
  'sk-poikain-parhaat-puolukka': {
    name: 'Poikain Parhaat 동결건조 링곤베리 15 g',
    description:
      '핀란드산 링곤베리를 통째로 동결건조한 것, 그 외에는 아무것도 없는 15그램. 동결건조는 색과 식감, 비타민과 식이섬유를 지키고, 봉지는 여행 가방에서 무게가 느껴지지 않습니다. 무유당, 글루텐 프리, 비건, 설탕과 보존료 무첨가.',
    specs: [
      '15 g',
      '100 % 핀란드산 동결건조 링곤베리',
      '무유당, 글루텐 프리, 비건, 설탕 무첨가, 보존료 무첨가',
    ],
    specLabels: [undefined, undefined, '식단'],
  },
  // Talvi- ja joulutuotteet 6.11.2026
  'iittala-glass-baubles-red': {
    name: '이딸라 유리 크리스마스 볼 80 mm, 레드, 5개',
    description:
      '입으로 불어 만든 이딸라의 빨간 유리 크리스마스 볼 5개 세트로, 지름은 각각 80 mm입니다. 실크 리본으로 매달아 겁니다. 하나하나 입으로 불어 만들기 때문에 모양과 빨간색의 색감이 볼마다 조금씩 다릅니다. 트리나 꽃병에 꽂은 나뭇가지에 걸거나 테이블 장식으로 활용해 보세요.',
    specs: [
      '크리스마스 볼 5개',
      '지름 8 cm',
      '입으로 불어 만든 유리',
      '레드',
      '총중량 0.706 kg',
      '32741-01, EAN 6411923679978',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, '품번과 EAN'],
  },
  'iittala-toikka-annual-bird-2026': {
    name: '이딸라 Birds by Toikka 2026 Lakla',
    description:
      'Lakla는 이딸라 Birds by Toikka 시리즈의 2026년 애뉴얼 버드입니다. 오이바 토이까가 디자인한 주황색 유리 새로, 입으로 불어 만듭니다. 이딸라는 해마다 고유한 무늬와 색 조합을 지닌 새 애뉴얼 버드를 내놓으며, 애뉴얼 버드는 수집가들 사이에서 인기를 얻었습니다. 핀란드의 이딸라 유리 공장에서 유리 장인이 한 마리씩 불어 만들기 때문에 작은 기포나 두께 차이가 있을 수 있습니다.',
    specs: [
      '길이 22 cm, 너비 10 cm, 높이 14 cm',
      '입으로 불어 만든 유리',
      '오렌지',
      '핀란드 이딸라 유리 공장에서 제조',
      '젖은 천으로 닦아서 관리',
      '657373-01, EAN 6411923689199',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, '품번과 EAN'],
  },
  'marimekko-siirtolapuutarha-baubles': {
    name: '마리메꼬 시르톨라푸타르하 크리스마스 볼 2025, 2개',
    description:
      '마리메꼬의 2025년 시르톨라푸타르하 볼은 마이야 로우에카리의 패턴을 입힌 석기 크리스마스 볼 한 쌍입니다. 패턴 색상은 화이트, 블랙, 그린입니다. Siirtolapuutarha는 핀란드어로 시민 텃밭을 뜻합니다. 볼 하나는 너비 7 cm, 높이 7 cm이고, 마리메꼬는 트리뿐 아니라 창가에 걸어 두는 것도 권합니다.',
    specs: [
      '크리스마스 볼 2개',
      '너비 7 cm, 높이 7 cm',
      '석기',
      '화이트, 블랙, 그린',
      '마이야 로우에카리',
      '650181-01, EAN 6411255039983',
    ],
    specLabels: [undefined, undefined, undefined, undefined, '디자이너', '품번과 EAN'],
  },
  'arabia-moomin-love-baubles': {
    name: '아라비아 무민 볼 Love, 골드, 5 cm, 2개',
    description:
      '아라비아의 5 cm 비트로 포슬린 무민 크리스마스 볼 두 개로, 토베 얀손의 Love 그림이 들어가 있습니다. 무민트롤과 스노크메이든이 함께 있는 이 그림은 사랑과 가까운 관계를 상징하게 되었습니다. 트리나 장식용 나뭇가지에 걸거나 특별한 날의 식탁 장식으로 쓰세요.',
    specs: [
      '크리스마스 볼 2개',
      '너비 5 cm, 높이 5 cm',
      '비트로 포슬린',
      '골드',
      '토베 얀손',
      '699561-01, EAN 6411801029079',
    ],
    specLabels: [undefined, undefined, undefined, undefined, '원화', '품번과 EAN'],
  },
  'sk-muurla-moomin-bauble-pyjamas': {
    name: '무울라 무민 유리 크리스마스 볼 9 cm, 파자마',
    description:
      '무울라 무민 컬렉션의 수공예 유리 크리스마스 볼로, 지름 9 cm에 파자마 그림이 들어가 있습니다. 무울라는 이 장면을 촛불 아래에서 파자마 차림으로 느긋하게 쉬는 모습이라고 설명합니다. 걸 때 쓰는 새틴 리본이 함께 들어 있습니다.',
    specs: [
      '지름 9 cm',
      '유리, 수공예',
      '새틴 리본 포함',
    ],
    specLabels: [undefined, undefined, '걸이'],
  },
  'sk-muurla-moomin-baubles-snow': {
    name: '무울라 무민 볼 5 cm, Lumipyry, 4개',
    description:
      '지름 5 cm의 무울라 무민 크리스마스 볼 4개 세트로, Lumipyry(눈보라) 그림과 걸이용 새틴 리본이 들어 있습니다. 무울라는 이 그림을 눈보라가 막 지나간 뒤의 풍경이라고 설명합니다. 눈이 높이 쌓이고 자연은 잠들어 있으며, 이제 눈 랜턴을 쌓을 때입니다.',
    specs: [
      '지름 5 cm',
      '크리스마스 볼 4개, 새틴 리본 포함',
    ],
  },
  'sk-muurla-moomin-led-ball': {
    name: '무울라 무민 LED 볼 11 cm, Tähtihetki',
    description:
      '무울라 무민 Tähtihetki 컬렉션의 유리 장식 볼로, 지름 11 cm이며 안에 LED 10개짜리 조명 줄이 들어 있습니다. 전원 스위치가 있고, 별매인 CR2032 리튬 코인 전지로 작동하며, 실내 전용입니다. Tähtihetki 컬렉션에는 금색 디테일이 들어가며, 걸이용 새틴 리본이 함께 들어 있습니다.',
    specs: [
      '지름 11 cm',
      '유리, LED 10개가 달린 조명 줄',
      'CR2032 리튬 코인 전지, 별매. 전원 스위치',
      '실내 전용. CE 인증',
      '핀란드에서 디자인',
    ],
    specLabels: [undefined, undefined, '전원', '사용', '디자인'],
  },
  'sk-muurla-moomin-led-candle-tree': {
    name: '무울라 무민 LED 캔들 12.5 cm, 가문비 아래',
    description:
      '무울라 무민 Originals 컬렉션의 건전지식 LED 캔들로, 높이는 12.5 cm입니다. 가문비나무 아래(Kuusen alla) 그림은 토베 얀손의 책 Farlig midsommar에서 가져왔습니다. 파라핀 왁스로 만들어 진짜 스테아린 초처럼 보이도록 만들었고, 따뜻한 색의 빛이 그림을 돋보이게 합니다. 켜기, 끄기, 6시간 타이머 기능이 있고, 별매인 AA 건전지 2개로 작동하며, 실내 전용입니다.',
    specs: [
      '지름 10 cm, 높이 12.5 cm',
      '파라핀 왁스',
      'AA 건전지 2개, 별매',
      '켜기, 끄기, 6시간 타이머',
      '실내 전용',
      '토베 얀손, 책 Farlig midsommar에서',
    ],
    specLabels: [undefined, undefined, '전원', '기능', '사용', '원화'],
  },
  'arabia-moomin-plates-winter-night': {
    name: '아라비아 무민 접시 19 cm, 사무실과 겨울밤',
    description:
      '아라비아의 19 cm 무민 접시 두 개 세트로, 흰색 비트로 포슬린에 사무실과 겨울밤 그림이 들어가 있습니다. 앞서 나온 머그와 짝을 이루도록 만들었습니다. 사무실 그림은 1996년 아라비아 무민 머그에 처음 실렸고, 글쓰기와 그리기, 칠하기가 되풀이되는 만화에서 따왔습니다. 겨울밤은 2006년 머그의 그림을 다시 쓴 것으로, 토베 얀손이 1957년에 펴낸 Trollvinter의 한 장면, 다리 난간에 앉은 무민트롤이 담겨 있습니다.',
    specs: [
      '지름 19.4 cm, 높이 2.8 cm',
      '비트로 포슬린',
      '접시 2개, 사무실과 겨울밤',
      '식기세척기, 전자레인지, 오븐 사용 가능',
      '토베 얀손',
      '566802-01, EAN 6411801011432',
    ],
    specLabels: [undefined, undefined, undefined, undefined, '원화', '품번과 EAN'],
  },
  'arabia-moomin-plates-winter-fire': {
    name: '아라비아 무민 접시 19 cm, 겨울 모닥불과 항해',
    description:
      '아라비아의 19 cm 비트로 포슬린 무민 접시 두 개로, 하나는 겨울 모닥불, 다른 하나는 항해 그림입니다. 둘 다 토베 얀손의 그림이며, 겨울 장면과 항해 장면을 나란히 놓은 이 세트는 평소 식사에도 특별한 날의 식사에도 쓰도록 만들었습니다.',
    specs: [
      '접시 2개, 겨울 모닥불과 항해',
      '비트로 포슬린',
      '멀티컬러',
      '총중량 0.886 kg',
      '토베 얀손',
      '629239-01, EAN 6411801015065',
    ],
    specLabels: [undefined, undefined, undefined, undefined, '원화', '품번과 EAN'],
  },
  'sk-muurla-moomin-snowfall-mug': {
    name: '무울라 무민 에나멜 머그 2.5 dl, 눈 내리는 날',
    description:
      '무울라의 2.5 dl 무민 에나멜 머그로, 눈 내리는 날 그림이 들어가 있습니다. 무민 골짜기에 첫눈이 내려 눈놀이를 할 때가 된 장면입니다. 무울라의 에나멜 제품은 탄소강 심에 에나멜을 두 겹 입혀 만들기 때문에, 이 머그는 식탁뿐 아니라 하이킹, 별장, 보트에서도 쓰기 좋습니다. 뜨거운 음료와 찬 음료 모두 담을 수 있고, 식기세척기는 되지만 전자레인지는 안 됩니다.',
    specs: [
      '2.5 dl',
      '탄소강, 이중 에나멜 코팅',
      '식기세척기 사용 가능. 전자레인지 사용 불가',
    ],
  },
  'sk-muurla-moomin-gifts-mug': {
    name: '무울라 무민 에나멜 머그 3.7 dl, 선물',
    description:
      '무울라의 3.7 dl 무민 에나멜 머그로, 가까운 사람들에게 선물을 주는 크리스마스 그림이 들어가 있습니다. 에나멜 아래에는 이중 코팅한 탄소강 심이 있어 식탁에서뿐 아니라 야외에서도 쓸 만큼 튼튼합니다. 뜨거운 음료와 찬 음료 모두 담을 수 있고, 식기세척기는 되지만 전자레인지는 안 됩니다.',
    specs: [
      '3.7 dl',
      '탄소강, 이중 에나멜 코팅',
      '식기세척기 사용 가능. 전자레인지 사용 불가',
    ],
  },
  'rj-pesonen-beeswax-candle': {
    name: 'Pesosen Mehiläistarhat 밀랍 캔들',
    description:
      '양봉장 Pesosen Mehiläistarhat에서 밀랍으로 손수 만든 큰 테이블 캔들입니다. 색과 향도 밀랍에서 나옵니다. 양봉장의 에사는 29년째 벌을 쳐 왔고 그중 13년은 전업으로 해 왔으며, 벌통은 사스타말라와 해메엔퀴뢰 일대의 들판과 숲, 작은 물길 사이에 있습니다. 양봉장은 자기 벌통에서 나온 것으로 캔들을 만들며, 캔들은 밝고 안정적인 불꽃으로 오래 탑니다.',
    specs: [
      '밀랍',
      '대형',
      '수공예',
      '사스타말라와 해메엔퀴뢰',
    ],
    specLabels: [undefined, undefined, '제작 방식', '양봉장'],
  },
  'rj-pesonen-honeycomb-candle': {
    name: 'Pesosen Mehiläistarhat 벌집 캔들',
    description:
      '양봉장 Pesosen Mehiläistarhat에서 밀랍으로 손수 만든 큰 벌집 캔들로, 연소 시간은 30시간입니다. 색과 향은 밀랍에서 나오며, 양봉장은 사스타말라와 해메엔퀴뢰 일대의 자기 벌통에서 나온 것으로 캔들을 만듭니다. 양봉장의 에사는 29년째 벌을 쳐 왔고 13년 동안 전업으로 돌봐 왔습니다.',
    specs: [
      '밀랍',
      '대형',
      '30 h',
      '수공예',
      '사스타말라와 해메엔퀴뢰',
    ],
    specLabels: [undefined, undefined, '연소 시간', '제작 방식', '양봉장'],
  },
  'sk-moomin-mistletoe-candle': {
    name: '하비 무민 캔들 7 x 12 cm, 겨우살이, 베이지',
    description:
      '하비의 베이지색 무민 테이블 캔들로, 겨우살이 무늬에 크기는 7 x 12 cm, 연소 시간은 55시간입니다. 무늬는 실크스크린으로 캔들에 인쇄했습니다.',
    specs: [
      '7 x 12 cm',
      '베이지',
      '55 h',
      '실크스크린 인쇄',
      'Havi Oy, 리히매키',
    ],
    specLabels: [undefined, undefined, '연소 시간', '장식', '판매사'],
  },
  'iittala-kastehelmi-tealight': {
    name: '이딸라 카스테헬미 티라이트 홀더 64 mm, 투명',
    description:
      '이딸라 카스테헬미 시리즈의 투명 유리 티라이트 홀더로, 지름은 64 mm입니다. 카스테헬미는 오이바 토이까가 1964년 이딸라를 위해 디자인한 시리즈로 핀란드어로 이슬방울을 뜻하며, 이딸라는 2010년에 이 시리즈를 다시 선보였습니다. 다른 색으로도 나오며, 이딸라는 하나만 두거나 여러 색을 함께 모아 쓰기를 권합니다.',
    specs: [
      '지름 6.4 cm',
      '유리',
      '투명',
      '손세척만 가능',
      '오이바 토이까, Iittala Kastehelmi',
      '13167-01, EAN 6411920059766',
    ],
    specLabels: [undefined, undefined, undefined, undefined, '디자이너와 컬렉션', '품번과 EAN'],
  },
  'sk-fazer-christmas-box': {
    name: '파제르 크리스마스 박스 2026',
    description:
      '파제르의 2026년 크리스마스 박스로, 시즌 초콜릿과 사탕, 진저브레드 6팩이 들어 있습니다. 칼 파제르 초콜릿, 칼 파제르 진저브레드 초콜릿 바, Remix Xmas + Choco, Dumle Winter Mix 토피, Vihreät kuulat 배 젤리, Marianne 민트 초콜릿 진저브레드 쿠키로 구성됩니다.',
    specs: [
      '칼 파제르 초콜릿 250 g, 칼 파제르 진저브레드 초콜릿 바 200 g, Remix Xmas + Choco 캔디 믹스 300 g, Dumle Winter Mix 토피 믹스 180 g, Vihreät kuulat 배 젤리 260 g, Marianne 민트 초콜릿 진저브레드 쿠키 175 g',
      '코코아 30% 이상 밀크 초콜릿',
      '밀(글루텐), 대두, 우유(유당) 함유. 호밀, 보리, 귀리, 달걀, 견과류, 아몬드가 들어 있을 수 있음',
      '열량 1845 kJ / 441 kcal, 지방 17 g 그중 포화지방 9.4 g, 탄수화물 67 g 그중 당류 53 g, 단백질 4.6 g, 소금 0.36 g',
    ],
    specLabels: [undefined, '포장 표시 사항', '알레르기 유발 성분', '100 g당 영양성분'],
  },
  'sk-karl-fazer-advent-calendar': {
    name: '칼 파제르 어드벤트 캘린더 200 g',
    description:
      '문 뒤에 여러 맛의 초콜릿 프랄린 200 g이 들어 있는 칼 파제르 어드벤트 캘린더입니다. 마지막 문에는 파제르가 1922년부터 만들어 온 칼 파제르 밀크 초콜릿, 파제르 블루가 가득 들어 있습니다. 파제르는 Fazer Cocoa Vision 프로그램에 따라 코코아를 조달합니다.',
    specs: [
      '200 g',
      '여러 맛의 초콜릿 프랄린, 마지막 문에는 파제르 블루 밀크 초콜릿',
      '코코아 30% 이상 밀크 초콜릿',
      '우유, 대두, 보리(글루텐) 함유. 견과류, 아몬드, 밀, 호밀, 귀리가 들어 있을 수 있음',
      '열량 2315 kJ / 554 kcal, 지방 34 g 그중 포화지방 20 g, 탄수화물 53 g 그중 당류 51 g, 단백질 9.6 g, 소금 0.31 g',
    ],
    specLabels: [undefined, undefined, '포장 표시 사항', '알레르기 유발 성분', '100 g당 영양성분'],
  },
  'sk-fazer-christmas-chocolates': {
    name: '파제르 Joulusuklaa 초콜릿 295 g',
    description:
      '파제르 Joulusuklaa 초콜릿 295 g으로, 부드러운 밀크 초콜릿 껍질 안에 진짜 진저브레드 가루가 든 트러플 필링이 있습니다. 파제르는 크리스마스 모임에서, 예를 들어 북유럽의 따뜻한 향신료 음료인 글뢰그와 함께 즐기기를 권합니다.',
    specs: [
      '295 g',
      '밀크 초콜릿 껍질, 진저브레드 가루가 든 트러플 필링',
      '코코아 30% 이상 밀크 초콜릿',
      '우유, 밀, 보리(글루텐), 대두 함유. 견과류, 아몬드, 호밀, 귀리가 들어 있을 수 있음',
      '열량 2274 kJ / 545 kcal, 지방 33 g 그중 포화지방 19 g, 탄수화물 53 g 그중 당류 51 g, 단백질 8.2 g, 소금 0.24 g',
    ],
    specLabels: [undefined, undefined, '포장 표시 사항', '알레르기 유발 성분', '100 g당 영양성분'],
  },
  'sk-karl-fazer-gingerbread-bar': {
    name: '칼 파제르 진저브레드 초콜릿 Winter Edition',
    description:
      '부드러운 밀크 초콜릿과 바삭한 진저브레드를 합친 칼 파제르 Winter Edition 200 g 바입니다. 파제르는 1922년부터 칼 파제르 밀크 초콜릿을 만들어 왔고, 이 진저브레드 바는 그 크리스마스 에디션입니다.',
    specs: [
      '200 g',
      '바삭한 진저브레드가 든 밀크 초콜릿',
      '코코아 30% 이상 밀크 초콜릿',
      '우유, 밀(글루텐), 대두 함유. 견과류, 아몬드, 호밀, 귀리가 들어 있을 수 있음',
      '열량 2205 kJ / 527 kcal, 지방 30 g 그중 포화지방 18 g, 탄수화물 55 g 그중 당류 48 g, 단백질 8.5 g, 소금 0.22 g',
    ],
    specLabels: [undefined, undefined, '포장 표시 사항', '알레르기 유발 성분', '100 g당 영양성분'],
  },
  'sk-fazer-glogg-balls': {
    name: '파제르 Glögikuulat 젤리 260 g',
    description:
      '파제르 Glögikuulat 260 g 상자로, 북유럽의 따뜻한 향신료 음료 글뢰그에서 이름을 딴 부드럽고 달콤한 젤리 볼입니다. 글루텐, 젤라틴, 유당이 들어 있지 않고 비건도 먹을 수 있습니다. 상자에는 젤리로 따뜻한 음료를 만드는 레시피가 들어 있습니다.',
    specs: [
      '260 g',
      '글루텐 프리, 젤라틴 프리, 유당 프리, 비건',
      '열량 1353 kJ / 322 kcal, 지방 0 g 그중 포화지방 0 g, 탄수화물 79 g 그중 당류 64 g, 단백질 0 g, 소금 0.28 g',
    ],
    specLabels: [undefined, '식이', '100 g당 영양성분'],
  },
  'sk-halva-christmas-liquorice': {
    name: '할바 크리스마스 감초 믹스 250 g',
    description:
      '할바의 크리스마스 감초 믹스로, 크리스마스 맛 3가지의 감초 250 g이 로즈골드색 상자에 담겨 있습니다. 사과 파이 맛 감초 꽃, 글뢰그 필링 감초, 진저브레드 필링 감초가 들어 있습니다. 할바는 이 믹스를 헬싱키 피태얀매키에서 만듭니다.',
    specs: [
      '250 g',
      '사과 파이 맛 감초 꽃, 글뢰그 필링 감초, 진저브레드 필링 감초',
      '헬싱키 피태얀매키에서 제조',
      '밀(글루텐) 함유',
      '열량 1419 kJ / 334 kcal, 지방 0.7 g 그중 포화지방 0.3 g, 탄수화물 79 g 그중 당류 53 g, 단백질 2.9 g, 소금 0.15 g',
    ],
    specLabels: [undefined, undefined, undefined, '알레르기 유발 성분', '100 g당 영양성분'],
  },
  'sk-halva-salmiakki-calendar': {
    name: '할바 살미아키 어드벤트 캘린더 200 g',
    description:
      '핀란드의 짠 감초 살미아키 200 g을 할바의 자체 제품 중에서 골라 담은 어드벤트 캘린더입니다. 문 뒤에는 Vanhat Autot, 살미아키 물고기, 짠맛 해골, Pommix, 살미아키 하트, 살미아키 칼, 네모난 살미아키루투, 단단한 Jauhix 살미아키가 들어 있습니다.',
    specs: [
      '200 g',
      'Vanhat Autot 살미아키, 살미아키 물고기, 짠맛 해골, Pommix 살미아키, 살미아키 하트, 살미아키 칼, 살미아키루투, Jauhix 살미아키',
      '열량 1406 kJ / 331 kcal, 지방 0.5 g 그중 포화지방 0.1 g, 탄수화물 80 g 그중 당류 59 g, 단백질 2.7 g, 소금 0.03 g',
    ],
    specLabels: [undefined, undefined, '100 g당 영양성분'],
  },
  'kuivalihakundi-advent-calendar': {
    name: '쿠이발리하쿤디 육포 어드벤트 캘린더 2026, 24칸',
    description:
      '쿠이발리하쿤디의 2026년 어드벤트 캘린더로, 24개의 문 뒤마다 20 g 육포 한 봉지가 들어 있으며 24가지 맛이 모두 다릅니다. 소고기, 닭고기, 기름진 돼지고기, 기름기 적은 돼지고기가 기본 맛과 이 캘린더만을 위한 맛으로 들어 있으며, 모두 핀란드 요켈라에 있는 회사 자체 공장에서 만들었습니다. 육포는 개봉 후에도 실온에서 보관할 수 있고, 캘린더는 테이블에 세우거나 걸이 구멍으로 벽에 걸 수 있으며, 한정 수량입니다.',
    specs: [
      '육포 24 x 20 g 봉지, 문마다 다른 맛',
      '소고기, 닭고기, 기름진 돼지고기, 기름기 적은 돼지고기',
      '핀란드 요켈라의 쿠이발리하쿤디 자체 공장에서 제조',
      '개봉 후에도 실온 보관 가능',
      '테이블에 세우거나 걸이 구멍으로 벽에 걸 수 있음',
    ],
    specLabels: [undefined, '육류', undefined, undefined, '걸이'],
  },
  'halti-crostie-merino-beanie': {
    name: '할티 Crostie 메리노 비니',
    description:
      '크로스컨트리 스키, 겨울 달리기 같은 추운 날 운동을 위해 머리에 꼭 맞게 만든 할티 비니로, 핀란드에서 디자인하고 만들었습니다. 비니의 절반에는 방풍과 통기가 되는 Stormwall® 안감을 대어 이마와 귀를 바람으로부터 지켜 줍니다. 겉감은 부드러운 메리노 울 혼방 니트라 따뜻하면서도 통기가 잘 됩니다.',
    specs: [
      '메리노 울과 아크릴 혼방 니트, 메리노 울 50%, 아크릴 50%. 절반에 Stormwall® 안감',
      'S, M, L',
      '0.2 kg',
      '여러 색상: Crocus Petal, Black, White, Fudge Maroon Red, Veiled Pink',
      '비슷한 색끼리 세탁, 눕혀서 건조',
      '핀란드에서 디자인하고 제조, Avainlippu(Key Flag) 마크 제품',
    ],
  },
  'halti-vuolle-mohair-beanie': {
    name: '할티 Vuolle 모헤어 비니',
    description:
      '모헤어, 메리노 울, 폴리아미드 혼방으로 만든 할티의 보송보송한 비니로, 이중 구조라 더 따뜻하고 접어 올린 단이 높습니다. 혼방 소재 덕분에 가볍지만 따뜻하며, 별도 안감은 없습니다. 원사이즈이고 색상은 Snow White와 Black입니다.',
    specs: [
      '모헤어 혼방, 모헤어 50%, 폴리아미드 32%, 메리노 울 18%. 별도 안감 없음',
      '원사이즈',
      'Snow White 또는 Black',
      '비슷한 색끼리 세탁, 눕혀서 건조',
      '이중 구조, 접어 올린 단이 높음',
    ],
    specLabels: [undefined, undefined, undefined, undefined, '특징'],
  },
  'halti-tiilo-mittens': {
    name: '할티 Tiilo II 벙어리장갑',
    description:
      '겨울 야외 활동을 위한 할티의 보온 벙어리장갑입니다. 방수와 방풍이 되는 DrymaxX® 원단에 60 g Microtherm® 충전재를 넣었습니다. 손바닥은 그립이 좋은 인조 가죽이고, 립 니트 안쪽 손목단과 조절 가능한 손목 조임이 있습니다. 블랙, 사이즈 7부터 12까지입니다.',
    specs: [
      '멤브레인이 있는 DrymaxX® 폴리에스터, 폴리에스터 100%. 립 니트 손목단, 폴리에스터 100%. 인조 가죽 손바닥, 폴리우레탄 100%',
      '60 g Microtherm® 충전재',
      '7, 8, 9, 10, 11, 12',
      '블랙',
      '단독 세탁',
    ],
    specLabels: [undefined, '충전재', undefined, undefined, undefined],
  },
  'halti-warm-merino-socks': {
    name: '할티 따뜻한 메리노 울 양말',
    description:
      '두꺼운 테리 니트로 짠 할티 메리노 울 양말로, 핀란드에서 만들었습니다. 솔기가 없어 스키 부츠, 겨울 신발, 스노보드 부츠 안에서도 편하게 맞습니다. 테리 조직이 공기를 머금어 따뜻하고, 립 니트 양말목은 흘러내리지 않습니다. 단독으로 신거나 얇은 양말 위에 겹쳐 신으세요.',
    specs: [
      '메리노 울 혼방, 메리노 울 62%, 폴리아미드 36%, 엘라스테인 2%',
      '34-36, 37-39, 40-42, 43-45, 46-48',
      'Dark Sea Green 또는 Asphalt',
      '0.1 kg',
      '핀란드 제조, Avainlippu(Key Flag) 마크 제품',
      '두꺼운 테리 니트, 무봉제, 흘러내리지 않는 립 니트 양말목',
    ],
    specLabels: [undefined, undefined, undefined, undefined, undefined, '특징'],
  },
  'north-outdoor-kaisla-beanie': {
    name: '노스아웃도어 Kaisla 메리노 비니, 커피',
    description:
      '뮬싱 프리 메리노 울 100퍼센트로 짠 도톰한 브리오슈 니트 비니로, 오울루에 있는 노스아웃도어 자체 편직 공장에서 만듭니다. 노스아웃도어는 가을부터 늦겨울까지, 도시 산책에도 자연 속 산길에도 쓰기를 권합니다. 원사이즈, 커피 색입니다.',
    specs: [
      '메리노 울 100%, 뮬싱 프리, 브리오슈 니트',
      '원사이즈',
      '커피',
      '핀란드 오울루의 노스아웃도어 자체 편직 공장에서 제조',
    ],
  },
  'north-outdoor-polku-neck-tube': {
    name: '노스아웃도어 Polku 메리노 넥게이터, 커피',
    description:
      '뮬싱 프리 메리노 울 100퍼센트를 촘촘한 1x1 립으로 짠 도톰한 넥게이터입니다. 길이가 넉넉해 머플러처럼 두르거나 후드처럼 끌어올리거나 얼굴을 가릴 수 있습니다. 원사이즈, 커피 색입니다.',
    specs: [
      '메리노 울 100%, 뮬싱 프리, 1x1 립 니트',
      '원사이즈',
      '커피',
      '머플러, 후드, 얼굴 가리개',
    ],
    specLabels: [undefined, undefined, undefined, '용도'],
  },
  'north-outdoor-hirsi-socks': {
    name: '노스아웃도어 Hirsi 메리노 울 양말, 아몬드',
    description:
      '오울루의 노스아웃도어 자체 편직 공장에서 만든 가벼운 메리노 울 양말입니다. 뮬싱 프리 메리노 80퍼센트에 내구성을 위한 폴리아미드 20퍼센트를 섞었습니다. 실내에서 가장 진가를 발휘하며, 단독으로 신거나 다른 양말 위에 겹쳐 신습니다. 세탁기의 약한 코스로 빨 수 있지만 세탁할 일은 드뭅니다.',
    specs: [
      '메리노 울 80%, 뮬싱 프리, 폴리아미드 20%',
      '35-38, 39-42, 43-46',
      '아몬드',
      '핀란드 오울루의 노스아웃도어 자체 편직 공장에서 제조',
      '세탁기 약한 코스',
    ],
  },
  'north-outdoor-avery-mittens': {
    name: '노스아웃도어 Avery 울 플리스 벙어리장갑, 라테',
    description:
      '재활용 울 63퍼센트가 든 가벼운 이탈리아산 울 플리스 혼방 벙어리장갑으로, 안감은 메리노 울 100퍼센트입니다. 메리노 안감이 습기를 내보내고 온기를 지키며, 꼭 맞으면서도 유연한 핏이라 물건을 쥐는 감각이 살아 있습니다. 사이즈 S와 M, 라테 색입니다.',
    specs: [
      '이탈리아산 울 플리스 혼방, 재활용 울 63%. 안감 메리노 울 100%',
      'S, M',
      '라테',
      '야외와 도시',
    ],
    specLabels: [undefined, undefined, undefined, '용도'],
  },
  'makia-alvar-beanie': {
    name: '마키아 Alvar 메리노 비니',
    description:
      '메리노 울 100퍼센트로 된 마키아 비니로, 핀란드에서 제조했습니다. 울은 뮬싱 프리이며 원사이즈입니다.',
    specs: [
      '메리노 울 100%, 뮬싱 프리',
      '원사이즈',
      '핀란드 제조',
    ],
  },
  'makia-stellar-scarf': {
    name: '마키아 Stellar 메리노 스카프',
    description:
      '메리노 울 100퍼센트로 만든 마키아 스카프입니다. 원사이즈입니다.',
    specs: [
      '메리노 울 100%',
      '원사이즈',
    ],
  },
  'makia-freja-mittens': {
    name: '마키아 Freja 퀼팅 벙어리장갑',
    description:
      'Sorona® 인조 다운을 채운 마키아의 퀼팅 벙어리장갑입니다. 일부를 식물 유래 원료로 만든 이 충전재는 통기가 되면서 온기를 지킵니다. 3000 mm 내수압이 가벼운 비에도 손을 마른 상태로 지켜 줍니다. 사이즈 S와 M입니다.',
    specs: [
      'Sorona® 인조 다운, 일부 식물 유래',
      '3000 mm',
      'S, M',
    ],
    specLabels: ['충전재', '내수압', undefined],
  },
  'makia-sibelius-beanie': {
    name: '마키아 Sibelius 메리노 비니',
    description:
      '메리노 울 100퍼센트로 만든 마키아의 Sibelius 비니입니다. 원사이즈입니다.',
    specs: [
      '메리노 울 100%',
      '원사이즈',
    ],
  },
  'nb-moomin-christmas-sockbox': {
    name: '무민 크리스마스 양말 박스, EU 36-42',
    description:
      '양말 두 켤레가 든 무민 크리스마스 선물 상자로, 원사이즈이며 EU 36부터 42까지 맞습니다. 양말은 주로 면이고 폴리에스터, 나일론, 약간의 엘라스테인이 섞였으며, 무민 공식 제품입니다.',
    specs: [
      '면 60%, 폴리에스터 33%, 나일론 4%, 엘라스테인 2%, 엘라스토디엔 1%',
      '원사이즈, EU 36-42',
      '선물 상자에 담긴 양말 2켤레',
      '무민 공식 제품',
    ],
    specLabels: [undefined, undefined, undefined, '라이선스'],
  },
  'nb-moomin-christmas-box-men': {
    name: '무민 크리스마스 남성 양말 박스, EU 40-45',
    description:
      '남성 양말 두 켤레가 든 무민 크리스마스 선물 상자로, 사이즈는 EU 40부터 45까지입니다. Nordicbuddies는 경험상 더 큰 발에도 맞는다고 말합니다. 양말은 주로 면이고 폴리에스터, 나일론, 약간의 엘라스테인이 섞였으며, 무민 공식 제품입니다.',
    specs: [
      '면 60%, 폴리에스터 33%, 나일론 4%, 엘라스테인 2%, 엘라스토디엔 1%',
      '원사이즈, EU 40-45',
      '선물 상자에 담긴 양말 2켤레',
      '무민 공식 제품',
    ],
    specLabels: [undefined, undefined, undefined, '라이선스'],
  },
  'nb-moomintroll-fleece-mittens': {
    name: '무민트롤 플리스 벙어리장갑',
    description:
      '재활용 폴리에스터 100퍼센트 플리스로 만든 무민트롤 벙어리장갑으로, 안감은 아크릴입니다. 잘 늘어나서 원사이즈로 대부분 맞으며, 무민 공식 제품입니다.',
    specs: [
      '재활용 폴리에스터 100%',
      '아크릴 100%',
      '원사이즈, 신축성 있음, 대부분 맞음',
      '무민 공식 제품',
    ],
    specLabels: [undefined, '안감', undefined, '라이선스'],
  },
  'nb-moomintroll-chunky-beanie': {
    name: '무민트롤 복슬복슬 청키 비니, 핑크',
    description:
      '보송보송하고 도톰한 핑크색 무민트롤 비니로, 성인용 원사이즈입니다. 소재는 폴리에스터, 나일론, 아크릴, 울, 엘라스테인 혼방이며 무민 공식 제품입니다.',
    specs: [
      '폴리에스터, 나일론, 아크릴, 울, 엘라스테인',
      '성인, 원사이즈',
      '핑크',
      '무민 공식 제품',
    ],
    specLabels: [undefined, undefined, undefined, '라이선스'],
  },
  'sk-nordqvist-tea-calendar': {
    name: '노르드크비스트 티 어드벤트 캘린더, 27 티백',
    description:
      '노르드크비스트의 정육면체 모양 티 캘린더로, 문 25개에 티백 27개가 들어 있으며 마지막 문에는 세 개가 들어 있습니다. 티백은 홍차, 녹차, 루이보스, 히비스커스 블렌드이고, 진저브레드, 글뢰그, 시나몬 같은 크리스마스 맛도 있습니다.',
    specs: [
      '문 25개, 티백 27개. 마지막 문에 티백 3개',
      '홍차, 녹차, 루이보스, 히비스커스 블렌드',
      'Nordqvist Oy, 누르미야르비',
      '6413440000433',
    ],
    specLabels: [undefined, '차 종류', '판매사', 'EAN'],
  },
  'sk-nordqvist-moomin-tea-calendar': {
    name: '노르드크비스트 무민 티 캘린더, 24 티백, 라일락',
    description:
      '노르드크비스트의 라일락색 무민 티 캘린더로, 12가지 맛 피라미드 티백이 두 개씩 모두 24개 들어 있습니다. 홍차와 녹차, 카페인 없는 루이보스가 함께 들어 있으며, 맛마다 Olet Ihana(당신은 사랑스러워요)부터 Muumimamman Voimajuoma(무민마마의 힘이 나는 음료)까지 이름이 붙어 있습니다. 뚜껑은 캘린더가 똑바로 선 채로 열리며, Rainforest Alliance 인증을 받았습니다.',
    specs: [
      '피라미드 티백 24개, 12가지 맛, 맛마다 2개',
      '41.5 g',
      '라일락',
      'Rainforest Alliance',
      'Nordqvist Oy, 누르미야르비',
      '6413440000679',
    ],
    specLabels: [undefined, undefined, undefined, '인증', '판매사', 'EAN'],
  },
  'sk-nordic-glogg-concentrate': {
    name: 'Poikain Parhaat 글뢰그 원액 0.5 l',
    description:
      '핀란드산 블랙커런트와 레드커런트 주스, 진짜 향신료로 손수 만든 무알코올(0%) Nordic 글뢰그 원액입니다. 1+3으로 희석하며, Poikain Parhaat는 베리 맛이 풍부하고 따뜻한 향신료 향이 나는 전통적인 맛의 글뢰그라고 소개합니다.',
    specs: [
      '0.5 l',
      '1+3',
      '0%',
      '핀란드산 블랙커런트와 레드커런트 주스',
      '열량 47.7 kcal / 199.58 kJ, 지방 0.2 g 그중 포화지방 0.2 g, 탄수화물 11 g 그중 당류 11 g, 단백질 0.3 g, 소금 0.2 g',
      'Poikain Parhaat Oy Ltd, 탐페레',
    ],
    specLabels: [undefined, '희석 비율', '알코올', undefined, '100 ml당 영양성분', '판매사'],
  },
  'rj-christmas-coffee': {
    name: 'Gran Palomar 크리스마스 커피 200 g',
    description:
      'Cafetoria Roastery의 Gran Palomar 크리스마스 커피는 유기농 공정무역 커피입니다. 유기농 시나몬과 카다멈으로 향을 냈고, 200 g 포장입니다.',
    specs: [
      '200 g',
      '유기농 시나몬과 카다멈',
      '공정무역, 유기농',
      'Cafetoria Roastery Oy',
    ],
    specLabels: [undefined, '향신료', '인증', '로스터리'],
  },
  'sk-emendo-santa-sauna-scent': {
    name: 'Emendo 산타클로스 공식 사우나 향 500 ml',
    description:
      'Emendo의 산타클로스 공식 사우나 향으로, 500 ml에 100퍼센트 순수 에센셜 오일이 들어 있고 합성 향료는 없습니다. 물 약 3 l가 든 양동이에 약 ½ dl를 섞어 보통 사우나 물처럼 쓰세요.',
    specs: [
      '500 ml',
      '100% 에센셜 오일 함유, 합성 향료(parfum) 없음',
      '물 약 3 l가 든 양동이에 약 ½ dl',
      '©Santa Claus Foundation™',
      '6417892057458',
    ],
    specLabels: [undefined, '성분', '사용법', '라이선스', 'EAN'],
  },
  'sk-emendo-christmas-sauna-set': {
    name: 'Emendo Jouluhetki 사우나 선물 세트',
    description:
      '핀란드어로 크리스마스의 순간을 뜻하는 Jouluhetki는 Emendo의 사우나 선물 세트입니다. 끈 달린 비누, 사우나 향, 샤워볼이 들어 있으며, 선물용으로 포장되어 나옵니다.',
    specs: [
      '끈 달린 비누, 사우나 향, 샤워볼',
      '6417892041280',
    ],
    specLabels: [undefined, 'EAN'],
  },
  'sk-emendo-gingerbread-glogg-scent': {
    name: 'Emendo 사우나 향 2종, 진저브레드와 글뢰그',
    description:
      '진저브레드와 글뢰그 두 가지 Emendo 사우나 향으로, 각 10 ml이며 100퍼센트 순수 에센셜 오일로 만들었습니다. 물을 담은 국자에 2방울에서 6방울을 떨어뜨려 돌 위에 끼얹으세요.',
    specs: [
      '2 x 10 ml',
      '진저브레드, 글뢰그',
      '100% 에센셜 오일로 제조',
      '물 한 국자에 2방울에서 6방울',
      '6417892021060',
    ],
    specLabels: [undefined, '향', '성분', '사용법', 'EAN'],
  },
  'sk-aromageddon-gingerbread-scent': {
    name: '아로마게돈 사우나 향 Piparipyörre 15 ml',
    description:
      '진저브레드 소용돌이라는 뜻의 아로마게돈 Piparipyörre는 따뜻하고 스파이시한 시나몬 향을 사우나에 더합니다. 진저브레드의 느낌도 함께 납니다. 물을 담은 국자에 2방울에서 4방울을 떨어뜨리고, 항상 희석해서 쓰며 사우나 스토브에 바로 붓지 마세요.',
    specs: [
      '15 ml',
      '진저브레드 노트가 있는 시나몬',
      '물 한 국자에 2방울에서 4방울, 항상 희석',
      'Aromageddon Oy, 에스포',
    ],
    specLabels: [undefined, '향', '사용법', '판매사'],
  },
  // Vaatevalikoiman laajennus 7.11.2026
  'makia-glacier-parka': {
    name: '마키아 Glacier 파카',
    description:
      '레귤러 핏에 재활용 폴리에스터 100% 안감을 댄 마키아의 긴 기장 겨울 파카입니다. 겉감은 면 73%와 재활용 나일론 27%이며, 내수압 5000 mm로 가끔 내리는 비를 막아 줍니다. 허리 안쪽의 끈으로 핏을 조절할 수 있습니다.',
    specs: [
      '겉감 면 73%, 재활용 나일론 27%. 안감 재활용 폴리에스터 100%',
      '5000 mm',
      '블랙',
      'S부터 XXL까지',
    ],
    specLabels: [undefined, '내수압', undefined, undefined],
  },
  'makia-maren-parka': {
    name: '마키아 Maren 패딩 코트',
    description:
      '재활용 폴리에스터 100% Sorona® 인조 다운을 채운 마키아의 여유 있는 중간 기장 패딩 코트입니다. Sorona®는 일부 식물 유래 소재로, 통기성이 있고 온기를 잘 유지합니다. 필요하면 허리 벨트로 핏을 조절할 수 있습니다.',
    specs: [
      '충전재 Sorona® 재활용 폴리에스터 인조 다운 100%',
      '릴랙스 핏, 중간 기장, 허리 벨트',
      '다크 와인 레드',
      'XS부터 XXL까지',
    ],
    specLabels: [undefined, '핏', undefined, undefined],
  },
  'makia-helsinki-parka': {
    name: '마키아 Helsinki 파카',
    description:
      '레귤러 핏에 넉넉한 포켓과 인조 퍼를 떼어 낼 수 있는 후드를 갖춘 마키아의 클래식 겨울 파카입니다. 마키아의 클래식 Raglan Parka를 바탕으로 했으며, 충전재는 재활용 폴리에스터 100% Sorona® 인조 다운입니다. Sorona®는 일부 식물 유래 소재로, 통기성이 있고 온기를 잘 유지합니다.',
    specs: [
      '충전재 Sorona® 재활용 폴리에스터 인조 다운 100%',
      '탈착식 인조 퍼',
      '다크 그린',
      'S부터 XXL까지',
    ],
    specLabels: [undefined, '후드', undefined, undefined],
  },
  'makia-else-parka': {
    name: '마키아 Else 파카',
    description:
      '레귤러 핏에 탈착식 인조 퍼 안감을 댄 후드가 달린 마키아의 중간 기장 겨울 파카입니다. 충전재는 재활용 폴리에스터 100% Sorona® 인조 다운이며, 허리에 숨겨진 조절 장치로 핏을 맞출 수 있습니다.',
    specs: [
      '충전재 Sorona® 재활용 폴리에스터 인조 다운 100%',
      '탈착식 인조 퍼 안감',
      '오프화이트',
      'XS부터 XXL까지',
    ],
    specLabels: [undefined, '후드', undefined, undefined],
  },
  'makia-frost-knit': {
    name: '마키아 Frost 니트 스웨터',
    description:
      '폴리에스터 혼방으로 짠 마키아의 레귤러 핏 니트 스웨터로, 그러데이션 배색으로 마무리했습니다. 사이즈는 S부터 XXL까지입니다.',
    specs: [
      '폴리에스터 혼방',
      '그러데이션',
      'S부터 XXL까지',
    ],
    specLabels: [undefined, '배색', undefined],
  },
  'makia-salla-knit': {
    name: '마키아 Salla 메리노 터틀넥 니트',
    description:
      '메리노 울 100%로 짠 마키아의 레귤러 핏 터틀넥 니트입니다. 몸판과 소매에 아주르(비침 무늬) 니트 디테일이 들어가 있습니다. 사이즈는 XS부터 XXL까지입니다.',
    specs: [
      '메리노 울 100%',
      '몸판과 소매에 아주르 니트 디테일',
      'XS부터 XXL까지',
    ],
    specLabels: [undefined, '디테일', undefined],
  },
  'makia-saarni-knit': {
    name: '마키아 Saarni 메리노 니트',
    description:
      '메리노 울 100%로 짠 마키아의 레귤러 핏 스웨터입니다. 사이즈는 S부터 XXL까지입니다.',
    specs: [
      '메리노 울 100%',
      'S부터 XXL까지',
    ],
  },
  'makia-siina-knit': {
    name: '마키아 Siina 울 혼방 니트',
    description:
      '울 혼방으로 짠 마키아의 레귤러 핏 니트로, 소매가 넓습니다. 울 혼방이라 니트가 한층 도톰하게 느껴집니다. 사이즈는 XS부터 XXL까지입니다.',
    specs: [
      '울 혼방',
      '와이드',
      'XS부터 XXL까지',
    ],
    specLabels: [undefined, '소매', undefined],
  },
  'halti-ascloud-ski-jacket-women': {
    name: '할티 Ascloud 여성 스키 패딩 재킷',
    description:
      'Microtherm® 보온재, 고정식 파우더 스커트, 지퍼 달린 리프트권 포켓을 갖춘 할티의 여성용 스키 패딩 재킷입니다. 겉감의 내수압은 10000 mm, 투습도는 10000 g/m²/24 h입니다. 후드와 밑단은 조절할 수 있고 소매 안쪽에는 라이크라 커프스가 있으며, 할티는 이 재킷을 슬로프는 물론 도심에서도 입을 수 있게 만들었습니다.',
    specs: [
      'Matt Memory, 재활용 폴리에스터 65%, 폴리에스터 35%',
      '10000 mm',
      '10000 g/m²/24 h',
      '1.0 kg',
      '34, 36, 38, 40, 42, 44, 46',
      '여러 색상: Crocus Petal, Seedpearl White, Dark Sea Green, Black',
    ],
    specLabels: [undefined, '내수압', '투습도', undefined, undefined, undefined],
  },
  'halti-ascale-ii-ski-jacket-men': {
    name: '할티 Ascale II 남성 스키 패딩 재킷',
    description:
      '160 g Microtherm® Arcty 보온재를 넣은 할티의 남성용 스키 패딩 재킷입니다. 고정식 파우더 스커트와 지퍼 달린 리프트권 포켓이 있고, 무광 겉감에는 Rudolf BIONIC-FINISH® 발수 가공을 했습니다. 내수압은 10000 mm, 투습도는 10000 g/m²/24 h입니다. 소매 안쪽의 라이크라 커프스와 전체 길이에 걸친 안쪽 스톰 플랩을 갖췄으며, 할티는 스키 팬츠에도 청바지에도 어울리게 만들었습니다.',
    specs: [
      'Waterproof Taslan, 재활용 폴리에스터 50%, 폴리에스터 50%',
      '10000 mm',
      '10000 g/m²/24 h',
      '1.0 kg',
      'S, M, L, XL, XXL, XXXL',
      'Dark Sea Green, Black',
    ],
    specLabels: [undefined, '내수압', '투습도', undefined, undefined, undefined],
  },
  'halti-carvey-ii-ski-pants-women': {
    name: '할티 Carvey II DX 여성 스키 팬츠',
    description:
      '4방향 스트레치 DrymaxX® 원단으로 만든 할티의 여성용 방수 스키 팬츠로, 모든 솔기를 테이핑했고 탈착식 멜빵이 있습니다. DrymaxX® 원단의 내수압은 15000 mm, 투습도는 15000 g/m²/24 h이며, 스트레이트 컷은 슬림 핏과 릴랙스 핏의 중간입니다. 허리는 조절할 수 있고 밑단은 보강했으며, 스노 게이터, 지퍼 달린 핸드 포켓, 발수 지퍼가 달린 허벅지 포켓가 있습니다.',
    specs: [
      'DrymaxX® NN, 4방향 스트레치, 재활용 폴리에스터 50%, 폴리에스터 50%. Stretch Cordura, 폴리에스터 96%, 엘라스테인 4%. 별도 안감 없음',
      '15000 mm',
      '15000 g/m²/24 h',
      '0.8 kg',
      '34, 36, 38, 40, 42, 44, 46, 48',
      '여러 색상: Dark Sea Green, Black, Seedpearl White, Vivid Purple, Lemon Pepper Beige',
    ],
    specLabels: [undefined, '내수압', '투습도', undefined, undefined, undefined],
  },
  'halti-carvey-ii-ski-pants-men': {
    name: '할티 Carvey II DX 남성 스키 팬츠',
    description:
      '4방향 스트레치 DrymaxX® 원단으로 만든 할티의 남성용 방수 스키 팬츠로, 모든 솔기를 테이핑했고 탈착식 멜빵이 있습니다. DWR 발수 가공을 했으며, DrymaxX® 원단의 내수압은 15000 mm, 투습도는 15000 g/m²/24 h입니다. 스키 핏의 스트레이트 컷은 슬림 핏과 릴랙스 핏의 중간이며, 조절식 허리, 보강된 밑단, 스노 게이터, 지퍼 달린 핸드 포켓, 발수 지퍼가 달린 허벅지 포켓를 갖췄습니다.',
    specs: [
      'DrymaxX® NN, 4방향 스트레치, 재활용 폴리에스터 50%, 폴리에스터 50%. Stretch Cordura, 폴리에스터 96%, 엘라스테인 4%',
      '15000 mm',
      '15000 g/m²/24 h',
      '0.9 kg',
      'XS, S, M, L, XL, XXL, XXXL, 4XL',
      '여러 색상: Dress Blues, Black, Dark Sea Green, Tea Green, Halti Red, Electric Blue Lemonade',
    ],
    specLabels: [undefined, '내수압', '투습도', undefined, undefined, undefined],
  },
  'halti-kevo-2-winter-boots-men': {
    name: '할티 Kevo 2 DX 남성 윈터 부츠',
    description:
      '방수와 투습이 되는 DrymaxX® 멤브레인 삭스 구조와 따뜻한 텍스타일 안감을 갖춘 할티의 남성용 레이스업 윈터 부츠입니다. 갑피는 수성 PU로 만든 관리하기 쉬운 합성 가죽이며, 가볍고 쿠션감 있는 Phylon 미드솔과 접지력 좋은 고무 아웃솔을 조합했습니다. 할티는 겨울철 긴 야외 활동을 위해 이 부츠를 만들었으며, 발 모양에 맞춘 인솔은 뺄 수 있습니다.',
    specs: [
      '합성 가죽, 폴리우레탄 80%, 재활용 폴리에스터 20%. 촘촘한 메시 원단, 재활용 폴리에스터 100%. DrymaxX® 멤브레인',
      'Phylon 미드솔, 고무 아웃솔, 발 모양에 맞춘 탈착식 EVA 인솔',
      '1.1 kg',
      '38, 39, 40, 41, 42, 43, 44, 45, 46',
      'Otter Brown',
      '젖은 스펀지와 중성 비누로 닦으세요. 실온 또는 40 °C 이하에서 말리고, 난방기 위나 뜨거운 사우나 안에서는 절대 말리지 마세요',
    ],
    specLabels: [undefined, '밑창', undefined, undefined, undefined, undefined],
  },
  'halti-metso-mid-winter-boots-men': {
    name: '할티 Metso Mid DX 남성 윈터 부츠',
    description:
      'Thinsulate™ 보온재와 따뜻한 텍스타일 파일 안감을 갖춘 할티의 남성용 레이스업 윈터 부츠입니다. 방수 DrymaxX® 멤브레인 삭스 구조가 발을 감싸고, 갑피는 스웨이드, PU 가죽, 부드러운 텍스타일을 조합했으며, 탈착식 충격 흡수 Comfort+ 인솔은 발 모양에 맞춘 형태입니다. 할티가 안내하는 주 용도는 레저이며, TPR 고무 아웃솔은 다양한 노면에서 접지력을 발휘합니다.',
    specs: [
      '스웨이드, 가죽 100%. PU 가죽, 폴리에스터 50%, 폴리우레탄 50%. 부드러운 텍스타일, 폴리에스터 100%',
      'TPR 아웃솔, 발 모양에 맞춘 탈착식 Comfort+ 인솔',
      '1.1 kg',
      '40, 41, 42, 43, 44, 45, 46, 47',
      'Apple Cinnamon Brown',
      '젖은 스펀지와 중성 비누로 닦으세요. 실온 또는 40 °C 이하에서 말리고, 난방기 위나 뜨거운 사우나 안에서는 절대 말리지 마세요. 건조하고 통풍이 잘되는 곳에 보관하세요',
    ],
    specLabels: [undefined, '밑창', undefined, undefined, undefined, undefined],
  },
  'halti-skene-winter-boots-women': {
    name: '할티 Skene DX 여성 윈터 부츠',
    description:
      '안쪽 지퍼로 쉽게 신고 끈으로 핏을 조절하는 할티의 여성용 윈터 부츠입니다. DrymaxX® 멤브레인 삭스 구조와 따뜻한 텍스타일 파일 안감이 변덕스러운 날씨에도 발을 보송하고 따뜻하게 지켜 주며, 보온 인솔이 아래에서 올라오는 냉기를 막아 줍니다. 가벼운 Phylon 미드솔이 착용감을 높이고, 고무 아웃솔은 겨울철 노면에서 접지력을 발휘합니다.',
    specs: [
      'Poly pongee, 폴리에스터 100%. 스웨이드, 가죽 100%. DrymaxX® 멤브레인',
      'Phylon 미드솔, 고무 아웃솔, 보온 EVA 인솔',
      '0.8 kg',
      '36, 37, 38, 39, 40, 41, 42',
      'Fog Beige, Glacier Grey',
      '젖은 스펀지와 중성 비누로 닦으세요. 실온 또는 40 °C 이하에서 말리고, 난방기 위나 뜨거운 사우나 안에서는 절대 말리지 마세요',
    ],
    specLabels: [undefined, '밑창', undefined, undefined, undefined, undefined],
  },
  'halti-sletta-zip-winter-boots-women': {
    name: '할티 Sletta Zip DX 여성 윈터 부츠',
    description:
      '지퍼, 플리스 안감, Thinsulate™ 충전재, 방수 DrymaxX® 멤브레인을 갖춘 할티의 부드러운 여성용 미드컷 부츠입니다. 고무 소재의 Halti GripmaxX Arctic 아웃솔은 눈과 질척하게 녹은 눈에 맞게 설계되었고, 그 위에 가볍고 충격을 흡수하는 Phylon 미드솔이 있습니다. 양말 같은 구조가 발에 잘 맞도록 돕고, Thermo 인솔은 뺄 수 있습니다.',
    specs: [
      '매끄러운 태피터 타입 원단에 부드러운 퀼팅 갑피와 스웨이드 보강, 폴리에스터 100%. 스웨이드, 가죽 100%',
      'Halti GripmaxX Arctic 고무 아웃솔, Phylon 미드솔, 탈착식 Thermo 인솔',
      '0.7 kg',
      '36, 37, 38, 39, 40, 41, 42',
      'Apple Cinnamon Brown, Black/White',
      '젖은 스펀지와 중성 비누로 닦으세요. 실온 또는 40 °C 이하에서 말리고, 난방기 위나 뜨거운 사우나 안에서는 절대 말리지 마세요',
    ],
    specLabels: [undefined, '밑창', undefined, undefined, undefined, undefined],
  },
  'sk-suomi-foam-finger': {
    name: 'Suomi 응원용 폼 핑거 23 x 45 cm',
    description:
      'Happy Orange의 Suomi 응원 라인에서 나온 23 x 45 cm 응원용 폼 핑거입니다. 경기, 행사 등 관중 속에서 눈에 띄고 싶은 자리를 위해 만들었습니다. 파란 손에 FINLAND 글자와 핀란드 국기가 들어가 있습니다.',
    specs: [
      '23 x 45 cm',
      '파란 바탕에 FINLAND와 핀란드 국기',
      '6430080071500',
    ],
    specLabels: [undefined, '디자인', 'EAN'],
  },
  'sk-suomi-drawstring-bag': {
    name: 'Suomi 스트링 백팩, 핀란드 국기',
    description:
      '핀란드 국기가 들어간 Tammer의 스트링 백팩입니다. 경기 원정길이나 응원단 활동에 알맞고, 기념품이나 소장품, 선물로도 좋습니다.',
    specs: [
      '핀란드 국기',
      '6410413343443',
    ],
    specLabels: ['디자인', 'EAN'],
  },
  'sk-suomi-braces': {
    name: 'Suomi 멜빵, 파란색',
    description:
      '폭 3.5 cm의 파란색 H형 멜빵으로, 끈을 따라 SUOMI와 FINLAND 글자, 핀란드 국기가 들어가 있습니다. 뒤쪽은 단단히 물리는 올메탈 클립 두 개로 고정합니다. Suomikauppa.fi가 디자인하고 Helsingin Olkain이 제작했으며, Avainlippu(키 플래그) 마크가 있습니다.',
    specs: [
      '폭 3.5 cm',
      '파란색 바탕에 SUOMI와 FINLAND 글자, 핀란드 국기',
      'H형, 뒤쪽에 올메탈 클립 두 개',
      '디자인 Suomikauppa.fi, 제작 Helsingin Olkain',
      'Avainlippu(키 플래그)',
    ],
    specLabels: [undefined, undefined, '고정 방식', '디자인과 제작', '마크'],
  },
  'sk-suomi-spiky-wig': {
    name: 'Suomi 응원용 스파이크 가발',
    description:
      'Happy Orange의 Suomi 응원 라인에서 나온 뾰족머리 가발로, 경기, 행사 등 눈에 띄고 싶은 자리를 위해 만들었습니다. 핀란드 국기가 들어간 파란 헤어밴드에서 파란색과 흰색의 뾰족한 머리카락이 솟아 있습니다.',
    specs: [
      '파란색과 흰색',
      '헤어밴드에 핀란드 국기',
      '6430080071456',
    ],
    specLabels: [undefined, '디자인', 'EAN'],
  },
}
