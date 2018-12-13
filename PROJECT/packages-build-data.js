// packages-build-data.js

var packageDatabase = module.exports = {
    arccore: {
        packageManifestFields: {
            description: "Encapsule Project Addressable Resource Class (ARC) core runtime data modeling and processing libraries.",
            keywords: "ARC",
            main: "arc_core_lib.js"
        },
        readmeDocumentContent: [
            {
                heading: "# Test Section 1",
                markdown: [
                    "This is line one of content.",
                    "This is line two of content."
                ]
            },
            {
                heading: "## Test Section 2",
                markdown: [
                    "This is line one of content.",
                    "This is line two of content."
                ]
            }
        ]

    },
    arctools: {
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
        readmeDocumentContent: [
            {
                heading: "# Test Section 1",
                markdown: [
                    "This is line one of content.",
                    "This is line two of content."
                ]
            },
            {
                heading: "## Test Section 2",
                markdown: [
                    "This is line one of content.",
                    "This is line two of content."
                ]
            }
        ]
    }
};

