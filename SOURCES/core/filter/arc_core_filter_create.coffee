
'use strict'

IDENTIFIER = require './arc_core_identifier'

verifyFilterCreateRequest = require './arc_core_filter_create_verify_request'
verifyFilterSpecDeclaration = require './arc_core_filter_create_verify_spec'
Filter = require './arc_core_filter_runtime'

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
        inputFilterSpec: object

        # Describe your function's outputs for human readers.
        outputName: required string
        outputDescription: required string

        # Describe your function's outputs for machine readers.

        outputFilterSpec: object

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
            innerResponse = verifyFilterSpecDeclaration path: '~.inputFilterSpec', filterSpec: functionDescriptor.inputFilterSpec
            if innerResponse.error
                errors.unshift innerResponse.error
                break

        # If specified, verify the output type map.
        if functionDescriptor.outputFilterSpec? and functionDescriptor.outputFilterSpec
            innerResponse = verifyFilterSpecDeclaration path: '~.outputFilterSpec', filterSpec: functionDescriptor.outputFilterSpec
            if innerResponse.error
                errors.unshift innerResponse.error
                break

        innerResponse = IDENTIFIER.irut.fromReference "#{functionDescriptor.operationID}:input"
        if innerResponse.error
            errors.unshift innerResponse.error
            break
        functionDescriptor.inputTypeVIID = innerResponse.result

        innerResponse = IDENTIFIER.irut.fromReference (functionDescriptor.inputFilterSpec? and functionDescriptor.inputFilterSpec or { ____opaque: true })
        if innerResponse.error
            errors.unshift innerResponse.error
            break
        functionDescriptor.inputTypeVDID = innerResponse.result

        innerResponse = IDENTIFIER.irut.fromReference "#{functionDescriptor.operationID}:output"
        if innerResponse.error
            errors.unshift innerResponse.error
            break
        functionDescriptor.outputTypeVIID = innerResponse.result

        innerResponse = IDENTIFIER.irut.fromReference (functionDescriptor.outputFilterSpec? and functionDescriptor.outputFilterSpec or { ____opaque: true })
        if innerResponse.error
            errors.unshift innerResponse.error
            break
        functionDescriptor.outputTypeVDID = innerResponse.result

        innerResponse = IDENTIFIER.irut.fromReference "#{functionDescriptor.operationID}:#{functionDescriptor.inputTypeVDID}:#{functionDescriptor.outputTypeVDID}"
        if innerResponse.error
            errors.unshift innerResponse.error
            break
        functionDescriptor.operationVDID = innerResponse.result

        # Construct a new Filter object and return it to the caller.
        Object.freeze functionDescriptor
        response.result = new Filter functionDescriptor

    if errors.length
        errors.unshift "Filter factory failure:"
        response.error = errors.join ' '

    response
