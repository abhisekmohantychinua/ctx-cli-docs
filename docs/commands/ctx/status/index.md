---
sidebar_position: 1
---

# ctx status

Displays the current execution status.

## Status (`ps`)

### Options

| options | shorthand | required | description |
| --- | --- | --- | --- |
| --help | -h | | Show this help message and exit. |
| --version | -V | | Print version information and exit. |

## What it does

Displays a summary of the project's current execution context.

The output includes session information, task information, pending tasks, recent logs, and recent decisions when those records are available.

## When to use it

Use `ctx status` when you want a quick overview of the project's current state without querying individual types of context separately.

It is useful for quickly seeing what work is active, what remains pending, what has happened recently, and which decisions have recently been recorded.

## How it works

The command presents the most relevant recent context available for each part of the project.

- For the session, it shows the active session. When no session is active, it shows the most recent session that was active. If no session information exists, it reports that no session information is available.
- For the task, it shows the current task in progress. When no task is in progress, it shows the most recently completed task. If no task information exists, it reports that no task information is available.
- It shows up to the 5 most recent pending tasks. If there are no pending tasks, it reports that there are no pending tasks.
- It shows up to the 5 most recent logs. If no logs are available, it reports that no information is available.
- It shows up to the 5 most recent decisions. If no decisions are available, it reports that no information is available.

The command only presents existing context and does not create or modify any project data.

## Examples

### View the current execution status

```cmd
ctx status
```

Displays a summary of the current session and task along with recent pending tasks, logs, and decisions.

### Use the `ps` alias

```cmd
ctx ps
```

Displays the same execution status using the command alias.
