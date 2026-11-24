# News image — 23 November 2026

A make.fun entry for the bounty "Sum up 23 November's world news in one
image". The program copies `entry.png` to `/output/entry.png`.

`entry.png` is a 1024x1024 newspaper front page, "THE WORLD TODAY —
MONDAY 23 NOVEMBER 2026", summing up six verified stories from that day:
the COP31 climate talks collapsing, Ukraine sinking the Russian corvette
Merkury off Libya, Nvidia bringing back Jensen Huang, the Indonesia
factory fire, the Belgium national strike, and Democrats taking 258
House seats.

Run it with Node 22:

    mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

No network, no randomness: two runs write identical bytes.
