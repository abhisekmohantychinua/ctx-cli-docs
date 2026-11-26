---
sidebar_position: 5
description: Search sessions using filters and sorting.
---

# ctx session query

Search sessions using filters and sorting.

## Query (`q`)

### Options

| options | shorthand | required | description |
| --- | --- | --- | --- |
| --field | -f | | Field used for filtering. Available fields: id, status, createdAt, endedAt, notes. Defaults to `status`. |
| --expression | -x | yes | Filter expression. |
| --sort-by | | | Field used for sorting. Defaults to `createdAt`. |
| --sort | | | Sort direction (`ASC` or `DESC`). |
| --page | | | Page number. |
| --size | | | Page size. |
| --output | -o | | Output format: `default`, `verbose`, `short`, `json`, or `pretty-json`. Defaults to `default`. |
| --help | -h | | Show this help message and exit. |
| --version | -V | | Print version information and exit. |

## What it does

Searches the project's sessions using a filter expression and returns the matching sessions.

The search can be performed against a specific session field and can be further controlled with sorting and pagination.

## When to use it

Use `ctx session query` when you need to find sessions across the project's session history rather than view only the active or most recent session.

It is useful when you know something about the session you are looking for, such as its identifier, status, notes, or when it was created or ended.

## How it works

The command filters sessions using a field and an expression.

The available fields are `id`, `status`, `createdAt`, `endedAt`, and `notes`. When no field is specified, `status` is used.

Results are sorted by `createdAt` by default. You can choose another field and sort direction when needed.

Results are returned as pages. The page number and page size can be controlled with `--page` and `--size`.

The result can be presented with `--output` (`-o`):

- `default` provides a normal human-readable query result.
- `verbose` shows detailed session information.
- `short` shows a compact, single-line result.
- `json` returns the query result as compact JSON.
- `pretty-json` returns the JSON result with formatting.

The query does not modify any session data.

:::info
Querying is designed for finding and inspecting context across the session history. For an explanation of filter expressions, fields, sorting, pagination, and query result views, see [Querying](../../../../advanced/querying/).
:::

## Examples

### Find active sessions

```bash
ctx session query -x equals:ACTIVE
```

Searches for sessions whose status is `ACTIVE`.

### Find a specific session

```bash
ctx session query -f id -x equals:S4
```

Searches for the session with identifier `S4`.

### Find sessions by notes

```bash
ctx session query -f notes -x contains:payment
```

Searches for sessions whose notes contain `payment`.

### Sort matching sessions

```bash
ctx session query -f status -x equals:COMPLETED --sort-by=endedAt --sort=DESC
```

Returns completed sessions with the most recently ended sessions first.

### View query results as formatted JSON

```bash
ctx session query -f status -x equals:COMPLETED --output=pretty-json
```

Displays the matching sessions as formatted JSON.
