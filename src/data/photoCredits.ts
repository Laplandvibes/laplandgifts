/**
 * Provenance and licence receipt for every photograph on this site that is not a partner's own product picture.
 *
 * 9.10.2026 (Vesa 4.10.: swap the network's AI images for real photographs). The category, hero, guide-cover and
 * experience pictures were AI renders (Picsart / gpt-image-2, May-August 2026). Each is now a real photograph with a
 * licence that allows commercial use. Product pictures (`prod-*`) are the partners' own and are not listed here.
 *
 * One image, one site: every file was checked against every LaplandVibes repo by name, by 64×36 pixel comparison and
 * by photographer + day (siblings) and reserved in _kuvavaihto-20261004/ledger.tsv. Receipt fields: source, title,
 * author as written there, licence with version, taken, retrieved, price 0 EUR, changes, checks.
 *
 * 🔴 CC BY-SA files are RESIZED ONLY, never cropped (a crop is an adapted work and carries the ShareAlike duty): the
 * file is the whole frame and object-cover crops it on screen. CC BY, CC0 and public-domain files may be cropped; the
 * crop is declared in `changes` and printed as "cropped" beside the licence (CC BY §3(a)(1)(B)).
 * 🔴 Pictures that are the source of a share card (cat-design, cat-clothing, cat-artisan-crafts, cat-treats, hero-shop)
 * must not be CC BY-SA (lv_permanent_rules §34.2).
 * 🔴 Key = the image name used in data/*.ts and the components (`cat-design`, `exp-husky`). The -480/-800 variants
 * share the credit.
 */
import type { Lang } from '../i18n/useLang'

export type PhotoCredit = {
  source: 'Wikimedia Commons' | 'Flickr' | 'Pexels'
  /** The source's own title of the file (CC BY §4(b): the title, if supplied). */
  title: string
  /** Author exactly as the source writes it. */
  author: string
  license: 'CC BY 2.0' | 'CC BY 3.0' | 'CC BY 4.0' | 'CC BY-SA 2.0' | 'CC BY-SA 3.0' | 'CC BY-SA 4.0' | 'CC0 1.0' | 'Public Domain Mark 1.0' | 'Pexels'
  licenseUrl: string
  /** File page at the source. */
  sourceUrl: string
  /** Commons file name, Flickr photo id or pexels:<id>. */
  sourceId: string
  taken: string
  retrieved: string
  /** The served file is a crop of the original (CC BY / CC0 / PD only): the credit says so. */
  cropped?: boolean
  /** What the picture shows, in English: the alt text and the card text must say this. */
  shows: string
  changes: string
  checks: string
}

export const CREDIT_WORDS: Record<Lang, { photo: string; photos: string; cropped: string }> = {
  en: { photo: 'Photo', photos: 'Photos', cropped: 'cropped' },
  fi: { photo: 'Kuva', photos: 'Kuvat', cropped: 'rajattu' },
  de: { photo: 'Foto', photos: 'Fotos', cropped: 'beschnitten' },
  ja: { photo: '写真', photos: '写真', cropped: 'トリミング' },
  es: { photo: 'Foto', photos: 'Fotos', cropped: 'recortada' },
  'pt-BR': { photo: 'Foto', photos: 'Fotos', cropped: 'recortada' },
  'zh-CN': { photo: '图片', photos: '图片', cropped: '已裁剪' },
  ko: { photo: '사진', photos: '사진', cropped: '잘라냄' },
  fr: { photo: 'Photo', photos: 'Photos', cropped: 'recadrée' },
  it: { photo: 'Foto', photos: 'Foto', cropped: 'ritagliata' },
  nl: { photo: 'Foto', photos: "Foto's", cropped: 'bijgesneden' },
  sv: { photo: 'Foto', photos: 'Foton', cropped: 'beskuren' },
}

const WHEN = '2026-10-09'
const CHECKS =
  'name, 64×36 pixel and photographer+day sibling check against all 29 repos 4.–9.10.2026; plates, faces and lettering checked at 100 %'

