
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

        # ROOT TO LEAVES COLORING (relatively simple)

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

        # Fail outright if the search looks off even a little bit.
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

        # LEAVES TO ROOT LEAVES COLORING (not as simple)

        index = 0
        while index < rbfsVertices.length
            vertex = rbfsVertices[index++]
            uprop = digraph_.getVertexProperty vertex

            # DO NOT TOUCH GOLD AND BLACK VERTICES

            if uprop.color != "gray"
                continue

            allFilters = {}
            blackFilters = {}
            goldFilters = {}

            # EXAMINE THE VERTICES ADJACENT TO THE INITIALLY GRAY VERTEX

            outEdges = digraph_.outEdges vertex
            outEdges.forEach (edge_) ->

                vprop = digraph_.getVertexProperty edge_.v

                vprop.filters.forEach (filter_) ->

                    allFilters[filter_] = true
                    if (vprop.color == "gold") or (vprop.color == "green")
                        goldFilters[filter_] = true
                    else if vprop.color == "black"
                        blackFilters[filter_] = true
                    else
                        # Fail outright if we encounter an unexpected color in the graph.
                        errors.unshift "Unexpected color '#{vprop.color}' discovered analyzing vertex '#{edge_.v}'."

            # Detect filter's whose subcription tree ends on the current vertex (induced by set difference)
            uprop.filters.forEach (filter_) ->
                if not (allFilters[filter_]? and allFilters[filter_])
                    blackFilters[filter_] = true

            # If a filter subscribes to any of the adjacent black vertices then it's ambiguous.
            for filter_ of blackFilters
                if goldFilters[filter_]? and goldFilters[filter_]
                    delete goldFilters[filter_]

            # Are there any ambiguous (black) filters at or above the current vertex?
            if not UTILLIB.dictionaryLength(blackFilters)
                # Color the vertex green to indicate that there are no ambiguities
                uprop.color = "green"
            else
                # Color the vertex black to indicate that there's one or more ambiguities
                uprop.color = "black"
                ambiguousBlackVertices.push vertex

            digraph_.setVertexProperty { u: vertex, p: uprop }

        # We cannot uniquely discriminate between filters whose input filter specifications
        # contain overlapping request structures that terminate at the leaf node of any of
        # the consituent filter's contributions to the merged filter spec digraph model.

        response.result =
            digraph: digraph_
            ambigousBlackVertices: ambiguousBlackVertices
            ambiguousFilterSpecificationErrors: []

        if ambiguousBlackVertices.length
            ambiguousBlackVertices.sort()
            ambiguousBlackVertices.forEach (vertex_) ->
                vertexProperty = digraph_.getVertexProperty vertex_
                message = "Filters [#{vertexProperty.filters.join(" and ")}] overlap ambiguously at filter spec node '#{vertex_}'."
                response.result.ambiguousFilterSpecificationErrors.push message
        break

    if errors.length
        response.error = errors.join " "
    response
