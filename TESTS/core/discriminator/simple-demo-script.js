
var assert = require('chai').assert;

var testModule = require('./module-under-test');

var testFilters = require('./runner-test-filters')

var filterArray = [
    testFilters.test1.result,
    testFilters.test3.result
];

var typeDiscriminator = testModule('arc_core_type_discriminator_factory');

var response = typeDiscriminator.request(filterArray);

console.log("ARC core type discriminator filter reponse = '" + JSON.stringify(response,undefined,4) + "'");

discriminatorFilter = response.result;

testCall = discriminatorFilter.request();
console.log("call #1 result: " + JSON.stringify(testCall, undefined, 4));

testCall = discriminatorFilter.request(5);
console.log("call #2 result: " + JSON.stringify(testCall, undefined, 4));

testCall = discriminatorFilter.request({});
console.log("call #3 result: " + JSON.stringify(testCall, undefined, 4));

testCall = discriminatorFilter.request("what's up, man?");
console.log("call #4 result: " + JSON.stringify(testCall, undefined, 4));


