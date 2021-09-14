
// disciminator-merged-spec-digraph-factory.js

(function() {

    const arccoreFilterFactory = require("./arc_core_filter_create");
    const arccoreGraph = require("./arc_core_graph");

    const factoryResponse = arccoreFilterFactory({

        operationID: "7WtZ3CGLROGWSEDeA-jU6Q",
        operationName: "Merged Filter Spec Digraph Factory",
        operationDescription: "Accepts an array of @encapsule/arccore.filter objects and returns a digraph-encoded model that represents their merged input filter specifications.",

        inputFilterSpec: {
            ____label: "Merged Filter Spec Digraph Factory Request",
            ____types: "jsObject",
            id: {
                ____label: "Discriminator Identifier",
                ____description: "A 22-character IRUT identifier that the newly created @encapsule/arccore.discriminator filter will use as its operationID.",
                ____accept: "jsString"
            },
            name: {
                ____label: "Discriminator Name",
                ____accept: "jsString"
            },
            description: {
                ____label: "Discrminator Description",
                ____accept: "jsString"
            },
            filters: {
                ____types: "jsArray",
                ____defaultValue: [],
                filter: {
                    ____accept: "jsObject" // @encapsule/arccore.filter object
                }
            }
        },

        outputFilterSpec: {
            ____label: "Merged Filter Spec Digraph Model",
            ____types: "jsObject",

            digraph: {
                ____accept: "jsObject"
            },
            filters: {
                ____types: "jsObject",
                ____asMap: true,
                filter: {
                    ____accept: "jsObject" // @encapsule/arccore.filter object
                }
            }
        },

        bodyFunction: function(request_) {

            let response = { error: null, result: { digraph: null, filters: {} } };
            let errors = [];
            let inBreakScope = false;

            while (!inBreakScope) {
                inBreakScope = true;

                // Instantiate a new DirectedGraph class instance.
                let factoryResponse = arccoreGraph.directed.create({
                    name: request_.name,
                    description: request_.description
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
                            response.result.digraph.addVertex({
                                u: nsWorkItem.specRefPath,
                                p: {
                                    isOpaque: [],    // Declared as literally anything (including jsUndefined value). So, of no interest to discriminator algorithm.
                                    isDefaulted: [], // Declared w/default value that is applied by filter library if the caller does not provide a value (i.e. specifies an undefined value w/type moniker jsUndefined)
                                    jsFunction: [],  // Function
                                    jsObjectD: [],   // Object used as a descriptor
                                    jsObjectM: [],   // Object used as a map
                                    jsArray: [],     // Array
                                    jsNumber: [],    // Number
                                    jsNull: [],      // Null
                                    jsUndefined: [], // Undefined
                                    jsBoolean: [],   // Boolean
                                    jsString: [],    // String
                                }
                            });
                        }

                        let nsProperty = response.result.digraph.getVertexProperty(nsWorkItem.specRefPath);

                        if (nsWorkItemFeatures.isOpaque) {
                            nsProperty.isOpaque.push(filter.filterDescriptor.operationID);
                        } else {
                            nsWorkItemFeatures.typeConstraints.forEach(typeConstraint_ => {
                                if ("jsObject" === typeConstraint_) {
                                    nsProperty[nsWorkItemFeatures.asMap?"jsObjectM":"jsObjectD"].push(filter.filterDescriptor.operationID);
                                } else {
                                    nsProperty[typeConstraint_].push(filter.filterDescriptor.operationID);
                                }
                            });
                            if (nsWorkItemFeatures.isDefaulted) {
                                nsProperty.isDefaulted.push(filter.filterDescriptor.operationID);
                            }
                        }

                        // Set the vertex property.
                        response.result.digraph.setVertexProperty({ u: nsWorkItem.specRefRef, p: nsProperty });

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

                    // Cache the caller-specified filter in the response.result.filters map.
                    response.result.filters[filter.filterDescriptor.operationID] = filter;

                } // for each filter in the caller-specified set

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

