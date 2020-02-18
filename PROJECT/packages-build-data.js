// packages-build-data.js

var packageDatabase = module.exports = {
    "@encapsule/arccore": {
        packageType: "library",
        browserSafe: true,
        packageManifestFields: {
            description: "This package is a collection of low-level runtime libraries for modeling, filtering, and routing runtime application state data in JavaScript applications.",
            keywords: "Encapsule, ARC, in-memory, functional, holistic, filter, discriminator, routing, MDR, graph, DirectedGraph, data, algorithms, models, modeling, library, RTL, cell, cell processor",
            main: "arc_core_lib.js"
        },
        readmeDocumentContent: {
            summaryDescriptor: {
                markdown: [
                    "The @encapsule/arccore package's main consumers are [@encapsule/arccore](https://github.com/Encapsule/ARCtools) and **[@encapsule/holistic](https://github.com/Encapsule/holistic)** (as well as apps and services derived from the @encapsule/holistic app platform distribution).",
                    "The moniker **ARC** stands for **A**addressable **R**esource **C**ell (ARC) which is an abstraction related to celluar automata systems modeling and disitributed application state management. @encapsule/arccore is a toolkit for building such systems in JavaScript. These topics are further explored in the derived  [@encapsule/holistic](https://github.com/Encapsule/holistic) platform distribution."
                ]
            },
            markdownBody: [
                {
                    heading: "## Contents",
                    markdown: [
                        "The sections below provide a brief summary of the runtime library packages included in the @encapsule/arccore distribution package.",
                        "Please visit **[ARCcore Package Docs](https://encapsule.io/docs/ARCcore)** for complete @encapsule/arccore API documentation.",
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
            description: "ARC stands for Addressable Resource Cell. @encapsule/arctools contains a small collection of command-line utilities derived from @encapsule/arccore. Used primarily by @encapsule/holistic package.",
            keywords: "Encapsule, holistic, filter, discriminator, routing, MDR, graph, DirectedGraph, data, algorithms, models, modeling, library",
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

