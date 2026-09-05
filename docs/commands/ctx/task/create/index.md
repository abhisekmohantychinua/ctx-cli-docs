---
sidebar_position: 1
---


# ctx task create

Create a new project task.

## Create (`c`)

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

Creates a new project task and returns its generated identifier.

A task is created with `PENDING` status and no subtasks. When a parent task is provided, the new task is created as a subtask of that task.

## When to use it

Use `ctx task create` when you want to record a new piece of work in the project context.

Create the task at the root level when it represents an independent piece of work. Provide a parent task when the new task belongs under an existing task.

## How it works

The task name is required and can be provided directly with `--task=<task>` or entered interactively with `--task`.

The description is optional and can be provided directly with `--description=<description>` or entered interactively with `--description`.

If a parent identifier is provided, CTX verifies that the parent task exists before creating the new task.

A task can be nested up to three subtask levels. Creating a task below the maximum supported depth is rejected.

The task receives a generated identifier using the `T` prefix. See [Identifier](../../../../internals/identifier/) for more information about identifier generation.

Every newly created task starts with `PENDING` status and an empty list of subtasks.

## Examples

### Create a root task

```cmd
ctx task create --task="Implement payment retry"
```

Creates a new task at the root level.

### Create a task with a description

```cmd
ctx task create --task="Implement payment retry" --description="Add retry handling for failed payment requests."
```

Creates a root task with the specified description.

### Create a subtask

```cmd
ctx task create T2 --task="Define service layer for business logic"
```

Creates the new task as a subtask of `T2`.

### Enter the task interactively

```cmd
ctx task create --task
```

Prompts for the task name before creating it.

### Enter the task and description interactively

```cmd
ctx task create --task --description
```

Prompts for both the task name and its description before creating it.
