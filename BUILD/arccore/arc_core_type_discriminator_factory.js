(function() {
  var FILTERLIB, filterlibResponse;

  FILTERLIB = require('./arc_core_filter');

  filterlibResponse = FILTERLIB.create({
    operationID: "XY-x390CSVmXTu0oYXlRiw",
    operationName: "Discrimintor Filter",
    operationDescription: "Discriminates its request as being invalid or one of N possible filter input request signatures.",
    bodyFunction: function(request_) {
      var errors, inBreakScope, response;
      response = {
        error: null,
        response: null
      };
      errors = [];
      inBreakScope = false;
      while (!inBreakScope) {
        inBreakScope = true;
        break;
      }
      if (errors.length) {
        response.error = errors.join(" ");
      }
      return response;
    }
  });

}).call(this);
