---
title: "SocNetV v3.0 Released"
date: 2021-06-30
description: "SocNetV version 3.0 brings performance improvements."
tags: ["release", "performance", "bugfixes", "web crawler"]
---

SocNetV v3.0 is out now! It includes several performance improvements and new features to make social network analysis easier.


![SocNetV v3.0 Screenshot](/data/uploads/screenshots/30/socnetv-3.0.2-salamanca.png)

### Description

The Social Network Visualizer project has released a brand-new version of our favorite SNA application. **SocNetV v3.0** brings improved speed and responsiveness, bug fixes, and new command line parameters.

### What's New in v3.0

- **Improved Performance**: Faster computations, as the Graph now runs on a separate thread.
- **Hardware-Accelerated Rendering**: This version is the first to support hardware-accelerated (OpenGL) rendering of the networks on the canvas. This feature is enabled by default but can be disabled in Settings.
- **Web Crawler Enhancements**: The Web Crawler has been improved to test for OpenSSL support in the OS, with user hints provided if OpenSSL is missing. Additionally, the delay between requests has been fixed.
- **Bug Fixes**: A critical bug in weighted network centrality computations has been resolved (see #123).

### Special Note

To run SocNetV v3.0 AppImage on Fedora 34 (which uses Wayland by default), use the following command:

```
env GDK_BACKEND=x11 ./SocNetV-3.0-dev-x86_64.AppImage
```

For Fedora/openSUSE users, you can get a proper package from our [OBS repos](https://download.opensuse.org/repositories/home:/oxy86/).

### Availability

The new version is available for **Windows**, **macOS**, and **Linux**. Go to the [SocNetV Downloads page](https://socnetv.org/downloads/) to get it.

