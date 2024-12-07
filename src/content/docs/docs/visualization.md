---
title:  visualization
description: Visualization and layout algorithms
---

SocNetV supports two kinds of network visualizations: By Prominence index and Force-Directed, each one with various layout algorithms.

You  can select visualizations from the menu "Layout" or by clicking on the checkboxes on the left dock.


## LayoutByProminence Prominence-based placement


SocNetV implements algorithms to layout the network so that each node takes
a position that reflects its centrality or prestige status inside the network. 

These algorithms supports all prominence (Centrality and Prestige) measures and a variety of layout types (circular, level, nodal size and color).
In the left dock choose a prominence index, a layout type and then press the Apply button.

Please note that these algorithms do not take care of crossing links.
They are only meaningful as a visual representation of the status of each node.


\anchor LayoutCircular 
#### Circular #### 

If you select circular layout type, all nodes will be repositioned on the circumferences of
concentric circles of different radiuses.

Nodes with higher centrality or prestige are positioned closer to the centre of the screen.


\anchor LayoutLevel 
#### On Levels #### 

If you select the "on levels" layout type, all nodes will be repositioned on levels
of different height. 

More central nodes will appear towards the top of the screen.


\anchor LayoutNodal    
#### Nodal size #### 


In this layout type, the size of each node will change to reflect its centrality or prestige score.
You can apply this layout type along with circular or level layout for a more meaningful visualization.


-----------------------

## LayoutForceDirected    Force-directed placement


\anchor LayoutKamadaKawai 

#### Kamada-Kawai ####

In this model, the network is considered to be a dynamic system where every two actors are 'particles' mutually connected by a 'spring'.

Each spring has a desirable length, which corresponds to their graph theoretic distance. 

In this way, the optimal layout of the graph is the state with the minimum imbalance. 

The degree of imbalance is formulated as the total spring energy:

    the square summation of the differences between desirable  distances and real ones for all pairs of particles

Initially, the particles/actors are placed on the vertices of a regular n-polygo



\anchor LayoutSpring 
#### Spring Embedder #### 

The Spring Embedder model (Eades, 1984), part of the Force Directed Placement (FDP) family,
embeds a mechanical system in the graph by replacing nodes with rings and edges
with springs which excert forces. In the words of Eades himself:


<em>"The basic idea is as follows. To embed [lay out] a graph we replace the
vertices by steel rings and replace each edge with a spring to form a
mechanical system . . . The vertices are placed in some initial layout and
let go so that the spring forces on the rings move the system to a minimal
energy state."</em>


In our implementation, every node \f$ u \in V \f$ of the network is regarded as a
physical body (i.e. ring) which exert repelling force \f$ F_{r} \f$ to every other node.
At the same time, every edge \f$(u,v) \in E \f$ becomes a "spring" which excert 
an attractive force \f$ F_{a} \f$ between the nodes \f$u\f$ and \f$v\f$ it connects. 

Following Eades, the forces of springs do now follow Hooke'w Law.
Instead we assume weaker, logarithmic forces between edges \f$(u,v) \in E \f$:


\f[  F_{a}^{u,v} = c_1 \cdot \log{ \frac{d_{u,v}}{c_2} } \f]

where \f$d\f$ the euclidean distance, the constant \f$ c_1 = 2 \f$ and the other constant \f$ c_2 \f$ is the "natural length" of the spring which is a function of screen/viewport area and the width of the vertex:

\f$ c_2 = vertexWidth +  \sqrt{ \frac { screenArea }  { |V| } } \f$


The repelling force \f$ F_{r} \f$ between every pair of nodes is computed with the formula:

\f[ F_{r}  =  \frac { c_3 }  {  d_{u,v} ^2  } \f]


where \f$ c_3=1 \f$


These forces are applied to the nodes iteratively, pulling them closer together or pushing them further apart,
until the system comes to an equilibrium state (node positions do not change anymore).

Note: Repulsive forces are calculated between every pair of vertices, but attractive forces are calculated only between neighbours (nodes connected by an edge/arc).


\anchor LayoutFR 
#### Fruchterman-Reingold #### 

Fruchterman and Reingold (1991) refined the Spring Embedder model by replacing
nodes with electrically charged  or gravitational bodies.


In their words:

<em>"Consider the following analogy: the vertices behave as atomic particles or celestial
bodies, exerting attractive and repulsive forces on one another; the forces induce
movement. Our algorithm will resemble molecular or planetary simulations, some-
times called n -body problems. Following Eades, however, we know that we need
not have a faithful simulation; we can apply unrealistic forces in an unrealistic
manner. So, like Eades, we make only vertices that are neighbours attract each
other, but all vertices repel each other. This is consistent with the asymmetry of our
two guidelines above." </em>


Again, only neighbouring vertices attract each other while all vertices repel each other.



In our implementation the attracting and repulsive forces are computed as follows:



~~~~~
AttractingForce = ( dist(v,u) * dist(v,u) ) / optimalDistance
RepulsiveForce = (optimalDistance * optimalDistance  /  dist(v,u))
~~~~~

where

~~~~~
optimalDistance=  sqrt ( screenArea / |Vertices| )
~~~~~


Following Fruchterman and Reingold, for every vertex v we compute repulsive forces
only for vertices within a circular area of radius 2*optimalDistance from v.




*/
