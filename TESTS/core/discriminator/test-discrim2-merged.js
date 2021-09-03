
(function() {


    const testModule = require("./module-under-test");

    const FILTERLIB = testModule("arc_core_filter");

    const testMergedSpecDigraphFactory = require("./runner-merged-spec-digraph-factory");

    const testFilters = {};

    let factoryResponse = FILTERLIB.create({
        operationID: "8-lH2TmrRN6K9y4MptCltA",
        operationName: "String Filter #1",
        operationDescription: "A simple test filter that accepts a string.",
        inputFilterSpec: { ____accept: "jsString" }
    });
    if (factoryResponse.error) { throw new Error(factoryResponse.error); }
    testFilters["string-filter"] = factoryResponse.result;

    factoryResponse = FILTERLIB.create({
        operationID:    "_ksSDL76T06jGU2YQuGsiQ",
        operationName: "Number Filter #1",
        operationDescription: "Test filter that accepts a number.",
        inputFilterSpec: { ____accept: "jsNumber" }
    });
    if (factoryResponse.error) { throw new Error(factoryResponse.error); }
    testFilters["number-filter"] = factoryResponse.result;

    factoryResponse = FILTERLIB.create({
        operationID: "5Lcs0cASRLu0uxLhrPph0w",
        operationName: "Object Filter #1",
        operationDescription: "Test filter that accepts an object.",
        inputFilterSpec: { ____accept: "jsObject" }
    });
    if (factoryResponse.error) { throw new Error(factoryResponse.error); }
    testFilters["object-filter-1"] = factoryResponse.result;

    factoryResponse = FILTERLIB.create({
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
      ,
      ",
      "So4rXktJTr-vj4OVlXyqNA",
    */



    // ----------------------------------------------------------------
    testMergedSpecDigraphFactory({
        testID:  "fXCw0hjBSH2_KvMnjwxBfA",
        testName: "Bad Input Test",
        testDescription: "Provide no testRequest (undefined) value.",
    });





    // ----------------------------------------------------------------
    testMergedSpecDigraphFactory({
        testID: "L6Oao8XSSLepZMb93oPTBg",
        testName: "No Filters",
        testDescription: "Simple test case that specifies no input filters to merge. Tests ability to produce default digraph result.",
        testRequest: {
            id: "L6Oao8XSSLepZMb93oPTBg",
            name: "No Filters",
            description: "Simple test case w/no specified filters to merge whatsover."
            // no filters....
        }
    });




    // ----------------------------------------------------------------
    testMergedSpecDigraphFactory({
        testID: "RkaTLdCrQmW_L-QGW3y4hQ",
        testName: "Single filter, no inputFilterSpec",
        testDescription: "Model single filter w/no inputFilterSpec specified.",
        testRequest: {
            id: "RkaTLdCrQmW_L-QGW3y4hQ",
            name: "Single Filter No Input Spec",
            description: "Process single filter that accepts anything.",
            filters: [
                FILTERLIB.create({
                    operationID: "efRs_oPzR8un89bA4LqawA",
                    // missing input filter spec
                }).result
            ]
        }
    });


    // ----------------------------------------------------------------
    testMergedSpecDigraphFactory({
        testID: "tL2pn187S8WFjYsqpTdOBw",
        testName: "Single filter, opaque inputFilterSpec",
        testDescription: "Model single filter w/explicit opaque inputFilterSpec.",
        testRequest: {
            id: "tL2pn187S8WFjYsqpTdOBw",
            name: "Single Filter No Input Spec",
            description: "Process single filter that accepts anything.",
            filters: [
                FILTERLIB.create({
                    operationID: "Zt9i_3yRQfucaMmBiSbUmw",
                    inputFilterSpec: { ____opaque: true }
                }).result
            ]
        }
    });


    /*


    // ----------------------------------------------------------------
    testMergedSpecDigraphFactory({
        testName: "Base Test Case 2: Single Filter Accept Number",
        validConfig: true,
        request: {
            id: "RkaTLdCrQmW_L-QGW3y4hQ",
            name: "Base #2: Single Filter Accept Number",
            description: "Process single filter that accepts a number.",
            filters: [
                FILTERLIB.create({
                    operationID: "fXCw0hjBSH2_KvMnjwxBfA",
                    inputFilterSpec: { ____accept: "jsNumber" }
                }).result
            ]
        },
        expectedResults: {
            response: {
                error: null,
                result: ''
            }
        }
    });

    // ----------------------------------------------------------------
    testMergedSpecDigraphFactory({
        testName: "Base #3: Single Filter Accept Number",
        validConfig: true,
        request: {
            id: "RkaTLdCrQmW_L-QGW3y4hQ",
            name: "Base #2: Single Filter Accept Number",
            description: "Process single filter that accepts a number.",
            filters: [
                FILTERLIB.create({
                    operationID: "fXCw0hjBSH2_KvMnjwxBfA",
                    inputFilterSpec: { ____accept: [ "jsNumber" ] }
                }).result
            ]
        },
        expectedResults: {
            response: {
                error: null,
                result: ''
            }
        }
    });

    // ----------------------------------------------------------------
    // ----------------------------------------------------------------
    // ----------------------------------------------------------------
    // ----------------------------------------------------------------
    // ----------------------------------------------------------------
    // ----------------------------------------------------------------
    // ----------------------------------------------------------------

    */


})();

