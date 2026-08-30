---
sidebar_position: 4
---

# Reference

A **Reference** connects a log or decision to another piece of project execution context.

CTX currently allows logs and decisions to reference either:

- A **Session**
- A **Task**

References provide context without duplicating information. Instead of putting the session or task details inside a log or decision, CTX stores a relationship to the existing record.

For example:

```text
Task
└── Implement authentication
    │
    ├── Log
    │   └── OAuth provider returns 401
    │
    └── Decision
        └── Keep server-side state validation
```

The log and decision remain independent records, while their references identify the work they belong to.

## Why References Exist

Logs and decisions are more useful when they can be understood in relation to the work that produced them.

A log such as:

```text
OAuth provider returns 401.
```

contains useful information, but its meaning becomes clearer when it is associated with:

```text
Task: Implement OAuth authentication
```

Similarly, a decision such as:

```text
Keep server-side state validation.
```

becomes more useful when it is connected to the task or session in which the decision was made.

References therefore provide an answer to:

> **What part of the project execution does this record belong to?**

## Reference Types

CTX supports two reference types.

### Session Reference

A session reference associates the record with a specific project session.

```text
Reference Type
SESSION
```

For example:

```text
Decision
├── Topic       Authentication
├── Reference   SESSION
└── Reference ID S2
```

This is useful when the record describes something that happened during a particular period of work but is not specific to a task.

### Task Reference

A task reference associates the record with a specific task.

```text
Reference Type
TASK
```

For example:

```text
Log
├── Tag         ISSUE
├── Reference   TASK
└── Reference ID T14
```

This is useful when the record describes an event, observation, attempt, or decision related to a particular unit of work.

## A Reference Has One Target

A log or decision can reference **one target at a time**.

The target can be either:

```text
SESSION
```

or:

```text
TASK
```

A record cannot reference a session and a task simultaneously.

This keeps the relationship unambiguous.

For example:

```text
Valid

Log
└── Reference → TASK:T14
```

```text
Valid

Decision
└── Reference → SESSION:S3
```

But not:

```text
Invalid

Decision
├── Reference → SESSION:S3
└── Reference → TASK:T14
```

If a record needs to provide context from both a session and a task, the task can provide the more specific work context while the task itself exists within the broader project execution and session history.

## Reference Identifier

A reference consists of two pieces of information:

```text
Reference Type
Reference ID
```

For example:

```text
Reference Type: TASK
Reference ID: T14
```

The reference ID identifies an existing record in the selected domain.

CTX validates explicit references before attaching them to a log or decision.

If the referenced entity does not exist, the operation is rejected.

## Creating a Reference

A reference can be supplied when creating a log or decision.

The reference type and identifier are optional.

For example, a log can explicitly reference a task:

```text
ctx log add --note "OAuth provider returns 401" --task T14
```

A decision can explicitly reference a session:

```text
ctx dec create --topic "Authentication strategy" --session S3
```

When an explicit identifier is provided, CTX verifies that the referenced session or task exists before creating the record.

## Referencing the Active Record

The reference identifier does not always have to be supplied.

You can provide only the reference type and allow CTX to resolve the current active record.

For example:

```text
ctx log add --note "Started investigating callback failure" --task
```

CTX resolves `--task` to the currently active task.

Similarly:

```text
ctx dec create --topic "Authentication strategy" --session
```

resolves the reference to the current active session.

This provides a shorter workflow when the record naturally belongs to the work currently being performed.

## Explicit and Implicit References

There are therefore two ways to provide a reference.

### Explicit Reference

Both the type and identifier are supplied.

```text
TASK:T14
```

CTX validates that `T14` exists before creating or updating the reference.

### Active Reference

Only the reference type is supplied.

```text
TASK
```

CTX resolves the reference to the current active task.

This is useful when you are already working on the task and do not want to manually provide its identifier.

## Missing Active Records

An active reference requires an active record of the selected type.

For example, if:

```text
--task
```

is provided but there is no active task, CTX cannot resolve the reference.

The operation is therefore rejected rather than creating an incomplete reference.

The same applies to sessions:

```text
--session
```

requires an active session when no explicit session identifier is provided.

This prevents references from silently pointing to an unknown target.

## Reference Validation

References are validated according to the selected type.

For a session reference:

```text
SESSION:S3
```

CTX verifies that session `S3` exists.

For a task reference:

```text
TASK:T14
```

CTX verifies that task `T14` exists.

