---
sidebar_position: 7
---

# ctx task query

Search tasks using filters and sorting.

## Query (`q`)

### Options

| options | shorthand | required | description |
 | --- | --- | --- | --- |
| --field | -f | | Field used for filtering. Available fields: id, task, description, status, createdAt, completedAt, blockReason. Defaults to `status`. |
| --expression | -x | Yes | Filter expression. |
| --sort-by | | | Field used for sorting. Defaults to `createdAt`. |
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

Searches the project's tasks using a filter expression and returns the matching tasks.

The search can be performed against a specific task field and can be further controlled with sorting and pagination.

## When to use it

Use `ctx task query` when you need to find tasks across the project's task history instead of viewing only the task currently in progress or the most recently completed task.

It is useful when you need to locate a task by its identifier, name, status, description, block reason, or when it was created or completed.

## How it works

The command filters tasks using a field and an expression.

The available fields are `id`, `task`, `description`, `status`, `createdAt`, `completedAt`, and `blockReason`. When no field is specified, `status` is used.

Results are sorted by `createdAt` by default. You can choose another field and sort direction when needed.

Results are returned as pages. The page number and page size can be controlled with `--page` and `--size`.

The result can be presented using different views:

- The default output provides a normal human-readable query result.
- `--short` or `--oneline` shows a compact result.
- `--verbose` shows detailed task information.
- `--json` returns the query result as JSON.
- `--pretty-json` returns the JSON result with formatting.

The query does not modify any task data.

:::info
Querying is designed for finding and inspecting context across the task history. For an explanation of filter expressions, fields, sorting, pagination, and query result views, see [Querying](../../../../advanced/querying/).
:::

## Examples

### Find pending tasks

```cmd
ctx task query -x equals:PENDING
```

Searches for tasks whose status is `PENDING`.

### Find a specific task

```cmd
ctx task query -f id -x equals:T7
```

Searches for the task with identifier `T7`.

### Find tasks by name

```cmd
ctx task query -f task -x contains:authentication
```

Searches for tasks whose name contains `authentication`.

### Find blocked tasks

```cmd
ctx task query -f status -x equals:BLOCKED
```

Searches for tasks whose status is `BLOCKED`.

### Sort matching tasks

```cmd
ctx task query -f status -x equals:COMPLETED --sort-by=completedAt --sort=DESC
```

Returns completed tasks with the most recently completed tasks first.

### View query results as formatted JSON

```cmd
ctx task query -f status -x equals:COMPLETED --pretty-json
```

Displays the matching tasks as formatted JSON.
