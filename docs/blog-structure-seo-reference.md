# Blog Post Structure & SEO Reference
**Source analyzed:** talent-loop.org/blog/working-at-amazon-us-2026
**Purpose:** Baseline structural/SEO template for rewriting SunCostGuide blog posts as 6,000+ word long-form content. Design/color intentionally excluded — SunCostGuide's existing site styling stays as-is.

---

## 1. Meta & Head Elements

- `canonical` URL tag
- `meta-description` (~155 chars, includes primary keyword + year)
- `meta-keywords` (primary + 5-7 secondary long-tail variants)
- Open Graph tags: `og:description`, `og:image`, `og:image:alt` (descriptive, keyword-inclusive alt text), `og:site_name`, `og:title`, `og:type=article`, `og:url`
- Twitter Card tags: `twitter:card=summary_large_image`, `twitter:description`, `twitter:image`, `twitter:site`, `twitter:title`
- `meta-viewport`
- `<title>` tag distinct from H1 (title tag more keyword-dense, H1 more human-readable)

**Pattern to replicate for SunCostGuide:** every post needs a unique OG image, unique meta description referencing the specific topic + "2026," and keyword variants covering both short-tail ("solar panel cost") and long-tail ("solar panel cost by state 2026") searches.

---

## 2. Breadcrumb Navigation
Format: `Home > [Category] > [Post Title]`
Rendered as clickable text links directly above the category eyebrow tag.

---

## 3. Above-the-Title Elements

- **Category eyebrow tag** (e.g. "Company Deep Dive") — small label above the H1, signals content type at a glance
- **H1** — different phrasing from the meta title, more narrative/human ("What Nobody Tells You Before You Apply" vs. the SEO-optimized meta title)
- **Subhead/dek** — one-sentence summary directly under H1, sets expectations for the whole piece
- **Byline row**: "Updated [Month Year] · [X] min read · By [Author Name, linked to author bio]"
- **Author credibility line**: years of experience + specialty, linked to full profile

---

## 4. Featured Image Block
- Large hero image directly under the byline
- Descriptive caption underneath (not just decorative — caption adds context/keywords)

---

## 5. Author Bio Card (inline, near top)
- Author photo
- Name (linked)
- Title/role
- One-line credibility statement
- Link to full profile

---

## 6. Affiliate CTA Block (early placement)
- Appears **before the table of contents**, right after the intro
- Labeled eyebrow ("Ready to Explore Roles?")
- Bold CTA headline
- One or two sentences of context
- Button-style link
- **Immediately followed by a visible affiliate disclosure line** in italics — placed right under the CTA, not buried in the footer

**For SunCostGuide:** this is the exact pattern to use for "Get matched with solar installers" — placed early, disclosed immediately, not hidden.

---

## 7. Table of Contents
- Labeled with an emoji/icon + "What's in This Guide"
- Numbered list, 6-8 entries
- Each entry is an anchor link (`#section-id`) jumping to that section
- Final entries are always "Frequently Asked Questions" and a closing/summary section

---

## 8. Body Structure (H2-driven sections)

Observed section pattern for a "company deep dive" — the equivalent structure for a solar cost/guide post would swap in topic-relevant sections but keep the *shape*:

1. **Origin/context section** — background storytelling with a stat callout row (see below)
2. **Comparison/breakdown section** — uses a mix of short cards and a scannable structure (icon + label + 1-2 sentence description) repeated for each sub-topic
3. **Framework/rules section** — explains the "system" (Leadership Principles → for SunCostGuide this maps to e.g. "how solar incentives actually stack")
4. **Data/numbers section** — includes a **sourced comparison table** (see below)
5. **Process/step-by-step section** — numbered stages, bolded stage names, each with a time estimate
6. **Self-assessment section** — two-column "You'll do well if / Think carefully if" bullet lists — a decision-aid, not just information
7. **FAQ section** — expandable, schema-eligible (see below)
8. **Closing thoughts section** — reflective wrap-up, reinforces the honest/non-salesy positioning
9. **Final CTA section** — repeats the affiliate CTA in a different format at the very end

---

## 9. Stat Callout Row
A horizontal row of 3-5 large numbers with short labels underneath (e.g. "1.5M+ Employees," "$638B Annual Revenue"). Appears once, early, right after the origin-story section — gives skimmers something concrete fast.

