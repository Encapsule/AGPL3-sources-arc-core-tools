// test-nff-compose-transforms.js

var testNFFComposeFunction = require('./runner-filter-create');

testNFFComposeFunction({
    testName: "Simple transform test 1",
    validConfig: true,
    request: {
        operationID: 'UNxW8nNfRFejJty-Z1LwyQ',
        operationName: "Test Operation",
        operationDescription: "This is a description of the test operation.",
        inputName: "Test Inputs",
        inputDescription: "This is a description of the test inputs.",
        inputFilterSpec: {
            ____types: 'jsObject',
            color: {
                ____types: 'jsString',
                ____label: "Color",
                ____description: "Your desired color selection.",
                ____inValueSet: [ 'red', 'blue', 'green' ]
            }
        },
        outputName: "Test Outputs",
        outputDescription: "This is a description of the test outputs.",
        bodyFunction: function() { console.log("Hello world."); }
    },
    expectedResults: {
        error: null,
        result: '{"operationID":"UNxW8nNfRFejJty-Z1LwyQ","operationName":"Test Operation","operationDescription":"This is a description of the test operation.","inputName":"Test Inputs","inputDescription":"This is a description of the test inputs.","inputFilterSpec":{"____types":"jsObject","color":{"____types":"jsString","____label":"Color","____description":"Your desired color selection.","____inValueSet":["red","blue","green"]}},"outputName":"Test Outputs","outputDescription":"This is a description of the test outputs."}'
    }
});

