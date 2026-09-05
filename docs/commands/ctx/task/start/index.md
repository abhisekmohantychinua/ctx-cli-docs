---
sidebar_position: 2
---


# ctx task start

Start a project task.

## Start (`st`)

### Arguments

| argument | required | description |
| --- | --- | --- |
| id | yes | Task identifier. |

### Options

| options | shorthand | required | description |
| --- | --- | --- | --- |
| --end | -e | | Complete the task currently in progress before starting this task. |
| --help | -h | | Show this help message and exit. |
| --version | -V | | Print version information and exit. |

## What it does

Starts an existing task by changing its status to `IN PROGRESS`.

The command returns the identifier of the task that was started.

## When to use it

Use `ctx task start` when you are ready to begin working on an existing task.

Use `--end` when another task is already in progress and you want CTX to complete that task before starting the specified task.

## How it works

The command requires the identifier of an existing task.

Only one task can be `IN PROGRESS` at a time.

When another task is already in progress, the command reports an error unless `--end` is provided. With `--end`, the task currently in progress is completed before the requested task is started.

If the specified task does not exist, the command reports an error and does not modify any task.

## Examples

### Start a task

```cmd
ctx task start T7
```

Starts task `T7` and changes its status to `IN PROGRESS`.

### Complete the current task and start another

```cmd
ctx task start T7 --end
```

Completes the task currently in progress and starts task `T7`.

### Use the `st` alias

```cmd
ctx task st T7
```

Starts task `T7` using the command alias.
