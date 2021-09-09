
(function() {


    const testModule = require("./module-under-test");

    const FILTERLIB = testModule("arc_core_filter");

    const testMergedSpecDigraphFactory = require("./runner-merged-spec-digraph-factory");



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


    /*

    "5INQ3snpQO2ru2_eAP5JvQ",
    "EpxfUsN0SK2-l7Il-vmpEg",
    "Z9UF5obhT4ipV4qrBD08-Q",
    "jrjKFxslQsuNwGKcppgM1w",
    "GUoh4cgSRrG-_R4GFM1Wlg",
    "lbSUE3jSRt-ftj3NkzlbgA",
    "S4B_hMO0S7iWB_NNZNgM2A",
    "BvJ5Oh_7RB-NoGacsBxeCw",
    "aMn6M3hwReSs4iAKlOdGEw"


    // ----------------------------------------------------------------
    // ----------------------------------------------------------------
    // ----------------------------------------------------------------
    // ----------------------------------------------------------------
    // ----------------------------------------------------------------
    // ----------------------------------------------------------------
    // ----------------------------------------------------------------

    */


})();

