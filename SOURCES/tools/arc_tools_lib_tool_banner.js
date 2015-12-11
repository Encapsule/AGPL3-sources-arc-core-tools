
var chalk = require('chalk');
var ARCBUILD = require('./arc_build');

module.exports = function(toolName_) {

    var banner = "**** " +
        "Encapsule/arctools::" +
	chalk.white(toolName_) +
        " v" + ARCBUILD.version +
        " release \"" + chalk.yellow(ARCBUILD.codename) + "\"" +
        " build \"" + chalk.yellow(ARCBUILD.buildID) + "\" ****";

    return banner;

}
