---
sidebar_position: 2
description: Build a small Python CLI API uptime monitor with CTX and an AI coding agent.
---

# First Project

In this guide, you will build a small Python CLI called `apiwatch` while working with CTX and an AI coding agent. `apiwatch` checks whether configured API endpoints are healthy, records results, and prints a small report. The tool is only part of the experience. The real goal is to see how a project moves through real work: planning, implementation, interruption, resumption, review, and completion.

You will follow a realistic development flow in which:

- you start a project
- you initialize CTX
- you start and end work sessions
- you create tasks
- you ask AI to implement focused pieces of work
- you record logs, issues, attempts, and decisions
- you stop midway
- you resume later using project context instead of memory
- you finish with a readable history of the work

This is the kind of work CTX is designed for. Source code tells you what the project is. CTX tells you what is happening with the project.

## What You Will Build

The finished project will support commands like:

```bash
python -m apiwatch add https://example.com --name example
python -m apiwatch list
python -m apiwatch check
python -m apiwatch report
```

The first version will:

- store endpoints locally
- check each endpoint with a timeout
- treat HTTP `2xx` responses as healthy
- treat timeouts, connection errors, and non-`2xx` responses as unhealthy
- record check results in local history
- print a simple report
- include tests for the core behavior

Keep the project bounded. Do not add alerts, scheduling, authentication, dashboards, databases, deployment, or background workers.

:::tip[Why this project is intentionally small]

The project is useful enough to involve real decisions, tests, failures, and follow-up work. It is still small enough that you can see the complete development process without spending days building infrastructure.

:::

## Before You Start

Create a new project folder:

```bash
mkdir apiwatch
cd apiwatch
git init
```

Create and activate a Python environment.

Windows PowerShell:

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
```

macOS or Linux:

```bash
python -m venv .venv
source .venv/bin/activate
```

Install the test runner:

```bash
python -m pip install pytest
```

## Initialize CTX

Initialize CTX in the project:

```bash
ctx init
```

Check the current execution context:

```bash
ctx status
```

At this point, CTX has created project context for `apiwatch`.

CTX stores the execution context in the project itself, inside `.ctxcli`. That means the context can move with the project, be inspected with the project, and be used by both you and your AI agent.

:::note

Git records changes to the code. CTX records the work around those changes: sessions, tasks, logs, and decisions.

:::

## Generate AI Instructions

If you are using Codex, generate an `AGENTS.md` file:

```bash
ctx generate instruction --preset=codex
```

For another AI tool, choose the matching preset or write to a custom path:

```bash
ctx generate instruction --preset=claude
```

```bash
ctx generate instruction --path=.ai/ctx-instructions.md
```

The instruction file does not contain the current project context. It teaches the AI agent how to retrieve that context from CTX while working.

:::important
CTX instructions are stable guidance for the AI. The changing project context still lives in `.ctxcli`.
:::

## Session 1: Start The Work

Start your first work session:

```bash
ctx start --notes="Start apiwatch and build the first usable CLI scaffold."
```

Create the main task:

```bash
ctx task create --task="Build apiwatch first version" --description="Create a small Python CLI that stores API endpoints, checks their health, records results, and prints a report."
```

In a fresh project, this will usually create `T1`.

Create subtasks under `T1`:

```bash
ctx task create T1 --task="Scaffold the Python CLI" --description="Create package structure, command entry point, endpoint storage, and tests for add/list behavior."
```

```bash
ctx task create T1 --task="Implement endpoint checks" --description="Check configured endpoints, classify health, handle failures, and store check results."
```

```bash
ctx task create T1 --task="Review and finish v1" --description="Run tests, improve small CLI rough edges, and record final project history."
```

View the task structure:

```bash
ctx task tree
```

Start the first implementation task:

```bash
ctx task start T2
```

Record why you are starting small:

```bash
ctx decision create --topic="Keep apiwatch v1 as a local Python CLI" --reasoning="The first project should demonstrate CTX, human review, and AI-assisted implementation without adding infrastructure noise." --tags=scope,python,cli --task
```

Add a short log:

```bash
ctx log add --tag=NOTE --note="Starting with endpoint storage and add/list commands before implementing HTTP checks." --task
```

### Ask AI To Scaffold The Project

Now ask your AI coding agent to implement only the active task.

Use this prompt:

```text
We are building a small Python CLI called apiwatch.

CTX is initialized in this project. Use the current CTX context before working.

Implement only the active task: scaffold the Python CLI.

Requirements:
- Create a Python package named apiwatch.
- Add a CLI entry point runnable with python -m apiwatch.
- Support:
  - add <url> --name <name>
  - list
- Store endpoints locally in .apiwatch/endpoints.json.
- Use the Python standard library where practical.
- Add tests for endpoint storage and add/list behavior.
- Do not implement HTTP checking yet.
- Do not add alerts, scheduling, dashboards, databases, or deployment.

