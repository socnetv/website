---
title: "Bugs"
description: "Learn about the supported network data formats in SocNetV."
---

import Mermaid from "../../components/Mermaid.astro";

## Supported Formats

SocNetV supports the following network data formats:

- **GraphML** (.graphml or .xml)
- **GML** (.gml or .xml)
- **GraphViz** (.dot)
- **Adjacency Matrix** (.sm, .adj, or .csv)
- **Pajek** (.net, .paj, or .pajek)
- **UCINET's Data Language** (.dl)
- **Edge List** (.lst or .list)
- **Weighted Lists** (.wlst or .wlist)

The default network data format for saving new networks is **GraphML**.

> **Warning**: If you create a new network and press `Ctrl+S` to save it, SocNetV will try to save it in GraphML format by default.

### Loading and Importing Files

- **GraphML** files can be loaded directly using `File > Load` or specified via the command line.
- For other formats, use `File > Import`.

> **Note**: Pajek and UCINET support is not complete. Read below for more details.

---

## GraphML Format

GraphML files are XML-based and define a graph. Below is an example of a GraphML file with 11 nodes and 12 edges:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<graphml xmlns="http://graphml.graphdrawing.org/xmlns"  
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://graphml.graphdrawing.org/xmlns
     http://graphml.graphdrawing.org/xmlns/1.0/graphml.xsd">
  <graph id="G" edgedefault="undirected">
    <node id="n0"/>
    <node id="n1"/>
    <node id="n2"/>
    <node id="n3"/>
    <node id="n4"/>
    <node id="n5"/>
    <node id="n6"/>
    <node id="n7"/>
    <node id="n8"/>
    <node id="n9"/>
    <node id="n10"/>
    <edge source="n0" target="n2"/>
    <edge source="n1" target="n2"/>
    <edge source="n2" target="n3"/>
    <edge source="n3" target="n5"/>
    <edge source="n3" target="n4"/>
    <edge source="n4" target="n6"/>
    <edge source="n6" target="n5"/>
    <edge source="n5" target="n7"/>
    <edge source="n6" target="n8"/>
    <edge source="n8" target="n7"/>
    <edge source="n8" target="n9"/>
    <edge source="n8" target="n10"/>
  </graph>
</graphml>
```


## GML Format

The **Graph Modeling Language (GML)** is a widely-used, text-based file format for describing graphs. It supports defining nodes, edges, and graph-level attributes. SocNetV supports importing and exporting GML files.

---

### GML File Structure

A GML file consists of nested key-value pairs in a hierarchical structure. Each graph contains:

1. **Graph Properties**: Settings that apply to the entire graph.
2. **Nodes**: The elements representing entities or actors in the network.
3. **Edges**: The connections between nodes.

### Example of a GML File

Below is an example of a GML file for an undirected graph with three nodes and two edges:

graph TD;
  A["Node A"] -->|1.5| B["Node B"];
  B -->|2.0| C["Node C"];



```gml
graph [
  comment "This is a sample GML file"
  directed 0
  node [
    id 1
    label "Node A"
  ]
  node [
    id 2
    label "Node B"
  ]
  node [
    id 3
    label "Node C"
  ]
  edge [
    source 1
    target 2
    weight 1.5
  ]
  edge [
    source 2
    target 3
    weight 2.0
  ]
]
```

