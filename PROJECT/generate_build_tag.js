const identifier = require('../BUILD/arccore/arc_core_identifier');
const util = require('../BUILD/arccore/arc_core_util');
const path = require('path');
const fs = require('fs');
const packageMeta = require('../package.json');
const buildDirectory = path.join(process.cwd(), './BUILD');
const buildTagFilename = 'arc_build';

const buildTag = {
    version: packageMeta.version,
    codename: packageMeta.codename,
    author: packageMeta.author,
    buildID: identifier.irut.fromEther(),
    buildTime: util.getEpochTime()
};

const buildTagJSON = JSON.stringify(buildTag); // , undefined, 4);
const buildTagJS = "module.exports = JSON.parse('" + buildTagJSON + "');"
console.log(buildTagJSON);

fs.writeFileSync(path.join(buildDirectory, (buildTagFilename + '.json')), buildTagJSON);
fs.writeFileSync(path.join(buildDirectory, (buildTagFilename + '.js')), buildTagJS);
