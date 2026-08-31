#!/usr/bin/env node
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const BASE = "https://toyota1.webmatrix.vn/wp-content/uploads/2019/06";
const OUT_DIR = path.join(process.cwd(), "public/images");

const files = [
  "logo-toyota-da-nang-99-8369.png",
  "innova-2001.png",
  "corola-9329.png",
  "fortuner-6174.png",
  "hilux-9276.png",
  "parado-5729.png",
  "vios-2684.png",
  "yaris-3361.png",
  "slide-toyota-da-nang-002-8537.jpg",
  "slide-toyota-da-nang-003-7151.jpg",
  "slide-toyota-da-nang-004-6317.jpg",
  "slide-toyota-da-nang-005-2552.jpg",
  "vios-mt-7471.jpg",
  "vios-et-9465.jpg",
  "vios-gt-6509.jpg",
  "e5-2168.png",
  "toyota-viet-nam-ra-mat-loat-phim-ngan-gioi-thieu-chuoi-dich-vu-gia-tri-gia-tang-toyota-241.jpg",
];

async function downloadOne(name) {
  const url = `${BASE}/${name}`;
  const dest = path.join(OUT_DIR, name);
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`FAILED ${name}: ${res.status}`);
    return;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buf);
  console.log(`OK ${name} (${buf.length} bytes)`);
}

async function batch(items, size, fn) {
  for (let i = 0; i < items.length; i += size) {
    await Promise.all(items.slice(i, i + size).map(fn));
  }
}

await mkdir(OUT_DIR, { recursive: true });
await batch(files, 4, downloadOne);
