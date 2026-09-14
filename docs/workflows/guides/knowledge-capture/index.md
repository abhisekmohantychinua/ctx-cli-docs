---
sidebar_position: 3
---

# Knowledge Capture

CTX helps you preserve useful information while working so that important
discoveries, problems, failed attempts, and decisions are not lost when the
work continues later.

## Record an observation

Record an observation when you discover something useful about the project,
codebase, environment, or current task.

```bash
ctx log add --note="The API requires the client ID in the request header"
```

CTX stores the observation as a log entry. You can review or query it later when the same information becomes relevant.

## Record a failed attempt

Record a failed attempt when an approach does not work but the result may help you or someone else avoid repeating the same mistake.

```bash
ctx log add --tag=ATTEMPT --note="Tried using the refresh token as the access token"
```

The failed attempt remains available as part of the project history and can help explain why a different approach was chosen.

## Record an issue

Record an issue when you identify a problem that needs further investigation or prevents the current task from progressing.

```bash
ctx log add --tag=ISSUE --note="Authentication fails when the access token expires"
```

The issue is stored in the project context and can be reviewed while investigating the problem or resuming the task.

## Record a decision

Record a decision when you choose one approach over another and the reasoning may be useful later.

```bash
ctx decision create \
  --topic="Authentication strategy" \
  --reasoning="Use short-lived access tokens with refresh tokens" \
  --tags=authentication
```

CTX stores the decision and its reasoning so the choice can be understood without reconstructing the original discussion.

## Review captured knowledge

Review recent logs when you need to recall what happened during development.

```bash
ctx logs
```

Use a query when you need to find a specific type of entry or search through the project history.

```bash
ctx log query --field=note --expression="contains:authentication"
```

You can also query decisions when reviewing the reasoning behind previous technical choices.

```bash
ctx decision query --expression="startsWith:Authentication"
```

## Related documentation

- [Logs](../../../concepts/logs/)
- [Decisions](../../../concepts/decisions/)
- [Log commands](../../../commands/ctx/log/)
- [Logs commands](../../../commands/ctx/logs/)
- [Decision commands](../../../commands/ctx/decision/)
