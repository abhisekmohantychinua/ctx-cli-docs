---
sidebar_position: 3
---

# Log

A **Log** represents a meaningful record of something that happened during project execution.  
The log data model contains the information CTX uses to describe the event, when it happened, how it is classified, and whether it belongs to a specific session or task.

## Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| id | String | Yes | Unique identifier for the log. |
| note | String | Yes | The content of the log. |
| timestamp | Date-Time | Yes | Timestamp at which the log was recorded. |
| tag | Enum | Yes | Classification of the log. |
| referenceType | Enum | No | Type of execution record referenced by the log. |
| referenceId | UUID | No | Identifier of the referenced session or task. |

## Field Details

### id

- The log identifier uniquely identifies the log within the project context.
- It is generated when the log is created and does not change during its lifetime.

### note

- `note` contains the actual information recorded by the log.
- A note should normally describe a single event, observation, idea, issue, or attempt.
- It is required and limited to **300 characters**.

### timestamp

- `timestamp` records when the log was created.
- The value is stored as UTC and is used to preserve the chronological order of project execution.

### tag

- `tag` identifies the kind of information captured by the log.
- Supported values are:
    | Value | Meaning |
    | --- | --- |
    | NOTE | A general observation or useful piece of information. |
    | IDEA | A possible improvement, approach, or thought worth preserving. |
    | ISSUE | A problem or unexpected behavior encountered during work. |
    | ATTEMPT | An approach that was tried during execution. |
- The tag describes the nature of the message without changing its content.

### referenceType

- `referenceType` identifies the kind of project record referenced by the log.
- Supported values are:
    | Value | Meaning |
    | --- | --- |
    | SESSION | The log references a project session. |
    | TASK | The log references a task. |
- The field is optional.

### referenceId

- `referenceId` identifies the specific session or task referenced by the log.
- It is used together with `referenceType` to indicate which record the log is associated with.
