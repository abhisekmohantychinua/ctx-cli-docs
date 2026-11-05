import clsx from "clsx";
import { ChevronDownIcon } from "lucide-react";
import { type JSX, useEffect, useState, useSyncExternalStore } from "react";

import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import type {
  DownloadArchitecture,
  DownloadExtension,
} from "./architecture-option";
import architectureOptions from "./architecture-options";

export interface DownloadButtonState {
  version?: string;
  architecture: DownloadArchitecture;
  archive: string;
  extension: DownloadExtension;
}

export interface DownloadButtonProps {
  version?: string;
  arch?: DownloadArchitecture;
  onStateChange?: (state: DownloadButtonState) => void;
}

function subscribeToBrowserArchitecture(): () => void {
  return () => {};
}

function getServerArchitecture(): DownloadArchitecture {
  return "windows-amd64";
}

export default function DownloadButton({
  version,
  arch,
  onStateChange,
}: DownloadButtonProps): JSX.Element {
  const detectedArchitecture = useSyncExternalStore(
    subscribeToBrowserArchitecture,
    detectArchitecture,
    getServerArchitecture,
  );

  const [selectedArchitecture, setSelectedArchitecture] =
    useState<DownloadArchitecture>(arch ?? detectedArchitecture);

  const [previousArch, setPreviousArch] = useState(arch);

  if (previousArch !== arch) {
    setPreviousArch(arch);
    setSelectedArchitecture(arch ?? detectedArchitecture);
  }

  // Find the complete metadata for the selected architecture.
  const selectedOption =
    architectureOptions.find(
      (option) => option.value === selectedArchitecture,
    ) ?? architectureOptions[0];

  // Notify the parent whenever the effective download state changes.
  // The trimmed version is exposed. An empty version is treated as latest.
  useEffect(() => {
    onStateChange?.({
      version: version?.trim() || undefined,
      architecture: selectedOption.value,
      archive: selectedOption.archive,
      extension: selectedOption.extension,
    });
  }, [onStateChange, selectedOption, version]);

  const downloadUrl = buildDownloadUrl(selectedOption.value, version);

  const releaseLabel = version?.trim()
    ? `version ${version.trim()}`
    : "the latest version";

  return (
    <div className="flex max-w-full flex-col items-start gap-2">
      <div className="inline-flex max-w-full items-stretch max-[480px]:w-full">
        <Button
          asChild
          className="h-12 shrink-0 rounded-r-none px-6 text-sm font-semibold text-primary-foreground! hover:text-primary-foreground!"
        >
          <a
            href={downloadUrl}
            aria-label={`Download CTX ${releaseLabel} for ${selectedOption.label}`}
          >
            Download
          </a>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              aria-label={`Select architecture. Current selection: ${selectedOption.label}`}
              className="group h-12 min-w-0 max-w-full justify-between rounded-l-none border-l border-primary-foreground/30 px-3 text-left max-[480px]:flex-1"
            >
              <span className="inline-flex min-w-0 items-center gap-2 overflow-hidden">
                <span className="shrink-0 font-mono text-xs font-semibold">
                  {selectedOption.extension}
                </span>
                <span className="truncate text-sm">{selectedOption.label}</span>
              </span>
              <ChevronDownIcon
                data-icon="inline-end"
                aria-hidden="true"
                className="transition-transform group-data-[state=open]:rotate-180 motion-reduce:transition-none"
              />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            sideOffset={8}
            className="w-max min-w-72 max-w-[calc(100vw-2rem)]"
          >
            <DropdownMenuRadioGroup
              value={selectedArchitecture}
              onValueChange={(value) => {
                const option = architectureOptions.find(
                  (item) => item.value === value,
                );
                if (option) setSelectedArchitecture(option.value);
              }}
            >
              {architectureOptions.map((option) => {
                const isSelected = option.value === selectedArchitecture;

                return (
                  <DropdownMenuRadioItem
                    key={option.value}
                    value={option.value}
                    className="min-h-12 cursor-pointer items-center justify-between gap-4 py-2 pr-3"
                  >
                    <span className="flex min-w-0 flex-col items-start gap-0.5">
                      <span
                        className={clsx(
                          "truncate text-sm font-semibold",
                          isSelected && "text-primary",
                        )}
                      >
                        {option.label}
                      </span>
                      <span className="max-w-full break-all font-mono text-xs leading-relaxed text-muted-foreground">
                        {option.archive}
                      </span>
                    </span>
                  </DropdownMenuRadioItem>
                );
              })}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <p className="m-0 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        Downloads {releaseLabel} for {selectedOption.label} as{" "}
        <code className="font-mono">{selectedOption.archive}</code>.
      </p>
    </div>
  );
}

/**
 * Returns the best available architecture guess for the current browser.
 *
 * Browser platform detection cannot always distinguish Intel and Apple
 * Silicon reliably. macOS AMD64 is used as the fallback for macOS when
 * architecture information is unavailable.
 *
 * @returns The detected architecture.
 */
function detectArchitecture(): DownloadArchitecture {
  if (typeof navigator === "undefined") {
    return "windows-amd64";
  }

  const platform = navigator.platform.toLowerCase();
  const userAgent = navigator.userAgent.toLowerCase();

  const isWindows = platform.includes("win") || userAgent.includes("windows");

  if (isWindows) {
    return "windows-amd64";
  }

  const isMac =
    platform.includes("mac") ||
    userAgent.includes("macintosh") ||
    userAgent.includes("mac os");

  if (isMac) {
    const isAppleSilicon =
      userAgent.includes("arm64") ||
      userAgent.includes("aarch64") ||
      userAgent.includes("apple silicon");

    return isAppleSilicon ? "macos-arm64" : "macos-amd64";
  }

  const isLinux = platform.includes("linux") || userAgent.includes("linux");

  if (isLinux) {
    const isArm =
      userAgent.includes("aarch64") ||
      userAgent.includes("arm64") ||
      userAgent.includes("armv8");

    return isArm ? "linux-arm64" : "linux-amd64";
  }

  return "windows-amd64";
}

/**
 * Builds the website download URL.
 *
 * The architecture parameter is always included.
 * The version parameter is included only for a non-empty version.
 *
 * @param architecture The architecture to include in the download URL.
 * @param version The version to include in the download URL, if any.
 * @returns The constructed download URL.
 */
function buildDownloadUrl(
  architecture: DownloadArchitecture,
  version?: string,
): string {
  const downloadBaseUrl = "https://mohantyabhisek.com/api/ctx/download";

  const params = new URLSearchParams({
    arch: architecture,
  });

  const normalizedVersion = version?.trim();

  if (normalizedVersion) {
    params.set("version", normalizedVersion);
  }

  return `${downloadBaseUrl}?${params.toString()}`;
}
