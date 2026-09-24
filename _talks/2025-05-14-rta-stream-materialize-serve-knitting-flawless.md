---
layout: talk
---

<!-- Source: https://speaking.gamov.io/8DuZWR/stream-materialize-serve-knitting-flawless-pipelines-with-kafka-flink-and-pinot -->
# Stream, Materialize, Serve – Knitting Flawless Pipelines with Kafka, Flink, and Pinot

**Conference:** RTA Summit  
**Date:** 2025-05-14  
**Slides:** [View Slides](https://drive.google.com/file/d/1Uk-t7xMfDcTdBOIr5ipLFli3fjFKu-YN/view)  
**Video:** [Watch Video](https://www.youtube.com/watch?v=6Y6uQ_06X8A)  

A presentation at RTA Summit by 
                    {{ site.speaker.display_name | default: site.speaker.name }}

## Abstract

The success of modern real-time analytics lies in skillfully weaving data technologies together. Much like a master craftsperson selecting the perfect tools for each task, building high-performance analytics requires understanding how Apache Kafka, Apache Flink, and Apache Pinot complement each other to create a seamless data fabric.
In this technical session, we’ll explore the art of knitting these technologies into a cohesive analytics pipeline. We begin with Apache Kafka, which establishes the foundation of our data flow with robust streaming capabilities. We then demonstrate how Apache Flink is our primary processing framework, using its native Table API to create materialized views. This pattern dramatically reduces query latency by pre-computing complex joins. Finally, we’ll show how Apache Pinot completes our pipeline by serving these pre-computed views alongside real-time data, delivering deep sub-second query performance at scale.
Through live demonstrations & hands-on examples, you’ll master the techniques needed to create flawless pipelines. We’ll examine practical implementation patterns for materialized views, strategies for handling late-arriving data, & approaches to maintaining consistency across your streaming architecture. Whether you’re building user-facing analytics dashboards or embedding real-time insights into your applications, you’ll leave equipped with the knowledge to craft high-performance analytics solutions that stand the test of time & scale.

