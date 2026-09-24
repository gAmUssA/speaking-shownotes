---
layout: talk
---

<!-- Source: https://speaking.gamov.io/DdLbz3/streaming-etl-in-practice-with-postgresql-apache-kafka-and-ksql -->
# Streaming ETL in Practice with PostgreSQL, Apache Kafka, and KSQL

**Conference:** Postgresconf NYC  
**Date:** 2019-03-22  
**Slides:** [View Slides](https://drive.google.com/file/d/11g-pFbvLf6gg58Qf7fb42Npvzy84UNpr/view)  

A presentation at Postgresconf NYC in
                    March 2019 in
                    New York, NY, USA by 
                    {{ site.speaker.display_name | default: site.speaker.name }}

## Abstract

Have you ever thought that you needed to be a programmer to do stream processing and build streaming data pipelines? Think again!
Companies new and old are all recognizing the importance of a low-latency, scalable, fault-tolerant data backbone, in the form of the Apache Kafka® streaming platform.
With Kafka, developers can integrate multiple sources and systems, which enables low latency analytics, event-driven architectures and the population of multiple downstream systems.
These data pipelines can be built using configuration alone.
In this talk, we’ll see how easy it is to stream data from a database such as PostgreSQL into Kafka using CDC and Kafka Connect.
Besides, we’ll use KSQL to filter, aggregate and join it to other data, and then stream this from Kafka out into multiple targets such as Elasticsearch and S3.
All of this will be accomplished without a single line of code!
Why should programming buffs have all the fun?

## Resources

- [Demos](https://github.com/confluentinc/examples/tree/5.1.2-post/postgres-debezium-ksql-elasticsearch)
