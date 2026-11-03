import "./styles.css";

import {
  Database,
  FileText,
  GitBranch,
  type LucideIcon,
  Terminal,
  Zap,
} from "lucide-react";
import { type ReactNode } from "react";

import FeatureCard from "./feature-card";

export type FeatureItem = {
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
    <section className="feature-section" aria-labelledby="features-heading">
      <div className="feature-section__container">
        <div className="mb-[clamp(2rem,4vw,3rem)] text-center">
          <p className="feature-section__eyebrow">Built for developers</p>
          <h2 id="features-heading" className="feature-section__heading">
            Designed for how you work
          </h2>
        </div>

        <ul className="feature-section__features">
          {features.map((feature) => (
            <li key={feature.title} className="feature-section__feature">
              <FeatureCard feature={feature} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
