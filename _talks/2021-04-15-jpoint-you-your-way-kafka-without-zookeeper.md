---
layout: talk
---

<!-- Source: https://speaking.gamov.io/XbJszq/you-can-go-your-way-kafka-without-zookeeper -->
# You can go your way: Kafka without Zookeeper

**Conference:** JPoint  
**Date:** 2021-04-15  
**Slides:** [View Slides](https://drive.google.com/file/d/17EQpazcAXsYXo6B0tV69KtBavAx7eRCb/view)  
**Video:** [Watch Video](https://www.youtube.com/watch?v=YK2gtCBXs_E)  

A presentation at JPoint in
                    April 2021 in
                    Moscow, Russia by 
                    {{ site.speaker.display_name | default: site.speaker.name }}

## Abstract

Very soon, Apache Kafka® will no longer need ZooKeeper! With KIP-500, Kafka will include its built-in consensus layer, removing the ZooKeeper dependency altogether. The next significant milestone in this effort is coming in Apache Kafka 2.8.0. You will have early access to the new code and spin up a development version of Kafka without ZooKeeper’s opportunity to play with the Raft implementation as the distributed consensus algorithm.
Ultimately, removing ZooKeeper simplifies overall infrastructure design and operational workflows for your Kafka deployments. In this talk, Viktor will provide a brief overview of what limitations Zookeeper imposed on Kafka architecture, what will be changed, and the current status of Zookeeper removal.

