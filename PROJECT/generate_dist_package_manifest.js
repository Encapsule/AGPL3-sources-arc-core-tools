#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const program = require('commander');

const arcBuild = require('../BUILD/stage01/arccore/arc_build');
const packagesBuildData = require('./packages-build-data');

program
    .name('generate_dist_package_manifest')
    .description('Used to synthesize distribution package.json manifests from predefined values and current build information.')
    .version(arcBuild.version)
    .option('--packageName <packageName>', 'Use <packageName> to select package database entry.')
    .option('--outputDir <outputDir>', 'Write the generated package.json document to <outputDirectory>.')
    .parse(process.argv);

if (!program.packageName) {
    console.error("Missing --packageName option value.");
    process.exit(1);
}

if (!program.outputDir) {
    console.error("Missing --outputDir option value.");
    process.exit(1);
}

const packageBuildData = packagesBuildData[program.packageName];
if (!packageBuildData) {
    console.error('Invalid --packageName option value.');
    process.exit(1);
}

// ================================================================
// package.json generation

var packageManifest = {
    name: program.packageName,
    version: arcBuild.version,
    codename: arcBuild.codename,
    buildID: arcBuild.buildID,
    buildTime: arcBuild.buildTime,
    ARC_master: arcBuild.ARC_master,
    repository: {
        type: "git",
        url: "git+https://github.com/Encapsule/" + program.packageName + ".git",
    },
    author: arcBuild.author,
    contributors: arcBuild.contributors,
    license: "MIT",
    bugs: {
        url: "https://github.com/Encapsule/" + program.packageName + "/issues"
    },
    homepage: "https://github.com/Encapsule/" + program.packageName + "#readme",
};

for (var key in packageBuildData.packageManifestFields) {
    packageManifest[key] = packageBuildData.packageManifestFields[key];
}

const packageManifestFilename = path.join(program.outputDir, 'package.json');
fs.writeFileSync(packageManifestFilename, JSON.stringify(packageManifest, undefined, 4));
console.log("Wrote '" + packageManifestFilename + "':");
console.log(JSON.stringify(packageManifest));

// ================================================================
// README.md generation

const buildDate = new Date(arcBuild.buildTime * 1000);
const buildTimeLong = buildDate.toISOString();
const buildYear = buildDate.getFullYear();

const copyrightHolder = arcBuild.contributors[0];

// Every push is a paragraph on the tail of the markdown document modeled by 'markdown' array..

var markdown = [];
markdown.push("![Encapsule Project](https://encapsule.io/images/blue-burst-encapsule.io-icon-72x72.png \"Encapsule Project\")");

markdown.push("## " + arcBuild.author);
markdown.push("# " + program.packageName + " v" + arcBuild.version + " \"" + arcBuild.codename + "\"");

markdown.push("### " + packageBuildData.packageManifestFields.description);

markdown.push("#### Build");

markdown.push("Distribution package: `" + program.packageName + " v" + arcBuild.version + " \"" + arcBuild.codename + "\" " + arcBuild.buildID + " " + buildTimeLong + "`");

markdown.push("#### Sources");
markdown.push("Sources repository: [Encapsule/ARC_master](https://github.com/Encapsule/ARC_master).");
markdown.push("Commit hash: **[" + arcBuild.ARC_master + "](https://github.com/Encapsule/ARC_master/commit/" + arcBuild.ARC_master + ")**.");

markdown.push("<hr>");
markdown.push("Copyright (C) " + buildYear + " [" + copyrightHolder.name + "](mailto:" + copyrightHolder.email + ")");
markdown.push("Published by [Encapsule Project](https://encapsule.io) Seattle, WA USA");

const mddoc = markdown.join('\n\n');


const packageReadmeFilename = path.join(program.outputDir, 'README.md');
fs.writeFileSync(packageReadmeFilename, mddoc);
console.log("Wrote '" + packageReadmeFilename + "':");
console.log(mddoc);
