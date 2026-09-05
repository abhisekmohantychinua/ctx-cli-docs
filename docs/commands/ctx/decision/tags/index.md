---
sidebar_position: 5
---


# ctx decision tags

Manage decision tags.

## Tags (`k`)

### Arguments

| argument | required | description |
| --- | --- | --- |
| id | yes | Decision identifier. |

### Options

| options | shorthand | required | description |
| --- | --- | --- | --- |
| --help | -h | | Show this help message and exit. |
| --version | -V | | Print version information and exit. |

### Subcommands

- [add, a](./add/) - Add tags to a decision.
- [remove, r](./remove/) - Remove tags from a decision.

## What it does

Provides operations for managing the tags associated with a decision.

The decision identifier specifies the decision whose tags are being managed.

## When to use it

Use `ctx decision tags` when you need to add or remove tags from an existing decision.

Use the `add` or `remove` subcommands to perform the specific tag operation.

## How it works

The command requires a decision identifier.

It acts as a container for tag management operations and does not modify tags on its own.

A tag operation must be provided through one of its subcommands.

## Examples

### Add tags to a decision

```cmd
ctx decision tags D3 add
```

Starts the tag addition operation for decision `D3`.

### Remove tags from a decision

```cmd
ctx decision tags D3 remove
```

Starts the tag removal operation for decision `D3`.

### Show available tag commands

```cmd
ctx decision tags D3 --help
```

Displays the available tag management operations for decision `D3`.
