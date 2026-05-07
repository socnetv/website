---
title: "SocNetV v3.5 Released"
date: 2026-05-08
description: "SocNetV v3.5 brings powerful graph exploration filters, an ego-centered radial layout, a full node/edge attribute system, a live data table dock, and structured CSV/JSON export/import."
tags: ["release", "filters", "attributes", "layout", "export", "import", "qt"]
---

### SocNetV v3.5 released! 🎉

We are excited to announce the release of **SocNetV v3.5**, the most feature-rich release in the project's history!

This release introduces **graph exploration filters**, a new **ego-centered radial layout**, a complete **node/edge attribute system**, a live **data table dock** with inline editing, and **structured CSV/JSON export and import** — unlocking a full roundtrip workflow between SocNetV and external spreadsheet tools.

### 🔍 What's New in SocNetV v3.5?

**🔎 Graph Exploration Filters**

A new set of non-destructive, snapshot/restore filters lets you focus on the parts of the network that matter:

- **Focus on Node (Ego Network)**: hides all nodes except the selected node and its direct neighbors, and all non-incident edges. Available in the Filter menu and node right-click context menu (#211).
- **Focus on Selection**: hides all nodes not in the current selection and all edges whose endpoints are not both selected. Action `Ctrl+X, Ctrl+S` (#210).
- **Restore All Nodes**: restores all nodes hidden by any filter (ego network, selection, or centrality). Available in Filter menu and right-click context menu.
- **Restore All Edges**: re-enables all edges hidden by the weight filter. Action `Ctrl+E, Ctrl+R` (#213).
- All node-visibility filters now share a **unified non-destructive snapshot/restore history stack** — Restore All works across all filter types (#216).

**🌐 Ego-centered Radial Layout**

A new layout places a selected node at the canvas center, its 1-hop out-neighbors on an inner ring, and all remaining nodes on an outer ring. Available via the Layout menu (`Ctrl+Alt+E`) and node right-click context menu (#214).

**🏷 Node/Edge Attribute System (#224)**

SocNetV now supports arbitrary custom attributes on both nodes and edges:

- Single-key node attribute API: `Graph::vertexCustomAttributeSet()` / `vertexCustomAttributeRemove()`.
- Edge custom attribute storage and API: `Graph::edgeCustomAttributesSet()` / `edgeCustomAttributes()`.
- **Edge Properties dialog** (`DialogEdgeEdit`): edit label, weight, color, and arbitrary custom key/value pairs — accessible from the toolbar and edge right-click context menu.
- **GraphML roundtrip** for edge custom attributes: unique keys exported as `d2000+` `<key for="edge">` definitions; per-edge `<data>` tags written on save and parsed back on load.
- **Filter Nodes By Attribute**: `Graph::vertexFilterByAttribute(key, value)` — non-destructive filter available in the Filter menu (`Ctrl+X, Ctrl+A`).

**⚙️ Attribute-based Filtering (#217)**

- `FilterCondition` struct with scope (Nodes/Edges/Both), key, operator (`=` `≠` `>` `<` `≥` `≤` `contains`), and value.
- `DialogFilterByAttribute`: scope selector, editable key combo populated from the graph's existing attribute keys, operator dropdown, and free-text value field.
- `Graph::edgeFilterByAttribute(FilterCondition)`: hides edges not matching the condition, using the same snapshot/restore stack as node filters. Numeric-aware comparison (tries `toDouble()`, falls back to lexicographic).
- Filter combo added to the **Control Panel** (Network group) for one-click access to all filter actions.
- Dedicated **toolbar filter group** with distinct icons for each filter action.

**🏷 Filter Bar with Chips (#219)**

- A persistent `FilterBarWidget` strip between the toolbar and canvas; hidden when no filter is active, auto-shows when any filter is applied.
- Each active filter condition appears as a labelled **chip** (e.g. `Nodes: ego network`, `Edges: weight filter`, `Nodes: type = investor`).
- **×-close** on the most recently applied chip removes it and pops one entry from the snapshot/restore stack.
- **"Clear all"** button drains the full node filter stack and resets the edge filter in one click.
- All five filter actions emit chips: centrality, ego network, selection, attribute (Nodes/Edges/Both), and edge weight filter.

**📋 Node/Edge Data Table Dock (#225)**

- New `GraphTableWidget` dockable panel (`Ctrl+T`, Options menu and Edit menu) with two tabs — **Nodes** and **Edges** — each backed by a `QAbstractTableModel` cache.
- **Node tab**: fixed columns (#, Label, Visible, Shape, Size, Color) plus one column per custom attribute key. Label, Size, Color, and custom attribute cells are **inline-editable** (double-click).
- **Edge tab**: fixed columns (Source, Target, Relation, Weight, Label, Color) plus custom attrs. Weight, Label, Color, and custom attribute cells are editable.
- All edits write back to the graph immediately via the Graph API.
- **Live search bar** filters all columns (case-insensitive); column headers are sortable; a Refresh button reloads data from the current graph.
- Panel **auto-refreshes** on file load and graph reset when it is open.

**📤 Structured CSV/JSON Export (#226)**

- `TableExport::toCSV()` and `TableExport::toJSON()` free functions — QtCore only, no UI dependency.
- Each tab in the Data Table dock gains **Export CSV** and **Export JSON** buttons; they export the currently visible (search-filtered) rows — what you see is what you get.
- `Network → Export to other...` gains four new actions: **Nodes as CSV**, **Edges as CSV**, **Nodes as JSON**, **Edges as JSON** — these always export all rows.

**📥 Structured CSV/JSON Attribute Import (#227)**

- `TableImport::fromCSV()` and `TableImport::fromJSON()` free functions — RFC 4180 CSV parser and JSON array-of-objects parser; QtCore only.
- `DialogImportAttributes`: file-browse + 8-row preview table + column-mapping controls. Nodes scope: **ID column** selector. Edges scope: **Source** and **Target** column selectors with auto-detection of common names (`source`, `src`, `target`, `tgt`, `dest`).
- Smart column routing: editable native columns (`Label`, `Size`, `Color` for nodes; `Weight`, `Label`, `Color` for edges) are routed to their proper setters; read-only native columns are silently skipped; all other columns become custom attributes.
- Each tab in the Data Table dock gains **Import CSV** and **Import JSON** buttons; the table auto-refreshes after import.
- Enables a **full lossless export→import roundtrip**: re-importing an exported file produces no duplicate columns and no data loss.

**📊 Spreadsheet-based Bulk Attribute Editing (#232)**

Export the data table to CSV or JSON, edit it freely in any spreadsheet tool (Excel, LibreOffice, Google Sheets), and re-import to update attributes in bulk. Each node/edge can carry different values — unlike in-app bulk operations which assign one value to many.

### ⚡ Improvements

- **Fruchterman-Reingold** layout: pre-cached adjacency (O(1) edge lookup in inner loop), initial random placement, early convergence detection — significantly faster on large graphs.
- **Kamada-Kawai** layout: canvas clamping replaces random teleport on out-of-bounds particles.

### 🐛 Bug Fixes

- Fixed Kamada-Kawai crash when node filters are active.
- Fixed crash on graph reset: guard edge creation in `setEdgeVisibility` when the edge has already been removed (#231).
- Fixed visibility history stack not cleared on graph clear / `initApp`.
- Fixed custom node attribute key/id mismatch in GraphML export (#208).
- Fixed Pajek parser: use default node shape as fallback when no Pajek shape keyword is present (#179).
- Fixed `DialogClusteringHierarchical` signal/slot mismatch (#194).
- Fixed Node Properties dialog UX issues for custom attributes (#130).
- Fixed `graphTriadCensus()` appending stale zeros on repeated runs.

---

We'd like to thank our contributors and users for reporting issues, testing fixes, and helping SocNetV improve with every release. 🙏

Download SocNetV v3.5 from our [Download page](https://socnetv.org/downloads/) and let us know what you think!

Happy analyzing!  
— The SocNetV Team
