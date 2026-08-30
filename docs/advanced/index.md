---
sidebar_position: 3
---

# Advanced

CTX is designed to remain simple during everyday work while still providing deeper capabilities when you need more control, richer context, or detailed information.

The **Advanced** section covers capabilities that are not part of the basic execution workflow but become useful when working with larger projects, historical context, AI agents, or more detailed project analysis.

## Advanced Capabilities

{/*
<!-- TODO: QUERY ISN'T A PRIMARY FEATURE SO MOVE BELOW -->
*/}

### [Querying](./querying/)

Learn how to search and retrieve project records using CTX's query system.

Querying provides field-based filtering, expressions, pagination, and sorting across sessions, tasks, logs, and decisions.

It is intended for users who need more precise access to their project history than the normal views provide.

### [Presentation](./presentation/)

Learn how CTX presents project records through its different views.

Presentation covers the normal and verbose views available for sessions, tasks, logs, and decisions, as well as the task-specific list and tree views.

These views are designed for different levels of detail and different ways of understanding project execution.

### [Instruction](./instruction/)

Learn how CTX works with AI agents through instructions.

Instructions provide static project knowledge such as architecture rules, constraints, coding standards, and system design decisions. They are kept separate from dynamic execution context so that AI agents can use both types of information independently.

This section also explains how the `ctx instruction` command generates instruction files for supported environments and IDEs.

### [Reference](./reference/)

Learn how logs and decisions can be connected to the execution context they belong to.

References allow logs and decisions to point to a specific session or task, making otherwise independent records easier to understand and retrieve as part of a larger piece of work.

{/*
<!-- TODO: SNAPSHOT SHOULD BE ADDED HERE -->
*/}

## Why Advanced?

The basic CTX workflow is intentionally small:

```text
Start
  ↓
Work
  ↓
Log
  ↓
Decide
  ↓
Stop
```

The advanced capabilities build on this execution context rather than changing how you work.

For example:

```text
                    Project Context
                          │
        ┌─────────────────┼─────────────────┐
        │                 │                 │
     Querying        Presentation      Reference
        │                 │                 │
   Find records      Understand        Connect records
        │             records
        │                 │
        └─────────────────┼─────────────────┘
                          │
                     Instruction
                          │
                    Give AI agents
                    project knowledge
```

These capabilities become increasingly useful as a project accumulates sessions, tasks, logs, and decisions.

## Working With Advanced Features

Advanced features are independent.

You do not need to learn or use all of them to use CTX effectively.

You can use them when a particular need arises:

- Need to find a specific record? → **Querying**
- Need more detail from a record? → **Presentation**
- Need to provide project rules to an AI agent? → **Instruction**
- Need to understand what a log or decision belongs to? → **Reference**

Together, these capabilities extend CTX from a lightweight execution tracker into a richer project context system while keeping the everyday workflow simple.