After making changes, summarize:
- files created or changed;
- how to run the CLI;
- how to run tests;
- assumptions made.
```

Record that AI handoff in CTX:

```bash
ctx log add --tag=ATTEMPT --note="Asked AI to scaffold apiwatch with add/list commands, local endpoint storage, and initial tests." --task
```

:::note
This is where CTX starts to feel different from a normal chat. The AI prompt is no longer only buried in a conversation. A short record of the handoff now belongs to the task itself.
:::

### Review The Result

After AI finishes, inspect the files.

A reasonable first version might contain:

```text
apiwatch/
  __init__.py
  __main__.py
  cli.py
  storage.py
tests/
  test_storage.py
  test_cli.py
pyproject.toml
```

Run tests:

```bash
python -m pytest
```

Try the CLI:

```bash
python -m apiwatch add https://example.com --name example
python -m apiwatch list
```

If something fails, record the issue:

```bash
ctx log add --tag=ISSUE --note="Initial scaffold did not pass tests until CLI argument handling was corrected." --task
```

If you or the AI tries a fix, record the attempt:

```bash
ctx log add --tag=ATTEMPT --note="Adjusted CLI parsing and reran pytest after reviewing the failing add/list test." --task
```

When the scaffold works, record the validation:

```bash
ctx log add --tag=NOTE --note="Scaffold is working: add/list commands run and the initial tests pass." --task
```

Complete the task:

```bash
ctx task complete T2
```

End the session:

```bash
ctx session end
```

Make a Git commit:

```bash
git add .
git commit -m "Scaffold apiwatch CLI"
```

### Pause On Purpose

Stop here for a while.

Close the terminal, switch to another project, or take a break. This is part of the guide.

When you return, do not rely on the previous AI chat as your memory. Use CTX.

:::tip
The value of CTX is easier to feel after interruption. You should not need to reconstruct the project from scattered memory, old prompts, and half-remembered code.
:::

Research on developer work has repeatedly shown that interruptions and task switching create recovery cost. For example, Microsoft Research reported that developers often struggle with understanding code rationale and frequent task switching. Research on interrupted programming tasks also studied how developers use notes and activity cues to resume work.

Useful background:

- [Software Development at Microsoft Observed](https://www.microsoft.com/en-us/research/publication/software-development-at-microsoft-observed/)
- [Evaluating Cues for Resuming Interrupted Programming Tasks](https://www.microsoft.com/en-us/research/publication/evaluating-cues-for-resuming-interrupted-programming-tasks/)

CTX does not remove interruption. It gives the work a place to resume from.

## Session 2: Resume From Context

Come back as if it is a different day.

Start by asking CTX what is going on:

```bash
ctx status
```

Inspect the task tree:

```bash
ctx task tree
```

Review recent logs:

```bash
ctx logs --count=10
```

Review decisions:

```bash
ctx decision query -f timestamp -x before::now --sort-by=timestamp --sort=DESC
```

Start a new session:

```bash
ctx start --notes="Resume apiwatch after interruption and implement endpoint health checks."
```

Start the next task:

```bash
ctx task start T3
```

Record the resumption:

```bash
ctx log add --tag=NOTE --note="Resumed after a break by reading ctx status, task tree, recent logs, and decisions before asking AI to continue." --task
```

:::important
This is the core experience: the project explains itself before you ask AI to continue.
:::

### Ask AI To Continue

Prompt the AI:

```text
I am resuming the apiwatch project after a break.

CTX is available in this project. Read the current CTX context first:
- current status;
- task tree;
- recent logs;
- recent decisions.

Continue from the existing code. Do not recreate the project.

Implement only the active task: endpoint health checks.

Requirements:
- Add a check command that checks all configured endpoints.
- Use a timeout.
- Treat HTTP 2xx responses as healthy.
- Treat timeout, connection error, and non-2xx response as unhealthy.
- Append each check result to local history, for example .apiwatch/results.jsonl.
- Add a report command that prints recent results.
- Add tests for:
  - healthy 2xx response;
  - unhealthy non-2xx response;
  - timeout or connection failure;
  - result history being written.
- Keep the CLI small.

Do not add alerts, background scheduling, dashboards, databases, authentication, or deployment.

After making changes, summarize:
- files changed;
- behavior added;
- tests added;
- anything that needs human review.
```

Record the AI handoff:

```bash
ctx log add --tag=ATTEMPT --note="Asked AI to implement check/report commands, health classification, result history, and tests." --task
```

### Make A Real Product Decision

After the AI implements checks, review the behavior.

There is a small but real decision to make:

Should redirects count as healthy?

For this first version, keep the rule strict:

```bash
ctx decision create --topic="Only HTTP 2xx responses count as healthy in apiwatch v1" --reasoning="A strict rule is easier to explain, test, and trust. Redirect handling and custom success ranges can be future improvements." --tags=http,health-check,v1 --task
```

If the implementation needs adjustment, ask AI:

```text
Please adjust apiwatch so only HTTP 2xx responses are healthy.

Update tests to make this explicit:
- 200 is healthy.
- 204 is healthy.
- 301 is unhealthy for v1.
- 404 is unhealthy.
- timeout or connection failure is unhealthy.

