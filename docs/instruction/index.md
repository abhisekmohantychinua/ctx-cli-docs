---
sidebar_label: instruction
hide_table_of_contents: true
---

# CTX CLI

This project may use CTX CLI to keep its execution context alongside the code. CTX records the changing context of work, not the source code itself: what is being worked on, what happened, and why a direction was chosen. Use it to understand and preserve work across developer and AI sessions.

CTX context is dynamic. This file is not a snapshot of the project state. Retrieve current information from CTX when it is relevant to the task.

## When to use CTX

Use CTX at the beginning of substantive work, when resuming an interrupted task, before making a decision that may already have been recorded, or when you need to understand recent activity or blockers. Start with:

```bash
ctx status
```

This gives a concise project overview: the current or latest session and task, pending tasks, recent logs, and recent decisions.

Use focused retrieval only when the overview leaves an important question unanswered:

```bash
ctx task list
ctx task tree
ctx logs --count=20
ctx task query -x equals:BLOCKED
ctx log query -x equals:ISSUE
ctx decision query -x contains:authentication
ctx session query -x equals:ACTIVE
```

Queries are scoped to one record type. They use a field and a type-aware expression; use `--field` when the default field is not appropriate. Add `--pretty-json` when structured output would make inspection or automation clearer. Run `ctx <command> --help` for syntax or fields not covered here; do not guess command options.

If CTX reports that no project context exists (exit code `103`), do not initialize or overwrite one automatically. Explain the condition and ask whether the user wants CTX initialized with `ctx init`. Initialization creates local project context; `ctx init --force` overwrites its configuration and requires explicit user approval.

## The CTX model

- A **session** is a continuous period of work. It answers: *when did the work happen?* At most one session is active.
- A **task** is a lightweight unit of real work. It answers: *what is being worked on?* Its state is `PENDING`, `IN_PROGRESS`, `BLOCKED`, or `COMPLETED`. At most one task is in progress.
- A **log** is one short, meaningful event, observation, issue, idea, or attempted approach. It answers: *what happened?* Use tags `NOTE`, `IDEA`, `ISSUE`, and `ATTEMPT` accurately.
- A **decision** preserves an important choice and its reasoning. It answers: *why did we choose this direction?*

Tasks and sessions are independent dimensions: a task may continue across sessions, and a session may contain work on several tasks. Logs and decisions may optionally reference either one task or one session, never both. Supplying `--task` or `--session` without an identifier refers to the active record of that kind; use it only when that association is genuinely correct.

CTX identifiers are stable, local, and domain-specific: `S` for sessions, `T` for tasks, `L` for logs, and `D` for decisions—for example, `T12`. Preserve them when referring to CTX records.

## Working practices

Treat CTX as useful shared project memory, not a work diary. Read it before repeating investigation, reopening a solved question, or changing direction. Write to it when information would help a later human or agent continue without reconstructing the work.

Record a log after a meaningful discovery, failed or validated approach, important issue, or milestone. Keep it short, specific, and understandable outside the current moment. Do not log every command, file edit, or routine progress update.

```bash
ctx log add --tag=ISSUE --note="OAuth callback returns 401 when state is missing." --task
ctx log add --tag=ATTEMPT --note="Middleware validation did not resolve the production callback failure." --task=T12
```

Record a decision only when it establishes direction, resolves a material trade-off, or captures reasoning likely to matter later. Include the reasoning when it is known; a title alone is less useful. Use tags sparingly for durable categorization.

```bash
ctx decision create \
  --topic="Keep server-side OAuth state validation" \
  --reasoning="It prevents invalid callbacks and keeps provider secrets out of the client." \
  --tags=security,authentication \
  --task
```

Do not create tasks, start or end sessions, change task state, or alter CTX records merely because you are reading this file. These are project-state changes. Make them when the user asks, when they are clearly part of the assigned work, or when the project’s existing instructions explicitly delegate that responsibility.

When managing task state, prefer the lifecycle commands: `ctx task start`, `ctx task block`, and `ctx task complete`. Use direct update or deletion only for correction and with clear intent. Deletion is destructive: deleting a task moves its subtasks to the root and removes references to it; deleting logs, decisions, or sessions removes project history. Ask before destructive operations unless the user has specifically requested the exact change.

## Common workflows

For a user-authorized working session:

```bash
ctx start --notes="Investigating payment retry failures."
ctx task create --task="Investigate payment retry failures"
# Use the identifier returned by `ctx task create`.
ctx task start <task-id>
# Work; record only meaningful logs and decisions.
ctx task complete <task-id>
ctx session end
```

If another session or task is active, do not silently replace it. `ctx start --end` ends the active session before starting a new one, and `ctx task start <task-id> --end` completes the current task before starting the requested one; use either only when that transition is intended.

For a blocked task, state the blocker and preserve the useful context:

```bash
ctx task block T12 --reason="Waiting for payment-provider sandbox access."
ctx log add --tag=ISSUE --note="Sandbox access is required to reproduce the timeout." --task=T12
```

## Output and failures

Default output is for quick human inspection. `--verbose` shows fuller record details, `--short` scans compactly, `--json` supports programs, and `--pretty-json` makes structured output readable.

Check CTX command failures before continuing. Exit code `0` means success; `2` means invalid command input; `1` is an unspecified business error; `100`–`999` identify stable known conditions. In particular, `103` means no project context, `200` an active session already exists, `201` no active session exists, `310` a task was not found, `360` another task is already in progress, and `363` a task is blocked. Use the error message and exit code to choose a safe next step instead of parsing or ignoring a failure.

CTX complements Git, issue trackers, notes, and AI tools. It should preserve the execution context around the code so future work can begin from what is known rather than from a reconstructed history.
