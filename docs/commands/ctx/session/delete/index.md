---
sidebar_position: 4
---

# ctx session delete

Delete an inactive session.

## Delete (`d`)

### Arguments

| argument | required | description |
| --- | --- | --- |
| id | yes | Session identifier. |

### Options

| options | shorthand | required | description |
| --- | --- | --- | --- |
| --help | -h | | Show this help message and exit. |
| --version | -V | | Print version information and exit. |

## What it does

Deletes an existing inactive session and returns the identifier of the deleted session.

## When to use it

Use `ctx session delete` when an existing session is no longer needed and should be removed from the project context.

This is a session management operation intended for special cases rather than the normal session workflow.

## How it works

The command requires the identifier of the session to delete.

The specified session must be inactive. An active session cannot be deleted.

When the session identifier does not refer to an existing session, the command reports an error and does not modify any session.

When the session is inactive, CTX deletes it and prints its identifier.

## Examples

### Delete an inactive session

```cmd
ctx session delete S4
```

Deletes session `S4` and prints its identifier.

### Try to delete the active session

```cmd
ctx session delete S5
```

Reports an error when the specified session is currently active.
