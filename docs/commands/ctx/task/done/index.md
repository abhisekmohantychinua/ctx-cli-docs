---
sidebar_position: 5
description: Mark a task as done.
---

# ctx task done

Mark a task as done.

## Done

### Arguments

| argument | required | description |
| --- | --- | --- |
| id | yes | Task identifier. |

### Options

| options | shorthand | required | description |
| --- | --- | --- | --- |
| --cc | | | Mark child tasks as done along with this task. |
| --help | -h | | Show this help message and exit. |
| --version | -V | | Print version information and exit. |

## What it does

Marks the specified task as done and returns the identifiers of the tasks that were marked done.

Marking a task as done records its completion time and changes its status to `COMPLETED`.

## When to use it

Use `ctx task done` when the work represented by a task has been finished.

Use `--cc` when the task and its child tasks are all finished together and there is no need to start and mark each child task done separately.

## How it works

The command requires the identifier of an existing task.

A task cannot be marked as done when it is already completed or blocked.

When `--cc` is provided, CTX also marks the child tasks of the specified task as done. Child tasks follow the same rules, so the operation fails if a child task cannot be marked as done.

Child tasks do not need to be started first. This is useful when several small child tasks are finished together as part of the work on their parent task.

The command returns all task identifiers that were marked done, including the specified task and any child tasks completed with it.

:::warning
Use `--cc` primarily for simple task structures where the parent and its child tasks are finished together.

For complex work, marking child tasks as done explicitly can provide a more accurate record of which tasks were actually started and finished.
:::

## Examples

### Mark a task as done

```bash
ctx task done T4
```

Marks task `T4` as done and prints its identifier.

### Mark a task and its child tasks as done

```bash
ctx task done T4 --cc
```

Marks task `T4` and its child tasks as done and prints all completed task identifiers.

### Mark a small group of child tasks as done together

```bash
ctx task done T1 --cc
```

Marks the specified task and its child tasks as done in one operation.
