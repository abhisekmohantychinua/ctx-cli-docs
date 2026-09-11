import ArchitectureOption from "./architecture-option";

const architectureOptions: ArchitectureOption[] = [
  {
    value: "windows-amd64",
    label: "Windows AMD64",
    archive: "ctx-windows-amd64.zip",
    extension: ".zip",
  },
  {
    value: "linux-amd64",
    label: "Linux AMD64",
    archive: "ctx-linux-amd64.tar.gz",
    extension: ".tar.gz",
  },
  {
    value: "linux-arm64",
    label: "Linux ARM64",
    archive: "ctx-linux-arm64.tar.gz",
    extension: ".tar.gz",
  },
  {
    value: "macos-amd64",
    label: "macOS AMD64",
    archive: "ctx-macos-amd64.tar.gz",
    extension: ".tar.gz",
  },
  {
    value: "macos-arm64",
    label: "macOS ARM64",
    archive: "ctx-macos-arm64.tar.gz",
    extension: ".tar.gz",
  },
];

export default architectureOptions;
