
var FS = require('fs');
var PATH = require('path');
var ARC_CORE = require('../arccore');

var response = ARC_CORE.filter.create({

    operationID: "h3PzBZmHTCWs7os5SQsXxg",
    operationName: "Resource Writer",
    operationDescription: "Writes a string to the specified file on local filesystem.",

    inputFilterSpec: {
        ____label: "Resource Writer Request",
        ____description: "Resource writer request object.",
        ____types: "jsObject",
        resource: {
            ____label: "Resource String",
            ____description: "Resource string to write to file.",
            ____accept: "jsString"
        },
        path: {
            ____label: "Filesystem Resource Path",
            ____description: "Local filesystem path to the JavaScript file resource to load.",
            ____accept: "jsString"
        }
    },

    bodyFunction: function(request_) {
        var response = { error: null, result: null };
        var errors = [];
        var inBreakScope = false;
        while (!inBreakScope) {
            inBreakScope = true;
            var resource = undefined;
            var npath = request_.path
            if (!PATH.isAbsolute(npath)) {
                npath = PATH.join(process.cwd(), npath);
            }
            npath = PATH.normalize(npath);

            try {
                FS.writeFileSync(npath, request_.resource);
            } catch (error_) {
                errors.unshift(error_.toString());
            }

            if (errors.length) {
                break;
            } else {
                response.result = {
                    origin: npath,
                    resource: resource
                };
            }
            break;
        }
        if (errors.length) {
            response.error = errors.join(" ");
        }
        return response;
    }


});

if (response.error) {
    throw new Error(response.error);
}

module.exports = response.result;
