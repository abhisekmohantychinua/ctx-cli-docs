import { type ReactNode } from "react";
import { FileJson } from "lucide-react";

const contextFiles = [
  "config.json",
  "sessions.json",
  "tasks.json",
  "logs.json",
  "decisions.json",
];

const windowDot = "size-[0.55rem] rounded-full";

export default function HeroPreview(): ReactNode {
  return (
    <div className="relative mx-auto mt-[clamp(2.5rem,5vw,3.75rem)] w-full max-w-[50rem]">
      <figure className="m-0 w-[82%] overflow-hidden rounded-terminal border border-home-border bg-[color-mix(in_srgb,var(--card)_88%,var(--background))] shadow-home max-[760px]:w-full">
        <figcaption className="sr-only">
          A CTX terminal session reporting “Project context loaded”, alongside
          the .ctx files it manages: config.json, sessions.json, tasks.json,
          logs.json, and decisions.json.
        </figcaption>

        <div
          className="flex items-center gap-[0.4rem] border-b border-home-border bg-[color-mix(in_srgb,var(--primary)_4%,var(--card))] px-[0.9rem] py-[0.7rem]"
          aria-hidden="true"
        >
          <span className={`${windowDot} bg-[#ff5f57]`} />
          <span className={`${windowDot} bg-[#febc2e]`} />
          <span className={`${windowDot} bg-[#28c840]`} />
        </div>

        <div
          className="p-[clamp(0.9rem,2vw,1.35rem)]"
          aria-hidden="true"
        >
          <div className="flex items-center gap-2 rounded-[0.4rem] border border-home-border bg-[color-mix(in_srgb,var(--background)_70%,var(--card))] px-[0.7rem] py-[0.55rem] font-mono text-[0.75rem] text-foreground">
            <span className="text-muted-foreground">&gt;</span>
            <span>ctx</span>
          </div>

          <p className="mb-0 mt-[0.9rem] inline-block border-b border-[color-mix(in_srgb,var(--chart-2)_35%,transparent)] pb-[0.3rem] font-mono text-fine leading-[1.3] text-chart-2">
            Project context loaded
          </p>

          <pre className="my-[0.9rem] overflow-hidden font-mono text-[clamp(0.3rem,1.45vw,0.6rem)] leading-[1.12] whitespace-pre text-[color-mix(in_srgb,var(--foreground)_16%,transparent)] [-webkit-text-stroke:1px_color-mix(in_srgb,var(--foreground)_26%,transparent)] select-none">
            {` ██████╗████████╗██╗  ██╗     ██████╗██╗     ██╗
██╔════╝╚══██╔══╝╚██╗██╔╝    ██╔════╝██║     ██║
██║        ██║    ╚███╔╝     ██║     ██║     ██║
██║        ██║    ██╔██╗     ██║     ██║     ██║
╚██████╗   ██║   ██╔╝ ██╗    ╚██████╗███████╗██║
 ╚═════╝   ╚═╝   ╚═╝  ╚═╝     ╚═════╝╚══════╝╚═╝`}
          </pre>

          <div className="grid gap-[0.55rem] font-mono text-[clamp(0.5rem,0.9vw,0.65rem)] leading-[1.55] text-muted-foreground [&_p]:m-0">
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
          </div>
        </div>
      </figure>

      <div className="absolute right-0 top-[2.75rem] w-[min(37%,15.5rem)] overflow-hidden rounded-card border border-home-border bg-[color-mix(in_srgb,var(--card)_92%,var(--background))] shadow-home max-[760px]:relative max-[760px]:right-auto max-[760px]:top-auto max-[760px]:mx-auto max-[760px]:mt-4 max-[760px]:w-[min(100%,22rem)]">
        <div
          className="flex items-center gap-[0.4rem] border-b border-home-border bg-[color-mix(in_srgb,var(--primary)_4%,var(--card))] px-[0.78rem] py-[0.62rem]"
          aria-hidden="true"
        >
          <span className={`${windowDot} bg-[#ff5f57]`} />
          <span className={`${windowDot} bg-[#febc2e]`} />
          <span className={`${windowDot} bg-[#28c840]`} />
        </div>

        <ul
          className="m-0 grid list-none gap-[0.55rem] p-[0.85rem]"
          aria-label="Files stored in the .ctx directory"
        >
          {contextFiles.map((file) => (
            <li
              key={file}
              className="flex items-center gap-2 font-mono text-fine text-foreground [&_svg]:shrink-0 [&_svg]:text-link"
            >
              <FileJson aria-hidden="true" size={14} strokeWidth={1.8} />
              <span>{file}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
