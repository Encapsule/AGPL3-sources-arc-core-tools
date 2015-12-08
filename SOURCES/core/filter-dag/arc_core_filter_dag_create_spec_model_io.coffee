###
----------------------------------------------------------------------
 
           +---+---+---+---+
 chaos --> | J | B | U | S | --> order
           +---+---+---+---+

Copyright (C) 2015 Encapsule.io Bellevue, WA USA

JBUS is licensed under the GNU Affero General Public License v3.0.
Please consult the included LICENSE file for agreement terms.

----------------------------------------------------------------------
###
#
#
#

FILTERLIB = require './arc_core_filter'

FILTERDAGREQFS = require './arc_core_filter_dag_create_ifs'
FILTERDAGXFORMFS = require './arc_core_filter_dag_create_spec_model_transform_ofs'

INPUTFS =
    ____label: "I/O Model Processor Request"
    ____types: "jsObject"
    transformModel: FILTERDAGXFORMFS
    model:
        ____types: "jsObject"
        inputs: FILTERDAGREQFS.inputFilterSpec.dagSpecification.model.inputs
        outputs: FILTERDAGREQFS.inputFilterSpec.dagSpecification.model.outputs

OUTPUTFS = require './arc_core_filter_dag_create_spec_model_io_ofs'

filterlibResponse = FILTERLIB.create
    operationID: 'Lry7jHEARSasslVcxqVHww'
    operationName: "FilterDAG I/O Model Processor"
    operationDescription: "Parses input and output value declarations of a FilterDAG specification model and returns an intermediate result."

    inputFilterSpec: INPUTFS

    bodyFunction: (request_) ->
        response = error: null, result: null
        errors = []
        inBreakScope = false
        while not inBreakScope
            inBreakScope = true

            # The transform digraph contains vertices that model shared memory values,
            # and vertices that model functions that operate on the shared memory values.
            #
            # Transform functions abstractly model a software algorithm that reads
            # N > 1 values from shared memory, does something with them, and writes
            # a result value back to shared memory.
            #
            # A shared memory value that is not named as the output of a transform
            # function is considered to be an external input to the FilterDAG system.
            # Similarly, a shared memory value that is not named as input of any transform
            # function is considered to be a derived external output of the FilterDAG system.

            ioModelCache =
                inputsMap: {}
                outputsMap: {}
                typeConstraints: []

            index = 0
            request_.model.inputs.forEach (inputDescriptor_) ->
                value = ioModelCache.inputsMap[inputDescriptor_.name]
                if value? and value
                    errors.unshift "Illegal duplicate name value '#{inputDescriptor_.name}' found examining model.inputs[#{index}]."
                else
                    ioModelCache.inputsMap[inputDescriptor_.name] = inputDescriptor_
                    if ioModelCache.typeConstraints.indexOf(inputDescriptor_.typeContraint) == -1
                        ioModelCache.typeConstraints.push inputDescriptor_.typeConstraint
                index++

            index = 0
            request_.model.outputs.forEach (outputDescriptor_) ->
                value = ioModelCache.outputsMap[outputDescriptor_.name]
                if value? and value
                    errors.unshift "Illegal duplicate name value '#{outputDescriptor_.name}' found examining model.outputs[#{index}]."
                else
                    ioModelCache.outputsMap[outputDescriptor_.name] = outputDescriptor_
                    if ioModelCache.typeConstraints.indexOf(outputDescriptor_.typeConstraint) == -1
                        ioModelCache.typeConstraints.push outputDescriptor_.typeConstraint
                index++

            if errors.length
                break

            ioModelCacheReport =
                bad:
                    missingInputs: []
                    mislabeledInputs: []
                    missingOutputs: []
                    mislabeledOutputs: []
                    superfluousInputs: []
                    superfluousOutputs: []
                good:
                    inputs: []
                    outputs: []

            request_.transformModel.dependencies.models.inputs.forEach (inputName_) ->
                value = ioModelCache.inputsMap[inputName_]
                if not (value? and value)
                    if ioModelCacheReport.bad.missingInputs.indexOf(inputName_) == -1
                        ioModelCacheReport.bad.missingInputs.push inputName_
                        errors.unshift "Transform model relies on undeclared input value model '#{inputName_}'."
                        return
                value = ioModelCache.outputsMap[inputName_]
                if value? and value
                    if ioModelCacheReport.bad.mislabeledOutputs.indexOf(inputName_) == -1
                        ioModelCacheReport.bad.mislabeledOutputs.push inputName_
                        errors.unshift "Transform model relies on input value model '#{inputName_}' that is declared as an output model."
                        return
                ioModelCacheReport.good.inputs.push inputName_

            request_.transformModel.dependencies.models.outputs.forEach (outputName_) ->
                value = ioModelCache.outputsMap[outputName_]
                if not (value? and value)
                    if ioModelCacheReport.bad.missingOutputs.indexOf(outputName_) == -1
                        ioModelCacheReport.bad.missingOutputs.push outputName_
                        errors.unshift "Transform model relies on undeclared output value model '#{outputName_}'."
                        return
                value = ioModelCache.inputsMap[outputName_]
                if value? and value
                    if ioModelCacheReport.bad.mislabeledInputs.indexOf(outputName_) == -1
                        ioModelCacheReport.bad.mislabeledInputs.push outputName_
                        errors.unshift "Transform model relies on output value model '#{outputName_}' that is declared as an input model."
                        return
                ioModelCacheReport.good.outputs.push outputName_

            guidance = []

            for key of ioModelCache.inputsMap
                if ioModelCacheReport.good.inputs.indexOf(key) == -1
                    ioModelCacheReport.bad.superfluousInputs.push key
                    guidance.unshift "Input model declares unreferenced model '#{key}'."

            for key of ioModelCache.outputsMap
                if ioModelCacheReport.good.outputs.indexOf(key) == -1
                    ioModelCacheReport.bad.superfluousOutputs.push key
                    guidance.unshift "Output model declared unreferenced model '#{key}'."

            bad = ioModelCacheReport.bad

            ioModelErrors =
                bad.missingInputs.length + bad.mislabeledInputs.length +
                bad.missingOutputs.length + bad.mislabeledOutputs.length

            if ioModelErrors
                guidance.forEach (string_) -> errors.push(string_)
            
            if errors.length
                break

            response.result =
                ioCache: ioModelCache
                ioCacheReport: ioModelCacheReport

            #console.log "Reponse from #{this.operationName}:#{this.operationID}: '#{JSON.stringify(response, undefined, 4)}'."

            break

        if errors.length
            response.error = errors.join " "
        response


    outputFilterSpec: OUTPUTFS

if filterlibResponse.error
    throw new Error filterlibResponse.error

module.exports = filterlibResponse.result
