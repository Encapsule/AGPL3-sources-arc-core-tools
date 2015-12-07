// test-package.js

var assert = require('chai').assert;

var META = require('../../DISTRIBUTION/jbus-common/package.json');

var COMMON = require('../../DISTRIBUTION/jbus-common');

describe("jbus-common top-level package tests:", function() {

    it("The jbus-common module should have loaded.", function() {
        assert.isDefined(COMMON);
        assert.isObject(COMMON);
    });

    require('../shared-tests/runner-package-export-signature')('jbus-common');

    describe("jbus-common.__bundle export namespace tests.", function() {

        it("jbus-common.__bundle should be an object.", function() {
            assert.property(COMMON, '__bundle');
            assert.isObject(COMMON.__bundle);
        });

        it("jbus-common.__bundle.murmurhash should be a function.", function() {
            assert.property(COMMON.__bundle, "murmurhash");
            assert.isFunction(COMMON.__bundle.murmurhash);
        });

        it("jbus.common.__bundle.nodeuuid should be a function.", function() {
            assert.property(COMMON.__bundle, "nodeuuid");
            assert.isFunction(COMMON.__bundle.nodeuuid);
        });

    });

    describe("jbus-common.graph export namespace tests.", function() {

        it("jbus-common.graph should be an object.", function() {
            assert.property(COMMON, 'graph');
            assert.isObject(COMMON.graph);
        });
    });

    describe("jbus-common.identifier export namespace tests.", function() {

        it("jbus-common.identifier should be an object.", function() {
            assert.property(COMMON, 'identifier');
            assert.isObject(COMMON.identifier);
        });

        describe("identifier.murmur3 export namespace tests.", function() {

            it("identifier.murmur3 should be an object.", function() {
                assert.property(COMMON.identifier, 'murmur3');
                assert.isObject(COMMON.identifier.murmur3);
            });

            it("identifier.murmur3.fromUTF8 should be a function.", function() {
                assert.property(COMMON.identifier.murmur3, 'fromUTF8');
                assert.isFunction(COMMON.identifier.murmur3.fromUTF8);
            });

            it("identifier.murmur3.fromReference should be a function.", function() {
                assert.property(COMMON.identifier.murmur3, 'fromReference');
                assert.isFunction(COMMON.identifier.murmur3.fromReference);
            });

        });

        describe("identifier.irut export namespace tests.", function() {

            it("identifier.irut should be an object.", function() {
                assert.property(COMMON.identifier, 'irut');
                assert.isObject(COMMON.identifier.irut);
            });

            it("identifier.irut.fromEther should be a function.", function() {
                assert.property(COMMON.identifier.irut, 'fromEther');
                assert.isFunction(COMMON.identifier.irut.fromEther);
            });

            it("identifier.irut.fromReference should be a function.", function() {
                assert.property(COMMON.identifier.irut, 'fromReference');
                assert.isFunction(COMMON.identifier.irut.fromReference);
            });

            it("identifier.irut.isIRUT should be a function.", function() {
                assert.property(COMMON.identifier.irut, 'isIRUT');
                assert.isFunction(COMMON.identifier.irut.isIRUT);
            });
            
        });

    });

    describe("jbus-common.util export namespace tests.", function() {

        it("jbus-common.util should be an object.", function() {
            assert.property(COMMON, 'util');
            assert.isObject(COMMON.util);
        });

        it("util.clone should be a function.", function() {
            assert.property(COMMON.util, 'clone');
            assert.isFunction(COMMON.util.clone);
        });

        it("util.dictionaryLength should be a function.", function() {
            assert.property(COMMON.util, 'dictionaryLength');
            assert.isFunction(COMMON.util.dictionaryLength);
        });

        it("util.getEpochTime should a function.", function() {
            assert.property(COMMON.util, 'getEpochTime');
            assert.isFunction(COMMON.util.getEpochTime);
        });

    });

    describe("jbus-common.types export namespace tests.", function() {

        it("jbus-common.types should be an object.", function() {
            assert.property(COMMON, 'types');
            assert.isObject(COMMON.types);
        });

        it("types.codes should be an object.", function() {
            assert.property(COMMON.types, 'codes');
            assert.isObject(COMMON.types.codes);
        });

        it("types.convert should be a function.", function() {
            assert.property(COMMON.types, 'convert');
            assert.isFunction(COMMON.types.convert);
        });

        describe("types.check export namespace tests.", function() {

            it("types.check should be an object.", function() {
                assert.property(COMMON.types, 'check');
                assert.isObject(COMMON.types.check);
            });

            it("types.check.inTypeSet should be a function.", function() {
                assert.property(COMMON.types.check, 'inTypeSet');
                assert.isFunction(COMMON.types.check.inTypeSet);
            });

            it("types.check.isJSON should be a function.", function() {
                assert.property(COMMON.types.check, 'isJSON');
                assert.isFunction(COMMON.types.check.isJSON);
            });

        });

    });

});

