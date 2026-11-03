# CTX design system

Design token reference for the Docusaurus + shadcn website, based on the paired Figma designs:

- [CTX-Light-Codex](https://www.figma.com/design/CRltNHLErrNEGCClP7kR24/Abhisek-Branding?node-id=531-2)
- [CTX-Dark-Codex](https://www.figma.com/design/CRltNHLErrNEGCClP7kR24/Abhisek-Branding?node-id=537-2)

Both frames share the same 1280 × 3250 px structure and 363-node composition. This document keeps their shared geometry and typography together while defining separate light and dark color values. Hex values below are sampled from the frames; semantic mappings and responsive values are implementation guidance where noted.

## 1. Color foundation

| Role | Light | Dark | Use |
|---|---|---|---|
| Page background | `#FFFEFB` | `#131417` | Main canvas |
| Main text | `#1F2126` | `#F0EBE0` | Headings and primary copy |
| Secondary text | `#5C5A55` | `#C7C2B8` | Supporting copy; dark value sampled |
| Brand accent | `#D16E14` | `#F5911F` | Accent graphics and highlights |
| Accent text | `#994F0A` | `#FFB352` | Readable accent labels and links |
| CTA surface | `#D16E14` | `#B34F0B` | Primary buttons |
| CTA label | `#000000` | `#F5F0E6` | Button text (corrected for contrast) |
| Card top | `#FBFAF5` | `#1D1F21` | Card upper gradient stop |
| Card lower | `#FCE8C2` | `#29251F` | Card lower gradient stop |
| Feature band | `#FAF5EB` | `#201D18` | Feature section surface |
| Border | `#DBCDB0` at 66% | `#594F40` at 82% | Dividers and card outlines |
| Terminal border | `#383838` | `#4A4538` at 90% | Terminal / code preview |
| Terminal output | `#018A47` | `#66DC43` | Success output and status |
| Error / close | `#EA0000` | `#EA0000` | Red status indicator |
| Warm glow | — | `#6E451F` at 32% | Decorative ambient glow |

The orange badge tiles use a consistent dark glyph (`#1F2126`) in light mode and warm pale glyphs (`#DBCDB0` / `#F0EBE0`) in dark mode. Keep each icon foreground matched to its tile; do not mix black and white glyphs within the light palette.

## 2. shadcn + Tailwind CSS tokens

This block uses the shadcn CSS-variable convention and Tailwind v4 `@theme inline` mappings. The semantic tokens are OKLCH-compatible CSS colors expressed as hex for direct correspondence to the Figma samples. The charts and sidebar colors are useful semantic extensions because the frame does not define dedicated data visualization or sidebar colors.

~~~css
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *, [data-theme="dark"], [data-theme="dark"] *));

:root,
[data-theme="light"] {
  color-scheme: light;
  --background: #FFFEFB;
  --foreground: #1F2126;
  --card: #FBFAF5;
  --card-foreground: #1F2126;
  --popover: #FFFEFB;
  --popover-foreground: #1F2126;
  --primary: #D16E14;
  --primary-foreground: #000000;
  --secondary: #FAF5EB;
  --secondary-foreground: #1F2126;
  --muted: #F5F1E8;
  --muted-foreground: #5C5A55;
  --accent: #FCE8C2;
  --accent-foreground: #713B08;
  --destructive: #EA0000;
  --destructive-foreground: #FFFFFF;
  --border: #DBCDB0;
  --input: #DBCDB0;
  --ring: #D16E14;
  --chart-1: #D16E14;
  --chart-2: #018A47;
  --chart-3: #994F0A;
  --chart-4: #F5911F;
  --chart-5: #66A182;
  --sidebar: #FAF5EB;
  --sidebar-foreground: #1F2126;
  --sidebar-primary: #D16E14;
  --sidebar-primary-foreground: #000000;
  --sidebar-accent: #FCE8C2;
  --sidebar-accent-foreground: #713B08;
  --sidebar-border: #DBCDB0;
  --sidebar-ring: #D16E14;
  --radius: 0.5rem;
}

