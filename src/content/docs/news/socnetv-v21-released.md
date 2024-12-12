---
title: "SocNetV v2.1 Released!"
date: 2016-09-29
tags: ["release", "pagerank"]
description: "SocNetV v2.1 introduces faster and more accurate network analysis, a new d-regular random network generator, improved UCINET format support, and many bug fixes."
image: "https://socnetv.org/data/uploads/screenshots/21/socnetv-2.1-38-actors-heart.jpg"
---

Today is a wonderful day because we are happy to announce that a brand-new version of our favorite social network analysis and visualization software application has been released. **SocNetV version 2.1**, released on **September 28, 2016**, has the codename **"fixer"** and is available for **Windows**, **Mac OS X**, and **Linux** from the [Downloads](https://socnetv.org/downloads/) page.

---

## What's New in SocNetV v2.1?

### Faster and More Accurate Network Analysis Computation

- Improved algorithms for social network analysis allow most metrics to be computed simultaneously. The results are saved and reused during the session, recalculating only when nodes, edges, or weights are modified.
- Fixed metrics like **PageRank Prestige (PRP)** and **Average Graph Distance (AGD)** now produce accurate results.

---

### New d-Regular Random Network Generator

- The **d-regular network generator** has been rewritten and now generates both directed and undirected **d-regular random networks** without errors.

---

### Improved UCINET Format Support

- **Fullmatrix format** is now supported again. SocNetV already supports the **edgelist format**, ensuring compatibility with more datasets.

---

### Better Network Visualization

- Fixed issues with node and edge stacking on the canvas.
- Corrected the display of edges with large weights to prevent overly thick lines.

---

## Bug Fixes

- **#1624561**: Network files with both arcs and edges are loaded as solely undirected nets.
- **#1622889**: The d-regular generator does not produce random networks.
- **#1623812**: After loading a new network file, the app behaves as if the network has changed.
- **#1624583**: UCINET `.dl` files crash the app.
- **#1624750**: Random new nodes can be drawn out of the canvas.
- **#1625831**: Removing an edge in undirected graphs does not update the node outDegree.
- **#1627390**: Wrong PageRank Prestige results in undirected nets.
- **#1627721**: Incorrect average graph distance metric in disconnected networks.
- **#1628382**: Edges with very large weights are drawn with huge line widths.
- **#1627213**: Crashes when double-clicking on a target node after deleting the source node.
- **#1628170**: Edge labeling with HTML special characters breaks GraphML files.
- **#1622891**: Highlighted edges should have a larger z-index.
- **#1624352**: The "Change Edge Color" dialog does not display the current edge color.
- **#1624360**: Default edge color and node shape are incorrect in Edit menu dialogs.
- **#1628395**: Incorrect z-value of nodes and edges caused cluttering.

---

Download SocNetV v2.1 today and, as always, have fun with your social network analysis projects!
