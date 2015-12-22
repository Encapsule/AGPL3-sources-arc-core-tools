
var assert = require('chai').assert;

var testModule = require('./module-under-test');

var testFilters = require('./runner-test-filters')

var filterArray = [
    testFilters.test1.result,
    testFilters.test3.result
];

var typeDiscriminator = testModule('arc_core_type_discriminator');

var response = typeDiscriminator.request(filterArray);

console.log("ARC core type discriminator filter reponse = '" + JSON.stringify(response,undefined,4) + "'");
