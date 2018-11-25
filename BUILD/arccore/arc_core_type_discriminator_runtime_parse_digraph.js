(function() {
  var GRAPHLIB, IDLIB, UTILLIB, buildRuntimeParseModel;

  GRAPHLIB = require('./arc_core_graph');

  UTILLIB = require('./arc_core_util');

  IDLIB = require('./arc_core_identifier');

  // request = object (ambiguity model digraph reference)
  buildRuntimeParseModel = module.exports = function(request_) {
    var errors, inBreakScope, innerResponse, response, runtimeParseDigraph, uprop;
    response = {
      error: null,
      result: null
    };
    errors = [];
    inBreakScope = false;
    while (!inBreakScope) {
      inBreakScope = true;
      uprop = request_.getVertexProperty("request");
      if (uprop.color !== "green") {
        errors.unshift(`Invalid ambiguity model digraph. The root vertex should be color 'green' but is '${uprop.color}'.`);
        break;
      }
      innerResponse = GRAPHLIB.directed.create({
        name: "Discriminator Runtime Parse Digraph"
      });
      if (innerResponse.error) {
        errors.unshift(innerResponse.error);
        break;
      }
      runtimeParseDigraph = innerResponse.result;
      runtimeParseDigraph.addVertex({
        u: "request"
      });
      innerResponse = GRAPHLIB.directed.breadthFirstTraverse({
        digraph: request_,
        visitor: {
          examineEdge: function(gcb_) {
            var colorHash, continueTraversal, rtprops, vprop;
            continueTraversal = true;
            uprop = gcb_.g.getVertexProperty(gcb_.e.u);
            vprop = gcb_.g.getVertexProperty(gcb_.e.v);
            colorHash = uprop.color + ":" + vprop.color;
            switch (colorHash) {
              case "green:green":
                rtprops = {};
                rtprops.filterSpecPath = vprop.filterSpecPath;
                rtprops.typeConstraint = vprop.typeConstraint;
                runtimeParseDigraph.addVertex({
                  u: gcb_.e.v,
                  p: rtprops
                });
                runtimeParseDigraph.addEdge({
                  e: gcb_.e
                });
                break;
              case "green:gold":
                rtprops = {};
                rtprops.filterSpecPath = vprop.filterSpecPath;
                rtprops.typeConstraint = vprop.typeConstraint;
                rtprops.filterID = vprop.filters[0];
                runtimeParseDigraph.addVertex({
                  u: gcb_.e.v,
                  p: rtprops
                });
                runtimeParseDigraph.addEdge({
                  e: gcb_.e
                });
                break;
              case "green:black":
                break;
              case "black:black":
                break;
              case "gold:gold":
                break;
              default:
                errors.push(`Illegal input digraph edge color hash '${colorHash}'`);
                errors.push(`at edge ['${gcb_.e.u}' -> '${gcb_.e.v}'].`);
                continueTraversal = false;
            }
            return continueTraversal;
          }
        }
      });
      if (errors.length) {
        break;
      }
      if (innerResponse.error) {
        errors.unshift(innerResponse.error);
      }
      response.result = runtimeParseDigraph;
      break;
    }
    if (errors.length) {
      response.error = errors.join(" ");
    }
    return response;
  };

}).call(this);
