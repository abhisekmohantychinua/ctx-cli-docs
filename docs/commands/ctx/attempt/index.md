---
sidebar_position: 10
description: Record an attempt in the project log.
---

# ctx attempt

Record an attempt in the project log.

## Attempt

### Arguments

| argument | required | description |
| --- | --- | --- |
| note | yes | Note describing the attempt. |

### Options

| options | shorthand | required | description |
| --- | --- | --- | --- |
| --session | -S | | Session reference identifier. |
| --task | -T | | Task reference identifier. |
| --help | -h | | Show this help message and exit. |
| --version | -V | | Print version information and exit. |

## What it does

Adds a log tagged as `ATTEMPT` and assigns it a generated identifier.

It is a shortcut for [`ctx log add`](../log/add/) with `--tag=ATTEMPT`. The note is provided directly as an argument instead of through `--note`.

## When to use it

Use `ctx attempt "..."` when you try an approach and want to record what was attempted and what happened.

Recording attempts preserves the approaches that were tried, including the ones that did not work, so later work does not repeat them.

## How it works

The note is required and is provided as the command argument. Quote it when it contains spaces.

The tag is always `ATTEMPT`, so the tag does not need to be specified.

An attempt can be associated with either a session or a task using `--session` or `--task`. Providing the option without an identifier refers to the active session or task.

The command generates a unique identifier for the new log and records the current timestamp.

## Examples

### Record an attempt

```bash
ctx attempt "Testing exponential backoff for payment retries."
```

Adds a log tagged as `ATTEMPT`.

### Attach an attempt to the active task

```bash
ctx attempt "Middleware validation did not resolve the production callback failure." --task
```

Adds the attempt and associates it with the task currently in progress.

### Attach an attempt to a specific task

```bash
ctx attempt "Retried the request with a longer timeout." --task=T14
```

Adds the attempt and associates it with task `T14`.
