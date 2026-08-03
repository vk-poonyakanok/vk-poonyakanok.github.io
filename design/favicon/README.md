# Favicon design — pulse globe (concept D2)

Parked, **not implemented**. The live favicon is still the VP map pin in
`public/favicon/`. Nothing in this folder is deployed — `design/` sits outside
`public/`, so the Astro build never copies it.

## What's here

- `pulse-globe-d2.svg` — the approved mark, ship-ready and theme-aware.
- `generate.mjs` — the generator that produced the whole D-family exploration
  (`node generate.mjs write` emits every variant in `auto`/`light`/`dark`).

## The mark

A solid disc with the graticule cut out of it in negative space — the same
filled-glyph family as Chrome's fallback globe, not a thin wireframe, because
thin strokes disintegrate at 16px. It differs from Chrome's on three counts:

- the graticule is rotated 14° so the globe reads as *turned*, not dead-on;
- the equator is drawn as an ECG rhythm strip;
- it uses the site accent gradient, switching on `prefers-color-scheme` exactly
  like the current `public/favicon/favicon.svg` does.

## To implement later

1. Copy `pulse-globe-d2.svg` to `public/favicon/favicon.svg`.
2. Regenerate the PNG fallbacks. They are baked, so they can't follow the
   system theme — the existing set is baked light-mode, so match that:

   ```bash
   cd design/favicon
   node generate.mjs write            # emits p-D2-light.svg
   rsvg-convert -w 16  -h 16  p-D2-light.svg -o ../../public/favicon/favicon-16x16.png
   rsvg-convert -w 32  -h 32  p-D2-light.svg -o ../../public/favicon/favicon-32x32.png
   rsvg-convert -w 180 -h 180 p-D2-light.svg -o ../../public/favicon/apple-touch-icon.png
   ```

   The current `apple-touch-icon.png` is the glyph on white with padding; iOS
   composites onto an opaque tile, so flatten it rather than shipping alpha.
3. No markup changes needed — `src/layouts/Layout.astro` and
   `public/credentials.html` already point at these four filenames.

## Open question

At 16px the meridian crosses the pulse trace and both soften. The `Q`-series in
the exploration fixes that by bowing the trace along the equator and shifting it
clear of the meridian; revisit those before shipping if the small size matters
more than the large one.
