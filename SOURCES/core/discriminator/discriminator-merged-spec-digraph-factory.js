
// disciminator-merged-spec-digraph-factory.js

(function() {

    const arccore = {
        filter: require("./arc_core_filter"),
        graph: require("./arc_core_graph")
    };

    const factoryResponse = arccore.filter.create({

        operationID: "7WtZ3CGLROGWSEDeA-jU6Q",
        operationName: "Merged Filter Spec Digraph Factory",
        operationDescription: "Accepts an array of @encapsule/arccore.filter objects and returns a digraph-encoded model that represents their merged input filter specifications.",
        inputFilterSpec:  require("./discriminator2-merged-spec-model-factory-input-spec"),
        outputFilterSpec: require("./discriminator2-merged-spec-model-factory-output-spec"),

        bodyFunction: function(request_) {

            let response = { error: null, result: { digraph: null, filters: {} } };
            let errors = [];
            let inBreakScope = false;

            while (!inBreakScope) {
                inBreakScope = true;

                // Instantiate a new DirectedGraph class instance that models all the namespace(s) defined by all the filter(s).
                let factoryResponse = arccore.graph.directed.create({
                    name: `[${request_.id}::${request_.name}] Merged Filter Spec Digraph Model`,
                    description: `Digraph model of ${request_.filters.length} filter object input specs merged together for analysis.`,
                });

                if (factoryResponse.error) {
                    errors.push(factoryResponse.error);
                    break;
                }

                response.result.digraph = factoryResponse.result;

                // Caller specifies a set w/length >= 0 of filter(s) each of which is intended to process
                // request message(s) of a specific data type defined by its input filter specification.

                for (let index_ in request_.filters) {

                    // Dereference the next filter...
                    const filter = request_.filters[index_];

                    if (!filter.request || !filter.filterDescriptor) {
                        errors.push(`Value specified for filters[${index_}] does not appear to be a filter object as expected?`);
                        break;
                    }

                    // Reject iff duplicate operation ID...
                    if (response.result.filters[filter.filterDescriptor.operationID]) {
                        errors.push(`Illegal duplicate filter.filterDescriptor.operationID="${filter.filterDescriptor.operationID}" discovered in input request array.`);
                        break;
                    }

                    const nsWorkQueue = [ { parentRefPath: null, specRefPath: "~", specRef: filter.filterDescriptor.inputFilterSpec } ];

                    while (nsWorkQueue.length) {

                        const nsWorkItem = nsWorkQueue.shift();

                        const nsWorkItemFeatures = {
                            typeConstraints: [],
                            processSubnamespaces: false,
                            asMap: false,
                            isOpaque: false,
                            isOptional: false,
                            isDefaulted: false
                        };

                        nsWorkItemFeatures.isOpaque = ((nsWorkItem.specRef === undefined) || (nsWorkItem.specRef.____opaque === true))?true:false;

                        if (!nsWorkItemFeatures.isOpaque) {

                            nsWorkItemFeatures.asMap = nsWorkItem.specRef.____asMap?true:false;

                            if (nsWorkItem.specRef.____types) {

                                nsWorkItemFeatures.typeConstraints = Array.isArray(nsWorkItem.specRef.____types)?nsWorkItem.specRef.____types:[nsWorkItem.specRef.____types];
                                nsWorkItemFeatures.processSubnamespaces = true;

                            } else {

                                if (nsWorkItem.specRef.____accept) {
                                    nsWorkItemFeatures.typeConstraints = Array.isArray(nsWorkItem.specRef.____accept)?nsWorkItem.specRef.____accept:[nsWorkItem.specRef.____accept];
                                }

                            }

                            if (!nsWorkItemFeatures.typeConstraints.length) {
                                errors.push("Cannot resolve types/accept constraints?");
                                break;
                            }

                            nsWorkItemFeatures.isOptional = (nsWorkItemFeatures.typeConstraints.indexOf("jsUndefined") > -1)?true:false;
                            nsWorkItemFeatures.isDefaulted = (nsWorkItem.specRef.____defaultValue !== undefined)?true:false;

                        }

                        if (!response.result.digraph.isVertex(nsWorkItem.specRefPath)) {

                            factoryResponse = arccore.graph.directed.create({
                                name: `[${request_.id}::${request_.name}](${nsWorkItem.specRefPath})`,
                                description: `Digraph model of type constraint(s) declared by filter(s) for merged request namespace '${nsWorkItem.specRefPath}'.`,
                                vlist: [
                                    { u: "FILTERS" },
                                    { u: "isOpaque" },
                                    { u: "isDefaulted" },
                                    { u: "jsFunction" },
                                    { u: "jsDescriptorObject" }, // jsObject
                                    { u: "jsMapObject" }, // jsObject
                                    { u: "jsArray" },
                                    { u: "jsNumber" },
                                    { u: "jsNull" },
                                    { u: "jsUndefined" },
                                    { u: "jsBoolean" },
                                    { u: "jsString" }
                                ]
                            });

                            if (factoryResponse.error) {
                                errors.push(factoryResponse.error);
                                break;
                            }

                            const nsTypeScoreboardDigraph = factoryResponse.result;
                            response.result.digraph.addVertex({ u: nsWorkItem.specRefPath, p: nsTypeScoreboardDigraph });
                        }

                        let nsTypeScoreboardDigraph = response.result.digraph.getVertexProperty(nsWorkItem.specRefPath);

                        nsTypeScoreboardDigraph.addEdge({ e: { u: "FILTERS", v: filter.filterDescriptor.operationID } });

                        if (nsWorkItemFeatures.isOpaque) {

                            nsTypeScoreboardDigraph.addEdge({ e: { u: filter.filterDescriptor.operationID, v: "isOpaque" } });

                        } else {

                            nsWorkItemFeatures.typeConstraints.forEach(typeConstraint_ => {
                                if ("jsObject" === typeConstraint_) {
                                    nsTypeScoreboardDigraph.addEdge({ e: { u: filter.filterDescriptor.operationID, v: nsWorkItemFeatures.asMap?"jsMapObject":"jsDescriptorObject" } });
                                } else {
                                    nsTypeScoreboardDigraph.addEdge({ e: { u: filter.filterDescriptor.operationID, v: typeConstraint_ } });
                                }
                            });

                            if (nsWorkItemFeatures.isDefaulted) {
                                nsTypeScoreboardDigraph.addEdge({ e: { u: filter.filterDescriptor.operationID, v: "isDefaulted" } });
                            }

                        }

                        // Tree edge create...
                        if (nsWorkItem.parentRefPath !== null) {
                            response.result.digraph.addEdge({ e: { u: nsWorkItem.parentRefPath, v: nsWorkItem.specRefPath } });
                        }

                        if (nsWorkItemFeatures.processSubnamespaces) {
                            for (let key_ in nsWorkItem.specRef) {
                                // TODO: There are corner cases associated w/this simple implementation. e.g. user subnames that begins in five underscores would be misclassified and skipped entirely...
                                if (!key_.startsWith("____")) {
                                    nsWorkQueue.push({ parentRefPath: nsWorkItem.specRefPath, specRefPath: `${nsWorkItem.specRefPath}.${key_}`, specRef: nsWorkItem.specRef[key_] });
                                }
                            }
                        }

                    } // while nsWorkQueue.length

                    if (errors.length) {
                        break;
                    }

                    // Cache the caller-specified filter in the response.result.filters map.
                    response.result.filters[filter.filterDescriptor.operationID] = filter;

                } // for each filter in the caller-specified set

                if (errors.length) {
                    break;
                }

                response.result.id = request_.id;
                response.result.name = request_.name;
                response.result.description = request_.description;

                break;

            } // while !inBreakScope

            if (errors.length) {
                response.error = errors.join(" ");
            }

            return response;

        } // bodyFunction

    }); // merged filter spec digraph factory filter create

    if (factoryResponse.error) {
        throw new Error(factoryResponse.error);
    }

    module.exports = factoryResponse.result; // an @encapsule/arccore filter object.

})();

