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
      rbfsVertices = []; // this was for the result but I think not necessary
      ambiguousBlackVertices = [];
      // DEEP COPY THE INPUT GRAPH
      innerResponse = GRAPHLIB.directed.create(mergedModelDigraph_.toJSON());
      if (innerResponse.error) {
        errors.unshift(innerResponse.error);
        break;
      }
      ambiguityModelDigraph = innerResponse.result;
      // ROOT TO LEAVES COLORING (relatively simple)
      innerResponse = GRAPHLIB.directed.breadthFirstTraverse({
        digraph: ambiguityModelDigraph,
        visitor: {
          discoverVertex: function(grequest_) {
            var uprop;
            uprop = grequest_.g.getVertexProperty(grequest_.u);
            uprop.filters.sort();
            if (uprop.filters.length === 1) {
              // If only a single filter subscribes to the node it is colored gold
              uprop.color = "gold";
              uprop.filters1 = [uprop.filters[0]];
            } else {
              // If more than one filter subscribes to the node...
              // ... color gray if the node has children to indicate that further evaluation is required.
              if (grequest_.g.outDegree(grequest_.u)) {
                uprop.color = "gray";
              } else {
                // ... color black if the node has no children to indicate that it is ambiguous
                // (i.e. cannot be used to fingerprint a specific filter)
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
      // Fail outright if the search looks off even a little bit.
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
      // console.log "AMBIGUITY MODEL BFS COLORING PHASE 2.1"
      // console.log ambiguityModelDigraph.stringify undefined, 4

      // LEAVES TO ROOT LEAVES COLORING (not as simple)
      index = 0;
      while (index < bfsVertices.length) {
        rbfsVertices.push(bfsVertices[bfsVertices.length - index - 1]);
        index++;
      }
      index = 0;
      while (index < rbfsVertices.length) {
        vertex = rbfsVertices[index++];
        uprop = ambiguityModelDigraph.getVertexProperty(vertex);
        // DO NOT TOUCH GOLD AND BLACK VERTICES
        if ((uprop.color === "gold") || (uprop.color === "black")) {
          // console.log "... '#{vertex}' remains #{uprop.color}"
          continue;
        }
        // GRAY VERTEX PROCESSING
        subscribersMap = {};
        // EXAMINE THE VERTICES ADJACENT TO THE INITIALLY GRAY VERTEX
        outEdges = ambiguityModelDigraph.outEdges(vertex);
        outEdges.forEach(function(edge_) {
          var vprop;
          vprop = ambiguityModelDigraph.getVertexProperty(edge_.v);
          if (vprop.color === "black") {
            return;
          }
          // Adjacent node is either gold (unambiguous), or green (evaluated resolvable).
          // By definition nodes colored black are ambiguous and are thus excluded here.
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
        // Detect filter's whose subcription tree ends on the current vertex (induced by set difference)
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
      // console.log "AMBIGUITY MODEL RBFS COLORING PHASE 2.2"
      // console.log ambiguityModelDigraph.stringify undefined, 4
      response.result = {
        digraph: ambiguityModelDigraph,
        ambigousBlackVertices: ambiguousBlackVertices,
        ambiguousFilterSpecificationErrors: []
      };
      // bfsVertices: bfsVertices
      // rbfsVertices: rbfsVertices

      // We cannot uniquely discriminate between filters whose input filter specifications
      // contain overlapping request structures that terminate at the leaf node of any of
      // the consituent filter's contributions to the merged filter spec digraph model.
      // Note that this algorithm does not return an error if asked to analyze an ambiguous
      // exclusion set model (the input digraph model that's initially white). Rather errors
      // are reserved for non-routine problems.
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
            return message = `Filters [${vertexProperty.filters.join(", ")}] overlap ambiguously at filter spec node '${vertex_}'.`;
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
