(function() {
  var FILTERLIB, GRAPHLIB, UTILLIB, addFilterSpecToMergedDigraphModel, buildMergedFilterSpecDigraphModel, rootVertex;

  UTILLIB = require('./arc_core_util');

  FILTERLIB = require('./arc_core_filter');

  GRAPHLIB = require('./arc_core_graph');

  rootVertex = "request";

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
      // Initialize the result.
      result = {
        digraph: null,
        filterTable: {}
      };
      // Create am empty digraph model.
      innerResponse = GRAPHLIB.directed.create({
        name: "Discriminator Decission Tree Model"
      });
      if (innerResponse.error) {
        errors.unshift(innerResponse.error);
        break;
      }
      result.digraph = innerResponse.result;
      // Add a vertex that models the root of the disriminator decisssion tree.
      result.digraph.addVertex({
        u: rootVertex,
        p: {
          color: "white"
        }
      });
      // Process each filter in the request array.
      filters = [];
      for (i = 0, len = request_.length; i < len; i++) {
        filter = request_[i];
        // Add this filter's input specification to discriminator's decission tree graph.
        innerResponse = addFilterSpecToMergedDigraphModel({
          graph: result.digraph,
          filter: filter
        });
        if (innerResponse.error) {
          errors.unshift(innerResponse.error);
          break;
        }
        result.filterTable[filter.filterDescriptor.operationID] = filter;
        filters.push(filter.filterDescriptor.operationID);
      }
      if (errors.length) {
        errors.unshift("Unable to build merged filter specification digraph model.");
        break;
      }
      // Indicate that the discrimintor vertex must resolve all filters in the request array.
      uprops = result.digraph.getVertexProperty(rootVertex);
      uprops.filters = filters;
      result.digraph.setVertexProperty({
        u: rootVertex,
        p: uprops
      });
      result.digraph.setGraphDescription("Models the combined input filter specifications of Filter ID's: [" + filters.join(", ") + "].");
      // Assign the result.
      response.result = result;
      break;
    }
    if (errors.length) {
      response.error = errors.join(" ");
    }
    return response;
  };

  // request = { filter: object, digraph: object }
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
        parentVertex: rootVertex,
        parentNamespaceName: "",
        path: "request",
        namespaceDescriptor: request_.filter.filterDescriptor.inputFilterSpec
      });
      while (mapQueue.length) {
        mapEntry = mapQueue.shift();
        types = null;
        considerSubnamespaces = true;
        // Default filters that specify no input specification.
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
        if ((mapEntry.namespaceDescriptor.____defaultValue != null) && mapEntry.namespaceDescriptor.____defaultValue) {
          types.push('jsUndefined');
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
                color: "white",
                typeConstraint: type
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
          if ((!considerSubnamespaces) || (type === 'jsUndefined') || (type === 'jsArray')) {
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
    // end for type

    // end while

    // end while
    return response;
  };

}).call(this);
