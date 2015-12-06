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

'use strict'

IDENTIFIER = require 'jbus-common-identifier'

verifyFilterCreateRequest = require './jbus-common-filter-create-verify-request'
verifyFilterSpecDeclaration = require './jbus-common-filter-create-verify-spec'
Filter = require './jbus-common-filter-runtime'

###
    request = {

        # Describes the function for machine readers.
        operationID: required IRUT string

        # Describe the function for human readers.
        operationName: required string
        operationDescription: required string

        # Describe your function's inputs for human readers.
        inputName: required string
        inputDescription: required string

        # Describe your function's inputs for machine readers.
        inputTypeMap: object

        # Describe your function's outputs for human readers.
        outputName: required string
        outputDescription: required string

        # Describe your function's outputs for machine readers.
        
        outputTypeMap: object

        bodyFunction: function you wish to wrap in a NormalizedFunction

    }
    response = {
        error: null or string explaining why result is null
        result: a NormalizedFunction instance or null if an error occurred
    }
###

module.exports = (request_) ->

    response = error: null, result: null
    errors = []
    inBreakScope = false
    while not inBreakScope
        inBreakScope = true

        # Normalize the incoming request object. This involves error checking and establishing
        # default values as allowed by the type map declaration.

        innerResponse = verifyFilterCreateRequest request_
        if innerResponse.error                     
            errors.unshift innerResponse.error
            break

        # If there was no error, use the normalized request - not the literal input data.
        functionDescriptor = innerResponse.result

        # If specified, verify the input type map.
        if functionDescriptor.inputFilterSpec? and functionDescriptor.inputFilterSpec
            innerResponse = verifyFilterSpecDeclaration path: '~.inputFilterSpec', typemap: functionDescriptor.inputFilterSpec
            if innerResponse.error
                errors.unshift innerResponse.error
                break

        # If specified, verify the output type map.
        if functionDescriptor.outputFilterSpec? and functionDescriptor.outputFilterSpec
            innerResponse = verifyFilterSpecDeclaration path: '~.outputFilterSpec', typemap: functionDescriptor.outputFilterSpec
            if innerResponse.error
                errors.unshift innerResponse.error
                break

        # Construct a new Filter object and return it to the caller.
        Object.freeze functionDescriptor
        response.result = new Filter functionDescriptor

    if errors.length
        errors.unshift "jbus.common.filter.create request failed:"
        response.error = errors.join ' '

    response
    

