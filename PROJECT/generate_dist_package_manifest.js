
var packageDatabase = {

    arccore: {
        description: "Encapsule/arc* library common runtime for Node.js.",
        keywords: "ARC"
    },

    arctools: {
        description: "Addressable Resource Class (ARC) command line tools.",
        keywords: "ARC"
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
        buildID: request_.buildID,
        description: pdb.description,
        main: "index.js",
        repository: {
            type: "git",
            url: "git+https://github.com/Encapsule/" + request_.name + ".git",
        },
        keywords: pdb.keywords,
        author: "Encapsule.io",
        license: "MIT",
        bugs: {
            url: "https://github.com/Encapsule/" + request_.name + "/issues"
        },
        homepage: "https://github.com/Encapsule/" + request_.name + "#readme",
        dependencies: pdb.dependencies,
        bin: pdb.bin
    };
    return JSON.stringify(manifest, undefined, 4);
};
