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

filterlibResponse = FILTERLIB.create
    operationID: 'GLxLYuwnTCyCyr-lKfohUg'
    operationName: "FilterDAG Specification Reconciler"
    operationDescription: "Performs static analysis on a FilerDAG model and constraint declarations and returns an intermediate result."

    bodyFunction: (request_) ->
        response = error: null, result: null
        errors = []
        inBreakScope = false
        while not inBreakScope
            inBreakScope = true

            filterDAGManifest = {}
            filterDAGManifest.model = {}
            filterDAGManifest.model.system = request_.model.transformDigraph
            filterDAGManifest.model.map = request_.model.transformModels
            filterDAGManifest.constraints = {}
            filterDAGManifest.constraints.types = {}
            filterDAGManifest.constraints.functions = {}

            filterDAGManifest.inducedRuntime =
                filterSpecs: {}
                filters: {}

            # Enumerate the model's induced constraints and ensure that they're
            # declared in the constraint manifest. If not, report error(s). If so
            # take only the required contraint map entries from the contraints manifest
            # and register them in the manifest.

            request_.model.inducedConstraints.types.forEach (typeName_) ->
                value = request_.constraints.types.types[typeName_]
                if not (value? and value)
                    errors.push "System model depends on undeclared constraint type '#{typeName_}'."
                else
                    value1 = filterDAGManifest.inducedRuntime.filterSpecs[value.id]
                    if not (value1? and value1)
                        filterDAGManifest.inducedRuntime.filterSpecs[value.id] = value.filterSpec
                    delete value.filterSpec
                    filterDAGManifest.constraints.types[typeName_] = value

            request_.model.inducedConstraints.functions.forEach (functionName_) ->
                value = request_.constraints.functions.functions[functionName_]
                if not (value? and value)
                    errors.push "System model depends on undeclared constraint function '#{functionName_}'."
                else
                    value1 = filterDAGManifest.inducedRuntime.filters[value.filterBinding.id]
                    if not (value1? and value1)
                        filterDAGManifest.inducedRuntime.filters[value.filterBinding.id] = null
                    value.id = value.filterBinding.id
                    delete value.filterBinding
                    filterDAGManifest.constraints.functions[functionName_] = value

            response.result = filterDAGManifest

            break

        if errors.length
            errors.unshift "Unable to reconcile FilterDAG model and constraints."
            response.error = errors.join " "
            

        response

if filterlibResponse.error
    throw new Error filterlibResponse.error

module.exports = filterlibResponse.result

  