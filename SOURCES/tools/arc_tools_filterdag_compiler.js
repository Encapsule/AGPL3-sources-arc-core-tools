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

var FS = require('fs');
var PATH = require('path');
var TOOLS_META = require('./arc_build.json');
var ARC_CORE = require('../arc_core/arc_core');
var FILE_DIR_ENUMERATOR = require('./arc_tools_lib_file_dir_enum_sync');
var FILE_JSRC_LOADER = require('./arc_tools_lib_jsrc_file_loader_sync');
var FILE_RC_WRITER = require('./arc_tools_lib_string_to_file_sync');
var SPEC_LOADER = require('./arc_tools_lib_filterdag_spec_loader');

var program = require('commander');

program
    .version(TOOLS_META.version)
    .description("JBUS FilterDAG specification compiler.")
    .option('--info', 'Print tool information and exit.')
    .option('-i, --ioDir <in_dir>', "Input from ioDir/specs, output to ioDir/manifest. (default: ./)")

program.parse(process.argv);

if (program.info) {
    console.log(JSON.stringify(TOOLS_META, undefined, 4));
    console.log(JSON.stringify(ARC_CORE.__meta, undefined, 4));
    process.exit(0);
}

var normalizePath = function(path_) {
    var path = path_;
    if (!PATH.isAbsolute(path)) {
        path = PATH.join(process.cwd(), path);
    }
    return PATH.normalize(path);
};


var ioDir = program.ioDir || "./";

var inputDirPath = normalizePath(PATH.join(ioDir, "specs/"));
var outputDirPath = normalizePath(PATH.join(ioDir, "manifests/"));

console.log("**** " + TOOLS_META.author + " " + TOOLS_META.name + " v" + TOOLS_META.version + " FilterDAG Spec Compiler ****");
console.log("Input directory:  '" + inputDirPath);
console.log("Output directory: '" + outputDirPath);

var compilerReport = {};

console.log("\n> Finding input JavaScript/JSON files...");

var enumResponse = FILE_DIR_ENUMERATOR.request({
    parentDirectory: inputDirPath,
    fileCallback: function(path_) {
        var pathParse = PATH.parse(path_);
        return ((pathParse.ext === ".js") || (pathParse.ext === '.json'));
    }
});
if (enumResponse.error) {
    console.log("Sorry. A fatal error occurred reading inputs:");
    console.log(enumResponse.error);
    process.exit(1);
}

compilerReport.inputResourceFiles = enumResponse.result.files.length;

console.log("\n> Loading " + enumResponse.result.files.length + " input JavaScript/JSON file(s)...");

var resources = [];
compilerReport.inputResourceLoads = 0;
enumResponse.result.files.forEach(function(filepath_) {
    console.log("... loading '" + filepath_ + "'");
    var loaderResponse = FILE_JSRC_LOADER.request(filepath_)
    var record = {
        origin: filepath_,
        error: loaderResponse.error,
        result: !loaderResponse.error?loaderResponse.result.resource:null
    };
    resources.push(record);
    if (!record.error) {
        compilerReport.inputResourceLoads++;
    }
});

console.log(JSON.stringify(resources, undefined, 4));

console.log("\n> Loading specifications from resource(s)...");

var specifications = []
compilerReport.inputSpecLoads = 0;
resources.forEach(function(resourceRecord_) {
    if (resourceRecord_.error) {
        console.log("... skipping non-JavaScript/JSON file '" + resourceRecord_.origin);
        return;
    }
    console.log("... parsing '" + resourceRecord_.origin + "'");
    specLoaderResponse = SPEC_LOADER.request(resourceRecord_.result);
    var record = {
        origin: resourceRecord_.origin,
        error: specLoaderResponse.error,
        result: !specLoaderResponse.error?specLoaderResponse.result:null
    };
    specifications.push(record);
    if (!specLoaderResponse.error) {
        compilerReport.inputSpecLoads++;
    }
});

console.log(JSON.stringify(specifications, undefined, 4));

console.log("\n> Compiling specifications...");

var manifests = []
compilerReport.inputSpecCompiles = 0;
specifications.forEach(function(specificationRecord_) {
    if (specificationRecord_.error) {
        console.log("... skipping unknown JavaScript/JSON file '" + specificationRecord_.origin + "'");
        return;
    }
    console.log("... parsing '" + specificationRecord_.origin + "'");
    filterDAGFactoryResponse = ARC_CORE.filterDAG.create(specificationRecord_.result);
    var record = {
        origin: specificationRecord_.origin,
        error: filterDAGFactoryResponse.error,
        result: !filterDAGFactoryResponse.error?filterDAGFactoryResponse.result:null
    };
    manifests.push(record);
    if (!filterDAGFactoryResponse.error) {
        compilerReport.inputSpecCompiles++;
    }
});

console.log(JSON.stringify(manifests, undefined, 4));

console.log("\n> Writing generated manifest(s)...");

compilerReport.manifestsWritten = 0;
manifests.forEach(function(manifestRecord_) {
    if (manifestRecord_.error) {
        console.log("... no manifest produced for resource file '" + manifestRecord_.origin + "'");
        return;
    }
    var filePath = PATH.join(outputDirPath, "filterdag-manifest-" + manifestRecord_.result.dagID + ".json");
    console.log("... writing FilterDAG manifest '" + filePath + "'");

    var fileWriter = FILE_RC_WRITER.request({
        path: filePath,
        resource: JSON.stringify(manifestRecord_.result, undefined, 4)
    });

    if (fileWriter.error) {
        console.log("! File write error: " + fileWriter.error);
    } else {
        console.log("... wrote '" + filePath + "'.");
        compilerReport.manifestsWritten++;
    }

});

console.log("\n> Compiler report:");

console.log(JSON.stringify(compilerReport, undefined, 4));




