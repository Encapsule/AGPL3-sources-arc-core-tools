(function() {
  var FILTERLIB, TYPELIB, checkPropertyNameTypeConstraint, generateDiscriminatorRuntimeFilter;

  FILTERLIB = require('./arc_core_filter');

  TYPELIB = require('./arc_core_types');

  checkPropertyNameTypeConstraint = require('./arc_core_type_discriminator_runtime_check_property');

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
          var continueRankScan, currentVertex, edge, filterID, index, input, outEdges, path, pathParts, testPropertyName, testReference, testTypeConstraint, uprop, vprop;
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
            input = {
              request: request_
            };
            path = null;
            currentVertex = "request";
            filterID = null;
            while ((!filterID) && currentVertex) {
              uprop = runtimeContext.getVertexProperty(currentVertex);
              outEdges = runtimeContext.outEdges(currentVertex);
              index = 0;
              continueRankScan = true;
              while (continueRankScan && (index < outEdges.length)) {
                edge = outEdges[index++];
                vprop = runtimeContext.parseDigraph.getVertexProperty(edge.v);
                testTypeConstraint = vprop.typeContraint;
                pathParts = vprop.filterSpecPath.split(".");
                testPropertyName = pathParts[pathParts.length - 1];
                testReference = input[testPropertyName];
                innerResponse = TYPELIB.check({
                  value: testReference,
                  types: testTypeConstraint
                });
                if (!innerResponse.error) {
                  continueRankScan = false;
                  if ((vprop.filterID != null) && vprop.filterID) {
                    filterID = vprop.filterID;
                    break;
                  } else {
                    currentVertex = edge.v;
                    input = testReference;
                    break;
                  }
                }
              }
            }
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
