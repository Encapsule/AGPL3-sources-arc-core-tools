(function() {
  var GRAPHLIB, UTILLIB, partitionAndColorGraphByAmbiguity;

  GRAPHLIB = require('./arc_core_graph');

  UTILLIB = require('./arc_core_util');

  partitionAndColorGraphByAmbiguity = module.exports = function(mergedModelDigraph_) {
    var allFilters, ambiguityModelDigraph, ambiguousBlackVertices, bfsVertices, blackFilters, errors, filter_, goldFilters, inBreakScope, index, innerResponse, outEdges, rbfsVertices, response, uprop, vertex;
    response = {
      error: null,
      result: null
    };
    errors = [];
    inBreakScope = false;
    while (!inBreakScope) {
      inBreakScope = true;
      bfsVertices = [];
      rbfsVertices = [];
      ambiguousBlackVertices = [];
      innerResponse = GRAPHLIB.directed.create(mergedModelDigraph_.toJSON());
      if (innerResponse.error) {
        errors.unshift(innerResponse.error);
        break;
      }
      ambiguityModelDigraph = innerResponse.result;
      innerResponse = GRAPHLIB.directed.breadthFirstTraverse({
        digraph: ambiguityModelDigraph,
        visitor: {
          discoverVertex: function(grequest_) {
            var uprop;
            uprop = grequest_.g.getVertexProperty(grequest_.u);
            uprop.filters.sort();
            if (uprop.filters.length === 1) {
              uprop.color = "gold";
            } else {
              if (grequest_.g.outDegree(grequest_.u)) {
                uprop.color = "gray";
              } else {
                uprop.color = "black";
                ambiguousBlackVertices.push(grequest_.u);
              }
            }
            grequest_.g.setVertexProperty({
              u: grequest_.u,
              p: uprop
            });
            bfsVertices.push(grequest_.u);
            return true;
          }
        }
      });
      if (innerResponse.error) {
        errors.unshift(innerResponse.error);
        errors.unshift("Error during BFS of merged filter specification graph.");
        break;
      }
      if (!innerResponse.result.searchStatus === "completed") {
        errors.unshift("BFS of merged filter specification graph did not complete as expected.");
        break;
      }
      if (UTILLIB.dictionaryLength(innerResponse.result.undiscoveredMap)) {
        errors.unshift("BFS of merged filter specification graph did not discover all vertices?");
        break;
      }
      index = 0;
      while (index < bfsVertices.length) {
        rbfsVertices[index] = bfsVertices[bfsVertices.length - index - 1];
        index++;
      }
      index = 0;
      while (index < rbfsVertices.length) {
        vertex = rbfsVertices[index++];
        uprop = ambiguityModelDigraph.getVertexProperty(vertex);
        if (uprop.color !== "gray") {
          continue;
        }
        allFilters = {};
        blackFilters = {};
        goldFilters = {};
        outEdges = ambiguityModelDigraph.outEdges(vertex);
        outEdges.forEach(function(edge_) {
          var vprop;
          vprop = ambiguityModelDigraph.getVertexProperty(edge_.v);
          return vprop.filters.forEach(function(filter_) {
            allFilters[filter_] = true;
            if ((vprop.color === "gold") || (vprop.color === "green")) {
              return goldFilters[filter_] = true;
            } else if (vprop.color === "black") {
              return blackFilters[filter_] = true;
            } else {
              return errors.unshift("Unexpected color '" + vprop.color + "' discovered analyzing vertex '" + edge_.v + "'.");
            }
          });
        });
        uprop.filters.forEach(function(filter_) {
          if (!((allFilters[filter_] != null) && allFilters[filter_])) {
            return blackFilters[filter_] = true;
          }
        });
        for (filter_ in blackFilters) {
          if ((goldFilters[filter_] != null) && goldFilters[filter_]) {
            delete goldFilters[filter_];
          }
        }
        if (!UTILLIB.dictionaryLength(blackFilters)) {
          uprop.color = "green";
        } else {
          uprop.color = "black";
          ambiguousBlackVertices.push(vertex);
        }
        ambiguityModelDigraph.setVertexProperty({
          u: vertex,
          p: uprop
        });
      }
      response.result = {
        digraph: ambiguityModelDigraph,
        ambigousBlackVertices: ambiguousBlackVertices,
        ambiguousFilterSpecificationErrors: []
      };
      if (ambiguousBlackVertices.length) {
        ambiguousBlackVertices.sort();
        ambiguousBlackVertices.forEach(function(vertex_) {
          var message, vertexProperty;
          if (vertex_ === "request") {
            return;
          }
          vertexProperty = ambiguityModelDigraph.getVertexProperty(vertex_);
          message = "Filters [" + (vertexProperty.filters.join(" and ")) + "] overlap ambiguously at filter spec node '" + vertex_ + "'.";
          return response.result.ambiguousFilterSpecificationErrors.push(message);
        });
      }
      break;
    }
    if (errors.length) {
      response.error = errors.join(" ");
    }
    return response;
  };

}).call(this);
