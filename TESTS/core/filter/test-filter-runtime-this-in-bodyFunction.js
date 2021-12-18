// test-filter-runtime-this-in-bodyFunction.js
//
// Ensure that the this reference is set correctly as expected inside of a developer-defined bodyFunction

const testFilterRuntime = require("./runner-filter-runtime");

var testModule = require("./module-under-test");
var createFilter = testModule("arc_core_filter_create");

testFilterRuntime({
    testName: "this in bodyFunction #1",
    validConfig: true,
    filterGenerator: function() {
        return createFilter({
            operationID: "axoFRJGBQZOZd6oGyPx4NQ",
            operationName: "Test This In Filter #1",
            operationDescription: "See if we can use the this reference inside a filter's bodyFunction (defined as regular function).",
            inputFilterSpec: { ____accept: "jsUndefined" },
            outputFilterSpec: { ____accept: "jsString" },
            bodyFunction: function(request_) {
                return { error: null, result: `The operationID of this filter is "${this.filterDescriptor.operationID}".` };
            }
        });
    },
    expectedResults: {
        error: null,
        result: '"The operationID of this filter is \\"axoFRJGBQZOZd6oGyPx4NQ\\"."'
    }
});

testFilterRuntime({
    testName: "this in bodyFunction #2",
    validConfig: false,
    filterGenerator: function() {
        return createFilter({
            operationID: "-zCoGozxTq2DL458ymdcMQ",
            operationName: "Test This In Filter #1",
            operationDescription: "See if we can use the this reference inside a filter's bodyFunction (defined as arrow function).",
            inputFilterSpec: { ____accept: "jsUndefined" },
            outputFilterSpec: { ____accept: "jsString" },
            bodyFunction: (request_) =>  {
                const response = { error: null };
                try {
                    response.result = `The operationID of this filter is "${this.filterDescriptor.operationID}".`
                } catch (exception_) {
                    response.error = exception_.message;
                }
                return response;
            }
        });
    },
    expectedResults: {
        error: 'Filter [-zCoGozxTq2DL458ymdcMQ::Test This In Filter #1] failed while performing main operation. Cannot read property \'operationID\' of undefined'
    }
});
