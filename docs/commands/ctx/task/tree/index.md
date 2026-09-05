---
sidebar_position: 10
---


# ctx task tree

List project tasks as a tree.

## Tree

### Options

| options | shorthand | required | description |
| --- | --- | --- | --- |
| --help | -h | | Show this help message and exit. |
| --version | -V | | Print version information and exit. |

## What it does

Displays all project tasks as a hierarchical tree.

Each task is shown with its identifier, task name, and current status. Parent and child relationships are represented through indentation so the structure of the project tasks is immediately visible.

## When to use it

Use `ctx task tree` when you want to understand how project tasks are organized and how subtasks relate to their parent tasks.

It is especially useful when the task hierarchy matters and a flat list does not provide enough context.

## How it works

The command starts with root-level tasks and displays their subtasks beneath them.

Each level of the hierarchy is represented by indentation, making parent-child relationships visible directly in the output.

The command only presents the existing task hierarchy and does not modify any task.

## Examples

### View the task hierarchy

```cmd
ctx task tree
```

Displays all project tasks with their hierarchy, identifiers, names, and statuses.
