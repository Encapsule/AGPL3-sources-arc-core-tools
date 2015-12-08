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
IDENTIFIERLIB = require './arc_core_identifier'

FILTERDAGREQFS = require './arc_core_filter_dag_create_ifs'

MODELXFORMGEN = require './arc_core_filter_dag_create_spec_model_transform'
MODELIOPROCESS = require './arc_core_filter_dag_create_spec_model_io'
MODELRECONCILE = require './arc_core_filter_dag_create_spec_model_reconcile'

filterlibResponse = FILTERLIB.create
    operationID: 'Xke4-hLKSIChJos77JVOmg'
    operationName: "FilterDAG Model Processor"
    operationDescription: "Parses a FilterDAG specification model and returns an intermediate result."

    inputFilterSpec: FILTERDAGREQFS.inputFilterSpec.dagSpecification.model

    bodyFunction: (request_) ->

        response = error: null, result: null
        errors = []
        inBreakScope = false
        while not inBreakScope
            inBreakScope = true

            # Build the transform model directed graph.
            innerResponse = MODELXFORMGEN.request request_.transformations
            if innerResponse.error
                errors.unshift innerResponse.error
                break
            transformModel = innerResponse.result

            # Process the I/O model declarations.
            innerResponse = MODELIOPROCESS.request
                transformModel: transformModel
                model:
                    inputs: request_.inputs
                    outputs: request_.outputs
            if innerResponse.error
                errors.unshift innerResponse.error
                break
            ioModel = innerResponse.result

            # Reconcile the transform and I/O models to produce the final
            # FilterDAG specification model object.
            innerResponse = MODELRECONCILE.request
                transformSpecs: request_.transformations
                transformModel: transformModel
                ioModel: ioModel
            if innerResponse.error
                errors.unshift innerResponse.error
                break

            filterDAGModel = innerResponse.result

            genTag =
                id: this.operationID
                name: this.operationName

            innerResponse = IDENTIFIERLIB.irut.fromReference filterDAGModel
            if innerResponse.error
                errors.unshift innerResponse.error
                break
            genTag.hash = innerResponse.result

            filterDAGModel.generator = genTag

            # Return the reconcilation result as the final FilterDAG model.
            response.result = filterDAGModel
            break

        if errors.length
            errors.unshift "Error(s) in spec model:"
            response.error = errors.join " "
        response



if filterlibResponse.error
    throw new Error filterlibResponse.error

module.exports = filterlibResponse.result
