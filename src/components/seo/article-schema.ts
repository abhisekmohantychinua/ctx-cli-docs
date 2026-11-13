import {
  ORGANIZATION_ID,
  PERSON_ID,
  SITE_LANGUAGE,
  WEBSITE_ID,
} from "./constants";
import type { SchemaEntity } from "./global-schema";

export interface ArticleSummary {
  title: string;
  url: string;
}

export interface ArticlesCollectionOptions {
  url: string;
  title: string;
  description: string;
  articles: ArticleSummary[];
}

export interface ArticleSchemaOptions {
  url: string;
  title: string;
  description: string;
  datePublished?: string;
  dateModified?: string;
  image?: string;
}

export function buildArticlesCollectionSchema({
  url,
  title,
  description,
  articles,
}: ArticlesCollectionOptions): SchemaEntity[] {
  const listId = `${url}#article-list`;

  return [
    {
      "@type": "CollectionPage",
      "@id": `${url}#webpage`,
      url,
      name: title,
      description,
      inLanguage: SITE_LANGUAGE,
      isPartOf: {
        "@id": WEBSITE_ID,
      },
      mainEntity: {
        "@id": listId,
      },
    },
    {
      "@type": "ItemList",
      "@id": listId,
      numberOfItems: articles.length,
      itemListElement: articles.map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "BlogPosting",
          "@id": `${article.url}#article`,
          url: article.url,
          headline: article.title,
        },
      })),
    },
  ];
}

export function buildArticleSchema({
  url,
  title,
  description,
  datePublished,
  dateModified,
  image,
}: ArticleSchemaOptions): SchemaEntity {
  return {
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    url,
    headline: title,
    description,
    inLanguage: SITE_LANGUAGE,
    isPartOf: {
      "@id": WEBSITE_ID,
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
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
    ...(image && { image }),
  };
}
