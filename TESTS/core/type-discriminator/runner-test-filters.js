var testModule = require('./module-under-test');
var FILTERLIB = testModule('arc_core_filter');

module.exports = {

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
    })

};

console.log(JSON.stringify(module.exports,undefined,4));
