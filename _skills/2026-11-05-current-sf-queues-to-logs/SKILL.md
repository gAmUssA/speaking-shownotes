---
name: queues-to-logs-current-sf-2026
description: "Knowledge brief for Viktor Gamov's talk 'From Queues to Logs and Back Again' at Current 2026 San Francisco (2026-11-05, recorded), a repeat of his MQ Summit 2026 talk. Use to summarize the talk, explain its history-of-messaging argument (queues, Kafka's 2011 durable-log inversion, KRaft, tiered storage, share groups, Streamhouse, the log as AI-agent memory), or answer questions about what it claimed."
---

# From Queues to Logs and Back Again (Current 2026 SF): Talk Knowledge

Process steps in order. Do not skip ahead.

## Step 1 — Match the question

This brief covers "From Queues to Logs and Back Again" by Viktor Gamov (Principal Developer Advocate, Confluent, an IBM Company). It was a 45-minute introductory breakout at Current 2026 San Francisco on 2026-11-05, recorded at https://www.youtube.com/watch?v=JxQ8oDKoh9k. The recording runs about 38 minutes and ends at the sign-off; live Q&A filled the rest of the slot and was not recorded. The talk is a repeat of the deck first delivered at MQ Summit 2026 (2026-10-21, recorded), with one added slide on Streamhouse.

Questions about either delivery are in scope. For anything else, say this brief does not cover it and finish.

Supported requests:
- summaries
- explanations of an era or concept
- why an example or reference matters
- the talk's recommendation
- its caveats
- how the two deliveries differ

Continue to Step 2.

## Step 2 — Answer from the brief

Answer from the Talk brief below and match depth to the question. Keep three things apart: what the speaker claims, what the cited sources establish, and interpretation of how the argument is built.

The brief draws on the decks, the speaker notes, and delivery-specific rhetoric analyses of both recordings, reconciled with their transcripts. Quotes in it come from auto-captions and are lightly cleaned.

Some framing lines come from the slides and speaker notes rather than from either recording. These include the 3 AM outage, the N x M problem, "the same disease as a 2005 queue", and the share-group strawman's three counterexamples. Present them as the talk's material, not as spoken quotes. Never invent quotes or timestamps. For exact wording, refer to the recordings: San Francisco https://www.youtube.com/watch?v=JxQ8oDKoh9k, MQ Summit https://www.youtube.com/watch?v=MHv7YmdpkR0.

Finish.

## Talk brief

### Thesis

Messaging's history is a story of constraints falling away:
- Queues moved a message and forgot it, on purpose.
- Around 2011 Kafka inverted that: keep the message, make the log durable, and let consumers replay history. That inversion enabled stream processing and event sourcing, and it turned a messaging system into a company's source of truth.
- Today ZooKeeper is gone, cold storage is moving to object stores, and queue semantics are returning to Kafka through share groups. The field keeps re-deriving the same tradeoffs from different directions.

The payoff: this durable, replayable substrate is exactly what AI agents need for memory, audit, and replay. So the messaging layer, not a new bespoke store, is where agentic systems will live.

The frame is "capability, not allegiance": the queue camp and the log camp borrowed from each other, so tribal dogma is the wrong lens. The question the talk leaves is "Is your system willing to remember?"

### How the argument is built

The arc is chronological and circular. The title nods to Bilbo Baggins' "There and Back Again", and the end pays that off explicitly.

The visuals follow a cloaked traveller on a fantasy journey, with roads and stone bridges standing for the log. The palette moves from daylight (history) to twilight (agents) to sunset (close). Four section-divider slides mark the eras: the age of queues, 2011, now, and next.

1. **Opening.**
   - After a short room warm-up, the hook is a personal story from his integration-consulting days. To test against a queue he had to schedule a phone call with a team in India so they would fire test messages. He then wrote a small app to capture and replay them: his "first steps to integration testing."
   - Show-of-hands polls ask about messaging people and about who is building agents ("hold that thought", paid off in the agent section).
   - He plants a promise to tell, later, how IBM and one person in the room brought him to streaming.
   - The bio states the bias up front: Confluent developer advocate, Kafka in Action co-author, "any problem can be solved with Kafka. I mean, not in life."
