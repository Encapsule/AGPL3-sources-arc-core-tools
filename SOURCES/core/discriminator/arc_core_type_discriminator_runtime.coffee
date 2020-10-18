
IDENTIFIER = require './arc_core_identifier'
FILTERLIB = require './arc_core_filter'
TYPELIB = require './arc_core_types'

checkPropConstraint = require './arc_core_type_discriminator_runtime_check_property'

discriminatorDescriptions =
    getFilterID: "Retrieves the filter identifier of the subfilter to which this request should be routed."
    getFilter: "Retrieves a reference to the subfilter that should be used to process this request."
    routeRequest: "Routes the request to one of N subfilters based on request signature analysis."

filterlibResponse = FILTERLIB.create
    operationID: "nIcFGxZeQia9GCBFbpiDZQ"
    operationName: "Discriminator Filter Factory"
    operationDescription: "Generates and returns a Discriminator Filter object."

    inputFilterSpec:
        ____types: "jsObject"
        filterTable:
            ____accept: "jsObject"
        mergedDigraph:
            ____accept: "jsObject"
        parseDigraph:
            ____accept: "jsObject"
        options:
            ____label: "Options Object"
            ____description: "Factory options object."
            ____types: "jsObject"
            ____defaultValue: {}
            action:
                ____label: "Action Flag"
                ____description: "The action to be taken by the generated Discriminator Filter."
                ____accept: "jsString"
                ____inValueSet: [ "getFilterID", "getFilter", "routeRequest" ]
                ____defaultValue: "getFilterID"

    bodyFunction: (request_) ->

        response = error: null, result: null
        errors = []
        inBreakScope = false

        runtimeContext = request_

        while not inBreakScope
            inBreakScope = true

            supportedFilterIDs = []
            supportedFilters = []
            for filterID of runtimeContext.filterTable
                supportedFilterIDs.push filterID
                filter = runtimeContext.filterTable[filterID]
                supportedFilters.push "[#{filterID}::#{filter.filterDescriptor.operationName}]"

            supportedFilterIDs = supportedFilters.sort((a_, b_) -> ((a_.operationName < b_.operationName) ? -1 : ( (a_.operationName == b_.operationName) ? 0 : 1)) ).join("-")
            discriminatorID = IDENTIFIER.irut.fromReference(supportedFilterIDs).result

            innerResponse = FILTERLIB.create
                operationID: discriminatorID,
                operationName: "Discriminator Filter"
                operationDescription: discriminatorDescriptions[request_.options.action]

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
                                errors.push "Unrecognized request format."
                                errors.push "Request signature must match one of filter set"
                                errors.push "{#{supportedFilters.join(", ")}}."

                        if not errors.length
                            # Take action based on the runtimeContext.options.action flag.
                            switch runtimeContext.options.action
                                when "getFilterID"
                                    response.result = filterID
                                    break
                                when "getFilter"
                                    response.result = runtimeContext.filterTable[filterID]
                                    break
                                when "routeRequest"
                                    routeResponse = runtimeContext.filterTable[filterID].request request_
                                    if not routeResponse.error
                                        response.result = routeResponse.result
                                    else
                                        errors.unshift routeResponse.error
                                    break
                                else
                                    errors "Internal error unrecognized discriminator action '#{runtimeContext.options.action}'."
                                    break

                        break

                    if errors.length
                        response.error = errors.join " "

                    response

            if innerResponse.error
                errors.unshift innerResponse.error
                break

            runtimeFilter = innerResponse.result
            runtimeFilter.supportedFilters = supportedFilters
            runtimeFilter.requestSpace = request_.mergedDigraph
            runtimeFilter.options = runtimeContext.options

            response.result = innerResponse.result
            break

        if errors.length
            response.result = errors.join " "

        response

if filterlibResponse.error
    throw new Error "Cannot load module due to error: " + filterlibResponse.error

module.exports = filterlibResponse.result
