---
title: "SocNetV v1.7 Released with Lots of Goodies!"
date: 2015-05-20
description: "SocNetV v1.7 introduces a new Node Properties dialog, group editing, a File Previewer, and numerous enhancements."
tags: 
  - Node Properties
  - Group Editing
  - File Previewer
  - GraphML
  - UTF-8 Encoding
---

A new SocNetV release hit the road today. Version 1.7 solves a number of bugs and brings lots of interesting and useful new features to our users. Binaries for Windows, Mac, and Linux are already available on the project’s [Downloads](https://socnetv.org/downloads/) page. Here’s what’s new...

### New Node Properties Dialog
Up to now, editing a node required selecting each property individually (e.g., color, label). In version 1.7, a new **Node Properties** dialog consolidates all node editing options in one place. Simply right-click a node and select "Node Properties" (or press `Ctrl+X, Ctrl+P`).

![Node Properties Dialog](https://socnetv.org/data/uploads/screenshots/17/socnetv-1.7-node-properties.png)

In the Node Properties dialog, you can:
- Enter a label.
- Adjust the node size.
- Edit the node color.
- Choose a node shape (e.g., rectangle, circle).

Changes are applied in one step and previewed live on the canvas. For instance, selecting the color button brings up a **Colors dialog** for easy color selection:

![Colors Dialog](https://socnetv.org/data/uploads/screenshots/17/socnetv-1.7-node-properties-color.png)

---

### Group Node Editing
SocNetV v1.7 introduces the ability to **select and edit multiple nodes simultaneously**. Select nodes by left-clicking and dragging to draw a selection rectangle. Then, right-click on a selected node or the canvas to open the context menu and choose "Node Properties."

![Group Node Selection](https://socnetv.org/data/uploads/screenshots/17/socnetv-1.7-group-select-nodes-left-click-and-hold.png)

The dialog is identical to the single Node Properties dialog, but changes apply to all selected nodes. If you label multiple nodes, SocNetV appends the node number to each label:

![Group Node Labeling](https://socnetv.org/data/uploads/screenshots/17/socnetv-1.7-group-properties-labeling-multiple-nodes1.png)

---

### Select All and Select None
New shortcuts make it easier to select all nodes (`Ctrl+A`) or deselect all nodes (`Ctrl+Shift+A`).

![Select All Shortcut](https://socnetv.org/data/uploads/screenshots/17/socnetv-1.7-select-all-select-none-new-keyboard-shortcuts-and-menu-streamlining.png)

---

### File Previewer
A major improvement in v1.7 is the introduction of a **Network File Previewer**, addressing issues with loading files saved in different codepages (e.g., non-Latin characters). The previewer allows users to select the correct encoding before loading the file.

![File Previewer](https://socnetv.org/data/uploads/screenshots/17/socnetv-1.7-previewer.png)

With the File Previewer, users can:
- Preview the file in various encodings.
- Ensure proper display of all characters before loading.

![Preview Encodings](https://socnetv.org/data/uploads/screenshots/17/socnetv-1.7-previewer1.png)

Press "OK" to load the file and display the network on the canvas:

![File Loaded](https://socnetv.org/data/uploads/screenshots/17/socnetv-1.7-previewer3.png)

#### Notes on Encoding
- **Linux/Mac**: Use UTF-8, except when loading files saved in Windows.
- **Windows**: Use Windows-1253 for most cases or KOI8-R for Russian characters.
- **Default**: SocNetV saves files in UTF-8 by default.

---

### Bug Fixes and Changelog
SocNetV v1.7 resolves several bugs and introduces many improvements. For a full list of changes, visit the [ChangeLog](https://socnetv.org/ChangeLog).

If you spot a bug, report it [here](https://socnetv.org/bugs/). Feature requests are welcome on our [blueprints listing](https://blueprints.launchpad.net/socnetv).

Enjoy version 1.7!
