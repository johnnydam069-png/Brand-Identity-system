# GitHub Brand Identity System

A comprehensive brand identity guide for GitHub — covering logo usage, color palette, typography, voice, and application across digital and print touchpoints.

---

## Table of Contents

- [Overview](#overview)
- [Logo](#logo)
- [Color Palette](#color-palette)
- [Typography](#typography)
- [Iconography](#iconography)
- [Voice & Tone](#voice--tone)
- [UI Components](#ui-components)
- [Application Examples](#application-examples)
- [Do's and Don'ts](#dos-and-donts)
- [Assets](#assets)
- [Contributing](#contributing)

---

## Overview

The GitHub brand is built around openness, collaboration, and developer trust. Every design decision — from the Octocat to the typeface — reflects a community-first philosophy. This guide ensures consistency across all GitHub surfaces: product, marketing, events, and merchandise.

**Brand Personality:** Approachable · Technical · Honest · Inclusive · Playful (when appropriate)

---

## Logo

### Primary Logo

The GitHub logo consists of the GitHub mark (the Invertocat) paired with the wordmark "GitHub" set in a custom typeface.

```
/assets/logo/
├── github-logo-primary.svg
├── github-logo-primary.png
├── github-mark.svg
├── github-mark.png
└── github-wordmark.svg
```

### Clear Space

Always maintain a minimum clear space equal to the height of the "G" in "GitHub" on all sides of the logo.

### Minimum Size

| Format | Minimum Width |
|--------|--------------|
| Digital | 80px |
| Print | 25mm |

### Logo Variants

| Variant | Use Case |
|---------|----------|
| Primary (dark on light) | Default; use on white or light backgrounds |
| Reversed (light on dark) | Use on dark or photographic backgrounds |
| Monochrome black | Single-color print applications |
| Monochrome white | Dark single-color backgrounds |

### The Octocat

The Octocat is GitHub's mascot — a distinct brand asset separate from the logo. It may be used in swag, illustrations, and community content, but should never replace the official logo in formal contexts.

---

## Color Palette

### Primary Colors

| Name | Hex | RGB | Use |
|------|-----|-----|-----|
| GitHub Dark | `#24292F` | 36, 41, 47 | Primary text, logo on light |
| GitHub White | `#FFFFFF` | 255, 255, 255 | Backgrounds, reversed logo |
| GitHub Blue | `#0969DA` | 9, 105, 218 | Links, CTAs, interactive elements |

### Extended Palette

| Name | Hex | Use |
|------|-----|-----|
| Open Green | `#1A7F37` | Success states, open issues/PRs |
| Merged Purple | `#8250DF` | Merged pull requests |
| Closed Red | `#CF222E` | Closed/error states |
| Neutral Gray | `#57606A` | Secondary text, metadata |
| Border Gray | `#D0D7DE` | Dividers, input borders |
| Canvas Default | `#F6F8FA` | Page backgrounds, code surfaces |

### Dark Mode Colors

| Name | Hex | Use |
|------|-----|-----|
| Dark Canvas | `#0D1117` | Page background |
| Dark Surface | `#161B22` | Card and panel backgrounds |
| Dark Border | `#30363D` | Borders and dividers |
| Dark Text Primary | `#E6EDF3` | Body text |
| Dark Text Secondary | `#8B949E` | Metadata, placeholders |

### Color Usage Rules

- Never use brand colors at reduced opacity as a substitute for a palette color.
- Blue (`#0969DA`) is reserved for interactive/actionable elements — do not use it for decorative purposes.
- Ensure all text meets WCAG AA contrast minimums (4.5:1 for body text, 3:1 for large text).

---

## Typography

### Typefaces

| Role | Typeface | Fallback |
|------|----------|---------|
| UI & Body | **Inter** | -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica |
| Code & Monospace | **JetBrains Mono** | "SFMono-Regular", Consolas, "Liberation Mono", Menlo |
| Display (Marketing) | **Mona Sans** | Inter, sans-serif |

> Mona Sans is GitHub's custom variable font, available via [github.com/github/mona-sans](https://github.com/github/mona-sans).

### Type Scale

| Level | Size | Weight | Line Height | Use |
|-------|------|--------|-------------|-----|
| Display XL | 48px | 800 | 1.1 | Hero headlines |
| Display L | 36px | 700 | 1.2 | Section titles |
| Heading 1 | 28px | 600 | 1.3 | Page headings |
| Heading 2 | 22px | 600 | 1.35 | Sub-sections |
| Heading 3 | 18px | 600 | 1.4 | Component headings |
| Body | 16px | 400 | 1.6 | Paragraphs |
| Small | 14px | 400 | 1.5 | Metadata, labels |
| Micro | 12px | 500 | 1.4 | Badges, timestamps |

### Typography Rules

- Use sentence case for UI labels and headlines (not Title Case or ALL CAPS).
- Never kern or stretch typefaces.
- Code snippets always use the monospace stack.

---

## Iconography

GitHub uses the [Octicons](https://primer.style/foundations/icons) icon library — an open-source set designed specifically for GitHub's UI.

### Usage

```bash
npm install @primer/octicons
```

```jsx
import { RepoIcon } from "@primer/octicons-react"

<RepoIcon size={16} />
```

### Icon Sizing

| Size | Use |
|------|-----|
| 12px | Inline with micro text |
| 16px | Default UI icons |
| 24px | Feature or section icons |
| 32px+ | Illustration-level icons |

### Rules

- Icons should always match the weight of the text they accompany.
- Do not recolor Octicons outside the defined palette.
- Never use icons as the sole means of communicating status — always pair with a text label.

---

## Voice & Tone

### Brand Voice

GitHub speaks like a knowledgeable collaborator — not a corporation. The voice is direct, warm, and technically credible.

| Trait | Means | Avoid |
|-------|-------|-------|
| Direct | Say what you mean. No fluff. | Passive voice, jargon |
| Warm | Human and encouraging | Cold, robotic phrasing |
| Precise | Technically accurate | Vague or hand-wavy |
| Inclusive | Welcoming to all levels | Condescending or elitist |

### Tone by Context

- **Error messages:** Calm and helpful. Explain what happened and what to do next.
- **Success states:** Brief and positive. Don't over-celebrate.
- **Onboarding:** Encouraging, step-by-step, never overwhelming.
- **Marketing copy:** Energetic but grounded — lead with value, not superlatives.

---

## UI Components

GitHub's Primer Design System is the canonical source for UI components. See [primer.style](https://primer.style) for the full component library.

### Core Component Categories

- **Buttons:** Primary, secondary, danger, invisible
- **Forms:** Inputs, selects, checkboxes, radio groups
- **Navigation:** Header, sidebar, breadcrumbs, tabs
- **Feedback:** Alerts, toasts, empty states, skeletons
- **Data display:** Labels, badges, timelines, diffs

### Design Tokens

All spacing, color, and sizing values are managed as design tokens in Primer. Use tokens rather than hardcoded values:

```css
/* Example token usage */
color: var(--color-fg-default);
background: var(--color-canvas-subtle);
border: 1px solid var(--color-border-default);
border-radius: var(--borderRadius-medium);
```

---

## Application Examples

### Social Media

- Always use the primary logo on a clean white or dark background.
- Profile avatar: Invertocat mark only, on GitHub Dark background.
- Cover images: Use Canvas Default (`#F6F8FA`) as background; apply grid or dot pattern for depth.

### Print & Swag

- Minimum logo size: 25mm wide.
- Preferred print colors: Pantone 432 C (GitHub Dark), Pantone 2728 C (GitHub Blue).
- T-shirts and hoodies: Invertocat mark preferred over full wordmark.

### Email

- Header: GitHub Dark background with reversed white logo.
- Body: White background, GitHub Blue for CTAs only.
- Footer: Canvas Default (`#F6F8FA`) with muted secondary text.

### Event & Conference

- Booth signage: Full bleed dark background, reversed logo, large Octocat optional.
- Name badges: GitHub mark + wordmark, full color.
- Swag bags: Invertocat mark, single color.

---

## Do's and Don'ts

### Logo

| Do | Don't |
|----|-------|
| Use official SVG files from this repo | Recreate the logo from scratch |
| Maintain required clear space | Place the logo on a busy or low-contrast background |
| Use approved color variants | Recolor the logo outside approved palette |
| Scale proportionally | Stretch or distort the logo |

### Color

| Do | Don't |
|----|-------|
| Use tokens from Primer for UI | Use brand blue for decorative elements |
| Pair colors with sufficient contrast | Use reduced-opacity swaps in place of palette colors |
| Use dark mode tokens in dark contexts | Hardcode hex values in UI components |

### Typography

| Do | Don't |
|----|-------|
| Use Inter for UI and body copy | Use system fonts in designed marketing contexts |
| Use sentence case consistently | Mix case styles within a single surface |
| Use JetBrains Mono for code | Use a proportional font for code |

---

## Assets

All brand assets are located in the `/assets` directory:

```
/assets
├── logo/
│   ├── svg/
│   ├── png/
│   └── eps/
├── fonts/
│   ├── mona-sans/
│   └── jetbrains-mono/
├── icons/
│   └── octicons/
├── templates/
│   ├── social/
│   ├── email/
│   └── presentation/
└── octocat/
    ├── standard/
    └── custom-variants/
```

> For access to proprietary assets (Mona Sans, EPS files, official Octocat artwork), internal team members should request access via the Brand team's internal Slack channel.

---

## Contributing

This brand guide is maintained by the GitHub Design team.

- **Found an inconsistency?** Open an issue with the label `brand-question`.
- **Requesting a new asset?** Use the asset request template.
- **Proposing a change?** Open a pull request and tag `@github/design` for review.

All proposed changes to core brand elements (logo, color, type) require approval from the Brand Design Lead before merging.

---

*Last updated: April 2026 · Maintained by GitHub Design*
