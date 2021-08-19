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
const packageOrgURI = "org/" + fullPackageNameSplit[0].slice(1);
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
    buildSource: arcBuild.buildSource,
    repository: {
        type: "git",
        url: "git+https://gitlab.com/encapsule/" + tersePackageName + ".git",
    },
    author: arcBuild.author,
    contributors: arcBuild.contributors,
    license: "MIT",
    bugs: {
        url: "https://gitlab.com/encapsule/" + tersePackageName + "/-/issues"
    },
    homepage: "https://gitlab.com/encapsule/" + tersePackageName
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

const usageContextString = (packageBuildData.browserSafe?"Node.js + HTML5":"Node.js");

// Start of the markdown document...
const encapsuleProjectBannerMarkdown = "# [![Encapsule Project](https://encapsule.io/images/blue-burst-encapsule.io-icon-72x72.png \"Encapsule Project\")](https://encapsule.io) Encapsule Project";

const npmjsPackageLink = `https://npmjs.com/package/${fullPackageName}/v/${packageManifest.version}`;
const gitlabPackageLink = `https://github.com/Encapsule/${tersePackageName}`;

markdown.push(encapsuleProjectBannerMarkdown);

markdown.push("## " + program.packageName + " v" + arcBuild.version + "-" + arcBuild.codename);

markdown.push("**" + packageManifest.description + "**");

markdown.push("```\n" +
              "Package: " + program.packageName + " v" + arcBuild.version + "-" + arcBuild.codename + " build " + arcBuild.buildID + "\n" +
              "Sources: @encapsule/dpmr-arc-core-at#" + arcBuild.buildSource + "\n" +
              "Purpose: " + packageBuildData.packageType + " (" + usageContextString + ")\n" +
              "Created: " + buildTimeLong + "\n" +
              "License: " + packageManifest.license + "\n" +
              "```");

markdown.push("> **[Package Sources + Issues on GitLab](gitlabPackageLink)**");


// Insert optional package-specific content to the Summary section body.
if (packageBuildData.readmeDocumentContent.summaryDescriptor) {
    injectReadmeSection(packageBuildData.readmeDocumentContent.summaryDescriptor);
}

switch (packageBuildData.packageType) {
case 'library':
    injectReadmeSection({
        heading: "# Use",
        markdown: [
            "Add the `" + fullPackageName + "` package to your Node.js project's `package.json` manifest:",

            "1. Create simple test project, declare a dependency and install `" + fullPackageName + "` package:",
            "```\n$ mkdir testProject && cd testProject\n$ npm init --yes\n$ npm install " + fullPackageName + " --save-dev\n```",
            "2. Create a simple script `index.js`:",
            "```JavaScript\nconst " + tersePackageName + " = require('" + fullPackageName + "');\nconsole.log(JSON.stringify(" + tersePackageName + ".__meta));\n/* ... your derived code here ... */\n```",
        ]
    });
    break;
case 'tools':
    injectReadmeSection({
        heading: "# Use",
        markdown: [
            "Typically, the `" + fullPackageName + "` "  + packageBuildData.packageType + " package is registered via `npm` so that its exported script(s) are available at the command line of your OS:",
            "```\n$ npm install --global " + fullPackageName + "\n```"
        ]
    });
    break;
default:
    throw new Error("Unknown packageType declaration value '" + packageBuildData.packageType + "'!");
}

// Body content (after summary section typically).
while (packageBuildData.readmeDocumentContent.markdownBody && packageBuildData.readmeDocumentContent.markdownBody.length) {
    injectReadmeSection(packageBuildData.readmeDocumentContent.markdownBody.shift());
}


markdown.push("# Sources");

markdown.push([
    `- [${npmjsPackageLink}](${npmjsPackageLink})`,
    `- [${gitlabPackageLink}](${gitlabPackageLink})`
].join("\n"));

markdown.push(encapsuleProjectBannerMarkdown);

markdown.push("Published under [" + packageManifest.license + "](./LICENSE) license by [Encapsule Project](https://encapsule.io)");
markdown.push("Copyright &copy; " + buildYear + " " + copyrightHolder.name);
markdown.push("GitLab: [https://gitlab/encapsule](https://gitlab.encapsule)");
markdown.push("Twitter: [https://twitter.com/encapsule](https://twitter.com/encapsule)");

const mddoc = markdown.join('\n\n');


const packageReadmeFilename = path.join(program.outputDir, 'README.md');
fs.writeFileSync(packageReadmeFilename, mddoc);
console.log("Wrote '" + packageReadmeFilename + "':");
console.log(mddoc);
