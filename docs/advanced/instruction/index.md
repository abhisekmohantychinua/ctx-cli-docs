---
sidebar_position: 1
---

# Instruction

Instructions are the static project knowledge that tells an AI agent how the project should be understood and worked on.

Unlike sessions, tasks, logs, and decisions, instructions are not execution state. They describe the rules, conventions, constraints, and expectations that should remain available across different working sessions and AI agents.

## Why Instructions Matter

AI agents are effective at working with a project, but they do not automatically know the project's conventions or decisions.

A project may have rules such as:

- Which technologies and frameworks should be used
- How the codebase is structured
- Which architectural patterns should be followed
- Which coding conventions should be followed
- Which approaches should be avoided
- What constraints the project has
- How particular parts of the system are expected to work

Without these instructions, an AI agent may repeatedly rediscover or infer this information. Worse, it may make a technically valid change that does not fit the project's established way of working.

Instructions provide this information explicitly.

They give an AI agent a stable project-level reference that is separate from the project's changing execution context.

## Instructions and Execution Context

CTX maintains two different kinds of project knowledge.

### Instructions

Instructions describe **how the project should be worked on**.

Examples:

- Use Java 25.
- Use Gradle for builds.
- Follow the repository's service-layer architecture.
- Do not introduce a database dependency.
- Keep commands compatible with the existing CLI conventions.

### Execution Context

Execution context describes **what is currently happening in the project**.

Examples:

- The current session is working on authentication.
- A task is blocked because a test is failing.
- A decision was made to use a particular implementation.
- A recent log records an attempted approach.

This distinction is important.

Instructions are relatively stable project knowledge, while sessions, tasks, logs, and decisions evolve as work progresses.

## Instruction Files

CTX does not store instructions inside the `.ctxcli` execution data.

Instead, instructions are written to a Markdown file in the project.

This keeps static project knowledge independent from dynamic execution state.

For example:

```text
project/
├── .ctxcli/
│   ├── metadata.json
│   ├── sessions.json
│   ├── tasks.json
│   ├── logs.json
│   └── decisions.json
│
└── instructions.md
```

The instruction file can be committed to the repository and shared with other developers and AI agents.

## Working with AI Agents

AI coding agents commonly support project-specific instruction files.

These files are read by the agent as part of its project context and influence how it performs its work.

Different environments use different instruction file conventions.

CTX's instruction command provides presets for supported environments so that the same project knowledge can be placed where the selected environment expects it.

Supported presets include:

| Preset | Instruction File |
| --- | --- |
| `firebase` | `airrules.md` |
| `copilot` | `.github/copilot-instructions.md` |
| `cursor` | `.cursor/rules/instructions.md` |
| `jetbrains` | `.junie/guidelines.md` |
| `vscode` | `.instructions.md` |
| `windsurf` | `.windsurf/rules/instructions.md` |
| `codex` | `AGENTS.md` |
| `claude` | `CLAUDE.md` |

The exact location is selected by the environment preset.

This allows project instructions to become part of the normal working context of an AI agent without requiring CTX itself to remain running.

## Generating Instructions

The `instruction` command generates project instructions and writes them to a Markdown file.

```bash
ctx generate instruction
```

The command requires either an instruction preset or a custom path.

### Using a Preset

A preset selects the appropriate instruction file for an AI environment.

For example:

```bash
ctx generate instruction --preset codex
```

This writes the generated instructions to:

```text
AGENTS.md
```

Another example:

```bash
ctx generate instruction --preset cursor
```

This writes the instructions to:

```text
.cursor/rules/instructions.md
```

### Using a Custom Path

Instructions can also be written to a specific relative Markdown path.

```bash
ctx generate instruction --path docs/instructions.md
```

The path must be relative and must end with `.md`.

This allows users to control where the generated instructions are stored instead of relying on a predefined environment.

## Presets

A preset is a convenient way to select an instruction destination.

The currently supported presets are:

```text
firebase
copilot
cursor
jetbrains
vscode
windsurf
codex
claude
```

