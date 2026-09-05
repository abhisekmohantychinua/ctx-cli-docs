---
sidebar_position: 8
---

# ctx logs

List recent logs.

## Logs

### Options

| options | shorthand | required | description |
| --- | --- | --- | --- |
| --count | -c | | Number of logs to show. Defaults to `20`. |
| --json | | | Show output in JSON format. |
| --pretty-json | | | Show formatted JSON output. |
| --short, --oneline | -s | | Show compact output. |
| --verbose | -v | | Show detailed output. |
| --help | -h | | Show this help message and exit. |
| --version | -V | | Print version information and exit. |

## What it does

Lists the most recent logs recorded in the project context.

By default, it shows the latest 20 logs.

## When to use it

Use `ctx logs` when you want a quick view of recent project activity without searching through the complete log history.

It is a convenience command for quickly reviewing recent logs.

## How it works

The command returns logs in recent-first order.

The number of logs displayed can be changed with `--count`.

The output can be presented using different views:

- The default view shows recent logs in a concise human-readable format.
- `--short` or `--oneline` shows a compact result.
- `--verbose` shows detailed log information.
- `--json` returns the result as JSON.
- `--pretty-json` returns the JSON result with formatting.

The command only presents existing logs and does not modify them.

`ctx logs` provides the same recent-log listing capability as [`ctx log list`](../log/list/), as a shorter command for everyday use.

## Examples

### List recent logs

```cmd
ctx logs
```

Shows the latest 20 logs.

### Show a specific number of logs

```cmd
ctx logs --count=50
```

Shows the latest 50 logs.

### Show recent logs as formatted JSON

```cmd
ctx logs --pretty-json
```

Shows the recent logs as formatted JSON.

### Show the compact output

```cmd
ctx logs --short
```

Shows recent logs in a compact format.
