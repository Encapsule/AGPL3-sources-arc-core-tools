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

    // Here we initialize a small digraph w/vertex labels (id's) that we can easily alpha sort in-our-heads by inspection in order to audit DFT's integration w/getEdgeWeight/compareEdgeWeights.

    var digraph = new DirectedGraph({
        vlist: [
            { u: "A" }, // root vertex
            { u: "B" }, // root vertex
            { u: "X" }, // leaf vertex
            { u: "Y" }, // leaf vertex
            { u: "Z" }, // leaf vertex
        ],
        elist: [
            { e: { u: "A", v: "X" } },
            { e: { u: "A", v: "Y" } },
            { e: { u: "A", v: "Z" } }
        ]
    });

    function getEdgeWeight(request_) {
        return request_.e.v; // return the head vertex ID string as the weight of the edge
    }

    function compareEdgeWeights(request_) {
        return ((request_.a > request_.b)?1:(request_.a < request_.b)?-1:0);
    }


    describe("Depth-first traverse weighted edge tests.", function() {

        testDFT({
            testName: "Depth-first traverse weight-order test #1 (normal alpha sort on head vertex ID)",
            validConfig: true,
            request: {
                digraph: digraph,
                visitor: {
                    getEdgeWeight: getEdgeWeight,
                    compareEdgeWeights: compareEdgeWeights,
                },
                options: { startVector: undefined }
            },
            expectedResults: {
                error: null,
                result: '{"searchStatus":"completed","colorMap":{"A":2,"B":2,"X":2,"Y":2,"Z":2},"undiscoveredMap":{}}',
                path: '["0 initializeVertex A","1 initializeVertex B","2 initializeVertex X","3 initializeVertex Y","4 initializeVertex Z","5 getEdgeWeight [undefined,B]","6 getEdgeWeight [undefined,A]","7 compareEdgeWeights [B,A]","8 startVertex A","9 discoverVertex A at time 1","10 getEdgeWeight [A,Y]","11 getEdgeWeight [A,X]","12 compareEdgeWeights [Y,X]","13 getEdgeWeight [A,Z]","14 getEdgeWeight [A,Y]","15 compareEdgeWeights [Z,Y]","16 examineEdge [A,X]","17 examineEdge [A,Y]","18 examineEdge [A,Z]","19 discoverVertex X at time 2","20 treeEdge [A,X]","21 finishVertex X at time 3","22 discoverVertex Y at time 4","23 treeEdge [A,Y]","24 finishVertex Y at time 5","25 discoverVertex Z at time 6","26 treeEdge [A,Z]","27 finishVertex Z at time 7","28 finishVertex A at time 8","29 startVertex B","30 discoverVertex B at time 9","31 finishVertex B at time 10","32 finishEdge [A,X]","33 finishEdge [A,Y]","34 finishEdge [A,Z]"]'
            }
        });

    });

    testDFT({
        testName: "Depth-first traverse weight-order test #2 (reverse alpha sort on head vertex ID)",
        validConfig: true,
        request: {
            digraph: digraph,
            visitor: {
                getEdgeWeight: getEdgeWeight,
                compareEdgeWeights: function(request_) {
                    return (-1 * compareEdgeWeights(request_));
                }
            },
            options: { startVector: undefined }
        },
        expectedResults: {
            error: null,
            result: '{"searchStatus":"completed","colorMap":{"A":2,"B":2,"X":2,"Y":2,"Z":2},"undiscoveredMap":{}}',
            path: '["0 initializeVertex A","1 initializeVertex B","2 initializeVertex X","3 initializeVertex Y","4 initializeVertex Z","5 getEdgeWeight [undefined,B]","6 getEdgeWeight [undefined,A]","7 compareEdgeWeights [B,A]","8 startVertex B","9 discoverVertex B at time 1","10 finishVertex B at time 2","11 startVertex A","12 discoverVertex A at time 3","13 getEdgeWeight [A,Y]","14 getEdgeWeight [A,X]","15 compareEdgeWeights [Y,X]","16 getEdgeWeight [A,Z]","17 getEdgeWeight [A,Y]","18 compareEdgeWeights [Z,Y]","19 examineEdge [A,Z]","20 examineEdge [A,Y]","21 examineEdge [A,X]","22 discoverVertex Z at time 4","23 treeEdge [A,Z]","24 finishVertex Z at time 5","25 discoverVertex Y at time 6","26 treeEdge [A,Y]","27 finishVertex Y at time 7","28 discoverVertex X at time 8","29 treeEdge [A,X]","30 finishVertex X at time 9","31 finishVertex A at time 10","32 finishEdge [A,Z]","33 finishEdge [A,Y]","34 finishEdge [A,X]"]'
        }
    });

})();

