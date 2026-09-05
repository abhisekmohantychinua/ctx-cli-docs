---
sidebar_position: 4
---


# ctx task block

Mark a task as blocked.

## Block (`b`)

### Arguments

| argument | required | description |
| --- | --- | --- |
| id | yes | Task identifier. |

### Options

| options | shorthand | required | description |
| --- | --- | --- | --- |
| --reason | -r | | Reason describing why this task is blocked. |
| --help | -h | | Show this help message and exit. |
| --version | -V | | Print version information and exit. |

## What it does

Marks the specified task as `BLOCKED`.

A block reason can be recorded with the task to explain why the work cannot currently proceed.

## When to use it

Use `ctx task block` when work on a task cannot proceed because it is waiting on something else, such as a missing dependency, unresolved issue, or external decision.

Provide a reason when the cause of the block is useful for understanding what needs to happen before the task can continue.

## How it works

The command requires the identifier of an existing task.

A task can be blocked regardless of its current status.

The block reason is optional and can be provided directly with `--reason=<reason>` or entered interactively with `--reason`.

If no reason is provided, the task is still marked as `BLOCKED` without adding a block reason.

## Examples

### Block a task

```cmd
ctx task block T7
```

Marks task `T7` as `BLOCKED`.

### Block a task with a reason

```cmd
ctx task block T7 --reason="Waiting for the payment provider API."
```

Marks task `T7` as `BLOCKED` and records the specified reason.

### Enter the block reason interactively

```cmd
ctx task block T7 --reason
```

Prompts for the reason before marking the task as `BLOCKED`.

### Block a completed task

```cmd
ctx task block T4
```

A task can be marked as `BLOCKED` regardless of its previous status.
