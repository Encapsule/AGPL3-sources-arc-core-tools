
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
    operationID: '-OOcB4IIRQuMWZJ0zZKPUw',
    operationName: "FilterDAG Runtime Generator",
    operationDescription: "Constructs and initializes a FilterDAG reactive system simulation runtime host instance from a FilterDAG Specification Manifest.",
    bodyFunction: function(request_) {
      var errors, genTag, inBreakScope, innerResponse, response, result;
      response = {
        error: null,
        result: null
      };
      errors = [];
      inBreakScope = false;
      while (!inBreakScope) {
        inBreakScope = true;
        result = {};
        genTag = {
          id: this.operationID,
          name: this.operationName
        };
        innerResponse = IDENTIFIERLIB.irut.fromReference(result);
        if (innerResponse.error) {
          errors.unshift(innerResponse.error);
          break;
        }
        genTag.hash = innerResponse.result;
        result.generator = genTag;
        response.result = result;
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
