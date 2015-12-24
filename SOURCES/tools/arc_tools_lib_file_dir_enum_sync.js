
var FS = require('fs');
var PATH = require('path');
var ARC_CORE = require('../arccore');

var response = ARC_CORE.filter.create({

    operationID: "eftlEdnnQW2SXkDtcCHdig",
    operationName: "Synchronous File & Directory Enumerator",
    operationDescription: "Synchronous lookup of subdirectory and file paths of the indicated directory (or current working directory if none is specified).",

    inputFilterSpec: {
        ____label: "Enumerate Subdirectory Request",
        ____description: "Enumerate subdirectory and files request object.",
        ____types: "jsObject",
        ____defaultValue: {},
        parentDirectory: {
            ____label: "Input Directory Path",
            ____description: "Input directory path string or undefined to use the current working directory for the search.",
            ____accept: [ "jsUndefined", "jsString" ]
        },
        fileCallback: {
            ____label: "File Callback",
            ____description: "Optional callback for determining if a file path should be included in the search results. Return true to include, false to exclude.",
            ____accept: [ "jsUndefined", "jsFunction" ]
        }
    },

    bodyFunction: function (request_) {
        var response = { error: null, result: null };
        var errors = []
        var inBreakScope = false;
        while (!inBreakScope) {
            inBreakScope = true;
            result = {
                parentDirectory: null,
                subDirectories: [],
                files: []
            };
            if (request_.parentDirectory) {
                if (!FS.existsSync(request_.parentDirectory)) {
                    errors.unshift("The indicated path '" + request_.parentDirectory + "' does not exist.");
                    break;
                }
                if (!FS.statSync(request_.parentDirectory).isDirectory()) {
                    errors.unshift("The indicated path '" + request_.parentDirectory + "' is not a directory.");
                    break;
                }
                var baseDirectory = request_.parentDirectory;
                if (!PATH.isAbsolute(baseDirectory)) {
                    baseDirectory = PATH.join(process.cwd(), baseDirectory);
                }
                result.parentDirectory = PATH.normalize(baseDirectory);
            } else {
                result.parentDirectory = process.cwd();
            }
            directoryStack = [ result.parentDirectory ];
            while (directoryStack.length) {
                directory = directoryStack.shift()
                filenames = FS.readdirSync(directory) || [];
                filenames.forEach(function(filename_) {
                    var filePath = PATH.join(directory, filename_);
                    if (FS.statSync(filePath).isDirectory()) {
                        result.subDirectories.push(filePath);
                        directoryStack.push(filePath);
                    } else {
                        if (request_.fileCallback) {
                            var include = request_.fileCallback(filePath);
                            if (include === true) {
                                result.files.push(filePath);
                            }
                        }
                    }
                });
            }
            response.result = result;
            break;
        }
        if (errors.length) {
            response.error = errors.join(" ");
        }
        return response;
    },

    outputFilterSpec: {
        ____label: "Subdirectory Paths",
        ____description: "An array of subdirectory paths associated with the indicated parent directory path.",
        ____types: "jsObject",
        parentDirectory: {
            ____label: "Parent Directory",
            ____description: "The directory the search was performed from.",
            ____accept: "jsString"
        },
        subDirectories: {
            ____label: "Subdirectory Array",
            ____description: "An array of subdirectory paths discovered within the parent directory.",
            ____types: "jsArray",
            path: {
                ____label: "Subdirectory Path",
                ____description: "A subdirectory path string.",
                ____accept: "jsString"
            }
        },
        files: {
            ____label: "Files Array",
            ____description: "An array of file paths accepted by your optional file handler callback.",
            ____types: "jsArray",
            path: {
                ____label: "Subdirectory Path",
                ____description: "A subdirectory path string.",
                ____accept: "jsString"
            }
        }
    }
});

if (response.error) {
    throw new Error(response.error);
}

module.exports = response.result;
