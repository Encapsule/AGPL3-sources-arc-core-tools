// test-use-case-dtfg-verify-type-maps.js

var testCreateFilter = require('./runner-filter-create');

// input / output type maps are identical data structures and are
// parsed by a common code path. The test case above provide coverage
// for the shared inner code path that implements the parse. The
// variants just test the outer dispatch path into the parser (largely
// redundant but significant because we want nice errors for devs.

testCreateFilter({
    testName: "Type map: output map wrong type.",
    validConfig: false,
    request: {
        operationID: 'VWc08q1GQYyl4yJqC2Jg_Q',
        operationName: "Test Operation",
        operationDescription: "This is a description of the test operation.",
        inputName: "Test Inputs",
        inputDescription: "This is a description of the test inputs.",
        outputName: "Test Outputs",
        outputDescription: "This is a description of the test outputs.",
        outputFilterSpec: [],
        bodyFunction: function() {}
    },
    expectedResults: {
        error: 'Filter factory failure: Invalid data type specified for property \'~.outputFilterSpec\'. Value of type \'jsArray\' not in allowed type set [jsUndefined,jsObject].'
    }
});

// FULL COVERAGE OF THE SHARED CORE ALGORITHM

testCreateFilter({
    testName: "Type map: empty output map object.",
    validConfig: false,
    request: {
        operationID: 'VWc08q1GQYyl4yJqC2Jg_Q',
        operationName: "Test Operation",
        operationDescription: "This is a description of the test operation.",
        inputName: "Test Inputs",
        inputDescription: "This is a description of the test inputs.",
        outputName: "Test Outputs",
        outputDescription: "This is a description of the test outputs.",
        outputFilterSpec: {},
        bodyFunction: function() {}
    },
    expectedResults: {
        error: 'Filter factory failure: While examining data namespace \'~.outputFilterSpec\': Missing required \'____accept\', \'____types\', or \'_____opaque\' type constraint directive.'
    }
});

testCreateFilter({
    testName: "Type map: input map wrong type.",
    validConfig: false,
    request: {
        operationID: 'VWc08q1GQYyl4yJqC2Jg_Q',
        operationName: "Test Operation",
        operationDescription: "This is a description of the test operation.",
        inputName: "Test Inputs",
        inputDescription: "This is a description of the test inputs.",
        inputFilterSpec: [],
        outputName: "Test Outputs",
        outputDescription: "This is a description of the test outputs.",
        bodyFunction: function() {}
    },
    expectedResults: {
        error: 'Filter factory failure: Invalid data type specified for property \'~.inputFilterSpec\'. Value of type \'jsArray\' not in allowed type set [jsUndefined,jsObject].'
    }
});

testCreateFilter({
    testName: "Type map: empty input map object.",
    validConfig: false,
    request: {
        operationID: 'VWc08q1GQYyl4yJqC2Jg_Q',
        operationName: "Test Operation",
        operationDescription: "This is a description of the test operation.",
        inputName: "Test Inputs",
        inputDescription: "This is a description of the test inputs.",
        inputFilterSpec: {},
        outputName: "Test Outputs",
        outputDescription: "This is a description of the test outputs.",
        bodyFunction: function() {}
    },
    expectedResults: {
        error: 'Filter factory failure: While examining data namespace \'~.inputFilterSpec\': Missing required \'____accept\', \'____types\', or \'_____opaque\' type constraint directive.'
    }
});

testCreateFilter({
    testName: "Type map: ____types wrong type.",
    validConfig: false,
    request: {
        operationID: 'VWc08q1GQYyl4yJqC2Jg_Q',
        operationName: "Test Operation",
        operationDescription: "This is a description of the test operation.",
        inputName: "Test Inputs",
        inputDescription: "This is a description of the test inputs.",
        inputFilterSpec: { ____types: 5 },
        outputName: "Test Outputs",
        outputDescription: "This is a description of the test outputs.",
        bodyFunction: function() {}
    },
    expectedResults: {
        error: 'Filter factory failure: While examining data namespace \'~.inputFilterSpec\': Error checking directive \'____types\': Value of type \'jsNumber\' not in allowed type set [jsString,jsArray].'
    }
});

