---
sidebar_position: 2
description: Create a new project task and start it immediately.
---

# ctx task add

Create a new project task and start it immediately.

## Add

### Arguments

| argument | required | description |
| --- | --- | --- |
| parent-id | no | Parent task identifier. If not provided, the task is created at the root level. |

### Options

| options | shorthand | required | description |
| --- | --- | --- | --- |
| --description | -d | | Description for this task. |
| --task | -t | Yes | Task name. |
| --help | -h | | Show this help message and exit. |
| --version | -V | | Print version information and exit. |

## What it does

Creates a new project task and immediately marks it as in progress.

It is a convenient way to start a quick task in one step: instead of running `ctx task create` and then `ctx task start`, run `ctx task add` once. It accepts the same arguments and options as [`ctx task create`](../create/).

## When to use it

Use `ctx task add` when you want to create a new task and begin working on it right away.

Use `ctx task create` instead when you want to record work that is not yet started, or when another task is already in progress and you do not want to replace it.

## How it works

The command requires that no task is currently in progress. If another task is in progress, CTX reports an error and does not create a new task. Finish that task with [`ctx task done`](../done/) or use [`ctx task create`](../create/) to plan the new task without starting it.

The new task is created exactly as `ctx task create` would create it, including the name, optional description, and optional parent task. It is then marked as in progress in the same operation, so the command returns the identifier of a task that is `IN_PROGRESS`.

The task name is required and can be provided with `--task=<task>` or entered interactively with `--task`. The description is optional and follows the same rules as `ctx task create`.

A task can be nested up to three subtask levels, and the parent task must exist. The new task receives a generated identifier using the `T` prefix.

## Examples

### Add a quick task

```bash
ctx task add --task="Fix payment retry error"
```

Creates the task and marks it as in progress.

### Add a task with a description

```bash
ctx task add --task="Fix payment retry error" --description="Retry requests time out after 10 seconds."
```

Creates the task with a description and marks it as in progress.

### Add a subtask

```bash
ctx task add T2 --task="Confirm retry behavior"
```

Creates the task under `T2` and marks it as in progress.

### Enter the task name interactively

```bash
ctx task add --task
```

Prompts for the task name before creating and starting the task.
