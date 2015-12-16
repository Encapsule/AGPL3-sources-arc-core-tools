

GRAPHLIB = require './arc_core_graph'
UTILLIB = require './arc_core_util'

partitionAndColorGraphByAmbiguity = module.exports = (digraph_) ->
    response = error: null, result: null
    errors = []
    inBreakScope = false
    while not inBreakScope
        inBreakScope = true
        rbfsVertices = []
        ambiguousBlackVertices = []
        bfsResponse = GRAPHLIB.directed.breadthFirstTraverse
            digraph: digraph_
            visitor:
                discoverVertex: (grequest_) ->
                    uprop = grequest_.g.getVertexProperty grequest_.u
                    uprop.filters.sort()
                    if uprop.filters.length == 1
                        uprop.color = "gold"
                    else
                        if grequest_.g.outDegree(grequest_.u)
                            uprop.color = "gray"
                        else
                            uprop.color = "black"
                            ambiguousBlackVertices.push grequest_.u
                    grequest_.g.setVertexProperty { u: grequest_.u, p: uprop }
                    rbfsVertices.unshift grequest_.u
                    true
        if bfsResponse.error
            errors.unshift bfsResponse.error
            errors.unshift "Error during BFS of merged filter specification graph."
            break
        if not bfsResponse.result.searchStatus == "completed"
            errors.unshift "BFS of merged filter specification graph did not complete as expected."
            break
        if UTILLIB.dictionaryLength(bfsResponse.result.undiscoveredMap)
            errors.unshift "BFS of merged filter specification graph did not discover all vertices?"
            break

        index = 0
        while index < rbfsVertices.length
            vertex = rbfsVertices[index++]
            uprop = digraph_.getVertexProperty vertex

            if uprop.color != "gray"
                continue

            allFilters = {}
            blackFilters = {}
            orangeFilters = {}

            outEdges = digraph_.outEdges vertex
            outEdges.forEach (edge_) ->
                vprop = digraph_.getVertexProperty edge_.v
                vprop.filters.forEach (filter_) ->
                    allFilters[filter_] = true
                    switch vprop.color
                        when "gold"
                            orangeFilters[filter_] = true
                            break
                        when "black"
                            blackFilters[filter_] = true
                            break
                        else
                            errors.unshift "Unexpected color '#{vprops.color}' discovered analyzing vertex '#{edge_.v}'."
                            break

                uprop.filters.forEach (filter_) ->
                    if not (allFilters[filter_]? and allFilters[filter_])
                        blackFilters[filter_] = true
                for filter_ of blackFilters
                    if orangeFilters[filter_]? and orangeFilters[filter_]
                        delete orangeFilters[filter_]

            if not UTILLIB.dictionaryLength(blackFilters)
                uprop.color = "green"
            else
                uprop.color = "black"
                ambiguousBlackVertices.push vertex

            digraph_.setVertexProperty { u: vertex, p: uprop }

        # We cannot uniquely discriminate between filters whose input filter specifications
        # contain overlapping request structures that terminate at the leaf node of any of
        # the consituent filter's contributions to the merged filter spec digraph model.

        if ambiguousBlackVertices.length
            ambiguousBlackVertices.sort()
            ambiguousBlackVertices.forEach (vertex_) ->
                vertexProperty = digraph_.getVertexProperty vertex_
                errors.push "Filters [#{vertexProperty.filters.join(" and ")}] overlap ambiguously at filter spec node '#{vertex_}'."

        response.result =
            digraph: digraph_
            ambigousBlackVertices: ambiguousBlackVertices

        break

    if errors.length
        response.error = errors.join " "
    response
