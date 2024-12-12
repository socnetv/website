---
title: "SocNetV 1.5 Released"
date: 2014-10-10
description: "SocNetV v1.5 introduces weighted prominence scores, standardized centrality measures, connectedness reporting, and new datasets."
tags:
  - Network Analysis
  - Prominence Scores
  - Graph Connectedness
  - Bug Fixes
  - Datasets
---

A new version of SocNetV has just been released! Version 1.5 brings standardization, [many bug fixes](https://launchpad.net/socnetv/+milestone/1.5), and exciting new features. Packages for Windows, Mac OS X, and Linux are available from the [Downloads](https://socnetv.org/downloads/) page.

### Notable New Features

- **Prominence Scores on Valued Networks**:
  - A new SSSP-solver algorithm (Dijkstra) enables prominence indices on weighted networks.
  - SocNetV asks whether to consider or invert weights, depending on their meaning (e.g., cost vs. votes).

- **Standardized Centrality and Prestige Scores**:
  - Scores are now standardized (0.0 to 1.0) where applicable.
  - If no standardized formula exists, SocNetV normalizes by dividing the original score by the sum of all scores.

- **Prominence Layouts Relative to Highest Score**:
  - Visualization layouts (circular, level, and nodal size) are now based on the highest score in the network rather than theoretical maximums.

- **Skip Isolates**:
  - Option to omit isolates when computing prominence indices.

- **Graph Connectedness**:
  - SocNetV reports if the network is connected or has isolates and suggests fixes.

- **CC Drops Isolates by Default**:
  - Automatically drops isolate nodes to compute CC scores, avoiding user interruptions.

- **New Datasets**:
  - Stephenson and Zelen (1989): Network of 40 AIDS patients.
  - Stephenson and Zelen (1989): IC test dataset (5 actors).
  - Wasserman and Faust: Star, circle, and line graphs (7 actors).

---

### Bug Fixes

The following bugs have been resolved in this release:

- #1358678: Fix GDC calculation in weighted networks.
- #379558: Force-directed algorithms produce poor layouts.
- #1365028: Methods `isOutLinked` & `setOutLinked` do not consider relations.
- #1365504: `centralityInformation()` should symmetrize the adjacency matrix.
- #1366625: Clicking on an edge does not select the correct edge.
- #1369171: Group IC calculation yields incorrect results.
- #1371208: Incorrect power centrality scores.
- #1364955: `vertices()` should report only enabled vertices.
- #1369336: Pagerank prestige reports incorrect scores.
- #1370528: SocNetV cannot build on non-x86 architectures.
- #1364320: Remove SRS PDF and fix spelling errors in code.
- #1364361: SocNetV does not remember the last directory used by the user.
- #1378346: Cannot change size and value of a node.

---

Enjoy the new features and improvements! If you spot any bugs, please [report them here](https://socnetv.org/bugs/). Have fun!
