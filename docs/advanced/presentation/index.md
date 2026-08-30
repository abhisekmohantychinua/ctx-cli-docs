---
sidebar_position: 2
---

# Presentation

CTX provides multiple presentation modes for displaying project context in the CLI.

The same record can be presented with different levels of detail depending on what you are trying to accomplish. Everyday usage should remain concise and readable, while detailed inspection and machine-readable output are available when needed.

CTX provides five general presentation modes:

1. **Default View**
2. **Verbose View**
3. **Short View**
4. **JSON View**
5. **Pretty JSON View**

Tasks additionally provide two structural views:

- **List View**
- **Tree View**

These views do not change the underlying data. They only change how CTX presents it.

## Default View

The default view is the primary presentation mode for everyday use.

It provides the information that is most useful for understanding a record without exposing every available field. The output is structured for human reading and prioritizes situational awareness.

For example, a session may be displayed as:

```text
Status       ACTIVE
Started      30 Aug 2026 04:10:23 PM IST
Duration     1h 25m

Session Notes
Working on authentication flow
```

The default view is intended to answer:

> **What do I need to know about this right now?**

It is used when no presentation option is explicitly provided.

## Verbose View

The verbose view provides a more complete representation of a record.

It includes information that may not be necessary during normal usage, such as the record identifier and additional fields or metadata.

For example:

```text
ID           8f4c2c1e-7a4e-4f7b-9d12-6f4d9a7c31a2
Status       ACTIVE
Started      30 Aug 2026 04:10:23 PM IST
Ended        --

Session Notes
Working on authentication flow
```

Verbose output is useful when:

- inspecting a specific record
- identifying a record by its ID
- debugging or troubleshooting
- checking fields that are omitted from the default view

The verbose view prioritizes **completeness over brevity**.

## Short View

The short view provides a compact, single-line representation of a record.

It is intended for situations where several records need to be scanned quickly.

For example:

```text
8f4c2c1  ACTIVE  30 Aug 2026 04:10 PM IST  1h 25m
```

For tasks, a short representation may look like:

```text
8f4c2c1  IN PROGRESS  Implement authentication
```

The short view prioritizes:

- compactness
- scanability
- consistent single-line output

It is particularly useful when displaying multiple records.

## JSON View

The JSON view outputs the underlying record as JSON.

Unlike the human-oriented presentation modes, JSON output is intended for tools, scripts, automation, and users who need structured data.

For example:

```json
{
  "id": "8f4c2c1e-7a4e-4f7b-9d12-6f4d9a7c31a2",
  "notes": "Working on authentication flow",
  "createdAt": "2026-08-30T10:40:23Z",
  "endedAt": null,
  "status": "ACTIVE"
}
```

JSON output represents the data itself rather than its human-oriented presentation.

This makes it suitable for:

- shell pipelines
- scripts
- automation
- programmatic processing
- integration with other tools

JSON output does not use the human-readable default, verbose, or short presentation.

## Pretty JSON View

Pretty JSON provides the same structured JSON representation as JSON view, but formats it across multiple lines with indentation.

For example:

```json
{
  "id": "8f4c2c1e-7a4e-4f7b-9d12-6f4d9a7c31a2",
  "notes": "Working on authentication flow",
  "createdAt": "2026-08-30T10:40:23Z",
  "endedAt": null,
  "status": "ACTIVE"
}
```

Pretty JSON is useful when JSON needs to be inspected or read by a person.

The difference between the two JSON modes is presentation only:

| View | Purpose |
| --- | --- |
| JSON | Compact structured output for tools and automation |
| Pretty JSON | Formatted structured output for human inspection |

## Choosing a Presentation

The presentation mode should match the purpose of the command.

| View | Best for |
| --- | --- |
| Default | Everyday use and situational awareness |
| Verbose | Inspecting complete record details |
| Short | Quickly scanning multiple records |
| JSON | Scripts, automation, and structured processing |
| Pretty JSON | Reading structured data manually |

The modes do not represent different versions of the data. They are different representations of the same underlying record.

## Task Views

Tasks have a hierarchical structure that cannot always be understood from an individual task view.

For this reason, CTX provides two additional task-specific views:

- **List**
- **Tree**

These views are designed to understand relationships between multiple tasks rather than the details of a single task.

### Task List

The task list presents tasks as a flat collection.

Parent-child relationships are intentionally not emphasized. Every task is presented as an independent entry.

For example:

```text
T1       PENDING       Build Project Management System
T2       PENDING       Design System Architecture
T3       IN PROGRESS   Implement Core Features
T4       PENDING       Testing and Deployment
T5       COMPLETED     Design Database Schema
T6       COMPLETED     Design API Structure
T7       PENDING       Define Authentication Strategy
```

The list is useful when the primary concern is:

- finding a task
- scanning many tasks
- checking task status
- viewing tasks without navigating their hierarchy

The task list prioritizes **coverage and scanability**.

### Task Tree

The task tree preserves the parent-child relationships between tasks.

It displays the hierarchy so that larger units of work and their subtasks can be understood together.

For example:

```text
T1: Build Project Management System (PENDING)
+-- T2: Design System Architecture (PENDING)
|   +-- T5: Design Database Schema (COMPLETED)
|   +-- T6: Design API Structure (COMPLETED)
|   +-- T7: Define Authentication Strategy (PENDING)
+-- T3: Implement Core Features (IN PROGRESS)
|   +-- T8: Implement User Management (IN PROGRESS)
|   +-- T9: Implement Task Management (COMPLETED)
+-- T4: Testing and Deployment (PENDING)
    +-- T10: Write Unit Tests (BLOCKED)
    +-- T11: Run Integration Tests (PENDING)
```

The tree is useful when the primary concern is:

- understanding task hierarchy
- seeing how work is divided
- navigating parent and subtask relationships
- understanding the structure of a larger unit of work

The task tree prioritizes **structure and relationships**.

## Presentation and Context

Presentation does not alter project context.

A session, task, log, or decision remains the same record regardless of how it is displayed.

For example:

```text
                Project Context
                       │
          ┌────────────┼────────────┐
          │            │            │
       Session        Tasks        Logs
          │            │            │
          └────────────┼────────────┘
                       │
                   Decisions
```

Presentation only determines how these records are exposed to the user.

This separation allows CTX to keep its underlying context structured and consistent while providing different representations for different situations.
