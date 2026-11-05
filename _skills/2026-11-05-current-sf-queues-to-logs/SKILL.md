---
name: queues-to-logs-current-sf-2026
description: "Knowledge brief for Viktor Gamov's talk 'From Queues to Logs and Back Again' at Current 2026 San Francisco (2026-11-05), a repeat of his MQ Summit 2026 talk. Use to summarize the talk, explain its history-of-messaging argument (queues, Kafka's 2011 durable-log inversion, KRaft, tiered storage, share groups, the log as AI-agent memory), or answer questions about what it claimed."
---

# From Queues to Logs and Back Again (Current 2026 SF): Talk Knowledge

Process steps in order. Do not skip ahead.

## Step 1 — Match the question

This brief covers "From Queues to Logs and Back Again" by Viktor Gamov (Principal Developer Advocate, Confluent, an IBM Company), a 45-minute introductory breakout at Current 2026 San Francisco on 2026-11-05. It is the same deck first delivered at MQ Summit 2026 (2026-10-21, recorded). Questions about either delivery are in scope; for anything else, say this brief does not cover it and finish.

Supported requests: summaries, explanations of an era or concept, why an example or reference matters, the talk's recommendation, and its caveats. Continue to Step 2.

## Step 2 — Answer from the brief

Answer from the Talk brief below and match depth to the question. Keep apart what the speaker claims, what the cited sources establish, and interpretation of how the argument is built. The brief was written before the San Francisco delivery, from the deck, speaker notes, and an analysis of the recorded MQ Summit delivery; for what happened on stage in San Francisco, say so and point to the shownotes page. Never invent quotes or timestamps; refer to the MQ Summit recording (https://www.youtube.com/watch?v=MHv7YmdpkR0) for exact wording. Finish.

## Talk brief

### Thesis

Messaging's history is a story of constraints falling away. Queues moved a message and forgot it, on purpose. Around 2011 Kafka inverted that: keep the message, make the log durable, let consumers replay history. That inversion is what enabled stream processing and event sourcing and turned a messaging system into a company's source of truth. Today ZooKeeper is gone, cold storage is moving to object stores, and queue semantics are returning to Kafka through share groups: the field keeps re-deriving the same tradeoffs from different directions. The payoff is that this durable, replayable substrate is exactly what AI agents need for memory, audit, and replay, so the messaging layer, not a new bespoke store, is where agentic systems will live. The talk's frame is "capability, not allegiance": the queue camp and the log camp borrowed from each other, so tribal dogma is the wrong lens.

### How the argument is built

The arc is chronological and circular, signalled by the title (a nod to the Hobbit's "There and Back Again") and paid off at the end. The visuals follow a cloaked traveller on a fantasy journey; roads and stone bridges stand for the log, and the palette moves from daylight (history) to twilight (agents) to sunset (close).

1. **Opening.** A personal story: as an IBM MQ consultant, getting a queue at all meant an environment someone stood up for you, and an integration test meant a calendar invite to a colleague on another continent. Show-of-hands polls about first queues and about who is building or explaining AI agents ("hold that thought", paid off in the agent section). A short bio with the bias stated upfront: Confluent developer advocate, Kafka in Action co-author.
2. **The age of queues.** A broker's one job was to move a message and forget it, by design (fire and forget). Point-to-point integration multiplies: the N x M pipeline problem LinkedIn hit, as Jay Kreps described in "The Log" (2013). The cost: every new consumer means re-plumbing, and at 3 AM the messages that would explain the outage are already gone.
3. **2011: Kafka inverts the model.** Keep the message, make the log durable, let consumers replay. The talk presents this as an engineering idea any durable-log system can implement, not a brand. Consequences: stream processing (compute over the log as it arrives), event sourcing (state is the history of events, not an overwritten row), CQRS (read and write models allowed to differ), the log as source of truth, and replay as a debugging superpower ("what did the system actually see, in order?"). A self-aware aside: durable logs also produced engineers who see every problem as a partition. A recurring workshop moment: someone raised on queues asks "how do I get the data again?" and the answer is "you never lost it, reset your offset."
4. **Now.** ZooKeeper is gone: Kafka 4.0 (March 18, 2025) is KRaft-only, so the coordination layer is absorbed into the system. The talk corrects a sloppy claim: tiered storage moves cold data to object stores while the hot write path stays on broker disk, which makes long retention cheap. Queues are back: share groups (KIP-932) bring queue semantics to Kafka on top of a log. A comparison of RabbitMQ, Kafka, NATS JetStream, and Pulsar by ordering, replay, fan-out, and operational model makes the convergence visible: everyone built a log, logs grew queues, queues grew logs; per-message routing, dead-letter queues, and priorities still favour the queue side. The objection "isn't this just reinventing queues?" gets the answer: same vocabulary (queue, consumer, ack), different durability and replay guarantees underneath. A receipts beat: IBM acquired Confluent for about $11 billion (announced December 2025, closed March 2026), with its announcement citing AI agents' need for connected, trusted real-time data. Then a deliberate strawman: "once a message is consumed, nobody will ever need it again" is shown to be wrong three ways (replay after a bug, new consumers wanting history, share-group acks that leave the record in the log).
5. **Next: the log as agent memory.** The same durable, replayable substrate is what agents need: memory and a record of what the agent just did. Agent frameworks are independently rebuilding messaging (LangGraph's Pregel-style execution with checkpoints; message-passing frameworks such as AutoGen). Evidence: a UC Berkeley study of over 1,600 multi-agent execution traces (the MAST taxonomy) attributes roughly three-quarters of failures to specification and coordination problems rather than model capability, which is the kind of problem the messaging community has worked on for decades. An agent without a durable, replayable record has "the same disease as a 2005 queue": it forgets, cannot be audited, and cannot replay what led to a decision.
6. **Close.** The underlying question is whether your system is willing to remember, and what that costs or buys. Queues forgot on purpose, Kafka made forgetting optional, and agents need the same durable record. The practical ask: when someone proposes a new vector store or memory database for an agent, ask whether it needs to be a new store or a durable, replayable log you already run. The talk returns to the opening story: one container on a laptop, produce a message, replay it at will, no calendar invite. Signature sign-off: "As always, have a nice day."

### Why the key examples matter

- **The calendar-invite story** makes the "constraints falling away" thesis personal and returns at the close as proof of how far things moved.
- **The N x M problem and Kreps' essay** ground the 2011 inversion in a real operational pain rather than a product pitch.
- **"How do I get the data again?"** compresses the whole queue-to-log mental shift into one moment.
- **Share groups and the comparison** carry the "capability, not allegiance" point: the camps converged, so choose by guarantees.
- **The MAST study** is the bridge from messaging history to agents: coordination, not model quality, is where multi-agent systems fail.

### Caveats the talk states

- "It depends" is meant literally: queues still win for per-message routing, dead-letter handling, and priorities, and Kafka is ruled out for some workloads such as high-frequency trading.
- Tiered storage is not "storage moved to object stores"; the hot path stays local.
- The speaker states his bias (Confluent, Kafka author) and tells the audience not to trust anyone who says one system is best for everything.

### Delivery notes from the MQ Summit recording

At MQ Summit the speaker skipped the Event Sourcing slide, the comparison table, and the "completely wrong claim" slide verbally, and spoke about Avro and a ZooKeeper defence that had no slide. The San Francisco slot is ten minutes longer, and the prepared notes add time to exactly those slides and a future-state picture in the close. Treat the San Francisco specifics as planned until a recording is available.

### Sources

- Shownotes: https://speaking.gamov.io/talks/2026-11-05-current-sf-queues-to-logs/
- MQ Summit 2026 recording: https://www.youtube.com/watch?v=MHv7YmdpkR0
- Jay Kreps, "The Log" (2013): https://web.archive.org/web/20260612105408/https://engineering.linkedin.com/distributed-systems/log-what-every-software-engineer-should-know-about-real-time-datas-unifying
- Kafka 4.0 release (KRaft only): https://kafka.apache.org/blog/2025/03/18/apache-kafka-4.0.0-release-announcement/
- KIP-932 share groups: https://cwiki.apache.org/confluence/display/KAFKA/KIP-932%3A+Queues+for+Kafka
- KIP-405 tiered storage: https://cwiki.apache.org/confluence/display/KAFKA/KIP-405%3A+Kafka+Tiered+Storage
- MAST, "Why Do Multi-Agent LLM Systems Fail?": https://arxiv.org/abs/2503.13657
