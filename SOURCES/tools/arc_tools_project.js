#!/usr/bin/env node

var toolName = "arc_project";

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
    .option('-d, --directory [directory]', "Locate 'arctools.json' from [directory] (default: cwd)")
    .option('-n, --new [directory]', "Create 'arctools.json' in [directory] (default: cwd)")
    .option('--info', "Print tool information and exit.")
    .parse(process.argv);

if (program.info) {
    console.log(clistyle.infoBody(JSON.stringify(TOOLSLIB.meta, undefined, 4)));
    bounce = true;
}

while (!bounce) {
    // do some things...

    // finished with the things.
    break;
};

console.log(clistyle.bannerExit(toolName + " exit with status ") + clistyle.exitCode(exitCode));
// eof

