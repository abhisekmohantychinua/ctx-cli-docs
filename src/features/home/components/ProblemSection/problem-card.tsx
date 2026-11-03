import { ReactNode } from "react";
import { ProblemItem } from ".";
import "./styles.css";

type ProblemCardProps = {
  problem: ProblemItem;
};

export default function ProblemCard({ problem }: ProblemCardProps): ReactNode {
  const Icon = problem.Icon;
  return (
    <article className="problem-card">
      <span className="problem-card__icon-box" aria-hidden="true">
        <Icon size={16} strokeWidth={1.9} />
      </span>
      <h3 className="problem-card__title">{problem.title}</h3>
      <p className="problem-card__description">{problem.description}</p>
    </article>
  );
}
