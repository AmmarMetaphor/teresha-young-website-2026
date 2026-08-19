# Content Matrix

Maps each page to its role in the customer journey, its primary audience question, its colour system, and the sections currently present.

**Status:** `index.html` was fully designed and built in Stage 2, then substantially reworked in the Authority Homepage / Resources stage (see `docs/project-brief.md`). `organisations.html`, `private-coaching.html` and `media-speaking.html` have had light content and image enhancements this stage but remain simpler than `index.html`. `resources.html` and the two new resource articles were fully built this stage.

Journey stages referenced below: **(1) Recognise → (2) Understood → (3) Trust → (4) See the help → (5) Next step.**

| Page | Primary audience question answered | Colour system | Journey emphasis | Sections in this stage |
|---|---|---|---|---|
| `index.html` | Who is this for? / Why Teresha? | All three navigational colours introduced, gold kept decorative-only (never as small text, per contrast fix) | Full 1→5 arc | Hero (full-bleed rotating composition), Awards & Recognition, Recognised Across the Media, S.A.F.E.™, Why Teresha, REAL-ationship Talk, Resources preview, Final CTA |
| `organisations.html` | Can Teresha help my organisation? | Corporate Slate | 1→5 for HR/L&D/leadership visitors | Hero, outcomes/topics list (full 11-topic index), credibility, CTA |
| `private-coaching.html` | Can Teresha help me personally? | Relationship Berry | 1→5 for private-client visitors | Hero with portrait image, outcomes with focus-area list, pull-quote, S.A.F.E.™ reference, CTA |
| `media-speaking.html` | Why Teresha (authority/media proof)? | Emotional Well-being Forest + Gold accents | 3→5 (trust-forward) | Hero, real media logo grid, podcast section, speaking section, CTA |
| `about.html` | Why Teresha? | Warm Walnut Brown neutral base | 2→3 (understanding + trust) | Hero/story, credentials, philosophy |
| `news.html` | Why Teresha (proof via media presence)? | Neutral base | 3 | Listing shell driven by `data/news.json` |
| `resources.html` | What should I do next (low-commitment)? | Neutral base | 4→5 | Editorial resource list linking to the two native articles below |
| `resources/igniting-intimacy-12-powerful-questions.html` | What should I do next (low-commitment)? | Neutral base | 4→5 | Full article: intro, 12 questions, L-RUGI technique, breadcrumb, SEO/OG fields |
| `resources/7-day-me-time-plan.html` | What should I do next (low-commitment)? | Neutral base | 4→5 | Full article: intro, Day 1–7 structure, breadcrumb, SEO/OG fields |
| `contact.html` | What should I do next? | Neutral base | 5 | Contact/next-step shell |
| `privacy.html` / `terms.html` | — | Neutral base | — | Legal text shells |
| `404.html` | — | Neutral base | — | Recovery shell (links back into navigation) |

## Testimonials

No standalone testimonials page exists or is planned. `data/testimonials.json` holds structured, categorised placeholder entries (tagged by context: organisations / private-coaching / media) so a later stage can place testimonial content contextually within the relevant pages above.

## Data files

- `data/news.json` — structured list for the News page and homepage media mentions; currently seeded only with `TODO` entries plus the confirmed media outlet names from `docs/approved-facts.md` (no invented headlines, dates, or links).
- `data/resources.json` — reference record for the two real resource articles now live under `resources/`. `resources.html` still renders its cards statically rather than reading this file, but the file itself is up to date with real titles, descriptions and paths.
- `data/testimonials.json` — structured, categorised placeholder entries; no real testimonial text is fabricated.
