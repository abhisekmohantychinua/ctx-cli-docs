---
sidebar_position: 3
---

# Querying

The **Query System** provides a common way to find records across CTX's execution context.

It is designed for users who need more control than the normal views provide. Instead of changing the way records are stored, a query lets you select a field, provide an expression for that field, optionally control pagination, and choose how the matching records are sorted.

Querying is available for sessions, tasks, logs, and decisions.

:::note

Querying is an advanced capability. You do not need it for normal CTX usage. The regular view commands are intended for everyday situational awareness, while querying is useful when you need to inspect or retrieve specific records from project history.

:::

## Why Querying Exists

CTX stores execution history over time. As a project grows, simply viewing the latest records is not always enough.

You may want to find:

- sessions that became inactive
- tasks that are blocked
- decisions related to a particular topic
- logs tagged as issues
- records created before or after a particular time
- records matching a particular identifier

Querying provides a consistent mechanism for these cases without requiring a separate search implementation for every domain.

The same query model is used across sessions, tasks, logs, and decisions. Only the fields available for filtering and sorting change from one domain to another.

## Query Commands

Each query is scoped to a domain.

```text
ctx session query
ctx task query
ctx log query
ctx dec query
```

The query command accepts the same common query controls across these domains:

| Option | Purpose |
| --- | --- |
| `--expression`, `-x` | Expression used to filter records. Required. |
| `--field`, `-f` | Field on which the expression is evaluated. Each domain provides its own available fields and default. |
| `--page` | Page number to return. Defaults to `1`. |
| `--size` | Number of records in a page. Defaults to `10`. |
| `--sort-by` | Field used to sort the matching records. Each domain provides its own default. |
| `--sort` | Sort direction: `ASC` or `DESC`. Defaults to `DESC`. |
| `--verbose`, `-vb` | Controls the level of detail used when presenting matching records. |

For example:

```text
ctx task query -f status -x equals:BLOCKED
```

This asks CTX to find tasks whose `status` is `BLOCKED`.

## The Query Model

A query can be understood as four separate decisions:

```text
Field
  ↓
Expression
  ↓
Matching records
  ↓
Pagination + Sorting
```

For example:

```text
Field       status
Expression  equals:BLOCKED
Page        1
Size        10
Sort By     createdAt
Sort        DESC
```

The field identifies **what property to inspect**. The expression describes **what that property must satisfy**. Pagination determines **which portion of the matching records to return**, while sorting determines **the order of those records**.

## Fields

The `--field` option determines which field is queried.

Fields are defined by each domain and are validated before the query is executed. This means that a field from one domain cannot be assumed to exist in another.

### Sessions

Session queries support:

```text
id
status
createdAt
endedAt
notes
```

The default filter field is `status`.

The default sort field is `createdAt`.

### Tasks

Task queries support:

```text
id
task
description
status
createdAt
completedAt
blockReason
```

The default filter field is `status`.

The default sort field is `createdAt`.

### Logs

Log queries support:

```text
id
note
timestamp
tag
referenceType
referenceIdentifier
```

The default filter field is `tag`.

The default sort field is `timestamp`.

### Decisions

Decision queries support:

```text
id
topic
reasoning
timestamp
tags
referenceType
referenceIdentifier
```

The default filter field is `topic`.

The default sort field is `timestamp`.

:::tip

Use `--field` when you know exactly which property you want to inspect. The default field is chosen for each domain to make common queries shorter, but it does not limit what can be queried.

:::

## Expressions

The value supplied to `--expression` is interpreted by CTX's expression parser.

Expressions use a linguistic form rather than symbolic comparison operators. The general form is:

```text
operator:value
```

A negated expression can be written as:

```text
!operator:value
```

For example:

```text
equals:BLOCKED
!equals:COMPLETED
contains:authentication
regex:^auth.*
```

This makes the intent of a query explicit and allows the same expression model to work with different field types.

## String Expressions

String fields support equality, case-insensitive equality, regular expressions, containment, prefix and suffix matching, and lexical comparisons.

### Equality

```text
equals:value
```

Matches the exact string.

For example:

```text
ctx task query -f status -x equals:BLOCKED
```

### Case-Insensitive Equality

```text
equalsIgnoreCase:value
```

