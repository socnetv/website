---
title: Network Generation
description: A guide to introduce SocNetV
---

# generate Network Generation



This page has information about the network generation routines and capabilities of SocNetV. 
The application can either recreate famous social network analysis data sets (i.e. Knocke: Bureacracies Network) or 
generate random networks using a graph theory model such as the Barabási–Albert for scale-free networks and the Watts-Strogatz model for small-world nets.

SocNetV can also create "networks" of linked webpages using the built-in Web Crawler. 
The Crawler maps hypertext links between webpages starting from a given webpage/website.

## Datasets    Recreating famous data-sets


SocNetV can recreate one of the following known social network data-sets:

- Krackhardt: High-tech managers (advice, friendship and reports to relationships), 24 actors
- Padgett: Florentine Families (marital & business relationship), 16 actors
- Zachary: Karate Club (simple & weighted ties), 34 actors
- Bernard: Killworth Fraternity (multirelational), 58 actors
- Galaskiewicz: CEOs and clubs (affiliation data)
- Freeman's EIES networks (multirelational, 32 actors)
- Freeman: EIES network, at time-1, 48 actors
- Freeman: EIES network, at time-2, 48 actors
- Freeman: EIES network, number of messages, 48 actors
- Freeman: The 34 possible graphs with N=5 (as multirelational), 5 actors
- Mexican Power Network in the 1940s (list format)
- Knoke: Bureaucracies Network (information and money relation), 10 actors
- Stephenson and Zelen (1989): Network of 40 AIDS patiens (sex relationship)
- Stephenson and Zelen (1989): Information Centrality test dataset, 5 actors
- Stokman-Ziegler: Corporate Interlocks in Netherlands, 16 actors
- Stokman-Ziegler: Corporate Interlocks in West Germany, 15 actors
- Wasserman and Faust: star, circle and line graphs of 7 actors (multirelational)
- Wasserman and Faust: Countries Trade (basic manufactured goods), 24 actors
- Petersen graph: a non-planar, undirected graph with 10 vertices and 15 edges
- Campnet dataset: a network of 18 actors, Borgatti (1992)
- Herschel graph: The smallest nonhamiltonian polyhedral graph with 11 nodes and 18 edges


From File menu select "Create known data set" or press F7.

A dialog will appear where you select one of the data-sets above.

Press OK and the network will be displayed in the canvas.


-----------------------------

## Random      Random network creation


SocNetV can create a random network for you. At the moment, it can create the following types of random networks: 
<em>Scale-free</em>, <em>Small world</em>, <em>Erdos-Renyi</em>, <em>Ring lattices</em>, and <em>d-regular</em> networks.


\anchor RandomSF 
#### Scale-free (S-F) networks #### 

A scale-free network is a network whose degree distribution follows a power law.
That is, actors with a degree that greatly exceeds the average are relatively common. 
These highest-degree nodes are often called "hubs" and have the so-called cumulative advantage: 
A node with many in-links will attract more in-links than a regular node.

For large values of degree \f$ d  \f$, the fraction  \f$ P(d)  \f$ of actors in a scale-free network having  \f$ d \f$ ties to other actors is

  \f[   P(k) \text {~} k^{−γ}  \f]

where  \f$ γ \f$ is a parameter whose value is typically in the range   \f$ 2 < γ  < 3 \f$, although occasionally it may lie outside these bounds

SocNetV generates random scale-free networks of \f$ n \f$ nodes according to 
the Barabási–Albert (BA) model which uses a preferential attachment mechanism.

The algorithm starts with the given \f$ m_0 \f$ connected nodes.

In each step a single new node is added, along with \f$ m \f$ edges to existing nodes.

The probability that the new node will connect to an existing node \f$ i \f$
 is:
\f[ p_i = \frac { (α + d_i ^ p) } {  \sum_j {d_j} } \f]

where: 
\f$ α \f$ the  initial 'attractiveness' of each node,
\f$ d_i \f$ the degree of node \f$ i \f$
\f$ \sum_j {d_j}  \f$  the sum of degrees of all pre-existing nodes \f$ j  \f$


 if \f$ α = 0 \f$ and \f$ p = 1 \f$ then the preferential attachment is linear (BA model).


\anchor RandomSW     
####  Small World (SW) networks #### 
 
A 'small world' is a random network with short average path lengths and high clustering.

SocNetV creates small worlds using the Watts and Strogatz model.

Given the desired number of nodes \f$ N \f$, the mean degree \f$ K \f$ (assumed to be an even integer),
and a special parameter \f$  \beta \f$, satisfying \f$  0 \le \beta \le 1 \f$
and \f$  N\gg K \gg \ln(N)\gg 1 \f$, the model constructs an undirected graph with \f$ N \f$ nodes and
\f$  \frac{NK}{2} \f$ edges in the following way:

