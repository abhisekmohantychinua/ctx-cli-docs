import {
  INSTALL_URL,
  ORGANIZATION_ID,
  PERSON_ID,
  RELEASES_URL,
  SITE_ALTERNATE_NAME,
  SITE_DESCRIPTION,
  SITE_LANGUAGE,
  SITE_NAME,
  SITE_URL,
  SOFTWARE_APPLICATION_ID,
  SOFTWARE_DESCRIPTION,
  SOFTWARE_IMAGE_URL,
  WEBSITE_ID,
} from "./constants";

export type SchemaEntity = Record<string, unknown>;

export function buildGlobalSchema(): SchemaEntity[] {
  return [
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      alternateName: SITE_ALTERNATE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: SITE_LANGUAGE,
      publisher: {
        "@id": ORGANIZATION_ID,
      },
      mainEntity: {
        "@id": SOFTWARE_APPLICATION_ID,
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": SOFTWARE_APPLICATION_ID,
      name: SITE_NAME,
      alternateName: SITE_ALTERNATE_NAME,
      description: SOFTWARE_DESCRIPTION,
      url: `${SITE_URL}/`,
      image: SOFTWARE_IMAGE_URL,
      applicationCategory: "DeveloperApplication",
      applicationSubCategory: "Command-line interface",
      operatingSystem: ["Linux", "macOS", "Windows"],
      featureList: [
        "Project tasks",
        "Project sessions",
        "Project logs",
        "Project decisions",
        "AI instructions",
      ],
      author: {
        "@id": PERSON_ID,
      },
      publisher: {
        "@id": ORGANIZATION_ID,
      },
      downloadUrl: RELEASES_URL,
      installUrl: INSTALL_URL,
    },
  ];
}

/**
 * Combines schema entities into a single JSON-LD graph.
 */
export function buildJsonLdGraph(
  ...groups: Array<SchemaEntity | SchemaEntity[]>
) {
  const graph = groups.flatMap((group) =>
    Array.isArray(group) ? group : [group],
  );

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
