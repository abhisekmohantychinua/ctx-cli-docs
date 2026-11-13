import {
  ORGANIZATION_ID,
  PERSON_ID,
  SITE_LANGUAGE,
  SOFTWARE_APPLICATION_ID,
  WEBSITE_ID,
} from "./constants";
import type { SchemaEntity } from "./global-schema";

export interface DocsSchemaOptions {
  url: string;
  title: string;
  description: string;
  section?: "Documentation" | "Command Reference";
  dateModified?: string;
}

export function buildDocsSchema({
  url,
  title,
  description,
  section = "Documentation",
  dateModified,
}: DocsSchemaOptions): SchemaEntity {
  return {
    "@type": "TechArticle",
    "@id": `${url}#article`,
    url,
    headline: title,
    description,
    articleSection: section,
    inLanguage: SITE_LANGUAGE,
    isPartOf: {
      "@id": WEBSITE_ID,
    },
    about: {
      "@id": SOFTWARE_APPLICATION_ID,
    },
    mainEntityOfPage: {
      "@id": url,
    },
    author: {
      "@id": PERSON_ID,
    },
    publisher: {
      "@id": ORGANIZATION_ID,
    },
    ...(dateModified && { dateModified }),
  };
}
