---
sidebar_position: 9
---


# ctx decision

Manage project decisions.

## Decision (`dec`)

### Options

| options | shorthand | required | description |
| --- | --- | --- | --- |
| --help | -h | | Show this help message and exit. |
| --version | -V | | Print version information and exit. |

### Subcommands

- [create, c](./create/) - Create a new decision record.
- [update, u](./update/) - Update an existing project decision.
- [delete, d](./delete/) - Delete a decision.
- [query, q](./query/) - Search decisions using filters and sorting.
- [tags, k](./tags/) - Manage decision tags.

## What it does

The `decision` command manages project decisions.

It provides the operations for creating, updating, deleting, and searching decisions, along with managing the tags used by them.

## When to use it

Use `ctx decision` when you need to manage decisions that record important choices made during project work.

Use the individual subcommands when you need to create, modify, remove, or search decision records.

## How it works

The `decision` command acts as a container for decision-related operations.

It does not perform a decision operation on its own. A subcommand must be provided to create, update, delete, or query decisions, or to manage decision tags.

## Examples

### View available decision commands

```cmd
ctx decision --help
```

Displays the available decision operations.

### Create a decision

```cmd
ctx decision create
```

Starts the decision creation operation.

### Search decisions

```cmd
ctx decision query
```

Runs the decision query operation.
