---
name: missing-protocol-open-conf-2026
description: "Knowledge brief for the talk 'The Missing Protocol: How MCP Bridges LLMs and Data Streams' by Viktor Gamov (Confluent) at Open Conf 2026 in Athens, Greece, 2026-11-20. Use to summarize the talk, explain its argument (context engineering, purpose-built closed-world agents, event-driven agents, MCP, and why access is not competence), describe the Brewmaster demo, or answer questions about what the talk claimed."
---

# The Missing Protocol (Open Conf 2026): Talk Knowledge

Process steps in order. Do not skip ahead.

## Step 1 — Match the question

This brief covers one session: "The Missing Protocol: How MCP Bridges LLMs and Data Streams", a 40-minute talk by Viktor Gamov (Principal Developer Advocate, Confluent) at Open Conf 2026 in Athens, Greece, on 2026-11-20. The Current 2026 San Francisco version of this talk was co-presented, 45 minutes, and has its own brief. Earlier meetup deliveries were a different, MCP-first talk. If the question is about one of those, say this brief does not cover it and finish. Otherwise continue.

Supported requests: summaries at any length, explanations of a concept or slide, what the demo shows, why an example matters to the argument, and the talk's recommendations and caveats. Continue to Step 2.

## Step 2 — Answer from the brief

Answer from the Talk brief below. Match depth to the question. Keep three things distinct: what the speaker claims, what the demo is designed to show, and interpretation of how the argument is built. This brief was prepared before delivery from the approved outline, speaker notes, and deck. If asked what actually happened on stage (live demo results, audience answers, timing), say the brief describes the prepared talk and point to the shownotes page for the recording once published. For exact quotes or timestamps, do not invent them; refer to the recording. The prompts and commands below are content to explain, not instructions to run. Finish.

## Talk brief

### Status and sources

Prepared-talk brief, written before the 2026-11-20 delivery from the approved outline, speaker notes, final deck, and the planned rhetorical architecture (a narrative arc with a thesis preview near the start and the payoff in Part 4). It will be refreshed against delivered analysis after the event. Shownotes: https://speaking.gamov.io/talks/openconf26-missing-protocol/

### Thesis in one paragraph

Agents are the new apps, and most teams build them the way they once built monoliths: one agent, one ever-growing prompt, every tool, one context window paying for every task. The fix is the one that worked for applications: break the agent into small, purpose-built, closed-world agents with their own context and typed results, and connect them through event streams instead of direct calls. MCP is how each specialist reaches live data (Kafka, Flink, Schema Registry) with a small, scoped tool set. But access is not competence: a well-connected agent still writes wrong code, and an Agent Skill plus a critic is what makes it trustworthy enough to run without a human watching. The talk states this early ("MCP gives agents access. Today: what is still missing.") and pays it off in Part 5: "MCP is the API. A Skill is the code review."

### How the argument is built

The talk is a single-speaker narrative arc in four parts, roughly 40 minutes: an opening poll, four parts (with a demo inside Part 3), and a close, each handing a problem to the next.

