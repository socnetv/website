---
title: "SocNetV 2.4 Released"
description: "SocNetV version 2.4 has been released."
date: 2018-02-28
---

![SocNetV 2.4 Screenshot](/data/uploads/screenshots/24/socnetv-24-1000-actors-small-world-betweenness-radial-nodesize-nodecolor.png)

### Description

The **Social Network Visualizer** project released today a brand new version of our favorite social network analysis and visualization software application. **SocNetV version 2.4**, released on **Feb 28**, is a major upgrade bringing lots of new features. The new version is available for **Windows**, **macOS**, and **Linux** from the [Downloads](http://socnetv.org/downloads/) page.

### New Features and Improvements

- **Kamada-Kawai Layout Model**:
  This model treats the network as a dynamic system where actors are connected by "springs." The layout optimizes the graph based on spring energy, minimizing the imbalance between desired and actual distances.

  ![Kamada-Kawai Layout](http://socnetv.org/data/uploads/screenshots/24/socnetv-24-62-actors-degree-centr-nodecolor-kamada-fdp.png.png)

- **Node Colors by Prominence Score Visualization**:
  In this version, SocNetV can visualize the prominence score of each actor by changing their color. The color reflects how important the actor is in the network, with red indicating high prominence and blue indicating lower prominence.

  ![Node Color by Prominence](http://socnetv.org/data/uploads/screenshots/24/socnetv-24-327-actors-proximity-centr-radial-nodecolor-zoom.png)

- **Reciprocated Edges in Directed Networks**:
  SocNetV now displays reciprocated edges in a single line with two arrows instead of two separate lines, reducing memory consumption and making the visualization more appealing.

  ![Reciprocated Edges](http://socnetv.org/data/uploads/screenshots/24/socnetv-24-10-actors-edge-label-node-label-kamada-fdp.png)

- **Improved Memory Consumption**:
  The new version optimizes memory usage when loading large networks, improving performance for graphs with more than 2,000 edges.

- **Web Crawler Improvements**:
  The web crawler dialog and algorithm have been enhanced with new options, including the ability to specify link patterns to include/exclude and control the delay between requests.

  ![Web Crawler](http://socnetv.org/data/uploads/screenshots/24/socnetv-24-web-crawler-dialog.png)

- **Improved Statistics Panel**:
  The statistics panel now uses simpler text to display statistics more efficiently. It also shows edge direction weights for reciprocated edges in directed networks.

- **Performance Options in Settings**:
  New performance options in the Settings dialog allow you to enable/disable features of the Qt GraphicsView, such as anti-aliasing and edge highlighting. Disabling certain options can significantly boost performance for large networks.

  ![Performance Options](http://socnetv.org/data/uploads/screenshots/24/socnetv-24-performance-options-settings.png)

- **Improved UCINET Format Support**:
  SocNetV now supports reading two-mode UCINET files formatted in fullmatrix. These files declare both NR (nodes) and NC (columns) variables.

- **Improved Stability**:
  Many bugs have been fixed, and random crashes were resolved. Below are some of the bugs that were fixed:

  - #40: Wrong BC scores in weighted networks
  - #54: Incorrect edge weight after user confirmation
  - #38: Disabling isolate nodes not reflected in distance matrix report
  - #41: Incorrect variance in clustering coefficient
  - #33: Missing Radial/Level Layout by Eigenvector Centrality
  - #48: Eccentricity scores for isolated nodes
  - #34: No menu options for Node Size layout by Prominence index
  - #56: Edge offset issues when resizing nodes
  - #46: Crashes after disabling isolated nodes in distance matrix
  - #42: Improved progress dialogs
  - #44: Crash when searching after node removal
  - #51: Web crawler crashes fixed
  - #60: Incorrect file extension when saving famous datasets
  - #61: "Save As" issue with GraphML format
  - #62: EdgeList1 formatted UCINET files not recognized
  - #63: Two-mode UCINET files unsupported
  - #65: Crashes in HCA with ill-defined input matrices
  - #36: HCA crashes with isolated nodes
  - #49: Connectedness method issues
  - #47: Extra columns in adjacency matrix report

### Availability

**SocNetV v2.4** is now available for **Windows**, **macOS**, and **Linux**. Go to the [SocNetV Downloads page](http://socnetv.org/downloads/) to get it!
