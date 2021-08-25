// test-package.js

var assert = require('chai').assert;

var testModule = require('./module-under-test');
var CORE = testModule('arc_core');

describe("arc_core top-level package tests:", function() {

    it("The jbus-common module should have loaded.", function() {
        assert.isDefined(CORE);
        assert.isObject(CORE);
    });

    describe("arc_core.__bundle export namespace tests.", function() {

        it("arc_core.__bundle should be an object.", function() {
            assert.property(CORE, '__bundle');
            assert.isObject(CORE.__bundle);
        });

        it("arc_core.__bundle.murmurhash should be a function.", function() {
            assert.property(CORE.__bundle, "murmurhash_js");
            assert.isFunction(CORE.__bundle.murmurhash_js);
        });

        it("arc_core.__bundle.uuid should be an object.", function() {
            assert.property(CORE.__bundle, "uuid");
            assert.isObject(CORE.__bundle.uuid);
        });

    });

    describe("arc_core.graph export namespace tests.", function() {

        it("arc_core.graph should be an object.", function() {
            assert.property(CORE, 'graph');
            assert.isObject(CORE.graph);
        });
    });

    describe("arc_core.identifier export namespace tests.", function() {

        it("arc_core_.identifier should be an object.", function() {
            assert.property(CORE, 'identifier');
            assert.isObject(CORE.identifier);
        });

        describe("arc_core.identifier.hash export namespace tests.", function() {

            it("arc_core.identifier.hash should be an object.", function() {
                assert.property(CORE.identifier, 'hash');
                assert.isObject(CORE.identifier.hash);
            });

            it("arc_core.identifier.murmur3.fromUTF8 should be a function.", function() {
                assert.property(CORE.identifier.hash, 'fromUTF8');
                assert.isFunction(CORE.identifier.hash.fromUTF8);
            });

            it("arc_core.identifier.murmur3.fromReference should be a function.", function() {
                assert.property(CORE.identifier.hash, 'fromReference');
                assert.isFunction(CORE.identifier.hash.fromReference);
            });

        });

        describe("arc_core.identifier.irut export namespace tests.", function() {

            it("arc_core.identifier.irut should be an object.", function() {
                assert.property(CORE.identifier, 'irut');
                assert.isObject(CORE.identifier.irut);
            });

            it("arc_core.identifier.irut.fromEther should be a function.", function() {
                assert.property(CORE.identifier.irut, 'fromEther');
                assert.isFunction(CORE.identifier.irut.fromEther);
            });

            it("arc_core.identifier.irut.fromReference should be a function.", function() {
                assert.property(CORE.identifier.irut, 'fromReference');
                assert.isFunction(CORE.identifier.irut.fromReference);
            });

            it("arc_core.identifier.irut.isIRUT should be a function.", function() {
                assert.property(CORE.identifier.irut, 'isIRUT');
                assert.isFunction(CORE.identifier.irut.isIRUT);
            });

        });

    });

    describe("arc_core.util export namespace tests.", function() {

        it("arc_core.util.util should be an object.", function() {
            assert.property(CORE, 'util');
            assert.isObject(CORE.util);
        });

        it("util.clone should be a function.", function() {
            assert.property(CORE.util, 'clone');
            assert.isFunction(CORE.util.clone);
        });

        it("util.dictionaryLength should be a function.", function() {
            assert.property(CORE.util, 'dictionaryLength');
            assert.isFunction(CORE.util.dictionaryLength);
        });

        it("util.getEpochTime should a function.", function() {
            assert.property(CORE.util, 'getEpochTime');
            assert.isFunction(CORE.util.getEpochTime);
        });

    });

    describe("arc_core.types export namespace tests.", function() {

        it("arc_core.types should be an object.", function() {
            assert.property(CORE, 'types');
            assert.isObject(CORE.types);
        });

        it("arc_core.types.codes should be an object.", function() {
            assert.property(CORE.types, 'codes');
            assert.isObject(CORE.types.codes);
        });

        it("arc_core.types.convert should be a function.", function() {
            assert.property(CORE.types, 'convert');
            assert.isFunction(CORE.types.convert);
        });

        describe("arc_core.types.check export namespace tests.", function() {

            it("types.check should be an object.", function() {
                assert.property(CORE.types, 'check');
                assert.isObject(CORE.types.check);
            });

            it("arc_core.types.check.inTypeSet should be a function.", function() {
                assert.property(CORE.types.check, 'inTypeSet');
                assert.isFunction(CORE.types.check.inTypeSet);
            });

            it("arc_core.types.check.isJSON should be a function.", function() {
                assert.property(CORE.types.check, 'isJSON');
                assert.isFunction(CORE.types.check.isJSON);
            });

        });

    });

});

