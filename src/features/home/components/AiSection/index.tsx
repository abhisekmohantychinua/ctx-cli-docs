import {
  CheckSquare,
  List,
  type LucideIcon,
  PackageOpen,
  RefreshCw,
  Terminal,
  UserRoundPlus,
} from "lucide-react";
import { type ReactNode } from "react";

import { container, eyebrow, sectionHeading } from "../../classes";

type ContextItem = {
  label: string;
  Icon: LucideIcon;
};

const sharedContextItems: ContextItem[] = [
  { label: "Decisions", Icon: CheckSquare },
  { label: "Progress", Icon: RefreshCw },
  { label: "Attempts", Icon: PackageOpen },
  { label: "Current State", Icon: List },
];

const aiConnector =
  "relative h-px border-t-2 border-dashed border-home-connector before:absolute before:left-0 before:top-1/2 before:size-2 before:-translate-y-1/2 before:rotate-[-135deg] before:border-r-2 before:border-t-2 before:border-home-connector before:content-[''] after:absolute after:right-0 after:top-1/2 after:size-2 after:-translate-y-1/2 after:rotate-45 after:border-r-2 after:border-t-2 after:border-home-connector after:content-[''] max-[900px]:mx-auto max-[900px]:h-8 max-[900px]:w-px max-[900px]:border-l-2 max-[900px]:border-t-0 max-[900px]:before:hidden max-[900px]:after:hidden";

export default function AiSection(): ReactNode {
  return (
    <section
      className="relative isolate bg-background bg-[radial-gradient(ellipse_52%_58%_at_50%_72%,color-mix(in_srgb,var(--primary)_13%,transparent),transparent_72%)] py-[clamp(3.5rem,7vw,5.5rem)]"
      aria-labelledby="ai-heading"
    >
      <div className={container}>
        <div className="mb-[clamp(2rem,4vw,3rem)]">
          <p className={`${eyebrow} mb-[0.7rem]`}>AI</p>
          <h2 id="ai-heading" className={sectionHeading}>
            Work with AI, not
            <br />
            around it
          </h2>
        </div>

        <figure className="m-0">
          <div className="mx-auto grid max-w-[54rem] grid-cols-[minmax(0,0.9fr)_minmax(2.5rem,4rem)_minmax(13rem,1.15fr)_minmax(2.5rem,4rem)_minmax(0,0.9fr)] items-center gap-2 max-[900px]:max-w-[24rem] max-[900px]:grid-cols-1 max-[900px]:gap-6">
            <div className="flex flex-col items-center text-center">
              <span
                className="mb-[0.8rem] grid size-20 place-items-center rounded-full bg-brand text-primary-foreground shadow-[0_0_0_10px_color-mix(in_srgb,var(--ifm-color-primary)_8%,transparent)]"
                aria-hidden="true"
              >
                <UserRoundPlus size={32} strokeWidth={1.7} />
              </span>
              <h3 className="mb-[0.6rem] mt-0 text-base">User</h3>
              <ul className="m-0 flex list-none flex-wrap justify-center gap-[0.3rem_0.75rem] p-0 text-fine leading-[1.5] text-muted-foreground [&>li]:relative [&>li]:pl-[0.6rem] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:top-[0.55em] [&>li]:before:size-1 [&>li]:before:rounded-full [&>li]:before:bg-link [&>li]:before:content-['']">
                <li>Record Decisions</li>
                <li>Track Progress</li>
                <li>Log attempts</li>
              </ul>
            </div>

            <div className={aiConnector} aria-hidden="true" />

            <div className="rounded-card border border-[color-mix(in_srgb,var(--ifm-color-link)_55%,var(--border))] bg-[color-mix(in_srgb,var(--card)_76%,var(--background))] p-[0.85rem] text-center shadow-home">
              <h3 className="mb-3 mt-0 text-[0.875rem]">
                Shared Project Context
              </h3>
              <ul className="m-0 grid list-none grid-cols-2 gap-2 p-0">
                {sharedContextItems.map(({ label, Icon }) => (
                  <li
                    key={label}
                    className="flex min-h-[4.8rem] flex-col items-center justify-center gap-[0.35rem] rounded-panel border border-home-border bg-[color-mix(in_srgb,var(--primary)_7%,var(--card))] p-[0.6rem] text-fine font-medium text-foreground"
                  >
                    <span className="text-link" aria-hidden="true">
                      <Icon size={22} strokeWidth={1.6} />
                    </span>
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={aiConnector} aria-hidden="true" />

            <div className="flex flex-col items-center text-center">
              <span
                className="mb-[0.8rem] grid size-20 place-items-center rounded-full bg-brand text-primary-foreground shadow-[0_0_0_10px_color-mix(in_srgb,var(--ifm-color-primary)_8%,transparent)]"
                aria-hidden="true"
              >
                <Terminal size={32} strokeWidth={1.7} />
              </span>
              <h3 className="mb-[0.6rem] mt-0 text-base">AI Agent</h3>
              <ul className="m-0 flex list-none flex-wrap justify-center gap-[0.3rem_0.75rem] p-0 text-fine leading-[1.5] text-muted-foreground [&>li]:relative [&>li]:pl-[0.6rem] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:top-[0.55em] [&>li]:before:size-1 [&>li]:before:rounded-full [&>li]:before:bg-link [&>li]:before:content-['']">
                <li>Retrieve project context</li>
                <li>Understand your intent</li>
                <li>Provide better assistance</li>
              </ul>
            </div>
          </div>

          <figcaption className="sr-only">
            The user records decisions, tracks progress, and logs attempts in a
            shared project context. The AI agent retrieves that context,
            understands intent, and provides better assistance.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
