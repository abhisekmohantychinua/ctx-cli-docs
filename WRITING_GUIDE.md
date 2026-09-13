# CTX CLI — Writing Guidelines

The purpose of this guide is to establish a consistent writing system for CTX CLI, including its website, user documentation, and blog. It defines how CTX should sound, how information should be explained, and how writers should make decisions about wording and structure.

The goal is that a reader should recognize the same product personality across every page, regardless of who wrote it or whether it is a product introduction, a command reference, or a technical article.

## 1. Brand voice

CTX should sound like a thoughtful, experienced developer who understands the work, explains things clearly, and respects the reader's ability to make decisions.

The voice is:

### Consultative

Explain the problem and help the reader decide whether a solution is appropriate.

### Clear and practical

Prefer understandable explanations, concrete examples, and useful instructions.

### Honest and measured

State what a feature does, what it does not do, and when it may not be useful.

### Structured

Give every explanation a clear purpose and a natural progression.

### The voice in one sentence

Write as a calm, technically capable person helping another developer understand a problem, evaluate a solution, and use it effectively.

### What the voice is not

- A sales representative trying to create urgency.
- A productivity guru prescribing habits.
- A casual friend filling space with enthusiasm.
- A marketing writer using exaggerated claims.
- A textbook that explains every possible detail before the reader can act.
- An AI assistant producing generic, polished-sounding paragraphs.

## 2. The central writing principle

Clarity before persuasion. Value before features.

Every piece of content should help the reader understand something, make a decision, or accomplish a task.

A product page may persuade through a clear explanation of value. A blog may change how a developer thinks about a problem. A documentation page may help someone complete a command without confusion.

Do not begin with what CTX wants to say. Begin with what the reader needs to understand.

### The preferred progression

1. Establish the problem or purpose.
2. Explain the relevant idea in plain language.
3. Show how the solution works.
4. Give the reader a practical next step.

This is a writing pattern, not a rigid template. Short reference pages may need only a purpose and exact usage. A long article may need several layers of explanation.

## 3. Language and wording

### Use plain, precise English

Use words that developers naturally understand. Avoid making simple ideas sound sophisticated.

| Prefer | Avoid |
| --- | --- |
| Use | Utilize |
| Start a session | Initiate a session |
| Save the decision | Persist the decision |
| Find a task | Retrieve a task entity |
| Work on a project | Engage in project execution activities |
| Keep the context | Maintain persistent execution awareness |

Technical terms are appropriate when they describe a real concept. The rule is not to remove technical language; it is to avoid using it where ordinary language is more precise.

### Use active voice

Active voice usually makes a sentence clearer and shorter.

Prefer:

> CTX stores project context in the project directory.

Avoid:

> Project context is stored in the project directory by CTX.

Prefer:

> The command ends the active session.

Avoid:

> The active session is ended by the command.

Passive voice is acceptable when the actor is irrelevant or when the result deserves emphasis. It should not be the default.

### Use concrete verbs

A strong verb tells the reader what happens.

Prefer:

- records
- creates
- ends
- links
- searches
- generates
- displays
- preserves
- compares
- explains

Avoid vague verbs such as:

- facilitates
- enables
- leverages
- empowers
- streamlines
- optimizes
- revolutionizes

These are not forbidden, but they should not replace a specific explanation of what the product actually does.

### Avoid unnecessary intensifiers

Words like seamless, powerful, robust, effortless, and highly efficient do not establish value on their own.

Instead of:

> CTX provides a powerful and seamless experience for managing project context.

Write:

> CTX records sessions, tasks, logs, and decisions in the project so you can return to the work without reconstructing its history.

The second sentence explains the value rather than announcing it.

## 4. Sentence and paragraph style

### Sentence length

Prefer short and medium-length sentences. A sentence should carry one clear idea unless combining two ideas makes the relationship clearer.

Long sentences are acceptable when the logic requires them. Avoid chaining several independent points together with repeated conjunctions.

### Paragraph length

A paragraph should develop one idea.

For ordinary website and documentation prose, two to four sentences is a useful starting point. Longer paragraphs are acceptable when they explain a complete concept, but break them when the reader needs a new idea, example, or qualification.

### Use headings to organize meaning

A heading should tell the reader what they will learn or do.

Prefer:

- Why project context matters
- Start your first session
- How task references work
- When to use Snapshot

Avoid:

- Introduction
- Features
- More information
- The next level
- Powerful capabilities

Generic headings are acceptable for broad sections, but the body should quickly establish a specific purpose.

### Use lists deliberately

Lists are useful for:

- Steps in a workflow.
- Options or requirements.
- A small set of distinct items.
- Comparing alternatives.

Do not turn every paragraph into a list. A list should make information easier to scan, not replace natural writing.

## 5. CTX terminology

