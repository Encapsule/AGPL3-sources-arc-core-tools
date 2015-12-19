
FILTERLIB = require './arc_core_filter'

filterlibResponse = FILTERLIB.create

    operationID: "XY-x390CSVmXTu0oYXlRiw"
    operationName: "Discrimintor Filter"
    operationDescription: "Discriminates its request as being invalid or one of N possible filter input request signatures."

    bodyFunction: (request_) ->
        response = { error: null, response: null }
        errors = []
        inBreakScope = false
        while not inBreakScope
            inBreakScope = true
            break

        if errors.length
            response.error = errors.join " "

        response
