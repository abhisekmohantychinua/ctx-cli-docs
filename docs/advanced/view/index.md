---
sidebar_position: 2
---

# Views

CTX provides multiple view modes for displaying project context in the CLI.

The same record can be presented with different levels of detail depending on what you are trying to accomplish. Everyday usage should remain concise and readable, while detailed inspection and machine-readable output are available when needed. These views do not change the underlying data. They only change how CTX presents it.

CTX provides five general view modes:

1. **Default View**
2. **Verbose View**
3. **Short View**
4. **JSON View**
5. **Pretty JSON View**

Tasks additionally provide two structural views:

- **List View**
- **Tree View**

## Default View

The default view is the primary presentation mode for everyday use.

It provides the information that is most useful for understanding a record without exposing every available field. The output is structured for human reading and prioritizes situational awareness.

It is used when no view option is explicitly provided.

### Session

```cmd
Status       INACTIVE
Started      29 Aug 2026 09:43:16 PM IST
Ended        29 Aug 2026 11:13:34 PM IST
Duration     1h 30m

Session Notes
Working on MultiStack CLI
```

### Task

```cmd
Task         Implement User Management
Status       IN PROGRESS
Created      30 Aug 2026 03:55:17 PM IST

Description
Implement user registration, login, profile management, and basic user administration features.
```

### Log

```cmd
30 Aug 2026 09:50:53 PM IST     ISSUE   Google oauth2 has incorrect origin.
```

### Decision

```cmd
Use PostgreSQL for the application database

PostgreSQL provides strong relational integrity and transaction support, which fits our application requirements.

30 Aug 2026 09:53:36 PM IST
```

## Verbose View

The verbose view provides a more complete representation of a record.

It includes information that may not be necessary during normal usage, such as the record identifier and additional fields or metadata.

Verbose output is useful when inspecting a specific record, identifying a record by its ID, debugging or troubleshooting, checking fields that are omitted from the default view. The verbose view prioritizes  completeness over brevity.

It is used when `-v`, `--verbose` option is explicitly provided.

### Session

```cmd
ID           S1
Status       INACTIVE
Started      29 Aug 2026 09:43:16 PM IST
Ended        29 Aug 2026 11:13:34 PM IST
Duration     1h 30m

Session Notes
Working on MultiStack CLI
```

### Task

```cmd
ID           T8
Task         Implement User Management
Status       IN PROGRESS
Created      30 Aug 2026 03:55:17 PM IST

Description
Implement user registration, login, profile management, and basic user administration features.

Block Reason
--
```

### Log

```cmd
ID               L1
Timestamp        30 Aug 2026 09:50:53 PM IST
Tag              ISSUE

Note
Google oauth2 has incorrect origin.
```

### Decision

```cmd
ID               D1
Timestamp        30 Aug 2026 09:53:36 PM IST
Topic            Use PostgreSQL for the application database

Tags
database, architecture, backend

Reasoning
PostgreSQL provides strong relational integrity and transaction support, which fits our application requirements.
```

## Short View

The short view provides a compact, single-line representation of a record. It is intended for situations where several records need to be scanned quickly. The short view prioritizes compactness, scanability, consistent single-line output.

It is used when `-s`, `--short`, `--oneline` option is explicitly provided.

### Session

```cmd
S1  INACTIVE  29 Aug 2026 09:43:16 PM IST  1h 30m
```

### Task

```cmd
T8       IN PROGRESS   Implement User Management
```

### Log

```cmd
30 Aug 2026 09:50:53 PM IST  ISSUE  Google oauth2 has incorrect origin.
```

### Decision

```cmd
Use PostgreSQL for the application database  database, architecture, backend  30 Aug 2026 09:53:36 PM IST
```

## JSON View

The JSON view outputs the underlying record as JSON.

JSON output represents the data itself rather than its human-view. This makes it suitable for shell pipelines, scripts, automation, programmatic processing, integration with other tools.

