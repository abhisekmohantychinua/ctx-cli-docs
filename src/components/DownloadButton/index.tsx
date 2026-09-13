import React, { JSX, useCallback, useEffect, useRef, useState } from "react";
import clsx from "clsx";

import styles from "./styles.module.css";
import { DownloadArchitecture, DownloadExtension } from "./architecture-option";
import architectureOptions from "./architecture-options";
import { Icon } from "@iconify/react";

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

export default function DownloadButton({
  version,
  arch,
  onStateChange,
}: DownloadButtonProps): JSX.Element {
  const [selectedArchitecture, setSelectedArchitecture] =
    useState<DownloadArchitecture>(arch ?? "windows-amd64");

  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Synchronize the internal architecture with the supplied prop.
    // If no architecture is supplied, detect it on the client after hydration.
    setSelectedArchitecture(arch ?? detectArchitecture());
  }, [arch]);

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

  const handleArchitectureChange = useCallback(
    (architecture: DownloadArchitecture): void => {
      setSelectedArchitecture(architecture);
      setIsOpen(false);
    },
    [],
  );

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent): void {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        // Close the dropdown when the user clicks outside the component.
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.buttonGroup} ref={dropdownRef}>
        <a
          className={clsx("button", "button--primary", styles.downloadButton)}
          href={downloadUrl}
          aria-label={`Download CTX ${releaseLabel} for ${selectedOption.label}`}
        >
          Download
        </a>

        <button
          type="button"
          className={clsx(
            "button",
            "button--primary",
            styles.architectureButton,
          )}
          aria-haspopup="menu"
          aria-expanded={isOpen}
          aria-label={`Select architecture. Current selection: ${selectedOption.label}`}
          onClick={() => setIsOpen((currentValue) => !currentValue)}
        >
          <span className={styles.architectureValue}>
            <span className={styles.archiveExtension}>
              {selectedOption.extension}
            </span>

            <span className={styles.architectureLabel}>
              {selectedOption.label}
            </span>
          </span>

          <span
            className={clsx(styles.arrow, {
              [styles.arrowOpen]: isOpen,
            })}
            aria-hidden="true"
          >
            <Icon
              icon="mdi:chevron-down"
              width="18"
              height="18"
              aria-hidden="true"
            />
          </span>
        </button>

        {isOpen && (
          <div className={styles.dropdown} role="menu">
            {architectureOptions.map((option) => {
              const isSelected = option.value === selectedArchitecture;

              return (
                <button
                  key={option.value}
                  type="button"
                  role="menuitem"
                  className={clsx(styles.dropdownItem, {
                    [styles.dropdownItemSelected]: isSelected,
                  })}
                  onClick={() => handleArchitectureChange(option.value)}
                >
                  <span className={styles.dropdownItemMain}>
                    <span className={styles.dropdownLabel}>{option.label}</span>

                    <span className={styles.dropdownArchive}>
                      {option.archive}
                    </span>
                  </span>

                  {isSelected && (
                    <Icon
                      className={styles.checkmark}
                      icon="mdi:check"
                      width="18"
                      height="18"
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>

      <p className={styles.description}>
        Downloads {releaseLabel} for {selectedOption.label} as{" "}
        <code>{selectedOption.archive}</code>.
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
  const downloadBaseUrl = "https://ctx.mohantyabhisek.com/download";
  const params = new URLSearchParams({
    arch: architecture,
  });

  const normalizedVersion = version?.trim();

  if (normalizedVersion) {
    params.set("version", normalizedVersion);
  }

  return `${downloadBaseUrl}?${params.toString()}`;
}
