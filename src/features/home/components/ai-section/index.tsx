import "./styles.css";

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

export default function AiSection(): ReactNode {
  return (
    <section className="ai-section" aria-labelledby="ai-heading">
      <div className="ai-section__container">
        <div className="ai-section__header">
          <p className="ai-section__eyebrow">AI</p>
          <h2 id="ai-heading" className="ai-section__heading">
            Work with AI, not
            <br />
            around it
          </h2>
        </div>

        <figure className="ai-section__figure">
          <div className="ai-section__figure-block">
            <div className="ai-section__consumer">
              <span
                className="ai-section__consumer-icon-circle"
                aria-hidden="true"
              >
                <UserRoundPlus size={32} strokeWidth={1.7} />
              </span>
              <h3 className="ai-section__consumer-title">User</h3>
              <ul className="ai-section__consumer-lines">
                <li>Record Decisions</li>
                <li>Track Progress</li>
                <li>Log attempts</li>
              </ul>
            </div>

            <div className="ai-section__connector" aria-hidden="true" />

            <div className="ai-section__context">
              <h3 className="ai-section__context-heading">
                Shared Project Context
              </h3>
              <ul className="ai-section__context-items">
                {sharedContextItems.map(({ label, Icon }) => (
                  <li key={label} className="ai-section__context-item">
                    <span className="text-link" aria-hidden="true">
                      <Icon size={22} strokeWidth={1.6} />
                    </span>
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="ai-section__connector" aria-hidden="true" />

            <div className="ai-section__consumer">
              <span
                className="ai-section__consumer-icon-circle"
                aria-hidden="true"
              >
                <Terminal size={32} strokeWidth={1.7} />
              </span>
              <h3 className="ai-section__consumer-title">AI Agent</h3>
              <ul className="ai-section__consumer-lines">
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