JSON output does not use the human-readable default, verbose, or short presentation.

It is used when `--json` option is explicitly provided.

### Session

```json
{"createdAt":"2026-08-29T16:13:16.711Z","endedAt":"2026-08-29T17:43:34.200Z","id":"S1","notes":"Working on MultiStack CLI","status":"INACTIVE"}
```

### Task

```json
{"blockReason":null,"completedAt":null,"createdAt":"2026-08-30T10:25:17.383Z","description":"Implement user registration, login, profile management, and basic user administration features.","id":"T8","status":"IN_PROGRESS","subtasks":[],"task":"Implement User Management"}
```

### Log

```json
{"id":"L1","note":"Google oauth2 has incorrect origin.","referenceIdentifier":null,"referenceType":null,"tag":"ISSUE","timestamp":"2026-08-30T16:20:53.884Z"}
```

### Decision

```json
{"id":"D1","reasoning":"PostgreSQL provides strong relational integrity and transaction support, which fits our application requirements.","referenceIdentifier":null,"referenceType":null,"tags":["database","architecture","backend"],"timestamp":"2026-08-30T16:23:36.600Z","topic":"Use PostgreSQL for the application database"}
```

## Pretty JSON View

Pretty JSON provides the same structured JSON representation as JSON view, but formats it across multiple lines with indentation.

Pretty JSON is useful when JSON needs to be inspected or read by a person. The difference between the two JSON modes is presentation only:

| View | Purpose |
| --- | --- |
| JSON | Compact structured output for tools and automation |
| Pretty JSON | Formatted structured output for human inspection |

It is used when `--pretty-json` option is explicitly provided.

### Session

```json
{
  "createdAt" : "2026-08-29T16:13:16.711Z",
  "endedAt" : "2026-08-29T17:43:34.200Z",
  "id" : "S1",
  "notes" : "Working on MultiStack CLI",
  "status" : "INACTIVE"
}
```

### Task

```json
{
  "blockReason" : null,
  "completedAt" : null,
  "createdAt" : "2026-08-30T10:25:17.383Z",
  "description" : "Implement user registration, login, profile management, and basic user administration features.",
  "id" : "T8",
  "status" : "IN_PROGRESS",
  "subtasks" : [ ],
  "task" : "Implement User Management"
}
```

### Log

```json
{
  "id" : "L1",
  "note" : "Google oauth2 has incorrect origin.",
  "referenceIdentifier" : null,
  "referenceType" : null,
  "tag" : "ISSUE",
  "timestamp" : "2026-08-30T16:20:53.884Z"
}
```

### Decision

```json
{
    "id" : "D1",
    "reasoning" : "PostgreSQL provides strong relational integrity and transaction support, which fits our application requirements.",
    "referenceIdentifier" : null,
    "referenceType" : null,
    "tags" : [ "database", "architecture", "backend" ],
    "timestamp" : "2026-08-30T16:23:36.600Z",
    "topic" : "Use PostgreSQL for the application database"
}
```

## Choosing a View

The view mode should match the purpose of the command.

| View | Best for |
| --- | --- |
| Default | Everyday use and situational awareness |
| Verbose | Inspecting complete record details |
| Short | Quickly scanning multiple records |
| JSON | Scripts, automation, and structured processing |
| Pretty JSON | Reading structured data manually |

The modes do not represent different versions of the data. They are different representations of the same underlying record.

## Special Task Views

Tasks have a hierarchical structure that cannot always be understood from an individual task view. For this reason, CTX provides two additional task-specific views:

- **List**
- **Tree**

These views are designed to understand relationships between multiple tasks rather than the details of a single task.

### Task List

The task list presents tasks as a flat collection. Parent-child relationships are intentionally not emphasized. Every task is presented as an independent entry.

The list is useful when the primary concern is finding a task, scanning many tasks, checking task status, viewing tasks without navigating their hierarchy.

Theres a command for this view i.e.

```cmd
ctx task list
```

