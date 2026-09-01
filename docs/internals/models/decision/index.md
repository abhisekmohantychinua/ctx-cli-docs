---
sidebar_position: 4
---

# Decision

A **Decision** represents an explicit choice made during project execution together with the reasoning behind it.  
The decision data model contains the information CTX uses to identify the decision, describe the subject of the choice, explain the reasoning, and indicate whether it belongs to a specific session or task.

## Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| id | [Identifier](../../identifier/) | Yes | Unique identifier for the decision. |
| topic | String | Yes | Subject or area to which the decision relates. |
| reasoning | String | No | Explanation of the decision and the reasoning behind it. |
| tags | List of String | No | Optional collection of tags used to classify the decision. |
| timestamp | Date | Yes | Timestamp at which the decision was recorded. |
| referenceType | Enum | No | Type of execution record referenced by the decision. |
| referenceId | [Identifier](../../identifier/) | No | Identifier of the referenced session or task. |

## Field Details

### id

- The decision identifier uniquely identifies the decision within the project context.
- It is generated when the decision is created and remains unchanged during its lifetime.

### topic

- `topic` identifies the subject or area of the decision.
- It is required and limited to **150 characters**.

### reasoning

- `reasoning` contains the explanation that makes the decision understandable later.
- It is the central content of the decision record.
- Reasoning can contain multiple lines when a decision requires more context.
- It is optional and limited to **500 characters**.

### tags

- `tags` is an optional collection of strings used to classify the decision.
- Tags do not change the decision. They provide additional context for organization and retrieval.

### timestamp

- `timestamp` records when the decision was created.
- The value is stored as UTC.
- The timestamp represents when the decision entered the project execution history.

### referenceType

- `referenceType` identifies the type of project execution record referenced by the decision.
- Supported values are:

    | Value | Meaning |
    | --- | --- |
    | SESSION | The decision references a project session. |
    | TASK | The decision references a task. |

- The field is optional.

### referenceId

- `referenceId` identifies the specific session or task referenced by the decision.
- It is used together with `referenceType` to indicate which record the decision is associated with.
