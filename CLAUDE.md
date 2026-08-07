# Claude Guide: vpoonyak.github.io

This repository is a static GitHub Pages portfolio for Vitchakorn Poonyakanok, built with Astro (`src/pages/`, `src/components/`, `src/layouts/`) and deployed via `npm run build` in `.github/workflows/deploy.yml`. There is no root `index.html` anymore — the homepage is `src/pages/index.astro`.

## Working Principles
- Keep edits tightly scoped and preserve the component split under `src/components/` unless the user asks for a larger refactor.
- Match the Redesign v2 design language: hairline/2px rules, outlined section numbers, JetBrains Mono labels, uppercase 900-weight display type, flat squared corners (no border-radius), and full-bleed bordered grids.
- Use local assets when available. Do not remove hidden sections or unused assets unless explicitly requested.
- Use `rg` for search.

## Design System (Redesign v2)
Ported from `design/Website redesign with three directions/Redesign v2.dc.html`; the reference render is `design/Vitchakorn Redesign v2 (standalone).html`.

- `src/styles/tokens.css` — the palette, imported site-wide by `Layout.astro`. Tokens are keyed on `:root` **only** — never add a bare `body { --bg: … }`. `<body>` is stamped with `data-theme` by a *deferred* script while `<html>` is stamped by a *blocking* one, so a body-level declaration beats the inherited value and repaints the page dark on every light-theme load. The standalone pages under `public/` follow the same rule and carry the same blocking bootstrap in `<head>`. It defines the v2 names (`--bg --ink --card --line --rule --muted --accent --accent-ink --chip`) **and** the legacy aliases (`--bg-card --text-primary --border` …) that `global.css` still references, so both stylesheets read the same colours. Change a colour here and it propagates everywhere.
- `src/styles/redesign.css` — v2 page CSS. Imported by `index.astro` and `contact.astro` only.
- `src/styles/global.css` — the older page CSS, kept for the blog. Imported by `blog/index.astro`, `BlogPost.astro`, and `404.astro`. Its token block was removed; it inherits from `tokens.css`.
- Never import both `redesign.css` and `global.css` on the same page — they carry different base resets.
- Nav and footer CSS live inside `Navigation.astro` / `Footer.astro` as scoped styles, so the v2 chrome renders on every page regardless of which page stylesheet is loaded.
- The standalone HTML under `public/` (project archive, case studies, `credentials.html`) carries its own copy of the v2 tokens in a `:root` block and links `/site-chrome.css` for the same nav bar. Palette changes have to be made in both places.
- Theme resolution, in order: an explicit choice in `localStorage.theme` → the OS `prefers-color-scheme` → dark. A blocking script in `<head>` stamps `<html>` before first paint; the deferred one mirrors it onto `<body>` and registers the toggle. Clicking the toggle is what writes `localStorage.theme`, and from then on it beats the OS on that device. While no explicit choice exists, a `matchMedia` listener follows live OS switches. All localStorage access is wrapped in try/catch (it throws in some privacy modes). The 14 standalone pages under `public/` carry the same logic inline — change both.

## Current Visible Section Order
1. `#about` — 01 About
2. `#experience` — 02 Experience
3. `#projects` — 03 Projects
4. `#publications` — 04 Research & Awards (id kept; the section was renamed from "Publications" when the BRIDGE-AI award got its own `AWARDS` sub-group)
5. `#training` — 05 Training
6. `#skills` — 06 Capabilities
7. `#contact` — 07 Contact

Section ids and labels are the originals; the Redesign v2 kicker slot holds
the section name rather than the source design's italic phrases ("the
person", "the work", …). The old `#expertise` section was removed.

The right-edge rail carries two items above the numbered sections: the hero
(`#top`) as `00`, then `#rolesWrap` (the 3D stage) as `3D` — it isn't a
numbered section, so it gets a marker rather than a number that would
collide with `01`. Both ids must also appear in the `SECTIONS` array in
`SectionRail.astro`'s script or the scrollspy skips them.

Anchor targets carry `scroll-margin-top: calc(var(--nav-h) + 2px)` (see
`redesign.css`) because the bar is fixed — without it a jump parks the
section header underneath it. `--nav-h` is measured and written onto
`<html>` by `Navigation.astro`, so it tracks the bar's real height.

