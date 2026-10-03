# Documentation Versioning Strategy

## 1. Overview

Documentation is versioned to ensure users can access information that corresponds to the product version they are using.

The documentation site will display only versions that are publicly available. Documentation for upcoming versions will be maintained separately during development and published only when the corresponding product version becomes available.

The strategy uses Docusaurus versioning to maintain separate documentation snapshots for each published version.

## 2. Version Management

Documentation versions are divided into two categories:

- **Development version:** Documentation currently being prepared for an upcoming release. It remains internal and is not accessible through the public documentation site.
- **Published version:** A finalized documentation snapshot corresponding to a publicly available product version.

Each documentation version uses the same version identifier as the product version it describes.

## 3. Version Selection

The public documentation site provides a version selector containing all published versions that are still retained.

- The latest published version is selected by default.
- Previous published versions remain accessible through the selector.
- Development versions are excluded from the public site.
- When a new version is published, it becomes the default while previous retained versions remain available.

For example, when `1.0.0` is the latest published version, the selector may contain:

```text
1.0.0  (Latest)
0.2.0
0.1.0
```

Documentation for an upcoming `1.1.0` remains internal until it is published.

## 4. Development and Publication

Documentation for an upcoming version is maintained in the working `docs/` directory. It can be updated and reviewed alongside development without affecting published documentation.

When the corresponding product version becomes available:

1. Finalize and review the working documentation.
2. Create a versioned snapshot using Docusaurus.
3. Add the snapshot to the public documentation site.
4. Set the new version as the default.
5. Verify the published site.

A snapshot is created using:

```bash
npm run docusaurus docs:version <version>
```

For example:

```bash
npm run docusaurus docs:version 1.0.0
```

The public deployment must be configured to exclude the working documentation so that unreleased content is not exposed.

## 5. Version Retention

All published documentation versions are retained by default. As the number of versions grows, older versions may be discontinued from the public documentation site.

To remove a version:

1. Remove it from `versions.json`.
2. Delete its corresponding directories from `versioned_docs/` and `versioned_sidebars/`.
3. Verify the remaining versions and build the documentation site.

Discontinuing a documentation version does not require deleting its historical content from repository history.

## 6. Core Rules

- Every published documentation version must correspond to a publicly available product version.
- Development documentation must remain separate from the public documentation site.
- Published snapshots must not be overwritten by changes to working documentation.
- The latest retained published version must be the default.
- Older versions may be removed from the public site when they are no longer required.