Use the same terms consistently across the website, documentation, and blog. These names represent the product's conceptual model and should not change for stylistic variety.

## Project context

The execution memory of a project.

### Session

A continuous period of active work on a project.

### Task

A unit of real work within a project.

### Log

A small, meaningful record of something that happened during project execution.

### Decision

An explicit choice made during project execution, together with its reasoning or context.

### Snapshot

A generated view of project activity and derived metrics.

### Terminology rules

1. Use the established entity name when referring to the product concept.
2. Use lowercase for ordinary references in prose: "a session", "a task", "a log".
3. Use the capitalized name when defining an entity or referring to a formal model: "A Session represents a continuous period of active work."
4. Do not use synonyms that change the meaning of a feature. For example, do not call a task a ticket, an issue, or a work item unless the distinction is intentional.
5. Use the same name for a field in the documentation and in the CLI output.
6. Use `CTX CLI` for the product name in prose. Use `ctx` for the executable and command examples.

## 6. Product and website content

Website content should explain the product's value and help the reader decide whether CTX is relevant to their work.

### Start with the reader's problem

The opening should establish a recognizable problem, not introduce a list of capabilities.

Prefer:

> When a project continues across several sessions, the work does not always continue with you. You may remember the goal, but not the last attempt, the reason behind a decision, or what still needs attention.

Then introduce CTX:

> CTX keeps that execution context in the project so you can return to the work with a clearer understanding of where you left off.

Avoid:

> CTX is a revolutionary AI-powered context management solution that empowers developers to supercharge their productivity.

### Explain value through a real situation

A useful product explanation should make the benefit visible.

For example:

> You finish a session after trying two approaches to a bug. The next day, you can see the task, the attempts you recorded, and the decision that explains which approach you chose. You do not have to reconstruct the entire investigation from memory.

The example should describe an actual workflow supported by the product. Do not invent outcomes that the product does not provide.

### Be specific about the audience

Write for developers who work on projects that continue over time. They may work alone or with a team, and they may use AI coding tools. The writing should not assume that every reader is an AI enthusiast or that every developer needs every feature.

Prefer:

> CTX is useful when the context behind your work matters as much as the code you change.

Avoid:

> CTX is for every developer who wants to be more productive.

### Describe features without overselling them

Every feature should have a clear purpose and an accurate description.

Prefer:

> Snapshot generates a self-contained view of project activity, including session metrics, task progress, logs, and decisions. It is an experimental feature for developers who want to examine how they work.

Avoid:

> Snapshot uses advanced intelligence to unlock your true productivity potential.

### Use CTX's philosophy consistently

CTX supports both simple and advanced workflows. Do not write as if every user must use every feature or interact with the CLI constantly.

A good explanation recognizes that:

> Some work needs only a few commands. Other work benefits from more detailed records. CTX supports both without requiring a separate workflow.

This is a central product idea and should appear naturally wherever the feature is relevant.

## 7. Documentation content

Documentation should be practical, predictable, and easy to use. It should explain the product without making the reader learn the internal specifications.

### Write for the user's task

Before writing a documentation page, identify the question the reader is trying to answer.

Examples:

- How do I install CTX?
- How do I start working on a project?
- How do I record a decision?
- How do I find a task?
- How do I understand a query result?

The page should answer that question directly.

### Use a consistent structure

For conceptual pages:

1. Definition.
2. Why the concept exists.
3. How it works.
4. Example or workflow.
5. Related concepts.

For command pages:

1. Purpose.
2. Usage.
3. Options.
4. Behavior.
5. Examples.
6. Output or errors, when relevant.
7. Related commands.

Not every page needs every section. The structure should serve the task, not the other way around.

### Explain commands in user language

Prefer:

> Start a new session for the current project.

Avoid:

> Creates a new session entity and persists it to the session repository.

The second may be appropriate in internal architecture documentation, but it is not the default language for users.

### Use examples that show the workflow

A command example should have a reason to exist. Include enough context to understand why the command is being run and what the user should expect.

```bash
ctx session start -n "Implementing authentication"
ctx task create -t "Add OAuth callback"
ctx log "The callback returns 401"
```

Then explain the result:

> CTX creates the session, records the task, and associates the log with the active work context.

The example should be accurate, minimal, and consistent with the actual CLI behavior.

### Explain errors as part of the experience

When a command fails, the documentation should explain:

- What caused the error.
- What the user can do next.
- Whether any data was changed.

Use the same terms as the CLI's error messages. Avoid introducing a second vocabulary for the same problem.

## 8. Blog writing

The blog should feel like a thoughtful developer sharing a useful perspective, not a stream of promotional announcements.

### Start with an idea worth reading

A good article has a clear question, problem, observation, or argument.

Examples:

- Why execution context gets lost between coding sessions.
- What a useful task system should remember.
- When a lightweight CLI is better than a larger workflow tool.
- How to preserve the reasoning behind technical decisions.

