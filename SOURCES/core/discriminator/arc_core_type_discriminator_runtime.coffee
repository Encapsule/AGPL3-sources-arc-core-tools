
FILTERLIB = require './arc_core_filter'
TYPELIB = require './arc_core_types'

checkPropConstraint = require './arc_core_type_discriminator_runtime_check_property'

filterlibResponse = FILTERLIB.create
    operationID: "nIcFGxZeQia9GCBFbpiDZQ"
    operationName: "Discriminator Filter Factory"
    operationDescription: "Generates and returns a Discriminator Filter object."

    inputFilterSpec:
        ____types: "jsObject"
        filterTable:
            ____accept: "jsObject"
        parseDigraph:
            ____accept: "jsObject"

    bodyFunction: (request_) ->

        response = error: null, result: null
        errors = []
        inBreakScope = false

        runtimeContext = request_

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

                        inputNamespace = { request: request_ }
                        currentVertex = "request"
                        filterID = null

                        while (not filterID) and (not errors.length)

                            uprop = runtimeContext.parseDigraph.getVertexProperty currentVertex
                            outEdges = runtimeContext.parseDigraph.outEdges currentVertex

                            index = 0
                            continueRankEnum = true

                            while (not filterID) and (not errors.length) and (index < outEdges.length) and continueRankEnum

                                edge = outEdges[index]
                                vprop = runtimeContext.parseDigraph.getVertexProperty edge.v

                                typeConstraint = vprop.typeConstraint
                                pathParts = vprop.filterSpecPath.split "."
                                propertyName = pathParts[pathParts.length - 1]

                                checkResponse = checkPropConstraint propertyName, typeConstraint, inputNamespace

                                if checkResponse.error
                                    errors.unshift checkResponse.error
                                    break

                                if checkResponse.result.pass
                                    if vprop.filterID
                                        filterID = vprop.filterID
                                    else
                                        continueRankEnum = false
                                        currentVertex = edge.v
                                        inputNamespace = checkResponse.result.reference
                                else
                                    index++

                            if index == outEdges.length
                                supportedFilters = []
                                for filterID of runtimeContext.filterTable
                                    filter = runtimeContext.filterTable[filterID]
                                    supportedFilters.push "[#{filter.filterDescriptor.operationName}:#{filterID}]"
                                errors.unshift "Expected request for one of filters #{supportedFilters.join(" or ")}."
                                errors.unshift "Invalid request input data signature is not recognized and cannot be routed."

                        if not errors.length
                            response.result = filterID

                        break

                    if errors.length
                        response.error = errors.join " "

                    response


            if innerResponse.error
                errors.unshift innerResponse.error
                break

            runtimeFilter = innerResponse.result
            runtimeFilter.runtimeContext = runtimeContext

            response.result = innerResponse.result
            break

        if errors.length
            response.result = errors.join " "

        response

if filterlibResponse.error
    throw new Error "Cannot load module due to error: " + filterlibResponse.error

module.exports = filterlibResponse.result