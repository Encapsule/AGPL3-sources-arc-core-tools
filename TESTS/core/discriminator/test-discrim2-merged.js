
(function() {


    const arccoreModuleResolver = require("./module-under-test");

    const arccoreFilter = arccoreModuleResolver("arc_core_filter");

    const testMergedSpecDigraphFactory = require("./runner-merged-spec-digraph-factory");

    const testFilters = {};

    let factoryResponse = arccoreFilter.create({
        operationID: "8-lH2TmrRN6K9y4MptCltA",
        operationName: "String Filter #1",
        operationDescription: "A simple test filter that accepts a string.",
        inputFilterSpec: { ____accept: "jsString" }
    });
    if (factoryResponse.error) { throw new Error(factoryResponse.error); }
    testFilters["string-filter-1"] = factoryResponse.result;

    factoryResponse = arccoreFilter.create({
        operationID:    "_ksSDL76T06jGU2YQuGsiQ",
        operationName: "Number Filter #1",
        operationDescription: "Test filter that accepts a number.",
        inputFilterSpec: { ____accept: "jsNumber" }
    });
    if (factoryResponse.error) { throw new Error(factoryResponse.error); }
    testFilters["number-filter-1"] = factoryResponse.result;


    factoryResponse = arccoreFilter.create({
        operationID:    "_ksSDL76T06jGU2YQuGsiQ",
        operationName: "Number Filter #1",
        operationDescription: "Test filter that accepts a number.",
        inputFilterSpec: { ____accept: "jsNumber" }
    });
    if (factoryResponse.error) { throw new Error(factoryResponse.error); }
    testFilters["number-filter-1"] = factoryResponse.result;


    factoryResponse = arccoreFilter.create({
        operationID: "5Lcs0cASRLu0uxLhrPph0w",
        operationName: "Object Filter #1",
        operationDescription: "Test filter that accepts an object.",
        inputFilterSpec: { ____accept: "jsObject" }
    });
    if (factoryResponse.error) { throw new Error(factoryResponse.error); }
    testFilters["object-filter-1"] = factoryResponse.result;

    factoryResponse = arccoreFilter.create({
        operationID: "p2QlQg90R9SHI3-_izPvgw",
        operationName: "Object Filter #2",
        operationDescription: "Test filter that accepts an object w/named properties.",
        inputFilterSpec: {
            ____types: "jsObject",
            propertyA: { ____accept: "jsString" },
            propertyB: { ____accept: "jsNumber" },
        }
    });
    if (factoryResponse.error) { throw new Error(factoryResponse.error); }
    testFilters["object-filter-2"] = factoryResponse.result;

    /*
      "RkaTLdCrQmW_L-QGW3y4hQ",
      "fXCw0hjBSH2_KvMnjwxBfA",
      "efRs_oPzR8un89bA4LqawA",
      "tL2pn187S8WFjYsqpTdOBw",
      "So4rXktJTr-vj4OVlXyqNA",
    */



    testMergedSpecDigraphFactory({
        testName: "Preliminary Test #1",
        validConfig: true,
        request: {
            filters: [
                testFilters["string-filter-1"]
            ]
        },
        expectedResults: {
            response: {
                error: null,
                result: {}
            }
        }
    });


})();