```cmd
T1       PENDING       Build Project Management System
T2       PENDING       Design System Architecture
T3       IN PROGRESS   Implement Core Features
T4       PENDING       Testing and Deployment
T5       COMPLETED     Design Database Schema
T6       COMPLETED     Design API Structure
T7       PENDING       Define Authentication Strategy
```

### Task Tree

The task tree preserves the parent-child relationships between tasks.

It displays the hierarchy so that larger units of work and their subtasks can be understood together. The tree is useful when the primary concern is understanding task hierarchy, seeing how work is divided, navigating parent and subtask relationships, understanding the structure of a larger unit of work. The task tree prioritizes structure and relationships.

Theres a command for this view i.e.

```cmd
ctx task tree
```

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

## Query Views

Query results are presented as a view of the matching records, along with the information needed to understand and navigate the result set. The view includes the records matching the query, the field and value used for filtering, current page and page size, total matching records and pages, sorting field and direction.  

Query views are designed for inspection and exploration rather than the concise output used by everyday commands.

- **Default**
- **JSON**
- **Pretty JSON**

### Default

```cmd
T9       COMPLETED     Implement Task Management
T6       COMPLETED     Design API Structure
T5       COMPLETED     Design Database Schema

Showing 3 of 3 results
Page 1/1
Filter     status -> equals:COMPLETED
Sort       createdAt (DESC)
```

### JSON

```json
{"elements":[{"blockReason":null,"completedAt":null,"createdAt":"2026-08-30T10:26:14.933Z","description":null,"id":"T13","status":"PENDING","subtasks":[],"task":"Configure Production Deployment"},{"blockReason":null,"completedAt":null,"createdAt":"2026-08-30T10:26:01.266Z","description":null,"id":"T12","status":"PENDING","subtasks":[],"task":"Run Integration Tests"},{"blockReason":null,"completedAt":null,"createdAt":"2026-08-30T10:25:38.633Z","description":null,"id":"T10","status":"PENDING","subtasks":[],"task":"Implement Notifications"},{"blockReason":null,"completedAt":null,"createdAt":"2026-08-30T10:25:01.466Z","description":null,"id":"T7","status":"PENDING","subtasks":[],"task":"Define Authentication Strategy"},{"blockReason":null,"completedAt":null,"createdAt":"2026-08-30T10:24:17.701Z","description":null,"id":"T4","status":"PENDING","subtasks":[{"blockReason":"Waiting for integration test environment","completedAt":null,"createdAt":"2026-08-30T10:25:45.333Z","description":null,"id":"T11","status":"BLOCKED","subtasks":[],"task":"Write Unit Tests"},{"blockReason":null,"completedAt":null,"createdAt":"2026-08-30T10:26:01.266Z","description":null,"id":"T12","status":"PENDING","subtasks":[],"task":"Run Integration Tests"},{"blockReason":null,"completedAt":null,"createdAt":"2026-08-30T10:26:14.933Z","description":null,"id":"T13","status":"PENDING","subtasks":[],"task":"Configure Production Deployment"}],"task":"Testing and Deployment"},{"blockReason":null,"completedAt":null,"createdAt":"2026-08-30T10:24:05.466Z","description":null,"id":"T3","status":"PENDING","subtasks":[{"blockReason":null,"completedAt":null,"createdAt":"2026-08-30T10:25:17.383Z","description":"Implement user registration, login, profile management, and basic user administration features.","id":"T8","status":"IN_PROGRESS","subtasks":[],"task":"Implement User Management"},{"blockReason":null,"completedAt":"2026-08-30T10:29:06.213Z","createdAt":"2026-08-30T10:25:29.684Z","description":null,"id":"T9","status":"COMPLETED","subtasks":[],"task":"Implement Task Management"},{"blockReason":null,"completedAt":null,"createdAt":"2026-08-30T10:25:38.633Z","description":null,"id":"T10","status":"PENDING","subtasks":[],"task":"Implement Notifications"}],"task":"Implement Core Features"},{"blockReason":null,"completedAt":null,"createdAt":"2026-08-30T10:23:51.732Z","description":null,"id":"T2","status":"PENDING","subtasks":[{"blockReason":null,"completedAt":"2026-08-30T10:29:04.684Z","createdAt":"2026-08-30T10:24:39.932Z","description":null,"id":"T5","status":"COMPLETED","subtasks":[],"task":"Design Database Schema"},{"blockReason":null,"completedAt":"2026-08-30T10:29:04.733Z","createdAt":"2026-08-30T10:24:50.466Z","description":null,"id":"T6","status":"COMPLETED","subtasks":[],"task":"Design API Structure"},{"blockReason":null,"completedAt":null,"createdAt":"2026-08-30T10:25:01.466Z","description":null,"id":"T7","status":"PENDING","subtasks":[],"task":"Define Authentication Strategy"}],"task":"Design System Architecture"},{"blockReason":null,"completedAt":null,"createdAt":"2026-08-30T10:23:38.265Z","description":null,"id":"T1","status":"PENDING","subtasks":[{"blockReason":null,"completedAt":null,"createdAt":"2026-08-30T10:23:51.732Z","description":null,"id":"T2","status":"PENDING","subtasks":{"elements":[{"blockReason":null,"completedAt":"2026-08-30T10:29:06.213Z","createdAt":"2026-08-30T10:25:29.684Z","description":null,"id":"T9","status":"COMPLETED","subtasks":[],"task":"Implement Task Management"},{"blockReason":null,"completedAt":"2026-08-30T10:29:04.733Z","createdAt":"2026-08-30T10:24:50.466Z","description":null,"id":"T6","status":"COMPLETED","subtasks":[],"task":"Design API Structure"},{"blockReason":null,"completedAt":"2026-08-30T10:29:04.684Z","createdAt":"2026-08-30T10:24:39.932Z","description":null,"id":"T5","status":"COMPLETED","subtasks":[],"task":"Design Database Schema"}],"metadata":{"field":"status","page":{"number":0,"size":10,"totalElements":3,"totalPages":1},"sort":{"direction":"DESC","field":"createdAt"},"value":"equals:COMPLETED"}}  
```

