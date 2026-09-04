---
sidebar_position: 3
---


# ctx session update

Update an existing session.

## Update (`u`)

### Arguments

| argument | required | description |
| --- | --- | --- |
| id | yes | Session identifier. |

### Options

| options | shorthand | required | description |
| --- | --- | --- | --- |
| --notes | -n | | Notes describing this session. |
| --help | -h | | Show this help message and exit. |
| --version | -V | | Print version information and exit. |

## What it does

Updates the notes of an existing session.

The command returns the identifier of the updated session.

## When to use it

Use `ctx session update` when you need to modify the notes of an existing session, such as correcting or adding information after the session has been created.

This command is intended for situations where an existing session needs to be adjusted rather than as part of the normal session workflow.

## How it works

The command requires an existing session identifier.

Session notes can be provided directly with `--notes=<notes>` or entered interactively with `--notes`.

Only the fields provided to the command are updated. Since session notes are currently the only updatable field, no other session information is changed.

The command succeeds even when no update option is provided and returns the identifier of the specified session.

If the provided identifier does not match an existing session, the command reports an error and does not modify any session.

## Examples

### Update session notes

```cmd
ctx session update S4 --notes="Working on payment retry tests."
```

Updates the notes of session `S4`.

### Enter session notes interactively

```cmd
ctx session update S4 --notes
```

Prompts for the new session notes before updating the session.

### Update a session without providing new values

```cmd
ctx session update S4
```

Updates the specified session without changing its current notes.
