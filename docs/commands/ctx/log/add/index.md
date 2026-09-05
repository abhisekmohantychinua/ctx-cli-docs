---
sidebar_position: 1
---


# ctx log add

Add a new log.

## Add (`a`)

### Options

| options | shorthand | required | description |
| --- | --- | --- | --- |
| --tag | -k | | Log tag. Defaults to `NOTE`. |
| --note | -n | Yes | Notes describing the log. |
| --session | -S | | Session reference identifier. |
| --task | -T | | Task reference identifier. |
| --help | -h | | Show this help message and exit. |
| --version | -V | | Print version information and exit. |

## What it does

Adds a new log to the project context and assigns it a generated identifier.

A log contains a note and a tag describing the type of information being recorded. It can also be associated with a session or task.

The log timestamp is set when the log is created.

## When to use it

Use `ctx log add` when you want to capture a small piece of information about your work, such as an observation, idea, issue, or attempt.

Use a session or task reference when the log is specifically related to a particular piece of work.

## How it works

The log note is required and can be provided with `--note=<note>`.

The tag describes the type of log. When no tag is provided, `NOTE` is used.

A log can be associated with either a session or a task using `--session` or `--task`.

The session or task reference identifies the existing context that the log belongs to.

The command generates a unique identifier for the new log and records the current timestamp.

## Examples

### Add a log

```cmd
ctx log add --note="Stripe timeout occurs after 10 seconds."
```

Adds a log using the default `NOTE` tag.

### Add an issue log

```cmd
ctx log add --tag=ISSUE --note="Payment API returns an invalid response."
```

Adds a log tagged as an issue.

### Attach a log to the active session

```cmd
ctx log add --note="Started testing payment retries." --session
```

Adds the log and associates it with the active session.

### Attach a log to a specific task

```cmd
ctx log add --tag=ATTEMPT --note="Testing exponential backoff." --task=T14
```

Adds the log and associates it with task `T14`.

### Use the `a` alias

```cmd
ctx log a --note="Payment retry test started."
```

Adds a new log using the command alias.