testCreateFilter({
    testName: "Type map: empty ____types unrecognized moniker value.",
    validConfig: false,
    request: {
        operationID: 'VWc08q1GQYyl4yJqC2Jg_Q',
        operationName: "Test Operation",
        operationDescription: "This is a description of the test operation.",
        inputName: "Test Inputs",
        inputDescription: "This is a description of the test inputs.",
        inputFilterSpec: { ____types: 'llama' },
        outputName: "Test Outputs",
        outputDescription: "This is a description of the test outputs.",
        bodyFunction: function() {}
    },
    expectedResults: {
        error: 'Filter factory failure: While examining data namespace \'~.inputFilterSpec\': Error(s) in \'____types\' directive declaration. Type conversion failed: Invalid request \'value\' specifies unknown jsCode \'llama\'. Valid dimensions: [jsReference,jsCode,jsTypeString,jsMoniker,jsonMoniker].'
    }
});

testCreateFilter({
    testName: "Type map: empty ____types  empty array.",
    validConfig: false,
    request: {
        operationID: 'VWc08q1GQYyl4yJqC2Jg_Q',
        operationName: "Test Operation",
        operationDescription: "This is a description of the test operation.",
        inputName: "Test Inputs",
        inputDescription: "This is a description of the test inputs.",
        inputFilterSpec: { ____types: [] },
        outputName: "Test Outputs",
        outputDescription: "This is a description of the test outputs.",
        bodyFunction: function() {}
    },
    expectedResults: {
        error: 'Filter factory failure: While examining data namespace \'~.inputFilterSpec\': Type specification \'____types\' directive is missing argument(s).'
    }
});

testCreateFilter({
    testName: "Type map: ____types  array with unrecognized moniker.",
    validConfig: false,
    request: {
        operationID: 'VWc08q1GQYyl4yJqC2Jg_Q',
        operationName: "Test Operation",
        operationDescription: "This is a description of the test operation.",
        inputName: "Test Inputs",
        inputDescription: "This is a description of the test inputs.",
        inputFilterSpec: { ____types: [ 'goat' ] },
        outputName: "Test Outputs",
        outputDescription: "This is a description of the test outputs.",
        bodyFunction: function() {}
    },
    expectedResults: {
        error: 'Filter factory failure: While examining data namespace \'~.inputFilterSpec\': Error(s) in \'____types\' directive declaration. Type conversion failed: Invalid request \'value\' specifies unknown jsCode \'goat\'. Valid dimensions: [jsReference,jsCode,jsTypeString,jsMoniker,jsonMoniker].'
    }
});

testCreateFilter({
    testName: "Type map: Invalid typemap directive.",
    validConfig: false,
    request: {
        operationID: 'VWc08q1GQYyl4yJqC2Jg_Q',
        operationName: "Test Operation",
        operationDescription: "This is a description of the test operation.",
        inputName: "Test Inputs",
        inputDescription: "This is a description of the test inputs.",
        inputFilterSpec: {
            ____types: [ 'jsObject' ],
            ____callback: "this should not work."
        },
        outputName: "Test Outputs",
        outputDescription: "This is a description of the test outputs.",
        bodyFunction: function() {}
    },
    expectedResults: {
        error: 'Filter factory failure: While examining data namespace \'~.inputFilterSpec\': Unrecognized typemap directive \'____callback\' not allowed in declaration.'
    }
});

testCreateFilter({
    testName: "Type map: 1st rank valid, except subproperty is not an object.",
    validConfig: false,
    request: {
        operationID: 'VWc08q1GQYyl4yJqC2Jg_Q',
        operationName: "Test Operation",
        operationDescription: "This is a description of the test operation.",
        inputName: "Test Inputs",
        inputDescription: "This is a description of the test inputs.",
        inputFilterSpec: {
            ____types: [ 'jsObject' ],
            whatever: "this needs to be an object."
        },
        outputName: "Test Outputs",
        outputDescription: "This is a description of the test outputs.",
        bodyFunction: function() {}
    },
    expectedResults: {
        error: 'Filter factory failure: While examining data namespace \'~.inputFilterSpec\': Error queuing typemap object \'whatever\': Value of type \'jsString\' not in allowed type set [jsObject].'
    }
});

