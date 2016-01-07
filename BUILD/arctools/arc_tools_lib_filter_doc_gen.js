
var ARCCORE = require('../arccore');
FILTERLIB = ARCCORE.filter;
TYPELIB = ARCCORE.types;
HANDLEBARS  = require('handlebars');

var filterClassificationTable = {
    "jsUndefined:jsUndefined:jsUndefined": "passthrough (NOOP)",
    "jsUndefined:jsUndefined:jsObject":    "response normalizer",
    "jsUndefined:jsFunction:jsUndefined":  "unfiltered operation",
    "jsUndefined:jsFunction:jsObject":     "subsystem output stage",
    "jsObject:jsUndefined:jsUndefined":    "input normalizer",
    "jsObject:jsUndefined:jsObject":       "response shaper operation",
    "jsObject:jsFunction:jsUndefined":     "subsystem input stage",
    "jsObject:jsFunction:jsObject":        "normalized operation"
};

var getFilterClassification = function(filterDescriptor_) {
    var key = [];
    var tr = TYPELIB.convert({from: "jsReference", to: "jsMoniker", value: filterDescriptor_.inputFilterSpec});
    if (tr.error) {
        return { error: tr.error };
    }
    key.push(tr.result);
    var tr = TYPELIB.convert({from: "jsReference", to: "jsMoniker", value: filterDescriptor_.bodyFunction});
    if (tr.error) {
        return { error: tr.error };
    }
    key.push(tr.result);
    var tr = TYPELIB.convert({from: "jsReference", to: "jsMoniker", value: filterDescriptor_.outputFilterSpec});
    if (tr.error) {
        return { error: tr.error };
    }
    key.push(tr.result);
    var classification = filterClassificationTable[key.join(":")];
    if (!classification) {
        return { error: "Classification lookup failed." };
    }
    return { error: null, result: classification };
};

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
            ____label: "Handlebars Template",
            ____description: "Optional handlebar template to override default generator behaviors.",
            ____types: "jsString",
            ____defaultValue: "# {{filterDescriptor.operationName}}\n\n" +
                "**operationID:** {{filterDescriptor.operationID}} / **classification:** {{filterClassification}}\n\n" +
                "## Summary\n\n" +
                "{{filterDescriptor.operationDescription}}\n\n" +
                "## Operation\n\n" +
                "A programatically-generated summary of the filter's behavior.\n\n" +
                "## Signature\n\n" +
                "### Request\n\n" +
                "```JavaScript\n" +
                "{{{inputSummary}}}\n" +
                "```\n\n" +
                "### Response\n\n" +
                "```JavaScript\n" +
                "{{{outputSummary}}}\n" +
                "```\n\n" +
                "<hr>\n\n" +
                "Generated with {{generator}}\n"
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
                var templateContext = {};
                templateContext.filterDescriptor = request_.filter.filterDescriptor;
                templateContext.filterClassification = getFilterClassification(request_.filter.filterDescriptor).result;
                templateContext.generator = "Encapsule/arctools v" + ARCCORE.__meta.version;
                templateContext.inputSummary = JSON.stringify(request_.filter.filterDescriptor.inputFilterSpec, undefined, 4);
                templateContext.outputSummary = JSON.stringify(request_.filter.filterDescriptor.outputFilterSpec, undefined, 4);

                var document = compiledTemplate(templateContext);
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
