import PDFDocument from 'pdfkit';
import { createWriteStream } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, 'guides', 'The-Secret-Craft-Guide.pdf');
const IMG_DIR = join(__dirname, '..', 'public', 'images');

// Brand colors
const AMBER = '#F59E0B';
const NIGHT = '#0F172A';
const GRAY = '#1F2937';
const GRAY_LIGHT = '#6B7280';
const WHITE = '#F9FAFB';
const PINK = '#EC4899';

// Convert WebP to PNG buffer for pdfkit (it doesn't support WebP)
async function loadImage(name) {
  try {
    const buf = await sharp(join(IMG_DIR, name)).png().toBuffer();
    return buf;
  } catch { return null; }
}

async function main() {
  const doc = new PDFDocument({ size: 'A4', margin: 0 });
  doc.pipe(createWriteStream(OUT));

  // Preload images
  const imgPuukko = await loadImage('prod-puukko-knife.webp');
  const imgKuksa = await loadImage('prod-kuksa-cup.webp');
  const imgBracelet = await loadImage('prod-sami-bracelet.webp');
  const imgJam = await loadImage('prod-berry-jam-set.webp');
  const imgBlanket = await loadImage('prod-wool-blanket.webp');
  const imgArtisan = await loadImage('cat-artisan-crafts.webp');

  const W = 595.28;
  const H = 841.89;
  const M = 50; // margin
  const CW = W - 2 * M; // content width

  // ─── Helper functions ───────────────────────────────────────────────
  function heading(text, y, size = 28) {
    doc.font('Helvetica-Bold').fontSize(size).fillColor(NIGHT).text(text, M, y, { width: CW });
  }
  function subheading(text, y, size = 16) {
    doc.font('Helvetica-Bold').fontSize(size).fillColor(AMBER).text(text, M, y, { width: CW });
  }
  function body(text, y, opts = {}) {
    doc.font('Helvetica').fontSize(11).fillColor(GRAY).text(text, M, y, { width: opts.width || CW, lineGap: 4 });
  }
  function pageNum(n) {
    doc.font('Helvetica').fontSize(8).fillColor(GRAY_LIGHT)
      .text(`${n}`, 0, H - 30, { width: W, align: 'center' });
    doc.font('Helvetica').fontSize(7).fillColor(GRAY_LIGHT)
      .text('LaplandGifts.com', W - 130, H - 30);
  }
  function decorLine(y) {
    doc.moveTo(M, y).lineTo(W - M, y).lineWidth(0.5).strokeColor(AMBER).stroke();
  }

  // ═══════════════════════════════════════════════════════════════════
  // PAGE 1: COVER
  // ═══════════════════════════════════════════════════════════════════
  doc.rect(0, 0, W, H).fill(NIGHT);

  // Amber accent bar
  doc.rect(0, 0, 8, H).fill(AMBER);

  // Title block
  doc.font('Helvetica').fontSize(12).fillColor(AMBER)
    .text('#LAPLANDVIBES', M + 20, 120, { width: CW });

  doc.font('Helvetica-Bold').fontSize(42).fillColor(WHITE)
    .text('The Secret', M + 20, 180, { width: CW });
  doc.font('Helvetica-Bold').fontSize(42).fillColor(AMBER)
    .text('Craft', M + 20, 230, { width: CW });

  doc.font('Helvetica').fontSize(14).fillColor(WHITE)
    .text("An Insider's Guide to Authentic\nLapland Craftsmanship", M + 20, 300, { width: CW, lineGap: 4 });

  // Product image on cover
  if (imgPuukko) {
    doc.image(imgPuukko, W / 2 - 30, 420, { width: 280, height: 280, fit: [280, 280] });
  }

  doc.font('Helvetica').fontSize(10).fillColor(GRAY_LIGHT)
    .text('A free guide by LaplandGifts.com', M + 20, H - 80, { width: CW });
  doc.font('Helvetica').fontSize(9).fillColor(GRAY_LIGHT)
    .text('Part of the #LaplandVibes ecosystem', M + 20, H - 65, { width: CW });

  // ═══════════════════════════════════════════════════════════════════
  // PAGE 2: WHY THIS GUIDE?
  // ═══════════════════════════════════════════════════════════════════
  doc.addPage();
  doc.rect(0, 0, W, H).fill(WHITE);

  heading('Why This Guide?', 60, 32);
  decorLine(100);

  body(
    "Walk into any souvenir shop in Rovaniemi, Levi, or Saariselka, and you'll find shelves full of 'authentic Lapland' products. Reindeer magnets, Viking-themed keychains, northern lights mugs with stock photos printed on them.\n\n" +
    "Here's the truth most tourists never learn: the vast majority of these products are mass-manufactured outside Finland. They have nothing to do with Lapland's living craft traditions.\n\n" +
    "Meanwhile, the real artisans — the bladesmiths, the kuksa carvers, the Sami duodji makers — work quietly in small workshops scattered across the Arctic. Their work isn't on the tourist strip. It's in villages you've never heard of, sold through word of mouth and small local shops.\n\n" +
    "This guide bridges that gap. In the next 14 pages, you'll learn:",
    120
  );

  const bullets = [
    'How to tell a handforged puukko from a factory blade in 10 seconds',
    'Why a real kuksa cup costs 10x more than a fake — and why it\'s worth it',
    'The cultural significance of Sami duodji and why imitations cause real harm',
    'Where to find genuine artisan products, both in Lapland and online',
    'Five golden rules that will save you from ever buying a fake souvenir again',
  ];

  let by = 370;
  bullets.forEach(b => {
    doc.circle(M + 8, by + 5, 3).fill(AMBER);
    doc.font('Helvetica').fontSize(11).fillColor(GRAY).text(b, M + 20, by, { width: CW - 20, lineGap: 2 });
    by += 35;
  });

  body(
    "By the end, you won't just be a smarter shopper — you'll understand the stories, traditions, and people behind every authentic piece.",
    by + 15
  );

  pageNum(2);

  // ═══════════════════════════════════════════════════════════════════
  // PAGE 3-4: PUUKKO
  // ═══════════════════════════════════════════════════════════════════
  doc.addPage();
  doc.rect(0, 0, W, H).fill(WHITE);

  subheading('CHAPTER 1', 50, 12);
  heading('Puukko — Finland\'s\nNational Tool', 68, 30);
  decorLine(140);

  // Image first, full width
  if (imgPuukko) {
    doc.image(imgPuukko, M, 155, { width: CW, height: 160, fit: [CW, 160] });
  }

  body(
    "The puukko is not just a knife — it's a Finnish cultural symbol with over 1,000 years of history. Every Finn had one. It was a tool for survival: building shelter, preparing food, crafting other tools.\n\n" +
    "Today, a handmade puukko from a master bladesmith is one of the finest gifts you can bring from Lapland. But the market is flooded with factory-made imitations. Here's how to tell them apart.",
    330
  );

  subheading('5 Signs of an Authentic Handmade Puukko', 450, 14);

  const puukkoSigns = [
    ['1. The blade has character', 'A handforged blade shows subtle hammer marks, a slight asymmetry, and a carbon steel edge that develops a natural patina over time. Factory blades are perfectly uniform and use stainless steel.'],
    ['2. Curly birch handle', 'The best puukkos use visakoivu (curly birch) — a rare wood with wavy grain patterns. Each piece is unique. Factory handles use dyed, straight-grained wood or plastic.'],
    ['3. The leather sheath is hand-stitched', 'Look at the sheath. Hand-stitched leather with a wet-molded fit means someone spent hours on it. Machine-stitched sheaths with glued seams are mass-produced.'],
    ['4. The maker signs their work', 'Real bladesmiths stamp or engrave their name on the blade. If there\'s no maker mark, it\'s likely factory-made.'],
    ['5. It costs what skilled labor costs', 'A genuine handmade puukko starts around 80-150 euros. If it\'s 20 euros in a tourist shop, it was made in a factory — likely outside Finland.'],
  ];

  let py = 475;
  puukkoSigns.forEach(([title, desc]) => {
    doc.font('Helvetica-Bold').fontSize(11).fillColor(NIGHT).text(title, M, py, { width: CW });
    py += 16;
    doc.font('Helvetica').fontSize(10).fillColor(GRAY_LIGHT).text(desc, M + 15, py, { width: CW - 15, lineGap: 2 });
    py += 48;
  });

  pageNum(3);

  // ═══════════════════════════════════════════════════════════════════
  // PAGE 5-6: KUKSA
  // ═══════════════════════════════════════════════════════════════════
  doc.addPage();
  doc.rect(0, 0, W, H).fill(WHITE);

  subheading('CHAPTER 2', 50, 12);
  heading('Kuksa — The Arctic\nCoffee Cup', 68, 30);
  decorLine(140);

  if (imgKuksa) {
    doc.image(imgKuksa, M, 155, { width: 200, height: 150, fit: [200, 150] });
  }

  body(
    "The kuksa (or guksi in Sami) is a drinking cup carved from birch burl — the knotted, gnarled growth that appears on birch trees in the Arctic. It's been used by the Sami people and Finnish woodsmen for centuries.\n\n" +
    "A genuine kuksa is carved from a single piece of burl. The natural oils in the burl make it naturally waterproof. The curved grain gives each cup a unique, organic shape that no machine can replicate.",
    155, { width: CW - 220 }
  );

  subheading('Real vs. Machine-Made: The Quick Test', 360, 14);

  const kuksaTests = [
    ['Weight', 'A real burl kuksa feels solid and dense. Machine-turned cups from regular birch are noticeably lighter.'],
    ['Grain pattern', 'Burl wood has swirling, chaotic grain patterns. Regular birch has straight, parallel lines.'],
    ['Shape', 'Hand-carved kuksa cups have subtle asymmetry — no two are identical. Machine cups are perfectly round.'],
    ['Interior finish', 'The inside of a real kuksa shows gentle tool marks from the hook knife. Machine cups are sanded smooth.'],
    ['Smell', 'Fresh birch burl has a distinctive sweet, woody scent. Factory cups often smell of varnish or lacquer.'],
  ];

  let ky = 385;
  kuksaTests.forEach(([title, desc]) => {
    doc.font('Helvetica-Bold').fontSize(10).fillColor(AMBER).text(title + ':', M, ky, { continued: true, width: CW });
    doc.font('Helvetica').fontSize(10).fillColor(GRAY).text(' ' + desc, { lineGap: 2 });
    ky += 38;
  });

  // Care instructions box
  doc.roundedRect(M, ky + 15, CW, 110, 8).fill('#FEF3C7');
  doc.font('Helvetica-Bold').fontSize(12).fillColor(NIGHT).text('How to Care for Your Kuksa', M + 15, ky + 30, { width: CW - 30 });
  doc.font('Helvetica').fontSize(10).fillColor(GRAY)
    .text(
      "Never put a kuksa in the dishwasher — hot water and detergent will crack the wood and strip its natural oils. Instead, rinse with lukewarm water, wipe dry, and occasionally rub with food-safe oil (like walnut or flaxseed oil). A well-cared-for kuksa lasts a lifetime and develops a beautiful golden patina.",
      M + 15, ky + 50, { width: CW - 30, lineGap: 3 }
    );

  pageNum(4);

  // ═══════════════════════════════════════════════════════════════════
  // PAGE 7-8: DUODJI
  // ═══════════════════════════════════════════════════════════════════
  doc.addPage();
  doc.rect(0, 0, W, H).fill(WHITE);

  subheading('CHAPTER 3', 50, 12);
  heading('Duodji — Sami\nHandicraft Tradition', 68, 30);
  decorLine(140);

  body(
    "Duodji is the Sami word for handicraft, but it means far more than just making things by hand. Duodji is a living cultural practice that carries knowledge, identity, and spiritual meaning. Every pattern, every material choice, every technique tells a story about the Sami relationship with the Arctic landscape.\n\n" +
    "The most recognizable duodji craft is tin-thread embroidery on reindeer leather — bracelets, pouches, and belts decorated with intricate braided patterns using thin threads of tin or pewter wire. This technique dates back centuries and requires years of practice to master.",
    155
  );

  if (imgBracelet) {
    doc.image(imgBracelet, M, 330, { width: CW, height: 180, fit: [CW, 180] });
  }

  // Warning box
  doc.roundedRect(M, 530, CW, 120, 8).fill('#FEE2E2');
  doc.font('Helvetica-Bold').fontSize(12).fillColor('#991B1B').text('Why Imitations Cause Real Harm', M + 15, 545, { width: CW - 30 });
  doc.font('Helvetica').fontSize(10).fillColor('#7F1D1D')
    .text(
      "Mass-produced copies of Sami designs — sold without permission and without cultural context — undermine the livelihood of real Sami artisans and trivialize sacred cultural symbols. Some patterns have specific family or community significance. Wearing a fake Sami bracelet is like wearing someone else's family crest.\n\n" +
      "Always look for the Sami Duodji certification mark, or buy from authorized sellers like Duodji Shop in Inari.",
      M + 15, 565, { width: CW - 30, lineGap: 3 }
    );

  subheading('The Sami Duodji Mark', 670, 13);
  body(
    "The official Sami Duodji mark guarantees the product was made by a Sami artisan using traditional techniques and materials. It's your only guarantee of authenticity. If a product doesn't carry this mark and claims to be 'Sami-made', be skeptical.",
    690
  );

  pageNum(5);

  // ═══════════════════════════════════════════════════════════════════
  // PAGE 9-10: LAPLAND FLAVORS
  // ═══════════════════════════════════════════════════════════════════
  doc.addPage();
  doc.rect(0, 0, W, H).fill(WHITE);

  subheading('CHAPTER 4', 50, 12);
  heading('The Taste of\nthe Arctic', 68, 30);
  decorLine(140);

  if (imgJam) {
    doc.image(imgJam, W - 230, 155, { width: 180, height: 140, fit: [180, 140] });
  }

  body(
    "Lapland's wild berries, game meats, and freshwater fish are some of the purest foods on Earth. The extreme climate — midnight sun in summer, polar darkness in winter — produces intense flavors in everything that grows here.\n\n" +
    "The best food gifts from Lapland are wild berry preserves, reindeer jerky, and smoked Arctic char. But not everything labeled 'Lapland' is the real thing.",
    155, { width: CW - 200 }
  );

  subheading('Berry Season Calendar', 340, 14);

  const berries = [
    ['Cloudberry (lakka)', 'July-August', 'Golden orange, tastes like honey-apricot. The most prized and expensive Arctic berry. Grows only in wild bogs — impossible to farm commercially.'],
    ['Blueberry (mustikka)', 'July-September', 'Finnish wild blueberries have 3-4x the antioxidants of farmed blueberries. Darker, more intense flavor.'],
    ['Lingonberry (puolukka)', 'August-October', 'Tart, bright red. The staple berry of Nordic cuisine. Grows abundantly but the best ones come from old-growth forests.'],
    ['Cranberry (karpalo)', 'September-October', 'Grows in Arctic bogs. Much smaller and more tart than American cranberries. Often made into juice or liqueur.'],
  ];

  let fy = 365;
  berries.forEach(([name, season, desc]) => {
    doc.font('Helvetica-Bold').fontSize(11).fillColor(NIGHT).text(name, M, fy, { width: 200 });
    doc.font('Helvetica-Bold').fontSize(10).fillColor(AMBER).text(season, M + 210, fy, { width: 100 });
    doc.font('Helvetica').fontSize(10).fillColor(GRAY_LIGHT).text(desc, M, fy + 16, { width: CW, lineGap: 2 });
    fy += 62;
  });

  // Tip box
  doc.roundedRect(M, fy + 10, CW, 80, 8).fill('#FEF3C7');
  doc.font('Helvetica-Bold').fontSize(11).fillColor(NIGHT).text('How to Spot Wild vs. Farmed', M + 15, fy + 25, { width: CW - 30 });
  doc.font('Helvetica').fontSize(10).fillColor(GRAY)
    .text(
      "Check the ingredient label. Wild berries are labeled 'luonnonvarainen' (wild) in Finnish. If it says 'marmelaadi' (marmalade) instead of 'hillo' (jam), it likely contains more sugar than berries. The best producers — like Arctic Delice — list the berry percentage prominently.",
      M + 15, fy + 42, { width: CW - 30, lineGap: 2 }
    );

  pageNum(6);

  // ═══════════════════════════════════════════════════════════════════
  // PAGE 11-12: FIVE GOLDEN RULES
  // ═══════════════════════════════════════════════════════════════════
  doc.addPage();
  doc.rect(0, 0, W, H).fill(WHITE);

  subheading('CHAPTER 5', 50, 12);
  heading('The Buyer\'s Five\nGolden Rules', 68, 30);
  decorLine(140);

  body(
    "After reading the chapters above, you know what to look for in specific products. These five rules work for any Lapland craft — apply them everywhere.",
    155
  );

  const rules = [
    ['1. Ask for the Maker\'s Name', "If the seller can't tell you who made it, it wasn't handmade. Real artisans are proud of their work and known in their community. The best shops display the maker's photo and bio next to their products."],
    ['2. Look for Certification Marks', "The Sami Duodji mark for Sami crafts. The Avainlippu (Key Flag) for Finnish-made products. Without these, 'Made in Finland' means nothing — the product may have been assembled from imported parts."],
    ['3. Check the Materials', "Authentic Lapland crafts use local materials: birch burl, reindeer leather, carbon steel, tin thread, Arctic berries. If it's plastic, synthetic leather, or stainless steel, it's factory-made regardless of what the label says."],
    ['4. If It\'s Cheap, It\'s Not Real', "A handmade puukko takes 8-20 hours of skilled labor. A hand-carved kuksa takes 3-5 days. A tin-thread bracelet takes 2-3 days. These things cannot cost 15 euros. Cheap means mass-produced."],
    ['5. Buy Direct When Possible', "The artisan gets a bigger share, you get a better price, and you get to hear the story behind what you're buying. LaplandGifts.com works directly with artisans — every product page names the maker."],
  ];

  let ry = 220;
  rules.forEach(([title, desc]) => {
    doc.roundedRect(M, ry, CW, 95, 6).lineWidth(1).strokeColor('#E5E7EB').stroke();
    doc.font('Helvetica-Bold').fontSize(13).fillColor(AMBER).text(title, M + 15, ry + 12, { width: CW - 30 });
    doc.font('Helvetica').fontSize(10).fillColor(GRAY).text(desc, M + 15, ry + 32, { width: CW - 30, lineGap: 2 });
    ry += 108;
  });

  pageNum(7);

  // ═══════════════════════════════════════════════════════════════════
  // PAGE 13-14: WHERE TO BUY
  // ═══════════════════════════════════════════════════════════════════
  doc.addPage();
  doc.rect(0, 0, W, H).fill(WHITE);

  subheading('CHAPTER 6', 50, 12);
  heading('Where to Find\nthe Real Thing', 68, 30);
  decorLine(140);

  body(
    "Whether you're in Lapland right now or planning from home, these are trusted sources for authentic crafts.",
    155
  );

  subheading('In Lapland', 200, 14);

  const inLapland = [
    ['LAURI Handicrafts, Tornio', 'Family workshop since 1981. Puukko knives and kuksa cups. You can watch the artisans work. laurihouse.com'],
    ['Duodji Shop, Inari', 'The only authorized retailer of certified Sami duodji crafts. Run by Sami artisans. duodjishop.fi'],
    ['Jaskepuu, Sodankyla', 'Master kuksa carver. Custom orders with your name or logo carved in. jaskepuu.fi'],
    ['Arctic Delice, Rovaniemi', 'Wild berry products, reindeer delicacies. B2B-ready, ships throughout EU. arcticdelice.fi'],
    ['Aurora Shop, Rovaniemi', 'Curated selection of 300+ authentic Finnish products. Ships to 50+ countries. aurorashop.fi'],
  ];

  let wy = 225;
  inLapland.forEach(([name, desc]) => {
    doc.font('Helvetica-Bold').fontSize(11).fillColor(NIGHT).text(name, M, wy, { width: CW });
    doc.font('Helvetica').fontSize(10).fillColor(GRAY_LIGHT).text(desc, M, wy + 16, { width: CW, lineGap: 2 });
    wy += 48;
  });

  subheading('Online', wy + 10, 14);
  wy += 35;

  doc.roundedRect(M, wy, CW, 85, 8).fill('#FEF3C7');
  doc.font('Helvetica-Bold').fontSize(14).fillColor(NIGHT).text('LaplandGifts.com', M + 15, wy + 15, { width: CW - 30 });
  doc.font('Helvetica').fontSize(11).fillColor(GRAY)
    .text(
      "Our own curated shop — bringing authentic Lapland crafts online. Every product names the maker, tells their story, and ships with a certificate of origin. Plus #LaplandVibes branded merchandise designed in-house.",
      M + 15, wy + 35, { width: CW - 30, lineGap: 3 }
    );

  subheading('More Lapland Resources', wy + 120, 14);
  const resources = [
    'LaplandStays.com — Book authentic cabins and hotels',
    'LaplandActivities.online — Northern lights safaris and experiences',
    'LaplandDining.com — The best restaurants in Lapland',
    'Lapland.blog — Travel stories and trip inspiration',
  ];

  let rry = wy + 145;
  resources.forEach(r => {
    doc.circle(M + 8, rry + 5, 3).fill(AMBER);
    doc.font('Helvetica').fontSize(10).fillColor(GRAY).text(r, M + 20, rry, { width: CW - 20 });
    rry += 22;
  });

  pageNum(8);

  // ═══════════════════════════════════════════════════════════════════
  // PAGE 15: BACK COVER
  // ═══════════════════════════════════════════════════════════════════
  doc.addPage();
  doc.rect(0, 0, W, H).fill(NIGHT);
  doc.rect(0, 0, 8, H).fill(AMBER);

  doc.font('Helvetica-Bold').fontSize(36).fillColor(WHITE)
    .text('Shop the\nReal Deal', M + 20, 200, { width: CW });

  doc.font('Helvetica').fontSize(14).fillColor(GRAY_LIGHT)
    .text(
      "Now you know how to spot authentic Lapland craftsmanship.\n\n" +
      "Visit LaplandGifts.com to browse our curated collection of genuine handcrafted products — every item sourced directly from Finnish artisans.\n\n" +
      "Sign up for our newsletter and be the first to know when new artisan drops are available.",
      M + 20, 310, { width: CW - 40, lineGap: 4 }
    );

  doc.font('Helvetica-Bold').fontSize(18).fillColor(AMBER)
    .text('laplandgifts.com', M + 20, 500, { width: CW });

  doc.font('Helvetica').fontSize(11).fillColor(GRAY_LIGHT)
    .text(
      "#LaplandVibes ecosystem:\nLaplandVibes.com | LaplandStays.com | LaplandActivities.online\nLaplandDining.com | Lapland.blog",
      M + 20, 550, { width: CW, lineGap: 3 }
    );

  doc.font('Helvetica').fontSize(9).fillColor(GRAY_LIGHT)
    .text('© 2026 Lapeso Oy. All rights reserved.', M + 20, H - 60, { width: CW });

  // Finalize
  doc.end();
  console.log(`Created: ${OUT}`);
}

main().catch(console.error);
