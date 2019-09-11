
UTILLIB = require './arc_core_util'
FILTERLIB = require './arc_core_filter'
GRAPHLIB = require './arc_core_graph'

rootVertex = "request"

# request_ = [ filter, filter, filter... ]
buildMergedFilterSpecDigraphModel = module.exports = (request_) ->
    response = error: null, result: null
    errors = []
    inBreakScope = false
    while not inBreakScope
        inBreakScope = true

        # Initialize the result.
        result = digraph: null, digraph2: null, filterTable: {}

        # Create am empty digraph model.
        innerResponse = GRAPHLIB.directed.create name: "Discriminator Decission Tree Model"
        if innerResponse.error
            errors.unshift innerResponse.error
            break
        result.digraph = innerResponse.result

        ### EXPERIMENTAL
        # Create am empty digraph model #2
        innerResponse = GRAPHLIB.directed.create name: "Filter Set Merged Input Spec Model"
        if innerResponse.error
            errors.unshift innerResponse.error
            break
        result.digraph2 = innerResponse.result
        ###

        # Add a vertex that models the root of the disriminator decisssion tree.
        result.digraph.addVertex { u: rootVertex, p: { color: "white" } }

        # Process each filter in the request array.
        filters = []

        for filter in request_

            filterOperationID = filter.filterDescriptor.operationID

            if result.filterTable[filterOperationID]? and result.filterTable[filterOperationID]
                errors.unshift "Check to ensure all filters declare a unique operation ID (IRUT) and that no filter appears more than once in the input array."
                errors.unshift "Filter '#{filterOperationID}::#{filter.filterDescriptor.operationName}' uses an invalid duplicate operation ID!"
                break

            # Add this filter's input specification to discriminator's decission tree graph.
            innerResponse = addFilterSpecToMergedDigraphModel filter: filter, graph: result.digraph

            if innerResponse.error
                errors.unshift innerResponse.error
                break

            ### EXPERIMENTAL
            # A slightly different approach...
            innerResponse = addFilterSpecToMergedModel2  filter: filter, digraph: result.digraph2
            ###

            result.filterTable[filter.filterDescriptor.operationID] = filter
            filters.push filter.filterDescriptor.operationID

        if errors.length
            errors.unshift "Unable to build merged filter specification digraph model."
            break

        # Indicate that the discrimintor vertex must resolve all filters in the request array.
        uprops = result.digraph.getVertexProperty rootVertex
        uprops.filters = filters
        result.digraph.setVertexProperty { u: rootVertex, p: uprops }
        result.digraph.setGraphDescription "Models the combined input filter specifications of Filter ID's: [" + filters.join(", ") + "]."

        # Assign the result.
        response.result = result
        break

    if errors.length
        response.error = errors.join " "
    ### EXPERIMENTAL
    else
        # console.log response.result.digraph2.stringify(undefined, 4)
    #### EXPERIMENTAL

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
            addThisNamespaceToTheDigraph = true
            considerSubnamespaces = true

            # Default filters that specify no input specification.
            if not (mapEntry.namespaceDescriptor? and mapEntry.namespaceDescriptor)
                # An opaque namespace may be undefined which means that it cannot be used to
                # positively discriminate a specific message vs another message.
                # NO... mapEntry.namespaceDescriptor = { ____opaque: true }
                addThisNamespaceToTheDigraph = false
                continue

            if (mapEntry.namespaceDescriptor.____types? and mapEntry.namespaceDescriptor.____types)
                types = mapEntry.namespaceDescriptor.____types
                if Object.prototype.toString.call(types) == '[object String]'
                    types = [ types ]
            else
                if (mapEntry.namespaceDescriptor.____accept? and mapEntry.namespaceDescriptor.____accept)
                    types = mapEntry.namespaceDescriptor.____accept
                    if Object.prototype.toString.call(types) == '[object String]'
                        types = [ types ]
                    considerSubnamespaces = false

            includesUndefined = types.indexOf "jsUndefined"
            if includesUndefined > -1
                # An optional namespace may be undefined in a runtime filter request. So, similar to
                # opaque namespaces, we cannot use optional namespaces to discriminate messages.
                addThisNamespaceToTheDigraph = false
                continue

            if (mapEntry.namespaceDescriptor.____defaultValue? and (mapEntry.namespaceDescriptor.____defaultValue or (mapEntry.namespaceDescriptor.____defaultValue == null)))
                # An namespace that specifies a default value is by definition optional in a runtime filter request.
                # So, similar to opaque namespaces, we cannot use optional namespaces to discriminate messages.
                addThisNamespaceToTheDigraph = false
                continue

            for type in types
                vertexId = mapEntry.parentVertex + mapEntry.parentNamespaceName + "(" + type + ")"
                if not request_.graph.isVertex vertexId
                    request_.graph.addVertex
                        u: vertexId
                        p:
                            filterSpecPath: mapEntry.path
                            filters: [ operationID ]
                            color: "white"
                            typeConstraint: type
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



