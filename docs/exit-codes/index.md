---
sidebar_position: 7
---

# Exit Codes

CTX uses exit codes to identify the outcome of every command execution.

The code returned by CTX is the same code used to identify the error. This makes command failures predictable for both developers and programs consuming CTX.

A successful command returns `0`. When a command fails, CTX returns a non-zero code that identifies the reason for the failure.

:::info
**Error code** identifies what went wrong. **Exit code** is the value returned to the shell after the command finishes. In CTX CLI, they are always the same.
:::

## How Exit Codes Work

Every CTX command ends with an exit code.

| Code | Meaning |
| :---: | --- |
| 0 | Command completed successfully |
| 1 | Business error with no more specific known error code |
| 2 | Command validation failed |
| 100–999 | Known error identified by a specific error code |

The error code is returned as the process exit code and, when an error message is displayed, the same code identifies that error.

For example, if a command fails because no project context can be found, CTX returns:

```text
ERROR 103: No project context found.

Initialize the project context or run the command from the project root.

Command:
ctx init
```

The process also exits with code `103`.

This means a script, an AI agent, or another tool does not need to interpret the error message to determine what happened. It can use the exit code directly.

## Error Code Structure

Business errors use a three-digit `XYZ` structure.

```text
XYZ
││└── Specific failure condition
│└─── Business operation or category
└──── Domain
```

### The first digit

The first digit identifies the domain:

| Code | Domain |
| :---: | --- |
| 1 | Global / Application / Project Context / Instruction |
| 2 | Session |
| 3 | Task |
| 4 | Log |
| 5 | Decision |

### The second digit

The second digit identifies the business operation or category within that domain.

Common categories include:

| Code | Category |
| :---: | --- |
| 0 | Lifecycle |
| 1 | Retrieval |
| 2 | Modification |
| 3 | Deletion |
| 4 | Hierarchy |
| 5 | Reference |
| 6 | State |

### The third digit

The final digit identifies the specific failure condition.

For example:

```text
200  Session lifecycle - existing active session
201  Session lifecycle - no active session
210  Session retrieval - session not found
230  Session deletion - active session cannot be deleted
```

This structure allows the code itself to provide useful information without putting dynamic information such as an entity identifier or timestamp into the error code.

## Reading an Exit Code

The exit code can be used directly to determine the outcome of a command.

```text
0     Success
1     Unknown business error
2     Validation error
103   Known error: project context not found
200   Known error: active session already exists
310   Known error: task not found
```

The important distinction is that `1` and `2` are themselves meaningful error codes. They are not categories that contain another error code. If CTX returns `310`, `310` is the error code and the process exit code. If CTX returns `1`, `1` is the error code and the process exit code. There is no separate business error code hidden behind the exit code.

## Error Reference

### Global

| Code | Meaning |
| :---: | --- |
| 100 | Configuration or application data contains invalid content |
| 101 | A required file or directory cannot be accessed |
| 102 | Application data could not be saved |
| 103 | No project context was found |
| 120 | A filter expression is invalid or unsupported |
| 130 | Instruction content could not be fetched because of an I/O error |
| 131 | Instruction content fetch was interrupted |
| 132 | Instruction content could not be fetched because the server returned an unsuccessful HTTP status |
| 140 | A referenced entity could not be found |
| 141 | An active task is required but none exists |
| 142 | An active session is required but none exists |

### Sessions

| Code | Meaning |
| :---: | --- |
| 200 | A session is already active |
| 201 | No active session exists |
| 210 | The requested session does not exist |
| 230 | An active session cannot be deleted |

### Tasks

| Code | Meaning |
| :---: | --- |
| 310 | The requested task does not exist |
| 340 | The task does not have a parent task |
| 341 | The task has reached the maximum subtask depth |
| 342 | A task cannot be moved under itself |
| 343 | A task cannot be moved under one of its subtasks |
| 344 | The task hierarchy contains a circular reference |
| 360 | Another task is already in progress |
| 361 | The task is not in progress |
| 362 | The task is already completed |
| 363 | The task is blocked |

### Logs

| Code | Meaning |
| :---: | --- |
| 410 | The requested log does not exist |

### Decisions

| Code | Meaning |
| :---: | --- |
| 510 | The requested decision does not exist |

## Working With Exit Codes

Exit codes are useful when CTX is used from scripts, automation, or AI-assisted workflows.

A caller can use the returned code to determine whether a command succeeded and, when it failed, whether the failure is a validation error, an unknown business error, or a specific known condition.

For example:

```bash
ctx task start T12
```

If task `T12` cannot be started because another task is already in progress, CTX returns error code `360`.

A script can therefore handle the result using the process exit code without parsing the human-readable error message.

The same applies to AI agents. An agent can use the exit code to recognize a known condition and decide how to continue, while the accompanying message provides the details needed to understand the failure.

## Stability

Known exit codes are stable identifiers for specific failure conditions.

A code should therefore be treated as an identifier, not as a value whose meaning changes between individual command executions.

The entity identifier, timestamp, or other dynamic information belongs in the error message, not in the exit code.

This allows integrations to depend on the meaning of an exit code without depending on the exact wording of an error message.
