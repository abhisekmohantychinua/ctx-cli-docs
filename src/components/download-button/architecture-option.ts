export default interface ArchitectureOption {
  value: DownloadArchitecture;
  label: string;
  archive: string;
  extension: DownloadExtension;
}

export type DownloadArchitecture =
  | "windows-amd64"
  | "linux-amd64"
  | "linux-arm64"
  | "macos-amd64"
  | "macos-arm64";

export type DownloadExtension = ".zip" | ".tar.gz";
