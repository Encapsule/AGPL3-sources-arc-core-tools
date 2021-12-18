// test-nff-runtime-namespace-defaults.js

var assert = require('chai');
var testModule = require('./module-under-test');

var createFilter = testModule('arc_core_filter_create');
var testFilterRuntime = require('./runner-filter-runtime');

var generateTestFilter_Opaque1 = function() {
    var functionObject = createFilter({
        operationID: 'ehfojdskgkafhodjfqjhdQ',
        operationName: "Default value #1",
        inputFilterSpec: {
            ____opaque: true,
        },
        bodyFunction: function(request_) {
            var message = "The bodyFunction was passed request='" +
                JSON.stringify(request_) + "'.";
            return { error: null, result: message };
        }
    });
    return functionObject;
};


testFilterRuntime({
    testName: "Filter runtime top-level default value test #1 (no request)",
    validConfig: true,
    filterGenerator: generateTestFilter_Opaque1,
    expectedResults: {
        error: null,
        result: '"The bodyFunction was passed request=\'undefined\'."'
    }
});

testFilterRuntime({
    testName: "Filter runtime top-level default value test #2 (empty request object)",
    validConfig: true,
    filterGenerator: generateTestFilter_Opaque1,
    request: "HEY",
    expectedResults: {
        error: null,
        result: '"The bodyFunction was passed request=\'\\"HEY\\"\'."'
    }
});

var generateTestFilter_Namespace1 = function() {
    var functionObject = createFilter({
        operationID: 'ehfojdskgkafhodjfqjhdQ',
        operationName: "Default value #1",
        inputFilterSpec: {
            ____types: 'jsObject',
            ____defaultValue: { y: "default value" }
        },
        bodyFunction: function(request_) {
            var message = "The bodyFunction was passed request='" +
                JSON.stringify(request_) + "'.";
            return { error: null, result: message };
        }
    });
    return functionObject;
};

testFilterRuntime({
    testName: 'Namespace 1 test 1',
    validConfig: true,
    filterGenerator: generateTestFilter_Namespace1,
    expectedResults: {
        error: null,
        // Note that we expect the y property to get dropped:
        // The input type map specifies only an object w/no properties.
        result: '"The bodyFunction was passed request=\'{}\'."'
    }
});

testFilterRuntime({
    testName: 'Namespace 1 test 2',
    validConfig: true,
    filterGenerator: generateTestFilter_Namespace1,
    request: { x: 'will get ignored' },
    expectedResults: {
        error: null,
        // Note that we expect the y property to get dropped:
        // The input type map specifies only an object w/no properties.
        result: '"The bodyFunction was passed request=\'{}\'."'
    }
});

var generateTestFilter_Namespace2 = function() {
    var functionObject = createFilter({
        operationID: 'ehfojdskgkafhodjfqjhdQ',
        operationName: "Default value #1",
        inputFilterSpec: {
            ____types: 'jsObject',
            ____defaultValue: {},
            y: {
                ____types: 'jsString',
                ____defaultValue: "you didn't specify a value for 'y' so we filled one in for you."
            }
        },
        bodyFunction: function(request_) {
            var message = "The bodyFunction was passed request='" +
                JSON.stringify(request_) + "'.";
            return { error: null, result: message };
        }
    });
    return functionObject;
};

testFilterRuntime({
    testName: 'Filter Namespace 2 missing request',
    validConfig: true,
    filterGenerator: generateTestFilter_Namespace2,
    expectedResults: {
        error: null,
        result: '"The bodyFunction was passed request=\'{\\"y\\":\\"you didn\'t specify a value for \'y\' so we filled one in for you.\\"}\'."'
    }
});

testFilterRuntime({
    testName: 'Filter Namespace 2 invalid request type',
    validConfig: false,
    filterGenerator: generateTestFilter_Namespace2,
    request: [ "apple", "orange" ],
    expectedResults: {
        error: 'Filter [ehfojdskgkafhodjfqjhdQ::Default value #1] failed while normalizing request input. Error at path \'~\': Value of type \'jsArray\' not in allowed type set [jsObject].',
        result: null
    }
});

testFilterRuntime({
    testName: 'Filter Namespace 2 empty request object',
    validConfig: true,
    filterGenerator: generateTestFilter_Namespace2,
    request: {},
    expectedResults: {
        error: null,
        result: '"The bodyFunction was passed request=\'{\\"y\\":\\"you didn\'t specify a value for \'y\' so we filled one in for you.\\"}\'."'
    }
});

