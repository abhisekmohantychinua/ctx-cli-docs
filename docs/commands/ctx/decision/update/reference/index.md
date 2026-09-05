---
sidebar_position: 1
---

# ctx decision update reference

Update the reference associated with a decision.

## Reference (`ref`)

### Options

| options | shorthand | required | description |
| --- | --- | --- | --- |
| --session | -S | | Session reference identifier. |
| --task | -T | | Task reference identifier. |
| --help | -h | | Show this help message and exit. |
| --version | -V | | Print version information and exit. |

## What it does

Updates the reference associated with a decision.

A decision can reference a session or a task. An existing reference can be replaced, or the reference can be removed entirely.

## When to use it

Use `ctx decision update reference` when a decision should be associated with a different session or task, or when its existing reference is no longer relevant.

## How it works

A session reference can be set with `--session`, and a task reference can be set with `--task`.

Only one reference can be assigned to a decision at a time. Providing both `--session` and `--task` is not allowed.

When a reference option is provided with an identifier, CTX associates the decision with the specified session or task.

When a reference option is provided without an identifier, CTX uses the active session or active task.

When neither option is provided, the existing reference is removed.

The command only changes the decision reference and does not modify the decision topic, reasoning, or tags.

## Examples

### Reference a decision to a session

```cmd
ctx decision update D3 reference --session=S1
```

Associates decision `D3` with session `S1`.

### Reference a decision to a task

```cmd
ctx decision update D3 reference --task=T5
```

Associates decision `D3` with task `T5`.

### Reference a decision to the active session

```cmd
ctx decision update D3 reference --session
```

Associates decision `D3` with the active session.

### Reference a decision to the active task

```cmd
ctx decision update D3 reference --task
```

Associates decision `D3` with the active task.

### Remove the decision reference

```cmd
ctx decision update D3 reference
```

Removes the existing session or task reference from decision `D3`.
