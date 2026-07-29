import sharp from 'sharp';

/**
 * The source logo carries ~44% empty vertical space, which forced the navbar to
 * reserve height the mark never used. This writes a tightly cropped nav asset.
 */
const SRC = 'public/sarada-logo.png';
const OUT = 'public/sarada-logo-nav.png';
const MARGIN = 12;

const meta = await sharp(SRC).metadata();
const trimmed = await sharp(SRC).trim({ threshold: 10 }).toBuffer({ resolveWithObject: true });

await sharp(trimmed.data)
  .extend({
    top: MARGIN,
    bottom: MARGIN,
    left: MARGIN,
    right: MARGIN,
    background: { r: 255, g: 255, b: 255, alpha: 1 },
  })
  .png({ compressionLevel: 9 })
  .toFile(OUT);

const out = await sharp(OUT).metadata();

console.log(`source : ${meta.width}x${meta.height}`);
console.log(`nav    : ${out.width}x${out.height}`);
console.log(`ratio  : ${(out.width / out.height).toFixed(3)}`);
