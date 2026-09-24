---
layout: talk
---

<!-- Source: https://speaking.gamov.io/qV8trF/kafka-on-kubernetes-does-it-really-have-to-be-the-hard-way -->
# Kafka on Kubernetes: Does it really have to be “The Hard Way”?

**Conference:** Cloud Native Day  
**Date:** 2019-06-11  
**Slides:** [View Slides](https://drive.google.com/file/d/1Pk8daHdEuOgGRiSMeBmLEZAefOP_DHhD/view)  
**Video:** [Watch Video](https://www.youtube.com/watch?v=Aw1P0p-JuBM)  

A presentation at Cloud Native Day in
                    June 2019 in
                    Montreal, QC, Canada by 
                    {{ site.speaker.display_name | default: site.speaker.name }}

## Abstract

When it comes to choosing a distributed streaming platform for real-time data pipelines, everyone knows the answer: Apache Kafka! And when it comes to deploying applications at scale without needing to integrate different pieces of infrastructure yourself, the answer nowadays is increasingly Kubernetes. However, with all great things, the devil is truly in the details. While Kubernetes does provide all the building blocks that are needed, a lot of thought is required to truly create an enterprise-grade Kafka platform that can be used in production. In this technical deep dive, Michael and Viktor will go through challenges and pitfalls of managing Kafka on Kubernetes as well as the goals and lessons learned from the development of the Confluent Operator for Kubernetes.

## Resources

- [Confluent Operator EA](https://www.confluent.io/confluent-operator/)
