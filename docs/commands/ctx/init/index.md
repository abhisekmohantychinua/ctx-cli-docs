---
sidebar_position: 2
description: Initialize the project context.
---

# ctx init

Initialize the project context.

## Init (`i`)

### Options

| options | shorthand | required | description |
| --- | --- | --- | --- |
| --force | -f | | Overwrite an existing context. |
| --help | -h | | Show this help message and exit. |
| --version | -V | | Print version information and exit. |

## What it does

Initializes a CTX context by creating its configuration in the project directory.

## When to use it

Use `ctx init` when you want to create a CTX context for a project.

Initialization is not currently required for every CTX command. Commands that need project context report an error when no project context is available.

## How it works

CTX uses the current working directory as the project location and resolves the `.ctx` directory there.

It creates a `config.json` containing the context location, creation time, default date-time template, and device time zone.

If a context already exists, CTX does not overwrite it unless `--force` is provided. Without `--force`, the command reports that the context already exists and instructs you to initialize it again with `-f`.

When `--force` is provided, the existing configuration is overwritten with the default configuration values.

CTX writes JSON files atomically. During writes, temporary `.json.lock` files can be present in the context directory. When the project is managed with Git, these files should be added to `.gitignore`.

## Examples

### Initialize the project context

```bash
ctx init
```

Creates the CTX configuration in the current project.

### Overwrite an existing context

```bash
ctx init --force
```

Recreates the configuration in the current project using the default values.
