---
sidebar_position: 4
---

# Decisions

A **Decision** represents an explicit choice made during project execution together with the reasoning or context behind that choice.

Decisions allow CTX to preserve information that is often lost from the final codebase: why an approach was chosen, why an alternative was rejected, or why the direction of a piece of work changed.

A decision is not a task, log, or project instruction. It is a record of an important choice made while work is being performed.

## Why Decisions Exist

Software development involves decisions continuously.

You choose one architecture over another, decide how an API should behave, reject an implementation approach, choose a library, change a design because of an edge case, or decide not to solve a problem in a particular way.

The resulting code may make the final choice visible, but it often does not explain why that choice was made.

For example:

```text
Decision

Topic       Authentication
Decision    Use server-side session validation.
Reasoning   Keeps provider secrets out of the client and simplifies token handling.
```

Months later, the implementation may still be clear while the reasoning behind it is no longer obvious.

Decisions give that reasoning a persistent place within the project's execution context.

## What a Decision Represents

A decision represents a choice that is worth preserving because it may matter to future work.

Not every thought or implementation detail needs to become a decision. Logs are available for smaller events and observations. Decisions are appropriate when a choice establishes direction, resolves a trade-off, or explains why an approach was selected.

A useful decision should make the important choice understandable when read outside the moment in which it was made.

For example:

```text
Topic       Persistence
Decision    Keep project data in local JSON files.
Reasoning   Keeps CTX portable, fast, Git-friendly, and independent of an external database.
```

The decision records the choice, while the reasoning explains the thinking behind it.

## Decision Data Model

A decision contains the information needed to identify the choice and understand its context.

| Field | Description |
| --- | --- |
| `id` | Unique identifier for the decision. |
| `topic` | Optional subject or area to which the decision relates. |
| `reasoning` | Explanation of why the decision was made. |
| `tags` | Optional collection of tags that help categorize the decision. |
| `timestamp` | Timestamp at which the decision was recorded. |
| `referenceType` | Optional type of execution record associated with the decision: `SESSION` or `TASK`. |
| `referenceId` | Optional identifier of the referenced session or task. |

A decision can exist without a topic or reference. Additional context can be provided when it is useful, but the decision itself remains an independent record.

## Decision Topics

A topic identifies the subject of the decision.

It can be useful when a project contains decisions across different areas such as:

```text
Architecture
Authentication
Persistence
API Design
Testing
Deployment
Performance
```

Topics provide a way to group or retrieve related decisions without forcing every decision into a predefined category.

A topic is optional because some decisions may already be clear from their content or surrounding context.

## Decision Reasoning

Reasoning explains why a particular choice was made.

This is one of the most valuable parts of a decision because it preserves the context that the resulting implementation may not communicate.

For example:

```text
Topic
Retry Strategy

Decision
Use exponential backoff with a maximum of three retries.

Reasoning
Immediate retries can produce duplicate requests when the provider is slow to acknowledge the first request.
```

The reasoning does not need to be long. It needs to preserve the information that makes the decision understandable later.

When more detailed reasoning is necessary, CTX supports interactive or multiline input so that the user can capture the explanation without reducing it to a single line.

## Decision Tags

Decisions can optionally contain tags that provide additional classification.

Tags can be used to group decisions according to the kind of information they represent or the area of the project they affect.

For example:

```text
architecture
security
performance
api
persistence
```

Tags do not change the decision itself. They simply provide additional context that can be useful when reviewing or querying decisions.

## Decision References

A decision can optionally reference a task or session.

Supported reference types are:

- `SESSION`
- `TASK`

For example:

```text
Decision
├── Topic          Persistence
├── Reference      TASK
└── Reference ID   8f21a3...
```

A reference answers the question:

> **What work was this decision associated with?**

A decision does not have to be attached to a task or session. It can remain independent when the choice applies more broadly to the project.

## Decisions and Tasks

A task represents the work being performed, while a decision records an important choice that affects that work.

For example:

```text
Task: Implement OAuth callback
│
├── Decision
│   └── Validate OAuth state on the server
│
├── NOTE     Added callback endpoint
└── ISSUE    Provider returns an invalid state
```

The task answers:

> **What am I working on?**

The decision answers:

> **What important choice was made about the work?**

This relationship allows the reasoning behind an implementation to remain connected to the work it affects.

## Decisions and Logs

Logs and decisions preserve different kinds of execution context.

A **log** captures an event, observation, idea, issue, or attempt.

A **decision** captures an explicit choice and the reasoning behind it.

A log may provide the information that leads to a decision:

```text
LOG
OAuth provider returns 401 when state validation is disabled.

DECISION
Keep server-side state validation enabled to prevent invalid callbacks.
```

The log preserves the observation. The decision preserves the conclusion drawn from it.

