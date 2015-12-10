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
        bin: {
            arc_generateIRUT: "./arc_tools_id_unique.js",
            arc_compileFilterDAG: "./arc_tools_filterdag_compiler.js",
            //arc_generateFilterDAG: "./arc_tools_filterdag_factory.js"
        }
    }
};

