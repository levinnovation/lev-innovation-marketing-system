# Agentyx Brand Guidelines & Design System

Official guidelines for creating consistent B2B marketing materials, videos, presentations, documents, and social media posts for **Agentyx** (by Lev Innovation).

---

## 1. Brand Feel & Personality

Agentyx is a light, precise operating system for AI employees. The branding avoids chaotic, over-neon, generic AI cliches. Instead, it maintains a technical, clean, and highly executive presentation.

*   **Precise & Technical**: High-contrast, clean alignments, and detailed system info.
*   **Calm & Executive**: Restrained color usage, generous white space, and low-drama presentation.
*   **System-Aware**: Visual structures that represent integrations (checklists, nodes, connectors).
*   **Measurable**: Prominent presentation of KPIs, metrics, and quantitative progress.

---

## 2. Design Tokens

The source of truth for these tokens is [colors_and_type.css](file:///Users/jaya/projects/agentyx-hyperframes-video/brand-system/colors_and_type.css).

### Colors (Dark Mode Default)
*   **Primary Canvas (`--ax-bg`)**: `#070b13` (Deep blue-black)
*   **Raised Canvas (`--ax-bg-elevated`)**: `#0c1220` (Darker navy for sections)
*   **Surfaces/Cards (`--ax-surface`)**: `#111827` (Card panels)
*   **Subhead Text (`--ax-fg-1`)**: `#e2e8f0` (High contrast text)
*   **Default Body Text (`--ax-fg-muted`)**: `#94a3b8` (Slate-400)
*   **Primary Brand Blue (`--ax-brand`)**: `#2563eb` (Main CTA, buttons)
*   **Active Cyan Accent (`--ax-cyan`)**: `#22d3ee` (Glows, connectors, focus rings)
*   **Success Green (`--ax-success`)**: `#22d3ee` (Completed states)

### Colors (Light Mode - Used inside Dashboard/App Mockups)
*   **Primary Canvas (`--ax-bg`)**: `#f8fafc` (Off-white slate)
*   **Surfaces/Cards (`--ax-surface`)**: `#ffffff` (White dashboard cards)
*   **Borders (`--ax-border`)**: `#e2e8f0` (Light gray borders)
*   **Text (`--ax-fg`)**: `#0f172a` (Slate-900)

### Typography
*   **Headings / Display**: `Plus Jakarta Sans` (Weights 600–800)
*   **Body / UI Text**: `Inter` (Weights 300–700)
*   **Eyebrows, Technical Codes, KPIs**: `JetBrains Mono` (Weights 400–500)

### Spacing & Radii
*   **Gaps**: `4px` · `8px` · `12px` · `16px` · `20px` · `24px` · `32px` · `48px` · `64px` · `96px`
*   **Default Button Radius (`--ax-radius-md`)**: `8px`
*   **Default Card Radius (`--ax-radius-lg`)**: `12px`
*   **Large Panels / CTA Card (`--ax-radius-2xl`)**: `24px`

---

## 3. Motion & Interaction Principles

When creating animated or interactive components (such as in videos, web slides, or HTML pages):

*   **Draw Connections**: Animate paths drawing between system nodes (e.g. SVG path stroke animations).
*   **Quiet Entrances**: Avoid bouncy or rubber-band animations. Use `power3.out` or `expo.out` for crisp reveals.
*   **Ambient Drift**: Slow, subtle linear translations (e.g. `sine.inOut`) for screenshots or background fields.
*   **Interactive Glows**: Limit glows to active states, primary CTA buttons, and status indicators.

---

## 4. Multi-Format Guidelines

### Video Graphics (`/videos`)
*   Maintain a 1920x1080 resolution.
*   Must use the official logo `agentyx-logo.png` in the opening (Beat 1) and closing (Beat 5) scenes.
*   Dashboard mockups should use light-themed HTML scopes (`.ax-light`) to mimic the actual Agentyx product interface.

### Presentations & Slides (`/presentations`)
*   Standard 16:9 ratio using dark-first headers and slides.
*   Use radial gradients (`rgba(37,99,235,0.18)`) centered on title slides.
*   Integrations should be represented with rounded, glowing system chips.

### Documents & Reports (`/documents`)
*   Designed primarily for PDF generation or printing (A4 or Letter size).
*   Use light theme styles as default for high-contrast reading.
*   Keep page numbers, headers, and footers aligned to a strict layout grid.

### Social Media & Banners (`/posts`)
*   Focus on large, legible display fonts (Plus Jakarta Sans) combined with high-impact key phrases.
*   Surrounds text with subtle cyan curves or grids to anchor the technical feeling.
