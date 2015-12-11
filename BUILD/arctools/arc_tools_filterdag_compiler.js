#!/usr/bin/env node

var FS = require('fs');
var PATH = require('path');
var TOOLSLIB = require('./arc_tools_lib');
var TOOLS_META = TOOLSLIB.meta;
TOOLS_META.name="Encapsule/arctools";

var ARC_CORE = TOOLSLIB.arccore;
var FILE_DIR_ENUMERATOR = TOOLSLIB.fileDirEnumSync;
var FILE_JSRC_LOADER = TOOLSLIB.jsrcFileLoaderSync;
var FILE_RC_WRITER = TOOLSLIB.stringToFileSync;
var SPEC_LOADER = TOOLSLIB.filterdagSpecLoader;

var clistyle = TOOLSLIB.clistyles;

var normalizePath = function(path_) {
    var path = path_;
    if (!PATH.isAbsolute(path)) {
        path = PATH.join(process.cwd(), path);
    }
    return PATH.normalize(path);
};

var program = TOOLSLIB.commander;

program
    .version(TOOLS_META.version)
    .description("JBUS FilterDAG specification compiler.")
    .option('--info', 'Print tool information and exit.')
    .option('-i, --ioDir <in_dir>', "Input from ioDir/specs, output to ioDir/manifest. (default: ./)")
    .parse(process.argv);

var bounce = false;
while (!bounce) {
    bounce = true;

    var ioDir = program.ioDir || "./";
    var inputDirPath = normalizePath(PATH.join(ioDir, "specs/"));
    var outputDirPath = normalizePath(PATH.join(ioDir, "manifests/"));
    var compilerReport = {};
    errors = [];

    console.log(TOOLSLIB.createToolBanner("arc_compileFilterDAG"));
    console.log("> Input directory:  '" + inputDirPath);
    console.log("< Output directory: '" + outputDirPath);

    if (program.info) {
	console.log(JSON.stringify(TOOLS_META, undefined, 4));
	console.log(JSON.stringify(ARC_CORE.__meta, undefined, 4));
	break; // bounce
    }

    console.log("\n> Enumerating input files...");

    var enumResponse = FILE_DIR_ENUMERATOR.request({
	parentDirectory: inputDirPath,
	fileCallback: function(path_) {
            var pathParse = PATH.parse(path_);
            return ((pathParse.ext === ".js") || (pathParse.ext === '.json'));
	}
    });

    if (enumResponse.error) {
	console.log("Sorry. A fatal error occurred reading input files.");
	console.log(enumResponse.error);
	break; // bounce
    }

    if (enumResponse.result.files.length === 0) {
	console.log("Found no files at and below '" + inputDirPath + "' to evaluate?");
	break; // bounce
    }

    compilerReport.inputResourceFiles = enumResponse.result.files.length;

    console.log("\n> Attempting to load " + compilerReport.inputResourceFiles + " discovered files as JavaScript/JSON...");

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
	} else {
	    errors.push(record);
	}
    });

    if (compilerReport.inputResourceLoads === 0) {
	console.log("Found no JavaScript or JSON resource files to evaluate?");
	break; // bounce
    }

    console.log("\n> Evaluating " + compilerReport.inputResourceLoads + " in-memory JavaScript/JSON resources...");

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
	} else {
	    errors.push(record);
	}
    });

    console.log("\n> Discovered " + compilerReport.inputSpecLoads + " specification files. Starting compilation...");

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
	} else {
	    errors.push(record);
	}
    });

    console.log("\n> Generated " + compilerReport.inputSpecCompiles + " manifests. Writing outputs...");

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
	    errors.push({ origin: manifestRecord_.origin, dest: filePath, error: fileWriter.error, result: fileWriter.result });
	} else {
            console.log("... wrote '" + filePath + "'.");
            compilerReport.manifestsWritten++;
	}

    });

    break;
} // while (!bounce)

if (errors.length) {
    console.log("\n> Error report:");
    console.log(JSON.stringify(errors, undefined, 4));
}

console.log("\n> Compiler summary: " + JSON.stringify(compilerReport));






