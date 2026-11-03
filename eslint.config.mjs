import eslintJs from "@eslint/js";
import eslintReact from "@eslint-react/eslint-plugin";
import stylistic from "@stylistic/eslint-plugin";
import { defineConfig } from "eslint/config";
import jsdoc from "eslint-plugin-jsdoc";
import reactHooks from "eslint-plugin-react-hooks";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unicorn from "eslint-plugin-unicorn";
import globals from "globals";
import tseslint from "typescript-eslint";

const sharedPlugins = {
  "@stylistic": stylistic,
  jsdoc,
  "simple-import-sort": simpleImportSort,
  unicorn,
};

const sharedRules = {
  "no-unused-vars": "warn",

  "func-style": ["warn", "declaration", { allowArrowFunctions: true }],

  "@stylistic/semi": ["error", "always"],
  "@stylistic/quotes": ["error", "double", { avoidEscape: true }],

  "simple-import-sort/imports": "warn",
  "simple-import-sort/exports": "error",

  "unicorn/filename-case": ["error", { cases: { kebabCase: true } }],
};

export default defineConfig([
  {
    ignores: [
      "node_modules/**",
      "build/**",
      ".docusaurus/**",
      ".cache/**",
      // Vendored agent skills are upstream content, not project source.
      ".agents/**",
    ],
  },

  // JavaScript and JSX
  {
    files: ["**/*.{js,jsx,mjs,cjs}"],

    extends: [
      eslintJs.configs.recommended,
      eslintReact.configs.recommended,
      eslintReact.configs["disable-conflict-eslint-plugin-react-hooks"],
      reactHooks.configs.flat.recommended,
    ],

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },

    plugins: sharedPlugins,

    rules: sharedRules,
  },

  // TypeScript and TSX
  {
    files: ["**/*.{ts,tsx}"],

    extends: [
      eslintJs.configs.recommended,
      tseslint.configs.recommended,
      eslintReact.configs["recommended-typescript"],
      eslintReact.configs["disable-conflict-eslint-plugin-react-hooks"],
      reactHooks.configs.flat.recommended,
    ],

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },

    plugins: sharedPlugins,

    rules: {
      ...sharedRules,

      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "warn",

      "@typescript-eslint/explicit-function-return-type": "warn",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/consistent-type-imports": "warn",

      "@typescript-eslint/naming-convention": [
        "error",
        { selector: "function", format: ["camelCase", "PascalCase"] },
        {
          selector: "variable",
          format: ["camelCase", "UPPER_CASE"],
        },
        { selector: "typeLike", format: ["PascalCase"] },
      ],
    },
  },

  // Docusaurus requires these theme component directory names.
  {
    files: ["src/theme/**/*.{js,jsx,ts,tsx}"],

    rules: {
      "unicorn/filename-case": "off",
    },
  },

  // Additional JSDoc requirements for service and route files
  {
    files: ["**/*-service.ts", "**/route.ts"],

    rules: {
      "jsdoc/require-jsdoc": [
        "warn",
        {
          contexts: ["ExportNamedDeclaration > FunctionDeclaration"],
        },
      ],
      "jsdoc/require-param": "warn",
      "jsdoc/require-returns": "warn",
      "jsdoc/require-description": "warn",
      "jsdoc/check-param-names": "error",
      "jsdoc/require-param-type": "off",
      "jsdoc/require-returns-type": "off",
    },
  },
]);
