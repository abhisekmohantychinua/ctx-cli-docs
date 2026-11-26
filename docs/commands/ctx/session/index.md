---
sidebar_position: 4
description: Manage project sessions.
---

# ctx session

Manage project sessions.

## Session (`s`)

### Options

| options | shorthand | required | description |
| --- | --- | --- | --- |
| --output | -o | | Output format: `default`, `verbose`, `short`, `json`, or `pretty-json`. Defaults to `default`. |
| --help | -h | | Show this help message and exit. |
| --version | -V | | Print version information and exit. |

### Subcommands

- [start, st](./start/) - Start a new project session.
- [end, e](./end/) - End the active session.
- [update, u](./update/) - Update an existing session.
- [delete, d](./delete/) - Delete an inactive session.
- [query, q](./query/) - Search sessions using filters and sorting.

## What it does

The `session` command manages project sessions.

When used without a subcommand, it shows the active session. If no session is active, it shows the most recent session. When no session records are available, it shows nothing.

The command also gives you access to the operations for starting, ending, updating, deleting, and querying sessions.

## When to use it

Use `ctx session` when you want to see the session that represents the current or most recent project work.

Use the session subcommands when you need to manage or search individual sessions.

## How it works

Without a subcommand, the command displays the most relevant session available.

The output can be changed with `--output` (`-o`):

- `default` shows the session in a concise human-readable format.
- `verbose` shows additional session details.
- `short` shows a compact, single-line result.
- `json` shows the session as compact JSON.
- `pretty-json` shows the JSON output with formatting.

The output option only changes how the session is presented and does not modify the session.

## Examples

### View the current session

```bash
ctx session
```

Shows the active session, or the most recent session when none is active.

### View the session as formatted JSON

```bash
ctx session --output=pretty-json
```

Shows the selected session in formatted JSON.

### Show a compact session summary

```bash
ctx session -o short
```

Shows the selected session on a single line.

### Show the available session commands

```bash
ctx session --help
```

Displays the available session operations and output options.