testCreateFilter({
    testName: "Type map: 1st rank valid, 2nd missing ____types.",
    validConfig: false,
    request: {
        operationID: 'VWc08q1GQYyl4yJqC2Jg_Q',
        operationName: "Test Operation",
        operationDescription: "This is a description of the test operation.",
        inputName: "Test Inputs",
        inputDescription: "This is a description of the test inputs.",
        inputFilterSpec: {
            ____types: [ 'jsObject' ],
            whatever: {}
        },
        outputName: "Test Outputs",
        outputDescription: "This is a description of the test outputs.",
        bodyFunction: function() {}
    },
    expectedResults: {
        error: 'Filter factory failure: While examining data namespace \'~.inputFilterSpec.whatever\': Missing required \'____accept\', \'____types\', or \'_____opaque\' type constraint directive.'
    }
});

testCreateFilter({
    testName: "Type map: A larger example with multiple ranks with some errors.",
    validConfig: false,
    request: {
        operationID: 'VWc08q1GQYyl4yJqC2Jg_Q',
        operationName: "Test Operation",
        operationDescription: "This is a description of the test operation.",
        inputName: "Test Inputs",
        inputDescription: "This is a description of the test inputs.",
        inputFilterSpec: {
            ____types: [ 'jsObject' ],
            whatever: {
                ____types: 'jsString',
                blue: {
                    ____types: 'jsArray'
                },
                green: {
                },
                red: {
                    ____types: [ 'jsNumber', 'jsString', 'jsNull' ]
                }
            }
        },
        outputName: "Test Outputs",
        outputDescription: "This is a description of the test outputs.",
        bodyFunction: function() {}
    },
    expectedResults: {
        error: 'Filter factory failure: While examining data namespace \'~.inputFilterSpec.whatever.green\': Missing required \'____accept\', \'____types\', or \'_____opaque\' type constraint directive.'
    }
});

testCreateFilter({
    testName: "Type map: Invalid ____label type.",
    validConfig: false,
    request: {
        operationID: 'VWc08q1GQYyl4yJqC2Jg_Q',
        operationName: "Test Operation",
        operationDescription: "This is a description of the test operation.",
        inputName: "Test Inputs",
        inputDescription: "This is a description of the test inputs.",
        inputFilterSpec: {
            ____types: [ 'jsObject' ],
            whatever: {
                ____types: 'jsString',
                ____label: {}
            }
        },
        outputName: "Test Outputs",
        outputDescription: "This is a description of the test outputs.",
        bodyFunction: function() {}
    },
    expectedResults: {
        error: 'Filter factory failure: While examining data namespace \'~.inputFilterSpec.whatever\': Error checking directive \'____label\': Value of type \'jsObject\' not in allowed type set [jsString].'
    }

});

testCreateFilter({
    testName: "Type map: Invalid ____description type.",
    validConfig: false,
    request: {
        operationID: 'VWc08q1GQYyl4yJqC2Jg_Q',
        operationName: "Test Operation",
        operationDescription: "This is a description of the test operation.",
        inputName: "Test Inputs",
        inputDescription: "This is a description of the test inputs.",
        inputFilterSpec: {
            ____types: [ 'jsObject' ],
            whatever: {
                ____types: 'jsString',
                ____description: {}
            }
        },
        outputName: "Test Outputs",
        outputDescription: "This is a description of the test outputs.",
        bodyFunction: function() {}
    },
    expectedResults: {
        error: 'Filter factory failure: While examining data namespace \'~.inputFilterSpec.whatever\': Error checking directive \'____description\': Value of type \'jsObject\' not in allowed type set [jsString].'
    }
});

