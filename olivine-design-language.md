# Olivine Design Language

This document defines the visual migration target for `06dms` so it aligns with the typography, tone, and interface behavior used in `03olivine.co.in`.

## Core Intent

Olivine should feel:

- premium, not flashy
- architectural, not generic SaaS
- editorial in headline treatment
- system-driven in labeling and UI structure
- calm, controlled, and enterprise-trustworthy

The visual identity is built on contrast between:

- serif display typography for prestige and narrative
- clean sans-serif typography for product clarity
- mono utility typography for metadata and system cues

## Font Roles

Use these font families consistently:

- `Cormorant Garamond`
  Use for hero headlines, section titles, brand moments, and select premium callouts.
- `Syne`
  Use for body copy, forms, tables, buttons, navigation, cards, and operational UI.
- `Syne Mono`
  Use for labels, badges, metadata, breadcrumbs, mini status tags, timestamps, and module identifiers.

## Typography System

### Display

- Hero serif XL: `clamp(36px, 5vw, 64px)`
- Display serif L: `clamp(28px, 3vw, 42px)`
- Display serif M: `24px` to `32px`
- Display line-height: `0.95` to `1.08`
- Display letter-spacing: `-0.02em` to `-0.06em`

### Product Headings

- Section title sans: `22px` to `28px`, `700`
- Card title sans: `18px` to `22px`, `700`
- Table/header label sans: `14px` to `16px`, `600`

### Body

- Primary body: `clamp(14px, 1.5vw, 16px)`
- Secondary body: `13px` to `14px`
- Long-form line-height: `1.6` to `1.8`
- Operational line-height: `1.45` to `1.6`

### Meta / Labels

- Mono micro label: `9px` to `11px`
- Mono label: `11px` to `13px`
- Uppercase preferred
- Letter-spacing: `0.08em` to `0.18em`

## Color Language

### Dark Core Palette

- `--ol-void: #07080a`
- `--ol-base: #0b0c0f`
- `--ol-surface: #0f1115`
- `--ol-surface-2: #14161c`
- `--ol-border: #1e2229`
- `--ol-text: #e8ecf2`
- `--ol-muted: #5a6278`
- `--ol-gold: #c8a95b`
- `--ol-gold-strong: #b89645`
- `--ol-sage: #a3b18a`
- `--ol-coral: #e87870`

### Light Support Palette

- `--ol-light-base: #f8f7f4`
- `--ol-light-surface: #f1efea`
- `--ol-light-border: #d6d3cd`
- `--ol-light-text: #1c1f26`
- `--ol-light-muted: #5a5f6a`

### Semantic UI Accents

- Hot: muted coral/red
- Warm: gold/amber
- Cold: sage/soft green
- Info/system: steel blue-gray

## Surface Rules

- Prefer layered surfaces over flat white admin blocks
- Use restrained borders before heavy shadows
- Radius should feel intentional and soft, usually `12px` to `20px`
- Shadows should be low-noise and deep, not blurred excessively
- Gold should be used as an accent, not as a large fill color

## Component Patterns

### Navigation

- dark anchor bar or dark rail
- serif brand name
- mono kicker or system label
- uppercase compact nav labels

### Cards

- quiet panel background
- 1px border
- subtle lift on hover
- serif optional for headline, sans for operational content

### Tables

- clean sans content
- mono or uppercase labels for micro columns when useful
- muted borders
- generous padding
- never dense by default

### Forms

- sans UI text
- mono overline label optional for grouped sections
- bordered controls
- soft fill or translucent surface treatment
- focus state should use gold or muted steel, not generic bright blue

### Badges

- mono or compact sans
- uppercase where status-like
- hot/warm/cold colors should be toned, not neon

## Layout Pattern

For `06dms`, retain the functional information architecture, but restyle it with Olivine language:

- sidebar = dark, structural, premium utility rail
- view header = calmer editorial/product hybrid
- CRM detail panels = quiet bordered surfaces
- dashboards = serif-led summaries + mono labels + sans body

## Migration Guidance For 06dms

Apply the design language in this order:

1. Replace generic admin font stacks with Olivine font roles.
2. Replace bright product colors with Olivine charcoal/gold/ivory palette.
3. Introduce mono labels for status, metadata, chips, and nav markers.
4. Move major page titles to serif where the screen is strategic, not purely transactional.
5. Restyle cards, tables, and forms using softer borders and reduced visual noise.
6. Keep workflows and spacing highly usable; do not over-decorate operator screens.

## Strict Do / Do Not

Do:

- keep interfaces readable first
- use serif selectively for emphasis
- use mono for system framing
- maintain strong contrast
- prefer premium restraint over ornamental design

Do not:

- flood interfaces with gold
- turn operational views into marketing pages
- mix many font families
- use generic default admin blues and purples
- reduce usability in pursuit of brand expression

## Implementation Artifact

Use [styles/olivine-theme.css](d:/viji/viji-olivine/03rolledout/06dms/styles/olivine-theme.css) as the reusable base stylesheet for applying this system inside `06dms`.
