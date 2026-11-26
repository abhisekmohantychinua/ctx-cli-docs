---
sidebar_position: 12
description: Record an idea in the project log.
---

# ctx idea

Record an idea in the project log.

## Idea

### Arguments

| argument | required | description |
| --- | --- | --- |
| note | yes | Note describing the idea. |

### Options

| options | shorthand | required | description |
| --- | --- | --- | --- |
| --session | -S | | Session reference identifier. |
| --task | -T | | Task reference identifier. |
| --help | -h | | Show this help message and exit. |
| --version | -V | | Print version information and exit. |

## What it does

Adds a log tagged as `IDEA` and assigns it a generated identifier.

It is a shortcut for [`ctx log add`](../log/add/) with `--tag=IDEA`. The note is provided directly as an argument instead of through `--note`.

## When to use it

Use `ctx idea "..."` when a possible improvement, alternative approach, or future direction comes up during work.

Ideas are often not acted on immediately. Recording them keeps the thought available without turning it into a task or decision prematurely.

## How it works

The note is required and is provided as the command argument. Quote it when it contains spaces.

The tag is always `IDEA`, so the tag does not need to be specified.

An idea can be associated with either a session or a task using `--session` or `--task`. Providing the option without an identifier refers to the active session or task.

The command generates a unique identifier for the new log and records the current timestamp.

## Examples

### Record an idea

```bash
ctx idea "Cache the provider token between retries."
```

Adds a log tagged as `IDEA`.

### Attach an idea to the active task

```bash
ctx idea "Move retry configuration into a shared settings module." --task
```

Adds the idea and associates it with the task currently in progress.

### Attach an idea to a specific task

```bash
ctx idea "Add a metric for retry counts." --task=T14
```

Adds the idea and associates it with task `T14`.
