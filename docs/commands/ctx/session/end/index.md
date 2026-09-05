---
sidebar_position: 2
---


# ctx session end

End the active session.

## End (`e`)

### Options

| options | shorthand | required | description |
| --- | --- | --- | --- |
| --help | -h | | Show this help message and exit. |
| --version | -V | | Print version information and exit. |

## What it does

Ends the currently active project session and returns the identifier of the ended session.

Ending a session records its end time and makes it inactive.

## When to use it

Use `ctx session end` when you have finished the current period of work and want to end the active session.

## How it works

The command operates only on the active session.

When an active session exists, CTX ends it and prints its identifier.

When no active session exists, the command reports an error and does not change any session.

## Examples

### End the active session

```cmd
ctx session end
```

Ends the active session and prints its identifier.

### Try to end a session when none is active

```cmd
ctx session end
```

Reports an error when there is no active session.
