
var ARCCORE = require('../arccore');
FILTERLIB = ARCCORE.filter;
HANDLEBARS  = require('handlebars');

var filterlibResponse = FILTERLIB.create({
    operationID: "Unymh9rRTVaBHGah531gmQ",
    operationName: "Filter Documentation Generator",
    operationDescription: "Generates human-readable documentation from a Filter instance.",

    inputFilterSpec: {
        ____label: "Filter Doc Generator Request",
        ____description: "Input Filter and options request object.",
        ____types: "jsObject",
        filter: {
            ____label: "Input Filter Instance",
            ____description: "A reference to the Filter object to document.",
            ____types: "jsObject",
            filterDescriptor: {
                ____label: "Filter Runtime Parameters",
                ____description: "Internal representation of the filter's runtime contraints.",
                ____accept: "jsObject"
            }
        },
        template: {
            ____label: "Filter Documentation Template",
            ____description: "A handlebars template to be populated with data extracted from the Filter.",
            ____accept: "jsString"
        }
    },

    bodyFunction: function(request_) {
        var response = { error: null, result: null };
        var errors = [];
        var inBreakScope = false;
        while (!inBreakScope) {
            inBreakScope = true;
            try {
                var compiledTemplate = HANDLEBARS.compile(request_.template);
                var document = compiledTemplate(request_.filter);
                response.result = document;
            } catch (error_) {
                errors.unshift(error_.toString());
                errors.unshift("Fatal exception while attempting generate document:");
            }
            break;
        }
        if (errors.length) {
            response.error = errors.join(" ");
        }
        return response;
    },

    outputFilterSpec: {
        ____label: "Filter Documentation",
        ____description: "Human-readable Filter function documentation",
        ____accept: "jsString"
    }


});

if (filterlibResponse.error) {
    throw new Error(filterlibResponse.error);
};

module.exports = filterlibResponse.result;