Do not add redirect configuration yet.
```

Record the change:

```bash
ctx log add --tag=NOTE --note="Clarified v1 health behavior: only 2xx responses are healthy; redirects are out of scope." --task
```

Run tests:

```bash
python -m pytest
```

Try the commands:

```bash
python -m apiwatch check
python -m apiwatch report
```

If everything works:

```bash
ctx log add --tag=NOTE --note="Endpoint checks and report command work; tests cover 2xx, non-2xx, failure handling, and result history." --task
```

Complete the task:

```bash
ctx task complete T3
```

End the session:

```bash
ctx session end
```

Commit the code:

```bash
git add .
git commit -m "Implement endpoint checks and report"
```

## Session 3: Review And Finish

Start the final session:

```bash
ctx start --notes="Review apiwatch v1, keep scope small, and finish the first project."
```

Start the final task:

```bash
ctx task start T4
```

Inspect the current state:

```bash
ctx status
ctx task tree
ctx logs --count=20
```

Ask AI to review, not expand:

```text
Review apiwatch as a small first usable version.

CTX is available in this project. Use the current CTX context before reviewing.

Focus only on:
- obvious bugs;
- unclear CLI output;
- missing tests for promised behavior;
- small README usage notes if missing.

Do not add large new features.
Do not add alerts, scheduling, dashboards, databases, authentication, deployment, or background workers.

Return:
- issues found;
- changes made;
- tests run;
- future ideas that should remain out of scope for v1.
```

Record the review handoff:

```bash
ctx log add --tag=ATTEMPT --note="Asked AI to review apiwatch v1 for bugs, CLI clarity, missing tests, and small usage notes without expanding scope." --task
```

Run the full test suite:

```bash
python -m pytest
```

Record the result:

```bash
ctx log add --tag=NOTE --note="Final review completed and pytest passes for apiwatch v1." --task
```

Record the final scope decision:

```bash
ctx decision create --topic="Finish apiwatch v1 without adding scheduling or alerts" --reasoning="The first project is complete once the CLI can store endpoints, check health, record results, report history, and pass tests. Scheduling and alerts are useful later features but would distract from the getting-started workflow." --tags=scope,v1,finish --task
```

Complete the final task and the parent task:

```bash
ctx task complete T4
ctx task complete T1
```

End the session:

```bash
ctx session end
```

Commit the final code:

```bash
git add .
git commit -m "Finish apiwatch v1"
```

### Review The Project History

Now inspect what CTX captured.

View the current status:

```bash
ctx status
```

View the sessions:

```bash
ctx session query -f status -x equals:INACTIVE --sort-by=endedAt --sort=DESC
```

View the task tree:

```bash
ctx task tree
```

View completed tasks:

```bash
ctx task query -f status -x equals:COMPLETED --sort-by=completedAt --sort=DESC
```

View recent logs:

```bash
ctx logs --count=50
```

View issue logs:

```bash
ctx log query -f tag -x equals:ISSUE --sort-by=timestamp --sort=DESC
```

View attempt logs:

```bash
ctx log query -f tag -x equals:ATTEMPT --sort-by=timestamp --sort=DESC
```

View decisions:

```bash
ctx decision query -f timestamp -x before::now --sort-by=timestamp --sort=DESC
```

### Export The History

CTX commands support JSON and pretty JSON views for structured output.

Create a small project-history export with the documented query commands:

```bash
ctx session query -f status -x equals:INACTIVE --sort-by=createdAt --sort=ASC --pretty-json
```

```bash
ctx task query -f status -x equals:COMPLETED --sort-by=createdAt --sort=ASC --pretty-json
```

```bash
ctx log query -f timestamp -x before::now --sort-by=timestamp --sort=ASC --pretty-json
```

```bash
ctx decision query -f timestamp -x before::now --sort-by=timestamp --sort=ASC --pretty-json
```

If you want to keep the complete CTX project context with the repository, preserve the `.ctxcli` directory according to your project policy.

For example, you may choose to commit `.ctxcli` when the execution history should travel with the project, or ignore it when the context should remain local.

## Recap

The workflow was:

```bash
ctx init
ctx generate instruction --preset=codex
ctx start --notes="Start apiwatch and build the first usable CLI scaffold."
ctx task create --task="Build apiwatch first version"
ctx task create T1 --task="Scaffold the Python CLI"
ctx task start T2
ctx log add --tag=ATTEMPT --note="Asked AI to scaffold the CLI." --task
ctx decision create --topic="Keep apiwatch v1 as a local Python CLI" --task
ctx task complete T2
ctx session end
```

Then you resumed later:

```bash
ctx status
ctx task tree
ctx logs --count=10
ctx start --notes="Resume apiwatch after interruption and implement endpoint health checks."
ctx task start T3
ctx log add --tag=NOTE --note="Resumed from CTX context before asking AI to continue." --task
```

And finished with review and history:

```bash
ctx task complete T4
ctx task complete T1
ctx session end
ctx session query -f status -x equals:INACTIVE --pretty-json
ctx task query -f status -x equals:COMPLETED --pretty-json
ctx log query -f timestamp -x before::now --pretty-json
ctx decision query -f timestamp -x before::now --pretty-json
```

The project stayed small. The context became meaningful.

That is the first project.
