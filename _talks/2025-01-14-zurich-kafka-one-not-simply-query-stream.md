---
layout: talk
---

<!-- Source: https://speaking.gamov.io/qBjMet/one-does-not-simply-query-a-stream -->
# One Does Not Simply Query a Stream

**Conference:** Zurich Kafka Meetup  
**Date:** 2025-01-14  
**Slides:** [View Slides](https://drive.google.com/file/d/1blyIvwcS-GcdS6HzXlXkPQ3ONmp7wxvV/view)  
**Video:** [Watch Video](https://www.youtube.com/watch?v=9pGpOMWeHf4)  

A presentation at Zurich Kafka Meetup in
                    January 2025 in
                    Zürich, Switzerland by 
                    {{ site.speaker.display_name | default: site.speaker.name }}

## Abstract

Suppose you have embraced Apache Kafka as the core of your data infrastructure. In that case, you have probably integrated event-driven services to communicate with each other through topics, combined with legacy systems through an ecosystem of connectors, and responded more or less in real-time to things happening in the world outside your software. Immutable logs of events form a more robust backbone than the one-database-to-rule-them-all of your profound monolith past. Your stack is more evolvable, responsive, and easier to work with. However, you might face a challenge now that everything is a stream - how do you query things?
Although you may name at least one or two ways off the top of your head, it’s time you think through how to make the choice. In this talk, we’ll explore the solutions currently in use for asking questions about the contents of a topic, including Kafka Streams, the various streaming SQL implementations, your favorite relational database, your favorite data lake, and real-time analytics databases like Apache Pinot. There is no single correct answer to the question, so as responsible builders of systems, we must understand our options and the trade-offs they present to us.
You’ll leave this talk even more satisfied that you’ve embraced Kafka as the heart of your system and are ready to deploy the right choice for querying the logs that hold your data.

