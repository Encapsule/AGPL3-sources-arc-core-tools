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

var TOOLS_META = require('./arc_build.json');
var ARC_CORE = require('../arc_core/arc_core');
var FILE_DIR_ENUMERATOR = require('./arc_tools_lib_file_dir_enum_sync');
var FILE_JSRC_LOADER = require('./arc_tools_lib_jsrc_file_loader_sync');

var program = require('commander');

program
    .version(TOOLS_META.version)
    .description("JBUS FilterDAG design artifact creation tool.")
    .command('manifest [path]', "Create a FilterDAG manifest from [specPath].")
    .action(function(command, path) {
        console.log("Received: " + command + " " + path);
    })
    .option('--info', 'Print tool information and exit.')

program.parse(process.argv);

console.log("SDKJHFKDJFHKDS");

var inBreakScope = false;
while (!inBreakScope) {
    inBreakScope = true;

    if (program.info) {
        console.log("CREATE");
        console.log(JSON.stringify(TOOLS_META, undefined, 4));
        break;
    }

    

}


