---
title: Analysis methods
description: A guide to introduce SocNetV
---




Once you load or create a network in SocNetV, you may use the options in the Analyze menu
to compute graph and social network analysis measures.
 
## Matrices Matrix Analysis


Options to compute, display and analyze various  matrices based on the adjacency matrix of the current network. 

Available options:


\anchor AdjacencyMatrix
#### Adjacency Matrix ####

Displays the adjacency matrix A of the active network. The matrix is displayed in HTML format in your default web browser.

The adjacency matrix of a social network is a matrix where each element a(i,j) is equal to the weight of the arc from actor (node) i to actor j.

If the actors are not connected, then a(i,j)=0.


\image html http://socnetv.org/data/uploads/screenshots/25/socnetv-25-adjacency-matrix.png "Example: Adjacency matrix of Krackhardt High tech managers network"




\anchor InverseMatrix  
#### Inverse Adjacency #### 

This option computes the inverse A<sup>-1</sup> of the adjacency matrix.


\anchor PlotMatrix
#### Plot Adjacency ####

To plot the adjacency matrix, you may also press Shift+F6. The plot will appear in HTML in your web browser.


\image html http://socnetv.org/data/uploads/screenshots/25/socnetv-25-adjacency-plot-matrix.png "Example: Adjacency matrix plot of a network"



\anchor TransposeMatrix  
#### Transpose Adjacency #### 

This option computes the transpose of the adjacency matrix.


\anchor CocitationMatrix
#### CocitationMatrix ####


Computes the Cocitation matrix, C = A<sup>T</sup> * A.

C is a nxn symmetric matrix where each element (i,j) is the number of actors that have outbound ties/links to both actors i and j.

The diagonal elements, C<sub>ii</sub>, of the Cocitation matrix are equal to the number of inbound edges of i (inDegree).



\anchor DegreeMatrix  
#### Degree Matrix ####

This option computes the Degree matrix of the network. 
The Degree Matrix is diagonal matrix which contains information about the degree
of each graph vertex (row of the adjacency matrix)

\anchor LaplacianMatrix  
#### Laplacian Matrix ####

This option computes the Laplacian matrix of the network. 
The Laplacian is a NxN matrix L = D - A where D is the degree matrix of A

-------------------------------


## Cohesion Cohesion measures


The next option in the Analysis menu focus on basic network/graph measures,
such as the geodesic distance between nodes, the mean distance between all nodes,
the diameter of the graph, the number of geodesics between nodes and the eccentricity
of each node. Each option is explained below.


\anchor Reciprocity
#### Reciprocity ####


Reciprocity, r, is a measure of the likelihood of vertices in a directed network to be mutually linked.

SocNetV supports two different methods to index the degree of reciprocity in a social network:
* The arc reciprocity, which is the fraction of reciprocated ties over all actual ties in the network.
* The dyad reciprocity which is the fraction of actor pairs that have reciprocated ties over all pairs of actors that have any connection.

In a directed network, the arc reciprocity measures the proportion of directed edges that are bidirectional. If the reciprocity is 1, then the adjacency matrix is structurally symmetric.

Likewise, in a directed network, the dyad reciprocity measures the proportion of connected actor dyads that have bidirectional ties between them.

In an undirected graph, all edges are reciprocal. Thus the reciprocity of the graph is always 1.

Reciprocity can be computed on undirected, directed, and weighted graphs.


\anchor Symmetry 
#### Symmetry Test #### 

The <em>Symmetry Test</em> reports  whether the network is symmetric or not.
A network is called "symmetric" if for every edge \f$ (i,j) \f$ in the set E of the
corresponding graph \f$ G(V,E) \f$, the 'opposite' \f$ (j,i) \f$ edge also exists in \f$ E \f$.
In other words, when the adjacency matrix is symmetric.


\anchor Distance 
#### Distance #### 

Computes the geodesic distance (length of shortest path) between two actors. 

In graph theory, the shortest path between two vertices of the graph is called "geodesic".

Thus, the geodesic distance of two nodes in a social network is the
length of the shortest path between the corresponding vertices in the graph G(V,E).

By clicking on the Analyze -> Cohesion -> Distance option (or pressing Ctrl+G, Ctrl+G) you will be asked for
source and target nodes. Then their distance will be calculated and displayed.


