const arccore = require("./BUILD/stage02/arccore/arc_core");

let response = arccore.graph.directed.create({
    name: "Test Digraph Edge Weight #1",
    description: "A quick test of BFT with edge weighting.",
    vlist: [
        { u: "apple" },
        { u: "orange" },
        { u: "pineapple" },
        { u: "cherry" },
        { u: "mango" },
        { u: "pear" },
        { u: "blueberry" },
        { u: "tangerine" }
    ],
    elist: [
        { e: { u: "cherry", v: "pear" } },
        { e: { u: "cherry", v: "blueberry" } }
    ]
});

if (response.error) {
    throw new Error(response.error);
}

let digraph = response.result;
console.log(JSON.stringify(digraph));

let vertices = [];


let visitor = {
    getEdgeWeight: function(request_) {
        // If request_.e.u === undefined then request_.u.v is in the startVector set of the BFT.
        // Here we always just use the vertex ID of the edge head and return a string.
        // The type here is developer-defined; it can be anything. Whatever you use, your
        // compareEdgeWeights visitor will need to be able to compare two values of that type.
        return request_.e.v;
    },
    compareEdgeWeights: function(request_) {
        return -1 * ((request_.a > request_.b)?1:(request_.a < request_.b)?-1:0);
    },
    finishVertex: function(request_) {
        vertices.push(request_.u);
        return true;
    }

};

response = arccore.graph.directed.breadthFirstTraverse({
    digraph: digraph,
    visitor: visitor
});

console.log(JSON.stringify(response));

console.log(JSON.stringify(vertices));



