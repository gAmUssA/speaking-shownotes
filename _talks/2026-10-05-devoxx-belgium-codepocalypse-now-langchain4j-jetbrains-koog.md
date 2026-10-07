---
layout: talk
---

# Codepocalypse Now: LangChain4j vs JetBrains Koog

**Conference:** Devoxx Belgium 2026  
**Date:** 2026-10-05  
**Slides:** [View Slides](https://drive.google.com/file/d/1Cw44p6M-tvoOUVv2_czlERCOM2DT1Wv-/view)  
**Video:** [Watch Video](https://www.youtube.com/watch?v=bFeRhxfqBeU)  

A Deep Dive at Devoxx Belgium 2026 in
                    October 2026 in
                    Antwerp, Belgium by 
                    {{ site.speaker.display_name | default: site.speaker.name }} and Baruch Sadogursky

## Abstract

Can Java build a real AI agent — one that manages your calendar, reads your email, orders pizza, and remembers who you are across sessions? OpenClaw, the personal AI agent with 350K GitHub stars, proves the concept. We're going to build it twice, in Java, live on stage.

Baruch brings JetBrains Koog, Viktor brings LangChain4j. Same features, same LLM, completely different philosophies. We'll run six competitive rounds of coding, from basic agent setup through memory, tool calling, agentic workflows, guardrails, and observability. Each round surfaces a design disagreement: should memory be an Advisor or a Provider? Are agents composed services or first-class citizens? And when your guardrail framework and the model disagree, who wins?

The frameworks disagree on how AI agents should be built. The audience votes on who's right.

## Resources

- [Workshop: Building Java agents with LangChain4j](https://gamov.io/workshops/codepocalypse-langchain4j/) — seven chapters following the talk's rounds: chat, MCP tools, memory, skills, typed workflows, human approval, and observability
- [Java demo repository (LangChain4j side)](https://github.com/gamussa/jclaw-devoxx-be-2026)
- [LangChain4j documentation](https://docs.langchain4j.dev/)
- [LangChain4j agents and agentic workflows](https://docs.langchain4j.dev/tutorials/agents/)
- [LangChain4j MCP](https://docs.langchain4j.dev/tutorials/mcp/)
- [LangChain4j guardrails](https://docs.langchain4j.dev/tutorials/guardrails/)
- [LangChain4j observability](https://docs.langchain4j.dev/tutorials/observability/)
- [JetBrains Koog documentation](https://docs.koog.ai)
- [OpenClaw](https://github.com/openclaw/openclaw)
- [Baruch Sadogursky's talks](https://speaking.jbaru.ch)
