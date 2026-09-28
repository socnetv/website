---
title: "SocNetV v3.8 Released"
date: 2026-09-28
description: "SocNetV v3.8 adds first-class signed network support — Signed Degree Centrality and PN Centrality — parallelizes several core measures for large networks, switches Graph Connectivity to a much faster algorithm, and fixes a range of precision issues on weighted and disconnected networks."
tags: ["release", "signed-networks", "centrality", "performance", "connectivity"]
---

### SocNetV v3.8 released! 🎉

We are happy to announce the release of **SocNetV v3.8**!

This release brings **first-class support for signed networks** — networks where a tie can be positive or negative, not just present or absent — with two new purpose-built centrality measures, negative-weight-safe shortest paths, and full GUI/report/CLI support. It also **parallelizes several core measures** for a real speedup on large networks and switches Graph Connectivity to a **much faster algorithm**. Read on for details.

![SocNetV v3.8 — a signed network with two internally-friendly, mutually-hostile factions, Kamada-Kawai layout](/data/uploads/screenshots/38/socnetv-38-G1__Signed_Network_Two_Factions_KK.webp)

### 🔍 What's New in SocNetV v3.8?

**➕➖ Signed Network Support**

SocNetV can now tell friend from foe. Negative edge weights are no longer just tolerated — they're first-class citizens throughout the app:

- **Negative-weight-safe shortest paths**: distance-based measures (Distance, Average Distance, Geodesic Distances Matrix) now offer to upgrade to a Bellman-Ford/Johnson's-algorithm-based computation when a network has negative weights, instead of just refusing. A reachable negative cycle is still correctly refused, since shortest paths are undefined there.
- **Signed Degree Centrality**: splits each actor's out-degree by tie sign into four scores — positive ties sent, negative ties sent, their ratio, and their net balance.
- **PN Centrality** (Everett & Borgatti, 2014): the standard purpose-built centrality measure for signed networks. The core idea: a negative tie from someone who is themselves highly prominent hurts more than one from someone marginalized — propagated through the whole network the same way Katz Centrality propagates ordinary ties. Three modes (undirected, directed-out, directed-in), each disabled or enabled automatically depending on your network's directedness.

Both measures are available from **Analyze → Centrality and Prestige indices**, the Prominence toolbox combo, and as `--interactive-script` commands for headless automation.

![SocNetV v3.8 — PN Centrality mode dialog](/data/uploads/screenshots/38/socnetv-38-N2__PN_Centrality_dialog.webp)

**⚡ Faster on Large Networks**

Several core measures now compute in parallel across all your CPU cores instead of one vertex at a time: Degree Centrality, Clustering Coefficient, Triad Census, Closeness (IR), Degree Prestige, Proximity Prestige, and four internal matrix-fill operations (shortest paths, distances, reachability, adjacency). Measured wins range from roughly 2x to over 6x on large networks, depending on the measure — Triad Census alone dropped from over a minute to about 15 seconds on a 1,000-node/10,000-edge network.

**🔗 Faster Graph Connectivity**

Graph Connectivity (κ(G)) now uses the Esfahanian-Hakimi (1984) algorithm instead of a full pairwise sweep — provably exact, same results, dramatically fewer computations. A synthetic network that previously hung for over 30 minutes now completes in about 9 seconds.

---

### 🛠 Other Improvements

- More accurate Betweenness, Stress, and Eccentricity Centrality, diameter, and average distance on weighted networks.
- Hierarchical clustering now handles isolated vertices correctly and gained a true UPGMA linkage method alongside the existing WPGMA one.
- Similarity/Pearson reports no longer produce NaN on small networks.
- DL and Adjacency format parsers no longer silently drop negative-weight edges on import.
- Several memory leaks in `Matrix` operations fixed.

See the [CHANGELOG](https://github.com/socnetv/app/blob/master/CHANGELOG.md) for the complete list.

---

Download SocNetV v3.8 from our [Downloads page](/downloads) and let us know what you think!

Happy analyzing!
— The SocNetV Team
