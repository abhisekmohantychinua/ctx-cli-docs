---
sidebar_position: 11
description: Record an issue in the project log.
---

# ctx issue

Record an issue in the project log.

## Issue

### Arguments

| argument | required | description |
| --- | --- | --- |
| note | yes | Note describing the issue. |

### Options

| options | shorthand | required | description |
| --- | --- | --- | --- |
| --session | -S | | Session reference identifier. |
| --task | -T | | Task reference identifier. |
| --help | -h | | Show this help message and exit. |
| --version | -V | | Print version information and exit. |

## What it does

Adds a log tagged as `ISSUE` and assigns it a generated identifier.

It is a shortcut for [`ctx log add`](../log/add/) with `--tag=ISSUE`. The note is provided directly as an argument instead of through `--note`.

## When to use it

Use `ctx issue "..."` when you encounter a problem, failure, or unexpected behavior that should be preserved.

Issues recorded this way stay in the project history even when they are later resolved, which helps explain the work that followed.

## How it works

The note is required and is provided as the command argument. Quote it when it contains spaces.

The tag is always `ISSUE`, so the tag does not need to be specified.

An issue can be associated with either a session or a task using `--session` or `--task`. Providing the option without an identifier refers to the active session or task.

The command generates a unique identifier for the new log and records the current timestamp.

## Examples

### Record an issue

```bash
ctx issue "Payment API returns an invalid response."
```

Adds a log tagged as `ISSUE`.

### Attach an issue to the active task

```bash
ctx issue "OAuth callback returns 401 when state is missing." --task
```

Adds the issue and associates it with the task currently in progress.

### Attach an issue to a specific session

```bash
ctx issue "Sandbox access is required to reproduce the timeout." --session=S4
```

Adds the issue and associates it with session `S4`.
