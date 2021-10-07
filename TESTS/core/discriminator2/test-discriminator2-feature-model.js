
(function() {

    const testModule = require("./module-under-test");
    const FILTERLIB = testModule("arc_core_filter");

    const testFeaturesFactory = require("./harness-discriminator2-feature-model-factory-filter");


    //
    /*
      jsNumber
      A
    */

    testFeaturesFactory({
        testID: "P6WYyQZVRfWNV0ejqwVqAg",
        testName: "Single Filter Accepts Number Baseline",
        testDescriptor: "Single filter accepts a required number.",
        testRequest: {
            id: "P6WYyQZVRfWNV0ejqwVqAg",
            name: "test",
            description: "test",
            filters: [
                FILTERLIB.create({ operationID: "W9WYUw7BTe-pi3Ru-aBOJA", inputFilterSpec: { ____accept: "jsNumber" } }).result
            ]
        }
    });

    /*
      jsNumber
      A
      B
    */

    testFeaturesFactory({
        testID: "c_qR76X6RzqxTjiEux93qw",
        testName: "Two Filters Collision on jsNumber",
        testDescription: "Deliberately make it impossible to determine if a request is intended for one or the other filter.",
        testRequest: {
            id: "c_qR76X6RzqxTjiEux93qw",
            name: "test",
            description: "test",
            filters: [
                FILTERLIB.create({ operationID: "dQfVXlOnQnOk5khXVCmsSw", inputFilterSpec: { ____accept: "jsNumber" } }).result,
                FILTERLIB.create({ operationID: "lqVgkDstQ3iK8yem2P82Jw", inputFilterSpec: { ____accept: "jsNumber" } }).result
            ]
        }
    });


    /*
      jsNumber
      A
      B
      C
    */

    testFeaturesFactory({
        testID: "igBpGGlZQxq7iLdlvpSowA",
        testName: "Three Filters Collision on jsNumber",
        testDescription: "Deliberately make it impossible to determine if a request is intended for one or the other filter.",
        testRequest: {
            id: "igBpGGlZQxq7iLdlvpSowA",
            name: "test",
            description: "test",
            filters: [
                FILTERLIB.create({ operationID: "t-tEJFCnRTycL2Z4XZgH5w", inputFilterSpec: { ____accept: "jsNumber" } }).result,
                FILTERLIB.create({ operationID: "xr2R_TlPQVuH5QRLcAa7DQ", inputFilterSpec: { ____accept: "jsNumber" } }).result,
                FILTERLIB.create({ operationID: "1kVzkIbSTbmMULyk-i8Aww", inputFilterSpec: { ____accept: "jsNumber" } }).result
            ]

        }
    });


    /*
      jsNumber jsString
      A        A
      B
      C
      D
    */

    testFeaturesFactory({
        testID: "4obVpKp_R5aO_5ythukj2A",
        testName: "Four Filters Collision on jsNumber w/a Twist 1",
        testDescription: "A variation on jsNumber collision w/four filters.",
        testRequest: {
            id:  "4obVpKp_R5aO_5ythukj2A",
            name: "test",
            description: "test",
            filters: [
                FILTERLIB.create({ operationID: "2H9Ar6I3TtmtMlXURl4WdQ", inputFilterSpec: { ____accept: [ "jsString", "jsNumber" ] } }).result, // twist 1
                FILTERLIB.create({ operationID: "2_PwAunVT4CABhKNE4hiMg", inputFilterSpec: { ____accept: "jsNumber" } }).result,
                FILTERLIB.create({ operationID: "OMSjzbRHT62evzma3UETSQ", inputFilterSpec: { ____accept: "jsNumber" } }).result,
                FILTERLIB.create({ operationID: "pH7p8ifLQq-l-cfR6TvUsA", inputFilterSpec: { ____accept: "jsNumber" } }).result,
            ]
        }

    });


    /*
      jsNumber jsString
      A        A
      B
      C
      D
    */

    testFeaturesFactory({
        testID: "NRTCjz4STv6VdHIgjAX-Ig",
        testName: "Four Filters Collisions on jsNumber w/a Twist 2",
        testDescription: "A variation on jsNumber collision w/four filters.",
        testRequest: {
            id: "NRTCjz4STv6VdHIgjAX-Ig",
            name: "test",
            description: "test",
            filters: [
                FILTERLIB.create({ operationID: "MszGMe3OSWyg8UiJPjA67Q", inputFilterSpec: { ____accept: [ "jsNumber", "jsString" ] } }).result, // twist 2
                FILTERLIB.create({ operationID: "Cbd0ID87SYiTd_IDNyHL4g", inputFilterSpec: { ____accept: "jsNumber" } }).result,
                FILTERLIB.create({ operationID: "A0a97ztXTv2VxjGW_lmFLw", inputFilterSpec: { ____accept: "jsNumber" } }).result,
                FILTERLIB.create({ operationID: "t_ANu7S4TbGe-g4Dl6kbNQ", inputFilterSpec: { ____accept: "jsNumber" } }).result
            ]
        }
    });


    //
    /*
      jsNumber jsString
      A        B
    */

    testFeaturesFactory({
        testID: "CMEeTQptQAadPvxI4BoKtg",
        testName: "Two Filters / Accept Different Value POD Types",
        testDescription: "A case w/two filters. The first accepts a number. The second a string.",
        testRequest: {
            id: "CMEeTQptQAadPvxI4BoKtg",
            name: "test",
            description: "test",
            filters: [
                FILTERLIB.create({ operationID: "_Io7HeBQQ2KEzXxrUdwpUQ", inputFilterSpec: { ____accept: "jsNumber" } }).result,
                FILTERLIB.create({ operationID: "JFKi_2JkQ_mjUBmW6SnWtg" , inputFilterSpec: { ____accept: "jsString" } }).result,
            ]
        }
    });

    

    /*
      jsNull, jsNumber, jsBoolean, jsString
      A       A         B          B
    */

    testFeaturesFactory({
        testID: "QoZ0aWpMQoCrp-8A5zcMRQ",
        testName: "Two Filters / Accept Non-Overlapping POD Type Sets",
        testDescription: "A case w/two filters each accepting non-overlapping set of value types.",
        testRequest: {
            id:  "QoZ0aWpMQoCrp-8A5zcMRQ",
            name: "test",
            description: "test",
            filters: [
                FILTERLIB.create({ operationID: "6Ie8EyYdQZaSfnwMbM6ivg", inputFilterSpec: { ____accept: [ "jsNull", "jsNumber" ] } }).result,
                FILTERLIB.create({ operationID: "KR35F9MHSmazIzbs65CyyQ", inputFilterSpec: { ____accept: [ "jsBoolean", "jsString" ] } } ).result
            ]
        }
    });

    /*
      jsNull, jsNumber, jsBoolean, jsString, jsUndefined
      A       A
              B         B
                                   C         C
    */

    testFeaturesFactory({
        testID: "Z8haMjv3T8y9VQzSDev6wQ",
        testName: "Three POD Filters / Accept Overlapping POD Type Sets",
        testDescription: "A case w/three filters two of which cannot be disambiguated due to shared type constraint definitions.",
        testRequest: {
            id:  "Z8haMjv3T8y9VQzSDev6wQ",
            name: "test",
            description: "test",
            filters: [
                FILTERLIB.create({ operationID: "pMnCB8mISHC36Gt1c0VFlQ", inputFilterSpec: { ____accept: [ "jsNull", "jsNumber" ] } }).result, // force ambiguity on number
                FILTERLIB.create({ operationID: "cw00pj4WRMGzyyQca6ltBw", inputFilterSpec: { ____accept: [ "jsNumber", "jsBoolean" ] } }).result, // force ambiguity on number
                FILTERLIB.create({ operationID: "mPqVG4IFQbiM689QR8Nakg", inputFilterSpec: { ____accept: [ "jsString", "jsUndefined" ] } }).result,
                FILTERLIB.create({ operationID: "HT0jaizpQmagS5FrAvh_UQ", inputFilterSpec: { ____accept: "jsFunction" } }).result
            ]
        }
    });


    /*
      jsDescriptorObject
      A
      B
    */

    testFeaturesFactory({
        testID: "d1Nb3aHPSeaa1muUT4qv_Q",
        testName: "Two Object Accept Filters",
        testDescription: "Two filters that both accept descriptor objects.",
        testRequest: {
            id: "d1Nb3aHPSeaa1muUT4qv_Q",
            name: "test",
            description: "test",
            filters: [
                FILTERLIB.create({ operationID: "uSrH97VlSrKXIYhyO-LewQ", inputFilterSpec: { ____accept: "jsObject" } }).result,
                FILTERLIB.create({ operationID: "eygUYxPoQU2szkDZUZGj2w", inputFilterSpec: { ____accept: "jsObject" } }).result,

            ]
        }
    });


    /*
      isOpaque, jsDescriptorObject
      A
                B
    */

    testFeaturesFactory({
        testID: "lv89Zvc2SomK-QPSJ_QFFw",
        testName: "Accept Object + Opaque Filters",
        testDescription: "Two filters: A accepts opaque value, and B accepts an object.",
        testRequest: {
            id: "lv89Zvc2SomK-QPSJ_QFFw",
            name: "test",
            description: "test",
            filters: [
                FILTERLIB.create({ operationID: "Piqs15cKRY-vupMj9POJhA", inputFilterSpec: { ____opaque: true } }).result,
                FILTERLIB.create({ operationID: "EgTbljXJTy2eWbX84S24Pw", inputFilterSpec: { ____accept: "jsObject" } }).result
            ]
        }
    });


    /*
      jsUndefined, jsDescriptorObject
                   A
      B            B
    */

    testFeaturesFactory({
        testID: "s3Dvc4eQSbmdaj80knDc4A",
        testName: "Accept Object Filters w/One Optional",
        testDescription: "Two filters that both accept descriptor objects. One filter's object is optional.",
        testRequest: {
            id: "s3Dvc4eQSbmdaj80knDc4A",
            name: "test",
            description: "test",
            filters: [
                FILTERLIB.create({ operationID: "A4Dn2NJDShSDu0QN5QQd7A", inputFilterSpec: { ____accept: "jsObject" } }).result,
                FILTERLIB.create({ operationID: "n68PiZG3Rf6G41Wdlr9Usg", inputFilterSpec: { ____accept: [ "jsObject", "jsUndefined" ] } }).result,
            ]
        }
    });


    /*
      isDefaulted, jsDescriptorObject
                   A
      B            B
    */

    testFeaturesFactory({
        testID: "CIfEk9B0T52KWiv4b4H8aQ",
        testName: "Accept Object + Accept Object w/Default Filter Pair",
        testDescription: "Two filters that both accept descriptor objects. One filter's object is defaulted.",
        testRequest: {
            id: "CIfEk9B0T52KWiv4b4H8aQ",
            name: "test",
            description: "test",
            filters: [
                FILTERLIB.create({ operationID: "FcMsfGWFTdinHS2MY2Tn5g", inputFilterSpec: { ____accept: "jsObject" } }).result,
                FILTERLIB.create({ operationID: "B_AUumpxQneXDjEBXwy_5Q", inputFilterSpec: { ____accept: "jsObject", ____defaultValue: {} } }).result,
            ]
        }
    });



    /*
      jsMapObject
      A
      B
    */

    testFeaturesFactory({
        testID: "yyEHaV-PTTmYmL162Z348g",
        testName: "Two Filters That Accept Maps",
        testDescription: "Two filters both that accept maps. Note that map entries are optional; so two maps that both attempt to use the same namespace cannot be discriminated.",
        testRequest: {
            id: "yyEHaV-PTTmYmL162Z348g",
            name: "test",
            description: "test",
            filters: [
                FILTERLIB.create({ operationID: "-SJZxNtdSeOYYMR3uc69AA", inputFilterSpec: { ____types: "jsObject", ____asMap: true, element: { ____accept: "jsNumber" } } } ).result,
                FILTERLIB.create({ operationID: "-XjlfqaIRpqtfl1dpAU21Q", inputFilterSpec: { ____types: "jsObject", ____asMap: true, element: { ____accept: "jsString" } } } ).result
            ]
        }
    });

    /*
      isOpaque, jsMapObject
      A
                B
    */

    testFeaturesFactory({
        testID: "WbpqYXO_SZaZ34gNr8VaOQ",
        testName: "Accept Object + Opaque Filters",
        testDescription: "Two filters: A accepts opaque value, and B accepts an object.",
        testRequest: {
            id: "WbpqYXO_SZaZ34gNr8VaOQ",
            name: "test",
            description: "test",
            filters: [
                FILTERLIB.create({ operationID: "Sn4AvZ-FSgads1OAq1XNXg", inputFilterSpec: { ____opaque: true } }).result,
                FILTERLIB.create({ operationID: "iOf2oBV0S8qW7t0lnN5o0w", inputFilterSpec: { ____types: "jsObject", ____asMap: true, element: { ____accept: "jsString" } } }).result
            ]
        }
    });


    /*
      jsUndefined, jsMapObject
                   A
      B            B
    */

    testFeaturesFactory({
        testID: "wjN5A0iaQO6FZZRyDAeKpA",
        testName: "Two Filters That Accept Maps 1",
        testDescription: "Two filters that each accept maps. One map is optional.",
        testRequest: {
            id: "wjN5A0iaQO6FZZRyDAeKpA",
            name: "test",
            description: "test",
            filters: [
                FILTERLIB.create({ operationID: "u5v4QhIrTxWh9aeqx3s2tA", inputFilterSpec: { ____types: "jsObject", ____asMap: true, element: { ____accept: "jsNumber" } } } ).result,
                FILTERLIB.create({ operationID: "Pq9EtaL2TYekz8lZJfxiFw", inputFilterSpec: { ____types: [ "jsObject", "jsUndefined" ], ____asMap: true, element: { ____accept: "jsNumber" } } } ).result,
            ]
        }
    });


    /*
      isDefaulted, jsMapObject
                   A
      B            B
    */

    testFeaturesFactory({
        testID: "A_EU7WB0TWyRehBIwjWbjA",
        testName: "Two Filters That Accept Maps 2",
        testDescription: "Two filters that each accept maps. One map is defaulted.",
        testRequest: {
            id: "A_EU7WB0TWyRehBIwjWbjA",
            name: "test",
            description: "test",
            filters: [
                FILTERLIB.create({ operationID: "hrn340fPTHqK5r5Ttw0Eog", inputFilterSpec: { ____types: "jsObject", ____asMap: true, element: { ____accept: "jsNumber" } } } ).result,
                FILTERLIB.create({ operationID: "eccSF5GdRCeBxGRCOhPQLA", inputFilterSpec: { ____types: "jsObject", ____asMap: true, ____defaultValue: {}, element: { ____accept: "jsString" }  } } ).result
            ]
        }
    });



    /*
      jsDescriptorObject, jsMapObject
      A
                          B
    */

    testFeaturesFactory({
        testID: "Fj8mhgxSS2Kplg_X4m-9zw",
        testName: "Accept Object + Accept Map Filters",
        testDescription: "Unresolvable case of an object that cannot be discriminated from a map.",
        testRequest: {
            id: "Fj8mhgxSS2Kplg_X4m-9zw",
            name: "test",
            description: "test",
            filters: [
                FILTERLIB.create({ operationID: "DSklY7-XTfOHpNpzCiAFnA", inputFilterSpec: { ____accept: "jsObject" } }).result,
                FILTERLIB.create({ operationID: "uk4BnGf7TseFjlm--yV6fg", inputFilterSpec: { ____types: "jsObject", ____asMap: true, element: { ____accept: "jsNull" } } }).result
            ]
        }
    });

    /*
      ~
      jsObject
      A
      B

      ~.property1
      jsString
      B
    */

    testFeaturesFactory({
        testID: "N-cqYFfsSTKGjZsJFq2qzw",
        testName: "Two Objects Case 3",
        testDescription: "Two filters that both accept descriptor objects. One filter's object defines a property. The other does not.",
        testRequest: {
            id: "N-cqYFfsSTKGjZsJFq2qzw",
            name: "test",
            description: "test",
            filters: [
                FILTERLIB.create({ operationID: "de0B9XsvQC-4fUpYSvRllQ", inputFilterSpec: { ____accept: "jsObject" } }).result,
                FILTERLIB.create({ operationID: "PLiK-cYEQsGrgkXlfDYv4w", inputFilterSpec: { ____types: "jsObject", property1: { ____accept: "jsString" } } } ).result,
            ]
        }
    });

    /*
      ~
      jsObject
      A
      B

      ~.property1
      jsNumber
      A
      B
      */

    testFeaturesFactory({
        testID: "x4GG6wwBSba3pQEoqlolcA",
        testName: "Two Objects Case 4",
        testDescription: "Two filters that both accept descriptor obejects w/single property, same (conflicting) name and type definition.",
        testRequest: {
            id: "x4GG6wwBSba3pQEoqlolcA",
            name: "test",
            description: "test",
            filters: [
                FILTERLIB.create({ operationID: "PG-46ajURRCJE-OfpNFsEQ", inputFilterSpec: { ____types: "jsObject", property1: { ____accept: "jsNumber" } } } ).result,
                FILTERLIB.create({ operationID: "3Ze1w1JZRbOJYrCEZNn8gA", inputFilterSpec: { ____types: "jsObject", property1: { ____accept: "jsNumber" } } } ).result
            ]
        }
    });

    /*
      ~
      jsObject
      A
      B

      ~.property1
      jsNumber, jsString
      A
                B
    */

    testFeaturesFactory({
        testID: "thEOpnjgT2ehJlnkX2ZOdQ",
        testName: "Two Objects Case 5",
        testDescription: "Two filters that both accept descriptor objects w/single, same-name property + disjoint (non-overlapping, unique) type constraint(s).",
        testRequest: {
            id: "thEOpnjgT2ehJlnkX2ZOdQ",
            name: "test",
            description: "test",
            filters: [
                FILTERLIB.create({ operationID: "9pXXheaNQgO9YyyqYAnusA", inputFilterSpec: { ____types: "jsObject", property1: { ____accept: "jsNumber" } } }).result,
                FILTERLIB.create({ operationID: "o2B3jCbRSeaEbary6MIhjQ", inputFilterSpec: { ____types: "jsObject", property1: { ____accept: "jsString" } } } ).result
            ]
        }
    });


    /*
      ~
      jsObject
      A
      B

      ~.property1
      jsNull, jsNumber, jsString
      A       A
      B                 B
     */


    testFeaturesFactory({
        testID: "OUazZqkGS3G62c2KsImz4w",
        testName: "Two Objects Case 6",
        testDescription: "Two filters that both accept descriptor objects w/single same-name property + overlapping (non-unique) type constraint(s).",
        testRequest: {
            id: "OUazZqkGS3G62c2KsImz4w",
            name: "test",
            description: "test",
            filters: [
                FILTERLIB.create({ operationID: "lL7b1oT4Q0CPsAtTQMyIRA", inputFilterSpec: { ____types: "jsObject", property1: { ____accept: [ "jsNull", "jsNumber" ] } } } ).result,
                FILTERLIB.create({ operationID:  "A6E5dItHTzGRCAFMbqBHfA", inputFilterSpec: { ____types: "jsObject", property1: { ____accept: [ "jsNull", "jsString", ] } } } ).result
            ]
        }
    });

    /*
      ~
      jsArray
      A
      B
    */

    testFeaturesFactory({
        testID: "Efzy_d6FRSWo4PJhzpUPiA",
        testName: "Two Filters That Accept Arrays of Numbers",
        testDescription: "Two filters that both accept identical array of numbers.",
        testRequest: {
            id: "Efzy_d6FRSWo4PJhzpUPiA",
            name: "test",
            description: "test",
            filters: [
                FILTERLIB.create({ operationID: "7IhPZu36QcKLxD68qmm8jg", inputFilterSpec: { ____types: "jsArray", element: { ____accept: "jsNumber" } } } ).result,
                FILTERLIB.create({ operationID: "d5obnu3TStyulNuffz-Zjw", inputFilterSpec: { ____types: "jsArray", element: { ____accept: "jsNumber" } } } ).result
            ]
        }
    });


    /*
      ~
      jsDescriptorObject
      A
      B

      ~.propertyA
      jsNumber
      A

      ~.propertyB
      jsNumber
      B
    */

    testFeaturesFactory({
        testID: "PgIA36VvT4uZPfSjeRfwuA",
        testName: "Two Descriptor Objects w/Unique Props",
        testDescrption: "Two filters that each accept different descriptor objects.",
        testRequest: {
            id:  "PgIA36VvT4uZPfSjeRfwuA",
            name: "test",
            description: "test",
            filters: [
                FILTERLIB.create({ operationID: "w_Er_dlQQYCb6_Z57aEr7A", inputFilterSpec: { ____types: "jsObject", propertyA: { ____accept: "jsNumber" } } } ).result,
                FILTERLIB.create({ operationID: "uKxF0ZWORNuSGpQtZcsMhA", inputFilterSpec: { ____types: "jsObject", propertyB: { ____accept: "jsNumber" } } } ).result
            ]
        }
    });


    /*
      ~
      jsDescriptorObject
      A
      B
      C

      ~.mapX
      jsMapObject
      A
      B

      ~.mapY
      jsMapObject
      B
      C

      ~.propertyA
      jsDescriptorObject
      A
      B

      ~.propertyA.subproperty1 // common to A and B
      jsString
      A
      B

      ~.propertyA.subproperty2 // used only by A
      jsNumber
      A

      ~.propertyA.subproperty3 // used only by B
      jsString
      B

      ~.propertyA.subproperty4
      isDefaulted, jsString
      A            A
                   B

      ~.propertyB
      jsNumber, jsString
      A         A
      B

      ~.propertyC
      jsNumber
      C


      ~.propertyD
      jsNumber
      A
      C

    */

    testFeaturesFactory({
        testID: "pb4-BLLKSIyg303KRex8Zg",
        testName: "Complex Test Case 1",
        testDescription: "More complex test case #1.",
        testRequest: {
            id: "pb4-BLLKSIyg303KRex8Zg",
            name: "test",
            description: "test",
            filters: [

                FILTERLIB.create({
                    operationID: "GxEgF5iaRWOTD7CW5XRgAQ",
                    operationName: "Test Filter A",
                    inputFilterSpec: {
                        ____types: "jsObject",
                        mapX: {
                            ____types: "jsObject",
                            ____asMap: true,
                            element: { ____accept: "jsNumber" }
                        },
                        propertyA: {
                            ____types: "jsObject",
                            subproperty1: {
                                ____accept: "jsString"
                            },
                            subproperty2: {
                                ____accept: "jsNumber"
                            },
                            subproperty4: {
                                ____accept: [ "jsNull", "jsString" ]
                            }
                        },
                        propertyB: { ____accept: [ "jsNumber", "jsString" ] },
                        propertyD: { ____accept: "jsNumber" }
                    }
                }).result,

                FILTERLIB.create({
                    operationID: "6Z7y_J7cQc-3iZC6YlNMdQ",
                    operationName: "Test Filter B",
                    inputFilterSpec: {
                        ____types: "jsObject",
                        mapY: {
                            ____types: "jsObject",
                            ____asMap: true,
                            element: { ____accept: "jsNumber" }
                        },
                        propertyA: {
                            ____types: "jsObject",
                            subproperty1: { ____accept: "jsString" },
                            subproperty3: { ____accept: "jsNumber" },
                            subproperty4: { ____accept: "jsString" }
                        },
                        propertyB: { ____accept: "jsNumber" },
                    }
                }).result,

                FILTERLIB.create({
                    operationID: "FkmSSKieTuuUBlRAnoPAqA",
                    operationName: "Test Filter C",
                    inputFilterSpec: {
                        ____types: "jsObject",
                        mapY: {
                            ____types: "jsObject",
                            ____asMap: true,
                            element: { ____accept: "jsNumber" }
                        },
                        propertyC: { ____accept: "jsNumber" },
                        propertyD: { ____accept: "jsNumber" }
                    }
                }).result,


            ]
        }
    });



})();

