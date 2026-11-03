import "./styles.css";

import type { ReactNode } from "react";

import type { FeatureItem } from ".";

type FeatureCardProps = {
  feature: FeatureItem;
};

export default function FeatureCard({ feature }: FeatureCardProps): ReactNode {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const Icon = feature.Icon;
  return (
    <>
      <span className="feature-card__icon-circle" aria-hidden="true">
        <Icon size={22} strokeWidth={1.6} />
      </span>
      <h3 className="feature-card__title">{feature.title}</h3>
      <p className="feature-card__desc">{feature.description}</p>
    </>
  );
}
