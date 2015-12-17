(function() {
  var UTILLIB, analyzeFilterSpecGraphVertex, buildDiscriminatorChoiceSets;

  UTILLIB = require('./arc_core_util');

  buildDiscriminatorChoiceSets = module.exports = function(request_) {
    var errors, inBreakScope, index, innerResponse, response, vertex;
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
      while (index < request_.rbfsVertices.length) {
        vertex = request_.rbfsVertices[index];
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
