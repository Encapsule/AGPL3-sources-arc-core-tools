(function() {
  var FILTERLIB, createAmbiguityModel, createDiscriminatorFilterRuntime, createMergedFilterSpecModel, createRuntimeParseModel, filterlibResponse;

  FILTERLIB = require('./arc_core_filter');

  createMergedFilterSpecModel = require('./arc_core_type_discriminator_merged_model_digraph');

  createAmbiguityModel = require('./arc_core_type_discriminator_ambiguity_detector');

  createRuntimeParseModel = require('./arc_core_type_discriminator_runtime_parse_digraph');

  createDiscriminatorFilterRuntime = require('./arc_core_type_discriminator_runtime');

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
      var ambiguityModel, errors, inBreakScope, innerResponse, mergedModel, response, runtimeFilter, runtimeModel;
      response = {
        error: null,
        result: null
      };
      errors = [];
      inBreakScope = false;
      while (!inBreakScope) {
        inBreakScope = true;
        console.log("STAGE 1: MERGED FILTER SPEC GRAPH BUILDER OUTPUT");
        innerResponse = createMergedFilterSpecModel(request_);
        if (innerResponse.error) {
          errors.unshift(innerResponse.error);
          break;
        }
        mergedModel = innerResponse.result;
        console.log(mergedModel.digraph.toJSON(void 0, 4));
        console.log("STAGE 2: PARTITION AND COLOR GRAPH BY AMBIGUITY");
        innerResponse = createAmbiguityModel(mergedModel.digraph);
        if (innerResponse.error) {
          errors.unshift(innerResponse.error);
          errors.unshift("Internal error analyzing input filter array: ");
          break;
        }
        ambiguityModel = innerResponse.result;
        console.log(ambiguityModel.digraph.toJSON(void 0, 4));
        console.log("... checking for ambiguities in the ambiguity model");
        ambiguityModel.ambiguousFilterSpecificationErrors.forEach(function(error_) {
          return errors.push(error_);
        });
        if (errors.length) {
          break;
        }
        console.log("STAGE 3: GIVEN AN UNAMBIGUOUS MODEL DIGRAPH CREATE RUNTIME MODEL");
        innerResponse = createRuntimeParseModel(ambiguityModel.digraph);
        if (innerResponse.error) {
          errors.unshift(innerResponse.error);
          break;
        }
        runtimeModel = innerResponse.result;
        console.log(JSON.stringify(runtimeModel, void 0, 4));
        console.log("STAGE 4: GENERATE DISCRIMINATOR RUNTIME FILTER");
        innerResponse = createDiscriminatorFilterRuntime(runtimeParseGraph);
        if (innerResponse.error) {
          errors.unshift(innerResponse.error);
          break;
        }
        runtimeFilter = innerResponse.result;
        response.result = runtimeFilter;
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
