---
sidebar_position: 7
---

# ctx log

Manage project logs.

## Log (`l`)

### Options

| options | shorthand | required | description |
| --- | --- | --- | --- |
| --tag | -k | | Log tag. Defaults to `NOTE`. |
| --note | -n | | Notes describing the log. |
| --session | -S | | Session reference identifier. |
| --task | -T | | Task reference identifier. |
| --help | -h | | Show this help message and exit. |
| --version | -V | | Print version information and exit. |

### Subcommands

- [add, a](./add/) - Add a new log.
- [list, ls](./list/) - List recent logs.
- [update, u](./update/) - Update an existing log.
- [delete, d](./delete/) - Delete a log.
- [query, q](./query/) - Search logs using filters and sorting.

## What it does

The `log` command manages project logs.

When used without a subcommand, it adds a new log using the values provided through the command options.

A log records a small piece of information about the work, such as an observation, idea, issue, or attempt. A log can optionally be associated with a session or task.

## When to use it

Use `ctx log` when you want to record a small event, observation, issue, idea, or attempt during project work.

Use the log subcommands when you need to list, update, delete, or search existing logs.

## How it works

Without a subcommand, the command behaves as the log creation operation.

The log tag describes the type of information being recorded. When no tag is provided, `NOTE` is used.

The log note can be provided with `--note`.

A log can optionally be associated with a session or task using `--session` or `--task`.

The timestamp of a new log is set when the log is created.

The command returns control to the same log management operations available through its subcommands.

## Examples

### Add a log

```cmd
ctx log --note="Stripe timeout occurs after 10 seconds."
```

Adds a log using the default `NOTE` tag.

### Add an issue log

```cmd
ctx log --tag=ISSUE --note="Payment API returns an invalid response."
```

Adds an issue log with the specified note.

### Add a log for the current session

```cmd
ctx log --note="Started testing payment retries." --session
```

Adds the log and associates it with the active session.

### Add a log for a specific task

```cmd
ctx log --tag=ATTEMPT --note="Testing exponential backoff." --task=T14
```

Adds the log and associates it with task `T14`.

### Show the available log commands

```cmd
ctx log --help
```

Displays the available log operations and log creation options.
