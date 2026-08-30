---
sidebar_position: 1
---

# Introduction

## What is CTX CLI?

CTX is a lightweight CLI that maintains execution context for developers and AI.

Development is not just writing code. While working on a project, you have tasks in progress, things you tried, problems you encountered, decisions you made, and work sessions that eventually get interrupted. CTX gives these pieces a place to live alongside the project.

CTX keeps track of the important parts of ongoing development work. Everything is stored inside the project itself and can be accessed through the same CLI by both the developer and AI agents.

1. **Tasks** - what you are working on and its current state
2. **Sessions** - when a period of work started and ended
3. **Logs** - short notes about events, ideas, issues, observations, and attempts
4. **Decisions** - important decisions and the reasoning behind them

## Why CTX CLI?

Software development produces much more than code.

When developers work on a problem, they don't just write code and move on. They try things, change their approach, make decisions, run into problems, leave things half-done, and figure out what to do next. A lot of what makes the work understandable exists only in that process. E.g. what you were trying to do, what you already tried, why you chose one approach over another, and where you stopped. The problem is that this context doesn't stay with the code.

Come back to a project a few days later and you may remember what you were working on, but not exactly where you left off or why you made certain decisions. So you go back through the code, commits, notes, and old conversations, trying to reconstruct what happened. The same thing happens when switching between projects or when asking an AI to continue work that started earlier.

The tools we already use don't quite capture this. Git is good at showing what changed. A task manager can tell you what was planned. Notes can preserve things you deliberately write down. AI tools can help you think and build. But none of them really keeps track of the evolving context of the work itself.

That's where CTX CLI comes into picture. CTX CLI keeps the context around development work with the project, the things that help explain what is happening, what has already happened, and why.

> **When you come back to a project, you shouldn't have to reconstruct the work from scratch. Neither should your AI.**

## How CTX CLI works?

CTX follows a simple cycle:  
**Capture → Persist → Retrieve → Reuse**

### Capture

As work happens, CTX lets you capture the parts of the execution process that are worth preserving. The work being performed, the period in which it happened, meaningful events and observations, and decisions that establish direction.

Most of these actions are deliberately small. You should be able to record something useful without interrupting the work itself. For example, a log might simply capture an observation:

```bash
ctx log -t idea "Move validation into the domain layer"
```

A decision can preserve something that would otherwise exist only in your memory:

```bash
ctx dec "Use file-based storage instead of a database"
```

### Persist

CTX stores the captured information in the project's `.ctxcli` directory.

The project therefore carries its own execution context with it. There is no separate service required to keep the basic context available. The context can remain useful across different work sessions, breaks between development, context switches, different AI sessions and different development environments.

Because the data belongs to the project, it can also be backed up, inspected, versioned, or ignored according to how you manage the project.

### Retrieve

The developer or AI can ask CTX for exactly what is relevant. There are simple views for everyday use and a more powerful query system for detailed retrieval.

For everyday work, simple views provide a quick picture of the current state like current session, task in progress, recent logs, recent decisions, pending works. When you need something more specific, the query system can search the stored records using fields, expressions, pagination, and sorting.

The idea is to make both quick inspection and deeper retrieval possible without forcing you to manually reconstruct the project's history.

### Reuse

The retrieved context can then be used to continue the work.

A developer can understand "Where did I leave this project?". Where as an AI agent can understand "What is the current task, what has already been tried, what decisions were made, and what is still unresolved?".

CTX therefore does not try to replace Git, Jira, Linear, Claude Code, Codex CLI, or other development tools. It provides the execution context that exists around the work and makes that context available to both human and AI.

### In one sentence

> **CTX records the evolving context of development work so that humans and AI can understand, continue, and reason about a project without reconstructing its history from scratch.**