export const PHOTO_CREDITS: Record<string, PhotoCredit> = {
  "cat-design": {
    source: "Pexels", title: "Cups on a Round Wooden Board", author: "Jordan Benton",
    license: "Pexels", licenseUrl: "https://www.pexels.com/license/",
    sourceUrl: "https://www.pexels.com/photo/cups-on-a-round-wooden-board-4119134/", sourceId: "pexels:4119134",
    taken: "2020-04-09", retrieved: WHEN,
    shows: "Speckled enamel mugs and a green ceramic vase on a round wooden board",
    changes: "resized 6538×4359 → 2560×1707, AVIF + WebP; no crop", checks: CHECKS,
  },
  "cat-clothing": {
    source: "Pexels", title: "Close-up Photo of Folded Knitted Sweaters", author: "Vlada Karpovich",
    license: "Pexels", licenseUrl: "https://www.pexels.com/license/",
    sourceUrl: "https://www.pexels.com/photo/close-up-photo-of-folded-knitted-sweaters-5603269/", sourceId: "pexels:5603269",
    taken: "2020-10-14", retrieved: WHEN,
    shows: "A stack of folded hand-knitted sweaters with knitting needles",
    changes: "resized 5040×3360 → 2560×1707, AVIF + WebP; no crop", checks: CHECKS,
  },
  "cat-treats": {
    source: "Pexels", title: "Spoon in Jar of Jam", author: "ROMAN ODINTSOV",
    license: "Pexels", licenseUrl: "https://www.pexels.com/license/",
    sourceUrl: "https://www.pexels.com/photo/spoon-in-jar-of-jam-6588620/", sourceId: "pexels:6588620",
    taken: "2021-01-24", retrieved: WHEN,
    shows: "A jar of amber berry jam with a wooden spoon on a woven mat",
    changes: "resized 6720×4480 → 2560×1707, AVIF + WebP; no crop", checks: CHECKS,
  },
  "cat-superfoods": {
    source: "Pexels", title: "A Person Holding a Stainless Bowl with Red and Black Berries", author: "Barnabas Davoti",
    license: "Pexels", licenseUrl: "https://www.pexels.com/license/",
    sourceUrl: "https://www.pexels.com/photo/a-person-holding-a-stainless-bowl-with-red-and-black-berries-9220863/", sourceId: "pexels:9220863",
    taken: "2021-08-18", retrieved: WHEN,
    shows: "A steel bowl of wild blueberries and lingonberries held in one hand",
    changes: "resized 5854×3902 → 2560×1706, AVIF + WebP; no crop", checks: CHECKS,
  },
  "cat-pod-merch": {
    source: "Pexels", title: "A Black Shirt Hanging on the Wall", author: "Hanna Pad",
    license: "Pexels", licenseUrl: "https://www.pexels.com/license/",
    sourceUrl: "https://www.pexels.com/photo/a-black-shirt-hanging-on-the-wall-8532638/", sourceId: "pexels:8532638",
    taken: "2021-06-28", retrieved: WHEN,
    shows: "A plain black T-shirt on a hanger in window light",
    changes: "resized 6172×4115 → 2560×1707, AVIF + WebP; no crop", checks: CHECKS,
  },
  "cat-gift-experiences": {
    source: "Pexels", title: "A Person Holding a Gift", author: "Julia Filirovska",
    license: "Pexels", licenseUrl: "https://www.pexels.com/license/",
    sourceUrl: "https://www.pexels.com/photo/a-person-holding-a-gift-8257938/", sourceId: "pexels:8257938",
    taken: "2021-06-08", retrieved: WHEN,
    shows: "Hands in knitted mittens holding a kraft-paper gift box tied with red-and-white twine",
    changes: "resized 5616×3744 → 2560×1707, AVIF + WebP; no crop", checks: CHECKS,
  },
  "hero-shop": {
    source: "Pexels", title: "High Angle Shot of Gifts", author: "Leeloo The First",
    license: "Pexels", licenseUrl: "https://www.pexels.com/license/",
    sourceUrl: "https://www.pexels.com/photo/high-angle-shot-of-gifts-5802138/", sourceId: "pexels:5802138",
    taken: "2020-11-05", retrieved: WHEN,
    shows: "Gifts wrapped in woodland-print paper and jute twine on a pale grey table",
    changes: "resized 6016×4016 → 2560×1709, mirrored horizontally (subject on the right, text on the left), AVIF + WebP; no crop", checks: CHECKS,
  },
  "cat-artisan-crafts": {
    source: "Flickr", title: "Duodji", author: "Anne Marie Hætta",
    license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    sourceUrl: "https://www.flickr.com/photos/128320370@N02/16269201581/", sourceId: "16269201581",
    taken: "2014-12-29", retrieved: WHEN,
    shows: "A Sámi duodji leather pouch with a woven border and beads on a wooden table",
    changes: "resized 4786×3191 → 2560×1707, AVIF + WebP; no crop", checks: CHECKS,
  },
  "guide-craft": {
    source: "Wikimedia Commons", title: "Puukko 1939-1940.jpg", author: "5snake5",
    license: "CC0 1.0", licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Puukko_1939-1940.jpg", sourceId: "Puukko 1939-1940.jpg",
    taken: "2019-03-15", retrieved: WHEN,
    shows: "A Finnish puukko knife with a birch handle and a leather sheath on a wooden table",
    changes: "resized 4955×2385 → 1600×770, AVIF + WebP; no crop", checks: CHECKS,
  },
  "guide-itinerary": {
    source: "Flickr", title: "Pink Skies", author: "Timo Newton-Syms",
    license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    sourceUrl: "https://www.flickr.com/photos/timo_w2s/6964047409/", sourceId: "6964047409",
    taken: "2012-03-07", retrieved: WHEN,
    shows: "Snow-laden spruces under a violet and pink sky with the moon rising, Ruka, Finland",
    changes: "format only (1600×1068, AVIF + WebP); no resize, no crop", checks: CHECKS,
  },
  "exp-husky": {
    source: "Wikimedia Commons", title: "Into The Great Wide Open (108039389).jpeg", author: "Markus Trienke",
    license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Into_The_Great_Wide_Open_(108039389).jpeg", sourceId: "Into The Great Wide Open (108039389).jpeg",
    taken: "2015-03-17", retrieved: WHEN,
    shows: "A husky team pulling a sled over a frozen snow plain under a bright low sun, Kuusamo",
    changes: "resized 2048x1365 to 1600x1066 (AVIF + WebP, 1600/800/480 px); no crop (ShareAlike)", checks: CHECKS,
  },
  "exp-husky-selfdrive": {
    source: "Wikimedia Commons", title: "Saija 2014-184-0 (15422561003).jpg", author: "Markus Trienke",
    license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Saija_2014-184-0_(15422561003).jpg", sourceId: "Saija 2014-184-0 (15422561003).jpg",
    taken: "2014-12-11", retrieved: WHEN,
    shows: "A husky team seen from the sled on a snowy track across open bog land with sparse pines",
    changes: "resized 5472x3648 to 1600x1067; no crop (ShareAlike)", checks: CHECKS,
  },
  "exp-husky-kennel": {
    source: "Wikimedia Commons", title: "Ivan is sleeping (16906592665).jpg", author: "Markus Trienke",
    license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Ivan_is_sleeping_(16906592665).jpg", sourceId: "Ivan is sleeping (16906592665).jpg",
    taken: "2015-03-16", retrieved: WHEN,
    shows: "A sled dog resting with closed eyes on a straw bed in the snow, Kuusamo",
    changes: "resized 5472x3648 to 1600x1067; no crop (ShareAlike)", checks: CHECKS,
  },
  "exp-kids-husky-short": {
    source: "Wikimedia Commons", title: "Husky Ride (5316251836).jpg", author: "Timo Newton-Syms",
    license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Husky_Ride_(5316251836).jpg", sourceId: "Husky Ride (5316251836).jpg",
    taken: "2011-01-02", retrieved: WHEN,
    shows: "A husky sled and its driver far off on a snowy lake below snow-laden spruce forest, near Ruka",
    changes: "original 1600x1200 re-encoded at full size (AVIF + WebP); no crop (ShareAlike)", checks: CHECKS,
  },
  "exp-santa-reindeer": {
    source: "Flickr", title: "Lapland 2019", author: "John Dickinson",
    license: "Public Domain Mark 1.0", licenseUrl: "https://creativecommons.org/publicdomain/mark/1.0/",
    sourceUrl: "https://www.flickr.com/photos/chorley-photos/49344429527/", sourceId: "49344429527",
    taken: "2019-12-09", retrieved: WHEN,
    shows: "A husky team pulling a sled across a snowy field with frosted birches and spruce behind, Santa Park, Rovaniemi",
    changes: "resized 6000x4000 to 1600x1067; no crop", checks: CHECKS,
  },
  "exp-reindeer": {
    source: "Flickr", title: "Lapland 2021, Santa Claus Village", author: "John Dickinson",
    license: "Public Domain Mark 1.0", licenseUrl: "https://creativecommons.org/publicdomain/mark/1.0/",
    sourceUrl: "https://www.flickr.com/photos/chorley-photos/52121066542/", sourceId: "52121066542",
    taken: "2021-12-17", retrieved: WHEN,
    cropped: true,
    shows: "A reindeer pulling a red sleigh along a snowy forest track, Santa Claus Village, Rovaniemi",
    changes: "rotated upright (EXIF) 4000x6000, cropped to 3:2 and resized to 1600x1067", checks: CHECKS,
  },
  "exp-reindeer-forest": {
    source: "Wikimedia Commons", title: "Reindeer (8455770928).jpg", author: "Timo Newton-Syms",
    license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Reindeer_(8455770928).jpg", sourceId: "Reindeer (8455770928).jpg",
    taken: "2013-02-06", retrieved: WHEN,
    shows: "A harnessed reindeer standing by a wooden fence among snowy spruces, Ruka",
    changes: "original 1600x1067 re-encoded at full size (AVIF + WebP); no crop (ShareAlike)", checks: CHECKS,
  },
  "exp-reindeer-farm": {
    source: "Flickr", title: "reindeer herd Lapland", author: "Heather Sunderland",
    license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    sourceUrl: "https://www.flickr.com/photos/rukakuusamo/5725028351/", sourceId: "5725028351",
    taken: "2011-02-14", retrieved: WHEN,
    shows: "A reindeer herd on trampled snow in front of a frosted spruce forest, Ruka",
    changes: "resized 3499x2629 to 1600x1202; no crop", checks: CHECKS,
  },
  "exp-santavillage": {
    source: "Wikimedia Commons", title: "Santa Claus Village 09.jpg", author: "Moskenes",
    license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Santa_Claus_Village_09.jpg", sourceId: "Santa Claus Village 09.jpg",
    taken: "2025-02-10", retrieved: WHEN,
    shows: "A snowy path between pole fences leading to the log buildings of Santa Claus Village, Rovaniemi",
    changes: "resized 1920x1280 to 1600x1067; no crop (ShareAlike)", checks: CHECKS,
  },
  "exp-snowhotel": {
    source: "Flickr", title: "Lapland 2021, Snowman World, Santa Claus Village", author: "John Dickinson",
    license: "Public Domain Mark 1.0", licenseUrl: "https://creativecommons.org/publicdomain/mark/1.0/",
    sourceUrl: "https://www.flickr.com/photos/chorley-photos/52122098311/", sourceId: "52122098311",
    taken: "2021-12-17", retrieved: WHEN,
    cropped: true,
    shows: "An ice-bear sculpture glowing in violet light beside a reindeer-fur bench in a snow hotel (Snowman World, Santa Claus Village)",
    changes: "rotated upright (EXIF) 4000x6000, cropped to 4:3 and resized to 1600x1200", checks: CHECKS,
  },
  "exp-kids-snowpark": {
    source: "Flickr", title: "Lapland 2021, Snowman World, Santa Claus Village", author: "John Dickinson",
    license: "Public Domain Mark 1.0", licenseUrl: "https://creativecommons.org/publicdomain/mark/1.0/",
    sourceUrl: "https://www.flickr.com/photos/chorley-photos/52122130878/", sourceId: "52122130878",
    taken: "2021-12-17", retrieved: WHEN,
    shows: "Two visitors seen from behind on a snow slope with blue-lit steps in an ice hall, Snowman World, Santa Claus Village",
    changes: "resized 6000x4000 to 1600x1067; no crop", checks: CHECKS,
  },
  "exp-aurora-photo": {
    source: "Wikimedia Commons", title: "Christmas Day Aurora (27518127409).jpg", author: "Timo Newton-Syms",
    license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Christmas_Day_Aurora_(27518127409).jpg", sourceId: "Christmas Day Aurora (27518127409).jpg",
    taken: "2017-12-25", retrieved: WHEN,
    shows: "Green northern lights over frosted spruces and a lit ski slope, Ruka",
    changes: "resized 3776x2520 to 1600x1068; no crop (ShareAlike)", checks: CHECKS,
  },
  "exp-aurora": {
    source: "Wikimedia Commons", title: "Northern Lights (24798830390).jpg", author: "Timo Newton-Syms",
    license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Northern_Lights_(24798830390).jpg", sourceId: "Northern Lights (24798830390).jpg",
    taken: "2016-02-16", retrieved: WHEN,
    shows: "Green and violet northern lights over snow-laden spruces lit by floodlights, Ruka",
    changes: "resized 3776x2520 to 1600x1068; no crop (ShareAlike)", checks: CHECKS,
  },
  "exp-aurora-telescope": {
    source: "Wikimedia Commons", title: "Ritchey–Chrétien at Kickapoo Valley Reserve 2-b.jpg", author: "Brainandforce, edited from raw by Cart",
    license: "CC BY 4.0", licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Ritchey–Chrétien_at_Kickapoo_Valley_Reserve_2-b.jpg", sourceId: "Ritchey–Chrétien at Kickapoo Valley Reserve 2-b.jpg",
    taken: "2025-09-28", retrieved: WHEN,
    shows: "An astrophotography telescope on a tripod under a starry Milky Way sky (taken in Wisconsin, USA; the picture shows no Lapland place)",
    changes: "resized 4864x3648 to 1600x1200; no crop", checks: CHECKS,
  },
  "exp-snowmobile": {
    source: "Wikimedia Commons", title: "Snowmobile View (3366439940).jpg", author: "Timo Newton-Syms",
    license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Snowmobile_View_(3366439940).jpg", sourceId: "Snowmobile View (3366439940).jpg",
    taken: "2009-03-08", retrieved: WHEN,
    shows: "The view over the windshield of a snowmobile across a frozen lake with tracks in the snow, Ruka",
    changes: "resized 2592x1944 to 1600x1200; no crop (ShareAlike)", checks: CHECKS,
  },
  "exp-snowmobile-tundra": {
    source: "Flickr", title: "Snowmobiling to Russian Border", author: "Heather Sunderland",
    license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    sourceUrl: "https://www.flickr.com/photos/rukakuusamo/5753639817/", sourceId: "5753639817",
    taken: "2011-01-12", retrieved: WHEN,
    shows: "A snowmobile rider with a helmet crossing a frozen lake, two more machines far behind, Ruka",
    changes: "resized 3123x2351 to 1600x1204; no crop", checks: CHECKS,
  },
  "exp-snowmobile-night": {
    source: "Wikimedia Commons", title: "Rush Hour (32021284485).jpg", author: "Timo Newton-Syms",
    license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Rush_Hour_(32021284485).jpg", sourceId: "Rush Hour (32021284485).jpg",
    taken: "2016-12-31", retrieved: WHEN,
    shows: "Snowmobiles with their lights on crossing a frozen lake at dusk, ski slopes lit on the far shore, Ruka",
    changes: "resized 3072x1728 to 1600x900; no crop (ShareAlike)", checks: CHECKS,
  },
  "exp-korouoma": {
    source: "Wikimedia Commons", title: "Korouoma Canyon, Posio, Lapland (51140735748).jpg", author: "Nina R",
    license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Korouoma_Canyon,_Posio,_Lapland_(51140735748).jpg", sourceId: "Korouoma Canyon, Posio, Lapland (51140735748).jpg",
    taken: "2021-02-12", retrieved: WHEN,
    shows: "Frozen waterfalls on the rock wall of Korouoma canyon in falling snow, Posio",
    changes: "resized 3218x2198 to 1600x1093; no crop", checks: CHECKS,
  },
  "exp-nature-snowshoe": {
    source: "Wikimedia Commons", title: "Pinus sylvestris, Saariselkä, Laponie 2019 (46344164795).jpg", author: "Nicolas Buffler",
    license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Pinus_sylvestris,_Saariselkä,_Laponie_2019_(46344164795).jpg", sourceId: "Pinus sylvestris, Saariselkä, Laponie 2019 (46344164795).jpg",
    taken: "2019-02-21", retrieved: WHEN,
    shows: "Scots pines in snow against a blue sky with the low sun behind the trees, Saariselkä",
    changes: "resized portrait 2008x3008 to 1200x1798; whole frame, no crop (the card crops it on screen) (ShareAlike)", checks: CHECKS,
  },
  "exp-nature-park": {
    source: "Wikimedia Commons", title: "Riisitunturi, Finland - 49785991536.jpg", author: "Ninara",
    license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Riisitunturi,_Finland_-_49785991536.jpg", sourceId: "Riisitunturi, Finland - 49785991536.jpg",
    taken: "2020-02-20", retrieved: WHEN,
    shows: "Snow-laden spruces (\"tykky\") at Riisitunturi under a pink and blue evening sky, Posio",
    changes: "resized 4870x3079 to 1600x1011; no crop", checks: CHECKS,
  },
  "exp-nature-wildlife": {
    source: "Wikimedia Commons", title: "Ursus arctos in Ranua zoo.JPG", author: "Rorolinus",
    license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Ursus_arctos_in_Ranua_zoo.JPG", sourceId: "Ursus arctos in Ranua zoo.JPG",
    taken: "2013-03-07", retrieved: WHEN,
    shows: "A brown bear sitting in the snow, Ranua Zoo",
    changes: "resized 4608x3456 to 1600x1200; no crop (ShareAlike)", checks: CHECKS,
  },
  "exp-icebreaker": {
    source: "Flickr", title: "rompighiaccio in lapponia", author: "arcticroute.com",
    license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    sourceUrl: "https://www.flickr.com/photos/arcticroute/2108613838/", sourceId: "2108613838",
    taken: "2007-03-31", retrieved: WHEN,
    shows: "The deck rail of an icebreaker with a Finnish flag over broken sea ice, Kemi",
    changes: "resized 2816x2112 to 1600x1200; no crop", checks: CHECKS,
  },
  "exp-sauna-icehole": {
    source: "Flickr", title: "ice hole for after sauna", author: "Heather Sunderland",
    license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    sourceUrl: "https://www.flickr.com/photos/rukakuusamo/5790354162/", sourceId: "5790354162",
    taken: "2010-11-24", retrieved: WHEN,
    shows: "A rectangular ice-swimming hole cut into a snow-covered frozen lake",
    changes: "resized 4000x3000 to 1600x1200; no crop", checks: CHECKS,
  },
  "exp-sauna-smoke": {
    source: "Wikimedia Commons", title: "Public Smoke Sauna at Kuusijärvi, Vantaa, Finland, January 2021.jpg", author: "Ximonic (Simo Räsänen)",
    license: "CC BY 3.0", licenseUrl: "https://creativecommons.org/licenses/by/3.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Public_Smoke_Sauna_at_Kuusijärvi,_Vantaa,_Finland,_January_2021.jpg", sourceId: "Public Smoke Sauna at Kuusijärvi, Vantaa, Finland, January 2021.jpg",
    taken: "2021-01-10", retrieved: WHEN,
    shows: "A wooden smoke-sauna building in a snowy forest at dusk with warm light at the door (Vantaa, southern Finland; the picture claims no Lapland place)",
    changes: "resized 3000x2040 to 1600x1088; no crop", checks: CHECKS,
  },
  "exp-sauna-jacuzzi": {
    source: "Flickr", title: "Hot tub", author: "Andrei!",
    license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    sourceUrl: "https://www.flickr.com/photos/andrein/372192527/", sourceId: "372192527",
    taken: "2007-01-27", retrieved: WHEN,
    shows: "A wood-fired hot tub with a chimney on a snowy lakeshore in winter sun",
    changes: "original 1280x960 re-encoded at full size (AVIF + WebP); no resize, no crop (ShareAlike)", checks: CHECKS,
  },
}

/** Credit for an image name or a served path: query string, extension and -480/-800 size suffix are ignored. */
export function creditFor(nameOrSrc: string | undefined): PhotoCredit | undefined {
  if (!nameOrSrc) return undefined
  const base = nameOrSrc.split('?')[0].replace(/^\/images\//, '').replace(/\.(avif|webp|jpe?g)$/, '').replace(/-(?:320|480|640|800|1200|1600|1920)$/, '')
  return PHOTO_CREDITS[base]
}
