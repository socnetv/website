---
title: "SocNetV v1.8 Released with Scale-Free Network Generator"
date: 2015-06-05
description: "SocNetV v1.8 introduces a new clique computation routine, scale-free network generator, and improvements in random network generation."
image: "https://socnetv.org/data/uploads/screenshots/18/socnetv_1_8-random-net-clique-census-3.jpg"
tags: 
  - Scale-Free Networks
  - Barabási–Albert Model
  - Random Networks
  - Clique Census
  - Erdős–Rényi
  - Small-World Networks
---

A new version of SocNetV has just been released with a couple of nice new features.

### Clique Computation Routine
SocNetV v1.8 includes a revamped **clique computation routine** with an updated report. The new **"clique census"** report provides:

- Aggregate counts of cliques (up to clique number 4).
- Disaggregation by vertex and co-membership information.

![Clique Census Example](https://socnetv.org/data/uploads/screenshots/18/socnetv_1_8-random-net-clique-census-3.jpg)

### Scale-Free Network Generator
This version introduces the ability to generate **scale-free random networks/graphs** using the **Barabási–Albert (BA) model**, which employs a preferential attachment mechanism.

The algorithm starts with \( m_0 \) connected nodes (default: 1). At each step, a new node is added with \( m \) edges to existing nodes. The probability \( p_i \) that the n
