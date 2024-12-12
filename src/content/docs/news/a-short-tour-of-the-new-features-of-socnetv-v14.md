---
title: "A Short Tour of the New Features in SocNetV v1.4"
date: 2014-09-03
description: "Explore the latest features and updates in SocNetV v1.4, including multirelational editing, memory optimizations, and new datasets."
tags:
  - SocNetV
  - v1.4
  - multiple relations
  - multirelational editing
  - Freeman's EIES networks
---

Over the last weeks, the **Social Networks Visualizer (SocNetV)** project has released two new versions that bring useful features and bugfixes. The latest **v1.4** closes even 4-year-old bugs!

![SocNetV v1.4: Erdos-Random-Social-Network](http://dimitris.apeiro.gr/wp-content/uploads/2014/09/socnetv-v1.4-erdos-random-social-network.jpg)  
*SocNetV v1.4: Erdos-Random-Social-Network*

## Multirelational Editing

One of the strongest new features in SocNetV v1.4 is **multirelational editing**. Now, you can:

1. Load or create a network (e.g., friendship ties in a classroom).
2. Add a new relation (e.g., "likes") using **Ctrl+Shift+N** or the `+` button.

![SocNetV v1.4: Friendship Network](http://dimitris.apeiro.gr/wp-content/uploads/2014/09/socnetv-v1.5-20-kids-classroom-social-network-friendship.jpg)  
*SocNetV v1.4: Classroom Social Network - Friendship*

Easily switch between relations, analyze, and visualize them. For example, apply a **circular layout** based on **Betweenness Centrality** to one relation and compare it with another relation's **node size** visualization.

![Betweenness Centrality Visualization](http://dimitris.apeiro.gr/wp-content/uploads/2014/09/socnetv-v1.5-20-kids-classroom-social-network-friendship-new-relation-betweennes-circular-layout.jpg)  
*Betweenness Centrality Visualization in a Circular Layout*

## Loading and Saving Multirelational Networks

- SocNetV now supports loading **multirelational networks** (e.g., UCINET formatted files).
- However, when saving, each relation must be saved individually. This will be improved in future versions.

For example, you can test this feature with the **Freeman’s EIES networks dataset**.

![Freeman's EIES Networks](http://dimitris.apeiro.gr/wp-content/uploads/2014/09/socnetv-v1.4-freeman-EIES-networks-multirelational-open.jpg)  
*SocNetV v1.4: Freeman's EIES Networks*

## Memory Optimizations

SocNetV v1.4 is optimized for low memory consumption and speed:

- Handles networks with **1000 actors and 10,000 edges** in seconds.
- Consumes less than **400MB RAM**.

![Random Erdos-Renyi Network](http://dimitris.apeiro.gr/wp-content/uploads/2014/09/socnetv-v1.4-random-erdos-renyi-1000-actors-40000-edges-betweenness-circular-nodal-layout.jpg)  
*Random Erdos-Renyi Network with 1000 actors and 40,000 edges.*

## Additional Enhancements

- Improved **visualization layouts** (circular and nodal size based on prominence indices).
- Faster analysis of large datasets with new tools like **Triad Census** and **Geodesic Matrix**.

![Geodesic Matrix Analysis](http://dimitris.apeiro.gr/wp-content/uploads/2014/09/socnetv-v1.6-freeman-EIES-networks-multirelational-geodesics.jpg)  
*Geodesic Matrix Analysis*

## Bugs Fixed

Version 1.4 addresses several bugs (see the [ChangeLog](https://socnetv.org/ChangeLog)) and introduces stability improvements. However, testing and feedback are always welcome to ensure the best user experience.

---

Download the latest version from the [SocNetV Downloads page](https://socnetv.org/downloads) and enjoy exploring your networks!