.dark,
[data-theme="dark"] {
  color-scheme: dark;
  --background: #131417;
  --foreground: #F0EBE0;
  --card: #1D1F21;
  --card-foreground: #F0EBE0;
  --popover: #1D1F21;
  --popover-foreground: #F0EBE0;
  --primary: #B34F0B;
  --primary-foreground: #F5F0E6;
  --secondary: #201D18;
  --secondary-foreground: #F0EBE0;
  --muted: #29251F;
  --muted-foreground: #C7C2B8;
  --accent: #6E451F;
  --accent-foreground: #FFB352;
  --destructive: #EA0000;
  --destructive-foreground: #F5F0E6;
  --border: #594F40;
  --input: #4A4538;
  --ring: #F5911F;
  --chart-1: #F5911F;
  --chart-2: #66DC43;
  --chart-3: #FFB352;
  --chart-4: #C7C2B8;
  --chart-5: #018A47;
  --sidebar: #1D1F21;
  --sidebar-foreground: #F0EBE0;
  --sidebar-primary: #F5911F;
  --sidebar-primary-foreground: #131417;
  --sidebar-accent: #29251F;
  --sidebar-accent-foreground: #F0EBE0;
  --sidebar-border: #594F40;
  --sidebar-ring: #F5911F;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
  --font-sans: "Geist", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "Intel One Mono", ui-monospace, monospace;
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
}
~~~

Use `bg-primary text-primary-foreground` for primary actions. Keep the frame's orange CTA label black in light mode and warm white in dark mode; apply the same pairing to the hero CTA, “Install Now”, and “Subscribe to updates”.

## 3. Docusaurus Infima tokens

Docusaurus selects its themes with `data-theme="light"` and `data-theme="dark"`. Infima's primary scale below follows the frame accent; shade values are derived by blending the primary toward black or white for a usable seven-step scale. Link colors use the frame's dedicated accent text colors.

~~~css
:root,
[data-theme="light"] {
  --ifm-color-primary: #D16E14;
  --ifm-color-primary-dark: #C76913;
  --ifm-color-primary-darker: #BC6312;
  --ifm-color-primary-darkest: #B25E11;
  --ifm-color-primary-light: #D67D2C;
  --ifm-color-primary-lighter: #DA8B43;
  --ifm-color-primary-lightest: #DF9A5A;
  --ifm-color-link: #994F0A;
  --ifm-color-link-hover: #713B08;
  --ifm-background-color: #FFFEFB;
  --ifm-background-surface-color: #FBFAF5;
  --ifm-font-color-base: #1F2126;
  --ifm-font-color-secondary: #5C5A55;
  --ifm-heading-color: #1F2126;
  --ifm-border-color: #DBCDB0;
  --ifm-hr-border-color: #DBCDB0;
  --ifm-code-background: #F5F1E8;
  --ifm-menu-color-background-active: #FCE8C2;
  --ifm-navbar-background-color: #FFFEFB;
  --ifm-footer-background-color: #FAF5EB;
  --ifm-color-emphasis-0: #FFFFFF;
  --ifm-color-emphasis-100: #FBFAF5;
  --ifm-color-emphasis-200: #F5F1E8;
  --ifm-color-emphasis-300: #E8E0D1;
  --ifm-color-emphasis-500: #A49B8D;
  --ifm-color-emphasis-700: #5C5A55;
  --ifm-color-emphasis-900: #1F2126;
  --ifm-font-family-base: "Geist", ui-sans-serif, system-ui, sans-serif;
  --ifm-font-family-monospace: "Intel One Mono", ui-monospace, monospace;
  --ifm-global-radius: 0.5rem;
  --ifm-button-border-radius: 5px;
}