testCreateFilter({
    testName: "Type map: Invalid ____inValueSet constraint type.",
    validConfig: false,
    request: {
        operationID: 'VWc08q1GQYyl4yJqC2Jg_Q',
        operationName: "Test Operation",
        operationDescription: "This is a description of the test operation.",
        inputName: "Test Inputs",
        inputDescription: "This is a description of the test inputs.",
        inputFilterSpec: {
            ____types: [ 'jsObject' ],
            whatever: {
                ____types: 'jsString',
                ____inValueSet: {}
            }
        },
        outputName: "Test Outputs",
        outputDescription: "This is a description of the test outputs.",
        bodyFunction: function() {}
    },
    expectedResults: {
        error: 'Filter factory failure: While examining data namespace \'~.inputFilterSpec.whatever\': Error checking directive \'____inValueSet\': Value of type \'jsObject\' not in allowed type set [jsArray].'
    }
});

testCreateFilter({
    testName: "Type map: Invalid ____inRangeInclusive constraint type.",
    validConfig: false,
    request: {
        operationID: 'VWc08q1GQYyl4yJqC2Jg_Q',
        operationName: "Test Operation",
        operationDescription: "This is a description of the test operation.",
        inputName: "Test Inputs",
        inputDescription: "This is a description of the test inputs.",
        inputFilterSpec: {
            ____types: [ 'jsObject' ],
            ____inRangeInclusive: "this shouldn't work"
        },
        outputName: "Test Outputs",
        outputDescription: "This is a description of the test outputs.",
        bodyFunction: function() {}
    },
    expectedResults: {
        error: 'Filter factory failure: While examining data namespace \'~.inputFilterSpec\': Error checking directive \'____inRangeInclusive\': Value of type \'jsString\' not in allowed type set [jsObject].'
    }
});

testCreateFilter({
    testName: "Type map: Invalid ____inRangeInclusive constrain type 2.",
    validConfig: false,
    request: {
        operationID: 'VWc08q1GQYyl4yJqC2Jg_Q',
        operationName: "Test Operation",
        operationDescription: "This is a description of the test operation.",
        inputName: "Test Inputs",
        inputDescription: "This is a description of the test inputs.",
        inputFilterSpec: {
            ____types: [ 'jsObject' ],
            ____inRangeInclusive: {}
        },
        outputName: "Test Outputs",
        outputDescription: "This is a description of the test outputs.",
        bodyFunction: function() {}
    },
    expectedResults: {
        error: 'Filter factory failure: While examining data namespace \'~.inputFilterSpec\': Error checking directive \'____inRangeInclusive.begin\': Value of type \'jsUndefined\' not in allowed type set [jsNumber,jsString].'
    }
});

testCreateFilter({
    testName: "Type map: Invalid ____inRangeInclusive constrain type 3.",
    validConfig: false,
    request: {
        operationID: 'VWc08q1GQYyl4yJqC2Jg_Q',
        operationName: "Test Operation",
        operationDescription: "This is a description of the test operation.",
        inputName: "Test Inputs",
        inputDescription: "This is a description of the test inputs.",
        inputFilterSpec: {
            ____types: [ 'jsObject' ],
            ____inRangeInclusive: { start: 5, endZ: "whoops" }
        },
        outputName: "Test Outputs",
        outputDescription: "This is a description of the test outputs.",
        bodyFunction: function() {}
    },
    expectedResults: {
        error: 'Filter factory failure: While examining data namespace \'~.inputFilterSpec\': Error checking directive \'____inRangeInclusive.begin\': Value of type \'jsUndefined\' not in allowed type set [jsNumber,jsString].'
    }
});