Matches the value without considering letter case.

```text
equalsIgnoreCase:blocked
```

### Contains

```text
contains:value
```

Matches strings containing the supplied value.

```text
contains:authentication
```

### Starts With

```text
startsWith:value
```

Matches strings beginning with the supplied value.

```text
startsWith:Fix
```

### Ends With

```text
endsWith:value
```

Matches strings ending with the supplied value.

```text
endsWith:issue
```

### Regular Expressions

```text
regex:pattern
```

Matches the field using a regular expression.

For example:

```text
regex:^auth.*
```

Regex expressions are useful when exact matching is too restrictive and a pattern is more appropriate.

### Empty and Blank Values

String fields also support expressions that do not require a value:

```text
isEmpty
isBlank
```

Their negated forms are also supported:

```text
!isEmpty
!isBlank
```

`isEmpty` checks for an empty string, while `isBlank` also considers whitespace-only values blank.

### Negation

Most value-based expressions can be negated by prefixing the expression with `!`:

```text
!equals:completed
!contains:test
!regex:^temp.*
```

Negation means that the record must not satisfy the supplied expression.

## Numeric Expressions

Numeric fields support equality and comparisons.

```text
equals:10
greaterThan:10
lessThan:10
```

Each expression is interpreted according to the numeric type of the selected field.

For example, if a numeric field contains a value greater than `100`:

```text
greaterThan:100
```

The same operators can be negated:

```text
!equals:10
!greaterThan:10
!lessThan:10
```

## Date Expressions

Date fields support equality and temporal comparisons.

```text
equals:2026-01-01T00:00:00Z
greaterThan:2026-01-01T00:00:00Z
lessThan:2026-01-01T00:00:00Z
```

CTX also provides the more descriptive aliases:

```text
after:2026-01-01T00:00:00Z
before:2026-01-01T00:00:00Z
```

`after` has the same comparison semantics as `greaterThan`, while `before` has the same semantics as `lessThan`.

### Current Time

The special value `:now` represents the current instant.

For example:

```text
before::now
after::now
```

This is useful when a query needs to express a condition relative to the time at which it is executed.

### Custom Date Formats

Date expressions can also provide a formatter when a date is not written in the default ISO representation.

For example:

```text
before:21/08/2026(dd/MM/yyyy)
```

The formatter in parentheses tells CTX how to interpret the supplied date value.

## Boolean Expressions

Boolean fields support equality expressions using `true` or `false`.

```text
equals:true
equals:false
```

Negation is also supported:

```text
!equals:true
```

An arbitrary value is not accepted as a Boolean expression. CTX validates the supplied value against the actual type of the selected field.

## Enum Expressions

Enum fields are evaluated using their enum constant names.

For example, if a field contains:

```text
ACTIVE
INACTIVE
```

it can be queried using normal string-style expressions:

```text
equals:ACTIVE
equalsIgnoreCase:active
regex:ACT.*
contains:ACT
```

This allows enum values to use the same expression language without requiring a separate query syntax.

## Null Values

The query system provides two special expressions for null checks:

```text
:null
!:null
```

`:null` matches records whose selected field is `null`.

`!:null` matches records whose selected field is not `null`.

These expressions are available regardless of the selected field type.

For example:

```text
ctx session query -f endedAt -x :null
```

can be used to find sessions whose `endedAt` value is null.

## Pagination

Queries return results in pages rather than returning every matching record at once.

The `--page` option selects the page and `--size` controls how many records belong to each page.

```text
ctx task query -f status -x equals:PENDING --page 2 --size 20
```

The default page is `1` and the default page size is `10`.

Page numbers are one-based at the CLI level. CTX converts the requested page to the zero-based page representation used internally by the persistence layer.

A page size must be greater than zero.

Pagination is independent of filtering. CTX first determines the records matching the expression, then applies the requested page and size to that result set.

## Sorting

The `--sort-by` option determines which field is used to order matching records.

The `--sort` option determines the direction:

```text
ASC
DESC
```

For example:

```text
ctx log query -f tag -x equals:ISSUE --sort-by timestamp --sort DESC
```

The default sort direction is `DESC`.

Each domain provides a default sort field so that common queries do not require explicit sorting options.

Sorting fields are validated against the fields supported by the domain.

