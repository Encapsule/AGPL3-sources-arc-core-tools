
/*
----------------------------------------------------------------------
 
           +---+---+---+---+
 chaos --> | J | B | U | S | --> order
           +---+---+---+---+

Copyright (C) 2015 Encapsule.io Bellevue, WA USA

This software is licensed under the terms of the GNU Affero General
Public License v3.0.

Please review the included LICENSE file for specific agreement terms.
See also: https://opensource.org/licenses/AGPL-3.0

Source code:   https://github.com/encapsule.jbus
Documentation: https://encapsule.io/projects/jbus/docs/common
Licensing:     https://encapsule.io/licening

----------------------------------------------------------------------
 */

(function() {
  var convert, typeCodes, typeLUTS;

  typeCodes = require('./arc_core_types_codes');

  typeLUTS = require('./arc_core_types_luts');


  /*
      request = {
          to: dimension string used to select the result set
          from: dimension string used to interpret the reference of value
          value: JavaScript reference to a value taken as a 'from' to be converted to a 'to'
      }
      response = {
          error: null or string explaining by result is null
          result: integer in range 0 to 7 inclusive (jsCode) or string (jsStringType, jsMoniker, jsonMoniker) or null to indicate error
      }
   */

  convert = function(request_) {
    var errors, forwardLookup, inBreakScope, jsCode, lookupResult, request, requestType, response, rewriteRequest, table, valueType;
    errors = [];
    response = {
      error: null,
      result: null
    };
    inBreakScope = false;
    while (!inBreakScope) {
      inBreakScope = true;
      if (!((request_ != null) && request_)) {
        errors.unshift("Missing request object.");
        break;
      }
      requestType = Object.prototype.toString.call(request_);
      if (requestType !== '[object Object]') {
        errors.unshift("Invalid request value type. Expected reference to '[object Object]'.");
        break;
      }
      request = {};
      if (!((request_.from != null) && request_.from)) {
        errors.unshift("Invalid request missing 'from' property.");
        break;
      }
      requestType = Object.prototype.toString.call(request_.from);
      if (requestType !== '[object String]') {
        errors.unshift("Invalid request 'from' value type. Expected reference to '[object String]'.");
        break;
      }
      request.from = request_.from;
      if (!((request_.to != null) && request_.to)) {
        errors.unshift("Invalid request missing 'to' property.");
        break;
      }
      requestType = Object.prototype.toString.call(request_.to);
      if (requestType !== '[object String]') {
        errors.unshift("Invalid request 'to' value type. Expected reference to '[object String]'.");
        break;
      }
      request.to = request_.to;
      valueType = Object.prototype.toString.call(request_.value);
      forwardLookup = true;
      rewriteRequest = void 0;
      switch (request.from) {
        case 'jsReference':
          rewriteRequest = {
            to: request.to,
            from: 'jsTypeString',
            value: Object.prototype.toString.call(request_.value)
          };
          forwardLookup = false;
          break;
        case 'jsCode':
          if (valueType !== '[object Number]') {
            errors.unshift("Invalid request 'value' type. Expected reference to '[object Number]'.");
            break;
          }
          if ((request_.value < 0) || (request_.value >= typeCodes.__GUARD)) {
            errors.unshift("Invalid request 'value' '" + request_.value + "' is not a valid 'jsCode' value.");
          }
          break;
        case 'jsMoniker' || 'jsonMoniker' || 'jsTypeString':
          if (valueType !== '[object String]') {
            errors.unshift("Invalid request 'value' type. Expected reference to '[object String]'.");
          }
          forwardLookup = false;
          break;
        default:
          errors.unshift("[" + typeLUTS.dimensions + "].");
          errors.unshift("Invalid request 'from' value '" + request.from + "' is not a valid dimension string. Valid dimensions:");
          break;
      }
      if (errors.length) {
        break;
      }
      if (!((rewriteRequest != null) && rewriteRequest)) {
        request.value = request_.value;
      } else {
        request = rewriteRequest;
      }
      table = typeLUTS[forwardLookup && request.to || request.from];
      if (!((table != null) && table)) {
        errors.unshift("[" + typeLUTS.dimensions + "].");
        errors.unshift("No conversion operator from '" + request.from + "' to '" + request.to + "' available. Valid dimensions:");
        break;
      }
      if (forwardLookup) {
        lookupResult = table[request.value];
      } else {
        lookupResult = table.indexOf(request.value);
        if (lookupResult === -1) {
          errors.unshift("[" + typeLUTS.dimensions + "].");
          errors.unshift("Invalid request 'value' specifies unknown " + request.to + " '" + request.value + "'. Valid dimensions:");
          break;
        }
        if (request.to !== 'jsCode') {
          table = typeLUTS[request.to];
          if (!((table != null) && table)) {
            errors.unshift("Valid dimensions: [" + typeLUTS.dimensions + "].");
            errors.unshift("No conversion to '" + request.to + "' available.");
            break;
          }
          jsCode = lookupResult;
          lookupResult = table[jsCode];
          if (!((lookupResult != null) && lookupResult)) {
            errors.unshift("No coversion from dimension '" + request.from + "' to '" + request.to + "' for value '" + request.value + "'.");
            break;
          }
        }
      }
      response.result = lookupResult;
    }
    if (errors.length) {
      errors.unshift("jbus type conversion failed:");
      response.error = errors.join(" ");
    }
    return response;
  };

  module.exports = convert;

}).call(this);
