export const SITE_URL = "https://ctx.mohantyabhisek.com";
export const SITE_NAME = "CTX CLI";
export const SITE_TAGLINE = "Persistent project context for developers and AI";

export const SITE_DESCRIPTION =
  "The official website of CTX CLI, a command-line tool for maintaining shared project execution context between software developers and AI coding agents.";

export const SOFTWARE_DESCRIPTION =
  "CTX CLI is a command-line tool for maintaining persistent project execution context, including tasks, sessions, logs, decisions, and AI instructions, so software developers and AI coding agents can work with shared project awareness.";

export const SOCIAL_IMAGE_PATH = "img/ctx-cli-social-card.png";
export const SOCIAL_IMAGE_URL = `${SITE_URL}/${SOCIAL_IMAGE_PATH}`;
export const SOCIAL_IMAGE_WIDTH = 1200;
export const SOCIAL_IMAGE_HEIGHT = 630;
export const SOCIAL_IMAGE_ALT =
  "CTX CLI — persistent project context for developers and AI";

export const SOFTWARE_IMAGE_URL = `${SITE_URL}/img/logo.png`;

export const GITHUB_REPOSITORY_URL =
  "https://github.com/abhisekmohantychinua/ctx-cli";
export const GITHUB_RELEASES_URL = `${GITHUB_REPOSITORY_URL}/releases`;

export const ORGANIZATION_URL = "https://mohantyabhisek.com";
export const ORGANIZATION_ID = `${ORGANIZATION_URL}/#organization`;
export const PERSON_ID = `${ORGANIZATION_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const SOFTWARE_APPLICATION_ID = `${SITE_URL}/#software`;

type JsonLd = Record<string, unknown>;

type DocSchemaInput = {
  title: string;
  description: string;
  permalink: string;
  lastUpdatedAt?: number | null;
  isCommand?: boolean;
};

function toAbsoluteUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}

/**
 * Builds the site-wide Organization, Person, WebSite, and SoftwareApplication
 * entities injected into every page.
 */
export function buildSiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORGANIZATION_ID,
        name: "Abhisek",
        url: ORGANIZATION_URL,
        logo: `${ORGANIZATION_URL}/logo-transparent-512x512.png`,
        description:
          "Custom website development, web applications, and business systems built with clarity, purpose, and a deep understanding of business goals.",
        founder: { "@id": PERSON_ID },
        sameAs: [
          "https://www.linkedin.com/in/mohanty-abhisek",
          "https://www.instagram.com/coderabhisek",
        ],
      },
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: "Abhisek Mohanty",
        jobTitle: "Website & Web App Consultant",
        url: ORGANIZATION_URL,
        sameAs: ["https://github.com/abhisekmohantychinua"],
        worksFor: { "@id": ORGANIZATION_ID },
      },
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
        downloadUrl: GITHUB_RELEASES_URL,
        codeRepository: GITHUB_REPOSITORY_URL,
        sameAs: [GITHUB_REPOSITORY_URL],
        featureList: [
          "Project tasks",
          "Project sessions",
          "Project logs",
          "Project decisions",
          "AI instructions",
        ],
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        author: {
          "@id": PERSON_ID,
        },
        publisher: {
          "@id": ORGANIZATION_ID,
        },
        isPartOf: { "@id": WEBSITE_ID },
      },
    ],
  };
}

/**
 * Builds the homepage WebPage entity and links it to the site and product.
 */
export function buildHomePageSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/#webpage`,
    url: `${SITE_URL}/`,
    name: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": SOFTWARE_APPLICATION_ID },
    mainEntity: { "@id": SOFTWARE_APPLICATION_ID },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: SOCIAL_IMAGE_URL,
      width: SOCIAL_IMAGE_WIDTH,
      height: SOCIAL_IMAGE_HEIGHT,
      caption: SOCIAL_IMAGE_ALT,
    },
    inLanguage: "en",
  };
}

/**
 * Builds the TechArticle entity for a documentation or command page.
 */
export function buildDocSchema(input: DocSchemaInput): JsonLd {
  const url = toAbsoluteUrl(input.permalink);
  const schema: JsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${url}#article`,
    headline: input.title,
    name: input.title,
    description: input.description || SITE_DESCRIPTION,
    url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": SOFTWARE_APPLICATION_ID },
    image: SOCIAL_IMAGE_URL,
    author: { "@id": PERSON_ID },
    publisher: { "@id": ORGANIZATION_ID },
    inLanguage: "en",
  };

  if (input.lastUpdatedAt) {
    schema.dateModified = new Date(input.lastUpdatedAt).toISOString();
  }

  if (input.isCommand) {
    schema.audience = {
      "@type": "Audience",
      audienceType: "Software developers",
    };
  }

  return schema;
}
