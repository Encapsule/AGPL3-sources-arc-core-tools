
typeCodes = require './arc_core_types_codes'
typeLUTS = require './arc_core_types_luts'

###
    request = {
        to: dimension string used to select the result set
        from: dimension string used to interpret the reference of value
        value: JavaScript reference to a value taken as a 'from' to be converted to a 'to'
    }
    response = {
        error: null or string explaining by result is null
        result: integer in range 0 to 7 inclusive (jsCode) or string (jsStringType, jsMoniker, jsonMoniker) or null to indicate error
    }
###
# ============================================================================
convert = (request_) ->

    errors = []
    response = error: null, result: null
    inBreakScope = false
    while not inBreakScope

        inBreakScope = true

        if not (request_? and request_)
            errors.unshift "Missing request object."
            break

        requestType = Object.prototype.toString.call request_

        if requestType != '[object Object]'
            errors.unshift "Invalid request value type. Expected reference to '[object Object]'."
            break

        request = {}

        if not (request_.from? and request_.from)
            errors.unshift "Invalid request missing 'from' property."
            break

        requestType = Object.prototype.toString.call request_.from

        if requestType != '[object String]'
            errors.unshift "Invalid request 'from' value type. Expected reference to '[object String]'."
            break

        request.from = request_.from

        if not (request_.to? and request_.to)
            errors.unshift "Invalid request missing 'to' property."
            break

        requestType = Object.prototype.toString.call request_.to

        if requestType != '[object String]'
            errors.unshift "Invalid request 'to' value type. Expected reference to '[object String]'."
            break

        request.to = request_.to

        valueType = Object.prototype.toString.call request_.value

        forwardLookup = true
        rewriteRequest = undefined

        switch request.from
            when 'jsReference'
                rewriteRequest =
                    to: request.to
                    from: 'jsTypeString'
                    value: Object.prototype.toString.call request_.value
                forwardLookup = false
                break
            when 'jsCode'
                if valueType != '[object Number]'
                    errors.unshift "Invalid request 'value' type. Expected reference to '[object Number]'."
                    break
                if (request_.value < 0) or (request_.value >= typeCodes.__GUARD)
                    errors.unshift "Invalid request 'value' '#{request_.value}' is not a valid 'jsCode' value."
                break
            when 'jsMoniker' or 'jsonMoniker' or 'jsTypeString'
                if valueType != '[object String]'
                    errors.unshift "Invalid request 'value' type. Expected reference to '[object String]'."
                forwardLookup = false
                break
            else
                errors.unshift "[#{typeLUTS.dimensions}]."
                errors.unshift "Invalid request 'from' value '#{request.from}' is not a valid dimension string. Valid dimensions:"
                break

         if errors.length
             break

         if not (rewriteRequest? and rewriteRequest)
             request.value = request_.value
         else
             request = rewriteRequest

         table = typeLUTS[forwardLookup and request.to or request.from]

         if not (table? and table)
             errors.unshift "[#{typeLUTS.dimensions}]."
             errors.unshift "No conversion operator from '#{request.from}' to '#{request.to}' available. Valid dimensions:"
             break

         if forwardLookup
             lookupResult = table[request.value] # expected always good as request.value is range validated
         else
             lookupResult = table.indexOf request.value # may not be valid as we cannot pre-validate request.value
             if lookupResult == -1
                 errors.unshift "[#{typeLUTS.dimensions}]."
                 errors.unshift "Invalid request 'value' specifies unknown #{request.to} '#{request.value}'. Valid dimensions:"
                 break

             if request.to != 'jsCode'

                 table = typeLUTS[request.to]
                 if not (table? and table)
                     errors.unshift "Valid dimensions: [#{typeLUTS.dimensions}]."
                     errors.unshift "No conversion to '#{request.to}' available."
                     break

                 jsCode = lookupResult
                 lookupResult = table[jsCode]

                 if not (lookupResult? and lookupResult)
                     errors.unshift "No coversion from dimension '#{request.from}' to '#{request.to}' for value '#{request.value}'."
                     break

         response.result = lookupResult

    if errors.length
        errors.unshift "Type conversion failed:"
        response.error = errors.join " "

    response


module.exports = convert
