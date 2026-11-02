# Commit message instructions

Use this format for every commit in this repository, regardless of which AI agent authors it. The format is tool-neutral; each host is wired to this file rather than keeping its own copy.

## Structure

1. **Label and summary** — one line: `(agent-name) <summary>`.
   - Use the label of the agent that produced the commit: `(opencode)`, `(codex)`, `(copilot)`, `(claude)`.
   - The summary describes the commit as a whole, in one line.
2. **Blank line**
3. **One or more change sections**, each shaped like:

   ```text
   <category>/<domain>:
    - <change>
    - <change>
   ```

   - `<category>` is what type of change: `feature`, `refactor`, `test`, `fix`, `todo`, `docs`, `agent`.
   - `<domain>` is the area affected: `docs`, `articles`, `home-page`, `navbar` and etc.
   - `<change>` is what happened: `added`, `updated`, `refactored`, `removed`, `fixed`.
   - Each change is one bullet, written in the past tense and kept to one line all lower case.
   - Wrap paths, files, and identifiers in backticks.
   - Repeat the section for each category/domain pair. Separate sections with a blank line.

## Example

```markdown
(codex) Adding ai support for documentation

feature/docs:
 - added `@writechoice/docusaurus-plugin-llms-txt` via npm install.
 - updated plugins at `docusaurus.config.js` to include `@writechoice/docusaurus-plugin-llms-txt`.
 - added basic configurations to it to work properly. 
```

## Rules

- Never use conventional-commit prefixes such as `feat:`, `fix:`, or `chore:`.
- The label must match the agent that authored the commit; never reuse another agent's label.
- Keep the summary concise — roughly 72 characters or fewer.
- One commit should be one coherent change; split unrelated work into separate commits.
- Do not commit secrets, credentials, API keys, or `.env` contents.

## How this file is loaded

| Host | Wiring |
| --- | --- |
| GitHub Copilot | `.vscode/settings.json` → `github.copilot.chat.commitMessageGeneration.instructions` |
| OpenCode | `opencode.jsonc` → `instructions` |
| Codex, Cursor, and other `AGENTS.md` readers | referenced from the root `AGENTS.md` |
