---
sidebar_position: 2
---

# Task Execution

Use CTX to organize development work as tasks, track the task currently being
worked on, and preserve the state of unfinished or blocked work.

## Create a task

Create a task when a piece of work needs to be tracked independently.

```bash
ctx task create --task="Implement authentication"
```

CTX creates the task with a pending status and returns its task ID. Use the task ID to manage the task as work progresses.

## Start a task

Start a task when you begin working on it.

```bash
ctx task start <TASK-ID>
```

The task becomes active and represents the work currently being performed.

## Continue an unfinished task

When returning to a project, review the active and recent tasks before continuing unfinished work.

```bash
ctx task
```

Use the displayed task information to identify the task you need to continue. If the task is not active, start it before resuming work.

```bash
ctx task start <TASK-ID>
```

## Create a sub-task

Create a sub-task when a larger task needs to be divided into smaller pieces of work.

```bash
ctx task create --task="Implement token validation" <PARENT-TASK-ID>
```

The new task is linked to the parent task and can be managed independently.

## Record progress on a task

Record useful information while working on a task, such as an observation, failed attempt, issue, or decision.

```bash
ctx log add --note="The token validation fails for expired tokens"
```

Use a specific tag when the type of information matters.

```bash
ctx log add --tag=ISSUE --note="The token validation fails for expired tokens"
```

The log preserves the information in the project context so it can be reviewed when the task is resumed or handed over.

## Block a task

Block a task when progress cannot continue because of an issue, dependency, or missing information.

```bash
ctx task block <TASK-ID> --reason="Waiting for API credentials"
```

CTX changes the task status to blocked and stores the reason. This makes the blocker visible when reviewing the task later.

## Complete a task

Complete a task when its work is finished.

```bash
ctx task complete <TASK-ID>
```

CTX changes the task status to completed and records its completion time.

## Review task history

Query tasks when you need to search beyond the active and recent task view.

```bash
ctx task query --expression=COMPLETED
```

The query returns matching tasks with pagination and sorting information.

## Related documentation

- [Tasks](../../../concepts/tasks/)
- [Task commands](../../../commands/ctx/task/)
