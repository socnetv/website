---
title: "SocNetV v1.4 Released!"
date: 2014-09-01
description: "SocNetV v1.4 introduces node size layouts based on prominence scores, support for UCINET edgelist1 format, and new datasets."
tags:
  - SocNetV
  - Network Analysis
  - Prominence Scores
  - UCINET Format
  - Freeman's EIES
  - Bug Fixes
---

Today is a fine day to release another SocNetV update. Version 1.4 brings consistency to the application by fixing many long-standing bugs (e.g., [#514264](https://bugs.launchpad.net/socnetv/1.x/+bug/514264) and [#713617](https://bugs.launchpad.net/socnetv/1.x/+bug/713617)) and adding exciting new features.

### New Features

- **Node Size Layouts Based on Prominence Scores**:
  - SocNetV can now adjust node sizes to reflect a selected prominence index score.
  - This feature supports all indices calculated by SocNetV, including Degree, Closeness, Influence Range Closeness, Betweenness, PageRank, Proximity, Eccentricity, and Power.

- **Support for UCINET Edgelist1 Format**:
  - SocNetV can now import edgelist1 UCINET format, for example:

```plaintext
dl
N=48
format=edgelist1
data:
1 2 4
1 3 2
1 6 2
1 8 2
```


- **Updated Shortcuts for Node and Edge Removal**:
  - Node removal: `Ctrl+Backspace`
  - Edge removal: `Shift+Backspace`
  - You can also click on a node and press `Ctrl+Backspace` to remove it.

- **New Dataset**:
  - Freeman's EIES networks are now included:
    - Multirelational mode: 32 actors.
    - Single relation mode: 48 actors.

---

### Bug Fixes

This release addresses many longstanding issues, enhancing stability and usability. See the complete [ChangeLog](https://socnetv.org/ChangeLog) for more details.

---

### Downloads

Source code, packages, and executables for Linux, Mac OS X, and Windows are available on the [Downloads](https://socnetv.org/downloads/) page.

---

Have fun!
