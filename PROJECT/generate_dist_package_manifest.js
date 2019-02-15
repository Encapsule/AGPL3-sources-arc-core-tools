#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const program = require('commander');

const arcBuild = require('../BUILD/stage01/arccore/arc_build');
const packagesBuildData = require('./packages-build-data');

program
    .name('generate_dist_package_manifest')
    .description('Generates package.json and README.md files for a distribution package.')
    .version(arcBuild.version)
    .option('--packageName <packageName>', 'Use <packageName> to select package database entry.')
    .option('--outputDir <outputDir>', 'Write the generated files to <outputDir>.')
    .parse(process.argv);

if (!program.packageName) {
    console.error("Missing --packageName option value.");
    process.exit(1);
}

const fullPackageName = program.packageName;
const fullPackageNameSplit = fullPackageName.split("/");
const packageOrgURI = fullPackageNameSplit[0];
const tersePackageName = fullPackageNameSplit[1];

if (!program.outputDir) {
    console.error("Missing --outputDir option value.");
    process.exit(1);
}

const packageBuildData = packagesBuildData[program.packageName];
if (!packageBuildData) {
    console.error('Invalid --packageName option value \'' + program.packageName + '\'.');
    process.exit(1);
}

// ================================================================
// package.json generation

var packageManifest = {
    name: fullPackageName,
    version: arcBuild.version,
    codename: arcBuild.codename,
    buildID: arcBuild.buildID,
    buildTime: arcBuild.buildTime,
    ARC_master: arcBuild.ARC_master,
    repository: {
        type: "git",
        url: "git+https://github.com/Encapsule/" + tersePackageName + ".git",
    },
    author: arcBuild.author,
    contributors: arcBuild.contributors,
    license: "MIT",
    bugs: {
        url: "https://github.com/Encapsule/" + tersePackageName + "/issues"
    },
    homepage: "https://github.com/Encapsule/" + tersePackageName + "#readme",
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

// injectReadmeSection handles sectionDescriptor objects w/heading markdown string & markdown array properties.
function injectReadmeSection(sectionDescriptor_) {
    if (sectionDescriptor_.heading) {
        markdown.push(sectionDescriptor_.heading);
    }
    if (sectionDescriptor_.markdown.length) {
        for (var i = 0 ; i < sectionDescriptor_.markdown.length ; i++) {
            markdown.push(sectionDescriptor_.markdown[i]);
        }
    }
    return;
} // function injectReadmeSection

// Start of the markdown document...
markdown.push("[![Encapsule Project](https://encapsule.io/images/blue-burst-encapsule.io-icon-72x72.png \"Encapsule Project\")](https://encapsule.io)");

markdown.push("### " + arcBuild.author + "");

markdown.push("# " + program.packageName + " v" + arcBuild.version + " \"" + arcBuild.codename + "\"");
markdown.push("```\n" +
              "Package: " + program.packageName + " v" + arcBuild.version + " \"" + arcBuild.codename + "\" build ID \"" + arcBuild.buildID + "\"\n" +
              "Sources: Encapsule/ARC_master#" + arcBuild.ARC_master + "\n" +
              "Purpose: " + packageBuildData.packageType + " (" + (packageBuildData.browserSafe?"Node.js + modern browsers (via package bundler)":"Node.js") + ")\n" +
              "Created: " + buildTimeLong + "\n" +
              "License: " + packageManifest.license + "\n" +
              "```");

markdown.push("# Summary");


markdown.push(packageBuildData.packageManifestFields.description);

// Insert optional package-specific content to the Summary section body.
if (packageBuildData.readmeDocumentContent.summaryDescriptor) {
    injectReadmeSection(packageBuildData.readmeDocumentContent.summaryDescriptor);
}

switch (packageBuildData.packageType) {
case 'library':
    injectReadmeSection({
        heading: "## Usage",
        markdown: [
            "This package's contained library functionality is intended for use in derived projects.",
            "For example:",
            "1. Create simple test project, declare a dependency and install `" + fullPackageName + "` package:",
            "```\n$ mkdir testProject && cd testProject\n$ yarn init\n$ yarn add " + fullPackageName + " --dev\n```",
            "2. Create a simple script `index.js`:",
            "```JavaScript\nconst " + tersePackageName + " = require('" + fullPackageName + "');\nconsole.log(JSON.stringify(" + tersePackageName + ".__meta));\n/* ... your derived code here ... */\n```"
        ]
    });
    break;
case 'tools':
    injectReadmeSection({
        heading: "## Usage",
        markdown: [
            "The `" + fullPackageName + "` "  + packageBuildData.packageType + " package is typically installed globally.",
            "```\n$ yarn global add " + fullPackageName + "\n```",
            "or...\n",
            "```\n$ npm install -g " + fullPackageName + "\n'''"
        ]
    });
    break;
default:
    throw new Error("Unknown packageType declaration value '" + packageBuildData.packageType + "'!");
}

markdown.push("## Distribution");
markdown.push("The `" + fullPackageName + "` " + packageBuildData.packageType + " package is published on [npmjs](https://npmjs.com).");
markdown.push([
    "- [" + fullPackageName + " Package Distribution](https://npmjs.com/package/" + fullPackageName + "/v/" + packageManifest.version + ") ([npm](https://www.npmjs.com/" + packageOrgURI + "))",
    "- [" + fullPackageName + " Package Repository](https://github.com/Encapsule/" + tersePackageName + ") ([GitHub](https://github.com/Encapsule))"
].join("\n"));


// Body content (after summary section typically).
while (packageBuildData.readmeDocumentContent.markdownBody && packageBuildData.readmeDocumentContent.markdownBody.length) {
    injectReadmeSection(packageBuildData.readmeDocumentContent.markdownBody.shift());
}

markdown.push("<hr>");
markdown.push("Copyright &copy; " + buildYear + " [" + copyrightHolder.name + "](" + copyrightHolder.url + ")");
markdown.push("Published by [Encapsule Project](https://encapsule.io) Seattle, WA USA");

const mddoc = markdown.join('\n\n');


const packageReadmeFilename = path.join(program.outputDir, 'README.md');
fs.writeFileSync(packageReadmeFilename, mddoc);
console.log("Wrote '" + packageReadmeFilename + "':");
console.log(mddoc);
