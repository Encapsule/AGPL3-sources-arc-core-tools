(function() {
  var IDLIB, UTILLIB, analyzeFilterSpecGraphVertex, buildDiscriminatorChoiceSets;

  UTILLIB = require('./arc_core_util');

  IDLIB = require('./arc_core_identifier');

  buildDiscriminatorChoiceSets = module.exports = function(request_) {
    var discriminatorScript, errors, inBreakScope, index, innerResponse, response, uprop, vertex;
    response = {
      error: null,
      result: null
    };
    errors = [];
    inBreakScope = false;
    index = 0;
    vertex = null;
    while (!inBreakScope) {
      inBreakScope = true;
      uprop = request_.digraph.getVertexProperty("request");
      if (uprop.color === "gold") {
        if (request_.digraph.outDegree("request")) {
          errors.unshift("Cannot create mutual exclusion set tree for merged filter spec model containing only one filter spec.");
          break;
        } else {
          errors.unshift("Cannot create mutual exclusion set tree for merged filter spec model because it's null.");
          break;
        }
      }
      discriminatorScript = [];
      while (index < request_.bfsVertices.length) {
        vertex = request_.bfsVertices[index];
        innerResponse = analyzeFilterSpecGraphVertex({
          digraph: request_.digraph,
          vertex: vertex
        });
        if (innerResponse.error) {
          errors.unshift(innerResponse.error);
          break;
        }
        discriminatorScript.push(innerResponse.result);
        index++;
      }
      if (errors.length) {
        break;
      }
      response.result = discriminatorScript;
    }
    if (errors.length) {
      response.error = errors.join(" ");
    }
    console.log("Choice Sets:");
    console.log(JSON.stringify(response, void 0, 4) + "\n\n");
    return response;
  };

  analyzeFilterSpecGraphVertex = function(request_) {
    var choices, errors, inBreakScope, outEdges, response, uprop;
    response = {
      error: null,
      result: null
    };
    errors = [];
    inBreakScope = false;
    while (!inBreakScope) {
      inBreakScope = true;
      uprop = request_.digraph.getVertexProperty(request_.vertex);
      switch (uprop.color) {
        case "gold":
          response.result = {
            truth: {
              filterID: uprop.filters[0],
              filterSpecPath: uprop.filterSpecPath,
              typeConstraint: uprop.typeConstraint
            }
          };
          break;
        case "green":
          choices = {};
          outEdges = request_.digraph.outEdges(request_.vertex);
          outEdges.forEach(function(edge_) {
            var choiceKey, vprop;
            vprop = request_.digraph.getVertexProperty(edge_.v);
            choiceKey = vprop.filters.join(":") + ":" + vprop.filterSpecPath;
            if (!((choices[choiceKey] != null) && choices[choiceKey])) {
              choices[choiceKey] = {
                disambiguate: {
                  typeConstraints: [],
                  filterSpecPath: vprop.filterSpecPath
                }
              };
            }
            return choices[choiceKey].disambiguate.typeConstraints.push(vprop.typeConstraint);
          });
          response.result = {
            disambiguate: choices
          };
          break;
        default:
          errors.unshift("Unexpected graph coloration '" + uprop.color + "' discovered on vertex '" + request_.vertex + "'.");
          break;
      }
      break;
    }
    if (errors.length) {
      response.error = errors.join(" ");
    }
    return response;
  };

}).call(this);
