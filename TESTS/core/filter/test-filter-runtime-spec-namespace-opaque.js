// test-nff-runtime-namepsace-opaque.js

var assert = require('chai').assert;
var testModule = require('./module-under-test');
var composeFunction = testModule('arc_core_filter_create');
var testNFFRuntime = require('./runner-filter-runtime');

testNFFRuntime({
    testName: "NFF runtime with bodyFunction that does not return a response object.",
    validConfig: false,
    nffGenerator: function() {
        var functionObject = composeFunction({
            operationID: 'FW6hbJQ2R_uN4CCP3qIrYQ',
            operationName: 'bodyFunction Bad Return Test',
            inputFilterSpec: { ____opaque: true },
            outputFilterSpec: { ____opaque: true },
            bodyFunction: function(request_) {
                return "You cannot simply return whatever you want from a bodyFunction.";
            }
        });
        return functionObject;
    },
    request: "Doesn't matter - could be anything because NFF should reject this.",
    expectedResults: {
        error: 'An error occurred in function [bodyFunction Bad Return Test::FW6hbJQ2R_uN4CCP3qIrYQ] while analyzing response signature: Runtime data check failed: Error at path \'~\': Value of type \'jsString\' not in allowed type set [jsObject].',
        result: null
    }
});

testNFFRuntime({
    testName: "NFF runtime bodyFunction explicitly returns an error.",
    validConfig: false,
    nffGenerator: function() {
        var functionObject = composeFunction({
            operationID: '3Ssz5oWpSnmLcFmnY56TOQ',
            operationName: "bodyFunction Returns Error Test",
            inputFilterSpec: { ____opaque: true },
            outputFilterSpec: { ____opaque: true },
            bodyFunction: function(request_) {
                var errorMessage = "Ignoring request '" + JSON.stringify(request_) + "' and reporting an error instead.";
                return { error: errorMessage, result: null };
            }
        });
        return functionObject;
    },
    request: "Doesn't matter.",
    expectedResults: {
        error: 'An error occurred in function [bodyFunction Returns Error Test::3Ssz5oWpSnmLcFmnY56TOQ] while analyzing response disposition: Ignoring request \'"Doesn\'t matter."\' and reporting an error instead.',
        result: null
    }
});



testNFFRuntime({
    testName: "NFF runtime opaque input namespace test #1",
    validConfig: true,
    nffGenerator: function() {
        return composeFunction({
            operationID: 'pI02RPmzReSHMclQZXH7mg',
            operationName: 'Opaque Namespace Test #1',
            inputFilterSpec: { ____opaque: true },
            outputFilterSpec: { ____opaque: true },
            bodyFunction: function(request_) {
                return { error: null, result: request_ };
            }
        });
    },
    request: {
        x: "Whatever I want!"
    },
    expectedResults: {
        error: null,
        result: '{"x":"Whatever I want!"}'
    }
});

testNFFRuntime({
    testName: "NFF runtime with mix of opaque, declared, and undeclared inputs.",
    validConfig: true,
    nffGenerator: function() {
        var functionObject = composeFunction({
            operationID: 'rch9OovwQta2ShC111e7Rg',
            operationName: 'Mix of Opaque, Declared, Undeclared',
            inputFilterSpec: {
                ____types: 'jsObject',
                customers: {
                    ____types: 'jsArray',
                    element: {
                        ____types: 'jsObject',
                        x: {
                            ____opaque: true
                        },
                        y: {
                            ____types: [ 'jsString', 'jsUndefined' ]
                        }
                    }
                },
                optionalStringProperty: {
                    ____types: [ 'jsString', 'jsUndefined' ]
                },
                opaqueProperty: {
                    ____opaque: true
                },
                numericProperty: {
                    ____types: 'jsNumber'
                }
            },
            outputFilterSpec: {
                ____opaque: true
            },
            bodyFunction: function(request_) {
                return { error: null, result: request_ };
            }
        });
        return functionObject;
    },
    request: {
        customers: [
            {}, // okay by the constraints we've established
            { x: "can be anything because it's opaque", y: "must be a string if defined" },
            { x: [
                "I like being able to do what I like",
                { a: "is for apple", b: "is for better fix those UI bugs" }
                ]
            }
        ],
        numericProperty: 29,
        opaqueProperty: {
            arrayOfSomething: [
                { x: "whatever" },
                65
            ],
        },
        optionalStringProperty: "it's nice to have options",
        randomStuffThatIsIgnored: "blah blah blah"
    },
    expectedResults: {
        error: null,
        result: '{"customers":[{},{"x":"can be anything because it\'s opaque","y":"must be a string if defined"},{"x":["I like being able to do what I like",{"a":"is for apple","b":"is for better fix those UI bugs"}]}],"optionalStringProperty":"it\'s nice to have options","opaqueProperty":{"arrayOfSomething":[{"x":"whatever"},65]},"numericProperty":29}'
    }
});


