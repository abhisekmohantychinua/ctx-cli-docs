/**
 * Shared Tailwind class strings for the homepage.
 *
 * These keep the repeated primitives (page shell, container, headings, and
 * buttons) consistent between sections. Every value still comes from the
 * design tokens mapped into Tailwind in src/css/custom.css.
 */

export const container =
  "mx-auto w-[min(calc(100%_-_2*var(--page-gutter)),var(--content-max))]";

export const eyebrow =
  "mt-0 font-mono text-fine font-medium uppercase leading-[1.3] tracking-[0.12em] text-link";

export const sectionHeading =
  "m-0 text-[clamp(1.75rem,3.2vw,var(--type-section))] leading-[var(--leading-heading)] tracking-[-0.02em] text-balance";

export const getStartedHeading =
  "m-0 text-[clamp(1.75rem,3.4vw,2.5rem)] leading-[var(--leading-heading)] tracking-[-0.02em] text-balance";
