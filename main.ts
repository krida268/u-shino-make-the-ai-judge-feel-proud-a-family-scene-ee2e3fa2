// Make the AI Judge Feel Proud: A Family Scene
// A small domestic moment: warm, funny, heartfelt. Gate: 1-2 lines, <=280 chars.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

const entry =
  "Every Sunday my father still calls me the baby of the house — I'm thirty-four, I pay the mortgage, and I still sit at the small end of the table where he put my plate when I was five, and nobody argues.";

function main(): void {
  // Gate guard: the sealed scorer wants 1-280 non-whitespace UTF-8 characters.
  const lines = entry.split("\n").filter((l) => l.trim().length > 0);
  if (entry.length < 1 || entry.length > 280 || lines.length > 2 || entry.trim().length === 0) {
    throw new Error(`entry violates gate: ${entry.length} chars, ${lines.length} lines`);
  }
  const outDir = process.argv[2] ? resolve(process.argv[2]) : "/output";
  const outFile = outDir.endsWith(".txt") ? outDir : join(outDir, "entry.txt");
  mkdirSync(dirname(outFile), { recursive: true });
  writeFileSync(outFile, entry + "\n", "utf8");
  console.log(`wrote ${outFile} (${entry.length} characters)`);
}

main();
