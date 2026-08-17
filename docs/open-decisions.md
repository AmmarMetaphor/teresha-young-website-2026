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

## 5. Canonical hero portrait crop — RESOLVED for Stage 2 (confirm before final launch)

**Stage 2 decision:** the homepage hero now uses `teresha-young-image-5.jpg`, not either transparent cutout (`principal-image-teresha.png` / `-2.png`). Rationale: a cutout floated over a coloured shape is a strong visual signature of coach/speaker template sites — exactly the feel the brief asks Teresha's site to avoid. A calm, editorial, neutral-background photograph reads more premium and sidesteps the resolution ceiling of the cutouts (see #6). The two cutouts remain unused and available for a future About-page treatment. **Action needed:** client to confirm this hero image choice; a different confirmed photograph can be swapped in without any structural change.

## 6. Hero image resolution — largely resolved by the Stage 2 image choice

Using `teresha-young-image-5.jpg` (2544×3392px) for the hero sidesteps the resolution ceiling that applied to the 687×798px transparent cutouts, since it stays sharp at large desktop hero sizes. If a future decision reintroduces a cutout-style treatment, the original resolution concern would apply again.

## 7. Corporate client logos

Channel 4 and Mind Charity are confirmed corporate clients, but no logo image assets for either exist in the repository. **Action needed:** client to supply approved logo files (with usage permission confirmed) before the Organisations page's client-recognition section can show real marks instead of `TODO` placeholders.

## 8. Award badge visual consistency

The four confirmed award badges come from two different awarding bodies with materially different visual designs (CorporateLiveWire's blue/white circular badge vs. SME News's dark hexagonal badges). This is normal for third-party marks and they should not be redesigned, but confirm with the client that displaying them together in one calm, evenly-sized row (rather than attempting to visually unify them) is the acceptable approach.

## 9. Third-party mark usage permissions

The IAPC&M logo (`logo-amc.png`) and the award-body badges are third-party marks. The brief instructs not to assume usage rights merely because a file exists in the repository. **Action needed:** confirm that permission to display each third-party mark on the public website has been granted, separate from confirmation of the underlying factual claim.

## 10. Podcast and branded-portrait file sizes

`rlt-podcast-cover.png` (6.6MB) is now referenced directly on the homepage (Section 11, lazy-loaded, below the fold). Per instructions, the original source file is not recompressed or overwritten during this stage. **Action needed (next stage):** produce an optimised web derivative (compressed PNG/WebP at a smaller max dimension) as a new build asset — this is a real page-weight cost on the live homepage now, not just a theoretical one. `teresha-young-image-3.png` (7.2MB) remains unused on the homepage for this stage.

## 11. Media & Speaking preview — no outlet logo assets

The homepage's Media & Speaking preview (Section 10) and News page reference confirmed outlet names (BBC Radio Kent, Channel 4, Cosmopolitan UK, etc.) as plain typographic citations, because no outlet logo image assets exist anywhere in the repository. **Action needed:** if the client can supply approved outlet logos (with usage permission confirmed), the typographic citation row could be upgraded to a restrained logo treatment.

## 12. Free-resource sign-up form is architecture only

The homepage's "A useful place to begin" sign-up form (Section 12) is a working UI pattern with hidden `resource_id` / `source_page` / `audience` fields, but it is **not connected to any real email platform**, and no specific downloadable resource has been approved yet (`data/resources.json` is still all `TODO`). Submitting the form shows an honest inline note rather than a fabricated success state. **Action needed:** confirm the actual resource (title, format) and the email platform/integration before this goes live.
