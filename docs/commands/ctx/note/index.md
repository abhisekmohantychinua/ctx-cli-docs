---
sidebar_position: 9
description: Record a note in the project log.
---

# ctx note

Record a note in the project log.

## Note

### Arguments

| argument | required | description |
| --- | --- | --- |
| note | yes | Note describing the log. |

### Options

| options | shorthand | required | description |
| --- | --- | --- | --- |
| --session | -S | | Session reference identifier. |
| --task | -T | | Task reference identifier. |
| --help | -h | | Show this help message and exit. |
| --version | -V | | Print version information and exit. |

## What it does

Adds a log tagged as `NOTE` and assigns it a generated identifier.

It is a shortcut for [`ctx log add`](../log/add/) with `--tag=NOTE`. The note is provided directly as an argument instead of through `--note`.

## When to use it

Use `ctx note "..."` when you want to record an observation or a piece of information quickly.

Use a session or task reference when the note is specifically related to a particular piece of work.

## How it works

The note is required and is provided as the command argument. Quote it when it contains spaces.

The tag is always `NOTE`, so the tag does not need to be specified.

A note can be associated with either a session or a task using `--session` or `--task`. Providing the option without an identifier refers to the active session or task.

The command generates a unique identifier for the new log and records the current timestamp.

## Examples

### Record a note

```bash
ctx note "Stripe timeout occurs after 10 seconds."
```

Adds a log tagged as `NOTE`.

### Attach a note to the active task

```bash
ctx note "Confirmed the timeout occurs on retry." --task
```

Adds the note and associates it with the task currently in progress.

### Attach a note to a specific session

```bash
ctx note "Started the payment retry investigation." --session=S4
```

Adds the note and associates it with session `S4`.
