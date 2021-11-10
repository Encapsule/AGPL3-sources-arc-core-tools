// test-package.js

var assert = require('chai').assert;

var testModule = require('./module-under-test');
var CORE = testModule('arc_core');

describe("arc_core top-level package tests:", function() {

    it("The @encapsule/arccore module should have loaded.", function() {
        assert.isDefined(CORE);
        assert.isObject(CORE);
    });

    // Check export object "bundle"

    describe("arc_core.__bundle export namespace tests.", function() {

        it("@encapsule/arccore.__bundle should be an object.", function() {
            assert.property(CORE, '__bundle');
            assert.isObject(CORE.__bundle);
        });

        it("@encapsule/arccore.__bundle.murmurhash should be a function.", function() {
            assert.property(CORE.__bundle, "murmurhash_js");
            assert.isFunction(CORE.__bundle.murmurhash_js);
        });

        it("@encapsule/arccore.__bundle.uuid should be an object.", function() {
            assert.property(CORE.__bundle, "uuid");
            assert.isObject(CORE.__bundle.uuid);
        });

    });

    // Check export object "discriminator"

    describe("@encapsule/arccore.discrminator export namespace tests.", function() {
        it("@encapsule/arccore.discrminator should be an object.", function() {
            assert.property(CORE, 'discriminator');
            assert.isObject(CORE.discriminator);
        });
    });

    // Check export object "discriminator2"

    describe("@encapsule/arccore.discrminator2 export namespace tests.", function() {
        it("@encapsule/arccore.discrminator2 should be an object.", function() {
            assert.property(CORE, 'discriminator2');
            assert.isObject(CORE.discriminator2);
        });
    });

    // Check export object "graph"

    describe("@encapsule/arccore.graph export namespace tests.", function() {
        it("@encapsule/arccore.graph should be an object.", function() {
            assert.property(CORE, 'graph');
            assert.isObject(CORE.graph);
        });
    });

    // Check export object "identifier"

    describe("@encapsule/arccore.identifier export namespace tests.", function() {

        it("@encapsule/arccore_.identifier should be an object.", function() {
            assert.property(CORE, 'identifier');
            assert.isObject(CORE.identifier);
        });

        describe("@encapsule/arccore.identifier.hash export namespace tests.", function() {

            it("@encapsule/arccore.identifier.hash should be an object.", function() {
                assert.property(CORE.identifier, 'hash');
                assert.isObject(CORE.identifier.hash);
            });

            it("@encapsule/arccore.identifier.murmur3.fromUTF8 should be a function.", function() {
                assert.property(CORE.identifier.hash, 'fromUTF8');
                assert.isFunction(CORE.identifier.hash.fromUTF8);
            });

            it("@encapsule/arccore.identifier.murmur3.fromReference should be a function.", function() {
                assert.property(CORE.identifier.hash, 'fromReference');
                assert.isFunction(CORE.identifier.hash.fromReference);
            });

        });

        describe("@encapsule/arccore.identifier.irut export namespace tests.", function() {

            it("@encapsule/arccore.identifier.irut should be an object.", function() {
                assert.property(CORE.identifier, 'irut');
                assert.isObject(CORE.identifier.irut);
            });

            it("@encapsule/arccore.identifier.irut.fromEther should be a function.", function() {
                assert.property(CORE.identifier.irut, 'fromEther');
                assert.isFunction(CORE.identifier.irut.fromEther);
            });

            it("@encapsule/arccore.identifier.irut.fromReference should be a function.", function() {
                assert.property(CORE.identifier.irut, 'fromReference');
                assert.isFunction(CORE.identifier.irut.fromReference);
            });

            it("@encapsule/arccore.identifier.irut.isIRUT should be a function.", function() {
                assert.property(CORE.identifier.irut, 'isIRUT');
                assert.isFunction(CORE.identifier.irut.isIRUT);
            });

        });

    });

    // Check export object "util"

    describe("@encapsule/arccore.util export namespace tests.", function() {

        it("@encapsule/arccore.util.util should be an object.", function() {
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

    // Check export object "types"

    describe("@encapsule/arccore.types export namespace tests.", function() {

        it("@encapsule/arccore.types should be an object.", function() {
            assert.property(CORE, 'types');
            assert.isObject(CORE.types);
        });

        it("@encapsule/arccore.types.codes should be an object.", function() {
            assert.property(CORE.types, 'codes');
            assert.isObject(CORE.types.codes);
        });

        it("@encapsule/arccore.types.convert should be a function.", function() {
            assert.property(CORE.types, 'convert');
            assert.isFunction(CORE.types.convert);
        });

        describe("@encapsule/arccore.types.check export namespace tests.", function() {

            it("types.check should be an object.", function() {
                assert.property(CORE.types, 'check');
                assert.isObject(CORE.types.check);
            });

            it("@encapsule/arccore.types.check.inTypeSet should be a function.", function() {
                assert.property(CORE.types.check, 'inTypeSet');
                assert.isFunction(CORE.types.check.inTypeSet);
            });

            it("@encapsule/arccore.types.check.isJSON should be a function.", function() {
                assert.property(CORE.types.check, 'isJSON');
                assert.isFunction(CORE.types.check.isJSON);
            });

        });

    });

});

