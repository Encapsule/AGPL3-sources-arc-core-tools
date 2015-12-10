
var ARCBUILD = require('./arc_build');

module.exports = function(toolName_) {

    var banner = "**** " +
        "Encapsule/arctools: " + toolName_ +
        " v" + ARCBUILD.version +
        " release \"" + ARCBUILD.codename + "\"" +
        " build \"" + ARCBUILD.buildID + "\" ****";

    return banner;

}
