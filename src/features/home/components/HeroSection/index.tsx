import { type ReactNode } from "react";
import Link from "@docusaurus/Link";

import {
  container,
  primaryButton,
  secondaryButton,
} from "../../classes";
import HeroPreview from "./hero-preview";

export default function HeroSection(): ReactNode {
  return (
    <header className="relative isolate bg-background bg-[radial-gradient(ellipse_70%_58%_at_50%_-8%,color-mix(in_srgb,var(--primary)_22%,transparent),transparent_68%),radial-gradient(ellipse_28%_62%_at_-4%_52%,color-mix(in_srgb,var(--primary)_13%,transparent),transparent_72%),radial-gradient(ellipse_28%_62%_at_104%_52%,color-mix(in_srgb,var(--primary)_13%,transparent),transparent_72%)] pt-[clamp(3.25rem,6.5vw,5rem)] pb-[clamp(2.5rem,5vw,4rem)] before:absolute before:left-[max(-6rem,-7vw)] before:top-[38%] before:-z-[1] before:aspect-[1.2/1] before:w-[clamp(9rem,22vw,18rem)] before:rotate-[-14deg] before:rounded-3xl before:border before:border-[color-mix(in_srgb,var(--primary)_16%,transparent)] before:bg-[linear-gradient(145deg,color-mix(in_srgb,var(--primary)_20%,transparent),color-mix(in_srgb,var(--primary)_5%,transparent))] before:opacity-75 before:content-[''] after:absolute after:right-[max(-6rem,-7vw)] after:top-[30%] after:-z-[1] after:aspect-[1.2/1] after:w-[clamp(9rem,22vw,18rem)] after:rotate-[14deg] after:rounded-3xl after:border after:border-[color-mix(in_srgb,var(--primary)_16%,transparent)] after:bg-[linear-gradient(145deg,color-mix(in_srgb,var(--primary)_20%,transparent),color-mix(in_srgb,var(--primary)_5%,transparent))] after:opacity-75 after:content-[''] max-[760px]:before:opacity-40 max-[760px]:after:opacity-40">
      <div className={container}>
        <div className="mx-auto max-w-[58rem] text-center">
          <h1 className="m-0 text-[clamp(2.25rem,5.6vw,var(--type-hero))] leading-[var(--leading-display)] tracking-[-0.035em] text-balance">
            Your Projects Remember
          </h1>
          <p className="mx-auto mb-0 mt-[0.85rem] max-w-[46rem] text-[clamp(1rem,1.6vw,1.125rem)] leading-[1.5] text-muted-foreground text-balance">
            Keep the context behind your work, across sessions, tasks, decisions
            and AI
          </p>
          <div className="mt-[1.45rem] flex flex-wrap justify-center gap-[0.65rem] max-[480px]:w-full max-[480px]:flex-col">
            <Link
              className={`${primaryButton} max-[480px]:w-full`}
              to="/docs/getting-started/"
            >
              Install CTX
            </Link>
            <Link
              className={`${secondaryButton} max-[480px]:w-full`}
              to="/docs/introduction/"
            >
              Explore Docs
            </Link>
          </div>
        </div>

        <HeroPreview />
      </div>
    </header>
  );
}
