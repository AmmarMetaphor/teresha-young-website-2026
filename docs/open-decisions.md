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

**Current decision:** the homepage hero rotates `teresha-young-image-4-hero.jpg` and `teresha-young-image-5-hero.jpg` (resized derivatives — full original framing preserved, nothing cropped out of either derivative itself). Neither transparent cutout (`principal-image-teresha.png` / `-2.png`) is used. Rationale: a cutout floated over a coloured shape is a strong visual signature of coach/speaker template sites — exactly the feel the brief asks Teresha's site to avoid. The two cutouts remain unused and available for a future About-page treatment. **Action needed:** client to confirm this hero image choice; a different confirmed photograph can be swapped in without any structural change.

An earlier version of this hero displayed the photo as a full-bleed `cover` background under a ~2:1 wide banner box. Because the source is a 3:4 portrait, covering that box required cropping away roughly 60% of the image's height, which is what caused the reported "eyes fill the whole screen" problem. A second version built the hero as an asymmetrical split (photo in its own ~43% panel, text in a separate white panel) to solve that crop problem, but this read too much like "text on a white rectangle beside an image rectangle" rather than one composition.

**Current (this stage) treatment:** the hero is now a single full-bleed composition. The photograph fills the whole frame at a gentle crop (object-position tuned per breakpoint so the face, hair and shoulders stay in frame); a heavily blurred, tinted echo of the same photo fills the background behind the copy so the text side reads as the same photographic environment continuing behind the copy, not a flat colour panel; and a warm gradient scrim (not a solid box) carries the text, dissolving into the open photograph rather than meeting it at a hard edge. This keeps the same forgiving crop the asymmetrical-split version used (no "eyes fill the screen" regression) while removing the two-rectangle seam. Because both source images are already tight, close portraits with modest background visible, "more environment" is delivered through the ambient bleed treatment rather than through a wider literal crop, which would have made the face-fill problem worse, not better; see item 13 for the same point on a possible future third hero image with more genuine environment in frame.

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

## 11. Media outlet logos — resolved for the nine outlets with a supplied file; six remain text-only

Real logo image files are now supplied under `assets/logos/media/` for nine outlets: BBC Radio Kent, BBC Radio London, Channel 4, The Mirror, Cosmopolitan UK, HuffPost, Daily Record, OK! and Thrive Global. These now appear as real marks (an editorial `.logo-field`, monochrome until hover, consistent optical height, original aspect ratio) on the homepage's "Recognised across the media" section and the Media & Speaking page's "Media appearances" section, replacing the previous typographic citation treatment.

**Still no supplied logo file** for six approved outlet names: New, Breathe, iCN, The List, Nicki Swift, Glam. Per instruction, these are omitted from the live logo grid rather than represented with a fabricated or redrawn wordmark. **Action needed:** if the client can supply approved logo files for these six outlets, they can be added to the same `.logo-field` grid on both pages with no structural change.

## 12. Resources page — PDFs now supplied and converted into native articles

Both approved resource PDFs are now supplied under `assets/docs/resources/` (`igniting-intimacy-12-powerful-questions.pdf` and `7-day-me-time-plan.pdf`) and remain there unchanged as archival source files. Each has been read in full and converted into a native HTML article: `resources/igniting-intimacy-12-powerful-questions.html` and `resources/7-day-me-time-plan.html`. `resources.html` now links "Read article" directly to these pages; the original PDF is available only as a secondary "View original PDF" link inside each article.

Two passages present in both source PDFs were **not** carried into the web articles, by deliberate content-discipline decision rather than by accident: (1) the author-bio paragraph on the PDF's second page, which frames the guide around helping "single and coupled up women" — this audience framing is not reflected in `docs/approved-facts.md` and sits outside the site's currently-neutral private-coaching audience framing (see item 2 above); and (2) each PDF's closing "here's what to do next" section, which names a program not in `docs/approved-facts.md` (a "4C's Blueprint™" method and a "Confidence Restyler™" title) and links to personal social media accounts outside the site's own navigation. All twelve reflective questions, the complete L-RUGI technique, and the complete Day 1–7 structure are reproduced in full with no content invented, summarised away, or changed in meaning. **Action needed:** if the client wants the omitted framing or program name published, confirm the exact wording for `docs/approved-facts.md` first.

The homepage's earlier unwired resource sign-up form has been removed as part of this pass; there is currently no lead-capture form on the homepage. **Action needed:** confirm whether a resource sign-up form (and which email platform) should be reintroduced in a future stage.

## 13. Hero photo rotation — two images, not three, now shown as one full-bleed composition

