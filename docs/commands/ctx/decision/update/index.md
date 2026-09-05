---
sidebar_position: 2
---

# ctx decision update

Update an existing project decision.

## Update (`u`)

### Arguments

| argument | required | description |
| --- | --- | --- |
| id | yes | Decision identifier. |

### Options

| options | shorthand | required | description |
| --- | --- | --- | --- |
| --topi | -t | | Decision topic. |
| --reasoning | -r | | Decision reasoning. |
| --help | -h | | Show this help message and exit. |
| --version | -V | | Print version information and exit. |

### Subcommands

- [reference, ref](./reference/) - Update the reference associated with a decision.

## What it does

Updates an existing decision and returns its identifier.

You can update the decision topic or reasoning, or manage its reference through the `reference` subcommand.

## When to use it

Use `ctx decision update` when an existing decision needs to be corrected, clarified, or adjusted after it has been recorded.

This is a decision management operation for modifying existing context rather than recording a new decision.

## How it works

The command requires the identifier of an existing decision.

Only the fields provided to the command are updated. Fields that are not provided remain unchanged.

The topic can be provided with `--topic`.

Reasoning can be provided directly with `--reasoning=<reasoning>` or entered interactively with `--reasoning`.

The command also supports updating a decision reference through the `reference` subcommand.

## Examples

### Update the decision topic

```cmd
ctx decision update D1 --topic="Use PostgreSQL for the application database"
```

Updates the topic of decision `D1`.

### Update the decision reasoning

```cmd id="8p4m2v"
ctx decision update D1 --reasoning="PostgreSQL provides the relational integrity and transaction support required by the application."
```

Updates the reasoning of decision `D1`.

### Enter the reasoning interactively

```cmd id="3k7n5q"
ctx decision update D1 --reasoning
```

Prompts for the new reasoning before updating the decision.

### Update multiple fields

```cmd id="5v9x1m"
ctx decision update D1 --topic="Use PostgreSQL for the application database" --reasoning="Fits the application's relational and transaction requirements."
```

Updates both the topic and reasoning of decision `D1`.

### Update a decision reference

```cmd id="2q6w8p"
ctx decision update D1 reference --task=T5
```

Updates the reference associated with decision `D1`.

### Use the `u` alias

```cmd id="7m4c9x"
ctx decision u D1 --reasoning="Updated after reviewing the database requirements."
```

Updates decision `D1` using the command alias.
