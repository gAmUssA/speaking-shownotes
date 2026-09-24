---
layout: talk
---

<!-- Source: https://speaking.gamov.io/xh3hsC/one-does-not-simply-query-a-stream -->
# One Does Not Simply Query a Stream

**Conference:** Iceberg Summit 2025  
**Date:** 2025-04-08  
**Slides:** [View Slides](https://drive.google.com/file/d/1u_oH7XEN7f5PGpRxMxrcujKdy1F-CGr1/view)  
**Video:** [Watch Video](https://www.youtube.com/watch?v=4917an3wz68)  

A presentation at Iceberg Summit 2025 in
                    April 2025 in
                    San Francisco, CA, USA by 
                    {{ site.speaker.display_name | default: site.speaker.name }}

## Abstract

Streaming data with Apache Kafka® has become the backbone of modern day applications. While streams are ideal for continuous data flow, they lack built-in querying capability. Unlike databases with indexed lookups, Kafka’s append-only logs are designed for high throughput processing, not for on-demand querying. This necessitates teams to build additional infrastructure to enable query capabilities for streaming data. Traditional methods replicate this data into external stores such as relational databases like PostgreSQL for operational workloads and object storage like S3 with Flink, Spark, or Trino for analytical use cases. While useful sometimes, these methods deepen the divide between operational and analytical estates, creating silos, complex ETL pipelines, and issues with schema mismatches, freshness, and failures.
In this session, we’ll explore and see live demos of some solutions to unify the operational and analytical estates, eliminating data silos. We’ll start with stream processing using Kafka Streams, Apache Flink®, and SQL implementations, then cover integration of relational databases with real-time analytics databases such as Apache Pinot® and ClickHouse. Finally, we’ll dive into modern approaches like Apache Iceberg® with Tableflow, which simplifies data preparation by seamlessly representing Kafka topics and associated schemas as Iceberg or Delta tables in a few clicks. While there’s no single right answer to this problem, as responsible system builders, we must understand our options and trade-offs to build robust architectures.

## Resources

- [code repo](https://github.com/gAmUssA/one-does-not-simply-query-a-stream)
