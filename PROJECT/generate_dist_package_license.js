#!/usr/bin/env node

const fs = require('fs');
const handlebars = require('handlebars');
const path = require('path');
const program = require('commander');

const arcMasterManifest = require('../package.json');

var licenseType = 'AGPL-3.0'; // default for all projects

program
    .name('generate_dist_package_license')
    .description('Generates LICENSE file for a distribution package given its package.json')
    .version(arcMasterManifest.version)
    .option('--outputDir <outputDir>', 'Write the generated file to <outputDir>.')
    .parse(process.argv);

if (!program.outputDir) {
    console.error("Missing --outputDir option value.");
    process.exit(1);
}

// If the target package has a generated package.json, override the licenseType w/its value.
const packageManifestPath = path.resolve(program.outputDir, 'package.json');

var packageManifest = null;

if (fs.existsSync(packageManifestPath)) {
    const packageManifestJSON = fs.readFileSync(packageManifestPath).toString('utf-8');
    packageManifest = JSON.parse(packageManifestJSON);
    licenseType = packageManifest.license;
} else {
    packageManifest = arcMasterManifest;
}
 
// Load and compile the appropriate license template.
const licenseTemplatePath = path.resolve(__dirname, 'LICENSES', (licenseType + '.hbs'));
const licenseTemplate = fs.readFileSync(licenseTemplatePath).toString('utf-8');
const compiledLicenseTemplate = handlebars.compile(licenseTemplate);

// Initialize a context object w/data that handlebars will use to make substitutions in the template.
const templateContext = {
    CopyrightYear: (new Date()).getFullYear(),
    CopyrightHolder: packageManifest.contributors[0].name
};

// Build the LICENSE document.
const licenseDocument = compiledLicenseTemplate(templateContext);

// Write the LICENSE document to the outputDir
const licenseDocumentFilename = path.resolve(program.outputDir, 'LICENSE');
fs.writeFileSync(licenseDocumentFilename, licenseDocument);




