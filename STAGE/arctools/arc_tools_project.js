#!/usr/bin/env node

var toolName = "arc_project";

var TOOLSLIB = require('./arc_tools_lib');
var chalk = TOOLSLIB.chalk;

var toolStyles = {
    bannerEnter: chalk.cyan.bold,
    bannerExit: chalk.cyan,
    infoHead: chalk.bold.cyan,
    infoBody: chalk.cyan,
    exitCode: chalk.bold.magenta
};

var exitCode = 0; // assume success
bounce = false;


var program = TOOLSLIB.commander;
program.version(TOOLSLIB.meta.version)
    .description(TOOLSLIB.meta.descripton)
    .option('--info', 'Print tool information and exit.')
    .parse(process.argv);

console.log(toolStyles.bannerEnter(TOOLSLIB.createToolBanner(toolName)));

if (program.info) {
    console.log(
	toolStyles.infoHead(toolName + " leverages bundled Encapsule/arccore runtime:")
    );
    console.log(
	toolStyles.infoBody(JSON.stringify(TOOLSLIB.arccore.__meta, undefined, 4))
    );
    bounce = true;
}

while (!bounce) {
    // do some things...

    // finished with the things.
    break;
};

console.log(toolStyles.bannerExit(toolName + " exit with status ") +
	    toolStyles.exitCode(exitCode));
