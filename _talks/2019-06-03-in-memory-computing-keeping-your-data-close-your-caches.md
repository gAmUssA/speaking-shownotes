---
layout: talk
---

<!-- Source: https://speaking.gamov.io/h8ziOZ/keeping-your-data-close-and-your-caches-hotter -->
# Keeping your Data Close and your Caches Hotter

**Conference:** In-memory Computing Summit EU 2019  
**Date:** 2019-06-03  
**Slides:** [View Slides](https://drive.google.com/file/d/10eO9S_nzlx9ETTnFzB2f485p21MnEE7e/view)  
**Video:** [Watch Video](https://www.youtube.com/watch?v=Z9qdGWrvmTs)  

A presentation at In-memory Computing Summit EU 2019 in
                    June 2019 in
                    London, UK by 
                    {{ site.speaker.display_name | default: site.speaker.name }}

## Abstract

Presented by: Ricardo Ferreira Viktor Gamov, Confluent
The distributed cache is becoming a popular technique to improve performance and simplify the data access layer when dealing with databases. Bringing the data as close as possible to the CPU allows unparalleled execution speed as well as horizontal scalability. This approach is often successful when used in a microservices design in which the cache is accessed only by a single API. However, it becomes more challenging if multiple applications are involved and changes are made to the database directly by other applications. The data held in the cache eventually becomes stale and no longer consistent with its underlying database. When consistency problems arise, the Engineering team must address that through additional coding — which directly jeopardizes the team’s ability to be agile between releases. This talk presents a set of patterns for cache-based architectures that aim to keep the caches always hot; by using Apache Kafka and its connectors to accomplish that goal. It will be shown how to set up these patterns across different IMDGs such as Hazelcast, Apache Ignite or Coherence. These patterns can be used in conjunction with different cache topologies such as cache-aside, read-through, write-behind, and refresh-ahead, making it reusable enough to be used as a framework to achieve data consistency in any architecture that relies on distributed caches.

