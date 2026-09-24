---
layout: talk
---

<!-- Source: https://speaking.gamov.io/03tTZv/apache-kafka-a-streaming-data-platform -->
# Apache Kafka — A Streaming Data Platform

**Conference:** San Francisco JUG  
**Date:** 2018-05-21  
**Slides:** [View Slides](https://drive.google.com/file/d/1OmnSBsCwv2XRzc-nAUCb7d4XGaTnJ2Ma/view)  

A presentation at San Francisco JUG in
                    May 2018 in
                    San Francisco, CA, USA by 
                    {{ site.speaker.display_name | default: site.speaker.name }}

## Abstract

When it comes time to choose a distributed messaging system, everyone knows the answer: Apache Kafka. But how about when you’re on the hook to choose a world-class, horizontally scalable stream data processing system? When you need not just publish and subscribe messaging, but also long-term storage, a flexible integration framework, and a means of deploying real-time stream processing applications at scale without having to integrate a number of different pieces of infrastructure yourself? The answer is still Apache Kafka.
In this talk, we’ll make a rapid-fire review of the breadth of Kafka as a streaming data platform. We’ll look at its internal architecture, including how it partitions messaging workloads in a fault-tolerant way. We’ll learn how it provides message durability. We’ll look at its approach to pub/sub messaging. We’ll even take a peek at how Kafka Connect provides code-free, scalable, fault-tolerant integration, and how the Streams API provides a complete framework for computation over all the streaming data in your cluster.

