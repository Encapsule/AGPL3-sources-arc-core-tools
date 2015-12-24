
var chalk = require('chalk');
var clistyle = require('./arc_tools_lib_cli_styles');
var ARCBUILD = require('./arc_build');

module.exports = function(toolName_) {

    var banner =
	clistyle.bannerEnter(
	    "**** " +
		clistyle.bannerAuthor("Encapsule") + "/" +
		clistyle.bannerPackage("arctools") + "::" +
		clistyle.bannerToolname(toolName_) +
		" v" + ARCBUILD.version +
		" release " + clistyle.bannerRelease(ARCBUILD.codename) + "" +
		" build " + clistyle.bannerBuild(ARCBUILD.buildID) + " ****"
	);

    return banner;

};
