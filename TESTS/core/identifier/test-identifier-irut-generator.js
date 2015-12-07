// test-identifier-irut-generator.js
//

var testIRUTGenerator = require('./test-runner-identifier-irut-generator');

testIRUTGenerator({
    testName: "Bad input: Missing input",
    validConfig: false,
    expectedResults: {
        error: 'jbus common identifier IRUT generation failed: Input reference must address top-level data convertible directly to JSON.',
        result: null
    }
});

testIRUTGenerator({
    testName: "Empty object",
    validConfig: true,
    request: {},
    expectedResults: {
        error: null,
        json: 'b29vb9ra2tpPT09PqampqQ'
    }
});

testIRUTGenerator({
    testName: "Empty object with an embedded function",
    validConfig: true,
    request: {
        shouldBeIgnoredByTheHash: function() { console.log("Beware that non-JSON is ignored."); }
    },
    expectedResults: {
        error: null,
        json: 'b29vb9ra2tpPT09PqampqQ'
    }
});

testIRUTGenerator({
    testName: "Empty object with an embedded function",
    validConfig: true,
    request: {
        shouldBeIgnoredByTheHash: function() { console.log("Beware that non-JSON is ignored."); },
        x: 1
    },
    expectedResults: {
        error: null,
        json: '69g3MTFsCRTMOH4G-kRaiA'
    }
});

testIRUTGenerator({
    testName: "Simple object #1",
    validConfig: true,
    request: {
        x: 1
    },
    expectedResults: {
        error: null,
        json: '69g3MTFsCRTMOH4G-kRaiA'
    }
});

testIRUTGenerator({

    testName: "Basic test #1",
    validConfig: true,
    request: "This is a test",
    expectedResults: {
        error: null,
        json: 'ZbmVsX7xDWYwq7_uBUVKmw'
    }
});

testIRUTGenerator({
    testName: "Hash an empty array",
    validConfig: true,
    request: [],
    expectedResults: {
        error: null,
        json: 'zMzMzIWFhYWdnZ2dW1tbWw'
    }
});

testIRUTGenerator({
    testName: "Hash array with a single integer element 1",
    validConfig: true,
    request: [1],
    expectedResults: {
        error: null,
        json: 'u9ZLG6BqUSBxG9QTeOYrJw'
    }
});

testIRUTGenerator({
    testName: "Hash array with a single integer element 2",
    validConfig: true,
    request: [2],
    expectedResults: {
        error: null,
        json: '3fT_gEp4VpzAHr1CBAYDLA'
    }
});

testIRUTGenerator({
    testName: "Hash a bigger composite object",
    validConfig: true,
    request: {
        someVector: [ 1, "blah", "blah", "blah" ],
        someTest: "Tonight I have a very open mind about a very narrow range of subjects.",
        someSubobject: {
            and: "a property!"
        }
    },
    expectedResults: {
        error: null,
        json: '88-1NRkMsmOBvbS9X1zQKQ'
    }
});

testIRUTGenerator({
    testName: "Hash a bigger composite object (minor tweak - test hash stability)",
    validConfig: true,
    request: {
        someVector: [ 1, "blah", "blah", "blah" ],
        someTest: "Tonight I have a very open mind about a very narrow range of subjects.",
        someSubobject: {
            and: "a property"
        }
    },
    expectedResults: {
        error: null,
        json: 'LgDTpqL5_qf7ajg_4ib2SA'
    }
});

testIRUTGenerator({
    testName: "Hash a big composite object way over the 64-character internal min key string size",
    validConfig: true,
    request: {
        someVector: [ 1, "blah", "blah", "blah" ],
        someTest: "Tonight I have a very open mind about a very narrow range of subjects.",
        someSubobject: {
            and: "a property"
        },
        aLongString: "werlgbsdfkvjnsxclvjknwero;gifvljkbsdfvkljhseargo;ihergkljbdflvjkbasdilgruhaelrfguhalfgbuaskljfbaslkjdfbalsjkdbflaskjdfblaskjdfklasjbdflawjkbefjlawjhbfjlashbdflasjkhflaskjdfbaskljdfbaskldjfblkasjbdfklasjbdfklasjbdflaskjbdflkasjbdflkjasbdflkjasbdflkjasbdfkljasbdfkljasbdfkljasbdfklasjbdfkljasbdflkjasbdflkjasbdfkljasbdfkljasbdfkljasbdfkljasbdfklasjbdfklasjbdfkljasbdfklasjbfilqerjbgmzxncvbzmn.xfk;aeirhga;jhv k.asmnvla.fgoqeajdfnvzx.cvnqeilukrghfz"
    },
    expectedResults: {
        error: null,
        json: 'Y_hqsggJXd-qX4Pnh7aYQw'
    }
});

testIRUTGenerator({
    testName: "Hash a big composite object (touch the head)",
    validConfig: true,
    request: {
        someVector: [ 2, "blah", "blah", "blah" ],
        someTest: "Tonight I have a very open mind about a very narrow range of subjects.",
        someSubobject: {
            and: "a property"
        },
        aLongString: "werlgbsdfkvjnsxclvjknwero;gifvljkbsdfvkljhseargo;ihergkljbdflvjkbasdilgruhaelrfguhalfgbuaskljfbaslkjdfbalsjkdbflaskjdfblaskjdfklasjbdflawjkbefjlawjhbfjlashbdflasjkhflaskjdfbaskljdfbaskldjfblkasjbdfklasjbdfklasjbdflaskjbdflkasjbdflkjasbdflkjasbdflkjasbdfkljasbdfkljasbdfkljasbdfklasjbdfkljasbdflkjasbdflkjasbdfkljasbdfkljasbdfkljasbdfkljasbdfklasjbdfklasjbdfkljasbdfklasjbfilqerjbgmzxncvbzmn.xfk;aeirhga;jhv k.asmnvla.fgoqeajdfnvzx.cvnqeilukrghfz"
    },
    expectedResults: {
        error: null,
        json: '0PhqsmMJXd9TX4Pn7LaYQw'
    }
});
