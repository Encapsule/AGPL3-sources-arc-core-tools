(function() {
  var Analyzemergedfilterspecvertex, UTILLIB;

  UTILLIB = require('./arc_core_util');

  Analyzemergedfilterspecvertex = module.exports = function(request_) {
    var ambiguousChoicesByFilter, errors, filter_, inBreakScope, outDegree, outEdges, response, unambiguousChoicesByFilter, unambiguousChoicesCount, uprops;
    response = {
      error: null,
      result: null
    };
    errors = [];
    inBreakScope = false;
    while (!inBreakScope) {
      inBreakScope = true;
      uprops = request_.digraph.getVertexProperty(request_.vertex);
      outDegree = request_.digraph.outDegree(request_.vertex);
      unambiguousChoicesByFilter = {};
      ambiguousChoicesByFilter = {};
      if (!outDegree) {
        if (uprops.filters.length === 1) {
          filter_ = uprops.filters[0];
          if (!((unambiguousChoicesByFilter[filter_] != null) && unabiguousChoicesByFilter[filter_])) {
            unambiguousChoicesByFilter[filter_] = {};
          }
          unambiguousChoicesByFilter[filter_][request_.vertex] = true;
          uprops.color = "yellow";
        } else {
          uprops.filters.forEach(function(filter_) {
            if (!((ambiguousChoicesByFilter[filter] != null) && ambiguousChoicesByFilter[filter])) {
              ambiguousChoicesByFilter[filter] = {};
            }
            return ambiguousChoicesByFilter[filter][request_.vertex] = true;
          });
          uprops.color = "black";
        }
      } else {
        outEdges = request_.digraph.outEdges(request_.vertex);
        outEdges.forEach(function(edge_) {
          var results, vprops;
          vprops = request_.digraph.getVertexProperty(edge_.v);
          for (filter_ in vprops.pass1.unambiguousChoicesByFilter) {
            if (!((unambiguousChoicesByFilter[filter_] != null) && unambiguousChoicesByFilter[filter_])) {
              unambiguousChoicesByFilter[filter_] = {};
            }
            unambiguousChoicesByFilter[filter_][request_.vertex] = true;
          }
          results = [];
          for (filter_ in vprops.pass1.ambiguousChoicesByFilter) {
            if (!((ambiguousChoicesByFilter[filter_] != null) && ambiguousChoicesByFilter[filter_])) {
              ambiguousChoicesByFilter[filter_] = {};
            }
            results.push(ambiguousChoicesByFilter[filter_][request_.vertex] = true);
          }
          return results;
        });
        unambiguousChoicesCount = UTILLIB.dictionaryLength(unambiguousChoicesByFilter);
        if (uprops.filters.length === unambiguousChoicesCount) {
          uprops.color = "yellow";
        } else if (unambiguousChoicesCount) {
          uprops.color = "orange";
        } else {
          uprops.color = "black";
        }
      }
      uprops.pass1 = {
        unambiguousChoicesByFilter: unambiguousChoicesByFilter,
        ambiguousChoicesByFilter: ambiguousChoicesByFilter
      };
      request_.digraph.setVertexProperty({
        u: request_.vertex,
        p: uprops
      });
      response.result = uprops;
      break;
    }
    if (errors.length) {
      response.error = errors.join(" ");
    }
    return response;
  };

}).call(this);
