
var assert = require('chai').assert;

var testModule = require('./module-under-test');

var filterArray = [
    testModule('arc_core_filter_dag_create_spec')
];

var typeDiscriminator = testModule('arc_core_type_discriminator');

var response = typeDiscriminator.request(filterArray);

console.log("ARC core type discriminator filter reponse = '" + JSON.stringify(response,undefined,4) + "'");
