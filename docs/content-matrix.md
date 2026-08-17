# Content Matrix — Foundation Stage

Maps each page to its role in the customer journey, its primary audience question, its colour system, and the sections currently present as structural placeholders (not final copy/design).

Journey stages referenced below: **(1) Recognise → (2) Understood → (3) Trust → (4) See the help → (5) Next step.**

| Page | Primary audience question answered | Colour system | Journey emphasis | Sections in this stage |
|---|---|---|---|---|
| `index.html` | Who is this for? / Why Teresha? | All three navigational colours introduced, gold restrained | Full 1→5 arc | Hero, Authority/trust strip, 3 pathways, Corporate recognition, Organisational topics, Corporate proof, Why Teresha, S.A.F.E.™, Private Coaching preview, Media & Speaking preview, REAL-ationship Talk, Free resource, Final CTA |
| `organisations.html` | Can Teresha help my organisation? | Corporate Slate | 1→5 for HR/L&D/leadership visitors | Hero shell, outcomes-for-organisations shell, credibility shell, CTA shell |
| `private-coaching.html` | Can Teresha help me personally? | Relationship Berry | 1→5 for private-client visitors | Hero shell, outcomes-for-individuals shell, S.A.F.E.™ reference shell, CTA shell |
| `media-speaking.html` | Why Teresha (authority/media proof)? | Emotional Well-being Forest + Gold accents | 3→5 (trust-forward) | Hero shell, media logos shell, podcast shell, speaking shell, CTA shell |
| `about.html` | Why Teresha? | Warm Walnut Brown neutral base | 2→3 (understanding + trust) | Hero/story shell, credentials shell, philosophy shell |
| `news.html` | Why Teresha (proof via media presence)? | Neutral base | 3 | Listing shell driven by `data/news.json` |
| `resources.html` | What should I do next (low-commitment)? | Neutral base | 4→5 | Listing shell driven by `data/resources.json` |
| `contact.html` | What should I do next? | Neutral base | 5 | Contact/next-step shell |
| `privacy.html` / `terms.html` | — | Neutral base | — | Legal text shells |
| `404.html` | — | Neutral base | — | Recovery shell (links back into navigation) |

## Testimonials

No standalone testimonials page exists or is planned. `data/testimonials.json` holds structured, categorised placeholder entries (tagged by context: organisations / private-coaching / media) so a later stage can place testimonial content contextually within the relevant pages above.

## Data files

- `data/news.json` — structured list for the News page and homepage media mentions; currently seeded only with `TODO` entries plus the confirmed media outlet names from `docs/approved-facts.md` (no invented headlines, dates, or links).
- `data/resources.json` — structured list for the Resources page; currently `TODO` placeholders only (no resource exists yet to reference).
- `data/testimonials.json` — structured, categorised placeholder entries; no real testimonial text is fabricated.