\anchor AverageDistance 
#### Average Distance #### 

The average or mean distance in a social network is the average length of all
shortest paths (geodesics) between all pairs of connected vertices in the corresponding
graph.

In undirected or strongly connected directed networks, the formula
used to compute Average Graph Distance is:

\f[ 
\bar {d} =  \frac { \sum_{u \ne v } { \{ d(u,v), \forall u,v \in V  \} } } { n \cdot (n-1) }  
\f]

where the denominator is the sum of all pairs of vertices. 

It can be proved that in connected networks of n actors, the least upper bound of the
Average Distance is \f$ n+1 / 3  \f$ (Doyle & Graver, 1977).

In the case of disconnected networks/graphs, the denominator used is the total number of 
existing paths between connected vertices. 

In graph theory, the Average Distance is considered to be a natural measure of the compactness of a graph.



\anchor DistancesMatrix 
#### Distances Matrix #### 

The Analyze -> Cohesion -> Distances Matrix menu option displays the matrix of geodesic
distances between all pairs of nodes in the social network.

A distances matrix is a \f$ N * N \f$ square matrix, in which the \f$ (i,j) \f$ element
is the distance from node i to node j.


\anchor GeodesicsMatrix 
#### Geodesics Matrix #### 

This option displays a n x n square matrix, where the \f$ (i,j) \f$ element
is the number of geodesics between node i and node j.
The produced matrix, called sigma matrix, is used in Centralities calculation (see below).


\anchor Eccentricity 
#### Eccentricity #### 

The eccentricity or association number of each node \f$ u  \f$ is the largest geodesic
distance between that node and every other node in the network.

\f[  \epsilon_u =  \max { \{ d(u,v), \forall v \in V  \} } \f]


Therefore, the measure reflects how far, at most, is each node from every other node.

The Eccentricity can be calculated in both graphs and digraphs but is usually best
suited for undirected graphs. 

It can also be calculated in weighted graphs although the weight of each
edge (v,u) in E is always considered to be 1.


\anchor Diameter 
#### Diameter #### 

The diameter of a social network is the maximum eccentricity of any vertex in
the corresponding graph G(V,E), that is the maximum distance between any two
connected nodes.

\f[  D =  \max { \{ d(u,v), \forall u,v \in V  \} } \f]



\anchor Connectedness 
#### Connectedness #### 

Checks whether the network is a connected graph, a weakly connected digraph or
a disconnected graph/digraph.

In graph theory, a graph is <b>connected</b> if there is a path between every pair of nodes.

A digraph is <b>strongly connected</b> if there the a path from i to j and
from j to i for all pair of nodes \f$ (i,j) \f$.

A digraph is <b>weakly connected</b> if at least a pair of nodes are joined by a semipath.

A digraph or a graph is <b>disconnected</b> if at least one node is isolate.



\anchor Walkslength 
#### Walks of a given length #### 

Clicking this option asks for a desired walk length (max: n-1).
Then SocNetV calculates and displays a square matrix where each element \f$ (i,j) \f$
is the number of walks of the given length between the corresponding pair of
nodes i and j.

A walk is a sequence of alternating vertices and edges such as

v<sub>0</sub>e<sub>1</sub>, v<sub>1</sub>e<sub>2</sub>, v<sub>2</sub>e<sub>3</sub>, …, e<sub>k</sub>v<sub>k</sub>,
where each edge, e<sub>i</sub> is defined as e<sub>i</sub> = {v<sub>i-1</sub>, v<sub>i</sub>}.

This function calculates the number of walks of the given length between
each pair of nodes, by studying the powers of the sociomatrix. 

\anchor TotalWalks 
#### Total Walks #### 

Calculates and displays a (n x n) square matrix whose elements denote the
number of walks of any length between each pair of nodes.
The algorithm is based on the powers of the sociomatrix.

\warning This function is <b>VERY SLOW</b> on large networks (n > 50),
since it will calculate all powers of the sociomatrix up to (n-1) in order to
find out all possible walks. If you need to make a simple reachability test, we advise to use the
Reachability Matrix function instead.



\anchor ReachabilityMatrix 
#### Reachability Matrix #### 

Calculates the reachability matrix X<sup>R</sup> of the graph where each \f$ (i,j) \f$
element is 1 if nodes i and j are reachable, otherwise is 0.

