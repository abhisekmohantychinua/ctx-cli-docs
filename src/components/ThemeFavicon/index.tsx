import { useEffect } from "react";
import { useColorMode } from "@docusaurus/theme-common";

export default function ThemeFavicon() {
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
