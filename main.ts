import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const TEXT =
  "Sorry \u2014 my personal-space protocol requires 0.5 metres, but this elevator only allows 0.2, and my legs have filed no objection, so here we are.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");

// Read it back and enforce the gate: 1 to 200 characters, not only whitespace.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== TEXT) throw new Error("entry.txt does not match the entry text");
if (back.length < 1 || back.length > 200) {
  throw new Error(`entry length ${back.length} is outside the 1-200 character gate`);
}
if (back.trim().length === 0) throw new Error("entry is only whitespace");
