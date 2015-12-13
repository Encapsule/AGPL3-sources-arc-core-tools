(function() {
  var FILTERLIB, GRAPHLIB, UTILLIB, addSpecToSpecGraph, filterlibResponse;

  UTILLIB = require('./arc_core_util');

  FILTERLIB = require('./arc_core_filter');

  GRAPHLIB = require('./arc_core_graph');

  addSpecToSpecGraph = require('./arc_core_type_discriminator_graph');

  filterlibResponse = FILTERLIB.create({
    operationID: "5A8uDJunQUm1w-HcBPQ6Gw",
    operationName: "Type Descriminator",
    operationDescription: "Produces a Filter that accepts variant input that automatically detects the input type.",
    inputName: "Type Descriminator Filter Input",
    inputDescription: "An array of two or more Filters whose input Filter Specs will be used to build the discrimination filter.",
    inputFilterSpec: {
      ____opaque: true
    },
    bodyFunction: function(request_) {
      var bfsResponse, errors, filter, i, inBreakScope, innerResponse, len, response, specificationGraph, specificationScoreboard, verticesToPrune;
      response = {
        error: null,
        result: null
      };
      errors = [];
      inBreakScope = false;
      while (!inBreakScope) {
        inBreakScope = true;
        specificationGraph = GRAPHLIB.directed.create().result;
        specificationGraph.addVertex({
          u: "request",
          p: {
            color: "white"
          }
        });
        specificationScoreboard = {};
        verticesToPrune = [];
        for (i = 0, len = request_.length; i < len; i++) {
          filter = request_[i];
          innerResponse = addSpecToSpecGraph({
            graph: specificationGraph,
            filter: filter
          });
          if (innerResponse.error) {
            errors.unshift(innerResponse.error);
            break;
          }
          specificationScoreboard[filter.filterDescriptor.operationID] = "unknown";
        }
        bfsResponse = GRAPHLIB.directed.breadthFirstTraverse({
          digraph: specificationGraph,
          visitor: {
            discoverVertex: function(grequest_) {
              var allVertices, currentVertexProperty, operationID, outEdges, unambiguousVertices, unresolvableFilters;
              currentVertexProperty = grequest_.g.getVertexProperty(grequest_.u);
              console.log("examineVertex '" + grequest_.u + "'");
              outEdges = grequest_.g.outEdges(grequest_.u);
              switch (currentVertexProperty.color) {
                case "white":
                  unresolvableFilters = {};
                  unambiguousVertices = [];
                  allVertices = [];
                  outEdges.forEach(function(edge_) {
                    var targetVertexProperty;
                    targetVertexProperty = grequest_.g.getVertexProperty(edge_.v);
                    allVertices.push(edge_.v);
                    if (targetVertexProperty.filters.length > 1) {
                      return targetVertexProperty.filters.forEach(function(filterID_) {
                        return unresolvableFilters[filterID_] = true;
                      });
                    } else {
                      return unambiguousVertices.push(edge_.v);
                    }
                  });
                  for (operationID in specificationScoreboard) {
                    if (!((unresolvableFilters[operationID] != null) && unresolvableFilters[operationID])) {
                      unambiguousVertices.forEach(function(vertexID_) {
                        var targetVertexProperty;
                        targetVertexProperty = grequest_.g.getVertexProperty(vertexID_);
                        if (targetVertexProperty.filters[0] === operationID) {
                          targetVertexProperty.color = "orange";
                          return grequest_.g.setVertexProperty({
                            u: vertexID_,
                            targetVertexProperty: targetVertexProperty
                          });
                        }
                      });
                    }
                  }
                  allVertices.forEach(function(vertexID_) {
                    var results, targetVertexProperty;
                    targetVertexProperty = grequest_.g.getVertexProperty(vertexID_);
                    if (targetVertexProperty.color === "white") {
                      if (targetVertexProperty.filters.length === 1) {
                        targetVertexProperty.color = "black";
                        return grequest_.g.setVertexProperty({
                          u: vertexID_,
                          targetVertexProperty: targetVertexProperty
                        });
                      } else {
                        results = [];
                        for (operationID in unresolvableFilters) {
                          if (targetVertexProperty.filters[operationID]) {
                            targetVertexProperty.color = "black";
                            results.push(grequest_.g.setVertexProperty({
                              u: vertexID_,
                              targetVertexProperty: targetVertexProperty
                            }));
                          } else {
                            results.push(void 0);
                          }
                        }
                        return results;
                      }
                    }
                  });
                  break;
                case "black":
                  outEdges.forEach(function(edge_) {
                    var targetVertexProperty;
                    targetVertexProperty = grequest_.g.getVertexProperty(edge_.v);
                    targetVertexProperty.color = currentVertexProperty.color;
                    return grequest_.g.setVertexProperty({
                      u: edge_.v,
                      p: targetVertexProperty
                    });
                  });
                  break;
                case "orange":
                  outEdges.forEach(function(edge_) {
                    var targetVertexProperty;
                    targetVertexProperty = grequest_.g.getVertexProperty(edge_.v);
                    targetVertexProperty.color = currentVertexProperty.color;
                    return grequest_.g.setVertexProperty({
                      u: edge_.v,
                      p: targetVertexProperty
                    });
                  });
                  break;
                default:
                  console.log("UNEXPECTED COLOR IN MAP! " + currentVertexProperty.color);
                  break;
              }
              return true;
            },
            examineVertex: function(grequest_) {
              var blackVertices, currentVertexProperty, outEdges;
              currentVertexProperty = grequest_.g.getVertexProperty(grequest_.u);
              console.log("finishVertex '" + grequest_.u + "'");
              switch (currentVertexProperty.color) {
                case "white":
                  outEdges = grequest_.g.outEdges(grequest_.u);
                  blackVertices = 0;
                  outEdges.forEach(function(edge_) {
                    if (grequest_.g.getVertexProperty(edge_.v).color = "black") {
                      return blackVertices++;
                    }
                  });
                  if (outEdges.length && (outEdges.length === blackVertices)) {
                    currentVertexProperty.color = "black";
                    grequest_.g.setVertexProperty({
                      u: grequest_.u,
                      p: currentVertexProperty
                    });
                  } else {
                    currentVertexProperty.color === "gold";
                    grequest_.g.setVertexProperty({
                      u: grequest_.u,
                      p: currentVertexProperty
                    });
                  }
                  break;
                case "black":
                  break;
                case "orange":
                  currentVertexProperty.color = "gold";
                  grequest_.g.setVertexProperty({
                    u: grequest_u,
                    p: currentVertexProperty
                  });
                  break;
                default:
                  console.log("bad color " + currentVertexProperty.color);
                  errors.push("Internal error. Unexpected color found in map '" + currentVertexProperty.color + "'");
                  break;
              }
              return true;
            }
          }
        });
        response.result = specificationGraph;
        break;
      }
      if (errors.length) {
        response.error = errors.join(" ");
      }
      return response;
    },
    outputName: "Type Desrimination Filter Output",
    outputDescriptor: "A generated Type Descriminator Filter.",
    outputFilterSpec: {
      ____opaque: true
    }
  });

  if (filterlibResponse.error) {
    throw new Error(filterlibResponse.error);
  }

  module.exports = filterlibResponse.result;

}).call(this);
