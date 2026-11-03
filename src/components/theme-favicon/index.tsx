import { useColorMode } from "@docusaurus/theme-common";
import type { ReactNode } from "react";
import { useEffect } from "react";

export default function ThemeFavicon(): ReactNode {
  const { colorMode } = useColorMode();

  useEffect(() => {
    const light = document.getElementById(
      "light-theme-favicon",
    ) as HTMLLinkElement | null;

    const dark = document.getElementById(
      "dark-theme-favicon",
    ) as HTMLLinkElement | null;

    if (!light || !dark) return;

    if (colorMode === "dark") {
      light.media = "not all";
      dark.media = "all";
    } else {
      light.media = "all";
      dark.media = "not all";
    }
  }, [colorMode]);

  return null;
}
