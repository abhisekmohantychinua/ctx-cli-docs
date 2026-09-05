---
sidebar_position: 5
---


# ctx start

Start a new project session.

## Start (`st`)

### Options

| options | shorthand | required | description |
| --- | --- | --- | --- |
| --end | -e | | End the active session. |
| --notes | -n | | Notes describing this session. |
| --help | -h | | Show this help message and exit. |
| --version | -V | | Print version information and exit. |

## What it does

Starts a new project session and returns its generated identifier.

The command provides the same session-starting capability as `ctx session start`, but is available directly at the root for convenient access.

## When to use it

Use `ctx start` when beginning a new period of work on the project and you want to record it as a session.

Use `--notes` when you want to describe what the session is about.

## How it works

Only one session can be active at a time.

When an active session already exists, the command reports an error unless `--end` is provided. With `--end`, the active session is ended before the new session is started.

Session notes can be provided directly with `--notes=<notes>` or entered interactively with `--notes`.

The newly created session receives a generated identifier and records its creation time.

`ctx start` is an alias for the session start operation and behaves the same as `ctx session start`.

## Examples

### Start a session

```cmd
ctx start
```

Starts a new project session and prints its identifier.

### Start a session with notes

```cmd
ctx start --notes="Working on payment retry tests."
```

Starts a new session with the provided notes.

### Enter session notes interactively

```cmd
ctx start --notes
```

Prompts for the session notes before starting the session.

### End the active session and start a new one

```cmd
ctx start --end
```

Ends the active session and immediately starts a new session.

### Use the `st` alias

```cmd
ctx st
```

Starts a new project session using the command alias.
