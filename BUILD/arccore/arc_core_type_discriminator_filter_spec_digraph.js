(function() {
  var FILTERLIB, GRAPHLIB, UTILLIB, addFilterSpecToMergedDigraphModel, buildMergedFilterSpecDigraphModel, deduceBreadthFirstOrder;

  UTILLIB = require('./arc_core_util');

  FILTERLIB = require('./arc_core_filter');

  GRAPHLIB = require('./arc_core_graph');

  buildMergedFilterSpecDigraphModel = module.exports = function(request_) {
    var errors, filter, filters, i, inBreakScope, innerResponse, len, response, result, uprops;
    response = {
      error: null,
      result: null
    };
    errors = [];
    inBreakScope = false;
    while (!inBreakScope) {
      inBreakScope = true;
      result = {};
      innerResponse = GRAPHLIB.directed.create({
        name: "Merged Filter Spec Input Model",
        description: "Tree of name/type constraints formed by merging N input filter specifications."
      });
      if (innerResponse.error) {
        errors.unshift(innerResponse.error);
        break;
      }
      result.digraph = innerResponse.result;
      result.digraph.addVertex({
        u: "request",
        p: {
          color: "white"
        }
      });
      result.filterTable = {};
      filters = [];
      for (i = 0, len = request_.length; i < len; i++) {
        filter = request_[i];
        innerResponse = addFilterSpecToMergedDigraphModel({
          graph: result.digraph,
          filter: filter
        });
        if (innerResponse.error) {
          errors.unshift(innerResponse.error);
          break;
        }
        result.filterTable[filter.filterDescriptor.operationID] = {};
        filters.push(filter.filterDescriptor.operationID);
      }
      if (errors.length) {
        errors.unshift("Unable to build merged filter specification digraph model.");
        break;
      }
      uprops = result.digraph.getVertexProperty("request");
      uprops.filters = filters;
      result.digraph.setVertexProperty({
        u: "request",
        p: uprops
      });
      innerResponse = deduceBreadthFirstOrder(result.digraph);
      if (innerResponse.error) {
        errors.unshift(innerResponse.error);
        break;
      }
      result.order = innerResponse.result;
      response.result = result;
      break;
    }
    if (errors.length) {
      response.error = errors.join(" ");
    }
    return response;
  };

  deduceBreadthFirstOrder = function(digraph_) {
    var bfsResponse, bfsVertices, errors, inBreakScope, index, rbfsVertices, response;
    response = {
      error: null,
      result: null
    };
    errors = [];
    inBreakScope = false;
    while (!inBreakScope) {
      inBreakScope = true;
      bfsVertices = [];
      rbfsVertices = [];
      bfsResponse = GRAPHLIB.directed.breadthFirstTraverse({
        digraph: digraph_,
        visitor: {
          discoverVertex: function(grequest_) {
            bfsVertices.push(grequest_.u);
            return true;
          }
        }
      });
      if (bfsResponse.error) {
        errors.unshift(bfsResponse.error);
        errors.unshift("Error during BFS of merged filter specification graph.");
        break;
      }
      if (!bfsResponse.result.searchStatus === "completed") {
        errors.unshift("BFS of merged filter specification graph did not complete as expected.");
        break;
      }
      if (UTILLIB.dictionaryLength(bfsResponse.result.undiscoveredMap)) {
        errors.unshift("BFS of merged filter specification graph did not discover all vertices?");
        break;
      }
      index = 0;
      while (index < bfsVertices.length) {
        rbfsVertices[index] = bfsVertices[bfsVertices.length - index - 1];
        index++;
      }
      response.result = {
        bfsVertices: bfsVertices,
        rbfsVertices: rbfsVertices
      };
      break;
    }
    if (errors.length) {
      response.error = errors.join(" ");
    }
    return response;
  };

  addFilterSpecToMergedDigraphModel = function(request_) {
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
