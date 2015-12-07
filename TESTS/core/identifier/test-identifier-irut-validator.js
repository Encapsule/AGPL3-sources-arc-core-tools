// test-identifier-irut-validator.js

var testIRUTValidator = require('./test-runner-identifier-irut-validator');

testIRUTValidator({
    testName: "Undefined request input",
    validConfig: true,
    expectedResults: {
        error: null,
        guidance: 'Value of type \'jsUndefined\' not in allowed type set [jsString].',
        result: false
    }
});

testIRUTValidator({
    testName: "Invalid length string request input",
    validConfig: true,
    request: "not long enough",
    expectedResults: {
        error: null,
        guidance: 'Expected 22-character string. Found 15-character string instead.',
        result: false
    }
});

testIRUTValidator({
    testName: "Valid IRUT string 1 (A-V)",
    validConfig: true,
    request: "ABCDEFGHIJKLMNOPQRSTUV",
    expectedResults: {
        error: null,
        guidance: null,
        result: true
    }
});

testIRUTValidator({
    testName: "Valid IRUT string 2 (W-r)",
    validConfig: true,
    request: "WXYZabcdefghijklmnopqr",
    expectedResults: {
        error: null,
        guidance: null,
        result: true
    }
});

testIRUTValidator({
    testName: "Valid IRUT string 3 (s-_)",
    validConfig: true,
    request: "stuvwxyz0123456789--__",
    expectedResults: {
        error: null,
        guidance: null,
        result: true
    }
});


testIRUTValidator({
    testName: "Invalid IRUT (non-base64 char)",
    validConfig: true,
    request: ":tuvwxyz0123456789--__",
    expectedResults: {
        error: null,
        guidance: 'Expected only Base64 characters (substitute: \'+\' > \'-\', \'/\' > \'_\').',
        result: false
    }
});

testIRUTValidator({
    testName: "Invalid IRUT (valid base64 but invalid IRUT char '+')",
    validConfig: true,
    request: "+tuvwxyz0123456789--__",
    expectedResults: {
        error: null,
        guidance: 'Expected only Base64 characters (substitute: \'+\' > \'-\', \'/\' > \'_\').',
        result: false
    }
});

testIRUTValidator({
    testName: "Invalid IRUT (valid base64 but invalid IRUT char '/')",
    validConfig: true,
    request: "/tuvwxyz0123456789--__",
    expectedResults: {
        error: null,
        guidance: 'Expected only Base64 characters (substitute: \'+\' > \'-\', \'/\' > \'_\').',
        result: false
    }
});



            
