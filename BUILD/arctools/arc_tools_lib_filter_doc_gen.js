
var ARCCORE = require('../arccore');
var FILTERLIB = ARCCORE.filter;
var TYPELIB = ARCCORE.types;
var HANDLEBARS  = require('handlebars');

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
            ____description: "Handlebars template (as a UTF-8 string).",
            ____types: "jsString"
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
                templateContext.filterStages = {
                    input: request_.filter.filterDescriptor.inputFilterSpec?"enabled":"disabled",
                    body: request_.filter.filterDescriptor.bodyFunction?"enabled":"disabled",
                    response: request_.filter.filterDescriptor.bodyFunction?"enabled":"disabled",
                    output: request_.filter.filterDescriptor.outputFilterSpec?"enabled":"disabled"
                };
                templateContext.generator = "[Encapsule/arctools](https://github.com/Encapsule/arctools/) " + "v" + ARCCORE.__meta.version;
                templateContext.generatorDate = new Date().toString();
                var inputFilterSpec = request_.filter.filterDescriptor.inputFilterSpec;
                templateContext.inputJSON = inputFilterSpec?JSON.stringify(inputFilterSpec, undefined, 4):"input filter disabled";
                templateContext.inputSignature = inputFilterSpec?ARCCORE.identifier.irut.fromReference(inputFilterSpec).result:"input filter disabled";
                var outputFilterSpec = request_.filter.filterDescriptor.outputFilterSpec;
                templateContext.outputJSON = outputFilterSpec?JSON.stringify(outputFilterSpec, undefined, 4):"output filter disabled";
                templateContext.outputSignature = outputFilterSpec?ARCCORE.identifier.irut.fromReference(outputFilterSpec).result:"output filter disabled";
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
    "jsUndefined:jsUndefined:jsUndefined": "passthrough (noop)",
    "jsUndefined:jsUndefined:jsObject": "output shaper",
    "jsUndefined:jsFunction:jsUndefined": "unfiltered operation",
    "jsUndefined:jsFunction:jsObject": "output processor",
    "jsObject:jsUndefined:jsUndefined": "input shaper",
    "jsObject:jsUndefined:jsObject": "input/output shaper",
    "jsObject:jsFunction:jsUndefined": "input processor",
    "jsObject:jsFunction:jsObject": "normalized operation"
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
