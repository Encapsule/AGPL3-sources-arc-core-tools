const identifier = require('../BUILD/stage01/arccore/arc_core_identifier');
const util = require('../BUILD/stage01/arccore/arc_core_util');
const childProcess = require('child_process');
const path = require('path');
const fs = require('fs');
const packageMeta = require('../package.json');
const buildDirectory = path.join(process.cwd(), './BUILD/stage01');
const buildTagFilename = 'arc_build';

const commitHash = childProcess.execSync('git rev-parse HEAD').toString('utf8').trim();

const buildTag = {
    version: packageMeta.version,
    codename: packageMeta.codename,
    author: packageMeta.author,
    buildID: identifier.irut.fromEther(),
    buildTime: util.getEpochTime(),
    ARC_master: commitHash
};

const buildTagJSON = JSON.stringify(buildTag); // , undefined, 4);
const buildTagJS = "module.exports = JSON.parse('" + buildTagJSON + "');"
console.log(buildTagJSON);

fs.writeFileSync(path.join(buildDirectory, 'arccore', (buildTagFilename + '.js')), buildTagJS);
fs.writeFileSync(path.join(buildDirectory, 'arctools', (buildTagFilename + '.js')), buildTagJS);

