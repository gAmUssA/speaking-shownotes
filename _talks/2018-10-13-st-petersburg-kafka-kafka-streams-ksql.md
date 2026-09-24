---
layout: talk
---

<!-- Source: https://speaking.gamov.io/2TrY92/kafka-streams-i-ksql-kak-perestat-stroit-klastera-i-nachat-obrabatyvat-strimy -->
# Kafka Streams и KSQL: как перестать строить кластера и начать обрабатывать стримы

**Conference:** St. Petersburg Kafka Meetup  
**Date:** 2018-10-13  
**Slides:** [View Slides](https://drive.google.com/file/d/1n_hNPVbTgQGztxoPFv1Y_PvNVbuEKYcU/view)  
**Video:** [Watch Video](https://www.youtube.com/watch?v=D1j3Y7Md3X4)  

A presentation at St. Petersburg Kafka Meetup in
                    October 2018 in
                    St Petersburg, Russia by 
                    {{ site.speaker.display_name | default: site.speaker.name }}

## Abstract

Работа с постоянно меняющимися данными, особенно при требованиях низкой задержки, довольно непростая задача.
Но должно ли все быть так сложно?
Apache Kafka давно стала стандартным средством для решения задач распределенной обработки потоковой информации. И многим знакомы особенности архитектуры Kafka и ее pub/sub APIs.
А знаете ли вы, что Kafka также включает средства обработки потоковых данных в реальном времени?
Виктор Гамов представит Kafka Streams (Java фреймворк для обработки потоковых данных) и KSQL – пожалуй, лучшее, что случалось в мире Kafka со времен изобретения самой Кафки! К слову, KSQL позволяет создавать сложные системы обработки потоков практически без кода (ну, конечно, если вы не считаете написание (K)SQL-запросов программированием).
Он расскажет о том, как развернуть приложения, покажет рабочий код, который заставит вас думать о батч-обработке, как о мифах Древней Греции! Также обсудим потоковую передачу систем данных из древней истории пакетной обработки в текущую эпоху потоковых данных!
Никаких предварительных знаний о потоках Кафки, KSQL не требуется.