This function is based on the Distances Matrix; it checks whether the
corresponding element of the Distances matrix is not zero.
If it is not zero, then the nodes \f$ (i,j) \f$ are reachable and the X<sup>R</sup>
element is 1.



\anchor Coefficient 
#### Clustering Coefficient #### 

In graph theory, a clustering coefficient reflects the degree to which the nodes tend to cluster together.
In social network analysis, it is often used to characterize the transitivity of a network.

There are two versions of Clustering Coefficient: the global and the local.

The global Clustering Coefficient (often called transitivity, see Wasserman and Faust, 1994, page 243)
is based on triplets of nodes to give an indication of the overall clustering in the whole network.

A triplet consists of three connected nodes. A triangle therefore includes three closed triplets,
one centered on each of the nodes.

The global clustering coefficient is the number of closed triplets (or 3 x triangles)
over the total number of triplets (both open and closed).
This metric can be applied to both undirected and directed networks.

The local Clustering Coefficient (introduced by Duncan J. Watts and Steven Strogatz in 1998)
is an indication of the embeddedness of single nodes, and it is also used as an indication of the
network transitivity.

Specifically, the Clustering Coefficient \f$ C \f$ of a node quantifies how close the node and its
neighbors are to being a complete subgraph (clique).

Let \f$ k_{i} \f$ the number of vertices, \f$ |N_{i} \f$, in the neighbourhood, \f$ N_{i} \f$, of a node \f$ i \f$.
In a directed network, the clustering coefficient is computed with the formula:

\f[  C_i = \frac{|\{e_{jk}: v_j,v_k \in N_i, e_{jk} \in E\}|}{k_i(k_i-1)} \f]

In undirected networks, the formula is:

\f[  C_i = \frac{2|\{e_{jk}: v_j,v_k \in N_i, e_{jk} \in E\}|}{k_i(k_i-1)}. \f]

If the network relation represents friendships among actors, the clustering coefficient \f$ C_i \f$ 
of an actor i, measures the ratio of existing friendships between any two of that actor's friends 
relative to all possible friendships between her friends (the situation where the subgraph is complete).

A value close to one indicates that the node is involved in many transitive relations.

SocNetV also computes the network average clustering coefficient (Watts and Strogatz):

\f[  \bar{C} = \frac{1}{n}\sum_{i=1}^{n} C_i \f]


\note The clustering can be used to determine whether a network is a small-world or not.


For the ring lattice the clustering coeffient is

\f[  C(0)=\frac{3(K-2)}{4(K-1)} \f]

tending to \f$ 3/4 \f$ as \f$ K\f$  grows, where K the mean degree.



<em>Tip</em>: All the basic network statistics, such as nodes, edges and density
are displayed and automatically updated in the Analysis tab of the left dock in
SocNetV main window.

-------------------------

## Centralities  Centralities and Prestige


The last option in the Analysis menu opens the "Centrality and Prestige" sub-menu.

Social network analysts use various measures or (indices) to calculate how 'prominent' or important each actor (node) is inside a network (graph).
For instance, we might want to know how important is a person inside her friendship network or how critical is a power station inside the power company grid...

Although there are various metrics, focusing on different graph notions and applying to different graph types, they are usually refered to as 'centralities' collectively.


SocNetV follows the conceptualization of prominence that Wasserman and Faust as well as Knoke and Burt use in their essays.
To our understanding, all indices attempt to measure the visibility, the importance or the "prominence" of each node.
But we distinguish two types of prominence: Centrality and Prestige.


Centrality measures attempt to quantify how much central is each actor inside the social network. To do so, these measures usually examine the ties attached to an actor as well as the geodesic distances (shortest path lengths) to other actors.

Most Centrality indices were designed for undirected graphs (symmetric), where the relations are non-directional.
For instance, SocNetV can compute \ref BC Betweenness, \ref CC Closeness, \ref IRCC Influence Range Closeness Centrality, \ref DC Degree, \ref SC Stress, \ref EC Eccentricity and \ref IC Information centrality indices.


For digraphs, where the relations are directional, most centrality measures can also be calculated by focusing on "choices made" (or outEdges).

