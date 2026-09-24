---
layout: talk
---

<!-- Source: https://speaking.gamov.io/hlcuaL/building-a-real-time-alerting-analytics-and-reporting-system-at-scale -->
# Building a Real-time Alerting, Analytics and Reporting System at Scale

**Conference:** NYC In-Memory Computing Meetup  
**Date:** 2019-06-26  
**Slides:** [View Slides](https://drive.google.com/file/d/1HTdQa7UX1qnyXWrYrMNO-TCiL3hxFsin/view)  
**Video:** [Watch Video](https://www.youtube.com/watch?v=LF_e5WgS1eI)  

A presentation at NYC In-Memory Computing Meetup in
                    June 2019 in
                    New York, NY, USA by 
                    {{ site.speaker.display_name | default: site.speaker.name }}

## Abstract

Are you tasked to build a system or upgrade an existing architecture to a solution capable of handling unbound streams of data, do real-time alerting, storing always growing terabytes and petabytes of data and, finally, act on the data within milliseconds SLAs?
By integrating Apache Kafka with Apache Ignite you’ll solve all your requirements faster and easier. A battle-tested recipe is simple — take Kafka Connect and have your data stream through Kafka pipelines, add a pinch of KSQL to act on the streams with SQL in real-time with zero delays, rinse and flush the pre-processed data in Ignite as in-memory databases and get further insights by analyzing your hot and cold datasets.
Denis and Viktor will demonstrate how to implement the solution in practice. They’ll explain architectural reasoning and the benefits of real-time integration and share common usage patterns.

## Resources

- [A demo from presentation](http://github.com/dmagda/market_orders)
