---
sidebar_position: 1
---

# Session

A **Session** represents a continuous period of active work on a project.  
The session data model contains the information CTX uses to identify the session, describe its purpose, track its lifecycle, and determine whether it is currently active.

## Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| id | String | Yes | Unique identifier for the session. |
| notes | String | No | Short notes describing the purpose or context of the session. |
| createdAt | Date | Yes | Timestamp at which the session started. |
| endedAt | Date | No | Timestamp at which the session ended. `null` while the session is active. |
| status | Enum | Yes | Current state of the session: `ACTIVE` or `INACTIVE`. |

## Field Details

### id

- The session identifier uniquely identifies a session within the project context.
- The identifier is generated when the session is created and does not change during the session's lifetime.

### notes

- Session notes provide a short description of what the session is about.
- They are optional and limited to **300 characters**.

### createdAt

- `createdAt` records the moment the session starts. It is always present for a valid session.
- The timestamp is stored in UTC. CTX uses the configured time representation when displaying the timestamp.

### endedAt

- `endedAt` records the moment the session ends.
- The field remains `null` while the session is active.
- The timestamp is stored in UTC. CTX uses the configured time representation when displaying the timestamp.

### status

- The session status indicates whether the session is currently active.
- Supported values are:
    | Value | Meaning |
    | --- | --- |
    | ACTIVE | The session is currently active. |
    | INACTIVE | The session has ended. |
- A project can have at most one `ACTIVE` session at a time.
