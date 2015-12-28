#!/usr/bin/env node

var toolName = "arc_project";
var projectFilename = "arctools.json";

var FS = require('fs');
var PATH = require('path');
var TOOLSLIB = require('./arc_tools_lib');

var chalk = TOOLSLIB.chalk;
var theme = TOOLSLIB.clistyles;

var exitCode = 0; // assume success
var exitProgram = false;
var errors = [];

console.log(TOOLSLIB.createToolBanner(toolName));

var program = TOOLSLIB.commander;
program
    .version(TOOLSLIB.meta.version)
    .description("ARC tool project")
    .option('--about', "Print tool information and exit.")
    .option('-d, --directory <directory>', "Use <directory> as project root.")
    .option('--initialize', "Initialize a new '" + projectFilename + "' file.")
    .parse(process.argv);

if (program.about) {
    console.log(theme.infoBody(JSON.stringify(TOOLSLIB.meta, undefined, 4)));
    exitProgram = true;
}

while (!exitProgram && !errors.length) {
    // do some things...

    // Set the main ARC tools project directory
    var projectDirectory = TOOLSLIB.paths.normalizePath(program.directory || "./");
    var projectPath = TOOLSLIB.paths.normalizePath(projectDirectory + "/" + projectFilename);

    console.log(theme.processStepHeader("Checking project directory..."));
    if (!FS.existsSync(projectDirectory)) {
        errors.unshift("Bad project directory. Path '" + projectDirectory + "' does not exist.");
        break;
    }

    if (!FS.statSync(projectDirectory).isDirectory()) {
        errors.unshift("Bad project directory. Path '" + request_.parentDirectory + "' is not a directory.");
        break;
    }

    console.log(theme.dirInput("'" + projectDirectory + "'"));

    if (program.initialize !== undefined) {
        console.log(theme.processStepHeader("Attempting to initialize a new project..."));

    } else {
        console.log(theme.processStepHeader("Attempting to open existing project..."));
        console.log(theme.dirInput("'" + projectPath + "'"));
        var innerResponse = TOOLSLIB.jsrcFileLoaderSync.request(projectPath);
        if (innerResponse.error) {
            errors.unshift(innerResponse.error);
            break;
        }
        console.log(JSON.stringify(innerResponse,undefined,4));
    }

    // finished with the things.
    break;
};

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

