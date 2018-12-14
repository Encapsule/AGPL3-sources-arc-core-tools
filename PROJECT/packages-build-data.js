// packages-build-data.js

var packageDatabase = module.exports = {
    arccore: {
        packageType: "library",
        browserSafe: true,
        packageManifestFields: {
            description: "Encapsule Project Addressable Resource Class (ARC) core runtime data modeling and processing libraries.",
            keywords: "ARC",
            main: "arc_core_lib.js"
        },
        readmeDocumentContent: {
            summaryDescriptor: {
                markdown: [
                    "### arccore.filter",
                    "Build self-documenting functions with strong data type and value constraint enforcement provided automatically at runtime.",
                    "### arccore.discriminator",
                    "Build specialized \"discriminator\" filter instances that route their incoming `request` to one of N developer-specified filters. " +
                        "Useful for building extensible message processing systems.",
                    "### arccore.graph",
                    "Directed graph container class and algorithms for modeling and analyzing complex digraph datasets in memory.",
                    "### arccore.identifier",
                    "Generate non-cryptographic object signatures and random keys in 22-character (128-bit), or 6-character (32-bit) Internet Routable Unique Token (IRUT) string format."
                ]
            },
            markdownBody: [
            ]
        }
    },
    arctools: {
        packageType: "tools",
        browserSafe: false,
        packageManifestFields: {
            preferGlobal: true,
            description: "Encapsule Project Addressable Resource Class (ARC) command line tools.",
            keywords: "ARC",
            dependencies: {
                "chalk": "^1.1.1",
                "commander": "^2.9.0",
                "handlebars": "^4.0.5"
            },
            bin: {
                arc_generateIRUT: "./arc_tools_id_unique.js",
                arc_compileFilterDAG: "./arc_tools_filterdag_compiler.js",
                // arc_generateFilterDAG: "./arc_tools_filterdag_factory.js"
	        arc_project: "./arc_tools_project.js",
                arc_doc_filter: "./arc_tools_docgen_filter.js"
            },
            main: "arc_tools_lib.js"
        },
        readmeDocumentContent: {
        }
    }
};