Each preset maps to a predefined instruction file location.

The generated file path is determined by the selected preset.

## Custom Paths

A custom path provides full control over the destination.

For example:

```bash
ctx instruction --path instructions.md
```

or:

```bash
ctx instruction --path docs/ai/project-instructions.md
```

The path must:

- Be relative to the project
- End with `.md`
- Not navigate outside the project using `..`
- Not exceed the supported path length

CTX creates missing parent directories when necessary.

## Updating an Existing Instruction File

If the target instruction file already exists, CTX does not overwrite it by default.

Instead, the newly generated instructions are appended to the existing content.

A Markdown divider separates the existing content from the newly generated instructions:

```markdown
Existing instructions...

---

Newly generated instructions...
```

This allows existing project-specific instructions to remain intact.

---

## Overwriting Instructions

To replace the existing instruction file completely, use `--overwrite`.

```bash
ctx generate instruction --preset codex --overwrite
```

With `--overwrite`, the existing content is replaced by the generated instructions.

This gives the user explicit control over whether generated instructions should be appended or replace the existing file.

## Instruction Generation

CTX obtains the instruction content from its configured instruction source and writes the returned Markdown to the selected destination.

The generated content is not embedded into the CTX executable.

The command therefore has two distinct responsibilities:

1. Determine where the instructions should be written.
2. Retrieve and persist the instruction content.

The resulting file is an ordinary Markdown file and can be inspected, edited, committed, or shared like any other project documentation.

## Instruction Command Options

| Option | Required | Type | Description |
| --- | --- | --- | --- |
| `--preset` | No* | String | Selects a supported AI environment preset. |
| `--path` | No* | Path | Relative Markdown file path where instructions should be written. |
| `--overwrite` | No | Boolean | Replaces the existing instruction file instead of appending to it. |

Either `--preset` or `--path` must be provided.

## Generated Instructions and CTX Context

Instructions complement CTX's dynamic execution context.

A typical project can therefore contain:

```text
Project
│
├── Static project knowledge
│   └── instructions.md
│
└── Dynamic execution context
    └── .ctxcli/
        ├── metadata.json
        ├── sessions.json
        ├── tasks.json
        ├── logs.json
        └── decisions.json
```

The two layers answer different questions.

**Instructions:**

> How should this project be worked on?

**Execution context:**

> What has been happening in this project?

Together they provide an AI agent with both the stable rules of the project and its current execution state.

## Instructions in Context Export

Instruction files are part of the broader project context and can be included when context is exported.

This allows static project knowledge to accompany the dynamic information maintained by CTX when context is prepared for external use.

## When to Use Instructions

Instructions are particularly useful when a project has knowledge that should persist across sessions.

Good candidates include:

- Architecture rules
- Technology constraints
- Coding standards
- Naming conventions
- Testing requirements
- Design decisions that should remain stable
- Repository conventions
- Development workflows
- AI-specific working guidelines

They should describe stable expectations rather than temporary execution details.

For example, a task such as:

> Fix the authentication test failing on CI.

belongs in the execution context.

A rule such as:

> Authentication must be implemented through the project's existing service layer.

belongs in instructions.

## Instruction Command

The command is available through:

```bash
ctx generate instruction
```

It can also be invoked through its short alias:

```bash
ctx g i
```

The command supports both environment presets and custom paths.

Examples:

```bash
ctx g i --preset codex
```

```bash
ctx g i --preset claude
```

```bash
ctx g i --preset cursor
```

```bash
ctx g i --path instructions.md
```

To replace an existing file:

```bash
ctx g i --preset codex --overwrite
```

---

## Summary

Instructions provide CTX with a place for **stable project knowledge** that should guide humans and AI agents across working sessions.

They are:

- Project-specific
- Persistent
- Human-readable
- Independent from execution state
- Compatible with AI development environments
- Controllable through presets or custom paths
- Stored as ordinary Markdown files

CTX's instruction command makes this knowledge easy to generate and place where the selected AI environment can use it.
