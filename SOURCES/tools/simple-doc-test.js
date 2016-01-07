
var ARCTOOLSLIB = require('./arc_tools_lib');
var DOCGENFILTER = ARCTOOLSLIB.filterDocGenerate;

var docTemplate = "<h1>{{filterDescriptor.operationID}}</h1>";

var filterResponse = DOCGENFILTER.request({
    filter: DOCGENFILTER,
//    template: docTemplate
});

console.log(filterResponse.result);



