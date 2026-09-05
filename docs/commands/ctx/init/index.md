---
sidebar_position: 2
---

# ctx init

Initialize the project context.

## Init (`i`)

### Options

| options | shorthand | required | description |
| --- | --- | --- | --- |
| --force | -f | | Overwrite an existing context. |
| --global | -g | | Initialize the global context. |
| --help | -h | | Show this help message and exit. |
| --version | -V | | Print version information and exit. |

## What it does

Initializes a CTX context by creating its configuration in the appropriate context directory.

By default, the command initializes the project context. With `--global`, it initializes the global context instead.

## When to use it

Use `ctx init` when you want to create a CTX context for a project or initialize the global CTX configuration.

Project initialization is the normal option when using CTX with a project. The global context is currently reserved for future features and is not used by the currently available commands.

## How it works

Without `--global`, CTX uses the current working directory as the project location. With `--global`, it uses the user's home directory.

CTX resolves the `ctxcli` directory in the selected location and creates a `config.json` containing the context location, creation time, default date-time template, and device time zone.

If a context already exists, CTX does not overwrite it unless `--force` is provided. Without `--force`, the command reports that the context already exists and instructs you to initialize it again with `-f`.

When `--force` is provided, the existing configuration is overwritten with the default configuration values.

Initializing a context is not currently required for every CTX command. Commands that need project context will report an error when no project context is available.

CTX writes JSON files atomically. During writes, temporary `.json.lock` files can be present in the context directory. When the project is managed with Git, these files should be added to `.gitignore`.

Global context initialization is currently supported for configuration purposes, but the available CTX features use the project context.

## Examples

### Initialize the project context

```cmd
ctx init
```
