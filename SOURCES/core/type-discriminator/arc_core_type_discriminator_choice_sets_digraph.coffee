
UTILLIB = require './arc_core_util'


# request = { digraph: object, rbfsVertices: array }
deduceDiscriminationChoiceSets = module.exports = (request_) ->
    response = error: null, result: null
    errors = []
    inBreakScope = false
    index = 0
    vertex = null
    while not inBreakScope
        inBreakScope = true
        while index < request_.rbfsVertices.length
            vertex = request_.rbfsVertices[index]
            innerResponse = analyzeFilterSpecGraphVertex digraph: request_.digraph, vertex: vertex
            if innerResponse.error
                errors.unshift innerResponse.error
                break
            index++
        if errors.length
            break
    if errors.length
        errors.unshift "Unable to deduce discrimination choice sets due to error processing merged filter spec graph vertex '#{vertex}'."
        errors.unshift "Further details:"
        response.error = errors.join(" ")

    console.log "Choice sets-colored spec graph: '#{request_.digraph.toJSON(undefined, 4)}'."

    response


# request = { digraph: object, vertex, string }
analyzeFilterSpecGraphVertex = (request_) ->
    response = error: null, result: null
    errors = []
    inBreakScope = false
    while not inBreakScope
        inBreakScope = true

        uprops = request_.digraph.getVertexProperty request_.vertex

        outDegree = request_.digraph.outDegree request_.vertex

        unambiguousChoicesByFilter = {}
        ambiguousChoicesByFilter = {}

        if not outDegree
            if uprops.filters.length == 1
                filter_ = uprops.filters[0]
                if not (unambiguousChoicesByFilter[filter_]? and unabiguousChoicesByFilter[filter_])
                    unambiguousChoicesByFilter[filter_] = {}
                unambiguousChoicesByFilter[filter_][request_.vertex] = true
                uprops.color = "yellow"
            else
                uprops.filters.forEach (filter_) ->
                    if not (ambiguousChoicesByFilter[filter]? and ambiguousChoicesByFilter[filter])
                        ambiguousChoicesByFilter[filter] = {}
                    ambiguousChoicesByFilter[filter][request_.vertex] = true
                uprops.color = "black"

        else

            outEdges = request_.digraph.outEdges request_.vertex

            outEdges.forEach (edge_) ->

                vprops = request_.digraph.getVertexProperty edge_.v

                for filter_ of vprops.pass1.unambiguousChoicesByFilter
                    if not (unambiguousChoicesByFilter[filter_]? and unambiguousChoicesByFilter[filter_])
                        unambiguousChoicesByFilter[filter_] = {}
                    unambiguousChoicesByFilter[filter_][request_.vertex] = true

                for filter_ of vprops.pass1.ambiguousChoicesByFilter
                    if not (ambiguousChoicesByFilter[filter_]? and ambiguousChoicesByFilter[filter_])
                        ambiguousChoicesByFilter[filter_] = {}
                    ambiguousChoicesByFilter[filter_][request_.vertex] = true

            unambiguousChoicesCount = UTILLIB.dictionaryLength unambiguousChoicesByFilter
            if uprops.filters.length == unambiguousChoicesCount
                uprops.color = "yellow"
            else if unambiguousChoicesCount
                uprops.color = "orange"
            else
                uprops.color = "black"

        uprops.pass1 =
            unambiguousChoicesByFilter: unambiguousChoicesByFilter
            ambiguousChoicesByFilter: ambiguousChoicesByFilter

        request_.digraph.setVertexProperty { u: request_.vertex, p: uprops }

        response.result = uprops

        break

    if errors.length
        response.error = errors.join " "
    response
