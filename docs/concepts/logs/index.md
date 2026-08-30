---
sidebar_position: 3
---

# Logs

A **Log** represents a small, meaningful record of something that happened during project execution.

Logs allow CTX to preserve events, observations, ideas, issues, and attempts as they occur. They provide the detailed execution context around tasks, sessions, and decisions without requiring the task or session itself to be continuously updated.

A log is not a system log, application log, or version-control record. It is a lightweight record of **what happened or what was noticed while work was being performed**.

## Why Logs Exist

Development work contains many small events that are easy to forget.

You may discover an edge case, try an approach that does not work, notice a potential risk, or fix a small issue without making any of these details part of the final code or task state.

Without logs, many of these details disappear once the moment has passed.

For example:

```text
10:05  NOTE     Started OAuth implementation
10:21  ATTEMPT  Changed callback handling
10:37  ISSUE    Provider returns an invalid state
10:52  NOTE     Fixed state validation
```

The code may only show the final implementation. The logs preserve the events and observations that surrounded that implementation.

## What a Log Represents

A log is intentionally small.

It should capture a single event, observation, idea, issue, or attempt rather than becoming a running journal of everything that happens during development.

Good logs are specific enough to be useful later:

```text
OAuth provider returns 401 when the callback state is missing.
```

```text
Tried moving token validation to middleware; callback still fails in production.
```

```text
Potential race condition when two workers refresh the same token.
```

Logs are most valuable when they preserve information that would otherwise be difficult to reconstruct later.

## Log Tags

Each log can have a tag that describes the kind of information it contains.

CTX currently supports:

| Tag | Meaning |
| --- | --- |
| `NOTE` | A general observation or piece of information. |
| `IDEA` | A possible improvement, approach, or thought worth preserving. |
| `ISSUE` | A problem or unexpected behavior encountered during work. |
| `ATTEMPT` | An approach that was tried during execution. |

Tags make logs easier to understand when scanning history or retrieving specific types of execution information.

A tag does not change the content of the log. It simply provides additional context about what the entry represents.

## Log References

A log can optionally be associated with another part of the project's execution context.

CTX currently supports references to:

- `SESSION`
- `TASK`

For example:

```text
Log
├── Tag        ISSUE
├── Reference  TASK
└── Note       OAuth provider returns 401
```

A reference answers an important contextual question:

> **What work does this log belong to?**

A log does not have to be referenced. An unlinked log is still a valid part of the project's execution history.

When a log is associated with a session or task, that relationship makes it easier to understand the log in the context of the work that was taking place.

## Logs and Sessions

Sessions represent periods of active work, while logs represent events that happen during those periods.

When a session is active, a log can be associated with that session. This gives the log a temporal context without requiring the log to contain session information in its content.

For example:

```text
Session: OAuth implementation
│
├── 10:05  NOTE     Started OAuth implementation
├── 10:21  ATTEMPT  Changed callback handling
└── 10:37  ISSUE    Provider returns an invalid state
```

The session tells you **when the work happened**. The logs tell you **what happened during that work**.

:::note
**Sessions provide the time boundary. Logs preserve the events within that boundary.**
:::

## Logs and Tasks

Tasks provide structure for the work, while logs describe how that work evolves.

A task might remain `IN_PROGRESS` for several hours or across multiple sessions, while its logs capture the smaller events that occur during that time.

For example:

```text
Task: Implement OAuth callback
│
├── NOTE     Added callback endpoint
├── ATTEMPT  Switched token validation strategy
├── ISSUE    Provider returns an invalid state
└── NOTE     Fixed state validation
```

The task answers:

> **What am I working on?**

The logs answer:

> **What happened while I was working on it?**

This separation keeps tasks lightweight while still preserving the details of execution.

## Logs and Decisions

Logs and decisions both preserve information that is useful later, but they represent different kinds of context.

A **log** captures an event, observation, idea, issue, or attempt.

A **decision** captures an explicit choice and the reasoning behind it.

For example:

```text
LOG
OAuth provider returns 401 when state validation is disabled.

DECISION
Keep server-side state validation enabled to prevent invalid callbacks.
```

