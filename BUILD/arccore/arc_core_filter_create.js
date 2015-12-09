
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
  var Filter, IDENTIFIER, verifyFilterCreateRequest, verifyFilterSpecDeclaration;

  IDENTIFIER = require('./arc_core_identifier');

  verifyFilterCreateRequest = require('./arc_core_filter_create_verify_request');

  verifyFilterSpecDeclaration = require('./arc_core_filter_create_verify_spec');

  Filter = require('./arc_core_filter_runtime');


  /*
      request = {
  
           * Describes the function for machine readers.
          operationID: required IRUT string
  
           * Describe the function for human readers.
          operationName: required string
          operationDescription: required string
  
           * Describe your function's inputs for human readers.
          inputName: required string
          inputDescription: required string
  
           * Describe your function's inputs for machine readers.
          inputTypeMap: object
  
           * Describe your function's outputs for human readers.
          outputName: required string
          outputDescription: required string
  
           * Describe your function's outputs for machine readers.
          
          outputTypeMap: object
  
          bodyFunction: function you wish to wrap in a NormalizedFunction
  
      }
      response = {
          error: null or string explaining why result is null
          result: a NormalizedFunction instance or null if an error occurred
      }
   */

  module.exports = function(request_) {
    var errors, functionDescriptor, inBreakScope, innerResponse, response;
    response = {
      error: null,
      result: null
    };
    errors = [];
    inBreakScope = false;
    while (!inBreakScope) {
      inBreakScope = true;
      innerResponse = verifyFilterCreateRequest(request_);
      if (innerResponse.error) {
        errors.unshift(innerResponse.error);
        break;
      }
      functionDescriptor = innerResponse.result;
      if ((functionDescriptor.inputFilterSpec != null) && functionDescriptor.inputFilterSpec) {
        innerResponse = verifyFilterSpecDeclaration({
          path: '~.inputFilterSpec',
          typemap: functionDescriptor.inputFilterSpec
        });
        if (innerResponse.error) {
          errors.unshift(innerResponse.error);
          break;
        }
      }
      if ((functionDescriptor.outputFilterSpec != null) && functionDescriptor.outputFilterSpec) {
        innerResponse = verifyFilterSpecDeclaration({
          path: '~.outputFilterSpec',
          typemap: functionDescriptor.outputFilterSpec
        });
        if (innerResponse.error) {
          errors.unshift(innerResponse.error);
          break;
        }
      }
      Object.freeze(functionDescriptor);
      response.result = new Filter(functionDescriptor);
    }
    if (errors.length) {
      errors.unshift("jbus.common.filter.create request failed:");
      response.error = errors.join(' ');
    }
    return response;
  };

}).call(this);
