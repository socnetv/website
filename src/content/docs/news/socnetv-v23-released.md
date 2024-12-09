---
title: "SocNetV 2.3 Released"
description: "SocNetV version 2.3 has been released."
date: 2017-07-05
---

The Social Network Visualizer project is happy to announce that a brand new version of our favorite [social network analysis and visualization software application](http://socnetv.org) has been released. SocNetV version 2.3, released on Jul 5, has the eloquent codename "fixer" and it is now available for Windows, Mac OS X, and Linux from the [Downloads](http://socnetv.org/downloads/) page.

## What the new version brings to the users?

As usual with our odd-numbered minor versions, this is a bugfix release. While v2.2 brought a lot of new and important features, v2.3 focuses on stability and fixing bugs here and there. Nevertheless, there are a couple of new features as well, which you may find interesting for your network analysis endeavors:

### Dyad and Actor/Ego Reciprocity

Reciprocity, denoted by 'r,' is a network cohesion index. It measures the likelihood of vertices in a directed network to be mutually linked. SocNetV v2.3 supports two different methods to index the degree of reciprocity in a social network:

- **Arc reciprocity**: The fraction of reciprocated ties over all actual ties in the network.
- **Dyad reciprocity**: The fraction of actor pairs that have reciprocated ties over all pairs of actors that have any connection.

In a directed network:
- Arc reciprocity measures the proportion of directed edges that are bidirectional. If the reciprocity is 1, the adjacency matrix is structurally symmetric.
- Dyad reciprocity measures the proportion of connected actor dyads that have bidirectional ties between them.

In an undirected graph, all edges are reciprocal, and the reciprocity of the graph is always 1.

You can compute reciprocity on undirected, directed, and weighted graphs from the toolbox/menu: `Analyze > Cohesion > Reciprocity`. The report is opened and displayed as usual in HTML format in your preferred web browser.

### Zero-weighted Edge Support

In ordinary SNA, zero-weighted edges are thought to be meaningless, but a user pointed out that SocNetV was accepting and drawing zero-valued edges when opening edge list formatted files. This behavior was due to a bug. 

The concept of an edge in SNA (and SocNetV) is that two actors \(i\) and \(j\) are "connected" (and an edge is drawn between them) only if there is a non-zero value at sociomatrix cell \(A(i,j)\). Thus, if \(A(i,j) = 0\), the actors are considered not directly connected, and no edge should be drawn between them.

This assumption has implications for computations: all centrality and matrix manipulation algorithms of network analysis implicitly compute their results using only non-zero (and some only positive) weighted edges. 

To accommodate users who may need this functionality for visualization purposes, we implemented support for zero-weighted edges in v2.3. This functionality currently works only for weighted edge lists and for simple visualizations.

### Zero-weighted Edge Color Selection

With the new feature above, the Settings dialog allows users to select a default edge color for zero-valued edges. Here is a screenshot:

![SocNetV v2.3 Settings Dialog](http://www.socnetv.org/data/uploads/screenshots/23/socnetv23-dialog.png)
