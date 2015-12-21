(function() {
  var GRAPHLIB, IDLIB, UTILLIB, buildRuntimeParseModel;

  GRAPHLIB = require('./arc_core_graph');

  UTILLIB = require('./arc_core_util');

  IDLIB = require('./arc_core_identifier');

  buildRuntimeParseModel = module.exports = function(request_) {
    var errors, inBreakScope, innerResponse, response, runtimeParseDigraph;
    response = {
      error: null,
      result: null
    };
    errors = [];
    inBreakScope = false;
    while (!inBreakScope) {
      inBreakScope = true;
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
        digraph: request_.digraph,
        visitor: {
          examineEdge: function(gcb_) {
            var colorHash, rtprops, uprop, vprop;
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
              case "gold:gold":
                break;
              default:
                errors.unshift("Unexpected ambiguity model digraph coloring discovered!");
            }
            return true;
          }
        }
      });
      if (errors.length) {
        break;
      }
      if (innerResponse.error) {
        errors.unshift(innerResponse.error);
      }
      response.result = {
        filterTable: request_.filterTable,
        parseDigraph: runtimeParseDigraph
      };
      break;
    }
    if (errors.length) {
      response.error = errors.join(" ");
    }
    return response;
  };

}).call(this);
