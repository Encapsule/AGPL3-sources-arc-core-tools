// Encapsule/jsgraph/test/test-digraph-algorithm-dft.js


var assert = require('chai').assert;
var testModule = require('./module-under-test');
var DirectedGraph = testModule('arc_core_digraph').DirectedGraph;
var testDFT = require('./fixture/test-runner-digraph-algorithm-dft');



testDFT({ testName: "Missing request", validConfig: false,
           expectedResults: {
               error: 'jsgraph.directed.depthFirstTraverse algorithm failure: Missing request object ~. Found type \'[object Undefined]\'.',
               result: null,
               path: null
           }});

testDFT({ testName: "Bad request type", validConfig: false,
           request: "No good",
           expectedResults: {
               error: 'jsgraph.directed.depthFirstTraverse algorithm failure: Missing request object ~. Found type \'[object String]\'.',
               result: null,
               path: null
           }});

testDFT({ testName: "Empty request", validConfig: false,
           request: {}, // also no good
           expectedResults: {
               error: 'jsgraph.directed.depthFirstTraverse algorithm failure: Missing required DirectedGraph reference ~.digraph. Found type \'[object Undefined]\'.',
               result: null,
               path: null
           }});

(function() {
    var digraph = new DirectedGraph();
    testDFT({ testName: "Empty digraph", validConfig: true,
              request: { digraph: digraph, options: { allowEmptyStartVector: true }},
              expectedResults: {
                  error: '',
                  result: '{"searchStatus":"completed","colorMap":{},"undiscoveredMap":{}}',
                  path: '[]'
              }});
})();

(function() {
    var digraph = new DirectedGraph();
    digraph.addVertex({ u: "lone-wolf-vertex" });
    testDFT({ testName: "Single vertex, default starting vertex set (initializeVertex, startVertex, discoverVertex, finishVertex test)", validConfig: true,
               request: { digraph: digraph },
               expectedResults: {
                   error: '',
                   result: '{"searchStatus":"completed","colorMap":{"lone-wolf-vertex":2},"undiscoveredMap":{}}',
                   path: '["0 initializeVertex lone-wolf-vertex","1 startVertex lone-wolf-vertex","2 discoverVertex lone-wolf-vertex at time 1","3 finishVertex lone-wolf-vertex at time 2"]'
               }});
})();

(function() {
    var digraph = new DirectedGraph();
    digraph.addVertex({ u: "lone-wolf-vertex" });
    testDFT({ testName: "Single vertex, starting vertex not in the graph", validConfig: false,
               request: { digraph: digraph, options: { startVector: 'orange'}},
               expectedResults: {
                   error: 'jsgraph.directed.depthFirstTraverse algorithm failure: DFT request failed. Vertex \'orange\' not found in specified directed graph container.',
                   result: '',
                   path: ''
               }});
})();

(function() {
    var digraph = new DirectedGraph();
    digraph.addVertex({ u: "lone-wolf-vertex" });
    testDFT({ testName: "Single vertex, starting vertex specified explicity in request", validConfig: true,
               request: { digraph: digraph, options: { startVector: 'lone-wolf-vertex'}},
               expectedResults: {
                   error: '',
                   result: '{"searchStatus":"completed","colorMap":{"lone-wolf-vertex":2},"undiscoveredMap":{}}',
                   path: '["0 initializeVertex lone-wolf-vertex","1 startVertex lone-wolf-vertex","2 discoverVertex lone-wolf-vertex at time 1","3 finishVertex lone-wolf-vertex at time 2"]'
               }});
})();