testNFFRuntime({
    testName: "NFF runtime opaque namespace and default value (no request input case).", 
    validConfig: true,
    nffGenerator: function() {
        var functionObject = composeFunction({
            operationID: '435vskgQ2RuN4CCP3qIrYQ',
            inputFilterSpec: { ____opaque: true, ____defaultValue: "An undefined request was received so you're seeing this message." },
        });
        return functionObject;
    },
    expectedResults: {
        error: null,
        result: '"An undefined request was received so you\'re seeing this message."'
    }
});

testNFFRuntime({
    testName: "NFF runtime opaque namespace and default value (with request input case).", 
    validConfig: true,
    nffGenerator: function() {
        var functionObject = composeFunction({
            operationID: '435vskgQ2RuN4CCP3qIrYQ',
            inputFilterSpec: { ____opaque: true, ____defaultValue: "An undefined request was received so you're seeing this message." },
        });
        return functionObject;
    },
    request: "Here now is some input from the caller.",
    expectedResults: {
        error: null,
        result: '"Here now is some input from the caller."'
    }
});

testNFFRuntime({
    testName: "NFF runtime opaque namespace and default value advanced test 1.", 
    validConfig: true,
    nffGenerator: function() {
        var functionObject = composeFunction({
            operationID: '435vskgQ2RuN4CCP3qIrYQ',
            inputFilterSpec: { ____opaque: true, ____defaultValue: "An undefined request was received so you're seeing this message." },
        });
        return functionObject;
    },
    expectedResults: {
        error: null,
        result: '"An undefined request was received so you\'re seeing this message."'
    }
});


testNFFRuntime({
    testName: "NFF runtime opaque namespace and default value (advanced case with no request input).", 
    validConfig: true,
    nffGenerator: function() {
        var functionObject = composeFunction({
            operationID: '435vskgQ2RuN4CCP3qIrYQ',
            inputFilterSpec: {
                ____types: [ 'jsObject' ],
                ____defaultValue: {
                    construction: "no request input received",
                    opaque: [ "red", "green", "blue" ]
                },
                construction: {
                    ____types: 'jsString',
                    ____defaultValue: "a request object was received but it did not set the 'construction' property."
                },
                opaque: {
                    ____opaque: true,
                    ____defaultValue: "No value was set for property 'opaque' so we're setting it with the defaultValue"
                },
                opaque1: {
                    ____opaque: true
                }
            }
        });
        return functionObject;
    },
    expectedResults: {
        error: null,
        result: '{"construction":"no request input received","opaque":["red","green","blue"]}'
    }
});

testNFFRuntime({
    testName: "NFF runtime opaque namespace and default value (advanced case with input case 1).", 
    validConfig: true,
    nffGenerator: function() {
        var functionObject = composeFunction({
            operationID: '435vskgQ2RuN4CCP3qIrYQ',
            inputFilterSpec: {
                ____types: [ 'jsObject' ],
                ____defaultValue: {
                    construction: "no request input received",
                    opaque: [ "red", "green", "blue" ]
                },
                construction: {
                    ____types: 'jsString',
                    ____defaultValue: "a request object was received but it did not set the 'construction' property."
                },
                opaque: {
                    ____opaque: true,
                    ____defaultValue: "No value was set for property 'opaque' so we're setting it with the defaultValue"
                },
                opaque1: {
                    ____opaque: true
                }
            }
        });
        return functionObject;
    },
    request: {},
    expectedResults: {
        error: null,
        result: '{"construction":"a request object was received but it did not set the \'construction\' property.","opaque":"No value was set for property \'opaque\' so we\'re setting it with the defaultValue"}'
    }
});

testNFFRuntime({
    testName: "NFF runtime opaque namespace and default value (advanced case with input case 2).", 
    validConfig: true,
    nffGenerator: function() {
        var functionObject = composeFunction({
            operationID: '435vskgQ2RuN4CCP3qIrYQ',
            inputFilterSpec: {
                ____types: [ 'jsObject' ],
                ____defaultValue: {
                    construction: "no request input received",
                    opaque: [ "red", "green", "blue" ]
                },
                construction: {
                    ____types: 'jsString',
                    ____defaultValue: "a request object was received but it did not set the 'construction' property."
                },
                opaque: {
                    ____opaque: true,
                    ____defaultValue: "No value was set for property 'opaque' so we're setting it with the defaultValue"
                },
                opaque1: {
                    ____opaque: true
                }
            }
        });
        return functionObject;
    },
    request: { opaque1: "it's getting late. again.", construction: "xxx"},
    expectedResults: {
        error: null,
        result: '{"construction":"xxx","opaque":"No value was set for property \'opaque\' so we\'re setting it with the defaultValue","opaque1":"it\'s getting late. again."}'
    }
});