[data-theme="dark"] {
  --ifm-color-primary: #F5911F;
  --ifm-color-primary-dark: #E98A1D;
  --ifm-color-primary-darker: #DD831C;
  --ifm-color-primary-darkest: #D07B1A;
  --ifm-color-primary-light: #F69C35;
  --ifm-color-primary-lighter: #F7A74C;
  --ifm-color-primary-lightest: #F8B262;
  --ifm-color-link: #FFB352;
  --ifm-color-link-hover: #F8B262;
  --ifm-background-color: #131417;
  --ifm-background-surface-color: #1D1F21;
  --ifm-font-color-base: #F0EBE0;
  --ifm-font-color-secondary: #C7C2B8;
  --ifm-heading-color: #F0EBE0;
  --ifm-border-color: #594F40;
  --ifm-hr-border-color: #594F40;
  --ifm-code-background: #29251F;
  --ifm-menu-color-background-active: #29251F;
  --ifm-navbar-background-color: #131417;
  --ifm-footer-background-color: #201D18;
  --ifm-color-emphasis-0: #131417;
  --ifm-color-emphasis-100: #1D1F21;
  --ifm-color-emphasis-200: #29251F;
  --ifm-color-emphasis-300: #40392F;
  --ifm-color-emphasis-500: #8E877B;
  --ifm-color-emphasis-700: #C7C2B8;
  --ifm-color-emphasis-900: #F0EBE0;
  --ifm-font-family-base: "Geist", ui-sans-serif, system-ui, sans-serif;
  --ifm-font-family-monospace: "Intel One Mono", ui-monospace, monospace;
  --ifm-global-radius: 0.5rem;
  --ifm-button-border-radius: 5px;
}
~~~

## 4. Shared design tokens

### Typography

The frames use Geist for interface typography and Intel One Mono for terminal details. Weights and sizes below are observed in the frames; recommended line heights translate the frames' auto line-height into web-friendly values.

| Role | Family / weight | Size | Recommended line-height |
|---|---|---:|---:|
| Hero heading | Geist SemiBold 600 | 48 px / 3 rem | 1.08 |
| Section heading | Geist SemiBold 600 | 36 px / 2.25 rem | 1.15 |
| Supporting heading | Geist SemiBold 600 | 24 px / 1.5 rem | 1.2 |
| Card / feature heading | Geist Medium 500 | 20 px / 1.25 rem | 1.3 |
| Body | Geist Regular 400 | 16 px / 1 rem | 1.5 |
| Card copy | Geist Medium 500 | 12–14 px | 1.45 |
| Button label | Geist SemiBold 600 | 15 px | 1.2 |
| Fine print | Geist Regular 400 | 11 px | 1.45 |
| Terminal prompt | Intel One Mono Light 300 | 13 px | 1.5 |
| Terminal output | Intel One Mono Light 300 | 10 px | 1.5 |

Load Geist and Intel One Mono as local/web fonts in both site themes. Use the listed families with sans-serif and monospace fallbacks. Tracking in the Figma samples is 0.

### Layout, spacing, breakpoints

| Token | Value | Guidance |
|---|---:|---|
| Main content max width | 1140 px / 71.25 rem | Frame content width |
| Desktop side gutter | 70 px / 4.375 rem | At 1280 px viewport |
| Base spacing unit | 4 px / 0.25 rem | Shared spacing rhythm |
| Spacing scale | 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80 px | Page uses broad section gaps around 50–85 px |
| Card grid | 3 columns | One column narrow, two at tablet, three desktop |
| Feature row | 5 items | Wrap or reduce columns on narrower screens |

Recommended container: `width: min(calc(100% - 2 * var(--page-gutter)), var(--content-max));` with `--page-gutter: clamp(1.25rem, 5.47vw, 4.375rem)` and `--content-max: 71.25rem`. Tailwind v4 defaults are 40/48/64/80/96 rem (640/768/1024/1280/1536 px). Docusaurus navbar uses a 996 px responsive cutoff, so align navbar behavior with Infima while retaining Tailwind's breakpoints for content grids.

