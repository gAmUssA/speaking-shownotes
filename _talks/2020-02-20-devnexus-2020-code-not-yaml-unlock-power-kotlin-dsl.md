---
layout: talk
---

<!-- Source: https://speaking.gamov.io/AYL7g5/do-it-in-code-not-yaml-unlock-power-of-kotlin-dsl-for-kubernetes -->
# Do it in code (not YAML)! Unlock power of Kotlin DSL for Kubernetes

**Conference:** DevNexus 2020  
**Date:** 2020-02-20  
**Slides:** [View Slides](https://drive.google.com/file/d/1i8O1mPn0M4mN7roJoPuGdELXYy3Czj61/view)  
**Video:** [Watch Video](https://www.youtube.com/watch?v=--AIZUTMVLI)  

A presentation at DevNexus 2020 in
                    February 2020 in
                    Atlanta, GA, USA by 
                    {{ site.speaker.display_name | default: site.speaker.name }}

## Abstract

When it comes to deploying applications at scale without needing to integrate different pieces of infrastructure yourself, the answer nowadays is increasingly Kubernetes. While Kubernetes does provide all the building blocks and deployment tools, much thought is required to truly deployment pipelines to use in production. Configuring your builds with things like YAML may be tedious and error-prone. What if you can use the power of Kotlin’s type system and compile-time checks while building your deployments! In this interactive and code-driven session Viktor teach you how to use Kotlin DSL for Kubernetes to configure your deployments (including custom resource definitions like Kafka CRD).

## Resources

- [Code of demo app](https://gamov.dev/devnexus-dsl-2020)
- [Kubernetes Kotlin DSL](https://github.com/fkorotkov/k8s-kotlin-dsl)
