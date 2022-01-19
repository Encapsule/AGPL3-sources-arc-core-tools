
typeCodes = require './arc_core_types_codes'
typeLUTS = require './arc_core_types_luts'
typeConvert = require './arc_core_types_convert'

MODULE = {}

###
    request = {
        value: JavaScript reference
        types: jsMoniker or array of jsMoniker strings
    }
    response = {
        error: null or string explaining why result and guidance are null
        guidance: a string explaining the false result (often used in parameter validation error messages upstream)
        result: jsMoniker string indicating the type of request.ref iff ref is in request.types. Otherwise, false.
    }

    Note: The protocol for using refInJsTypeSet is slightly different than base request/response.

    if response.error then, as typical, the call failed and produced no response.result. response.error is a string explaining the failure.
    if !response.error && response.result, then request.ref is in request.types and response.result is set to request.ref's jsMoniker string.
    if !response.error && !response.result, then response.guidance is a string that explains the type check failure: "found X, expected Y, Z..."

###

MODULE.inTypeSet = (request_) ->
    errors = []
    response = error: null, guidance: null, result: null

    inBreakScope = false

    while not inBreakScope

        inBreakScope = true

        if not (request_? and request_?)
            errors.unshift "Missing request object in-parameter."
            break

        convertResponse = typeConvert to:'jsTypeString', from:'jsReference', value: request_
        if convertResponse.error
            errors.unshift convertResponse.error
            break
        if convertResponse.result != '[object Object]'
            errors.unshift "Invalid request: Expected value of type '[object Object]' but found '#{convertResponse.result}' instead."
            break

        convertResponse = typeConvert to:'jsMoniker',from:'jsReference',value:request_.value
        if convertResponse.error
            errors.unshift convertResponse.error
            break

        valueMoniker = convertResponse.result

        convertResponse = typeConvert to:'jsMoniker',from:'jsReference',value:request_.types
        if convertResponse.error
            errors.unshift convertResponse.error
            break

        typeMoniker = convertResponse.result

        switch typeMoniker
            when 'jsString'
                response.result = (request_.types == valueMoniker) and valueMoniker or false
                break

            when 'jsArray'
                response.result = ((request_.types.indexOf valueMoniker) != -1) and valueMoniker or false
                break

            else
                errors.unshift "Invalid request.types value type '#{typeMoniker}'. Expected either '[object String]' (jsMoniker string) or '[object Array]' (of jsMoniker strings)."
                break

        if errors.length
            break

        if not response.result
            response.guidance = "Value of type '#{valueMoniker}' not in allowed type set [#{request_.types}]."


    if errors.length
        errors.unshift "Type in set check failed:"
        response.error = errors.join ' '

    response




MODULE.isJSON = (value_) ->
    errors = []
    response = error: null, guidance: null, result: null
    inBreakScope = false
    while not inBreakScope
        inBreakScope = true
        convertResponse = typeConvert to:'jsonMoniker', from:'jsReference', value:value_
        if convertResponse.error
            response.guidance = convertResponse.error
            response.result = false
            break
        response.result = convertResponse.result
    if errors.length
        errors.unshift "JSON check failed:"
        response.error = errors.join ' '
    response

module.exports = MODULE
