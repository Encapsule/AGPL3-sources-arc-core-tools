/*
  Encapsule/jsgraph/src/digraph-algorithm-common-context.js

  Copyright (C) 2014-2020 Christopher D. Russell

  This library is published under the MIT License and is part of the
  Encapsule Project System in Cloud (SiC) open service architecture.
  Please follow https://twitter.com/Encapsule for news and updates
  about jsgraph and other time saving libraries that do amazing things
  with in-memory data on Node.js and HTML.
*/

var helperFunctions = require('./arc_core_graph_util');
var colors = require('./arc_core_digraph_algorithm_colors');

module.exports = function (request_) {
    var response = { error: null, result: null };
    var errors = [];
    var traverseContext = { searchStatus: 'pending', colorMap: {}, undiscoveredMap: {} };
    var initializeColorMapRecord = function (vertexId_) {
        traverseContext.colorMap[vertexId_] = colors.white;
        traverseContext.undiscoveredMap[vertexId_] = true;
    };
    var inBreakScope = false;
    while (!inBreakScope) {
        inBreakScope = true;
        var objectTS = '[object Object]';
        // Verify request.
        var type = helperFunctions.JSType(request_);
        if (type !== objectTS) {
            errors.unshift("Expected request to be of type '" + objectTS + "' but found '" + type + "'.");
            break;
        }
        // Verify request.digraph.
        type = helperFunctions.JSType(request_.digraph);
        if (type !== objectTS) {
            errors.unshift("Expected request.digraph to be of type '" + objectTS + "' but found '" + type + "'.");
            break;
        }
        // Initialize the BFS search context object.
        request_.digraph.getVertices().forEach(initializeColorMapRecord);
        // Assign the result. Note that it's incumbant upon the first invocation of
        // traversal algorithm  to check/set the traverseContext.searchStatus flag and
        // correctly call the visitor.initializeVertex callback on each vertex in the
        // color map prior to the start of the search. traverseContext.searchStatus should
        // be 'running' while a search is in progress. 'terminated' if prematurely terminated
        // by client visitor code. 'complete' when search concludes normally.
        response.result = traverseContext;
    }
    if (errors.length) {
        errors.unshift("jsgraph.directed.createTraverseContext failed:");
        response.error = errors.join(' ');
    }
    return response;
};
