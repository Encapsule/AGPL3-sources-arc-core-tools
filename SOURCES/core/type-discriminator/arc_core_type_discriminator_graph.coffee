

module.exports = buildGraphFromFilterSpec = (request_) ->

    response = error: null, result: null
    errors = []
    inBreakScope = false

    operationID = request_.filter.filterDescriptor.operationID
    
    while not inBreakScope

        inBreakScope = true

        mapQueue = []
        mapQueue.push
            parentVertex: "request"
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
                considerSubnamespaces = (-1 == types.indexOf('jsUndefined'))
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

            for type in types
                vertexId = mapEntry.parentVertex + mapEntry.parentNamespaceName + "(" + type + ")"
                if not request_.graph.isVertex vertexId
                    request_.graph.addVertex u: vertexId, p: { filterSpecPath: mapEntry.path, filters: [ operationID ], color: "white" }
                else
                    vertexProperty = request_.graph.getVertexProperty vertexId
                    vertexProperty.filters.push operationID
                    request_.graph.setVertexProperty { u: vertexId, p: vertexProperty }

                request_.graph.addEdge { e: { u: mapEntry.parentVertex, v: vertexId } }

                if not considerSubnamespaces
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
