# Mallo Digital brand kit

Formerly Short n Sweet Digital. Short, soft, sweet.

## Name
- Brand: **Mallo Digital** (short form: **Mallo**)
- Mascots: **the Mallo crew**, five animated 3D characters used around the site
  - **Puff**: cotton candy cloud raining sprinkles (logo, favicon, homepage hero, blog)
  - **Jelli**: pink gummy jellyfish (homepage stats, 404)
  - **Bun**: marshmallow bunny (homepage services, about)
  - **Blip**: floating orb robot (texting section, book a call)
  - **Toasty**: toasted marshmallow on a stick (final CTA, pricing)
- Domains checked open on 2026-09-27: `mallodigital.com`, `mallo.digital` (not yet purchased)
- Unchanged for now: `shortnsweetdigital.com` URLs, `app.shortnsweetdigital.com`, affiliate code `fp_ref=shortnsweet53`, social handles, legal pages

## Colors
| Token | Hex | Use |
|---|---|---|
| Marshmallow | `#FDF6F0` | mascot body, light surfaces |
| Night | `#0F172A` | backgrounds, visor |
| Glow Blue | `#3B9BFF` | eyes, accents (matches existing `--accent` family) |
| Deep Blue | `#188BF6` | buttons, links |
| Blush | `#FFB3CF` | cheeks, antenna, small pops |

## Type
Wordmark is lowercase `mallo` in a rounded heavy sans (Nunito 800), with `DIGITAL` tracked out underneath.

## Assets
- `public/assets/mascots/<name>.webp`: animated loop per character (transparent animated WebP, desktop)
- `public/assets/mascots/<name>-still.webp`: still frame, served on phones and for reduced motion
- `src/components/Mascot.astro`: drop in `<Mascot name="puff" />` anywhere; handles the desktop/mobile swap
- `public/assets/brand-mark.svg`: header/footer logo (Puff + wordmark)
- `public/favicon.png`: icon
- `docs/brand/mascots-3d.html`: the three.js scene all five are rendered from. Open with `?m=toasty|jelli|bun|puff|blip` (add `&bg=%230b1020` for a dark backdrop)

## 3D mascot render prompt (Meta Muse style)
Use this in Higgsfield, Midjourney, or any image model to make the hero 3D version.

> A cute, soft 3D character mascot named Mallo: a small squishy alien made of marshmallow, shaped like a round puffy mochi with a slightly flat bottom, warm off white (#FDF6F0) with a soft powdery sugar sheen, one curly antenna on top ending in a glowing electric blue orb (#3B9BFF), big glossy black anime eyes with blue irises and white sparkles, soft pink blush, a tiny open smile, stubby rounded arms (one waving), two little nub feet. Mid hop with gentle squash and stretch. Pixar meets Apple clay render, soft global illumination, subsurface scattering, blue rim light, deep navy studio backdrop (#0F172A) with a soft gradient, centered, 1:1, high detail, no text.

Pose variants for the site: waving (hero, done), holding a phone with a chat bubble (SMS section), sitting on a laptop (blog), thumbs up (booking confirmation), sleeping (404).
