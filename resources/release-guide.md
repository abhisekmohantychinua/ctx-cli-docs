# Release Guide

## Purpose

Document product changes from the user's perspective. Help users understand what's new, what's improved, what has been fixed, and whether any action is required.

Published as **Changelog** within the public CTX documentation. A separate public Releases page is not required.

## Recommended structure

```markdown
# Changelog

## Version 1.0.0-beta.1

**Release date:** YYYY-MM-DD

### Added
- New features and capabilities.

### Improved
- Improvements to existing functionality.

### Fixed
- User-facing bug fixes.

### Breaking Changes
- Changes that may affect existing usage.

### Migration
- Required migration steps or a link to the migration guide.
```

Include only relevant sections for each release.

## What belongs where?

| Information | Public changelog | Internal release record |
| --- | :---: | :---: |
| New features and commands | ✓ | ✓ |
| Improvements | ✓ | ✓ |
| User-facing bug fixes | ✓ | ✓ |
| Breaking changes | ✓ | ✓ |
| Migration instructions | ✓ | ✓ |
| Refactoring details | — | ✓ |
| Dependency updates | If relevant | ✓ |
| Commit and PR references | Optional | ✓ |
| Testing details | Summary | Full details |
| Build and publishing steps | — | ✓ |
| Known user-facing issues | ✓ | ✓ |
| Internal follow-up work | — | ✓ |

## Writing guidelines

- Describe changes from the user's perspective.
- Explain the impact, not just the implementation.
- Clearly identify breaking changes.
- Link to migration guides when required.
- Avoid empty sections and unnecessary technical details.
- Keep older release notes accessible.

GitHub Releases should handle version tags, release assets, and distribution details.
