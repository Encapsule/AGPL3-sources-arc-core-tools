(function() {
  'use strict';
  var Filter, IDENTIFIER, bodyFunctionResponseFilter, filterRuntimeData;

  IDENTIFIER = require('./arc_core_identifier');

  filterRuntimeData = require('./arc_core_filter_runtime_spec_processor');

  bodyFunctionResponseFilter = {
    ____types: 'jsObject',
    ____label: "NF Response Object",
    ____description: "Normalized Function (NF) response object.",
    error: {
      ____types: ['jsNull', 'jsString'],
      ____label: "Error",
      ____description: "A string explaining why response.result is null. Or, null if no error occurred.",
      ____defaultValue: null
    },
    result: {
      ____opaque: true,
      ____label: "Result",
      ____description: "Null if an error occurred. Otherwise, some opaque JavaScript value reference."
    }
  };

  Object.freeze(bodyFunctionResponseFilter);

  module.exports = Filter = class Filter {
    constructor(filterDescriptor_) {
      this.request = this.request.bind(this);
      this.filterDescriptor = filterDescriptor_;
      Object.freeze(this.filterDescriptor);
    }

    request(request_) {
      var bodyFunctionResponse, dispatchState, errors, inBreakScope, inputFilterResponse, outputFilterResponse, response, returnSignatureCheck;
      response = {
        error: null,
        result: null
      };
      errors = [];
      inBreakScope = false;
      while (!inBreakScope) {
        inBreakScope = true;
        // FILTER THE INPUT REQUEST DATA
        dispatchState = "normalizing request input";
        inputFilterResponse = filterRuntimeData({
          value: request_,
          spec: this.filterDescriptor.inputFilterSpec
        });
        if (inputFilterResponse.error) {
          errors.unshift(inputFilterResponse.error);
          break;
        }
        if (this.filterDescriptor.bodyFunction) {
          // CALL MAIN FUNCTION WITH FILTERED INPUT REQUEST DATA
          dispatchState = "performing main operation";
          bodyFunctionResponse = this.filterDescriptor.bodyFunction(inputFilterResponse.result);
          returnSignatureCheck = filterRuntimeData({
            value: bodyFunctionResponse,
            spec: bodyFunctionResponseFilter
          });
          if (returnSignatureCheck.error) {
            dispatchState = "verifying response signature of main operation";
            errors.unshift(returnSignatureCheck.error);
            break;
          }
          if (bodyFunctionResponse.error) {
            errors.unshift(bodyFunctionResponse.error);
            break;
          }
        } else {
          // If no bodyFunction is defined, simply pass the input filter's response through.
          bodyFunctionResponse = inputFilterResponse;
        }
        // FILTER THE OUTPUT RESPONSE DATA OF THE MAIN FUNCTION
        dispatchState = "normalizing response result";
        outputFilterResponse = filterRuntimeData({
          value: bodyFunctionResponse.result,
          spec: this.filterDescriptor.outputFilterSpec
        });
        if (outputFilterResponse.error) {
          errors.unshift(outputFilterResponse.error);
          break;
        }
        response.result = outputFilterResponse.result;
      }
      if (errors.length) {
        // The operation failed.
        errors.unshift(`Filter [${this.filterDescriptor.operationID}::${this.filterDescriptor.operationName}] failed while ${dispatchState}.`);
        response.error = errors.join(" ");
      }
      // Return the response
      return response;
    }

  };

}).call(this);
