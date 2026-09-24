---
layout: talk
---

<!-- Source: https://speaking.gamov.io/V9GAU4/one-does-not-simply-query-a-stream -->
# One Does Not Simply Query a Stream

**Conference:** Elastic New York City User Group  
**Date:** 2026-06-25  
**Slides:** [View Slides](https://drive.google.com/file/d/1BmiskZqlEQoTbQq77jTTU3DWxNFsh9D3/view)  
**Video:** [Watch Video](https://www.youtube.com/watch?v=buXeCeHO3wE)  

A presentation at Elastic New York City User Group in
                    June 2026 in
                    New York, NY, USA by 
                    {{ site.speaker.display_name | default: site.speaker.name }}

## Abstract

Streaming data with Apache Kafka® has become the backbone of modern applications. While streams are ideal for continuous data flow, they lack built-in querying capabilities. Unlike databases with indexed lookups, Kafka’s append-only logs are designed for high-throughput processing—not for on-demand queries. This necessitates additional infrastructure to query streaming data effectively. Traditional approaches replicate stream data into external stores: relational databases such as PostgreSQL for operational queries; object storage such as S3 accessed via Flink, Spark, or Trino for analytics; and Elasticsearch for full-text search and log analytics. Each serves a purpose—but they also introduce silos, schema mismatches, freshness issues, and complex ETL pipelines, increasing system fragility. In this session, we’ll explore solutions that aim to unify operational, analytical, and search workloads across real-time data. We’ll demonstrate stream processing with Kafka Streams, Apache Flink®, and SQL engines; real-time analytics with Apache Pinot®; search capabilities with Elasticsearch; and modern lakehouse approaches using Apache Iceberg® with Tableflow to represent Kafka topics as queryable tables. While there’s no one-size-fits-all solution, understanding the tools and trade-offs will help you design more robust and flexible architectures.

## Resources

- [code repo](https://github.com/gAmUssA/one-does-not-simply-query-a-stream)
- [Tableflow: building streaming pipelines](https://www.confluent.io/blog/building-streaming-data-pipelines-part-1/)
- [HTTP Source Connector](https://rmoff.net/2025/03/13/creating-an-http-source-connector-on-confluent-cloud-from-the-cli/)
