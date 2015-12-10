/*
----------------------------------------------------------------------
 
           +---+---+---+---+
 chaos --> | J | B | U | S | --> order
           +---+---+---+---+

Copyright (C) 2015 Encapsule.io Bellevue, WA USA

JBUS is licensed under the GNU Affero General Public License v3.0. 

Please consult the included LICENSE file for agreement terms.

----------------------------------------------------------------------
*/

var FS = require('fs');
var PATH = require('path');
var ARC_CORE = require('../arccore');

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
        while (!inBreakScope) {
            inBreakScope = true;
            var resource = undefined;
            var npath = request_
            if (!FS.existsSync(npath)) {
                errors.unshift("The indicated path '" + npath + "' does not exist.");
                break;
            }
            if (!FS.statSync(npath).isFile()) {
                errors.unshift("The indicated path '" + npath + "' is not a file.");
                break;
            }
            if (!PATH.isAbsolute(npath)) {
                npath = PATH.join(process.cwd(), npath);
            }
            npath = PATH.normalize(npath);
            var fileContents = FS.readFileSync(npath);
            try {
                eval('resource = ' + fileContents);
            } catch (error_) {
                errors.unshift(error_.toString());
                errors.unshift("Fatal exception executing JavaScript eval operator on filesystem path ` '" + npath + "':");
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
