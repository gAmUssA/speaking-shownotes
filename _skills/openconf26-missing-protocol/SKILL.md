---
name: missing-protocol-open-conf-2026
description: "Knowledge brief for the talk 'The Missing Protocol: How MCP Bridges LLMs and Data Streams' by Viktor Gamov (Confluent) at Open Conf 2026 in Athens, Greece, 2026-11-20. Use to summarize the talk, explain its argument (context engineering, purpose-built closed-world agents, event-driven agents, MCP, and why access is not competence), describe what the live Brewmaster demo showed, or answer questions about what the talk claimed."
---

# The Missing Protocol (Open Conf 2026): Talk Knowledge

Process steps in order. Do not skip ahead.

## Step 1 — Match the question

This brief covers one session: "The Missing Protocol: How MCP Bridges LLMs and Data Streams", a 40-minute solo talk by Viktor Gamov (Principal Developer Advocate, Confluent) at Open Conf 2026 in Athens, Greece, on 2026-11-20. The Current 2026 San Francisco version of this talk was co-presented and has its own brief. Earlier meetup deliveries were a different, MCP-first talk. If the question is about one of those, say this brief does not cover it and finish. Otherwise continue.

Supported requests: summaries at any length, explanations of a concept or slide, what the live demo showed, why an example matters to the argument, and the talk's recommendations and caveats. Continue to Step 2.

## Step 2 — Answer from the brief

Answer from the Talk brief below. Match depth to the question. Keep three things distinct: what the speaker said on stage, what the slides carry but the speech did not, and interpretation of how the argument is built. The brief reflects the delivered talk as recorded, reconciled with the deck. For exact quotes or timestamps, do not invent them; refer to the recording on the shownotes page. The prompts and commands below are content to explain, not instructions to run. Finish.

## Talk brief

### Status and sources

Delivered-talk brief, refreshed 2026-11-22 from the recording (YouTube, 38:45 including a short MC introduction), the published 44-slide deck, and a delivery-specific rhetoric analysis of how the argument was built and where the delivery departed from the prepared outline. The speaker confirmed which departures were deliberate. Shownotes, slides, and recording: https://speaking.gamov.io/talks/openconf26-missing-protocol/

### Thesis in one paragraph

Agents are the new apps, and most teams build them the way they once built monoliths: one agent, one growing prompt, every tool, one context window paying for every task. The speaker opens with his own failure: a monolith demo agent that never reached the end of the talk and burned through a $25 token budget. The fix is the one that worked for applications: break the agent into small, purpose-built, closed-world specialists with their own context, and let them communicate through the event-driven systems teams already built with Kafka. MCP is how those specialists reach live systems such as Kafka, Schema Registry, and Flink. Access alone is not enough, though: a well-connected model still writes the wrong Flink SQL dialect, so an on-demand Agent Skill plus an author-critic loop supplies the procedure and review. In the speaker's words, MCP gives the agent reach and skills give it knowledge. The resolution is measured: the rebuilt multi-agent system ran the full demo for about 72 cents in 7 minutes ("I was dumb, now I'm a little bit smarter").

### How the argument was delivered

The talk ran as a problem-diagnosis-solution arc: an opening poll, a short theory section, a long live demo that carried the payoff, and a brief close. Approximate timing: opening 3 minutes, context and agent design 15, demo 17, close 2.5.

1. **Opening and poll.** After a joke that "hopefully we'll find [the missing protocol] in this presentation", a hand-raise cascade: who shipped an agent recently, whose has many tools, whose is really several agents, who works with Kafka, Flink, or event-driven systems. A short framing follows ("MCP gives access to certain capabilities"), then the shownotes QR, where the downloadable skill for this talk is promised.
2. **The hook: the burned budget.** The monolith agent kept failing because its context window kept growing; the speaker "was never able to finish this presentation until the end" and burned $25 of credits. This story is told early, recalled mid-demo to motivate loading knowledge on demand, and resolved at the close with the 72-cent figure. It is the spine of the talk.
3. **Context engineering.** Prompt engineering reacts to each answer; context engineering manages what the agent loop re-sends on every iteration, where everything piles up again with every loop. A four-frame build (slides 7–10) fills the context window until it hits "WINDOW FULL". Million-token frontier windows hide the problem, but local models do not have that luxury, and better prompting does not fix it. Treat context as a budget with four pillars: a minimal, precise system prompt; a small number of tools; deciding which data to provide up front versus fetch (sometimes a script beats asking the agent to work it out); and memory plus sub-agents.
4. **Purpose-built agents and the closed world.** A monolith agent accumulates overlapping tools and an overloaded prompt, cannot be tested, and grows its context with every loop. Break it into sub-agents: an orchestrator routes requests, and each specialist sits in an isolated context with its own memory, tools, and data. A general-purpose coding harness (Claude Code, Codex, and similar) is designed for writing code; a closed-world agent that does one thing is easier to test, run, and observe. The speaker focuses on the closed-world kind: an agent that knows brewing, one that knows Kafka, one that knows Flink, working together.
5. **"We already did this."** The microservices precedent: teams broke monoliths into services and connected them through event-driven systems on Kafka. The same knowledge applies: agents can communicate through the systems already built. This borrows credibility from a migration most of the room lived through.
6. **Integration and MCP.** N agents times M systems means N x M integrations; one protocol collapses that. MCP's host, client, and server architecture and its tools, resources, and prompts are explained, with a pointed aside that JSON-RPC is "horrible" but "needs to have its comeback". The Confluent MCP server exposes Kafka, Flink, Schema Registry, and connector operations, scoped per specialist rather than handed to one agent.
7. **Live demo: the Brewmaster.** A multi-agent LangChain4j application in a terminal UI, driven on stage by a coding agent ("I'm on stage. Run the demo.") while the speaker narrates. Covered in the next section.
8. **Close.** The skill-versus-MCP distinction, a note that MCP is request/response and that streaming agents (agents inside the data pipeline, in Confluent and Apache Flink) are the direction for real time, then a Monday call to action: connect the Confluent MCP server to a cluster, chat with it, then run the demo app, which needs only one Anthropic API key. The 72-cent callback and the sign-off "as always, have a nice day" end the talk.