## Roles 3D Stage
- `public/roles3d/` is a self-contained three.js scene (`index.html` + `land-mask.js` + `thailand-dots.js` + `assets/earth-grid.bin`), embedded as an iframe by `src/components/Roles3D.astro` and driven entirely by `postMessage`.
- Messages the host sends: `{rolesProgress: 0..1}` (scroll position through the 280vh runway), `{theme: 'dark'|'light'}`, `{paused: boolean}`. The pause flag stops the render loop once the stage leaves the viewport — without it the canvas keeps rendering for the whole rest of the page.
- The host removes the whole section when WebGL2 is unavailable or the visitor prefers reduced motion, so the 280vh of scroll never becomes dead space.
- three.js is **vendored** at `public/roles3d/vendor/` (`three.module.js` imports `./three.core.js` relatively, so the two must stay side by side). It used to load from unpkg; with 280vh of runway behind it, a slow or unreachable CDN meant three blank screens. Keep the page out of `customPages` in `astro.config.mjs`; it carries `robots: noindex`.
- A live WebGL surface makes browser-extension screenshots capture stale frames. When doing visual QA, temporarily move `dist/roles3d/index.html` aside, or verify layout through `elementFromPoint` instead of trusting the screenshot.

## Content Notes
- Content is sourced from the separate `~/Github/cv` repo — `Vitchakorn_Poonyakanok_CV.tex` for dates and `profile/profile.yaml` (a symlink into iCloud) for the fuller record. The `.tex` wins on dates.
- DigiHealth is complete: `2025 — 2026`. MSHCA at Carnegie Mellon's Heinz College is the current program — `AUG 2026 — MAY 2028`, `CURRENT` chip, Royal Thai Government (DDC) scholarship — and it, not DigiHealth or Travel Medicine, is the ongoing pursuit in the About intro.
- Travel Medicine Residency (IPM, DDC, MOPH) is `2024 — 2026`, no chip. The ODPC 6 role is also `2024 — 2026`, no chip — matched to the CV's `Nov 2024 -- Jul 2026`. The title is now **Medical Physician, Professional Level (Preventive Medicine)** (promoted 2026-04-02); both entries note the Aug 2026 academic leave. Do NOT narrow either to a single year — that would contradict the CV and the Jan–Jun 2025 syphilis surveillance study.
- Super AI Engineer S6 selectivity is **157 of 10,457** (official AIAT figures confirmed 2026-08) — not the rounded "150 / 10,000+" that circulated earlier.
- `#research` carries the BRIDGE-AI Summit 2026 Silver Award card first, then the two publications, then the syphilis surveillance evaluation.
- AI Practitioner is the primary visible Level 1 credential: `https://mysuperai.aiat.or.th/verify/3893dd94-0ff5-464f-b26f-f8f44e655bdf`.
- The Capabilities stack rows mirror the `skills` block in `profile.yaml`. React/Vite/TypeScript/Tailwind are deliberately **absent** — `profile.yaml` flags them as "present in the shipped products, not personal competencies".
- Location and the footer clock are Pittsburgh (`America/New_York`); the zone label is derived at runtime so it reads EST/EDT correctly.
- The hero's "Years clinical practice" / "Years data analysis" numbers are computed at load from `data-years-since` attributes (see `Hero.astro`), not hand-edited — update the date attribute, not the visible text. Clinical practice anchors to the Nong Khai Hospital start (`2019-09-09`); data analysis to the Chiang Mai University Diploma in Clinical Statistics start (`2022-02-05`).
- Nav cells set `min-width: max-content`. The bar is `white-space: nowrap`, so a cell allowed to shrink past its text doesn't wrap — it bleeds under the next cell. Section links collapse into the dropdown at ≤1080px (the full bar needs ~1080px); the nickname goes at ≤860px and the Archive button at ≤700px. Verified clip-free from 320px to 1440px.
- `badge/certified-in-cybersecurity-cc.1-white.png` is a **full-colour** ISC2 mark — "white" names the intended backdrop, not the artwork. It takes no chip and no inversion; inverting it rotated its hues in light mode.
- The project and credential archive buttons live in their section headers as `.rd-section-action` (right-aligned, drops to its own line below 620px). There is no separate "Featured systems" sub-heading.
- Monochrome logos use `data-theme-invert` (flip a black mark on the dark canvas) or `data-light-invert` (flip a white mark on the cream one). Check the artwork, not the filename: `logo/OpenAI-logo-white.svg` and `logo/xAI-logo.svg` carry no `fill` at all, so they render **black** and take `data-theme-invert` — the "white" in the OpenAI filename is wrong. `logo/ThaiLLM-logo-white.svg` really is `fill="white"` and takes `data-light-invert`. In `Capabilities.astro` these are the `themeInvert` / `lightInvert` flags on a stack item.
- Section names render as `<h2 class="rd-section-kicker">`, not `<div>` — the page otherwise has a single `h1` and no outline for crawlers or screen readers. The hero `h1` uses block `<span>`s with trailing spaces *inside* them, because Astro collapses whitespace between elements and `<br>` produced "ClinicalData,Engineered.".
- Stack-badge icons are self-hosted at `public/logo/si/` (mirrored from Simple Icons). Don't reintroduce `cdn.simpleicons.org` — that was 23 cross-origin requests on the critical path for decorative 15px marks.
- The standalone pages load `/site-chrome.css` **and** `/site-chrome.js`; the script measures the fixed bar and writes `--nav-h`, which the spacer and `:target` scroll-margin both read.
- The social icon row (`SocialLinks.astro`) sits in the **hero**, under the lede, not in `#about` — the profile links and the email are what the page asks a visitor to act on. It takes an optional `class` prop (the hero passes `rd-hero-socials`, which caps it to the lede's 540px measure). It is all inline SVG on `currentColor` so every mark sits in the same muted grey — including Tableau, which uses the inline path rather than the colour `favicon/tableau.png`.

## Important Assets
- DigiHealth logo: `experience/digihealth-dh.png`
- Scamper logo: `logo/Scamper Logo.png`, referenced as `logo/Scamper%20Logo.png`
- Tableau favicon/logo: `favicon/tableau.png`
- ISC2 CC white badge: `badge/certified-in-cybersecurity-cc.1-white.png`
- Social share card: `pic/og-card.jpg` (1200×1200 square, full-bleed `pic/vitchakorn-wider.png` with a bottom gradient scrim and text overlaid directly on the photo — label, name, tagline, URL). Square + text-on-photo is deliberate: iOS's LinkPresentation framework (used by LINE, iMessage, Mail, etc. for rich link previews) does face-priority smart-cropping on `og:image` and was cutting the name/tagline out entirely when they lived in a separate region from the photo — a square source avoids the aspect-crop, and overlaying text on the same image layer as the face means a face-priority crop is far more likely to still catch nearby text. `og:image:width`/`height` must stay `1200`/`1200` if regenerated. No source HTML template is kept in-repo; rebuild the full-bleed-photo-with-scrim HTML, render at 1200×1200 via Playwright, and convert with `sips -s format jpeg -s formatOptions 80`.

## Project Case-Study Pages
- Each project under `public/project/` lives in its own folder: `public/project/<slug>/index.html` plus that project's own assets (thumb, case images, any data files) alongside it. URLs are clean folder paths, e.g. `/project/yfmalaria/`.
- The old flat `public/project/<slug>.html` paths were removed (no redirect stubs) — old bookmarks/backlinks to those URLs now 404. Don't recreate flat `<slug>.html` files; always use the `<slug>/index.html` folder form.
- `public/project/index.html` (the Project Archive listing) and its per-card links/thumbs must stay in sync with the actual folder names.
- New/renamed project URLs also need updating in `src/components/Projects.astro` (Top Projects carousel) and the `customPages` list in `astro.config.mjs` (sitemap).
- `dist/` is a pure Astro build artifact (gitignored) — CI's `deploy.yml` runs `npm run build` fresh and deploys that, so never hand-edit anything under `dist/`; edit `public/`/`src/` and run `npx astro build` locally only to verify.

## Unlisted Pages (`public/family/`)
- `public/family/<slug>/` holds pages for a private audience, shared by pasting the link (currently the Thai-language MSHCA pamphlet for family). GitHub Pages has no auth and an unlisted URL is not a secret, so the content is **encrypted at rest** rather than merely hidden: the repo ships `content.enc` (AES-256-GCM) plus a small passcode gate as `index.html`. A crawler, a scraper, or anyone who just has the URL gets opaque bytes.
- **Never commit the plaintext.** It lives only outside the repo; `content.enc` is the only form that may be tracked. Key = PBKDF2-HMAC-SHA256(passcode, salt, 600,000). Layout is `salt(16) || iv(12) || ciphertext || GCM tag(16)`; GCM's auth tag *is* the passcode check, so no separate verifier is stored. Changing the passcode means re-encrypting — there is nothing to edit in place.
- Anything a link preview can render must be safe on its own: the gate page carries a neutral `og:image`/description and says nothing about what is inside. The pamphlet's own title/robots tags live in the encrypted payload.
- Keep these out of `customPages` in `astro.config.mjs`, out of `robots.txt` (listing a path there advertises it), and unlinked from any other page. The gate also sets `<meta name="robots" content="noindex, nofollow, noarchive, nosnippet">` and `referrer: no-referrer`.
- Decryption needs `crypto.subtle`, which browsers expose only in a secure context — fine on `https://vitchakorn.com`, and on `localhost`, but a plain-`http` LAN IP will show the gate's "open over https" error instead.
- The gate renders the decrypted HTML with `document.open()/write()/close()`, not `innerHTML`: the payload is a self-extracting bundle whose inline script runs on `DOMContentLoaded`, and only a real reparse fires that event again.
- The encrypted payload is an exported Anthropic artifact "standalone bundle": a base64 asset manifest plus an HTML template, unpacked at runtime by an inline script that **replaces the whole document**. Three consequences when editing it:
  1. Head tags on the outer wrapper vanish at unpack, so `<title>`/`robots` must be set in **both** the wrapper (what non-JS link-preview crawlers like LINE read) and the template (what a human ends up viewing).
  2. The bundler escapes `/` as the JSON escape `\u002F` inside the embedded JSON so a literal `</script>` can't close the host `<script>`. `JSON.stringify`/`json.dumps` do not — re-apply it or the page dies with "Unterminated string in JSON".
  3. Assets are shared by uuid across `@font-face` weights, so dropping a font subset means removing one manifest entry plus every block referencing it.
- The bundle was cut 2.44 MB → 0.60 MB by dropping 8 font subsets whose `unicode-range` matches zero characters in the document and downscaling images shipped far larger than they render. Rendered text was verified byte-identical to the original.
- `<doc-page>` is a print shell: a fixed 8.5in sheet whose `:host` sets `min-width: max-content`, so narrow viewports get a horizontal scrollbar instead of reflowing. A `@media screen and (max-width: 900px)` block in the template overrides `--doc-page-w` (custom properties inherit through the shadow boundary) to make it fluid on phones. Print styles are untouched.

## Blog
- "The blog" means the Astro-routed blog at `/blog/` — posts are `src/content/blog/<slug>.md` (Astro content collection, frontmatter: `title`, `description`, `pubDate`, `updatedDate`, `draft`, `lang`, `tags`, `heroImage`), rendered by `src/pages/blog/[slug].astro` + `src/layouts/BlogPost.astro`, listed at `src/pages/blog/index.astro`. Not related to any other "blog"/"post"/"article" wording elsewhere.
- Each post's own images/PDFs live in `public/blog/<slug>/` (same one-folder-per-slug convention as project pages), referenced as `/blog/<slug>/<file>` in the markdown body.
- There's a local-dev-only editor at `/admin/blog` (`integrations/blog-admin.mjs`) for creating/editing posts through a form instead of hand-editing the `.md` files — it only runs under `astro dev` (hooks `astro:server:setup`), never in the static build.
- `BlogPost.astro` renders `<Navigation compact backHref="/blog" backLabel="Blog" />` — a distinct minimal nav variant from the full site nav (`src/components/Navigation.astro`), single-row at every viewport width. Its hamburger dropdown is intentionally trimmed to Home/Project Archive/Contact only (not the full homepage section list) since those anchors don't apply on a blog post page.
- Reading time (`src/utils/readingTime.ts`) strips markdown/HTML syntax before counting, then estimates English words at 200 wpm and Thai characters at 900 chars/min (≈ same 200 wpm baseline, using ~4.5 chars/Thai word) — don't naively lower that constant back down, it was previously 450 and inflated estimates ~2x.
- Sitemap `lastmod` for blog URLs is read directly from each post's own `updatedDate`/`pubDate` frontmatter (see `lastmodForBlogPost` in `astro.config.mjs`), not from git or filesystem mtime.

## QA Checklist
Run after meaningful edits:

```bash
git diff --check
npx astro build
```

Check local asset references across the whole built site (the old one-liner read a root `index.html` that no longer exists):

```bash
cd dist && node -e "
const fs=require('fs'),path=require('path');
function walk(d,acc=[]){for(const e of fs.readdirSync(d,{withFileTypes:true})){const p=path.join(d,e.name); if(e.isDirectory())walk(p,acc); else if(p.endsWith('.html'))acc.push(p);} return acc;}
const missing=[]; let checked=0;
for(const f of walk('.')){
  for(const m of fs.readFileSync(f,'utf8').matchAll(/(?:src|href)=\"([^\"]+)\"/g)){
    const v=m[1];
    if(/^(https?:|mailto:|tel:|data:|#|\/\/)/.test(v)) continue;
    const clean=decodeURIComponent(v.split('#')[0].split('?')[0]);
    if(!clean) continue;
    const base = clean.startsWith('/') ? '.'+clean : path.join(path.dirname(f), clean);
    checked++;
    if(!fs.existsSync(base) && !fs.existsSync(path.join(base,'index.html'))) missing.push(f+' -> '+v);
  }
}
console.log('checked',checked); console.log(missing.length?missing.join('\n'):'no missing local refs');
"
```

For browser QA, serve the build on localhost only:

```bash
cd dist && python3 -m http.server 8765 --bind 127.0.0.1
```

Then inspect desktop, tablet, and mobile layouts in both themes; the rail scrollspy; the 3D roles runway; the mobile dropdown; and mobile horizontal overflow. See the Roles 3D note above about screenshots going stale while WebGL is live.