**For SunCostGuide:** e.g. "$2.50-3.30/W Avg. Cost · 6-10 yrs Payback · 0% Federal Credit (Purchase) · 30% Federal Credit (Lease/PPA)"

---

## 10. Embedded Video Blocks
- Each major H2 section includes one embedded video (YouTube)
- Custom label above each: bold title + one-line description of what the video covers
- "Click to play" affordance text
- Caption underneath reinforcing why it's worth watching

**Note:** optional for SunCostGuide depending on whether video content is available/relevant — not essential to the SEO value, more of an engagement/dwell-time device.

---

## 11. Data Table
- Preceded by a one-line source citation ("Sources: Levels.fyi, Glassdoor, public disclosures")
- Clean 2-column or multi-column structure
- Every row is a distinct, comparable data point (role/comp; for SunCostGuide: state/cost-per-watt, or installer/rating)

---

## 12. Pull Quote / Callout Block
- One external, attributed quote mid-article (`> "quote" — Source Name, credential`)
- Breaks up long text sections visually and adds a credibility signal from outside the site

---

## 13. Internal Linking Pattern
- **Contextual inline links** within body paragraphs (2-3 per post) to related posts — not just "read more," but woven into a sentence
- **"More from the blog" module** at the very end — 6-8 related post cards with category tags, distinct from the main content

---

## 14. FAQ Section
- 5 questions, each formatted as an expandable accordion (`+` icon)
- Answers are 2-4 sentences, self-contained (must make sense read in isolation, since this is what Google pulls into FAQ rich snippets)
- Questions phrased exactly as a searcher would type them ("What is it like to work at Amazon US in 2026?" not "Amazon Culture Overview")
- **This section needs matching FAQPage schema (JSON-LD)** to be eligible for the rich snippet in search results

---

## 15. Closing CTA + Disclosure Footer
- Final CTA block repeats the affiliate offer
- Full affiliate disclosure statement repeated in the page footer (not just linked) — belt-and-suspenders compliance approach

---

## 16. Schema Markup (implied by structure, confirm in code)
Based on the visible structure, this post is almost certainly running:
- `Article` or `BlogPosting` schema (headline, image, author, datePublished/dateModified)
- `BreadcrumbList` schema
- `FAQPage` schema
- Possibly `VideoObject` schema for each embedded video

---

## Word Count Target: 6,000+ Words

The analyzed sample post is genuinely long-form but **appears to land in the 2,200–2,800 word range** based on visible body text — well short of a 6,000-word target. To hit 6,000+ words per SunCostGuide post without padding, expand depth within the same structural shape:

- Turn each single-paragraph sub-section into 2-3 paragraphs with specifics (examples, edge cases, regional variation)
- Expand the data table into a full state-by-state or category-by-category breakdown instead of a short sample table (this alone can add 800-1,500 words for a solar cost/incentive post)
- Add a dedicated "common mistakes" or "myths" section if not already covered elsewhere on the site
- Expand the FAQ from 5 to 8-10 questions
- Add a "how we researched this" or methodology section (reinforces the "honest, no sales pitch" positioning while adding legitimate word count)
- Expand the step-by-step/process section with a time estimate AND a "what can go wrong at this stage" note per step

---

## Checklist Summary (use per post)

- [ ] Unique meta title, description, keywords, OG/Twitter tags
- [ ] Breadcrumb
- [ ] Category eyebrow tag
- [ ] H1 distinct from meta title
- [ ] Subhead/dek
- [ ] Byline: updated date, read time, author (linked)
- [ ] Featured image + caption
- [ ] Author bio card
- [ ] Early affiliate CTA block + immediate disclosure line
- [ ] Table of Contents (anchor-linked)
- [ ] Stat callout row
- [ ] 6-9 H2 body sections matching the structural shape above
- [ ] At least one sourced data table
- [ ] At least one pull quote/callout
- [ ] 2-3 contextual internal links
- [ ] Self-assessment or decision-aid section (fits well/won't fit well)
- [ ] FAQ section (5-10 Qs, accordion, schema-ready)
- [ ] Closing reflective section
- [ ] Final CTA block
- [ ] "More from the blog" related-posts module
- [ ] Full disclosure statement in footer
- [ ] Article + BreadcrumbList + FAQPage schema confirmed in code
- [ ] Word count: 6,000+ words
