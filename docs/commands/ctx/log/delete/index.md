---
sidebar_position: 4
---

# ctx log delete

Delete a log.

## Delete (`d`)

### Arguments

| argument | required | description |
| --- | --- | --- |
| id | yes | Log identifier. |

### Options

| options | shorthand | required | description |
| --- | --- | --- | --- |
| --help | -h | | Show this help message and exit. |
| --version | -V | | Print version information and exit. |

## What it does

Deletes the specified log from the project context and returns its identifier.

## When to use it

Use `ctx log delete` when a log should no longer be part of the project's context.

This is a log management operation for removing an existing log when it is no longer needed or was recorded incorrectly.

## How it works

The command requires the identifier of an existing log.

When the specified log exists, CTX deletes it and prints its identifier.

If the provided identifier does not match an existing log, the command reports an error and does not modify any logs.

## Examples

### Delete a log

```cmd
ctx log delete L3
```

Deletes log `L3` and prints its identifier.
