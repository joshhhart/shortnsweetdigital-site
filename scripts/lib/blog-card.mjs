// Compose a clickable blog-card image from a base xAI hero.
//
// Takes the 1200×630 xAI illustration and overlays:
//   1. A category pill in the top-left
//   2. Brand logos (if the keyword is a comparison) centered above
//   3. A dark gradient covering the bottom half for title contrast
//   4. The post title in large white bold
//
// All composition is done via a single SVG layer fed to sharp.composite().
// No external deps beyond sharp (already used elsewhere in this folder).

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const LOGO_DIR = path.resolve(__dirname, '../../public/logos');

// Brand → logo filename. Keep keys lowercase, no spaces. Each entry must have
// a matching SVG/PNG in public/logos/. Add a row here when a new comparison
// brand starts showing up in posts.
export const BRAND_FILES = Object.freeze({
  activecampaign: 'activecampaign.svg',
  builderall:     'builderall.svg',
  clickfunnels:   'clickfunnels.svg',
  convertkit:     'convertkit.svg',
  gohighlevel:    'gohighlevel.svg',
  ghl:            'gohighlevel.svg',
  hubspot:        'hubspot.svg',
  infusionsoft:   'infusionsoft.svg',
  kajabi:         'kajabi.svg',
  kartra:         'kartra.svg',
  keap:           'keap.svg',
  leadpages:      'leadpages.svg',
  lovable:        'lovable.svg',
  mailchimp:      'mailchimp.svg',
  monday:         'monday.svg',
  pipedrive:      'pipedrive.svg',
  salesforce:     'salesforce.svg',
  synup:          'synup.svg',
  systeme:        'systeme.svg',
  uberall:        'uberall.svg',
  yext:           'yext.svg',
  zoho:           'zoho.svg',
  stripe:         'stripe.svg',
  zapier:         'zapier.svg',
  make:           'make.svg',
});

// Map a target keyword to its content category label. Same regex set used by
// pickCategory() in daily-seo-job.mjs — kept in sync deliberately so the two
// scripts always agree on what category a post falls into.
export function categoryFromKeyword(keyword) {
  const k = (keyword || '').toLowerCase();
  if (/\bvs\b/.test(k)) return 'Comparison';
  if (/\bfor\b/.test(k) && !/^how/.test(k)) return 'Vertical use case';
  if (/^how to/.test(k) || /\bsetup\b|\btutorial\b/.test(k)) return 'How-to';
  if (/\bmigrate|migration|switch from|export from\b/.test(k)) return 'Migration guide';
  if (/pricing|worth it|cost/.test(k)) return 'Pricing';
  if (/agency|white.?label|snapshot|reseller/.test(k)) return 'Agency playbook';
  if (/integration|integrate|stripe|zapier|make\.com/.test(k)) return 'Integration guide';
  if (/workflow|pipeline|feature|explained|deep dive/.test(k)) return 'Feature deep dive';
  return 'Guide';
}

// Identify the brands a comparison post is about from its keyword.
// Returns lowercase brand keys present in BRAND_FILES.
export function detectBrands(keyword) {
  if (!keyword) return [];
  const k = keyword.toLowerCase().replace(/\bvrs\b/g, 'vs');
  if (!/\bvs\b/.test(k)) return [];
  const tokens = k.split(/\s+vs\s+/).map((t) =>
    t.replace(/[.,]/g, '').replace(/\s+/g, '-').replace(/-+$/g, '')
  );
  const found = [];
  for (const token of tokens) {
    // Pick the longest brand key that appears in this token.
    let match = null;
    for (const key of Object.keys(BRAND_FILES)) {
      if (token.includes(key) && (!match || key.length > match.length)) match = key;
    }
    if (match && !found.includes(match)) found.push(match);
  }
  return found;
}

// Escape characters that would break out of XML/SVG text.
function xml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// Wrap title text by character budget without splitting words.
function wrapTitle(title, maxChars, maxLines) {
  const words = title.split(/\s+/);
  const lines = [];
  let current = '';
  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length <= maxChars) {
      current = candidate;
    } else {
      if (current) lines.push(current);
      current = word;
      if (lines.length === maxLines - 1) {
        // Last allowed line — append the rest and clip if needed.
        const rest = words.slice(words.indexOf(word)).join(' ');
        if (rest.length > maxChars) {
          lines.push(rest.slice(0, maxChars - 1).trimEnd() + '…');
        } else {
          lines.push(rest);
        }
        return lines;
      }
    }
  }
  if (current) lines.push(current);
  return lines;
}