testFilterRuntime({
    testName: 'Filter Namespace 2 request.y property wrong type',
    validConfig: false,
    filterGenerator: generateTestFilter_Namespace2,
    request: { y: [] },
    expectedResults: {
        error: 'Filter [ehfojdskgkafhodjfqjhdQ::Default value #1] failed while normalizing request input. Error at path \'~.y\': Value of type \'jsArray\' not in allowed type set [jsString].',
        result: null
    }
});

testFilterRuntime({
    testName: 'Filter Namespace 2 request.y property valid value',
    validConfig: true,
    filterGenerator: generateTestFilter_Namespace2,
    request: { y: 'input data explicitly sets y' },
    expectedResults: {
        error: null,
        result: '"The bodyFunction was passed request=\'{\\"y\\":\\"input data explicitly sets y\\"}\'."'
    }
});

// ==========================================================================
var generateTestFilter_Namespace3 = function() {
    var functionObject = createFilter({
        operationID: 'ehfojdskgkafhodjfqjhdQ',
        inputFilterSpec: {
            ____types: 'jsObject',
            ____defaultValue: { y: "default value stream merged at outer request object." },
            y: {
                ____types: 'jsString',
                ____defaultValue: "default value stream merged at 'y' property."
            }
        },
        bodyFunction: function(request_) {
            var message = "The bodyFunction was passed request='" +
                JSON.stringify(request_) + "'.";
            return { error: null, result: message };
        }
    });
    return functionObject;
};




testFilterRuntime({
    testName: 'Advanced defaults triggers case #1',
    validConfig: true,
    filterGenerator: generateTestFilter_Namespace3,
    expectedResults: {
        error: null,
        result: '"The bodyFunction was passed request=\'{\\"y\\":\\"default value stream merged at outer request object.\\"}\'."'
    }
});

testFilterRuntime({
    testName: 'Advanced defaults triggers case #2',
    validConfig: true,
    filterGenerator: generateTestFilter_Namespace3,
    request: {},
    expectedResults: {
        error: null,
        result: '"The bodyFunction was passed request=\'{\\"y\\":\\"default value stream merged at \'y\' property.\\"}\'."'
    }
});

testFilterRuntime({
    testName: 'Advanced defaults triggers case #3',
    validConfig: true,
    filterGenerator: generateTestFilter_Namespace3,
    request: { y: "value set explicitly in input data." },
    expectedResults: {
        error: null,
        result: '"The bodyFunction was passed request=\'{\\"y\\":\\"value set explicitly in input data.\\"}\'."'
    }
});


// ==========================================================================
var generateTestFilter_Namespace4 = function() {
    var functionObject = createFilter({
        operationID: "4PlhPwvcQ5axocAL5M_-AQ",
        inputFilterSpec: {
            ____accept: [ 'jsObject' ],
            ____defaultValue: { partOfDefaultObject: "This value should be used iff filter input is undefined." }
        },
        bodyFunction: function(request_) {
            var message = "The bodyFunction was passed request='" + JSON.stringify(request_) + "'.";
            return { error: null, result: message };
        }
    });
    return functionObject;
};

testFilterRuntime({
    testName: 'Advanced defaults triggers case #4a',
    validConfig: true,
    filterGenerator: generateTestFilter_Namespace4,
    request: undefined,
    expectedResults: {
        error: null,
        result: '"The bodyFunction was passed request=\'{\\"partOfDefaultObject\\":\\"This value should be used iff filter input is undefined.\\"}\'."'

    }
});

testFilterRuntime({
    testName: 'Advanced defaults triggers case #4b',
    validConfig: true,
    filterGenerator: generateTestFilter_Namespace4,
    request: {},
    expectedResults: {
        error: null,
        result: '"The bodyFunction was passed request=\'{}\'."'

    }
});

testFilterRuntime({
    testName: 'Advanced defaults triggers case #4c',
    validConfig: true,
    filterGenerator: generateTestFilter_Namespace4,
    request: { whatever: "Seriously" },
    expectedResults: {
        error: null,
        result: '"The bodyFunction was passed request=\'{\\"whatever\\":\\"Seriously\\"}\'."'

    }
});

testFilterRuntime({
    testName: 'Advanced defaults triggers case #4d (invalid input type)',
    validConfig: false,
    filterGenerator: generateTestFilter_Namespace4,
    request: null,
    expectedResults: {
        error: 'Filter [4PlhPwvcQ5axocAL5M_-AQ::unnamed] failed while normalizing request input. Error at path \'~\': Value of type \'jsNull\' not in allowed type set [jsObject].',
        result: null

    }
});

