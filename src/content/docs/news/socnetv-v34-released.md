---
title: "SocNetV v3.4 Released"
date: 2026-03-11
description: "SocNetV v3.4 brings a comprehensive Cancel/progress overhaul, major parser fixes, improved force-directed layouts, and a completed IO/Parser architectural refactor."
tags: ["release", "bugfixes", "layouts", "parser", "progress", "qt"]
---

![SocNetV v3.4 Screenshot](/data/uploads/screenshots/34/socnetv-34-RandomER_N100-E182.webp)

### SocNetV v3.4 released! 🎉

We are happy to announce the release of **SocNetV v3.4**, the latest version of our cross-platform social network analysis and visualization software.

This release focuses on **stability and correctness**, with a comprehensive overhaul of progress/cancel handling across all computation paths, significant parser and layout fixes, and the completion of the IO/Parser architectural refactor started in v3.3.

### 🔍 What's New in SocNetV v3.4?

**⏹ Comprehensive Cancel support in progress dialogs (#52)**

This has been one of the longest-standing issues in SocNetV. In v3.4, the Cancel button in progress dialogs now works **correctly and consistently** across all computation paths:

- Centrality and prestige computations
- Reachability and walks
- Matrix and report generation
- Layout algorithms (including Kamada-Kawai)
- Clique census and subgraph construction
- All random network generators (Erdős–Rényi, Small-World, Scale-Free, Regular, Lattice, Ring-Lattice)

**📐 Force-directed layout fixes**

- Fixed division-by-zero, NaN/Inf, and logic errors in the **Kamada-Kawai** layout (#198)
- Fixed **Fruchterman-Reingold** simmering temperature derivation from canvas size (#199)
- Faithful reimplementation of the **Eades (1984) Spring Embedder** (#207)
- Batched node position emissions in all force-directed layouts for smoother rendering (#205, #206)

**📥 Parser and IO fixes**

Many import/export edge cases resolved:

- Pajek `*Matrix` header parsing for relation labels (#188)
- Pajek multirelational export as `*Matrix` blocks (#184)
- Normalized quoted relation names in Pajek headers (#185)
- Inline GML node/edge block parsing (#186)
- Arc doubling when loading undirected DOT graphs (#187)
- Platform-dependent `weighted=true` from uninitialized variable in DOT parser (#189)
- Two-mode sociomatrix import now correctly handled in the parser (#15)

**📊 Centrality fixes**

- Fixed eigenvector centrality isolate reset and N==0 handling (#202)
- Fixed Information Centrality isolate handling and degenerate cases (#201)
- Fixed clustering coefficient computation for directed networks (#58)
- Fixed wrong weighted flag when switching relations (#82)

**🏗 Completed IO/Parser refactor (WS4)**

The architectural refactor of the IO/Parser layer, started in v3.3, is now complete:

- The monolithic `parser.cpp` (~5500 LOC) has been split into focused per-format modules: edgelist, adjacency, UCINET DL, DOT, GML, Pajek, GraphML
- An explicit `IGraphParseSink` mutation surface replaces the old Qt signal fan-out
- GUI and headless (`socnetv-cli`) loading paths now share an identical, deterministic mutation pipeline

**🧪 Expanded regression harness**

- New `io_roundtrip` kernel (schema v5) for IO/parser regression protection
- Many new golden comparison cases and small deterministic test networks
- New helper scripts: `run_io_roundtrip_shipped_datasets.sh`, `run_golden_io_roundtrip.sh`

**🌐 i18n**

- Added `update_translations.sh` script for maintainers
- Updated DE and ES translation files

**🛠 Build and packaging**

- Debian packaging switched to CMake build system
- RPM spec updated for CMake (Fedora, openSUSE, Mageia)
- CMake now generates `.qm` translation files via `qt_add_lrelease`

---

We'd like to thank our contributors and users for reporting issues, testing fixes, and helping SocNetV improve with every release. 🙏

Download SocNetV v3.4 from our [Download page](https://socnetv.org/downloads/) and let us know what you think!

Happy analyzing!  
— The SocNetV Team