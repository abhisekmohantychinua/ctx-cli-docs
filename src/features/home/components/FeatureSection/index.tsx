import { type ReactNode } from "react";
import {
  Database,
  FileText,
  GitBranch,
  type LucideIcon,
  Terminal,
  Zap,
} from "lucide-react";

import { container, eyebrow, sectionHeading } from "../../classes";

type FeatureItem = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

const features: FeatureItem[] = [
  {
    title: "Local",
    description:
      "Project context is stored locally, alongside the project, without depending on a hosted service for everyday use.",
    Icon: Database,
  },
  {
    title: "Fast",
    description:
      "A lightweight CLI designed to make capturing and retrieving context part of everyday development.",
    Icon: Zap,
  },
  {
    title: "Git-friendly",
    description:
      "Context lives within the project, making it practical to keep alongside project files and version it when appropriate.",
    Icon: GitBranch,
  },
  {
    title: "CLI-first",
    description:
      "Work from the terminal you already use, without introducing another graphical workspace.",
    Icon: Terminal,
  },
  {
    title: "Human-readable",
    description:
      "Structured data is kept readable, so context isn’t locked away in an opaque database.",
    Icon: FileText,
  },
];

export default function FeaturesSection(): ReactNode {
  return (
    <section
      className="pb-[clamp(3.25rem,6vw,5rem)] pt-[clamp(2.5rem,5vw,4rem)]"
      aria-labelledby="features-heading"
    >
      <div className={container}>
        <div className="mb-[clamp(2rem,4vw,3rem)] text-center">
          <p className={`${eyebrow} mb-[0.55rem]`}>Built for developers</p>
          <h2 id="features-heading" className={sectionHeading}>
            Designed for how you work
          </h2>
        </div>

        <ul className="m-0 grid list-none grid-cols-5 gap-[clamp(1rem,2.5vw,2rem)] p-0 max-[1100px]:grid-cols-3 max-[1100px]:gap-y-9 max-[680px]:grid-cols-2 max-[480px]:grid-cols-1">
          {features.map(({ title, description, Icon }) => (
            <li
              key={title}
              className="flex flex-col items-center text-center"
            >
              <span
                className="mb-[0.85rem] grid size-[3.25rem] place-items-center rounded-full border border-[color-mix(in_srgb,var(--ifm-color-link)_42%,var(--border))] text-link"
                aria-hidden="true"
              >
                <Icon size={22} strokeWidth={1.6} />
              </span>
              <h3 className="mb-[0.45rem] mt-0 text-[0.875rem]">{title}</h3>
              <p className="m-0 text-card-copy leading-[1.55] text-muted-foreground">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
