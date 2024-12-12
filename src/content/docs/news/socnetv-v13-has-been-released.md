---
title: "SocNetV v1.3 Released!"
date: 2014-08-27
description: "SocNetV v1.3 introduces support for multirelational networks, memory and speed optimizations, and improved UCINET import functionality."
tags:
  - Multirelational Networks
  - Memory Optimization
  - UCINET Import
  - Network Visualization
---

A new version of **Social Network Visualizer** is available! SocNetV v1.3 introduces significant features, bug fixes, and optimizations.

---

### New Features

- **Multirelational Networks**:
  - SocNetV now supports networks with multiple types of ties between actors.
  - When creating the first link, SocNetV prompts the user to name (or label) the new relation.
  - Additional relations can be added by pressing the `+` button in the toolbar.
  - Switch between relations using the arrow buttons in the toolbar.

  ![Example Multirelational Network](https://socnetv.org/data/uploads/screenshots/socnetv-1.3-linux-sampson-dataset.jpg)

- **Home Directory for Data**:
  - All reports and data are now saved to `$HOME/socnetv-data`.

---

### Optimizations

- **Memory and Speed Improvements**:
  - SocNetV can handle networks with up to 1,000 actors and 10,000 edges efficiently.
  - Uses under 400MB of RAM for such networks, with significantly improved performance.

- **UCINET Import Fixes**:
  - Enhanced UCINET import functionality now supports multiple matrices.

---

### Downloads

Source code, packages, and executables for Linux, Mac OS X, and Windows are available on the [Downloads](https://socnetv.org/downloads/) page.

---

Enjoy the new version of SocNetV!
