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
INPUTFS = require './filterdag-create-input'
OUTPUTFS = require './filterdag-create-output'

DAGSPECPROCESSOR = require './jbus-common-filter-dag-create-spec'
DAGGENERATOR = require './jbus-common-filter-dag-create-factory'

filterlibResponse = FILTERLIB.create
    operationID: "v_R2RUU9TEacuwgxmydxGw"
    operationName: "FilterDAG Factory"
    operationDescription: "FilterDAG reactive system host factory function."

    inputName: INPUTFS.inputName
    inputDescription: INPUTFS.inputDescription
    inputFilterSpec: INPUTFS.inputFilterSpec

    bodyFunction: (request_) ->
        response = error: null, response: null
        errors = []
        inBreakScope = false
        while not inBreakScope
            inBreakScope = true

            innerResponse = IDENTIFIERLIB.irut.isIRUT request_.dagID
            if innerResponse.error
                errors.unshift innerResponse.error
                break
            if not innerResponse.result
                errors.unshift innerResponse.guidance
                errors.unshift "Invalid value `#{request_.dagID}` specified for `dagID`:"
                break

            innerResponse = DAGSPECPROCESSOR.request request_.dagSpecification
            if innerResponse.error
                errors.unshift innerResponse.error
                break
            factorySpec = innerResponse.result

            innerResponse = DAGGENERATOR.request factorySpec
            if innerResponse.error
                errors.unshift innerResponse.error
                break
            filterDAG = innerResponse.result

            response.result =
                dagID: request_.dagID
                dagName: request_.dagName
                dagDescription: request_.dagDescription
                spec: factorySpec
                runtime: filterDAG

            genTag =
                id: this.operationID
                name: this.operationName

            innerResponse = IDENTIFIERLIB.irut.fromReference response.result
            if innerResponse.error
                errors.unshift innerResponse.error
                break
            genTag.hash = innerResponse.result

            response.result.generator = genTag
            break

        if errors.length
            response.error = errors.join " "

        response

    #outputName: OUTPUTFS.outputName
    #outputDescription: OUTPUTFS.outputDescription
    #outputFilterSpec: OUTPUTFS.outputFilterSpec



if filterlibResponse.error
    message = [ filterlibResponse.error ]
    message.unshift "Unable to load `jbus-common-filter-dag` module due to error:"
    throw new Error message.join(" ")

module.exports = filterlibResponse.result
