---
sidebar_position: 3
---

# ctx decision delete

Delete a decision.

## Delete (`d`)

### Arguments

| argument | required | description |
| --- | --- | --- |
| id | yes | Decision identifier. |

### Options

| options | shorthand | required | description |
| --- | --- | --- | --- |
| --help | -h | | Show this help message and exit. |
| --version | -V | | Print version information and exit. |

## What it does

Deletes the specified decision and returns its identifier.

## When to use it

Use `ctx decision delete` when a decision should no longer be part of the project's context.

This is a decision management operation for removing an existing decision when it is no longer relevant or was recorded incorrectly.

## How it works

The command requires the identifier of an existing decision.

When the specified decision exists, CTX deletes it and prints its identifier.

If the provided identifier does not match an existing decision, the command reports an error and does not modify any decisions.

## Examples

### Delete a decision

```cmd
ctx decision delete D1
```

Deletes decision `D1` and prints its identifier.
