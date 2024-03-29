/*
  Encapsule/jsgraph/src/digraph-algorithm-common-visit.js

  Copyright (C) 2014-2020 Christopher D. Russell

  This library is published under the MIT License and is part of the
  Encapsule Project System in Cloud (SiC) open service architecture.
  Please follow https://twitter.com/Encapsule for news and updates
  about jsgraph and other time saving libraries that do amazing things
  with in-memory data on Node.js and HTML.
*/

// Wraps call to DirectedGraph algorithm visitor function callbacks.

var helperFunctions = require('./arc_core_graph_util');

/*
  request = {
      visitor: interface object reference
      algorithm: string name of the algorithm for error messages
      method: string name of the visitor method to call
      request: request object to pass to the visitor method
  },
  response = {
      error: null or string explaining by response.error is null
      result: null (error) or Boolean flag set true to continue search
  }
*/

module.exports = function (request_) {

    var response = { error: null, result: null };
    var errors = [];
    var inBreakScope = false;
    while (!inBreakScope) {
        inBreakScope = true;
        var visitorCallback = request_.visitor[request_.method];
        var jstype = helperFunctions.JSType(visitorCallback);

        // If the visitor function is not defined on the visitor object, return true to continue the search.
        if (jstype !== '[object Function]') {
            if (jstype !== '[object Undefined]') {
                errors.unshift(request_.algorithm + " visitor interface method '" + request_.method + "' is type '" + jstype + "' instead of '[object Function]' as expected.");
                break;
            }
            response.result = true;
            break;
        }
        // Call the visitor method (just a function):
        var visitorResult = visitorCallback(request_.request);
        jstype = helperFunctions.JSType(visitorResult)

        switch (request_.method) {
        case "getEdgeWeight":
            // We do not know or care about this type - it's entirely developer-defined
            response.result = visitorResult;
            break;
        case "compareEdgeWeights":
            if (jstype !== "[object Number]") {
                errors.unshift(request_.algorithm + " vistor interface error in callback function '" + request_.method + "'. Function returned type '" + jstype + "' instead of expected '[object Number]'.");
            } else {
                response.result = visitorResult;
            }
            break;
        default:
            if (jstype !== "[object Boolean]") {
                errors.unshift(request_.algorithm + " visitor interface error in callback function '" + request_.method + "'. Function returned type '" + jstype + "' instead of expected '[object Boolean]'.");
            } else {
                response.result = visitorResult;
            }
            break;
        }

        break;
    }

    if (errors.length) {
        response.error = errors.join(' ');
    }

    return response;
};