(function() {
    var digraph = new DirectedGraph();
    digraph.addEdge({ e: { u: "lone-wolf-vertex", v: "lone-wolf-vertex" }});
    testDFT({ testName: "Single vertex, with an out-edge to itself", validConfig: true,
               request: { digraph: digraph, options: { startVector: 'lone-wolf-vertex'}},
               expectedResults: {
                   error: '',
                   result: '{"searchStatus":"completed","colorMap":{"lone-wolf-vertex":2},"undiscoveredMap":{}}',
                   path: '["0 initializeVertex lone-wolf-vertex","1 startVertex lone-wolf-vertex","2 discoverVertex lone-wolf-vertex at time 1","3 examineEdge [lone-wolf-vertex,lone-wolf-vertex]","4 backEdge [lone-wolf-vertex,lone-wolf-vertex]","5 finishVertex lone-wolf-vertex at time 2","6 finishEdge [lone-wolf-vertex,lone-wolf-vertex]"]'
               }});
})();




(function() {
    var digraph = new DirectedGraph({
        elist: [ { e: { u: 'parent', v: 'child' } } ]
    });

    testDFT({ testName: "Two connected vertices, (treeEdge test)", validConfig: true,
              request: { digraph: digraph },
               expectedResults: {
                   error: '',
                   result: '{"searchStatus":"completed","colorMap":{"parent":2,"child":2},"undiscoveredMap":{}}',
                   path: '["0 initializeVertex parent","1 initializeVertex child","2 startVertex parent","3 discoverVertex parent at time 1","4 examineEdge [parent,child]","5 discoverVertex child at time 2","6 treeEdge [parent,child]","7 finishVertex child at time 3","8 finishVertex parent at time 4","9 finishEdge [parent,child]"]'
               }});
})();

(function() {
    var digraph = new DirectedGraph({
        elist: [
            { e: { u: "A", v: "B" }},
            { e: { u: "B", v: "A" }}
        ]
    });
    testDFT({ testName: "Two inter-connected vertices, (no starting vertex set)", validConfig: true,
              request: { digraph: digraph, options: { allowEmptyStartVector: true }},
               expectedResults: {
                   error: '',
                   result: '{"searchStatus":"completed","colorMap":{"A":0,"B":0},"undiscoveredMap":{"A":true,"B":true}}',
                   path: '["0 initializeVertex A","1 initializeVertex B"]'
               }});
})();

(function() {
    var digraph = new DirectedGraph({
        elist: [
            { e: { u: "A", v: "B" }},
            { e: { u: "B", v: "A" }}
        ]
    });
    testDFT({ testName: "Two inter-connected vertices, (backEdge test)", validConfig: true,
              request: { digraph: digraph, options: { startVector: "A" } },
               expectedResults: {
                   error: '',
                   result: '{"searchStatus":"completed","colorMap":{"A":2,"B":2},"undiscoveredMap":{}}',
                   path: '["0 initializeVertex A","1 initializeVertex B","2 startVertex A","3 discoverVertex A at time 1","4 examineEdge [A,B]","5 discoverVertex B at time 2","6 treeEdge [A,B]","7 examineEdge [B,A]","8 backEdge [B,A]","9 finishVertex B at time 3","10 finishVertex A at time 4","11 finishEdge [A,B]","12 finishEdge [B,A]"]'
               }});
})();

(function() {
    var digraph = new DirectedGraph({
        elist: [
            { e: { u: "A", v: "B" }},
            { e: { u: "B", v: "C" }},
            { e: { u: "A", v: "C" }}
        ]
    });
    testDFT({ testName: "Three vertices, (forwardEdge test)", validConfig: true,
              request: { digraph: digraph, options: { startVector: "A" } },
               expectedResults: {
                   error: '',
                   result: '{"searchStatus":"completed","colorMap":{"A":2,"B":2,"C":2},"undiscoveredMap":{}}',
                   path: '["0 initializeVertex A","1 initializeVertex B","2 initializeVertex C","3 startVertex A","4 discoverVertex A at time 1","5 examineEdge [A,B]","6 examineEdge [A,C]","7 discoverVertex B at time 2","8 treeEdge [A,B]","9 examineEdge [B,C]","10 discoverVertex C at time 3","11 treeEdge [B,C]","12 finishVertex C at time 4","13 finishVertex B at time 5","14 forwardOrCrossEdge [A,C]","15 finishVertex A at time 6","16 finishEdge [A,C]","17 finishEdge [B,C]","18 finishEdge [A,B]"]'
               }});
})();

