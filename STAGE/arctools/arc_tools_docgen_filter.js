#!/usr/bin/env node

var toolName = "arccore_document_filter";

var FS = require('fs');
var PATH = require('path');
var TOOLSLIB = require('./arc_tools_lib');
var FILELOADER = TOOLSLIB.jsrcFileLoaderSync;

var chalk = TOOLSLIB.chalk;
var theme = TOOLSLIB.clistyles;

var exitCode = 0;
var exitProgram = false;
var errors = [];
var innerResponse;

console.log(TOOLSLIB.createToolBanner(toolName));

var program = TOOLSLIB.commander;
program
    .version(TOOLSLIB.meta.version)
    .description("ARC Filter document generator")
    .option('--about', "Print tool information and exit.")
    .option('-f, --filter <filename>', "CommonJS module filename that implements the filter to document (required).")
    .option('-t, --template <filename>', "Handlebars template to use to generate the documentation (optional).")
    .option('-o, --output <filename>', "Filename to write the generated document to. If ommitted, use stdout.")
    .option('--verbose', "Log diagnostic and informational messages to console.")
    .parse(process.argv);

if (program.about) {
    console.log(theme.infoBody(JSON.stringify(TOOLSLIB.meta, undefined, 4)));
    exitProgram = true;
}

while (!exitProgram) {
    exitProgram = true;
    if (!program.filter) {
        errors.unshift("Missing required --filter filename.");
        break;
    }
    var filterModulePath = TOOLSLIB.paths.normalizePath(program.filter);
    if (!FS.existsSync(filterModulePath)) {
        errors.unshift("Bad filter module path. '" + filterModulePath + "' does not exist.");
        break;
    }
    if (!FS.statSync(filterModulePath).isFile()) {
        errors.unshift("Bad filter module path. '" + filterModulePath + "' is not a file.");
        break;
    }

    var moduleResource = undefined;
    var templateResource = undefined;

    try {
        moduleResource = require(filterModulePath);
    } catch (error_) {
        errors.unshift(error_.toString());
        errors.unshift("Fatal exception attempting to `require` filter module '" + filterModulePath + "' into scope:");
        break;
    }
    if (!program.template) {
        var filterDocTemplatePath = PATH.resolve(__dirname, 'templates', 'filter.hbs');
        var loaderResponse = FILELOADER.request(filterDocTemplatePath);
        if (loaderResponse.error) {
            errors.unshift(loaderResponse.error);
            break;
        }
        templateResource = loaderResponse.result.resource;
    } else {
        templatePath = TOOLSLIB.paths.normalizePath(program.template);
        if (!FS.existsSync(templatePath)) {
            errors.unshift("Bad template path. '" + templatePath + "' does not exist.");
            break;
        }
        if (!FS.statSync(templatePath).isFile()) {
            errors.unshift("Bad template path. '" + templatePath + "' is not a file.");
            break;
        }
        var loaderResponse = FILELOADER.request(templatePath);
        if (loaderResponse.error) {
            errors.unshift(loaderResponse.error);
            break;
        }
        templateResource = loaderResponse.result.resource;
    }
    var generatorResponse = TOOLSLIB.filterDocGenerate.request({
        filter: moduleResource,
        template: templateResource
    });
    if (generatorResponse.error) {
        errors.unshift(generatorResponse.error);
        break;
    }

    console.log(generatorResponse.result);

    break;
}


// Epilogue

if (errors.length) {
    exitCode = 1;
    console.log(theme.toolError(errors.join(" ")));
} else {
    exitCode = 0;

}

console.log(
    theme.bannerExit(toolName + " exit with status ") +
        theme.exitCode(exitCode)
);

return exitCode;
// eof

