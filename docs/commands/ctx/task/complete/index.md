---
sidebar_position: 3
---

# ctx task complete

Complete a task.

## Complete

### Arguments

| argument | required | description |
| --- | --- | --- |
| id | yes | Task identifier. |

### Options

| options | shorthand | required | description |
| --- | --- | --- | --- |
| --cc | | | Complete child tasks along with this task. |
| --help | -h | | Show this help message and exit. |
| --version | -V | | Print version information and exit. |

## What it does

Completes the specified task and returns the identifiers of the tasks that were completed.

Completing a task records its completion time and changes its status to `COMPLETED`.

## When to use it

Use `ctx task complete` when the work represented by a task has been finished.

Use `--cc` when the task and its child tasks have all been completed together and there is no need to start and complete each child task separately.

## How it works

The command requires the identifier of an existing task.

A task cannot be completed when it is already completed or blocked.

When `--cc` is provided, CTX also completes the child tasks of the specified task. Child tasks follow the same completion rules, so the operation fails if a child task cannot be completed.

Completing child tasks does not require them to be started first. This is useful when several small child tasks are completed together as part of the work on their parent task.

The command returns all task identifiers that were completed, including the specified task and any child tasks completed with it.

:::warning
Use `--cc` primarily for simple task structures where the parent and its child tasks are completed together.

For complex work, completing child tasks explicitly can provide a more accurate record of which tasks were actually started and completed.
:::

## Examples

### Complete a task

```cmd
ctx task complete T4
```

Completes task `T4` and prints its identifier.

### Complete a task and its child tasks

```cmd
ctx task complete T4 --cc
```

Completes task `T4` along with its child tasks and prints all completed task identifiers.

### Complete a small group of child tasks together

```cmd
ctx task complete T1 --cc
```

Completes the specified task and its child tasks in one operation.
