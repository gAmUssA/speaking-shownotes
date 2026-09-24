---
layout: talk
---

<!-- Source: https://speaking.gamov.io/Sorhje/streams-must-flow-developing-fault-tolerant-stream-processing-application-with-kafka-streams-and-kubernetes -->
# Streams must flow: developing fault-tolerant stream processing application with Kafka Streams and Kubernetes.

**Conference:** Cloud Native Day  
**Date:** 2019-06-11  
**Slides:** [View Slides](https://drive.google.com/file/d/1Jo18Yp2j3bb9rMc2YGgtl1DoAII9IaEi/view)  
**Video:** [Watch Video](https://www.youtube.com/watch?v=qNCs2nSo_xo)  

A presentation at Cloud Native Day in
                    June 2019 in
                    Montreal, QC, Canada by 
                    {{ site.speaker.display_name | default: site.speaker.name }}

## Abstract

All things change constantly, and we need to get on board with streams! Moreover, dealing with constantly changing data at low latency is pretty hard. It doesn’t need to be that way. Kafka Streams, Apache Kafka’s stream processing library, allows developers to build sophisticated stateful stream processing applications which you can deploy in an environment of your choice. Kafka Streams is not only scalable but fully elastic allowing for dynamic scale-in and scale-out as the library handles state migration transparently in the background. By running Kafka Streams applications on Kubernetes, you can use Kubernetes powerful control plane to standardize and simplify the application management—from deployment to dynamic scaling. In this talk, Viktor explains the essentials of dynamic scaling and state migration in Kafka Streams. You will see a live demo of how a Kafka Streams application can run in a Docker container and the dynamic scaling of an application running in Kubernetes.

