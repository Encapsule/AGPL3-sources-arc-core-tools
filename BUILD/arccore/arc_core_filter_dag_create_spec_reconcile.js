
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
  var FILTERLIB, filterlibResponse;

  FILTERLIB = require('./arc_core_filter');

  filterlibResponse = FILTERLIB.create({
    operationID: 'GLxLYuwnTCyCyr-lKfohUg',
    operationName: "FilterDAG Specification Reconciler",
    operationDescription: "Performs static analysis on a FilerDAG model and constraint declarations and returns an intermediate result.",
    bodyFunction: function(request_) {
      var errors, filterDAGManifest, inBreakScope, response;
      response = {
        error: null,
        result: null
      };
      errors = [];
      inBreakScope = false;
      while (!inBreakScope) {
        inBreakScope = true;
        filterDAGManifest = {};
        filterDAGManifest.model = {};
        filterDAGManifest.model.system = request_.model.transformDigraph;
        filterDAGManifest.model.map = request_.model.transformModels;
        filterDAGManifest.constraints = {};
        filterDAGManifest.constraints.types = {};
        filterDAGManifest.constraints.functions = {};
        filterDAGManifest.inducedRuntime = {
          filterSpecs: {},
          filters: {}
        };
        request_.model.inducedConstraints.types.forEach(function(typeName_) {
          var value, value1;
          value = request_.constraints.types.types[typeName_];
          if (!((value != null) && value)) {
            return errors.push("System model depends on undeclared constraint type '" + typeName_ + "'.");
          } else {
            value1 = filterDAGManifest.inducedRuntime.filterSpecs[value.id];
            if (!((value1 != null) && value1)) {
              filterDAGManifest.inducedRuntime.filterSpecs[value.id] = value.filterSpec;
            }
            delete value.filterSpec;
            return filterDAGManifest.constraints.types[typeName_] = value;
          }
        });
        request_.model.inducedConstraints.functions.forEach(function(functionName_) {
          var value, value1;
          value = request_.constraints.functions.functions[functionName_];
          if (!((value != null) && value)) {
            return errors.push("System model depends on undeclared constraint function '" + functionName_ + "'.");
          } else {
            value1 = filterDAGManifest.inducedRuntime.filters[value.filterBinding.id];
            if (!((value1 != null) && value1)) {
              filterDAGManifest.inducedRuntime.filters[value.filterBinding.id] = null;
            }
            value.id = value.filterBinding.id;
            delete value.filterBinding;
            return filterDAGManifest.constraints.functions[functionName_] = value;
          }
        });
        response.result = filterDAGManifest;
        break;
      }
      if (errors.length) {
        errors.unshift("Unable to reconcile FilterDAG model and constraints.");
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
