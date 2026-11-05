import "./styles.css";

import {
  ArrowRight,
  FileJson,
  Folder,
  Terminal,
  UserRound,
} from "lucide-react";
import { type ReactNode } from "react";

const projectEntries = [".git/", ".ctx/", "docs/", "src/", "test/"];
const contextFiles = [
  "config.json",
  "sessions.json",
  "tasks.json",
  "logs.json",
  "decisions.json",
];

export default function WorkingSection(): ReactNode {
  return (
    <section className="working-section" aria-labelledby="how-heading">
      <div className="working-section__container">
        <div className="working-section__content">
          <div>
            <p className="working-section__eyebrow">How CTX works</p>
            <h2 id="how-heading" className="working-section__heading">
              A project with
              <br />
              persistent context
            </h2>
          </div>
          <p className="working-section__description">
            CTX runs from within the project, storing structured context in your
            project directory. It’s accessible to you and AI agents through the
            CLI.
          </p>
        </div>

        <figure className="working-section__figure">
          <div className="working-section__box">
            <div className="working-section__project-box">
              <p className="working-section__project-box-folder">
                <Folder aria-hidden="true" size={16} strokeWidth={1.8} />
                <span>Project</span>
              </p>
              <ul className="working-section__project-box-files">
                {projectEntries.map((entry) => (
                  <li
                    key={entry}
                    className={`working-section__project-box-file ${entry === ".ctx/" ? "active" : "idle"}`}
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

            <div className="working-section__ctx-box">
              <p className="working-section__ctx-box-folder">
                <Folder aria-hidden="true" size={16} strokeWidth={1.8} />
                <span>.ctx/</span>
              </p>
              <ul className="working-section__ctx-box-files">
                {contextFiles.map((file) => (
                  <li key={file} className="working-section__ctx-box-file">
                    <FileJson aria-hidden="true" size={13} strokeWidth={1.8} />
                    <span>{file}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="relative min-h-32 w-[clamp(1.5rem,3vw,2.5rem)] self-stretch before:absolute before:bottom-1/4 before:right-0 before:top-1/4 before:border-l before:border-border [&>span]:absolute [&>span]:left-0 [&>span]:w-full [&>span]:border-t [&>span]:border-border [&>span]:before:absolute [&>span]:before:top-[-3.5px] [&>span]:before:left-0 [&>span]:before:size-1.5 [&>span]:before:rotate-45 [&>span]:before:border-b [&>span]:before:border-l [&>span]:before:border-border [&>span:first-child]:top-1/4 [&>span:last-child]:bottom-1/4 max-[1100px]:hidden"
              aria-hidden="true"
            >
              <span />
              <span />
            </div>

            <ul className="working-section__users">
              <li className="working-section__user">
                <span
                  className="working-section__user-icon-circle"
                  aria-hidden="true"
                >
                  <UserRound size={22} strokeWidth={1.8} />
                </span>
                <div>
                  <h3 className="working-section__user-title">Developer</h3>
                  <p className="working-section__user-desc">
                    Uses CTX commands to manage and retrieve context
                  </p>
                </div>
              </li>
              <li className="working-section__user">
                <span
                  className="working-section__user-icon-circle"
                  aria-hidden="true"
                >
                  <Terminal size={22} strokeWidth={1.8} />
                </span>
                <div>
                  <h3 className="working-section__user-title">AI Agent</h3>
                  <p className="working-section__user-desc">
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
