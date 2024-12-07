---
title: "Introduction"
description: "A guide to introduce SocNetV"
---

## What is Social Network Analysis?

A _Social Network_ is the social structure that facilitates communication between a group of _actors_ (individuals or organizations) that are related somehow (i.e., by common interests, shared values, financial exchanges, friendship, dislike, etc).

For instance, your friends and you form a social network.  
But social networks operate on many more levels, from family relations and disease spreading up to the level of company strategies, social movements, or even nations.

Furthermore, research in many scientific areas has shown that social networks are important when studying how problems are solved, diseases are spread, organizations are run, and the degree to which individuals succeed in achieving their goals.

_Social Network Analysis_ (SNA) is a beautiful blend of Sociology and Mathematics, composed of various interdisciplinary techniques for studying such social networks.

SNA researchers conceptualize social relationships in terms of _nodes_ and _edges_ (links) in _mathematical graphs_.

- **Nodes** represent the individual _actors_ within the networks.
- **Edges** visualize the relationships between those actors.

The result is graph-based structures, often complex to understand and analyze. This is where applications like SocNetV are needed.

---

## What is SocNetV?

Social Network Visualizer (SocNetV) is an open-source project to build a flexible and user-friendly, cross-platform [tool for social network analysis and visualization](http://socnetv.org), targeting primarily the social researcher. It is developed in C++ and Qt, an open-source development toolkit, and runs on Linux, macOS, and Windows.

### Features of SocNetV

1. **Graph Construction**  
   Use an easy-to-use GUI to construct social networks, or load networks in various formats (GraphML, GraphViz, Adjacency, EdgeList, Pajek, UCINET, GML, etc). Random networks can also be generated using models like:
   - Barabási–Albert Scale-Free
   - Erdős–Rényi
   - Watts-Strogatz Small-World  
   See more in the [Random Networks](random-networks.mdx) section.

2. **Metrics Computation**  
   Compute standard graph theory and network cohesion metrics, such as:
   - Density
   - Diameter
   - Geodesic distances
   - Clustering coefficient  
   See details in the [Cohesion Metrics](cohesion-metrics.mdx) section.

3. **Structural Statistics**  
   Analyze network centrality and prestige metrics:
   - Betweenness centrality
   - Eigenvector centrality
   - Closeness centrality
   - PageRank prestige  
   Explore these metrics in the [Centralities](centralities.mdx) section.

4. **Community Detection**  
   Use fast algorithms for detecting communities, including:
   - Triad census
   - Clique census  
   Learn more in the [Communities](communities.mdx) section.

5. **Structural Equivalence Analysis**  
   Perform hierarchical clustering, actor similarity, and tie profile dissimilarity analysis.  
   See more in [Structural Equivalence](structural-equivalence.mdx).

6. **Visualization Models**  
   Visualize networks using layout algorithms:
   - Radial
   - Level-based
   - Nodal sizes by centrality score
   - Force-directed placement (Kamada-Kawai, Fruchterman-Reingold)  
   Learn more in the [Visualization](visualization.mdx) section.

---

### Example Network Visualization

![SocNetV loaded with a 65-actor network visualized in FDP layout. Actors' colors and sizes denote their Eigenvector centrality.](https://socnetv.org/data/uploads/screenshots/25/socnetv-25-actors-65-kamada-kawai-layout-eigenvector-centrality-size-color-distribution-chart.png)

> SocNetV loaded with a 65-actor network visualized in FDP layout. Actors' colors and sizes denote their Eigenvector centrality.

---

### License

SocNetV is Free Software licensed under the [GNU General Public License 3 (GPL3)](http://www.gnu.org/copyleft/gpl.html). You can copy it as many times as you wish or modify it, provided you _keep the same license_. The documentation is also Free, licensed under the Free Documentation License (FDL).

---

## Installation Instructions

The latest version of SocNetV can be downloaded from the project's [Downloads](http://socnetv.org/downloads) page.

SocNetV supports Windows, macOS, and Linux distributions.

1. **Windows**: Download the latest installer, double-click to install, and follow the prompts.
2. **macOS**: Download the `.dmg` file, double-click, and drag the app to your Applications folder.
3. **Linux**: Download the Linux AppImage, make it executable, and run it. Alternatively, use the provided packages or repositories for your distribution.

Find detailed installation instructions in the respective [OS-specific sections](downloads.mdx).

---

### Development Version

To test the latest development version, clone the repository:

```bash
git clone -b develop --single-branch https://github.com/socnetv/app.git socnetv
cd socnetv
qmake
make
```

:::caution
The development version is <em>not always stable</em>.
:::


----------------------

## RunOptions Execution Options


If you run SocNetV from the command prompt, there are three (at the moment) options:
`--version | -V`      Displays the version of the program.

`--help | -H` 	      Displays a short help message.

`file.net`	      The name of the file you want to open.


[homepage]: http://socnetv.org "http://socnetv.org"


------------------------


