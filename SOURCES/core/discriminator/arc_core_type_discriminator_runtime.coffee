
FILTERLIB = require './arc_core_filter'
TYPELIB = require './arc_core_types'

/* request = { filterTable: object, parseDigraph: object } */

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

                    input = { request: request_ }
                    path = null
                    currentVertex = "request"
                    filterID = null

                    while (not filterID) and currentVertex

                        uprop = runtimeContext.getVertexProperty currentVertex
                        outEdges = runtimeContext.outEdges currentVertex

                        index = 0
                        continueRankScan = true
                        while continueRankScan and (index < outEdges.length)

                            edge = outEdges[index++]
                            vprop = runtimeContext.parseDigraph.getVertexProperty edge.v

                            testTypeConstraint = vprop.typeContraint
                            pathParts = vprop.filterSpecPath.split "."
                            testPropertyName = pathParts[pathParts.length - 1]

                            testReference = input[testPropertyName]

                            innerResponse = TYPELIB.check value: testReference, types: testTypeConstraint
                            if not innerResponse.error
                                continueRankScan = false
                                # We have a match
                                if (vprop.filterID? and vprop.filterID)
                                    filterID = vprop.filterID
                                    break
                                else
                                    currentVertex = edge.v
                                    input = testReference
                                    break















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
