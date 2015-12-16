(function() {
  var FILTERLIB, GRAPHLIB, UTILLIB, buildMergedFilterSpecDigraphModel, deduceDiscriminationChoiceSets, filterlibResponse;

  UTILLIB = require('./arc_core_util');

  FILTERLIB = require('./arc_core_filter');

  GRAPHLIB = require('./arc_core_graph');

  buildMergedFilterSpecDigraphModel = require('./arc_core_type_discriminator_filter_spec_digraph');

  deduceDiscriminationChoiceSets = require('./arc_core_type_discriminator_choice_sets_digraph');

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
      var errors, inBreakScope, innerResponse, mergedFilterSpecGraphModel, response;
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
        mergedFilterSpecGraphModel = innerResponse.result;

        /*
        innerResponse = deduceDiscriminationChoiceSets
            digraph: mergedFilterSpecGraphModel.digraph
            rbfsVertices: mergedFilterSpecGraphModel.order.rbfsVertices
        if innerResponse.error
            errors.unshift innerResponse.error
            break
         */
        response.result = mergedFilterSpecGraphModel;
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
