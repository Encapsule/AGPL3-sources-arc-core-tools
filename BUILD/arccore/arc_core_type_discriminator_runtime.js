(function() {
  var FILTERLIB, TYPELIB, checkPropConstraint, filterlibResponse;

  FILTERLIB = require('./arc_core_filter');

  TYPELIB = require('./arc_core_types');

  checkPropConstraint = require('./arc_core_type_discriminator_runtime_check_property');

  filterlibResponse = FILTERLIB.create({
    operationID: "nIcFGxZeQia9GCBFbpiDZQ",
    operationName: "Discriminator Filter Factory",
    operationDescription: "Generates and returns a Discriminator Filter object.",
    inputFilterSpec: {
      ____types: "jsObject",
      filterTable: {
        ____accept: "jsObject"
      },
      parseDigraph: {
        ____accept: "jsObject"
      },
      options: {
        ____label: "Options Object",
        ____description: "Factory options object.",
        ____types: "jsObject",
        ____defaultValue: {},
        action: {
          ____label: "Action Flag",
          ____description: "The action to be taken by the generated Discriminator Filter.",
          ____accept: "jsString",
          ____inValueSet: ["getFilterID", "getFilter", "routeRequest"],
          ____defaultValue: "getFilterID"
        }
      }
    },
    bodyFunction: function(request_) {
      var errors, filter, filterID, inBreakScope, innerResponse, response, runtimeContext, runtimeFilter, supportedFilters;
      response = {
        error: null,
        result: null
      };
      errors = [];
      inBreakScope = false;
      runtimeContext = request_;
      supportedFilters = [];
      for (filterID in runtimeContext.filterTable) {
        filter = runtimeContext.filterTable[filterID];
        supportedFilters.push("[" + filter.filterDescriptor.operationName + ":" + filterID + "]");
      }
      while (!inBreakScope) {
        inBreakScope = true;
        innerResponse = FILTERLIB.create({
          operationID: "XY-x390CSVmXTu0oYXlRiw",
          operationName: "Discrimintor Filter",
          operationDescription: "Discriminates between N disjunct request signatures.",
          bodyFunction: function(request_) {
            var checkResponse, continueRankEnum, currentVertex, edge, index, inputNamespace, outEdges, pathParts, propertyName, routeResponse, typeConstraint, uprop, vprop;
            response = {
              error: null,
              response: null
            };
            errors = [];
            inBreakScope = false;
            while (!inBreakScope) {
              inBreakScope = true;
              inputNamespace = {
                request: request_
              };
              currentVertex = "request";
              filterID = null;
              while ((!filterID) && (!errors.length)) {
                uprop = runtimeContext.parseDigraph.getVertexProperty(currentVertex);
                outEdges = runtimeContext.parseDigraph.outEdges(currentVertex);
                index = 0;
                continueRankEnum = true;
                while ((!filterID) && (!errors.length) && (index < outEdges.length) && continueRankEnum) {
                  edge = outEdges[index];
                  vprop = runtimeContext.parseDigraph.getVertexProperty(edge.v);
                  typeConstraint = vprop.typeConstraint;
                  pathParts = vprop.filterSpecPath.split(".");
                  propertyName = pathParts[pathParts.length - 1];
                  checkResponse = checkPropConstraint(propertyName, typeConstraint, inputNamespace);
                  if (checkResponse.error) {
                    errors.unshift(checkResponse.error);
                    break;
                  }
                  if (checkResponse.result.pass) {
                    if (vprop.filterID) {
                      filterID = vprop.filterID;
                    } else {
                      continueRankEnum = false;
                      currentVertex = edge.v;
                      inputNamespace = checkResponse.result.reference;
                    }
                  } else {
                    index++;
                  }
                }
                if (index === outEdges.length) {
                  errors.push("Unrecognized request format.");
                  errors.push("Request signature must match one of filter set");
                  errors.push("{" + (supportedFilters.join(", ")) + "}.");
                }
              }
              if (!errors.length) {
                switch (runtimeContext.options.action) {
                  case "getFilterID":
                    response.result = filterID;
                    break;
                  case "getFilter":
                    response.result = runtimeContext.filterTable[filterID];
                    break;
                  case "routeRequest":
                    routeResponse = runtimeContext.filterTable[filterID].request(request_);
                    if (!routeResponse.error) {
                      response.result = routeResponse.result;
                    } else {
                      errors.unshift(routeResponse.error);
                    }
                    break;
                  default:
                    errors("Internal error unrecognized discriminator action '" + runtimeContext.options.action + "'.");
                    break;
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
          break;
        }
        runtimeFilter = innerResponse.result;
        runtimeFilter.supportedFilters = supportedFilters;
        runtimeFilter.options = runtimeContext.options;
        response.result = innerResponse.result;
        break;
      }
      if (errors.length) {
        response.result = errors.join(" ");
      }
      return response;
    }
  });

  if (filterlibResponse.error) {
    throw new Error("Cannot load module due to error: " + filterlibResponse.error);
  }

  module.exports = filterlibResponse.result;

}).call(this);
