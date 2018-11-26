
var PATH = require('path');

module.exports = {

    normalizePath: function(path_) {
        var path = path_;
        if (!PATH.isAbsolute(path)) {
            path = PATH.join(process.cwd(), path);
        }
        return PATH.normalize(path);
    }

};
