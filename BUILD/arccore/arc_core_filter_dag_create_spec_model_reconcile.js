(function() {
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
  var FILTERDAGIOMODEL, FILTERDAGREQFS, FILTERDAGXFORMFS, FILTERLIB, INPUTFS, filterlibResponse;

  
  FILTERLIB = require('./arc_core_filter');

  FILTERDAGREQFS = require('./arc_core_filter_dag_create_ifs');

  FILTERDAGXFORMFS = require('./arc_core_filter_dag_create_spec_model_transform_ofs');

  FILTERDAGIOMODEL = require('./arc_core_filter_dag_create_spec_model_io_ofs');

  INPUTFS = {
    ____types: "jsObject",
    ____label: "FilterDAG Model Reconciler Request",
    ____description: "FilterDAG model reconciliation request object.",
    transformSpecs: FILTERDAGREQFS.inputFilterSpec.dagSpecification.model.transformations,
    transformModel: FILTERDAGXFORMFS,
    ioModel: FILTERDAGIOMODEL
  };

  filterlibResponse = FILTERLIB.create({
    operationID: 'sRz7IX4XRVyzu9pSACki-g',
    operationName: "FilterDAG Model Reconciler",
    operationDescription: "Reconciles a FilterDAG specification model and returns an intermediate result.",
    inputFilterSpec: INPUTFS,
    bodyFunction: function(request_) {
      var errors, filterDAGModel, inBreakScope, response, transformSpecsMap;
      response = {
        error: null,
        result: null
      };
      errors = [];
      inBreakScope = false;
      while (!inBreakScope) {
        inBreakScope = true;
        // Build the final FilterDAG model representation, and return to caller.
        filterDAGModel = {
          transformDigraph: request_.transformModel.digraph,
          transformModels: {
            inputs: {},
            outputs: {},
            transforms: {}
          },
          inducedConstraints: {
            types: [],
            functions: []
          }
        };
        request_.transformModel.dependencies.models.inputs.forEach(function(inputName_) {
          filterDAGModel.transformModels.inputs[inputName_] = request_.ioModel.ioCache.inputsMap[inputName_];
          return delete filterDAGModel.transformModels.inputs[inputName_].name;
        });
        request_.transformModel.dependencies.models.outputs.forEach(function(outputName_) {
          filterDAGModel.transformModels.outputs[outputName_] = request_.ioModel.ioCache.outputsMap[outputName_];
          return delete filterDAGModel.transformModels.outputs[outputName_].name;
        });
        transformSpecsMap = {};
        request_.transformSpecs.forEach(function(transformSpec_) {
          var transformSpec;
          transformSpec = transformSpecsMap[transformSpec_.name] = transformSpec_;
          delete transformSpec.name;
          delete transformSpec.inputModels;
          return delete transformSpec.outputModel;
        });
        request_.transformModel.dependencies.models.transforms.forEach(function(transformName_) {
          return filterDAGModel.transformModels.transforms[transformName_] = transformSpecsMap[transformName_];
        });
        request_.transformModel.dependencies.constraints.functions.forEach(function(functionName_) {
          return filterDAGModel.inducedConstraints.functions.push(functionName_);
        });
        filterDAGModel.inducedConstraints.functions.sort();
        request_.ioModel.ioCache.typeConstraints.forEach(function(typeName_) {
          return filterDAGModel.inducedConstraints.types.push(typeName_);
        });
        filterDAGModel.inducedConstraints.types.sort();
        response.result = filterDAGModel;
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