- Construct a regular ring lattice, a graph with \f$  N \f$ nodes each connected to \f$  K \f$ neighbors, \f$  K/2 \f$ on each side.
- For every node \f$ n_i=n_0,\dots, n_{N-1} \f$ take every edge \f$ (n_i, n_j) \f$ with \f$ i < j \f$, and rewire it with probability \f$ \beta \f$. Rewiring is done by replacing \f$ (n_i, n_j) \f$ with \f$ (n_i, n_k) \f$ where \f$ k \f$ is chosen with uniform probability from all possible values that avoid self-loops (\f$ k \ne i \f$) and link duplication (there is no edge \f$ (n_i, n_{k'}) \f$ with \f$ k' = k \f$ at this point in the algorithm).

From the menu Network select Create Random Network > Small World.

A dialog will appear where you can enter the number of nodes \f$ N \f$, their mean degree K and a rewiring probability \f$  \beta \f$. 

\image html http://socnetv.org/data/uploads/screenshots/24/socnetv-24-1000-actors-small-world-betweenness-radial-nodesize-nodecolor.png "Example: Small-world random network of 1000 actors created by SocNetV. Actor positions, colors and sizes reflect their betweenness centrality"


\anchor RandomER  
####  Erdős–Rényi (ER) networks #### 

The Erdős–Rényi networks are random networks created according by either of two related modes:  
- the \f$ G(n, M) \f$ model, introduced by Paul Erdős and Alfréd Rényi in 1959, where all networks of \f$ n \f$ nodes and \f$ M \f$ edges are equally likely.
- the \f$ G(n, p) \f$ model, introduced by Edgar Gilbert also in 1959, where each edge has probability \f$ p \f$ of being present or absent, independently of the other edges. 

SocNetV generates Erdős–Rényi (ER) networks of both models. 

In the \f$ G(n, M) \f$ model, a graph of \f$ n \f$ nodes and \f$ M \f$ edges is created by randomly selecting two actors and adding a link between them until \f$ M \f$ edges have been created. 
In the \f$ G(n, p) \f$ model, for every possible pair of actors an edge is added with a Bernoulli trial, given the user-defined possibility \f$ p \f$.  

From the menu Network select Create Random Network > Erdos-Renyi.

In the dialog, enter the desired number of nodes \f$ n \f$ and select a model. 
According to model selection you should either enter the edge probability \f$ p \f$ or the number of edges \f$ M \f$ in the final network. 

You may also select if the final network will be undirected or directed and if you want to allow nodes to link to themselves (diagonal non zero).




\image html https://socnetv.org/data/uploads/screenshots/25/socnetv-25-erdos-renyi-200actors.jpg "Erdos-Renyi random network"

\anchor RandomLattice  
####   Lattice networks #### 


SocNetV can create regular lattices of arbitrary dimensions. 

You can define the lattice dimension d, and the length/size l of each dimension.  

Also, you can define custom neighborhood size n, which is the distance within which the neighbors on the lattice will be connected.


\image html https://socnetv.org/data/uploads/screenshots/25/socnetv-25-lattice-network-generator.png "lattice generator"

\anchor RandomRegular  
####   d-regular networks #### 

A d-regular network is that in which each actors has the same number of "neighbours" or the same degree d.
Nodes are arbitrarily linked with each other other. 



\anchor RandomER   
####    Ring lattices #### 

Ring lattices (or physicist's lattices) are 'random' networks where all nodes are positioned in a ring.
Each one has the same even degree (number of edges) d with her "neighbourhood", namely she is linked with the d/2 nodes before and d/2 nodes after her.
For instance in a 4-lattice of 10 nodes, node 6 will be linked with 4, 5, 7 and 8. 
To create a ring lattice network click Network > Create Random Network > Ring Lattice (or press Shift+L). 
You will be asked for the number of nodes and the degree of each node.



-----------------------

## WebCrawler     Networks of webpages using the Web Crawler


SocNetV includes a simple web crawler, which consists of two parts:
a spider and a parser.

The spider visits a given initial URL (i.e. a website or a webpage) and downloads its HTML code. 

The parser scans the code for 'href' links to other pages (internal or external)
and adds them to a queue of URLs (called frontier).

As URLs are added in the queue, the spider visits them and downloads their HTML
which is scanned for more links by the parser, and so on...
The end result is the 'network' of all visited webpages as nodes and their real links as edges.

To start the web crawler, go to menu Network > Web Crawler or press Shift+C.

A dialog will appear, where you enter the initial web page (URL). 


\image html http://socnetv.org/data/uploads/screenshots/25/socnetv-25-crawler-dialog.jpg "Web crawler dialog"

You may also limit the web crawler (after all you don't want to crawl the whole internet!):

Max URLs to crawl, this is the max nodes in the resulting network.

Max links per page, the amount of links in each page to consider.

Except the initial url and the limits, you can also  specify patterns of urls to include or exclude,
types of links to follow (internal, external or both) as well as if you want delay between requests (strongly advised)

Once you're ready, press OK and the crawler will start its job!

\image html http://socnetv.org/data/uploads/screenshots/25/socnetv-25-crawler.jpg "Web crawler dialog"


\note By default the spider will crawl only internal links and use delay between network calls.

\warning The parser searches for 'href' links only in the body section of the HTML code.



--------------------------------------------


