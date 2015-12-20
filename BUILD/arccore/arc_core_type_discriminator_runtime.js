(function() {
  var FILTERLIB, generateDiscriminatorRuntimeFilter;

  FILTERLIB = require('./arc_core_filter');

  generateDiscriminatorRuntimeFilter = module.exports = function(runtimeContext_) {
    var errors, inBreakScope, innerResponse, response, runtimeContext;
    response = {
      error: null,
      result: null
    };
    errors = [];
    inBreakScope = false;
    runtimeContext = runtimeContext_;
    while (!inBreakScope) {
      inBreakScope = true;
      innerResponse = FILTERLIB.create({
        operationID: "XY-x390CSVmXTu0oYXlRiw",
        operationName: "Discrimintor Filter",
        operationDescription: "Discriminates between N disjunct request signatures.",
        bodyFunction: function(request_) {
          response = {
            error: null,
            response: null
          };
          errors = [];
          inBreakScope = false;
          while (!inBreakScope) {
            inBreakScope = true;
            console.log("In " + this.operationName + ":" + this.operationID);
            console.log("runtime context = " + (JSON.stringify(runtimeContext)));
            break;
          }
          if (errors.length) {
            response.error = errors.join(" ");
          }
          return response;
        }
      });
      if (innerResponse.error) {
        errors.unshift(innerResponse.error);
        errors.unshift("Unable to generate discriminator filter runtime due to error:");
        break;
      }
      response.result = innerResponse.result;
      break;
    }
    if (errors.length) {
      response.error = errors.join(" ");
    }
    return response;
  };

}).call(this);
