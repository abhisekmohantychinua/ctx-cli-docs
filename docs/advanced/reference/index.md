---
sidebar_position: 4
---

# Reference

A **reference** connects a log or decision to the project context it belongs to.

When you record something during development, the record does not always need to stand alone. A log may belong to the task you are currently working on, while a decision may belong to the session in which it was made.

CTX lets you associate these records with either:

- a **Task**
- a **Session**

A reference does not create another record or copy information. It simply connects the log or decision to an existing task or session.

## Why Use References?

A log or decision is easier to understand when its surrounding context is known.

Consider a log without a reference:

```text
ID               L2
Timestamp        31 Aug 2026 11:35:55 AM IST
Tag              ISSUE

Note
Payment API returns an invalid response.
```

The log tells you what happened, but not where it happened.

Now attach a task reference:

```text
T14      PENDING       Implement payment retry.
```

The same log now has execution context.

```text
ID               L2
Timestamp        31 Aug 2026 11:35:55 AM IST
Tag              ISSUE
Reference        TASK
Reference ID     T14

Note
Payment API returns an invalid response.
```

The same applies to decisions. A decision can be associated with the task it affects or the session in which it was made.

References therefore answer a simple question: **What part of the project execution does this record belong to?**

## Where References Are Used

References are available when working with:

- [Logs](../../concepts/logs)
- [Decisions](../../concepts/decisions)

A reference can be:

- added when the record is created
- changed after the record is created
- removed when the record no longer needs a reference

References are optional. A log or decision can exist without one.

## Reference Types

CTX currently supports two reference types.

### Task

A task reference associates a log or decision with a specific task. Use a task reference when the record belongs to a particular unit of work.

For example, a task about implementing payment retry:

```text
Task         Implement payment retry.
Status       PENDING
Created      31 Aug 2026 11:40:13 AM IST

Description
--
```

Can be associated with a log

```text
ID               L3
Timestamp        31 Aug 2026 11:49:14 AM IST
Tag              NOTE
Reference        TASK
Reference ID     T14

Note
Stripe timeout occurs after 10 seconds.
```

And a decision

```text
ID               D2
Timestamp        31 Aug 2026 11:51:23 AM IST
Topic            Use idempotency keys for retry protection.
Reference        TASK
Reference ID     T14

Tags
--

Reasoning
Use idempotency keys on retryable operations so repeated requests can be safely detected and prevented from causing duplicate side effects.
```

### Session

A session reference associates a log or decision with a specific session. Use a session reference when the record belongs to a period of work rather than a specific task.

For example, a session about implementing payment retry:

```text
ID           S2
Status       ACTIVE
Started      31 Aug 2026 11:54:38 AM IST
Ended        --

Session Notes
Implementing payment retry feature.
```

Can be associated with a log

```text
ID               L4
Timestamp        31 Aug 2026 11:55:12 AM IST
Tag              NOTE
Reference        SESSION
Reference ID     S2

Note
Investigated webhook processing.
```

And a decision

```text
ID               D3
Timestamp        31 Aug 2026 11:57:45 AM IST
Topic            Use the provider's asynchronous webhook flow.
Reference        SESSION
Reference ID     S2

Tags
--

Reasoning
Use the provider's asynchronous webhook flow to handle real-time updates without blocking the main execution thread.
```

## One Reference at a Time

A log or decision can have **one reference at a time**.

The reference can point to either a `TASK` or a `SESSION`, but not both.

When a record needs the context of both a task and a session, the task provides the more specific work context while the session remains part of the broader execution history.

:::warning
CTX does not support multiple references for a single record.
:::

## Adding a Reference

A reference can be provided while creating a log or decision.

The reference options are:

| Option | Type | Description |
| --- | --- | --- |
| `--session`, `-S` | string | Reference a session. |
| `--task`, `-T` | string | Reference a task. |

The two options are mutually exclusive.

You can provide either:

- a reference option without a value
- a reference option with an identifier
- neither option

You cannot provide both `--session` and `--task` for the same record.

### Reference an Existing Record

Provide the identifier when you want to reference a specific session or task.

For example:

```text
ctx log add --note "Investigated webhook processing." --task T5
```

creates a log associated with task `T5`.

A decision can be associated in the same way:

```text
ctx dec create --topic "Use the provider's asynchronous webhook flow." --session S2
```

CTX validates the supplied identifier before attaching the reference.

