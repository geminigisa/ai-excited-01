import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const src = new URL("./entry.png", import.meta.url);
const dest = join(outDir, "entry.png");

if (!existsSync(src)) {
  throw new Error(`entry.png is missing next to main.ts: ${src}`);
}
mkdirSync(outDir, { recursive: true });
copyFileSync(src, dest);
const bytes = statSync(dest).size;
console.log(`copied entry.png to ${dest} (${bytes} bytes)`);
