
var chalk = require('chalk');
var clistyle = require('./arc_tools_lib_cli_styles');
var ARCBUILD = require('./arc_build');

module.exports = function(toolName_) {

    var banner =
	clistyle.banner("**** " +
		        clistyle.bannerAuthor("Encapsule") + "/" +
		        clistyle.bannerPackage("arctools") + ":" +
		        clistyle.bannerToolname(toolName_) +
		        clistyle.bannerVersion(" v" + ARCBUILD.version) + " " +
                        "build " +
                        clistyle.bannerRelease(ARCBUILD.codename) + " " +
                        clistyle.bannerBuild(ARCBUILD.buildID) +
                        " ****");

    return banner;

};
