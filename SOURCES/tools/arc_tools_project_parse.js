
var TOOLSLIB = require('./arc_tools_lib');

var FILTERLIB = TOOLSLIB.arccore.filter;

var filterlibResponse = FILTERLIB.create({

    operationID: "okYViiI-TFampiKJ28nQ4Q",
    operationName: "ARC Project Parser",
    operationDescription: "Parses a serialized ARC Project JSON document.",

    inputFilterSpec: {
        ____label: "ARC Project Descriptor",
        ____description: "Configuration data for Encapsule arc_* command line tools suite.",
        ____types: "jsObject",
        ____defaultValue: {},
        name: {
            ____accept: "jsString",
            ____defaultValue: "",
        },
        description: {
            ____accept: "jsString",
            ____defaultValue: "",
        },
        agent: {
            ____types: "jsObject",
            ____defaultValue: {},
            name: {
                ____accept: "jsString",
                ____defaultValue: TOOLSLIB.meta.name,
            },
            version: {
                ____accept: "jsString",
                ____defaultValue: TOOLSLIB.meta.version,
            }
        },
        options: {
            ____types: "jsObject",
            ____defaultValue: {}
        },
        directories: {
            ____types: "jsArray",
            ____defaultValue: [],
            element: {
                ____accept: "jsString"
            }
        }
    },
    bodyFunction: function (request_) {
        return { error: null, result: request_ };
    },

    outputFilterSpec: {
        ____opaque: true
    }
});

if (filterlibResponse.error) {
    throw new Error(filterlibResponse.error);
}

module.exports = filterlibResponse.result;