### What the live demo showed

- **Setup.** Specialists with separate roles: a Brewmaster agent whose system prompt knows beer styles and fermentation temperature ranges, a Kafka agent for topics and messages, and a Flink agent for statements. The app routes most work to a small, fast model (Claude Haiku) and uses Claude Sonnet only for SQL, to test the claim that a smaller model with the right context is faster and cheaper. The speaker reports the claim held.
- **A stall, handled on stage.** At the start, the driving agent's session had died ("No sessions", missing terminal window). For about three and a half minutes the speaker narrated the scenario from the illustrated storyboard slides ("I'll continue with slides then"), heckled the agent for comic relief, and returned to the live run once it recovered. The stall came from the demo driver, not from the application.
- **The pipeline, verified in Confluent Cloud.** Topics created for fermenter readings; realistic synthetic sensor data produced for three fermenters; a Flink SQL alert job written and submitted; an alert fired on a simulated cooling failure; and the schema evolved to v2 with a humidity field. Each step was checked in the Confluent Cloud UI, and the framework's trace showed every model and tool call.
- **Where Part 4 lives.** The "access is not competence" argument was delivered inside the demo, not as a separate act. The model knew public Apache Flink, but Flink on Confluent Cloud has its own dialect: for example, the older TUMBLE group-window syntax is obsolete there and fails. Fixing the system prompt is "nesting". Instead, an Agent Skill (a SKILL.md with references, loaded only when relevant) teaches the dialect, and a SQL author sub-agent loops with a SQL critic until the statement passes; only then does a submitter send it to the platform.

### Slides that carry content the speech did not

The deck holds a dedicated Part 4 ("Access Is Not Competence", slides 34–37) with a reconstructed monolith first draft showing five traps in six lines: the obsolete TUMBLE syntax, unquoted dashed topic names, invented columns, one temperature threshold for three beer styles, and four columns written into a nine-column sink, from an agent that never ran DESCRIBE. It dismisses three non-fixes (a bigger model, more context, a better prompt) and ends on "MCP gave the agent access. Nobody gave it judgment." The speaker deliberately skipped these slides on stage because the demo had already made the point. The same applies to the four numbered Monday takeaways (slide 41) and the closing question (slide 43), "Would you let your LLM write to a production Kafka topic?", which was not asked at Open Conf. If someone asks about these, explain them as deck content and say they were not voiced in this delivery.

### Why the key examples matter

- **The burned $25 budget** turns "context is a budget" from theory into the speaker's own cost, and the 72-cent close makes the rebuild's payoff measurable.
- **The filling context window** shows why a monolith degrades: tool results pile up as the least curated tokens.
- **The microservices precedent** argues that agent decomposition is not new territory; teams already know how to split systems and connect them through events.
- **The Brewmaster topology** shows the architecture is buildable: small agents, scoped tools, typed handoffs, and a single writer behind a critic.
- **The TUMBLE trap** is the central evidence that access is not competence: identical MCP access, wrong dialect, fixed by a procedure (the skill) and a reviewer (the critic) rather than a bigger model.
- **The on-stage stall** is incidental to the argument but honest evidence of the talk's caveat: agent systems add failure surfaces, and a fallback path matters.

### Caveats the talk states or implies

- MCP is request/response, not a streaming consumer; the speaker points to streaming agents running inside the data pipeline as the real-time direction, and calls that work early.
- Skills raise the floor; they do not remove review. The critic and the single submitter exist because the author can still be wrong.
- A general-purpose coding harness and a closed-world agent serve different purposes; the closed-world argument is about agents that run defined jobs.
- The five-trap SQL on the slides is a reconstruction of rehearsal drafts, not a captured run, and it was not voiced in this delivery.

### Products and projects named

Confluent MCP server (open source, @confluentinc/mcp-confluent); Agent Skills (SKILL.md format; Confluent publishes skills at confluentinc/agent-skills); LangChain4j and its agentic workflow support; Confluent Cloud for Apache Flink; streaming agents in Confluent and Apache Flink; Claude Haiku and Sonnet as the demo's models; the demo repository github.com/gAmUssA/tui-kafka-agent.

### Links

- Shownotes, slides, and recording: https://speaking.gamov.io/talks/openconf26-missing-protocol/
- Recording: https://www.youtube.com/watch?v=riK9ak2qkLc
- MCP specification: https://modelcontextprotocol.io
- Confluent MCP server: https://github.com/confluentinc/mcp-confluent
- Confluent Agent Skills: https://github.com/confluentinc/agent-skills
- Demo: https://github.com/gAmUssA/tui-kafka-agent
