(function() {
  var buildGraphFromFilterSpec;

  module.exports = buildGraphFromFilterSpec = function(request_) {
    var considerSubnamespace, considerSubnamespaces, errors, i, inBreakScope, len, mapEntry, mapQueue, operationID, response, subnamespaceName, type, types, vertexId, vertexProperty;
    response = {
      error: null,
      result: null
    };
    errors = [];
    inBreakScope = false;
    operationID = request_.filter.filterDescriptor.operationID;
    while (!inBreakScope) {
      inBreakScope = true;
      mapQueue = [];
      mapQueue.push({
        parentVertex: "request",
        parentNamespaceName: "",
        path: "request",
        namespaceDescriptor: request_.filter.filterDescriptor.inputFilterSpec
      });
      while (mapQueue.length) {
        mapEntry = mapQueue.shift();
        types = null;
        considerSubnamespaces = true;
        if (!((mapEntry.namespaceDescriptor != null) && mapEntry.namespaceDescriptor)) {
          mapEntry.namespaceDescriptor = {
            ____opaque: true
          };
        }
        if ((mapEntry.namespaceDescriptor.____types != null) && mapEntry.namespaceDescriptor.____types) {
          types = mapEntry.namespaceDescriptor.____types;
          if (Object.prototype.toString.call(types) === '[object String]') {
            types = [types];
          }
          considerSubnamespaces = -1 === types.indexOf('jsUndefined');
        } else {
          if ((mapEntry.namespaceDescriptor.____accept != null) && mapEntry.namespaceDescriptor.____accept) {
            types = mapEntry.namespaceDescriptor.____accept;
            if (Object.prototype.toString.call(types) === '[object String]') {
              types = [types];
            }
            considerSubnamespaces = false;
          } else {
            if ((mapEntry.namespaceDescriptor.____opaque != null) && mapEntry.namespaceDescriptor.____opaque) {
              types = ['jsUndefined', 'jsNull', 'jsBoolean', 'jsNumber', 'jsObject', 'jsFunction', 'jsString', 'jsArray'];
              considerSubnamespace = false;
            }
          }
        }
        for (i = 0, len = types.length; i < len; i++) {
          type = types[i];
          vertexId = mapEntry.parentVertex + mapEntry.parentNamespaceName + "(" + type + ")";
          if (!request_.graph.isVertex(vertexId)) {
            request_.graph.addVertex({
              u: vertexId,
              p: {
                filterSpecPath: mapEntry.path,
                filters: [operationID],
                color: "white"
              }
            });
          } else {
            vertexProperty = request_.graph.getVertexProperty(vertexId);
            vertexProperty.filters.push(operationID);
            request_.graph.setVertexProperty({
              u: vertexId,
              p: vertexProperty
            });
          }
          request_.graph.addEdge({
            e: {
              u: mapEntry.parentVertex,
              v: vertexId
            }
          });
          if (!considerSubnamespaces) {
            continue;
          }
          for (subnamespaceName in mapEntry.namespaceDescriptor) {
            if (subnamespaceName.indexOf('____') !== 0) {
              mapQueue.push({
                parentVertex: vertexId,
                parentNamespaceName: "." + subnamespaceName,
                path: mapEntry.path + "." + subnamespaceName,
                namespaceDescriptor: mapEntry.namespaceDescriptor[subnamespaceName]
              });
            }
          }
        }
      }
    }
    return response;
  };

}).call(this);
