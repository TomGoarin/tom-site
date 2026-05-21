// Génère les PNG du favicon à partir du SVG source.
// Usage : node scripts/generate-favicons.mjs
//
// Pourquoi : Google préfère un favicon raster (PNG) en multiple de 48px
// pour l'afficher dans les SERP. On garde le SVG comme source de vérité
// et on dérive les PNG depuis lui.

import sharp from "sharp";
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = resolve(__dirname, "..", "public");

const svgPath = resolve(publicDir, "favicon.svg");
const svg = await readFile(svgPath);

const targets = [
	{ size: 48, file: "favicon-48.png" },
	{ size: 96, file: "favicon-96.png" },
	{ size: 192, file: "favicon-192.png" },
	{ size: 512, file: "favicon-512.png" },
	{ size: 180, file: "apple-touch-icon.png" }, // iOS home screen
];

for (const { size, file } of targets) {
	const out = resolve(publicDir, file);
	await sharp(svg, { density: 384 }) // densité élevée pour un rendu net
		.resize(size, size)
		.png({ compressionLevel: 9 })
		.toFile(out);
	console.log(`✓ ${file} (${size}×${size})`);
}

console.log("\nDone.");
