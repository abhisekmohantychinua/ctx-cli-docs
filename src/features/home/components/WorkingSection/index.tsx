import { type ReactNode } from "react";
import {
  ArrowRight,
  FileJson,
  Folder,
  Terminal,
  UserRound,
} from "lucide-react";

import { container, eyebrow, sectionHeading } from "../../classes";

const projectEntries = [".git/", ".ctx/", "docs/", "src/", "test/"];
const contextFiles = [
  "config.json",
  "sessions.json",
  "tasks.json",
  "logs.json",
  "decisions.json",
];

const folderEntry =
  "flex items-center gap-[0.45rem] rounded-[0.3rem] px-[0.35rem] py-[0.34rem] font-mono text-fine";
const folderEntryIdle = `${folderEntry} text-muted-foreground [&_svg]:text-[color-mix(in_srgb,var(--muted-foreground)_80%,transparent)]`;
const folderEntryActive = `${folderEntry} bg-[color-mix(in_srgb,var(--primary)_12%,var(--card))] text-link [&_svg]:text-link`;

export default function WorkingSection(): ReactNode {
  return (
    <section
      className="pb-[clamp(3rem,6vw,5rem)] pt-[clamp(2.5rem,5vw,4rem)]"
      aria-labelledby="how-heading"
    >
      <div className={container}>
        <div className="mb-[clamp(2rem,4vw,3.25rem)] grid grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] items-start gap-[clamp(2rem,5vw,5rem)] max-[760px]:grid-cols-1 max-[760px]:gap-5">
          <div>
            <p className={`${eyebrow} mb-[0.7rem]`}>How CTX works</p>
            <h2 id="how-heading" className={sectionHeading}>
              A project with
              <br />
              persistent context
            </h2>
          </div>
          <p className="mb-0 mt-[0.35rem] max-w-[38rem] text-[0.9375rem] leading-[1.65] text-muted-foreground">
            CTX runs from within the project, storing structured context in your
            project directory. It’s accessible to you and AI agents through the
            CLI.
          </p>
        </div>

        <figure className="m-0">
          <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1.12fr)] items-center gap-[clamp(0.75rem,1.6vw,1.25rem)] max-[1100px]:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] max-[680px]:grid-cols-1 max-[680px]:justify-items-center max-[680px]:gap-3">
            <div className="rounded-panel border border-home-border bg-[color-mix(in_srgb,var(--card)_78%,var(--background))] px-[0.95rem] py-[0.9rem] max-[680px]:w-[min(100%,22rem)]">
              <p className="mb-[0.7rem] mt-0 flex items-center gap-[0.45rem] text-[0.75rem] font-semibold text-foreground [&_svg]:text-link">
                <Folder aria-hidden="true" size={16} strokeWidth={1.8} />
                <span>Project</span>
              </p>
              <ul className="m-0 grid list-none gap-[0.15rem] p-0">
                {projectEntries.map((entry) => (
                  <li
                    key={entry}
                    className={
                      entry === ".ctx/"
                        ? folderEntryActive
                        : folderEntryIdle
                    }
                  >
                    <Folder aria-hidden="true" size={13} strokeWidth={1.8} />
                    <span>{entry}</span>
                  </li>
                ))}
              </ul>
            </div>

            <ArrowRight
              className="size-6 justify-self-center text-muted-foreground max-[680px]:rotate-90"
              aria-hidden="true"
              strokeWidth={1.5}
            />

            <div className="rounded-panel border border-home-border bg-[color-mix(in_srgb,var(--card)_78%,var(--background))] px-[0.95rem] py-[0.9rem] max-[680px]:w-[min(100%,22rem)]">
              <p className="mb-[0.7rem] mt-0 flex items-center gap-[0.45rem] text-[0.75rem] font-semibold text-foreground [&_svg]:text-link">
                <Folder aria-hidden="true" size={16} strokeWidth={1.8} />
                <span>.ctx/</span>
              </p>
              <ul className="m-0 grid list-none gap-[0.15rem] p-0">
                {contextFiles.map((file) => (
                  <li key={file} className={folderEntry}>
                    <FileJson aria-hidden="true" size={13} strokeWidth={1.8} />
                    <span>{file}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="relative min-h-[8rem] w-[clamp(1.5rem,3vw,2.5rem)] self-stretch before:absolute before:bottom-1/4 before:left-0 before:top-1/4 before:border-l before:border-border [&>span]:absolute [&>span]:left-0 [&>span]:w-full [&>span]:border-t [&>span]:border-border [&>span]:before:absolute [&>span]:before:-top-[3.5px] [&>span]:before:left-0 [&>span]:before:size-1.5 [&>span]:before:rotate-45 [&>span]:before:border-b [&>span]:before:border-l [&>span]:before:border-border [&>span:first-child]:top-1/4 [&>span:last-child]:bottom-1/4 max-[1100px]:hidden"
              aria-hidden="true"
            >
              <span />
              <span />
            </div>

            <ul className="m-0 grid list-none gap-[clamp(1.25rem,2.5vw,1.75rem)] p-0 max-[1100px]:col-span-full max-[1100px]:mt-2 max-[1100px]:grid-cols-2 max-[1100px]:gap-6 max-[680px]:mt-2 max-[680px]:w-[min(100%,22rem)] max-[680px]:grid-cols-1">
              <li className="flex items-start gap-[0.85rem]">
                <span
                  className="grid size-[3.25rem] shrink-0 place-items-center rounded-full bg-accent-foreground text-accent"
                  aria-hidden="true"
                >
                  <UserRound size={22} strokeWidth={1.8} />
                </span>
                <div>
                  <h3 className="mb-1 mt-0 text-[0.875rem]">Developer</h3>
                  <p className="m-0 max-w-[15rem] text-xs leading-[1.55] text-muted-foreground">
                    Uses CTX commands to manage and retrieve context
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-[0.85rem]">
                <span
                  className="grid size-[3.25rem] shrink-0 place-items-center rounded-full bg-accent-foreground text-accent"
                  aria-hidden="true"
                >
                  <Terminal size={22} strokeWidth={1.8} />
                </span>
                <div>
                  <h3 className="mb-1 mt-0 text-[0.875rem]">AI Agent</h3>
                  <p className="m-0 max-w-[15rem] text-xs leading-[1.55] text-muted-foreground">
                    Uses the same CLI to access relevant project context
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <figcaption className="sr-only">
            A project directory contains a .ctx folder with config.json,
            sessions.json, tasks.json, logs.json, and decisions.json. Both the
            developer and the AI agent use the CTX CLI to read and update that
            shared context.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
