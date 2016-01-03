(function() {
  'use strict';
  var Filter, IDENTIFIER, bodyFunctionResponseFilter, filterRuntimeData,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

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

  module.exports = Filter = (function() {
    function Filter(filterDescriptor_) {
      this.request = bind(this.request, this);
      this.filterDescriptor = filterDescriptor_;
      Object.freeze(this.filterDescriptor);
    }

    Filter.prototype.request = function(request_) {
      var bodyFunctionResponse, dispatchState, errors, inBreakScope, inputFilterResponse, outputFilterResponse, response, returnSignatureCheck;
      response = {
        error: null,
        result: null
      };
      errors = [];
      inBreakScope = false;
      while (!inBreakScope) {
        inBreakScope = true;
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
          bodyFunctionResponse = inputFilterResponse;
        }
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
        errors.unshift("Filter [" + this.filterDescriptor.operationID + "::" + this.filterDescriptor.operationName + "] failed while " + dispatchState + ".");
        response.error = errors.join(" ");
      }
      return response;
    };

    return Filter;

  })();

}).call(this);
