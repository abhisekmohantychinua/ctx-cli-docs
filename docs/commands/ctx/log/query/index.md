---
sidebar_position: 5
---


# ctx log query

Search logs using filters and sorting.

## Query (`q`)

### Options

| options | shorthand | required | description |
| --- | --- | --- | --- |
| --field | -f | | Field used for filtering. Available fields: id, note, timestamp, tag, referenceType, referenceIdentifier. Defaults to `tag`. |
| --expression | -x | Yes | Filter expression. |
| --sort-by | | | Field used for sorting. Defaults to `timestamp`. |
| --sort | | | Sort direction (`ASC` or `DESC`). |
| --page | | | Page number. |
| --size | | | Page size. |
| --short, --oneline | -s | | Show compact output. |
| --verbose | -v | | Show detailed output. |
| --json | | | Show output in JSON format. |
| --pretty-json | | | Show formatted JSON output. |
| --help | -h | | Show this help message and exit. |
| --version | -V | | Print version information and exit. |

## What it does

Searches the project's logs using a filter expression and returns the matching logs.

The search can be performed against a specific log field and can be controlled with sorting and pagination.

## When to use it

Use `ctx log query` when you need to find logs across the project's log history rather than only reviewing the most recent logs.

It is useful when you need to locate a log by its identifier, note, timestamp, tag, or reference information.

## How it works

The command requires a filter expression and uses `tag` as the default field when no field is specified.

The available filter fields are `id`, `note`, `timestamp`, `tag`, `referenceType`, and `referenceIdentifier`.

Results are sorted by `timestamp` by default. A different sort field and direction can be selected when needed.

Results are returned as pages. The page number and page size can be controlled with `--page` and `--size`.

The result can be presented using different views:

- The default output provides a normal human-readable query result.
- `--short` or `--oneline` shows a compact result.
- `--verbose` shows detailed log information.
- `--json` returns the query result as JSON.
- `--pretty-json` returns the JSON result with formatting.

The query only retrieves matching logs and does not modify them.

:::info
Querying is designed for finding and inspecting context across the log history. For details about filter expressions, fields, sorting, pagination, and query result views, see [Querying](../../../../advanced/querying/).
:::

## Examples

### Find issue logs

```cmd
ctx log query -x equals:ISSUE
```

Searches for logs whose tag is `ISSUE`.

### Find a specific log

```cmd
ctx log query -f id -x equals:L3
```

Searches for the log with identifier `L3`.

### Find logs by note

```cmd
ctx log query -f note -x contains:payment
```

Searches for logs whose note contains `payment`.

### Find logs by tag

```cmd
ctx log query -f tag -x equals:ATTEMPT
```

Searches for logs tagged as `ATTEMPT`.

### Sort matching logs

```cmd
ctx log query -f tag -x equals:ISSUE --sort-by=timestamp --sort=DESC
```

Returns matching issue logs with the most recent logs first.

### View query results as formatted JSON

```cmd
ctx log query -f tag -x equals:ISSUE --pretty-json
```

Displays the matching logs as formatted JSON.