But due to the nature of the directional relations in digraphs, the social networks researcher usually needs to measure the "prestige" (as known as status, rank or popularity) of each node. This can be done with Prestige measures, which focus on "choices received" (or nominations) of each node rather than "choices made" by that node. Given that Prestige measures are based on the inbound ties to each node from all others, these indices can only be calculated on directed graphs.

 
Centrality measures are calculated for each node (node Centrality) and for the whole network (group Centrality).
Thus, when you click on a centrality option, SocNetV will calculate the corresponding index of every node and the whole network and it will display them in a new window (a small text editor).
From there you can save the analysis into a text file of your choice. By default, analysis files are saved on bin/ subfolder.



\anchor DC 
#### Degree Centrality (DC) #### 

The DC measure quantifies how many ties a node has to other nodes in the network.
In social network theory, this index is often considered a measure of actor activity.
It can be computed in both undirected and directed networks/relations,
but is usually best suited for undirected ones.

Mathematically, in undirected graphs, the DC index of each vertex \f$ u \f$ is the number of edges attached to it.

In directed graphs, the DC is the total number of arcs (outEdges) starting from \f$ u \f$ (outDegree).

The index can be computed in weighted graphs as well. In that case, the DC of each node \f$ u \f$
is the sum of weights of all edges/outEdges attached to \f$ u \f$.


Along with other metrics which are based on the notion of distance
(closeness, eccentricity etc), the DC falls in the category of reachability measures.



To compute Degree Centralization (or Group Degree Centrality),
SocNetV uses the Freeman's formula for unvalued graphs.

\f[  GDC =  \frac {  \sum { ( maxDC' - DC'  ) }  }   {  (N-1) \cdot   (N-2) / (2 \cdot  N - 1)  } \f]

\note In valued (or weighted) graphs, GDC cannot be computed with Freeman's formula.
As a measure of degree centralization, one can use DC variance or mean instead.



\anchor  CC 
#### Closeness Centrality (CC) #### 

This CC index focuses on how close each node is to all other nodes in the network.

Nodes with high Closeness Centrality are those who can reach many other nodes in few steps.
The idea is that a node is more central if it can quickly interact with more of the others.
CC is also interpreted as the ability to access information through the "grapevine" of network members.

For each node  \f$ u \f$, the CC score is the inverse sum of geodesic distances from that node to
every other node.
\f[  CC_u =  \frac {  1  }    {  \sum_{v \in E} { d(u,v) }  } \f]



This index can be calculated in graphs and strongly connected digraphs
(that is, if there is a directed path from v to u for all nodes v and u in the graph).
If there are isolate nodes in the network, they are dropped by default.
In not strongly connected digraphs, the ordinary CC is undefined.
In that case, you can use the Influence Range Closeness Centrality index.

CC can also be calculated in weighted graphs although the value of each
edge (u,v) is always considered to be 1.

