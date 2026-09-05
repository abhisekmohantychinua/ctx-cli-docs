---
sidebar_position: 9
---


# ctx task list

List all project tasks.

## List (`ls`)

### Options

| options | shorthand | required | description |
| --- | --- | --- | --- |
| --help | -h | | Show this help message and exit. |
| --version | -V | | Print version information and exit. |

## What it does

Lists all tasks in the project as a flat list.

Each task is shown with its identifier, status, and task name.

## When to use it

Use `ctx task list` when you want to see all project tasks at once without the hierarchy between parent tasks and subtasks.

It is useful when you need a simple overview of the tasks regardless of where they are located in the task hierarchy.

## How it works

The command displays every task in a flat view.

Parent-child relationships are not represented in the output. Each task is displayed independently with its identifier, current status, and task name.

The command does not filter, paginate, or otherwise modify the task list.

## Examples

### List all project tasks

```cmd
ctx task list
```

Displays all project tasks in a flat list with their identifiers, statuses, and task names.

### Use the `ls` alias

```cmd
ctx task ls
```

Displays the same task list using the command alias.
