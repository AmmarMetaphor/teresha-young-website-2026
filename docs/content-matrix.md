# Content Matrix

Maps each page to its role in the customer journey, its primary audience question, its colour system, and the sections currently present.

**Status:** the content-architecture stage reworked navigation globally and rebuilt substantial sections of the Homepage, Organisations, Private Coaching, Media & Speaking, News, Resources and About pages. `contact.html`, the footer, `privacy.html`, `terms.html` and both native resource articles were deliberately left unchanged apart from the shared navigation block.

Journey stages referenced below: **(1) Recognise → (2) Understood → (3) Trust → (4) See the help → (5) Next step.**

| Page | Primary audience question answered | Colour system | Journey emphasis | Sections in this stage |
|---|---|---|---|---|
| `index.html` | Who is this for? / Why Teresha? | All three navigational colours introduced, gold kept decorative-only (never as small text, per contrast fix) | Full 1→5 arc | Hero (single blended photographic composition, `private-coaching-hero.jpg`), Awards & Recognition ribbon, Recognised Across the Media ribbon, S.A.F.E.™ infographic, Why Teresha, REAL-ationship Talk, Resources preview, Final CTA |
| `organisations.html` | Can Teresha help my organisation? | Corporate Slate identifying, Walnut/Gold carrying the warmth | 1→5 for HR/L&D/leadership visitors | Hero, "What healthier working relationships can make possible" (11-topic index), outcomes infographic (6 connected nodes), Recognised Across the Media ribbon, proof/testimonial carousel, credibility, CTA |
| `private-coaching.html` | Can Teresha help me personally? | Relationship Berry | 1→5 for private-client visitors | Hero (early client excerpt removed this stage), "What private coaching makes space for", pull-quote, S.A.F.E.™ infographic (shared component), "What can begin to feel different" testimonials, CTA |
| `media-speaking.html` | Why Teresha (authority/media proof)? | Walnut/Gold photographic hero, Forest + Gold accents below | 3→5 (trust-forward) | Photographic hero (`teresha-young-image-5-hero.jpg`), category overview, speaking, Recognised Across the Media ribbon, horizontal visual content rail (images only), podcast section, CTA |
| `about.html` | Why Teresha? | Warm Walnut Brown neutral base | 2→3 (understanding + trust) | Single-image hero (`teresha-young-image-4-hero.jpg`; collage and authority ribbon both removed), credentials, philosophy, My Story (first-person excerpt plus "Read the full story" disclosure) |
| `news.html` | Why Teresha (proof via media presence)? | Neutral base | 3 | Light editorial hero plus a 9-card responsive news grid, static HTML. **Appearances, interviews, speaking, collaborations and milestones only — no eBooks, no resource downloads, no gate forms.** |
| `resources.html` | What should I do next (low-commitment)? | Neutral base | 4→5 | Hero, **Section 1: Free eBooks** (four gated covers), **Section 2: Articles & guides** (the two native articles, inline-gated). The only page where the eBooks appear. |
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

---

## Navigation structure (content architecture stage)

The primary navigation was flattened from eight top-level items to six, with two
dropdown parents. For Organisations, Private Coaching and News all keep their
pages; they simply moved out of the top level.

```
Home
Work With Me ▼
  ├── For Organisations      → organisations.html
  └── Private Coaching       → private-coaching.html
Media & Speaking ▼
  ├── Media & Speaking       → media-speaking.html
  └── News                   → news.html
About
Resources
Contact
[Start a conversation]  → contact.html
```

Each dropdown parent is a real `<button aria-expanded>`, so it opens on click,
Enter and Space; ArrowDown/ArrowUp move through the menu; Escape closes it and
returns focus to the trigger; Tab out closes it. Hover is layered on top on wide
screens only and is never the sole route in. A menu opened by an explicit action
stays pinned open until the visitor clicks away or presses Escape, so the click
that follows a hover-open does not immediately close it. When the current page
lives inside a dropdown, the collapsed parent carries an active state. Below
1180px the same triggers become accordion headers and the menus render in flow.

The **footer link list was intentionally left flat** — it is outside this stage's
change scope. See `docs/open-decisions.md` item 24.

## Reusable components introduced this stage

| Component | Markup hook | Used on |
|---|---|---|
| S.A.F.E.™ infographic | `.safe-web` | Homepage, Private Coaching (identical markup, copy, geometry, colours and responsive behaviour) |
| Outcomes infographic | `.outcome-web` | Organisations (6 connected nodes) |
| Moving ribbon + pause control | `.ribbon[data-ribbon]` wrapping `.marquee` | Media logos on Homepage, Organisations, Media & Speaking; awards badges on Homepage (`.marquee--awards`) |
| Horizontal rail | `.rail[data-rail]` | Media & Speaking content rail (`data-rail-autoplay`), Organisations proof carousel (`.rail--proof`, no autoplay) |
| News card grid | `.news-grid` / `.news-card` | News only |
| eBook shelf | `.ebook-grid` / `.ebook-card` | Resources only |
| Resource gate (prototype) | `.gate-modal`, `.gate-inline`, `.gate-form` | Resources only |
| Disclosure | `[data-disclosure-trigger]` + panel | About (My Story) |

All ribbon movement is a single CSS `transform` animation per ribbon — there is no
JavaScript animation loop anywhere. The rails are native `overflow-x` scrollers,
so touch swipe, trackpad and keyboard scrolling work without JavaScript; the arrow
controls are an enhancement on top. Every component is readable and usable with
`assets/js/main.js` absent.

## News and Resources separation

These two pages carry deliberately non-overlapping content types:

- **News** — media appearances, interviews, speaking events, collaborations,
  podcast/news features, professional milestones. Nine cards. **No eBooks, no
  resource downloads, no gate forms, no `<form>` element at all.** Asserted by
  automated test.
- **Resources** — the only page carrying the four free eBooks, plus the two
  existing native articles. Both sections are gated by the prototype form.

## My Story

An explicit exception to the site's otherwise generalised voice: this is
Teresha's own account, so it is written in the first person. It sits after
Credentials and Philosophy so professional credibility still leads the page and
the personal account reads as a deeper dive rather than replacing the positioning.

The visible excerpt is written; **the full narrative is not present** because the
supplied source text was never provided. See `docs/open-decisions.md` item 15 —
this is the stage's one blocking content gap.

## Resource delivery status

Both resource gates are visual prototypes. No email is sent, no CRM, mailing
platform, database or API is connected, and nothing entered is transmitted,
stored or written to `localStorage`. See `docs/open-decisions.md` item 19 for the
verified detail and the production work still required.