The homepage hero rotates between two photographs (`teresha-young-image-4-hero.jpg` and `teresha-young-image-5-hero.jpg`), crossfading every 7 seconds, confirmed by direct browser observation (see PR description for exact timings). A third rotation image was deliberately not added: `teresha-young-image-6.jpg` and `-7.jpg` both have a gesture (a pointing hand) or framing that reads awkwardly once resized, and `-8.jpg` is an informal phone photo (see item 4) unsuited to the hero. Two clearly satisfies "rotate between the strongest 2–3 images" without forcing in a weaker third.

The hero has also been rebuilt this stage from an asymmetrical split (a white text panel beside a separate photo panel) into one full-bleed photographic composition: the photograph fills the entire hero, a blurred ambient echo of the same photo fills the background behind the copy, and a warm gradient scrim carries the text, so there is no hard seam between "photo" and "copy" anywhere in the frame. **Action needed:** if the client can supply a third genuinely hero-suitable professional photograph — ideally with a wider, more environmental frame than the current close portraits — it can be added to the rotation with no structural change (add one more `<img data-hero-photo>` in `index.html`), and would allow an even more spacious crop than the current source images support.

## 14. "Why Teresha" image — kept portrait, did not force a landscape crop

The brief asked for a horizontal/landscape (16:10 or 3:2) photo in the "Why Teresha" section if a suitable one exists. Two candidate landscape crops were generated and visually reviewed (`teresha-young-image-6.jpg` and `-7.jpg`); both were rejected — cropping either of these 3:4 portrait originals down to a wide landscape frame either cut off part of a gesture or pushed facial features uncomfortably close to the frame edge. No source asset in the repository has enough spare vertical headroom to support a good landscape crop. Rather than ship an awkward crop, the section keeps a portrait-oriented image (`teresha-young-image-7-card.jpg`, a plain resize, not a crop) and instead fixes the underlying layout complaint — empty space beneath a shorter image in a CSS Grid cell — with `align-self: start` on `.portrait-card`. **Action needed:** if the client can supply a genuine landscape/horizontal photograph in the future, it can replace this image directly.

---

# Content architecture stage

## 15. My Story — the supplied story text was never provided (BLOCKING)

**This is the most important open item in this stage.**

The brief instructs that the About page's My Story section be built from "the
complete story supplied by the user beginning 'Who Is She?!'", and lists its
chronology: childhood as the eldest of four; parental relationship dysfunction;
domestic abuse within her parents' relationship; her father's affairs and
additional children; her mother's eventual decision to leave; Teresha's own
relationship ending in 2008; the emotional impact of that breakup; the personal
shift beginning around 2010; renewed confidence and self-love; and her
professional mission and development.

**That story text was not attached to the brief and does not exist anywhere in
this repository.** It was searched for by content and by filename.

What was therefore built:

- The **visible excerpt is written**, strictly from the five communication points
  the brief specifies for the excerpt (glad the visitor found the site; setbacks
  and difficult relationship experiences; growing up around a deeply
  disconnected parental relationship shaping her early understanding of
  relationships; those experiences forming part of the foundation for her later
  work; the full story available by choice). Nothing beyond those five points is
  asserted.
- The **full disclosure mechanism is complete and working** (accessible
  `aria-expanded` button, keyboard operable, focus moves into the revealed
  region, no page reload, label toggles between "Read the full story" and
  "Close the full story").
- The expanded panel contains the four story-image placeholders and the warm
  internal closing CTA that replaces the legacy sales close.
- **No narrative was written.** Nothing about her childhood, her parents'
  relationship, domestic abuse, her father's affairs, her mother's decision to
  leave, the 2008 breakup or the recovery from 2010 onward has been drafted,
  paraphrased or inferred, because inventing any of it would fabricate a real
  person's history — which `docs/approved-facts.md` forbids absolutely.

**Action needed:** supply the story text. It then pastes into the marked slot in
`about.html` (an HTML comment marks the exact location and restates the editorial
treatment rules). Until then the panel shows a "to follow" marker rather than a
broken promise.

## 16. My Story qualifications — not published, pending approval

The supplied story is described as mentioning: IAPC&M Accredited & Certified
Master Coach, CIPD, Life Coaching, Counselling Skills, Cognitive Behavioural
Therapy, Mental Health, Body Language, Reiki 1 and 2, and Equality & Diversity.

Only the **IAPC&M Master Coach accreditation** appears in
`docs/approved-facts.md`. The other eight are **not published anywhere on the
site in this stage** — not in the story section and not in the About credentials
list — because the brief requires them to be verified against approved facts
before being elevated into site authority messaging.

**Action needed:** confirm which of the eight are current and may be published,
and add the approved wording to `docs/approved-facts.md` first.

## 17. ITV Studios is not in approved facts

The brief supplies a News item naming "Channel 4 / ITV". `docs/approved-facts.md`
confirms **Channel 4** and **Mind Charity** as corporate clients; **ITV Studios
is not listed**. The card is published as supplied by the brief, but the claim is
not yet backed by approved facts.

