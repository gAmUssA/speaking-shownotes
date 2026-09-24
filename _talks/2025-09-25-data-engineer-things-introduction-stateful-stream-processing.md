---
layout: talk
---

<!-- Source: https://speaking.gamov.io/xSiKgB/introduction-to-stateful-stream-processing-with-apache-flink -->
# Introduction to Stateful Stream Processing with Apache Flink

**Conference:** Data Engineer Things NYC Meetup  
**Date:** 2025-09-25  
**Slides:** [View Slides](https://drive.google.com/file/d/1qbPIc3hoy46TtFHbDzw8btpNskAfe5Lo/view)  
**Video:** [Watch Video](https://www.youtube.com/watch?v=3_5HK2hl-PY)  

A presentation at Data Engineer Things NYC Meetup in
                    September 2025 in
                    New York, NY, USA by 
                    {{ site.speaker.display_name | default: site.speaker.name }}

## Abstract

Introduction to Stateful Stream Processing with Apache Flink
Stream Processing has evolved quickly in a short time: only a few years ago, it was mostly simple real-time aggregations with limited throughput and consistency. Today, many stream processing applications have sophisticated business logic, strict correctness guarantees, high performance, low latency, and maintain terabytes of state without databases. Stream processing frameworks also abstract a lot of the low-level details away, such as routing the data streams, taking care of concurrent executions, and handling various failure scenarios while ensuring correctness.

## Resources

- [Chandi Lamport Algorithm for Consistent Distributed Snapshots](https://claude.ai/share/609bdee2-8ccc-4807-9580-37c7e9a59aa0)
- [Confluent Developer](https://developer.confluent.io/)
