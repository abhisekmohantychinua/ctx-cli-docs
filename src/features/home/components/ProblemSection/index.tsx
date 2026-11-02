import { type ReactNode } from "react";
import {
  Brain,
  FileCode2,
  LayoutGrid,
  type LucideIcon,
  RefreshCw,
  Sparkles,
  Workflow,
} from "lucide-react";

import { container, eyebrow, sectionHeading } from "../../classes";

type ProblemItem = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

const problems: ProblemItem[] = [
  {
    title: "Rebuilding context",
    description:
      "Returning to a project means scanning code, commits, and notes just to remember what was happening.",
    Icon: RefreshCw,
  },
  {
    title: "Lost decision reasoning",
    description:
      "You remember what you implemented, but not why you chose that approach or which trade-offs you considered.",
    Icon: Brain,
  },
  {
    title: "Fragmented project work",
    description:
      "Switching between projects and unfinished threads makes it difficult to regain a clear picture of what needs attention.",
    Icon: LayoutGrid,
  },
  {
    title: "AI without evolving context",
    description:
      "AI can work with the information it has, but often lacks the project’s actual progress, previous attempts, and decisions.",
    Icon: Sparkles,
  },
  {
    title: "Disconnected tools and manual overhead",
    description:
      "Developers move between tools to track planning, implementation, notes, and decisions, often having to maintain the same information manually.",
    Icon: Workflow,
  },
  {
    title: "Inconsistent implementation context",
    description:
      "As work evolves, it can become difficult to understand the practices, assumptions, and intent behind code—especially when AI contributes to it.",
    Icon: FileCode2,
  },
];

export default function ProblemSection(): ReactNode {
  return (
    <section
      className="pb-[clamp(2.5rem,5vw,4rem)] pt-[clamp(3rem,6vw,4.75rem)]"
      aria-labelledby="problem-heading"
    >
      <div className={container}>
        <div className="grid grid-cols-[minmax(21rem,1fr)_minmax(0,2.4fr)] items-start gap-[clamp(2rem,5vw,4.5rem)] max-[1100px]:grid-cols-1 max-[1100px]:gap-8">
          <div>
            <p className={`${eyebrow} mb-[0.7rem]`}>The Problem</p>
            <h2 id="problem-heading" className={sectionHeading}>
              Context gets lost
              <br />
              Your work shouldn’t
            </h2>
          </div>

          <ul className="m-0 grid list-none grid-cols-[repeat(3,minmax(0,1fr))] gap-[0.9rem] p-0 max-[1100px]:grid-cols-[repeat(2,minmax(0,1fr))] max-[680px]:grid-cols-1">
            {problems.map(({ title, description, Icon }) => (
              <li key={title} className="flex">
                <article className="flex w-full flex-col rounded-card border border-home-border bg-[linear-gradient(180deg,color-mix(in_srgb,var(--primary)_10%,var(--card))_0%,color-mix(in_srgb,var(--primary)_3%,var(--card))_100%)] px-4 pb-[1.15rem] pt-4">
                  <span
                    className="mb-[0.8rem] grid size-[1.9rem] shrink-0 place-items-center rounded-icon bg-accent-foreground text-accent"
                    aria-hidden="true"
                  >
                    <Icon size={16} strokeWidth={1.9} />
                  </span>
                  <h3 className="mb-[0.45rem] mt-0 text-[0.8125rem] leading-[1.35]">
                    {title}
                  </h3>
                  <p className="m-0 text-card-copy leading-[1.55] text-muted-foreground">
                    {description}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
