---
sidebar_position: 5
description: Search decisions using filters and sorting.
---

# ctx decision query

Search decisions using filters and sorting.

## Query (`q`)

### Options

| options | shorthand | required | description |
| --- | --- | --- | --- |
| --field | -f | | Field used for filtering. Available fields: id, topic, reasoning, timestamp, tags, referenceType, referenceIdentifier. Defaults to `topic`. |
| --expression | -x | Yes | Filter expression. |
| --sort-by | | | Field used for sorting. Defaults to `timestamp`. |
| --sort | | | Sort direction (`ASC` or `DESC`). |
| --page | | | Page number. |
| --size | | | Page size. |
| --output | -o | | Output format: `default`, `verbose`, `short`, `json`, or `pretty-json`. Defaults to `default`. |
| --help | -h | | Show this help message and exit. |
| --version | -V | | Print version information and exit. |

## What it does

Searches the project's decisions using a filter expression and returns the matching decisions.

The search can be performed against a specific decision field and can be controlled with sorting and pagination.

## When to use it

Use `ctx decision query` when you need to find decisions across the project's decision history rather than inspecting a specific decision.

It is useful when you need to locate a decision by its identifier, topic, reasoning, tags, timestamp, or reference information.

## How it works

The command requires a filter expression and uses `topic` as the default field when no field is specified.

The available filter fields are `id`, `topic`, `reasoning`, `timestamp`, `tags`, `referenceType`, and `referenceIdentifier`.

Results are sorted by `timestamp` by default. A different sort field and direction can be selected when needed.

Results are returned as pages. The page number and page size can be controlled with `--page` and `--size`.

The result can be presented with `--output` (`-o`):

- `default` provides a normal human-readable query result.
- `verbose` shows detailed decision information.
- `short` shows a compact, single-line result.
- `json` returns the query result as compact JSON.
- `pretty-json` returns the JSON result with formatting.

The query only retrieves matching decisions and does not modify them.

:::info
Querying is designed for finding and inspecting context across the decision history. For details about filter expressions, fields, sorting, pagination, and query result views, see [Querying](../../../../advanced/querying/).
:::

## Examples

### Find a decision by topic

```bash
ctx decision query -x contains:database
```

Searches for decisions whose topic contains `database`.

### Find a specific decision

```bash
ctx decision query -f id -x equals:D1
```

Searches for the decision with identifier `D1`.

### Find decisions by reasoning

```bash
ctx decision query -f reasoning -x contains:transaction
```

Searches for decisions whose reasoning contains `transaction`.

### Find decisions by tag

```bash
ctx decision query -f tags -x contains:backend
```

Searches for decisions containing the `backend` tag.

### Sort matching decisions

```bash
ctx decision query -f tags -x contains:backend --sort-by=timestamp --sort=DESC
```

Returns matching decisions with the most recent decisions first.

### View query results as formatted JSON

```bash
ctx decision query -f topic -x contains:database --output=pretty-json
```

Displays the matching decisions as formatted JSON.
