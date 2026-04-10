import sharp from 'sharp';
import { readdirSync, mkdirSync } from 'fs';
import { join } from 'path';

const INPUT = 'public/images';
const sizes = {
  hero: { width: 1920, quality: 80 },
  cat: { width: 800, quality: 80 },
  prod: { width: 800, quality: 80 },
};

const files = readdirSync(INPUT).filter(f => f.endsWith('.png') || f.endsWith('.jpg'));

for (const file of files) {
  const prefix = file.startsWith('hero') ? 'hero' : file.startsWith('cat') ? 'cat' : 'prod';
  const { width, quality } = sizes[prefix];
  const outName = file.replace(/\.(png|jpg)$/, '.webp');

  console.log(`${file} → ${outName} (${width}px)`);

  await sharp(join(INPUT, file))
    .resize(width, null, { withoutEnlargement: true })
    .webp({ quality })
    .toFile(join(INPUT, outName));
}

console.log('Done!');