If the referenced record does not exist, the operation is rejected.

### Reference the Active Record

You can omit the identifier when the record should belong to the currently active task or session.

For example:

```text
ctx log add --note "Investigated webhook processing." --task
```

associates the new log with the active task.

Similarly:

```text
ctx dec create --topic "Use the provider's asynchronous webhook flow." --session
```

associates the decision with the active session.

This allows the current execution context to be reused without repeatedly copying identifiers into commands.

### No Reference

When neither `--session` nor `--task` is provided, the record remains unreferenced.

For example:

```text
ctx log add --note "Investigated webhook processing."
```

creates a standalone log.

An unreferenced record is still part of the project's execution context.

## Reference Validation

References are validated according to the option provided.

For a task reference:

```text
--task T5
```

CTX verifies that task `T5` exists.

For a session reference:

```text
--session S2
```

CTX verifies that session `S2` exists.

When the identifier is omitted:

```text
--task
```

CTX resolves the active task.

When:

```text
--session
```

is used, CTX resolves the active session.

If an active record is required but none exists, the operation is rejected.

This prevents records from being associated with an unknown or invalid context.

## Updating a Reference

A reference can be changed after a log or decision has been created.

This is useful when:

- the record was created without a reference
- the wrong task or session was selected
- the record becomes relevant to different work later
- the surrounding context becomes clearer after the record was created

For example, a decision can be associated with a task:

```text
ctx decision update D1 ref --task T5
```

Or with a session:

```text
ctx decision update D1 ref --session S2
```

A log can be updated in the same way:

```text
ctx log update L1 ref --task T5
```

The same reference rules apply when updating:

- `--task` and `--session` are mutually exclusive
- an explicit identifier must exist
- an option without an identifier resolves the active record
- no reference options leave the record without a reference

When an existing reference is changed, the previous reference is replaced.

## Removing a Reference

A reference can be removed from a log or decision when the association is no longer needed.

Removing a reference does not delete the log, decision, task, or session.

The record simply becomes unreferenced.

This keeps the record itself independent from the relationship that was previously attached to it.

## Logs and References

References give logs additional execution context without changing what the log records.

For example:

```text
ID               L3
Timestamp        31 Aug 2026 11:49:14 AM IST
Tag              NOTE
Reference        TASK
Reference ID     T14

Note
Stripe timeout occurs after 10 seconds.
```

The log still represents one event or observation.

The reference simply identifies the task to which that event belongs.

A log can also reference a session:

```text
ID               L4
Timestamp        31 Aug 2026 11:55:12 AM IST
Tag              NOTE
Reference        SESSION
Reference ID     S2

Note
Investigated webhook processing.
```

A log can also remain unreferenced when it represents a standalone observation.

## Decisions and References

References are especially useful for decisions because they preserve where a decision belongs in the execution history.

For example:

```text
ID               D2
Timestamp        31 Aug 2026 11:51:23 AM IST
Topic            Use idempotency keys for retry protection.
Reference        TASK
Reference ID     T14

Tags
--

Reasoning
Use idempotency keys on retryable operations so repeated requests can be safely detected and prevented from causing duplicate side effects.
```

A decision may also belong to a session:

```text
ID               D3
Timestamp        31 Aug 2026 11:57:45 AM IST
Topic            Use the provider's asynchronous webhook flow.
Reference        SESSION
Reference ID     S2

Tags
--

Reasoning
Use the provider's asynchronous webhook flow to handle real-time updates without blocking the main execution thread.
```

A decision can also remain unreferenced when it represents broader project knowledge.

## Reference Rules

References follow a small set of consistent rules:

- Logs and decisions can reference a task or a session.
- A record can have only one reference at a time.
- `--task` and `--session` are mutually exclusive.
- An explicit reference identifier must identify an existing record.
- A reference option without an identifier resolves the corresponding active record.
- An active reference fails when no active record of that type exists.
- A log or decision can remain unreferenced.
- Updating a reference replaces the existing reference.
- Removing a reference does not remove the record.
- References do not copy data from the referenced record.

## Summary

References provide a lightweight relationship between execution records.

They allow a log or decision to say **This belongs to that task** or **This happened during that session**.

Use an explicit identifier when you know the exact context:

```text
--task T5
--session S2
```

Use the option without an identifier when the record belongs to the active context:

```text
--task
--session
```

Leave both options out when the record should remain independent.
