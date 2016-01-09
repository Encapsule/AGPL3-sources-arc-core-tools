
var ARCTOOLSLIB = require('./arc_tools_lib');
var FILELOADER = ARCTOOLSLIB.jsrcFileLoaderSync;
var DOCGENFILTER = ARCTOOLSLIB.filterDocGenerate;

var loaderResponse = FILELOADER.request('./templates/filter.hbs');
if (loaderResponse.error) {
    console.error(loaderResponse.error);
    throw new Error(loaderResponse.error);
}

var filterResponse = DOCGENFILTER.request({
    filter: DOCGENFILTER,
    template: loaderResponse.result.resource
});

console.log(filterResponse.result);



