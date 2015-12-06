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

FILTERLIB = require 'jbus-common-filter'
IDENTIFIERLIB = FILTERLIB.__bundle.jbus_common_identifier

FILTERDAGREQFS = require './filterdag-create-input'

MODELPROCESSOR = require './jbus-common-filter-dag-create-spec-model'
CONSTRAINTPROCESSOR = require './jbus-common-filter-dag-create-spec-constraint'
SPECRECONCILER = require './jbus-common-filter-dag-create-spec-reconcile'

filterlibResponse = FILTERLIB.create
    operationID: 'loZ5xDoyTO-bUq77KaBk8g'
    operationName: "FilterDAG Spec Processor"
    operationDescription: "Parses a FilerDAG specification descriptor and returns an intermediate result object."

    inputFilterSpec: FILTERDAGREQFS.dagSpecification

    bodyFunction: (request_) ->

        response = error: null, result: null
        errors = []
        inBreakScope = false
        while not inBreakScope
            inBreakScope = true

            # Process the FilterDAG spec's model object.
            innerResponse = MODELPROCESSOR.request request_.model
            if innerResponse.error
                errors.unshift innerResponse.error
                break
            specificationModel = innerResponse.result

            # Process the FilterDAG spec's constraints object.
            innerResponse = CONSTRAINTPROCESSOR.request request_.constraints
            if innerResponse.error
                errors.unshift innerResponse.error
                break
            specificationConstraints = innerResponse.result            

            innerResponse = SPECRECONCILER.request
                model: specificationModel
                constraints: specificationConstraints
            if innerResponse.error
                errors.unshift innerResponse.error
                break

            filterDAGSpecification = innerResponse.result

            genTag =
                id: this.operationID
                name: this.operationName

            innerResponse = IDENTIFIERLIB.irut.fromReference filterDAGSpecification
            if innerResponse.error
                errors.unshift innerResponse.error
                break
            genTag.hash = innerResponse.result

            filterDAGSpecification.generator = genTag

            response.result = filterDAGSpecification
                
            break        

        if errors.length
           response.error = errors.join " "

        response


if filterlibResponse.error
    throw new Error filterlibResponse.error

module.exports = filterlibResponse.result

