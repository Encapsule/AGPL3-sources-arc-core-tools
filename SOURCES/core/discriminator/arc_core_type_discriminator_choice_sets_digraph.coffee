
UTILLIB = require './arc_core_util'

# request = exclusionSetModel = { digraph: object, bfsVertices: array, rbfsVertices: array }

buildDiscriminatorChoiceSets = module.exports = (request_) ->
    response = error: null, result: null
    errors = []
    inBreakScope = false

    index = 0
    vertex = null
    while not inBreakScope
        inBreakScope = true
        while index < request_.bfsVertices.length
            vertex = request_.rbfsVertices[index]
            innerResponse = analyzeFilterSpecGraphVertex digraph: request_.digraph, vertex: vertex
            if innerResponse.error
                errors.unshift innerResponse.error
                break
            index++
        if errors.length
            break
        response.result = request_

    if errors.length
        response.error = errors.join(" ")
    response


# request = { digraph: object, vertex, string }
analyzeFilterSpecGraphVertex = (request_) ->
    response = error: null, result: null
    errors = []
    inBreakScope = false
    while not inBreakScope

        inBreakScope = true

        uprop = request_.digraph.getVertexProperty request_.vertex

        console.log "#{uprop.color} '#{request_.vertex}'"

        if uprop.color == "gold"
            # This vertex does not need to be processed.
            break

        if uprop.color != "green"
            errors.unshift "Unexpected graph coloration '#{uprop.color}' discovered on vertex '#{request_.vertex}'."
            break

        break

    if errors.length
        response.error = errors.join " "

    response
