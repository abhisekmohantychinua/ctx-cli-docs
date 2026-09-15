---
sidebar_position: 1
---

# Introduction

## What is CTX CLI?

CTX is a lightweight CLI that keeps the execution context of a project available to both developers and AI agents.

Development is not just writing code. As you work on a project, you have tasks in progress, approaches you have tried, problems you have encountered, decisions you have made, and sessions that eventually end. CTX gives those parts of the work a place to live alongside the project.

CTX keeps the important parts of ongoing development work in the project itself. Both the developer and AI agents can access that context through the same CLI.

The core context consists of:

1. **Tasks** — what you are working on and its current state
2. **Sessions** — when a period of work started and ended
3. **Logs** — short records of events, ideas, issues, observations, and attempts
4. **Decisions** — important choices and the reasoning behind them

## What Is an Execution Context?

Execution context is the information around the work that helps explain what is happening in a project.

It is not the source code itself. It is the surrounding information that gives the work meaning: what you are working on, when you started, what you tried, what happened, what problems you encountered, and why you made certain decisions.

For example, a task such as **Move validation into the domain layer** tells you what needs to be done. It tells you much more when you also know that the task is in progress, one approach was already tried and did not work, and a decision was made to keep validation inside the domain layer. That additional information describes the state and history of the work around the code.

:::tip[Think of it as the context around the code]
**Source code tells you what the project is.**  
**Execution context tells you what is happening with the project.**
:::

Execution context is created naturally as development progresses. It changes as sessions begin and end, approaches are tried, problems are discovered, and decisions are made.

Together, these records form the project's execution context. They describe the work happening around the code without replacing the code itself.

## Why CTX CLI?

Software development produces much more than code.

When you work on a problem, you try things, change your approach, make decisions, run into problems, leave some work unfinished, and decide what to do next. Much of what makes that work understandable exists only in the process: what you were trying to do, what you already tried, why you chose one approach over another, and where you stopped. That context does not automatically stay with the code.

Return to a project a few days later and you may remember the goal, but not exactly where you left off or why you made a particular decision. You end up going back through the code, commits, notes, and old conversations to reconstruct what happened. The same problem appears when you switch between projects or ask an AI agent to continue work that started earlier.

The tools we already use each capture part of the picture. Git shows what changed. A task manager shows what was planned. Notes preserve what you chose to write down. AI tools help you think and build. But none of these is focused on keeping the evolving context of the work together.

CTX keeps that context with the project: what is happening, what has already happened, and why.

> **When you come back to a project, you should not have to reconstruct the work from scratch. Neither should your AI.**

## How CTX CLI works

CTX follows a simple cycle:

**Capture → Persist → Retrieve → Reuse**

### Capture

As work happens, CTX lets you record the parts of the execution process worth preserving: the work being performed, the period in which it happened, meaningful events and observations, and decisions that establish direction.

These actions are deliberately small. You should be able to record something useful without interrupting the work itself. For example, a log can capture an observation:

```bash
ctx log -t idea "Move validation into the domain layer"
```

A decision can preserve something that might otherwise exist only in your memory:

```bash
ctx dec "Use file-based storage instead of a database"
```

### Persist

CTX stores the captured information in the project's `.ctxcli` directory.

The project therefore carries its own execution context. No separate service is required to keep the basic context available. The records can remain useful across different work sessions, breaks in development, context switches, AI sessions, and development environments.

Because the data belongs to the project, you can also back it up, inspect it, version it, or ignore it according to how you manage the project.

### Retrieve

Developers and AI agents can ask CTX for the context they need. Simple views support everyday work, while the query system supports more detailed retrieval.

For everyday work, views provide a quick picture of the current state: the current session, the task in progress, recent logs, recent decisions, and other pending work. When you need something more specific, the query system can search stored records using fields, expressions, pagination, and sorting.

The goal is to make both quick inspection and deeper retrieval possible without requiring you to reconstruct the project's history manually.

### Reuse

The retrieved context can then be used to continue the work.

A developer can ask, "Where did I leave this project?" An AI agent can ask, "What is the current task, what has already been tried, what decisions were made, and what is still unresolved?"

CTX does not try to replace Git, Jira, Linear, Claude Code, Codex CLI, or other development tools. It provides the execution context around the work and makes that context available to both humans and AI.

### In one sentence

> **CTX records the evolving context of development work so humans and AI can understand, continue, and reason about a project without reconstructing its history from scratch.**
