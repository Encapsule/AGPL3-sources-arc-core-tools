/*
  Encapsule/jsgraph/src/digraph-json-export.js

  Copyright (C) 2014-2020 Christopher D. Russell

  This library is published under the MIT License and is part of the
  Encapsule Project System in Cloud (SiC) open service architecture.
  Please follow https://twitter.com/Encapsule for news and updates
  about jsgraph and other time saving libraries that do amazing things
  with in-memory data on Node.js and HTML.
*/

// Export the topology and attached vertex and edge properties
// of a DirectedGraph container object as a JSON-format UTF8 
// string. This canonical format can be passed as an optional
// constructor parameter to restore container state across
// execution contexts.

var helperFunctions = require('./arc_core_graph_util');
var DigraphDataExporter = module.exports = {};

DigraphDataExporter.exportObject = function (digraph_) {
    var digraphState = {
        name: digraph_.getGraphName(),
        description: digraph_.getGraphDescription(),
        vlist: [],
        elist: []
    };
    var vertexSerialized = {}; // Keep track of the vertices referenced in the edge list.
    var edgeList = digraph_.getEdges();
    var vertexList = digraph_.getVertices();
    digraph_.getEdges().forEach(function(edge_) {
        var edgeProperty = digraph_.getEdgeProperty(edge_);
        digraphState.elist.push({ e: edge_, p: edgeProperty });
        vertexSerialized[edge_.u] = vertexSerialized[edge_.v] = true;
    });
    digraph_.getVertices().forEach(function(vertexId_) {
        var vertexProperty = digraph_.getVertexProperty(vertexId_);
        var jstype = helperFunctions.JSType(vertexProperty);
        // If the vertex has an attached property, serialize it to the vlist.
        if (jstype !== '[object Undefined]') {
            digraphState.vlist.push({ u: vertexId_, p: vertexProperty });
        } else {
            // If the vertex wasn't mentioned in the elist, we need to serialize, sans property, to the vlist.
            if (vertexSerialized[vertexId_] !== true) {
                digraphState.vlist.push({ u: vertexId_ });
            }
        }
    });
    return digraphState;
};

DigraphDataExporter.exportJSON = function (digraph_, replacer_, space_) {
    return JSON.stringify(DigraphDataExporter.exportObject(digraph_), replacer_, space_);
};