## Query Examples

### Find Active Sessions

```text
ctx session query -f status -x equals:ACTIVE
```

### Find Blocked Tasks

```text
ctx task query -f status -x equals:BLOCKED
```

### Find Authentication-Related Tasks

```text
ctx task query -f task -x contains:authentication
```

### Find Issue Logs

```text
ctx log query -f tag -x equals:ISSUE
```

### Find Logs Referencing a Task

```text
ctx log query -f referenceType -x equals:TASK
```

### Find Decisions About Authentication

```text
ctx dec query -f topic -x contains:authentication
```

### Find Incomplete Sessions

```text
ctx session query -f endedAt -x :null
```

### Find Recent Records

Date fields can be queried relative to the current time when the field supports date expressions.

```text
ctx session query -f createdAt -x after::now
```

For a useful historical range, provide an explicit date or time value instead.

## Query Validation

CTX validates the query before executing it.

Validation occurs at several levels:

1. The field must be supported by the selected domain.
2. The expression must not be blank.
3. The expression must be valid for the type of the selected field.
4. Pagination values must be positive.
5. The sort field must be supported by the selected domain.
6. The sort direction must be `ASC` or `DESC`.

If the expression cannot be interpreted for the selected field type, the query is rejected rather than silently producing an unexpected result.

For example, a numeric expression cannot be applied to a field whose type does not support that operation.

This type-aware behavior is important because the query language is not simply a textual search. CTX identifies the type of the selected field and evaluates the expression according to that type.

## How Querying Works

At a high level, a domain query follows this process:

```text
CLI options
    │
    ▼
Validate query parameters
    │
    ▼
Resolve domain field metadata
    │
    ▼
Identify field type
    │
    ▼
Parse linguistic expression
    │
    ▼
Build predicate
    │
    ▼
Filter records
    │
    ▼
Sort matching records
    │
    ▼
Apply pagination
    │
    ▼
Return query result
```

The query layer is shared across the application rather than implemented separately for every resource.

The persistence layer supplies metadata describing queryable fields and their types. The expression parser then converts the textual expression into a type-specific predicate. This keeps the query mechanism independent from individual domain models while allowing each domain to expose its own fields and defaults.

## Querying Across Domains

The query system is intentionally consistent, but it does not treat every domain as identical.

For example:

```text
Sessions   → status, createdAt, endedAt, notes
Tasks      → status, createdAt, completedAt, blockReason
Logs       → tag, timestamp, referenceType
Decisions  → topic, timestamp, tags, referenceType
```

The common query mechanism provides the same way to express filtering, pagination, and sorting, while domain-specific metadata determines which fields are valid.

This gives CTX a useful balance:

> **One query language, with fields appropriate to each domain.**

## Query Results

A query result contains both the records that matched the query and metadata describing how the result was produced.

The query result conceptually contains:

- the selected filter field
- the supplied expression
- the requested page
- the requested page size
- the total number of matching records
- the total number of pages
- the sort field
- the sort direction
- the matching records

The exact human-readable arrangement of these values is intentionally documented separately.

## Query Result Presentation

> **Placeholder:** Query result presentation will be documented in the dedicated presentation documentation.
>
> This section will cover how query results are arranged and displayed in normal, verbose, and machine-readable output without changing the query semantics described here.

## When to Use Querying

Use normal view commands when you want to understand the current state of the project quickly.

Use querying when you need to retrieve a particular subset of project history.

For example:

```text
View
→ Where am I right now?

Query
→ Find the records matching this condition.
```

This distinction keeps CTX's everyday workflow simple while still providing a powerful mechanism for users who need precise access to their execution history.

## Summary

The Query System provides a consistent, type-aware way to retrieve records from CTX domains.

A query:

- Selects a domain-specific field.
- Evaluates a linguistic expression against that field.
- Uses the field's type to determine how the expression is interpreted.
- Supports string, numeric, date, Boolean, enum, and null expressions where applicable.
- Supports pagination and sorting.
- Returns matching records together with query metadata.
- Uses the same query model across sessions, tasks, logs, and decisions.

Querying is therefore not a separate search database or a general-purpose text search engine. It is a structured way to inspect CTX's local execution records with precise, predictable filtering.
