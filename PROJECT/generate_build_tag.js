const path = require('path');
const fs = require('fs');
const packageMeta = require('../package.json');
const identifier = require('../BUILD/arccore/arc_core_identifier');
const util = require('../BUILD/arccore/arc_core_util');

const buildTag = {
    version: packageMeta.version,
    codename: packageMeta.codename,
    author: packageMeta.author,
    buildID: identifier.irut.fromEther(),
    buildTime: util.getEpochTime()
};

const buildTagJSON = JSON.stringify(buildTag); // , undefined, 4);
console.log(buildTagJSON);


const jsModule = "module.exports = JSON.parse('" + buildTagJSON + "');"

fs.writeFileSync(
    path.join(process.cwd(), './BUILD/arccore/arc_build.js'),
    jsModule
);

fs.writeFileSync(
    path.join(process.cwd(), './BUILD/arctools/arc_build.js'),
    jsModule
);
/*
fs.writeFileSync(
    path.join(process.cwd(), './BUILD/arccore/arc_build.json'),
    buildTagJSON
);

fs.writeFileSync(
    path.join(process.cwd(), './BUILD/arctools/arc_build.json'),
    buildTagJSON
);
*/
