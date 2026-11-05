import type { WrapperProps } from "@docusaurus/types";
import type LayoutType from "@theme/Layout";
import Layout from "@theme-original/Layout";
import React, { type ReactNode } from "react";

import ThemeFavicon from "@/src/components/theme-favicon";

type Props = WrapperProps<typeof LayoutType>;

export default function LayoutWrapper(props: Props): ReactNode {
  return (
    <>
      <Layout {...props}>
        <ThemeFavicon />
        {props.children}
      </Layout>
    </>
  );
}
