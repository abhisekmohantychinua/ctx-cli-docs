import Head from "@docusaurus/Head";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import OriginalMetadata from "@theme-original/DocItem/Metadata";
import { type ReactNode } from "react";

import { buildDocSchema } from "../../../components/seo/site-schema";

export default function DocItemMetadata(): ReactNode {
  const { metadata, frontMatter } = useDoc();
  const schema = buildDocSchema({
    title: metadata.title,
    description: metadata.description,
    permalink: metadata.permalink,
    lastUpdatedAt: metadata.lastUpdatedAt,
    isCommand: metadata.permalink.startsWith("/docs/commands/"),
    keywords: frontMatter.keywords,
  });

  return (
    <>
      <OriginalMetadata />
      <Head>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Head>
    </>
  );
}
