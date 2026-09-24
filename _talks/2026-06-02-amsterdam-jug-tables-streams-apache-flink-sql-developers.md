---
layout: talk
---

<!-- Source: https://speaking.gamov.io/18MJKj/from-tables-to-streams-apache-flink-for-sql-developers -->
# From Tables to Streams: Apache Flink for SQL Developers

**Conference:** Amsterdam JUG  
**Date:** 2026-06-02  
**Slides:** [View Slides](https://drive.google.com/file/d/1703y9pb_q3FdSswy5mlh1dTEJSKflhdO/view)  

A presentation at Amsterdam JUG in
                    June 2026 in
                    Amsterdam, Netherlands by 
                    {{ site.speaker.display_name | default: site.speaker.name }}

## Abstract

What if your SQL queries could process data as it happens instead of after it’s stored? Apache Flink speaks SQL fluently, but it’s not a database – think of it as a conductor orchestrating endless streams of data rather than a librarian managing stored records.
This session bridges the gap between traditional SQL and stream processing.
We’ll explore:
The Mental Model Shift – From “query the database” to “continuously process the stream” using intuitive analogies
Flink SQL in Action: How familiar operations like SELECT, JOIN, and GROUP BY work on infinite data streams, plus temporal joins, time windows, and watermarks
Table API: Programmatic control with declarative simplicity, bridging SQL and complete programming flexibility
Flink AI: Real-time feature engineering and model inference on streaming data using SQL-like patterns
Real-World Patterns: Fraud detection during transactions, live analytics dashboards, and event-driven architectures
You’ll leave understanding not just how to use Flink SQL, but when and why it transforms traditional database skills into real-time data superpowers.
Perfect for: SQL developers and data engineers ready to make their queries travel through time.

## Resources

- [Flink Changelog explained](https://selectstar.stream/)
- [Flink SQL Fiddle](https://sql.selectstar.stream/)
