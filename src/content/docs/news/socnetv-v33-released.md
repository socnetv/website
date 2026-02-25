---
title: "SocNetV v3.3 Released"
date: 2026-02-25
description: "SocNetV v3.3 delivers a major internal Graph refactor, a stabilized DistanceEngine with regression & performance guardrails, a new socnetv-cli harness, and many fixes."
tags: ["release", "refactor", "cli", "distance", "bugfixes", "qt"]
---

![SocNetV v3.3 Screenshot](/data/uploads/screenshots/33/socnetv-33-Zachary_Karate_Club-34n-156e-kw-ic-layout.webp)

### SocNetV v3.3 released! 🎉

We are excited to announce the release of **SocNetV v3.3**, the latest version of our cross-platform social network analysis and visualization software.

This release focuses on **robustness and long-term maintainability**, with major improvements under the hood — while also adding a useful new feature for researchers working with centrality and prestige.

### 🔍 What’s New in SocNetV v3.3?

**🧱 Major internal refactor: Graph is now a façade**
SocNetV’s `Graph` has been refactored into a **façade/coordinator**, with functionality split into focused modules under `src/graph/*`.  
This makes the codebase easier to extend and safer to evolve without breaking behavior.

**📏 DistanceEngine stabilized + deterministic regression guardrails**
We extracted and stabilized **DistanceEngine**, and added:
- deterministic “golden” regression outputs
- **performance benchmark guardrails** to help keep refactors honest over time

**🧪 New headless regression harness: `socnetv-cli`**
v3.3 introduces **`socnetv-cli`**, a modular regression harness designed to protect algorithmic correctness during refactors.
It supports schema-versioned JSON outputs and committed baselines, with kernels for:
- distance (v1)
- reachability (v2)
- walks matrix (v3)
- prominence (v4)

**🎯 New feature: filter vertices by centrality & prestige indices**
You can now filter vertices based on their **centrality and prestige** scores — a great way to focus analysis on the most important actors in your networks.

![filter vertices by centrality](/data/uploads/screenshots/33/socnetv-33-node-filtering.webp)

**📥 Import / parsing fixes**
A lot of edge cases were fixed to make importing more reliable:
- Pajek mixed files with overlapping *Arcs/*Edges blocks
- UCINET/DL edge cases (line wrapping, diagonal handling)

**🧮 Walks computation fixes**
Fixes in `walksBetween()` and walks-matrix parameters improve correctness and consistency of walk-based measures.

**🛠 Build, packaging, and UI polish**
- cross-platform build & packaging fixes (Qt6/CMake, Debian packaging updates, openSUSE spec fixes, macOS arm64 linker fix)
- UI polish for disabled widgets and checkbox/radio styling

---

We’d like to thank our contributors and users for reporting issues, suggesting features, and helping SocNetV improve with every release. 🙏

Download SocNetV v3.3 from our [Download page](https://socnetv.org/downloads/) and let us know what you think!

Happy analyzing!  
— The SocNetV Team