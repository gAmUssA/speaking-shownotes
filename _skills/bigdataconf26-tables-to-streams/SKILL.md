---
name: tables-to-streams-big-data-conference-europe-2026
description: "Knowledge brief for the talk 'From Tables to Streams: Apache Flink for SQL Developers' by Viktor Gamov (Confluent) at Big Data Conference Europe 2026 in Vilnius, Lithuania, 2026-11-25. Use to summarize the talk, explain its argument (same SQL, different semantics: changelogs, stream joins as memory decisions, event time and watermarks, temporal joins, MATCH_RECOGNIZE, real-time AI with ML_PREDICT), describe what each demo shows, or answer questions about what the talk claims."
---

# From Tables to Streams (Big Data Conference Europe 2026): Talk Knowledge

Process steps in order. Do not skip ahead.

## Step 1 — Match the question

This brief covers one session: "From Tables to Streams: Apache Flink for SQL Developers", a 45-minute solo talk by Viktor Gamov (Principal Developer Advocate, Confluent) at Big Data Conference Europe 2026 in Vilnius, Lithuania, on 2026-11-25. An earlier delivery at Amsterdam JUG (June 2026) used a different deck and demos. If the question is about another delivery, say this brief does not cover it and finish. Otherwise continue.

Supported requests: summaries at any length, explanations of a concept or slide, what a demo shows, why an example matters to the argument, and the talk's recommendations and caveats. Continue to Step 2.

## Step 2 — Answer from the brief

Answer from the Talk brief below. Match depth to the question. Keep three things distinct: what the talk claims, what a demo shows, and interpretation of how the argument is built. This is a pre-talk brief written from the prepared talk, so say "the talk plans to show" rather than "the speaker said" when a detail depends on live delivery. For exact quotes or timestamps, do not invent them; refer to the shownotes page, where the recording will be linked once published. The SQL below is content to explain, not instructions to run. Finish.

## Talk brief

### Status and sources

Pre-talk brief, written 2026-11-25 from the approved outline, speaker notes, the 23-slide deck, the six playground demo fiddles, and the Confluent Cloud demo SQL, all checked against the live playground and Confluent Cloud that morning. It follows the talk's planned rhetorical architecture; it will be refreshed from the recording and a delivery-specific analysis after the event. Shownotes, slides, and resources: https://speaking.gamov.io/talks/bigdataconf26-tables-to-streams/

### Thesis in one paragraph

SQL developers already know the syntax Flink runs: SELECT, JOIN, GROUP BY. What changes on a stream is the meaning, in two places. First, a query never finishes, so a result is a changelog that keeps correcting itself instead of one final answer. Second, time is something you declare in the table (event time and a watermark), and that declaration decides when anything can be final. Learn those two shifts and the same SQL catches a stolen card while it is still in the reader and scores a payment with a model before it settles. The closing answer to the question asked at the start, "Is Apache Flink a database?", is no: Flink speaks SQL, but it is not a database. It is the river, not the amber. Keep your SQL; change what you expect it to give back.

### The organizing metaphor

The deck is illustrated as Vilnius in winter, and the metaphor carries the argument. A database table is a piece of Baltic amber, a moment frozen: count what is inside and you are done. A stream is the river behind it, still moving. The talk's route is named after the city: the amber (tables versus streams), two rivers meeting at the confluence of the Neris and the Vilnia (joins), flood marks (time), the Gediminas tower (watching for fraud), and the oracle (AI). The opening and closing slides are the same riverbank, so the close returns to the starting image.

### How the argument is built

