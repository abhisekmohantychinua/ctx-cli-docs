import {
  SITE_DESCRIPTION,
  SITE_LANGUAGE,
  SITE_NAME,
  SITE_URL,
  SOFTWARE_APPLICATION_ID,
  WEBSITE_ID,
} from "./constants";
import type { SchemaEntity } from "./global-schema";

export function buildHomePageSchema(): SchemaEntity {
  return {
    "@type": "WebPage",
    "@id": `${SITE_URL}/#webpage`,
    url: `${SITE_URL}/`,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    inLanguage: SITE_LANGUAGE,
    isPartOf: {
      "@id": WEBSITE_ID,
    },
    about: {
      "@id": SOFTWARE_APPLICATION_ID,
    },
    mainEntity: {
      "@id": SOFTWARE_APPLICATION_ID,
    },
  };
}
