---
sidebar_position: 4
---

# ctx session

Manage project sessions.

## Session (`s`)

### Options

| options | shorthand | required | description |
| --- | --- | --- | --- |
| --json | | | Show output in JSON format. |
| --pretty-json | | | Show formatted JSON output. |
| --short, --oneline | -s | | Show compact output. |
| --verbose | -v | | Show detailed output. |
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

The command also provides access to the operations for starting, ending, updating, deleting, and querying sessions.

## When to use it

Use `ctx session` when you want to see the session that represents the current or most recent project work.

Use the session subcommands when you need to manage or search individual sessions.

## How it works

Without a subcommand, the command displays the most relevant session available.

The view options only change how the session is presented and do not modify the session.

## Examples

### View the current session

```cmd
ctx session
```

Shows the active session, or the most recent session when none is active.

### View the session as formatted JSON

```cmd
ctx session --pretty-json
```

Shows the selected session in formatted JSON.

### Show the available session commands

```cmd
ctx session --help
```

Displays the available session operations and output options.