Invalid identifiers are rejected before the log or decision is persisted.

This keeps relationships between records valid and prevents dangling references.

## References on Logs

A log can optionally reference a session or task.

For example:

```text
Log
├── Note            Stripe returned an invalid payment payload.
├── Tag             ISSUE
├── Reference       TASK
└── Reference ID    T21
```

The reference gives the event context without changing the log itself.

A log can also remain unreferenced:

```text
Log
├── Note            Investigating unexpected deployment behavior.
├── Tag             ISSUE
└── Reference       None
```

An unreferenced log is still part of the project's execution history.

## References on Decisions

A decision can optionally reference a session or task.

For example:

```text
Decision
├── Topic           Authentication
├── Reasoning       Keep server-side state validation enabled.
├── Reference       TASK
└── Reference ID    T21
```

This connects the reasoning to the work where the decision matters.

A decision can also exist without a reference when it represents broader project knowledge.

## Updating a Reference

References can be changed after a log or decision has been created.

This is useful when:

- the record was initially created without a reference
- the record was associated with the wrong task
- the record needs to be associated with a different task
- the context of the record becomes clearer later

For example:

```text
ctx log update <id> reference --task T21
```

or:

```text
ctx dec update <id> reference --session S3
```

When updating a reference with an explicit identifier, CTX validates the target before applying the change.

A reference can also be resolved against the current active task or session by providing only the reference type.

## Changing Reference Type

A reference can be moved from one supported type to another.

For example, a decision initially referencing:

```text
TASK:T21
```

can later reference:

```text
SESSION:S3
```

The previous relationship is replaced by the new reference.

Only one reference target remains associated with the record at a time.

## References Do Not Copy Data

A reference does not duplicate the referenced record.

For example, when a log references:

```text
TASK:T21
```

the log does not contain a copy of the task title, description, or status.

It only stores the relationship:

```text
Reference Type → TASK
Reference ID   → T21
```

This means changes to the task remain reflected by the task itself rather than creating multiple copies of the same information.

References therefore keep related records connected without increasing the amount of duplicated context.

## References and Context Retrieval

References become particularly useful when retrieving project context.

A referenced log can be understood in relation to its task:

```text
Task: Implement payment retry

├── ATTEMPT  Added exponential backoff
├── ISSUE    Duplicate charge risk remains
└── NOTE     Idempotency key required
```

Likewise, a decision can be retrieved as part of the same work:

```text
Task: Implement payment retry

Decision
└── Use idempotency keys for retry protection
```

References therefore allow CTX to reconstruct relationships between otherwise independent records.

## References and AI

References provide additional structure for AI agents working with CTX context.

An AI agent can use a reference to understand which task or session an event or decision belongs to.

For example:

```text
Task: Implement payment retry

Logs:
- Stripe timeout occurs after 10 seconds.
- Exponential backoff still allows duplicate charge risk.

Decision:
- Use idempotency keys for retry protection.
```

Without the references, these records would exist as independent pieces of information.

With references, the AI can associate them with the same unit of work and reason about them together.

This improves the quality of retrieved execution context without requiring the records themselves to contain duplicated task or session information.

## Reference Command Options

The reference options used by logs and decisions are:

| Option | Type | Description |
| --- | --- | --- |
| `--session` | String | Session reference identifier. |
| `--task` | String | Task reference identifier. |

Both options are optional, but they are mutually exclusive.

When `--session` is provided with an identifier, that session is referenced explicitly.

When `--session` is provided without an identifier, the active session is resolved.

The same behavior applies to `--task`.

## Reference Rules

References follow a small set of consistent rules:

- A log or decision can reference a session or a task.
- A record can have only one reference at a time.
- Session and task references are mutually exclusive.
- An explicit reference identifier must identify an existing record.
- A reference type without an identifier resolves to the active record of that type.
- An active reference fails when there is no active record of the selected type.
- A record can exist without a reference.
- Updating a reference replaces the previous reference.
- References connect records without copying the referenced data.

## Summary

References connect logs and decisions to the project execution context where they belong.

A reference:

- Identifies either a session or a task.
- Can use an explicit identifier or the current active record.
- Is validated before being attached.
- Can be added when creating a log or decision.
- Can be changed after creation.
- Keeps related execution records connected without duplicating their data.
- Helps humans and AI understand the context surrounding logs and decisions.

References therefore provide the relationship layer between CTX's execution records while keeping each record independent.