testCreateFilter({
    testName: "Type map: A larger example with multiple ranks with some errors.",
    validConfig: true,
    request: {
        operationID: 'VWc08q1GQYyl4yJqC2Jg_Q',
        operationName: "Test Operation",
        operationDescription: "This is a description of the test operation.",
        inputName: "Test Inputs",
        inputDescription: "This is a description of the test inputs.",
        inputFilterSpec: {
            ____types: [ 'jsObject' ],
            whatever: {
                ____types: 'jsString',
                blue: {
                    ____types: 'jsArray'
                },
                green: {
                    ____types: [ 'jsString' ],
                    purple: {
                        ____types: [ 'jsNumber', 'jsString', 'jsUndefined' ]
                    }
                },
                red: {
                    ____types: [ 'jsNumber', 'jsString', 'jsNull' ]
                }
            }
        },
        outputName: "Test Outputs",
        outputDescription: "This is a description of the test outputs.",
        bodyFunction: function() {}
    },
    expectedResults: {
        result: '{"operationID":"VWc08q1GQYyl4yJqC2Jg_Q","operationName":"Test Operation","operationDescription":"This is a description of the test operation.","inputFilterSpec":{"____types":["jsObject"],"whatever":{"____types":"jsString","blue":{"____types":"jsArray"},"green":{"____types":["jsString"],"purple":{"____types":["jsNumber","jsString","jsUndefined"]}},"red":{"____types":["jsNumber","jsString","jsNull"]}}},"inputTypeVIID":"7TrojPrco1xBDbw8SiEc3A","inputTypeVDID":"cmoEqadfFo3DkJkzmcU7AA","outputTypeVIID":"GqhbzK2DvDc0qWHdusz8bw","outputTypeVDID":"dHR0dNnZ2dlUVFRUyMjIyA","operationVDID":"wo2IE3XRW1dVrybtL956tA"}'
    }
});


testCreateFilter({
    testName: "Type map: test ____opaque type constraint.",
    validConfig: true,
    request: {
        operationID: '1234567890123456789012',
        bodyFunction: function() {},
        inputFilterSpec: {
            ____opaque: true
        }
    },
    expectedResults: {
        error: null,
        result: '{"operationID":"1234567890123456789012","operationName":"unnamed","operationDescription":"1234567890123456789012 provides no description.","inputFilterSpec":{"____opaque":true},"inputTypeVIID":"piTcIj0Txd1P4XZzezugKQ","inputTypeVDID":"dHR0dNnZ2dlUVFRUyMjIyA","outputTypeVIID":"-Is4Arz6X6OY04vtM1NPaw","outputTypeVDID":"dHR0dNnZ2dlUVFRUyMjIyA","operationVDID":"K8r0E12kNVcKnI7txREUtA"}'
    }
});

testCreateFilter({
    testName: "Type map: test ____opaque FALSE type constraint.",
    validConfig: false,
    request: {
        operationID: '1234567890123456789012',
        bodyFunction: function() {},
        inputFilterSpec: {
            ____opaque: false
        }
    },
    expectedResults: {
        error: 'Filter factory failure: While examining data namespace \'~.inputFilterSpec\': Missing required \'____accept\', \'____types\', or \'_____opaque\' type constraint directive.',
        result: null
    }
});

testCreateFilter({
    testName: "Type map: test ____opaque and ____types (should fail).",
    validConfig: false,
    request: {
        operationID: '1234567890123456789012',
        bodyFunction: function() {},
        inputFilterSpec: {
            ____opaque: true,
            ____types: 'jsObject'
        }
    },
    expectedResults: {
        error: 'Filter factory failure: While examining data namespace \'~.inputFilterSpec\': You cannot specify \'____accept\' or \'____types\' constraints on an \'____opaque\' namespace.',
        result: null
    }
});

testCreateFilter({
    testName: "Type map: test ____opaque and value-constrained directive (should fail).",
    validConfig: false,
    request: {
        operationID: '1234567890123456789012',
        bodyFunction: function() {},
        inputFilterSpec: {
            ____opaque: true,
            ____inValueSet: [ 1, 2, 3 ]
        }
    },
    expectedResults: {
        error: 'Filter factory failure: While examining data namespace \'~.inputFilterSpec\': You cannot specify value-based constraints on an \'____opaque\' namespace.',
        result: null
    }
});