// Read a logo file and return a base64 data URI.
async function logoDataUri(brandKey) {
  const fname = BRAND_FILES[brandKey];
  if (!fname) return null;
  const fpath = path.join(LOGO_DIR, fname);
  try {
    const buf = await fs.readFile(fpath);
    const mime = fname.endsWith('.svg') ? 'image/svg+xml'
               : fname.endsWith('.png') ? 'image/png'
               : 'image/jpeg';
    return `data:${mime};base64,${buf.toString('base64')}`;
  } catch {
    return null; // Missing logo file → silently skip; card still renders.
  }
}

// Build and composite the SVG overlay onto the base buffer.
export async function composeBlogCard(jpegBuf, { title, category, brands = [] }) {
  const W = 1200, H = 630;

  // Load logo data URIs in parallel for any brands we have files for.
  const logoUris = await Promise.all(brands.map(logoDataUri));
  const renderableLogos = logoUris.filter(Boolean);
  const hasLogos = renderableLogos.length >= 2;

  // Layout constants
  const PAD = 40;
  const PILL_TOP = 28;
  const TITLE_SIZE = hasLogos ? 52 : 64;
  const TITLE_LINE_HEIGHT = TITLE_SIZE * 1.12;
  const TITLE_MAX_LINES = hasLogos ? 3 : 4;
  const TITLE_MAX_CHARS = hasLogos ? 30 : 26;

  const titleLines = wrapTitle(title, TITLE_MAX_CHARS, TITLE_MAX_LINES);

  // Logo row: each logo gets a 200×100 slot with white "vs" between.
  let logoRow = '';
  if (hasLogos) {
    const slot = 200, gap = 60, vsWidth = 60;
    const n = renderableLogos.length;
    const rowWidth = n * slot + (n - 1) * (gap + vsWidth);
    const startX = (W - rowWidth) / 2;
    const rowY = 180; // ~28% from top
    let x = startX;
    for (let i = 0; i < n; i++) {
      logoRow += `<image href="${renderableLogos[i]}" x="${x}" y="${rowY}" width="${slot}" height="100" preserveAspectRatio="xMidYMid meet"/>`;
      x += slot;
      if (i < n - 1) {
        logoRow += `<text x="${x + gap / 2 + vsWidth / 2}" y="${rowY + 65}" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="700" font-size="36" fill="#cbd5e1">vs</text>`;
        x += gap + vsWidth;
      }
    }
  }

  // Title: anchored bottom-left, lines stack upward.
  const titleBaselineY = H - PAD - 8;
  let titleSvg = '';
  for (let i = 0; i < titleLines.length; i++) {
    const y = titleBaselineY - (titleLines.length - 1 - i) * TITLE_LINE_HEIGHT;
    titleSvg += `<text x="${PAD}" y="${y}" font-family="system-ui,'Segoe UI',sans-serif" font-weight="800" font-size="${TITLE_SIZE}" fill="#ffffff">${xml(titleLines[i])}</text>`;
  }

  // Category pill — measure width from text length so it hugs the label.
  const pillText = category.toUpperCase();
  const pillTextW = pillText.length * 8.4 + 14; // rough monospace-ish estimate
  const pillW = Math.max(110, pillTextW);
  const pillH = 32;

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0.40" stop-color="#0a090e" stop-opacity="0"/>
      <stop offset="0.70" stop-color="#0a090e" stop-opacity="0.70"/>
      <stop offset="1.00" stop-color="#0a090e" stop-opacity="0.95"/>
    </linearGradient>
  </defs>

  <!-- 1) dark gradient for title contrast -->
  <rect x="0" y="0" width="${W}" height="${H}" fill="url(#fade)"/>

  <!-- 2) logos (comparison posts only) -->
  ${logoRow}

  <!-- 3) category pill -->
  <rect x="${PAD}" y="${PILL_TOP}" width="${pillW}" height="${pillH}" rx="16" ry="16" fill="#5271FF"/>
  <text x="${PAD + pillW / 2}" y="${PILL_TOP + 22}" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="800" font-size="14" fill="#ffffff" letter-spacing="2">${xml(pillText)}</text>

  <!-- 4) title -->
  ${titleSvg}
</svg>`;

  const overlay = await sharp(Buffer.from(svg)).png().toBuffer();
  return await sharp(jpegBuf)
    .composite([{ input: overlay, blend: 'over' }])
    .jpeg({ quality: 86, mozjpeg: true })
    .toBuffer();
}
