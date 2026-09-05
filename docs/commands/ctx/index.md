---
sidebar_position: 1
---
# ctx

CTX CLI - Project execution context for developers and AI.

## ctx

The root command for CTX CLI.

### Options

| options | shorthand | required | description |
|---|---|---|---|
| --help | -h |  | Show this help message and exit. |
| --version | -V |  | Print version information and exit. |

### Subcommands

- [status, ps](./status/) - Displays the current execution status.
- [init, i](./init/) - Initialize the project context.
- [generate, g](./generate/) - Generate project artifacts.
- [session, s](./session/) - Manage project sessions.
- [start, st](./start/) - Start a new project session.
- [task, t](./task/) - Manage project tasks.
- [log, l](./log/) - Manage project logs.
- [logs](./logs/) - List recent logs.
- [decision, dec](./decision/) - Manage project decisions.

## What it does

Running `ctx` without a command displays the CTX CLI banner, the current version, and a short description of CTX.

It also provides a link to the documentation for the current version and points to `ctx --help` for command usage.

## When to use it

Run `ctx` when you want a quick introduction to the installed CTX version or a reminder of where to find its documentation.

Use `ctx --help` when you want to see the available commands and their options.

## How it works

When no subcommand is provided, CTX displays static, version-specific information and exits.

The root command does not create or modify project context.

## Examples

### Display CTX information

```cmd
ctx
```

Displays the CTX banner, installed version, documentation location, and a short introduction.

### Show available commands

```cmd
ctx --help
```

Displays the available top-level commands and global options.