// ==========================================================================
var generateTestFilter_Namespace5 = function() {
    var functionObject = createFilter({
        operationID: "4PlhPwvcQ5axocAL5M_-AQ",
        inputFilterSpec: {
            ____types: [ 'jsObject' ],
            ____defaultValue: { y: "This is the default value of y set by the outer object." },
            y: {
                ____accept: [ 'jsString' ],
                ____defaultValue: "This is the default value of y set by y itself."
            }
        },
        bodyFunction: function(request_) {
            var message = "The bodyFunction was passed request='" + JSON.stringify(request_) + "'.";
            return { error: null, result: message };
        }
    });
    return functionObject;
};

testFilterRuntime({
    testName: 'Advanced defaults triggers case #5a (request undefined -> should use default value)',
    validConfig: true,
    filterGenerator: generateTestFilter_Namespace5,
    request: undefined,
    expectedResults: {
        error: null,
        result: '"The bodyFunction was passed request=\'{\\"y\\":\\"This is the default value of y set by the outer object.\\"}\'."',
    }
});

testFilterRuntime({
    testName: 'Advanced defaults triggers case #5b (request specifies outer object but not inner -> should use inner default)',
    validConfig: true,
    filterGenerator: generateTestFilter_Namespace5,
    request: {},
    expectedResults: {
        error: null,
        result: '"The bodyFunction was passed request=\'{\\"y\\":\\"This is the default value of y set by y itself.\\"}\'."'
    }
});

testFilterRuntime({
    testName: 'Advanced defaults triggers case #5c (request specifies outer object w/superflous subnamespaces but not inner namespace -> should use inner default)',
    validConfig: true,
    filterGenerator: generateTestFilter_Namespace5,
    request: { whatever: "Seriously, because this isn't in the filter spec it's superfluous" },
    expectedResults: {
        error: null,
        result: '"The bodyFunction was passed request=\'{\\"y\\":\\"This is the default value of y set by y itself.\\"}\'."'
    }
});

testFilterRuntime({
    testName: 'Advanced defaults triggers case #5d (request specifies outer object w/superflous subnamespaces but not inner namespace -> should use inner default)',
    validConfig: true,
    filterGenerator: generateTestFilter_Namespace5,
    request: { y: "This is an actual value specified in the request." },
    expectedResults: {
        error: null,
        result: '"The bodyFunction was passed request=\'{\\"y\\":\\"This is an actual value specified in the request.\\"}\'."'
    }
});

testFilterRuntime({
    testName: 'Advanced defaults triggers case #5e (invalid input type)',
    validConfig: false,
    filterGenerator: generateTestFilter_Namespace5,
    request: null,
    expectedResults: {
        error: 'Filter [4PlhPwvcQ5axocAL5M_-AQ::unnamed] failed while normalizing request input. Error at path \'~\': Value of type \'jsNull\' not in allowed type set [jsObject].',
        result: null

    }
});





// ==========================================================================
var generateTestFilter_Namespace6 = function() {
    var functionObject = createFilter({
        operationID: "4PlhPwvcQ6axocAL6M_-AQ",
        inputFilterSpec: {
            ____types: "jsObject",
            ep: {
                ____accept: [ "jsObject" ],
                ____defaultValue: { HelloWorld: { Whatever: { Test: "this string is embededed in a nested default value" } } }
            }
        },
        bodyFunction: function(request_) {
            var message = "The bodyFunction was passed request='" + JSON.stringify(request_) + "'.";
            return { error: null, result: message };
        }
    });
    return functionObject;
};

testFilterRuntime({
    testName: 'Advanced defaults triggers case #6a (invalid undefined input)',
    validConfig: false,
    filterGenerator: generateTestFilter_Namespace6,
    request: undefined,
    expectedResults: {
        error: 'Filter [4PlhPwvcQ6axocAL6M_-AQ::unnamed] failed while normalizing request input. Error at path \'~\': Value of type \'jsUndefined\' not in allowed type set [jsObject].',
        result: null

    }
});

testFilterRuntime({
    testName: 'Advanced defaults triggers case #6b (outer object specified, inner object not specified -> should specify default value)',
    validConfig: true,
    filterGenerator: generateTestFilter_Namespace6,
    request: {},
    expectedResults: {
        error: null,
        result: '"The bodyFunction was passed request=\'{\\"ep\\":{\\"HelloWorld\\":{\\"Whatever\\":{\\"Test\\":\\"this string is embededed in a nested default value\\"}}}}\'."'
    }
});

