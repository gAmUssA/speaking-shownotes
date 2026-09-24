---
layout: talk
---

<!-- Source: https://speaking.gamov.io/jwq6FY/event-driven-architectures-for-spring-developers -->
# Event-Driven Architectures for Spring Developers

**Conference:** SpringOne Platform by Pivotal  
**Date:** 2019-10-09  
**Slides:** [View Slides](https://drive.google.com/file/d/1nseQdJ4Qa3S7TMZyqyptcyC0hM2cX4_I/view)  
**Video:** [Watch Video](https://www.youtube.com/watch?v=BFcoFu-udQA)  

A presentation at SpringOne Platform by Pivotal in
                    October 2019 in
                    Austin, TX, USA by 
                    {{ site.speaker.display_name | default: site.speaker.name }}

## Abstract

Developers have long employed message queues to decouple subsystems and provide an approximation of asynchronous processing. However, these queuing systems don’t adequately deliver on the promise of event-driven architectures and often lead to contrived integration patterns.
The events carry both notification and state and form a powerful primitive on which to build systems for developers and data engineers alike. Developers benefit from the asynchronous communication that events enable between services, and data engineers benefit from the integration capabilities.
In this talk, Gary and Viktor discuss the concepts of events, their relevance to software and data engineers, and their powers for effectively unifying architectures.
You’ll learn how stream processing makes sense in microservices. The talk concludes with a hands-on demonstration of these concepts in practice using modern toolchain: Kotlin, Spring Boot, and Apache Kafka!

## Resources

- [CDC with MySQL and Maxwell and Kafka](https://github.com/garyrussell/s1p-2019)
