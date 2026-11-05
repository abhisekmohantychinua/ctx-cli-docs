import "./styles.css";

import Link from "@docusaurus/Link";
import { type ReactNode } from "react";

import { buttonVariants } from "@/src/components/ui/button";

import SubscriptionForm from "./subscription-form";

export default function GetStartedSection(): ReactNode {
  return (
    <section className="gs-section" aria-labelledby="get-started-heading">
      <div className="gs-section__container">
        <div className="gs-section__left">
          <div className="gs-section__left-content">
            <p className="gs-section__left-eyebrow">Get started</p>
            <h2 id="get-started-heading" className="gs-section__left-heading">
              Keep your project
              <br />
              moving
            </h2>
            <p className="gs-section__description">
              Start preserving the context behind your work
            </p>
            <Link
              className={`${buttonVariants({ variant: "default" })} ifm-link-reset`}
              to="/docs/getting-started/"
            >
              Install CTX
            </Link>
          </div>

          <div className="gs-section__right">
            <h3 className="gs-section__right-heading">
              Follow future releases
            </h3>
            <p className="gs-section__right-description">
              Get occasional updates about new versions, improvements, and
              important project announcements.
            </p>
            <SubscriptionForm />
          </div>
        </div>
      </div>
    </section>
  );
}
