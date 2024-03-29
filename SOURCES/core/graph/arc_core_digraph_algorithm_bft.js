/*
  Encapsule/jsgraph/src/digraph-algorithm-bft.js

  Copyright (C) 2014-2020 Christopher D. Russell

  This library is published under the MIT License and is part of the
  Encapsule Project System in Cloud (SiC) open service architecture.
  Please follow https://twitter.com/Encapsule for news and updates
  about jsgraph and other time saving libraries that do amazing things
  with in-memory data on Node.js and HTML.
*/

/*
  Inspired by the design of the Boost Graph Library (BGL)
  http://www.boost.org/doc/libs/1_55_0/libs/graph/doc/index.html

  All visitor callback functions are optional.
  See also BFS Visitor Concept documentation from the BGL:
  http://www.boost.org/doc/libs/1_55_0/libs/graph/doc/BFSVisitor.html

  var breadthFirstVisitorInterface = {
  initializeVertex: function(vertexId_, digraph_),
  discoverVertex: function(vertexId_, digraph_),
  startVertex: function(vertexId_, digraph_),
  examineVertex: function(vertexId_, digraph_),
  examineEdge: function(vertexIdU_, vertexIdV_, digraph_),
  treeEdge: function(vertexIdU_, vertexIdV_, digraph_),
  nonTreeEdge: function(vertexIdU_, vertexIdV_, digraph_),
  grayTarget: function(vertexIdU_, vertexIdV_, digraph_),
  blackTarget: function(vertexIdU_, vertexIdV_, digraph_),
  finishVertex: function(vertexId_, digraph_)
  };

  request = {
      digraph: reference to jsgraph.DirectedGraph container object (required)
      visitor: reference to jsgraph BFV visitor object (required)
      options: {
          startVector: reference to a vertex ID string, or an array of vertex ID strings (optional)
              Note: if ommitted, BFT uses the digraph's root vertex set as the start vertex set
          signalStart: Boolean flag (optional - default is true if ommitted)
              Note: By default, BFT will call startVertex on each search root vertex.
              In advanced scenarios you may wish to override this behavior.
          traverseContext: reference to BFT search context object (optional)
              Note: By default, BFT allocates the traversal context internally and returns it to
              the caller. In advanced scenarios you may wish to provide a pre-initialized
              (or potentially pre-colored) traversal context object.
          }
      }
  }

  response = {
      error: null or string explaining why result is null
      result: BFS search context object
  }
*/

var helperFunctions = require('./arc_core_graph_util');

var algorithmName = "BFT"; // constant string used in error messages
var colors = require('./arc_core_digraph_algorithm_colors');
var visitorCallback = require('./arc_core_digraph_algorithm_visit');
var normalizeRequest = require('./arc_core_digraph_algorithm_request');

