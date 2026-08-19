# Asset Manifest — Teresha Young 2026 Prototype

Audit date: 2026-08-17
Method: visual inspection + file inspection (`file`, image dimensions) of every file present under `assets/` at the start of the foundation stage. No assets were renamed, moved, recompressed, or overwritten during this audit.

**Rights note:** the existence of a file in this repository is not proof of usage rights. Per `README.md`, assets are described as "client-supplied or approved," but this manifest does not itself confirm licensing/usage rights for third-party marks (award-body logos, the IAPC&M logo). Confirm rights/permissions before final publication.

---

## assets/award/

### `award-corporate-livewire-global-2026.pdf`
- **Category:** Award certificate (source document, PDF, portrait, 1 page)
- **Contents:** Certificate text reading "Teresha Young — Relationship Coach of the Year — 2026 & 2027 — Multi Award Winner — CorporateLiveWire Global Awards."
- **Possible use:** Reference/verification document only. Not intended for direct embedding on the website (it's a print-style certificate, not a web-ready graphic).
- **Recommended page/section:** None directly; keep as a source-of-truth reference for the Corporate Recognition / Awards content.
- **Hero suitable:** No.
- **Resolution/aspect concerns:** N/A (PDF).
- **Alt text direction:** N/A — not used as an `<img>`.
- **REVIEW REQUIRED:** This certificate names **2026 & 2027** as a "Multi Award Winner." The approved-facts brief (see `docs/approved-facts.md`) only confirms the **2026** award. The **2027** claim is not in the approved facts list and must not be published until the client explicitly confirms it. Treat the 2027 portion of this document as unconfirmed.

### `award-relationship-coach-of-the-year-uk-2026.png`
- **Category:** Award badge (web graphic), 1429×1418px, PNG-RGBA, transparent-friendly
- **Contents:** Circular blue/white badge, CorporateLiveWire Global Awards 2025/26, "2026 Award Winner," "Teresha Young — Relationship Coach of the Year | UK."
- **Possible use:** Awards/credibility strip; Organisations page trust section; About page.
- **Recommended page/section:** Homepage "Corporate recognition" section; About page credentials.
- **Hero suitable:** No (badge graphic, not a hero image).
- **Resolution/aspect concerns:** Good resolution for badge display up to ~300–400px. Square-ish circular mark; will need consistent sizing against the other (non-matching) award badge designs.
- **Alt text direction:** "Corporate LiveWire Global Awards 2026 winner badge — Relationship Coach of the Year, UK, awarded to Teresha Young."
- **Status:** Matches an approved fact. Confirmed usable.

### `award-relationship-coach-of-the-year-uk-2027.png`
- **Category:** Award badge (web graphic), 3386×3386px, PNG-RGBA
- **Contents:** Circular navy/gold badge, CorporateLiveWire Global Awards **2026/27**, "2026/27 Multi Award Winner," "Teresha Young — Relationship Coach of the Year | UK."
- **Possible use:** Same slot as the 2026 badge, if confirmed.
- **Recommended page/section:** Hold — do not place until confirmed.
- **Hero suitable:** No.
- **Resolution/aspect concerns:** Very high resolution (3386px), file size 2.6MB — will need a compressed web-sized export before use (create a new optimized derivative; do not overwrite the source file).
- **Alt text direction:** TBD pending confirmation.
- **REVIEW REQUIRED:** This asset documents a **2026/27** award cycle. Only the 2026 award (see PNG above) appears in the approved facts brief. Per the client's instruction — "do not publish, feature or describe any award merely because an image exists in the repository" — this badge is **not** used anywhere in the prototype pending explicit client confirmation. Logged as an open decision.

### `award-sme-most-dedicated-wellness-relationship-expert-2025.png`
- **Category:** Award badge, 736×711px, PNG-RGB
- **Contents:** Dark hexagonal badge, "SME News — Southern Enterprise Awards 2025," ribbon "Teresha Young," "Most Dedicated Wellness & Relationship Expert 2025."
- **Possible use:** Awards/credibility strip.
- **Recommended page/section:** Homepage "Corporate recognition" section; About page.
- **Hero suitable:** No.
- **Resolution/aspect concerns:** Modest resolution (736px) — fine at badge scale (≤250px), avoid enlarging.
- **Alt text direction:** "SME News Southern Enterprise Awards 2025 badge — Most Dedicated Wellness & Relationship Expert, awarded to Teresha Young."
- **Status:** Matches an approved fact. Confirmed usable.

### `award-southern-enterprise-2024.png`
- **Category:** Award badge, 736×711px, PNG (8-bit colormap)
- **Contents:** Dark hexagonal badge, "SME News — Southern Enterprise Awards 2024," ribbon "Teresha Young," "Best One-to-One Coaching Boutique 2024 — South East."
- **Possible use:** Awards/credibility strip.
- **Recommended page/section:** Homepage "Corporate recognition" section; Private Coaching page credibility note.
- **Hero suitable:** No.
- **Resolution/aspect concerns:** Same as above — keep at badge scale.
- **Alt text direction:** "SME News Southern Enterprise Awards 2024 badge — Best One-to-One Coaching Boutique, South East, awarded to Teresha Young."
- **Status:** Matches an approved fact. Confirmed usable.

### `award-uk-enterprise-2025.png`
- **Category:** Award badge, 736×711px, PNG (8-bit colormap)
- **Contents:** Dark hexagonal badge, "SME News — UK Enterprise Awards 2025," ribbon "Teresha Young," "Leading Wellness & Relationship Coach 2025."
- **Possible use:** Awards/credibility strip.
- **Recommended page/section:** Homepage "Corporate recognition" section; About page.
- **Hero suitable:** No.
- **Resolution/aspect concerns:** Same as above.
- **Alt text direction:** "SME News UK Enterprise Awards 2025 badge — Leading Wellness & Relationship Coach, awarded to Teresha Young."
- **Status:** Matches an approved fact ("Leading Wellness & Relationship Coach 2025 — SME News"; badge sub-brands this as "UK Enterprise Awards," a SME News awards programme). Confirmed usable.

**Award section note:** four confirmed badges use materially different visual designs (CorporateLiveWire = blue/white circular; SME News = dark hexagonal). This is expected for third-party award marks and should not be redesigned — but the CSS should give them a consistent presentation frame (equal height, neutral card background) so the strip reads as one calm row rather than four clashing badge styles.

---

## assets/background/

### `principal-image-teresha.png`
- **Category:** Portrait cutout (transparent background), 687×798px, PNG-RGBA
- **Contents:** Head-and-shoulders cutout of Teresha, white top, red beaded necklace, background fully transparent — clearly prepared as a layerable "principal" portrait.
- **Possible use:** Hero image, About page lead image, layered over a colour panel or the circle motif.
- **Recommended page/section:** Homepage hero (primary candidate).
- **Hero suitable:** **Yes**, conditionally — see resolution note.
- **Resolution/aspect concerns:** 687×798px is modest for a full-bleed desktop hero (1440px+ wide layouts). Usable at moderate display size (e.g. up to ~500–600px rendered width) without visible softness; do not scale larger. Recommend requesting a higher-resolution source cutout from the client for large hero treatments.
- **Alt text direction:** "Portrait of Teresha Young, Relationship & Emotional Well-being Expert."
- **Uncertainty:** Two near-identical crops exist (this file and `-2`); functional difference is minor framing. Confirm with client/designer which crop is preferred as the single canonical hero cutout, or keep both for different contexts (see next entry).

### `principal-image-teresha-2.png`
- **Category:** Portrait cutout (transparent background), 687×798px, PNG-RGBA
- **Contents:** Same portrait/outfit as above, marginally tighter crop, transparent background.
- **Possible use:** Alternate hero crop, or secondary use (e.g. About page, mobile hero crop).
- **Recommended page/section:** About page or as the mobile-optimised alternate to the homepage hero.
- **Hero suitable:** Yes, same caveat as above.
- **Resolution/aspect concerns:** Same as above.
- **Alt text direction:** "Portrait of Teresha Young, Relationship & Emotional Well-being Expert."
- **Uncertainty:** See above — REVIEW REQUIRED to confirm final hero crop choice with client.

**Directory naming note:** this folder is named `background/` but both files are foreground portrait cutouts, not background textures/imagery. Per instructions the directory is not renamed or restructured — flagging only for awareness during content build.

---

## assets/brand/

### `logo.svg`
- **Category:** Primary brand mark, vector SVG, single flat colour path
- **Contents:** The three-interlocking-circles mark rendered as one solid gold (`#C9AA7D`-equivalent) shape — confirms the "connection / overlap / balance" geometry described in the brief.
- **Possible use:** Header logo, footer mark, favicon source, small compositional accents (per brief: sparingly, not literally repeated across the site).
- **Recommended page/section:** Global header and footer on every page.
- **Hero suitable:** N/A (brand mark, not a photo).
- **Resolution/aspect concerns:** None — vector, scales cleanly at any size.
- **Alt text direction:** "Teresha Young logo" (decorative use elsewhere should use `alt=""`).
- **Status:** Confirmed usable as the site's primary logo mark.

---

## assets/logos/

### `logo-amc.png`
- **Category:** Third-party accreditation logo, 700×327px, PNG-RGBA (transparent)
- **Contents:** International Authority for Professional Coaching & Mentoring (IAPC&M) logo — globe mark, "Experts in Accreditation since 1998," "Accredited Master Coach" credential line.
- **Possible use:** Credibility/trust strip, About page credentials block.
- **Recommended page/section:** Homepage authority/trust strip; About page.
- **Hero suitable:** No.
- **Resolution/aspect concerns:** Good resolution for typical badge/logo display (≤350px wide).
- **Alt text direction:** "International Authority for Professional Coaching & Mentoring — Accredited Master Coach."
- **Status:** Corroborates the approved fact "IAPC&M-accredited at Master Coach level." Confirmed usable. (Third-party mark — confirm usage permission is on file, per rights note above.)

---

## assets/podcast/

### `rlt-podcast-cover.png`
- **Category:** Podcast cover art, 3000×3000px, PNG-RGB
- **Contents:** Square cover art for "RLT — REAL-ationship Talk — The Podcast," featuring a close portrait of Teresha over a warm brown circular-motif background, with her signature.
- **Possible use:** Media & Speaking page podcast section; homepage "REAL-ationship Talk" preview section; footer or news mentions of the podcast.
- **Recommended page/section:** Media & Speaking page (primary); homepage podcast preview section.
- **Hero suitable:** Could work as a supporting image within the podcast section but is not intended as the site's main hero.
- **Resolution/aspect concerns:** File is 6.6MB — far too large to ship as-is on the web. **Do not recompress the source file** (per instruction); a separate, optimised derivative (e.g. WebP/compressed PNG at a smaller max dimension) should be generated as a new build asset when the podcast section is actually built.
- **Alt text direction:** "REAL-ationship Talk podcast cover art, hosted by Teresha Young."
- **Status:** Matches approved podcast facts (name, format). Confirmed usable, pending a web-optimised export.

---

## assets/teresha/

### `teresha-young-image-3.png`
- **Category:** Branded portrait/social image, 3000×3000px, PNG-RGB (square)
- **Contents:** Close portrait of Teresha over the same warm brown circular-motif background used on the podcast cover, with "Teresha Young" signature baked into the image.
- **Possible use:** Media & Speaking or About page supporting image; social/pull-quote card treatment; pairs visually with the podcast cover.
- **Recommended page/section:** Media & Speaking page or News page card imagery.
- **Hero suitable:** No — square format with baked-in text/branding makes it unsuitable as a flexible hero; better as a contained card image.
- **Resolution/aspect concerns:** Large file (7.2MB) — needs a compressed derivative before use; do not recompress the source.
- **Alt text direction:** "Teresha Young, Relationship & Emotional Well-being Expert."
- **Uncertainty:** None on content; REVIEW REQUIRED only on final crop/placement choice.

### `teresha-young-image-4.jpg`
- **Category:** Portrait photo, 2544×3392px (3:4), JPEG
- **Contents:** Head-and-shoulders portrait, magenta/purple patterned outfit, softly blurred indoor background (hotel-style room). Informal, warm expression.
- **Possible use:** About page secondary image, or a warmer "personality" image within a testimonial/quote panel.
- **Recommended page/section:** About page.
- **Hero suitable:** Borderline — tone is warm and approachable, but background setting is informal/domestic rather than editorial; better suited as a secondary image than the primary hero.
- **Resolution/aspect concerns:** High resolution, good for large crops; large file size (1.5MB) should be compressed for web use.
- **Alt text direction:** "Teresha Young smiling, head-and-shoulders portrait."
- **Uncertainty:** REVIEW REQUIRED — confirm with client whether this more casual setting fits the "premium, editorial" brand tone for a public-facing page, or should stay to social/behind-the-scenes contexts only.

### `teresha-young-image-5.jpg`
- **Category:** Portrait photo, 2544×3392px (3:4), JPEG
- **Contents:** Close portrait, dark blouse with a bold statement necklace, softly blurred neutral interior background. Polished, confident expression.
- **Possible use:** About page hero/lead image; Organisations page "meet the expert" section.
- **Recommended page/section:** About page (strong candidate for lead image).
- **Hero suitable:** Yes — most editorial/polished of the raw (non-cutout) portraits.
- **Resolution/aspect concerns:** Good resolution; compress for web delivery.
- **Alt text direction:** "Teresha Young, Relationship & Emotional Well-being Expert, portrait."
- **Uncertainty:** None significant.

### `teresha-young-image-6.jpg`
- **Category:** Portrait/lifestyle photo, 2544×3392px (3:4), JPEG
- **Contents:** Red top, hand gesture (pointing off-frame), casual home interior background with visible shelf decor.
- **Possible use:** Media & Speaking page (expressive/speaker-style gesture suits a "talks/appears in the media" context) or a callout/CTA panel needing directional visual interest.
- **Recommended page/section:** Media & Speaking page.
- **Hero suitable:** No — casual home setting, better as a supporting/personality image.
- **Resolution/aspect concerns:** Good resolution; compress for web.
- **Alt text direction:** "Teresha Young gesturing while speaking."
- **Uncertainty:** REVIEW REQUIRED — same brand-tone question as image-4 (domestic setting vs. premium/editorial standard).

### `teresha-young-image-7.jpg`
- **Category:** Portrait photo, 2544×3392px (3:4), JPEG
- **Contents:** Close portrait, red dress with gold detail, grey wall with a round decorative mirror in the background (the round mirror echoes the circle motif incidentally).
- **Possible use:** About page or Private Coaching page supporting image.
- **Recommended page/section:** Private Coaching or About page.
- **Hero suitable:** Borderline — polished portrait, but background is a personal interior rather than neutral/editorial.
- **Resolution/aspect concerns:** Good resolution; compress for web.
- **Alt text direction:** "Teresha Young, portrait."
- **Uncertainty:** None significant.

### `teresha-young-image-8.jpg`
- **Category:** Phone photo (selfie-style), 2030×2030px (square), JPEG with EXIF (Samsung SM-G780G, dated 2022-01-15)
- **Contents:** Portrait with a Gucci-patterned scarf, seated near flowers, round decorative mirror in background. Visibly a personal/phone photo rather than a professional shoot.
- **Possible use:** Limited — social proof or "behind the scenes" contexts only, if at all.
- **Recommended page/section:** Not recommended for primary page content in this prototype; hold for social/News use only if the client confirms it fits the brand tone.
- **Hero suitable:** No.
- **Resolution/aspect concerns:** Square crop, moderate resolution; contains embedded EXIF metadata (capture device, date) that should be stripped before any public web use.
- **Alt text direction:** TBD pending confirmation of use.
- **REVIEW REQUIRED:** Casual phone-photo quality and personal setting sit outside the "premium, elegant, editorial" brand personality target. Do not use in the prototype's structural build; flagged as an open decision for the client to confirm or decline.

---

## Summary table

| File | Category | Confirmed for use in this stage? |
|---|---|---|
| award-corporate-livewire-global-2026.pdf | Certificate | Reference only |
| award-relationship-coach-of-the-year-uk-2026.png | Award badge | Yes |
| award-relationship-coach-of-the-year-uk-2027.png | Award badge | **No — REVIEW REQUIRED** |
| award-sme-most-dedicated-wellness-relationship-expert-2025.png | Award badge | Yes |
| award-southern-enterprise-2024.png | Award badge | Yes |
| award-uk-enterprise-2025.png | Award badge | Yes |
| principal-image-teresha.png | Hero portrait cutout | Yes (resolution caveat) |
| principal-image-teresha-2.png | Hero portrait cutout (alt crop) | Yes (resolution caveat) |
| logo.svg | Brand mark | Yes |
| logo-amc.png | Accreditation logo | Yes |
| rlt-podcast-cover.png | Podcast cover | Yes (needs web-optimised export) |
| teresha-young-image-3.png | Branded portrait | Yes (needs web-optimised export) |
| teresha-young-image-4.jpg | Portrait | **REVIEW REQUIRED** (brand-tone fit) |
| teresha-young-image-5.jpg | Portrait | Yes |
| teresha-young-image-6.jpg | Portrait/lifestyle | **REVIEW REQUIRED** (brand-tone fit) |
| teresha-young-image-7.jpg | Portrait | Yes |
| teresha-young-image-8.jpg | Phone photo | **No — REVIEW REQUIRED** |

No assets were renamed, moved, deleted, recompressed, or overwritten in the course of this audit.

---

## Derivatives created — Sitewide Refinement stage

- `teresha-young-image-4-hero.jpg` (1900×2533, plain resize) and `teresha-young-image-5-hero.jpg` (1900×2533, plain resize) are used together in the homepage hero's rotation. Also reused (unresized) for the About and Private Coaching page portraits.
- `teresha-young-image-7-card.jpg` (900×1200, plain resize, no crop) is used as the "Why Teresha" section image. See `docs/open-decisions.md` item 14 for why a landscape crop was not used instead.
- `assets/docs/resources/` now holds the two approved resource PDFs (`igniting-intimacy-12-powerful-questions.pdf`, `7-day-me-time-plan.pdf`), unchanged as archival source files. No PDF files were fabricated or edited.

---

## Authority Homepage / Resources stage — media logos and article assets

### `assets/logos/media/` — outlet logo files present and now in use

All nine files in this directory are used, unedited, in the homepage "Recognised across the media" section and the Media & Speaking page's "Media appearances" section, inside a shared `.logo-field` component (consistent optical height via CSS, monochrome until hover, original aspect ratio preserved, no added card/border):

| File | Outlet | Notes |
|---|---|---|
| `BBC-Radio-Kent-Logo.png` | BBC Radio Kent | Solid purple brand-colour background baked into the file (not transparent) |
| `bbc-radio-london-logo.png` | BBC Radio London | Solid purple background baked into the file |
| `channel-4-logo.png` | Channel 4 | Black wordmark, transparent/white background |
| `cosmopolitan-logo.png` | Cosmopolitan UK | Magenta wordmark, transparent background |
| `daily-record-logo.png` | Daily Record | Solid red background baked into the file |
| `huffpost-logo.jpg` | HuffPost | White background (JPEG, no transparency) |
| `ok!-logo.png` | OK! | Solid red background baked into the file |
| `the-mirror-logo.png` | The Mirror | Transparent background |
| `thrive-global-logo.jpg` | Thrive Global | White background (JPEG, no transparency) |

**Not present:** logo files for New, Breathe, iCN, The List and Nicki Swift, and Glam — six of the fifteen approved-facts outlet names. These outlets are omitted from the live logo grid on both pages rather than represented with a fabricated wordmark; see `docs/open-decisions.md` item 11.

### Resource article assets

No new image derivatives were created for the two resource articles. `resources/igniting-intimacy-12-powerful-questions.html` and `resources/7-day-me-time-plan.html` are text-only editorial pages using the shared global stylesheet; the source PDFs are linked only as a secondary "View original PDF" reference and are otherwise unchanged in this directory.
