export const SITE_URL = "https://ctx.mohantyabhisek.com";
export const SITE_NAME = "CTX CLI";
export const SITE_TAGLINE = "Persistent project context for developers and AI";

export const SITE_DESCRIPTION =
  "The official website of CTX CLI, a command-line tool for maintaining shared project execution context between software developers and AI coding agents.";

export const SOFTWARE_DESCRIPTION =
  "CTX CLI is a command-line tool for maintaining persistent project execution context, including tasks, sessions, logs, decisions, and AI instructions, so software developers and AI coding agents can work with shared project awareness.";

export const SOFTWARE_IMAGE_URL = `${SITE_URL}/img/logo.png`;

export const GITHUB_REPOSITORY_URL =
  "https://github.com/abhisekmohantychinua/ctx-cli";

export const ORGANIZATION_URL = "https://mohantyabhisek.com";
export const ORGANIZATION_ID = `${ORGANIZATION_URL}/#organization`;
export const PERSON_ID = `${ORGANIZATION_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const SOFTWARE_APPLICATION_ID = `${SITE_URL}/#software`;

type JsonLd = Record<string, unknown>;

/**
 * Builds the site-wide WebSite and SoftwareApplication
 * entities as a single JSON-LD graph.
 */
export function buildSiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: `${SITE_URL}/`,
        name: SITE_NAME,
        alternateName: "ctx",
        description: SITE_DESCRIPTION,
        inLanguage: "en",
        publisher: {
          "@id": ORGANIZATION_ID,
        },
        mainEntity: {
          "@id": SOFTWARE_APPLICATION_ID,
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": SOFTWARE_APPLICATION_ID,
        name: SITE_NAME,
        alternateName: "ctx",
        description: SOFTWARE_DESCRIPTION,
        url: `${SITE_URL}/`,
        image: SOFTWARE_IMAGE_URL,
        applicationCategory: "DeveloperApplication",
        applicationSubCategory: "Command-line interface",
        operatingSystem: "Linux, macOS, Windows",
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
      },
    ],
  };
}