~~~css
:root {
  --font-geist: "Geist", ui-sans-serif, system-ui, sans-serif;
  --font-intel-mono: "Intel One Mono", ui-monospace, monospace;
  --type-hero: 3rem;
  --type-section: 2.25rem;
  --type-subheading: 1.5rem;
  --type-card-heading: 1.25rem;
  --type-body: 1rem;
  --type-card-copy: 0.75rem;
  --type-button: 0.9375rem;
  --type-fine: 0.6875rem;
  --leading-display: 1.08;
  --leading-heading: 1.15;
  --leading-body: 1.5;
  --space-unit: 0.25rem;
  --page-gutter: clamp(1.25rem, 5.47vw, 4.375rem);
  --content-max: 71.25rem;
  --shape-radius-icon: 4px;
  --shape-radius-button: 5px;
  --shape-radius-terminal: 10px;
  --shape-radius-panel: 15px;
  --shape-radius-card: 16px;
  --shape-radius-hero: 35px;
  --blur-glow: 151.7px;
  --blur-backdrop: 18px;
}

@theme inline {
  --font-sans: var(--font-geist);
  --font-mono: var(--font-intel-mono);
  --radius-icon: var(--shape-radius-icon);
  --radius-button: var(--shape-radius-button);
  --radius-terminal: var(--shape-radius-terminal);
  --radius-panel: var(--shape-radius-panel);
  --radius-card: var(--shape-radius-card);
  --radius-hero: var(--shape-radius-hero);
  --text-hero: var(--type-hero);
  --text-hero--line-height: var(--leading-display);
  --text-section: var(--type-section);
  --text-section--line-height: var(--leading-heading);
  --text-subheading: var(--type-subheading);
  --text-card-heading: var(--type-card-heading);
  --text-body: var(--type-body);
  --text-body--line-height: var(--leading-body);
  --text-card-copy: var(--type-card-copy);
  --text-button: var(--type-button);
  --text-fine: var(--type-fine);
  --spacing: var(--space-unit);
  --breakpoint-sm: 40rem;
  --breakpoint-md: 48rem;
  --breakpoint-lg: 64rem;
  --breakpoint-xl: 80rem;
  --breakpoint-2xl: 96rem;
}
~~~

Use named text utilities such as `text-hero` and `text-section` with their paired line-height tokens. Breakpoint values generate Tailwind responsive variants; standard CSS media queries should spell out the corresponding values directly (640, 768, 1024, 1280, and 1536 px).

### Radius, borders, and effects

| Element | Radius / treatment |
|---|---|
| Small icon tile | 4 px |
| Buttons | 5 px |
| Cards and inputs | 16 px |
| Terminal well | 10 px |
| Decorative panels | 15 px |
| Outer hero frame | 35 px |
| Standard border | 1 px solid theme border color |
| Soft ambient blur | 151.7 px layer blur; use sparingly |
| Backdrop blur | 18 px |

Keep gradients and overlays warm: light cards transition from `#FBFAF5` to `#FCE8C2`; dark cards transition from `#1D1F21` to `#29251F`. Effects should not lower text or icon contrast.

## 5. Theme and implementation notes

- Use the same component structure, spacing, typography, and radii in both themes. Theme changes should flow from semantic tokens.
- In a Docusaurus site with shadcn components, set the root theme state so both `.dark` and `[data-theme="dark"]` selectors resolve consistently.
- Map primary button text through `--primary-foreground`; avoid hard-coding black or white in individual button components.
- Preserve accessible contrast when extending colors to new states. The Figma accent orange is intended for emphasis and fills; use the dedicated accent text/link colors for text on canvas surfaces.
- The chart, sidebar, neutral emphasis ramps, muted copy, hover colors, and some line heights are semantic implementation recommendations because the frames do not define those states explicitly.

## 6. References

- [shadcn theming and CSS variables](https://ui.shadcn.com/docs/theming)
- [Tailwind CSS theme variables and `@theme inline`](https://tailwindcss.com/docs/theme)
- [Tailwind responsive design and default breakpoints](https://tailwindcss.com/docs/responsive-design)
- [Docusaurus styling, Infima variables, and color mode](https://docusaurus.io/docs/styling-layout)