(function() {
    var digraph = new DirectedGraph({
        elist: [
            { e: { u: "A", v: "B" }},
            { e: { u: "C", v: "B" }}
        ]
    });
    testDFT({ testName: "Three vertices (crossEdge test)", validConfig: true,
              request: { digraph: digraph, options: { startVector: [ "A", "C"] } },
               expectedResults: {
                   error: '',
                   result: '{"searchStatus":"completed","colorMap":{"A":2,"B":2,"C":2},"undiscoveredMap":{}}',
                   path: '["0 initializeVertex A","1 initializeVertex B","2 initializeVertex C","3 startVertex A","4 discoverVertex A at time 1","5 examineEdge [A,B]","6 discoverVertex B at time 2","7 treeEdge [A,B]","8 finishVertex B at time 3","9 finishVertex A at time 4","10 startVertex C","11 discoverVertex C at time 5","12 examineEdge [C,B]","13 forwardOrCrossEdge [C,B]","14 finishVertex C at time 6","15 finishEdge [C,B]","16 finishEdge [A,B]"]'
               }});
})();

(function() {
    // This example is taken from section 22.3 (p. 605) of "Introduction to Algorithms"
    var digraph = new DirectedGraph({
        elist: [
            { e: { u: 'u', v: 'v' } },
            { e: { u: 'v', v: 'y' } },
            { e: { u: 'y', v: 'x' } },
            { e: { u: 'x', v: 'v' } },
            { e: { u: 'u', v: 'x' } },
            { e: { u: 'w', v: 'y' } },
            { e: { u: 'w', v: 'z' } },
            { e: { u: 'z', v: 'z' } }
        ]
    });
    testDFT({ testName: "Intro to Algorithms Figure 23.4 path classification test", validConfig: true,
              request: { digraph: digraph, options: { startVector: [ "w", "u"] } },
               expectedResults: {
                   error: '',
                   result: '{"searchStatus":"completed","colorMap":{"u":2,"v":2,"y":2,"x":2,"w":2,"z":2},"undiscoveredMap":{}}',
                   path: '["0 initializeVertex u","1 initializeVertex v","2 initializeVertex y","3 initializeVertex x","4 initializeVertex w","5 initializeVertex z","6 startVertex w","7 discoverVertex w at time 1","8 examineEdge [w,y]","9 examineEdge [w,z]","10 discoverVertex y at time 2","11 treeEdge [w,y]","12 examineEdge [y,x]","13 discoverVertex x at time 3","14 treeEdge [y,x]","15 examineEdge [x,v]","16 discoverVertex v at time 4","17 treeEdge [x,v]","18 examineEdge [v,y]","19 backEdge [v,y]","20 finishVertex v at time 5","21 finishVertex x at time 6","22 finishVertex y at time 7","23 discoverVertex z at time 8","24 treeEdge [w,z]","25 examineEdge [z,z]","26 backEdge [z,z]","27 finishVertex z at time 9","28 finishVertex w at time 10","29 startVertex u","30 discoverVertex u at time 11","31 examineEdge [u,v]","32 forwardOrCrossEdge [u,v]","33 examineEdge [u,x]","34 forwardOrCrossEdge [u,x]","35 finishVertex u at time 12","36 finishEdge [x,v]","37 finishEdge [u,v]","38 finishEdge [u,x]","39 finishEdge [y,x]","40 finishEdge [w,y]","41 finishEdge [v,y]","42 finishEdge [z,z]","43 finishEdge [w,z]"]'
               }});


    describe("Depth-first traverse termination tests.", function() {

        testDFT({
            testName: "Depth-first terminate on 'initializeVertex'", validConfig: true,
            request: {
                digraph: digraph,
                visitor: {
                    initializeVertex: function (request_) {
                        return (request_.u !== 'w');
                    }
                }
            },
            expectedResults: {
                error: '',
                result: '{"searchStatus":"terminated","colorMap":{"u":0,"v":0,"y":0,"x":0,"w":0,"z":0},"undiscoveredMap":{"u":true,"v":true,"y":true,"x":true,"w":true,"z":true}}',
                path: '["0 initializeVertex u","1 initializeVertex v","2 initializeVertex y","3 initializeVertex x","4 initializeVertex w"]'
            }
        });

        testDFT({
            testName: "Depth-first terminate on 'startVertex'", validConfig: true,
            request: {
                digraph: digraph,
                visitor: {
                    startVertex: function (request_) {
                        return (request_.u !== 'w');
                    }
                }
            },
            expectedResults: {
                error: '',
                result: '{"searchStatus":"terminated","colorMap":{"u":2,"v":2,"y":2,"x":2,"w":0,"z":0},"undiscoveredMap":{"w":true,"z":true}}',
                path: '["0 initializeVertex u","1 initializeVertex v","2 initializeVertex y","3 initializeVertex x","4 initializeVertex w","5 initializeVertex z","6 startVertex u","7 discoverVertex u at time 1","8 examineEdge [u,v]","9 examineEdge [u,x]","10 discoverVertex v at time 2","11 treeEdge [u,v]","12 examineEdge [v,y]","13 discoverVertex y at time 3","14 treeEdge [v,y]","15 examineEdge [y,x]","16 discoverVertex x at time 4","17 treeEdge [y,x]","18 examineEdge [x,v]","19 backEdge [x,v]","20 finishVertex x at time 5","21 finishVertex y at time 6","22 finishVertex v at time 7","23 forwardOrCrossEdge [u,x]","24 finishVertex u at time 8","25 startVertex w"]'
            }
        });

        testDFT({
            testName: "Depth-first terminate on 'discoverVertex'", validConfig: true,
            request: {
                digraph: digraph,
                visitor: {
                    discoverVertex: function (request_) {
                        return (request_.u !== 'y');
                    }
                }
            },
            expectedResults: {
                error: '',
                result: '{"searchStatus":"terminated","colorMap":{"u":1,"v":1,"y":1,"x":0,"w":0,"z":0},"undiscoveredMap":{"x":true,"w":true,"z":true}}',
                path: '["0 initializeVertex u","1 initializeVertex v","2 initializeVertex y","3 initializeVertex x","4 initializeVertex w","5 initializeVertex z","6 startVertex u","7 discoverVertex u at time 1","8 examineEdge [u,v]","9 examineEdge [u,x]","10 discoverVertex v at time 2","11 treeEdge [u,v]","12 examineEdge [v,y]","13 discoverVertex y at time 3"]'
            }
        });

        testDFT({
            testName: "Depth-first terminate on 'examineEdge'", validConfig: true,
            request: {
                digraph: digraph,
                visitor: {
                    examineEdge: function (request_) {
                        return (request_.e.v !== 'v');
                    }
                }
            },
            expectedResults: {
                error: '',
                result: '{"searchStatus":"terminated","colorMap":{"u":1,"v":0,"y":0,"x":0,"w":0,"z":0},"undiscoveredMap":{"v":true,"y":true,"x":true,"w":true,"z":true}}',
                path: '["0 initializeVertex u","1 initializeVertex v","2 initializeVertex y","3 initializeVertex x","4 initializeVertex w","5 initializeVertex z","6 startVertex u","7 discoverVertex u at time 1","8 examineEdge [u,v]"]'
            }
        });

        testDFT({
            testName: "Depth-first terminate on 'treeEdge'", validConfig: true,
            request: {
                digraph: digraph,
                visitor: {
                    examineEdge: function (request_) {
                        return (request_.e.v !== 'v');
                    }
                }
            },
            expectedResults: {
                error: '',
                result: '{"searchStatus":"terminated","colorMap":{"u":1,"v":0,"y":0,"x":0,"w":0,"z":0},"undiscoveredMap":{"v":true,"y":true,"x":true,"w":true,"z":true}}',
                path: '["0 initializeVertex u","1 initializeVertex v","2 initializeVertex y","3 initializeVertex x","4 initializeVertex w","5 initializeVertex z","6 startVertex u","7 discoverVertex u at time 1","8 examineEdge [u,v]"]'
            }
        });

        testDFT({
            testName: "Depth-first terminate on 'treeEdge'", validConfig: true,
            request: {
                digraph: digraph,
                visitor: {
                    treeEdge: function (request_) {
                        return (request_.e.v !== 'v');
                    }
                }
            },
            expectedResults: {
                error: '',
                result: '{"searchStatus":"terminated","colorMap":{"u":1,"v":1,"y":0,"x":0,"w":0,"z":0},"undiscoveredMap":{"y":true,"x":true,"w":true,"z":true}}',
                path: '["0 initializeVertex u","1 initializeVertex v","2 initializeVertex y","3 initializeVertex x","4 initializeVertex w","5 initializeVertex z","6 startVertex u","7 discoverVertex u at time 1","8 examineEdge [u,v]","9 examineEdge [u,x]","10 discoverVertex v at time 2","11 treeEdge [u,v]"]'
            }
        });

        testDFT({
            testName: "Depth-first terminate on 'backEdge'", validConfig: true,
            request: {
                digraph: digraph,
                visitor: {
                    backEdge: function (request_) {
                        return (request_.e.v !== 'v');
                    }
                }
            },
            expectedResults: {
                error: '',
                result: '{"searchStatus":"terminated","colorMap":{"u":1,"v":1,"y":1,"x":1,"w":0,"z":0},"undiscoveredMap":{"w":true,"z":true}}',
                path: '["0 initializeVertex u","1 initializeVertex v","2 initializeVertex y","3 initializeVertex x","4 initializeVertex w","5 initializeVertex z","6 startVertex u","7 discoverVertex u at time 1","8 examineEdge [u,v]","9 examineEdge [u,x]","10 discoverVertex v at time 2","11 treeEdge [u,v]","12 examineEdge [v,y]","13 discoverVertex y at time 3","14 treeEdge [v,y]","15 examineEdge [y,x]","16 discoverVertex x at time 4","17 treeEdge [y,x]","18 examineEdge [x,v]","19 backEdge [x,v]"]'
            }
        });

        testDFT({
            testName: "Depth-first terminate on 'forwardOrCrossEdge'", validConfig: true,
            request: {
                digraph: digraph,
                visitor: {
                    forwardOrCrossEdge: function (request_) {
                        return (request_.e.v !== 'x');
                    }
                }
            },
            expectedResults: {
                error: '',
                result: '{"searchStatus":"terminated","colorMap":{"u":1,"v":2,"y":2,"x":2,"w":0,"z":0},"undiscoveredMap":{"w":true,"z":true}}',
                path: '["0 initializeVertex u","1 initializeVertex v","2 initializeVertex y","3 initializeVertex x","4 initializeVertex w","5 initializeVertex z","6 startVertex u","7 discoverVertex u at time 1","8 examineEdge [u,v]","9 examineEdge [u,x]","10 discoverVertex v at time 2","11 treeEdge [u,v]","12 examineEdge [v,y]","13 discoverVertex y at time 3","14 treeEdge [v,y]","15 examineEdge [y,x]","16 discoverVertex x at time 4","17 treeEdge [y,x]","18 examineEdge [x,v]","19 backEdge [x,v]","20 finishVertex x at time 5","21 finishVertex y at time 6","22 finishVertex v at time 7","23 forwardOrCrossEdge [u,x]"]'
            }
        });

        testDFT({
            testName: "Depth-first terminate on 'finishVertex'", validConfig: true,
            request: {
                digraph: digraph,
                visitor: {
                    finishVertex: function (request_) {
                        return (request_.u !== 'y');
                    }
                }
            },
            expectedResults: {
                error: '',
                result: '{"searchStatus":"terminated","colorMap":{"u":1,"v":1,"y":2,"x":2,"w":0,"z":0},"undiscoveredMap":{"w":true,"z":true}}',
                path: '["0 initializeVertex u","1 initializeVertex v","2 initializeVertex y","3 initializeVertex x","4 initializeVertex w","5 initializeVertex z","6 startVertex u","7 discoverVertex u at time 1","8 examineEdge [u,v]","9 examineEdge [u,x]","10 discoverVertex v at time 2","11 treeEdge [u,v]","12 examineEdge [v,y]","13 discoverVertex y at time 3","14 treeEdge [v,y]","15 examineEdge [y,x]","16 discoverVertex x at time 4","17 treeEdge [y,x]","18 examineEdge [x,v]","19 backEdge [x,v]","20 finishVertex x at time 5","21 finishVertex y at time 6"]'
            }
        });

    });

})();


