

var testVerifyFilterSpec = require('./runner-filter-runtime-spec');
var assert = require('chai').assert;

testVerifyFilterSpec({
    testName: "Undefined request object",
    validConfig: false,
    expectedResults: {
        error: 'Invalid request: Value of type \'jsUndefined\' not in allowed type set [jsObject].',
        result: ''
    }
});

testVerifyFilterSpec({
    testName: "Empty request object",
    validConfig: true,
    request: {},
    expectedResults: {
        error: 'Invalid request missing \'spec\' declaration: Value of type \'jsString\' not in allowed type set [jsObject,jsUndefined].',
        result: undefined
    }
});

testVerifyFilterSpec({
    testName: "Request typemap is a string",
    validConfig: false,
    request: { spec: 'WTF' },
    expectedResults: {
        error: 'Invalid request missing \'spec\' declaration: Value of type \'jsString\' not in allowed type set [jsObject,jsUndefined].',
        result: ''
    }
});

testVerifyFilterSpec({
    testName: "Request filterSpec is empty",
    validConfig: false,
    request: {spec:{}},
    expectedResults: {
        error: 'Error at path \'~\': Type in set check failed: Invalid request.types value type \'jsUndefined\'. Expected either \'[object String]\' (jsMoniker string) or \'[object Array]\' (of jsMoniker strings).',
        result: ''
    }
});


testVerifyFilterSpec({
    testName: "Request filterSpec specifies an undefined top-level type and undefined ioReference (implicitly)",
    validConfig: true,
    request: {spec:{ ____types: 'jsUndefined' }},
    expectedResults: {
        error: '',
        result: undefined
    }
});


testVerifyFilterSpec({
    testName: "Request filterSpec specifies an undefined top-level type and undefined ioReference (explicitly)",
    validConfig: true,
    request: {spec:{ ____types: 'jsUndefined'}, value: undefined },
    expectedResults: {
        error: '',
        result: undefined
    }
});

testVerifyFilterSpec({
    testName: "Request filterSpec specifies an null top-level type and an undefined ioReference (explicitly)",
    validConfig: false,
    request: {spec:{ ____types: 'jsNull'}, value: undefined },
    expectedResults: {
        error: 'Error at path \'~\': Value of type \'jsUndefined\' not in allowed type set [jsNull].',
        result: ''
    }
});


testVerifyFilterSpec({
    testName: "Request filterSpec specifies a null top-level type and a null ioReference (explicitly)",
    validConfig: true,
    request: {spec:{ ____types: 'jsNull'}, value: null },
    expectedResults: {
        error: '',
        result: 'null'
    }
});


testVerifyFilterSpec({
    testName: "Request filterSpec specifies a null top-level type and a null ioReference (check the callback)",
    validConfig: true,
    request: {
        spec:{
            ____types: 'jsNull'
        },
        value: null
    },
    expectedResults: {
        error: '',
        result: 'null'
    }
});

testVerifyFilterSpec({
    testName: "Request filterSpec specifies an undefined top-level type and an undefined ioReference (check theca callback)",
    validConfig: true,
    request: {
        spec:{
            ____types: 'jsUndefined'
        },
        value: undefined
    },
    expectedResults: {
        error: '',
        result: undefined
    }
});

testVerifyFilterSpec({
    testName: "Attempt to pass a string through the filter.",
    validConfig: true,
    request: {
        spec:{
            ____types: 'jsString'
        },
        value: "Hello, World!"
    },
    expectedResults: {
        error: '',
        result: '"Hello, World!"'
    }
});

testVerifyFilterSpec({
    testName: "Attempt to pass a number through the filter.",
    validConfig: true,
    request: {
        spec:{
            ____types: 'jsNumber'
        },
        value: 3.1415
    },
    expectedResults: {
        error: '',
        result: '3.1415'
    }});


