# Project Brief Summary — Teresha Young 2026 Prototype

This is a working summary of the brief supplied for the 2026 website prototype, kept in the repository so architecture and content decisions can be traced back to it. It is a summary for internal reference; the authoritative source is the original brief provided by the client.

## Repositioning

- **From (2016):** Relationship Coach who also does speaking, coaching and corporate training.
- **To (2026):** Relationship & Emotional Well-being Expert — trusted by organisations, featured across the media, and working with private clients.
- **Priority pathway:** 1. Organisations → 2. Private clients → 3. Media & speaking.
- The homepage must communicate this evolution within roughly the first 30 seconds of a visit.

## Questions the site must answer

1. Who is this for?
2. Can Teresha help me?
3. Why Teresha?
4. What should I do next?

## Customer journey (every page)

1. I recognise myself / our situation
2. Teresha understands this
3. I trust her expertise
4. I can see how she can help
5. I know what to do next

## Brand personality

**Must feel:** warm, premium, calm, human, trustworthy, grounded, professional, thought-provoking, elegant, spacious, editorial, timeless, confident, sophisticated.

**Must not feel:** loud, aggressively sales-driven, cold, generic corporate, pushy, gimmicky, like a SaaS landing page, over-decorated.

**Protect at all costs:** Teresha's authentic writing voice, warmth, integrity, humanity, reflective communication, relationship-first philosophy. No forceful conversion language.

## Design language

- Logo geometry: three interlocking circles (connection, overlap, relationships, balance, belonging) — used subtly as inspiration for section graphics, image framing, dividers, testimonial treatments, CTA panels, background motifs. Not reproduced literally and repeatedly across the site; not overused.
- Conceptual inspiration (workflow only, not visual cloning) from the Alexis King website: strong information hierarchy, immediate positioning, clear pathways, credibility near the top, contextual proof, reusable sections, strong responsive behaviour. Teresha's site must read calmer, more editorial, more elegant, and less visually loud than that reference.
- Strategic principle from high-performing speaker/expert sites: authority and audience relevance appear early; services are framed around visitor outcomes, not just descriptions of the expert.
- No copied wording, layout, or proprietary design from any other website.

## Positioning facts

See `docs/approved-facts.md` for the full, controlled list. Nothing beyond that list may appear as a website claim.

## Signature framework

S.A.F.E.™ — Secure, Aligned, Fulfilled, Empowered. Held in the architecture; final prominence is an open decision (`docs/open-decisions.md`).

## Personal information rule

No content concerning Teresha's daughter, her disability/nonverbal status, or Teresha's family circumstances. These are project-delivery context only.

## Site architecture

Primary pages: `index.html`, `about.html`, `organisations.html`, `private-coaching.html`, `media-speaking.html`, `news.html`, `resources.html`, `contact.html`.
Supporting pages: `privacy.html`, `terms.html`, `404.html`.
No standalone testimonials page — testimonials are categorised and placed contextually within relevant pages in a later stage.

## Navigation

Home · For Organisations · Private Coaching · Media & Speaking · About · Resources · News · Contact
Header CTA: **Start a conversation**

## Design system

- Palette: Warm Walnut Brown `#7B523D`, Gold `#C9AA7D`, Dark Gold `#BA8F5D`, Relationship Berry `#A60525`, Emotional Well-being Forest `#253D39`, Corporate Slate `#4D556F`, White `#FFFFFF`.
- The three supporting colours are navigational, not decorative: Corporate = Slate, Relationships/private coaching = Berry, Emotional well-being = Forest.
- Gold is intentional and restrained; not overused.
- Typography: an elegant editorial serif for major headings (Cormorant Garamond) and a highly readable modern sans-serif for body/UI (Manrope). No more than two major font families.

## Technical direction

- Semantic HTML5, CSS, lightweight vanilla JavaScript.
- No React/Vue/Next.js/large frameworks.
- Static prototype for Cloudflare Pages review before a later WordPress implementation.
- Reusable CSS/JS patterns without unnecessary complexity.

## Responsive targets

1440px desktop, 1024px laptop/tablet landscape, 768px tablet, 430px / 390px / 360px mobile. No horizontal overflow, accessible keyboard focus, good line lengths, responsive typography and imagery, adequate touch targets, `prefers-reduced-motion` support.

## Content discipline

Never fabricate testimonials, statistics, client results, programme lengths, prices, links, qualifications, media appearances, awards, corporate clients, endorsements, podcast metrics, or personal stories. Missing approved content is marked with a visible `TODO` rather than invented.

## Foundation-stage scope (this PR)

1. Asset audit
2. Project architecture
3. Global visual system
4. Global header/navigation
5. Global footer
6. Responsive page shells
7. Basic accessibility foundations
8. Homepage structural skeleton only

Full page content, homepage section design, and copywriting are explicitly out of scope for this stage.
