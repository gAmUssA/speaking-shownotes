---
layout: talk
---

<!-- Source: https://speaking.gamov.io/Y8yrHk/bringing-observability-to-your-stream-processing -->
# Bringing Observability to Your Stream Processing

**Conference:** Oracle Openworld 2019  
**Date:** 2019-09-16  
**Slides:** [View Slides](https://drive.google.com/file/d/1FNzppG66E8Cxq64XjPqDO-idaQxXS6oc/view)  
**Video:** [Watch Video](https://www.youtube.com/watch?v=F-TZdI1BSys)  

A presentation at Oracle Openworld 2019 in
                    September 2019 in
                    San Francisco, CA, USA by 
                    {{ site.speaker.display_name | default: site.speaker.name }}

## Abstract

Using microservices—breaking down the domain problem into multiple reusable, highly scalable, and efficient services—is rapidly becoming the de facto standard way to develop applications. However, when it comes to monitoring these services, developers often have to leverage distributed tracing technologies such as OpenTracing to make the transaction flow observable. Although this is relatively easy to accomplish while dealing with request/response microservices, it might not be that easy to bring distributed tracing to event-driven/asynchronous architectures built on Apache Kafka. This session explains how distributed tracing can be implemented in pipelines built with Apache Kafka, via usage of OpenTracing and the Kafka Interceptors API.

## Resources

- [Kafka Tracing Support](https://github.com/riferrei/kafka-tracing-support)
