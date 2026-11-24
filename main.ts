// News-image entry for 23 November 2026 (Node 22, standard library only).
// The entry image is the entry.png beside this file: a newspaper front page
// drawn for this bounty, summing up Monday 23 November 2026 in six stories
// (COP31 collapse, Ukraine sinking the Russian corvette Merkury off Libya,
// Nvidia bringing back Jensen Huang, the Indonesia factory fire, the Belgium
// strike, and Democrats taking 258 House seats). This program copies it,
// byte for byte, to /output/entry.png, so two runs write identical bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// No network, no randomness, no timestamps: the copy is deterministic.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(
  new URL('./entry.png', import.meta.url),
  join(outDir, 'entry.png'),
);
