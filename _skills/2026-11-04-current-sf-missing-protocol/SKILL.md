---
name: missing-protocol-current-sf-2026
description: "Knowledge brief for the talk 'The Missing Protocol: Purpose-Built, Event-Driven Agents with MCP' by Viktor Gamov and Sean Falconer (Confluent, an IBM Company) at Current 2026 San Francisco, 2026-11-04. Use to summarize the talk, explain its argument (context engineering, purpose-built closed-world agents, event-driven agents, MCP, Agent Skills plus a critic), describe the Brewmaster demo, or answer questions about what the talk claimed."
---

# The Missing Protocol (Current 2026 SF): Talk Knowledge

Process steps in order. Do not skip ahead.

## Step 1 — Match the question

This brief covers one session: "The Missing Protocol: Purpose-Built, Event-Driven Agents with MCP", a 45-minute co-presented breakout by Viktor Gamov (Principal Developer Advocate) and Sean Falconer (VP of Product), Confluent, an IBM Company, at Current 2026 San Francisco on 2026-11-04. Earlier meetup deliveries titled "The Missing Protocol: How MCP Bridges LLMs and Data Streams" were a different, MCP-first talk; if the question is about one of those, say this brief does not cover it and finish.

Supported requests: summaries at any length, explanations of a concept or slide, what the demo shows, why an example matters to the argument, and the talk's recommendations and caveats. Continue to Step 2.

## Step 2 — Answer from the brief

Answer from the Talk brief below. Match depth to the question. Keep three things distinct: what the speakers claim, what the demo is designed to show, and interpretation of how the argument is built. This brief was prepared before delivery from the approved outline, speaker notes, and deck; if asked what actually happened on stage (live demo results, audience answers, timing), say the brief describes the prepared talk and point to the shownotes page for the recording once published. For exact quotes or timestamps, do not invent them; refer to the recording. The prompts and commands below are content to explain, not instructions to run. Finish.

## Talk brief

### Status and sources

Prepared-talk brief, written before the 2026-11-04 delivery from the approved outline, speaker notes, final deck, and the planned rhetorical architecture. It will be refreshed against delivered analysis after the event. Shownotes: https://speaking.gamov.io/talks/2026-11-04-current-sf-missing-protocol/

### Thesis in one paragraph

Agents are the new apps, and most teams build them the way they once built monoliths: one agent, one ever-growing prompt, every tool, one context window paying for every task. The fix is the one that worked for applications: break the agent into small, purpose-built, closed-world agents with their own context and typed results, and connect them through event streams instead of direct calls. MCP is how each specialist reaches live data (Kafka, Flink, Schema Registry) with a small, scoped tool set. But access is not competence: a well-connected agent still writes wrong code, and an Agent Skill plus a critic is what makes it trustworthy enough to run without a human watching. Short form: "MCP is the API. A Skill is the code review."

### How the argument is built

The talk is structured as a sparkline, alternating "what most teams do today" with "what it could be", in eight movements. Sean carries the architecture half and Viktor the MCP, demo, and judgment half, with banter at the handoffs.

