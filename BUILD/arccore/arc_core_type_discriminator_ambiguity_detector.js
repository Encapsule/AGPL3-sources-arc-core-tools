(function() {
  var GRAPHLIB, UTILLIB, partitionAndColorGraphByAmbiguity;

  GRAPHLIB = require('./arc_core_graph');

  UTILLIB = require('./arc_core_util');

  partitionAndColorGraphByAmbiguity = module.exports = function(mergedModelDigraph_) {
    var ambiguityModelDigraph, ambiguousBlackVertices, bfsVertices, droppedFiltersList, errors, inBreakScope, index, innerResponse, message, outEdges, rbfsVertices, response, rprops, subscribersMap, updatedColor, updatedFiltersList, uprop, vertex;
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
              uprop.filters1 = [uprop.filters[0]];
            } else {
              if (grequest_.g.outDegree(grequest_.u)) {
                uprop.color = "gray";
              } else {
                uprop.color = "black";
                uprop.filters1 = [];
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
        rbfsVertices.push(bfsVertices[bfsVertices.length - index - 1]);
        index++;
      }
      index = 0;
      while (index < rbfsVertices.length) {
        vertex = rbfsVertices[index++];
        uprop = ambiguityModelDigraph.getVertexProperty(vertex);
        if ((uprop.color === "gold") || (uprop.color === "black")) {
          continue;
        }
        subscribersMap = {};
        outEdges = ambiguityModelDigraph.outEdges(vertex);
        outEdges.forEach(function(edge_) {
          var vprop;
          vprop = ambiguityModelDigraph.getVertexProperty(edge_.v);
          if (vprop.color === "black") {
            return;
          }
          return vprop.filters1.forEach(function(filter_) {
            var subcribersMapEntry, subscribersMapEntry;
            subcribersMapEntry = subscribersMap[filter_];
            if (!((typeof subscribersMapEntry !== "undefined" && subscribersMapEntry !== null) && subscribersMapEntry)) {
              subscribersMapEntry = {
                nodes: {}
              };
            }
            subscribersMapEntry.nodes[edge_.v] = vprop.color;
            return subscribersMap[filter_] = subscribersMapEntry;
          });
        });
        updatedFiltersList = [];
        droppedFiltersList = [];
        uprop.filters.forEach(function(filter_) {
          if ((subscribersMap[filter_] != null) && subscribersMap[filter_]) {
            return updatedFiltersList.push(filter_);
          } else {
            return droppedFiltersList.push(filter_);
          }
        });
        updatedColor = uprop.color;
        switch (updatedFiltersList.length) {
          case 0:
            updatedColor = "black";
            break;
          case 1:
            updatedColor = "gold";
            break;
          default:
            updatedColor = "green";
            break;
        }
        uprop.filters1 = updatedFiltersList;
        uprop.color = updatedColor;
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
      rprops = ambiguityModelDigraph.getVertexProperty("request");
      if (rprops.filters.length !== rprops.filters1.length) {
        message = [];
        if (ambiguousBlackVertices.length) {
          ambiguousBlackVertices.sort();
          ambiguousBlackVertices.forEach(function(vertex_) {
            var vertexProperty;
            if (vertex_ === "request") {
              return;
            }
            vertexProperty = ambiguityModelDigraph.getVertexProperty(vertex_);
            return message = "Filters [" + (vertexProperty.filters.join(", ")) + "] overlap ambiguously at filter spec node '" + vertex_ + "'.";
          });
          response.result.ambiguousFilterSpecificationErrors.push(message);
        }
      }
      break;
    }
    if (errors.length) {
      response.error = errors.join(" ");
    }
    return response;
  };

}).call(this);