The maximum value of CC is 1/(N-1), when the node is adjacent to all others.
Thus the standardized CC index (CC') is calculated by (N-1) * CC.


Group CC is calculated using Freeman's general formula, in undirected graphs: 


\f[  GCC =  \frac {  \sum { ( maxCC' - CC'  ) }  }   {  (N-1) \cdot   (N-2) / (2 \cdot  N - 1)  } \f]


\note As with all centrality measures in directed graphs, CC considers only outbound edges. If you want to analyze inbound edges, use a Prestige measure, i.e. Proximity Prestige.




\anchor IRCC 
#### Influence Range Closeness Centrality (IRCC) #### 

For each node u, IRCC is the standardized inverse average distance
between u and every other node reachable from it.

This improved CC index is optimized for graphs and directed graphs which
are not strongly connected. Unlike the ordinary CC, which is the inverted
sum of distances from node v to all others (thus undefined if a node is isolated
or the digraph is not strongly connected), the IRCC considers only distances from
node u to nodes in its influence range J (nodes reachable from u).

The IRCC formula used is the ratio of the fraction of nodes reachable by u
(|J|/(n-1)) to the average distance of these nodes from u sum(d(u,j))/|J|

\f[ 
\frac {  \frac  { |J| } {  (n-1) } }  { \frac {  \sum  d(u,j)  } { |J| }  }
\f]


\anchor  BC 
#### Betweenness Centrality (BC) #### 

For each node u, BC is the ratio of all geodesics between pairs of nodes which run through u.
It reflects how often that node lies on the geodesics between the other nodes of the network.

The BC score of each actor can be interpreted as a measure of potential control as
it quantifies just how much that actor acts as an intermediary to others.
An actor which lies between many others is assumed to have a higher likelihood
of being able to control information flow in the network.

In essence, BC assumes that communication in a network occurs along the shortest possible path, the geodesic.
It totally neglects the possibility of communication along non-geodesic paths between actors.
If you need a centrality index which considers all possible paths, use the Information Centrality (IC).

Note that betweenness centrality assumes that all geodesics have equal weight
or are equally likely to be chosen for the flow of information between any two nodes.
This is reasonable only on "regular" networks where all nodes have similar degrees.
On networks with significant degree variance you might want to try using IC instead.

Also, BC is very sensitive to network dynamics, i.e. it changes a lot when we add or remove
a vertex or an edge.

This index can be calculated in both graphs and digraphs but is usually best suited for undirected graphs.
It can also be calculated in weighted graphs although the weight of each edge (u,v) in E is always considered to be 1.


\anchor SC 
#### Stress Centrality (SC) #### 

The SC of each node u is the total number of geodesics between all other nodes which run through u.
When one node falls on all geodesics between all the remaining (N-1) nodes,
then we have a star graph with maximum Stress Centrality.
This index reflects how often a node lies on the geodesics between other nodes.

This index can be calculated in both graphs and digraphs but is usually best suited for undirected graphs.
It can also be calculated in weighted graphs although the weight of each edge (v,u) in E is always considered to be 1

This index was introduced by Shimbel (1953).



\anchor EC 
#### Eccentricity Centrality (EC) or Harary Graph Centrality #### 

For each node u, the Eccentricity Centrality is the inverse of the largest geodesic distance (u,v) to every other node v in the network.
Therefore, the EC score reflects how close is each node to every other node and therefore to the middle of the network.

Nodes with high EC score have short distances to other nodes in the graph and therefore are likely to be near the middle of the network. 
Nodes with low EC score have longer distances to some other nodes in the graph, and therefore are most likely towards the "edge" of the network.

This index can be calculated in both graphs and digraphs but is usually best suited for undirected graphs.
It can also be calculated in weighted graphs although the weight of each edge (v,u) in E is always considered to be 1.

The EC is also known as Graph Centrality (Hage and Harary, 1995).



\anchor PC 
#### Power Centrality (PC) #### 

The Power Centrality (PC) is a a generalised degree centrality measure suggested by Gil and Schmidt.

For each node u, this index sums its degree (with weight 1), with the size of the
2nd-order neighbourhood (with weight 2), and in general, with the size of the kth
order neighbourhood (with weight k).

Thus, for each node u the most important other nodes are its immediate
neighbours and then in decreasing importance the nodes of the 2nd-order neighbourhood,
3rd-order neighbourhood etc.
For each node, the sum obtained is normalised by the total numbers of nodes in the same component minus 1.

This index can be calculated in both graphs and digraphs but is usually best suited
for undirected graphs.
It can also be calculated in weighted graphs although the weight of each edge
(u,v) in E is always considered to be 1 (therefore not considered).




\anchor IC 
#### Information Centrality (IC) #### 

The Information Centrality (IC) is an index suggested by Stephenson and Zelen (1989)
which focuses on how information might flow through many different paths.
Unlike SC and BC, the IC metric uses all paths between actors weighted by strength of tie and distance.

The IC' score is the standardized IC (IC divided by the sumIC) and can be seen as
the proportion of total information flow that is controlled by each actor.

Note that standard IC' values sum to unity, unlike most other centrality measures.

Since there is no known generalization of Stephenson & Zelen's theory for information centrality
to directional relations, the index should be calculated only for undirected graphs and is
more meaningful in weighted graphs/networks.

Note: To compute this index, SocNetV drops all isolated nodes and symmetrizes
(if needed) the adjacency matrix even when the graph is directed (Wasserman & Faust, p. 196).


<b>ALGORITHM</b>: In order to calculate the IC index of each actor, we create a N x N matrix A from the (symmetrized) sociomatrix with:


\f[   A_ii = 1 + d_i \f]
\f[   A_ij = 1 \space if \space (i,j)=0  \f]
\f[   A_ij = 1 -w_{ij} \space if \space (i,j) = w_{ij} \f]


Next, we compute the inverse matrix of A, for instance C, using LU decomposition.
Note that we can always compute C since the matrix A is always a diagonally strong matrix, hence it is always invertible.


Finally, IC is computed by the formula:


\f[   \frac { IC_i - 1 } {   C_{ii} + \frac { T-2 \cdot R } {  N }  }  \f]



where: 
T is the trace of matrix C (the sum of diagonal elements) and
R is the sum of the elements of any row (since all rows of C have the same sum)


IC has a minimum value but not a maximum.


\anchor EVC 
#### Eigenvector Centrality or Gould index #### 

Computes the Eigenvector centrality of each node in a social network 
which is defined as the ith element of the leading eigenvector 
of the adjacency matrix. The leading eigenvector is the 
eigenvector corresponding to the largest positive eigenvalue.

The Eigenvector Centrality, proposed by Bonacich (1989), is an extension of the 
simpler Degree Centrality because it gives each actor a score proportional to 
the scores of its neighbors. 

Thus, a node may be important, in terms of its EC, because it has lots of ties or 
it has fewer ties to important other nodes


\anchor DP 
#### Degree Prestige (DP) or InDegree Centrality #### 

For each node u, this metric counts the number of inbound arcs at u.
The index is meaningful in directed graphs as a measure of the prestige of each node.
Thus it is called Degree Prestige (it is also known as InDegree Centrality).
Note that in undirected graphs, the DP index is identical to Degree Centrality.

Actors with higher DP are considered more prominent among others because
they receive more nominations or choices (they have larger inDegree).
The largest the index is, the more prestigious is the node/actor.

This index can be calculated only for unvalued or valued digraphs.
In weighted relations, DP is the sum of weights of all arcs/inLinks ending at node v.
<br/>
In unvalued graphs, SocNetV computes Group Degree Prestige using the Freeman's formula .

<em>Note: For valued or weighted graphs, we cannot calculate Group DC using Freeman's formula.
You can use DP variance or mean instead.</em>




\anchor PRP 
#### PageRank prestige (PRP) #### 

The PageRank prestige is an importance ranking for each node based on the
structure of its incoming links/edges and the rank of the nodes linking to it.

The original PageRank algorithm, developed by Page and Brin (1997),
focuses on how nodes are connected to each other, treating each link from a node
as a citation/backlink/vote to another.

In essence, for each node the algorithm counts all incoming links (edges) to it,
but it does so by not counting all links equally while it normalizes each in-link
from a node by the total number of its outgoing edges.

The PR index for each node \f$ u \f$ is computed  iteratively by the formula:

\f[  PR_u = \frac { 1- d } { N } + d \cdot  \sum_{v \in M_u} \frac {PR_v }{DC_v}  \f]

where
\f$ u \f$ is the node, 
\f$ d \f$ is a dumping factor (\f$ d = 0.85 \f$),
\f$ N \f$ the number of of vertices in the network
\f$ M_u \f$ all nodes which link to \f$ u \f$
\f$ DC_v \f$ the outDegree of node \f$ v \f$



The PR values correspond to the principal eigenvector of the normalized link matrix.

This index can be calculated in both graphs and digraphs but is usually best suited for directed graphs since it is a prestige measure.

The PageRank prestige index can also be calculated in weighted graphs.

Note: In weighted relations, each backlink to a node u from another node v is considered
to have weight=1 but it is normalized by the sum of outEdges weights (outDegree) of v.
Therefore, nodes with high outLink weights give smaller percentage of their PR to node u.




\anchor PP 
#### Proximity Prestige (PP) #### 

The Proximity Prestige index measures how proximate a node u is to the nodes in its
influence domain \f$ I \f$ - the influence domain I of a node is the number of other nodes that can reach it.
Apparently, in this metric the proximity of each node u is based on distances to rather than distances from it.
To put it simply, in PP what matters is how close are all the other nodes to node u.


The algorithm takes the average distance to node \f$ u \f$ of all nodes in its influence domain,
standardizes it by multiplying with \f$ (N-1)/|I|  \f$ and takes its reciprocal.

In essence, the formula SocNetV uses to calculate PP for every node \f$ u \f$ is the ratio
of the fraction of nodes that can reach node \f$ u \f$, to the average distance of that nodes to \f$ u \f$
(Wasserman & Faust, formula 5.25, p. 204):

\f[   PP = \frac  {  \frac { I } { N-1 } }    { \sum{d(v,u)} / I } \f]


where the sum is over every node \f$ v \f$  in  \f$ I \f$.




----------------------------



## communities Community detection


\anchor CliqueCensus 
#### Clique Census #### 

The concept of a clique in every life is pretty simple: a clique is a group of people who interact with each other much more regularly and intensely than with other people not belonging in the clique.
That is, a group of people form a clique if they are all connected to each other.

In formal mathematics, a clique C is any subset of vertices of an undirected graph G, such that its induced subgraph is complete.
This means that every two distinct vertices in a clique are always adjacent.

In Social Network Analysis, the definition of a clique is much more narrow and precise:

A clique is the largest subgroup of actors in the social network who are all directly connected to each other.
In terms of graph theory, this notion is the same as a maximal complete subgraph of the equivalent graph of the social network.
The word maximal means that for each clique the group of its members is expanded to include as many actors as possible; no other actors can be added to the clique.
Essentially, a clique in Social Network Analysis consists of several overlapping closed triads.

SocNetV applies the Bron–Kerbosch algorithm to find all maximal cliques in an undirected or directed graph.
It produces a census of all MAXIMAL cliques in the network and reports some useful statistics about these.
The clique census report includes disaggregation by vertex and co-membership information.

\image html http://socnetv.org/data/uploads/screenshots/22/socnetv-2.2-clique-census-florentine-families-report-1.png "Clique census of Florentine families" 

\warning This computation can be slow in very large / dense social networks! In general, the clique problem (the problem of finding maximal cliques in a given graph) is NP-complete.




 

 \anchor TriadCensus 
#### Triad Census #### 

By clicking the "Triad Census" menu option, SocNetV will examine each of the
triads present in the current network, and count how many of these belong to a
certain triad type.

Some background:

In any network of N actors, there are C(N,3) triads. 
For instance, in a network of 6 actors there are C(4,3)=20 triads,
whereas in a network of 10 actors there are C(10,3)=60 triads.

In any case, though, there can be only sixteen different triad types
(isomophism classes).

Every one of the C(N,3) triads of a network must belong (be isomorphic) to one
of these sixteen types.

A Triad Census is a method which counts all the different types (classes) of
observed triads within a network.

The triad types are coded and labeled according to their number of mutual,
asymmetric and non-existent (null) dyads.

SocNetV follows the M-A-N labeling scheme, as described by Holland, Leinhardt
and Davis in their studies.
In the M-A-N scheme, each triad type has a label with four characters:

<ul>
<li>The first character is the number of mutual (M) duads in the triad.
  Possible values: 0, 1, 2, 3.</li>
<li>The second character is the number of asymmetric (A) duads in the triad.
  Possible values: 0, 1, 2, 3.</li>
<li>The third character is the number of null (N) duads in the triad.
  Possible values: 0, 1, 2, 3.</li>
<li>The fourth character is infered from features or the nature of the triad,
  i.e. presence of cycle or transitivity.
  Possible values: none, D ("Down"), U ("Up"), C ("Cyclic"), T ("Transitive")</li>
  </ul>

In the seven rows below, you can see all the sixteen triad types (classes). 
Within each row, all the triad types have the same number of arcs present:

<pre>
003
012
102     021D    021U    021C
111D    111U	030T	030C
201     120D	120U	120C
210
300
</pre>


So, when you click on Triad Census menu option, SocNetV calculates and displays
a vector T of length 16.
Each vector element (Tu) is the frequency of each one triad type inside the
active network, i.e. T003 = 3.
Furthermore, the order of the elements of vector T is the same as the
aforementioned ordering of the triad types:

T = [ T003, T012, T102, T021D, T021U, T021C, T111D, T111U, T030T, T030C, T201, T120D, T120U, T120C, T210, T300 ]

Apparently, the sum of all these frequencies Tu is C(N,3).



--------------------------

## StructuralEquivalence  Structural Equivalence methods



A key notion in SNA is that of structural equivalence. The idea is to map the 
relationships in a graph by creating classes or groups of actors who are equivalent in some sense.

One way to do that, to identify groups of actors who are structurally equivalent, 
is to examine the relationships between them for similarity patterns.

There are many methods to measure the similarity or dissimilarity of actors in a network. 

SocNetV supports the following methods:
- Similarity by measure
- Pearson Correlation Coefficients
- Tie profile dissimilarities

By applying one of these methods, SocNetV creates a pair-wise actor similarity/dissimilarity matrix.

\anchor ActorSimilarity
#### Actor Similarity (by measure) #### 

Computes a pair-wise actor similarity matrix, where each element (i,j) is 
the ratio of tie (or distance) matches of actors i and j to all other actors. 

SocNetV supports the following measures: 
- Simple Matching (Exact Matches): Proportion of tie/distance matches (present or absent) between two actors
- Jaccard Index (Positive Matches or Co-citation): Percentage of same ties/distances reported by both actors to the total number of ties reported.
- Hamming distance: Number of ties/distances which differ between each pair of actors.
- Cosine similarity
- Euclidean distance

For instance, in the case of Simple Matching, the similarity matrix depicts the 
ratios of exact matches of pairs of actors to all other actors.
If the element (i,j) = 0.5, this means that actors i and j have the same ties present 
or absent to other actors 50% of the time.

These measures of similarity are particularly useful 
when ties are binary (not valued).

Note that in very sparse networks (very low density), measures such as
exact matches, correlation and distance will show little variation among the actors, causing 
difficulty in classifying the actors in structural equivalence classes.


\anchor Pearson 
#### Pearson Correlation Coefficients #### 

Computes a correlation matrix, where the elements are the 
Pearson correlation coefficients between pairs of actors 
in terms of their tie profiles or distances (in, out or both). 

The Pearson product-moment correlation coefficient (PPMCC or PCC or Pearson's r)
is a measure of the linear dependence/association between two variables X and Y.

This correlation measure of similarity is particularly useful when ties are valued/weighted denoting strength, cost or probability.


\anchor TieProfileDissimilarities
#### Tie Profile Dissimilarities #### 

Computes a matrix of tie profile distances/dissimilarities 
between all pairs of actors/nodes in the social network 
using an ordinary metric such as Euclidean distance, 
Manhattan distance, Jaccard distance or Hamming distance).

\image html http://socnetv.org/data/uploads/screenshots/22/socnetv-2.2-dissimilarities-dialog.png "Dissimilarities dialog example"

The resulted distance matrix is a n x n matrix, in which the (i,j) element is the 
distance or dissimilarity between the tie profiles of node i and node j.

\image html http://socnetv.org/data/uploads/screenshots/22/socnetv-2.2-dissimilarities-matrix.png "Example of tie profile disssimilarities report"


\anchor hierarchicalclusteranalysis
#### Hierarchical cluster analysis (HCA) #### 

Hierarchical clustering (or hierarchical cluster analysis, HCA) 
is a method of cluster analysis which builds a hierarchy 
of clusters, based on their elements dissimilarity. 
In SNA context these clusters usually consist of 
network actors. 

This method takes the social network distance matrix as input and uses 
the Agglomerative \"bottom up\" approach where each 
actor starts in its own cluster (Level 0). In each subsequent Level, 
as we move up the clustering hierarchy, a pair of clusters 
are merged into a larger cluster, until 
all actors end up in the same cluster. 

\image html http://socnetv.org/data/uploads/screenshots/22/socnetv-2.2-hca-dialog.png "HCA dialog where you select input matrix, dissimilarity metric and linkage criterion/method"

To decide which clusters should be combined at each level, a measure of 
dissimilarity between sets of observations is required. 
This measure consists of a metric for the distance between actors 
i.e. manhattan distance) and a linkage criterion (i.e. single-linkage clustering). 

This linkage criterion (essentially a definition of distance between clusters), 
differentiates between the different HCA methods.

The result of Hierarchical Cluster Analysis is the clusters per level and a dendrogram: 
  
\image html http://socnetv.org/data/uploads/screenshots/22/socnetv-2.2-hca-results-2-dendrogram.jpg "Example dendrogram of HCA"

\note Note that the complexity of agglomerative clustering is O( n^2 log(n) ), 
therefore is too slow for large data sets.




----------------------------

