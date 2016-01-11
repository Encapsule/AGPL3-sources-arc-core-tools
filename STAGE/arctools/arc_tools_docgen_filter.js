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
    .option('--filter, -f [filename]', "CommonJS module filename that implements the filter to document (required).")
    .option('--template, -t [filename]', "Handlebars template to use to generate the documentation (optional).")
    .option('--output, -o [filename]', "Filename to write the generated document to. If ommitted, use stdout.")
    .option('--verbose', "Log diagnostic and informational messages to console.")
    .parse(process.argv);

if (program.about) {
    console.log(theme.infoBody(JSON.stringify(TOOLSLIB.meta, undefined, 4)));
    exitProgram = true;
}

while (!exitProgram) {

    if (!program.filter) {
        errors.unshift("Missing required option --filter.");
        break;
    }

    exitProgram = true;
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

