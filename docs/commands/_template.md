# [Full Command Name]
<!-- 
1. Full command name in small case and space separated.
2. Like for `ctx session start` batch it should be written like '# ctx session start'.

e.g.
# ctx task create
 -->

<!-- 
1. Small description about command.
2. Which is a straight forward yet short description about what it does.

e.g.
Create a new project task.
 -->

## [Command Name]

<!-- 
1. Specific command name like for `ctx session start` batch `start` is the command name. Similarly for `ctx task` batch `task` is the command name.
2. Showcase the aliases if available. Must not be wrapped with ``.

e.g.
## Create (`c`)
 -->

### Arguments
<!-- 
1. This will have just a table with headings argument, required and description.
2. If no arguments are available then section will be kept empty.
3. No `` for arguments inside table. 
4. We can remove this section entirely if has no argument.

e.g.

### Arguments
| argument | required | description |
|---|---|---|
| [<parent-id>] | no | Parent identifier. Defaults to root(no-parent) if not provided. |

 -->

### Options

<!-- 
1. This will have just a table with headings options, shorthand, position, required and description.
2. You can keep the shorthand index empty if no shorthand available.
3. No `` for options inside table. 
4. We can remove this section entirely if has no option.

e.g.

### Options
| options | shorthand | required | description |
|---|---|---|---|
| --description[=<description>] | -d |  | Description for this task. |
| --help | -h |  | Show this help message and exit. |
| --task[=<task>] | -t | Yes | Task name. |
| --version | -V |  | Print version information and exit. |
| [<parent-id>] |  |  | Parent identifier. Defaults to root(no-parent) if not provided. |
 -->

### Subcommands

<!-- 
1. This wil be a list of subcommands. We can remove the section entirely if has no subcommand.
2. Commands will be written in specific format which links to that page. With the short description.

e.g.
### Subcommands

- [status, ps](./status/) - Displays the current execution status.
 -->

## What it does

<!-- 
1. One or more paragraph about what it does.
2. No list or other styles except paragraph.
 -->

## When to use it

<!-- 
1. One or more paragraph about when to use it or use cases.
2. No list or other styles except paragraph 
 -->

## How it works

<!-- 
1. One or more paragraph about how it works.
2. Only list are allowed as other style than paragraph.
 -->

## Examples

<!-- 
1. You can use ### for heading of the example. 
2. Code block examples with a small description below that. 
3. Description must be a paragraph or list. 
4. Description must be small. 
5. Don't use unnecessary over explanatory explanations. 

e.g.

### Create a task

```cmd
ctx task create -t "Review frontend documentation"
```

Creates a task with specified topic. 
-->