The article should have a purpose beyond mentioning CTX.

### Develop the idea before introducing the product

If the article is about a problem, explain the problem in a way that stands on its own. Introduce CTX when it is relevant to the discussion.

Prefer:

> A task list tells you what remains. It does not always tell you what happened before the task reached its current state.

Then connect the idea to the product:

> This is one reason CTX treats logs and decisions as part of the execution context, rather than as separate notes that disappear from the workflow.

### Make arguments carefully

When expressing an opinion, distinguish it from a fact.

Use:

- "In my experience..."
- "A useful way to think about this is..."
- "This approach works well when..."
- "The trade-off is..."
- "I would avoid this when..."

Avoid presenting a preference as a universal rule.

### Give technical substance

A blog should provide a useful explanation, example, comparison, or conclusion. Do not fill the article with broad statements about the future of development or AI.

A good article may include:

- A real development scenario.
- A comparison of two approaches.
- A small technical example.
- A design decision and its trade-offs.
- A practical workflow.

The writing should remain accessible without becoming shallow.

## 9. Human-written style

The writing should feel deliberate and natural, as if someone has thought through the subject before explaining it.

This does not mean making every sentence informal. It means the writer should have a clear point of view, use natural transitions, and avoid patterns that make the text feel generated or assembled from a template.

### Explain one idea at a time

A human writer usually has a reason for moving from one paragraph to the next. Make that relationship clear.

Prefer:

> A task tells you what needs to be done. A log records what happened while doing it. A decision preserves why you chose one approach over another. Together, they provide more context than a task list alone.

Avoid:

> CTX provides tasks, logs, and decisions. These powerful features work together to enhance productivity and improve execution context.

The first develops an idea. The second merely names features and announces benefits.

### Use natural transitions

Use transitions when they express a real relationship:

- However
- For example
- That matters when...
- The distinction is...
- This is useful because...
- In practice...
- On the other hand

Do not add transition words to every paragraph. A new paragraph can also follow naturally from the previous one without an explicit connector.

### Avoid repetitive sentence patterns

Do not make every section follow a predictable sequence such as:

> First, ...
>
> Second, ...
>
> Finally, ...

unless the content is genuinely a process.

Similarly, avoid repeated openings such as:

> CTX provides...
>
> CTX allows...
>
> CTX enables...

Vary the structure according to the meaning. Sometimes the subject is the user, sometimes the project, sometimes the problem.

### Allow measured opinions

A strong product voice is not neutral about everything. It can express a reasoned preference.

Prefer:

> CTX keeps its execution context in the project directory. This makes the data easy to inspect, back up, and move with the project.

For a limitation:

> CTX does not replace Git. Git records changes to the code; CTX records the context behind the work.

Avoid:

> CTX is the best possible solution for all project management needs.

### Avoid artificial enthusiasm

Use enthusiasm only when the subject warrants it. The writing should not need exclamation marks or exaggerated adjectives to communicate value.

Prefer:

> Snapshot is an experimental feature that gives you another way to examine your work.

Avoid:

> Discover the amazing power of Snapshot and transform your productivity forever!

## 10. Consistency across content types

The same product should sound the same whether it is being introduced, explained, or documented. What changes is the purpose of the content.

| Content type | Main purpose | Writing emphasis |
| --- | --- | --- |
| Website | Explain value and build understanding | Clear problem, product perspective, concise examples |
| Documentation | Help users understand and use CTX | Direct instructions, exact terminology, complete behavior |
| Blog | Explore an idea or problem | Reasoned argument, useful context, natural narrative |

### What should remain consistent

- Brand voice.
- Terminology.
- Spelling and punctuation.
- Sentence clarity.
- Level of technical precision.
- Honesty about limitations.
- The relationship between features and user value.

### What should change

A website hero should not read like a command reference. A command reference should not read like a personal essay. A blog should not become a feature catalogue.

Consistency means the same personality and language, not identical paragraph structures.

## 11. Writing rules for CTX commands

Command documentation needs additional precision because a small wording difference can change what a user believes a command does.

### Command names

Use the actual command name in backticks:

```bash
ctx session start
ctx task create
ctx log add
```

Use the full command name when describing it in prose. Use the shorthand when showing the command itself or when the shorthand is relevant to the workflow.

### Command descriptions

A command description should begin with a verb and describe the primary action.

Prefer:

> Start a new project session.

Avoid:

> Entrypoint for session commands.

The second describes an implementation structure rather than the user's action.

### Option descriptions

Option descriptions should state what the option controls.

Prefer:

> Notes describing the session.

Avoid:

> Optional notes describing this session.

The required/optional status belongs in the options table. The description should focus on meaning.

### Behavior descriptions

Use clear conditional language.

Prefer:

