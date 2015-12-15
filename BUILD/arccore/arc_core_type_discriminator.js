(function() {
  var FILTERLIB, GRAPHLIB, UTILLIB, analyzeMergedFilterSpecVertex, buildMergedFilterSpecDigraphModel, filterlibResponse;

  UTILLIB = require('./arc_core_util');

  FILTERLIB = require('./arc_core_filter');

  GRAPHLIB = require('./arc_core_graph');

  buildMergedFilterSpecDigraphModel = require('./arc_core_type_discriminator_filter_spec_digraph');

  analyzeMergedFilterSpecVertex = require('./arc_core_type_discriminator_choice_sets_digraph');

  filterlibResponse = FILTERLIB.create({
    operationID: "5A8uDJunQUm1w-HcBPQ6Gw",
    operationName: "Type Discriminator",
    operationDescription: "Analyze request data and return the operationID of the filter the data should be routed to.",
    inputName: "Type Descriminator Filter Input",
    inputDescription: "An array of two or more Filters whose input Filter Specs will be used to build the discrimination filter.",
    inputFilterSpec: {
      ____opaque: true
    },
    bodyFunction: function(request_) {
      var errors, filterSpecDigraph, inBreakScope, innerResponse, response;
      response = {
        error: null,
        result: null
      };
      errors = [];
      inBreakScope = false;
      while (!inBreakScope) {
        inBreakScope = true;
        innerResponse = buildMergedFilterSpecDigraphModel(request_);
        if (innerResponse.error) {
          errors.unshift(innerResponse.error);
          break;
        }
        filterSpecDigraph = innerResponse.result;
        filterSpecDigraph.order.rbfsVertices.forEach(function(vertex_) {
          innerResponse = analyzeMergedFilterSpecVertex({
            digraph: filterSpecDigraph.digraph,
            vertex: vertex_
          });
          if (innerResponse.error) {
            return errors.unshift(innerResponse.error);
          }
        });
        console.log(filterSpecDigraph.digraph.toJSON(void 0, 4));
        response.result = filterSpecDigraph;
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
