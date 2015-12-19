
UTILLIB = require './arc_core_util'
IDLIB = require './arc_core_identifier'

# request = exclusionSetModel = { digraph: object, bfsVertices: array, rbfsVertices: array }

buildDiscriminatorChoiceSets = module.exports = (request_) ->
    response = error: null, result: null
    errors = []
    inBreakScope = false

    index = 0
    vertex = null
    while not inBreakScope
        inBreakScope = true

        # Do not try to deduce choice sets on a null or unambigous merged filter spec graph model.

        uprop = request_.digraph.getVertexProperty "request"
        if uprop.color == "gold"
            if request_.digraph.outDegree "request"
                errors.unshift "Cannot create mutual exclusion set tree for merged filter spec model containing only one filter spec."
                break
            else
                errors.unshift "Cannot create mutual exclusion set tree for merged filter spec model because it's null."
                break

        discriminatorScript = []

        while index < request_.bfsVertices.length
            vertex = request_.bfsVertices[index]
            innerResponse = analyzeFilterSpecGraphVertex digraph: request_.digraph, vertex: vertex
            if innerResponse.error
                errors.unshift innerResponse.error
                break
            discriminatorScript.push innerResponse.result
            index++

        if errors.length
            break
        response.result = discriminatorScript

    if errors.length
        response.error = errors.join(" ")


    console.log "Choice Sets:"
    console.log JSON.stringify(response, undefined, 4) + "\n\n"

    response


# request = { digraph: object, vertex, string }
analyzeFilterSpecGraphVertex = (request_) ->
    response = error: null, result: null
    errors = []
    inBreakScope = false
    while not inBreakScope

        inBreakScope = true

        uprop = request_.digraph.getVertexProperty request_.vertex

        switch uprop.color
            when "gold"
                response.result =
                    truth:
                        filterID: uprop.filters[0]
                        filterSpecPath: uprop.filterSpecPath
                        typeConstraint: uprop.typeConstraint
                break
            when "green"
                choices = {}
                outEdges = request_.digraph.outEdges request_.vertex
                outEdges.forEach (edge_) ->
                    vprop = request_.digraph.getVertexProperty edge_.v
                    choiceKey = vprop.filters.join(":") + ":" + vprop.filterSpecPath
                    if not (choices[choiceKey]? and choices[choiceKey])
                        choices[choiceKey] = { disambiguate: { typeConstraints: [], filterSpecPath: vprop.filterSpecPath } }
                    choices[choiceKey].disambiguate.typeConstraints.push vprop.typeConstraint
                response.result =
                    disambiguate: choices
                break
            else
                errors.unshift "Unexpected graph coloration '#{uprop.color}' discovered on vertex '#{request_.vertex}'."
                break

        break

    if errors.length
        response.error = errors.join " "



    response
