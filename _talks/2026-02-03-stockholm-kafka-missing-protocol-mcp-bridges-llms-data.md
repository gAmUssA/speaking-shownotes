---
layout: talk
---

<!-- Source: https://speaking.gamov.io/xZQXW4/the-missing-protocol-how-mcp-bridges-llms-and-data-streams -->
# The Missing Protocol: How MCP Bridges LLMs and Data Streams

**Conference:** Stockholm Kafka Meetup  
**Date:** 2026-02-03  
**Slides:** [View Slides](https://drive.google.com/file/d/1WxbfHKtOUqwRg1HD15_M69P2nOvuk2EC/view)  
**Video:** [Watch Video](https://www.youtube.com/watch?v=h1YWIUDvj-8)  

A presentation at Stockholm Kafka Meetup in
                    February 2026 in
                    Stockholm, Sweden by 
                    {{ site.speaker.display_name | default: site.speaker.name }}

## Abstract

Nobody’s talking about this: MCP isn’t just another way to build chatbots. It’s the bridge we’ve been missing between AI reasoning and real-time data systems.
Teams build AI applications that work great in demos but fall apart with production data. Your agents analyze historical reports but can’t tell what’s happening in your Kafka streams. They’re blind to schema changes and disconnected from events that matter to your business.
Instead of treating streaming platforms like black boxes, you expose them directly to your agents via MCP protocol. Suddenly, your AI doesn’t just read about data—it lives inside your data flows.
Learn what becomes possible when you stop thinking about AI as an external service and start treating it as part of your streaming architecture. We’ll build systems where agents subscribe to real-time events, reason about evolving schemas, and make decisions that ripple through your data platform.

## Resources

- [Spring AI agent + Confluent MCP](https://github.com/gAmUssA/spring-ai-confluent-mcp)
- [Spring AI Documentation](https://docs.spring.io/spring-ai/reference/)
- [Confluent MCP Server](https://github.com/confluentinc/mcp-confluent)
