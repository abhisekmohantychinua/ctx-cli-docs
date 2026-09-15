---
sidebar_position: 5
---

# AI-Assisted Development

CTX gives AI agents access to the execution context around your project.

An AI agent can write code, run tests, investigate problems, and make
decisions. But without the surrounding context, it may not know what you are
currently working on, what has already been tried, why a particular approach
was chosen, or where the previous work stopped.

CTX keeps this information inside the project so that both you and your AI
agent can use it.

## Prepare CTX for AI-assisted development

Before asking an AI agent to work on a project, initialize CTX and generate
the instruction file for your AI tool.

Initialize CTX:

```bash
ctx init
```

Check the current project context:

```bash
ctx status
```

Generate instructions for Codex:

```bash
ctx generate instruction --preset=codex
```

For another supported AI tool, use its matching preset:

```bash
ctx generate instruction --preset=claude
```

You can also generate the instruction file at a custom path:

```bash
ctx generate instruction --path=.ai/ctx-instructions.md
```

The instruction file teaches the AI agent how to work with CTX. It does not contain the changing project context. That context remains inside `.ctxcli`.

## Start a session before asking AI to work

Start a session before beginning a new period of development.

```bash
ctx start --notes="Implement the first version of the authentication flow."
```

The session records when the work started and provides a working period for the tasks, logs, and decisions created during the session.

## Create a focused task

Create a task for the specific work you want the AI agent to perform.

```bash
ctx task create \
  --task="Implement token validation" \
  --description="Validate token expiry and reject invalid tokens."
```

A focused task gives the AI a clear boundary. It also makes it easier to review what was requested, what was completed, and what remains unfinished.

Start the task:

```bash
ctx task start <TASK-ID>
```

Review the task structure when needed:

```bash
ctx task tree
```

## Ask AI to work from the current context

When asking an AI agent to implement a task, tell it to use the current CTX context before making changes.

For example:

```txt
CTX is initialized in this project.

Before working:
- read the current project status;
- inspect the active task;
- review relevant recent logs;
- review decisions related to this task.

Implement only the active task.

Do not expand the scope without discussing it first.

After making changes, summarize:
- files created or changed;
- behavior implemented;
- tests run;
- assumptions made;
- anything that still needs human review.
```

The instruction file provides the general rules for working with CTX. The active task and recorded project information provide the changing context for the current work.

## Record the AI handoff

Record what you asked the AI agent to do.

```bash
ctx log add \
  --tag=ATTEMPT \
  --note="Asked AI to implement token validation and add tests for expired tokens." \
  --task
```

This creates a record of the handoff alongside the task. The prompt may remain in the AI conversation, but the important purpose and scope of the handoff are also preserved in CTX.

## Review the AI result

After the AI agent finishes, inspect the changes and run the relevant tests.

```bash
git diff
```

```bash
python -m pytest
```

Review the task and recent activity:

```bash
ctx task view
```

```bash
ctx logs --count=20
```

If the implementation works as expected, record the result:

```bash
ctx log add \
  --tag=NOTE \
  --note="Token validation is implemented and the tests pass." \
  --task
```

If something is wrong, record the issue instead of silently losing the information.

```bash
ctx log add \
  --tag=ISSUE \
  --note="Token validation does not handle expired tokens correctly." \
  --task
```

If another approach was tried, record that attempt as well:

```bash
ctx log add \
  --tag=ATTEMPT \
  --note="Changed validation order after reviewing the failing expiry test." \
  --task
```

## Preserve decisions made during AI work

AI-assisted development often involves small technical decisions. Record the ones that may affect future work.

```bash
ctx decision create \
  --topic="Token validation strategy" \
  --reasoning="Validate token expiry before checking request permissions." \
  --tags=authentication \
  --task
```

The decision preserves both the chosen approach and the reasoning behind it. This helps prevent future sessions or AI agents from repeating the same discussion without knowing what was already decided.

## Continue work after interruption

When an AI session ends before the task is complete, leave a short record of the current state and the next action.

```bash
ctx log add \
  --tag=NOTE \
  --note="Token validation is complete. Integration tests are the next step." \
  --task
```

End the session:

```bash
ctx session end
```

When you return, start a new session and review the project context before asking AI to continue.

```bash
ctx start --notes="Resume authentication work after interruption."
```

```bash
ctx status
```

```bash
ctx task tree
```

```bash
ctx logs --count=20
```

The AI agent can now continue from the recorded state instead of treating the work as a new task.

## Ask AI to continue existing work

Use a prompt that makes the previous context part of the task.

```txt
I am continuing work on the existing project.

Use CTX before making changes:
- read the current status;
- inspect the task tree;
- review recent logs;
- review relevant decisions.

Continue from the existing implementation.

Do not recreate completed work.
Do not change the task scope without explaining why.

After making changes, summarize:
- what was continued;
- what changed;
- tests run;
- remaining work.
```

The AI agent can then use the project's execution context alongside the existing source code.

## Complete the task

Complete the task only after the implementation has been reviewed and the required verification is finished.

```bash
ctx task complete <TASK-ID>
```

CTX changes the task status to completed and records its completion time.

Record a final note when it helps explain the result:

```bash
ctx log add \
  --tag=NOTE \
  --note="Completed token validation and verified the related tests." \
  --task
```

End the session:

```bash
ctx session end
```

## Review the AI-assisted work later

The project history can be reviewed after the AI session has ended.

View recent logs:

```bash
ctx logs --count=50
```

Find issue logs:

```bash
ctx log query \
  -f=tag \
  -x=equals:ISSUE \
  --sort-by=timestamp \
  --sort=DESC
```

Find previous attempts:

```bash
ctx log query \
  -f=tag \
  -x=equals:ATTEMPT \
  --sort-by=timestamp \
  --sort=DESC
```

Review decisions:

```bash
ctx decision query \
  -f=timestamp \
  -x=before::now \
  --sort-by=timestamp \
  --sort=DESC
```

The result is a readable history of the work performed with AI, including handoffs, implementation attempts, issues, decisions, and completed tasks.

## Related documentation

- [AI](../../../ai/)
- [First Project](../../../getting-started/first-project/)
- [Concepts](../../../concepts/)