testVerifyFilterSpec({
    testName: "Attempt to pass a function through the filter.",
    validConfig: true,
    request: {
        spec:{
            ____types: 'jsFunction'
        },
        value: function () {}
    },
    expectedResults: {
        error: '',
        result: undefined // okay
    }
});

testVerifyFilterSpec({
    testName: "Attempt to pass an object through the filter.",
    validConfig: true,
    request: {
        spec:{
            ____types: 'jsObject'
        },
        value: {x: "shouldn't make it through the filter"}
    },
    expectedResults: {
        error: '',
        result: '{}'
    }
});

testVerifyFilterSpec({
    testName: "Attempt to pass an object w/subproperty through the filter.",
    validConfig: true,
    request: {
        spec:{
            ____types: 'jsObject',
            x: {
                ____types: 'jsString'
            }
        },
        value: {x: "should make it through the filter"}
    },
    expectedResults: {
        error: '',
        result: '{"x":"should make it through the filter"}'
    }
});

testVerifyFilterSpec({
    testName: "Attempt to pass a populated object through an accept filter.",
    validConfig: true,
    request: {
        spec: { ____accept: 'jsObject' },
        value: { subproperty: "this property should pass through the filter." }
    },
    expectedResults: {
        error: '',
        result: '{"subproperty":"this property should pass through the filter."}'
    }
});

testVerifyFilterSpec({
    testName: "Attempt to pass a populated object through an accept filter.",
    validConfig: true,
    request: {
        spec: { ____accept: 'jsObject' },
        value: { subproperty: "this property should pass through the filter." }
    },
    expectedResults: {
        error: '',
        result: '{"subproperty":"this property should pass through the filter."}'
    }
});

testVerifyFilterSpec({
    testName: "Attempt to pass a populated array through an accept filter.",
    validConfig: true,
    request: {
        spec: { ____accept: 'jsArray' },
        value: [ 'cats', 'dogs' ]
    },
    expectedResults: {
        error: '',
        result: '["cats","dogs"]'
    }
});

testVerifyFilterSpec({
    testName: "Advanced ____accept with ____defaultValue.",
    validConfig: true,
    request: {
        spec: {
            ____accept: 'jsArray',
            ____defaultValue: [ 'cats', 'dogs' ]
        },
    },
    expectedResults: {
        error: null,
        result: '["cats","dogs"]'
    }
});

testVerifyFilterSpec({
    testName: "Advanced ____accept with ____defaultValue in a subnamespace of the request.",
    validConfig: true,
    request: {
        spec: {
            ____types: 'jsObject',
            x: {
                ____accept: 'jsArray',
                ____defaultValue: [ 'cats', 'dogs' ]
            }
        },
        value: {}
    },

    expectedResults: {
        error: null,
        result: '{"x":["cats","dogs"]}'
    }
});

testVerifyFilterSpec({
    testName: "Advanced ____accept with ____defaultValue in a subnamespace of the request (with value).",
    validConfig: true,
    request: {
        spec: {
            ____types: 'jsObject',
            x: {
                ____accept: 'jsArray',
                ____defaultValue: [ 'cats', 'dogs' ]
            }
        },
        value: { x: [ 1, 2 ,3, 4 ] }
    },

    expectedResults: {
        error: null,
        result: '{"x":[1,2,3,4]}'
    }
});

testVerifyFilterSpec({
    testName: "Boolean w/false default value, w/undefined input.",
    validConfig: true,
    request: {
        spec: {
            ____types: "jsBoolean",
            ____defaultValue: false,
        },
        value: undefined
    },
    expectedResults: {
        result: 'false'
    }
});

testVerifyFilterSpec({
    testName: "Boolean w/false default value, w/false input.",
    validConfig: true,
    request: {
        spec: {
            ____types: "jsBoolean",
            ____defaultValue: false,
        },
        value: false
    },
    expectedResults: {
        result: 'false'
    }
});

