
var packageDatabase = {
    arccore: {
        description: "Encapsule/arc* library common runtime for Node.js.",
        keywords: "ARC",
        main: "index.js"
    },
    arctools: {
        preferGlobal: true,
        description: "Addressable Resource Class (ARC) command line tools.",
        keywords: "ARC",
        bin: {
            arc_generateIRUT: "./arc_tools_id_unique.js",
            arc_compileFilterDAG: "./arc_tools_filterdag_compiler.js",
            //arc_generateFilterDAG: "./arc_tools_filterdag_factory.js"
        }
    }
};


module.exports = function (request_) {
    var pdb = packageDatabase[request_.name];
    if (!pdb) {
        throw new Error("Cannot generate distribution package manifest for unknown package '" + request_.name + "!");
    }
    var manifest = {
        name: request_.name,
        version: request_.version,
        codename: request_.codename,
        buildID: request_.buildID,
        buildEpoch: request_.buildTime,
        repository: {
            type: "git",
            url: "git+https://github.com/Encapsule/" + request_.name + ".git",
        },
        author: request_.author,
        license: "MIT",
        bugs: {
            url: "https://github.com/Encapsule/" + request_.name + "/issues"
        },
        homepage: "https://github.com/Encapsule/" + request_.name + "#readme",
    };
    for (var key in pdb) {
        manifest[key] = pdb[key];
    }
    return JSON.stringify(manifest, undefined, 4);
};
