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

////
// Inspired by: https://developer.atlassian.com/blog/2015/11/scripting-with-node/
//

var TOOLS_META = require('./arc_build.json');
var ARC_CORE = require('../arc_core/arc_core');

var program = require('commander');
program.version(TOOLS_META.version).
    option('--info', 'Print tool information.').
    parse(process.argv);

if (program.info) {
    console.log(JSON.stringify(ARC_CORE.__meta, undefined, 4));
    process.exit(0);
}

var iruts = [];
for (var x = 0 ; x < 25 ; x++) {
    iruts.push(ARC_CORE.identifier.irut.fromEther());
}
console.log(JSON.stringify(iruts, undefined, 4));
process.exit(0);



