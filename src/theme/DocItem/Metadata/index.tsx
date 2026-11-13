import Head from "@docusaurus/Head";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import OriginalMetadata from "@theme-original/DocItem/Metadata";
import { type ReactNode } from "react";

import { SITE_URL } from "@/src/components/seo/constants";
import { buildDocsSchema } from "@/src/components/seo/docs-schema";
import {
  buildGlobalSchema,
  buildJsonLdGraph,
} from "@/src/components/seo/global-schema";

export default function DocItemMetadata(): ReactNode {
  const { metadata, frontMatter } = useDoc();

  const frontMatterData = frontMatter as Record<string, unknown>;

  const section =
    frontMatterData.schemaSection === "Command Reference"
      ? "Command Reference"
      : "Documentation";

  const url = new URL(metadata.permalink, SITE_URL).toString();

  const schema = buildJsonLdGraph(
    buildGlobalSchema(),
    buildDocsSchema({
      url,
      title: metadata.title,
      description: metadata.description,
      section,
      dateModified: metadata.lastUpdatedAt
        ? new Date(metadata.lastUpdatedAt).toISOString()
        : undefined,
    }),
  );

  return (
    <>
      <OriginalMetadata />
      <Head>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Head>
    </>
  );
}
