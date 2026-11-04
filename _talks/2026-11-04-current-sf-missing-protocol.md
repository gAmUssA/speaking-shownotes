---
layout: talk
---

<!-- Source: https://current.confluent.io/san-francisco/sessions -->
# The Missing Protocol: Purpose-Built, Event-Driven Agents with MCP

**Conference:** Current 2026 San Francisco  
**Date:** 2026-11-04  

A presentation at Current 2026 San Francisco in
                    November 2026 in
                    San Francisco, CA, USA by 
                    {{ site.speaker.display_name | default: site.speaker.name }} and Sean Falconer

## Abstract

Agents are the new apps, and most teams are building them the way we once built monoliths: one agent, one ever-growing prompt, every tool, and a context window that pays for every task at once. This session shows how to fix that the way we fixed monoliths. Build small, purpose-built, closed-world agents, each with its own context and a typed result, and let them talk through event streams instead of direct calls. MCP is how each specialist reaches live data in Kafka, Flink, and Schema Registry with a small, scoped set of tools, shown live with the Brewmaster, a multi-agent system that runs a craft brewery's streaming platform. But access is not competence: an Agent Skill plus a critic is what turns a well-connected agent into one you can trust to run without you.

## Resources

- [Model Context Protocol specification](https://modelcontextprotocol.io)
- [Confluent MCP server (@confluentinc/mcp-confluent)](https://github.com/confluentinc/mcp-confluent)
- [Confluent Agent Skills](https://github.com/confluentinc/agent-skills)
- [Demo: the Brewmaster agent (tui-kafka-agent)](https://github.com/gAmUssA/tui-kafka-agent)
- [Streaming Agents on Confluent Cloud](https://docs.confluent.io/cloud/current/ai/streaming-agents/overview.html)
- [Real-Time Context Engine](https://docs.confluent.io/cloud/current/ai/real-time-context-engine/overview.html)
