---
sidebar_position: 5
---

# ctx task update

Update an existing task.

## Update (`u`)

### Arguments

| argument | required | description |
| --- | --- | --- |
| id | yes | Task identifier. |

### Options

| options | shorthand | required | description |
| --- | --- | --- | --- |
| --description | -d | | Description for this task. |
| --status | -s | | Task status (`PENDING`, `IN_PROGRESS`, `BLOCKED`, `COMPLETED`). |
| --task | -t | | Task name. |
| --help | -h | | Show this help message and exit. |
| --version | -V | | Print version information and exit. |

## What it does

Updates the provided fields of an existing task and returns its identifier.

You can update the task name, description, or status.

## When to use it

Use `ctx task update` when an existing task needs to be modified after it has been created.

This is intended for special cases where the task needs to be adjusted directly rather than through the normal task workflow.

## How it works

The command requires the identifier of an existing task.

Only the fields provided to the command are updated. Fields that are not provided remain unchanged.

The task name and description can be provided directly with their respective options or entered interactively by providing the option without a value.

The status can be set to `PENDING`, `IN_PROGRESS`, `BLOCKED`, or `COMPLETED`.

The command also succeeds when no update option is provided and returns the identifier of the specified task.

If the provided identifier does not match an existing task, the command reports an error and does not modify the task.

## Examples

### Update the task name

```cmd
ctx task update T7 --task="Define authentication strategy"
```

Updates the name of task `T7`.

### Update the task description

```cmd
ctx task update T7 --description="Document the authentication approach."
```

Updates the description of task `T7`.

### Change the task status

```cmd
ctx task update T7 --status=IN_PROGRESS
```

Changes the status of task `T7` to `IN_PROGRESS`.

### Update multiple fields

```cmd
ctx task update T7 --task="Implement authentication" --description="Add login and token handling." --status=IN_PROGRESS
```

Updates the task name, description, and status together.

### Enter a value interactively

```cmd
ctx task update T7 --task
```

Prompts for the new task name before updating the task.

### Update without changing fields

```cmd
ctx task update T7
```

Runs the update operation without changing any task fields and returns the task identifier.
