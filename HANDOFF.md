# rmutt.dog — HANDOFF

A fountain, for dogs. The website for the plush readymade dog bed (Duchamp's
Fountain as a plushy), produced by Joey Frank. Read this first; keep it updated.

## What the site is

Hand-rolled static HTML, no build step, no framework.

Design direction (settled after a few rounds): super simple, high end, in the
vibe of openstatement.co. Bold Helvetica statement typography, white page,
gray (#999 / #b3b3b3) secondary text, product floating in a #f2f2f2 panel,
1px #e5e5e5 rules, tiny nav. Earlier Alibaba-marketplace and Times-serif
gallery versions were rejected as too much / not high end enough.

- `index.html` — DVD-screensaver homepage: the dog-in-bed image bounces around
  a white screen, growl audio toggle (bottom right), quiet uppercase ticker
  tape along the bottom, shop link top right.
- `shop.html` — the store. Statement headline (black phrase then gray phrase),
  product panel + thumbnails, "Out of stock", email capture on a single
  underline, details rows, price US $191.70 plus shipping.
- `signup.js` — restock form handler. Posts to a Google Apps Script web app
  that appends to a Google Sheet. `SHEETS_ENDPOINT` at the top is EMPTY until
  the Apps Script is deployed (see `apps-script/Code.gs` for the code + setup).
  With no endpoint, the form politely says it isn't plugged in yet.
- `assets/` — images and audio (see "Missing assets").

## Missing assets (drop-in, no code changes needed)

The code already points at these filenames and falls back to a drawn SVG
placeholder (`assets/bed-placeholder.svg`) until they exist:

- `assets/bed.png` — the bouncer on the homepage. Ideally the white-background
  product shot with the background removed (transparent PNG), ~600px wide.
- `assets/product-1.jpg` … `product-4.jpg` — shop gallery. Claire has 4 photos
  (3 apartment shots + 1 white-background studio shot) in her Messages; the
  terminal can't read `~/Library/Messages` (macOS privacy). Save/AirDrop them
  out and drop them in.
- `assets/growl.mp3` — dog growling loop for the homepage. Joey/Claire to supply.

## Hosting / deploy

- GitHub repo under the `clairesophi` account (like clairesophie-site),
  deployed with GitHub Pages. Deploy = push to `main`.
- Domain `rmutt.dog` currently points at Hostinger (old one-line signup page
  with `signup.php`). Claire will remap DNS later. When she does: add a `CNAME`
  file containing `rmutt.dog`, set the custom domain in repo Settings → Pages,
  and point DNS (A records to GitHub Pages IPs or ALIAS/ANAME to
  `clairesophi.github.io`).

## To do

- [ ] Real photos into `assets/` (see above)
- [ ] Growl audio
- [ ] Deploy Google Apps Script, paste URL into `SHEETS_ENDPOINT` in signup.js
- [ ] Domain remap (later, per Claire)
- [ ] Decide if `woof@rmutt.dog` is a real address (used as form fallback text
      in signup.js) — change it there if not

## Taste notes

- Claire dislikes em-dashes in site copy (reads as AI). Use commas/colons.
- Keep it view-source friendly, hand-made, funny. Dada jokes should be played
  completely straight in marketplace UI language.
- Price is always $191.70 (1917). Rejection date of Fountain: April 9, 1917.
