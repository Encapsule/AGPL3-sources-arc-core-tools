
/*
----------------------------------------------------------------------
 
           +---+---+---+---+
 chaos --> | J | B | U | S | --> order
           +---+---+---+---+

Copyright (C) 2015 Encapsule.io Bellevue, WA USA

JBUS is licensed under the GNU Affero General Public License v3.0.
Please consult the included LICENSE file for agreement terms.

----------------------------------------------------------------------
 */

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
        dispatchState = "verifying input data";
        inputFilterResponse = filterRuntimeData({
          value: request_,
          spec: this.filterDescriptor.inputFilterSpec
        });
        if (inputFilterResponse.error) {
          errors.unshift(inputFilterResponse.error);
          break;
        }
        if (this.filterDescriptor.bodyFunction) {
          dispatchState = "executing function body";
          bodyFunctionResponse = this.filterDescriptor.bodyFunction(inputFilterResponse.result);
          dispatchState = "analyzing response signature";
          returnSignatureCheck = filterRuntimeData({
            value: bodyFunctionResponse,
            spec: bodyFunctionResponseFilter
          });
          if (returnSignatureCheck.error) {
            errors.unshift(returnSignatureCheck.error);
            break;
          }
          dispatchState = "analyzing response disposition";
          if (bodyFunctionResponse.error) {
            errors.unshift(bodyFunctionResponse.error);
            break;
          }
        } else {
          bodyFunctionResponse = inputFilterResponse;
        }
        dispatchState = "verifying response result data";
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
        errors.unshift("An error occurred in function [" + this.filterDescriptor.operationName + "::" + this.filterDescriptor.operationID + "] while " + dispatchState + ":");
        response.error = errors.join(' ');
      }
      return response;
    };

    return Filter;

  })();

}).call(this);