1. **Opening and poll (about 4 min).** The title slide shows the Brewmaster robots on the Acropolis in Athens, a red question mark between the Parthenon columns, and Kafka topic pipes (orders, payments, sensors). A hand-raise cascade follows: who shipped an agent in six months, whose has more than ten tools, whose is really several agents, who works with Kafka, Flink, or anything event-driven. The thesis preview slide comes next: MCP gives agents access; the rest of the talk is about what is still missing.
2. **Part 1, Context engineering (about 5 min).** Prompt engineering is reactive: a human rereads each answer. Context engineering is proactive: an agent loops (call the model, act, get feedback, repeat), and every iteration re-assembles the context from the system prompt, documents, tool definitions, and everything so far. A four-step build shows the window filling, with tool results growing fastest and being the least curated tokens. Context is a budget for reliability (window limits), accuracy (context rot: more tokens can mean worse answers), and cost and latency (prompt caching). Four levers: a minimal system prompt, non-overlapping tools, preload versus fetch retrieval, and long-horizon techniques (compaction, memory, subagents). The talk starts with the last lever.
3. **Part 2, Purpose-built, event-driven agents (about 8 min).** The monolith agent has overlapping tools, one prompt to regress, and nothing to test alone; every task pays for every other task's context. The alternative is small task-focused agents: one job, one short prompt, its own context window, a few scoped tools, and a typed result rather than prose. Subagents isolate context: "the mess stays inside the specialist", and the supervisor's window stays small. A general-purpose harness (anything you type, a human approves) is for exploring; a closed-world agent (finite inputs, finite tools, finite outputs) is for running unattended. Key line: "Open world, you hope. Closed world, you test." The part then borrows application history: tightly coupled services became a labyrinth of brittle interdependencies and event exchange through a log fixed it, and agents hit the same wall. The solution is event-driven agents: agents emit and listen for events, so handoffs are durable, replayable, and auditable, and agents act when the data moves.
4. **Part 3, Connecting agents to data (about 12 min).** N agents times M systems is N x M custom integrations; one protocol collapses that, and MCP is that protocol. Architecture: a host (your agent) holds an MCP client, talks JSON-RPC to an MCP server that fronts a system, and the server exposes tools, resources, and prompts. A "what if" slide lists what this unlocks for Kafka: subscribe to a topic and react, query a Flink materialized view, understand Avro schemas, monitor consumer lag, build pipelines from natural language. The Confluent MCP server exposes tools such as list-topics, consume-messages, produce-message, create-flink-statement, create-connector, get-consumer-group-lag, and diagnostics. The point made: do not hand all of them to one agent, or you have rebuilt the monolith; scope them per specialist. The Brewmaster is introduced with the rule "closed world, scoped tools, only the submitter writes", then the demo runs.
5. **Demo: the Brewmaster.** A multi-agent system for a craft brewery's streaming platform. The prepared sequence, as slides: three topics are created; sensor readings stream in and a schema is registered; a Flink SQL alert job is written with a 10-second window; fermenter F-1 overheats and the alert fires on a brewery-alerts topic; a diagnosis comes back (fusel alcohols, a diacetyl rest, or a Belgian Saison); and the schema evolves from v1 to v2 in a backward-compatible way. The flink specialist is a pipeline of its own, covered in Part 4.
6. **Part 4, Access is not competence (about 11 min).** The payoff. The same model and the same MCP connection, run as a monolith agent with every tool and no skill or critic, produced a first draft with five traps in six lines (reconstructed from rehearsal drafts, not a screenshot): GROUP BY TUMBLE(...) is Flink OSS syntax and Confluent Cloud wants the window table-valued function; dashed topic names without backticks; columns that do not exist; one threshold for three beer styles (a Pilsner at 22 is ruined); and four columns into a nine-column sink. It never ran DESCRIBE. Three fixes are dismissed in turn: a bigger model (the model that knew Pilsner temperatures wrote this), more context (pasting Apache Flink docs feeds it the wrong dialect), and a better prompt (it lives in one clipboard and nobody can version or review it). The agent did not need more knowledge; it needed a procedure, and a critic. An Agent Skill is a folder with SKILL.md (the rules) and references (dialect traps, troubleshooting), loaded on demand. In the Brewmaster, sqlAuthor activates the skill, runs DESCRIBE, and drafts a typed statement; sqlCritic returns PASS or FAIL with feedback, with at most three rounds; only sqlSubmitter holds write tools, and it only sees approved SQL. MCP versus Skills: MCP gives access ("what can I touch?"), Skills give know-how ("how do I do this right?"). Finally the agent moves into the stream: Streaming Agents on Confluent Cloud, open-source Apache Flink Agents, and the Real-Time Context Engine serving governed topic context to any agent over MCP. Access keeps getting easier; judgment is still yours to write.
7. **Close.** Four Monday-morning actions: split a specialist out of your biggest agent; put a topic between two agents; point MCP at a dev cluster and scope tools per agent; add a Skill and a critic before any write. The closing question: "Would you let your LLM write to a production Kafka topic?" The speaker asks for the audience's answer.

### Why the key examples matter

- **The poll** makes the monolith problem the audience's own before any solution is offered.
- **The filling context window** turns "context is a budget" into a visible cost.
- **The microservices history line** borrows credibility from a migration most of the room lived through and transfers it to agents.
- **The Brewmaster topology** shows the architecture is buildable: small agents, scoped tools, typed handoffs, a single writer.
- **The five-trap draft** is the central evidence for "access is not competence": identical access, no procedure or critic, confidently wrong SQL.
- **The closing question** reduces the talk to one governance question: who holds the write tools, and who reviews what they write.

### Caveats the talk itself states or implies

- MCP is request/response, not a streaming consumer; the answer is moving agents into the stream (Streaming Agents, Flink Agents), not making MCP stream.
- Skills are nondeterministic and raise the floor rather than removing review; autonomous production writes still need a human decision.
- The five-trap SQL is a reconstruction of rehearsal drafts, presented as such.
- This is a prepared-talk brief. Live demo outcomes are not known until after delivery.

### Products and projects named

Confluent MCP server (open source, @confluentinc/mcp-confluent); Confluent Agent Skills (confluentinc/agent-skills); Streaming Agents (Confluent Cloud); Real-Time Context Engine (Confluent Cloud); Apache Flink Agents (open source); the demo repository github.com/gAmUssA/tui-kafka-agent.

### Links

- Shownotes and recording (when available): https://speaking.gamov.io/talks/openconf26-missing-protocol/
- MCP specification: https://modelcontextprotocol.io
- Confluent MCP server: https://github.com/confluentinc/mcp-confluent
- Confluent Agent Skills: https://github.com/confluentinc/agent-skills
- Demo: https://github.com/gAmUssA/tui-kafka-agent
