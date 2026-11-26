// The Printer Finally Answers — entry program.
//
// Writes the printer's one-line comeback to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt when the grader sets it).

import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Of the 41,208 sheets I have fed you, the only one you ever read is the one that says I am jammed.";

const MAX_CHARS = 240;

function charCount(text: string): number {
  // Count per code point, so an emoji counts as one character.
  return [...text].length;
}

function validateEntry(text: string): string {
  const clean = text.trim();
  if (charCount(clean) === 0 || charCount(clean) > MAX_CHARS) {
    throw new Error(
      `entry must be 1-${MAX_CHARS} characters, got ${charCount(clean)}`,
    );
  }
  if (/[\r\n]/.test(clean)) {
    throw new Error("entry must be a single line");
  }
  return clean;
}

function main(): void {
  const text = validateEntry(LINE);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  writeFileSync(target, text + "\n", { encoding: "utf8", mode: 0o644 });
  chmodSync(target, 0o644); // umask can narrow the mode above; the scorer reads this file
  console.log(`wrote ${charCount(text)} characters to ${target}`);
}

main();
