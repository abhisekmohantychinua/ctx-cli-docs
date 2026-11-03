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
import "./styles.css";
import ProblemCard from "./problem-card";

export type ProblemItem = {
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
    <section className="problem-section" aria-labelledby="problem-heading">
      <div className="problem-section__container">
        <div className="problem-section__content">
          <div>
            <p className="problem-section__eyebrow">The Problem</p>
            <h2 id="problem-heading" className="problem-section__heading">
              Context gets lost
              <br />
              Your work shouldn’t
            </h2>
          </div>

          <ul className="problem-section__problems">
            {problems.map((problem) => (
              <li key={problem.title} className="flex">
                <ProblemCard problem={problem} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
