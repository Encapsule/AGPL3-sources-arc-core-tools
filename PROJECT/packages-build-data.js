// packages-build-data.js

var packageDatabase = module.exports = {
    "@encapsule/arccore": {
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
                ]
            },
            markdownBody: [
                {
                    heading: "## Contents",
                    markdown: [
                        "Please visit [ARCcore Package Documentation](https://encapsule.io/docs/ARCcore) for more information and detailed developer documentation.",
                        "The following sections provide a short overview of the libraries contained in the `arccore` package."
                    ]
                },

                {
                    heading: "### arccore.filter",
                    markdown: [ "Build self-documenting functions with strong data type and value constraint enforcement provided automatically at runtime." ]
                },

                {
                    heading: "### arccore.discriminator",
                    markdown: ["Register a set of arccore.filter intances to create a \"discriminator\" filter that \"routes\" calls to a specific filter in the set based on the shape of the request." ]
                },

                {
                    heading: "### arccore.graph",
                    markdown: [ "Directed graph container class and algorithms for modeling and analyzing [directed graph](https://en.wikipedia.org/wiki/Directed_graph) datasets in memory." ]
                },

                {
                    heading: "### arccore.identifier",
                    markdown: [ "Generate non-cryptographic object signatures and random keys in 6-character (32-bit) and 22-character (128-bit) Internet Routable Unique Token (IRUT) string format." ]
                },

                {
                    heading: "### arccore.types",
                    markdown: [ "A collection of functions for testing and comparing the type of in-memory entities." ]
                },

                {
                    heading: "### arccore.util",
                    markdown: [ "A collection of utility functions used primarily by other libraries contained in the arccore package." ]
                }

            ]
        }
    },
    "@encapsule/arctools": {
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
                // arc_compileFilterDAG: "./arc_tools_filterdag_compiler.js",
                // arc_generateFilterDAG: "./arc_tools_filterdag_factory.js",
	        arc_project: "./arc_tools_project.js",
                arc_doc_filter: "./arc_tools_docgen_filter.js"
            },
            main: "arc_tools_lib.js"
        },
        readmeDocumentContent: {
            summaryDescriptor: {
                markdown: [
                    "This package contains experimental (i.e. undocumented) tools that are _optional_ - you do not need to install this package to work with the `arccore` package."
                ]
            },
            markdownBody: [
                {
                    heading: "## Contents",
                    markdown: [
                        "Installing the `arctools` package globally as above will register `arc_generateIRUT`, `arc_doc_filter`, and experimental `arc_project` executables " +
                            "available at the shell prompt. Or, in automation environments (e.g. make).",
                        "Use the `--help` option to get going:",
                        "```\n$ arc_generateIRUT --help\n```"
                    ]
                }
            ]
        }
    }
};

