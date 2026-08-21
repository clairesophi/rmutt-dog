# rmutt.dog — HANDOFF

The website for Dog Fountain, the plush readymade dog bed (Duchamp's Fountain
as a plushy), produced by Joey Frank. Read this first; keep it updated.

## The site

One page, hand-rolled static HTML, no build step.

- `index.html` — stark mono-uppercase "void store": white page, one product
  image, "R.MUTT / Produced by Joey Frank",
  bag icon (or clicking the product) opens a full-screen store overlay with
  the description, a justified equal-height photo row (click any photo for a
  near-fullscreen lightbox, X to close), and the Inquire email form. The
  credit pins to the bottom of the overlay.
- `signup.js` — email form handler. Posts to a Google Apps Script web app that
  appends rows to a Google Sheet in Claire's Drive. `SHEETS_ENDPOINT` at the
  top is EMPTY until the script is deployed (`apps-script/Code.gs` has the
  code + 4-step setup). With no endpoint the form politely says so.
- `assets/` — product-1 (studio greyhound), product-2 (whippet interior),
  product-6 (chihuahua bookshelf), product-8 (chess-match remix, derived from
  Julian Wasser's 1963 Duchamp photo, licensing is Claire/Joey's call),
  bed-solo (empty bed, white bg, the landing image), heart-tag.svg (favicon).

Copy facts: product is "Dog Fountain". Dog bed, pleather, removable fleece,
hand-stitched lettering. Limited edition of 150. US $191.70 plus shipping
(191.7 = 1917). Sold out; form label is "Inquire". No em-dashes in site copy
(Claire's rule).

Earlier design rounds (Alibaba pastiche, Times gallery, openstatement.co
hero + shop with Zodiak/General Sans, Wikipedia-article version) were removed
2026-08-20 at Claire's request; they live in git history if ever needed.

## Hosting / deploy

- Repo: github.com/clairesophi/rmutt-dog, GitHub Pages from main.
  Live: clairesophi.github.io/rmutt-dog
- No terminal push auth yet (no keychain credential or SSH key; Claire pushes
  her other site via GitHub Desktop). Deploys so far were done through the
  GitHub web UI in Claire's Chrome (upload files / github.dev).
- Domain rmutt.dog: still points at Hostinger (old signup page; its
  /admin/ is a basic-auth page, likely the old email list, creds with Claire).
  To remap: log into the Hostinger ACCOUNT (likely Joey's), DNS zone for
  rmutt.dog: replace A records with GitHub Pages IPs 185.199.108.153 /
  109.153 / 110.153 / 111.153, CNAME www -> clairesophi.github.io. Then set
  custom domain rmutt.dog in repo Settings→Pages (+ Enforce HTTPS when the
  cert issues).

## To do

- [ ] Google Sheet + Apps Script deploy, paste URL into SHEETS_ENDPOINT
- [ ] Domain remap (blocked on Hostinger account login)
- [ ] Export old signup emails from rmutt.dog/admin/ before DNS flips
- [ ] Decide if woof@rmutt.dog (fallback text in signup.js) is real
