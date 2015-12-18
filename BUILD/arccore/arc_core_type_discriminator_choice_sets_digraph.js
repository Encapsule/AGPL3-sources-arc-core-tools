(function() {
  var UTILLIB, analyzeFilterSpecGraphVertex, buildDiscriminatorChoiceSets;

  UTILLIB = require('./arc_core_util');

  buildDiscriminatorChoiceSets = module.exports = function(request_) {
    var errors, inBreakScope, index, innerResponse, response, uprop, vertex;
    response = {
      error: null,
      result: null
    };
    errors = [];
    inBreakScope = false;
    index = 0;
    vertex = null;
    while (!inBreakScope) {
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
      inBreakScope = true;
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
        index++;
      }
      if (errors.length) {
        break;
      }
      response.result = request_;
    }
    if (errors.length) {
      response.error = errors.join(" ");
    }
    return response;
  };

  analyzeFilterSpecGraphVertex = function(request_) {
    var errors, inBreakScope, response, uprop;
    response = {
      error: null,
      result: null
    };
    errors = [];
    inBreakScope = false;
    while (!inBreakScope) {
      inBreakScope = true;
      uprop = request_.digraph.getVertexProperty(request_.vertex);
      console.log(uprop.color + " '" + request_.vertex + "'");
      if (uprop.color === "gold") {
        break;
      }
      if (uprop.color !== "green") {
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