This distinction prevents every important observation from becoming a decision while ensuring that significant choices remain easy to find.

## Decisions and Sessions

A session represents a period of active work, while a decision represents a choice made during or around that work.

A decision can be associated with a session when the timing of the decision is useful context.

For example:

```text
Session: OAuth implementation
│
├── Logs
├── Tasks
└── Decision
      └── Use server-side OAuth callback
```

The session provides the temporal context, while the decision preserves the reasoning that came from that period of work.

## Decision Lifecycle

A decision follows a simple lifecycle:

```text
Decision identified
        │
        ▼
     Recorded
        │
        ▼
    Available
        │
        ▼
     Reused
```

When a decision is recorded, CTX stores the choice with its timestamp and any provided context.

The decision then becomes part of the project's execution history and can be viewed, queried, exported, or used as context by AI.

Unlike a task, a decision does not move through states such as pending or completed. Once recorded, it represents a choice that was made at a particular point in the project's evolution.

A decision can be updated when its content needs correction or clarification, and it can be deleted when it is no longer appropriate to retain it.

## Decisions Over Time

Projects evolve, and decisions can change as new information becomes available.

For example:

```text
Session 1
Decision: Use synchronous processing.

Session 4
Decision: Move processing to a queue after load testing exposed throughput limits.
```

The later decision does not make the earlier one meaningless. The earlier decision explains the direction taken at that point in the project's history, while the later decision explains why the direction changed.

This makes decisions useful when revisiting older code, understanding architectural evolution, or determining why the current implementation differs from an earlier approach.

## Decisions and AI

Decisions provide AI agents with high-value project context that may not be visible from the current code alone.

An AI agent can use decisions to understand:

- Why an implementation approach was chosen.
- Which alternatives were intentionally rejected.
- What constraints influenced the design.
- Why a previous direction changed.
- Which architectural or implementation choices should remain consistent.

For example, before proposing a different persistence strategy, an AI agent can inspect previous decisions and discover that local JSON storage was deliberately chosen to preserve portability and eliminate external dependencies.

This allows AI to reason from the project's existing decisions rather than treating every problem as a new problem.

AI can also record decisions when it makes a meaningful choice during execution. Such write-back should preserve important choices rather than every small implementation detail.

## Viewing Decisions

CTX provides multiple levels of detail when displaying decisions.

### Short View

The short view is intended for lists and other situations where several decisions need to be displayed together. It contains only the information needed to identify a decision and understand its subject at a glance.

For example:

```text
10:42  Persistence     Use local JSON storage for project context
10:18  API Design      Validate response schemas before processing
09:51  Architecture    Keep task hierarchy limited to three levels
```

### Default View

The default view is designed for everyday use. It provides enough information to understand the decision without exposing every field in the underlying record.

For example:

```text
Decision

Topic
Persistence

Use local JSON storage for project context.

Reasoning
Keeps CTX portable and independent of an external database.
```

The default view prioritizes the decision itself and the reasoning needed to understand it.

### Verbose View

The verbose view provides the complete decision record available to CTX.

For example:

```text
Decision

ID            7d9c4a21-...
Timestamp     2026-08-30T10:42:18Z
Topic         Persistence
Tags          storage, architecture
Reference     TASK
Reference ID  4f82c1e0-...

Reasoning
Keeps CTX portable and independent of an external database.
```

The verbose view is useful when the exact identifier, timestamp, tags, reference, or complete reasoning is required.

### Short, Default, and Verbose

The three views serve different purposes:

| View | Purpose |
| --- | --- |
| Short | Quickly scan decisions in a list. |
| Default | Understand a decision during normal use. |
| Verbose | Inspect the complete decision record. |

The short view prioritizes compactness, the default view prioritizes situational awareness, and the verbose view prioritizes completeness.

## Decision History

Decisions remain part of the project's historical context after they are recorded.

A project may accumulate decisions across many sessions and tasks:

```text
Session 1
└── Decision: Use PostgreSQL for production data.

Session 3
└── Decision: Introduce caching for frequently accessed records.

Session 7
└── Decision: Move authentication into a dedicated service.
```

Together, these decisions form a record of how the project's direction evolved over time.

This history can be used to understand previous choices, avoid repeating rejected approaches, and provide AI with the reasoning behind the current state of the project.

## Summary

Decisions provide CTX with a persistent layer for important choices and their reasoning.

A decision:

- Represents an explicit choice made during project execution.
- Preserves the reasoning or context behind that choice.
- Can optionally have a topic and tags.
- Can optionally reference a session or task.
- Remains independent from tasks, logs, and sessions while complementing them.
- Helps explain why the project evolved in a particular direction.
- Can be viewed, queried, updated, deleted, and exported.
- Provides high-value context for AI agents working on the project.
