
// discriminator2-runtime-model-factory-filter.js

(function() {

    const arccore = {
        filter: require("./arc_core_filter"),
        graph: require("./arc_core_graph")
    };

    const mergedFilterSpecModelDescriptorSpec = require("./discriminator2-merged-model-factory-output-spec");

    const factoryResponse = arccore.filter.create({
        operationID: "sCpSMi4fTOW_Lbl5_GXnPA",
        operationName: "Message Descriminator Runtime Model Factory",
        operationDescription: "This filter generates a directed graph that models essential features of N distinguishable filter request messages in terms of their essential (as in required value of defined type) namespace name/type constraint trees.",

        inputFilterSpec: mergedFilterSpecModelDescriptorSpec,

        outputFilterSpec: { ____opaque: true }, // for now

        bodyFunction: function(request_) {

            let response = { error: null };
            let errors = [];
            let inBreakScope = false;

            while (!inBreakScope) {
                inBreakScope = true;

                const resolvedFilters = {};
                const resolvedNamespaces = {};

                let traverseResponse = arccore.graph.directed.breadthFirstTraverse({
                    digraph: request_.digraph,
                    visitor: {

                        discoverVertex: function(visitorRequest_) {
                            console.log(`discoverVertex: u="${visitorRequest_.u}"`);
                            return true;
                        },

                        examineVertex: function(visitorRequest_) {
                            console.log(`examineVertex: u="${visitorRequest_.u}"`);
                            const filterColorMap = visitorRequest_.g.getVertexProperty(visitorRequest_.u).filterColorMap;
                            for (let filterOperationID_ in filterColorMap) {
                                
                                if ((filterColorMap[filterOperationID_] === "gold") && !resolvedFilters[filterOperationID_]) {
                                    resolvedFilters[filterOperationID_] = visitorRequest_.u;
                                }
                            }
                            return true;
                        },
                    }
                });

                // If the digraph traverse failed...
                if (traverseResponse.error) {
                    errors.push(traverseResponse.error);
                    break;
                }

                // If the digraph traverse succeeded but ended in unexpected search state (status)...
                if (traverseResponse.result.searchStatus !== "completed") {
                    errors.push(`Unexpected depth-first traversal status==="${traverseResponse.result.searchStatus}".`);
                    break;
                }

                // If we didn't resolve all the filters in the original input set...
                if (Object.keys(resolvedFilters).length !== Object.keys(request_.filters).length) {

                    const filterColorMap = request_.digraph.getVertexProperty("~").filterColorMap;
                    const unroutableRequestFilterIDs = [];

                    for (let filterOperationID_ in filterColorMap) {
                        const color = filterColorMap[filterOperationID_];
                        switch (color) {
                        case "gold": // If the request contains a value for this namespace, then the type of the value maps to 1 of N target filters.
                        case "green": // If the request contains a value for this namespace, then the type of the value maps to 1 < M < N target filters.
                            break;
                        default:
                            unroutableRequestFilterIDs.push(filterOperationID_);
                            break;
                        } // end switch
                    } // end for

                    errors.push("Cannot construct new discriminator due to request space namespace name / type constraint overlaps. Issues detected w/the following filter(s):");
                    errors.push(unroutableRequestFilterIDs.map(operationID_ => { return `[${operationID_}::${request_.filters.[operationID_].filterDescriptor.operationName}](${filterColorMap[operationID_]})`; }).join(", "));

                } // end if error condition

                response.result = { ...request_, resolvedFilters };

                break;
            }

            if (errors.length) {
                response.error = errors.join(" ");
            }

            return response;

        } // bodyFunction

    });

    if (factoryResponse.error) {
        throw new Error(factoryResponse.error);
    }

    module.exports = factoryResponse.result;

})();

