---
layout: talk
---

<!-- Source: https://speaking.gamov.io/4zT5E5/apache-kafka-event-streaming-platform-for-net-developers -->
# Apache Kafka Event-Streaming Platform for .NET Developers

**Conference:** NDC Sydney  
**Date:** 2019-10-17  
**Slides:** [View Slides](https://drive.google.com/file/d/1mQ5F5R6GMhaVKAQsx9INz5a63ZV0oWTM/view)  
**Video:** [Watch Video](https://www.youtube.com/watch?v=3Gonh1afx2g)  

A presentation at NDC Sydney in
                    October 2019 in
                    Sydney NSW, Australia by 
                    {{ site.speaker.display_name | default: site.speaker.name }}

## Abstract

When it comes time to choose a distributed messaging system, everyone knows the answer: Apache Kafka. But how about when you’re on the hook to choose a world-class, horizontally scalable stream data processing system? When you need not just publish and subscribe messaging, but also long-term storage, a flexible integration framework, and a means of deploying real-time stream processing applications at scale without having to integrate many different pieces of infrastructure yourself? The answer is still Apache Kafka.
In this talk, Viktor will give a rapid-fire review of the breadth of Kafka as a streaming data platform. You’ll see its internal architecture, including how it partitions messaging workloads in a fault-tolerant way, and how it provides message durability. Viktor will explain Kafka’s approach to pub/sub messaging and how the Confluent .NET client offers a framework for computation over streaming data.

## Resources

- [Kubernetes demo setup](https://github.com/confluentinc/demo-scene/tree/master/twitter-streams-operator)
- [Confluent Kafka Dotnet client](https://gamov.dev/ndcsydney-dotnet-client)