> If a session is already active, CTX rejects the command unless `--end` is provided.

Avoid:

> In case of an active session, the operation will be rejected unless the end session flag is passed.

The preferred form is shorter and easier to scan.

### Examples

Every example should be valid, purposeful, and consistent with the actual CLI. Do not invent output, identifiers, or options.

When showing a command with an optional argument, use the simplest meaningful form first. Add more complex forms when they demonstrate a real use case.

## 12. Writing errors and validation messages

Error messages should be consistent with the rest of the product. They are part of the user experience, not just technical output.

### Validation messages

A validation message should state what is wrong, using the same field name that appears in the command documentation.

Prefer:

> Session notes cannot exceed 300 characters.

Avoid:

> Invalid input.

Prefer:

> Identifier must be a valid UUID.

Avoid:

> Invalid identifier format.

### Business errors

A business error should explain the situation and, where possible, the next action.

Prefer:

> A session is already active. End it before starting a new one, or use `--end` to end the active session and start a new one.

Avoid:

> Existing active session error.

### Error codes

Error codes should identify the error consistently. They should not be used as a substitute for a readable message.

The message should be understandable without looking up the code.

### Avoid blame

Do not make the user feel that a normal mistake is a personal failure.

Prefer:

> No active session found. Start a session before ending one.

Avoid:

> You cannot end a session because you have not started one.

## 13. Spelling, capitalization, and punctuation

Use consistent English conventions across the website, documentation, and blog.

### Spelling

Use one English spelling system consistently. For CTX, British English is a reasonable choice because the existing documentation uses forms such as initialise, behaviour, and customisable. If you choose British English, use it throughout the content.

| Preferred | Avoid mixing with |
| --- | --- |
| Initialise | Initialize |
| Behaviour | Behavior |
| Customisable | Customizable |
| Organisation | Organization |

The most important rule is consistency. Do not mix spelling systems across pages.

### Capitalization

Use sentence case for headings, labels, and descriptions.

Prefer:

> Project context
> Start a new session

Avoid:

> Project Context
> Start A New Session

Product and entity names may use their established capitalization, such as CTX CLI, Session, Task, Log, and Decision when used as formal model names.

### Punctuation

Use full stops for complete sentences. Use commas where they improve readability. Avoid unnecessary semicolons, exclamation marks, and decorative punctuation.

Use backticks for command names, options, field names, and code.

```bash
ctx session start --notes "Working on authentication"
```

## 14. A writing process for every page

Use this process when creating or revising content.

1. ### Define the reader's outcome

   Write one sentence describing what the reader should understand or accomplish after reading.

2. ### Choose the content type

   Decide whether the page is a product explanation, documentation page, workflow guide, or blog. This determines how much context and detail to include.

3. ### Write the core explanation

   Start with the main idea. Explain the problem, concept, or action before adding supporting details.

4. ### Add practical evidence

   Include an example, command, scenario, or explanation that helps the reader understand the idea in practice.

5. ### Check consistency

   Review terminology, spelling, tone, command names, and descriptions against the established writing conventions.

6. ### Remove unnecessary writing

   Remove repeated explanations, generic introductions, empty claims, and details that do not help the reader achieve the outcome.

## 15. Final quality checklist

Before publishing any CTX content, verify the following.

### Content review

0 / 10

- [] The content has a clear purpose for the reader.
- [] The writing sounds calm, clear, and practical.
- [] The main idea is explained before supporting details.
- [] Terminology matches the CTX product model.
- [] The content uses consistent spelling and capitalization.
- [] Claims are accurate and do not exaggerate the product.
- [] Examples are purposeful and technically correct.
- [] The structure makes the content easy to understand.
- [] There are no unnecessary filler phrases or repeated ideas.
- [] The content provides a useful next step or conclusion.

## 16. Reference examples

These examples demonstrate the intended voice. They are illustrative wording, not replacements for the actual product documentation.

### Website

> CTX keeps your project execution context in the project. Record what you worked on, what happened, and why you made a decision, so you can return to the work with a clearer understanding of where you left off.

### Concept documentation

> A Session represents a continuous period of active work on a project. It records when the session started and ended, and provides the context for the work completed during that period.

### Command documentation

> Start a new session for the current project. If another session is active, CTX rejects the command unless you use `--end`.

### Blog

> A task list tells you what remains. It does not always tell you what happened before the task reached its current state. That missing context becomes more noticeable when a project continues across several sessions or when different people work on the same problem.

### Experimental feature

> Snapshot gives you another way to examine your work. It generates a self-contained view of project activity, including session metrics, task progress, logs, and decisions. The feature is experimental, and its usefulness depends on how you record your work.

The standard: Every CTX page should feel like it was written by the same thoughtful developer. The reader should understand the idea, know what to do next, and trust that the explanation is accurate.
