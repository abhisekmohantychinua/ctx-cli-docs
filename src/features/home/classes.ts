/**
 * Shared Tailwind class strings for the homepage.
 *
 * These keep the repeated primitives (page shell, container, headings, and
 * buttons) consistent between sections. Every value still comes from the
 * design tokens mapped into Tailwind in src/css/custom.css.
 */

export const page = "overflow-hidden bg-background text-foreground";

export const container =
  "mx-auto w-[min(calc(100%_-_2*var(--page-gutter)),var(--content-max))]";

export const eyebrow =
  "mt-0 font-mono text-fine font-medium uppercase leading-[1.3] tracking-[0.12em] text-link";

export const sectionHeading =
  "m-0 text-[clamp(1.75rem,3.2vw,var(--type-section))] leading-[var(--leading-heading)] tracking-[-0.02em] text-balance";

export const getStartedHeading =
  "m-0 text-[clamp(1.75rem,3.4vw,2.5rem)] leading-[var(--leading-heading)] tracking-[-0.02em] text-balance";

const buttonBase =
  "inline-flex min-h-[2.6rem] cursor-pointer items-center justify-center gap-2 rounded-button border border-transparent px-[1.2rem] py-[0.62rem] font-sans text-button font-semibold leading-[1.1] no-underline transition-[background-color,border-color,color,transform] duration-[180ms] ease-[ease] focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-ring motion-reduce:transition-none";

export const primaryButton = `${buttonBase} border-primary bg-primary text-primary-foreground hover:border-[color-mix(in_srgb,var(--primary)_85%,var(--foreground))] hover:bg-[color-mix(in_srgb,var(--primary)_85%,var(--foreground))] hover:text-primary-foreground hover:no-underline active:translate-y-px`;

export const secondaryButton = `${buttonBase} border-home-border bg-transparent text-foreground hover:border-border hover:bg-muted hover:text-foreground hover:no-underline`;
