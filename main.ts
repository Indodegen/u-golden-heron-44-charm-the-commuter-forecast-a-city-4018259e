import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "Good morning, Drizzlewick: light umbrella rain, heavy sighs, and a 90% chance your bus is already gone.";

// Gate: one line, 1-140 chars. Reject any newline so the entry stays single-line.
if (ENTRY.includes("\n") || ENTRY.includes("\r") || ENTRY.length < 1 || ENTRY.length > 140) {
  throw new Error("ENTRY must be a single line of 1-140 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY);
