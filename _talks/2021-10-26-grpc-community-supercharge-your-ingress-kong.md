---
layout: talk
---

<!-- Source: https://speaking.gamov.io/YCD6Fb/supercharge-your-ingress-with-kong -->
# Supercharge your Ingress with Kong

**Conference:** gRPC Community Meetup  
**Date:** 2021-10-26  
**Slides:** [View Slides](https://drive.google.com/file/d/1p6SKNEf_8QmksDzMCpAjxqAjbYTukUz1/view)  
**Video:** [Watch Video](https://www.youtube.com/watch?v=vKT5McAKfBQ)  

A presentation at gRPC Community Meetup by 
                    {{ site.speaker.display_name | default: site.speaker.name }}

## Abstract

Have you ever find yourself in a situation when all your services are running in Kubernetes, and now you need to expose them to the outside world securely and reliably? Viktor Gamov will introduce the Kubernetes Ingress and how you can use it in gRPC applications. He will talk about the Kong Ingress Controller (KIC), an open-source implementation of the Kubernetes Controller that can be installed and managed precisely as any other Kubernetes resource. You will learn how to easily expose Kubernetes services to the outside world with KIC. During this talk, you will learn about the vast plugin ecosystem of Kong Gateway to declaratively enable security, API rate limiting, and native gRPC support!

## Resources

- [Demo app](https://github.com/Kong/demo-scene/tree/main/quotes-service)
