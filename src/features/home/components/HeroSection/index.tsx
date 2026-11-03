import { type ReactNode } from "react";
import Link from "@docusaurus/Link";

import { container } from "../../classes";
import HeroPreview from "./hero-preview";
import { buttonVariants } from "@/src/components/ui/button";
import "./styles.css";

export default function HeroSection(): ReactNode {
  return (
    <header className="hero-section">
      <div className="hero-section__container">
        <div className="hero-section__content">
          <h1 className="hero-section__heading">Your Projects Remember</h1>
          <p className="hero-section__subheading">
            Keep the context behind your work, across sessions, tasks, decisions
            and AI
          </p>
          <div className="hero-section__actions">
            <Link
              className={`${buttonVariants({ variant: "default" })} ifm-link-reset`}
              to="/docs/getting-started/"
            >
              Install CTX
            </Link>
            <Link
              className={`${buttonVariants({ variant: "outline" })} ifm-link-reset`}
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