testFilterRuntime({
    testName: 'Advanced defaults triggers case #6c (outer object specified, inner object specified -> should override default value)',
    validConfig: true,
    filterGenerator: generateTestFilter_Namespace6,
    request: { ep: { WhateverIWant: "Because this is an accept namespace." } },
    expectedResults: {
        error: null,
        result: '"The bodyFunction was passed request=\'{\\"ep\\":{\\"WhateverIWant\\":\\"Because this is an accept namespace.\\"}}\'."'
    }
});

testFilterRuntime({
    testName: 'Advanced defaults triggers case #6d (invalid input type)',
    validConfig: false,
    filterGenerator: generateTestFilter_Namespace6,
    request: null,
    expectedResults: {
        error: 'Filter [4PlhPwvcQ6axocAL6M_-AQ::unnamed] failed while normalizing request input. Error at path \'~\': Value of type \'jsNull\' not in allowed type set [jsObject].',
        result: null

    }
});


// ==========================================================================
// This is an example from a derived application
var generateTestFilter_Namespace7 = function() {
    var functionObject = createFilter({
        operationID: "4PlhPwvcQ7axocAL7M_-AQ",
        inputFilterSpec: {
            ____types: "jsObject",
            RUXBase_Page: {
                ____label: "RUXBase_Page HTML View Render Request",
                ____description: "HTML render request format for <RUXBase_Page/> React component.",
                ____types: "jsObject",

                pageHeaderEP: {
                    ____label: "Page Header Extension Point (EP)",
                    ____description: "The contents of this namespace is rendered dynamically via <ComponentRouter/>.",
                    ____accept: "jsObject",
                    ____defaultValue: { RUXBase_PageHeader: {} }
                },

                pageContentEP: {
                    ____label: "Page Content Extension Point (EP)",
                    ____description: "The contents of this namespace is rendered dynamically via <ComponentRouter/>.",
                    ____accept: [ "jsObject" ],
                    ____defaultValue: { RUXBase_PageContent: {} }
                },

                pageFooterEP: {
                    ____label: "Page Footer Extension Point (EP)",
                    ____description: "The contents of this namespace is rendered dynamically via <ComponentRouter/>.",
                    ____accept: [ "jsObject" ],
                    ____defaultValue: { RUXBase_PageFooter: {} }
                },

                pageDebugEP: {
                    ____label: "Page Debug Extenion Point (EP)",
                    ____description: "The contents of this namespace is rendered dynamically via <ComponentRouter/>.",
                    ____accept: "jsObject",
                    ____defaultValue: { RUXBase_PageDebugWidget: {} }
                }
            }
        },
        bodyFunction: function(request_) {
            var message = "The bodyFunction was passed request='" + JSON.stringify(request_) + "'.";
            return { error: null, result: message };
        }
    });
    return functionObject;
};

testFilterRuntime({
    testName: 'Advanced defaults triggers case #7a (invalid undefined input)',
    validConfig: false,
    filterGenerator: generateTestFilter_Namespace7,
    request: undefined,
    expectedResults: {
        error: 'Filter [4PlhPwvcQ7axocAL7M_-AQ::unnamed] failed while normalizing request input. Error at path \'~\': Value of type \'jsUndefined\' not in allowed type set [jsObject].',
        result: null

    }
});

testFilterRuntime({
    testName: 'Advanced defaults triggers case #7b (outer object specified -> should specify default value)',
    validConfig: true,
    filterGenerator: generateTestFilter_Namespace7,
    request: { RUXBase_Page: {} },
    expectedResults: {
        error: null,
        result: '"The bodyFunction was passed request=\'{\\"RUXBase_Page\\":{\\"pageHeaderEP\\":{\\"RUXBase_PageHeader\\":{}},\\"pageContentEP\\":{\\"RUXBase_PageContent\\":{}},\\"pageFooterEP\\":{\\"RUXBase_PageFooter\\":{}},\\"pageDebugEP\\":{\\"RUXBase_PageDebugWidget\\":{}}}}\'."'
    }
});

testFilterRuntime({
    testName: 'Advanced defaults triggers case #7c (outer object specified, inner object specified -> should override default value)',
    validConfig: true,
    filterGenerator: generateTestFilter_Namespace7,
    request: { RUXBase_Page: { pageContentEP: { Test: { x: "some data" } } } },
    expectedResults: {
        error: null,
        result: '"The bodyFunction was passed request=\'{\\"RUXBase_Page\\":{\\"pageHeaderEP\\":{\\"RUXBase_PageHeader\\":{}},\\"pageContentEP\\":{\\"Test\\":{\\"x\\":\\"some data\\"}},\\"pageFooterEP\\":{\\"RUXBase_PageFooter\\":{}},\\"pageDebugEP\\":{\\"RUXBase_PageDebugWidget\\":{}}}}\'."'
    }
});

