import fs from 'node:fs';

const R = 100, C = 128;
const rad = d => d * Math.PI / 180;
const f = n => n.toFixed(1);

function parallel(phi, tilt) {
  const rx = R * Math.cos(rad(phi));
  const ry = rx * Math.sin(rad(tilt));
  const cy = C - R * Math.sin(rad(phi)) * Math.cos(rad(tilt));
  return `M ${f(C - rx)},${f(cy)} A ${f(rx)} ${f(ry)} 0 0 0 ${f(C + rx)},${f(cy)}`;
}

// A pulse riding the front arc of the equator: straight lead-in along the arc,
// the QRS spike, then the arc resumes. cy/ry describe the bowed baseline.
function arcPulse({ cy = 130, ry = 36, t1 = 0.30, t2 = 0.66, up = 78, down = 40 } = {}) {
  const at = t => [C - R * Math.cos(Math.PI * t), cy + ry * Math.sin(Math.PI * t)];
  const [x1, y1] = at(t1);
  const [x2, y2] = at(t2);
  const mid = (x1 + x2) / 2;
  const base = (y1 + y2) / 2;
  return `M ${f(C - R)},${f(cy)} A ${f(R)} ${f(ry)} 0 0 0 ${f(x1)},${f(y1)}`
    + ` L ${f(mid - 26)},${f(base - up)}`
    + ` L ${f(mid + 4)},${f(base + down)}`
    + ` L ${f(x2)},${f(y2)}`
    + ` A ${f(R)} ${f(ry)} 0 0 0 ${f(C + R)},${f(cy)}`;
}

export const CANDIDATES = {
  D2: {
    label: 'The original',
    note: 'Where we started: meridian ellipse plus a flat rhythm strip across the middle.',
    tilt: -14, sw: 15, rimGap: 14,
    lines: `        <ellipse cx="128" cy="128" rx="46" ry="100" />
        <path stroke-linecap="round" d="M 30,134 L 84,134 L 100,102 L 120,166 L 137,126 L 148,134 L 226,134" />`,
  },
  P1: {
    label: 'Pulse only',
    note: 'Meridian dropped. One bold trace across an otherwise clean disc — nothing to collide with at 16px.',
    tilt: -12, sw: 17, rimGap: 14,
    lines: `        <path stroke-linecap="round" d="M 26,128 L 80,128 L 100,80 L 124,180 L 142,120 L 154,128 L 230,128" />`,
  },
  P2: {
    label: 'Pulse + latitudes',
    note: 'Trace stays the only vertical event; two latitude arcs above and below restore the sphere.',
    tilt: -12, sw: 15, rimGap: 14,
    lines: `        <path d="${parallel(46, 22)}" />
        <path d="${parallel(-46, 22)}" />
        <path stroke-linecap="round" d="M 26,130 L 80,130 L 100,84 L 124,180 L 142,122 L 154,130 L 230,130" />`,
  },
  P3: {
    label: 'Tilted globe, level trace',
    note: 'Meridian and latitudes tip 20°; the rhythm strip stays dead level, so the two read as separate layers.',
    tilt: -20, sw: 15, rimGap: 14, levelPulse: true,
    lines: `        <ellipse cx="128" cy="128" rx="44" ry="100" />
        <path d="${parallel(48, 22)}" />
        <path d="${parallel(-48, 22)}" />`,
    pulse: `      <path clip-path="url(#CLIP)" fill="none" stroke="black" stroke-width="17"
            stroke-linecap="round" stroke-linejoin="round"
            d="M 24,132 L 78,132 L 98,86 L 122,182 L 140,124 L 152,132 L 232,132" />`,
  },
  P4: {
    label: 'Trace on the equator',
    note: 'The pulse rides the bowed equator itself, so the beat belongs to the sphere instead of sitting on top of it.',
    tilt: -16, sw: 15, rimGap: 14,
    lines: `        <ellipse cx="128" cy="128" rx="44" ry="100" />
        <path stroke-linecap="round" d="${arcPulse()}" />`,
  },
  P5: {
    label: 'Trace on the equator, bare',
    note: 'Same bowed trace, meridian removed — the most globe-like silhouette with the fewest cuts.',
    tilt: -16, sw: 17, rimGap: 14,
    lines: `        <path d="${parallel(50, 22)}" />
        <path stroke-linecap="round" d="${arcPulse({ up: 70, down: 36 })}" />`,
  },
  P6: {
    label: 'Single beat, open rim',
    note: 'One spike, no rim ring: the trace cuts clean out through the silhouette on both sides.',
    tilt: -14, sw: 18, rimGap: 0,
    lines: `        <ellipse cx="128" cy="128" rx="44" ry="100" />
        <path stroke-linecap="round" d="M 20,130 L 82,130 L 102,84 L 126,182 L 144,122 L 156,130 L 236,130" />`,
  },
};

export function svg(key, mode = 'auto', { bare = false } = {}) {
  const c = CANDIDATES[key];
  const uid = `${key}-${mode}`;
  const palette = mode === 'dark'
    ? '.s0 { stop-color: #58a6ff; }\n    .s1 { stop-color: #2f81f7; }'
    : mode === 'light'
    ? '.s0 { stop-color: #0757bd; }\n    .s1 { stop-color: #2f81f7; }'
    : `.s0 { stop-color: #58a6ff; }
    .s1 { stop-color: #2f81f7; }
    @media (prefers-color-scheme: light) {
      .s0 { stop-color: #0757bd; }
      .s1 { stop-color: #2f81f7; }
    }`;
  const styleBlock = bare ? '' : `\n  <style>\n    ${palette}\n  </style>`;
  const clipId = `in-${uid}`;
  const clip = c.rimGap > 0
    ? `\n    <clipPath id="${clipId}"><circle cx="128" cy="128" r="${R - c.rimGap}" /></clipPath>`
    : '';
  const clipAttr = c.rimGap > 0 ? ` clip-path="url(#${clipId})"` : '';
  const extra = c.pulse ? '\n' + c.pulse.replaceAll('CLIP', clipId) : '';
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" role="img" aria-label="Globe">
  <defs>
    <linearGradient id="grad-${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop class="s0" offset="0%" />
      <stop class="s1" offset="100%" />
    </linearGradient>${clip}
    <mask id="mask-${uid}">
      <circle cx="128" cy="128" r="${R}" fill="white" />
      <g${clipAttr} transform="rotate(${c.tilt} 128 128)" fill="none" stroke="black"
         stroke-width="${c.sw}" stroke-linejoin="round">
${c.lines}
      </g>${extra}
    </mask>
  </defs>${styleBlock}
  <circle cx="128" cy="128" r="${R}" fill="url(#grad-${uid})" mask="url(#mask-${uid})" />
</svg>
`;
}

if (process.argv[2] === 'write') {
  for (const key of Object.keys(CANDIDATES)) {
    for (const mode of ['auto', 'light', 'dark']) {
      fs.writeFileSync(new URL(`./p-${key}-${mode}.svg`, import.meta.url), svg(key, mode));
    }
  }
  console.log(Object.keys(CANDIDATES).join(' '));
}
