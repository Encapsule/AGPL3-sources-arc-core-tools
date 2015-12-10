#!/usr/bin/env node

TOOLSLIB = require('./arc_tools_lib');
var toolName = "arc_project";
var exitCode = 0; // assume success
bounce = false;

console.log(TOOLSLIB.createToolBanner(toolName));

var program = TOOLSLIB.commander;
program.version(TOOLSLIB.meta.version)
    .description(TOOLSLIB.meta.descripton)
    .option('--info', 'Print tool information and exit.')
    .parse(process.argv);


if (program.info) {
    console.log("> " + toolName +
		" leverages bundled Encapsule/arccore:");
    console.log(JSON.stringify(TOOLSLIB.arccore.__meta, undefined, 4));
    bounce = true;
}

while (!bounce) {
    // do some things...

    // finished with the things.
    break;
};

console.log(toolName + " exit with status " + exitCode);
