---
layout: talk
---

<!-- Source: https://speaking.gamov.io/ovtflk/apache-kafka-event-streaming-platform-for-net-developers -->
# Apache Kafka Event-Streaming Platform for .NET Developers

**Conference:** NDC Porto  
**Date:** 2020-04-24  
**Slides:** [View Slides](https://drive.google.com/file/d/1f8_r2JeeKfmq6y0RZ6DaIXSGHzizPMfz/view)  

A presentation at NDC Porto by 
                    {{ site.speaker.display_name | default: site.speaker.name }}

## Abstract

When it comes time to choose a distributed messaging system, everyone knows the answer: Apache Kafka. But how about when you’re on the hook to choose a world-class, horizontally scalable stream data processing system? When you need not just publish and subscribe messaging, but also long-term storage, a flexible integration framework, and a means of deploying real-time stream processing applications at scale without having to integrate many different pieces of infrastructure yourself? The answer is still Apache Kafka.
In this talk, Viktor will give a rapid-fire review of the breadth of Kafka as a streaming data platform. You’ll see its internal architecture, including how it partitions messaging workloads in a fault-tolerant way, and how it provides message durability. Viktor will explain Kafka’s approach to pub/sub messaging and how the Confluent .NET client offers a framework for computation over streaming data.

## Resources

- [Confluent Kafka Dotnet client](https://gamov.dev/ndcporto-dotnet-client)
