---
layout: talk
---

<!-- Source: https://speaking.gamov.io/Q8OlKc/commit-logs-in-n-age-of-microservices -->
# Commit Logs in n Age of Microservices

**Conference:** Seattle Event Driven Meetup  
**Date:** 2019-03-19  
**Slides:** [View Slides](https://drive.google.com/file/d/1D8WAtLCNHeqke99yCN6CN2WIACFv_OUF/view)  
**Video:** [Watch Video](https://www.youtube.com/watch?v=6Knm2EGCNrQ)  

A presentation at Seattle Event Driven Meetup in
                    March 2019 in
                    Seattle, WA, USA by 
                    {{ site.speaker.display_name | default: site.speaker.name }}

## Abstract

Microservice architectures provide a robust challenge to the traditional centralized database we have come to understand.
In this talk, we’ll explore the notion of unbundling that database, and putting a distributed commit log at the center of our information architecture.
As events impinge on our system, we store them in a durable, immutable log (happily provided by Apache Kafka), allowing each microservice to create a derived view of the data according to the needs of its clients.
Event-based integration avoids the now-well-known problems of RPC and database-based service integration, and allows the information architecture of the future to take advantage of the growing functionality of stream processing systems like Kafka, allowing us to create systems that can more easily adapt to the changing needs of the enterprise and provide the real-time results we are increasingly being asked to provide.

