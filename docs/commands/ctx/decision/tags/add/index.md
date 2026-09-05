---
sidebar_position: 1
---


# ctx decision tags add

Add tags to a decision.

## Add (`a`)

### Options

| options | shorthand | required | description |
| --- | --- | --- | --- |
| --tags | -k | Yes | Tags to add. |
| --help | -h | | Show this help message and exit. |
| --version | -V | | Print version information and exit. |

## What it does

Adds one or more tags to the specified decision.

Tags are added to the decision's existing tags without replacing them.

## When to use it

Use `ctx decision tags add` when you want to categorize an existing decision or add additional context that can later be used when searching decisions.

## How it works

The decision identifier is provided by the parent `tags` command.

The `--tags` option is required and accepts one or more tags. Multiple tags can be provided as a comma-separated value or through repeated `--tags` options.

Existing tags are preserved when new tags are added.

When a tag is already associated with the decision, it is ignored without producing an error.

If the specified decision does not exist, the command reports an error and does not modify any decision.

## Examples

### Add a tag

```cmd
ctx decision tags D3 add --tags=backend
```

Adds the `backend` tag to decision `D3`.

### Add multiple tags

```cmd
ctx decision tags D3 add --tags=database,architecture,backend
```

Adds multiple tags to decision `D3`.

### Add tags using repeated options

```cmd
ctx decision tags D3 add --tags=database --tags=backend
```

Adds both tags to decision `D3`.

### Add a tag that already exists

```cmd
ctx decision tags D3 add --tags=backend
```

Leaves the existing `backend` tag unchanged if it is already associated with decision `D3`.
