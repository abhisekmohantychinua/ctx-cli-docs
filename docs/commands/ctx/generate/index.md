---
sidebar_position: 3
---
# ctx generate

Generate project artifacts.

## Generate (`g`)

### Options

| options | shorthand | required | description |
| --- | --- | --- | --- |
| --help | -h | | Show this help message and exit. |
| --version | -V | | Print version information and exit. |

### Subcommands

- [instruction, i](./instruction/) - Generate project instructions.

## What it does

The `generate` command provides commands for generating project-specific artifacts.

It does not generate anything on its own. A subcommand must be provided to perform a specific generation operation.

## When to use it

Use `ctx generate` when you want to generate one of the artifacts supported by CTX.

Choose the appropriate subcommand based on the type of artifact you want to generate.

## How it works

The `generate` command acts as a container for generation-related subcommands.

Running it without a subcommand does not perform any generation and results in a missing subcommand error.

## Examples

### List available generation commands

```cmd
ctx generate --help
```

Displays the available generation subcommands and their options.

### Generate project instructions

```cmd id="8m5v2p"
ctx generate instruction
```

Runs the instruction generation command.
