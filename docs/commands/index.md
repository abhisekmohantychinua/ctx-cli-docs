---
sidebar_position: 5
---

# Commands

CTX CLI commands are organized around the different parts of project execution that CTX helps you capture and manage.

Most commands follow the same structure as the concepts they work with: sessions represent periods of work, tasks represent the work itself, logs capture things that happen along the way, and decisions preserve important choices and their reasoning.

## Project Context

### [ctx](./ctx/)

The root command for CTX. Use it to learn about the installed version and discover the available commands.

### [ctx init](./ctx/init/)

Initialize the CTX project context so project records can be stored alongside the project.

### [ctx status](./ctx/status/)

View a quick summary of the current execution context, including the active session and task, pending tasks, recent logs, and recent decisions.

## Sessions

### [ctx session](./ctx/session/)

Manage project sessions and view the active or most recent session.

### [ctx session start](./ctx/session/start/)

Start a new project session and optionally record session notes.

### [ctx session end](./ctx/session/end/)

End the active project session.

### [ctx session update](./ctx/session/update/)

Modify an existing session.

### [ctx session delete](./ctx/session/delete/)

Delete an inactive session.

### [ctx session query](./ctx/session/query/)

Search session history using filters, sorting, and pagination.

### [ctx start](./ctx/start/)

Start a new project session through the shorter `ctx start` command.

## Tasks

### [ctx task](./ctx/task/)

Manage project tasks and view the task currently in progress or most recently completed.

### [ctx task create](./ctx/task/create/)

Create a new project task and optionally place it under an existing task.

### [ctx task start](./ctx/task/start/)

Start an existing task.

### [ctx task complete](./ctx/task/complete/)

Complete a task, with an option to complete its child tasks at the same time.

### [ctx task block](./ctx/task/block/)

Mark a task as blocked and optionally record why it cannot proceed.

### [ctx task update](./ctx/task/update/)

Modify an existing task.

### [ctx task delete](./ctx/task/delete/)

Delete a task while preserving its subtasks.

### [ctx task move](./ctx/task/move/)

Move a task to the root level or under another task.

### [ctx task list](./ctx/task/list/)

List all project tasks in a flat view.

### [ctx task tree](./ctx/task/tree/)

View project tasks as a hierarchy.

### [ctx task query](./ctx/task/query/)

Search task history using filters, sorting, and pagination.

## Logs

### [ctx log](./ctx/log/)

Manage project logs. When used without a subcommand, it adds a new log.

### [ctx log add](./ctx/log/add/)

Add a new log and optionally associate it with a session or task.

### [ctx log list](./ctx/log/list/)

List recent project logs.

### [ctx logs](./ctx/logs/)

Quickly list recent logs using the shorter `ctx logs` command.

### [ctx log update](./ctx/log/update/)

Modify an existing log or manage its reference.

### [ctx log update reference](./ctx/log/update/reference/)

Change or remove the session or task reference associated with a log.

### [ctx log delete](./ctx/log/delete/)

Delete an existing log.

### [ctx log query](./ctx/log/query/)

Search log history using filters, sorting, and pagination.

## Decisions

### [ctx decision](./ctx/decision/)

Manage project decisions.

### [ctx decision create](./ctx/decision/create/)

Create a decision record with its topic, reasoning, tags, and optional reference.

### [ctx decision update](./ctx/decision/update/)

Modify an existing decision or manage its reference.

### [ctx decision update reference](./ctx/decision/update/reference/)

Change or remove the session or task reference associated with a decision.

### [ctx decision delete](./ctx/decision/delete/)

Delete an existing decision.

### [ctx decision query](./ctx/decision/query/)

Search decision history using filters, sorting, and pagination.

### [ctx decision tags](./ctx/decision/tags/)

Manage the tags associated with a decision.

### [ctx decision tags add](./ctx/decision/tags/add/)

Add one or more tags to a decision.

### [ctx decision tags remove](./ctx/decision/tags/remove/)

Remove one or more tags from a decision.

## Generate

### [ctx generate](./ctx/generate/)

Generate project-specific artifacts through its generation commands.

### [ctx generate instruction](./ctx/generate/instruction/)

Generate project instructions for an AI-assisted development workflow.
