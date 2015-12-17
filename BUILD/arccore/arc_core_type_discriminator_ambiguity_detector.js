(function() {
  var GRAPHLIB, UTILLIB, partitionAndColorGraphByAmbiguity;

  GRAPHLIB = require('./arc_core_graph');

  UTILLIB = require('./arc_core_util');

  partitionAndColorGraphByAmbiguity = module.exports = function(digraph_) {
    var allFilters, ambiguousBlackVertices, bfsResponse, blackFilters, errors, filter_, goldFilters, inBreakScope, index, outEdges, rbfsVertices, response, uprop, vertex;
    response = {
      error: null,
      result: null
    };
    errors = [];
    inBreakScope = false;
    while (!inBreakScope) {
      inBreakScope = true;
      rbfsVertices = [];
      ambiguousBlackVertices = [];
      bfsResponse = GRAPHLIB.directed.breadthFirstTraverse({
        digraph: digraph_,
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
            rbfsVertices.unshift(grequest_.u);
            return true;
          }
        }
      });
      if (bfsResponse.error) {
        errors.unshift(bfsResponse.error);
        errors.unshift("Error during BFS of merged filter specification graph.");
        break;
      }
      if (!bfsResponse.result.searchStatus === "completed") {
        errors.unshift("BFS of merged filter specification graph did not complete as expected.");
        break;
      }
      if (UTILLIB.dictionaryLength(bfsResponse.result.undiscoveredMap)) {
        errors.unshift("BFS of merged filter specification graph did not discover all vertices?");
        break;
      }
      index = 0;
      while (index < rbfsVertices.length) {
        vertex = rbfsVertices[index++];
        uprop = digraph_.getVertexProperty(vertex);
        if (uprop.color !== "gray") {
          continue;
        }
        allFilters = {};
        blackFilters = {};
        goldFilters = {};
        outEdges = digraph_.outEdges(vertex);
        outEdges.forEach(function(edge_) {
          var vprop;
          vprop = digraph_.getVertexProperty(edge_.v);
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
        digraph_.setVertexProperty({
          u: vertex,
          p: uprop
        });
      }
      if (ambiguousBlackVertices.length) {
        ambiguousBlackVertices.sort();
        ambiguousBlackVertices.forEach(function(vertex_) {
          var vertexProperty;
          vertexProperty = digraph_.getVertexProperty(vertex_);
          return errors.push("Filters [" + (vertexProperty.filters.join(" and ")) + "] overlap ambiguously at filter spec node '" + vertex_ + "'.");
        });
      }
      response.result = {
        digraph: digraph_,
        ambigousBlackVertices: ambiguousBlackVertices
      };
      break;
    }
    if (errors.length) {
      response.error = errors.join(" ");
    }
    return response;
  };

}).call(this);
