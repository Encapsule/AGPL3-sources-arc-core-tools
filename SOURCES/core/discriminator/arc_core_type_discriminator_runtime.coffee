
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

                        console.log "In #{@operationName}:#{@operationID}"
                        console.log "runtime context = #{JSON.stringify(runtimeContext)}"

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

                                typeConstraint = vprop.typeContraint
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
                                errors.unshift "Request input not recognized."

                        if not errrors.length
                            response.result = filterID

                        break

                    response


            if innerResponse.error
                errors.unshift innerResponse.error
                break

            response.result = innerResponse.result
            break

        if errors.length
            response.result = errors.join " "

        response
