---
sidebar_position: 1
---

# Daily Work

CTX helps you maintain project context throughout a normal working period,
from starting work to reviewing progress and ending a session.

## Start a session

Start a session when you begin working on a project. A session represents a
specific period of development and provides context for the work performed
during that period.

```bash
ctx start
```

CTX creates an active session and returns its session ID. You can now associate tasks, logs, and decisions with the current session.

## Review the current context

Review the current project context before continuing work, especially when returning to a project after an interruption.

```bash
ctx status
```

Use the displayed information to understand the current session, active task, recent progress, and any unresolved work before deciding what to do next.

## Resume previous work

When returning to an unfinished task, review the active and recent tasks to identify where work stopped.

```bash
ctx task
```

Use the task information to select the work you need to continue. If the task is not active, start it before continuing.

```bash
ctx task start <task-id>
```

## Record progress during work

Record useful observations, failed attempts, issues, or decisions while working. This preserves information that may be needed later or by another person or AI agent.

```bash
ctx log add --note="Investigated the authentication failure"
```

Use a more specific log tag when appropriate:

```bash
ctx log add --tag=ISSUE --note="Authentication fails when the token expires"
```

The log is stored in the project context and can be reviewed or queried later.

## End a session

End the active session when you stop working on the project.

```bash
ctx session end
```

CTX records the session's end time and marks it as completed. Any unfinished work remains available through its associated tasks and recorded context.

## Related documentation

- [Sessions](../../../concepts/sessions/)
- [Tasks](../../../concepts/tasks)
- [Logs](../../../concepts/logs)
- [Status command](../../../commands/ctx/status/)
- [Session commands](../../../commands/ctx/session/)
- [Task commands](../../../commands/ctx/task/)
- [Log commands](../../../commands/ctx/log/)
