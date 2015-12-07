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
FILTERDAGREQFS = require './arc_core_filter_dag_create_input'

CONSTRAINT_TYPES = require './arc_core_filter_dag_create_spec_constraint_types'
CONSTRAINT_FUNCTIONS = require './arc_core_filter_dag_create_spec_constraint_functions'
CONSTRAINT_RECONCILE = require './arc_core_filter_dag_create_spec_constraint_reconcile'

filterlibResponse = FILTERLIB.create
    operationID: 'tmhYEUdOR_yk5NRLLk3u1A'
    operationName: "FilterDAG Constraint Processor"
    operationDescription: "Parses a FilterDAG constraint specification and returns an intermediate result."

    inputFilterSpec: FILTERDAGREQFS.inputFilterSpec.dagSpecification.contraints

    bodyFunction: (request_) ->

        response = error: null, result: null
        errors = []
        inBreakScope = false
        while not inBreakScope
            inBreakScope = true

            innerResponse = CONSTRAINT_TYPES.request request_.types
            if innerResponse.error
                errors.unshift innerResponse.error
                break
            constraintTypes = innerResponse.result

            innerResponse = CONSTRAINT_FUNCTIONS.request request_.functions
            if innerResponse.error
                errors.unshift innerResponse.error
                break
            constraintFunctions = innerResponse.result

            innerResponse = CONSTRAINT_RECONCILE.request
                types: constraintTypes
                functions: constraintFunctions
            if innerResponse.error
                errors.unshift innerResponse.error
                break

            filterDAGConstraints = innerResponse.result

            genTag =
                id: this.operationID
                name: this.operationName

            innerResponse = IDENTIFIERLIB.irut.fromReference filterDAGConstraints
            if innerResponse.error
                errors.unshift innerResponse.error
                break
            genTag.hash = innerResponse.result

            filterDAGConstraints.generator = genTag

            response.result = filterDAGConstraints
            break

        if errors.length
           response.error = errors.join " "
        response

if filterlibResponse.error
    throw new Error filterlibResponse.error

module.exports = filterlibResponse.result
