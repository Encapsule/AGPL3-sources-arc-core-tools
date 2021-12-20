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

            it("@encapsule/arccore.identifier.hash.fromUTF8 should be a function.", function() {
                assert.property(CORE.identifier.hash, 'murmur32FromUTF8');
                assert.isFunction(CORE.identifier.hash.murmur32FromUTF8);
            });

            it("@encapsule/arccore.identifier.hash.fromReference should be a function.", function() {
                assert.property(CORE.identifier.hash, 'murmur32FromReference');
                assert.isFunction(CORE.identifier.hash.murmur32FromReference);
            });

            it("@encapsule/arccore.identifier.hash.shortIRUTFromMurmur32 shoud be a function.", function() {
                assert.property(CORE.identifier.hash, 'shortIRUTFromMurmur32');
                assert.isFunction(CORE.identifier.hash.shortIRUTFromMurmur32);
            });

            it("@encapsule/arccore.identifier.hash.shortIRUTFromUTF8 should be a function.", function() {
                assert.property(CORE.identifier.hash, 'shortIRUTFromUTF8');
                assert.isFunction(CORE.identifier.hash.shortIRUTFromUTF8);
            });

            it("@encapsule/arccore.identifier.hash.shortIRUTFromReference should be a function.", function() {
                assert.property(CORE.identifier.hash, 'shortIRUTFromReference');
                assert.isFunction(CORE.identifier.hash.shortIRUTFromReference);
            });

        });

        describe("@encapsule/arccore.identifier.irut export namespace tests.", function() {

            it("@encapsule/arccore.identifier.irut should be an object.", function() {
                assert.property(CORE.identifier, 'irut');
                assert.isObject(CORE.identifier.irut);
            });

            // deprecated in v0.3.3-frostlake
            it("@encapsule/arccore.identifier.irut.fromEther should be a function.", function() {
                assert.property(CORE.identifier.irut, 'fromEther');
                assert.isFunction(CORE.identifier.irut.fromEther);
            });

            it("@encapsule/arccore.identifier.irut.longIRUTFromV4UUID should be a function.", function() {
                assert.property(CORE.identifier.irut, 'longIRUTFromV4UUID');
                assert.isFunction(CORE.identifier.irut.longIRUTFromV4UUID);
            });

            // deprecated in v0.3.3-frostlake
            it("@encapsule/arccore.identifier.irut.fromReference should be a function.", function() {
                assert.property(CORE.identifier.irut, 'fromReference');
                assert.isFunction(CORE.identifier.irut.fromReference);
            });

            it("@encapsule/arccore.identifier.irut.longIRUTFromReference should be a function.", function() {
                assert.property(CORE.identifier.irut, 'longIRUTFromReference');
                assert.isFunction(CORE.identifier.irut.longIRUTFromReference);
            });

            // deprecated in v0.3.3-frostlake
            it("@encapsule/arccore.identifier.irut.isIRUT should be a function.", function() {
                assert.property(CORE.identifier.irut, 'isIRUT');
                assert.isFunction(CORE.identifier.irut.isIRUT);
            });

            it("@encapsule/arccore.identifier.irut.longIRUTIsValid should be a function.", function() {
                assert.property(CORE.identifier.irut, 'longIRUTIsValid');
                assert.isFunction(CORE.identifier.irut.longIRUTIsValid);
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

