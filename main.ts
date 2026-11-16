import { copyFileSync, existsSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const sourceDir = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(sourceDir, "entry.png");
if (!existsSync(source)) {
  throw new Error(`entry.png not found next to main.ts (${sourceDir})`);
}

const target = join(outputDir, "entry.png");
copyFileSync(source, target);
const bytes = statSync(target).size;
console.log(`wrote ${target} (${bytes} bytes)`);
