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
      ____label: "Request Object",
      ____description: "Discriminator filter factory request object.",
      ____types: "jsObject",
      options: {
        ____label: "Options Object",
        ____description: "Factory options object.",
        ____types: "jsObject",
        ____defaultValue: {},
        action: {
          ____label: "Action Flag",
          ____description: "The action to be taken by the generated Discriminator Filter.",
          ____accept: "jsString",
          ____inValueSet: ["getFilterID", "getFilter", "routeRequest"],
          ____defaultValue: "getFilterID"
        }
      },
      filters: {
        ____label: "Array of Filters",
        ____description: "An array Filter objects that define the set of request signatures to be analyzed.",
        ____types: "jsArray",
        filter: {
          ____label: "Sub-Filter Object",
          ____description: "Pre-constructed Filter object.",
          ____types: "jsObject",
          filterDescriptor: {
            ____accept: "jsObject"
          },
          request: {
            ____accept: "jsFunction"
          }
        }
      }
    },
    bodyFunction: function(request_) {
      var ambiguityModel, errors, inBreakScope, innerResponse, mergedModel, response, runtimeFilter, runtimeParseDigraph;
      response = {
        error: null,
        result: null
      };
      errors = [];
      inBreakScope = false;
      while (!inBreakScope) {
        inBreakScope = true;
        if (request_.filters.length < 2) {
          errors.unshift("Invalid request. You must specify an array of two or more Filter objects to construct a Discriminator Filter.");
          break;
        }
        innerResponse = createMergedFilterSpecModel(request_.filters);
        if (innerResponse.error) {
          errors.unshift(innerResponse.error);
          break;
        }
        mergedModel = innerResponse.result;
        innerResponse = createAmbiguityModel(mergedModel.digraph);
        if (innerResponse.error) {
          errors.unshift(innerResponse.error);
          errors.unshift("Internal error analyzing input filter array: ");
          break;
        }
        ambiguityModel = innerResponse.result;
        ambiguityModel.ambiguousFilterSpecificationErrors.forEach(function(error_) {
          return errors.push(error_);
        });
        if (errors.length) {
          break;
        }
        innerResponse = createRuntimeParseModel(ambiguityModel.digraph);
        if (innerResponse.error) {
          errors.unshift(innerResponse.error);
          break;
        }
        runtimeParseDigraph = innerResponse.result;
        innerResponse = createDiscriminatorFilterRuntime.request({
          filterTable: mergedModel.filterTable,
          parseDigraph: runtimeParseDigraph,
          options: request_.options
        });
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
