UTILLIB = require './arc_core_util'
FILTERLIB = require './arc_core_filter'
GRAPHLIB = require './arc_core_graph'

rootVertex = "request"

buildMergedFilterSpecDigraphModel = module.exports = (request_) ->
    response = error: null, result: null
    errors = []
    inBreakScope = false
    while not inBreakScope
        inBreakScope = true

        # Initialize the result.
        result =
            digraph: null
            filterTable: {}
            order:
                bfsVertices: []
                rbfsVertices: []

        # Create am empty digraph model.
        innerResponse = GRAPHLIB.directed.create
            name: "Discriminator Decission Tree Model"
        if innerResponse.error
            errors.unshift innerResponse.error
            break
        result.digraph = innerResponse.result

        # Add a vertex that models the root of the disriminator decisssion tree.
        result.digraph.addVertex { u: rootVertex, p: { color: "white" } }

        # Process each filter in the request array.
        filters = []
        for filter in request_
            # Add this filter's input specification to discriminator's decission tree graph.
            innerResponse = addFilterSpecToMergedDigraphModel graph: result.digraph, filter: filter
            if innerResponse.error
                errors.unshift innerResponse.error
                break
            result.filterTable[filter.filterDescriptor.operationID] = {}
            filters.push filter.filterDescriptor.operationID
        if errors.length
            errors.unshift "Unable to build merged filter specification digraph model."
            break

        # Indicate that the discrimintor vertex must resolve all filters in the request array.
        uprops = result.digraph.getVertexProperty rootVertex
        uprops.filters = filters
        result.digraph.setVertexProperty { u: rootVertex, p: uprops }
        result.digraph.setGraphDescription "Models the combined input filter specifications of Filter ID's: [" + filters.join(", ") + "]."

        # Deduce the breadth-firth order of the discriminator's decission tree graph.
        innerResponse = deduceBreadthFirstOrder result.digraph
        if innerResponse.error
            errors.unshift innerResponse.error
            break
        result.order = innerResponse.result
        response.result = result
        break

    if errors.length
        response.error = errors.join " "
    response


deduceBreadthFirstOrder = (digraph_) ->
    response = error: null, result: null
    errors = []
    inBreakScope = false
    while not inBreakScope
        inBreakScope = true
        bfsVertices = []
        rbfsVertices = []
        bfsResponse = GRAPHLIB.directed.breadthFirstTraverse
            digraph: digraph_
            visitor:
                discoverVertex: (grequest_) ->
                    bfsVertices.push grequest_.u
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
        while index < bfsVertices.length
            rbfsVertices[index] = bfsVertices[bfsVertices.length - index - 1]
            index++
        response.result =
            bfsVertices: bfsVertices
            rbfsVertices: rbfsVertices
        break
    if errors.length
        response.error = errors.join " "
    response


# request = { filter: object, digraph: object }

addFilterSpecToMergedDigraphModel = (request_) ->

    response = error: null, result: null
    errors = []
    inBreakScope = false

    operationID = request_.filter.filterDescriptor.operationID

    while not inBreakScope

        inBreakScope = true

        mapQueue = []
        mapQueue.push
            parentVertex: rootVertex
            parentNamespaceName: ""
            path: "request"
            namespaceDescriptor: request_.filter.filterDescriptor.inputFilterSpec

        while mapQueue.length

            mapEntry = mapQueue.shift()

            types =  null
            considerSubnamespaces = true

            if not (mapEntry.namespaceDescriptor? and mapEntry.namespaceDescriptor)
                mapEntry.namespaceDescriptor = { ____opaque: true }

            if (mapEntry.namespaceDescriptor.____types? and mapEntry.namespaceDescriptor.____types)
                types = mapEntry.namespaceDescriptor.____types
                if Object.prototype.toString.call(types) == '[object String]'
                    types = [ types ]
                # considerSubnamespaces = (-1 == types.indexOf('jsUndefined'))
            else
                if (mapEntry.namespaceDescriptor.____accept? and mapEntry.namespaceDescriptor.____accept)
                    types = mapEntry.namespaceDescriptor.____accept
                    if Object.prototype.toString.call(types) == '[object String]'
                        types = [ types ]
                    considerSubnamespaces = false
                else
                    if (mapEntry.namespaceDescriptor.____opaque? and mapEntry.namespaceDescriptor.____opaque)
                        types = [ 'jsUndefined', 'jsNull', 'jsBoolean', 'jsNumber', 'jsObject', 'jsFunction', 'jsString', 'jsArray' ]
                        considerSubnamespace = false

            if (mapEntry.namespaceDescriptor.____defaultValue? and mapEntry.namespaceDescriptor.____defaultValue)
                types.push 'jsUndefined'

            for type in types
                vertexId = mapEntry.parentVertex + mapEntry.parentNamespaceName + "(" + type + ")"
                if not request_.graph.isVertex vertexId
                    request_.graph.addVertex u: vertexId, p: { filterSpecPath: mapEntry.path, filters: [ operationID ], color: "white" }
                else
                    vertexProperty = request_.graph.getVertexProperty vertexId
                    vertexProperty.filters.push operationID
                    request_.graph.setVertexProperty { u: vertexId, p: vertexProperty }

                request_.graph.addEdge { e: { u: mapEntry.parentVertex, v: vertexId } }

                if (not considerSubnamespaces) or (type == 'jsUndefined') or (type == 'jsArray')
                    continue

                for subnamespaceName of mapEntry.namespaceDescriptor
                    if subnamespaceName.indexOf('____') != 0
                        mapQueue.push
                            parentVertex: vertexId
                            parentNamespaceName: "." + subnamespaceName
                            path: mapEntry.path + "." + subnamespaceName
                            namespaceDescriptor: mapEntry.namespaceDescriptor[subnamespaceName]

                # end for type

            # end while

        # end while

    response