testVerifyFilterSpec({
    testName: "Boolean w/false default value, w/true input.",
    validConfig: true,
    request: {
        spec: {
            ____types: "jsBoolean",
            ____defaultValue: false,
        },
        value: true
    },
    expectedResults: {
        result: 'true'
    }
});

testVerifyFilterSpec({
    testName: "Boolean w/true default value, w/undefined input.",
    validConfig: true,
    request: {
        spec: {
            ____types: "jsBoolean",
            ____defaultValue: true,
        },
    },
    expectedResults: {
        result: 'true'
    }
});

testVerifyFilterSpec({
    testName: "Boolean w/true default value, w/false input.",
    validConfig: true,
    request: {
        spec: {
            ____types: "jsBoolean",
            ____defaultValue: true,
        },
        value: false
    },
    expectedResults: {
        result: 'false'
    }
});

testVerifyFilterSpec({
    testName: "Boolean w/true default value, w/true input.",
    validConfig: true,
    request: {
        spec: {
            ____types: "jsBoolean",
            ____defaultValue: true,
        },
        value: true
    },
    expectedResults: {
        result: 'true'
    }
});

testVerifyFilterSpec({
    testName: "Object w/Boolean prop 'x' w/true default value, w/undefined 'x'.",
    validConfig: true,
    request: {
        spec: {
            ____types: "jsObject",
            x: {
                ____types: "jsBoolean",
                ____defaultValue: true,
            }
        },
        value: {}
    },
    expectedResults: {
        result: '{"x":true}'
    }
});

testVerifyFilterSpec({
    testName: "Object w/Boolean prop 'x' w/true default value, w/false 'x'.",
    validConfig: true,
    request: {
        spec: {
            ____types: "jsObject",
            x: {
                ____types: "jsBoolean",
                ____defaultValue: true,
            }
        },
        value: { x: false }
    },
    expectedResults: {
        result: '{"x":false}'
    }
});

testVerifyFilterSpec({
    testName: "Object w/Boolean prop 'x' w/true default value, w/true 'x'.",
    validConfig: true,
    request: {
        spec: {
            ____types: "jsObject",
            x: {
                ____types: "jsBoolean",
                ____defaultValue: true,
            }
        },
        value: { x: true }
    },
    expectedResults: {
        result: '{"x":true}'
    }
});

testVerifyFilterSpec({
    testName: "Object w/numerical prop 'x' w/6 default value, w/undefined === 'x'.",
    validConfig: true,
    request: {
        spec: {
            ____types: "jsObject",
            x: {
                ____types: "jsNumber",
                ____defaultValue: 6,
            }
        },
        value: {}
    },
    expectedResults: {
        result: '{"x":6}'
    }
});
testVerifyFilterSpec({
    testName: "Object w/numerical prop 'x' w/6 default value, w/0 === 'x'.",
    validConfig: true,
    request: {
        spec: {
            ____types: "jsObject",
            x: {
                ____types: "jsNumber",
                ____defaultValue: 6,
            }
        },
        value: { x: 0 }
    },
    expectedResults: {
        result: '{"x":0}'
    }
});

testVerifyFilterSpec({
    testName: "Object w/numerical prop 'x' w/true default value, w/true 'x'.",
    validConfig: true,
    request: {
        spec: {
            ____types: "jsObject",
            x: {
                ____types: "jsNumber",
                ____defaultValue: 6,
            }
        },
        value: { x: -1000 }
    },
    expectedResults: {
        result: '{"x":-1000}'
    }
});

testVerifyFilterSpec({
    testName: "Object w/string prop 'x' w/'test' default value, w/''==='x'.",
    validConfig: true,
    request: {
        spec: {
            ____types: "jsObject",
            x: {
                ____types: "jsString",
                ____defaultValue: "This is a test"
            }
        },
        value: { x:'' }
    },
    expectedResults: {
        result: '{"x":""}'
    }
});


