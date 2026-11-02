import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const rootDir = path.dirname(fileURLToPath(import.meta.url));

export default function () {
  return {
    name: "tailwind-plugin",

    configureWebpack() {
      return {
        resolve: {
          alias: {
            "@": path.resolve(rootDir, ".."),
          },
        },
      };
    },

    configurePostCss(postcssOptions) {
      postcssOptions.plugins = [require("@tailwindcss/postcss")];

      return postcssOptions;
    },
  };
}
