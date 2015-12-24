#!/usr/bin/env node

var toolName = "arc_project";

var PATH = require('path');
var TOOLSLIB = require('./arc_tools_lib');

var chalk = TOOLSLIB.chalk;
var clistyle = TOOLSLIB.clistyles;

var exitCode = 0; // assume success
var bounce = false;

console.log(TOOLSLIB.createToolBanner(toolName));

var program = TOOLSLIB.commander;
program.version(TOOLSLIB.meta.version)
    .description(TOOLSLIB.meta.descripton)
    .option('--info', "Print tool information and exit.")
    .option('-d, --directory <directory>', "Use <directory> as the ARC tools project root directory. (default: cwd)")
    .option('-i, --initialize a new arctools_project.json in ARC tools root directory. (default: ./arctools_project.json)')
    .option('--info', "Print tool information and exit.")
    .parse(process.argv);

if (program.info) {
    console.log(clistyle.infoBody(JSON.stringify(TOOLSLIB.meta, undefined, 4)));
    bounce = true;
}

while (!bounce) {
    // do some things...

    // Set the main ARC tools project directory
    var projectDirectory = TOOLSLIB.paths.normalizePath(program.directory || "./");
    var projectFilename = TOOLSLIB.paths.normalizePath(program.create || PATH.join(projectDirectory, "arctools.json"));

    console.log("project directory: '" + projectDirectory + "'.");

    if (program.initialize !== undefined) {
        console.log("Attempting to initialize a new project...");
    } else {
        console.log("Attempting to open existing project...");
    }

    // finished with the things.
    break;
};

console.log(clistyle.bannerExit(toolName + " exit with status ") + clistyle.exitCode(exitCode));
// eof

