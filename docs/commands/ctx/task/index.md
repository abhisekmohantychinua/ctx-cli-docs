---
sidebar_position: 6
---

# ctx task

Manage project tasks.

## Task (`t`)

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

- [create, c](./create/) - Create a new project task.
- [start, st](./start/) - Start a project task.
- [complete](./complete/) - Complete a task.
- [block, b](./block/) - Mark a task as blocked.
- [update, u](./update/) - Update an existing task.
- [delete, d](./delete/) - Delete a task.
- [move, mv](./move/) - Move a task to the root or another task.
- [list, ls](./list/) - List all project tasks.
- [tree](./tree/) - List project tasks as a tree.
- [query, q](./query/) - Search tasks using filters and sorting.

## What it does

The `task` command manages project tasks.

When used without a subcommand, it shows the task currently in progress. If no task is in progress, it shows the most recently completed task. When no task records are available, it shows no task information.

The command also provides access to operations for creating, starting, completing, blocking, updating, deleting, moving, listing, and querying tasks.

## When to use it

Use `ctx task` when you want to see the task that currently represents the project's active work or the most recent completed work.

Use the task subcommands when you need to create, manage, organize, or search project tasks.

## How it works

Without a subcommand, the command displays the most relevant task available.

The output can be changed using the available view options:

- The default view shows the task in a concise human-readable format.
- `--verbose` shows additional task details.
- `--short` or `--oneline` shows a compact result.
- `--json` shows the task as JSON.
- `--pretty-json` shows the JSON output with formatting.

The view options only change how the task is presented and do not modify the task.

## Examples

### View the current task

```cmd
ctx task
```

Shows the task currently in progress, or the most recently completed task when no task is in progress.

### View the task as formatted JSON

```cmd
ctx task --pretty-json
```

Shows the selected task in formatted JSON.

### Show the available task commands

```cmd
ctx task --help
```

Displays the available task operations and output options.
