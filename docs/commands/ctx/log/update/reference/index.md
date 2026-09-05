---
sidebar_position: 1
---

# ctx log update reference

Update a log reference.

## Reference (`ref`)

### Options

| options | shorthand | required | description |
| --- | --- | --- | --- |
| --session | -S | | Session reference identifier. |
| --task | -T | | Task reference identifier. |
| --help | -h | | Show this help message and exit. |
| --version | -V | | Print version information and exit. |

## What it does

Updates the reference of an existing log.

A log can reference a session or a task. The reference can also be removed entirely.

## When to use it

Use `ctx log update reference` when a log should be associated with a different session or task, or when its existing reference should be removed.

## How it works

A session reference can be set with `--session`, and a task reference can be set with `--task`.

Only one reference can be assigned to a log at a time. Providing both `--session` and `--task` is not allowed.

When a reference option is provided with an identifier, CTX associates the log with the specified session or task.

When a reference option is provided without an identifier, CTX uses the active session or active task.

When neither option is provided, the existing reference is removed.

The command operates on the reference of the log and does not change the other log information.

## Examples

### Reference a log to a session

```cmd
ctx log update L3 reference --session=S1
```

Associates log `L3` with session `S1`.

### Reference a log to a task

```cmd
ctx log update L3 reference --task=T5
```

Associates log `L3` with task `T5`.

### Reference a log to the active session

```cmd
ctx log update L3 reference --session
```

Associates log `L3` with the active session.

### Reference a log to the active task

```cmd
ctx log update L3 reference --task
```

Associates log `L3` with the active task.

### Remove the log reference

```cmd
ctx log update L3 reference
```

Removes the existing session or task reference from log `L3`.
