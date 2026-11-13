import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

import tailwindLoader from "./plugins/tailwind-loader.mjs";
import {
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  SOCIAL_IMAGE_ALT,
  SOCIAL_IMAGE_PATH,
} from "./src/components/seo/constants";
import {
  buildGlobalSchema,
  buildJsonLdGraph,
} from "./src/components/seo/global-schema";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: SITE_NAME,
  tagline: SITE_TAGLINE,
  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        id: "site-favicon",
        type: "image/x-icon",
        href: "/favicon.ico",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        id: "light-theme-favicon",
        type: "image/x-icon",
        href: "/favicon.ico",
        media: "(prefers-color-scheme: light)",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        id: "dark-theme-favicon",
        type: "image/x-icon",
        href: "/favicon-dark.ico",
        media: "(prefers-color-scheme: dark)",
      },
    },
    {
      tagName: "script",
      attributes: {
        type: "application/ld+json",
      },
      innerHTML: JSON.stringify(buildJsonLdGraph(buildGlobalSchema())),
    },
  ],

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: SITE_URL,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  onBrokenLinks: "throw",

  markdown: {
    mermaid: true,
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          exclude: ["**/_*.md", "**/_*.mdx"],
          showLastUpdateTime: true,
          editUrl:
            "https://github.com/abhisekmohantychinua/ctx-cli-docs/tree/main/",
        },
        blog: {
          path: "articles",
          routeBasePath: "articles",
          showReadingTime: true,
          showLastUpdateTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl:
            "https://github.com/abhisekmohantychinua/ctx-cli-docs/tree/main/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        sitemap: {
          lastmod: "date",
          changefreq: "weekly",
          priority: 0.5,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: SOCIAL_IMAGE_PATH,
    metadata: [
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:image:alt", content: SOCIAL_IMAGE_ALT },
      { name: "twitter:image:alt", content: SOCIAL_IMAGE_ALT },
      { name: "application-name", content: SITE_NAME },
      { name: "author", content: "Abhisek Mohanty" },
    ],
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      logo: {
        alt: "CTX CLI",
        src: "img/logo.png",
        srcDark: "img/logo-dark.png",
      },
      hideOnScroll: true,
      items: [
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          position: "left",
          label: "Docs",
        },
        { to: "/articles", label: "Articles", position: "left" },
        {
          type: "docsVersionDropdown",
          position: "left",
          label: "Versions",
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introduction",
              to: "/docs/introduction",
            },
            {
              label: "AI",
              to: "/docs/ai",
            },
            {
              label: "Workflows",
              to: "/docs/workflows",
            },
            {
              label: "Commands",
              to: "/docs/commands",
            },
          ],
        },
        {
          title: "Project",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/abhisekmohantychinua/ctx-cli",
            },
            {
              label: "Releases",
              href: "https://github.com/abhisekmohantychinua/ctx-cli/releases",
            },
            {
              label: "CTX CLI Skills",
              href: "https://github.com/abhisekmohantychinua/ctx-cli-skills",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Articles",
              to: "/articles",
            },
            {
              label: "Author",
              href: "https://mohantyabhisek.com",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Abhisek Mohanty. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.gruvboxMaterialLight,
      darkTheme: prismThemes.gruvboxMaterialDark,
      additionalLanguages: ["java", "powershell", "json", "bash"],
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    tailwindLoader,
    [
      "@writechoice/docusaurus-plugin-llms-txt",
      {
        generateLlmsTxt: true,
        generateLlmsFullTxt: true,
        generateMarkdownFiles: true,
        description:
          "CTX CLI is a command-line tool for working with project context from the terminal.",
      },
    ],
  ],
  themes: [
    "@docusaurus/theme-mermaid",
    [
      "@easyops-cn/docusaurus-search-local",
      {
        // Generate a content-hashed search index so browsers can
        // cache the index safely between documentation deployments.
        hashed: true,

        // CTX documentation is served from the site root.
        // This must match the Docusaurus docs routeBasePath.
        docsRouteBasePath: "/",

        // CTX documentation is written in English.
        language: ["en"],

        // Make it easier to understand where a search result came from.
        explicitSearchResultPath: true,

        // Highlight the searched terms after opening a result.
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],
};

export default config;
