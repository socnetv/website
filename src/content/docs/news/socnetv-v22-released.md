---
title: "SocNetV v2.2 Released with Cluster Analysis, Eigenvector Centrality, and More!"
date: 2017-01-21
description: "SocNetV v2.2 introduces hierarchical clustering, eigenvector centrality, advanced analysis tools, and numerous bug fixes. Download it today for enhanced social network analysis!"
image: "https://socnetv.org/data/uploads/screenshots/22/socnetv-2.2.jpg"
tags: ["release", "Hierarchical Clustering Analysis", "Actor Similarity"]
---

We are pleased to announce that a new version of your favorite social network analysis and visualization software application has been released. **SocNetV version 2.2**, codenamed **"beyond"**, brings many new features and is now available for **Windows**, **Mac OS X**, and **Linux**. Visit the [Downloads](https://socnetv.org/downloads/) page to get it!

---

## What's New in SocNetV v2.2?

### Hierarchical Clustering Analysis (HCA)

SocNetV now performs hierarchical agglomerative cluster analysis on social networks using these methods:

- **Single-Linkage (minimum)**
- **Complete-Linkage (maximum)**
- **Average-Linkage (UPGMA)**

You can compute the **Structural Equivalence matrix** using adjacency or geodesic distance matrices with user-selected metrics such as **Euclidean**, **Manhattan**, and **Jaccard** distances.

![HCA Dialog](https://socnetv.org/data/uploads/screenshots/22/socnetv-2.2-hierarchical-cluster-analysis-dialog.jpg)

Results include:
- A **list of clusters per level**.
- A **dendrogram** of the cluster hierarchy in SVG format.

![HCA Results](https://socnetv.org/data/uploads/screenshots/22/socnetv-2.2-hca-results-2-dendrogram.jpg)

---

### Eigenvector Centrality

Version 2.2 introduces **Eigenvector Centrality**, which measures the influence of a node in a network based on the leading eigenvector of the adjacency matrix.

![Eigenvector Centrality](https://socnetv.org/data/uploads/screenshots/22/socnetv-report-eigenvector-sorted.png)

Use this metric for network analysis or embedding radial/level layouts.

![Eigenvector Layout](https://socnetv.org/data/uploads/screenshots/22/socnetv-2.2-layout-eigenvector-radial-indegree-nodal.png)

---

### Pearson Product-Moment Correlation Coefficients

SocNetV now computes **Pearson Correlation Coefficients** to correlate actor profiles (ties or distances). Results are displayed as a correlation matrix.

![Pearson Coefficients Dialog](https://socnetv.org/data/uploads/screenshots/22/socnetv-2.2-pearson-coefficients-dialog.png)

---

### Actor Similarity

Compare pairwise tie/distance profiles of actors to produce a similarity matrix using measures like:

- **Simple Matching**
- **Jaccard**
- **Hamming**
- **Cosine Similarity**
- **Euclidean Distance**

---

### Maximal Clique Census

Using the **Bron–Kerbosch algorithm**, SocNetV finds all **maximal cliques** in undirected or directed graphs. The **clique census report** includes useful statistics, co-membership information, and dendrograms.

![Clique Census Report](http://www.socnetv.org/data/uploads/screenshots/22/socnetv-2.2-clique-census-florentine-families-report-1.png)

---

### Additional Features

#### Cocitation Analysis
- Compute **Cocitation Matrices**.
- Create **Cocitation Networks**, where actors are connected if they are cited by common neighbors.

#### Symmetrize Edges by Strong Ties
Create new relations using only strong, reciprocal ties.

#### Multi-relational GraphML Support
Read and write `.graphml` files with multiple relations.

#### GML and Pajek Support
Support for **GML** formatted data and **multi-relational Pajek files**.

---

### Performance Improvements

- Faster matrix multiplication using optimized algorithms.
- Enhanced adjacency matrix plotting with Unicode characters.

![Adjacency Matrix Plot](http://www.socnetv.org/data/uploads/screenshots/22/socnetv-2.2-adjacency-plot-krackhardt.png)

---

## Bug Fixes and Notices

- Resolved various issues like incorrect distances in weighted networks, edge labels not saving, and more.
- New dataset: **Petersen Graph**.
- Transformed **Krackhardt's High-tech Managers** and **Zachary Karate Club** into multirelational datasets.

> **Important Notices**:  
> - Project's new domain: [https://socnetv.org](https://socnetv.org)  
> - Code and files are now hosted on GitHub.

---

Download SocNetV v2.2 today and enjoy the new features and improvements!
