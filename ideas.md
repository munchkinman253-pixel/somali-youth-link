# Somali Youth Link — Website Design Brainstorm

## Three Stylistic Approaches

### 1. Civic Trust
A grounded, institutional aesthetic inspired by credible community-safety and civic organizations — confident deep blues, editorial structure, documentary-style photography that conveys real presence in the neighborhood.
**Probability: 0.06**

### 2. Warm Community Weave
A softer, human-centered direction leaning on rounded warmth, layered textures, and organic shapes to emphasize family, belonging, and care.
**Probability: 0.03**

### 3. Bold Youth Momentum
An energetic, motion-forward style with strong diagonal cuts, dynamic type, and vibrant accents to project youth energy and forward drive.
**Probability: 0.04**

---

## CHOSEN APPROACH: Civic Trust

**Design Movement**: Modern civic/editorial design — the visual language of trustworthy public-serving institutions (think community foundations, civic nonprofits, public-safety partnerships), blended with contemporary web craft: strong typographic hierarchy, generous whitespace, and documentary photography.

**Core Principles**:
1. **Credibility first** — every layout choice signals a real, established, trustworthy organization. Clean structure, consistent spacing, no gimmicks.
2. **Human presence** — real community photography carries the emotional weight; the design frames it respectfully rather than competing with it.
3. **Calm confidence** — deep blues and abundant negative space create a sense of stability and safety, mirroring the peace-ambassador mission.
4. **Interactive but purposeful** — animations and interactivity guide attention and reveal content gracefully; never decorative noise.

**Color Philosophy**: The brand lion is dark navy on a light-blue shield — this duality is the palette. Deep navy (`#1E2A6B`-ish) is authority, trust, and safety. Light/sky blue (`#4FA3E0`-ish) is openness, youth, and hope. A single warm accent (a controlled magenta-red drawn from the logo's ribbon) is reserved strictly for primary calls to action like Donate, so giving always stands out.

**Layout Paradigm**: Editorial asymmetry. Instead of centered stacked blocks, use offset two-column compositions, overlapping cards that break section boundaries, a sticky side rail on longer pages, and full-bleed image bands that alternate with contained editorial columns. Section headers use a small eyebrow label + large statement heading (mirroring the existing site's "###### eyebrow / ## heading" rhythm).

**Signature Elements**:
1. A recurring "shield/chevron" motif echoing the logo's shield base — used as section dividers and card corner accents.
2. Deep-navy statement panels with a thin light-blue rule and eyebrow labels.
3. A subtle animated "star" spark (from the logo star) used sparingly on hover/CTAs.

**Interaction Philosophy**: Content reveals on scroll with restrained fade/slide (short distance, ~500ms, ease-out). Hover states deepen or lift rather than bounce. The gallery uses a lightbox. Events use filterable tabs (Upcoming / Past). Counters animate once on scroll. Everything feels composed, not busy.

**Animation**: Framer Motion. Scroll-reveal with `whileInView`, staggered children for card grids (~80ms stagger), hero elements with a gentle entrance, animated impact counters, smooth lightbox transitions. Respect reduced-motion.

**Typography System**:
- Headings: **Sora** (geometric, modern, confident) — used for statement headings and the wordmark.
- Body: **Source Sans 3** (highly readable, civic, humanist) — for paragraphs and UI.
- Eyebrow labels: Source Sans 3, uppercase, letter-spaced, small, in light blue.
- Clear hierarchy: hero display ~clamp(2.5–4rem), section headings ~2–2.75rem, generous line-height on body.

**Brand Essence**: Somali Youth Link is a Minneapolis community-safety nonprofit where trained peace ambassadors and mentors keep youth safe and families supported. *Trusted. Grounded. Hopeful.*

**Brand Voice**: Warm, direct, community-rooted, never bureaucratic. Speaks with quiet confidence and invites participation.
- Example headline: "Showing up for youth, one block at a time."
- Example CTA: "Stand with our peace ambassadors."

**Wordmark & Logo**: Use the provided lion+shield logo as the primary mark in the header and footer. Pair it with a "SOMALI YOUTH LINK" wordmark set in Sora with an "S.Y.L." mono-abbreviation treatment where space is tight. Favicon = the lion mark.

**Signature Brand Color**: Deep navy `#1E2A6B` (SYL Navy) as the ownable anchor, with sky blue `#4FA3E0` (SYL Sky) as its inseparable partner — exactly the two blues the user requested.