# ================================================================

jsMonikerList = [ "jsUndefined", "jsNull", "jsBoolean", "jsString", "jsNumber", "jsObject", "jsArray", "jsFunction" ]

# request = { filter: object, digraph: object }
addFilterSpecToMergedModel2 = (request_) ->

    response = error: null, result: null
    errors = []
    inBreakScope = false

    while not inBreakScope

        inBreakScope = true

        operationID = request_.filter.filterDescriptor.operationID
        namespaceDescriptor = request_.filter.filterDescriptor.inputFilterSpec? and request_.filter.filterDescriptor.inputFilterSpec or { ____opaque: true }
        namespacePath = "~"

        namespaceDescriptorQueue = [ { namespaceDescriptor: namespaceDescriptor, namespacePath: namespacePath, parentNamespacePath: null } ]

        while namespaceDescriptorQueue.length > 0

            queueEntry = namespaceDescriptorQueue.shift()

            namespaceTypes = null
            while not namespaceTypes
                if queueEntry.namespaceDescriptor.____opaque? and queueEntry.namespaceDescriptor.____opaque
                    namespaceTypes = jsMonikerList
                    break

                if queueEntry.namespaceDescriptor.____types? and queueEntry.namespaceDescriptor.____types
                    namespaceTypes = queueEntry.namespaceDescriptor.____types
                else
                    namespaceTypes = queueEntry.namespaceDescriptor.____accept

                if Object.prototype.toString.call(namespaceTypes) != "[object Array]"
                    namespaceTypes = [ namespaceTypes ]

            if not request_.digraph.isVertex queueEntry.namespacePath
                request_.digraph.addVertex {
                    u: queueEntry.namespacePath
                    p:
                        jsUndefined: []
                        jsNull: []
                        jsBoolean: []
                        jsString: []
                        jsNumber: []
                        jsObject: []
                        jsArray: []
                        jsFunction: [] }

            namespaceProps = request_.digraph.getVertexProperty queueEntry.namespacePath

            if queueEntry.parentNamespacePath
                request_.digraph.addEdge { e: { u: queueEntry.parentNamespacePath, v: queueEntry.namespacePath } }

            for type in namespaceTypes
                namespaceProps[type].push operationID: operationID, typesCount: namespaceTypes.length

            request_.digraph.setVertexProperty
                u: queueEntry.namespacePath
                p: namespaceProps

            for subnamespaceName of queueEntry.namespaceDescriptor
                if subnamespaceName.indexOf("____") != 0
                    newQueueEntry =
                        namespaceDescriptor: queueEntry.namespaceDescriptor[subnamespaceName]
                        namespacePath: "#{queueEntry.namespacePath}.#{subnamespaceName}"
                        parentNamespacePath: queueEntry.namespacePath

                    namespaceDescriptorQueue.push newQueueEntry


        break

    if errors.length
        response.error = errors.join " "

    response
