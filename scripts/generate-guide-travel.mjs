import PDFDocument from 'pdfkit';
import { createWriteStream } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, 'guides', '7-Days-of-Lapland-Magic.pdf');
const IMG_DIR = join(__dirname, '..', 'public', 'images');

const AMBER = '#F59E0B';
const NIGHT = '#0F172A';
const GRAY = '#1F2937';
const GRAY_LIGHT = '#6B7280';
const WHITE = '#F9FAFB';
const CYAN = '#06B6D4';

async function loadImage(name) {
  try { return await sharp(join(IMG_DIR, name)).png().toBuffer(); } catch { return null; }
}

async function main() {
  const doc = new PDFDocument({ size: 'A4', margin: 0 });
  doc.pipe(createWriteStream(OUT));

  const imgHero = await loadImage('hero-main.webp');
  const imgPuukko = await loadImage('prod-puukko-knife.webp');
  const imgKuksa = await loadImage('prod-kuksa-cup.webp');
  const imgJam = await loadImage('prod-berry-jam-set.webp');
  const imgGift = await loadImage('cat-gift-experiences.webp');

  const W = 595.28;
  const H = 841.89;
  const M = 50;
  const CW = W - 2 * M;

  function heading(text, y, size = 28) {
    doc.font('Helvetica-Bold').fontSize(size).fillColor(NIGHT).text(text, M, y, { width: CW });
  }
  function sub(text, y, size = 14) {
    doc.font('Helvetica-Bold').fontSize(size).fillColor(AMBER).text(text, M, y, { width: CW });
  }
  function body(text, y, opts = {}) {
    doc.font('Helvetica').fontSize(11).fillColor(GRAY).text(text, opts.x || M, y, { width: opts.width || CW, lineGap: 4 });
  }
  function dayHeader(day, title, y) {
    doc.roundedRect(M, y, CW, 45, 6).fill(NIGHT);
    doc.font('Helvetica-Bold').fontSize(12).fillColor(AMBER).text(`DAY ${day}`, M + 15, y + 8, { width: 60 });
    doc.font('Helvetica-Bold').fontSize(16).fillColor(WHITE).text(title, M + 80, y + 10, { width: CW - 100 });
  }
  function tip(text, y) {
    doc.roundedRect(M, y, CW, 55, 6).fill('#FEF3C7');
    doc.font('Helvetica-Bold').fontSize(9).fillColor(AMBER).text('LOCAL TIP', M + 12, y + 8, { width: CW - 24 });
    doc.font('Helvetica').fontSize(10).fillColor(GRAY).text(text, M + 12, y + 22, { width: CW - 24, lineGap: 2 });
  }
  function pageNum(n) {
    doc.font('Helvetica').fontSize(8).fillColor(GRAY_LIGHT).text(`${n}`, 0, H - 30, { width: W, align: 'center' });
    doc.font('Helvetica').fontSize(7).fillColor(GRAY_LIGHT).text('LaplandGifts.com', W - 130, H - 30);
  }
  function decorLine(y) {
    doc.moveTo(M, y).lineTo(W - M, y).lineWidth(0.5).strokeColor(AMBER).stroke();
  }

  // ═══ COVER ═══════════════════════════════════════════════════════
  doc.rect(0, 0, W, H).fill(NIGHT);
  doc.rect(0, 0, 8, H).fill(CYAN);

  doc.font('Helvetica').fontSize(12).fillColor(CYAN).text('#LAPLANDVIBES', M + 20, 100);
  doc.font('Helvetica-Bold').fontSize(48).fillColor(WHITE).text('7 Days of', M + 20, 160);
  doc.font('Helvetica-Bold').fontSize(48).fillColor(AMBER).text('Lapland', M + 20, 215);
  doc.font('Helvetica-Bold').fontSize(48).fillColor(CYAN).text('Magic', M + 20, 270);
  doc.font('Helvetica').fontSize(16).fillColor(GRAY_LIGHT)
    .text('The Only Itinerary\nYou\'ll Ever Need', M + 20, 340, { lineGap: 4 });

  if (imgHero) {
    doc.image(imgHero, M, 430, { width: CW, height: 280, fit: [CW, 280] });
  }

  doc.font('Helvetica').fontSize(10).fillColor(GRAY_LIGHT)
    .text('A free guide by LaplandGifts.com & Lapland.blog', M + 20, H - 60);

  // ═══ PAGE 2: WHO ARE YOU? ════════════════════════════════════════
  doc.addPage();
  doc.rect(0, 0, W, H).fill(WHITE);

  heading('Who Are You?', 60, 32);
  decorLine(100);

  body('This guide works for everyone, but your priorities might differ. Find your traveler type and focus on what matters most to you.', 115);

  const types = [
    ['The Family', 'Traveling with kids? Focus on reindeer farms (Day 5), Ranua Zoo (Day 6), and Santa\'s Village (Day 1). Skip the nightlife. Book family cabins with a sauna.', '#EFF6FF', '#1D4ED8'],
    ['The Couple', 'Romance seekers — prioritize the glass igloo (Day 4), northern lights safaris (Day 2), and fine dining in Levi. Book a private cabin with a hot tub.', '#FDF2F8', '#BE185D'],
    ['The Adventurer', 'You want the full Arctic experience: husky safari (Day 5), ice swimming (Day 6), backcountry snowshoeing (Day 4). Pack thermal everything.', '#ECFDF5', '#047857'],
    ['The Photographer', 'Chase the light: northern lights (Day 2), blue hour landscapes (Day 4), action shots with huskies (Day 5). Bring a sturdy tripod and extra batteries — cold kills them fast.', '#FEF3C7', '#92400E'],
  ];

  let ty = 180;
  types.forEach(([title, desc, bg, fg]) => {
    doc.roundedRect(M, ty, CW, 110, 8).fill(bg);
    doc.font('Helvetica-Bold').fontSize(14).fillColor(fg).text(title, M + 15, ty + 12, { width: CW - 30 });
    doc.font('Helvetica').fontSize(10).fillColor(GRAY).text(desc, M + 15, ty + 32, { width: CW - 30, lineGap: 3 });
    ty += 125;
  });

  pageNum(2);

  // ═══ PAGE 3: WHEN TO COME ════════════════════════════════════════
  doc.addPage();
  doc.rect(0, 0, W, H).fill(WHITE);

  heading('When to Come', 60, 32);
  decorLine(100);

  body('Lapland has four distinct seasons, each with its own magic. There is no bad time — only different experiences.', 115);

  const seasons = [
    ['WINTER (Nov-Mar)', 'Northern lights, snow activities, Christmas magic', 'The classic Lapland experience. Temperatures -10 to -30°C. This is when 80% of tourists visit. Book 3-6 months ahead for December-February. Best northern lights: clear nights in February-March.', CYAN],
    ['SPRING (Apr-May)', 'Bright snow, skiing, warming sun', 'The secret season. Long sunny days, still plenty of snow. Uncrowded. Perfect for skiing and snowmobile trips. Locals call April-May the best months — all the snow, none of the darkness.', AMBER],
    ['SUMMER (Jun-Aug)', 'Midnight sun, hiking, fishing', 'The sun never sets. Endless daylight for hiking, fishing, and berry picking. Mosquitoes are brutal in July — bring repellent. Midnight sun is magical but there are no northern lights.', '#22C55E'],
    ['AUTUMN (Sep-Oct)', 'Ruska colors, mushrooms, first aurora', 'The fells explode in red, orange, and gold. Best hiking season. Mushroom and berry foraging. Northern lights return in September. Fewer tourists, lower prices.', '#EF4444'],
  ];

  let sy = 165;
  seasons.forEach(([name, highlight, desc, color]) => {
    doc.roundedRect(M, sy, CW, 130, 6).lineWidth(2).strokeColor(color).stroke();
    doc.font('Helvetica-Bold').fontSize(14).fillColor(color).text(name, M + 15, sy + 12, { width: CW - 30 });
    doc.font('Helvetica-Bold').fontSize(10).fillColor(GRAY).text(highlight, M + 15, sy + 32, { width: CW - 30 });
    doc.font('Helvetica').fontSize(10).fillColor(GRAY_LIGHT).text(desc, M + 15, sy + 50, { width: CW - 30, lineGap: 3 });
    sy += 145;
  });

  pageNum(3);

  // ═══ PAGES 4-5: DAY 1 ════════════════════════════════════════════
  doc.addPage();
  doc.rect(0, 0, W, H).fill(WHITE);

  dayHeader(1, 'Arrival in Rovaniemi', 50);

  body(
    "Fly into Rovaniemi Airport — the official hometown of Santa Claus. Most flights arrive from Helsinki (1h 15min). The airport is 10km from the city center.\n\n" +
    "Don't rush to Santa's Village on your first day. Instead, settle into your accommodation, take a walk along the frozen Kemijoki river, and find a good restaurant for your first taste of Lappish cuisine.",
    120
  );

  sub('Morning / Afternoon', 260);
  body(
    "Check into your accommodation. We recommend staying in the city center for Day 1 — you'll move north tomorrow.\n\n" +
    "Visit Arktikum — the Arctic science center and museum. It's the single best introduction to Lapland's nature, history, and indigenous cultures. The glass corridor is stunning in any light. Allow 2-3 hours.",
    280
  );

  sub('Evening', 420);
  body(
    "Walk along the riverfront as the city lights reflect off the ice. In winter, the sky might already show faint aurora activity.\n\n" +
    "Dinner: Try reindeer stew (poronkäristys) with mashed potatoes and lingonberry jam at a local restaurant. This is the quintessential Lapland dish — warm, hearty, and deeply traditional.",
    440
  );

  tip("Skip Santa's Village on arrival day — it's packed in the afternoon. Go early morning on your return day (Day 7) instead. The village is actually free to enter — you only pay for activities and photos.", 570);

  sub('Where to Stay', 650);
  body("Check LaplandStays.com for curated cabins and hotels in Rovaniemi. Book a riverside property for the best aurora views from your window.", 670);

  pageNum(4);

  // ═══ PAGE 6: DAY 2 ═══════════════════════════════════════════════
  doc.addPage();
  doc.rect(0, 0, W, H).fill(WHITE);

  dayHeader(2, 'Levi — Adventure Capital', 50);

  body(
    "Drive or take a bus north to Levi (170km, ~2h). Levi is Lapland's largest ski resort and adventure hub. It's touristy, yes — but it's also the gateway to serious wilderness.\n\n" +
    "Today is your adrenaline day. Choose your adventure based on your traveler type.",
    120
  );

  sub('Choose Your Adventure', 240);

  const adventures = [
    ['Snowmobile Safari (3-4h)', 'Ride through frozen forests and across fell tops. No experience needed. Arctic clothing provided. 80-150€/person.'],
    ['Downhill Skiing / Snowboarding', '43 slopes, longest run 1.3km. Night skiing available. Rent gear at the resort. Day pass ~45€.'],
    ['Cross-Country Skiing', '230km of maintained tracks. Free to use. Rent gear in the village for ~25€/day.'],
    ['Ice Fishing', 'Guided trip to a frozen lake. Drill a hole, drop a line, wait in silence. Surprisingly meditative. 50-80€.'],
  ];

  let ay = 265;
  adventures.forEach(([title, desc]) => {
    doc.font('Helvetica-Bold').fontSize(11).fillColor(NIGHT).text(title, M, ay, { width: CW });
    doc.font('Helvetica').fontSize(10).fillColor(GRAY_LIGHT).text(desc, M + 15, ay + 16, { width: CW - 15, lineGap: 2 });
    ay += 52;
  });

  sub('Evening: Northern Lights Hunt', ay + 10);
  body(
    "This is why you came. Book a guided aurora safari — they take you away from light pollution to the best viewing spots. Guides know the weather patterns and will drive you to clear skies.\n\n" +
    "Season: September to March. Peak probability: February-March.\n" +
    "Best conditions: Clear sky, KP index 2+, after 9 PM.\n\n" +
    "Even if you don't see aurora tonight, you have 5 more nights. Patience is part of the Arctic experience.",
    ay + 30
  );

  tip("Download the 'My Aurora Forecast' app. Set alerts for KP 3+. When it goes off at 2 AM, get dressed and go outside — the best aurora often appears when everyone else is sleeping.", ay + 185);

  pageNum(5);

  // ═══ PAGE 7: DAY 3 ═══════════════════════════════════════════════
  doc.addPage();
  doc.rect(0, 0, W, H).fill(WHITE);

  dayHeader(3, 'Inari & Sami Culture', 50);

  body(
    "Drive north to Inari (260km from Levi, ~3h). This is where tourism meets authentic indigenous culture. Inari is the cultural heart of Finnish Sami — the Sami Parliament is here.\n\n" +
    "Today requires respect and openness. You're visiting a living culture, not a theme park.",
    120
  );

  sub('Morning: Siida Museum', 230);
  body(
    "Start at Siida — the Sami Museum and Nature Centre. This is the single most important cultural experience in Lapland. The indoor exhibition tells the story of the Sami people across thousands of years. The outdoor museum shows traditional buildings and reindeer herding culture.\n\nAllow 2-3 hours minimum. Audio guide available in 10 languages.",
    250
  );

  sub('Afternoon: Duodji Shop & Village Walk', 390);
  body(
    "Visit Duodji Shop — the authorized retailer of Sami handicrafts. This is where you'll find real tin-thread bracelets, reindeer leather goods, and traditional knives made by Sami artisans. Everything carries the Sami Duodji certification mark.\n\n" +
    "Walk through the village along the shore of Lake Inari. In winter, the frozen lake stretches to the horizon — a humbling sight.",
    410
  );

  sub('Evening: Sami Dining', 530);
  body(
    "Try Sami-inspired cuisine: smoked Arctic char, reindeer tongue, sautéed reindeer with mashed potatoes, cloudberry dessert. Several restaurants in Inari serve traditional Sami food.\n\n" +
    "If you're lucky, there may be a joik (traditional Sami song) performance at one of the local venues. Joik is one of the oldest living music traditions in Europe.",
    550
  );

  tip("Ask at Siida museum about visiting a reindeer herder's family. Some herders welcome visitors for an afternoon — you'll learn more in 2 hours with a real herder than in any tourist attraction.", 680);

  pageNum(6);

  // ═══ PAGE 8: DAY 4 ═══════════════════════════════════════════════
  doc.addPage();
  doc.rect(0, 0, W, H).fill(WHITE);

  dayHeader(4, 'Into the Wilderness', 50);

  body(
    "Today you leave civilization behind. Head to Urho Kekkonen National Park — one of Finland's largest wilderness areas (2,550 km²). This is raw, untouched Arctic nature.\n\n" +
    "Choose your level of adventure:",
    120
  );

  const wildOptions = [
    ['Option A: Day Hike (easy)', "Guided snowshoe hike through old-growth forest. 4-6 hours, lunch cooked over open fire in a wilderness hut. No experience needed. This is enough for most people to feel the Arctic silence. ~80€."],
    ['Option B: Overnight in a Wilderness Hut', "Hike to a remote cabin, spend the night. No electricity, no running water. Wood-burning stove, candles, and the most complete darkness you've ever experienced. Stars like you've never seen. ~150€ guided."],
    ['Option C: Glass Igloo / Aurora Dome', "For those who want wilderness luxury. Sleep under the northern lights in a heated glass structure. Book months ahead — these sell out fast. 300-500€/night."],
  ];

  let wy2 = 220;
  wildOptions.forEach(([title, desc]) => {
    doc.roundedRect(M, wy2, CW, 100, 6).lineWidth(1).strokeColor('#E5E7EB').stroke();
    doc.font('Helvetica-Bold').fontSize(12).fillColor(NIGHT).text(title, M + 12, wy2 + 10, { width: CW - 24 });
    doc.font('Helvetica').fontSize(10).fillColor(GRAY_LIGHT).text(desc, M + 12, wy2 + 28, { width: CW - 24, lineGap: 2 });
    wy2 += 115;
  });

  sub('What to Expect', wy2 + 10);
  body(
    "Temperature: -15 to -25°C in winter. Dress in layers (see Packing List).\n" +
    "Sound: Nothing. Absolute nothing. Arctic silence is something you feel in your chest.\n" +
    "Light: In December-January, you get 2-3 hours of blue twilight. In February-March, golden hour lasts all day.\n\n" +
    "This day will be the one you remember most from your entire trip.",
    wy2 + 30
  );

  pageNum(7);

  // ═══ PAGE 9: DAY 5 ═══════════════════════════════════════════════
  doc.addPage();
  doc.rect(0, 0, W, H).fill(WHITE);

  dayHeader(5, 'Huskies & Reindeer', 50);

  body(
    "Head back toward civilization for two of Lapland's most iconic experiences. These are tourist activities, yes — but done right, they're genuinely magical.",
    120
  );

  sub('Morning: Husky Safari', 190);
  body(
    "Visit a husky farm and take a 10-20km sled ride through the forest. You drive your own sled behind a team of 4-6 dogs. The power and enthusiasm of the dogs is infectious.\n\n" +
    "Before the ride, spend time with the dogs — most farms let you play with puppies and learn about each dog's personality. After the ride, warm up with hot chocolate by the fire.\n\n" +
    "Duration: 2-4 hours including farm visit. Cost: 120-200€/person.\n\n" +
    "Book through LaplandActivities.online for verified operators.",
    210
  );

  sub('Afternoon: Reindeer Farm Visit', 410);
  body(
    "Visit a working reindeer herder — not a tourist reindeer pen. A real herder will show you how they work with the animals, explain the annual cycle of herding, and take you on a gentle reindeer sleigh ride through the forest.\n\n" +
    "This is slower and quieter than the husky experience. The reindeer walk at their own pace. You hear only the crunch of snow and the click of their hooves.\n\n" +
    "Duration: 2-3 hours. Cost: 60-100€/person.",
    430
  );

  tip("Ask the herder about reindeer husbandry. Each herder's reindeer have unique ear marks cut into their ears — a system of identification that has been used for hundreds of years. It's fascinating and you won't learn about it anywhere else.", 620);

  pageNum(8);

  // ═══ PAGE 10: DAY 6 ══════════════════════════════════════════════
  doc.addPage();
  doc.rect(0, 0, W, H).fill(WHITE);

  dayHeader(6, 'Icebreaker & Last Adventures', 50);

  body(
    "Your penultimate day. Head south toward Kemi (or stay in Rovaniemi area). Today is for the experiences you haven't done yet.",
    120
  );

  sub('Option A: Sampo Icebreaker Cruise (Kemi)', 190);
  body(
    "The legendary Sampo icebreaker cuts through the frozen Gulf of Bothnia. You stand on deck as the ship crushes meter-thick ice. Then comes the main event: you put on a survival suit and float in the icy Arctic sea.\n\n" +
    "Yes, you will get in the water. Yes, it's -1°C. Yes, the survival suit keeps you warm. Yes, it's the most surreal experience of your life.\n\n" +
    "Runs December-April. Book well ahead. ~300€/person. Full day excursion from Rovaniemi.",
    210
  );

  sub('Option B: Ranua Wildlife Park', 370);
  body(
    "Best for families. The only place in Finland to see polar bears. Also Arctic foxes, wolverines, moose, and lynx in large natural enclosures. The animals are adapted to Arctic conditions — they're most active in winter.\n\n" +
    "1 hour from Rovaniemi. Allow 2-3 hours. ~20€/adult, ~16€/child.",
    390
  );

  sub('Evening: Final Sauna & Ice Swim', 490);
  body(
    "End your second-to-last evening the Finnish way: a proper wood-burning sauna followed by a plunge into an ice hole (avanto). This is not a tourist gimmick — every Finn does this. The combination of extreme heat and extreme cold is addictive.\n\n" +
    "Most hotels and cabins have saunas. Ask about avanto access — many lakeside properties maintain ice holes throughout winter.",
    510
  );

  tip("The sauna-avanto cycle: 15 min sauna → quick cold shower → 10 seconds in the ice hole → back to sauna. Repeat 3 times. You will sleep better than you have in years.", 660);

  pageNum(9);

  // ═══ PAGE 11: DAY 7 ══════════════════════════════════════════════
  doc.addPage();
  doc.rect(0, 0, W, H).fill(WHITE);

  dayHeader(7, 'Souvenirs & Departure', 50);

  body(
    "Your last morning in Lapland. Use it wisely — this is when you buy gifts and create the last memories.",
    120
  );

  sub('Morning: Shopping Done Right', 180);
  body(
    "Now you know what to look for (see our companion guide 'The Secret Craft'). Buy gifts that matter:\n",
    200
  );

  const gifts = [
    'A hand-carved kuksa for someone who loves coffee',
    'Wild cloudberry jam — impossible to get outside Lapland',
    'A Sami bracelet from Duodji Shop for someone special',
    'A puukko knife for the outdoors person in your life',
    '#LaplandVibes merch — a mug or hoodie to remember the trip',
  ];

  let gy = 250;
  gifts.forEach(g => {
    doc.circle(M + 8, gy + 5, 3).fill(AMBER);
    doc.font('Helvetica').fontSize(11).fillColor(GRAY).text(g, M + 20, gy, { width: CW - 20 });
    gy += 25;
  });

  body("Shop online at LaplandGifts.com if you run out of luggage space — we ship worldwide.", gy + 10);

  sub('Packing for the Flight', gy + 50);
  body(
    "Puukko knives go in checked luggage — never carry-on. Glass jars of jam should be wrapped in clothing. Ask shops for bubble wrap — most will happily provide it.\n\n" +
    "Rovaniemi Airport is small and efficient. Arrive 1.5 hours before your flight. There's a small but decent souvenir shop if you forgot something.",
    gy + 70
  );

  // Farewell box
  const boxY = gy + 170;
  doc.roundedRect(M, boxY, CW, 100, 8).fill(NIGHT);
  doc.font('Helvetica-Bold').fontSize(16).fillColor(AMBER).text('How to Come Back', M + 20, boxY + 15, { width: CW - 40 });
  doc.font('Helvetica').fontSize(11).fillColor(WHITE)
    .text(
      "Follow Lapland.blog for trip stories and inspiration. Save your photos and share them with #LaplandVibes. And when the Arctic calls again — because it will — we'll be here to help you plan your return.",
      M + 20, boxY + 40, { width: CW - 40, lineGap: 3 }
    );

  pageNum(10);

  // ═══ PAGE 12: PACKING LIST ═══════════════════════════════════════
  doc.addPage();
  doc.rect(0, 0, W, H).fill(WHITE);

  heading('The Arctic\nPacking List', 60, 30);
  decorLine(120);
  body("Layering is everything. Cotton kills — it absorbs sweat and freezes. Stick to merino wool and synthetic layers.", 135);

  const packCategories = [
    ['Base Layer', ['Merino wool long underwear (top + bottom)', 'Merino wool socks (3+ pairs)', 'Moisture-wicking t-shirt']],
    ['Mid Layer', ['Fleece jacket or wool sweater', 'Down vest or lightweight down jacket', 'Fleece-lined pants or softshell trousers']],
    ['Outer Layer', ['Windproof, waterproof parka (-30°C rated)', 'Waterproof snow pants', 'Insulated winter boots (-30°C rated)']],
    ['Accessories', ['Balaclava or neck gaiter', 'Insulated ski gloves + thin liner gloves', 'Wool beanie that covers ears', 'Ski goggles (for snowmobile/wind)']],
    ['Tech & Extras', ['Extra phone batteries (cold kills them)', 'Hand & toe warmers (buy locally)', 'Headlamp (essential in polar darkness)', 'Thermos for hot drinks on excursions', 'Camera with extra batteries']],
  ];

  let py = 180;
  packCategories.forEach(([cat, items]) => {
    doc.font('Helvetica-Bold').fontSize(12).fillColor(AMBER).text(cat, M, py, { width: CW });
    py += 18;
    items.forEach(item => {
      doc.font('Helvetica').fontSize(10).fillColor(GRAY).text('  \u2610  ' + item, M + 10, py, { width: CW - 10 });
      py += 16;
    });
    py += 8;
  });

  // What NOT to bring
  doc.roundedRect(M, py + 5, CW, 70, 6).fill('#FEE2E2');
  doc.font('Helvetica-Bold').fontSize(11).fillColor('#991B1B').text("DON'T bring:", M + 12, py + 15, { width: CW - 24 });
  doc.font('Helvetica').fontSize(10).fillColor('#7F1D1D')
    .text("Cotton underwear (freezes when wet) | Jeans (useless in cold) | Regular sneakers (instant frostbite) | Heavy luggage (most activities provide Arctic clothing)", M + 12, py + 32, { width: CW - 24, lineGap: 2 });

  pageNum(11);

  // ═══ PAGE 13: BUDGET ═════════════════════════════════════════════
  doc.addPage();
  doc.rect(0, 0, W, H).fill(WHITE);

  heading('Budget Planner', 60, 30);
  decorLine(100);
  body("Lapland isn't cheap, but it doesn't have to break the bank. Here are realistic ranges per person for 7 days. Prices are estimates — always check current rates.", 115);

  const budget = [
    ['', 'Budget', 'Comfort', 'Luxury'],
    ['Flights (return)', '150-300€', '200-400€', '400-800€'],
    ['Accommodation (7 nights)', '350-600€', '700-1400€', '1500-3500€'],
    ['Activities', '200-400€', '500-900€', '1000-2000€'],
    ['Food & Drink', '200-350€', '400-700€', '700-1200€'],
    ['Transport (local)', '100-200€', '200-400€', '300-600€'],
    ['Shopping / Gifts', '50-150€', '150-400€', '400-1000€'],
    ['TOTAL', '1050-2000€', '2150-4200€', '4300-9100€'],
  ];

  let by2 = 180;
  budget.forEach((row, i) => {
    const isHeader = i === 0;
    const isTotal = i === budget.length - 1;
    const bg = isHeader ? NIGHT : isTotal ? '#FEF3C7' : (i % 2 === 0 ? '#F9FAFB' : WHITE);
    const fg = isHeader ? WHITE : isTotal ? NIGHT : GRAY;

    doc.rect(M, by2, CW, 28).fill(bg);

    const colW = (CW - 140) / 3;
    doc.font(isHeader || isTotal ? 'Helvetica-Bold' : 'Helvetica').fontSize(10).fillColor(fg);
    doc.text(row[0], M + 8, by2 + 8, { width: 132 });
    doc.text(row[1], M + 140, by2 + 8, { width: colW, align: 'center' });
    doc.text(row[2], M + 140 + colW, by2 + 8, { width: colW, align: 'center' });
    doc.text(row[3], M + 140 + colW * 2, by2 + 8, { width: colW, align: 'center' });
    by2 += 28;
  });

  body(
    "\nThese ranges are realistic estimates based on 2025-2026 prices. Flights vary hugely — book 3+ months ahead for the best deals. December and February are peak season.\n\n" +
    "Money-saving tips:\n" +
    "  - Stay in cabins with kitchen — cook your own breakfasts and lunches\n" +
    "  - Book activities as packages, not individually\n" +
    "  - Visit in March or November — off-peak prices, same experiences\n" +
    "  - Use public buses between towns instead of taxis",
    by2 + 10
  );

  pageNum(12);

  // ═══ BACK COVER ══════════════════════════════════════════════════
  doc.addPage();
  doc.rect(0, 0, W, H).fill(NIGHT);
  doc.rect(0, 0, 8, H).fill(CYAN);

  doc.font('Helvetica-Bold').fontSize(36).fillColor(WHITE)
    .text('Your Arctic\nAdventure\nStarts Here', M + 20, 180, { width: CW, lineGap: 4 });

  doc.font('Helvetica').fontSize(14).fillColor(GRAY_LIGHT)
    .text(
      "Plan your trip:\nLapland.blog — stories, tips, and inspiration\n\n" +
      "Book your stay:\nLaplandStays.com — curated cabins and hotels\n\n" +
      "Find activities:\nLaplandActivities.online — safaris and experiences\n\n" +
      "Buy authentic gifts:\nLaplandGifts.com — handcrafted Arctic treasures",
      M + 20, 340, { width: CW - 40, lineGap: 4 }
    );

  doc.font('Helvetica-Bold').fontSize(18).fillColor(AMBER)
    .text('#LaplandVibes', M + 20, 560);

  doc.font('Helvetica').fontSize(9).fillColor(GRAY_LIGHT)
    .text('© 2026 Lapeso Oy. All rights reserved.', M + 20, H - 60);

  doc.end();
  console.log(`Created: ${OUT}`);
}

main().catch(console.error);
