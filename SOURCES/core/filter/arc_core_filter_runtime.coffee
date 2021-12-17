
'use strict'

filterRuntimeData = require './arc_core_filter_runtime_spec_processor'

bodyFunctionResponseFilter =
    ____types: 'jsObject'
    ____label: "NF Response Object"
    ____description: "Normalized Function (NF) response object."
    error:
        ____types: [ 'jsNull', 'jsString' ]
        ____label: "Error"
        ____description: "A string explaining why response.result is null. Or, null if no error occurred."
        ____defaultValue: null
    result:
        ____opaque: true
        ____label: "Result"
        ____description: "Untouched regardless of error. Valid per output filter spec iff ~error."

Object.freeze bodyFunctionResponseFilter

module.exports = class Filter

    constructor: (filterDescriptor_) ->
        @filterDescriptor = filterDescriptor_
        Object.freeze @filterDescriptor

    request: (request_) =>
        response = error: null, result: null
        errors = []
        inBreakScope = false
        while not inBreakScope
            inBreakScope = true

            # FILTER THE INPUT REQUEST DATA
            dispatchState = "normalizing request input"

            inputFilterResponse = filterRuntimeData value: request_, spec: @filterDescriptor.inputFilterSpec
            if inputFilterResponse.error
                errors.unshift inputFilterResponse.error
                break

            if @filterDescriptor.bodyFunction

                # CALL MAIN FUNCTION WITH FILTERED INPUT REQUEST DATA
                dispatchState = "performing main operation"
                bodyFunctionResponse = @filterDescriptor.bodyFunction.call @, inputFilterResponse.result

                returnSignatureCheck = filterRuntimeData value: bodyFunctionResponse, spec: bodyFunctionResponseFilter
                if returnSignatureCheck.error
                    dispatchState = "verifying response signature of main operation"
                    errors.unshift returnSignatureCheck.error
                    break

                response.result = bodyFunctionResponse.result

                if bodyFunctionResponse.error
                    errors.unshift bodyFunctionResponse.error
                    break

            else
                # If no bodyFunction is defined, simply pass the input filter's response through.
                bodyFunctionResponse = inputFilterResponse

            # FILTER THE OUTPUT RESPONSE DATA OF THE MAIN FUNCTION
            dispatchState = "normalizing response result"

            outputFilterResponse = filterRuntimeData value: bodyFunctionResponse.result, spec: @filterDescriptor.outputFilterSpec
            if outputFilterResponse.error
                errors.unshift outputFilterResponse.error
                break

            response.result = outputFilterResponse.result

        if errors.length
            # The operation failed.
            errors.unshift "Filter [#{@filterDescriptor.operationID}::#{@filterDescriptor.operationName}] failed while #{dispatchState}."
            response.error = errors.join " "

        # Return the response
        response