testCreateFilter({
    testName: "Type map: test ____defaultValue declaration.",
    validConfig: true,
    request: {
        operationID: '77fdkgbeldbfemxlsdbffd',
        bodyFunction: function() {},
        inputFilterSpec: {
            ____types: 'jsObject',
            ____defaultValue: 5 // this is actually a runtime error as default value is treated as archtypical runtime input
        }
    },
    expectedResults: {
        error: null,
        result: '{"operationID":"77fdkgbeldbfemxlsdbffd","operationName":"unnamed","operationDescription":"77fdkgbeldbfemxlsdbffd provides no description.","inputFilterSpec":{"____types":"jsObject","____defaultValue":5},"inputTypeVIID":"T9f0BGfckxoDNzNw2nmdTA","inputTypeVDID":"XiflZhtnt_MSkYfU-JsIAQ","outputTypeVIID":"7EeQU7XFG_5J5rBLqFA7gg","outputTypeVDID":"dHR0dNnZ2dlUVFRUyMjIyA","operationVDID":"jElfE--CV1fqCyntQgVmtA"}'
    }
});

testCreateFilter({
    testName: "Type map: test ____defaultValue declaration.",
    validConfig: true,
    request: {
        operationID: '77fdkgbeldbfemxlsdbffd',
        bodyFunction: function() {},
        inputFilterSpec: {
            ____types: 'jsObject',
            ____defaultValue: 5 // this is actually a runtime error as default value is treated as archtypical runtime input
        }
    },
    expectedResults: {
        error: null,
        result: '{"operationID":"77fdkgbeldbfemxlsdbffd","operationName":"unnamed","operationDescription":"77fdkgbeldbfemxlsdbffd provides no description.","inputFilterSpec":{"____types":"jsObject","____defaultValue":5},"inputTypeVIID":"T9f0BGfckxoDNzNw2nmdTA","inputTypeVDID":"XiflZhtnt_MSkYfU-JsIAQ","outputTypeVIID":"7EeQU7XFG_5J5rBLqFA7gg","outputTypeVDID":"dHR0dNnZ2dlUVFRUyMjIyA","operationVDID":"jElfE--CV1fqCyntQgVmtA"}'
    }
});

testCreateFilter({
    testName: "Type map: test ____defaultValue with optional namespace.",
    validConfig: false,
    request: {
        operationID: '77fdkgbeldbfemxlsdbffd',
        bodyFunction: function() {},
        inputFilterSpec: {
            ____types: [ 'jsUndefined', 'jsObject' ],
            ____defaultValue: {}
        }
    },
    expectedResults: {
        error: 'Filter factory failure: While examining data namespace \'~.inputFilterSpec\': You cannot specifiy a default value on an optional namespace.',
        result: null
    }
});

testCreateFilter({
    testName: "Type map: test ____defaultValue with opaque namespace.",
    validConfig: true,
    request: {
        operationID: '77fdkgbeldbfemxlsdbffd',
        bodyFunction: function() {},
        inputFilterSpec: {
            ____opaque: true,
            ____defaultValue: {}
        }
    },
    expectedResults: {
        error: null,
        result: '{"operationID":"77fdkgbeldbfemxlsdbffd","operationName":"unnamed","operationDescription":"77fdkgbeldbfemxlsdbffd provides no description.","inputFilterSpec":{"____opaque":true,"____defaultValue":{}},"inputTypeVIID":"T9f0BGfckxoDNzNw2nmdTA","inputTypeVDID":"8Ri6k8HsAnEuGiDWgNygHg","outputTypeVIID":"7EeQU7XFG_5J5rBLqFA7gg","outputTypeVDID":"dHR0dNnZ2dlUVFRUyMjIyA","operationVDID":"jDC-E-90XVfq1SXtQpPXtA"}'
    }
});


testCreateFilter({
    testName: "Type map: test ____accept with valid input.",
    validConfig: true,
    request: {
        operationID: 'ICzEt4ZrSTCaktZHERiInw',
        inputFilterSpec: {
            ____accept: 'jsObject'
        }
    },
    expectedResults: {
        error: null,
        result: '{"operationID":"ICzEt4ZrSTCaktZHERiInw","operationName":"unnamed","operationDescription":"ICzEt4ZrSTCaktZHERiInw provides no description.","inputFilterSpec":{"____accept":"jsObject"},"inputTypeVIID":"TPTak-Pa05Ws37-NKI4Xig","inputTypeVDID":"Pn9jkiuUyFDMIvHds8fQ2A","outputTypeVIID":"frE-V01dxJSG6N32Ru-Jcg","outputTypeVDID":"dHR0dNnZ2dlUVFRUyMjIyA","operationVDID":"6_ASE91oKVetMpPtglpStA"}'
    }
});

