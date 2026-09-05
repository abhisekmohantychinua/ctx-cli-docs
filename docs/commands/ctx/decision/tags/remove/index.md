---
sidebar_position: 2
---


# ctx decision tags remove

Remove tags from a decision.

## Remove (`r`)

### Options

| options | shorthand | required | description |
| --- | --- | --- | --- |
| --tags | -k | Yes | Tags to remove. |
| --help | -h | | Show this help message and exit. |
| --version | -V | | Print version information and exit. |

## What it does

Removes one or more tags from the specified decision.

Only the specified tags are removed. Other tags already associated with the decision remain unchanged.

## When to use it

Use `ctx decision tags remove` when a tag no longer applies to an existing decision or was added by mistake.

## How it works

The decision identifier is provided by the parent `tags` command.

The `--tags` option is required and accepts one or more tags. Multiple tags can be provided as a comma-separated value or through repeated `--tags` options.

Only exact matching tags are removed.

When a tag is not associated with the decision, it is ignored without producing an error.

If the specified decision does not exist, the command reports an error and does not modify any decision.

## Examples

### Remove a tag

```cmd
ctx decision tags D3 remove --tags=backend
```

Removes the `backend` tag from decision `D3`.

### Remove multiple tags

```cmd
ctx decision tags D3 remove --tags=database,backend
```

Removes the specified tags from decision `D3`.

### Remove tags using repeated options

```cmd
ctx decision tags D3 remove --tags=database --tags=backend
```

Removes both tags from decision `D3`.

### Remove a tag that does not exist

```cmd
ctx decision tags D3 remove --tags=frontend
```

Leaves the decision unchanged when the `frontend` tag is not associated with decision `D3`.
