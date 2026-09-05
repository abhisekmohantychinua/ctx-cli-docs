---
sidebar_position: 8
---

# ctx task move

Move a task to the root or another task.

## Move (`mv`)

### Arguments

| argument | required | description |
| --- | --- | --- |
| id | yes | Task identifier. |
| parent-id | no | Parent task identifier. If not provided, the task is moved to the root level. |

### Options

| options | shorthand | required | description |
| --- | --- | --- | --- |
| --help | -h | | Show this help message and exit. |
| --version | -V | | Print version information and exit. |

## What it does

Moves an existing task to a different location in the task hierarchy.

When a parent task is provided, the task becomes a subtask of that parent. When no parent is provided, the task is moved to the root level.

## When to use it

Use `ctx task move` when the structure of your tasks changes and a task should belong under a different parent.

It can also be used to move a task back to the root level when it is no longer part of another task.

## How it works

The command requires the identifier of the task to move.

When a parent identifier is provided, CTX verifies that both the task and the parent task exist before moving the task.

When no parent identifier is provided, the task is moved to the root level.

A move is rejected when it would exceed the maximum supported subtask depth.

A move is also rejected when it would create a cycle in the task hierarchy.

The task itself is moved without changing its other task information.

## Examples

### Move a task under another task

```cmd
ctx task move T7 T2
```

Moves task `T7` to become a subtask of `T2`.

### Move a task to the root

```cmd
ctx task move T7
```

Moves task `T7` to the root level.

### Move a task to another parent

```cmd
ctx task move T7 T4
```

Moves task `T7` from its current location to become a subtask of `T4`.
