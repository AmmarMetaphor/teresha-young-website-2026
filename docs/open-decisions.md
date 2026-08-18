# Open Decisions — Requires Client / Human Confirmation

These items are deliberately left unresolved in the prototype. None of them block the foundation-stage build, but none should be finalised without sign-off.

## 1. S.A.F.E.™ framework prominence

The signature framework (Secure, Aligned, Fulfilled, Empowered) is approved for use and is reflected as a homepage section placeholder and in the site architecture. **Not yet decided:** how prominently it should feature — e.g. as a standalone brand pillar with its own page/section treatment across Organisations and Private Coaching, vs. a lighter supporting mention on the homepage only. Keep the architecture flexible until the client confirms desired prominence.

## 2. Private Coaching audience framing

**Not yet decided:** whether Private Coaching should remain explicitly women-focused (as it may have been historically) or be framed for a broader/mixed private-client audience. The corporate/organisational pathway must **not** be women-only regardless of the outcome here — that constraint is fixed. The private-coaching page shell in this prototype uses neutral, non-gendered placeholder language pending this decision.

## 3. 2026/27 "Multi Award Winner" claim (Corporate LiveWire)

The repository contains a badge (`award-relationship-coach-of-the-year-uk-2027.png`) and a certificate PDF (`award-corporate-livewire-global-2026.pdf`) referencing a **2026 & 2027** "Multi Award Winner" status from Corporate LiveWire Global Awards. The approved-facts brief only confirms the **2026** award. **Action needed:** client to confirm whether the 2027 award/cycle is confirmed and ready to publish. Until then, only the 2026 badge is used on the site.

## 4. Brand-tone fit of casual/personal photography

Several portrait assets (`teresha-young-image-4.jpg`, `-6.jpg`, and especially the phone-photo `-8.jpg`) were shot in informal, personal settings (home interiors, a phone selfie with visible EXIF/device metadata) rather than a neutral/editorial studio context. The brand personality target is "premium, calm, editorial, elegant, sophisticated" and explicitly not "generic" or "over-decorated," but says nothing about excluding warmth or humanity — informal photos are not disqualified on tone alone. **Action needed:** client/designer to confirm which of these, if any, are appropriate for public page use versus social-only or excluded entirely. `teresha-young-image-8.jpg` is held back from the structural build pending this decision.

## 5. Canonical hero portrait crop — RESOLVED for now (confirm before final launch)

**Current decision:** the homepage hero uses `teresha-young-image-4.jpg`, via the optimised derivative `assets/teresha/teresha-young-image-4-hero.jpg` (a resize only — full original framing preserved, nothing cropped out of the derivative itself). Neither transparent cutout (`principal-image-teresha.png` / `-2.png`) is used. Rationale: a cutout floated over a coloured shape is a strong visual signature of coach/speaker template sites — exactly the feel the brief asks Teresha's site to avoid. The two cutouts remain unused and available for a future About-page treatment. **Action needed:** client to confirm this hero image choice; a different confirmed photograph can be swapped in without any structural change.

An earlier version of this hero displayed the photo as a full-bleed `cover` background under a ~2:1 wide banner box. Because the source is a 3:4 portrait, covering that box required cropping away roughly 60% of the image's height, which is what caused the reported "eyes fill the whole screen" problem. The hero is now built as an asymmetrical split instead — the photo gets its own panel at close to native ratio (~43–46% of the viewport width at desktop sizes, run at close to full hero height) — which needs only a gentle crop and keeps hair, both shoulders and visible surroundings in frame, while also solving the text/face collision structurally: copy sits in its own panel and never overlaps the photograph.

## 6. Hero image resolution — resolved by the current crop treatment

`teresha-young-image-4-hero.jpg` (1900×2533px derivative of the 2544×3392px original) stays sharp at the panel size actually used (well under its native resolution at every tested breakpoint). The 687×798px transparent cutouts remain a resolution concern only if a future decision reintroduces a cutout-style treatment.

## 7. Corporate client logos

Channel 4 and Mind Charity are confirmed corporate clients, but no logo image assets for either exist in the repository. **Action needed:** client to supply approved logo files (with usage permission confirmed) before the Organisations page's client-recognition section can show real marks instead of `TODO` placeholders.

## 8. Award badge visual consistency

The four confirmed award badges come from two different awarding bodies with materially different visual designs (CorporateLiveWire's blue/white circular badge vs. SME News's dark hexagonal badges). This is normal for third-party marks and they should not be redesigned, but confirm with the client that displaying them together in one calm, evenly-sized row (rather than attempting to visually unify them) is the acceptable approach.

