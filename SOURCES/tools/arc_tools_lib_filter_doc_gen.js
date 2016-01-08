
var ARCCORE = require('../arccore');
FILTERLIB = ARCCORE.filter;
TYPELIB = ARCCORE.types;
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
        context: {
            ____label: "Document Context Descriptor",
            ____description: "Required and optional data to pass through to the handlebars template engine.",
            ____accept: "jsObject",
            ____defaultValue: {}
        },
        template: {
            ____label: "Handlebars Template",
            ____description: "Optional handlebar template to override default generator behaviors.",
            ____types: "jsString",
            ____defaultValue: "# {{filterDescriptor.operationName}}\n\n" +
                "Operation: **{{filterDescriptor.operationID}}**<br>\n" +
                "Input type: **{{inputSignature}}**<br>\n" +
                "Output type: **{{outputSignature}}**\n\n" +
                "## Description\n\n" +
                "{{filterDescriptor.operationDescription}}\n\n" +
                "## Request Input\n\n" +
                "Operation {{filterDescriptor.operationID}} is invoked via filter object method `request`.\n\n" +
                "### Input filter spec {{inputSignature}} JSON:\n\n" +
                "```JavaScript\n" +
                "{{{inputJSON}}}\n" +
                "```\n\n" +
                "## Response Output\n\n" +
                "All filters return a normalized response object with the following pseudo-object format:\n\n" +
                "```{ error: string | null, result: variant }```\n\n" +
                "Iff response.error is null then response.result is valid. Otherwise, response.error is a string explaining what went wrong.\n\n" +
                "Iff response.error is not null (i.e. an error occurred), then response.result may contain information that's useful for fault diagnosis.\n\n" +
                "If no error occurred the format of response.result is governed by this filter's output filter specification.\n\n" +
                "### Output filter spec {{outputSignature}} JSON:\n\n" +
                "```JavaScript\n" +
                "{{{outputJSON}}}\n" +
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
                templateContext.generator =
                    "[Encapsule/arctools](https://github.com/Encapsule/arctools/) " +
                    "v" + ARCCORE.__meta.version + " at " +
                    new Date().toString();
                templateContext.inputJSON = JSON.stringify(request_.filter.filterDescriptor.inputFilterSpec, undefined, 4);
                templateContext.inputSignature = ARCCORE.identifier.irut.fromReference(request_.filter.filterDescriptor.inputFilterSpec).result;
                templateContext.outputJSON = JSON.stringify(request_.filter.filterDescriptor.outputFilterSpec, undefined, 4);
                templateContext.outputSignature = ARCCORE.identifier.irut.fromReference(request_.filter.filterDescriptor.outputFilterSpec).result;

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
