
(function() {


    const testModule = require("./module-under-test");

    const FILTERLIB = testModule("arc_core_filter");

    const testMergedSpecDigraphFactory = require("./runner-merged-spec-digraph-factory");

    const testEssentialFeaturesFactory = require("./runner-discrim2-essential");



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
            name: "test",
            description: "test",
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

    // ----------------------------------------------------------------
    testMergedSpecDigraphFactory({
        testID: "1anTb9dNR5u0PI6KsaMsUg",
        testName: "Single filter, accept number case 1",
        testDescrpition: "Model single filter that accepts a number (case 1).",
        testRequest: {
            id: "1anTb9dNR5u0PI6KsaMsUg",
            name: "test",
            description: "test",
            filters: [
                FILTERLIB.create({
                    operationID: "cQxrFzvmTcigJg9tFvJJIw",
                    inputFilterSpec: { ____accept: "jsNumber" }
                }).result
            ]
        }
    });

    // ----------------------------------------------------------------
    testMergedSpecDigraphFactory({
        testID: "KIxKI8ZoQhSleY-dIBn8dw",
        testName: "Single filter, accept number case 2",
        testDescription: "Model single filter that accepts a number (case 2).",
        testRequest: {
            id: "KIxKI8ZoQhSleY-dIBn8dw",
            name: "test",
            description: "test",
            filters: [
                FILTERLIB.create({
                    operationID: "3vf-aoHOQkKkKuXZGtfhHg",
                    inputFilterSpec: { ____accept: [ "jsNumber" ] }
                }).result
            ]
        }
    });

    // ----------------------------------------------------------------
    testMergedSpecDigraphFactory({
        testID: "3f2jUso8TfeAQ708tTEoCw",
        testName: "Single filter, type number case 1",
        testDescription: "Model single filter of type number (case 1).",
        testRequest: {
            id: "3f2jUso8TfeAQ708tTEoCw",
            name: "test",
            description: "test",
            filters: [
                FILTERLIB.create({
                    operationID: "IlB1RIIzRqe_IDfS0uhLUQ",
                    inputFilterSpec: { ____types: "jsNumber" }
                }).result
            ]
        }
    });

    // ----------------------------------------------------------------
    testMergedSpecDigraphFactory({
        testID:  "Gx68stlNQ3W4vSmCXSXpzA",
        testName: "Single filter, type number case 2",
        testDescription: "Model single filter of type number (case 2).",
        testRequest: {
            id:  "Gx68stlNQ3W4vSmCXSXpzA",
            name: "test",
            description: "test",
            filters: [
                FILTERLIB.create({
                    operationID: "WR-jLmIRRFWaoU_QXYGmJA",
                    inputFilterSpec: { ____types: [ "jsNumber" ] }
                }).result
            ]
        }
    });

    // ----------------------------------------------------------------
    testMergedSpecDigraphFactory({
        testID: "fN09WZOySqiUyIXaoeX0PQ",
        testName: "Single Filter Accept Optional Number",
        testDescription: "Model single filter that accepts an optional numerical value.",
        testRequest: {
            id: "fN09WZOySqiUyIXaoeX0PQ",
            name: "test",
            description: "test",
            filters: [
                FILTERLIB.create({
                    operationID: "nwZEHl7YR2eVb2ZMwo8sYA",
                    inputFilterSpec: {
                        ____accept: [ "jsUndefined", "jsNumber" ]
                    }
                }).result
            ]
        }
    });

    // ----------------------------------------------------------------
    testMergedSpecDigraphFactory({
        testID: "B3gIdEzMRBCD_hOPEkJ-Ig",
        testName: "Single Filter Accept Number w/Default Value",
        testDescription: "Model single filter that accepts a numerical value and that specifies a default value.",
        testRequest: {
            id:  "B3gIdEzMRBCD_hOPEkJ-Ig",
            name: "test",
            description: "test",
            filters: [
                FILTERLIB.create({
                    operationID: "EubAX3InS6eKy5Ck5n2n-w",
                    inputFilterSpec: {
                        ____accept: "jsNumber",
                        ____defaultValue: 666
                    }
                }).result
            ]
        }
    });


    // ----------------------------------------------------------------

    testMergedSpecDigraphFactory({
        testID: "GUoh4cgSRrG-_R4GFM1Wlg",
        testName: "Single Filter, Descriptor Object Case #1",
        testDescription: "Verify behavior if inputFilterSpec accepts a descriptor object.",
        testRequest: {
            id: "GUoh4cgSRrG-_R4GFM1Wlg",
            name: "test", description: "test",
            filters: [
                FILTERLIB.create({
                    operationID: "BvJ5Oh_7RB-NoGacsBxeCw",
                    inputFilterSpec: {
                        ____types: "jsObject",
                        propertyA: {
                            ____accept: "jsNumber"
                        }
                    }
                }).result
            ]
        }
    });

    testMergedSpecDigraphFactory({
        testID: "lbSUE3jSRt-ftj3NkzlbgA",
        testName: "Single Filter, Map Object Case #1",
        testDescription: "Verify behavior if inputFilterSpec accepts a map object.",
        testRequest: {
            id: "lbSUE3jSRt-ftj3NkzlbgA",
            name: "test", description: "test",
            filters: [
                FILTERLIB.create({
                    operationID: "aMn6M3hwReSs4iAKlOdGEw",
                    inputFilterSpec: {
                        ____types: "jsObject",
                        ____asMap: true,
                        propertyA: {
                            ____accept: "jsNumber"
                        }
                    }
                }).result
            ]
        }
    });

    testMergedSpecDigraphFactory({
        testID: "S4B_hMO0S7iWB_NNZNgM2A",
        testName: "Single Filter, Array Case #1",
        testDescription: "Verify behavior if inputFilterSpec accepts an array.",
        testRequest: {
            id:  "S4B_hMO0S7iWB_NNZNgM2A",
            name: "test", description: "test",
        }
    });

    // ----------------------------------------------------------------
    testMergedSpecDigraphFactory({
        testID: "ePs7cIfeS2WyEnqZ4wJ1Jg",
        testName: "Single filter, variant type case 1",
        testDescription: "Verify behavior if inputFilterSpec accepts a number of different POD types (case 1).",
        testRequest: {
            id: "ePs7cIfeS2WyEnqZ4wJ1Jg",
            name: "test",
            description: "test",
            filters: [
                FILTERLIB.create({
                    operationID: "ZI5UERDRR6-6Oj8yhJOkng",
                    inputFilterSpec: {
                        ____accept: [ "jsFunction", "jsObject", "jsArray", "jsNull", "jsNumber", "jsUndefined", "jsBoolean", "jsString" ]
                    }
                }).result
            ]
        }
    });

    // ----------------------------------------------------------------
    testMergedSpecDigraphFactory({
        testID: "U-Nyd-SJQOWnisOM5LClDw",
        testName: "Single filter, object w/property case 1",
        testDescription: "Verify behavior if inputFilterSpec is an object type w/a single property (case 1).",
        testRequest: {
            id: "U-Nyd-SJQOWnisOM5LClDw",
            name: "test",
            description: "test",
            filters: [
                FILTERLIB.create({
                    operationID: "ewj-Hb3fRFqkd5G3liTs6A",
                    inputFilterSpec: {
                        ____types: "jsObject",
                        someProperty: {
                            ____accept: "jsString"
                        }
                    }
                }).result
            ]
        }
    });

    // ----------------------------------------------------------------
    testMergedSpecDigraphFactory({
        testID: "5INQ3snpQO2ru2_eAP5JvQ",
        testName: "Single filter, object w/properties case 2",
        testDescription: "Verify behavior if inputFilterSpec is an object w/a mix of different property types (case 2).",
        testRequest: {
            id: "5INQ3snpQO2ru2_eAP5JvQ",
            name: "test",
            description: "test",
            filters: [

                // This produces a rather convoluted snarl (which is the point).

                FILTERLIB.create({
                    operationID: "EpxfUsN0SK2-l7Il-vmpEg",
                    inputFilterSpec: {
                        ____label: "Descriptor Object",
                        ____description: "A descriptor object is an object w/some or another predefined key(s) type(s).",
                        ____types: "jsObject",
                        key: {
                            ____label: "Descriptor Object 'key' Property Value",
                            ____accept: "jsString"
                        }
                    }
                }).result,

                FILTERLIB.create({
                    operationID: "Z9UF5obhT4ipV4qrBD08-Q",
                    inputFilterSpec: {
                        ____label: "Map Object",
                        ____description: "A map object is an object used to associate (i.e. map) string key(s) to element value(s) of some type or another.",
                        ____types: "jsObject",
                        ____asMap: true,
                        key: { // 'key' is considered a placeholder for any string value in the set Object.keys(mapObject).
                            ____label: "Map Object Element Value",
                            ____accept: "jsString"
                        }
                    }
                }).result,

                FILTERLIB.create({
                    operationID:  "jrjKFxslQsuNwGKcppgM1w",
                    inputFilterSpec: {
                        ____label: "Array",
                        ____description: "An array of string elements.",
                        ____types: "jsArray",
                        key: { // 'key' is considered a placeholder for any numerical index value in range [0, array.length)
                            ____label: "Array Element Value",
                            ____accept: "jsString"
                        }
                    }
                }).result
            ]
        }
    });


    testEssentialFeaturesFactory({
        testID: "P6WYyQZVRfWNV0ejqwVqAg",
        testName: "Single Filter Accepts Number",
        testDescriptor: "Confirm and verify the behavior of a single filter that accepts a number.",
        testRequest: {
            id: "P6WYyQZVRfWNV0ejqwVqAg",
            name: "test",
            description: "test",
            filters: [
                FILTERLIB.create({
                    operationID: "W9WYUw7BTe-pi3Ru-aBOJA",
                    inputFilterSpec: {
                        ____accept: "jsNumber"
                    }
                }).result
            ]
        }
    });

    /*

    "25u5isQMQTi-QZLTfYGE6g",
    "IsgdMX1JSbCfM1hKC4ihqw",
    "8wmrrwcwQFWDNF-7Ewodyg",
    "Gwb62JopQ-yyv2M3-I93zA",
    "1jAImxyKTmuMt7n41l9vCA",
    "bHxrmMCCT6ee1g8nrIbjew",
    "fz8Q1VBKR_6JnivwZIpajw",
    "ODWX3q14Sz6qt4kovZ9hIA",
    "f0HSLypGQwyk7V5yHhSl6A",
    "T7GtadaYRmS1Z61TUHusRw",
    "PLRxNhGgSLOx-z11ADIWig",
    "2gIbCJgsTwOlcxPOsJWlUg",
    "lU7ADA3fRt2JeON5kps2dg",
    "H57pO7KeQN2sfkM4_VBHrQ",
    "_DBLZ5qJRp-PMbK5s3U9VA",
    "19FUsLSZS-O2O0R_hrcVlg",
    "F25HZdSmSCKeOohZjoDhVQ",
    "kia65IIrRS2yMWf-Tt-JWw",
    "NJXYuUyJRHC29b8awio2ZQ",
    "XFKjKT1bSpusp-fymXI-wQ",
    "q-nsxDYiRrK8kp51Oqp8Gw",
    "pdVxHUjiSgGC_OTsmGXRfA",
    "vry01huPSIWMTJDGzQfaZA"

    // ----------------------------------------------------------------
    // ----------------------------------------------------------------
    // ----------------------------------------------------------------
    // ----------------------------------------------------------------
    // ----------------------------------------------------------------
    // ----------------------------------------------------------------
    // ----------------------------------------------------------------

    */


})();