## 9. Third-party mark usage permissions

The IAPC&M logo (`logo-amc.png`) and the award-body badges are third-party marks. The brief instructs not to assume usage rights merely because a file exists in the repository. **Action needed:** confirm that permission to display each third-party mark on the public website has been granted, separate from confirmation of the underlying factual claim.

## 10. Podcast and branded-portrait file sizes

`rlt-podcast-cover.png` (6.6MB) is now referenced directly on the homepage (Section 11, lazy-loaded, below the fold). Per instructions, the original source file is not recompressed or overwritten during this stage. **Action needed (next stage):** produce an optimised web derivative (compressed PNG/WebP at a smaller max dimension) as a new build asset — this is a real page-weight cost on the live homepage now, not just a theoretical one. `teresha-young-image-3.png` (7.2MB) remains unused on the homepage for this stage.

## 11. Media outlet logos — no logo image assets exist

The homepage's media-authority section, the Media & Speaking page's outlet grid, and the News page's noscript fallback all reference confirmed outlet names (BBC Radio Kent, Channel 4, Cosmopolitan UK, etc.) as plain Bodoni Moda typographic citations, because no outlet logo image assets exist anywhere in the repository. This is a deliberate, restrained text treatment — not a placeholder — but it is not the "logo grid" a client with real usage-permitted logo files could ultimately supply. **Action needed:** if the client can supply approved outlet logos (with usage permission confirmed for each), the typographic grid on Media & Speaking (and the equivalent lists elsewhere) could be upgraded to real logo marks with outlet-identifying alt text.

## 12. Resources page PDFs — titles approved, files not yet supplied

Two resource guides are now approved for the Resources page: "Igniting Intimacy — 12 Powerful Questions to Transform Your Relationship" and "7 Day 'Me Time' Plan" (see `docs/approved-facts.md` and `data/resources.json`). The actual PDF files have **not** been supplied and have not been fabricated. `resources.html` renders both cards with real titles and descriptions, but their "Read the guide" / "Open PDF" actions are intentionally non-functional (`aria-disabled="true"`, not a broken link) until real files exist. A scaffold folder, `assets/docs/resources/`, documents the two expected filenames. **Action needed:** client to supply the two PDFs; once added, wire up the two disabled actions into real `<a target="_blank" rel="noopener">` links per the instructions in `assets/docs/resources/README.md`.

The homepage's "A useful place to begin" sign-up form (Section 12) is a working UI pattern with hidden `resource_id` / `source_page` / `audience` fields, but it is **not connected to any real email platform**. Submitting the form shows an honest inline note rather than a fabricated success state. **Action needed:** confirm the email platform/integration before this goes live.

## 13. Hero photo rotation — two images, not three

The homepage hero now rotates between two photographs (`teresha-young-image-4-hero.jpg` and `teresha-young-image-5-hero.jpg`), crossfading roughly every 7 seconds. A third rotation image was deliberately not added: `teresha-young-image-6.jpg` and `-7.jpg` both have a gesture (a pointing hand) or framing that reads awkwardly once resized to the hero panel's tall aspect ratio, and `-8.jpg` is an informal phone photo (see item 4) unsuited to the hero. Two clearly satisfies "rotate between the strongest 2–3 images" without forcing in a weaker third. **Action needed:** if the client can supply a third genuinely hero-suitable professional photograph, it can be added to the rotation with no structural change (add one more `<img data-hero-photo>` in `index.html`).

## 14. "Why Teresha" image — kept portrait, did not force a landscape crop

The brief asked for a horizontal/landscape (16:10 or 3:2) photo in the "Why Teresha" section if a suitable one exists. Two candidate landscape crops were generated and visually reviewed (`teresha-young-image-6.jpg` and `-7.jpg`); both were rejected — cropping either of these 3:4 portrait originals down to a wide landscape frame either cut off part of a gesture or pushed facial features uncomfortably close to the frame edge. No source asset in the repository has enough spare vertical headroom to support a good landscape crop. Rather than ship an awkward crop, the section keeps a portrait-oriented image (`teresha-young-image-7-card.jpg`, a plain resize, not a crop) and instead fixes the underlying layout complaint — empty space beneath a shorter image in a CSS Grid cell — with `align-self: start` on `.portrait-card`. **Action needed:** if the client can supply a genuine landscape/horizontal photograph in the future, it can replace this image directly.
