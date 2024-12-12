---
title: "SocNetV v1.9 released - Bug Fixes and Speed Increase"
date: 2015-06-23
description: "SocNetV v1.9 introduces bug fixes, a faster matrix inverse routine, and revamped PageRank Prestige algorithm."
image: "https://socnetv.org/data/uploads/screenshots/18/socnetv_1_8-random-net-sw-1.jpg"
tags: 
  - PageRank
  - Social Network Analysis
  - Matrix Inversion
  - Bug Fixes
  - LU Decomposition
---

The Social Network Visualizer project has just released version **1.9**, which fixes many important bugs and brings a faster matrix inverse routine. Source code, Windows zipped executables, Mac OS image, and binary packages for major Linux distributions are as always available from the [Downloads](https://socnetv.org/downloads/) page.

### Key Improvements

- **Faster Matrix Inverse Routine**:  
  The matrix inverse algorithm now uses LU decomposition, greatly improving computation speed. This enhancement also affects the **Information Centrality** algorithm, which now runs in **1/10th** of the time required in earlier SocNetV versions.

- **Revamped PageRank Prestige Algorithm**:  
  Up to version 1.8, the PageRank algorithm used the original Page & Brin formula, leading to different results. Starting from this version, SocNetV [uses the correct formula](https://socnetv.org/manual/analysis) and computes comparable results. Additionally, the initial PageRank score of each node is now set to **1/N**.

### Closed Bugs in Version 1.9

- **#1463069**: Wrong average distance when there are isolates.
- **#1365037**: Certain sparse matrices crash SocNetV on the invertMatrix method.
- **#1365582**: CentralityInformation() is slow when network size \(N > 100\).
- **#1463095**: Edge filter works but the user cannot undo.
- **#1464422**: Incorrect PageRank results.
- **#1464430**: SocNetV refuses to read Pajek files not starting with `*Network`.
- **#1465774**: Edges do not always follow relations.
- **#1463082**: Edge color change does not take effect.
- **#1464418**: SocNetV crashes during PageRank computation on isolated nodes.

With these enhancements and fixes, SocNetV v1.9 ensures faster and more reliable performance for your social network analysis tasks.
