import React, { type ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { Icon } from "@iconify/react";
import type { Props } from "@theme/PaginatorNavLink";

export default function PaginatorNavLink(props: Props): ReactNode {
  const { permalink, title, subLabel, isNext } = props;

  return (
    <Link
      className={clsx(
        "pagination-nav__link",
        isNext ? "pagination-nav__link--next" : "pagination-nav__link--prev",
      )}
      to={permalink}
    >
      {subLabel && (
        <div className="pagination-nav__sublabel">
          {!isNext && (
            <Icon
              icon="lucide:arrow-left"
              className="pagination-icon"
              aria-hidden="true"
            />
          )}

          {subLabel}

          {isNext && (
            <Icon
              icon="lucide:arrow-right"
              className="pagination-icon"
              aria-hidden="true"
            />
          )}
        </div>
      )}

      <div className="pagination-nav__label">{title}</div>
    </Link>
  );
}
