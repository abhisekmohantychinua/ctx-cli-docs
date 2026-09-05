---
sidebar_position: 1
---

# ctx decision create

Create a new decision record.

## Create (`c`)

### Options

| options | shorthand | required | description |
| --- | --- | --- | --- |
| --topic | -t | Yes | Topic of the decision. |
| --reasoning | -r | | Reasoning behind the decision. |
| --tags | -k | | Tags for the decision. |
| --session | -S | | Session reference identifier. |
| --task | -T | | Task reference identifier. |
| --help | -h | | Show this help message and exit. |
| --version | -V | | Print version information and exit. |

## What it does

Creates a decision record and assigns it a generated identifier.

A decision records a chosen approach along with the reasoning behind it. It can also include tags and an optional reference to a session or task.

## When to use it

Use `ctx decision create` when an important choice has been made during project work and you want to preserve the choice and the reasoning behind it.

Record decisions that may be useful later when revisiting the work, understanding why an approach was chosen, or helping others and AI continue the project with the same context.

## How it works

The topic is required and is provided with `--topic`.

Reasoning is optional and can be provided directly with `--reasoning=<reasoning>` or entered interactively with `--reasoning`.

Tags can be provided with `--tags`. Multiple tags can be supplied as a comma-separated value.

A decision can be associated with either a session or a task using `--session` or `--task`.

Only one reference can be assigned to a decision at a time. When a reference option is used without an identifier, the active session or task is used.

The decision receives a generated identifier using the `D` prefix and records the time when it is created. See [Identifier](../../../../internals/identifier/) for more information about identifier generation.

## Examples

### Create a decision

```cmd
ctx decision create --topic="Use PostgreSQL for the application database"
```

Creates a decision with the specified topic.

### Create a decision with reasoning

```cmd
ctx decision create --topic="Use PostgreSQL for the application database" --reasoning="PostgreSQL provides strong relational integrity and transaction support."
```

Creates a decision with the chosen topic and its reasoning.

### Enter the reasoning interactively

```cmd
ctx decision create --topic="Use PostgreSQL for the application database" --reasoning
```

Prompts for the decision reasoning before creating the record.

### Add tags

```cmd
ctx decision create --topic="Use PostgreSQL for the application database" --tags=database,architecture,backend
```

Creates the decision with the specified tags.

### Reference the active session

```cmd
ctx decision create --topic="Use PostgreSQL for the application database" --session
```

Creates the decision and associates it with the active session.

### Reference a task

```cmd
ctx decision create --topic="Use PostgreSQL for the application database" --task=T5
```

Creates the decision and associates it with task `T5`.
