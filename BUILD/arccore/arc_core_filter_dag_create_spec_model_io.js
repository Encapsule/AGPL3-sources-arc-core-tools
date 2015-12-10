
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
  var FILTERDAGREQFS, FILTERDAGXFORMFS, FILTERLIB, INPUTFS, OUTPUTFS, filterlibResponse;

  FILTERLIB = require('./arc_core_filter');

  FILTERDAGREQFS = require('./arc_core_filter_dag_create_ifs');

  FILTERDAGXFORMFS = require('./arc_core_filter_dag_create_spec_model_transform_ofs');

  INPUTFS = {
    ____label: "I/O Model Processor Request",
    ____types: "jsObject",
    transformModel: FILTERDAGXFORMFS,
    model: {
      ____types: "jsObject",
      inputs: FILTERDAGREQFS.inputFilterSpec.dagSpecification.model.inputs,
      outputs: FILTERDAGREQFS.inputFilterSpec.dagSpecification.model.outputs
    }
  };

  OUTPUTFS = require('./arc_core_filter_dag_create_spec_model_io_ofs');

  filterlibResponse = FILTERLIB.create({
    operationID: 'Lry7jHEARSasslVcxqVHww',
    operationName: "FilterDAG I/O Model Processor",
    operationDescription: "Parses input and output value declarations of a FilterDAG specification model and returns an intermediate result.",
    inputFilterSpec: INPUTFS,
    bodyFunction: function(request_) {
      var bad, errors, guidance, inBreakScope, index, ioModelCache, ioModelCacheReport, ioModelErrors, key, response;
      response = {
        error: null,
        result: null
      };
      errors = [];
      inBreakScope = false;
      while (!inBreakScope) {
        inBreakScope = true;
        ioModelCache = {
          inputsMap: {},
          outputsMap: {},
          typeConstraints: []
        };
        index = 0;
        request_.model.inputs.forEach(function(inputDescriptor_) {
          var value;
          value = ioModelCache.inputsMap[inputDescriptor_.name];
          if ((value != null) && value) {
            errors.unshift("Illegal duplicate name value '" + inputDescriptor_.name + "' found examining model.inputs[" + index + "].");
          } else {
            ioModelCache.inputsMap[inputDescriptor_.name] = inputDescriptor_;
            if (ioModelCache.typeConstraints.indexOf(inputDescriptor_.typeContraint) === -1) {
              ioModelCache.typeConstraints.push(inputDescriptor_.typeConstraint);
            }
          }
          return index++;
        });
        index = 0;
        request_.model.outputs.forEach(function(outputDescriptor_) {
          var value;
          value = ioModelCache.outputsMap[outputDescriptor_.name];
          if ((value != null) && value) {
            errors.unshift("Illegal duplicate name value '" + outputDescriptor_.name + "' found examining model.outputs[" + index + "].");
          } else {
            ioModelCache.outputsMap[outputDescriptor_.name] = outputDescriptor_;
            if (ioModelCache.typeConstraints.indexOf(outputDescriptor_.typeConstraint) === -1) {
              ioModelCache.typeConstraints.push(outputDescriptor_.typeConstraint);
            }
          }
          return index++;
        });
        if (errors.length) {
          break;
        }
        ioModelCacheReport = {
          bad: {
            missingInputs: [],
            mislabeledInputs: [],
            missingOutputs: [],
            mislabeledOutputs: [],
            superfluousInputs: [],
            superfluousOutputs: []
          },
          good: {
            inputs: [],
            outputs: []
          }
        };
        request_.transformModel.dependencies.models.inputs.forEach(function(inputName_) {
          var value;
          value = ioModelCache.inputsMap[inputName_];
          if (!((value != null) && value)) {
            if (ioModelCacheReport.bad.missingInputs.indexOf(inputName_) === -1) {
              ioModelCacheReport.bad.missingInputs.push(inputName_);
              errors.unshift("Transform model relies on undeclared input value model '" + inputName_ + "'.");
              return;
            }
          }
          value = ioModelCache.outputsMap[inputName_];
          if ((value != null) && value) {
            if (ioModelCacheReport.bad.mislabeledOutputs.indexOf(inputName_) === -1) {
              ioModelCacheReport.bad.mislabeledOutputs.push(inputName_);
              errors.unshift("Transform model relies on input value model '" + inputName_ + "' that is declared as an output model.");
              return;
            }
          }
          return ioModelCacheReport.good.inputs.push(inputName_);
        });
        request_.transformModel.dependencies.models.outputs.forEach(function(outputName_) {
          var value;
          value = ioModelCache.outputsMap[outputName_];
          if (!((value != null) && value)) {
            if (ioModelCacheReport.bad.missingOutputs.indexOf(outputName_) === -1) {
              ioModelCacheReport.bad.missingOutputs.push(outputName_);
              errors.unshift("Transform model relies on undeclared output value model '" + outputName_ + "'.");
              return;
            }
          }
          value = ioModelCache.inputsMap[outputName_];
          if ((value != null) && value) {
            if (ioModelCacheReport.bad.mislabeledInputs.indexOf(outputName_) === -1) {
              ioModelCacheReport.bad.mislabeledInputs.push(outputName_);
              errors.unshift("Transform model relies on output value model '" + outputName_ + "' that is declared as an input model.");
              return;
            }
          }
          return ioModelCacheReport.good.outputs.push(outputName_);
        });
        guidance = [];
        for (key in ioModelCache.inputsMap) {
          if (ioModelCacheReport.good.inputs.indexOf(key) === -1) {
            ioModelCacheReport.bad.superfluousInputs.push(key);
            guidance.unshift("Input model declares unreferenced model '" + key + "'.");
          }
        }
        for (key in ioModelCache.outputsMap) {
          if (ioModelCacheReport.good.outputs.indexOf(key) === -1) {
            ioModelCacheReport.bad.superfluousOutputs.push(key);
            guidance.unshift("Output model declared unreferenced model '" + key + "'.");
          }
        }
        bad = ioModelCacheReport.bad;
        ioModelErrors = bad.missingInputs.length + bad.mislabeledInputs.length + bad.missingOutputs.length + bad.mislabeledOutputs.length;
        if (ioModelErrors) {
          guidance.forEach(function(string_) {
            return errors.push(string_);
          });
        }
        if (errors.length) {
          break;
        }
        response.result = {
          ioCache: ioModelCache,
          ioCacheReport: ioModelCacheReport
        };
        break;
      }
      if (errors.length) {
        response.error = errors.join(" ");
      }
      return response;
    },
    outputFilterSpec: OUTPUTFS
  });

  if (filterlibResponse.error) {
    throw new Error(filterlibResponse.error);
  }

  module.exports = filterlibResponse.result;

}).call(this);