(function() {

    var digraph = new DirectedGraph({
        vlist: [
            { u: "orange" },
            { u: "cherry" },
            { u: "bannana" },
            { u: "pineapple" },
            { u: "mango" },
            { u: "papaya" },
            { u: "blueberry" },
            { u: "kiwi" },
            { u: "grape" },
            { u: "mellon" }
        ],
        elist: [
            { e: { u: "grape", v: "mellon" } },
            { e: { u: "grape", v: "bannana" } }
        ]
    });

    describe("Depth-first traverse weighted edge tests.", function() {

        testDFT({
            testName: "Depth-first traverse weight-order test #1",
            validConfig: true,
            request: {
                digraph: digraph,
                visitor: {
                    getEdgeWeight: function(request_) {
                        return request_.e.v; // return the head vertex ID string as the weight of the edge
                    },
                    compareEdgeWeights: function(request_) {
                        return ((request_.a > request_.b)?1:(request_.a < request_.b)?-1:0);
                    },
                    discoverVertex: function(request_) {
                        console.log("discover vertex " + request_.u);
                        return true;
                    },
                    finishVertex: function(request_) {
                        console.log("finish vertex " + request_.u);
                        return true;
                    }
                },
                options: { startVector: undefined }
            },
            expectedResults: {
                error: null,
                result: '{"searchStatus":"completed","colorMap":{"orange":2,"cherry":2,"bannana":2,"pineapple":2,"mango":2,"papaya":2,"blueberry":2,"kiwi":2,"grape":2,"mellon":2},"undiscoveredMap":{}}',
                path: '["0 initializeVertex orange","1 initializeVertex cherry","2 initializeVertex bannana","3 initializeVertex pineapple","4 initializeVertex mango","5 initializeVertex papaya","6 initializeVertex blueberry","7 initializeVertex kiwi","8 initializeVertex grape","9 initializeVertex mellon","10 getEdgeWeight [undefined,orange]","11 getEdgeWeight [undefined,cherry]","12 compareEdgeWeights","13 getEdgeWeight [undefined,orange]","14 getEdgeWeight [undefined,pineapple]","15 compareEdgeWeights","16 getEdgeWeight [undefined,pineapple]","17 getEdgeWeight [undefined,mango]","18 compareEdgeWeights","19 getEdgeWeight [undefined,orange]","20 getEdgeWeight [undefined,mango]","21 compareEdgeWeights","22 getEdgeWeight [undefined,cherry]","23 getEdgeWeight [undefined,mango]","24 compareEdgeWeights","25 getEdgeWeight [undefined,pineapple]","26 getEdgeWeight [undefined,papaya]","27 compareEdgeWeights","28 getEdgeWeight [undefined,orange]","29 getEdgeWeight [undefined,papaya]","30 compareEdgeWeights","31 getEdgeWeight [undefined,pineapple]","32 getEdgeWeight [undefined,blueberry]","33 compareEdgeWeights","34 getEdgeWeight [undefined,papaya]","35 getEdgeWeight [undefined,blueberry]","36 compareEdgeWeights","37 getEdgeWeight [undefined,orange]","38 getEdgeWeight [undefined,blueberry]","39 compareEdgeWeights","40 getEdgeWeight [undefined,mango]","41 getEdgeWeight [undefined,blueberry]","42 compareEdgeWeights","43 getEdgeWeight [undefined,cherry]","44 getEdgeWeight [undefined,blueberry]","45 compareEdgeWeights","46 getEdgeWeight [undefined,pineapple]","47 getEdgeWeight [undefined,kiwi]","48 compareEdgeWeights","49 getEdgeWeight [undefined,papaya]","50 getEdgeWeight [undefined,kiwi]","51 compareEdgeWeights","52 getEdgeWeight [undefined,orange]","53 getEdgeWeight [undefined,kiwi]","54 compareEdgeWeights","55 getEdgeWeight [undefined,mango]","56 getEdgeWeight [undefined,kiwi]","57 compareEdgeWeights","58 getEdgeWeight [undefined,cherry]","59 getEdgeWeight [undefined,kiwi]","60 compareEdgeWeights","61 getEdgeWeight [undefined,pineapple]","62 getEdgeWeight [undefined,grape]","63 compareEdgeWeights","64 getEdgeWeight [undefined,papaya]","65 getEdgeWeight [undefined,grape]","66 compareEdgeWeights","67 getEdgeWeight [undefined,orange]","68 getEdgeWeight [undefined,grape]","69 compareEdgeWeights","70 getEdgeWeight [undefined,mango]","71 getEdgeWeight [undefined,grape]","72 compareEdgeWeights","73 getEdgeWeight [undefined,kiwi]","74 getEdgeWeight [undefined,grape]","75 compareEdgeWeights","76 getEdgeWeight [undefined,cherry]","77 getEdgeWeight [undefined,grape]","78 compareEdgeWeights","79 startVertex blueberry","80 discoverVertex blueberry at time 1","81 finishVertex blueberry at time 2","82 startVertex cherry","83 discoverVertex cherry at time 3","84 finishVertex cherry at time 4","85 startVertex grape","86 discoverVertex grape at time 5","87 getEdgeWeight [grape,mellon]","88 getEdgeWeight [grape,bannana]","89 compareEdgeWeights","90 examineEdge [grape,bannana]","91 examineEdge [grape,mellon]","92 discoverVertex bannana at time 6","93 treeEdge [grape,bannana]","94 finishVertex bannana at time 7","95 discoverVertex mellon at time 8","96 treeEdge [grape,mellon]","97 finishVertex mellon at time 9","98 finishVertex grape at time 10","99 startVertex kiwi","100 discoverVertex kiwi at time 11","101 finishVertex kiwi at time 12","102 startVertex mango","103 discoverVertex mango at time 13","104 finishVertex mango at time 14","105 startVertex orange","106 discoverVertex orange at time 15","107 finishVertex orange at time 16","108 startVertex papaya","109 discoverVertex papaya at time 17","110 finishVertex papaya at time 18","111 startVertex pineapple","112 discoverVertex pineapple at time 19","113 finishVertex pineapple at time 20","114 finishEdge [grape,bannana]","115 finishEdge [grape,mellon]"]'
            }
        });

    });

    testDFT({
        testName: "Depth-first traverse weight-order test #1",
        validConfig: true,
        request: {
            digraph: digraph,
            visitor: {
                getEdgeWeight: function(request_) {
                    return request_.e.v; // return the head vertex ID string as the weight of the edge
                },
                compareEdgeWeights: function(request_) {
                    return (-1 * ((request_.a > request_.b)?1:(request_.a < request_.b)?-1:0));
                },
                discoverVertex: function(request_) {
                    console.log("discover vertex " + request_.u);
                    return true;
                },
                finishVertex: function(request_) {
                    console.log("finish vertex " + request_.u);
                    return true;
                }
            },
            options: { startVector: undefined }
        },
        expectedResults: {
            error: null,
            result: '{"searchStatus":"completed","colorMap":{"orange":2,"cherry":2,"bannana":2,"pineapple":2,"mango":2,"papaya":2,"blueberry":2,"kiwi":2,"grape":2,"mellon":2},"undiscoveredMap":{}}',
            path: '["0 initializeVertex orange","1 initializeVertex cherry","2 initializeVertex bannana","3 initializeVertex pineapple","4 initializeVertex mango","5 initializeVertex papaya","6 initializeVertex blueberry","7 initializeVertex kiwi","8 initializeVertex grape","9 initializeVertex mellon","10 getEdgeWeight [undefined,orange]","11 getEdgeWeight [undefined,cherry]","12 compareEdgeWeights","13 getEdgeWeight [undefined,cherry]","14 getEdgeWeight [undefined,pineapple]","15 compareEdgeWeights","16 getEdgeWeight [undefined,orange]","17 getEdgeWeight [undefined,pineapple]","18 compareEdgeWeights","19 getEdgeWeight [undefined,cherry]","20 getEdgeWeight [undefined,mango]","21 compareEdgeWeights","22 getEdgeWeight [undefined,orange]","23 getEdgeWeight [undefined,mango]","24 compareEdgeWeights","25 getEdgeWeight [undefined,cherry]","26 getEdgeWeight [undefined,papaya]","27 compareEdgeWeights","28 getEdgeWeight [undefined,mango]","29 getEdgeWeight [undefined,papaya]","30 compareEdgeWeights","31 getEdgeWeight [undefined,orange]","32 getEdgeWeight [undefined,papaya]","33 compareEdgeWeights","34 getEdgeWeight [undefined,pineapple]","35 getEdgeWeight [undefined,papaya]","36 compareEdgeWeights","37 getEdgeWeight [undefined,cherry]","38 getEdgeWeight [undefined,blueberry]","39 compareEdgeWeights","40 getEdgeWeight [undefined,blueberry]","41 getEdgeWeight [undefined,kiwi]","42 compareEdgeWeights","43 getEdgeWeight [undefined,cherry]","44 getEdgeWeight [undefined,kiwi]","45 compareEdgeWeights","46 getEdgeWeight [undefined,mango]","47 getEdgeWeight [undefined,kiwi]","48 compareEdgeWeights","49 getEdgeWeight [undefined,blueberry]","50 getEdgeWeight [undefined,grape]","51 compareEdgeWeights","52 getEdgeWeight [undefined,cherry]","53 getEdgeWeight [undefined,grape]","54 compareEdgeWeights","55 getEdgeWeight [undefined,kiwi]","56 getEdgeWeight [undefined,grape]","57 compareEdgeWeights","58 startVertex pineapple","59 discoverVertex pineapple at time 1","60 finishVertex pineapple at time 2","61 startVertex papaya","62 discoverVertex papaya at time 3","63 finishVertex papaya at time 4","64 startVertex orange","65 discoverVertex orange at time 5","66 finishVertex orange at time 6","67 startVertex mango","68 discoverVertex mango at time 7","69 finishVertex mango at time 8","70 startVertex kiwi","71 discoverVertex kiwi at time 9","72 finishVertex kiwi at time 10","73 startVertex grape","74 discoverVertex grape at time 11","75 getEdgeWeight [grape,mellon]","76 getEdgeWeight [grape,bannana]","77 compareEdgeWeights","78 examineEdge [grape,mellon]","79 examineEdge [grape,bannana]","80 discoverVertex mellon at time 12","81 treeEdge [grape,mellon]","82 finishVertex mellon at time 13","83 discoverVertex bannana at time 14","84 treeEdge [grape,bannana]","85 finishVertex bannana at time 15","86 finishVertex grape at time 16","87 startVertex cherry","88 discoverVertex cherry at time 17","89 finishVertex cherry at time 18","90 startVertex blueberry","91 discoverVertex blueberry at time 19","92 finishVertex blueberry at time 20","93 finishEdge [grape,mellon]","94 finishEdge [grape,bannana]"]'
        }
    });

})();

