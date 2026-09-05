---
sidebar_position: 3
---

# ctx log update

Update an existing log.

## Update (`u`)

### Arguments

| argument | required | description |
| --- | --- | --- |
| id | yes | Log identifier. |

### Options

| options | shorthand | required | description |
| --- | --- | --- | --- |
| --tag | -k | | Log tag. |
| --note | -n | | Log notes. |
| --help | -h | | Show this help message and exit. |
| --version | -V | | Print version information and exit. |

### Subcommands

- [reference, ref](./reference/) - Update a log reference.

## What it does

Updates an existing log and returns its identifier.

You can update the log tag or note, or manage its reference through the `reference` subcommand.

## When to use it

Use `ctx log update` when information recorded in an existing log needs to be corrected or changed.

This is a log management operation for adjusting existing context rather than recording a new log.

## How it works

The command requires the identifier of an existing log.

Only the fields provided to the command are updated. Fields that are not provided remain unchanged.

The tag and note can be provided with their respective options.

The command also succeeds when no update option is provided and returns the identifier without changing the log.

If the provided identifier does not match an existing log, the command reports an error and does not modify any log.

Use the `reference` subcommand when the session or task reference of a log needs to be added, changed, or removed.

## Examples

### Update the log note

```cmd
ctx log update L4 --note="Payment API timeout confirmed."
```

Updates the note of log `L4`.

### Update the log tag

```cmd
ctx log update L4 --tag=ISSUE
```

Changes the tag of log `L4` to `ISSUE`.

### Update multiple fields

```cmd
ctx log update L4 --tag=ATTEMPT --note="Retry strategy tested successfully."
```

Updates both the tag and note of log `L4`.

### Update a log reference

```cmd
ctx log update L4 reference --task=T14
```

Updates the reference of log `L4`.

### Update without changing fields

```cmd
ctx log update L4
```

Runs the update operation without changing any log fields and returns the log identifier.