**Action needed:** confirm the ITV Studios relationship and add it to
`docs/approved-facts.md`, or amend the card.

## 18. News items — no dates, excerpts or engagement figures published

The reference screenshots show publication dates and comment counts. None was
supplied as data, and the brief forbids inventing dates, comment counts, article
body copy or engagement statistics, and forbids harvesting production content out
of the screenshots. So each News card carries **image, category, title and outlet
only**. Nothing was transcribed off a screenshot.

**Action needed:** supply real publication dates and short approved excerpts if
they should appear. The card component already has a `.news-card__excerpt` slot
and a `.news-card__meta` line ready for them.

## 19. Resource delivery is a visual prototype — no integration exists

Both resource gates (the eBook modal and the two inline article forms) are
**prototypes only**, as the brief specifies. Verified by automated browser test:

- No email is sent.
- No CRM, mailing platform, database or API is connected.
- No POST/PUT/PATCH request is made on submit (asserted in test).
- Nothing is written to `localStorage`, `sessionStorage` or cookies (asserted).
- Submitted values are discarded immediately; the form is reset.
- The "Thanks. The resource has been sent to your email address." message is a
  visual mockup of a delivery that does not happen.

Client-side validation, real `<label>` elements, `aria-invalid`, `role="alert"`
error messages, focus trapping, Escape-to-close and focus restoration are all
implemented and tested.

No developer-warning text appears on the public page; this limitation is recorded
here and in HTML comments only.

**Action needed:** choose an email delivery platform and wire up real delivery,
plus the privacy/consent copy that a real sign-up requires.

## 20. Awards ribbon — pause control rather than manual arrows

The brief lists manual arrows for the awards ribbon as *optional*. They were not
implemented, deliberately: arrow-stepping fights a CSS `transform` marquee (the
animation owns `transform`, so a JS offset cannot compose with it cleanly without
replacing the whole mechanism with a JS scroll loop, which Part 50 of the brief
argues against).

Instead both ribbons carry an explicit **pause/resume control**. This is the more
valuable accessibility outcome: hover and keyboard focus already pause the ribbon
in CSS, but neither is reachable by a touch-only visitor, so the button is what
actually makes the moving content pausable. Under reduced motion the ribbon is a
static wrapped row and the control is removed rather than left inert.

Real arrow controls **are** implemented on the Media & Speaking content rail and
the Organisations proof carousel, where a native `overflow-x` scroller makes them
behave correctly.

**Action needed:** none, unless the client specifically wants arrows on the
awards ribbon, in which case it should become a scroll-based rail like the others.

## 21. Lazy loading cannot be used inside a moving ribbon

Worth recording because it caused visible gaps that were easy to miss:
`loading="lazy"` images inside a horizontally-animated, `overflow: hidden`
marquee may **never load at all**. The track translates continuously, so an image
can sit outside the intersection window indefinitely and its load is never
triggered. This affected the media-logo ribbon already on `main` (the last three
logos were reliably blank) as well as the new awards ribbon.

Fixed by removing `loading="lazy"` from all ribbon images and adding the smaller
`assets/award/ribbon/` derivatives so eager loading stays cheap. Any future
ribbon must follow the same rule.

## 22. News page is now static HTML

`news.html` previously rendered from `data/news.json` at runtime. It is now static
HTML, matching how `resources.html` already worked. `data/news.json` has been
updated to match and remains the structured record; the runtime `initNewsList()`
renderer was removed as dead code.

**Action needed:** if News should become data-driven again as the item count
grows, the JSON file is already the correct shape to build from.

## 23. Homepage hero rotation retired (supersedes item 13)

Item 13 above describes a two-photograph crossfading homepage hero. That rotation
was **removed** this stage. The Homepage hero now shows a single still using
`private-coaching-hero.jpg`, the same approved source already working on the
Private Coaching hero, with the same photographic treatment (Teresha fully
visible, full face in frame, no head cut-off, warm walnut blend, no hard split
panel, no extreme close-up).

A single frame lets the composition be tuned precisely rather than compromised
across two images with different framing. All hero copy is unchanged: eyebrow,
H1, supporting line, CTA wording, CTA hierarchy and alignment are exactly as
approved. `initHeroRotation()` was removed as dead code.

## 24. Footer navigation still lists the retired top-level items

The primary navigation now nests For Organisations and Private Coaching under
"Work With Me", and Media & Speaking and News under "Media & Speaking". The
**footer was deliberately left alone** — it is outside this stage's authorised
change scope, and a flat footer link list is normal and useful even when the
header is nested.

**Action needed:** confirm the footer should stay flat, or authorise grouping it
to match the header in a later stage.