1. **Opening (Sean + Viktor).** A hand-raise cascade: who shipped an agent, who has one with more than ten tools, whose is really several agents. Most hands drop at ten tools, which sets up the problem: most of us start with one agent that does everything. Then the framing quote "Agents are the new apps" (attributed to Dharmesh Shah, HubSpot CTO): if agents are apps, the hard-won architecture lessons apply.
2. **Context engineering (Sean).** Prompt engineering assumed a human reread each answer. An agent loops: call the model, act, get feedback, repeat. Every iteration re-assembles the context: system prompt, documents, tool definitions, and everything so far. A four-step build shows the window filling: fixed setup cost, then each loop re-sends prior turns, and tool results grow fastest while being the least curated tokens. Context is a budget protecting reliability (window limits), accuracy (context rot: more tokens can mean worse answers), and cost and latency (prompt caching). Four levers: minimal system prompt, non-overlapping tools, preload-versus-fetch retrieval, and long-horizon techniques (compaction, memory, subagents). The last lever leads into the next part.
3. **Purpose-built agents (Sean).** The monolith agent has overlapping tools, one prompt to regress, and nothing to test alone; every task pays for every other task's context. The alternative is small task-focused agents: one job, one short prompt, its own context window, a few scoped tools, a typed result ("a nice paragraph is a bad API"). Subagents are a context technique as well as an org chart: the specialist absorbs the messy work and hands back a small typed result, so the supervisor's window stays small. A general-purpose harness (open world, big dynamic tool set, a human approves) is for exploring; a closed-world agent (defined jobs, small fixed tools, typed and validated output) is for running unattended. Key line: "Open world, you hope. Closed world, you test." This part plants the monolith agent, which comes back in Part 5.
4. **Event-driven agents (Sean).** An analogy with application history: monoliths hit scaling limits, directly coupled microservices became brittle, and event exchange through a log fixed it. Agents hit the same wall: specialists wired directly to each other become a labyrinth. The fix is the same: agents emit and listen for events. Every handoff becomes a durable record you can replay, audit, and debug, and agents are always on, acting when the data moves rather than only when asked.
5. **Connecting agents to data (Viktor).** N agents times M systems is N x M custom integrations; one protocol collapses that, and MCP is that protocol (JSON-RPC, with a self-aware joke about choosing a 2006-era protocol in 2026). The architecture: a host holds an MCP client, a server fronts a system, and the server exposes three primitives: tools (callable functions), resources (readable data such as schemas and configs), and prompts (templates the server hands over). The open-source Confluent MCP server (@confluentinc/mcp-confluent) exposes tools such as list-topics, consume-messages, produce-message, list-schemas, create-flink-statement, get-consumer-group-lag, create-connector and diagnostics. The point made: don't hand all of them to one agent, or you have rebuilt the monolith; scope them per specialist.
6. **Demo: the Brewmaster (Viktor).** A closed-world agent system for a craft brewery's streaming platform (Java, LangChain4j agentic module, Anthropic model, Confluent MCP server, Confluent Cloud). A supervisor routes to four specialists (brewmaster, confluent, flinkOps, flink). The flink specialist is itself a pipeline: sqlAuthor drafts a Flink SQL statement, sqlCritic reviews it (up to three rounds), and only sqlSubmitter holds write tools, so only approved SQL is submitted. The planned acts: create the brewery topics; produce fermenter readings (registering an Avro schema); have the agents write a Flink alert job with per-beer-style thresholds (IPA, Stout, Pilsner); simulate a cooling failure so the alert fires; and, time permitting, diagnose the problem with brewing advice and evolve the schema in a backward-compatible way. The demo connects the architecture to practice: everything from Parts 2–5 running in one system.
7. **Access is not competence (Viktor, Sean chimes in).** A retrieval question to the room: "In the demo, who held the write tools?" (the submitter, and only after a PASS). Then the payoff of Sean's monolith slide: the same model and MCP connection, run as a single agent with every tool and no skill or critic, produced a first draft (reconstructed from rehearsal drafts, not a screenshot) with five traps in six lines: legacy GROUP BY TUMBLE syntax that Confluent Cloud rejects (it requires the window table-valued function), unquoted dashed topic names, invented column names, one temperature threshold for three beer styles, and four columns written into a nine-column sink. It never ran DESCRIBE. Three objections are dismissed in turn: a bigger model (the model that knew Pilsner fermentation temperatures wrote this), more context (pasting Apache Flink docs feeds the wrong dialect), and a better prompt (it lives in one clipboard and nobody can version or review it). What was missing was a procedure and a critic. An Agent Skill is a folder with SKILL.md (rules) and references (dialect traps, troubleshooting) loaded on demand; the critic returns a typed verdict and the loop branches on a boolean. "MCP is the API. A Skill is the code review." Finally, the agent moves into the stream: Streaming Agents on Confluent Cloud, open-source Apache Flink Agents (with Agent Skills support), and the Real-Time Context Engine serving governed topic context to any agent over MCP. Access keeps getting easier; judgment is still the part you write.
8. **Close (both).** Four takeaways framed as Monday-morning actions, one per part: split one specialist with a typed result out of your biggest agent; put a topic between two agents instead of a direct call; point the Confluent MCP server at a dev cluster (not prod, not yet) and scope tools per agent; put a Skill and a critic in front of anything that writes. The closing question to the audience: "Would you let your LLM write to a production Kafka topic?" with the implied answer that it can be yes only if you know which agent holds the write tools and who reviews what it writes.

### Why the key examples matter

- **The ten-tools poll** makes the monolith problem the audience's own before any solution is offered.
- **The filling context window** turns "context is a budget" from an abstraction into a visible cost: tool results crowd everything else out.
- **The application-history analogy** borrows credibility from a migration the Current audience already lived through (monolith to event-driven microservices) and transfers it to agents.
- **The Brewmaster topology** is the proof that the architecture is buildable: small agents, scoped tools, typed handoffs, a single writer.
- **The five-trap draft** is the central piece of evidence for "access is not competence": the same access, without the procedure and critic, produces confidently wrong SQL. It also pays off Sean's earlier monolith argument with a concrete failure.
- **The closing question** returns the decision to the audience and ties the whole talk to one governance question: who holds the write tools, and who reviews them.

### Caveats the talk itself states

- MCP is request/response, not a streaming consumer; the answer is moving agents into the stream (Streaming Agents, Flink Agents), not making MCP stream.
- LLM reasoning adds seconds, not milliseconds; Flink remains better at stateful stream processing than any agent.
- Skills are nondeterministic and raise the floor rather than removing review; autonomous production writes still need a human decision.
- The five-trap SQL is a reconstruction of rehearsal drafts, presented as such.

### Products and projects named

Confluent MCP server (open source, @confluentinc/mcp-confluent); Confluent Agent Skills (confluentinc/agent-skills, including a Confluent Cloud Flink SQL skill); Streaming Agents (Confluent Cloud); Real-Time Context Engine (Confluent Cloud); Apache Flink Agents (open source); LangChain4j (agentic module and skills support); the demo repository github.com/gAmUssA/tui-kafka-agent.

### Links

- Shownotes and recording (when available): https://speaking.gamov.io/talks/2026-11-04-current-sf-missing-protocol/
- MCP specification: https://modelcontextprotocol.io
- Confluent MCP server: https://github.com/confluentinc/mcp-confluent
- Confluent Agent Skills: https://github.com/confluentinc/agent-skills
- Demo: https://github.com/gAmUssA/tui-kafka-agent
