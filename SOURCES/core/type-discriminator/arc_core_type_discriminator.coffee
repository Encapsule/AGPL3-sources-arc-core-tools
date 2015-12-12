
UTILLIB = require './arc_core_util'
FILTERLIB = require './arc_core_filter'
GRAPHLIB = require './arc_core_graph'

addSpecToSpecGraph = require './arc_core_type_discriminator_graph'

filterlibResponse = FILTERLIB.create

    operationID: "5A8uDJunQUm1w-HcBPQ6Gw"
    operationName: "Type Descriminator"
    operationDescription: "Produces a Filter that accepts variant input that automatically detects the input type."

    inputName: "Type Descriminator Filter Input"
    inputDescription: "An array of two or more Filters whose input Filter Specs will be used to build the discrimination filter."
    inputFilterSpec:
        ____opaque: true


    bodyFunction: (request_) ->
        response = error: null, result: null
        errors = []
        inBreakScope = false
        while !inBreakScope
            inBreakScope = true

            specificationGraph = GRAPHLIB.directed.create().result
            specificationGraph.addVertex { u: "request", p: { color: "white" } }
            
            specificationScoreboard = {}
            verticesToPrune = []

            for filter in request_
                innerResponse = addSpecToSpecGraph graph: specificationGraph, filter: filter
                if innerResponse.error
                    errors.unshift innerResponse.error
                    break
                specificationScoreboard[filter.filterDescriptor.operationID] = "unknown"

            bfsResponse = GRAPHLIB.directed.breadthFirstTraverse
                digraph: specificationGraph
                visitor:
                    examineVertex: (grequest_) ->
                        currentVertexProperty = grequest_.g.getVertexProperty grequest_.u
                        console.log grequest_.u

                        outEdges = grequest_.g.outEdges grequest_.u
                        
                        switch currentVertexProperty.color
                            when "white"
                                unresolvableFilters = {}
                                unambiguousVertices = []
                                allVertices = []
                                outEdges.forEach (edge_) ->
                                    targetVertexProperty = grequest_.g.getVertexProperty edge_.v
                                    allVertices.push edge_.v
                                    if targetVertexProperty.filters.length > 1
                                        targetVertexProperty.filters.forEach (filterID_) -> unresolvableFilters[filterID_] = true
                                    else
                                        unambiguousVertices.push edge_.v
                                for operationID of specificationScoreboard
                                    if not (unresolvableFilters[operationID]? and unresolvableFilters[operationID])
                                        unambiguousVertices.forEach (vertexID_) ->
                                            targetVertexProperty = grequest_.g.getVertexProperty vertexID_
                                            if targetVertexProperty.filters[0] == operationID
                                                targetVertexProperty.color = "orange" # possible answer for this filter
                                                grequest_.g.setVertexProperty { u: vertexID_, targetVertexProperty }
                                allVertices.forEach (vertexID_) ->
                                    targetVertexProperty = grequest_.g.getVertexProperty vertexID_
                                    if targetVertexProperty.color == "white" and targetVertexProperty.filters.length == 1
                                        targetVertexProperty.color = "black"
                                        grequest_.g.setVertexProperty { u: vertexID_, targetVertexProperty }
                                break

                            when "black"
                                outEdges.forEach (edge_) ->
                                    targetVertexProperty = grequest_.g.getVertexProperty edge_.v
                                    targetVertexProperty.color = currentVertexProperty.color
                                    grequest_.g.setVertexProperty { u: edge_.v, p: targetVertexProperty }
                                break
                            
                            when "orange"
                                outEdges.forEach (edge_) ->
                                    targetVertexProperty = grequest_.g.getVertexProperty edge_.v
                                    targetVertexProperty.color = currentVertexProperty.color
                                    grequest_.g.setVertexProperty { u: edge_.v, p: targetVertexProperty }
                                break

                            else
                                console.log "UNEXPECTED COLOR IN MAP! " + currentVertexProperty.color
                                break


                        true

            response.result = specificationGraph
            break

        if errors.length
            response.error = errors.join(" ")
        response

    outputName: "Type Desrimination Filter Output"
    outputDescriptor: "A generated Type Descriminator Filter."
    outputFilterSpec:
        ____opaque: true




if filterlibResponse.error
    throw new Error filterlibResponse.error

module.exports = filterlibResponse.result