2. **The age of queues.**
   - A broker's one job was to move a message and forget it, by design (fire and forget, ack, topics).
   - Point-to-point integration multiplies into the N x M pipeline problem LinkedIn hit, which Jay Kreps described in "The Log" (2013).
   - The cost: every new consumer means re-plumbing, and at 3 AM the messages that would explain an outage are already gone.
3. **2011: Kafka inverts the model.**
   - The core move: keep the message, make the log durable, and let consumers replay. The talk presents this as an engineering idea any durable-log system can implement, not a brand. It credits Jay Kreps and Jun Rao, noting Jun's earlier database work at IBM.
   - Consequences:
     - stream processing and the lambda architecture, with LinkedIn's "who viewed my profile" as an example;
     - event sourcing, where state is the history of events rather than an overwritten row;
     - CQRS;
     - stream-table duality;
     - the log as source of truth;
     - replay as a debugging superpower ("what did the system actually see, in order?").
   - In San Francisco, event sourcing got its own beat through an analogy. Say something to your significant other that you shouldn't have, and you cannot change it: "this event already delivered to the system." All you can do is send another event that moves the other side's state "from angry to less angry."
   - A recurring workshop moment compresses the mental shift. Someone raised on queues asks "how do I get the data again?" The answer: "you never lost it, reset your offset."
4. **Now.**
   - ZooKeeper is gone: Kafka 4.0 (March 18, 2025) is KRaft-only, so the coordination layer is absorbed into the system. ZooKeeper still gets a fair word: hard to operate, but a great system.
   - The talk corrects a sloppy claim about tiered storage. It moves cold data to object stores while the hot write path stays on broker disk, which makes long retention cheap.
   - Queues are back: share groups (KIP-932) bring queue semantics to Kafka on top of a log. He calls this "the circle closed."
   - A comparison of RabbitMQ, Kafka, NATS JetStream and Pulsar makes the convergence visible: everyone built a log, logs grew queues, and queues grew logs. Per-message routing, dead-letter queues and priorities still favour the queue side.
   - The objection "isn't this just reinventing queues?" gets the answer: same vocabulary (queue, consumer, ack), different durability and replay guarantees underneath.
   - The IBM beat: the slide notes IBM's acquisition of Confluent (about $11 billion, announced December 2025, closed March 2026), whose announcement cited AI agents' need for connected, trusted real-time data. In San Francisco the beat was carried by the planted story. In 2017, choosing between joining Docker or Confluent, a veteran friend told him to watch Confluent; "10 years after, here we are."
   - A deliberate strawman follows: "once a message is consumed, nobody will ever need it again." It is wrong three ways: replay after a bug, new consumers wanting history, and share-group acks that leave the record in the log.
5. **Next: the log as agent memory.**
   - Agents may need your data, and they also need a durable substrate to communicate over and to carry state. Agent frameworks are rebuilding messaging on their own: LangGraph and Agent Core durable execution, Google Pregel-style state updates, and AutoGen's actor model.
   - **Streamhouse** (new in San Francisco): Confluent's "new house" on the log. Stream processing materializes the source of truth into fast-to-query tables. Agents consume these over MCP endpoints, and Tableflow exposes the same data to the lakehouse.
   - Evidence: a UC Berkeley study of multi-agent execution traces (the MAST taxonomy) attributes most failures (roughly three-quarters, on the slide) to specification and coordination rather than model capability. Spoken: "the problem is communication." That is the kind of problem the messaging community has worked on for decades.
   - A forward-looking aside, labelled as his expectation: event-driven patterns will spread through the AI ecosystem soon. He cites events emerging in the MCP specification, which he described as not fully baked yet.
   - An agent without a durable, replayable record has "the same disease as a 2005 queue": it forgets, cannot be audited, and cannot replay what led to a decision.
