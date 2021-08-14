// packages-build-data.js

var packageDatabase = module.exports = {
    "@encapsule/arccore": {
        packageType: "library",
        browserSafe: true,
        packageManifestFields: {
            description: "Encapsule Project Addressable Resource Cell (ARC) core algorithms runtime library package.",
            keywords: "Encapsule, ARC, filter, discriminator, graph, identifier, types, data, schema, algorithm, runtime.",
            main: "arc_core_lib.js"
        },
        readmeDocumentContent: {
            summaryDescriptor: {
                heading: "# Overview",
                markdown: [
                    "> **[ARCcore Runtime Documentation](https://encapsule.io/docs/ARCcore)**",
                    "The `@encapsule/arccore` package contains runtime algorithms for schematizing, filtering, routing, and modeling strongly-typed in-memory data within Node.js and HTML5 services runtimes implemented in JavaScript."
                ]

            },
            markdownBody: [
                {
                    heading: "# Runtime Libraries",
                    markdown: []
                },

                {
                    heading: "## ARCcore.filter",
                    markdown: [
                        "> **[ARCcore.filter Documentation](https://encapsule.io/docs/ARCcore/filter)**",
                        "Build self-documenting functions with strong data type and value constraint enforcement provided automatically at runtime."
                    ]
                },

                {
                    heading: "## ARCcore.discriminator",
                    markdown: [
                        "> **[ARCcore.discriminator Documentation](https://encapsule.io/docs/ARCcore/discriminator)**",
                        "Register a set of ARCcore.filter intances to create a \"discriminator\" filter that \"routes\" calls to a specific filter in the set based on the shape of the request."
                    ]
                },

                {
                    heading: "## ARCcore.graph",
                    markdown: [
                        "> **[ARCcore.graph Documentation](https://encapsule.io/docs/ARCcore/graph)**",
                        "Directed graph container class and algorithms for modeling and analyzing [directed graph](https://en.wikipedia.org/wiki/Directed_graph) datasets in memory."
                    ]
                },

                {
                    heading: "## ARCcore.identifier",
                    markdown: [
                        "> **[ARCcore.identifier Documentation](https://encapsule.io/docs/ARCcore/identifier)**",
                        "Generate non-cryptographic object signatures and random keys in 6-character (32-bit) and 22-character (128-bit) Internet Routable Unique Token (IRUT) string format.",
                    ]
                },

                {
                    heading: "## ARCcore.types",
                    markdown: [
                        "> **[ARCcore.types Documentation](https://encapsule.io/docs/ARCcore/types)**",
                        "A collection of functions for testing and comparing the type of in-memory entities.",
                    ]
                },

                {
                    heading: "## ARCcore.util",
                    markdown: [
                        "> **[ARCcore.util Documentation](https://encapsule.io/docs/ARCcore/identifier)**",
                        "A collection of utility functions used primarily by other libraries contained in the arccore package."
                    ]
                },

                {
                    heading: "# Release Notes",
                    markdown: []
                },

                {
                    heading: "## v0.2.01-firestorm",
                    markdown: [
                        [
                            "- Rebuild and test on Node.js v16.6.1.",
                            "- Update all build and runtime dependency packages to latest versions."
                        ].join("\n")
                    ]
                }

            ]
        }
    },
    "@encapsule/arctools": {
        packageType: "tools",
        browserSafe: false,
        packageManifestFields: {
            preferGlobal: true,
            description: "@encapsule/arctools contains a small collection of command-line utilities derived from the @encapsule/arccore package.",
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
                    "This package contains experimental (i.e. undocumented) tools that are _optional_.",
                    "You do not need to install this package to work with the `@encapsule/arccore` package."
                ]
            },
            markdownBody: [
                {
                    heading: "# Tools",
                    markdown: []
                },
                {
                    heading: "## arc_generateIRUT",
                    markdown: [
                        "Command line utilty that generates and array of v4 UUID encoded as 22-character Internet Routable Unique Token (IRUT) strings.",
                        "```",
                        "$ arc_generateIRUT",
                        "```",
                    ].join("")
                }
            ]
        }
    }
};

