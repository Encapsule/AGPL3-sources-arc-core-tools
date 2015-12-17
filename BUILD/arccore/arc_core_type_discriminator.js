(function() {
  var FILTERLIB, buildMergedFilterSpecDigraphModel, deduceDiscriminationChoiceSets, filterlibResponse, partitionAndColorGraphByAmbiguity;

  FILTERLIB = require('./arc_core_filter');

  buildMergedFilterSpecDigraphModel = require('./arc_core_type_discriminator_filter_spec_digraph');

  partitionAndColorGraphByAmbiguity = require('./arc_core_type_discriminator_ambiguity_detector');

  deduceDiscriminationChoiceSets = require('./arc_core_type_discriminator_choice_sets_digraph');

  filterlibResponse = FILTERLIB.create({
    operationID: "5A8uDJunQUm1w-HcBPQ6Gw",
    operationName: "Request Discriminator Filter Factory",
    operationDescription: "Manufactures a new Filter object that routes its request to 1:N registered sub-Filter objects based on analysis of the request signature.",
    inputFilterSpec: {
      ____label: "Array of Filters",
      ____description: "An array Filter objects that define the set of request signatures to be analyzed.",
      ____types: "jsArray",
      filter: {
        ____label: "Sub-Filter Object",
        ____description: "Pre-constructed Filter object.",
        ____accept: "jsObject"
      }
    },
    bodyFunction: function(request_) {
      var errors, exclusionSetModel, inBreakScope, innerResponse, mergedFilterSpecGraphModel, response;
      response = {
        error: null,
        result: null
      };
      errors = [];
      inBreakScope = false;
      while (!inBreakScope) {
        inBreakScope = true;
        console.log("STAGE 1: MERGED FILTER SPEC GRAPH BUILDER OUTPUT");
        innerResponse = buildMergedFilterSpecDigraphModel(request_);
        if (innerResponse.error) {
          errors.unshift(innerResponse.error);
          break;
        }
        mergedFilterSpecGraphModel = innerResponse.result;
        console.log(mergedFilterSpecGraphModel.digraph.toJSON(void 0, 4));
        console.log("STAGE 2: PARTITION AND COLOR GRAPH BY AMBIGUITY");
        innerResponse = partitionAndColorGraphByAmbiguity(mergedFilterSpecGraphModel.digraph);
        console.log(mergedFilterSpecGraphModel.digraph.toJSON(void 0, 4));
        if (innerResponse.error) {
          errors.unshift(innerResponse.error);
          errors.unshift("Internal error analyzing input filter array: ");
          break;
        }
        exclusionSetModel = innerResponse.result;
        exclusionSetModel.ambiguousFilterSpecificationErrors.forEach(function(error_) {
          return errors.push(error_);
        });
        if (errors.length) {
          break;
        }
        innerResponse = deduceDiscriminationChoiceSets({
          digraph: mergedFilterSpecGraphModel.digraph,
          rbfsVertices: mergedFilterSpecGraphModel.order.rbfsVertices
        });
        if (innerResponse.error) {
          errors.unshift(innerResponse.error);
          break;
        }
        response.result = exclusionSetModel;
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
