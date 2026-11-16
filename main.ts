// Writes this entry's image to the output directory as entry.png.
import { copyFileSync, existsSync, statSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = new URL("./entry.png", import.meta.url);

if (!existsSync(source)) {
  throw new Error("entry.png is missing next to main.ts");
}

const dest = join(outDir, "entry.png");
copyFileSync(source, dest);
console.log(`wrote ${dest} (${statSync(dest).size} bytes)`);
