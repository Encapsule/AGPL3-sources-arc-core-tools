var testModule = require('./module-under-test');
var FILTERLIB = testModule('arc_core_filter');

module.exports = testFilter = {

    test1: FILTERLIB.create({
        operationID: "6UirSEewQLiM6VY_Uo1hSA",
        operationName: "test1",
        inputFilterSpec: {
            ____accept: 'jsString'
        }
    }),

    test2: FILTERLIB.create({
        operationID: "uiVVIMuAQlW2qkbbP9FE6w",
        operationName: "test2",
        inputFilterSpec: {
            ____types: 'jsObject',
            x: {
                ____types: 'jsNumber'
            }
        }
    }),

    test3: FILTERLIB.create({
        operationID: "tKTz14sOR4OlXpBr_zZbdA",
        operationName: "test3",
        inputFilterSpec: {
            ____types: 'jsObject',
            x: {
                ____types: 'jsString'
            },
            y: {
                ____types: 'jsNumber'
            }
        }
    }),

    test4: FILTERLIB.create({
        operationID: "03es-GM8QdKRj0HDoOMpUQ",
        operationName: "test4",
        inputFilterSpec: {
            ____types: 'jsObject',
            x: {
                ____types: 'jsString'
            },
            y: {
                ____types: 'jsArray',
                element: {
                    ____types: 'jsNumber'
                }
            }
        }
    }),

    test5: FILTERLIB.create({
        operationID: "g_o9FSClQ52TqyJ9tESGzg",
        operationName: "test5",
        inputFilterSpec: {
            ____types: 'jsObject',
            myFunction: {
                ____accept: 'jsFunction'
            }
        }
    }),

    test6: FILTERLIB.create({
        operationID: "4Q2moYjNSEmPFkvI7Pe80g",
        operationName: "test6",
        inputFilterSpec: {
            ____types: 'jsArray',
            element: {
                ____accept: "jsString"
            }
        }
    }),

    test7: FILTERLIB.create({
        operationID: "JuBl8bGITD2zX1wRaqPRUQ",
        operationName: "test7",
        inputFilterSpec: {
            ____types: 'jsArray',
            ____defaultValue: []
        }
    }),

    test8: FILTERLIB.create({
        operationID: "5A8kjaoaSs-obvqvSkNc8g",
        operationName: "test8",
        inputFilterSpec: {
            ____types: [ 'jsUndefined', 'jsObject' ],
            x: {
                ____accept: "jsString"
            }
        }
    }),

    testColor1: FILTERLIB.create({
        operationID: "0BN_zKZnSnmkhuhkFYTpCQ",
        operationName: "test9",
        inputFilterSpec: {
            ____types: "jsObject",
            yellow: {
                ____accept: "jsString"
            },
            blue: {
                ____types: "jsObject",
                green: {
                    ____accept: "jsString"
                }
            }
        }
    }),

    testColor2: FILTERLIB.create({
        operationID: "1xEOwIdXT260V-M5zWYSNg",
        operationName: "test10",
        inputFilterSpec: {
            ____types: "jsObject",
            blue: {
                ____types: "jsNumber"
            }
        }
    }),

    testColor3: FILTERLIB.create({
        operationID: "dyOir4HZSl2lBQCXqB2eWA",
        operationName: "test11",
        inputFilterSpec: {
            ____types: "jsObject",
            green: {
                ____accept: "jsString"
            },
            blue: {
                ____types: "jsObject",
                red: {
                    ____accept: "jsFunction"
                }
            }
        }
    }),

    testDefaultValueHandling1: FILTERLIB.create({
        operationID: "1L3mkL33TLaxbagz6iJmPg",
        operationName: "Default value test filter #1",
        inputFilterSpec: {
            ____types: "jsObject",
            testInput1: {
                ____types: "jsObject"
            },
            styles: {
                ____types: "jsObject",
                ____defaultValue: {},
                x: {
                    ____accept: "jsString",
                    ____defaultValue: "this is the default value of x"
                }
            }
        }
    }),

    testDefaultValueHandling2: FILTERLIB.create({
        operationID: "N3CjJ8DwT9qMpK0d7qAWlg",
        operationName: "Default value test filter #2",
        inputFilterSpec: {
            ____types: "jsObject",
            testInput2: {
                ____types: "jsObject"
            },
            styles: {
                ____types: "jsObject",
                ____defaultValue: {},
                z: {
                    ____accept: "jsString",
                    ____defaultValue: "this is the default value of z"
                }
            }
        }
    }),

    // Added to v0.1.3-derived branch after releasing what I think is an inadequate patch for discriminator in v0.1.4
    testSameFilterDifferentId1: FILTERLIB.create({
        operationID: "EFlOt5aQTwW7ysFmD5th4A",
        operationName: "Same Filter Different ID #1",
        inputFilterSpec: {
            ____types: "jsObject"
        }
    }),

    testSameFilterDifferentId2: FILTERLIB.create({
        operationID: "mUYaCIQJRa21n-xFQJGUVg",
        operationName: "Same Filter Different ID #2",
        inputFilterSpec: {
            ____types: "jsObject"
        }
    }),

    testSameFilterDifferentId3a: FILTERLIB.create({
        operationID: "ImalngYZTISWB_r_EKkt0A",
        operationName: "Same Filter Different ID #3a",
        inputFilterSpec: {
            ____types: "jsObject",
            x: { ____accept: "jsString" }
        }
    }),

    testSameFilterDifferentId3b: FILTERLIB.create({
        operationID: "2aHh-mEnTAawx-1ag2l45A",
        operationName: "Same Filter Different ID #3b",
        inputFilterSpec: {
            ____types: "jsObject",
        }
    }),

    testSameFilterDifferentId3c: FILTERLIB.create({
        operationID: "-c8LsY_6QTKK5c4XPGMfog",
        operationName: "Same Filter Different ID #3c",
        inputFilterSpec: {
            ____types: "jsObject",
            x: { ____accept: "jsString" }
        }
    }),

    testSameFilterDifferentId3d: FILTERLIB.create({
        operationID: "NyQTC1yVQt6BjkkCFGwXGg",
        operationName: "Same Filter Different ID #3d",
        inputFilterSpec: {
            ____types: "jsObject",
            z: { ____accept: "jsString" }
        }
    })

};
