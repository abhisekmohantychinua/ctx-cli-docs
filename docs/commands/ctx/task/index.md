---
sidebar_position: 6
description: Manage project tasks.
---

# ctx task

Manage project tasks.

## Task (`t`)

### Options

| options | shorthand | required | description |
| --- | --- | --- | --- |
| --output | -o | | Output format: `default`, `verbose`, `short`, `json`, or `pretty-json`. Defaults to `default`. |
| --help | -h | | Show this help message and exit. |
| --version | -V | | Print version information and exit. |

### Subcommands

- [create, c](./create/) - Create a new project task.
- [add](./add/) - Create a new task and start it immediately.
- [start, st](./start/) - Start a project task.
- [block, b](./block/) - Mark a task as blocked.
- [done](./done/) - Mark a task as done.
- [move, mv](./move/) - Move a task to the root or another task.
- [list, ls](./list/) - List all project tasks.
- [tree](./tree/) - List project tasks as a tree.
- [update, u](./update/) - Update an existing task.
- [delete, d](./delete/) - Delete a task.
- [query, q](./query/) - Search tasks using filters and sorting.

## What it does

The `task` command manages project tasks.

When used without a subcommand, it shows the task currently in progress. If no task is in progress, it shows the most recently completed task. When no task records are available, it shows no task information.

The command also gives you access to operations for creating, adding, starting, blocking, marking done, moving, listing, and querying tasks.

## When to use it

Use `ctx task` when you want to see the task that currently represents the project's active work or the most recent completed work.

Use the task subcommands when you need to create, manage, organize, or search project tasks.

## How it works

Without a subcommand, the command displays the most relevant task available.

The output can be changed with `--output` (`-o`):

- `default` shows the task in a concise human-readable format.
- `verbose` shows additional task details.
- `short` shows a compact, single-line result.
- `json` shows the task as compact JSON.
- `pretty-json` shows the JSON output with formatting.

The output option only changes how the task is presented and does not modify the task.

The [`list`](./list/) and [`tree`](./tree/) subcommands are separate structural views of the task hierarchy. They are not selected with `--output`.

## Examples

### View the current task

```bash
ctx task
```

Shows the task currently in progress, or the most recently completed task when no task is in progress.

### View the task as formatted JSON

```bash
ctx task --output=pretty-json
```

Shows the selected task in formatted JSON.

### Show a compact task summary

```bash
ctx task -o short
```

Shows the selected task on a single line.

### Show the available task commands

```bash
ctx task --help
```

Displays the available task operations and output options.
