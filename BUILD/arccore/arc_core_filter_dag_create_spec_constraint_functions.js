
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
  var FILTERDAGREQFS, FILTERLIB, IDENTIFIERLIB, filterlibResponse;

  FILTERLIB = require('./arc_core_filter');

  IDENTIFIERLIB = require('./arc_core_identifier');

  FILTERDAGREQFS = require('./arc_core_filter_dag_create_ifs');

  filterlibResponse = FILTERLIB.create({
    operationID: '7bqdXoXHSvm90lMvfkOUKQ',
    operationName: "FilterDAG Function Constraint Processor",
    operationDescription: "Parses a FilterDAG function constraint specification and returns an intermediate result.",
    inputFilterSpec: FILTERDAGREQFS.inputFilterSpec.dagSpecification.constraints.functions,
    bodyFunction: function(request_) {
      var errors, filterMap, functionMap, inBreakScope, index, response;
      response = {
        error: null,
        result: null
      };
      errors = [];
      inBreakScope = false;
      while (!inBreakScope) {
        inBreakScope = true;
        if (!request_.length) {
          errors.unshift("You must specifiy at least one function constraint descriptor.");
          break;
        }
        filterMap = {};
        functionMap = {};
        index = 0;
        request_.forEach(function(functionDescriptor_) {
          var innerResponse, name, value, value1;
          name = functionDescriptor_.name;
          value = functionMap[name];
          if ((value != null) && value) {
            errors.unshift("Illegal duplicate name value '" + name + "' found examining constraints.functions[" + index + "].");
          } else {
            value = functionMap[name] = functionDescriptor_;
            delete value.name;
            innerResponse = IDENTIFIERLIB.irut.isIRUT(value.filterBinding.id);
            if (innerResponse.error) {
              errors.unshift(innerResponse.error);
            }
            if (!innerResponse.result) {
              errors.unshift(innerResponse.guidance);
              errors.unshift("Illegal filterBinding.id value '" + value.filterBinding.id + "' found examining constraints.functions[" + index + "]:");
            }
            value1 = filterMap[value.filterBinding.id];
            if (!((value1 != null) && value)) {
              filterMap[value.filterBinding.id] = null;
            }
          }
          return index++;
        });
        if (!errors.length) {
          response.result = {
            functions: functionMap,
            filters: filterMap
          };
        }
        break;
      }
      if (errors.length) {
        response.error = errors.join(" ");
      }
      return response;
    }
  });

  if (filterlibResponse.error) {
    throw new Error(filterlibResponse.error);
  }

  module.exports = filterlibResponse.result;

}).call(this);
