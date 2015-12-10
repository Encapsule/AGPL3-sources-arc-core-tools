
var packageManifests = require('./package_manifests');
var packageREADMEs = require('./package_README');

module.exports = function(request_) {

    var pdb = packageManifests[request_.name];
    if (!pdb) {
        throw new Error("Cannot generate distribution package README.md for unknown package '" + request_.name + "!");
    }

    var buildDate = new Date(request_.buildTime * 1000);
    var buildTimeLong = buildDate.toString();
    var buildYear = buildDate.getFullYear();

    var mddoc = [];
    // Every push is a paragraph on the tail of
    // the markdown document modeled by mddoc.
    mddoc.push("![Encapsule.io](https://encapsule.io/images/blue-burst-encapsule.io-logo-251x64.png \"Encapsule.io\")");

    mddoc.push("# " + request_.author + "/" + request_.name +
	       " v" + request_.version +
	       " \"" + request_.codename + "\"");


    mddoc.push("Build ID \"" + request_.buildID + "\"" +
	       " " + buildTimeLong
	      );
    mddoc.push("[![Join the chat at https://gitter.im/Encapsule/](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/Encapsule/?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)");

    mddoc.push("## Description");
    mddoc.push(pdb.description);

    mddoc.push("## Repo");
    mddoc.push("The contents of this repository is a generated distribution of the " +
	       request_.author + "/" + request_.name + " Node.js package.");
    mddoc.push("Source, tests, and build infrastructure for this work is maintained " +
	       "in a separate repository.");

    mddoc.push("For additional information, please visit [Encapsule.io](https://encapsule.io).");

    mddoc.push("<hr>");
    mddoc.push("Copyright (C) " + buildYear + " Christopher D. Russell");

    return mddoc.join("\n\n");

};
