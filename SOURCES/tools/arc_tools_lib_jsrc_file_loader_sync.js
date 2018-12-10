
var FS = require('fs');
var PATH = require('path');
var ARC_CORE = require('../arccore/arc_core');

var normalizePath = require('./arc_tools_lib_paths').normalizePath;

var response = ARC_CORE.filter.create({

    operationID: "PTKIgSxMRJ6C-3Tb53SF9w",
    operationName: "JavaScript Resource Loader",
    operationDescription: "Loads an external JavaScript or JSON file and returns a JavaScript reference.",

    inputFilterSpec: {
        ____label: "Filesystem Resource Path",
        ____description: "Local filesystem path to the JavaScript file resource to load.",
        ____accept: "jsString"
    },

    bodyFunction: function(request_) {
        var response = { error: null, result: null };
        var errors = [];
        var inBreakScope = false;
        var npath = request_;

        while (!inBreakScope) {
            inBreakScope = true;

            var resource = undefined;

            if (!FS.existsSync(npath)) {
                errors.unshift("does not exist.");
                break;
            }
            if (!FS.statSync(npath).isFile()) {
                errors.unshift("is not actually a file.");
                break;
            }

            npath = normalizePath(npath);

            var fileContents = FS.readFileSync(npath);

            var pathParse = PATH.parse(npath);
            switch (pathParse.ext) {
            case '.js':
                try {
                    eval('resource = ' + fileContents);
                } catch (error_) {
                    errors.unshift("cannot be loaded via JavaScript eval operator due to error '" + error_.toString() + "'.");
                }
                break;
            case '.json':
                try {
                    resource = JSON.parse(fileContents);
                } catch (error_) {
                    errors.unshift("cannot be loaded via JSON.parse due to error '" + error_.toString() + "'.");
                }
                break;
            default:
                try {
                    resource = fileContents.toString('utf8');
                } catch (error_) {
                    errors.unshift("cannot be converted to a UTF-8 string (default handling for file extension '#{pathParse.ext}'.");
                }
                break;
            }
            if (errors.length) {
                break;
            }
            response.result = {
                origin: npath,
                resource: resource
            };
            break;
        }
        if (errors.length) {
            errors.unshift("File '" + npath + "'");
            response.error = errors.join(" ");
        }
        return response;
    },

    outputFilterSpec: {
        ____label: "In-Memory JavaScript Resource",
        ____description: "An in-memory JavaScript resource loaded dynamically from a local file resource.",
        ____types: "jsObject",
        origin: {
            ____label: "Resource Path",
            ____description: "The local filesystem path from which the resource was loaded.",
            ____accept: "jsString"
        },
        resource: {
            ____label: "Resource",
            ____description: "In-memory JavaScript resource reference (variant type).",
            ____opaque: true
        }
    }

});

if (response.error) {
    throw new Error(response.error);
}

module.exports = response.result;
