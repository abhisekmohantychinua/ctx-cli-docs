---
sidebar_position: 5
---

# Project Review

Use project review when you need to understand the current state of a project,
identify unfinished work, or revisit information recorded during earlier
development.

## Review the current project state

Review the current context before starting work or deciding what to do next.

```bash
ctx status
```

Use the displayed information to understand the active session, current work, and recent project activity.

## Review active and recent tasks

Review the tasks that are currently active or were recently updated.

```bash
ctx task
```

Use this view to identify unfinished work and decide which task should be continued next.

## Find unfinished tasks

Query tasks when you need to search beyond the active and recent task view.

```bash
ctx task query --expression="equals:PENDING"
```

You can also search for blocked tasks:

```bash
ctx task query --expression="equals:BLOCKED"
```

The results help you identify work that has not been completed or cannot currently continue.

## Review recent activity

Review recent logs to understand what happened during previous work sessions.

```bash
ctx logs --count=10
```

Use the output to recall observations, failed attempts, issues, and other information recorded during development.

## Find specific information

Query logs when you need to find information related to a particular topic.

```bash
ctx log query --expression="contains:authentication"
```

The query helps locate relevant entries without reviewing the entire log history manually.

## Review previous decisions

Use a query when you need to find decisions related to a specific topic.

```bash
ctx decision query --expression="contains:authentication"
```

The recorded reasoning helps you understand previous choices before changing the current implementation.

## Related documentation

- [Tasks](../../../concepts/tasks/)
- [Logs](../../../concepts/logs/)
- [Decisions](../../../concepts/decisions/)
- [Task commands](../../../commands/ctx/task/)
- [Log commands](../../../commands/ctx/log/)
- [Decision commands](../../../commands/ctx/decision/)
