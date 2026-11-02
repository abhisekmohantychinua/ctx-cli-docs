import { type ReactNode } from "react";
import Link from "@docusaurus/Link";

import {
  container,
  eyebrow,
  getStartedHeading,
  primaryButton,
} from "../../classes";
import SubscriptionForm from "./subscription-form";

export default function GetStartedSection(): ReactNode {
  return (
    <section
      className="border-t border-[color-mix(in_srgb,var(--border)_55%,transparent)] bg-home-band-strong py-[clamp(3rem,6vw,4.5rem)]"
      aria-labelledby="get-started-heading"
    >
      <div className={container}>
        <div className="grid grid-cols-2 items-start gap-[clamp(2rem,6vw,5rem)] max-[680px]:grid-cols-1">
          <div className="pr-8 max-[680px]:pr-0">
            <p className={`${eyebrow} mb-[0.7rem]`}>Get started</p>
            <h2
              id="get-started-heading"
              className={`${getStartedHeading} mb-3`}
            >
              Keep your project
              <br />
              moving
            </h2>
            <p className="mb-[1.35rem] mt-0 text-[0.9375rem] text-muted-foreground">
              Start preserving the context behind your work
            </p>
            <Link className={primaryButton} to="/docs/getting-started/">
              Install CTX
            </Link>
          </div>

          <div className="border-l border-border pl-[clamp(2rem,5vw,4rem)] max-[680px]:border-l-0 max-[680px]:border-t max-[680px]:pl-0 max-[680px]:pt-8">
            <h3 className="mb-2 mt-0 text-[1.25rem]">Follow future releases</h3>
            <p className="mb-[1.15rem] mt-0 max-w-[28rem] text-[0.9375rem] leading-[1.6] text-muted-foreground">
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