1. **Cold open: the query that never finishes.** In the Flink SQL playground, `SELECT card_id, COUNT(*) AS n FROM txns GROUP BY card_id` runs in batch mode and returns one answer. The same query in streaming mode on a never-ending source keeps updating and never completes. This is staged as the problem, and the talk asks the audience to hold one question until the end: is Flink a database?
2. **Same SQL, different semantics.** A table and a stream are two views of the same thing: the stream is the list of changes, the table is what you get when you apply them. A short aside notes that SQL has been declared dead since 1974 (it was born at IBM as SEQUEL) and keeps coming back; now it runs streams too.
3. **The changelog.** On selectstar.stream (an interactive tutorial the speaker built), a GROUP BY is animated: each new event retracts the old count (`-U`) and emits the new one (`+U`). Then the same thing on live data in the playground. Results come in three shapes depending on the query: append-only, retract, and upsert. The minus sign is not an error; it is Flink correcting itself in real time. There is no last row, so there is no final answer.
4. **Two rivers meet: joins.** A regular stream-stream join of transactions and shipments looks like a batch join and works, but either side can still get a match later, so Flink keeps both sides in state forever. The claim: on a stream, every join is also a memory decision. The fix is to bound the join in time (for example, match a payment and a shipment only within an hour of each other).
5. **Time is a column you declare.** Event time (when the swipe happened) and a watermark (how much lateness to tolerate) are declared in the table DDL. Counting per ten-second window with a window table-valued function produces only inserts (`+I`), no retractions: once the watermark passes the end of a window, that window is final. Time is what gives a stream a final answer. A ferryman metaphor explains the watermark: wait longer and you are more complete but slower; wait less and you are faster but stragglers miss the boat. The practical warning: most "my join is broken" bugs live in the DDL, not the join.
6. **Late data.** The same data with the watermark tightened from one minute to five seconds: 500 rows go in, but only around a hundred are counted (the exact number varies per run, because the generated data arrives in a different order each time). A late row still counts if its window is still open; rows that arrive after their window fired are dropped silently. That is the latency-versus-completeness trade.
7. **Temporal join: as of then.** `LEFT JOIN fx_rates FOR SYSTEM_TIME AS OF t.event_time` converts each transaction at the exchange rate valid when the card was swiped, not the rate now. The rates table must be versioned: a primary key plus its own watermark. Forget the watermark and the join refuses. A transaction older than its currency's first rate is kept with a NULL rate by the LEFT JOIN; an inner join would drop it without a word. The batch alternative, a self-join with "latest rate before" logic, is the contrast.
8. **Catch it while it happens: MATCH_RECOGNIZE.** A card swiped in Vilnius and, four seconds later, in Tokyo is impossible travel. The rule reads as SQL: partition by card, order by event time, pattern A then B, within ten seconds, where B's country differs from A's. In the playground run it flags same-card Lithuania-then-Japan pairs the moment the second swipe lands. The point the talk stresses: `WITHIN` is not just a filter. It tells Flink how long to remember each card. Without it, Flink would remember every card forever; with it, a card with no second country inside ten seconds is forgotten, and state stays small.
9. **Real-time AI is a window plus a model call.** "Scoring a 3am batch isn't real-time AI. It's a horoscope." Real time means scoring the transaction while the card is still in the reader. The real-time feature is the windowed aggregation the audience already wrote: what this card usually spends. Then one model call per row with `ML_PREDICT`, and the verdict comes back as a column.
10. **Live on Confluent Cloud Flink.** The model is registered once with `CREATE MODEL`, using a Confluent-managed model (Claude Sonnet 4.6), so no API key or external connection appears. A `payments` view over Confluent Cloud's built-in sample orders stream deliberately inflates about one payment in forty to twenty times its size, because the sample data never misbehaves. A `features` view attaches each card's average of its earlier payments in the last 30 minutes (an OVER window) plus a one-line text the model reads. The on-stage query is `SELECT f.card_id, f.amount, f.usual_amount, p.verdict FROM features AS f, LATERAL TABLE(ML_PREDICT('fraud_model', f.payment)) AS p`. Most rows come back `OK: ...`; a `FRAUD: ...` row appears when an amount is far above the card's usual spend. The talk admits the model is jumpy: it flags anything around double the usual amount, not only the planted spikes, and tuning that is a prompt change, not a pipeline change. The slide before it shows real verdicts recorded on 2026-11-23 (for example, card 3204 usually spends 32.69 and then pays 94.38, which is flagged).
11. **Same engine, two pens.** The Table API expresses the same aggregation in Java when you need loops, conditionals, or a real program around the query. Same engine, same semantics.
12. **Close.** Stream when freshness changes the decision (fraud, alerts, live dashboards, features for a model about to fire); stay with batch when the answer can wait until morning. Both are Flink, both are SQL. The cold-open query was not broken; a stream is never done. Flink speaks SQL, but it is not a database. Sign-off: "as always, have a nice day."

### Why the key examples matter

- **The query that never finishes** turns the semantic shift into something you can see in the first minute, and the close reframes it from bug to point.
- **The animated changelog, then the live one** shows that `-U`/`+U` rows are the normal shape of a streaming aggregate, not noise to filter out.
- **The unbounded join** makes state cost concrete: correctness alone is not enough on a stream; every join needs a time bound to stay affordable.
- **The watermark dial** shows that "final" is a choice you make in the DDL, with a measurable price in dropped rows.
- **The temporal join** shows something streaming SQL says in one line that batch SQL struggles to express: "as of the moment it happened."
- **Impossible travel** is the payoff of declared time: a fraud rule written as SQL that fires while the fraud is happening, with `WITHIN` doubling as the memory bound.
- **ML_PREDICT** connects AI back to the same building blocks: a window you already know, plus one model call per row. It argues that much of the "real-time AI feature store" is a windowed aggregation.

### Recommendations and caveats

- Declare event time and a watermark deliberately; when a join or window misbehaves, check the DDL first.
- Bound stream-stream joins and pattern matches in time so state does not grow forever.
- Use a LEFT temporal join when you must not lose transactions that precede the first dimension version.
- Retract and upsert results are expected for aggregates; design sinks and dashboards for them.
- Model scoring per row costs a model call per row; the demo statement is stopped after each run for that reason.
- The playground limits results to 1,000 rows and stops idle sessions after a few minutes; it is a teaching tool, not a production cluster.

### Sources

- Shownotes, slides, demo links, and recording (when published): https://speaking.gamov.io/talks/bigdataconf26-tables-to-streams/
- Flink SQL playground: https://sql.selectstar.stream/
- Interactive tutorial: https://selectstar.stream/
- Playground source: https://github.com/gAmUssA/flink-sql-playground
