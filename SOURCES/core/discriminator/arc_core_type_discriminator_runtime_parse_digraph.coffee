
GRAPHLIB = require './arc_core_graph'
UTILLIB = require './arc_core_util'
IDLIB = require './arc_core_identifier'

# request = object (ambiguity model digraph reference)

buildRuntimeParseModel = module.exports = (request_) ->
    response = error: null, result: null
    errors = []
    inBreakScope = false

    while not inBreakScope
        inBreakScope = true

        uprop = request_.getVertexProperty "request"
        if uprop.color != "green"
            errors.unshift "Invalid ambiguity model digraph. The root vertex should be color 'green' but is '#{uprop.color}'."
            break

        innerResponse = GRAPHLIB.directed.create
            name: "Discriminator Runtime Parse Digraph"
        if innerResponse.error
            errors.unshift innerResponse.error
            break

        runtimeParseDigraph = innerResponse.result
        runtimeParseDigraph.addVertex u: "request"

        innerResponse = GRAPHLIB.directed.breadthFirstTraverse
            digraph: request_
            visitor:
                examineEdge: (gcb_) ->

                    continueTraversal = true

                    uprop = gcb_.g.getVertexProperty gcb_.e.u
                    vprop = gcb_.g.getVertexProperty gcb_.e.v

                    colorHash = uprop.color + ":" + vprop.color

                    switch colorHash

                        when "green:green"
                            rtprops = {}
                            rtprops.filterSpecPath = vprop.filterSpecPath
                            rtprops.typeConstraint = vprop.typeConstraint
                            runtimeParseDigraph.addVertex({ u: gcb_.e.v, p: rtprops })
                            runtimeParseDigraph.addEdge({ e: gcb_.e })
                            break

                        when "green:gold"
                            rtprops = {}
                            rtprops.filterSpecPath = vprop.filterSpecPath
                            rtprops.typeConstraint = vprop.typeConstraint
                            rtprops.filterID = vprop.filters[0]
                            runtimeParseDigraph.addVertex({ u: gcb_.e.v, p: rtprops })
                            runtimeParseDigraph.addEdge({ e: gcb_.e })
                            break

                        when "green:black"
                            break

                        when "black:black"
                            break

                        when "gold:gold"
                            break

                        else
                            errors.push "Illegal input digraph edge color hash '#{colorHash}'"
                            errors.push "at edge ['#{gcb_.e.u}' -> '#{gcb_.e.v}']."
                            continueTraversal = false

                    continueTraversal

        if errors.length
            break

        if innerResponse.error
            errors.unshift innerResponse.error

        response.result = runtimeParseDigraph

        break

    if errors.length
        response.error = errors.join " "
    response
