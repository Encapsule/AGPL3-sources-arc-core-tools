// test-types-luts.js

var assert = require('chai').assert;
var testModule = require('./module-under-test');

describe("Attempt to load the jbus-common-types-luts.", function() {

    LUTS = null
    error = null

    before(function() {
        var moduleLoader = function() {
            LUTS = testModule('arc_core_types_luts');
        };
        error = assert.doesNotThrow(moduleLoader, "The jbus-common-luts module should be located and should load.");
    });

    it("The jbus-common-type-luts is expected to have loaded.", function() {
        assert.isDefined(LUTS);
        assert.isNotNull(LUTS);
        assert.isObject(LUTS);
    });

    it("The jbus-common-type-luts module is expected to export a static data table.", function() {

        var expectedJSON = '{"dimensions":["jsReference","jsCode","jsTypeString","jsMoniker","jsonMoniker"],"jsTypeString":["[object Undefined]","[object Null]","[object Boolean]","[object String]","[object Number]","[object Object]","[object Array]","[object Function]"],"jsMoniker":["jsUndefined","jsNull","jsBoolean","jsString","jsNumber","jsObject","jsArray","jsFunction"],"jsonMoniker":[null,"jsonNull","jsonBoolean","jsonString","jsonNumber","jsonObject","jsonArray",null],"jsCodes":{"jsUndefined":0,"jsNull":1,"jsBoolean":2,"jsString":3,"jsNumber":4,"jsObject":5,"jsArray":6,"jsFunction":7}}';
        var actualJSON = JSON.stringify(LUTS);
        assert.equal(expectedJSON, actualJSON);
    });

});