A log can therefore become part of the context that leads to a decision, while the decision preserves the conclusion that resulted from that context.

## Log Lifecycle

Logs are designed to be simple records of execution.

A log is:

1. Created when the event or observation is recorded.
2. Available immediately as part of project context.
3. Preserved as part of project history.
4. Available for viewing, querying, exporting, and analysis.

Logs are append-oriented by design. They are intended to capture what was meaningful at the time it happened rather than requiring later reconstruction.

A log can be updated or deleted when necessary, but the normal usage pattern is to record a concise entry and continue working.

## Writing Useful Logs

The value of a log depends more on its information than its length.

A useful log should make sense when read outside the moment in which it was written.

Prefer:

```text
Stripe returns HTTP 200 with an invalid payment payload.
```

Instead of:

```text
Found weird thing in API.
```

Prefer:

```text
Tried exponential backoff; duplicate charge still occurs when retries overlap.
```

Instead of:

```text
Retry attempt didn't work.
```

Logs should generally be short and specific. Long explanations, stable project rules, and architectural knowledge belong in more appropriate parts of the project context.

## Logs and AI

Logs provide AI agents with information about what happened during project execution.

An AI agent can use recent or relevant logs to understand:

- What has already been attempted.
- Which problems were encountered.
- What observations were made.
- Which approaches failed.
- What changed during execution.

For example, an AI agent working on a blocked task can use previous issue and attempt logs to avoid repeating an unsuccessful approach.

This makes logs useful as **dynamic execution context** rather than static documentation.

AI can also create logs when it makes meaningful progress or discovers relevant information. The goal is not for AI to record every command or code change, but to preserve information that is useful for future work.

## Viewing Logs

CTX provides multiple levels of detail when displaying logs.

### Short View

The short view is intended for lists and other situations where many logs need to be displayed together. It prioritizes compactness and makes the most important parts of each entry visible at a glance.

For example:

```text
10:42  NOTE     Fixed authentication redirect
10:35  ISSUE    OAuth callback was returning 401
10:21  ATTEMPT  Switched callback handling to server-side
```

### Default View

The default view is designed for everyday use. It provides the information needed to understand a log without exposing every field in the underlying record.

For example:

```text
Log

10:42:18
NOTE

Fixed the authentication redirect.

Task: Implement OAuth callback
```

The default view prioritizes the log content and the context that is most useful during normal work.

### Verbose View

The verbose view provides the complete log record available to CTX.

For example:

```text
Log

ID            7d9c4a21-...
Timestamp     2026-08-30T10:42:18Z
Tag           NOTE
Reference     TASK
Reference ID  4f82c1e0-...

Note
Fixed the authentication redirect.
```

The verbose view is useful when the exact identifier, timestamp, reference, or other record details are required.

### Short, Default, and Verbose

The three views serve different purposes:

| View | Purpose |
| --- | --- |
| Short | Quickly scan logs in a list. |
| Default | Understand a log during normal use. |
| Verbose | Inspect the complete log record. |

The short view prioritizes compactness, the default view prioritizes situational awareness, and the verbose view prioritizes completeness.

## Log History

A log becomes part of the project's historical record after it is created.

Over time, a project may accumulate logs across many sessions and tasks:

```text
Session 1
├── NOTE
├── ATTEMPT
└── ISSUE

Session 2
├── NOTE
├── IDEA
└── DECISION-related observation

Session 3
├── ATTEMPT
└── NOTE
```

This history provides a detailed execution trail that can be used when returning to previous work, investigating an issue, understanding how a solution evolved, or analyzing project activity.

Logs can be queried by their available fields and can be included when project context is exported.

## Summary

Logs provide CTX with the detailed event layer of project execution.

A log:

- Captures an event, observation, idea, issue, or attempt.
- Is intentionally small and focused.
- Can be tagged with `NOTE`, `IDEA`, `ISSUE`, or `ATTEMPT`.
- Can optionally reference a `SESSION` or `TASK`.
- Provides detailed context around tasks and sessions.
- Complements decisions by preserving the events and observations behind them.
- Remains available as part of project history.
- Can be viewed, queried, exported, and used by AI as dynamic execution context.
