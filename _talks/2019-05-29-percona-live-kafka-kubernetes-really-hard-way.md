---
layout: talk
---

<!-- Source: https://speaking.gamov.io/f0bFzK/kafka-on-kubernetes-does-it-really-have-to-be-the-hard-way -->
# Kafka on Kubernetes: Does It Really Have To Be “The Hard Way”?

**Conference:** Percona Live 2019  
**Date:** 2019-05-29  
**Slides:** [View Slides](https://drive.google.com/file/d/1n040OM1xPTiSlGgkHzVDOsIr5eCWGM89/view)  
**Video:** [Watch Video](https://www.youtube.com/watch?v=_5BKOuhlFXc)  

A presentation at Percona Live 2019 in
                    May 2019 in
                    Austin, TX, USA by 
                    {{ site.speaker.display_name | default: site.speaker.name }}

## Abstract

When it comes to choosing a distributed streaming platform for real-time data pipelines, everyone knows the answer: Apache Kafka! And when it comes to deploying applications at scale without needing to integrate different pieces of infrastructure yourself, the answer nowadays is increasingly Kubernetes. However, with all great things, the devil is truly in the details. While Kubernetes does provide all the building blocks that are needed, a lot of thought is required to truly create an enterprise-grade Kafka platform that can be used in production. In this technical deep dive, Viktor will go through challenges and pitfalls of managing Kafka on Kubernetes as well as the goals and lessons learned from the development of the Confluent Operator for Kubernetes.