testCreateFilter({
    testName: "Type map: test ____accept with ____defaultValue.",
    validConfig: true,
    request: {
        operationID: 'ICzEt4ZrSTCaktZHERiInw',
        inputFilterSpec: {
            ____accept: 'jsObject',
            ____defaultValue: { x: "whatever" }
        }
    },
    expectedResults: {
        error: null,
        result: '{"operationID":"ICzEt4ZrSTCaktZHERiInw","operationName":"unnamed","operationDescription":"ICzEt4ZrSTCaktZHERiInw provides no description.","inputFilterSpec":{"____accept":"jsObject","____defaultValue":{"x":"whatever"}},"inputTypeVIID":"TPTak-Pa05Ws37-NKI4Xig","inputTypeVDID":"QETSZ17UYaQIvDlCdHjC0A","outputTypeVIID":"frE-V01dxJSG6N32Ru-Jcg","outputTypeVDID":"dHR0dNnZ2dlUVFRUyMjIyA","operationVDID":"66kLE90ISFett5jtgkSGtA"}'
    }
});


testCreateFilter({
    testName: "Type map: test ____accept with declared subnamespace.",
    validConfig: false,
    request: {
        operationID: 'ICzEt4ZrSTCaktZHERiInw',
        inputFilterSpec: {
            ____accept: 'jsObject',
            notAllows: {
                ____types: 'jsNumber'
            }
        }
    },
    expectedResults: {
        error: 'Filter factory failure: While examining data namespace \'~.inputFilterSpec\': You cannot declare subnamespace filter spec(s) of a parent namespace declared using \'____accept\'.',
        result: null
    }
});

testCreateFilter({
    testName: "Type map: test ____asMap directive (trivial case 1)",
    validConfig: true,
    request: {
        operationID: "mM17o2-CQ-W-RNQhouMeGw",
        inputFilterSpec: {
            ____types: 'jsObject',
            ____asMap: true,
            element: {
                ____types: "jsNumber"
            }
        }
    },
    expectedResults: {
        error: null,
        result: '{"operationID":"mM17o2-CQ-W-RNQhouMeGw","operationName":"unnamed","operationDescription":"mM17o2-CQ-W-RNQhouMeGw provides no description.","inputFilterSpec":{"____types":"jsObject","____asMap":true,"element":{"____types":"jsNumber"}},"inputTypeVIID":"dLRcFabeEC6f7Xn3phbCTw","inputTypeVDID":"YmVwYYTKmA_o7l1dma7J6w","outputTypeVIID":"VijU-KPr0NfY-Sg3B1r3hw","outputTypeVDID":"dHR0dNnZ2dlUVFRUyMjIyA","operationVDID":"2deZE3LIW1frxW7tO8S1tA"}'
    }
});

testCreateFilter({
    testName: "Type map: test ____asMap directive (missing subnamespace declaration)",
    validConfig: false,
    request: {
        operationID: "lPD2DM0CRoGF6vUio0KPQw",
        inputFilterSpec: {
            ____types: 'jsObject',
            ____asMap: true
        }
    },
    expectedResults: {
        error: 'Filter factory failure: While examining data namespace \'~.inputFilterSpec\': Namespaces declared using \'____asMap\' set true must declare a single subnamespace declaration.',
        result: null,
    }
});

testCreateFilter({
    testName: "Type map: test ____asMap directive (more than one subnamespace declared)",
    validConfig: false,
    request: {
        operationID: "lPD2DM0CRoGF6vUio0KPQw",
        inputFilterSpec: {
            ____types: 'jsObject',
            ____asMap: true,
            x: { ____accept: "jsNumber" },
            y: { ____accept: "jsBoolean" }
        }
    },
    expectedResults: {
        error: 'Filter factory failure: While examining data namespace \'~.inputFilterSpec\': Namespaces declared using \'____asMap\' set true must declare a single subnamespace declaration.',
        result: null,
    }
});





















