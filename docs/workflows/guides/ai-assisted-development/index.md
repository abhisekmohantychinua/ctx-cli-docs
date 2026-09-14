---
sidebar_position: 4
---

# AI-Assisted Development

CTX helps developers and AI agents maintain shared project context throughout
AI-assisted development. Tasks, logs, decisions, and sessions provide a
persistent record that can be reviewed by either the developer or the agent.

## Prepare context before starting

Before asking an AI agent to work on a project, review the current context so
the agent can begin with an understanding of the active work and known
constraints.

```bash
ctx status
```

Review the active and recent tasks before deciding what work to assign.

```bash
ctx task
```

This helps the agent begin from the current project state instead of treating the task as a new piece of work.

## Give an AI agent a specific task

Create a task when the work needs to be tracked independently.

```bash
ctx task create --task="Implement token validation"
```

Start the task before asking the agent to implement it.

```bash
ctx task start <TASK-ID>
```

The task becomes the active piece of work and provides a clear reference for the implementation.

## Record context during AI-assisted work

Record useful discoveries, failed attempts, and issues while the agent works. This preserves information that may be needed when the work is reviewed or continued in another session.

```bash
ctx log add --note="The validation logic is implemented but integration tests remain"
```

Record failed approaches when they explain why a solution was changed.

```bash
ctx log add --tag=ATTEMPT --note="The first implementation failed because expired tokens were not handled"
```

Record issues when the agent identifies a problem that needs further investigation.

```bash
ctx log add --tag=ISSUE --note="Integration tests fail when the refresh token is missing"
```

## Preserve technical decisions

Record a decision when the developer or agent chooses an approach that should not be reconsidered without understanding the original reasoning.

```bash
ctx decision create \
  --topic="Token validation strategy" \
  --reasoning="Validate token expiry before checking request permissions" \
  --tags=authentication
```

The decision remains available to future sessions and helps prevent previously settled choices from being unintentionally reversed.

## Review AI-assisted work

Review the current task and recent logs after the agent finishes a work period.

```bash
ctx task view
```

Review the recorded activity when you need to understand what changed, what was attempted, or what remains unfinished.

```bash
ctx log view
```

Use a query when you need to find a specific issue, attempt, or decision.

```bash
ctx log query --value="authentication"
```

## Continue work in another session

When an AI session ends before the task is complete, leave the task in its current state and record the next action.

```bash
ctx log add --tag=NOTE --message="Token validation is complete; integration tests are the next step"
```

When the next session begins, review the project context and resume the unfinished task.

```bash
ctx status
```

```bash
ctx task view
```

This allows another developer or AI agent to continue from the recorded state without reconstructing the entire previous session.

## Complete the task

Mark the task as completed only after the implementation and required verification are finished.

```bash
ctx task complete <TASK-ID>
```

CTX changes the task status to completed and records its completion time.

## Related documentation

- [AI documentation](../../../ai/)
