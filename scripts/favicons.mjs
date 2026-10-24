/**
 * Rasterises public/favicon.svg into the sizes browsers and home screens ask
 * for. A browser draws the SVG with the visitor's system face; the PNGs and the
 * ICO bake in this machine's, so run it on a machine whose system face is the
 * one the site shows most (macOS). Run: node scripts/favicons.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { chromium } from '@playwright/test';

const svg = readFileSync('public/favicon.svg', 'utf8');
const browser = await chromium.launch();
const page = await browser.newPage();
const render = async (size) => {
  await page.setViewportSize({ width: size, height: size });
  await page.setContent(`<style>html,body{margin:0}svg{display:block;width:${size}px;height:${size}px}</style>${svg}`);
  return page.screenshot({ omitBackground: true });
};

for (const [file, size] of [
  ['apple-touch-icon.png', 180],
  ['icon-192.png', 192],
  ['icon-512.png', 512],
])
  writeFileSync(`public/${file}`, await render(size));

// An ICO may hold PNGs as they are: a header, one directory entry per image, then the images.
const sizes = [16, 32, 48];
const images = [];
for (const size of sizes) images.push(await render(size));
const header = Buffer.alloc(6 + 16 * sizes.length);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(sizes.length, 4);
let offset = header.length;
sizes.forEach((size, index) => {
  const at = 6 + 16 * index;
  header.writeUInt8(size, at);
  header.writeUInt8(size, at + 1);
  header.writeUInt16LE(1, at + 4);
  header.writeUInt16LE(32, at + 6);
  header.writeUInt32LE(images[index].length, at + 8);
  header.writeUInt32LE(offset, at + 12);
  offset += images[index].length;
});
writeFileSync('public/favicon.ico', Buffer.concat([header, ...images]));

await browser.close();
