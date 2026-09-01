---
sidebar_position: 1
---

# Identifier

CTX uses structured identifiers to uniquely identify sessions, tasks, logs, and decisions within a project.

This page explains how CTX generates identifiers, what an identifier looks like, how it is validated, and how CTX keeps track of the next identifier for each domain.

## How Identifiers Are Generated

Each core domain has its own identifier sequence. The sequences are independent of one another. Creating a task does not affect the next session, log, or decision identifier.

Identifiers are generated sequentially within their respective domains. For example, **Sessions** may receive identifiers like **S1**, **S2** and **S3**. While **Tasks** may receive identifiers like **T1**, **T2** and **T3**.

The letter identifies the domain, while the number identifies the position of that record in the domain's sequence.

### Identifier Format

A valid CTX identifier has two parts **domain** and **number**.

```text
<domain><number>
```

For example: S3, T12, L8, D24

The first character identifies the domain. An identifier must use a supported domain prefix followed by a positive non-zero integer.

| Prefix | Domain   |
| ------ | -------- |
| S      | Session  |
| T      | Task     |
| L      | Log      |
| D      | Decision |

The remaining characters represent a positive sequential number.

### Identifier Validation

CTX validates identifiers before using them to locate or modify records.

A valid identifier:

- Starts with `S`, `T`, `L`, or `D`.
- Uses a numeric value after the prefix.
- Starts its numeric portion at `1`.
- Does not contain spaces or other characters.
- Represents an identifier belonging to the expected domain.

### Domain-Specific Sequences

CTX maintains a separate sequence for each supported domain. This means the same numeric value can exist across different domains without creating a conflict. For example **S5**, **T5**, **L5**, **D5** are all valid identifiers. They identify four different records because their domain prefixes distinguish them. Within a single domain, however, an identifier is unique. A project cannot have two different sessions with S5.

### Identifier Counter

CTX maintains the next identifier to be issued for each domain. The counter is initialized when the identifier manager is created and starts at `1` for every supported domain.

When a new record is created, CTX uses the current value for that domain and then advances the corresponding counter. For example current task counter **5**, create a task. It assigns **T5** and next task counter becomes **6**. The next task will therefore receive **T6**.

The counters for the other domains remain unchanged.

### Identifier Generator

The identifier manager is persisted as a single project record named `identifier-generator.json`. This record keeps the next identifier for every supported domain. A typical file looks like:

```json
{
  "nextDecisionIdentifier": 3,
  "nextLogIdentifier": 4,
  "nextSessionIdentifier": 3,
  "nextTaskIdentifier": 15
}
```

Each value represents the next number that will be assigned in that domain. For example **nextSessionIdentifier = 3** means that the next session created will receive **S3**.

## Why the Generator Is Persisted

The identifier counters are stored with the project so that CTX can continue the same sequences across separate executions. Without a persisted counter, restarting CTX could cause identifiers to start again from the beginning and collide with existing records.

### Relationship to Records

The identifier generator stores **the next number**, not the records themselves.

For example `nextTaskIdentifier = 15` does not mean task `T15` already exists. It means `T15` is the next task identifier available for allocation. The actual task record remains in the task data. This distinction applies to every domain.

## Advancing the Counter

When CTX successfully creates a record:

1. The current domain counter is used to form the new identifier.
2. The identifier is assigned to the new record.
3. The counter advances by one.
4. The updated counter is persisted.

## Deletion and Identifiers

Deleting a record does not cause its identifier to become available again. This keeps identifiers stable and avoids ambiguity when older references or exported records still contain the deleted identifier.

## Identifier Limits

Each domain uses a numeric sequence represented by a 64-bit signed integer.

The practical maximum value for a domain identifier is therefore:

```text
9,223,372,036,854,775,807
```

Because the domain prefix is stored separately as part of the identifier format, the complete identifier remains readable while the numeric sequence provides a very large range.

Under normal project usage, this limit is far beyond the number of records a project is expected to create.
