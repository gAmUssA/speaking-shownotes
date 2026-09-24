---
layout: talk
---

<!-- Source: https://speaking.gamov.io/TKwTtF/testing-kafka-containers-with-testcontainers-there-and-back-again -->
# Testing Kafka Containers with Testcontainers: There and Back Again

**Conference:** Current 2022: The Next Generation of Kafka Summit  
**Date:** 2022-10-04  
**Slides:** [View Slides](https://drive.google.com/file/d/1lxEO0OzP10hRPTHNT61K-h3QizRxIzbX/view)  

A presentation at Current 2022: The Next Generation of Kafka Summit in
                    October 2022 in
                    Austin, TX, USA by 
                    {{ site.speaker.display_name | default: site.speaker.name }}

## Abstract

Did you ever wonder how your applications will behave once deployed to production? Sure, you have unit tests, and your test coverage is sky-high. However, you might depend on external resources like Apache Kafka or Kafka Connect connectors, kSQL, etc.
Moreover, without proper integration testing, you cannot be confident about the stability of your production environment.
In this session, Viktor talks about Testcontainers, a library (that was initially created for JVM, now exists in many languages) that provides lightweight, disposable instances of shared databases, clusters, and anything else that can run in a Docker container! After a rapid-fire introduction to the core concepts of the containers and how they can help improve integration testing, we’re going to zoom in on supported out-of-the-box containers.
You will learn how to test complex stacks like Apache Kafka-based streaming platform (or even Confluent Cloud) and other components.

## Resources

- [cp-testcontainers](https://github.com/testcontainers-all-things-kafka/cp-testcontainers)
- [cp-testcontainers-examples](https://github.com/testcontainers-all-things-kafka/cp-testcontainers-examples)
