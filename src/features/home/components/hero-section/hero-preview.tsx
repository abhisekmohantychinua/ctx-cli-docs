import { FileJson } from "lucide-react";
import { type ReactNode } from "react";

const contextFiles = [
  "config.json",
  "sessions.json",
  "tasks.json",
  "logs.json",
  "decisions.json",
];
const banner = `   ____ _______  __   ____ _     ___ 
  / ___|_   _\\ \\/ /  / ___| |   |_ _|
 | |     | |  \\  /  | |   | |    | | 
 | |___  | |  /  \\  | |___| |___ | | 
  \\____| |_| /_/\\_\\  \\____|_____|___|
                                     `;

export default function HeroPreview(): ReactNode {
  return (
    <div className="hero-preview">
      <figure className="hero-preview__terminal">
        <figcaption className="sr-only">
          A CTX terminal session reporting “Project context loaded”, alongside
          the .ctx files it manages: config.json, sessions.json, tasks.json,
          logs.json, and decisions.json.
        </figcaption>

        <div className="hero-preview__terminal-window" aria-hidden="true">
          <span className={"size-[0.55rem] rounded-full bg-[#ff5f57]"} />
          <span className={"size-[0.55rem] rounded-full bg-[#febc2e]"} />
          <span className={"size-[0.55rem] rounded-full bg-[#28c840]"} />
        </div>

        <div className="hero-preview__terminal-content" aria-hidden="true">
          <div className="hero-preview__terminal-command">
            <span className="text-muted-foreground">&gt;</span>
            <span>ctx</span>
          </div>

          <pre className="hero-preview__terminal-output">
            <p>Project context loaded</p>
            {banner}
            <p>ctx v0.1.0-SNAPSHOT</p>
            <p>
              Project execution context for developers and AI.
              <br />
              Keep your sessions, tasks, logs, and decisions together
              <br />
              as persistent context for your work.
            </p>
            <p>
              For more information on how to use CTX CLI, visit:{" "}
              https://ctx.mohantyabhisek.com/docs/
              <br />
              Run &quot;ctx --help&quot; for usage information.
            </p>
          </pre>
        </div>
      </figure>

      <div className="hero-preview__context">
        <div className="hero-preview__context-window" aria-hidden="true">
          <span className={"size-[0.55rem] rounded-full bg-[#ff5f57]"} />
          <span className={"size-[0.55rem] rounded-full bg-[#febc2e]"} />
          <span className={"size-[0.55rem] rounded-full bg-[#28c840]"} />
        </div>

        <ul
          className="hero-preview__context-files"
          aria-label="Files stored in the .ctx directory"
        >
          {contextFiles.map((file) => (
            <li key={file} className="hero-preview__context-file">
              <FileJson aria-hidden="true" size={14} strokeWidth={1.8} />
              <span>{file}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