module.exports = function (request_) {

    var nrequest = null; // normalized request object
    var response = { error: null, result: null };
    var errors = [];
    var continueSearch = true;
    var inBreakScope = false;
    var searchQueue = [];

    while (!inBreakScope) {
        inBreakScope = true;
        var index, vertexId;

        var innerResponse = normalizeRequest(request_);
        if (innerResponse.error) {
            errors.unshift(innerResponse.error);
            break;
        }
        nrequest = innerResponse.result;

        // initializeVertex visitor callback.
        if (nrequest.options.traverseContext.searchStatus === 'pending') {
            for (vertexId in nrequest.options.traverseContext.colorMap) {
                innerResponse = visitorCallback({
                    algorithm: algorithmName,
                    visitor: nrequest.visitor,
                    method: 'initializeVertex',
                    request: { u: vertexId, g: nrequest.digraph, context: nrequest.context }
                });
                if (innerResponse.error) {
                    errors.unshift(innerResponse.error);
                    break;
                }
                continueSearch = innerResponse.result;
                if (!continueSearch) {
                    break;
                }
            }
        } // if searchStatus 'pending'

        nrequest.options.traverseContext.searchStatus = 'active';

        if (errors.length || !continueSearch) {
            break;
        }

        // Before we even get started, decide if this BFT is to be
        // guided by the comparison of edge weights or not.

        if ((helperFunctions.JSType(nrequest.visitor.getEdgeWeight) === "[object Function]") &&
            (helperFunctions.JSType(nrequest.visitor.compareEdgeWeights) === "[object Function]")
           ) {

            // We need to sort the startVector contents.
            nrequest.options.startVector.sort(function (vertexA_, vertexB_) {

                var compareResponse = visitorCallback({
                    algorithm: algorithmName,
                    visitor: nrequest.visitor,
                    method: 'getEdgeWeight',
                    request: { e: { u: undefined, v: vertexA_ }, g: nrequest.digraph, context: nrequest.context }
                });
                if (compareResponse.error) {
                    return 0;
                }
                var weightA = compareResponse.result;
                compareResponse = visitorCallback({
                    algorithm: algorithmName,
                    visitor: nrequest.visitor,
                    method: 'getEdgeWeight',
                    request: { e: { u: undefined, v: vertexB_ }, g: nrequest.digraph, context: nrequest.context }
                });
                if (compareResponse.error) {
                    return 0;
                }
                var weightB = compareResponse.result;
                compareResponse = visitorCallback({
                    algorithm: algorithmName,
                    visitor: nrequest.visitor,
                    method: 'compareEdgeWeights',
                    request: { a: weightA, b: weightB, context: nrequest.context }
                });
                if (compareResponse.error) {
                    return 0;
                }
                return compareResponse.result;
            });
        } // if weighted start vector

        // Initialize the BF visit or search.
        // Note that all that distinguishes visit from search is the number of starting vertices. One -> visit, N -> search.

        for (index in nrequest.options.startVector) {
            var startingVertexId = nrequest.options.startVector[index];
            // Ensure the starting vertex is in the graph container.
            if (!nrequest.digraph.isVertex(startingVertexId)) {
                errors.unshift("BFT request failed. Vertex '" + startingVertexId + "' not found in specfied directed graph container.");
                break;
            }
            // Ensure the vertex is white in the color map.
            if (nrequest.options.traverseContext.colorMap[startingVertexId] !== colors.white) {
                errors.unshift("BFT request failed. Vertex '" + startingVertexId + "' color map not initialized to white.");
                break;
            }

            // startVertex visitor callback.
            if (nrequest.options.signalStart) {
                innerResponse = visitorCallback({
                    algorithm: algorithmName,
                    visitor: nrequest.visitor,
                    method: 'startVertex',
                    request: { u: startingVertexId, g: nrequest.digraph, context: nrequest.context }
                });
                if (innerResponse.error) {
                    errors.unshift(innerResponse.error);
                    break;
                }
                continueSearch = innerResponse.result;
            }

            // Conditionally exit the loop if discoverVertex returned false.
            if (errors.length || !continueSearch) {
                break;
            }

            // discoverVertex visitor callback.
            innerResponse = visitorCallback({
                algorithm: algorithmName,
                visitor: nrequest.visitor,
                method: 'discoverVertex',
                request: { u: startingVertexId, g: nrequest.digraph, context: nrequest.context }
            });
            if (innerResponse.error) {
                errors.unshift(innerResponse.error);
                break;
            }
            continueSearch = innerResponse.result;

            // Remove the vertex from the undiscovered vertex map.
            delete nrequest.options.traverseContext.undiscoveredMap[startingVertexId];

            // Add the vertex to the search
            searchQueue.push(startingVertexId);

            // Color the vertex discovered (gray)
            nrequest.options.traverseContext.colorMap[startingVertexId] = colors.gray;

            // Conditionally exit the loop if discoverVertex returned false.
            if (!continueSearch) {
                break;
            }

        } // for initialize search

        // Execute the main breadth-first algorithm using the starting vertex set as the initial contents of the searchQueue.
        while (searchQueue.length && continueSearch && !errors.length) {

            vertexId = searchQueue.shift();

            // By convention
            nrequest.options.traverseContext.colorMap[vertexId] = colors.black;

            // examineVertex visitor callback.
            innerResponse = visitorCallback({
                algorithm: algorithmName,
                visitor: nrequest.visitor,
                method: 'examineVertex',
                request: { u: vertexId, g: nrequest.digraph, context: nrequest.context }
            });
            if (innerResponse.error) {
                errors.unshift(innerResponse.error);
                break;
            }
            continueSearch = innerResponse.result;
            if (!continueSearch) {
                break;
            }

            var outEdges = nrequest.digraph.outEdges(vertexId);

            // Conditionally order the examination of edges based on weights comparison.
            if ((helperFunctions.JSType(nrequest.visitor.getEdgeWeight) === "[object Function]") &&
                (helperFunctions.JSType(nrequest.visitor.compareEdgeWeights) === "[object Function]")
               ) {

                // We need to sort the startVector contents.
                outEdges.sort(function (edgeA_, edgeB_) {

                    var compareResponse = visitorCallback({
                        algorithm: algorithmName,
                        visitor: nrequest.visitor,
                        method: 'getEdgeWeight',
                        request: { e: edgeA_, g: nrequest.digraph, context: nrequest.context }
                    });
                    if (compareResponse.error) {
                        return 0;
                    }
                    var weightA = compareResponse.result;

                    compareResponse = visitorCallback({
                        algorithm: algorithmName,
                        visitor: nrequest.visitor,
                        method: 'getEdgeWeight',
                        request: { e: edgeB_, g: nrequest.digraph, context: nrequest.context }
                    });
                    if (compareResponse.error) {
                        return 0;
                    }
                    var weightB = compareResponse.result;

                    compareResponse = visitorCallback({
                        algorithm: algorithmName,
                        visitor: nrequest.visitor,
                        method: 'compareEdgeWeights',
                        request: { a: weightA, b: weightB, context: nrequest.context }
                    });
                    if (compareResponse.error) {
                        return 0;
                    }
                    return compareResponse.result;

                });
            } // if weight-sorted outEdges

            for (index in outEdges) {

                var outEdge = outEdges[index];

                // examineEdge visitor callback.
                innerResponse = visitorCallback({
                    algorithm: algorithmName,
                    visitor: nrequest.visitor,
                    method: 'examineEdge',
                    request: { e: outEdge, g: nrequest.digraph, context: nrequest.context }
                });
                if (innerResponse.error) {
                    errors.unshift(innerResponse.error);
                    break;
                }
                continueSearch = innerResponse.result;
                if (!continueSearch) {
                    break;
                }

                var colorV = nrequest.options.traverseContext.colorMap[outEdge.v];
                switch (colorV) {

                case colors.white:
                    // discoverVertex visitor callback.
                    innerResponse = visitorCallback({
                        algorithm: algorithmName,
                        visitor: nrequest.visitor,
                        method: 'discoverVertex',
                        request: { u: outEdge.v, g: nrequest.digraph, context: nrequest.context }
                    });
                    if (innerResponse.error) {
                        errors.unshift(innerResponse.error);
                        break;
                    }
                    continueSearch = innerResponse.result;
                    delete nrequest.options.traverseContext.undiscoveredMap[outEdge.v];
                    if (!continueSearch) {
                        break;
                    }
                    // treeEdge visitor callback.
                    innerResponse = visitorCallback({
                        algorithm: algorithmName,
                        visitor: nrequest.visitor,
                        method: 'treeEdge',
                        request: { e: outEdge, g: nrequest.digraph, context: nrequest.context }
                    });
                    if (innerResponse.error) {
                        errors.unshift(innerResponse.error);
                        break;
                    }
                    continueSearch = innerResponse.result;
                    searchQueue.push(outEdge.v);
                    nrequest.options.traverseContext.colorMap[outEdge.v] = colors.gray;
                    break;

                case colors.gray:
                    // nonTreeEdge visitor callback.
                    innerResponse = visitorCallback({
                        algorithm: algorithmName,
                        visitor: nrequest.visitor,
                        method: 'nonTreeEdge',
                        request: { e: outEdge, g: nrequest.digraph, context: nrequest.context }
                    });
                    if (innerResponse.error) {
                        errors.unshift(innerResponse.error);
                        break;
                    }
                    continueSearch = innerResponse.result;
                    if (continueSearch) {
                        // grayTarget visitor callback.
                        innerResponse = visitorCallback({
                            algorithm: algorithmName,
                            visitor: nrequest.visitor,
                            method: 'grayTarget',
                            request: { e: outEdge, g: nrequest.digraph, context: nrequest.context }
                        });
                        if (innerResponse.error) {
                            errors.unshift(innerResponse.error);
                            break;
                        }
                        continueSearch = innerResponse.result;
                    }
                    break;

                case colors.black:
                    // nonTreeEdge visitor callback.
                    innerResponse = visitorCallback({
                        algorithm: algorithmName,
                        visitor: nrequest.visitor,
                        method: 'nonTreeEdge',
                        request: { e: outEdge, g: nrequest.digraph, context: nrequest.context }
                    });
                    if (innerResponse.error) {
                        errors.unshift(innerResponse.error);
                        break;
                    }
                    continueSearch = innerResponse.result;
                    if (continueSearch) {
                        // blackTarget visitor callback.
                        innerResponse = visitorCallback({
                            algorithm: algorithmName,
                            visitor: nrequest.visitor,
                            method: 'blackTarget',
                            request: { e: outEdge, g: nrequest.digraph, context: nrequest.context }
                        });
                        if (innerResponse.error) {
                            errors.unshift(innerResponse.error);
                            break;
                        }
                        continueSearch = innerResponse.result;
                    }
                    break;

                default:
                    errors.unshift("BFT failure: An invalid color value was found in the color map for vertex '" + outEdge.v + "'. Please file an issue!");
                    break;

                } // switch (colorV)

                if (errors.length || !continueSearch) {
                    break;
                }

            } // for (outEdge in outEdges)

            if (errors.length || !continueSearch) {
                break;
            }

            // finishVertex visitor callback.
            innerResponse = visitorCallback({
                algorithm: algorithmName,
                visitor: nrequest.visitor,
                method: 'finishVertex',
                request: { u: vertexId, g: nrequest.digraph, context: nrequest.context }
            });
            if (innerResponse.error) {
                errors.unshift(innerResponse.error);
                break;
            }
            continueSearch = innerResponse.result;
            if (!continueSearch) {
                break;
            }

        } // while (searchQueue.length)

    } // end while (!inBreakScope)

    if (errors.length) {
        if (nrequest) {
            nrequest.options.traverseContext.searchStatus = 'error';
        }
        errors.unshift("jsgraph.directed.breadthFirstTraverse algorithm failure:");
        response.error = errors.join(' ');
    } else {
        nrequest.options.traverseContext.searchStatus = continueSearch?'completed':'terminated';
        response.result = nrequest.options.traverseContext;
    }
    return response;
};
