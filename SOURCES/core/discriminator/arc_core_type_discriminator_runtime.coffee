
FILTERLIB = require './arc_core_filter'

generateDiscriminatorRuntimeFilter = module.exports = (runtimeContext_) ->

    response = error: null, result: null
    errors = []
    inBreakScope = false

    runtimeContext = runtimeContext_

    while not inBreakScope
        inBreakScope = true

        innerResponse = FILTERLIB.create
            operationID: "XY-x390CSVmXTu0oYXlRiw"
            operationName: "Discrimintor Filter"
            operationDescription: "Discriminates between N disjunct request signatures."
            bodyFunction: (request_) ->
                response = { error: null, response: null }
                errors = []
                inBreakScope = false
                while not inBreakScope
                    inBreakScope = true
                    console.log "In #{@operationName}:#{@operationID}"
                    console.log "runtime context = #{JSON.stringify(runtimeContext)}"
                    break
                if errors.length
                    response.error = errors.join " "
                response

        if innerResponse.error
            errors.unshift innerResponse.error
            errors.unshift "Unable to generate discriminator filter runtime due to error:"
            break

        response.result = innerResponse.result # discriminator filter runtime
        break

    if errors.length
        response.error = errors.join " "

    response