### Pretty JSON

```json
{
  "elements" : [ {
    "blockReason" : null,
    "completedAt" : "2026-08-30T10:29:06.213Z",
    "createdAt" : "2026-08-30T10:25:29.684Z",
    "description" : null,
    "id" : "T9",
    "status" : "COMPLETED",
    "subtasks" : [ ],
    "task" : "Implement Task Management"
  }, {
    "blockReason" : null,
    "completedAt" : "2026-08-30T10:29:04.733Z",
    "createdAt" : "2026-08-30T10:24:50.466Z",
    "description" : null,
    "id" : "T6",
    "status" : "COMPLETED",
    "subtasks" : [ ],
    "task" : "Design API Structure"
  }, {
    "blockReason" : null,
    "completedAt" : "2026-08-30T10:29:04.684Z",
    "createdAt" : "2026-08-30T10:24:39.932Z",
    "description" : null,
    "id" : "T5",
    "status" : "COMPLETED",
    "subtasks" : [ ],
    "task" : "Design Database Schema"
  } ],
  "metadata" : {
    "field" : "status",
    "page" : {
      "number" : 0,
      "size" : 10,
      "totalElements" : 3,
      "totalPages" : 1
    },
    "sort" : {
      "direction" : "DESC",
      "field" : "createdAt"
    },
    "value" : "equals:COMPLETED"
  }
}
```

:::important
The `Query` model follows a zero based page numbering. That's why the page number shows zero in json based views. But the default view shows it by adding one to it. So it stays meaningful.
:::

## Views and Context

View does not alter project context. A session, task, log, or decision remains the same record regardless of how it is displayed. View only determines how these records are exposed to the user.

This separation allows CTX to keep its underlying context structured and consistent while providing different representations for different situations.
