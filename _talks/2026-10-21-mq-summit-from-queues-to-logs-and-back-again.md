---
layout: talk
---

<!-- Source: https://mqsummit.com/talks/from-queues-to-logs-and-back-again/ -->
# From Queues to Logs and Back Again

**Conference:** MQ Summit 2026  
**Date:** 2026-10-21  
**Slides:** [View Slides](https://drive.google.com/file/d/16tnqqJLWPHs4Q6hpzIpxk4o1X-tmWCsn/view)  

A presentation at MQ Summit 2026 in
                    October 2026 in
                    Haarlem, The Netherlands by 
                    {{ site.speaker.display_name | default: site.speaker.name }}

## Abstract

Welcome to a brief history of messaging, told as a story of constraints falling away. I will start in the era of the queue, when a broker’s job was to move a message and forget it. Around 2011, Kafka inverted the model: keep messages, make the log durable, and let consumers replay history instead of reading it once. That one idea reshaped our architectures (stream processing, event sourcing) and turned a messaging system into the place where companies keep their source of truth. Fast forward to now: ZooKeeper is gone, storage is moving to object stores, and queues are returning to Kafka via shared groups. And we look forward. We made data durable and replayable. It’s time to hand that substrate to AI agents that need memory, context, and a record of what just happened. I’ll make the case that the messaging layer is where agentic systems will live. Whether you run anything with “MQ” in the name, you’ll leave with a map of how we got here and a strong opinion about where we’re headed.

## Resources

- [MQ Summit 2026 session page](https://mqsummit.com/talks/from-queues-to-logs-and-back-again/)
- [Jay Kreps, "The Log: What every software engineer should know about real-time data's unifying abstraction" (2013)](https://web.archive.org/web/20260612105408/https://engineering.linkedin.com/distributed-systems/log-what-every-software-engineer-should-know-about-real-time-datas-unifying)
- [Apache Kafka 4.0.0 release announcement (KRaft only)](https://kafka.apache.org/blog/2025/03/18/apache-kafka-4.0.0-release-announcement/)
- [KIP-932: Queues for Kafka (share groups)](https://cwiki.apache.org/confluence/display/KAFKA/KIP-932%3A+Queues+for+Kafka)
- [KIP-405: Kafka tiered storage](https://cwiki.apache.org/confluence/display/KAFKA/KIP-405%3A+Kafka+Tiered+Storage)
- [Why Do Multi-Agent LLM Systems Fail? (MAST taxonomy, UC Berkeley)](https://arxiv.org/abs/2503.13657)
- [Kafka in Action (Manning)](https://www.manning.com/books/kafka-in-action)
