---
sidebar_position: 6
---

# ctx task delete

Delete a task.

## Delete (`d`)

### Arguments

| argument | required | description |
| --- | --- | --- |
| id | yes | Task identifier. |

### Options

| options | shorthand | required | description |
| --- | --- | --- | --- |
| --help | -h | | Show this help message and exit. |
| --version | -V | | Print version information and exit. |

## What it does

Deletes the specified task and returns its identifier.

If the deleted task has subtasks, those subtasks are moved to the root level instead of being deleted with their parent.

Any references to the deleted task are also removed.

## When to use it

Use `ctx task delete` when a task should no longer be part of the project's task context.

This is a task management operation intended for removing a task in special cases rather than as part of the normal task workflow.

## How it works

The command requires the identifier of an existing task.

When the specified task exists, CTX deletes it and prints its identifier.

If the task does not exist, the command reports an error and does not modify any tasks.

Subtasks of the deleted task are preserved and moved to the root level.

References associated with the deleted task are removed as part of the deletion.

## Examples

### Delete a task

```cmd
ctx task delete T7
```

Deletes task `T7` and prints its identifier.

### Delete a task with subtasks

```cmd
ctx task delete T4
```

Deletes task `T4` while preserving its subtasks by moving them to the root level.
