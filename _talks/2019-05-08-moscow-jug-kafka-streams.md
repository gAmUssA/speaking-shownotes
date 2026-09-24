---
layout: talk
---

<!-- Source: https://speaking.gamov.io/24FFv9/kafka-streams-iq-zachem-nam-baza-dannyh-nam-baza-ne-nuzhna -->
# Kafka Streams IQ: «Зачем нам база данных? Нам база не нужна!»

**Conference:** Moscow JUG  
**Date:** 2019-05-08  
**Slides:** [View Slides](https://drive.google.com/file/d/1IPwLdBLc-ylEyfcZrSsP0aO-C2t4Lwcm/view)  
**Video:** [Watch Video](https://youtu.be/AdDsvv4dDlk)  

A presentation at Moscow JUG in
                    May 2019 in
                    Moscow, Russia by 
                    {{ site.speaker.display_name | default: site.speaker.name }}

## Abstract

Рост популярности Apache Kafka, как потоковой платформы, потребовал пересмотра традиционного подхода к распределенной обработке данных. Kafka Streams позволяет разрабатывать приложения без каких-либо кластеров. Подход «кластер на коленке» позволяет начать разработку и не задумываться о том, сможем ли мы потом масштабироваться (spoiler alert: Сможем!).
А слабо выкинуть традиционную базу данных для хранения результатов и промежуточного состояния?
В этом докладе Виктор расскажет про Interactive Queries — часть API Kafka Streams, которая позволяет получить доступ к состоянию приложения без использования традиционных хранилищ — БД, кэшей и тп. Посмотрим, как такой подход позволяет упростить архитектуру для использования Kafka Stream в микросервисах.
Как обычно, кроме доклада по слайдам, будет демонстрация, а кроме того, примеры кода на Java и Kotlin, и живое обсуждение!
Готовьте свои вопросы и жизненные ситуации.

## Resources

- [Interactive Queries (Kafka Streams Examples)](https://github.com/confluentinc/kafka-streams-examples/tree/5.2.1-post/src/main/java/io/confluent/examples/streams/interactivequeries)
- [Streaming Movie Ratings](https://github.com/confluentinc/demo-scene/tree/master/streams-movie-demo)
