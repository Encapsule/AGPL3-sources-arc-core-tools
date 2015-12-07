// test-types-check.js

var assert = require('chai').assert;

var testModule = require('./module-under-test');

var testInTypeSet = require('./test-runner-types-check-in-set');
var testIsJSON = require('./test-runner-types-check-is-json');

var typeCheckModule = testModule('arc_core_types_check');


describe("Attempt to load the jbus-common-types-check module.", function() {

    it("The jbus-common-types-check module is expected to have loaded.", function() {
        assert.isDefined(typeCheckModule);
        assert.isNotNull(typeCheckModule);
        assert.isObject(typeCheckModule);
    });

    it("The module should export function 'inTypeSet'.", function() {
        assert.property(typeCheckModule, 'inTypeSet');
        assert.isFunction(typeCheckModule.inTypeSet);
    });

    it("The module should export function 'isJSON'.", function() {
        assert.property(typeCheckModule, 'isJSON');
        assert.isFunction(typeCheckModule.isJSON);
    });

    describe("Test 'types.inTypeSet' function.", function() {

        testInTypeSet({
            testFunction: typeCheckModule.inTypeSet,
            testName: "Missing request object.",
            validConfig: false,
            expectedResults: {
                error: 'jbus type in set check failed: Missing request object in-parameter.'
            }
        });

        testInTypeSet({
            testFunction: typeCheckModule.inTypeSet,
            testName: "Bad request type.",
            validConfig: false,
            request: "bogus",
            expectedResults: {
                error: 'jbus type in set check failed: Invalid request: Expected value of type \'[object Object]\' but found \'[object String]\' instead.'
            }
        });

        testInTypeSet({
            testFunction: typeCheckModule.inTypeSet,
            testName: "Empty request object.",
            validConfig: false,
            request: {},
            expectedResults: {
                error: 'jbus type in set check failed: Invalid request.types value type \'jsUndefined\'. Expected either \'[object String]\' (jsMoniker string) or \'[object Array]\' (of jsMoniker strings).'
            }
        });

        testInTypeSet({
            testFunction: typeCheckModule.inTypeSet,
            testName: "Invalid request.types value (integer)",
            validConfig: false,
            request: {
                types: 5
            },
            expectedResults: {
                error: 'jbus type in set check failed: Invalid request.types value type \'jsNumber\'. Expected either \'[object String]\' (jsMoniker string) or \'[object Array]\' (of jsMoniker strings).'
            }
        });

        testInTypeSet({
            testFunction: typeCheckModule.inTypeSet,
            testName: "Valid request w/bogus type string as type set.",
            validConfig: true,
            request: {
                types: "not going to cut it"
            },
            expectedResults: {
                error: '',
                guidance: 'Value of type \'jsUndefined\' not in allowed type set [not going to cut it].',
                result: false
            }
        });

        testInTypeSet({
            testFunction: typeCheckModule.inTypeSet,
            testName: "Valid request w/type not in type set (single jsMoniker).",
            validConfig: true,
            request: {
                types: 'jsFunction',
                value: 5
            },
            expectedResults: {
                error: '',
                guidance: 'Value of type \'jsNumber\' not in allowed type set [jsFunction].',
                result: false
            }
        });

        testInTypeSet({
            testFunction: typeCheckModule.inTypeSet,
            testName: "Valid request w/type not in type set (array of jsMoniker).",
            validConfig: true,
            request: {
                types: ['jsFunction', 'jsUndefined'],
                value: 5
            },
            expectedResults: {
                error: '',
                guidance: 'Value of type \'jsNumber\' not in allowed type set [jsFunction,jsUndefined].',
                result: false
            }
        });

        testInTypeSet({
            testFunction: typeCheckModule.inTypeSet,
            testName: "Valid request w/type in type set (single jsMoniker).",
            validConfig: true,
            request: {
                types: 'jsString',
                value: "This is a valid string"
            },
            expectedResults: {
                error: null,
                guidance: null,
                result: 'jsString'
            }
        });

        testInTypeSet({
            testFunction: typeCheckModule.inTypeSet,
            testName: "Valid request/wtype in type set (array of jsMoniker).",
            validConfig: true,
            request: {
                types: ['jsFunction','jsString'],
                value: "Another valid string"
            },
            expectedResults: {
                error: null,
                guidance: null,
                result: 'jsString'
            }
        });

    });

    describe("Test 'types.isJSON' function.", function() {

        testIsJSON({
            testFunction: typeCheckModule.isJSON,
            testName: "Valid request (passing undefined).",
            validConfig: true,
            expectedResults: {
                error: null,
                guidance: 'jbus type conversion failed: No coversion from dimension \'jsTypeString\' to \'jsonMoniker\' for value \'[object Undefined]\'.',
                result: false
            }
        });

        testIsJSON({
            testFunction: typeCheckModule.isJSON,
            testName: "Valid request (passing a function).",
            request: function() {},
            validConfig: true,
            expectedResults: {
                error: null,
                guidance: 'jbus type conversion failed: No coversion from dimension \'jsTypeString\' to \'jsonMoniker\' for value \'[object Function]\'.',
                result: false
            }
        });

        testIsJSON({
            testFunction: typeCheckModule.isJSON,
            testName: "Valid request (null value).",
            validConfig: true,
            request: null,
            expectedResults: {
                error: null,
                guidance: null,
                result: 'jsonNull'
            }
        });
        

        

    });

});







