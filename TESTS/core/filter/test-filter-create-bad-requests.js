// test-use-case-dtfg-bad-requests.js
//

var testNFFComposeFunction = require('./runner-filter-create');

testNFFComposeFunction({
    testName: "Bad input: missing request object",
    validConfig: false,
    request: undefined,
    expectedResults: {
        error: 'Filter factory failure: Invalid data type specified for property \'~\'. Value of type \'jsUndefined\' not in allowed type set [jsObject].'
    }
});


testNFFComposeFunction({
    testName: "Bad input: empty request object, missing operationID",
    validConfig: false,
    request: {},
    expectedResults: {
        error: 'Filter factory failure: Invalid data type specified for property \'~.operationID\'. Value of type \'jsUndefined\' not in allowed type set [jsString].'
    }
});

testNFFComposeFunction({
    testName: "Bad input: operationID wrong type",
    validConfig: false,
    request: {
        operationID: 5
    },
    expectedResults: {
        error: 'Filter factory failure: Invalid data type specified for property \'~.operationID\'. Value of type \'jsNumber\' not in allowed type set [jsString].'
    }
});

testNFFComposeFunction({
    testName: "Bad input: operationID wrong type of string",
    validConfig: false,
    request: {
        operationID: "Um, yea. I'm going to have you come on in on Saturday."
    },
    expectedResults: {
        error: 'Filter factory failure: Invalid IRUT specified for \'~.operationID: Expected 22-character string. Found 54-character string instead.'
    }
});

testNFFComposeFunction({
    testName: "Bad input: operationID with invalid character",
    validConfig: false,
    request: {
        operationID: "//34567890123456789012"
    },
    expectedResults: {
        error: 'Filter factory failure: Invalid IRUT specified for \'~.operationID: Expected only Base64 characters (substitute: \'+\' > \'-\', \'/\' > \'_\').'
    }
});

// Should be ignored and default operation name used.
testNFFComposeFunction({
    testName: "Bad input: operationName wrong type.",
    validConfig: true,
    request: {
        operationID: 'ZZZ08q1GQYyl4yJqC2Jg_Q',
        operationName: 6,
        bodyFunction: function() {}
    },
    expectedResults: {
        error: '',
        result: '{"operationID":"ZZZ08q1GQYyl4yJqC2Jg_Q","operationName":"unnamed","operationDescription":"ZZZ08q1GQYyl4yJqC2Jg_Q provides no description.","inputTypeVIID":"qgDVjJlvYFxMNmI8PNPE3A","inputTypeVDID":"dHR0dNnZ2dlUVFRUyMjIyA","outputTypeVIID":"tVvUzKLGPzeAw2TdGbLibw","outputTypeVDID":"dHR0dNnZ2dlUVFRUyMjIyA","operationVDID":"Uqn0EyW6NVc_EY7tkNwUtA"}'
    }
});

testNFFComposeFunction({
    testName: "Bad input: operationDescription wrong type.",
    validConfig: true,
    request: {
        operationID: 'VWc08q1GQYyl4yJqC2Jg_Q',
        operationDescription: 6,
        bodyFunction: function() {}
    },
    expectedResults: {
        error: '',
        result: '{"operationID":"VWc08q1GQYyl4yJqC2Jg_Q","operationName":"unnamed","operationDescription":"VWc08q1GQYyl4yJqC2Jg_Q provides no description.","inputTypeVIID":"7TrojPrco1xBDbw8SiEc3A","inputTypeVDID":"dHR0dNnZ2dlUVFRUyMjIyA","outputTypeVIID":"GqhbzK2DvDc0qWHdusz8bw","outputTypeVDID":"dHR0dNnZ2dlUVFRUyMjIyA","operationVDID":"wqn0E3W6NVdVEY7tL9wUtA"}'
    }
});

testNFFComposeFunction({
    testName: "Bad input: missing bodyFunction",
    validConfig: true,
    request: {
        operationID: 'VWc08q1GQYyl4yJqC2Jg_Q',
        operationName: "Test Operation",
        operationDescription: "This is a description of the test operation.",
        inputName: "Test Input",
        inputDescription: "This is a description of the test inputs.",
        outputName: "Test Output",
        outputDescription: "This is a description of the test outputs."
    },
    expectedResults: {
        error: '',
        result: '{"operationID":"VWc08q1GQYyl4yJqC2Jg_Q","operationName":"Test Operation","operationDescription":"This is a description of the test operation.","inputTypeVIID":"7TrojPrco1xBDbw8SiEc3A","inputTypeVDID":"dHR0dNnZ2dlUVFRUyMjIyA","outputTypeVIID":"GqhbzK2DvDc0qWHdusz8bw","outputTypeVDID":"dHR0dNnZ2dlUVFRUyMjIyA","operationVDID":"wqn0E3W6NVdVEY7tL9wUtA"}'
    }
});

testNFFComposeFunction({
    testName: "Bad input: bodyFunction is wrong type",
    validConfig: false,
    request: {
        operationID: 'VWc08q1GQYyl4yJqC2Jg_Q',
        operationName: "Test Operation",
        operationDescription: "This is a description of the test operation.",
        inputName: "Test Input",
        inputDescription: "This is a description of the test inputs.",
        outputName: "Test Output",
        outputDescription: "This is a description of the test outputs.",
        bodyFunction: "Nope!"
    },
    expectedResults: {
        error: 'Filter factory failure: Invalid data type specified for property \'~.bodyFunction\'. Value of type \'jsString\' not in allowed type set [jsFunction,jsUndefined].'
    }
});


