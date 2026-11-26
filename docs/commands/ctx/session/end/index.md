---
sidebar_position: 2
description: End the active session.
---

# ctx session end

End the active session.

## End (`e`)

### Options

| options | shorthand | required | description |
| --- | --- | --- | --- |
| --notes | -n | | Notes describing this session. Overwrites existing notes when provided. |
| --help | -h | | Show this help message and exit. |
| --version | -V | | Print version information and exit. |

## What it does

Ends the currently active project session and returns the identifier of the ended session.

Ending a session records its end time and makes it inactive. You can also record or replace the session notes at the same time with `--notes`.

## When to use it

Use `ctx session end` when you have finished the current period of work and want to end the active session.

Use `--notes` when you want to capture what the session covered, or when the notes recorded at start need to be corrected or expanded before the session closes.

## How it works

The command operates only on the active session.

When an active session exists, CTX ends it and prints its identifier.

When no active session exists, the command reports an error and does not change any session.

Session notes can be provided directly with `--notes=<notes>` or entered interactively with `--notes`, the same way as `ctx session start`. If the session already has notes, providing `--notes` overwrites them. If `--notes` is not provided, the existing notes are left unchanged.

## Examples

### End the active session

```bash
ctx session end
```

Ends the active session and prints its identifier.

### End the active session and record notes

```bash
ctx session end --notes="Finished the payment retry investigation."
```

Ends the active session and stores the provided notes on it.

### Enter notes interactively

```bash
ctx session end --notes
```

Prompts for the session notes before ending the session.

### Replace notes recorded at start

```bash
ctx session start --notes="Investigating payment retries."
# Work on the project.
ctx session end --notes="Confirmed the timeout and added retry handling."
```

The notes provided when ending the session replace the notes recorded at start.

### Try to end a session when none is active

```bash
ctx session end
```

Reports an error when there is no active session.
