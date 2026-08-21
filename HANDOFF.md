# rmutt.dog — HANDOFF

A fountain, for dogs. The website for the plush readymade dog bed (Duchamp's
Fountain as a plushy), produced by Joey Frank. Read this first; keep it updated.

## What the site is

Hand-rolled static HTML, no build step, no framework.

THREE design options live side by side (2026-08-20), Claire is choosing:
1. `index.html` + `shop.html`, the openstatement.co direction described below.
2. `wiki.html`, "Joey Frank's plush dog bed" as a classic Wikipedia article:
   infobox with a slow crossfade carousel of the photos, every Shop/Buy/edit
   link opens a sold-out buy popup (bed-solo.jpg + email form).
3. `yeezy.html`, stark yeezy.com-style void store: mono uppercase, one product
   image, bag icon opens a full-screen store overlay with info, three photos,
   and the email form.
All three share signup.js for the email capture. Whichever wins should be
renamed/linked as index.html.

Type (added 2026-08-20): display serif is Zodiak, text face is General Sans,
both free from Fontshare, self-hosted in assets/fonts/ via assets/fonts.css.
Zodiak was picked to echo the MoMA Duchamp catalog cover lettering Claire
referenced. Wordmark, statement headlines, and "Fountain" titles are Zodiak;
everything else General Sans.

Design direction (settled after a few rounds): super simple, high end, in the
vibe of openstatement.co. Bold Helvetica statement typography, white page,
gray (#999 / #b3b3b3) secondary text, product floating in a #f2f2f2 panel,
1px #e5e5e5 rules, tiny nav. Earlier Alibaba-marketplace and Times-serif
gallery versions were rejected as too much / not high end enough.

- `index.html` — full-bleed hero homepage (the DVD-screensaver bounce was
  replaced 2026-08-20 at Claire's request, "more high end"): whippet-and-bed
  interior photo fills the viewport, caption bar under it, growl audio toggle,
  quiet uppercase ticker tape along the bottom, shop link top right.
- `shop.html` — the store. Statement headline (black phrase then gray phrase),
  product panel + thumbnails, "Out of stock", email capture on a single
  underline, details rows, price US $191.70 plus shipping.
- `signup.js` — restock form handler. Posts to a Google Apps Script web app
  that appends to a Google Sheet. `SHEETS_ENDPOINT` at the top is EMPTY until
  the Apps Script is deployed (see `apps-script/Code.gs` for the code + setup).
  With no endpoint, the form politely says it isn't plugged in yet.
- `assets/` — images and audio (see "Missing assets").

## Missing assets (drop-in, no code changes needed)

Have (2026-08-20, from PNGs Claire saved to Desktop): `assets/hero.jpg`
(whippet sniffing the bed, interior), `assets/product-1.jpg` (studio shot,
Italian greyhound in bed), `assets/product-2.jpg` (same as hero). The shop
gallery array in shop.html lists just these two; a drawn SVG fallback
(`assets/bed-placeholder.svg`) covers any missing image.

Still missing:
- `assets/growl.mp3` — dog growling loop for the homepage. Joey/Claire to supply.
- Optional: the 4 chihuahua apartment/studio photos still stuck in Claire's
  Messages (terminal can't read `~/Library/Messages`, macOS privacy). If she
  saves them out, add as product-3.jpg… and extend SHOTS in shop.html.

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
