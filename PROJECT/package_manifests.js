var packageDatabase = module.exports = {
    arccore: {
        description: "Encapsule/arc* library common runtime for Node.js.",
        keywords: "ARC",
        main: "index.js"
    },
    arctools: {
        preferGlobal: true,
        description: "Addressable Resource Class (ARC) command line tools.",
        keywords: "ARC",
        dependencies: {
            "chalk": "^1.1.1",
            "commander": "^2.9.0",
            "handlebars": "^4.0.5"
        },
        bin: {
            arc_generateIRUT: "./arc_tools_id_unique.js",
            arc_compileFilterDAG: "./arc_tools_filterdag_compiler.js",
            //arc_generateFilterDAG: "./arc_tools_filterdag_factory.js"
	    arc_project: "./arc_tools_project.js",
            arc_doc_filter: "./arc_tools_docgen_filter.js"
        }
    }
};