6. **Close.**
   - The question: is your system willing to remember? Queues forgot on purpose, and Kafka made forgetting optional.
   - A system that remembers can also be observed. You get lineage, and after a failure you can see which agent called which system.
   - The practical ask: when a new project proposes a new fancy database or memory store for agents, ask whether the Kafka or streaming platform you already run would serve.
   - The return: "There and Back Again", framed as the hero's journey. "We're back where we started, but we came transformed", with the hope that the audience leaves a little transformed too.
   - Signature sign-off: "As always, have a nice day."

### Why the key examples matter

- **The phone-call story** makes "constraints falling away" personal. Testing once required coordinating people across continents. The close returns to the start to show how far the tooling moved.
- **The N x M problem and Kreps' essay** ground the 2011 inversion in real operational pain rather than a product pitch.
- **"How do I get the data again?"** compresses the whole queue-to-log mental shift into one moment.
- **The significant-other analogy** makes event sourcing intuitive: what was said is delivered and immutable, and you can only respond with new events.
- **Share groups and the comparison** carry the "capability, not allegiance" point. The camps converged, so choose by guarantees.
- **The 2017 career story** turns the IBM acquisition from a corporate fact into the payoff of an opening promise. It also explains why the speaker tells this history.
- **Streamhouse** shows the thesis as a shipping product: the same log, materialized and served to agents. Note that it is the speaker's employer's product.
- **The MAST study** bridges messaging history and agents. Coordination, not model quality, is where multi-agent systems fail.

### Caveats the talk states

- "It depends" is meant literally. Queues still win for per-message routing, dead-letter handling and priorities, and Kafka is ruled out for some workloads such as high-frequency trading.
- Tiered storage is not "storage moved to object stores"; the hot path stays local.
- The speaker states his bias (Confluent, Kafka author), says he doesn't need to hype Kafka, and tells the audience not to trust anyone who says one system is best for everything.
- The MCP-events prediction is his expectation, not an established fact.

### How the two deliveries differ

At MQ Summit (36 slides), the speaker passed over three slides without narrating them, by drift: Event Sourcing, the comparison table, and the "completely wrong claim" strawman. He also improvised asides on Avro and a ZooKeeper defence, and the close had one ask but no picture of the future.

In San Francisco (37 slides, a longer slot):
- All three skipped slides were narrated. Event Sourcing got the significant-other analogy, the table was summarized as convergence, and the strawman was voiced.
- The Streamhouse slide was added to the agent section.
- The IBM beat became the 2017 plant-and-payoff story.
- The close added the benefit picture (observability, lineage, which agent called which system) and the hero's-journey frame.
- Avro did not come up; the ZooKeeper defence stayed.

### Sources

- Shownotes: https://speaking.gamov.io/talks/2026-11-05-current-sf-queues-to-logs/
- Current 2026 San Francisco recording: https://www.youtube.com/watch?v=JxQ8oDKoh9k
- MQ Summit 2026 recording: https://www.youtube.com/watch?v=MHv7YmdpkR0
- Jay Kreps, "The Log" (2013): https://web.archive.org/web/20260612105408/https://engineering.linkedin.com/distributed-systems/log-what-every-software-engineer-should-know-about-real-time-datas-unifying
- Kafka 4.0 release (KRaft only): https://kafka.apache.org/blog/2025/03/18/apache-kafka-4.0.0-release-announcement/
- KIP-932 share groups: https://cwiki.apache.org/confluence/display/KAFKA/KIP-932%3A+Queues+for+Kafka
- KIP-405 tiered storage: https://cwiki.apache.org/confluence/display/KAFKA/KIP-405%3A+Kafka+Tiered+Storage
- MAST, "Why Do Multi-Agent LLM Systems Fail?": https://arxiv.org/abs/2503.13657
